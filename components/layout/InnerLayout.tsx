import Sidebar from "@/components/common/Sidebar";
import HeroInner, { type BreadcrumbItem } from "./HeroInner";

interface Props {
  h1: string;
  description: string;
  breadcrumb: BreadcrumbItem[];
  children: React.ReactNode;
}

export default function InnerLayout({ h1, description, breadcrumb, children }: Props) {
  return (
    <>
      <HeroInner h1={h1} description={description} breadcrumb={breadcrumb} />
      <div className="mx-auto flex max-w-7xl items-start gap-6 px-4 py-8">
        <div className="min-w-0 flex-1 space-y-10">{children}</div>
        <Sidebar />
      </div>
    </>
  );
}
