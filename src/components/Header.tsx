"use client";

import type { ReactNode } from "react";

import { IconCode, IconHeartHandshake, IconHome } from "@tabler/icons-react";
import { Ubuntu_Mono } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "../lib/cn";
import Link from "next/link";

const ubuntuMono = Ubuntu_Mono({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const paths = [
	{
		path: "/inicio",
		name: "Inicio",
		icon: <IconHome />,
	},
	{
		path: "/contratacion",
		name: "Contratación",
		icon: <IconHeartHandshake />,
	},
	{
		path: "/experiencia",
		name: "Experiencia",
		icon: <IconCode />,
	},
	// {
	// 	path: "/aptitudes",
	// 	name: "Aptitudes",
	// 	icon: <IconBarbell />,
	// },
];

export const Header = () => {
	const pathname = usePathname();

	return (
		<header className="flex w-full p-3 py-5 md:p-8 justify-center bg-white/75 backdrop-blur sticky top-0">
			<nav className="w-fit">
				<ul className="flex gap-5">
					{paths.map(({ icon, name, path }) => (
						<MenuItem
							href={path}
							isActive={pathname.includes(path)}
							key={name}
						>
							<span
								className={
									pathname.includes(path)
										? "text-pink-600"
										: ""
								}
							>
								{icon}
							</span>
							<span className="max-md:hidden">{name}</span>
						</MenuItem>
					))}
				</ul>
			</nav>
		</header>
	);
};

export const MenuItem = ({
	children,
	href,
	isActive,
}: {
	children: ReactNode;
	href: string;
	isActive: boolean;
}) => {
	return (
		<li>
			<Link
				href={href}
				className={cn(
					ubuntuMono.className,
					"flex gap-1 items-center font-medium text-slate-500 text-lg",
					isActive ? "text-black" : ""
				)}
			>
				{children}
			</Link>
		</li>
	);
};
