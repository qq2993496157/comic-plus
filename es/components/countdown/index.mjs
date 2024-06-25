import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import Countdown from "./src/main.mjs";
const CuCountdown = withInstall(Countdown);
export {
  CuCountdown
};
