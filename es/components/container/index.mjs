import "vue";
import "../../utils/config.mjs";
import { withInstall } from "../../utils/use.mjs";
import { Container, Aside, Header, Main, Footer } from "./src/container.mjs";
const CuContainer = withInstall(Container);
const CuAside = withInstall(Aside);
const CuHeader = withInstall(Header);
const CuMain = withInstall(Main);
const CuFooter = withInstall(Footer);
export {
  CuAside,
  CuContainer,
  CuFooter,
  CuHeader,
  CuMain
};
