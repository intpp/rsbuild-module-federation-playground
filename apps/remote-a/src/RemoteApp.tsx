import HeroSection from 'core/HeroSection';
import type React from 'react';

export type RemoteAppProps = {
  variantName?: string;
};

const RemoteApp: React.FC<RemoteAppProps> = ({ variantName }) => {
  return (
    <HeroSection
      source={variantName ? `${variantName} remote-a` : 'remote-a'}
    />
  );
};

export default RemoteApp;
