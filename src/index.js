import React, {useState, useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {countReducer} from "./reducers/count";
import SubApp from "./component/subapp";
import CountContext from "./context/count";



const App = (props) =>{
  
  //hooks
  // const [count, setCount ] = useState(props.count);
  const [count, dispatch] = useReducer(countReducer,0)
  const [text, setText] = useState('');
  
  const increment = ()=>{
    // setCount(count+1)
    dispatch({type:'POPULATE_COUNT',count:count+1});
  }

  const decrement = ()=>{
    // setCount(count-1)
    dispatch({type:'POPULATE_COUNT',count:count-1});
  }

  const resetCount  = ()=>{
    dispatch({type:'RESET_COUNT',default:0});
  }

  //hook
  // similar to component did mount 
  // and component did update
  // here we are explicitly mentioning that this should run only on "count" state (dependency array)
  useEffect(()=>{
    console.log("This runs everytime only if 'count' updates");
    document.title = count;
  },[count]);
  
  //hook
  // this depends on nothing i.e [], hence it will run only single time
  useEffect(()=>{
    console.log("This should only run once when component loads");
    dispatch({type:'POPULATE_COUNT',count:5});
  },[]);

  //hook
  // runs everytime, same as component did mount and component did update
  useEffect(()=>{
    console.log("This runs everytime");
  });

  const setManualText =(e)=>{
    setText(e.target.value);
  };

  return (
    //passing the data which we want to be shared between the components 
    // using the context which we created
    // contexts are helpful where we dont want to pass data using props
    // they are similar to stores from where data can be fethched
    // and whenever the data changes they are immedtiatly reflected as component rerenders 
    // with the updated values
    <CountContext.Provider value={{count, dispatch}}>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={resetCount}>Reset</button>
      <input value = {text} onChange={setManualText} ></input>
      {count >10 && <SubApp></SubApp>}
    </CountContext.Provider>
  )
}

// App.defaultProps = {
//   count: 10
// }

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
