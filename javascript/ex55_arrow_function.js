//ex55_arrow_function.js

//화살표 함수, Arrow Funcion
// - 자바의 람다와 유사

//1. 함수 선언문
function f1() {
    console.log("f1");
}

//2. 함수 표현식(= 익명 함수)
var f2 = function() {
    console.log("f2");
};

f1();
f2();

//3. 화살표 함수(= 익명 함수)
var f3 = () => { console.log("f3"); };

f3();


//매개변수가 없는 경우
var foo = () => console.log("bar");
foo();

//매개변수가 1개인 경우
var foo = n => console.log(n);
foo(100);

//매개변수가 n개인 경우
var foo = (a, b) => console.log(a + b);
foo(10, 20);

//반환값이 있는 경우
var foo = () => { return 100; }
console.log(foo());

//실행 블럭에 유일하게 return문만 있었을 때
var foo = () => 200;
console.log(foo());

var foo = (a, b) => a * b;
console.log(foo(10, 20));


//-------------------------------------------------

// 이전 수업에서 화살표 함수를 쓸만한 곳?
var hong = {
    name: "홍길동",
    hello: function() {
        // console.log("Hello");
        console.log(this.name);
    }
};

hong.hello();


/* 화살표 함수내에서는 this 키워드는 해당 객체를 가리키는 것이 아니라, 최상위 객체(window, global)를 참조한다. */
//- 객체 생성 시 멤버 메소드를 구현할 때 절대 화살표 함수를 사용하면 안된다.******* this를 사용할 수 없기 때문에
var lee = {
    name: "이순신",
    // hello: () => console.log("Hi")
    hello: () => console.log(this.name) //undefined
};

lee.hello();



// 이때 많이 씀
setInterval(() => console.log(new Date()), 1000);


