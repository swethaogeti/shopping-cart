import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroBanner } from "../../components";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeroBanner />
      <button onClick={() => navigate("/signup")}>Signup</button>
    </div>
  );
};
