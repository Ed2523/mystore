import styles from "./layout.module.scss";
import Header from "@/components/shared/header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
