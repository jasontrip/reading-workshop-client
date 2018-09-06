import {
  SET_USER_DATA,
  CLEAR_USER_DATA,
  UPDATE_STUDENT_SUCCESS,
  CREATE_STUDENT_SUCCESS,
  DELETE_STUDENT_SUCCESS,
  UPDATE_WORKSHOP_SUCCESS,
  CREATE_WORKSHOP_SUCCESS,
  DELETE_WORKSHOP_SUCCESS,
} from '../actions/user';

const initialState = {
  students: [],
  workshops: [],
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return Object.assign({}, state, {
        ...action.user,
        loggedIn: true,
      });
    case CLEAR_USER_DATA:
      return initialState;
    case CREATE_STUDENT_SUCCESS:
      return Object.assign({}, state, {
        students: [...state.students, action.student],
      });
    case UPDATE_STUDENT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        students: state.students.map((student) => {
          if (student._id === action.student._id) {
            return action.student;
          }
          return student;
        }),
      });
    case DELETE_STUDENT_SUCCESS:
      return Object.assign({}, state, {
        students: state.students.filter(s => s._id !== action._id),
      });
    case CREATE_WORKSHOP_SUCCESS:
      return Object.assign({}, state, {
        workshops: [...state.workshops, action.workshop],
      });
    case UPDATE_WORKSHOP_SUCCESS:
      return Object.assign({}, state, {
        workshops: state.workshops.map((s) => {
          if (s._id === action.workshop._id) {
            return action.workshop;
          }
          return s;
        }),
      });
    case DELETE_WORKSHOP_SUCCESS:
      return Object.assign({}, state, {
        workshops: state.workshops.filter(s => s._id !== action._id),
      });
    default:
      return state;
  }
};

export default userReducer;
