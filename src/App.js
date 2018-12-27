import React, {Component} from 'react';

export default class App extends Component {
  render(){
    const {store,increment,decrement,incrementAsync} = this.props;
    return(
      <div>
        <h1>共有${store.getState()}把机关枪</h1>
        <button onClick={()=>store.dispatch(increment())}>加机关枪</button>
        <button onClick={()=>store.dispatch(decrement())}>减机关枪</button>
        <button onClick={()=>store.dispatch(incrementAsync())}>延迟上交机关枪</button>
      </div>
    )
  }
}