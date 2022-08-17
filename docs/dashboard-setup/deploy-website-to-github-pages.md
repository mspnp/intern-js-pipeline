---
sidebar_position: 2
---

# Deploy website to Github pages

Activate repository settings to host dashboard on Github pages:

1. Save all changes and push to main, this should trigger the github-pages workflow which will create a gh-pages branch for your Github repository
2. On your Github repository's `Settings` page, under `code and automation`, select the `Pages` tab
   1. Select `Deploy from a branch` as the source
   2. Select `gh-pages` as the branch
   3. Select `/(root)` as the root folder
   4. Click the save button
3. Your site will take a few minutes to deploy. After it does click on the site link provided on the `Pages` tab to view your dashboard