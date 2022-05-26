
import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import props from 'prop-types';
import Earth from './Earth';


const NewLocation = (props) => {
    const location = useLocation();
    const [center, SetCenter] = useState({})

  
    return (
    <div>

    <Earth center = {{lat : 115, lng : 120}} ></Earth>
    {/* <Earth center = {this.props.location.center} ></Earth> */}



    </div>
  )
}

export default NewLocation