import { RestService } from "./RestService";

export class Notifier {
    //VNLN6gRGoj3nf56VdYK8p
    private ifttt_url = 'https://maker.ifttt.com/trigger/slot_open/with/key/${ifttt_key}';
    sendToTelegram(data: Array<string>,ifttt_key_key:string): void {
        RestService.doPost(this.ifttt_url.replace('${ifttt_key}',ifttt_key_key), { "value1": data.join('<br/>')});
    }
}