"use client";
import React, { ReactNode } from "react";

interface AppLayoutProps {
	children: ReactNode;
	className?: string;
}

const AppLayout = ({ children, className }: AppLayoutProps) => {
	return (
		<>
			<main className={`relative w-full min-h-screen`}>{children}</main>
		</>
	);
};

export default AppLayout;
