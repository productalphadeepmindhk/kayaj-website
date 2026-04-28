"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, usePathname } from "next/navigation";

export default function AdminAuthGuard({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session && pathname !== "/admin/login") {
        router.push("/admin/login");
      } else if (session && pathname === "/admin/login") {
        router.push("/admin");
      }
      setLoading(false);
    };
    
    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session && pathname !== "/admin/login") {
        router.push("/admin/login");
      } else if (session && pathname === "/admin/login") {
        router.push("/admin");
      }
    });

    return () => authListener.subscription.unsubscribe();
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}
