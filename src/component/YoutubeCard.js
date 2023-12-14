import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "../style/css/Youtube.module.css";

function Card({ video, openModal, onNotInterested }) {
  return (
    <div>
      <CSSTransition
        in={true} // Set to true to apply the transition initially
        timeout={500} // Set the duration of the transition in milliseconds
        classNames="fade" // Set the CSS class for the transition
        unmountOnExit
      >
        <div className={styles.youtubeCard}>
          <div className={styles.CardRow1} onClick={() => openModal(video)}>
            {video.channel_name}
          </div>
          <div className={styles.CardRow2} onClick={() => openModal(video)}>
            {video.video_title}
          </div>
          <div className={styles.CardRow3}>
            <button
              onClick={() => onNotInterested()}
              className={styles.youtubeCardBtn}
            >
              관심 없음
            </button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Card;
