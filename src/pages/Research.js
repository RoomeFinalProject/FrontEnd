/* eslint-disable */
import React, { useState, useEffect } from "react"; // useState를 가져오기
import styles from "../style/css/Research.module.css";
import grayLine from "../image/LineGray.png";
import company1 from "../image/company1.png";
import axios from "axios";

function Research() {
  const [researchData, setResearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //  오늘자 날짜 생성 =======================================================================
  const today = new Date();

  today.setDate(today.getDate());
  today.setMonth(today.getMonth());

  const options = {
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  };

  const formattedDate = today.toLocaleDateString("ko-KR", options);

  // 백엔드에서 불러오기 =======================================================================

  useEffect(() => {
    const fetchResearchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/research");
        setResearchData(response.data);
        console.log("response: ", response.data);
      } catch (error) {
        console.error("Error fetching research data:", error);
        setError("Failed to fetch research data");
      } finally {
        setLoading(false);
      }
    };

    fetchResearchData();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>; // You can replace this with a loading spinner
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  const ResearchComponent = ({ researchData }) => {
    return (
      <>
        {researchData.map((data, index) => (
          <div key={index} className="summaryContainer">
            <div className="box-researcher">
              <div style={{ marginLeft: "-10px" }}>
                <img src={company1} className={styles.companyName}></img>
                {/* <div className={styles.companyName2}>{data.company}</div> */}
              </div>
            </div>
            <div key={index}>
              <div className={styles.researchTitle}>
                <div>{data.title}</div>
                <div>
                  <button className={styles.originalText}>원문 보기</button>
                </div>
              </div>

              <div className={styles.researchContext}>{data.content}</div>
              <img src={grayLine}></img>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className={styles.researchContainer}>
      <div className={styles.selectDate}>{formattedDate}</div>

      <div>
        <ResearchComponent researchData={researchData} />
      </div>
    </div>
  );
}

export default Research;
