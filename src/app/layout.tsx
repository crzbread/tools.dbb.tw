import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FaTools } from "react-icons/fa";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "憨吉的工具站",
  description: "憨吉是隻橘貓，網站佛系維護，應該還是能跑",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-base-100">
          {/* 導航欄 */}
          <div className="navbar bg-base-100 border-b sticky top-0 z-50">
            <div className="container mx-auto">
              <div className="flex-1">
                <Link href="/">
                  <div className="flex items-center gap-2">
                    <FaTools className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">憨吉的工具站</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <main className="flex-1">{children}</main>

          {/* 頁尾 */}
          <footer className="footer footer-center p-6 bg-base-200 text-base-content">
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-6">
                <Link href="/about" className="link link-hover">
                  關於我們
                </Link>
                <Link href="/privacy" className="link link-hover">
                  隱私權政策
                </Link>
              </div>
              <p>© 2025 憨吉的工具站. 版權所有.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
