# React Portfolio

## Run locally

In the project directory, run:

- `npm install`
- `npm start`

## Contact form setup

The contact form was updated to support two ways of working:

1. **EmailJS** for direct form sending from the site
2. **Mailto fallback** to open the visitor's email app

Create a `.env.local` file in the project root by copying `.env.example`, then add either:

### Option 1: EmailJS

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Option 2: Mailto fallback

```env
REACT_APP_CONTACT_EMAIL=your@email.com
```

You can also provide both. If EmailJS is configured, it will be used first.

After changing environment variables, restart the dev server.

## Scripts

- `npm start` - start development server
- `npm run build` - build production bundle
- `npm test` - run tests
