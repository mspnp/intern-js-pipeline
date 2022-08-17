import axios from "axios";


export const getRepos = async(org) => {
    const link = "https://api.github.com/orgs/"+org+"/repos";
    const results = await axios.get(link,{
        headers: {
          }}
    );

    const arrayRepos = await Promise.all(results.data.filter( (element )=> {
        //original line: return partOfDashboard(org, element.name)
        //the line below is for debugging purposes
        return Promise.resolve(false)
    }));

    const arrayNames = arrayRepos.map(element =>{
        return element.name
    })
    
    arrayNames.sort();
    return arrayNames;
 };

 export const partOfDashboard = async(org, repo) =>{
    const workflows = "https://api.github.com/repos/"+org+"/" +repo + "/actions/workflows";
    let onDemand = false;
    let scheduled = false;
    
    const workflows_results = await axios.get(workflows,{
        headers: { 
        }}
    );
    
    if(workflows_results.status == 404){
        return false
    }
    
    if(workflows_results.data.total_count < 2){
        return false;
    }
    await workflows_results.data.workflows.map(element => {
        if(element.path == ".github/workflows/playwright-scheduled.yml"){
            scheduled = true;
        }
        else if(element.path == ".github/workflows/playwright-onDemand.yml"){
            onDemand = true;
        }
    });

    if(scheduled && onDemand){
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
        }}
    );
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

    return status;
 }

