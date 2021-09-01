import React, { Component } from "react";

class CatList extends Component {
  constructor(props){
    super(props)
    console.log(this.props);
  }
  render(){
    return (
      <div>
        {this.props.cats.map((cat, index) => (
          <div key={index}>
            <li>{cat}</li>
          </div>
        ))}
      </div>
    );
  };
};

export default CatList;