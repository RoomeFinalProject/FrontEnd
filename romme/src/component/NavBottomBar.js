import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaBook, FaComments } from 'react-icons/fa'; // Import icons from react-icons library

function NavBottomBar() {
  return (
    <div className="nav-bottom-bar">
      <Link to="/youtube" className="nav-icon">
        <FaYoutube />
      </Link>
      <Link to="/research" className="nav-icon">
        <FaBook />
      </Link>
      <Link to="/openchat" className="nav-icon">
        <FaComments />
      </Link>
    </div>
  );
}

export default NavBottomBar;