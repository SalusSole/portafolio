/* eslint-disable @next/next/no-img-element */
import { IconBrandTypescript, IconBrandReact } from "@tabler/icons-react";
import { Ubuntu_Mono } from "next/font/google";

import { buttonVariants } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { cn } from "@/lib/cn";

const ubuntuMono = Ubuntu_Mono({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export default function Home() {
	return (
		<>
			<section className="grid grid-cols-[auto_1fr] gap-x-3 items-center">
				<img
					src="/me.jpg"
					alt="Salvador"
					className="max-md:w-[64px] w-[200px] rounded-full max-md:row-span-3 row-span-4"
				/>
				<h3
					className={cn(
						"text-pink-600 md:text-2xl",
						ubuntuMono.className
					)}
				>
					¡Hola mundo! Soy
				</h3>
				<span className="col-start-2 text-xl md:text-4xl font-bold">
					<h1>Salvador Solís Iñiguez</h1>
					<h2>Apasionado Desarrollador Web</h2>
				</span>
				<div className="max-md:col-span-full col-start-2 flex gap-3 mt-3">
					<Chip>
						<IconBrandTypescript size={20} /> Typescript
					</Chip>
					<Chip>
						<IconBrandReact size={20} /> React
					</Chip>
				</div>
			</section>
			<article>
				<p>
					Desarrollador web especializado en TypeScript, me destaco
					por mi{" "}
					<code
						className={cn("text-emerald-600", ubuntuMono.className)}
					>
						creatividad
					</code>
					,{" "}
					<code className={cn("text-pink-600", ubuntuMono.className)}>
						ingenio
					</code>{" "}
					y{" "}
					<code className={cn("text-blue-600", ubuntuMono.className)}>
						pensamiento crítico
					</code>
					. Con una formación en tecnología y programación he liderado
					proyectos que demuestran mi entusiasmo y capacidad de
					superar los distintos retos que se me presentan.
				</p>
			</article>
			<div className="flex max-md:flex-col gap-5">
				<a className={buttonVariants()} href="/contratacion">
					¡Trabajemos juntos!
				</a>
				<a
					className={buttonVariants({ color: "accent" })}
					href="/experiencia"
				>
					¡Conoce mi trabajo!
				</a>
			</div>
		</>
	);
}
