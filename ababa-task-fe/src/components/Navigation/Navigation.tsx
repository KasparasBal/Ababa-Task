import { useContext, useState } from "react";
import { ProfileContext } from "../../providers/ProfileProvider";
import logo from "../../assets/logo.png";
import Login from "../UserForms/Login";
import Modal from "../Modal/Modal";
import SignUp from "../UserForms/SignUp";

import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const profileContext = useContext(ProfileContext);
  const [modalState, setModalState] = useState(false);
  const [formType, setFormType] = useState("login");

  const handleModalState = () => {
    setModalState(!modalState);
  };

  const handleFormChange = () => {
    formType === "login" ? setFormType("signUp") : setFormType("login");
  };

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <img src={logo} alt="MoviesList Logo" />
        </div>
        <div className={styles.links}>
          <Link to="/">Movies</Link>
          {profileContext.isLoggedIn && <Link to="my-movies">My Movies</Link>}
          {!profileContext.isLoggedIn && (
            <a onClick={handleModalState} href="#">
              Login/SignUp
            </a>
          )}
          {profileContext.isLoggedIn && (
            <a onClick={profileContext.onLogout} href="#">
              Logout
            </a>
          )}
        </div>
      </nav>
      {modalState && (
        <Modal>
          {formType === "signUp" && (
            <SignUp
              onClose={handleModalState}
              onFormChange={handleFormChange}
            />
          )}
          {formType === "login" && (
            <Login onClose={handleModalState} onFormChange={handleFormChange} />
          )}
        </Modal>
      )}
    </>
  );
};

export default Navigation;
