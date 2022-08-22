# Test Harness Setup Instructions
See [example repo](https://github.com/HannahZhuSWE/gatsby-test-testharness/blob/main/.github/workflows/test-only.yml) for an example of the test harness and workflow setup. 
1. At the root of your repository run `npm init playwright@latest` 
    1. Select a language (`TypeScript` was used for the example repo but either will work)
    2. Select a folder to place your tests in (the folder `tests` was used for the example repo)
    3. Type `y` to add a github workflow
2. Copy the contents of the `playwright.config.ts` file in the sample repo to your repo
3. Copy the contents of `./github/workflows/test-only.yml` from the sample repo to the `./github/workflows/playwright.yml` file of your repo
4. Add the script `"test": "playwright test"` to the `package.json` file (as seen in the example repo) 
5. Write test suites and place them in your test folder.
