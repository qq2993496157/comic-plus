import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import Step from "./src/main.mjs";
const CuStep = withInstall(Step);
export {
  CuStep
};
