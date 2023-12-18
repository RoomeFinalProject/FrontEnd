/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";

const VideoDetails = ({ link }) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    // Define a function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/linkedVideo", {
          params: { link },
        }); // Replace with your actual API endpoint
        setVideoData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, [link]); // Empty dependency array to run the effect only once

  return (
    <div>
      {videoData && (
        <>
          <h2>{videoData.vid_title}</h2>
          <p>{videoData.summary}</p>
          {/* Add more elements to display other properties as needed */}
        </>
      )}
    </div>
  );
};

export default VideoDetails;
