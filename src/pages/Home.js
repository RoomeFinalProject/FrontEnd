/* eslint-disable */
import React, { useState, useEffect } from "react"; // useState를 가져오기
import { Link } from "react-router-dom";
import styles from "../style/css/Home.module.css";
import "../style/css/App.css";
import youtubeImage from "../image/youtube_image.png";
import reportImage from "../image/reportImg.png";
import chatbotImage from "../image/chatbotImg.png";
import settingImage from "../image/settingImg.png";
import axios from "axios";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/home");
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
        <div className={styles.homeA2}>AI</div>
        <div className={styles.homeA1}>
          투자 파트너 룸메 <br></br>
        </div>
      </div>
      <div className={styles.subtitle}>
        금융 전문 AI가 투자를 도와드립니다 <br></br>
        나의 금융 도우미 룸메!
      </div>

      <div className="CardContainer">
        <Link to="/youtube" className="card no-underline">
          <div className={styles.innerWhiteCard}>
            <img src={youtubeImage} className={styles.cardImage}></img>
          </div>
          <div className={styles.cardTitle}>주식 유튜브</div>
          <div className={styles.cardSubTitle}> 최근 업로드 2분전 </div>
        </Link>

        <Link to="/research" className="card no-underline">
          <div className={styles.innerWhiteCard}>
            <img src={reportImage} className={styles.cardImage2}></img>
          </div>
          <div className={styles.cardTitle}>전문가 리포트</div>
          <div className={styles.cardSubTitle}> 최근 업로드 오늘 </div>
        </Link>
      </div>
      <div className="CardContainer">
        <Link
          to="http://pf.kakao.com/_xbxjgxjG/chat"
          className="card no-underline"
        >
          <div className={styles.innerWhiteCard}>
            <img src={chatbotImage} className={styles.cardImage2}></img>
          </div>
          <div className={styles.cardTitle}>투자 상담 AI</div>
          <div className={styles.cardSubTitle}> "무엇이든 물어보세요!" </div>
        </Link>

        <Link to="/" className="card no-underline">
          <div className={styles.innerWhiteCard}>
            <img src={settingImage} className={styles.cardImage2}></img>
          </div>
          <div className={styles.cardTitle}>내 정보 / 설정</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
