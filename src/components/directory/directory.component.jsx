import React from "react";
import "./directory.component.scss";

class Directory extends React.Component {
  constructor() {
    super(); //it is used to call the constructor of the parent class

    this.state = {
      sections: [
        {
          title: "veggies",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "fruits",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "",
        },
        {
          title: "dairy",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "",
        },
        {
          title: "condiments",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "misc",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory">
        { this.state.sections.map(({id, title}) => (
          <>
          <div>{id}</div>
          <div>{title}</div>
          </>
        ))}
      </div>
    );
  }
}
export default Directory;
