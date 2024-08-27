import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose ANOCARE</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose ANOCARE for your healthcare needs.
          Experience expert care, convenience, and personalized solutions,
          making your well-being our top priority.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#056c0a" }} /> Improved Personal Hygiene in Teens
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#056c0a" }} />  At your tips 
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#056c0a" }} /> Nominal fees
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#056c0a" }} /> 24/7 Support Live Chat
        </p>

        
      </div>
    </div>
  );
}

export default BookAppointment;
