import axios from "axios";

export const getRepos = async(org) => {
    const link = "https://api.github.com/orgs/"+org+"/repos";
    const results = await axios.get(link,{
        headers: {
            
          }}
    );
    const arrayNames = results.data.map(element => {
        return element.name;
    });
    return arrayNames;
 };

 export const getWeekReport = async(org, repo) =>{
    const link = "https://api.github.com/repos/"+org+"/" +repo + "/actions/workflows/playwright-scheduled.yml/runs";
    const results = await axios.get(link,{
        headers: {
            per_page: 7
        }}
    );
    // const arrayNames = results.data.map(element => {
    //     return element.name;
    // });
    return [true, true, true, false, true, false, false]
 }