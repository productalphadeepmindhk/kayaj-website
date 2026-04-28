import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

export const revalidate = 0; // Dynamic fetching

export default async function ProductsPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("is_core_product", { ascending: false })
    .order("created_at", { ascending: false });

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            KAYAJ <span className="gradient-text">全線產品</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            探索我們全系列的健康保健產品，每一款都蘊含澳洲頂級科學研發成果，為您的健康保駕護航。
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
            載入產品時發生錯誤。請稍後再試。
          </div>
        )}

        {!error && products?.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-xl">目前還沒有產品上架。</p>
            <p className="mt-2 text-sm">請聯絡管理員新增產品。</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
