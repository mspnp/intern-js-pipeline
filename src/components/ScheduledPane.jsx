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

      return (
          <div className={classes.Pane}>
            <h4>
                Weekly View
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
  