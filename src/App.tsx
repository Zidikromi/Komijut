import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Infodetail from './Pages/Infodetail';
import Chapter from './Pages/chapter';

const App: React.FC = () => {
  // State untuk menyimpan status tema gelap/terang
  const [isDarkMode, setIsDarkMode] = useState<boolean>(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Menggunakan useEffect untuk mendeteksi perubahan tema saat komponen dimuat
  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // Menyesuaikan warna latar belakang berdasarkan tema
  const bgColor = isDarkMode ? '#333' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000'; // Warna teks sesuai tema


  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', color: textColor }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manga/:mangaid" element={<Infodetail />} />
          {/* <Route path="/ch/:chapterid" element={<Chapter />} /> */}
          <Route path="/manga/:mangaid/chapter/ch/:chapterid" element={<Chapter/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
