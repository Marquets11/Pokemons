import { PokemonType, typeColor } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface BadgeTypeProps extends ComponentProps<"button"> {
	pokemonType: PokemonType;
}

const colors = `bg-yellow-400 
                bg-blue-400 
                bg-orange-300 
                bg-orange-500 
                bg-green-400 
                bg-blue-200 
                bg-red-800 
                bg-purple-400 
                bg-yellow-700 
                bg-gray-300
                bg-pink-400
                bg-lime-700
                bg-gray-500 
                bg-purple-600
                bg-blue-700
                bg-gray-900
                bg-gray-700
                bg-pink-300
                text-white`;

export function BadgeType({
	pokemonType,
	className,
	...props
}: BadgeTypeProps) {
	return (
		<>
			<button
				{...props}
				className={cn([
					`text-xs text-black p-1 ${typeColor[pokemonType.type.name]}`,
					className,
				])}
				key={pokemonType.type.name}
			>
				{pokemonType.type.name.charAt(0).toUpperCase() +
					pokemonType.type.name.slice(1)}
			</button>
		</>
	);
}
