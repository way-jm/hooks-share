import {useState, useEffect} from 'react';

const useSize = ()=>{
  const [size,setSize] =  useState([window.innerWidth,window.innerHeight]);

  const onResize = () =>{
    setSize([window.innerWidth,window.innerHeight])
  };

  window.addEventListener("resize",onResize,false);

  useEffect(()=>{
    window.addEventListener("resize",onResize,false);

    //回调函数会在组件重新渲染和组件销毁的时候触发
    return ()=>{
      window.removeEventListener("resize",onResize,false)
    }
  });

  return size;

};


export default  useSize
