"use client";

import { PokemonStats, PokemonType } from "@/lib/pokemon/slice";
import { LuSword, LuShield, LuWind } from "react-icons/lu";
import { CiMedicalCross } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { GiWingedShield } from "react-icons/gi";
import { TbWeight } from "react-icons/tb";
import { RiRuler2Line } from "react-icons/ri";

export default function CardPokemon({
	pokemonName,
	pokemonSprite,
	pokemonTypes,
	pokemonHeight,
	pokemonWeight,
	pokemonStats,
}: {
	pokemonName: string;
	pokemonSprite: string;
	pokemonTypes: PokemonType[];
	pokemonHeight: number;
	pokemonWeight: number;
	pokemonStats: PokemonStats[];
}) {
	const typeColor = {
		electric: "bg-yellow-400 rounded-lg px-5 py-1 text-black font-bold",
		water: "bg-blue-400 rounded-lg px-5 py-1 text-black font-bold",
		normal: "bg-orange-300 rounded-lg px-5 py-1 text-black font-bold",
		fire: "bg-orange-500 rounded-lg px-5 py-1 text-black font-bold",
		grass: "bg-green-400 rounded-lg px-5 py-1 text-black font-bold",
		ice: "bg-blue-200 rounded-lg px-5 py-1 text-black font-bold",
		fighting: "bg-red-800 rounded-lg px-5 py-1 text-white font-bold",
		poison: "bg-purple-400 rounded-lg px-5 py-1 text-black font-bold",
		ground: "bg-yellow-700 rounded-lg px-5 py-1 text-white font-bold",
		flying: "bg-gray-300 rounded-lg px-5 py-1 text-black font-bold",
		psychic: "bg-pink-400 rounded-lg px-5 py-1 text-black font-bold",
		bug: "bg-lime-700 rounded-lg px-5 py-1 text-black font-bold",
		rock: "bg-gray-500 rounded-lg px-5 py-1 text-black font-bold",
		ghost: "bg-purple-600 rounded-lg px-5 py-1 text-white font-bold",
		dragon: "bg-blue-700 rounded-lg px-5 py-1 text-white font-bold",
		dark: "bg-gray-900 rounded-lg px-5 py-1 text-white font-bold",
		steel: "bg-gray-700 rounded-lg px-5 py-1 text-white font-bold",
		fairy: "bg-pink-300 rounded-lg px-5 py-1 text-black font-bold",
	};

	return (
		<div className={`bg-transparent w-full flex flex-col gap-2 rounded-lg`}>
			<img
				src={pokemonSprite}
				alt={`Sprite of ${pokemonName}`}
				className="w-52 mx-auto md:w-full hover:scale-150 duration-500"
			/>
			<main className="p-2 text-black bg-white rounded-xl">
				<h2 className="font-bold text-xl text-center">
					{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
				</h2>
				<div className="flex justify-center gap-2">
					{pokemonTypes &&
						pokemonTypes.map(({ type, button_color }) => (
							<button className={`${typeColor[button_color]}`} key={type.name}>
								{type.name.charAt(0).toUpperCase() + type.name.slice(1)}
							</button>
						))}
				</div>
				<div className="flex flex-wrap gap-3 justify-center my-2">
					<h3 className="flex items-center">
						<RiRuler2Line /> {pokemonHeight / 10}m
					</h3>
					<h3 className="flex items-center">
						<TbWeight /> {pokemonWeight / 10}kg
					</h3>
				</div>
				<div className="grid grid-cols-3 gap-2">
					<h3 className="base-stats">
						<CiMedicalCross />
						{pokemonStats.find(({ stat }) => stat.name === "hp")?.base_stat}
					</h3>
					<h3 className="base-stats">
						<LuSword />
						{pokemonStats.find(({ stat }) => stat.name === "attack")?.base_stat}
					</h3>
					<h3 className="base-stats">
						<LuShield />
						{
							pokemonStats.find(({ stat }) => stat.name === "defense")
								?.base_stat
						}
					</h3>
					<h3 className="base-stats">
						<AiOutlineFire />
						{
							pokemonStats.find(({ stat }) => stat.name === "special-attack")
								?.base_stat
						}
					</h3>
					<h3 className="base-stats">
						<GiWingedShield />
						{
							pokemonStats.find(({ stat }) => stat.name === "special-defense")
								?.base_stat
						}
					</h3>
					<h3 className="base-stats">
						<LuWind />
						{pokemonStats.find(({ stat }) => stat.name === "speed")?.base_stat}
					</h3>
				</div>
			</main>
		</div>
	);
}
