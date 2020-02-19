class VigenereCipheringMachine {
    constructor (directCoder = true) {
        this.direct = directCoder

    }

    charFromCode(code) {
        return String.fromCharCode(code + 65);
    }

    codeFromChar(char) {
        return char.toUpperCase().charCodeAt(char) - 65;
    }

    encrypt(string = '', key = '') {
        let encryptString = '',
            keyCount = 0;

        if (string === '' || key === '') {
            throw 'Error';
        }

        const encryptChar = (cryptChar) => {
            if (/[A-Za-z]/.test(cryptChar)) {
                encryptString += this.charFromCode((this.codeFromChar(cryptChar) +  this.codeFromChar(key[keyCount++ % key.length])) % 26);
            } else {
                encryptString += cryptChar;
            }
        }
       
        if (this.direct) {
            for (let i = 0, length = string.length; i < length; i++) {
                let cryptChar = string[i];
            
                encryptChar(cryptChar);
            }
        } else {
            for (let i = string.length -1; i >= 0; i--) {
                let cryptChar = string[i];
            
                encryptChar(cryptChar);
            }
        }
        

        return encryptString;
        
    }

    decrypt(string = '', key = '') {
        let decryptString = '',
            keyCount = 0;

        if (string === '' || key === '') {
            throw 'Error';
        }

        const decryptChar = (cryptChar) => {
            if (/[A-Z]/.test(cryptChar)) {
                decryptString += this.charFromCode((26 + this.codeFromChar(cryptChar) - this.codeFromChar(key[keyCount++ % key.length])) % 26);
            } else {
                decryptString += cryptChar;
            }
        }

        if (this.direct) {
            for (let i = 0, length = string.length; i < length; i++) {
                let cryptChar = string[i];

                decryptChar(cryptChar);
            }
        } else {
            for (let i = string.length - 1; i >= 0 ; i--) {
                let cryptChar = string[i];

                decryptChar(cryptChar);
            }
        }

        return decryptString;

    }
}

module.exports = VigenereCipheringMachine;
