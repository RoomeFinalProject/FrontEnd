/* eslint-disable */
import React, { useState, useEffect } from "react"; // useState를 가져오기
import styles from "../style/css/Research.module.css";
import grayLine from "../image/LineGray.png";
import company1 from "../image/company1.png";
import axios from "axios";
import Modal from "react-modal";
import ScrollDownComponent from "../component/ScrollDown";

Modal.setAppElement("#root");

function Research() {
  const getFormattedToday = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const [researchData, setResearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getFormattedToday());
  const [options2, setOptions] = useState([]);
  const [filteredResearchData, setFilteredResearchData] = useState([]);

  const openModal = (data) => {
    setSelectedResearch(data);
  };

  const closeModal = () => {
    setSelectedResearch(null);
  };

  //  오늘자 날짜 생성 및 날짜처리 ===================================================================
  const today = new Date();

  today.setDate(today.getDate());
  today.setMonth(today.getMonth());

  const options = {
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  };

  const formattedDate = today.toLocaleDateString("ko-KR", options);

  // Filter out Saturdays (6) and Sundays (0)
  const filteredOptions = options2.filter((date) => {
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 6;
  });

  useEffect(() => {
    // Calculate dates for the previous 5 days
    const today = new Date();
    const previousDates = Array.from({ length: 8 }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() - index);
      return date.toISOString().split("T")[0]; // Get YYYY-MM-DD format
    });

    // Set options with the calculated dates
    setOptions(previousDates);
  }, []);

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
    // You can perform any additional actions here based on the selected date
  };

  // 백엔드에서 불러오기 =======================================================================

  useEffect(() => {
    const fetchResearchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/research", {
          params: { date: selectedDate },
        });

        setResearchData(response.data);
        console.log("response: ", response.data.body);
        console.log("response: ", typeof response.data);
      } catch (error) {
        console.error("Error fetching research data:", error);
        setError("Failed to fetch research data");
      } finally {
        setLoading(false);
      }
    };

    fetchResearchData();
  }, [selectedDate]);

  // 해당 날짜에 맞춰서 가져올 데이터 정하기 ===================================================================

  useEffect(() => {
    // Filter research data based on the selected date
    const filteredData = researchData.filter(
      (data) => data.Date === selectedDate
    );
    setFilteredResearchData(filteredData);
  }, [selectedDate, researchData]);

  // 제목 전처리 ----------------------------------------------------------------
  const preprocessTitle = (title) => {
    // Replace ".pdf" with an empty string
    let processedTitle = title.replace(/\.pdf/g, "");

    // Replace "_" with a space
    processedTitle = processedTitle.replace(/_/g, " ");

    return processedTitle;
  };

  // Researcch 컴포넌트 ----------------------------------------------------------------
  const ResearchComponent = ({ researchData }) => {
    return (
      <>
        {researchData.map((data, index) => (
          <div key={index} className="summaryContainer">
            <div className="box-researcher">
              <div className={styles.researchCompany}>
                <div style={{ marginLeft: "-10px" }}>
                  <img
                    src={company1}
                    className={styles.companyName}
                    alt="Company Logo"
                  ></img>
                </div>
              </div>
            </div>
            <div key={index} style={{ marginLeft: "20px" }}>
              <div className={styles.researchTitle}>
                <div>{preprocessTitle(data.title)}</div>
              </div>
              <div className={styles.reserachBtns}>
                <div>
                  <button
                    className={styles.originalText}
                    onClick={() => openModal(data)}
                  >
                    요약 보기
                  </button>
                </div>
                <div>
                  <button className={styles.originalText2}>
                    <a
                      href={data.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "None", color: "white" }}
                    >
                      원문 보기
                    </a>
                  </button>
                </div>
              </div>
              {/* 
              <div className={styles.researchContext}>{data.content}</div> */}
              <img src={grayLine}></img>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className={styles.researchContainer}>
      {/* <div className={styles.selectDate}>{formattedDate}</div> */}
      <select
        className={styles.selectDate}
        value={selectedDate}
        onChange={handleChange}
      >
        {filteredOptions.map((date, index) => (
          <option key={index} value={date}>
            {new Date(date).toLocaleDateString("ko-KR", {
              weekday: "short",
              month: "2-digit",
              day: "2-digit",
            })}
          </option>
        ))}
      </select>

      <div>
        <ResearchComponent researchData={filteredResearchData} />
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedResearch}
        onRequestClose={closeModal}
        contentLabel="Research Details"
      >
        {selectedResearch && (
          <div className={styles.researchModal}>
            <div
              style={{
                fontFamily: "KaKaoBold",
                textAlign: "center",
                fontSize: "24px",
              }}
            >
              {preprocessTitle(selectedResearch.title)}
            </div>
            {/* <div>{selectedResearch.channel_name}</div> */}
            <div className={styles.researchModalCompany}>유안타증권</div>
            <div style={{ fontFamily: "KaKaoBold" }}>리서치요약</div>
            <div
              style={{
                fontFamily: "Roboto-Light",
                fontSize: "14px",
                marginBottom: "20px",
                whiteSpace: "pre-line",
              }}
            >
              <div className={styles.researchContext}>
                {selectedResearch.content}
              </div>
            </div>
          </div>
        )}
        <div className={styles.researchModalBtnCenter}>
          <button
            onClick={closeModal}
            className={styles.researchModalBtn}
            style={{ textAlign: "center" }}
          >
            창 닫기
          </button>
        </div>
      </Modal>
      <ScrollDownComponent />
    </div>
  );
}

export default Research;
