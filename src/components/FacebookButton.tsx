"use client";

import { useState, ReactNode } from "react";

export default function FacebookButton({ className, children }: { className?: string, children: ReactNode }) {
  const [showReminder, setShowReminder] = useState(false);

  return (
    <>
      <button 
        onClick={() => setShowReminder(true)}
        className={className}
        type="button"
      >
        {children}
      </button>
      
      {showReminder && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowReminder(false)}
        >
          <div 
            className="bg-white dark:bg-slate-900 text-foreground px-8 py-10 rounded-3xl shadow-2xl flex flex-col items-center justify-center max-w-sm w-full border border-slate-200 dark:border-slate-800 transform transition-all scale-100 animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <h3 className="text-3xl font-black mb-3 text-center tracking-wide">密切留意</h3>
            <p className="text-slate-500 dark:text-slate-400 text-center mb-8 font-medium">官方 Facebook 專頁即將推出，<br/>敬請期待！</p>
            <button 
              onClick={() => setShowReminder(false)}
              className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors w-full shadow-lg shadow-primary/30"
            >
              我知道了
            </button>
          </div>
        </div>
      )}
    </>
  );
}
