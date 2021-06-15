import { CowinService } from './CowinService';
import { CowinResponse } from './CowinResponse';
import _ from 'lodash';
//import * as config from '../cowin-config.json';
import audic from 'audic';
import { Notifier } from './Notifier';




let request: {
    param: string,
    dateFrom: string,
    dateTo: string,
    type: string
}[] = JSON.parse(require('fs').readFileSync('cowin-config.json', 'utf8'));


function getAllResults() {
    let requests: Array<Promise<CowinResponse[]>> = [];
    request.forEach(async val => {
        for (let d = new Date(val.dateFrom); d <= new Date(val.dateTo); d.setDate(d.getDate() + 1)) {
            val.type === 'P' ? requests.push(new CowinService().getResultByPincode(val.param, toDDMMYYYY(d))) : requests.push(new CowinService().getResultByDistrict(val.param, toDDMMYYYY(d)))
        }

    }
    );

    Promise.all(requests).then(res => {
        let result: CowinResponse[] = _.flatten(res);
        processData(result);
    })
}
function toDDMMYYYY(date: Date): string {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
function processData(data: CowinResponse[]) {
    let finalResults: Array<string> = [];
    data.forEach((center) => {
        center.sessions
            .filter(s => s.available_capacity > 0)
            .forEach(slot => {
                finalResults.push(`<br/> Date: ${slot.date} <br/> Age: ${slot.min_age_limit} <br/> Vaccine: ${slot.vaccine} <br/> D1 : ${slot.available_capacity_dose1}  D2 : ${slot.available_capacity_dose2} <br/> Center: ${center.name} <br/> Pin: ${center.pincode}`)
        });
    });

    if (finalResults.length > 0) {
        _.uniq(finalResults).forEach(res => console.log(`[${new Date().toISOString()}] ${res}`));
        new audic("notify.mp3").play().catch(ex=>console.error("No VLC binary"));
        if(argv.k!==null){
            new Notifier().sendToTelegram(_.uniq(finalResults),argv.k);
        }
    }


}

let argv = require('minimist')(process.argv.slice(2));
let interval = argv.t || 5;
console.log(`Polling every ${interval} minutes`);
getAllResults();
setInterval(() => getAllResults(), interval * 60000);



