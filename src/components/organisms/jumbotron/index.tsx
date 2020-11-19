import React from "react";
import jumboData from "../../../fixtures/jumbo.json";
import Jumbotron from "../../molecules/jumbotron";
import styles from "./style.module.css";

const JumbotronContainer: React.FC = () => {
  return (
    <article className={styles.jumbotronContainer}>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} item={item} />
      ))}
    </article>
  );
};

export default JumbotronContainer;
