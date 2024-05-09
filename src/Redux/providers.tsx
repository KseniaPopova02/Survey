'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { IProviders } from './types';
import React from 'react';

export const Providers: React.FC<IProviders> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
