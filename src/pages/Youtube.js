/* eslint-disable */
import React, { useState, useEffect } from "react"; // useState를 가져오기
import styles from "../style/css/Youtube.module.css";
import axios from "axios";
import Card from "../component/YoutubeCard";
import Modal from "react-modal";

function Youtube() {
  // 날짜정보 얻어오는 칸 ===========================================================
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
  const [firstVideo, setFirstVideo] = useState(null); // Add state for the first video
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 페이지를 열자마자 자료를 불러옴 ============================================
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/")
      .then((result) => {
        console.log(result);
        const fetchedVideos = result.data;
        // setVideos(fetchedVideos);
        const firstVideo = fetchedVideos[0][0];
        setFirstVideo(firstVideo);
        // const firstVideo = result.data[0][0];
        console.log(firstVideo.channel_name);
      })
      .catch(() => {
        console.log("Failed");
      });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

      {/* 카드부분 */}
      <div className={styles.selectBox}>
        <div className={styles.selectA1}> 최신 투자 정보 요약 보기</div>
        <div className={styles.youtubeCardBox}></div>

        <div className={styles.youtubeCard}>
          {firstVideo && (
            <div className={styles.youtubeCardBox} onClick={openModal}>
              <div className={styles.CardRow1}>{firstVideo.channel_name}</div>
              <div className={styles.CardRow2}>
                영상제목: {firstVideo.video_title}
              </div>
              <div className={styles.CardRow3}>
                <button onClick={openModal} className={styles.youtubeCardBtn}>
                  관심없음
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Details"
      >
        {firstVideo && (
          <div className={styles.youtubeModal}>
            <h2>{firstVideo.video_title}</h2>
            <p></p>
            <div style={{ alignSelf: "flex-end", marginBottom: "5px" }}>
              {firstVideo.channel_name}
            </div>
            <div style={{ fontFamily: "KaKaoBold" }}>유튜브요약:</div>
            <div
              style={{
                fontFamily: "Roboto-Light",
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              {firstVideo.summary}
            </div>
            <button
              onClick={closeModal}
              className={styles.youtubeCardBtn}
              style={{ alignSelf: "center" }}
            >
              창 닫기
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Youtube;
