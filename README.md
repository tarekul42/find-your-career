# Find Your Career

A job board application built with React, featuring job listings, filtering, application tracking, and statistics visualization. Deployed on Surge.

## Live Demo

[https://dramatic-trains.surge.sh](https://dramatic-trains.surge.sh)

## Features

- **Job listings**: Browse available jobs with filtering by category
- **Featured jobs**: Highlighted job opportunities on the homepage
- **Applied jobs tracking**: View all jobs you've applied to
- **Statistics**: Visual charts showing application trends with Recharts
- **Responsive design**: Tailwind CSS with mobile-first approach

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 4 |
| Routing | React Router DOM 6 |
| Styling | Tailwind CSS 3 |
| Charts | Recharts 2 |
| Icons | Heroicons |
| Deployment | Surge |

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── Components/       # 20+ component directories
│   ├── AppliedJobs/  # Applied jobs tracking
│   ├── AvailableJobs/# Available job listings
│   ├── FeaturedJobs/ # Featured job section
│   ├── JobCategory/  # Job category filter
│   └── Statistics/   # Charts and statistics
├── App.jsx           # Main app with router
└── main.jsx          # Entry point
```
