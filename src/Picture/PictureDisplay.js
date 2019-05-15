import React, { Component } from 'react';
import Axios from 'axios';

class PictureDisplay extends Component {
    constructor(){
        super()
        this.state ={
            imgUrl:''
        }
    }
    componentDidMount(){
       Axios.get("http://www.splashbase.co/api/v1/images/random")
        .then(json=>{ 
            this.setState({
                imgUrl: json.data.url
            })
            console.log(json.data.url)
        })
    
}
    render() {
        return (
                <div className="picHolder">
                    <img src={this.state.imgUrl}></img>
                    <input type="button" value="Like"></input>
                </div>
        );
    }
}

export default PictureDisplay;