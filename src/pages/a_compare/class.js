import React, {Component} from 'react';

class Foo extends Component {
  state = {
    size:[window.innerWidth,window.innerHeight],
    msg:123
  };


  onResize = () =>{
    this.setState({
      size:[window.innerWidth,window.innerHeight]
    })
  };

  //类成员方法---无法确认指向
  /** 在JSX回调中你必须注意 this 的指向。
  /* 在 JavaScript 中，
  /* 类方法默认没有 绑定 的。
  /* 如果你忘记绑定 this.handleClick
  /* 并将其传递给onClick，那么在直接调用该函数时*/

  //
  //  onClickMember(){
  //   this.setState({
  //     msg:'333'
  //   })
  // }

  //类属性方法--绑定了this
  onClickMember = ()=>{
    this.setState({
          msg:'333'
        })
    };

  componentDidMount() {
    window.addEventListener("resize",this.onResize);
    document.title = 'class换的标题'
  }

  componentDidUpdate() {
    window.addEventListener("resize",this.onResize)
  }

  componentWillUnmount() {
    console.log('remove class eventListener');
    window.removeEventListener("resize",this.onResize)
  }


  render() {
    const [x,y] = this.state.size;
    const {msg} = this.state;
    return (
      <div>
        {x}x{y}
        {msg}
        <button onClick={this.onClickMember}>点我</button>
      </div>
    );
  }
}

export default Foo;
