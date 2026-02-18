'use strict';

var chunkYB3VQRHJ_cjs = require('./chunk-YB3VQRHJ.cjs');
var React = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var Label = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "label",
      chunkYB3VQRHJ_cjs.__spreadValues({
        ref,
        className: chunkYB3VQRHJ_cjs.cn(
          "text-sm font-semibold tracking-wide uppercase leading-none",
          "peer-disabled:opacity-40 peer-disabled:cursor-not-allowed",
          className
        )
      }, props)
    );
  }
);
Label.displayName = "Label";

exports.Label = Label;
