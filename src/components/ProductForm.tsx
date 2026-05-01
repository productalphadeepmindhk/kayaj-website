"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Save, Image as ImageIcon, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

interface Product {
  id?: string;
  name_en: string;
  description_zh: string;
  price: number | "";
  image_url: string;
  is_core_product: boolean;
}

export default function ProductForm({ initialData }: { initialData?: Product }) {
  const router = useRouter();
  const isEditing = !!initialData?.id;
  
  const [formData, setFormData] = useState<Product>(initialData || {
    name_en: "",
    description_zh: "",
    price: "",
    image_url: "",
    is_core_product: false,
  });
  
  const [sections, setSections] = useState(() => {
    const desc = initialData?.description_zh || "";
    const result = {
      features: "",
      suitable: "",
      ingredients: "",
      dosage: "",
      storage: ""
    };
    
    const lines = desc.split('\n');
    let currentKey = "features";
    let content: string[] = [];
    
    const isHeader = (line: string) => {
      const trimmed = line.trim().toLowerCase().replace(/[:：]$/, '');
      if (["features and benefits", "features & benefits", "產品特點"].includes(trimmed)) return "features";
      if (["suitable user", "suitable for", "適合人士"].includes(trimmed)) return "suitable";
      if (["active ingredients per capsule", "active ingredients", "主要成分"].includes(trimmed)) return "ingredients";
      if (["dosage/direction", "dosage / direction", "dosage", "direction", "建議用量"].includes(trimmed)) return "dosage";
      if (["storage", "儲存方法"].includes(trimmed)) return "storage";
      return null;
    };

    lines.forEach(line => {
      const headerKey = isHeader(line);
      if (headerKey) {
        if (content.length > 0) {
          result[currentKey as keyof typeof result] = content.join('\n').trim();
        }
        currentKey = headerKey;
        content = [];
      } else {
        content.push(line);
      }
    });
    if (content.length > 0) {
      result[currentKey as keyof typeof result] = content.join('\n').trim();
    }
    
    return result;
  });
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(initialData?.image_url || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    if (!imageFile) return formData.image_url;
    
    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    
    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(fileName, imageFile);

    if (uploadError) {
      throw new Error(`上傳圖片失敗: ${uploadError.message}`);
    }

    const { data } = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let finalImageUrl = formData.image_url;
      if (imageFile) {
        finalImageUrl = await uploadImage();
      }

      const combinedDescription = `產品特點：\n${sections.features.trim()}\n\n適合人士：\n${sections.suitable.trim()}\n\n主要成分：\n${sections.ingredients.trim()}\n\n建議用量：\n${sections.dosage.trim()}\n\n儲存方法：\n${sections.storage.trim()}`;

      const productData = {
        name_en: formData.name_en,
        description_zh: combinedDescription,
        price: formData.price === "" ? null : Number(formData.price),
        image_url: finalImageUrl,
        is_core_product: formData.is_core_product,
      };

      if (isEditing) {
        const { error } = await supabase
          .from("products")
          .update(productData)
          .eq("id", initialData!.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("products")
          .insert([productData]);
        if (error) throw error;
      }

      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "發生未知錯誤");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/admin" className="inline-flex items-center text-primary hover:text-primary-dark">
          <ArrowLeft size={20} className="mr-2" /> 返回儀表板
        </Link>
      </div>

      <div className="glass-card rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          {isEditing ? "編輯產品" : "新增產品"}
        </h2>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">英文名稱 (必填)</label>
                <input
                  type="text"
                  required
                  value={formData.name_en}
                  onChange={(e) => setFormData({...formData, name_en: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">價格 (HKD)</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value === "" ? "" : Number(e.target.value)})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                />
              </div>

              <div className="space-y-4 border-t border-slate-200 dark:border-slate-700 pt-6 mt-6">
                <h3 className="font-bold text-lg mb-4">產品詳細資訊</h3>
                
                <div>
                  <label className="block text-sm font-medium mb-1">產品特點 (Features and Benefits)</label>
                  <textarea
                    rows={3}
                    value={sections.features}
                    onChange={(e) => setSections({...sections, features: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">適合人士 (Suitable User)</label>
                  <textarea
                    rows={3}
                    value={sections.suitable}
                    onChange={(e) => setSections({...sections, suitable: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">主要成分 (Active Ingredients)</label>
                  <textarea
                    rows={3}
                    value={sections.ingredients}
                    onChange={(e) => setSections({...sections, ingredients: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">建議用量 (Dosage/Direction)</label>
                  <textarea
                    rows={3}
                    value={sections.dosage}
                    onChange={(e) => setSections({...sections, dosage: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">儲存方法 (Storage)</label>
                  <textarea
                    rows={3}
                    value={sections.storage}
                    onChange={(e) => setSections({...sections, storage: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_core_product"
                  checked={formData.is_core_product}
                  onChange={(e) => setFormData({...formData, is_core_product: e.target.checked})}
                  className="w-5 h-5 text-primary rounded border-slate-300 focus:ring-primary"
                />
                <label htmlFor="is_core_product" className="ml-3 text-sm font-medium">
                  設為核心產品 (NAP+)
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">產品圖片</label>
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6 text-center">
                {imagePreview ? (
                  <div className="relative aspect-square w-full mb-4 rounded-lg overflow-hidden">
                    <img src={imagePreview} alt="Preview" className="object-cover w-full h-full" />
                  </div>
                ) : (
                  <div className="aspect-square w-full mb-4 rounded-lg bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center text-slate-500">
                    <ImageIcon size={48} className="mb-2 opacity-50" />
                    <p>尚未選擇圖片</p>
                  </div>
                )}
                
                <input
                  type="file"
                  id="image_upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="image_upload"
                  className="cursor-pointer inline-flex items-center px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  選擇圖片
                </label>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              {loading ? (
                <><Loader2 size={20} className="mr-2 animate-spin" /> 儲存中...</>
              ) : (
                <><Save size={20} className="mr-2" /> 儲存產品</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
