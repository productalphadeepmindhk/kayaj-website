import { supabase } from "@/lib/supabase";
import ProductDetails from "@/components/ProductDetails";
import { notFound } from "next/navigation";

export const revalidate = 0;

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
