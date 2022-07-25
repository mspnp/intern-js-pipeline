import axios from "axios";

export const getRepos = async(org) => {
    console.log("here");
    const link = "https://api.github.com/orgs/"+org+"/repos";
    const results = await axios.get(link,{
        headers: {
            
          }}
    );
    const arrayNames = results.data.map(element => {
        return element.name;
    });
    console.log(arrayNames);
    return arrayNames;
 };
