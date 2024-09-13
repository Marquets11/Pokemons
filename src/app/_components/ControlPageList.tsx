import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ControlPageListProps extends ComponentProps<"button"> {
	children: React.ReactNode;
}

export function ControlPageList({
	children,
	className,
	...props
}: ControlPageListProps) {
	return (
		<button
			{...props}
			className={cn([
				`size-12 bg-white/50 rounded-full 
				flex justify-center items-center`,
				className,
			])}
		>
			{children}
		</button>
	);
}
