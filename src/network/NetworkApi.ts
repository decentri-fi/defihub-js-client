import {Network} from "./Network";
import axios from "axios";

export class NetworkApi {

    public async getNetworks() : Promise<Array<Network>>{
        const result = await axios.get("https://api.defitrack.io/networks")
        return result.data
    }
}