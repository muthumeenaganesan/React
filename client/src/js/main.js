var React= require('react');
var ReactDOM= require('react-dom');
var ChildComponent=require('./component/ChildComponent');
var Child2=require('./component/Child2');


var MainComponent=React.createClass({


  render: function(){
    return (
      <div>
      <h2>Hello Muthu</h2>
      <ChildComponent data="Hello"/>
      <Child2 data2="Hello Dear"/>
        </div>
  //  <div>
    //   <ChildComponent />
  //   </div>

    )
  }

})


ReactDOM.render(<MainComponent />, document.getElementById('app1'));
//ReactDOM.render(<ChildComponent />, document.getElementById('app2'));
