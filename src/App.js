import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import { ThemeProvider } from './hooks/useDarkMode';
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Support from './pages/Support';
import Imprint from './pages/Imprint';
import './App.css';

function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryString = location.search;
    if (queryString && queryString.startsWith('?/')) {
      const pathMatch = queryString.match(/^\?\/(.+?)(?:&|$)/);
      if (pathMatch) {
        let path = '/' + pathMatch[1].replace(/~and~/g, '&');
        path = decodeURIComponent(path);
        navigate(path, { replace: true });
      }
    }
  }, [location, navigate]);

  return null;
}

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter basename={basename}>
          <RedirectHandler />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
            <Route path="/datenschutz" element={<Layout><Privacy /></Layout>} />
            <Route path="/support" element={<Layout><Support /></Layout>} />
            <Route path="/imprint" element={<Layout><Imprint /></Layout>} />
            <Route path="/impressum" element={<Layout><Imprint /></Layout>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
