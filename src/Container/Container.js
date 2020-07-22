import React from 'react';
import { Route } from 'react-router-dom';
import classes from './Container.css';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';

const container = () => (
    <div className={classes.Containers}>
        <header>
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/games">GAMES AVAILABLE</a></li>
                </ul>
            </nav>
        </header>
        <Route path="/" exact component={Home}/>
        <Route path="/games" exact component={Layout}/>


    </div>
);
export default container