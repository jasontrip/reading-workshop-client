import {ADD_STUDENT, REMOVE_STUDENT} from '../actions';

const initialState = {
	workshops:
	[
		{
			_id: 1234,
			sessionNumber: 1,
			date: '5/16/2018',
			book: 'The Pearl',
			pages: '5-10',
			notes: 'This session was ok. There were some distractions.',
			students: [
				{_id: 1, firstName: 'Theo', lastName: 'Williams'},
				{_id: 3, firstName: 'Vanessa', lastName: 'Skywalker'}
			]
		},
		{
			_id: 1235,
			sessionNumber: 2,
			date: '5/26/2018',
		 	book: 'Tale of Despereax',
		 	pages: '1-20',
		 	notes: 'This session was excellent.',
		 	students: [
			 	{_id: 4, firstName: 'Jason', lastName: 'Johnson'},
				{_id: 5, firstName: 'Jennifer', lastName: 'Jackson'}
			]
		},
		{
			_id: 1236,
			sessionNumber: 3,
			date: '5/21/2018',
		 	book: 'The Pearl',
		 	pages: '15-20',
		 	notes: 'This session was better.',
			students: [
				{_id: 1, firstName: 'Theo', lastName: 'Williams'},
				{_id: 3, firstName: 'Vanessa', lastName: 'Skywalker'}
			]
		},
		{
			_id: 1237,
			sessionNumber: 4,
			date: '5/26/2018',
		 	book: 'The Pearl',
		 	pages: '20-25',
		 	notes: 'This session was excellent.',
		 	students: [
		 		{_id: 2, firstName: 'Neo', lastName: 'Smith'},
		 		{_id: 4, firstName: 'Jason', lastName: 'Johnson'},
				{_id: 5, firstName: 'Jennifer', lastName: 'Jackson'}
		 	]
		}
	],
	roster:
	[
		{_id: 1, firstName: 'Theo', lastName: 'Williams'},
		{_id: 2, firstName: 'Neo', lastName: 'Smith'},
		{_id: 3, firstName: 'Vanessa', lastName: 'Skywalker'},
		{_id: 4, firstName: 'Jason', lastName: 'Johnson'},
		{_id: 5, firstName: 'Jennifer', lastName: 'Jackson'}
	]
}

export const readingWorkshopReducer = (state=initialState, action) => {
	if (action.type === ADD_STUDENT) {
		const newStudent = {
			_id: (state.roster.length + 1),
			firstName: action.firstName,
			lastName: action.lastName
		}
		return Object.assign({}, state,
			{
				roster: [...state.roster, newStudent]
			}
		);
	} else if (action.type === REMOVE_STUDENT) {
		return Object.assign({}, state,
			{
				roster: state.roster
					.filter(student => student._id !== action.id)
			}
		);
	}
	return state;
}








