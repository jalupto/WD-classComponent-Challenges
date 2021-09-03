import React, { Component } from 'react';

export class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dogImg: 'string',
            fetchStatus: 'string'
        }
    }

    fetchDoggy = () => {
        fetch('https://dog.ceo/api/breeds/image/random', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                dogImg: res.message,
                fetchStatus: res.status
            })
            console.log(res)
            console.log(this.state.dogImg)
            console.log(this.state.fetchStatus)
        })
        .catch((err) => console.log(this.state.fetchStatus, err))
    }

    componentDidMount() {
        this.fetchDoggy();
    }

    render(){
        return(
            <div>
                <img src={this.state.dogImg} alt='Doggo' style={{maxHeight: '50vh', maxWidth: '50vw'}} />
                <br/>
                <button onClick={this.fetchDoggy} style={{marginBottom: '5%'}}>Fetch!</button>
            </div>
        )
    }
}