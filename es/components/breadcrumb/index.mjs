import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import Breadcrumb from "./src/main.mjs";
const CuBreadcrumb = withInstall(Breadcrumb);
export {
  CuBreadcrumb
};
