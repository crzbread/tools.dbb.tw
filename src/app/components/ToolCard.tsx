import React from "react";
import Link from "next/link";

type CardBlockProps = {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  url: string;
};

const CardBlock = ({ tool }: { tool: CardBlockProps }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
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
  );
};
export default CardBlock;
