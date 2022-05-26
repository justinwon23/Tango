import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const Map = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCnHHDsumMGRATZ2IC84n-DNEAxkqDe4eU"
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Mapped />
}

function Mapped() {
    return (
        <GoogleMap zoom={10} center = {{lat:44, lng:-80}} mapCOntainerClassName=""/>

    )
}

export default Map