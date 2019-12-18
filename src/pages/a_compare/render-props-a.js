import React, {Component} from 'react';

class RenderPropsA extends Component {
  render() {
    const [x,y] = this.props.size;
    return (
      <div>
        渲染属性a组件
        {x}x{y}
      </div>
    );
  }
}



export default RenderPropsA;
