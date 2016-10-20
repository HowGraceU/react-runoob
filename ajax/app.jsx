import React from 'react';

let UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {
    this.serverRequest = get(this.props.source, function (result) {
      var lastGist = result[0];
      console.log(lastGist);
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        {this.state.username} 用户最新的 Gist 共享地址：
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
      </div>
    );
  }
}),
  get = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if(xhr.readyState == 4 && xhr.status==200){
        typeof callback === 'function' && callback(JSON.parse(xhr.responseText))
      }
    }
  };

class App extends React.Component {
   render() {
      return (
        <UserGist source="https://api.github.com/users/octocat/gists" />
      );
   }
}

export default App;
