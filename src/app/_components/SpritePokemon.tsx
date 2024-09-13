import { Pokemon } from "@/lib/types";
import Image from "next/image";

interface SpritePokemonProps {
	pokemon: Pokemon;
}

export function SpritePokemon({ pokemon }: SpritePokemonProps) {
	return (
		<div
			className="w-full  m-auto 
      group/sprite relative z-10"
		>
			{pokemon.sprites.front_shiny && (
				<Image
					src={pokemon.sprites.front_shiny}
					alt={`${pokemon.name}-shiny-sprite`}
					width={500}
					height={500}
					className="absolute inset-0 -z-10
        	duration-300"
				/>
			)}

			{pokemon.sprites.front_default && (
				<Image
					src={pokemon.sprites.front_default}
					alt={`${pokemon.name}-default-sprite`}
					width={500}
					height={500}
					className={`${
						pokemon.sprites.front_shiny &&
						"group-hover/sprite:opacity-0 duration-700"
					}`}
				/>
			)}
		</div>
	);
}
