import axios from "axios";

export class PriceService {

    public async calculate(address: string, network: string, amount: number) {
        const result = await axios.post(`https://api.decentri.fi/price`, {
            address: address,
            network: network,
            amount: amount
        })
        return result.data;
    }
}