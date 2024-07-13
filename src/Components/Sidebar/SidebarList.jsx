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
} from "react-icons/fc";
import { MdBiotech, MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";
import { FcFlashOn } from "react-icons/fc";
import { LiaCertificateSolid } from "react-icons/lia";

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
              <Link
                to="homei"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={16} /> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="abouti"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcNightPortrait size={16} /> About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="techi"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdBiotech size={16} color="orange" /> Tech Stack
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="projecti"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={16} /> Project
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="experiencei"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFactory size={16} /> Work Experience
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="edui"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdCastForEducation size={16} color="yellow" /> Education
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="notesi"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcKindle size={16} /> Notes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="hobi"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFlashOn size={16} /> Hobbies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="certi"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <LiaCertificateSolid size={16} color="yellow" /> Certificates
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contacti"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={16} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item">
              <Link
                to="homei"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={16} />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="abouti"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcNightPortrait size={16} />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="techi"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdBiotech size={16} color="orange" />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="projecti"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={16} />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="experiencei"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFactory size={16} />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="edui"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdCastForEducation size={16} color="yellow" />
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="notesi"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcKindle size={16} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="hobi"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFlashOn size={16} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="certi"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <LiaCertificateSolid color="yellow" size={16} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contacti"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={16} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default SidebarList;
