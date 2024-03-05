// CustomNavDropdown.js
import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface CustomNavDropdownProps {
  title: string;
  href: string;
  children: React.ReactNode;
}

function CustomNavDropdown({ title, href, children }: CustomNavDropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdownClick = () => {
    setShowDropdown(false);
    navigate(href); 
  };

  return (
    <NavDropdown
      title={title}
      id="basic-nav-dropdown"
      show={showDropdown}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
      onClick={handleDropdownClick}
    >
      {children}
    </NavDropdown>
  );
}

export default CustomNavDropdown;