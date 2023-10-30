import {Claimable} from "./claiming.model";
import axios from "axios";
import {DefiHubConfig} from "../defihub.config";


export class ClaimService {

    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig) {
        this.config = config;
    }

    public async getClaimables(user: string): Promise<Array<Claimable>> {
        const response = await axios.get(this.config.claimablesBaseUrl + `/${user}`)
        return response.data
    }
}