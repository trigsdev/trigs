"use strict";
var Db = Object.create;
var Rl = Object.defineProperty;
var Pb = Object.getOwnPropertyDescriptor;
var Mb = Object.getOwnPropertyNames;
var Nb = Object.getPrototypeOf,
  Bb = Object.prototype.hasOwnProperty;
var re = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Fb = (e, t) => {
    for (var n in t) Rl(e, n, { get: t[n], enumerable: !0 });
  },
  Rh = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let u of Mb(t))
        !Bb.call(e, u) &&
          u !== n &&
          Rl(e, u, {
            get: () => t[u],
            enumerable: !(r = Pb(t, u)) || r.enumerable,
          });
    return e;
  };
var Zs = (e, t, n) => (
    (n = e != null ? Db(Nb(e)) : {}),
    Rh(
      t || !e || !e.__esModule
        ? Rl(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  Ub = (e) => Rh(Rl({}, "__esModule", { value: !0 }), e);
var jh = re((te) => {
  "use strict";
  var Ks = Symbol.for("react.element"),
    Wb = Symbol.for("react.portal"),
    Hb = Symbol.for("react.fragment"),
    $b = Symbol.for("react.strict_mode"),
    zb = Symbol.for("react.profiler"),
    Vb = Symbol.for("react.provider"),
    qb = Symbol.for("react.context"),
    Gb = Symbol.for("react.forward_ref"),
    Yb = Symbol.for("react.suspense"),
    Xb = Symbol.for("react.memo"),
    Zb = Symbol.for("react.lazy"),
    Ah = Symbol.iterator;
  function Kb(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Ah && e[Ah]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Dh = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ph = Object.assign,
    Mh = {};
  function ha(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Mh),
      (this.updater = n || Dh);
  }
  ha.prototype.isReactComponent = {};
  ha.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  ha.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Nh() {}
  Nh.prototype = ha.prototype;
  function xd(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Mh),
      (this.updater = n || Dh);
  }
  var wd = (xd.prototype = new Nh());
  wd.constructor = xd;
  Ph(wd, ha.prototype);
  wd.isPureReactComponent = !0;
  var Lh = Array.isArray,
    Bh = Object.prototype.hasOwnProperty,
    Sd = { current: null },
    Fh = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Uh(e, t, n) {
    var r,
      u = {},
      s = null,
      f = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (f = t.ref),
      t.key !== void 0 && (s = "" + t.key),
      t))
        Bh.call(t, r) && !Fh.hasOwnProperty(r) && (u[r] = t[r]);
    var g = arguments.length - 2;
    if (g === 1) u.children = n;
    else if (1 < g) {
      for (var v = Array(g), b = 0; b < g; b++) v[b] = arguments[b + 2];
      u.children = v;
    }
    if (e && e.defaultProps)
      for (r in ((g = e.defaultProps), g)) u[r] === void 0 && (u[r] = g[r]);
    return {
      $$typeof: Ks,
      type: e,
      key: s,
      ref: f,
      props: u,
      _owner: Sd.current,
    };
  }
  function Jb(e, t) {
    return {
      $$typeof: Ks,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function kd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ks;
  }
  function Qb(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var Oh = /\/+/g;
  function yd(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? Qb("" + e.key)
      : t.toString(36);
  }
  function Al(e, t, n, r, u) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var f = !1;
    if (e === null) f = !0;
    else
      switch (s) {
        case "string":
        case "number":
          f = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Ks:
            case Wb:
              f = !0;
          }
      }
    if (f)
      return (
        (f = e),
        (u = u(f)),
        (e = r === "" ? "." + yd(f, 0) : r),
        Lh(u)
          ? ((n = ""),
            e != null && (n = e.replace(Oh, "$&/") + "/"),
            Al(u, t, n, "", function (b) {
              return b;
            }))
          : u != null &&
            (kd(u) &&
              (u = Jb(
                u,
                n +
                  (!u.key || (f && f.key === u.key)
                    ? ""
                    : ("" + u.key).replace(Oh, "$&/") + "/") +
                  e
              )),
            t.push(u)),
        1
      );
    if (((f = 0), (r = r === "" ? "." : r + ":"), Lh(e)))
      for (var g = 0; g < e.length; g++) {
        s = e[g];
        var v = r + yd(s, g);
        f += Al(s, t, n, v, u);
      }
    else if (((v = Kb(e)), typeof v == "function"))
      for (e = v.call(e), g = 0; !(s = e.next()).done; )
        (s = s.value), (v = r + yd(s, g++)), (f += Al(s, t, n, v, u));
    else if (s === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return f;
  }
  function Il(e, t, n) {
    if (e == null) return e;
    var r = [],
      u = 0;
    return (
      Al(e, r, "", "", function (s) {
        return t.call(n, s, u++);
      }),
      r
    );
  }
  function e1(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var vt = { current: null },
    Ll = { transition: null },
    t1 = {
      ReactCurrentDispatcher: vt,
      ReactCurrentBatchConfig: Ll,
      ReactCurrentOwner: Sd,
    };
  te.Children = {
    map: Il,
    forEach: function (e, t, n) {
      Il(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Il(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Il(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!kd(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  te.Component = ha;
  te.Fragment = Hb;
  te.Profiler = zb;
  te.PureComponent = xd;
  te.StrictMode = $b;
  te.Suspense = Yb;
  te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t1;
  te.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = Ph({}, e.props),
      u = e.key,
      s = e.ref,
      f = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((s = t.ref), (f = Sd.current)),
        t.key !== void 0 && (u = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var g = e.type.defaultProps;
      for (v in t)
        Bh.call(t, v) &&
          !Fh.hasOwnProperty(v) &&
          (r[v] = t[v] === void 0 && g !== void 0 ? g[v] : t[v]);
    }
    var v = arguments.length - 2;
    if (v === 1) r.children = n;
    else if (1 < v) {
      g = Array(v);
      for (var b = 0; b < v; b++) g[b] = arguments[b + 2];
      r.children = g;
    }
    return { $$typeof: Ks, type: e.type, key: u, ref: s, props: r, _owner: f };
  };
  te.createContext = function (e) {
    return (
      (e = {
        $$typeof: qb,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: Vb, _context: e }),
      (e.Consumer = e)
    );
  };
  te.createElement = Uh;
  te.createFactory = function (e) {
    var t = Uh.bind(null, e);
    return (t.type = e), t;
  };
  te.createRef = function () {
    return { current: null };
  };
  te.forwardRef = function (e) {
    return { $$typeof: Gb, render: e };
  };
  te.isValidElement = kd;
  te.lazy = function (e) {
    return { $$typeof: Zb, _payload: { _status: -1, _result: e }, _init: e1 };
  };
  te.memo = function (e, t) {
    return { $$typeof: Xb, type: e, compare: t === void 0 ? null : t };
  };
  te.startTransition = function (e) {
    var t = Ll.transition;
    Ll.transition = {};
    try {
      e();
    } finally {
      Ll.transition = t;
    }
  };
  te.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  te.useCallback = function (e, t) {
    return vt.current.useCallback(e, t);
  };
  te.useContext = function (e) {
    return vt.current.useContext(e);
  };
  te.useDebugValue = function () {};
  te.useDeferredValue = function (e) {
    return vt.current.useDeferredValue(e);
  };
  te.useEffect = function (e, t) {
    return vt.current.useEffect(e, t);
  };
  te.useId = function () {
    return vt.current.useId();
  };
  te.useImperativeHandle = function (e, t, n) {
    return vt.current.useImperativeHandle(e, t, n);
  };
  te.useInsertionEffect = function (e, t) {
    return vt.current.useInsertionEffect(e, t);
  };
  te.useLayoutEffect = function (e, t) {
    return vt.current.useLayoutEffect(e, t);
  };
  te.useMemo = function (e, t) {
    return vt.current.useMemo(e, t);
  };
  te.useReducer = function (e, t, n) {
    return vt.current.useReducer(e, t, n);
  };
  te.useRef = function (e) {
    return vt.current.useRef(e);
  };
  te.useState = function (e) {
    return vt.current.useState(e);
  };
  te.useSyncExternalStore = function (e, t, n) {
    return vt.current.useSyncExternalStore(e, t, n);
  };
  te.useTransition = function () {
    return vt.current.useTransition();
  };
  te.version = "18.2.0";
});
var Wh = re((ne, Ol) => {
  "use strict";
  process.env.NODE_ENV !== "production" &&
    (function () {
      "use strict";
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
          "function" &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var e = "18.2.0",
        t = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        s = Symbol.for("react.profiler"),
        f = Symbol.for("react.provider"),
        g = Symbol.for("react.context"),
        v = Symbol.for("react.forward_ref"),
        b = Symbol.for("react.suspense"),
        x = Symbol.for("react.suspense_list"),
        T = Symbol.for("react.memo"),
        D = Symbol.for("react.lazy"),
        L = Symbol.for("react.offscreen"),
        B = Symbol.iterator,
        Z = "@@iterator";
      function O(_) {
        if (_ === null || typeof _ != "object") return null;
        var S = (B && _[B]) || _[Z];
        return typeof S == "function" ? S : null;
      }
      var K = { current: null },
        G = { transition: null },
        se = {
          current: null,
          isBatchingLegacy: !1,
          didScheduleLegacyUpdate: !1,
        },
        Se = { current: null },
        Be = {},
        ge = null;
      function N(_) {
        ge = _;
      }
      (Be.setExtraStackFrame = function (_) {
        ge = _;
      }),
        (Be.getCurrentStack = null),
        (Be.getStackAddendum = function () {
          var _ = "";
          ge && (_ += ge);
          var S = Be.getCurrentStack;
          return S && (_ += S() || ""), _;
        });
      var ke = !1,
        St = !1,
        Fe = !1,
        en = !1,
        Lt = !1,
        Wt = {
          ReactCurrentDispatcher: K,
          ReactCurrentBatchConfig: G,
          ReactCurrentOwner: Se,
        };
      (Wt.ReactDebugCurrentFrame = Be), (Wt.ReactCurrentActQueue = se);
      function st(_) {
        {
          for (
            var S = arguments.length, E = new Array(S > 1 ? S - 1 : 0), C = 1;
            C < S;
            C++
          )
            E[C - 1] = arguments[C];
          yr("warn", _, E);
        }
      }
      function $(_) {
        {
          for (
            var S = arguments.length, E = new Array(S > 1 ? S - 1 : 0), C = 1;
            C < S;
            C++
          )
            E[C - 1] = arguments[C];
          yr("error", _, E);
        }
      }
      function yr(_, S, E) {
        {
          var C = Wt.ReactDebugCurrentFrame,
            P = C.getStackAddendum();
          P !== "" && ((S += "%s"), (E = E.concat([P])));
          var z = E.map(function (j) {
            return String(j);
          });
          z.unshift("Warning: " + S),
            Function.prototype.apply.call(console[_], console, z);
        }
      }
      var Ot = {};
      function xn(_, S) {
        {
          var E = _.constructor,
            C = (E && (E.displayName || E.name)) || "ReactClass",
            P = C + "." + S;
          if (Ot[P]) return;
          $(
            "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
            S,
            C
          ),
            (Ot[P] = !0);
        }
      }
      var tn = {
          isMounted: function (_) {
            return !1;
          },
          enqueueForceUpdate: function (_, S, E) {
            xn(_, "forceUpdate");
          },
          enqueueReplaceState: function (_, S, E, C) {
            xn(_, "replaceState");
          },
          enqueueSetState: function (_, S, E, C) {
            xn(_, "setState");
          },
        },
        ot = Object.assign,
        jn = {};
      Object.freeze(jn);
      function ve(_, S, E) {
        (this.props = _),
          (this.context = S),
          (this.refs = jn),
          (this.updater = E || tn);
      }
      (ve.prototype.isReactComponent = {}),
        (ve.prototype.setState = function (_, S) {
          if (typeof _ != "object" && typeof _ != "function" && _ != null)
            throw new Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, _, S, "setState");
        }),
        (ve.prototype.forceUpdate = function (_) {
          this.updater.enqueueForceUpdate(this, _, "forceUpdate");
        });
      {
        var Ie = {
            isMounted: [
              "isMounted",
              "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
            ],
            replaceState: [
              "replaceState",
              "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
            ],
          },
          Wn = function (_, S) {
            Object.defineProperty(ve.prototype, _, {
              get: function () {
                st(
                  "%s(...) is deprecated in plain JavaScript React classes. %s",
                  S[0],
                  S[1]
                );
              },
            });
          };
        for (var Hn in Ie) Ie.hasOwnProperty(Hn) && Wn(Hn, Ie[Hn]);
      }
      function $n() {}
      $n.prototype = ve.prototype;
      function xr(_, S, E) {
        (this.props = _),
          (this.context = S),
          (this.refs = jn),
          (this.updater = E || tn);
      }
      var nn = (xr.prototype = new $n());
      (nn.constructor = xr),
        ot(nn, ve.prototype),
        (nn.isPureReactComponent = !0);
      function hu() {
        var _ = { current: null };
        return Object.seal(_), _;
      }
      var pu = Array.isArray;
      function Ue(_) {
        return pu(_);
      }
      function De(_) {
        {
          var S = typeof Symbol == "function" && Symbol.toStringTag,
            E = (S && _[Symbol.toStringTag]) || _.constructor.name || "Object";
          return E;
        }
      }
      function mu(_) {
        try {
          return zn(_), !1;
        } catch {
          return !0;
        }
      }
      function zn(_) {
        return "" + _;
      }
      function ht(_) {
        if (mu(_))
          return (
            $(
              "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
              De(_)
            ),
            zn(_)
          );
      }
      function Oa(_, S, E) {
        var C = _.displayName;
        if (C) return C;
        var P = S.displayName || S.name || "";
        return P !== "" ? E + "(" + P + ")" : E;
      }
      function Vn(_) {
        return _.displayName || "Context";
      }
      function Ht(_) {
        if (_ == null) return null;
        if (
          (typeof _.tag == "number" &&
            $(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          typeof _ == "function")
        )
          return _.displayName || _.name || null;
        if (typeof _ == "string") return _;
        switch (_) {
          case r:
            return "Fragment";
          case n:
            return "Portal";
          case s:
            return "Profiler";
          case u:
            return "StrictMode";
          case b:
            return "Suspense";
          case x:
            return "SuspenseList";
        }
        if (typeof _ == "object")
          switch (_.$$typeof) {
            case g:
              var S = _;
              return Vn(S) + ".Consumer";
            case f:
              var E = _;
              return Vn(E._context) + ".Provider";
            case v:
              return Oa(_, _.render, "ForwardRef");
            case T:
              var C = _.displayName || null;
              return C !== null ? C : Ht(_.type) || "Memo";
            case D: {
              var P = _,
                z = P._payload,
                j = P._init;
              try {
                return Ht(j(z));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var qn = Object.prototype.hasOwnProperty,
        gu = { key: !0, ref: !0, __self: !0, __source: !0 },
        Gn,
        oi,
        Yn;
      Yn = {};
      function $t(_) {
        if (qn.call(_, "ref")) {
          var S = Object.getOwnPropertyDescriptor(_, "ref").get;
          if (S && S.isReactWarning) return !1;
        }
        return _.ref !== void 0;
      }
      function ze(_) {
        if (qn.call(_, "key")) {
          var S = Object.getOwnPropertyDescriptor(_, "key").get;
          if (S && S.isReactWarning) return !1;
        }
        return _.key !== void 0;
      }
      function _u(_, S) {
        var E = function () {
          Gn ||
            ((Gn = !0),
            $(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              S
            ));
        };
        (E.isReactWarning = !0),
          Object.defineProperty(_, "key", { get: E, configurable: !0 });
      }
      function Da(_, S) {
        var E = function () {
          oi ||
            ((oi = !0),
            $(
              "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              S
            ));
        };
        (E.isReactWarning = !0),
          Object.defineProperty(_, "ref", { get: E, configurable: !0 });
      }
      function Pa(_) {
        if (
          typeof _.ref == "string" &&
          Se.current &&
          _.__self &&
          Se.current.stateNode !== _.__self
        ) {
          var S = Ht(Se.current.type);
          Yn[S] ||
            ($(
              'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
              S,
              _.ref
            ),
            (Yn[S] = !0));
        }
      }
      var li = function (_, S, E, C, P, z, j) {
        var Y = { $$typeof: t, type: _, key: S, ref: E, props: j, _owner: z };
        return (
          (Y._store = {}),
          Object.defineProperty(Y._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(Y, "_self", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: C,
          }),
          Object.defineProperty(Y, "_source", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: P,
          }),
          Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)),
          Y
        );
      };
      function bu(_, S, E) {
        var C,
          P = {},
          z = null,
          j = null,
          Y = null,
          Q = null;
        if (S != null) {
          $t(S) && ((j = S.ref), Pa(S)),
            ze(S) && (ht(S.key), (z = "" + S.key)),
            (Y = S.__self === void 0 ? null : S.__self),
            (Q = S.__source === void 0 ? null : S.__source);
          for (C in S) qn.call(S, C) && !gu.hasOwnProperty(C) && (P[C] = S[C]);
        }
        var ie = arguments.length - 2;
        if (ie === 1) P.children = E;
        else if (ie > 1) {
          for (var de = Array(ie), he = 0; he < ie; he++)
            de[he] = arguments[he + 2];
          Object.freeze && Object.freeze(de), (P.children = de);
        }
        if (_ && _.defaultProps) {
          var _e = _.defaultProps;
          for (C in _e) P[C] === void 0 && (P[C] = _e[C]);
        }
        if (z || j) {
          var Ae =
            typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          z && _u(P, Ae), j && Da(P, Ae);
        }
        return li(_, z, j, Y, Q, Se.current, P);
      }
      function Ma(_, S) {
        var E = li(_.type, S, _.ref, _._self, _._source, _._owner, _.props);
        return E;
      }
      function ci(_, S, E) {
        if (_ == null)
          throw new Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              _ +
              "."
          );
        var C,
          P = ot({}, _.props),
          z = _.key,
          j = _.ref,
          Y = _._self,
          Q = _._source,
          ie = _._owner;
        if (S != null) {
          $t(S) && ((j = S.ref), (ie = Se.current)),
            ze(S) && (ht(S.key), (z = "" + S.key));
          var de;
          _.type && _.type.defaultProps && (de = _.type.defaultProps);
          for (C in S)
            qn.call(S, C) &&
              !gu.hasOwnProperty(C) &&
              (S[C] === void 0 && de !== void 0
                ? (P[C] = de[C])
                : (P[C] = S[C]));
        }
        var he = arguments.length - 2;
        if (he === 1) P.children = E;
        else if (he > 1) {
          for (var _e = Array(he), Ae = 0; Ae < he; Ae++)
            _e[Ae] = arguments[Ae + 2];
          P.children = _e;
        }
        return li(_.type, z, j, Y, Q, ie, P);
      }
      function rn(_) {
        return typeof _ == "object" && _ !== null && _.$$typeof === t;
      }
      var Ve = ".",
        vu = ":";
      function yu(_) {
        var S = /[=:]/g,
          E = { "=": "=0", ":": "=2" },
          C = _.replace(S, function (P) {
            return E[P];
          });
        return "$" + C;
      }
      var un = !1,
        fi = /\/+/g;
      function di(_) {
        return _.replace(fi, "$&/");
      }
      function wr(_, S) {
        return typeof _ == "object" && _ !== null && _.key != null
          ? (ht(_.key), yu("" + _.key))
          : S.toString(36);
      }
      function Xn(_, S, E, C, P) {
        var z = typeof _;
        (z === "undefined" || z === "boolean") && (_ = null);
        var j = !1;
        if (_ === null) j = !0;
        else
          switch (z) {
            case "string":
            case "number":
              j = !0;
              break;
            case "object":
              switch (_.$$typeof) {
                case t:
                case n:
                  j = !0;
              }
          }
        if (j) {
          var Y = _,
            Q = P(Y),
            ie = C === "" ? Ve + wr(Y, 0) : C;
          if (Ue(Q)) {
            var de = "";
            ie != null && (de = di(ie) + "/"),
              Xn(Q, S, de, "", function (Qa) {
                return Qa;
              });
          } else
            Q != null &&
              (rn(Q) &&
                (Q.key && (!Y || Y.key !== Q.key) && ht(Q.key),
                (Q = Ma(
                  Q,
                  E +
                    (Q.key && (!Y || Y.key !== Q.key)
                      ? di("" + Q.key) + "/"
                      : "") +
                    ie
                ))),
              S.push(Q));
          return 1;
        }
        var he,
          _e,
          Ae = 0,
          We = C === "" ? Ve : C + vu;
        if (Ue(_))
          for (var ir = 0; ir < _.length; ir++)
            (he = _[ir]), (_e = We + wr(he, ir)), (Ae += Xn(he, S, E, _e, P));
        else {
          var Ci = O(_);
          if (typeof Ci == "function") {
            var Mr = _;
            Ci === Mr.entries &&
              (un ||
                st(
                  "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
                ),
              (un = !0));
            for (var Iu = Ci.call(Mr), Nr, Ja = 0; !(Nr = Iu.next()).done; )
              (he = Nr.value),
                (_e = We + wr(he, Ja++)),
                (Ae += Xn(he, S, E, _e, P));
          } else if (z === "object") {
            var Au = String(_);
            throw new Error(
              "Objects are not valid as a React child (found: " +
                (Au === "[object Object]"
                  ? "object with keys {" + Object.keys(_).join(", ") + "}"
                  : Au) +
                "). If you meant to render a collection of children, use an array instead."
            );
          }
        }
        return Ae;
      }
      function Sr(_, S, E) {
        if (_ == null) return _;
        var C = [],
          P = 0;
        return (
          Xn(_, C, "", "", function (z) {
            return S.call(E, z, P++);
          }),
          C
        );
      }
      function Na(_) {
        var S = 0;
        return (
          Sr(_, function () {
            S++;
          }),
          S
        );
      }
      function Ba(_, S, E) {
        Sr(
          _,
          function () {
            S.apply(this, arguments);
          },
          E
        );
      }
      function xu(_) {
        return (
          Sr(_, function (S) {
            return S;
          }) || []
        );
      }
      function wn(_) {
        if (!rn(_))
          throw new Error(
            "React.Children.only expected to receive a single React element child."
          );
        return _;
      }
      function hi(_) {
        var S = {
          $$typeof: g,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        };
        S.Provider = { $$typeof: f, _context: S };
        var E = !1,
          C = !1,
          P = !1;
        {
          var z = { $$typeof: g, _context: S };
          Object.defineProperties(z, {
            Provider: {
              get: function () {
                return (
                  C ||
                    ((C = !0),
                    $(
                      "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?"
                    )),
                  S.Provider
                );
              },
              set: function (j) {
                S.Provider = j;
              },
            },
            _currentValue: {
              get: function () {
                return S._currentValue;
              },
              set: function (j) {
                S._currentValue = j;
              },
            },
            _currentValue2: {
              get: function () {
                return S._currentValue2;
              },
              set: function (j) {
                S._currentValue2 = j;
              },
            },
            _threadCount: {
              get: function () {
                return S._threadCount;
              },
              set: function (j) {
                S._threadCount = j;
              },
            },
            Consumer: {
              get: function () {
                return (
                  E ||
                    ((E = !0),
                    $(
                      "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
                    )),
                  S.Consumer
                );
              },
            },
            displayName: {
              get: function () {
                return S.displayName;
              },
              set: function (j) {
                P ||
                  (st(
                    "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                    j
                  ),
                  (P = !0));
              },
            },
          }),
            (S.Consumer = z);
        }
        return (S._currentRenderer = null), (S._currentRenderer2 = null), S;
      }
      var Sn = -1,
        kr = 0,
        Pe = 1,
        Fa = 2;
      function Ua(_) {
        if (_._status === Sn) {
          var S = _._result,
            E = S();
          if (
            (E.then(
              function (z) {
                if (_._status === kr || _._status === Sn) {
                  var j = _;
                  (j._status = Pe), (j._result = z);
                }
              },
              function (z) {
                if (_._status === kr || _._status === Sn) {
                  var j = _;
                  (j._status = Fa), (j._result = z);
                }
              }
            ),
            _._status === Sn)
          ) {
            var C = _;
            (C._status = kr), (C._result = E);
          }
        }
        if (_._status === Pe) {
          var P = _._result;
          return (
            P === void 0 &&
              $(
                `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
                P
              ),
            "default" in P ||
              $(
                `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
                P
              ),
            P.default
          );
        } else throw _._result;
      }
      function ja(_) {
        var S = { _status: Sn, _result: _ },
          E = { $$typeof: D, _payload: S, _init: Ua };
        {
          var C, P;
          Object.defineProperties(E, {
            defaultProps: {
              configurable: !0,
              get: function () {
                return C;
              },
              set: function (z) {
                $(
                  "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
                ),
                  (C = z),
                  Object.defineProperty(E, "defaultProps", { enumerable: !0 });
              },
            },
            propTypes: {
              configurable: !0,
              get: function () {
                return P;
              },
              set: function (z) {
                $(
                  "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
                ),
                  (P = z),
                  Object.defineProperty(E, "propTypes", { enumerable: !0 });
              },
            },
          });
        }
        return E;
      }
      function Wa(_) {
        _ != null && _.$$typeof === T
          ? $(
              "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
            )
          : typeof _ != "function"
          ? $(
              "forwardRef requires a render function but was given %s.",
              _ === null ? "null" : typeof _
            )
          : _.length !== 0 &&
            _.length !== 2 &&
            $(
              "forwardRef render functions accept exactly two parameters: props and ref. %s",
              _.length === 1
                ? "Did you forget to use the ref parameter?"
                : "Any additional parameter will be undefined."
            ),
          _ != null &&
            (_.defaultProps != null || _.propTypes != null) &&
            $(
              "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"
            );
        var S = { $$typeof: v, render: _ };
        {
          var E;
          Object.defineProperty(S, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return E;
            },
            set: function (C) {
              (E = C), !_.name && !_.displayName && (_.displayName = C);
            },
          });
        }
        return S;
      }
      var pi;
      pi = Symbol.for("react.module.reference");
      function wu(_) {
        return !!(
          typeof _ == "string" ||
          typeof _ == "function" ||
          _ === r ||
          _ === s ||
          Lt ||
          _ === u ||
          _ === b ||
          _ === x ||
          en ||
          _ === L ||
          ke ||
          St ||
          Fe ||
          (typeof _ == "object" &&
            _ !== null &&
            (_.$$typeof === D ||
              _.$$typeof === T ||
              _.$$typeof === f ||
              _.$$typeof === g ||
              _.$$typeof === v ||
              _.$$typeof === pi ||
              _.getModuleId !== void 0))
        );
      }
      function Ha(_, S) {
        wu(_) ||
          $(
            "memo: The first argument must be a component. Instead received: %s",
            _ === null ? "null" : typeof _
          );
        var E = { $$typeof: T, type: _, compare: S === void 0 ? null : S };
        {
          var C;
          Object.defineProperty(E, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return C;
            },
            set: function (P) {
              (C = P), !_.name && !_.displayName && (_.displayName = P);
            },
          });
        }
        return E;
      }
      function Me() {
        var _ = K.current;
        return (
          _ === null &&
            $(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
          _
        );
      }
      function je(_) {
        var S = Me();
        if (_._context !== void 0) {
          var E = _._context;
          E.Consumer === _
            ? $(
                "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"
              )
            : E.Provider === _ &&
              $(
                "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?"
              );
        }
        return S.useContext(_);
      }
      function $a(_) {
        var S = Me();
        return S.useState(_);
      }
      function za(_, S, E) {
        var C = Me();
        return C.useReducer(_, S, E);
      }
      function Va(_) {
        var S = Me();
        return S.useRef(_);
      }
      function Su(_, S) {
        var E = Me();
        return E.useEffect(_, S);
      }
      function ku(_, S) {
        var E = Me();
        return E.useInsertionEffect(_, S);
      }
      function qa(_, S) {
        var E = Me();
        return E.useLayoutEffect(_, S);
      }
      function Ga(_, S) {
        var E = Me();
        return E.useCallback(_, S);
      }
      function Zn(_, S) {
        var E = Me();
        return E.useMemo(_, S);
      }
      function Tr(_, S, E) {
        var C = Me();
        return C.useImperativeHandle(_, S, E);
      }
      function an(_, S) {
        {
          var E = Me();
          return E.useDebugValue(_, S);
        }
      }
      function Er() {
        var _ = Me();
        return _.useTransition();
      }
      function Cr(_) {
        var S = Me();
        return S.useDeferredValue(_);
      }
      function Kn() {
        var _ = Me();
        return _.useId();
      }
      function mi(_, S, E) {
        var C = Me();
        return C.useSyncExternalStore(_, S, E);
      }
      var sn = 0,
        Rr,
        pt,
        kn,
        on,
        Tn,
        En,
        ln;
      function Jn() {}
      Jn.__reactDisabledLog = !0;
      function gi() {
        {
          if (sn === 0) {
            (Rr = console.log),
              (pt = console.info),
              (kn = console.warn),
              (on = console.error),
              (Tn = console.group),
              (En = console.groupCollapsed),
              (ln = console.groupEnd);
            var _ = {
              configurable: !0,
              enumerable: !0,
              value: Jn,
              writable: !0,
            };
            Object.defineProperties(console, {
              info: _,
              log: _,
              warn: _,
              error: _,
              group: _,
              groupCollapsed: _,
              groupEnd: _,
            });
          }
          sn++;
        }
      }
      function _i() {
        {
          if ((sn--, sn === 0)) {
            var _ = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, {
              log: ot({}, _, { value: Rr }),
              info: ot({}, _, { value: pt }),
              warn: ot({}, _, { value: kn }),
              error: ot({}, _, { value: on }),
              group: ot({}, _, { value: Tn }),
              groupCollapsed: ot({}, _, { value: En }),
              groupEnd: ot({}, _, { value: ln }),
            });
          }
          sn < 0 &&
            $(
              "disabledDepth fell below zero. This is a bug in React. Please file an issue."
            );
        }
      }
      var Ge = Wt.ReactCurrentDispatcher,
        bi;
      function Ir(_, S, E) {
        {
          if (bi === void 0)
            try {
              throw Error();
            } catch (P) {
              var C = P.stack.trim().match(/\n( *(at )?)/);
              bi = (C && C[1]) || "";
            }
          return (
            `
` +
            bi +
            _
          );
        }
      }
      var Ar = !1,
        Lr;
      {
        var Tu = typeof WeakMap == "function" ? WeakMap : Map;
        Lr = new Tu();
      }
      function mt(_, S) {
        if (!_ || Ar) return "";
        {
          var E = Lr.get(_);
          if (E !== void 0) return E;
        }
        var C;
        Ar = !0;
        var P = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var z;
        (z = Ge.current), (Ge.current = null), gi();
        try {
          if (S) {
            var j = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(j.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(j, []);
              } catch (We) {
                C = We;
              }
              Reflect.construct(_, [], j);
            } else {
              try {
                j.call();
              } catch (We) {
                C = We;
              }
              _.call(j.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (We) {
              C = We;
            }
            _();
          }
        } catch (We) {
          if (We && C && typeof We.stack == "string") {
            for (
              var Y = We.stack.split(`
`),
                Q = C.stack.split(`
`),
                ie = Y.length - 1,
                de = Q.length - 1;
              ie >= 1 && de >= 0 && Y[ie] !== Q[de];

            )
              de--;
            for (; ie >= 1 && de >= 0; ie--, de--)
              if (Y[ie] !== Q[de]) {
                if (ie !== 1 || de !== 1)
                  do
                    if ((ie--, de--, de < 0 || Y[ie] !== Q[de])) {
                      var he =
                        `
` + Y[ie].replace(" at new ", " at ");
                      return (
                        _.displayName &&
                          he.includes("<anonymous>") &&
                          (he = he.replace("<anonymous>", _.displayName)),
                        typeof _ == "function" && Lr.set(_, he),
                        he
                      );
                    }
                  while (ie >= 1 && de >= 0);
                break;
              }
          }
        } finally {
          (Ar = !1), (Ge.current = z), _i(), (Error.prepareStackTrace = P);
        }
        var _e = _ ? _.displayName || _.name : "",
          Ae = _e ? Ir(_e) : "";
        return typeof _ == "function" && Lr.set(_, Ae), Ae;
      }
      function cn(_, S, E) {
        return mt(_, !1);
      }
      function zt(_) {
        var S = _.prototype;
        return !!(S && S.isReactComponent);
      }
      function Cn(_, S, E) {
        if (_ == null) return "";
        if (typeof _ == "function") return mt(_, zt(_));
        if (typeof _ == "string") return Ir(_);
        switch (_) {
          case b:
            return Ir("Suspense");
          case x:
            return Ir("SuspenseList");
        }
        if (typeof _ == "object")
          switch (_.$$typeof) {
            case v:
              return cn(_.render);
            case T:
              return Cn(_.type, S, E);
            case D: {
              var C = _,
                P = C._payload,
                z = C._init;
              try {
                return Cn(z(P), S, E);
              } catch {}
            }
          }
        return "";
      }
      var qe = {},
        Dt = Wt.ReactDebugCurrentFrame;
      function Qn(_) {
        if (_) {
          var S = _._owner,
            E = Cn(_.type, _._source, S ? S.type : null);
          Dt.setExtraStackFrame(E);
        } else Dt.setExtraStackFrame(null);
      }
      function er(_, S, E, C, P) {
        {
          var z = Function.call.bind(qn);
          for (var j in _)
            if (z(_, j)) {
              var Y = void 0;
              try {
                if (typeof _[j] != "function") {
                  var Q = Error(
                    (C || "React class") +
                      ": " +
                      E +
                      " type `" +
                      j +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof _[j] +
                      "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  throw ((Q.name = "Invariant Violation"), Q);
                }
                Y = _[j](
                  S,
                  j,
                  C,
                  E,
                  null,
                  "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                );
              } catch (ie) {
                Y = ie;
              }
              Y &&
                !(Y instanceof Error) &&
                (Qn(P),
                $(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  C || "React class",
                  E,
                  j,
                  typeof Y
                ),
                Qn(null)),
                Y instanceof Error &&
                  !(Y.message in qe) &&
                  ((qe[Y.message] = !0),
                  Qn(P),
                  $("Failed %s type: %s", E, Y.message),
                  Qn(null));
            }
        }
      }
      function fn(_) {
        if (_) {
          var S = _._owner,
            E = Cn(_.type, _._source, S ? S.type : null);
          N(E);
        } else N(null);
      }
      var tr;
      tr = !1;
      function kt() {
        if (Se.current) {
          var _ = Ht(Se.current.type);
          if (_)
            return (
              `

Check the render method of \`` +
              _ +
              "`."
            );
        }
        return "";
      }
      function dn(_) {
        if (_ !== void 0) {
          var S = _.fileName.replace(/^.*[\\\/]/, ""),
            E = _.lineNumber;
          return (
            `

Check your code at ` +
            S +
            ":" +
            E +
            "."
          );
        }
        return "";
      }
      function Vt(_) {
        return _ != null ? dn(_.__source) : "";
      }
      var Or = {};
      function Ye(_) {
        var S = kt();
        if (!S) {
          var E = typeof _ == "string" ? _ : _.displayName || _.name;
          E &&
            (S =
              `

Check the top-level render call using <` +
              E +
              ">.");
        }
        return S;
      }
      function Tt(_, S) {
        if (!(!_._store || _._store.validated || _.key != null)) {
          _._store.validated = !0;
          var E = Ye(S);
          if (!Or[E]) {
            Or[E] = !0;
            var C = "";
            _ &&
              _._owner &&
              _._owner !== Se.current &&
              (C = " It was passed a child from " + Ht(_._owner.type) + "."),
              fn(_),
              $(
                'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                E,
                C
              ),
              fn(null);
          }
        }
      }
      function vi(_, S) {
        if (typeof _ == "object") {
          if (Ue(_))
            for (var E = 0; E < _.length; E++) {
              var C = _[E];
              rn(C) && Tt(C, S);
            }
          else if (rn(_)) _._store && (_._store.validated = !0);
          else if (_) {
            var P = O(_);
            if (typeof P == "function" && P !== _.entries)
              for (var z = P.call(_), j; !(j = z.next()).done; )
                rn(j.value) && Tt(j.value, S);
          }
        }
      }
      function nr(_) {
        {
          var S = _.type;
          if (S == null || typeof S == "string") return;
          var E;
          if (typeof S == "function") E = S.propTypes;
          else if (
            typeof S == "object" &&
            (S.$$typeof === v || S.$$typeof === T)
          )
            E = S.propTypes;
          else return;
          if (E) {
            var C = Ht(S);
            er(E, _.props, "prop", C, _);
          } else if (S.PropTypes !== void 0 && !tr) {
            tr = !0;
            var P = Ht(S);
            $(
              "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
              P || "Unknown"
            );
          }
          typeof S.getDefaultProps == "function" &&
            !S.getDefaultProps.isReactClassApproved &&
            $(
              "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
            );
        }
      }
      function Dr(_) {
        {
          for (var S = Object.keys(_.props), E = 0; E < S.length; E++) {
            var C = S[E];
            if (C !== "children" && C !== "key") {
              fn(_),
                $(
                  "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                  C
                ),
                fn(null);
              break;
            }
          }
          _.ref !== null &&
            (fn(_),
            $("Invalid attribute `ref` supplied to `React.Fragment`."),
            fn(null));
        }
      }
      function yi(_, S, E) {
        var C = wu(_);
        if (!C) {
          var P = "";
          (_ === void 0 ||
            (typeof _ == "object" &&
              _ !== null &&
              Object.keys(_).length === 0)) &&
            (P +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Vt(S);
          z ? (P += z) : (P += kt());
          var j;
          _ === null
            ? (j = "null")
            : Ue(_)
            ? (j = "array")
            : _ !== void 0 && _.$$typeof === t
            ? ((j = "<" + (Ht(_.type) || "Unknown") + " />"),
              (P =
                " Did you accidentally export a JSX literal instead of a component?"))
            : (j = typeof _),
            $(
              "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
              j,
              P
            );
        }
        var Y = bu.apply(this, arguments);
        if (Y == null) return Y;
        if (C) for (var Q = 2; Q < arguments.length; Q++) vi(arguments[Q], _);
        return _ === r ? Dr(Y) : nr(Y), Y;
      }
      var xi = !1;
      function Eu(_) {
        var S = yi.bind(null, _);
        return (
          (S.type = _),
          xi ||
            ((xi = !0),
            st(
              "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead."
            )),
          Object.defineProperty(S, "type", {
            enumerable: !1,
            get: function () {
              return (
                st(
                  "Factory.type is deprecated. Access the class directly before passing it to createFactory."
                ),
                Object.defineProperty(this, "type", { value: _ }),
                _
              );
            },
          }),
          S
        );
      }
      function Cu(_, S, E) {
        for (
          var C = ci.apply(this, arguments), P = 2;
          P < arguments.length;
          P++
        )
          vi(arguments[P], C.type);
        return nr(C), C;
      }
      function Ru(_, S) {
        var E = G.transition;
        G.transition = {};
        var C = G.transition;
        G.transition._updatedFibers = new Set();
        try {
          _();
        } finally {
          if (((G.transition = E), E === null && C._updatedFibers)) {
            var P = C._updatedFibers.size;
            P > 10 &&
              st(
                "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
              ),
              C._updatedFibers.clear();
          }
        }
      }
      var wi = !1,
        hn = null;
      function Ya(_) {
        if (hn === null)
          try {
            var S = ("require" + Math.random()).slice(0, 7),
              E = Ol && Ol[S];
            hn = E.call(Ol, "timers").setImmediate;
          } catch {
            hn = function (P) {
              wi === !1 &&
                ((wi = !0),
                typeof MessageChannel > "u" &&
                  $(
                    "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                  ));
              var z = new MessageChannel();
              (z.port1.onmessage = P), z.port2.postMessage(void 0);
            };
          }
        return hn(_);
      }
      var qt = 0,
        Pr = !1;
      function Xa(_) {
        {
          var S = qt;
          qt++, se.current === null && (se.current = []);
          var E = se.isBatchingLegacy,
            C;
          try {
            if (
              ((se.isBatchingLegacy = !0),
              (C = _()),
              !E && se.didScheduleLegacyUpdate)
            ) {
              var P = se.current;
              P !== null && ((se.didScheduleLegacyUpdate = !1), ki(P));
            }
          } catch (_e) {
            throw (rr(S), _e);
          } finally {
            se.isBatchingLegacy = E;
          }
          if (
            C !== null &&
            typeof C == "object" &&
            typeof C.then == "function"
          ) {
            var z = C,
              j = !1,
              Y = {
                then: function (_e, Ae) {
                  (j = !0),
                    z.then(
                      function (We) {
                        rr(S), qt === 0 ? lt(We, _e, Ae) : _e(We);
                      },
                      function (We) {
                        rr(S), Ae(We);
                      }
                    );
                },
              };
            return (
              !Pr &&
                typeof Promise < "u" &&
                Promise.resolve()
                  .then(function () {})
                  .then(function () {
                    j ||
                      ((Pr = !0),
                      $(
                        "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
                      ));
                  }),
              Y
            );
          } else {
            var Q = C;
            if ((rr(S), qt === 0)) {
              var ie = se.current;
              ie !== null && (ki(ie), (se.current = null));
              var de = {
                then: function (_e, Ae) {
                  se.current === null
                    ? ((se.current = []), lt(Q, _e, Ae))
                    : _e(Q);
                },
              };
              return de;
            } else {
              var he = {
                then: function (_e, Ae) {
                  _e(Q);
                },
              };
              return he;
            }
          }
        }
      }
      function rr(_) {
        _ !== qt - 1 &&
          $(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
          ),
          (qt = _);
      }
      function lt(_, S, E) {
        {
          var C = se.current;
          if (C !== null)
            try {
              ki(C),
                Ya(function () {
                  C.length === 0 ? ((se.current = null), S(_)) : lt(_, S, E);
                });
            } catch (P) {
              E(P);
            }
          else S(_);
        }
      }
      var Si = !1;
      function ki(_) {
        if (!Si) {
          Si = !0;
          var S = 0;
          try {
            for (; S < _.length; S++) {
              var E = _[S];
              do E = E(!0);
              while (E !== null);
            }
            _.length = 0;
          } catch (C) {
            throw ((_ = _.slice(S + 1)), C);
          } finally {
            Si = !1;
          }
        }
      }
      var Za = yi,
        Ti = Cu,
        Ka = Eu,
        Ei = { map: Sr, forEach: Ba, count: Na, toArray: xu, only: wn };
      (ne.Children = Ei),
        (ne.Component = ve),
        (ne.Fragment = r),
        (ne.Profiler = s),
        (ne.PureComponent = xr),
        (ne.StrictMode = u),
        (ne.Suspense = b),
        (ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wt),
        (ne.cloneElement = Ti),
        (ne.createContext = hi),
        (ne.createElement = Za),
        (ne.createFactory = Ka),
        (ne.createRef = hu),
        (ne.forwardRef = Wa),
        (ne.isValidElement = rn),
        (ne.lazy = ja),
        (ne.memo = Ha),
        (ne.startTransition = Ru),
        (ne.unstable_act = Xa),
        (ne.useCallback = Ga),
        (ne.useContext = je),
        (ne.useDebugValue = an),
        (ne.useDeferredValue = Cr),
        (ne.useEffect = Su),
        (ne.useId = Kn),
        (ne.useImperativeHandle = Tr),
        (ne.useInsertionEffect = ku),
        (ne.useLayoutEffect = qa),
        (ne.useMemo = Zn),
        (ne.useReducer = za),
        (ne.useRef = Va),
        (ne.useState = $a),
        (ne.useSyncExternalStore = mi),
        (ne.useTransition = Er),
        (ne.version = e),
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
            "function" &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
            new Error()
          );
    })();
});
var Js = re((nS, Td) => {
  "use strict";
  process.env.NODE_ENV === "production"
    ? (Td.exports = jh())
    : (Td.exports = Wh());
});
var Np = re((pa) => {
  "use strict";
  var op = Js(),
    n1 = require("stream"),
    Rt = Object.prototype.hasOwnProperty,
    r1 =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Hh = {},
    $h = {};
  function lp(e) {
    return Rt.call($h, e)
      ? !0
      : Rt.call(Hh, e)
      ? !1
      : r1.test(e)
      ? ($h[e] = !0)
      : ((Hh[e] = !0), !1);
  }
  function xt(e, t, n, r, u, s, f) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = u),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = f);
  }
  var nt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      nt[e] = new xt(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    nt[t] = new xt(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    nt[e] = new xt(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    nt[e] = new xt(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      nt[e] = new xt(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    nt[e] = new xt(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    nt[e] = new xt(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    nt[e] = new xt(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    nt[e] = new xt(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Pd = /[\-:]([a-z])/g;
  function Md(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Pd, Md);
      nt[t] = new xt(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Pd, Md);
      nt[t] = new xt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Pd, Md);
    nt[t] = new xt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    nt[e] = new xt(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  nt.xlinkHref = new xt(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    nt[e] = new xt(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var Ml = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    i1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ml).forEach(function (e) {
    i1.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ml[t] = Ml[e]);
    });
  });
  var u1 = /["'&<>]/;
  function yt(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var t = u1.exec(e);
    if (t) {
      var n = "",
        r,
        u = 0;
      for (r = t.index; r < e.length; r++) {
        switch (e.charCodeAt(r)) {
          case 34:
            t = "&quot;";
            break;
          case 38:
            t = "&amp;";
            break;
          case 39:
            t = "&#x27;";
            break;
          case 60:
            t = "&lt;";
            break;
          case 62:
            t = "&gt;";
            break;
          default:
            continue;
        }
        u !== r && (n += e.substring(u, r)), (u = r + 1), (n += t);
      }
      e = u !== r ? n + e.substring(u, r) : n;
    }
    return e;
  }
  var a1 = /([A-Z])/g,
    s1 = /^ms-/,
    Id = Array.isArray;
  function or(e, t) {
    return { insertionMode: e, selectedValue: t };
  }
  function o1(e, t, n) {
    switch (t) {
      case "select":
        return or(1, n.value != null ? n.value : n.defaultValue);
      case "svg":
        return or(2, null);
      case "math":
        return or(3, null);
      case "foreignObject":
        return or(1, null);
      case "table":
        return or(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return or(5, null);
      case "colgroup":
        return or(7, null);
      case "tr":
        return or(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? or(1, null) : e;
  }
  var zh = new Map();
  function cp(e, t, n) {
    if (typeof n != "object")
      throw Error(
        "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
      );
    t = !0;
    for (var r in n)
      if (Rt.call(n, r)) {
        var u = n[r];
        if (u != null && typeof u != "boolean" && u !== "") {
          if (r.indexOf("--") === 0) {
            var s = yt(r);
            u = yt(("" + u).trim());
          } else {
            s = r;
            var f = zh.get(s);
            f !== void 0 ||
              ((f = yt(s.replace(a1, "-$1").toLowerCase().replace(s1, "-ms-"))),
              zh.set(s, f)),
              (s = f),
              (u =
                typeof u == "number"
                  ? u === 0 || Rt.call(Ml, r)
                    ? "" + u
                    : u + "px"
                  : yt(("" + u).trim()));
          }
          t
            ? ((t = !1), e.push(' style="', s, ":", u))
            : e.push(";", s, ":", u);
        }
      }
    t || e.push('"');
  }
  function Bt(e, t, n, r) {
    switch (n) {
      case "style":
        cp(e, t, r);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")
    ) {
      if (((t = nt.hasOwnProperty(n) ? nt[n] : null), t !== null)) {
        switch (typeof r) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!t.acceptsBooleans) return;
        }
        switch (((n = t.attributeName), t.type)) {
          case 3:
            r && e.push(" ", n, '=""');
            break;
          case 4:
            r === !0
              ? e.push(" ", n, '=""')
              : r !== !1 && e.push(" ", n, '="', yt(r), '"');
            break;
          case 5:
            isNaN(r) || e.push(" ", n, '="', yt(r), '"');
            break;
          case 6:
            !isNaN(r) && 1 <= r && e.push(" ", n, '="', yt(r), '"');
            break;
          default:
            t.sanitizeURL && (r = "" + r), e.push(" ", n, '="', yt(r), '"');
        }
      } else if (lp(n)) {
        switch (typeof r) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (
              ((t = n.toLowerCase().slice(0, 5)),
              t !== "data-" && t !== "aria-")
            )
              return;
        }
        e.push(" ", n, '="', yt(r), '"');
      }
    }
  }
  function Nl(e, t, n) {
    if (t != null) {
      if (n != null)
        throw Error(
          "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
        );
      if (typeof t != "object" || !("__html" in t))
        throw Error(
          "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
        );
      (t = t.__html), t != null && e.push("" + t);
    }
  }
  function l1(e) {
    var t = "";
    return (
      op.Children.forEach(e, function (n) {
        n != null && (t += n);
      }),
      t
    );
  }
  function Ed(e, t, n, r) {
    e.push(Pn(n));
    var u = (n = null),
      s;
    for (s in t)
      if (Rt.call(t, s)) {
        var f = t[s];
        if (f != null)
          switch (s) {
            case "children":
              n = f;
              break;
            case "dangerouslySetInnerHTML":
              u = f;
              break;
            default:
              Bt(e, r, s, f);
          }
      }
    return (
      e.push(">"), Nl(e, u, n), typeof n == "string" ? (e.push(yt(n)), null) : n
    );
  }
  var c1 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    Vh = new Map();
  function Pn(e) {
    var t = Vh.get(e);
    if (t === void 0) {
      if (!c1.test(e)) throw Error("Invalid tag: " + e);
      (t = "<" + e), Vh.set(e, t);
    }
    return t;
  }
  function f1(e, t, n, r, u) {
    switch (t) {
      case "select":
        e.push(Pn("select"));
        var s = null,
          f = null;
        for (x in n)
          if (Rt.call(n, x)) {
            var g = n[x];
            if (g != null)
              switch (x) {
                case "children":
                  s = g;
                  break;
                case "dangerouslySetInnerHTML":
                  f = g;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  Bt(e, r, x, g);
              }
          }
        return e.push(">"), Nl(e, f, s), s;
      case "option":
        (f = u.selectedValue), e.push(Pn("option"));
        var v = (g = null),
          b = null,
          x = null;
        for (s in n)
          if (Rt.call(n, s)) {
            var T = n[s];
            if (T != null)
              switch (s) {
                case "children":
                  g = T;
                  break;
                case "selected":
                  b = T;
                  break;
                case "dangerouslySetInnerHTML":
                  x = T;
                  break;
                case "value":
                  v = T;
                default:
                  Bt(e, r, s, T);
              }
          }
        if (f != null)
          if (((n = v !== null ? "" + v : l1(g)), Id(f))) {
            for (r = 0; r < f.length; r++)
              if ("" + f[r] === n) {
                e.push(' selected=""');
                break;
              }
          } else "" + f === n && e.push(' selected=""');
        else b && e.push(' selected=""');
        return e.push(">"), Nl(e, x, g), g;
      case "textarea":
        e.push(Pn("textarea")), (x = f = s = null);
        for (g in n)
          if (Rt.call(n, g) && ((v = n[g]), v != null))
            switch (g) {
              case "children":
                x = v;
                break;
              case "value":
                s = v;
                break;
              case "defaultValue":
                f = v;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(
                  "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                );
              default:
                Bt(e, r, g, v);
            }
        if ((s === null && f !== null && (s = f), e.push(">"), x != null)) {
          if (s != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Id(x) && 1 < x.length)
            throw Error("<textarea> can only have at most one child.");
          s = "" + x;
        }
        return (
          typeof s == "string" &&
            s[0] ===
              `
` &&
            e.push(`
`),
          s !== null && e.push(yt("" + s)),
          null
        );
      case "input":
        e.push(Pn("input")), (v = x = g = s = null);
        for (f in n)
          if (Rt.call(n, f) && ((b = n[f]), b != null))
            switch (f) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              case "defaultChecked":
                v = b;
                break;
              case "defaultValue":
                g = b;
                break;
              case "checked":
                x = b;
                break;
              case "value":
                s = b;
                break;
              default:
                Bt(e, r, f, b);
            }
        return (
          x !== null
            ? Bt(e, r, "checked", x)
            : v !== null && Bt(e, r, "checked", v),
          s !== null
            ? Bt(e, r, "value", s)
            : g !== null && Bt(e, r, "value", g),
          e.push("/>"),
          null
        );
      case "menuitem":
        e.push(Pn("menuitem"));
        for (var D in n)
          if (Rt.call(n, D) && ((s = n[D]), s != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                );
              default:
                Bt(e, r, D, s);
            }
        return e.push(">"), null;
      case "title":
        e.push(Pn("title")), (s = null);
        for (T in n)
          if (Rt.call(n, T) && ((f = n[T]), f != null))
            switch (T) {
              case "children":
                s = f;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(
                  "`dangerouslySetInnerHTML` does not make sense on <title>."
                );
              default:
                Bt(e, r, T, f);
            }
        return e.push(">"), s;
      case "listing":
      case "pre":
        e.push(Pn(t)), (f = s = null);
        for (v in n)
          if (Rt.call(n, v) && ((g = n[v]), g != null))
            switch (v) {
              case "children":
                s = g;
                break;
              case "dangerouslySetInnerHTML":
                f = g;
                break;
              default:
                Bt(e, r, v, g);
            }
        if ((e.push(">"), f != null)) {
          if (s != null)
            throw Error(
              "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          if (typeof f != "object" || !("__html" in f))
            throw Error(
              "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
            );
          (n = f.__html),
            n != null &&
              (typeof n == "string" &&
              0 < n.length &&
              n[0] ===
                `
`
                ? e.push(
                    `
`,
                    n
                  )
                : e.push("" + n));
        }
        return (
          typeof s == "string" &&
            s[0] ===
              `
` &&
            e.push(`
`),
          s
        );
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        e.push(Pn(t));
        for (var L in n)
          if (Rt.call(n, L) && ((s = n[L]), s != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  t +
                    " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                Bt(e, r, L, s);
            }
        return e.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ed(e, n, t, r);
      case "html":
        return (
          u.insertionMode === 0 && e.push("<!DOCTYPE html>"), Ed(e, n, t, r)
        );
      default:
        if (t.indexOf("-") === -1 && typeof n.is != "string")
          return Ed(e, n, t, r);
        e.push(Pn(t)), (f = s = null);
        for (b in n)
          if (Rt.call(n, b) && ((g = n[b]), g != null))
            switch (b) {
              case "children":
                s = g;
                break;
              case "dangerouslySetInnerHTML":
                f = g;
                break;
              case "style":
                cp(e, r, g);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                lp(b) &&
                  typeof g != "function" &&
                  typeof g != "symbol" &&
                  e.push(" ", b, '="', yt(g), '"');
            }
        return e.push(">"), Nl(e, f, s), s;
    }
  }
  function qh(e, t, n) {
    if ((e.push('<!--$?--><template id="'), n === null))
      throw Error(
        "An ID must have been assigned before we can complete the boundary."
      );
    return e.push(n), e.push('"></template>');
  }
  function d1(e, t, n, r) {
    switch (n.insertionMode) {
      case 0:
      case 1:
        return (
          e.push('<div hidden id="'),
          e.push(t.segmentPrefix),
          (t = r.toString(16)),
          e.push(t),
          e.push('">')
        );
      case 2:
        return (
          e.push('<svg aria-hidden="true" style="display:none" id="'),
          e.push(t.segmentPrefix),
          (t = r.toString(16)),
          e.push(t),
          e.push('">')
        );
      case 3:
        return (
          e.push('<math aria-hidden="true" style="display:none" id="'),
          e.push(t.segmentPrefix),
          (t = r.toString(16)),
          e.push(t),
          e.push('">')
        );
      case 4:
        return (
          e.push('<table hidden id="'),
          e.push(t.segmentPrefix),
          (t = r.toString(16)),
          e.push(t),
          e.push('">')
        );
      case 5:
        return (
          e.push('<table hidden><tbody id="'),
          e.push(t.segmentPrefix),
          (t = r.toString(16)),
          e.push(t),
          e.push('">')
        );
      case 6:
        return (
          e.push('<table hidden><tr id="'),
          e.push(t.segmentPrefix),
          (t = r.toString(16)),
          e.push(t),
          e.push('">')
        );
      case 7:
        return (
          e.push('<table hidden><colgroup id="'),
          e.push(t.segmentPrefix),
          (t = r.toString(16)),
          e.push(t),
          e.push('">')
        );
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  function h1(e, t) {
    switch (t.insertionMode) {
      case 0:
      case 1:
        return e.push("</div>");
      case 2:
        return e.push("</svg>");
      case 3:
        return e.push("</math>");
      case 4:
        return e.push("</table>");
      case 5:
        return e.push("</tbody></table>");
      case 6:
        return e.push("</tr></table>");
      case 7:
        return e.push("</colgroup></table>");
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  var p1 = /[<\u2028\u2029]/g;
  function Cd(e) {
    return JSON.stringify(e).replace(p1, function (t) {
      switch (t) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    });
  }
  function fp(e, t) {
    return (
      (t = t === void 0 ? "" : t),
      {
        bootstrapChunks: [],
        startInlineScript: "<script>",
        placeholderPrefix: t + "P:",
        segmentPrefix: t + "S:",
        boundaryPrefix: t + "B:",
        idPrefix: t,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1,
        generateStaticMarkup: e,
      }
    );
  }
  function dp() {
    return { insertionMode: 1, selectedValue: null };
  }
  function Gh(e, t, n, r) {
    return n.generateStaticMarkup
      ? (e.push(yt(t)), !1)
      : (t === ""
          ? (e = r)
          : (r && e.push("<!-- -->"), e.push(yt(t)), (e = !0)),
        e);
  }
  var to = Object.assign,
    m1 = Symbol.for("react.element"),
    hp = Symbol.for("react.portal"),
    pp = Symbol.for("react.fragment"),
    mp = Symbol.for("react.strict_mode"),
    gp = Symbol.for("react.profiler"),
    _p = Symbol.for("react.provider"),
    bp = Symbol.for("react.context"),
    vp = Symbol.for("react.forward_ref"),
    yp = Symbol.for("react.suspense"),
    xp = Symbol.for("react.suspense_list"),
    wp = Symbol.for("react.memo"),
    Nd = Symbol.for("react.lazy"),
    g1 = Symbol.for("react.scope"),
    _1 = Symbol.for("react.debug_trace_mode"),
    b1 = Symbol.for("react.legacy_hidden"),
    v1 = Symbol.for("react.default_value"),
    Yh = Symbol.iterator;
  function Ad(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case pp:
        return "Fragment";
      case hp:
        return "Portal";
      case gp:
        return "Profiler";
      case mp:
        return "StrictMode";
      case yp:
        return "Suspense";
      case xp:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case bp:
          return (e.displayName || "Context") + ".Consumer";
        case _p:
          return (e._context.displayName || "Context") + ".Provider";
        case vp:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case wp:
          return (
            (t = e.displayName || null), t !== null ? t : Ad(e.type) || "Memo"
          );
        case Nd:
          (t = e._payload), (e = e._init);
          try {
            return Ad(e(t));
          } catch {}
      }
    return null;
  }
  var Sp = {};
  function Xh(e, t) {
    if (((e = e.contextTypes), !e)) return Sp;
    var n = {},
      r;
    for (r in e) n[r] = t[r];
    return n;
  }
  var Qi = null;
  function Vl(e, t) {
    if (e !== t) {
      (e.context._currentValue2 = e.parentValue), (e = e.parent);
      var n = t.parent;
      if (e === null) {
        if (n !== null)
          throw Error(
            "The stacks must reach the root at the same time. This is a bug in React."
          );
      } else {
        if (n === null)
          throw Error(
            "The stacks must reach the root at the same time. This is a bug in React."
          );
        Vl(e, n);
      }
      t.context._currentValue2 = t.value;
    }
  }
  function kp(e) {
    (e.context._currentValue2 = e.parentValue),
      (e = e.parent),
      e !== null && kp(e);
  }
  function Tp(e) {
    var t = e.parent;
    t !== null && Tp(t), (e.context._currentValue2 = e.value);
  }
  function Ep(e, t) {
    if (
      ((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null)
    )
      throw Error(
        "The depth must equal at least at zero before reaching the root. This is a bug in React."
      );
    e.depth === t.depth ? Vl(e, t) : Ep(e, t);
  }
  function Cp(e, t) {
    var n = t.parent;
    if (n === null)
      throw Error(
        "The depth must equal at least at zero before reaching the root. This is a bug in React."
      );
    e.depth === n.depth ? Vl(e, n) : Cp(e, n),
      (t.context._currentValue2 = t.value);
  }
  function jl(e) {
    var t = Qi;
    t !== e &&
      (t === null
        ? Tp(e)
        : e === null
        ? kp(t)
        : t.depth === e.depth
        ? Vl(t, e)
        : t.depth > e.depth
        ? Ep(t, e)
        : Cp(t, e),
      (Qi = e));
  }
  var Zh = {
    isMounted: function () {
      return !1;
    },
    enqueueSetState: function (e, t) {
      (e = e._reactInternals), e.queue !== null && e.queue.push(t);
    },
    enqueueReplaceState: function (e, t) {
      (e = e._reactInternals), (e.replace = !0), (e.queue = [t]);
    },
    enqueueForceUpdate: function () {},
  };
  function Kh(e, t, n, r) {
    var u = e.state !== void 0 ? e.state : null;
    (e.updater = Zh), (e.props = n), (e.state = u);
    var s = { queue: [], replace: !1 };
    e._reactInternals = s;
    var f = t.contextType;
    if (
      ((e.context = typeof f == "object" && f !== null ? f._currentValue2 : r),
      (f = t.getDerivedStateFromProps),
      typeof f == "function" &&
        ((f = f(n, u)), (u = f == null ? u : to({}, u, f)), (e.state = u)),
      typeof t.getDerivedStateFromProps != "function" &&
        typeof e.getSnapshotBeforeUpdate != "function" &&
        (typeof e.UNSAFE_componentWillMount == "function" ||
          typeof e.componentWillMount == "function"))
    )
      if (
        ((t = e.state),
        typeof e.componentWillMount == "function" && e.componentWillMount(),
        typeof e.UNSAFE_componentWillMount == "function" &&
          e.UNSAFE_componentWillMount(),
        t !== e.state && Zh.enqueueReplaceState(e, e.state, null),
        s.queue !== null && 0 < s.queue.length)
      )
        if (
          ((t = s.queue),
          (f = s.replace),
          (s.queue = null),
          (s.replace = !1),
          f && t.length === 1)
        )
          e.state = t[0];
        else {
          for (
            s = f ? t[0] : e.state, u = !0, f = f ? 1 : 0;
            f < t.length;
            f++
          ) {
            var g = t[f];
            (g = typeof g == "function" ? g.call(e, s, n, r) : g),
              g != null && (u ? ((u = !1), (s = to({}, s, g))) : to(s, g));
          }
          e.state = s;
        }
      else s.queue = null;
  }
  var y1 = { id: 1, overflow: "" };
  function Ld(e, t, n) {
    var r = e.id;
    e = e.overflow;
    var u = 32 - Bl(r) - 1;
    (r &= ~(1 << u)), (n += 1);
    var s = 32 - Bl(t) + u;
    if (30 < s) {
      var f = u - (u % 5);
      return (
        (s = (r & ((1 << f) - 1)).toString(32)),
        (r >>= f),
        (u -= f),
        { id: (1 << (32 - Bl(t) + u)) | (n << u) | r, overflow: s + e }
      );
    }
    return { id: (1 << s) | (n << u) | r, overflow: e };
  }
  var Bl = Math.clz32 ? Math.clz32 : S1,
    x1 = Math.log,
    w1 = Math.LN2;
  function S1(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((x1(e) / w1) | 0)) | 0;
  }
  function k1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var T1 = typeof Object.is == "function" ? Object.is : k1,
    lr = null,
    Bd = null,
    Fl = null,
    xe = null,
    Qs = !1,
    Wl = !1,
    no = 0,
    Qr = null,
    ql = 0;
  function Ji() {
    if (lr === null)
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    return lr;
  }
  function Jh() {
    if (0 < ql)
      throw Error("Rendered more hooks than during the previous render");
    return { memoizedState: null, queue: null, next: null };
  }
  function Fd() {
    return (
      xe === null
        ? Fl === null
          ? ((Qs = !1), (Fl = xe = Jh()))
          : ((Qs = !0), (xe = Fl))
        : xe.next === null
        ? ((Qs = !1), (xe = xe.next = Jh()))
        : ((Qs = !0), (xe = xe.next)),
      xe
    );
  }
  function Ud() {
    (Bd = lr = null), (Wl = !1), (Fl = null), (ql = 0), (xe = Qr = null);
  }
  function Rp(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qh(e, t, n) {
    if (((lr = Ji()), (xe = Fd()), Qs)) {
      var r = xe.queue;
      if (((t = r.dispatch), Qr !== null && ((n = Qr.get(r)), n !== void 0))) {
        Qr.delete(r), (r = xe.memoizedState);
        do (r = e(r, n.action)), (n = n.next);
        while (n !== null);
        return (xe.memoizedState = r), [r, t];
      }
      return [xe.memoizedState, t];
    }
    return (
      (e =
        e === Rp
          ? typeof t == "function"
            ? t()
            : t
          : n !== void 0
          ? n(t)
          : t),
      (xe.memoizedState = e),
      (e = xe.queue = { last: null, dispatch: null }),
      (e = e.dispatch = E1.bind(null, lr, e)),
      [xe.memoizedState, e]
    );
  }
  function ep(e, t) {
    if (
      ((lr = Ji()), (xe = Fd()), (t = t === void 0 ? null : t), xe !== null)
    ) {
      var n = xe.memoizedState;
      if (n !== null && t !== null) {
        var r = n[1];
        e: if (r === null) r = !1;
        else {
          for (var u = 0; u < r.length && u < t.length; u++)
            if (!T1(t[u], r[u])) {
              r = !1;
              break e;
            }
          r = !0;
        }
        if (r) return n[0];
      }
    }
    return (e = e()), (xe.memoizedState = [e, t]), e;
  }
  function E1(e, t, n) {
    if (25 <= ql)
      throw Error(
        "Too many re-renders. React limits the number of renders to prevent an infinite loop."
      );
    if (e === lr)
      if (
        ((Wl = !0),
        (e = { action: n, next: null }),
        Qr === null && (Qr = new Map()),
        (n = Qr.get(t)),
        n === void 0)
      )
        Qr.set(t, e);
      else {
        for (t = n; t.next !== null; ) t = t.next;
        t.next = e;
      }
  }
  function C1() {
    throw Error("startTransition cannot be called during server rendering.");
  }
  function Dl() {}
  var tp = {
      readContext: function (e) {
        return e._currentValue2;
      },
      useContext: function (e) {
        return Ji(), e._currentValue2;
      },
      useMemo: ep,
      useReducer: Qh,
      useRef: function (e) {
        (lr = Ji()), (xe = Fd());
        var t = xe.memoizedState;
        return t === null ? ((e = { current: e }), (xe.memoizedState = e)) : t;
      },
      useState: function (e) {
        return Qh(Rp, e);
      },
      useInsertionEffect: Dl,
      useLayoutEffect: function () {},
      useCallback: function (e, t) {
        return ep(function () {
          return e;
        }, t);
      },
      useImperativeHandle: Dl,
      useEffect: Dl,
      useDebugValue: Dl,
      useDeferredValue: function (e) {
        return Ji(), e;
      },
      useTransition: function () {
        return Ji(), [!1, C1];
      },
      useId: function () {
        var e = Bd.treeContext,
          t = e.overflow;
        (e = e.id), (e = (e & ~(1 << (32 - Bl(e) - 1))).toString(32) + t);
        var n = Ul;
        if (n === null)
          throw Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        return (
          (t = no++),
          (e = ":" + n.idPrefix + "R" + e),
          0 < t && (e += "H" + t.toString(32)),
          e + ":"
        );
      },
      useMutableSource: function (e, t) {
        return Ji(), t(e._source);
      },
      useSyncExternalStore: function (e, t, n) {
        if (n === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return n();
      },
    },
    Ul = null,
    Rd =
      op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        .ReactCurrentDispatcher;
  function R1(e) {
    return console.error(e), null;
  }
  function eo() {}
  function Ip(e, t, n, r, u, s, f, g, v) {
    var b = [],
      x = new Set();
    return (
      (t = {
        destination: null,
        responseState: t,
        progressiveChunkSize: r === void 0 ? 12800 : r,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: x,
        pingedTasks: b,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: u === void 0 ? R1 : u,
        onAllReady: s === void 0 ? eo : s,
        onShellReady: f === void 0 ? eo : f,
        onShellError: g === void 0 ? eo : g,
        onFatalError: v === void 0 ? eo : v,
      }),
      (n = Hl(t, 0, null, n, !1, !1)),
      (n.parentFlushed = !0),
      (e = jd(t, e, null, n, x, Sp, null, y1)),
      b.push(e),
      t
    );
  }
  function jd(e, t, n, r, u, s, f, g) {
    e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
    var v = {
      node: t,
      ping: function () {
        var b = e.pingedTasks;
        b.push(v), b.length === 1 && Wd(e);
      },
      blockedBoundary: n,
      blockedSegment: r,
      abortSet: u,
      legacyContext: s,
      context: f,
      treeContext: g,
    };
    return u.add(v), v;
  }
  function Hl(e, t, n, r, u, s) {
    return {
      status: 0,
      id: -1,
      index: t,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: r,
      boundary: n,
      lastPushedText: u,
      textEmbedded: s,
    };
  }
  function ro(e, t) {
    if (((e = e.onError(t)), e != null && typeof e != "string"))
      throw Error(
        'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
          typeof e +
          '" instead'
      );
    return e;
  }
  function $l(e, t) {
    var n = e.onShellError;
    n(t),
      (n = e.onFatalError),
      n(t),
      e.destination !== null
        ? ((e.status = 2), e.destination.destroy(t))
        : ((e.status = 1), (e.fatalError = t));
  }
  function np(e, t, n, r, u) {
    for (lr = {}, Bd = t, no = 0, e = n(r, u); Wl; )
      (Wl = !1), (no = 0), (ql += 1), (xe = null), (e = n(r, u));
    return Ud(), e;
  }
  function rp(e, t, n, r) {
    var u = n.render(),
      s = r.childContextTypes;
    if (s != null) {
      var f = t.legacyContext;
      if (typeof n.getChildContext != "function") r = f;
      else {
        n = n.getChildContext();
        for (var g in n)
          if (!(g in s))
            throw Error(
              (Ad(r) || "Unknown") +
                '.getChildContext(): key "' +
                g +
                '" is not defined in childContextTypes.'
            );
        r = to({}, f, n);
      }
      (t.legacyContext = r), Ft(e, t, u), (t.legacyContext = f);
    } else Ft(e, t, u);
  }
  function ip(e, t) {
    if (e && e.defaultProps) {
      (t = to({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Od(e, t, n, r, u) {
    if (typeof n == "function")
      if (n.prototype && n.prototype.isReactComponent) {
        u = Xh(n, t.legacyContext);
        var s = n.contextType;
        (s = new n(
          r,
          typeof s == "object" && s !== null ? s._currentValue2 : u
        )),
          Kh(s, n, r, u),
          rp(e, t, s, n);
      } else {
        (s = Xh(n, t.legacyContext)), (u = np(e, t, n, r, s));
        var f = no !== 0;
        if (
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
        )
          Kh(u, n, r, s), rp(e, t, u, n);
        else if (f) {
          (r = t.treeContext), (t.treeContext = Ld(r, 1, 0));
          try {
            Ft(e, t, u);
          } finally {
            t.treeContext = r;
          }
        } else Ft(e, t, u);
      }
    else if (typeof n == "string") {
      switch (
        ((u = t.blockedSegment),
        (s = f1(u.chunks, n, r, e.responseState, u.formatContext)),
        (u.lastPushedText = !1),
        (f = u.formatContext),
        (u.formatContext = o1(f, n, r)),
        Dd(e, t, s),
        (u.formatContext = f),
        n)
      ) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          u.chunks.push("</", n, ">");
      }
      u.lastPushedText = !1;
    } else {
      switch (n) {
        case b1:
        case _1:
        case mp:
        case gp:
        case pp:
          Ft(e, t, r.children);
          return;
        case xp:
          Ft(e, t, r.children);
          return;
        case g1:
          throw Error("ReactDOMServer does not yet support scope components.");
        case yp:
          e: {
            (n = t.blockedBoundary),
              (u = t.blockedSegment),
              (s = r.fallback),
              (r = r.children),
              (f = new Set());
            var g = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: f,
                errorDigest: null,
              },
              v = Hl(e, u.chunks.length, g, u.formatContext, !1, !1);
            u.children.push(v), (u.lastPushedText = !1);
            var b = Hl(e, 0, null, u.formatContext, !1, !1);
            (b.parentFlushed = !0),
              (t.blockedBoundary = g),
              (t.blockedSegment = b);
            try {
              if (
                (Dd(e, t, r),
                e.responseState.generateStaticMarkup ||
                  (b.lastPushedText &&
                    b.textEmbedded &&
                    b.chunks.push("<!-- -->")),
                (b.status = 1),
                zl(g, b),
                g.pendingTasks === 0)
              )
                break e;
            } catch (x) {
              (b.status = 4),
                (g.forceClientRender = !0),
                (g.errorDigest = ro(e, x));
            } finally {
              (t.blockedBoundary = n), (t.blockedSegment = u);
            }
            (t = jd(e, s, n, v, f, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t);
          }
          return;
      }
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case vp:
            if (((r = np(e, t, n.render, r, u)), no !== 0)) {
              (n = t.treeContext), (t.treeContext = Ld(n, 1, 0));
              try {
                Ft(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else Ft(e, t, r);
            return;
          case wp:
            (n = n.type), (r = ip(n, r)), Od(e, t, n, r, u);
            return;
          case _p:
            if (
              ((u = r.children),
              (n = n._context),
              (r = r.value),
              (s = n._currentValue2),
              (n._currentValue2 = r),
              (f = Qi),
              (Qi = r =
                {
                  parent: f,
                  depth: f === null ? 0 : f.depth + 1,
                  context: n,
                  parentValue: s,
                  value: r,
                }),
              (t.context = r),
              Ft(e, t, u),
              (e = Qi),
              e === null)
            )
              throw Error(
                "Tried to pop a Context at the root of the app. This is a bug in React."
              );
            (r = e.parentValue),
              (e.context._currentValue2 =
                r === v1 ? e.context._defaultValue : r),
              (e = Qi = e.parent),
              (t.context = e);
            return;
          case bp:
            (r = r.children), (r = r(n._currentValue2)), Ft(e, t, r);
            return;
          case Nd:
            (u = n._init),
              (n = u(n._payload)),
              (r = ip(n, r)),
              Od(e, t, n, r, void 0);
            return;
        }
      throw Error(
        "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
          ((n == null ? n : typeof n) + ".")
      );
    }
  }
  function Ft(e, t, n) {
    if (((t.node = n), typeof n == "object" && n !== null)) {
      switch (n.$$typeof) {
        case m1:
          Od(e, t, n.type, n.props, n.ref);
          return;
        case hp:
          throw Error(
            "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
          );
        case Nd:
          var r = n._init;
          (n = r(n._payload)), Ft(e, t, n);
          return;
      }
      if (Id(n)) {
        up(e, t, n);
        return;
      }
      if (
        (n === null || typeof n != "object"
          ? (r = null)
          : ((r = (Yh && n[Yh]) || n["@@iterator"]),
            (r = typeof r == "function" ? r : null)),
        r && (r = r.call(n)))
      ) {
        if (((n = r.next()), !n.done)) {
          var u = [];
          do u.push(n.value), (n = r.next());
          while (!n.done);
          up(e, t, u);
        }
        return;
      }
      throw (
        ((e = Object.prototype.toString.call(n)),
        Error(
          "Objects are not valid as a React child (found: " +
            (e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    typeof n == "string"
      ? ((r = t.blockedSegment),
        (r.lastPushedText = Gh(
          t.blockedSegment.chunks,
          n,
          e.responseState,
          r.lastPushedText
        )))
      : typeof n == "number" &&
        ((r = t.blockedSegment),
        (r.lastPushedText = Gh(
          t.blockedSegment.chunks,
          "" + n,
          e.responseState,
          r.lastPushedText
        )));
  }
  function up(e, t, n) {
    for (var r = n.length, u = 0; u < r; u++) {
      var s = t.treeContext;
      t.treeContext = Ld(s, r, u);
      try {
        Dd(e, t, n[u]);
      } finally {
        t.treeContext = s;
      }
    }
  }
  function Dd(e, t, n) {
    var r = t.blockedSegment.formatContext,
      u = t.legacyContext,
      s = t.context;
    try {
      return Ft(e, t, n);
    } catch (v) {
      if (
        (Ud(),
        typeof v == "object" && v !== null && typeof v.then == "function")
      ) {
        n = v;
        var f = t.blockedSegment,
          g = Hl(
            e,
            f.chunks.length,
            null,
            f.formatContext,
            f.lastPushedText,
            !0
          );
        f.children.push(g),
          (f.lastPushedText = !1),
          (e = jd(
            e,
            t.node,
            t.blockedBoundary,
            g,
            t.abortSet,
            t.legacyContext,
            t.context,
            t.treeContext
          ).ping),
          n.then(e, e),
          (t.blockedSegment.formatContext = r),
          (t.legacyContext = u),
          (t.context = s),
          jl(s);
      } else
        throw (
          ((t.blockedSegment.formatContext = r),
          (t.legacyContext = u),
          (t.context = s),
          jl(s),
          v)
        );
    }
  }
  function I1(e) {
    var t = e.blockedBoundary;
    (e = e.blockedSegment), (e.status = 3), Lp(this, t, e);
  }
  function Ap(e, t, n) {
    var r = e.blockedBoundary;
    (e.blockedSegment.status = 3),
      r === null
        ? (t.allPendingTasks--,
          t.status !== 2 &&
            ((t.status = 2),
            t.destination !== null && t.destination.push(null)))
        : (r.pendingTasks--,
          r.forceClientRender ||
            ((r.forceClientRender = !0),
            (r.errorDigest = t.onError(
              n === void 0
                ? Error(
                    "The render was aborted by the server without a reason."
                  )
                : n
            )),
            r.parentFlushed && t.clientRenderedBoundaries.push(r)),
          r.fallbackAbortableTasks.forEach(function (u) {
            return Ap(u, t, n);
          }),
          r.fallbackAbortableTasks.clear(),
          t.allPendingTasks--,
          t.allPendingTasks === 0 && ((e = t.onAllReady), e()));
  }
  function zl(e, t) {
    if (
      t.chunks.length === 0 &&
      t.children.length === 1 &&
      t.children[0].boundary === null
    ) {
      var n = t.children[0];
      (n.id = t.id), (n.parentFlushed = !0), n.status === 1 && zl(e, n);
    } else e.completedSegments.push(t);
  }
  function Lp(e, t, n) {
    if (t === null) {
      if (n.parentFlushed) {
        if (e.completedRootSegment !== null)
          throw Error(
            "There can only be one root segment. This is a bug in React."
          );
        e.completedRootSegment = n;
      }
      e.pendingRootTasks--,
        e.pendingRootTasks === 0 &&
          ((e.onShellError = eo), (t = e.onShellReady), t());
    } else
      t.pendingTasks--,
        t.forceClientRender ||
          (t.pendingTasks === 0
            ? (n.parentFlushed && n.status === 1 && zl(t, n),
              t.parentFlushed && e.completedBoundaries.push(t),
              t.fallbackAbortableTasks.forEach(I1, e),
              t.fallbackAbortableTasks.clear())
            : n.parentFlushed &&
              n.status === 1 &&
              (zl(t, n),
              t.completedSegments.length === 1 &&
                t.parentFlushed &&
                e.partialBoundaries.push(t)));
    e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e());
  }
  function Wd(e) {
    if (e.status !== 2) {
      var t = Qi,
        n = Rd.current;
      Rd.current = tp;
      var r = Ul;
      Ul = e.responseState;
      try {
        var u = e.pingedTasks,
          s;
        for (s = 0; s < u.length; s++) {
          var f = u[s],
            g = e,
            v = f.blockedSegment;
          if (v.status === 0) {
            jl(f.context);
            try {
              Ft(g, f, f.node),
                g.responseState.generateStaticMarkup ||
                  (v.lastPushedText &&
                    v.textEmbedded &&
                    v.chunks.push("<!-- -->")),
                f.abortSet.delete(f),
                (v.status = 1),
                Lp(g, f.blockedBoundary, v);
            } catch (B) {
              if (
                (Ud(),
                typeof B == "object" &&
                  B !== null &&
                  typeof B.then == "function")
              ) {
                var b = f.ping;
                B.then(b, b);
              } else {
                f.abortSet.delete(f), (v.status = 4);
                var x = f.blockedBoundary,
                  T = B,
                  D = ro(g, T);
                if (
                  (x === null
                    ? $l(g, T)
                    : (x.pendingTasks--,
                      x.forceClientRender ||
                        ((x.forceClientRender = !0),
                        (x.errorDigest = D),
                        x.parentFlushed && g.clientRenderedBoundaries.push(x))),
                  g.allPendingTasks--,
                  g.allPendingTasks === 0)
                ) {
                  var L = g.onAllReady;
                  L();
                }
              }
            } finally {
            }
          }
        }
        u.splice(0, s), e.destination !== null && Hd(e, e.destination);
      } catch (B) {
        ro(e, B), $l(e, B);
      } finally {
        (Ul = r), (Rd.current = n), n === tp && jl(t);
      }
    }
  }
  function Pl(e, t, n) {
    switch (((n.parentFlushed = !0), n.status)) {
      case 0:
        var r = (n.id = e.nextSegmentId++);
        return (
          (n.lastPushedText = !1),
          (n.textEmbedded = !1),
          (e = e.responseState),
          t.push('<template id="'),
          t.push(e.placeholderPrefix),
          (e = r.toString(16)),
          t.push(e),
          t.push('"></template>')
        );
      case 1:
        n.status = 2;
        var u = !0;
        r = n.chunks;
        var s = 0;
        n = n.children;
        for (var f = 0; f < n.length; f++) {
          for (u = n[f]; s < u.index; s++) t.push(r[s]);
          u = Gl(e, t, u);
        }
        for (; s < r.length - 1; s++) t.push(r[s]);
        return s < r.length && (u = t.push(r[s])), u;
      default:
        throw Error(
          "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
        );
    }
  }
  function Gl(e, t, n) {
    var r = n.boundary;
    if (r === null) return Pl(e, t, n);
    if (((r.parentFlushed = !0), r.forceClientRender))
      return (
        e.responseState.generateStaticMarkup ||
          ((r = r.errorDigest),
          t.push("<!--$!-->"),
          t.push("<template"),
          r && (t.push(' data-dgst="'), (r = yt(r)), t.push(r), t.push('"')),
          t.push("></template>")),
        Pl(e, t, n),
        (e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->")),
        e
      );
    if (0 < r.pendingTasks) {
      (r.rootSegmentID = e.nextSegmentId++),
        0 < r.completedSegments.length && e.partialBoundaries.push(r);
      var u = e.responseState,
        s = u.nextSuspenseID++;
      return (
        (u = u.boundaryPrefix + s.toString(16)),
        (r = r.id = u),
        qh(t, e.responseState, r),
        Pl(e, t, n),
        t.push("<!--/$-->")
      );
    }
    if (r.byteSize > e.progressiveChunkSize)
      return (
        (r.rootSegmentID = e.nextSegmentId++),
        e.completedBoundaries.push(r),
        qh(t, e.responseState, r.id),
        Pl(e, t, n),
        t.push("<!--/$-->")
      );
    if (
      (e.responseState.generateStaticMarkup || t.push("<!--$-->"),
      (n = r.completedSegments),
      n.length !== 1)
    )
      throw Error(
        "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
      );
    return (
      Gl(e, t, n[0]),
      (e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->")),
      e
    );
  }
  function ap(e, t, n) {
    return (
      d1(t, e.responseState, n.formatContext, n.id),
      Gl(e, t, n),
      h1(t, n.formatContext)
    );
  }
  function sp(e, t, n) {
    for (var r = n.completedSegments, u = 0; u < r.length; u++)
      Op(e, t, n, r[u]);
    if (
      ((r.length = 0),
      (e = e.responseState),
      (r = n.id),
      (n = n.rootSegmentID),
      t.push(e.startInlineScript),
      e.sentCompleteBoundaryFunction
        ? t.push('$RC("')
        : ((e.sentCompleteBoundaryFunction = !0),
          t.push(
            'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
          )),
      r === null)
    )
      throw Error(
        "An ID must have been assigned before we can complete the boundary."
      );
    return (
      (n = n.toString(16)),
      t.push(r),
      t.push('","'),
      t.push(e.segmentPrefix),
      t.push(n),
      t.push('")</script>')
    );
  }
  function Op(e, t, n, r) {
    if (r.status === 2) return !0;
    var u = r.id;
    if (u === -1) {
      if ((r.id = n.rootSegmentID) === -1)
        throw Error(
          "A root segment ID must have been assigned by now. This is a bug in React."
        );
      return ap(e, t, r);
    }
    return (
      ap(e, t, r),
      (e = e.responseState),
      t.push(e.startInlineScript),
      e.sentCompleteSegmentFunction
        ? t.push('$RS("')
        : ((e.sentCompleteSegmentFunction = !0),
          t.push(
            'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
          )),
      t.push(e.segmentPrefix),
      (u = u.toString(16)),
      t.push(u),
      t.push('","'),
      t.push(e.placeholderPrefix),
      t.push(u),
      t.push('")</script>')
    );
  }
  function Hd(e, t) {
    try {
      var n = e.completedRootSegment;
      if (n !== null && e.pendingRootTasks === 0) {
        Gl(e, t, n), (e.completedRootSegment = null);
        var r = e.responseState.bootstrapChunks;
        for (n = 0; n < r.length - 1; n++) t.push(r[n]);
        n < r.length && t.push(r[n]);
      }
      var u = e.clientRenderedBoundaries,
        s;
      for (s = 0; s < u.length; s++) {
        var f = u[s];
        r = t;
        var g = e.responseState,
          v = f.id,
          b = f.errorDigest,
          x = f.errorMessage,
          T = f.errorComponentStack;
        if (
          (r.push(g.startInlineScript),
          g.sentClientRenderFunction
            ? r.push('$RX("')
            : ((g.sentClientRenderFunction = !0),
              r.push(
                'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'
              )),
          v === null)
        )
          throw Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        if ((r.push(v), r.push('"'), b || x || T)) {
          r.push(",");
          var D = Cd(b || "");
          r.push(D);
        }
        if (x || T) {
          r.push(",");
          var L = Cd(x || "");
          r.push(L);
        }
        if (T) {
          r.push(",");
          var B = Cd(T);
          r.push(B);
        }
        if (!r.push(")</script>")) {
          (e.destination = null), s++, u.splice(0, s);
          return;
        }
      }
      u.splice(0, s);
      var Z = e.completedBoundaries;
      for (s = 0; s < Z.length; s++)
        if (!sp(e, t, Z[s])) {
          (e.destination = null), s++, Z.splice(0, s);
          return;
        }
      Z.splice(0, s);
      var O = e.partialBoundaries;
      for (s = 0; s < O.length; s++) {
        var K = O[s];
        e: {
          (u = e), (f = t);
          var G = K.completedSegments;
          for (g = 0; g < G.length; g++)
            if (!Op(u, f, K, G[g])) {
              g++, G.splice(0, g);
              var se = !1;
              break e;
            }
          G.splice(0, g), (se = !0);
        }
        if (!se) {
          (e.destination = null), s++, O.splice(0, s);
          return;
        }
      }
      O.splice(0, s);
      var Se = e.completedBoundaries;
      for (s = 0; s < Se.length; s++)
        if (!sp(e, t, Se[s])) {
          (e.destination = null), s++, Se.splice(0, s);
          return;
        }
      Se.splice(0, s);
    } finally {
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.push(null);
    }
  }
  function $d(e, t) {
    if (e.status === 1) (e.status = 2), t.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = t;
      try {
        Hd(e, t);
      } catch (n) {
        ro(e, n), $l(e, n);
      }
    }
  }
  function Dp(e, t) {
    try {
      var n = e.abortableTasks;
      n.forEach(function (r) {
        return Ap(r, e, t);
      }),
        n.clear(),
        e.destination !== null && Hd(e, e.destination);
    } catch (r) {
      ro(e, r), $l(e, r);
    }
  }
  function A1() {}
  function Pp(e, t, n, r) {
    var u = !1,
      s = null,
      f = "",
      g = !1;
    if (
      ((e = Ip(
        e,
        fp(n, t ? t.identifierPrefix : void 0),
        dp(),
        1 / 0,
        A1,
        void 0,
        function () {
          g = !0;
        },
        void 0,
        void 0
      )),
      Wd(e),
      Dp(e, r),
      $d(e, {
        push: function (v) {
          return v !== null && (f += v), !0;
        },
        destroy: function (v) {
          (u = !0), (s = v);
        },
      }),
      u)
    )
      throw s;
    if (!g)
      throw Error(
        "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
      );
    return f;
  }
  function L1(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = t);
  }
  var O1 = (function (e) {
    function t() {
      var r = e.call(this, {}) || this;
      return (r.request = null), (r.startedFlowing = !1), r;
    }
    L1(t, e);
    var n = t.prototype;
    return (
      (n._destroy = function (r, u) {
        Dp(this.request), u(r);
      }),
      (n._read = function () {
        this.startedFlowing && $d(this.request, this);
      }),
      t
    );
  })(n1.Readable);
  function D1() {}
  function Mp(e, t) {
    var n = new O1(),
      r = Ip(
        e,
        fp(!1, t ? t.identifierPrefix : void 0),
        dp(),
        1 / 0,
        D1,
        function () {
          (n.startedFlowing = !0), $d(r, n);
        },
        void 0,
        void 0
      );
    return (n.request = r), Wd(r), n;
  }
  pa.renderToNodeStream = function (e, t) {
    return Mp(e, t);
  };
  pa.renderToStaticMarkup = function (e, t) {
    return Pp(
      e,
      t,
      !0,
      'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server'
    );
  };
  pa.renderToStaticNodeStream = function (e, t) {
    return Mp(e, t);
  };
  pa.renderToString = function (e, t) {
    return Pp(
      e,
      t,
      !1,
      'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server'
    );
  };
  pa.version = "18.2.0";
});
var Pm = re((c0) => {
  "use strict";
  var P1 = require("util"),
    lm = Js(),
    Oe = null,
    Ee = 0,
    ga = !0;
  function H(e, t) {
    if (typeof t == "string") {
      if (t.length !== 0)
        if (2048 < 3 * t.length)
          0 < Ee &&
            (cr(e, Oe.subarray(0, Ee)), (Oe = new Uint8Array(2048)), (Ee = 0)),
            cr(e, Zl.encode(t));
        else {
          var n = Oe;
          0 < Ee && (n = Oe.subarray(Ee)), (n = Zl.encodeInto(t, n));
          var r = n.read;
          (Ee += n.written),
            r < t.length &&
              (cr(e, Oe),
              (Oe = new Uint8Array(2048)),
              (Ee = Zl.encodeInto(t.slice(r), Oe).written)),
            Ee === 2048 && (cr(e, Oe), (Oe = new Uint8Array(2048)), (Ee = 0));
        }
    } else
      t.byteLength !== 0 &&
        (2048 < t.byteLength
          ? (0 < Ee &&
              (cr(e, Oe.subarray(0, Ee)),
              (Oe = new Uint8Array(2048)),
              (Ee = 0)),
            cr(e, t))
          : ((n = Oe.length - Ee),
            n < t.byteLength &&
              (n === 0
                ? cr(e, Oe)
                : (Oe.set(t.subarray(0, n), Ee),
                  (Ee += n),
                  cr(e, Oe),
                  (t = t.subarray(n))),
              (Oe = new Uint8Array(2048)),
              (Ee = 0)),
            Oe.set(t, Ee),
            (Ee += t.byteLength),
            Ee === 2048 && (cr(e, Oe), (Oe = new Uint8Array(2048)), (Ee = 0))));
  }
  function cr(e, t) {
    (e = e.write(t)), (ga = ga && e);
  }
  function Ce(e, t) {
    return H(e, t), ga;
  }
  function Bp(e) {
    Oe && 0 < Ee && e.write(Oe.subarray(0, Ee)),
      (Oe = null),
      (Ee = 0),
      (ga = !0);
  }
  var Zl = new P1.TextEncoder();
  function F(e) {
    return Zl.encode(e);
  }
  var It = Object.prototype.hasOwnProperty,
    M1 =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Fp = {},
    Up = {};
  function cm(e) {
    return It.call(Up, e)
      ? !0
      : It.call(Fp, e)
      ? !1
      : M1.test(e)
      ? (Up[e] = !0)
      : ((Fp[e] = !0), !1);
  }
  function wt(e, t, n, r, u, s, f) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = u),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = f);
  }
  var it = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      it[e] = new wt(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    it[t] = new wt(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    it[e] = new wt(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    it[e] = new wt(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      it[e] = new wt(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    it[e] = new wt(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    it[e] = new wt(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    it[e] = new wt(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    it[e] = new wt(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var t0 = /[\-:]([a-z])/g;
  function n0(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(t0, n0);
      it[t] = new wt(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(t0, n0);
      it[t] = new wt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(t0, n0);
    it[t] = new wt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    it[e] = new wt(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  it.xlinkHref = new wt(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    it[e] = new wt(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var Kl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    N1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kl).forEach(function (e) {
    N1.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kl[t] = Kl[e]);
    });
  });
  var B1 = /["'&<>]/;
  function rt(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var t = B1.exec(e);
    if (t) {
      var n = "",
        r,
        u = 0;
      for (r = t.index; r < e.length; r++) {
        switch (e.charCodeAt(r)) {
          case 34:
            t = "&quot;";
            break;
          case 38:
            t = "&amp;";
            break;
          case 39:
            t = "&#x27;";
            break;
          case 60:
            t = "&lt;";
            break;
          case 62:
            t = "&gt;";
            break;
          default:
            continue;
        }
        u !== r && (n += e.substring(u, r)), (u = r + 1), (n += t);
      }
      e = u !== r ? n + e.substring(u, r) : n;
    }
    return e;
  }
  var F1 = /([A-Z])/g,
    U1 = /^ms-/,
    Zd = Array.isArray,
    j1 = F("<script>"),
    W1 = F("</script>"),
    H1 = F('<script src="'),
    $1 = F('<script type="module" src="'),
    jp = F('" async=""></script>'),
    z1 = /(<\/|<)(s)(cript)/gi;
  function V1(e, t, n, r) {
    return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
  }
  function Mn(e, t) {
    return { insertionMode: e, selectedValue: t };
  }
  function q1(e, t, n) {
    switch (t) {
      case "select":
        return Mn(1, n.value != null ? n.value : n.defaultValue);
      case "svg":
        return Mn(2, null);
      case "math":
        return Mn(3, null);
      case "foreignObject":
        return Mn(1, null);
      case "table":
        return Mn(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Mn(5, null);
      case "colgroup":
        return Mn(7, null);
      case "tr":
        return Mn(6, null);
    }
    return 4 <= e.insertionMode || e.insertionMode === 0 ? Mn(1, null) : e;
  }
  var r0 = F("<!-- -->");
  function Wp(e, t, n, r) {
    return t === "" ? r : (r && e.push(r0), e.push(rt(t)), !0);
  }
  var Hp = new Map(),
    G1 = F(' style="'),
    $p = F(":"),
    Y1 = F(";");
  function fm(e, t, n) {
    if (typeof n != "object")
      throw Error(
        "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
      );
    t = !0;
    for (var r in n)
      if (It.call(n, r)) {
        var u = n[r];
        if (u != null && typeof u != "boolean" && u !== "") {
          if (r.indexOf("--") === 0) {
            var s = rt(r);
            u = rt(("" + u).trim());
          } else {
            s = r;
            var f = Hp.get(s);
            f !== void 0 ||
              ((f = F(
                rt(s.replace(F1, "-$1").toLowerCase().replace(U1, "-ms-"))
              )),
              Hp.set(s, f)),
              (s = f),
              (u =
                typeof u == "number"
                  ? u === 0 || It.call(Kl, r)
                    ? "" + u
                    : u + "px"
                  : rt(("" + u).trim()));
          }
          t ? ((t = !1), e.push(G1, s, $p, u)) : e.push(Y1, s, $p, u);
        }
      }
    t || e.push(eu);
  }
  var ei = F(" "),
    ma = F('="'),
    eu = F('"'),
    zp = F('=""');
  function Ut(e, t, n, r) {
    switch (n) {
      case "style":
        fm(e, t, r);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")
    ) {
      if (((t = it.hasOwnProperty(n) ? it[n] : null), t !== null)) {
        switch (typeof r) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!t.acceptsBooleans) return;
        }
        switch (((n = t.attributeName), t.type)) {
          case 3:
            r && e.push(ei, n, zp);
            break;
          case 4:
            r === !0
              ? e.push(ei, n, zp)
              : r !== !1 && e.push(ei, n, ma, rt(r), eu);
            break;
          case 5:
            isNaN(r) || e.push(ei, n, ma, rt(r), eu);
            break;
          case 6:
            !isNaN(r) && 1 <= r && e.push(ei, n, ma, rt(r), eu);
            break;
          default:
            t.sanitizeURL && (r = "" + r), e.push(ei, n, ma, rt(r), eu);
        }
      } else if (cm(n)) {
        switch (typeof r) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (
              ((t = n.toLowerCase().slice(0, 5)),
              t !== "data-" && t !== "aria-")
            )
              return;
        }
        e.push(ei, n, ma, rt(r), eu);
      }
    }
  }
  var ti = F(">"),
    Vp = F("/>");
  function Jl(e, t, n) {
    if (t != null) {
      if (n != null)
        throw Error(
          "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
        );
      if (typeof t != "object" || !("__html" in t))
        throw Error(
          "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
        );
      (t = t.__html), t != null && e.push("" + t);
    }
  }
  function X1(e) {
    var t = "";
    return (
      lm.Children.forEach(e, function (n) {
        n != null && (t += n);
      }),
      t
    );
  }
  var zd = F(' selected=""');
  function Vd(e, t, n, r) {
    e.push(Nn(n));
    var u = (n = null),
      s;
    for (s in t)
      if (It.call(t, s)) {
        var f = t[s];
        if (f != null)
          switch (s) {
            case "children":
              n = f;
              break;
            case "dangerouslySetInnerHTML":
              u = f;
              break;
            default:
              Ut(e, r, s, f);
          }
      }
    return (
      e.push(ti), Jl(e, u, n), typeof n == "string" ? (e.push(rt(n)), null) : n
    );
  }
  var qd = F(`
`),
    Z1 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    qp = new Map();
  function Nn(e) {
    var t = qp.get(e);
    if (t === void 0) {
      if (!Z1.test(e)) throw Error("Invalid tag: " + e);
      (t = F("<" + e)), qp.set(e, t);
    }
    return t;
  }
  var K1 = F("<!DOCTYPE html>");
  function J1(e, t, n, r, u) {
    switch (t) {
      case "select":
        e.push(Nn("select"));
        var s = null,
          f = null;
        for (x in n)
          if (It.call(n, x)) {
            var g = n[x];
            if (g != null)
              switch (x) {
                case "children":
                  s = g;
                  break;
                case "dangerouslySetInnerHTML":
                  f = g;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  Ut(e, r, x, g);
              }
          }
        return e.push(ti), Jl(e, f, s), s;
      case "option":
        (f = u.selectedValue), e.push(Nn("option"));
        var v = (g = null),
          b = null,
          x = null;
        for (s in n)
          if (It.call(n, s)) {
            var T = n[s];
            if (T != null)
              switch (s) {
                case "children":
                  g = T;
                  break;
                case "selected":
                  b = T;
                  break;
                case "dangerouslySetInnerHTML":
                  x = T;
                  break;
                case "value":
                  v = T;
                default:
                  Ut(e, r, s, T);
              }
          }
        if (f != null)
          if (((n = v !== null ? "" + v : X1(g)), Zd(f))) {
            for (r = 0; r < f.length; r++)
              if ("" + f[r] === n) {
                e.push(zd);
                break;
              }
          } else "" + f === n && e.push(zd);
        else b && e.push(zd);
        return e.push(ti), Jl(e, x, g), g;
      case "textarea":
        e.push(Nn("textarea")), (x = f = s = null);
        for (g in n)
          if (It.call(n, g) && ((v = n[g]), v != null))
            switch (g) {
              case "children":
                x = v;
                break;
              case "value":
                s = v;
                break;
              case "defaultValue":
                f = v;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(
                  "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                );
              default:
                Ut(e, r, g, v);
            }
        if ((s === null && f !== null && (s = f), e.push(ti), x != null)) {
          if (s != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Zd(x) && 1 < x.length)
            throw Error("<textarea> can only have at most one child.");
          s = "" + x;
        }
        return (
          typeof s == "string" &&
            s[0] ===
              `
` &&
            e.push(qd),
          s !== null && e.push(rt("" + s)),
          null
        );
      case "input":
        e.push(Nn("input")), (v = x = g = s = null);
        for (f in n)
          if (It.call(n, f) && ((b = n[f]), b != null))
            switch (f) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              case "defaultChecked":
                v = b;
                break;
              case "defaultValue":
                g = b;
                break;
              case "checked":
                x = b;
                break;
              case "value":
                s = b;
                break;
              default:
                Ut(e, r, f, b);
            }
        return (
          x !== null
            ? Ut(e, r, "checked", x)
            : v !== null && Ut(e, r, "checked", v),
          s !== null
            ? Ut(e, r, "value", s)
            : g !== null && Ut(e, r, "value", g),
          e.push(Vp),
          null
        );
      case "menuitem":
        e.push(Nn("menuitem"));
        for (var D in n)
          if (It.call(n, D) && ((s = n[D]), s != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                );
              default:
                Ut(e, r, D, s);
            }
        return e.push(ti), null;
      case "title":
        e.push(Nn("title")), (s = null);
        for (T in n)
          if (It.call(n, T) && ((f = n[T]), f != null))
            switch (T) {
              case "children":
                s = f;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(
                  "`dangerouslySetInnerHTML` does not make sense on <title>."
                );
              default:
                Ut(e, r, T, f);
            }
        return e.push(ti), s;
      case "listing":
      case "pre":
        e.push(Nn(t)), (f = s = null);
        for (v in n)
          if (It.call(n, v) && ((g = n[v]), g != null))
            switch (v) {
              case "children":
                s = g;
                break;
              case "dangerouslySetInnerHTML":
                f = g;
                break;
              default:
                Ut(e, r, v, g);
            }
        if ((e.push(ti), f != null)) {
          if (s != null)
            throw Error(
              "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          if (typeof f != "object" || !("__html" in f))
            throw Error(
              "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
            );
          (n = f.__html),
            n != null &&
              (typeof n == "string" &&
              0 < n.length &&
              n[0] ===
                `
`
                ? e.push(qd, n)
                : e.push("" + n));
        }
        return (
          typeof s == "string" &&
            s[0] ===
              `
` &&
            e.push(qd),
          s
        );
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        e.push(Nn(t));
        for (var L in n)
          if (It.call(n, L) && ((s = n[L]), s != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  t +
                    " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                Ut(e, r, L, s);
            }
        return e.push(Vp), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Vd(e, n, t, r);
      case "html":
        return u.insertionMode === 0 && e.push(K1), Vd(e, n, t, r);
      default:
        if (t.indexOf("-") === -1 && typeof n.is != "string")
          return Vd(e, n, t, r);
        e.push(Nn(t)), (f = s = null);
        for (b in n)
          if (It.call(n, b) && ((g = n[b]), g != null))
            switch (b) {
              case "children":
                s = g;
                break;
              case "dangerouslySetInnerHTML":
                f = g;
                break;
              case "style":
                fm(e, r, g);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                cm(b) &&
                  typeof g != "function" &&
                  typeof g != "symbol" &&
                  e.push(ei, b, ma, rt(g), eu);
            }
        return e.push(ti), Jl(e, f, s), s;
    }
  }
  var Q1 = F("</"),
    ev = F(">"),
    tv = F('<template id="'),
    nv = F('"></template>'),
    rv = F("<!--$-->"),
    iv = F('<!--$?--><template id="'),
    uv = F('"></template>'),
    av = F("<!--$!-->"),
    sv = F("<!--/$-->"),
    ov = F("<template"),
    lv = F('"'),
    cv = F(' data-dgst="');
  F(' data-msg="');
  F(' data-stck="');
  var fv = F("></template>");
  function Gp(e, t, n) {
    if ((H(e, iv), n === null))
      throw Error(
        "An ID must have been assigned before we can complete the boundary."
      );
    return H(e, n), Ce(e, uv);
  }
  var dv = F('<div hidden id="'),
    hv = F('">'),
    pv = F("</div>"),
    mv = F('<svg aria-hidden="true" style="display:none" id="'),
    gv = F('">'),
    _v = F("</svg>"),
    bv = F('<math aria-hidden="true" style="display:none" id="'),
    vv = F('">'),
    yv = F("</math>"),
    xv = F('<table hidden id="'),
    wv = F('">'),
    Sv = F("</table>"),
    kv = F('<table hidden><tbody id="'),
    Tv = F('">'),
    Ev = F("</tbody></table>"),
    Cv = F('<table hidden><tr id="'),
    Rv = F('">'),
    Iv = F("</tr></table>"),
    Av = F('<table hidden><colgroup id="'),
    Lv = F('">'),
    Ov = F("</colgroup></table>");
  function Dv(e, t, n, r) {
    switch (n.insertionMode) {
      case 0:
      case 1:
        return H(e, dv), H(e, t.segmentPrefix), H(e, r.toString(16)), Ce(e, hv);
      case 2:
        return H(e, mv), H(e, t.segmentPrefix), H(e, r.toString(16)), Ce(e, gv);
      case 3:
        return H(e, bv), H(e, t.segmentPrefix), H(e, r.toString(16)), Ce(e, vv);
      case 4:
        return H(e, xv), H(e, t.segmentPrefix), H(e, r.toString(16)), Ce(e, wv);
      case 5:
        return H(e, kv), H(e, t.segmentPrefix), H(e, r.toString(16)), Ce(e, Tv);
      case 6:
        return H(e, Cv), H(e, t.segmentPrefix), H(e, r.toString(16)), Ce(e, Rv);
      case 7:
        return H(e, Av), H(e, t.segmentPrefix), H(e, r.toString(16)), Ce(e, Lv);
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  function Pv(e, t) {
    switch (t.insertionMode) {
      case 0:
      case 1:
        return Ce(e, pv);
      case 2:
        return Ce(e, _v);
      case 3:
        return Ce(e, yv);
      case 4:
        return Ce(e, Sv);
      case 5:
        return Ce(e, Ev);
      case 6:
        return Ce(e, Iv);
      case 7:
        return Ce(e, Ov);
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  var Mv = F(
      'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
    ),
    Nv = F('$RS("'),
    Bv = F('","'),
    Fv = F('")</script>'),
    Uv = F(
      'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
    ),
    jv = F('$RC("'),
    Wv = F('","'),
    Hv = F('")</script>'),
    $v = F(
      'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'
    ),
    zv = F('$RX("'),
    Vv = F('"'),
    qv = F(")</script>"),
    Gd = F(","),
    Gv = /[<\u2028\u2029]/g;
  function Yd(e) {
    return JSON.stringify(e).replace(Gv, function (t) {
      switch (t) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    });
  }
  var ao = Object.assign,
    Yv = Symbol.for("react.element"),
    dm = Symbol.for("react.portal"),
    hm = Symbol.for("react.fragment"),
    pm = Symbol.for("react.strict_mode"),
    mm = Symbol.for("react.profiler"),
    gm = Symbol.for("react.provider"),
    _m = Symbol.for("react.context"),
    bm = Symbol.for("react.forward_ref"),
    vm = Symbol.for("react.suspense"),
    ym = Symbol.for("react.suspense_list"),
    xm = Symbol.for("react.memo"),
    i0 = Symbol.for("react.lazy"),
    Xv = Symbol.for("react.scope"),
    Zv = Symbol.for("react.debug_trace_mode"),
    Kv = Symbol.for("react.legacy_hidden"),
    Jv = Symbol.for("react.default_value"),
    Yp = Symbol.iterator;
  function Kd(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case hm:
        return "Fragment";
      case dm:
        return "Portal";
      case mm:
        return "Profiler";
      case pm:
        return "StrictMode";
      case vm:
        return "Suspense";
      case ym:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case _m:
          return (e.displayName || "Context") + ".Consumer";
        case gm:
          return (e._context.displayName || "Context") + ".Provider";
        case bm:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case xm:
          return (
            (t = e.displayName || null), t !== null ? t : Kd(e.type) || "Memo"
          );
        case i0:
          (t = e._payload), (e = e._init);
          try {
            return Kd(e(t));
          } catch {}
      }
    return null;
  }
  var wm = {};
  function Xp(e, t) {
    if (((e = e.contextTypes), !e)) return wm;
    var n = {},
      r;
    for (r in e) n[r] = t[r];
    return n;
  }
  var nu = null;
  function sc(e, t) {
    if (e !== t) {
      (e.context._currentValue = e.parentValue), (e = e.parent);
      var n = t.parent;
      if (e === null) {
        if (n !== null)
          throw Error(
            "The stacks must reach the root at the same time. This is a bug in React."
          );
      } else {
        if (n === null)
          throw Error(
            "The stacks must reach the root at the same time. This is a bug in React."
          );
        sc(e, n);
      }
      t.context._currentValue = t.value;
    }
  }
  function Sm(e) {
    (e.context._currentValue = e.parentValue),
      (e = e.parent),
      e !== null && Sm(e);
  }
  function km(e) {
    var t = e.parent;
    t !== null && km(t), (e.context._currentValue = e.value);
  }
  function Tm(e, t) {
    if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null))
      throw Error(
        "The depth must equal at least at zero before reaching the root. This is a bug in React."
      );
    e.depth === t.depth ? sc(e, t) : Tm(e, t);
  }
  function Em(e, t) {
    var n = t.parent;
    if (n === null)
      throw Error(
        "The depth must equal at least at zero before reaching the root. This is a bug in React."
      );
    e.depth === n.depth ? sc(e, n) : Em(e, n),
      (t.context._currentValue = t.value);
  }
  function nc(e) {
    var t = nu;
    t !== e &&
      (t === null
        ? km(e)
        : e === null
        ? Sm(t)
        : t.depth === e.depth
        ? sc(t, e)
        : t.depth > e.depth
        ? Tm(t, e)
        : Em(t, e),
      (nu = e));
  }
  var Zp = {
    isMounted: function () {
      return !1;
    },
    enqueueSetState: function (e, t) {
      (e = e._reactInternals), e.queue !== null && e.queue.push(t);
    },
    enqueueReplaceState: function (e, t) {
      (e = e._reactInternals), (e.replace = !0), (e.queue = [t]);
    },
    enqueueForceUpdate: function () {},
  };
  function Kp(e, t, n, r) {
    var u = e.state !== void 0 ? e.state : null;
    (e.updater = Zp), (e.props = n), (e.state = u);
    var s = { queue: [], replace: !1 };
    e._reactInternals = s;
    var f = t.contextType;
    if (
      ((e.context = typeof f == "object" && f !== null ? f._currentValue : r),
      (f = t.getDerivedStateFromProps),
      typeof f == "function" &&
        ((f = f(n, u)), (u = f == null ? u : ao({}, u, f)), (e.state = u)),
      typeof t.getDerivedStateFromProps != "function" &&
        typeof e.getSnapshotBeforeUpdate != "function" &&
        (typeof e.UNSAFE_componentWillMount == "function" ||
          typeof e.componentWillMount == "function"))
    )
      if (
        ((t = e.state),
        typeof e.componentWillMount == "function" && e.componentWillMount(),
        typeof e.UNSAFE_componentWillMount == "function" &&
          e.UNSAFE_componentWillMount(),
        t !== e.state && Zp.enqueueReplaceState(e, e.state, null),
        s.queue !== null && 0 < s.queue.length)
      )
        if (
          ((t = s.queue),
          (f = s.replace),
          (s.queue = null),
          (s.replace = !1),
          f && t.length === 1)
        )
          e.state = t[0];
        else {
          for (
            s = f ? t[0] : e.state, u = !0, f = f ? 1 : 0;
            f < t.length;
            f++
          ) {
            var g = t[f];
            (g = typeof g == "function" ? g.call(e, s, n, r) : g),
              g != null && (u ? ((u = !1), (s = ao({}, s, g))) : ao(s, g));
          }
          e.state = s;
        }
      else s.queue = null;
  }
  var Qv = { id: 1, overflow: "" };
  function Jd(e, t, n) {
    var r = e.id;
    e = e.overflow;
    var u = 32 - Ql(r) - 1;
    (r &= ~(1 << u)), (n += 1);
    var s = 32 - Ql(t) + u;
    if (30 < s) {
      var f = u - (u % 5);
      return (
        (s = (r & ((1 << f) - 1)).toString(32)),
        (r >>= f),
        (u -= f),
        { id: (1 << (32 - Ql(t) + u)) | (n << u) | r, overflow: s + e }
      );
    }
    return { id: (1 << s) | (n << u) | r, overflow: e };
  }
  var Ql = Math.clz32 ? Math.clz32 : ny,
    ey = Math.log,
    ty = Math.LN2;
  function ny(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ey(e) / ty) | 0)) | 0;
  }
  function ry(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var iy = typeof Object.is == "function" ? Object.is : ry,
    fr = null,
    u0 = null,
    ec = null,
    we = null,
    io = !1,
    rc = !1,
    so = 0,
    ni = null,
    oc = 0;
  function tu() {
    if (fr === null)
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    return fr;
  }
  function Jp() {
    if (0 < oc)
      throw Error("Rendered more hooks than during the previous render");
    return { memoizedState: null, queue: null, next: null };
  }
  function a0() {
    return (
      we === null
        ? ec === null
          ? ((io = !1), (ec = we = Jp()))
          : ((io = !0), (we = ec))
        : we.next === null
        ? ((io = !1), (we = we.next = Jp()))
        : ((io = !0), (we = we.next)),
      we
    );
  }
  function s0() {
    (u0 = fr = null), (rc = !1), (ec = null), (oc = 0), (we = ni = null);
  }
  function Cm(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qp(e, t, n) {
    if (((fr = tu()), (we = a0()), io)) {
      var r = we.queue;
      if (((t = r.dispatch), ni !== null && ((n = ni.get(r)), n !== void 0))) {
        ni.delete(r), (r = we.memoizedState);
        do (r = e(r, n.action)), (n = n.next);
        while (n !== null);
        return (we.memoizedState = r), [r, t];
      }
      return [we.memoizedState, t];
    }
    return (
      (e =
        e === Cm
          ? typeof t == "function"
            ? t()
            : t
          : n !== void 0
          ? n(t)
          : t),
      (we.memoizedState = e),
      (e = we.queue = { last: null, dispatch: null }),
      (e = e.dispatch = uy.bind(null, fr, e)),
      [we.memoizedState, e]
    );
  }
  function em(e, t) {
    if (
      ((fr = tu()), (we = a0()), (t = t === void 0 ? null : t), we !== null)
    ) {
      var n = we.memoizedState;
      if (n !== null && t !== null) {
        var r = n[1];
        e: if (r === null) r = !1;
        else {
          for (var u = 0; u < r.length && u < t.length; u++)
            if (!iy(t[u], r[u])) {
              r = !1;
              break e;
            }
          r = !0;
        }
        if (r) return n[0];
      }
    }
    return (e = e()), (we.memoizedState = [e, t]), e;
  }
  function uy(e, t, n) {
    if (25 <= oc)
      throw Error(
        "Too many re-renders. React limits the number of renders to prevent an infinite loop."
      );
    if (e === fr)
      if (
        ((rc = !0),
        (e = { action: n, next: null }),
        ni === null && (ni = new Map()),
        (n = ni.get(t)),
        n === void 0)
      )
        ni.set(t, e);
      else {
        for (t = n; t.next !== null; ) t = t.next;
        t.next = e;
      }
  }
  function ay() {
    throw Error("startTransition cannot be called during server rendering.");
  }
  function Yl() {}
  var tm = {
      readContext: function (e) {
        return e._currentValue;
      },
      useContext: function (e) {
        return tu(), e._currentValue;
      },
      useMemo: em,
      useReducer: Qp,
      useRef: function (e) {
        (fr = tu()), (we = a0());
        var t = we.memoizedState;
        return t === null ? ((e = { current: e }), (we.memoizedState = e)) : t;
      },
      useState: function (e) {
        return Qp(Cm, e);
      },
      useInsertionEffect: Yl,
      useLayoutEffect: function () {},
      useCallback: function (e, t) {
        return em(function () {
          return e;
        }, t);
      },
      useImperativeHandle: Yl,
      useEffect: Yl,
      useDebugValue: Yl,
      useDeferredValue: function (e) {
        return tu(), e;
      },
      useTransition: function () {
        return tu(), [!1, ay];
      },
      useId: function () {
        var e = u0.treeContext,
          t = e.overflow;
        (e = e.id), (e = (e & ~(1 << (32 - Ql(e) - 1))).toString(32) + t);
        var n = tc;
        if (n === null)
          throw Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        return (
          (t = so++),
          (e = ":" + n.idPrefix + "R" + e),
          0 < t && (e += "H" + t.toString(32)),
          e + ":"
        );
      },
      useMutableSource: function (e, t) {
        return tu(), t(e._source);
      },
      useSyncExternalStore: function (e, t, n) {
        if (n === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return n();
      },
    },
    tc = null,
    Xd =
      lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        .ReactCurrentDispatcher;
  function sy(e) {
    return console.error(e), null;
  }
  function uo() {}
  function oy(e, t) {
    var n = e.pingedTasks;
    n.push(t),
      n.length === 1 &&
        setImmediate(function () {
          return Am(e);
        });
  }
  function o0(e, t, n, r, u, s, f, g) {
    e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
    var v = {
      node: t,
      ping: function () {
        return oy(e, v);
      },
      blockedBoundary: n,
      blockedSegment: r,
      abortSet: u,
      legacyContext: s,
      context: f,
      treeContext: g,
    };
    return u.add(v), v;
  }
  function ic(e, t, n, r, u, s) {
    return {
      status: 0,
      id: -1,
      index: t,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: r,
      boundary: n,
      lastPushedText: u,
      textEmbedded: s,
    };
  }
  function oo(e, t) {
    if (((e = e.onError(t)), e != null && typeof e != "string"))
      throw Error(
        'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
          typeof e +
          '" instead'
      );
    return e;
  }
  function uc(e, t) {
    var n = e.onShellError;
    n(t),
      (n = e.onFatalError),
      n(t),
      e.destination !== null
        ? ((e.status = 2), e.destination.destroy(t))
        : ((e.status = 1), (e.fatalError = t));
  }
  function nm(e, t, n, r, u) {
    for (fr = {}, u0 = t, so = 0, e = n(r, u); rc; )
      (rc = !1), (so = 0), (oc += 1), (we = null), (e = n(r, u));
    return s0(), e;
  }
  function rm(e, t, n, r) {
    var u = n.render(),
      s = r.childContextTypes;
    if (s != null) {
      var f = t.legacyContext;
      if (typeof n.getChildContext != "function") r = f;
      else {
        n = n.getChildContext();
        for (var g in n)
          if (!(g in s))
            throw Error(
              (Kd(r) || "Unknown") +
                '.getChildContext(): key "' +
                g +
                '" is not defined in childContextTypes.'
            );
        r = ao({}, f, n);
      }
      (t.legacyContext = r), jt(e, t, u), (t.legacyContext = f);
    } else jt(e, t, u);
  }
  function im(e, t) {
    if (e && e.defaultProps) {
      (t = ao({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Qd(e, t, n, r, u) {
    if (typeof n == "function")
      if (n.prototype && n.prototype.isReactComponent) {
        u = Xp(n, t.legacyContext);
        var s = n.contextType;
        (s = new n(
          r,
          typeof s == "object" && s !== null ? s._currentValue : u
        )),
          Kp(s, n, r, u),
          rm(e, t, s, n);
      } else {
        (s = Xp(n, t.legacyContext)), (u = nm(e, t, n, r, s));
        var f = so !== 0;
        if (
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
        )
          Kp(u, n, r, s), rm(e, t, u, n);
        else if (f) {
          (r = t.treeContext), (t.treeContext = Jd(r, 1, 0));
          try {
            jt(e, t, u);
          } finally {
            t.treeContext = r;
          }
        } else jt(e, t, u);
      }
    else if (typeof n == "string") {
      switch (
        ((u = t.blockedSegment),
        (s = J1(u.chunks, n, r, e.responseState, u.formatContext)),
        (u.lastPushedText = !1),
        (f = u.formatContext),
        (u.formatContext = q1(f, n, r)),
        e0(e, t, s),
        (u.formatContext = f),
        n)
      ) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          u.chunks.push(Q1, n, ev);
      }
      u.lastPushedText = !1;
    } else {
      switch (n) {
        case Kv:
        case Zv:
        case pm:
        case mm:
        case hm:
          jt(e, t, r.children);
          return;
        case ym:
          jt(e, t, r.children);
          return;
        case Xv:
          throw Error("ReactDOMServer does not yet support scope components.");
        case vm:
          e: {
            (n = t.blockedBoundary),
              (u = t.blockedSegment),
              (s = r.fallback),
              (r = r.children),
              (f = new Set());
            var g = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: f,
                errorDigest: null,
              },
              v = ic(e, u.chunks.length, g, u.formatContext, !1, !1);
            u.children.push(v), (u.lastPushedText = !1);
            var b = ic(e, 0, null, u.formatContext, !1, !1);
            (b.parentFlushed = !0),
              (t.blockedBoundary = g),
              (t.blockedSegment = b);
            try {
              if (
                (e0(e, t, r),
                b.lastPushedText && b.textEmbedded && b.chunks.push(r0),
                (b.status = 1),
                ac(g, b),
                g.pendingTasks === 0)
              )
                break e;
            } catch (x) {
              (b.status = 4),
                (g.forceClientRender = !0),
                (g.errorDigest = oo(e, x));
            } finally {
              (t.blockedBoundary = n), (t.blockedSegment = u);
            }
            (t = o0(e, s, n, v, f, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t);
          }
          return;
      }
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case bm:
            if (((r = nm(e, t, n.render, r, u)), so !== 0)) {
              (n = t.treeContext), (t.treeContext = Jd(n, 1, 0));
              try {
                jt(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else jt(e, t, r);
            return;
          case xm:
            (n = n.type), (r = im(n, r)), Qd(e, t, n, r, u);
            return;
          case gm:
            if (
              ((u = r.children),
              (n = n._context),
              (r = r.value),
              (s = n._currentValue),
              (n._currentValue = r),
              (f = nu),
              (nu = r =
                {
                  parent: f,
                  depth: f === null ? 0 : f.depth + 1,
                  context: n,
                  parentValue: s,
                  value: r,
                }),
              (t.context = r),
              jt(e, t, u),
              (e = nu),
              e === null)
            )
              throw Error(
                "Tried to pop a Context at the root of the app. This is a bug in React."
              );
            (r = e.parentValue),
              (e.context._currentValue =
                r === Jv ? e.context._defaultValue : r),
              (e = nu = e.parent),
              (t.context = e);
            return;
          case _m:
            (r = r.children), (r = r(n._currentValue)), jt(e, t, r);
            return;
          case i0:
            (u = n._init),
              (n = u(n._payload)),
              (r = im(n, r)),
              Qd(e, t, n, r, void 0);
            return;
        }
      throw Error(
        "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
          ((n == null ? n : typeof n) + ".")
      );
    }
  }
  function jt(e, t, n) {
    if (((t.node = n), typeof n == "object" && n !== null)) {
      switch (n.$$typeof) {
        case Yv:
          Qd(e, t, n.type, n.props, n.ref);
          return;
        case dm:
          throw Error(
            "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
          );
        case i0:
          var r = n._init;
          (n = r(n._payload)), jt(e, t, n);
          return;
      }
      if (Zd(n)) {
        um(e, t, n);
        return;
      }
      if (
        (n === null || typeof n != "object"
          ? (r = null)
          : ((r = (Yp && n[Yp]) || n["@@iterator"]),
            (r = typeof r == "function" ? r : null)),
        r && (r = r.call(n)))
      ) {
        if (((n = r.next()), !n.done)) {
          var u = [];
          do u.push(n.value), (n = r.next());
          while (!n.done);
          um(e, t, u);
        }
        return;
      }
      throw (
        ((e = Object.prototype.toString.call(n)),
        Error(
          "Objects are not valid as a React child (found: " +
            (e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    typeof n == "string"
      ? ((r = t.blockedSegment),
        (r.lastPushedText = Wp(
          t.blockedSegment.chunks,
          n,
          e.responseState,
          r.lastPushedText
        )))
      : typeof n == "number" &&
        ((r = t.blockedSegment),
        (r.lastPushedText = Wp(
          t.blockedSegment.chunks,
          "" + n,
          e.responseState,
          r.lastPushedText
        )));
  }
  function um(e, t, n) {
    for (var r = n.length, u = 0; u < r; u++) {
      var s = t.treeContext;
      t.treeContext = Jd(s, r, u);
      try {
        e0(e, t, n[u]);
      } finally {
        t.treeContext = s;
      }
    }
  }
  function e0(e, t, n) {
    var r = t.blockedSegment.formatContext,
      u = t.legacyContext,
      s = t.context;
    try {
      return jt(e, t, n);
    } catch (v) {
      if (
        (s0(),
        typeof v == "object" && v !== null && typeof v.then == "function")
      ) {
        n = v;
        var f = t.blockedSegment,
          g = ic(
            e,
            f.chunks.length,
            null,
            f.formatContext,
            f.lastPushedText,
            !0
          );
        f.children.push(g),
          (f.lastPushedText = !1),
          (e = o0(
            e,
            t.node,
            t.blockedBoundary,
            g,
            t.abortSet,
            t.legacyContext,
            t.context,
            t.treeContext
          ).ping),
          n.then(e, e),
          (t.blockedSegment.formatContext = r),
          (t.legacyContext = u),
          (t.context = s),
          nc(s);
      } else
        throw (
          ((t.blockedSegment.formatContext = r),
          (t.legacyContext = u),
          (t.context = s),
          nc(s),
          v)
        );
    }
  }
  function ly(e) {
    var t = e.blockedBoundary;
    (e = e.blockedSegment), (e.status = 3), Im(this, t, e);
  }
  function Rm(e, t, n) {
    var r = e.blockedBoundary;
    (e.blockedSegment.status = 3),
      r === null
        ? (t.allPendingTasks--,
          t.status !== 2 &&
            ((t.status = 2), t.destination !== null && t.destination.end()))
        : (r.pendingTasks--,
          r.forceClientRender ||
            ((r.forceClientRender = !0),
            (r.errorDigest = t.onError(
              n === void 0
                ? Error(
                    "The render was aborted by the server without a reason."
                  )
                : n
            )),
            r.parentFlushed && t.clientRenderedBoundaries.push(r)),
          r.fallbackAbortableTasks.forEach(function (u) {
            return Rm(u, t, n);
          }),
          r.fallbackAbortableTasks.clear(),
          t.allPendingTasks--,
          t.allPendingTasks === 0 && ((e = t.onAllReady), e()));
  }
  function ac(e, t) {
    if (
      t.chunks.length === 0 &&
      t.children.length === 1 &&
      t.children[0].boundary === null
    ) {
      var n = t.children[0];
      (n.id = t.id), (n.parentFlushed = !0), n.status === 1 && ac(e, n);
    } else e.completedSegments.push(t);
  }
  function Im(e, t, n) {
    if (t === null) {
      if (n.parentFlushed) {
        if (e.completedRootSegment !== null)
          throw Error(
            "There can only be one root segment. This is a bug in React."
          );
        e.completedRootSegment = n;
      }
      e.pendingRootTasks--,
        e.pendingRootTasks === 0 &&
          ((e.onShellError = uo), (t = e.onShellReady), t());
    } else
      t.pendingTasks--,
        t.forceClientRender ||
          (t.pendingTasks === 0
            ? (n.parentFlushed && n.status === 1 && ac(t, n),
              t.parentFlushed && e.completedBoundaries.push(t),
              t.fallbackAbortableTasks.forEach(ly, e),
              t.fallbackAbortableTasks.clear())
            : n.parentFlushed &&
              n.status === 1 &&
              (ac(t, n),
              t.completedSegments.length === 1 &&
                t.parentFlushed &&
                e.partialBoundaries.push(t)));
    e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e());
  }
  function Am(e) {
    if (e.status !== 2) {
      var t = nu,
        n = Xd.current;
      Xd.current = tm;
      var r = tc;
      tc = e.responseState;
      try {
        var u = e.pingedTasks,
          s;
        for (s = 0; s < u.length; s++) {
          var f = u[s],
            g = e,
            v = f.blockedSegment;
          if (v.status === 0) {
            nc(f.context);
            try {
              jt(g, f, f.node),
                v.lastPushedText && v.textEmbedded && v.chunks.push(r0),
                f.abortSet.delete(f),
                (v.status = 1),
                Im(g, f.blockedBoundary, v);
            } catch (B) {
              if (
                (s0(),
                typeof B == "object" &&
                  B !== null &&
                  typeof B.then == "function")
              ) {
                var b = f.ping;
                B.then(b, b);
              } else {
                f.abortSet.delete(f), (v.status = 4);
                var x = f.blockedBoundary,
                  T = B,
                  D = oo(g, T);
                if (
                  (x === null
                    ? uc(g, T)
                    : (x.pendingTasks--,
                      x.forceClientRender ||
                        ((x.forceClientRender = !0),
                        (x.errorDigest = D),
                        x.parentFlushed && g.clientRenderedBoundaries.push(x))),
                  g.allPendingTasks--,
                  g.allPendingTasks === 0)
                ) {
                  var L = g.onAllReady;
                  L();
                }
              }
            } finally {
            }
          }
        }
        u.splice(0, s), e.destination !== null && l0(e, e.destination);
      } catch (B) {
        oo(e, B), uc(e, B);
      } finally {
        (tc = r), (Xd.current = n), n === tm && nc(t);
      }
    }
  }
  function Xl(e, t, n) {
    switch (((n.parentFlushed = !0), n.status)) {
      case 0:
        var r = (n.id = e.nextSegmentId++);
        return (
          (n.lastPushedText = !1),
          (n.textEmbedded = !1),
          (e = e.responseState),
          H(t, tv),
          H(t, e.placeholderPrefix),
          (e = r.toString(16)),
          H(t, e),
          Ce(t, nv)
        );
      case 1:
        n.status = 2;
        var u = !0;
        r = n.chunks;
        var s = 0;
        n = n.children;
        for (var f = 0; f < n.length; f++) {
          for (u = n[f]; s < u.index; s++) H(t, r[s]);
          u = lc(e, t, u);
        }
        for (; s < r.length - 1; s++) H(t, r[s]);
        return s < r.length && (u = Ce(t, r[s])), u;
      default:
        throw Error(
          "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
        );
    }
  }
  function lc(e, t, n) {
    var r = n.boundary;
    if (r === null) return Xl(e, t, n);
    if (((r.parentFlushed = !0), r.forceClientRender))
      (r = r.errorDigest),
        Ce(t, av),
        H(t, ov),
        r && (H(t, cv), H(t, rt(r)), H(t, lv)),
        Ce(t, fv),
        Xl(e, t, n);
    else if (0 < r.pendingTasks) {
      (r.rootSegmentID = e.nextSegmentId++),
        0 < r.completedSegments.length && e.partialBoundaries.push(r);
      var u = e.responseState,
        s = u.nextSuspenseID++;
      (u = F(u.boundaryPrefix + s.toString(16))),
        (r = r.id = u),
        Gp(t, e.responseState, r),
        Xl(e, t, n);
    } else if (r.byteSize > e.progressiveChunkSize)
      (r.rootSegmentID = e.nextSegmentId++),
        e.completedBoundaries.push(r),
        Gp(t, e.responseState, r.id),
        Xl(e, t, n);
    else {
      if ((Ce(t, rv), (n = r.completedSegments), n.length !== 1))
        throw Error(
          "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
        );
      lc(e, t, n[0]);
    }
    return Ce(t, sv);
  }
  function am(e, t, n) {
    return (
      Dv(t, e.responseState, n.formatContext, n.id),
      lc(e, t, n),
      Pv(t, n.formatContext)
    );
  }
  function sm(e, t, n) {
    for (var r = n.completedSegments, u = 0; u < r.length; u++)
      Lm(e, t, n, r[u]);
    if (
      ((r.length = 0),
      (e = e.responseState),
      (r = n.id),
      (n = n.rootSegmentID),
      H(t, e.startInlineScript),
      e.sentCompleteBoundaryFunction
        ? H(t, jv)
        : ((e.sentCompleteBoundaryFunction = !0), H(t, Uv)),
      r === null)
    )
      throw Error(
        "An ID must have been assigned before we can complete the boundary."
      );
    return (
      (n = n.toString(16)),
      H(t, r),
      H(t, Wv),
      H(t, e.segmentPrefix),
      H(t, n),
      Ce(t, Hv)
    );
  }
  function Lm(e, t, n, r) {
    if (r.status === 2) return !0;
    var u = r.id;
    if (u === -1) {
      if ((r.id = n.rootSegmentID) === -1)
        throw Error(
          "A root segment ID must have been assigned by now. This is a bug in React."
        );
      return am(e, t, r);
    }
    return (
      am(e, t, r),
      (e = e.responseState),
      H(t, e.startInlineScript),
      e.sentCompleteSegmentFunction
        ? H(t, Nv)
        : ((e.sentCompleteSegmentFunction = !0), H(t, Mv)),
      H(t, e.segmentPrefix),
      (u = u.toString(16)),
      H(t, u),
      H(t, Bv),
      H(t, e.placeholderPrefix),
      H(t, u),
      Ce(t, Fv)
    );
  }
  function l0(e, t) {
    (Oe = new Uint8Array(2048)), (Ee = 0), (ga = !0);
    try {
      var n = e.completedRootSegment;
      if (n !== null && e.pendingRootTasks === 0) {
        lc(e, t, n), (e.completedRootSegment = null);
        var r = e.responseState.bootstrapChunks;
        for (n = 0; n < r.length - 1; n++) H(t, r[n]);
        n < r.length && Ce(t, r[n]);
      }
      var u = e.clientRenderedBoundaries,
        s;
      for (s = 0; s < u.length; s++) {
        var f = u[s];
        r = t;
        var g = e.responseState,
          v = f.id,
          b = f.errorDigest,
          x = f.errorMessage,
          T = f.errorComponentStack;
        if (
          (H(r, g.startInlineScript),
          g.sentClientRenderFunction
            ? H(r, zv)
            : ((g.sentClientRenderFunction = !0), H(r, $v)),
          v === null)
        )
          throw Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        if (
          (H(r, v),
          H(r, Vv),
          (b || x || T) && (H(r, Gd), H(r, Yd(b || ""))),
          (x || T) && (H(r, Gd), H(r, Yd(x || ""))),
          T && (H(r, Gd), H(r, Yd(T))),
          !Ce(r, qv))
        ) {
          (e.destination = null), s++, u.splice(0, s);
          return;
        }
      }
      u.splice(0, s);
      var D = e.completedBoundaries;
      for (s = 0; s < D.length; s++)
        if (!sm(e, t, D[s])) {
          (e.destination = null), s++, D.splice(0, s);
          return;
        }
      D.splice(0, s), Bp(t), (Oe = new Uint8Array(2048)), (Ee = 0), (ga = !0);
      var L = e.partialBoundaries;
      for (s = 0; s < L.length; s++) {
        var B = L[s];
        e: {
          (u = e), (f = t);
          var Z = B.completedSegments;
          for (g = 0; g < Z.length; g++)
            if (!Lm(u, f, B, Z[g])) {
              g++, Z.splice(0, g);
              var O = !1;
              break e;
            }
          Z.splice(0, g), (O = !0);
        }
        if (!O) {
          (e.destination = null), s++, L.splice(0, s);
          return;
        }
      }
      L.splice(0, s);
      var K = e.completedBoundaries;
      for (s = 0; s < K.length; s++)
        if (!sm(e, t, K[s])) {
          (e.destination = null), s++, K.splice(0, s);
          return;
        }
      K.splice(0, s);
    } finally {
      Bp(t),
        typeof t.flush == "function" && t.flush(),
        e.allPendingTasks === 0 &&
          e.pingedTasks.length === 0 &&
          e.clientRenderedBoundaries.length === 0 &&
          e.completedBoundaries.length === 0 &&
          t.end();
    }
  }
  function cy(e) {
    setImmediate(function () {
      return Am(e);
    });
  }
  function Om(e, t) {
    if (e.status === 1) (e.status = 2), t.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = t;
      try {
        l0(e, t);
      } catch (n) {
        oo(e, n), uc(e, n);
      }
    }
  }
  function Dm(e, t) {
    try {
      var n = e.abortableTasks;
      n.forEach(function (r) {
        return Rm(r, e, t);
      }),
        n.clear(),
        e.destination !== null && l0(e, e.destination);
    } catch (r) {
      oo(e, r), uc(e, r);
    }
  }
  function fy(e, t) {
    return function () {
      return Om(t, e);
    };
  }
  function om(e, t) {
    return function () {
      return Dm(e, t);
    };
  }
  function dy(e, t) {
    var n = t ? t.identifierPrefix : void 0,
      r = t ? t.nonce : void 0,
      u = t ? t.bootstrapScriptContent : void 0,
      s = t ? t.bootstrapScripts : void 0,
      f = t ? t.bootstrapModules : void 0;
    (n = n === void 0 ? "" : n),
      (r = r === void 0 ? j1 : F('<script nonce="' + rt(r) + '">'));
    var g = [];
    if ((u !== void 0 && g.push(r, ("" + u).replace(z1, V1), W1), s !== void 0))
      for (u = 0; u < s.length; u++) g.push(H1, rt(s[u]), jp);
    if (f !== void 0) for (s = 0; s < f.length; s++) g.push($1, rt(f[s]), jp);
    (f = {
      bootstrapChunks: g,
      startInlineScript: r,
      placeholderPrefix: F(n + "P:"),
      segmentPrefix: F(n + "S:"),
      boundaryPrefix: n + "B:",
      idPrefix: n,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
    }),
      (s = t ? t.namespaceURI : void 0),
      (s = Mn(
        s === "http://www.w3.org/2000/svg"
          ? 2
          : s === "http://www.w3.org/1998/Math/MathML"
          ? 3
          : 0,
        null
      )),
      (u = t ? t.progressiveChunkSize : void 0),
      (r = t ? t.onError : void 0),
      (g = t ? t.onAllReady : void 0);
    var v = t ? t.onShellReady : void 0,
      b = t ? t.onShellError : void 0;
    return (
      (t = []),
      (n = new Set()),
      (f = {
        destination: null,
        responseState: f,
        progressiveChunkSize: u === void 0 ? 12800 : u,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: n,
        pingedTasks: t,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: r === void 0 ? sy : r,
        onAllReady: g === void 0 ? uo : g,
        onShellReady: v === void 0 ? uo : v,
        onShellError: b === void 0 ? uo : b,
        onFatalError: uo,
      }),
      (s = ic(f, 0, null, s, !1, !1)),
      (s.parentFlushed = !0),
      (e = o0(f, e, null, s, n, wm, null, Qv)),
      t.push(e),
      f
    );
  }
  c0.renderToPipeableStream = function (e, t) {
    var n = dy(e, t),
      r = !1;
    return (
      cy(n),
      {
        pipe: function (u) {
          if (r)
            throw Error(
              "React currently only supports piping to one writable stream."
            );
          return (
            (r = !0),
            Om(n, u),
            u.on("drain", fy(u, n)),
            u.on(
              "error",
              om(n, Error("The destination stream errored while writing data."))
            ),
            u.on("close", om(n, Error("The destination stream closed early."))),
            u
          );
        },
        abort: function (u) {
          Dm(n, u);
        },
      }
    );
  };
  c0.version = "18.2.0";
});
var Mm = re((_a) => {
  "use strict";
  process.env.NODE_ENV !== "production" &&
    (function () {
      "use strict";
      var e = Js(),
        t = require("stream"),
        n = "18.2.0",
        r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function u(i) {
        {
          for (
            var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), d = 1;
            d < a;
            d++
          )
            c[d - 1] = arguments[d];
          f("warn", i, c);
        }
      }
      function s(i) {
        {
          for (
            var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), d = 1;
            d < a;
            d++
          )
            c[d - 1] = arguments[d];
          f("error", i, c);
        }
      }
      function f(i, a, c) {
        {
          var d = r.ReactDebugCurrentFrame,
            m = d.getStackAddendum();
          m !== "" && ((a += "%s"), (c = c.concat([m])));
          var y = c.map(function (w) {
            return String(w);
          });
          y.unshift("Warning: " + a),
            Function.prototype.apply.call(console[i], console, y);
        }
      }
      function g(i) {
        i();
      }
      function v(i) {}
      function b(i, a) {
        x(i, a);
      }
      function x(i, a) {
        return i.push(a);
      }
      function T(i) {}
      function D(i) {
        i.push(null);
      }
      function L(i) {
        return i;
      }
      function B(i) {
        return i;
      }
      function Z(i, a) {
        i.destroy(a);
      }
      function O(i) {
        {
          var a = typeof Symbol == "function" && Symbol.toStringTag,
            c = (a && i[Symbol.toStringTag]) || i.constructor.name || "Object";
          return c;
        }
      }
      function K(i) {
        try {
          return G(i), !1;
        } catch {
          return !0;
        }
      }
      function G(i) {
        return "" + i;
      }
      function se(i, a) {
        if (K(i))
          return (
            s(
              "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",
              a,
              O(i)
            ),
            G(i)
          );
      }
      function Se(i, a) {
        if (K(i))
          return (
            s(
              "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
              a,
              O(i)
            ),
            G(i)
          );
      }
      function Be(i) {
        if (K(i))
          return (
            s(
              "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",
              O(i)
            ),
            G(i)
          );
      }
      var ge = Object.prototype.hasOwnProperty,
        N = 0,
        ke = 1,
        St = 2,
        Fe = 3,
        en = 4,
        Lt = 5,
        Wt = 6,
        st =
          ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
        $ = st + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
        yr = new RegExp("^[" + st + "][" + $ + "]*$"),
        Ot = {},
        xn = {};
      function tn(i) {
        return ge.call(xn, i)
          ? !0
          : ge.call(Ot, i)
          ? !1
          : yr.test(i)
          ? ((xn[i] = !0), !0)
          : ((Ot[i] = !0), s("Invalid attribute name: `%s`", i), !1);
      }
      function ot(i, a, c, d) {
        if (c !== null && c.type === N) return !1;
        switch (typeof a) {
          case "function":
          case "symbol":
            return !0;
          case "boolean": {
            if (d) return !1;
            if (c !== null) return !c.acceptsBooleans;
            var m = i.toLowerCase().slice(0, 5);
            return m !== "data-" && m !== "aria-";
          }
          default:
            return !1;
        }
      }
      function jn(i) {
        return Ie.hasOwnProperty(i) ? Ie[i] : null;
      }
      function ve(i, a, c, d, m, y, w) {
        (this.acceptsBooleans = a === St || a === Fe || a === en),
          (this.attributeName = d),
          (this.attributeNamespace = m),
          (this.mustUseProperty = c),
          (this.propertyName = i),
          (this.type = a),
          (this.sanitizeURL = y),
          (this.removeEmptyString = w);
      }
      var Ie = {},
        Wn = [
          "children",
          "dangerouslySetInnerHTML",
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style",
        ];
      Wn.forEach(function (i) {
        Ie[i] = new ve(i, N, !1, i, null, !1, !1);
      }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (i) {
          var a = i[0],
            c = i[1];
          Ie[a] = new ve(a, ke, !1, c, null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (i) {
            Ie[i] = new ve(i, St, !1, i.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (i) {
          Ie[i] = new ve(i, St, !1, i, null, !1, !1);
        }),
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope",
        ].forEach(function (i) {
          Ie[i] = new ve(i, Fe, !1, i.toLowerCase(), null, !1, !1);
        }),
        ["checked", "multiple", "muted", "selected"].forEach(function (i) {
          Ie[i] = new ve(i, Fe, !0, i, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (i) {
          Ie[i] = new ve(i, en, !1, i, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (i) {
          Ie[i] = new ve(i, Wt, !1, i, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (i) {
          Ie[i] = new ve(i, Lt, !1, i.toLowerCase(), null, !1, !1);
        });
      var Hn = /[\-\:]([a-z])/g,
        $n = function (i) {
          return i[1].toUpperCase();
        };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height",
      ].forEach(function (i) {
        var a = i.replace(Hn, $n);
        Ie[a] = new ve(a, ke, !1, i, null, !1, !1);
      }),
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type",
        ].forEach(function (i) {
          var a = i.replace(Hn, $n);
          Ie[a] = new ve(a, ke, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
        }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (i) {
          var a = i.replace(Hn, $n);
          Ie[a] = new ve(
            a,
            ke,
            !1,
            i,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (i) {
          Ie[i] = new ve(i, ke, !1, i.toLowerCase(), null, !1, !1);
        });
      var xr = "xlinkHref";
      (Ie[xr] = new ve(
        "xlinkHref",
        ke,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
        ["src", "href", "action", "formAction"].forEach(function (i) {
          Ie[i] = new ve(i, ke, !1, i.toLowerCase(), null, !0, !0);
        });
      var nn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      };
      function hu(i, a) {
        return i + a.charAt(0).toUpperCase() + a.substring(1);
      }
      var pu = ["Webkit", "ms", "Moz", "O"];
      Object.keys(nn).forEach(function (i) {
        pu.forEach(function (a) {
          nn[hu(a, i)] = nn[i];
        });
      });
      var Ue = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0,
      };
      function De(i, a) {
        Ue[a.type] ||
          a.onChange ||
          a.onInput ||
          a.readOnly ||
          a.disabled ||
          a.value == null ||
          s(
            "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
          ),
          a.onChange ||
            a.readOnly ||
            a.disabled ||
            a.checked == null ||
            s(
              "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
            );
      }
      function mu(i, a) {
        if (i.indexOf("-") === -1) return typeof a.is == "string";
        switch (i) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      var zn = {
          "aria-current": 0,
          "aria-description": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0,
        },
        ht = {},
        Oa = new RegExp("^(aria)-[" + $ + "]*$"),
        Vn = new RegExp("^(aria)[A-Z][" + $ + "]*$");
      function Ht(i, a) {
        {
          if (ge.call(ht, a) && ht[a]) return !0;
          if (Vn.test(a)) {
            var c = "aria-" + a.slice(4).toLowerCase(),
              d = zn.hasOwnProperty(c) ? c : null;
            if (d == null)
              return (
                s(
                  "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                  a
                ),
                (ht[a] = !0),
                !0
              );
            if (a !== d)
              return (
                s("Invalid ARIA attribute `%s`. Did you mean `%s`?", a, d),
                (ht[a] = !0),
                !0
              );
          }
          if (Oa.test(a)) {
            var m = a.toLowerCase(),
              y = zn.hasOwnProperty(m) ? m : null;
            if (y == null) return (ht[a] = !0), !1;
            if (a !== y)
              return (
                s("Unknown ARIA attribute `%s`. Did you mean `%s`?", a, y),
                (ht[a] = !0),
                !0
              );
          }
        }
        return !0;
      }
      function qn(i, a) {
        {
          var c = [];
          for (var d in a) {
            var m = Ht(i, d);
            m || c.push(d);
          }
          var y = c
            .map(function (w) {
              return "`" + w + "`";
            })
            .join(", ");
          c.length === 1
            ? s(
                "Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                y,
                i
              )
            : c.length > 1 &&
              s(
                "Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                y,
                i
              );
        }
      }
      function gu(i, a) {
        mu(i, a) || qn(i, a);
      }
      var Gn = !1;
      function oi(i, a) {
        {
          if (i !== "input" && i !== "textarea" && i !== "select") return;
          a != null &&
            a.value === null &&
            !Gn &&
            ((Gn = !0),
            i === "select" && a.multiple
              ? s(
                  "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
                  i
                )
              : s(
                  "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
                  i
                ));
        }
      }
      var Yn = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          imagesizes: "imageSizes",
          imagesrcset: "imageSrcSet",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan",
        },
        $t = function () {};
      {
        var ze = {},
          _u = /^on./,
          Da = /^on[^A-Z]/,
          Pa = new RegExp("^(aria)-[" + $ + "]*$"),
          li = new RegExp("^(aria)[A-Z][" + $ + "]*$");
        $t = function (i, a, c, d) {
          if (ge.call(ze, a) && ze[a]) return !0;
          var m = a.toLowerCase();
          if (m === "onfocusin" || m === "onfocusout")
            return (
              s(
                "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
              ),
              (ze[a] = !0),
              !0
            );
          if (d != null) {
            var y = d.registrationNameDependencies,
              w = d.possibleRegistrationNames;
            if (y.hasOwnProperty(a)) return !0;
            var k = w.hasOwnProperty(m) ? w[m] : null;
            if (k != null)
              return (
                s(
                  "Invalid event handler property `%s`. Did you mean `%s`?",
                  a,
                  k
                ),
                (ze[a] = !0),
                !0
              );
            if (_u.test(a))
              return (
                s(
                  "Unknown event handler property `%s`. It will be ignored.",
                  a
                ),
                (ze[a] = !0),
                !0
              );
          } else if (_u.test(a))
            return (
              Da.test(a) &&
                s(
                  "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
                  a
                ),
              (ze[a] = !0),
              !0
            );
          if (Pa.test(a) || li.test(a)) return !0;
          if (m === "innerhtml")
            return (
              s(
                "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
              ),
              (ze[a] = !0),
              !0
            );
          if (m === "aria")
            return (
              s(
                "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
              ),
              (ze[a] = !0),
              !0
            );
          if (m === "is" && c !== null && c !== void 0 && typeof c != "string")
            return (
              s(
                "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
                typeof c
              ),
              (ze[a] = !0),
              !0
            );
          if (typeof c == "number" && isNaN(c))
            return (
              s(
                "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
                a
              ),
              (ze[a] = !0),
              !0
            );
          var R = jn(a),
            M = R !== null && R.type === N;
          if (Yn.hasOwnProperty(m)) {
            var U = Yn[m];
            if (U !== a)
              return (
                s("Invalid DOM property `%s`. Did you mean `%s`?", a, U),
                (ze[a] = !0),
                !0
              );
          } else if (!M && a !== m)
            return (
              s(
                "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
                a,
                m
              ),
              (ze[a] = !0),
              !0
            );
          return typeof c == "boolean" && ot(a, c, R, !1)
            ? (c
                ? s(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                    c,
                    a,
                    a,
                    c,
                    a
                  )
                : s(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                    c,
                    a,
                    a,
                    c,
                    a,
                    a,
                    a
                  ),
              (ze[a] = !0),
              !0)
            : M
            ? !0
            : ot(a, c, R, !1)
            ? ((ze[a] = !0), !1)
            : ((c === "false" || c === "true") &&
                R !== null &&
                R.type === Fe &&
                (s(
                  "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
                  c,
                  a,
                  c === "false"
                    ? "The browser will interpret it as a truthy value."
                    : 'Although this works, it will not work as expected if you pass the string "false".',
                  a,
                  c
                ),
                (ze[a] = !0)),
              !0);
        };
      }
      var bu = function (i, a, c) {
        {
          var d = [];
          for (var m in a) {
            var y = $t(i, m, a[m], c);
            y || d.push(m);
          }
          var w = d
            .map(function (k) {
              return "`" + k + "`";
            })
            .join(", ");
          d.length === 1
            ? s(
                "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                w,
                i
              )
            : d.length > 1 &&
              s(
                "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                w,
                i
              );
        }
      };
      function Ma(i, a, c) {
        mu(i, a) || bu(i, a, c);
      }
      var ci = function () {};
      {
        var rn = /^(?:webkit|moz|o)[A-Z]/,
          Ve = /^-ms-/,
          vu = /-(.)/g,
          yu = /;\s*$/,
          un = {},
          fi = {},
          di = !1,
          wr = !1,
          Xn = function (i) {
            return i.replace(vu, function (a, c) {
              return c.toUpperCase();
            });
          },
          Sr = function (i) {
            (un.hasOwnProperty(i) && un[i]) ||
              ((un[i] = !0),
              s(
                "Unsupported style property %s. Did you mean %s?",
                i,
                Xn(i.replace(Ve, "ms-"))
              ));
          },
          Na = function (i) {
            (un.hasOwnProperty(i) && un[i]) ||
              ((un[i] = !0),
              s(
                "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                i,
                i.charAt(0).toUpperCase() + i.slice(1)
              ));
          },
          Ba = function (i, a) {
            (fi.hasOwnProperty(a) && fi[a]) ||
              ((fi[a] = !0),
              s(
                `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                i,
                a.replace(yu, "")
              ));
          },
          xu = function (i, a) {
            di ||
              ((di = !0),
              s(
                "`NaN` is an invalid value for the `%s` css style property.",
                i
              ));
          },
          wn = function (i, a) {
            wr ||
              ((wr = !0),
              s(
                "`Infinity` is an invalid value for the `%s` css style property.",
                i
              ));
          };
        ci = function (i, a) {
          i.indexOf("-") > -1
            ? Sr(i)
            : rn.test(i)
            ? Na(i)
            : yu.test(a) && Ba(i, a),
            typeof a == "number" &&
              (isNaN(a) ? xu(i, a) : isFinite(a) || wn(i, a));
        };
      }
      var hi = ci,
        Sn = /["'&<>]/;
      function kr(i) {
        Be(i);
        var a = "" + i,
          c = Sn.exec(a);
        if (!c) return a;
        var d,
          m = "",
          y,
          w = 0;
        for (y = c.index; y < a.length; y++) {
          switch (a.charCodeAt(y)) {
            case 34:
              d = "&quot;";
              break;
            case 38:
              d = "&amp;";
              break;
            case 39:
              d = "&#x27;";
              break;
            case 60:
              d = "&lt;";
              break;
            case 62:
              d = "&gt;";
              break;
            default:
              continue;
          }
          w !== y && (m += a.substring(w, y)), (w = y + 1), (m += d);
        }
        return w !== y ? m + a.substring(w, y) : m;
      }
      function Pe(i) {
        return typeof i == "boolean" || typeof i == "number" ? "" + i : kr(i);
      }
      var Fa = /([A-Z])/g,
        Ua = /^ms-/;
      function ja(i) {
        return i.replace(Fa, "-$1").toLowerCase().replace(Ua, "-ms-");
      }
      var Wa =
          /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
        pi = !1;
      function wu(i) {
        !pi &&
          Wa.test(i) &&
          ((pi = !0),
          s(
            "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
            JSON.stringify(i)
          ));
      }
      var Ha = Array.isArray;
      function Me(i) {
        return Ha(i);
      }
      var je = "<script>",
        $a = "</script>",
        za = '<script src="',
        Va = '<script type="module" src="',
        Su = '" async=""></script>';
      function ku(i) {
        return Be(i), ("" + i).replace(qa, Ga);
      }
      var qa = /(<\/|<)(s)(cript)/gi,
        Ga = function (i, a, c, d) {
          return "" + a + (c === "s" ? "\\u0073" : "\\u0053") + d;
        };
      function Zn(i, a, c, d, m) {
        var y = i === void 0 ? "" : i,
          w = a === void 0 ? je : '<script nonce="' + Pe(a) + '">',
          k = [];
        if ((c !== void 0 && k.push(w, ku(c), $a), d !== void 0))
          for (var R = 0; R < d.length; R++) k.push(za, Pe(d[R]), Su);
        if (m !== void 0)
          for (var M = 0; M < m.length; M++) k.push(Va, Pe(m[M]), Su);
        return {
          bootstrapChunks: k,
          startInlineScript: w,
          placeholderPrefix: y + "P:",
          segmentPrefix: y + "S:",
          boundaryPrefix: y + "B:",
          idPrefix: y,
          nextSuspenseID: 0,
          sentCompleteSegmentFunction: !1,
          sentCompleteBoundaryFunction: !1,
          sentClientRenderFunction: !1,
        };
      }
      var Tr = 0,
        an = 1,
        Er = 2,
        Cr = 3,
        Kn = 4,
        mi = 5,
        sn = 6,
        Rr = 7;
      function pt(i, a) {
        return { insertionMode: i, selectedValue: a };
      }
      function kn(i, a, c) {
        switch (a) {
          case "select":
            return pt(an, c.value != null ? c.value : c.defaultValue);
          case "svg":
            return pt(Er, null);
          case "math":
            return pt(Cr, null);
          case "foreignObject":
            return pt(an, null);
          case "table":
            return pt(Kn, null);
          case "thead":
          case "tbody":
          case "tfoot":
            return pt(mi, null);
          case "colgroup":
            return pt(Rr, null);
          case "tr":
            return pt(sn, null);
        }
        return i.insertionMode >= Kn || i.insertionMode === Tr
          ? pt(an, null)
          : i;
      }
      var on = null;
      function Tn(i) {
        var a = i.nextSuspenseID++;
        return i.boundaryPrefix + a.toString(16);
      }
      function En(i, a, c) {
        var d = i.idPrefix,
          m = ":" + d + "R" + a;
        return c > 0 && (m += "H" + c.toString(32)), m + ":";
      }
      function ln(i) {
        return Pe(i);
      }
      var Jn = "<!-- -->";
      function gi(i, a, c, d) {
        return a === "" ? d : (d && i.push(Jn), i.push(ln(a)), !0);
      }
      function _i(i, a, c, d) {
        c && d && i.push(Jn);
      }
      var Ge = new Map();
      function bi(i) {
        var a = Ge.get(i);
        if (a !== void 0) return a;
        var c = Pe(ja(i));
        return Ge.set(i, c), c;
      }
      var Ir = ' style="',
        Ar = ":",
        Lr = ";";
      function Tu(i, a, c) {
        if (typeof c != "object")
          throw new Error(
            "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
          );
        var d = !0;
        for (var m in c)
          if (ge.call(c, m)) {
            var y = c[m];
            if (!(y == null || typeof y == "boolean" || y === "")) {
              var w = void 0,
                k = void 0,
                R = m.indexOf("--") === 0;
              R
                ? ((w = Pe(m)), Se(y, m), (k = Pe(("" + y).trim())))
                : (hi(m, y),
                  (w = bi(m)),
                  typeof y == "number"
                    ? y !== 0 && !ge.call(nn, m)
                      ? (k = y + "px")
                      : (k = "" + y)
                    : (Se(y, m), (k = Pe(("" + y).trim())))),
                d ? ((d = !1), i.push(Ir, w, Ar, k)) : i.push(Lr, w, Ar, k);
            }
          }
        d || i.push(zt);
      }
      var mt = " ",
        cn = '="',
        zt = '"',
        Cn = '=""';
      function qe(i, a, c, d) {
        switch (c) {
          case "style": {
            Tu(i, a, d);
            return;
          }
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            return;
        }
        if (
          !(
            c.length > 2 &&
            (c[0] === "o" || c[0] === "O") &&
            (c[1] === "n" || c[1] === "N")
          )
        ) {
          var m = jn(c);
          if (m !== null) {
            switch (typeof d) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                if (!m.acceptsBooleans) return;
            }
            var y = m.attributeName,
              w = y;
            switch (m.type) {
              case Fe:
                d && i.push(mt, w, Cn);
                return;
              case en:
                d === !0
                  ? i.push(mt, w, Cn)
                  : d === !1 || i.push(mt, w, cn, Pe(d), zt);
                return;
              case Lt:
                isNaN(d) || i.push(mt, w, cn, Pe(d), zt);
                break;
              case Wt:
                !isNaN(d) && d >= 1 && i.push(mt, w, cn, Pe(d), zt);
                break;
              default:
                m.sanitizeURL && (se(d, y), (d = "" + d), wu(d)),
                  i.push(mt, w, cn, Pe(d), zt);
            }
          } else if (tn(c)) {
            switch (typeof d) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                var k = c.toLowerCase().slice(0, 5);
                if (k !== "data-" && k !== "aria-") return;
              }
            }
            i.push(mt, c, cn, Pe(d), zt);
          }
        }
      }
      var Dt = ">",
        Qn = "/>";
      function er(i, a, c) {
        if (a != null) {
          if (c != null)
            throw new Error(
              "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          if (typeof a != "object" || !("__html" in a))
            throw new Error(
              "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
            );
          var d = a.__html;
          d != null && (Be(d), i.push("" + d));
        }
      }
      var fn = !1,
        tr = !1,
        kt = !1,
        dn = !1,
        Vt = !1,
        Or = !1,
        Ye = !1;
      function Tt(i, a) {
        {
          var c = i[a];
          if (c != null) {
            var d = Me(c);
            i.multiple && !d
              ? s(
                  "The `%s` prop supplied to <select> must be an array if `multiple` is true.",
                  a
                )
              : !i.multiple &&
                d &&
                s(
                  "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",
                  a
                );
          }
        }
      }
      function vi(i, a, c) {
        De("select", a),
          Tt(a, "value"),
          Tt(a, "defaultValue"),
          a.value !== void 0 &&
            a.defaultValue !== void 0 &&
            !kt &&
            (s(
              "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"
            ),
            (kt = !0)),
          i.push(lt("select"));
        var d = null,
          m = null;
        for (var y in a)
          if (ge.call(a, y)) {
            var w = a[y];
            if (w == null) continue;
            switch (y) {
              case "children":
                d = w;
                break;
              case "dangerouslySetInnerHTML":
                m = w;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                qe(i, c, y, w);
                break;
            }
          }
        return i.push(Dt), er(i, m, d), d;
      }
      function nr(i) {
        var a = "";
        return (
          e.Children.forEach(i, function (c) {
            c != null &&
              ((a += c),
              !Vt &&
                typeof c != "string" &&
                typeof c != "number" &&
                ((Vt = !0),
                s(
                  "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
                )));
          }),
          a
        );
      }
      var Dr = ' selected=""';
      function yi(i, a, c, d) {
        var m = d.selectedValue;
        i.push(lt("option"));
        var y = null,
          w = null,
          k = null,
          R = null;
        for (var M in a)
          if (ge.call(a, M)) {
            var U = a[M];
            if (U == null) continue;
            switch (M) {
              case "children":
                y = U;
                break;
              case "selected":
                (k = U),
                  Ye ||
                    (s(
                      "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                    ),
                    (Ye = !0));
                break;
              case "dangerouslySetInnerHTML":
                R = U;
                break;
              case "value":
                w = U;
              default:
                qe(i, c, M, U);
                break;
            }
          }
        if (m != null) {
          var q;
          if (
            (w !== null
              ? (se(w, "value"), (q = "" + w))
              : (R !== null &&
                  (Or ||
                    ((Or = !0),
                    s(
                      "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
                    ))),
                (q = nr(y))),
            Me(m))
          )
            for (var ce = 0; ce < m.length; ce++) {
              se(m[ce], "value");
              var Le = "" + m[ce];
              if (Le === q) {
                i.push(Dr);
                break;
              }
            }
          else se(m, "select.value"), "" + m === q && i.push(Dr);
        } else k && i.push(Dr);
        return i.push(Dt), er(i, R, y), y;
      }
      function xi(i, a, c) {
        De("input", a),
          a.checked !== void 0 &&
            a.defaultChecked !== void 0 &&
            !tr &&
            (s(
              "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
              "A component",
              a.type
            ),
            (tr = !0)),
          a.value !== void 0 &&
            a.defaultValue !== void 0 &&
            !fn &&
            (s(
              "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
              "A component",
              a.type
            ),
            (fn = !0)),
          i.push(lt("input"));
        var d = null,
          m = null,
          y = null,
          w = null;
        for (var k in a)
          if (ge.call(a, k)) {
            var R = a[k];
            if (R == null) continue;
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              case "defaultChecked":
                w = R;
                break;
              case "defaultValue":
                m = R;
                break;
              case "checked":
                y = R;
                break;
              case "value":
                d = R;
                break;
              default:
                qe(i, c, k, R);
                break;
            }
          }
        return (
          y !== null
            ? qe(i, c, "checked", y)
            : w !== null && qe(i, c, "checked", w),
          d !== null
            ? qe(i, c, "value", d)
            : m !== null && qe(i, c, "value", m),
          i.push(Qn),
          null
        );
      }
      function Eu(i, a, c) {
        De("textarea", a),
          a.value !== void 0 &&
            a.defaultValue !== void 0 &&
            !dn &&
            (s(
              "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"
            ),
            (dn = !0)),
          i.push(lt("textarea"));
        var d = null,
          m = null,
          y = null;
        for (var w in a)
          if (ge.call(a, w)) {
            var k = a[w];
            if (k == null) continue;
            switch (w) {
              case "children":
                y = k;
                break;
              case "value":
                d = k;
                break;
              case "defaultValue":
                m = k;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                );
              default:
                qe(i, c, w, k);
                break;
            }
          }
        if ((d === null && m !== null && (d = m), i.push(Dt), y != null)) {
          if (
            (s(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            ),
            d != null)
          )
            throw new Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Me(y)) {
            if (y.length > 1)
              throw new Error("<textarea> can only have at most one child.");
            Be(y[0]), (d = "" + y[0]);
          }
          Be(y), (d = "" + y);
        }
        return (
          typeof d == "string" &&
            d[0] ===
              `
` &&
            i.push(qt),
          d !== null && (se(d, "value"), i.push(ln("" + d))),
          null
        );
      }
      function Cu(i, a, c, d) {
        i.push(lt(c));
        for (var m in a)
          if (ge.call(a, m)) {
            var y = a[m];
            if (y == null) continue;
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(
                  c +
                    " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                qe(i, d, m, y);
                break;
            }
          }
        return i.push(Qn), null;
      }
      function Ru(i, a, c) {
        i.push(lt("menuitem"));
        for (var d in a)
          if (ge.call(a, d)) {
            var m = a[d];
            if (m == null) continue;
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                );
              default:
                qe(i, c, d, m);
                break;
            }
          }
        return i.push(Dt), null;
      }
      function wi(i, a, c) {
        i.push(lt("title"));
        var d = null;
        for (var m in a)
          if (ge.call(a, m)) {
            var y = a[m];
            if (y == null) continue;
            switch (m) {
              case "children":
                d = y;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "`dangerouslySetInnerHTML` does not make sense on <title>."
                );
              default:
                qe(i, c, m, y);
                break;
            }
          }
        i.push(Dt);
        {
          var w = Array.isArray(d) && d.length < 2 ? d[0] || null : d;
          Array.isArray(d) && d.length > 1
            ? s(
                "A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering"
              )
            : w != null && w.$$typeof != null
            ? s(
                "A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering"
              )
            : w != null &&
              typeof w != "string" &&
              typeof w != "number" &&
              s(
                "A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering"
              );
        }
        return d;
      }
      function hn(i, a, c, d) {
        i.push(lt(c));
        var m = null,
          y = null;
        for (var w in a)
          if (ge.call(a, w)) {
            var k = a[w];
            if (k == null) continue;
            switch (w) {
              case "children":
                m = k;
                break;
              case "dangerouslySetInnerHTML":
                y = k;
                break;
              default:
                qe(i, d, w, k);
                break;
            }
          }
        return (
          i.push(Dt),
          er(i, y, m),
          typeof m == "string" ? (i.push(ln(m)), null) : m
        );
      }
      function Ya(i, a, c, d) {
        i.push(lt(c));
        var m = null,
          y = null;
        for (var w in a)
          if (ge.call(a, w)) {
            var k = a[w];
            if (k == null) continue;
            switch (w) {
              case "children":
                m = k;
                break;
              case "dangerouslySetInnerHTML":
                y = k;
                break;
              case "style":
                Tu(i, d, k);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                tn(w) &&
                  typeof k != "function" &&
                  typeof k != "symbol" &&
                  i.push(mt, w, cn, Pe(k), zt);
                break;
            }
          }
        return i.push(Dt), er(i, y, m), m;
      }
      var qt = `
`;
      function Pr(i, a, c, d) {
        i.push(lt(c));
        var m = null,
          y = null;
        for (var w in a)
          if (ge.call(a, w)) {
            var k = a[w];
            if (k == null) continue;
            switch (w) {
              case "children":
                m = k;
                break;
              case "dangerouslySetInnerHTML":
                y = k;
                break;
              default:
                qe(i, d, w, k);
                break;
            }
          }
        if ((i.push(Dt), y != null)) {
          if (m != null)
            throw new Error(
              "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          if (typeof y != "object" || !("__html" in y))
            throw new Error(
              "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
            );
          var R = y.__html;
          R != null &&
            (typeof R == "string" &&
            R.length > 0 &&
            R[0] ===
              `
`
              ? i.push(qt, R)
              : (Be(R), i.push("" + R)));
        }
        return (
          typeof m == "string" &&
            m[0] ===
              `
` &&
            i.push(qt),
          m
        );
      }
      var Xa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        rr = new Map();
      function lt(i) {
        var a = rr.get(i);
        if (a === void 0) {
          if (!Xa.test(i)) throw new Error("Invalid tag: " + i);
          (a = "<" + i), rr.set(i, a);
        }
        return a;
      }
      var Si = "<!DOCTYPE html>";
      function ki(i, a, c, d, m) {
        switch (
          (gu(a, c),
          oi(a, c),
          Ma(a, c, null),
          !c.suppressContentEditableWarning &&
            c.contentEditable &&
            c.children != null &&
            s(
              "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
            ),
          m.insertionMode !== Er &&
            m.insertionMode !== Cr &&
            a.indexOf("-") === -1 &&
            typeof c.is != "string" &&
            a.toLowerCase() !== a &&
            s(
              "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
              a
            ),
          a)
        ) {
          case "select":
            return vi(i, c, d);
          case "option":
            return yi(i, c, d, m);
          case "textarea":
            return Eu(i, c, d);
          case "input":
            return xi(i, c, d);
          case "menuitem":
            return Ru(i, c, d);
          case "title":
            return wi(i, c, d);
          case "listing":
          case "pre":
            return Pr(i, c, a, d);
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            return Cu(i, c, a, d);
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return hn(i, c, a, d);
          case "html":
            return m.insertionMode === Tr && i.push(Si), hn(i, c, a, d);
          default:
            return a.indexOf("-") === -1 && typeof c.is != "string"
              ? hn(i, c, a, d)
              : Ya(i, c, a, d);
        }
      }
      var Za = "</",
        Ti = ">";
      function Ka(i, a, c) {
        switch (a) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            i.push(Za, a, Ti);
        }
      }
      function Ei(i, a) {
        for (var c = a.bootstrapChunks, d = 0; d < c.length - 1; d++)
          b(i, c[d]);
        return d < c.length ? x(i, c[d]) : !0;
      }
      var _ = '<template id="',
        S = '"></template>';
      function E(i, a, c) {
        b(i, _), b(i, a.placeholderPrefix);
        var d = c.toString(16);
        return b(i, d), x(i, S);
      }
      var C = "<!--$-->",
        P = '<!--$?--><template id="',
        z = '"></template>',
        j = "<!--$!-->",
        Y = "<!--/$-->",
        Q = "<template",
        ie = '"',
        de = ' data-dgst="',
        he = ' data-msg="',
        _e = ' data-stck="',
        Ae = "></template>";
      function We(i, a) {
        return x(i, C);
      }
      function ir(i, a, c) {
        if ((b(i, P), c === null))
          throw new Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        return b(i, c), x(i, z);
      }
      function Ci(i, a, c, d, m) {
        var y;
        return (
          (y = x(i, j)),
          b(i, Q),
          c && (b(i, de), b(i, Pe(c)), b(i, ie)),
          d && (b(i, he), b(i, Pe(d)), b(i, ie)),
          m && (b(i, _e), b(i, Pe(m)), b(i, ie)),
          (y = x(i, Ae)),
          y
        );
      }
      function Mr(i, a) {
        return x(i, Y);
      }
      function Iu(i, a) {
        return x(i, Y);
      }
      function Nr(i, a) {
        return x(i, Y);
      }
      var Ja = '<div hidden id="',
        Au = '">',
        Qa = "</div>",
        Xc = '<svg aria-hidden="true" style="display:none" id="',
        Zc = '">',
        Fo = "</svg>",
        Kc = '<math aria-hidden="true" style="display:none" id="',
        Jc = '">',
        Uo = "</math>",
        Qc = '<table hidden id="',
        ef = '">',
        tf = "</table>",
        nf = '<table hidden><tbody id="',
        rf = '">',
        uf = "</tbody></table>",
        af = '<table hidden><tr id="',
        sf = '">',
        of = "</tr></table>",
        lf = '<table hidden><colgroup id="',
        cf = '">',
        ff = "</colgroup></table>";
      function df(i, a, c, d) {
        switch (c.insertionMode) {
          case Tr:
          case an:
            return (
              b(i, Ja), b(i, a.segmentPrefix), b(i, d.toString(16)), x(i, Au)
            );
          case Er:
            return (
              b(i, Xc), b(i, a.segmentPrefix), b(i, d.toString(16)), x(i, Zc)
            );
          case Cr:
            return (
              b(i, Kc), b(i, a.segmentPrefix), b(i, d.toString(16)), x(i, Jc)
            );
          case Kn:
            return (
              b(i, Qc), b(i, a.segmentPrefix), b(i, d.toString(16)), x(i, ef)
            );
          case mi:
            return (
              b(i, nf), b(i, a.segmentPrefix), b(i, d.toString(16)), x(i, rf)
            );
          case sn:
            return (
              b(i, af), b(i, a.segmentPrefix), b(i, d.toString(16)), x(i, sf)
            );
          case Rr:
            return (
              b(i, lf), b(i, a.segmentPrefix), b(i, d.toString(16)), x(i, cf)
            );
          default:
            throw new Error("Unknown insertion mode. This is a bug in React.");
        }
      }
      function hf(i, a) {
        switch (a.insertionMode) {
          case Tr:
          case an:
            return x(i, Qa);
          case Er:
            return x(i, Fo);
          case Cr:
            return x(i, Uo);
          case Kn:
            return x(i, tf);
          case mi:
            return x(i, uf);
          case sn:
            return x(i, of);
          case Rr:
            return x(i, ff);
          default:
            throw new Error("Unknown insertion mode. This is a bug in React.");
        }
      }
      var pf =
          "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}",
        mf =
          'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}',
        gf =
          'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}',
        _f = pf + ';$RS("',
        bf = '$RS("',
        vf = '","',
        yf = '")</script>';
      function xf(i, a, c) {
        b(i, a.startInlineScript),
          a.sentCompleteSegmentFunction
            ? b(i, bf)
            : ((a.sentCompleteSegmentFunction = !0), b(i, _f)),
          b(i, a.segmentPrefix);
        var d = c.toString(16);
        return b(i, d), b(i, vf), b(i, a.placeholderPrefix), b(i, d), x(i, yf);
      }
      var wf = mf + ';$RC("',
        Sf = '$RC("',
        kf = '","',
        Tf = '")</script>';
      function Ef(i, a, c, d) {
        if (
          (b(i, a.startInlineScript),
          a.sentCompleteBoundaryFunction
            ? b(i, Sf)
            : ((a.sentCompleteBoundaryFunction = !0), b(i, wf)),
          c === null)
        )
          throw new Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        var m = d.toString(16);
        return b(i, c), b(i, kf), b(i, a.segmentPrefix), b(i, m), x(i, Tf);
      }
      var Cf = gf + ';$RX("',
        Rf = '$RX("',
        If = '"',
        Af = ")</script>",
        es = ",";
      function Lf(i, a, c, d, m, y) {
        if (
          (b(i, a.startInlineScript),
          a.sentClientRenderFunction
            ? b(i, Rf)
            : ((a.sentClientRenderFunction = !0), b(i, Cf)),
          c === null)
        )
          throw new Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        return (
          b(i, c),
          b(i, If),
          (d || m || y) && (b(i, es), b(i, ts(d || ""))),
          (m || y) && (b(i, es), b(i, ts(m || ""))),
          y && (b(i, es), b(i, ts(y))),
          x(i, Af)
        );
      }
      var Of = /[<\u2028\u2029]/g;
      function ts(i) {
        var a = JSON.stringify(i);
        return a.replace(Of, function (c) {
          switch (c) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw new Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        });
      }
      function jo(i, a) {
        var c = Zn(a, void 0);
        return {
          bootstrapChunks: c.bootstrapChunks,
          startInlineScript: c.startInlineScript,
          placeholderPrefix: c.placeholderPrefix,
          segmentPrefix: c.segmentPrefix,
          boundaryPrefix: c.boundaryPrefix,
          idPrefix: c.idPrefix,
          nextSuspenseID: c.nextSuspenseID,
          sentCompleteSegmentFunction: c.sentCompleteSegmentFunction,
          sentCompleteBoundaryFunction: c.sentCompleteBoundaryFunction,
          sentClientRenderFunction: c.sentClientRenderFunction,
          generateStaticMarkup: i,
        };
      }
      function Wo() {
        return { insertionMode: an, selectedValue: null };
      }
      function Ho(i, a, c, d) {
        return c.generateStaticMarkup ? (i.push(Pe(a)), !1) : gi(i, a, c, d);
      }
      function $o(i, a, c, d) {
        if (!a.generateStaticMarkup) return _i(i, a, c, d);
      }
      function Df(i, a) {
        return a.generateStaticMarkup ? !0 : We(i);
      }
      function Pf(i, a, c, d, m) {
        return a.generateStaticMarkup ? !0 : Ci(i, a, c, d, m);
      }
      function ns(i, a) {
        return a.generateStaticMarkup ? !0 : Mr(i);
      }
      function Mf(i, a) {
        return a.generateStaticMarkup ? !0 : Nr(i);
      }
      var Et = Object.assign,
        rs = Symbol.for("react.element"),
        gt = Symbol.for("react.portal"),
        zo = Symbol.for("react.fragment"),
        is = Symbol.for("react.strict_mode"),
        us = Symbol.for("react.profiler"),
        Lu = Symbol.for("react.provider"),
        Ou = Symbol.for("react.context"),
        Ri = Symbol.for("react.forward_ref"),
        Ii = Symbol.for("react.suspense"),
        Ai = Symbol.for("react.suspense_list"),
        Li = Symbol.for("react.memo"),
        Br = Symbol.for("react.lazy"),
        as = Symbol.for("react.scope"),
        Du = Symbol.for("react.debug_trace_mode"),
        Nf = Symbol.for("react.legacy_hidden"),
        Bf = Symbol.for("react.default_value"),
        Vo = Symbol.iterator,
        Ff = "@@iterator";
      function qo(i) {
        if (i === null || typeof i != "object") return null;
        var a = (Vo && i[Vo]) || i[Ff];
        return typeof a == "function" ? a : null;
      }
      function Uf(i, a, c) {
        var d = i.displayName;
        if (d) return d;
        var m = a.displayName || a.name || "";
        return m !== "" ? c + "(" + m + ")" : c;
      }
      function Go(i) {
        return i.displayName || "Context";
      }
      function Te(i) {
        if (i == null) return null;
        if (
          (typeof i.tag == "number" &&
            s(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          typeof i == "function")
        )
          return i.displayName || i.name || null;
        if (typeof i == "string") return i;
        switch (i) {
          case zo:
            return "Fragment";
          case gt:
            return "Portal";
          case us:
            return "Profiler";
          case is:
            return "StrictMode";
          case Ii:
            return "Suspense";
          case Ai:
            return "SuspenseList";
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case Ou:
              var a = i;
              return Go(a) + ".Consumer";
            case Lu:
              var c = i;
              return Go(c._context) + ".Provider";
            case Ri:
              return Uf(i, i.render, "ForwardRef");
            case Li:
              var d = i.displayName || null;
              return d !== null ? d : Te(i.type) || "Memo";
            case Br: {
              var m = i,
                y = m._payload,
                w = m._init;
              try {
                return Te(w(y));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Fr = 0,
        ye,
        Ur,
        ss,
        os,
        ls,
        cs,
        fs;
      function ds() {}
      ds.__reactDisabledLog = !0;
      function Yo() {
        {
          if (Fr === 0) {
            (ye = console.log),
              (Ur = console.info),
              (ss = console.warn),
              (os = console.error),
              (ls = console.group),
              (cs = console.groupCollapsed),
              (fs = console.groupEnd);
            var i = {
              configurable: !0,
              enumerable: !0,
              value: ds,
              writable: !0,
            };
            Object.defineProperties(console, {
              info: i,
              log: i,
              warn: i,
              error: i,
              group: i,
              groupCollapsed: i,
              groupEnd: i,
            });
          }
          Fr++;
        }
      }
      function Xo() {
        {
          if ((Fr--, Fr === 0)) {
            var i = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, {
              log: Et({}, i, { value: ye }),
              info: Et({}, i, { value: Ur }),
              warn: Et({}, i, { value: ss }),
              error: Et({}, i, { value: os }),
              group: Et({}, i, { value: ls }),
              groupCollapsed: Et({}, i, { value: cs }),
              groupEnd: Et({}, i, { value: fs }),
            });
          }
          Fr < 0 &&
            s(
              "disabledDepth fell below zero. This is a bug in React. Please file an issue."
            );
        }
      }
      var hs = r.ReactCurrentDispatcher,
        ps;
      function ur(i, a, c) {
        {
          if (ps === void 0)
            try {
              throw Error();
            } catch (m) {
              var d = m.stack.trim().match(/\n( *(at )?)/);
              ps = (d && d[1]) || "";
            }
          return (
            `
` +
            ps +
            i
          );
        }
      }
      var Oi = !1,
        Rn;
      {
        var ms = typeof WeakMap == "function" ? WeakMap : Map;
        Rn = new ms();
      }
      function jr(i, a) {
        if (!i || Oi) return "";
        {
          var c = Rn.get(i);
          if (c !== void 0) return c;
        }
        var d;
        Oi = !0;
        var m = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var y;
        (y = hs.current), (hs.current = null), Yo();
        try {
          if (a) {
            var w = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(w.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(w, []);
              } catch (He) {
                d = He;
              }
              Reflect.construct(i, [], w);
            } else {
              try {
                w.call();
              } catch (He) {
                d = He;
              }
              i.call(w.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (He) {
              d = He;
            }
            i();
          }
        } catch (He) {
          if (He && d && typeof He.stack == "string") {
            for (
              var k = He.stack.split(`
`),
                R = d.stack.split(`
`),
                M = k.length - 1,
                U = R.length - 1;
              M >= 1 && U >= 0 && k[M] !== R[U];

            )
              U--;
            for (; M >= 1 && U >= 0; M--, U--)
              if (k[M] !== R[U]) {
                if (M !== 1 || U !== 1)
                  do
                    if ((M--, U--, U < 0 || k[M] !== R[U])) {
                      var q =
                        `
` + k[M].replace(" at new ", " at ");
                      return (
                        i.displayName &&
                          q.includes("<anonymous>") &&
                          (q = q.replace("<anonymous>", i.displayName)),
                        typeof i == "function" && Rn.set(i, q),
                        q
                      );
                    }
                  while (M >= 1 && U >= 0);
                break;
              }
          }
        } finally {
          (Oi = !1), (hs.current = y), Xo(), (Error.prepareStackTrace = m);
        }
        var ce = i ? i.displayName || i.name : "",
          Le = ce ? ur(ce) : "";
        return typeof i == "function" && Rn.set(i, Le), Le;
      }
      function jf(i, a, c) {
        return jr(i, !0);
      }
      function Pu(i, a, c) {
        return jr(i, !1);
      }
      function Wf(i) {
        var a = i.prototype;
        return !!(a && a.isReactComponent);
      }
      function Mu(i, a, c) {
        if (i == null) return "";
        if (typeof i == "function") return jr(i, Wf(i));
        if (typeof i == "string") return ur(i);
        switch (i) {
          case Ii:
            return ur("Suspense");
          case Ai:
            return ur("SuspenseList");
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case Ri:
              return Pu(i.render);
            case Li:
              return Mu(i.type, a, c);
            case Br: {
              var d = i,
                m = d._payload,
                y = d._init;
              try {
                return Mu(y(m), a, c);
              } catch {}
            }
          }
        return "";
      }
      var Zo = {},
        Nu = r.ReactDebugCurrentFrame;
      function Di(i) {
        if (i) {
          var a = i._owner,
            c = Mu(i.type, i._source, a ? a.type : null);
          Nu.setExtraStackFrame(c);
        } else Nu.setExtraStackFrame(null);
      }
      function gs(i, a, c, d, m) {
        {
          var y = Function.call.bind(ge);
          for (var w in i)
            if (y(i, w)) {
              var k = void 0;
              try {
                if (typeof i[w] != "function") {
                  var R = Error(
                    (d || "React class") +
                      ": " +
                      c +
                      " type `" +
                      w +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof i[w] +
                      "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  throw ((R.name = "Invariant Violation"), R);
                }
                k = i[w](
                  a,
                  w,
                  d,
                  c,
                  null,
                  "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                );
              } catch (M) {
                k = M;
              }
              k &&
                !(k instanceof Error) &&
                (Di(m),
                s(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  d || "React class",
                  c,
                  w,
                  typeof k
                ),
                Di(null)),
                k instanceof Error &&
                  !(k.message in Zo) &&
                  ((Zo[k.message] = !0),
                  Di(m),
                  s("Failed %s type: %s", c, k.message),
                  Di(null));
            }
        }
      }
      var Wr;
      Wr = {};
      var Pi = {};
      Object.freeze(Pi);
      function Bu(i, a) {
        {
          var c = i.contextTypes;
          if (!c) return Pi;
          var d = {};
          for (var m in c) d[m] = a[m];
          {
            var y = Te(i) || "Unknown";
            gs(c, d, "context", y);
          }
          return d;
        }
      }
      function Fu(i, a, c, d) {
        {
          if (typeof i.getChildContext != "function") {
            {
              var m = Te(a) || "Unknown";
              Wr[m] ||
                ((Wr[m] = !0),
                s(
                  "%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",
                  m,
                  m
                ));
            }
            return c;
          }
          var y = i.getChildContext();
          for (var w in y)
            if (!(w in d))
              throw new Error(
                (Te(a) || "Unknown") +
                  '.getChildContext(): key "' +
                  w +
                  '" is not defined in childContextTypes.'
              );
          {
            var k = Te(a) || "Unknown";
            gs(d, y, "child context", k);
          }
          return Et({}, c, y);
        }
      }
      var Hr;
      Hr = {};
      var Hf = null,
        Pt = null;
      function _s(i) {
        i.context._currentValue2 = i.parentValue;
      }
      function pn(i) {
        i.context._currentValue2 = i.value;
      }
      function $r(i, a) {
        if (i !== a) {
          _s(i);
          var c = i.parent,
            d = a.parent;
          if (c === null) {
            if (d !== null)
              throw new Error(
                "The stacks must reach the root at the same time. This is a bug in React."
              );
          } else {
            if (d === null)
              throw new Error(
                "The stacks must reach the root at the same time. This is a bug in React."
              );
            $r(c, d);
          }
          pn(a);
        }
      }
      function Uu(i) {
        _s(i);
        var a = i.parent;
        a !== null && Uu(a);
      }
      function Mi(i) {
        var a = i.parent;
        a !== null && Mi(a), pn(i);
      }
      function bs(i, a) {
        _s(i);
        var c = i.parent;
        if (c === null)
          throw new Error(
            "The depth must equal at least at zero before reaching the root. This is a bug in React."
          );
        c.depth === a.depth ? $r(c, a) : bs(c, a);
      }
      function vs(i, a) {
        var c = a.parent;
        if (c === null)
          throw new Error(
            "The depth must equal at least at zero before reaching the root. This is a bug in React."
          );
        i.depth === c.depth ? $r(i, c) : vs(i, c), pn(a);
      }
      function Ni(i) {
        var a = Pt,
          c = i;
        a !== c &&
          (a === null
            ? Mi(c)
            : c === null
            ? Uu(a)
            : a.depth === c.depth
            ? $r(a, c)
            : a.depth > c.depth
            ? bs(a, c)
            : vs(a, c),
          (Pt = c));
      }
      function Ko(i, a) {
        var c;
        (c = i._currentValue2),
          (i._currentValue2 = a),
          i._currentRenderer2 !== void 0 &&
            i._currentRenderer2 !== null &&
            i._currentRenderer2 !== Hr &&
            s(
              "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
            ),
          (i._currentRenderer2 = Hr);
        var d = Pt,
          m = {
            parent: d,
            depth: d === null ? 0 : d.depth + 1,
            context: i,
            parentValue: c,
            value: a,
          };
        return (Pt = m), m;
      }
      function ju(i) {
        var a = Pt;
        if (a === null)
          throw new Error(
            "Tried to pop a Context at the root of the app. This is a bug in React."
          );
        a.context !== i &&
          s(
            "The parent context is not the expected context. This is probably a bug in React."
          );
        {
          var c = a.parentValue;
          c === Bf
            ? (a.context._currentValue2 = a.context._defaultValue)
            : (a.context._currentValue2 = c),
            i._currentRenderer2 !== void 0 &&
              i._currentRenderer2 !== null &&
              i._currentRenderer2 !== Hr &&
              s(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ),
            (i._currentRenderer2 = Hr);
        }
        return (Pt = a.parent);
      }
      function $f() {
        return Pt;
      }
      function Bi(i) {
        var a = i._currentValue2;
        return a;
      }
      function ys(i) {
        return i._reactInternals;
      }
      function Fi(i, a) {
        i._reactInternals = a;
      }
      var Wu = {},
        Jo = {},
        Hu,
        $u,
        Ui,
        ji,
        zu,
        zr,
        Vu,
        Vr,
        Wi;
      {
        (Hu = new Set()),
          ($u = new Set()),
          (Ui = new Set()),
          (Vu = new Set()),
          (ji = new Set()),
          (Vr = new Set()),
          (Wi = new Set());
        var qu = new Set();
        (zr = function (i, a) {
          if (!(i === null || typeof i == "function")) {
            var c = a + "_" + i;
            qu.has(c) ||
              (qu.add(c),
              s(
                "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                a,
                i
              ));
          }
        }),
          (zu = function (i, a) {
            if (a === void 0) {
              var c = Te(i) || "Component";
              ji.has(c) ||
                (ji.add(c),
                s(
                  "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                  c
                ));
            }
          });
      }
      function Gu(i, a) {
        {
          var c = i.constructor,
            d = (c && Te(c)) || "ReactClass",
            m = d + "." + a;
          if (Wu[m]) return;
          s(
            `%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`,
            a,
            a,
            d
          ),
            (Wu[m] = !0);
        }
      }
      var xs = {
        isMounted: function (i) {
          return !1;
        },
        enqueueSetState: function (i, a, c) {
          var d = ys(i);
          d.queue === null
            ? Gu(i, "setState")
            : (d.queue.push(a), c != null && zr(c, "setState"));
        },
        enqueueReplaceState: function (i, a, c) {
          var d = ys(i);
          (d.replace = !0), (d.queue = [a]), c != null && zr(c, "setState");
        },
        enqueueForceUpdate: function (i, a) {
          var c = ys(i);
          c.queue === null
            ? Gu(i, "forceUpdate")
            : a != null && zr(a, "setState");
        },
      };
      function Qo(i, a, c, d, m) {
        var y = c(m, d);
        zu(a, y);
        var w = y == null ? d : Et({}, d, y);
        return w;
      }
      function el(i, a, c) {
        var d = Pi,
          m = i.contextType;
        if ("contextType" in i) {
          var y =
            m === null ||
            (m !== void 0 && m.$$typeof === Ou && m._context === void 0);
          if (!y && !Wi.has(i)) {
            Wi.add(i);
            var w = "";
            m === void 0
              ? (w =
                  " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.")
              : typeof m != "object"
              ? (w = " However, it is set to a " + typeof m + ".")
              : m.$$typeof === Lu
              ? (w = " Did you accidentally pass the Context.Provider instead?")
              : m._context !== void 0
              ? (w = " Did you accidentally pass the Context.Consumer instead?")
              : (w =
                  " However, it is set to an object with keys {" +
                  Object.keys(m).join(", ") +
                  "}."),
              s(
                "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
                Te(i) || "Component",
                w
              );
          }
        }
        typeof m == "object" && m !== null ? (d = Bi(m)) : (d = c);
        var k = new i(a, d);
        {
          if (
            typeof i.getDerivedStateFromProps == "function" &&
            (k.state === null || k.state === void 0)
          ) {
            var R = Te(i) || "Component";
            Hu.has(R) ||
              (Hu.add(R),
              s(
                "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
                R,
                k.state === null ? "null" : "undefined",
                R
              ));
          }
          if (
            typeof i.getDerivedStateFromProps == "function" ||
            typeof k.getSnapshotBeforeUpdate == "function"
          ) {
            var M = null,
              U = null,
              q = null;
            if (
              (typeof k.componentWillMount == "function" &&
              k.componentWillMount.__suppressDeprecationWarning !== !0
                ? (M = "componentWillMount")
                : typeof k.UNSAFE_componentWillMount == "function" &&
                  (M = "UNSAFE_componentWillMount"),
              typeof k.componentWillReceiveProps == "function" &&
              k.componentWillReceiveProps.__suppressDeprecationWarning !== !0
                ? (U = "componentWillReceiveProps")
                : typeof k.UNSAFE_componentWillReceiveProps == "function" &&
                  (U = "UNSAFE_componentWillReceiveProps"),
              typeof k.componentWillUpdate == "function" &&
              k.componentWillUpdate.__suppressDeprecationWarning !== !0
                ? (q = "componentWillUpdate")
                : typeof k.UNSAFE_componentWillUpdate == "function" &&
                  (q = "UNSAFE_componentWillUpdate"),
              M !== null || U !== null || q !== null)
            ) {
              var ce = Te(i) || "Component",
                Le =
                  typeof i.getDerivedStateFromProps == "function"
                    ? "getDerivedStateFromProps()"
                    : "getSnapshotBeforeUpdate()";
              Ui.has(ce) ||
                (Ui.add(ce),
                s(
                  `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
                  ce,
                  Le,
                  M !== null
                    ? `
  ` + M
                    : "",
                  U !== null
                    ? `
  ` + U
                    : "",
                  q !== null
                    ? `
  ` + q
                    : ""
                ));
            }
          }
        }
        return k;
      }
      function zf(i, a, c) {
        {
          var d = Te(a) || "Component",
            m = i.render;
          m ||
            (a.prototype && typeof a.prototype.render == "function"
              ? s(
                  "%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",
                  d
                )
              : s(
                  "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",
                  d
                )),
            i.getInitialState &&
              !i.getInitialState.isReactClassApproved &&
              !i.state &&
              s(
                "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
                d
              ),
            i.getDefaultProps &&
              !i.getDefaultProps.isReactClassApproved &&
              s(
                "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
                d
              ),
            i.propTypes &&
              s(
                "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",
                d
              ),
            i.contextType &&
              s(
                "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
                d
              ),
            i.contextTypes &&
              s(
                "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",
                d
              ),
            a.contextType &&
              a.contextTypes &&
              !Vr.has(a) &&
              (Vr.add(a),
              s(
                "%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",
                d
              )),
            typeof i.componentShouldUpdate == "function" &&
              s(
                "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
                d
              ),
            a.prototype &&
              a.prototype.isPureReactComponent &&
              typeof i.shouldComponentUpdate < "u" &&
              s(
                "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
                Te(a) || "A pure component"
              ),
            typeof i.componentDidUnmount == "function" &&
              s(
                "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
                d
              ),
            typeof i.componentDidReceiveProps == "function" &&
              s(
                "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
                d
              ),
            typeof i.componentWillRecieveProps == "function" &&
              s(
                "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
                d
              ),
            typeof i.UNSAFE_componentWillRecieveProps == "function" &&
              s(
                "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
                d
              );
          var y = i.props !== c;
          i.props !== void 0 &&
            y &&
            s(
              "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
              d,
              d
            ),
            i.defaultProps &&
              s(
                "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
                d,
                d
              ),
            typeof i.getSnapshotBeforeUpdate == "function" &&
              typeof i.componentDidUpdate != "function" &&
              !$u.has(a) &&
              ($u.add(a),
              s(
                "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
                Te(a)
              )),
            typeof i.getDerivedStateFromProps == "function" &&
              s(
                "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                d
              ),
            typeof i.getDerivedStateFromError == "function" &&
              s(
                "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                d
              ),
            typeof a.getSnapshotBeforeUpdate == "function" &&
              s(
                "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
                d
              );
          var w = i.state;
          w &&
            (typeof w != "object" || Me(w)) &&
            s("%s.state: must be set to an object or null", d),
            typeof i.getChildContext == "function" &&
              typeof a.childContextTypes != "object" &&
              s(
                "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
                d
              );
        }
      }
      function Vf(i, a) {
        var c = a.state;
        if (typeof a.componentWillMount == "function") {
          if (a.componentWillMount.__suppressDeprecationWarning !== !0) {
            var d = Te(i) || "Unknown";
            Jo[d] ||
              (u(
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                d
              ),
              (Jo[d] = !0));
          }
          a.componentWillMount();
        }
        typeof a.UNSAFE_componentWillMount == "function" &&
          a.UNSAFE_componentWillMount(),
          c !== a.state &&
            (s(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              Te(i) || "Component"
            ),
            xs.enqueueReplaceState(a, a.state, null));
      }
      function qf(i, a, c, d) {
        if (i.queue !== null && i.queue.length > 0) {
          var m = i.queue,
            y = i.replace;
          if (((i.queue = null), (i.replace = !1), y && m.length === 1))
            a.state = m[0];
          else {
            for (
              var w = y ? m[0] : a.state, k = !0, R = y ? 1 : 0;
              R < m.length;
              R++
            ) {
              var M = m[R],
                U = typeof M == "function" ? M.call(a, w, c, d) : M;
              U != null && (k ? ((k = !1), (w = Et({}, w, U))) : Et(w, U));
            }
            a.state = w;
          }
        } else i.queue = null;
      }
      function tl(i, a, c, d) {
        zf(i, a, c);
        var m = i.state !== void 0 ? i.state : null;
        (i.updater = xs), (i.props = c), (i.state = m);
        var y = { queue: [], replace: !1 };
        Fi(i, y);
        var w = a.contextType;
        if (
          (typeof w == "object" && w !== null
            ? (i.context = Bi(w))
            : (i.context = d),
          i.state === c)
        ) {
          var k = Te(a) || "Component";
          Vu.has(k) ||
            (Vu.add(k),
            s(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              k
            ));
        }
        var R = a.getDerivedStateFromProps;
        typeof R == "function" && (i.state = Qo(i, a, R, m, c)),
          typeof a.getDerivedStateFromProps != "function" &&
            typeof i.getSnapshotBeforeUpdate != "function" &&
            (typeof i.UNSAFE_componentWillMount == "function" ||
              typeof i.componentWillMount == "function") &&
            (Vf(a, i), qf(y, i, c, d));
      }
      var Gf = { id: 1, overflow: "" };
      function nl(i) {
        var a = i.overflow,
          c = i.id,
          d = c & ~Ss(c);
        return d.toString(32) + a;
      }
      function ws(i, a, c) {
        var d = i.id,
          m = i.overflow,
          y = Yu(d) - 1,
          w = d & ~(1 << y),
          k = c + 1,
          R = Yu(a) + y;
        if (R > 30) {
          var M = y - (y % 5),
            U = (1 << M) - 1,
            q = (w & U).toString(32),
            ce = w >> M,
            Le = y - M,
            He = Yu(a) + Le,
            la = k << Le,
            ca = la | ce,
            Cl = q + m;
          return { id: (1 << He) | ca, overflow: Cl };
        } else {
          var fa = k << y,
            Lb = fa | w,
            Ob = m;
          return { id: (1 << R) | Lb, overflow: Ob };
        }
      }
      function Yu(i) {
        return 32 - Xu(i);
      }
      function Ss(i) {
        return 1 << (Yu(i) - 1);
      }
      var Xu = Math.clz32 ? Math.clz32 : Zf,
        Yf = Math.log,
        Xf = Math.LN2;
      function Zf(i) {
        var a = i >>> 0;
        return a === 0 ? 32 : (31 - ((Yf(a) / Xf) | 0)) | 0;
      }
      function Kf(i, a) {
        return (
          (i === a && (i !== 0 || 1 / i === 1 / a)) || (i !== i && a !== a)
        );
      }
      var Jf = typeof Object.is == "function" ? Object.is : Kf,
        mn = null,
        ks = null,
        Ct = null,
        le = null,
        In = !1,
        oe = !1,
        An = 0,
        Mt = null,
        ar = 0,
        Ln = 25,
        _t = !1,
        qr;
      function Xe() {
        if (mn === null)
          throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        return (
          _t &&
            s(
              "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"
            ),
          mn
        );
      }
      function Gr(i, a) {
        if (a === null)
          return (
            s(
              "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
              qr
            ),
            !1
          );
        i.length !== a.length &&
          s(
            `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
            qr,
            "[" + i.join(", ") + "]",
            "[" + a.join(", ") + "]"
          );
        for (var c = 0; c < a.length && c < i.length; c++)
          if (!Jf(i[c], a[c])) return !1;
        return !0;
      }
      function On() {
        if (ar > 0)
          throw new Error(
            "Rendered more hooks than during the previous render"
          );
        return { memoizedState: null, queue: null, next: null };
      }
      function Ts() {
        return (
          le === null
            ? Ct === null
              ? ((In = !1), (Ct = le = On()))
              : ((In = !0), (le = Ct))
            : le.next === null
            ? ((In = !1), (le = le.next = On()))
            : ((In = !0), (le = le.next)),
          le
        );
      }
      function rl(i, a) {
        (mn = a), (ks = i), (_t = !1), (An = 0);
      }
      function Es(i, a, c, d) {
        for (; oe; ) (oe = !1), (An = 0), (ar += 1), (le = null), (c = i(a, d));
        return Cs(), c;
      }
      function il() {
        var i = An !== 0;
        return i;
      }
      function Cs() {
        (_t = !1),
          (mn = null),
          (ks = null),
          (oe = !1),
          (Ct = null),
          (ar = 0),
          (Mt = null),
          (le = null);
      }
      function ul(i) {
        return (
          _t &&
            s(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            ),
          Bi(i)
        );
      }
      function Rs(i) {
        return (qr = "useContext"), Xe(), Bi(i);
      }
      function Is(i, a) {
        return typeof a == "function" ? a(i) : a;
      }
      function Qf(i) {
        return (qr = "useState"), Zu(Is, i);
      }
      function Zu(i, a, c) {
        if ((i !== Is && (qr = "useReducer"), (mn = Xe()), (le = Ts()), In)) {
          var d = le.queue,
            m = d.dispatch;
          if (Mt !== null) {
            var y = Mt.get(d);
            if (y !== void 0) {
              Mt.delete(d);
              var w = le.memoizedState,
                k = y;
              do {
                var R = k.action;
                (_t = !0), (w = i(w, R)), (_t = !1), (k = k.next);
              } while (k !== null);
              return (le.memoizedState = w), [w, m];
            }
          }
          return [le.memoizedState, m];
        } else {
          _t = !0;
          var M;
          i === Is
            ? (M = typeof a == "function" ? a() : a)
            : (M = c !== void 0 ? c(a) : a),
            (_t = !1),
            (le.memoizedState = M);
          var U = (le.queue = { last: null, dispatch: null }),
            q = (U.dispatch = ed.bind(null, mn, U));
          return [le.memoizedState, q];
        }
      }
      function al(i, a) {
        (mn = Xe()), (le = Ts());
        var c = a === void 0 ? null : a;
        if (le !== null) {
          var d = le.memoizedState;
          if (d !== null && c !== null) {
            var m = d[1];
            if (Gr(c, m)) return d[0];
          }
        }
        _t = !0;
        var y = i();
        return (_t = !1), (le.memoizedState = [y, c]), y;
      }
      function sl(i) {
        (mn = Xe()), (le = Ts());
        var a = le.memoizedState;
        if (a === null) {
          var c = { current: i };
          return Object.seal(c), (le.memoizedState = c), c;
        } else return a;
      }
      function ol(i, a) {
        (qr = "useLayoutEffect"),
          s(
            "useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes."
          );
      }
      function ed(i, a, c) {
        if (ar >= Ln)
          throw new Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (i === mn) {
          oe = !0;
          var d = { action: c, next: null };
          Mt === null && (Mt = new Map());
          var m = Mt.get(a);
          if (m === void 0) Mt.set(a, d);
          else {
            for (var y = m; y.next !== null; ) y = y.next;
            y.next = d;
          }
        }
      }
      function td(i, a) {
        return al(function () {
          return i;
        }, a);
      }
      function nd(i, a, c) {
        return Xe(), a(i._source);
      }
      function rd(i, a, c) {
        if (c === void 0)
          throw new Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return c();
      }
      function id(i) {
        return Xe(), i;
      }
      function ud() {
        throw new Error(
          "startTransition cannot be called during server rendering."
        );
      }
      function ad() {
        return Xe(), [!1, ud];
      }
      function sd() {
        var i = ks,
          a = nl(i.treeContext),
          c = Yr;
        if (c === null)
          throw new Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        var d = An++;
        return En(c, a, d);
      }
      function Ku() {}
      var ll = {
          readContext: ul,
          useContext: Rs,
          useMemo: al,
          useReducer: Zu,
          useRef: sl,
          useState: Qf,
          useInsertionEffect: Ku,
          useLayoutEffect: ol,
          useCallback: td,
          useImperativeHandle: Ku,
          useEffect: Ku,
          useDebugValue: Ku,
          useDeferredValue: id,
          useTransition: ad,
          useId: sd,
          useMutableSource: nd,
          useSyncExternalStore: rd,
        },
        Yr = null;
      function As(i) {
        Yr = i;
      }
      function Ls(i) {
        try {
          var a = "",
            c = i;
          do {
            switch (c.tag) {
              case 0:
                a += ur(c.type, null, null);
                break;
              case 1:
                a += Pu(c.type, null, null);
                break;
              case 2:
                a += jf(c.type, null, null);
                break;
            }
            c = c.parent;
          } while (c);
          return a;
        } catch (d) {
          return (
            `
Error generating stack: ` +
            d.message +
            `
` +
            d.stack
          );
        }
      }
      var Ju = r.ReactCurrentDispatcher,
        Os = r.ReactDebugCurrentFrame,
        Hi = 0,
        Dn = 1,
        Qu = 2,
        sr = 3,
        Ds = 4,
        cl = 0,
        Ps = 1,
        Xr = 2,
        fl = 12800;
      function Zr(i) {
        return console.error(i), null;
      }
      function $i() {}
      function dl(i, a, c, d, m, y, w, k, R) {
        var M = [],
          U = new Set(),
          q = {
            destination: null,
            responseState: a,
            progressiveChunkSize: d === void 0 ? fl : d,
            status: cl,
            fatalError: null,
            nextSegmentId: 0,
            allPendingTasks: 0,
            pendingRootTasks: 0,
            completedRootSegment: null,
            abortableTasks: U,
            pingedTasks: M,
            clientRenderedBoundaries: [],
            completedBoundaries: [],
            partialBoundaries: [],
            onError: m === void 0 ? Zr : m,
            onAllReady: y === void 0 ? $i : y,
            onShellReady: w === void 0 ? $i : w,
            onShellError: k === void 0 ? $i : k,
            onFatalError: R === void 0 ? $i : R,
          },
          ce = ea(q, 0, null, c, !1, !1);
        ce.parentFlushed = !0;
        var Le = Ms(q, i, null, ce, U, Pi, Hf, Gf);
        return M.push(Le), q;
      }
      function zi(i, a) {
        var c = i.pingedTasks;
        c.push(a),
          c.length === 1 &&
            g(function () {
              return Vs(i);
            });
      }
      function od(i, a) {
        return {
          id: on,
          rootSegmentID: -1,
          parentFlushed: !1,
          pendingTasks: 0,
          forceClientRender: !1,
          completedSegments: [],
          byteSize: 0,
          fallbackAbortableTasks: a,
          errorDigest: null,
        };
      }
      function Ms(i, a, c, d, m, y, w, k) {
        i.allPendingTasks++,
          c === null ? i.pendingRootTasks++ : c.pendingTasks++;
        var R = {
          node: a,
          ping: function () {
            return zi(i, R);
          },
          blockedBoundary: c,
          blockedSegment: d,
          abortSet: m,
          legacyContext: y,
          context: w,
          treeContext: k,
        };
        return (R.componentStack = null), m.add(R), R;
      }
      function ea(i, a, c, d, m, y) {
        return {
          status: Hi,
          id: -1,
          index: a,
          parentFlushed: !1,
          chunks: [],
          children: [],
          formatContext: d,
          boundary: c,
          lastPushedText: m,
          textEmbedded: y,
        };
      }
      var Nt = null;
      function Kr() {
        return Nt === null || Nt.componentStack === null
          ? ""
          : Ls(Nt.componentStack);
      }
      function bt(i, a) {
        i.componentStack = { tag: 0, parent: i.componentStack, type: a };
      }
      function ta(i, a) {
        i.componentStack = { tag: 1, parent: i.componentStack, type: a };
      }
      function Vi(i, a) {
        i.componentStack = { tag: 2, parent: i.componentStack, type: a };
      }
      function gn(i) {
        i.componentStack === null
          ? s(
              "Unexpectedly popped too many stack frames. This is a bug in React."
            )
          : (i.componentStack = i.componentStack.parent);
      }
      var qi = null;
      function Gt(i, a) {
        {
          var c;
          typeof a == "string"
            ? (c = a)
            : a && typeof a.message == "string"
            ? (c = a.message)
            : (c = String(a));
          var d = qi || Kr();
          (qi = null), (i.errorMessage = c), (i.errorComponentStack = d);
        }
      }
      function _n(i, a) {
        var c = i.onError(a);
        if (c != null && typeof c != "string")
          throw new Error(
            'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
              typeof c +
              '" instead'
          );
        return c;
      }
      function Jr(i, a) {
        var c = i.onShellError;
        c(a);
        var d = i.onFatalError;
        d(a),
          i.destination !== null
            ? ((i.status = Xr), Z(i.destination, a))
            : ((i.status = Ps), (i.fatalError = a));
      }
      function Gi(i, a, c) {
        bt(a, "Suspense");
        var d = a.blockedBoundary,
          m = a.blockedSegment,
          y = c.fallback,
          w = c.children,
          k = new Set(),
          R = od(i, k),
          M = m.chunks.length,
          U = ea(i, M, R, m.formatContext, !1, !1);
        m.children.push(U), (m.lastPushedText = !1);
        var q = ea(i, 0, null, m.formatContext, !1, !1);
        (q.parentFlushed = !0), (a.blockedBoundary = R), (a.blockedSegment = q);
        try {
          if (
            (ia(i, a, w),
            $o(q.chunks, i.responseState, q.lastPushedText, q.textEmbedded),
            (q.status = Dn),
            ua(R, q),
            R.pendingTasks === 0)
          ) {
            gn(a);
            return;
          }
        } catch (Le) {
          (q.status = Ds),
            (R.forceClientRender = !0),
            (R.errorDigest = _n(i, Le)),
            Gt(R, Le);
        } finally {
          (a.blockedBoundary = d), (a.blockedSegment = m);
        }
        var ce = Ms(i, y, d, U, k, a.legacyContext, a.context, a.treeContext);
        (ce.componentStack = a.componentStack), i.pingedTasks.push(ce), gn(a);
      }
      function na(i, a, c, d) {
        bt(a, c);
        var m = a.blockedSegment,
          y = ki(m.chunks, c, d, i.responseState, m.formatContext);
        m.lastPushedText = !1;
        var w = m.formatContext;
        (m.formatContext = kn(w, c, d)),
          ia(i, a, y),
          (m.formatContext = w),
          Ka(m.chunks, c),
          (m.lastPushedText = !1),
          gn(a);
      }
      function ld(i) {
        return i.prototype && i.prototype.isReactComponent;
      }
      function hl(i, a, c, d, m) {
        var y = {};
        rl(a, y);
        var w = c(d, m);
        return Es(c, d, w, m);
      }
      function pl(i, a, c, d, m) {
        var y = c.render();
        c.props !== m &&
          (Fs ||
            s(
              "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
              Te(d) || "a component"
            ),
          (Fs = !0));
        {
          var w = d.childContextTypes;
          if (w != null) {
            var k = a.legacyContext,
              R = Fu(c, d, k, w);
            (a.legacyContext = R), tt(i, a, y), (a.legacyContext = k);
            return;
          }
        }
        tt(i, a, y);
      }
      function ml(i, a, c, d) {
        Vi(a, c);
        var m = Bu(c, a.legacyContext),
          y = el(c, d, m);
        tl(y, c, d, m), pl(i, a, y, c, d), gn(a);
      }
      var Ns = {},
        ra = {},
        Bs = {},
        Yi = {},
        Fs = !1,
        Us = !1,
        js = !1,
        Ws = !1;
      function gl(i, a, c, d) {
        var m;
        if (
          ((m = Bu(c, a.legacyContext)),
          ta(a, c),
          c.prototype && typeof c.prototype.render == "function")
        ) {
          var y = Te(c) || "Unknown";
          Ns[y] ||
            (s(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              y,
              y
            ),
            (Ns[y] = !0));
        }
        var w = hl(i, a, c, d, m),
          k = il();
        if (
          typeof w == "object" &&
          w !== null &&
          typeof w.render == "function" &&
          w.$$typeof === void 0
        ) {
          var R = Te(c) || "Unknown";
          ra[R] ||
            (s(
              "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
              R,
              R,
              R
            ),
            (ra[R] = !0));
        }
        if (
          typeof w == "object" &&
          w !== null &&
          typeof w.render == "function" &&
          w.$$typeof === void 0
        ) {
          {
            var M = Te(c) || "Unknown";
            ra[M] ||
              (s(
                "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                M,
                M,
                M
              ),
              (ra[M] = !0));
          }
          tl(w, c, d, m), pl(i, a, w, c, d);
        } else if ((_l(c), k)) {
          var U = a.treeContext,
            q = 1,
            ce = 0;
          a.treeContext = ws(U, q, ce);
          try {
            tt(i, a, w);
          } finally {
            a.treeContext = U;
          }
        } else tt(i, a, w);
        gn(a);
      }
      function _l(i) {
        {
          if (
            (i &&
              i.childContextTypes &&
              s(
                "%s(...): childContextTypes cannot be defined on a function component.",
                i.displayName || i.name || "Component"
              ),
            typeof i.getDerivedStateFromProps == "function")
          ) {
            var a = Te(i) || "Unknown";
            Yi[a] ||
              (s(
                "%s: Function components do not support getDerivedStateFromProps.",
                a
              ),
              (Yi[a] = !0));
          }
          if (typeof i.contextType == "object" && i.contextType !== null) {
            var c = Te(i) || "Unknown";
            Bs[c] ||
              (s("%s: Function components do not support contextType.", c),
              (Bs[c] = !0));
          }
        }
      }
      function bl(i, a) {
        if (i && i.defaultProps) {
          var c = Et({}, a),
            d = i.defaultProps;
          for (var m in d) c[m] === void 0 && (c[m] = d[m]);
          return c;
        }
        return a;
      }
      function cd(i, a, c, d, m) {
        ta(a, c.render);
        var y = hl(i, a, c.render, d, m),
          w = il();
        if (w) {
          var k = a.treeContext,
            R = 1,
            M = 0;
          a.treeContext = ws(k, R, M);
          try {
            tt(i, a, y);
          } finally {
            a.treeContext = k;
          }
        } else tt(i, a, y);
        gn(a);
      }
      function vl(i, a, c, d, m) {
        var y = c.type,
          w = bl(y, d);
        Hs(i, a, y, w, m);
      }
      function fd(i, a, c, d) {
        c._context === void 0
          ? c !== c.Consumer &&
            (Ws ||
              ((Ws = !0),
              s(
                "Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
              )))
          : (c = c._context);
        var m = d.children;
        typeof m != "function" &&
          s(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          );
        var y = Bi(c),
          w = m(y);
        tt(i, a, w);
      }
      function dd(i, a, c, d) {
        var m = c._context,
          y = d.value,
          w = d.children,
          k;
        (k = a.context),
          (a.context = Ko(m, y)),
          tt(i, a, w),
          (a.context = ju(m)),
          k !== a.context &&
            s(
              "Popping the context provider did not return back to the original snapshot. This is a bug in React."
            );
      }
      function hd(i, a, c, d, m) {
        bt(a, "Lazy");
        var y = c._payload,
          w = c._init,
          k = w(y),
          R = bl(k, d);
        Hs(i, a, k, R, m), gn(a);
      }
      function Hs(i, a, c, d, m) {
        if (typeof c == "function")
          if (ld(c)) {
            ml(i, a, c, d);
            return;
          } else {
            gl(i, a, c, d);
            return;
          }
        if (typeof c == "string") {
          na(i, a, c, d);
          return;
        }
        switch (c) {
          case Nf:
          case Du:
          case is:
          case us:
          case zo: {
            tt(i, a, d.children);
            return;
          }
          case Ai: {
            bt(a, "SuspenseList"), tt(i, a, d.children), gn(a);
            return;
          }
          case as:
            throw new Error(
              "ReactDOMServer does not yet support scope components."
            );
          case Ii: {
            Gi(i, a, d);
            return;
          }
        }
        if (typeof c == "object" && c !== null)
          switch (c.$$typeof) {
            case Ri: {
              cd(i, a, c, d, m);
              return;
            }
            case Li: {
              vl(i, a, c, d, m);
              return;
            }
            case Lu: {
              dd(i, a, c, d);
              return;
            }
            case Ou: {
              fd(i, a, c, d);
              return;
            }
            case Br: {
              hd(i, a, c, d);
              return;
            }
          }
        var y = "";
        throw (
          ((c === void 0 ||
            (typeof c == "object" &&
              c !== null &&
              Object.keys(c).length === 0)) &&
            (y +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),
          new Error(
            "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " +
              ("but got: " + (c == null ? c : typeof c) + "." + y)
          ))
        );
      }
      function pd(i, a) {
        typeof Symbol == "function" &&
          i[Symbol.toStringTag] === "Generator" &&
          (Us ||
            s(
              "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."
            ),
          (Us = !0)),
          i.entries === a &&
            (js ||
              s(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ),
            (js = !0));
      }
      function tt(i, a, c) {
        try {
          return md(i, a, c);
        } catch (d) {
          throw (
            ((typeof d == "object" &&
              d !== null &&
              typeof d.then == "function") ||
              (qi = qi !== null ? qi : Kr()),
            d)
          );
        }
      }
      function md(i, a, c) {
        if (((a.node = c), typeof c == "object" && c !== null)) {
          switch (c.$$typeof) {
            case rs: {
              var d = c,
                m = d.type,
                y = d.props,
                w = d.ref;
              Hs(i, a, m, y, w);
              return;
            }
            case gt:
              throw new Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case Br: {
              var k = c,
                R = k._payload,
                M = k._init,
                U;
              try {
                U = M(R);
              } catch (fa) {
                throw (
                  (typeof fa == "object" &&
                    fa !== null &&
                    typeof fa.then == "function" &&
                    bt(a, "Lazy"),
                  fa)
                );
              }
              tt(i, a, U);
              return;
            }
          }
          if (Me(c)) {
            ct(i, a, c);
            return;
          }
          var q = qo(c);
          if (q) {
            pd(c, q);
            var ce = q.call(c);
            if (ce) {
              var Le = ce.next();
              if (!Le.done) {
                var He = [];
                do He.push(Le.value), (Le = ce.next());
                while (!Le.done);
                ct(i, a, He);
                return;
              }
              return;
            }
          }
          var la = Object.prototype.toString.call(c);
          throw new Error(
            "Objects are not valid as a React child (found: " +
              (la === "[object Object]"
                ? "object with keys {" + Object.keys(c).join(", ") + "}"
                : la) +
              "). If you meant to render a collection of children, use an array instead."
          );
        }
        if (typeof c == "string") {
          var ca = a.blockedSegment;
          ca.lastPushedText = Ho(
            a.blockedSegment.chunks,
            c,
            i.responseState,
            ca.lastPushedText
          );
          return;
        }
        if (typeof c == "number") {
          var Cl = a.blockedSegment;
          Cl.lastPushedText = Ho(
            a.blockedSegment.chunks,
            "" + c,
            i.responseState,
            Cl.lastPushedText
          );
          return;
        }
        typeof c == "function" &&
          s(
            "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."
          );
      }
      function ct(i, a, c) {
        for (var d = c.length, m = 0; m < d; m++) {
          var y = a.treeContext;
          a.treeContext = ws(y, d, m);
          try {
            ia(i, a, c[m]);
          } finally {
            a.treeContext = y;
          }
        }
      }
      function gd(i, a, c) {
        var d = a.blockedSegment,
          m = d.chunks.length,
          y = ea(i, m, null, d.formatContext, d.lastPushedText, !0);
        d.children.push(y), (d.lastPushedText = !1);
        var w = Ms(
          i,
          a.node,
          a.blockedBoundary,
          y,
          a.abortSet,
          a.legacyContext,
          a.context,
          a.treeContext
        );
        a.componentStack !== null &&
          (w.componentStack = a.componentStack.parent);
        var k = w.ping;
        c.then(k, k);
      }
      function ia(i, a, c) {
        var d = a.blockedSegment.formatContext,
          m = a.legacyContext,
          y = a.context,
          w = null;
        w = a.componentStack;
        try {
          return tt(i, a, c);
        } catch (k) {
          if (
            (Cs(),
            typeof k == "object" && k !== null && typeof k.then == "function")
          ) {
            gd(i, a, k),
              (a.blockedSegment.formatContext = d),
              (a.legacyContext = m),
              (a.context = y),
              Ni(y),
              (a.componentStack = w);
            return;
          } else
            throw (
              ((a.blockedSegment.formatContext = d),
              (a.legacyContext = m),
              (a.context = y),
              Ni(y),
              (a.componentStack = w),
              k)
            );
        }
      }
      function _d(i, a, c, d) {
        var m = _n(i, d);
        if (
          (a === null
            ? Jr(i, d)
            : (a.pendingTasks--,
              a.forceClientRender ||
                ((a.forceClientRender = !0),
                (a.errorDigest = m),
                Gt(a, d),
                a.parentFlushed && i.clientRenderedBoundaries.push(a))),
          i.allPendingTasks--,
          i.allPendingTasks === 0)
        ) {
          var y = i.onAllReady;
          y();
        }
      }
      function $s(i) {
        var a = this,
          c = i.blockedBoundary,
          d = i.blockedSegment;
        (d.status = sr), zs(a, c, d);
      }
      function yl(i, a, c) {
        var d = i.blockedBoundary,
          m = i.blockedSegment;
        if (((m.status = sr), d === null))
          a.allPendingTasks--,
            a.status !== Xr &&
              ((a.status = Xr), a.destination !== null && D(a.destination));
        else {
          if ((d.pendingTasks--, !d.forceClientRender)) {
            d.forceClientRender = !0;
            var y =
              c === void 0
                ? new Error(
                    "The render was aborted by the server without a reason."
                  )
                : c;
            d.errorDigest = a.onError(y);
            {
              var w = "The server did not finish this Suspense boundary: ";
              y && typeof y.message == "string"
                ? (y = w + y.message)
                : (y = w + String(y));
              var k = Nt;
              Nt = i;
              try {
                Gt(d, y);
              } finally {
                Nt = k;
              }
            }
            d.parentFlushed && a.clientRenderedBoundaries.push(d);
          }
          if (
            (d.fallbackAbortableTasks.forEach(function (M) {
              return yl(M, a, c);
            }),
            d.fallbackAbortableTasks.clear(),
            a.allPendingTasks--,
            a.allPendingTasks === 0)
          ) {
            var R = a.onAllReady;
            R();
          }
        }
      }
      function ua(i, a) {
        if (
          a.chunks.length === 0 &&
          a.children.length === 1 &&
          a.children[0].boundary === null
        ) {
          var c = a.children[0];
          (c.id = a.id), (c.parentFlushed = !0), c.status === Dn && ua(i, c);
        } else {
          var d = i.completedSegments;
          d.push(a);
        }
      }
      function zs(i, a, c) {
        if (a === null) {
          if (c.parentFlushed) {
            if (i.completedRootSegment !== null)
              throw new Error(
                "There can only be one root segment. This is a bug in React."
              );
            i.completedRootSegment = c;
          }
          if ((i.pendingRootTasks--, i.pendingRootTasks === 0)) {
            i.onShellError = $i;
            var d = i.onShellReady;
            d();
          }
        } else if ((a.pendingTasks--, !a.forceClientRender)) {
          if (a.pendingTasks === 0)
            c.parentFlushed && c.status === Dn && ua(a, c),
              a.parentFlushed && i.completedBoundaries.push(a),
              a.fallbackAbortableTasks.forEach($s, i),
              a.fallbackAbortableTasks.clear();
          else if (c.parentFlushed && c.status === Dn) {
            ua(a, c);
            var m = a.completedSegments;
            m.length === 1 && a.parentFlushed && i.partialBoundaries.push(a);
          }
        }
        if ((i.allPendingTasks--, i.allPendingTasks === 0)) {
          var y = i.onAllReady;
          y();
        }
      }
      function aa(i, a) {
        var c = a.blockedSegment;
        if (c.status === Hi) {
          Ni(a.context);
          var d = null;
          (d = Nt), (Nt = a);
          try {
            tt(i, a, a.node),
              $o(c.chunks, i.responseState, c.lastPushedText, c.textEmbedded),
              a.abortSet.delete(a),
              (c.status = Dn),
              zs(i, a.blockedBoundary, c);
          } catch (y) {
            if (
              (Cs(),
              typeof y == "object" && y !== null && typeof y.then == "function")
            ) {
              var m = a.ping;
              y.then(m, m);
            } else
              a.abortSet.delete(a),
                (c.status = Ds),
                _d(i, a.blockedBoundary, c, y);
          } finally {
            Nt = d;
          }
        }
      }
      function Vs(i) {
        if (i.status !== Xr) {
          var a = $f(),
            c = Ju.current;
          Ju.current = ll;
          var d;
          (d = Os.getCurrentStack), (Os.getCurrentStack = Kr);
          var m = Yr;
          As(i.responseState);
          try {
            var y = i.pingedTasks,
              w;
            for (w = 0; w < y.length; w++) {
              var k = y[w];
              aa(i, k);
            }
            y.splice(0, w), i.destination !== null && Gs(i, i.destination);
          } catch (R) {
            _n(i, R), Jr(i, R);
          } finally {
            As(m),
              (Ju.current = c),
              (Os.getCurrentStack = d),
              c === ll && Ni(a);
          }
        }
      }
      function sa(i, a, c) {
        switch (((c.parentFlushed = !0), c.status)) {
          case Hi: {
            var d = (c.id = i.nextSegmentId++);
            return (
              (c.lastPushedText = !1),
              (c.textEmbedded = !1),
              E(a, i.responseState, d)
            );
          }
          case Dn: {
            c.status = Qu;
            for (
              var m = !0, y = c.chunks, w = 0, k = c.children, R = 0;
              R < k.length;
              R++
            ) {
              for (var M = k[R]; w < M.index; w++) b(a, y[w]);
              m = Xi(i, a, M);
            }
            for (; w < y.length - 1; w++) b(a, y[w]);
            return w < y.length && (m = x(a, y[w])), m;
          }
          default:
            throw new Error(
              "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
            );
        }
      }
      function Xi(i, a, c) {
        var d = c.boundary;
        if (d === null) return sa(i, a, c);
        if (((d.parentFlushed = !0), d.forceClientRender))
          return (
            Pf(
              a,
              i.responseState,
              d.errorDigest,
              d.errorMessage,
              d.errorComponentStack
            ),
            sa(i, a, c),
            Mf(a, i.responseState)
          );
        if (d.pendingTasks > 0) {
          (d.rootSegmentID = i.nextSegmentId++),
            d.completedSegments.length > 0 && i.partialBoundaries.push(d);
          var m = (d.id = Tn(i.responseState));
          return ir(a, i.responseState, m), sa(i, a, c), Iu(a, i.responseState);
        } else {
          if (d.byteSize > i.progressiveChunkSize)
            return (
              (d.rootSegmentID = i.nextSegmentId++),
              i.completedBoundaries.push(d),
              ir(a, i.responseState, d.id),
              sa(i, a, c),
              Iu(a, i.responseState)
            );
          Df(a, i.responseState);
          var y = d.completedSegments;
          if (y.length !== 1)
            throw new Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          var w = y[0];
          return Xi(i, a, w), ns(a, i.responseState);
        }
      }
      function oa(i, a, c) {
        return Lf(
          a,
          i.responseState,
          c.id,
          c.errorDigest,
          c.errorMessage,
          c.errorComponentStack
        );
      }
      function Zi(i, a, c) {
        return (
          df(a, i.responseState, c.formatContext, c.id),
          Xi(i, a, c),
          hf(a, c.formatContext)
        );
      }
      function xl(i, a, c) {
        for (var d = c.completedSegments, m = 0; m < d.length; m++) {
          var y = d[m];
          qs(i, a, c, y);
        }
        return (d.length = 0), Ef(a, i.responseState, c.id, c.rootSegmentID);
      }
      function wl(i, a, c) {
        for (var d = c.completedSegments, m = 0; m < d.length; m++) {
          var y = d[m];
          if (!qs(i, a, c, y)) return m++, d.splice(0, m), !1;
        }
        return d.splice(0, m), !0;
      }
      function qs(i, a, c, d) {
        if (d.status === Qu) return !0;
        var m = d.id;
        if (m === -1) {
          var y = (d.id = c.rootSegmentID);
          if (y === -1)
            throw new Error(
              "A root segment ID must have been assigned by now. This is a bug in React."
            );
          return Zi(i, a, d);
        } else return Zi(i, a, d), xf(a, i.responseState, m);
      }
      function Gs(i, a) {
        try {
          var c = i.completedRootSegment;
          c !== null &&
            i.pendingRootTasks === 0 &&
            (Xi(i, a, c),
            (i.completedRootSegment = null),
            Ei(a, i.responseState));
          var d = i.clientRenderedBoundaries,
            m;
          for (m = 0; m < d.length; m++) {
            var y = d[m];
            if (!oa(i, a, y)) {
              (i.destination = null), m++, d.splice(0, m);
              return;
            }
          }
          d.splice(0, m);
          var w = i.completedBoundaries;
          for (m = 0; m < w.length; m++) {
            var k = w[m];
            if (!xl(i, a, k)) {
              (i.destination = null), m++, w.splice(0, m);
              return;
            }
          }
          w.splice(0, m);
          var R = i.partialBoundaries;
          for (m = 0; m < R.length; m++) {
            var M = R[m];
            if (!wl(i, a, M)) {
              (i.destination = null), m++, R.splice(0, m);
              return;
            }
          }
          R.splice(0, m);
          var U = i.completedBoundaries;
          for (m = 0; m < U.length; m++) {
            var q = U[m];
            if (!xl(i, a, q)) {
              (i.destination = null), m++, U.splice(0, m);
              return;
            }
          }
          U.splice(0, m);
        } finally {
          i.allPendingTasks === 0 &&
            i.pingedTasks.length === 0 &&
            i.clientRenderedBoundaries.length === 0 &&
            i.completedBoundaries.length === 0 &&
            (i.abortableTasks.size !== 0 &&
              s(
                "There was still abortable task at the root when we closed. This is a bug in React."
              ),
            D(a));
        }
      }
      function Ys(i) {
        g(function () {
          return Vs(i);
        });
      }
      function Ki(i, a) {
        if (i.status === Ps) {
          (i.status = Xr), Z(a, i.fatalError);
          return;
        }
        if (i.status !== Xr && i.destination === null) {
          i.destination = a;
          try {
            Gs(i, a);
          } catch (c) {
            _n(i, c), Jr(i, c);
          }
        }
      }
      function Sl(i, a) {
        try {
          var c = i.abortableTasks;
          c.forEach(function (d) {
            return yl(d, i, a);
          }),
            c.clear(),
            i.destination !== null && Gs(i, i.destination);
        } catch (d) {
          _n(i, d), Jr(i, d);
        }
      }
      function kl() {}
      function Xs(i, a, c, d) {
        var m = !1,
          y = null,
          w = "",
          k = {
            push: function (q) {
              return q !== null && (w += q), !0;
            },
            destroy: function (q) {
              (m = !0), (y = q);
            },
          },
          R = !1;
        function M() {
          R = !0;
        }
        var U = dl(
          i,
          jo(c, a ? a.identifierPrefix : void 0),
          Wo(),
          1 / 0,
          kl,
          void 0,
          M,
          void 0,
          void 0
        );
        if ((Ys(U), Sl(U, d), Ki(U, k), m)) throw y;
        if (!R)
          throw new Error(
            "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
          );
        return w;
      }
      function bd(i, a) {
        (i.prototype = Object.create(a.prototype)),
          (i.prototype.constructor = i),
          (i.__proto__ = a);
      }
      var Tl = (function (i) {
        bd(a, i);
        function a() {
          var d;
          return (
            (d = i.call(this, {}) || this),
            (d.request = null),
            (d.startedFlowing = !1),
            d
          );
        }
        var c = a.prototype;
        return (
          (c._destroy = function (m, y) {
            Sl(this.request), y(m);
          }),
          (c._read = function (m) {
            this.startedFlowing && Ki(this.request, this);
          }),
          a
        );
      })(t.Readable);
      function vd() {}
      function El(i, a, c) {
        function d() {
          (m.startedFlowing = !0), Ki(y, m);
        }
        var m = new Tl(),
          y = dl(
            i,
            jo(!1, a ? a.identifierPrefix : void 0),
            Wo(),
            1 / 0,
            vd,
            d,
            void 0,
            void 0
          );
        return (m.request = y), Ys(y), m;
      }
      function o(i, a) {
        return (
          s(
            "renderToNodeStream is deprecated. Use renderToPipeableStream instead."
          ),
          El(i, a)
        );
      }
      function l(i, a) {
        return El(i, a);
      }
      function h(i, a) {
        return Xs(
          i,
          a,
          !1,
          'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server'
        );
      }
      function p(i, a) {
        return Xs(
          i,
          a,
          !0,
          'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server'
        );
      }
      (_a.renderToNodeStream = o),
        (_a.renderToStaticMarkup = p),
        (_a.renderToStaticNodeStream = l),
        (_a.renderToString = h),
        (_a.version = n);
    })();
});
var Nm = re((f0) => {
  "use strict";
  process.env.NODE_ENV !== "production" &&
    (function () {
      "use strict";
      var e = Js(),
        t = require("util"),
        n = "18.2.0",
        r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function u(o) {
        {
          for (
            var l = arguments.length, h = new Array(l > 1 ? l - 1 : 0), p = 1;
            p < l;
            p++
          )
            h[p - 1] = arguments[p];
          f("warn", o, h);
        }
      }
      function s(o) {
        {
          for (
            var l = arguments.length, h = new Array(l > 1 ? l - 1 : 0), p = 1;
            p < l;
            p++
          )
            h[p - 1] = arguments[p];
          f("error", o, h);
        }
      }
      function f(o, l, h) {
        {
          var p = r.ReactDebugCurrentFrame,
            i = p.getStackAddendum();
          i !== "" && ((l += "%s"), (h = h.concat([i])));
          var a = h.map(function (c) {
            return String(c);
          });
          a.unshift("Warning: " + l),
            Function.prototype.apply.call(console[o], console, a);
        }
      }
      function g(o) {
        setImmediate(o);
      }
      function v(o) {
        typeof o.flush == "function" && o.flush();
      }
      var b = 2048,
        x = null,
        T = 0,
        D = !0;
      function L(o) {
        (x = new Uint8Array(b)), (T = 0), (D = !0);
      }
      function B(o, l) {
        if (l.length !== 0) {
          if (l.length * 3 > b) {
            T > 0 && (K(o, x.subarray(0, T)), (x = new Uint8Array(b)), (T = 0)),
              K(o, Be.encode(l));
            return;
          }
          var h = x;
          T > 0 && (h = x.subarray(T));
          var p = Be.encodeInto(l, h),
            i = p.read,
            a = p.written;
          (T += a),
            i < l.length &&
              (K(o, x),
              (x = new Uint8Array(b)),
              (T = Be.encodeInto(l.slice(i), x).written)),
            T === b && (K(o, x), (x = new Uint8Array(b)), (T = 0));
        }
      }
      function Z(o, l) {
        if (l.byteLength !== 0) {
          if (l.byteLength > b) {
            T > 0 && (K(o, x.subarray(0, T)), (x = new Uint8Array(b)), (T = 0)),
              K(o, l);
            return;
          }
          var h = l,
            p = x.length - T;
          p < h.byteLength &&
            (p === 0
              ? K(o, x)
              : (x.set(h.subarray(0, p), T),
                (T += p),
                K(o, x),
                (h = h.subarray(p))),
            (x = new Uint8Array(b)),
            (T = 0)),
            x.set(h, T),
            (T += h.byteLength),
            T === b && (K(o, x), (x = new Uint8Array(b)), (T = 0));
        }
      }
      function O(o, l) {
        typeof l == "string" ? B(o, l) : Z(o, l);
      }
      function K(o, l) {
        var h = o.write(l);
        D = D && h;
      }
      function G(o, l) {
        return O(o, l), D;
      }
      function se(o) {
        x && T > 0 && o.write(x.subarray(0, T)), (x = null), (T = 0), (D = !0);
      }
      function Se(o) {
        o.end();
      }
      var Be = new t.TextEncoder();
      function ge(o) {
        return o;
      }
      function N(o) {
        return Be.encode(o);
      }
      function ke(o, l) {
        o.destroy(l);
      }
      function St(o) {
        {
          var l = typeof Symbol == "function" && Symbol.toStringTag,
            h = (l && o[Symbol.toStringTag]) || o.constructor.name || "Object";
          return h;
        }
      }
      function Fe(o) {
        try {
          return en(o), !1;
        } catch {
          return !0;
        }
      }
      function en(o) {
        return "" + o;
      }
      function Lt(o, l) {
        if (Fe(o))
          return (
            s(
              "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",
              l,
              St(o)
            ),
            en(o)
          );
      }
      function Wt(o, l) {
        if (Fe(o))
          return (
            s(
              "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
              l,
              St(o)
            ),
            en(o)
          );
      }
      function st(o) {
        if (Fe(o))
          return (
            s(
              "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",
              St(o)
            ),
            en(o)
          );
      }
      var $ = Object.prototype.hasOwnProperty,
        yr = 0,
        Ot = 1,
        xn = 2,
        tn = 3,
        ot = 4,
        jn = 5,
        ve = 6,
        Ie =
          ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
        Wn = Ie + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
        Hn = new RegExp("^[" + Ie + "][" + Wn + "]*$"),
        $n = {},
        xr = {};
      function nn(o) {
        return $.call(xr, o)
          ? !0
          : $.call($n, o)
          ? !1
          : Hn.test(o)
          ? ((xr[o] = !0), !0)
          : (($n[o] = !0), s("Invalid attribute name: `%s`", o), !1);
      }
      function hu(o, l, h, p) {
        if (h !== null && h.type === yr) return !1;
        switch (typeof l) {
          case "function":
          case "symbol":
            return !0;
          case "boolean": {
            if (p) return !1;
            if (h !== null) return !h.acceptsBooleans;
            var i = o.toLowerCase().slice(0, 5);
            return i !== "data-" && i !== "aria-";
          }
          default:
            return !1;
        }
      }
      function pu(o) {
        return De.hasOwnProperty(o) ? De[o] : null;
      }
      function Ue(o, l, h, p, i, a, c) {
        (this.acceptsBooleans = l === xn || l === tn || l === ot),
          (this.attributeName = p),
          (this.attributeNamespace = i),
          (this.mustUseProperty = h),
          (this.propertyName = o),
          (this.type = l),
          (this.sanitizeURL = a),
          (this.removeEmptyString = c);
      }
      var De = {},
        mu = [
          "children",
          "dangerouslySetInnerHTML",
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style",
        ];
      mu.forEach(function (o) {
        De[o] = new Ue(o, yr, !1, o, null, !1, !1);
      }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (o) {
          var l = o[0],
            h = o[1];
          De[l] = new Ue(l, Ot, !1, h, null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (o) {
            De[o] = new Ue(o, xn, !1, o.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (o) {
          De[o] = new Ue(o, xn, !1, o, null, !1, !1);
        }),
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope",
        ].forEach(function (o) {
          De[o] = new Ue(o, tn, !1, o.toLowerCase(), null, !1, !1);
        }),
        ["checked", "multiple", "muted", "selected"].forEach(function (o) {
          De[o] = new Ue(o, tn, !0, o, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (o) {
          De[o] = new Ue(o, ot, !1, o, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (o) {
          De[o] = new Ue(o, ve, !1, o, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (o) {
          De[o] = new Ue(o, jn, !1, o.toLowerCase(), null, !1, !1);
        });
      var zn = /[\-\:]([a-z])/g,
        ht = function (o) {
          return o[1].toUpperCase();
        };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height",
      ].forEach(function (o) {
        var l = o.replace(zn, ht);
        De[l] = new Ue(l, Ot, !1, o, null, !1, !1);
      }),
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type",
        ].forEach(function (o) {
          var l = o.replace(zn, ht);
          De[l] = new Ue(l, Ot, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
        }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (o) {
          var l = o.replace(zn, ht);
          De[l] = new Ue(
            l,
            Ot,
            !1,
            o,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (o) {
          De[o] = new Ue(o, Ot, !1, o.toLowerCase(), null, !1, !1);
        });
      var Oa = "xlinkHref";
      (De[Oa] = new Ue(
        "xlinkHref",
        Ot,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
        ["src", "href", "action", "formAction"].forEach(function (o) {
          De[o] = new Ue(o, Ot, !1, o.toLowerCase(), null, !0, !0);
        });
      var Vn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      };
      function Ht(o, l) {
        return o + l.charAt(0).toUpperCase() + l.substring(1);
      }
      var qn = ["Webkit", "ms", "Moz", "O"];
      Object.keys(Vn).forEach(function (o) {
        qn.forEach(function (l) {
          Vn[Ht(l, o)] = Vn[o];
        });
      });
      var gu = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0,
      };
      function Gn(o, l) {
        gu[l.type] ||
          l.onChange ||
          l.onInput ||
          l.readOnly ||
          l.disabled ||
          l.value == null ||
          s(
            "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
          ),
          l.onChange ||
            l.readOnly ||
            l.disabled ||
            l.checked == null ||
            s(
              "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
            );
      }
      function oi(o, l) {
        if (o.indexOf("-") === -1) return typeof l.is == "string";
        switch (o) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      var Yn = {
          "aria-current": 0,
          "aria-description": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0,
        },
        $t = {},
        ze = new RegExp("^(aria)-[" + Wn + "]*$"),
        _u = new RegExp("^(aria)[A-Z][" + Wn + "]*$");
      function Da(o, l) {
        {
          if ($.call($t, l) && $t[l]) return !0;
          if (_u.test(l)) {
            var h = "aria-" + l.slice(4).toLowerCase(),
              p = Yn.hasOwnProperty(h) ? h : null;
            if (p == null)
              return (
                s(
                  "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                  l
                ),
                ($t[l] = !0),
                !0
              );
            if (l !== p)
              return (
                s("Invalid ARIA attribute `%s`. Did you mean `%s`?", l, p),
                ($t[l] = !0),
                !0
              );
          }
          if (ze.test(l)) {
            var i = l.toLowerCase(),
              a = Yn.hasOwnProperty(i) ? i : null;
            if (a == null) return ($t[l] = !0), !1;
            if (l !== a)
              return (
                s("Unknown ARIA attribute `%s`. Did you mean `%s`?", l, a),
                ($t[l] = !0),
                !0
              );
          }
        }
        return !0;
      }
      function Pa(o, l) {
        {
          var h = [];
          for (var p in l) {
            var i = Da(o, p);
            i || h.push(p);
          }
          var a = h
            .map(function (c) {
              return "`" + c + "`";
            })
            .join(", ");
          h.length === 1
            ? s(
                "Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                a,
                o
              )
            : h.length > 1 &&
              s(
                "Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                a,
                o
              );
        }
      }
      function li(o, l) {
        oi(o, l) || Pa(o, l);
      }
      var bu = !1;
      function Ma(o, l) {
        {
          if (o !== "input" && o !== "textarea" && o !== "select") return;
          l != null &&
            l.value === null &&
            !bu &&
            ((bu = !0),
            o === "select" && l.multiple
              ? s(
                  "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
                  o
                )
              : s(
                  "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
                  o
                ));
        }
      }
      var ci = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          imagesizes: "imageSizes",
          imagesrcset: "imageSrcSet",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan",
        },
        rn = function () {};
      {
        var Ve = {},
          vu = /^on./,
          yu = /^on[^A-Z]/,
          un = new RegExp("^(aria)-[" + Wn + "]*$"),
          fi = new RegExp("^(aria)[A-Z][" + Wn + "]*$");
        rn = function (o, l, h, p) {
          if ($.call(Ve, l) && Ve[l]) return !0;
          var i = l.toLowerCase();
          if (i === "onfocusin" || i === "onfocusout")
            return (
              s(
                "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
              ),
              (Ve[l] = !0),
              !0
            );
          if (p != null) {
            var a = p.registrationNameDependencies,
              c = p.possibleRegistrationNames;
            if (a.hasOwnProperty(l)) return !0;
            var d = c.hasOwnProperty(i) ? c[i] : null;
            if (d != null)
              return (
                s(
                  "Invalid event handler property `%s`. Did you mean `%s`?",
                  l,
                  d
                ),
                (Ve[l] = !0),
                !0
              );
            if (vu.test(l))
              return (
                s(
                  "Unknown event handler property `%s`. It will be ignored.",
                  l
                ),
                (Ve[l] = !0),
                !0
              );
          } else if (vu.test(l))
            return (
              yu.test(l) &&
                s(
                  "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
                  l
                ),
              (Ve[l] = !0),
              !0
            );
          if (un.test(l) || fi.test(l)) return !0;
          if (i === "innerhtml")
            return (
              s(
                "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
              ),
              (Ve[l] = !0),
              !0
            );
          if (i === "aria")
            return (
              s(
                "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
              ),
              (Ve[l] = !0),
              !0
            );
          if (i === "is" && h !== null && h !== void 0 && typeof h != "string")
            return (
              s(
                "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
                typeof h
              ),
              (Ve[l] = !0),
              !0
            );
          if (typeof h == "number" && isNaN(h))
            return (
              s(
                "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
                l
              ),
              (Ve[l] = !0),
              !0
            );
          var m = pu(l),
            y = m !== null && m.type === yr;
          if (ci.hasOwnProperty(i)) {
            var w = ci[i];
            if (w !== l)
              return (
                s("Invalid DOM property `%s`. Did you mean `%s`?", l, w),
                (Ve[l] = !0),
                !0
              );
          } else if (!y && l !== i)
            return (
              s(
                "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
                l,
                i
              ),
              (Ve[l] = !0),
              !0
            );
          return typeof h == "boolean" && hu(l, h, m, !1)
            ? (h
                ? s(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                    h,
                    l,
                    l,
                    h,
                    l
                  )
                : s(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                    h,
                    l,
                    l,
                    h,
                    l,
                    l,
                    l
                  ),
              (Ve[l] = !0),
              !0)
            : y
            ? !0
            : hu(l, h, m, !1)
            ? ((Ve[l] = !0), !1)
            : ((h === "false" || h === "true") &&
                m !== null &&
                m.type === tn &&
                (s(
                  "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
                  h,
                  l,
                  h === "false"
                    ? "The browser will interpret it as a truthy value."
                    : 'Although this works, it will not work as expected if you pass the string "false".',
                  l,
                  h
                ),
                (Ve[l] = !0)),
              !0);
        };
      }
      var di = function (o, l, h) {
        {
          var p = [];
          for (var i in l) {
            var a = rn(o, i, l[i], h);
            a || p.push(i);
          }
          var c = p
            .map(function (d) {
              return "`" + d + "`";
            })
            .join(", ");
          p.length === 1
            ? s(
                "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                c,
                o
              )
            : p.length > 1 &&
              s(
                "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                c,
                o
              );
        }
      };
      function wr(o, l, h) {
        oi(o, l) || di(o, l, h);
      }
      var Xn = function () {};
      {
        var Sr = /^(?:webkit|moz|o)[A-Z]/,
          Na = /^-ms-/,
          Ba = /-(.)/g,
          xu = /;\s*$/,
          wn = {},
          hi = {},
          Sn = !1,
          kr = !1,
          Pe = function (o) {
            return o.replace(Ba, function (l, h) {
              return h.toUpperCase();
            });
          },
          Fa = function (o) {
            (wn.hasOwnProperty(o) && wn[o]) ||
              ((wn[o] = !0),
              s(
                "Unsupported style property %s. Did you mean %s?",
                o,
                Pe(o.replace(Na, "ms-"))
              ));
          },
          Ua = function (o) {
            (wn.hasOwnProperty(o) && wn[o]) ||
              ((wn[o] = !0),
              s(
                "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                o,
                o.charAt(0).toUpperCase() + o.slice(1)
              ));
          },
          ja = function (o, l) {
            (hi.hasOwnProperty(l) && hi[l]) ||
              ((hi[l] = !0),
              s(
                `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                o,
                l.replace(xu, "")
              ));
          },
          Wa = function (o, l) {
            Sn ||
              ((Sn = !0),
              s(
                "`NaN` is an invalid value for the `%s` css style property.",
                o
              ));
          },
          pi = function (o, l) {
            kr ||
              ((kr = !0),
              s(
                "`Infinity` is an invalid value for the `%s` css style property.",
                o
              ));
          };
        Xn = function (o, l) {
          o.indexOf("-") > -1
            ? Fa(o)
            : Sr.test(o)
            ? Ua(o)
            : xu.test(l) && ja(o, l),
            typeof l == "number" &&
              (isNaN(l) ? Wa(o, l) : isFinite(l) || pi(o, l));
        };
      }
      var wu = Xn,
        Ha = /["'&<>]/;
      function Me(o) {
        st(o);
        var l = "" + o,
          h = Ha.exec(l);
        if (!h) return l;
        var p,
          i = "",
          a,
          c = 0;
        for (a = h.index; a < l.length; a++) {
          switch (l.charCodeAt(a)) {
            case 34:
              p = "&quot;";
              break;
            case 38:
              p = "&amp;";
              break;
            case 39:
              p = "&#x27;";
              break;
            case 60:
              p = "&lt;";
              break;
            case 62:
              p = "&gt;";
              break;
            default:
              continue;
          }
          c !== a && (i += l.substring(c, a)), (c = a + 1), (i += p);
        }
        return c !== a ? i + l.substring(c, a) : i;
      }
      function je(o) {
        return typeof o == "boolean" || typeof o == "number" ? "" + o : Me(o);
      }
      var $a = /([A-Z])/g,
        za = /^ms-/;
      function Va(o) {
        return o.replace($a, "-$1").toLowerCase().replace(za, "-ms-");
      }
      var Su =
          /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
        ku = !1;
      function qa(o) {
        !ku &&
          Su.test(o) &&
          ((ku = !0),
          s(
            "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
            JSON.stringify(o)
          ));
      }
      var Ga = Array.isArray;
      function Zn(o) {
        return Ga(o);
      }
      var Tr = N("<script>"),
        an = N("</script>"),
        Er = N('<script src="'),
        Cr = N('<script type="module" src="'),
        Kn = N('" async=""></script>');
      function mi(o) {
        return st(o), ("" + o).replace(sn, Rr);
      }
      var sn = /(<\/|<)(s)(cript)/gi,
        Rr = function (o, l, h, p) {
          return "" + l + (h === "s" ? "\\u0073" : "\\u0053") + p;
        };
      function pt(o, l, h, p, i) {
        var a = o === void 0 ? "" : o,
          c = l === void 0 ? Tr : N('<script nonce="' + je(l) + '">'),
          d = [];
        if ((h !== void 0 && d.push(c, mi(h), an), p !== void 0))
          for (var m = 0; m < p.length; m++) d.push(Er, je(p[m]), Kn);
        if (i !== void 0)
          for (var y = 0; y < i.length; y++) d.push(Cr, je(i[y]), Kn);
        return {
          bootstrapChunks: d,
          startInlineScript: c,
          placeholderPrefix: N(a + "P:"),
          segmentPrefix: N(a + "S:"),
          boundaryPrefix: a + "B:",
          idPrefix: a,
          nextSuspenseID: 0,
          sentCompleteSegmentFunction: !1,
          sentCompleteBoundaryFunction: !1,
          sentClientRenderFunction: !1,
        };
      }
      var kn = 0,
        on = 1,
        Tn = 2,
        En = 3,
        ln = 4,
        Jn = 5,
        gi = 6,
        _i = 7;
      function Ge(o, l) {
        return { insertionMode: o, selectedValue: l };
      }
      function bi(o) {
        var l =
          o === "http://www.w3.org/2000/svg"
            ? Tn
            : o === "http://www.w3.org/1998/Math/MathML"
            ? En
            : kn;
        return Ge(l, null);
      }
      function Ir(o, l, h) {
        switch (l) {
          case "select":
            return Ge(on, h.value != null ? h.value : h.defaultValue);
          case "svg":
            return Ge(Tn, null);
          case "math":
            return Ge(En, null);
          case "foreignObject":
            return Ge(on, null);
          case "table":
            return Ge(ln, null);
          case "thead":
          case "tbody":
          case "tfoot":
            return Ge(Jn, null);
          case "colgroup":
            return Ge(_i, null);
          case "tr":
            return Ge(gi, null);
        }
        return o.insertionMode >= ln || o.insertionMode === kn
          ? Ge(on, null)
          : o;
      }
      var Ar = null;
      function Lr(o) {
        var l = o.nextSuspenseID++;
        return N(o.boundaryPrefix + l.toString(16));
      }
      function Tu(o, l, h) {
        var p = o.idPrefix,
          i = ":" + p + "R" + l;
        return h > 0 && (i += "H" + h.toString(32)), i + ":";
      }
      function mt(o) {
        return je(o);
      }
      var cn = N("<!-- -->");
      function zt(o, l, h, p) {
        return l === "" ? p : (p && o.push(cn), o.push(mt(l)), !0);
      }
      function Cn(o, l, h, p) {
        h && p && o.push(cn);
      }
      var qe = new Map();
      function Dt(o) {
        var l = qe.get(o);
        if (l !== void 0) return l;
        var h = N(je(Va(o)));
        return qe.set(o, h), h;
      }
      var Qn = N(' style="'),
        er = N(":"),
        fn = N(";");
      function tr(o, l, h) {
        if (typeof h != "object")
          throw new Error(
            "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
          );
        var p = !0;
        for (var i in h)
          if ($.call(h, i)) {
            var a = h[i];
            if (!(a == null || typeof a == "boolean" || a === "")) {
              var c = void 0,
                d = void 0,
                m = i.indexOf("--") === 0;
              m
                ? ((c = je(i)), Wt(a, i), (d = je(("" + a).trim())))
                : (wu(i, a),
                  (c = Dt(i)),
                  typeof a == "number"
                    ? a !== 0 && !$.call(Vn, i)
                      ? (d = a + "px")
                      : (d = "" + a)
                    : (Wt(a, i), (d = je(("" + a).trim())))),
                p ? ((p = !1), o.push(Qn, c, er, d)) : o.push(fn, c, er, d);
            }
          }
        p || o.push(Vt);
      }
      var kt = N(" "),
        dn = N('="'),
        Vt = N('"'),
        Or = N('=""');
      function Ye(o, l, h, p) {
        switch (h) {
          case "style": {
            tr(o, l, p);
            return;
          }
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            return;
        }
        if (
          !(
            h.length > 2 &&
            (h[0] === "o" || h[0] === "O") &&
            (h[1] === "n" || h[1] === "N")
          )
        ) {
          var i = pu(h);
          if (i !== null) {
            switch (typeof p) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                if (!i.acceptsBooleans) return;
            }
            var a = i.attributeName,
              c = a;
            switch (i.type) {
              case tn:
                p && o.push(kt, c, Or);
                return;
              case ot:
                p === !0
                  ? o.push(kt, c, Or)
                  : p === !1 || o.push(kt, c, dn, je(p), Vt);
                return;
              case jn:
                isNaN(p) || o.push(kt, c, dn, je(p), Vt);
                break;
              case ve:
                !isNaN(p) && p >= 1 && o.push(kt, c, dn, je(p), Vt);
                break;
              default:
                i.sanitizeURL && (Lt(p, a), (p = "" + p), qa(p)),
                  o.push(kt, c, dn, je(p), Vt);
            }
          } else if (nn(h)) {
            switch (typeof p) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                var d = h.toLowerCase().slice(0, 5);
                if (d !== "data-" && d !== "aria-") return;
              }
            }
            o.push(kt, h, dn, je(p), Vt);
          }
        }
      }
      var Tt = N(">"),
        vi = N("/>");
      function nr(o, l, h) {
        if (l != null) {
          if (h != null)
            throw new Error(
              "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          if (typeof l != "object" || !("__html" in l))
            throw new Error(
              "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
            );
          var p = l.__html;
          p != null && (st(p), o.push("" + p));
        }
      }
      var Dr = !1,
        yi = !1,
        xi = !1,
        Eu = !1,
        Cu = !1,
        Ru = !1,
        wi = !1;
      function hn(o, l) {
        {
          var h = o[l];
          if (h != null) {
            var p = Zn(h);
            o.multiple && !p
              ? s(
                  "The `%s` prop supplied to <select> must be an array if `multiple` is true.",
                  l
                )
              : !o.multiple &&
                p &&
                s(
                  "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",
                  l
                );
          }
        }
      }
      function Ya(o, l, h) {
        Gn("select", l),
          hn(l, "value"),
          hn(l, "defaultValue"),
          l.value !== void 0 &&
            l.defaultValue !== void 0 &&
            !xi &&
            (s(
              "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"
            ),
            (xi = !0)),
          o.push(C("select"));
        var p = null,
          i = null;
        for (var a in l)
          if ($.call(l, a)) {
            var c = l[a];
            if (c == null) continue;
            switch (a) {
              case "children":
                p = c;
                break;
              case "dangerouslySetInnerHTML":
                i = c;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                Ye(o, h, a, c);
                break;
            }
          }
        return o.push(Tt), nr(o, i, p), p;
      }
      function qt(o) {
        var l = "";
        return (
          e.Children.forEach(o, function (h) {
            h != null &&
              ((l += h),
              !Cu &&
                typeof h != "string" &&
                typeof h != "number" &&
                ((Cu = !0),
                s(
                  "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
                )));
          }),
          l
        );
      }
      var Pr = N(' selected=""');
      function Xa(o, l, h, p) {
        var i = p.selectedValue;
        o.push(C("option"));
        var a = null,
          c = null,
          d = null,
          m = null;
        for (var y in l)
          if ($.call(l, y)) {
            var w = l[y];
            if (w == null) continue;
            switch (y) {
              case "children":
                a = w;
                break;
              case "selected":
                (d = w),
                  wi ||
                    (s(
                      "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                    ),
                    (wi = !0));
                break;
              case "dangerouslySetInnerHTML":
                m = w;
                break;
              case "value":
                c = w;
              default:
                Ye(o, h, y, w);
                break;
            }
          }
        if (i != null) {
          var k;
          if (
            (c !== null
              ? (Lt(c, "value"), (k = "" + c))
              : (m !== null &&
                  (Ru ||
                    ((Ru = !0),
                    s(
                      "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
                    ))),
                (k = qt(a))),
            Zn(i))
          )
            for (var R = 0; R < i.length; R++) {
              Lt(i[R], "value");
              var M = "" + i[R];
              if (M === k) {
                o.push(Pr);
                break;
              }
            }
          else Lt(i, "select.value"), "" + i === k && o.push(Pr);
        } else d && o.push(Pr);
        return o.push(Tt), nr(o, m, a), a;
      }
      function rr(o, l, h) {
        Gn("input", l),
          l.checked !== void 0 &&
            l.defaultChecked !== void 0 &&
            !yi &&
            (s(
              "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
              "A component",
              l.type
            ),
            (yi = !0)),
          l.value !== void 0 &&
            l.defaultValue !== void 0 &&
            !Dr &&
            (s(
              "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
              "A component",
              l.type
            ),
            (Dr = !0)),
          o.push(C("input"));
        var p = null,
          i = null,
          a = null,
          c = null;
        for (var d in l)
          if ($.call(l, d)) {
            var m = l[d];
            if (m == null) continue;
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              case "defaultChecked":
                c = m;
                break;
              case "defaultValue":
                i = m;
                break;
              case "checked":
                a = m;
                break;
              case "value":
                p = m;
                break;
              default:
                Ye(o, h, d, m);
                break;
            }
          }
        return (
          a !== null
            ? Ye(o, h, "checked", a)
            : c !== null && Ye(o, h, "checked", c),
          p !== null
            ? Ye(o, h, "value", p)
            : i !== null && Ye(o, h, "value", i),
          o.push(vi),
          null
        );
      }
      function lt(o, l, h) {
        Gn("textarea", l),
          l.value !== void 0 &&
            l.defaultValue !== void 0 &&
            !Eu &&
            (s(
              "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"
            ),
            (Eu = !0)),
          o.push(C("textarea"));
        var p = null,
          i = null,
          a = null;
        for (var c in l)
          if ($.call(l, c)) {
            var d = l[c];
            if (d == null) continue;
            switch (c) {
              case "children":
                a = d;
                break;
              case "value":
                p = d;
                break;
              case "defaultValue":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                );
              default:
                Ye(o, h, c, d);
                break;
            }
          }
        if ((p === null && i !== null && (p = i), o.push(Tt), a != null)) {
          if (
            (s(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            ),
            p != null)
          )
            throw new Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Zn(a)) {
            if (a.length > 1)
              throw new Error("<textarea> can only have at most one child.");
            st(a[0]), (p = "" + a[0]);
          }
          st(a), (p = "" + a);
        }
        return (
          typeof p == "string" &&
            p[0] ===
              `
` &&
            o.push(Ei),
          p !== null && (Lt(p, "value"), o.push(mt("" + p))),
          null
        );
      }
      function Si(o, l, h, p) {
        o.push(C(h));
        for (var i in l)
          if ($.call(l, i)) {
            var a = l[i];
            if (a == null) continue;
            switch (i) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(
                  h +
                    " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                Ye(o, p, i, a);
                break;
            }
          }
        return o.push(vi), null;
      }
      function ki(o, l, h) {
        o.push(C("menuitem"));
        for (var p in l)
          if ($.call(l, p)) {
            var i = l[p];
            if (i == null) continue;
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                );
              default:
                Ye(o, h, p, i);
                break;
            }
          }
        return o.push(Tt), null;
      }
      function Za(o, l, h) {
        o.push(C("title"));
        var p = null;
        for (var i in l)
          if ($.call(l, i)) {
            var a = l[i];
            if (a == null) continue;
            switch (i) {
              case "children":
                p = a;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "`dangerouslySetInnerHTML` does not make sense on <title>."
                );
              default:
                Ye(o, h, i, a);
                break;
            }
          }
        o.push(Tt);
        {
          var c = Array.isArray(p) && p.length < 2 ? p[0] || null : p;
          Array.isArray(p) && p.length > 1
            ? s(
                "A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering"
              )
            : c != null && c.$$typeof != null
            ? s(
                "A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering"
              )
            : c != null &&
              typeof c != "string" &&
              typeof c != "number" &&
              s(
                "A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering"
              );
        }
        return p;
      }
      function Ti(o, l, h, p) {
        o.push(C(h));
        var i = null,
          a = null;
        for (var c in l)
          if ($.call(l, c)) {
            var d = l[c];
            if (d == null) continue;
            switch (c) {
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                a = d;
                break;
              default:
                Ye(o, p, c, d);
                break;
            }
          }
        return (
          o.push(Tt),
          nr(o, a, i),
          typeof i == "string" ? (o.push(mt(i)), null) : i
        );
      }
      function Ka(o, l, h, p) {
        o.push(C(h));
        var i = null,
          a = null;
        for (var c in l)
          if ($.call(l, c)) {
            var d = l[c];
            if (d == null) continue;
            switch (c) {
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                a = d;
                break;
              case "style":
                tr(o, p, d);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                nn(c) &&
                  typeof d != "function" &&
                  typeof d != "symbol" &&
                  o.push(kt, c, dn, je(d), Vt);
                break;
            }
          }
        return o.push(Tt), nr(o, a, i), i;
      }
      var Ei = N(`
`);
      function _(o, l, h, p) {
        o.push(C(h));
        var i = null,
          a = null;
        for (var c in l)
          if ($.call(l, c)) {
            var d = l[c];
            if (d == null) continue;
            switch (c) {
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                a = d;
                break;
              default:
                Ye(o, p, c, d);
                break;
            }
          }
        if ((o.push(Tt), a != null)) {
          if (i != null)
            throw new Error(
              "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          if (typeof a != "object" || !("__html" in a))
            throw new Error(
              "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
            );
          var m = a.__html;
          m != null &&
            (typeof m == "string" &&
            m.length > 0 &&
            m[0] ===
              `
`
              ? o.push(Ei, m)
              : (st(m), o.push("" + m)));
        }
        return (
          typeof i == "string" &&
            i[0] ===
              `
` &&
            o.push(Ei),
          i
        );
      }
      var S = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        E = new Map();
      function C(o) {
        var l = E.get(o);
        if (l === void 0) {
          if (!S.test(o)) throw new Error("Invalid tag: " + o);
          (l = N("<" + o)), E.set(o, l);
        }
        return l;
      }
      var P = N("<!DOCTYPE html>");
      function z(o, l, h, p, i) {
        switch (
          (li(l, h),
          Ma(l, h),
          wr(l, h, null),
          !h.suppressContentEditableWarning &&
            h.contentEditable &&
            h.children != null &&
            s(
              "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
            ),
          i.insertionMode !== Tn &&
            i.insertionMode !== En &&
            l.indexOf("-") === -1 &&
            typeof h.is != "string" &&
            l.toLowerCase() !== l &&
            s(
              "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
              l
            ),
          l)
        ) {
          case "select":
            return Ya(o, h, p);
          case "option":
            return Xa(o, h, p, i);
          case "textarea":
            return lt(o, h, p);
          case "input":
            return rr(o, h, p);
          case "menuitem":
            return ki(o, h, p);
          case "title":
            return Za(o, h, p);
          case "listing":
          case "pre":
            return _(o, h, l, p);
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            return Si(o, h, l, p);
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return Ti(o, h, l, p);
          case "html":
            return i.insertionMode === kn && o.push(P), Ti(o, h, l, p);
          default:
            return l.indexOf("-") === -1 && typeof h.is != "string"
              ? Ti(o, h, l, p)
              : Ka(o, h, l, p);
        }
      }
      var j = N("</"),
        Y = N(">");
      function Q(o, l, h) {
        switch (l) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            o.push(j, l, Y);
        }
      }
      function ie(o, l) {
        for (var h = l.bootstrapChunks, p = 0; p < h.length - 1; p++)
          O(o, h[p]);
        return p < h.length ? G(o, h[p]) : !0;
      }
      var de = N('<template id="'),
        he = N('"></template>');
      function _e(o, l, h) {
        O(o, de), O(o, l.placeholderPrefix);
        var p = h.toString(16);
        return O(o, p), G(o, he);
      }
      var Ae = N("<!--$-->"),
        We = N('<!--$?--><template id="'),
        ir = N('"></template>'),
        Ci = N("<!--$!-->"),
        Mr = N("<!--/$-->"),
        Iu = N("<template"),
        Nr = N('"'),
        Ja = N(' data-dgst="'),
        Au = N(' data-msg="'),
        Qa = N(' data-stck="'),
        Xc = N("></template>");
      function Zc(o, l) {
        return G(o, Ae);
      }
      function Fo(o, l, h) {
        if ((O(o, We), h === null))
          throw new Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        return O(o, h), G(o, ir);
      }
      function Kc(o, l, h, p, i) {
        var a;
        return (
          (a = G(o, Ci)),
          O(o, Iu),
          h && (O(o, Ja), O(o, je(h)), O(o, Nr)),
          p && (O(o, Au), O(o, je(p)), O(o, Nr)),
          i && (O(o, Qa), O(o, je(i)), O(o, Nr)),
          (a = G(o, Xc)),
          a
        );
      }
      function Jc(o, l) {
        return G(o, Mr);
      }
      function Uo(o, l) {
        return G(o, Mr);
      }
      function Qc(o, l) {
        return G(o, Mr);
      }
      var ef = N('<div hidden id="'),
        tf = N('">'),
        nf = N("</div>"),
        rf = N('<svg aria-hidden="true" style="display:none" id="'),
        uf = N('">'),
        af = N("</svg>"),
        sf = N('<math aria-hidden="true" style="display:none" id="'),
        of = N('">'),
        lf = N("</math>"),
        cf = N('<table hidden id="'),
        ff = N('">'),
        df = N("</table>"),
        hf = N('<table hidden><tbody id="'),
        pf = N('">'),
        mf = N("</tbody></table>"),
        gf = N('<table hidden><tr id="'),
        _f = N('">'),
        bf = N("</tr></table>"),
        vf = N('<table hidden><colgroup id="'),
        yf = N('">'),
        xf = N("</colgroup></table>");
      function wf(o, l, h, p) {
        switch (h.insertionMode) {
          case kn:
          case on:
            return (
              O(o, ef), O(o, l.segmentPrefix), O(o, p.toString(16)), G(o, tf)
            );
          case Tn:
            return (
              O(o, rf), O(o, l.segmentPrefix), O(o, p.toString(16)), G(o, uf)
            );
          case En:
            return (
              O(o, sf), O(o, l.segmentPrefix), O(o, p.toString(16)), G(o, of)
            );
          case ln:
            return (
              O(o, cf), O(o, l.segmentPrefix), O(o, p.toString(16)), G(o, ff)
            );
          case Jn:
            return (
              O(o, hf), O(o, l.segmentPrefix), O(o, p.toString(16)), G(o, pf)
            );
          case gi:
            return (
              O(o, gf), O(o, l.segmentPrefix), O(o, p.toString(16)), G(o, _f)
            );
          case _i:
            return (
              O(o, vf), O(o, l.segmentPrefix), O(o, p.toString(16)), G(o, yf)
            );
          default:
            throw new Error("Unknown insertion mode. This is a bug in React.");
        }
      }
      function Sf(o, l) {
        switch (l.insertionMode) {
          case kn:
          case on:
            return G(o, nf);
          case Tn:
            return G(o, af);
          case En:
            return G(o, lf);
          case ln:
            return G(o, df);
          case Jn:
            return G(o, mf);
          case gi:
            return G(o, bf);
          case _i:
            return G(o, xf);
          default:
            throw new Error("Unknown insertion mode. This is a bug in React.");
        }
      }
      var kf =
          "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}",
        Tf =
          'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}',
        Ef =
          'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}',
        Cf = N(kf + ';$RS("'),
        Rf = N('$RS("'),
        If = N('","'),
        Af = N('")</script>');
      function es(o, l, h) {
        O(o, l.startInlineScript),
          l.sentCompleteSegmentFunction
            ? O(o, Rf)
            : ((l.sentCompleteSegmentFunction = !0), O(o, Cf)),
          O(o, l.segmentPrefix);
        var p = h.toString(16);
        return O(o, p), O(o, If), O(o, l.placeholderPrefix), O(o, p), G(o, Af);
      }
      var Lf = N(Tf + ';$RC("'),
        Of = N('$RC("'),
        ts = N('","'),
        jo = N('")</script>');
      function Wo(o, l, h, p) {
        if (
          (O(o, l.startInlineScript),
          l.sentCompleteBoundaryFunction
            ? O(o, Of)
            : ((l.sentCompleteBoundaryFunction = !0), O(o, Lf)),
          h === null)
        )
          throw new Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        var i = p.toString(16);
        return O(o, h), O(o, ts), O(o, l.segmentPrefix), O(o, i), G(o, jo);
      }
      var Ho = N(Ef + ';$RX("'),
        $o = N('$RX("'),
        Df = N('"'),
        Pf = N(")</script>"),
        ns = N(",");
      function Mf(o, l, h, p, i, a) {
        if (
          (O(o, l.startInlineScript),
          l.sentClientRenderFunction
            ? O(o, $o)
            : ((l.sentClientRenderFunction = !0), O(o, Ho)),
          h === null)
        )
          throw new Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        return (
          O(o, h),
          O(o, Df),
          (p || i || a) && (O(o, ns), O(o, rs(p || ""))),
          (i || a) && (O(o, ns), O(o, rs(i || ""))),
          a && (O(o, ns), O(o, rs(a))),
          G(o, Pf)
        );
      }
      var Et = /[<\u2028\u2029]/g;
      function rs(o) {
        var l = JSON.stringify(o);
        return l.replace(Et, function (h) {
          switch (h) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw new Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        });
      }
      var gt = Object.assign,
        zo = Symbol.for("react.element"),
        is = Symbol.for("react.portal"),
        us = Symbol.for("react.fragment"),
        Lu = Symbol.for("react.strict_mode"),
        Ou = Symbol.for("react.profiler"),
        Ri = Symbol.for("react.provider"),
        Ii = Symbol.for("react.context"),
        Ai = Symbol.for("react.forward_ref"),
        Li = Symbol.for("react.suspense"),
        Br = Symbol.for("react.suspense_list"),
        as = Symbol.for("react.memo"),
        Du = Symbol.for("react.lazy"),
        Nf = Symbol.for("react.scope"),
        Bf = Symbol.for("react.debug_trace_mode"),
        Vo = Symbol.for("react.legacy_hidden"),
        Ff = Symbol.for("react.default_value"),
        qo = Symbol.iterator,
        Uf = "@@iterator";
      function Go(o) {
        if (o === null || typeof o != "object") return null;
        var l = (qo && o[qo]) || o[Uf];
        return typeof l == "function" ? l : null;
      }
      function Te(o, l, h) {
        var p = o.displayName;
        if (p) return p;
        var i = l.displayName || l.name || "";
        return i !== "" ? h + "(" + i + ")" : h;
      }
      function Fr(o) {
        return o.displayName || "Context";
      }
      function ye(o) {
        if (o == null) return null;
        if (
          (typeof o.tag == "number" &&
            s(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          typeof o == "function")
        )
          return o.displayName || o.name || null;
        if (typeof o == "string") return o;
        switch (o) {
          case us:
            return "Fragment";
          case is:
            return "Portal";
          case Ou:
            return "Profiler";
          case Lu:
            return "StrictMode";
          case Li:
            return "Suspense";
          case Br:
            return "SuspenseList";
        }
        if (typeof o == "object")
          switch (o.$$typeof) {
            case Ii:
              var l = o;
              return Fr(l) + ".Consumer";
            case Ri:
              var h = o;
              return Fr(h._context) + ".Provider";
            case Ai:
              return Te(o, o.render, "ForwardRef");
            case as:
              var p = o.displayName || null;
              return p !== null ? p : ye(o.type) || "Memo";
            case Du: {
              var i = o,
                a = i._payload,
                c = i._init;
              try {
                return ye(c(a));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ur = 0,
        ss,
        os,
        ls,
        cs,
        fs,
        ds,
        Yo;
      function Xo() {}
      Xo.__reactDisabledLog = !0;
      function hs() {
        {
          if (Ur === 0) {
            (ss = console.log),
              (os = console.info),
              (ls = console.warn),
              (cs = console.error),
              (fs = console.group),
              (ds = console.groupCollapsed),
              (Yo = console.groupEnd);
            var o = {
              configurable: !0,
              enumerable: !0,
              value: Xo,
              writable: !0,
            };
            Object.defineProperties(console, {
              info: o,
              log: o,
              warn: o,
              error: o,
              group: o,
              groupCollapsed: o,
              groupEnd: o,
            });
          }
          Ur++;
        }
      }
      function ps() {
        {
          if ((Ur--, Ur === 0)) {
            var o = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, {
              log: gt({}, o, { value: ss }),
              info: gt({}, o, { value: os }),
              warn: gt({}, o, { value: ls }),
              error: gt({}, o, { value: cs }),
              group: gt({}, o, { value: fs }),
              groupCollapsed: gt({}, o, { value: ds }),
              groupEnd: gt({}, o, { value: Yo }),
            });
          }
          Ur < 0 &&
            s(
              "disabledDepth fell below zero. This is a bug in React. Please file an issue."
            );
        }
      }
      var ur = r.ReactCurrentDispatcher,
        Oi;
      function Rn(o, l, h) {
        {
          if (Oi === void 0)
            try {
              throw Error();
            } catch (i) {
              var p = i.stack.trim().match(/\n( *(at )?)/);
              Oi = (p && p[1]) || "";
            }
          return (
            `
` +
            Oi +
            o
          );
        }
      }
      var ms = !1,
        jr;
      {
        var jf = typeof WeakMap == "function" ? WeakMap : Map;
        jr = new jf();
      }
      function Pu(o, l) {
        if (!o || ms) return "";
        {
          var h = jr.get(o);
          if (h !== void 0) return h;
        }
        var p;
        ms = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var a;
        (a = ur.current), (ur.current = null), hs();
        try {
          if (l) {
            var c = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(c.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(c, []);
              } catch (U) {
                p = U;
              }
              Reflect.construct(o, [], c);
            } else {
              try {
                c.call();
              } catch (U) {
                p = U;
              }
              o.call(c.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (U) {
              p = U;
            }
            o();
          }
        } catch (U) {
          if (U && p && typeof U.stack == "string") {
            for (
              var d = U.stack.split(`
`),
                m = p.stack.split(`
`),
                y = d.length - 1,
                w = m.length - 1;
              y >= 1 && w >= 0 && d[y] !== m[w];

            )
              w--;
            for (; y >= 1 && w >= 0; y--, w--)
              if (d[y] !== m[w]) {
                if (y !== 1 || w !== 1)
                  do
                    if ((y--, w--, w < 0 || d[y] !== m[w])) {
                      var k =
                        `
` + d[y].replace(" at new ", " at ");
                      return (
                        o.displayName &&
                          k.includes("<anonymous>") &&
                          (k = k.replace("<anonymous>", o.displayName)),
                        typeof o == "function" && jr.set(o, k),
                        k
                      );
                    }
                  while (y >= 1 && w >= 0);
                break;
              }
          }
        } finally {
          (ms = !1), (ur.current = a), ps(), (Error.prepareStackTrace = i);
        }
        var R = o ? o.displayName || o.name : "",
          M = R ? Rn(R) : "";
        return typeof o == "function" && jr.set(o, M), M;
      }
      function Wf(o, l, h) {
        return Pu(o, !0);
      }
      function Mu(o, l, h) {
        return Pu(o, !1);
      }
      function Zo(o) {
        var l = o.prototype;
        return !!(l && l.isReactComponent);
      }
      function Nu(o, l, h) {
        if (o == null) return "";
        if (typeof o == "function") return Pu(o, Zo(o));
        if (typeof o == "string") return Rn(o);
        switch (o) {
          case Li:
            return Rn("Suspense");
          case Br:
            return Rn("SuspenseList");
        }
        if (typeof o == "object")
          switch (o.$$typeof) {
            case Ai:
              return Mu(o.render);
            case as:
              return Nu(o.type, l, h);
            case Du: {
              var p = o,
                i = p._payload,
                a = p._init;
              try {
                return Nu(a(i), l, h);
              } catch {}
            }
          }
        return "";
      }
      var Di = {},
        gs = r.ReactDebugCurrentFrame;
      function Wr(o) {
        if (o) {
          var l = o._owner,
            h = Nu(o.type, o._source, l ? l.type : null);
          gs.setExtraStackFrame(h);
        } else gs.setExtraStackFrame(null);
      }
      function Pi(o, l, h, p, i) {
        {
          var a = Function.call.bind($);
          for (var c in o)
            if (a(o, c)) {
              var d = void 0;
              try {
                if (typeof o[c] != "function") {
                  var m = Error(
                    (p || "React class") +
                      ": " +
                      h +
                      " type `" +
                      c +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof o[c] +
                      "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  throw ((m.name = "Invariant Violation"), m);
                }
                d = o[c](
                  l,
                  c,
                  p,
                  h,
                  null,
                  "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                );
              } catch (y) {
                d = y;
              }
              d &&
                !(d instanceof Error) &&
                (Wr(i),
                s(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  p || "React class",
                  h,
                  c,
                  typeof d
                ),
                Wr(null)),
                d instanceof Error &&
                  !(d.message in Di) &&
                  ((Di[d.message] = !0),
                  Wr(i),
                  s("Failed %s type: %s", h, d.message),
                  Wr(null));
            }
        }
      }
      var Bu;
      Bu = {};
      var Fu = {};
      Object.freeze(Fu);
      function Hr(o, l) {
        {
          var h = o.contextTypes;
          if (!h) return Fu;
          var p = {};
          for (var i in h) p[i] = l[i];
          {
            var a = ye(o) || "Unknown";
            Pi(h, p, "context", a);
          }
          return p;
        }
      }
      function Hf(o, l, h, p) {
        {
          if (typeof o.getChildContext != "function") {
            {
              var i = ye(l) || "Unknown";
              Bu[i] ||
                ((Bu[i] = !0),
                s(
                  "%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",
                  i,
                  i
                ));
            }
            return h;
          }
          var a = o.getChildContext();
          for (var c in a)
            if (!(c in p))
              throw new Error(
                (ye(l) || "Unknown") +
                  '.getChildContext(): key "' +
                  c +
                  '" is not defined in childContextTypes.'
              );
          {
            var d = ye(l) || "Unknown";
            Pi(p, a, "child context", d);
          }
          return gt({}, h, a);
        }
      }
      var Pt;
      Pt = {};
      var _s = null,
        pn = null;
      function $r(o) {
        o.context._currentValue = o.parentValue;
      }
      function Uu(o) {
        o.context._currentValue = o.value;
      }
      function Mi(o, l) {
        if (o !== l) {
          $r(o);
          var h = o.parent,
            p = l.parent;
          if (h === null) {
            if (p !== null)
              throw new Error(
                "The stacks must reach the root at the same time. This is a bug in React."
              );
          } else {
            if (p === null)
              throw new Error(
                "The stacks must reach the root at the same time. This is a bug in React."
              );
            Mi(h, p);
          }
          Uu(l);
        }
      }
      function bs(o) {
        $r(o);
        var l = o.parent;
        l !== null && bs(l);
      }
      function vs(o) {
        var l = o.parent;
        l !== null && vs(l), Uu(o);
      }
      function Ni(o, l) {
        $r(o);
        var h = o.parent;
        if (h === null)
          throw new Error(
            "The depth must equal at least at zero before reaching the root. This is a bug in React."
          );
        h.depth === l.depth ? Mi(h, l) : Ni(h, l);
      }
      function Ko(o, l) {
        var h = l.parent;
        if (h === null)
          throw new Error(
            "The depth must equal at least at zero before reaching the root. This is a bug in React."
          );
        o.depth === h.depth ? Mi(o, h) : Ko(o, h), Uu(l);
      }
      function ju(o) {
        var l = pn,
          h = o;
        l !== h &&
          (l === null
            ? vs(h)
            : h === null
            ? bs(l)
            : l.depth === h.depth
            ? Mi(l, h)
            : l.depth > h.depth
            ? Ni(l, h)
            : Ko(l, h),
          (pn = h));
      }
      function $f(o, l) {
        var h;
        (h = o._currentValue),
          (o._currentValue = l),
          o._currentRenderer !== void 0 &&
            o._currentRenderer !== null &&
            o._currentRenderer !== Pt &&
            s(
              "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
            ),
          (o._currentRenderer = Pt);
        var p = pn,
          i = {
            parent: p,
            depth: p === null ? 0 : p.depth + 1,
            context: o,
            parentValue: h,
            value: l,
          };
        return (pn = i), i;
      }
      function Bi(o) {
        var l = pn;
        if (l === null)
          throw new Error(
            "Tried to pop a Context at the root of the app. This is a bug in React."
          );
        l.context !== o &&
          s(
            "The parent context is not the expected context. This is probably a bug in React."
          );
        {
          var h = l.parentValue;
          h === Ff
            ? (l.context._currentValue = l.context._defaultValue)
            : (l.context._currentValue = h),
            o._currentRenderer !== void 0 &&
              o._currentRenderer !== null &&
              o._currentRenderer !== Pt &&
              s(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ),
            (o._currentRenderer = Pt);
        }
        return (pn = l.parent);
      }
      function ys() {
        return pn;
      }
      function Fi(o) {
        var l = o._currentValue;
        return l;
      }
      function Wu(o) {
        return o._reactInternals;
      }
      function Jo(o, l) {
        o._reactInternals = l;
      }
      var Hu = {},
        $u = {},
        Ui,
        ji,
        zu,
        zr,
        Vu,
        Vr,
        Wi,
        qu,
        Gu;
      {
        (Ui = new Set()),
          (ji = new Set()),
          (zu = new Set()),
          (Wi = new Set()),
          (zr = new Set()),
          (qu = new Set()),
          (Gu = new Set());
        var xs = new Set();
        (Vr = function (o, l) {
          if (!(o === null || typeof o == "function")) {
            var h = l + "_" + o;
            xs.has(h) ||
              (xs.add(h),
              s(
                "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                l,
                o
              ));
          }
        }),
          (Vu = function (o, l) {
            if (l === void 0) {
              var h = ye(o) || "Component";
              zr.has(h) ||
                (zr.add(h),
                s(
                  "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                  h
                ));
            }
          });
      }
      function Qo(o, l) {
        {
          var h = o.constructor,
            p = (h && ye(h)) || "ReactClass",
            i = p + "." + l;
          if (Hu[i]) return;
          s(
            `%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`,
            l,
            l,
            p
          ),
            (Hu[i] = !0);
        }
      }
      var el = {
        isMounted: function (o) {
          return !1;
        },
        enqueueSetState: function (o, l, h) {
          var p = Wu(o);
          p.queue === null
            ? Qo(o, "setState")
            : (p.queue.push(l), h != null && Vr(h, "setState"));
        },
        enqueueReplaceState: function (o, l, h) {
          var p = Wu(o);
          (p.replace = !0), (p.queue = [l]), h != null && Vr(h, "setState");
        },
        enqueueForceUpdate: function (o, l) {
          var h = Wu(o);
          h.queue === null
            ? Qo(o, "forceUpdate")
            : l != null && Vr(l, "setState");
        },
      };
      function zf(o, l, h, p, i) {
        var a = h(i, p);
        Vu(l, a);
        var c = a == null ? p : gt({}, p, a);
        return c;
      }
      function Vf(o, l, h) {
        var p = Fu,
          i = o.contextType;
        if ("contextType" in o) {
          var a =
            i === null ||
            (i !== void 0 && i.$$typeof === Ii && i._context === void 0);
          if (!a && !Gu.has(o)) {
            Gu.add(o);
            var c = "";
            i === void 0
              ? (c =
                  " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.")
              : typeof i != "object"
              ? (c = " However, it is set to a " + typeof i + ".")
              : i.$$typeof === Ri
              ? (c = " Did you accidentally pass the Context.Provider instead?")
              : i._context !== void 0
              ? (c = " Did you accidentally pass the Context.Consumer instead?")
              : (c =
                  " However, it is set to an object with keys {" +
                  Object.keys(i).join(", ") +
                  "}."),
              s(
                "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
                ye(o) || "Component",
                c
              );
          }
        }
        typeof i == "object" && i !== null ? (p = Fi(i)) : (p = h);
        var d = new o(l, p);
        {
          if (
            typeof o.getDerivedStateFromProps == "function" &&
            (d.state === null || d.state === void 0)
          ) {
            var m = ye(o) || "Component";
            Ui.has(m) ||
              (Ui.add(m),
              s(
                "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
                m,
                d.state === null ? "null" : "undefined",
                m
              ));
          }
          if (
            typeof o.getDerivedStateFromProps == "function" ||
            typeof d.getSnapshotBeforeUpdate == "function"
          ) {
            var y = null,
              w = null,
              k = null;
            if (
              (typeof d.componentWillMount == "function" &&
              d.componentWillMount.__suppressDeprecationWarning !== !0
                ? (y = "componentWillMount")
                : typeof d.UNSAFE_componentWillMount == "function" &&
                  (y = "UNSAFE_componentWillMount"),
              typeof d.componentWillReceiveProps == "function" &&
              d.componentWillReceiveProps.__suppressDeprecationWarning !== !0
                ? (w = "componentWillReceiveProps")
                : typeof d.UNSAFE_componentWillReceiveProps == "function" &&
                  (w = "UNSAFE_componentWillReceiveProps"),
              typeof d.componentWillUpdate == "function" &&
              d.componentWillUpdate.__suppressDeprecationWarning !== !0
                ? (k = "componentWillUpdate")
                : typeof d.UNSAFE_componentWillUpdate == "function" &&
                  (k = "UNSAFE_componentWillUpdate"),
              y !== null || w !== null || k !== null)
            ) {
              var R = ye(o) || "Component",
                M =
                  typeof o.getDerivedStateFromProps == "function"
                    ? "getDerivedStateFromProps()"
                    : "getSnapshotBeforeUpdate()";
              zu.has(R) ||
                (zu.add(R),
                s(
                  `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
                  R,
                  M,
                  y !== null
                    ? `
  ` + y
                    : "",
                  w !== null
                    ? `
  ` + w
                    : "",
                  k !== null
                    ? `
  ` + k
                    : ""
                ));
            }
          }
        }
        return d;
      }
      function qf(o, l, h) {
        {
          var p = ye(l) || "Component",
            i = o.render;
          i ||
            (l.prototype && typeof l.prototype.render == "function"
              ? s(
                  "%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",
                  p
                )
              : s(
                  "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",
                  p
                )),
            o.getInitialState &&
              !o.getInitialState.isReactClassApproved &&
              !o.state &&
              s(
                "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
                p
              ),
            o.getDefaultProps &&
              !o.getDefaultProps.isReactClassApproved &&
              s(
                "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
                p
              ),
            o.propTypes &&
              s(
                "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",
                p
              ),
            o.contextType &&
              s(
                "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
                p
              ),
            o.contextTypes &&
              s(
                "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",
                p
              ),
            l.contextType &&
              l.contextTypes &&
              !qu.has(l) &&
              (qu.add(l),
              s(
                "%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",
                p
              )),
            typeof o.componentShouldUpdate == "function" &&
              s(
                "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
                p
              ),
            l.prototype &&
              l.prototype.isPureReactComponent &&
              typeof o.shouldComponentUpdate < "u" &&
              s(
                "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
                ye(l) || "A pure component"
              ),
            typeof o.componentDidUnmount == "function" &&
              s(
                "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
                p
              ),
            typeof o.componentDidReceiveProps == "function" &&
              s(
                "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
                p
              ),
            typeof o.componentWillRecieveProps == "function" &&
              s(
                "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
                p
              ),
            typeof o.UNSAFE_componentWillRecieveProps == "function" &&
              s(
                "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
                p
              );
          var a = o.props !== h;
          o.props !== void 0 &&
            a &&
            s(
              "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
              p,
              p
            ),
            o.defaultProps &&
              s(
                "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
                p,
                p
              ),
            typeof o.getSnapshotBeforeUpdate == "function" &&
              typeof o.componentDidUpdate != "function" &&
              !ji.has(l) &&
              (ji.add(l),
              s(
                "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
                ye(l)
              )),
            typeof o.getDerivedStateFromProps == "function" &&
              s(
                "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                p
              ),
            typeof o.getDerivedStateFromError == "function" &&
              s(
                "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                p
              ),
            typeof l.getSnapshotBeforeUpdate == "function" &&
              s(
                "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
                p
              );
          var c = o.state;
          c &&
            (typeof c != "object" || Zn(c)) &&
            s("%s.state: must be set to an object or null", p),
            typeof o.getChildContext == "function" &&
              typeof l.childContextTypes != "object" &&
              s(
                "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
                p
              );
        }
      }
      function tl(o, l) {
        var h = l.state;
        if (typeof l.componentWillMount == "function") {
          if (l.componentWillMount.__suppressDeprecationWarning !== !0) {
            var p = ye(o) || "Unknown";
            $u[p] ||
              (u(
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                p
              ),
              ($u[p] = !0));
          }
          l.componentWillMount();
        }
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
          h !== l.state &&
            (s(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              ye(o) || "Component"
            ),
            el.enqueueReplaceState(l, l.state, null));
      }
      function Gf(o, l, h, p) {
        if (o.queue !== null && o.queue.length > 0) {
          var i = o.queue,
            a = o.replace;
          if (((o.queue = null), (o.replace = !1), a && i.length === 1))
            l.state = i[0];
          else {
            for (
              var c = a ? i[0] : l.state, d = !0, m = a ? 1 : 0;
              m < i.length;
              m++
            ) {
              var y = i[m],
                w = typeof y == "function" ? y.call(l, c, h, p) : y;
              w != null && (d ? ((d = !1), (c = gt({}, c, w))) : gt(c, w));
            }
            l.state = c;
          }
        } else o.queue = null;
      }
      function nl(o, l, h, p) {
        qf(o, l, h);
        var i = o.state !== void 0 ? o.state : null;
        (o.updater = el), (o.props = h), (o.state = i);
        var a = { queue: [], replace: !1 };
        Jo(o, a);
        var c = l.contextType;
        if (
          (typeof c == "object" && c !== null
            ? (o.context = Fi(c))
            : (o.context = p),
          o.state === h)
        ) {
          var d = ye(l) || "Component";
          Wi.has(d) ||
            (Wi.add(d),
            s(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              d
            ));
        }
        var m = l.getDerivedStateFromProps;
        typeof m == "function" && (o.state = zf(o, l, m, i, h)),
          typeof l.getDerivedStateFromProps != "function" &&
            typeof o.getSnapshotBeforeUpdate != "function" &&
            (typeof o.UNSAFE_componentWillMount == "function" ||
              typeof o.componentWillMount == "function") &&
            (tl(l, o), Gf(a, o, h, p));
      }
      var ws = { id: 1, overflow: "" };
      function Yu(o) {
        var l = o.overflow,
          h = o.id,
          p = h & ~Yf(h);
        return p.toString(32) + l;
      }
      function Ss(o, l, h) {
        var p = o.id,
          i = o.overflow,
          a = Xu(p) - 1,
          c = p & ~(1 << a),
          d = h + 1,
          m = Xu(l) + a;
        if (m > 30) {
          var y = a - (a % 5),
            w = (1 << y) - 1,
            k = (c & w).toString(32),
            R = c >> y,
            M = a - y,
            U = Xu(l) + M,
            q = d << M,
            ce = q | R,
            Le = k + i;
          return { id: (1 << U) | ce, overflow: Le };
        } else {
          var He = d << a,
            la = He | c,
            ca = i;
          return { id: (1 << m) | la, overflow: ca };
        }
      }
      function Xu(o) {
        return 32 - Xf(o);
      }
      function Yf(o) {
        return 1 << (Xu(o) - 1);
      }
      var Xf = Math.clz32 ? Math.clz32 : Jf,
        Zf = Math.log,
        Kf = Math.LN2;
      function Jf(o) {
        var l = o >>> 0;
        return l === 0 ? 32 : (31 - ((Zf(l) / Kf) | 0)) | 0;
      }
      function mn(o, l) {
        return (
          (o === l && (o !== 0 || 1 / o === 1 / l)) || (o !== o && l !== l)
        );
      }
      var ks = typeof Object.is == "function" ? Object.is : mn,
        Ct = null,
        le = null,
        In = null,
        oe = null,
        An = !1,
        Mt = !1,
        ar = 0,
        Ln = null,
        _t = 0,
        qr = 25,
        Xe = !1,
        Gr;
      function On() {
        if (Ct === null)
          throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        return (
          Xe &&
            s(
              "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"
            ),
          Ct
        );
      }
      function Ts(o, l) {
        if (l === null)
          return (
            s(
              "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
              Gr
            ),
            !1
          );
        o.length !== l.length &&
          s(
            `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
            Gr,
            "[" + o.join(", ") + "]",
            "[" + l.join(", ") + "]"
          );
        for (var h = 0; h < l.length && h < o.length; h++)
          if (!ks(o[h], l[h])) return !1;
        return !0;
      }
      function rl() {
        if (_t > 0)
          throw new Error(
            "Rendered more hooks than during the previous render"
          );
        return { memoizedState: null, queue: null, next: null };
      }
      function Es() {
        return (
          oe === null
            ? In === null
              ? ((An = !1), (In = oe = rl()))
              : ((An = !0), (oe = In))
            : oe.next === null
            ? ((An = !1), (oe = oe.next = rl()))
            : ((An = !0), (oe = oe.next)),
          oe
        );
      }
      function il(o, l) {
        (Ct = l), (le = o), (Xe = !1), (ar = 0);
      }
      function Cs(o, l, h, p) {
        for (; Mt; ) (Mt = !1), (ar = 0), (_t += 1), (oe = null), (h = o(l, p));
        return Rs(), h;
      }
      function ul() {
        var o = ar !== 0;
        return o;
      }
      function Rs() {
        (Xe = !1),
          (Ct = null),
          (le = null),
          (Mt = !1),
          (In = null),
          (_t = 0),
          (Ln = null),
          (oe = null);
      }
      function Is(o) {
        return (
          Xe &&
            s(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            ),
          Fi(o)
        );
      }
      function Qf(o) {
        return (Gr = "useContext"), On(), Fi(o);
      }
      function Zu(o, l) {
        return typeof l == "function" ? l(o) : l;
      }
      function al(o) {
        return (Gr = "useState"), sl(Zu, o);
      }
      function sl(o, l, h) {
        if ((o !== Zu && (Gr = "useReducer"), (Ct = On()), (oe = Es()), An)) {
          var p = oe.queue,
            i = p.dispatch;
          if (Ln !== null) {
            var a = Ln.get(p);
            if (a !== void 0) {
              Ln.delete(p);
              var c = oe.memoizedState,
                d = a;
              do {
                var m = d.action;
                (Xe = !0), (c = o(c, m)), (Xe = !1), (d = d.next);
              } while (d !== null);
              return (oe.memoizedState = c), [c, i];
            }
          }
          return [oe.memoizedState, i];
        } else {
          Xe = !0;
          var y;
          o === Zu
            ? (y = typeof l == "function" ? l() : l)
            : (y = h !== void 0 ? h(l) : l),
            (Xe = !1),
            (oe.memoizedState = y);
          var w = (oe.queue = { last: null, dispatch: null }),
            k = (w.dispatch = nd.bind(null, Ct, w));
          return [oe.memoizedState, k];
        }
      }
      function ol(o, l) {
        (Ct = On()), (oe = Es());
        var h = l === void 0 ? null : l;
        if (oe !== null) {
          var p = oe.memoizedState;
          if (p !== null && h !== null) {
            var i = p[1];
            if (Ts(h, i)) return p[0];
          }
        }
        Xe = !0;
        var a = o();
        return (Xe = !1), (oe.memoizedState = [a, h]), a;
      }
      function ed(o) {
        (Ct = On()), (oe = Es());
        var l = oe.memoizedState;
        if (l === null) {
          var h = { current: o };
          return Object.seal(h), (oe.memoizedState = h), h;
        } else return l;
      }
      function td(o, l) {
        (Gr = "useLayoutEffect"),
          s(
            "useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes."
          );
      }
      function nd(o, l, h) {
        if (_t >= qr)
          throw new Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o === Ct) {
          Mt = !0;
          var p = { action: h, next: null };
          Ln === null && (Ln = new Map());
          var i = Ln.get(l);
          if (i === void 0) Ln.set(l, p);
          else {
            for (var a = i; a.next !== null; ) a = a.next;
            a.next = p;
          }
        }
      }
      function rd(o, l) {
        return ol(function () {
          return o;
        }, l);
      }
      function id(o, l, h) {
        return On(), l(o._source);
      }
      function ud(o, l, h) {
        if (h === void 0)
          throw new Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return h();
      }
      function ad(o) {
        return On(), o;
      }
      function sd() {
        throw new Error(
          "startTransition cannot be called during server rendering."
        );
      }
      function Ku() {
        return On(), [!1, sd];
      }
      function ll() {
        var o = le,
          l = Yu(o.treeContext),
          h = Ls;
        if (h === null)
          throw new Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        var p = ar++;
        return Tu(h, l, p);
      }
      function Yr() {}
      var As = {
          readContext: Is,
          useContext: Qf,
          useMemo: ol,
          useReducer: sl,
          useRef: ed,
          useState: al,
          useInsertionEffect: Yr,
          useLayoutEffect: td,
          useCallback: rd,
          useImperativeHandle: Yr,
          useEffect: Yr,
          useDebugValue: Yr,
          useDeferredValue: ad,
          useTransition: Ku,
          useId: ll,
          useMutableSource: id,
          useSyncExternalStore: ud,
        },
        Ls = null;
      function Ju(o) {
        Ls = o;
      }
      function Os(o) {
        try {
          var l = "",
            h = o;
          do {
            switch (h.tag) {
              case 0:
                l += Rn(h.type, null, null);
                break;
              case 1:
                l += Mu(h.type, null, null);
                break;
              case 2:
                l += Wf(h.type, null, null);
                break;
            }
            h = h.parent;
          } while (h);
          return l;
        } catch (p) {
          return (
            `
Error generating stack: ` +
            p.message +
            `
` +
            p.stack
          );
        }
      }
      var Hi = r.ReactCurrentDispatcher,
        Dn = r.ReactDebugCurrentFrame,
        Qu = 0,
        sr = 1,
        Ds = 2,
        cl = 3,
        Ps = 4,
        Xr = 0,
        fl = 1,
        Zr = 2,
        $i = 12800;
      function dl(o) {
        return console.error(o), null;
      }
      function zi() {}
      function od(o, l, h, p, i, a, c, d, m) {
        var y = [],
          w = new Set(),
          k = {
            destination: null,
            responseState: l,
            progressiveChunkSize: p === void 0 ? $i : p,
            status: Xr,
            fatalError: null,
            nextSegmentId: 0,
            allPendingTasks: 0,
            pendingRootTasks: 0,
            completedRootSegment: null,
            abortableTasks: w,
            pingedTasks: y,
            clientRenderedBoundaries: [],
            completedBoundaries: [],
            partialBoundaries: [],
            onError: i === void 0 ? dl : i,
            onAllReady: a === void 0 ? zi : a,
            onShellReady: c === void 0 ? zi : c,
            onShellError: d === void 0 ? zi : d,
            onFatalError: m === void 0 ? zi : m,
          },
          R = Kr(k, 0, null, h, !1, !1);
        R.parentFlushed = !0;
        var M = Nt(k, o, null, R, w, Fu, _s, ws);
        return y.push(M), k;
      }
      function Ms(o, l) {
        var h = o.pingedTasks;
        h.push(l),
          h.length === 1 &&
            g(function () {
              return Xi(o);
            });
      }
      function ea(o, l) {
        return {
          id: Ar,
          rootSegmentID: -1,
          parentFlushed: !1,
          pendingTasks: 0,
          forceClientRender: !1,
          completedSegments: [],
          byteSize: 0,
          fallbackAbortableTasks: l,
          errorDigest: null,
        };
      }
      function Nt(o, l, h, p, i, a, c, d) {
        o.allPendingTasks++,
          h === null ? o.pendingRootTasks++ : h.pendingTasks++;
        var m = {
          node: l,
          ping: function () {
            return Ms(o, m);
          },
          blockedBoundary: h,
          blockedSegment: p,
          abortSet: i,
          legacyContext: a,
          context: c,
          treeContext: d,
        };
        return (m.componentStack = null), i.add(m), m;
      }
      function Kr(o, l, h, p, i, a) {
        return {
          status: Qu,
          id: -1,
          index: l,
          parentFlushed: !1,
          chunks: [],
          children: [],
          formatContext: p,
          boundary: h,
          lastPushedText: i,
          textEmbedded: a,
        };
      }
      var bt = null;
      function ta() {
        return bt === null || bt.componentStack === null
          ? ""
          : Os(bt.componentStack);
      }
      function Vi(o, l) {
        o.componentStack = { tag: 0, parent: o.componentStack, type: l };
      }
      function gn(o, l) {
        o.componentStack = { tag: 1, parent: o.componentStack, type: l };
      }
      function qi(o, l) {
        o.componentStack = { tag: 2, parent: o.componentStack, type: l };
      }
      function Gt(o) {
        o.componentStack === null
          ? s(
              "Unexpectedly popped too many stack frames. This is a bug in React."
            )
          : (o.componentStack = o.componentStack.parent);
      }
      var _n = null;
      function Jr(o, l) {
        {
          var h;
          typeof l == "string"
            ? (h = l)
            : l && typeof l.message == "string"
            ? (h = l.message)
            : (h = String(l));
          var p = _n || ta();
          (_n = null), (o.errorMessage = h), (o.errorComponentStack = p);
        }
      }
      function Gi(o, l) {
        var h = o.onError(l);
        if (h != null && typeof h != "string")
          throw new Error(
            'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
              typeof h +
              '" instead'
          );
        return h;
      }
      function na(o, l) {
        var h = o.onShellError;
        h(l);
        var p = o.onFatalError;
        p(l),
          o.destination !== null
            ? ((o.status = Zr), ke(o.destination, l))
            : ((o.status = fl), (o.fatalError = l));
      }
      function ld(o, l, h) {
        Vi(l, "Suspense");
        var p = l.blockedBoundary,
          i = l.blockedSegment,
          a = h.fallback,
          c = h.children,
          d = new Set(),
          m = ea(o, d),
          y = i.chunks.length,
          w = Kr(o, y, m, i.formatContext, !1, !1);
        i.children.push(w), (i.lastPushedText = !1);
        var k = Kr(o, 0, null, i.formatContext, !1, !1);
        (k.parentFlushed = !0), (l.blockedBoundary = m), (l.blockedSegment = k);
        try {
          if (
            ($s(o, l, c),
            Cn(k.chunks, o.responseState, k.lastPushedText, k.textEmbedded),
            (k.status = sr),
            aa(m, k),
            m.pendingTasks === 0)
          ) {
            Gt(l);
            return;
          }
        } catch (M) {
          (k.status = Ps),
            (m.forceClientRender = !0),
            (m.errorDigest = Gi(o, M)),
            Jr(m, M);
        } finally {
          (l.blockedBoundary = p), (l.blockedSegment = i);
        }
        var R = Nt(o, a, p, w, d, l.legacyContext, l.context, l.treeContext);
        (R.componentStack = l.componentStack), o.pingedTasks.push(R), Gt(l);
      }
      function hl(o, l, h, p) {
        Vi(l, h);
        var i = l.blockedSegment,
          a = z(i.chunks, h, p, o.responseState, i.formatContext);
        i.lastPushedText = !1;
        var c = i.formatContext;
        (i.formatContext = Ir(c, h, p)),
          $s(o, l, a),
          (i.formatContext = c),
          Q(i.chunks, h),
          (i.lastPushedText = !1),
          Gt(l);
      }
      function pl(o) {
        return o.prototype && o.prototype.isReactComponent;
      }
      function ml(o, l, h, p, i) {
        var a = {};
        il(l, a);
        var c = h(p, i);
        return Cs(h, p, c, i);
      }
      function Ns(o, l, h, p, i) {
        var a = h.render();
        h.props !== i &&
          (js ||
            s(
              "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
              ye(p) || "a component"
            ),
          (js = !0));
        {
          var c = p.childContextTypes;
          if (c != null) {
            var d = l.legacyContext,
              m = Hf(h, p, d, c);
            (l.legacyContext = m), ct(o, l, a), (l.legacyContext = d);
            return;
          }
        }
        ct(o, l, a);
      }
      function ra(o, l, h, p) {
        qi(l, h);
        var i = Hr(h, l.legacyContext),
          a = Vf(h, p, i);
        nl(a, h, p, i), Ns(o, l, a, h, p), Gt(l);
      }
      var Bs = {},
        Yi = {},
        Fs = {},
        Us = {},
        js = !1,
        Ws = !1,
        gl = !1,
        _l = !1;
      function bl(o, l, h, p) {
        var i;
        if (
          ((i = Hr(h, l.legacyContext)),
          gn(l, h),
          h.prototype && typeof h.prototype.render == "function")
        ) {
          var a = ye(h) || "Unknown";
          Bs[a] ||
            (s(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              a,
              a
            ),
            (Bs[a] = !0));
        }
        var c = ml(o, l, h, p, i),
          d = ul();
        if (
          typeof c == "object" &&
          c !== null &&
          typeof c.render == "function" &&
          c.$$typeof === void 0
        ) {
          var m = ye(h) || "Unknown";
          Yi[m] ||
            (s(
              "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
              m,
              m,
              m
            ),
            (Yi[m] = !0));
        }
        if (
          typeof c == "object" &&
          c !== null &&
          typeof c.render == "function" &&
          c.$$typeof === void 0
        ) {
          {
            var y = ye(h) || "Unknown";
            Yi[y] ||
              (s(
                "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                y,
                y,
                y
              ),
              (Yi[y] = !0));
          }
          nl(c, h, p, i), Ns(o, l, c, h, p);
        } else if ((cd(h), d)) {
          var w = l.treeContext,
            k = 1,
            R = 0;
          l.treeContext = Ss(w, k, R);
          try {
            ct(o, l, c);
          } finally {
            l.treeContext = w;
          }
        } else ct(o, l, c);
        Gt(l);
      }
      function cd(o) {
        {
          if (
            (o &&
              o.childContextTypes &&
              s(
                "%s(...): childContextTypes cannot be defined on a function component.",
                o.displayName || o.name || "Component"
              ),
            typeof o.getDerivedStateFromProps == "function")
          ) {
            var l = ye(o) || "Unknown";
            Us[l] ||
              (s(
                "%s: Function components do not support getDerivedStateFromProps.",
                l
              ),
              (Us[l] = !0));
          }
          if (typeof o.contextType == "object" && o.contextType !== null) {
            var h = ye(o) || "Unknown";
            Fs[h] ||
              (s("%s: Function components do not support contextType.", h),
              (Fs[h] = !0));
          }
        }
      }
      function vl(o, l) {
        if (o && o.defaultProps) {
          var h = gt({}, l),
            p = o.defaultProps;
          for (var i in p) h[i] === void 0 && (h[i] = p[i]);
          return h;
        }
        return l;
      }
      function fd(o, l, h, p, i) {
        gn(l, h.render);
        var a = ml(o, l, h.render, p, i),
          c = ul();
        if (c) {
          var d = l.treeContext,
            m = 1,
            y = 0;
          l.treeContext = Ss(d, m, y);
          try {
            ct(o, l, a);
          } finally {
            l.treeContext = d;
          }
        } else ct(o, l, a);
        Gt(l);
      }
      function dd(o, l, h, p, i) {
        var a = h.type,
          c = vl(a, p);
        tt(o, l, a, c, i);
      }
      function hd(o, l, h, p) {
        h._context === void 0
          ? h !== h.Consumer &&
            (_l ||
              ((_l = !0),
              s(
                "Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
              )))
          : (h = h._context);
        var i = p.children;
        typeof i != "function" &&
          s(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          );
        var a = Fi(h),
          c = i(a);
        ct(o, l, c);
      }
      function Hs(o, l, h, p) {
        var i = h._context,
          a = p.value,
          c = p.children,
          d;
        (d = l.context),
          (l.context = $f(i, a)),
          ct(o, l, c),
          (l.context = Bi(i)),
          d !== l.context &&
            s(
              "Popping the context provider did not return back to the original snapshot. This is a bug in React."
            );
      }
      function pd(o, l, h, p, i) {
        Vi(l, "Lazy");
        var a = h._payload,
          c = h._init,
          d = c(a),
          m = vl(d, p);
        tt(o, l, d, m, i), Gt(l);
      }
      function tt(o, l, h, p, i) {
        if (typeof h == "function")
          if (pl(h)) {
            ra(o, l, h, p);
            return;
          } else {
            bl(o, l, h, p);
            return;
          }
        if (typeof h == "string") {
          hl(o, l, h, p);
          return;
        }
        switch (h) {
          case Vo:
          case Bf:
          case Lu:
          case Ou:
          case us: {
            ct(o, l, p.children);
            return;
          }
          case Br: {
            Vi(l, "SuspenseList"), ct(o, l, p.children), Gt(l);
            return;
          }
          case Nf:
            throw new Error(
              "ReactDOMServer does not yet support scope components."
            );
          case Li: {
            ld(o, l, p);
            return;
          }
        }
        if (typeof h == "object" && h !== null)
          switch (h.$$typeof) {
            case Ai: {
              fd(o, l, h, p, i);
              return;
            }
            case as: {
              dd(o, l, h, p, i);
              return;
            }
            case Ri: {
              Hs(o, l, h, p);
              return;
            }
            case Ii: {
              hd(o, l, h, p);
              return;
            }
            case Du: {
              pd(o, l, h, p);
              return;
            }
          }
        var a = "";
        throw (
          ((h === void 0 ||
            (typeof h == "object" &&
              h !== null &&
              Object.keys(h).length === 0)) &&
            (a +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),
          new Error(
            "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " +
              ("but got: " + (h == null ? h : typeof h) + "." + a)
          ))
        );
      }
      function md(o, l) {
        typeof Symbol == "function" &&
          o[Symbol.toStringTag] === "Generator" &&
          (Ws ||
            s(
              "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."
            ),
          (Ws = !0)),
          o.entries === l &&
            (gl ||
              s(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ),
            (gl = !0));
      }
      function ct(o, l, h) {
        try {
          return gd(o, l, h);
        } catch (p) {
          throw (
            ((typeof p == "object" &&
              p !== null &&
              typeof p.then == "function") ||
              (_n = _n !== null ? _n : ta()),
            p)
          );
        }
      }
      function gd(o, l, h) {
        if (((l.node = h), typeof h == "object" && h !== null)) {
          switch (h.$$typeof) {
            case zo: {
              var p = h,
                i = p.type,
                a = p.props,
                c = p.ref;
              tt(o, l, i, a, c);
              return;
            }
            case is:
              throw new Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case Du: {
              var d = h,
                m = d._payload,
                y = d._init,
                w;
              try {
                w = y(m);
              } catch (He) {
                throw (
                  (typeof He == "object" &&
                    He !== null &&
                    typeof He.then == "function" &&
                    Vi(l, "Lazy"),
                  He)
                );
              }
              ct(o, l, w);
              return;
            }
          }
          if (Zn(h)) {
            ia(o, l, h);
            return;
          }
          var k = Go(h);
          if (k) {
            md(h, k);
            var R = k.call(h);
            if (R) {
              var M = R.next();
              if (!M.done) {
                var U = [];
                do U.push(M.value), (M = R.next());
                while (!M.done);
                ia(o, l, U);
                return;
              }
              return;
            }
          }
          var q = Object.prototype.toString.call(h);
          throw new Error(
            "Objects are not valid as a React child (found: " +
              (q === "[object Object]"
                ? "object with keys {" + Object.keys(h).join(", ") + "}"
                : q) +
              "). If you meant to render a collection of children, use an array instead."
          );
        }
        if (typeof h == "string") {
          var ce = l.blockedSegment;
          ce.lastPushedText = zt(
            l.blockedSegment.chunks,
            h,
            o.responseState,
            ce.lastPushedText
          );
          return;
        }
        if (typeof h == "number") {
          var Le = l.blockedSegment;
          Le.lastPushedText = zt(
            l.blockedSegment.chunks,
            "" + h,
            o.responseState,
            Le.lastPushedText
          );
          return;
        }
        typeof h == "function" &&
          s(
            "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."
          );
      }
      function ia(o, l, h) {
        for (var p = h.length, i = 0; i < p; i++) {
          var a = l.treeContext;
          l.treeContext = Ss(a, p, i);
          try {
            $s(o, l, h[i]);
          } finally {
            l.treeContext = a;
          }
        }
      }
      function _d(o, l, h) {
        var p = l.blockedSegment,
          i = p.chunks.length,
          a = Kr(o, i, null, p.formatContext, p.lastPushedText, !0);
        p.children.push(a), (p.lastPushedText = !1);
        var c = Nt(
          o,
          l.node,
          l.blockedBoundary,
          a,
          l.abortSet,
          l.legacyContext,
          l.context,
          l.treeContext
        );
        l.componentStack !== null &&
          (c.componentStack = l.componentStack.parent);
        var d = c.ping;
        h.then(d, d);
      }
      function $s(o, l, h) {
        var p = l.blockedSegment.formatContext,
          i = l.legacyContext,
          a = l.context,
          c = null;
        c = l.componentStack;
        try {
          return ct(o, l, h);
        } catch (d) {
          if (
            (Rs(),
            typeof d == "object" && d !== null && typeof d.then == "function")
          ) {
            _d(o, l, d),
              (l.blockedSegment.formatContext = p),
              (l.legacyContext = i),
              (l.context = a),
              ju(a),
              (l.componentStack = c);
            return;
          } else
            throw (
              ((l.blockedSegment.formatContext = p),
              (l.legacyContext = i),
              (l.context = a),
              ju(a),
              (l.componentStack = c),
              d)
            );
        }
      }
      function yl(o, l, h, p) {
        var i = Gi(o, p);
        if (
          (l === null
            ? na(o, p)
            : (l.pendingTasks--,
              l.forceClientRender ||
                ((l.forceClientRender = !0),
                (l.errorDigest = i),
                Jr(l, p),
                l.parentFlushed && o.clientRenderedBoundaries.push(l))),
          o.allPendingTasks--,
          o.allPendingTasks === 0)
        ) {
          var a = o.onAllReady;
          a();
        }
      }
      function ua(o) {
        var l = this,
          h = o.blockedBoundary,
          p = o.blockedSegment;
        (p.status = cl), Vs(l, h, p);
      }
      function zs(o, l, h) {
        var p = o.blockedBoundary,
          i = o.blockedSegment;
        if (((i.status = cl), p === null))
          l.allPendingTasks--,
            l.status !== Zr &&
              ((l.status = Zr), l.destination !== null && Se(l.destination));
        else {
          if ((p.pendingTasks--, !p.forceClientRender)) {
            p.forceClientRender = !0;
            var a =
              h === void 0
                ? new Error(
                    "The render was aborted by the server without a reason."
                  )
                : h;
            p.errorDigest = l.onError(a);
            {
              var c = "The server did not finish this Suspense boundary: ";
              a && typeof a.message == "string"
                ? (a = c + a.message)
                : (a = c + String(a));
              var d = bt;
              bt = o;
              try {
                Jr(p, a);
              } finally {
                bt = d;
              }
            }
            p.parentFlushed && l.clientRenderedBoundaries.push(p);
          }
          if (
            (p.fallbackAbortableTasks.forEach(function (y) {
              return zs(y, l, h);
            }),
            p.fallbackAbortableTasks.clear(),
            l.allPendingTasks--,
            l.allPendingTasks === 0)
          ) {
            var m = l.onAllReady;
            m();
          }
        }
      }
      function aa(o, l) {
        if (
          l.chunks.length === 0 &&
          l.children.length === 1 &&
          l.children[0].boundary === null
        ) {
          var h = l.children[0];
          (h.id = l.id), (h.parentFlushed = !0), h.status === sr && aa(o, h);
        } else {
          var p = o.completedSegments;
          p.push(l);
        }
      }
      function Vs(o, l, h) {
        if (l === null) {
          if (h.parentFlushed) {
            if (o.completedRootSegment !== null)
              throw new Error(
                "There can only be one root segment. This is a bug in React."
              );
            o.completedRootSegment = h;
          }
          if ((o.pendingRootTasks--, o.pendingRootTasks === 0)) {
            o.onShellError = zi;
            var p = o.onShellReady;
            p();
          }
        } else if ((l.pendingTasks--, !l.forceClientRender)) {
          if (l.pendingTasks === 0)
            h.parentFlushed && h.status === sr && aa(l, h),
              l.parentFlushed && o.completedBoundaries.push(l),
              l.fallbackAbortableTasks.forEach(ua, o),
              l.fallbackAbortableTasks.clear();
          else if (h.parentFlushed && h.status === sr) {
            aa(l, h);
            var i = l.completedSegments;
            i.length === 1 && l.parentFlushed && o.partialBoundaries.push(l);
          }
        }
        if ((o.allPendingTasks--, o.allPendingTasks === 0)) {
          var a = o.onAllReady;
          a();
        }
      }
      function sa(o, l) {
        var h = l.blockedSegment;
        if (h.status === Qu) {
          ju(l.context);
          var p = null;
          (p = bt), (bt = l);
          try {
            ct(o, l, l.node),
              Cn(h.chunks, o.responseState, h.lastPushedText, h.textEmbedded),
              l.abortSet.delete(l),
              (h.status = sr),
              Vs(o, l.blockedBoundary, h);
          } catch (a) {
            if (
              (Rs(),
              typeof a == "object" && a !== null && typeof a.then == "function")
            ) {
              var i = l.ping;
              a.then(i, i);
            } else
              l.abortSet.delete(l),
                (h.status = Ps),
                yl(o, l.blockedBoundary, h, a);
          } finally {
            bt = p;
          }
        }
      }
      function Xi(o) {
        if (o.status !== Zr) {
          var l = ys(),
            h = Hi.current;
          Hi.current = As;
          var p;
          (p = Dn.getCurrentStack), (Dn.getCurrentStack = ta);
          var i = Ls;
          Ju(o.responseState);
          try {
            var a = o.pingedTasks,
              c;
            for (c = 0; c < a.length; c++) {
              var d = a[c];
              sa(o, d);
            }
            a.splice(0, c), o.destination !== null && Ki(o, o.destination);
          } catch (m) {
            Gi(o, m), na(o, m);
          } finally {
            Ju(i),
              (Hi.current = h),
              (Dn.getCurrentStack = p),
              h === As && ju(l);
          }
        }
      }
      function oa(o, l, h) {
        switch (((h.parentFlushed = !0), h.status)) {
          case Qu: {
            var p = (h.id = o.nextSegmentId++);
            return (
              (h.lastPushedText = !1),
              (h.textEmbedded = !1),
              _e(l, o.responseState, p)
            );
          }
          case sr: {
            h.status = Ds;
            for (
              var i = !0, a = h.chunks, c = 0, d = h.children, m = 0;
              m < d.length;
              m++
            ) {
              for (var y = d[m]; c < y.index; c++) O(l, a[c]);
              i = Zi(o, l, y);
            }
            for (; c < a.length - 1; c++) O(l, a[c]);
            return c < a.length && (i = G(l, a[c])), i;
          }
          default:
            throw new Error(
              "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
            );
        }
      }
      function Zi(o, l, h) {
        var p = h.boundary;
        if (p === null) return oa(o, l, h);
        if (((p.parentFlushed = !0), p.forceClientRender))
          return (
            Kc(
              l,
              o.responseState,
              p.errorDigest,
              p.errorMessage,
              p.errorComponentStack
            ),
            oa(o, l, h),
            Qc(l, o.responseState)
          );
        if (p.pendingTasks > 0) {
          (p.rootSegmentID = o.nextSegmentId++),
            p.completedSegments.length > 0 && o.partialBoundaries.push(p);
          var i = (p.id = Lr(o.responseState));
          return Fo(l, o.responseState, i), oa(o, l, h), Uo(l, o.responseState);
        } else {
          if (p.byteSize > o.progressiveChunkSize)
            return (
              (p.rootSegmentID = o.nextSegmentId++),
              o.completedBoundaries.push(p),
              Fo(l, o.responseState, p.id),
              oa(o, l, h),
              Uo(l, o.responseState)
            );
          Zc(l, o.responseState);
          var a = p.completedSegments;
          if (a.length !== 1)
            throw new Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          var c = a[0];
          return Zi(o, l, c), Jc(l, o.responseState);
        }
      }
      function xl(o, l, h) {
        return Mf(
          l,
          o.responseState,
          h.id,
          h.errorDigest,
          h.errorMessage,
          h.errorComponentStack
        );
      }
      function wl(o, l, h) {
        return (
          wf(l, o.responseState, h.formatContext, h.id),
          Zi(o, l, h),
          Sf(l, h.formatContext)
        );
      }
      function qs(o, l, h) {
        for (var p = h.completedSegments, i = 0; i < p.length; i++) {
          var a = p[i];
          Ys(o, l, h, a);
        }
        return (p.length = 0), Wo(l, o.responseState, h.id, h.rootSegmentID);
      }
      function Gs(o, l, h) {
        for (var p = h.completedSegments, i = 0; i < p.length; i++) {
          var a = p[i];
          if (!Ys(o, l, h, a)) return i++, p.splice(0, i), !1;
        }
        return p.splice(0, i), !0;
      }
      function Ys(o, l, h, p) {
        if (p.status === Ds) return !0;
        var i = p.id;
        if (i === -1) {
          var a = (p.id = h.rootSegmentID);
          if (a === -1)
            throw new Error(
              "A root segment ID must have been assigned by now. This is a bug in React."
            );
          return wl(o, l, p);
        } else return wl(o, l, p), es(l, o.responseState, i);
      }
      function Ki(o, l) {
        L();
        try {
          var h = o.completedRootSegment;
          h !== null &&
            o.pendingRootTasks === 0 &&
            (Zi(o, l, h),
            (o.completedRootSegment = null),
            ie(l, o.responseState));
          var p = o.clientRenderedBoundaries,
            i;
          for (i = 0; i < p.length; i++) {
            var a = p[i];
            if (!xl(o, l, a)) {
              (o.destination = null), i++, p.splice(0, i);
              return;
            }
          }
          p.splice(0, i);
          var c = o.completedBoundaries;
          for (i = 0; i < c.length; i++) {
            var d = c[i];
            if (!qs(o, l, d)) {
              (o.destination = null), i++, c.splice(0, i);
              return;
            }
          }
          c.splice(0, i), se(l), L(l);
          var m = o.partialBoundaries;
          for (i = 0; i < m.length; i++) {
            var y = m[i];
            if (!Gs(o, l, y)) {
              (o.destination = null), i++, m.splice(0, i);
              return;
            }
          }
          m.splice(0, i);
          var w = o.completedBoundaries;
          for (i = 0; i < w.length; i++) {
            var k = w[i];
            if (!qs(o, l, k)) {
              (o.destination = null), i++, w.splice(0, i);
              return;
            }
          }
          w.splice(0, i);
        } finally {
          se(l),
            v(l),
            o.allPendingTasks === 0 &&
              o.pingedTasks.length === 0 &&
              o.clientRenderedBoundaries.length === 0 &&
              o.completedBoundaries.length === 0 &&
              (o.abortableTasks.size !== 0 &&
                s(
                  "There was still abortable task at the root when we closed. This is a bug in React."
                ),
              Se(l));
        }
      }
      function Sl(o) {
        g(function () {
          return Xi(o);
        });
      }
      function kl(o, l) {
        if (o.status === fl) {
          (o.status = Zr), ke(l, o.fatalError);
          return;
        }
        if (o.status !== Zr && o.destination === null) {
          o.destination = l;
          try {
            Ki(o, l);
          } catch (h) {
            Gi(o, h), na(o, h);
          }
        }
      }
      function Xs(o, l) {
        try {
          var h = o.abortableTasks;
          h.forEach(function (p) {
            return zs(p, o, l);
          }),
            h.clear(),
            o.destination !== null && Ki(o, o.destination);
        } catch (p) {
          Gi(o, p), na(o, p);
        }
      }
      function bd(o, l) {
        return function () {
          return kl(l, o);
        };
      }
      function Tl(o, l) {
        return function () {
          return Xs(o, l);
        };
      }
      function vd(o, l) {
        return od(
          o,
          pt(
            l ? l.identifierPrefix : void 0,
            l ? l.nonce : void 0,
            l ? l.bootstrapScriptContent : void 0,
            l ? l.bootstrapScripts : void 0,
            l ? l.bootstrapModules : void 0
          ),
          bi(l ? l.namespaceURI : void 0),
          l ? l.progressiveChunkSize : void 0,
          l ? l.onError : void 0,
          l ? l.onAllReady : void 0,
          l ? l.onShellReady : void 0,
          l ? l.onShellError : void 0,
          void 0
        );
      }
      function El(o, l) {
        var h = vd(o, l),
          p = !1;
        return (
          Sl(h),
          {
            pipe: function (i) {
              if (p)
                throw new Error(
                  "React currently only supports piping to one writable stream."
                );
              return (
                (p = !0),
                kl(h, i),
                i.on("drain", bd(i, h)),
                i.on(
                  "error",
                  Tl(
                    h,
                    new Error(
                      "The destination stream errored while writing data."
                    )
                  )
                ),
                i.on(
                  "close",
                  Tl(h, new Error("The destination stream closed early."))
                ),
                i
              );
            },
            abort: function (i) {
              Xs(h, i);
            },
          }
        );
      }
      (f0.renderToPipeableStream = El), (f0.version = n);
    })();
});
var h0 = re((iu) => {
  "use strict";
  var ru, d0;
  process.env.NODE_ENV === "production"
    ? ((ru = Np()), (d0 = Pm()))
    : ((ru = Mm()), (d0 = Nm()));
  iu.version = ru.version;
  iu.renderToString = ru.renderToString;
  iu.renderToStaticMarkup = ru.renderToStaticMarkup;
  iu.renderToNodeStream = ru.renderToNodeStream;
  iu.renderToStaticNodeStream = ru.renderToStaticNodeStream;
  iu.renderToPipeableStream = d0.renderToPipeableStream;
});
var Wg = re((jk, jg) => {
  "use strict";
  var q2 = function (t) {
    return G2(t) && !Y2(t);
  };
  function G2(e) {
    return !!e && typeof e == "object";
  }
  function Y2(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || K2(e);
  }
  var X2 = typeof Symbol == "function" && Symbol.for,
    Z2 = X2 ? Symbol.for("react.element") : 60103;
  function K2(e) {
    return e.$$typeof === Z2;
  }
  function J2(e) {
    return Array.isArray(e) ? [] : {};
  }
  function Eo(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? Ia(J2(e), e, t) : e;
  }
  function Q2(e, t, n) {
    return e.concat(t).map(function (r) {
      return Eo(r, n);
    });
  }
  function ex(e, t) {
    if (!t.customMerge) return Ia;
    var n = t.customMerge(e);
    return typeof n == "function" ? n : Ia;
  }
  function tx(e) {
    return Object.getOwnPropertySymbols
      ? Object.getOwnPropertySymbols(e).filter(function (t) {
          return Object.propertyIsEnumerable.call(e, t);
        })
      : [];
  }
  function Fg(e) {
    return Object.keys(e).concat(tx(e));
  }
  function Ug(e, t) {
    try {
      return t in e;
    } catch {
      return !1;
    }
  }
  function nx(e, t) {
    return (
      Ug(e, t) &&
      !(
        Object.hasOwnProperty.call(e, t) &&
        Object.propertyIsEnumerable.call(e, t)
      )
    );
  }
  function rx(e, t, n) {
    var r = {};
    return (
      n.isMergeableObject(e) &&
        Fg(e).forEach(function (u) {
          r[u] = Eo(e[u], n);
        }),
      Fg(t).forEach(function (u) {
        nx(e, u) ||
          (Ug(e, u) && n.isMergeableObject(t[u])
            ? (r[u] = ex(u, n)(e[u], t[u], n))
            : (r[u] = Eo(t[u], n)));
      }),
      r
    );
  }
  function Ia(e, t, n) {
    (n = n || {}),
      (n.arrayMerge = n.arrayMerge || Q2),
      (n.isMergeableObject = n.isMergeableObject || q2),
      (n.cloneUnlessOtherwiseSpecified = Eo);
    var r = Array.isArray(t),
      u = Array.isArray(e),
      s = r === u;
    return s ? (r ? n.arrayMerge(e, t, n) : rx(e, t, n)) : Eo(t, n);
  }
  Ia.all = function (t, n) {
    if (!Array.isArray(t)) throw new Error("first argument should be an array");
    return t.reduce(function (r, u) {
      return Ia(r, u, n);
    }, {});
  };
  var ix = Ia;
  jg.exports = ix;
});
var Dc = re((qk, t_) => {
  "use strict";
  function Je(e) {
    (this.__parent = e),
      (this.__character_count = 0),
      (this.__indent_count = -1),
      (this.__alignment_count = 0),
      (this.__wrap_point_index = 0),
      (this.__wrap_point_character_count = 0),
      (this.__wrap_point_indent_count = -1),
      (this.__wrap_point_alignment_count = 0),
      (this.__items = []);
  }
  Je.prototype.clone_empty = function () {
    var e = new Je(this.__parent);
    return e.set_indent(this.__indent_count, this.__alignment_count), e;
  };
  Je.prototype.item = function (e) {
    return e < 0 ? this.__items[this.__items.length + e] : this.__items[e];
  };
  Je.prototype.has_match = function (e) {
    for (var t = this.__items.length - 1; t >= 0; t--)
      if (this.__items[t].match(e)) return !0;
    return !1;
  };
  Je.prototype.set_indent = function (e, t) {
    this.is_empty() &&
      ((this.__indent_count = e || 0),
      (this.__alignment_count = t || 0),
      (this.__character_count = this.__parent.get_indent_size(
        this.__indent_count,
        this.__alignment_count
      )));
  };
  Je.prototype._set_wrap_point = function () {
    this.__parent.wrap_line_length &&
      ((this.__wrap_point_index = this.__items.length),
      (this.__wrap_point_character_count = this.__character_count),
      (this.__wrap_point_indent_count = this.__parent.next_line.__indent_count),
      (this.__wrap_point_alignment_count =
        this.__parent.next_line.__alignment_count));
  };
  Je.prototype._should_wrap = function () {
    return (
      this.__wrap_point_index &&
      this.__character_count > this.__parent.wrap_line_length &&
      this.__wrap_point_character_count >
        this.__parent.next_line.__character_count
    );
  };
  Je.prototype._allow_wrap = function () {
    if (this._should_wrap()) {
      this.__parent.add_new_line();
      var e = this.__parent.current_line;
      return (
        e.set_indent(
          this.__wrap_point_indent_count,
          this.__wrap_point_alignment_count
        ),
        (e.__items = this.__items.slice(this.__wrap_point_index)),
        (this.__items = this.__items.slice(0, this.__wrap_point_index)),
        (e.__character_count +=
          this.__character_count - this.__wrap_point_character_count),
        (this.__character_count = this.__wrap_point_character_count),
        e.__items[0] === " " &&
          (e.__items.splice(0, 1), (e.__character_count -= 1)),
        !0
      );
    }
    return !1;
  };
  Je.prototype.is_empty = function () {
    return this.__items.length === 0;
  };
  Je.prototype.last = function () {
    return this.is_empty() ? null : this.__items[this.__items.length - 1];
  };
  Je.prototype.push = function (e) {
    this.__items.push(e);
    var t = e.lastIndexOf(`
`);
    t !== -1
      ? (this.__character_count = e.length - t)
      : (this.__character_count += e.length);
  };
  Je.prototype.pop = function () {
    var e = null;
    return (
      this.is_empty() ||
        ((e = this.__items.pop()), (this.__character_count -= e.length)),
      e
    );
  };
  Je.prototype._remove_indent = function () {
    this.__indent_count > 0 &&
      ((this.__indent_count -= 1),
      (this.__character_count -= this.__parent.indent_size));
  };
  Je.prototype._remove_wrap_indent = function () {
    this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
  };
  Je.prototype.trim = function () {
    for (; this.last() === " "; )
      this.__items.pop(), (this.__character_count -= 1);
  };
  Je.prototype.toString = function () {
    var e = "";
    return (
      this.is_empty()
        ? this.__parent.indent_empty_lines &&
          (e = this.__parent.get_indent_string(this.__indent_count))
        : ((e = this.__parent.get_indent_string(
            this.__indent_count,
            this.__alignment_count
          )),
          (e += this.__items.join(""))),
      e
    );
  };
  function Co(e, t) {
    (this.__cache = [""]),
      (this.__indent_size = e.indent_size),
      (this.__indent_string = e.indent_char),
      e.indent_with_tabs ||
        (this.__indent_string = new Array(e.indent_size + 1).join(
          e.indent_char
        )),
      (t = t || ""),
      e.indent_level > 0 &&
        (t = new Array(e.indent_level + 1).join(this.__indent_string)),
      (this.__base_string = t),
      (this.__base_string_length = t.length);
  }
  Co.prototype.get_indent_size = function (e, t) {
    var n = this.__base_string_length;
    return (
      (t = t || 0), e < 0 && (n = 0), (n += e * this.__indent_size), (n += t), n
    );
  };
  Co.prototype.get_indent_string = function (e, t) {
    var n = this.__base_string;
    return (
      (t = t || 0),
      e < 0 && ((e = 0), (n = "")),
      (t += e * this.__indent_size),
      this.__ensure_cache(t),
      (n += this.__cache[t]),
      n
    );
  };
  Co.prototype.__ensure_cache = function (e) {
    for (; e >= this.__cache.length; ) this.__add_column();
  };
  Co.prototype.__add_column = function () {
    var e = this.__cache.length,
      t = 0,
      n = "";
    this.__indent_size &&
      e >= this.__indent_size &&
      ((t = Math.floor(e / this.__indent_size)),
      (e -= t * this.__indent_size),
      (n = new Array(t + 1).join(this.__indent_string))),
      e && (n += new Array(e + 1).join(" ")),
      this.__cache.push(n);
  };
  function Qe(e, t) {
    (this.__indent_cache = new Co(e, t)),
      (this.raw = !1),
      (this._end_with_newline = e.end_with_newline),
      (this.indent_size = e.indent_size),
      (this.wrap_line_length = e.wrap_line_length),
      (this.indent_empty_lines = e.indent_empty_lines),
      (this.__lines = []),
      (this.previous_line = null),
      (this.current_line = null),
      (this.next_line = new Je(this)),
      (this.space_before_token = !1),
      (this.non_breaking_space = !1),
      (this.previous_token_wrapped = !1),
      this.__add_outputline();
  }
  Qe.prototype.__add_outputline = function () {
    (this.previous_line = this.current_line),
      (this.current_line = this.next_line.clone_empty()),
      this.__lines.push(this.current_line);
  };
  Qe.prototype.get_line_number = function () {
    return this.__lines.length;
  };
  Qe.prototype.get_indent_string = function (e, t) {
    return this.__indent_cache.get_indent_string(e, t);
  };
  Qe.prototype.get_indent_size = function (e, t) {
    return this.__indent_cache.get_indent_size(e, t);
  };
  Qe.prototype.is_empty = function () {
    return !this.previous_line && this.current_line.is_empty();
  };
  Qe.prototype.add_new_line = function (e) {
    return this.is_empty() || (!e && this.just_added_newline())
      ? !1
      : (this.raw || this.__add_outputline(), !0);
  };
  Qe.prototype.get_code = function (e) {
    this.trim(!0);
    var t = this.current_line.pop();
    t &&
      (t[t.length - 1] ===
        `
` && (t = t.replace(/\n+$/g, "")),
      this.current_line.push(t)),
      this._end_with_newline && this.__add_outputline();
    var n = this.__lines.join(`
`);
    return (
      e !==
        `
` && (n = n.replace(/[\n]/g, e)),
      n
    );
  };
  Qe.prototype.set_wrap_point = function () {
    this.current_line._set_wrap_point();
  };
  Qe.prototype.set_indent = function (e, t) {
    return (
      (e = e || 0),
      (t = t || 0),
      this.next_line.set_indent(e, t),
      this.__lines.length > 1
        ? (this.current_line.set_indent(e, t), !0)
        : (this.current_line.set_indent(), !1)
    );
  };
  Qe.prototype.add_raw_token = function (e) {
    for (var t = 0; t < e.newlines; t++) this.__add_outputline();
    this.current_line.set_indent(-1),
      this.current_line.push(e.whitespace_before),
      this.current_line.push(e.text),
      (this.space_before_token = !1),
      (this.non_breaking_space = !1),
      (this.previous_token_wrapped = !1);
  };
  Qe.prototype.add_token = function (e) {
    this.__add_space_before_token(),
      this.current_line.push(e),
      (this.space_before_token = !1),
      (this.non_breaking_space = !1),
      (this.previous_token_wrapped = this.current_line._allow_wrap());
  };
  Qe.prototype.__add_space_before_token = function () {
    this.space_before_token &&
      !this.just_added_newline() &&
      (this.non_breaking_space || this.set_wrap_point(),
      this.current_line.push(" "));
  };
  Qe.prototype.remove_indent = function (e) {
    for (var t = this.__lines.length; e < t; )
      this.__lines[e]._remove_indent(), e++;
    this.current_line._remove_wrap_indent();
  };
  Qe.prototype.trim = function (e) {
    for (
      e = e === void 0 ? !1 : e, this.current_line.trim();
      e && this.__lines.length > 1 && this.current_line.is_empty();

    )
      this.__lines.pop(),
        (this.current_line = this.__lines[this.__lines.length - 1]),
        this.current_line.trim();
    this.previous_line =
      this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
  };
  Qe.prototype.just_added_newline = function () {
    return this.current_line.is_empty();
  };
  Qe.prototype.just_added_blankline = function () {
    return (
      this.is_empty() ||
      (this.current_line.is_empty() && this.previous_line.is_empty())
    );
  };
  Qe.prototype.ensure_empty_line_above = function (e, t) {
    for (var n = this.__lines.length - 2; n >= 0; ) {
      var r = this.__lines[n];
      if (r.is_empty()) break;
      if (r.item(0).indexOf(e) !== 0 && r.item(-1) !== t) {
        this.__lines.splice(n + 1, 0, new Je(this)),
          (this.previous_line = this.__lines[this.__lines.length - 2]);
        break;
      }
      n--;
    }
  };
  t_.exports.Output = Qe;
});
var G0 = re((Gk, n_) => {
  "use strict";
  function Kx(e, t, n, r) {
    (this.type = e),
      (this.text = t),
      (this.comments_before = null),
      (this.newlines = n || 0),
      (this.whitespace_before = r || ""),
      (this.parent = null),
      (this.next = null),
      (this.previous = null),
      (this.opened = null),
      (this.closed = null),
      (this.directives = null);
  }
  n_.exports.Token = Kx;
});
var Z0 = re((_r) => {
  "use strict";
  var Jx = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a",
    r_ = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a",
    Y0 =
      "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc",
    i_ =
      "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f",
    X0 = "\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}",
    u_ = "(?:" + X0 + "|[" + Jx + Y0 + "])",
    Qx = "(?:" + X0 + "|[" + r_ + Y0 + i_ + "])*";
  _r.identifier = new RegExp(u_ + Qx, "g");
  _r.identifierStart = new RegExp(u_);
  _r.identifierMatch = new RegExp("(?:" + X0 + "|[" + r_ + Y0 + i_ + "])+");
  _r.newline = /[\n\r\u2028\u2029]/;
  _r.lineBreak = new RegExp(
    `\r
|` + _r.newline.source
  );
  _r.allLineBreaks = new RegExp(_r.lineBreak.source, "g");
});
var Mc = re((Xk, Pc) => {
  "use strict";
  function ii(e, t) {
    (this.raw_options = a_(e, t)),
      (this.disabled = this._get_boolean("disabled")),
      (this.eol = this._get_characters("eol", "auto")),
      (this.end_with_newline = this._get_boolean("end_with_newline")),
      (this.indent_size = this._get_number("indent_size", 4)),
      (this.indent_char = this._get_characters("indent_char", " ")),
      (this.indent_level = this._get_number("indent_level")),
      (this.preserve_newlines = this._get_boolean("preserve_newlines", !0)),
      (this.max_preserve_newlines = this._get_number(
        "max_preserve_newlines",
        32786
      )),
      this.preserve_newlines || (this.max_preserve_newlines = 0),
      (this.indent_with_tabs = this._get_boolean(
        "indent_with_tabs",
        this.indent_char === "	"
      )),
      this.indent_with_tabs &&
        ((this.indent_char = "	"),
        this.indent_size === 1 && (this.indent_size = 4)),
      (this.wrap_line_length = this._get_number(
        "wrap_line_length",
        this._get_number("max_char")
      )),
      (this.indent_empty_lines = this._get_boolean("indent_empty_lines")),
      (this.templating = this._get_selection_list(
        "templating",
        ["auto", "none", "django", "erb", "handlebars", "php", "smarty"],
        ["auto"]
      ));
  }
  ii.prototype._get_array = function (e, t) {
    var n = this.raw_options[e],
      r = t || [];
    return (
      typeof n == "object"
        ? n !== null && typeof n.concat == "function" && (r = n.concat())
        : typeof n == "string" && (r = n.split(/[^a-zA-Z0-9_\/\-]+/)),
      r
    );
  };
  ii.prototype._get_boolean = function (e, t) {
    var n = this.raw_options[e],
      r = n === void 0 ? !!t : !!n;
    return r;
  };
  ii.prototype._get_characters = function (e, t) {
    var n = this.raw_options[e],
      r = t || "";
    return (
      typeof n == "string" &&
        (r = n
          .replace(/\\r/, "\r")
          .replace(
            /\\n/,
            `
`
          )
          .replace(/\\t/, "	")),
      r
    );
  };
  ii.prototype._get_number = function (e, t) {
    var n = this.raw_options[e];
    (t = parseInt(t, 10)), isNaN(t) && (t = 0);
    var r = parseInt(n, 10);
    return isNaN(r) && (r = t), r;
  };
  ii.prototype._get_selection = function (e, t, n) {
    var r = this._get_selection_list(e, t, n);
    if (r.length !== 1)
      throw new Error(
        "Invalid Option Value: The option '" +
          e +
          `' can only be one of the following values:
` +
          t +
          `
You passed in: '` +
          this.raw_options[e] +
          "'"
      );
    return r[0];
  };
  ii.prototype._get_selection_list = function (e, t, n) {
    if (!t || t.length === 0)
      throw new Error("Selection list cannot be empty.");
    if (((n = n || [t[0]]), !this._is_valid_selection(n, t)))
      throw new Error("Invalid Default Value!");
    var r = this._get_array(e, n);
    if (!this._is_valid_selection(r, t))
      throw new Error(
        "Invalid Option Value: The option '" +
          e +
          `' can contain only the following values:
` +
          t +
          `
You passed in: '` +
          this.raw_options[e] +
          "'"
      );
    return r;
  };
  ii.prototype._is_valid_selection = function (e, t) {
    return (
      e.length &&
      t.length &&
      !e.some(function (n) {
        return t.indexOf(n) === -1;
      })
    );
  };
  function a_(e, t) {
    var n = {};
    e = s_(e);
    var r;
    for (r in e) r !== t && (n[r] = e[r]);
    if (t && e[t]) for (r in e[t]) n[r] = e[t][r];
    return n;
  }
  function s_(e) {
    var t = {},
      n;
    for (n in e) {
      var r = n.replace(/-/g, "_");
      t[r] = e[n];
    }
    return t;
  }
  Pc.exports.Options = ii;
  Pc.exports.normalizeOpts = s_;
  Pc.exports.mergeOpts = a_;
});
var K0 = re((Zk, c_) => {
  "use strict";
  var o_ = Mc().Options,
    ew = ["before-newline", "after-newline", "preserve-newline"];
  function l_(e) {
    o_.call(this, e, "js");
    var t = this.raw_options.brace_style || null;
    t === "expand-strict"
      ? (this.raw_options.brace_style = "expand")
      : t === "collapse-preserve-inline"
      ? (this.raw_options.brace_style = "collapse,preserve-inline")
      : this.raw_options.braces_on_own_line !== void 0 &&
        (this.raw_options.brace_style = this.raw_options.braces_on_own_line
          ? "expand"
          : "collapse");
    var n = this._get_selection_list("brace_style", [
      "collapse",
      "expand",
      "end-expand",
      "none",
      "preserve-inline",
    ]);
    (this.brace_preserve_inline = !1), (this.brace_style = "collapse");
    for (var r = 0; r < n.length; r++)
      n[r] === "preserve-inline"
        ? (this.brace_preserve_inline = !0)
        : (this.brace_style = n[r]);
    (this.unindent_chained_methods = this._get_boolean(
      "unindent_chained_methods"
    )),
      (this.break_chained_methods = this._get_boolean("break_chained_methods")),
      (this.space_in_paren = this._get_boolean("space_in_paren")),
      (this.space_in_empty_paren = this._get_boolean("space_in_empty_paren")),
      (this.jslint_happy = this._get_boolean("jslint_happy")),
      (this.space_after_anon_function = this._get_boolean(
        "space_after_anon_function"
      )),
      (this.space_after_named_function = this._get_boolean(
        "space_after_named_function"
      )),
      (this.keep_array_indentation = this._get_boolean(
        "keep_array_indentation"
      )),
      (this.space_before_conditional = this._get_boolean(
        "space_before_conditional",
        !0
      )),
      (this.unescape_strings = this._get_boolean("unescape_strings")),
      (this.e4x = this._get_boolean("e4x")),
      (this.comma_first = this._get_boolean("comma_first")),
      (this.operator_position = this._get_selection("operator_position", ew)),
      (this.test_output_raw = this._get_boolean("test_output_raw")),
      this.jslint_happy && (this.space_after_anon_function = !0);
  }
  l_.prototype = new o_();
  c_.exports.Options = l_;
});
var Nc = re((Kk, d_) => {
  "use strict";
  var f_ = RegExp.prototype.hasOwnProperty("sticky");
  function at(e) {
    (this.__input = e || ""),
      (this.__input_length = this.__input.length),
      (this.__position = 0);
  }
  at.prototype.restart = function () {
    this.__position = 0;
  };
  at.prototype.back = function () {
    this.__position > 0 && (this.__position -= 1);
  };
  at.prototype.hasNext = function () {
    return this.__position < this.__input_length;
  };
  at.prototype.next = function () {
    var e = null;
    return (
      this.hasNext() &&
        ((e = this.__input.charAt(this.__position)), (this.__position += 1)),
      e
    );
  };
  at.prototype.peek = function (e) {
    var t = null;
    return (
      (e = e || 0),
      (e += this.__position),
      e >= 0 && e < this.__input_length && (t = this.__input.charAt(e)),
      t
    );
  };
  at.prototype.__match = function (e, t) {
    e.lastIndex = t;
    var n = e.exec(this.__input);
    return n && !(f_ && e.sticky) && n.index !== t && (n = null), n;
  };
  at.prototype.test = function (e, t) {
    return (
      (t = t || 0),
      (t += this.__position),
      t >= 0 && t < this.__input_length ? !!this.__match(e, t) : !1
    );
  };
  at.prototype.testChar = function (e, t) {
    var n = this.peek(t);
    return (e.lastIndex = 0), n !== null && e.test(n);
  };
  at.prototype.match = function (e) {
    var t = this.__match(e, this.__position);
    return t ? (this.__position += t[0].length) : (t = null), t;
  };
  at.prototype.read = function (e, t, n) {
    var r = "",
      u;
    return (
      e && ((u = this.match(e)), u && (r += u[0])),
      t && (u || !e) && (r += this.readUntil(t, n)),
      r
    );
  };
  at.prototype.readUntil = function (e, t) {
    var n = "",
      r = this.__position;
    e.lastIndex = this.__position;
    var u = e.exec(this.__input);
    return (
      u ? ((r = u.index), t && (r += u[0].length)) : (r = this.__input_length),
      (n = this.__input.substring(this.__position, r)),
      (this.__position = r),
      n
    );
  };
  at.prototype.readUntilAfter = function (e) {
    return this.readUntil(e, !0);
  };
  at.prototype.get_regexp = function (e, t) {
    var n = null,
      r = "g";
    return (
      t && f_ && (r = "y"),
      typeof e == "string" && e !== ""
        ? (n = new RegExp(e, r))
        : e && (n = new RegExp(e.source, r)),
      n
    );
  };
  at.prototype.get_literal_regexp = function (e) {
    return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  };
  at.prototype.peekUntilAfter = function (e) {
    var t = this.__position,
      n = this.readUntilAfter(e);
    return (this.__position = t), n;
  };
  at.prototype.lookBack = function (e) {
    var t = this.__position - 1;
    return (
      t >= e.length &&
      this.__input.substring(t - e.length, t).toLowerCase() === e
    );
  };
  d_.exports.InputScanner = at;
});
var p_ = re((Jk, h_) => {
  "use strict";
  function su(e) {
    (this.__tokens = []),
      (this.__tokens_length = this.__tokens.length),
      (this.__position = 0),
      (this.__parent_token = e);
  }
  su.prototype.restart = function () {
    this.__position = 0;
  };
  su.prototype.isEmpty = function () {
    return this.__tokens_length === 0;
  };
  su.prototype.hasNext = function () {
    return this.__position < this.__tokens_length;
  };
  su.prototype.next = function () {
    var e = null;
    return (
      this.hasNext() &&
        ((e = this.__tokens[this.__position]), (this.__position += 1)),
      e
    );
  };
  su.prototype.peek = function (e) {
    var t = null;
    return (
      (e = e || 0),
      (e += this.__position),
      e >= 0 && e < this.__tokens_length && (t = this.__tokens[e]),
      t
    );
  };
  su.prototype.add = function (e) {
    this.__parent_token && (e.parent = this.__parent_token),
      this.__tokens.push(e),
      (this.__tokens_length += 1);
  };
  h_.exports.TokenStream = su;
});
var Ro = re((Qk, m_) => {
  "use strict";
  function Fn(e, t) {
    (this._input = e),
      (this._starting_pattern = null),
      (this._match_pattern = null),
      (this._until_pattern = null),
      (this._until_after = !1),
      t &&
        ((this._starting_pattern = this._input.get_regexp(
          t._starting_pattern,
          !0
        )),
        (this._match_pattern = this._input.get_regexp(t._match_pattern, !0)),
        (this._until_pattern = this._input.get_regexp(t._until_pattern)),
        (this._until_after = t._until_after));
  }
  Fn.prototype.read = function () {
    var e = this._input.read(this._starting_pattern);
    return (
      (!this._starting_pattern || e) &&
        (e += this._input.read(
          this._match_pattern,
          this._until_pattern,
          this._until_after
        )),
      e
    );
  };
  Fn.prototype.read_match = function () {
    return this._input.match(this._match_pattern);
  };
  Fn.prototype.until_after = function (e) {
    var t = this._create();
    return (
      (t._until_after = !0),
      (t._until_pattern = this._input.get_regexp(e)),
      t._update(),
      t
    );
  };
  Fn.prototype.until = function (e) {
    var t = this._create();
    return (
      (t._until_after = !1),
      (t._until_pattern = this._input.get_regexp(e)),
      t._update(),
      t
    );
  };
  Fn.prototype.starting_with = function (e) {
    var t = this._create();
    return (
      (t._starting_pattern = this._input.get_regexp(e, !0)), t._update(), t
    );
  };
  Fn.prototype.matching = function (e) {
    var t = this._create();
    return (t._match_pattern = this._input.get_regexp(e, !0)), t._update(), t;
  };
  Fn.prototype._create = function () {
    return new Fn(this._input, this);
  };
  Fn.prototype._update = function () {};
  m_.exports.Pattern = Fn;
});
var b_ = re((e6, __) => {
  "use strict";
  var g_ = Ro().Pattern;
  function ui(e, t) {
    g_.call(this, e, t),
      t
        ? (this._line_regexp = this._input.get_regexp(t._line_regexp))
        : this.__set_whitespace_patterns("", ""),
      (this.newline_count = 0),
      (this.whitespace_before_token = "");
  }
  ui.prototype = new g_();
  ui.prototype.__set_whitespace_patterns = function (e, t) {
    (e += "\\t "),
      (t += "\\n\\r"),
      (this._match_pattern = this._input.get_regexp("[" + e + t + "]+", !0)),
      (this._newline_regexp = this._input.get_regexp("\\r\\n|[" + t + "]"));
  };
  ui.prototype.read = function () {
    (this.newline_count = 0), (this.whitespace_before_token = "");
    var e = this._input.read(this._match_pattern);
    if (e === " ") this.whitespace_before_token = " ";
    else if (e) {
      var t = this.__split(this._newline_regexp, e);
      (this.newline_count = t.length - 1),
        (this.whitespace_before_token = t[this.newline_count]);
    }
    return e;
  };
  ui.prototype.matching = function (e, t) {
    var n = this._create();
    return n.__set_whitespace_patterns(e, t), n._update(), n;
  };
  ui.prototype._create = function () {
    return new ui(this._input, this);
  };
  ui.prototype.__split = function (e, t) {
    e.lastIndex = 0;
    for (var n = 0, r = [], u = e.exec(t); u; )
      r.push(t.substring(n, u.index)),
        (n = u.index + u[0].length),
        (u = e.exec(t));
    return n < t.length ? r.push(t.substring(n, t.length)) : r.push(""), r;
  };
  __.exports.WhitespacePattern = ui;
});
var Ao = re((t6, Q0) => {
  "use strict";
  var tw = Nc().InputScanner,
    v_ = G0().Token,
    J0 = p_().TokenStream,
    nw = b_().WhitespacePattern,
    Io = { START: "TK_START", RAW: "TK_RAW", EOF: "TK_EOF" },
    Un = function (e, t) {
      (this._input = new tw(e)),
        (this._options = t || {}),
        (this.__tokens = null),
        (this._patterns = {}),
        (this._patterns.whitespace = new nw(this._input));
    };
  Un.prototype.tokenize = function () {
    this._input.restart(), (this.__tokens = new J0()), this._reset();
    for (
      var e, t = new v_(Io.START, ""), n = null, r = [], u = new J0();
      t.type !== Io.EOF;

    ) {
      for (e = this._get_next_token(t, n); this._is_comment(e); )
        u.add(e), (e = this._get_next_token(t, n));
      u.isEmpty() || ((e.comments_before = u), (u = new J0())),
        (e.parent = n),
        this._is_opening(e)
          ? (r.push(n), (n = e))
          : n &&
            this._is_closing(e, n) &&
            ((e.opened = n), (n.closed = e), (n = r.pop()), (e.parent = n)),
        (e.previous = t),
        (t.next = e),
        this.__tokens.add(e),
        (t = e);
    }
    return this.__tokens;
  };
  Un.prototype._is_first_token = function () {
    return this.__tokens.isEmpty();
  };
  Un.prototype._reset = function () {};
  Un.prototype._get_next_token = function (e, t) {
    this._readWhitespace();
    var n = this._input.read(/.+/g);
    return n ? this._create_token(Io.RAW, n) : this._create_token(Io.EOF, "");
  };
  Un.prototype._is_comment = function (e) {
    return !1;
  };
  Un.prototype._is_opening = function (e) {
    return !1;
  };
  Un.prototype._is_closing = function (e, t) {
    return !1;
  };
  Un.prototype._create_token = function (e, t) {
    var n = new v_(
      e,
      t,
      this._patterns.whitespace.newline_count,
      this._patterns.whitespace.whitespace_before_token
    );
    return n;
  };
  Un.prototype._readWhitespace = function () {
    return this._patterns.whitespace.read();
  };
  Q0.exports.Tokenizer = Un;
  Q0.exports.TOKEN = Io;
});
var Bc = re((n6, y_) => {
  "use strict";
  function eh(e, t) {
    (e = typeof e == "string" ? e : e.source),
      (t = typeof t == "string" ? t : t.source),
      (this.__directives_block_pattern = new RegExp(
        e + / beautify( \w+[:]\w+)+ /.source + t,
        "g"
      )),
      (this.__directive_pattern = / (\w+)[:](\w+)/g),
      (this.__directives_end_ignore_pattern = new RegExp(
        e + /\sbeautify\signore:end\s/.source + t,
        "g"
      ));
  }
  eh.prototype.get_directives = function (e) {
    if (!e.match(this.__directives_block_pattern)) return null;
    var t = {};
    this.__directive_pattern.lastIndex = 0;
    for (var n = this.__directive_pattern.exec(e); n; )
      (t[n[1]] = n[2]), (n = this.__directive_pattern.exec(e));
    return t;
  };
  eh.prototype.readIgnored = function (e) {
    return e.readUntilAfter(this.__directives_end_ignore_pattern);
  };
  y_.exports.Directives = eh;
});
var rh = re((r6, x_) => {
  "use strict";
  var th = Ro().Pattern,
    nh = { django: !1, erb: !1, handlebars: !1, php: !1, smarty: !1 };
  function yn(e, t) {
    th.call(this, e, t),
      (this.__template_pattern = null),
      (this._disabled = Object.assign({}, nh)),
      (this._excluded = Object.assign({}, nh)),
      t &&
        ((this.__template_pattern = this._input.get_regexp(
          t.__template_pattern
        )),
        (this._excluded = Object.assign(this._excluded, t._excluded)),
        (this._disabled = Object.assign(this._disabled, t._disabled)));
    var n = new th(e);
    this.__patterns = {
      handlebars_comment: n.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: n.starting_with(/{{{/).until_after(/}}}/),
      handlebars: n.starting_with(/{{/).until_after(/}}/),
      php: n.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: n.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      django: n.starting_with(/{%/).until_after(/%}/),
      django_value: n.starting_with(/{{/).until_after(/}}/),
      django_comment: n.starting_with(/{#/).until_after(/#}/),
      smarty: n.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: n.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: n.starting_with(/{literal}/).until_after(/{\/literal}/),
    };
  }
  yn.prototype = new th();
  yn.prototype._create = function () {
    return new yn(this._input, this);
  };
  yn.prototype._update = function () {
    this.__set_templated_pattern();
  };
  yn.prototype.disable = function (e) {
    var t = this._create();
    return (t._disabled[e] = !0), t._update(), t;
  };
  yn.prototype.read_options = function (e) {
    var t = this._create();
    for (var n in nh) t._disabled[n] = e.templating.indexOf(n) === -1;
    return t._update(), t;
  };
  yn.prototype.exclude = function (e) {
    var t = this._create();
    return (t._excluded[e] = !0), t._update(), t;
  };
  yn.prototype.read = function () {
    var e = "";
    this._match_pattern
      ? (e = this._input.read(this._starting_pattern))
      : (e = this._input.read(this._starting_pattern, this.__template_pattern));
    for (var t = this._read_template(); t; )
      this._match_pattern
        ? (t += this._input.read(this._match_pattern))
        : (t += this._input.readUntil(this.__template_pattern)),
        (e += t),
        (t = this._read_template());
    return (
      this._until_after &&
        (e += this._input.readUntilAfter(this._until_pattern)),
      e
    );
  };
  yn.prototype.__set_templated_pattern = function () {
    var e = [];
    this._disabled.php || e.push(this.__patterns.php._starting_pattern.source),
      this._disabled.handlebars ||
        e.push(this.__patterns.handlebars._starting_pattern.source),
      this._disabled.erb ||
        e.push(this.__patterns.erb._starting_pattern.source),
      this._disabled.django ||
        (e.push(this.__patterns.django._starting_pattern.source),
        e.push(this.__patterns.django_value._starting_pattern.source),
        e.push(this.__patterns.django_comment._starting_pattern.source)),
      this._disabled.smarty ||
        e.push(this.__patterns.smarty._starting_pattern.source),
      this._until_pattern && e.push(this._until_pattern.source),
      (this.__template_pattern = this._input.get_regexp(
        "(?:" + e.join("|") + ")"
      ));
  };
  yn.prototype._read_template = function () {
    var e = "",
      t = this._input.peek();
    if (t === "<") {
      var n = this._input.peek(1);
      !this._disabled.php &&
        !this._excluded.php &&
        n === "?" &&
        (e = e || this.__patterns.php.read()),
        !this._disabled.erb &&
          !this._excluded.erb &&
          n === "%" &&
          (e = e || this.__patterns.erb.read());
    } else
      t === "{" &&
        (!this._disabled.handlebars &&
          !this._excluded.handlebars &&
          ((e = e || this.__patterns.handlebars_comment.read()),
          (e = e || this.__patterns.handlebars_unescaped.read()),
          (e = e || this.__patterns.handlebars.read())),
        this._disabled.django ||
          (!this._excluded.django &&
            !this._excluded.handlebars &&
            (e = e || this.__patterns.django_value.read()),
          this._excluded.django ||
            ((e = e || this.__patterns.django_comment.read()),
            (e = e || this.__patterns.django.read()))),
        this._disabled.smarty ||
          (this._disabled.django &&
            this._disabled.handlebars &&
            ((e = e || this.__patterns.smarty_comment.read()),
            (e = e || this.__patterns.smarty_literal.read()),
            (e = e || this.__patterns.smarty.read()))));
    return e;
  };
  x_.exports.TemplatablePattern = yn;
});
var Oo = re((i6, Lo) => {
  "use strict";
  var rw = Nc().InputScanner,
    S_ = Ao().Tokenizer,
    ih = Ao().TOKEN,
    iw = Bc().Directives,
    Zt = Z0(),
    uw = Ro().Pattern,
    aw = rh().TemplatablePattern;
  function uh(e, t) {
    return t.indexOf(e) !== -1;
  }
  var V = {
      START_EXPR: "TK_START_EXPR",
      END_EXPR: "TK_END_EXPR",
      START_BLOCK: "TK_START_BLOCK",
      END_BLOCK: "TK_END_BLOCK",
      WORD: "TK_WORD",
      RESERVED: "TK_RESERVED",
      SEMICOLON: "TK_SEMICOLON",
      STRING: "TK_STRING",
      EQUALS: "TK_EQUALS",
      OPERATOR: "TK_OPERATOR",
      COMMA: "TK_COMMA",
      BLOCK_COMMENT: "TK_BLOCK_COMMENT",
      COMMENT: "TK_COMMENT",
      DOT: "TK_DOT",
      UNKNOWN: "TK_UNKNOWN",
      START: ih.START,
      RAW: ih.RAW,
      EOF: ih.EOF,
    },
    w_ = new iw(/\/\*/, /\*\//),
    sw =
      /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/,
    ow = /[0-9]/,
    lw = /[^\d\.]/,
    cw =
      ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(
        " "
      ),
    ou =
      ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
  ou = ou.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
  ou = "\\?\\.(?!\\d) " + ou;
  ou = ou.replace(/ /g, "|");
  var fw = new RegExp(ou),
    k_ =
      "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(
        ","
      ),
    dw = k_.concat([
      "do",
      "in",
      "of",
      "else",
      "get",
      "set",
      "new",
      "catch",
      "finally",
      "typeof",
      "yield",
      "async",
      "await",
      "from",
      "as",
      "class",
      "extends",
    ]),
    hw = new RegExp("^(?:" + dw.join("|") + ")$"),
    Fc,
    et = function (e, t) {
      S_.call(this, e, t),
        (this._patterns.whitespace = this._patterns.whitespace.matching(
          /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
          /\u2028\u2029/.source
        ));
      var n = new uw(this._input),
        r = new aw(this._input).read_options(this._options);
      this.__patterns = {
        template: r,
        identifier: r.starting_with(Zt.identifier).matching(Zt.identifierMatch),
        number: n.matching(sw),
        punct: n.matching(fw),
        comment: n.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
        block_comment: n.starting_with(/\/\*/).until_after(/\*\//),
        html_comment_start: n.matching(/<!--/),
        html_comment_end: n.matching(/-->/),
        include: n.starting_with(/#include/).until_after(Zt.lineBreak),
        shebang: n.starting_with(/#!/).until_after(Zt.lineBreak),
        xml: n.matching(
          /[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/
        ),
        single_quote: r.until(/['\\\n\r\u2028\u2029]/),
        double_quote: r.until(/["\\\n\r\u2028\u2029]/),
        template_text: r.until(/[`\\$]/),
        template_expression: r.until(/[`}\\]/),
      };
    };
  et.prototype = new S_();
  et.prototype._is_comment = function (e) {
    return (
      e.type === V.COMMENT || e.type === V.BLOCK_COMMENT || e.type === V.UNKNOWN
    );
  };
  et.prototype._is_opening = function (e) {
    return e.type === V.START_BLOCK || e.type === V.START_EXPR;
  };
  et.prototype._is_closing = function (e, t) {
    return (
      (e.type === V.END_BLOCK || e.type === V.END_EXPR) &&
      t &&
      ((e.text === "]" && t.text === "[") ||
        (e.text === ")" && t.text === "(") ||
        (e.text === "}" && t.text === "{"))
    );
  };
  et.prototype._reset = function () {
    Fc = !1;
  };
  et.prototype._get_next_token = function (e, t) {
    var n = null;
    this._readWhitespace();
    var r = this._input.peek();
    return r === null
      ? this._create_token(V.EOF, "")
      : ((n = n || this._read_non_javascript(r)),
        (n = n || this._read_string(r)),
        (n = n || this._read_pair(r, this._input.peek(1))),
        (n = n || this._read_word(e)),
        (n = n || this._read_singles(r)),
        (n = n || this._read_comment(r)),
        (n = n || this._read_regexp(r, e)),
        (n = n || this._read_xml(r, e)),
        (n = n || this._read_punctuation()),
        (n = n || this._create_token(V.UNKNOWN, this._input.next())),
        n);
  };
  et.prototype._read_word = function (e) {
    var t;
    if (((t = this.__patterns.identifier.read()), t !== ""))
      return (
        (t = t.replace(
          Zt.allLineBreaks,
          `
`
        )),
        !(
          e.type === V.DOT ||
          (e.type === V.RESERVED && (e.text === "set" || e.text === "get"))
        ) && hw.test(t)
          ? (t === "in" || t === "of") &&
            (e.type === V.WORD || e.type === V.STRING)
            ? this._create_token(V.OPERATOR, t)
            : this._create_token(V.RESERVED, t)
          : this._create_token(V.WORD, t)
      );
    if (((t = this.__patterns.number.read()), t !== ""))
      return this._create_token(V.WORD, t);
  };
  et.prototype._read_singles = function (e) {
    var t = null;
    return (
      e === "(" || e === "["
        ? (t = this._create_token(V.START_EXPR, e))
        : e === ")" || e === "]"
        ? (t = this._create_token(V.END_EXPR, e))
        : e === "{"
        ? (t = this._create_token(V.START_BLOCK, e))
        : e === "}"
        ? (t = this._create_token(V.END_BLOCK, e))
        : e === ";"
        ? (t = this._create_token(V.SEMICOLON, e))
        : e === "." && lw.test(this._input.peek(1))
        ? (t = this._create_token(V.DOT, e))
        : e === "," && (t = this._create_token(V.COMMA, e)),
      t && this._input.next(),
      t
    );
  };
  et.prototype._read_pair = function (e, t) {
    var n = null;
    return (
      e === "#" && t === "{" && (n = this._create_token(V.START_BLOCK, e + t)),
      n && (this._input.next(), this._input.next()),
      n
    );
  };
  et.prototype._read_punctuation = function () {
    var e = this.__patterns.punct.read();
    if (e !== "")
      return e === "="
        ? this._create_token(V.EQUALS, e)
        : e === "?."
        ? this._create_token(V.DOT, e)
        : this._create_token(V.OPERATOR, e);
  };
  et.prototype._read_non_javascript = function (e) {
    var t = "";
    if (e === "#") {
      if (this._is_first_token() && ((t = this.__patterns.shebang.read()), t))
        return this._create_token(
          V.UNKNOWN,
          t.trim() +
            `
`
        );
      if (((t = this.__patterns.include.read()), t))
        return this._create_token(
          V.UNKNOWN,
          t.trim() +
            `
`
        );
      e = this._input.next();
      var n = "#";
      if (this._input.hasNext() && this._input.testChar(ow)) {
        do (e = this._input.next()), (n += e);
        while (this._input.hasNext() && e !== "#" && e !== "=");
        return (
          e === "#" ||
            (this._input.peek() === "[" && this._input.peek(1) === "]"
              ? ((n += "[]"), this._input.next(), this._input.next())
              : this._input.peek() === "{" &&
                this._input.peek(1) === "}" &&
                ((n += "{}"), this._input.next(), this._input.next())),
          this._create_token(V.WORD, n)
        );
      }
      this._input.back();
    } else if (e === "<" && this._is_first_token()) {
      if (((t = this.__patterns.html_comment_start.read()), t)) {
        for (; this._input.hasNext() && !this._input.testChar(Zt.newline); )
          t += this._input.next();
        return (Fc = !0), this._create_token(V.COMMENT, t);
      }
    } else if (
      Fc &&
      e === "-" &&
      ((t = this.__patterns.html_comment_end.read()), t)
    )
      return (Fc = !1), this._create_token(V.COMMENT, t);
    return null;
  };
  et.prototype._read_comment = function (e) {
    var t = null;
    if (e === "/") {
      var n = "";
      if (this._input.peek(1) === "*") {
        n = this.__patterns.block_comment.read();
        var r = w_.get_directives(n);
        r && r.ignore === "start" && (n += w_.readIgnored(this._input)),
          (n = n.replace(
            Zt.allLineBreaks,
            `
`
          )),
          (t = this._create_token(V.BLOCK_COMMENT, n)),
          (t.directives = r);
      } else
        this._input.peek(1) === "/" &&
          ((n = this.__patterns.comment.read()),
          (t = this._create_token(V.COMMENT, n)));
    }
    return t;
  };
  et.prototype._read_string = function (e) {
    if (e === "`" || e === "'" || e === '"') {
      var t = this._input.next();
      return (
        (this.has_char_escapes = !1),
        e === "`"
          ? (t += this._read_string_recursive("`", !0, "${"))
          : (t += this._read_string_recursive(e)),
        this.has_char_escapes && this._options.unescape_strings && (t = pw(t)),
        this._input.peek() === e && (t += this._input.next()),
        (t = t.replace(
          Zt.allLineBreaks,
          `
`
        )),
        this._create_token(V.STRING, t)
      );
    }
    return null;
  };
  et.prototype._allow_regexp_or_xml = function (e) {
    return (
      (e.type === V.RESERVED &&
        uh(e.text, [
          "return",
          "case",
          "throw",
          "else",
          "do",
          "typeof",
          "yield",
        ])) ||
      (e.type === V.END_EXPR &&
        e.text === ")" &&
        e.opened.previous.type === V.RESERVED &&
        uh(e.opened.previous.text, ["if", "while", "for"])) ||
      uh(e.type, [
        V.COMMENT,
        V.START_EXPR,
        V.START_BLOCK,
        V.START,
        V.END_BLOCK,
        V.OPERATOR,
        V.EQUALS,
        V.EOF,
        V.SEMICOLON,
        V.COMMA,
      ])
    );
  };
  et.prototype._read_regexp = function (e, t) {
    if (e === "/" && this._allow_regexp_or_xml(t)) {
      for (
        var n = this._input.next(), r = !1, u = !1;
        this._input.hasNext() &&
        (r || u || this._input.peek() !== e) &&
        !this._input.testChar(Zt.newline);

      )
        (n += this._input.peek()),
          r
            ? (r = !1)
            : ((r = this._input.peek() === "\\"),
              this._input.peek() === "["
                ? (u = !0)
                : this._input.peek() === "]" && (u = !1)),
          this._input.next();
      return (
        this._input.peek() === e &&
          ((n += this._input.next()), (n += this._input.read(Zt.identifier))),
        this._create_token(V.STRING, n)
      );
    }
    return null;
  };
  et.prototype._read_xml = function (e, t) {
    if (this._options.e4x && e === "<" && this._allow_regexp_or_xml(t)) {
      var n = "",
        r = this.__patterns.xml.read_match();
      if (r) {
        for (
          var u = r[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"),
            s = u.indexOf("{") === 0,
            f = 0;
          r;

        ) {
          var g = !!r[1],
            v = r[2],
            b = !!r[r.length - 1] || v.slice(0, 8) === "![CDATA[";
          if (
            (!b &&
              (v === u ||
                (s && v.replace(/^{\s+/, "{").replace(/\s+}$/, "}"))) &&
              (g ? --f : ++f),
            (n += r[0]),
            f <= 0)
          )
            break;
          r = this.__patterns.xml.read_match();
        }
        return (
          r || (n += this._input.match(/[\s\S]*/g)[0]),
          (n = n.replace(
            Zt.allLineBreaks,
            `
`
          )),
          this._create_token(V.STRING, n)
        );
      }
    }
    return null;
  };
  function pw(e) {
    for (var t = "", n = 0, r = new rw(e), u = null; r.hasNext(); )
      if (
        ((u = r.match(/([\s]|[^\\]|\\\\)+/g)),
        u && (t += u[0]),
        r.peek() === "\\")
      ) {
        if ((r.next(), r.peek() === "x")) u = r.match(/x([0-9A-Fa-f]{2})/g);
        else if (r.peek() === "u")
          (u = r.match(/u([0-9A-Fa-f]{4})/g)),
            u || (u = r.match(/u\{([0-9A-Fa-f]+)\}/g));
        else {
          (t += "\\"), r.hasNext() && (t += r.next());
          continue;
        }
        if (
          !u ||
          ((n = parseInt(u[1], 16)),
          n > 126 && n <= 255 && u[0].indexOf("x") === 0)
        )
          return e;
        (n >= 0 && n < 32) || n > 1114111
          ? (t += "\\" + u[0])
          : n === 34 || n === 39 || n === 92
          ? (t += "\\" + String.fromCharCode(n))
          : (t += String.fromCharCode(n));
      }
    return t;
  }
  et.prototype._read_string_recursive = function (e, t, n) {
    var r, u;
    e === "'"
      ? (u = this.__patterns.single_quote)
      : e === '"'
      ? (u = this.__patterns.double_quote)
      : e === "`"
      ? (u = this.__patterns.template_text)
      : e === "}" && (u = this.__patterns.template_expression);
    for (var s = u.read(), f = ""; this._input.hasNext(); ) {
      if (((f = this._input.next()), f === e || (!t && Zt.newline.test(f)))) {
        this._input.back();
        break;
      } else
        f === "\\" && this._input.hasNext()
          ? ((r = this._input.peek()),
            r === "x" || r === "u"
              ? (this.has_char_escapes = !0)
              : r === "\r" &&
                this._input.peek(1) ===
                  `
` &&
                this._input.next(),
            (f += this._input.next()))
          : n &&
            (n === "${" &&
              f === "$" &&
              this._input.peek() === "{" &&
              (f += this._input.next()),
            n === f &&
              (e === "`"
                ? (f += this._read_string_recursive("}", t, "`"))
                : (f += this._read_string_recursive("`", t, "${")),
              this._input.hasNext() && (f += this._input.next())));
      (f += u.read()), (s += f);
    }
    return s;
  };
  Lo.exports.Tokenizer = et;
  Lo.exports.TOKEN = V;
  Lo.exports.positionable_operators = cw.slice();
  Lo.exports.line_starters = k_.slice();
});
var R_ = re((u6, C_) => {
  "use strict";
  var mw = Dc().Output,
    gw = G0().Token,
    Uc = Z0(),
    _w = K0().Options,
    bw = Oo().Tokenizer,
    No = Oo().line_starters,
    Do = Oo().positionable_operators,
    I = Oo().TOKEN;
  function J(e, t) {
    return t.indexOf(e) !== -1;
  }
  function vw(e) {
    return e.replace(/^\s+/g, "");
  }
  function yw(e) {
    for (var t = {}, n = 0; n < e.length; n++)
      t[e[n].replace(/-/g, "_")] = e[n];
    return t;
  }
  function Kt(e, t) {
    return e && e.type === I.RESERVED && e.text === t;
  }
  function be(e, t) {
    return e && e.type === I.RESERVED && J(e.text, t);
  }
  var jc = [
      "case",
      "return",
      "do",
      "if",
      "throw",
      "else",
      "await",
      "break",
      "continue",
      "async",
    ],
    xw = ["before-newline", "after-newline", "preserve-newline"],
    Po = yw(xw),
    T_ = [Po.before_newline, Po.preserve_newline],
    X = {
      BlockStatement: "BlockStatement",
      Statement: "Statement",
      ObjectLiteral: "ObjectLiteral",
      ArrayLiteral: "ArrayLiteral",
      ForInitializer: "ForInitializer",
      Conditional: "Conditional",
      Expression: "Expression",
    };
  function E_(e, t) {
    t.multiline_frame ||
      t.mode === X.ForInitializer ||
      t.mode === X.Conditional ||
      e.remove_indent(t.start_line_index);
  }
  function ww(e) {
    e = e.replace(
      Uc.allLineBreaks,
      `
`
    );
    for (
      var t = [],
        n = e.indexOf(`
`);
      n !== -1;

    )
      t.push(e.substring(0, n)),
        (e = e.substring(n + 1)),
        (n = e.indexOf(`
`));
    return e.length && t.push(e), t;
  }
  function ai(e) {
    return e === X.ArrayLiteral;
  }
  function Mo(e) {
    return J(e, [X.Expression, X.ForInitializer, X.Conditional]);
  }
  function Sw(e, t) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n].trim();
      if (r.charAt(0) !== t) return !1;
    }
    return !0;
  }
  function kw(e, t) {
    for (var n = 0, r = e.length, u; n < r; n++)
      if (((u = e[n]), u && u.indexOf(t) !== 0)) return !1;
    return !0;
  }
  function ae(e, t) {
    (t = t || {}),
      (this._source_text = e || ""),
      (this._output = null),
      (this._tokens = null),
      (this._last_last_text = null),
      (this._flags = null),
      (this._previous_flags = null),
      (this._flag_store = null),
      (this._options = new _w(t));
  }
  ae.prototype.create_flags = function (e, t) {
    var n = 0;
    e &&
      ((n = e.indentation_level),
      !this._output.just_added_newline() &&
        e.line_indent_level > n &&
        (n = e.line_indent_level));
    var r = {
      mode: t,
      parent: e,
      last_token: e ? e.last_token : new gw(I.START_BLOCK, ""),
      last_word: e ? e.last_word : "",
      declaration_statement: !1,
      declaration_assignment: !1,
      multiline_frame: !1,
      inline_frame: !1,
      if_block: !1,
      else_block: !1,
      class_start_block: !1,
      do_block: !1,
      do_while: !1,
      import_block: !1,
      in_case_statement: !1,
      in_case: !1,
      case_body: !1,
      case_block: !1,
      indentation_level: n,
      alignment: 0,
      line_indent_level: e ? e.line_indent_level : n,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0,
    };
    return r;
  };
  ae.prototype._reset = function (e) {
    var t = e.match(/^[\t ]*/)[0];
    (this._last_last_text = ""),
      (this._output = new mw(this._options, t)),
      (this._output.raw = this._options.test_output_raw),
      (this._flag_store = []),
      this.set_mode(X.BlockStatement);
    var n = new bw(e, this._options);
    return (this._tokens = n.tokenize()), e;
  };
  ae.prototype.beautify = function () {
    if (this._options.disabled) return this._source_text;
    var e,
      t = this._reset(this._source_text),
      n = this._options.eol;
    this._options.eol === "auto" &&
      ((n = `
`),
      t && Uc.lineBreak.test(t || "") && (n = t.match(Uc.lineBreak)[0]));
    for (var r = this._tokens.next(); r; )
      this.handle_token(r),
        (this._last_last_text = this._flags.last_token.text),
        (this._flags.last_token = r),
        (r = this._tokens.next());
    return (e = this._output.get_code(n)), e;
  };
  ae.prototype.handle_token = function (e, t) {
    e.type === I.START_EXPR
      ? this.handle_start_expr(e)
      : e.type === I.END_EXPR
      ? this.handle_end_expr(e)
      : e.type === I.START_BLOCK
      ? this.handle_start_block(e)
      : e.type === I.END_BLOCK
      ? this.handle_end_block(e)
      : e.type === I.WORD
      ? this.handle_word(e)
      : e.type === I.RESERVED
      ? this.handle_word(e)
      : e.type === I.SEMICOLON
      ? this.handle_semicolon(e)
      : e.type === I.STRING
      ? this.handle_string(e)
      : e.type === I.EQUALS
      ? this.handle_equals(e)
      : e.type === I.OPERATOR
      ? this.handle_operator(e)
      : e.type === I.COMMA
      ? this.handle_comma(e)
      : e.type === I.BLOCK_COMMENT
      ? this.handle_block_comment(e, t)
      : e.type === I.COMMENT
      ? this.handle_comment(e, t)
      : e.type === I.DOT
      ? this.handle_dot(e)
      : e.type === I.EOF
      ? this.handle_eof(e)
      : e.type === I.UNKNOWN
      ? this.handle_unknown(e, t)
      : this.handle_unknown(e, t);
  };
  ae.prototype.handle_whitespace_and_comments = function (e, t) {
    var n = e.newlines,
      r = this._options.keep_array_indentation && ai(this._flags.mode);
    if (e.comments_before)
      for (var u = e.comments_before.next(); u; )
        this.handle_whitespace_and_comments(u, t),
          this.handle_token(u, t),
          (u = e.comments_before.next());
    if (r) for (var s = 0; s < n; s += 1) this.print_newline(s > 0, t);
    else if (
      (this._options.max_preserve_newlines &&
        n > this._options.max_preserve_newlines &&
        (n = this._options.max_preserve_newlines),
      this._options.preserve_newlines && n > 1)
    ) {
      this.print_newline(!1, t);
      for (var f = 1; f < n; f += 1) this.print_newline(!0, t);
    }
  };
  var ah = ["async", "break", "continue", "return", "throw", "yield"];
  ae.prototype.allow_wrap_or_preserved_newline = function (e, t) {
    if (((t = t === void 0 ? !1 : t), !this._output.just_added_newline())) {
      var n = (this._options.preserve_newlines && e.newlines) || t,
        r = J(this._flags.last_token.text, Do) || J(e.text, Do);
      if (r) {
        var u =
          (J(this._flags.last_token.text, Do) &&
            J(this._options.operator_position, T_)) ||
          J(e.text, Do);
        n = n && u;
      }
      if (n) this.print_newline(!1, !0);
      else if (this._options.wrap_line_length) {
        if (be(this._flags.last_token, ah)) return;
        this._output.set_wrap_point();
      }
    }
  };
  ae.prototype.print_newline = function (e, t) {
    if (
      !t &&
      this._flags.last_token.text !== ";" &&
      this._flags.last_token.text !== "," &&
      this._flags.last_token.text !== "=" &&
      (this._flags.last_token.type !== I.OPERATOR ||
        this._flags.last_token.text === "--" ||
        this._flags.last_token.text === "++")
    )
      for (
        var n = this._tokens.peek();
        this._flags.mode === X.Statement &&
        !(this._flags.if_block && Kt(n, "else")) &&
        !this._flags.do_block;

      )
        this.restore_mode();
    this._output.add_new_line(e) && (this._flags.multiline_frame = !0);
  };
  ae.prototype.print_token_line_indentation = function (e) {
    this._output.just_added_newline() &&
      (this._options.keep_array_indentation &&
      e.newlines &&
      (e.text === "[" || ai(this._flags.mode))
        ? (this._output.current_line.set_indent(-1),
          this._output.current_line.push(e.whitespace_before),
          (this._output.space_before_token = !1))
        : this._output.set_indent(
            this._flags.indentation_level,
            this._flags.alignment
          ) && (this._flags.line_indent_level = this._flags.indentation_level));
  };
  ae.prototype.print_token = function (e) {
    if (this._output.raw) {
      this._output.add_raw_token(e);
      return;
    }
    if (
      this._options.comma_first &&
      e.previous &&
      e.previous.type === I.COMMA &&
      this._output.just_added_newline() &&
      this._output.previous_line.last() === ","
    ) {
      var t = this._output.previous_line.pop();
      this._output.previous_line.is_empty() &&
        (this._output.previous_line.push(t),
        this._output.trim(!0),
        this._output.current_line.pop(),
        this._output.trim()),
        this.print_token_line_indentation(e),
        this._output.add_token(","),
        (this._output.space_before_token = !0);
    }
    this.print_token_line_indentation(e),
      (this._output.non_breaking_space = !0),
      this._output.add_token(e.text),
      this._output.previous_token_wrapped && (this._flags.multiline_frame = !0);
  };
  ae.prototype.indent = function () {
    (this._flags.indentation_level += 1),
      this._output.set_indent(
        this._flags.indentation_level,
        this._flags.alignment
      );
  };
  ae.prototype.deindent = function () {
    this._flags.indentation_level > 0 &&
      (!this._flags.parent ||
        this._flags.indentation_level > this._flags.parent.indentation_level) &&
      ((this._flags.indentation_level -= 1),
      this._output.set_indent(
        this._flags.indentation_level,
        this._flags.alignment
      ));
  };
  ae.prototype.set_mode = function (e) {
    this._flags
      ? (this._flag_store.push(this._flags),
        (this._previous_flags = this._flags))
      : (this._previous_flags = this.create_flags(null, e)),
      (this._flags = this.create_flags(this._previous_flags, e)),
      this._output.set_indent(
        this._flags.indentation_level,
        this._flags.alignment
      );
  };
  ae.prototype.restore_mode = function () {
    this._flag_store.length > 0 &&
      ((this._previous_flags = this._flags),
      (this._flags = this._flag_store.pop()),
      this._previous_flags.mode === X.Statement &&
        E_(this._output, this._previous_flags),
      this._output.set_indent(
        this._flags.indentation_level,
        this._flags.alignment
      ));
  };
  ae.prototype.start_of_object_property = function () {
    return (
      this._flags.parent.mode === X.ObjectLiteral &&
      this._flags.mode === X.Statement &&
      ((this._flags.last_token.text === ":" &&
        this._flags.ternary_depth === 0) ||
        be(this._flags.last_token, ["get", "set"]))
    );
  };
  ae.prototype.start_of_statement = function (e) {
    var t = !1;
    return (
      (t =
        t ||
        (be(this._flags.last_token, ["var", "let", "const"]) &&
          e.type === I.WORD)),
      (t = t || Kt(this._flags.last_token, "do")),
      (t =
        t ||
        (!(
          this._flags.parent.mode === X.ObjectLiteral &&
          this._flags.mode === X.Statement
        ) &&
          be(this._flags.last_token, ah) &&
          !e.newlines)),
      (t =
        t ||
        (Kt(this._flags.last_token, "else") &&
          !(Kt(e, "if") && !e.comments_before))),
      (t =
        t ||
        (this._flags.last_token.type === I.END_EXPR &&
          (this._previous_flags.mode === X.ForInitializer ||
            this._previous_flags.mode === X.Conditional))),
      (t =
        t ||
        (this._flags.last_token.type === I.WORD &&
          this._flags.mode === X.BlockStatement &&
          !this._flags.in_case &&
          !(e.text === "--" || e.text === "++") &&
          this._last_last_text !== "function" &&
          e.type !== I.WORD &&
          e.type !== I.RESERVED)),
      (t =
        t ||
        (this._flags.mode === X.ObjectLiteral &&
          ((this._flags.last_token.text === ":" &&
            this._flags.ternary_depth === 0) ||
            be(this._flags.last_token, ["get", "set"])))),
      t
        ? (this.set_mode(X.Statement),
          this.indent(),
          this.handle_whitespace_and_comments(e, !0),
          this.start_of_object_property() ||
            this.allow_wrap_or_preserved_newline(
              e,
              be(e, ["do", "for", "if", "while"])
            ),
          !0)
        : !1
    );
  };
  ae.prototype.handle_start_expr = function (e) {
    this.start_of_statement(e) || this.handle_whitespace_and_comments(e);
    var t = X.Expression;
    if (e.text === "[") {
      if (
        this._flags.last_token.type === I.WORD ||
        this._flags.last_token.text === ")"
      ) {
        be(this._flags.last_token, No) &&
          (this._output.space_before_token = !0),
          this.print_token(e),
          this.set_mode(t),
          this.indent(),
          this._options.space_in_paren &&
            (this._output.space_before_token = !0);
        return;
      }
      (t = X.ArrayLiteral),
        ai(this._flags.mode) &&
          (this._flags.last_token.text === "[" ||
            (this._flags.last_token.text === "," &&
              (this._last_last_text === "]" ||
                this._last_last_text === "}"))) &&
          (this._options.keep_array_indentation || this.print_newline()),
        J(this._flags.last_token.type, [
          I.START_EXPR,
          I.END_EXPR,
          I.WORD,
          I.OPERATOR,
          I.DOT,
        ]) || (this._output.space_before_token = !0);
    } else {
      if (this._flags.last_token.type === I.RESERVED)
        this._flags.last_token.text === "for"
          ? ((this._output.space_before_token =
              this._options.space_before_conditional),
            (t = X.ForInitializer))
          : J(this._flags.last_token.text, ["if", "while", "switch"])
          ? ((this._output.space_before_token =
              this._options.space_before_conditional),
            (t = X.Conditional))
          : J(this._flags.last_word, ["await", "async"])
          ? (this._output.space_before_token = !0)
          : this._flags.last_token.text === "import" &&
            e.whitespace_before === ""
          ? (this._output.space_before_token = !1)
          : (J(this._flags.last_token.text, No) ||
              this._flags.last_token.text === "catch") &&
            (this._output.space_before_token = !0);
      else if (
        this._flags.last_token.type === I.EQUALS ||
        this._flags.last_token.type === I.OPERATOR
      )
        this.start_of_object_property() ||
          this.allow_wrap_or_preserved_newline(e);
      else if (this._flags.last_token.type === I.WORD) {
        this._output.space_before_token = !1;
        var n = this._tokens.peek(-3);
        if (this._options.space_after_named_function && n) {
          var r = this._tokens.peek(-4);
          be(n, ["async", "function"]) ||
          (n.text === "*" && be(r, ["async", "function"]))
            ? (this._output.space_before_token = !0)
            : this._flags.mode === X.ObjectLiteral
            ? (n.text === "{" ||
                n.text === "," ||
                (n.text === "*" && (r.text === "{" || r.text === ","))) &&
              (this._output.space_before_token = !0)
            : this._flags.parent &&
              this._flags.parent.class_start_block &&
              (this._output.space_before_token = !0);
        }
      } else this.allow_wrap_or_preserved_newline(e);
      ((this._flags.last_token.type === I.RESERVED &&
        (this._flags.last_word === "function" ||
          this._flags.last_word === "typeof")) ||
        (this._flags.last_token.text === "*" &&
          (J(this._last_last_text, ["function", "yield"]) ||
            (this._flags.mode === X.ObjectLiteral &&
              J(this._last_last_text, ["{", ","]))))) &&
        (this._output.space_before_token =
          this._options.space_after_anon_function);
    }
    this._flags.last_token.text === ";" ||
    this._flags.last_token.type === I.START_BLOCK
      ? this.print_newline()
      : (this._flags.last_token.type === I.END_EXPR ||
          this._flags.last_token.type === I.START_EXPR ||
          this._flags.last_token.type === I.END_BLOCK ||
          this._flags.last_token.text === "." ||
          this._flags.last_token.type === I.COMMA) &&
        this.allow_wrap_or_preserved_newline(e, e.newlines),
      this.print_token(e),
      this.set_mode(t),
      this._options.space_in_paren && (this._output.space_before_token = !0),
      this.indent();
  };
  ae.prototype.handle_end_expr = function (e) {
    for (; this._flags.mode === X.Statement; ) this.restore_mode();
    this.handle_whitespace_and_comments(e),
      this._flags.multiline_frame &&
        this.allow_wrap_or_preserved_newline(
          e,
          e.text === "]" &&
            ai(this._flags.mode) &&
            !this._options.keep_array_indentation
        ),
      this._options.space_in_paren &&
        (this._flags.last_token.type === I.START_EXPR &&
        !this._options.space_in_empty_paren
          ? (this._output.trim(), (this._output.space_before_token = !1))
          : (this._output.space_before_token = !0)),
      this.deindent(),
      this.print_token(e),
      this.restore_mode(),
      E_(this._output, this._previous_flags),
      this._flags.do_while &&
        this._previous_flags.mode === X.Conditional &&
        ((this._previous_flags.mode = X.Expression),
        (this._flags.do_block = !1),
        (this._flags.do_while = !1));
  };
  ae.prototype.handle_start_block = function (e) {
    this.handle_whitespace_and_comments(e);
    var t = this._tokens.peek(),
      n = this._tokens.peek(1);
    this._flags.last_word === "switch" &&
    this._flags.last_token.type === I.END_EXPR
      ? (this.set_mode(X.BlockStatement), (this._flags.in_case_statement = !0))
      : this._flags.case_body
      ? this.set_mode(X.BlockStatement)
      : n &&
        ((J(n.text, [":", ","]) && J(t.type, [I.STRING, I.WORD, I.RESERVED])) ||
          (J(t.text, ["get", "set", "..."]) && J(n.type, [I.WORD, I.RESERVED])))
      ? J(this._last_last_text, ["class", "interface"]) &&
        !J(n.text, [":", ","])
        ? this.set_mode(X.BlockStatement)
        : this.set_mode(X.ObjectLiteral)
      : this._flags.last_token.type === I.OPERATOR &&
        this._flags.last_token.text === "=>"
      ? this.set_mode(X.BlockStatement)
      : J(this._flags.last_token.type, [
          I.EQUALS,
          I.START_EXPR,
          I.COMMA,
          I.OPERATOR,
        ]) ||
        be(this._flags.last_token, ["return", "throw", "import", "default"])
      ? this.set_mode(X.ObjectLiteral)
      : this.set_mode(X.BlockStatement),
      this._flags.last_token &&
        be(this._flags.last_token.previous, ["class", "extends"]) &&
        (this._flags.class_start_block = !0);
    var r = !t.comments_before && t.text === "}",
      u =
        r &&
        this._flags.last_word === "function" &&
        this._flags.last_token.type === I.END_EXPR;
    if (this._options.brace_preserve_inline) {
      var s = 0,
        f = null;
      this._flags.inline_frame = !0;
      do
        if (((s += 1), (f = this._tokens.peek(s - 1)), f.newlines)) {
          this._flags.inline_frame = !1;
          break;
        }
      while (f.type !== I.EOF && !(f.type === I.END_BLOCK && f.opened === e));
    }
    (this._options.brace_style === "expand" ||
      (this._options.brace_style === "none" && e.newlines)) &&
    !this._flags.inline_frame
      ? this._flags.last_token.type !== I.OPERATOR &&
        (u ||
          this._flags.last_token.type === I.EQUALS ||
          (be(this._flags.last_token, jc) &&
            this._flags.last_token.text !== "else"))
        ? (this._output.space_before_token = !0)
        : this.print_newline(!1, !0)
      : (ai(this._previous_flags.mode) &&
          (this._flags.last_token.type === I.START_EXPR ||
            this._flags.last_token.type === I.COMMA) &&
          ((this._flags.last_token.type === I.COMMA ||
            this._options.space_in_paren) &&
            (this._output.space_before_token = !0),
          (this._flags.last_token.type === I.COMMA ||
            (this._flags.last_token.type === I.START_EXPR &&
              this._flags.inline_frame)) &&
            (this.allow_wrap_or_preserved_newline(e),
            (this._previous_flags.multiline_frame =
              this._previous_flags.multiline_frame ||
              this._flags.multiline_frame),
            (this._flags.multiline_frame = !1))),
        this._flags.last_token.type !== I.OPERATOR &&
          this._flags.last_token.type !== I.START_EXPR &&
          (J(this._flags.last_token.type, [I.START_BLOCK, I.SEMICOLON]) &&
          !this._flags.inline_frame
            ? this.print_newline()
            : (this._output.space_before_token = !0))),
      this.print_token(e),
      this.indent(),
      !r &&
        !(this._options.brace_preserve_inline && this._flags.inline_frame) &&
        this.print_newline();
  };
  ae.prototype.handle_end_block = function (e) {
    for (
      this.handle_whitespace_and_comments(e);
      this._flags.mode === X.Statement;

    )
      this.restore_mode();
    var t = this._flags.last_token.type === I.START_BLOCK;
    this._flags.inline_frame && !t
      ? (this._output.space_before_token = !0)
      : this._options.brace_style === "expand"
      ? t || this.print_newline()
      : t ||
        (ai(this._flags.mode) && this._options.keep_array_indentation
          ? ((this._options.keep_array_indentation = !1),
            this.print_newline(),
            (this._options.keep_array_indentation = !0))
          : this.print_newline()),
      this.restore_mode(),
      this.print_token(e);
  };
  ae.prototype.handle_word = function (e) {
    if (e.type === I.RESERVED) {
      if (J(e.text, ["set", "get"]) && this._flags.mode !== X.ObjectLiteral)
        e.type = I.WORD;
      else if (e.text === "import" && J(this._tokens.peek().text, ["(", "."]))
        e.type = I.WORD;
      else if (J(e.text, ["as", "from"]) && !this._flags.import_block)
        e.type = I.WORD;
      else if (this._flags.mode === X.ObjectLiteral) {
        var t = this._tokens.peek();
        t.text === ":" && (e.type = I.WORD);
      }
    }
    if (
      (this.start_of_statement(e)
        ? be(this._flags.last_token, ["var", "let", "const"]) &&
          e.type === I.WORD &&
          (this._flags.declaration_statement = !0)
        : e.newlines &&
          !Mo(this._flags.mode) &&
          (this._flags.last_token.type !== I.OPERATOR ||
            this._flags.last_token.text === "--" ||
            this._flags.last_token.text === "++") &&
          this._flags.last_token.type !== I.EQUALS &&
          (this._options.preserve_newlines ||
            !be(this._flags.last_token, ["var", "let", "const", "set", "get"]))
        ? (this.handle_whitespace_and_comments(e), this.print_newline())
        : this.handle_whitespace_and_comments(e),
      this._flags.do_block && !this._flags.do_while)
    )
      if (Kt(e, "while")) {
        (this._output.space_before_token = !0),
          this.print_token(e),
          (this._output.space_before_token = !0),
          (this._flags.do_while = !0);
        return;
      } else this.print_newline(), (this._flags.do_block = !1);
    if (this._flags.if_block)
      if (!this._flags.else_block && Kt(e, "else")) this._flags.else_block = !0;
      else {
        for (; this._flags.mode === X.Statement; ) this.restore_mode();
        (this._flags.if_block = !1), (this._flags.else_block = !1);
      }
    if (this._flags.in_case_statement && be(e, ["case", "default"])) {
      this.print_newline(),
        !this._flags.case_block &&
          (this._flags.case_body || this._options.jslint_happy) &&
          this.deindent(),
        (this._flags.case_body = !1),
        this.print_token(e),
        (this._flags.in_case = !0);
      return;
    }
    if (
      ((this._flags.last_token.type === I.COMMA ||
        this._flags.last_token.type === I.START_EXPR ||
        this._flags.last_token.type === I.EQUALS ||
        this._flags.last_token.type === I.OPERATOR) &&
        !this.start_of_object_property() &&
        !(
          J(this._flags.last_token.text, ["+", "-"]) &&
          this._last_last_text === ":" &&
          this._flags.parent.mode === X.ObjectLiteral
        ) &&
        this.allow_wrap_or_preserved_newline(e),
      Kt(e, "function"))
    ) {
      (J(this._flags.last_token.text, ["}", ";"]) ||
        (this._output.just_added_newline() &&
          !(
            J(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) ||
            this._flags.last_token.type === I.OPERATOR
          ))) &&
        !this._output.just_added_blankline() &&
        !e.comments_before &&
        (this.print_newline(), this.print_newline(!0)),
        this._flags.last_token.type === I.RESERVED ||
        this._flags.last_token.type === I.WORD
          ? be(this._flags.last_token, ["get", "set", "new", "export"]) ||
            be(this._flags.last_token, ah)
            ? (this._output.space_before_token = !0)
            : Kt(this._flags.last_token, "default") &&
              this._last_last_text === "export"
            ? (this._output.space_before_token = !0)
            : this._flags.last_token.text === "declare"
            ? (this._output.space_before_token = !0)
            : this.print_newline()
          : this._flags.last_token.type === I.OPERATOR ||
            this._flags.last_token.text === "="
          ? (this._output.space_before_token = !0)
          : (!this._flags.multiline_frame &&
              (Mo(this._flags.mode) || ai(this._flags.mode))) ||
            this.print_newline(),
        this.print_token(e),
        (this._flags.last_word = e.text);
      return;
    }
    var n = "NONE";
    if (
      (this._flags.last_token.type === I.END_BLOCK
        ? this._previous_flags.inline_frame
          ? (n = "SPACE")
          : be(e, ["else", "catch", "finally", "from"])
          ? this._options.brace_style === "expand" ||
            this._options.brace_style === "end-expand" ||
            (this._options.brace_style === "none" && e.newlines)
            ? (n = "NEWLINE")
            : ((n = "SPACE"), (this._output.space_before_token = !0))
          : (n = "NEWLINE")
        : this._flags.last_token.type === I.SEMICOLON &&
          this._flags.mode === X.BlockStatement
        ? (n = "NEWLINE")
        : this._flags.last_token.type === I.SEMICOLON && Mo(this._flags.mode)
        ? (n = "SPACE")
        : this._flags.last_token.type === I.STRING
        ? (n = "NEWLINE")
        : this._flags.last_token.type === I.RESERVED ||
          this._flags.last_token.type === I.WORD ||
          (this._flags.last_token.text === "*" &&
            (J(this._last_last_text, ["function", "yield"]) ||
              (this._flags.mode === X.ObjectLiteral &&
                J(this._last_last_text, ["{", ","]))))
        ? (n = "SPACE")
        : this._flags.last_token.type === I.START_BLOCK
        ? this._flags.inline_frame
          ? (n = "SPACE")
          : (n = "NEWLINE")
        : this._flags.last_token.type === I.END_EXPR &&
          ((this._output.space_before_token = !0), (n = "NEWLINE")),
      be(e, No) &&
        this._flags.last_token.text !== ")" &&
        (this._flags.inline_frame ||
        this._flags.last_token.text === "else" ||
        this._flags.last_token.text === "export"
          ? (n = "SPACE")
          : (n = "NEWLINE")),
      be(e, ["else", "catch", "finally"]))
    )
      if (
        (!(
          this._flags.last_token.type === I.END_BLOCK &&
          this._previous_flags.mode === X.BlockStatement
        ) ||
          this._options.brace_style === "expand" ||
          this._options.brace_style === "end-expand" ||
          (this._options.brace_style === "none" && e.newlines)) &&
        !this._flags.inline_frame
      )
        this.print_newline();
      else {
        this._output.trim(!0);
        var r = this._output.current_line;
        r.last() !== "}" && this.print_newline(),
          (this._output.space_before_token = !0);
      }
    else
      n === "NEWLINE"
        ? be(this._flags.last_token, jc)
          ? (this._output.space_before_token = !0)
          : this._flags.last_token.text === "declare" &&
            be(e, ["var", "let", "const"])
          ? (this._output.space_before_token = !0)
          : this._flags.last_token.type !== I.END_EXPR
          ? (this._flags.last_token.type !== I.START_EXPR ||
              !be(e, ["var", "let", "const"])) &&
            this._flags.last_token.text !== ":" &&
            (Kt(e, "if") && Kt(e.previous, "else")
              ? (this._output.space_before_token = !0)
              : this.print_newline())
          : be(e, No) &&
            this._flags.last_token.text !== ")" &&
            this.print_newline()
        : this._flags.multiline_frame &&
          ai(this._flags.mode) &&
          this._flags.last_token.text === "," &&
          this._last_last_text === "}"
        ? this.print_newline()
        : n === "SPACE" && (this._output.space_before_token = !0);
    e.previous &&
      (e.previous.type === I.WORD || e.previous.type === I.RESERVED) &&
      (this._output.space_before_token = !0),
      this.print_token(e),
      (this._flags.last_word = e.text),
      e.type === I.RESERVED &&
        (e.text === "do"
          ? (this._flags.do_block = !0)
          : e.text === "if"
          ? (this._flags.if_block = !0)
          : e.text === "import"
          ? (this._flags.import_block = !0)
          : this._flags.import_block &&
            Kt(e, "from") &&
            (this._flags.import_block = !1));
  };
  ae.prototype.handle_semicolon = function (e) {
    this.start_of_statement(e)
      ? (this._output.space_before_token = !1)
      : this.handle_whitespace_and_comments(e);
    for (
      var t = this._tokens.peek();
      this._flags.mode === X.Statement &&
      !(this._flags.if_block && Kt(t, "else")) &&
      !this._flags.do_block;

    )
      this.restore_mode();
    this._flags.import_block && (this._flags.import_block = !1),
      this.print_token(e);
  };
  ae.prototype.handle_string = function (e) {
    (e.text.startsWith("`") &&
      e.newlines === 0 &&
      e.whitespace_before === "" &&
      (e.previous.text === ")" || this._flags.last_token.type === I.WORD)) ||
      (this.start_of_statement(e)
        ? (this._output.space_before_token = !0)
        : (this.handle_whitespace_and_comments(e),
          this._flags.last_token.type === I.RESERVED ||
          this._flags.last_token.type === I.WORD ||
          this._flags.inline_frame
            ? (this._output.space_before_token = !0)
            : this._flags.last_token.type === I.COMMA ||
              this._flags.last_token.type === I.START_EXPR ||
              this._flags.last_token.type === I.EQUALS ||
              this._flags.last_token.type === I.OPERATOR
            ? this.start_of_object_property() ||
              this.allow_wrap_or_preserved_newline(e)
            : e.text.startsWith("`") &&
              this._flags.last_token.type === I.END_EXPR &&
              (e.previous.text === "]" || e.previous.text === ")") &&
              e.newlines === 0
            ? (this._output.space_before_token = !0)
            : this.print_newline())),
      this.print_token(e);
  };
  ae.prototype.handle_equals = function (e) {
    this.start_of_statement(e) || this.handle_whitespace_and_comments(e),
      this._flags.declaration_statement &&
        (this._flags.declaration_assignment = !0),
      (this._output.space_before_token = !0),
      this.print_token(e),
      (this._output.space_before_token = !0);
  };
  ae.prototype.handle_comma = function (e) {
    this.handle_whitespace_and_comments(e, !0),
      this.print_token(e),
      (this._output.space_before_token = !0),
      this._flags.declaration_statement
        ? (Mo(this._flags.parent.mode) &&
            (this._flags.declaration_assignment = !1),
          this._flags.declaration_assignment
            ? ((this._flags.declaration_assignment = !1),
              this.print_newline(!1, !0))
            : this._options.comma_first &&
              this.allow_wrap_or_preserved_newline(e))
        : this._flags.mode === X.ObjectLiteral ||
          (this._flags.mode === X.Statement &&
            this._flags.parent.mode === X.ObjectLiteral)
        ? (this._flags.mode === X.Statement && this.restore_mode(),
          this._flags.inline_frame || this.print_newline())
        : this._options.comma_first && this.allow_wrap_or_preserved_newline(e);
  };
  ae.prototype.handle_operator = function (e) {
    var t =
        e.text === "*" &&
        (be(this._flags.last_token, ["function", "yield"]) ||
          J(this._flags.last_token.type, [
            I.START_BLOCK,
            I.COMMA,
            I.END_BLOCK,
            I.SEMICOLON,
          ])),
      n =
        J(e.text, ["-", "+"]) &&
        (J(this._flags.last_token.type, [
          I.START_BLOCK,
          I.START_EXPR,
          I.EQUALS,
          I.OPERATOR,
        ]) ||
          J(this._flags.last_token.text, No) ||
          this._flags.last_token.text === ",");
    if (!this.start_of_statement(e)) {
      var r = !t;
      this.handle_whitespace_and_comments(e, r);
    }
    if (e.text === "*" && this._flags.last_token.type === I.DOT) {
      this.print_token(e);
      return;
    }
    if (e.text === "::") {
      this.print_token(e);
      return;
    }
    if (J(e.text, ["-", "+"]) && this.start_of_object_property()) {
      this.print_token(e);
      return;
    }
    if (
      (this._flags.last_token.type === I.OPERATOR &&
        J(this._options.operator_position, T_) &&
        this.allow_wrap_or_preserved_newline(e),
      e.text === ":" && this._flags.in_case)
    ) {
      this.print_token(e),
        (this._flags.in_case = !1),
        (this._flags.case_body = !0),
        this._tokens.peek().type !== I.START_BLOCK
          ? (this.indent(), this.print_newline(), (this._flags.case_block = !1))
          : ((this._flags.case_block = !0),
            (this._output.space_before_token = !0));
      return;
    }
    var u = !0,
      s = !0,
      f = !1;
    if (
      (e.text === ":"
        ? this._flags.ternary_depth === 0
          ? (u = !1)
          : ((this._flags.ternary_depth -= 1), (f = !0))
        : e.text === "?" && (this._flags.ternary_depth += 1),
      !n && !t && this._options.preserve_newlines && J(e.text, Do))
    ) {
      var g = e.text === ":",
        v = g && f,
        b = g && !f;
      switch (this._options.operator_position) {
        case Po.before_newline:
          (this._output.space_before_token = !b),
            this.print_token(e),
            (!g || v) && this.allow_wrap_or_preserved_newline(e),
            (this._output.space_before_token = !0);
          return;
        case Po.after_newline:
          (this._output.space_before_token = !0),
            !g || v
              ? this._tokens.peek().newlines
                ? this.print_newline(!1, !0)
                : this.allow_wrap_or_preserved_newline(e)
              : (this._output.space_before_token = !1),
            this.print_token(e),
            (this._output.space_before_token = !0);
          return;
        case Po.preserve_newline:
          b || this.allow_wrap_or_preserved_newline(e),
            (u = !(this._output.just_added_newline() || b)),
            (this._output.space_before_token = u),
            this.print_token(e),
            (this._output.space_before_token = !0);
          return;
      }
    }
    if (t) {
      this.allow_wrap_or_preserved_newline(e), (u = !1);
      var x = this._tokens.peek();
      s = x && J(x.type, [I.WORD, I.RESERVED]);
    } else if (e.text === "...")
      this.allow_wrap_or_preserved_newline(e),
        (u = this._flags.last_token.type === I.START_BLOCK),
        (s = !1);
    else if (J(e.text, ["--", "++", "!", "~"]) || n) {
      if (
        ((this._flags.last_token.type === I.COMMA ||
          this._flags.last_token.type === I.START_EXPR) &&
          this.allow_wrap_or_preserved_newline(e),
        (u = !1),
        (s = !1),
        e.newlines && (e.text === "--" || e.text === "++" || e.text === "~"))
      ) {
        var T = be(this._flags.last_token, jc) && e.newlines;
        T &&
          (this._previous_flags.if_block || this._previous_flags.else_block) &&
          this.restore_mode(),
          this.print_newline(T, !0);
      }
      this._flags.last_token.text === ";" && Mo(this._flags.mode) && (u = !0),
        this._flags.last_token.type === I.RESERVED
          ? (u = !0)
          : this._flags.last_token.type === I.END_EXPR
          ? (u = !(
              this._flags.last_token.text === "]" &&
              (e.text === "--" || e.text === "++")
            ))
          : this._flags.last_token.type === I.OPERATOR &&
            ((u =
              J(e.text, ["--", "-", "++", "+"]) &&
              J(this._flags.last_token.text, ["--", "-", "++", "+"])),
            J(e.text, ["+", "-"]) &&
              J(this._flags.last_token.text, ["--", "++"]) &&
              (s = !0)),
        ((this._flags.mode === X.BlockStatement && !this._flags.inline_frame) ||
          this._flags.mode === X.Statement) &&
          (this._flags.last_token.text === "{" ||
            this._flags.last_token.text === ";") &&
          this.print_newline();
    }
    (this._output.space_before_token = this._output.space_before_token || u),
      this.print_token(e),
      (this._output.space_before_token = s);
  };
  ae.prototype.handle_block_comment = function (e, t) {
    if (this._output.raw) {
      this._output.add_raw_token(e),
        e.directives &&
          e.directives.preserve === "end" &&
          (this._output.raw = this._options.test_output_raw);
      return;
    }
    if (e.directives) {
      this.print_newline(!1, t),
        this.print_token(e),
        e.directives.preserve === "start" && (this._output.raw = !0),
        this.print_newline(!1, !0);
      return;
    }
    if (!Uc.newline.test(e.text) && !e.newlines) {
      (this._output.space_before_token = !0),
        this.print_token(e),
        (this._output.space_before_token = !0);
      return;
    } else this.print_block_commment(e, t);
  };
  ae.prototype.print_block_commment = function (e, t) {
    var n = ww(e.text),
      r,
      u = !1,
      s = !1,
      f = e.whitespace_before,
      g = f.length;
    if (
      (this.print_newline(!1, t),
      this.print_token_line_indentation(e),
      this._output.add_token(n[0]),
      this.print_newline(!1, t),
      n.length > 1)
    ) {
      for (
        n = n.slice(1),
          u = Sw(n, "*"),
          s = kw(n, f),
          u && (this._flags.alignment = 1),
          r = 0;
        r < n.length;
        r++
      )
        u
          ? (this.print_token_line_indentation(e),
            this._output.add_token(vw(n[r])))
          : s && n[r]
          ? (this.print_token_line_indentation(e),
            this._output.add_token(n[r].substring(g)))
          : (this._output.current_line.set_indent(-1),
            this._output.add_token(n[r])),
          this.print_newline(!1, t);
      this._flags.alignment = 0;
    }
  };
  ae.prototype.handle_comment = function (e, t) {
    e.newlines ? this.print_newline(!1, t) : this._output.trim(!0),
      (this._output.space_before_token = !0),
      this.print_token(e),
      this.print_newline(!1, t);
  };
  ae.prototype.handle_dot = function (e) {
    this.start_of_statement(e) || this.handle_whitespace_and_comments(e, !0),
      this._flags.last_token.text.match("^[0-9]+$") &&
        (this._output.space_before_token = !0),
      be(this._flags.last_token, jc)
        ? (this._output.space_before_token = !1)
        : this.allow_wrap_or_preserved_newline(
            e,
            this._flags.last_token.text === ")" &&
              this._options.break_chained_methods
          ),
      this._options.unindent_chained_methods &&
        this._output.just_added_newline() &&
        this.deindent(),
      this.print_token(e);
  };
  ae.prototype.handle_unknown = function (e, t) {
    this.print_token(e),
      e.text[e.text.length - 1] ===
        `
` && this.print_newline(!1, t);
  };
  ae.prototype.handle_eof = function (e) {
    for (; this._flags.mode === X.Statement; ) this.restore_mode();
    this.handle_whitespace_and_comments(e);
  };
  C_.exports.Beautifier = ae;
});
var I_ = re((a6, sh) => {
  "use strict";
  var Tw = R_().Beautifier,
    Ew = K0().Options;
  function Cw(e, t) {
    var n = new Tw(e, t);
    return n.beautify();
  }
  sh.exports = Cw;
  sh.exports.defaultOptions = function () {
    return new Ew();
  };
});
var oh = re((s6, O_) => {
  "use strict";
  var A_ = Mc().Options;
  function L_(e) {
    A_.call(this, e, "css"),
      (this.selector_separator_newline = this._get_boolean(
        "selector_separator_newline",
        !0
      )),
      (this.newline_between_rules = this._get_boolean(
        "newline_between_rules",
        !0
      ));
    var t = this._get_boolean("space_around_selector_separator");
    this.space_around_combinator =
      this._get_boolean("space_around_combinator") || t;
    var n = this._get_selection_list("brace_style", [
      "collapse",
      "expand",
      "end-expand",
      "none",
      "preserve-inline",
    ]);
    this.brace_style = "collapse";
    for (var r = 0; r < n.length; r++)
      n[r] !== "expand"
        ? (this.brace_style = "collapse")
        : (this.brace_style = n[r]);
  }
  L_.prototype = new A_();
  O_.exports.Options = L_;
});
var N_ = re((o6, M_) => {
  "use strict";
  var Rw = oh().Options,
    Iw = Dc().Output,
    Aw = Nc().InputScanner,
    Lw = Bc().Directives,
    D_ = new Lw(/\/\*/, /\*\//),
    P_ = /\r\n|[\r\n]/,
    Ow = /\r\n|[\r\n]/g,
    Wc = /\s/,
    Dw = /(?:\s|\n)+/g,
    Pw = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,
    Mw = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
  function br(e, t) {
    (this._source_text = e || ""),
      (this._options = new Rw(t)),
      (this._ch = null),
      (this._input = null),
      (this.NESTED_AT_RULE = {
        page: !0,
        "font-face": !0,
        keyframes: !0,
        media: !0,
        supports: !0,
        document: !0,
      }),
      (this.CONDITIONAL_GROUP_RULE = { media: !0, supports: !0, document: !0 }),
      (this.NON_SEMICOLON_NEWLINE_PROPERTY = [
        "grid-template-areas",
        "grid-template",
      ]);
  }
  br.prototype.eatString = function (e) {
    var t = "";
    for (this._ch = this._input.next(); this._ch; ) {
      if (((t += this._ch), this._ch === "\\")) t += this._input.next();
      else if (
        e.indexOf(this._ch) !== -1 ||
        this._ch ===
          `
`
      )
        break;
      this._ch = this._input.next();
    }
    return t;
  };
  br.prototype.eatWhitespace = function (e) {
    for (
      var t = Wc.test(this._input.peek()), n = 0;
      Wc.test(this._input.peek());

    )
      (this._ch = this._input.next()),
        e &&
          this._ch ===
            `
` &&
          (n === 0 || n < this._options.max_preserve_newlines) &&
          (n++, this._output.add_new_line(!0));
    return t;
  };
  br.prototype.foundNestedPseudoClass = function () {
    for (var e = 0, t = 1, n = this._input.peek(t); n; ) {
      if (n === "{") return !0;
      if (n === "(") e += 1;
      else if (n === ")") {
        if (e === 0) return !1;
        e -= 1;
      } else if (n === ";" || n === "}") return !1;
      t++, (n = this._input.peek(t));
    }
    return !1;
  };
  br.prototype.print_string = function (e) {
    this._output.set_indent(this._indentLevel),
      (this._output.non_breaking_space = !0),
      this._output.add_token(e);
  };
  br.prototype.preserveSingleSpace = function (e) {
    e && (this._output.space_before_token = !0);
  };
  br.prototype.indent = function () {
    this._indentLevel++;
  };
  br.prototype.outdent = function () {
    this._indentLevel > 0 && this._indentLevel--;
  };
  br.prototype.beautify = function () {
    if (this._options.disabled) return this._source_text;
    var e = this._source_text,
      t = this._options.eol;
    t === "auto" &&
      ((t = `
`),
      e && P_.test(e || "") && (t = e.match(P_)[0])),
      (e = e.replace(
        Ow,
        `
`
      ));
    var n = e.match(/^[\t ]*/)[0];
    (this._output = new Iw(this._options, n)),
      (this._input = new Aw(e)),
      (this._indentLevel = 0),
      (this._nestedLevel = 0),
      (this._ch = null);
    for (
      var r = 0,
        u = !1,
        s = !1,
        f = !1,
        g = !1,
        v = !1,
        b = this._ch,
        x = !1,
        T,
        D,
        L;
      (T = this._input.read(Dw)),
        (D = T !== ""),
        (L = b),
        (this._ch = this._input.next()),
        this._ch === "\\" &&
          this._input.hasNext() &&
          (this._ch += this._input.next()),
        (b = this._ch),
        this._ch;

    )
      if (this._ch === "/" && this._input.peek() === "*") {
        this._output.add_new_line(), this._input.back();
        var B = this._input.read(Pw),
          Z = D_.get_directives(B);
        Z && Z.ignore === "start" && (B += D_.readIgnored(this._input)),
          this.print_string(B),
          this.eatWhitespace(!0),
          this._output.add_new_line();
      } else if (this._ch === "/" && this._input.peek() === "/")
        (this._output.space_before_token = !0),
          this._input.back(),
          this.print_string(this._input.read(Mw)),
          this.eatWhitespace(!0);
      else if (this._ch === "$") {
        this.preserveSingleSpace(D), this.print_string(this._ch);
        var O = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
        O.match(/[ :]$/) &&
          ((O = this.eatString(": ").replace(/\s+$/, "")),
          this.print_string(O),
          (this._output.space_before_token = !0)),
          r === 0 && O.indexOf(":") !== -1 && ((s = !0), this.indent());
      } else if (this._ch === "@")
        if ((this.preserveSingleSpace(D), this._input.peek() === "{"))
          this.print_string(this._ch + this.eatString("}"));
        else {
          this.print_string(this._ch);
          var K = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
          K.match(/[ :]$/) &&
            ((K = this.eatString(": ").replace(/\s+$/, "")),
            this.print_string(K),
            (this._output.space_before_token = !0)),
            r === 0 && K.indexOf(":") !== -1
              ? ((s = !0), this.indent())
              : K in this.NESTED_AT_RULE
              ? ((this._nestedLevel += 1),
                K in this.CONDITIONAL_GROUP_RULE && (f = !0))
              : r === 0 && !s && (g = !0);
        }
      else if (this._ch === "#" && this._input.peek() === "{")
        this.preserveSingleSpace(D),
          this.print_string(this._ch + this.eatString("}"));
      else if (this._ch === "{")
        s && ((s = !1), this.outdent()),
          (g = !1),
          f
            ? ((f = !1), (u = this._indentLevel >= this._nestedLevel))
            : (u = this._indentLevel >= this._nestedLevel - 1),
          this._options.newline_between_rules &&
            u &&
            this._output.previous_line &&
            this._output.previous_line.item(-1) !== "{" &&
            this._output.ensure_empty_line_above("/", ","),
          (this._output.space_before_token = !0),
          this._options.brace_style === "expand"
            ? (this._output.add_new_line(),
              this.print_string(this._ch),
              this.indent(),
              this._output.set_indent(this._indentLevel))
            : (L === "("
                ? (this._output.space_before_token = !1)
                : L !== "," && this.indent(),
              this.print_string(this._ch)),
          this.eatWhitespace(!0),
          this._output.add_new_line();
      else if (this._ch === "}")
        this.outdent(),
          this._output.add_new_line(),
          L === "{" && this._output.trim(!0),
          s && (this.outdent(), (s = !1)),
          this.print_string(this._ch),
          (u = !1),
          this._nestedLevel && this._nestedLevel--,
          this.eatWhitespace(!0),
          this._output.add_new_line(),
          this._options.newline_between_rules &&
            !this._output.just_added_blankline() &&
            this._input.peek() !== "}" &&
            this._output.add_new_line(!0),
          this._input.peek() === ")" &&
            (this._output.trim(!0),
            this._options.brace_style === "expand" &&
              this._output.add_new_line(!0));
      else if (this._ch === ":") {
        for (var G = 0; G < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; G++)
          if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[G])) {
            x = !0;
            break;
          }
        (u || f) &&
        !(this._input.lookBack("&") || this.foundNestedPseudoClass()) &&
        !this._input.lookBack("(") &&
        !g &&
        r === 0
          ? (this.print_string(":"),
            s ||
              ((s = !0),
              (this._output.space_before_token = !0),
              this.eatWhitespace(!0),
              this.indent()))
          : (this._input.lookBack(" ") &&
              (this._output.space_before_token = !0),
            this._input.peek() === ":"
              ? ((this._ch = this._input.next()), this.print_string("::"))
              : this.print_string(":"));
      } else if (this._ch === '"' || this._ch === "'") {
        var se = L === '"' || L === "'";
        this.preserveSingleSpace(se || D),
          this.print_string(this._ch + this.eatString(this._ch)),
          this.eatWhitespace(!0);
      } else if (this._ch === ";")
        (x = !1),
          r === 0
            ? (s && (this.outdent(), (s = !1)),
              (g = !1),
              this.print_string(this._ch),
              this.eatWhitespace(!0),
              this._input.peek() !== "/" && this._output.add_new_line())
            : (this.print_string(this._ch),
              this.eatWhitespace(!0),
              (this._output.space_before_token = !0));
      else if (this._ch === "(")
        if (this._input.lookBack("url"))
          this.print_string(this._ch),
            this.eatWhitespace(),
            r++,
            this.indent(),
            (this._ch = this._input.next()),
            this._ch === ")" || this._ch === '"' || this._ch === "'"
              ? this._input.back()
              : this._ch &&
                (this.print_string(this._ch + this.eatString(")")),
                r && (r--, this.outdent()));
        else {
          var Se = !1;
          this._input.lookBack("with") && (Se = !0),
            this.preserveSingleSpace(D || Se),
            this.print_string(this._ch),
            s && L === "$" && this._options.selector_separator_newline
              ? (this._output.add_new_line(), (v = !0))
              : (this.eatWhitespace(), r++, this.indent());
        }
      else if (this._ch === ")")
        r && (r--, this.outdent()),
          v &&
            this._input.peek() === ";" &&
            this._options.selector_separator_newline &&
            ((v = !1), this.outdent(), this._output.add_new_line()),
          this.print_string(this._ch);
      else if (this._ch === ",")
        this.print_string(this._ch),
          this.eatWhitespace(!0),
          this._options.selector_separator_newline && (!s || v) && r === 0 && !g
            ? this._output.add_new_line()
            : (this._output.space_before_token = !0);
      else if (
        (this._ch === ">" || this._ch === "+" || this._ch === "~") &&
        !s &&
        r === 0
      )
        this._options.space_around_combinator
          ? ((this._output.space_before_token = !0),
            this.print_string(this._ch),
            (this._output.space_before_token = !0))
          : (this.print_string(this._ch),
            this.eatWhitespace(),
            this._ch && Wc.test(this._ch) && (this._ch = ""));
      else if (this._ch === "]") this.print_string(this._ch);
      else if (this._ch === "[")
        this.preserveSingleSpace(D), this.print_string(this._ch);
      else if (this._ch === "=")
        this.eatWhitespace(),
          this.print_string("="),
          Wc.test(this._ch) && (this._ch = "");
      else if (this._ch === "!" && !this._input.lookBack("\\"))
        (this._output.space_before_token = !0), this.print_string(this._ch);
      else {
        var Be = L === '"' || L === "'";
        this.preserveSingleSpace(Be || D),
          this.print_string(this._ch),
          !this._output.just_added_newline() &&
            this._input.peek() ===
              `
` &&
            x &&
            this._output.add_new_line();
      }
    var ge = this._output.get_code(t);
    return ge;
  };
  M_.exports.Beautifier = br;
});
var B_ = re((l6, lh) => {
  "use strict";
  var Nw = N_().Beautifier,
    Bw = oh().Options;
  function Fw(e, t) {
    var n = new Nw(e, t);
    return n.beautify();
  }
  lh.exports = Fw;
  lh.exports.defaultOptions = function () {
    return new Bw();
  };
});
var ch = re((c6, j_) => {
  "use strict";
  var F_ = Mc().Options;
  function U_(e) {
    F_.call(this, e, "html"),
      this.templating.length === 1 &&
        this.templating[0] === "auto" &&
        (this.templating = ["django", "erb", "handlebars", "php"]),
      (this.indent_inner_html = this._get_boolean("indent_inner_html")),
      (this.indent_body_inner_html = this._get_boolean(
        "indent_body_inner_html",
        !0
      )),
      (this.indent_head_inner_html = this._get_boolean(
        "indent_head_inner_html",
        !0
      )),
      (this.indent_handlebars = this._get_boolean("indent_handlebars", !0)),
      (this.wrap_attributes = this._get_selection("wrap_attributes", [
        "auto",
        "force",
        "force-aligned",
        "force-expand-multiline",
        "aligned-multiple",
        "preserve",
        "preserve-aligned",
      ])),
      (this.wrap_attributes_min_attrs = this._get_number(
        "wrap_attributes_min_attrs",
        2
      )),
      (this.wrap_attributes_indent_size = this._get_number(
        "wrap_attributes_indent_size",
        this.indent_size
      )),
      (this.extra_liners = this._get_array("extra_liners", [
        "head",
        "body",
        "/html",
      ])),
      (this.inline = this._get_array("inline", [
        "a",
        "abbr",
        "area",
        "audio",
        "b",
        "bdi",
        "bdo",
        "br",
        "button",
        "canvas",
        "cite",
        "code",
        "data",
        "datalist",
        "del",
        "dfn",
        "em",
        "embed",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "map",
        "mark",
        "math",
        "meter",
        "noscript",
        "object",
        "output",
        "progress",
        "q",
        "ruby",
        "s",
        "samp",
        "select",
        "small",
        "span",
        "strong",
        "sub",
        "sup",
        "svg",
        "template",
        "textarea",
        "time",
        "u",
        "var",
        "video",
        "wbr",
        "text",
        "acronym",
        "big",
        "strike",
        "tt",
      ])),
      (this.inline_custom_elements = this._get_boolean(
        "inline_custom_elements",
        !0
      )),
      (this.void_elements = this._get_array("void_elements", [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "menuitem",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
        "!doctype",
        "?xml",
        "basefont",
        "isindex",
      ])),
      (this.unformatted = this._get_array("unformatted", [])),
      (this.content_unformatted = this._get_array("content_unformatted", [
        "pre",
        "textarea",
      ])),
      (this.unformatted_content_delimiter = this._get_characters(
        "unformatted_content_delimiter"
      )),
      (this.indent_scripts = this._get_selection("indent_scripts", [
        "normal",
        "keep",
        "separate",
      ]));
  }
  U_.prototype = new F_();
  j_.exports.Options = U_;
});
var hh = re((f6, dh) => {
  "use strict";
  var H_ = Ao().Tokenizer,
    fh = Ao().TOKEN,
    Uw = Bc().Directives,
    jw = rh().TemplatablePattern,
    Ww = Ro().Pattern,
    $e = {
      TAG_OPEN: "TK_TAG_OPEN",
      TAG_CLOSE: "TK_TAG_CLOSE",
      ATTRIBUTE: "TK_ATTRIBUTE",
      EQUALS: "TK_EQUALS",
      VALUE: "TK_VALUE",
      COMMENT: "TK_COMMENT",
      TEXT: "TK_TEXT",
      UNKNOWN: "TK_UNKNOWN",
      START: fh.START,
      RAW: fh.RAW,
      EOF: fh.EOF,
    },
    W_ = new Uw(/<\!--/, /-->/),
    dt = function (e, t) {
      H_.call(this, e, t), (this._current_tag_name = "");
      var n = new jw(this._input).read_options(this._options),
        r = new Ww(this._input);
      if (
        ((this.__patterns = {
          word: n.until(/[\n\r\t <]/),
          single_quote: n.until_after(/'/),
          double_quote: n.until_after(/"/),
          attribute: n.until(/[\n\r\t =>]|\/>/),
          element_name: n.until(/[\n\r\t >\/]/),
          handlebars_comment: r.starting_with(/{{!--/).until_after(/--}}/),
          handlebars: r.starting_with(/{{/).until_after(/}}/),
          handlebars_open: r.until(/[\n\r\t }]/),
          handlebars_raw_close: r.until(/}}/),
          comment: r.starting_with(/<!--/).until_after(/-->/),
          cdata: r.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
          conditional_comment: r.starting_with(/<!\[/).until_after(/]>/),
          processing: r.starting_with(/<\?/).until_after(/\?>/),
        }),
        this._options.indent_handlebars &&
          (this.__patterns.word = this.__patterns.word.exclude("handlebars")),
        (this._unformatted_content_delimiter = null),
        this._options.unformatted_content_delimiter)
      ) {
        var u = this._input.get_literal_regexp(
          this._options.unformatted_content_delimiter
        );
        this.__patterns.unformatted_content_delimiter = r
          .matching(u)
          .until_after(u);
      }
    };
  dt.prototype = new H_();
  dt.prototype._is_comment = function (e) {
    return !1;
  };
  dt.prototype._is_opening = function (e) {
    return e.type === $e.TAG_OPEN;
  };
  dt.prototype._is_closing = function (e, t) {
    return (
      e.type === $e.TAG_CLOSE &&
      t &&
      (((e.text === ">" || e.text === "/>") && t.text[0] === "<") ||
        (e.text === "}}" && t.text[0] === "{" && t.text[1] === "{"))
    );
  };
  dt.prototype._reset = function () {
    this._current_tag_name = "";
  };
  dt.prototype._get_next_token = function (e, t) {
    var n = null;
    this._readWhitespace();
    var r = this._input.peek();
    return r === null
      ? this._create_token($e.EOF, "")
      : ((n = n || this._read_open_handlebars(r, t)),
        (n = n || this._read_attribute(r, e, t)),
        (n = n || this._read_close(r, t)),
        (n = n || this._read_raw_content(r, e, t)),
        (n = n || this._read_content_word(r)),
        (n = n || this._read_comment_or_cdata(r)),
        (n = n || this._read_processing(r)),
        (n = n || this._read_open(r, t)),
        (n = n || this._create_token($e.UNKNOWN, this._input.next())),
        n);
  };
  dt.prototype._read_comment_or_cdata = function (e) {
    var t = null,
      n = null,
      r = null;
    if (e === "<") {
      var u = this._input.peek(1);
      u === "!" &&
        ((n = this.__patterns.comment.read()),
        n
          ? ((r = W_.get_directives(n)),
            r && r.ignore === "start" && (n += W_.readIgnored(this._input)))
          : (n = this.__patterns.cdata.read())),
        n && ((t = this._create_token($e.COMMENT, n)), (t.directives = r));
    }
    return t;
  };
  dt.prototype._read_processing = function (e) {
    var t = null,
      n = null,
      r = null;
    if (e === "<") {
      var u = this._input.peek(1);
      (u === "!" || u === "?") &&
        ((n = this.__patterns.conditional_comment.read()),
        (n = n || this.__patterns.processing.read())),
        n && ((t = this._create_token($e.COMMENT, n)), (t.directives = r));
    }
    return t;
  };
  dt.prototype._read_open = function (e, t) {
    var n = null,
      r = null;
    return (
      t ||
        (e === "<" &&
          ((n = this._input.next()),
          this._input.peek() === "/" && (n += this._input.next()),
          (n += this.__patterns.element_name.read()),
          (r = this._create_token($e.TAG_OPEN, n)))),
      r
    );
  };
  dt.prototype._read_open_handlebars = function (e, t) {
    var n = null,
      r = null;
    return (
      t ||
        (this._options.indent_handlebars &&
          e === "{" &&
          this._input.peek(1) === "{" &&
          (this._input.peek(2) === "!"
            ? ((n = this.__patterns.handlebars_comment.read()),
              (n = n || this.__patterns.handlebars.read()),
              (r = this._create_token($e.COMMENT, n)))
            : ((n = this.__patterns.handlebars_open.read()),
              (r = this._create_token($e.TAG_OPEN, n))))),
      r
    );
  };
  dt.prototype._read_close = function (e, t) {
    var n = null,
      r = null;
    return (
      t &&
        (t.text[0] === "<" &&
        (e === ">" || (e === "/" && this._input.peek(1) === ">"))
          ? ((n = this._input.next()),
            e === "/" && (n += this._input.next()),
            (r = this._create_token($e.TAG_CLOSE, n)))
          : t.text[0] === "{" &&
            e === "}" &&
            this._input.peek(1) === "}" &&
            (this._input.next(),
            this._input.next(),
            (r = this._create_token($e.TAG_CLOSE, "}}")))),
      r
    );
  };
  dt.prototype._read_attribute = function (e, t, n) {
    var r = null,
      u = "";
    if (n && n.text[0] === "<")
      if (e === "=") r = this._create_token($e.EQUALS, this._input.next());
      else if (e === '"' || e === "'") {
        var s = this._input.next();
        e === '"'
          ? (s += this.__patterns.double_quote.read())
          : (s += this.__patterns.single_quote.read()),
          (r = this._create_token($e.VALUE, s));
      } else
        (u = this.__patterns.attribute.read()),
          u &&
            (t.type === $e.EQUALS
              ? (r = this._create_token($e.VALUE, u))
              : (r = this._create_token($e.ATTRIBUTE, u)));
    return r;
  };
  dt.prototype._is_content_unformatted = function (e) {
    return (
      this._options.void_elements.indexOf(e) === -1 &&
      (this._options.content_unformatted.indexOf(e) !== -1 ||
        this._options.unformatted.indexOf(e) !== -1)
    );
  };
  dt.prototype._read_raw_content = function (e, t, n) {
    var r = "";
    if (n && n.text[0] === "{") r = this.__patterns.handlebars_raw_close.read();
    else if (
      t.type === $e.TAG_CLOSE &&
      t.opened.text[0] === "<" &&
      t.text[0] !== "/"
    ) {
      var u = t.opened.text.substr(1).toLowerCase();
      if (u === "script" || u === "style") {
        var s = this._read_comment_or_cdata(e);
        if (s) return (s.type = $e.TEXT), s;
        r = this._input.readUntil(
          new RegExp("</" + u + "[\\n\\r\\t ]*?>", "ig")
        );
      } else
        this._is_content_unformatted(u) &&
          (r = this._input.readUntil(
            new RegExp("</" + u + "[\\n\\r\\t ]*?>", "ig")
          ));
    }
    return r ? this._create_token($e.TEXT, r) : null;
  };
  dt.prototype._read_content_word = function (e) {
    var t = "";
    if (
      (this._options.unformatted_content_delimiter &&
        e === this._options.unformatted_content_delimiter[0] &&
        (t = this.__patterns.unformatted_content_delimiter.read()),
      t || (t = this.__patterns.word.read()),
      t)
    )
      return this._create_token($e.TEXT, t);
  };
  dh.exports.Tokenizer = dt;
  dh.exports.TOKEN = $e;
});
var q_ = re((d6, V_) => {
  "use strict";
  var Hw = ch().Options,
    $w = Dc().Output,
    zw = hh().Tokenizer,
    fe = hh().TOKEN,
    $_ = /\r\n|[\r\n]/,
    Vw = /\r\n|[\r\n]/g,
    Qt = function (e, t) {
      (this.indent_level = 0),
        (this.alignment_size = 0),
        (this.max_preserve_newlines = e.max_preserve_newlines),
        (this.preserve_newlines = e.preserve_newlines),
        (this._output = new $w(e, t));
    };
  Qt.prototype.current_line_has_match = function (e) {
    return this._output.current_line.has_match(e);
  };
  Qt.prototype.set_space_before_token = function (e, t) {
    (this._output.space_before_token = e),
      (this._output.non_breaking_space = t);
  };
  Qt.prototype.set_wrap_point = function () {
    this._output.set_indent(this.indent_level, this.alignment_size),
      this._output.set_wrap_point();
  };
  Qt.prototype.add_raw_token = function (e) {
    this._output.add_raw_token(e);
  };
  Qt.prototype.print_preserved_newlines = function (e) {
    var t = 0;
    e.type !== fe.TEXT &&
      e.previous.type !== fe.TEXT &&
      (t = e.newlines ? 1 : 0),
      this.preserve_newlines &&
        (t =
          e.newlines < this.max_preserve_newlines + 1
            ? e.newlines
            : this.max_preserve_newlines + 1);
    for (var n = 0; n < t; n++) this.print_newline(n > 0);
    return t !== 0;
  };
  Qt.prototype.traverse_whitespace = function (e) {
    return e.whitespace_before || e.newlines
      ? (this.print_preserved_newlines(e) ||
          (this._output.space_before_token = !0),
        !0)
      : !1;
  };
  Qt.prototype.previous_token_wrapped = function () {
    return this._output.previous_token_wrapped;
  };
  Qt.prototype.print_newline = function (e) {
    this._output.add_new_line(e);
  };
  Qt.prototype.print_token = function (e) {
    e.text &&
      (this._output.set_indent(this.indent_level, this.alignment_size),
      this._output.add_token(e.text));
  };
  Qt.prototype.indent = function () {
    this.indent_level++;
  };
  Qt.prototype.get_full_indent = function (e) {
    return (
      (e = this.indent_level + (e || 0)),
      e < 1 ? "" : this._output.get_indent_string(e)
    );
  };
  var qw = function (e) {
      for (var t = null, n = e.next; n.type !== fe.EOF && e.closed !== n; ) {
        if (n.type === fe.ATTRIBUTE && n.text === "type") {
          n.next &&
            n.next.type === fe.EQUALS &&
            n.next.next &&
            n.next.next.type === fe.VALUE &&
            (t = n.next.next.text);
          break;
        }
        n = n.next;
      }
      return t;
    },
    Gw = function (e, t) {
      var n = null,
        r = null;
      return t.closed
        ? (e === "script"
            ? (n = "text/javascript")
            : e === "style" && (n = "text/css"),
          (n = qw(t) || n),
          n.search("text/css") > -1
            ? (r = "css")
            : n.search(
                /module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/
              ) > -1
            ? (r = "javascript")
            : n.search(/(text|application|dojo)\/(x-)?(html)/) > -1
            ? (r = "html")
            : n.search(/test\/null/) > -1 && (r = "null"),
          r)
        : null;
    };
  function Bo(e, t) {
    return t.indexOf(e) !== -1;
  }
  function Yw(e, t, n) {
    (this.parent = e || null),
      (this.tag = t ? t.tag_name : ""),
      (this.indent_level = n || 0),
      (this.parser_token = t || null);
  }
  function lu(e) {
    (this._printer = e), (this._current_frame = null);
  }
  lu.prototype.get_parser_token = function () {
    return this._current_frame ? this._current_frame.parser_token : null;
  };
  lu.prototype.record_tag = function (e) {
    var t = new Yw(this._current_frame, e, this._printer.indent_level);
    this._current_frame = t;
  };
  lu.prototype._try_pop_frame = function (e) {
    var t = null;
    return (
      e &&
        ((t = e.parser_token),
        (this._printer.indent_level = e.indent_level),
        (this._current_frame = e.parent)),
      t
    );
  };
  lu.prototype._get_frame = function (e, t) {
    for (var n = this._current_frame; n && e.indexOf(n.tag) === -1; ) {
      if (t && t.indexOf(n.tag) !== -1) {
        n = null;
        break;
      }
      n = n.parent;
    }
    return n;
  };
  lu.prototype.try_pop = function (e, t) {
    var n = this._get_frame([e], t);
    return this._try_pop_frame(n);
  };
  lu.prototype.indent_to_tag = function (e) {
    var t = this._get_frame(e);
    t && (this._printer.indent_level = t.indent_level);
  };
  function Jt(e, t, n, r) {
    (this._source_text = e || ""),
      (t = t || {}),
      (this._js_beautify = n),
      (this._css_beautify = r),
      (this._tag_stack = null);
    var u = new Hw(t, "html");
    (this._options = u),
      (this._is_wrap_attributes_force =
        this._options.wrap_attributes.substr(0, 5) === "force"),
      (this._is_wrap_attributes_force_expand_multiline =
        this._options.wrap_attributes === "force-expand-multiline"),
      (this._is_wrap_attributes_force_aligned =
        this._options.wrap_attributes === "force-aligned"),
      (this._is_wrap_attributes_aligned_multiple =
        this._options.wrap_attributes === "aligned-multiple"),
      (this._is_wrap_attributes_preserve =
        this._options.wrap_attributes.substr(0, 8) === "preserve"),
      (this._is_wrap_attributes_preserve_aligned =
        this._options.wrap_attributes === "preserve-aligned");
  }
  Jt.prototype.beautify = function () {
    if (this._options.disabled) return this._source_text;
    var e = this._source_text,
      t = this._options.eol;
    this._options.eol === "auto" &&
      ((t = `
`),
      e && $_.test(e) && (t = e.match($_)[0])),
      (e = e.replace(
        Vw,
        `
`
      ));
    var n = e.match(/^[\t ]*/)[0],
      r = { text: "", type: "" },
      u = new z_(),
      s = new Qt(this._options, n),
      f = new zw(e, this._options).tokenize();
    this._tag_stack = new lu(s);
    for (var g = null, v = f.next(); v.type !== fe.EOF; )
      v.type === fe.TAG_OPEN || v.type === fe.COMMENT
        ? ((g = this._handle_tag_open(s, v, u, r, f)), (u = g))
        : v.type === fe.ATTRIBUTE ||
          v.type === fe.EQUALS ||
          v.type === fe.VALUE ||
          (v.type === fe.TEXT && !u.tag_complete)
        ? (g = this._handle_inside_tag(s, v, u, r))
        : v.type === fe.TAG_CLOSE
        ? (g = this._handle_tag_close(s, v, u))
        : v.type === fe.TEXT
        ? (g = this._handle_text(s, v, u))
        : s.add_raw_token(v),
        (r = g),
        (v = f.next());
    var b = s._output.get_code(t);
    return b;
  };
  Jt.prototype._handle_tag_close = function (e, t, n) {
    var r = { text: t.text, type: t.type };
    return (
      (e.alignment_size = 0),
      (n.tag_complete = !0),
      e.set_space_before_token(t.newlines || t.whitespace_before !== "", !0),
      n.is_unformatted
        ? e.add_raw_token(t)
        : (n.tag_start_char === "<" &&
            (e.set_space_before_token(t.text[0] === "/", !0),
            this._is_wrap_attributes_force_expand_multiline &&
              n.has_wrapped_attrs &&
              e.print_newline(!1)),
          e.print_token(t)),
      n.indent_content &&
        !(n.is_unformatted || n.is_content_unformatted) &&
        (e.indent(), (n.indent_content = !1)),
      !n.is_inline_element &&
        !(n.is_unformatted || n.is_content_unformatted) &&
        e.set_wrap_point(),
      r
    );
  };
  Jt.prototype._handle_inside_tag = function (e, t, n, r) {
    var u = n.has_wrapped_attrs,
      s = { text: t.text, type: t.type };
    return (
      e.set_space_before_token(t.newlines || t.whitespace_before !== "", !0),
      n.is_unformatted
        ? e.add_raw_token(t)
        : n.tag_start_char === "{" && t.type === fe.TEXT
        ? e.print_preserved_newlines(t)
          ? ((t.newlines = 0), e.add_raw_token(t))
          : e.print_token(t)
        : (t.type === fe.ATTRIBUTE
            ? e.set_space_before_token(!0)
            : (t.type === fe.EQUALS ||
                (t.type === fe.VALUE && t.previous.type === fe.EQUALS)) &&
              e.set_space_before_token(!1),
          t.type === fe.ATTRIBUTE &&
            n.tag_start_char === "<" &&
            ((this._is_wrap_attributes_preserve ||
              this._is_wrap_attributes_preserve_aligned) &&
              (e.traverse_whitespace(t), (u = u || t.newlines !== 0)),
            this._is_wrap_attributes_force &&
              n.attr_count >= this._options.wrap_attributes_min_attrs &&
              (r.type !== fe.TAG_OPEN ||
                this._is_wrap_attributes_force_expand_multiline) &&
              (e.print_newline(!1), (u = !0))),
          e.print_token(t),
          (u = u || e.previous_token_wrapped()),
          (n.has_wrapped_attrs = u)),
      s
    );
  };
  Jt.prototype._handle_text = function (e, t, n) {
    var r = { text: t.text, type: "TK_CONTENT" };
    return (
      n.custom_beautifier_name
        ? this._print_custom_beatifier_text(e, t, n)
        : n.is_unformatted || n.is_content_unformatted
        ? e.add_raw_token(t)
        : (e.traverse_whitespace(t), e.print_token(t)),
      r
    );
  };
  Jt.prototype._print_custom_beatifier_text = function (e, t, n) {
    var r = this;
    if (t.text !== "") {
      var u = t.text,
        s,
        f = 1,
        g = "",
        v = "";
      n.custom_beautifier_name === "javascript" &&
      typeof this._js_beautify == "function"
        ? (s = this._js_beautify)
        : n.custom_beautifier_name === "css" &&
          typeof this._css_beautify == "function"
        ? (s = this._css_beautify)
        : n.custom_beautifier_name === "html" &&
          (s = function (B, Z) {
            var O = new Jt(B, Z, r._js_beautify, r._css_beautify);
            return O.beautify();
          }),
        this._options.indent_scripts === "keep"
          ? (f = 0)
          : this._options.indent_scripts === "separate" &&
            (f = -e.indent_level);
      var b = e.get_full_indent(f);
      if (
        ((u = u.replace(/\n[ \t]*$/, "")),
        n.custom_beautifier_name !== "html" &&
          u[0] === "<" &&
          u.match(/^(<!--|<!\[CDATA\[)/))
      ) {
        var x =
          /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(u);
        if (!x) {
          e.add_raw_token(t);
          return;
        }
        (g =
          b +
          x[1] +
          `
`),
          (u = x[4]),
          x[5] && (v = b + x[5]),
          (u = u.replace(/\n[ \t]*$/, "")),
          (x[2] ||
            x[3].indexOf(`
`) !== -1) &&
            ((x = x[3].match(/[ \t]+$/)), x && (t.whitespace_before = x[0]));
      }
      if (u)
        if (s) {
          var T = function () {
            this.eol = `
`;
          };
          T.prototype = this._options.raw_options;
          var D = new T();
          u = s(b + u, D);
        } else {
          var L = t.whitespace_before;
          L &&
            (u = u.replace(
              new RegExp(
                `
(` +
                  L +
                  ")?",
                "g"
              ),
              `
`
            )),
            (u =
              b +
              u.replace(
                /\n/g,
                `
` + b
              ));
        }
      g &&
        (u
          ? (u =
              g +
              u +
              `
` +
              v)
          : (u = g + v)),
        e.print_newline(!1),
        u &&
          ((t.text = u),
          (t.whitespace_before = ""),
          (t.newlines = 0),
          e.add_raw_token(t),
          e.print_newline(!0));
    }
  };
  Jt.prototype._handle_tag_open = function (e, t, n, r, u) {
    var s = this._get_tag_open_token(t);
    if (
      ((n.is_unformatted || n.is_content_unformatted) &&
      !n.is_empty_element &&
      t.type === fe.TAG_OPEN &&
      !s.is_start_tag
        ? (e.add_raw_token(t),
          (s.start_tag_token = this._tag_stack.try_pop(s.tag_name)))
        : (e.traverse_whitespace(t),
          this._set_tag_position(e, t, s, n, r),
          s.is_inline_element || e.set_wrap_point(),
          e.print_token(t)),
      s.is_start_tag && this._is_wrap_attributes_force)
    ) {
      var f = 0,
        g;
      do
        (g = u.peek(f)),
          g.type === fe.ATTRIBUTE && (s.attr_count += 1),
          (f += 1);
      while (g.type !== fe.EOF && g.type !== fe.TAG_CLOSE);
    }
    return (
      (this._is_wrap_attributes_force_aligned ||
        this._is_wrap_attributes_aligned_multiple ||
        this._is_wrap_attributes_preserve_aligned) &&
        (s.alignment_size = t.text.length + 1),
      !s.tag_complete &&
        !s.is_unformatted &&
        (e.alignment_size = s.alignment_size),
      s
    );
  };
  var z_ = function (e, t) {
    if (
      ((this.parent = e || null),
      (this.text = ""),
      (this.type = "TK_TAG_OPEN"),
      (this.tag_name = ""),
      (this.is_inline_element = !1),
      (this.is_unformatted = !1),
      (this.is_content_unformatted = !1),
      (this.is_empty_element = !1),
      (this.is_start_tag = !1),
      (this.is_end_tag = !1),
      (this.indent_content = !1),
      (this.multiline_content = !1),
      (this.custom_beautifier_name = null),
      (this.start_tag_token = null),
      (this.attr_count = 0),
      (this.has_wrapped_attrs = !1),
      (this.alignment_size = 0),
      (this.tag_complete = !1),
      (this.tag_start_char = ""),
      (this.tag_check = ""),
      !t)
    )
      this.tag_complete = !0;
    else {
      var n;
      (this.tag_start_char = t.text[0]),
        (this.text = t.text),
        this.tag_start_char === "<"
          ? ((n = t.text.match(/^<([^\s>]*)/)),
            (this.tag_check = n ? n[1] : ""))
          : ((n = t.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/)),
            (this.tag_check = n ? n[1] : ""),
            (t.text.startsWith("{{#>") || t.text.startsWith("{{~#>")) &&
              this.tag_check[0] === ">" &&
              (this.tag_check === ">" && t.next !== null
                ? (this.tag_check = t.next.text.split(" ")[0])
                : (this.tag_check = t.text.split(">")[1]))),
        (this.tag_check = this.tag_check.toLowerCase()),
        t.type === fe.COMMENT && (this.tag_complete = !0),
        (this.is_start_tag = this.tag_check.charAt(0) !== "/"),
        (this.tag_name = this.is_start_tag
          ? this.tag_check
          : this.tag_check.substr(1)),
        (this.is_end_tag =
          !this.is_start_tag || (t.closed && t.closed.text === "/>"));
      var r = 2;
      this.tag_start_char === "{" &&
        this.text.length >= 3 &&
        this.text.charAt(2) === "~" &&
        (r = 3),
        (this.is_end_tag =
          this.is_end_tag ||
          (this.tag_start_char === "{" &&
            (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(r)))));
    }
  };
  Jt.prototype._get_tag_open_token = function (e) {
    var t = new z_(this._tag_stack.get_parser_token(), e);
    return (
      (t.alignment_size = this._options.wrap_attributes_indent_size),
      (t.is_end_tag =
        t.is_end_tag || Bo(t.tag_check, this._options.void_elements)),
      (t.is_empty_element = t.tag_complete || (t.is_start_tag && t.is_end_tag)),
      (t.is_unformatted =
        !t.tag_complete && Bo(t.tag_check, this._options.unformatted)),
      (t.is_content_unformatted =
        !t.is_empty_element &&
        Bo(t.tag_check, this._options.content_unformatted)),
      (t.is_inline_element =
        Bo(t.tag_name, this._options.inline) ||
        (this._options.inline_custom_elements && t.tag_name.includes("-")) ||
        t.tag_start_char === "{"),
      t
    );
  };
  Jt.prototype._set_tag_position = function (e, t, n, r, u) {
    if (
      (n.is_empty_element ||
        (n.is_end_tag
          ? (n.start_tag_token = this._tag_stack.try_pop(n.tag_name))
          : (this._do_optional_end_element(n) &&
              (n.is_inline_element || e.print_newline(!1)),
            this._tag_stack.record_tag(n),
            (n.tag_name === "script" || n.tag_name === "style") &&
              !(n.is_unformatted || n.is_content_unformatted) &&
              (n.custom_beautifier_name = Gw(n.tag_check, t)))),
      Bo(n.tag_check, this._options.extra_liners) &&
        (e.print_newline(!1),
        e._output.just_added_blankline() || e.print_newline(!0)),
      n.is_empty_element)
    ) {
      if (n.tag_start_char === "{" && n.tag_check === "else") {
        this._tag_stack.indent_to_tag(["if", "unless", "each"]),
          (n.indent_content = !0);
        var s = e.current_line_has_match(/{{#if/);
        s || e.print_newline(!1);
      }
      (n.tag_name === "!--" &&
        u.type === fe.TAG_CLOSE &&
        r.is_end_tag &&
        n.text.indexOf(`
`) === -1) ||
        (n.is_inline_element || n.is_unformatted || e.print_newline(!1),
        this._calcluate_parent_multiline(e, n));
    } else if (n.is_end_tag) {
      var f = !1;
      (f = n.start_tag_token && n.start_tag_token.multiline_content),
        (f =
          f ||
          (!n.is_inline_element &&
            !(r.is_inline_element || r.is_unformatted) &&
            !(u.type === fe.TAG_CLOSE && n.start_tag_token === r) &&
            u.type !== "TK_CONTENT")),
        (n.is_content_unformatted || n.is_unformatted) && (f = !1),
        f && e.print_newline(!1);
    } else
      (n.indent_content = !n.custom_beautifier_name),
        n.tag_start_char === "<" &&
          (n.tag_name === "html"
            ? (n.indent_content = this._options.indent_inner_html)
            : n.tag_name === "head"
            ? (n.indent_content = this._options.indent_head_inner_html)
            : n.tag_name === "body" &&
              (n.indent_content = this._options.indent_body_inner_html)),
        !(n.is_inline_element || n.is_unformatted) &&
          (u.type !== "TK_CONTENT" || n.is_content_unformatted) &&
          e.print_newline(!1),
        this._calcluate_parent_multiline(e, n);
  };
  Jt.prototype._calcluate_parent_multiline = function (e, t) {
    t.parent &&
      e._output.just_added_newline() &&
      !(
        (t.is_inline_element || t.is_unformatted) &&
        t.parent.is_inline_element
      ) &&
      (t.parent.multiline_content = !0);
  };
  var Xw = [
      "address",
      "article",
      "aside",
      "blockquote",
      "details",
      "div",
      "dl",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hr",
      "main",
      "menu",
      "nav",
      "ol",
      "p",
      "pre",
      "section",
      "table",
      "ul",
    ],
    Zw = ["a", "audio", "del", "ins", "map", "noscript", "video"];
  Jt.prototype._do_optional_end_element = function (e) {
    var t = null;
    if (!(e.is_empty_element || !e.is_start_tag || !e.parent)) {
      if (e.tag_name === "body") t = t || this._tag_stack.try_pop("head");
      else if (e.tag_name === "li")
        t = t || this._tag_stack.try_pop("li", ["ol", "ul", "menu"]);
      else if (e.tag_name === "dd" || e.tag_name === "dt")
        (t = t || this._tag_stack.try_pop("dt", ["dl"])),
          (t = t || this._tag_stack.try_pop("dd", ["dl"]));
      else if (e.parent.tag_name === "p" && Xw.indexOf(e.tag_name) !== -1) {
        var n = e.parent.parent;
        (!n || Zw.indexOf(n.tag_name) === -1) &&
          (t = t || this._tag_stack.try_pop("p"));
      } else
        e.tag_name === "rp" || e.tag_name === "rt"
          ? ((t = t || this._tag_stack.try_pop("rt", ["ruby", "rtc"])),
            (t = t || this._tag_stack.try_pop("rp", ["ruby", "rtc"])))
          : e.tag_name === "optgroup"
          ? (t = t || this._tag_stack.try_pop("optgroup", ["select"]))
          : e.tag_name === "option"
          ? (t =
              t ||
              this._tag_stack.try_pop("option", [
                "select",
                "datalist",
                "optgroup",
              ]))
          : e.tag_name === "colgroup"
          ? (t = t || this._tag_stack.try_pop("caption", ["table"]))
          : e.tag_name === "thead"
          ? ((t = t || this._tag_stack.try_pop("caption", ["table"])),
            (t = t || this._tag_stack.try_pop("colgroup", ["table"])))
          : e.tag_name === "tbody" || e.tag_name === "tfoot"
          ? ((t = t || this._tag_stack.try_pop("caption", ["table"])),
            (t = t || this._tag_stack.try_pop("colgroup", ["table"])),
            (t = t || this._tag_stack.try_pop("thead", ["table"])),
            (t = t || this._tag_stack.try_pop("tbody", ["table"])))
          : e.tag_name === "tr"
          ? ((t = t || this._tag_stack.try_pop("caption", ["table"])),
            (t = t || this._tag_stack.try_pop("colgroup", ["table"])),
            (t =
              t ||
              this._tag_stack.try_pop("tr", [
                "table",
                "thead",
                "tbody",
                "tfoot",
              ])))
          : (e.tag_name === "th" || e.tag_name === "td") &&
            ((t =
              t ||
              this._tag_stack.try_pop("td", [
                "table",
                "thead",
                "tbody",
                "tfoot",
                "tr",
              ])),
            (t =
              t ||
              this._tag_stack.try_pop("th", [
                "table",
                "thead",
                "tbody",
                "tfoot",
                "tr",
              ])));
      return (e.parent = this._tag_stack.get_parser_token()), t;
    }
  };
  V_.exports.Beautifier = Jt;
});
var G_ = re((h6, ph) => {
  "use strict";
  var Kw = q_().Beautifier,
    Jw = ch().Options;
  function Qw(e, t, n, r) {
    var u = new Kw(e, t, n, r);
    return u.beautify();
  }
  ph.exports = Qw;
  ph.exports.defaultOptions = function () {
    return new Jw();
  };
});
var J_ = re((p6, Hc) => {
  "use strict";
  var Y_ = I_(),
    X_ = B_(),
    Z_ = G_();
  function K_(e, t, n, r) {
    return (n = n || Y_), (r = r || X_), Z_(e, t, n, r);
  }
  K_.defaultOptions = Z_.defaultOptions;
  Hc.exports.js = Y_;
  Hc.exports.css = X_;
  Hc.exports.html = K_;
});
var tb = re((m6, eb) => {
  "use strict";
  function Q_(e, t, n) {
    var r = function (u, s) {
      return e.js_beautify(u, s);
    };
    return (
      (r.js = e.js_beautify),
      (r.css = t.css_beautify),
      (r.html = n.html_beautify),
      (r.js_beautify = e.js_beautify),
      (r.css_beautify = t.css_beautify),
      (r.html_beautify = n.html_beautify),
      r
    );
  }
  typeof define == "function" && define.amd
    ? define(
        ["./lib/beautify", "./lib/beautify-css", "./lib/beautify-html"],
        function (e, t, n) {
          return Q_(e, t, n);
        }
      )
    : (function (e) {
        var t = J_();
        (t.js_beautify = t.js),
          (t.css_beautify = t.css),
          (t.html_beautify = t.html),
          (e.exports = Q_(t, t, t));
      })(eb);
});
var Eh = re((D6, Yc) => {
  var z3 = /[<"'&]/,
    V3 = /[a-z][A-Z]/;
  function Sh(e, t) {
    let n = e.charCodeAt(t);
    return n >= 65 && n <= 90;
  }
  function Eb(e) {
    if (!V3.test(e)) return e;
    let t = e.length,
      n = 0,
      r = 0,
      u = "",
      s = !0,
      f = Sh(e, 0),
      g;
    for (; r < t; r++)
      (g = Sh(e, r + 1)),
        !s &&
          f &&
          !g &&
          ((u += e.slice(n, r) + "-" + e[r].toLowerCase()), (n = r + 1)),
        (s = f),
        (f = g);
    return (u += e.slice(n, r)), u;
  }
  function kb(e, ...t) {
    let n = e.length,
      r = t.length,
      u = 0,
      s = "";
    for (; u < n; u++) (s += e[u]), u < r && (s += t[u]);
    return qc(s);
  }
  var qc = function (e) {
    if ((typeof e != "string" && (e = e.toString()), !z3.test(e))) return e;
    let t = e.length,
      n = "",
      r = 0,
      u = 0;
    for (; u < t; u++)
      switch (e[u]) {
        case "&":
          (n += e.slice(r, u) + "&amp;"), (r = u + 1);
          continue;
        case "<":
          (n += e.slice(r, u) + "&lt;"), (r = u + 1);
          continue;
        case '"':
          (n += e.slice(r, u) + "&#34;"), (r = u + 1);
          continue;
        case "'":
          (n += e.slice(r, u) + "&#39;"), (r = u + 1);
          continue;
      }
    return (n += e.slice(r, u)), n;
  };
  typeof Bun < "u" && (qc = Bun.escapeHTML);
  function Cb(e) {
    return (
      e === "meta" ||
      e === "link" ||
      e === "img" ||
      e === "br" ||
      e === "input" ||
      e === "hr" ||
      e === "area" ||
      e === "base" ||
      e === "col" ||
      e === "command" ||
      e === "embed" ||
      e === "keygen" ||
      e === "param" ||
      e === "source" ||
      e === "track" ||
      e === "wbr"
    );
  }
  function Rb(e) {
    if (typeof e == "string") {
      let b = e.indexOf('"');
      if (b === -1) return e;
      let x = e.length,
        T = "",
        D = 0;
      for (; b < x; b++)
        e[b] === '"' && ((T += e.slice(D, b) + "&#34;"), (D = b + 1));
      return (T += e.slice(D, b)), T;
    }
    let t = Object.keys(e),
      n = t.length,
      r,
      u,
      s,
      f,
      g = 0,
      v = "";
    for (; g < n; g++) {
      if (((r = t[g]), (u = e[r]), u == null)) continue;
      if (((v += Eb(r) + ":"), typeof u != "string")) {
        v += u.toString() + ";";
        continue;
      }
      if (((s = u.indexOf('"')), s === -1)) {
        v += u + ";";
        continue;
      }
      let b = u.length;
      for (f = 0; s < b; s++)
        u[s] === '"' && ((v += u.slice(f, s) + "&#34;"), (f = s + 1));
      v += u.slice(f, s) + ";";
    }
    return v;
  }
  function kh(e) {
    let t = Object.keys(e),
      n = t.length,
      r,
      u,
      s,
      f,
      g,
      v,
      b,
      x = "",
      T = 0;
    for (; T < n; T++)
      if (((r = t[T]), !(r === "children" || r === "safe"))) {
        if (((u = e[r]), r === "className")) {
          if (e.class !== void 0) continue;
          r = "class";
        } else if (r === "class" && Array.isArray(u)) {
          (v = u), (b = u.length), (u = "");
          for (let D = 0; D < b; D++)
            v[D] &&
              v[D].length > 0 &&
              (u ? (u += " " + v[D].trim()) : (u += v[D].trim()));
          if (u.length === 0) continue;
        } else if (r === "style") {
          x += ' style="' + Rb(u) + '"';
          continue;
        } else if (r === "attrs") {
          typeof u == "string" ? (x += " " + u) : (x += kh(u));
          continue;
        }
        if (((s = typeof u), s === "boolean")) {
          u && (x += " " + r);
          continue;
        }
        if (u != null) {
          if (((x += " " + r), s !== "string")) {
            if (s !== "object") {
              x += '="' + u.toString() + '"';
              continue;
            }
            if (u instanceof Date) {
              x += '="' + u.toISOString() + '"';
              continue;
            }
            u = u.toString();
          }
          if (((f = u.indexOf('"')), f === -1)) {
            x += '="' + u + '"';
            continue;
          }
          for (x += '="', b = u.length, g = 0; f < b; f++)
            u[f] === '"' && ((x += u.slice(g, f) + "&#34;"), (g = f + 1));
          x += u.slice(g, f) + '"';
        }
      }
    return x;
  }
  function Th(e, t) {
    let n = e.length,
      r = "",
      u,
      s = 0;
    for (; s < n; s++) {
      if (((u = e[s]), typeof u != "string")) {
        if (!u && u !== 0) continue;
        if (u.then)
          return Promise.all(e.slice(s)).then(function (g) {
            return g.unshift(r), Th(g, t);
          });
        if (Array.isArray(u)) {
          e.splice(s--, 1, ...u), (n += u.length - 1);
          continue;
        }
      }
      r += u;
    }
    return t === !0 ? qc(r) : r;
  }
  function Tb(e, t, ...n) {
    let r = t !== null;
    if (typeof e == "function")
      return (
        r
          ? t.children === void 0 && (t.children = n.length > 1 ? n : n[0])
          : (t = { children: n.length > 1 ? n : n[0] }),
        e(t)
      );
    r && e === "tag" && ((e = String(t.of)), delete t.of);
    let u = r ? kh(t) : "";
    if (n.length === 0 && Cb(e)) return "<" + e + u + "/>";
    let s = Th(n, r && t.safe);
    return typeof s == "string"
      ? "<" + e + u + ">" + s + "</" + e + ">"
      : s.then(function (g) {
          return "<" + e + u + ">" + g + "</" + e + ">";
        });
  }
  function q3(e) {
    return Gc.contentsToString([e.children]);
  }
  function G3(e, t = !0, n = "/*\0*/") {
    if (typeof e != "function")
      throw new Error("The first argument must be a function.");
    let r = new Set(),
      u = e(
        new Proxy(
          {},
          {
            get(x, T) {
              r.add(T);
              let D = T === "children",
                L = `args[${n}\`${T.toString()}\`${n}]`;
              return (
                D &&
                  (L = `Array.isArray(${L}) ? ${L}.join(${n}\`\`${n}) : ${L}`),
                `\`${n} + (${L} || ${
                  t && !D
                    ? `throwPropertyNotFound(${n}\`${T.toString()}\`${n})`
                    : `${n}\`\`${n}`
                }) + ${n}\``
              );
            },
          }
        )
      );
    if (typeof u != "string")
      throw new Error("You cannot use compile() with async components.");
    let s = n.length,
      f = u.length,
      g = "",
      v = 0,
      b = 0;
    for (; b < f; b++)
      if (
        u[b] === "`" &&
        u.slice(b - s, b) !== n &&
        u.slice(b + 1, b + s + 1) !== n
      ) {
        (g += u.slice(v, b) + "\\`"), (v = b + 1);
        continue;
      }
    return (
      (g += u.slice(v)),
      t
        ? Function(
            "args",
            `if (args === undefined) { throw new Error("The arguments object was not provided.") };
function throwPropertyNotFound(name) { throw new Error("Property " + name + " was not provided.") };
return \`${g}\``
          )
        : Function(
            "args",
            `if (args === undefined) { args = Object.create(null) };
return \`${g}\``
          )
    );
  }
  var Gc = {
    escape: kb,
    e: kb,
    escapeHtml: qc,
    isVoidElement: Cb,
    attributesToString: kh,
    toKebabCase: Eb,
    isUpper: Sh,
    styleToString: Rb,
    createElement: Tb,
    h: Tb,
    contentsToString: Th,
    compile: G3,
    Fragment: q3,
  };
  Yc.exports = Gc;
  Yc.exports.Html = Gc;
  Yc.exports.default = Gc;
});
var X3 = {};
Fb(X3, { handlers: () => Y3 });
module.exports = Ub(X3);
var ee = require("drizzle-orm/pg-core"),
  J3 = (0, ee.pgTable)("atdatabases_migrations_version", {
    id: (0, ee.integer)("id").primaryKey().notNull(),
    version: (0, ee.text)("version"),
  }),
  Q3 = (0, ee.pgTable)("atdatabases_migrations_applied", {
    id: (0, ee.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    index: (0, ee.integer)("index").notNull(),
    name: (0, ee.text)("name").notNull(),
    script: (0, ee.text)("script").notNull(),
    appliedAt: (0, ee.timestamp)("applied_at", {
      withTimezone: !0,
      mode: "string",
    }).notNull(),
    ignoredError: (0, ee.text)("ignored_error"),
    obsolete: (0, ee.boolean)("obsolete").notNull(),
  }),
  eS = (0, ee.pgTable)("_motile_ddl_log", {
    id: (0, ee.integer)("id").primaryKey().notNull(),
    username: (0, ee.text)("username"),
    objectTag: (0, ee.text)("object_tag"),
    ddlCommand: (0, ee.text)("ddl_command"),
    timestamp: (0, ee.timestamp)("timestamp", { mode: "string" }),
  }),
  Ih = (0, ee.pgTable)("messages", {
    messageId: (0, ee.uuid)("message_id")
      .defaultRandom()
      .primaryKey()
      .notNull(),
    userId: (0, ee.uuid)("user_id")
      .notNull()
      .references(() => da.userId, { onDelete: "cascade" }),
    messageText: (0, ee.text)("message_text").notNull(),
    createdAt: (0, ee.timestamp)("created_at", {
      withTimezone: !0,
      mode: "string",
    }).defaultNow(),
  }),
  da = (0, ee.pgTable)(
    "users",
    {
      userId: (0, ee.uuid)("user_id").defaultRandom().primaryKey().notNull(),
      username: (0, ee.varchar)("username", { length: 255 }).notNull(),
      email: (0, ee.varchar)("email", { length: 255 }).notNull(),
      createdAt: (0, ee.timestamp)("created_at", {
        withTimezone: !0,
        mode: "string",
      }).defaultNow(),
      updatedAt: (0, ee.timestamp)("updated_at", {
        withTimezone: !0,
        mode: "string",
      }).defaultNow(),
    },
    (e) => ({ usersEmailKey: (0, ee.unique)("users_email_key").on(e.email) })
  );
var hb = require("drizzle-orm");
var i3 = Zs(h0(), 1);
var ue;
(function (e) {
  (e.Root = "root"),
    (e.Text = "text"),
    (e.Directive = "directive"),
    (e.Comment = "comment"),
    (e.Script = "script"),
    (e.Style = "style"),
    (e.Tag = "tag"),
    (e.CDATA = "cdata"),
    (e.Doctype = "doctype");
})(ue || (ue = {}));
function Bm(e) {
  return e.type === ue.Tag || e.type === ue.Script || e.type === ue.Style;
}
var Fm = ue.Root,
  Um = ue.Text,
  jm = ue.Directive,
  Wm = ue.Comment,
  Hm = ue.Script,
  $m = ue.Style,
  zm = ue.Tag,
  Vm = ue.CDATA,
  qm = ue.Doctype;
var cc = class {
    constructor() {
      (this.parent = null),
        (this.prev = null),
        (this.next = null),
        (this.startIndex = null),
        (this.endIndex = null);
    }
    get parentNode() {
      return this.parent;
    }
    set parentNode(t) {
      this.parent = t;
    }
    get previousSibling() {
      return this.prev;
    }
    set previousSibling(t) {
      this.prev = t;
    }
    get nextSibling() {
      return this.next;
    }
    set nextSibling(t) {
      this.next = t;
    }
    cloneNode(t = !1) {
      return Xm(this, t);
    }
  },
  lo = class extends cc {
    constructor(t) {
      super(), (this.data = t);
    }
    get nodeValue() {
      return this.data;
    }
    set nodeValue(t) {
      this.data = t;
    }
  },
  ba = class extends lo {
    constructor() {
      super(...arguments), (this.type = ue.Text);
    }
    get nodeType() {
      return 3;
    }
  },
  co = class extends lo {
    constructor() {
      super(...arguments), (this.type = ue.Comment);
    }
    get nodeType() {
      return 8;
    }
  },
  fo = class extends lo {
    constructor(t, n) {
      super(n), (this.name = t), (this.type = ue.Directive);
    }
    get nodeType() {
      return 1;
    }
  },
  ho = class extends cc {
    constructor(t) {
      super(), (this.children = t);
    }
    get firstChild() {
      var t;
      return (t = this.children[0]) !== null && t !== void 0 ? t : null;
    }
    get lastChild() {
      return this.children.length > 0
        ? this.children[this.children.length - 1]
        : null;
    }
    get childNodes() {
      return this.children;
    }
    set childNodes(t) {
      this.children = t;
    }
  },
  po = class extends ho {
    constructor() {
      super(...arguments), (this.type = ue.CDATA);
    }
    get nodeType() {
      return 4;
    }
  },
  va = class extends ho {
    constructor() {
      super(...arguments), (this.type = ue.Root);
    }
    get nodeType() {
      return 9;
    }
  },
  mo = class extends ho {
    constructor(
      t,
      n,
      r = [],
      u = t === "script" ? ue.Script : t === "style" ? ue.Style : ue.Tag
    ) {
      super(r), (this.name = t), (this.attribs = n), (this.type = u);
    }
    get nodeType() {
      return 1;
    }
    get tagName() {
      return this.name;
    }
    set tagName(t) {
      this.name = t;
    }
    get attributes() {
      return Object.keys(this.attribs).map((t) => {
        var n, r;
        return {
          name: t,
          value: this.attribs[t],
          namespace:
            (n = this["x-attribsNamespace"]) === null || n === void 0
              ? void 0
              : n[t],
          prefix:
            (r = this["x-attribsPrefix"]) === null || r === void 0
              ? void 0
              : r[t],
        };
      });
    }
  };
function dr(e) {
  return Bm(e);
}
function m0(e) {
  return e.type === ue.CDATA;
}
function fc(e) {
  return e.type === ue.Text;
}
function g0(e) {
  return e.type === ue.Comment;
}
function hy(e) {
  return e.type === ue.Directive;
}
function Ym(e) {
  return e.type === ue.Root;
}
function Xm(e, t = !1) {
  let n;
  if (fc(e)) n = new ba(e.data);
  else if (g0(e)) n = new co(e.data);
  else if (dr(e)) {
    let r = t ? p0(e.children) : [],
      u = new mo(e.name, { ...e.attribs }, r);
    r.forEach((s) => (s.parent = u)),
      e.namespace != null && (u.namespace = e.namespace),
      e["x-attribsNamespace"] &&
        (u["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }),
      e["x-attribsPrefix"] &&
        (u["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }),
      (n = u);
  } else if (m0(e)) {
    let r = t ? p0(e.children) : [],
      u = new po(r);
    r.forEach((s) => (s.parent = u)), (n = u);
  } else if (Ym(e)) {
    let r = t ? p0(e.children) : [],
      u = new va(r);
    r.forEach((s) => (s.parent = u)),
      e["x-mode"] && (u["x-mode"] = e["x-mode"]),
      (n = u);
  } else if (hy(e)) {
    let r = new fo(e.name, e.data);
    e["x-name"] != null &&
      ((r["x-name"] = e["x-name"]),
      (r["x-publicId"] = e["x-publicId"]),
      (r["x-systemId"] = e["x-systemId"])),
      (n = r);
  } else throw new Error(`Not implemented yet: ${e.type}`);
  return (
    (n.startIndex = e.startIndex),
    (n.endIndex = e.endIndex),
    e.sourceCodeLocation != null &&
      (n.sourceCodeLocation = e.sourceCodeLocation),
    n
  );
}
function p0(e) {
  let t = e.map((n) => Xm(n, !0));
  for (let n = 1; n < t.length; n++)
    (t[n].prev = t[n - 1]), (t[n - 1].next = t[n]);
  return t;
}
var Zm = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 },
  ya = class {
    constructor(t, n, r) {
      (this.dom = []),
        (this.root = new va(this.dom)),
        (this.done = !1),
        (this.tagStack = [this.root]),
        (this.lastNode = null),
        (this.parser = null),
        typeof n == "function" && ((r = n), (n = Zm)),
        typeof t == "object" && ((n = t), (t = void 0)),
        (this.callback = t ?? null),
        (this.options = n ?? Zm),
        (this.elementCB = r ?? null);
    }
    onparserinit(t) {
      this.parser = t;
    }
    onreset() {
      (this.dom = []),
        (this.root = new va(this.dom)),
        (this.done = !1),
        (this.tagStack = [this.root]),
        (this.lastNode = null),
        (this.parser = null);
    }
    onend() {
      this.done ||
        ((this.done = !0), (this.parser = null), this.handleCallback(null));
    }
    onerror(t) {
      this.handleCallback(t);
    }
    onclosetag() {
      this.lastNode = null;
      let t = this.tagStack.pop();
      this.options.withEndIndices && (t.endIndex = this.parser.endIndex),
        this.elementCB && this.elementCB(t);
    }
    onopentag(t, n) {
      let r = this.options.xmlMode ? ue.Tag : void 0,
        u = new mo(t, n, void 0, r);
      this.addNode(u), this.tagStack.push(u);
    }
    ontext(t) {
      let { lastNode: n } = this;
      if (n && n.type === ue.Text)
        (n.data += t),
          this.options.withEndIndices && (n.endIndex = this.parser.endIndex);
      else {
        let r = new ba(t);
        this.addNode(r), (this.lastNode = r);
      }
    }
    oncomment(t) {
      if (this.lastNode && this.lastNode.type === ue.Comment) {
        this.lastNode.data += t;
        return;
      }
      let n = new co(t);
      this.addNode(n), (this.lastNode = n);
    }
    oncommentend() {
      this.lastNode = null;
    }
    oncdatastart() {
      let t = new ba(""),
        n = new po([t]);
      this.addNode(n), (t.parent = n), (this.lastNode = t);
    }
    oncdataend() {
      this.lastNode = null;
    }
    onprocessinginstruction(t, n) {
      let r = new fo(t, n);
      this.addNode(r);
    }
    handleCallback(t) {
      if (typeof this.callback == "function") this.callback(t, this.dom);
      else if (t) throw t;
    }
    addNode(t) {
      let n = this.tagStack[this.tagStack.length - 1],
        r = n.children[n.children.length - 1];
      this.options.withStartIndices && (t.startIndex = this.parser.startIndex),
        this.options.withEndIndices && (t.endIndex = this.parser.endIndex),
        n.children.push(t),
        r && ((t.prev = r), (r.next = t)),
        (t.parent = n),
        (this.lastNode = null);
    }
  };
var py = /\n/g;
function my(e) {
  let t = [...e.matchAll(py)].map((r) => r.index || 0);
  t.unshift(-1);
  let n = _0(t, 0, t.length);
  return (r) => Jm(n, r);
}
function _0(e, t, n) {
  if (n - t == 1) return { offset: e[t], index: t + 1 };
  let r = Math.ceil((t + n) / 2),
    u = _0(e, t, r),
    s = _0(e, r, n);
  return { offset: u.offset, low: u, high: s };
}
function Jm(e, t) {
  return (function (n) {
    return Object.prototype.hasOwnProperty.call(n, "index");
  })(e)
    ? { line: e.index, column: t - e.offset }
    : Jm(e.high.offset < t ? e.high : e.low, t);
}
function b0(e, t = "", n = {}) {
  let r = typeof t != "string" ? t : n,
    u = typeof t == "string" ? t : "",
    s = e.map(gy),
    f = !!r.lineNumbers;
  return function (g, v = 0) {
    let b = f ? my(g) : () => ({ line: 0, column: 0 }),
      x = v,
      T = [];
    e: for (; x < g.length; ) {
      let D = !1;
      for (let L of s) {
        L.regex.lastIndex = x;
        let B = L.regex.exec(g);
        if (B && B[0].length > 0) {
          if (!L.discard) {
            let Z = b(x),
              O =
                typeof L.replace == "string"
                  ? B[0].replace(
                      new RegExp(L.regex.source, L.regex.flags),
                      L.replace
                    )
                  : B[0];
            T.push({
              state: u,
              name: L.name,
              text: O,
              offset: x,
              len: B[0].length,
              line: Z.line,
              column: Z.column,
            });
          }
          if (((x = L.regex.lastIndex), (D = !0), L.push)) {
            let Z = L.push(g, x);
            T.push(...Z.tokens), (x = Z.offset);
          }
          if (L.pop) break e;
          break;
        }
      }
      if (!D) break;
    }
    return { tokens: T, offset: x, complete: g.length <= x };
  };
}
function gy(e, t) {
  return { ...e, regex: _y(e, t) };
}
function _y(e, t) {
  if (e.name.length === 0)
    throw new Error(`Rule #${t} has empty name, which is not allowed.`);
  if (
    (function (n) {
      return Object.prototype.hasOwnProperty.call(n, "regex");
    })(e)
  )
    return (function (n) {
      if (n.global)
        throw new Error(
          `Regular expression /${n.source}/${n.flags} contains the global flag, which is not allowed.`
        );
      return n.sticky ? n : new RegExp(n.source, n.flags + "y");
    })(e.regex);
  if (
    (function (n) {
      return Object.prototype.hasOwnProperty.call(n, "str");
    })(e)
  ) {
    if (e.str.length === 0)
      throw new Error(
        `Rule #${t} ("${e.name}") has empty "str" property, which is not allowed.`
      );
    return new RegExp(Km(e.str), "y");
  }
  return new RegExp(Km(e.name), "y");
}
function Km(e) {
  return e.replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g, "\\$&");
}
function Bn(e, t) {
  return (n, r) => {
    let u = r,
      s;
    return (
      r < n.tokens.length
        ? ((s = e(n.tokens[r], n, r)), s !== void 0 && u++)
        : t?.(n, r),
      s === void 0 ? { matched: !1 } : { matched: !0, position: u, value: s }
    );
  };
}
function v0(e, t) {
  return e.matched
    ? { matched: !0, position: e.position, value: t(e.value, e.position) }
    : e;
}
function dc(e, t) {
  return e.matched ? t(e) : e;
}
function ut(e, t) {
  return (n, r) => v0(e(n, r), (u, s) => t(u, n, r, s));
}
function go(e, t) {
  return (n, r) => {
    let u = e(n, r);
    return u.matched ? u : { matched: !0, position: r, value: t };
  };
}
function xa(...e) {
  return (t, n) => {
    for (let r of e) {
      let u = r(t, n);
      if (u.matched) return u;
    }
    return { matched: !1 };
  };
}
function ri(e, t) {
  return (n, r) => {
    let u = e(n, r);
    return u.matched ? u : t(n, r);
  };
}
function by(e, t) {
  return (n, r) => {
    let u = [],
      s = !0;
    do {
      let f = e(n, r);
      f.matched && t(f.value, u.length + 1, n, r, f.position)
        ? (u.push(f.value), (r = f.position))
        : (s = !1);
    } while (s);
    return { matched: !0, position: r, value: u };
  };
}
function hc(e) {
  return by(e, () => !0);
}
function Qm(e) {
  return ft(e, hc(e), (t, n) => [t, ...n]);
}
function ft(e, t, n) {
  return (r, u) =>
    dc(e(r, u), (s) => v0(t(r, s.position), (f, g) => n(s.value, f, r, u, g)));
}
function eg(e, t) {
  return ft(e, t, (n) => n);
}
function y0(e, t) {
  return ft(e, t, (n, r) => r);
}
function pc(e, t, n, r) {
  return (u, s) =>
    dc(e(u, s), (f) =>
      dc(t(u, f.position), (g) =>
        v0(n(u, g.position), (v, b) => r(f.value, g.value, v, u, s, b))
      )
    );
}
function x0(e, t, n) {
  return pc(e, t, n, (r, u) => u);
}
function vy(...e) {
  return (t, n) => {
    let r = [],
      u = n;
    for (let s of e) {
      let f = s(t, u);
      if (f.matched) r.push(f.value), (u = f.position);
      else return { matched: !1 };
    }
    return { matched: !0, position: u, value: r };
  };
}
function tg(...e) {
  return yy(vy(...e));
}
function yy(e) {
  return ut(e, (t) => t.flatMap((n) => n));
}
function xy(e, t) {
  return (n, r) => {
    let u = !0,
      s = e,
      f = r;
    do {
      let g = t(s, n, f)(n, f);
      g.matched ? ((s = g.value), (f = g.position)) : (u = !1);
    } while (u);
    return { matched: !0, position: f, value: s };
  };
}
function wy(e, t, n) {
  return xy(e, (r) => ut(t, (u, s, f, g) => n(r, u, s, f, g)));
}
function w0(e, t, n) {
  return Sy(e, (r) =>
    wy(
      r,
      ft(t, n, (u, s) => [u, s]),
      (u, [s, f]) => s(u, f)
    )
  );
}
function Sy(e, t) {
  return (n, r) =>
    dc(e(n, r), (u) => t(u.value, n, r, u.position)(n, u.position));
}
var Ty = "(?:[ \\t\\r\\n\\f]*)",
  sg = "(?:\\n|\\r\\n|\\r|\\f)",
  _c = "[^\\x00-\\x7F]",
  vo = "(?:\\\\[0-9a-f]{1,6}(?:\\r\\n|[ \\n\\r\\t\\f])?)",
  yo = "(?:\\\\[^\\n\\r\\f0-9a-f])",
  Ey = `(?:[_a-z]|${_c}|${vo}|${yo})`,
  og = `(?:[_a-z0-9-]|${_c}|${vo}|${yo})`,
  Cy = `(?:${og}+)`,
  Ry = `(?:[-]?${Ey}${og}*)`,
  Iy = `'([^\\n\\r\\f\\\\']|\\\\${sg}|${_c}|${vo}|${yo})*'`,
  Ay = `"([^\\n\\r\\f\\\\"]|\\\\${sg}|${_c}|${vo}|${yo})*"`,
  Ly = b0([
    { name: "ws", regex: new RegExp(Ty) },
    { name: "hash", regex: new RegExp(`#${Cy}`, "i") },
    { name: "ident", regex: new RegExp(Ry, "i") },
    { name: "str1", regex: new RegExp(Iy, "i") },
    { name: "str2", regex: new RegExp(Ay, "i") },
    { name: "*" },
    { name: "." },
    { name: "," },
    { name: "[" },
    { name: "]" },
    { name: "=" },
    { name: ">" },
    { name: "|" },
    { name: "+" },
    { name: "~" },
    { name: "^" },
    { name: "$" },
  ]),
  Oy = b0([
    { name: "unicode", regex: new RegExp(vo, "i") },
    { name: "escape", regex: new RegExp(yo, "i") },
    { name: "any", regex: new RegExp("[\\s\\S]", "i") },
  ]);
function lg([e, t, n], [r, u, s]) {
  return [e + r, t + u, n + s];
}
function Dy(e) {
  return e.reduce(lg, [0, 0, 0]);
}
var Py = Bn((e) =>
    e.name === "unicode"
      ? String.fromCodePoint(parseInt(e.text.slice(1), 16))
      : void 0
  ),
  My = Bn((e) => (e.name === "escape" ? e.text.slice(1) : void 0)),
  Ny = Bn((e) => (e.name === "any" ? e.text : void 0)),
  By = ut(hc(xa(Py, My, Ny)), (e) => e.join(""));
function T0(e) {
  let t = Oy(e);
  return By({ tokens: t.tokens, options: void 0 }, 0).value;
}
function Re(e) {
  return Bn((t) => (t.name === e ? !0 : void 0));
}
var E0 = Bn((e) => (e.name === "ws" ? null : void 0)),
  S0 = go(E0, null);
function Sa(e) {
  return x0(S0, e, S0);
}
var bo = Bn((e) => (e.name === "ident" ? T0(e.text) : void 0)),
  Fy = Bn((e) => (e.name === "hash" ? T0(e.text.slice(1)) : void 0)),
  Uy = Bn((e) => (e.name.startsWith("str") ? T0(e.text.slice(1, -1)) : void 0)),
  cg = eg(go(bo, ""), Re("|")),
  C0 = ri(
    ft(cg, bo, (e, t) => ({ name: t, namespace: e })),
    ut(bo, (e) => ({ name: e, namespace: null }))
  ),
  jy = ri(
    ft(cg, Re("*"), (e) => ({
      type: "universal",
      namespace: e,
      specificity: [0, 0, 0],
    })),
    ut(Re("*"), () => ({
      type: "universal",
      namespace: null,
      specificity: [0, 0, 0],
    }))
  ),
  Wy = ut(C0, ({ name: e, namespace: t }) => ({
    type: "tag",
    name: e,
    namespace: t,
    specificity: [0, 0, 1],
  })),
  Hy = ft(Re("."), bo, (e, t) => ({
    type: "class",
    name: t,
    specificity: [0, 1, 0],
  })),
  $y = ut(Fy, (e) => ({ type: "id", name: e, specificity: [1, 0, 0] })),
  ng = Bn((e) => {
    if (e.name === "ident") {
      if (e.text === "i" || e.text === "I") return "i";
      if (e.text === "s" || e.text === "S") return "s";
    }
  }),
  zy = ri(
    ft(Uy, go(y0(S0, ng), null), (e, t) => ({ value: e, modifier: t })),
    ft(bo, go(y0(E0, ng), null), (e, t) => ({ value: e, modifier: t }))
  ),
  Vy = xa(
    ut(Re("="), () => "="),
    ft(Re("~"), Re("="), () => "~="),
    ft(Re("|"), Re("="), () => "|="),
    ft(Re("^"), Re("="), () => "^="),
    ft(Re("$"), Re("="), () => "$="),
    ft(Re("*"), Re("="), () => "*=")
  ),
  qy = pc(Re("["), Sa(C0), Re("]"), (e, { name: t, namespace: n }) => ({
    type: "attrPresence",
    name: t,
    namespace: n,
    specificity: [0, 1, 0],
  })),
  Gy = x0(
    Re("["),
    pc(
      Sa(C0),
      Vy,
      Sa(zy),
      ({ name: e, namespace: t }, n, { value: r, modifier: u }) => ({
        type: "attrValue",
        name: e,
        namespace: t,
        matcher: n,
        value: r,
        modifier: u,
        specificity: [0, 1, 0],
      })
    ),
    Re("]")
  ),
  Yy = ri(qy, Gy),
  Xy = ri(jy, Wy),
  rg = xa($y, Hy, Yy),
  ig = ut(ri(tg(Xy, hc(rg)), Qm(rg)), (e) => ({
    type: "compound",
    list: e,
    specificity: Dy(e.map((t) => t.specificity)),
  })),
  Zy = xa(
    ut(Re(">"), () => ">"),
    ut(Re("+"), () => "+"),
    ut(Re("~"), () => "~"),
    ft(Re("|"), Re("|"), () => "||")
  ),
  Ky = ri(
    Sa(Zy),
    ut(E0, () => " ")
  ),
  k0 = w0(
    ig,
    ut(Ky, (e) => (t, n) => ({
      type: "compound",
      list: [
        ...n.list,
        {
          type: "combinator",
          combinator: e,
          left: t,
          specificity: t.specificity,
        },
      ],
      specificity: lg(t.specificity, n.specificity),
    })),
    ig
  ),
  gS = w0(
    ut(k0, (e) => ({ type: "list", list: [e] })),
    ut(Sa(Re(",")), () => (e, t) => ({ type: "list", list: [...e.list, t] })),
    k0
  );
function Jy(e, t) {
  if (!(typeof t == "string" || t instanceof String))
    throw new Error(
      "Expected a selector string. Actual input is not a string!"
    );
  let n = Ly(t);
  if (!n.complete)
    throw new Error(
      `The input "${t}" was only partially tokenized, stopped at offset ${n.offset}!
` + ug(t, n.offset)
    );
  let r = Sa(e)({ tokens: n.tokens, options: void 0 }, 0);
  if (!r.matched) throw new Error(`No match for "${t}" input!`);
  if (r.position < n.tokens.length) {
    let u = n.tokens[r.position];
    throw new Error(
      `The input "${t}" was only partially parsed, stopped at offset ${u.offset}!
` + ug(t, u.offset, u.len)
    );
  }
  return r.value;
}
function ug(e, t, n = 1) {
  return `${e.replace(/(\t)|(\r)|(\n)/g, (r, u, s) =>
    u ? "\u2409" : s ? "\u240D" : "\u240A"
  )}
${"".padEnd(t)}${"^".repeat(n)}`;
}
function fg(e) {
  return Jy(k0, e);
}
function bn(e) {
  if (!e.type) throw new Error("This is not an AST node.");
  switch (e.type) {
    case "universal":
      return mc(e.namespace) + "*";
    case "tag":
      return mc(e.namespace) + wa(e.name);
    case "class":
      return "." + wa(e.name);
    case "id":
      return "#" + wa(e.name);
    case "attrPresence":
      return `[${mc(e.namespace)}${wa(e.name)}]`;
    case "attrValue":
      return `[${mc(e.namespace)}${wa(e.name)}${e.matcher}"${Qy(e.value)}"${
        e.modifier ? e.modifier : ""
      }]`;
    case "combinator":
      return bn(e.left) + e.combinator;
    case "compound":
      return e.list.reduce(
        (t, n) => (n.type === "combinator" ? bn(n) + t : t + bn(n)),
        ""
      );
    case "list":
      return e.list.map(bn).join(",");
  }
}
function mc(e) {
  return e || e === "" ? wa(e) + "|" : "";
}
function gc(e) {
  return `\\${e.codePointAt(0).toString(16)} `;
}
function wa(e) {
  return e.replace(
    /(^[0-9])|(^-[0-9])|(^-$)|([-0-9a-zA-Z_]|[^\x00-\x7F])|(\x00)|([\x01-\x1f]|\x7f)|([\s\S])/g,
    (t, n, r, u, s, f, g, v) =>
      n
        ? gc(n)
        : r
        ? "-" + gc(r.slice(1))
        : u
        ? "\\-"
        : s || (f ? "\uFFFD" : g ? gc(g) : "\\" + v)
  );
}
function Qy(e) {
  return e.replace(/(")|(\\)|(\x00)|([\x01-\x1f]|\x7f)/g, (t, n, r, u, s) =>
    n ? '\\"' : r ? "\\\\" : u ? "\uFFFD" : gc(s)
  );
}
function _o(e) {
  if (!e.type) throw new Error("This is not an AST node.");
  switch (e.type) {
    case "compound": {
      e.list.forEach(_o), e.list.sort((t, n) => dg(ag(t), ag(n)));
      break;
    }
    case "combinator": {
      _o(e.left);
      break;
    }
    case "list": {
      e.list.forEach(_o), e.list.sort((t, n) => (bn(t) < bn(n) ? -1 : 1));
      break;
    }
  }
  return e;
}
function ag(e) {
  switch (e.type) {
    case "universal":
      return [1];
    case "tag":
      return [1];
    case "id":
      return [2];
    case "class":
      return [3, e.name];
    case "attrPresence":
      return [4, bn(e)];
    case "attrValue":
      return [5, bn(e)];
    case "combinator":
      return [15, bn(e)];
  }
}
function R0(e, t) {
  return dg(e, t);
}
function dg(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t))
    throw new Error("Arguments must be arrays.");
  let n = e.length < t.length ? e.length : t.length;
  for (let r = 0; r < n; r++) if (e[r] !== t[r]) return e[r] < t[r] ? -1 : 1;
  return e.length - t.length;
}
var xo = class {
  constructor(t) {
    this.branches = ka(t2(t));
  }
  build(t) {
    return t(this.branches);
  }
};
function t2(e) {
  let t = e.length,
    n = new Array(t);
  for (let r = 0; r < t; r++) {
    let [u, s] = e[r],
      f = n2(fg(u));
    n[r] = {
      ast: f,
      terminal: {
        type: "terminal",
        valueContainer: { index: r, value: s, specificity: f.specificity },
      },
    };
  }
  return n;
}
function n2(e) {
  return pg(e), _o(e), e;
}
function pg(e) {
  let t = [];
  e.list.forEach((n) => {
    switch (n.type) {
      case "class":
        t.push({
          matcher: "~=",
          modifier: null,
          name: "class",
          namespace: null,
          specificity: n.specificity,
          type: "attrValue",
          value: n.name,
        });
        break;
      case "id":
        t.push({
          matcher: "=",
          modifier: null,
          name: "id",
          namespace: null,
          specificity: n.specificity,
          type: "attrValue",
          value: n.name,
        });
        break;
      case "combinator":
        pg(n.left), t.push(n);
        break;
      case "universal":
        break;
      default:
        t.push(n);
        break;
    }
  }),
    (e.list = t);
}
function ka(e) {
  let t = [];
  for (; e.length; ) {
    let n = _g(e, (f) => !0, mg),
      { matches: r, nonmatches: u, empty: s } = i2(e, n);
    (e = u), r.length && t.push(u2(n, r)), s.length && t.push(...r2(s));
  }
  return t;
}
function r2(e) {
  let t = [];
  for (let n of e) {
    let r = n.terminal;
    if (r.type === "terminal") t.push(r);
    else {
      let { matches: u, rest: s } = c2(r.cont, (f) => f.type === "terminal");
      u.forEach((f) => t.push(f)), s.length && ((r.cont = s), t.push(r));
    }
  }
  return t;
}
function i2(e, t) {
  let n = [],
    r = [],
    u = [];
  for (let s of e) {
    let f = s.ast.list;
    f.length ? (f.some((v) => mg(v) === t) ? n : r).push(s) : u.push(s);
  }
  return { matches: n, nonmatches: r, empty: u };
}
function mg(e) {
  switch (e.type) {
    case "attrPresence":
      return `attrPresence ${e.name}`;
    case "attrValue":
      return `attrValue ${e.name}`;
    case "combinator":
      return `combinator ${e.combinator}`;
    default:
      return e.type;
  }
}
function u2(e, t) {
  if (e === "tag") return a2(t);
  if (e.startsWith("attrValue ")) return o2(e.substring(10), t);
  if (e.startsWith("attrPresence ")) return s2(e.substring(13), t);
  if (e === "combinator >") return hg(">", t);
  if (e === "combinator +") return hg("+", t);
  throw new Error(`Unsupported selector kind: ${e}`);
}
function a2(e) {
  let t = I0(
    e,
    (r) => r.type === "tag",
    (r) => r.name
  );
  return {
    type: "tagName",
    variants: Object.entries(t).map(([r, u]) => ({
      type: "variant",
      value: r,
      cont: ka(u.items),
    })),
  };
}
function s2(e, t) {
  for (let n of t) gg(n, (r) => r.type === "attrPresence" && r.name === e);
  return { type: "attrPresence", name: e, cont: ka(t) };
}
function o2(e, t) {
  let n = I0(
      t,
      (u) => u.type === "attrValue" && u.name === e,
      (u) => `${u.matcher} ${u.modifier || ""} ${u.value}`
    ),
    r = [];
  for (let u of Object.values(n)) {
    let s = u.oneSimpleSelector,
      f = l2(s),
      g = ka(u.items);
    r.push({
      type: "matcher",
      matcher: s.matcher,
      modifier: s.modifier,
      value: s.value,
      predicate: f,
      cont: g,
    });
  }
  return { type: "attrValue", name: e, matchers: r };
}
function l2(e) {
  if (e.modifier === "i") {
    let t = e.value.toLowerCase();
    switch (e.matcher) {
      case "=":
        return (n) => t === n.toLowerCase();
      case "~=":
        return (n) =>
          n
            .toLowerCase()
            .split(/[ \t]+/)
            .includes(t);
      case "^=":
        return (n) => n.toLowerCase().startsWith(t);
      case "$=":
        return (n) => n.toLowerCase().endsWith(t);
      case "*=":
        return (n) => n.toLowerCase().includes(t);
      case "|=":
        return (n) => {
          let r = n.toLowerCase();
          return t === r || (r.startsWith(t) && r[t.length] === "-");
        };
    }
  } else {
    let t = e.value;
    switch (e.matcher) {
      case "=":
        return (n) => t === n;
      case "~=":
        return (n) => n.split(/[ \t]+/).includes(t);
      case "^=":
        return (n) => n.startsWith(t);
      case "$=":
        return (n) => n.endsWith(t);
      case "*=":
        return (n) => n.includes(t);
      case "|=":
        return (n) => t === n || (n.startsWith(t) && n[t.length] === "-");
    }
  }
}
function hg(e, t) {
  let n = I0(
      t,
      (u) => u.type === "combinator" && u.combinator === e,
      (u) => bn(u.left)
    ),
    r = [];
  for (let u of Object.values(n)) {
    let s = ka(u.items),
      f = u.oneSimpleSelector.left;
    r.push({ ast: f, terminal: { type: "popElement", cont: s } });
  }
  return { type: "pushElement", combinator: e, cont: ka(r) };
}
function I0(e, t, n) {
  let r = {};
  for (; e.length; ) {
    let u = _g(e, t, n),
      s = (x) => t(x) && n(x) === u,
      f = (x) => x.ast.list.some(s),
      { matches: g, rest: v } = f2(e, f),
      b = null;
    for (let x of g) {
      let T = gg(x, s);
      b || (b = T);
    }
    if (b == null) throw new Error("No simple selector is found.");
    (r[u] = { oneSimpleSelector: b, items: g }), (e = v);
  }
  return r;
}
function gg(e, t) {
  let n = e.ast.list,
    r = new Array(n.length),
    u = -1;
  for (let f = n.length; f-- > 0; ) t(n[f]) && ((r[f] = !0), (u = f));
  if (u == -1) throw new Error("Couldn't find the required simple selector.");
  let s = n[u];
  return (e.ast.list = n.filter((f, g) => !r[g])), s;
}
function _g(e, t, n) {
  let r = {};
  for (let f of e) {
    let g = {};
    for (let v of f.ast.list.filter(t)) g[n(v)] = !0;
    for (let v of Object.keys(g)) r[v] ? r[v]++ : (r[v] = 1);
  }
  let u = "",
    s = 0;
  for (let f of Object.entries(r)) f[1] > s && ((u = f[0]), (s = f[1]));
  return u;
}
function c2(e, t) {
  let n = [],
    r = [];
  for (let u of e) t(u) ? n.push(u) : r.push(u);
  return { matches: n, rest: r };
}
function f2(e, t) {
  let n = [],
    r = [];
  for (let u of e) t(u) ? n.push(u) : r.push(u);
  return { matches: n, rest: r };
}
var bc = class {
  constructor(t) {
    this.f = t;
  }
  pickAll(t) {
    return this.f(t);
  }
  pick1(t, n = !1) {
    let r = this.f(t),
      u = r.length;
    if (u === 0) return null;
    if (u === 1) return r[0].value;
    let s = n ? d2 : h2,
      f = r[0];
    for (let g = 1; g < u; g++) {
      let v = r[g];
      s(f, v) && (f = v);
    }
    return f.value;
  }
};
function d2(e, t) {
  let n = R0(t.specificity, e.specificity);
  return n > 0 || (n === 0 && t.index < e.index);
}
function h2(e, t) {
  let n = R0(t.specificity, e.specificity);
  return n > 0 || (n === 0 && t.index > e.index);
}
function A0(e) {
  return new bc(Ta(e));
}
function Ta(e) {
  let t = e.map(p2);
  return (n, ...r) => t.flatMap((u) => u(n, ...r));
}
function p2(e) {
  switch (e.type) {
    case "terminal": {
      let t = [e.valueContainer];
      return (n, ...r) => t;
    }
    case "tagName":
      return m2(e);
    case "attrValue":
      return _2(e);
    case "attrPresence":
      return g2(e);
    case "pushElement":
      return b2(e);
    case "popElement":
      return y2(e);
  }
}
function m2(e) {
  let t = {};
  for (let n of e.variants) t[n.value] = Ta(n.cont);
  return (n, ...r) => {
    let u = t[n.name];
    return u ? u(n, ...r) : [];
  };
}
function g2(e) {
  let t = e.name,
    n = Ta(e.cont);
  return (r, ...u) =>
    Object.prototype.hasOwnProperty.call(r.attribs, t) ? n(r, ...u) : [];
}
function _2(e) {
  let t = [];
  for (let r of e.matchers) {
    let u = r.predicate,
      s = Ta(r.cont);
    t.push((f, g, ...v) => (u(f) ? s(g, ...v) : []));
  }
  let n = e.name;
  return (r, ...u) => {
    let s = r.attribs[n];
    return s || s === "" ? t.flatMap((f) => f(s, r, ...u)) : [];
  };
}
function b2(e) {
  let t = Ta(e.cont),
    n = e.combinator === "+" ? bg : v2;
  return (r, ...u) => {
    let s = n(r);
    return s === null ? [] : t(s, r, ...u);
  };
}
var bg = (e) => {
    let t = e.prev;
    return t === null ? null : dr(t) ? t : bg(t);
  },
  v2 = (e) => {
    let t = e.parent;
    return t && dr(t) ? t : null;
  };
function y2(e) {
  let t = Ta(e.cont);
  return (n, r, ...u) => t(r, ...u);
}
var vc = new Uint16Array(
  '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'
    .split("")
    .map((e) => e.charCodeAt(0))
);
var yc = new Uint16Array(
  "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022"
    .split("")
    .map((e) => e.charCodeAt(0))
);
var L0,
  x2 = new Map([
    [0, 65533],
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376],
  ]),
  Ea =
    (L0 = String.fromCodePoint) !== null && L0 !== void 0
      ? L0
      : function (e) {
          let t = "";
          return (
            e > 65535 &&
              ((e -= 65536),
              (t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
              (e = 56320 | (e & 1023))),
            (t += String.fromCharCode(e)),
            t
          );
        };
function wo(e) {
  var t;
  return (e >= 55296 && e <= 57343) || e > 1114111
    ? 65533
    : (t = x2.get(e)) !== null && t !== void 0
    ? t
    : e;
}
var Ke;
(function (e) {
  (e[(e.NUM = 35)] = "NUM"),
    (e[(e.SEMI = 59)] = "SEMI"),
    (e[(e.EQUALS = 61)] = "EQUALS"),
    (e[(e.ZERO = 48)] = "ZERO"),
    (e[(e.NINE = 57)] = "NINE"),
    (e[(e.LOWER_A = 97)] = "LOWER_A"),
    (e[(e.LOWER_F = 102)] = "LOWER_F"),
    (e[(e.LOWER_X = 120)] = "LOWER_X"),
    (e[(e.LOWER_Z = 122)] = "LOWER_Z"),
    (e[(e.UPPER_A = 65)] = "UPPER_A"),
    (e[(e.UPPER_F = 70)] = "UPPER_F"),
    (e[(e.UPPER_Z = 90)] = "UPPER_Z");
})(Ke || (Ke = {}));
var w2 = 32,
  Yt;
(function (e) {
  (e[(e.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
    (e[(e.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
    (e[(e.JUMP_TABLE = 127)] = "JUMP_TABLE");
})(Yt || (Yt = {}));
function O0(e) {
  return e >= Ke.ZERO && e <= Ke.NINE;
}
function S2(e) {
  return (
    (e >= Ke.UPPER_A && e <= Ke.UPPER_F) || (e >= Ke.LOWER_A && e <= Ke.LOWER_F)
  );
}
function k2(e) {
  return (
    (e >= Ke.UPPER_A && e <= Ke.UPPER_Z) ||
    (e >= Ke.LOWER_A && e <= Ke.LOWER_Z) ||
    O0(e)
  );
}
function T2(e) {
  return e === Ke.EQUALS || k2(e);
}
var Ze;
(function (e) {
  (e[(e.EntityStart = 0)] = "EntityStart"),
    (e[(e.NumericStart = 1)] = "NumericStart"),
    (e[(e.NumericDecimal = 2)] = "NumericDecimal"),
    (e[(e.NumericHex = 3)] = "NumericHex"),
    (e[(e.NamedEntity = 4)] = "NamedEntity");
})(Ze || (Ze = {}));
var hr;
(function (e) {
  (e[(e.Legacy = 0)] = "Legacy"),
    (e[(e.Strict = 1)] = "Strict"),
    (e[(e.Attribute = 2)] = "Attribute");
})(hr || (hr = {}));
var xc = class {
  constructor(t, n, r) {
    (this.decodeTree = t),
      (this.emitCodePoint = n),
      (this.errors = r),
      (this.state = Ze.EntityStart),
      (this.consumed = 1),
      (this.result = 0),
      (this.treeIndex = 0),
      (this.excess = 1),
      (this.decodeMode = hr.Strict);
  }
  startEntity(t) {
    (this.decodeMode = t),
      (this.state = Ze.EntityStart),
      (this.result = 0),
      (this.treeIndex = 0),
      (this.excess = 1),
      (this.consumed = 1);
  }
  write(t, n) {
    switch (this.state) {
      case Ze.EntityStart:
        return t.charCodeAt(n) === Ke.NUM
          ? ((this.state = Ze.NumericStart),
            (this.consumed += 1),
            this.stateNumericStart(t, n + 1))
          : ((this.state = Ze.NamedEntity), this.stateNamedEntity(t, n));
      case Ze.NumericStart:
        return this.stateNumericStart(t, n);
      case Ze.NumericDecimal:
        return this.stateNumericDecimal(t, n);
      case Ze.NumericHex:
        return this.stateNumericHex(t, n);
      case Ze.NamedEntity:
        return this.stateNamedEntity(t, n);
    }
  }
  stateNumericStart(t, n) {
    return n >= t.length
      ? -1
      : (t.charCodeAt(n) | w2) === Ke.LOWER_X
      ? ((this.state = Ze.NumericHex),
        (this.consumed += 1),
        this.stateNumericHex(t, n + 1))
      : ((this.state = Ze.NumericDecimal), this.stateNumericDecimal(t, n));
  }
  addToNumericResult(t, n, r, u) {
    if (n !== r) {
      let s = r - n;
      (this.result =
        this.result * Math.pow(u, s) + parseInt(t.substr(n, s), u)),
        (this.consumed += s);
    }
  }
  stateNumericHex(t, n) {
    let r = n;
    for (; n < t.length; ) {
      let u = t.charCodeAt(n);
      if (O0(u) || S2(u)) n += 1;
      else
        return (
          this.addToNumericResult(t, r, n, 16), this.emitNumericEntity(u, 3)
        );
    }
    return this.addToNumericResult(t, r, n, 16), -1;
  }
  stateNumericDecimal(t, n) {
    let r = n;
    for (; n < t.length; ) {
      let u = t.charCodeAt(n);
      if (O0(u)) n += 1;
      else
        return (
          this.addToNumericResult(t, r, n, 10), this.emitNumericEntity(u, 2)
        );
    }
    return this.addToNumericResult(t, r, n, 10), -1;
  }
  emitNumericEntity(t, n) {
    var r;
    if (this.consumed <= n)
      return (
        (r = this.errors) === null ||
          r === void 0 ||
          r.absenceOfDigitsInNumericCharacterReference(this.consumed),
        0
      );
    if (t === Ke.SEMI) this.consumed += 1;
    else if (this.decodeMode === hr.Strict) return 0;
    return (
      this.emitCodePoint(wo(this.result), this.consumed),
      this.errors &&
        (t !== Ke.SEMI && this.errors.missingSemicolonAfterCharacterReference(),
        this.errors.validateNumericCharacterReference(this.result)),
      this.consumed
    );
  }
  stateNamedEntity(t, n) {
    let { decodeTree: r } = this,
      u = r[this.treeIndex],
      s = (u & Yt.VALUE_LENGTH) >> 14;
    for (; n < t.length; n++, this.excess++) {
      let f = t.charCodeAt(n);
      if (
        ((this.treeIndex = D0(r, u, this.treeIndex + Math.max(1, s), f)),
        this.treeIndex < 0)
      )
        return this.result === 0 ||
          (this.decodeMode === hr.Attribute && (s === 0 || T2(f)))
          ? 0
          : this.emitNotTerminatedNamedEntity();
      if (
        ((u = r[this.treeIndex]), (s = (u & Yt.VALUE_LENGTH) >> 14), s !== 0)
      ) {
        if (f === Ke.SEMI)
          return this.emitNamedEntityData(
            this.treeIndex,
            s,
            this.consumed + this.excess
          );
        this.decodeMode !== hr.Strict &&
          ((this.result = this.treeIndex),
          (this.consumed += this.excess),
          (this.excess = 0));
      }
    }
    return -1;
  }
  emitNotTerminatedNamedEntity() {
    var t;
    let { result: n, decodeTree: r } = this,
      u = (r[n] & Yt.VALUE_LENGTH) >> 14;
    return (
      this.emitNamedEntityData(n, u, this.consumed),
      (t = this.errors) === null ||
        t === void 0 ||
        t.missingSemicolonAfterCharacterReference(),
      this.consumed
    );
  }
  emitNamedEntityData(t, n, r) {
    let { decodeTree: u } = this;
    return (
      this.emitCodePoint(n === 1 ? u[t] & ~Yt.VALUE_LENGTH : u[t + 1], r),
      n === 3 && this.emitCodePoint(u[t + 2], r),
      r
    );
  }
  end() {
    var t;
    switch (this.state) {
      case Ze.NamedEntity:
        return this.result !== 0 &&
          (this.decodeMode !== hr.Attribute || this.result === this.treeIndex)
          ? this.emitNotTerminatedNamedEntity()
          : 0;
      case Ze.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case Ze.NumericHex:
        return this.emitNumericEntity(0, 3);
      case Ze.NumericStart:
        return (
          (t = this.errors) === null ||
            t === void 0 ||
            t.absenceOfDigitsInNumericCharacterReference(this.consumed),
          0
        );
      case Ze.EntityStart:
        return 0;
    }
  }
};
function vg(e) {
  let t = "",
    n = new xc(e, (r) => (t += Ea(r)));
  return function (u, s) {
    let f = 0,
      g = 0;
    for (; (g = u.indexOf("&", g)) >= 0; ) {
      (t += u.slice(f, g)), n.startEntity(s);
      let b = n.write(u, g + 1);
      if (b < 0) {
        f = g + n.end();
        break;
      }
      (f = g + b), (g = b === 0 ? f + 1 : f);
    }
    let v = t + u.slice(f);
    return (t = ""), v;
  };
}
function D0(e, t, n, r) {
  let u = (t & Yt.BRANCH_LENGTH) >> 7,
    s = t & Yt.JUMP_TABLE;
  if (u === 0) return s !== 0 && r === s ? n : -1;
  if (s) {
    let v = r - s;
    return v < 0 || v >= u ? -1 : e[n + v] - 1;
  }
  let f = n,
    g = f + u - 1;
  for (; f <= g; ) {
    let v = (f + g) >>> 1,
      b = e[v];
    if (b < r) f = v + 1;
    else if (b > r) g = v - 1;
    else return e[v + u];
  }
  return -1;
}
var IS = vg(vc),
  AS = vg(yc);
var W;
(function (e) {
  (e[(e.Tab = 9)] = "Tab"),
    (e[(e.NewLine = 10)] = "NewLine"),
    (e[(e.FormFeed = 12)] = "FormFeed"),
    (e[(e.CarriageReturn = 13)] = "CarriageReturn"),
    (e[(e.Space = 32)] = "Space"),
    (e[(e.ExclamationMark = 33)] = "ExclamationMark"),
    (e[(e.Number = 35)] = "Number"),
    (e[(e.Amp = 38)] = "Amp"),
    (e[(e.SingleQuote = 39)] = "SingleQuote"),
    (e[(e.DoubleQuote = 34)] = "DoubleQuote"),
    (e[(e.Dash = 45)] = "Dash"),
    (e[(e.Slash = 47)] = "Slash"),
    (e[(e.Zero = 48)] = "Zero"),
    (e[(e.Nine = 57)] = "Nine"),
    (e[(e.Semi = 59)] = "Semi"),
    (e[(e.Lt = 60)] = "Lt"),
    (e[(e.Eq = 61)] = "Eq"),
    (e[(e.Gt = 62)] = "Gt"),
    (e[(e.Questionmark = 63)] = "Questionmark"),
    (e[(e.UpperA = 65)] = "UpperA"),
    (e[(e.LowerA = 97)] = "LowerA"),
    (e[(e.UpperF = 70)] = "UpperF"),
    (e[(e.LowerF = 102)] = "LowerF"),
    (e[(e.UpperZ = 90)] = "UpperZ"),
    (e[(e.LowerZ = 122)] = "LowerZ"),
    (e[(e.LowerX = 120)] = "LowerX"),
    (e[(e.OpeningSquareBracket = 91)] = "OpeningSquareBracket");
})(W || (W = {}));
var A;
(function (e) {
  (e[(e.Text = 1)] = "Text"),
    (e[(e.BeforeTagName = 2)] = "BeforeTagName"),
    (e[(e.InTagName = 3)] = "InTagName"),
    (e[(e.InSelfClosingTag = 4)] = "InSelfClosingTag"),
    (e[(e.BeforeClosingTagName = 5)] = "BeforeClosingTagName"),
    (e[(e.InClosingTagName = 6)] = "InClosingTagName"),
    (e[(e.AfterClosingTagName = 7)] = "AfterClosingTagName"),
    (e[(e.BeforeAttributeName = 8)] = "BeforeAttributeName"),
    (e[(e.InAttributeName = 9)] = "InAttributeName"),
    (e[(e.AfterAttributeName = 10)] = "AfterAttributeName"),
    (e[(e.BeforeAttributeValue = 11)] = "BeforeAttributeValue"),
    (e[(e.InAttributeValueDq = 12)] = "InAttributeValueDq"),
    (e[(e.InAttributeValueSq = 13)] = "InAttributeValueSq"),
    (e[(e.InAttributeValueNq = 14)] = "InAttributeValueNq"),
    (e[(e.BeforeDeclaration = 15)] = "BeforeDeclaration"),
    (e[(e.InDeclaration = 16)] = "InDeclaration"),
    (e[(e.InProcessingInstruction = 17)] = "InProcessingInstruction"),
    (e[(e.BeforeComment = 18)] = "BeforeComment"),
    (e[(e.CDATASequence = 19)] = "CDATASequence"),
    (e[(e.InSpecialComment = 20)] = "InSpecialComment"),
    (e[(e.InCommentLike = 21)] = "InCommentLike"),
    (e[(e.BeforeSpecialS = 22)] = "BeforeSpecialS"),
    (e[(e.SpecialStartSequence = 23)] = "SpecialStartSequence"),
    (e[(e.InSpecialTag = 24)] = "InSpecialTag"),
    (e[(e.BeforeEntity = 25)] = "BeforeEntity"),
    (e[(e.BeforeNumericEntity = 26)] = "BeforeNumericEntity"),
    (e[(e.InNamedEntity = 27)] = "InNamedEntity"),
    (e[(e.InNumericEntity = 28)] = "InNumericEntity"),
    (e[(e.InHexEntity = 29)] = "InHexEntity");
})(A || (A = {}));
function pr(e) {
  return (
    e === W.Space ||
    e === W.NewLine ||
    e === W.Tab ||
    e === W.FormFeed ||
    e === W.CarriageReturn
  );
}
function wc(e) {
  return e === W.Slash || e === W.Gt || pr(e);
}
function yg(e) {
  return e >= W.Zero && e <= W.Nine;
}
function E2(e) {
  return (e >= W.LowerA && e <= W.LowerZ) || (e >= W.UpperA && e <= W.UpperZ);
}
function C2(e) {
  return (e >= W.UpperA && e <= W.UpperF) || (e >= W.LowerA && e <= W.LowerF);
}
var vn;
(function (e) {
  (e[(e.NoValue = 0)] = "NoValue"),
    (e[(e.Unquoted = 1)] = "Unquoted"),
    (e[(e.Single = 2)] = "Single"),
    (e[(e.Double = 3)] = "Double");
})(vn || (vn = {}));
var At = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    CdataEnd: new Uint8Array([93, 93, 62]),
    CommentEnd: new Uint8Array([45, 45, 62]),
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  },
  Ca = class {
    constructor({ xmlMode: t = !1, decodeEntities: n = !0 }, r) {
      (this.cbs = r),
        (this.state = A.Text),
        (this.buffer = ""),
        (this.sectionStart = 0),
        (this.index = 0),
        (this.baseState = A.Text),
        (this.isSpecial = !1),
        (this.running = !0),
        (this.offset = 0),
        (this.currentSequence = void 0),
        (this.sequenceIndex = 0),
        (this.trieIndex = 0),
        (this.trieCurrent = 0),
        (this.entityResult = 0),
        (this.entityExcess = 0),
        (this.xmlMode = t),
        (this.decodeEntities = n),
        (this.entityTrie = t ? yc : vc);
    }
    reset() {
      (this.state = A.Text),
        (this.buffer = ""),
        (this.sectionStart = 0),
        (this.index = 0),
        (this.baseState = A.Text),
        (this.currentSequence = void 0),
        (this.running = !0),
        (this.offset = 0);
    }
    write(t) {
      (this.offset += this.buffer.length), (this.buffer = t), this.parse();
    }
    end() {
      this.running && this.finish();
    }
    pause() {
      this.running = !1;
    }
    resume() {
      (this.running = !0),
        this.index < this.buffer.length + this.offset && this.parse();
    }
    getIndex() {
      return this.index;
    }
    getSectionStart() {
      return this.sectionStart;
    }
    stateText(t) {
      t === W.Lt || (!this.decodeEntities && this.fastForwardTo(W.Lt))
        ? (this.index > this.sectionStart &&
            this.cbs.ontext(this.sectionStart, this.index),
          (this.state = A.BeforeTagName),
          (this.sectionStart = this.index))
        : this.decodeEntities && t === W.Amp && (this.state = A.BeforeEntity);
    }
    stateSpecialStartSequence(t) {
      let n = this.sequenceIndex === this.currentSequence.length;
      if (!(n ? wc(t) : (t | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
      else if (!n) {
        this.sequenceIndex++;
        return;
      }
      (this.sequenceIndex = 0),
        (this.state = A.InTagName),
        this.stateInTagName(t);
    }
    stateInSpecialTag(t) {
      if (this.sequenceIndex === this.currentSequence.length) {
        if (t === W.Gt || pr(t)) {
          let n = this.index - this.currentSequence.length;
          if (this.sectionStart < n) {
            let r = this.index;
            (this.index = n),
              this.cbs.ontext(this.sectionStart, n),
              (this.index = r);
          }
          (this.isSpecial = !1),
            (this.sectionStart = n + 2),
            this.stateInClosingTagName(t);
          return;
        }
        this.sequenceIndex = 0;
      }
      (t | 32) === this.currentSequence[this.sequenceIndex]
        ? (this.sequenceIndex += 1)
        : this.sequenceIndex === 0
        ? this.currentSequence === At.TitleEnd
          ? this.decodeEntities && t === W.Amp && (this.state = A.BeforeEntity)
          : this.fastForwardTo(W.Lt) && (this.sequenceIndex = 1)
        : (this.sequenceIndex = +(t === W.Lt));
    }
    stateCDATASequence(t) {
      t === At.Cdata[this.sequenceIndex]
        ? ++this.sequenceIndex === At.Cdata.length &&
          ((this.state = A.InCommentLike),
          (this.currentSequence = At.CdataEnd),
          (this.sequenceIndex = 0),
          (this.sectionStart = this.index + 1))
        : ((this.sequenceIndex = 0),
          (this.state = A.InDeclaration),
          this.stateInDeclaration(t));
    }
    fastForwardTo(t) {
      for (; ++this.index < this.buffer.length + this.offset; )
        if (this.buffer.charCodeAt(this.index - this.offset) === t) return !0;
      return (this.index = this.buffer.length + this.offset - 1), !1;
    }
    stateInCommentLike(t) {
      t === this.currentSequence[this.sequenceIndex]
        ? ++this.sequenceIndex === this.currentSequence.length &&
          (this.currentSequence === At.CdataEnd
            ? this.cbs.oncdata(this.sectionStart, this.index, 2)
            : this.cbs.oncomment(this.sectionStart, this.index, 2),
          (this.sequenceIndex = 0),
          (this.sectionStart = this.index + 1),
          (this.state = A.Text))
        : this.sequenceIndex === 0
        ? this.fastForwardTo(this.currentSequence[0]) &&
          (this.sequenceIndex = 1)
        : t !== this.currentSequence[this.sequenceIndex - 1] &&
          (this.sequenceIndex = 0);
    }
    isTagStartChar(t) {
      return this.xmlMode ? !wc(t) : E2(t);
    }
    startSpecial(t, n) {
      (this.isSpecial = !0),
        (this.currentSequence = t),
        (this.sequenceIndex = n),
        (this.state = A.SpecialStartSequence);
    }
    stateBeforeTagName(t) {
      if (t === W.ExclamationMark)
        (this.state = A.BeforeDeclaration),
          (this.sectionStart = this.index + 1);
      else if (t === W.Questionmark)
        (this.state = A.InProcessingInstruction),
          (this.sectionStart = this.index + 1);
      else if (this.isTagStartChar(t)) {
        let n = t | 32;
        (this.sectionStart = this.index),
          !this.xmlMode && n === At.TitleEnd[2]
            ? this.startSpecial(At.TitleEnd, 3)
            : (this.state =
                !this.xmlMode && n === At.ScriptEnd[2]
                  ? A.BeforeSpecialS
                  : A.InTagName);
      } else
        t === W.Slash
          ? (this.state = A.BeforeClosingTagName)
          : ((this.state = A.Text), this.stateText(t));
    }
    stateInTagName(t) {
      wc(t) &&
        (this.cbs.onopentagname(this.sectionStart, this.index),
        (this.sectionStart = -1),
        (this.state = A.BeforeAttributeName),
        this.stateBeforeAttributeName(t));
    }
    stateBeforeClosingTagName(t) {
      pr(t) ||
        (t === W.Gt
          ? (this.state = A.Text)
          : ((this.state = this.isTagStartChar(t)
              ? A.InClosingTagName
              : A.InSpecialComment),
            (this.sectionStart = this.index)));
    }
    stateInClosingTagName(t) {
      (t === W.Gt || pr(t)) &&
        (this.cbs.onclosetag(this.sectionStart, this.index),
        (this.sectionStart = -1),
        (this.state = A.AfterClosingTagName),
        this.stateAfterClosingTagName(t));
    }
    stateAfterClosingTagName(t) {
      (t === W.Gt || this.fastForwardTo(W.Gt)) &&
        ((this.state = A.Text),
        (this.baseState = A.Text),
        (this.sectionStart = this.index + 1));
    }
    stateBeforeAttributeName(t) {
      t === W.Gt
        ? (this.cbs.onopentagend(this.index),
          this.isSpecial
            ? ((this.state = A.InSpecialTag), (this.sequenceIndex = 0))
            : (this.state = A.Text),
          (this.baseState = this.state),
          (this.sectionStart = this.index + 1))
        : t === W.Slash
        ? (this.state = A.InSelfClosingTag)
        : pr(t) ||
          ((this.state = A.InAttributeName), (this.sectionStart = this.index));
    }
    stateInSelfClosingTag(t) {
      t === W.Gt
        ? (this.cbs.onselfclosingtag(this.index),
          (this.state = A.Text),
          (this.baseState = A.Text),
          (this.sectionStart = this.index + 1),
          (this.isSpecial = !1))
        : pr(t) ||
          ((this.state = A.BeforeAttributeName),
          this.stateBeforeAttributeName(t));
    }
    stateInAttributeName(t) {
      (t === W.Eq || wc(t)) &&
        (this.cbs.onattribname(this.sectionStart, this.index),
        (this.sectionStart = -1),
        (this.state = A.AfterAttributeName),
        this.stateAfterAttributeName(t));
    }
    stateAfterAttributeName(t) {
      t === W.Eq
        ? (this.state = A.BeforeAttributeValue)
        : t === W.Slash || t === W.Gt
        ? (this.cbs.onattribend(vn.NoValue, this.index),
          (this.state = A.BeforeAttributeName),
          this.stateBeforeAttributeName(t))
        : pr(t) ||
          (this.cbs.onattribend(vn.NoValue, this.index),
          (this.state = A.InAttributeName),
          (this.sectionStart = this.index));
    }
    stateBeforeAttributeValue(t) {
      t === W.DoubleQuote
        ? ((this.state = A.InAttributeValueDq),
          (this.sectionStart = this.index + 1))
        : t === W.SingleQuote
        ? ((this.state = A.InAttributeValueSq),
          (this.sectionStart = this.index + 1))
        : pr(t) ||
          ((this.sectionStart = this.index),
          (this.state = A.InAttributeValueNq),
          this.stateInAttributeValueNoQuotes(t));
    }
    handleInAttributeValue(t, n) {
      t === n || (!this.decodeEntities && this.fastForwardTo(n))
        ? (this.cbs.onattribdata(this.sectionStart, this.index),
          (this.sectionStart = -1),
          this.cbs.onattribend(
            n === W.DoubleQuote ? vn.Double : vn.Single,
            this.index
          ),
          (this.state = A.BeforeAttributeName))
        : this.decodeEntities &&
          t === W.Amp &&
          ((this.baseState = this.state), (this.state = A.BeforeEntity));
    }
    stateInAttributeValueDoubleQuotes(t) {
      this.handleInAttributeValue(t, W.DoubleQuote);
    }
    stateInAttributeValueSingleQuotes(t) {
      this.handleInAttributeValue(t, W.SingleQuote);
    }
    stateInAttributeValueNoQuotes(t) {
      pr(t) || t === W.Gt
        ? (this.cbs.onattribdata(this.sectionStart, this.index),
          (this.sectionStart = -1),
          this.cbs.onattribend(vn.Unquoted, this.index),
          (this.state = A.BeforeAttributeName),
          this.stateBeforeAttributeName(t))
        : this.decodeEntities &&
          t === W.Amp &&
          ((this.baseState = this.state), (this.state = A.BeforeEntity));
    }
    stateBeforeDeclaration(t) {
      t === W.OpeningSquareBracket
        ? ((this.state = A.CDATASequence), (this.sequenceIndex = 0))
        : (this.state = t === W.Dash ? A.BeforeComment : A.InDeclaration);
    }
    stateInDeclaration(t) {
      (t === W.Gt || this.fastForwardTo(W.Gt)) &&
        (this.cbs.ondeclaration(this.sectionStart, this.index),
        (this.state = A.Text),
        (this.sectionStart = this.index + 1));
    }
    stateInProcessingInstruction(t) {
      (t === W.Gt || this.fastForwardTo(W.Gt)) &&
        (this.cbs.onprocessinginstruction(this.sectionStart, this.index),
        (this.state = A.Text),
        (this.sectionStart = this.index + 1));
    }
    stateBeforeComment(t) {
      t === W.Dash
        ? ((this.state = A.InCommentLike),
          (this.currentSequence = At.CommentEnd),
          (this.sequenceIndex = 2),
          (this.sectionStart = this.index + 1))
        : (this.state = A.InDeclaration);
    }
    stateInSpecialComment(t) {
      (t === W.Gt || this.fastForwardTo(W.Gt)) &&
        (this.cbs.oncomment(this.sectionStart, this.index, 0),
        (this.state = A.Text),
        (this.sectionStart = this.index + 1));
    }
    stateBeforeSpecialS(t) {
      let n = t | 32;
      n === At.ScriptEnd[3]
        ? this.startSpecial(At.ScriptEnd, 4)
        : n === At.StyleEnd[3]
        ? this.startSpecial(At.StyleEnd, 4)
        : ((this.state = A.InTagName), this.stateInTagName(t));
    }
    stateBeforeEntity(t) {
      (this.entityExcess = 1),
        (this.entityResult = 0),
        t === W.Number
          ? (this.state = A.BeforeNumericEntity)
          : t === W.Amp ||
            ((this.trieIndex = 0),
            (this.trieCurrent = this.entityTrie[0]),
            (this.state = A.InNamedEntity),
            this.stateInNamedEntity(t));
    }
    stateInNamedEntity(t) {
      if (
        ((this.entityExcess += 1),
        (this.trieIndex = D0(
          this.entityTrie,
          this.trieCurrent,
          this.trieIndex + 1,
          t
        )),
        this.trieIndex < 0)
      ) {
        this.emitNamedEntity(), this.index--;
        return;
      }
      this.trieCurrent = this.entityTrie[this.trieIndex];
      let n = this.trieCurrent & Yt.VALUE_LENGTH;
      if (n) {
        let r = (n >> 14) - 1;
        if (!this.allowLegacyEntity() && t !== W.Semi) this.trieIndex += r;
        else {
          let u = this.index - this.entityExcess + 1;
          u > this.sectionStart && this.emitPartial(this.sectionStart, u),
            (this.entityResult = this.trieIndex),
            (this.trieIndex += r),
            (this.entityExcess = 0),
            (this.sectionStart = this.index + 1),
            r === 0 && this.emitNamedEntity();
        }
      }
    }
    emitNamedEntity() {
      if (((this.state = this.baseState), this.entityResult === 0)) return;
      switch ((this.entityTrie[this.entityResult] & Yt.VALUE_LENGTH) >> 14) {
        case 1: {
          this.emitCodePoint(
            this.entityTrie[this.entityResult] & ~Yt.VALUE_LENGTH
          );
          break;
        }
        case 2: {
          this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
          break;
        }
        case 3:
          this.emitCodePoint(this.entityTrie[this.entityResult + 1]),
            this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
      }
    }
    stateBeforeNumericEntity(t) {
      (t | 32) === W.LowerX
        ? (this.entityExcess++, (this.state = A.InHexEntity))
        : ((this.state = A.InNumericEntity), this.stateInNumericEntity(t));
    }
    emitNumericEntity(t) {
      let n = this.index - this.entityExcess - 1;
      n + 2 + +(this.state === A.InHexEntity) !== this.index &&
        (n > this.sectionStart && this.emitPartial(this.sectionStart, n),
        (this.sectionStart = this.index + Number(t)),
        this.emitCodePoint(wo(this.entityResult))),
        (this.state = this.baseState);
    }
    stateInNumericEntity(t) {
      t === W.Semi
        ? this.emitNumericEntity(!0)
        : yg(t)
        ? ((this.entityResult = this.entityResult * 10 + (t - W.Zero)),
          this.entityExcess++)
        : (this.allowLegacyEntity()
            ? this.emitNumericEntity(!1)
            : (this.state = this.baseState),
          this.index--);
    }
    stateInHexEntity(t) {
      t === W.Semi
        ? this.emitNumericEntity(!0)
        : yg(t)
        ? ((this.entityResult = this.entityResult * 16 + (t - W.Zero)),
          this.entityExcess++)
        : C2(t)
        ? ((this.entityResult =
            this.entityResult * 16 + ((t | 32) - W.LowerA + 10)),
          this.entityExcess++)
        : (this.allowLegacyEntity()
            ? this.emitNumericEntity(!1)
            : (this.state = this.baseState),
          this.index--);
    }
    allowLegacyEntity() {
      return (
        !this.xmlMode &&
        (this.baseState === A.Text || this.baseState === A.InSpecialTag)
      );
    }
    cleanup() {
      this.running &&
        this.sectionStart !== this.index &&
        (this.state === A.Text ||
        (this.state === A.InSpecialTag && this.sequenceIndex === 0)
          ? (this.cbs.ontext(this.sectionStart, this.index),
            (this.sectionStart = this.index))
          : (this.state === A.InAttributeValueDq ||
              this.state === A.InAttributeValueSq ||
              this.state === A.InAttributeValueNq) &&
            (this.cbs.onattribdata(this.sectionStart, this.index),
            (this.sectionStart = this.index)));
    }
    shouldContinue() {
      return this.index < this.buffer.length + this.offset && this.running;
    }
    parse() {
      for (; this.shouldContinue(); ) {
        let t = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
          case A.Text: {
            this.stateText(t);
            break;
          }
          case A.SpecialStartSequence: {
            this.stateSpecialStartSequence(t);
            break;
          }
          case A.InSpecialTag: {
            this.stateInSpecialTag(t);
            break;
          }
          case A.CDATASequence: {
            this.stateCDATASequence(t);
            break;
          }
          case A.InAttributeValueDq: {
            this.stateInAttributeValueDoubleQuotes(t);
            break;
          }
          case A.InAttributeName: {
            this.stateInAttributeName(t);
            break;
          }
          case A.InCommentLike: {
            this.stateInCommentLike(t);
            break;
          }
          case A.InSpecialComment: {
            this.stateInSpecialComment(t);
            break;
          }
          case A.BeforeAttributeName: {
            this.stateBeforeAttributeName(t);
            break;
          }
          case A.InTagName: {
            this.stateInTagName(t);
            break;
          }
          case A.InClosingTagName: {
            this.stateInClosingTagName(t);
            break;
          }
          case A.BeforeTagName: {
            this.stateBeforeTagName(t);
            break;
          }
          case A.AfterAttributeName: {
            this.stateAfterAttributeName(t);
            break;
          }
          case A.InAttributeValueSq: {
            this.stateInAttributeValueSingleQuotes(t);
            break;
          }
          case A.BeforeAttributeValue: {
            this.stateBeforeAttributeValue(t);
            break;
          }
          case A.BeforeClosingTagName: {
            this.stateBeforeClosingTagName(t);
            break;
          }
          case A.AfterClosingTagName: {
            this.stateAfterClosingTagName(t);
            break;
          }
          case A.BeforeSpecialS: {
            this.stateBeforeSpecialS(t);
            break;
          }
          case A.InAttributeValueNq: {
            this.stateInAttributeValueNoQuotes(t);
            break;
          }
          case A.InSelfClosingTag: {
            this.stateInSelfClosingTag(t);
            break;
          }
          case A.InDeclaration: {
            this.stateInDeclaration(t);
            break;
          }
          case A.BeforeDeclaration: {
            this.stateBeforeDeclaration(t);
            break;
          }
          case A.BeforeComment: {
            this.stateBeforeComment(t);
            break;
          }
          case A.InProcessingInstruction: {
            this.stateInProcessingInstruction(t);
            break;
          }
          case A.InNamedEntity: {
            this.stateInNamedEntity(t);
            break;
          }
          case A.BeforeEntity: {
            this.stateBeforeEntity(t);
            break;
          }
          case A.InHexEntity: {
            this.stateInHexEntity(t);
            break;
          }
          case A.InNumericEntity: {
            this.stateInNumericEntity(t);
            break;
          }
          default:
            this.stateBeforeNumericEntity(t);
        }
        this.index++;
      }
      this.cleanup();
    }
    finish() {
      this.state === A.InNamedEntity && this.emitNamedEntity(),
        this.sectionStart < this.index && this.handleTrailingData(),
        this.cbs.onend();
    }
    handleTrailingData() {
      let t = this.buffer.length + this.offset;
      this.state === A.InCommentLike
        ? this.currentSequence === At.CdataEnd
          ? this.cbs.oncdata(this.sectionStart, t, 0)
          : this.cbs.oncomment(this.sectionStart, t, 0)
        : this.state === A.InNumericEntity && this.allowLegacyEntity()
        ? this.emitNumericEntity(!1)
        : this.state === A.InHexEntity && this.allowLegacyEntity()
        ? this.emitNumericEntity(!1)
        : this.state === A.InTagName ||
          this.state === A.BeforeAttributeName ||
          this.state === A.BeforeAttributeValue ||
          this.state === A.AfterAttributeName ||
          this.state === A.InAttributeName ||
          this.state === A.InAttributeValueSq ||
          this.state === A.InAttributeValueDq ||
          this.state === A.InAttributeValueNq ||
          this.state === A.InClosingTagName ||
          this.cbs.ontext(this.sectionStart, t);
    }
    emitPartial(t, n) {
      this.baseState !== A.Text && this.baseState !== A.InSpecialTag
        ? this.cbs.onattribdata(t, n)
        : this.cbs.ontext(t, n);
    }
    emitCodePoint(t) {
      this.baseState !== A.Text && this.baseState !== A.InSpecialTag
        ? this.cbs.onattribentity(t)
        : this.cbs.ontextentity(t);
    }
  };
var Ra = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea",
  ]),
  pe = new Set(["p"]),
  xg = new Set(["thead", "tbody"]),
  wg = new Set(["dd", "dt"]),
  Sg = new Set(["rt", "rp"]),
  R2 = new Map([
    ["tr", new Set(["tr", "th", "td"])],
    ["th", new Set(["th"])],
    ["td", new Set(["thead", "th", "td"])],
    ["body", new Set(["head", "link", "script"])],
    ["li", new Set(["li"])],
    ["p", pe],
    ["h1", pe],
    ["h2", pe],
    ["h3", pe],
    ["h4", pe],
    ["h5", pe],
    ["h6", pe],
    ["select", Ra],
    ["input", Ra],
    ["output", Ra],
    ["button", Ra],
    ["datalist", Ra],
    ["textarea", Ra],
    ["option", new Set(["option"])],
    ["optgroup", new Set(["optgroup", "option"])],
    ["dd", wg],
    ["dt", wg],
    ["address", pe],
    ["article", pe],
    ["aside", pe],
    ["blockquote", pe],
    ["details", pe],
    ["div", pe],
    ["dl", pe],
    ["fieldset", pe],
    ["figcaption", pe],
    ["figure", pe],
    ["footer", pe],
    ["form", pe],
    ["header", pe],
    ["hr", pe],
    ["main", pe],
    ["nav", pe],
    ["ol", pe],
    ["pre", pe],
    ["section", pe],
    ["table", pe],
    ["ul", pe],
    ["rt", Sg],
    ["rp", Sg],
    ["tbody", xg],
    ["tfoot", xg],
  ]),
  I2 = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]),
  kg = new Set(["math", "svg"]),
  Tg = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title",
  ]),
  A2 = /\s|\//,
  So = class {
    constructor(t, n = {}) {
      var r, u, s, f, g;
      (this.options = n),
        (this.startIndex = 0),
        (this.endIndex = 0),
        (this.openTagStart = 0),
        (this.tagname = ""),
        (this.attribname = ""),
        (this.attribvalue = ""),
        (this.attribs = null),
        (this.stack = []),
        (this.foreignContext = []),
        (this.buffers = []),
        (this.bufferOffset = 0),
        (this.writeIndex = 0),
        (this.ended = !1),
        (this.cbs = t ?? {}),
        (this.lowerCaseTagNames =
          (r = n.lowerCaseTags) !== null && r !== void 0 ? r : !n.xmlMode),
        (this.lowerCaseAttributeNames =
          (u = n.lowerCaseAttributeNames) !== null && u !== void 0
            ? u
            : !n.xmlMode),
        (this.tokenizer = new (
          (s = n.Tokenizer) !== null && s !== void 0 ? s : Ca
        )(this.options, this)),
        (g = (f = this.cbs).onparserinit) === null ||
          g === void 0 ||
          g.call(f, this);
    }
    ontext(t, n) {
      var r, u;
      let s = this.getSlice(t, n);
      (this.endIndex = n - 1),
        (u = (r = this.cbs).ontext) === null || u === void 0 || u.call(r, s),
        (this.startIndex = n);
    }
    ontextentity(t) {
      var n, r;
      let u = this.tokenizer.getSectionStart();
      (this.endIndex = u - 1),
        (r = (n = this.cbs).ontext) === null ||
          r === void 0 ||
          r.call(n, Ea(t)),
        (this.startIndex = u);
    }
    isVoidElement(t) {
      return !this.options.xmlMode && I2.has(t);
    }
    onopentagname(t, n) {
      this.endIndex = n;
      let r = this.getSlice(t, n);
      this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r);
    }
    emitOpenTag(t) {
      var n, r, u, s;
      (this.openTagStart = this.startIndex), (this.tagname = t);
      let f = !this.options.xmlMode && R2.get(t);
      if (f)
        for (
          ;
          this.stack.length > 0 && f.has(this.stack[this.stack.length - 1]);

        ) {
          let g = this.stack.pop();
          (r = (n = this.cbs).onclosetag) === null ||
            r === void 0 ||
            r.call(n, g, !0);
        }
      this.isVoidElement(t) ||
        (this.stack.push(t),
        kg.has(t)
          ? this.foreignContext.push(!0)
          : Tg.has(t) && this.foreignContext.push(!1)),
        (s = (u = this.cbs).onopentagname) === null ||
          s === void 0 ||
          s.call(u, t),
        this.cbs.onopentag && (this.attribs = {});
    }
    endOpenTag(t) {
      var n, r;
      (this.startIndex = this.openTagStart),
        this.attribs &&
          ((r = (n = this.cbs).onopentag) === null ||
            r === void 0 ||
            r.call(n, this.tagname, this.attribs, t),
          (this.attribs = null)),
        this.cbs.onclosetag &&
          this.isVoidElement(this.tagname) &&
          this.cbs.onclosetag(this.tagname, !0),
        (this.tagname = "");
    }
    onopentagend(t) {
      (this.endIndex = t), this.endOpenTag(!1), (this.startIndex = t + 1);
    }
    onclosetag(t, n) {
      var r, u, s, f, g, v;
      this.endIndex = n;
      let b = this.getSlice(t, n);
      if (
        (this.lowerCaseTagNames && (b = b.toLowerCase()),
        (kg.has(b) || Tg.has(b)) && this.foreignContext.pop(),
        this.isVoidElement(b))
      )
        !this.options.xmlMode &&
          b === "br" &&
          ((u = (r = this.cbs).onopentagname) === null ||
            u === void 0 ||
            u.call(r, "br"),
          (f = (s = this.cbs).onopentag) === null ||
            f === void 0 ||
            f.call(s, "br", {}, !0),
          (v = (g = this.cbs).onclosetag) === null ||
            v === void 0 ||
            v.call(g, "br", !1));
      else {
        let x = this.stack.lastIndexOf(b);
        if (x !== -1)
          if (this.cbs.onclosetag) {
            let T = this.stack.length - x;
            for (; T--; ) this.cbs.onclosetag(this.stack.pop(), T !== 0);
          } else this.stack.length = x;
        else
          !this.options.xmlMode &&
            b === "p" &&
            (this.emitOpenTag("p"), this.closeCurrentTag(!0));
      }
      this.startIndex = n + 1;
    }
    onselfclosingtag(t) {
      (this.endIndex = t),
        this.options.xmlMode ||
        this.options.recognizeSelfClosing ||
        this.foreignContext[this.foreignContext.length - 1]
          ? (this.closeCurrentTag(!1), (this.startIndex = t + 1))
          : this.onopentagend(t);
    }
    closeCurrentTag(t) {
      var n, r;
      let u = this.tagname;
      this.endOpenTag(t),
        this.stack[this.stack.length - 1] === u &&
          ((r = (n = this.cbs).onclosetag) === null ||
            r === void 0 ||
            r.call(n, u, !t),
          this.stack.pop());
    }
    onattribname(t, n) {
      this.startIndex = t;
      let r = this.getSlice(t, n);
      this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r;
    }
    onattribdata(t, n) {
      this.attribvalue += this.getSlice(t, n);
    }
    onattribentity(t) {
      this.attribvalue += Ea(t);
    }
    onattribend(t, n) {
      var r, u;
      (this.endIndex = n),
        (u = (r = this.cbs).onattribute) === null ||
          u === void 0 ||
          u.call(
            r,
            this.attribname,
            this.attribvalue,
            t === vn.Double
              ? '"'
              : t === vn.Single
              ? "'"
              : t === vn.NoValue
              ? void 0
              : null
          ),
        this.attribs &&
          !Object.prototype.hasOwnProperty.call(
            this.attribs,
            this.attribname
          ) &&
          (this.attribs[this.attribname] = this.attribvalue),
        (this.attribvalue = "");
    }
    getInstructionName(t) {
      let n = t.search(A2),
        r = n < 0 ? t : t.substr(0, n);
      return this.lowerCaseTagNames && (r = r.toLowerCase()), r;
    }
    ondeclaration(t, n) {
      this.endIndex = n;
      let r = this.getSlice(t, n);
      if (this.cbs.onprocessinginstruction) {
        let u = this.getInstructionName(r);
        this.cbs.onprocessinginstruction(`!${u}`, `!${r}`);
      }
      this.startIndex = n + 1;
    }
    onprocessinginstruction(t, n) {
      this.endIndex = n;
      let r = this.getSlice(t, n);
      if (this.cbs.onprocessinginstruction) {
        let u = this.getInstructionName(r);
        this.cbs.onprocessinginstruction(`?${u}`, `?${r}`);
      }
      this.startIndex = n + 1;
    }
    oncomment(t, n, r) {
      var u, s, f, g;
      (this.endIndex = n),
        (s = (u = this.cbs).oncomment) === null ||
          s === void 0 ||
          s.call(u, this.getSlice(t, n - r)),
        (g = (f = this.cbs).oncommentend) === null || g === void 0 || g.call(f),
        (this.startIndex = n + 1);
    }
    oncdata(t, n, r) {
      var u, s, f, g, v, b, x, T, D, L;
      this.endIndex = n;
      let B = this.getSlice(t, n - r);
      this.options.xmlMode || this.options.recognizeCDATA
        ? ((s = (u = this.cbs).oncdatastart) === null ||
            s === void 0 ||
            s.call(u),
          (g = (f = this.cbs).ontext) === null || g === void 0 || g.call(f, B),
          (b = (v = this.cbs).oncdataend) === null || b === void 0 || b.call(v))
        : ((T = (x = this.cbs).oncomment) === null ||
            T === void 0 ||
            T.call(x, `[CDATA[${B}]]`),
          (L = (D = this.cbs).oncommentend) === null ||
            L === void 0 ||
            L.call(D)),
        (this.startIndex = n + 1);
    }
    onend() {
      var t, n;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (
          let r = this.stack.length;
          r > 0;
          this.cbs.onclosetag(this.stack[--r], !0)
        );
      }
      (n = (t = this.cbs).onend) === null || n === void 0 || n.call(t);
    }
    reset() {
      var t, n, r, u;
      (n = (t = this.cbs).onreset) === null || n === void 0 || n.call(t),
        this.tokenizer.reset(),
        (this.tagname = ""),
        (this.attribname = ""),
        (this.attribs = null),
        (this.stack.length = 0),
        (this.startIndex = 0),
        (this.endIndex = 0),
        (u = (r = this.cbs).onparserinit) === null ||
          u === void 0 ||
          u.call(r, this),
        (this.buffers.length = 0),
        (this.bufferOffset = 0),
        (this.writeIndex = 0),
        (this.ended = !1);
    }
    parseComplete(t) {
      this.reset(), this.end(t);
    }
    getSlice(t, n) {
      for (; t - this.bufferOffset >= this.buffers[0].length; )
        this.shiftBuffer();
      let r = this.buffers[0].slice(
        t - this.bufferOffset,
        n - this.bufferOffset
      );
      for (; n - this.bufferOffset > this.buffers[0].length; )
        this.shiftBuffer(),
          (r += this.buffers[0].slice(0, n - this.bufferOffset));
      return r;
    }
    shiftBuffer() {
      (this.bufferOffset += this.buffers[0].length),
        this.writeIndex--,
        this.buffers.shift();
    }
    write(t) {
      var n, r;
      if (this.ended) {
        (r = (n = this.cbs).onerror) === null ||
          r === void 0 ||
          r.call(n, new Error(".write() after done!"));
        return;
      }
      this.buffers.push(t),
        this.tokenizer.running && (this.tokenizer.write(t), this.writeIndex++);
    }
    end(t) {
      var n, r;
      if (this.ended) {
        (r = (n = this.cbs).onerror) === null ||
          r === void 0 ||
          r.call(n, new Error(".end() after done!"));
        return;
      }
      t && this.write(t), (this.ended = !0), this.tokenizer.end();
    }
    pause() {
      this.tokenizer.pause();
    }
    resume() {
      for (
        this.tokenizer.resume();
        this.tokenizer.running && this.writeIndex < this.buffers.length;

      )
        this.tokenizer.write(this.buffers[this.writeIndex++]);
      this.ended && this.tokenizer.end();
    }
    parseChunk(t) {
      this.write(t);
    }
    done(t) {
      this.end(t);
    }
  };
function Sc(e) {
  for (let t = 1; t < e.length; t++) e[t][0] += e[t - 1][0] + 1;
  return e;
}
var L2 = new Map(
  Sc([
    [9, "&Tab;"],
    [0, "&NewLine;"],
    [22, "&excl;"],
    [0, "&quot;"],
    [0, "&num;"],
    [0, "&dollar;"],
    [0, "&percnt;"],
    [0, "&amp;"],
    [0, "&apos;"],
    [0, "&lpar;"],
    [0, "&rpar;"],
    [0, "&ast;"],
    [0, "&plus;"],
    [0, "&comma;"],
    [1, "&period;"],
    [0, "&sol;"],
    [10, "&colon;"],
    [0, "&semi;"],
    [0, { v: "&lt;", n: 8402, o: "&nvlt;" }],
    [0, { v: "&equals;", n: 8421, o: "&bne;" }],
    [0, { v: "&gt;", n: 8402, o: "&nvgt;" }],
    [0, "&quest;"],
    [0, "&commat;"],
    [26, "&lbrack;"],
    [0, "&bsol;"],
    [0, "&rbrack;"],
    [0, "&Hat;"],
    [0, "&lowbar;"],
    [0, "&DiacriticalGrave;"],
    [5, { n: 106, o: "&fjlig;" }],
    [20, "&lbrace;"],
    [0, "&verbar;"],
    [0, "&rbrace;"],
    [34, "&nbsp;"],
    [0, "&iexcl;"],
    [0, "&cent;"],
    [0, "&pound;"],
    [0, "&curren;"],
    [0, "&yen;"],
    [0, "&brvbar;"],
    [0, "&sect;"],
    [0, "&die;"],
    [0, "&copy;"],
    [0, "&ordf;"],
    [0, "&laquo;"],
    [0, "&not;"],
    [0, "&shy;"],
    [0, "&circledR;"],
    [0, "&macr;"],
    [0, "&deg;"],
    [0, "&PlusMinus;"],
    [0, "&sup2;"],
    [0, "&sup3;"],
    [0, "&acute;"],
    [0, "&micro;"],
    [0, "&para;"],
    [0, "&centerdot;"],
    [0, "&cedil;"],
    [0, "&sup1;"],
    [0, "&ordm;"],
    [0, "&raquo;"],
    [0, "&frac14;"],
    [0, "&frac12;"],
    [0, "&frac34;"],
    [0, "&iquest;"],
    [0, "&Agrave;"],
    [0, "&Aacute;"],
    [0, "&Acirc;"],
    [0, "&Atilde;"],
    [0, "&Auml;"],
    [0, "&angst;"],
    [0, "&AElig;"],
    [0, "&Ccedil;"],
    [0, "&Egrave;"],
    [0, "&Eacute;"],
    [0, "&Ecirc;"],
    [0, "&Euml;"],
    [0, "&Igrave;"],
    [0, "&Iacute;"],
    [0, "&Icirc;"],
    [0, "&Iuml;"],
    [0, "&ETH;"],
    [0, "&Ntilde;"],
    [0, "&Ograve;"],
    [0, "&Oacute;"],
    [0, "&Ocirc;"],
    [0, "&Otilde;"],
    [0, "&Ouml;"],
    [0, "&times;"],
    [0, "&Oslash;"],
    [0, "&Ugrave;"],
    [0, "&Uacute;"],
    [0, "&Ucirc;"],
    [0, "&Uuml;"],
    [0, "&Yacute;"],
    [0, "&THORN;"],
    [0, "&szlig;"],
    [0, "&agrave;"],
    [0, "&aacute;"],
    [0, "&acirc;"],
    [0, "&atilde;"],
    [0, "&auml;"],
    [0, "&aring;"],
    [0, "&aelig;"],
    [0, "&ccedil;"],
    [0, "&egrave;"],
    [0, "&eacute;"],
    [0, "&ecirc;"],
    [0, "&euml;"],
    [0, "&igrave;"],
    [0, "&iacute;"],
    [0, "&icirc;"],
    [0, "&iuml;"],
    [0, "&eth;"],
    [0, "&ntilde;"],
    [0, "&ograve;"],
    [0, "&oacute;"],
    [0, "&ocirc;"],
    [0, "&otilde;"],
    [0, "&ouml;"],
    [0, "&div;"],
    [0, "&oslash;"],
    [0, "&ugrave;"],
    [0, "&uacute;"],
    [0, "&ucirc;"],
    [0, "&uuml;"],
    [0, "&yacute;"],
    [0, "&thorn;"],
    [0, "&yuml;"],
    [0, "&Amacr;"],
    [0, "&amacr;"],
    [0, "&Abreve;"],
    [0, "&abreve;"],
    [0, "&Aogon;"],
    [0, "&aogon;"],
    [0, "&Cacute;"],
    [0, "&cacute;"],
    [0, "&Ccirc;"],
    [0, "&ccirc;"],
    [0, "&Cdot;"],
    [0, "&cdot;"],
    [0, "&Ccaron;"],
    [0, "&ccaron;"],
    [0, "&Dcaron;"],
    [0, "&dcaron;"],
    [0, "&Dstrok;"],
    [0, "&dstrok;"],
    [0, "&Emacr;"],
    [0, "&emacr;"],
    [2, "&Edot;"],
    [0, "&edot;"],
    [0, "&Eogon;"],
    [0, "&eogon;"],
    [0, "&Ecaron;"],
    [0, "&ecaron;"],
    [0, "&Gcirc;"],
    [0, "&gcirc;"],
    [0, "&Gbreve;"],
    [0, "&gbreve;"],
    [0, "&Gdot;"],
    [0, "&gdot;"],
    [0, "&Gcedil;"],
    [1, "&Hcirc;"],
    [0, "&hcirc;"],
    [0, "&Hstrok;"],
    [0, "&hstrok;"],
    [0, "&Itilde;"],
    [0, "&itilde;"],
    [0, "&Imacr;"],
    [0, "&imacr;"],
    [2, "&Iogon;"],
    [0, "&iogon;"],
    [0, "&Idot;"],
    [0, "&imath;"],
    [0, "&IJlig;"],
    [0, "&ijlig;"],
    [0, "&Jcirc;"],
    [0, "&jcirc;"],
    [0, "&Kcedil;"],
    [0, "&kcedil;"],
    [0, "&kgreen;"],
    [0, "&Lacute;"],
    [0, "&lacute;"],
    [0, "&Lcedil;"],
    [0, "&lcedil;"],
    [0, "&Lcaron;"],
    [0, "&lcaron;"],
    [0, "&Lmidot;"],
    [0, "&lmidot;"],
    [0, "&Lstrok;"],
    [0, "&lstrok;"],
    [0, "&Nacute;"],
    [0, "&nacute;"],
    [0, "&Ncedil;"],
    [0, "&ncedil;"],
    [0, "&Ncaron;"],
    [0, "&ncaron;"],
    [0, "&napos;"],
    [0, "&ENG;"],
    [0, "&eng;"],
    [0, "&Omacr;"],
    [0, "&omacr;"],
    [2, "&Odblac;"],
    [0, "&odblac;"],
    [0, "&OElig;"],
    [0, "&oelig;"],
    [0, "&Racute;"],
    [0, "&racute;"],
    [0, "&Rcedil;"],
    [0, "&rcedil;"],
    [0, "&Rcaron;"],
    [0, "&rcaron;"],
    [0, "&Sacute;"],
    [0, "&sacute;"],
    [0, "&Scirc;"],
    [0, "&scirc;"],
    [0, "&Scedil;"],
    [0, "&scedil;"],
    [0, "&Scaron;"],
    [0, "&scaron;"],
    [0, "&Tcedil;"],
    [0, "&tcedil;"],
    [0, "&Tcaron;"],
    [0, "&tcaron;"],
    [0, "&Tstrok;"],
    [0, "&tstrok;"],
    [0, "&Utilde;"],
    [0, "&utilde;"],
    [0, "&Umacr;"],
    [0, "&umacr;"],
    [0, "&Ubreve;"],
    [0, "&ubreve;"],
    [0, "&Uring;"],
    [0, "&uring;"],
    [0, "&Udblac;"],
    [0, "&udblac;"],
    [0, "&Uogon;"],
    [0, "&uogon;"],
    [0, "&Wcirc;"],
    [0, "&wcirc;"],
    [0, "&Ycirc;"],
    [0, "&ycirc;"],
    [0, "&Yuml;"],
    [0, "&Zacute;"],
    [0, "&zacute;"],
    [0, "&Zdot;"],
    [0, "&zdot;"],
    [0, "&Zcaron;"],
    [0, "&zcaron;"],
    [19, "&fnof;"],
    [34, "&imped;"],
    [63, "&gacute;"],
    [65, "&jmath;"],
    [142, "&circ;"],
    [0, "&caron;"],
    [16, "&breve;"],
    [0, "&DiacriticalDot;"],
    [0, "&ring;"],
    [0, "&ogon;"],
    [0, "&DiacriticalTilde;"],
    [0, "&dblac;"],
    [51, "&DownBreve;"],
    [127, "&Alpha;"],
    [0, "&Beta;"],
    [0, "&Gamma;"],
    [0, "&Delta;"],
    [0, "&Epsilon;"],
    [0, "&Zeta;"],
    [0, "&Eta;"],
    [0, "&Theta;"],
    [0, "&Iota;"],
    [0, "&Kappa;"],
    [0, "&Lambda;"],
    [0, "&Mu;"],
    [0, "&Nu;"],
    [0, "&Xi;"],
    [0, "&Omicron;"],
    [0, "&Pi;"],
    [0, "&Rho;"],
    [1, "&Sigma;"],
    [0, "&Tau;"],
    [0, "&Upsilon;"],
    [0, "&Phi;"],
    [0, "&Chi;"],
    [0, "&Psi;"],
    [0, "&ohm;"],
    [7, "&alpha;"],
    [0, "&beta;"],
    [0, "&gamma;"],
    [0, "&delta;"],
    [0, "&epsi;"],
    [0, "&zeta;"],
    [0, "&eta;"],
    [0, "&theta;"],
    [0, "&iota;"],
    [0, "&kappa;"],
    [0, "&lambda;"],
    [0, "&mu;"],
    [0, "&nu;"],
    [0, "&xi;"],
    [0, "&omicron;"],
    [0, "&pi;"],
    [0, "&rho;"],
    [0, "&sigmaf;"],
    [0, "&sigma;"],
    [0, "&tau;"],
    [0, "&upsi;"],
    [0, "&phi;"],
    [0, "&chi;"],
    [0, "&psi;"],
    [0, "&omega;"],
    [7, "&thetasym;"],
    [0, "&Upsi;"],
    [2, "&phiv;"],
    [0, "&piv;"],
    [5, "&Gammad;"],
    [0, "&digamma;"],
    [18, "&kappav;"],
    [0, "&rhov;"],
    [3, "&epsiv;"],
    [0, "&backepsilon;"],
    [10, "&IOcy;"],
    [0, "&DJcy;"],
    [0, "&GJcy;"],
    [0, "&Jukcy;"],
    [0, "&DScy;"],
    [0, "&Iukcy;"],
    [0, "&YIcy;"],
    [0, "&Jsercy;"],
    [0, "&LJcy;"],
    [0, "&NJcy;"],
    [0, "&TSHcy;"],
    [0, "&KJcy;"],
    [1, "&Ubrcy;"],
    [0, "&DZcy;"],
    [0, "&Acy;"],
    [0, "&Bcy;"],
    [0, "&Vcy;"],
    [0, "&Gcy;"],
    [0, "&Dcy;"],
    [0, "&IEcy;"],
    [0, "&ZHcy;"],
    [0, "&Zcy;"],
    [0, "&Icy;"],
    [0, "&Jcy;"],
    [0, "&Kcy;"],
    [0, "&Lcy;"],
    [0, "&Mcy;"],
    [0, "&Ncy;"],
    [0, "&Ocy;"],
    [0, "&Pcy;"],
    [0, "&Rcy;"],
    [0, "&Scy;"],
    [0, "&Tcy;"],
    [0, "&Ucy;"],
    [0, "&Fcy;"],
    [0, "&KHcy;"],
    [0, "&TScy;"],
    [0, "&CHcy;"],
    [0, "&SHcy;"],
    [0, "&SHCHcy;"],
    [0, "&HARDcy;"],
    [0, "&Ycy;"],
    [0, "&SOFTcy;"],
    [0, "&Ecy;"],
    [0, "&YUcy;"],
    [0, "&YAcy;"],
    [0, "&acy;"],
    [0, "&bcy;"],
    [0, "&vcy;"],
    [0, "&gcy;"],
    [0, "&dcy;"],
    [0, "&iecy;"],
    [0, "&zhcy;"],
    [0, "&zcy;"],
    [0, "&icy;"],
    [0, "&jcy;"],
    [0, "&kcy;"],
    [0, "&lcy;"],
    [0, "&mcy;"],
    [0, "&ncy;"],
    [0, "&ocy;"],
    [0, "&pcy;"],
    [0, "&rcy;"],
    [0, "&scy;"],
    [0, "&tcy;"],
    [0, "&ucy;"],
    [0, "&fcy;"],
    [0, "&khcy;"],
    [0, "&tscy;"],
    [0, "&chcy;"],
    [0, "&shcy;"],
    [0, "&shchcy;"],
    [0, "&hardcy;"],
    [0, "&ycy;"],
    [0, "&softcy;"],
    [0, "&ecy;"],
    [0, "&yucy;"],
    [0, "&yacy;"],
    [1, "&iocy;"],
    [0, "&djcy;"],
    [0, "&gjcy;"],
    [0, "&jukcy;"],
    [0, "&dscy;"],
    [0, "&iukcy;"],
    [0, "&yicy;"],
    [0, "&jsercy;"],
    [0, "&ljcy;"],
    [0, "&njcy;"],
    [0, "&tshcy;"],
    [0, "&kjcy;"],
    [1, "&ubrcy;"],
    [0, "&dzcy;"],
    [7074, "&ensp;"],
    [0, "&emsp;"],
    [0, "&emsp13;"],
    [0, "&emsp14;"],
    [1, "&numsp;"],
    [0, "&puncsp;"],
    [0, "&ThinSpace;"],
    [0, "&hairsp;"],
    [0, "&NegativeMediumSpace;"],
    [0, "&zwnj;"],
    [0, "&zwj;"],
    [0, "&lrm;"],
    [0, "&rlm;"],
    [0, "&dash;"],
    [2, "&ndash;"],
    [0, "&mdash;"],
    [0, "&horbar;"],
    [0, "&Verbar;"],
    [1, "&lsquo;"],
    [0, "&CloseCurlyQuote;"],
    [0, "&lsquor;"],
    [1, "&ldquo;"],
    [0, "&CloseCurlyDoubleQuote;"],
    [0, "&bdquo;"],
    [1, "&dagger;"],
    [0, "&Dagger;"],
    [0, "&bull;"],
    [2, "&nldr;"],
    [0, "&hellip;"],
    [9, "&permil;"],
    [0, "&pertenk;"],
    [0, "&prime;"],
    [0, "&Prime;"],
    [0, "&tprime;"],
    [0, "&backprime;"],
    [3, "&lsaquo;"],
    [0, "&rsaquo;"],
    [3, "&oline;"],
    [2, "&caret;"],
    [1, "&hybull;"],
    [0, "&frasl;"],
    [10, "&bsemi;"],
    [7, "&qprime;"],
    [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }],
    [0, "&NoBreak;"],
    [0, "&af;"],
    [0, "&InvisibleTimes;"],
    [0, "&ic;"],
    [72, "&euro;"],
    [46, "&tdot;"],
    [0, "&DotDot;"],
    [37, "&complexes;"],
    [2, "&incare;"],
    [4, "&gscr;"],
    [0, "&hamilt;"],
    [0, "&Hfr;"],
    [0, "&Hopf;"],
    [0, "&planckh;"],
    [0, "&hbar;"],
    [0, "&imagline;"],
    [0, "&Ifr;"],
    [0, "&lagran;"],
    [0, "&ell;"],
    [1, "&naturals;"],
    [0, "&numero;"],
    [0, "&copysr;"],
    [0, "&weierp;"],
    [0, "&Popf;"],
    [0, "&Qopf;"],
    [0, "&realine;"],
    [0, "&real;"],
    [0, "&reals;"],
    [0, "&rx;"],
    [3, "&trade;"],
    [1, "&integers;"],
    [2, "&mho;"],
    [0, "&zeetrf;"],
    [0, "&iiota;"],
    [2, "&bernou;"],
    [0, "&Cayleys;"],
    [1, "&escr;"],
    [0, "&Escr;"],
    [0, "&Fouriertrf;"],
    [1, "&Mellintrf;"],
    [0, "&order;"],
    [0, "&alefsym;"],
    [0, "&beth;"],
    [0, "&gimel;"],
    [0, "&daleth;"],
    [12, "&CapitalDifferentialD;"],
    [0, "&dd;"],
    [0, "&ee;"],
    [0, "&ii;"],
    [10, "&frac13;"],
    [0, "&frac23;"],
    [0, "&frac15;"],
    [0, "&frac25;"],
    [0, "&frac35;"],
    [0, "&frac45;"],
    [0, "&frac16;"],
    [0, "&frac56;"],
    [0, "&frac18;"],
    [0, "&frac38;"],
    [0, "&frac58;"],
    [0, "&frac78;"],
    [49, "&larr;"],
    [0, "&ShortUpArrow;"],
    [0, "&rarr;"],
    [0, "&darr;"],
    [0, "&harr;"],
    [0, "&updownarrow;"],
    [0, "&nwarr;"],
    [0, "&nearr;"],
    [0, "&LowerRightArrow;"],
    [0, "&LowerLeftArrow;"],
    [0, "&nlarr;"],
    [0, "&nrarr;"],
    [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }],
    [0, "&Larr;"],
    [0, "&Uarr;"],
    [0, "&Rarr;"],
    [0, "&Darr;"],
    [0, "&larrtl;"],
    [0, "&rarrtl;"],
    [0, "&LeftTeeArrow;"],
    [0, "&mapstoup;"],
    [0, "&map;"],
    [0, "&DownTeeArrow;"],
    [1, "&hookleftarrow;"],
    [0, "&hookrightarrow;"],
    [0, "&larrlp;"],
    [0, "&looparrowright;"],
    [0, "&harrw;"],
    [0, "&nharr;"],
    [1, "&lsh;"],
    [0, "&rsh;"],
    [0, "&ldsh;"],
    [0, "&rdsh;"],
    [1, "&crarr;"],
    [0, "&cularr;"],
    [0, "&curarr;"],
    [2, "&circlearrowleft;"],
    [0, "&circlearrowright;"],
    [0, "&leftharpoonup;"],
    [0, "&DownLeftVector;"],
    [0, "&RightUpVector;"],
    [0, "&LeftUpVector;"],
    [0, "&rharu;"],
    [0, "&DownRightVector;"],
    [0, "&dharr;"],
    [0, "&dharl;"],
    [0, "&RightArrowLeftArrow;"],
    [0, "&udarr;"],
    [0, "&LeftArrowRightArrow;"],
    [0, "&leftleftarrows;"],
    [0, "&upuparrows;"],
    [0, "&rightrightarrows;"],
    [0, "&ddarr;"],
    [0, "&leftrightharpoons;"],
    [0, "&Equilibrium;"],
    [0, "&nlArr;"],
    [0, "&nhArr;"],
    [0, "&nrArr;"],
    [0, "&DoubleLeftArrow;"],
    [0, "&DoubleUpArrow;"],
    [0, "&DoubleRightArrow;"],
    [0, "&dArr;"],
    [0, "&DoubleLeftRightArrow;"],
    [0, "&DoubleUpDownArrow;"],
    [0, "&nwArr;"],
    [0, "&neArr;"],
    [0, "&seArr;"],
    [0, "&swArr;"],
    [0, "&lAarr;"],
    [0, "&rAarr;"],
    [1, "&zigrarr;"],
    [6, "&larrb;"],
    [0, "&rarrb;"],
    [15, "&DownArrowUpArrow;"],
    [7, "&loarr;"],
    [0, "&roarr;"],
    [0, "&hoarr;"],
    [0, "&forall;"],
    [0, "&comp;"],
    [0, { v: "&part;", n: 824, o: "&npart;" }],
    [0, "&exist;"],
    [0, "&nexist;"],
    [0, "&empty;"],
    [1, "&Del;"],
    [0, "&Element;"],
    [0, "&NotElement;"],
    [1, "&ni;"],
    [0, "&notni;"],
    [2, "&prod;"],
    [0, "&coprod;"],
    [0, "&sum;"],
    [0, "&minus;"],
    [0, "&MinusPlus;"],
    [0, "&dotplus;"],
    [1, "&Backslash;"],
    [0, "&lowast;"],
    [0, "&compfn;"],
    [1, "&radic;"],
    [2, "&prop;"],
    [0, "&infin;"],
    [0, "&angrt;"],
    [0, { v: "&ang;", n: 8402, o: "&nang;" }],
    [0, "&angmsd;"],
    [0, "&angsph;"],
    [0, "&mid;"],
    [0, "&nmid;"],
    [0, "&DoubleVerticalBar;"],
    [0, "&NotDoubleVerticalBar;"],
    [0, "&and;"],
    [0, "&or;"],
    [0, { v: "&cap;", n: 65024, o: "&caps;" }],
    [0, { v: "&cup;", n: 65024, o: "&cups;" }],
    [0, "&int;"],
    [0, "&Int;"],
    [0, "&iiint;"],
    [0, "&conint;"],
    [0, "&Conint;"],
    [0, "&Cconint;"],
    [0, "&cwint;"],
    [0, "&ClockwiseContourIntegral;"],
    [0, "&awconint;"],
    [0, "&there4;"],
    [0, "&becaus;"],
    [0, "&ratio;"],
    [0, "&Colon;"],
    [0, "&dotminus;"],
    [1, "&mDDot;"],
    [0, "&homtht;"],
    [0, { v: "&sim;", n: 8402, o: "&nvsim;" }],
    [0, { v: "&backsim;", n: 817, o: "&race;" }],
    [0, { v: "&ac;", n: 819, o: "&acE;" }],
    [0, "&acd;"],
    [0, "&VerticalTilde;"],
    [0, "&NotTilde;"],
    [0, { v: "&eqsim;", n: 824, o: "&nesim;" }],
    [0, "&sime;"],
    [0, "&NotTildeEqual;"],
    [0, "&cong;"],
    [0, "&simne;"],
    [0, "&ncong;"],
    [0, "&ap;"],
    [0, "&nap;"],
    [0, "&ape;"],
    [0, { v: "&apid;", n: 824, o: "&napid;" }],
    [0, "&backcong;"],
    [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }],
    [0, { v: "&bump;", n: 824, o: "&nbump;" }],
    [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }],
    [0, { v: "&doteq;", n: 824, o: "&nedot;" }],
    [0, "&doteqdot;"],
    [0, "&efDot;"],
    [0, "&erDot;"],
    [0, "&Assign;"],
    [0, "&ecolon;"],
    [0, "&ecir;"],
    [0, "&circeq;"],
    [1, "&wedgeq;"],
    [0, "&veeeq;"],
    [1, "&triangleq;"],
    [2, "&equest;"],
    [0, "&ne;"],
    [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }],
    [0, "&nequiv;"],
    [1, { v: "&le;", n: 8402, o: "&nvle;" }],
    [0, { v: "&ge;", n: 8402, o: "&nvge;" }],
    [0, { v: "&lE;", n: 824, o: "&nlE;" }],
    [0, { v: "&gE;", n: 824, o: "&ngE;" }],
    [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }],
    [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }],
    [
      0,
      {
        v: "&ll;",
        n: new Map(
          Sc([
            [824, "&nLtv;"],
            [7577, "&nLt;"],
          ])
        ),
      },
    ],
    [
      0,
      {
        v: "&gg;",
        n: new Map(
          Sc([
            [824, "&nGtv;"],
            [7577, "&nGt;"],
          ])
        ),
      },
    ],
    [0, "&between;"],
    [0, "&NotCupCap;"],
    [0, "&nless;"],
    [0, "&ngt;"],
    [0, "&nle;"],
    [0, "&nge;"],
    [0, "&lesssim;"],
    [0, "&GreaterTilde;"],
    [0, "&nlsim;"],
    [0, "&ngsim;"],
    [0, "&LessGreater;"],
    [0, "&gl;"],
    [0, "&NotLessGreater;"],
    [0, "&NotGreaterLess;"],
    [0, "&pr;"],
    [0, "&sc;"],
    [0, "&prcue;"],
    [0, "&sccue;"],
    [0, "&PrecedesTilde;"],
    [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }],
    [0, "&NotPrecedes;"],
    [0, "&NotSucceeds;"],
    [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }],
    [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }],
    [0, "&nsub;"],
    [0, "&nsup;"],
    [0, "&sube;"],
    [0, "&supe;"],
    [0, "&NotSubsetEqual;"],
    [0, "&NotSupersetEqual;"],
    [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }],
    [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }],
    [1, "&cupdot;"],
    [0, "&UnionPlus;"],
    [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }],
    [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }],
    [0, "&sqsube;"],
    [0, "&sqsupe;"],
    [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }],
    [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }],
    [0, "&CirclePlus;"],
    [0, "&CircleMinus;"],
    [0, "&CircleTimes;"],
    [0, "&osol;"],
    [0, "&CircleDot;"],
    [0, "&circledcirc;"],
    [0, "&circledast;"],
    [1, "&circleddash;"],
    [0, "&boxplus;"],
    [0, "&boxminus;"],
    [0, "&boxtimes;"],
    [0, "&dotsquare;"],
    [0, "&RightTee;"],
    [0, "&dashv;"],
    [0, "&DownTee;"],
    [0, "&bot;"],
    [1, "&models;"],
    [0, "&DoubleRightTee;"],
    [0, "&Vdash;"],
    [0, "&Vvdash;"],
    [0, "&VDash;"],
    [0, "&nvdash;"],
    [0, "&nvDash;"],
    [0, "&nVdash;"],
    [0, "&nVDash;"],
    [0, "&prurel;"],
    [1, "&LeftTriangle;"],
    [0, "&RightTriangle;"],
    [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }],
    [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }],
    [0, "&origof;"],
    [0, "&imof;"],
    [0, "&multimap;"],
    [0, "&hercon;"],
    [0, "&intcal;"],
    [0, "&veebar;"],
    [1, "&barvee;"],
    [0, "&angrtvb;"],
    [0, "&lrtri;"],
    [0, "&bigwedge;"],
    [0, "&bigvee;"],
    [0, "&bigcap;"],
    [0, "&bigcup;"],
    [0, "&diam;"],
    [0, "&sdot;"],
    [0, "&sstarf;"],
    [0, "&divideontimes;"],
    [0, "&bowtie;"],
    [0, "&ltimes;"],
    [0, "&rtimes;"],
    [0, "&leftthreetimes;"],
    [0, "&rightthreetimes;"],
    [0, "&backsimeq;"],
    [0, "&curlyvee;"],
    [0, "&curlywedge;"],
    [0, "&Sub;"],
    [0, "&Sup;"],
    [0, "&Cap;"],
    [0, "&Cup;"],
    [0, "&fork;"],
    [0, "&epar;"],
    [0, "&lessdot;"],
    [0, "&gtdot;"],
    [0, { v: "&Ll;", n: 824, o: "&nLl;" }],
    [0, { v: "&Gg;", n: 824, o: "&nGg;" }],
    [0, { v: "&leg;", n: 65024, o: "&lesg;" }],
    [0, { v: "&gel;", n: 65024, o: "&gesl;" }],
    [2, "&cuepr;"],
    [0, "&cuesc;"],
    [0, "&NotPrecedesSlantEqual;"],
    [0, "&NotSucceedsSlantEqual;"],
    [0, "&NotSquareSubsetEqual;"],
    [0, "&NotSquareSupersetEqual;"],
    [2, "&lnsim;"],
    [0, "&gnsim;"],
    [0, "&precnsim;"],
    [0, "&scnsim;"],
    [0, "&nltri;"],
    [0, "&NotRightTriangle;"],
    [0, "&nltrie;"],
    [0, "&NotRightTriangleEqual;"],
    [0, "&vellip;"],
    [0, "&ctdot;"],
    [0, "&utdot;"],
    [0, "&dtdot;"],
    [0, "&disin;"],
    [0, "&isinsv;"],
    [0, "&isins;"],
    [0, { v: "&isindot;", n: 824, o: "&notindot;" }],
    [0, "&notinvc;"],
    [0, "&notinvb;"],
    [1, { v: "&isinE;", n: 824, o: "&notinE;" }],
    [0, "&nisd;"],
    [0, "&xnis;"],
    [0, "&nis;"],
    [0, "&notnivc;"],
    [0, "&notnivb;"],
    [6, "&barwed;"],
    [0, "&Barwed;"],
    [1, "&lceil;"],
    [0, "&rceil;"],
    [0, "&LeftFloor;"],
    [0, "&rfloor;"],
    [0, "&drcrop;"],
    [0, "&dlcrop;"],
    [0, "&urcrop;"],
    [0, "&ulcrop;"],
    [0, "&bnot;"],
    [1, "&profline;"],
    [0, "&profsurf;"],
    [1, "&telrec;"],
    [0, "&target;"],
    [5, "&ulcorn;"],
    [0, "&urcorn;"],
    [0, "&dlcorn;"],
    [0, "&drcorn;"],
    [2, "&frown;"],
    [0, "&smile;"],
    [9, "&cylcty;"],
    [0, "&profalar;"],
    [7, "&topbot;"],
    [6, "&ovbar;"],
    [1, "&solbar;"],
    [60, "&angzarr;"],
    [51, "&lmoustache;"],
    [0, "&rmoustache;"],
    [2, "&OverBracket;"],
    [0, "&bbrk;"],
    [0, "&bbrktbrk;"],
    [37, "&OverParenthesis;"],
    [0, "&UnderParenthesis;"],
    [0, "&OverBrace;"],
    [0, "&UnderBrace;"],
    [2, "&trpezium;"],
    [4, "&elinters;"],
    [59, "&blank;"],
    [164, "&circledS;"],
    [55, "&boxh;"],
    [1, "&boxv;"],
    [9, "&boxdr;"],
    [3, "&boxdl;"],
    [3, "&boxur;"],
    [3, "&boxul;"],
    [3, "&boxvr;"],
    [7, "&boxvl;"],
    [7, "&boxhd;"],
    [7, "&boxhu;"],
    [7, "&boxvh;"],
    [19, "&boxH;"],
    [0, "&boxV;"],
    [0, "&boxdR;"],
    [0, "&boxDr;"],
    [0, "&boxDR;"],
    [0, "&boxdL;"],
    [0, "&boxDl;"],
    [0, "&boxDL;"],
    [0, "&boxuR;"],
    [0, "&boxUr;"],
    [0, "&boxUR;"],
    [0, "&boxuL;"],
    [0, "&boxUl;"],
    [0, "&boxUL;"],
    [0, "&boxvR;"],
    [0, "&boxVr;"],
    [0, "&boxVR;"],
    [0, "&boxvL;"],
    [0, "&boxVl;"],
    [0, "&boxVL;"],
    [0, "&boxHd;"],
    [0, "&boxhD;"],
    [0, "&boxHD;"],
    [0, "&boxHu;"],
    [0, "&boxhU;"],
    [0, "&boxHU;"],
    [0, "&boxvH;"],
    [0, "&boxVh;"],
    [0, "&boxVH;"],
    [19, "&uhblk;"],
    [3, "&lhblk;"],
    [3, "&block;"],
    [8, "&blk14;"],
    [0, "&blk12;"],
    [0, "&blk34;"],
    [13, "&square;"],
    [8, "&blacksquare;"],
    [0, "&EmptyVerySmallSquare;"],
    [1, "&rect;"],
    [0, "&marker;"],
    [2, "&fltns;"],
    [1, "&bigtriangleup;"],
    [0, "&blacktriangle;"],
    [0, "&triangle;"],
    [2, "&blacktriangleright;"],
    [0, "&rtri;"],
    [3, "&bigtriangledown;"],
    [0, "&blacktriangledown;"],
    [0, "&dtri;"],
    [2, "&blacktriangleleft;"],
    [0, "&ltri;"],
    [6, "&loz;"],
    [0, "&cir;"],
    [32, "&tridot;"],
    [2, "&bigcirc;"],
    [8, "&ultri;"],
    [0, "&urtri;"],
    [0, "&lltri;"],
    [0, "&EmptySmallSquare;"],
    [0, "&FilledSmallSquare;"],
    [8, "&bigstar;"],
    [0, "&star;"],
    [7, "&phone;"],
    [49, "&female;"],
    [1, "&male;"],
    [29, "&spades;"],
    [2, "&clubs;"],
    [1, "&hearts;"],
    [0, "&diamondsuit;"],
    [3, "&sung;"],
    [2, "&flat;"],
    [0, "&natural;"],
    [0, "&sharp;"],
    [163, "&check;"],
    [3, "&cross;"],
    [8, "&malt;"],
    [21, "&sext;"],
    [33, "&VerticalSeparator;"],
    [25, "&lbbrk;"],
    [0, "&rbbrk;"],
    [84, "&bsolhsub;"],
    [0, "&suphsol;"],
    [28, "&LeftDoubleBracket;"],
    [0, "&RightDoubleBracket;"],
    [0, "&lang;"],
    [0, "&rang;"],
    [0, "&Lang;"],
    [0, "&Rang;"],
    [0, "&loang;"],
    [0, "&roang;"],
    [7, "&longleftarrow;"],
    [0, "&longrightarrow;"],
    [0, "&longleftrightarrow;"],
    [0, "&DoubleLongLeftArrow;"],
    [0, "&DoubleLongRightArrow;"],
    [0, "&DoubleLongLeftRightArrow;"],
    [1, "&longmapsto;"],
    [2, "&dzigrarr;"],
    [258, "&nvlArr;"],
    [0, "&nvrArr;"],
    [0, "&nvHarr;"],
    [0, "&Map;"],
    [6, "&lbarr;"],
    [0, "&bkarow;"],
    [0, "&lBarr;"],
    [0, "&dbkarow;"],
    [0, "&drbkarow;"],
    [0, "&DDotrahd;"],
    [0, "&UpArrowBar;"],
    [0, "&DownArrowBar;"],
    [2, "&Rarrtl;"],
    [2, "&latail;"],
    [0, "&ratail;"],
    [0, "&lAtail;"],
    [0, "&rAtail;"],
    [0, "&larrfs;"],
    [0, "&rarrfs;"],
    [0, "&larrbfs;"],
    [0, "&rarrbfs;"],
    [2, "&nwarhk;"],
    [0, "&nearhk;"],
    [0, "&hksearow;"],
    [0, "&hkswarow;"],
    [0, "&nwnear;"],
    [0, "&nesear;"],
    [0, "&seswar;"],
    [0, "&swnwar;"],
    [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }],
    [1, "&cudarrr;"],
    [0, "&ldca;"],
    [0, "&rdca;"],
    [0, "&cudarrl;"],
    [0, "&larrpl;"],
    [2, "&curarrm;"],
    [0, "&cularrp;"],
    [7, "&rarrpl;"],
    [2, "&harrcir;"],
    [0, "&Uarrocir;"],
    [0, "&lurdshar;"],
    [0, "&ldrushar;"],
    [2, "&LeftRightVector;"],
    [0, "&RightUpDownVector;"],
    [0, "&DownLeftRightVector;"],
    [0, "&LeftUpDownVector;"],
    [0, "&LeftVectorBar;"],
    [0, "&RightVectorBar;"],
    [0, "&RightUpVectorBar;"],
    [0, "&RightDownVectorBar;"],
    [0, "&DownLeftVectorBar;"],
    [0, "&DownRightVectorBar;"],
    [0, "&LeftUpVectorBar;"],
    [0, "&LeftDownVectorBar;"],
    [0, "&LeftTeeVector;"],
    [0, "&RightTeeVector;"],
    [0, "&RightUpTeeVector;"],
    [0, "&RightDownTeeVector;"],
    [0, "&DownLeftTeeVector;"],
    [0, "&DownRightTeeVector;"],
    [0, "&LeftUpTeeVector;"],
    [0, "&LeftDownTeeVector;"],
    [0, "&lHar;"],
    [0, "&uHar;"],
    [0, "&rHar;"],
    [0, "&dHar;"],
    [0, "&luruhar;"],
    [0, "&ldrdhar;"],
    [0, "&ruluhar;"],
    [0, "&rdldhar;"],
    [0, "&lharul;"],
    [0, "&llhard;"],
    [0, "&rharul;"],
    [0, "&lrhard;"],
    [0, "&udhar;"],
    [0, "&duhar;"],
    [0, "&RoundImplies;"],
    [0, "&erarr;"],
    [0, "&simrarr;"],
    [0, "&larrsim;"],
    [0, "&rarrsim;"],
    [0, "&rarrap;"],
    [0, "&ltlarr;"],
    [1, "&gtrarr;"],
    [0, "&subrarr;"],
    [1, "&suplarr;"],
    [0, "&lfisht;"],
    [0, "&rfisht;"],
    [0, "&ufisht;"],
    [0, "&dfisht;"],
    [5, "&lopar;"],
    [0, "&ropar;"],
    [4, "&lbrke;"],
    [0, "&rbrke;"],
    [0, "&lbrkslu;"],
    [0, "&rbrksld;"],
    [0, "&lbrksld;"],
    [0, "&rbrkslu;"],
    [0, "&langd;"],
    [0, "&rangd;"],
    [0, "&lparlt;"],
    [0, "&rpargt;"],
    [0, "&gtlPar;"],
    [0, "&ltrPar;"],
    [3, "&vzigzag;"],
    [1, "&vangrt;"],
    [0, "&angrtvbd;"],
    [6, "&ange;"],
    [0, "&range;"],
    [0, "&dwangle;"],
    [0, "&uwangle;"],
    [0, "&angmsdaa;"],
    [0, "&angmsdab;"],
    [0, "&angmsdac;"],
    [0, "&angmsdad;"],
    [0, "&angmsdae;"],
    [0, "&angmsdaf;"],
    [0, "&angmsdag;"],
    [0, "&angmsdah;"],
    [0, "&bemptyv;"],
    [0, "&demptyv;"],
    [0, "&cemptyv;"],
    [0, "&raemptyv;"],
    [0, "&laemptyv;"],
    [0, "&ohbar;"],
    [0, "&omid;"],
    [0, "&opar;"],
    [1, "&operp;"],
    [1, "&olcross;"],
    [0, "&odsold;"],
    [1, "&olcir;"],
    [0, "&ofcir;"],
    [0, "&olt;"],
    [0, "&ogt;"],
    [0, "&cirscir;"],
    [0, "&cirE;"],
    [0, "&solb;"],
    [0, "&bsolb;"],
    [3, "&boxbox;"],
    [3, "&trisb;"],
    [0, "&rtriltri;"],
    [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }],
    [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }],
    [11, "&iinfin;"],
    [0, "&infintie;"],
    [0, "&nvinfin;"],
    [4, "&eparsl;"],
    [0, "&smeparsl;"],
    [0, "&eqvparsl;"],
    [5, "&blacklozenge;"],
    [8, "&RuleDelayed;"],
    [1, "&dsol;"],
    [9, "&bigodot;"],
    [0, "&bigoplus;"],
    [0, "&bigotimes;"],
    [1, "&biguplus;"],
    [1, "&bigsqcup;"],
    [5, "&iiiint;"],
    [0, "&fpartint;"],
    [2, "&cirfnint;"],
    [0, "&awint;"],
    [0, "&rppolint;"],
    [0, "&scpolint;"],
    [0, "&npolint;"],
    [0, "&pointint;"],
    [0, "&quatint;"],
    [0, "&intlarhk;"],
    [10, "&pluscir;"],
    [0, "&plusacir;"],
    [0, "&simplus;"],
    [0, "&plusdu;"],
    [0, "&plussim;"],
    [0, "&plustwo;"],
    [1, "&mcomma;"],
    [0, "&minusdu;"],
    [2, "&loplus;"],
    [0, "&roplus;"],
    [0, "&Cross;"],
    [0, "&timesd;"],
    [0, "&timesbar;"],
    [1, "&smashp;"],
    [0, "&lotimes;"],
    [0, "&rotimes;"],
    [0, "&otimesas;"],
    [0, "&Otimes;"],
    [0, "&odiv;"],
    [0, "&triplus;"],
    [0, "&triminus;"],
    [0, "&tritime;"],
    [0, "&intprod;"],
    [2, "&amalg;"],
    [0, "&capdot;"],
    [1, "&ncup;"],
    [0, "&ncap;"],
    [0, "&capand;"],
    [0, "&cupor;"],
    [0, "&cupcap;"],
    [0, "&capcup;"],
    [0, "&cupbrcap;"],
    [0, "&capbrcup;"],
    [0, "&cupcup;"],
    [0, "&capcap;"],
    [0, "&ccups;"],
    [0, "&ccaps;"],
    [2, "&ccupssm;"],
    [2, "&And;"],
    [0, "&Or;"],
    [0, "&andand;"],
    [0, "&oror;"],
    [0, "&orslope;"],
    [0, "&andslope;"],
    [1, "&andv;"],
    [0, "&orv;"],
    [0, "&andd;"],
    [0, "&ord;"],
    [1, "&wedbar;"],
    [6, "&sdote;"],
    [3, "&simdot;"],
    [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }],
    [0, "&easter;"],
    [0, "&apacir;"],
    [0, { v: "&apE;", n: 824, o: "&napE;" }],
    [0, "&eplus;"],
    [0, "&pluse;"],
    [0, "&Esim;"],
    [0, "&Colone;"],
    [0, "&Equal;"],
    [1, "&ddotseq;"],
    [0, "&equivDD;"],
    [0, "&ltcir;"],
    [0, "&gtcir;"],
    [0, "&ltquest;"],
    [0, "&gtquest;"],
    [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }],
    [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }],
    [0, "&lesdot;"],
    [0, "&gesdot;"],
    [0, "&lesdoto;"],
    [0, "&gesdoto;"],
    [0, "&lesdotor;"],
    [0, "&gesdotol;"],
    [0, "&lap;"],
    [0, "&gap;"],
    [0, "&lne;"],
    [0, "&gne;"],
    [0, "&lnap;"],
    [0, "&gnap;"],
    [0, "&lEg;"],
    [0, "&gEl;"],
    [0, "&lsime;"],
    [0, "&gsime;"],
    [0, "&lsimg;"],
    [0, "&gsiml;"],
    [0, "&lgE;"],
    [0, "&glE;"],
    [0, "&lesges;"],
    [0, "&gesles;"],
    [0, "&els;"],
    [0, "&egs;"],
    [0, "&elsdot;"],
    [0, "&egsdot;"],
    [0, "&el;"],
    [0, "&eg;"],
    [2, "&siml;"],
    [0, "&simg;"],
    [0, "&simlE;"],
    [0, "&simgE;"],
    [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }],
    [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }],
    [1, "&glj;"],
    [0, "&gla;"],
    [0, "&ltcc;"],
    [0, "&gtcc;"],
    [0, "&lescc;"],
    [0, "&gescc;"],
    [0, "&smt;"],
    [0, "&lat;"],
    [0, { v: "&smte;", n: 65024, o: "&smtes;" }],
    [0, { v: "&late;", n: 65024, o: "&lates;" }],
    [0, "&bumpE;"],
    [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }],
    [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }],
    [2, "&prE;"],
    [0, "&scE;"],
    [0, "&precneqq;"],
    [0, "&scnE;"],
    [0, "&prap;"],
    [0, "&scap;"],
    [0, "&precnapprox;"],
    [0, "&scnap;"],
    [0, "&Pr;"],
    [0, "&Sc;"],
    [0, "&subdot;"],
    [0, "&supdot;"],
    [0, "&subplus;"],
    [0, "&supplus;"],
    [0, "&submult;"],
    [0, "&supmult;"],
    [0, "&subedot;"],
    [0, "&supedot;"],
    [0, { v: "&subE;", n: 824, o: "&nsubE;" }],
    [0, { v: "&supE;", n: 824, o: "&nsupE;" }],
    [0, "&subsim;"],
    [0, "&supsim;"],
    [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }],
    [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }],
    [2, "&csub;"],
    [0, "&csup;"],
    [0, "&csube;"],
    [0, "&csupe;"],
    [0, "&subsup;"],
    [0, "&supsub;"],
    [0, "&subsub;"],
    [0, "&supsup;"],
    [0, "&suphsub;"],
    [0, "&supdsub;"],
    [0, "&forkv;"],
    [0, "&topfork;"],
    [0, "&mlcp;"],
    [8, "&Dashv;"],
    [1, "&Vdashl;"],
    [0, "&Barv;"],
    [0, "&vBar;"],
    [0, "&vBarv;"],
    [1, "&Vbar;"],
    [0, "&Not;"],
    [0, "&bNot;"],
    [0, "&rnmid;"],
    [0, "&cirmid;"],
    [0, "&midcir;"],
    [0, "&topcir;"],
    [0, "&nhpar;"],
    [0, "&parsim;"],
    [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }],
    [
      44343,
      {
        n: new Map(
          Sc([
            [56476, "&Ascr;"],
            [1, "&Cscr;"],
            [0, "&Dscr;"],
            [2, "&Gscr;"],
            [2, "&Jscr;"],
            [0, "&Kscr;"],
            [2, "&Nscr;"],
            [0, "&Oscr;"],
            [0, "&Pscr;"],
            [0, "&Qscr;"],
            [1, "&Sscr;"],
            [0, "&Tscr;"],
            [0, "&Uscr;"],
            [0, "&Vscr;"],
            [0, "&Wscr;"],
            [0, "&Xscr;"],
            [0, "&Yscr;"],
            [0, "&Zscr;"],
            [0, "&ascr;"],
            [0, "&bscr;"],
            [0, "&cscr;"],
            [0, "&dscr;"],
            [1, "&fscr;"],
            [1, "&hscr;"],
            [0, "&iscr;"],
            [0, "&jscr;"],
            [0, "&kscr;"],
            [0, "&lscr;"],
            [0, "&mscr;"],
            [0, "&nscr;"],
            [1, "&pscr;"],
            [0, "&qscr;"],
            [0, "&rscr;"],
            [0, "&sscr;"],
            [0, "&tscr;"],
            [0, "&uscr;"],
            [0, "&vscr;"],
            [0, "&wscr;"],
            [0, "&xscr;"],
            [0, "&yscr;"],
            [0, "&zscr;"],
            [52, "&Afr;"],
            [0, "&Bfr;"],
            [1, "&Dfr;"],
            [0, "&Efr;"],
            [0, "&Ffr;"],
            [0, "&Gfr;"],
            [2, "&Jfr;"],
            [0, "&Kfr;"],
            [0, "&Lfr;"],
            [0, "&Mfr;"],
            [0, "&Nfr;"],
            [0, "&Ofr;"],
            [0, "&Pfr;"],
            [0, "&Qfr;"],
            [1, "&Sfr;"],
            [0, "&Tfr;"],
            [0, "&Ufr;"],
            [0, "&Vfr;"],
            [0, "&Wfr;"],
            [0, "&Xfr;"],
            [0, "&Yfr;"],
            [1, "&afr;"],
            [0, "&bfr;"],
            [0, "&cfr;"],
            [0, "&dfr;"],
            [0, "&efr;"],
            [0, "&ffr;"],
            [0, "&gfr;"],
            [0, "&hfr;"],
            [0, "&ifr;"],
            [0, "&jfr;"],
            [0, "&kfr;"],
            [0, "&lfr;"],
            [0, "&mfr;"],
            [0, "&nfr;"],
            [0, "&ofr;"],
            [0, "&pfr;"],
            [0, "&qfr;"],
            [0, "&rfr;"],
            [0, "&sfr;"],
            [0, "&tfr;"],
            [0, "&ufr;"],
            [0, "&vfr;"],
            [0, "&wfr;"],
            [0, "&xfr;"],
            [0, "&yfr;"],
            [0, "&zfr;"],
            [0, "&Aopf;"],
            [0, "&Bopf;"],
            [1, "&Dopf;"],
            [0, "&Eopf;"],
            [0, "&Fopf;"],
            [0, "&Gopf;"],
            [1, "&Iopf;"],
            [0, "&Jopf;"],
            [0, "&Kopf;"],
            [0, "&Lopf;"],
            [0, "&Mopf;"],
            [1, "&Oopf;"],
            [3, "&Sopf;"],
            [0, "&Topf;"],
            [0, "&Uopf;"],
            [0, "&Vopf;"],
            [0, "&Wopf;"],
            [0, "&Xopf;"],
            [0, "&Yopf;"],
            [1, "&aopf;"],
            [0, "&bopf;"],
            [0, "&copf;"],
            [0, "&dopf;"],
            [0, "&eopf;"],
            [0, "&fopf;"],
            [0, "&gopf;"],
            [0, "&hopf;"],
            [0, "&iopf;"],
            [0, "&jopf;"],
            [0, "&kopf;"],
            [0, "&lopf;"],
            [0, "&mopf;"],
            [0, "&nopf;"],
            [0, "&oopf;"],
            [0, "&popf;"],
            [0, "&qopf;"],
            [0, "&ropf;"],
            [0, "&sopf;"],
            [0, "&topf;"],
            [0, "&uopf;"],
            [0, "&vopf;"],
            [0, "&wopf;"],
            [0, "&xopf;"],
            [0, "&yopf;"],
            [0, "&zopf;"],
          ])
        ),
      },
    ],
    [8906, "&fflig;"],
    [0, "&filig;"],
    [0, "&fllig;"],
    [0, "&ffilig;"],
    [0, "&ffllig;"],
  ])
);
var P0 = /["&'<>$\x80-\uFFFF]/g,
  Eg = new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"],
  ]),
  Cg =
    String.prototype.codePointAt != null
      ? (e, t) => e.codePointAt(t)
      : (e, t) =>
          (e.charCodeAt(t) & 64512) === 55296
            ? (e.charCodeAt(t) - 55296) * 1024 +
              e.charCodeAt(t + 1) -
              56320 +
              65536
            : e.charCodeAt(t);
function ko(e) {
  let t = "",
    n = 0,
    r;
  for (; (r = P0.exec(e)) !== null; ) {
    let u = r.index,
      s = e.charCodeAt(u),
      f = Eg.get(s);
    f !== void 0
      ? ((t += e.substring(n, u) + f), (n = u + 1))
      : ((t += `${e.substring(n, u)}&#x${Cg(e, u).toString(16)};`),
        (n = P0.lastIndex += +((s & 64512) === 55296)));
  }
  return t + e.substr(n);
}
function M0(e, t) {
  return function (r) {
    let u,
      s = 0,
      f = "";
    for (; (u = e.exec(r)); )
      s !== u.index && (f += r.substring(s, u.index)),
        (f += t.get(u[0].charCodeAt(0))),
        (s = u.index + 1);
    return f + r.substring(s);
  };
}
var Rg = M0(/[&<>'"]/g, Eg),
  kc = M0(
    /["&\u00A0]/g,
    new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [160, "&nbsp;"],
    ])
  ),
  Tc = M0(
    /[&<>\u00A0]/g,
    new Map([
      [38, "&amp;"],
      [60, "&lt;"],
      [62, "&gt;"],
      [160, "&nbsp;"],
    ])
  );
var Ig;
(function (e) {
  (e[(e.XML = 0)] = "XML"), (e[(e.HTML = 1)] = "HTML");
})(Ig || (Ig = {}));
var Ag;
(function (e) {
  (e[(e.UTF8 = 0)] = "UTF8"),
    (e[(e.ASCII = 1)] = "ASCII"),
    (e[(e.Extensive = 2)] = "Extensive"),
    (e[(e.Attribute = 3)] = "Attribute"),
    (e[(e.Text = 4)] = "Text");
})(Ag || (Ag = {}));
var Dg = new Map(
    [
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "glyphRef",
      "linearGradient",
      "radialGradient",
      "textPath",
    ].map((e) => [e.toLowerCase(), e])
  ),
  Pg = new Map(
    [
      "definitionURL",
      "attributeName",
      "attributeType",
      "baseFrequency",
      "baseProfile",
      "calcMode",
      "clipPathUnits",
      "diffuseConstant",
      "edgeMode",
      "filterUnits",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "kernelMatrix",
      "kernelUnitLength",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "limitingConeAngle",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "maskContentUnits",
      "maskUnits",
      "numOctaves",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "refX",
      "refY",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textLength",
      "viewBox",
      "viewTarget",
      "xChannelSelector",
      "yChannelSelector",
      "zoomAndPan",
    ].map((e) => [e.toLowerCase(), e])
  );
var D2 = new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript",
]);
function P2(e) {
  return e.replace(/"/g, "&quot;");
}
function M2(e, t) {
  var n;
  if (!e) return;
  let r =
    ((n = t.encodeEntities) !== null && n !== void 0 ? n : t.decodeEntities) ===
    !1
      ? P2
      : t.xmlMode || t.encodeEntities !== "utf8"
      ? ko
      : kc;
  return Object.keys(e)
    .map((u) => {
      var s, f;
      let g = (s = e[u]) !== null && s !== void 0 ? s : "";
      return (
        t.xmlMode === "foreign" &&
          (u = (f = Pg.get(u)) !== null && f !== void 0 ? f : u),
        !t.emptyAttrs && !t.xmlMode && g === "" ? u : `${u}="${r(g)}"`
      );
    })
    .join(" ");
}
var Mg = new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);
function To(e, t = {}) {
  let n = "length" in e ? e : [e],
    r = "";
  for (let u = 0; u < n.length; u++) r += N2(n[u], t);
  return r;
}
function N2(e, t) {
  switch (e.type) {
    case Fm:
      return To(e.children, t);
    case qm:
    case jm:
      return j2(e);
    case Wm:
      return $2(e);
    case Vm:
      return H2(e);
    case Hm:
    case $m:
    case zm:
      return U2(e, t);
    case Um:
      return W2(e, t);
  }
}
var B2 = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title",
  ]),
  F2 = new Set(["svg", "math"]);
function U2(e, t) {
  var n;
  t.xmlMode === "foreign" &&
    ((e.name = (n = Dg.get(e.name)) !== null && n !== void 0 ? n : e.name),
    e.parent && B2.has(e.parent.name) && (t = { ...t, xmlMode: !1 })),
    !t.xmlMode && F2.has(e.name) && (t = { ...t, xmlMode: "foreign" });
  let r = `<${e.name}`,
    u = M2(e.attribs, t);
  return (
    u && (r += ` ${u}`),
    e.children.length === 0 &&
    (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && Mg.has(e.name))
      ? (t.xmlMode || (r += " "), (r += "/>"))
      : ((r += ">"),
        e.children.length > 0 && (r += To(e.children, t)),
        (t.xmlMode || !Mg.has(e.name)) && (r += `</${e.name}>`)),
    r
  );
}
function j2(e) {
  return `<${e.data}>`;
}
function W2(e, t) {
  var n;
  let r = e.data || "";
  return (
    ((n = t.encodeEntities) !== null && n !== void 0 ? n : t.decodeEntities) !==
      !1 &&
      !(!t.xmlMode && e.parent && D2.has(e.parent.name)) &&
      (r = t.xmlMode || t.encodeEntities !== "utf8" ? ko(r) : Tc(r)),
    r
  );
}
function H2(e) {
  return `<![CDATA[${e.children[0].data}]]>`;
}
function $2(e) {
  return `<!--${e.data}-->`;
}
var Ng;
(function (e) {
  (e[(e.DISCONNECTED = 1)] = "DISCONNECTED"),
    (e[(e.PRECEDING = 2)] = "PRECEDING"),
    (e[(e.FOLLOWING = 4)] = "FOLLOWING"),
    (e[(e.CONTAINS = 8)] = "CONTAINS"),
    (e[(e.CONTAINED_BY = 16)] = "CONTAINED_BY");
})(Ng || (Ng = {}));
function Bg(e, t) {
  let n = new ya(void 0, t);
  return new So(n, t).end(e), n.root;
}
var z0 = Zs(Wg(), 1);
function V0(e, t, n = () => {}) {
  if (e === void 0) {
    let r = function (...u) {
      return t(r, ...u);
    };
    return r;
  }
  return e >= 0
    ? function (...r) {
        return t(V0(e - 1, t, n), ...r);
      }
    : n;
}
function qg(e, t) {
  let n = 0,
    r = e.length;
  for (; n < r && e[n] === t; ) ++n;
  for (; r > n && e[r - 1] === t; ) --r;
  return n > 0 || r < e.length ? e.substring(n, r) : e;
}
function ux(e, t) {
  let n = e.length;
  for (; n > 0 && e[n - 1] === t; ) --n;
  return n < e.length ? e.substring(0, n) : e;
}
function ax(e) {
  return e.replace(
    /[\s\S]/g,
    (t) => "\\u" + t.charCodeAt().toString(16).padStart(4, "0")
  );
}
function Gg(e, t) {
  let n = new Map();
  for (let r = e.length; r-- > 0; ) {
    let u = e[r],
      s = t(u);
    n.set(s, n.has(s) ? (0, z0.default)(u, n.get(s), { arrayMerge: sx }) : u);
  }
  return [...n.values()].reverse();
}
var sx = (e, t, n) => [...t];
function Aa(e, t) {
  for (let n of t) {
    if (!e) return;
    e = e[n];
  }
  return e;
}
function Hg(e, t = "a", n = 26) {
  let r = [];
  do (e -= 1), r.push(e % n), (e = (e / n) >> 0);
  while (e > 0);
  let u = t.charCodeAt(0);
  return r
    .reverse()
    .map((s) => String.fromCharCode(u + s))
    .join("");
}
var F0 = ["I", "X", "C", "M"],
  $g = ["V", "L", "D"];
function zg(e) {
  return [...(e + "")]
    .map((t) => +t)
    .reverse()
    .map((t, n) =>
      t % 5 < 4
        ? (t < 5 ? "" : $g[n]) + F0[n].repeat(t % 5)
        : F0[n] + (t < 5 ? $g[n] : F0[n + 1])
    )
    .reverse()
    .join("");
}
var Rc = class {
    constructor(t, n = void 0) {
      (this.lines = []),
        (this.nextLineWords = []),
        (this.maxLineLength = n || t.wordwrap || Number.MAX_VALUE),
        (this.nextLineAvailableChars = this.maxLineLength),
        (this.wrapCharacters =
          Aa(t, ["longWordSplit", "wrapCharacters"]) || []),
        (this.forceWrapOnLimit =
          Aa(t, ["longWordSplit", "forceWrapOnLimit"]) || !1),
        (this.stashedSpace = !1),
        (this.wordBreakOpportunity = !1);
    }
    pushWord(t, n = !1) {
      this.nextLineAvailableChars <= 0 && !n && this.startNewLine();
      let r = this.nextLineWords.length === 0,
        u = t.length + (r ? 0 : 1);
      if (u <= this.nextLineAvailableChars || n)
        this.nextLineWords.push(t), (this.nextLineAvailableChars -= u);
      else {
        let [s, ...f] = this.splitLongWord(t);
        r || this.startNewLine(),
          this.nextLineWords.push(s),
          (this.nextLineAvailableChars -= s.length);
        for (let g of f)
          this.startNewLine(),
            this.nextLineWords.push(g),
            (this.nextLineAvailableChars -= g.length);
      }
    }
    popWord() {
      let t = this.nextLineWords.pop();
      if (t !== void 0) {
        let n = this.nextLineWords.length === 0,
          r = t.length + (n ? 0 : 1);
        this.nextLineAvailableChars += r;
      }
      return t;
    }
    concatWord(t, n = !1) {
      if (this.wordBreakOpportunity && t.length > this.nextLineAvailableChars)
        this.pushWord(t, n), (this.wordBreakOpportunity = !1);
      else {
        let r = this.popWord();
        this.pushWord(r ? r.concat(t) : t, n);
      }
    }
    startNewLine(t = 1) {
      this.lines.push(this.nextLineWords),
        t > 1 && this.lines.push(...Array.from({ length: t - 1 }, () => [])),
        (this.nextLineWords = []),
        (this.nextLineAvailableChars = this.maxLineLength);
    }
    isEmpty() {
      return this.lines.length === 0 && this.nextLineWords.length === 0;
    }
    clear() {
      (this.lines.length = 0),
        (this.nextLineWords.length = 0),
        (this.nextLineAvailableChars = this.maxLineLength);
    }
    toString() {
      return [...this.lines, this.nextLineWords].map((t) => t.join(" ")).join(`
`);
    }
    splitLongWord(t) {
      let n = [],
        r = 0;
      for (; t.length > this.maxLineLength; ) {
        let u = t.substring(0, this.maxLineLength),
          s = t.substring(this.maxLineLength),
          f = u.lastIndexOf(this.wrapCharacters[r]);
        if (f > -1) (t = u.substring(f + 1) + s), n.push(u.substring(0, f + 1));
        else if ((r++, r < this.wrapCharacters.length)) t = u + s;
        else {
          if (this.forceWrapOnLimit) {
            if ((n.push(u), (t = s), t.length > this.maxLineLength)) continue;
          } else t = u + s;
          break;
        }
      }
      return n.push(t), n;
    }
  },
  au = class {
    constructor(t = null) {
      this.next = t;
    }
    getRoot() {
      return this.next ? this.next : this;
    }
  },
  Xt = class extends au {
    constructor(t, n = null, r = 1, u = void 0) {
      super(n),
        (this.leadingLineBreaks = r),
        (this.inlineTextBuilder = new Rc(t, u)),
        (this.rawText = ""),
        (this.stashedLineBreaks = 0),
        (this.isPre = n && n.isPre),
        (this.isNoWrap = n && n.isNoWrap);
    }
  },
  Ic = class extends Xt {
    constructor(
      t,
      n = null,
      {
        interRowLineBreaks: r = 1,
        leadingLineBreaks: u = 2,
        maxLineLength: s = void 0,
        maxPrefixLength: f = 0,
        prefixAlign: g = "left",
      } = {}
    ) {
      super(t, n, u, s),
        (this.maxPrefixLength = f),
        (this.prefixAlign = g),
        (this.interRowLineBreaks = r);
    }
  },
  mr = class extends Xt {
    constructor(
      t,
      n = null,
      {
        leadingLineBreaks: r = 1,
        maxLineLength: u = void 0,
        prefix: s = "",
      } = {}
    ) {
      super(t, n, r, u), (this.prefix = s);
    }
  },
  Ac = class extends au {
    constructor(t = null) {
      super(t),
        (this.rows = []),
        (this.isPre = t && t.isPre),
        (this.isNoWrap = t && t.isNoWrap);
    }
  },
  Lc = class extends au {
    constructor(t = null) {
      super(t),
        (this.cells = []),
        (this.isPre = t && t.isPre),
        (this.isNoWrap = t && t.isNoWrap);
    }
  },
  gr = class extends au {
    constructor(t, n = null, r = void 0) {
      super(n),
        (this.inlineTextBuilder = new Rc(t, r)),
        (this.rawText = ""),
        (this.stashedLineBreaks = 0),
        (this.isPre = n && n.isPre),
        (this.isNoWrap = n && n.isNoWrap);
    }
  },
  U0 = class extends au {
    constructor(t = null, n) {
      super(t), (this.transform = n);
    }
  };
function ox(e) {
  return [...e]
    .map((t) => "\\u" + t.charCodeAt(0).toString(16).padStart(4, "0"))
    .join("");
}
var j0 = class {
    constructor(t) {
      this.whitespaceChars = t.preserveNewlines
        ? t.whitespaceCharacters.replace(/\n/g, "")
        : t.whitespaceCharacters;
      let n = ox(this.whitespaceChars);
      if (
        ((this.leadingWhitespaceRe = new RegExp(`^[${n}]`)),
        (this.trailingWhitespaceRe = new RegExp(`[${n}]$`)),
        (this.allWhitespaceOrEmptyRe = new RegExp(`^[${n}]*$`)),
        (this.newlineOrNonWhitespaceRe = new RegExp(`(\\n|[^\\n${n}])`, "g")),
        (this.newlineOrNonNewlineStringRe = new RegExp("(\\n|[^\\n]+)", "g")),
        t.preserveNewlines)
      ) {
        let r = new RegExp(`\\n|[^\\n${n}]+`, "gm");
        this.shrinkWrapAdd = function (u, s, f = (v) => v, g = !1) {
          if (!u) return;
          let v = s.stashedSpace,
            b = !1,
            x = r.exec(u);
          if (x)
            for (
              b = !0,
                x[0] ===
                `
`
                  ? s.startNewLine()
                  : v || this.testLeadingWhitespace(u)
                  ? s.pushWord(f(x[0]), g)
                  : s.concatWord(f(x[0]), g);
              (x = r.exec(u)) !== null;

            )
              x[0] ===
              `
`
                ? s.startNewLine()
                : s.pushWord(f(x[0]), g);
          s.stashedSpace = (v && !b) || this.testTrailingWhitespace(u);
        };
      } else {
        let r = new RegExp(`[^${n}]+`, "g");
        this.shrinkWrapAdd = function (u, s, f = (v) => v, g = !1) {
          if (!u) return;
          let v = s.stashedSpace,
            b = !1,
            x = r.exec(u);
          if (x)
            for (
              b = !0,
                v || this.testLeadingWhitespace(u)
                  ? s.pushWord(f(x[0]), g)
                  : s.concatWord(f(x[0]), g);
              (x = r.exec(u)) !== null;

            )
              s.pushWord(f(x[0]), g);
          s.stashedSpace = (v && !b) || this.testTrailingWhitespace(u);
        };
      }
    }
    addLiteral(t, n, r = !0) {
      if (!t) return;
      let u = n.stashedSpace,
        s = !1,
        f = this.newlineOrNonNewlineStringRe.exec(t);
      if (f)
        for (
          s = !0,
            f[0] ===
            `
`
              ? n.startNewLine()
              : u
              ? n.pushWord(f[0], r)
              : n.concatWord(f[0], r);
          (f = this.newlineOrNonNewlineStringRe.exec(t)) !== null;

        )
          f[0] ===
          `
`
            ? n.startNewLine()
            : n.pushWord(f[0], r);
      n.stashedSpace = u && !s;
    }
    testLeadingWhitespace(t) {
      return this.leadingWhitespaceRe.test(t);
    }
    testTrailingWhitespace(t) {
      return this.trailingWhitespaceRe.test(t);
    }
    testContainsWords(t) {
      return !this.allWhitespaceOrEmptyRe.test(t);
    }
    countNewlinesNoWords(t) {
      this.newlineOrNonWhitespaceRe.lastIndex = 0;
      let n = 0,
        r;
      for (; (r = this.newlineOrNonWhitespaceRe.exec(t)) !== null; )
        if (
          r[0] ===
          `
`
        )
          n++;
        else return 0;
      return n;
    }
  },
  W0 = class {
    constructor(t, n, r = void 0) {
      (this.options = t),
        (this.picker = n),
        (this.metadata = r),
        (this.whitespaceProcessor = new j0(t)),
        (this._stackItem = new Xt(t)),
        (this._wordTransformer = void 0);
    }
    pushWordTransform(t) {
      this._wordTransformer = new U0(this._wordTransformer, t);
    }
    popWordTransform() {
      if (!this._wordTransformer) return;
      let t = this._wordTransformer.transform;
      return (this._wordTransformer = this._wordTransformer.next), t;
    }
    startNoWrap() {
      this._stackItem.isNoWrap = !0;
    }
    stopNoWrap() {
      this._stackItem.isNoWrap = !1;
    }
    _getCombinedWordTransformer() {
      let t = this._wordTransformer
          ? (r) => Yg(r, this._wordTransformer)
          : void 0,
        n = this.options.encodeCharacters;
      return t ? (n ? (r) => n(t(r)) : t) : n;
    }
    _popStackItem() {
      let t = this._stackItem;
      return (this._stackItem = t.next), t;
    }
    addLineBreak() {
      (this._stackItem instanceof Xt ||
        this._stackItem instanceof mr ||
        this._stackItem instanceof gr) &&
        (this._stackItem.isPre
          ? (this._stackItem.rawText += `
`)
          : this._stackItem.inlineTextBuilder.startNewLine());
    }
    addWordBreakOpportunity() {
      (this._stackItem instanceof Xt ||
        this._stackItem instanceof mr ||
        this._stackItem instanceof gr) &&
        (this._stackItem.inlineTextBuilder.wordBreakOpportunity = !0);
    }
    addInline(t, { noWordTransform: n = !1 } = {}) {
      if (
        this._stackItem instanceof Xt ||
        this._stackItem instanceof mr ||
        this._stackItem instanceof gr
      ) {
        if (this._stackItem.isPre) {
          this._stackItem.rawText += t;
          return;
        }
        if (
          !(
            t.length === 0 ||
            (this._stackItem.stashedLineBreaks &&
              !this.whitespaceProcessor.testContainsWords(t))
          )
        ) {
          if (this.options.preserveNewlines) {
            let r = this.whitespaceProcessor.countNewlinesNoWords(t);
            if (r > 0) {
              this._stackItem.inlineTextBuilder.startNewLine(r);
              return;
            }
          }
          this._stackItem.stashedLineBreaks &&
            this._stackItem.inlineTextBuilder.startNewLine(
              this._stackItem.stashedLineBreaks
            ),
            this.whitespaceProcessor.shrinkWrapAdd(
              t,
              this._stackItem.inlineTextBuilder,
              n ? void 0 : this._getCombinedWordTransformer(),
              this._stackItem.isNoWrap
            ),
            (this._stackItem.stashedLineBreaks = 0);
        }
      }
    }
    addLiteral(t) {
      if (
        (this._stackItem instanceof Xt ||
          this._stackItem instanceof mr ||
          this._stackItem instanceof gr) &&
        t.length !== 0
      ) {
        if (this._stackItem.isPre) {
          this._stackItem.rawText += t;
          return;
        }
        this._stackItem.stashedLineBreaks &&
          this._stackItem.inlineTextBuilder.startNewLine(
            this._stackItem.stashedLineBreaks
          ),
          this.whitespaceProcessor.addLiteral(
            t,
            this._stackItem.inlineTextBuilder,
            this._stackItem.isNoWrap
          ),
          (this._stackItem.stashedLineBreaks = 0);
      }
    }
    openBlock({
      leadingLineBreaks: t = 1,
      reservedLineLength: n = 0,
      isPre: r = !1,
    } = {}) {
      let u = Math.max(20, this._stackItem.inlineTextBuilder.maxLineLength - n);
      (this._stackItem = new Xt(this.options, this._stackItem, t, u)),
        r && (this._stackItem.isPre = !0);
    }
    closeBlock({ trailingLineBreaks: t = 1, blockTransform: n = void 0 } = {}) {
      let r = this._popStackItem(),
        u = n ? n(uu(r)) : uu(r);
      Cc(
        this._stackItem,
        u,
        r.leadingLineBreaks,
        Math.max(r.stashedLineBreaks, t)
      );
    }
    openList({
      maxPrefixLength: t = 0,
      prefixAlign: n = "left",
      interRowLineBreaks: r = 1,
      leadingLineBreaks: u = 2,
    } = {}) {
      this._stackItem = new Ic(this.options, this._stackItem, {
        interRowLineBreaks: r,
        leadingLineBreaks: u,
        maxLineLength: this._stackItem.inlineTextBuilder.maxLineLength,
        maxPrefixLength: t,
        prefixAlign: n,
      });
    }
    openListItem({ prefix: t = "" } = {}) {
      if (!(this._stackItem instanceof Ic))
        throw new Error(
          "Can't add a list item to something that is not a list! Check the formatter."
        );
      let n = this._stackItem,
        r = Math.max(t.length, n.maxPrefixLength),
        u = Math.max(20, n.inlineTextBuilder.maxLineLength - r);
      this._stackItem = new mr(this.options, n, {
        prefix: t,
        maxLineLength: u,
        leadingLineBreaks: n.interRowLineBreaks,
      });
    }
    closeListItem() {
      let t = this._popStackItem(),
        n = t.next,
        r = Math.max(t.prefix.length, n.maxPrefixLength),
        u =
          `
` + " ".repeat(r),
        f =
          (n.prefixAlign === "right"
            ? t.prefix.padStart(r)
            : t.prefix.padEnd(r)) + uu(t).replace(/\n/g, u);
      Cc(
        n,
        f,
        t.leadingLineBreaks,
        Math.max(t.stashedLineBreaks, n.interRowLineBreaks)
      );
    }
    closeList({ trailingLineBreaks: t = 2 } = {}) {
      let n = this._popStackItem(),
        r = uu(n);
      r && Cc(this._stackItem, r, n.leadingLineBreaks, t);
    }
    openTable() {
      this._stackItem = new Ac(this._stackItem);
    }
    openTableRow() {
      if (!(this._stackItem instanceof Ac))
        throw new Error(
          "Can't add a table row to something that is not a table! Check the formatter."
        );
      this._stackItem = new Lc(this._stackItem);
    }
    openTableCell({ maxColumnWidth: t = void 0 } = {}) {
      if (!(this._stackItem instanceof Lc))
        throw new Error(
          "Can't add a table cell to something that is not a table row! Check the formatter."
        );
      this._stackItem = new gr(this.options, this._stackItem, t);
    }
    closeTableCell({ colspan: t = 1, rowspan: n = 1 } = {}) {
      let r = this._popStackItem(),
        u = qg(
          uu(r),
          `
`
        );
      r.next.cells.push({ colspan: t, rowspan: n, text: u });
    }
    closeTableRow() {
      let t = this._popStackItem();
      t.next.rows.push(t.cells);
    }
    closeTable({
      tableToString: t,
      leadingLineBreaks: n = 2,
      trailingLineBreaks: r = 2,
    }) {
      let u = this._popStackItem(),
        s = t(u.rows);
      s && Cc(this._stackItem, s, n, r);
    }
    toString() {
      return uu(this._stackItem.getRoot());
    }
  };
function uu(e) {
  if (!(e instanceof Xt || e instanceof mr || e instanceof gr))
    throw new Error(
      "Only blocks, list items and table cells can be requested for text contents."
    );
  return e.inlineTextBuilder.isEmpty()
    ? e.rawText
    : e.rawText + e.inlineTextBuilder.toString();
}
function Cc(e, t, n, r) {
  if (!(e instanceof Xt || e instanceof mr || e instanceof gr))
    throw new Error(
      "Only blocks, list items and table cells can contain text."
    );
  let u = uu(e),
    s = Math.max(e.stashedLineBreaks, n);
  e.inlineTextBuilder.clear(),
    u
      ? (e.rawText =
          u +
          `
`.repeat(s) +
          t)
      : ((e.rawText = t), (e.leadingLineBreaks = s)),
    (e.stashedLineBreaks = r);
}
function Yg(e, t) {
  return t ? Yg(t.transform(e), t.next) : e;
}
function lx(e = {}) {
  let t = e.selectors.filter((f) => !f.format);
  if (t.length)
    throw new Error(
      "Following selectors have no specified format: " +
        t.map((f) => `\`${f.selector}\``).join(", ")
    );
  let n = new xo(e.selectors.map((f) => [f.selector, f])).build(A0);
  typeof e.encodeCharacters != "function" &&
    (e.encodeCharacters = hx(e.encodeCharacters));
  let r = new xo(e.baseElements.selectors.map((f, g) => [f, g + 1])).build(A0);
  function u(f) {
    return fx(f, e, r);
  }
  let s = V0(e.limits.maxDepth, dx, function (f, g) {
    g.addInline(e.limits.ellipsis || "");
  });
  return function (f, g = void 0) {
    return cx(f, g, e, n, u, s);
  };
}
function cx(e, t, n, r, u, s) {
  let f = n.limits.maxInputLength;
  f &&
    e &&
    e.length > f &&
    (console.warn(
      `Input length ${e.length} is above allowed limit of ${f}. Truncating without ellipsis.`
    ),
    (e = e.substring(0, f)));
  let g = Bg(e, { decodeEntities: n.decodeEntities }),
    v = u(g.children),
    b = new W0(n, r, t);
  return s(v, b), b.toString();
}
function fx(e, t, n) {
  let r = [];
  function u(f, g) {
    g = g.slice(0, t.limits.maxChildNodes);
    for (let v of g) {
      if (v.type !== "tag") continue;
      let b = n.pick1(v);
      if (
        (b > 0
          ? r.push({ selectorIndex: b, element: v })
          : v.children && f(v.children),
        r.length >= t.limits.maxBaseElements)
      )
        return;
    }
  }
  return (
    V0(t.limits.maxDepth, u)(e),
    t.baseElements.orderBy !== "occurrence" &&
      r.sort((f, g) => f.selectorIndex - g.selectorIndex),
    t.baseElements.returnDomByDefault && r.length === 0
      ? e
      : r.map((f) => f.element)
  );
}
function dx(e, t, n) {
  if (!t) return;
  let r = n.options;
  t.length > r.limits.maxChildNodes &&
    ((t = t.slice(0, r.limits.maxChildNodes)),
    t.push({ data: r.limits.ellipsis, type: "text" }));
  for (let s of t)
    switch (s.type) {
      case "text": {
        n.addInline(s.data);
        break;
      }
      case "tag": {
        let f = n.picker.pick1(s),
          g = r.formatters[f.format];
        g(s, e, n, f.options || {});
        break;
      }
    }
}
function hx(e) {
  if (!e || Object.keys(e).length === 0) return;
  let t = Object.entries(e).filter(([, s]) => s !== !1),
    n = new RegExp(t.map(([s]) => `(${ax([...s][0])})`).join("|"), "g"),
    r = t.map(([, s]) => s),
    u = (s, ...f) => r[f.findIndex((g) => g)];
  return (s) => s.replace(n, u);
}
function px(e, t, n, r) {}
function mx(e, t, n, r) {
  n.addLiteral(r.string || "");
}
function gx(e, t, n, r) {
  n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }),
    n.addLiteral(r.string || ""),
    n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function _x(e, t, n, r) {
  t(e.children, n);
}
function bx(e, t, n, r) {
  n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }),
    t(e.children, n),
    n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function Xg(e) {
  let t =
    e.attribs && e.attribs.length
      ? " " +
        Object.entries(e.attribs)
          .map(([n, r]) => (r === "" ? n : `${n}=${r.replace(/"/g, "&quot;")}`))
          .join(" ")
      : "";
  return `<${e.name}${t}>`;
}
function Zg(e) {
  return `</${e.name}>`;
}
function vx(e, t, n, r) {
  n.startNoWrap(),
    n.addLiteral(Xg(e)),
    n.stopNoWrap(),
    t(e.children, n),
    n.startNoWrap(),
    n.addLiteral(Zg(e)),
    n.stopNoWrap();
}
function yx(e, t, n, r) {
  n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }),
    n.startNoWrap(),
    n.addLiteral(Xg(e)),
    n.stopNoWrap(),
    t(e.children, n),
    n.startNoWrap(),
    n.addLiteral(Zg(e)),
    n.stopNoWrap(),
    n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function xx(e, t, n, r) {
  n.startNoWrap(),
    n.addLiteral(To(e, { decodeEntities: n.options.decodeEntities })),
    n.stopNoWrap();
}
function wx(e, t, n, r) {
  n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }),
    n.startNoWrap(),
    n.addLiteral(To(e, { decodeEntities: n.options.decodeEntities })),
    n.stopNoWrap(),
    n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function Sx(e, t, n, r) {
  n.addLiteral(r.prefix || ""), t(e.children, n), n.addLiteral(r.suffix || "");
}
var kx = Object.freeze({
  __proto__: null,
  block: bx,
  blockHtml: wx,
  blockString: gx,
  blockTag: yx,
  inline: _x,
  inlineHtml: xx,
  inlineString: mx,
  inlineSurround: Sx,
  inlineTag: vx,
  skip: px,
});
function Oc(e, t) {
  return e[t] || (e[t] = []), e[t];
}
function Tx(e, t = 0) {
  for (; e[t]; ) t++;
  return t;
}
function Ex(e, t) {
  for (let n = 0; n < t; n++) {
    let r = Oc(e, n);
    for (let u = 0; u < n; u++) {
      let s = Oc(e, u);
      if (r[u] || s[n]) {
        let f = r[u];
        (r[u] = s[n]), (s[n] = f);
      }
    }
  }
}
function Cx(e, t, n, r) {
  for (let u = 0; u < e.rowspan; u++) {
    let s = Oc(t, n + u);
    for (let f = 0; f < e.colspan; f++) s[r + f] = e;
  }
}
function H0(e, t) {
  return e[t] === void 0 && (e[t] = t === 0 ? 0 : 1 + H0(e, t - 1)), e[t];
}
function Vg(e, t, n, r) {
  e[t + n] = Math.max(H0(e, t + n), H0(e, t) + r);
}
function Rx(e, t, n) {
  let r = [],
    u = 0,
    s = e.length,
    f = [0];
  for (let b = 0; b < s; b++) {
    let x = Oc(r, b),
      T = e[b],
      D = 0;
    for (let L = 0; L < T.length; L++) {
      let B = T[L];
      (D = Tx(x, D)),
        Cx(B, r, b, D),
        (D += B.colspan),
        (B.lines = B.text.split(`
`));
      let Z = B.lines.length;
      Vg(f, b, B.rowspan, Z + t);
    }
    u = x.length > u ? x.length : u;
  }
  Ex(r, s > u ? s : u);
  let g = [],
    v = [0];
  for (let b = 0; b < u; b++) {
    let x = 0,
      T,
      D = Math.min(s, r[b].length);
    for (; x < D; )
      if (((T = r[b][x]), T)) {
        if (!T.rendered) {
          let L = 0;
          for (let B = 0; B < T.lines.length; B++) {
            let Z = T.lines[B],
              O = f[x] + B;
            (g[O] = (g[O] || "").padEnd(v[b]) + Z),
              (L = Z.length > L ? Z.length : L);
          }
          Vg(v, b, T.colspan, L + n), (T.rendered = !0);
        }
        x += T.rowspan;
      } else {
        let L = f[x];
        (g[L] = g[L] || ""), x++;
      }
  }
  return g.join(`
`);
}
function Ix(e, t, n, r) {
  n.addLineBreak();
}
function Ax(e, t, n, r) {
  n.addWordBreakOpportunity();
}
function Lx(e, t, n, r) {
  n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }),
    n.addInline("-".repeat(r.length || n.options.wordwrap || 40)),
    n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function Ox(e, t, n, r) {
  n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }),
    t(e.children, n),
    n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function Dx(e, t, n, r) {
  n.openBlock({ isPre: !0, leadingLineBreaks: r.leadingLineBreaks || 2 }),
    t(e.children, n),
    n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function Px(e, t, n, r) {
  n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }),
    r.uppercase !== !1
      ? (n.pushWordTransform((u) => u.toUpperCase()),
        t(e.children, n),
        n.popWordTransform())
      : t(e.children, n),
    n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function Mx(e, t, n, r) {
  n.openBlock({
    leadingLineBreaks: r.leadingLineBreaks || 2,
    reservedLineLength: 2,
  }),
    t(e.children, n),
    n.closeBlock({
      trailingLineBreaks: r.trailingLineBreaks || 2,
      blockTransform: (u) =>
        (r.trimEmptyLines !== !1
          ? qg(
              u,
              `
`
            )
          : u
        )
          .split(
            `
`
          )
          .map((s) => "> " + s).join(`
`),
    });
}
function $0(e, t) {
  if (!t) return e;
  let n = typeof t[0] == "string" ? t[0] : "[",
    r = typeof t[1] == "string" ? t[1] : "]";
  return n + e + r;
}
function Kg(e, t, n, r, u) {
  let s = typeof t == "function" ? t(e, r, u) : e;
  return s[0] === "/" && n ? ux(n, "/") + s : s;
}
function Nx(e, t, n, r) {
  let u = e.attribs || {},
    s = u.alt ? u.alt : "",
    f = u.src ? Kg(u.src, r.pathRewrite, r.baseUrl, n.metadata, e) : "",
    g = f ? (s ? s + " " + $0(f, r.linkBrackets) : $0(f, r.linkBrackets)) : s;
  n.addInline(g, { noWordTransform: !0 });
}
function Bx(e, t, n, r) {
  function u() {
    if (r.ignoreHref || !e.attribs || !e.attribs.href) return "";
    let f = e.attribs.href.replace(/^mailto:/, "");
    return r.noAnchorUrl && f[0] === "#"
      ? ""
      : ((f = Kg(f, r.pathRewrite, r.baseUrl, n.metadata, e)), f);
  }
  let s = u();
  if (!s) t(e.children, n);
  else {
    let f = "";
    n.pushWordTransform((v) => (v && (f += v), v)),
      t(e.children, n),
      n.popWordTransform(),
      (r.hideLinkHrefIfSameAsText && s === f) ||
        n.addInline(f ? " " + $0(s, r.linkBrackets) : s, {
          noWordTransform: !0,
        });
  }
}
function Jg(e, t, n, r, u) {
  let s = Aa(e, ["parent", "name"]) === "li",
    f = 0,
    g = (e.children || [])
      .filter((v) => v.type !== "text" || !/^\s*$/.test(v.data))
      .map(function (v) {
        if (v.name !== "li") return { node: v, prefix: "" };
        let b = s ? u().trimStart() : u();
        return b.length > f && (f = b.length), { node: v, prefix: b };
      });
  if (g.length) {
    n.openList({
      interRowLineBreaks: 1,
      leadingLineBreaks: s ? 1 : r.leadingLineBreaks || 2,
      maxPrefixLength: f,
      prefixAlign: "left",
    });
    for (let { node: v, prefix: b } of g)
      n.openListItem({ prefix: b }), t([v], n), n.closeListItem();
    n.closeList({ trailingLineBreaks: s ? 1 : r.trailingLineBreaks || 2 });
  }
}
function Fx(e, t, n, r) {
  let u = r.itemPrefix || " * ";
  return Jg(e, t, n, r, () => u);
}
function Ux(e, t, n, r) {
  let u = Number(e.attribs.start || "1"),
    s = jx(e.attribs.type);
  return Jg(e, t, n, r, () => " " + s(u++) + ". ");
}
function jx(e = "1") {
  switch (e) {
    case "a":
      return (t) => Hg(t, "a");
    case "A":
      return (t) => Hg(t, "A");
    case "i":
      return (t) => zg(t).toLowerCase();
    case "I":
      return (t) => zg(t);
    case "1":
    default:
      return (t) => t.toString();
  }
}
function Wx(e) {
  let t = [],
    n = [];
  for (let r of e)
    r.startsWith(".")
      ? t.push(r.substring(1))
      : r.startsWith("#") && n.push(r.substring(1));
  return { classes: t, ids: n };
}
function Hx(e, t) {
  if (t === !0) return !0;
  if (!e) return !1;
  let { classes: n, ids: r } = Wx(t),
    u = (e.class || "").split(" "),
    s = (e.id || "").split(" ");
  return u.some((f) => n.includes(f)) || s.some((f) => r.includes(f));
}
function $x(e, t, n, r) {
  return Hx(e.attribs, n.options.tables) ? Qg(e, t, n, r) : zx(e, t, n, r);
}
function zx(e, t, n, r) {
  n.openBlock({ leadingLineBreaks: r.leadingLineBreaks }),
    t(e.children, n),
    n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks });
}
function Qg(e, t, n, r) {
  n.openTable(),
    e.children.forEach(s),
    n.closeTable({
      tableToString: (f) => Rx(f, r.rowSpacing ?? 0, r.colSpacing ?? 3),
      leadingLineBreaks: r.leadingLineBreaks,
      trailingLineBreaks: r.trailingLineBreaks,
    });
  function u(f) {
    let g = +Aa(f, ["attribs", "colspan"]) || 1,
      v = +Aa(f, ["attribs", "rowspan"]) || 1;
    n.openTableCell({ maxColumnWidth: r.maxColumnWidth }),
      t(f.children, n),
      n.closeTableCell({ colspan: g, rowspan: v });
  }
  function s(f) {
    if (f.type !== "tag") return;
    let g =
      r.uppercaseHeaderCells !== !1
        ? (v) => {
            n.pushWordTransform((b) => b.toUpperCase()),
              u(v),
              n.popWordTransform();
          }
        : u;
    switch (f.name) {
      case "thead":
      case "tbody":
      case "tfoot":
      case "center":
        f.children.forEach(s);
        return;
      case "tr": {
        n.openTableRow();
        for (let v of f.children)
          if (v.type === "tag")
            switch (v.name) {
              case "th": {
                g(v);
                break;
              }
              case "td": {
                u(v);
                break;
              }
            }
        n.closeTableRow();
        break;
      }
    }
  }
}
var Vx = Object.freeze({
    __proto__: null,
    anchor: Bx,
    blockquote: Mx,
    dataTable: Qg,
    heading: Px,
    horizontalLine: Lx,
    image: Nx,
    lineBreak: Ix,
    orderedList: Ux,
    paragraph: Ox,
    pre: Dx,
    table: $x,
    unorderedList: Fx,
    wbr: Ax,
  }),
  qx = {
    baseElements: {
      selectors: ["body"],
      orderBy: "selectors",
      returnDomByDefault: !0,
    },
    decodeEntities: !0,
    encodeCharacters: {},
    formatters: {},
    limits: {
      ellipsis: "...",
      maxBaseElements: void 0,
      maxChildNodes: void 0,
      maxDepth: void 0,
      maxInputLength: 1 << 24,
    },
    longWordSplit: { forceWrapOnLimit: !1, wrapCharacters: [] },
    preserveNewlines: !1,
    selectors: [
      { selector: "*", format: "inline" },
      {
        selector: "a",
        format: "anchor",
        options: {
          baseUrl: null,
          hideLinkHrefIfSameAsText: !1,
          ignoreHref: !1,
          linkBrackets: ["[", "]"],
          noAnchorUrl: !0,
        },
      },
      {
        selector: "article",
        format: "block",
        options: { leadingLineBreaks: 1, trailingLineBreaks: 1 },
      },
      {
        selector: "aside",
        format: "block",
        options: { leadingLineBreaks: 1, trailingLineBreaks: 1 },
      },
      {
        selector: "blockquote",
        format: "blockquote",
        options: {
          leadingLineBreaks: 2,
          trailingLineBreaks: 2,
          trimEmptyLines: !0,
        },
      },
      { selector: "br", format: "lineBreak" },
      {
        selector: "div",
        format: "block",
        options: { leadingLineBreaks: 1, trailingLineBreaks: 1 },
      },
      {
        selector: "footer",
        format: "block",
        options: { leadingLineBreaks: 1, trailingLineBreaks: 1 },
      },
      {
        selector: "form",
        format: "block",
        options: { leadingLineBreaks: 1, trailingLineBreaks: 1 },
      },
      {
        selector: "h1",
        format: "heading",
        options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: !0 },
      },
      {
        selector: "h2",
        format: "heading",
        options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: !0 },
      },
      {
        selector: "h3",
        format: "heading",
        options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: !0 },
      },
      {
        selector: "h4",
        format: "heading",
        options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: !0 },
      },
      {
        selector: "h5",
        format: "heading",
        options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: !0 },
      },
      {
        selector: "h6",
        format: "heading",
        options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: !0 },
      },
      {
        selector: "header",
        format: "block",
        options: { leadingLineBreaks: 1, trailingLineBreaks: 1 },
      },
      {
        selector: "hr",
        format: "horizontalLine",
        options: {
          leadingLineBreaks: 2,
          length: void 0,
          trailingLineBreaks: 2,
        },
      },
      {
        selector: "img",
        format: "image",
        options: { baseUrl: null, linkBrackets: ["[", "]"] },
      },
      {
        selector: "main",
        format: "block",
        options: { leadingLineBreaks: 1, trailingLineBreaks: 1 },
      },
      {
        selector: "nav",
        format: "block",
        options: { leadingLineBreaks: 1, trailingLineBreaks: 1 },
      },
      {
        selector: "ol",
        format: "orderedList",
        options: { leadingLineBreaks: 2, trailingLineBreaks: 2 },
      },
      {
        selector: "p",
        format: "paragraph",
        options: { leadingLineBreaks: 2, trailingLineBreaks: 2 },
      },
      {
        selector: "pre",
        format: "pre",
        options: { leadingLineBreaks: 2, trailingLineBreaks: 2 },
      },
      {
        selector: "section",
        format: "block",
        options: { leadingLineBreaks: 1, trailingLineBreaks: 1 },
      },
      {
        selector: "table",
        format: "table",
        options: {
          colSpacing: 3,
          leadingLineBreaks: 2,
          maxColumnWidth: 60,
          rowSpacing: 0,
          trailingLineBreaks: 2,
          uppercaseHeaderCells: !0,
        },
      },
      {
        selector: "ul",
        format: "unorderedList",
        options: {
          itemPrefix: " * ",
          leadingLineBreaks: 2,
          trailingLineBreaks: 2,
        },
      },
      { selector: "wbr", format: "wbr" },
    ],
    tables: [],
    whitespaceCharacters: ` 	\r
\f\u200B`,
    wordwrap: 80,
  },
  Gx = (e, t, n) => [...e, ...t],
  e_ = (e, t, n) => [...t],
  Yx = (e, t, n) => (e.some((r) => typeof r == "object") ? Gx(e, t) : e_(e, t));
function Xx(e = {}) {
  return (
    (e = (0, z0.default)(qx, e, {
      arrayMerge: e_,
      customMerge: (t) => (t === "selectors" ? Yx : void 0),
    })),
    (e.formatters = Object.assign({}, kx, Vx, e.formatters)),
    (e.selectors = Gg(e.selectors, (t) => t.selector)),
    Zx(e),
    lx(e)
  );
}
function q0(e, t = {}, n = void 0) {
  return Xx(t)(e, n);
}
function Zx(e) {
  if (e.tags) {
    let n = Object.entries(e.tags).map(([r, u]) => ({
      ...u,
      selector: r || "*",
    }));
    e.selectors.push(...n), (e.selectors = Gg(e.selectors, (r) => r.selector));
  }
  function t(n, r, u) {
    let s = r.pop();
    for (let f of r) {
      let g = n[f];
      g || ((g = {}), (n[f] = g)), (n = g);
    }
    n[s] = u;
  }
  if (e.baseElement) {
    let n = e.baseElement;
    t(e, ["baseElements", "selectors"], Array.isArray(n) ? n : [n]);
  }
  e.returnDomByDefault !== void 0 &&
    t(e, ["baseElements", "returnDomByDefault"], e.returnDomByDefault);
  for (let n of e.selectors)
    n.format === "anchor" &&
      Aa(n, ["options", "noLinkBrackets"]) &&
      t(n, ["options", "linkBrackets"], !1);
}
var sb = Zs(tb(), 1);
var e3 = Object.defineProperty,
  nb = Object.getOwnPropertySymbols,
  t3 = Object.prototype.hasOwnProperty,
  n3 = Object.prototype.propertyIsEnumerable,
  rb = (e, t) => {
    if ((t = Symbol[e])) return t;
    throw Error("Symbol." + e + " is not defined");
  },
  ib = (e, t, n) =>
    t in e
      ? e3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  mh = (e, t) => {
    for (var n in t || (t = {})) t3.call(t, n) && ib(e, n, t[n]);
    if (nb) for (var n of nb(t)) n3.call(t, n) && ib(e, n, t[n]);
    return e;
  },
  ab = (e, t, n) =>
    new Promise((r, u) => {
      var s = (v) => {
          try {
            g(n.next(v));
          } catch (b) {
            u(b);
          }
        },
        f = (v) => {
          try {
            g(n.throw(v));
          } catch (b) {
            u(b);
          }
        },
        g = (v) => (v.done ? r(v.value) : Promise.resolve(v.value).then(s, f));
      g((n = n.apply(e, t)).next());
    }),
  r3 = (e, t, n) =>
    (t = e[rb("asyncIterator")])
      ? t.call(e)
      : ((e = e[rb("iterator")]()),
        (t = {}),
        (n = (r, u) =>
          (u = e[r]) &&
          (t[r] = (s) =>
            new Promise(
              (f, g, v) => (
                (s = u.call(e, s)),
                (v = s.done),
                Promise.resolve(s.value).then(
                  (b) => f({ value: b, done: v }),
                  g
                )
              )
            ))),
        n("next"),
        n("return"),
        t),
  u3 = {
    unformatted: ["code", "pre", "em", "strong", "span"],
    indent_inner_html: !0,
    indent_char: " ",
    indent_size: 2,
    sep: `
`,
  },
  a3 = (e, t = {}) => sb.default.html(e, mh(mh({}, u3), t)),
  s3 = [
    { selector: "img", format: "skip" },
    { selector: "#__react-email-preview", format: "skip" },
    { selector: "a", options: { linkBrackets: !1 } },
  ];
var ub = new TextDecoder("utf-8"),
  o3 = (e) =>
    ab(void 0, null, function* () {
      let t = "";
      if ("allReady" in e) {
        let f = e.getReader();
        for (;;) {
          let { value: g, done: v } = yield f.read();
          if (v) break;
          t += ub.decode(g);
        }
      } else
        try {
          for (
            var n = r3(e), r, u, s;
            (r = !(u = yield n.next()).done);
            r = !1
          ) {
            let f = u.value;
            t += ub.decode(Buffer.from(f));
          }
        } catch (f) {
          s = [f];
        } finally {
          try {
            r && (u = n.return) && (yield u.call(n));
          } finally {
            if (s) throw s[0];
          }
        }
      return t;
    }),
  $c = (e, t) =>
    ab(void 0, null, function* () {
      var n;
      let r = (yield Promise.resolve().then(() => Zs(h0(), 1))).default,
        u =
          (n = r.renderToReadableStream) != null
            ? n
            : r.renderToStaticNodeStream,
        s =
          '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
        f = yield u(e),
        g = typeof f == "string" ? f : yield o3(f);
      if (t?.plainText)
        return q0(g, mh({ selectors: s3 }, t.htmlToTextOptions));
      let v = `${s}${g}`;
      return t?.pretty ? a3(v) : v;
    });
var l3 = Object.defineProperty,
  ob = Object.getOwnPropertySymbols,
  c3 = Object.prototype.hasOwnProperty,
  f3 = Object.prototype.propertyIsEnumerable,
  lb = (e, t, n) =>
    t in e
      ? l3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  zc = (e, t) => {
    for (var n in t || (t = {})) c3.call(t, n) && lb(e, n, t[n]);
    if (ob) for (var n of ob(t)) f3.call(t, n) && lb(e, n, t[n]);
    return e;
  },
  me = (e, t, n) =>
    new Promise((r, u) => {
      var s = (v) => {
          try {
            g(n.next(v));
          } catch (b) {
            u(b);
          }
        },
        f = (v) => {
          try {
            g(n.throw(v));
          } catch (b) {
            u(b);
          }
        },
        g = (v) => (v.done ? r(v.value) : Promise.resolve(v.value).then(s, f));
      g((n = n.apply(e, t)).next());
    }),
  d3 = "3.1.0",
  h3 = class {
    constructor(e) {
      this.resend = e;
    }
    create(e) {
      return me(this, arguments, function* (t, n = {}) {
        return yield this.resend.post("/api-keys", t, n);
      });
    }
    list() {
      return me(this, null, function* () {
        return yield this.resend.get("/api-keys");
      });
    }
    remove(e) {
      return me(this, null, function* () {
        return yield this.resend.delete(`/api-keys/${e}`);
      });
    }
  },
  p3 = class {
    constructor(e) {
      this.resend = e;
    }
    create(e) {
      return me(this, arguments, function* (t, n = {}) {
        return yield this.resend.post("/audiences", t, n);
      });
    }
    list() {
      return me(this, null, function* () {
        return yield this.resend.get("/audiences");
      });
    }
    get(e) {
      return me(this, null, function* () {
        return yield this.resend.get(`/audiences/${e}`);
      });
    }
    remove(e) {
      return me(this, null, function* () {
        return yield this.resend.delete(`/audiences/${e}`);
      });
    }
  },
  m3 = class {
    constructor(e) {
      this.resend = e;
    }
    send(e) {
      return me(this, arguments, function* (t, n = {}) {
        return this.create(t, n);
      });
    }
    create(e) {
      return me(this, arguments, function* (t, n = {}) {
        for (let u of t)
          u.react && ((u.html = yield $c(u.react)), delete u.react);
        return yield this.resend.post("/emails/batch", t, n);
      });
    }
  },
  g3 = class {
    constructor(e) {
      this.resend = e;
    }
    create(e) {
      return me(this, arguments, function* (t, n = {}) {
        return yield this.resend.post(
          `/audiences/${t.audienceId}/contacts`,
          {
            unsubscribed: t.unsubscribed,
            email: t.email,
            first_name: t.firstName,
            last_name: t.lastName,
          },
          n
        );
      });
    }
    list(e) {
      return me(this, null, function* () {
        return yield this.resend.get(`/audiences/${e.audienceId}/contacts`);
      });
    }
    get(e) {
      return me(this, null, function* () {
        return yield this.resend.get(
          `/audiences/${e.audienceId}/contacts/${e.id}`
        );
      });
    }
    update(e) {
      return me(this, null, function* () {
        return yield this.resend.patch(
          `/audiences/${e.audienceId}/contacts/${e.id}`,
          {
            unsubscribed: e.unsubscribed,
            first_name: e.fistName,
            last_name: e.lastName,
          }
        );
      });
    }
    remove(e) {
      return me(this, null, function* () {
        return yield this.resend.delete(
          `/audiences/${e.audienceId}/contacts/${e?.email ? e?.email : e?.id}`
        );
      });
    }
  },
  _3 = class {
    constructor(e) {
      this.resend = e;
    }
    create(e) {
      return me(this, arguments, function* (t, n = {}) {
        return yield this.resend.post("/domains", t, n);
      });
    }
    list() {
      return me(this, null, function* () {
        return yield this.resend.get("/domains");
      });
    }
    get(e) {
      return me(this, null, function* () {
        return yield this.resend.get(`/domains/${e}`);
      });
    }
    remove(e) {
      return me(this, null, function* () {
        return yield this.resend.delete(`/domains/${e}`);
      });
    }
    verify(e) {
      return me(this, null, function* () {
        return yield this.resend.post(`/domains/${e}/verify`);
      });
    }
  },
  b3 = class {
    constructor(e) {
      this.resend = e;
    }
    send(e) {
      return me(this, arguments, function* (t, n = {}) {
        return this.create(t, n);
      });
    }
    create(e) {
      return me(this, arguments, function* (t, n = {}) {
        return (
          t.react && ((t.html = yield $c(t.react)), delete t.react),
          yield this.resend.post("/emails", t, n)
        );
      });
    }
    get(e) {
      return me(this, null, function* () {
        return yield this.resend.get(`/emails/${e}`);
      });
    }
  },
  v3 = (e) => {
    if (typeof e != "object" || e === null) return !1;
    let t = e;
    if (typeof t != "object" || t === null) return !1;
    let { message: n, name: r } = t;
    return typeof n == "string" && typeof r == "string";
  },
  cb = "https://api.resend.com",
  fb = `resend-node:${d3}`,
  y3 =
    (typeof process < "u" && process.env && process.env.RESEND_BASE_URL) || cb,
  x3 =
    (typeof process < "u" && process.env && process.env.RESEND_USER_AGENT) ||
    fb,
  db = class {
    constructor(e) {
      if (
        ((this.key = e),
        (this.apiKeys = new h3(this)),
        (this.audiences = new p3(this)),
        (this.batch = new m3(this)),
        (this.contacts = new g3(this)),
        (this.domains = new _3(this)),
        (this.emails = new b3(this)),
        !e &&
          (typeof process < "u" &&
            process.env &&
            (this.key = process.env.RESEND_API_KEY),
          !this.key))
      )
        throw new Error(
          'Missing API key. Pass it to the constructor `new Resend("re_123")`'
        );
      this.headers = new Headers({
        Authorization: `Bearer ${this.key}`,
        "User-Agent": x3,
        "Content-Type": "application/json",
      });
    }
    fetchRequest(e) {
      return me(this, arguments, function* (t, n = {}) {
        let r = yield fetch(`${y3}${t}`, n);
        if (!r.ok) {
          let s = yield r.json();
          return v3(s) ? { data: null, error: s } : { data: null, error: s };
        }
        return { data: yield r.json(), error: null };
      });
    }
    post(e, t) {
      return me(this, arguments, function* (n, r, u = {}) {
        let s = zc(
          { method: "POST", headers: this.headers, body: JSON.stringify(r) },
          u
        );
        return this.fetchRequest(n, s);
      });
    }
    get(e) {
      return me(this, arguments, function* (t, n = {}) {
        let r = zc({ method: "GET", headers: this.headers }, n);
        return this.fetchRequest(t, r);
      });
    }
    put(e, t) {
      return me(this, arguments, function* (n, r, u = {}) {
        let s = zc(
          { method: "PUT", headers: this.headers, body: JSON.stringify(r) },
          u
        );
        return this.fetchRequest(n, s);
      });
    }
    patch(e, t) {
      return me(this, arguments, function* (n, r, u = {}) {
        let s = zc(
          { method: "PATCH", headers: this.headers, body: JSON.stringify(r) },
          u
        );
        return this.fetchRequest(n, s);
      });
    }
    delete(e, t) {
      return me(this, null, function* () {
        let n = {
          method: "DELETE",
          headers: this.headers,
          body: JSON.stringify(t),
        };
        return this.fetchRequest(e, n);
      });
    }
  };
var w3 = new db(process.env.RESEND_API_KEY),
  pb = {
    messages: {
      insert: [
        {
          handler: async (e, t) => {
            let n = await t.query.users.findFirst({
              where: (0, hb.eq)(da.userId, e.userId),
            });
            n &&
              w3.emails.send({
                from: "onboarding@resend.dev",
                to: "dave.alex.maier@gmail.com",
                subject: `New chat message from ${n?.username}`,
                html: `<p>User ${n?.username} sent you a message!</p>
            <p style="margin-left: 20px">${e.messageText}</p>`,
              });
          },
          name: "email",
        },
      ],
    },
  };
var Ib = require("drizzle-orm");
var bb =
  /^([0-9]{4})-([0-1][0-9])(?:-([0-3][0-9]))?(?:[T ]?([0-2][0-9])(?::([0-5][0-9]))?(?::([0-5][0-9]))?)?(?:\.[0-9]+)?(Z|(?:\+|\-)[0-9]{4})?$/;
function S3(e) {
  let t = e.match(bb);
  if (t) {
    let n = Number(t[2]);
    if (n < 1 || n > 12) return !1;
    if (typeof t[3] !== void 0) {
      let r = Number(t[3]);
      if (r < 1 || r > 31) return !1;
    }
    if (typeof t[4] !== void 0) {
      let r = Number(t[4]);
      if (r < 0 || r > 23) return !1;
    }
    return !0;
  }
  return !1;
}
function k3(e) {
  let t = e.match(bb);
  return t && typeof t[4] > "u" ? (e += "T00:00:00") : e;
}
function fu(e) {
  if ((e || (e = new Date()), e instanceof Date)) {
    let t = new Date(e);
    return t.setMilliseconds(0), t;
  }
  if (((e = e.trim()), S3(e))) return new Date(k3(e));
  throw new Error(`Non ISO 8601 compliant date (${e}).`);
}
function T3(e) {
  let t = fu(e);
  return t.setDate(1), t.setMonth(t.getMonth() + 1), t.setDate(0), t;
}
function E3(e) {
  return T3(e).getDate();
}
var bh = "1999-03-04T02:05:01.000Z",
  gh = new Map(),
  vh = [
    ["YYYY", { year: "numeric" }],
    ["YY", { year: "2-digit" }],
    ["MMMM", { month: "long" }],
    ["MMM", { month: "short" }],
    ["MM", { month: "2-digit" }],
    ["M", { month: "numeric" }],
    ["DD", { day: "2-digit" }],
    ["D", { day: "numeric" }],
    ["dddd", { weekday: "long" }],
    ["ddd", { weekday: "short" }],
    ["d", { weekday: "narrow" }],
    ["mm", { minute: "2-digit" }],
    ["m", { minute: "numeric" }],
    ["ss", { second: "2-digit" }],
    ["s", { second: "numeric" }],
    ["Z", { timeZoneName: "short" }],
  ],
  yh = [
    ["HH", { hour: "2-digit" }],
    ["H", { hour: "numeric" }],
  ],
  xh = [
    ["hh", { hour: "2-digit" }],
    ["h", { hour: "numeric" }],
    ["a", { dayPeriod: "narrow" }],
    ["A", { dayPeriod: "narrow" }],
  ],
  Vc = { DD: 2, HH: 2, MM: 2, YY: 2, YYYY: 4, hh: 2, mm: 2, ss: 2, Z: 5 },
  C3 = ["MMMM", "MMM", "dddd", "ddd"],
  Ne = new Map([...vh, ...yh, ...xh].map((e) => [e[0], e])),
  mb = new Map(),
  vb = ["full", "long", "medium", "short"],
  si = (e) => String(e).padStart(2, "0"),
  _h = (e) => String(e).padStart(2, "0");
function vr(e) {
  return e.type === "literal" && (e.value = e.value.normalize("NFKC")), e;
}
function R3(e, t, n, r = !1) {
  let u = I3(e, t, n, r),
    s = fu(e);
  function f({ partName: g, partValue: v, token: b }) {
    if (g === "literal") return v;
    let x = u[g];
    if (g === "hour" && b === "H") return x.replace(/^0/, "");
    if (
      (g === "minute" || g === "second") &&
      (b === "mm" || b === "ss") &&
      x.length === 1
    )
      return `0${x}`;
    if (g === "dayPeriod") {
      let T = La(s.getHours() < 12 ? "am" : "pm", n);
      return b === "A" ? T.toUpperCase() : T.toLowerCase();
    }
    return g === "timeZoneName" ? yb(-1 * s.getTimezoneOffset()) : x;
  }
  return t.map((g) => ({ ...g, value: f(g) }));
}
function I3(e, t, n, r = !1) {
  let u = fu(e),
    s = t.filter((x) => x.hour12),
    f = t.filter((x) => !x.hour12),
    g = [],
    v = [];
  function b(x, T = !1) {
    let D = `${n}-u-hc-${T ? "h12" : "h23"}`;
    if (
      (g.push(
        ...new Intl.DateTimeFormat(
          D,
          x.reduce(
            (L, B) =>
              B.partName === "literal"
                ? L
                : (r && C3.includes(B.token) && v.push(B),
                  Object.assign(L, B.option)),
            {}
          )
        )
          .formatToParts(u)
          .map(vr)
      ),
      r && v.length)
    )
      for (let L of v) {
        let B = [];
        switch (L.token) {
          case "MMMM":
            B = new Intl.DateTimeFormat(D, { dateStyle: "long" })
              .formatToParts(u)
              .map(vr);
            break;
          case "MMM":
            B = new Intl.DateTimeFormat(D, { dateStyle: "medium" })
              .formatToParts(u)
              .map(vr);
            break;
        }
        let Z = B.find((K) => K.type === L.partName),
          O = g.findIndex((K) => K.type === L.partName);
        Z && O > -1 && (g[O] = Z);
      }
  }
  return (
    s.length && b(s, !0),
    f.length && b(f),
    g.reduce((x, T) => ((x[T.type] = T.value), x), {})
  );
}
function yb(e) {
  let t = String(Math.floor(Math.abs(e / 60))).padStart(2, "0"),
    n = String(Math.abs(e % 60)).padStart(2, "0");
  return `${e < 0 ? "-" : "+"}${t}${n}`;
}
function A3(e) {
  xb(e);
  let [t, n, r, u] = e.match(/([+-])([0-3][0-9])([0-6][0-9])/),
    s = Number(r) * 60 + Number(u);
  return n === "+" ? s : -s;
}
function xb(e) {
  if (!/^([+-])[0-3][0-9][0-6][0-9]$/.test(e))
    throw new Error(`Invalid offset: ${e}`);
  return e;
}
function L3(e) {
  return vh
    .concat(yh)
    .concat(xh)
    .sort((t, n) => (t[0].length > n[0].length ? 1 : -1))
    .reduce((t, n) => t.replace(n[0], `\\${n[0]}`), e);
}
function O3(e) {
  return ["numeric", "2-digit"].includes(e.partValue);
}
function D3(e) {
  let t;
  for (let n of e) {
    if (n.partName === "literal" && !isNaN(parseFloat(n.partValue)))
      throw new Error(`Numbers in format (${n.partValue}).`);
    if (
      t &&
      t.partName !== "literal" &&
      n.partName !== "literal" &&
      !(t.token in Vc) &&
      !(n.token in Vc) &&
      !(O3(t) && n.token.toLowerCase() === "a")
    )
      throw new Error(`Illegal adjacent tokens (${t.token}, ${n.token})`);
    t = n;
  }
  return e;
}
function La(e, t) {
  let n = mb.get(t);
  if (n && n[e]) return n[e];
  let r = new Date(bh);
  r.setUTCHours(e === "am" ? 5 : 20);
  let s = new Intl.DateTimeFormat(t, {
    timeStyle: "full",
    timeZone: "UTC",
    hour12: !0,
  })
    .formatToParts(r)
    .map(vr)
    .find((f) => f.type === "dayPeriod");
  if (s) {
    let f = n || {};
    return mb.set(t, Object.assign(f, { [e]: s.value })), s.value;
  }
  return e;
}
function P3(e, t = "+0000") {
  let n = fu(e),
    r = A3(t);
  return new Date(n.getTime() + r * 1e3 * 60);
}
function M3() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function gb(e, t) {
  let n = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: t,
      hourCycle: "h23",
    })
      .formatToParts(e)
      .map(vr),
    r = {};
  return (
    n.forEach((u) => {
      r[u.type] = u.value;
    }),
    new Date(`${r.year}-${r.month}-${r.day}T${r.hour}:${r.minute}:${r.second}Z`)
  );
}
function N3(e, t = "UTC", n = "device") {
  n = n === "device" ? M3() : n;
  let r = fu(e),
    u = gb(r, t),
    f = (gb(r, n).getTime() - u.getTime()) / 1e3 / 60;
  return yb(f);
}
function wh(e, t) {
  if (vb.includes(e) || typeof e == "object") return B3(e, t);
  let n = e,
    r = 0,
    u = (x) => {
      if ((x[2] || (x[2] = new RegExp(`(.)?(${x[0]})`, "g")), x[2].test(n))) {
        let T = 0;
        return (
          (n = n.replace(x[2], (D, L, B) =>
            L === "\\"
              ? B
              : `${typeof L == "string" ? L : ""}{!${T++ ? r : r++}!}`
          )),
          !!T
        );
      }
      return !1;
    };
  function s(x) {
    let T = x.map((L) => L.partName),
      D = new Set(T);
    if (T.length > D.size) throw new Error("Cannot reuse format tokens.");
    return x;
  }
  function f(x, [T, D, L]) {
    let B = Object.keys(D)[0],
      Z = D[B];
    return {
      option: D,
      partName: B,
      partValue: Z,
      token: T,
      pattern: L,
      hour12: x,
    };
  }
  let g = vh.filter(u).concat(yh.filter(u)).map(f.bind(null, !1)),
    v = s(g.concat(xh.filter(u).map(f.bind(null, !0)))),
    b = /^\{!(\d+)!\}$/;
  return n
    .split(/(\{!\d+!\})/)
    .map((x) => {
      let T = x.match(b);
      return T
        ? v[Number(T[1])]
        : {
            option: { literal: x },
            partName: "literal",
            partValue: x,
            token: x,
            pattern: new RegExp(""),
            hour12: !1,
          };
    })
    .filter((x) => !(x.partName === "literal" && x.partValue === ""));
}
function B3(e, t) {
  let n = { timeZone: "UTC" };
  typeof e == "string"
    ? (n.dateStyle = e)
    : ("date" in e && (n.dateStyle = e.date),
      "time" in e && (n.timeStyle = e.time));
  let r = new Intl.DateTimeFormat(t, n),
    u = r.formatToParts(new Date(bh)).map(vr),
    f = r
      .formatToParts(new Date("1999-04-05T23:05:01.000Z"))
      .map(vr)
      .find((v) => v.type === "hour"),
    g = f && f.value === "23" ? 24 : 12;
  return u
    .map((v) => {
      let b = v.type,
        x = F3(v.type, v.value, t, v.type === "hour" ? g : void 0);
      if (x === void 0) return;
      let T = x[1][b];
      if (T)
        return (
          x[2] || (x[2] = new RegExp(`${x[0]}`, "g")),
          {
            option: { [b]: T },
            partName: b,
            partValue: T,
            token: x[0],
            pattern: x[2],
            hour12: g === 12,
          }
        );
    })
    .filter((v) => !!v);
}
function F3(e, t, n, r) {
  let u = t.length,
    s = !isNaN(Number(t)),
    f;
  switch (e) {
    case "year":
      return u === 2 ? Ne.get("YY") : Ne.get("YYYY");
    case "month":
      if (s) return u === 1 ? Ne.get("M") : Ne.get("MM");
      switch (((f = _b(n, e, t)), f)) {
        case "long":
          return Ne.get("MMMM");
        default:
          return Ne.get("MMM");
      }
    case "day":
      return u === 1 ? Ne.get("D") : Ne.get("DD");
    case "weekday":
      switch (((f = _b(n, e, t)), f)) {
        case "narrow":
          return Ne.get("d");
        case "short":
          return Ne.get("ddd");
        default:
          return Ne.get("dddd");
      }
    case "hour":
      return r === 12
        ? u === 1
          ? Ne.get("h")
          : Ne.get("hh")
        : u === 1
        ? Ne.get("H")
        : Ne.get("HH");
    case "minute":
      return u === 1 ? Ne.get("m") : Ne.get("mm");
    case "second":
      return u === 1 ? Ne.get("s") : Ne.get("ss");
    case "dayPeriod":
      return /^[A-Z]+$/u.test(t) ? Ne.get("A") : Ne.get("a");
    case "literal":
      return [t, { literal: t }, new RegExp("")];
    case "timeZoneName":
      let g = t.split("-");
      return g.length === 2 && g[1].length === 4 ? Ne.get("ZZ") : Ne.get("Z");
    default:
      return;
  }
}
function _b(e, t, n) {
  if (!gh.has(e)) {
    let u = new Date(bh),
      s = [3, 8, 9, 7, 6, 4, 3],
      f = ["weekday", "month", "dayPeriod"],
      g = ["long", "short", "narrow"],
      v = {};
    for (let b = 0; b < 12; b++) {
      u.setMonth(0 + b), b in s && u.setDate(s[b]), u.setUTCHours(8 + b);
      for (let x of g) {
        let T = new Intl.DateTimeFormat(
          e,
          f.reduce((D, L) => Object.assign(D, { [L]: x }), {
            hour12: !0,
            timeZone: "UTC",
          })
        )
          .formatToParts(u)
          .map(vr);
        if (x === "long" || x === "short") {
          let L = new Intl.DateTimeFormat(e, {
              dateStyle: x === "short" ? "medium" : "long",
            })
              .formatToParts(u)
              .map(vr)
              .find((Z) => Z.type === "month"),
            B = T.findIndex((Z) => Z.type === "month");
          B > -1 && L && (T[B] = L);
        }
        T.forEach((D) => {
          if (D.type === "literal") return;
          let L = D.type;
          v[L] = Object.assign(v[L] || {}, { [D.value]: x });
        });
      }
    }
    gh.set(e, v);
  }
  let r = gh.get(e);
  return r ? r[t][n] : void 0;
}
function U3(e, t = "+0000") {
  let n = t.slice(0, 1) === "+";
  return P3(e, t.replace(n ? "+" : "-", n ? "-" : "+"));
}
function j3() {
  return Intl.DateTimeFormat().resolvedOptions().locale;
}
function cu(e, t = "long", n = "device", r = !1, u) {
  let s;
  return (
    typeof e == "object" &&
      !(e instanceof Date) &&
      ({
        date: e,
        format: t,
        locale: n,
        genitive: r,
        partFilter: u,
        tz: s,
      } = e),
    t === "ISO8601"
      ? fu(e).toISOString()
      : (s && (e = U3(e, N3(e, s))),
        (!n || n === "device") && (n = j3()),
        R3(e, wh(t, n).filter(u ?? (() => !0)), n, r)
          .map((f) => f.value)
          .join(""))
  );
}
function W3(e, t = "en", n = !1, r = () => !0) {
  return wh(e, t)
    .filter(r)
    .reduce(
      (u, s) => (u += n && s.partName === "literal" ? L3(s.token) : s.token),
      ""
    )
    .normalize("NFKC");
}
function H3(e) {
  let t = new Date().getFullYear(),
    n = t % 100,
    r = Math.floor(t / 100),
    u = Number(e);
  return (r + (u > n + 20 ? -1 : 0)) * 100 + u;
}
function wb(e, t = "en", n = !1) {
  let r = (u, s) =>
    Array(u)
      .fill("")
      .map((f, g) => `${s(g)}`);
  if (e === "M") return r(12, (u) => u + 1);
  if (e === "MM")
    return r(12, (u) => {
      let s = u + 1;
      return s < 10 ? `0${s}` : s;
    });
  if (e.startsWith("M"))
    return wb("MM").map((u) => cu(`2000-${u}-05`, e, t, n));
  if (e.startsWith("d"))
    return r(7, (u) => `0${u + 2}`).map((u) => cu(`2022-10-${u}`, e, t));
  if (e === "a") return [La("am", t).toLowerCase(), La("pm", t).toLowerCase()];
  if (e === "A") return [La("am", t).toUpperCase(), La("pm", t).toUpperCase()];
  if (e.startsWith("Y")) {
    let u = new Date().getFullYear();
    return r(120, (s) => s + 1).reduce(
      (s, f) => (
        f !== "120" && s.push(cu(`${u + Number(f)}-06-06`, e, t)),
        s.unshift(cu(`${u - Number(f)}-06-06`, e, t)),
        s
      ),
      [cu(`${u}-06-06`, e, t)]
    );
  }
  return e.startsWith("D")
    ? r(31, (u) => `${e === "DD" && u < 9 ? "0" : ""}${u + 1}`)
    : e.startsWith("H")
    ? r(24, (u) => `${e === "HH" && u < 10 ? "0" : ""}${u}`)
    : e.startsWith("h")
    ? r(12, (u) => `${e === "hh" && u < 9 ? "0" : ""}${u + 1}`)
    : e.startsWith("m") || e.startsWith("s")
    ? r(60, (u) => `${e.length > 1 && u < 10 ? "0" : ""}${u}`)
    : [];
}
function Sb(e, t = "ISO8601", n = "device") {
  let r = () => !0,
    u,
    s = "backward";
  if (
    (typeof e == "object"
      ? ({
          date: u,
          format: t = "ISO8601",
          locale: n = "device",
          dateOverflow: s = "backward",
          partFilter: r = () => !0,
        } = e)
      : (u = e),
    !u)
  )
    throw new Error("parse() requires a date string.");
  let f = () => {
    throw new Error(`Date (${u}) does not match format (${W3(t, n)})`);
  };
  if (t === "ISO8601") return fu(u);
  let g = vb.includes(t) || typeof t == "object",
    v = D3(wh(t, n).filter(r));
  if (!v.length) throw new Error("parse() requires a pattern.");
  let b;
  try {
    b = $3(u, v);
  } catch {
    return f();
  }
  let x = new Date(),
    T = new Map([
      ["YYYY", x.getFullYear()],
      ["MM", x.getMonth() + 1],
      ["DD", x.getDate()],
      ["HH", 0],
      ["mm", 0],
      ["ss", 0],
    ]),
    D = null,
    L = "";
  b.forEach((ke) => {
    if (ke.partName === "literal") return;
    if (ke.token === ke.value) return f();
    let St = Number(ke.value);
    if (T.has(ke.token)) T.set(ke.token, St);
    else if (ke.token === "YY") T.set("YYYY", H3(ke.value));
    else {
      let Fe = ke.token;
      if (Fe.startsWith("d")) return;
      if (Fe === "D") T.set("DD", St);
      else if (Fe === "H" || Fe.startsWith("h")) T.set("HH", St);
      else if (Fe === "M") T.set("MM", St);
      else if (Fe === "a" || Fe === "A")
        D = ke.value.toLowerCase() === La("am", n).toLowerCase();
      else if (Fe === "Z") L = xb(ke.value);
      else {
        let Lt = wb(Fe, n, g).indexOf(ke.value);
        if (Lt !== -1)
          switch (Fe) {
            case "MMM":
            case "MMMM":
              T.set("MM", Lt + 1);
              break;
          }
      }
    }
  });
  let B = T.get("HH") || 0;
  D === !1
    ? ((B += B === 12 ? 0 : 12), T.set("HH", B === 24 ? 0 : B))
    : D === !0 && B === 12 && T.set("HH", 0),
    T.set("MM", (T.get("MM") || 1) - 1);
  let [Z, O, K, G, se, Se] = Array.from(T.values()),
    Be = E3(new Date(`${_h(Z)}-${si(O + 1)}-10`));
  if (Be < K && s === "throw")
    throw new Error(`Invalid date ${_h(Z)}-${si(O + 1)}-${si(K)}`);
  K = s === "backward" ? Math.min(K, Be) : K;
  let ge = `${_h(Z)}-${si(O + 1)}-${si(K)}T${si(G)}:${si(se)}:${si(Se)}${L}`,
    N = new Date(ge);
  return isFinite(+N) ? N : f();
}
function $3(e, t) {
  let n = 0,
    r = (g) => [g[n++], g[n]],
    u = 0,
    s = [],
    f;
  do {
    let [g, v] = r(t);
    f = v;
    let b = 1;
    if (g.partName === "literal") b = g.partValue.length;
    else if (g.token in Vc) b = Vc[g.token];
    else if (v)
      if (v.partName === "literal") {
        if (((b = e.indexOf(v.partValue, u) - u), b < 0)) throw new Error();
      } else if (v.partName === "dayPeriod") {
        for (let x = 1; x <= 4; x++)
          if (isNaN(Number(e.charAt(u + x)))) {
            b = x;
            break;
          }
      } else {
        let x = e.substring(u).search(/\d/);
        x !== -1 && (b = u + x);
      }
    else b = e.length;
    s.push({ ...g, value: e.substring(u, u + b) }), (u += b);
  } while (f);
  return s;
}
var Ch = Zs(Eh()),
  Ab = {
    users: {
      insert: [
        {
          handler: async (e, t) => {
            let n = (
                await t
                  .select({ count: Ib.sql`cast(count(${da.userId}) as int)` })
                  .from(da)
              )[0].count,
              r = cu(Sb(e.createdAt ?? "now"), "medium");
            return {
              receivers: ["1234"],
              message: Html.createElement(
                "div",
                { id: "notifications", "hx-swap-oob": "beforeend" },
                Html.createElement(
                  "div",
                  null,
                  "New user ",
                  (0, Ch.escapeHtml)(e.username),
                  " created at ",
                  (0, Ch.escapeHtml)(r),
                  " ",
                  "There are now ",
                  n,
                  " users"
                )
              ),
            };
          },
          name: "web",
        },
        {
          handler: async (e, t) => {
            await t
              .insert(Ih)
              .values({
                messageText: `Hi I'm new here! My name is: ${e.username}`,
                userId: e.userId,
              });
          },
          name: "introduction",
        },
      ],
      update: [
        {
          handler: async (e) => {
            await fetch(
              "https://hooks.slack.com/services/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",
              {
                method: "POST",
                body: JSON.stringify({
                  text: `User ${e.email} was just updated`,
                }),
              }
            );
          },
          name: "slack",
        },
      ],
    },
  };
var du;
try {
  du = Function("return this")();
} catch {
  du = window;
}
du.Html || (du.Html = Eh());
du.Html.default && (du.Html = du.Html.default);
var Y3 = { ...Ab, ...pb };
0 && (module.exports = { handlers });
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server-legacy.node.production.min.js:
  (**
   * @license React
   * react-dom-server-legacy.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.node.production.min.js:
  (**
   * @license React
   * react-dom-server.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server-legacy.node.development.js:
  (**
   * @license React
   * react-dom-server-legacy.node.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.node.development.js:
  (**
   * @license React
   * react-dom-server.node.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
