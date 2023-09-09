import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Log from '../assets/logo.png';
import Search from '../assets/search.png';
import './navbar.css';

const Navbar = () => {
  const [showSearchInput, setShowSearchInput] = useState(false); 
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchIconClick = () => {

    setShowSearchInput(true);
  };

  const handleSearchInputChange = (e:any) => {
   
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="navContainer">
        <Link to="/">
          <img src={Log} alt="" className="log" />
        </Link>
        <div className="navContent">
          <div className="navIcon">
          <div className="autocom-box"></div>
            {showSearchInput ? (
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            ) : (
              <span onClick={handleSearchIconClick} className="srch"><img src={Search} alt="" srcset="" /> search</span>
             
            )}
          </div>
          <div className="navIcon">
            <Link to="/">Home</Link>
          </div>
          <div className="navIcon">
            <Link to="/lister">Lister</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
