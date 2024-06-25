import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import DropdownMenu from "../dropdown/src/menu.mjs";
const CuDropdownMenu = withInstall(DropdownMenu);
export {
  CuDropdownMenu
};
