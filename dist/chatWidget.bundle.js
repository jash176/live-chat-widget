/*! For license information please see chatWidget.bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      24: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          '/* Input area */\n.chat-widget-input-wrapper {\n  position: relative;\n}\n\n.chat-widget-input-container {\n  padding: 12px 16px;\n  border-top: 1px solid #eaeaea;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.chat-widget-input-actions {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 8px;\n}\n\n.chat-widget-input-action {\n  background: none;\n  border: none;\n  color: #617190;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.chat-widget-input-field {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  position: relative;\n}\n\n.chat-widget-input-field input {\n  flex: 1;\n  padding: 10px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  outline: none;\n}\n\n.chat-widget-send-button {\n  background-color: transparent;\n  border: none;\n  color: #1877f2;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.chat-widget-send-button[disabled] {\n  color: #cbd5e0;\n  cursor: default;\n}\n\n.chat-widget-branding {\n  display: flex;\n  justify-content: flex-end;\n  font-size: 12px;\n  color: #a0aec0;\n  padding-top: 4px;\n  font-family: "Noto Sans", sans-serif;\n}\n.chat-widget-brand-name {\n  font-weight: 600;\n}\n/* Fix for input visibility with on-screen keyboard */\n@media (max-height: 600px) {\n  .chat-widget-input-container {\n    flex-shrink: 0;\n  }\n}\n',
          "",
        ]);
        const l = i;
      },
      52: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap);",
        ]),
          i.push([
            e.id,
            "/* Base container styles */\n.chat-widget-container {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 380px;\n  height: 600px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-radius: 16px;\n  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);\n  overflow: hidden;\n  z-index: 1000;\n  transition: all 0.3s ease;\n}\n\n/* Mobile specific styles */\n.chat-widget-container.mobile {\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  bottom: 0;\n  right: 0;\n  border-radius: 0;\n}\n/* Chat launcher button */\n.chat-widget-button {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-color: #DDE8FC;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  border: none;\n  z-index: 999;\n  transition: transform 0.2s ease;\n}\n\n.chat-widget-button:hover {\n  transform: scale(1.05);\n}\n",
            "",
          ]);
        const l = i;
      },
      56: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      72: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, i = [], l = 0; l < e.length; l++) {
            var s = e[l],
              u = r.base ? s[0] + r.base : s[0],
              c = a[u] || 0,
              f = "".concat(u, " ").concat(c);
            a[u] = c + 1;
            var d = n(f),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== d) t[d].references++, t[d].updater(p);
            else {
              var h = o(p, r);
              (r.byIndex = l),
                t.splice(l, 0, { identifier: f, updater: h, references: 1 });
            }
            i.push(f);
          }
          return i;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var l = n(a[i]);
              t[l].references--;
            }
            for (var s = r(e, o), u = 0; u < a.length; u++) {
              var c = n(a[u]);
              0 === t[c].references && (t[c].updater(), t.splice(c, 1));
            }
            a = s;
          };
        };
      },
      93: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          ".chat-container {\n  /* font-family: Arial, sans-serif; */\n  max-width: 240px;\n}\n\n.question-box {\n  display: flex;\n  align-items: center;\n  background-color: #6a1b9a;\n  color: white;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.back-btn {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  margin-right: 8px;\n}\n\n.question-text {\n  font-style: italic;\n}\n\n.input-box {\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n  background: #f3f3f3;\n  padding: 5px;\n  border-radius: 8px;\n}\n\n.input-box input {\n  flex-grow: 1;\n  border: none;\n  background: transparent;\n  padding: 5px;\n  outline: none;\n}\n\n.next-btn {\n  background-color: #6a1b9a;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.confirmation-box {\n  margin-top: 12px;\n  background-color: #6a1b9a;\n  color: white;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.confirmation-text {\n  margin: 0;\n  font-size: 12px;\n}\n\n.email-btn {\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n  padding: 5px 10px;\n  border: 2px solid #6a1b9a;\n  border-radius: 8px;\n  color: #6a1b9a;\n  background: white;\n  cursor: pointer;\n}\n\n.email-icon {\n  margin-right: 5px;\n}\n",
          "",
        ]);
        const l = i;
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      159: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      221: (e, t, n) => {
        var r = n(540);
        function o(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function a() {}
        var i = {
            d: {
              f: a,
              r: function () {
                throw Error(o(522));
              },
              D: a,
              C: a,
              L: a,
              m: a,
              X: a,
              S: a,
              M: a,
            },
            p: 0,
            findDOMNode: null,
          },
          l = Symbol.for("react.portal"),
          s = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function u(e, t) {
          return "font" === e
            ? ""
            : "string" == typeof t
            ? "use-credentials" === t
              ? t
              : ""
            : void 0;
        }
        (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !t ||
              (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            )
              throw Error(o(299));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: l,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = s.T,
              n = i.p;
            try {
              if (((s.T = null), (i.p = 2), e)) return e();
            } finally {
              (s.T = t), (i.p = n), i.d.f();
            }
          }),
          (t.preconnect = function (e, t) {
            "string" == typeof e &&
              ((t = t
                ? "string" == typeof (t = t.crossOrigin)
                  ? "use-credentials" === t
                    ? t
                    : ""
                  : void 0
                : null),
              i.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" == typeof e && i.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" == typeof e && t && "string" == typeof t.as) {
              var n = t.as,
                r = u(n, t.crossOrigin),
                o = "string" == typeof t.integrity ? t.integrity : void 0,
                a =
                  "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
              "style" === n
                ? i.d.S(
                    e,
                    "string" == typeof t.precedence ? t.precedence : void 0,
                    { crossOrigin: r, integrity: o, fetchPriority: a }
                  )
                : "script" === n &&
                  i.d.X(e, {
                    crossOrigin: r,
                    integrity: o,
                    fetchPriority: a,
                    nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" == typeof e)
              if ("object" == typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = u(t.as, t.crossOrigin);
                  i.d.M(e, {
                    crossOrigin: n,
                    integrity:
                      "string" == typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && i.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" == typeof e &&
              "object" == typeof t &&
              null !== t &&
              "string" == typeof t.as
            ) {
              var n = t.as,
                r = u(n, t.crossOrigin);
              i.d.L(e, n, {
                crossOrigin: r,
                integrity:
                  "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                type: "string" == typeof t.type ? t.type : void 0,
                fetchPriority:
                  "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
                referrerPolicy:
                  "string" == typeof t.referrerPolicy
                    ? t.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes:
                  "string" == typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" == typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" == typeof e)
              if (t) {
                var n = u(t.as, t.crossOrigin);
                i.d.m(e, {
                  as:
                    "string" == typeof t.as && "script" !== t.as
                      ? t.as
                      : void 0,
                  crossOrigin: n,
                  integrity:
                    "string" == typeof t.integrity ? t.integrity : void 0,
                });
              } else i.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            i.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return s.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return s.H.useHostTransitionStatus();
          }),
          (t.version = "19.0.0");
      },
      247: (e, t, n) => {
        var r = n(982),
          o = n(540),
          a = n(961);
        function i(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = Symbol.for("react.element"),
          s = Symbol.for("react.transitional.element"),
          u = Symbol.for("react.portal"),
          c = Symbol.for("react.fragment"),
          f = Symbol.for("react.strict_mode"),
          d = Symbol.for("react.profiler"),
          p = Symbol.for("react.provider"),
          h = Symbol.for("react.consumer"),
          m = Symbol.for("react.context"),
          g = Symbol.for("react.forward_ref"),
          y = Symbol.for("react.suspense"),
          b = Symbol.for("react.suspense_list"),
          v = Symbol.for("react.memo"),
          w = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var k = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
        var S = Symbol.for("react.memo_cache_sentinel"),
          x = Symbol.iterator;
        function E(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (x && e[x]) || e["@@iterator"])
            ? e
            : null;
        }
        var _ = Symbol.for("react.client.reference");
        function C(e) {
          if (null == e) return null;
          if ("function" == typeof e)
            return e.$$typeof === _ ? null : e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case c:
              return "Fragment";
            case u:
              return "Portal";
            case d:
              return "Profiler";
            case f:
              return "StrictMode";
            case y:
              return "Suspense";
            case b:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case m:
                return (e.displayName || "Context") + ".Provider";
              case h:
                return (e._context.displayName || "Context") + ".Consumer";
              case g:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case v:
                return null !== (t = e.displayName || null)
                  ? t
                  : C(e.type) || "Memo";
              case w:
                (t = e._payload), (e = e._init);
                try {
                  return C(e(t));
                } catch (e) {}
            }
          return null;
        }
        var N,
          O,
          T = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          A = Object.assign;
        function L(e) {
          if (void 0 === N)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              (N = (t && t[1]) || ""),
                (O =
                  -1 < e.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < e.stack.indexOf("@")
                    ? "@unknown:0:0"
                    : "");
            }
          return "\n" + N + e + O;
        }
        var P = !1;
        function R(e, t) {
          if (!e || P) return "";
          P = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" == typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (e) {
                        var r = e;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (e) {
                        r = e;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (e) {
                      r = e;
                    }
                    (n = e()) &&
                      "function" == typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (e) {
                  if (e && r && "string" == typeof e.stack)
                    return [e.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name"
            );
            o &&
              o.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var a = r.DetermineComponentFrameRoot(),
              i = a[0],
              l = a[1];
            if (i && l) {
              var s = i.split("\n"),
                u = l.split("\n");
              for (
                o = r = 0;
                r < s.length && !s[r].includes("DetermineComponentFrameRoot");

              )
                r++;
              for (
                ;
                o < u.length && !u[o].includes("DetermineComponentFrameRoot");

              )
                o++;
              if (r === s.length || o === u.length)
                for (
                  r = s.length - 1, o = u.length - 1;
                  1 <= r && 0 <= o && s[r] !== u[o];

                )
                  o--;
              for (; 1 <= r && 0 <= o; r--, o--)
                if (s[r] !== u[o]) {
                  if (1 !== r || 1 !== o)
                    do {
                      if ((r--, 0 > --o || s[r] !== u[o])) {
                        var c = "\n" + s[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= o);
                  break;
                }
            }
          } finally {
            (P = !1), (Error.prepareStackTrace = n);
          }
          return (n = e ? e.displayName || e.name : "") ? L(n) : "";
        }
        function z(e) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return L(e.type);
            case 16:
              return L("Lazy");
            case 13:
              return L("Suspense");
            case 19:
              return L("SuspenseList");
            case 0:
            case 15:
              return R(e.type, !1);
            case 11:
              return R(e.type.render, !1);
            case 1:
              return R(e.type, !0);
            default:
              return "";
          }
        }
        function j(e) {
          try {
            var t = "";
            do {
              (t += z(e)), (e = e.return);
            } while (e);
            return t;
          } catch (e) {
            return "\nError generating stack: " + e.message + "\n" + e.stack;
          }
        }
        function F(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              !!(4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function D(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function I(e) {
          if (F(e) !== e) throw Error(i(188));
        }
        function M(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = M(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var U = Array.isArray,
          B = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          q = { pending: !1, data: null, method: null, action: null },
          V = [],
          H = -1;
        function $(e) {
          return { current: e };
        }
        function W(e) {
          0 > H || ((e.current = V[H]), (V[H] = null), H--);
        }
        function Q(e, t) {
          H++, (V[H] = e.current), (e.current = t);
        }
        var K = $(null),
          G = $(null),
          Y = $(null),
          X = $(null);
        function J(e, t) {
          switch ((Q(Y, t), Q(G, e), Q(K, null), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) && (t = t.namespaceURI) ? Gc(t) : 0;
              break;
            default:
              if (
                ((t = (e = 8 === e ? t.parentNode : t).tagName),
                (e = e.namespaceURI))
              )
                t = Yc((e = Gc(e)), t);
              else
                switch (t) {
                  case "svg":
                    t = 1;
                    break;
                  case "math":
                    t = 2;
                    break;
                  default:
                    t = 0;
                }
          }
          W(K), Q(K, t);
        }
        function Z() {
          W(K), W(G), W(Y);
        }
        function ee(e) {
          null !== e.memoizedState && Q(X, e);
          var t = K.current,
            n = Yc(t, e.type);
          t !== n && (Q(G, e), Q(K, n));
        }
        function te(e) {
          G.current === e && (W(K), W(G)),
            X.current === e && (W(X), (Ff._currentValue = q));
        }
        var ne = Object.prototype.hasOwnProperty,
          re = r.unstable_scheduleCallback,
          oe = r.unstable_cancelCallback,
          ae = r.unstable_shouldYield,
          ie = r.unstable_requestPaint,
          le = r.unstable_now,
          se = r.unstable_getCurrentPriorityLevel,
          ue = r.unstable_ImmediatePriority,
          ce = r.unstable_UserBlockingPriority,
          fe = r.unstable_NormalPriority,
          de = r.unstable_LowPriority,
          pe = r.unstable_IdlePriority,
          he = r.log,
          me = r.unstable_setDisableYieldValue,
          ge = null,
          ye = null;
        function be(e) {
          if (
            ("function" == typeof he && me(e),
            ye && "function" == typeof ye.setStrictMode)
          )
            try {
              ye.setStrictMode(ge, e);
            } catch (e) {}
        }
        var ve = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 == (e >>>= 0) ? 32 : (31 - ((we(e) / ke) | 0)) | 0;
              },
          we = Math.log,
          ke = Math.LN2,
          Se = 128,
          xe = 4194304;
        function Ee(e) {
          var t = 42 & e;
          if (0 !== t) return t;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194176 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function _e(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = e.warmLanes;
          e = 0 !== e.finishedLanes;
          var l = 134217727 & n;
          return (
            0 !== l
              ? 0 != (n = l & ~o)
                ? (r = Ee(n))
                : 0 != (a &= l)
                ? (r = Ee(a))
                : e || (0 != (i = l & ~i) && (r = Ee(i)))
              : 0 != (l = n & ~o)
              ? (r = Ee(l))
              : 0 !== a
              ? (r = Ee(a))
              : e || (0 != (i = n & ~i) && (r = Ee(i))),
            0 === r
              ? 0
              : 0 === t ||
                t === r ||
                t & o ||
                !((o = r & -r) >= (i = t & -t) || (32 === o && 4194176 & i))
              ? r
              : t
          );
        }
        function Ce(e, t) {
          return !(e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
        }
        function Ne(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
              return t + 250;
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function Oe() {
          var e = Se;
          return !(4194176 & (Se <<= 1)) && (Se = 128), e;
        }
        function Te() {
          var e = xe;
          return !(62914560 & (xe <<= 1)) && (xe = 4194304), e;
        }
        function Ae(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Le(e, t) {
          (e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
        }
        function Pe(e, t, n) {
          (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
          var r = 31 - ve(t);
          (e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (4194218 & n));
        }
        function Re(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ve(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        function ze(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 134217727 & e
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function je() {
          var e = B.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Gf(e.type);
        }
        var Fe = Math.random().toString(36).slice(2),
          De = "__reactFiber$" + Fe,
          Ie = "__reactProps$" + Fe,
          Me = "__reactContainer$" + Fe,
          Ue = "__reactEvents$" + Fe,
          Be = "__reactListeners$" + Fe,
          qe = "__reactHandles$" + Fe,
          Ve = "__reactResources$" + Fe,
          He = "__reactMarker$" + Fe;
        function $e(e) {
          delete e[De], delete e[Ie], delete e[Ue], delete e[Be], delete e[qe];
        }
        function We(e) {
          var t = e[De];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Me] || n[De])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = sf(e); null !== e; ) {
                  if ((n = e[De])) return n;
                  e = sf(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Qe(e) {
          if ((e = e[De] || e[Me])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function Ke(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(i(33));
        }
        function Ge(e) {
          var t = e[Ve];
          return (
            t ||
              (t = e[Ve] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            t
          );
        }
        function Ye(e) {
          e[He] = !0;
        }
        var Xe = new Set(),
          Je = {};
        function Ze(e, t) {
          et(e, t), et(e + "Capture", t);
        }
        function et(e, t) {
          for (Je[e] = t, e = 0; e < t.length; e++) Xe.add(t[e]);
        }
        var tt = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          nt = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          ),
          rt = {},
          ot = {};
        function at(e, t, n) {
          if (
            ((o = t),
            ne.call(ot, o) ||
              (!ne.call(rt, o) &&
                (nt.test(o) ? (ot[o] = !0) : ((rt[o] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var o;
        }
        function it(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function lt(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function st(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function ut(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function ct(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = ut(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function ft(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ut(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function dt(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var pt = /[\n"\\]/g;
        function ht(e) {
          return e.replace(pt, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function mt(e, t, n, r, o, a, i, l) {
          (e.name = ""),
            null != i &&
            "function" != typeof i &&
            "symbol" != typeof i &&
            "boolean" != typeof i
              ? (e.type = i)
              : e.removeAttribute("type"),
            null != t
              ? "number" === i
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + st(t))
                : e.value !== "" + st(t) && (e.value = "" + st(t))
              : ("submit" !== i && "reset" !== i) || e.removeAttribute("value"),
            null != t
              ? yt(e, i, st(t))
              : null != n
              ? yt(e, i, st(n))
              : null != r && e.removeAttribute("value"),
            null == o && null != a && (e.defaultChecked = !!a),
            null != o &&
              (e.checked = o && "function" != typeof o && "symbol" != typeof o),
            null != l &&
            "function" != typeof l &&
            "symbol" != typeof l &&
            "boolean" != typeof l
              ? (e.name = "" + st(l))
              : e.removeAttribute("name");
        }
        function gt(e, t, n, r, o, a, i, l) {
          if (
            (null != a &&
              "function" != typeof a &&
              "symbol" != typeof a &&
              "boolean" != typeof a &&
              (e.type = a),
            null != t || null != n)
          ) {
            if (("submit" === a || "reset" === a) && null == t) return;
            (n = null != n ? "" + st(n) : ""),
              (t = null != t ? "" + st(t) : n),
              l || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          (r =
            "function" != typeof (r = null != r ? r : o) &&
            "symbol" != typeof r &&
            !!r),
            (e.checked = l ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != i &&
              "function" != typeof i &&
              "symbol" != typeof i &&
              "boolean" != typeof i &&
              (e.name = i);
        }
        function yt(e, t, n) {
          ("number" === t && dt(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function bt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + st(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function vt(e, t, n) {
          null == t ||
          ((t = "" + st(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + st(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function wt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(i(92));
              if (U(r)) {
                if (1 < r.length) throw Error(i(93));
                r = r[0];
              }
              n = r;
            }
            null == n && (n = ""), (t = n);
          }
          (n = st(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n &&
              "" !== r &&
              null !== r &&
              (e.value = r);
        }
        function kt(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var St = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        );
        function xt(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" == typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
            : r
            ? e.setProperty(t, n)
            : "number" != typeof n || 0 === n || St.has(t)
            ? "float" === t
              ? (e.cssFloat = n)
              : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
        }
        function Et(e, t, n) {
          if (null != t && "object" != typeof t) throw Error(i(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                  ? (e.cssFloat = "")
                  : (e[r] = ""));
            for (var o in t)
              (r = t[o]), t.hasOwnProperty(o) && n[o] !== r && xt(e, o, r);
          } else for (var a in t) t.hasOwnProperty(a) && xt(e, a, t[a]);
        }
        function _t(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
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
        var Ct = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          Nt =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Ot(e) {
          return Nt.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        var Tt = null;
        function At(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Lt = null,
          Pt = null;
        function Rt(e) {
          var t = Qe(e);
          if (t && (e = t.stateNode)) {
            var n = e[Ie] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (mt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + ht("" + t) + '"][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = r[Ie] || null;
                      if (!o) throw Error(i(90));
                      mt(
                        r,
                        o.value,
                        o.defaultValue,
                        o.defaultValue,
                        o.checked,
                        o.defaultChecked,
                        o.type,
                        o.name
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (r = n[t]).form === e.form && ft(r);
                }
                break e;
              case "textarea":
                vt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && bt(e, !!n.multiple, t, !1);
            }
          }
        }
        var zt = !1;
        function jt(e, t, n) {
          if (zt) return e(t, n);
          zt = !0;
          try {
            return e(t);
          } finally {
            if (
              ((zt = !1),
              (null !== Lt || null !== Pt) &&
                (Du(), Lt && ((t = Lt), (e = Pt), (Pt = Lt = null), Rt(t), e)))
            )
              for (t = 0; t < e.length; t++) Rt(e[t]);
          }
        }
        function Ft(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Ie] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Dt = !1;
        if (tt)
          try {
            var It = {};
            Object.defineProperty(It, "passive", {
              get: function () {
                Dt = !0;
              },
            }),
              window.addEventListener("test", It, It),
              window.removeEventListener("test", It, It);
          } catch (e) {
            Dt = !1;
          }
        var Mt = null,
          Ut = null,
          Bt = null;
        function qt() {
          if (Bt) return Bt;
          var e,
            t,
            n = Ut,
            r = n.length,
            o = "value" in Mt ? Mt.value : Mt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Bt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Vt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Ht() {
          return !0;
        }
        function $t() {
          return !1;
        }
        function Wt(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? Ht
                : $t),
              (this.isPropagationStopped = $t),
              this
            );
          }
          return (
            A(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = Ht));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = Ht));
              },
              persist: function () {},
              isPersistent: Ht,
            }),
            t
          );
        }
        var Qt,
          Kt,
          Gt,
          Yt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          Xt = Wt(Yt),
          Jt = A({}, Yt, { view: 0, detail: 0 }),
          Zt = Wt(Jt),
          en = A({}, Jt, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: dn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== Gt &&
                    (Gt && "mousemove" === e.type
                      ? ((Qt = e.screenX - Gt.screenX),
                        (Kt = e.screenY - Gt.screenY))
                      : (Kt = Qt = 0),
                    (Gt = e)),
                  Qt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Kt;
            },
          }),
          tn = Wt(en),
          nn = Wt(A({}, en, { dataTransfer: 0 })),
          rn = Wt(A({}, Jt, { relatedTarget: 0 })),
          on = Wt(
            A({}, Yt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          an = Wt(
            A({}, Yt, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            })
          ),
          ln = Wt(A({}, Yt, { data: 0 })),
          sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          un = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          cn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function fn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = cn[e]) && !!t[e];
        }
        function dn() {
          return fn;
        }
        var pn = Wt(
            A({}, Jt, {
              key: function (e) {
                if (e.key) {
                  var t = sn[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Vt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? un[e.keyCode] || "Unidentified"
                  : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: dn,
              charCode: function (e) {
                return "keypress" === e.type ? Vt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Vt(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
            })
          ),
          hn = Wt(
            A({}, en, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          mn = Wt(
            A({}, Jt, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: dn,
            })
          ),
          gn = Wt(
            A({}, Yt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = Wt(
            A({}, en, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            })
          ),
          bn = Wt(A({}, Yt, { newState: 0, oldState: 0 })),
          vn = [9, 13, 27, 32],
          wn = tt && "CompositionEvent" in window,
          kn = null;
        tt && "documentMode" in document && (kn = document.documentMode);
        var Sn = tt && "TextEvent" in window && !kn,
          xn = tt && (!wn || (kn && 8 < kn && 11 >= kn)),
          En = String.fromCharCode(32),
          _n = !1;
        function Cn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== vn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Nn(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var On = !1,
          Tn = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function An(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Tn[e.type] : "textarea" === t;
        }
        function Ln(e, t, n, r) {
          Lt ? (Pt ? Pt.push(r) : (Pt = [r])) : (Lt = r),
            0 < (t = jc(t, "onChange")).length &&
              ((n = new Xt("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Pn = null,
          Rn = null;
        function zn(e) {
          Nc(e, 0);
        }
        function jn(e) {
          if (ft(Ke(e))) return e;
        }
        function Fn(e, t) {
          if ("change" === e) return t;
        }
        var Dn = !1;
        if (tt) {
          var In;
          if (tt) {
            var Mn = "oninput" in document;
            if (!Mn) {
              var Un = document.createElement("div");
              Un.setAttribute("oninput", "return;"),
                (Mn = "function" == typeof Un.oninput);
            }
            In = Mn;
          } else In = !1;
          Dn = In && (!document.documentMode || 9 < document.documentMode);
        }
        function Bn() {
          Pn && (Pn.detachEvent("onpropertychange", qn), (Rn = Pn = null));
        }
        function qn(e) {
          if ("value" === e.propertyName && jn(Rn)) {
            var t = [];
            Ln(t, Rn, e, At(e)), jt(zn, t);
          }
        }
        function Vn(e, t, n) {
          "focusin" === e
            ? (Bn(), (Rn = n), (Pn = t).attachEvent("onpropertychange", qn))
            : "focusout" === e && Bn();
        }
        function Hn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return jn(Rn);
        }
        function $n(e, t) {
          if ("click" === e) return jn(t);
        }
        function Wn(e, t) {
          if ("input" === e || "change" === e) return jn(t);
        }
        var Qn =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              };
        function Kn(e, t) {
          if (Qn(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!ne.call(t, o) || !Qn(e[o], t[o])) return !1;
          }
          return !0;
        }
        function Gn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Yn(e, t) {
          var n,
            r = Gn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Gn(r);
          }
        }
        function Xn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? Xn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function Jn(e) {
          for (
            var t = dt(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = dt((e = t.contentWindow).document);
          }
          return t;
        }
        function Zn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function er(e, t) {
          var n = Jn(t);
          t = e.focusedElem;
          var r = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            Xn(t.ownerDocument.documentElement, t)
          ) {
            if (null !== r && Zn(t))
              if (
                ((e = r.start),
                void 0 === (n = r.end) && (n = e),
                "selectionStart" in t)
              )
                (t.selectionStart = e),
                  (t.selectionEnd = Math.min(n, t.value.length));
              else if (
                (n =
                  ((e = t.ownerDocument || document) && e.defaultView) ||
                  window).getSelection
              ) {
                n = n.getSelection();
                var o = t.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !n.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = Yn(t, a));
                var i = Yn(t, r);
                o &&
                  i &&
                  (1 !== n.rangeCount ||
                    n.anchorNode !== o.node ||
                    n.anchorOffset !== o.offset ||
                    n.focusNode !== i.node ||
                    n.focusOffset !== i.offset) &&
                  ((e = e.createRange()).setStart(o.node, o.offset),
                  n.removeAllRanges(),
                  a > r
                    ? (n.addRange(e), n.extend(i.node, i.offset))
                    : (e.setEnd(i.node, i.offset), n.addRange(e)));
              }
            for (e = [], n = t; (n = n.parentNode); )
              1 === n.nodeType &&
                e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
            for (
              "function" == typeof t.focus && t.focus(), t = 0;
              t < e.length;
              t++
            )
              ((n = e[t]).element.scrollLeft = n.left),
                (n.element.scrollTop = n.top);
          }
        }
        var tr =
            tt && "documentMode" in document && 11 >= document.documentMode,
          nr = null,
          rr = null,
          or = null,
          ar = !1;
        function ir(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          ar ||
            null == nr ||
            nr !== dt(r) ||
            ((r =
              "selectionStart" in (r = nr) && Zn(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (or && Kn(or, r)) ||
              ((or = r),
              0 < (r = jc(rr, "onSelect")).length &&
                ((t = new Xt("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = nr))));
        }
        function lr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var sr = {
            animationend: lr("Animation", "AnimationEnd"),
            animationiteration: lr("Animation", "AnimationIteration"),
            animationstart: lr("Animation", "AnimationStart"),
            transitionrun: lr("Transition", "TransitionRun"),
            transitionstart: lr("Transition", "TransitionStart"),
            transitioncancel: lr("Transition", "TransitionCancel"),
            transitionend: lr("Transition", "TransitionEnd"),
          },
          ur = {},
          cr = {};
        function fr(e) {
          if (ur[e]) return ur[e];
          if (!sr[e]) return e;
          var t,
            n = sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in cr) return (ur[e] = n[t]);
          return e;
        }
        tt &&
          ((cr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete sr.animationend.animation,
            delete sr.animationiteration.animation,
            delete sr.animationstart.animation),
          "TransitionEvent" in window || delete sr.transitionend.transition);
        var dr = fr("animationend"),
          pr = fr("animationiteration"),
          hr = fr("animationstart"),
          mr = fr("transitionrun"),
          gr = fr("transitionstart"),
          yr = fr("transitioncancel"),
          br = fr("transitionend"),
          vr = new Map(),
          wr =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
              " "
            );
        function kr(e, t) {
          vr.set(e, t), Ze(t, [e]);
        }
        var Sr = [],
          xr = 0,
          Er = 0;
        function _r() {
          for (var e = xr, t = (Er = xr = 0); t < e; ) {
            var n = Sr[t];
            Sr[t++] = null;
            var r = Sr[t];
            Sr[t++] = null;
            var o = Sr[t];
            Sr[t++] = null;
            var a = Sr[t];
            if (((Sr[t++] = null), null !== r && null !== o)) {
              var i = r.pending;
              null === i ? (o.next = o) : ((o.next = i.next), (i.next = o)),
                (r.pending = o);
            }
            0 !== a && Tr(n, o, a);
          }
        }
        function Cr(e, t, n, r) {
          (Sr[xr++] = e),
            (Sr[xr++] = t),
            (Sr[xr++] = n),
            (Sr[xr++] = r),
            (Er |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r);
        }
        function Nr(e, t, n, r) {
          return Cr(e, t, n, r), Ar(e);
        }
        function Or(e, t) {
          return Cr(e, null, null, t), Ar(e);
        }
        function Tr(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var o = !1, a = e.return; null !== a; )
            (a.childLanes |= n),
              null !== (r = a.alternate) && (r.childLanes |= n),
              22 === a.tag &&
                (null === (e = a.stateNode) || 1 & e._visibility || (o = !0)),
              (e = a),
              (a = a.return);
          o &&
            null !== t &&
            3 === e.tag &&
            ((a = e.stateNode),
            (o = 31 - ve(n)),
            null === (e = (a = a.hiddenUpdates)[o]) ? (a[o] = [t]) : e.push(t),
            (t.lane = 536870912 | n));
        }
        function Ar(e) {
          if (50 < Nu) throw ((Nu = 0), (Ou = null), Error(i(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Lr = {},
          Pr = new WeakMap();
        function Rr(e, t) {
          if ("object" == typeof e && null !== e) {
            var n = Pr.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: j(t) }), Pr.set(e, t), t);
          }
          return { value: e, source: t, stack: j(t) };
        }
        var zr = [],
          jr = 0,
          Fr = null,
          Dr = 0,
          Ir = [],
          Mr = 0,
          Ur = null,
          Br = 1,
          qr = "";
        function Vr(e, t) {
          (zr[jr++] = Dr), (zr[jr++] = Fr), (Fr = e), (Dr = t);
        }
        function Hr(e, t, n) {
          (Ir[Mr++] = Br), (Ir[Mr++] = qr), (Ir[Mr++] = Ur), (Ur = e);
          var r = Br;
          e = qr;
          var o = 32 - ve(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - ve(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Br = (1 << (32 - ve(t) + o)) | (n << o) | r),
              (qr = a + e);
          } else (Br = (1 << a) | (n << o) | r), (qr = e);
        }
        function $r(e) {
          null !== e.return && (Vr(e, 1), Hr(e, 1, 0));
        }
        function Wr(e) {
          for (; e === Fr; )
            (Fr = zr[--jr]), (zr[jr] = null), (Dr = zr[--jr]), (zr[jr] = null);
          for (; e === Ur; )
            (Ur = Ir[--Mr]),
              (Ir[Mr] = null),
              (qr = Ir[--Mr]),
              (Ir[Mr] = null),
              (Br = Ir[--Mr]),
              (Ir[Mr] = null);
        }
        var Qr = null,
          Kr = null,
          Gr = !1,
          Yr = null,
          Xr = !1,
          Jr = Error(i(519));
        function Zr(e) {
          throw (oo(Rr(Error(i(418, "")), e)), Jr);
        }
        function eo(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[De] = e), (t[Ie] = r), n)) {
            case "dialog":
              Oc("cancel", t), Oc("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              Oc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < _c.length; n++) Oc(_c[n], t);
              break;
            case "source":
              Oc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              Oc("error", t), Oc("load", t);
              break;
            case "details":
              Oc("toggle", t);
              break;
            case "input":
              Oc("invalid", t),
                gt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0
                ),
                ct(t);
              break;
            case "select":
              Oc("invalid", t);
              break;
            case "textarea":
              Oc("invalid", t),
                wt(t, r.value, r.defaultValue, r.children),
                ct(t);
          }
          ("string" != typeof (n = r.children) &&
            "number" != typeof n &&
            "bigint" != typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          Bc(t.textContent, n)
            ? (null != r.popover && (Oc("beforetoggle", t), Oc("toggle", t)),
              null != r.onScroll && Oc("scroll", t),
              null != r.onScrollEnd && Oc("scrollend", t),
              null != r.onClick && (t.onclick = qc),
              (t = !0))
            : (t = !1),
            t || Zr(e);
        }
        function to(e) {
          for (Qr = e.return; Qr; )
            switch (Qr.tag) {
              case 3:
              case 27:
                return void (Xr = !0);
              case 5:
              case 13:
                return void (Xr = !1);
              default:
                Qr = Qr.return;
            }
        }
        function no(e) {
          if (e !== Qr) return !1;
          if (!Gr) return to(e), (Gr = !0), !1;
          var t,
            n = !1;
          if (
            ((t = 3 !== e.tag && 27 !== e.tag) &&
              ((t = 5 === e.tag) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  Xc(e.type, e.memoizedProps)),
              (t = !t)),
            t && (n = !0),
            n && Kr && Zr(e),
            to(e),
            13 === e.tag)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType)
                  if ("/$" === (t = e.data)) {
                    if (0 === n) {
                      Kr = lf(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
              }
              Kr = null;
            }
          } else Kr = Qr ? lf(e.stateNode.nextSibling) : null;
          return !0;
        }
        function ro() {
          (Kr = Qr = null), (Gr = !1);
        }
        function oo(e) {
          null === Yr ? (Yr = [e]) : Yr.push(e);
        }
        var ao = Error(i(460)),
          io = Error(i(474)),
          lo = { then: function () {} };
        function so(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function uo() {}
        function co(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(uo, uo), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              if ((e = t.reason) === ao) throw Error(i(483));
              throw e;
            default:
              if ("string" == typeof t.status) t.then(uo, uo);
              else {
                if (null !== (e = eu) && 100 < e.shellSuspendCounter)
                  throw Error(i(482));
                ((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "fulfilled"), (n.value = e);
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "rejected"), (n.reason = e);
                      }
                    }
                  );
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  if ((e = t.reason) === ao) throw Error(i(483));
                  throw e;
              }
              throw ((fo = t), ao);
          }
        }
        var fo = null;
        function po() {
          if (null === fo) throw Error(i(459));
          var e = fo;
          return (fo = null), e;
        }
        var ho = null,
          mo = 0;
        function go(e) {
          var t = mo;
          return (mo += 1), null === ho && (ho = []), co(ho, e, t);
        }
        function yo(e, t) {
          (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
        }
        function bo(e, t) {
          if (t.$$typeof === l) throw Error(i(525));
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function vo(e) {
          return (0, e._init)(e._payload);
        }
        function wo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function o(e, t) {
            return ((e = Fs(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 33554434), n)
                    : r
                  : ((t.flags |= 33554434), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 33554434), t;
          }
          function f(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Bs(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n, r) {
            var a = n.type;
            return a === c
              ? h(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" == typeof a &&
                    null !== a &&
                    a.$$typeof === w &&
                    vo(a) === t.type))
              ? (yo((t = o(t, n.props)), n), (t.return = e), t)
              : (yo((t = Is(n.type, n.key, n.props, null, e.mode, r)), n),
                (t.return = e),
                t);
          }
          function p(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = qs(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function h(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Ms(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function g(e, t, n) {
            if (
              ("string" == typeof t && "" !== t) ||
              "number" == typeof t ||
              "bigint" == typeof t
            )
              return ((t = Bs("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case s:
                  return (
                    yo((n = Is(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case u:
                  return ((t = qs(t, e.mode, n)).return = e), t;
                case w:
                  return g(e, (t = (0, t._init)(t._payload)), n);
              }
              if (U(t) || E(t))
                return ((t = Ms(t, e.mode, n, null)).return = e), t;
              if ("function" == typeof t.then) return g(e, go(t), n);
              if (t.$$typeof === m) return g(e, _l(e, t), n);
              bo(e, t);
            }
            return null;
          }
          function y(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (
              ("string" == typeof n && "" !== n) ||
              "number" == typeof n ||
              "bigint" == typeof n
            )
              return null !== o ? null : f(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case s:
                  return n.key === o ? d(e, t, n, r) : null;
                case u:
                  return n.key === o ? p(e, t, n, r) : null;
                case w:
                  return y(e, t, (n = (o = n._init)(n._payload)), r);
              }
              if (U(n) || E(n)) return null !== o ? null : h(e, t, n, r, null);
              if ("function" == typeof n.then) return y(e, t, go(n), r);
              if (n.$$typeof === m) return y(e, t, _l(e, n), r);
              bo(e, n);
            }
            return null;
          }
          function b(e, t, n, r, o) {
            if (
              ("string" == typeof r && "" !== r) ||
              "number" == typeof r ||
              "bigint" == typeof r
            )
              return f(t, (e = e.get(n) || null), "" + r, o);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case s:
                  return d(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case u:
                  return p(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case w:
                  return b(e, t, n, (r = (0, r._init)(r._payload)), o);
              }
              if (U(r) || E(r)) return h(t, (e = e.get(n) || null), r, o, null);
              if ("function" == typeof r.then) return b(e, t, n, go(r), o);
              if (r.$$typeof === m) return b(e, t, n, _l(t, r), o);
              bo(t, r);
            }
            return null;
          }
          function v(f, d, p, h) {
            if (
              ("object" == typeof p &&
                null !== p &&
                p.type === c &&
                null === p.key &&
                (p = p.props.children),
              "object" == typeof p && null !== p)
            ) {
              switch (p.$$typeof) {
                case s:
                  e: {
                    for (var k = p.key; null !== d; ) {
                      if (d.key === k) {
                        if ((k = p.type) === c) {
                          if (7 === d.tag) {
                            n(f, d.sibling),
                              ((h = o(d, p.props.children)).return = f),
                              (f = h);
                            break e;
                          }
                        } else if (
                          d.elementType === k ||
                          ("object" == typeof k &&
                            null !== k &&
                            k.$$typeof === w &&
                            vo(k) === d.type)
                        ) {
                          n(f, d.sibling),
                            yo((h = o(d, p.props)), p),
                            (h.return = f),
                            (f = h);
                          break e;
                        }
                        n(f, d);
                        break;
                      }
                      t(f, d), (d = d.sibling);
                    }
                    p.type === c
                      ? (((h = Ms(p.props.children, f.mode, h, p.key)).return =
                          f),
                        (f = h))
                      : (yo(
                          (h = Is(p.type, p.key, p.props, null, f.mode, h)),
                          p
                        ),
                        (h.return = f),
                        (f = h));
                  }
                  return l(f);
                case u:
                  e: {
                    for (k = p.key; null !== d; ) {
                      if (d.key === k) {
                        if (
                          4 === d.tag &&
                          d.stateNode.containerInfo === p.containerInfo &&
                          d.stateNode.implementation === p.implementation
                        ) {
                          n(f, d.sibling),
                            ((h = o(d, p.children || [])).return = f),
                            (f = h);
                          break e;
                        }
                        n(f, d);
                        break;
                      }
                      t(f, d), (d = d.sibling);
                    }
                    ((h = qs(p, f.mode, h)).return = f), (f = h);
                  }
                  return l(f);
                case w:
                  return v(f, d, (p = (k = p._init)(p._payload)), h);
              }
              if (U(p))
                return (function (o, i, l, s) {
                  for (
                    var u = null, c = null, f = i, d = (i = 0), p = null;
                    null !== f && d < l.length;
                    d++
                  ) {
                    f.index > d ? ((p = f), (f = null)) : (p = f.sibling);
                    var h = y(o, f, l[d], s);
                    if (null === h) {
                      null === f && (f = p);
                      break;
                    }
                    e && f && null === h.alternate && t(o, f),
                      (i = a(h, i, d)),
                      null === c ? (u = h) : (c.sibling = h),
                      (c = h),
                      (f = p);
                  }
                  if (d === l.length) return n(o, f), Gr && Vr(o, d), u;
                  if (null === f) {
                    for (; d < l.length; d++)
                      null !== (f = g(o, l[d], s)) &&
                        ((i = a(f, i, d)),
                        null === c ? (u = f) : (c.sibling = f),
                        (c = f));
                    return Gr && Vr(o, d), u;
                  }
                  for (f = r(f); d < l.length; d++)
                    null !== (p = b(f, o, d, l[d], s)) &&
                      (e &&
                        null !== p.alternate &&
                        f.delete(null === p.key ? d : p.key),
                      (i = a(p, i, d)),
                      null === c ? (u = p) : (c.sibling = p),
                      (c = p));
                  return (
                    e &&
                      f.forEach(function (e) {
                        return t(o, e);
                      }),
                    Gr && Vr(o, d),
                    u
                  );
                })(f, d, p, h);
              if (E(p)) {
                if ("function" != typeof (k = E(p))) throw Error(i(150));
                return (function (o, l, s, u) {
                  if (null == s) throw Error(i(151));
                  for (
                    var c = null,
                      f = null,
                      d = l,
                      p = (l = 0),
                      h = null,
                      m = s.next();
                    null !== d && !m.done;
                    p++, m = s.next()
                  ) {
                    d.index > p ? ((h = d), (d = null)) : (h = d.sibling);
                    var v = y(o, d, m.value, u);
                    if (null === v) {
                      null === d && (d = h);
                      break;
                    }
                    e && d && null === v.alternate && t(o, d),
                      (l = a(v, l, p)),
                      null === f ? (c = v) : (f.sibling = v),
                      (f = v),
                      (d = h);
                  }
                  if (m.done) return n(o, d), Gr && Vr(o, p), c;
                  if (null === d) {
                    for (; !m.done; p++, m = s.next())
                      null !== (m = g(o, m.value, u)) &&
                        ((l = a(m, l, p)),
                        null === f ? (c = m) : (f.sibling = m),
                        (f = m));
                    return Gr && Vr(o, p), c;
                  }
                  for (d = r(d); !m.done; p++, m = s.next())
                    null !== (m = b(d, o, p, m.value, u)) &&
                      (e &&
                        null !== m.alternate &&
                        d.delete(null === m.key ? p : m.key),
                      (l = a(m, l, p)),
                      null === f ? (c = m) : (f.sibling = m),
                      (f = m));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(o, e);
                      }),
                    Gr && Vr(o, p),
                    c
                  );
                })(f, d, (p = k.call(p)), h);
              }
              if ("function" == typeof p.then) return v(f, d, go(p), h);
              if (p.$$typeof === m) return v(f, d, _l(f, p), h);
              bo(f, p);
            }
            return ("string" == typeof p && "" !== p) ||
              "number" == typeof p ||
              "bigint" == typeof p
              ? ((p = "" + p),
                null !== d && 6 === d.tag
                  ? (n(f, d.sibling), ((h = o(d, p)).return = f), (f = h))
                  : (n(f, d), ((h = Bs(p, f.mode, h)).return = f), (f = h)),
                l(f))
              : n(f, d);
          }
          return function (e, t, n, r) {
            try {
              mo = 0;
              var o = v(e, t, n, r);
              return (ho = null), o;
            } catch (t) {
              if (t === ao) throw t;
              var a = zs(29, t, null, e.mode);
              return (a.lanes = r), (a.return = e), a;
            }
          };
        }
        var ko = wo(!0),
          So = wo(!1),
          xo = $(null),
          Eo = $(0);
        function _o(e, t) {
          Q(Eo, (e = su)), Q(xo, t), (su = e | t.baseLanes);
        }
        function Co() {
          Q(Eo, su), Q(xo, xo.current);
        }
        function No() {
          (su = Eo.current), W(xo), W(Eo);
        }
        var Oo = $(null),
          To = null;
        function Ao(e) {
          var t = e.alternate;
          Q(zo, 1 & zo.current),
            Q(Oo, e),
            null === To &&
              (null === t || null !== xo.current || null !== t.memoizedState) &&
              (To = e);
        }
        function Lo(e) {
          if (22 === e.tag) {
            if ((Q(zo, zo.current), Q(Oo, e), null === To)) {
              var t = e.alternate;
              null !== t && null !== t.memoizedState && (To = e);
            }
          } else Po();
        }
        function Po() {
          Q(zo, zo.current), Q(Oo, Oo.current);
        }
        function Ro(e) {
          W(Oo), To === e && (To = null), W(zo);
        }
        var zo = $(0);
        function jo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (128 & t.flags) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Fo =
            "undefined" != typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    (t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      });
                  };
                },
          Do = r.unstable_scheduleCallback,
          Io = r.unstable_NormalPriority,
          Mo = {
            $$typeof: m,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Uo() {
          return { controller: new Fo(), data: new Map(), refCount: 0 };
        }
        function Bo(e) {
          e.refCount--,
            0 === e.refCount &&
              Do(Io, function () {
                e.controller.abort();
              });
        }
        var qo = null,
          Vo = 0,
          Ho = 0,
          $o = null;
        function Wo() {
          if (0 == --Vo && null !== qo) {
            null !== $o && ($o.status = "fulfilled");
            var e = qo;
            (qo = null), (Ho = 0), ($o = null);
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Qo = T.S;
        T.S = function (e, t) {
          "object" == typeof t &&
            null !== t &&
            "function" == typeof t.then &&
            (function (e, t) {
              if (null === qo) {
                var n = (qo = []);
                (Vo = 0),
                  (Ho = wc()),
                  ($o = {
                    status: "pending",
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  });
              }
              Vo++, t.then(Wo, Wo);
            })(0, t),
            null !== Qo && Qo(e, t);
        };
        var Ko = $(null);
        function Go() {
          var e = Ko.current;
          return null !== e ? e : eu.pooledCache;
        }
        function Yo(e, t) {
          Q(Ko, null === t ? Ko.current : t.pool);
        }
        function Xo() {
          var e = Go();
          return null === e ? null : { parent: Mo._currentValue, pool: e };
        }
        var Jo = 0,
          Zo = null,
          ea = null,
          ta = null,
          na = !1,
          ra = !1,
          oa = !1,
          aa = 0,
          ia = 0,
          la = null,
          sa = 0;
        function ua() {
          throw Error(i(321));
        }
        function ca(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Qn(e[n], t[n])) return !1;
          return !0;
        }
        function fa(e, t, n, r, o, a) {
          return (
            (Jo = a),
            (Zo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (T.H = null === e || null === e.memoizedState ? _i : Ci),
            (oa = !1),
            (a = n(r, o)),
            (oa = !1),
            ra && (a = pa(t, n, r, o)),
            da(e),
            a
          );
        }
        function da(e) {
          T.H = Ei;
          var t = null !== ea && null !== ea.next;
          if (
            ((Jo = 0),
            (ta = ea = Zo = null),
            (na = !1),
            (ia = 0),
            (la = null),
            t)
          )
            throw Error(i(300));
          null === e ||
            Vi ||
            (null !== (e = e.dependencies) && Sl(e) && (Vi = !0));
        }
        function pa(e, t, n, r) {
          Zo = e;
          var o = 0;
          do {
            if ((ra && (la = null), (ia = 0), (ra = !1), 25 <= o))
              throw Error(i(301));
            if (((o += 1), (ta = ea = null), null != e.updateQueue)) {
              var a = e.updateQueue;
              (a.lastEffect = null),
                (a.events = null),
                (a.stores = null),
                null != a.memoCache && (a.memoCache.index = 0);
            }
            (T.H = Ni), (a = t(n, r));
          } while (ra);
          return a;
        }
        function ha() {
          var e = T.H,
            t = e.useState()[0];
          return (
            (t = "function" == typeof t.then ? wa(t) : t),
            (e = e.useState()[0]),
            (null !== ea ? ea.memoizedState : null) !== e && (Zo.flags |= 1024),
            t
          );
        }
        function ma() {
          var e = 0 !== aa;
          return (aa = 0), e;
        }
        function ga(e, t, n) {
          (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
        }
        function ya(e) {
          if (na) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              null !== t && (t.pending = null), (e = e.next);
            }
            na = !1;
          }
          (Jo = 0),
            (ta = ea = Zo = null),
            (ra = !1),
            (ia = aa = 0),
            (la = null);
        }
        function ba() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ta ? (Zo.memoizedState = ta = e) : (ta = ta.next = e), ta
          );
        }
        function va() {
          if (null === ea) {
            var e = Zo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ea.next;
          var t = null === ta ? Zo.memoizedState : ta.next;
          if (null !== t) (ta = t), (ea = e);
          else {
            if (null === e) {
              if (null === Zo.alternate) throw Error(i(467));
              throw Error(i(310));
            }
            (e = {
              memoizedState: (ea = e).memoizedState,
              baseState: ea.baseState,
              baseQueue: ea.baseQueue,
              queue: ea.queue,
              next: null,
            }),
              null === ta ? (Zo.memoizedState = ta = e) : (ta = ta.next = e);
          }
          return ta;
        }
        function wa(e) {
          var t = ia;
          return (
            (ia += 1),
            null === la && (la = []),
            (e = co(la, e, t)),
            (t = Zo),
            null === (null === ta ? t.memoizedState : ta.next) &&
              ((t = t.alternate),
              (T.H = null === t || null === t.memoizedState ? _i : Ci)),
            e
          );
        }
        function ka(e) {
          if (null !== e && "object" == typeof e) {
            if ("function" == typeof e.then) return wa(e);
            if (e.$$typeof === m) return El(e);
          }
          throw Error(i(438, String(e)));
        }
        function Sa(e) {
          var t = null,
            n = Zo.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = Zo.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Zo.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = S;
          return t.index++, n;
        }
        function xa(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function Ea(e) {
          return _a(va(), ea, e);
        }
        function _a(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(i(311));
          r.lastRenderedReducer = n;
          var o = e.baseQueue,
            a = r.pending;
          if (null !== a) {
            if (null !== o) {
              var l = o.next;
              (o.next = a.next), (a.next = l);
            }
            (t.baseQueue = o = a), (r.pending = null);
          }
          if (((a = e.baseState), null === o)) e.memoizedState = a;
          else {
            var s = (l = null),
              u = null,
              c = (t = o.next),
              f = !1;
            do {
              var d = -536870913 & c.lane;
              if (d !== c.lane ? (nu & d) === d : (Jo & d) === d) {
                var p = c.revertLane;
                if (0 === p)
                  null !== u &&
                    (u = u.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    d === Ho && (f = !0);
                else {
                  if ((Jo & p) === p) {
                    (c = c.next), p === Ho && (f = !0);
                    continue;
                  }
                  (d = {
                    lane: 0,
                    revertLane: c.revertLane,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === u ? ((s = u = d), (l = a)) : (u = u.next = d),
                    (Zo.lanes |= p),
                    (cu |= p);
                }
                (d = c.action),
                  oa && n(a, d),
                  (a = c.hasEagerState ? c.eagerState : n(a, d));
              } else
                (p = {
                  lane: d,
                  revertLane: c.revertLane,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === u ? ((s = u = p), (l = a)) : (u = u.next = p),
                  (Zo.lanes |= d),
                  (cu |= d);
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === u ? (l = a) : (u.next = s),
              !Qn(a, e.memoizedState) && ((Vi = !0), f && null !== (n = $o)))
            )
              throw n;
            (e.memoizedState = a),
              (e.baseState = l),
              (e.baseQueue = u),
              (r.lastRenderedState = a);
          }
          return null === o && (r.lanes = 0), [e.memoizedState, r.dispatch];
        }
        function Ca(e) {
          var t = va(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (a = e(a, l.action)), (l = l.next);
            } while (l !== o);
            Qn(a, t.memoizedState) || (Vi = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function Na(e, t, n) {
          var r = Zo,
            o = va(),
            a = Gr;
          if (a) {
            if (void 0 === n) throw Error(i(407));
            n = n();
          } else n = t();
          var l = !Qn((ea || o).memoizedState, n);
          if (
            (l && ((o.memoizedState = n), (Vi = !0)),
            (o = o.queue),
            Ja(Aa.bind(null, r, o, e), [e]),
            o.getSnapshot !== t ||
              l ||
              (null !== ta && 1 & ta.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Qa(9, Ta.bind(null, r, o, n, t), { destroy: void 0 }, null),
              null === eu)
            )
              throw Error(i(349));
            a || 60 & Jo || Oa(r, t, n);
          }
          return n;
        }
        function Oa(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = Zo.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (Zo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ta(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), La(t) && Pa(e);
        }
        function Aa(e, t, n) {
          return n(function () {
            La(t) && Pa(e);
          });
        }
        function La(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Qn(e, n);
          } catch (e) {
            return !0;
          }
        }
        function Pa(e) {
          var t = Or(e, 2);
          null !== t && Lu(t, 0, 2);
        }
        function Ra(e) {
          var t = ba();
          if ("function" == typeof e) {
            var n = e;
            if (((e = n()), oa)) {
              be(!0);
              try {
                n();
              } finally {
                be(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xa,
              lastRenderedState: e,
            }),
            t
          );
        }
        function za(e, t, n, r) {
          return (e.baseState = n), _a(e, ea, "function" == typeof r ? r : xa);
        }
        function ja(e, t, n, r, o) {
          if (ki(e)) throw Error(i(485));
          if (null !== (e = t.action)) {
            var a = {
              payload: o,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                a.listeners.push(e);
              },
            };
            null !== T.T ? n(!0) : (a.isTransition = !1),
              r(a),
              null === (n = t.pending)
                ? ((a.next = t.pending = a), Fa(t, a))
                : ((a.next = n.next), (t.pending = n.next = a));
          }
        }
        function Fa(e, t) {
          var n = t.action,
            r = t.payload,
            o = e.state;
          if (t.isTransition) {
            var a = T.T,
              i = {};
            T.T = i;
            try {
              var l = n(o, r),
                s = T.S;
              null !== s && s(i, l), Da(e, t, l);
            } catch (n) {
              Ma(e, t, n);
            } finally {
              T.T = a;
            }
          } else
            try {
              Da(e, t, (a = n(o, r)));
            } catch (n) {
              Ma(e, t, n);
            }
        }
        function Da(e, t, n) {
          null !== n && "object" == typeof n && "function" == typeof n.then
            ? n.then(
                function (n) {
                  Ia(e, t, n);
                },
                function (n) {
                  return Ma(e, t, n);
                }
              )
            : Ia(e, t, n);
        }
        function Ia(e, t, n) {
          (t.status = "fulfilled"),
            (t.value = n),
            Ua(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), Fa(e, n)));
        }
        function Ma(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              (t.status = "rejected"), (t.reason = n), Ua(t), (t = t.next);
            } while (t !== r);
          }
          e.action = null;
        }
        function Ua(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function Ba(e, t) {
          return t;
        }
        function qa(e, t) {
          if (Gr) {
            var n = eu.formState;
            if (null !== n) {
              e: {
                var r = Zo;
                if (Gr) {
                  if (Kr) {
                    t: {
                      for (var o = Kr, a = Xr; 8 !== o.nodeType; ) {
                        if (!a) {
                          o = null;
                          break t;
                        }
                        if (null === (o = lf(o.nextSibling))) {
                          o = null;
                          break t;
                        }
                      }
                      o = "F!" === (a = o.data) || "F" === a ? o : null;
                    }
                    if (o) {
                      (Kr = lf(o.nextSibling)), (r = "F!" === o.data);
                      break e;
                    }
                  }
                  Zr(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = ba()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ba,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = bi.bind(null, Zo, r)),
            (r.dispatch = n),
            (r = Ra(!1)),
            (a = wi.bind(null, Zo, !1, r.queue)),
            (o = { state: t, dispatch: null, action: e, pending: null }),
            ((r = ba()).queue = o),
            (n = ja.bind(null, Zo, o, a, n)),
            (o.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function Va(e) {
          return Ha(va(), ea, e);
        }
        function Ha(e, t, n) {
          (t = _a(e, t, Ba)[0]),
            (e = Ea(xa)[0]),
            (t =
              "object" == typeof t && null !== t && "function" == typeof t.then
                ? wa(t)
                : t);
          var r = va(),
            o = r.queue,
            a = o.dispatch;
          return (
            n !== r.memoizedState &&
              ((Zo.flags |= 2048),
              Qa(9, $a.bind(null, o, n), { destroy: void 0 }, null)),
            [t, a, e]
          );
        }
        function $a(e, t) {
          e.action = t;
        }
        function Wa(e) {
          var t = va(),
            n = ea;
          if (null !== n) return Ha(t, n, e);
          va(), (t = t.memoizedState);
          var r = (n = va()).queue.dispatch;
          return (n.memoizedState = e), [t, r, !1];
        }
        function Qa(e, t, n, r) {
          return (
            (e = { tag: e, create: t, inst: n, deps: r, next: null }),
            null === (t = Zo.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Zo.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ka() {
          return va().memoizedState;
        }
        function Ga(e, t, n, r) {
          var o = ba();
          (Zo.flags |= e),
            (o.memoizedState = Qa(
              1 | t,
              n,
              { destroy: void 0 },
              void 0 === r ? null : r
            ));
        }
        function Ya(e, t, n, r) {
          var o = va();
          r = void 0 === r ? null : r;
          var a = o.memoizedState.inst;
          null !== ea && null !== r && ca(r, ea.memoizedState.deps)
            ? (o.memoizedState = Qa(t, n, a, r))
            : ((Zo.flags |= e), (o.memoizedState = Qa(1 | t, n, a, r)));
        }
        function Xa(e, t) {
          Ga(8390656, 8, e, t);
        }
        function Ja(e, t) {
          Ya(2048, 8, e, t);
        }
        function Za(e, t) {
          return Ya(4, 2, e, t);
        }
        function ei(e, t) {
          return Ya(4, 4, e, t);
        }
        function ti(e, t) {
          if ("function" == typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" == typeof n ? n() : t(null);
            };
          }
          if (null != t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function ni(e, t, n) {
          (n = null != n ? n.concat([e]) : null),
            Ya(4, 4, ti.bind(null, t, e), n);
        }
        function ri() {}
        function oi(e, t) {
          var n = va();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && ca(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function ai(e, t) {
          var n = va();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && ca(t, r[1])) return r[0];
          if (((r = e()), oa)) {
            be(!0);
            try {
              e();
            } finally {
              be(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        }
        function ii(e, t, n) {
          return void 0 === n || 1073741824 & Jo
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = Au()),
              (Zo.lanes |= e),
              (cu |= e),
              n);
        }
        function li(e, t, n, r) {
          return Qn(n, t)
            ? n
            : null !== xo.current
            ? ((e = ii(e, n, r)), Qn(e, t) || (Vi = !0), e)
            : 42 & Jo
            ? ((e = Au()), (Zo.lanes |= e), (cu |= e), t)
            : ((Vi = !0), (e.memoizedState = n));
        }
        function si(e, t, n, r, o) {
          var a = B.p;
          B.p = 0 !== a && 8 > a ? a : 8;
          var i,
            l,
            s,
            u = T.T,
            c = {};
          (T.T = c), wi(e, !1, t, n);
          try {
            var f = o(),
              d = T.S;
            null !== d && d(c, f),
              null !== f && "object" == typeof f && "function" == typeof f.then
                ? vi(
                    e,
                    t,
                    ((i = r),
                    (l = []),
                    (s = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        l.push(e);
                      },
                    }),
                    f.then(
                      function () {
                        (s.status = "fulfilled"), (s.value = i);
                        for (var e = 0; e < l.length; e++) (0, l[e])(i);
                      },
                      function (e) {
                        for (
                          s.status = "rejected", s.reason = e, e = 0;
                          e < l.length;
                          e++
                        )
                          (0, l[e])(void 0);
                      }
                    ),
                    s),
                    Tu()
                  )
                : vi(e, t, r, Tu());
          } catch (n) {
            vi(
              e,
              t,
              { then: function () {}, status: "rejected", reason: n },
              Tu()
            );
          } finally {
            (B.p = a), (T.T = u);
          }
        }
        function ui() {}
        function ci(e, t, n, r) {
          if (5 !== e.tag) throw Error(i(476));
          var o = fi(e).queue;
          si(
            e,
            o,
            t,
            q,
            null === n
              ? ui
              : function () {
                  return di(e), n(r);
                }
          );
        }
        function fi(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: q,
              baseState: q,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: xa,
                lastRenderedState: q,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: xa,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function di(e) {
          vi(e, fi(e).next.queue, {}, Tu());
        }
        function pi() {
          return El(Ff);
        }
        function hi() {
          return va().memoizedState;
        }
        function mi() {
          return va().memoizedState;
        }
        function gi(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Tu(),
                  r = Ll(t, (e = Al(n)), n);
                return (
                  null !== r && (Lu(r, 0, n), Pl(r, t, n)),
                  (t = { cache: Uo() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function yi(e, t, n) {
          var r = Tu();
          (n = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            ki(e)
              ? Si(t, n)
              : null !== (n = Nr(e, t, n, r)) && (Lu(n, 0, r), xi(n, t, r));
        }
        function bi(e, t, n) {
          vi(e, t, n, Tu());
        }
        function vi(e, t, n, r) {
          var o = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (ki(e)) Si(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), Qn(l, i)))
                  return Cr(e, t, o, 0), null === eu && _r(), !1;
              } catch (e) {}
            if (null !== (n = Nr(e, t, o, r)))
              return Lu(n, 0, r), xi(n, t, r), !0;
          }
          return !1;
        }
        function wi(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: wc(),
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ki(e))
          ) {
            if (t) throw Error(i(479));
          } else null !== (t = Nr(e, n, r, 2)) && Lu(t, 0, 2);
        }
        function ki(e) {
          var t = e.alternate;
          return e === Zo || (null !== t && t === Zo);
        }
        function Si(e, t) {
          ra = na = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function xi(e, t, n) {
          if (4194176 & n) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), Re(e, n);
          }
        }
        var Ei = {
          readContext: El,
          use: ka,
          useCallback: ua,
          useContext: ua,
          useEffect: ua,
          useImperativeHandle: ua,
          useLayoutEffect: ua,
          useInsertionEffect: ua,
          useMemo: ua,
          useReducer: ua,
          useRef: ua,
          useState: ua,
          useDebugValue: ua,
          useDeferredValue: ua,
          useTransition: ua,
          useSyncExternalStore: ua,
          useId: ua,
        };
        (Ei.useCacheRefresh = ua),
          (Ei.useMemoCache = ua),
          (Ei.useHostTransitionStatus = ua),
          (Ei.useFormState = ua),
          (Ei.useActionState = ua),
          (Ei.useOptimistic = ua);
        var _i = {
          readContext: El,
          use: ka,
          useCallback: function (e, t) {
            return (ba().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: El,
          useEffect: Xa,
          useImperativeHandle: function (e, t, n) {
            (n = null != n ? n.concat([e]) : null),
              Ga(4194308, 4, ti.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return Ga(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            Ga(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = ba();
            t = void 0 === t ? null : t;
            var r = e();
            if (oa) {
              be(!0);
              try {
                e();
              } finally {
                be(!1);
              }
            }
            return (n.memoizedState = [r, t]), r;
          },
          useReducer: function (e, t, n) {
            var r = ba();
            if (void 0 !== n) {
              var o = n(t);
              if (oa) {
                be(!0);
                try {
                  n(t);
                } finally {
                  be(!1);
                }
              }
            } else o = t;
            return (
              (r.memoizedState = r.baseState = o),
              (e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: o,
              }),
              (r.queue = e),
              (e = e.dispatch = yi.bind(null, Zo, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (ba().memoizedState = e);
          },
          useState: function (e) {
            var t = (e = Ra(e)).queue,
              n = bi.bind(null, Zo, t);
            return (t.dispatch = n), [e.memoizedState, n];
          },
          useDebugValue: ri,
          useDeferredValue: function (e, t) {
            return ii(ba(), e, t);
          },
          useTransition: function () {
            var e = Ra(!1);
            return (
              (e = si.bind(null, Zo, e.queue, !0, !1)),
              (ba().memoizedState = e),
              [!1, e]
            );
          },
          useSyncExternalStore: function (e, t, n) {
            var r = Zo,
              o = ba();
            if (Gr) {
              if (void 0 === n) throw Error(i(407));
              n = n();
            } else {
              if (((n = t()), null === eu)) throw Error(i(349));
              60 & nu || Oa(r, t, n);
            }
            o.memoizedState = n;
            var a = { value: n, getSnapshot: t };
            return (
              (o.queue = a),
              Xa(Aa.bind(null, r, a, e), [e]),
              (r.flags |= 2048),
              Qa(9, Ta.bind(null, r, a, n, t), { destroy: void 0 }, null),
              n
            );
          },
          useId: function () {
            var e = ba(),
              t = eu.identifierPrefix;
            if (Gr) {
              var n = qr;
              (t =
                ":" +
                t +
                "R" +
                (n = (Br & ~(1 << (32 - ve(Br) - 1))).toString(32) + n)),
                0 < (n = aa++) && (t += "H" + n.toString(32)),
                (t += ":");
            } else t = ":" + t + "r" + (n = sa++).toString(32) + ":";
            return (e.memoizedState = t);
          },
          useCacheRefresh: function () {
            return (ba().memoizedState = gi.bind(null, Zo));
          },
        };
        (_i.useMemoCache = Sa),
          (_i.useHostTransitionStatus = pi),
          (_i.useFormState = qa),
          (_i.useActionState = qa),
          (_i.useOptimistic = function (e) {
            var t = ba();
            t.memoizedState = t.baseState = e;
            var n = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null,
            };
            return (
              (t.queue = n),
              (t = wi.bind(null, Zo, !0, n)),
              (n.dispatch = t),
              [e, t]
            );
          });
        var Ci = {
          readContext: El,
          use: ka,
          useCallback: oi,
          useContext: El,
          useEffect: Ja,
          useImperativeHandle: ni,
          useInsertionEffect: Za,
          useLayoutEffect: ei,
          useMemo: ai,
          useReducer: Ea,
          useRef: Ka,
          useState: function () {
            return Ea(xa);
          },
          useDebugValue: ri,
          useDeferredValue: function (e, t) {
            return li(va(), ea.memoizedState, e, t);
          },
          useTransition: function () {
            var e = Ea(xa)[0],
              t = va().memoizedState;
            return ["boolean" == typeof e ? e : wa(e), t];
          },
          useSyncExternalStore: Na,
          useId: hi,
        };
        (Ci.useCacheRefresh = mi),
          (Ci.useMemoCache = Sa),
          (Ci.useHostTransitionStatus = pi),
          (Ci.useFormState = Va),
          (Ci.useActionState = Va),
          (Ci.useOptimistic = function (e, t) {
            return za(va(), 0, e, t);
          });
        var Ni = {
          readContext: El,
          use: ka,
          useCallback: oi,
          useContext: El,
          useEffect: Ja,
          useImperativeHandle: ni,
          useInsertionEffect: Za,
          useLayoutEffect: ei,
          useMemo: ai,
          useReducer: Ca,
          useRef: Ka,
          useState: function () {
            return Ca(xa);
          },
          useDebugValue: ri,
          useDeferredValue: function (e, t) {
            var n = va();
            return null === ea ? ii(n, e, t) : li(n, ea.memoizedState, e, t);
          },
          useTransition: function () {
            var e = Ca(xa)[0],
              t = va().memoizedState;
            return ["boolean" == typeof e ? e : wa(e), t];
          },
          useSyncExternalStore: Na,
          useId: hi,
        };
        function Oi(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : A({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        (Ni.useCacheRefresh = mi),
          (Ni.useMemoCache = Sa),
          (Ni.useHostTransitionStatus = pi),
          (Ni.useFormState = Wa),
          (Ni.useActionState = Wa),
          (Ni.useOptimistic = function (e, t) {
            var n = va();
            return null !== ea
              ? za(n, 0, e, t)
              : ((n.baseState = e), [e, n.queue.dispatch]);
          });
        var Ti = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && F(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Tu(),
              o = Al(r);
            (o.payload = t),
              null != n && (o.callback = n),
              null !== (t = Ll(e, o, r)) && (Lu(t, 0, r), Pl(t, e, r));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Tu(),
              o = Al(r);
            (o.tag = 1),
              (o.payload = t),
              null != n && (o.callback = n),
              null !== (t = Ll(e, o, r)) && (Lu(t, 0, r), Pl(t, e, r));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Tu(),
              r = Al(n);
            (r.tag = 2),
              null != t && (r.callback = t),
              null !== (t = Ll(e, r, n)) && (Lu(t, 0, n), Pl(t, e, n));
          },
        };
        function Ai(e, t, n, r, o, a, i) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !(
                t.prototype &&
                t.prototype.isPureReactComponent &&
                Kn(n, r) &&
                Kn(o, a)
              );
        }
        function Li(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ti.enqueueReplaceState(t, t.state, null);
        }
        function Pi(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var o in (n === t && (n = A({}, n)), e))
              void 0 === n[o] && (n[o] = e[o]);
          return n;
        }
        var Ri =
          "function" == typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" == typeof window &&
                  "function" == typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" == typeof e &&
                      null !== e &&
                      "string" == typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" == typeof process &&
                  "function" == typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function zi(e) {
          Ri(e);
        }
        function ji(e) {
          console.error(e);
        }
        function Fi(e) {
          Ri(e);
        }
        function Di(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function Ii(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function Mi(e, t, n) {
          return (
            ((n = Al(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              Di(e, t);
            }),
            n
          );
        }
        function Ui(e) {
          return ((e = Al(e)).tag = 3), e;
        }
        function Bi(e, t, n, r) {
          var o = n.type.getDerivedStateFromError;
          if ("function" == typeof o) {
            var a = r.value;
            (e.payload = function () {
              return o(a);
            }),
              (e.callback = function () {
                Ii(t, n, r);
              });
          }
          var i = n.stateNode;
          null !== i &&
            "function" == typeof i.componentDidCatch &&
            (e.callback = function () {
              Ii(t, n, r),
                "function" != typeof o &&
                  (null === ku ? (ku = new Set([this])) : ku.add(this));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var qi = Error(i(461)),
          Vi = !1;
        function Hi(e, t, n, r) {
          t.child = null === e ? So(t, null, n, r) : ko(t, e.child, n, r);
        }
        function $i(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          if ("ref" in r) {
            var i = {};
            for (var l in r) "ref" !== l && (i[l] = r[l]);
          } else i = r;
          return (
            xl(t),
            (r = fa(e, t, n, i, a, o)),
            (l = ma()),
            null === e || Vi
              ? (Gr && l && $r(t), (t.flags |= 1), Hi(e, t, r, o), t.child)
              : (ga(e, t, o), fl(e, t, o))
          );
        }
        function Wi(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" != typeof a ||
              js(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare
              ? (((e = Is(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Qi(e, t, a, r, o));
          }
          if (((a = e.child), !dl(e, o))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Kn)(i, r) &&
              e.ref === t.ref
            )
              return fl(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Fs(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Qi(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (Kn(a, r) && e.ref === t.ref) {
              if (((Vi = !1), (t.pendingProps = r = a), !dl(e, o)))
                return (t.lanes = e.lanes), fl(e, t, o);
              131072 & e.flags && (Vi = !0);
            }
          }
          return Xi(e, t, n, r, o);
        }
        function Ki(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = !!(2 & t.stateNode._pendingVisibility),
            i = null !== e ? e.memoizedState : null;
          if ((Yi(e, t), "hidden" === r.mode || a)) {
            if (128 & t.flags) {
              if (((r = null !== i ? i.baseLanes | n : n), null !== e)) {
                for (o = t.child = e.child, a = 0; null !== o; )
                  (a = a | o.lanes | o.childLanes), (o = o.sibling);
                t.childLanes = a & ~r;
              } else (t.childLanes = 0), (t.child = null);
              return Gi(e, t, r, n);
            }
            if (!(536870912 & n))
              return (
                (t.lanes = t.childLanes = 536870912),
                Gi(e, t, null !== i ? i.baseLanes | n : n, n)
              );
            (t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Yo(0, null !== i ? i.cachePool : null),
              null !== i ? _o(t, i) : Co(),
              Lo(t);
          } else
            null !== i
              ? (Yo(0, i.cachePool), _o(t, i), Po(), (t.memoizedState = null))
              : (null !== e && Yo(0, null), Co(), Po());
          return Hi(e, t, o, n), t.child;
        }
        function Gi(e, t, n, r) {
          var o = Go();
          return (
            (o = null === o ? null : { parent: Mo._currentValue, pool: o }),
            (t.memoizedState = { baseLanes: n, cachePool: o }),
            null !== e && Yo(0, null),
            Co(),
            Lo(t),
            null !== e && kl(e, t, r, !0),
            null
          );
        }
        function Yi(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 2097664);
          else {
            if ("function" != typeof n && "object" != typeof n)
              throw Error(i(284));
            (null !== e && e.ref === n) || (t.flags |= 2097664);
          }
        }
        function Xi(e, t, n, r, o) {
          return (
            xl(t),
            (n = fa(e, t, n, r, void 0, o)),
            (r = ma()),
            null === e || Vi
              ? (Gr && r && $r(t), (t.flags |= 1), Hi(e, t, n, o), t.child)
              : (ga(e, t, o), fl(e, t, o))
          );
        }
        function Ji(e, t, n, r, o, a) {
          return (
            xl(t),
            (t.updateQueue = null),
            (n = pa(t, r, n, o)),
            da(e),
            (r = ma()),
            null === e || Vi
              ? (Gr && r && $r(t), (t.flags |= 1), Hi(e, t, n, a), t.child)
              : (ga(e, t, a), fl(e, t, a))
          );
        }
        function Zi(e, t, n, r, o) {
          if ((xl(t), null === t.stateNode)) {
            var a = Lr,
              i = n.contextType;
            "object" == typeof i && null !== i && (a = El(i)),
              (a = new n(r, a)),
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
              (a.updater = Ti),
              (t.stateNode = a),
              (a._reactInternals = t),
              ((a = t.stateNode).props = r),
              (a.state = t.memoizedState),
              (a.refs = {}),
              Ol(t),
              (i = n.contextType),
              (a.context = "object" == typeof i && null !== i ? El(i) : Lr),
              (a.state = t.memoizedState),
              "function" == typeof (i = n.getDerivedStateFromProps) &&
                (Oi(t, n, i, r), (a.state = t.memoizedState)),
              "function" == typeof n.getDerivedStateFromProps ||
                "function" == typeof a.getSnapshotBeforeUpdate ||
                ("function" != typeof a.UNSAFE_componentWillMount &&
                  "function" != typeof a.componentWillMount) ||
                ((i = a.state),
                "function" == typeof a.componentWillMount &&
                  a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount &&
                  a.UNSAFE_componentWillMount(),
                i !== a.state && Ti.enqueueReplaceState(a, a.state, null),
                Fl(t, r, a, o),
                jl(),
                (a.state = t.memoizedState)),
              "function" == typeof a.componentDidMount && (t.flags |= 4194308),
              (r = !0);
          } else if (null === e) {
            a = t.stateNode;
            var l = t.memoizedProps,
              s = Pi(n, l);
            a.props = s;
            var u = a.context,
              c = n.contextType;
            (i = Lr), "object" == typeof c && null !== c && (i = El(c));
            var f = n.getDerivedStateFromProps;
            (c =
              "function" == typeof f ||
              "function" == typeof a.getSnapshotBeforeUpdate),
              (l = t.pendingProps !== l),
              c ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                ((l || u !== i) && Li(t, a, r, i)),
              (Nl = !1);
            var d = t.memoizedState;
            (a.state = d),
              Fl(t, r, a, o),
              jl(),
              (u = t.memoizedState),
              l || d !== u || Nl
                ? ("function" == typeof f &&
                    (Oi(t, n, f, r), (u = t.memoizedState)),
                  (s = Nl || Ai(t, n, s, r, d, u, i))
                    ? (c ||
                        ("function" != typeof a.UNSAFE_componentWillMount &&
                          "function" != typeof a.componentWillMount) ||
                        ("function" == typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" == typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" == typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" == typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (a.props = r),
                  (a.state = u),
                  (a.context = i),
                  (r = s))
                : ("function" == typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              Tl(e, t),
              (c = Pi(n, (i = t.memoizedProps))),
              (a.props = c),
              (f = t.pendingProps),
              (d = a.context),
              (u = n.contextType),
              (s = Lr),
              "object" == typeof u && null !== u && (s = El(u)),
              (u =
                "function" == typeof (l = n.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                ((i !== f || d !== s) && Li(t, a, r, s)),
              (Nl = !1),
              (d = t.memoizedState),
              (a.state = d),
              Fl(t, r, a, o),
              jl();
            var p = t.memoizedState;
            i !== f ||
            d !== p ||
            Nl ||
            (null !== e && null !== e.dependencies && Sl(e.dependencies))
              ? ("function" == typeof l &&
                  (Oi(t, n, l, r), (p = t.memoizedState)),
                (c =
                  Nl ||
                  Ai(t, n, c, r, d, p, s) ||
                  (null !== e && null !== e.dependencies && Sl(e.dependencies)))
                  ? (u ||
                      ("function" != typeof a.UNSAFE_componentWillUpdate &&
                        "function" != typeof a.componentWillUpdate) ||
                      ("function" == typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, p, s),
                      "function" == typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" != typeof a.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (a.props = r),
                (a.state = p),
                (a.context = s),
                (r = c))
              : ("function" != typeof a.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (a = r),
            Yi(e, t),
            (r = !!(128 & t.flags)),
            a || r
              ? ((a = t.stateNode),
                (n =
                  r && "function" != typeof n.getDerivedStateFromError
                    ? null
                    : a.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = ko(t, e.child, null, o)),
                    (t.child = ko(t, null, n, o)))
                  : Hi(e, t, n, o),
                (t.memoizedState = a.state),
                (e = t.child))
              : (e = fl(e, t, o)),
            e
          );
        }
        function el(e, t, n, r) {
          return ro(), (t.flags |= 256), Hi(e, t, n, r), t.child;
        }
        var tl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function nl(e) {
          return { baseLanes: e, cachePool: Xo() };
        }
        function rl(e, t, n) {
          return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= pu), e;
        }
        function ol(e, t, n) {
          var r,
            o = t.pendingProps,
            a = !1,
            l = !!(128 & t.flags);
          if (
            ((r = l) ||
              (r =
                (null === e || null !== e.memoizedState) && !!(2 & zo.current)),
            r && ((a = !0), (t.flags &= -129)),
            (r = !!(32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (Gr) {
              if ((a ? Ao(t) : Po(), Gr)) {
                var s,
                  u = Kr;
                if ((s = u)) {
                  e: {
                    for (s = u, u = Xr; 8 !== s.nodeType; ) {
                      if (!u) {
                        u = null;
                        break e;
                      }
                      if (null === (s = lf(s.nextSibling))) {
                        u = null;
                        break e;
                      }
                    }
                    u = s;
                  }
                  null !== u
                    ? ((t.memoizedState = {
                        dehydrated: u,
                        treeContext:
                          null !== Ur ? { id: Br, overflow: qr } : null,
                        retryLane: 536870912,
                      }),
                      ((s = zs(18, null, null, 0)).stateNode = u),
                      (s.return = t),
                      (t.child = s),
                      (Qr = t),
                      (Kr = null),
                      (s = !0))
                    : (s = !1);
                }
                s || Zr(t);
              }
              if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
                return (
                  "$!" === u.data ? (t.lanes = 16) : (t.lanes = 536870912), null
                );
              Ro(t);
            }
            return (
              (u = o.children),
              (o = o.fallback),
              a
                ? (Po(),
                  (u = il({ mode: "hidden", children: u }, (a = t.mode))),
                  (o = Ms(o, a, n, null)),
                  (u.return = t),
                  (o.return = t),
                  (u.sibling = o),
                  (t.child = u),
                  ((a = t.child).memoizedState = nl(n)),
                  (a.childLanes = rl(e, r, n)),
                  (t.memoizedState = tl),
                  o)
                : (Ao(t), al(t, u))
            );
          }
          if (null !== (s = e.memoizedState) && null !== (u = s.dehydrated)) {
            if (l)
              256 & t.flags
                ? (Ao(t), (t.flags &= -257), (t = ll(e, t, n)))
                : null !== t.memoizedState
                ? (Po(), (t.child = e.child), (t.flags |= 128), (t = null))
                : (Po(),
                  (a = o.fallback),
                  (u = t.mode),
                  (o = il({ mode: "visible", children: o.children }, u)),
                  ((a = Ms(a, u, n, null)).flags |= 2),
                  (o.return = t),
                  (a.return = t),
                  (o.sibling = a),
                  (t.child = o),
                  ko(t, e.child, null, n),
                  ((o = t.child).memoizedState = nl(n)),
                  (o.childLanes = rl(e, r, n)),
                  (t.memoizedState = tl),
                  (t = a));
            else if ((Ao(t), "$!" === u.data)) {
              if ((r = u.nextSibling && u.nextSibling.dataset)) var c = r.dgst;
              (r = c),
                ((o = Error(i(419))).stack = ""),
                (o.digest = r),
                oo({ value: o, source: null, stack: null }),
                (t = ll(e, t, n));
            } else if (
              (Vi || kl(e, t, n, !1), (r = !!(n & e.childLanes)), Vi || r)
            ) {
              if (null !== (r = eu)) {
                if (42 & (o = n & -n)) o = 1;
                else
                  switch (o) {
                    case 2:
                      o = 1;
                      break;
                    case 8:
                      o = 4;
                      break;
                    case 32:
                      o = 16;
                      break;
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                      o = 64;
                      break;
                    case 268435456:
                      o = 134217728;
                      break;
                    default:
                      o = 0;
                  }
                if (
                  0 !== (o = o & (r.suspendedLanes | n) ? 0 : o) &&
                  o !== s.retryLane
                )
                  throw ((s.retryLane = o), Or(e, o), Lu(r, 0, o), qi);
              }
              "$?" === u.data || Vu(), (t = ll(e, t, n));
            } else
              "$?" === u.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = ic.bind(null, e)),
                  (u._reactRetry = t),
                  (t = null))
                : ((e = s.treeContext),
                  (Kr = lf(u.nextSibling)),
                  (Qr = t),
                  (Gr = !0),
                  (Yr = null),
                  (Xr = !1),
                  null !== e &&
                    ((Ir[Mr++] = Br),
                    (Ir[Mr++] = qr),
                    (Ir[Mr++] = Ur),
                    (Br = e.id),
                    (qr = e.overflow),
                    (Ur = t)),
                  ((t = al(t, o.children)).flags |= 4096));
            return t;
          }
          return a
            ? (Po(),
              (a = o.fallback),
              (u = t.mode),
              (c = (s = e.child).sibling),
              ((o = Fs(s, {
                mode: "hidden",
                children: o.children,
              })).subtreeFlags = 31457280 & s.subtreeFlags),
              null !== c
                ? (a = Fs(c, a))
                : ((a = Ms(a, u, n, null)).flags |= 2),
              (a.return = t),
              (o.return = t),
              (o.sibling = a),
              (t.child = o),
              (o = a),
              (a = t.child),
              null === (u = e.child.memoizedState)
                ? (u = nl(n))
                : (null !== (s = u.cachePool)
                    ? ((c = Mo._currentValue),
                      (s = s.parent !== c ? { parent: c, pool: c } : s))
                    : (s = Xo()),
                  (u = { baseLanes: u.baseLanes | n, cachePool: s })),
              (a.memoizedState = u),
              (a.childLanes = rl(e, r, n)),
              (t.memoizedState = tl),
              o)
            : (Ao(t),
              (e = (n = e.child).sibling),
              ((n = Fs(n, { mode: "visible", children: o.children })).return =
                t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function al(e, t) {
          return (
            ((t = il({ mode: "visible", children: t }, e.mode)).return = e),
            (e.child = t)
          );
        }
        function il(e, t) {
          return Us(e, t, 0, null);
        }
        function ll(e, t, n) {
          return (
            ko(t, e.child, null, n),
            ((e = al(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function sl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), vl(e.return, t, n);
        }
        function ul(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function cl(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((Hi(e, t, r.children, n), 2 & (r = zo.current)))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 128 & e.flags)
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && sl(e, n, t);
                else if (19 === e.tag) sl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          switch ((Q(zo, r), o)) {
            case "forwards":
              for (n = t.child, o = null; null !== n; )
                null !== (e = n.alternate) && null === jo(e) && (o = n),
                  (n = n.sibling);
              null === (n = o)
                ? ((o = t.child), (t.child = null))
                : ((o = n.sibling), (n.sibling = null)),
                ul(t, !1, o, n, a);
              break;
            case "backwards":
              for (n = null, o = t.child, t.child = null; null !== o; ) {
                if (null !== (e = o.alternate) && null === jo(e)) {
                  t.child = o;
                  break;
                }
                (e = o.sibling), (o.sibling = n), (n = o), (o = e);
              }
              ul(t, !0, n, null, a);
              break;
            case "together":
              ul(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function fl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (cu |= t.lanes),
            !(n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((kl(e, t, n, !1), !(n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Fs((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Fs(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function dl(e, t) {
          return !!(e.lanes & t) || !(null === (e = e.dependencies) || !Sl(e));
        }
        function pl(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Vi = !0;
            else {
              if (!(dl(e, n) || 128 & t.flags))
                return (
                  (Vi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        J(t, t.stateNode.containerInfo),
                          yl(0, Mo, e.memoizedState.cache),
                          ro();
                        break;
                      case 27:
                      case 5:
                        ee(t);
                        break;
                      case 4:
                        J(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        yl(0, t.type, t.memoizedProps.value);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (Ao(t), (t.flags |= 128), null)
                            : n & t.child.childLanes
                            ? ol(e, t, n)
                            : (Ao(t),
                              null !== (e = fl(e, t, n)) ? e.sibling : null);
                        Ao(t);
                        break;
                      case 19:
                        var o = !!(128 & e.flags);
                        if (
                          ((r = !!(n & t.childLanes)) ||
                            (kl(e, t, n, !1), (r = !!(n & t.childLanes))),
                          o)
                        ) {
                          if (r) return cl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          Q(zo, zo.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ki(e, t, n);
                      case 24:
                        yl(0, Mo, e.memoizedState.cache);
                    }
                    return fl(e, t, n);
                  })(e, t, n)
                );
              Vi = !!(131072 & e.flags);
            }
          else (Vi = !1), Gr && 1048576 & t.flags && Hr(t, Dr, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                e = t.pendingProps;
                var r = t.elementType,
                  o = r._init;
                if (
                  ((r = o(r._payload)), (t.type = r), "function" != typeof r)
                ) {
                  if (null != r) {
                    if ((o = r.$$typeof) === g) {
                      (t.tag = 11), (t = $i(null, t, r, e, n));
                      break e;
                    }
                    if (o === v) {
                      (t.tag = 14), (t = Wi(null, t, r, e, n));
                      break e;
                    }
                  }
                  throw ((t = C(r) || r), Error(i(306, t, "")));
                }
                js(r)
                  ? ((e = Pi(r, e)), (t.tag = 1), (t = Zi(null, t, r, e, n)))
                  : ((t.tag = 0), (t = Xi(null, t, r, e, n)));
              }
              return t;
            case 0:
              return Xi(e, t, t.type, t.pendingProps, n);
            case 1:
              return Zi(e, t, (r = t.type), (o = Pi(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((J(t, t.stateNode.containerInfo), null === e))
                  throw Error(i(387));
                var a = t.pendingProps;
                (r = (o = t.memoizedState).element),
                  Tl(e, t),
                  Fl(t, a, null, n);
                var l = t.memoizedState;
                if (
                  ((a = l.cache),
                  yl(0, Mo, a),
                  a !== o.cache && wl(t, [Mo], n, !0),
                  jl(),
                  (a = l.element),
                  o.isDehydrated)
                ) {
                  if (
                    ((o = { element: a, isDehydrated: !1, cache: l.cache }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = el(e, t, a, n);
                    break e;
                  }
                  if (a !== r) {
                    oo((r = Rr(Error(i(424)), t))), (t = el(e, t, a, n));
                    break e;
                  }
                  for (
                    Kr = lf(t.stateNode.containerInfo.firstChild),
                      Qr = t,
                      Gr = !0,
                      Yr = null,
                      Xr = !0,
                      n = So(t, null, a, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ro(), a === r)) {
                    t = fl(e, t, n);
                    break e;
                  }
                  Hi(e, t, a, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Yi(e, t),
                null === e
                  ? (n = gf(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : Gr ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = Kc(Y.current).createElement(n))[De] = t),
                      (r[Ie] = e),
                      $c(r, n, e),
                      Ye(r),
                      (t.stateNode = r))
                  : (t.memoizedState = gf(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState
                    )),
                null
              );
            case 27:
              return (
                ee(t),
                null === e &&
                  Gr &&
                  ((r = t.stateNode = uf(t.type, t.pendingProps, Y.current)),
                  (Qr = t),
                  (Xr = !0),
                  (Kr = lf(r.firstChild))),
                (r = t.pendingProps.children),
                null !== e || Gr
                  ? Hi(e, t, r, n)
                  : (t.child = ko(t, null, r, n)),
                Yi(e, t),
                t.child
              );
            case 5:
              return (
                null === e &&
                  Gr &&
                  ((o = r = Kr) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var o = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[He])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (a = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  a !== o.rel ||
                                  e.getAttribute("href") !==
                                    (null == o.href ? null : o.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == o.crossOrigin
                                      ? null
                                      : o.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == o.title ? null : o.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((a = e.getAttribute("src")) !==
                                    (null == o.src ? null : o.src) ||
                                    e.getAttribute("type") !==
                                      (null == o.type ? null : o.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == o.crossOrigin
                                        ? null
                                        : o.crossOrigin)) &&
                                  a &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var a = null == o.name ? null : "" + o.name;
                          if (
                            "hidden" === o.type &&
                            e.getAttribute("name") === a
                          )
                            return e;
                        }
                        if (null === (e = lf(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, Xr))
                      ? ((t.stateNode = r),
                        (Qr = t),
                        (Kr = lf(r.firstChild)),
                        (Xr = !1),
                        (o = !0))
                      : (o = !1)),
                  o || Zr(t)),
                ee(t),
                (o = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (r = a.children),
                Xc(o, a)
                  ? (r = null)
                  : null !== l && Xc(o, l) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((o = fa(e, t, ha, null, null, n)), (Ff._currentValue = o)),
                Yi(e, t),
                Hi(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  Gr &&
                  ((e = n = Kr) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = lf(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, Xr))
                      ? ((t.stateNode = n), (Qr = t), (Kr = null), (e = !0))
                      : (e = !1)),
                  e || Zr(t)),
                null
              );
            case 13:
              return ol(e, t, n);
            case 4:
              return (
                J(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ko(t, null, r, n)) : Hi(e, t, r, n),
                t.child
              );
            case 11:
              return $i(e, t, t.type, t.pendingProps, n);
            case 7:
              return Hi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Hi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return (
                (r = t.pendingProps),
                yl(0, t.type, r.value),
                Hi(e, t, r.children, n),
                t.child
              );
            case 9:
              return (
                (o = t.type._context),
                (r = t.pendingProps.children),
                xl(t),
                (r = r((o = El(o)))),
                (t.flags |= 1),
                Hi(e, t, r, n),
                t.child
              );
            case 14:
              return Wi(e, t, t.type, t.pendingProps, n);
            case 15:
              return Qi(e, t, t.type, t.pendingProps, n);
            case 19:
              return cl(e, t, n);
            case 22:
              return Ki(e, t, n);
            case 24:
              return (
                xl(t),
                (r = El(Mo)),
                null === e
                  ? (null === (o = Go()) &&
                      ((o = eu),
                      (a = Uo()),
                      (o.pooledCache = a),
                      a.refCount++,
                      null !== a && (o.pooledCacheLanes |= n),
                      (o = a)),
                    (t.memoizedState = { parent: r, cache: o }),
                    Ol(t),
                    yl(0, Mo, o))
                  : (!!(e.lanes & n) && (Tl(e, t), Fl(t, null, null, n), jl()),
                    (o = e.memoizedState),
                    (a = t.memoizedState),
                    o.parent !== r
                      ? ((o = { parent: r, cache: r }),
                        (t.memoizedState = o),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = o),
                        yl(0, Mo, r))
                      : ((r = a.cache),
                        yl(0, Mo, r),
                        r !== o.cache && wl(t, [Mo], n, !0))),
                Hi(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(i(156, t.tag));
        }
        var hl = $(null),
          ml = null,
          gl = null;
        function yl(e, t, n) {
          Q(hl, t._currentValue), (t._currentValue = n);
        }
        function bl(e) {
          (e._currentValue = hl.current), W(hl);
        }
        function vl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function wl(e, t, n, r) {
          var o = e.child;
          for (null !== o && (o.return = e); null !== o; ) {
            var a = o.dependencies;
            if (null !== a) {
              var l = o.child;
              a = a.firstContext;
              e: for (; null !== a; ) {
                var s = a;
                a = o;
                for (var u = 0; u < t.length; u++)
                  if (s.context === t[u]) {
                    (a.lanes |= n),
                      null !== (s = a.alternate) && (s.lanes |= n),
                      vl(a.return, n, e),
                      r || (l = null);
                    break e;
                  }
                a = s.next;
              }
            } else if (18 === o.tag) {
              if (null === (l = o.return)) throw Error(i(341));
              (l.lanes |= n),
                null !== (a = l.alternate) && (a.lanes |= n),
                vl(l, n, e),
                (l = null);
            } else l = o.child;
            if (null !== l) l.return = o;
            else
              for (l = o; null !== l; ) {
                if (l === e) {
                  l = null;
                  break;
                }
                if (null !== (o = l.sibling)) {
                  (o.return = l.return), (l = o);
                  break;
                }
                l = l.return;
              }
            o = l;
          }
        }
        function kl(e, t, n, r) {
          e = null;
          for (var o = t, a = !1; null !== o; ) {
            if (!a)
              if (524288 & o.flags) a = !0;
              else if (262144 & o.flags) break;
            if (10 === o.tag) {
              var l = o.alternate;
              if (null === l) throw Error(i(387));
              if (null !== (l = l.memoizedProps)) {
                var s = o.type;
                Qn(o.pendingProps.value, l.value) ||
                  (null !== e ? e.push(s) : (e = [s]));
              }
            } else if (o === X.current) {
              if (null === (l = o.alternate)) throw Error(i(387));
              l.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
                (null !== e ? e.push(Ff) : (e = [Ff]));
            }
            o = o.return;
          }
          null !== e && wl(t, e, n, r), (t.flags |= 262144);
        }
        function Sl(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Qn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function xl(e) {
          (ml = e),
            (gl = null),
            null !== (e = e.dependencies) && (e.firstContext = null);
        }
        function El(e) {
          return Cl(ml, e);
        }
        function _l(e, t) {
          return null === ml && xl(e), Cl(e, t);
        }
        function Cl(e, t) {
          var n = t._currentValue;
          if (
            ((t = { context: t, memoizedValue: n, next: null }), null === gl)
          ) {
            if (null === e) throw Error(i(308));
            (gl = t),
              (e.dependencies = { lanes: 0, firstContext: t }),
              (e.flags |= 524288);
          } else gl = gl.next = t;
          return n;
        }
        var Nl = !1;
        function Ol(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function Tl(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              });
        }
        function Al(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function Ll(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 2 & Zs)) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              (t = Ar(e)),
              Tr(e, null, n),
              t
            );
          }
          return Cr(e, r, t, n), Ar(e);
        }
        function Pl(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 4194176 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), Re(e, n);
          }
        }
        function Rl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        var zl = !1;
        function jl() {
          if (zl && null !== $o) throw $o;
        }
        function Fl(e, t, n, r) {
          zl = !1;
          var o = e.updateQueue;
          Nl = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (a = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var f = o.baseState;
            for (i = 0, c = u = s = null, l = a; ; ) {
              var d = -536870913 & l.lane,
                p = d !== l.lane;
              if (p ? (nu & d) === d : (r & d) === d) {
                0 !== d && d === Ho && (zl = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null,
                      });
                e: {
                  var h = e,
                    m = l;
                  d = t;
                  var g = n;
                  switch (m.tag) {
                    case 1:
                      if ("function" == typeof (h = m.payload)) {
                        f = h.call(g, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (d =
                          "function" == typeof (h = m.payload)
                            ? h.call(g, f, d)
                            : h)
                      )
                        break e;
                      f = A({}, f, d);
                      break e;
                    case 2:
                      Nl = !0;
                  }
                }
                null !== (d = l.callback) &&
                  ((e.flags |= 64),
                  p && (e.flags |= 8192),
                  null === (p = o.callbacks) ? (o.callbacks = [d]) : p.push(d));
              } else
                (p = {
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (p = l).next),
                  (p.next = null),
                  (o.lastBaseUpdate = p),
                  (o.shared.pending = null);
              }
            }
            null === c && (s = f),
              (o.baseState = s),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null === a && (o.shared.lanes = 0),
              (cu |= i),
              (e.lanes = i),
              (e.memoizedState = f);
          }
        }
        function Dl(e, t) {
          if ("function" != typeof e) throw Error(i(191, e));
          e.call(t);
        }
        function Il(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) Dl(n[e], t);
        }
        function Ml(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var o = r.next;
              n = o;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var a = n.create,
                    i = n.inst;
                  (r = a()), (i.destroy = r);
                }
                n = n.next;
              } while (n !== o);
            }
          } catch (e) {
            nc(t, t.return, e);
          }
        }
        function Ul(e, t, n) {
          try {
            var r = t.updateQueue,
              o = null !== r ? r.lastEffect : null;
            if (null !== o) {
              var a = o.next;
              r = a;
              do {
                if ((r.tag & e) === e) {
                  var i = r.inst,
                    l = i.destroy;
                  if (void 0 !== l) {
                    (i.destroy = void 0), (o = t);
                    var s = n;
                    try {
                      l();
                    } catch (e) {
                      nc(o, s, e);
                    }
                  }
                }
                r = r.next;
              } while (r !== a);
            }
          } catch (e) {
            nc(t, t.return, e);
          }
        }
        function Bl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              Il(t, n);
            } catch (t) {
              nc(e, e.return, t);
            }
          }
        }
        function ql(e, t, n) {
          (n.props = Pi(e.type, e.memoizedProps)), (n.state = e.memoizedState);
          try {
            n.componentWillUnmount();
          } catch (n) {
            nc(e, t, n);
          }
        }
        function Vl(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              var r = e.stateNode;
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var o = r;
                  break;
                default:
                  o = r;
              }
              "function" == typeof n ? (e.refCleanup = n(o)) : (n.current = o);
            }
          } catch (n) {
            nc(e, t, n);
          }
        }
        function Hl(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" == typeof r)
              try {
                r();
              } catch (n) {
                nc(e, t, n);
              } finally {
                (e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null);
              }
            else if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                nc(e, t, n);
              }
            else n.current = null;
        }
        function $l(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (t) {
            nc(e, e.return, t);
          }
        }
        function Wl(e, t, n) {
          try {
            var r = e.stateNode;
            !(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var o = null,
                    a = null,
                    l = null,
                    s = null,
                    u = null,
                    c = null,
                    f = null;
                  for (h in n) {
                    var d = n[h];
                    if (n.hasOwnProperty(h) && null != d)
                      switch (h) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          u = d;
                        default:
                          r.hasOwnProperty(h) || Vc(e, t, h, null, r, d);
                      }
                  }
                  for (var p in r) {
                    var h = r[p];
                    if (
                      ((d = n[p]),
                      r.hasOwnProperty(p) && (null != h || null != d))
                    )
                      switch (p) {
                        case "type":
                          a = h;
                          break;
                        case "name":
                          o = h;
                          break;
                        case "checked":
                          c = h;
                          break;
                        case "defaultChecked":
                          f = h;
                          break;
                        case "value":
                          l = h;
                          break;
                        case "defaultValue":
                          s = h;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != h) throw Error(i(137, t));
                          break;
                        default:
                          h !== d && Vc(e, t, p, h, r, d);
                      }
                  }
                  return void mt(e, l, s, u, c, f, a, o);
                case "select":
                  for (a in ((h = l = s = p = null), n))
                    if (((u = n[a]), n.hasOwnProperty(a) && null != u))
                      switch (a) {
                        case "value":
                          break;
                        case "multiple":
                          h = u;
                        default:
                          r.hasOwnProperty(a) || Vc(e, t, a, null, r, u);
                      }
                  for (o in r)
                    if (
                      ((a = r[o]),
                      (u = n[o]),
                      r.hasOwnProperty(o) && (null != a || null != u))
                    )
                      switch (o) {
                        case "value":
                          p = a;
                          break;
                        case "defaultValue":
                          s = a;
                          break;
                        case "multiple":
                          l = a;
                        default:
                          a !== u && Vc(e, t, o, a, r, u);
                      }
                  return (
                    (t = s),
                    (n = l),
                    (r = h),
                    void (null != p
                      ? bt(e, !!n, p, !1)
                      : !!r != !!n &&
                        (null != t
                          ? bt(e, !!n, t, !0)
                          : bt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (s in ((h = p = null), n))
                    if (
                      ((o = n[s]),
                      n.hasOwnProperty(s) && null != o && !r.hasOwnProperty(s))
                    )
                      switch (s) {
                        case "value":
                        case "children":
                          break;
                        default:
                          Vc(e, t, s, null, r, o);
                      }
                  for (l in r)
                    if (
                      ((o = r[l]),
                      (a = n[l]),
                      r.hasOwnProperty(l) && (null != o || null != a))
                    )
                      switch (l) {
                        case "value":
                          p = o;
                          break;
                        case "defaultValue":
                          h = o;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != o) throw Error(i(91));
                          break;
                        default:
                          o !== a && Vc(e, t, l, o, r, a);
                      }
                  return void vt(e, p, h);
                case "option":
                  for (var m in n)
                    (p = n[m]),
                      n.hasOwnProperty(m) &&
                        null != p &&
                        !r.hasOwnProperty(m) &&
                        ("selected" === m
                          ? (e.selected = !1)
                          : Vc(e, t, m, null, r, p));
                  for (u in r)
                    (p = r[u]),
                      (h = n[u]),
                      !r.hasOwnProperty(u) ||
                        p === h ||
                        (null == p && null == h) ||
                        ("selected" === u
                          ? (e.selected =
                              p &&
                              "function" != typeof p &&
                              "symbol" != typeof p)
                          : Vc(e, t, u, p, r, h));
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    (p = n[g]),
                      n.hasOwnProperty(g) &&
                        null != p &&
                        !r.hasOwnProperty(g) &&
                        Vc(e, t, g, null, r, p);
                  for (c in r)
                    if (
                      ((p = r[c]),
                      (h = n[c]),
                      r.hasOwnProperty(c) &&
                        p !== h &&
                        (null != p || null != h))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(i(137, t));
                          break;
                        default:
                          Vc(e, t, c, p, r, h);
                      }
                  return;
                default:
                  if (_t(t)) {
                    for (var y in n)
                      (p = n[y]),
                        n.hasOwnProperty(y) &&
                          void 0 !== p &&
                          !r.hasOwnProperty(y) &&
                          Hc(e, t, y, void 0, r, p);
                    for (f in r)
                      (p = r[f]),
                        (h = n[f]),
                        !r.hasOwnProperty(f) ||
                          p === h ||
                          (void 0 === p && void 0 === h) ||
                          Hc(e, t, f, p, r, h);
                    return;
                  }
              }
              for (var b in n)
                (p = n[b]),
                  n.hasOwnProperty(b) &&
                    null != p &&
                    !r.hasOwnProperty(b) &&
                    Vc(e, t, b, null, r, p);
              for (d in r)
                (p = r[d]),
                  (h = n[d]),
                  !r.hasOwnProperty(d) ||
                    p === h ||
                    (null == p && null == h) ||
                    Vc(e, t, d, p, r, h);
            })(r, e.type, n, t),
              (r[Ie] = t);
          } catch (t) {
            nc(e, e.return, t);
          }
        }
        function Ql(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            27 === e.tag ||
            4 === e.tag
          );
        }
        function Kl(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Ql(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function Gl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = qc));
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Gl(e, t, n), e = e.sibling; null !== e; )
              Gl(e, t, n), (e = e.sibling);
        }
        function Yl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Yl(e, t, n), e = e.sibling; null !== e; )
              Yl(e, t, n), (e = e.sibling);
        }
        var Xl = !1,
          Jl = !1,
          Zl = !1,
          es = "function" == typeof WeakSet ? WeakSet : Set,
          ts = null,
          ns = !1;
        function rs(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              gs(e, n), 4 & r && Ml(5, n);
              break;
            case 1:
              if ((gs(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (e) {
                    nc(n, n.return, e);
                  }
                else {
                  var o = Pi(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      o,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate
                    );
                  } catch (e) {
                    nc(n, n.return, e);
                  }
                }
              64 & r && Bl(n), 512 & r && Vl(n, n.return);
              break;
            case 3:
              if ((gs(e, n), 64 & r && null !== (r = n.updateQueue))) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                try {
                  Il(r, e);
                } catch (e) {
                  nc(n, n.return, e);
                }
              }
              break;
            case 26:
              gs(e, n), 512 & r && Vl(n, n.return);
              break;
            case 27:
            case 5:
              gs(e, n),
                null === t && 4 & r && $l(n),
                512 & r && Vl(n, n.return);
              break;
            case 12:
            default:
              gs(e, n);
              break;
            case 13:
              gs(e, n), 4 & r && us(e, n);
              break;
            case 22:
              if (!(o = null !== n.memoizedState || Xl)) {
                t = (null !== t && null !== t.memoizedState) || Jl;
                var a = Xl,
                  i = Jl;
                (Xl = o),
                  (Jl = t) && !i
                    ? bs(e, n, !!(8772 & n.subtreeFlags))
                    : gs(e, n),
                  (Xl = a),
                  (Jl = i);
              }
              512 & r &&
                ("manual" === n.memoizedProps.mode
                  ? Vl(n, n.return)
                  : Hl(n, n.return));
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && $e(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        var as = null,
          is = !1;
        function ls(e, t, n) {
          for (n = n.child; null !== n; ) ss(e, t, n), (n = n.sibling);
        }
        function ss(e, t, n) {
          if (ye && "function" == typeof ye.onCommitFiberUnmount)
            try {
              ye.onCommitFiberUnmount(ge, n);
            } catch (e) {}
          switch (n.tag) {
            case 26:
              Jl || Hl(n, t),
                ls(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
              break;
            case 27:
              Jl || Hl(n, t);
              var r = as,
                o = is;
              for (
                as = n.stateNode, ls(e, t, n), t = (n = n.stateNode).attributes;
                t.length;

              )
                n.removeAttributeNode(t[0]);
              $e(n), (as = r), (is = o);
              break;
            case 5:
              Jl || Hl(n, t);
            case 6:
              o = as;
              var a = is;
              if (((as = null), ls(e, t, n), (is = a), null !== (as = o)))
                if (is)
                  try {
                    (e = as),
                      (r = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(r)
                        : e.removeChild(r);
                  } catch (e) {
                    nc(n, t, e);
                  }
                else
                  try {
                    as.removeChild(n.stateNode);
                  } catch (e) {
                    nc(n, t, e);
                  }
              break;
            case 18:
              null !== as &&
                (is
                  ? ((t = as),
                    (n = n.stateNode),
                    8 === t.nodeType
                      ? of(t.parentNode, n)
                      : 1 === t.nodeType && of(t, n),
                    pd(t))
                  : of(as, n.stateNode));
              break;
            case 4:
              (r = as),
                (o = is),
                (as = n.stateNode.containerInfo),
                (is = !0),
                ls(e, t, n),
                (as = r),
                (is = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              Jl || Ul(2, n, t), Jl || Ul(4, n, t), ls(e, t, n);
              break;
            case 1:
              Jl ||
                (Hl(n, t),
                "function" == typeof (r = n.stateNode).componentWillUnmount &&
                  ql(n, t, r)),
                ls(e, t, n);
              break;
            case 21:
              ls(e, t, n);
              break;
            case 22:
              Jl || Hl(n, t),
                (Jl = (r = Jl) || null !== n.memoizedState),
                ls(e, t, n),
                (Jl = r);
              break;
            default:
              ls(e, t, n);
          }
        }
        function us(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              pd(e);
            } catch (e) {
              nc(t, t.return, e);
            }
        }
        function cs(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new es()), t;
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new es()),
                  t
                );
              default:
                throw Error(i(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            var r = lc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
        function fs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r],
                a = e,
                l = t,
                s = l;
              e: for (; null !== s; ) {
                switch (s.tag) {
                  case 27:
                  case 5:
                    (as = s.stateNode), (is = !1);
                    break e;
                  case 3:
                  case 4:
                    (as = s.stateNode.containerInfo), (is = !0);
                    break e;
                }
                s = s.return;
              }
              if (null === as) throw Error(i(160));
              ss(a, l, o),
                (as = null),
                (is = !1),
                null !== (a = o.alternate) && (a.return = null),
                (o.return = null);
            }
          if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ps(t, e), (t = t.sibling);
        }
        var ds = null;
        function ps(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              fs(t, e),
                hs(e),
                4 & r && (Ul(3, e, e.return), Ml(3, e), Ul(5, e, e.return));
              break;
            case 1:
              fs(t, e),
                hs(e),
                512 & r && (Jl || null === n || Hl(n, n.return)),
                64 & r &&
                  Xl &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
              break;
            case 26:
              var o = ds;
              if (
                (fs(t, e),
                hs(e),
                512 & r && (Jl || null === n || Hl(n, n.return)),
                4 & r)
              ) {
                var a = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        (r = e.type),
                          (n = e.memoizedProps),
                          (o = o.ownerDocument || o);
                        t: switch (r) {
                          case "title":
                            (!(a = o.getElementsByTagName("title")[0]) ||
                              a[He] ||
                              a[De] ||
                              "http://www.w3.org/2000/svg" === a.namespaceURI ||
                              a.hasAttribute("itemprop")) &&
                              ((a = o.createElement(r)),
                              o.head.insertBefore(
                                a,
                                o.querySelector("head > title")
                              )),
                              $c(a, r, n),
                              (a[De] = e),
                              Ye(a),
                              (r = a);
                            break e;
                          case "link":
                            var l = Nf("link", "href", o).get(
                              r + (n.href || "")
                            );
                            if (l)
                              for (var s = 0; s < l.length; s++)
                                if (
                                  (a = l[s]).getAttribute("href") ===
                                    (null == n.href ? null : n.href) &&
                                  a.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  a.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  a.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  l.splice(s, 1);
                                  break t;
                                }
                            $c((a = o.createElement(r)), r, n),
                              o.head.appendChild(a);
                            break;
                          case "meta":
                            if (
                              (l = Nf("meta", "content", o).get(
                                r + (n.content || "")
                              ))
                            )
                              for (s = 0; s < l.length; s++)
                                if (
                                  (a = l[s]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  a.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  a.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  a.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  a.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  l.splice(s, 1);
                                  break t;
                                }
                            $c((a = o.createElement(r)), r, n),
                              o.head.appendChild(a);
                            break;
                          default:
                            throw Error(i(468, r));
                        }
                        (a[De] = e), Ye(a), (r = a);
                      }
                      e.stateNode = r;
                    } else Of(o, e.type, e.stateNode);
                  else e.stateNode = Sf(o, r, e.memoizedProps);
                else
                  a !== r
                    ? (null === a
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : a.count--,
                      null === r
                        ? Of(o, e.type, e.stateNode)
                        : Sf(o, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      Wl(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              if (4 & r && null === e.alternate) {
                (o = e.stateNode), (a = e.memoizedProps);
                try {
                  for (var u = o.firstChild; u; ) {
                    var c = u.nextSibling,
                      f = u.nodeName;
                    u[He] ||
                      "HEAD" === f ||
                      "BODY" === f ||
                      "SCRIPT" === f ||
                      "STYLE" === f ||
                      ("LINK" === f && "stylesheet" === u.rel.toLowerCase()) ||
                      o.removeChild(u),
                      (u = c);
                  }
                  for (var d = e.type, p = o.attributes; p.length; )
                    o.removeAttributeNode(p[0]);
                  $c(o, d, a), (o[De] = e), (o[Ie] = a);
                } catch (t) {
                  nc(e, e.return, t);
                }
              }
            case 5:
              if (
                (fs(t, e),
                hs(e),
                512 & r && (Jl || null === n || Hl(n, n.return)),
                32 & e.flags)
              ) {
                o = e.stateNode;
                try {
                  kt(o, "");
                } catch (t) {
                  nc(e, e.return, t);
                }
              }
              4 & r &&
                null != e.stateNode &&
                Wl(e, (o = e.memoizedProps), null !== n ? n.memoizedProps : o),
                1024 & r && (Zl = !0);
              break;
            case 6:
              if ((fs(t, e), hs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                  n.nodeValue = r;
                } catch (t) {
                  nc(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                ((Cf = null),
                (o = ds),
                (ds = df(t.containerInfo)),
                fs(t, e),
                (ds = o),
                hs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  pd(t.containerInfo);
                } catch (t) {
                  nc(e, e.return, t);
                }
              Zl && ((Zl = !1), ms(e));
              break;
            case 4:
              (r = ds),
                (ds = df(e.stateNode.containerInfo)),
                fs(t, e),
                hs(e),
                (ds = r);
              break;
            case 12:
              fs(t, e), hs(e);
              break;
            case 13:
              fs(t, e),
                hs(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !=
                    (null !== n && null !== n.memoizedState) &&
                  (bu = le()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), cs(e, r));
              break;
            case 22:
              if (
                (512 & r && (Jl || null === n || Hl(n, n.return)),
                (u = null !== e.memoizedState),
                (c = null !== n && null !== n.memoizedState),
                (Xl = (f = Xl) || u),
                (Jl = (d = Jl) || c),
                fs(t, e),
                (Jl = d),
                (Xl = f),
                hs(e),
                ((t = e.stateNode)._current = e),
                (t._visibility &= -3),
                (t._visibility |= 2 & t._pendingVisibility),
                8192 & r &&
                  ((t._visibility = u ? -2 & t._visibility : 1 | t._visibility),
                  u && ((t = Xl || Jl), null === n || c || t || ys(e)),
                  null === e.memoizedProps ||
                    "manual" !== e.memoizedProps.mode))
              )
                e: for (n = null, t = e; ; ) {
                  if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
                    if (null === n) {
                      c = n = t;
                      try {
                        if (((o = c.stateNode), u))
                          "function" == typeof (a = o.style).setProperty
                            ? a.setProperty("display", "none", "important")
                            : (a.display = "none");
                        else {
                          l = c.stateNode;
                          var h =
                            null != (s = c.memoizedProps.style) &&
                            s.hasOwnProperty("display")
                              ? s.display
                              : null;
                          l.style.display =
                            null == h || "boolean" == typeof h
                              ? ""
                              : ("" + h).trim();
                        }
                      } catch (e) {
                        nc(c, c.return, e);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                      } catch (e) {
                        nc(c, c.return, e);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    (t.child.return = t), (t = t.child);
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    n === t && (n = null), (t = t.return);
                  }
                  n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling);
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), cs(e, n));
              break;
            case 19:
              fs(t, e),
                hs(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), cs(e, r));
              break;
            case 21:
              break;
            default:
              fs(t, e), hs(e);
          }
        }
        function hs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              if (27 !== e.tag) {
                e: {
                  for (var n = e.return; null !== n; ) {
                    if (Ql(n)) {
                      var r = n;
                      break e;
                    }
                    n = n.return;
                  }
                  throw Error(i(160));
                }
                switch (r.tag) {
                  case 27:
                    var o = r.stateNode;
                    Yl(e, Kl(e), o);
                    break;
                  case 5:
                    var a = r.stateNode;
                    32 & r.flags && (kt(a, ""), (r.flags &= -33)),
                      Yl(e, Kl(e), a);
                    break;
                  case 3:
                  case 4:
                    var l = r.stateNode.containerInfo;
                    Gl(e, Kl(e), l);
                    break;
                  default:
                    throw Error(i(161));
                }
              }
            } catch (t) {
              nc(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ms(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              ms(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling);
            }
        }
        function gs(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              rs(e, t.alternate, t), (t = t.sibling);
        }
        function ys(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ul(4, t, t.return), ys(t);
                break;
              case 1:
                Hl(t, t.return);
                var n = t.stateNode;
                "function" == typeof n.componentWillUnmount &&
                  ql(t, t.return, n),
                  ys(t);
                break;
              case 26:
              case 27:
              case 5:
                Hl(t, t.return), ys(t);
                break;
              case 22:
                Hl(t, t.return), null === t.memoizedState && ys(t);
                break;
              default:
                ys(t);
            }
            e = e.sibling;
          }
        }
        function bs(e, t, n) {
          for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
            var r = t.alternate,
              o = e,
              a = t,
              i = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                bs(o, a, n), Ml(4, a);
                break;
              case 1:
                if (
                  (bs(o, a, n),
                  "function" ==
                    typeof (o = (r = a).stateNode).componentDidMount)
                )
                  try {
                    o.componentDidMount();
                  } catch (e) {
                    nc(r, r.return, e);
                  }
                if (null !== (o = (r = a).updateQueue)) {
                  var l = r.stateNode;
                  try {
                    var s = o.shared.hiddenCallbacks;
                    if (null !== s)
                      for (
                        o.shared.hiddenCallbacks = null, o = 0;
                        o < s.length;
                        o++
                      )
                        Dl(s[o], l);
                  } catch (e) {
                    nc(r, r.return, e);
                  }
                }
                n && 64 & i && Bl(a), Vl(a, a.return);
                break;
              case 26:
              case 27:
              case 5:
                bs(o, a, n), n && null === r && 4 & i && $l(a), Vl(a, a.return);
                break;
              case 12:
              default:
                bs(o, a, n);
                break;
              case 13:
                bs(o, a, n), n && 4 & i && us(o, a);
                break;
              case 22:
                null === a.memoizedState && bs(o, a, n), Vl(a, a.return);
            }
            t = t.sibling;
          }
        }
        function vs(e, t) {
          var n = null;
          null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Bo(n));
        }
        function ws(e, t) {
          (e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && Bo(e));
        }
        function ks(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) Ss(e, t, n, r), (t = t.sibling);
        }
        function Ss(e, t, n, r) {
          var o = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ks(e, t, n, r), 2048 & o && Ml(9, t);
              break;
            case 3:
              ks(e, t, n, r),
                2048 & o &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && Bo(e)));
              break;
            case 12:
              if (2048 & o) {
                ks(e, t, n, r), (e = t.stateNode);
                try {
                  var a = t.memoizedProps,
                    i = a.id,
                    l = a.onPostCommit;
                  "function" == typeof l &&
                    l(
                      i,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0
                    );
                } catch (e) {
                  nc(t, t.return, e);
                }
              } else ks(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              (a = t.stateNode),
                null !== t.memoizedState
                  ? 4 & a._visibility
                    ? ks(e, t, n, r)
                    : Es(e, t)
                  : 4 & a._visibility
                  ? ks(e, t, n, r)
                  : ((a._visibility |= 4),
                    xs(e, t, n, r, !!(10256 & t.subtreeFlags))),
                2048 & o && vs(t.alternate, t);
              break;
            case 24:
              ks(e, t, n, r), 2048 & o && ws(t.alternate, t);
              break;
            default:
              ks(e, t, n, r);
          }
        }
        function xs(e, t, n, r, o) {
          for (o = o && !!(10256 & t.subtreeFlags), t = t.child; null !== t; ) {
            var a = e,
              i = t,
              l = n,
              s = r,
              u = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                xs(a, i, l, s, o), Ml(8, i);
                break;
              case 23:
                break;
              case 22:
                var c = i.stateNode;
                null !== i.memoizedState
                  ? 4 & c._visibility
                    ? xs(a, i, l, s, o)
                    : Es(a, i)
                  : ((c._visibility |= 4), xs(a, i, l, s, o)),
                  o && 2048 & u && vs(i.alternate, i);
                break;
              case 24:
                xs(a, i, l, s, o), o && 2048 & u && ws(i.alternate, i);
                break;
              default:
                xs(a, i, l, s, o);
            }
            t = t.sibling;
          }
        }
        function Es(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                o = r.flags;
              switch (r.tag) {
                case 22:
                  Es(n, r), 2048 & o && vs(r.alternate, r);
                  break;
                case 24:
                  Es(n, r), 2048 & o && ws(r.alternate, r);
                  break;
                default:
                  Es(n, r);
              }
              t = t.sibling;
            }
        }
        var _s = 8192;
        function Cs(e) {
          if (e.subtreeFlags & _s)
            for (e = e.child; null !== e; ) Ns(e), (e = e.sibling);
        }
        function Ns(e) {
          switch (e.tag) {
            case 26:
              Cs(e),
                e.flags & _s &&
                  null !== e.memoizedState &&
                  (function (e, t, n) {
                    if (null === Af) throw Error(i(475));
                    var r = Af;
                    if (
                      !(
                        "stylesheet" !== t.type ||
                        ("string" == typeof n.media &&
                          !1 === matchMedia(n.media).matches) ||
                        4 & t.state.loading
                      )
                    ) {
                      if (null === t.instance) {
                        var o = yf(n.href),
                          a = e.querySelector(bf(o));
                        if (a)
                          return (
                            null !== (e = a._p) &&
                              "object" == typeof e &&
                              "function" == typeof e.then &&
                              (r.count++, (r = Pf.bind(r)), e.then(r, r)),
                            (t.state.loading |= 4),
                            (t.instance = a),
                            void Ye(a)
                          );
                        (a = e.ownerDocument || e),
                          (n = vf(n)),
                          (o = cf.get(o)) && Ef(n, o),
                          Ye((a = a.createElement("link")));
                        var l = a;
                        (l._p = new Promise(function (e, t) {
                          (l.onload = e), (l.onerror = t);
                        })),
                          $c(a, "link", n),
                          (t.instance = a);
                      }
                      null === r.stylesheets && (r.stylesheets = new Map()),
                        r.stylesheets.set(t, e),
                        (e = t.state.preload) &&
                          !(3 & t.state.loading) &&
                          (r.count++,
                          (t = Pf.bind(r)),
                          e.addEventListener("load", t),
                          e.addEventListener("error", t));
                    }
                  })(ds, e.memoizedState, e.memoizedProps);
              break;
            case 5:
            default:
              Cs(e);
              break;
            case 3:
            case 4:
              var t = ds;
              (ds = df(e.stateNode.containerInfo)), Cs(e), (ds = t);
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                  ? ((t = _s), (_s = 16777216), Cs(e), (_s = t))
                  : Cs(e));
          }
        }
        function Os(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              (t = e.sibling), (e.sibling = null), (e = t);
            } while (null !== e);
          }
        }
        function Ts(e) {
          var t = e.deletions;
          if (16 & e.flags) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (ts = r), Ps(r, e);
              }
            Os(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) As(e), (e = e.sibling);
        }
        function As(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Ts(e), 2048 & e.flags && Ul(9, e, e.return);
              break;
            case 3:
            case 12:
            default:
              Ts(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              4 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -5), Ls(e))
                : Ts(e);
          }
        }
        function Ls(e) {
          var t = e.deletions;
          if (16 & e.flags) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (ts = r), Ps(r, e);
              }
            Os(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                Ul(8, t, t.return), Ls(t);
                break;
              case 22:
                4 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -5), Ls(t));
                break;
              default:
                Ls(t);
            }
            e = e.sibling;
          }
        }
        function Ps(e, t) {
          for (; null !== ts; ) {
            var n = ts;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Ul(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Bo(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) (r.return = n), (ts = r);
            else
              e: for (n = e; null !== ts; ) {
                var o = (r = ts).sibling,
                  a = r.return;
                if ((os(r), r === n)) {
                  ts = null;
                  break e;
                }
                if (null !== o) {
                  (o.return = a), (ts = o);
                  break e;
                }
                ts = a;
              }
          }
        }
        function Rs(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function zs(e, t, n, r) {
          return new Rs(e, t, n, r);
        }
        function js(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Fs(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = zs(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 31457280 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Ds(e, t) {
          e.flags &= 31457282;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function Is(e, t, n, r, o, a) {
          var l = 0;
          if (((r = e), "function" == typeof e)) js(e) && (l = 1);
          else if ("string" == typeof e)
            l = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" != typeof t.precedence ||
                    "string" != typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" != typeof t.rel ||
                    "string" != typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" == typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" != typeof t.async &&
                    "symbol" != typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" == typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, K.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
              ? 27
              : 5;
          else
            e: switch (e) {
              case c:
                return Ms(n.children, o, a, t);
              case f:
                (l = 8), (o |= 24);
                break;
              case d:
                return (
                  ((e = zs(12, n, t, 2 | o)).elementType = d), (e.lanes = a), e
                );
              case y:
                return (
                  ((e = zs(13, n, t, o)).elementType = y), (e.lanes = a), e
                );
              case b:
                return (
                  ((e = zs(19, n, t, o)).elementType = b), (e.lanes = a), e
                );
              case k:
                return Us(n, o, a, t);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case p:
                    case m:
                      l = 10;
                      break e;
                    case h:
                      l = 9;
                      break e;
                    case g:
                      l = 11;
                      break e;
                    case v:
                      l = 14;
                      break e;
                    case w:
                      (l = 16), (r = null);
                      break e;
                  }
                (l = 29),
                  (n = Error(i(130, null === e ? "null" : typeof e, ""))),
                  (r = null);
            }
          return (
            ((t = zs(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Ms(e, t, n, r) {
          return ((e = zs(7, e, r, t)).lanes = n), e;
        }
        function Us(e, t, n, r) {
          ((e = zs(22, e, r, t)).elementType = k), (e.lanes = n);
          var o = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function () {
              var e = o._current;
              if (null === e) throw Error(i(456));
              if (!(2 & o._pendingVisibility)) {
                var t = Or(e, 2);
                null !== t && ((o._pendingVisibility |= 2), Lu(t, 0, 2));
              }
            },
            attach: function () {
              var e = o._current;
              if (null === e) throw Error(i(456));
              if (2 & o._pendingVisibility) {
                var t = Or(e, 2);
                null !== t && ((o._pendingVisibility &= -3), Lu(t, 0, 2));
              }
            },
          };
          return (e.stateNode = o), e;
        }
        function Bs(e, t, n) {
          return ((e = zs(6, e, null, t)).lanes = n), e;
        }
        function qs(e, t, n) {
          return (
            ((t = zs(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Vs(e) {
          e.flags |= 4;
        }
        function Hs(e, t) {
          if ("stylesheet" !== t.type || 4 & t.state.loading)
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !Tf(t))) {
            if (
              null !== (t = Oo.current) &&
              ((4194176 & nu) === nu
                ? null !== To
                : ((62914560 & nu) !== nu && !(536870912 & nu)) || t !== To)
            )
              throw ((fo = lo), io);
            e.flags |= 8192;
          }
        }
        function $s(e, t) {
          null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? Te() : 536870912),
              (e.lanes |= t),
              (hu |= t));
        }
        function Ws(e, t) {
          if (!Gr)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qs(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 31457280 & o.subtreeFlags),
                (r |= 31457280 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ks(e, t, n) {
          var r = t.pendingProps;
          switch ((Wr(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return Qs(t), null;
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                bl(Mo),
                Z(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (no(t)
                    ? Vs(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== Yr && (Ru(Yr), (Yr = null)))),
                Qs(t),
                null
              );
            case 26:
              return (
                (n = t.memoizedState),
                null === e
                  ? (Vs(t),
                    null !== n
                      ? (Qs(t), Hs(t, n))
                      : (Qs(t), (t.flags &= -16777217)))
                  : n
                  ? n !== e.memoizedState
                    ? (Vs(t), Qs(t), Hs(t, n))
                    : (Qs(t), (t.flags &= -16777217))
                  : (e.memoizedProps !== r && Vs(t),
                    Qs(t),
                    (t.flags &= -16777217)),
                null
              );
            case 27:
              te(t), (n = Y.current);
              var o = t.type;
              if (null !== e && null != t.stateNode)
                e.memoizedProps !== r && Vs(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Qs(t), null;
                }
                (e = K.current),
                  no(t) ? eo(t) : ((e = uf(o, r, n)), (t.stateNode = e), Vs(t));
              }
              return Qs(t), null;
            case 5:
              if ((te(t), (n = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && Vs(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Qs(t), null;
                }
                if (((e = K.current), no(t))) eo(t);
                else {
                  switch (((o = Kc(Y.current)), e)) {
                    case 1:
                      e = o.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case 2:
                      e = o.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        n
                      );
                      break;
                    default:
                      switch (n) {
                        case "svg":
                          e = o.createElementNS(
                            "http://www.w3.org/2000/svg",
                            n
                          );
                          break;
                        case "math":
                          e = o.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            n
                          );
                          break;
                        case "script":
                          ((e = o.createElement("div")).innerHTML =
                            "<script></script>"),
                            (e = e.removeChild(e.firstChild));
                          break;
                        case "select":
                          (e =
                            "string" == typeof r.is
                              ? o.createElement("select", { is: r.is })
                              : o.createElement("select")),
                            r.multiple
                              ? (e.multiple = !0)
                              : r.size && (e.size = r.size);
                          break;
                        default:
                          e =
                            "string" == typeof r.is
                              ? o.createElement(n, { is: r.is })
                              : o.createElement(n);
                      }
                  }
                  (e[De] = t), (e[Ie] = r);
                  e: for (o = t.child; null !== o; ) {
                    if (5 === o.tag || 6 === o.tag) e.appendChild(o.stateNode);
                    else if (4 !== o.tag && 27 !== o.tag && null !== o.child) {
                      (o.child.return = o), (o = o.child);
                      continue;
                    }
                    if (o === t) break e;
                    for (; null === o.sibling; ) {
                      if (null === o.return || o.return === t) break e;
                      o = o.return;
                    }
                    (o.sibling.return = o.return), (o = o.sibling);
                  }
                  t.stateNode = e;
                  e: switch (($c(e, n, r), n)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      e = !!r.autoFocus;
                      break e;
                    case "img":
                      e = !0;
                      break e;
                    default:
                      e = !1;
                  }
                  e && Vs(t);
                }
              }
              return Qs(t), (t.flags &= -16777217), null;
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && Vs(t);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((e = Y.current), no(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (o = Qr))
                  )
                    switch (o.tag) {
                      case 27:
                      case 5:
                        r = o.memoizedProps;
                    }
                  (e[De] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      Bc(e.nodeValue, n)
                    )) || Zr(t);
                } else
                  ((e = Kc(e).createTextNode(r))[De] = t), (t.stateNode = e);
              }
              return Qs(t), null;
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((o = no(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[De] = t;
                  } else
                    ro(),
                      !(128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qs(t), (o = !1);
                } else null !== Yr && (Ru(Yr), (Yr = null)), (o = !0);
                if (!o) return 256 & t.flags ? (Ro(t), t) : (Ro(t), null);
              }
              if ((Ro(t), 128 & t.flags)) return (t.lanes = n), t;
              if (
                ((n = null !== r),
                (e = null !== e && null !== e.memoizedState),
                n)
              ) {
                (o = null),
                  null !== (r = t.child).alternate &&
                    null !== r.alternate.memoizedState &&
                    null !== r.alternate.memoizedState.cachePool &&
                    (o = r.alternate.memoizedState.cachePool.pool);
                var a = null;
                null !== r.memoizedState &&
                  null !== r.memoizedState.cachePool &&
                  (a = r.memoizedState.cachePool.pool),
                  a !== o && (r.flags |= 2048);
              }
              return (
                n !== e && n && (t.child.flags |= 8192),
                $s(t, t.updateQueue),
                Qs(t),
                null
              );
            case 4:
              return (
                Z(), null === e && Lc(t.stateNode.containerInfo), Qs(t), null
              );
            case 10:
              return bl(t.type), Qs(t), null;
            case 19:
              if ((W(zo), null === (o = t.memoizedState))) return Qs(t), null;
              if (((r = !!(128 & t.flags)), null === (a = o.rendering)))
                if (r) Ws(o, !1);
                else {
                  if (0 !== uu || (null !== e && 128 & e.flags))
                    for (e = t.child; null !== e; ) {
                      if (null !== (a = jo(e))) {
                        for (
                          t.flags |= 128,
                            Ws(o, !1),
                            e = a.updateQueue,
                            t.updateQueue = e,
                            $s(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          Ds(n, e), (n = n.sibling);
                        return Q(zo, (1 & zo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    le() > vu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ws(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = jo(a))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      $s(t, e),
                      Ws(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !a.alternate &&
                        !Gr)
                    )
                      return Qs(t), null;
                  } else
                    2 * le() - o.renderingStartTime > vu &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ws(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((a.sibling = t.child), (t.child = a))
                  : (null !== (e = o.last) ? (e.sibling = a) : (t.child = a),
                    (o.last = a));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = le()),
                  (t.sibling = null),
                  (e = zo.current),
                  Q(zo, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (Qs(t), null);
            case 22:
            case 23:
              return (
                Ro(t),
                No(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? !!(536870912 & n) &&
                    !(128 & t.flags) &&
                    (Qs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qs(t),
                null !== (n = t.updateQueue) && $s(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && W(Ko),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                bl(Mo),
                Qs(t),
                null
              );
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Gs(e, t) {
          switch ((Wr(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                bl(Mo),
                Z(),
                65536 & (e = t.flags) && !(128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return te(t), null;
            case 13:
              if (
                (Ro(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                ro();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return W(zo), null;
            case 4:
              return Z(), null;
            case 10:
              return bl(t.type), null;
            case 22:
            case 23:
              return (
                Ro(t),
                No(),
                null !== e && W(Ko),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return bl(Mo), null;
            default:
              return null;
          }
        }
        function Ys(e, t) {
          switch ((Wr(t), t.tag)) {
            case 3:
              bl(Mo), Z();
              break;
            case 26:
            case 27:
            case 5:
              te(t);
              break;
            case 4:
              Z();
              break;
            case 13:
              Ro(t);
              break;
            case 19:
              W(zo);
              break;
            case 10:
              bl(t.type);
              break;
            case 22:
            case 23:
              Ro(t), No(), null !== e && W(Ko);
              break;
            case 24:
              bl(Mo);
          }
        }
        var Xs = {
            getCacheForType: function (e) {
              var t = El(Mo),
                n = t.data.get(e);
              return void 0 === n && ((n = e()), t.data.set(e, n)), n;
            },
          },
          Js = "function" == typeof WeakMap ? WeakMap : Map,
          Zs = 0,
          eu = null,
          tu = null,
          nu = 0,
          ru = 0,
          ou = null,
          au = !1,
          iu = !1,
          lu = !1,
          su = 0,
          uu = 0,
          cu = 0,
          fu = 0,
          du = 0,
          pu = 0,
          hu = 0,
          mu = null,
          gu = null,
          yu = !1,
          bu = 0,
          vu = 1 / 0,
          wu = null,
          ku = null,
          Su = !1,
          xu = null,
          Eu = 0,
          _u = 0,
          Cu = null,
          Nu = 0,
          Ou = null;
        function Tu() {
          return 2 & Zs && 0 !== nu
            ? nu & -nu
            : null !== T.T
            ? 0 !== Ho
              ? Ho
              : wc()
            : je();
        }
        function Au() {
          0 === pu && (pu = 536870912 & nu && !Gr ? 536870912 : Oe());
          var e = Oo.current;
          return null !== e && (e.flags |= 32), pu;
        }
        function Lu(e, t, n) {
          ((e === eu && 2 === ru) || null !== e.cancelPendingCommit) &&
            (Mu(e, 0), Fu(e, nu, pu, !1)),
            Le(e, n),
            (2 & Zs && e === eu) ||
              (e === eu &&
                (!(2 & Zs) && (fu |= n), 4 === uu && Fu(e, nu, pu, !1)),
              hc(e));
        }
        function Pu(e, t, n) {
          if (6 & Zs) throw Error(i(327));
          for (
            var r = (!n && !(60 & t) && !(t & e.expiredLanes)) || Ce(e, t),
              o = r
                ? (function (e, t) {
                    var n = Zs;
                    Zs |= 2;
                    var r = Bu(),
                      o = qu();
                    eu !== e || nu !== t
                      ? ((wu = null), (vu = le() + 500), Mu(e, t))
                      : (iu = Ce(e, t));
                    e: for (;;)
                      try {
                        if (0 !== ru && null !== tu) {
                          t = tu;
                          var a = ou;
                          t: switch (ru) {
                            case 1:
                              (ru = 0), (ou = null), Gu(e, t, a, 1);
                              break;
                            case 2:
                              if (so(a)) {
                                (ru = 0), (ou = null), Ku(t);
                                break;
                              }
                              (t = function () {
                                2 === ru && eu === e && (ru = 7), hc(e);
                              }),
                                a.then(t, t);
                              break e;
                            case 3:
                              ru = 7;
                              break e;
                            case 4:
                              ru = 5;
                              break e;
                            case 7:
                              so(a)
                                ? ((ru = 0), (ou = null), Ku(t))
                                : ((ru = 0), (ou = null), Gu(e, t, a, 7));
                              break;
                            case 5:
                              var l = null;
                              switch (tu.tag) {
                                case 26:
                                  l = tu.memoizedState;
                                case 5:
                                case 27:
                                  var s = tu;
                                  if (!l || Tf(l)) {
                                    (ru = 0), (ou = null);
                                    var u = s.sibling;
                                    if (null !== u) tu = u;
                                    else {
                                      var c = s.return;
                                      null !== c
                                        ? ((tu = c), Yu(c))
                                        : (tu = null);
                                    }
                                    break t;
                                  }
                              }
                              (ru = 0), (ou = null), Gu(e, t, a, 5);
                              break;
                            case 6:
                              (ru = 0), (ou = null), Gu(e, t, a, 6);
                              break;
                            case 8:
                              Iu(), (uu = 6);
                              break e;
                            default:
                              throw Error(i(462));
                          }
                        }
                        Wu();
                        break;
                      } catch (t) {
                        Uu(e, t);
                      }
                    return (
                      (gl = ml = null),
                      (T.H = r),
                      (T.A = o),
                      (Zs = n),
                      null !== tu ? 0 : ((eu = null), (nu = 0), _r(), uu)
                    );
                  })(e, t)
                : Hu(e, t, !0),
              a = r;
            ;

          ) {
            if (0 === o) {
              iu && !r && Fu(e, t, 0, !1);
              break;
            }
            if (6 === o) Fu(e, t, 0, !au);
            else {
              if (((n = e.current.alternate), a && !ju(n))) {
                (o = Hu(e, t, !1)), (a = !1);
                continue;
              }
              if (2 === o) {
                if (((a = t), e.errorRecoveryDisabledLanes & a)) var l = 0;
                else
                  l =
                    0 != (l = -536870913 & e.pendingLanes)
                      ? l
                      : 536870912 & l
                      ? 536870912
                      : 0;
                if (0 !== l) {
                  t = l;
                  e: {
                    var s = e;
                    o = mu;
                    var u = s.current.memoizedState.isDehydrated;
                    if (
                      (u && (Mu(s, l).flags |= 256), 2 !== (l = Hu(s, l, !1)))
                    ) {
                      if (lu && !u) {
                        (s.errorRecoveryDisabledLanes |= a), (fu |= a), (o = 4);
                        break e;
                      }
                      (a = gu), (gu = o), null !== a && Ru(a);
                    }
                    o = l;
                  }
                  if (((a = !1), 2 !== o)) continue;
                }
              }
              if (1 === o) {
                Mu(e, 0), Fu(e, t, 0, !0);
                break;
              }
              e: {
                switch (((r = e), o)) {
                  case 0:
                  case 1:
                    throw Error(i(345));
                  case 4:
                    if ((4194176 & t) === t) {
                      Fu(r, t, pu, !au);
                      break e;
                    }
                    break;
                  case 2:
                    gu = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(i(329));
                }
                if (
                  ((r.finishedWork = n),
                  (r.finishedLanes = t),
                  (62914560 & t) === t && 10 < (a = bu + 300 - le()))
                ) {
                  if ((Fu(r, t, pu, !au), 0 !== _e(r, 0))) break e;
                  r.timeoutHandle = Zc(
                    zu.bind(
                      null,
                      r,
                      n,
                      gu,
                      wu,
                      yu,
                      t,
                      pu,
                      fu,
                      hu,
                      au,
                      2,
                      -0,
                      0
                    ),
                    a
                  );
                } else zu(r, n, gu, wu, yu, t, pu, fu, hu, au, 0, -0, 0);
              }
            }
            break;
          }
          hc(e);
        }
        function Ru(e) {
          null === gu ? (gu = e) : gu.push.apply(gu, e);
        }
        function zu(e, t, n, r, o, a, l, s, u, c, f, d, p) {
          var h = t.subtreeFlags;
          if (
            (8192 & h || !(16785408 & ~h)) &&
            ((Af = { stylesheets: null, count: 0, unsuspend: Lf }),
            Ns(t),
            null !==
              (t = (function () {
                if (null === Af) throw Error(i(475));
                var e = Af;
                return (
                  e.stylesheets && 0 === e.count && zf(e, e.stylesheets),
                  0 < e.count
                    ? function (t) {
                        var n = setTimeout(function () {
                          if (
                            (e.stylesheets && zf(e, e.stylesheets), e.unsuspend)
                          ) {
                            var t = e.unsuspend;
                            (e.unsuspend = null), t();
                          }
                        }, 6e4);
                        return (
                          (e.unsuspend = t),
                          function () {
                            (e.unsuspend = null), clearTimeout(n);
                          }
                        );
                      }
                    : null
                );
              })()))
          )
            return (
              (e.cancelPendingCommit = t(
                Ju.bind(null, e, n, r, o, l, s, u, 1, d, p)
              )),
              void Fu(e, a, l, !c)
            );
          Ju(e, n, r, o, l, s, u);
        }
        function ju(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var o = n[r],
                  a = o.getSnapshot;
                o = o.value;
                try {
                  if (!Qn(a(), o)) return !1;
                } catch (e) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              (n.return = t), (t = n);
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return !0;
        }
        function Fu(e, t, n, r) {
          (t &= ~du),
            (t &= ~fu),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes);
          for (var o = t; 0 < o; ) {
            var a = 31 - ve(o),
              i = 1 << a;
            (r[a] = -1), (o &= ~i);
          }
          0 !== n && Pe(e, n, t);
        }
        function Du() {
          return !!(6 & Zs) || (mc(0, !1), !1);
        }
        function Iu() {
          if (null !== tu) {
            if (0 === ru) var e = tu.return;
            else
              (gl = ml = null), ya((e = tu)), (ho = null), (mo = 0), (e = tu);
            for (; null !== e; ) Ys(e.alternate, e), (e = e.return);
            tu = null;
          }
        }
        function Mu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          -1 !== n && ((e.timeoutHandle = -1), ef(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            Iu(),
            (eu = e),
            (tu = n = Fs(e.current, null)),
            (nu = t),
            (ru = 0),
            (ou = null),
            (au = !1),
            (iu = Ce(e, t)),
            (lu = !1),
            (hu = pu = du = fu = cu = uu = 0),
            (gu = mu = null),
            (yu = !1),
            8 & t && (t |= 32 & t);
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var o = 31 - ve(r),
                a = 1 << o;
              (t |= e[o]), (r &= ~a);
            }
          return (su = t), _r(), n;
        }
        function Uu(e, t) {
          (Zo = null),
            (T.H = Ei),
            t === ao
              ? ((t = po()), (ru = 3))
              : t === io
              ? ((t = po()), (ru = 4))
              : (ru =
                  t === qi
                    ? 8
                    : null !== t &&
                      "object" == typeof t &&
                      "function" == typeof t.then
                    ? 6
                    : 1),
            (ou = t),
            null === tu && ((uu = 1), Di(e, Rr(t, e.current)));
        }
        function Bu() {
          var e = T.H;
          return (T.H = Ei), null === e ? Ei : e;
        }
        function qu() {
          var e = T.A;
          return (T.A = Xs), e;
        }
        function Vu() {
          (uu = 4),
            au || ((4194176 & nu) !== nu && null !== Oo.current) || (iu = !0),
            (!(134217727 & cu) && !(134217727 & fu)) ||
              null === eu ||
              Fu(eu, nu, pu, !1);
        }
        function Hu(e, t, n) {
          var r = Zs;
          Zs |= 2;
          var o = Bu(),
            a = qu();
          (eu === e && nu === t) || ((wu = null), Mu(e, t)), (t = !1);
          var i = uu;
          e: for (;;)
            try {
              if (0 !== ru && null !== tu) {
                var l = tu,
                  s = ou;
                switch (ru) {
                  case 8:
                    Iu(), (i = 6);
                    break e;
                  case 3:
                  case 2:
                  case 6:
                    null === Oo.current && (t = !0);
                    var u = ru;
                    if (((ru = 0), (ou = null), Gu(e, l, s, u), n && iu)) {
                      i = 0;
                      break e;
                    }
                    break;
                  default:
                    (u = ru), (ru = 0), (ou = null), Gu(e, l, s, u);
                }
              }
              $u(), (i = uu);
              break;
            } catch (t) {
              Uu(e, t);
            }
          return (
            t && e.shellSuspendCounter++,
            (gl = ml = null),
            (Zs = r),
            (T.H = o),
            (T.A = a),
            null === tu && ((eu = null), (nu = 0), _r()),
            i
          );
        }
        function $u() {
          for (; null !== tu; ) Qu(tu);
        }
        function Wu() {
          for (; null !== tu && !ae(); ) Qu(tu);
        }
        function Qu(e) {
          var t = pl(e.alternate, e, su);
          (e.memoizedProps = e.pendingProps), null === t ? Yu(e) : (tu = t);
        }
        function Ku(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Ji(n, t, t.pendingProps, t.type, void 0, nu);
              break;
            case 11:
              t = Ji(n, t, t.pendingProps, t.type.render, t.ref, nu);
              break;
            case 5:
              ya(t);
            default:
              Ys(n, t), (t = pl(n, (t = tu = Ds(t, su)), su));
          }
          (e.memoizedProps = e.pendingProps), null === t ? Yu(e) : (tu = t);
        }
        function Gu(e, t, n, r) {
          (gl = ml = null), ya(t), (ho = null), (mo = 0);
          var o = t.return;
          try {
            if (
              (function (e, t, n, r, o) {
                if (
                  ((n.flags |= 32768),
                  null !== r &&
                    "object" == typeof r &&
                    "function" == typeof r.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && kl(t, n, o, !0),
                    null !== (n = Oo.current))
                  ) {
                    switch (n.tag) {
                      case 13:
                        return (
                          null === To
                            ? Vu()
                            : null === n.alternate && 0 === uu && (uu = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = o),
                          r === lo
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              rc(e, r, o)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === lo
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                ? (t.retryQueue = new Set([r]))
                                : n.add(r),
                              rc(e, r, o)),
                          !1
                        );
                    }
                    throw Error(i(435, n.tag));
                  }
                  return rc(e, r, o), Vu(), !1;
                }
                if (Gr)
                  return (
                    null !== (t = Oo.current)
                      ? (!(65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = o),
                        r !== Jr &&
                          oo(Rr((e = Error(i(422), { cause: r })), n)))
                      : (r !== Jr &&
                          oo(Rr((t = Error(i(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (o &= -o),
                        (e.lanes |= o),
                        (r = Rr(r, n)),
                        Rl(e, (o = Mi(e.stateNode, r, o))),
                        4 !== uu && (uu = 2)),
                    !1
                  );
                var a = Error(i(520), { cause: r });
                if (
                  ((a = Rr(a, n)),
                  null === mu ? (mu = [a]) : mu.push(a),
                  4 !== uu && (uu = 2),
                  null === t)
                )
                  return !0;
                (r = Rr(r, n)), (n = t);
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = o & -o),
                        (n.lanes |= e),
                        Rl(n, (e = Mi(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (a = n.stateNode),
                        !(
                          128 & n.flags ||
                          ("function" != typeof t.getDerivedStateFromError &&
                            (null === a ||
                              "function" != typeof a.componentDidCatch ||
                              (null !== ku && ku.has(a))))
                        ))
                      )
                        return (
                          (n.flags |= 65536),
                          (o &= -o),
                          (n.lanes |= o),
                          Bi((o = Ui(o)), e, n, r),
                          Rl(n, o),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, o, t, n, nu)
            )
              return (uu = 1), Di(e, Rr(n, e.current)), void (tu = null);
          } catch (t) {
            if (null !== o) throw ((tu = o), t);
            return (uu = 1), Di(e, Rr(n, e.current)), void (tu = null);
          }
          32768 & t.flags
            ? (Gr || 1 === r
                ? (e = !0)
                : iu || 536870912 & nu
                ? (e = !1)
                : ((au = e = !0),
                  (2 === r || 3 === r || 6 === r) &&
                    null !== (r = Oo.current) &&
                    13 === r.tag &&
                    (r.flags |= 16384)),
              Xu(t, e))
            : Yu(t);
        }
        function Yu(e) {
          var t = e;
          do {
            if (32768 & t.flags) return void Xu(t, au);
            e = t.return;
            var n = Ks(t.alternate, t, su);
            if (null !== n) return void (tu = n);
            if (null !== (t = t.sibling)) return void (tu = t);
            tu = t = e;
          } while (null !== t);
          0 === uu && (uu = 5);
        }
        function Xu(e, t) {
          do {
            var n = Gs(e.alternate, e);
            if (null !== n) return (n.flags &= 32767), void (tu = n);
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (tu = e);
            tu = e = n;
          } while (null !== e);
          (uu = 6), (tu = null);
        }
        function Ju(e, t, n, r, o, a, l, s, u, c) {
          var f = T.T,
            d = B.p;
          try {
            (B.p = 2),
              (T.T = null),
              (function (e, t, n, r, o, a, l, s) {
                do {
                  ec();
                } while (null !== xu);
                if (6 & Zs) throw Error(i(327));
                var u = e.finishedWork;
                if (((r = e.finishedLanes), null === u)) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  u === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null),
                  (e.callbackPriority = 0),
                  (e.cancelPendingCommit = null);
                var c = u.lanes | u.childLanes;
                if (
                  ((function (e, t, n, r, o, a) {
                    var i = e.pendingLanes;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.warmLanes = 0),
                      (e.expiredLanes &= n),
                      (e.entangledLanes &= n),
                      (e.errorRecoveryDisabledLanes &= n),
                      (e.shellSuspendCounter = 0);
                    var l = e.entanglements,
                      s = e.expirationTimes,
                      u = e.hiddenUpdates;
                    for (n = i & ~n; 0 < n; ) {
                      var c = 31 - ve(n),
                        f = 1 << c;
                      (l[c] = 0), (s[c] = -1);
                      var d = u[c];
                      if (null !== d)
                        for (u[c] = null, c = 0; c < d.length; c++) {
                          var p = d[c];
                          null !== p && (p.lane &= -536870913);
                        }
                      n &= ~f;
                    }
                    0 !== r && Pe(e, r, 0),
                      0 !== a &&
                        0 === o &&
                        0 !== e.tag &&
                        (e.suspendedLanes |= a & ~(i & ~t));
                  })(e, r, (c |= Er), a, l, s),
                  e === eu && ((tu = eu = null), (nu = 0)),
                  (!(10256 & u.subtreeFlags) && !(10256 & u.flags)) ||
                    Su ||
                    ((Su = !0),
                    (_u = c),
                    (Cu = n),
                    re(fe, function () {
                      return ec(), null;
                    })),
                  (n = !!(15990 & u.flags)),
                  15990 & u.subtreeFlags || n
                    ? ((n = T.T),
                      (T.T = null),
                      (a = B.p),
                      (B.p = 2),
                      (l = Zs),
                      (Zs |= 4),
                      (function (e, t) {
                        if (
                          ((e = e.containerInfo), (Wc = qf), Zn((e = Jn(e))))
                        ) {
                          if ("selectionStart" in e)
                            var n = {
                              start: e.selectionStart,
                              end: e.selectionEnd,
                            };
                          else
                            e: {
                              var r =
                                (n =
                                  ((n = e.ownerDocument) && n.defaultView) ||
                                  window).getSelection && n.getSelection();
                              if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var o = r.anchorOffset,
                                  a = r.focusNode;
                                r = r.focusOffset;
                                try {
                                  n.nodeType, a.nodeType;
                                } catch (e) {
                                  n = null;
                                  break e;
                                }
                                var l = 0,
                                  s = -1,
                                  u = -1,
                                  c = 0,
                                  f = 0,
                                  d = e,
                                  p = null;
                                t: for (;;) {
                                  for (
                                    var h;
                                    d !== n ||
                                      (0 !== o && 3 !== d.nodeType) ||
                                      (s = l + o),
                                      d !== a ||
                                        (0 !== r && 3 !== d.nodeType) ||
                                        (u = l + r),
                                      3 === d.nodeType &&
                                        (l += d.nodeValue.length),
                                      null !== (h = d.firstChild);

                                  )
                                    (p = d), (d = h);
                                  for (;;) {
                                    if (d === e) break t;
                                    if (
                                      (p === n && ++c === o && (s = l),
                                      p === a && ++f === r && (u = l),
                                      null !== (h = d.nextSibling))
                                    )
                                      break;
                                    p = (d = p).parentNode;
                                  }
                                  d = h;
                                }
                                n =
                                  -1 === s || -1 === u
                                    ? null
                                    : { start: s, end: u };
                              } else n = null;
                            }
                          n = n || { start: 0, end: 0 };
                        } else n = null;
                        for (
                          Qc = { focusedElem: e, selectionRange: n },
                            qf = !1,
                            ts = t;
                          null !== ts;

                        )
                          if (
                            ((e = (t = ts).child),
                            1028 & t.subtreeFlags && null !== e)
                          )
                            (e.return = t), (ts = e);
                          else
                            for (; null !== ts; ) {
                              switch (
                                ((a = (t = ts).alternate), (e = t.flags), t.tag)
                              ) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 26:
                                case 27:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (1024 & e && null !== a) {
                                    (e = void 0),
                                      (n = t),
                                      (o = a.memoizedProps),
                                      (a = a.memoizedState),
                                      (r = n.stateNode);
                                    try {
                                      var m = Pi(
                                        n.type,
                                        o,
                                        (n.elementType, n.type)
                                      );
                                      (e = r.getSnapshotBeforeUpdate(m, a)),
                                        (r.__reactInternalSnapshotBeforeUpdate =
                                          e);
                                    } catch (e) {
                                      nc(n, n.return, e);
                                    }
                                  }
                                  break;
                                case 3:
                                  if (1024 & e)
                                    if (
                                      9 ===
                                      (n = (e = t.stateNode.containerInfo)
                                        .nodeType)
                                    )
                                      af(e);
                                    else if (1 === n)
                                      switch (e.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                          af(e);
                                          break;
                                        default:
                                          e.textContent = "";
                                      }
                                  break;
                                default:
                                  if (1024 & e) throw Error(i(163));
                              }
                              if (null !== (e = t.sibling)) {
                                (e.return = t.return), (ts = e);
                                break;
                              }
                              ts = t.return;
                            }
                        (m = ns), (ns = !1);
                      })(e, u),
                      ps(u, e),
                      er(Qc, e.containerInfo),
                      (qf = !!Wc),
                      (Qc = Wc = null),
                      (e.current = u),
                      rs(e, u.alternate, u),
                      ie(),
                      (Zs = l),
                      (B.p = a),
                      (T.T = n))
                    : (e.current = u),
                  Su ? ((Su = !1), (xu = e), (Eu = r)) : Zu(e, c),
                  0 === (c = e.pendingLanes) && (ku = null),
                  (function (e) {
                    if (ye && "function" == typeof ye.onCommitFiberRoot)
                      try {
                        ye.onCommitFiberRoot(
                          ge,
                          e,
                          void 0,
                          !(128 & ~e.current.flags)
                        );
                      } catch (e) {}
                  })(u.stateNode),
                  hc(e),
                  null !== t)
                )
                  for (o = e.onRecoverableError, u = 0; u < t.length; u++)
                    o((c = t[u]).value, { componentStack: c.stack });
                !!(3 & Eu) && ec(),
                  (c = e.pendingLanes),
                  4194218 & r && 42 & c
                    ? e === Ou
                      ? Nu++
                      : ((Nu = 0), (Ou = e))
                    : (Nu = 0),
                  mc(0, !1);
              })(e, t, n, r, d, o, a, l);
          } finally {
            (T.T = f), (B.p = d);
          }
        }
        function Zu(e, t) {
          0 == (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Bo(t));
        }
        function ec() {
          if (null !== xu) {
            var e = xu,
              t = _u;
            _u = 0;
            var n = ze(Eu),
              r = T.T,
              o = B.p;
            try {
              if (((B.p = 32 > n ? 32 : n), (T.T = null), null === xu))
                var a = !1;
              else {
                (n = Cu), (Cu = null);
                var l = xu,
                  s = Eu;
                if (((xu = null), (Eu = 0), 6 & Zs)) throw Error(i(331));
                var u = Zs;
                if (
                  ((Zs |= 4),
                  As(l.current),
                  Ss(l, l.current, s, n),
                  (Zs = u),
                  mc(0, !1),
                  ye && "function" == typeof ye.onPostCommitFiberRoot)
                )
                  try {
                    ye.onPostCommitFiberRoot(ge, l);
                  } catch (e) {}
                a = !0;
              }
              return a;
            } finally {
              (B.p = o), (T.T = r), Zu(e, t);
            }
          }
          return !1;
        }
        function tc(e, t, n) {
          (t = Rr(n, t)),
            null !== (e = Ll(e, (t = Mi(e.stateNode, t, 2)), 2)) &&
              (Le(e, 2), hc(e));
        }
        function nc(e, t, n) {
          if (3 === e.tag) tc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                tc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === ku || !ku.has(r)))
                ) {
                  (e = Rr(n, e)),
                    null !== (r = Ll(t, (n = Ui(2)), 2)) &&
                      (Bi(n, r, t, e), Le(r, 2), hc(r));
                  break;
                }
              }
              t = t.return;
            }
        }
        function rc(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new Js();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) ||
            ((lu = !0), o.add(n), (e = oc.bind(null, e, t, n)), t.then(e, e));
        }
        function oc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            eu === e &&
              (nu & n) === n &&
              (4 === uu ||
              (3 === uu && (62914560 & nu) === nu && 300 > le() - bu)
                ? !(2 & Zs) && Mu(e, 0)
                : (du |= n),
              hu === nu && (hu = 0)),
            hc(e);
        }
        function ac(e, t) {
          0 === t && (t = Te()), null !== (e = Or(e, t)) && (Le(e, t), hc(e));
        }
        function ic(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), ac(e, n);
        }
        function lc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), ac(e, n);
        }
        var sc = null,
          uc = null,
          cc = !1,
          fc = !1,
          dc = !1,
          pc = 0;
        function hc(e) {
          var t;
          e !== uc &&
            null === e.next &&
            (null === uc ? (sc = uc = e) : (uc = uc.next = e)),
            (fc = !0),
            cc ||
              ((cc = !0),
              (t = gc),
              nf(function () {
                6 & Zs ? re(ue, t) : t();
              }));
        }
        function mc(e, t) {
          if (!dc && fc) {
            dc = !0;
            do {
              for (var n = !1, r = sc; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var o = r.pendingLanes;
                    if (0 === o) var a = 0;
                    else {
                      var i = r.suspendedLanes,
                        l = r.pingedLanes;
                      (a = (1 << (31 - ve(42 | e) + 1)) - 1),
                        (a =
                          201326677 & (a &= o & ~(i & ~l))
                            ? (201326677 & a) | 1
                            : a
                            ? 2 | a
                            : 0);
                    }
                    0 !== a && ((n = !0), vc(r, a));
                  } else
                    (a = nu),
                      !(3 & (a = _e(r, r === eu ? a : 0))) ||
                        Ce(r, a) ||
                        ((n = !0), vc(r, a));
                r = r.next;
              }
            } while (n);
            dc = !1;
          }
        }
        function gc() {
          fc = cc = !1;
          var e,
            t = 0;
          0 !== pc &&
            (((e = window.event) && "popstate" === e.type
              ? e !== Jc && ((Jc = e), !0)
              : ((Jc = null), !1)) && (t = pc),
            (pc = 0));
          for (var n = le(), r = null, o = sc; null !== o; ) {
            var a = o.next,
              i = yc(o, n);
            0 === i
              ? ((o.next = null),
                null === r ? (sc = a) : (r.next = a),
                null === a && (uc = r))
              : ((r = o), (0 !== t || 3 & i) && (fc = !0)),
              (o = a);
          }
          mc(t, !1);
        }
        function yc(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              o = e.expirationTimes,
              a = -62914561 & e.pendingLanes;
            0 < a;

          ) {
            var i = 31 - ve(a),
              l = 1 << i,
              s = o[i];
            -1 === s
              ? (l & n && !(l & r)) || (o[i] = Ne(l, t))
              : s <= t && (e.expiredLanes |= l),
              (a &= ~l);
          }
          if (
            ((n = nu),
            (n = _e(e, e === (t = eu) ? n : 0)),
            (r = e.callbackNode),
            0 === n || (e === t && 2 === ru) || null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && oe(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (!(3 & n) || Ce(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && oe(r), ze(n))) {
              case 2:
              case 8:
                n = ce;
                break;
              case 32:
              default:
                n = fe;
                break;
              case 268435456:
                n = pe;
            }
            return (
              (r = bc.bind(null, e)),
              (n = re(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && oe(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function bc(e, t) {
          var n = e.callbackNode;
          if (ec() && e.callbackNode !== n) return null;
          var r = nu;
          return 0 === (r = _e(e, e === eu ? r : 0))
            ? null
            : (Pu(e, r, t),
              yc(e, le()),
              null != e.callbackNode && e.callbackNode === n
                ? bc.bind(null, e)
                : null);
        }
        function vc(e, t) {
          if (ec()) return null;
          Pu(e, t, !0);
        }
        function wc() {
          return 0 === pc && (pc = Oe()), pc;
        }
        function kc(e) {
          return null == e || "symbol" == typeof e || "boolean" == typeof e
            ? null
            : "function" == typeof e
            ? e
            : Ot("" + e);
        }
        function Sc(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var xc = 0; xc < wr.length; xc++) {
          var Ec = wr[xc];
          kr(Ec.toLowerCase(), "on" + (Ec[0].toUpperCase() + Ec.slice(1)));
        }
        kr(dr, "onAnimationEnd"),
          kr(pr, "onAnimationIteration"),
          kr(hr, "onAnimationStart"),
          kr("dblclick", "onDoubleClick"),
          kr("focusin", "onFocus"),
          kr("focusout", "onBlur"),
          kr(mr, "onTransitionRun"),
          kr(gr, "onTransitionStart"),
          kr(yr, "onTransitionCancel"),
          kr(br, "onTransitionEnd"),
          et("onMouseEnter", ["mouseout", "mouseover"]),
          et("onMouseLeave", ["mouseout", "mouseover"]),
          et("onPointerEnter", ["pointerout", "pointerover"]),
          et("onPointerLeave", ["pointerout", "pointerover"]),
          Ze(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          Ze(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          Ze("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          Ze(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          Ze(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          Ze(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var _c =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Cc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(_c)
          );
        function Nc(e, t) {
          t = !!(4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== a && o.isPropagationStopped()))
                    break e;
                  (a = l), (o.currentTarget = u);
                  try {
                    a(o);
                  } catch (e) {
                    Ri(e);
                  }
                  (o.currentTarget = null), (a = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== a && o.isPropagationStopped())
                  )
                    break e;
                  (a = l), (o.currentTarget = u);
                  try {
                    a(o);
                  } catch (e) {
                    Ri(e);
                  }
                  (o.currentTarget = null), (a = s);
                }
            }
          }
        }
        function Oc(e, t) {
          var n = t[Ue];
          void 0 === n && (n = t[Ue] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Pc(t, e, 2, !1), n.add(r));
        }
        function Tc(e, t, n) {
          var r = 0;
          t && (r |= 4), Pc(n, e, r, t);
        }
        var Ac = "_reactListening" + Math.random().toString(36).slice(2);
        function Lc(e) {
          if (!e[Ac]) {
            (e[Ac] = !0),
              Xe.forEach(function (t) {
                "selectionchange" !== t &&
                  (Cc.has(t) || Tc(t, !1, e), Tc(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ac] || ((t[Ac] = !0), Tc("selectionchange", !1, t));
          }
        }
        function Pc(e, t, n, r) {
          switch (Gf(t)) {
            case 2:
              var o = Vf;
              break;
            case 8:
              o = Hf;
              break;
            default:
              o = $f;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Dt ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Rc(e, t, n, r, o) {
          var a = r;
          if (!(1 & t || 2 & t || null === r))
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === o ||
                        (8 === s.nodeType && s.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = We(l))) return;
                  if (5 === (s = i.tag) || 6 === s || 26 === s || 27 === s) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          jt(function () {
            var r = a,
              o = At(n),
              i = [];
            e: {
              var l = vr.get(e);
              if (void 0 !== l) {
                var s = Xt,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === Vt(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = pn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = rn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = rn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = rn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = tn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = nn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = mn;
                    break;
                  case dr:
                  case pr:
                  case hr:
                    s = on;
                    break;
                  case br:
                    s = gn;
                    break;
                  case "scroll":
                  case "scrollend":
                    s = Zt;
                    break;
                  case "wheel":
                    s = yn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = an;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = hn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    s = bn;
                }
                var c = !!(4 & t),
                  f = !c && ("scroll" === e || "scrollend" === e),
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = h;
                  if (
                    ((p = m.stateNode),
                    (5 !== (m = m.tag) && 26 !== m && 27 !== m) ||
                      null === p ||
                      null === d ||
                      (null != (m = Ft(h, d)) && c.push(zc(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, o)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (!(7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === Tt ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!We(u) && !u[Me])) &&
                  (s || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? We(u)
                          : null) &&
                        ((f = F(u)),
                        (c = u.tag),
                        u !== f || (5 !== c && 27 !== c && 6 !== c)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = tn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = hn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? l : Ke(s)),
                  (p = null == u ? l : Ke(u)),
                  ((l = new c(m, h + "leave", s, n, o)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  We(o) === r &&
                    (((c = new c(d, h + "enter", u, n, o)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  s && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = s; p; p = Fc(p)) h++;
                    for (p = 0, m = d; m; m = Fc(m)) p++;
                    for (; 0 < h - p; ) (c = Fc(c)), h--;
                    for (; 0 < p - h; ) (d = Fc(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Fc(c)), (d = Fc(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Dc(i, l, s, c, !1),
                  null !== u && null !== f && Dc(i, f, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? Ke(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var g = Fn;
              else if (An(l))
                if (Dn) g = Wn;
                else {
                  g = Hn;
                  var y = Vn;
                }
              else
                !(s = l.nodeName) ||
                "input" !== s.toLowerCase() ||
                ("checkbox" !== l.type && "radio" !== l.type)
                  ? r && _t(r.elementType) && (g = Fn)
                  : (g = $n);
              switch (
                (g && (g = g(e, r))
                  ? Ln(i, g, n, o)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      r &&
                      "number" === l.type &&
                      null != r.memoizedProps.value &&
                      yt(l, "number", l.value)),
                (y = r ? Ke(r) : window),
                e)
              ) {
                case "focusin":
                  (An(y) || "true" === y.contentEditable) &&
                    ((nr = y), (rr = r), (or = null));
                  break;
                case "focusout":
                  or = rr = nr = null;
                  break;
                case "mousedown":
                  ar = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (ar = !1), ir(i, n, o);
                  break;
                case "selectionchange":
                  if (tr) break;
                case "keydown":
                case "keyup":
                  ir(i, n, o);
              }
              var b;
              if (wn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var v = "onCompositionStart";
                      break e;
                    case "compositionend":
                      v = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      v = "onCompositionUpdate";
                      break e;
                  }
                  v = void 0;
                }
              else
                On
                  ? Cn(e, n) && (v = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (v = "onCompositionStart");
              v &&
                (xn &&
                  "ko" !== n.locale &&
                  (On || "onCompositionStart" !== v
                    ? "onCompositionEnd" === v && On && (b = qt())
                    : ((Ut = "value" in (Mt = o) ? Mt.value : Mt.textContent),
                      (On = !0))),
                0 < (y = jc(r, v)).length &&
                  ((v = new ln(v, e, null, n, o)),
                  i.push({ event: v, listeners: y }),
                  (b || null !== (b = Nn(n))) && (v.data = b))),
                (b = Sn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Nn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((_n = !0), En);
                        case "textInput":
                          return (e = t.data) === En && _n ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (On)
                        return "compositionend" === e || (!wn && Cn(e, t))
                          ? ((e = qt()), (Bt = Ut = Mt = null), (On = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return xn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (v = jc(r, "onBeforeInput")).length &&
                  ((y = new ln("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: y, listeners: v }),
                  (y.data = b)),
                (function (e, t, n, r, o) {
                  if ("submit" === t && n && n.stateNode === o) {
                    var a = kc((o[Ie] || null).action),
                      i = r.submitter;
                    i &&
                      null !==
                        (t = (t = i[Ie] || null)
                          ? kc(t.formAction)
                          : i.getAttribute("formAction")) &&
                      ((a = t), (i = null));
                    var l = new Xt("action", "action", null, r, o);
                    e.push({
                      event: l,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== pc) {
                                var e = i ? Sc(o, i) : new FormData(o);
                                ci(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: o.method,
                                    action: a,
                                  },
                                  null,
                                  e
                                );
                              }
                            } else
                              "function" == typeof a &&
                                (l.preventDefault(),
                                (e = i ? Sc(o, i) : new FormData(o)),
                                ci(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: o.method,
                                    action: a,
                                  },
                                  a,
                                  e
                                ));
                          },
                          currentTarget: o,
                        },
                      ],
                    });
                  }
                })(i, e, r, n, o);
            }
            Nc(i, t);
          });
        }
        function zc(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function jc(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            (5 !== (o = o.tag) && 26 !== o && 27 !== o) ||
              null === a ||
              (null != (o = Ft(e, n)) && r.unshift(zc(e, o, a)),
              null != (o = Ft(e, t)) && r.push(zc(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Fc(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function Dc(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (((l = l.tag), null !== s && s === r)) break;
            (5 !== l && 26 !== l && 27 !== l) ||
              null === u ||
              ((s = u),
              o
                ? null != (u = Ft(n, a)) && i.unshift(zc(n, u, s))
                : o || (null != (u = Ft(n, a)) && i.push(zc(n, u, s)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Ic = /\r\n?/g,
          Mc = /\u0000|\uFFFD/g;
        function Uc(e) {
          return ("string" == typeof e ? e : "" + e)
            .replace(Ic, "\n")
            .replace(Mc, "");
        }
        function Bc(e, t) {
          return (t = Uc(t)), Uc(e) === t;
        }
        function qc() {}
        function Vc(e, t, n, r, o, a) {
          switch (n) {
            case "children":
              "string" == typeof r
                ? "body" === t || ("textarea" === t && "" === r) || kt(e, r)
                : ("number" == typeof r || "bigint" == typeof r) &&
                  "body" !== t &&
                  kt(e, "" + r);
              break;
            case "className":
              it(e, "class", r);
              break;
            case "tabIndex":
              it(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              it(e, n, r);
              break;
            case "style":
              Et(e, r, a);
              break;
            case "data":
              if ("object" !== t) {
                it(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" == typeof r ||
                "symbol" == typeof r ||
                "boolean" == typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Ot("" + r)), e.setAttribute(n, r);
              break;
            case "action":
            case "formAction":
              if ("function" == typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                );
                break;
              }
              if (
                ("function" == typeof a &&
                  ("formAction" === n
                    ? ("input" !== t && Vc(e, t, "name", o.name, o, null),
                      Vc(e, t, "formEncType", o.formEncType, o, null),
                      Vc(e, t, "formMethod", o.formMethod, o, null),
                      Vc(e, t, "formTarget", o.formTarget, o, null))
                    : (Vc(e, t, "encType", o.encType, o, null),
                      Vc(e, t, "method", o.method, o, null),
                      Vc(e, t, "target", o.target, o, null))),
                null == r || "symbol" == typeof r || "boolean" == typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Ot("" + r)), e.setAttribute(n, r);
              break;
            case "onClick":
              null != r && (e.onclick = qc);
              break;
            case "onScroll":
              null != r && Oc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Oc("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" != typeof r || !("__html" in r))
                  throw Error(i(61));
                if (null != (n = r.__html)) {
                  if (null != o.children) throw Error(i(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple = r && "function" != typeof r && "symbol" != typeof r;
              break;
            case "muted":
              e.muted = r && "function" != typeof r && "symbol" != typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" == typeof r ||
                "boolean" == typeof r ||
                "symbol" == typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              (n = Ot("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n
                );
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" != typeof r && "symbol" != typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" != typeof r && "symbol" != typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r &&
                  null != r &&
                  "function" != typeof r &&
                  "symbol" != typeof r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" != typeof r &&
              "symbol" != typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" == typeof r ||
              "symbol" == typeof r ||
              isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              Oc("beforetoggle", e), Oc("toggle", e), at(e, "popover", r);
              break;
            case "xlinkActuate":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              lt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              lt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              lt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              at(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                at(e, (n = Ct.get(n) || n), r);
          }
        }
        function Hc(e, t, n, r, o, a) {
          switch (n) {
            case "style":
              Et(e, r, a);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" != typeof r || !("__html" in r))
                  throw Error(i(61));
                if (null != (n = r.__html)) {
                  if (null != o.children) throw Error(i(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" == typeof r
                ? kt(e, r)
                : ("number" == typeof r || "bigint" == typeof r) &&
                  kt(e, "" + r);
              break;
            case "onScroll":
              null != r && Oc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Oc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = qc);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              Je.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((o = n.endsWith("Capture")),
                (t = n.slice(2, o ? n.length - 7 : void 0)),
                "function" ==
                  typeof (a = null != (a = e[Ie] || null) ? a[n] : null) &&
                  e.removeEventListener(t, a, o),
                "function" != typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                    ? e.setAttribute(n, "")
                    : at(e, n, r)
                  : ("function" != typeof a &&
                      null !== a &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, o)));
          }
        }
        function $c(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              Oc("error", e), Oc("load", e);
              var r,
                o = !1,
                a = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var l = n[r];
                  if (null != l)
                    switch (r) {
                      case "src":
                        o = !0;
                        break;
                      case "srcSet":
                        a = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(i(137, t));
                      default:
                        Vc(e, t, r, l, n, null);
                    }
                }
              return (
                a && Vc(e, t, "srcSet", n.srcSet, n, null),
                void (o && Vc(e, t, "src", n.src, n, null))
              );
            case "input":
              Oc("invalid", e);
              var s = (r = l = a = null),
                u = null,
                c = null;
              for (o in n)
                if (n.hasOwnProperty(o)) {
                  var f = n[o];
                  if (null != f)
                    switch (o) {
                      case "name":
                        a = f;
                        break;
                      case "type":
                        l = f;
                        break;
                      case "checked":
                        u = f;
                        break;
                      case "defaultChecked":
                        c = f;
                        break;
                      case "value":
                        r = f;
                        break;
                      case "defaultValue":
                        s = f;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != f) throw Error(i(137, t));
                        break;
                      default:
                        Vc(e, t, o, f, n, null);
                    }
                }
              return gt(e, r, s, u, c, l, a, !1), void ct(e);
            case "select":
              for (a in (Oc("invalid", e), (o = l = r = null), n))
                if (n.hasOwnProperty(a) && null != (s = n[a]))
                  switch (a) {
                    case "value":
                      r = s;
                      break;
                    case "defaultValue":
                      l = s;
                      break;
                    case "multiple":
                      o = s;
                    default:
                      Vc(e, t, a, s, n, null);
                  }
              return (
                (t = r),
                (n = l),
                (e.multiple = !!o),
                void (null != t
                  ? bt(e, !!o, t, !1)
                  : null != n && bt(e, !!o, n, !0))
              );
            case "textarea":
              for (l in (Oc("invalid", e), (r = a = o = null), n))
                if (n.hasOwnProperty(l) && null != (s = n[l]))
                  switch (l) {
                    case "value":
                      o = s;
                      break;
                    case "defaultValue":
                      a = s;
                      break;
                    case "children":
                      r = s;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != s) throw Error(i(91));
                      break;
                    default:
                      Vc(e, t, l, s, n, null);
                  }
              return wt(e, o, a, r), void ct(e);
            case "option":
              for (u in n)
                n.hasOwnProperty(u) &&
                  null != (o = n[u]) &&
                  ("selected" === u
                    ? (e.selected =
                        o && "function" != typeof o && "symbol" != typeof o)
                    : Vc(e, t, u, o, n, null));
              return;
            case "dialog":
              Oc("cancel", e), Oc("close", e);
              break;
            case "iframe":
            case "object":
              Oc("load", e);
              break;
            case "video":
            case "audio":
              for (o = 0; o < _c.length; o++) Oc(_c[o], e);
              break;
            case "image":
              Oc("error", e), Oc("load", e);
              break;
            case "details":
              Oc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              Oc("error", e), Oc("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (c in n)
                if (n.hasOwnProperty(c) && null != (o = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(i(137, t));
                    default:
                      Vc(e, t, c, o, n, null);
                  }
              return;
            default:
              if (_t(t)) {
                for (f in n)
                  n.hasOwnProperty(f) &&
                    void 0 !== (o = n[f]) &&
                    Hc(e, t, f, o, n, void 0);
                return;
              }
          }
          for (s in n)
            n.hasOwnProperty(s) &&
              null != (o = n[s]) &&
              Vc(e, t, s, o, n, null);
        }
        var Wc = null,
          Qc = null;
        function Kc(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function Gc(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function Yc(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function Xc(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            "bigint" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Jc = null,
          Zc = "function" == typeof setTimeout ? setTimeout : void 0,
          ef = "function" == typeof clearTimeout ? clearTimeout : void 0,
          tf = "function" == typeof Promise ? Promise : void 0,
          nf =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== tf
              ? function (e) {
                  return tf.resolve(null).then(e).catch(rf);
                }
              : Zc;
        function rf(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function of(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void pd(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          pd(t);
        }
        function af(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                af(n), $e(n);
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function lf(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function sf(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function uf(e, t, n) {
          switch (((t = Kc(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(i(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(i(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(i(454));
              return e;
            default:
              throw Error(i(451));
          }
        }
        var cf = new Map(),
          ff = new Set();
        function df(e) {
          return "function" == typeof e.getRootNode
            ? e.getRootNode()
            : e.ownerDocument;
        }
        var pf = B.d;
        B.d = {
          f: function () {
            var e = pf.f(),
              t = Du();
            return e || t;
          },
          r: function (e) {
            var t = Qe(e);
            null !== t && 5 === t.tag && "form" === t.type ? di(t) : pf.r(e);
          },
          D: function (e) {
            pf.D(e), mf("dns-prefetch", e, null);
          },
          C: function (e, t) {
            pf.C(e, t), mf("preconnect", e, t);
          },
          L: function (e, t, n) {
            pf.L(e, t, n);
            var r = hf;
            if (r && e && t) {
              var o = 'link[rel="preload"][as="' + ht(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((o += '[imagesrcset="' + ht(n.imageSrcSet) + '"]'),
                  "string" == typeof n.imageSizes &&
                    (o += '[imagesizes="' + ht(n.imageSizes) + '"]'))
                : (o += '[href="' + ht(e) + '"]');
              var a = o;
              switch (t) {
                case "style":
                  a = yf(e);
                  break;
                case "script":
                  a = wf(e);
              }
              cf.has(a) ||
                ((e = A(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n
                )),
                cf.set(a, e),
                null !== r.querySelector(o) ||
                  ("style" === t && r.querySelector(bf(a))) ||
                  ("script" === t && r.querySelector(kf(a))) ||
                  ($c((t = r.createElement("link")), "link", e),
                  Ye(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            pf.m(e, t);
            var n = hf;
            if (n && e) {
              var r = t && "string" == typeof t.as ? t.as : "script",
                o =
                  'link[rel="modulepreload"][as="' +
                  ht(r) +
                  '"][href="' +
                  ht(e) +
                  '"]',
                a = o;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  a = wf(e);
              }
              if (
                !cf.has(a) &&
                ((e = A({ rel: "modulepreload", href: e }, t)),
                cf.set(a, e),
                null === n.querySelector(o))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(kf(a))) return;
                }
                $c((r = n.createElement("link")), "link", e),
                  Ye(r),
                  n.head.appendChild(r);
              }
            }
          },
          X: function (e, t) {
            pf.X(e, t);
            var n = hf;
            if (n && e) {
              var r = Ge(n).hoistableScripts,
                o = wf(e),
                a = r.get(o);
              a ||
                ((a = n.querySelector(kf(o))) ||
                  ((e = A({ src: e, async: !0 }, t)),
                  (t = cf.get(o)) && _f(e, t),
                  Ye((a = n.createElement("script"))),
                  $c(a, "link", e),
                  n.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(o, a));
            }
          },
          S: function (e, t, n) {
            pf.S(e, t, n);
            var r = hf;
            if (r && e) {
              var o = Ge(r).hoistableStyles,
                a = yf(e);
              t = t || "default";
              var i = o.get(a);
              if (!i) {
                var l = { loading: 0, preload: null };
                if ((i = r.querySelector(bf(a)))) l.loading = 5;
                else {
                  (e = A(
                    { rel: "stylesheet", href: e, "data-precedence": t },
                    n
                  )),
                    (n = cf.get(a)) && Ef(e, n);
                  var s = (i = r.createElement("link"));
                  Ye(s),
                    $c(s, "link", e),
                    (s._p = new Promise(function (e, t) {
                      (s.onload = e), (s.onerror = t);
                    })),
                    s.addEventListener("load", function () {
                      l.loading |= 1;
                    }),
                    s.addEventListener("error", function () {
                      l.loading |= 2;
                    }),
                    (l.loading |= 4),
                    xf(i, t, r);
                }
                (i = { type: "stylesheet", instance: i, count: 1, state: l }),
                  o.set(a, i);
              }
            }
          },
          M: function (e, t) {
            pf.M(e, t);
            var n = hf;
            if (n && e) {
              var r = Ge(n).hoistableScripts,
                o = wf(e),
                a = r.get(o);
              a ||
                ((a = n.querySelector(kf(o))) ||
                  ((e = A({ src: e, async: !0, type: "module" }, t)),
                  (t = cf.get(o)) && _f(e, t),
                  Ye((a = n.createElement("script"))),
                  $c(a, "link", e),
                  n.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(o, a));
            }
          },
        };
        var hf = "undefined" == typeof document ? null : document;
        function mf(e, t, n) {
          var r = hf;
          if (r && "string" == typeof t && t) {
            var o = ht(t);
            (o = 'link[rel="' + e + '"][href="' + o + '"]'),
              "string" == typeof n && (o += '[crossorigin="' + n + '"]'),
              ff.has(o) ||
                (ff.add(o),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(o) &&
                  ($c((t = r.createElement("link")), "link", e),
                  Ye(t),
                  r.head.appendChild(t)));
          }
        }
        function gf(e, t, n, r) {
          var o,
            a,
            l,
            s,
            u = (u = Y.current) ? df(u) : null;
          if (!u) throw Error(i(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" == typeof n.precedence &&
                "string" == typeof n.href
                ? ((t = yf(n.href)),
                  (r = (n = Ge(u).hoistableStyles).get(t)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" == typeof n.href &&
                "string" == typeof n.precedence
              ) {
                e = yf(n.href);
                var c = Ge(u).hoistableStyles,
                  f = c.get(e);
                if (
                  (f ||
                    ((u = u.ownerDocument || u),
                    (f = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    c.set(e, f),
                    (c = u.querySelector(bf(e))) &&
                      !c._p &&
                      ((f.instance = c), (f.state.loading = 5)),
                    cf.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      cf.set(e, n),
                      c ||
                        ((o = u),
                        (a = e),
                        (l = n),
                        (s = f.state),
                        o.querySelector(
                          'link[rel="preload"][as="style"][' + a + "]"
                        )
                          ? (s.loading = 1)
                          : ((a = o.createElement("link")),
                            (s.preload = a),
                            a.addEventListener("load", function () {
                              return (s.loading |= 1);
                            }),
                            a.addEventListener("error", function () {
                              return (s.loading |= 2);
                            }),
                            $c(a, "link", l),
                            Ye(a),
                            o.head.appendChild(a))))),
                  t && null === r)
                )
                  throw Error(i(528, ""));
                return f;
              }
              if (t && null !== r) throw Error(i(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" == typeof (n = n.src) &&
                t &&
                "function" != typeof t &&
                "symbol" != typeof t
                  ? ((t = wf(n)),
                    (r = (n = Ge(u).hoistableScripts).get(t)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(i(444, e));
          }
        }
        function yf(e) {
          return 'href="' + ht(e) + '"';
        }
        function bf(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function vf(e) {
          return A({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function wf(e) {
          return '[src="' + ht(e) + '"]';
        }
        function kf(e) {
          return "script[async]" + e;
        }
        function Sf(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + ht(n.href) + '"]'
                );
                if (r) return (t.instance = r), Ye(r), r;
                var o = A({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  Ye((r = (e.ownerDocument || e).createElement("style"))),
                  $c(r, "style", o),
                  xf(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                o = yf(n.href);
                var a = e.querySelector(bf(o));
                if (a)
                  return (t.state.loading |= 4), (t.instance = a), Ye(a), a;
                (r = vf(n)),
                  (o = cf.get(o)) && Ef(r, o),
                  Ye((a = (e.ownerDocument || e).createElement("link")));
                var l = a;
                return (
                  (l._p = new Promise(function (e, t) {
                    (l.onload = e), (l.onerror = t);
                  })),
                  $c(a, "link", r),
                  (t.state.loading |= 4),
                  xf(a, n.precedence, e),
                  (t.instance = a)
                );
              case "script":
                return (
                  (a = wf(n.src)),
                  (o = e.querySelector(kf(a)))
                    ? ((t.instance = o), Ye(o), o)
                    : ((r = n),
                      (o = cf.get(a)) && _f((r = A({}, n)), o),
                      Ye(
                        (o = (e = e.ownerDocument || e).createElement("script"))
                      ),
                      $c(o, "link", r),
                      e.head.appendChild(o),
                      (t.instance = o))
                );
              case "void":
                return null;
              default:
                throw Error(i(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              !(4 & t.state.loading) &&
              ((r = t.instance),
              (t.state.loading |= 4),
              xf(r, n.precedence, e));
          return t.instance;
        }
        function xf(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]'
              ),
              o = r.length ? r[r.length - 1] : null,
              a = o,
              i = 0;
            i < r.length;
            i++
          ) {
            var l = r[i];
            if (l.dataset.precedence === t) a = l;
            else if (a !== o) break;
          }
          a
            ? a.parentNode.insertBefore(e, a.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Ef(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title);
        }
        function _f(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity);
        }
        var Cf = null;
        function Nf(e, t, n) {
          if (null === Cf) {
            var r = new Map(),
              o = (Cf = new Map());
            o.set(n, r);
          } else (r = (o = Cf).get(n)) || ((r = new Map()), o.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), o = 0;
            o < n.length;
            o++
          ) {
            var a = n[o];
            if (
              !(
                a[He] ||
                a[De] ||
                ("link" === e && "stylesheet" === a.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== a.namespaceURI
            ) {
              var i = a.getAttribute(t) || "";
              i = e + i;
              var l = r.get(i);
              l ? l.push(a) : r.set(i, [a]);
            }
          }
          return r;
        }
        function Of(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null
          );
        }
        function Tf(e) {
          return !!("stylesheet" !== e.type || 3 & e.state.loading);
        }
        var Af = null;
        function Lf() {}
        function Pf() {
          if ((this.count--, 0 === this.count))
            if (this.stylesheets) zf(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              (this.unsuspend = null), e();
            }
        }
        var Rf = null;
        function zf(e, t) {
          (e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (Rf = new Map()),
              t.forEach(jf, e),
              (Rf = null),
              Pf.call(e));
        }
        function jf(e, t) {
          if (!(4 & t.state.loading)) {
            var n = Rf.get(e);
            if (n) var r = n.get(null);
            else {
              (n = new Map()), Rf.set(e, n);
              for (
                var o = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]"
                  ),
                  a = 0;
                a < o.length;
                a++
              ) {
                var i = o[a];
                ("LINK" !== i.nodeName &&
                  "not all" === i.getAttribute("media")) ||
                  (n.set(i.dataset.precedence, i), (r = i));
              }
              r && n.set(null, r);
            }
            (i = (o = t.instance).getAttribute("data-precedence")),
              (a = n.get(i) || r) === r && n.set(null, o),
              n.set(i, o),
              this.count++,
              (r = Pf.bind(this)),
              o.addEventListener("load", r),
              o.addEventListener("error", r),
              a
                ? a.parentNode.insertBefore(o, a.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    o,
                    e.firstChild
                  ),
              (t.state.loading |= 4);
          }
        }
        var Ff = {
          $$typeof: m,
          Provider: null,
          Consumer: null,
          _currentValue: q,
          _currentValue2: q,
          _threadCount: 0,
        };
        function Df(e, t, n, r, o, a, i, l) {
          (this.tag = 1),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Ae(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.finishedLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ae(0)),
            (this.hiddenUpdates = Ae(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = o),
            (this.onCaughtError = a),
            (this.onRecoverableError = i),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = l),
            (this.incompleteTransitions = new Map());
        }
        function If(e, t, n, r, o, a) {
          (o = (function (e) {
            return e ? (e = Lr) : Lr;
          })(o)),
            null === r.context ? (r.context = o) : (r.pendingContext = o),
            ((r = Al(t)).payload = { element: n }),
            null !== (a = void 0 === a ? null : a) && (r.callback = a),
            null !== (n = Ll(e, r, t)) && (Lu(n, 0, t), Pl(n, e, t));
        }
        function Mf(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Uf(e, t) {
          Mf(e, t), (e = e.alternate) && Mf(e, t);
        }
        function Bf(e) {
          if (13 === e.tag) {
            var t = Or(e, 67108864);
            null !== t && Lu(t, 0, 67108864), Uf(e, 67108864);
          }
        }
        var qf = !0;
        function Vf(e, t, n, r) {
          var o = T.T;
          T.T = null;
          var a = B.p;
          try {
            (B.p = 2), $f(e, t, n, r);
          } finally {
            (B.p = a), (T.T = o);
          }
        }
        function Hf(e, t, n, r) {
          var o = T.T;
          T.T = null;
          var a = B.p;
          try {
            (B.p = 8), $f(e, t, n, r);
          } finally {
            (B.p = a), (T.T = o);
          }
        }
        function $f(e, t, n, r) {
          if (qf) {
            var o = Wf(r);
            if (null === o) Rc(e, t, r, Qf, n), od(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Xf = ad(Xf, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (Jf = ad(Jf, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Zf = ad(Zf, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return ed.set(a, ad(ed.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      td.set(a, ad(td.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((od(e, r), 4 & t && -1 < rd.indexOf(e))) {
              for (; null !== o; ) {
                var a = Qe(o);
                if (null !== a)
                  switch (a.tag) {
                    case 3:
                      if (
                        (a = a.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var i = Ee(a.pendingLanes);
                        if (0 !== i) {
                          var l = a;
                          for (
                            l.pendingLanes |= 2, l.entangledLanes |= 2;
                            i;

                          ) {
                            var s = 1 << (31 - ve(i));
                            (l.entanglements[1] |= s), (i &= ~s);
                          }
                          hc(a), !(6 & Zs) && ((vu = le() + 500), mc(0, !1));
                        }
                      }
                      break;
                    case 13:
                      null !== (l = Or(a, 2)) && Lu(l, 0, 2), Du(), Uf(a, 2);
                  }
                if ((null === (a = Wf(r)) && Rc(e, t, r, Qf, n), a === o))
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Rc(e, t, r, null, n);
          }
        }
        function Wf(e) {
          return Kf((e = At(e)));
        }
        var Qf = null;
        function Kf(e) {
          if (((Qf = null), null !== (e = We(e)))) {
            var t = F(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = D(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return (Qf = e), null;
        }
        function Gf(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (se()) {
                case ue:
                  return 2;
                case ce:
                  return 8;
                case fe:
                case de:
                  return 32;
                case pe:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Yf = !1,
          Xf = null,
          Jf = null,
          Zf = null,
          ed = new Map(),
          td = new Map(),
          nd = [],
          rd =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " "
            );
        function od(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Xf = null;
              break;
            case "dragenter":
            case "dragleave":
              Jf = null;
              break;
            case "mouseover":
            case "mouseout":
              Zf = null;
              break;
            case "pointerover":
            case "pointerout":
              ed.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              td.delete(t.pointerId);
          }
        }
        function ad(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = Qe(t)) && Bf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function id(e) {
          var t = We(e.target);
          if (null !== t) {
            var n = F(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = D(n)))
                  return (
                    (e.blockedOn = t),
                    void (function (e) {
                      var t = B.p;
                      try {
                        return (
                          (B.p = e),
                          (function () {
                            if (13 === n.tag) {
                              var e = Tu(),
                                t = Or(n, e);
                              null !== t && Lu(t, 0, e), Uf(n, e);
                            }
                          })()
                        );
                      } finally {
                        B.p = t;
                      }
                    })(e.priority)
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function ld(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Wf(e.nativeEvent);
            if (null !== n)
              return null !== (t = Qe(n)) && Bf(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Tt = r), n.target.dispatchEvent(r), (Tt = null), t.shift();
          }
          return !0;
        }
        function sd(e, t, n) {
          ld(e) && n.delete(t);
        }
        function ud() {
          (Yf = !1),
            null !== Xf && ld(Xf) && (Xf = null),
            null !== Jf && ld(Jf) && (Jf = null),
            null !== Zf && ld(Zf) && (Zf = null),
            ed.forEach(sd),
            td.forEach(sd);
        }
        function cd(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Yf ||
              ((Yf = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, ud)));
        }
        var fd = null;
        function dd(e) {
          fd !== e &&
            ((fd = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              fd === e && (fd = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  o = e[t + 2];
                if ("function" != typeof r) {
                  if (null === Kf(r || n)) continue;
                  break;
                }
                var a = Qe(n);
                null !== a &&
                  (e.splice(t, 3),
                  (t -= 3),
                  ci(
                    a,
                    { pending: !0, data: o, method: n.method, action: r },
                    r,
                    o
                  ));
              }
            }));
        }
        function pd(e) {
          function t(t) {
            return cd(t, e);
          }
          null !== Xf && cd(Xf, e),
            null !== Jf && cd(Jf, e),
            null !== Zf && cd(Zf, e),
            ed.forEach(t),
            td.forEach(t);
          for (var n = 0; n < nd.length; n++) {
            var r = nd[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < nd.length && null === (n = nd[0]).blockedOn; )
            id(n), null === n.blockedOn && nd.shift();
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var o = n[r],
                a = n[r + 1],
                i = o[Ie] || null;
              if ("function" == typeof a) i || dd(n);
              else if (i) {
                var l = null;
                if (a && a.hasAttribute("formAction")) {
                  if (((o = a), (i = a[Ie] || null))) l = i.formAction;
                  else if (null !== Kf(o)) continue;
                } else l = i.action;
                "function" == typeof l
                  ? (n[r + 1] = l)
                  : (n.splice(r, 3), (r -= 3)),
                  dd(n);
              }
            }
        }
        function hd(e) {
          this._internalRoot = e;
        }
        function md(e) {
          this._internalRoot = e;
        }
        (md.prototype.render = hd.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            If(t.current, Tu(), e, t, null, null);
          }),
          (md.prototype.unmount = hd.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                0 === e.tag && ec(),
                  If(e.current, 2, null, e, null, null),
                  Du(),
                  (t[Me] = null);
              }
            }),
          (md.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = je();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < nd.length && 0 !== t && t < nd[n].priority;
                n++
              );
              nd.splice(n, 0, e), 0 === n && id(e);
            }
          });
        var gd = o.version;
        if ("19.0.0" !== gd) throw Error(i(527, gd, "19.0.0"));
        B.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(i(188));
            throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = F(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return I(o), e;
                    if (a === r) return I(o), t;
                    a = a.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = o), (r = a);
                else {
                  for (var l = !1, s = o.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = o), (r = a);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = o), (n = a);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = a.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = a), (r = o);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = a), (n = o);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            null === (e = null !== e ? M(e) : null) ? null : e.stateNode
          );
        };
        var yd = {
          bundleType: 0,
          version: "19.0.0",
          rendererPackageName: "react-dom",
          currentDispatcherRef: T,
          findFiberByHostInstance: We,
          reconcilerVersion: "19.0.0",
        };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var bd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!bd.isDisabled && bd.supportsFiber)
            try {
              (ge = bd.inject(yd)), (ye = bd);
            } catch (e) {}
        }
        t.createRoot = function (e, t) {
          if (
            !(n = e) ||
            (1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType)
          )
            throw Error(i(299));
          var n,
            r = !1,
            o = "",
            a = zi,
            l = ji,
            s = Fi;
          return (
            null != t &&
              (!0 === t.unstable_strictMode && (r = !0),
              void 0 !== t.identifierPrefix && (o = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
              void 0 !== t.onCaughtError && (l = t.onCaughtError),
              void 0 !== t.onRecoverableError && (s = t.onRecoverableError),
              void 0 !== t.unstable_transitionCallbacks &&
                t.unstable_transitionCallbacks),
            (t = (function (e, t, n, r, o, a, i, l, s, u, c, f) {
              return (
                (e = new Df(e, t, n, i, l, s, u, f)),
                (t = 1),
                !0 === a && (t |= 24),
                (a = zs(3, null, null, t)),
                (e.current = a),
                (a.stateNode = e),
                (t = Uo()).refCount++,
                (e.pooledCache = t),
                t.refCount++,
                (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
                Ol(a),
                e
              );
            })(e, 1, !1, null, 0, r, o, a, l, s, 0, null)),
            (e[Me] = t.current),
            Lc(8 === e.nodeType ? e.parentNode : e),
            new hd(t)
          );
        };
      },
      314: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var l = 0; l < this.length; l++) {
                  var s = this[l][0];
                  null != s && (i[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var c = [].concat(e[u]);
                (r && i[c[0]]) ||
                  (void 0 !== a &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = a)),
                  n &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = n))
                      : (c[2] = n)),
                  o &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = o))
                      : (c[4] = "".concat(o))),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      338: (e, t, n) => {
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(247));
      },
      353: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "/* Image Attachment Styles */\n.image-attachment {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  width: 100%;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n}\n\n.image-attachment-header {\n  padding: 12px 16px;\n  border-bottom: 1px solid #eaeaea;\n  font-weight: 600;\n  font-size: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.image-attachment-close {\n  background: none;\n  border: none;\n  color: #617190;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.image-attachment-upload {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.image-upload-label {\n  width: 100%;\n  height: 150px;\n  border: 2px dashed #e2e8f0;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: border-color 0.2s;\n}\n\n.image-upload-label:hover {\n  border-color: #1877f2;\n}\n\n.image-upload-input {\n  display: none;\n}\n\n.image-upload-placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  color: #617190;\n}\n\n.image-upload-hint {\n  font-size: 12px;\n  opacity: 0.7;\n}\n\n.image-attachment-preview {\n  padding: 16px;\n}\n\n.image-attachment-preview img {\n  width: 100%;\n  max-height: 200px;\n  object-fit: contain;\n  border-radius: 8px;\n}\n\n.image-attachment-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.image-attachment-cancel {\n  padding: 8px 12px;\n  background-color: #f1f5f9;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.image-attachment-send {\n  padding: 8px 12px;\n  background-color: #1877f2;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n}\n",
          "",
        ]);
        const l = i;
      },
      422: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "/* Emoji Picker Styles */\n.emoji-picker {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  width: 100%;\n  max-height: 300px;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  overflow-y: auto;\n}\n\n.emoji-picker-header {\n  padding: 12px 16px;\n  border-bottom: 1px solid #eaeaea;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.emoji-picker-content {\n  padding: 8px;\n}\n\n.emoji-category {\n  margin-bottom: 12px;\n}\n\n.emoji-category-title {\n  font-size: 12px;\n  color: #617190;\n  margin-bottom: 4px;\n  padding: 0 8px;\n}\n\n.emoji-grid {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  gap: 4px;\n}\n\n.emoji-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  font-size: 20px;\n  background: none;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.emoji-item:hover {\n  background-color: #f0f2f5;\n}\n",
          "",
        ]);
        const l = i;
      },
      477: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > a(s, n))
                u < o && 0 > a(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" == typeof performance &&
            "function" == typeof performance.now)
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          y = "function" == typeof setTimeout ? setTimeout : null,
          b = "function" == typeof clearTimeout ? clearTimeout : null,
          v = "undefined" != typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), L();
            else {
              var t = r(c);
              null !== t && P(k, t.startTime - e);
            }
        }
        var S,
          x = !1,
          E = -1,
          _ = 5,
          C = -1;
        function N() {
          return !(t.unstable_now() - C < _);
        }
        function O() {
          if (x) {
            var e = t.unstable_now();
            C = e;
            var n = !0;
            try {
              e: {
                (m = !1), g && ((g = !1), b(E), (E = -1)), (h = !0);
                var a = p;
                try {
                  t: {
                    for (
                      w(e), d = r(u);
                      null !== d && !(d.expirationTime > e && N());

                    ) {
                      var i = d.callback;
                      if ("function" == typeof i) {
                        (d.callback = null), (p = d.priorityLevel);
                        var l = i(d.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" == typeof l)) {
                          (d.callback = l), w(e), (n = !0);
                          break t;
                        }
                        d === r(u) && o(u), w(e);
                      } else o(u);
                      d = r(u);
                    }
                    if (null !== d) n = !0;
                    else {
                      var s = r(c);
                      null !== s && P(k, s.startTime - e), (n = !1);
                    }
                  }
                  break e;
                } finally {
                  (d = null), (p = a), (h = !1);
                }
                n = void 0;
              }
            } finally {
              n ? S() : (x = !1);
            }
          }
        }
        if ("function" == typeof v)
          S = function () {
            v(O);
          };
        else if ("undefined" != typeof MessageChannel) {
          var T = new MessageChannel(),
            A = T.port2;
          (T.port1.onmessage = O),
            (S = function () {
              A.postMessage(null);
            });
        } else
          S = function () {
            y(O, 0);
          };
        function L() {
          x || ((x = !0), S());
        }
        function P(e, n) {
          E = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L());
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ((a =
                "object" == typeof a &&
                null !== a &&
                "number" == typeof (a = a.delay) &&
                0 < a
                  ? i + a
                  : i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (b(E), (E = -1)) : (g = !0), P(k, a - i)))
                : ((e.sortIndex = l), n(u, e), m || h || ((m = !0), L())),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      540: (e, t, n) => {
        e.exports = n(869);
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      643: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          '/* Header Styles */\n.chat-widget-header {\n  background-color: #1877f2;\n  color: white;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.chat-widget-header-tabs {\n  display: flex;\n  padding: 8px 16px 0;\n}\n\n.chat-widget-tab {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  cursor: pointer;\n  border-radius: 8px 8px 0 0;\n  opacity: 0.7;\n}\n\n.chat-widget-tab.active {\n  background-color: rgba(255, 255, 255, 0.1);\n  opacity: 1;\n}\n\n.chat-widget-header-content {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n\n.chat-widget-agents {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 8px;\n}\n\n.chat-widget-agent-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid white;\n  margin-left: -10px;\n  object-fit: cover;\n}\n\n.chat-widget-agent-avatar:first-child {\n  margin-left: 0;\n}\n\n.chat-widget-agent-avatar.message-icon {\n  background-color: #55c3ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.chat-widget-header h2 {\n  font-family: "Noto Sans", sans-serif;\n  font-size: 12.4px;\n  margin: 0;\n  font-weight: 500;\n  line-height: 18px;\n  color: #fff;\n}\n\n.chat-widget-header p {\n  font-size: 14px;\n  margin: 0;\n  opacity: 0.8;\n}\n\n.chat-widget-close-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: rgba(0, 0, 0, 0.2);\n  border: none;\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  cursor: pointer;\n}\n\n/* Responsive adjustments for even smaller screens */\n@media (max-height: 500px) {\n  .chat-widget-header {\n    padding-top: 0;\n    padding-bottom: 8px;\n  }\n\n  .chat-widget-header-content {\n    padding: 8px 16px;\n  }\n\n  .chat-widget-agents {\n    margin-bottom: 4px;\n  }\n\n  .chat-widget-agent-avatar {\n    width: 28px;\n    height: 28px;\n  }\n\n  .chat-widget-header h2 {\n    font-size: 16px;\n  }\n\n  .chat-widget-header p {\n    font-size: 12px;\n  }\n}\n\n/* Fix for input visibility with on-screen keyboard */\n@media (max-height: 600px) {\n  .chat-widget-header {\n    flex-shrink: 0;\n  }\n}\n',
          "",
        ]);
        const l = i;
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      728: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "/* Chat Trigger Styles */\n.chat-trigger {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 320px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);\n  z-index: 1000;\n  overflow: hidden;\n  animation: slideIn 0.3s ease-out;\n}\n\n@keyframes slideIn {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.chat-trigger-close {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.1);\n  border: none;\n  color: #666;\n  font-size: 18px;\n  line-height: 1;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s;\n}\n\n.chat-trigger-close:hover {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.chat-trigger-content {\n  padding: 16px;\n}\n\n.chat-trigger-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.chat-trigger-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.chat-trigger-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n\n.chat-trigger-message {\n  font-size: 14px;\n  line-height: 1.4;\n  color: #4a4a4a;\n  margin: 0 0 16px;\n}\n\n.chat-trigger-button {\n  width: 100%;\n  padding: 8px 16px;\n  background-color: #1877f2;\n  color: white;\n  border: none;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.chat-trigger-button:hover {\n  background-color: #1664d9;\n}\n\n.chat-trigger-brand {\n  position: absolute;\n  bottom: -20px;\n  right: -20px;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: white;\n  padding: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.chat-trigger-brand-avatar {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n/* Mobile Responsive Styles for Trigger */\n@media (max-width: 768px) {\n  .chat-trigger {\n    width: calc(100% - 32px);\n    margin: 0 16px;\n  }\n}\n",
          "",
        ]);
        const l = i;
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      854: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          "/* Audio Recorder Styles */\n.audio-recorder {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  width: 100%;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n}\n\n.audio-recorder-header {\n  padding: 12px 16px;\n  border-bottom: 1px solid #eaeaea;\n  font-weight: 600;\n  font-size: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.audio-recorder-close {\n  background: none;\n  border: none;\n  color: #617190;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.audio-recorder-content {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.audio-recorder-timer {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1877f2;\n}\n\n.audio-recorder-visualizer {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 4px;\n  height: 60px;\n  width: 100%;\n}\n\n.audio-wave {\n  width: 4px;\n  background-color: #1877f2;\n  border-radius: 2px;\n  animation: wave 1.2s ease-in-out infinite;\n}\n\n.audio-wave:nth-child(1) {\n  animation-delay: 0s;\n  height: 20%;\n}\n\n.audio-wave:nth-child(2) {\n  animation-delay: 0.2s;\n  height: 40%;\n}\n\n.audio-wave:nth-child(3) {\n  animation-delay: 0.4s;\n  height: 60%;\n}\n\n.audio-wave:nth-child(4) {\n  animation-delay: 0.6s;\n  height: 40%;\n}\n\n.audio-wave:nth-child(5) {\n  animation-delay: 0.8s;\n  height: 20%;\n}\n\n@keyframes wave {\n  0%,\n  100% {\n    transform: scaleY(1);\n  }\n  50% {\n    transform: scaleY(2);\n  }\n}\n\n.audio-recorder-preview {\n  width: 100%;\n  border-radius: 8px;\n}\n\n.audio-recorder-actions {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  margin-top: 12px;\n  width: 100%;\n}\n\n.audio-recorder-stop {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background-color: #ef4444;\n  color: white;\n  border: none;\n  border-radius: 20px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.audio-recorder-cancel {\n  padding: 8px 16px;\n  background-color: #f1f5f9;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.audio-recorder-send {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background-color: #1877f2;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.audio-recorder-send:disabled {\n  background-color: #cbd5e0;\n  cursor: not-allowed;\n}\n",
          "",
        ]);
        const l = i;
      },
      869: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.consumer"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator,
          h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function b() {}
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = y.prototype);
        var w = (v.prototype = new b());
        (w.constructor = v), m(w, y.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          S = { H: null, A: null, T: null, S: null },
          x = Object.prototype.hasOwnProperty;
        function E(e, t, r, o, a, i) {
          return (
            (r = i.ref),
            {
              $$typeof: n,
              type: e,
              key: t,
              ref: void 0 !== r ? r : null,
              props: i,
            }
          );
        }
        function _(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function N(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? ((n = "" + e.key),
              (r = { "=": "=0", ":": "=2" }),
              "$" +
                n.replace(/[=:]/g, function (e) {
                  return r[e];
                }))
            : t.toString(36);
          var n, r;
        }
        function O() {}
        function T(e, t, o, a, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s,
            u,
            c = !1;
          if (null === e) c = !0;
          else
            switch (l) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case d:
                    return T((c = e._init)(e._payload), t, o, a, i);
                }
            }
          if (c)
            return (
              (i = i(e)),
              (c = "" === a ? "." + N(e, 0) : a),
              k(i)
                ? ((o = ""),
                  null != c && (o = c.replace(C, "$&/") + "/"),
                  T(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (_(i) &&
                    ((s = i),
                    (u =
                      o +
                      (null == i.key || (e && e.key === i.key)
                        ? ""
                        : ("" + i.key).replace(C, "$&/") + "/") +
                      c),
                    (i = E(s.type, u, void 0, 0, 0, s.props))),
                  t.push(i)),
              1
            );
          c = 0;
          var f,
            h = "" === a ? "." : a + ":";
          if (k(e))
            for (var m = 0; m < e.length; m++)
              c += T((a = e[m]), t, o, (l = h + N(a, m)), i);
          else if (
            "function" ==
            typeof (m =
              null === (f = e) || "object" != typeof f
                ? null
                : "function" == typeof (f = (p && f[p]) || f["@@iterator"])
                ? f
                : null)
          )
            for (e = m.call(e), m = 0; !(a = e.next()).done; )
              c += T((a = a.value), t, o, (l = h + N(a, m++)), i);
          else if ("object" === l) {
            if ("function" == typeof e.then)
              return T(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" == typeof e.status
                          ? e.then(O, O)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                o,
                a,
                i
              );
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          }
          return c;
        }
        function A(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var P =
          "function" == typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" == typeof window &&
                  "function" == typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" == typeof e &&
                      null !== e &&
                      "string" == typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" == typeof process &&
                  "function" == typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function R() {}
        (t.Children = {
          map: A,
          forEach: function (e, t, n) {
            A(
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
              A(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              A(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!_(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = v),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            S),
          (t.act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null == e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = m({}, e.props),
              o = e.key;
            if (null != t)
              for (a in (t.ref, void 0 !== t.key && (o = "" + t.key), t))
                !x.call(t, a) ||
                  "key" === a ||
                  "__self" === a ||
                  "__source" === a ||
                  ("ref" === a && void 0 === t.ref) ||
                  (r[a] = t[a]);
            var a = arguments.length - 2;
            if (1 === a) r.children = n;
            else if (1 < a) {
              for (var i = Array(a), l = 0; l < a; l++) i[l] = arguments[l + 2];
              r.children = i;
            }
            return E(e.type, o, void 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: l, _context: e }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              o = {},
              a = null;
            if (null != t)
              for (r in (void 0 !== t.key && (a = "" + t.key), t))
                x.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (o[r] = t[r]);
            var i = arguments.length - 2;
            if (1 === i) o.children = n;
            else if (1 < i) {
              for (var l = Array(i), s = 0; s < i; s++) l[s] = arguments[s + 2];
              o.children = l;
            }
            if (e && e.defaultProps)
              for (r in (i = e.defaultProps)) void 0 === o[r] && (o[r] = i[r]);
            return E(e, a, void 0, 0, 0, o);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = _),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = S.T,
              n = {};
            S.T = n;
            try {
              var r = e(),
                o = S.S;
              null !== o && o(n, r),
                "object" == typeof r &&
                  null !== r &&
                  "function" == typeof r.then &&
                  r.then(R, P);
            } catch (e) {
              P(e);
            } finally {
              S.T = t;
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return S.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return S.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return S.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return S.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return S.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return S.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t) {
            return S.H.useEffect(e, t);
          }),
          (t.useId = function () {
            return S.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return S.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return S.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return S.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return S.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return S.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return S.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return S.H.useRef(e);
          }),
          (t.useState = function (e) {
            return S.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return S.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return S.H.useTransition();
          }),
          (t.version = "19.0.0");
      },
      924: (e, t, n) => {
        n.d(t, { A: () => l });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          e.id,
          '/* Messages container */\n.chat-widget-messages {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  background-color: #f4f7f9;\n  font-family: "Noto Sans", sans-serif;\n}\n\n/* Message styles */\n.chat-widget-message {\n  display: flex;\n  align-items: flex-start;\n  max-width: 85%;\n  font-size: 12.6px;\n}\n\n.chat-widget-message.user-message {\n  margin-left: auto;\n  flex-direction: row-reverse;\n}\n\n.chat-widget-message-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-right: 8px;\n  flex-shrink: 0;\n}\n\n.chat-widget-message-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.chat-widget-message-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.chat-widget-message-sender {\n  font-size: 12px;\n  color: #617190;\n  margin-bottom: 2px;\n}\n\n.chat-widget-message-bubble {\n  padding: 8px 14px;\n  border-radius: 18px;\n  font-size: 14px;\n  line-height: 1.4;\n  word-break: break-word;\n}\n\n.agent-message .chat-widget-message-bubble {\n  background-color: #e5e5ea;\n  color: #000;\n  border-top-left-radius: 4px;\n}\n\n.user-message .chat-widget-message-bubble {\n  background-color: #1877f2;\n  color: white;\n  border-bottom-right-radius: 4px;\n}\n\n/* Message media styles */\n.chat-widget-message-media {\n  width: 100%;\n}\n\n.chat-widget-message-image {\n  max-width: 100%;\n  max-height: 200px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.chat-widget-message-audio {\n  /* width: 100%; */\n  max-width: 240px;\n  height: 36px;\n}\n\n.chat-widget-message-bubble.media-bubble {\n  padding: 8px;\n  max-width: 240px;\n}\n\n/* Responsive adjustments for even smaller screens */\n@media (max-height: 500px) {\n  .chat-widget-messages {\n    padding: 12px;\n  }\n}\n\n/* Fix for input visibility with on-screen keyboard */\n@media (max-height: 600px) {\n  .chat-widget-messages {\n    flex: 1;\n    min-height: 0;\n  }\n}\n',
          "",
        ]);
        const l = i;
      },
      961: (e, t, n) => {
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(221));
      },
      982: (e, t, n) => {
        e.exports = n(477);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nc = void 0);
  var r = {};
  n.r(r), n.d(r, { ChatWidget: () => yo });
  var o = {};
  n.r(o),
    n.d(o, {
      hasBrowserEnv: () => ct,
      hasStandardBrowserEnv: () => dt,
      hasStandardBrowserWebWorkerEnv: () => pt,
      navigator: () => ft,
      origin: () => ht,
    });
  var a = {};
  n.r(a),
    n.d(a, {
      Decoder: () => qr,
      Encoder: () => Ur,
      PacketType: () => Mr,
      protocol: () => Ir,
    });
  var i = n(540),
    l = n(338),
    s = n(72),
    u = n.n(s),
    c = n(825),
    f = n.n(c),
    d = n(659),
    p = n.n(d),
    h = n(56),
    m = n.n(h),
    g = n(159),
    y = n.n(g),
    b = n(113),
    v = n.n(b),
    w = n(52),
    k = {};
  (k.styleTagTransform = v()),
    (k.setAttributes = m()),
    (k.insert = p().bind(null, "head")),
    (k.domAPI = f()),
    (k.insertStyleElement = y()),
    u()(w.A, k),
    w.A && w.A.locals && w.A.locals;
  const S = (...e) =>
    e
      .filter((e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t)
      .join(" ")
      .trim();
  var x = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const E = (0, i.forwardRef)(
      (
        {
          color: e = "currentColor",
          size: t = 24,
          strokeWidth: n = 2,
          absoluteStrokeWidth: r,
          className: o = "",
          children: a,
          iconNode: l,
          ...s
        },
        u
      ) =>
        (0, i.createElement)(
          "svg",
          {
            ref: u,
            ...x,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? (24 * Number(n)) / Number(t) : n,
            className: S("lucide", o),
            ...s,
          },
          [
            ...l.map(([e, t]) => (0, i.createElement)(e, t)),
            ...(Array.isArray(a) ? a : [a]),
          ]
        )
    ),
    _ = (e, t) => {
      const n = (0, i.forwardRef)(({ className: n, ...r }, o) => {
        return (0, i.createElement)(E, {
          ref: o,
          iconNode: t,
          className: S(
            `lucide-${
              ((a = e), a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())
            }`,
            n
          ),
          ...r,
        });
        var a;
      });
      return (n.displayName = `${e}`), n;
    },
    C = _("Smile", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
      ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
      ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
    ]),
    N = _("Paperclip", [
      ["path", { d: "M13.234 20.252 21 12.3", key: "1cbrk9" }],
      [
        "path",
        {
          d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",
          key: "1pkts6",
        },
      ],
    ]),
    O = _("Mic", [
      [
        "path",
        {
          d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
          key: "131961",
        },
      ],
      ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
      ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
    ]),
    T = _("Send", [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
          key: "1ffxy3",
        },
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
    ]);
  var A = n(24),
    L = {};
  (L.styleTagTransform = v()),
    (L.setAttributes = m()),
    (L.insert = p().bind(null, "head")),
    (L.domAPI = f()),
    (L.insertStyleElement = y()),
    u()(A.A, L),
    A.A && A.A.locals && A.A.locals;
  const P = _("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]);
  var R = n(353),
    z = {};
  function j(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var r,
            o,
            a,
            i,
            l = [],
            s = !0,
            u = !1;
          try {
            if (((a = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              s = !1;
            } else
              for (
                ;
                !(s = (r = a.call(n)).done) &&
                (l.push(r.value), l.length !== t);
                s = !0
              );
          } catch (e) {
            (u = !0), (o = e);
          } finally {
            try {
              if (!s && null != n.return && ((i = n.return()), Object(i) !== i))
                return;
            } finally {
              if (u) throw o;
            }
          }
          return l;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return F(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? F(e, t)
              : void 0
          );
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function F(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function D(e) {
    var t = e.onCancel,
      n = e.onSend,
      r = j((0, i.useState)(null), 2),
      o = r[0],
      a = r[1],
      l = j((0, i.useState)(null), 2),
      s = (l[0], l[1]);
    return i.createElement(
      "div",
      { className: "image-attachment" },
      i.createElement(
        "div",
        { className: "image-attachment-header" },
        i.createElement("span", null, "Image Attachment"),
        i.createElement(
          "button",
          {
            className: "image-attachment-close",
            onClick: t,
            "aria-label": "Cancel attachment",
          },
          i.createElement(P, { size: 16 })
        )
      ),
      o
        ? i.createElement(
            "div",
            { className: "image-attachment-preview" },
            i.createElement("img", {
              src: o || "/placeholder.svg",
              alt: "Preview",
            }),
            i.createElement(
              "div",
              { className: "image-attachment-actions" },
              i.createElement(
                "button",
                { className: "image-attachment-cancel", onClick: t },
                "Cancel"
              ),
              i.createElement(
                "button",
                {
                  className: "image-attachment-send",
                  onClick: function () {
                    o && n(o);
                  },
                },
                "Send Image"
              )
            )
          )
        : i.createElement(
            "div",
            { className: "image-attachment-upload" },
            i.createElement(
              "label",
              { className: "image-upload-label" },
              i.createElement("input", {
                type: "file",
                accept: "image/*",
                onChange: function (e) {
                  var t,
                    n =
                      null === (t = e.target.files) || void 0 === t
                        ? void 0
                        : t[0];
                  if (n)
                    if (n.type.startsWith("image/")) {
                      s(n);
                      var r = new FileReader();
                      (r.onload = function (e) {
                        var t;
                        null !== (t = e.target) &&
                          void 0 !== t &&
                          t.result &&
                          a(e.target.result);
                      }),
                        r.readAsDataURL(n);
                    } else alert("Please select an image file");
                },
                className: "image-upload-input",
              }),
              i.createElement(
                "div",
                { className: "image-upload-placeholder" },
                i.createElement("span", null, "Click to select an image"),
                i.createElement(
                  "span",
                  { className: "image-upload-hint" },
                  "JPG, PNG, GIF up to 5MB"
                )
              )
            )
          )
    );
  }
  (z.styleTagTransform = v()),
    (z.setAttributes = m()),
    (z.insert = p().bind(null, "head")),
    (z.domAPI = f()),
    (z.insertStyleElement = y()),
    u()(R.A, z),
    R.A && R.A.locals && R.A.locals;
  const I = _("Square", [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
  ]);
  var M = n(854),
    U = {};
  function B(e) {
    return (
      (B =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      B(e)
    );
  }
  function q() {
    q = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value;
        },
      a = "function" == typeof Symbol ? Symbol : {},
      i = a.iterator || "@@iterator",
      l = a.asyncIterator || "@@asyncIterator",
      s = a.toStringTag || "@@toStringTag";
    function u(e, t, n) {
      return (
        Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      );
    }
    try {
      u({}, "");
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function c(e, t, n, r) {
      var a = t && t.prototype instanceof y ? t : y,
        i = Object.create(a.prototype),
        l = new A(r || []);
      return o(i, "_invoke", { value: C(e, n, l) }), i;
    }
    function f(e, t, n) {
      try {
        return { type: "normal", arg: e.call(t, n) };
      } catch (e) {
        return { type: "throw", arg: e };
      }
    }
    t.wrap = c;
    var d = "suspendedStart",
      p = "suspendedYield",
      h = "executing",
      m = "completed",
      g = {};
    function y() {}
    function b() {}
    function v() {}
    var w = {};
    u(w, i, function () {
      return this;
    });
    var k = Object.getPrototypeOf,
      S = k && k(k(L([])));
    S && S !== n && r.call(S, i) && (w = S);
    var x = (v.prototype = y.prototype = Object.create(w));
    function E(e) {
      ["next", "throw", "return"].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function _(e, t) {
      function n(o, a, i, l) {
        var s = f(e[o], e, a);
        if ("throw" !== s.type) {
          var u = s.arg,
            c = u.value;
          return c && "object" == B(c) && r.call(c, "__await")
            ? t.resolve(c.__await).then(
                function (e) {
                  n("next", e, i, l);
                },
                function (e) {
                  n("throw", e, i, l);
                }
              )
            : t.resolve(c).then(
                function (e) {
                  (u.value = e), i(u);
                },
                function (e) {
                  return n("throw", e, i, l);
                }
              );
        }
        l(s.arg);
      }
      var a;
      o(this, "_invoke", {
        value: function (e, r) {
          function o() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (a = a ? a.then(o, o) : o());
        },
      });
    }
    function C(t, n, r) {
      var o = d;
      return function (a, i) {
        if (o === h) throw Error("Generator is already running");
        if (o === m) {
          if ("throw" === a) throw i;
          return { value: e, done: !0 };
        }
        for (r.method = a, r.arg = i; ; ) {
          var l = r.delegate;
          if (l) {
            var s = N(l, r);
            if (s) {
              if (s === g) continue;
              return s;
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;
          else if ("throw" === r.method) {
            if (o === d) throw ((o = m), r.arg);
            r.dispatchException(r.arg);
          } else "return" === r.method && r.abrupt("return", r.arg);
          o = h;
          var u = f(t, n, r);
          if ("normal" === u.type) {
            if (((o = r.done ? m : p), u.arg === g)) continue;
            return { value: u.arg, done: r.done };
          }
          "throw" === u.type &&
            ((o = m), (r.method = "throw"), (r.arg = u.arg));
        }
      };
    }
    function N(t, n) {
      var r = n.method,
        o = t.iterator[r];
      if (o === e)
        return (
          (n.delegate = null),
          ("throw" === r &&
            t.iterator.return &&
            ((n.method = "return"),
            (n.arg = e),
            N(t, n),
            "throw" === n.method)) ||
            ("return" !== r &&
              ((n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a '" + r + "' method"
              )))),
          g
        );
      var a = f(o, t.iterator, n.arg);
      if ("throw" === a.type)
        return (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), g;
      var i = a.arg;
      return i
        ? i.done
          ? ((n[t.resultName] = i.value),
            (n.next = t.nextLoc),
            "return" !== n.method && ((n.method = "next"), (n.arg = e)),
            (n.delegate = null),
            g)
          : i
        : ((n.method = "throw"),
          (n.arg = new TypeError("iterator result is not an object")),
          (n.delegate = null),
          g);
    }
    function O(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function T(e) {
      var t = e.completion || {};
      (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function A(e) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        e.forEach(O, this),
        this.reset(!0);
    }
    function L(t) {
      if (t || "" === t) {
        var n = t[i];
        if (n) return n.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            a = function n() {
              for (; ++o < t.length; )
                if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
              return (n.value = e), (n.done = !0), n;
            };
          return (a.next = a);
        }
      }
      throw new TypeError(B(t) + " is not iterable");
    }
    return (
      (b.prototype = v),
      o(x, "constructor", { value: v, configurable: !0 }),
      o(v, "constructor", { value: b, configurable: !0 }),
      (b.displayName = u(v, s, "GeneratorFunction")),
      (t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return (
          !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
        );
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, v)
            : ((e.__proto__ = v), u(e, s, "GeneratorFunction")),
          (e.prototype = Object.create(x)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      E(_.prototype),
      u(_.prototype, l, function () {
        return this;
      }),
      (t.AsyncIterator = _),
      (t.async = function (e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new _(c(e, n, r, o), a);
        return t.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      E(x),
      u(x, s, "Generator"),
      u(x, i, function () {
        return this;
      }),
      u(x, "toString", function () {
        return "[object Generator]";
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.push(r);
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in t) return (e.value = r), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (t.values = L),
      (A.prototype = {
        constructor: A,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = e),
            this.tryEntries.forEach(T),
            !t)
          )
            for (var n in this)
              "t" === n.charAt(0) &&
                r.call(this, n) &&
                !isNaN(+n.slice(1)) &&
                (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function o(r, o) {
            return (
              (l.type = "throw"),
              (l.arg = t),
              (n.next = r),
              o && ((n.method = "next"), (n.arg = e)),
              !!o
            );
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var i = this.tryEntries[a],
              l = i.completion;
            if ("root" === i.tryLoc) return o("end");
            if (i.tryLoc <= this.prev) {
              var s = r.call(i, "catchLoc"),
                u = r.call(i, "finallyLoc");
              if (s && u) {
                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return o(i.finallyLoc);
              } else if (s) {
                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
              } else {
                if (!u) throw Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return o(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (
              o.tryLoc <= this.prev &&
              r.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var a = o;
              break;
            }
          }
          a &&
            ("break" === e || "continue" === e) &&
            a.tryLoc <= t &&
            t <= a.finallyLoc &&
            (a = null);
          var i = a ? a.completion : {};
          return (
            (i.type = e),
            (i.arg = t),
            a
              ? ((this.method = "next"), (this.next = a.finallyLoc), g)
              : this.complete(i)
          );
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return (
            "break" === e.type || "continue" === e.type
              ? (this.next = e.arg)
              : "return" === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === e.type && t && (this.next = t),
            g
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e)
              return this.complete(n.completion, n.afterLoc), T(n), g;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ("throw" === r.type) {
                var o = r.arg;
                T(n);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (t, n, r) {
          return (
            (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
            "next" === this.method && (this.arg = e),
            g
          );
        },
      }),
      t
    );
  }
  function V(e, t, n, r, o, a, i) {
    try {
      var l = e[a](i),
        s = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(s) : Promise.resolve(s).then(r, o);
  }
  function H(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var a = e.apply(t, n);
        function i(e) {
          V(a, r, o, i, l, "next", e);
        }
        function l(e) {
          V(a, r, o, i, l, "throw", e);
        }
        i(void 0);
      });
    };
  }
  function $(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var r,
            o,
            a,
            i,
            l = [],
            s = !0,
            u = !1;
          try {
            if (((a = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              s = !1;
            } else
              for (
                ;
                !(s = (r = a.call(n)).done) &&
                (l.push(r.value), l.length !== t);
                s = !0
              );
          } catch (e) {
            (u = !0), (o = e);
          } finally {
            try {
              if (!s && null != n.return && ((i = n.return()), Object(i) !== i))
                return;
            } finally {
              if (u) throw o;
            }
          }
          return l;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return W(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? W(e, t)
              : void 0
          );
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function W(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function Q(e) {
    var t = e.onCancel,
      n = e.onSend,
      r = $((0, i.useState)(!1), 2),
      o = r[0],
      a = r[1],
      l = $((0, i.useState)(0), 2),
      s = l[0],
      u = l[1],
      c = $((0, i.useState)(null), 2),
      f = c[0],
      d = c[1],
      p = (0, i.useRef)(null),
      h = (0, i.useRef)([]),
      m = (0, i.useRef)(null),
      g = (0, i.useRef)(null);
    (0, i.useEffect)(function () {
      var e = (function () {
        var e = H(
          q().mark(function e() {
            return q().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), k();
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
      return (
        e(),
        function () {
          w();
        }
      );
    }, []);
    var y,
      b,
      v,
      w = function () {
        if (
          (m.current &&
            (console.log("clearing interval"),
            clearInterval(m.current),
            (m.current = null)),
          p.current && "recording" === p.current.state)
        )
          try {
            p.current.stop();
          } catch (e) {
            console.error("Error stopping media recorder:", e);
          }
        g.current &&
          (g.current.getTracks().forEach(function (e) {
            e.stop();
          }),
          (g.current = null)),
          u(0),
          a(!1);
      },
      k = (function () {
        var e = H(
          q().mark(function e() {
            var n, r, o;
            return q().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        console.log("started recording"),
                        (e.prev = 1),
                        w(),
                        u(0),
                        (e.next = 6),
                        navigator.mediaDevices.getUserMedia({ audio: !0 })
                      );
                    case 6:
                      (n = e.sent),
                        (g.current = n),
                        (r = new MediaRecorder(n, {
                          mimeType: "audio/webm;codecs=opus",
                          audioBitsPerSecond: 128e3,
                        })),
                        (p.current = r),
                        (h.current = []),
                        (r.ondataavailable = function (e) {
                          e.data && e.data.size > 0 && h.current.push(e.data);
                        }),
                        (r.onstop = function () {
                          if ((a(!1), u(0), h.current.length > 0)) {
                            var e = new Blob(h.current, { type: "audio/webm" });
                            d(e);
                          }
                        }),
                        r.start(),
                        a(!0),
                        (o = Date.now()),
                        m.current ||
                          (m.current = setInterval(function () {
                            console.log("Started recording timer"),
                              u(Math.floor((Date.now() - o) / 1e3));
                          }, 1e3)),
                        (e.next = 23);
                      break;
                    case 19:
                      (e.prev = 19),
                        (e.t0 = e.catch(1)),
                        console.error("Error accessing microphone:", e.t0),
                        t();
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 19]]
            );
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      S = function () {
        w(), t();
      };
    return i.createElement(
      "div",
      { className: "audio-recorder" },
      i.createElement(
        "div",
        { className: "audio-recorder-header" },
        i.createElement(
          "span",
          null,
          o ? "Recording..." : "Recording Complete"
        ),
        i.createElement(
          "button",
          {
            className: "audio-recorder-close",
            onClick: S,
            "aria-label": "Cancel recording",
          },
          i.createElement(P, { size: 16 })
        )
      ),
      i.createElement(
        "div",
        { className: "audio-recorder-content" },
        i.createElement(
          "div",
          { className: "audio-recorder-timer" },
          ((y = s),
          (b = Math.floor(y / 60)),
          (v = y % 60),
          ""
            .concat(b.toString().padStart(2, "0"), ":")
            .concat(v.toString().padStart(2, "0")))
        ),
        o
          ? i.createElement(
              "div",
              { className: "audio-recorder-visualizer" },
              i.createElement("div", { className: "audio-wave" }),
              i.createElement("div", { className: "audio-wave" }),
              i.createElement("div", { className: "audio-wave" }),
              i.createElement("div", { className: "audio-wave" }),
              i.createElement("div", { className: "audio-wave" })
            )
          : f &&
              i.createElement("audio", {
                src: URL.createObjectURL(f),
                controls: !0,
                className: "audio-recorder-preview",
              })
      ),
      i.createElement(
        "div",
        { className: "audio-recorder-actions" },
        o
          ? i.createElement(
              "button",
              {
                className: "audio-recorder-stop",
                onClick: function () {
                  if (o) {
                    if (
                      (m.current &&
                        (clearInterval(m.current), (m.current = null), u(0)),
                      a(!1),
                      p.current && "recording" === p.current.state)
                    )
                      try {
                        p.current.requestData(), p.current.stop();
                      } catch (e) {
                        console.error("Error stopping recording:", e);
                      }
                    g.current &&
                      (g.current.getTracks().forEach(function (e) {
                        return e.stop();
                      }),
                      (g.current = null));
                  }
                },
                "aria-label": "Stop recording",
              },
              i.createElement(I, { size: 16 }),
              i.createElement("span", null, "Stop")
            )
          : i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "button",
                { className: "audio-recorder-cancel", onClick: S },
                "Cancel"
              ),
              i.createElement(
                "button",
                {
                  className: "audio-recorder-send",
                  onClick: function () {
                    f && (n(f), w());
                  },
                  disabled: !f,
                },
                i.createElement(T, { size: 16 }),
                i.createElement("span", null, "Send")
              )
            )
      )
    );
  }
  (U.styleTagTransform = v()),
    (U.setAttributes = m()),
    (U.insert = p().bind(null, "head")),
    (U.domAPI = f()),
    (U.insertStyleElement = y()),
    u()(M.A, U),
    M.A && M.A.locals && M.A.locals;
  var K = n(422),
    G = {};
  (G.styleTagTransform = v()),
    (G.setAttributes = m()),
    (G.insert = p().bind(null, "head")),
    (G.domAPI = f()),
    (G.insertStyleElement = y()),
    u()(K.A, G),
    K.A && K.A.locals && K.A.locals;
  var Y = [
    {
      name: "Smileys",
      emojis: [
        "😀",
        "😃",
        "😄",
        "😁",
        "😆",
        "😅",
        "😂",
        "🤣",
        "😊",
        "😇",
        "🙂",
        "🙃",
        "😉",
        "😌",
        "😍",
        "🥰",
        "😘",
      ],
    },
    {
      name: "Gestures",
      emojis: [
        "👍",
        "👎",
        "👌",
        "✌️",
        "🤞",
        "🤟",
        "🤘",
        "🤙",
        "👈",
        "👉",
        "👆",
        "👇",
        "☝️",
        "✋",
        "🤚",
        "🖐️",
        "🖖",
      ],
    },
    {
      name: "Objects",
      emojis: [
        "❤️",
        "🧡",
        "💛",
        "💚",
        "💙",
        "💜",
        "🖤",
        "💔",
        "💯",
        "💢",
        "💥",
        "💫",
        "💦",
        "💨",
        "🕳️",
        "💣",
        "💬",
      ],
    },
  ];
  function X(e) {
    var t = e.onEmojiSelect,
      n = e.onClose,
      r = (0, i.useRef)(null);
    return (
      (0, i.useEffect)(
        function () {
          var e = function (e) {
            r.current && !r.current.contains(e.target) && n();
          };
          return (
            document.addEventListener("mousedown", e),
            function () {
              document.removeEventListener("mousedown", e);
            }
          );
        },
        [n]
      ),
      i.createElement(
        "div",
        { className: "emoji-picker", ref: r },
        i.createElement(
          "div",
          { className: "emoji-picker-header" },
          i.createElement("span", null, "Emojis")
        ),
        i.createElement(
          "div",
          { className: "emoji-picker-content" },
          Y.map(function (e) {
            return i.createElement(
              "div",
              { key: e.name, className: "emoji-category" },
              i.createElement(
                "div",
                { className: "emoji-category-title" },
                e.name
              ),
              i.createElement(
                "div",
                { className: "emoji-grid" },
                e.emojis.map(function (e, r) {
                  return i.createElement(
                    "button",
                    {
                      key: r,
                      className: "emoji-item",
                      onClick: function () {
                        return (function (e) {
                          t(e), n();
                        })(e);
                      },
                      "aria-label": "Emoji ".concat(e),
                    },
                    e
                  );
                })
              )
            );
          })
        )
      )
    );
  }
  function J(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var r,
            o,
            a,
            i,
            l = [],
            s = !0,
            u = !1;
          try {
            if (((a = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              s = !1;
            } else
              for (
                ;
                !(s = (r = a.call(n)).done) &&
                (l.push(r.value), l.length !== t);
                s = !0
              );
          } catch (e) {
            (u = !0), (o = e);
          } finally {
            try {
              if (!s && null != n.return && ((i = n.return()), Object(i) !== i))
                return;
            } finally {
              if (u) throw o;
            }
          }
          return l;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Z(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Z(e, t)
              : void 0
          );
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Z(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function ee(e) {
    var t = e.inputRef,
      n = e.onSendMessage,
      r = J((0, i.useState)(""), 2),
      o = r[0],
      a = r[1],
      l = J((0, i.useState)(!1), 2),
      s = l[0],
      u = l[1],
      c = J((0, i.useState)(!1), 2),
      f = c[0],
      d = c[1],
      p = J((0, i.useState)(!1), 2),
      h = p[0],
      m = p[1],
      g = J((0, i.useState)(null), 2),
      y = (g[0], g[1]),
      b = J((0, i.useState)(null), 2),
      v = (b[0], b[1]),
      w = function (e, t) {
        "image" === e && t
          ? (n("", "image", t), y(null))
          : "audio" === e && t
          ? (n("", "audio", URL.createObjectURL(t)), v(null))
          : o.trim() && (console.log("message", o), n(o, "text"), a("")),
          d(!1),
          m(!1);
      },
      k = s || f || h;
    return i.createElement(
      "div",
      { className: "chat-widget-input-wrapper" },
      s &&
        i.createElement(X, {
          onEmojiSelect: function (e) {
            var n;
            a(function (t) {
              return t + e;
            }),
              u(!1),
              null === (n = t.current) || void 0 === n || n.focus();
          },
          onClose: function () {
            return u(!1);
          },
        }),
      f &&
        i.createElement(D, {
          onCancel: function () {
            return d(!1);
          },
          onSend: function (e) {
            w("image", e), d(!1);
          },
        }),
      h &&
        i.createElement(Q, {
          onCancel: function () {
            return m(!1);
          },
          onSend: function (e) {
            w("audio", e), m(!1);
          },
        }),
      !k &&
        i.createElement(
          "form",
          { className: "chat-widget-input-container" },
          i.createElement(
            "div",
            { className: "chat-widget-input-actions" },
            i.createElement(
              "button",
              {
                type: "button",
                className: "chat-widget-input-action",
                "aria-label": "Add emoji",
                onClick: function () {
                  return u(!0);
                },
              },
              i.createElement(C, { size: 20 })
            ),
            i.createElement(
              "button",
              {
                type: "button",
                className: "chat-widget-input-action",
                "aria-label": "Attach file",
                onClick: function () {
                  return d(!0);
                },
              },
              i.createElement(N, { size: 20 })
            ),
            i.createElement(
              "button",
              {
                type: "button",
                className: "chat-widget-input-action",
                "aria-label": "Voice message",
                onClick: function () {
                  return m(!0);
                },
              },
              i.createElement(O, { size: 20 })
            )
          ),
          i.createElement(
            "div",
            { className: "chat-widget-input-field" },
            i.createElement("input", {
              ref: t,
              type: "text",
              placeholder: "Compose your message...",
              value: o,
              onChange: function (e) {
                return a(e.target.value);
              },
            }),
            i.createElement(
              "button",
              {
                className: "chat-widget-send-button",
                disabled: !o.trim(),
                "aria-label": "Send message",
                onClick: function () {
                  return w();
                },
              },
              i.createElement(T, { size: 18 })
            )
          ),
          i.createElement(
            "div",
            { className: "chat-widget-branding" },
            i.createElement(
              "span",
              null,
              "Powered by",
              " ",
              i.createElement(
                "a",
                {
                  href: "https://supportly.site",
                  target: "_blank",
                  className: "chat-widget-brand-name",
                },
                "Supportly"
              )
            )
          )
        )
    );
  }
  var te = n(924),
    ne = {};
  (ne.styleTagTransform = v()),
    (ne.setAttributes = m()),
    (ne.insert = p().bind(null, "head")),
    (ne.domAPI = f()),
    (ne.insertStyleElement = y()),
    u()(te.A, ne),
    te.A && te.A.locals && te.A.locals;
  var re = "http://localhost:3000/api",
    oe = "http://localhost:3000";
  function ae(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: ie } = Object.prototype,
    { getPrototypeOf: le } = Object,
    se = ((e) => (t) => {
      const n = ie.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    ue = (e) => ((e = e.toLowerCase()), (t) => se(t) === e),
    ce = (e) => (t) => typeof t === e,
    { isArray: fe } = Array,
    de = ce("undefined"),
    pe = ue("ArrayBuffer"),
    he = ce("string"),
    me = ce("function"),
    ge = ce("number"),
    ye = (e) => null !== e && "object" == typeof e,
    be = (e) => {
      if ("object" !== se(e)) return !1;
      const t = le(e);
      return !(
        (null !== t &&
          t !== Object.prototype &&
          null !== Object.getPrototypeOf(t)) ||
        Symbol.toStringTag in e ||
        Symbol.iterator in e
      );
    },
    ve = ue("Date"),
    we = ue("File"),
    ke = ue("Blob"),
    Se = ue("FileList"),
    xe = ue("URLSearchParams"),
    [Ee, _e, Ce, Ne] = ["ReadableStream", "Request", "Response", "Headers"].map(
      ue
    );
  function Oe(e, t, { allOwnKeys: n = !1 } = {}) {
    if (null == e) return;
    let r, o;
    if (("object" != typeof e && (e = [e]), fe(e)))
      for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
    else {
      const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
        a = o.length;
      let i;
      for (r = 0; r < a; r++) (i = o[r]), t.call(null, e[i], i, e);
    }
  }
  function Te(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      o = n.length;
    for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
    return null;
  }
  const Ae =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : global,
    Le = (e) => !de(e) && e !== Ae,
    Pe =
      ((Re = "undefined" != typeof Uint8Array && le(Uint8Array)),
      (e) => Re && e instanceof Re);
  var Re;
  const ze = ue("HTMLFormElement"),
    je = (
      ({ hasOwnProperty: e }) =>
      (t, n) =>
        e.call(t, n)
    )(Object.prototype),
    Fe = ue("RegExp"),
    De = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      Oe(n, (n, o) => {
        let a;
        !1 !== (a = t(n, o, e)) && (r[o] = a || n);
      }),
        Object.defineProperties(e, r);
    },
    Ie = ue("AsyncFunction"),
    Me =
      ((Ue = "function" == typeof setImmediate),
      (Be = me(Ae.postMessage)),
      Ue
        ? setImmediate
        : Be
        ? ((qe = `axios@${Math.random()}`),
          (Ve = []),
          Ae.addEventListener(
            "message",
            ({ source: e, data: t }) => {
              e === Ae && t === qe && Ve.length && Ve.shift()();
            },
            !1
          ),
          (e) => {
            Ve.push(e), Ae.postMessage(qe, "*");
          })
        : (e) => setTimeout(e));
  var Ue, Be, qe, Ve;
  const He =
      "undefined" != typeof queueMicrotask
        ? queueMicrotask.bind(Ae)
        : ("undefined" != typeof process && process.nextTick) || Me,
    $e = {
      isArray: fe,
      isArrayBuffer: pe,
      isBuffer: function (e) {
        return (
          null !== e &&
          !de(e) &&
          null !== e.constructor &&
          !de(e.constructor) &&
          me(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: (e) => {
        let t;
        return (
          e &&
          (("function" == typeof FormData && e instanceof FormData) ||
            (me(e.append) &&
              ("formdata" === (t = se(e)) ||
                ("object" === t &&
                  me(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && pe(e.buffer)),
          t
        );
      },
      isString: he,
      isNumber: ge,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: ye,
      isPlainObject: be,
      isReadableStream: Ee,
      isRequest: _e,
      isResponse: Ce,
      isHeaders: Ne,
      isUndefined: de,
      isDate: ve,
      isFile: we,
      isBlob: ke,
      isRegExp: Fe,
      isFunction: me,
      isStream: (e) => ye(e) && me(e.pipe),
      isURLSearchParams: xe,
      isTypedArray: Pe,
      isFileList: Se,
      forEach: Oe,
      merge: function e() {
        const { caseless: t } = (Le(this) && this) || {},
          n = {},
          r = (r, o) => {
            const a = (t && Te(n, o)) || o;
            be(n[a]) && be(r)
              ? (n[a] = e(n[a], r))
              : be(r)
              ? (n[a] = e({}, r))
              : fe(r)
              ? (n[a] = r.slice())
              : (n[a] = r);
          };
        for (let e = 0, t = arguments.length; e < t; e++)
          arguments[e] && Oe(arguments[e], r);
        return n;
      },
      extend: (e, t, n, { allOwnKeys: r } = {}) => (
        Oe(
          t,
          (t, r) => {
            n && me(t) ? (e[r] = ae(t, n)) : (e[r] = t);
          },
          { allOwnKeys: r }
        ),
        e
      ),
      trim: (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          n && Object.assign(e.prototype, n);
      },
      toFlatObject: (e, t, n, r) => {
        let o, a, i;
        const l = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
            (i = o[a]),
              (r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0));
          e = !1 !== n && le(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: se,
      kindOfTest: ue,
      endsWith: (e, t, n) => {
        (e = String(e)),
          (void 0 === n || n > e.length) && (n = e.length),
          (n -= t.length);
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (fe(e)) return e;
        let t = e.length;
        if (!ge(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: ze,
      hasOwnProperty: je,
      hasOwnProp: je,
      reduceDescriptors: De,
      freezeMethods: (e) => {
        De(e, (t, n) => {
          if (me(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
            return !1;
          const r = e[n];
          me(r) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return fe(e) ? r(e) : r(String(e).split(t)), n;
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) =>
        null != e && Number.isFinite((e = +e)) ? e : t,
      findKey: Te,
      global: Ae,
      isContextDefined: Le,
      isSpecCompliantForm: function (e) {
        return !!(
          e &&
          me(e.append) &&
          "FormData" === e[Symbol.toStringTag] &&
          e[Symbol.iterator]
        );
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          n = (e, r) => {
            if (ye(e)) {
              if (t.indexOf(e) >= 0) return;
              if (!("toJSON" in e)) {
                t[r] = e;
                const o = fe(e) ? [] : {};
                return (
                  Oe(e, (e, t) => {
                    const a = n(e, r + 1);
                    !de(a) && (o[t] = a);
                  }),
                  (t[r] = void 0),
                  o
                );
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: Ie,
      isThenable: (e) => e && (ye(e) || me(e)) && me(e.then) && me(e.catch),
      setImmediate: Me,
      asap: He,
    };
  function We(e, t, n, r, o) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      o && ((this.response = o), (this.status = o.status ? o.status : null));
  }
  $e.inherits(We, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: $e.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const Qe = We.prototype,
    Ke = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    Ke[e] = { value: e };
  }),
    Object.defineProperties(We, Ke),
    Object.defineProperty(Qe, "isAxiosError", { value: !0 }),
    (We.from = (e, t, n, r, o, a) => {
      const i = Object.create(Qe);
      return (
        $e.toFlatObject(
          e,
          i,
          function (e) {
            return e !== Error.prototype;
          },
          (e) => "isAxiosError" !== e
        ),
        We.call(i, e.message, t, n, r, o),
        (i.cause = e),
        (i.name = e.name),
        a && Object.assign(i, a),
        i
      );
    });
  const Ge = We;
  function Ye(e) {
    return $e.isPlainObject(e) || $e.isArray(e);
  }
  function Xe(e) {
    return $e.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Je(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = Xe(e)), !n && t ? "[" + e + "]" : e;
          })
          .join(n ? "." : "")
      : t;
  }
  const Ze = $e.toFlatObject($e, {}, null, function (e) {
      return /^is[A-Z]/.test(e);
    }),
    et = function (e, t, n) {
      if (!$e.isObject(e)) throw new TypeError("target must be an object");
      t = t || new FormData();
      const r = (n = $e.toFlatObject(
          n,
          { metaTokens: !0, dots: !1, indexes: !1 },
          !1,
          function (e, t) {
            return !$e.isUndefined(t[e]);
          }
        )).metaTokens,
        o = n.visitor || u,
        a = n.dots,
        i = n.indexes,
        l =
          (n.Blob || ("undefined" != typeof Blob && Blob)) &&
          $e.isSpecCompliantForm(t);
      if (!$e.isFunction(o)) throw new TypeError("visitor must be a function");
      function s(e) {
        if (null === e) return "";
        if ($e.isDate(e)) return e.toISOString();
        if (!l && $e.isBlob(e))
          throw new Ge("Blob is not supported. Use a Buffer instead.");
        return $e.isArrayBuffer(e) || $e.isTypedArray(e)
          ? l && "function" == typeof Blob
            ? new Blob([e])
            : Buffer.from(e)
          : e;
      }
      function u(e, n, o) {
        let l = e;
        if (e && !o && "object" == typeof e)
          if ($e.endsWith(n, "{}"))
            (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
          else if (
            ($e.isArray(e) &&
              (function (e) {
                return $e.isArray(e) && !e.some(Ye);
              })(e)) ||
            (($e.isFileList(e) || $e.endsWith(n, "[]")) && (l = $e.toArray(e)))
          )
            return (
              (n = Xe(n)),
              l.forEach(function (e, r) {
                !$e.isUndefined(e) &&
                  null !== e &&
                  t.append(
                    !0 === i ? Je([n], r, a) : null === i ? n : n + "[]",
                    s(e)
                  );
              }),
              !1
            );
        return !!Ye(e) || (t.append(Je(o, n, a), s(e)), !1);
      }
      const c = [],
        f = Object.assign(Ze, {
          defaultVisitor: u,
          convertValue: s,
          isVisitable: Ye,
        });
      if (!$e.isObject(e)) throw new TypeError("data must be an object");
      return (
        (function e(n, r) {
          if (!$e.isUndefined(n)) {
            if (-1 !== c.indexOf(n))
              throw Error("Circular reference detected in " + r.join("."));
            c.push(n),
              $e.forEach(n, function (n, a) {
                !0 ===
                  (!($e.isUndefined(n) || null === n) &&
                    o.call(t, n, $e.isString(a) ? a.trim() : a, r, f)) &&
                  e(n, r ? r.concat(a) : [a]);
              }),
              c.pop();
          }
        })(e),
        t
      );
    };
  function tt(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function nt(e, t) {
    (this._pairs = []), e && et(e, this, t);
  }
  const rt = nt.prototype;
  (rt.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (rt.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, tt);
          }
        : tt;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    });
  const ot = nt;
  function at(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function it(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || at;
    $e.isFunction(n) && (n = { serialize: n });
    const o = n && n.serialize;
    let a;
    if (
      ((a = o
        ? o(t, n)
        : $e.isURLSearchParams(t)
        ? t.toString()
        : new ot(t, n).toString(r)),
      a)
    ) {
      const t = e.indexOf("#");
      -1 !== t && (e = e.slice(0, t)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
    }
    return e;
  }
  const lt = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        $e.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    st = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    ut = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" != typeof URLSearchParams ? URLSearchParams : ot,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    ct = "undefined" != typeof window && "undefined" != typeof document,
    ft = ("object" == typeof navigator && navigator) || void 0,
    dt =
      ct &&
      (!ft || ["ReactNative", "NativeScript", "NS"].indexOf(ft.product) < 0),
    pt =
      "undefined" != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" == typeof self.importScripts,
    ht = (ct && window.location.href) || "http://localhost",
    mt = { ...o, ...ut },
    gt = function (e) {
      function t(e, n, r, o) {
        let a = e[o++];
        if ("__proto__" === a) return !0;
        const i = Number.isFinite(+a),
          l = o >= e.length;
        return (
          (a = !a && $e.isArray(r) ? r.length : a),
          l
            ? ($e.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !i)
            : ((r[a] && $e.isObject(r[a])) || (r[a] = []),
              t(e, n, r[a], o) &&
                $e.isArray(r[a]) &&
                (r[a] = (function (e) {
                  const t = {},
                    n = Object.keys(e);
                  let r;
                  const o = n.length;
                  let a;
                  for (r = 0; r < o; r++) (a = n[r]), (t[a] = e[a]);
                  return t;
                })(r[a])),
              !i)
        );
      }
      if ($e.isFormData(e) && $e.isFunction(e.entries)) {
        const n = {};
        return (
          $e.forEachEntry(e, (e, r) => {
            t(
              (function (e) {
                return $e
                  .matchAll(/\w+|\[(\w*)]/g, e)
                  .map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
              })(e),
              r,
              n,
              0
            );
          }),
          n
        );
      }
      return null;
    },
    yt = {
      transitional: st,
      adapter: ["xhr", "http", "fetch"],
      transformRequest: [
        function (e, t) {
          const n = t.getContentType() || "",
            r = n.indexOf("application/json") > -1,
            o = $e.isObject(e);
          if (
            (o && $e.isHTMLForm(e) && (e = new FormData(e)), $e.isFormData(e))
          )
            return r ? JSON.stringify(gt(e)) : e;
          if (
            $e.isArrayBuffer(e) ||
            $e.isBuffer(e) ||
            $e.isStream(e) ||
            $e.isFile(e) ||
            $e.isBlob(e) ||
            $e.isReadableStream(e)
          )
            return e;
          if ($e.isArrayBufferView(e)) return e.buffer;
          if ($e.isURLSearchParams(e))
            return (
              t.setContentType(
                "application/x-www-form-urlencoded;charset=utf-8",
                !1
              ),
              e.toString()
            );
          let a;
          if (o) {
            if (n.indexOf("application/x-www-form-urlencoded") > -1)
              return (function (e, t) {
                return et(
                  e,
                  new mt.classes.URLSearchParams(),
                  Object.assign(
                    {
                      visitor: function (e, t, n, r) {
                        return mt.isNode && $e.isBuffer(e)
                          ? (this.append(t, e.toString("base64")), !1)
                          : r.defaultVisitor.apply(this, arguments);
                      },
                    },
                    t
                  )
                );
              })(e, this.formSerializer).toString();
            if (
              (a = $e.isFileList(e)) ||
              n.indexOf("multipart/form-data") > -1
            ) {
              const t = this.env && this.env.FormData;
              return et(
                a ? { "files[]": e } : e,
                t && new t(),
                this.formSerializer
              );
            }
          }
          return o || r
            ? (t.setContentType("application/json", !1),
              (function (e) {
                if ($e.isString(e))
                  try {
                    return (0, JSON.parse)(e), $e.trim(e);
                  } catch (e) {
                    if ("SyntaxError" !== e.name) throw e;
                  }
                return (0, JSON.stringify)(e);
              })(e))
            : e;
        },
      ],
      transformResponse: [
        function (e) {
          const t = this.transitional || yt.transitional,
            n = t && t.forcedJSONParsing,
            r = "json" === this.responseType;
          if ($e.isResponse(e) || $e.isReadableStream(e)) return e;
          if (e && $e.isString(e) && ((n && !this.responseType) || r)) {
            const n = !(t && t.silentJSONParsing) && r;
            try {
              return JSON.parse(e);
            } catch (e) {
              if (n) {
                if ("SyntaxError" === e.name)
                  throw Ge.from(
                    e,
                    Ge.ERR_BAD_RESPONSE,
                    this,
                    null,
                    this.response
                  );
                throw e;
              }
            }
          }
          return e;
        },
      ],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: mt.classes.FormData, Blob: mt.classes.Blob },
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: {
        common: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": void 0,
        },
      },
    };
  $e.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    yt.headers[e] = {};
  });
  const bt = yt,
    vt = $e.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    wt = Symbol("internals");
  function kt(e) {
    return e && String(e).trim().toLowerCase();
  }
  function St(e) {
    return !1 === e || null == e ? e : $e.isArray(e) ? e.map(St) : String(e);
  }
  function xt(e, t, n, r, o) {
    return $e.isFunction(r)
      ? r.call(this, t, n)
      : (o && (t = n),
        $e.isString(t)
          ? $e.isString(r)
            ? -1 !== t.indexOf(r)
            : $e.isRegExp(r)
            ? r.test(t)
            : void 0
          : void 0);
  }
  class Et {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function o(e, t, n) {
        const o = kt(t);
        if (!o) throw new Error("header name must be a non-empty string");
        const a = $e.findKey(r, o);
        (!a || void 0 === r[a] || !0 === n || (void 0 === n && !1 !== r[a])) &&
          (r[a || t] = St(e));
      }
      const a = (e, t) => $e.forEach(e, (e, n) => o(e, n, t));
      if ($e.isPlainObject(e) || e instanceof this.constructor) a(e, t);
      else if (
        $e.isString(e) &&
        (e = e.trim()) &&
        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
      )
        a(
          ((e) => {
            const t = {};
            let n, r, o;
            return (
              e &&
                e.split("\n").forEach(function (e) {
                  (o = e.indexOf(":")),
                    (n = e.substring(0, o).trim().toLowerCase()),
                    (r = e.substring(o + 1).trim()),
                    !n ||
                      (t[n] && vt[n]) ||
                      ("set-cookie" === n
                        ? t[n]
                          ? t[n].push(r)
                          : (t[n] = [r])
                        : (t[n] = t[n] ? t[n] + ", " + r : r));
                }),
              t
            );
          })(e),
          t
        );
      else if ($e.isHeaders(e)) for (const [t, r] of e.entries()) o(r, t, n);
      else null != e && o(t, e, n);
      return this;
    }
    get(e, t) {
      if ((e = kt(e))) {
        const n = $e.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if ($e.isFunction(t)) return t.call(this, e, n);
          if ($e.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if ((e = kt(e))) {
        const n = $e.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !xt(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function o(e) {
        if ((e = kt(e))) {
          const o = $e.findKey(n, e);
          !o || (t && !xt(0, n[o], o, t)) || (delete n[o], (r = !0));
        }
      }
      return $e.isArray(e) ? e.forEach(o) : o(e), r;
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const o = t[n];
        (e && !xt(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        $e.forEach(this, (r, o) => {
          const a = $e.findKey(n, o);
          if (a) return (t[a] = St(r)), void delete t[o];
          const i = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              })(o)
            : String(o).trim();
          i !== o && delete t[o], (t[i] = St(r)), (n[i] = !0);
        }),
        this
      );
    }
    concat(...e) {
      return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        $e.forEach(this, (n, r) => {
          null != n &&
            !1 !== n &&
            (t[r] = e && $e.isArray(n) ? n.join(", ") : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map(([e, t]) => e + ": " + t)
        .join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e, ...t) {
      const n = new this(e);
      return t.forEach((e) => n.set(e)), n;
    }
    static accessor(e) {
      const t = (this[wt] = this[wt] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = kt(e);
        t[r] ||
          ((function (e, t) {
            const n = $e.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((r) => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, o) {
                  return this[r].call(this, t, e, n, o);
                },
                configurable: !0,
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return $e.isArray(e) ? e.forEach(r) : r(e), this;
    }
  }
  Et.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    $e.reduceDescriptors(Et.prototype, ({ value: e }, t) => {
      let n = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => e,
        set(e) {
          this[n] = e;
        },
      };
    }),
    $e.freezeMethods(Et);
  const _t = Et;
  function Ct(e, t) {
    const n = this || bt,
      r = t || n,
      o = _t.from(r.headers);
    let a = r.data;
    return (
      $e.forEach(e, function (e) {
        a = e.call(n, a, o.normalize(), t ? t.status : void 0);
      }),
      o.normalize(),
      a
    );
  }
  function Nt(e) {
    return !(!e || !e.__CANCEL__);
  }
  function Ot(e, t, n) {
    Ge.call(this, null == e ? "canceled" : e, Ge.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  $e.inherits(Ot, Ge, { __CANCEL__: !0 });
  const Tt = Ot;
  function At(e, t, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status)
      ? t(
          new Ge(
            "Request failed with status code " + n.status,
            [Ge.ERR_BAD_REQUEST, Ge.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n
          )
        )
      : e(n);
  }
  const Lt = (e, t, n = 3) => {
      let r = 0;
      const o = (function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let o,
          a = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            const s = Date.now(),
              u = r[i];
            o || (o = s), (n[a] = l), (r[a] = s);
            let c = i,
              f = 0;
            for (; c !== a; ) (f += n[c++]), (c %= e);
            if (((a = (a + 1) % e), a === i && (i = (i + 1) % e), s - o < t))
              return;
            const d = u && s - u;
            return d ? Math.round((1e3 * f) / d) : void 0;
          }
        );
      })(50, 250);
      return (function (e, t) {
        let n,
          r,
          o = 0,
          a = 1e3 / t;
        const i = (t, a = Date.now()) => {
          (o = a),
            (n = null),
            r && (clearTimeout(r), (r = null)),
            e.apply(null, t);
        };
        return [
          (...e) => {
            const t = Date.now(),
              l = t - o;
            l >= a
              ? i(e, t)
              : ((n = e),
                r ||
                  (r = setTimeout(() => {
                    (r = null), i(n);
                  }, a - l)));
          },
          () => n && i(n),
        ];
      })((n) => {
        const a = n.loaded,
          i = n.lengthComputable ? n.total : void 0,
          l = a - r,
          s = o(l);
        (r = a),
          e({
            loaded: a,
            total: i,
            progress: i ? a / i : void 0,
            bytes: l,
            rate: s || void 0,
            estimated: s && i && a <= i ? (i - a) / s : void 0,
            event: n,
            lengthComputable: null != i,
            [t ? "download" : "upload"]: !0,
          });
      }, n);
    },
    Pt = (e, t) => {
      const n = null != e;
      return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
    },
    Rt =
      (e) =>
      (...t) =>
        $e.asap(() => e(...t)),
    zt = mt.hasStandardBrowserEnv
      ? ((e, t) => (n) => (
          (n = new URL(n, mt.origin)),
          e.protocol === n.protocol &&
            e.host === n.host &&
            (t || e.port === n.port)
        ))(
          new URL(mt.origin),
          mt.navigator && /(msie|trident)/i.test(mt.navigator.userAgent)
        )
      : () => !0,
    jt = mt.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, o, a) {
            const i = [e + "=" + encodeURIComponent(t)];
            $e.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
              $e.isString(r) && i.push("path=" + r),
              $e.isString(o) && i.push("domain=" + o),
              !0 === a && i.push("secure"),
              (document.cookie = i.join("; "));
          },
          read(e) {
            const t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : { write() {}, read: () => null, remove() {} };
  function Ft(e, t, n) {
    let r = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
    return (e && r) || 0 == n
      ? (function (e, t) {
          return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  const Dt = (e) => (e instanceof _t ? { ...e } : e);
  function It(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n, r) {
      return $e.isPlainObject(e) && $e.isPlainObject(t)
        ? $e.merge.call({ caseless: r }, e, t)
        : $e.isPlainObject(t)
        ? $e.merge({}, t)
        : $e.isArray(t)
        ? t.slice()
        : t;
    }
    function o(e, t, n, o) {
      return $e.isUndefined(t)
        ? $e.isUndefined(e)
          ? void 0
          : r(void 0, e, 0, o)
        : r(e, t, 0, o);
    }
    function a(e, t) {
      if (!$e.isUndefined(t)) return r(void 0, t);
    }
    function i(e, t) {
      return $e.isUndefined(t)
        ? $e.isUndefined(e)
          ? void 0
          : r(void 0, e)
        : r(void 0, t);
    }
    function l(n, o, a) {
      return a in t ? r(n, o) : a in e ? r(void 0, n) : void 0;
    }
    const s = {
      url: a,
      method: a,
      data: a,
      baseURL: i,
      transformRequest: i,
      transformResponse: i,
      paramsSerializer: i,
      timeout: i,
      timeoutMessage: i,
      withCredentials: i,
      withXSRFToken: i,
      adapter: i,
      responseType: i,
      xsrfCookieName: i,
      xsrfHeaderName: i,
      onUploadProgress: i,
      onDownloadProgress: i,
      decompress: i,
      maxContentLength: i,
      maxBodyLength: i,
      beforeRedirect: i,
      transport: i,
      httpAgent: i,
      httpsAgent: i,
      cancelToken: i,
      socketPath: i,
      responseEncoding: i,
      validateStatus: l,
      headers: (e, t, n) => o(Dt(e), Dt(t), 0, !0),
    };
    return (
      $e.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
        const a = s[r] || o,
          i = a(e[r], t[r], r);
        ($e.isUndefined(i) && a !== l) || (n[r] = i);
      }),
      n
    );
  }
  const Mt = (e) => {
      const t = It({}, e);
      let n,
        {
          data: r,
          withXSRFToken: o,
          xsrfHeaderName: a,
          xsrfCookieName: i,
          headers: l,
          auth: s,
        } = t;
      if (
        ((t.headers = l = _t.from(l)),
        (t.url = it(Ft(t.baseURL, t.url), e.params, e.paramsSerializer)),
        s &&
          l.set(
            "Authorization",
            "Basic " +
              btoa(
                (s.username || "") +
                  ":" +
                  (s.password ? unescape(encodeURIComponent(s.password)) : "")
              )
          ),
        $e.isFormData(r))
      )
        if (mt.hasStandardBrowserEnv || mt.hasStandardBrowserWebWorkerEnv)
          l.setContentType(void 0);
        else if (!1 !== (n = l.getContentType())) {
          const [e, ...t] = n
            ? n
                .split(";")
                .map((e) => e.trim())
                .filter(Boolean)
            : [];
          l.setContentType([e || "multipart/form-data", ...t].join("; "));
        }
      if (
        mt.hasStandardBrowserEnv &&
        (o && $e.isFunction(o) && (o = o(t)), o || (!1 !== o && zt(t.url)))
      ) {
        const e = a && i && jt.read(i);
        e && l.set(a, e);
      }
      return t;
    },
    Ut =
      "undefined" != typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          const r = Mt(e);
          let o = r.data;
          const a = _t.from(r.headers).normalize();
          let i,
            l,
            s,
            u,
            c,
            { responseType: f, onUploadProgress: d, onDownloadProgress: p } = r;
          function h() {
            u && u(),
              c && c(),
              r.cancelToken && r.cancelToken.unsubscribe(i),
              r.signal && r.signal.removeEventListener("abort", i);
          }
          let m = new XMLHttpRequest();
          function g() {
            if (!m) return;
            const r = _t.from(
              "getAllResponseHeaders" in m && m.getAllResponseHeaders()
            );
            At(
              function (e) {
                t(e), h();
              },
              function (e) {
                n(e), h();
              },
              {
                data:
                  f && "text" !== f && "json" !== f
                    ? m.response
                    : m.responseText,
                status: m.status,
                statusText: m.statusText,
                headers: r,
                config: e,
                request: m,
              }
            ),
              (m = null);
          }
          m.open(r.method.toUpperCase(), r.url, !0),
            (m.timeout = r.timeout),
            "onloadend" in m
              ? (m.onloadend = g)
              : (m.onreadystatechange = function () {
                  m &&
                    4 === m.readyState &&
                    (0 !== m.status ||
                      (m.responseURL &&
                        0 === m.responseURL.indexOf("file:"))) &&
                    setTimeout(g);
                }),
            (m.onabort = function () {
              m &&
                (n(new Ge("Request aborted", Ge.ECONNABORTED, e, m)),
                (m = null));
            }),
            (m.onerror = function () {
              n(new Ge("Network Error", Ge.ERR_NETWORK, e, m)), (m = null);
            }),
            (m.ontimeout = function () {
              let t = r.timeout
                ? "timeout of " + r.timeout + "ms exceeded"
                : "timeout exceeded";
              const o = r.transitional || st;
              r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                n(
                  new Ge(
                    t,
                    o.clarifyTimeoutError ? Ge.ETIMEDOUT : Ge.ECONNABORTED,
                    e,
                    m
                  )
                ),
                (m = null);
            }),
            void 0 === o && a.setContentType(null),
            "setRequestHeader" in m &&
              $e.forEach(a.toJSON(), function (e, t) {
                m.setRequestHeader(t, e);
              }),
            $e.isUndefined(r.withCredentials) ||
              (m.withCredentials = !!r.withCredentials),
            f && "json" !== f && (m.responseType = r.responseType),
            p && (([s, c] = Lt(p, !0)), m.addEventListener("progress", s)),
            d &&
              m.upload &&
              (([l, u] = Lt(d)),
              m.upload.addEventListener("progress", l),
              m.upload.addEventListener("loadend", u)),
            (r.cancelToken || r.signal) &&
              ((i = (t) => {
                m &&
                  (n(!t || t.type ? new Tt(null, e, m) : t),
                  m.abort(),
                  (m = null));
              }),
              r.cancelToken && r.cancelToken.subscribe(i),
              r.signal &&
                (r.signal.aborted
                  ? i()
                  : r.signal.addEventListener("abort", i)));
          const y = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(r.url);
          y && -1 === mt.protocols.indexOf(y)
            ? n(
                new Ge("Unsupported protocol " + y + ":", Ge.ERR_BAD_REQUEST, e)
              )
            : m.send(o || null);
        });
      },
    Bt = (e, t) => {
      const { length: n } = (e = e ? e.filter(Boolean) : []);
      if (t || n) {
        let n,
          r = new AbortController();
        const o = function (e) {
          if (!n) {
            (n = !0), i();
            const t = e instanceof Error ? e : this.reason;
            r.abort(
              t instanceof Ge ? t : new Tt(t instanceof Error ? t.message : t)
            );
          }
        };
        let a =
          t &&
          setTimeout(() => {
            (a = null), o(new Ge(`timeout ${t} of ms exceeded`, Ge.ETIMEDOUT));
          }, t);
        const i = () => {
          e &&
            (a && clearTimeout(a),
            (a = null),
            e.forEach((e) => {
              e.unsubscribe
                ? e.unsubscribe(o)
                : e.removeEventListener("abort", o);
            }),
            (e = null));
        };
        e.forEach((e) => e.addEventListener("abort", o));
        const { signal: l } = r;
        return (l.unsubscribe = () => $e.asap(i)), l;
      }
    },
    qt = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) return void (yield e);
      let r,
        o = 0;
      for (; o < n; ) (r = o + t), yield e.slice(o, r), (o = r);
    },
    Vt = (e, t, n, r) => {
      const o = (async function* (e, t) {
        for await (const n of (async function* (e) {
          if (e[Symbol.asyncIterator]) return void (yield* e);
          const t = e.getReader();
          try {
            for (;;) {
              const { done: e, value: n } = await t.read();
              if (e) break;
              yield n;
            }
          } finally {
            await t.cancel();
          }
        })(e))
          yield* qt(n, t);
      })(e, t);
      let a,
        i = 0,
        l = (e) => {
          a || ((a = !0), r && r(e));
        };
      return new ReadableStream(
        {
          async pull(e) {
            try {
              const { done: t, value: r } = await o.next();
              if (t) return l(), void e.close();
              let a = r.byteLength;
              if (n) {
                let e = (i += a);
                n(e);
              }
              e.enqueue(new Uint8Array(r));
            } catch (e) {
              throw (l(e), e);
            }
          },
          cancel: (e) => (l(e), o.return()),
        },
        { highWaterMark: 2 }
      );
    },
    Ht =
      "function" == typeof fetch &&
      "function" == typeof Request &&
      "function" == typeof Response,
    $t = Ht && "function" == typeof ReadableStream,
    Wt =
      Ht &&
      ("function" == typeof TextEncoder
        ? ((Qt = new TextEncoder()), (e) => Qt.encode(e))
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
  var Qt;
  const Kt = (e, ...t) => {
      try {
        return !!e(...t);
      } catch (e) {
        return !1;
      }
    },
    Gt =
      $t &&
      Kt(() => {
        let e = !1;
        const t = new Request(mt.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type");
        return e && !t;
      }),
    Yt = $t && Kt(() => $e.isReadableStream(new Response("").body)),
    Xt = { stream: Yt && ((e) => e.body) };
  var Jt;
  Ht &&
    ((Jt = new Response()),
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
      !Xt[e] &&
        (Xt[e] = $e.isFunction(Jt[e])
          ? (t) => t[e]()
          : (t, n) => {
              throw new Ge(
                `Response type '${e}' is not supported`,
                Ge.ERR_NOT_SUPPORT,
                n
              );
            });
    }));
  const Zt =
      Ht &&
      (async (e) => {
        let {
          url: t,
          method: n,
          data: r,
          signal: o,
          cancelToken: a,
          timeout: i,
          onDownloadProgress: l,
          onUploadProgress: s,
          responseType: u,
          headers: c,
          withCredentials: f = "same-origin",
          fetchOptions: d,
        } = Mt(e);
        u = u ? (u + "").toLowerCase() : "text";
        let p,
          h = Bt([o, a && a.toAbortSignal()], i);
        const m =
          h &&
          h.unsubscribe &&
          (() => {
            h.unsubscribe();
          });
        let g;
        try {
          if (
            s &&
            Gt &&
            "get" !== n &&
            "head" !== n &&
            0 !==
              (g = await (async (e, t) => {
                const n = $e.toFiniteNumber(e.getContentLength());
                return null == n
                  ? (async (e) => {
                      if (null == e) return 0;
                      if ($e.isBlob(e)) return e.size;
                      if ($e.isSpecCompliantForm(e)) {
                        const t = new Request(mt.origin, {
                          method: "POST",
                          body: e,
                        });
                        return (await t.arrayBuffer()).byteLength;
                      }
                      return $e.isArrayBufferView(e) || $e.isArrayBuffer(e)
                        ? e.byteLength
                        : ($e.isURLSearchParams(e) && (e += ""),
                          $e.isString(e) ? (await Wt(e)).byteLength : void 0);
                    })(t)
                  : n;
              })(c, r))
          ) {
            let e,
              n = new Request(t, { method: "POST", body: r, duplex: "half" });
            if (
              ($e.isFormData(r) &&
                (e = n.headers.get("content-type")) &&
                c.setContentType(e),
              n.body)
            ) {
              const [e, t] = Pt(g, Lt(Rt(s)));
              r = Vt(n.body, 65536, e, t);
            }
          }
          $e.isString(f) || (f = f ? "include" : "omit");
          const o = "credentials" in Request.prototype;
          p = new Request(t, {
            ...d,
            signal: h,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: o ? f : void 0,
          });
          let a = await fetch(p);
          const i = Yt && ("stream" === u || "response" === u);
          if (Yt && (l || (i && m))) {
            const e = {};
            ["status", "statusText", "headers"].forEach((t) => {
              e[t] = a[t];
            });
            const t = $e.toFiniteNumber(a.headers.get("content-length")),
              [n, r] = (l && Pt(t, Lt(Rt(l), !0))) || [];
            a = new Response(
              Vt(a.body, 65536, n, () => {
                r && r(), m && m();
              }),
              e
            );
          }
          u = u || "text";
          let y = await Xt[$e.findKey(Xt, u) || "text"](a, e);
          return (
            !i && m && m(),
            await new Promise((t, n) => {
              At(t, n, {
                data: y,
                headers: _t.from(a.headers),
                status: a.status,
                statusText: a.statusText,
                config: e,
                request: p,
              });
            })
          );
        } catch (t) {
          if (
            (m && m(), t && "TypeError" === t.name && /fetch/i.test(t.message))
          )
            throw Object.assign(new Ge("Network Error", Ge.ERR_NETWORK, e, p), {
              cause: t.cause || t,
            });
          throw Ge.from(t, t && t.code, e, p);
        }
      }),
    en = { http: null, xhr: Ut, fetch: Zt };
  $e.forEach(en, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (e) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const tn = (e) => `- ${e}`,
    nn = (e) => $e.isFunction(e) || null === e || !1 === e,
    rn = (e) => {
      e = $e.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let a = 0; a < t; a++) {
        let t;
        if (
          ((n = e[a]),
          (r = n),
          !nn(n) && ((r = en[(t = String(n)).toLowerCase()]), void 0 === r))
        )
          throw new Ge(`Unknown adapter '${t}'`);
        if (r) break;
        o[t || "#" + a] = r;
      }
      if (!r) {
        const e = Object.entries(o).map(
          ([e, t]) =>
            `adapter ${e} ` +
            (!1 === t
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let n = t
          ? e.length > 1
            ? "since :\n" + e.map(tn).join("\n")
            : " " + tn(e[0])
          : "as no adapter specified";
        throw new Ge(
          "There is no suitable adapter to dispatch the request " + n,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    };
  function on(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new Tt(null, e);
  }
  function an(e) {
    return (
      on(e),
      (e.headers = _t.from(e.headers)),
      (e.data = Ct.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      rn(e.adapter || bt.adapter)(e).then(
        function (t) {
          return (
            on(e),
            (t.data = Ct.call(e, e.transformResponse, t)),
            (t.headers = _t.from(t.headers)),
            t
          );
        },
        function (t) {
          return (
            Nt(t) ||
              (on(e),
              t &&
                t.response &&
                ((t.response.data = Ct.call(
                  e,
                  e.transformResponse,
                  t.response
                )),
                (t.response.headers = _t.from(t.response.headers)))),
            Promise.reject(t)
          );
        }
      )
    );
  }
  const ln = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      ln[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const sn = {};
  (ln.transitional = function (e, t, n) {
    function r(e, t) {
      return (
        "[Axios v1.8.1] Transitional option '" +
        e +
        "'" +
        t +
        (n ? ". " + n : "")
      );
    }
    return (n, o, a) => {
      if (!1 === e)
        throw new Ge(
          r(o, " has been removed" + (t ? " in " + t : "")),
          Ge.ERR_DEPRECATED
        );
      return (
        t &&
          !sn[o] &&
          ((sn[o] = !0),
          console.warn(
            r(
              o,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        !e || e(n, o, a)
      );
    };
  }),
    (ln.spelling = function (e) {
      return (t, n) => (
        console.warn(`${n} is likely a misspelling of ${e}`), !0
      );
    });
  const un = {
      assertOptions: function (e, t, n) {
        if ("object" != typeof e)
          throw new Ge("options must be an object", Ge.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let o = r.length;
        for (; o-- > 0; ) {
          const a = r[o],
            i = t[a];
          if (i) {
            const t = e[a],
              n = void 0 === t || i(t, a, e);
            if (!0 !== n)
              throw new Ge(
                "option " + a + " must be " + n,
                Ge.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== n)
            throw new Ge("Unknown option " + a, Ge.ERR_BAD_OPTION);
        }
      },
      validators: ln,
    },
    cn = un.validators;
  class fn {
    constructor(e) {
      (this.defaults = e),
        (this.interceptors = { request: new lt(), response: new lt() });
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (e) {
        if (e instanceof Error) {
          let t = {};
          Error.captureStackTrace
            ? Error.captureStackTrace(t)
            : (t = new Error());
          const n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
          try {
            e.stack
              ? n &&
                !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) &&
                (e.stack += "\n" + n)
              : (e.stack = n);
          } catch (e) {}
        }
        throw e;
      }
    }
    _request(e, t) {
      "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = It(this.defaults, t));
      const { transitional: n, paramsSerializer: r, headers: o } = t;
      void 0 !== n &&
        un.assertOptions(
          n,
          {
            silentJSONParsing: cn.transitional(cn.boolean),
            forcedJSONParsing: cn.transitional(cn.boolean),
            clarifyTimeoutError: cn.transitional(cn.boolean),
          },
          !1
        ),
        null != r &&
          ($e.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : un.assertOptions(
                r,
                { encode: cn.function, serialize: cn.function },
                !0
              )),
        void 0 !== t.allowAbsoluteUrls ||
          (void 0 !== this.defaults.allowAbsoluteUrls
            ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
            : (t.allowAbsoluteUrls = !0)),
        un.assertOptions(
          t,
          {
            baseUrl: cn.spelling("baseURL"),
            withXsrfToken: cn.spelling("withXSRFToken"),
          },
          !0
        ),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase());
      let a = o && $e.merge(o.common, o[t.method]);
      o &&
        $e.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (e) => {
            delete o[e];
          }
        ),
        (t.headers = _t.concat(a, o));
      const i = [];
      let l = !0;
      this.interceptors.request.forEach(function (e) {
        ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((l = l && e.synchronous), i.unshift(e.fulfilled, e.rejected));
      });
      const s = [];
      let u;
      this.interceptors.response.forEach(function (e) {
        s.push(e.fulfilled, e.rejected);
      });
      let c,
        f = 0;
      if (!l) {
        const e = [an.bind(this), void 0];
        for (
          e.unshift.apply(e, i),
            e.push.apply(e, s),
            c = e.length,
            u = Promise.resolve(t);
          f < c;

        )
          u = u.then(e[f++], e[f++]);
        return u;
      }
      c = i.length;
      let d = t;
      for (f = 0; f < c; ) {
        const e = i[f++],
          t = i[f++];
        try {
          d = e(d);
        } catch (e) {
          t.call(this, e);
          break;
        }
      }
      try {
        u = an.call(this, d);
      } catch (e) {
        return Promise.reject(e);
      }
      for (f = 0, c = s.length; f < c; ) u = u.then(s[f++], s[f++]);
      return u;
    }
    getUri(e) {
      return it(
        Ft((e = It(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      );
    }
  }
  $e.forEach(["delete", "get", "head", "options"], function (e) {
    fn.prototype[e] = function (t, n) {
      return this.request(
        It(n || {}, { method: e, url: t, data: (n || {}).data })
      );
    };
  }),
    $e.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, o) {
          return this.request(
            It(o || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            })
          );
        };
      }
      (fn.prototype[e] = t()), (fn.prototype[e + "Form"] = t(!0));
    });
  const dn = fn;
  class pn {
    constructor(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      this.promise.then((e) => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0; ) n._listeners[t](e);
        n._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const r = new Promise((e) => {
            n.subscribe(e), (t = e);
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e(function (e, r, o) {
          n.reason || ((n.reason = new Tt(e, r, o)), t(n.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason
        ? e(this.reason)
        : this._listeners
        ? this._listeners.push(e)
        : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    toAbortSignal() {
      const e = new AbortController(),
        t = (t) => {
          e.abort(t);
        };
      return (
        this.subscribe(t),
        (e.signal.unsubscribe = () => this.unsubscribe(t)),
        e.signal
      );
    }
    static source() {
      let e;
      return {
        token: new pn(function (t) {
          e = t;
        }),
        cancel: e,
      };
    }
  }
  const hn = pn,
    mn = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511,
    };
  Object.entries(mn).forEach(([e, t]) => {
    mn[t] = e;
  });
  const gn = mn,
    yn = (function e(t) {
      const n = new dn(t),
        r = ae(dn.prototype.request, n);
      return (
        $e.extend(r, dn.prototype, n, { allOwnKeys: !0 }),
        $e.extend(r, n, null, { allOwnKeys: !0 }),
        (r.create = function (n) {
          return e(It(t, n));
        }),
        r
      );
    })(bt);
  (yn.Axios = dn),
    (yn.CanceledError = Tt),
    (yn.CancelToken = hn),
    (yn.isCancel = Nt),
    (yn.VERSION = "1.8.1"),
    (yn.toFormData = et),
    (yn.AxiosError = Ge),
    (yn.Cancel = yn.CanceledError),
    (yn.all = function (e) {
      return Promise.all(e);
    }),
    (yn.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (yn.isAxiosError = function (e) {
      return $e.isObject(e) && !0 === e.isAxiosError;
    }),
    (yn.mergeConfig = It),
    (yn.AxiosHeaders = _t),
    (yn.formToJSON = (e) => gt($e.isHTMLForm(e) ? new FormData(e) : e)),
    (yn.getAdapter = rn),
    (yn.HttpStatusCode = gn),
    (yn.default = yn);
  const bn = yn;
  var vn = n(93),
    wn = {};
  function kn(e) {
    return (
      (kn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      kn(e)
    );
  }
  function Sn() {
    Sn = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value;
        },
      a = "function" == typeof Symbol ? Symbol : {},
      i = a.iterator || "@@iterator",
      l = a.asyncIterator || "@@asyncIterator",
      s = a.toStringTag || "@@toStringTag";
    function u(e, t, n) {
      return (
        Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      );
    }
    try {
      u({}, "");
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function c(e, t, n, r) {
      var a = t && t.prototype instanceof y ? t : y,
        i = Object.create(a.prototype),
        l = new A(r || []);
      return o(i, "_invoke", { value: C(e, n, l) }), i;
    }
    function f(e, t, n) {
      try {
        return { type: "normal", arg: e.call(t, n) };
      } catch (e) {
        return { type: "throw", arg: e };
      }
    }
    t.wrap = c;
    var d = "suspendedStart",
      p = "suspendedYield",
      h = "executing",
      m = "completed",
      g = {};
    function y() {}
    function b() {}
    function v() {}
    var w = {};
    u(w, i, function () {
      return this;
    });
    var k = Object.getPrototypeOf,
      S = k && k(k(L([])));
    S && S !== n && r.call(S, i) && (w = S);
    var x = (v.prototype = y.prototype = Object.create(w));
    function E(e) {
      ["next", "throw", "return"].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function _(e, t) {
      function n(o, a, i, l) {
        var s = f(e[o], e, a);
        if ("throw" !== s.type) {
          var u = s.arg,
            c = u.value;
          return c && "object" == kn(c) && r.call(c, "__await")
            ? t.resolve(c.__await).then(
                function (e) {
                  n("next", e, i, l);
                },
                function (e) {
                  n("throw", e, i, l);
                }
              )
            : t.resolve(c).then(
                function (e) {
                  (u.value = e), i(u);
                },
                function (e) {
                  return n("throw", e, i, l);
                }
              );
        }
        l(s.arg);
      }
      var a;
      o(this, "_invoke", {
        value: function (e, r) {
          function o() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (a = a ? a.then(o, o) : o());
        },
      });
    }
    function C(t, n, r) {
      var o = d;
      return function (a, i) {
        if (o === h) throw Error("Generator is already running");
        if (o === m) {
          if ("throw" === a) throw i;
          return { value: e, done: !0 };
        }
        for (r.method = a, r.arg = i; ; ) {
          var l = r.delegate;
          if (l) {
            var s = N(l, r);
            if (s) {
              if (s === g) continue;
              return s;
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;
          else if ("throw" === r.method) {
            if (o === d) throw ((o = m), r.arg);
            r.dispatchException(r.arg);
          } else "return" === r.method && r.abrupt("return", r.arg);
          o = h;
          var u = f(t, n, r);
          if ("normal" === u.type) {
            if (((o = r.done ? m : p), u.arg === g)) continue;
            return { value: u.arg, done: r.done };
          }
          "throw" === u.type &&
            ((o = m), (r.method = "throw"), (r.arg = u.arg));
        }
      };
    }
    function N(t, n) {
      var r = n.method,
        o = t.iterator[r];
      if (o === e)
        return (
          (n.delegate = null),
          ("throw" === r &&
            t.iterator.return &&
            ((n.method = "return"),
            (n.arg = e),
            N(t, n),
            "throw" === n.method)) ||
            ("return" !== r &&
              ((n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a '" + r + "' method"
              )))),
          g
        );
      var a = f(o, t.iterator, n.arg);
      if ("throw" === a.type)
        return (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), g;
      var i = a.arg;
      return i
        ? i.done
          ? ((n[t.resultName] = i.value),
            (n.next = t.nextLoc),
            "return" !== n.method && ((n.method = "next"), (n.arg = e)),
            (n.delegate = null),
            g)
          : i
        : ((n.method = "throw"),
          (n.arg = new TypeError("iterator result is not an object")),
          (n.delegate = null),
          g);
    }
    function O(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function T(e) {
      var t = e.completion || {};
      (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function A(e) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        e.forEach(O, this),
        this.reset(!0);
    }
    function L(t) {
      if (t || "" === t) {
        var n = t[i];
        if (n) return n.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            a = function n() {
              for (; ++o < t.length; )
                if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
              return (n.value = e), (n.done = !0), n;
            };
          return (a.next = a);
        }
      }
      throw new TypeError(kn(t) + " is not iterable");
    }
    return (
      (b.prototype = v),
      o(x, "constructor", { value: v, configurable: !0 }),
      o(v, "constructor", { value: b, configurable: !0 }),
      (b.displayName = u(v, s, "GeneratorFunction")),
      (t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return (
          !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
        );
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, v)
            : ((e.__proto__ = v), u(e, s, "GeneratorFunction")),
          (e.prototype = Object.create(x)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      E(_.prototype),
      u(_.prototype, l, function () {
        return this;
      }),
      (t.AsyncIterator = _),
      (t.async = function (e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new _(c(e, n, r, o), a);
        return t.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      E(x),
      u(x, s, "Generator"),
      u(x, i, function () {
        return this;
      }),
      u(x, "toString", function () {
        return "[object Generator]";
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.push(r);
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in t) return (e.value = r), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (t.values = L),
      (A.prototype = {
        constructor: A,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = e),
            this.tryEntries.forEach(T),
            !t)
          )
            for (var n in this)
              "t" === n.charAt(0) &&
                r.call(this, n) &&
                !isNaN(+n.slice(1)) &&
                (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function o(r, o) {
            return (
              (l.type = "throw"),
              (l.arg = t),
              (n.next = r),
              o && ((n.method = "next"), (n.arg = e)),
              !!o
            );
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var i = this.tryEntries[a],
              l = i.completion;
            if ("root" === i.tryLoc) return o("end");
            if (i.tryLoc <= this.prev) {
              var s = r.call(i, "catchLoc"),
                u = r.call(i, "finallyLoc");
              if (s && u) {
                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return o(i.finallyLoc);
              } else if (s) {
                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
              } else {
                if (!u) throw Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return o(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (
              o.tryLoc <= this.prev &&
              r.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var a = o;
              break;
            }
          }
          a &&
            ("break" === e || "continue" === e) &&
            a.tryLoc <= t &&
            t <= a.finallyLoc &&
            (a = null);
          var i = a ? a.completion : {};
          return (
            (i.type = e),
            (i.arg = t),
            a
              ? ((this.method = "next"), (this.next = a.finallyLoc), g)
              : this.complete(i)
          );
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return (
            "break" === e.type || "continue" === e.type
              ? (this.next = e.arg)
              : "return" === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === e.type && t && (this.next = t),
            g
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e)
              return this.complete(n.completion, n.afterLoc), T(n), g;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ("throw" === r.type) {
                var o = r.arg;
                T(n);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (t, n, r) {
          return (
            (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
            "next" === this.method && (this.arg = e),
            g
          );
        },
      }),
      t
    );
  }
  function xn(e, t, n, r, o, a, i) {
    try {
      var l = e[a](i),
        s = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(s) : Promise.resolve(s).then(r, o);
  }
  function En(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  (wn.styleTagTransform = v()),
    (wn.setAttributes = m()),
    (wn.insert = p().bind(null, "head")),
    (wn.domAPI = f()),
    (wn.insertStyleElement = y()),
    u()(vn.A, wn),
    vn.A && vn.A.locals && vn.A.locals;
  const _n = function (e) {
    var t,
      n,
      r = e.colorScheme,
      o = e.sessionId,
      a =
        ((t = (0, i.useState)("")),
        (n = 2),
        (function (e) {
          if (Array.isArray(e)) return e;
        })(t) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                s = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = a.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    s = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return l;
            }
          })(t, n) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return En(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? En(e, t)
                  : void 0
              );
            }
          })(t, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()),
      l = a[0],
      s = a[1],
      u = (function () {
        var e,
          t =
            ((e = Sn().mark(function e() {
              var t;
              return Sn().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (t = { customerEmail: l, sessionId: o }),
                          console.log("Data: ", t),
                          (e.next = 5),
                          bn.post(
                            "".concat(re, "/messages-service/update-email"),
                            t
                          )
                        );
                      case 5:
                        e.sent.data.success &&
                          localStorage.setItem("userEmail", l),
                          (e.next = 12);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(0)),
                          console.error("Error updating email:", e.t0);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, o) {
                var a = e.apply(t, n);
                function i(e) {
                  xn(a, r, o, i, l, "next", e);
                }
                function l(e) {
                  xn(a, r, o, i, l, "throw", e);
                }
                i(void 0);
              });
            });
        return function () {
          return t.apply(this, arguments);
        };
      })();
    return i.createElement(
      "div",
      { className: "chat-container", style: { maxWidth: "240px" } },
      i.createElement(
        "div",
        { className: "input-box" },
        i.createElement("input", {
          type: "email",
          placeholder: "Enter your email address...",
          value: l,
          onChange: function (e) {
            return s(e.target.value);
          },
        }),
        i.createElement(
          "button",
          {
            className: "next-btn",
            style: { backgroundColor: null != r ? r : "#1877f2" },
            onClick: function () {
              return u();
            },
          },
          "❯"
        )
      ),
      i.createElement(
        "div",
        {
          className: "confirmation-box",
          style: { backgroundColor: null != r ? r : "#1877f2" },
        },
        i.createElement(
          "p",
          { className: "confirmation-text" },
          i.createElement(
            "strong",
            null,
            "Just in case you leave or we reply later:"
          ),
          i.createElement("br", null),
          i.createElement("em", null, "how do you want us to get back to you?")
        )
      )
    );
  };
  function Cn(e) {
    var t = e.messages,
      n = e.avatar,
      r = e.senderName,
      o = e.colorScheme,
      a = e.sessionId,
      l = (0, i.useRef)(null);
    function s(e) {
      return e && e.startsWith("/public") ? "".concat(oe).concat(e) : e;
    }
    return (
      (0, i.useEffect)(function () {
        var e;
        null === (e = l.current) || void 0 === e || e.scrollIntoView();
      }, []),
      i.createElement(
        "div",
        { className: "chat-widget-messages" },
        t.map(function (e) {
          return i.createElement(
            "div",
            {
              key: e.id,
              className: "chat-widget-message ".concat(
                "customer" === e.sender ? "user-message" : "agent-message"
              ),
              style: {
                display:
                  "email_prompt" === e.contentType &&
                  localStorage.getItem("userEmail")
                    ? "none"
                    : "flex",
              },
            },
            "business" === e.sender &&
              n &&
              i.createElement(
                "div",
                { className: "chat-widget-message-avatar" },
                i.createElement("img", { src: "".concat(oe).concat(n), alt: r })
              ),
            i.createElement(
              "div",
              { className: "chat-widget-message-content" },
              "business" === e.sender &&
                i.createElement(
                  "div",
                  { className: "chat-widget-message-sender" },
                  r
                ),
              i.createElement(
                "div",
                {
                  className: "chat-widget-message-bubble ".concat(
                    "image" === e.type || "audio" === e.type
                      ? "media-bubble"
                      : ""
                  ),
                  style: {
                    backgroundColor:
                      "business" === e.sender
                        ? "#e5e5ea"
                        : null != o
                        ? o
                        : "#1877f2",
                  },
                },
                (function (e) {
                  switch (e.contentType) {
                    case "image":
                      return i.createElement(
                        "div",
                        { className: "chat-widget-message-media" },
                        i.createElement("img", {
                          src: s(e.content) || "/placeholder.svg",
                          alt: "Shared image",
                          className: "chat-widget-message-image",
                        })
                      );
                    case "audio":
                      return i.createElement(
                        "div",
                        { className: "chat-widget-message-media" },
                        i.createElement("audio", {
                          src: s(e.content),
                          controls: !0,
                          className: "chat-widget-message-audio",
                        })
                      );
                    case "email_prompt":
                      return i.createElement(_n, {
                        colorScheme: o,
                        sessionId: a,
                      });
                    default:
                      return e.content;
                  }
                })(e)
              )
            )
          );
        }),
        i.createElement("div", { ref: l })
      )
    );
  }
  const Nn = _("MessageSquare", [
    [
      "path",
      {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz",
      },
    ],
  ]);
  var On = n(643),
    Tn = {};
  function An(e) {
    var t,
      n = e.onClose,
      r = e.colorScheme,
      o = e.currentAgent,
      a = e.businessInfo;
    return i.createElement(
      "div",
      {
        className: "chat-widget-header",
        style: { backgroundColor: null != r ? r : "#1877f2" },
      },
      i.createElement("div", { className: "chat-widget-header-tabs" }),
      i.createElement(
        "div",
        { className: "chat-widget-header-content" },
        o
          ? i.createElement("img", {
              src: ""
                .concat(oe)
                .concat(
                  null !== (t = o.avatar) && void 0 !== t ? t : a.avatarUrl
                ),
              alt: "Agent 3",
              className: "chat-widget-agent-avatar",
            })
          : i.createElement(
              "div",
              { className: "chat-widget-agents" },
              i.createElement("img", {
                src: "/placeholder.svg?height=32&width=32",
                alt: "Agent 1",
                className: "chat-widget-agent-avatar",
              }),
              i.createElement("img", {
                src: "/placeholder.svg?height=32&width=32",
                alt: "Agent 2",
                className: "chat-widget-agent-avatar",
              }),
              i.createElement("img", {
                src: "/placeholder.svg?height=32&width=32",
                alt: "Agent 3",
                className: "chat-widget-agent-avatar",
              }),
              i.createElement(
                "div",
                { className: "chat-widget-agent-avatar message-icon" },
                i.createElement(Nn, { size: 16 })
              )
            ),
        i.createElement(
          "h2",
          null,
          o
            ? "".concat(o.name, " from ").concat(a.businessName)
            : "Questions? Chat with us!"
        )
      ),
      i.createElement(
        "button",
        {
          className: "chat-widget-close-button",
          onClick: n,
          "aria-label": "Close chat",
        },
        i.createElement(P, { size: 16 })
      )
    );
  }
  (Tn.styleTagTransform = v()),
    (Tn.setAttributes = m()),
    (Tn.insert = p().bind(null, "head")),
    (Tn.domAPI = f()),
    (Tn.insertStyleElement = y()),
    u()(On.A, Tn),
    On.A && On.A.locals && On.A.locals;
  const Ln = Object.create(null);
  (Ln.open = "0"),
    (Ln.close = "1"),
    (Ln.ping = "2"),
    (Ln.pong = "3"),
    (Ln.message = "4"),
    (Ln.upgrade = "5"),
    (Ln.noop = "6");
  const Pn = Object.create(null);
  Object.keys(Ln).forEach((e) => {
    Pn[Ln[e]] = e;
  });
  const Rn = { type: "error", data: "parser error" },
    zn =
      "function" == typeof Blob ||
      ("undefined" != typeof Blob &&
        "[object BlobConstructor]" === Object.prototype.toString.call(Blob)),
    jn = "function" == typeof ArrayBuffer,
    Fn = (e) =>
      "function" == typeof ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer instanceof ArrayBuffer,
    Dn = ({ type: e, data: t }, n, r) =>
      zn && t instanceof Blob
        ? n
          ? r(t)
          : In(t, r)
        : jn && (t instanceof ArrayBuffer || Fn(t))
        ? n
          ? r(t)
          : In(new Blob([t]), r)
        : r(Ln[e] + (t || "")),
    In = (e, t) => {
      const n = new FileReader();
      return (
        (n.onload = function () {
          const e = n.result.split(",")[1];
          t("b" + (e || ""));
        }),
        n.readAsDataURL(e)
      );
    };
  function Mn(e) {
    return e instanceof Uint8Array
      ? e
      : e instanceof ArrayBuffer
      ? new Uint8Array(e)
      : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  }
  let Un;
  const Bn = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
  for (let e = 0; e < 64; e++)
    Bn[
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(
        e
      )
    ] = e;
  const qn = "function" == typeof ArrayBuffer,
    Vn = (e, t) => {
      if ("string" != typeof e) return { type: "message", data: $n(e, t) };
      const n = e.charAt(0);
      return "b" === n
        ? { type: "message", data: Hn(e.substring(1), t) }
        : Pn[n]
        ? e.length > 1
          ? { type: Pn[n], data: e.substring(1) }
          : { type: Pn[n] }
        : Rn;
    },
    Hn = (e, t) => {
      if (qn) {
        const n = ((e) => {
          let t,
            n,
            r,
            o,
            a,
            i = 0.75 * e.length,
            l = e.length,
            s = 0;
          "=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
          const u = new ArrayBuffer(i),
            c = new Uint8Array(u);
          for (t = 0; t < l; t += 4)
            (n = Bn[e.charCodeAt(t)]),
              (r = Bn[e.charCodeAt(t + 1)]),
              (o = Bn[e.charCodeAt(t + 2)]),
              (a = Bn[e.charCodeAt(t + 3)]),
              (c[s++] = (n << 2) | (r >> 4)),
              (c[s++] = ((15 & r) << 4) | (o >> 2)),
              (c[s++] = ((3 & o) << 6) | (63 & a));
          return u;
        })(e);
        return $n(n, t);
      }
      return { base64: !0, data: e };
    },
    $n = (e, t) =>
      "blob" === t
        ? e instanceof Blob
          ? e
          : new Blob([e])
        : e instanceof ArrayBuffer
        ? e
        : e.buffer,
    Wn = String.fromCharCode(30);
  let Qn;
  function Kn(e) {
    return e.reduce((e, t) => e + t.length, 0);
  }
  function Gn(e, t) {
    if (e[0].length === t) return e.shift();
    const n = new Uint8Array(t);
    let r = 0;
    for (let o = 0; o < t; o++)
      (n[o] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
    return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
  }
  function Yn(e) {
    if (e)
      return (function (e) {
        for (var t in Yn.prototype) e[t] = Yn.prototype[t];
        return e;
      })(e);
  }
  (Yn.prototype.on = Yn.prototype.addEventListener =
    function (e, t) {
      return (
        (this._callbacks = this._callbacks || {}),
        (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
        this
      );
    }),
    (Yn.prototype.once = function (e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments);
      }
      return (n.fn = t), this.on(e, n), this;
    }),
    (Yn.prototype.off =
      Yn.prototype.removeListener =
      Yn.prototype.removeAllListeners =
      Yn.prototype.removeEventListener =
        function (e, t) {
          if (
            ((this._callbacks = this._callbacks || {}), 0 == arguments.length)
          )
            return (this._callbacks = {}), this;
          var n,
            r = this._callbacks["$" + e];
          if (!r) return this;
          if (1 == arguments.length)
            return delete this._callbacks["$" + e], this;
          for (var o = 0; o < r.length; o++)
            if ((n = r[o]) === t || n.fn === t) {
              r.splice(o, 1);
              break;
            }
          return 0 === r.length && delete this._callbacks["$" + e], this;
        }),
    (Yn.prototype.emit = function (e) {
      this._callbacks = this._callbacks || {};
      for (
        var t = new Array(arguments.length - 1),
          n = this._callbacks["$" + e],
          r = 1;
        r < arguments.length;
        r++
      )
        t[r - 1] = arguments[r];
      if (n) {
        r = 0;
        for (var o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, t);
      }
      return this;
    }),
    (Yn.prototype.emitReserved = Yn.prototype.emit),
    (Yn.prototype.listeners = function (e) {
      return (
        (this._callbacks = this._callbacks || {}),
        this._callbacks["$" + e] || []
      );
    }),
    (Yn.prototype.hasListeners = function (e) {
      return !!this.listeners(e).length;
    });
  const Xn =
      "function" == typeof Promise && "function" == typeof Promise.resolve
        ? (e) => Promise.resolve().then(e)
        : (e, t) => t(e, 0),
    Jn =
      "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : Function("return this")();
  function Zn(e, ...t) {
    return t.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
  }
  const er = Jn.setTimeout,
    tr = Jn.clearTimeout;
  function nr(e, t) {
    t.useNativeTimers
      ? ((e.setTimeoutFn = er.bind(Jn)), (e.clearTimeoutFn = tr.bind(Jn)))
      : ((e.setTimeoutFn = Jn.setTimeout.bind(Jn)),
        (e.clearTimeoutFn = Jn.clearTimeout.bind(Jn)));
  }
  function rr() {
    return (
      Date.now().toString(36).substring(3) +
      Math.random().toString(36).substring(2, 5)
    );
  }
  class or extends Error {
    constructor(e, t, n) {
      super(e),
        (this.description = t),
        (this.context = n),
        (this.type = "TransportError");
    }
  }
  class ar extends Yn {
    constructor(e) {
      super(),
        (this.writable = !1),
        nr(this, e),
        (this.opts = e),
        (this.query = e.query),
        (this.socket = e.socket),
        (this.supportsBinary = !e.forceBase64);
    }
    onError(e, t, n) {
      return super.emitReserved("error", new or(e, t, n)), this;
    }
    open() {
      return (this.readyState = "opening"), this.doOpen(), this;
    }
    close() {
      return (
        ("opening" !== this.readyState && "open" !== this.readyState) ||
          (this.doClose(), this.onClose()),
        this
      );
    }
    send(e) {
      "open" === this.readyState && this.write(e);
    }
    onOpen() {
      (this.readyState = "open"),
        (this.writable = !0),
        super.emitReserved("open");
    }
    onData(e) {
      const t = Vn(e, this.socket.binaryType);
      this.onPacket(t);
    }
    onPacket(e) {
      super.emitReserved("packet", e);
    }
    onClose(e) {
      (this.readyState = "closed"), super.emitReserved("close", e);
    }
    pause(e) {}
    createUri(e, t = {}) {
      return (
        e +
        "://" +
        this._hostname() +
        this._port() +
        this.opts.path +
        this._query(t)
      );
    }
    _hostname() {
      const e = this.opts.hostname;
      return -1 === e.indexOf(":") ? e : "[" + e + "]";
    }
    _port() {
      return this.opts.port &&
        ((this.opts.secure && Number(443 !== this.opts.port)) ||
          (!this.opts.secure && 80 !== Number(this.opts.port)))
        ? ":" + this.opts.port
        : "";
    }
    _query(e) {
      const t = (function (e) {
        let t = "";
        for (let n in e)
          e.hasOwnProperty(n) &&
            (t.length && (t += "&"),
            (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
        return t;
      })(e);
      return t.length ? "?" + t : "";
    }
  }
  class ir extends ar {
    constructor() {
      super(...arguments), (this._polling = !1);
    }
    get name() {
      return "polling";
    }
    doOpen() {
      this._poll();
    }
    pause(e) {
      this.readyState = "pausing";
      const t = () => {
        (this.readyState = "paused"), e();
      };
      if (this._polling || !this.writable) {
        let e = 0;
        this._polling &&
          (e++,
          this.once("pollComplete", function () {
            --e || t();
          })),
          this.writable ||
            (e++,
            this.once("drain", function () {
              --e || t();
            }));
      } else t();
    }
    _poll() {
      (this._polling = !0), this.doPoll(), this.emitReserved("poll");
    }
    onData(e) {
      ((e, t) => {
        const n = e.split(Wn),
          r = [];
        for (let e = 0; e < n.length; e++) {
          const o = Vn(n[e], t);
          if ((r.push(o), "error" === o.type)) break;
        }
        return r;
      })(e, this.socket.binaryType).forEach((e) => {
        if (
          ("opening" === this.readyState && "open" === e.type && this.onOpen(),
          "close" === e.type)
        )
          return (
            this.onClose({ description: "transport closed by the server" }), !1
          );
        this.onPacket(e);
      }),
        "closed" !== this.readyState &&
          ((this._polling = !1),
          this.emitReserved("pollComplete"),
          "open" === this.readyState && this._poll());
    }
    doClose() {
      const e = () => {
        this.write([{ type: "close" }]);
      };
      "open" === this.readyState ? e() : this.once("open", e);
    }
    write(e) {
      (this.writable = !1),
        ((e, t) => {
          const n = e.length,
            r = new Array(n);
          let o = 0;
          e.forEach((e, a) => {
            Dn(e, !1, (e) => {
              (r[a] = e), ++o === n && t(r.join(Wn));
            });
          });
        })(e, (e) => {
          this.doWrite(e, () => {
            (this.writable = !0), this.emitReserved("drain");
          });
        });
    }
    uri() {
      const e = this.opts.secure ? "https" : "http",
        t = this.query || {};
      return (
        !1 !== this.opts.timestampRequests &&
          (t[this.opts.timestampParam] = rr()),
        this.supportsBinary || t.sid || (t.b64 = 1),
        this.createUri(e, t)
      );
    }
  }
  let lr = !1;
  try {
    lr =
      "undefined" != typeof XMLHttpRequest &&
      "withCredentials" in new XMLHttpRequest();
  } catch (e) {}
  const sr = lr;
  function ur() {}
  class cr extends ir {
    constructor(e) {
      if ((super(e), "undefined" != typeof location)) {
        const t = "https:" === location.protocol;
        let n = location.port;
        n || (n = t ? "443" : "80"),
          (this.xd =
            ("undefined" != typeof location &&
              e.hostname !== location.hostname) ||
            n !== e.port);
      }
    }
    doWrite(e, t) {
      const n = this.request({ method: "POST", data: e });
      n.on("success", t),
        n.on("error", (e, t) => {
          this.onError("xhr post error", e, t);
        });
    }
    doPoll() {
      const e = this.request();
      e.on("data", this.onData.bind(this)),
        e.on("error", (e, t) => {
          this.onError("xhr poll error", e, t);
        }),
        (this.pollXhr = e);
    }
  }
  class fr extends Yn {
    constructor(e, t, n) {
      super(),
        (this.createRequest = e),
        nr(this, n),
        (this._opts = n),
        (this._method = n.method || "GET"),
        (this._uri = t),
        (this._data = void 0 !== n.data ? n.data : null),
        this._create();
    }
    _create() {
      var e;
      const t = Zn(
        this._opts,
        "agent",
        "pfx",
        "key",
        "passphrase",
        "cert",
        "ca",
        "ciphers",
        "rejectUnauthorized",
        "autoUnref"
      );
      t.xdomain = !!this._opts.xd;
      const n = (this._xhr = this.createRequest(t));
      try {
        n.open(this._method, this._uri, !0);
        try {
          if (this._opts.extraHeaders) {
            n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
            for (let e in this._opts.extraHeaders)
              this._opts.extraHeaders.hasOwnProperty(e) &&
                n.setRequestHeader(e, this._opts.extraHeaders[e]);
          }
        } catch (e) {}
        if ("POST" === this._method)
          try {
            n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {}
        try {
          n.setRequestHeader("Accept", "*/*");
        } catch (e) {}
        null === (e = this._opts.cookieJar) || void 0 === e || e.addCookies(n),
          "withCredentials" in n &&
            (n.withCredentials = this._opts.withCredentials),
          this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout),
          (n.onreadystatechange = () => {
            var e;
            3 === n.readyState &&
              (null === (e = this._opts.cookieJar) ||
                void 0 === e ||
                e.parseCookies(n.getResponseHeader("set-cookie"))),
              4 === n.readyState &&
                (200 === n.status || 1223 === n.status
                  ? this._onLoad()
                  : this.setTimeoutFn(() => {
                      this._onError("number" == typeof n.status ? n.status : 0);
                    }, 0));
          }),
          n.send(this._data);
      } catch (e) {
        return void this.setTimeoutFn(() => {
          this._onError(e);
        }, 0);
      }
      "undefined" != typeof document &&
        ((this._index = fr.requestsCount++), (fr.requests[this._index] = this));
    }
    _onError(e) {
      this.emitReserved("error", e, this._xhr), this._cleanup(!0);
    }
    _cleanup(e) {
      if (void 0 !== this._xhr && null !== this._xhr) {
        if (((this._xhr.onreadystatechange = ur), e))
          try {
            this._xhr.abort();
          } catch (e) {}
        "undefined" != typeof document && delete fr.requests[this._index],
          (this._xhr = null);
      }
    }
    _onLoad() {
      const e = this._xhr.responseText;
      null !== e &&
        (this.emitReserved("data", e),
        this.emitReserved("success"),
        this._cleanup());
    }
    abort() {
      this._cleanup();
    }
  }
  function dr() {
    for (let e in fr.requests)
      fr.requests.hasOwnProperty(e) && fr.requests[e].abort();
  }
  (fr.requestsCount = 0),
    (fr.requests = {}),
    "undefined" != typeof document &&
      ("function" == typeof attachEvent
        ? attachEvent("onunload", dr)
        : "function" == typeof addEventListener &&
          addEventListener("onpagehide" in Jn ? "pagehide" : "unload", dr, !1));
  const pr = (function () {
    const e = hr({ xdomain: !1 });
    return e && null !== e.responseType;
  })();
  function hr(e) {
    const t = e.xdomain;
    try {
      if ("undefined" != typeof XMLHttpRequest && (!t || sr))
        return new XMLHttpRequest();
    } catch (e) {}
    if (!t)
      try {
        return new Jn[["Active"].concat("Object").join("X")](
          "Microsoft.XMLHTTP"
        );
      } catch (e) {}
  }
  const mr =
    "undefined" != typeof navigator &&
    "string" == typeof navigator.product &&
    "reactnative" === navigator.product.toLowerCase();
  class gr extends ar {
    get name() {
      return "websocket";
    }
    doOpen() {
      const e = this.uri(),
        t = this.opts.protocols,
        n = mr
          ? {}
          : Zn(
              this.opts,
              "agent",
              "perMessageDeflate",
              "pfx",
              "key",
              "passphrase",
              "cert",
              "ca",
              "ciphers",
              "rejectUnauthorized",
              "localAddress",
              "protocolVersion",
              "origin",
              "maxPayload",
              "family",
              "checkServerIdentity"
            );
      this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
      try {
        this.ws = this.createSocket(e, t, n);
      } catch (e) {
        return this.emitReserved("error", e);
      }
      (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
    }
    addEventListeners() {
      (this.ws.onopen = () => {
        this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
      }),
        (this.ws.onclose = (e) =>
          this.onClose({
            description: "websocket connection closed",
            context: e,
          })),
        (this.ws.onmessage = (e) => this.onData(e.data)),
        (this.ws.onerror = (e) => this.onError("websocket error", e));
    }
    write(e) {
      this.writable = !1;
      for (let t = 0; t < e.length; t++) {
        const n = e[t],
          r = t === e.length - 1;
        Dn(n, this.supportsBinary, (e) => {
          try {
            this.doWrite(n, e);
          } catch (e) {}
          r &&
            Xn(() => {
              (this.writable = !0), this.emitReserved("drain");
            }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      void 0 !== this.ws &&
        ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
    }
    uri() {
      const e = this.opts.secure ? "wss" : "ws",
        t = this.query || {};
      return (
        this.opts.timestampRequests && (t[this.opts.timestampParam] = rr()),
        this.supportsBinary || (t.b64 = 1),
        this.createUri(e, t)
      );
    }
  }
  const yr = Jn.WebSocket || Jn.MozWebSocket,
    br = {
      websocket: class extends gr {
        createSocket(e, t, n) {
          return mr ? new yr(e, t, n) : t ? new yr(e, t) : new yr(e);
        }
        doWrite(e, t) {
          this.ws.send(t);
        }
      },
      webtransport: class extends ar {
        get name() {
          return "webtransport";
        }
        doOpen() {
          try {
            this._transport = new WebTransport(
              this.createUri("https"),
              this.opts.transportOptions[this.name]
            );
          } catch (e) {
            return this.emitReserved("error", e);
          }
          this._transport.closed
            .then(() => {
              this.onClose();
            })
            .catch((e) => {
              this.onError("webtransport error", e);
            }),
            this._transport.ready.then(() => {
              this._transport.createBidirectionalStream().then((e) => {
                const t = (function (e, t) {
                    Qn || (Qn = new TextDecoder());
                    const n = [];
                    let r = 0,
                      o = -1,
                      a = !1;
                    return new TransformStream({
                      transform(i, l) {
                        for (n.push(i); ; ) {
                          if (0 === r) {
                            if (Kn(n) < 1) break;
                            const e = Gn(n, 1);
                            (a = !(128 & ~e[0])),
                              (o = 127 & e[0]),
                              (r = o < 126 ? 3 : 126 === o ? 1 : 2);
                          } else if (1 === r) {
                            if (Kn(n) < 2) break;
                            const e = Gn(n, 2);
                            (o = new DataView(
                              e.buffer,
                              e.byteOffset,
                              e.length
                            ).getUint16(0)),
                              (r = 3);
                          } else if (2 === r) {
                            if (Kn(n) < 8) break;
                            const e = Gn(n, 8),
                              t = new DataView(
                                e.buffer,
                                e.byteOffset,
                                e.length
                              ),
                              a = t.getUint32(0);
                            if (a > Math.pow(2, 21) - 1) {
                              l.enqueue(Rn);
                              break;
                            }
                            (o = a * Math.pow(2, 32) + t.getUint32(4)), (r = 3);
                          } else {
                            if (Kn(n) < o) break;
                            const e = Gn(n, o);
                            l.enqueue(Vn(a ? e : Qn.decode(e), t)), (r = 0);
                          }
                          if (0 === o || o > e) {
                            l.enqueue(Rn);
                            break;
                          }
                        }
                      },
                    });
                  })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                  n = e.readable.pipeThrough(t).getReader(),
                  r = new TransformStream({
                    transform(e, t) {
                      !(function (e, t) {
                        zn && e.data instanceof Blob
                          ? e.data.arrayBuffer().then(Mn).then(t)
                          : jn && (e.data instanceof ArrayBuffer || Fn(e.data))
                          ? t(Mn(e.data))
                          : Dn(e, !1, (e) => {
                              Un || (Un = new TextEncoder()), t(Un.encode(e));
                            });
                      })(e, (n) => {
                        const r = n.length;
                        let o;
                        if (r < 126)
                          (o = new Uint8Array(1)),
                            new DataView(o.buffer).setUint8(0, r);
                        else if (r < 65536) {
                          o = new Uint8Array(3);
                          const e = new DataView(o.buffer);
                          e.setUint8(0, 126), e.setUint16(1, r);
                        } else {
                          o = new Uint8Array(9);
                          const e = new DataView(o.buffer);
                          e.setUint8(0, 127), e.setBigUint64(1, BigInt(r));
                        }
                        e.data && "string" != typeof e.data && (o[0] |= 128),
                          t.enqueue(o),
                          t.enqueue(n);
                      });
                    },
                  });
                r.readable.pipeTo(e.writable),
                  (this._writer = r.writable.getWriter());
                const o = () => {
                  n.read()
                    .then(({ done: e, value: t }) => {
                      e || (this.onPacket(t), o());
                    })
                    .catch((e) => {});
                };
                o();
                const a = { type: "open" };
                this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`),
                  this._writer.write(a).then(() => this.onOpen());
              });
            });
        }
        write(e) {
          this.writable = !1;
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              r = t === e.length - 1;
            this._writer.write(n).then(() => {
              r &&
                Xn(() => {
                  (this.writable = !0), this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
          }
        }
        doClose() {
          var e;
          null === (e = this._transport) || void 0 === e || e.close();
        }
      },
      polling: class extends cr {
        constructor(e) {
          super(e);
          const t = e && e.forceBase64;
          this.supportsBinary = pr && !t;
        }
        request(e = {}) {
          return (
            Object.assign(e, { xd: this.xd }, this.opts),
            new fr(hr, this.uri(), e)
          );
        }
      },
    },
    vr =
      /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    wr = [
      "source",
      "protocol",
      "authority",
      "userInfo",
      "user",
      "password",
      "host",
      "port",
      "relative",
      "path",
      "directory",
      "file",
      "query",
      "anchor",
    ];
  function kr(e) {
    if (e.length > 8e3) throw "URI too long";
    const t = e,
      n = e.indexOf("["),
      r = e.indexOf("]");
    -1 != n &&
      -1 != r &&
      (e =
        e.substring(0, n) +
        e.substring(n, r).replace(/:/g, ";") +
        e.substring(r, e.length));
    let o = vr.exec(e || ""),
      a = {},
      i = 14;
    for (; i--; ) a[wr[i]] = o[i] || "";
    return (
      -1 != n &&
        -1 != r &&
        ((a.source = t),
        (a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":")),
        (a.authority = a.authority
          .replace("[", "")
          .replace("]", "")
          .replace(/;/g, ":")),
        (a.ipv6uri = !0)),
      (a.pathNames = (function (e, t) {
        const n = t.replace(/\/{2,9}/g, "/").split("/");
        return (
          ("/" != t.slice(0, 1) && 0 !== t.length) || n.splice(0, 1),
          "/" == t.slice(-1) && n.splice(n.length - 1, 1),
          n
        );
      })(0, a.path)),
      (a.queryKey = (function (e, t) {
        const n = {};
        return (
          t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
            t && (n[t] = r);
          }),
          n
        );
      })(0, a.query)),
      a
    );
  }
  const Sr =
      "function" == typeof addEventListener &&
      "function" == typeof removeEventListener,
    xr = [];
  Sr &&
    addEventListener(
      "offline",
      () => {
        xr.forEach((e) => e());
      },
      !1
    );
  class Er extends Yn {
    constructor(e, t) {
      if (
        (super(),
        (this.binaryType = "arraybuffer"),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0),
        (this._pingInterval = -1),
        (this._pingTimeout = -1),
        (this._maxPayload = -1),
        (this._pingTimeoutTime = 1 / 0),
        e && "object" == typeof e && ((t = e), (e = null)),
        e)
      ) {
        const n = kr(e);
        (t.hostname = n.host),
          (t.secure = "https" === n.protocol || "wss" === n.protocol),
          (t.port = n.port),
          n.query && (t.query = n.query);
      } else t.host && (t.hostname = kr(t.host).host);
      nr(this, t),
        (this.secure =
          null != t.secure
            ? t.secure
            : "undefined" != typeof location && "https:" === location.protocol),
        t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
        (this.hostname =
          t.hostname ||
          ("undefined" != typeof location ? location.hostname : "localhost")),
        (this.port =
          t.port ||
          ("undefined" != typeof location && location.port
            ? location.port
            : this.secure
            ? "443"
            : "80")),
        (this.transports = []),
        (this._transportsByName = {}),
        t.transports.forEach((e) => {
          const t = e.prototype.name;
          this.transports.push(t), (this._transportsByName[t] = e);
        }),
        (this.opts = Object.assign(
          {
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: { threshold: 1024 },
            transportOptions: {},
            closeOnBeforeunload: !1,
          },
          t
        )),
        (this.opts.path =
          this.opts.path.replace(/\/$/, "") +
          (this.opts.addTrailingSlash ? "/" : "")),
        "string" == typeof this.opts.query &&
          (this.opts.query = (function (e) {
            let t = {},
              n = e.split("&");
            for (let e = 0, r = n.length; e < r; e++) {
              let r = n[e].split("=");
              t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
            }
            return t;
          })(this.opts.query)),
        Sr &&
          (this.opts.closeOnBeforeunload &&
            ((this._beforeunloadEventListener = () => {
              this.transport &&
                (this.transport.removeAllListeners(), this.transport.close());
            }),
            addEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1
            )),
          "localhost" !== this.hostname &&
            ((this._offlineEventListener = () => {
              this._onClose("transport close", {
                description: "network connection lost",
              });
            }),
            xr.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open();
    }
    createTransport(e) {
      const t = Object.assign({}, this.opts.query);
      (t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id);
      const n = Object.assign(
        {},
        this.opts,
        {
          query: t,
          socket: this,
          hostname: this.hostname,
          secure: this.secure,
          port: this.port,
        },
        this.opts.transportOptions[e]
      );
      return new this._transportsByName[e](n);
    }
    _open() {
      if (0 === this.transports.length)
        return void this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
      const e =
        this.opts.rememberUpgrade &&
        Er.priorWebsocketSuccess &&
        -1 !== this.transports.indexOf("websocket")
          ? "websocket"
          : this.transports[0];
      this.readyState = "opening";
      const t = this.createTransport(e);
      t.open(), this.setTransport(t);
    }
    setTransport(e) {
      this.transport && this.transport.removeAllListeners(),
        (this.transport = e),
        e
          .on("drain", this._onDrain.bind(this))
          .on("packet", this._onPacket.bind(this))
          .on("error", this._onError.bind(this))
          .on("close", (e) => this._onClose("transport close", e));
    }
    onOpen() {
      (this.readyState = "open"),
        (Er.priorWebsocketSuccess = "websocket" === this.transport.name),
        this.emitReserved("open"),
        this.flush();
    }
    _onPacket(e) {
      if (
        "opening" === this.readyState ||
        "open" === this.readyState ||
        "closing" === this.readyState
      )
        switch (
          (this.emitReserved("packet", e),
          this.emitReserved("heartbeat"),
          e.type)
        ) {
          case "open":
            this.onHandshake(JSON.parse(e.data));
            break;
          case "ping":
            this._sendPacket("pong"),
              this.emitReserved("ping"),
              this.emitReserved("pong"),
              this._resetPingTimeout();
            break;
          case "error":
            const t = new Error("server error");
            (t.code = e.data), this._onError(t);
            break;
          case "message":
            this.emitReserved("data", e.data),
              this.emitReserved("message", e.data);
        }
    }
    onHandshake(e) {
      this.emitReserved("handshake", e),
        (this.id = e.sid),
        (this.transport.query.sid = e.sid),
        (this._pingInterval = e.pingInterval),
        (this._pingTimeout = e.pingTimeout),
        (this._maxPayload = e.maxPayload),
        this.onOpen(),
        "closed" !== this.readyState && this._resetPingTimeout();
    }
    _resetPingTimeout() {
      this.clearTimeoutFn(this._pingTimeoutTimer);
      const e = this._pingInterval + this._pingTimeout;
      (this._pingTimeoutTime = Date.now() + e),
        (this._pingTimeoutTimer = this.setTimeoutFn(() => {
          this._onClose("ping timeout");
        }, e)),
        this.opts.autoUnref && this._pingTimeoutTimer.unref();
    }
    _onDrain() {
      this.writeBuffer.splice(0, this._prevBufferLen),
        (this._prevBufferLen = 0),
        0 === this.writeBuffer.length
          ? this.emitReserved("drain")
          : this.flush();
    }
    flush() {
      if (
        "closed" !== this.readyState &&
        this.transport.writable &&
        !this.upgrading &&
        this.writeBuffer.length
      ) {
        const e = this._getWritablePackets();
        this.transport.send(e),
          (this._prevBufferLen = e.length),
          this.emitReserved("flush");
      }
    }
    _getWritablePackets() {
      if (
        !(
          this._maxPayload &&
          "polling" === this.transport.name &&
          this.writeBuffer.length > 1
        )
      )
        return this.writeBuffer;
      let e = 1;
      for (let n = 0; n < this.writeBuffer.length; n++) {
        const r = this.writeBuffer[n].data;
        if (
          (r &&
            (e +=
              "string" == typeof (t = r)
                ? (function (e) {
                    let t = 0,
                      n = 0;
                    for (let r = 0, o = e.length; r < o; r++)
                      (t = e.charCodeAt(r)),
                        t < 128
                          ? (n += 1)
                          : t < 2048
                          ? (n += 2)
                          : t < 55296 || t >= 57344
                          ? (n += 3)
                          : (r++, (n += 4));
                    return n;
                  })(t)
                : Math.ceil(1.33 * (t.byteLength || t.size))),
          n > 0 && e > this._maxPayload)
        )
          return this.writeBuffer.slice(0, n);
        e += 2;
      }
      var t;
      return this.writeBuffer;
    }
    _hasPingExpired() {
      if (!this._pingTimeoutTime) return !0;
      const e = Date.now() > this._pingTimeoutTime;
      return (
        e &&
          ((this._pingTimeoutTime = 0),
          Xn(() => {
            this._onClose("ping timeout");
          }, this.setTimeoutFn)),
        e
      );
    }
    write(e, t, n) {
      return this._sendPacket("message", e, t, n), this;
    }
    send(e, t, n) {
      return this._sendPacket("message", e, t, n), this;
    }
    _sendPacket(e, t, n, r) {
      if (
        ("function" == typeof t && ((r = t), (t = void 0)),
        "function" == typeof n && ((r = n), (n = null)),
        "closing" === this.readyState || "closed" === this.readyState)
      )
        return;
      (n = n || {}).compress = !1 !== n.compress;
      const o = { type: e, data: t, options: n };
      this.emitReserved("packetCreate", o),
        this.writeBuffer.push(o),
        r && this.once("flush", r),
        this.flush();
    }
    close() {
      const e = () => {
          this._onClose("forced close"), this.transport.close();
        },
        t = () => {
          this.off("upgrade", t), this.off("upgradeError", t), e();
        },
        n = () => {
          this.once("upgrade", t), this.once("upgradeError", t);
        };
      return (
        ("opening" !== this.readyState && "open" !== this.readyState) ||
          ((this.readyState = "closing"),
          this.writeBuffer.length
            ? this.once("drain", () => {
                this.upgrading ? n() : e();
              })
            : this.upgrading
            ? n()
            : e()),
        this
      );
    }
    _onError(e) {
      if (
        ((Er.priorWebsocketSuccess = !1),
        this.opts.tryAllTransports &&
          this.transports.length > 1 &&
          "opening" === this.readyState)
      )
        return this.transports.shift(), this._open();
      this.emitReserved("error", e), this._onClose("transport error", e);
    }
    _onClose(e, t) {
      if (
        "opening" === this.readyState ||
        "open" === this.readyState ||
        "closing" === this.readyState
      ) {
        if (
          (this.clearTimeoutFn(this._pingTimeoutTimer),
          this.transport.removeAllListeners("close"),
          this.transport.close(),
          this.transport.removeAllListeners(),
          Sr &&
            (this._beforeunloadEventListener &&
              removeEventListener(
                "beforeunload",
                this._beforeunloadEventListener,
                !1
              ),
            this._offlineEventListener))
        ) {
          const e = xr.indexOf(this._offlineEventListener);
          -1 !== e && xr.splice(e, 1);
        }
        (this.readyState = "closed"),
          (this.id = null),
          this.emitReserved("close", e, t),
          (this.writeBuffer = []),
          (this._prevBufferLen = 0);
      }
    }
  }
  Er.protocol = 4;
  class _r extends Er {
    constructor() {
      super(...arguments), (this._upgrades = []);
    }
    onOpen() {
      if ((super.onOpen(), "open" === this.readyState && this.opts.upgrade))
        for (let e = 0; e < this._upgrades.length; e++)
          this._probe(this._upgrades[e]);
    }
    _probe(e) {
      let t = this.createTransport(e),
        n = !1;
      Er.priorWebsocketSuccess = !1;
      const r = () => {
        n ||
          (t.send([{ type: "ping", data: "probe" }]),
          t.once("packet", (e) => {
            if (!n)
              if ("pong" === e.type && "probe" === e.data) {
                if (
                  ((this.upgrading = !0), this.emitReserved("upgrading", t), !t)
                )
                  return;
                (Er.priorWebsocketSuccess = "websocket" === t.name),
                  this.transport.pause(() => {
                    n ||
                      ("closed" !== this.readyState &&
                        (u(),
                        this.setTransport(t),
                        t.send([{ type: "upgrade" }]),
                        this.emitReserved("upgrade", t),
                        (t = null),
                        (this.upgrading = !1),
                        this.flush()));
                  });
              } else {
                const e = new Error("probe error");
                (e.transport = t.name), this.emitReserved("upgradeError", e);
              }
          }));
      };
      function o() {
        n || ((n = !0), u(), t.close(), (t = null));
      }
      const a = (e) => {
        const n = new Error("probe error: " + e);
        (n.transport = t.name), o(), this.emitReserved("upgradeError", n);
      };
      function i() {
        a("transport closed");
      }
      function l() {
        a("socket closed");
      }
      function s(e) {
        t && e.name !== t.name && o();
      }
      const u = () => {
        t.removeListener("open", r),
          t.removeListener("error", a),
          t.removeListener("close", i),
          this.off("close", l),
          this.off("upgrading", s);
      };
      t.once("open", r),
        t.once("error", a),
        t.once("close", i),
        this.once("close", l),
        this.once("upgrading", s),
        -1 !== this._upgrades.indexOf("webtransport") && "webtransport" !== e
          ? this.setTimeoutFn(() => {
              n || t.open();
            }, 200)
          : t.open();
    }
    onHandshake(e) {
      (this._upgrades = this._filterUpgrades(e.upgrades)), super.onHandshake(e);
    }
    _filterUpgrades(e) {
      const t = [];
      for (let n = 0; n < e.length; n++)
        ~this.transports.indexOf(e[n]) && t.push(e[n]);
      return t;
    }
  }
  class Cr extends _r {
    constructor(e, t = {}) {
      const n = "object" == typeof e ? e : t;
      (!n.transports || (n.transports && "string" == typeof n.transports[0])) &&
        (n.transports = (
          n.transports || ["polling", "websocket", "webtransport"]
        )
          .map((e) => br[e])
          .filter((e) => !!e)),
        super(e, n);
    }
  }
  const Nr = "function" == typeof ArrayBuffer,
    Or = Object.prototype.toString,
    Tr =
      "function" == typeof Blob ||
      ("undefined" != typeof Blob &&
        "[object BlobConstructor]" === Or.call(Blob)),
    Ar =
      "function" == typeof File ||
      ("undefined" != typeof File &&
        "[object FileConstructor]" === Or.call(File));
  function Lr(e) {
    return (
      (Nr &&
        (e instanceof ArrayBuffer ||
          ((e) =>
            "function" == typeof ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e.buffer instanceof ArrayBuffer)(e))) ||
      (Tr && e instanceof Blob) ||
      (Ar && e instanceof File)
    );
  }
  function Pr(e, t) {
    if (!e || "object" != typeof e) return !1;
    if (Array.isArray(e)) {
      for (let t = 0, n = e.length; t < n; t++) if (Pr(e[t])) return !0;
      return !1;
    }
    if (Lr(e)) return !0;
    if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length)
      return Pr(e.toJSON(), !0);
    for (const t in e)
      if (Object.prototype.hasOwnProperty.call(e, t) && Pr(e[t])) return !0;
    return !1;
  }
  function Rr(e) {
    const t = [],
      n = e.data,
      r = e;
    return (
      (r.data = zr(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
    );
  }
  function zr(e, t) {
    if (!e) return e;
    if (Lr(e)) {
      const n = { _placeholder: !0, num: t.length };
      return t.push(e), n;
    }
    if (Array.isArray(e)) {
      const n = new Array(e.length);
      for (let r = 0; r < e.length; r++) n[r] = zr(e[r], t);
      return n;
    }
    if ("object" == typeof e && !(e instanceof Date)) {
      const n = {};
      for (const r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = zr(e[r], t));
      return n;
    }
    return e;
  }
  function jr(e, t) {
    return (e.data = Fr(e.data, t)), delete e.attachments, e;
  }
  function Fr(e, t) {
    if (!e) return e;
    if (e && !0 === e._placeholder) {
      if ("number" == typeof e.num && e.num >= 0 && e.num < t.length)
        return t[e.num];
      throw new Error("illegal attachments");
    }
    if (Array.isArray(e)) for (let n = 0; n < e.length; n++) e[n] = Fr(e[n], t);
    else if ("object" == typeof e)
      for (const n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Fr(e[n], t));
    return e;
  }
  const Dr = [
      "connect",
      "connect_error",
      "disconnect",
      "disconnecting",
      "newListener",
      "removeListener",
    ],
    Ir = 5;
  var Mr;
  !(function (e) {
    (e[(e.CONNECT = 0)] = "CONNECT"),
      (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
      (e[(e.EVENT = 2)] = "EVENT"),
      (e[(e.ACK = 3)] = "ACK"),
      (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
      (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
      (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
  })(Mr || (Mr = {}));
  class Ur {
    constructor(e) {
      this.replacer = e;
    }
    encode(e) {
      return (e.type !== Mr.EVENT && e.type !== Mr.ACK) || !Pr(e)
        ? [this.encodeAsString(e)]
        : this.encodeAsBinary({
            type: e.type === Mr.EVENT ? Mr.BINARY_EVENT : Mr.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id,
          });
    }
    encodeAsString(e) {
      let t = "" + e.type;
      return (
        (e.type !== Mr.BINARY_EVENT && e.type !== Mr.BINARY_ACK) ||
          (t += e.attachments + "-"),
        e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
        null != e.id && (t += e.id),
        null != e.data && (t += JSON.stringify(e.data, this.replacer)),
        t
      );
    }
    encodeAsBinary(e) {
      const t = Rr(e),
        n = this.encodeAsString(t.packet),
        r = t.buffers;
      return r.unshift(n), r;
    }
  }
  function Br(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
  }
  class qr extends Yn {
    constructor(e) {
      super(), (this.reviver = e);
    }
    add(e) {
      let t;
      if ("string" == typeof e) {
        if (this.reconstructor)
          throw new Error("got plaintext data when reconstructing a packet");
        t = this.decodeString(e);
        const n = t.type === Mr.BINARY_EVENT;
        n || t.type === Mr.BINARY_ACK
          ? ((t.type = n ? Mr.EVENT : Mr.ACK),
            (this.reconstructor = new Vr(t)),
            0 === t.attachments && super.emitReserved("decoded", t))
          : super.emitReserved("decoded", t);
      } else {
        if (!Lr(e) && !e.base64) throw new Error("Unknown type: " + e);
        if (!this.reconstructor)
          throw new Error("got binary data when not reconstructing a packet");
        (t = this.reconstructor.takeBinaryData(e)),
          t && ((this.reconstructor = null), super.emitReserved("decoded", t));
      }
    }
    decodeString(e) {
      let t = 0;
      const n = { type: Number(e.charAt(0)) };
      if (void 0 === Mr[n.type])
        throw new Error("unknown packet type " + n.type);
      if (n.type === Mr.BINARY_EVENT || n.type === Mr.BINARY_ACK) {
        const r = t + 1;
        for (; "-" !== e.charAt(++t) && t != e.length; );
        const o = e.substring(r, t);
        if (o != Number(o) || "-" !== e.charAt(t))
          throw new Error("Illegal attachments");
        n.attachments = Number(o);
      }
      if ("/" === e.charAt(t + 1)) {
        const r = t + 1;
        for (; ++t && "," !== e.charAt(t) && t !== e.length; );
        n.nsp = e.substring(r, t);
      } else n.nsp = "/";
      const r = e.charAt(t + 1);
      if ("" !== r && Number(r) == r) {
        const r = t + 1;
        for (; ++t; ) {
          const n = e.charAt(t);
          if (null == n || Number(n) != n) {
            --t;
            break;
          }
          if (t === e.length) break;
        }
        n.id = Number(e.substring(r, t + 1));
      }
      if (e.charAt(++t)) {
        const r = this.tryParse(e.substr(t));
        if (!qr.isPayloadValid(n.type, r)) throw new Error("invalid payload");
        n.data = r;
      }
      return n;
    }
    tryParse(e) {
      try {
        return JSON.parse(e, this.reviver);
      } catch (e) {
        return !1;
      }
    }
    static isPayloadValid(e, t) {
      switch (e) {
        case Mr.CONNECT:
          return Br(t);
        case Mr.DISCONNECT:
          return void 0 === t;
        case Mr.CONNECT_ERROR:
          return "string" == typeof t || Br(t);
        case Mr.EVENT:
        case Mr.BINARY_EVENT:
          return (
            Array.isArray(t) &&
            ("number" == typeof t[0] ||
              ("string" == typeof t[0] && -1 === Dr.indexOf(t[0])))
          );
        case Mr.ACK:
        case Mr.BINARY_ACK:
          return Array.isArray(t);
      }
    }
    destroy() {
      this.reconstructor &&
        (this.reconstructor.finishedReconstruction(),
        (this.reconstructor = null));
    }
  }
  class Vr {
    constructor(e) {
      (this.packet = e), (this.buffers = []), (this.reconPack = e);
    }
    takeBinaryData(e) {
      if (
        (this.buffers.push(e),
        this.buffers.length === this.reconPack.attachments)
      ) {
        const e = jr(this.reconPack, this.buffers);
        return this.finishedReconstruction(), e;
      }
      return null;
    }
    finishedReconstruction() {
      (this.reconPack = null), (this.buffers = []);
    }
  }
  function Hr(e, t, n) {
    return (
      e.on(t, n),
      function () {
        e.off(t, n);
      }
    );
  }
  const $r = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
  });
  class Wr extends Yn {
    constructor(e, t, n) {
      super(),
        (this.connected = !1),
        (this.recovered = !1),
        (this.receiveBuffer = []),
        (this.sendBuffer = []),
        (this._queue = []),
        (this._queueSeq = 0),
        (this.ids = 0),
        (this.acks = {}),
        (this.flags = {}),
        (this.io = e),
        (this.nsp = t),
        n && n.auth && (this.auth = n.auth),
        (this._opts = Object.assign({}, n)),
        this.io._autoConnect && this.open();
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs) return;
      const e = this.io;
      this.subs = [
        Hr(e, "open", this.onopen.bind(this)),
        Hr(e, "packet", this.onpacket.bind(this)),
        Hr(e, "error", this.onerror.bind(this)),
        Hr(e, "close", this.onclose.bind(this)),
      ];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      return (
        this.connected ||
          (this.subEvents(),
          this.io._reconnecting || this.io.open(),
          "open" === this.io._readyState && this.onopen()),
        this
      );
    }
    open() {
      return this.connect();
    }
    send(...e) {
      return e.unshift("message"), this.emit.apply(this, e), this;
    }
    emit(e, ...t) {
      var n, r, o;
      if ($r.hasOwnProperty(e))
        throw new Error('"' + e.toString() + '" is a reserved event name');
      if (
        (t.unshift(e),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      )
        return this._addToQueue(t), this;
      const a = { type: Mr.EVENT, data: t, options: {} };
      if (
        ((a.options.compress = !1 !== this.flags.compress),
        "function" == typeof t[t.length - 1])
      ) {
        const e = this.ids++,
          n = t.pop();
        this._registerAckCallback(e, n), (a.id = e);
      }
      const i =
          null ===
            (r =
              null === (n = this.io.engine) || void 0 === n
                ? void 0
                : n.transport) || void 0 === r
            ? void 0
            : r.writable,
        l =
          this.connected &&
          !(null === (o = this.io.engine) || void 0 === o
            ? void 0
            : o._hasPingExpired());
      return (
        (this.flags.volatile && !i) ||
          (l
            ? (this.notifyOutgoingListeners(a), this.packet(a))
            : this.sendBuffer.push(a)),
        (this.flags = {}),
        this
      );
    }
    _registerAckCallback(e, t) {
      var n;
      const r =
        null !== (n = this.flags.timeout) && void 0 !== n
          ? n
          : this._opts.ackTimeout;
      if (void 0 === r) return void (this.acks[e] = t);
      const o = this.io.setTimeoutFn(() => {
          delete this.acks[e];
          for (let t = 0; t < this.sendBuffer.length; t++)
            this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
          t.call(this, new Error("operation has timed out"));
        }, r),
        a = (...e) => {
          this.io.clearTimeoutFn(o), t.apply(this, e);
        };
      (a.withError = !0), (this.acks[e] = a);
    }
    emitWithAck(e, ...t) {
      return new Promise((n, r) => {
        const o = (e, t) => (e ? r(e) : n(t));
        (o.withError = !0), t.push(o), this.emit(e, ...t);
      });
    }
    _addToQueue(e) {
      let t;
      "function" == typeof e[e.length - 1] && (t = e.pop());
      const n = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: !1,
        args: e,
        flags: Object.assign({ fromQueue: !0 }, this.flags),
      };
      e.push((e, ...r) => {
        if (n === this._queue[0])
          return (
            null !== e
              ? n.tryCount > this._opts.retries &&
                (this._queue.shift(), t && t(e))
              : (this._queue.shift(), t && t(null, ...r)),
            (n.pending = !1),
            this._drainQueue()
          );
      }),
        this._queue.push(n),
        this._drainQueue();
    }
    _drainQueue(e = !1) {
      if (!this.connected || 0 === this._queue.length) return;
      const t = this._queue[0];
      (t.pending && !e) ||
        ((t.pending = !0),
        t.tryCount++,
        (this.flags = t.flags),
        this.emit.apply(this, t.args));
    }
    packet(e) {
      (e.nsp = this.nsp), this.io._packet(e);
    }
    onopen() {
      "function" == typeof this.auth
        ? this.auth((e) => {
            this._sendConnectPacket(e);
          })
        : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(e) {
      this.packet({
        type: Mr.CONNECT,
        data: this._pid
          ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e)
          : e,
      });
    }
    onerror(e) {
      this.connected || this.emitReserved("connect_error", e);
    }
    onclose(e, t) {
      (this.connected = !1),
        delete this.id,
        this.emitReserved("disconnect", e, t),
        this._clearAcks();
    }
    _clearAcks() {
      Object.keys(this.acks).forEach((e) => {
        if (!this.sendBuffer.some((t) => String(t.id) === e)) {
          const t = this.acks[e];
          delete this.acks[e],
            t.withError &&
              t.call(this, new Error("socket has been disconnected"));
        }
      });
    }
    onpacket(e) {
      if (e.nsp === this.nsp)
        switch (e.type) {
          case Mr.CONNECT:
            e.data && e.data.sid
              ? this.onconnect(e.data.sid, e.data.pid)
              : this.emitReserved(
                  "connect_error",
                  new Error(
                    "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                  )
                );
            break;
          case Mr.EVENT:
          case Mr.BINARY_EVENT:
            this.onevent(e);
            break;
          case Mr.ACK:
          case Mr.BINARY_ACK:
            this.onack(e);
            break;
          case Mr.DISCONNECT:
            this.ondisconnect();
            break;
          case Mr.CONNECT_ERROR:
            this.destroy();
            const t = new Error(e.data.message);
            (t.data = e.data.data), this.emitReserved("connect_error", t);
        }
    }
    onevent(e) {
      const t = e.data || [];
      null != e.id && t.push(this.ack(e.id)),
        this.connected
          ? this.emitEvent(t)
          : this.receiveBuffer.push(Object.freeze(t));
    }
    emitEvent(e) {
      if (this._anyListeners && this._anyListeners.length) {
        const t = this._anyListeners.slice();
        for (const n of t) n.apply(this, e);
      }
      super.emit.apply(this, e),
        this._pid &&
          e.length &&
          "string" == typeof e[e.length - 1] &&
          (this._lastOffset = e[e.length - 1]);
    }
    ack(e) {
      const t = this;
      let n = !1;
      return function (...r) {
        n || ((n = !0), t.packet({ type: Mr.ACK, id: e, data: r }));
      };
    }
    onack(e) {
      const t = this.acks[e.id];
      "function" == typeof t &&
        (delete this.acks[e.id],
        t.withError && e.data.unshift(null),
        t.apply(this, e.data));
    }
    onconnect(e, t) {
      (this.id = e),
        (this.recovered = t && this._pid === t),
        (this._pid = t),
        (this.connected = !0),
        this.emitBuffered(),
        this.emitReserved("connect"),
        this._drainQueue(!0);
    }
    emitBuffered() {
      this.receiveBuffer.forEach((e) => this.emitEvent(e)),
        (this.receiveBuffer = []),
        this.sendBuffer.forEach((e) => {
          this.notifyOutgoingListeners(e), this.packet(e);
        }),
        (this.sendBuffer = []);
    }
    ondisconnect() {
      this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
      this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)),
        this.io._destroy(this);
    }
    disconnect() {
      return (
        this.connected && this.packet({ type: Mr.DISCONNECT }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
      );
    }
    close() {
      return this.disconnect();
    }
    compress(e) {
      return (this.flags.compress = e), this;
    }
    get volatile() {
      return (this.flags.volatile = !0), this;
    }
    timeout(e) {
      return (this.flags.timeout = e), this;
    }
    onAny(e) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.push(e),
        this
      );
    }
    prependAny(e) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.unshift(e),
        this
      );
    }
    offAny(e) {
      if (!this._anyListeners) return this;
      if (e) {
        const t = this._anyListeners;
        for (let n = 0; n < t.length; n++)
          if (e === t[n]) return t.splice(n, 1), this;
      } else this._anyListeners = [];
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(e) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.push(e),
        this
      );
    }
    prependAnyOutgoing(e) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.unshift(e),
        this
      );
    }
    offAnyOutgoing(e) {
      if (!this._anyOutgoingListeners) return this;
      if (e) {
        const t = this._anyOutgoingListeners;
        for (let n = 0; n < t.length; n++)
          if (e === t[n]) return t.splice(n, 1), this;
      } else this._anyOutgoingListeners = [];
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(e) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const t = this._anyOutgoingListeners.slice();
        for (const n of t) n.apply(this, e.data);
      }
    }
  }
  function Qr(e) {
    (e = e || {}),
      (this.ms = e.min || 100),
      (this.max = e.max || 1e4),
      (this.factor = e.factor || 2),
      (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
      (this.attempts = 0);
  }
  (Qr.prototype.duration = function () {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var t = Math.random(),
        n = Math.floor(t * this.jitter * e);
      e = 1 & Math.floor(10 * t) ? e + n : e - n;
    }
    return 0 | Math.min(e, this.max);
  }),
    (Qr.prototype.reset = function () {
      this.attempts = 0;
    }),
    (Qr.prototype.setMin = function (e) {
      this.ms = e;
    }),
    (Qr.prototype.setMax = function (e) {
      this.max = e;
    }),
    (Qr.prototype.setJitter = function (e) {
      this.jitter = e;
    });
  class Kr extends Yn {
    constructor(e, t) {
      var n;
      super(),
        (this.nsps = {}),
        (this.subs = []),
        e && "object" == typeof e && ((t = e), (e = void 0)),
        ((t = t || {}).path = t.path || "/socket.io"),
        (this.opts = t),
        nr(this, t),
        this.reconnection(!1 !== t.reconnection),
        this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(t.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
        this.randomizationFactor(
          null !== (n = t.randomizationFactor) && void 0 !== n ? n : 0.5
        ),
        (this.backoff = new Qr({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor(),
        })),
        this.timeout(null == t.timeout ? 2e4 : t.timeout),
        (this._readyState = "closed"),
        (this.uri = e);
      const r = t.parser || a;
      (this.encoder = new r.Encoder()),
        (this.decoder = new r.Decoder()),
        (this._autoConnect = !1 !== t.autoConnect),
        this._autoConnect && this.open();
    }
    reconnection(e) {
      return arguments.length
        ? ((this._reconnection = !!e), e || (this.skipReconnect = !0), this)
        : this._reconnection;
    }
    reconnectionAttempts(e) {
      return void 0 === e
        ? this._reconnectionAttempts
        : ((this._reconnectionAttempts = e), this);
    }
    reconnectionDelay(e) {
      var t;
      return void 0 === e
        ? this._reconnectionDelay
        : ((this._reconnectionDelay = e),
          null === (t = this.backoff) || void 0 === t || t.setMin(e),
          this);
    }
    randomizationFactor(e) {
      var t;
      return void 0 === e
        ? this._randomizationFactor
        : ((this._randomizationFactor = e),
          null === (t = this.backoff) || void 0 === t || t.setJitter(e),
          this);
    }
    reconnectionDelayMax(e) {
      var t;
      return void 0 === e
        ? this._reconnectionDelayMax
        : ((this._reconnectionDelayMax = e),
          null === (t = this.backoff) || void 0 === t || t.setMax(e),
          this);
    }
    timeout(e) {
      return arguments.length ? ((this._timeout = e), this) : this._timeout;
    }
    maybeReconnectOnOpen() {
      !this._reconnecting &&
        this._reconnection &&
        0 === this.backoff.attempts &&
        this.reconnect();
    }
    open(e) {
      if (~this._readyState.indexOf("open")) return this;
      this.engine = new Cr(this.uri, this.opts);
      const t = this.engine,
        n = this;
      (this._readyState = "opening"), (this.skipReconnect = !1);
      const r = Hr(t, "open", function () {
          n.onopen(), e && e();
        }),
        o = (t) => {
          this.cleanup(),
            (this._readyState = "closed"),
            this.emitReserved("error", t),
            e ? e(t) : this.maybeReconnectOnOpen();
        },
        a = Hr(t, "error", o);
      if (!1 !== this._timeout) {
        const e = this._timeout,
          n = this.setTimeoutFn(() => {
            r(), o(new Error("timeout")), t.close();
          }, e);
        this.opts.autoUnref && n.unref(),
          this.subs.push(() => {
            this.clearTimeoutFn(n);
          });
      }
      return this.subs.push(r), this.subs.push(a), this;
    }
    connect(e) {
      return this.open(e);
    }
    onopen() {
      this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
      const e = this.engine;
      this.subs.push(
        Hr(e, "ping", this.onping.bind(this)),
        Hr(e, "data", this.ondata.bind(this)),
        Hr(e, "error", this.onerror.bind(this)),
        Hr(e, "close", this.onclose.bind(this)),
        Hr(this.decoder, "decoded", this.ondecoded.bind(this))
      );
    }
    onping() {
      this.emitReserved("ping");
    }
    ondata(e) {
      try {
        this.decoder.add(e);
      } catch (e) {
        this.onclose("parse error", e);
      }
    }
    ondecoded(e) {
      Xn(() => {
        this.emitReserved("packet", e);
      }, this.setTimeoutFn);
    }
    onerror(e) {
      this.emitReserved("error", e);
    }
    socket(e, t) {
      let n = this.nsps[e];
      return (
        n
          ? this._autoConnect && !n.active && n.connect()
          : ((n = new Wr(this, e, t)), (this.nsps[e] = n)),
        n
      );
    }
    _destroy(e) {
      const t = Object.keys(this.nsps);
      for (const e of t) if (this.nsps[e].active) return;
      this._close();
    }
    _packet(e) {
      const t = this.encoder.encode(e);
      for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options);
    }
    cleanup() {
      this.subs.forEach((e) => e()),
        (this.subs.length = 0),
        this.decoder.destroy();
    }
    _close() {
      (this.skipReconnect = !0),
        (this._reconnecting = !1),
        this.onclose("forced close");
    }
    disconnect() {
      return this._close();
    }
    onclose(e, t) {
      var n;
      this.cleanup(),
        null === (n = this.engine) || void 0 === n || n.close(),
        this.backoff.reset(),
        (this._readyState = "closed"),
        this.emitReserved("close", e, t),
        this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect) return this;
      const e = this;
      if (this.backoff.attempts >= this._reconnectionAttempts)
        this.backoff.reset(),
          this.emitReserved("reconnect_failed"),
          (this._reconnecting = !1);
      else {
        const t = this.backoff.duration();
        this._reconnecting = !0;
        const n = this.setTimeoutFn(() => {
          e.skipReconnect ||
            (this.emitReserved("reconnect_attempt", e.backoff.attempts),
            e.skipReconnect ||
              e.open((t) => {
                t
                  ? ((e._reconnecting = !1),
                    e.reconnect(),
                    this.emitReserved("reconnect_error", t))
                  : e.onreconnect();
              }));
        }, t);
        this.opts.autoUnref && n.unref(),
          this.subs.push(() => {
            this.clearTimeoutFn(n);
          });
      }
    }
    onreconnect() {
      const e = this.backoff.attempts;
      (this._reconnecting = !1),
        this.backoff.reset(),
        this.emitReserved("reconnect", e);
    }
  }
  const Gr = {};
  function Yr(e, t) {
    "object" == typeof e && ((t = e), (e = void 0));
    const n = (function (e, t = "", n) {
        let r = e;
        (n = n || ("undefined" != typeof location && location)),
          null == e && (e = n.protocol + "//" + n.host),
          "string" == typeof e &&
            ("/" === e.charAt(0) &&
              (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e),
            /^(https?|wss?):\/\//.test(e) ||
              (e = void 0 !== n ? n.protocol + "//" + e : "https://" + e),
            (r = kr(e))),
          r.port ||
            (/^(http|ws)$/.test(r.protocol)
              ? (r.port = "80")
              : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
          (r.path = r.path || "/");
        const o = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
        return (
          (r.id = r.protocol + "://" + o + ":" + r.port + t),
          (r.href =
            r.protocol +
            "://" +
            o +
            (n && n.port === r.port ? "" : ":" + r.port)),
          r
        );
      })(e, (t = t || {}).path || "/socket.io"),
      r = n.source,
      o = n.id,
      a = n.path,
      i = Gr[o] && a in Gr[o].nsps;
    let l;
    return (
      t.forceNew || t["force new connection"] || !1 === t.multiplex || i
        ? (l = new Kr(r, t))
        : (Gr[o] || (Gr[o] = new Kr(r, t)), (l = Gr[o])),
      n.query && !t.query && (t.query = n.queryKey),
      l.socket(n.path, t)
    );
  }
  Object.assign(Yr, { Manager: Kr, Socket: Wr, io: Yr, connect: Yr });
  var Xr = Yr("http://127.0.0.1:3000/", {
      transports: ["websocket"],
      upgrade: !1,
      reconnectionAttempts: 5,
      timeout: 5e3,
    }),
    Jr = n(728),
    Zr = {};
  function eo(e) {
    var t = e.message,
      n = e.agentName,
      r = e.agentAvatar,
      o = e.onContinue,
      a = e.onClose,
      l = e.brandLogo;
    return i.createElement(
      "div",
      { className: "chat-trigger" },
      i.createElement(
        "button",
        {
          className: "chat-trigger-close",
          onClick: a,
          "aria-label": "Close message",
        },
        "×"
      ),
      i.createElement(
        "div",
        { className: "chat-trigger-content" },
        i.createElement(
          "div",
          { className: "chat-trigger-header" },
          i.createElement("img", {
            src: r || "/placeholder.svg",
            alt: n,
            className: "chat-trigger-avatar",
          }),
          i.createElement("span", { className: "chat-trigger-name" }, n)
        ),
        i.createElement("p", { className: "chat-trigger-message" }, t),
        i.createElement(
          "button",
          { className: "chat-trigger-button", onClick: o },
          "Continue conversation"
        )
      ),
      i.createElement(
        "div",
        { className: "chat-trigger-brand" },
        i.createElement("img", {
          src: l || "/placeholder.svg",
          alt: "Brand",
          className: "chat-trigger-brand-avatar",
        })
      )
    );
  }
  function to(e, t) {
    if (e) {
      if ("string" == typeof e) return no(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? no(e, t)
          : void 0
      );
    }
  }
  function no(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  (Zr.styleTagTransform = v()),
    (Zr.setAttributes = m()),
    (Zr.insert = p().bind(null, "head")),
    (Zr.domAPI = f()),
    (Zr.insertStyleElement = y()),
    u()(Jr.A, Zr),
    Jr.A && Jr.A.locals && Jr.A.locals;
  var ro = "executedTriggers";
  const oo = function (e, t, n) {
    var r,
      o,
      a =
        ((r = (0, i.useState)([])),
        (o = 2),
        (function (e) {
          if (Array.isArray(e)) return e;
        })(r) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                s = !0,
                u = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = a.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    s = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return l;
            }
          })(r, o) ||
          to(r, o) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()),
      l = a[0],
      s = a[1],
      u = (0, i.useCallback)(function (e) {
        return JSON.parse(localStorage.getItem(ro) || "[]").includes(e);
      }, []),
      c = (0, i.useCallback)(function (e) {
        var t = JSON.parse(localStorage.getItem(ro) || "[]");
        localStorage.setItem(
          ro,
          JSON.stringify(
            [].concat(
              (function (e) {
                return (
                  (function (e) {
                    if (Array.isArray(e)) return no(e);
                  })(e) ||
                  (function (e) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != e[Symbol.iterator]) ||
                      null != e["@@iterator"]
                    )
                      return Array.from(e);
                  })(e) ||
                  to(e) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              })(t),
              [e]
            )
          )
        );
      }, []);
    (0, i.useEffect)(
      function () {
        bn.get("".concat(re, "/trigger-service/get?apiKey=").concat(e)).then(
          function (e) {
            e.data.success && s(e.data.data);
          }
        );
      },
      [e]
    ),
      (0, i.useEffect)(
        function () {
          if (l.length)
            return (
              l.forEach(function (e) {
                var t = new Set(),
                  n = e.conditions.length;
                e.conditions.forEach(function (r) {
                  var o, a, i, l;
                  switch (r.type) {
                    case "on_page":
                      (a = r.value),
                        (i = window.location.pathname),
                        (l =
                          "^" +
                          a
                            .replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&")
                            .replace(/\*/g, ".*") +
                          "$"),
                        new RegExp(l).test(i) &&
                          (t.add(r.type), t.size === n && f(e));
                      break;
                    case "on_click_link":
                      null === (o = document.querySelector(r.value)) ||
                        void 0 === o ||
                        o.addEventListener("click", function () {
                          t.add(r.type), t.size === n && f(e);
                        });
                      break;
                    case "on_leave_intent":
                      document.addEventListener(
                        "mouseleave",
                        function () {
                          t.add(r.type), t.size === n && f(e);
                        },
                        { once: !0 }
                      );
                      break;
                    case "after_delay":
                      setTimeout(function () {
                        t.add(r.type), t.size === n && f(e);
                      }, 1e3 * parseInt(r.value));
                  }
                });
              }),
              function () {
                l.forEach(function (e) {
                  e.conditions.forEach(function (e) {
                    var t;
                    "on_click_link" === e.type &&
                      (null === (t = document.querySelector(e.value)) ||
                        void 0 === t ||
                        t.removeEventListener("click", null));
                  });
                });
              }
            );
        },
        [l]
      );
    var f = (0, i.useCallback)(
      function (e) {
        if (!e.executeOnce || !u(e.id)) {
          var r = function () {
            switch ((e.executeOnce && c(e.id), e.action)) {
              case "show_message":
                Xr.emit("trigger-send-message", { sessionId: n, trigger: e });
                break;
              case "open_chatbox":
                t();
            }
          };
          e.delayTime ? setTimeout(r, parseInt(e.delayTime)) : r();
        }
      },
      [n, t]
    );
  };
  function ao(e) {
    return (
      (ao =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      ao(e)
    );
  }
  function io(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function lo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? io(Object(n), !0).forEach(function (t) {
            so(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : io(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function so(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e) {
          if ("object" != ao(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != ao(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == ao(t) ? t : t + "";
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function uo(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return go(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      mo(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function co() {
    co = function () {
      return t;
    };
    var e,
      t = {},
      n = Object.prototype,
      r = n.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value;
        },
      a = "function" == typeof Symbol ? Symbol : {},
      i = a.iterator || "@@iterator",
      l = a.asyncIterator || "@@asyncIterator",
      s = a.toStringTag || "@@toStringTag";
    function u(e, t, n) {
      return (
        Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      );
    }
    try {
      u({}, "");
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function c(e, t, n, r) {
      var a = t && t.prototype instanceof y ? t : y,
        i = Object.create(a.prototype),
        l = new A(r || []);
      return o(i, "_invoke", { value: C(e, n, l) }), i;
    }
    function f(e, t, n) {
      try {
        return { type: "normal", arg: e.call(t, n) };
      } catch (e) {
        return { type: "throw", arg: e };
      }
    }
    t.wrap = c;
    var d = "suspendedStart",
      p = "suspendedYield",
      h = "executing",
      m = "completed",
      g = {};
    function y() {}
    function b() {}
    function v() {}
    var w = {};
    u(w, i, function () {
      return this;
    });
    var k = Object.getPrototypeOf,
      S = k && k(k(L([])));
    S && S !== n && r.call(S, i) && (w = S);
    var x = (v.prototype = y.prototype = Object.create(w));
    function E(e) {
      ["next", "throw", "return"].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function _(e, t) {
      function n(o, a, i, l) {
        var s = f(e[o], e, a);
        if ("throw" !== s.type) {
          var u = s.arg,
            c = u.value;
          return c && "object" == ao(c) && r.call(c, "__await")
            ? t.resolve(c.__await).then(
                function (e) {
                  n("next", e, i, l);
                },
                function (e) {
                  n("throw", e, i, l);
                }
              )
            : t.resolve(c).then(
                function (e) {
                  (u.value = e), i(u);
                },
                function (e) {
                  return n("throw", e, i, l);
                }
              );
        }
        l(s.arg);
      }
      var a;
      o(this, "_invoke", {
        value: function (e, r) {
          function o() {
            return new t(function (t, o) {
              n(e, r, t, o);
            });
          }
          return (a = a ? a.then(o, o) : o());
        },
      });
    }
    function C(t, n, r) {
      var o = d;
      return function (a, i) {
        if (o === h) throw Error("Generator is already running");
        if (o === m) {
          if ("throw" === a) throw i;
          return { value: e, done: !0 };
        }
        for (r.method = a, r.arg = i; ; ) {
          var l = r.delegate;
          if (l) {
            var s = N(l, r);
            if (s) {
              if (s === g) continue;
              return s;
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;
          else if ("throw" === r.method) {
            if (o === d) throw ((o = m), r.arg);
            r.dispatchException(r.arg);
          } else "return" === r.method && r.abrupt("return", r.arg);
          o = h;
          var u = f(t, n, r);
          if ("normal" === u.type) {
            if (((o = r.done ? m : p), u.arg === g)) continue;
            return { value: u.arg, done: r.done };
          }
          "throw" === u.type &&
            ((o = m), (r.method = "throw"), (r.arg = u.arg));
        }
      };
    }
    function N(t, n) {
      var r = n.method,
        o = t.iterator[r];
      if (o === e)
        return (
          (n.delegate = null),
          ("throw" === r &&
            t.iterator.return &&
            ((n.method = "return"),
            (n.arg = e),
            N(t, n),
            "throw" === n.method)) ||
            ("return" !== r &&
              ((n.method = "throw"),
              (n.arg = new TypeError(
                "The iterator does not provide a '" + r + "' method"
              )))),
          g
        );
      var a = f(o, t.iterator, n.arg);
      if ("throw" === a.type)
        return (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), g;
      var i = a.arg;
      return i
        ? i.done
          ? ((n[t.resultName] = i.value),
            (n.next = t.nextLoc),
            "return" !== n.method && ((n.method = "next"), (n.arg = e)),
            (n.delegate = null),
            g)
          : i
        : ((n.method = "throw"),
          (n.arg = new TypeError("iterator result is not an object")),
          (n.delegate = null),
          g);
    }
    function O(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function T(e) {
      var t = e.completion || {};
      (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function A(e) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        e.forEach(O, this),
        this.reset(!0);
    }
    function L(t) {
      if (t || "" === t) {
        var n = t[i];
        if (n) return n.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            a = function n() {
              for (; ++o < t.length; )
                if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
              return (n.value = e), (n.done = !0), n;
            };
          return (a.next = a);
        }
      }
      throw new TypeError(ao(t) + " is not iterable");
    }
    return (
      (b.prototype = v),
      o(x, "constructor", { value: v, configurable: !0 }),
      o(v, "constructor", { value: b, configurable: !0 }),
      (b.displayName = u(v, s, "GeneratorFunction")),
      (t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return (
          !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
        );
      }),
      (t.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, v)
            : ((e.__proto__ = v), u(e, s, "GeneratorFunction")),
          (e.prototype = Object.create(x)),
          e
        );
      }),
      (t.awrap = function (e) {
        return { __await: e };
      }),
      E(_.prototype),
      u(_.prototype, l, function () {
        return this;
      }),
      (t.AsyncIterator = _),
      (t.async = function (e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new _(c(e, n, r, o), a);
        return t.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      E(x),
      u(x, s, "Generator"),
      u(x, i, function () {
        return this;
      }),
      u(x, "toString", function () {
        return "[object Generator]";
      }),
      (t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.push(r);
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in t) return (e.value = r), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (t.values = L),
      (A.prototype = {
        constructor: A,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = e),
            this.tryEntries.forEach(T),
            !t)
          )
            for (var n in this)
              "t" === n.charAt(0) &&
                r.call(this, n) &&
                !isNaN(+n.slice(1)) &&
                (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function o(r, o) {
            return (
              (l.type = "throw"),
              (l.arg = t),
              (n.next = r),
              o && ((n.method = "next"), (n.arg = e)),
              !!o
            );
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var i = this.tryEntries[a],
              l = i.completion;
            if ("root" === i.tryLoc) return o("end");
            if (i.tryLoc <= this.prev) {
              var s = r.call(i, "catchLoc"),
                u = r.call(i, "finallyLoc");
              if (s && u) {
                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return o(i.finallyLoc);
              } else if (s) {
                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
              } else {
                if (!u) throw Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return o(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (
              o.tryLoc <= this.prev &&
              r.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var a = o;
              break;
            }
          }
          a &&
            ("break" === e || "continue" === e) &&
            a.tryLoc <= t &&
            t <= a.finallyLoc &&
            (a = null);
          var i = a ? a.completion : {};
          return (
            (i.type = e),
            (i.arg = t),
            a
              ? ((this.method = "next"), (this.next = a.finallyLoc), g)
              : this.complete(i)
          );
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return (
            "break" === e.type || "continue" === e.type
              ? (this.next = e.arg)
              : "return" === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === e.type && t && (this.next = t),
            g
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e)
              return this.complete(n.completion, n.afterLoc), T(n), g;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ("throw" === r.type) {
                var o = r.arg;
                T(n);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (t, n, r) {
          return (
            (this.delegate = { iterator: L(t), resultName: n, nextLoc: r }),
            "next" === this.method && (this.arg = e),
            g
          );
        },
      }),
      t
    );
  }
  function fo(e, t, n, r, o, a, i) {
    try {
      var l = e[a](i),
        s = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(s) : Promise.resolve(s).then(r, o);
  }
  function po(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, o) {
        var a = e.apply(t, n);
        function i(e) {
          fo(a, r, o, i, l, "next", e);
        }
        function l(e) {
          fo(a, r, o, i, l, "throw", e);
        }
        i(void 0);
      });
    };
  }
  function ho(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var r,
            o,
            a,
            i,
            l = [],
            s = !0,
            u = !1;
          try {
            if (((a = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              s = !1;
            } else
              for (
                ;
                !(s = (r = a.call(n)).done) &&
                (l.push(r.value), l.length !== t);
                s = !0
              );
          } catch (e) {
            (u = !0), (o = e);
          } finally {
            try {
              if (!s && null != n.return && ((i = n.return()), Object(i) !== i))
                return;
            } finally {
              if (u) throw o;
            }
          }
          return l;
        }
      })(e, t) ||
      mo(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function mo(e, t) {
    if (e) {
      if ("string" == typeof e) return go(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? go(e, t)
          : void 0
      );
    }
  }
  function go(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var yo = function () {
      var e,
        t,
        n,
        r = ho((0, i.useState)(!1), 2),
        o = r[0],
        a = r[1],
        l = ho((0, i.useState)(!1), 2),
        s = l[0],
        u = l[1],
        c = ho((0, i.useState)(""), 2),
        f = c[0],
        d = c[1],
        p = ho((0, i.useState)(""), 2),
        h = p[0],
        m = (p[1], ho((0, i.useState)(null), 2)),
        g = m[0],
        y = m[1],
        b = ho((0, i.useState)([]), 2),
        v = b[0],
        w = b[1],
        k = ho((0, i.useState)(!1), 2),
        S = k[0],
        x = k[1],
        E = ho((0, i.useState)(null), 2),
        _ = E[0],
        C = E[1],
        N = ho((0, i.useState)(null), 2),
        O = N[0],
        T = N[1],
        A = (0, i.useRef)(null),
        L = (0, i.useRef)(null);
      oo(
        apiKey,
        function () {
          return a(!0);
        },
        f
      ),
        (0, i.useEffect)(function () {
          var e = function () {
            u(window.innerWidth < 768);
          };
          e(), U();
          var t = F();
          return (
            d(t),
            D(t),
            Xr.connect(),
            Xr.emit("join-room", t),
            Xr.on("receiveMessage", I),
            Xr.on("trigger-message", z),
            R(t),
            window.addEventListener("resize", e),
            function () {
              return window.removeEventListener("resize", e);
            }
          );
        }, []),
        (0, i.useEffect)(
          function () {
            var e = function () {
              o &&
                L.current &&
                A.current &&
                setTimeout(function () {
                  var e;
                  null === (e = L.current) ||
                    void 0 === e ||
                    e.scrollIntoView({ behavior: "smooth" });
                }, 100);
            };
            return (
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [o]
        );
      var P = (function () {
          var e = po(
            co().mark(function e() {
              var t, n, r, o, a;
              return co().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((t = navigator.userAgent),
                          (n =
                            /(chrome|safari|firefox|edge|opera(?=\/))\/?\s*(\d+)/i),
                          (r = t.match(n)),
                          (o = {
                            osName: "unknown",
                            browserName: r ? r[1] : "unknown",
                            browserVersion: r ? r[2] : "unknown",
                            userAgent: t,
                            engineName: "unknown",
                            engineVersion: "unknown",
                          }),
                          !navigator.userAgentData)
                        ) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (e.prev = 5),
                          (e.next = 8),
                          navigator.userAgentData.getHighEntropyValues([
                            "platform",
                            "platformVersion",
                          ])
                        );
                      case 8:
                        (a = e.sent),
                          (o.osName = a.platform),
                          (o.engineVersion = a.platformVersion),
                          (e.next = 16);
                        break;
                      case 13:
                        (e.prev = 13),
                          (e.t0 = e.catch(5)),
                          console.warn("Error fetching User-Agent Data:", e.t0);
                      case 16:
                        return e.abrupt("return", o);
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[5, 13]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        R = (function () {
          var e = po(
            co().mark(function e(t) {
              var n, r, o, a, i;
              return co().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          fetch("https://get.geojs.io/v1/ip/geo.json")
                        );
                      case 3:
                        return (n = e.sent), (e.next = 6), n.json();
                      case 6:
                        return (r = e.sent), (e.next = 9), P();
                      case 9:
                        (o = e.sent),
                          (a = {
                            sessionId: t,
                            geolocation: {
                              latitude: r.latitude || "unknown",
                              longitude: r.longitude || "unknown",
                              city: r.city || "unknown",
                              country: r.country || "unknown",
                              ip: r.ip || "unknown",
                              region: r.region || "unkown",
                            },
                            system: o,
                          }),
                          Xr.emit("update_session_meta", a),
                          (e.next = 23);
                        break;
                      case 14:
                        return (
                          (e.prev = 14),
                          (e.t0 = e.catch(0)),
                          console.error(
                            "Error fetching geolocation data:",
                            e.t0
                          ),
                          (e.t1 = t),
                          (e.next = 20),
                          P()
                        );
                      case 20:
                        (e.t2 = e.sent),
                          (i = { sessionId: e.t1, system: e.t2 }),
                          Xr.emit("update_session_meta", i);
                      case 23:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 14]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        z = function (e, t) {
          w(function (t) {
            return [].concat(uo(t), [e]);
          }),
            C(t),
            x(!0);
        },
        j = function () {
          a(!o);
        },
        F = function () {
          var e = localStorage.getItem("deviceId");
          return (
            e ||
              ((e = "device_".concat(
                Math.random().toString(36).substring(2, 15)
              )),
              localStorage.setItem("deviceId", e)),
            e
          );
        },
        D = (function () {
          var e = po(
            co().mark(function e(t) {
              var n;
              return co().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          console.log("Fetching user messages..."),
                          (e.prev = 1),
                          (e.next = 4),
                          bn.get(
                            "".concat(
                              re,
                              "/messages-service/fetch-customer-messages"
                            ),
                            { params: { apiKey, sessionId: t } }
                          )
                        );
                      case 4:
                        (n = e.sent).data.data.customerEmail &&
                          localStorage.setItem(
                            "userEmail",
                            n.data.data.customerEmail
                          ),
                          n.data.data.currentAgent &&
                            y(n.data.data.currentAgent),
                          w(n.data.data.messages),
                          (e.next = 14);
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(1)),
                          w([]),
                          console.error("Error fetching user messages:", e.t0);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 10]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        I = function (e) {
          console.log("Received message:", e),
            w(function (t) {
              return [].concat(uo(t), [e]);
            }),
            C(e),
            x(!0);
        },
        M = (function () {
          var e = po(
            co().mark(function e(t, n, r) {
              var o, a, i, l, s;
              return co().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (("text" !== n || t.trim()) && ("text" === n || r)) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        if (
                          ((o = {
                            id: Date.now().toString(),
                            sender: "customer",
                            content: "text" === n ? t : r,
                            contentType: n,
                            status: "sending",
                          }),
                          w(function (e) {
                            return [].concat(uo(e), [o]);
                          }),
                          (e.prev = 4),
                          console.log("Sending messages"),
                          (a = new FormData()).append("businessId", 1),
                          h && a.append("customerEmail", h),
                          a.append("sessionId", f),
                          a.append("sender", "customer"),
                          "text" !== n)
                        ) {
                          e.next = 15;
                          break;
                        }
                        a.append("content", t), (e.next = 35);
                        break;
                      case 15:
                        if ("image" !== n || !r) {
                          e.next = 26;
                          break;
                        }
                        if (!r.startsWith("data:image")) {
                          e.next = 23;
                          break;
                        }
                        return (
                          (e.next = 19),
                          fetch(r).then(function (e) {
                            return e.blob();
                          })
                        );
                      case 19:
                        (i = e.sent),
                          a.append("file", i, "image.jpg"),
                          (e.next = 24);
                        break;
                      case 23:
                        a.append("file", r);
                      case 24:
                        e.next = 35;
                        break;
                      case 26:
                        if ("audio" !== n || !r) {
                          e.next = 35;
                          break;
                        }
                        if (!r.startsWith("blob:")) {
                          e.next = 34;
                          break;
                        }
                        return (
                          (e.next = 30),
                          fetch(r).then(function (e) {
                            return e.blob();
                          })
                        );
                      case 30:
                        (l = e.sent),
                          a.append("file", l, "audio.webm"),
                          (e.next = 35);
                        break;
                      case 34:
                        a.append("file", r);
                      case 35:
                        return (
                          a.append("contentType", n),
                          (e.next = 38),
                          bn.post(
                            "".concat(re, "/messages-service/send-message"),
                            a,
                            {
                              headers: {
                                "Content-Type": "multipart/form-data",
                              },
                            }
                          )
                        );
                      case 38:
                        (s = e.sent),
                          w(function (e) {
                            return e.map(function (e) {
                              return e.id === o.id
                                ? lo(lo({}, e), {}, { status: "sent" })
                                : e;
                            });
                          }),
                          console.log(s.data),
                          (e.next = 47);
                        break;
                      case 43:
                        (e.prev = 43),
                          (e.t0 = e.catch(4)),
                          w(function (e) {
                            return e.map(function (e) {
                              return e.id === o.id
                                ? lo(lo({}, e), {}, { status: "error" })
                                : e;
                            });
                          }),
                          console.log(e.t0);
                      case 47:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 43]]
              );
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        U = (function () {
          var e = po(
            co().mark(function e() {
              var t, n;
              return co().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (t = { apiKey }),
                          (e.next = 4),
                          bn.get("".concat(re, "/widget-service/get"), {
                            params: t,
                          })
                        );
                      case 4:
                        (n = e.sent),
                          T(n.data.data),
                          console.log(n.data),
                          (e.next = 12);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(0)),
                          console.error(
                            "Error fetching widget settings:",
                            e.t0
                          );
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return O
        ? i.createElement(
            i.Fragment,
            null,
            S &&
              _ &&
              !o &&
              i.createElement(eo, {
                message: _.message || _.content,
                agentName: _.agentName || _.agent.name,
                agentAvatar: _.agentAvatar || _.agent.avatar,
                brandLogo: O.avatarUrl,
                onContinue: function () {
                  x(!1), a(!0);
                },
                onClose: function () {
                  x(!1);
                },
              }),
            !o &&
              i.createElement(
                "button",
                {
                  className: "chat-widget-button",
                  onClick: j,
                  "aria-label": "Open chat widget",
                  style: {
                    backgroundColor:
                      null !== (e = O.colorScheme) && void 0 !== e
                        ? e
                        : "#DDE8FC",
                  },
                },
                i.createElement("img", {
                  src: ""
                    .concat(oe)
                    .concat(
                      null !== (t = O.avatarUrl) && void 0 !== t
                        ? t
                        : "/public/app_logo.png"
                    ),
                  style: so({ width: "30px" }, "width", "30px"),
                })
              ),
            o &&
              i.createElement(
                "div",
                {
                  ref: A,
                  className: "chat-widget-container ".concat(s ? "mobile" : ""),
                },
                i.createElement(An, {
                  onClose: j,
                  colorScheme: O.colorScheme,
                  currentAgent: g,
                  businessInfo: O,
                }),
                i.createElement(Cn, {
                  messages: v,
                  avatar:
                    null !== (n = null == g ? void 0 : g.avatar) && void 0 !== n
                      ? n
                      : null == O
                      ? void 0
                      : O.avatarUrl,
                  senderName: O.businessName,
                  colorScheme: O.colorScheme,
                  sessionId: f,
                }),
                i.createElement(ee, { onSendMessage: M, inputRef: L })
              )
          )
        : null;
    },
    bo = document.createElement("div");
  document.body.appendChild(bo),
    (0, l.createRoot)(bo).render(i.createElement(yo, null)),
    (window.ChatWidget = r);
})();
