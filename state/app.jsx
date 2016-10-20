import React from 'react';

let Click = React.createClass({
  getInitialState: function () {
    return { liked: false }
  },

  handleClick: function (event) {
    this.setState({ liked: !this.state.liked })
  },

  render: function () {
    let like = this.state.liked? '喜欢': '不喜欢';

    return (
      <div onClick = {this.handleClick}>
        <b>{like}</b>
      </div>
    )
  }
})

class App extends React.Component {
   render() {
      return (
        <Click />
      );
   }
}

export default App;
