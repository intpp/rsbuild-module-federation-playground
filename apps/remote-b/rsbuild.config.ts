import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import packageJson from './package.json';

const port = Number(process.env.PORT || '4504');

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'remote_b',
      exposes: {
        './App': './src/RemoteApp.tsx',
      },
      remotes: {
        core: 'core@http://localhost:4501/mf-manifest.json',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: packageJson.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        },
      },
    }),
  ],
  server: {
    port,
  },
});
