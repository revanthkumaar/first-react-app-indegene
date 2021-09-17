import React from "react";
import "./directory.component.scss";
import MenuItem from '../menu-item/menu-item.component.jsx'

class Directory extends React.Component {
  constructor() {
    super(); //it is used to call the constructor of the parent class

    this.state = {
      sections: [
        {
          title: "veggies",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "veggies",
        },
        {
          title: "fruits",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "fruits",
        },
        {
          title: "dairy",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "dairy",
        },
        {
          title: "condiments",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "condiments",
        },
        {
          title: "misc",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "misc",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory">
        { this.state.sections.map(({title, ...sectionProps}) => (
          <MenuItem title={title} {...sectionProps}/>
        ))}
      </div>
    );
  }
}
export default Directory;
