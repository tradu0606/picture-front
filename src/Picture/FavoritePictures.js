import React, { Component } from 'react';
import axios from 'axios';

class FavoritePictures extends Component {
    constructor() {
        super()
        this.state = {
            pic: []
        }

    }
    deletePic(url){
        axios.delete("http://localhost:3001/deletepic", {
            data: { like: url },
            headers: { "Content-Type": "application/json" }
        }).then(()=>{
            this.setState({
                pic: this.state.pic.splice(this.state.pic.indexOf(url), 1)
            })
            
        })
    }
    componentDidMount() {
        axios.get("http://localhost:3001/favorites", {
            data: { email: this.props.email },
            headers: { "Content-Type": "application/json" }
        }).then(pic => {
            console.log(pic)
            var temp = []
            temp.push(pic)
            this.setState({
                pic: temp
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.pic.map(url => {
                    return (<div>
                        <img src={url}></img>
                        <input type="button" onClick={()=>this.deletePic(url)}></input>
                    </div>)
                })}
            </div>
        );
    }
}

export default FavoritePictures;