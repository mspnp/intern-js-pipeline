import React, {useState, useEffect} from "react";
import classes from "./ScheduledPane.module.css";
import TestResultBox from "./TestResultBox";
import { getWeekReport } from "../getData";

//right side of white card that contains info about the last week of test reports
const ScheduledPane = (props) =>{

    //list of test results of the last week
    const [results, setResults] = useState([]);
    //list of dates on display
    const [date, setDate] = useState([]);

    const badgeLink= "https://github.com/"+props.orgName+"/"+props.repoName+"/actions/workflows/playwright-scheduled.yml/badge.svg";
    const githubActionsLink = "https://github.com/"+props.orgName+"/"+props.repoName+"/actions/workflows/playwright-scheduled.yml";
    
    const formattedDate = (year, month, day) =>{
      return (year+'-'+(month < 10 ? '0' : '') + month+'-'+ (day < 10 ? '0' : '') + day);
    }

    //gets results for last week of tests
    async function fetchResults() {  
      try {
        const asyncResponse = await getWeekReport(props.orgName, props.repoName);
        if([...asyncResponse] != [...results]){
          setResults(asyncResponse);
        }
                
      } catch (err) {
        console.error(err);
      }
    }

    useEffect(() => {
      let startDate = new Date();
      let dateArray = []
      for(let x =0; x< 7; x++){
        let todayFormatted = formattedDate(startDate.getFullYear(), startDate.getMonth()+1, startDate.getDate())
        dateArray  = [...dateArray, todayFormatted]
        startDate.setDate(startDate.getDate()-1);
      }
      if([...dateArray] != [...date]){
        setDate(dateArray);
      }

      fetchResults();
    }, []);


      return (
          <div className={classes.Pane}>
            <h4>
                <a href={githubActionsLink}>
                    Nightly Tests
                </a>
            </h4>
            <span>
                {
                    results.map((result, index) =>{
                        return <TestResultBox key={index} date={date[6-index]} pass={result} orgName={props.orgName} repoName={props.repoName}/>
                    })
                }
                
            </span>
            
          </div>
      );
  }
  
  export default ScheduledPane;
  