import { RestService } from "./RestService";

export class Notifier {
    readonly ifttt_url = 'https://maker.ifttt.com/trigger/slot_open/with/key/VNLN6gRGoj3nf56VdYK8p';
    sendToTelegram(data: Array<string>): void {
        RestService.doPost(this.ifttt_url, { "value1": data.join('<br/><br/>')});
    }
}