import { Outfit } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";

const outfit = Outfit({
	subsets: ["latin-ext"],
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["normal"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${outfit.className} max-w-[1700px] mx-auto relative`}>
				{children}
			</body>
		</html>
	);
}
