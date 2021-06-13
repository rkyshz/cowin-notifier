const Cowin = require('./Cowin');
const CowinResponse = require('./CowinResponse');



let request: {
    pin: string,
    date: string
}[] = [
        {
            pin: "400080",
            date: "13-06-2021"
        },
        {
            pin: "400081",
            date: "13-06-2021"
        }
    ];


async function getAllResults(){
    let requests:Array<Promise<CowinResponse>>=[];
    request.forEach(async function (val, key) {
        console.log(`Fetching data for ${val.pin} - ${val.date}`);
        requests.push(new Cowin(val.pin, val.date).getResult());
       
    });
    Promise.all(requests).then(res=>{
        console.log(res);
    })
}

getAllResults();




