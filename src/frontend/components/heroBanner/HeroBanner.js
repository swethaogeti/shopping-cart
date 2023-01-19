import React from "react";

export const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="heroBanner__info">
        <h1>Lorem Ipsum is simply dummy text </h1>

        <h1>Lorem Ipsum is simply </h1>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters,{" "}
        </p>
      </div>
      <div className="heroBanner-img">
        <img src="assets/img1.png" alt="image-girl"></img>
      </div>
    </div>
  );
};
