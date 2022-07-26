---
sidebar_position: 3
---

# Automate Github Actions

Set up Github Actions to automatically run Playwright tests nightly and on pushes and pull requests to the Github repo:

1. In your repository, rename the `playwright.yml` file in the `./github/workflows/` directory to `playwright-onDemand.yml`
1. Copy the following contents to the `./github/workflows/playwright-onDemand.yml` file of your repo. Note that if your repo requires other dependencies you may be required to install them after the step where you install Playwright

```yaml
# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Playwright tests

on:
  # Runs on push or pull requests and nightly
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
  schedule: 
    # nightly
    - cron: '0 0 * * *'

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright
      run: npx playwright install --with-deps
    - name: Build production build
      run: npm run build
    - name: Run your tests
      run: npm run test

```
