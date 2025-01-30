import React from 'react'
import { Link } from 'react-router-dom'
import './informationBox.css'
const InformationBar = () => {
  return (
    <>
    <div className="information-bar">
        <div className="info-bar-content">
          <div className="info-texts">
            <h2>Your recently viewed items and featured recommendations</h2>
            <div>
                <p>After viewing product detail pages, look here to find an easy way to navigate back to pages you are interested in.</p>
            </div>
        </div>
        <div className="info-bar-link">
            <Link to=''>
              <p>View or edit your browsing history</p>
            </Link>
        </div>
        </div>
    </div>
    </>
  )
}

export default InformationBar