// map filter and arrow fn().

//1.
function sum(a,b){
    return a+b;
}
const ans=sum(3,4);
console.log(ans);

const sum = (a,b)=>{
   return a+b;
}

//2.
app.get("/",(req,res)=>{

})
app.get("/",function (req,res){

})

//Given an array , give me back a new array in which every value is multiplied by 2.
//[1,2,3,4,5].......[2,4,6,8,10].

let arr=[1,2,3,4,5]

function multiply(arr){
    let size=arr.length;
    for(let i=0;i<size;i++){
        arr[i]=arr[i]*2;
    }
    return arr;
}
console.log(multiply(arr));

//You can also solve it using map 

const input=[1,2,3,4,5];

const ans=input.map(function(i){
    return i*2;
})
console.log(ans);


//filtering.
const arr2=[1,2,3,4,5,6]
function filterlogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}
const ans4=arr2.filter(filterlogic);
console.log(ans4);


