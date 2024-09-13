import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface HeaderGroupProps extends ComponentProps<"div"> {
	children: React.ReactNode;
}

export function HeaderGroup({
	children,
	className,
	...props
}: HeaderGroupProps) {
	return (
		<div {...props} className={cn([``, className])}>
			{children}
		</div>
	);
}
