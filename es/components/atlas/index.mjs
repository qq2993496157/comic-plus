import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import Atlas from "./src/main.mjs";
const CuAtlas = withInstall(Atlas);
export {
  CuAtlas
};
