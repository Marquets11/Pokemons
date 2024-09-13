"use client";

import { useEffect, useState } from "react";
import { searchPokemons } from "../functions/searchPokemons";
import { ControlPageList } from "./ControlPageList";
import { PokemonFetched } from "./PokemonFetched";
import { DataFetched } from "@/lib/types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export function ListOfPokemons() {
	const [dataPokemons, setDataPokemons] = useState<DataFetched>();
	const [page, setPage] = useState<number>(0);

	const updatePage = () => {
		searchPokemons({ offset: page }).then((response) => {
			setDataPokemons(response.data);
		});
	};

	useEffect(() => {
		updatePage();
	}, [page]);

	if (!dataPokemons) return;

	return (
		<section
			className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-5 
      relative"
		>
			{dataPokemons.results.map((data) => (
				<PokemonFetched key={data.name} name={data.name} />
			))}
			<nav className="fixed bottom-5 right-10 flex gap-5 z-50">
				<ControlPageList
					disabled={!dataPokemons.previous}
					onClick={() => setPage((prev) => prev - 50)}
					className={`${!!dataPokemons.previous && "hover:bg-white"}`}
				>
					<FaAngleLeft size={25} />
				</ControlPageList>
				<ControlPageList
					disabled={!dataPokemons.next}
					onClick={() => setPage((prev) => prev + 50)}
					className={`${!!dataPokemons.next && "hover:bg-white"}`}
				>
					<FaAngleRight size={25} />
				</ControlPageList>
			</nav>
		</section>
	);
}
