import HeroSection from 'core/HeroSection';
import { NameProvider } from 'core/Name';
import './App.css';
import BridgeRemoteA from './components/BridgeRemoteA';
import RemoteA from './components/RemoteA';
import RemoteB from './components/RemoteB';

const App = () => {
  return (
    <NameProvider name="Rsbuild">
      <HeroSection source="host" />
      <BridgeRemoteA />
      <RemoteA />
      <RemoteB />
    </NameProvider>
  );
};

export default App;
