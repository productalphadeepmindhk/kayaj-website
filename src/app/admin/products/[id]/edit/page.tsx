"use client";

import { useEffect, useState, use } from "react";
import { supabase } from "@/lib/supabase";
import ProductForm from "@/components/ProductForm";
import { useRouter } from "next/navigation";

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const router = useRouter();
  
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();
        
      if (error || !data) {
        alert("找不到產品");
        router.push("/admin");
      } else {
        setProduct(data);
      }
      setLoading(false);
    };
    
    fetchProduct();
  }, [id, router]);

  if (loading) {
    return <div className="text-center py-20">載入中...</div>;
  }

  return <ProductForm initialData={product} />;
}
