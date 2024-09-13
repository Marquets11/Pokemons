import { Pokemon } from "@/lib/types";
import axios from "axios";
import { redirect } from "next/navigation";

interface searchPokemonByNameProps {
	name: string;
}

export async function searchPokemonByName({ name }: searchPokemonByNameProps) {
	try {
		if (name.trim() === "") throw new Error();

		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
		);

		return response.data as Pokemon;
	} catch (error) {
		redirect("/pokemon/notFound");
	}
}
