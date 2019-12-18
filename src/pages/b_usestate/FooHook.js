import React,{useState} from 'react'

const FooHook = (props) =>{
  //Q&A
  // 1.我们没有传入任何环境相关参数，为啥useState知道返回这个组件的state，而不是其他的组件的state
  // -- 因为JavaScript是单线程的，当前运行的js有且仅有一个上下文，就是当前组件中，从而进行推断

  // 2.为啥知道返回的count，setCount，而不是其他名字
  // --hook不需要知道我们返回的state的名字，是开发者的我们给他命名，我们可以给他命名成任意名字

  // 3.如果有多个变量，hook是怎么区分各个变量的
  //  --按照第一次调用的次序。所以我们必须按照固定的顺序调用，不能颠倒，不能增加，不能减少。

  const [count,setCount] = useState(0);

  // useState必须按照固定的顺序被调用
  // let times = 0;
  // // const [count,setCount] = useState(0);
  // // const [name,setName] = useState('小红');
  //
  // let name,setName;
  // let count,setCount;
  // times++;
  // if(times & 1){
  //    [count,setCount] = useState(0);
  //    [name,setName] = useState('小红');
  // }else{
  //   [name,setName] = useState('小红');
  //   [count,setCount] = useState(0);
  // }
  //


  // 惰性加载，支持基于props给state一个默认值，仅第一次设置
  // const initValue = props.defaultCount||0;
  // // 每次都会调用
  // console.log(initValue);
  // const [count,setCount] = useState(()=>{
  //   console.log('init...');
  //   return props.defaultCount||0
  // });


  return (
    <div>
      hooks方式方式设置state
      <button onClick={()=>{setCount(count+1)}}>点了{count}</button>
    </div>
  )




};

export default FooHook;
