import { ReactNode } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>;
    </div>
  );
};

export default Modal;
