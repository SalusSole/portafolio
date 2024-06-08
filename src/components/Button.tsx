import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/cn";

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-bold",
	{
		variants: {
			variant: {
				default:
					"shadow-[1px_1px_0px_1px_#002531,2px_2px_0px_1px_#002531,3px_3px_0px_1px_#002531,4px_4px_0px_1px_#002531,5px_5px_0px_1px_#002531] active:shadow-none active:translate-x-[5px] active:translate-y-[5px]",
				outline: "border border-input bg-background",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "underline-offset-4 hover:underline",
			},
			color: {
				primary: "",
				secondary: "",
				accent: "",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		compoundVariants: [
			// default
			{
				variant: "default",
				color: "primary",
				className: "bg-pink-600 hover:bg-pink-600/90 text-white ",
			},
			{
				variant: "default",
				color: "secondary",
				className: "bg-blue-700 hover:bg-blue-700/90 text-white",
			},
			{
				variant: "default",
				color: "accent",
				className: "bg-emerald-600 hover:bg-emerald-600/90 text-white",
			},
			// outline
			{
				variant: "outline",
				color: "primary",
				className: "bg-inherit hover:bg-pink-600",
			},
			{
				variant: "outline",
				color: "secondary",
				className: "bg-inherit hover:bg-blue-700",
			},
			{
				variant: "outline",
				color: "accent",
				className: "bg-inherit hover:bg-emerald-600",
			},
			// link
			{ variant: "link", color: "primary", className: "text-pink-500" },
			{ variant: "link", color: "secondary", className: "text-blue-700" },
			{ variant: "link", color: "accent", className: "text-emerald-600" },
		],
		defaultVariants: {
			variant: "default",
			size: "default",
			color: "primary",
		},
	}
);

export interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
		VariantProps<typeof buttonVariants> {}

export const Button = ({
	className,
	variant = "default",
	size,
	color,
	children,
	...props
}: ButtonProps) => {
	return (
		// <div
		// 	className={variant === "default" ? "pr-[5px] pb-[5px]" : "contents"}
		// >
		<button
			className={cn(buttonVariants({ className, variant, size, color }))}
			{...props}
		>
			{children}
		</button>
		// </div>
	);
};
