import React, {Component} from 'react';

class Foo extends Component {
  state = {
    count:0
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        class方式设置state
        <button onClick={()=>{this.setState({count:count+1})}}>点了{count}次</button>
      </div>
    );
  }
}

export default Foo;
