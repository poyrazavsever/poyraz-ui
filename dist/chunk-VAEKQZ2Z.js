import { __objRest, __spreadValues, cn } from './chunk-L36ZMS3N.js';
import * as React from 'react';
import { jsx } from 'react/jsx-runtime';

var Label = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
      "label",
      __spreadValues({
        ref,
        className: cn(
          "text-sm font-semibold tracking-wide uppercase leading-none",
          "peer-disabled:opacity-40 peer-disabled:cursor-not-allowed",
          className
        )
      }, props)
    );
  }
);
Label.displayName = "Label";

export { Label };
