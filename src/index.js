import React from 'react';
/**
 * 老的版本里用到jsx的话就要引入最上面的React包，新版本则不需要了
 */
import ReactDOM from 'react-dom';

// React.createElement('h1',{style:{color:'red'},class:'dom'},'你好',document.getElementById('root'))
// ReactDOM.render(
//   <h1>hello,word</h1>,
//   document.getElementById('root')
// );
let root = document.getElementById('root');
function tick() {
  const element = (
    <div>
      <p>时间{new Date().toLocaleTimeString()}</p>
    </div>
  )
  ReactDOM.render(element,root)
}
setInterval(() => {
  tick()
}, 1000);