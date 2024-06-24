import { buttonVariants } from "@/components/Button";
import { Skills } from "@/components/Skill";
import Link from "next/link";

export default function page() {
	return (
		<>
			<article className="flex flex-col gap-1">
				<h1 className="text-2xl md:text-4xl font-bold mb-3">
					Trabajemos juntos
				</h1>
				<p>
					Mi experiencia comprende 3 años trabajando para una empresa
					donde he sido el encargado de implementar distintos
					programas hechos a medida para complementar el punto de
					venta usado por la misma.
				</p>
				<p>
					Paralelamente me he mantenido en un constante crecimiento
					que me ha otorgado una mayor capacidad de superar los retos
					que he desafiado, siempre buscando la mejor solución
					posible, aunque implique aprender tecnologías y metodologías
					de trabajo nuevas.
				</p>
				<h3 className="text-lg md:text-xl font-bold mt-5 mb-2">
					¿Por qué contratarme?
				</h3>
				<p>
					He aprendido a usar una amplia gama de tecnologías y
					herramientas como resultado de mi compromiso por los
					proyectos que he desarrollado. Si hay una mejor manera de
					solucionar un determinado reto adquiriré el conocimiento
					necesario para cubrir la necesidad en concreto. Añadiéndole
					dinamismo a mi perfil por mi gran capacidad de
					adaptabilidad.
				</p>
				<p>
					También he trabajado en distintos entornos, usando Linux,
					Windows y MacOS, pudiéndome adaptar a cualquier entorno de
					desarrollo sin problema.
				</p>
			</article>
			<Skills />
			<article>
				Estaré encantado de saber de ti para conversar cómo mis perfil
				puede aportar valor a tu equipo.
				<div className="flex gap-5 mt-3">
					<Link
						href="mailto:salvador.sol.ssi.13@gmail.com"
						className={buttonVariants()}
					>
						Envíame un correo
					</Link>
					<Link
						href="/experiencia"
						className={buttonVariants({ color: "accent" })}
					>
						¡Conoce mi trabajo!
					</Link>
				</div>
			</article>
		</>
	);
}
