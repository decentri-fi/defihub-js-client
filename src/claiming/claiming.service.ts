import {Claimable, ClaimableConfig} from "./claiming.model";
import axios from "axios";
import {DefiHubConfig} from "../defihub.config";

export class ClaimService {

    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig) {
        this.config = config;
    }

    public async getClaimables(user: string, _config: (ClaimableConfig | null) = null): Promise<Array<Claimable>> {
        let config = {
            params: {
                include: _config?.include,
                exclude: _config?.exclude
            },
            paramsSerializer: (params: any) => {
                let result: string = ""
                if (params.include != null) {
                    result += "include=" + params.include.join(",") + "&"
                }
                if (params.exclude != null) {
                    result += "exclude=" + params.exclude.join(",")
                }
                return result
            }
        };
        const response = await axios.get(this.config.claimablesBaseUrl + `/${user}`, config)
        return response.data
    }

}