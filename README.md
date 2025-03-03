# Project Europa Website

A space-themed website for Project Europa with contact form functionality integrated with Slack.

## Features

- Responsive design with space-themed UI
- Interactive contact form with modal confirmation
- Slack integration for receiving contact form submissions
- Animated background with stars and nebula effects

## Setup

1. Clone the repository
2. Set up the Slack Webhook URL:
   - Create a Slack App in your workspace
   - Enable Incoming Webhooks
   - Create a new webhook for your channel
   - Set the webhook URL as an environment variable named `SLACK_WEBHOOK_URL`

## Local Development

```bash
# Start a local server
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Environment Variables

For the contact form to work properly, you need to set up the following environment variable:

- `SLACK_WEBHOOK_URL`: Your Slack webhook URL for receiving messages

## Deployment

This site can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

When deploying, make sure to set the environment variables in your hosting provider's settings.

## File Structure

- `index.html` - Home page
- `contact.html` - Contact page with form
- `css/style.css` - All styles for the website
- `js/main.js` - JavaScript functionality
- `images/` - Image assets

## Browser Compatibility

Tested and working in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
