import React from "react";
import Text from "./../../atoms/text";
import Img from "./../../atoms/img";
import { jumbotronItem } from "./../../../model/jumbotron/entity";
import styles from "./style.module.css";

type Props = {
  item: jumbotronItem;
};

const Jumbotron: React.FC<Props> = (props: Props) => {
  const { item } = props;
  return (
    <section className={styles.jumbotronItem}>
      <div className={styles.jumbotronPane}>
        <h1 className={styles.jumbotronTitle}>{item.title}</h1>
        <h2 className={styles.jumbotronSubTitle}>{item.subTitle}</h2>
      </div>

      <div className={styles.jumbotronPane}>
        <Img
          className={styles.jumbotronImg}
          imgUrl={item.image}
          alt={item.alt}
        />
      </div>
    </section>
  );
};

export default Jumbotron;
