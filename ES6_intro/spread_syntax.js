// const oldArray = [1,2,3];
// const newArray =[oldArray,4,5,6];
// console.log(newArray);

// const oldArray = [1,2,3];
// const newArray =[...oldArray,4,5,6];
// console.log(newArray);



const oldObject = {
  name: 'Pham Thi Chien'
};

const newObject = {
  ...oldObject,
  age: 22
};

console.log(newObject); 