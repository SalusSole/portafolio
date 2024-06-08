import {
	IconAppWindow,
	IconBolt,
	IconEyeSearch,
	IconPalette,
	IconRefresh,
	IconServer2,
} from "@tabler/icons-react";
import { Card } from "./Card";
import { ItemSkill } from "./ItemSkill";

export const Skills = () => {
	return (
		<Card className="p-5">
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				<ItemSkill
					title="Sitios estáticos y dinámicos"
					icon={<IconAppWindow />}
				>
					Implemento sitios web adaptados a las necesidades
					específicas de cada proyecto.
				</ItemSkill>
				<ItemSkill title="Optimización de carga" icon={<IconBolt />}>
					Utilizo frameworks especializados para mejorar la velocidad
					y eficiencia de las páginas web.
				</ItemSkill>
				<ItemSkill title="Atención al detalle" icon={<IconEyeSearch />}>
					Mantengo una consistencia en el lenguaje visual utilizado,
					garantizando la coherencia y precisión en la implementación
					de la UI con HTML y CSS.
				</ItemSkill>
				<ItemSkill title="Adaptabilidad" icon={<IconRefresh />}>
					Mi gran afición por la tecnología me mantiene en constante
					crecimiento y aprendizaje.
				</ItemSkill>
				<ItemSkill title="Comprensión de diseño" icon={<IconPalette />}>
					Comunicación eficiente con el equipo de diseño y uso de
					herramientas como Figma
				</ItemSkill>
				<ItemSkill title="Backend básico" icon={<IconServer2 />}>
					Unido a mi adaptabilidad, puedo desempeñarme como un backend
					si el puesto lo requiere.
				</ItemSkill>
			</ul>
		</Card>
	);
};
