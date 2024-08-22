import React from 'react';

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
    backgroundColor: 'rgba(255, 90, 90, 0.862)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 9px rgba(0, 0, 0, 0.2)',
    width: '570px',
    height: '150px',
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: 'rgb(233, 251, 251)',
  },
};

const Thanks = () => {
  return (
    <div style={styles.body}>
      <div style={styles.background}></div>
      <div style={styles.container}>
        <p style={styles.text}>200 TL bağış yaptınız.</p>
        <p style={styles.text}>Allah (c.c) yaptığınız hayrı habul etsin. TEŞEKKÜRLER.</p>
      </div>
    </div>
  );
};

export default Thanks;