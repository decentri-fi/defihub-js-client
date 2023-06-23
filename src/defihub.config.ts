export class DefiHubConfig {

    private readonly baseUrl;

    constructor(baseUrl: string = "https://api.decentri.fi") {
        this.baseUrl = baseUrl;
    }
}