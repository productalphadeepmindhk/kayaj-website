import Link from "next/link";
import { ArrowLeft, ShoppingBag, ShieldCheck, Star, ChevronDown } from "lucide-react";

interface Product {
  id: string;
  name_en: string;
  description_zh: string;
  price: number | null;
  image_url: string | null;
  is_core_product: boolean;
}

export default function ProductDetails({ product }: { product: Product }) {
  const fbLink = "https://www.facebook.com/hk.observatory/?locale=zh_HK";
  const hasImage = product.image_url && product.image_url.trim() !== "";

  const parseDescription = (text: string) => {
    const lines = text.split('\n');
    const sections: { title: string; content: string[] }[] = [];
    let currentTitle = "產品特點";
    let currentContent: string[] = [];

    const isHeader = (line: string) => {
      const trimmed = line.trim();
      const headers = [
        "features and benefits", "features & benefits", "suitable user", "suitable for", 
        "active ingredients per capsule", "active ingredients", "dosage/direction", 
        "dosage / direction", "dosage", "direction", "storage",
        "產品特點", "適合人士", "主要成分", "建議用量", "儲存方法"
      ];
      const cleanLine = trimmed.toLowerCase().replace(/[:：]$/, '').trim();
      return headers.includes(cleanLine);
    };

    lines.forEach(line => {
      if (isHeader(line)) {
        if (currentContent.length > 0 || sections.length > 0) {
          sections.push({ title: currentTitle, content: currentContent });
        }
        currentTitle = line.trim().replace(/[:：]$/, '');
        currentContent = [];
      } else {
        if (line.trim() !== '' || currentContent.length > 0) {
          currentContent.push(line);
        }
      }
    });

    if (currentContent.length > 0 || sections.length === 0) {
      sections.push({ title: currentTitle, content: currentContent });
    }
    
    // Ensure the 5 default sections are present if they were not in the text, to match the layout image.
    const defaultHeaders = [
      "產品特點", "適合人士", "主要成分", "建議用量", "儲存方法"
    ];
    
    // If we only found one section (the default), and it's 產品特點, we can append empty ones
    if (sections.length === 1 && sections[0].title === "產品特點") {
        defaultHeaders.slice(1).forEach(header => {
            sections.push({ title: header, content: [] });
        });
    }

    return sections;
  };

  const descriptionSections = parseDescription(product.description_zh || "");

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/products" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> 返回所有產品
        </Link>

        <div className="glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/50 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
            {/* Image Section */}
            <div className="relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center h-[400px] md:h-[600px] md:sticky md:top-24 rounded-3xl overflow-hidden md:ml-4 mt-4">
              {hasImage ? (
                <img 
                  src={product.image_url!} 
                  alt={product.name_en} 
                  className="object-contain w-full h-full p-8"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center p-12 text-center">
                  <span className="text-white font-bold text-4xl opacity-60 drop-shadow-md">{product.name_en}</span>
                </div>
              )}
              {product.is_core_product && (
                <div className="absolute top-6 left-6 bg-accent text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center">
                  <Star size={16} className="mr-1 fill-white" /> 核心推薦
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{product.name_en}</h1>
              {product.price && (
                <p className="text-2xl font-semibold text-primary mb-6">HK$ {product.price}</p>
              )}
              
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mb-8 rounded-full"></div>

              <div className="mb-10 w-full divide-y divide-slate-200 dark:divide-slate-700 border-t border-slate-200 dark:border-slate-700">
                {descriptionSections.map((section, idx) => (
                  <details key={idx} className="group py-4" open={idx === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-lg md:text-xl text-slate-800 dark:text-slate-200">
                      {section.title}
                      <span className="transition-transform duration-300 group-open:rotate-180 text-slate-500">
                        <ChevronDown size={24} />
                      </span>
                    </summary>
                    <div className="mt-4 text-slate-600 dark:text-slate-300 prose prose-slate dark:prose-invert max-w-none text-[15px] leading-relaxed">
                      {section.content.length > 0 ? (
                        section.content.map((line, lineIdx) => (
                          <p key={lineIdx} className="mb-1">{line}</p>
                        ))
                      ) : (
                        <p className="italic text-slate-400">目前沒有提供相關資訊 / Information not available yet.</p>
                      )}
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-auto">
                <div className="bg-primary-light/50 dark:bg-slate-800 p-6 rounded-2xl mb-8 border border-primary/10">
                  <h3 className="font-bold text-foreground mb-2 flex items-center">
                    <ShieldCheck size={20} className="mr-2 text-primary" />
                    如何購買？
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    為確保您購買到正版 KAYAJ 產品，我們目前透過官方 Facebook 專頁為香港客戶提供專人訂購服務。
                  </p>
                  <a 
                    href={fbLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/20"
                  >
                    <ShoppingBag size={20} className="mr-2" /> 前往 Facebook 專頁訂購
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
