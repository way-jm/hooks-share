import React, {Component} from 'react';

class RenderPropsB extends Component {
  render() {
    const [x,y] = this.props.size;
    return (
      <div>
        渲染属性b组件
        {x}x{y}
      </div>
    );
  }
}

// const comB = <ResizeAble
//   render={
//     size => <RenderPropsB size={size}/>
//   }
// />;

export default RenderPropsB;
