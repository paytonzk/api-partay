import React, {Component} from 'react'
import './GitHubUser.css'
import {Route} from 'react-router-dom'

class GitHub extends Component{
    constructor(props){
    super(props)

    this.state = {
        user: {}
    }

    this.fetchUserData()
    }

    fetchUserData = () => {
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
        .then(response => response.json())
        .then(user => this.setState({user }))
    }

    render(){
        return(
            <div></div>
        )
    }
}