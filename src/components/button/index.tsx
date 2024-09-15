import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	type?: "button" | "submit" | "reset";
}

// Feel free to add whatver should be here by default

const Button = ({
	children,
	onClick,
	className,
	type,
	...props
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`flex items-center ${className}`}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
