import React from 'react'
import './Style.css'

const NavbarLocation = () => {
  // const [first, setfirst] = useState(second)
  return (
    <>
    <div className='header-country-location' data-bs-toggle="modal" data-bs-target="#exampleModal">
            
       <img src="/Images/marker.png" style={{marginBottom: '8px'}}
             width={25} 
             height={18} 
            alt="" />
         <div>
            <p style={{ marginBottom: '-1px'}}>Deliver to</p>
            <h1 style={{ fontSize: '15px',  }}>Nigeria</h1>
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