export default function searchPokemonViaAPI(pokemonName: string) {
	const getPokemon = async () => {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
		);
		// if (!response.ok) return { message: "Pokemon Not Found!" };
		if (!response.ok) throw new Error("Pokemon Not Found!");

		const pokemonData = await response.json();
		return pokemonData;
	};

	return getPokemon();
}
