import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      specificThings: []
    }
  }

  searchFunction = (value) => {
    const searchWord = this.state.things.filter(thing => thing.includes(value.toLowerCase()))
    this.setState({ specificThings: searchWord })
  }

  searchResult = (specificThings, id) => <p key={id}>{specificThings}</p>

  render() {
    return (
      <div className='main'>
          <Input type='text' placeholder="Search Here" style={{position: 'relative', left: '40%', maxWidth: '20%', textAlign: 'center'}} onChange={e => this.searchFunction(e.target.value)} />
          <h3>Results:</h3>
          {this.state.specificThings && this.state.specificThings.length > 0 ? this.state.specificThings.map(this.searchResult) : this.state.things.map(this.searchResult)}
      </div>
    )
  }
}

export default SearchIndex;