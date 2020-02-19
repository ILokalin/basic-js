class VigenereCipheringMachine {
    constructor (directCoder = true) {
        this.direct = directCoder

        this.codeFromChar = this.codeFromChar.bind(this);
        this.charFromCode = this.charFromCode.bind(this);
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
       
        for (let i = 0, length = string.length; i < length; i++) {
            let cryptChar = string[i];

            if (/[A-Za-z]/.test(cryptChar)) {
                encryptString += this.charFromCode((this.codeFromChar(cryptChar) +  this.codeFromChar(key[keyCount++ % key.length])) % 26);
            } else {
                encryptString += cryptChar;
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

        for (let i = 0, length = string.length; i < length; i++) {
            let decryptChar = string[i];

            if (/[A-Z]/.test(decryptChar)) {
                decryptString += this.charFromCode((26 + this.codeFromChar(decryptChar) - this.codeFromChar(key[keyCount++ % key.length])) % 26);
            } else {
                decryptString += decryptChar;
            }
        }

        return decryptString;

    }
}

module.exports = VigenereCipheringMachine;
