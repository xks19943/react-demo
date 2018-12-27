
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {counter} from "./index.redux";

import App from './App';

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。

//是否开启chrome中redux的插件
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};

//compose组合多个中间件函数
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevTools
));


ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
