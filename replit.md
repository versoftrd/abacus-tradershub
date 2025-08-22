# Overview

This is a full-stack trading platform application called "Traders Hub" built with React, Express, and PostgreSQL. The application features a responsive dark-themed interface designed for trading education and live trading sessions. The platform includes navigation between different sections like Abacus Experience, Market Open, Campus Virtual, and pricing information.

**Recent SEO Optimization (January 2025)**: Comprehensive SEO implementation including meta tags, structured data, semantic HTML, and Google discoverability features. Updated to use TradersHub branding with new logo for social media sharing, blue theme color (#0055FF), and independent domain structure.

**LLM.TXT Implementation (January 2025)**: Created comprehensive LLM.TXT file for AI crawler optimization, enabling proper indexing by ChatGPT, Claude, Perplexity, Gemini, and other major language models. Includes explicit allow/disallow rules, sitemap references, and content guidelines for tradershub.pro domain.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom dark theme configuration and shadcn/ui component library
- **Routing**: Wouter for client-side routing with defined routes for different platform sections
- **State Management**: TanStack React Query for server state management with custom query client configuration
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives for accessibility
- **Build System**: Vite with custom configuration for development and production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Structure**: RESTful API with `/api` prefix for all routes
- **Middleware**: Custom logging middleware for API requests with response tracking
- **Error Handling**: Centralized error handling middleware with proper status codes
- **Development**: Hot module replacement and development server integration with Vite

## Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User management system with username/password authentication structure
- **Migrations**: Database migrations managed through Drizzle Kit
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and PostgreSQL for production
- **Connection**: Neon Database serverless connection for cloud PostgreSQL hosting

## Development Environment
- **Package Management**: npm with lockfile for dependency consistency
- **TypeScript**: Comprehensive TypeScript configuration with path mapping for clean imports
- **Code Quality**: ESM modules throughout the application with proper build tooling
- **Development Tools**: Replit integration with cartographer plugin for enhanced development experience

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database operations with schema validation

## UI and Styling
- **Radix UI**: Comprehensive set of accessible React primitives for building the user interface
- **Tailwind CSS**: Utility-first CSS framework with custom dark theme configuration
- **DM Sans Font**: Primary typography using DM Sans from Google Fonts for improved readability and modern appearance
- **Lucide React**: Icon library for consistent iconography throughout the application

## Development and Build Tools
- **Vite**: Fast build tool and development server with React plugin support
- **TypeScript**: Type safety across the entire application stack
- **ESBuild**: Fast JavaScript bundler for production builds

## Data Fetching and Forms
- **TanStack React Query**: Server state management with caching and synchronization
- **React Hook Form**: Form handling with validation support
- **Zod**: Schema validation for forms and API data

## Authentication and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **bcrypt**: Password hashing for secure user authentication (inferred from user schema)

## Routing and Navigation
- **Wouter**: Lightweight client-side routing library for React applications

## SEO and Web Standards
- **Comprehensive Meta Tags**: Optimized title, description, keywords, and author meta tags with TradersHub branding
- **Open Graph Protocol**: Full social media sharing optimization for Facebook and Twitter using new TH logo
- **Schema.org Structured Data**: Rich snippets for educational organization, pricing, and instructor information
- **Semantic HTML**: Proper heading hierarchy, section landmarks, and ARIA labels
- **Site Infrastructure**: robots.txt, sitemap.xml, and canonical URLs for search engine optimization
- **PWA Features**: Web app manifest with TradersHub branding and mobile optimization
- **Performance**: Preloaded critical resources and optimized loading
- **Brand Consistency**: Updated theme color to #0055FF blue, TradersHub logo for social sharing, and independent domain structure