import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './apps/contactMe';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['contact/submitForm/fulfilled'],
        ignoredPaths: ['contact.timestamp'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;