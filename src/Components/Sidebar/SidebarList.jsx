import React from "react";
import "./SidebarList.css";
import profilepic from "../../image/profile.jpg";

function SidebarList({ expandSidebar }) {
  return (
    <>
      {expandSidebar ? (
        <div className="navbar-item">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile picture" />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default SidebarList;
