import React from "react";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import Img from "../../atoms/img";
import styles from "./style.module.css";

const OptForm: React.FC = () => {
  return (
    <>
      <Input className={styles.optFormInput} placeholder={"Email address"} />
      <Button className={styles.optFormButton}>
        Try it now
        <Img imgUrl="/images/icons/chevron-right.png" alt="Try Now" />
      </Button>
    </>
  );
};

export default OptForm;
