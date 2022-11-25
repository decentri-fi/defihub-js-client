"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefihubModule = void 0;

var _protocol = require("./protocol/protocol.service");

var _network = require("./network/network.service");

var _erc = require("./erc20/erc20.service");

var _lending = require("./lending/lending.service");

var _farming = require("./farming/farming.service");

var _pooling = require("./pooling/pooling.service");

var _invest = require("./invest/invest.service");

var _price = require("./price/price.service");

var _statistics = require("./statistics/statistics.service");

var _claiming = require("./claiming/claiming.service");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DefihubModule = /*#__PURE__*/function () {
  function DefihubModule() {
    _classCallCheck(this, DefihubModule);

    this._invest = new _invest.InvestService();
    this._lending = new _lending.LendingService(this._invest);
    this._farming = new _farming.FarmingService(this._invest);
    this._pooling = new _pooling.PoolingService(this._invest);
    this._protocols = new _protocol.ProtocolService();
    this._networks = new _network.NetworkService();
    this._erc20 = new _erc.ERC20Service();
    this._prices = new _price.PriceService();
    this._statistics = new _statistics.StatisticsService();
    this._claiming = new _claiming.ClaimService();
  }

  _createClass(DefihubModule, [{
    key: "protocols",
    value: function protocols() {
      return this._protocols;
    }
  }, {
    key: "networks",
    value: function networks() {
      return this._networks;
    }
  }, {
    key: "erc20",
    value: function erc20() {
      return this._erc20;
    }
  }, {
    key: "pooling",
    value: function pooling() {
      return this._pooling;
    }
  }, {
    key: "farming",
    value: function farming() {
      return this._farming;
    }
  }, {
    key: "lending",
    value: function lending() {
      return this._lending;
    }
  }, {
    key: "invest",
    value: function invest() {
      return this._invest;
    }
  }, {
    key: "prices",
    value: function prices() {
      return this._prices;
    }
  }, {
    key: "statistics",
    value: function statistics() {
      return this._statistics;
    }
  }, {
    key: "claiming",
    value: function claiming() {
      return this._claiming;
    }
  }]);

  return DefihubModule;
}();

exports.DefihubModule = DefihubModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZpaHViTW9kdWxlIiwiX2ludmVzdCIsIkludmVzdFNlcnZpY2UiLCJfbGVuZGluZyIsIkxlbmRpbmdTZXJ2aWNlIiwiX2Zhcm1pbmciLCJGYXJtaW5nU2VydmljZSIsIl9wb29saW5nIiwiUG9vbGluZ1NlcnZpY2UiLCJfcHJvdG9jb2xzIiwiUHJvdG9jb2xTZXJ2aWNlIiwiX25ldHdvcmtzIiwiTmV0d29ya1NlcnZpY2UiLCJfZXJjMjAiLCJFUkMyMFNlcnZpY2UiLCJfcHJpY2VzIiwiUHJpY2VTZXJ2aWNlIiwiX3N0YXRpc3RpY3MiLCJTdGF0aXN0aWNzU2VydmljZSIsIl9jbGFpbWluZyIsIkNsYWltU2VydmljZSJdLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpaHViLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb3RvY29sU2VydmljZX0gZnJvbSBcIi4vcHJvdG9jb2wvcHJvdG9jb2wuc2VydmljZVwiO1xuaW1wb3J0IHtOZXR3b3JrU2VydmljZX0gZnJvbSBcIi4vbmV0d29yay9uZXR3b3JrLnNlcnZpY2VcIjtcbmltcG9ydCB7RVJDMjBTZXJ2aWNlfSBmcm9tIFwiLi9lcmMyMC9lcmMyMC5zZXJ2aWNlXCI7XG5pbXBvcnQge0xlbmRpbmdTZXJ2aWNlfSBmcm9tIFwiLi9sZW5kaW5nL2xlbmRpbmcuc2VydmljZVwiO1xuaW1wb3J0IHtGYXJtaW5nU2VydmljZX0gZnJvbSBcIi4vZmFybWluZy9mYXJtaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7UG9vbGluZ1NlcnZpY2V9IGZyb20gXCIuL3Bvb2xpbmcvcG9vbGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0ludmVzdFNlcnZpY2V9IGZyb20gXCIuL2ludmVzdC9pbnZlc3Quc2VydmljZVwiO1xuaW1wb3J0IHtQcmljZVNlcnZpY2V9IGZyb20gXCIuL3ByaWNlL3ByaWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7U3RhdGlzdGljc1NlcnZpY2V9IGZyb20gXCIuL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NsYWltU2VydmljZX0gZnJvbSBcIi4vY2xhaW1pbmcvY2xhaW1pbmcuc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgRGVmaWh1Yk1vZHVsZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9wcm90b2NvbHM6IFByb3RvY29sU2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9uZXR3b3JrczogTmV0d29ya1NlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfZXJjMjA6IEVSQzIwU2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9sZW5kaW5nOiBMZW5kaW5nU2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9mYXJtaW5nOiBGYXJtaW5nU2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9wb29saW5nOiBQb29saW5nU2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pbnZlc3Q6IEludmVzdFNlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfcHJpY2VzOiBQcmljZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3RhdGlzdGljczogU3RhdGlzdGljc1NlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2xhaW1pbmc6IENsYWltU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9pbnZlc3QgPSBuZXcgSW52ZXN0U2VydmljZSgpO1xuICAgICAgICB0aGlzLl9sZW5kaW5nID0gbmV3IExlbmRpbmdTZXJ2aWNlKHRoaXMuX2ludmVzdCk7XG4gICAgICAgIHRoaXMuX2Zhcm1pbmcgPSBuZXcgRmFybWluZ1NlcnZpY2UodGhpcy5faW52ZXN0KTtcbiAgICAgICAgdGhpcy5fcG9vbGluZyA9IG5ldyBQb29saW5nU2VydmljZSh0aGlzLl9pbnZlc3QpO1xuICAgICAgICB0aGlzLl9wcm90b2NvbHMgPSBuZXcgUHJvdG9jb2xTZXJ2aWNlKClcbiAgICAgICAgdGhpcy5fbmV0d29ya3MgPSBuZXcgTmV0d29ya1NlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5fZXJjMjAgPSBuZXcgRVJDMjBTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuX3ByaWNlcyA9IG5ldyBQcmljZVNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5fc3RhdGlzdGljcyA9IG5ldyBTdGF0aXN0aWNzU2VydmljZSgpO1xuICAgICAgICB0aGlzLl9jbGFpbWluZyA9IG5ldyBDbGFpbVNlcnZpY2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJvdG9jb2xzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2xzO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZXR3b3JrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25ldHdvcmtzO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcmMyMCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VyYzIwO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb29saW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9vbGluZztcbiAgICB9XG5cbiAgICBwdWJsaWMgZmFybWluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zhcm1pbmc7XG4gICAgfVxuXG4gICAgcHVibGljIGxlbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5kaW5nO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnZlc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZlc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIHByaWNlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaWNlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGlzdGljcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRpc3RpY3M7XG4gICAgfVxuXG4gICAgcHVibGljIGNsYWltaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xhaW1pbmc7XG4gICAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVhQSxhO0VBYVQseUJBQWM7SUFBQTs7SUFDVixLQUFLQyxPQUFMLEdBQWUsSUFBSUMscUJBQUosRUFBZjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsdUJBQUosQ0FBbUIsS0FBS0gsT0FBeEIsQ0FBaEI7SUFDQSxLQUFLSSxRQUFMLEdBQWdCLElBQUlDLHVCQUFKLENBQW1CLEtBQUtMLE9BQXhCLENBQWhCO0lBQ0EsS0FBS00sUUFBTCxHQUFnQixJQUFJQyx1QkFBSixDQUFtQixLQUFLUCxPQUF4QixDQUFoQjtJQUNBLEtBQUtRLFVBQUwsR0FBa0IsSUFBSUMseUJBQUosRUFBbEI7SUFDQSxLQUFLQyxTQUFMLEdBQWlCLElBQUlDLHVCQUFKLEVBQWpCO0lBQ0EsS0FBS0MsTUFBTCxHQUFjLElBQUlDLGlCQUFKLEVBQWQ7SUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBSUMsbUJBQUosRUFBZjtJQUNBLEtBQUtDLFdBQUwsR0FBbUIsSUFBSUMsNkJBQUosRUFBbkI7SUFDQSxLQUFLQyxTQUFMLEdBQWlCLElBQUlDLHNCQUFKLEVBQWpCO0VBQ0g7Ozs7V0FFRCxxQkFBbUI7TUFDZixPQUFPLEtBQUtYLFVBQVo7SUFDSDs7O1dBRUQsb0JBQWtCO01BQ2QsT0FBTyxLQUFLRSxTQUFaO0lBQ0g7OztXQUVELGlCQUFlO01BQ1gsT0FBTyxLQUFLRSxNQUFaO0lBQ0g7OztXQUVELG1CQUFpQjtNQUNiLE9BQU8sS0FBS04sUUFBWjtJQUNIOzs7V0FFRCxtQkFBaUI7TUFDYixPQUFPLEtBQUtGLFFBQVo7SUFDSDs7O1dBRUQsbUJBQWlCO01BQ2IsT0FBTyxLQUFLRixRQUFaO0lBQ0g7OztXQUVELGtCQUFnQjtNQUNaLE9BQU8sS0FBS0YsT0FBWjtJQUNIOzs7V0FFRCxrQkFBZ0I7TUFDWixPQUFPLEtBQUtjLE9BQVo7SUFDSDs7O1dBRUQsc0JBQW9CO01BQ2hCLE9BQU8sS0FBS0UsV0FBWjtJQUNIOzs7V0FFRCxvQkFBa0I7TUFDZCxPQUFPLEtBQUtFLFNBQVo7SUFDSCJ9