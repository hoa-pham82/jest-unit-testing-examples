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
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: './UT-report/index.html',
        includeFailureMsg: true,
        includeConsoleLog: true,
      },
    ],
  
  ],
};
