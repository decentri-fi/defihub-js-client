"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefitrackModule = void 0;

var _protocol = require("./protocol/protocol.service");

var _network = require("./network/network.service");

var _erc = require("./erc20/erc20.service");

var _lending = require("./lending/lending.service");

var _farming = require("./farming/farming.service");

var _pooling = require("./pooling/pooling.service");

var _invest = require("./invest/invest.service");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DefitrackModule = /*#__PURE__*/function () {
  function DefitrackModule() {
    _classCallCheck(this, DefitrackModule);

    this._protocols = new _protocol.ProtocolService();
    this._networks = new _network.NetworkService();
    this._invest = new _invest.InvestService();
    this._erc20 = new _erc.ERC20Service();
    this._lending = new _lending.LendingService(this._invest);
    this._farming = new _farming.FarmingService(this._invest);
    this._pooling = new _pooling.PoolingService(this._invest);
  }

  _createClass(DefitrackModule, [{
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
  }]);

  return DefitrackModule;
}();

exports.DefitrackModule = DefitrackModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZpdHJhY2tNb2R1bGUiLCJfcHJvdG9jb2xzIiwiUHJvdG9jb2xTZXJ2aWNlIiwiX25ldHdvcmtzIiwiTmV0d29ya1NlcnZpY2UiLCJfaW52ZXN0IiwiSW52ZXN0U2VydmljZSIsIl9lcmMyMCIsIkVSQzIwU2VydmljZSIsIl9sZW5kaW5nIiwiTGVuZGluZ1NlcnZpY2UiLCJfZmFybWluZyIsIkZhcm1pbmdTZXJ2aWNlIiwiX3Bvb2xpbmciLCJQb29saW5nU2VydmljZSJdLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpdHJhY2subW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvdG9jb2xTZXJ2aWNlfSBmcm9tIFwiLi9wcm90b2NvbC9wcm90b2NvbC5zZXJ2aWNlXCI7XG5pbXBvcnQge05ldHdvcmtTZXJ2aWNlfSBmcm9tIFwiLi9uZXR3b3JrL25ldHdvcmsuc2VydmljZVwiO1xuaW1wb3J0IHtFUkMyMFNlcnZpY2V9IGZyb20gXCIuL2VyYzIwL2VyYzIwLnNlcnZpY2VcIjtcbmltcG9ydCB7TGVuZGluZ1NlcnZpY2V9IGZyb20gXCIuL2xlbmRpbmcvbGVuZGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0Zhcm1pbmdTZXJ2aWNlfSBmcm9tIFwiLi9mYXJtaW5nL2Zhcm1pbmcuc2VydmljZVwiO1xuaW1wb3J0IHtQb29saW5nU2VydmljZX0gZnJvbSBcIi4vcG9vbGluZy9wb29saW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7SW52ZXN0U2VydmljZX0gZnJvbSBcIi4vaW52ZXN0L2ludmVzdC5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBEZWZpdHJhY2tNb2R1bGUge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcHJvdG9jb2xzOiBQcm90b2NvbFNlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfbmV0d29ya3M6IE5ldHdvcmtTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VyYzIwOiBFUkMyMFNlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfbGVuZGluZzogTGVuZGluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfZmFybWluZzogRmFybWluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfcG9vbGluZzogUG9vbGluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfaW52ZXN0OiBJbnZlc3RTZXJ2aWNlXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcHJvdG9jb2xzID0gbmV3IFByb3RvY29sU2VydmljZSgpXG4gICAgICAgIHRoaXMuX25ldHdvcmtzID0gbmV3IE5ldHdvcmtTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuX2ludmVzdCA9IG5ldyBJbnZlc3RTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuX2VyYzIwID0gbmV3IEVSQzIwU2VydmljZSgpO1xuICAgICAgICB0aGlzLl9sZW5kaW5nID0gbmV3IExlbmRpbmdTZXJ2aWNlKHRoaXMuX2ludmVzdCk7XG4gICAgICAgIHRoaXMuX2Zhcm1pbmcgPSBuZXcgRmFybWluZ1NlcnZpY2UodGhpcy5faW52ZXN0KTtcbiAgICAgICAgdGhpcy5fcG9vbGluZyA9IG5ldyBQb29saW5nU2VydmljZSh0aGlzLl9pbnZlc3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcm90b2NvbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm90b2NvbHM7XG4gICAgfVxuXG4gICAgcHVibGljIG5ldHdvcmtzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmV0d29ya3M7XG4gICAgfVxuXG4gICAgcHVibGljIGVyYzIwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXJjMjA7XG4gICAgfVxuXG4gICAgcHVibGljIHBvb2xpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb29saW5nO1xuICAgIH1cblxuICAgIHB1YmxpYyBmYXJtaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmFybWluZztcbiAgICB9XG5cbiAgICBwdWJsaWMgbGVuZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xlbmRpbmc7XG4gICAgfVxuXG4gICAgcHVibGljIGludmVzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludmVzdDtcbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRWFBLGU7RUFVVCwyQkFBYztJQUFBOztJQUNWLEtBQUtDLFVBQUwsR0FBa0IsSUFBSUMseUJBQUosRUFBbEI7SUFDQSxLQUFLQyxTQUFMLEdBQWlCLElBQUlDLHVCQUFKLEVBQWpCO0lBQ0EsS0FBS0MsT0FBTCxHQUFlLElBQUlDLHFCQUFKLEVBQWY7SUFDQSxLQUFLQyxNQUFMLEdBQWMsSUFBSUMsaUJBQUosRUFBZDtJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsdUJBQUosQ0FBbUIsS0FBS0wsT0FBeEIsQ0FBaEI7SUFDQSxLQUFLTSxRQUFMLEdBQWdCLElBQUlDLHVCQUFKLENBQW1CLEtBQUtQLE9BQXhCLENBQWhCO0lBQ0EsS0FBS1EsUUFBTCxHQUFnQixJQUFJQyx1QkFBSixDQUFtQixLQUFLVCxPQUF4QixDQUFoQjtFQUNIOzs7O1dBRUQscUJBQW1CO01BQ2YsT0FBTyxLQUFLSixVQUFaO0lBQ0g7OztXQUVELG9CQUFrQjtNQUNkLE9BQU8sS0FBS0UsU0FBWjtJQUNIOzs7V0FFRCxpQkFBZTtNQUNYLE9BQU8sS0FBS0ksTUFBWjtJQUNIOzs7V0FFRCxtQkFBaUI7TUFDYixPQUFPLEtBQUtNLFFBQVo7SUFDSDs7O1dBRUQsbUJBQWlCO01BQ2IsT0FBTyxLQUFLRixRQUFaO0lBQ0g7OztXQUVELG1CQUFpQjtNQUNiLE9BQU8sS0FBS0YsUUFBWjtJQUNIOzs7V0FFRCxrQkFBZ0I7TUFDWixPQUFPLEtBQUtKLE9BQVo7SUFDSCJ9