import { createRemoteComponent } from '@module-federation/bridge-react';
import { loadRemote } from '@module-federation/enhanced/runtime';
import type React from 'react';

const FallbackErrorComp = (info: unknown) => {
  return (
    <div>
      <h2>This is ErrorBoundary Component</h2>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{info?.error.message}</pre>
      <button onClick={() => info.resetErrorBoundary()}>
        resetErrorBoundary(try again)
      </button>
    </div>
  );
};

const App = createRemoteComponent({
  loader: () => loadRemote('remote-a/BridgeApp'),
  fallback: FallbackErrorComp,
  loading: <div data-test-id="loading">loading...</div>,
});

export type BridgeRemoteAProps = {};

const BridgeRemoteA: React.FC<BridgeRemoteAProps> = () => {
  return <App variantName="BridgeRemoteA > " />;
};

export default BridgeRemoteA;
