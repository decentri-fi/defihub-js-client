"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefitrackError = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var DefitrackError = /*#__PURE__*/_createClass(function DefitrackError(msg) {
  _classCallCheck(this, DefitrackError);
  this.msg = msg;
});
exports.DefitrackError = DefitrackError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZpdHJhY2tFcnJvciIsIl9jcmVhdGVDbGFzcyIsIm1zZyIsIl9jbGFzc0NhbGxDaGVjayIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi9zcmMvZXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERlZml0cmFja0Vycm9yIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1zZzogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKG1zZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubXNnID0gbXNnO1xuICAgIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFhQSxjQUFjLGdCQUFBQyxZQUFBLENBRXZCLFNBQUFELGVBQVlFLEdBQVcsRUFBRTtFQUFBQyxlQUFBLE9BQUFILGNBQUE7RUFDckIsSUFBSSxDQUFDRSxHQUFHLEdBQUdBLEdBQUc7QUFDbEIsQ0FBQztBQUFBRSxPQUFBLENBQUFKLGNBQUEsR0FBQUEsY0FBQSJ9