function numEO() {

    var num = document.getElementById("num").value;
    // document.write("Number = "+num+"<br>");
    for (let i = 0; i <= 15; i++) {
        if (num % 2 == 0) {
            if (num >= 16) {
                document.getElementById("result").innerHTML="out of range";
                break;
            }
            else{
            document.getElementById("result").innerHTML = num + "Number is even!";
            }
        }

        else {
            if (num >= 16) {
                document.getElementById("result").innerHTML="out of range";
                break;
            }
            else {
                document.getElementById("result").innerHTML = num + "Number is odd!";
            }
        }
        
    }
    // document.getElementById("result").innerHTML = num + "out of bound number";

}
