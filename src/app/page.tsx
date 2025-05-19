import { FaClock, FaHamburger } from "react-icons/fa";
import React from "react";
import AdPlaceholder from "@/app/components/AdPlaceholder";
import ToolCard from "@/app/components/ToolCard";

export default function HomePage() {
  return (
    <>
      {/* 英雄區域 */}
      <div className="bg-base-200 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">憨吉的工具站</h1>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            憨吉是隻橘貓，網站佛系維護，應該還是能跑
          </p>
        </div>
      </div>

      {/* 工具列表 */}
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">工具列表</h2>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <ToolCard tool={tool} key={index} />
          ))}
        </div>
      </div>

      {/* 底部廣告位置 */}
      <AdPlaceholder type={`info`} />
      <AdPlaceholder type={`info`} />
    </>
  );
}

// 示例工具數據
const tools = [
  {
    id: 1,
    name: "時間戳轉換",
    description: "將時間戳轉換為日期時間格式。",
    url: "/timestamp_translator",
    icon: <FaClock className="h-12 w-12 text-primary" />,
  },
  {
    id: 2,
    name: "Subway熱量計算",
    description: "計算Subway熱量。",
    url: "/subway",
    icon: <FaHamburger className="h-12 w-12 text-primary" />,
  },
];
