import type { StorybookConfig } from '@storybook/react-webpack5';


const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  staticDirs: ['../public'],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    '@storybook/preset-scss'
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
};
export default config;