---
sidebar_position: 1
---

# Component Overview

## App Structure

```
index
    └── Homepage
         ├── Title
         └── RepoCard
                ├── OnDemandPane
                └── ScheduledPane
                        └── TestResultBox
```

## Component roles

- index : Holds the home page
- Homepage : Contains the dashboard
- Title : Contains the title and an explanation of how to read the dashboard
- RepoCard : Holds all test information for one repository
- OnDemandPane : Left side of RepoCard, holds information about the last test run on the repository
- ScheduledPane : Right side of RepoCard, holds information about the last week's worth of scheduled tests
- TestResultBox : Colored box that represents the test result for one of the scheduled tests

## Other files

- getData.js : contains all external API calls
- config.json : contains configuration parameters that can be changed to set up the dashboard for other organizations
