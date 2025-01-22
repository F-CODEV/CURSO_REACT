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
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: { "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js", "\\.(css|less|scss|sass)$": "identity-obj-proxy" },
};

export default config;
