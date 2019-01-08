
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {postsBySubreddit,selectedSubreddit,fetchPostsIfNeeded,selectSubreddit} from "./index.redux";
import App from './containers/App';
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。

//是否开启chrome中redux的插件
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};


const reducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
});

//compose组合多个中间件函数
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    reduxDevTools
));


ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));



/*store.subscribe(function () {
  const state = store.getState();
  console.log(state.postsBySubreddit);
});


const state = store.getState();
console.log(state);

fetchPostsIfNeeded(state.selectedSubreddit);*/





