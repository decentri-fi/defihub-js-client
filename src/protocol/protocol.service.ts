import axios from "axios";
import {Protocol} from "./protocol.model";

export class ProtocolService {

    public async list(): Promise<Array<Protocol>> {
        const response = await axios.get("https://api.decentri.fi/protocols")
        return response.data
    }
}