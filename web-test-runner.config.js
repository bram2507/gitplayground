import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  rootDir: './',
  files: ['tests/**/*.test.js'],
  nodeResolve: true,
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
  ],
  testFramework: {
    config: {
      timeout: 10000,
    },
  },
  coverageConfig: {
    include: ['src/**/*.js'],
  },
};
