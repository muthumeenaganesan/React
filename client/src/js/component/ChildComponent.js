var React= require('react');
var GrandChild=require('./GrandChild');


var ChildComponent=React.createClass({


  render: function(){
    return (
      <div>
      <h2>My First Child</h2>
      {this.props.data}
      <GrandChild data1="hiiiii"/>
      </div>

    );
  }

});
module.exports=ChildComponent;
