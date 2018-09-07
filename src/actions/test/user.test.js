import {
  SET_USER_DATA, setUserData,
  USER_DATA_SUCCESS, userDataSuccess,
  CLEAR_USER_DATA, clearUserData,
  LOGIN_FAIL, loginFail,
  UPDATE_STUDENT_SUCCESS, updateStudentSuccess,
  CREATE_STUDENT_SUCCESS, createStudentSuccess,
  DELETE_STUDENT_SUCCESS, deleteStudentSuccess,
  UPDATE_WORKSHOP_SUCCESS, updateWorkshopSuccess,
  CREATE_WORKSHOP_SUCCESS, createWorkshopSuccess,
  DELETE_WORKSHOP_SUCCESS, deleteWorkshopSuccess,
  fetchUserData,
} from '../user';
import { loading } from '../ui';
import { BASE_URL } from '../../config';

describe('setUserData', () => {
  it('Should return the action', () => {
    const user = { username: 'testUsername' };
    const action = setUserData(user);
    expect(action.user.username).toEqual(user.username);
    expect(action.type).toEqual(SET_USER_DATA);
  });
});

describe('userDataSuccess', () => {
  it('Should return the action', () => {
    const action = userDataSuccess();
    expect(action.type).toEqual(USER_DATA_SUCCESS);
  });
});

describe('clearUserData', () => {
  it('Should return the action', () => {
    const error = 'testError';
    const action = clearUserData(error);
    expect(action.error).toEqual(error);
    expect(action.type).toEqual(CLEAR_USER_DATA);
  });
});

describe('loginFail', () => {
  it('Should return the action', () => {
    const error = 'testError';
    const action = loginFail(error);
    expect(action.error).toEqual(error);
    expect(action.type).toEqual(LOGIN_FAIL);
  });
});

describe('updateStudentSuccess', () => {
  it('Should return the action', () => {
    const student = { firstName: 'testFirst' };
    const action = updateStudentSuccess(student);
    expect(action.student.firstName).toEqual(student.firstName);
    expect(action.type).toEqual(UPDATE_STUDENT_SUCCESS);
  });
});

describe('createStudentSuccess', () => {
  it('Should return the action', () => {
    const student = { firstName: 'testFirst' };
    const action = createStudentSuccess(student);
    expect(action.student.firstName).toEqual(student.firstName);
    expect(action.type).toEqual(CREATE_STUDENT_SUCCESS);
  });
});

describe('deleteStudentSuccess', () => {
  it('Should return the action', () => {
    const _id = 'testId1234';
    const action = deleteStudentSuccess(_id);
    expect(action._id).toEqual(_id);
    expect(action.type).toEqual(DELETE_STUDENT_SUCCESS);
  });
});

describe('updateWorkshopSuccess', () => {
  it('Should return the action', () => {
    const workshop = { book: 'testBook' };
    const action = updateWorkshopSuccess(workshop);
    expect(action.workshop.book).toEqual(workshop.book);
    expect(action.type).toEqual(UPDATE_WORKSHOP_SUCCESS);
  });
});

describe('createWorkshopSuccess', () => {
  it('Should return the action', () => {
    const workshop = { book: 'book' };
    const action = createWorkshopSuccess(workshop);
    expect(action.workshop.book).toEqual(workshop.book);
    expect(action.type).toEqual(CREATE_WORKSHOP_SUCCESS);
  });
});

describe('deleteWorkshopSuccess', () => {
  it('Should return the action', () => {
    const _id = 'testId1234';
    const action = deleteWorkshopSuccess(_id);
    expect(action._id).toEqual(_id);
    expect(action.type).toEqual(DELETE_WORKSHOP_SUCCESS);
  });
});

describe('fetchUserData', () => {
  it('Should dispatch setUserData, userDataSuccess and loading', () => {
    const user = { username: 'test' };
    const authToken = '';

    global.localStorage = jest.fn(() => {});
    localStorage.getItem = jest.fn(() => authToken);

    const mockRes = {
      ok: true,
      json() {
        return user;
      },
    };

    global.fetch = jest.fn(() => Promise.resolve(mockRes));

    const dispatch = jest.fn();

    return fetchUserData()(dispatch)
      .then(() => {
        expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/users`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        expect(dispatch).toHaveBeenCalledWith(setUserData(user));
        expect(dispatch).toHaveBeenCalledWith(userDataSuccess());
        expect(dispatch).toHaveBeenCalledWith(loading(false));
      });
  });
});
