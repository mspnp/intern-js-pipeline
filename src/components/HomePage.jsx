import React from 'react'; 
import RepoCard from './RepoCard.jsx';
import Title from './Title';
import Backdrop from './Backdrop';

export function HomePage() {

  const array = ['angular-basic', 
                 'nuxtjs-starter',
                 'vue-basic',
                 'blazor-basic', 
                 //'nextjs-starter', 
                 'vanilla-basic', 
                 'roles-function',
                 'blazor-starter',
                 //'vanilla-api',
                 'svelte-basic',
                 'react-basic',
                ]

  return (
    <div >
        <Backdrop/>
        <Title/>
        {array.map(element => {
            return <RepoCard repoName={element} orgName="staticwebdev"/>
        })}
    </div>
  );
}

export default HomePage;
