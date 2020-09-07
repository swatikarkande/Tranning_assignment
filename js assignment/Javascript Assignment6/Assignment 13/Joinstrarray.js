document.write("<h4> join all elements of the following array into a string.</h4>")

var arr = new Array("First", "Second", "Third");

var str = arr.join();
document.write("str : " + str);

var str = arr.join(", ");
document.write("<br />str : " + str);

var str = arr.join(" + ");
document.write("<br />str : " + str); 