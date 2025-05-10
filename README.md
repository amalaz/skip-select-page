# Skip Hire Selection App

This project is a modern, modular React application for selecting skip sizes, inspired by a professional UI design. It fetches real-time skip data from an external API and presents it in a visually appealing, user-friendly way.

## Features
- **React + TypeScript**: Built with Vite for fast development and TypeScript for type safety.
- **React Router**: Multi-page navigation (Home and Skip Selection).
- **API Integration**: Fetches skip data from a live endpoint.
- **Modular Components**: Each skip is rendered using a reusable `SkipCard` component.
- **Responsive Grid Layout**: Cards are displayed in a flexible, responsive grid.
- **Modern Dark Theme**: Styled to match a professional, dark-themed UI.
- **Status Badges & Warnings**: Visual cues for skip size and road restrictions.

## Redesign & Approach

### 1. **Routing & Structure**
- Set up React Router for clean navigation between pages.
- Home page provides a simple entry point with a link to the skip selection page.
- Skip selection page (`/skips`) is the main feature, showing all available skips.

### 2. **API Data Fetching**
- On the skip selection page, data is fetched from:
  `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
- The app handles loading and error states gracefully.

### 3. **Component Modularity**
- **SkipCard**: Displays all relevant skip info (size, price, hire period, road status, etc.).
- **SkipSelectionPage**: Fetches data and renders a grid of `SkipCard` components.
- All components are designed for easy reuse and extension.

### 4. **Styling**
- Custom CSS (`SkipCard.css`) for a modern, dark look.
- Responsive grid adapts to different screen sizes.
- Visual badges for skip size and warnings for skips not allowed on the road.

### 5. **Extensibility**
- Easy to add more features (e.g., real images, selection logic, filters, etc.).
- All business logic and UI are separated for maintainability.

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
   Visit [http://localhost:5173](http://localhost:5173) and navigate to `/skips` to see the skip selection page.

## File Structure

- `src/App.tsx` — Main app and routing setup
- `src/SkipSelectionPage.tsx` — Fetches and displays skips
- `src/SkipCard.tsx` — Card component for each skip
- `src/SkipCard.css` — Styling for cards and grid

## Next Steps / Ideas
- Add real skip images
- Make the "Select This Skip" button functional
- Add filters or search for skip sizes
- Improve accessibility and mobile experience

---

**This project demonstrates a clean, scalable approach to building modern React apps with real-world data and professional UI/UX.**
