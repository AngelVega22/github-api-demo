# Backend Project with Nest.js and Frontend Project with Angular

This repository contains two projects: a backend project built with Nest.js and a frontend project built with Angular. The backend project uses a GitHub token in the environment variables (.env) to consume the GitHub API.

## Prerequisites

Make sure you have the following prerequisites installed on your system:

1. **Node.js:** Download and install Node.js from [nodejs.org](https://nodejs.org/).

## Configuration

### Backend (Nest.js)

1. **Create a `.env` file**: In the backend project directory (`backend/`), create a `.env` file and define the environment variable `GITHUB_TOKEN` with your GitHub personal access token. Example:

   ```env
   GITHUB_TOKEN= YOUR-GITHUB-TOKEN
   ```

## Backend (Nest.js)

#### Install Dependencies
1. Change to the backend project directory:
   ```bash
   cd backend
   ```
2. Install the project dependencies by running the following command:
   ```bash
   npm i
   ```
#### Start the Server

1. Start the backend server with the following command:

   ```bash
   npm run start:dev
   ```
## FrontEnd (Angular)

#### Install Dependencies
1. Change to the backend project directory:
   ```bash
   cd frontend
   ```
2. Install the project dependencies by running the following command:
   ```bash
   npm i
   ```
#### Start the Application

1. Start the frontend application with the following command:

   ```bash
   npm start
   ```
