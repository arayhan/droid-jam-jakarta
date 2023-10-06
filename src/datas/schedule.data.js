import { v4 as uuidv4 } from 'uuid';
import { DATA_SPEAKER } from './speaker.data';

export const DATA_SCHEDULE = [
	{
		uuid: uuidv4(),
		time: '08.00 - 09.00',
		duration: '60',
		agenda: 'Audience Reception',
		title: null,
		pic: 'Event team',
		speakers: [],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '09.00 - 09.15',
		duration: '15',
		agenda: 'Keynote',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['sidiq-permana'].name,
				data: DATA_SPEAKER['sidiq-permana'],
			},
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '09.15 - 09.30',
		duration: '15',
		agenda: 'Keynote from Sinarmas',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: "Yonas Yasa",
				data: null,
			},
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '09.30 - 10.00',
		duration: '30',
		agenda: 'Juara Android',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['danang-juffry'].name,
				data: DATA_SPEAKER['danang-juffry'],
			},
			{
				name: DATA_SPEAKER['veronica-putri'].name,
				data: DATA_SPEAKER['veronica-putri'],
			},
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '10.00 - 10.30',
		duration: '30',
		agenda: 'Tech Talk: Android',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['aung-kyaw-paing'].name,
				data: DATA_SPEAKER['aung-kyaw-paing'],
			},
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '10.30 - 11.00',
		duration: '30',
		agenda: 'Tech Talk: Flutter (Online)',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['vivek-yadav'].name,
				data: DATA_SPEAKER['vivek-yadav'],
			},
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '11.00 - 11.30',
		duration: '30',
		agenda: 'Tech Talk: Android',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['esa-firman'].name,
				data: DATA_SPEAKER['esa-firman'],
			},
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '11.30 - 12.30',
		duration: '60',
		agenda: 'Break',
		title: null,
		pic: 'Event team',
		speakers: [],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '12.30 - 13.00',
		duration: '30',
		agenda: 'Tech Talk: Flutter',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['panji-gautama'].name,
				data: DATA_SPEAKER['panji-gautama'],
			}
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '13.00 - 13.30',
		duration: '30',
		agenda: 'Tech Talk: Android',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['saurabh-arora'].name,
				data: DATA_SPEAKER['saurabh-arora'],
			}
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '13.30 - 14.00',
		duration: '30',
		agenda: 'Tech Talk: Android',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['arif-faizin'].name,
				data: DATA_SPEAKER['arif-faizin'],
			}
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '14.00 - 14.30',
		duration: '30',
		agenda: 'Tech Talk: Android',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['andri-ginting'].name,
				data: DATA_SPEAKER['andri-ginting'],
			}
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '14.30 - 15.00',
		duration: '30',
		agenda: 'Tech Talk: Flutter',
		title: null,
		pic: 'Event team',
		speakers: [
			{
				name: DATA_SPEAKER['rifa-fauzi-komara'].name,
				data: DATA_SPEAKER['rifa-fauzi-komara'],
			}
		],
		organization: null,
	},
	{
		uuid: uuidv4(),
		time: '15.00 - 15.30',
		duration: '30',
		agenda: 'Android Fireside',
		title: null,
		pic: 'MC',
		speakers: [
			{
				name: 'All Speakers',
				data: null,
			},
		],
		organization: '',
	},
	{
		uuid: uuidv4(),
		time: '15.30 - 16.00',
		duration: '30',
		agenda: 'Flutter Fireside',
		title: null,
		pic: 'MC',
		speakers: [
			{
				name: 'All Speakers',
				data: null,
			},
		],
		organization: '',
	},
	{
		uuid: uuidv4(),
		time: '16.00 - 16.15',
		duration: '15',
		agenda: 'Closing & Networking',
		title: null,
		pic: 'MC',
		speakers: [],
		organization: '',
	},
];
