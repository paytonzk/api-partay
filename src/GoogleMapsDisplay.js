import React, { Component } from 'react'
import './GoogleMapsDisplay.css'
import { Route } from 'react-router-dom'

class GoogleMapsDisplay extends Component{

    constructor(props) {
    super(props)

    this.state = {
      map: {}
    }
    }

    render(){
        return(
            <div className="googlemapsdisplay">
                { this.state.currentMap = new Map(document.getElementById('googlemapsdisplay'),{
                    center: {lat: 0, lng: 0}
                })
                }
                <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpVVboGLFb-fUJjOy4edH70DoA2pVXYdI&callback=initMap">
                </script>
            </div>
        )
    }
}
export default GoogleMapsDisplay