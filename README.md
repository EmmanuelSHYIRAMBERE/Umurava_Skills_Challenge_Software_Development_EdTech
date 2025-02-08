# UMURAVA Skills Challenges Platform

<div align="center">
  <h3>Project-Based Learning Platform for EdTech</h3>
  <p>
    A comprehensive web platform that enables students and young professionals to build their work portfolio through real-world projects, contests, competitions, and hackathons.
  </p>
</div>

## Table of Contents

- [About The Project](#about-the-project)
  - [Key Features](#key-features)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Contact](#contact)

## About The Project

`UMURAVA Skills Challenges` is an innovative EdTech platform designed to bridge the gap between academic learning and practical work experience. The platform partners with universities, schools, and training institutions to provide project-based learning opportunities through challenges and hackathons, helping students build real-world portfolios and gain valuable work experience.

### Key Features

1. **Challenge Management System**

   - Create and manage skill-based challenges
   - Support for multiple challenge categories
   - Detailed project briefs and requirements
   - Timeline and deadline tracking

2. **User Portfolio Development**

   - Track completed challenges
   - Showcase project deliverables
   - Build comprehensive work portfolios
   - Progress tracking and skill assessment

3. **Educational Institution Integration**

   - Custom integration paths for institutions
   - Assessment and evaluation tools
   - Course/curriculum alignment
   - Student progress tracking

4. **Community and Collaboration**

   - Team formation and management
   - Peer learning opportunities
   - Industry expert mentorship
   - Professional networking

5. **Analytics Dashboard**
   - Challenge participation metrics
   - Completion rates and statistics
   - User engagement tracking
   - Performance analytics

### Built With

#### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Redux/Redux Toolkit
- ShadcnUI Components

#### Backend

- Node.js
- TypeScript
- MongoDB
- Express.js
- JWT Authentication
- Nodemailer

## Getting Started

### Prerequisites

- Node.js (>= 14.20.1)
- MongoDB
- Git
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/EmmanuelSHYIRAMBERE/Umurava_Skills_Challenge_Software_Development_EdTech.git
cd Umurava_Skills_Challenge_Software_Development_EdTech
```

2. Install Backend Dependencies

```bash
cd backend
npm install
```

3. Configure Environment Variables

```bash
cp .env.example .env
# Update .env with your configuration
```

4. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### Running the Application

1. Start the Backend Server

```bash
cd backend
npm run server
```

2. Start the Frontend Development Server

```bash
cd frontend
npm run dev
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- API Documentation: http://localhost:8000/api-docs

## Project Structure

```
umurava-skills-challenges/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   └── package.json
└── README.md
```

## API Documentation

Comprehensive API documentation is available through Swagger UI when running the application locally:

- Development: http://localhost:8000/api-docs
- Production: https://umurava-skills-challenge-software.onrender.com/api-docs

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Emmanuel SHYIRAMBERE - emashyirambere1@gmail.com - [LinkedIn Profile](https://www.linkedin.com/in/emashyirambere/) - +250 789 405 379

Florien MAHORO MPAKANYI - mahorompakanyiflorien@gmail.com - [LinkedIn Profile](https://www.linkedin.com/in/mahoro-florien/) - +250 787 537 524

Brice NDAHIRO - ndahirobrice12@gmail.com - [LinkedIn Profile](https://www.linkedin.com/in/ndahiro-brice-173080244/) - +250 781 721 591

Demo Link: [https://umurava-skills-challenge.onrender.com](https://umurava-skills-challenge.onrender.com)

Project Link: [https://github.com/EmmanuelSHYIRAMBERE/Umurava_Skills_Challenge_Software_Development_EdTech](https://github.com/EmmanuelSHYIRAMBERE/Umurava_Skills_Challenge_Software_Development_EdTech)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
