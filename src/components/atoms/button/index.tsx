import React from "react";

type Props = {
	className: string;
	children?: React.ReactNode;
};

const Button: React.FC<Props> = (props: Props) => {
	const { className, children } = props;
	return <button className={className}>{children}</button>;
};

export default Button;
