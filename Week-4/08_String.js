const name='hitesh'
const repocount=50

// console.log(name + repocount);

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


const gameName = new String('hitesh');
console.log(gameName[0]);//acess of first char in stirng
console.log(gameName.__proto__);//it shows that string is also a object here.

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);//last index is not included.
console.log(newString);

const anotherstring=gameName.slice(-8,4);
console.log(anotherstring);

const newStr1="         hitesh          "
console.log(newStr1.trim());

const url="https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));




