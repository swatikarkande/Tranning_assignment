function avg(){
    var num = [];
    var i;
    var res=0;
    for (i = 1;i<=10;i++)
    {
        num[i-1] = document.getElementById(i).value;
    }
    for(i=0;i<10;i++)
    {
        res += parseInt(num[i]);
    }
    var resAvg = res/10;

    document.getElementById("result").innerHTML += resAvg;
    document.getElementById("result").style.display = "inline-block";
}