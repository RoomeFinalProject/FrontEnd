/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaBook, FaComments } from "react-icons/fa"; // Import icons from react-icons library
import navHome from "../image/home.png";
import navYoutube from "../image/navYoutube.png";
import navResearch from "../image/navResearch.png";
import navkakaotalk from "../image/navKakaotalk.png";
import navSetting from "../image/navSetting.png";

function NavBottomBar() {
  return (
    <div className="nav-bottom-bar">
      <Link to="/" className="nav-icon">
        <img src={navHome} className="nav-icon"></img>
        <div className="nav-name">홈</div>
      </Link>
      <Link to="/youtube" className="nav-icon">
        <img src={navYoutube} className="nav-icon"></img>
        <div className="nav-name">유튜브 요약</div>
      </Link>
      <Link to="/research" className="nav-icon">
        <img src={navResearch} className="nav-icon"></img>
        <div className="nav-name">리서치 요약</div>
      </Link>
      <Link
        to="/help"
        className="nav-icon"
        onClick={() => (window.location.href = "http://pf.kakao.com/_xbxjgxjG")}
      >
        <img src={navkakaotalk} className="nav-icon"></img>
        <div className="nav-name">AI상담 챗봇</div>
      </Link>
    </div>
  );
}

export default NavBottomBar;
