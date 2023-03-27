import { useContext } from "react";
import { Formik, Form, FormikValues } from "formik";
import { postLogin } from "../../api/user/user";
import TextInputField from "../TextInputField/TextInputField";
import { ProfileContext } from "../../providers/ProfileProvider";

import styles from "./UserForms.module.css";

type LoginProps = {
  onClose: () => void;
  onFormChange: () => void;
};

type User = {
  email: string;
  password: string;
};

const initialValues = {
  email: "",
  password: "",
};

const Login: React.FC<LoginProps> = ({ onClose, onFormChange }) => {
  const profileContext = useContext(ProfileContext);
  const handleSubmit = async (values: FormikValues) => {
    const user: User = {
      email: values.email,
      password: values.password,
    };
    const token = await postLogin(user);
    if (token) {
      profileContext.onLogin(`${token.token}`);
      onClose();
    }
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form className={styles.form}>
          <label htmlFor="email">Email</label>
          <TextInputField
            placeholder="Enter your email"
            id="email"
            name="email"
            type="email"
          />
          <label htmlFor="password">Password</label>
          <TextInputField
            placeholder="Enter your password"
            id="password"
            name="password"
            type="password"
          />
          <div>
            <button type="submit">Login</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
          <p>
            Want to SignUp instead?{" "}
            <span className={styles.link} onClick={onFormChange}>
              SignUp
            </span>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
