import React from 'react'; 
import RepoCard from './RepoCard.jsx';
import Title from './Title';
import Backdrop from './Backdrop';

export function HomePage() {

  const array = ['vue-basic', 'svelte-basic', 'blazor-basic', 'angular-basic']

  return (
    <div >
        <Backdrop/>
        <Title/>
        {array.map(element => {
            return <RepoCard repoName={element}/>
        })}
    </div>
  );
}

export default HomePage;
