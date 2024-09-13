import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface NamePokemonProps extends ComponentProps<"h1"> {
	name: string;
}

export function NamePokemon({ name, className, ...props }: NamePokemonProps) {
	return (
		<>
			<h1
				{...props}
				className={cn([
					`text-nowrap overflow-hidden overflow-ellipsis max-w-full z-20
          text-2xl font-bold text-black`,
					className,
				])}
			>
				{name
					.split("-")
					.map((text) => text.charAt(0).toLocaleUpperCase() + text.slice(1))
					.join(" ")}
			</h1>
		</>
	);
}
