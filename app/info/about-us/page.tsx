import { createPolisePageExports } from "@/lib/polise/polise-page-bundle";

const { Page, generateMetadata } = createPolisePageExports("من-نحن", "/من-نحن");
export { generateMetadata };
export default Page;
