(self.webpackChunkdocusaurus_dashboard=self.webpackChunkdocusaurus_dashboard||[]).push([[4195],{1410:(e,t,a)=>{const r=a(7694),s=a(3618),o={title:"Nightly Integration Tests Dashboard",url:"https://mspnp.github.io",baseUrl:"/intern-js-pipeline/",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.ico",organizationName:"mspnp",projectName:"docusaurus",deploymentBranch:"gh-pages",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:6679},blog:{showReadingTime:!0,blogSidebarCount:"ALL",blogSidebarTitle:"Articles",postsPerPage:1},theme:{customCss:2295}}]],themeConfig:{tableOfContents:{minHeadingLevel:2,maxHeadingLevel:3},navbar:{title:"Dashboard",logo:{alt:"Dashboard Logo",src:"img/logo.svg"},items:[{type:"doc",docId:"intro",position:"left",label:"Documentation"},{href:"https://github.com/mspnp/intern-js-pipeline",position:"right",className:"header-github-link","aria-label":"GitHub repository"}]},footer:{style:"dark",links:[],copyright:"Copyright \xa9 "+(new Date).getFullYear()+" Microsoft. Built with Docusaurus."},prism:{theme:r,darkTheme:s}}};e.exports=o},6679:e=>{e.exports={tutorialSidebar:[{type:"autogenerated",dirName:"."}]}},5631:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var r=a(2164),s=a(7294);const o="Pane_iFq7";var n=a(1410),l=a.n(n);const c=e=>{const t="https://github.com/"+e.orgName+"/"+e.repoName+"/actions/workflows/playwright-onDemand.yml/badge.svg",a="https://github.com/"+e.orgName+"/"+e.repoName+"/actions/workflows/playwright-onDemand.yml",r=l().url+l().baseUrl+"test-reports/"+e.orgName+"/"+e.repoName+"/onDemand";return s.createElement("div",{className:o},s.createElement("a",{href:a},s.createElement("h4",null,"Latest Run")),s.createElement("a",{href:r},s.createElement("img",{src:t})))},i="Pane_FOkR",m="RedBox_D9Td",u="GreenBox_ZvGz",h="GreyBox_HevE",p=e=>{e.orgName,e.repoName;const t=l().url+l().baseUrl+"test-reports/"+e.orgName+"/"+e.repoName+"/"+e.date;return"success"==e.pass?s.createElement("a",{className:u,href:t}):"failed"==e.pass?s.createElement("a",{className:m,href:t}):s.createElement("a",{className:h})};var g=a(9669),d=a.n(g);const N=e=>{const[t,a]=(0,s.useState)([]),[r,o]=(0,s.useState)([]),n=(e.orgName,e.repoName,"https://github.com/"+e.orgName+"/"+e.repoName+"/actions/workflows/playwright-scheduled.yml");async function l(){try{const r=await(async(e,t)=>{const a="https://api.github.com/repos/"+e+"/"+t+"/actions/workflows/playwright-scheduled.yml/runs",r=await d().get(a,{headers:{}});if(404==r.status)return["null","null","null","null","null","null","null"];let s=[];for(let o=0;o<7;o++)s=r.data.total_count>6-o?[...s,r.data.workflow_runs[6-o].conclusion]:[...s,"null"];return s})(e.orgName,e.repoName);[...r]!=[...t]&&a(r)}catch(r){console.error(r)}}return(0,s.useEffect)((()=>{let e=new Date,t=[];for(let r=0;r<7;r++){let r=(a=e.getFullYear(),s=e.getMonth()+1,n=e.getDate(),a+"-"+(s<10?"0":"")+s+"-"+(n<10?"0":"")+n);t=[...t,r],e.setDate(e.getDate()-1)}var a,s,n;[...t]!=[...r]&&o(t),l()}),[]),s.createElement("div",{className:i},s.createElement("h4",null,s.createElement("a",{href:n},"Nightly Tests")),s.createElement("span",null,t.map(((t,a)=>s.createElement(p,{date:r[6-a],pass:t,orgName:e.orgName,repoName:e.repoName})))))},f="Card_O3LJ",b="Title_a4s6",E="Panes_fOsJ",y=e=>{const t="https://github.com/"+e.orgName+"/"+e.repoName;return s.createElement("div",{className:f},s.createElement("a",{href:t},s.createElement("h3",{className:b},e.repoName)),s.createElement("div",{className:E},s.createElement(c,{orgName:e.orgName,repoName:e.repoName}),s.createElement(N,{orgName:e.orgName,repoName:e.repoName})))},w="Title_ceoZ",v="Intro_c1ql",k=()=>s.createElement("div",null,s.createElement("h1",{className:w},"Nightly Integration Tests Dashboard"),s.createElement("p",{className:v},s.createElement("b",null,"For each repo card:"),"The left side (",s.createElement("i",null,"Latest Run"),") displays the test status for the most recent run (caused by commits, pull requests or manual dispatch). The right side (",s.createElement("i",null,"Nightly Tests"),") displays status of nightly integration tests for the past week (7 day history).")),D="staticwebdev";const _=function(){const[e,t]=(0,s.useState)([]);async function a(){try{const a=await(async e=>{const t="https://api.github.com/orgs/"+e+"/repos",a=await d().get(t,{headers:{}}),r=(await a.data.filter((async e=>await Promise.resolve(!0)))).map((e=>e.name));return r.sort(),r})(D);[...a]!=[...e]&&t(a)}catch(a){console.error(a)}}return(0,s.useEffect)((()=>{a()}),[]),s.createElement("div",null,s.createElement(k,null),s.createElement(y,{repoName:"gatsby-test-testharness",orgName:"HannahZhuSWE"}),e.map((e=>s.createElement(y,{repoName:e,orgName:D}))))},T="Background_WWgh";var L=a(2263);const C=()=>{const{siteConfig:e}=(0,L.Z)();return s.createElement(r.Z,{title:""+e.title,description:"Description will go into a meta tag in <head />"},s.createElement("main",null,s.createElement("div",{className:T},s.createElement(_,null))))}}}]);