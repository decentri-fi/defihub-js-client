import {Protocol} from "../protocol/protocol.model";

export type DefiEvent = {
    type: string,
    protocol: Protocol,
    metadata: Map<String, Object>
}