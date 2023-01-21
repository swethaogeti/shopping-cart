import React from "react";
import "./filters.css";
export const Filters = () => {
  return (
    <div className="filters">
      <div className="filters__header">
        <h1>Filters</h1>
        <button>Clear All</button>
      </div>
      <h1>Sort By</h1>
      <div className="filters__filter">
        <div>
          <input id="high-to-low" type="radio"></input>
          <label htmlFor="high-to-low">Price-High To Low</label>
        </div>
        <div>
          <input id="low-to-high" type="radio"></input>
          <label htmlFor="low-to-high">Price-Low To High</label>
        </div>
      </div>
      <h1>Price</h1>
      <div className="filters__filter">
        <div>
          <input type="range" max="1500" min="100" id="slider"></input>
          <label htmlFor="slider">Price</label>
        </div>
      </div>
      <h1>Genre Category</h1>
      <div className="filters__filter">
        <div>
          <input id="fiction" type="checkbox"></input>
          <label htmlFor="fiction">Fiction</label>
        </div>
        <div>
          <input id="romance" type="checkbox"></input>
          <label htmlFor="romance">Romance</label>
        </div>

        <div>
          <input id="classics" type="checkbox"></input>
          <label htmlFor="classics">Classics</label>
        </div>

        <div>
          <input id="fantasy" type="checkbox"></input>
          <label htmlFor="fantasy">Fantasy</label>
        </div>

        <div>
          <input id="mystery" type="checkbox"></input>
          <label htmlFor="mystery">Mystery</label>
        </div>
        <div>
          <input id="thriller" type="checkbox"></input>
          <label htmlFor="thriller">Thriller</label>
        </div>
      </div>
      <h1>Rating</h1>
      <div className="filters__filter">
        <div>
          <input id="four" type="radio"></input>
          <label htmlFor="four">4 Star</label>
        </div>

        <div>
          <input id="three" type="radio"></input>
          <label htmlFor="three">3 Star</label>
        </div>
        <div>
          <input id="two" type="radio"></input>
          <label htmlFor="two">2 Star</label>
        </div>
        <div>
          <input id="one" type="radio"></input>
          <label htmlFor="one">1 Star</label>
        </div>
      </div>
    </div>
  );
};
