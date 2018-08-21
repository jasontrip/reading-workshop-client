import { ADD_STUDENT,
				 REMOVE_STUDENT,
				 SET_USER_DATA,
				 CLEAR_USER_DATA,
				 UPDATE_STUDENT_SUCCESS,
				 CREATE_STUDENT_SUCCESS,
				 DELETE_STUDENT_SUCCESS,
				 UPDATE_WORKSHOP_SUCCESS,
				 CREATE_WORKSHOP_SUCCESS,
				 DELETE_WORKSHOP_SUCCESS,
				} from '../actions/user';

const initialState = null;

export const userReducer = (state=initialState, action) => {
	if (action.type === ADD_STUDENT) {
		const newStudent = {
			_id: (state.roster.length + 1),
			firstName: action.firstName,
			lastName: action.lastName
		}
		return Object.assign({}, state, {
				students: [...state.students, newStudent]
		});
	} else if (action.type === REMOVE_STUDENT) {
		return Object.assign({}, state, {
			roster: state.roster
				.filter(student => student._id !== action.id)
		});
	} else if (action.type === SET_USER_DATA) {
		return Object.assign({}, state, { ...action.user });
	} else if (action.type === CLEAR_USER_DATA) {
		return Object.assign({}, state, {
				user: null
		});
	} else if (action.type === CREATE_STUDENT_SUCCESS) {
		return Object.assign({}, state, {
			students: [ ...state.students, action.student ]
		});
	} else if (action.type === UPDATE_STUDENT_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			students: state.students.map(s => {
				if (s._id === action.student._id) {
					return action.student;
				}
				return s;
			}),
		});
	} else if (action.type === DELETE_STUDENT_SUCCESS) {
		return Object.assign({}, state, {
			students: state.students.filter(s => s._id !== action._id)
		});
	} else if (action.type === CREATE_WORKSHOP_SUCCESS) {
		return Object.assign({}, state, {
			workshops: [ ...state.workshops, action.workshop ]
		});
	} else if (action.type === UPDATE_WORKSHOP_SUCCESS) {
		return Object.assign({}, state, {
			workshops: state.workshops.map(s => {
				if (s._id === action.workshop._id) {
					return action.workshop;
				}
				return s;
			}),
		});
	} else if (action.type === DELETE_WORKSHOP_SUCCESS) {
		return Object.assign({}, state, {
			workshops: state.workshops.filter(s => s._id !== action._id)
		});
	}

	return state;
}








