import React from "react";
import classes from "./TestResultBox.module.css";
import config from "../../docusaurus.config";

const TestResultBox = (props) =>{
    
    const githubActionsLink =  "https://github.com/"+props.orgName+"/"+props.repoName+"/actions/workflows/playwright.yml";
    

    const reportLink =config.url + config.baseUrl +"test-reports/" + props.orgName + "/" + props.repoName + "/"+ props.date 
    

    const box = () => {
        if(props.pass == "success") {
            return <a className={classes.GreenBox} href={reportLink}/> 
        }
        else if(props.pass == "failed"){
            return  <a className={classes.RedBox} href={reportLink}/>
        } 
        else{
          return  <a className={classes.GreyBox}/>
        }
    }


    return (
      box()
    );
  }
  
  export default TestResultBox;
  