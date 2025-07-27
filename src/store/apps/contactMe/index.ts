import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc } from 'firebase/firestore';
import { db, emailjs, emailjsConfig } from '../../../firebase';

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

// Email service function
const sendEmail = async (formData: ContactFormData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    phone: formData.phone || 'Not provided',
    company: formData.company || 'Not provided',
    to_email: '12chiragprajapati12@gmail.com', // Your email address
    timestamp: new Date().toLocaleString(),
  };

  // For now, we'll use a simple email template
  // You'll need to set up EmailJS service and template
  try {
    const result = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams
    );
    return result;
  } catch (error) {
    // If EmailJS is not configured, we'll just log it and continue
    console.warn('EmailJS not configured properly:', error);
    return null;
  }
};

// Async thunk for submitting contact form
export const submitContactForm = createAsyncThunk(
  'contact/submitForm',
  async (formData: ContactFormData, { rejectWithValue }) => {
    try {
      // Save to Firebase
      const docRef = await addDoc(collection(db, 'contactMe'), {
        ...formData,
        timestamp: new Date(),
        status: 'new',
        emailSent: false, // Track if email was sent
      });

      // Send email notification
      let emailResult = null;
      try {
        emailResult = await sendEmail(formData);
        
        // Update Firebase document to mark email as sent
        if (emailResult) {
          // Note: You might want to update the document to mark email as sent
          // For now, we'll just log it
          console.log('Email sent successfully:', emailResult);
        }
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Don't fail the entire operation if email fails
      }

      return { 
        id: docRef.id, 
        ...formData, 
        emailSent: !!emailResult 
      };
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