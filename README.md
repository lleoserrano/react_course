# React Course - Task Manager

A modern TODO application built with React and a comprehensive tech stack for learning React development.

## 🚀 Technologies Used

### Frontend Framework

- **React 18.3.1** - Modern React with hooks and functional components
- **React DOM 18.3.0** - React rendering library

### Build Tools & Development

- **Vite 6.3.5** - Fast build tool and development server
- **@vitejs/plugin-react** - Vite plugin for React support

### Styling

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.5.4** - CSS post-processor
- **Autoprefixer** - Automatic vendor prefixing

### Routing & Navigation

- **React Router DOM 6.26.1** - Client-side routing for single page applications

### UI & User Experience

- **Lucide React 0.435.0** - Beautiful, customizable SVG icons
- **React Toastify 11.0.5** - Toast notifications for better UX

### Utilities

- **UUID 10.0.0** - Generate unique identifiers for tasks

### Code Quality & Linting

- **ESLint 9.9.0** - JavaScript/React linting
- **eslint-plugin-react** - React-specific linting rules
- **eslint-plugin-react-hooks** - React hooks linting
- **eslint-plugin-react-refresh** - React refresh linting

## 📁 Project Structure

```
src/
├── components/
│   ├── AddTask.jsx      # Task creation component
│   ├── Button.jsx       # Reusable button component
│   ├── Input.jsx        # Reusable input component
│   ├── Tasks.jsx        # Task list display component
│   └── Title.jsx        # Title component
├── pages/
│   └── TaskPage.jsx     # Task detail page
├── assets/
│   └── react.svg        # React logo
├── App.jsx              # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles with Tailwind directives
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd react_course
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## ✨ Features

- ✅ Create new tasks
- ✅ View task list
- ✅ Modern, responsive UI with Tailwind CSS
- ✅ Icon integration with Lucide React
- ✅ Toast notifications for user feedback
- ✅ Client-side routing for navigation
- ✅ Component-based architecture

## 🎯 Learning Objectives

This project demonstrates:

- Modern React development patterns
- Component composition and reusability
- State management with React hooks
- CSS-in-JS with Tailwind CSS
- Modern build tools (Vite)
- Code quality with ESLint
- Project structure best practices
