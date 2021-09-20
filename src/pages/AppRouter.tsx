import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import About from "./About";
import Posts from "./Posts";
import Error from "./Error";
import PostIdPage from "./PostIdPage";

const AppRouter = () => {
    return (
        <Switch>
            <Route path='/about'>
                <About/>
            </Route>
            <Route exact path='/posts'>
                <Posts/>
            </Route>
            <Route exact path='/posts/:id'>
                <PostIdPage/>
            </Route>
            <Route path='/error'>
                <Error/>
            </Route>
            <Redirect to='/error'/>
        </Switch>
    );
};

export default AppRouter;