import { configureStore } from "@reduxjs/toolkit";
import { pokemon } from "./pokemon/slice";
import { pokedex } from "./pokedex/slice";

export const makeStore = () => {
	return configureStore({
		reducer: { pokemon, pokedex },
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
