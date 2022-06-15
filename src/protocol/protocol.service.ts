import axios from "axios";
import {ProtocolModel} from "./protocol.model";

export class ProtocolService {

    public async list(): Promise<Array<ProtocolModel>> {
        const response = await axios.get("https://api.defitrack.io/protocols")
        return response.data
    }
}