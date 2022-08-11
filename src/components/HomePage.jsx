import React, {useState, useEffect} from 'react'; 
import RepoCard from './RepoCard.jsx';
import Title from './Title';
import { getRepos, partOfDashboard } from '../getData.js';
export function HomePage() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const asyncResponse = await getRepos('staticwebdev');
        if([...asyncResponse] != [...repos]){
          console.log("still changing repos" + asyncResponse + " " + repos)
          setRepos(asyncResponse);
        }
      } catch (err) {
        console.error(err);
      }
    }
    if([...repos] !=['vanilla-basic', 'vanilla-api', 'nextjs-starter', 'nuxtjs-starter', 'angular-basic', 'react-basic', 'vue-basic', 'blazor-starter', 'blazor-basic', 'roles-function', '30DaysOfSWA' ] ){
      setRepos(['vanilla-basic', 'vanilla-api', 'nextjs-starter', 'nuxtjs-starter', 'angular-basic', 'react-basic', 'vue-basic', 'blazor-starter', 'blazor-basic', 'roles-function', '30DaysOfSWA' ])
    }
    
    //fetchRepos();
  }, []);

  return (
    <div >
        <Title/>
        <RepoCard repoName='gatsby-test-testharness' orgName= 'HannahZhuSWE'/>
        { repos.map(element => {

          if(partOfDashboard("staticwebdev",element))
          {
            return <RepoCard repoName={element} orgName="staticwebdev"/>
          }

        })} 
      
    </div>
  );
}

/*

 { repos.map(element => {
          if (partOfDashboard("staticwebdev", element) === 404){
            return <RepoCard repoName={element} orgName="staticwebdev"/>
          }
        })} 

*/
export default HomePage;
