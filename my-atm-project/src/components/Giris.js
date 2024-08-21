import React from 'react';
import '../styles/styles.css'; // CSS dosyasının yolu

function Giris() {
  return (
    <div className="background-container">
      <div className="login-box">
        <button className="login-button" onClick={() => window.location.href = '/tc-login'}>Giriş Yap</button>
      </div>
    </div>
  );
}

export default Giris;
