# Course Management API

A RESTful API for managing courses built with Node.js, Express, and MongoDB.

## Features

- CRUD operations for courses
- Advanced filtering, sorting, and pagination
- Search functionality
- Error handling

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Async Handler

## Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/course-management.git
   cd course-management
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the server
   ```
   npm start
   ```

## API Endpoints

- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get a specific course
- `POST /api/courses` - Create a new course
- `PATCH /api/courses/:id` - Update a course
- `DELETE /api/courses/:id` - Delete a course

## Deployment

This project is deployed on Vercel. Visit [https://your-project-name.vercel.app](https://your-project-name.vercel.app) to see it in action.

## License

MIT
