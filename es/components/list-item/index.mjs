import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import ListItem from "../list/src/item.mjs";
import ListMeta from "../list/src/components/meta.mjs";
import ListAction from "../list/src/components/action.mjs";
const CuListItem = withInstall(ListItem);
const CuListMeta = withInstall(ListMeta);
const CuListAction = withInstall(ListAction);
export {
  CuListAction,
  CuListItem,
  CuListMeta
};
