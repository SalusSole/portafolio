import { cn } from "../lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ children, className }: CardProps) => {
	return (
		<div
			className={cn(
				"border-2 border-[#002531] p-3 rounded-xl",
				className
			)}
		>
			{children}
		</div>
	);
};
