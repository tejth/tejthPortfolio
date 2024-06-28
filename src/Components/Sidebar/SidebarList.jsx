import React from "react";
import "./SidebarList.css";
import profilepic from "../../image/profile.jpg";
import {
  FcHome,
  FcNightPortrait,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcKindle,
  FcSalesPerformance,
  FcAbout,
} from "react-icons/fc";
import { MdBiotech, MdCastForEducation } from "react-icons/md";

function SidebarList({ expandSidebar }) {
  return (
    <>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile picture" />
          </div>

          <ul>
            <li className="nav-item">
              <FcHome size={16} /> Home
            </li>
            <li className="nav-item">
              <FcNightPortrait size={16} /> About
            </li>
            <li className="nav-item">
              <FcFactory size={16} /> Work Experience
            </li>
            <li className="nav-item">
              <MdBiotech size={16} color="orange" /> Tech Stack
            </li>
            <li className="nav-item">
              <MdCastForEducation size={16} color="yellow" /> Education
            </li>
            <li className="nav-item">
              <FcTodoList size={16} /> Project
            </li>
            <li className="nav-item">
              <FcKindle size={16} /> Notes
            </li>
            <li className="nav-item">
              <FcContacts size={16} /> Contact
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item">
              <FcHome size={20} />
            </li>
            <li className="nav-item">
              <FcNightPortrait size={20} />
            </li>
            <li className="nav-item">
              <FcFactory size={20} />
            </li>

            <li className="nav-item">
              <MdBiotech size={20} color="orange" />
            </li>
            <li className="nav-item">
              <MdCastForEducation size={20} color="yellow" />
            </li>

            <li className="nav-item">
              <FcTodoList size={20} />
            </li>
            <li className="nav-item">
              <FcKindle size={20} />
            </li>
            <li className="nav-item">
              <FcContacts size={20} />
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default SidebarList;
