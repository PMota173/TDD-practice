function caesarCipher(sentence) {
    // Your code here
    let result = '';
    for (let i = 0; i < sentence.length; i++) {
        let charCode = sentence.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + 3) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + 3) % 26 + 97);
        } else {
            result += sentence[i];
        }
    }
    return result;
}
module.exports = caesarCipher;