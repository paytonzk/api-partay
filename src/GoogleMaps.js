import React, { Component } from 'react'
import './GoogleMaps.css'
import { Route } from 'react-router-dom'

class GoogleMaps extends Component{


    render(){
        return(
            <div className="googlemaps">
                <img 
                className="google-logo"
                src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fazwindowreplacement.com%2Fwp-content%2Fuploads%2Fgoogle-maps-logo.jpg&imgrefurl=http%3A%2F%2Fazwindowreplacement.com%2Freviews%2Fattachment%2Fgoogle-maps-logo%2F&docid=BX1NzeAxP3OW8M&tbnid=RojiKAd_L5-NQM%3A&vet=10ahUKEwivy52ixoLVAhVq0YMKHTXfAUMQMwhzKAIwAg..i&w=512&h=512&bih=1292&biw=1279&q=google%20maps%20logo&ved=0ahUKEwivy52ixoLVAhVq0YMKHTXfAUMQMwhzKAIwAg&iact=mrc&uact=8"
                alt="google logo"
                />
            </div>
        )
    }
}
export default GoogleMaps