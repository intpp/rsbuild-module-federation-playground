import { createBridgeComponent } from '@module-federation/bridge-react';
import App from './RemoteApp';

export default createBridgeComponent({
  rootComponent: App,
});
