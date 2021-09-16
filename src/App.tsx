import React from 'react';
import './App.css';
import About from "./pages/About";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import Error from "./pages/Error";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/posts'>
                    <Posts/>
                </Route>
                <Route path='/error'>
                    <Error/>
                </Route>
                <Redirect to='/error'/>
            </Switch>

        </BrowserRouter>
    );
}

export default App;
