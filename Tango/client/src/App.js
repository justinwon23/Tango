import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing';
import Navbar from './components/Navbar';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import NewLocation from './components/NewLocation';

// const mapContainerStyle = {
//   width: '50vw',
//   height: '50vh'
// }

const center = {
  lat:43.65,
  lng:-79.383
}

function App() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey : "AIzaSyCnHHDsumMGRATZ2IC84n-DNEAxkqDe4eU"

  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps"


  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route path={"/newlocation"}>
      <Navbar/>
      <NewLocation/>
      </Route>
      <Route path={"/"}>
      <Navbar/>
      <Listing/>
      </Route>
      </Switch>
      </BrowserRouter>
      {/* <div style={{height : '500px', width: '500px'}}> */}
      {/* <GoogleMap mapContainerStyle={{height: '500px', width: '500px'}} zoom={8} center={center} ></GoogleMap> */}
      {/* </div> */}
    </div>
  );
}

export default App;
