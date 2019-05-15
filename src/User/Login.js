import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios";

class Login extends Component {
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


        axios.post('http://localhost:3001/login', login)
        .then(res => console.log(res.data));
        
        // this.setState({
        //     email: "",
        //     password: ""
        // });
    }

    render() {
        return (
            <div>
                <div>
                    <Router>

                    <h3>Login</h3>
                    <input type="email" data-parse="uppercase" name="email" placeholder="email" onChange={this.handleChange}></input>
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange}></input>
                    <input type="button" value="Login" type="submit" onClick={this.handleSubmit}></input>
                    </Router>
                </div>
            </div>
        );
    }
}

export default Login;