//! importing necessary files and/or libraries
import React, { Component } from 'react';
import EmojiContainer from './EmojiContainer';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { loadEmojis, loadCategories } from '../../store/middleware/apiEmojiSearch';
import { validateSession, endUsersSession } from '../../store/middleware/serverAuth';
import Login from '../../auth/Login';
import Registration from '../../auth/Registration';

class App extends Component {

  //todo: inside this lifecycle method I'm loading the emojis and categories to work with later on throughout the application
  componentDidMount() {
    //todo: getting the below methods from props
    const { user, loadEmojis, loadCategories, validateSession, loggedInStatus } = this.props
    loadEmojis()
    loadCategories()
    validateSession(loggedInStatus)
    console.log(user)
  }

  handleLogout = () => {
    this.props.logoutUser()
    console.log(this.props.user)
  }

  render() {
    return (
      <div className="App">
        <Login />
        <Registration />
        <button onClick={this.handleLogout} type="submit">Logout</button>
        <EmojiContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInStatus: state.authRed.loggedInStatus,
  user: state.authRed.user
})

//todo: mapping my dispatch to props 
const mapDispatchToProps = dispatch => ({
  loadEmojis: () => dispatch(loadEmojis()),
  loadCategories: () => dispatch(loadCategories()),
  validateSession: status => dispatch(validateSession(status)),
  logoutUser: () => dispatch(endUsersSession())
})

//todo: using connect() allows me to 'connect' a component to the store
export default connect(mapStateToProps, mapDispatchToProps)(App);
