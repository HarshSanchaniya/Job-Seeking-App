import React from "react";
import { SiCognizant, SiTcs, SiPersistent } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Cognizant",
      location: "Pune, India",
      openPositions: 10,
      icon: <SiCognizant />,
    },
    {
      id: 2,
      title: "TCS",
      location: "Pune, India",
      openPositions: 5,
      icon: <SiTcs />,
    },
    {
      id: 3,
      title: "Persistent",
      location: "Pune, India",
      openPositions: 20,
      icon: <SiPersistent />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
