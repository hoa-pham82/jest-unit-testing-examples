module.exports = {
  
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", { pageTitle: "Test Report", outputPath: "./test-result/unit_test_report.html", includeFailureMsg: true, includeConsoleLog: true }],
  ],
};