import { FaMagnifyingGlass } from "react-icons/fa6";

export function SearchBar() {
	return (
		<form
			action={"/pokemon"}
			className="rounded-full border-2 overflow-hidden flex gap-2 px-2"
		>
			<input
				type="text"
				id="name"
				name="name"
				autoComplete="off"
				className="p-2 outline-none
        font-mono"
			/>
			<button>
				<FaMagnifyingGlass />
			</button>
		</form>
	);
}
