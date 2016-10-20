import React from 'react';

// Mounting：已插入真实 DOM
// Updating：正在被重新渲染
// Unmounting：已移出真实 DOM


// 生命周期的方法有：
// componentWillMount 在渲染前调用,在客户端也在服务端。
// componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
// componentWillReceiveProps 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
// shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
// 可以在你确认不需要更新组件时使用。
// componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
// componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
// componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。
let Warp = React.createClass({
  getInitialState: function () {
    return { checked: true }
  },

  clickHandle: function () {
    this.setState(function (state) {
      // console.log(state, state === this.state)
      return { checked: !state.checked }
    })
  },

  render: function () {
    let el = this.state.checked? <Child checked = {this.state.checked} />: <div>div</div>,
      string = this.state.checked? 'true': 'false';
    return (
      <div>
        <div onClick = {this.clickHandle}>{string}</div>
        {el}
      </div>
    )
  }
})

let Child = React.createClass({
  getInitialState: function () {
    return { num: 0 }
  },

  clickHandle: function () {
    this.setState(function (state) {
      console.log(state)
      return {num: state.num + 1}
    })
  },

  render: function () {
    return(
      <div onClick = {this.clickHandle}>{this.state.num}</div>
    )
  },

  componentWillMount: function () {
    console.log('在渲染前调用,在客户端也在服务端。')
  },

  componentDidMount: function () {
    console.log('在第一次渲染后调用，只在客户端。')
  },

  componentWillReceiveProps: function () {
    console.log('在组件接收到一个新的prop时被调用。')
  },

  shouldComponentUpdate: function () {
    console.log('返回一个布尔值。在组件接收到新的props或者state时被调用。')
    return true
  },

  componentWillUpdate: function () {
    console.log('在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。')
  },

  componentDidUpdate: function () {
    console.log('在组件完成更新后立即调用。在初始化时不会被调用。')
  },

  componentWillUnmount: function () {
    console.log('在组件从 DOM 中移除的时候立刻被调用。')
  }
})

class App extends React.Component {
   render() {
      return (
        <div>
          <Warp />
        </div>
      );
   }
}

export default App;
