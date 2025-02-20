import './App.css';
import HeroSection from './components/HeroSection';
import { NameProvider } from './contexts/name';

const App = () => {
  return (
    <NameProvider name="Rsbuild">
      <HeroSection source="core" />
    </NameProvider>
  );
};

export default App;
