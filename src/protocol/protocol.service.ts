import axios from "axios";
import {Protocol} from "./protocol.model";
import {DefiHubConfig} from "../defihub.config";

export class ProtocolService {

    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig) {
        this.config = config;
    }

    public async list(): Promise<Array<Protocol>> {
        const response = await axios.get("https://api.decentri.fi/protocols")
        return response.data
    }
}