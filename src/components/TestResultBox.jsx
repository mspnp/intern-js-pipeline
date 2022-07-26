import React from "react";
import classes from "./TestResultBox.module.css";
const TestResultBox = (props) =>{
    
    const githubActionsLink = () => {
      return "https://github.com/"+props.orgName+"/"+props.repoName+"/actions/workflows/playwright.yml";
    }

    const box = () => {
        if(props.pass) {
            return <a className={classes.GreenBox} href={githubActionsLink()}/> 
        }
        else{
            return  <a className={classes.RedBox} href={githubActionsLink()}/>
        } 
    }
      return (
        box()
      );
  }
  
  export default TestResultBox;
  