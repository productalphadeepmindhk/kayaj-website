import { supabase } from "@/lib/supabase";
import ProductDetails from "@/components/ProductDetails";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 0;

export default async function NADPlusPage() {
  // Fetch the core product (assuming is_core_product = true)
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_core_product", true)
    .limit(1)
    .single();

  if (error || !product) {
    return (
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-24 flex items-center justify-center">
        <div className="text-center max-w-xl px-4">
          <h1 className="text-3xl font-bold mb-4">NAD+ 產品即將推出</h1>
          <p className="text-slate-500 mb-8">管理員尚未在系統中新增核心產品 NAD+。請稍後再回來查看！</p>
          <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-all">
             <ArrowLeft size={20} className="mr-2" /> 查看其他產品
          </Link>
        </div>
      </div>
    );
  }

  return <ProductDetails product={product} />;
}
