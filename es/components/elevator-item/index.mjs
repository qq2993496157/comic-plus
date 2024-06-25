import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import ElevatorItem from "../elevator/src/item.mjs";
const CuElevatorItem = withInstall(ElevatorItem);
export {
  CuElevatorItem
};
