
function signProduct(){
    var x=document.getElementById("x").value;
    var y=document.getElementById("y").value;
    var z=document.getElementById("z").value;
    if (x>0 && y>0 && z>0)
    {
           alert("The sign is +");
    }
    else if (x<0 && y<0 && z<0)
            {
              alert("The sign is +");
            }
            else if (x>0 && y<0 && z<0)
            {
              alert("The sign is +");
            }
            else if (x<0 && y>0 && z<0)
            {
              alert("The sign is +");
            }
            else
            {
              alert("The sign is -");
            }
}

