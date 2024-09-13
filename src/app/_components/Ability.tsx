import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { PokemonAbility } from "@/lib/types";
import { searchAbilityByURL } from "../functions/searchAbilityByURL";

interface AbilityProps {
	ability: PokemonAbility;
}

export async function Ability({ ability }: AbilityProps) {
	const pokemonAbility = await searchAbilityByURL({ url: ability.ability.url });

	return (
		<>
			<Popover>
				<PopoverTrigger
					className="p-2 py-1
					uppercase text-sm text-nowrap overflow-hidden overflow-ellipsis
          border rounded-sm
          bg-black text-white
          hover:text-black hover:bg-white
          duration-200"
				>
					{pokemonAbility.name.replaceAll("-", " ")}
				</PopoverTrigger>
				<PopoverContent>
					{pokemonAbility.effect_entries[1]
						? pokemonAbility.effect_entries[1].effect
						: pokemonAbility?.effect_entries[0]?.effect}
				</PopoverContent>
			</Popover>
		</>
	);
}
