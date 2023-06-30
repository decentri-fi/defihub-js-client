import {DefiHubConfig} from "../defihub.config";
import axios from "axios";
import {Company} from "./company.model";

export class CompanyService {

    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig) {
        this.config = config;
    }

    public async list(): Promise<Array<Company>> {
        const response = await axios.get("https://api.decentri.fi/companies")
        return response.data
    }
}