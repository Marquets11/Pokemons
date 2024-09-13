"use client";

import Image from "next/image";
import { searchPokemonByName } from "../functions/searchPokemonByName";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pokemon } from "@/lib/types";
import { BadgeType } from "./BadgeType";

interface PokemonFetchedProps {
	name: string;
}

export function PokemonFetched({ name }: PokemonFetchedProps) {
	const [pokemon, setPokemon] = useState<Pokemon>();

	const updatePokemon = () => {
		searchPokemonByName({ name }).then((response) => setPokemon(response));
	};

	useEffect(() => {
		updatePokemon();
	}, []);

	if (!pokemon) return;

	return (
		<Link href={`/pokemon?name=${name}`}>
			<div
				className="p-5 bg-gray-600 rounded-sm
        relative group/card
        overflow-hidden
        hover:scale-125 hover:z-10 hover:bg-white hover:shadow-xl  hover:shadow-black
        duration-300"
			>
				<Image
					src={pokemon.sprites.front_default}
					alt={`${pokemon.name}-sprite`}
					width={500}
					height={500}
					className="drop-shadow-md"
				/>

				<h2
					className="text-sm font-extrabold
          max-w-full overflow-hidden overflow-ellipsis
          absolute top-0 -right-96 z-10
          group-hover/card:right-2
          duration-500"
				>
					{pokemon.name.charAt(0).toLocaleUpperCase() + pokemon.name.slice(1)}
				</h2>

				<div
					className="flex gap-1
					absolute -bottom-96 -left-0 z-10
					group-hover/card:bottom-0
					duration-700 delay-75"
				>
					{pokemon.types.map((type) => (
						<BadgeType key={type.type.name} pokemonType={type} />
					))}
				</div>
			</div>
		</Link>
	);
}
