import React from 'react'
import '../styles/Language.css'
const Language = () => {
  return (
    <>
       <div className="country-language border-white">
            <img src="/public/Images/Betsy-Ross-legend-flag-united-states.jpg" width={25} alt="" />
            <h1 className="dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" 
            style={{
                fontSize: '14px',
                marginBottom: '-2px'
            }}
            >EN</h1>
        </div>
    </>
  )
}

export default Language