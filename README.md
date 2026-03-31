# University Course Management Interface

## Overview

The University Course Management Interface is a frontend web application designed for university supervisors to efficiently manage the course catalog. The system integrates with a RESTful API to perform full CRUD (Create, Read, Update, Delete) operations on courses.

This application provides a clean, professional, and user-friendly interface that ensures seamless interaction with backend services while maintaining proper authentication and access control.

---

## Features

### Authentication

* Secure login system for supervisors
* Protected routes to prevent unauthorized access
* Session handling for authenticated users

### Course Management (CRUD)

* Create a new course using a structured form
* View all courses in a dashboard/list format
* View detailed information for a specific course
* Edit and update existing course details
* Delete courses with confirmation prompts

### User Experience

* Clean and professional UI design
* Responsive layout for different screen sizes
* Loading indicators for API calls
* Success and error notifications for user actions

---

## Technologies Used

* React (Frontend framework)
* React Router (Navigation)
* Axios (API requests)
* Tailwind CSS (Styling)
* React Query (Data fetching and caching)

---

## Project Structure

```
src/
│
├── components/        # Reusable UI components
├── pages/            # Application pages (Login, Dashboard, Course Details)
├── services/         # API integration and request handling
├── hooks/            # Custom React hooks
├── context/          # Authentication context
├── assets/           # Static files
└── App.jsx           # Main application component
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js (v16 or higher)
* npm or yarn

---

### Installation

1. Clone the repository:

```
git clone https://github.com/Cynthy15/University-Course-Management-Interface.git
```

2. Navigate to the project directory:

```
cd University-Course-Management-Interface
```

3. Install dependencies:

```
npm install
```

---

### Running the Application

Start the development server:

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Authentication Credentials

Use the following test credentials to log in:

```
Email: admin@example.com
Password: adminpassword123
```

---

## API Integration

This project uses the provided RESTful API as documented in the Swagger documentation.

Ensure:

* Correct API base URL is configured
* Endpoints match the documentation
* Authorization headers are included where required

---

## Deployment

To build the project for production:

```
npm run build
```

It is deployed using platform:

* Vercel

  live demo:https://university-course-management-interf-ashen.vercel.app/

---

## GitHub Repository Requirements

* Minimum of 10 commits
* Clear commit messages
* Organized file structure

---

## Future Improvements

* Role-based access control
* Pagination and filtering for courses
* Search functionality
* Dark mode support
* Improved error handling

---

## Author

Frontend Developer: Cynthia Iradukunda

---

## License

This project is for academic purposes.
