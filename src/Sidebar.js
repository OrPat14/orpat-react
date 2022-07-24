import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.istockphoto.com/photos/ultra-violet-colored-gradient-blurred-motion-abstract-technology-picture-id1164002265?k=20&m=1164002265&s=612x612&w=0&h=JopiX8uZtylHUvPZ-TqnfA57XJo_2t5Ke74Ljk26lYE="
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src="https://www.fivesquid.com/pics/t2/1556218087-112144-2-1.png"
        />
        <h2>OrPat</h2>
        <h4>Or.Patael@gmail.com</h4>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you:</p>
            <p className="sidebar__statNumber">2,553</p>
          </div>
          <div className="sidebar__stat">
            <p>Liked your projects:</p>
            <p className="sidebar__statNumber">223</p>
          </div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent:</p>
        {recentItem("orpat-react")}
        {recentItem("firebase-integration")}
        {recentItem("gankster-fe")}
        {recentItem("gankster-be")}
      </div>
    </div>
  );
}

export default Sidebar;
