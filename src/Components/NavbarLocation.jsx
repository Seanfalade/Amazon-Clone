import React from 'react'
import '../styles/NavbarLocation.css'

const NavbarLocation = () => {
  // const [first, setfirst] = useState(second)
  return (
    <>
    <div className='header-country-location border-white' data-bs-toggle="modal" data-bs-target="#exampleModal">
            
       <img src="/public/Images/marker.png" alt="" />
         <div>
            <p>Deliver to</p>
            <h1>Nigeria</h1>
         </div>
    </div>



<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Choose your location</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Delivery options and delivery speeds may vary for different locations</p>
      </div>
      <div>
        <button>Sign in to update your location</button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default NavbarLocation