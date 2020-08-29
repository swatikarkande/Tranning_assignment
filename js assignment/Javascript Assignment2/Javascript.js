
function getValue(val) {
    document.getElementById("result").value += val
}
function getAnswer() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
function clearScreen() {
    document.getElementById("result").value = ""
}