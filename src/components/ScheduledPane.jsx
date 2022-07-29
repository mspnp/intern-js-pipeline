import React, {useState, useEffect} from "react";
import classes from "./ScheduledPane.module.css";
import TestResultBox from "./TestResultBox";
import { getWeekReport } from "../getData";
const ScheduledPane = (props) =>{

    const [results, setResults] = useState([]);

    useEffect(() => {
      async function fetchResults() {
        try {
          const asyncResponse = await getWeekReport('staticwebdev');
          setResults(asyncResponse);
        } catch (err) {
          console.error(err);
        }
      }
  
      fetchResults();
    }, []);

    const badgeLink  = () =>{
        return "https://github.com/"+props.orgName+"/"+props.repoName+"/actions/workflows/playwright-scheduled.yml/badge.svg";
    }
    
    const githubActionsLink = () => {
        return "https://github.com/"+props.orgName+"/"+props.repoName+"/actions/workflows/playwright-scheduled.yml";
    }

      return (
          <div className={classes.Pane}>
            <h4>
                <a href={githubActionsLink()}>
                    Nightly Tests
                </a>
            </h4>
            <span>
                {
                    results.map(result =>{
                        return <TestResultBox pass={result} orgName={props.orgName} repoName={props.repoName}/>
                    })
                }
                
            </span>
            
          </div>
      );
  }
  
  export default ScheduledPane;
  