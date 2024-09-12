import Icon from './components/icon';
import * as icons from './components/components';
import { withInstall } from '../utils';

let list = Object.values(icons);

const CuIcon = withInstall(Icon);

export default [CuIcon, ...list];

export { CuIcon };

export * from './components/components';
