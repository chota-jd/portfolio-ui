import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
}

interface ContactState {
  isSubmitting: boolean;
  submitted: boolean;
  error: string | null;
}

const initialState: ContactState = {
  isSubmitting: false,
  submitted: false,
  error: null,
};

// Async thunk for submitting contact form
export const submitContactForm = createAsyncThunk(
  'contact/submitForm',
  async (formData: ContactFormData, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, 'contactMe'), {
        ...formData,
        timestamp: new Date(),
        status: 'new'
      });
      return { id: docRef.id, ...formData };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetForm: (state) => {
      state.submitted = false;
      state.error = null;
      state.isSubmitting = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.isSubmitting = false;
        state.submitted = true;
        state.error = null;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isSubmitting = false;
        state.submitted = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetForm, clearError } = contactSlice.actions;
export default contactSlice.reducer;