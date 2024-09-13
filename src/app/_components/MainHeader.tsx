import Link from "next/link";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { FaFolderOpen } from "react-icons/fa6";
import pokemonLogo from "@/assets/pokemon-logo.png";
import Image from "next/image";

export function MainHeader() {
	return (
		<Header.Root className="flex-wrap shadow-lg shadow-black">
			<Header.Group>
				<Link href={"/"}>
					<Image
						src={pokemonLogo}
						alt="pokemon-logo"
						className="max-w-52 hover:scale-105
            duration-200"
					/>
				</Link>
			</Header.Group>
			<Header.Group className="flex items-center gap-5">
				<SearchBar />
				{/* <Link href={"/pokedex"}>
					<FaFolderOpen size={25} />
				</Link> */}
			</Header.Group>
		</Header.Root>
	);
}
