import { ADD_STUDENT,
				 REMOVE_STUDENT,
				 FETCH_LOGIN_SUCCESS,
				 LOG_OUT,
				 TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN
				} from '../actions';

const initialState = {
	showLoginOrRegisterDialog: false
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
	} else if (action.type === TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN) {
		return Object.assign({}, state,
			{
				showLoginOrRegisterDialog: action.open
			}
		);
	} else if (action.type === FETCH_LOGIN_SUCCESS) {
		return Object.assign({}, state,
		{
			user: action.user
		});
	} else if (action.type === LOG_OUT) {
		return Object.assign({}, state,
		{
			user: null
		});
	}
	return state;
}








