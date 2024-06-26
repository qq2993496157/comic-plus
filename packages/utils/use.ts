import type { App } from 'vue';

export function withInstall(component: any) {
  component.install = function (app: App) {
    app.component(component.name, component);
  };
  return component;
}
