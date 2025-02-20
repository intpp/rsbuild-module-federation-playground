import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import packageJson from './package.json';

const port = Number(process.env.PORT || '4502');

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'core',
      remotes: {
        core: 'core@http://localhost:4501/mf-manifest.json',
        'remote-a': 'remote_a@http://localhost:4503/mf-manifest.json',
        'remote-b': 'remote_b@http://localhost:4504/mf-manifest.json',
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
