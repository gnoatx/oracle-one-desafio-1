const textArea = document.querySelector("#user-text");
const outputMessage = document.querySelector("#output-message");
const noInput = document.querySelector("#no-input");

function encryptBtn() {
    const encryptedText = encrypt(textArea.value);
    outputMessage.textContent = encryptedText;
    noInput.style.display = "none";
    textArea.value = "";
}

function encrypt(encryptedString) {
    
    let codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encryptedString = encryptedString.toLowerCase();

    for (let i = 0; i < codeMatrix.length; i++) {
        if(encryptedString.includes(codeMatrix[i][0])) {
            encryptedString = encryptedString.replaceAll(codeMatrix[i][0],codeMatrix[i][1]);
        }
    }
    return encryptedString;
}

function decryptBtn() {
    const decryptedText = decrypt(textArea.value);
    outputMessage.textContent = decryptedText;
    noInput.style.display = "none";
    textArea.value = "";
}

function decrypt(decryptedString) {
    
    let codeMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    decryptedString = decryptedString.toLowerCase();

    for (let i = 0; i < codeMatrix.length; i++) {
        if(decryptedString.includes(codeMatrix[i][1])) {
            decryptedString = decryptedString.replaceAll(codeMatrix[i][1],codeMatrix[i][0]);
        }
    }
    return decryptedString;
}