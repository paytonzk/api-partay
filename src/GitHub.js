import React, {Component} from 'react'
import './GitHub.css'
import {Route} from 'react-router-dom'

class GitHub extends Component{
    state = {
        username: null
    }

    handleChange = (ev) => {
        this.setState({username: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/github/${this.state.username}`)
        this.setState({username: null})
    }

    render(){
        return(
        <div className="github">
            <img className="github-logo" src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="github logo"/>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" value={this.state.username} onChange={this.handleChange}/>
                    <div>
                        <button type="submit">Look up a Github user</button>
                    </div>
                </div>
            </form>
            <Route path="/github/:username" />
            <Route exact path="/github" render={() => <h3>Please enter a username to search on Github.</h3>} />
        </div>
        )
    }
}

export default GitHub