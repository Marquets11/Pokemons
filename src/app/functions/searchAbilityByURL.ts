import { Ability, Pokemon } from "@/lib/types";
import axios from "axios";

interface searchPokemonByNameProps {
	url: string;
}

export async function searchAbilityByURL({ url }: searchPokemonByNameProps) {
	const response = await axios.get(url);

	return response.data as Ability;
}
