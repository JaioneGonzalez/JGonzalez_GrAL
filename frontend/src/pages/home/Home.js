// Home.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles_home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container_home">
      <h1>Web tests</h1>
      <button onClick={() => navigate("/jsonUpload")}>Record Test</button>
      <button onClick={() => navigate("/replay")}>Replay Tests</button>
    </div>
  );
}

export default Home;
