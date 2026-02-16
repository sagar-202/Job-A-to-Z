# Career OS

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://job-a-to-z.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Career OS is a comprehensive AI-powered career acceleration platform designed to act as a complete operating system for job seekers. It unifies resume creation, placement preparation, and job tracking into a single, cohesive modular monolith, providing a streamlined workflow from preparation to employment.

## Product Overview

The platform addresses the fragmentation in the job search process by integrating three critical verticals:

1.  **AI Resume Builder**: A sophisticated document generation engine that helps users craft ATS-optimized resumes with real-time preview and analysis.
2.  **Placement Readiness Module (PRP)**: A structured roadmap and tracking system to prepare candidates for technical interviews and aptitude tests.
3.  **Job Hunter Module**: An intelligent job discovery and application tracking system that aggregates opportunities and manages application statuses.

---

## Core Features

### 1. Resume Builder
*   **Real-time Preview**: Instant visual feedback on resume changes.
*   **ATS Optimization**: ensuring high parseability by Applicant Tracking Systems.
*   **Structured Data Entry**: Guided input for experience, education, and skills.
*   **PDF Generation**: High-fidelity export for applications.

### 2. Placement Readiness (PRP)
*   **Step-by-Step Roadmap**: Guided preparation stages from aptitude to technical rounds.
*   **Progress Tracking**: persistent status updates for each preparation milestone.
*   **Checklist Verification**: Automated validation of readiness criteria before progression.

### 3. Job Hunter
*   **Unified Dashboard**: Centralized view of all job applications.
*   **Application Tracking**: Kanban-style status management (Saved, Applied, Interview, Offer).
*   **Intelligent Digest**: Aggregated daily job summaries.
*   **Unified Navigation**: Seamless integration within the Career OS ecosystem.

---

## Architecture

Career OS utilizes a **Modular Monorepo** architecture to ensure scalability, maintainability, and shared governance across its domains.

### Folder Structure

```
career-os/
├── apps/
│   ├── web/                 # Main Application (React + Vite)
│   │   ├── src/
│   │   │   ├── modules/     # Domain-Driven Modules
│   │   │   │   ├── readiness/
│   │   │   │   └── jobs/    # Integrated Job Hunter Module
│   │   │   └── pages/       # Core Resume Functionality
│   │   └── public/          # Static Assets & Legacy Connectors
│   └── api/                 # Backend Services (Planned)
├── packages/                # Shared Libraries (UI Kit, Utilities)
├── package.json             # Root Configuration
└── pnpm-workspace.yaml      # Workspace Definition
```

### System Design

*   **Modular Monolith**: The frontend is structured as a modular monolith, where distinct business domains (Resume, Readiness, Jobs) reside within the same repository but maintain clear boundaries.
*   **Shared Design System**: A unified UI/UX language (KodNest Premium Design System) ensures visual consistency across all modules.
*   **Domain Integration**: Legacy and vanilla JS modules (Job Hunter) are seamlessly integrated via wrapper components to provide a single-page application (SPA) feel while preserving their original stability.

---

## Technology Stack

*   **Frontend Framework**: React 18
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS + Shadcn UI
*   **Language**: TypeScript
*   **Routing**: React Router DOM v6
*   **State Management**: React Query (TanStack Query)
*   **Package Manager**: pnpm (Workspace support)

---

## Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   pnpm (v8 or higher)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sagar-202/Job-A-to-Z.git
    cd career-os
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    # Run the main web application
    cd apps/web
    pnpm run dev
    ```

4.  **Access the application:**
    Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Deployment

The application is deployed on **Vercel** for high availability and global edge caching.

*   **Production URL**: [https://job-a-to-z.vercel.app/](https://job-a-to-z.vercel.app/)
*   **CI/CD**: Automated deployments via Git integration.
*   **Build Command**: `pnpm run build`
*   **Output Directory**: `dist`

---

## Testing Checklist

Before deploying new features, ensure the following validation steps are completed:

- [ ] **Navigation**: Verify smooth transitions between Resume, Readiness, and Jobs modules.
- [ ] **Resume Engine**: Confirm PDF generation and data persistence.
- [ ] **Job Hunter**: potential valid iframe loading and correct routing (e.g., `/jobs` vs `/jobs/saved`).
- [ ] **Responsiveness**: Verify layout integrity on Mobile, Tablet, and Desktop breakpoints.
- [ ] **Build Check**: Ensure `pnpm run build` passes without TypeScript or Linting errors.

---

## Future Roadmap

1.  **Backend Integration**: Transition from client-side storage to a dedicated API service (`apps/api`).
2.  **AI Enhancement**: Integration of LLMs for personalized resume suggestions and cover letter generation.
3.  **User Authentication**: Implementation of secure auth flows (Clerk/Auth0).
4.  **Analytics Dashboard**: User engagement metrics and application success tracking.

---

© 2026 Career OS. All rights reserved.
