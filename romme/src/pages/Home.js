/* eslint-disable */
import React, { useState, useEffect } from "react"; // useState를 가져오기
import { Link } from "react-router-dom";
import styles from "../style/css/Home.module.css";
import "../style/css/App.css";
import youtubeImage from "../image/youtube_image.png";
import kakaoHelp from "../image/kakaohelp.png";
import axios from "axios";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bodyContainer">
      <div className={styles.textBox}>
        <div>
          금융 전문 AI가 <br></br>
          투자를 도와드립니다 <br></br>
          나의 금융도우미 룸메<br></br>
        </div>
      </div>
      <div className="CardContainer">
        <Link to="/youtube" className="card no-underline">
          <img
            src={youtubeImage}
            className={styles.cardImage}
            style={{ width: "100%", height: "auto", marginTop: "-20px" }}
          />
          <div className={styles.cardTitle}>유튜브 요약</div>
        </Link>
        <Link
          to="/help"
          className="card no-underline"
          onClick={() =>
            (window.location.href = "http://pf.kakao.com/_xbxjgxjG/chat")
          }
        >
          <img
            src={kakaoHelp}
            className={styles.cardImage}
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
      </div>
      <div className="CardContainer">
        <div className="card">설치하기</div>
        <div className="card"></div>
      </div>
    </div>
  );
}

export default Home;
