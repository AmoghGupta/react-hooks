import React, {useEffect, useContext} from 'react';
import CountContext from "../context/count";

const SubApp = (props)=>{

    //access data from the context which we created
    const {count, dispatch} = useContext(CountContext);

    // this will be set up everytime this child component is created and run only once
    useEffect(()=>{
      console.log("Setting up side effect");
  
      //cleaning up the side effect when this child component is destroyed
      return ()=>{
        console.log('Cleaning up sideeffect')
      };
  
    },[]);
  
    return (
      <div>
        Square of count is {count*count}
      </div>
    );
  
}

export {SubApp as default};