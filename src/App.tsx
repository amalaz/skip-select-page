import './App.css'
import { Routes, Route } from 'react-router-dom';
import SkipSelectionPage from './SkipSelectionPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skips" element={<SkipSelectionPage />} />
    </Routes>
  );
}

function Home() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Welcome to Skip Hire</h1>
      <a href="/skips">Choose Your Skip Size</a>
    </div>
  );
}

export default App
