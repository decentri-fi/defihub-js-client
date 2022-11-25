import {DefiEvent} from "./event.model";
import axios from "axios";

export class EventService {

    public async decodeFromTransaction(network: string, transactionId: string): Promise<Array<DefiEvent>> {
        const response = await axios.get(`https://api.decentri.fi/events/decode/${transactionId}?network=${network}`);
        return response.data;
    }
}