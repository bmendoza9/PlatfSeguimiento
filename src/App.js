import React, { Component, Fragment } from "react";
import SignIn from './containers/auth/SignIn';
import Routes from "./Routes";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  handleLogout = event => {
    this.userHasAuthenticated(false);
  }
  
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    
    return (
        <div className="App container" style = {{height:"100vh"}}>
          {/* <button onClick= {this.handleLogout}>Salir</button> */}
          <Routes childProps={childProps} />        
        </div>
        
    );
  }
}

export default App;
