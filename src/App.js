import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/Users/UserContainer';

const App = (props) => {
    // debugger;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header></Header>
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile
                        state={props.state}
                        dispatch={props.dispatch}></Profile>}>
                    </Route>
                    <Route path="/message" render={() => <DialogsContainer />}>
                    </Route>
                    <Route path="/news" render={() => <News></News>}></Route>
                    <Route path="/music" render={() => <Music></Music>}></Route>
                    <Route path="/users" render={() => <UserContainer />}></Route>
                    <Route path="/settings" render={() => <Settings></Settings>}></Route>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
