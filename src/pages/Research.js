/* eslint-disable */
import React, { useState } from "react"; // useState를 가져오기
import styles from "../style/css/Research.module.css";
import grayLine from "../image/LineGray.png";
import company1 from "../image/company1.png";

function Research() {
  const today = new Date();

  today.setDate(today.getDate());
  today.setMonth(today.getMonth());

  const options = {
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  };

  const formattedDate = today.toLocaleDateString("ko-KR", options);

  const researcher = [
    "Research 1",
    "Research 2",
    "Research 3",
    "Research 4",
    "Research 5",
  ];

  const Titles = ["title 1", "title 2", "title 3", "title 4", "title 5"];

  const contexts = [
    "The President may attend the National Assembly and speak or express his opinion in a letter. The country must strive to prevent disasters and protect the people from such risks.\
    The relevant administrative agency.",
    "The President may attend the National Assembly and speak or express his opinion in a letter. The country must strive to prevent disasters and protect the people from such risks.\
    The relevant administrative agency.",
    "Context for Youtuber 3",
    "Context for Youtuber 4",
    "Context for Youtuber 5",
  ];

  return (
    <div className={styles.researchContainer}>
      <div className={styles.selectDate}>{formattedDate}</div>

      {/* {researcher.map((researcher, index) => (
          <div key={index} className="summaryContainer">
            <div className="box-researcher">{researcher}</div>
            <div className="box-context">
              {Titles[index]}
              <br></br> {contexts[index]}
            </div>
          </div>
        ))} */}
      <div className="summaryContainer">
        <div className="box-researcher">
          <div>
            <img src={company1} className={styles.companyName}></img>
            <div>유안타증권</div>
          </div>
        </div>
        <div>
          <div className={styles.researchTitle}>
            <div>인터넷전문증권 2023년 리뷰 [12월 monthly]</div>
            <div>
              <button className={styles.originalText}>원문 보기</button>
            </div>
            <br></br>
          </div>

          <div className={styles.researchContext}>
            <br></br> 1. 토스증권: 뚜렷한 성장 달성
            <br></br> 2. 카카오페이증권: 아직도 요원한 흑자전환
            <br></br> 3. 11월 증권업은 한국금융지주와 키움증권이 가장 큰 상승
            폭을 보였다.
          </div>
          <img src={grayLine}></img>
        </div>
      </div>

      {/* <div className="summaryContainer">
        <div className="box-researcher">하나금융투자</div>
        <div className="box-context">
          23년의 디스카운트 요인은 해소 국면
          <br></br>
          <br></br> 중국의 소매판매와 산업생산은 기저효과가 나타날 시점이 도래.
          <br></br>
          장기간 하락했던 공업기업 이익은 완만한 회복세. 11월 IMF는 중국의 24년
          경제성장률 전망치를 연중 최고치로 상향.
        </div>
      </div>

      <div className="summaryContainer">
        <div className="box-researcher">삼성증권</div>
        <div className="box-context">
          공매도 금지 이후의 파생 시장
          <br></br>
          <br></br> 11월 6일 갑작스런 공매도 금지로 공매도 수요가 개별주식 선물
          시장으로 이전될 가능성 부각.
          <br></br>
          개별 주식선물 베이시스 악화
        </div>
      </div> */}
    </div>
  );
}

export default Research;
