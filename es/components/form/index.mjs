import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import Form from "./src/main.mjs";
const CuForm = withInstall(Form);
export {
  CuForm
};
