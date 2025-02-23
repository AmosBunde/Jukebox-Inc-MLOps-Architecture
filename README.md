# Jukebox Inc MLOps Architecture Documentation

This repository contains the documentation for Jukebox Inc's MLOps architecture, showcasing the comprehensive machine learning infrastructure design for a modern music platform operating across Africa.

## Overview

Jukebox Inc is revolutionizing the music industry by bringing internet-connected jukeboxes to bars, restaurants, and entertainment venues across Africa. With 1 million jukeboxes installed across 10 countries, serving a population of 400 million people, the platform requires a robust MLOps infrastructure to support various machine learning applications.

## Key ML Applications

1. **Credit Risk Assessment**
   - Predicts customer payment default likelihood
   - Uses historical payment data and behavior patterns
   - Batch inference system with daily updates

2. **Music Recommendations**
   - Real-time recommendation engine
   - Combines collaborative filtering and content-based approaches
   - Personalizes music selection based on venue preferences

3. **Fraud Detection**
   - Real-time anomaly detection
   - Monitors sales patterns and device usage
   - Ensures legitimate device locations and usage reporting

4. **License Optimization**
   - Weekly batch processing for license decisions
   - Analyzes usage patterns and popularity trends
   - Optimizes music library refresh cycles

## Architecture Components
![Proposed Workflows](https://github.com/AmosBunde/Jukebox-Inc-MLOps-Architecture/blob/main/JunkInc%20Data%20Architecture.svg)

### Data Pipeline & Infrastructure
- Event-driven streaming using Apache Kafka: 
- Change Data Capture (CDC) with Debezium
- Delta Lake for data storage and versioning
- Apache Airflow for orchestration

### Model Lifecycle Management
- MLflow for experiment tracking
- Feast for feature store management
- Kubernetes for model serving
- Prometheus & Grafana for monitoring

## Development Setup

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Development Mode

Start the development server with hot-reload:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

#### Production Build

Build the application for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

### Deployment

#### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   ```bash
   npx netlify deploy
   ```

   For production deployment:
   ```bash
   npx netlify deploy --prod
   ```

## Technology Stack

- React
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Vite

## Project Structure

```
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
└── package.json         # Project dependencies
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact Amos the MLOps Platform Lead at MKopa .
