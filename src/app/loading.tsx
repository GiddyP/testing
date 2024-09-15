import AppLayout from "@/components/AppLayout";
import { FiLoader } from "react-icons/fi";
import React from "react";

const loading = () => {
	return (
		<AppLayout className=''>
			<div className='grid place-content-center w-full h-screen'>
				<FiLoader className='text-primary-100 text-6xl animate-spin' />
			</div>
		</AppLayout>
	);
};

export default loading;
