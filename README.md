# Wang Lab - iPanCare

Integrative Pancreatic Cancer Research Lab Website

**Live Site:** [wanglab.se](https://www.wanglab.se/)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd wanglab

# Install dependencies
npm install
```

### Development
```bash
# Start development server
npm run dev

# The app will be available at http://localhost:5173
```

### Building for Production
```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
wanglab/
├── public/                 # Static assets
│   ├── assets/
│   │   └── images/        # Image files
│   └── content/           # JSON content files
├── src/
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   ├── styles/            # Shared styles
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main app component
│   ├── App.scss           # App-level styles
│   ├── main.tsx           # App entry point
│   └── main.scss          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run type-check` - Run TypeScript type checking

## 🎨 Features

- **Responsive Design** - Mobile-first approach with dynamic layouts
- **TypeScript** - Full type safety throughout the application
- **SCSS Styling** - Modular and maintainable stylesheets
- **Content Management** - JSON-based content system
- **Google Maps Integration** - Interactive location display
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Publication Grouping** - Publications organized by year
- **Team Profiles** - Responsive team member cards

## 📱 Mobile Features

- Responsive navigation with hamburger menu
- Dynamic layouts that adapt to screen size
- Touch-friendly interface elements
- Optimized typography for mobile reading
- Circular profile images on mobile devices

## 🔧 Configuration

### Content Management
Content is managed through JSON files in the `public/content/` directory

## 🚀 Deployment

The site is configured for GitHub Pages deployment. The build output is automatically deployed to `https://www.wanglab.se`.

## 📄 License

This project is part of the Wang Lab research group at Lund University.


