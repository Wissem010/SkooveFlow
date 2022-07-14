import React from 'react';
import {render} from '@testing-library/react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {expirementReducer} from '../redux/slices/expirementSlice';
import {selectionReducer} from '../redux/slices/selectionSlice';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        expirementReducer: expirementReducer,
        selectionReducer: selectionReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }

  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
