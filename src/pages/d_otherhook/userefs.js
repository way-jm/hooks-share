import React, {useRef} from 'react'


// 第一种用法
const TextInputWithFocusButton = () =>{
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};

export default TextInputWithFocusButton


//第二种用法--保留一个可变值
// const Counter = (props)=>{
//   console.log('counter render ...');
//   let number = useRef(0);
//   number.current++;
//   console.log(number.current);
//
//   return (
//     <div>
//       <h1>{props.count}</h1>
//     </div>
//   )
// };
//
// const Foo = ()=>{
//   const [count,setCount] = useState(0);
//   return (<div>
//     <button onClick={()=>{setCount(count+1)}}>点击</button>
//     <Counter  count={count}/>
//   </div>)
// };
// export default Foo;
