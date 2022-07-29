import React from "react";
import classes from './OnDemandPane.module.css';

const OnDemandPane = (props) =>{

    const badgeLink  = () =>{
      return "https://github.com/"+props.orgName+"/"+props.repoName+"/actions/workflows/playwright.yml/badge.svg";
    }
  
    const githubActionsLink = () => {
      return "https://github.com/"+props.orgName+"/"+props.repoName+"/actions/workflows/playwright.yml";
    }

      return (
          <div className={classes.Pane}>
            <h4>
                Latest Run
            </h4>
          <a href={githubActionsLink()}>
          <img src={badgeLink()}/>
        </a>
        </div>
      );
  }
  
  export default OnDemandPane;
  