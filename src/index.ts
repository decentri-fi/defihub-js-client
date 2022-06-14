import {ProtocolApi} from "./protocol/ProtocolApi";

const run = async () => {
    let result = await new ProtocolApi().getProtocols()
    console.log(result)
}

run();