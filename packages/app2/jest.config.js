module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: {
        ignoreCodes: [2571],
      },
    },
  },
  testMatch: ['**/*.spec.ts'],
  clearMocks: true,
  verbose: true,
};
