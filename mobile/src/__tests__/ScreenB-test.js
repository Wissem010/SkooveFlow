import React from 'react';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import {renderWithProviders} from '../utils/testUtils';
import {
  resetScreenBState,
  rSubmitSelection,
  selectionReducer,
} from '../redux/slices/selectionSlice';
import ScreenB from '../screens/ScreenB';
import TouchableForwardArrowIcon from '../components/TouchableForwardArrowIcon';
import {RETRY_MESSAGE, SCREEN_D} from '../constants/strings';

//Mocking navigation functions
const mockNavigation = {
  navigate: jest.fn(),
  addListener: jest.fn(),
};

//Mocking redux functions
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockStore = {
  selectionReducer,
};
const useSelectorMock = reactRedux.useSelector;
const useDispatchMock = reactRedux.useDispatch;
//Initializing mocks
beforeEach(() => {
  useDispatchMock.mockImplementation(() => () => {});
  useSelectorMock.mockImplementation(selector => selector(mockStore));
});
afterEach(() => {
  useDispatchMock.mockClear();
  useSelectorMock.mockClear();
});

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
      type: rSubmitSelection.fulfilled,
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
test('render screenB with providers correctly', () => {
  const tree = renderWithProviders(
    <ScreenB navigation={mockNavigation} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


