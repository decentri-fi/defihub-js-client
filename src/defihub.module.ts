import {ProtocolService} from "./protocol/protocol.service";
import {NetworkService} from "./network/network.service";
import {ERC20Service} from "./erc20/erc20.service";
import {LendingService} from "./lending/lending.service";
import {FarmingService} from "./farming/farming.service";
import {PoolingService} from "./pooling/pooling.service";
import {InvestService} from "./invest/invest.service";
import {PriceService} from "./price/price.service";
import {StatisticsService} from "./statistics/statistics.service";
import {ClaimService} from "./claiming/claiming.service";
import {EventService} from "./events/event.service";
import {ExitService} from "./exit/exit.service";
import {DefiHubConfig} from "./defihub.config";

export class DefihubModule {

    private readonly _config: DefiHubConfig;

    private readonly _protocols: ProtocolService;
    private readonly _networks: NetworkService;
    private readonly _erc20: ERC20Service;
    private readonly _lending: LendingService;
    private readonly _farming: FarmingService;
    private readonly _pooling: PoolingService;
    private readonly _invest: InvestService;

    private readonly _exit: ExitService;
    private readonly _prices: PriceService;
    private readonly _statistics: StatisticsService;
    private readonly _claiming: ClaimService;
    private readonly _events: EventService;


    constructor(config: DefiHubConfig = new DefiHubConfig()) {
        this._config = config;
        this._invest = new InvestService(config);
        this._exit = new ExitService(config);
        this._lending = new LendingService(config, this._invest, this._exit);
        this._farming = new FarmingService(config, this._invest, this._exit);
        this._pooling = new PoolingService(config, this._invest, this._exit);
        this._protocols = new ProtocolService(config)
        this._networks = new NetworkService(config);
        this._erc20 = new ERC20Service(config);
        this._prices = new PriceService(config);
        this._statistics = new StatisticsService(config);
        this._claiming = new ClaimService(config);
        this._events = new EventService(config);
    }

    public protocols() {
        return this._protocols;
    }

    public networks() {
        return this._networks;
    }

    public erc20() {
        return this._erc20;
    }

    public events() {
        return this._events;
    }

    public pooling() {
        return this._pooling;
    }

    public farming() {
        return this._farming;
    }

    public lending() {
        return this._lending;
    }

    public invest() {
        return this._invest;
    }

    public exit() {
        return this._exit;
    }

    public prices() {
        return this._prices;
    }

    public statistics() {
        return this._statistics;
    }

    public claiming() {
        return this._claiming;
    }
}