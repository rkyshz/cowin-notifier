const rest=require('node-fetch');
module.exports = class RestService {

    static doGet(url:string) : Promise<CowinResponse[]> {
        return rest(url)
        .then(res => res.json())
        .then(res => {
                return res['centers'] as CowinResponse[];
        });
    }

}