import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-light text-primary-dark text-sm font-semibold mb-6 tracking-wide border border-primary/20">
              全港獨家代理
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              喚醒細胞活力 <br className="hidden md:block"/>
              <span className="gradient-text">NAD+ 逆齡奧秘</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              KAYAJ 澳洲頂級健康保健品，專注細胞級修護。核心產品 NAD+ 助您重啟年輕機體，從根本改善健康狀態，每一天都充滿能量。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/products/nad-plus" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/30 flex items-center justify-center"
              >
                探索 NAD+ 產品 <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                href="/products" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-lg border border-slate-200 dark:border-slate-800 hover:border-primary transition-all flex items-center justify-center"
              >
                查看所有產品
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              src="https://player.vimeo.com/video/846819979?title=0&byline=0&portrait=0" 
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">為什麼選擇 KAYAJ NAD+ ?</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">以科學為基礎，選用最純淨的澳洲原料，為您的健康保駕護航。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-shadow border border-slate-100 dark:border-slate-800">
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-6 text-primary">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">提升能量代謝</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                NAD+ 是細胞產生能量的關鍵輔酶，有效改善疲勞，讓您全天候保持充沛精力。
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-shadow border border-slate-100 dark:border-slate-800">
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-6 text-primary">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">延緩衰老過程</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                激活長壽蛋白 (Sirtuins)，修復受損 DNA，從細胞層面抵抗歲月痕跡。
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-shadow border border-slate-100 dark:border-slate-800">
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-6 text-primary">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">澳洲頂級品質</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                嚴格的生產標準與質量控制，確保每一粒膠囊都達到最高純度與吸收率。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
