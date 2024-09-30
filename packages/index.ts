import { reactive, Plugin, App, shallowRef } from 'vue';
import { Config } from './utils';
import { deepMerge } from './tools';
import components from './components';
import CuMessageBox from './components/message-box';
import { preview } from './components/preview-image';
import { CuLoading, vLoading, useLoading } from './components/loading';
import { vTooltip, useTooltip } from './components/tooltip';
import { useInfiniteScroll, vInfiniteScroll } from './components/infinite-scroll';
import { CuLoadingbar } from './components/loadingbar';
import icons from './icons';

const plugin = {
  install(app: App, config: Config) {
    components.forEach((item) => app.use(item));

    app.config.globalProperties.$alert = CuMessageBox.alert;
    app.config.globalProperties.$confirm = CuMessageBox.confirm;
    app.config.globalProperties.$message = CuMessageBox.message;
    app.config.globalProperties.$notice = CuMessageBox.notice;

    app.config.globalProperties.$preview = preview;
    app.config.globalProperties.$loading = CuLoading;

    app.config.globalProperties.$loadingbar = CuLoadingbar;

    app.use(vLoading);
    app.use(vTooltip);
    app.use(vInfiniteScroll);

    useComicConfig(config);
  }
} as Plugin;

const installIcons = (app: App, prefix?: string) => {
  icons.forEach((icon) => {
    app.component(prefix ? prefix + icon.name : icon.name, icon);
  });
};

var assignConfig = reactive({}) as Config;

const useComicConfig = (config: Config): void => {
  setColor(config?.color);
  const recordLoadingRender = config?.loadingRender || null;
  assignConfig = reactive(deepMerge(assignConfig, config));
  assignConfig.loadingRender = shallowRef(recordLoadingRender); //对象合并导致Component类型的props出问题 所以这里重新手动赋值
  window['$COMIC'] = assignConfig;
};

const setColor = (value?: Config['color']): void => {
  if (!value) return;
  let obj = {};
  if (typeof value === 'string') {
    obj['primary'] = value;
  } else {
    obj = value;
  }
  const colors = ['primary', 'success', 'warning', 'danger', 'info', 'text'];
  colors.forEach((colorKey) => {
    const propertyKey = colorKey === 'text' ? `--cu-text-color` : `--cu-color-${colorKey}`;
    if (obj[colorKey]) {
      document.documentElement.style.setProperty(propertyKey, obj[colorKey]);
    }
  });
};

export default plugin;

export * from './tools/index';
export * from './components';
export * from './icons';

export {
  CuMessageBox,
  CuLoading,
  vLoading,
  vTooltip,
  vInfiniteScroll,
  CuLoadingbar,
  preview,
  useLoading,
  useComicConfig,
  useTooltip,
  useInfiniteScroll,
  installIcons
};
