import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Giris from './components/Giris';
import TCLogin from './components/tclogin'; // Dikkat: Dosya adını küçük harfle yazdık
import Donation from './components/donation'; // Dikkat: Dosya adını küçük harfle yazdık
import Thanks from './components/thanks'; // Dikkat: Dosya adını küçük harfle yazdık
import Loading from './components/loading'; // Dikkat: Dosya adını küçük harfle yazdık
import './styles/styles.css'; // CSS dosyasının yolu

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/giris" element={<Giris />} />
        <Route path="/tc-login" element={<TCLogin />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/" element={<Giris />} /> {/* Ana sayfa */}
      </Routes>
    </Router>
  );
}

export default App;
