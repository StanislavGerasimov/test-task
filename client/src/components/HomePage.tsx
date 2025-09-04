import "../styles/UpperHome.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { logout } from "../store/UserSlice";
import CardGrid from "../components/CardGrid";

interface Property {
  id: number;
  name: string;
  price: string;
  yield: string;
  sold: number;
  ticket: string;
  daysLeft: number;
  photo: string;
}

const HomePage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state: RootState) => state.user.email);

  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Error fetching properties:", err));
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <header className="header">
        <div className="buttonDiv">
          {userEmail ? (
            <div className="userSection">
              <div className="userEmail">
                <p>Welcome, {userEmail}</p>
              </div>
              <button className="logIn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <button className="logIn" onClick={() => navigate("/login")}>
                Log In
              </button>
              <button className="signUp" onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </header>

      <div className="mainDiv">
        <div className="textDiv">
          <div className="headingDiv">
            <h1 className="heading">The chemical negatively charged</h1>
            <p className="headingText">
              Numerous calculations predict, and experiments confirm, that the
              force field reflects the beam, while the mass defect is not
              formed. The chemical compound is negatively charged. TWhile the
              mass defect is…
            </p>
          </div>
          <button className="textButton">Get Started</button>
        </div>
      </div>

      <h2 className="deals">Open Deals</h2>

      <CardGrid properties={properties} />
    </>
  );
};

export default HomePage;
