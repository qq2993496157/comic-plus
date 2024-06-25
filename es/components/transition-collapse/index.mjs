import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import TransitionCollapse from "./src/main.mjs";
const CuTransitionCollapse = withInstall(TransitionCollapse);
export {
  CuTransitionCollapse
};
