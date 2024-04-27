import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h2>Find a job that suits</h2>
            <h2>your interests and skills</h2>
            <p>
              Are you ready to take the next step in your career? Our job
              seeking app is here to help you find the perfect opportunity that
              aligns with your interests and skills. Say goodbye to endless
              scrolling.
            </p>
            <br></br>
            <h4>Why should you choose us ?</h4>
            <br></br>
            <h6>1. Explore a Wide Range of Opportunities</h6>
            <br></br>
            <h6>2. Stay Informed and Empowered</h6>
            <br></br>
            <h6>3. Apply with Ease</h6>
            <br></br>
          </div>
          <div className="image">
            <img src="./heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
