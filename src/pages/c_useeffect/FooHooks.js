import React,{useState,useEffect} from 'react'

const FooHook = () =>{

  const [count,setCount] = useState(0);
  const [size,setSize] =  useState([window.innerWidth,window.innerHeight]);

  const onResize = () =>{
    setSize([window.innerWidth,window.innerHeight])
  };

  useEffect(()=>{
    document.title = count;
  });

  useEffect(()=>{
    window.addEventListener("resize",onResize,false);

    //回调函数会在组件重新渲染和组件销毁的时候触发
    return ()=>{
      window.removeEventListener("resize",onResize,false)
    }
  });

  // 第二个参数不传，表示每次都执行，[]表示只运行一次，[param]对比param的值，发生变化就重新执行，
  // 每一项都不变，才会组织副作用的执行
  // useEffect(()=>{
  //   console.log('count:',count)
  //   },[count]);


  //清理副作用的演示

  // const doClick =  () =>{
  //   console.log("click")
  // };
  //
  // useEffect(()=>{
  //   document.querySelector("#size").addEventListener("click",doClick);
  //
  //   return ()=>{
  //     console.log('uninstall');
  //     document.querySelector("#size").removeEventListener("click",doClick)
  //   }
  // });

  return (
    <div>
      useEffect
      <button onClick={()=>{setCount(count+1)}}>点了{count}</button>
      {
        count%2
          ?<span id="size">{size[0]}x{size[1]}</span>
          :<p id="size">{size[0]}x{size[1]}</p>
      }
    </div>
  )

};

export default FooHook;
