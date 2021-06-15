import fetch from 'node-fetch';
import { CowinResponse } from './CowinResponse';

export class RestService {

    static doGet(url: string): Promise<CowinResponse[]> {
        return fetch(url,{
            method: 'get',
            headers: { 
                'Content-Type': 'application/json',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36' 
            },
        })
            .then(res => res.json())
            .then(res => {
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