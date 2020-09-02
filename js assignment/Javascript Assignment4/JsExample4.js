function myFun(){
    var fistname=document.form1.fname.value;
    // document.writeln(fistname);
    var lastname=document.form1.lname.value;
    var Designation=document.form1.desigtn.value;
    var mobilenum=document.form1.mnumber.value;
    var address=document.form1.address.value;
    var city=document.form1.city.value;
    var state=document.form1.state.value;
    var pincode=document.form1.pincode.value;
   
    var items=[];
    items.push(fistname);
    items.push(lastname);
    items.push(Designation);
    items.push(mobilenum);
    items.push(address);
    items.push(city);
    items.push(state);
    items.push(pincode);
    document.write(items);
    console.log(items);
}