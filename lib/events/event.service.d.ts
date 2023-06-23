import { DefiEvent } from "./event.model";
import { DefiHubConfig } from "../defihub.config";
export declare class EventService {
    private readonly config;
    constructor(config: DefiHubConfig);
    decodeFromTransaction(network: string, transactionId: string): Promise<Array<DefiEvent>>;
}
