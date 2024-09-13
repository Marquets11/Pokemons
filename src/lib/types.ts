export type Ability = {
	effect_entries: {
		effect: string;
	}[];
	name: string;
};

export type DataFetched = {
	next: null | string;
	previous: null | string;
	results: ResultDataFetched[];
};

type ResultDataFetched = {
	name: string;
	url: string;
};

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

interface PokemonMove {
	move: {
		name: string;
	};
}

export interface PokemonAbility {
	ability: {
		name: string;
		url: string;
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
		front_shiny: string;
	};
	stats: PokemonStats[];
	types: PokemonType[];
	weight: number;
	order: number;
}

export interface Pokedex {
	pokemons: Pokemon[];
}

export enum typeColor {
	electric = "bg-yellow-400",
	water = "bg-blue-400",
	normal = "bg-orange-300",
	fire = "bg-orange-500",
	grass = "bg-green-400",
	ice = "bg-blue-200",
	fighting = "bg-red-800  text-white",
	poison = "bg-purple-400",
	ground = "bg-yellow-700  text-white",
	flying = "bg-gray-300",
	psychic = "bg-pink-400",
	bug = "bg-lime-700",
	rock = "bg-gray-500",
	ghost = "bg-purple-600  text-white",
	dragon = "bg-blue-700  text-white",
	dark = "bg-gray-900  text-white",
	steel = "bg-gray-700  text-white",
	fairy = "bg-pink-300",
}
