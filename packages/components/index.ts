import { CuButton } from './button/index';
import { CuButtonGroup } from './button-group/index';
import { CuLink } from './link/index';
import { CuContainer, CuAside, CuHeader, CuMain, CuFooter } from './container/index';
import { CuForm } from './form/index';
import { CuFormItem } from './form-item/index';
import { CuCheckbox } from './checkbox/index';
import { CuCheckboxGroup } from './checkbox-group/index';
import { CuRadio } from './radio/index';
import { CuRadioButton } from './radio-button/index';
import { CuRadioGroup } from './radio-group/index';
import { CuInput } from './input/index';
import { CuInputNumber } from './input-number/index';
import { CuTextarea } from './textarea/index';
import { CuSwitch } from './switch/index';
import { CuSlider } from './slider/index';
import { CuSelect } from './select/index';
import { CuOption } from './option/index';
import { CuOptionGroup } from './option-group/index';
import { CuCascader } from './cascader/index';
import { CuTimePicker } from './time-picker/index';
import { CuDatePicker } from './date-picker/index';
import { CuColorPicker } from './color-picker/index';
import { CuUpload } from './upload/index';
import { CuTable } from './table/index';
import { CuTag } from './tag/index';
import { CuTagComplex } from './tag-complex/index';
import { CuCollapse } from './collapse/index';
import { CuCollapseItem } from './collapse-item/index';
import { CuWaterfall } from './waterfall/index';
import { CuWaterfallItem } from './waterfall-item/index';
import { CuImage } from './image/index';
import { CuBadge } from './badge/index';
import { CuCarousel } from './carousel/index';
import { CuCarouselItem } from './carousel-item/index';
import { CuProgress } from './progress/index';
import { CuCard } from './card/index';
import { CuCardGroup } from './card-group/index';
import { CuEmpty } from './empty/index';
import { CuEllipsis } from './ellipsis/index';
import { CuCountdown } from './countdown/index';
import { CuPagination } from './pagination/index';
import { CuMenu } from './menu/index';
import { CuMenuItem } from './menu-item/index';
import { CuSubMenu } from './sub-menu/index';
import { CuTabs } from './tabs/index';
import { CuTabPane } from './tab-pane/index';
import { CuElevator } from './elevator/index';
import { CuElevatorItem } from './elevator-item/index';
import { CuBacktop } from './backtop/index';
import { CuBreadcrumb } from './breadcrumb/index';
import { CuBreadcrumbItem } from './breadcrumb-item/index';
import { CuDialog } from './dialog/index';
import { CuDrawer } from './drawer/index';
import { CuTransitionCollapse } from './transition-collapse/index';
import { CuDivider } from './divider/index';
import { CuStep } from './step/index';
import { CuStepItem } from './step-item/index';
import { CuStepCard } from './step-card/index';
import { CuScrollbar } from './scrollbar/index';
import { CuAvatar } from './avatar/index';
import { CuAvatarGroup } from './avatar-group/index';
import { CuDropdown } from './dropdown/index';
import { CuDropdownMenu } from './dropdown-menu/index';
import { CuDropdownItem } from './dropdown-item/index';
import { CuTree } from './tree/index';
import { CuAtlas } from './atlas/index';
import { CuTip } from './tip/index';
import { CuAnchor } from './anchor/index';
import { CuAnchorLink } from './anchor-link/index';
import { CuAffix } from './affix/index';
import { CuPistol } from './pistol/index';
import { CuBullet } from './bullet/index';
import { CuZone } from './zone/index';
import { CuList } from './list/index';
import { CuListItem, CuListMeta, CuListAction } from './list-item/index';
import { CuSkeleton } from './skeleton/index';
import { CuSkeletonItem } from './skeleton-item/index';
import { CuRate } from './rate/index';
import { CuSpace } from './space/index';
import { CuClock } from './clock/index';
import { CuWebFooter } from './web-footer/index';
import { CuTimeline } from './timeline/index';
import { CuTimelineItem } from './timeline-item/index';
import { CuCalendar } from './calendar/index';
import { CuSchedule } from './schedule/index';
import { CuPopover } from './popover/index';
import { CuTableV2 } from './table-v2/index';
import { CuTableColumn } from './table-column/index';

import type { Plugin } from 'vue';

export default [
  CuButton,
  CuButtonGroup,
  CuLink,
  CuContainer,
  CuAside,
  CuHeader,
  CuMain,
  CuFooter,
  CuForm,
  CuFormItem,
  CuCheckbox,
  CuCheckboxGroup,
  CuRadio,
  CuRadioButton,
  CuRadioGroup,
  CuInput,
  CuInputNumber,
  CuTextarea,
  CuSwitch,
  CuSlider,
  CuSelect,
  CuOption,
  CuOptionGroup,
  CuCascader,
  CuTimePicker,
  CuDatePicker,
  CuColorPicker,
  CuUpload,
  CuTable,
  CuTag,
  CuTagComplex,
  CuCollapse,
  CuCollapseItem,
  CuWaterfall,
  CuWaterfallItem,
  CuImage,
  CuBadge,
  CuCarousel,
  CuCarouselItem,
  CuProgress,
  CuCard,
  CuCardGroup,
  CuEmpty,
  CuEllipsis,
  CuCountdown,
  CuPagination,
  CuMenu,
  CuMenuItem,
  CuSubMenu,
  CuTabs,
  CuTabPane,
  CuElevator,
  CuElevatorItem,
  CuBacktop,
  CuBreadcrumb,
  CuBreadcrumbItem,
  CuDialog,
  CuDrawer,
  CuTransitionCollapse,
  CuDivider,
  CuStep,
  CuStepItem,
  CuStepCard,
  CuScrollbar,
  CuAvatar,
  CuAvatarGroup,
  CuDropdown,
  CuDropdownMenu,
  CuDropdownItem,
  CuTree,
  CuAtlas,
  CuTip,
  CuAnchor,
  CuAnchorLink,
  CuAffix,
  CuPistol,
  CuBullet,
  CuZone,
  CuList,
  CuListItem,
  CuListMeta,
  CuListAction,
  CuSkeleton,
  CuSkeletonItem,
  CuRate,
  CuSpace,
  CuClock,
  CuWebFooter,
  CuTimeline,
  CuTimelineItem,
  CuCalendar,
  CuSchedule,
  CuPopover,
  CuTableV2,
  CuTableColumn
] as Plugin[];

export {
  CuButton,
  CuButtonGroup,
  CuLink,
  CuContainer,
  CuAside,
  CuHeader,
  CuMain,
  CuFooter,
  CuForm,
  CuFormItem,
  CuCheckbox,
  CuCheckboxGroup,
  CuRadio,
  CuRadioButton,
  CuRadioGroup,
  CuInput,
  CuInputNumber,
  CuTextarea,
  CuSwitch,
  CuSlider,
  CuSelect,
  CuOption,
  CuOptionGroup,
  CuCascader,
  CuTimePicker,
  CuDatePicker,
  CuColorPicker,
  CuUpload,
  CuTable,
  CuTag,
  CuTagComplex,
  CuCollapse,
  CuCollapseItem,
  CuWaterfall,
  CuWaterfallItem,
  CuImage,
  CuBadge,
  CuCarousel,
  CuCarouselItem,
  CuProgress,
  CuCard,
  CuCardGroup,
  CuEmpty,
  CuEllipsis,
  CuCountdown,
  CuPagination,
  CuMenu,
  CuMenuItem,
  CuSubMenu,
  CuTabs,
  CuTabPane,
  CuElevator,
  CuElevatorItem,
  CuBacktop,
  CuBreadcrumb,
  CuBreadcrumbItem,
  CuDialog,
  CuDrawer,
  CuTransitionCollapse,
  CuDivider,
  CuStep,
  CuStepItem,
  CuStepCard,
  CuScrollbar,
  CuAvatar,
  CuAvatarGroup,
  CuDropdown,
  CuDropdownMenu,
  CuDropdownItem,
  CuTree,
  CuAtlas,
  CuTip,
  CuAnchor,
  CuAnchorLink,
  CuAffix,
  CuPistol,
  CuBullet,
  CuZone,
  CuList,
  CuListItem,
  CuListMeta,
  CuListAction,
  CuSkeleton,
  CuSkeletonItem,
  CuRate,
  CuSpace,
  CuClock,
  CuWebFooter,
  CuTimeline,
  CuTimelineItem,
  CuCalendar,
  CuSchedule,
  CuPopover,
  CuTableV2,
  CuTableColumn
};
