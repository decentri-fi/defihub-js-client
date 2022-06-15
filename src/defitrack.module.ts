import {ProtocolService} from "./protocol/protocol.service";
import {NetworkService} from "./network/network.service";

export class DefitrackModule {
    private readonly _protocols: ProtocolService;
    private readonly _networks: NetworkService;

    constructor() {
        this._protocols = new ProtocolService()
        this._networks = new NetworkService();
    }

    public protocols() {
        return this._protocols;
    }

    public networks() {
        return this._networks;
    }
}