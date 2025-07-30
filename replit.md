# Proficient Youth Club Community Website

## Overview

This is a React-based community website for the Proficient Youth Club, built with modern web technologies including TypeScript, Vite, Express.js, and Drizzle ORM. The application features a single-page layout with sections for donations, directions, community membership, and general information about the club.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Custom components built on Radix UI primitives with Tailwind CSS
- **Styling**: Tailwind CSS with shadcn/ui component system for consistent design

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **Development**: Hot module replacement with Vite integration

### Build System
- **Development**: Vite dev server with Express API proxy
- **Production**: Static React build served by Express with API routes
- **TypeScript**: Shared types between client and server via `shared/` directory

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling to sections
- **Home Section**: Hero banner with call-to-action buttons
- **Donation Section**: Form for processing donations with predefined amounts
- **Directions Section**: Location information with Google Maps integration
- **Community Section**: Membership tiers and registration information
- **Footer**: Site links and contact information

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Modular API route system (currently minimal)
- **Error Handling**: Centralized error middleware

### Database Schema
- **Users Table**: Basic user management with username and password
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

1. **Client-Side**: React components use TanStack Query for API communication
2. **API Layer**: Express routes handle HTTP requests and interact with storage
3. **Data Persistence**: Drizzle ORM manages PostgreSQL database operations
4. **Type Safety**: Shared TypeScript definitions ensure consistency across layers

## External Dependencies

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Pre-built component system

### Development Tools
- **Vite**: Build tool with HMR support
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundling for production

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migrations and schema management

## Deployment Strategy

### Development
- **Local Server**: Vite dev server with Express API on same port
- **Database**: Uses DATABASE_URL environment variable for connection
- **Hot Reload**: Full-stack development with automatic reloading

### Production
- **Build Process**: 
  1. Vite builds React app to `dist/public`
  2. ESBuild bundles Express server to `dist/index.js`
- **Serving**: Express serves static files and API routes
- **Database**: Production PostgreSQL via Neon Database

### Configuration
- **Environment Variables**: DATABASE_URL required for database connection
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **Asset Handling**: Static assets served from Express in production

The application is designed as a community website template that can be easily customized for different organizations while maintaining a clean, accessible, and performant user experience.