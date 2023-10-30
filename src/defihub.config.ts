export class DefiHubConfig {

    public readonly baseUrl: string;
    public readonly claimablesBaseUrl: string;

    constructor(baseUrl: string = "https://api.decentri.fi",
                claimablesBaseUrl: string = "https://claimables.decentri.fi") {
        this.baseUrl = baseUrl;
        this.claimablesBaseUrl = claimablesBaseUrl;
    }
}