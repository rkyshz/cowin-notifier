import fetch from 'node-fetch';
import { CowinResponse } from './CowinResponse';

export class RestService {

    static doGet(url: string): Promise<CowinResponse[]> {
        return fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                return res['centers'] as CowinResponse[];
            });
    }

    static doPost(url: string, payload: any): any {
        return fetch(url, {
            method: 'post',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res);
            //.then(json => console.log(json));
    }

}