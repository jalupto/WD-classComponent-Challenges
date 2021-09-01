import React, { Component } from 'react';
import {Input} from 'reactstrap';

class SearchIndex extends Component() {
  constructor(props){
    super(props)
    console.log(this.props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }
  }

  searchFunction() {
  }

  render() {
    return(
      <div>
        <Input placeholder='Search Here' />
        <h3>Results: {this.state.things}</h3>
      </div>
    )
  }
}

export default SearchIndex;