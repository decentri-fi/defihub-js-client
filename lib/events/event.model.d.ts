import { Protocol } from "../protocol/protocol.model";
import { Network } from "../network/network.model";
export type DefiEvent = {
    type: string;
    protocol: Protocol;
    metadata: Map<String, Object>;
    network: Network;
};
