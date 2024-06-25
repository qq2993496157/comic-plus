import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import WaterfallItem from "../waterfall/src/item.mjs";
const CuWaterfallItem = withInstall(WaterfallItem);
export {
  CuWaterfallItem
};
