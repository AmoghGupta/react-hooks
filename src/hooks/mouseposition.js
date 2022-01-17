import React, {useEffect, useContext, useState} from 'react';

// custom hook
const useMousePosition = ()=>{
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouseListener = (e)=>{
      setPosition({
        x : e.pageX,
        y : e.pageY,
      });
    };

    // regsiter the event only once
    useEffect(()=>{
      document.addEventListener('mousemove',handleMouseListener);

      // unregistering to prevent memory leaks
      return ()=>{
        document.removeEventListener('mousemove',handleMouseListener);
      };
    },[]);
   

    return position;
}

export default useMousePosition;