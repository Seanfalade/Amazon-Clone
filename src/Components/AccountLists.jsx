import React, { useState } from 'react';

const AccountLists = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="sign-in dropdown" style={{ marginLeft: '15px' }} onClick={toggleDropdown}>
        <p style={{ fontSize: '13px', marginBottom: '-1px', fontWeight: 'lighter' }}>Hello, Sign in</p>
        <h1 style={{ fontSize: '14px', fontWeight: 'bold' }}>Accounts & Lists</h1>
        
        {isOpen && (
        <div>
            <div className="signin-button">
                <button >Sign in</button>
            </div>
          <ul className="dropdown-menu show">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action two</a></li>
            <li><a className="dropdown-item" href="#">Action three</a></li>
          </ul>
        </div>
        )}
      </div>
    </>
  );
};

export default AccountLists