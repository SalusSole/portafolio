/* eslint-disable @next/next/no-img-element */
"use client";

import {
	IconBrandNextjs,
	IconBrandReact,
	IconBrandTailwind,
	IconBrandTypescript,
	IconExclamationCircle,
	IconLink,
	IconSql,
} from "@tabler/icons-react";

import { Chip } from "@/components/Chip";

const tags = [
	{
		icon: <IconBrandReact />,
		name: "React",
	},
	{
		icon: <IconBrandNextjs />,
		name: "NextJS",
	},
	{
		icon: <IconBrandTypescript />,
		name: "TypeScript",
	},
	{
		icon: <IconBrandTailwind />,
		name: "Tailwind",
	},
	{
		icon: <IconSql />,
		name: "PostgreSQL",
	},
];

export default function Page() {
	return (
		<section className="flex flex-col gap-3">
			<h1 className="text-2xl md:text-4xl font-bold mb-3">Nature Hy</h1>
			<div className="flex flex-wrap gap-3">
				{tags.map(({ icon, name }) => (
					<Chip key={name}>
						{icon} {name}
					</Chip>
				))}
			</div>
			<a
				href="https://naturehy.vercel.app"
				className="flex gap-1"
				target="_blank"
			>
				<IconLink /> naturehy.vercel.app/
			</a>
			<article>
				<h3 className="text-xl md:text-2xl mt-5 mb-2">
					🚀 Introducción
				</h3>
				<p>
					Nature Hy fue un emocionante proyecto personal en el que uní
					muchos de mis conocimientos adquiridos en los últimos años
					para crear un punto de venta sencillo que se adaptara a las
					necesidades de mi cliente. A pesar de encontrar algunos
					desafíos logré superarlos aprendiendo nuevas cosas en el
					camino. Te invito a conocer más sobre el proceso de
					desarrollo de este proyecto.
				</p>
			</article>
			<article>
				<h3 className="text-xl md:text-2xl mt-5 mb-2">📸 Capturas</h3>
				<span className="bg-slate-200 p-2 grid grid-cols-[24px,auto] gap-2 rounded-md">
					<IconExclamationCircle />
					Algunos datos de las capturas fueron modificados para no
					revelar información confidencial de la empresa.
				</span>
				<div className="p-8 gap-[64px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] *:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.65)]">
					<img src="/experience/nature-hy/menu.png" alt="Menú" />
					<img
						src="/experience/nature-hy/venta.png"
						alt="Registrar venta"
					/>
					<img
						src="/experience/nature-hy/compra.png"
						alt="Registrar compra"
					/>
					<img
						src="/experience/nature-hy/movimientos.png"
						alt="Movimientos"
					/>
				</div>
			</article>
		</section>
	);
}
