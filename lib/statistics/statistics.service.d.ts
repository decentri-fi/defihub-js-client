import { Statistic } from "./statistics.model";
import { DefiHubConfig } from "../defihub.config";
export declare class StatisticsService {
    private readonly config;
    constructor(config: DefiHubConfig);
    farming(): Promise<Statistic>;
}
