import React, {Component} from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementAsync } from './index.redux';

class App extends Component {
  render(){
    const {number,increment,decrement,incrementAsync} = this.props;
    return(
      <div>
        <h1>共有${number}把机关枪</h1>
        <button onClick={increment}>加机关枪</button>
        <button onClick={decrement}>减机关枪</button>
        <button onClick={incrementAsync}>延迟上交机关枪</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return { number: state }
};
const actionCreators = { increment, decrement, incrementAsync };

App = connect(mapStateToProps, actionCreators)(App);

export default App;
