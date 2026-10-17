//Async and await :- How both of them works internally.

// Here get data will return you a promise menas if a function starts with async keyword then the function will return you a Promise.

async function getData(){
    //await pause the function until the Promise get resolve.
    let result=await Promise.resolve("Done");
    console.log(result);
}
//converting it back to the normal fn.
function getData(){
    return Promise.resolve('Hello');
}
getData()
.then(data=>{console.log(data);
})


//async await to ,then and .catch.
async function main(){
    console.log('1');
    const data=await getData();
    console.log('2');
}
function main(){
    console.log('1');
    return getData().then(
        ((data)=>{
            console.log('2');
        })
    )
    
}

//
async function test(){
    return 'Hello';
}
function test(){
    return Promise.resolve('Hello');
}

//Fetch data using async and await.
async function getUser(){
    console.log('A');
    const url=await fetch("https://jsonplaceholder.typicode.com/users/1");
    try{
        const response=await fetch(url);
        if(!response.ok){
            throw new Error(`Response status:${response.status}`);
        }
        const result=await response.json();
        console.log(result);
        
    }
    catch(error){
        console.log(error.message);
    }
    console.log('B');
}
getUser();

function getUser(){
    console.log('A');
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response)=>{
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        }
    })
    .then((data)=>{console.log(data);
    })
    .catch((e)=>{console.log(e);
    })
}
getUser();