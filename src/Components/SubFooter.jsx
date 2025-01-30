import React from 'react'
import { } from 'react-router-dom'
import './SubFooter.css'

const SubFooter = () => {
  return (
    <>
    <div className="sub-footer-body">
        <span>
            <button>Back to top</button>
        </span>
        <div className="sub-footer-info">
            <div>
              <h4>Get to Know Us</h4>
              <a href=''> <li>Careers</li></a>
              <a href=''> <li>Blog</li></a>
              <a href=''> <li>About Amazon</li></a>
              <a href=''> <li>Investor Relations</li></a>
              <a href=''> <li>Amazon Devices</li></a>
              <a href=''> <li>Amazon Science</li></a>
            </div>
              
            <div style={{ width: "180px"}}>
               <h4>Make Money with Us</h4>
               <a href=''> <li>Sell products on Amazon</li></a>
               <a href=''> <li>Sell on Amazon Business</li></a>
               <a href=''> <li>Sell apps on Amazon</li></a>
               <a href=''> <li>Become an Affiliate</li></a>
               <a href=''> <li>Advertise Your Products</li></a>
               <a href=''> <li>Self-Publish with Us</li></a>
               <a href=''> <li>Host an Amazon Hub</li></a>
               <a href=''> <li>›See More Make Money with Us</li></a>
            </div>

            <div>
                 <h4>Amazon Payment Products</h4>
                 <a href=''> <li>Amazon Business Card</li></a>
                 <a href=''> <li>Shop with Points</li></a>
                 <a href=''> <li>Reload Your Balance</li></a>
                 <a href=''> <li>Amazon Currency Converter</li></a>
                 
            </div>

            <div style={{ width: "140px"}}>
                 <h4>Let Us Help You</h4>
                 <a href=''><li>Amazon and COVID-19</li></a>
                 <a href=''> <li>Your Account</li></a>
                 <a href=''> <li>Your Orders</li></a>
                 <a href=''> <li>Shipping Rates & Policies</li></a>
                 <a href=''> <li>Returns & Replacements</li></a>
                 <a href=''> <li>Manage Your Content and Devices</li></a>
                 <a href=''> <li>Help</li></a>
                 
            </div>

            
        </div>
    </div>

       <div className='sub-footer-last'>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <button style={{
                     border: 'thin solid lightgrey',
                     padiing: '10px 20px 10px 8px',
                     backgroundColor: '#232f3e',
                     color: 'lightgrey',
                     fontWeight: '380',
                     fontSize: '12px',
                     marginRight: '10px'
                     }}>
                    <img src="" alt="" />
                    <span>English</span>
                </button>
                <button style={{
                     border: 'thin solid lightgrey',
                     padiing: '15px',
                     backgroundColor: '#232f3e',
                     color: 'lightgrey',
                     fontWeight: '380',
                     fontSize: '12px',
                     marginRight: '10px'
                      }}>
                    <span>$ USD - U.S Dollar</span>
                </button>
                <button style={{
                     border: 'thin solid lightgrey',
                     padiing: '15px 20px 10px 8px',
                     backgroundColor: '#232f3e',
                     color: 'lightgrey', 
                     fontWeight: '380',
                     fontSize: '12px',
                     }}>
                    <img src="" alt="" />
                    <span>United States</span>
                </button>

            </div>
          </div>  
    </>
  )
}

export default SubFooter