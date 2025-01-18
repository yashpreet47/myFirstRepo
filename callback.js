function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("Data having Id : ",dataId);
        if(getNextData){
            getNextData() ;
        }       
    }, 2000);
}

getData(101,()=>{
    getData(102);
});


let promise = new Promise((resolve,reject)=>{
    console.log("I am a promise.");
}); 

function getUserdata(userId,getnextData) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User :",userId);
            if(getnextData){
                getnextData() ;
            }
        },2000);
    });
}

getUserdata(101,()=>{
    getUserdata(102,()=>{
        getUserdata(103);
    });
});

function asyncfun1(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data : ",userId); 
            resolve("succesfully resolved the data");          
        }, 2000);
    });
}
function asyncfun2(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data : ",userId); 
            resolve("succesfully resolved the data");          
        }, 2000);
    });
}
// let p1 = asyncfun1(1001);
// console.log("Fetching Data 1 ..");
// p1.then((resolve)=>{
//     console.log(resolve);
//     console.log("Fetching Data 2 ..");
//     let p2 = asyncfun2(1002);
//         p2.then((resolve)=>{
//             console.log(resolve);
//         });
// });
console.log("Fetching Data 1 ..");
asyncfun1(1).then((resolve)=>{
    console.log("Fetching Data 2 ..");
    asyncfun2(2).then((resolve)=>{
    });
});



function getPromise(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data id : ",dataId);
            resolve("success!");
        }, 2000);
    });
}
console.log("Fetching Data 101..");
getPromise(101)
    .then((resolve)=>{
        console.log("Fetching Data 102..");
        return getPromise(102) ;
    })
    .then((resolve)=>{
        console.log("Fetching Data 103..");
        return getPromise(103) ;
    })
    .then((resolve)=>{
        console.log(resolve);
    });


    function getweatherData(city,temp){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("City:",city,"Temperature:",temp);
                resolve("Data Received!");
            }, 2000);
        });
    }

    async function getweather(){
        await getweatherData("Nagpur",15);
        await getweatherData("Raipur",20);
        await getweatherData("Chandrapur",25);
        await getweatherData("Dhamtari",16);
    }
    getweather();