/**
 * For a detailed explanation regarding each configuration property, visit:
 * https:
 */

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  testEnvironment: "jest-environment-jsdom",
  // transform: {
  //   "^.+.tsx?$": ["ts-jest", {}],
  // },
  verbose: true,
  setupFiles: ['./jest.setup.js']
};

export default config;
