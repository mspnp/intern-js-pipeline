---
sidebar_position: 1
---

# Initialize Playwright

Set up Playwright tests for your repo:

1. At the root of your repository run `npm init playwright@latest` 
    1. Select a language (`TypeScript` was used for the example repo but either will work)
    2. Select a folder to place your tests in (the folder `tests` was used for the example repo)
    3. Type `y` to add a github workflow
2. Inside `package.json` add the script `"test": "playwright test"`
3. Write test suites and place them in your test folder