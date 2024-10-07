'use client';

import { setUser } from '@/redux/slices/authSlice';
import store from '@/redux/store';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';

export default function StateProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
