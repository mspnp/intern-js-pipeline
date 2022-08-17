import React, {useState, useEffect} from 'react'; 
import RepoCard from './RepoCard.jsx';
import Title from './Title';
import { getRepos, partOfDashboard } from '../getData.js';
import config from '../../config.json';
export function HomePage() {

  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    async function fetchRepos() {
      try {
        //the following lines automatically get all repos in the org and filter for ones with a test harness
        const asyncResponse = await getRepos(config.organization);
        if([...asyncResponse] != [...repos]){
          setRepos(asyncResponse);
        }
      } catch (err) {
        console.error(err);
      }
    }
    // comment fetchRepos() and uncomment the following lines if you want to list the repos that should be on the dashboard
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

          if(partOfDashboard(config.organization,element))
          {
            return <RepoCard repoName={element} orgName={config.organization}/>
          }

        })} 
      
    </div>
  );
}

export default HomePage;
