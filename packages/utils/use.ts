import { App, ComponentOptions } from 'vue';

// 定义一个包含 `install` 方法的组件类型
type InstallableComponent<T> = T & { install?: (app: App) => void };

// 确保 `withInstall` 接受一个符合 `DefineComponent` 类型的组件
export function withInstall<T extends ComponentOptions<any, any, any, any, any, any>>(
  component: T
): InstallableComponent<T> {
  (component as InstallableComponent<T>).install = function (app: App) {
    app.component((component as any).name || (component as any).__name, component);
  };
  return component as InstallableComponent<T>;
}
