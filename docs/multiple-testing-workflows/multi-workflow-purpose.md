---
sidebar_position: 1
---

# The Purpose of Multiple Github Workflows

Differentiating workflows allows for the separation of test report information for specific purposes. For this dashboard we will separate the tests into scheduled tests and on demand tests. 
  - Scheduled tests are run nightly and are intended to give a gneral idea of the repository's history. For example,  scheduled tests give an idea of if a repository has been failing tests for a long period of time or if it was a very recent break.
  - On demand tests are intended to show the repository's latest status. These tests run nightly and also when there's a push or a pull request made to the main branch.
