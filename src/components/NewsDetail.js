import React from "react";
import "./NewsDetail.css";
const NewsDetail = ({ active }) => {
  // const { link, title, date, content } = props.active;
  if (!active) {
    return <div>Loading...</div>;
  }
  return (
    <div className="news-detail-container">
      <div className="news-detail-item">
        <a href={active.link}>
          <h3>{active.title}</h3>
        </a>
        <p>{active.pubDate}</p>
        <p>{active.content}</p>
      </div>
    </div>
  );
};

export default NewsDetail;
