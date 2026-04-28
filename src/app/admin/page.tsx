"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Plus, Edit, Trash2, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (!error && data) {
      setProducts(data);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("確定要刪除這個產品嗎？")) {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (!error) {
        fetchProducts();
      } else {
        alert("刪除失敗: " + error.message);
      }
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">產品管理</h1>
          <p className="text-slate-500">管理網站上顯示的所有 KAYAJ 產品</p>
        </div>
        <div className="flex gap-4">
          <Link 
            href="/admin/products/new" 
            className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Plus size={20} className="mr-2" /> 新增產品
          </Link>
          <button 
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            <LogOut size={20} className="mr-2" /> 登出
          </button>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-sm text-slate-500 uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">產品圖片</th>
                <th className="px-6 py-4 font-semibold">英文名稱</th>
                <th className="px-6 py-4 font-semibold">價格 (HKD)</th>
                <th className="px-6 py-4 font-semibold">核心產品</th>
                <th className="px-6 py-4 font-semibold text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">載入中...</td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">目前沒有產品</td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="px-6 py-4">
                      {product.image_url ? (
                        <img src={product.image_url} alt={product.name_en} className="w-12 h-12 rounded-lg object-cover" />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-500">無圖片</div>
                      )}
                    </td>
                    <td className="px-6 py-4 font-medium text-foreground">{product.name_en}</td>
                    <td className="px-6 py-4 text-slate-500">{product.price || '-'}</td>
                    <td className="px-6 py-4">
                      {product.is_core_product ? (
                        <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full">是</span>
                      ) : (
                        <span className="text-slate-400 text-sm">否</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link 
                        href={`/admin/products/${product.id}/edit`}
                        className="inline-flex items-center text-blue-500 hover:text-blue-700 mr-4"
                      >
                        <Edit size={18} />
                      </Link>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className="inline-flex items-center text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
