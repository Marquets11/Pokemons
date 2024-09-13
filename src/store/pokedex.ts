import { Pokedex, Pokemon } from "@/lib/types";
import { create } from "zustand";

export const usePokedexStore = create<Pokedex>((set) => ({
	pokemons: [],
	addPokemonToPokedex: (pokemon: Pokemon) =>
		set(({ pokemons }) => ({ pokemons: [...pokemons, pokemon] })),
}));
