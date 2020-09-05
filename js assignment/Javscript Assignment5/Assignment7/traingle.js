function areaOfTraingle(a,b,c){
        // calculate the semi-perimeter
let s = (a + b + c) / 2;

//calculate the area
let areaValue = Math.sqrt(
  s * (s - a) * (s - b) * (s - c)
);
// document.getElementById("p1").innerHTML=areaValue;
return areaValue;
}
document.write(areaOfTraingle(5,6,7));