import uiReducer from '../ui';
import { toggleLoginOrRegisterDialogOpen, loading } from '../../actions/ui';

describe('toggleLoginOrRegisterDialogOpen', () => {
  it('Should toggle the value', () => {
    let state = { showLoginOrRegisterDialog: false };
    state = uiReducer(state, toggleLoginOrRegisterDialogOpen(true));
    expect(state.showLoginOrRegisterDialog).toEqual(true);
    state = uiReducer(state, toggleLoginOrRegisterDialogOpen(false));
    expect(state.showLoginOrRegisterDialog).toEqual(false);
  });
});

describe('loading', () => {
  it('Should toggle the value', () => {
    let state = { loading: false };
    state = uiReducer(state, loading(true));
    expect(state.loading).toEqual(true);
    state = uiReducer(state, loading(false));
    expect(state.loading).toEqual(false);
  });
});
