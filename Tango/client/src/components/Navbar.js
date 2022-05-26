import React from 'react'
import '../App.css';

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div className='Navbar' style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', paddingBottom: '5px' }} >
        <div>
          <img style={{ height: '80px', display: 'flex', marginLeft:'100px', marginTop: '10px', borderRadius: "10px" }} src='https://lh3.googleusercontent.com/EowzkGTg_uCcrRUbunFCRlsV2DTk7qB925zQZb7vk299xszThYBzTsD-g1f3_Tqt3Yc-22Gjnp-mWvlvcf4ZLyJcFk0oviD4U31GdSJwcOfxDyW0k9qYRt0itS0J0v1cPiJ_JYpZ=w2400'></img>


        </div>
        <div>
          <div>Tango</div>
          <div style={{ fontSize: '30px' }}>-It takes II-</div>
        </div>
        <div>
          <img style={{ height: '80px', display: 'flex', marginRight: '100px', marginTop: '10px', borderRadius: "10px" }} src='https://lh3.googleusercontent.com/UFOkpZ2u9iQ_T_PqSbsp4aa9DDGWwwTcE_qYllfvEtOM0tObIEMV4MZJQ6TCOJMT3xctJ_sgh85SbdE8e4F0TwouUthzT_Nf8Humv7gEtrknTzaXrz8L9eCGLOtJIKrWYgEoT_Fk=w2400'></img>
        </div>
      </div>

    </div>
  )
}

export default Navbar