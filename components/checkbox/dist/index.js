"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _checkboxModule = _interopRequireDefault(require("./checkbox.module.scss"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Checkbox = (0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      partial = _ref.partial,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      checked = _ref.checked,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "partial", "onChange", "disabled", "checked"]);

  var _useState = (0, _react.useState)(!!checked),
      _useState2 = _slicedToArray(_useState, 2),
      isChecked = _useState2[0],
      setChecked = _useState2[1];

  (0, _react.useEffect)(function () {
    setChecked(checked);
  }, [checked]);

  var handleChange = function handleChange(e) {
    if (checked === undefined) {
      setChecked(e.target.checked);
    }

    if (onChange) {
      return onChange(e);
    }
  };

  var classes = (0, _classnames.default)(_checkboxModule.default.root, _defineProperty({}, _checkboxModule.default.partial, partial), _defineProperty({}, _checkboxModule.default.checked, isChecked), _defineProperty({}, _checkboxModule.default.disabled, disabled));
  return _react.default.createElement("label", {
    className: "".concat(className || '', " ").concat(classes)
  }, _react.default.createElement("input", _extends({
    type: "checkbox",
    checked: checked !== undefined ? checked : isChecked,
    disabled: disabled,
    onChange: handleChange
  }, otherProps, {
    ref: ref
  })), children && _react.default.createElement("span", {
    className: _checkboxModule.default.label
  }, children));
});
Checkbox.propTypes = {
  /** Control whether the checkbox is checked or unchecked */
  checked: _propTypes.default.bool,

  /** Show a partial checked effect */
  partial: _propTypes.default.bool
};
var _default = Checkbox;
exports.default = _default;

//# sourceMappingURL=index.js.map