import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../main";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { isAuthorized } = useContext(Context);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (isAuthorized) {
      fetchUserProfile();
    }
  }, [isAuthorized]);

  return (
    <div className="profile">
      {user ? (
        <div
          className="container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className="title"
            style={{ textAlign: "center", flex: 1, padding: "20px" }}
          >
            <h2>Profile </h2>
            <br></br>
            <p>Name: {user.name}</p>
            <br></br>
            <p>Email: {user.email}</p>
            <br></br>
            <p>Phone: {user.phone}</p>
            <br></br>
            <p>Role: {user.role}</p>
            <br></br>
          </div>
          <div className="image" style={{ flex: 1, textAlign: "right" }}>
            <img
              src="/heroS.jpg"
              alt="hero"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Profile;
