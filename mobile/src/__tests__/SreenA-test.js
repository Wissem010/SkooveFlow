import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../components/Spinner';
import {REDIRECT_MESSAGE, SCREEN_B, SCREEN_D} from '../constants/strings';
import {
  expirementReducer,
  resetScreenAState,
  rFetchExpirements,
} from '../redux/slices/expirementSlice';

test('renders correctly', () => {
  const tree = renderer.create(<Spinner />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should return the fetchExpirement initial state', () => {
  expect(expirementReducer(undefined, {type: undefined})).toEqual({
    loading: false,
    message: '',
    err: false,
    nextScreen: '',
  });
});

test('should return the wanted state after dispatch resetScreenA action', () => {
  expect(expirementReducer(undefined, resetScreenAState)).toEqual({
    loading: false,
    message: '',
    err: false,
    nextScreen: '',
  });
});

describe('SELECTION SLICE TESTS', () => {
  it('should set loading true while action is pending', () => {
    const action = {type: rFetchExpirements.pending};
    const state = expirementReducer(
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
      type: rFetchExpirements.pending,
    };
    const state = expirementReducer(
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
      nextScreen: SCREEN_B,
    });
  });

  it('should set error true when action is rejected', () => {
    const action = {type: rFetchExpirements.rejected};
    const state = expirementReducer(
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
      message: REDIRECT_MESSAGE,
      err: true,
      nextScreen: SCREEN_D,
    });
  });
});
