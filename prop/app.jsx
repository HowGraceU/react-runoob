import React from 'react';

var WebSite = React.createClass({
  //getDefaultProps设置prop
  getInitialState: function() {
    return {
      name: "jqx",
      site: "http://www.runoob.com"
    };
  },

  render: function() {
    return (
      <div>
        <Name name={this.state.name} />
        <Link site={this.state.site} />
      </div>
    );
  }
});

var Name = React.createClass({
  render: function() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
});

var Link = React.createClass({
  render: function() {
    return (
      <a href={this.props.site}>
        {this.props.site}
      </a>
    );
  }
});

class App extends React.Component {
   render() {
      return (
        <WebSite />
      );
   }
}

export default App;
