module.exports = {
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  testRunner: "jest-jasmine2",
  setupFilesAfterEnv: ['jest-allure/dist/setup'],

  reporters: [
    'default',
    [
      'jest-allure',
      {
        pageTitle: 'Test Report',
        outputPath: './test-result/index.html',
        includeFailureMsg: true,
        includeConsoleLog: true,
      },
    ],
  
  ],
};
