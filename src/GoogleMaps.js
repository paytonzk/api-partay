import React, { Component } from 'react'
import './GoogleMaps.css'
import { Route } from 'react-router-dom'
import GoogleMapsDisplay from './GoogleMapsDisplay'

class GoogleMaps extends Component{
    state = {
    currentMap: ''
    }

    handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/googlemaps/${this.state.currentMap}`)
    this.setState({ currentMap: '' })
    }

    handleChange = (ev) => {
    this.setState({ currentMap: ev.target.value })
    }

    render(){
        return(
            <div className="googlemaps">
                <img 
                className="google-logo"
                src="https://upload.wikimedia.org/wikipedia/en/1/19/Google_Maps_Icon.png"
                alt="google logo"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" 
                        placeholder="Enter a location" 
                        onChange={this.handleChange}/>
                        <div>
                            <button type="submit">Find place!</button>
                        </div>
                    </div>
                </form>
                <Route path="/googlemaps/:currentMap" component={GoogleMapsDisplay} />
                <Route exact path="/googlemaps" render={() => <h3>Please enter a location you wish to see.</h3>} />
            </div>
        )
    }
}
export default GoogleMaps