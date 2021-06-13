const CowinService = require('./CowinService');
const CowinResponse = require('./CowinResponse');
const _ = require('lodash');



let request: {
    pin: string,
    date: string
}[] = [
        {
            pin: "400064",
            date: "14-06-2021"
        }
        // ,
        // {
        //     pin: "400081",
        //     date: "13-06-2021"
        // }
    ];


function getAllResults() {
    let requests: Array<Promise<CowinResponse>> = [];
    request.forEach(async (val, key) =>
        //requests.push(new CowinService(val.pin, val.date).getResultByPincode())
        requests.push(new CowinService().getResultByDistrict(395, val.date))
    );

    Promise.all(requests).then(res => {
        let result: CowinResponse[] = _.flatten(res);
        processData(result);
       
    })
}

function processData(data:CowinResponse[]){
    data.forEach((center)=>{
        center.sessions
        .filter(s=>s.available_capacity > 1)
        .forEach(slot=>console.log(`Age ${slot.min_age_limit} - Dose-1 : ${slot.available_capacity_dose1} & Dose-2 : ${slot.available_capacity_dose2} @ ${center.name}`));
    });
    
}

getAllResults();




