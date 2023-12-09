function Card(props) {
  return (
    <div className="selectYoutuber" style={{ marginBottom: "10px" }}>
      <div className="youtuberBox">
        <div style={{ width: "70%" }}>{props.videos}</div>
        <div className="buttons" style={{ width: "30%" }}>
          <button className="addButton">요약</button>
          <button className="deleteButton">삭제</button>
        </div>
      </div>
      <div style={{ margin: "10px", fontSize: "16px" }}> {props.videos}</div>
    </div>
  );
}

export default Card;
