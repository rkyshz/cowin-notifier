import * as rest from 'node-fetch';
import { CowinResponse } from './CowinResponse';

export class RestService {

    static doGet(url:string) : Promise<CowinResponse[]> {
        return rest(url)
        .then(res => res.json())
        .then(res => {
                return res['centers'] as CowinResponse[];
        });
    }

}