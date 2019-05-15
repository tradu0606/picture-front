import React, { Component } from 'react';
import axios from 'axios';

class PictureDisplay extends Component {
    constructor() {
        super()
        this.state = {
            imgUrl: []
        }
    }
    createFavorites(event){
        event.preventDefault()
        let data ={
            email: "tanya",
            like: event.target.src
        }
        console.log(data)
        axios.post('http://localhost:3001/favorites', {
            data: data,
            headers: { "Content-Type" : "application/json"}
        })
    }
    componentDidMount() {
        for (let i = 0; i < 2; i++) {
            axios.get("http://www.splashbase.co/api/v1/images/random")
                .then(json => {
                    var temp = this.state.imgUrl
                    temp.push(json.data.url)
                    this.setState({
                        imgUrl: temp
                    })
                    console.log(json.data.url)
                })
        }
    }
    render() {
        console.log(this.state)
        let list = this.state.imgUrl.map(url => {
            return (<div className="picHolder">
                <img src={url} onClick={this.createFavorites}></img>
                <input type="button" value="Like" data-url={url} onClick={this.createFavorites}></input>
            </div>)
        })
        return (
            <div className="imgContainer">
                {list}
            </div>
        );
    }
}

export default PictureDisplay;