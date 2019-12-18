import React, {Component} from 'react';

class Foo extends Component {
  state = {
    count:0,
    size:[window.innerWidth,window.innerHeight]
  };

  onResize = () =>{
    this.setState({
      size:[window.innerWidth,window.innerHeight]
    })
  };


  componentDidMount() {
    document.title = this.state.count;
    window.addEventListener("resize",this.onResize,false)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    document.title = this.state.count;
  }

  componentWillUnmount() {
    window.removeEventListener("resize",this.onResize)
  }


  render() {
    const { count, size } = this.state;
    return (
      <div>
        <button onClick={()=>{this.setState({count:count+1})}}>点了{count}次</button>
        <span>{size[0]}x{size[1]}</span>
      </div>
    );
  }
}

export default Foo;
