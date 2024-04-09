"use client";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import searchPokemonViaAPI from "../logic/searchPokemonViaAPI";
import { defineCurrentPokemon } from "@/lib/pokemon/slice";
import { useDispatch } from "react-redux";

export default function SearchBar() {
	const pokemonName = useRef("");
	const [errorPokemon, setErrorPokemon] = useState(false);
	const dispatch = useDispatch();

	const searchNewPokemon = () => {
		if (!pokemonName.current) {
			alert("Preencher o campo para pesquisar!");
			return;
		}

		searchPokemonViaAPI(pokemonName.current)
			.then((res) => {
				dispatch(defineCurrentPokemon(res));
				if (errorPokemon) setErrorPokemon(false);
			})
			.catch(() => setErrorPokemon(true))
			.finally(() => document.querySelector("form")?.reset());
	};

	return (
		<div className="relative">
			<form action={() => searchNewPokemon()}>
				<input
					type="text"
					className={`px-3 py-1 rounded-full font-mono w-72 border-4 border-black ${
						errorPokemon && "border-red-500 placeholder:text-red-500"
					}`}
					placeholder={`${errorPokemon ? "Pokemon Not Found!" : "ex: Pikachu"}`}
					maxLength={27}
					onChange={(ev) => (pokemonName.current = ev.target.value)}
					autoComplete="off"
				/>
				<button className="absolute right-3 top-3">
					<FaSearch className={`${errorPokemon && "text-red-500"}`} />
				</button>
			</form>
		</div>
	);
}
