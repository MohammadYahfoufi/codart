# 📧 Nodemailer Setup Guide

## Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=your-contact-email@gmail.com
```

## Gmail Setup (Recommended)

### 1. Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification

### 2. Generate App Password
1. Go to Google Account → Security
2. Under "2-Step Verification", click "App passwords"
3. Select "Mail" and "Other (custom name)"
4. Enter "Codart Portfolio" as the name
5. Copy the generated 16-character password
6. Use this password in `EMAIL_PASS` (not your regular Gmail password)

### 3. Alternative Email Services

#### Outlook/Hotmail
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

#### Yahoo Mail
```env
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
```

#### Custom SMTP
```env
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
```

## Testing the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email for the message
5. Check the browser console for any errors

## Troubleshooting

### Common Issues:

1. **"Invalid login" error**
   - Make sure you're using an App Password, not your regular password
   - Verify 2FA is enabled on your Gmail account

2. **"Connection timeout" error**
   - Check your internet connection
   - Verify the SMTP settings are correct

3. **"Message not received"**
   - Check your spam folder
   - Verify the `CONTACT_EMAIL` is correct
   - Check the server logs for errors

### Security Notes:

- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords
- Consider using environment-specific configurations for production

## Production Deployment

For production deployment:

1. Set environment variables in your hosting platform
2. Use a dedicated email service like SendGrid, Mailgun, or AWS SES
3. Consider rate limiting to prevent spam
4. Add CAPTCHA for additional security

## Features Included:

- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Responsive design
- ✅ Email template with styling
- ✅ TypeScript support
- ✅ Error handling
