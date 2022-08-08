---
sidebar_position: 3
---

# Report Results to Dashboard

Follow the steps below to report the test results to the dashboard:

1. Append the following steps to the `playwright.yml` file below the current steps in the `test` job.

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
```