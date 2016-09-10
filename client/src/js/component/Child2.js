var React=require('react');


var Child2=React.createClass({

render:function(){
  return(
    <div><h2>Hiii Child2</h2>
    {this.props.data2}
    </div>
  );
}

});
module.exports=Child2;
