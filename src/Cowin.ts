const rest=require('node-fetch');

module.exports=class Cowin {
    
    
url: String = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}';
datex:string;
pin:string;


constructor(pin:string,datex:string){
    this.datex=datex;
    this.pin=pin;
    this.url=this.url.replace("${pin}",this.pin).replace("${date}",this.datex);
}

getResult(): Promise<CowinResponse> {
    console.log(`${this.pin} - ${this.datex}`);
    console.log(this.url);
    return rest(this.url.toString())
                .then(res => res.json())
                .then(res => {
                        return res as CowinResponse;
                })
}

}

