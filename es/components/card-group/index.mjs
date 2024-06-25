import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import CardGroup from "../card/src/group.mjs";
const CuCardGroup = withInstall(CardGroup);
export {
  CuCardGroup
};
