
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducer';
import { BrowserRouter,Switch, Route, Redirect} from 'react-router-dom';
import DashBoard from './DashBoard';
import Login from "./Login";

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。

//是否开启chrome中redux的插件
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};

//compose组合多个中间件函数
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevTools
));


ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path={'/login'} exact component={Login}/>
        <Route path={'/dashboard'} component={DashBoard}/>
        <Redirect to={'/login'}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
