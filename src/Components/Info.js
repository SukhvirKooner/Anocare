import React from "react";
import InformationCard from "./InformationCard";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. At ANOCARE we are on a journey to stand by teens seeking
          answers to sexual health questions. Our
          platform allows you to connect with experienced  doctors who
          provide correct medical advice and offer
          quick refills whenever you require them.
        </p>
      </div>
      <div className="info-cards-content">
        <InformationCard 
          title="Our vision"
          description=" Our commitment is to empower
                teens through anonymous posts and connect them with qualified
                doctors for guidance and support."
          
        />

        <InformationCard
          title="Our goal"
          description="Foster a trustful platform that provides correct information and does not misguide our youth individual "
          
        />

        <InformationCard
          title="Explore more about ANOCARE"
          description="
            Customised dashboard for each member (period tracker, contraseptive methods, detailed articles on relevant issues ). "
          
        />
      </div>
    </div>
  );
}

export default Info;
