import React from 'react';
import useSize from './useSize'

const FooB = () => {
  const [x,y] = useSize();
  return (<div>
    <span>组件的复用2</span>
    <h1>{x}x{y}</h1>
  </div>)
};

export default FooB
