import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import logo from "./../../../logo.svg";
import Img from "./../../atoms/img";
import styles from "./style.module.css";

type Props = {
  children?: React.ReactNode;
};

const Header: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <header>
      <div className={styles.headerContainer}>
        <Link to={ROUTES.HOME}>
          <Img className={styles.headerLogo} imgUrl={logo} alt="Netflix" />
        </Link>
        <Link to={ROUTES.SIGN_IN} style={{ textDecoration: "none" }}>
          <div className={styles.headerButtonLink}>Sign In</div>
        </Link>
        {children}
      </div>
    </header>
  );
};

export default Header;
