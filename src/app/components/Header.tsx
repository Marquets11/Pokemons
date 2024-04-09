import SearchBar from "./SearchBar";

export default function Header() {
	return (
		<div className="bg-white hover:shadow-2xl duration-500 w-full py-4 flex justify-center">
			<SearchBar />
		</div>
	);
}
