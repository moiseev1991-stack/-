import { createPolisePageExports } from "@/lib/polise/polise-page-bundle";

const { Page, generateMetadata } = createPolisePageExports("شروط-الاستخدام", "/شروط-الاستخدام");
export { generateMetadata };
export default Page;
