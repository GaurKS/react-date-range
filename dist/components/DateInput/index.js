"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dateFns = require("date-fns");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DateInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(DateInput, _PureComponent);

  var _super = _createSuper(DateInput);

  function DateInput(props, context) {
    var _this;

    _classCallCheck(this, DateInput);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "handleAutoDateFormatting", function (input, keyCode, e) {
      var allDateFormats = ['MMM DD, YYYY', 'DD-MMM-YYYY', 'YYYY-MM-DD', 'DD-MM-YYYY', 'MM-DD-YYYY'];
      var calendarViewFormats = ['MMM DD', 'MMMM YYYY'];
      var isShift = false;
      var seperator = '-';

      if (keyCode == 16) {
        isShift = true;
      }

      var receivedDateFormat = _this.props.dateDisplayFormat.toUpperCase(); // 'MMM DD, YYYY'
      // "YYYY-MM-DD";


      var stringAllowedDateFormats = allDateFormats.slice(0, 2).includes(receivedDateFormat); //  allow only neumeric

      if (keyCode === 'Backspace') return;

      if (calendarViewFormats.includes(receivedDateFormat)) {
        if (calendarViewFormats[1] === receivedDateFormat) {// do nothing, user has to type full month name
        }

        if (input.value.length === 3 && keyCode.trim().length && calendarViewFormats[0] === receivedDateFormat) input.value += ' ';
        return;
      }

      if (!stringAllowedDateFormats && allDateFormats.includes(receivedDateFormat) && (keyCode >= 48 && keyCode <= 57 || keyCode === 8 || keyCode <= 37 || keyCode <= 39 || keyCode >= 96 && keyCode <= 105) && !isShift) {
        if (receivedDateFormat !== allDateFormats[2]) {
          // DD-MM-YYYY
          // MM-DD-YYYY
          if ((input.value.length === 2 || input.value.length === 5) && keyCode !== 8) {
            input.value += seperator;
          }
        } else {
          // YYYY-MM-DD
          if ((input.value.length === 4 || input.value.length === 7) && input.value.split('-').length !== 3) {
            input.value += seperator;
          }
        }
      }

      if (stringAllowedDateFormats) {
        // MMM DD,YYYY
        if (receivedDateFormat === allDateFormats[0]) {
          if (input.value.length === 3 && keyCode.trim().length) {
            input.value += ' ';
          }

          if (input.value.length === 6 && keyCode !== ',') {
            input.value += ', ';
          }
        } else {
          // DD-MMM-YYYY
          if (input.value.length === 2 || input.value.length === 6) {
            input.value += seperator;
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      var value = _this.state.value;

      _this.handleAutoDateFormatting(e.target, e.key, e);

      if (e.key === 'Enter') {
        _this.update(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState({
        value: e.target.value,
        changed: true,
        invalid: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      var value = _this.state.value;

      _this.update(value);
    });

    _defineProperty(_assertThisInitialized(_this), "getMaxLengthForInput", function (receivedDateFormat) {
      if (['MMM DD, YYYY', 'DD-MMM-YYYY'].includes(receivedDateFormat)) return 12;
      if (receivedDateFormat === 'MMM DD') return 6;
      if (receivedDateFormat === 'MMMM YYYY') return 14;
      return 10;
    });

    _this.state = {
      invalid: false,
      changed: false,
      value: _this.formatDate(props)
    };
    return _this;
  }

  _createClass(DateInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = prevProps.value;

      if (!(0, _dateFns.isEqual)(value, this.props.value)) {
        this.setState({
          value: this.formatDate(this.props)
        });
      }
    }
  }, {
    key: "formatDate",
    value: function formatDate(_ref) {
      var value = _ref.value,
          dateDisplayFormat = _ref.dateDisplayFormat,
          dateOptions = _ref.dateOptions;

      if (value && (0, _dateFns.isValid)(value)) {
        return (0, _dateFns.format)(value, dateDisplayFormat, dateOptions);
      }

      return '';
    }
  }, {
    key: "update",
    value: function update(value) {
      var _this$state = this.state,
          invalid = _this$state.invalid,
          changed = _this$state.changed;

      if (invalid || !changed || !value) {
        return;
      }

      var _this$props = this.props,
          onChange = _this$props.onChange,
          dateDisplayFormat = _this$props.dateDisplayFormat,
          dateOptions = _this$props.dateOptions;
      var parsed = (0, _dateFns.parse)(value, dateDisplayFormat, new Date(), dateOptions);

      if ((0, _dateFns.isValid)(parsed)) {
        this.setState({
          changed: false
        }, function () {
          return onChange(parsed);
        });
      } else {
        this.setState({
          invalid: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          readOnly = _this$props2.readOnly,
          placeholder = _this$props2.placeholder,
          disabled = _this$props2.disabled,
          onFocus = _this$props2.onFocus,
          label = _this$props2.label,
          dateDisplayFormat = _this$props2.dateDisplayFormat;
      var _this$state2 = this.state,
          value = _this$state2.value,
          invalid = _this$state2.invalid;
      var receivedDateFormat = dateDisplayFormat.toUpperCase();
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat((0, _classnames.default)('rdrDateInput', className), " date-input-header")
      }, /*#__PURE__*/_react.default.createElement("div", null, label), /*#__PURE__*/_react.default.createElement("div", {
        className: "startdate-wrp"
      }, /*#__PURE__*/_react.default.createElement("input", {
        readOnly: readOnly,
        disabled: disabled,
        value: value,
        placeholder: placeholder,
        onKeyDown: this.onKeyDown,
        onChange: this.onChange,
        onBlur: this.onBlur,
        onFocus: onFocus,
        className: "form-control",
        maxLength: this.getMaxLengthForInput(receivedDateFormat)
      })), invalid && /*#__PURE__*/_react.default.createElement("span", {
        className: "rdrWarning"
      }, "\u26A0"));
    }
  }]);

  return DateInput;
}(_react.PureComponent);

DateInput.propTypes = {
  value: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  dateOptions: _propTypes.default.object,
  dateDisplayFormat: _propTypes.default.string,
  className: _propTypes.default.string,
  onFocus: _propTypes.default.func.isRequired,
  onChange: _propTypes.default.func.isRequired
};
DateInput.defaultProps = {
  readOnly: true,
  disabled: false,
  dateDisplayFormat: 'MMM D, YYYY'
};
var _default = DateInput;
exports.default = _default;