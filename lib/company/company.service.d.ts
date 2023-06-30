import { DefiHubConfig } from "../defihub.config";
import { Company } from "./company.model";
export declare class CompanyService {
    private readonly config;
    constructor(config: DefiHubConfig);
    list(): Promise<Array<Company>>;
}
