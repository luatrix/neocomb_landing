import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import GeneratorPage from './pages/GeneratorPage';
import LandingPage from './pages/LandingPage';
import BeesmartLanding from './pages/BeesmartLanding';
import './App.css'; // если используешь что-то из этого файла
import './styles/AuthPage.css'; // наш кастомный CSS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeesmartLanding />} />
        <Route path="/thumbee" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/generate" element={<GeneratorPage />} />
        {/* можно будет добавить другие страницы */}
      </Routes>
    </Router>
  );
}

export default App;
