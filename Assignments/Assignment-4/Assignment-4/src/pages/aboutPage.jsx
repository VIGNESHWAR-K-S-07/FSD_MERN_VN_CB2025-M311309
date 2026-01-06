import React from "react";
import Hit_History from "../components/hit_History";
import Hit_vision_Mission from "../components/hit_vision&Mission";
import Hit_founder from "../components/hit_founder";
import Achievements from "../components/Achievements";

const AboutPage = () => {
  return (
    <div>
      <Hit_History />
      <Hit_founder />
      <Hit_vision_Mission />
      <Achievements />
    </div>
  );
};

export default AboutPage;
