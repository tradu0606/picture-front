import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios"

class CreateAccount extends Component {
    constructor(){
        super()
        this.state ={
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const login = {
            email: this.state.email,
            password: this.state.password
        }


        axios.post('http://localhost:3001/sign-up', {
            data: login,
            headers: { "Content-Type" : "application/json"}
        })
        .then(res => console.log(res.data));
  
    }
    render() {
        return (
            <div className="signup">
                    <h2>Create an Account</h2>
                    <h3>Already have an account?<Link to="/login">Sign In</Link></h3>
                    <input type="email" data-parse="uppercase" name="email" placeholder="email" onChange={this.handleChange}></input>
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange}></input>
                    <input type="password" name="password" placeholder="repeat password" onChange={this.handleChange}></input>
                    <input type="button" value="Create an Account" onClick={this.handleSubmit}></input>
            </div>
        );
    }
}

export default CreateAccount;