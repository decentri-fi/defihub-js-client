import axios from "axios";
import {Network} from "./network.model";
import {DefiHubConfig} from "../defihub.config";

export class NetworkService {

    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig) {
        this.config = config;
    }

    public async list(): Promise<Array<Network>> {
        const result = await axios.get("https://api.decentri.fi/networks")
        return result.data
    }
}