import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Infodetail from './Pages/Infodetail';
import Chapter from './Pages/chapter';
import Home2 from './Pages/Home2';
import { useSpring, animated } from 'react-spring';

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
  const bgColor = '#FFF8F0';
  const textColor = isDarkMode ? '#fff' : '#000'; // Warna teks sesuai tema
  const contentAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <animated.div style={{ backgroundColor: bgColor, minHeight: '100vh', color: textColor, ...contentAnimation }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/home" element={<Home />} />

          <Route path="/manga/:mangaid" element={<Infodetail />} />
          <Route path="/manhwa/:mangaid" element={<Infodetail />} />
          {/* <Route path="/ch/:chapterid" element={<Chapter />} /> */}
          <Route path="/manga/:mangaid/chapter/ch/:chapterid" element={<Chapter />} />
        </Routes>
      </Router>
    </animated.div>
  );
};

export default App;
