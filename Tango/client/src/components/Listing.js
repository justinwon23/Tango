import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { GoogleMap, useJsApiLoader, useGoogleMap } from '@react-google-maps/api';
import Earth from './Earth';
import axios from 'axios';
import '../App.css';

//AIzaSyCnHHDsumMGRATZ2IC84n-DNEAxkqDe4eU
//  <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

const Listing = () => {

    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("Household");
    const [compensation, setCompensation] = useState("");
    const [frequency, setFrequency] = useState("Once Only");
    const [description, setDescription] = useState("");
    const [showOne, setShowOne] = useState("")
    const [showLoad, setShowLoad] = useState(false)
    const history = useHistory();
    const [errors, setErrors] = useState("")
    
    const [newLat, setNewLat] = useState("")
    const [newLng, setNewLng] = useState("")
    const [helpName, setHelpName] = useState("")
    const [helpEmail, setHelpEmail] = useState("")
    const [helpStreet, setHelpStreet] = useState("")
    const [helpCity, setHelpCity] = useState("")
    const [helpState, setHelpState] = useState("")
    const [helpZip, setHelpZip] = useState("")
    const [helpLoad, setHelpLoad] = useState(false)
    
    // const google = window.google;

    // const map = useGoogleMap();
    // const mapRef = React.useRef();
    // const panTo = React.useCallback(({newLat, newLng}) => {
    //     mapRef.current.panTo({newLat, newLng});
    // }, []);

    const submitHelp= (e) => {
    e.preventDefault();
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${helpStreet}${helpCity}${helpState}&key=AIzaSyCnHHDsumMGRATZ2IC84n-DNEAxkqDe4eU`)
    .then(res => {
        setNewLat(res.data.results[0].geometry.location.lat)
        setNewLng(res.data.results[0].geometry.location.lng)
        setHelpLoad(true)
        history.push('/newlocation', {center: {newLat, newLng }}) //NEW 5/18
        // map.panTo(new google.maps.LatLng(newLat, newLng))
        console.log(res.data)
    })
    .catch(err =>{ console.log(err)
    })
    }


    const Test = (e) => {
        history.push("/newlocation")
    }



    const displayMarkers= (marker) => {
        axios.get(`http://localhost:8000/api/pirates/${marker}`)
        .then(res => {
            setShowOne(res.data)
            setShowLoad(true)
            console.log(res.data)
            console.log(showLoad)
        })
        .catch(err =>{ console.log(err)
        })
    
    }



    const submitListing = (e) => {
        e.preventDefault();
        let lat = 0
        let lng = 0
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${street}${city}${state}&key=AIzaSyCnHHDsumMGRATZ2IC84n-DNEAxkqDe4eU`)
            .then(res => {
                // setThisPirate(res.data)
                console.log(res.data.results[0].geometry.location.lat)
                lat = (res.data.results[0].geometry.location.lat)
                lng = (res.data.results[0].geometry.location.lng)
                console.log(lat, lng)
                const newListing = {
                    name: name,
                    address: `${street} ${city} ${state} ${zipCode}`,
                    email: email,
                    type: type,
                    compensation: compensation,
                    frequency: frequency,
                    description: description,
                    lat: lat,
                    lng: lng
                }
                return newListing



            }).then(newListing => {
                axios.post("http://localhost:8000/api/listing", newListing)
                    .then(res => {
                        console.log("Success", res.data)
                        // history.push("/")
                        
                        window.location.reload(false);

                    })
                    
                    
                }
                





            )
            .catch(err => {
                console.log(err)
            })




        // const newListing = {
        //     name: name,
        //     address: `${street} ${city} ${state} ${zipCode}`,
        //     email: email,
        //     type: type,
        //     compensation: compensation,
        //     frequency: frequency,
        //     description: description,
        //     lat : lat,
        //     lng : lng
        // }

        //     axios.post("http://localhost:8000/api/listing", newListing)
        // .then(res => {
        //     console.log("Success", res.data)
        //     // history.push('/')
        // })

        // .catch(err=>{
        //     const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        //     const errorArr = []; // Define a temp error array to push the messages in
        //     for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
        //         errorArr.push(errorResponse[key].message)
        //     }
        //     // Set Errors
        //     setErrors(errorArr);
        //     console.log(errorArr)

        // })       









    }



    return (
        <div style={{ display: 'flex' }}>
            <div >
                <div >
                    <h1>Give help!</h1>
                    <form style={{ display: 'flex', height: '200px' }} onSubmit={submitHelp}>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label className='name'>Name:</label>
                            <input onChange={(e) => setHelpName(e.target.value)} value={helpName}></input>
                            <label>Street:</label>
                            <input onChange={(e) => setHelpStreet(e.target.value)} value={helpStreet}></input>
                            <label>City:</label>
                            <input onChange={(e) => setHelpCity(e.target.value)} value={helpCity}></input>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label className='name'>State:</label>
                            <input onChange={(e) => setHelpState(e.target.value)} value={helpState}></input>
                            <label>Zip Code:</label>
                            <input onChange={(e) => setHelpZip(e.target.value)} value={helpZip}></input>
                            <label>Email:</label>
                            <input onChange={(e) => setHelpEmail(e.target.value)} value={helpEmail}></input>
                            <button>Search</button>
                        </div>
                    </form>
                </div>
                {/* <div style={{marginLeft: '200px'}}>
                    <Earth />
                </div> */}


                <h1>Find Help!</h1>
                <form style={{ display: 'flex' }} onSubmit={submitListing}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label className='name'>Name:</label>
                        <input onChange={(e) => setName(e.target.value)} value={name}></input>
                        <label>Street:</label>
                        <input onChange={(e) => setStreet(e.target.value)} value={street}></input>
                        <label>City:</label>
                        <input onChange={(e) => setCity(e.target.value)} value={city}></input>
                        <label>State:</label>
                        <input onChange={(e) => setState(e.target.value)} value={state}></input>
                        <label>Zip Code:</label>
                        <input onChange={(e) => setZipCode(e.target.value)} value={zipCode}></input>
                        <label>Email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }} className='find'>
                        <label className='name'>Type:</label>
                        <select onChange={(e) => setType(e.target.value)} value={type}>
                            <option>Household</option>
                            <option>Professional</option>
                            <option>Yard Work</option>
                            <option>Errands</option>
                        </select>
                        <label>Compensation:</label>
                        <input onChange={(e) => setCompensation(e.target.value)} value={compensation}></input>
                        <label>How often:</label>
                        <select onChange={(e) => setFrequency(e.target.value)} value={frequency}>
                            <option>Once Only</option>
                            <option>Weekly</option>
                            <option>Twice a week</option>
                            <option>Every two weeks</option>
                            <option>Monthly</option>
                            <option>Full time for hire</option>
                            <option>Part time for hire</option>
                        </select>
                        <label className='description'>Description:</label>
                        <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <div style={{ marginLeft: '65px' }} >
                <Earth displayMarkers = {displayMarkers} newLat = {newLat} newLng = {newLng} helpLoad = {helpLoad}/>
                {showLoad ? <div className='bottomdiv' onSubmit={submitListing}>
                    
                        <div style={{ fontSize: '25px', marginTop: '20px'}}>
                            <div>
                            Name :{showOne.name}&nbsp; 
                            Type: {showOne.type}
                            </div>
                        </div>
                        <div style={{ fontSize: '25px', marginTop: '20px' }}>
                        Frequency : {showOne.frequency}&nbsp;
                        Compensation : ${showOne.compensation}
                        </div>
                        <div style={{ fontSize: '25px', marginTop: '20px' }}>
                        Email : {showOne.email}&nbsp;
                        Description: {showOne.description}
                        </div>
                    
                    <button style={{ marginRight: '20px'}}>Apply!</button>

                    
                    
                    </div> : null }
            </div>
        </div>

    )
}



































export default Listing