//Geaves you the length of the string.
function getlength(str){
    console.log('original str',str);
    console.log('length',str.length);
}
getlength('Hello world');

//index of
function findIndexof(str,target){
    console.log('Original str',str);
    console.log('Index',str.indexOf(target));
    //for getting last index we will use lastIndexOf();
}
findIndexof("Hello world",'world');


//slice geave syou the specific string which you want.

function getSlice(str,start,end){
    console.log('Original string',str);
    console.log('After slice',str.slice(start,end));
}
getSlice('Hello world',0,5);

const value='harkirat singh';
let ans=value.substring(2,5);//works on index 
let ans2=value.slice(2,5);//works on value
console.log(ans);
console.log(ans2);

//Replace string
const str='Hello world';
console.log(str.replace('world','javascript'));

//split cnvrts a string into an array.
const value1='Hi my name is ios harkirat';
const words=value1.split(" ");
console.log(words);

//trim function
const value2='    hello    '
console.log(value2.trim());

//toUpper--cnvrts your string into upper case while toLower--cnvrts string into lower case.
console.log(value2.toUpperCase());
console.log(value2.toUpperCase());

//parseInt:-cnvrts a string into no.
console.log(parseInt('42'));
console.log(parseInt('98kmd'));
console.log(parseInt('sdbjsdb98nsnds'));




 

