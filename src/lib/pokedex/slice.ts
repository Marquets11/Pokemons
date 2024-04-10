import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../pokemon/slice";
import { PayloadAction } from "@reduxjs/toolkit";

type Pokedex = Pokemon[];

const initialState: Pokedex = [];

const pokedexSlice = createSlice({
	name: "pokedex",
	initialState,
	reducers: {
		addPokemonToPokedex(state, { payload }: PayloadAction<Pokemon>) {
			if (!state.find(({ id }) => id === payload.id)) {
				state.push(payload);
			}
		},
	},
});

export const pokedex = pokedexSlice.reducer;
export const { addPokemonToPokedex } = pokedexSlice.actions;
