import {DefiEvent} from "./event.model";
import axios from "axios";
import {DefiHubConfig} from "../defihub.config";

export class EventService {

    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig) {
        this.config = config;
    }

    public async decodeFromTransaction(network: string, transactionId: string): Promise<Array<DefiEvent>> {
        const response = await axios.get(`https://api.decentri.fi/events/decode/${transactionId}?network=${network}`);
        return response.data;
    }
}