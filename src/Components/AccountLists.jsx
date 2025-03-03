import React, { useState } from 'react';
import '../styles/AccountLists.css'
const AccountLists = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) =>{
    e.stopPropagation();
    setIsOpen((prev)=>!prev);
  };

  const closeDropdown=()=>{
    setIsOpen(false);
  }

  return (
    <>
    <div style={{position: 'relative'}} onClick={closeDropdown}>
      <div className="sign-in dropdown border-white" onClick={toggleDropdown}>
        <p>Hello, Sign in</p>
        <h1>Accounts & Lists</h1>
        
        {isOpen && (
        <div>
                <button >Sign in</button>
          <ul className="dropdown-menu show">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action two</a></li>
            <li><a className="dropdown-item" href="#">Action three</a></li>
          </ul>
        </div>
        )}
      </div>
     </div>
    </>
  );
};

export default AccountLists