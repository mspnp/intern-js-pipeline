---
sidebar_position: 2
---

# Setup Playwright Trace and Report

To setup tracing and reports for your Playwright tests follow the steps below:

1. In the `playwright.ts.config` file add the following configurations 

```json
reporter: 
    [ ['html', { outputFolder: 'pw-report' }], 
      ['json', { outputFolder: 'pw-report', outputFile: 'report.json' }]
    ],
```
2. Inside the `use` configuration, switch the value for the `trace` configuration from `on-first-retry` to `on`.