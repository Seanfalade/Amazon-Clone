import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import NavbarLocation from './NavbarLocation';
import AccountLists from './AccountLists';
import ReturnOrders from './ReturnOrders';
import Language from './Language';
import Cart from './Cart';
import NavbarInput from './NavbarInput';

const NavBar1 = () => {
  return (
    <>
    <div className='header-nav'
    style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        padding: '10px 20px',
        backgroundColor: '#131921'
        }}
     >
        <img src="/Images/gratis-png-amazonas.png" 
             width={100} 
             height={50} 
             style={{ border: 'none' }}
        alt="" />

        <NavbarLocation/>
        <NavbarInput/>
        <Language/>
        <AccountLists/>
        <ReturnOrders/>
        <Cart/>
       
       </div>
   </>
  );
};

export default NavBar1