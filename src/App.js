import React, { useEffect, useState } from 'react';
import { cifrar, descifrar } from './components/vigenere/vigenere';

function App() {
  const [criptedText, setCriptedText] = useState('');
  const [plainText, setPlainText] = useState('');
  const [key, setKey] = useState('');

  useEffect(() => {
    setCriptedText(cifrar(plainText, key));
  }, [plainText, key]);

  const handleChange = e => {
    if(e.target.name === 'plainText')
      setPlainText(e.target.value);
    if(e.target.name === 'key')
      setKey(e.target.value);
  };

  return (
    <div>
      Texto en plano:
      <input type='text' name='plainText' onChange={handleChange} /> <br />
      Clave:
      <input type='text' name='key' onChange={handleChange} /> <br />
      Cifrado:
      {criptedText}
    </div>
  );
}

export default App;
