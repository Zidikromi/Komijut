import React, { } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Infodetail from './Pages/Infodetail';
import Chapter from './Pages/chapter';
import Home2 from './Pages/Home2';
import { useSpring, animated } from 'react-spring';
import { MangaProvider } from './lib/MangaContext';

const App: React.FC = () => {

  // Menyesuaikan warna latar belakang berdasarkan tema
  const bgColor = '#FFF8F0';
  const contentAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <animated.div style={{ backgroundColor: bgColor, minHeight: '100vh', ...contentAnimation }}>
      <MangaProvider >
      <Router>
        <Routes>
          <Route path="/" element={<Home2 />} />
          {/* <Route path="/home" element={<Home />} /> */}

          <Route path="/manga/:mangaid" element={<Infodetail />} />
          <Route path="/manhwa/:mangaid" element={<Infodetail />} />
          {/* <Route path="/ch/:chapterid" element={<Chapter />} /> */}
          <Route path="/manga/:mangaid/chapter/ch/:chapterid" element={<Chapter />} />
        </Routes>
      </Router>
      </MangaProvider>
    </animated.div>
  );
};

export default App;
