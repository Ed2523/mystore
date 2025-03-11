import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
          <span>{APP_NAME}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
