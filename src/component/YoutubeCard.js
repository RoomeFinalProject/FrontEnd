import React from "react";
import styles from "../style/css/Youtube.module.css";

function Card({ video, openModal }) {
  return (
    <div>
      <div className={styles.youtubeCard} onClick={() => openModal(video)}>
        <div className={styles.CardRow1}>{video.channel_name}</div>
        <div className={styles.CardRow2}>{video.video_title}</div>
        <div className={styles.CardRow3}>
          <button
            onClick={() => openModal(video)}
            className={styles.youtubeCardBtn}
          >
            관심 없음
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
