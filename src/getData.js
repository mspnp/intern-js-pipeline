import axios from "axios";

export const getRepos = async(org) => {
    const link = "https://api.github.com/orgs/"+org+"/repos";
    const results = await axios.get(link,{
        headers: {
            Authorization: "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",
          }}
    );
    const arrayNames = results.data.map(element => {
        return element.name;
    });
    console.log(arrayNames);
    return arrayNames;
 };