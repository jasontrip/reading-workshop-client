import { ADD_STUDENT,
				 REMOVE_STUDENT,
				 USER_DATA_REQUEST,
				 USER_DATA_SUCCESS,
				 SET_USER_DATA,
				 CLEAR_USER_DATA,
				 TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN,
				 UPDATE_STUDENT_REQUEST,
				 UPDATE_STUDENT_SUCCESS,
				 CREATE_STUDENT_REQUEST,
				 CREATE_STUDENT_SUCCESS,
				} from '../actions';

const initialState = {
	showLoginOrRegisterDialog: false,
	user: null,
	loading: false
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
				students: [...state.students, newStudent]
			}
		);
	} else if (action.type === REMOVE_STUDENT) {
		return Object.assign({}, state,
			{
				roster: state.roster
					.filter(student => student._id !== action.id)
			}
		);
	} else if (action.type === TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN) {
		return Object.assign({}, state,
			{
				showLoginOrRegisterDialog: action.open
			}
		);
	} else if (action.type === SET_USER_DATA) {
		return Object.assign({}, state,
			{
				user: action.user
			}
		);
	} else if (action.type === USER_DATA_REQUEST) {
		return Object.assign({}, state,
			{
				loading: true
			}
		);
	} else if (action.type === USER_DATA_SUCCESS) {
		return Object.assign({}, state,
			{
				loading: false
			}
		);
	} else if (action.type === CLEAR_USER_DATA) {
		return Object.assign({}, state,
			{
				user: null
			}
		);
	} else if (action.type === UPDATE_STUDENT_REQUEST) {
		return Object.assign({}, state,
			{
				loading: true
			}
		);
	} else if (action.type === UPDATE_STUDENT_SUCCESS) {
		return Object.assign({}, state,
			{
				loading: false,
				user: Object.assign({}, { ...state.user }, {
					students: state.user.students.map(s => {
						if (s._id === action.student._id) {
							return action.student;
						}
						return s;
					}),
				})
			}
		) 
	} else if (action.type === CREATE_STUDENT_REQUEST) {
		return Object.assign({}, state,
			{
				loading: true
			}
		);
	} else if (action.type === CREATE_STUDENT_SUCCESS) {
		return Object.assign({}, state,
			{
				loading: false,
				students: Object.assign([], [ ...state.user.students, action.student ])
			}
		);
	}

	return state;
}








