import { useInfiniteScroll, vInfiniteScroll } from './components/infinite-scroll/main';
import { vTooltip, useTooltip } from './components/tooltip/main';
import { CuLoading, vLoading, useLoading } from './components/loading/main';
import { preview } from './components/preview-image/index';
import { default as CuMessageBox } from './components/message-box/index';
import { Config } from './utils';
import { Plugin } from 'vue';

declare const plugin: Plugin;
declare const useComicConfig: (config: Config) => void;
export default plugin;
export * from './tools/index';
export * from './components';
export { CuMessageBox, preview, CuLoading, vLoading, useLoading, useComicConfig, useTooltip, vTooltip, useInfiniteScroll, vInfiniteScroll };
