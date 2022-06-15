import axios from "axios";
import {NetworkModel} from "./network.model";

export class NetworkService {

    public async list(): Promise<Array<NetworkModel>> {
        const result = await axios.get("https://api.defitrack.io/networks")
        return result.data
    }
}