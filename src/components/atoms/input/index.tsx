import React from "react";

type Props = {
  className: string;
  placeholder?: string;
  children?: React.ReactNode;
};

const Input: React.FC<Props> = (props: Props) => {
  const { className, placeholder, children } = props;
  return (
    <input className={className} placeholder={placeholder}>
      {children}
    </input>
  );
};

export default Input;
