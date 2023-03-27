import { Formik, Form, FormikValues } from "formik";
import { postSignUp } from "../../api/user/user";
import TextInputField from "../TextInputField/TextInputField";

import styles from "./UserForms.module.css";

type SignUpProps = {
  onClose: () => void;
  onFormChange: () => void;
};

type User = {
  name: string;
  email: string;
  password: string;
};

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const SignUp: React.FC<SignUpProps> = ({ onClose, onFormChange }) => {
  const handleSubmit = async (values: FormikValues) => {
    const user: User = {
      name: values.username,
      email: values.email,
      password: values.password,
    };
    await postSignUp(user);
    onFormChange();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form className={styles.form}>
          <label htmlFor="username">Username</label>
          <TextInputField
            placeholder="Enter your username"
            id="username"
            name="username"
            type="text"
          />
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
            <button type="submit">Sign Up</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
          <p>
            Want to Login instead?{" "}
            <span className={styles.link} onClick={onFormChange}>
              Login
            </span>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
