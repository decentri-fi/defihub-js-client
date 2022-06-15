import axios from "axios";
import {Network} from "./network.model";

export class NetworkService {

    public async list(): Promise<Array<Network>> {
        const result = await axios.get("https://api.defitrack.io/networks")
        return result.data
    }
}