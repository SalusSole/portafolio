import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { cn } from "@/lib/cn";

const ubuntu = Ubuntu({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Desarrollador · Salvador Solís",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={cn(ubuntu.className, "min-h-svh")}>
				<Header />
				<main className="p-3 flex flex-col gap-8 lg:w-[1000px] md:p-8 m-auto">
					{children}
				</main>
			</body>
		</html>
	);
}
