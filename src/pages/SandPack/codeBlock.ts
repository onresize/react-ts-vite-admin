const codeBlock: any = {
	promise1: `let { log } = console;

Promise.resolve()
.then(() => {
	log(0);
	return Promise.resolve(4);
})
.then((ret) => {
	log(ret);
});

Promise.resolve()
.then(() => {
	log(1);
})
.then(() => {
	log(2);
})
.then(() => {
	log(3);
})
.then(() => {
	log(5);
})
.then(() => {
	log(6);
});
	`,
promise2: `function promise(name, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
      console.log(name)
    }, delay)
  })
}

promise('异步任务1')
  .then(() => {
    promise('异步任务2')
  })
  .then(() => {
    promise('异步任务3')
  })`,
	val1: `const obj = { a: 0 };
obj["1"] = 0; 
obj[++obj.a] = obj.a++; 
const values = Object.values(obj);
obj[values[1]] = obj.a;

console.log(obj);
	`,
	val2: `var a = 1;

function fn() {
  console.log(a);
  function a() {}
  var a = 10;
}

fn();`,
val3: `var b = 0;
console.log(b);

if (true) {
	b = 1;
	console.log(b);

	function b() {}

	b = 21;
	console.log(b);
	console.log(globalThis.b);
}

console.log(window.b);
console.log(b);`,
val4: `var foo = function () {
	console.log("var_foo1");
};
foo();

var foo = function () {
	console.log("var_foo2");
};
foo();

// 函数提升
function foo() {
	console.log("foo1");
}
foo();

// 函数提升
function foo() {
	console.log("foo2");
}
foo();`,
val5: `var a = 1;

function fn() {
	console.log(a);

	return; // return 不会影响变量提升和函数提升

	function a() {} // 这一步、函数声明具有函数提升、相当于编译下直接 var a; a = func
	var a = 10; // var可以重复声明
	console.log(a);
}

fn();`,
val6: `var foo = {n: 1}; 
var bar = foo;
foo.x = foo = {n: 2}; // 这里 赋值顺序是从右往左、后面提升全局变量foo = {n: 2}、 而foo.x指向还是它原来的对象{n: 1}、所以bar也是指向原来的foo、及bar.x = {n: 2}、所以bar = {n: 1, x: {n: 2}}

console.log(bar);  // { n: 1, x:{n:2} }
console.log(foo);  // {n: 2}
console.log(foo.x);  //undefined`,
val7: `[1,2,3].map(ParseInt) // [1,NaN,NaN]

[typeof null, null instanceof object] // [ object, false ]

[3,'2',2].reduce(Math.pow) // 3的2次方的2次方、81

[].reduce(Math.pow) // 报错`,
val8: `class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	test() {
		console.log("test()方法中this指向：", this); // Person： {name: '张三', age: 18}
	}
	asyncTest() {
		console.log("asyncTest()this指向：", this); // Person： {name: '张三', age: 18}
		setTimeout(function () {
			console.log("定时器普通函数this指向:", this); // window
		}, 0);
		setTimeout(() => {
			console.log("箭头函数this指向:", this); // Person： {name: '张三', age: 18}
		}, 600);
	}
}

const zs = new Person("张三", 18);
zs.test();
zs.asyncTest();`,
val9: `let n = console.log.call.call.call.call.apply((a) => a, [1,2])
console.log(n) // 2`,
};

export default codeBlock;
