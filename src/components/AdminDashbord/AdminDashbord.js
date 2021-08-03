import React, { useState } from "react";
import './AdminDashbord.css'
import { Link, useHistory } from "react-router-dom";
import { useCallback } from "react";
import { setLoggedOut } from "../../store/store";
import { useDispatch } from "react-redux";
import Form from "../form/Form";
import Allposts from "../List/Allposts";
import CoronaTracker from "../Coronatracker/CoronaTracker";



const AdminDashbord = () => {
  const [showform, setShowform] = useState(true);
  const [showlist, setShowList] = useState(false);
  const [showcorona, setShowCorona] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = sessionStorage.getItem("token");

  const navigate = (path) => {
    history.push(path);
  };
  const loggedOut = useCallback(() => dispatch(setLoggedOut()), [dispatch]);

  const logout = () => {
    loggedOut();
    sessionStorage.setItem("token", "");
    navigate("/Admin");
  };

  const show = () => {
    setShowform(true);
    setShowList(false);
    setShowCorona(false);
  };
  const showagain = () => {
    setShowform(false);
    setShowCorona(false);
    setShowList(true);
  };
  const showpageadmin = () => {
    setShowform(false);
    setShowList(false);
    setShowCorona(true);
  };

  const profilUsername = sessionStorage.getItem("Username");
  return (
    <>
      {isLoggedIn && (
        <div className="AdminDashbord-Container">
          <div className="admin-sidebar">
            <div className="AdminSidebar-container">
              <div className="profil-admin">
                <span>Hello {profilUsername}</span>
              </div>
              <div className="AdmineSidebar-span">
                <div className="span-box">
                  <Link to="/">Home </Link>
                </div>
              </div>
              <div onClick={show} className="AdmineSidebar-span">
                <div className="span-box">
                  <span>Ajouter</span>
                </div>
              </div>
              <div onClick={showagain} className="AdmineSidebar-span">
                <div className="span-box">
                  <span>List</span>
                </div>
              </div>
              <div onClick={showpageadmin} className="AdmineSidebar-span">
                <div className="span-box">
                  <span> Covid-19 </span>
                </div>
              </div>
              <div onClick={logout} className="AdmineSidebar-span">
                <div className="span-box">
                  <span>Logout </span>
                </div>
              </div>
            </div>
          </div>
          <div className="admin-post">
            {showform && <Form />}
            {showlist && <Allposts/>}
            {showcorona && <CoronaTracker/>}
          </div>
        </div>
      )}
      {!isLoggedIn && (
        <div>
          <h1>Page 404</h1>
        </div>
      )}
    </>
  );
};

export default AdminDashbord;