import Image from "next/image";
import { searchPokemonByName } from "../functions/searchPokemonByName";
import { BadgeType } from "../_components/BadgeType";
import { FaRulerVertical, FaWeightHanging } from "react-icons/fa6";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Ability } from "../_components/Ability";
import { StatBar } from "../_components/StatBar";
import { SpritePokemon } from "../_components/SpritePokemon";
import { NamePokemon } from "../_components/NamePokemon";

export default async function Page({
	searchParams,
}: {
	searchParams: { name: string };
}) {
	const pokemon = await searchPokemonByName({ name: searchParams.name });

	return (
		<>
			<main
				className="flex flex-col sm:flex-row m-auto
        max-w-3xl
        max-sm:divide-y-2 sm:divide-x-2
        border-2 rounded-sm"
			>
				<section className="relative flex min-w-52 min-h-52 p-5 bg-gray-100">
					<NamePokemon className="absolute top-2 left-2" name={pokemon.name} />

					<span
						className="absolute top-10 left-2 
						font-mono text-xs"
					>
						N°{pokemon.order}
					</span>

					<SpritePokemon pokemon={pokemon} />

					<div className="flex gap-1 absolute bottom-0 left-2">
						{pokemon.types.map((type) => (
							<BadgeType
								key={type.type.name}
								pokemonType={type}
								className="px-4 text-sm"
							/>
						))}
					</div>
				</section>

				<section
					className="px-10 pb-5 w-full bg-white
					flex flex-col gap-5"
				>
					<>
						<h3 className="text-black -mx-10 bg-gray-100 px-10 py-2 border-b-2">
							Overview
						</h3>
						<div className="flex justify-around">
							<nav className="flex items-center gap-2">
								<Tooltip>
									<TooltipTrigger>
										<FaRulerVertical />
									</TooltipTrigger>
									<TooltipContent>
										<p>Height</p>
									</TooltipContent>
								</Tooltip>
								<span>{pokemon.height} m</span>
							</nav>

							<nav className="flex items-center gap-2">
								<Tooltip>
									<TooltipTrigger>
										<FaWeightHanging />
									</TooltipTrigger>
									<TooltipContent>
										<p>Weight</p>
									</TooltipContent>
								</Tooltip>
								<span>{pokemon.weight} kg</span>
							</nav>
						</div>
					</>

					<>
						<h3 className="text-black -mx-10 bg-gray-100 px-10 py-2 border-y-2">
							Abilites
						</h3>
						<nav className="flex max-sm:flex-wrap gap-2 justify-around">
							{pokemon.abilities.map((pokemonAbility) => (
								<Ability
									key={pokemonAbility.ability.name}
									ability={pokemonAbility}
								/>
							))}
						</nav>
					</>

					<>
						<h3 className="text-black -mx-10 bg-gray-100 px-10 py-2 border-y-2">
							Stats
						</h3>
						<nav>
							{pokemon.stats.map((stat) => (
								<StatBar key={stat.stat.name} stat={stat} />
							))}
						</nav>
					</>
				</section>
			</main>
		</>
	);
}
