import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainHeader } from "./_components/MainHeader";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Pokemons",
	description: "Usage of Pokemon API",
	icons: {
		icon: "https://i.pinimg.com/originals/32/eb/23/32eb230b326ee3c76e64f619a06f6ebb.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scrollbar-none">
			<body className={inter.className}>
				<TooltipProvider>
					<main className="min-h-screen flex flex-col">
						<MainHeader />
						<div className="flex-1 bg-gray-900 p-10">{children}</div>
					</main>
				</TooltipProvider>
			</body>
		</html>
	);
}
