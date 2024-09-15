import Link from "next/link";
import Picture from "../picture/Index";
import { hero_img, logo, logo_2 } from "../../../public/dev_images";

interface JollyCastLogoProps {
	imageClassName?: string;
}

export const JollyCastLogo = ({ imageClassName }: JollyCastLogoProps) => {
	return (
		<Link
			href='/'
			className='hover:animate-pulse transition w-[100px] lg:w-[120px] absolute right-4 sm:right-12 top-3 sm:top-6'
		>
			<Picture
				src={logo}
				alt='logo-image'
				loading='eager'
				className={`w-[100px] h-[40px] lg:w-[120px] lg:h-[55px] object-contain ${imageClassName} relative`}
			/>
		</Link>
	);
};

export const JollyCastLogo2 = ({ imageClassName }: JollyCastLogoProps) => {
	return (
		<Link
			href='/'
			className='hover:animate-pulse transition w-[40px] lg:w-[60px] absolute left-4 sm:left-12 top-3 sm:top-6'
		>
			<Picture
				src={logo_2}
				alt='logo-image'
				loading='eager'
				className={`object-contain ${imageClassName} relative`}
			/>
		</Link>
	);
};
