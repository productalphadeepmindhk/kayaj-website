import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Activity, ChevronDown, CheckCircle2, AlertTriangle, Droplets, HeartPulse, BrainCircuit, Leaf } from "lucide-react";

export default function Home() {
  const fbLink = "https://www.facebook.com/hk.observatory/?locale=zh_HK";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      
      {/* 1. HERO SECTION & TRUST BADGES */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-bold tracking-wide border border-emerald-200 dark:border-emerald-800 shadow-sm">
                <ShieldCheck size={16} className="mr-2" />
                TGA 認證: AUST L 367352
              </span>
              <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-bold tracking-wide border border-blue-200 dark:border-blue-800 shadow-sm">
                <Leaf size={16} className="mr-2" />
                澳洲原裝製造
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              NAD+ Super Boost <br className="hidden md:block"/>
              <span className="gradient-text">細胞抗衰的智慧升級方案</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-medium">
              在充滿挑戰的每一天，您需要的不僅是補充能量，更是真正能被身體吸收利用的完整解決方案。結合澳洲 TGA 認證的專業配方，為追求卓越表現的您提供科學實證的抗衰老支持。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={fbLink}
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/30 flex items-center justify-center"
              >
                立即前往專頁訂購 <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>

          {/* Video Section embedded in Hero */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://player.vimeo.com/video/846819979?title=0&byline=0&portrait=0" 
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS SECTION */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                為什麼許多人吃 NMN <br/><span className="text-red-500">感覺效果不明顯？</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                隨著年齡增長，體內的 <strong className="text-foreground">CD38 酶活性不斷上升</strong>，它就像「Pac-Man」一樣持續吞噬您補充的 NAD+，讓抗衰老的努力大打折扣。
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-3xl border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10">
              <h3 className="text-xl font-bold flex items-center mb-6 text-red-600 dark:text-red-400">
                <AlertTriangle className="mr-2" /> 常見困擾
              </h3>
              <ul className="space-y-4">
                {[
                  "服用 NMN 數週後仍感覺疲憊",
                  "下午三點開始出現腦霧現象",
                  "精力無法維持到晚間會議",
                  "投入大量預算卻看不到明顯改善",
                  "懷疑產品品質或自己的身體狀況"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400 mr-3 mt-0.5">✕</span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SCIENCE (CD38 LOOPHOLE) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            一邊補水，一邊漏水：<br className="hidden md:block"/><span className="gradient-text">CD38 的隱形威脅</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
            想像您的身體是一個水桶，NMN 就像往桶裡注水，但如果底部有個洞（CD38 酶）持續漏水，無論注入多少水，水位（能量水平）永遠無法真正上升。<br/><br/>
            這就是為什麼單純補充 NMN 效果有限的根本原因。<br/>
            <strong className="text-foreground text-2xl block mt-6">不堵住漏洞，補再多也沒用。</strong>
          </p>
          
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-left">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Zap className="mr-3 text-primary" /> 科學實證：CD38 抑制策略
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              近年來的研究發現，CD38 是 NAD+ 最主要的消耗酶。槲皮素作為天然的 CD38 抑制劑，能有效減緩 NAD+ 的分解速度。結合 CD38 抑制策略的 NAD+ 補充方案，在提升細胞能量水平方面的效果，<strong>可能是單純 NMN 補充的 2-3 倍</strong>。
            </p>
          </div>
        </div>
      </section>

      {/* 4. INGREDIENTS & LITERATURE */}
      <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">NAD+ Super Boost：<span className="text-primary">修補漏洞 + 注入能量</span></h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">5 合 1 完整配方，真正的性價比之選。不僅省下分開購買的成本，更獲得科學配比的協同效應。</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-6 text-primary">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">NMN (煙酰胺單核苷酸)</h3>
              <p className="text-slate-600 dark:text-slate-400">直接轉化為 NAD+，支持細胞能量代謝、DNA 修復和長壽蛋白活性，是抗衰老的核心基礎。</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">關鍵突破</div>
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-accent">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quercetin (槲皮素)</h3>
              <p className="text-slate-600 dark:text-slate-400">關鍵的 CD38 抑制劑，防止 NAD+ 被過度消耗。同時具有抗炎特性，多重保護健康。</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6 text-red-500">
                <HeartPulse size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">CoQ10 (輔酶 Q10)</h3>
              <p className="text-slate-600 dark:text-slate-400">心臟和肌肉細胞的能量發電機，改善血液循環，提升整體活力，對 40 歲以上人群尤其重要。</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Resveratrol (白藜蘆醇)</h3>
              <p className="text-slate-600 dark:text-slate-400">源自紅酒的「長壽分子」，啟動長壽基因表達，提供強大抗氧化保護。</p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 text-green-600">
                <Leaf size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">法地欖仁果 & 葡萄籽</h3>
              <p className="text-slate-600 dark:text-slate-400">維生素 C 含量是橙的 100 倍，提供卓越抗氧化力。葡萄籽精華保護血管健康，改善微循環。</p>
            </div>
            
            <div className="glass-card p-8 rounded-3xl border-2 border-primary/20 bg-primary-light/30 flex flex-col justify-center text-center">
              <h3 className="text-2xl font-bold mb-2 text-foreground">分開購買 &gt; HKD 1,050</h3>
              <p className="text-lg font-medium text-slate-600 dark:text-slate-400 line-through mb-4">缺乏協同效應</p>
              <h3 className="text-3xl font-black text-primary">NAD+ 一瓶全包</h3>
              <p className="text-sm font-bold text-slate-500 mt-2">科學配比 • 效果加乘</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">常見問題解答</h2>
          </div>
          
          <div className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 md:p-8 shadow-sm">
            
            <details className="group py-4" open>
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-lg text-foreground">
                為什麼 NAD+ Super Boost 比純 NMN 產品貴？
                <span className="transition-transform duration-300 group-open:rotate-180 text-slate-500"><ChevronDown size={24} /></span>
              </summary>
              <div className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed pl-2">
                表面上看單價較高，但實際上更划算。如果分開購買六種成分，總成本超過 HKD 1,050。更重要的是，我們的配方包含 CD38 抑制劑（槲皮素），能確保您補充的 NAD+ 真正被利用，而非被消耗掉。這是投資效果，而非只是購買成分。
              </div>
            </details>

            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-lg text-foreground">
                多久能感受到效果？
                <span className="transition-transform duration-300 group-open:rotate-180 text-slate-500"><ChevronDown size={24} /></span>
              </summary>
              <div className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed pl-2">
                個體差異存在，但多數使用者在 1-2 週開始注意到睡眠質量改善，3-4 週感受到精力提升和午後疲勞減少。持續服用 8-12 週能體驗到更深層的細胞修復效果。建議至少連續服用三個月以評估完整效果。
              </div>
            </details>

            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-lg text-foreground">
                與其他保健品可以一起服用嗎？
                <span className="transition-transform duration-300 group-open:rotate-180 text-slate-500"><ChevronDown size={24} /></span>
              </summary>
              <div className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed pl-2">
                NAD+ Super Boost 已包含多種核心抗衰老成分，通常不需要額外補充類似產品。如果您正在服用其他處方藥物或有特殊健康狀況，建議諮詢醫療專業人士。與一般維生素礦物質補充品同時服用通常沒有問題。
              </div>
            </details>

            <details className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-lg text-foreground">
                TGA 認證代表什麼？
                <span className="transition-transform duration-300 group-open:rotate-180 text-slate-500"><ChevronDown size={24} /></span>
              </summary>
              <div className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed pl-2">
                澳洲藥物管理局 (TGA) 是全球最嚴格的藥品監管機構之一，認證標準等同處方藥等級。獲得 TGA 認證意味著產品經過嚴格的成分驗證、純度檢測和安全性評估。這是品質和安全的最高保證。
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* 6. FOOTER CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">開始您的抗衰老智慧升級之旅</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            不堵住漏洞，補再多也沒用。現在就開始真正有效的抗衰老旅程。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={fbLink}
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-primary font-bold text-xl hover:bg-slate-100 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center"
            >
              前往 Facebook 專頁訂購 <ArrowRight className="ml-2" size={24} />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white/90 font-medium">
            <span className="flex items-center"><CheckCircle2 className="mr-2" size={20}/> 60 天滿意保證</span>
            <span className="flex items-center"><CheckCircle2 className="mr-2" size={20}/> 澳洲 TGA 認證 AUST L 367352</span>
            <span className="flex items-center"><CheckCircle2 className="mr-2" size={20}/> 免費配送</span>
          </div>
        </div>
      </section>
      
    </div>
  );
}
