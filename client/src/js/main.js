var React= require('react');
var ReactDOM= require('react-dom');
var ChildComponent=require('./component/ChildComponent');
var Child2=require('./component/Child2');


var MainComponent=React.createClass({


  getInitialState:function(){

  return ({
    StateData:'state to my child'
})
},


// handleClick:function(StateData){
//   this.setState({StateData:'My Dear Child'});
// },
handle:function(inStateData){
  this.setState({StateData:inStateData});
},


  render: function(){
    return (
      <div>
      <h2>Hello Muthu</h2>
      <ChildComponent data={this.handle} />
      <Child2 data2={this.state.StateData}/>

        </div>

    )
  }

})





ReactDOM.render(<MainComponent />, document.getElementById('app1'));
//ReactDOM.render(<ChildComponent />, document.getElementById('app2'));
