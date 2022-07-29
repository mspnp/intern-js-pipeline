import React from 'react';
import classes from './Title.module.css';

const Title = () =>{
    return (
        <div>
            <h1 className={classes.Title}>
                Staticwebdev Dashboard
            </h1>
            <p className={classes.Intro}>
                The right side of each repo card displays the most recent test status and the left side displays the status of the nightly tests from the past week.
            </p>
        </div>
    );
}

export default Title;