import { createPolisePageExports } from "@/lib/polise/polise-page-bundle";

const { Page, generateMetadata } = createPolisePageExports("سياسة-ملفات-تعريف-الارتباط");
export { generateMetadata };
export default Page;
