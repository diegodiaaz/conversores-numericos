

function convertDecimal(numDec) {
    if (!numDec) {
        document.getElementById("resultBinary").innerText = "0";
        return;
    }
    var decimal = parseInt(numDec)
    var binary = decimal.toString(2)
    document.getElementById("resultBinary").innerText = binary
}

function convertBinary() {
    var binary = document.getElementById("textDecimal").value
    var decimal = document.getElementById("resultDecimal")
    decNum = 0
    for (let i = binary.length; i > 0; i--) {
        let cc = binary.charAt(i - 1)
        if (cc == 1) {
            decNum += Math.pow(2, binary.length - i)
        }
    }
    decimal.textContent = decNum
}
