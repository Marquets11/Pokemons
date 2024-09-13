import { DataFetched } from "@/lib/types";
import axios from "axios";

interface searchPokemonsProps {
	offset?: number;
}

export async function searchPokemons({ offset = 0 }: searchPokemonsProps) {
	const response = await axios.get(
		`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=50`
	);

	return response.data.results as DataFetched;
}
