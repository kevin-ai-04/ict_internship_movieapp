# Movie App — ICTAK Monsoon 2024 Internship

A full-stack movie catalog created during the Monsoon 2024 internship training at ICT Academy of Kerala. The project combines a React interface with an Express API and MongoDB database to demonstrate the core structure of a MERN application.

> [!NOTE]
> This is an older project retained for reference and historical context. It may use outdated dependencies and is not actively maintained.

## Project status

**Internship training project / portfolio archive.** The main application was developed in July 2024, with later commits primarily maintaining dependencies. It is preserved as a showcase of early full-stack development work.

The project demonstrates the central learning flow: displaying movie records, adding new records, and connecting a React frontend to a Node.js API and MongoDB database.

## Original purpose and context

This project was built as part of the **Monsoon 2024 internship training** offered by [ICT Academy of Kerala (ICTAK)](https://ictkerala.org/en/). It provided a practical opportunity to apply frontend, backend, and database concepts in one small application.

The technology choices reflect ICTAK's [2024 Full Stack Development (MERN) program](https://ictkerala.org/uploads/2024/08/IRP003-Program-Brochure.pdf), which covered React, Node.js, Express, MongoDB, npm, and full-stack JavaScript development.

The movie catalog was used to practice defining a data model, exposing API routes, submitting form data, and presenting stored records in a component-based interface.

## Project highlights

### Backend

- Connects to MongoDB through Mongoose.
- Defines movie records with a name, director, category, and release year.
- Returns all movie records with `GET /movies`.
- Creates a movie record with `POST /newmovie`.
- Deletes a movie record by ID with `DELETE /movieremoval/:id`.
- Accepts JSON requests and enables CORS.
- Loads the database connection string from a local environment file.

### Frontend

- Provides separate routes for the movie list (`/`) and add form (`/add`).
- Fetches movie records from the API and presents them in a Material UI table.
- Collects and submits movie details with a React form.
- Deletes movie records from the table.
- Uses React Router for navigation between views.
- Uses Axios for frontend-to-backend communication.

### Current scope

- Viewing and adding movies form the main implemented learning flow.
- The Edit button represents a possible next step and is not connected to an update route.


## Installation and setup

This setup reflects the repository's current structure and has not recently been verified end to end. The current Vite dependency requires Node.js 18 or newer.

### Prerequisites

- Node.js 18 or newer and npm
- A local MongoDB instance or MongoDB Atlas deployment

### 1. Start the backend

```bash
cd backend
npm install
cp .env.example .env
```

Set `MONGODB_URI` in `.env` to your MongoDB connection string. The credential previously committed to this repository has been rotated; the current version uses environment-based configuration.

The backend has no `start` script, so run its entry point directly:

```bash
node index.js
```

The API listens on `http://localhost:4000`.

### 2. Start the frontend

In a second terminal, from the repository root:

```bash
cd frontend
npm install
npm run dev
```

Vite prints the local development URL when it starts. The frontend expects the API at `http://localhost:4000`.

## Usage

Once both services are running:

1. Open the URL printed by Vite.
2. Select **View** to open the movie table.
3. Select **Add** to open the movie form.
4. Enter the movie name, director, category, and release year.
5. Select **Send Data** to save the record through the backend API.
6. Use **Delete** in the movie table to remove a record.

## Project structure

```text
.
├── backend/
│   ├── .env.example           # Example MongoDB configuration
│   ├── connection.js          # Mongoose connection
│   ├── index.js               # Express server and API routes
│   ├── model/movieData.js     # Movie schema and model
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Add.jsx        # Add-movie form
    │   │   ├── Navbar.jsx     # Navigation bar
    │   │   └── Records.jsx    # Movie table and action controls
    │   ├── App.jsx            # Client-side routes
    │   └── main.jsx           # React entry point
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Technologies used

- React 18 and React DOM
- React Router
- Vite 5
- Axios
- Material UI
- MUI X Data Grid and Bootstrap (included as dependencies but not used by the current source)
- Node.js and Express 4
- MongoDB and Mongoose 8
- CORS and dotenv

## Known limitations

This repository preserves the project close to its original training state:

- Editing movies is represented in the interface but is not implemented.
- Form validation is limited to the visual required-field indicators.
- The frontend API URL and backend port are fixed to local development values.
- Automated tests and deployment configuration are not included.

## Skills practiced

This project provided hands-on practice with:

- Organizing a frontend and backend as separate application layers.
- Building React components, forms, navigation, and tabular views.
- Creating Express routes for common data operations.
- Modeling and storing documents with Mongoose and MongoDB.
- Connecting the client and server with Axios.
- Managing local configuration through environment variables.

## Maintenance and archival notice

This repository is preserved as a portfolio record of the Monsoon 2024 internship training. It is not under active feature development, but remains available as a reference for the concepts and technologies practiced during the program.

## License

This project is available under the [MIT License](LICENSE).
