import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/Users/UserContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializedApp } from './redux/app-reducer';
import { withRouter } from 'react-router-dom';
import Preloader from './common/Preloader';

class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp();
    }
    
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer />
                    <Navbar />
                    <div className="app-wrapper-content">
                        <Route path='/profile/:userId?' render={() => <Profile />}>
                        </Route>
                        <Route path="/message" render={() => <DialogsContainer />}>
                        </Route>
                        <Route path="/news" render={() => <News></News>}></Route>
                        <Route path="/music" render={() => <Music></Music>}></Route>
                        <Route path="/users" render={() => <UserContainer />}></Route>
                        <Route path="/settings" render={() => <Settings></Settings>}></Route>
                        <Route path="/login" render={() => <Login />}></Route>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const mapDispatchToProps = (dispatch) => {
    return {
        initializedApp: () => dispatch(initializedApp()),
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);
