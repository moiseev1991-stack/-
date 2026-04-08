import { createPolisePageExports } from "@/lib/polise/polise-page-bundle";

const { Page, generateMetadata } = createPolisePageExports("سياسة-الخصوصية", "/سياسة-الخصوصية");
export { generateMetadata };
export default Page;
