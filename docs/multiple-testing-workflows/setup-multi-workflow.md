---
sidebar_position: 2
---

# Setup for Multiple Workflows

Separate the `playwright.yml` file into two separate Github action files:

1. In the same directory as `playwright.yml` create a new file named `playwright-scheduled.yml`
2. Copy the contents of `playwright.yml` into `playwright-scheduled.yml` and make the following changes:
  1. Change the `name` field of the workflow from `Playwright tests` to `Scheduled Playwright tests` 
  2. Remove the following lines underneath the `on` field

  ```yml
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
  ```

  3. Under the job `test` and step named `Upload HTML report as Artifact` change the value of the `name` field under the `with` field from `onDemand` to `${{ steps.date.outputs.date }}`
3. Rename the file `playwright.yml` to `playwright-onDemand.yml`