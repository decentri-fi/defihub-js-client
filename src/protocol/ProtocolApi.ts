import axios from "axios";
import {Protocol} from "./Protocol";

export class ProtocolApi {

    public async getProtocols(): Promise<Array<Protocol>> {
        const response = await axios.get("https://api.defitrack.io/protocols")
        return response.data
    }
}