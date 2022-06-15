import {DefitrackModule} from "./defitrack.module";

const run = async () => {
    const defitrack = new DefitrackModule()
    const protocols = await defitrack.protocols().list()
    console.log(protocols)
}

run();