import { ShoppingCart, Person } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Link href='/'>
          <Image
            src='/images/logo.svg'
            alt={`${APP_NAME} logo`}
            priority={true}
            height={48}
            width={48}
          />
          <span className={styles.appName}>{APP_NAME}</span>
        </Link>
        <ul className={styles.buttonContainer}>
          {" "}
          <li>
            <Link href='/cart'>
              <ShoppingCart />
              <span>Cart</span>
            </Link>
          </li>
          <li>
            {" "}
            <Link href='/sign-idn'>
              <Person />
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
