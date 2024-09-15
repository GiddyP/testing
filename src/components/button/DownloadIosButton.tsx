"use client";
import React from "react";
import Button from ".";
import { SiApple } from "react-icons/si";
import Link from "next/link";

const DownloadIosButton = () => {
	return (
		<Link
			target='_blank'
			href='https://apps.apple.com/ng/app/jolly-podcast/id6504210753'
			className='text-black-200 cursor-pointer bg-white py-2 sm:py-4 px-5 sm:px-8 gap-1 lg:gap-1.5 text-xxs lg:text-sm font-bold rounded-full shadow-xl hover:text-white hover:bg-black-100 group w-fit flex items-center'
		>
			<SiApple className='w-[30px] h-[32px] lg:w-[40px] lg:h-[42px] text-black-100 group-hover:text-white' />

			<div className='text-start'>
				<h4 className='text-mxs lg:text-xs leading-3 tracking-wider text-black-200/70 group-hover:text-gray-500'>
					DOWNLOAD FOR FREE
				</h4>
				<h4 className='text-black-200 text-xs lg:text-xl font-semibold group-hover:text-gray-500'>
					Apple Store
				</h4>
			</div>
		</Link>
	);
};

export default DownloadIosButton;
