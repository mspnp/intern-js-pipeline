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
    console.log(arrayNames);
    arrayNames.sort();
    return arrayNames;
 };

 export const getWeekReport = async(jobId) =>{
    return [true, true, true, false, true, false, false]
 }
