import HeroSection from 'core/HeroSection';
import type React from 'react';

export type RemoteAppProps = {};

const RemoteApp: React.FC<RemoteAppProps> = () => {
  return <HeroSection source="remote-b" />;
};

export default RemoteApp;
