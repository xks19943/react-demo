
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {counter, increment, decrement, incrementAsync} from "./index.redux";

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


function render() {
  ReactDom.render(
    <App
      store={store}
      increment={increment}
      decrement={decrement}
      incrementAsync={incrementAsync}/>,
    document.getElementById('root'));
}

render();

//当state变化的时候触发重新渲染的方法
store.subscribe(()=>{
  render();
});
