var React= require('react');
var GrandChild=require('./GrandChild');


var ChildComponent=React.createClass({


  handle:function(){
    {this.props.data('new state')}
  },

  render: function(){
    return (
      <div>
      <h2>My First Child</h2>
      {this.props.data}
      <GrandChild data1="hiiiii"/>
      <button onClick={this.handle}>Click</button>
        </div>

    );
  }

});
module.exports=ChildComponent;
