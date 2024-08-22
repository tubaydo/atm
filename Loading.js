import React, { useEffect } from 'react';

const styles = {
  body: {
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    margin: 0,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: 'url(../images/t.png)', // Dosya yolunu güncelledik
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(3px)',
    zIndex: -1,
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Yarı saydam arka plan
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 9px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '400px',
  },
  text: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333333',
  },
  loader: {
    border: '8px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '8px solid #007BFF',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
    marginTop: '20px',
  },
};

const Loading = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/thanks'; // Yönlendirmek istediğiniz sayfanın yolu
    }, 3000); // 3000 milisaniye = 3 saniye

    return () => clearTimeout(timer); // Temizleme işlevi
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.background}></div>
      <div style={styles.container}>
        <p style={styles.text}>Bekleyiniz, işleminiz gerçekleştiriliyor...</p>
        <div style={styles.loader}></div>
      </div>
    </div>
  );
};

export default Loading;
