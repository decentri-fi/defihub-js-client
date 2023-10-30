import {DefiHubConfig} from "../defihub.config";
import axios, {AxiosResponse} from "axios";
import {Company} from "./company.model";

export class CompanyService {

    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig) {
        this.config = config;
    }

    public async list(): Promise<Array<Company>> {
        const response: AxiosResponse<Array<Company>> = await axios.get(`${this.config.baseUrl}/companies`)
        return response.data
    }
}