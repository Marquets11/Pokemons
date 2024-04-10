"use client";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import CardPokemon from "../components/CardPokemon";

export default function Pokedex() {
	const pokedex = useSelector((state: RootState) => state.pokedex);

	return (
		<>
			<Link href={"/"}>
				<IoIosArrowBack
					className="fixed top-1/2 -left-2 w-10 z-10 hover:text-white hover:translate-x-5 hover:scale-150 duration-500"
					size={30}
				/>
			</Link>
			<div
				className={`min-h-screen bg-stone-800 ${
					pokedex.length > 0
						? "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2"
						: "flex items-center justify-center"
				}`}
			>
				{pokedex && pokedex.length > 0 ? (
					pokedex.map((pokemon) => (
						<CardPokemon
							pokemonHeight={pokemon.height}
							pokemonName={pokemon.name}
							pokemonSprite={pokemon.sprites.front_default}
							pokemonStats={pokemon.stats}
							pokemonTypes={pokemon.types}
							pokemonWeight={pokemon.weight}
							pokemonId={pokemon.id}
							key={pokemon.id}
						/>
					))
				) : (
					<h2 className="font-mono text-white">Your Pokedex is empty!</h2>
				)}
			</div>
		</>
	);
}
