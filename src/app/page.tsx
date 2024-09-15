import AppLayout from "@/components/AppLayout";
import React from "react";
import Hero from "./(home)/components/Hero";
import { FiLoader } from "react-icons/fi";

const page = () => {
	return (
		<AppLayout>
			<Hero />
		</AppLayout>
	);
};

export default page;
