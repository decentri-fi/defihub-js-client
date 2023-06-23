import {Statistic} from "./statistics.model";
import axios from "axios";
import {DefiHubConfig} from "../defihub.config";

export class StatisticsService {

    private readonly config: DefiHubConfig;

    constructor(config: DefiHubConfig) {
        this.config = config;
    }

    public async farming(): Promise<Statistic> {
        const response = await axios.get('https://api.decentri.fi/statistics/farming/markets/count')
        return response.data
    }
}