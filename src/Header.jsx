import React, { useState } from "react";

import About from './About.jsx'


function Header() {
  // State to control the sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Function to toggle the sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarVisible(prevState => !prevState);
  };


  // Inline styles to control display
  const sidebarStyle = {
    display: isSidebarVisible ? 'flex' : 'none',
         
    
  };

  return (
    <nav>
      <ul>
        <li><a href="#">My Portfolio</a></li>
        <li className="HideOnMobile"><a href="/home">About me</a></li>
        <li className="HideOnMobile"><a href="/About">Education</a></li> 
        <li className="HideOnMobile"><a href="/contact">Contact</a></li>
        <li>
          <a href="#" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
          </a>
        </li>
      </ul>

      {/* Sidebar with conditional styling */}
      <ul className="sidebar" style={sidebarStyle}>
        <li ><a href="#portfolio" onClick={toggleSidebar} className="toggle"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
        <li><a href="/home">About me</a></li>
        <li><a href="/about">education</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="#"></a></li>
      </ul>

   
    </nav>
  );
}

export default Header;