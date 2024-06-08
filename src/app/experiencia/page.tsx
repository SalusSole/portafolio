import { ExperienceCard } from "@/components/ExperienceCard";

export default function page() {
	return (
		<>
			<ExperienceCard
				period="2021 - Presente"
				title="Encargado de sistemas y programador · Celular Fire"
				type="work"
				url="/experiencia/celular-fire"
			>
				Lideré la adaptación de un sistema de ventas existente para
				satisfacer las necesidades específicas de la empresa. Implementé
				programas personalizados desarrollados con tecnologías modernas
				para mejorar la eficiencia y funcionalidad del sistema. También
				desempeñé tareas como la instalación del sistema en nuevas
				sucursales y el mantenimiento continuo para garantizar su óptimo
				funcionamiento.
			</ExperienceCard>
			<ExperienceCard
				period="2024"
				title="Nature Hy"
				type="project"
				url="/experiencia/nature-hy"
			>
				Punto de ventas simplificado para un emprendimiento en el que
				estoy asociado. Destinado para tener control sobre las ganancias
				y el stock.
			</ExperienceCard>
			<ExperienceCard
				period="2016 - 2020"
				title="Tecnólogo en desarrollo de software · Centro de enseñanza técnica industrial"
				type="studies"
				url=""
			>
				Durante mis cuatro años de formación exploré diversos campos de
				la tecnología, lo que me permitió adquirir un conocimiento
				integral en distintas áreas. Sin embargo, fue en el desarrollo
				web donde encontré mi verdadera pasión y me especialicé.
			</ExperienceCard>
		</>
	);
}
