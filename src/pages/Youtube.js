/* eslint-disable */
import React, { useState, useEffect } from "react"; // useState를 가져오기
import styles from "../style/css/Youtube.module.css";

function Card({ channelTitle, title }) {
  return (
    <div className="selectYoutuber" style={{ marginBottom: "10px" }}>
      <div className="youtuberBox">
        <div style={{ width: "70%" }}>{channelTitle}</div>
        <div className="buttons" style={{ width: "30%" }}>
          <button className="addButton">요약</button>
          <button className="deleteButton">삭제</button>
        </div>
      </div>
      <div style={{ margin: "10px", fontSize: "16px" }}> {title}</div>
    </div>
  );
}

function Youtube() {
  const today = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  };

  const formattedDate = today.toLocaleDateString("ko-KR", options);
  console.log(formattedDate);

  //  Youtube로 부터 정보 불러오기(sample.json 에서 원하는 정보 추출)===================
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000");
        const data = await response.json();
        setVideos(data);

        // items 배열을 반복하며 각 동영상의 정보를 추출하여 videos 배열에 저장
        const videoData = data.map((item) => ({
          channelTitle: item.channel_name,
          title: item.video_title,
        }));

        setVideos(videoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.youtubeBodyContainer}>
      <div className="search-section">
        <div className="input-section">
          <input
            type="text"
            placeholder="   링크를 입력해주세요"
            style={{ marginRight: "10px", width: "66vw" }}
            className={styles.inputBox}
          />
          <button className={styles.searchBtn}>요약하기</button>
        </div>
      </div>
      <div>
        <div className={styles.resultSection}>
          <div className="left-section">
            <div className="youtube-info">
              <div>YouTuber</div>
              <p>Subscribers: 100k</p>
            </div>
          </div>
          <div className="right-section">
            <div>YouTube Title</div>
            <p>
              YouTube Summary YouTube Summary YouTube Summary YouTube Summary
              YouTube Summary YouTube Summary YouTube Summary YouTube Summary{" "}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.selectBox}>
        <div className={styles.selectA1}> 최신 투자 정보 요약 보기</div>
        <div className="selectYoutuberBox">
          <div>
            {videos.map((video, index) => (
              <div key={index}>
                <Card
                  channelTitle={video[0].channel_name} // Adjust the property names accordingly
                  title={video[0].video_title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
