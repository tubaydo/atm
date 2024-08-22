import React, { useState, useEffect } from 'react';

// Inline CSS styles
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
    backgroundImage: 'url(../images/t.jpg)', // Dosya yolunu güncelledik
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
    backgroundColor: 'rgba(255, 255, 255, 0.862)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 9px rgba(0, 0, 0, 0.2)',
    width: '570px',
    height: '150px',
    textAlign: 'center',
  },
  countdown: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
};

const Donation = () => {
  const [countdownTime, setCountdownTime] = useState(5);

  useEffect(() => {
    if (countdownTime <= 0) {
      window.location.href = '/loading'; // Yönlendirmek istediğiniz sayfanın yolu
      return;
    }

    const timer = setInterval(() => {
      setCountdownTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Temizleme işlevi
  }, [countdownTime]);

  return (
    <div style={styles.body}>
      <div style={styles.background}></div>
      <div style={styles.container}>
        <p>Lütfen bağış yapmak istediğiniz parayı ATM'ye yerleştiriniz.</p>
        <div style={styles.countdown}>
          {countdownTime} sn sonra yönlendirileceksiniz...
        </div>
      </div>
    </div>
  );
};

export default Donation;