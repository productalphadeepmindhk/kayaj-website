import Link from "next/link";

interface ProductCardProps {
  product: {
    id: string;
    name_en: string;
    description_zh: string;
    image_url: string | null;
    is_core_product: boolean;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  // If no image is provided, we use a beautiful gradient placeholder
  const hasImage = product.image_url && product.image_url.trim() !== "";

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col border border-slate-100 dark:border-slate-800">
        <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          {hasImage ? (
             <img 
               src={product.image_url!} 
               alt={product.name_en} 
               className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
             />
          ) : (
             <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-110">
               <span className="text-white font-bold text-xl opacity-50">{product.name_en}</span>
             </div>
          )}
          
          {product.is_core_product && (
            <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              核心推薦
            </div>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">{product.name_en}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 flex-grow">
            {product.description_zh}
          </p>
          <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:text-primary-dark transition-colors">
            了解更多 <span className="ml-1 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
