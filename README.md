# Candidate Search Application

This project is a **React + TypeScript application** that allows users to search GitHub profiles and manage a list of potential candidates. The application integrates with the **GitHub API** to fetch user data and provides a simple interface for selecting or rejecting candidates.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Screenshots](#screenshots)
- [License](#license)

---

## Description

The Candidate Search Application simplifies the process of exploring GitHub profiles by:
1. Fetching random GitHub user profiles.
2. Allowing users to accept or reject candidates.
3. Persisting selected candidates in local storage.

The app ensures an interactive, user-friendly experience while showcasing the power of React, TypeScript, and REST API integration.

---

## Features

- Display GitHub user information:
  - Name
  - Username
  - Location
  - Avatar
  - Email
  - Profile URL
  - Company
- Accept or reject candidates.
- Save accepted candidates to a local list.
- View previously saved candidates.
- Responsive design for seamless use on all devices.

---

## Technologies Used

- **Frontend**: React, TypeScript, CSS
- **API**: GitHub REST API
- **Tooling**: Vite
- **State Management**: React useState and useEffect
- **Local Storage**: For saving selected candidates

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org) (v16 or later)
- [Git](https://git-scm.com/)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your GitHub Personal Access Token:
   ```env
   VITE_GITHUB_TOKEN=your_personal_access_token
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

---

## Usage

### Candidate Search Page
1. When the page loads, it displays a random GitHub user profile.
2. Use the **"+"** button to save the candidate to the list.
3. Use the **"-"** button to skip the candidate.

### Saved Candidates Page
1. View all previously saved candidates.
2. Delete unwanted candidates from the list.

---

## API Reference

### GitHub API
The application integrates with the GitHub API to fetch user profiles. Refer to the [GitHub REST API Documentation](https://docs.github.com/en/rest).

- **Endpoint**: `/users?since=<number>`
  - Fetches a list of public GitHub users starting after a specific user ID.

- **Endpoint**: `/users/<username>`
  - Fetches detailed information about a specific GitHub user.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
