// function number(num1,num2,...numOther){
//     console.log("x:",num1);
//     console.log("y:",num2);
//     console.log("Other number:",numOther);
// }
// number("one","two","three","four","five","six");

function number(...numOther){
  console.log(number.length);
}
number() /* ouput: 0 */
number(7) /* ouput: 1 */
number(2, 4, 7) /* ouput: 3 */