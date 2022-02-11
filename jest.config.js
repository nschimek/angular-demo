// require('jest-preset-angular/ngcc-jest-processor'); // necessary to force Jenkins to use AOT compiler

const tsJestPreset = require('jest-preset-angular/jest-preset').globals['ts-jest'];

module.exports = {
  preset: "jest-preset-angular",
  roots: ['src'],
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  verbose: true,
  testURL: "http://localhost",
  testEnvironment: "jsdom",
  globals: {
    'ts-jest': {
      ...tsJestPreset,
      tsconfig: "<rootDir>/tsconfig.spec.json"
    }
  }
}