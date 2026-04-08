import Sidebar from "@/components/layout/Sidebar";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex gap-6 items-start">
      <div className="flex-1 min-w-0 space-y-10">{children}</div>
      <Sidebar />
    </div>
  );
}
