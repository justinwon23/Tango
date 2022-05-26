import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useState } from 'react'
import axios from 'axios'





// const center = {
//     lat:47.60,
//     lng:-122.25
//   }



const Earth = (props) => {

  const [markers, setMarkers] = useState([])
  const [center, SetCenter] = useState({ lat: 47.60, lng: -122.25 })




  // if (props.helpLoad) {
  //   SetCenter({ lat: props.newLat, lng: props.newLng })
  //   console.log(center)
  //   window.location.reload(false);



  // }

  
  
  
  // console.log(center, props.helpLoad)
  useEffect(() => {
    if (props.helpLoad) {
      SetCenter({ lat: props.lat, lng: props.lng })
      // SetCenter({ lat: props.newLat, lng: props.newLng })
      console.log(center)
      window.location.reload(false);
  
  
  
    }
    

    axios.get("http://localhost:8000/api/listing")
      .then(res => {
        console.log(res.data);
        setMarkers(res.data)

      })
      .catch(err => {
        console.log(err)

      })
  }, [])
  // useEffect(() => {

  //   axios.get("http://localhost:8000/api/listing")
  //     .then(res => {
  //       console.log(res.data);
  //       setMarkers(res.data)

  //     })
  //     .catch(err => {
  //       console.log(err)

  //     })
  // }, [])




  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCnHHDsumMGRATZ2IC84n-DNEAxkqDe4eU"

  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps"


  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/listing")
  //     .then(res => {
  //       console.log(res.data);
  //       setAllMarkers(res.data)

  //     })
  //     .catch(err => {
  //       console.log(err)

  //     })
  // }, [])



  return (
    <div>

      <GoogleMap mapContainerStyle={{ height: '500px', width: '800px', borderRadius: '30px', marginTop: '40px', border: '2px solid black' }} zoom={12} center={center} > 




        {/* <GoogleMap mapContainerStyle={{height: '500px', width: '800px', borderRadius: '30px', marginTop: '40px', border: '2px solid black'}} zoom={12} center={changeCenter()} > */}
        {
          markers.map((marker, indx) => {
            return (
              <Marker onClick={(e) => props.displayMarkers(marker._id)} key={marker._id} position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }} />
            )



          })




        }

        {/* <Marker position={{lat : 47.50, lng: -122.2}}/> */}
        {/* <Marker onClick={(e) =>console.log("hello World")} position={{lat : 47.55, lng: -122.25}}/>
          <Marker position={{lat : 47.55, lng: -122.22}}/>
          <Marker position={{lat : 47.52, lng: -122.22}}/>
          <Marker position={{lat : 47.58, lng: -122.18}}/> */}
      </GoogleMap>
    </div>

  )
}


export default Earth





