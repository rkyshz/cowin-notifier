import { CowinService } from './CowinService'; 
import { CowinResponse } from './CowinResponse';
import _ from 'lodash';
//import * as config from '../cowin-config.json';



let request: {
    param: string,
    date: string,
    type: string
}[]=JSON.parse(require('fs').readFileSync('cowin-config.json', 'utf8'));


function getAllResults() {
    let requests: Array<Promise<CowinResponse[]>> = [];
    request.forEach(async (val, key) =>
        val.type==='P' ? requests.push(new CowinService().getResultByPincode(val.param, val.date)) : requests.push(new CowinService().getResultByDistrict(val.param, val.date))
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
        .forEach(slot=>console.log(`Age ${slot.min_age_limit} - Dose-1 : ${slot.available_capacity_dose1} & Dose-2 : ${slot.available_capacity_dose2} @ ${center.name} (${center.pincode})`));
    });
    
}

getAllResults();
//setInterval(()=>getAllResults(),2000);


