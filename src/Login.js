import React from 'react';
import {connect} from 'react-redux';
import {login} from "./auth.redux";
import { Redirect } from 'react-router-dom';

class Login extends React.Component{
  render(){
    let {auth,login} = this.props;
    return auth.isLogin
      ?  <Redirect to={'/dashboard'}/>
      :
      (
        <div>
          <button onClick={login}>登录</button>
          <span>请登录后才能操作</span>
        </div>
      )
  }
}


const mapStateToProps = function (state) {
  return {
    auth: state.auth
  }
};

export default connect(
  mapStateToProps,
  {login}
)(Login);
