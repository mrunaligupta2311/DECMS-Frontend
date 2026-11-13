# DECMS Frontend

React + Vite frontend prototype for the Digital Evidence Chain Management System.

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite. For a production build:
```bash
npm run build
npm run preview
```

## Demo behaviour
This frontend is a standalone UI prototype. It uses seeded demo data and browser localStorage for interactive demonstrations. Authentication, OTP delivery, live video verification storage, evidence hashing, encrypted storage, audit immutability, and authorization must be implemented and enforced by the backend before real use.

## Suggested integration
Set `VITE_API_URL` to your backend base URL. Replace the mock functions in `src/services/mockApi.js` with real API calls. Never place database, JWT signing, Cloudinary secret, or other private credentials in frontend code.

## Structure
- `src/components/`: reusable components, each with its own JSX and CSS
- `src/layout/`: application shell, header, sidebar
- `src/pages/`: route-level screens
- `src/context/`: theme and app state
- `src/services/`: mock API layer
- `src/styles/`: global styles
