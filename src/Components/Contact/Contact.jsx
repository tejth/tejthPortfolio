import React, { useState } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import Fade from "react-reveal/Fade";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobType, setJobType] = useState("Full-Time");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        jobType: jobType,
        message: message,
      });
      alert("Message sent!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error sending message!");
    }

    // Clear form fields
    setName("");
    setEmail("");
    setJobType("Full-Time");
    setMessage("");
  };

  return (
    <>
      <div className="container contact-section" id="contacti">
        <div className="section-title" style={{ marginBottom: "5%" }}>
          <h5>Contact</h5>
          <span className="line tech-stack-line"></span>
        </div>
        <div className="row">
          <Fade bottom>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
              <div className="contact-form-image">
                <img
                  src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto-compress&cs-tinysrgb&w-1260&h-750&dpr=2"
                  alt="contact image"
                />
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
              <div className="contact-form-design">
                <div className="text-center">
                  <h5>Contact me</h5>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="contact-form">
                    <label className="form-lebel">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="contact-form">
                    <label className="form-lebel">E-mail</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="contact-form">
                    <label className="form-lebel">Job-Types</label>
                    <select
                      className="custom-select-tag"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                    >
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="button-submit">
                    <button type="submit">
                      Send <RiSendPlaneFill size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Contact;
