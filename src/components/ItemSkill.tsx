import type { ReactNode } from "react";

interface Props {
	icon: ReactNode;
	title: ReactNode;
	children: ReactNode;
}

export const ItemSkill = ({ icon, children, title }: Props) => {
	return (
		<li className="flex flex-col gap-1">
			<span className="text-emerald-600 text-lg font-bold flex gap-3">
				{icon}
				{title}
			</span>
			<p className="text-xs text-black/75">{children}</p>
		</li>
	);
};
