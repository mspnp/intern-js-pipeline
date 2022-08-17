---
sidebar_position: 1
---

# Setup a local repository

Set up a copy of the dashboard that runs locally:

1. Create a fork of `https://github.com/mspnp/intern-js-pipeline` and clone it into your local repository
2. In the `docusaurus.config.js` file change the value of `themeConfig.navbar.items.href` from `https://github.com/mspnp/intern-js-pipeline`to your Github repository link
3. In the `config.json` file change the value of `organization` from `staticwebdev` to the organization your repositories with test harnesses are in 
4. Save the changes
5. To see a local version of your dashboard run `npm start` from the root folder of the repository