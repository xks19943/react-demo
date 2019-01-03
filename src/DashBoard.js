import React from 'react';
import { Route, Switch, Link, Redirect} from 'react-router-dom';
import Counter from './Counter';
import {logout} from "./auth.redux";
import {connect} from 'react-redux';


const YiYing = function () {
  return(
    <div>
      <h1>一营</h1>
    </div>
  )
};

const ErYing = function() {
  return(
    <h1>二营</h1>
  )
};


const Error = function() {
  return(
    <h1>404</h1>
  )
};

class DashBoard extends React.Component{
  render(){
    let {auth,logout} = this.props;
    return auth.isLogin
      ? (
        <div>
          <ul>
            <li><Link to={'/dashboard/counter'}>counter</Link></li>
            <li><Link to={'/dashboard/yiying'}>一营</Link></li>
            <li><Link to={'/dashboard/erying'}>二营</Link></li>
          </ul>
          <button onClick={logout}>注销</button>
          <Switch>
            <Route path={'/dashboard/counter'} component={Counter}/>
            <Route path={'/dashboard/yiying'} component={YiYing}/>
            <Route path={'/dashboard/erying'} component={ErYing}/>
          </Switch>
        </div>
      )
      : <Redirect to={'/login'}/>
  }
}

const mapStateToProps = function (state) {
  return {
    auth: state.auth
  }
};

export default connect(
  mapStateToProps,
  {logout}
)(DashBoard);