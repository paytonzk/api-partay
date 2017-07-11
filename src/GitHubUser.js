import React, {Component} from 'react'
import './GithubUser.css'
import {Route} from 'react-router-dom'

class GitHub extends Component{
    constructor(props){
    super(props)

    this.state = {
        user: {}
    }

    this.fetchUserData(props)
    }

    fetchUserData = () => {
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
        .then(response => response.json())
        .then(user => this.setState({user }))
    }

    render(){
        const {user} = this.state
        return(
            <div className="github-user">
                <img src={user.avatar_url} alt="github user avatar"/>
                <h2>{user.login}</h2>
                <h3>Followers: {user.followers}</h3>
                <h3>Following: {user.following}</h3>
                <h3>Location: {user.location}</h3>
                <a href={user.html_url} target="_">Link to {user.login}'s profile</a>
            </div>
        )
    }
}