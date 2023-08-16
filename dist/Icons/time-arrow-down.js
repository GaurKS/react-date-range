"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TimeArrowDown = /*#__PURE__*/function (_React$Component) {
  _inherits(TimeArrowDown, _React$Component);

  var _super = _createSuper(TimeArrowDown);

  function TimeArrowDown() {
    _classCallCheck(this, TimeArrowDown);

    return _super.apply(this, arguments);
  }

  _createClass(TimeArrowDown, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        width: "6",
        height: "4",
        className: "time-input-arrow",
        viewBox: "0 0 6 4",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: this.props.onClick
      }, /*#__PURE__*/_react.default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.76279 0.337514C0.588281 0.155247 0.30539 0.155247 0.130882 0.337514C-0.0436272 0.519648 -0.0436272 0.815248 0.130882 0.997381L2.68405 3.66418C2.85855 3.84631 3.14145 3.84631 3.31595 3.66418L5.86912 0.997381C6.04363 0.815248 6.04363 0.519648 5.86912 0.337514C5.69461 0.155247 5.41172 0.155247 5.23721 0.337514L2.99872 2.67551L0.76279 0.337514Z",
        fill: "#7A8699"
      }));
    }
  }]);

  return TimeArrowDown;
}(_react.default.Component);

TimeArrowDown.propTypes = {
  onClick: _propTypes.default.func.isRequired
};
var _default = TimeArrowDown;
exports.default = _default;