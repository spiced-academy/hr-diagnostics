console.clear();

console.log(Boolean(2 == "2"));
// --> true
console.log(Boolean(2 === "2"));
// --> false
console.log(Boolean(2 === 2));
// --> true
console.log(Boolean("hello world"));
// --> true
console.log(Boolean(""));
// --> false
console.log(Boolean(true));
// --> true
console.log(Boolean(0));
// --> false
console.log(Boolean(-50));
// --> true
console.log(Boolean(50));
// --> true
console.log(Boolean(5 > 1));
// --> true
console.log(Boolean("1 > 10"));
// --> true
console.log(Boolean("false"));
// --> true
