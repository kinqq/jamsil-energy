# Overview

This is a Korean gas station company website for 잠실에너지 (Jamsil Energy), a gas station business established in 1981. The project is built as a modern React-based web application showcasing the company's history, management philosophy, and station locations. The website serves as a corporate presence with sections for company timeline, business philosophy, and station directory.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, History, Philosophy, and Stations
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack React Query for server state management
- **Styling**: Custom design system with Korean language support, dark/light theme toggle

## Component Structure
- **Layout Components**: Header with navigation, Footer with contact info, ThemeToggle
- **Section Components**: HeroSection, TimelineSection, PhilosophySection, StationsSection
- **UI Components**: Comprehensive shadcn/ui component library (buttons, cards, dialogs, etc.)
- **Design System**: Follows design guidelines with energy industry color palette (deep blue, orange accents)

## Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage**: Memory storage implementation with interface for CRUD operations
- **API Structure**: RESTful API setup with route registration system

## Data Layer
- **Schema**: User management with Drizzle schema definitions
- **Database Configuration**: PostgreSQL connection via environment variables
- **Type Safety**: Zod schemas for validation and TypeScript types throughout

## Build and Development
- **Development**: Hot module replacement with Vite development server
- **Production**: Optimized builds with static asset serving
- **TypeScript**: Strict configuration with path aliases for clean imports
- **Asset Management**: Support for images and static files with alias resolution

# External Dependencies

## Core Technologies
- **React**: Frontend framework with TypeScript support
- **Express**: Node.js web server framework
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework

## UI and Design
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Unstyled, accessible UI components
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Inter font family for typography

## Database and ORM
- **Drizzle ORM**: Type-safe ORM for database operations
- **@neondatabase/serverless**: PostgreSQL connection driver
- **Drizzle Kit**: Database migration and schema management

## Development Tools
- **@replit/vite-plugin-***: Replit-specific development plugins
- **PostCSS**: CSS processing with Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds

## State Management and Forms
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **@hookform/resolvers**: Validation resolvers for forms

## Routing and Navigation
- **Wouter**: Lightweight client-side routing library
- **Date-fns**: Date manipulation utilities for timeline features