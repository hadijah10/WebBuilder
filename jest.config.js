// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // or 'jsdom' for browser-like environment
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.test.ts'],
  "bail": 1,
  "verbose": true
};
