import {Statistic} from "./statistics.model";
import axios from "axios";

export class StatisticsService {

    public async farming(): Promise<Statistic> {
        const response = await axios.get('https://api.decentri.fi/statistics/farming/markets/count')
        return response.data
    }
}