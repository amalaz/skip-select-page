# Skip Hire Selection App 

This project is a modern, modular Next.js application for selecting skip sizes, inspired by a professional UI design. It fetches real-time skip data from an external API and presents it in a visually appealing, user-friendly way.

## Features
- **Next.js 14 + TypeScript**: Built with Next.js for optimal performance and TypeScript for type safety
- **App Router**: Modern file-system based routing with server components
- **API Integration**: Fetches skip data from a live endpoint
- **Modular Components**: Each skip is rendered using a reusable `SkipCard` component
- **Responsive Grid Layout**: Cards are displayed in a flexible, responsive grid
- **Modern Dark Theme**: Styled with Tailwind CSS for a professional, dark-themed UI
- **Status Badges & Warnings**: Visual cues for skip size and road restrictions

## Technical Approach

### 1. **Architecture & Routing**
- Implemented Next.js 14 App Router for better performance and SEO
- Server Components for improved initial page load
- Client Components where interactivity is needed
- File-system based routing with `/app` directory structure
- Layout system for consistent UI across pages

### 2. **Data Fetching & State Management**
- Server-side data fetching for optimal performance
- React Query for client-side data management and caching
- Custom hooks for reusable data fetching logic:
  - `useSkips`: Manages skip data fetching and caching
  - `useSkipSelection`: Handles skip selection state

### 3. **Component Architecture**
- **Server Components**:
  - Layout components for consistent UI
  - Page components for main content
- **Client Components**:
  - `SkipCard`: Interactive card component for skip details
  - `SkipSelectionPage`: Client-side skip selection interface
- All components are designed for reusability and maintainability

### 4. **Styling & UI**
- Tailwind CSS for utility-first styling
- Responsive design with mobile-first approach
- Dark theme implementation
- Custom animations and transitions
- Accessible UI components

### 5. **Performance Optimizations**
- Server-side rendering for better SEO
- Image optimization with Next.js Image component
- Route prefetching for faster navigation
- Component code splitting
- Efficient data fetching strategies

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── skips/             # Skips section
│       ├── page.tsx       # Skips page
│       └── components/    # Page-specific components
├── components/            # Shared components
├── config/               # Configuration files
├── hooks/               # Custom React hooks
└── types/              # TypeScript type definitions
```

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) and navigate to `/skips` to see the skip selection page.

## Development

### Key Technologies
- Next.js 14
- TypeScript
- Tailwind CSS
- React Query
- ESLint & Prettier

### Best Practices
- Server Components by default
- Client Components only when needed
- TypeScript for type safety
- Tailwind for styling
- React Query for data management

## Next Steps / Ideas
- Add real skip images with Next.js Image optimization
- Implement skip selection persistence
- Add filters and search functionality
- Enhance accessibility features
- Add unit and integration tests
- Implement error boundaries
- Add loading states and skeletons

---

**This project demonstrates a modern, scalable approach to building Next.js applications with real-world data and professional UI/UX.**
