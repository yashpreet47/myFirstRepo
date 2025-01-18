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