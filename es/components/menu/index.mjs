import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import { Menu } from "./src/main.mjs";
const CuMenu = withInstall(Menu);
export {
  CuMenu
};
