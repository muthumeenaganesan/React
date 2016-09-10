var React=require("react");




var GrandChild=React.createClass({

  render:function(){
  return(

      <div>
    <h2>My Grand child</h2>
    {this.props.data}
    {
      this.props.data1}
      </div>
);
}
});
module.exports=GrandChild;
