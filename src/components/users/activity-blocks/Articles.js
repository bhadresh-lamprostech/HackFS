import React from "react";

export default function Articles() {
  return (
    <>
      <div className="articles-block">
        <div className="card-title">
          <div className="title">
            <h3>
              <span>(Total)</span> Articles
            </h3>
          </div>
          <div className="filter-btns">
            <button className="tag-button">Score</button>
            <button className="tag-button">Newest</button>
          </div>
        </div>
        <div className="card">
          <div className="div-creator">
            <div className="inside-div-creator">
              <div className="total-likes">Likes</div>
              <div className="qa-list">
                Who's the person with more answers than Jon Skeet? When will
                they catch him in rep terms?
              </div>
              <div className="qa-date">24 July 2022</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
