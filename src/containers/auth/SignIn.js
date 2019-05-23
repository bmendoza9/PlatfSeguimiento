import React, { Component } from 'react';
import LogoCRREAD from './LogoCRREAD.png';
import PropTypes from 'prop-types';
import { login } from '../../client/actions/login';
import './SingIn.css';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = async(e) => {
      e.preventDefault();

      try {
        //await Auth.signIn(this.state.email, this.state.password);
        this.props.userHasAuthenticated(true);
      } catch (e) {
        alert(e.message);
      }
    }
  render() {
    return (
      //Contenido
      <div className="container" >

        <div className="row">
          <div className="col s6">
              <img className="responsive-img" src="https://cdn.pixabay.com/photo/2019/05/16/23/39/apple-tree-4208594_960_720.jpg" id="img" alt="imagen"></img>
          </div>
          <div className="col s6">
            <div className="container" id="form-side">
              <img className="responsive-img" src={LogoCRREAD} alt="logo"/>
              <form onSubmit={this.handleSubmit} className ="white">
                  <h5 className="grey-text text-darken-3">Ingresar</h5>
                  <div className="input-field">
                    <label htmlFor="email">Correo</label>
                    <input type="email" id="email" required onChange={this.handleChange}/>
                  </div>
                  <div className="input-field">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" required onChange={this.handleChange}/>
                  </div>
                  <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0 waves-effect waves-light">Ingresar</button>
                  </div>
              </form>
              <br/>
              <a href="#">Quiero registrar a un familiar o conocido</a>
            </div>
          </div>
        </div>
               
      </div>
      
    )
  }
}
SignIn.propTypes = {
  login: PropTypes.func.isRequired
}
SignIn.contextTypes = {
  router: PropTypes.object.isRequired 
}

export default SignIn
