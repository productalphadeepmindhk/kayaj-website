import Link from "next/link";
import { ArrowLeft, ShoppingBag, ShieldCheck, Star } from "lucide-react";

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

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/products" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> 返回所有產品
        </Link>

        <div className="glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/50 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center min-h-[400px]">
              {hasImage ? (
                <img 
                  src={product.image_url!} 
                  alt={product.name_en} 
                  className="object-cover w-full h-full"
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

              <div className="prose prose-slate dark:prose-invert max-w-none mb-10">
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-wrap">
                  {product.description_zh}
                </p>
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
