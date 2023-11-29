/* eslint-disable */
import React, { useState, useEffect } from "react"; // useState를 가져오기

function Card({ channelTitle, title }) {
  return (
    <div className="selectYoutuber" style={{ marginBottom: "10px" }}>
      <div className="youtuberBox">
        <div style={{ width: "70%" }}>{channelTitle}</div>
        <div className="buttons" style={{ width: "30%" }}>
          <button className="addButton">Add</button>
          <button className="deleteButton">Delete</button>
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
        const response = await fetch("/sample.json");
        const data = await response.json();

        // items 배열을 반복하며 각 동영상의 정보를 추출하여 videos 배열에 저장
        const videoData = data.items.map((item) => ({
          channelTitle: item.snippet.channelTitle,
          title: item.snippet.title,
        }));

        setVideos(videoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bodyContainer">
      <div className="search-section">
        <div className="input-section">
          <input
            type="text"
            placeholder="링크를 입력해주세요"
            style={{ marginRight: "10px" }}
          />
          <button>Search</button>
        </div>
      </div>
      <div>
        <div className="result-section">
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

      <div className="selectYoutuberBox">
        <div>
          {videos.map((video, index) => (
            <Card
              key={index}
              channelTitle={video.channelTitle}
              title={video.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Youtube;
