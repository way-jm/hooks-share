import React,{useState,useEffect} from 'react'

const Foo = () => {
  const [size,setSize] =  useState([window.innerWidth,window.innerHeight]);

  const onResize = () =>{
    setSize([window.innerWidth,window.innerHeight])
  };

  useEffect(()=>{
    window.addEventListener("resize",onResize);
    return ()=>{
      console.log('remove hooks eventListener');
      window.removeEventListener("resize",onResize)
    }
  });

  return (<div>
    {size[0]}x{size[1]}
  </div>)
};

export default Foo;
