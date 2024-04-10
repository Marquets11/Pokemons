"use client";
import { useDispatch, useSelector } from "react-redux";
import CardPokemon from "./components/CardPokemon";
import Header from "./components/Header";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { addPokemonToPokedex } from "@/lib/pokedex/slice";

export default function Page() {
	const dispatch = useDispatch();
	const pokemon = useSelector(
		(state: RootState) => state.pokemon
	)?.currentPokemon;

	return (
		<div className="h-screen bg-stone-800 flex flex-col">
			<Header />
			<div className="flex-1 flex flex-col justify-center items-center w-72 m-auto">
				{pokemon ? (
					<>
						<CardPokemon
							pokemonName={pokemon.name}
							pokemonSprite={pokemon.sprites.front_default}
							pokemonTypes={pokemon.types}
							pokemonHeight={pokemon.height}
							pokemonWeight={pokemon.weight}
							pokemonStats={pokemon.stats}
							pokemonId={pokemon.id}
							key={pokemon.id}
						/>
						<nav className="flex justify-between w-full p-5">
							<button
								className="btn-options"
								onClick={() => dispatch(addPokemonToPokedex(pokemon))}
							>
								Capture
							</button>
							<button className="btn-options">
								<Link href={"/pokedex"}>Pokédex</Link>
							</button>
						</nav>
					</>
				) : (
					<h1 className="text-white font-mono">Search for a pokemon!</h1>
				)}
			</div>
		</div>
	);
}
