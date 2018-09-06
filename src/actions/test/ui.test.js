import {
  TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN, toggleLoginOrRegisterDialogOpen, LOADING, loading,
} from '../ui';

describe('reduce toggleLoginOrRegisterDialogOpen', () => {
  it('Should return the action', () => {
    const action = toggleLoginOrRegisterDialogOpen();
    expect(action.type).toEqual(TOGGLE_LOGIN_OR_REGISTER_DIALOG_OPEN);
  });
});

describe('reduce loading', () => {
  it('Should return the action', () => {
    const action = loading();
    expect(action.type).toEqual(LOADING);
  });
});
