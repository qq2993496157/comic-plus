import { reactive, type Plugin, type Component, type App } from 'vue';
import { colorToRgba, colorBlend, type Config } from './utils';
import { deepMerge } from './tools/index';
import components from './components';
import CuMessageBox from './components/message-box/index';
import { preview } from './components/preview-image/index';
import { CuLoading, vLoading, useLoading } from './components/loading/main';
import { vTooltip, useTooltip } from './components/tooltip/main';
import { useInfiniteScroll, vInfiniteScroll } from './components/infinite-scroll/main';
import { CuLoadingbar } from './components/loadingbar/main';

const plugin = {
  install(app: App, config: Config) {
    components.forEach((item: Component) => {
      app.use(item as unknown as { install: () => any });
    });

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

var assignConfig = reactive({}) as Config;

const useComicConfig = (config: Config): void => {
  setColor(config?.color);
  assignConfig = reactive(deepMerge(assignConfig, config));
  setComicClassName(assignConfig.isComic);
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
  for (const key in obj) {
    if (colors.includes(key)) {
      const c = colorToRgba(obj[key]) || [];
      if (c.length > 0) {
        document.documentElement.style.setProperty(`--cu-color-${key}`, `rgba(${c.join(',')})`);
        document.documentElement.style.setProperty(`--cu-color-${key}-light`, colorBlend(c, 70));
        document.documentElement.style.setProperty(`--cu-color-${key}-light2`, colorBlend(c, 50));
        document.documentElement.style.setProperty(`--cu-color-${key}-light3`, colorBlend(c, 10));
      }
    }
  }
};

const setComicClassName = (comic?: boolean): void => {
  if (comic) {
    document.body.classList.add('comic-plus__is-comic');
  } else {
    document.body.classList.remove('comic-plus__is-comic');
  }
};

export default plugin;

export * from './tools/index';
export * from './components';

export {
  CuMessageBox,
  preview,
  CuLoading,
  vLoading,
  useLoading,
  useComicConfig,
  useTooltip,
  vTooltip,
  useInfiniteScroll,
  vInfiniteScroll,
  CuLoadingbar
};
