import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const App = (props) =>{
  
  const [count, setCount ] = useState(props.count);
  const [text, setText] = useState('');
  
  const increment = ()=>{
    setCount(count+1)
  }

  const decrement = ()=>{
    setCount(count-1)
  }

  // component did mount 
  // and component did update
  // here we are explicitly mentioning that this should run only on "count" state (dependency array)
  useEffect(()=>{
    console.log("This runs everytime only if 'count' updates");
    document.title = count;
  },[count]);
  
  // this depends on nothing i.e [], hence it will run only single time
  useEffect(()=>{
    console.log("This should only run once");
  },[]);

  // runs everytime, same as component did mount and component did update
  useEffect(()=>{
    console.log("This runs everytime");
  });

  const setManualText =(e)=>{
    setText(e.target.value);
  };

  return (
    <div>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <input value = {text} onChange={setManualText} ></input>
      {count >10 && <SubApp count={count}></SubApp>}
    </div>
  )
}

App.defaultProps = {
  count: 10
}





const SubApp = (props)=>{
  // this will be set up everytime this child component is created
  useEffect(()=>{
    console.log("Setting up side effect");

    //cleaning up the side effect when this child component is destroyed
    return ()=>{
      console.log('Cleaning up sideeffect')
    };

  },[]);

  return (
    <div>
      Square of count is {props.count*props.count}
    </div>
  );

}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
