import React,{useState,useMemo} from 'react';

const Foo = ()=>{
  const [count,setCount] = useState(0);


  //与useEffect不同，发生在渲染中，返回值参与计算,
  // 第二个参数和useEffect策略一样，但是不要不传，这样意味着每次都计算，没有这么干的。
  const double = useMemo(()=>{
    return count *2
  },[count]);

  //测试count不重新渲染 count===3

  return (
    <div>
      <button
        onClick={()=>{setCount(count+1)}}
      >
        点击{count}双倍：{double}
      </button>
      <Counter count={count}/>
    </div>
  )

};

const Counter = (props) =>{
  return (
    <h1>{props.count}</h1>
  )
};

export default Foo;
