import React, { Component } from 'react'
import './GoogleMaps.css'
import { Route } from 'react-router-dom'

class GoogleMaps extends Component{


    render(){
        return(
            <div className="googlemaps">
                <img 
                className="google-logo"
                src="https://upload.wikimedia.org/wikipedia/en/1/19/Google_Maps_Icon.png"
                alt="google logo"
                />
                <form>
                    <div>
                        <input type="text" placeholder="Enter a location" />
                        <div>
                            <button type="submit">Find place!</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default GoogleMaps