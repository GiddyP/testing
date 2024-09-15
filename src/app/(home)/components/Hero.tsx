"use client";
import DownloadAndroidButton from "@/components/button/DownloadAndroidButton";
import DownloadIosButton from "@/components/button/DownloadIosButton";
import Picture from "@/components/picture/Index";
import { JollyCastLogo, JollyCastLogo2 } from "@/components/reusables";
import AnimatedText1 from "@/components/text/AnimatedText1";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { hero_img, hero_img_2 } from "../../../../public/dev_images";
import { Modal } from "@/components/Modals";
import { PrivacyPolicy, TermsAndCondition } from "@/components/utils/constants";
import { useRouter, useSearchParams } from "next/navigation";

const Hero = () => {
	const [baseUrl, setBaseUrl] = useState("");
	const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
	const [isTermsModalOpen, setTermsModalOpen] = useState(false);
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const currentYear = new Date().getFullYear();
	const router = useRouter();

	useEffect(() => {
		if (search === "policy") {
			setPrivacyModalOpen(true);
		} else if (search === "terms") {
			setTermsModalOpen(true);
		} else {
			setPrivacyModalOpen(false);
			setTermsModalOpen(false);
		}
	}, [search]);
	const footerLinks = [
		{
			onclick: () => setPrivacyModalOpen(true),
			label: "Privacy Policy",
		},
		{ onclick: () => setTermsModalOpen(true), label: "Terms of Use" },
	];

	const handlePrivacyModalClose = () => {
		setPrivacyModalOpen(false);
		router.push("/");
	};

	const handleTermsModalClose = () => {
		setTermsModalOpen(false);
		router.push("/");
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			setBaseUrl(`${window.location.protocol}//${window.location.host}`);
		}
	}, []);
	return (
		<>
			<div className='pt-8 gap-8 lg:gap-0 px-2 lg:px-20 grid bg-bg2-200 lg:flex flex-col bg-cover bg-center h-screen relative bg-no-repeat'>
				<Picture
					src={hero_img}
					alt='logo-image'
					loading='eager'
					className={`w-full h-full object-cover top-0 right-0 absolute invisible sm:visible`}
				/>
				<Picture
					src={hero_img_2}
					alt='logo-image'
					loading='eager'
					className={`w-full h-full object-cover top-0 right-0 absolute sm:invisible`}
				/>
				<JollyCastLogo2 />
				<JollyCastLogo />
				<div className='max-w-[650px] mt-14 lg:mt-32 space-y-4 lg:space-y-12 z-10'>
					<div className='space-y-4 lg:space-y-8 text-center lg:text-start w-full'>
						<div className='text-black-200 text-4xl font-extrabold xl:text-7xl lg:leading-[4rem] space-y-4 lg:space-y-5'>
							<span className='inline-block'>Enjoy access to</span>
							<span className='text-primary-100 inline-block'>
								Unlimited Podcast
							</span>
							<span className='inline-block'>Worldwide</span>
						</div>

						<h3 className='text-lg lg:text-2xl text-center lg:text-start text-black-100 lg:text-black-200 px-1 rounded-sm font-medium w-fit mx-auto lg:mx-0'>
							Listen, learn, enjoy; anywhere, anytime!
						</h3>
					</div>

					<div className='flex gap-3 justify-center sm:justify-start flex-wrap lg:py-3'>
						<DownloadAndroidButton />
						<DownloadIosButton />
					</div>
				</div>
				<div className='flex items-center gap-5 z-10 text-black-200 text-xs lg:text-lg leading-5 font-medium absolute bottom-6 right-3 bg-gray-100 rounded-3xl py-1 lg:py-2 px-4'>
					{footerLinks.map((link, index) => (
						<h4
							key={index}
							onClick={link.onclick}
							className='hover:text-black-500 transition cursor-pointer'
						>
							{link.label}
						</h4>
					))}
				</div>
				<span className='absolute bottom-0 right-3 bg-white px-1 text-xs sm:text-sm text-black-200'>
					Copyright © {currentYear}.{" "}
					<Link href={baseUrl} className='text-black-200'>
						{baseUrl.replace("https://", "").replace("http://", "")}
					</Link>
				</span>
			</div>
			{/* Privacy Policy Modal */}
			<Modal
				isOpen={isPrivacyModalOpen}
				onClose={handlePrivacyModalClose}
				title='Privacy Policy'
				content={<PrivacyPolicy />}
			/>
			<Modal
				isOpen={isTermsModalOpen}
				onClose={handleTermsModalClose}
				title='Terms of Use'
				content={<TermsAndCondition />}
			/>
		</>
	);
};

export default Hero;
