import { APP_NAME } from "@/lib/constants";
import styles from "./footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {currentYear} {APP_NAME} .All rights reserved
    </footer>
  );
};

export default Footer;
