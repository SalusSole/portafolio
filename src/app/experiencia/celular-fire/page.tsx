import {
	IconBrandMysql,
	IconBrandNextjs,
	IconBrandNodejs,
	IconBrandReact,
	IconBrandTailwind,
	IconBrandTypescript,
	IconExclamationCircle,
	IconLink,
	IconSql,
} from "@tabler/icons-react";

import { Chip } from "@/components/Chip";
import Link from "next/link";

const tags = [
	{
		icon: <IconBrandNodejs />,
		name: "Node.js",
	},
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
	{
		icon: <IconBrandMysql />,
		name: "MySQL",
	},
];

export default function page() {
	return (
		<section className="flex flex-col gap-3">
			<h1 className="text-2xl md:text-4xl font-bold mb-3">
				Celular Fire
			</h1>
			<div className="flex flex-wrap gap-3">
				{tags.map(({ icon, name }) => (
					<Chip key={name}>
						{icon} {name}
					</Chip>
				))}
			</div>
			<Link
				href="https://www.celularfire.com"
				className="flex gap-1"
				target="_blank"
			>
				<IconLink /> www.celularfire.com
			</Link>
			<article>
				<h3 className="text-xl md:text-2xl mt-5 mb-2">
					🚀 Introducción
				</h3>
				<p>
					Mi colaboración en Celular Fire incluye el desarrollo de
					múltiples proyectos para mejorar la gestión de datos en las
					sucursales de la empresa. Sin embargo, el punto culminante
					de mi trabajo fue el desarrollo de un sitio web interno para
					los administradores, supervisores y personal de las
					sucursales, que transforma la visualización de datos en una
					experiencia altamente eficiente y personalizada.
				</p>
				<p>
					En respuesta a la versatilidad pero generalidad del sistema
					de punto de venta de la empresa, diseñé soluciones
					personalizadas que aprovechan la base de datos de cada
					sucursal. Esto implicó una investigación exhaustiva y algo
					de ingeniería inversa para comprender el flujo de la
					información en el punto de venta más relevante para la
					empresa.
				</p>
			</article>
			<article>
				<h3 className="text-xl md:text-2xl mt-5 mb-2">📸 Capturas</h3>
				<span className="bg-slate-200 p-2 grid grid-cols-[24px,auto] gap-2 rounded-md">
					<IconExclamationCircle />
					Algunos datos de las capturas fueron modificados para no
					revelar información confidencial de la empresa.
				</span>
				<img src="/experience/celular-fire/login.png" alt="Login" />
				<img src="/experience/celular-fire/inicio.png" alt="Inicio" />
				<img src="/experience/celular-fire/articulos.png" alt="Artículos" />
				<img src="/experience/celular-fire/ventas-reporte.png" alt="Reporte de ventas" />
				<img src="/experience/celular-fire/ventas-estadisticas.png" alt="Estadísticas de ventas" />
				<img src="/experience/celular-fire/usuarios.png" alt="Usuarios" />
				<img src="/experience/celular-fire/cajas.png" alt="Cajas" />
			</article>
		</section>
	);
}
