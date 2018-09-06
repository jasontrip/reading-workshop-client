import userReducer from '../user';
import {
  setUserData,
  clearUserData,
  updateStudentSuccess,
  createStudentSuccess,
  deleteStudentSuccess,
  updateWorkshopSuccess,
  createWorkshopSuccess,
  deleteWorkshopSuccess,
} from '../../actions/user';

describe('setUserData', () => {
  it('Should set the user data and loggedIn as true', () => {
    let state = {
      students: [],
      workshops: null,
      loggedIn: false,
    };
    const user = { students: [{ firstName: 'testFirst' }] };
    state = userReducer(state, setUserData(user));
    expect(state.workshops).toEqual(null);
    expect(state.students[0].firstName).toEqual(user.students[0].firstName);
    expect(state.loggedIn).toEqual(true);
  });
});

describe('clearUserData', () => {
  it('Should clear user data and set loggedIn to false', () => {
    let state = {
      students: [{ firstName: 'testFirst' }],
      workshops: [{ book: 'testBook' }],
      loggedIn: true,
    };
    state = userReducer(state, clearUserData());
    expect(state.students).toEqual([]);
    expect(state.workshops).toEqual([]);
    expect(state.loggedIn).toEqual(false);
  });
});

describe('createStudentSuccess', () => {
  it('Should insert a new student into state', () => {
    let state = {
      students: [],
      workshops: null,
      loggedIn: false,
    };
    const newStudent = { firstName: 'testFirst' };
    state = userReducer(state, createStudentSuccess(newStudent));
    expect(state.students[0].firstName).toEqual(newStudent.firstName);
  });
});

describe('updateStudentSuccess', () => {
  it('Should update a student', () => {
    let state = {
      students: [
        {
          _id: 'testId1234',
          firstName: 'testFirst',
          lastName: 'testLast',
        },
      ],
      workshops: null,
      loggedIn: false,
    };
    const updatedStudent = {
      _id: 'testId1234',
      firstName: 'testFirstChange',
      lastName: 'testLastChange',
    };
    state = userReducer(state, updateStudentSuccess(updatedStudent));
    const student = state.students.find(s => s._id === updatedStudent._id);
    expect(student._id).toEqual(updatedStudent._id);
    expect(student.firstName).toEqual(updatedStudent.firstName);
    expect(student.lastName).toEqual(updatedStudent.lastName);
  });
});

describe('deleteStudentSuccess', () => {
  it('Should delete the student', () => {
    const _id = 'testId1234';
    let state = {
      students: [
        {
          _id,
          firstName: 'testFirst',
          lastName: 'testLast',
        },
      ],
      workshops: null,
      loggedIn: false,
    };
    state = userReducer(state, deleteStudentSuccess(_id));
    const student = state.students.filter(s => s._id === _id);
    expect(student).toEqual([]);
  });
});

describe('updateWorkshopSuccess', () => {
  it('Should update a workshop', () => {
    let state = {
      workshops: [
        {
          _id: 'testId1234',
          book: 'testBook',
          pages: 'testPages',
        },
      ],
      students: null,
      loggedIn: false,
    };
    const updatedWorkshop = {
      _id: 'testId1234',
      book: 'testBookChange',
      pages: 'testPagesChange',
    };
    state = userReducer(state, updateWorkshopSuccess(updatedWorkshop));
    const workshop = state.workshops.find(w => w._id === updatedWorkshop._id);
    expect(workshop._id).toEqual(updatedWorkshop._id);
    expect(workshop.firstName).toEqual(updatedWorkshop.firstName);
    expect(workshop.lastName).toEqual(updatedWorkshop.lastName);
  });
});

describe('createWorkshopSuccess', () => {
  it('Should insert a new workshop into state', () => {
    let state = {
      students: [],
      workshops: [],
      loggedIn: false,
    };
    const newWorkshop = { book: 'testBook' };
    state = userReducer(state, createWorkshopSuccess(newWorkshop));
    expect(state.workshops[0].book).toEqual(newWorkshop.book);
  });
});

describe('deleteWorkshopSuccess', () => {
  it('Should delete the workshop', () => {
    const _id = 'testId1234';
    let state = {
      workshops: [
        {
          _id,
          book: 'testBook',
          pages: 'testPages',
        },
      ],
      students: null,
      loggedIn: false,
    };
    state = userReducer(state, deleteWorkshopSuccess(_id));
    const workshop = state.workshops.filter(s => s._id === _id);
    expect(workshop).toEqual([]);
  });
});
