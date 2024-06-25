import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import TabPane from "../tabs/src/pane.mjs";
const CuTabPane = withInstall(TabPane);
export {
  CuTabPane
};
