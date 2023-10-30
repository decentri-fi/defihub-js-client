"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefiHubConfig = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var DefiHubConfig = /*#__PURE__*/_createClass(function DefiHubConfig() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "https://api.decentri.fi";
  var claimablesBaseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "https://claimables.decentri.fi";
  _classCallCheck(this, DefiHubConfig);
  this.baseUrl = baseUrl;
  this.claimablesBaseUrl = claimablesBaseUrl;
});
exports.DefiHubConfig = DefiHubConfig;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZpSHViQ29uZmlnIiwiX2NyZWF0ZUNsYXNzIiwiYmFzZVVybCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNsYWltYWJsZXNCYXNlVXJsIiwiX2NsYXNzQ2FsbENoZWNrIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpaHViLmNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGVmaUh1YkNvbmZpZyB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgYmFzZVVybDogc3RyaW5nO1xuICAgIHB1YmxpYyByZWFkb25seSBjbGFpbWFibGVzQmFzZVVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoYmFzZVVybDogc3RyaW5nID0gXCJodHRwczovL2FwaS5kZWNlbnRyaS5maVwiLFxuICAgICAgICAgICAgICAgIGNsYWltYWJsZXNCYXNlVXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vY2xhaW1hYmxlcy5kZWNlbnRyaS5maVwiKSB7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgICAgIHRoaXMuY2xhaW1hYmxlc0Jhc2VVcmwgPSBjbGFpbWFibGVzQmFzZVVybDtcbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBYUEsYUFBYSxnQkFBQUMsWUFBQSxDQUt0QixTQUFBRCxjQUFBLEVBQzBFO0VBQUEsSUFEOURFLE9BQWUsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcseUJBQXlCO0VBQUEsSUFDM0NHLGlCQUF5QixHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxnQ0FBZ0M7RUFBQUksZUFBQSxPQUFBUCxhQUFBO0VBQ3BFLElBQUksQ0FBQ0UsT0FBTyxHQUFHQSxPQUFPO0VBQ3RCLElBQUksQ0FBQ0ksaUJBQWlCLEdBQUdBLGlCQUFpQjtBQUM5QyxDQUFDO0FBQUFFLE9BQUEsQ0FBQVIsYUFBQSxHQUFBQSxhQUFBIn0=