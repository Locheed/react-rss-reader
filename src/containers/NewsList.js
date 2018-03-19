import React from "react";
import PropTypes from "prop-types";
import "./NewsList.css";

const NewsList = ({ items, onNewsSelect }) => {
  if (!items) {
    return <div className="newslist-container">Loading...</div>;
  }
  // const { items } = props;
  console.log(items);
  const nodes = items.map((news, i) => {
    return (
      <div className="news-item" key={news.pubDate + "-" + i}>
        <li onClick={() => onNewsSelect(news)} className="news-item-title">
          {news.title}
        </li>
      </div>
    );
  });
  return (
    <div className="newslist-container">
      <ul>{nodes}</ul>
    </div>
  );
};

NewsList.propTypes = {
  items: PropTypes.array
};

export default NewsList;
