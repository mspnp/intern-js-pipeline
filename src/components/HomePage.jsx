import React, {useState, useEffect} from 'react'; 
import RepoCard from './RepoCard.jsx';
import Title from './Title';
import Backdrop from './Backdrop';
import { getRepos } from '../getData.js';
export function HomePage() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const asyncResponse = await getRepos('staticwebdev');
        setRepos(asyncResponse);
      } catch (err) {
        console.error(err);
      }
    }

    fetchRepos();
  });

  return (
    <div >
        <Backdrop/>
        <Title/>
        <RepoCard repoName='gatsby-test-testharness' orgName= 'HannahZhuSWE'/>
        {repos.map(element => {
            return <RepoCard repoName={element} orgName="staticwebdev"/>
        })}
    </div>
  );
}

export default HomePage;
