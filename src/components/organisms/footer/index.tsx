import React from "react";
import Link from "../../atoms/link";
import Text from "../../atoms/text";
import styles from "./style.module.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <h1 className={styles.footerTitle}>Questions? Contact us.</h1>
      <div className={styles.footerRow}>
        <div className={styles.footerCol}>
          <Link className={styles.footerLink} href={"#"}>
            FAQ
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Investor Relations
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Ways to Watch
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Corporate Information
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Netflix Originals
          </Link>
        </div>

        <div className={styles.footerCol}>
          <Link className={styles.footerLink} href={"#"}>
            Help Centre
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Jobs
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Terms of Use
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Contact Us
          </Link>
        </div>

        <div className={styles.footerCol}>
          <Link className={styles.footerLink} href={"#"}>
            Account
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Redeem gift cards
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Privacy
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Speed Test
          </Link>
        </div>

        <div className={styles.footerCol}>
          <Link className={styles.footerLink} href={"#"}>
            Media Centre
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Buy gift cards
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Cookie Preferences
          </Link>
          <Link className={styles.footerLink} href={"#"}>
            Legal Notices
          </Link>
        </div>
      </div>
      <Text className={styles.footerText}>Netflix United Kingdom</Text>
    </footer>
  );
};

export default Footer;
