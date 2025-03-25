import { FaClock } from "react-icons/fa";
import Link from "next/link";

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
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <figure className="px-6 pt-6">
                <div className="w-full h-32 bg-base-200 rounded-lg flex items-center justify-center">
                  {tool.icon}
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{tool.name}</h2>
                <p className="text-base-content/70">{tool.description}</p>
                <div className="card-actions justify-end mt-4">
                  <Link
                    href={tool.url}
                    className="btn btn-primary w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    前往使用
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部廣告位置 */}
      <div className="container mx-auto my-6">
        <div className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div>
            <h3 className="font-bold">廣告位置</h3>
            <div className="text-sm">Google Ads 橫幅廣告位置</div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-6">
        <div className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">廣告位置</h3>
            <div className="text-sm">Google Ads 橫幅廣告位置</div>
          </div>
        </div>
      </div>
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
];
