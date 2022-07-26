import React from "react";
import classes from "./TestResultBox.module.css";
import config from "../../docusaurus.config";

//individual colored boxes representing each of nightly tests done throughout the week
const TestResultBox = (props) =>{
    
    const reportLink =config.url + config.baseUrl +"test-reports/" + props.orgName + "/" + props.repoName + "/"+ props.date 
    
    //determines color of the box
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
  