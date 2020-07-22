import React from 'react';
import classes from './Home.css'


const home = () => (
    <div className={classes.Home}>
        
         <video src="/HOME.mp4" type="video/mp4" controls autoPlay loop></video>
    </div>
);

export default home;