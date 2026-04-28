import AdminAuthGuard from "@/components/AdminAuthGuard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthGuard>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </AdminAuthGuard>
  );
}
