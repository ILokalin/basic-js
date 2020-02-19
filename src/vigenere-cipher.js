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
        console.log(encryptString)
        return encryptString;
        
    }

    decrypt(string = '', key = '') {
        

            if (string === '' || key === '') {
            throw 'Error';
        }

    }
}

module.exports = VigenereCipheringMachine;
