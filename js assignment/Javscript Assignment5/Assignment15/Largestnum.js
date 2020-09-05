a = -5;
b = -2;
c = -6;
d = -8;
f = -1;
document.write("<h2>Find the largest of five numbers and display the resulton the screen.<h2><h3>Sample numbers: -5, -2, -6, -8, -1</h3>");
if (a > b && a > c && a > d && a > f) {
    document.write("largest number is:"+a);
}
else if (b > a && b > c && b > d && b > f) {
    document.write("largest number is:"+b);
}
else if (c > a && c > b && c > d && c > f) {
    document.write("largest number is:"+c);
}
else if (d > a && d > c && d > b && d > f) {
    document.write("largest number is:"+d);
}
else {
    document.write("largest number is:"+f);
}