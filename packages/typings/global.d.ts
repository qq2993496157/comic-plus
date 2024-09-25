declare module 'vue' {
  export interface GlobalComponents {
    CuButton: typeof import('../components/index')['CuButton'];

    CuButtonGroup: typeof import('../components/index')['CuButtonGroup'];

    CuLink: typeof import('../components/index')['CuLink'];

    CuContainer: typeof import('../components/index')['CuContainer'];

    CuAside: typeof import('../components/index')['CuAside'];

    CuHeader: typeof import('../components/index')['CuHeader'];

    CuMain: typeof import('../components/index')['CuMain'];

    CuFooter: typeof import('../components/index')['CuFooter'];

    CuForm: typeof import('../components/index')['CuForm'];

    CuFormItem: typeof import('../components/index')['CuFormItem'];

    CuCheckbox: typeof import('../components/index')['CuCheckbox'];

    CuCheckboxGroup: typeof import('../components/index')['CuCheckboxGroup'];

    CuRadio: typeof import('../components/index')['CuRadio'];

    CuRadioButton: typeof import('../components/index')['CuRadioButton'];

    CuRadioGroup: typeof import('../components/index')['CuRadioGroup'];

    CuInput: typeof import('../components/index')['CuInput'];

    CuInputNumber: typeof import('../components/index')['CuInputNumber'];

    CuTextarea: typeof import('../components/index')['CuTextarea'];

    CuSwitch: typeof import('../components/index')['CuSwitch'];

    CuSlider: typeof import('../components/index')['CuSlider'];

    CuSelect: typeof import('../components/index')['CuSelect'];

    CuOption: typeof import('../components/index')['CuOption'];

    CuOptionGroup: typeof import('../components/index')['CuOptionGroup'];

    CuCascader: typeof import('../components/index')['CuCascader'];

    CuTimePicker: typeof import('../components/index')['CuTimePicker'];

    CuDatePicker: typeof import('../components/index')['CuDatePicker'];

    CuColorPicker: typeof import('../components/index')['CuColorPicker'];

    CuUpload: typeof import('../components/index')['CuUpload'];

    CuTable: typeof import('../components/index')['CuTable'];

    CuTag: typeof import('../components/index')['CuTag'];

    CuTagComplex: typeof import('../components/index')['CuTagComplex'];

    CuCollapse: typeof import('../components/index')['CuCollapse'];

    CuCollapseItem: typeof import('../components/index')['CuCollapseItem'];

    CuWaterfall: typeof import('../components/index')['CuWaterfall'];

    CuWaterfallItem: typeof import('../components/index')['CuWaterfallItem'];

    CuImage: typeof import('../components/index')['CuImage'];

    CuBadge: typeof import('../components/index')['CuBadge'];

    CuCarousel: typeof import('../components/index')['CuCarousel'];

    CuCarouselItem: typeof import('../components/index')['CuCarouselItem'];

    CuProgress: typeof import('../components/index')['CuProgress'];

    CuCard: typeof import('../components/index')['CuCard'];

    CuCardGroup: typeof import('../components/index')['CuCardGroup'];

    CuEmpty: typeof import('../components/index')['CuEmpty'];

    CuEllipsis: typeof import('../components/index')['CuEllipsis'];

    CuCountdown: typeof import('../components/index')['CuCountdown'];

    CuPagination: typeof import('../components/index')['CuPagination'];

    CuMenu: typeof import('../components/index')['CuMenu'];

    CuMenuItem: typeof import('../components/index')['CuMenuItem'];

    CuSubMenu: typeof import('../components/index')['CuSubMenu'];

    CuTabs: typeof import('../components/index')['CuTabs'];

    CuTabPane: typeof import('../components/index')['CuTabPane'];

    CuElevator: typeof import('../components/index')['CuElevator'];

    CuElevatorItem: typeof import('../components/index')['CuElevatorItem'];

    CuBacktop: typeof import('../components/index')['CuBacktop'];

    CuBreadcrumb: typeof import('../components/index')['CuBreadcrumb'];

    CuBreadcrumbItem: typeof import('../components/index')['CuBreadcrumbItem'];

    CuDialog: typeof import('../components/index')['CuDialog'];

    CuDrawer: typeof import('../components/index')['CuDrawer'];

    CuTransitionCollapse: typeof import('../components/index')['CuTransitionCollapse'];

    CuDivider: typeof import('../components/index')['CuDivider'];

    CuStep: typeof import('../components/index')['CuStep'];

    CuStepItem: typeof import('../components/index')['CuStepItem'];

    CuStepCard: typeof import('../components/index')['CuStepCard'];

    CuScrollbar: typeof import('../components/index')['CuScrollbar'];

    CuAvatar: typeof import('../components/index')['CuAvatar'];

    CuAvatarGroup: typeof import('../components/index')['CuAvatarGroup'];

    CuDropdown: typeof import('../components/index')['CuDropdown'];

    CuDropdownMenu: typeof import('../components/index')['CuDropdownMenu'];

    CuDropdownItem: typeof import('../components/index')['CuDropdownItem'];

    CuTree: typeof import('../components/index')['CuTree'];

    CuAtlas: typeof import('../components/index')['CuAtlas'];

    CuTip: typeof import('../components/index')['CuTip'];

    CuAnchor: typeof import('../components/index')['CuAnchor'];

    CuAnchorLink: typeof import('../components/index')['CuAnchorLink'];

    CuAffix: typeof import('../components/index')['CuAffix'];

    CuPistol: typeof import('../components/index')['CuPistol'];

    CuBullet: typeof import('../components/index')['CuBullet'];

    CuZone: typeof import('../components/index')['CuZone'];

    CuList: typeof import('../components/index')['CuList'];

    CuListItem: typeof import('../components/index')['CuListItem'];

    CuListMeta: typeof import('../components/index')['CuListMeta'];

    CuListAction: typeof import('../components/index')['CuListAction'];

    CuSkeleton: typeof import('../components/index')['CuSkeleton'];

    CuSkeletonItem: typeof import('../components/index')['CuSkeletonItem'];

    CuRate: typeof import('../components/index')['CuRate'];

    CuSpace: typeof import('../components/index')['CuSpace'];

    CuClock: typeof import('../components/index')['CuClock'];

    CuWebFooter: typeof import('../components/index')['CuWebFooter'];

    CuTimeline: typeof import('../components/index')['CuTimeline'];

    CuTimelineItem: typeof import('../components/index')['CuTimelineItem'];

    CuCalendar: typeof import('../components/index')['CuCalendar'];

    CuSchedule: typeof import('../components/index')['CuSchedule'];

    CuPopover: typeof import('../components/index')['CuPopover'];

    CuTableV2: typeof import('../components/index')['CuTableV2'];

    CuTableColumn: typeof import('../components/index')['CuTableColumn'];

    CuContextmenu: typeof import('../components/index')['CuContextmenu'];

    CuWatermark: typeof import('../components/index')['CuWatermark'];

    CuIcon: typeof import('../icons')['CuIcon'];
  }

  interface ComponentCustomProperties {
    $message: typeof import('../components/message-box')['CuMessageBox']['message'];

    $notice: typeof import('../components/message-box')['CuMessageBox']['notice'];

    $alert: typeof import('../components/message-box')['CuMessageBox']['alert'];

    $confirm: typeof import('../components/message-box')['CuMessageBox']['confirm'];

    $preview: typeof import('../components/preview-image')['preview'];

    $loading: typeof import('../components/loading')['CuLoading'];

    $loadingbar: typeof import('../components/loadingbar')['CuLoadingbar'];
  }
}
export {};
