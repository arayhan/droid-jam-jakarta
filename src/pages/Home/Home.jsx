import React from 'react';
import { ImageLogo, ImageBannerSky } from '@/images';
import { DATA_EVENT } from '@/datas';
import { ImTicket } from 'react-icons/im';

export const Home = () => {
	return (
		<div className="relative bg-black">
			<div className="absolute left-0 top-0 w-full h-full flex items-end justify-center">
				<img className="w-10/12" src={ImageBannerSky} alt="banner skye" />
			</div>
			<div className="container max-w-screen-xl">
				<div className="relative flex items-center justify-center min-h-screen">
					<div className="relative flex flex-col items-center justify-center">
						<div>
							<img className="w-48" src={ImageLogo} alt="droid jam logo" />
						</div>

						<div className="space-y-6 mb-12">
							<div className="space-y-3">
								<div className="text-[2.5rem] font-semibold text-center text-white ">
									Droidjam{' '}
									<span
										className="bg-gradient-to-br from-green-500 to-yellow-500 bg-clip-text"
										style={{ WebkitTextFillColor: 'transparent' }}
									>
										Indonesia
									</span>{' '}
									2022
								</div>

								<div className="text-[1.6rem] text-center text-white">
									Droidjam brings together thousands of Android developers globally for the largest virtual weekend of
									community-led technical learning and a shared passion for Android technologies.
								</div>
							</div>

							<div className="space-y-1 text-sm text-center text-white">
								<div>15th October 2022</div>
								<div>
									at <span className="font-semibold">Indosat Auditorium</span>{' '}
									<a
										className="text-blue-500 transition-all hover:text-white"
										href={DATA_EVENT.LOCATION.URL}
										rel="noreferrer"
										target="_blank"
									>
										View Map
									</a>
								</div>
							</div>

							<div className="text-sm text-center text-white">
								Our tickets are selling fast so don't miss. Conference will start in
							</div>

							<div className="flex w-full space-x-4">
								<div className="flex-1 p-5 space-y-1 text-center text-white bg-gray-500 border border-gray-700 border-dashed rounded-md bg-opacity-20">
									<div className="text-4xl font-bold">19</div>
									<div className="text-sm">days</div>
								</div>
								<div className="flex-1 p-5 space-y-1 text-center text-white bg-gray-500 border border-gray-700 border-dashed rounded-md bg-opacity-20">
									<div className="text-4xl font-bold">19</div>
									<div className="text-sm">days</div>
								</div>
								<div className="flex-1 p-5 space-y-1 text-center text-white bg-gray-500 border border-gray-700 border-dashed rounded-md bg-opacity-20">
									<div className="text-4xl font-bold">19</div>
									<div className="text-sm">days</div>
								</div>
								<div className="flex-1 p-5 space-y-1 text-center text-white bg-gray-500 border border-gray-700 border-dashed rounded-md bg-opacity-20">
									<div className="text-4xl font-bold">19</div>
									<div className="text-sm">days</div>
								</div>
							</div>
						</div>

						<a
							className="flex text-sm items-center space-x-3 px-6 py-3 font-semibold text-center transition-all bg-white hover:bg-gray-200 rounded-md text-black"
							href="https://www.loket.com/event/droidjam-android-conference-jakarta-2022_DgT1"
							target="_blank"
							rel="noreferrer"
						>
							<ImTicket />
							<span>Get the Ticket</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
