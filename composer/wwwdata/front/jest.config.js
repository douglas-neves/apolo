module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '(.*).(jpg|ico|jpeg|png|gif|webp|svg|webm)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,js}',
    '**/*.{vue}',
    '!**/node_modules/**',
    '!**.config.js',
    '!**/dist/**',
    '!**rc.js',
    '!**/src/**.d.ts',
    '!**/coverage/**',
  ],
};
