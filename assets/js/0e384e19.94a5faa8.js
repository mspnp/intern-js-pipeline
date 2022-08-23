"use strict";(self.webpackChunkdocusaurus_dashboard=self.webpackChunkdocusaurus_dashboard||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=p(r),u=n,f=h["".concat(l,".").concat(u)]||h[u]||c[u]||a;return r?o.createElement(f,s(s({ref:t},d),{},{components:r})):o.createElement(f,s({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},s="Project Intro",i={unversionedId:"intro",id:"intro",title:"Project Intro",description:"Documentation and the code samples that are apart of them play an important role in a developer's experience. Code samples are the starting point for many developers and it's critical that they work in order for developers to gain a deeper understanding of the documentation as well as the technology itself.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/intern-js-pipeline/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Repository Integration",permalink:"/intern-js-pipeline/docs/category/repository-integration"}},l={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"Goals",id:"goals",level:2},{value:"The Solution",id:"the-solution",level:2},{value:"Demo",id:"demo",level:2},{value:"Behind the Scenes",id:"behind-the-scenes",level:2},{value:"Try it Yourself",id:"try-it-yourself",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"project-intro"},"Project Intro"),(0,n.kt)("p",null,"Documentation and the code samples that are apart of them play an important role in a developer's experience. Code samples are the starting point for many developers and it's critical that they work in order for developers to gain a deeper understanding of the documentation as well as the technology itself."),(0,n.kt)("h2",{id:"the-problem"},"The Problem"),(0,n.kt)("p",null,"With the thousands of code samples that are apart of our docs it's infeasible to manually ensure they all work. Code samples may break from modifications to the sample code, dependency updates, etc. We currently have a reactive solution, relying on our users to file Github issues in order to report that a code sample is broken. However, a portion of developers won't report the issue and instead choose to silently swap to another point of reference."),(0,n.kt)("h2",{id:"goals"},"Goals"),(0,n.kt)("p",null,"This project aims to improve the quality of our code samples by running automated nightly integration tests on each repository referenced in documentation and then consolidating and presenting test results of all repositories on a dashboard. The goal was to take a proactive approach to ensuring all code samples work without wasting time manually testing each one."),(0,n.kt)("h2",{id:"the-solution"},"The Solution"),(0,n.kt)("p",null,"The solution was to create a network of repositories each consisting of their own test harness and one overarching dashboard to report test results of each repository. As seen below, the dashboard consists of one pane per repository and each pane displays the results of latest test run on the left and a weekly summary of test reports on the right."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Project home page",src:r(9514).Z,width:"3148",height:"1796"})),(0,n.kt)("h2",{id:"demo"},"Demo"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"place clip here")),(0,n.kt)("h2",{id:"behind-the-scenes"},"Behind the Scenes"),(0,n.kt)("p",null,"The project consists of multiple repositories with test harnesses, Github workflows to run the tests nightly or after changes to the main branch, and a dashboard to display test results."),(0,n.kt)("p",null,"Every night the scheduled workflow triggers and when new changes are made to the main branch of each repository, the on demand workflow is triggered. These workflows run the repository's Playwright tests and upload the test reports to the ",(0,n.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch of the dashboard. The dashboard is then triggered to rebuild and show the latest test results."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"System architecture",src:r(2102).Z,width:"1996",height:"660"})),(0,n.kt)("h2",{id:"try-it-yourself"},"Try it Yourself"),(0,n.kt)("p",null,"To set up this project on your own repositories, follow the step by step instructions provided in ",(0,n.kt)("inlineCode",{parentName:"p"},"Repository Integration"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Dashboard Setup"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"Setup Multiple Workflows for Different Testing Purposes"),"."))}c.isMDXComponent=!0},9514:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/home-page-d51d1668c8b0b648cf0899054d59dd14.png"},2102:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/system-architecture-d0be6782391cb7b5e837c9296d7fb226.png"}}]);