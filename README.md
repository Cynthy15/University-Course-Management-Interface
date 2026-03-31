# University Course Management Interface

This is the frontend interface for the University Course Management system. Supervisors can log in and manage courses (Create, Read, Update, Delete) using a clean, accessible interface.

## Prerequisites
- Node.js (v16+)
- npm or yarn

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```

3. **Log In**
   - **Email:** admin@example.com
   - **Password:** adminpassword123

## Features Overview
- **Authentication**: A simulated login flow that uses test credentials and stores a JWT in `localStorage`.
- **Dashboard**: View all courses in a clear table format.
- **Create & Edit Course**: Simple, standard HTML forms with manual validation for title and course code.
- **Course Details**: Dedicated page to view course descriptions and credits.
- **Mock Fallback**: If the API is missing or returns 404s, the app gracefully falls back to using `localStorage` for mocking CRUD operations so that the interface remains functional for demonstration purposes.

## Built With
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast
