import {Claimable} from "./claiming.model";
import axios from "axios";
import {DefiHubConfig} from "../defihub.config";


export class ClaimService {

    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig) {
        this.config = config;
    }

    public async getClaimables(protocol: string, user: string): Promise<Array<Claimable>> {
        const response = await axios.get(`https://api.decentri.fi/${protocol}/${user}/claimables`)
        return response.data
    }
}