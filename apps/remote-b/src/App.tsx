import { NameProvider } from 'core/Name';
import './App.css';
import RemoteApp from './RemoteApp.tsx';

const App = () => {
  return (
    <NameProvider name="Rsbuild">
      <RemoteApp />
    </NameProvider>
  );
};

export default App;
