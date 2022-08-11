import axios from "axios";
export const getRepos = async(org) => {
    const link = "https://api.github.com/orgs/"+org+"/repos";
    const results = await axios.get(link,{
        headers: {
           // Authorization: "Bearer "
          }}
    );
    const arrayNames = results.data.map(element => {
        if(partOfDashboard(org, element)){
            return element.name;
        }
    });
    arrayNames.sort();
    return arrayNames;
 };

 export const partOfDashboard = async(org, repo) =>{
    //console.log("calling partOfDashboard")
    const workflows = "https://api.github.com/repos/"+org+"/" +repo + "/actions/workflows";
    //console.log(process.REACT_APP_GITHUB_TOKEN)
    let onDemand = false;
    let scheduled = false;
    
    const workflows_results = await axios.get(workflows,{
        headers: {
          // Authorization: "Bearer "
        }}
    );
    
    if(workflows_results.data.total_count < 2){
        return false;
    }
    // await workflows_results.data.workflows.map(element => {
    //     //console.log(element);
    //     if(element.path == ".github/workflows/playwright-scheduled.yml"){
    //         console.log("found scheduled for "+ repo + " " + element.path);
    //         scheduled = true;
    //     }
    //     else if(element.path == ".github/workflows/playwright-onDemand.yml"){
    //         //console.log("found onDemand for "+ repo + " " + element.path)
    //         onDemand = true;
    //     }
    // });

    if(scheduled && onDemand){
        console.log("schedule is" + scheduled)
        console.log("onDemand is" + onDemand)
        return true;
    }
    else{
        return false;
    }
 };

 export const getWeekReport = async(org, repo) =>{
    const link = "https://api.github.com/repos/"+org+"/" +repo + "/actions/workflows/playwright-scheduled.yml/runs";
    const results = await axios.get(link,{
        headers: {
           // Authorization: "Bearer "
        }}
    );
    console.log(results);
    if(results.status == 404){
        return ["null", "null", "null", "null", "null", "null", "null" ]
    }
    let status = []
    for(let x =0 ; x < 7; x++){
        if(results.data.total_count > (6-x)){
            status = [...status, results.data.workflow_runs[6-x].conclusion]
        }
        else{
            status = [...status, "null"]
        }
    }
    console.log(status)
    // if(repo == "gatsby-test-testharness")
    // {
    //     return ["null", "null", "null", "success", "success", "success", "success" ]
    // }
    // else{
    //     return ["null", "null", "null", "null", "null", "null", "null" ]
    // }
    return status;
 }

