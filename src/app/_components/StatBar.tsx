import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { PokemonStats } from "@/lib/types";

interface StatBarProps {
	stat: PokemonStats;
}

export function StatBar({ stat }: StatBarProps) {
	return (
		<>
			<h4 className="uppercase text-sm cursor-default">
				{stat.stat.name.replaceAll("-", " ")}
			</h4>

			<Tooltip>
				<TooltipTrigger className="w-full h-2 border">
					<div
						className={`h-full bg-black`}
						style={{
							width: `${stat.base_stat > 100 ? 100 : stat.base_stat}%`,
						}}
					/>
				</TooltipTrigger>
				<TooltipContent>{stat.base_stat}/100</TooltipContent>
			</Tooltip>
		</>
	);
}

// import { PokemonStats } from "@/lib/types";

// interface StatBarProps {
// 	stat: PokemonStats;
// }

// export function StatBar({ stat }: StatBarProps) {
// 	return (
// 		<>
// 			<h4 className="uppercase text-sm cursor-default">
// 				{stat.stat.name.replaceAll("-", " ")}
// 			</h4>

// 			<div className="max-w-full h-2 border">
// 				<div
// 					className={`h-full bg-black`}
// 					style={{
// 						width: `${stat.base_stat}%`,
// 					}}
// 				/>
// 			</div>
// 		</>
// 	);
// }
