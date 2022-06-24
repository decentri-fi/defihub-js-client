import defitrack from "./index";

const run = async () => {

    const price = await defitrack.prices().calculate('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', 'ETHEREUM', 1)
    console.log(price);
}

run();