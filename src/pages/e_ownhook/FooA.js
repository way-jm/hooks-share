import React from 'react';
import useSize from './useSize'

const FooA = () => {
  const [x,y] = useSize();
  return (<div>
    <span>组件的复用1</span>
    <h1>{x}x{y}</h1>
  </div>)
};

export default FooA
