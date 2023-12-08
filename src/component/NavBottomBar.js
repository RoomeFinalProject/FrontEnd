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
      <Link to="/help" className="nav-icon" onClick={() => window.location.href = 'http://pf.kakao.com/_xbxjgxjG/chat'}>
        <FaComments />
      </Link>
    </div>
  );
}

export default NavBottomBar;