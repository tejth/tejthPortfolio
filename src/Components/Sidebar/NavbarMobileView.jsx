import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcFlashOn } from "react-icons/fc";

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
function NavbarMobileView() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="mobile-view-navbar">
        <div className="navbar-header">
          <p>
            <GiHamburgerMenu size={25} onClick={handleClick} />
          </p>
        </div>

        {open ? (
          <div className="mobile-nav">
            <ul>
              <li className="nav-item-mobileview">
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

              <li className="nav-item-mobileview">
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

              <li className="nav-item-mobileview">
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

              <li className="nav-item-mobileview">
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

              <li className="nav-item-mobileview">
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

              <li className="nav-item-mobileview">
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

              <li className="nav-item-mobileview">
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
              <li className="nav-item-mobileview">
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
              <li className="nav-item-mobileview">
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
        ) : null}
      </div>
    </>
  );
}

export default NavbarMobileView;
