import type { ReactNode } from "react";
import { Chip } from "./Chip";
import {
	IconCaretRight,
	IconCode,
	IconDeviceLaptop,
	IconSchool,
} from "@tabler/icons-react";
import { cn } from "../lib/cn";

interface Props {
	children: ReactNode;
	period: string;
	title: string;
	type: "work" | "project" | "studies";
	url: string;
}

export const ExperienceCard = ({
	children,
	period,
	title,
	type,
	url,
}: Props) => {
	return (
		<a
			className="group border-2 border-white md:hover:border-black p-3 rounded-xl grid md:grid-cols-[150px_auto] cursor-pointer"
			href={url}
		>
			<span className="text-black/75">{period}</span>
			<h4 className="font-medium grid grid-cols-[1fr_24px] gap-1 md:group-hover:gap-2 transition-all w-fit">
				{title}
				<IconCaretRight />
			</h4>
			<ExperienceTypeChip type={type} className="md:col-start-2 mt-1" />
			<p className="md:col-start-2 text-sm text-black/75 mt-3">
				{children}
			</p>
		</a>
	);
};

interface ExperienceTypeChipProps
	extends React.HTMLAttributes<HTMLSpanElement> {
	type: "work" | "project" | "studies";
}

export const ExperienceTypeChip = ({
	type,
	className,
	...otherProps
}: ExperienceTypeChipProps) => {
	const commonClases = "text-white w-fit";

	if (type === "project")
		return (
			<Chip
				{...otherProps}
				className={cn(className, "bg-emerald-600", commonClases)}
			>
				<IconDeviceLaptop size={20} /> Proyecto
			</Chip>
		);
	if (type === "studies")
		return (
			<Chip
				{...otherProps}
				className={cn(className, "bg-blue-600", commonClases)}
			>
				<IconCode size={20} /> Formación académica
			</Chip>
		);
	if (type === "work")
		return (
			<Chip
				{...otherProps}
				className={cn(className, "bg-pink-600", commonClases)}
			>
				<IconSchool size={20} /> Experiencia laboral
			</Chip>
		);
};
