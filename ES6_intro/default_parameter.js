function multiply(a,b=1){
    return a*b;
}
console.log(multiply(5,2));
console.log(multiply(5));

function member(name){
    name = name || "Gues";
    return name;
}
console.log(member());
console.log(member("Phạm Thị Chiến"));