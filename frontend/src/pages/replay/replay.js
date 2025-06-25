import React, { useState, useEffect } from "react";
import "./styles_replay.css";

import { Replayer } from "rrweb";

const ReplayPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/recordings/u1t01.json");
        const data = await res.json();
        setEvents(data); // ✅ use the array directly
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      const container = document.getElementById("replay-container");
      container.innerHTML = ""; // Clear any previous replay
      const replayer = new Replayer(events, {
        root: container,
      });
      replayer.play();
    }
  }, [events]);

  return (
    <div className="container">
      <h1>Replay</h1>
      <div id="replay-container"></div>
    </div>
  );
};

export default ReplayPage;
