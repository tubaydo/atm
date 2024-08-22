import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate hook'u import edin
import '../styles/giris.css'; // CSS dosyasının yolu

function Giris() {
  const navigate = useNavigate(); // useNavigate'i kullanarak navigate fonksiyonunu oluşturun

  return (
    <div className="background-container">
      <div className="login-box">
        <button className="login-button" onClick={() => navigate('/tc-login')}>Giriş Yap</button>
      </div>
    </div>
  );
}

export default Giris;
