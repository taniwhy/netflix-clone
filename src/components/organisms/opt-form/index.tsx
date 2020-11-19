import React from "react";
import Text from "../../atoms/text";
import OptForm from "../../molecules/opt-form";
import styles from "./style.module.css";

const OptFormContainer: React.FC = () => {
  return (
    <article className={styles.optFormContainer}>
      <OptForm />
      <div className={styles.optFormBrake} />
      <Text className={styles.optFormText}>
        Ready to watch? Enter your email to create or restart your membership.
      </Text>
    </article>
  );
};

export default OptFormContainer;
