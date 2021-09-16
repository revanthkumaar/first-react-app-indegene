import React from 'react';
class MenuItem extends React.Component{

render() {
  return (
    <>
      <div>{this.props.linkUrl}</div>
      <div>{this.props.title}</div>
      <div>{this.props.id}</div>
      
    </>
  );
}

}
/*

const MenuItem = props => <p>{props.title}</p>


*/

export default MenuItem;