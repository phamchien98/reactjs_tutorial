var member = (name,age) =>{
    console.log(name,age);
}
member("Pham Thi Chien",22);

var member1 = name1=>{
    console.log(name1);
}
member1("Le Huy Hung");

var member2 = () =>{
    console.log("Pham Thi Chien");
}
member2();


var a=[1,2,3];
var arr = () =>a[0];
console.log(arr());