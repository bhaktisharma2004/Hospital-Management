import React from "react";
import Left from "./Left";
import Right from "./Right";
import TeamBase from "./TeamBase";

const AboutUs = () => {
  return (
    <div>
      <Left
        heading="Welcome to MediSphere Revolutionizing Hospital Management"
        heading2="Seamless Smart Secure
"
        source1="assets/bg.jpg"
        source2="assets/doctor.png"
        para="At Medisphere, we are redefining hospital management with a powerful, all-in-one digital solution that makes healthcare operations smoother, faster, and more efficient. From patient records and appointments to billing and hospital workflows, Medisphere takes care of it all—so you can focus on what truly matters: delivering exceptional patient care.
"
        webLink="/"
        webText="Tour"
      />
      <Right
        heading1="Our Mission"
        heading2="Bridging Healthcare & Technology"
        source="assets/hsptll.png"
        para="At Medisphere, we believe that healthcare should be efficient, accessible, and tech-driven. Our mission is to empower hospitals and clinics with intelligent digital solutions that enhance patient care, simplify hospital administration, and optimize medical workflows."
        para2="Our vision? A future where hospitals run effortlessly, doctors focus on saving lives, and patients receive the best care—without delays or inefficiencies."
        webLink="/"
        webText="See More"
      />

      <TeamBase/>
    </div>
  );
};

export default AboutUs;
