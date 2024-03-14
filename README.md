# Soundground NestJS Service

Soundground is a web application similar to SoundCloud, built using the NestJS framework and other modern technologies. It allows users to upload, share, and listen to audio tracks. The backend service, written in NestJS, handles the core functionality and interactions with the database.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, scalable, and maintainable server-side applications.
- **TypeORM**: An Object-Relational Mapping (ORM) library for TypeScript and JavaScript, used for interacting with the database.
- **PostgreSQL**: The open-source relational database management system used for storing and retrieving data.
- **Passport.js**: Authentication middleware for Node.js, used for user authentication and authorization.
- **Jest**: A JavaScript testing framework, used for writing and running unit and integration tests.
- **nestjs-library-crud**: Automatically generates CRUD routes of a controller for given TypeORM entity.


## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up the environment variables (e.g., database credentials)
4. Start the development server: `npm run start:dev`

## Features

- User authentication and authorization
- Upload and stream audio tracks
- Create and manage playlists
- Comment on tracks
- Search and browse tracks and playlists

## Project Structure

- `src/app.module.ts`: The main module that imports and configures other modules and services.
- `src/audio/audio.module.ts`: The module responsible for handling audio-related functionality.
- `src/controller/track.controller.ts`: The controller that handles track-related HTTP requests.
- `src/service/track.service.ts`: The service that contains the business logic for track operations.
- `src/entities/`: Contains the TypeORM entity classes that represent database tables.

## Generated endpoints
CRUD endpoints:

- GET /tracks - retrieves a list of users with pagination
- GET /tracks/:id - retrieves a single user by ID
- POST /tracks - creates single or multiple users
- PATCH /tracks/:id - updates an existing user by ID
- DELETE /tracks/:id - deletes an existing user by ID
- PUT /tracks/:id - upserts (update or create) an existing user by ID
- POST /tracks/search - retrieves a list of users based on complex search criteria
- POST /tracks/:id/recover - recovers a soft deleted user by ID

## Contributions
Contributions are welcome!

