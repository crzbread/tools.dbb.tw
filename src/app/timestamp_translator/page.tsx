"use client";

import { FaClock } from "react-icons/fa";
import { useState } from "react";

interface HistoryItem {
  timestamp: string;
  timezone: number;
  result: string;
  date: string;
}

export default function TimestampTranslator() {
  const [timestamp, setTimestamp] = useState("");
  const [timezone, setTimezone] = useState(8);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleConvert = () => {
    try {
      // 判斷是秒還是毫秒
      const isMilliseconds = timestamp.length > 10;
      const timestampNum = isMilliseconds
        ? Number(timestamp)
        : Number(timestamp) * 1000;

      // 創建日期對象
      const date = new Date(timestampNum);

      // 檢查是否為有效日期
      if (isNaN(date.getTime())) {
        setResult("無效的時間戳");
        return;
      }

      // 根據選擇的時區調整時間
      date.setHours(date.getHours() + timezone);

      // 格式化日期時間
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      const formattedResult = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      setResult(formattedResult);

      // 添加到歷史紀錄
      const now = new Date();
      const historyDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

      setHistory((prev) =>
        [
          {
            timestamp,
            timezone,
            result: formattedResult,
            date: historyDate,
          },
          ...prev,
        ].slice(0, 10)
      ); // 只保留最近10筆
    } catch (error) {
      setResult(`轉換失敗，請檢查輸入格式 ${error}`);
    }
  };

  // 生成時區選項
  const timezoneOptions = Array.from({ length: 27 }, (_, i) => {
    const offset = 14 - i; // 從 +14 到 -12
    return (
      <option key={offset} value={offset}>
        UTC{offset >= 0 ? "+" : ""}
        {offset}
      </option>
    );
  });

  return (
    <div className="container mx-auto py-8 max-w-[640px]">
      <div className="flex items-center gap-2 mb-8">
        <FaClock className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">時間戳轉換</h1>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">時間戳</span>
            </label>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="請輸入時間戳"
                className="input input-bordered w-full"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleConvert();
                  }
                }}
              />
              <button
                className="btn btn-primary w-full"
                onClick={handleConvert}
              >
                轉換
              </button>
            </div>
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">時區</span>
            </label>
            <select
              className="select select-bordered w-full"
              value={timezone}
              onChange={(e) => setTimezone(Number(e.target.value))}
            >
              {timezoneOptions}
            </select>
          </div>

          <div className="divider">結果</div>

          <div>
            <label className="label">
              <span className="label-text">轉換結果</span>
            </label>
            <input
              type="text"
              readOnly
              className="input input-bordered w-full bg-base-200"
              value={result}
            />
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl mt-8">
        <div className="card-body">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">歷史紀錄</h2>
            <div className="text-sm text-gray-500">
              共 {history.length} 筆記錄
            </div>
          </div>
          <div className="overflow-y-auto max-h-[400px]">
            {history.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <FaClock className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <div>尚無歷史紀錄</div>
              </div>
            ) : (
              <div className="space-y-3">
                {history.map((item, index) => (
                  <HistoryItem key={index} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type HistoryItemProps = {
  timestamp: string;
  date: string;
  result: string;
  timezone: number;
};

// date:
// "2025-03-25 17:33:08"
// result
// :
// "2025-03-21 22:11:34"
// timestamp
// :
// "1742537494978"
// timezone
// :
// 8

const HistoryItem = ({ item }: { item: HistoryItemProps }) => {
  const { date, result, timestamp, timezone } = item;

  const items = [
    { label: "時間戳", value: timestamp },
    { label: "日期", value: result },
    { label: "時區", value: `UTC${timezone >= 0 ? "+" : ""}${timezone}` },
    { label: "查詢時間", value: date },
  ];

  return (
    <div className="p-4 bg-base-200/50 rounded-lg hover:bg-base-200 transition-colors">
      <div className="space-y-2">
        {items.map(({ label, value }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="font-medium">{label}：</span>
            <code className="px-2 py-0.5 rounded text-sm">{value}</code>
          </div>
        ))}
      </div>
    </div>
  );
};
