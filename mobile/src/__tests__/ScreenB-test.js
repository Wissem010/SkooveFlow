import React from 'react';
import renderer from 'react-test-renderer';
import TouchableForwardArrowIcon from '../components/TouchableForwardArrowIcon';
import {RETRY_MESSAGE, SCREEN_D} from '../constants/strings';
import {
  resetScreenBState,
  rSubmitSelection,
  selectionReducer,
} from '../redux/slices/selectionSlice';

test('renders correctly', () => {
  const tree = renderer.create(<TouchableForwardArrowIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should return the selectionReducer initial state', () => {
  expect(selectionReducer(undefined, {type: undefined})).toEqual({
    loading: false,
    message: '',
    err: false,
    nextScreen: '',
  });
});

test('should return the wanted state after dispatch resetScreenB action', () => {
  expect(selectionReducer(undefined, resetScreenBState)).toEqual({
    loading: false,
    message: '',
    err: false,
    nextScreen: '',
  });
});

describe('SELECTION SLICE TESTS', () => {
  it('should set loading true while action is pending', () => {
    const action = {type: rSubmitSelection.pending};
    const state = selectionReducer(
      {
        loading: false,
        message: '',
        err: false,
        nextScreen: '',
      },
      action,
    );
    expect(state).toEqual({
      loading: true,
      message: '',
      err: false,
      nextScreen: '',
    });
  });

  it('should set correct screen when action is fulfilled', () => {
    const action = {
      type: rSubmitSelection.pending,
    };
    const state = selectionReducer(
      {
        loading: false,
        message: '',
        err: false,
        nextScreen: '',
      },
      action,
    );
    expect(state).toEqual({
      loading: false,
      message: '',
      err: false,
      nextScreen: SCREEN_D,
    });
  });

  it('should set error true when action is rejected', () => {
    const action = {type: rSubmitSelection.rejected};
    const state = selectionReducer(
      {
        loading: false,
        message: '',
        err: false,
        nextScreen: '',
      },
      action,
    );
    expect(state).toEqual({
      loading: false,
      message: RETRY_MESSAGE,
      err: true,
      nextScreen: '',
    });
  });
});
