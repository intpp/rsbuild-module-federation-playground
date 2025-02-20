import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import packageJson from './package.json';

const port = Number(process.env.PORT || '4501');

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'core',
      exposes: {
        './Name': './src/contexts/name/index.ts',
        './HeroSection': './src/components/HeroSection/index.ts',
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
