import React from 'react';
class MenuItem extends React.Component{

render() {
  return <div>{this.props.linkUrl}</div>
}

}
/*

const MenuItem = props => <p>{props.title}</p>


*/

export default MenuItem;