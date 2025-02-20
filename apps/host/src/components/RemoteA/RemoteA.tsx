import type React from 'react';
import { Suspense, lazy } from 'react';

const App = lazy(() => import('remote-a/App'));

export type RemoteAProps = {};

const RemoteA: React.FC<RemoteAProps> = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App variantName="RemoteA >" />
    </Suspense>
  );
};

export default RemoteA;
