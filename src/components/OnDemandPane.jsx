import React from "react";
import classes from './OnDemandPane.module.css';
import config from "../../docusaurus.config";

const OnDemandPane = (props) =>{

    const badgeLink  = "https://github.com/"+props.orgName+"/"+props.repoName+"/actions/workflows/playwright-onDemand.yml/badge.svg";
    
  
    const githubActionsLink ="https://github.com/"+props.orgName+"/"+props.repoName+"/actions/workflows/playwright-onDemand.yml";
    

    const reportLink = config.url + config.baseUrl +"test-reports/" + props.orgName + "/" + props.repoName + "/onDemand"
    

      return (
          <div className={classes.Pane}>
            <a href={githubActionsLink}>
              <h4>
                  Latest Run
              </h4>
            </a>
          <a href={reportLink}>
          <img src={badgeLink}/>
        </a>
        </div>
      );
  }
  
  export default OnDemandPane;
  