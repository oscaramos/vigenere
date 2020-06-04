const { cifrar, descifrar, descifrarClave } = require('./vigenere');

it('wikipedia test', () => {
    const plainText = 'CRYPTOISSHORTFORCRYPTOGRAPHY';
    const key = 'ABCDABCDABCDABCDABCDABCDABCD';
    const cipherText = 'csastpkvsiqutgqucsastpiuaqjb';
    expect(cifrar(plainText, key)).toBe(cipherText);
})


it('Descipher by GeekForGeeks', () => {
    const plainText = 'geeksforgeeks';
    const key = 'AYUSH';
    const cipherText = 'gcyczfmlyleim';
    expect(descifrar(plainText, key)).toBe(cipherText);
});

it('Descipher with no key from docs. Input cipherText, Output key_length and key', () => {
    const cipherText = 'wsdsz mbghx pcyzv';
    const key = 'lemon_emonl_monle';
    expect(descifrarClave(cipherText)).toBe(key);
});
