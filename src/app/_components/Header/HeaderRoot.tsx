import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface HeaderRootProps extends ComponentProps<"header"> {
	children: React.ReactNode;
}

export function HeaderRoot({ children, className, ...props }: HeaderRootProps) {
	return (
		<header
			{...props}
			className={cn([
				`sticky top-0 left-0 z-50
        px-3 sm:px-10 py-5 bg-white
        flex gap-5 justify-around items-center`,
				className,
			])}
		>
			{children}
		</header>
	);
}
