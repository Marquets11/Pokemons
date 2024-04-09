"use client";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type types =
	| "electric"
	| "water"
	| "fairy"
	| "normal"
	| "fire"
	| "grass"
	| "ice"
	| "fighting"
	| "poison"
	| "ground"
	| "flying"
	| "psychic"
	| "bug"
	| "rock"
	| "ghost"
	| "dragon"
	| "dark"
	| "steel";

export interface PokemonType {
	type: {
		name: types;
	};
	button_color: types;
}

export interface PokemonMove {
	move: {
		name: string;
	};
}

export interface PokemonAbility {
	ability: {
		name: string;
	};
}

export interface PokemonStats {
	stat: { name: string };
	base_stat: number;
}

export interface Pokemon {
	abilities: PokemonAbility[];
	height: number;
	id: number;
	moves: PokemonMove[];
	name: string;
	sprites: {
		front_default: string;
	};
	stats: PokemonStats[];
	types: PokemonType[];
	weight: number;
}

interface InitialState {
	currentPokemon: Pokemon | null;
}

const initialState: InitialState = { currentPokemon: null };

const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	reducers: {
		defineCurrentPokemon(state, { payload }: PayloadAction<Pokemon>) {
			return {
				currentPokemon: {
					...payload,
					types: payload.types.map((type) => ({
						...type,
						button_color: type.type.name,
					})),
				},
			};
		},
	},
});

export const pokemon = pokemonSlice.reducer;
export const { defineCurrentPokemon } = pokemonSlice.actions;
