import React from 'react';

const TCLogin = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Formun varsayılan gönderimini engeller
    window.location.href = '/donation'; // Yönlendirme işlemi
  };

  return (
    <div style={styles.body}>
      <div style={styles.background}></div>
      <div style={styles.container}>
        <form id="tc-form" onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <label htmlFor="tcno" style={styles.label}>TC Kimlik Numaranız:</label>
            <br />
            <input
              type="text"
              id="tcno"
              name="tcno"
              maxLength="11"
              required
              pattern="\d{11}"
              placeholder="12345678901"
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Giriş Yap</button>
        </form>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  body: {
    height: '100vh', // Tam yüksekliği kaplar
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
    backgroundImage: 'url(/images/t.png)', // Yolu kök dizine göre güncelledik
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(3px)',
    zIndex: -1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.862)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 9px rgba(0, 0, 0, 0.2)',
    width: '300px',
    height: '250px',
  },
  inputContainer: {
    marginBottom: '30px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '220px',
    height: '50px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '18px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    outline: 'none',
    position: 'relative',
    bottom: '10px', // Butonun kutunun içinde düzgün konumlanmasını sağlar
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.1)',
  },
  buttonActive: {
    backgroundColor: '#004085',
  },
};

export default TCLogin;
