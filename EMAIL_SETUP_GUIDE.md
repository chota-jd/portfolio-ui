# Email Setup Guide for Contact Form

This guide will help you set up email notifications for your contact form using EmailJS.

## 📧 EmailJS Setup

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Connect Your Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authorization process
5. Note down the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Company: {{company}}
Phone: {{phone}}
Subject: {{subject}}
Submitted: {{timestamp}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and note the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_abcdefghijk`)

### Step 5: Configure Environment Variables
1. Copy `.env.local.example` to `.env.local`
2. Fill in your actual values:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## 🔧 Testing the Setup

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check:
   - Firebase Firestore for the saved data
   - Your email inbox for the notification
   - Browser console for any errors

## 📊 What Data is Saved

When someone submits the contact form, the following data is saved to Firebase:

- **name**: Contact's full name
- **email**: Contact's email address
- **phone**: Contact's phone number (optional)
- **company**: Contact's company (optional)
- **subject**: Message subject
- **message**: Full message content
- **timestamp**: When the form was submitted
- **status**: Form status (default: "new")
- **emailSent**: Whether email notification was sent successfully

## 📧 Email Notification

You will receive an email at `12chiragprajapati12@gmail.com` with all the form details whenever someone submits the contact form.

## 🔍 Troubleshooting

### Email Not Sending
- Check your EmailJS service configuration
- Verify your template variables match the code
- Check browser console for JavaScript errors
- Ensure your EmailJS account is verified

### Firebase Not Saving
- Check your Firebase configuration
- Verify Firestore rules allow writes
- Check browser console for Firebase errors

### Environment Variables Not Working
- Ensure `.env.local` is in the project root
- Restart your development server after adding environment variables
- Variables must start with `NEXT_PUBLIC_` for client-side access

## 📝 Template Variables Available

Your EmailJS template can use these variables:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{phone}}` - Phone number (or "Not provided")
- `{{company}}` - Company name (or "Not provided")
- `{{to_email}}` - Your email (12chiragprajapati12@gmail.com)
- `{{timestamp}}` - Submission date/time

## 🔒 Security Notes

- EmailJS public keys are safe to expose in client-side code
- Never expose your EmailJS private key
- Firebase rules should be configured properly
- Consider adding rate limiting for production use