import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Provider: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <> {children} </>;
};
