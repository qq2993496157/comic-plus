import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import Waterfall from "./src/main.mjs";
const CuWaterfall = withInstall(Waterfall);
export {
  CuWaterfall
};
