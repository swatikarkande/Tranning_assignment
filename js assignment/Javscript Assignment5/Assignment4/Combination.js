function combinationString(str){
    list_string=new Array();
    for(i=0;i<str.length;i++){
        for(j=i+1;j<str.length+1;j++){
            list_string.push(str.slice(i,j));
        }
    }
    return list_string;
}
document.write(combinationString("dog"));