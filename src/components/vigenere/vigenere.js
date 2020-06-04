import { encrypt, decrypt, getEncryptionKeys } from "vigenere-cipher";

export const cifrar = (plainText, key) => {
    return encrypt(plainText.toLowerCase(), key.toLowerCase());
}

export const descifrar = (cipherText, key) => {
    return decrypt(cipherText.toLowerCase(), key.toLowerCase())
}

export const descifrarClave = (cipherText) => {
    return ''
}
