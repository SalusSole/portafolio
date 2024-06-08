import { cn } from "../lib/cn";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Chip = ({ children, className, ...otherProps }: ChipProps) => {
	return (
		<span
			{...otherProps}
			className={cn(
				"bg-[#002531] text-white flex gap-2 px-3 py-1 font-medium text-sm rounded-full items-center",
				className
			)}
		>
			{children}
		</span>
	);
};
