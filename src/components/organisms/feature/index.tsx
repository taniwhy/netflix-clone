import React from "react";
import Text from "../../atoms/text";
import styles from "./style.module.css";

type Props = {
  children?: React.ReactNode;
};

const Feature: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <article className={styles.featureContainer}>
      <h1 className={styles.featureTitle}>
        Unlimited films, TV programmes and more.
      </h1>
      <h2 className={styles.featureSubTitle}>
        Watch anywhere. Cancel at any time.
      </h2>
      {children}
    </article>
  );
};

export default Feature;
