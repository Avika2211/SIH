# VidyaGrid - AI-based Drop-out Prediction and Counseling System

## Overview

VidyaGrid is a comprehensive educational platform designed to predict student dropout risk and provide personalized counseling support. The system features AI-driven insights to help schools track academic progress, identify at-risk students, and deliver timely interventions. The application serves both administrators and students through dedicated dashboards with warm, supportive earth-tone design focused on student well-being and academic success.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with custom earth-tone color palette optimized for warmth and accessibility
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Design System**: Consistent component library with earth tones, rounded corners, and gentle transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the stack
- **Development**: Hot module replacement with Vite integration
- **API Design**: RESTful API structure with `/api` prefix routing
- **Error Handling**: Centralized error middleware with structured error responses

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Connection**: Neon Database serverless PostgreSQL for production

### Authentication and Authorization
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **User Types**: Role-based access with admin and student user types
- **Schema**: User table with username/password authentication
- **Validation**: Zod schemas for input validation and type safety

### Component Architecture
- **Dashboard System**: Separate admin and student dashboards with role-specific functionality
- **Interactive Elements**: Chatbot integration for student support
- **Progress Tracking**: Custom progress ring components for visual data representation
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Key Features
- **Admin Dashboard**: Dropout risk overview, at-risk student lists, counseling suggestions, and data insights
- **Student Dashboard**: Personalized progress reports, attendance tracking, grade monitoring, and integrated chatbot support
- **AI Integration**: Dropout prediction algorithms and counseling recommendation system
- **Resource Management**: Educational resources and intervention tools

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database operations and query building

### UI and Design
- **Radix UI**: Accessibility-first component primitives for dialogs, dropdowns, navigation
- **shadcn/ui**: Pre-built component library with consistent design patterns
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with HMR and optimized bundling
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds

### Data Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Performant form handling with minimal re-renders
- **Zod**: Schema validation and type inference

### Fonts and Assets
- **Google Fonts**: Inter font family for clean, readable typography
- **Custom Assets**: Earth-tone illustrations and supportive imagery stored in attached_assets directory

### Monitoring and Development
- **Replit Integration**: Development environment with runtime error overlay and cartographer plugin
- **Development Tooling**: Hot reload, error boundaries, and development-specific debugging tools