"use client";
import React from "react";
import Button from ".";
import Picture from "../picture/Index";
import { andriod } from "../../../public/dev_images";
import Link from "next/link";

const DownloadAndroidButton = () => {
	return (
		<Link
			href='https://play.google.com/store/apps/details?id=com.bloocode.jollypodcast'
			target='_blank'
			className='text-black-200 cursor-pointer bg-white py-2 sm:py-4 px-5 sm:px-8 gap-1 lg:gap-1.5 text-xxs lg:text-sm font-bold rounded-full shadow-xl hover:text-white hover:bg-black-100 group w-fit flex items-center z-10'
		>
			<Picture
				src={andriod}
				alt='abr logo'
				loading='eager'
				className='w-[30px] h-[32px] lg:w-[40px] lg:h-[42px]'
			/>
			<div className='text-start'>
				<h4 className='text-mxs lg:text-xs leading-3 tracking-wider text-black-200/70 group-hover:text-gray-500'>
					DOWNLOAD FOR FREE
				</h4>
				<h4 className='text-black-200 text-xs lg:text-xl font-semibold group-hover:text-gray-500'>
					Google Playstore
				</h4>
			</div>
		</Link>
	);
};

export default DownloadAndroidButton;
