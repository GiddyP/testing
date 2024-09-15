import { ReactNode } from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	content: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, content }: ModalProps) => {
	if (!isOpen) return null;
	return (
		<div className='fixed inset-0 bg-black-100 bg-opacity-50 flex justify-center items-center z-50'>
			<div className='bg-white rounded-lg pt-5 pb-3 pl-5 pr-2 w-[90%] md:w-[800px]'>
				<div className='flex justify-between items-center border-b pb-2'>
					<h3 className='text-xl font-semibold text-primary-100'>{title}</h3>

					<IoIosCloseCircle
						className='text-primary-100 hover:text-primary-100 text-2xl transition hover:scale-125 cursor-pointer'
						onClick={onClose}
					/>
				</div>
				<div className='mt-2 overflow-y-auto scroll-smooth h-[60vh] pr-4 leading-7'>
					{content}
				</div>
			</div>
		</div>
	);
};
