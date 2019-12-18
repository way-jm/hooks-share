import React,{useState,useMemo,memo} from 'react';

const Foo = ()=>{
  const [count,setCount] = useState(0);

  const double = useMemo(()=>{
    return count *2
    // eslint-disable-next-line
  },[count===3]);


  const onClick = ()=>{
    console.log("click");
  };

  // const onClick = useMemo(()=>{
  //   return ()=>{
  //       console.log("click");
  //     };
  // },[]);

  //useCallback
  // const onClick = useCallback(()=>{
  //   console.log("click");
  // },[]);


  return (
    <div>
      <button
        onClick={()=>{setCount(count+1)}}
      >
        点击{count}双倍：{double}
      </button>
      <Counter
        count={double}
        onClick={onClick}
      />
    </div>
  )

};

// //React.memo 为高阶组件。它与 React.PureComponent
// const Counter = memo((props) =>{
//   //memo包裹以后仅仅当props发生变化的时候，才会发生重新渲染
//   console.log('counter render');
//   return (
//     <h1>{props.count}</h1>
//   )
// });


//传递的方法每次都发生了变化
const Counter = memo((props) =>{
  console.log('counter render');
  return (
    <h1 onClick={props.onClick}>{props.count}</h1>
  )
});

export default Foo;
