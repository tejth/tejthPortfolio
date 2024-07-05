import React from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
function Contact() {
  return (
    <>
      <div className="container contact-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="contact-form-image">
              <img
                src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto-compress&cs-tinysrgb&w-1260&h-750&dpr=2"
                alt="contact image"
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact me</h5>
              </div>
              <form>
                <div className="contact-form">
                  <label className="form-lebel">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="contact-form">
                  <label className="form-lebel">E-mail</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="contact-form">
                  <label className="form-lebel">Job-Types</label>
                  <select className="custom-select-tag">
                    <option>Full-Time</option>
                    <option>Mentoring Session</option>
                    <option>Part-Time</option>
                  </select>
                </div>
                <div className="contact-form">
                  <label className="form-lebel">Message</label>
                  <textarea
                    rows="4"
                    type="text"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="button-submit">
                  <p>
                    Send <RiSendPlaneFill size={20} />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
