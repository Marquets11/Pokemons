"use client";

import { LuSword, LuShield, LuWind } from "react-icons/lu";
import { CiMedicalCross } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { GiWingedShield } from "react-icons/gi";
import { TbWeight } from "react-icons/tb";
import { RiRuler2Line } from "react-icons/ri";
import { MdCatchingPokemon } from "react-icons/md";
import { Pokemon, typeColor } from "@/lib/types";
import { usePokedexStore } from "@/store/pokedex";

type CardPokemonProps = {
	pokemon: Pokemon;
};

export default function CardPokemon({ pokemon }: CardPokemonProps) {
	const { pokemons } = usePokedexStore();
	const alreadyCaptured = pokemons.find(({ id }) => id === pokemon.id);

	return (
		<div
			className={`relative bg-transparent w-full flex flex-col gap-2 rounded-lg group`}
		>
			{alreadyCaptured && (
				<MdCatchingPokemon
					className="absolute top-5 right-5 text-red-600"
					scale={20}
				/>
			)}
			<img
				src={pokemon.sprites.front_default}
				alt={`Sprite of ${pokemon.name}`}
				className="w-52 mx-auto md:w-full opacity-50 group-hover:opacity-100 group-hover:scale-110 duration-700"
			/>
			<main className="p-2 text-black  bg-gradient-to-t from-white rounded-xl">
				<h2 className="font-bold text-xl text-center text-white">
					{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
				</h2>
				<div className="flex justify-center gap-2">
					{pokemon.types &&
						pokemon.types.map(({ type, button_color }) => (
							<button className={`${typeColor[button_color]}`} key={type.name}>
								{type.name.charAt(0).toUpperCase() + type.name.slice(1)}
							</button>
						))}
				</div>
				<div className="flex flex-wrap gap-3 justify-center my-2">
					<h3 className="flex items-center">
						<RiRuler2Line /> {pokemon.height / 10}m
					</h3>
					<h3 className="flex items-center">
						<TbWeight /> {pokemon.weight / 10}kg
					</h3>
				</div>
				<div className="grid grid-cols-3 gap-2">
					<h3 className="base-stats">
						<CiMedicalCross />
						{pokemon.stats.find(({ stat }) => stat.name === "hp")?.base_stat}
					</h3>
					<h3 className="base-stats">
						<LuSword />
						{
							pokemon.stats.find(({ stat }) => stat.name === "attack")
								?.base_stat
						}
					</h3>
					<h3 className="base-stats">
						<LuShield />
						{
							pokemon.stats.find(({ stat }) => stat.name === "defense")
								?.base_stat
						}
					</h3>
					<h3 className="base-stats">
						<AiOutlineFire />
						{
							pokemon.stats.find(({ stat }) => stat.name === "special-attack")
								?.base_stat
						}
					</h3>
					<h3 className="base-stats">
						<GiWingedShield />
						{
							pokemon.stats.find(({ stat }) => stat.name === "special-defense")
								?.base_stat
						}
					</h3>
					<h3 className="base-stats">
						<LuWind />
						{pokemon.stats.find(({ stat }) => stat.name === "speed")?.base_stat}
					</h3>
				</div>
			</main>
		</div>
	);
}
