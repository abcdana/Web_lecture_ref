//ex51_variable.js
console.log(100);
console.log(200);
console.log(300);


/*

변수 선언

1. var
    - BOM ~ DOM ~ ES6
    - function-scoped
    - 중복 선언 가능(정말 주의 해야 함!!!!!!!!!!!!)
    - 상수 선언 불가능

2. let
    - ES6
    - block-scoped
    - 중복 선언 불가능
    - 변수 선언

3. const
    - ES6
    - block-scoped
    - 중복 선언 불가능
    - 상수 선언(= final 변수)

*/ 

var a = 10;
var a = 20;

console.log(a); //20

function m1() {
    var b = 30;
    var b = 40;
    console.log(b);
}

m1(); //40

// console.clear();

let b = 10;
console.log(b); //10

// let b = 20; //SyntaxError: Identifier 'b' has already been declared
// console.log(b);


if (true) {
    let c = 30;
    console.log(c);
}

// console.log(c); //Uncaught ReferenceError: c is not defined



const d = 100;
console.log(d); //

// d = 200;  //Uncaught TypeError: Assignment to constant variable.
console.log(d);


console.clear();

//*** let보다 const를 사용하는것을 권장 */
let list1 = [ 100, 200, 300, 400, 500 ];
const list2 = [ 100, 200, 300, 400, 500 ];

list1 = [ 600, 700, 800 ]; //덮어쓰기
console.log(list1);

// list2 = [ 600, 700, 800 ]; //덮어쓰기 안됨. TypeError: Assignment to constant variable.
// console.log(list2);

list1.push(600);
console.log("list1", list1);

list2.push(600);
console.log("list2", list2);



// var vs (let & const)
// - 이전 수업 : var
// - 이후 수업 : let & const