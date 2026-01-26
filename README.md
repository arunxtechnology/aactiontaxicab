# AAction Taxi Cab

Professional taxi and airport transportation services website for the Triangle area of North Carolina.

## About

AAction Taxi Cab has been serving the Raleigh, Durham, Chapel Hill, Cary, Apex, and RTP areas since 1990. This website provides customers with information about our services, flat rates, and online reservation capabilities.

## Features

- **Responsive Design**: Beautiful, modern interface that works on all devices
- **Service Information**: Comprehensive details about all transportation services
- **Flat Rate Calculator**: Transparent pricing for RDU airport transportation
- **Online Reservations**: Easy booking system for customers
- **Corporate Accounts**: Dedicated section for business clients
- **Contact Integration**: Direct phone and SMS links for immediate booking

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Supabase (for reservations and data management)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Commands

```bash
# Type checking
npm run typecheck

# Linting
npm run lint
```

## Project Structure

```
aactiontaxicab/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── public/             # Static assets
└── dist/              # Production build output
```

## Pages

- **Home** (`/`) - Hero section with services overview
- **About** (`/about`) - Company history and values
- **Services** (`/services`) - Detailed service descriptions
- **Flat Rates** (`/flat-rates`) - Airport transportation pricing
- **Reservation** (`/reservation`) - Online booking form
- **Corporate Accounts** (`/corporate`) - Business services information

## Contact Information

- **Phone**: (919) 924-6908
- **Service Area**: Raleigh, Durham, Chapel Hill, Cary, Apex, RDU Airport, Research Triangle Park

## License

© 2026 AAction Taxi Cab. All rights reserved.
