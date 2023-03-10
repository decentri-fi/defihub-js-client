import { Protocol } from "../protocol/protocol.model";
export declare type DefiEvent = {
    type: string;
    protocol: Protocol;
    metadata: Map<String, Object>;
};
