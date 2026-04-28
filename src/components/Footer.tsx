import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold tracking-tighter text-primary">KAYAJ</span>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              澳洲頂級健康保健品。提升健康，從細胞開始。全港獨家代理。
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">快速連結</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/products/nad-plus" className="text-sm text-slate-500 hover:text-primary transition-colors">
                  核心產品 NAD+
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-slate-500 hover:text-primary transition-colors">
                  所有產品
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">聯絡我們</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://www.facebook.com/hk.observatory/?locale=zh_HK" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-primary transition-colors">
                  Facebook 專頁
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} KAYAJ. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
             <Link href="/admin" className="text-xs text-slate-300 hover:text-slate-500 transition-colors">
               Admin Login
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
