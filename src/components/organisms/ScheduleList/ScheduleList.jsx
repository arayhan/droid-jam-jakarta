import { DATA_SCHEDULE } from '@/datas/schedule.data';
import { ROUTES } from '@/routes';
import { useNavigate } from 'react-router-dom';

export const ScheduleList = () => {
	const navigate = useNavigate();

	const handleClick = (speaker) => {
		if (speaker.data) navigate(`${ROUTES.SPEAKER}/${speaker.data.key}`);
	};

	return (
		<div>
			{DATA_SCHEDULE.map((schedule) => (
				<div key={schedule.uuid} className="grid grid-cols-12 border-b last:border-none">
					<div className="col-span-5 p-4 text-right border-r sm:col-span-3 md:col-span-2">
						<div className="text-sm font-semibold lg:text-lg">{schedule.time}</div>
						<div className="text-xs">{schedule.duration} min(s)</div>
					</div>
					<div className="col-span-7 p-4 space-y-3 sm:col-span-9 md:col-span-10">
						<div>
							{schedule.title && (
								<div className="text-xs font-semibold md:text-sm">
									{schedule.agenda} {schedule.topics && ` - ${schedule.topics}`}
								</div>
							)}
							<div className="text-base font-semibold md:text-lg">{schedule.title || schedule.agenda}</div>
						</div>

						{schedule.speakers && (
							<div className="flex flex-wrap md:gap-2">
								{schedule.speakers.map((speaker) => (
									<div onClick={() => handleClick(speaker)} key={speaker.name}>
										{!speaker.data && <div className="text-sm">{speaker.name}</div>}
										{speaker.data && (
											<div
												className={`inline-flex items-center space-x-2 bg-gradient-primary ${
													speaker.data?.avatar ? 'pr-3' : 'px-3 py-1'
												}  rounded-full text-white cursor-pointer`}
											>
												{speaker.data?.avatar && (
													<img
														className="object-cover w-6 rounded-full aspect-1"
														src={speaker.data?.avatar}
														alt={speaker.name}
													/>
												)}
												<div>
													<div className="text-xs font-semibold">{speaker.name}</div>
												</div>
											</div>
										)}
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
};
