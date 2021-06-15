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
let resultCache: Array<string> = [];

function getAllResults() {
    let requests: Array<Promise<CowinResponse[]>> = [];
    request.forEach(val => {
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
        center?.sessions
            .filter(s => s.available_capacity > 0)
            .forEach(session => {
                if(!resultCache.includes(session.session_id)){
                    finalResults.push(`<br/>ID: ${session.session_id.split("-")[0]} <br/> Date: ${session.date} <br/> Age: ${session.min_age_limit} <br/> Vaccine: ${session.vaccine} <br/> D1 : ${session.available_capacity_dose1}  D2 : ${session.available_capacity_dose2} <br/> Center: ${center.name} <br/> Pin: ${center.pincode}`);
                    resultCache.push(session.session_id);
                }
            });
    });

    if (finalResults.length > 0) {
        finalResults.forEach(res => console.log(`[${new Date().toISOString()}] ${res}`));
            new audic("notify.mp3").play().catch(ex => console.error("No VLC binary"));
            if (argv.k !== null) {
               new Notifier().sendToTelegram(finalResults, argv.k);
            }
    }
        /*let delta: Array<string> = _.uniq(finalResults).filter(d => !resultCache.includes(d));  //Filter out already sent values
        console.log(`Cache : ${resultCache}`)
        console.log(`Current : ${_.uniq(finalResults)}`)
        console.log(`delta : ${delta}`)
        if (delta.length > 0) {
            delta.forEach(res => console.log(`[${new Date().toISOString()}] ${res}`));
            new audic("notify.mp3").play().catch(ex => console.error("No VLC binary"));
            if (argv.k !== null) {
                //new Notifier().sendToTelegram(delta, argv.k);
            }
            resultCache = _.union(resultCache, finalResults); //Fill cache with new values. Duplicate new values are handled by _.union
        }*/
    }


let argv = require('minimist')(process.argv.slice(2));
let interval = argv.t || 5;
console.log(`Polling every ${interval} minutes`);
getAllResults();
setInterval(() => getAllResults(), interval * 60000);