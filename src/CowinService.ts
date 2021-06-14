
import { RestService } from "./RestService";
import { CowinResponse } from "./CowinResponse";
export class CowinService {


    readonly pincodeUrl: String = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}';
    readonly districtUrl: string = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_id}&date=${date}';


    getResultByPincode(pin: string, date: string): Promise<CowinResponse[]> {
        console.log(`[${new Date().toISOString()}] Fetching data for ${pin} - ${date}`);
        return RestService.doGet((this.pincodeUrl.replace("${pin}", pin).replace("${date}", date).toString()));
    }
    
    getResultByDistrict(district_id: string, date: string): Promise<CowinResponse[]> {
        console.log(`[${new Date().toISOString()}] Fetching data for ${district_id} - ${date}`);
        return RestService.doGet(this.districtUrl.replace("${district_id}", district_id).replace("${date}", date).toString());
    }

}

