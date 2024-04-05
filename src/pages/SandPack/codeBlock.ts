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
	val1: `const obj = { a: 0 };
obj["1"] = 0; 
obj[++obj.a] = obj.a++; 
const values = Object.values(obj);
obj[values[1]] = obj.a;

console.log(obj);
	`
};

export default codeBlock;
