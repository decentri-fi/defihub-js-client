import { DefiEvent } from "./event.model";
export declare class EventService {
    decodeFromTransaction(network: string, transactionId: string): Promise<Array<DefiEvent>>;
}
