---
sidebar_position: 3
---

# Link test repositories to dashboard

Modify Playwright github actions in the test repositories to notify and update dashboard to the latest test results:

1. Create a personal access token named `PAT_TOKEN` with `repo` and `workflow` permissions
  1. If the organization your dashboard is located in requires SSO enable SSO for the PAT token
2. Append the following steps to the `playwright-onDemand.yml` file below the current steps in the `test` job.

```yaml
    - name: Get current date
      id: date
      run: echo "::set-output name=date::$(date +'%Y-%m-%d')"
    - name: Upload HTML report as Artifact
      uses: actions/upload-artifact@v2
      if: always()
      with: 
        name: onDemand
        path: pw-report/

  storeReports:
    name: Store reports
    if: ${{ always() }}
    needs: test
    runs-on: ubuntu-latest
    steps:
    - name: Download all workflow run artifacts
      uses: actions/download-artifact@v3
      id: download
    - name: Publish to external repo
      if: always()
      uses: peaceiris/actions-gh-pages@v3.7.3
      with:
        external_repository: mspnp/intern-js-pipeline
        publish_branch: gh-pages
        personal_token: ${{ secrets.PAT_TOKEN }}
        publish_dir: ${{steps.download.outputs.download-path}}
        destination_dir: test-reports/${{ github.repository }}
        keep_files: true
        user_name: "github-actions[bot]"
        user_email: "github-actions[bot]@users.noreply.github.com"

  notify-dashboard:
    name: Notify Dashboard
    if: ${{ always() }}
    needs: [test, storeReports]
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # Runs a single command using the runners shell
      - name: Notify docusaurus repo
        env:
          GITHUB_TOKEN: ${{ secrets.PAT_TOKEN }}
        run: |
          gh api repos/mspnp/intern-js-pipeline/dispatches \
              --raw-field event_type=rebuild-site
```

    As a result the `playwright-onDemand.yml` file should look similar to the following code with extra lines to install additional dependencies if required.

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
    - name: Get current date
      id: date
      run: echo "::set-output name=date::$(date +'%Y-%m-%d')"
    - name: Upload HTML report as Artifact
      uses: actions/upload-artifact@v2
      env:
          TAG_NAME: test-report-${{ steps.date.outputs.date }}
      if: always()
      with: 
        name: onDemand
        path: pw-report/

  storeReports:
    name: Store reports
    if: ${{ always() }}
    needs: test
    runs-on: ubuntu-latest
    steps:
    - name: Download all workflow run artifacts
      uses: actions/download-artifact@v3
      id: download
    - name: Publish to external repo
      if: always()
      uses: peaceiris/actions-gh-pages@v3.7.3
      with:
        external_repository: mspnp/intern-js-pipeline
        publish_branch: gh-pages
        personal_token: ${{ secrets.PAT_TOKEN }}
        publish_dir: ${{steps.download.outputs.download-path}}
        destination_dir: test-reports/${{ github.repository }}
        keep_files: true
        user_name: "github-actions[bot]"
        user_email: "github-actions[bot]@users.noreply.github.com"

  notify-dashboard:
    name: Notify Dashboard
    if: ${{ always() }}
    needs: [test, storeReports]
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # Runs a single command using the runners shell
      - name: Notify docusaurus repo
        env:
          GITHUB_TOKEN: ${{ secrets.PAT_TOKEN }}
        run: |
          gh api repos/mspnp/intern-js-pipeline/dispatches \
              --raw-field event_type=rebuild-site
```

    This allows the `test` job to store the Playwright artifact. `storeReports` then pushes the Playwright artifact to a folder in the dashboard's `gh_pages`. Lastly, `notify-dashboard` sends a trigger to the dashboard notifying it to rebuild.

  3. Change the value of `external_repository` under the `storeReports` job from `mspnp/intern-js-pipeline` to the dashboard's organization and repository name
  4. In the `notify-dashboard` job, replace `mspnp/intern-js-pipeline` in `repos/mspnp/intern-js-pipeline/dispatches` with the dashboard's organization and repository name
  5. Triggering the playwright Github action should now cause the dashboard's rebuild workflow to execute
