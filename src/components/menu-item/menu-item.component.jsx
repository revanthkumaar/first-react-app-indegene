import React from 'react';
import './menu-item.component.scss';
import {withRouter} from 'react-router-dom';


const MenuItem = ({title, imageUrl, history, match, size, location, linkUrl}) => {
    console.log(match);
    console.log(history);
    console.log(location);
  return(
     <div classname={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>

  )
 
}

export default withRouter(MenuItem); //wrapping a component in to HOC