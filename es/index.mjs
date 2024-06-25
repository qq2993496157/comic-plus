import { reactive } from "vue";
import { isArray, isBoolean, isFunction, isNumber, isPromise, isString, isWindow } from "./utils/typescript.mjs";
import { colorToRgba, colorBlend } from "./utils/color.mjs";
import "./utils/config.mjs";
import { debounce, formatDate, throttle } from "./utils/tools.mjs";
import { deepMerge } from "./tools/tool.mjs";
import { chunkArray, copyToClipboard, parity, randomColor, randomUid } from "./tools/tool.mjs";
import { http } from "./tools/request.mjs";
import { validateEmail, validateExists, validateIdcard, validateInteger, validateLicenseplate, validateNameEn, validateNameZh, validateNumRange, validatePhone } from "./tools/validator.mjs";
import components from "./components/index.mjs";
import CuMessageBox from "./components/message-box/index.mjs";
import { preview } from "./components/preview-image/index.mjs";
import { CuLoading, vLoading } from "./components/loading/main.mjs";
import { useLoading } from "./components/loading/main.mjs";
import { vTooltip } from "./components/tooltip/main.mjs";
import { useTooltip } from "./components/tooltip/main.mjs";
import { vInfiniteScroll } from "./components/infinite-scroll/main.mjs";
import { useInfiniteScroll } from "./components/infinite-scroll/main.mjs";
import { CuButton } from "./components/button/index.mjs";
import { CuButtonGroup } from "./components/button-group/index.mjs";
import { CuLink } from "./components/link/index.mjs";
import { CuAside, CuContainer, CuFooter, CuHeader, CuMain } from "./components/container/index.mjs";
import { CuForm } from "./components/form/index.mjs";
import { CuFormItem } from "./components/form-item/index.mjs";
import { CuCheckbox } from "./components/checkbox/index.mjs";
import { CuCheckboxGroup } from "./components/checkbox-group/index.mjs";
import { CuRadio } from "./components/radio/index.mjs";
import { CuRadioButton } from "./components/radio-button/index.mjs";
import { CuRadioGroup } from "./components/radio-group/index.mjs";
import { CuInput } from "./components/input/index.mjs";
import { CuInputNumber } from "./components/input-number/index.mjs";
import { CuTextarea } from "./components/textarea/index.mjs";
import { CuSwitch } from "./components/switch/index.mjs";
import { CuSlider } from "./components/slider/index.mjs";
import { CuSelect } from "./components/select/index.mjs";
import { CuOption } from "./components/option/index.mjs";
import { CuOptionGroup } from "./components/option-group/index.mjs";
import { CuCascader } from "./components/cascader/index.mjs";
import { CuTimePicker } from "./components/time-picker/index.mjs";
import { CuDatePicker } from "./components/date-picker/index.mjs";
import { CuColorPicker } from "./components/color-picker/index.mjs";
import { CuUpload } from "./components/upload/index.mjs";
import { CuTable } from "./components/table/index.mjs";
import { CuTag } from "./components/tag/index.mjs";
import { CuTagComplex } from "./components/tag-complex/index.mjs";
import { CuCollapse } from "./components/collapse/index.mjs";
import { CuCollapseItem } from "./components/collapse-item/index.mjs";
import { CuWaterfall } from "./components/waterfall/index.mjs";
import { CuWaterfallItem } from "./components/waterfall-item/index.mjs";
import { CuImage } from "./components/image/index.mjs";
import { CuBadge } from "./components/badge/index.mjs";
import { CuCarousel } from "./components/carousel/index.mjs";
import { CuCarouselItem } from "./components/carousel-item/index.mjs";
import { CuProgress } from "./components/progress/index.mjs";
import { CuCard } from "./components/card/index.mjs";
import { CuCardGroup } from "./components/card-group/index.mjs";
import { CuEmpty } from "./components/empty/index.mjs";
import { CuEllipsis } from "./components/ellipsis/index.mjs";
import { CuCountdown } from "./components/countdown/index.mjs";
import { CuPagination } from "./components/pagination/index.mjs";
import { CuMenu } from "./components/menu/index.mjs";
import { CuMenuItem } from "./components/menu-item/index.mjs";
import { CuSubMenu } from "./components/sub-menu/index.mjs";
import { CuTabs } from "./components/tabs/index.mjs";
import { CuTabPane } from "./components/tab-pane/index.mjs";
import { CuElevator } from "./components/elevator/index.mjs";
import { CuElevatorItem } from "./components/elevator-item/index.mjs";
import { CuBacktop } from "./components/backtop/index.mjs";
import { CuBreadcrumb } from "./components/breadcrumb/index.mjs";
import { CuBreadcrumbItem } from "./components/breadcrumb-item/index.mjs";
import { CuDialog } from "./components/dialog/index.mjs";
import { CuDrawer } from "./components/drawer/index.mjs";
import { CuTransitionCollapse } from "./components/transition-collapse/index.mjs";
import { CuDivider } from "./components/divider/index.mjs";
import { CuStep } from "./components/step/index.mjs";
import { CuStepItem } from "./components/step-item/index.mjs";
import { CuStepCard } from "./components/step-card/index.mjs";
import { CuScrollbar } from "./components/scrollbar/index.mjs";
import { CuAvatar } from "./components/avatar/index.mjs";
import { CuAvatarGroup } from "./components/avatar-group/index.mjs";
import { CuDropdown } from "./components/dropdown/index.mjs";
import { CuDropdownMenu } from "./components/dropdown-menu/index.mjs";
import { CuDropdownItem } from "./components/dropdown-item/index.mjs";
import { CuTree } from "./components/tree/index.mjs";
import { CuAtlas } from "./components/atlas/index.mjs";
import { CuTip } from "./components/tip/index.mjs";
import { CuAnchor } from "./components/anchor/index.mjs";
import { CuAnchorLink } from "./components/anchor-link/index.mjs";
import { CuAffix } from "./components/affix/index.mjs";
import { CuPistol } from "./components/pistol/index.mjs";
import { CuBullet } from "./components/bullet/index.mjs";
import { CuZone } from "./components/zone/index.mjs";
import { CuList } from "./components/list/index.mjs";
import { CuListAction, CuListItem, CuListMeta } from "./components/list-item/index.mjs";
import { CuSkeleton } from "./components/skeleton/index.mjs";
import { CuSkeletonItem } from "./components/skeleton-item/index.mjs";
import { CuRate } from "./components/rate/index.mjs";
import { CuSpace } from "./components/space/index.mjs";
const plugin = {
  install(app, config) {
    components.forEach((item) => {
      app.use(item);
    });
    app.config.globalProperties.$alert = CuMessageBox.alert;
    app.config.globalProperties.$confirm = CuMessageBox.confirm;
    app.config.globalProperties.$message = CuMessageBox.message;
    app.config.globalProperties.$notice = CuMessageBox.notice;
    app.config.globalProperties.$preview = preview;
    app.config.globalProperties.$loading = CuLoading;
    app.use(vLoading);
    app.use(vTooltip);
    app.use(vInfiniteScroll);
    useComicConfig(config);
  }
};
var assignConfig = reactive({});
const useComicConfig = (config) => {
  setColor(config == null ? void 0 : config.color);
  assignConfig = reactive(deepMerge(assignConfig, config));
  setComicClassName(assignConfig.isComic);
  window["$COMIC"] = assignConfig;
};
const setColor = (value) => {
  if (!value)
    return;
  let obj = {};
  if (typeof value === "string") {
    obj["primary"] = value;
  } else {
    obj = value;
  }
  const colors = ["primary", "success", "warning", "danger", "info", "text"];
  for (const key in obj) {
    if (colors.includes(key)) {
      const c = colorToRgba(obj[key]) || [];
      document.documentElement.style.setProperty(`--cu-color-${key}`, `rgba(${c.join(",")})`);
      document.documentElement.style.setProperty(`--cu-color-${key}-light`, colorBlend(c, 70));
      document.documentElement.style.setProperty(`--cu-color-${key}-light2`, colorBlend(c, 50));
      document.documentElement.style.setProperty(`--cu-color-${key}-light3`, colorBlend(c, 10));
    }
  }
};
const setComicClassName = (comic) => {
  if (comic) {
    document.body.classList.add("comic-plus__is-comic");
  } else {
    document.body.classList.remove("comic-plus__is-comic");
  }
};
export {
  CuAffix,
  CuAnchor,
  CuAnchorLink,
  CuAside,
  CuAtlas,
  CuAvatar,
  CuAvatarGroup,
  CuBacktop,
  CuBadge,
  CuBreadcrumb,
  CuBreadcrumbItem,
  CuBullet,
  CuButton,
  CuButtonGroup,
  CuCard,
  CuCardGroup,
  CuCarousel,
  CuCarouselItem,
  CuCascader,
  CuCheckbox,
  CuCheckboxGroup,
  CuCollapse,
  CuCollapseItem,
  CuColorPicker,
  CuContainer,
  CuCountdown,
  CuDatePicker,
  CuDialog,
  CuDivider,
  CuDrawer,
  CuDropdown,
  CuDropdownItem,
  CuDropdownMenu,
  CuElevator,
  CuElevatorItem,
  CuEllipsis,
  CuEmpty,
  CuFooter,
  CuForm,
  CuFormItem,
  CuHeader,
  CuImage,
  CuInput,
  CuInputNumber,
  CuLink,
  CuList,
  CuListAction,
  CuListItem,
  CuListMeta,
  CuLoading,
  CuMain,
  CuMenu,
  CuMenuItem,
  CuMessageBox,
  CuOption,
  CuOptionGroup,
  CuPagination,
  CuPistol,
  CuProgress,
  CuRadio,
  CuRadioButton,
  CuRadioGroup,
  CuRate,
  CuScrollbar,
  CuSelect,
  CuSkeleton,
  CuSkeletonItem,
  CuSlider,
  CuSpace,
  CuStep,
  CuStepCard,
  CuStepItem,
  CuSubMenu,
  CuSwitch,
  CuTabPane,
  CuTable,
  CuTabs,
  CuTag,
  CuTagComplex,
  CuTextarea,
  CuTimePicker,
  CuTip,
  CuTransitionCollapse,
  CuTree,
  CuUpload,
  CuWaterfall,
  CuWaterfallItem,
  CuZone,
  chunkArray,
  copyToClipboard,
  debounce,
  deepMerge,
  plugin as default,
  formatDate,
  http,
  isArray,
  isBoolean,
  isFunction,
  isNumber,
  isPromise,
  isString,
  isWindow,
  parity,
  preview,
  randomColor,
  randomUid,
  throttle,
  useComicConfig,
  useInfiniteScroll,
  useLoading,
  useTooltip,
  vInfiniteScroll,
  vLoading,
  vTooltip,
  validateEmail,
  validateExists,
  validateIdcard,
  validateInteger,
  validateLicenseplate,
  validateNameEn,
  validateNameZh,
  validateNumRange,
  validatePhone
};
