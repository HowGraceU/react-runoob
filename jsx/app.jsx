import React from 'react';

let i = 1,
  myStyle = { fontSize: '28px', color: '#FF0000' },
  // 字符串不解析为html
  arr = [<h2>我是h2</h2>, '<h3>我是h3</h3>'];

class App extends React.Component {
   render() {
      return (
        <div style = {myStyle}>
        <h1>{i == 1 ? 'True!' : 'False'}</h1>
          {arr}
        </div>
      );
   }
}

export default App;
