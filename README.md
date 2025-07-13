# ZEESH

Empowering Pakistani Women's Style. ZEESH is a modern e-commerce platform that celebrates the essence of Pakistani women through thoughtfully crafted clothing, merging tradition with contemporary fashion, and inspiring confidence and individuality.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

---

## About the Project

ZEESH is a full-stack e-commerce web application for a clothing brand, featuring:

- A modern React-based frontend for browsing, searching, and purchasing products.
- A robust Strapi backend for content management, product catalog, and order processing.
- Stripe integration for payment processing (currently in test mode).
- Newsletter subscription, category browsing, and order success flow.

---

## Tech Stack

**Frontend:**
- React 18 (bootstrapped with Create React App)
- React Router DOM
- Axios
- Styled Components
- SASS
- Material UI (MUI)
- React Icons

**Backend:**
- Strapi v4 (Node.js Headless CMS)
- SQLite (default, can be configured for MySQL/Postgres)
- Stripe (for payment processing)
- Strapi Plugins: Users & Permissions, i18n, Cloud

**Other:**
- Node.js (v18 or v20 required)
- NPM

---

## Project Structure

```
Project Z/
│
├── api/         # Strapi backend (Headless CMS, API, admin)
│   ├── config/
│   ├── src/
│   ├── public/
│   └── ... 
│
├── client/      # React frontend
│   ├── src/
│   ├── public/
│   └── ...
│
└── README.md    # (This file)
```

---

## Getting Started

### Prerequisites

- **Node.js**: v18.x or v20.x (Strapi v4 does NOT support Node.js v22+)
- **NPM**: v6 or higher

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/mirzaahsanali/zeesh.git
cd zeesh
```

#### 2. Install Backend (Strapi) dependencies

```bash
cd api
npm install
```

#### 3. Install Frontend (React) dependencies

```bash
cd ../client
npm install
```

---

### Running the Project

#### 1. Start the Strapi Backend

```bash
cd api
npm start
```
- The backend will run at [http://localhost:1337](http://localhost:1337) by default.
- The Strapi admin panel will be available at [http://localhost:1337/admin](http://localhost:1337/admin).

#### 2. Start the React Frontend

Open a new terminal window/tab:

```bash
cd client
npm start
```
- The frontend will run at [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

### Backend (`api/.env`)

Create a `.env` file in the `api` directory for sensitive configuration (example):

```
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
STRIPE_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:3000
```

### Frontend (`client/.env`)

Create a `.env` file in the `client` directory (example):

```
REACT_APP_DEV_URL=http://localhost:1337
REACT_APP_STRIPE_DEV_APP_KEY=your_stripe_publishable_key
```

---

## Deployment

- For backend deployment options, see the [Strapi deployment documentation](https://docs.strapi.io/dev-docs/deployment).
- For frontend deployment, see [Create React App deployment guide](https://facebook.github.io/create-react-app/docs/deployment).

---

## Contact

- **Email:** buyzeesh@gmail.com
- **Phone:** +92 303 7094963
- **Instagram:** [zeesh.clothing](https://www.instagram.com/zeesh.clothing)

---

## License

This project is licensed under the MIT License.

---

**Note:**  
- For payment integration, Stripe is currently in test mode. No real payment gateway is active.
- For any issues, please open an issue on this repository.

--- 
