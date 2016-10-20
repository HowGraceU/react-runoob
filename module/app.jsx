import React from 'react';

let WebSite, Name, Link;

WebSite = React.createClass({
  render: function () {
    return (
      <div>
        <Name name={this.props.name} />
        <Link site={this.props.site} />
      </div>
    )
  }
})

Name = React.createClass({
  render: function () {
    return (
      <h1>{this.props.name}</h1>
    )
  }
})

Link = React.createClass({
  render: function () {
    return (
      <a style = {{color: 'red', background: 'green'}}>{this.props.site}</a>
    )
  }
})

class App extends React.Component {
   render() {
      return (
        <WebSite name = "jqx" site = "www.runoob.com" />
      );
   }
}

export default App;
