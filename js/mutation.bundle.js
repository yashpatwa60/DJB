/*! For license information please see mutation.bundle.js.LICENSE.txt */
!(function () {
  var e = {
      78: function (e, t, n) {
        var i, r, o, a;
        function s(e) {
          return (s =
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
                })(e);
        }
        (a = function (e) {
          "use strict";
          function t(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function n(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          e = e && e.hasOwnProperty("default") ? e.default : e;
          var i = {
              autoShow: !1,
              autoHide: !1,
              autoPick: !1,
              inline: !1,
              container: null,
              trigger: null,
              language: "",
              format: "mm/dd/yyyy",
              date: null,
              startDate: null,
              endDate: null,
              startView: 0,
              weekStart: 0,
              yearFirst: !1,
              yearSuffix: "",
              days: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
              months: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              monthsShort: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              itemTag: "li",
              mutedClass: "muted",
              pickedClass: "picked",
              disabledClass: "disabled",
              highlightedClass: "highlighted",
              template:
                '<div class="datepicker-container"><div class="datepicker-panel" data-view="years picker"><ul><li data-view="years prev">&lsaquo;</li><li data-view="years current"></li><li data-view="years next">&rsaquo;</li></ul><ul data-view="years"></ul></div><div class="datepicker-panel" data-view="months picker"><ul><li data-view="year prev">&lsaquo;</li><li data-view="year current"></li><li data-view="year next">&rsaquo;</li></ul><ul data-view="months"></ul></div><div class="datepicker-panel" data-view="days picker"><ul><li data-view="month prev">&lsaquo;</li><li data-view="month current"></li><li data-view="month next">&rsaquo;</li></ul><ul data-view="week"></ul><ul data-view="days"></ul></div></div>',
              offset: 10,
              zIndex: 1e3,
              filter: null,
              show: null,
              hide: null,
              pick: null,
            },
            r = "undefined" != typeof window,
            o = r ? window : {},
            a = !!r && "ontouchstart" in o.document.documentElement,
            s = "datepicker",
            l = "click.".concat(s),
            u = "focus.".concat(s),
            c = "hide.".concat(s),
            d = "keyup.".concat(s),
            f = "pick.".concat(s),
            p = "resize.".concat(s),
            h = "scroll.".concat(s),
            g = "show.".concat(s),
            v = "touchstart.".concat(s),
            m = "".concat(s, "-hide"),
            y = {},
            b = Object.prototype.toString;
          function w(e) {
            return "string" == typeof e;
          }
          var x = Number.isNaN || o.isNaN;
          function k(e) {
            return "number" == typeof e && !x(e);
          }
          function T(e) {
            return void 0 === e;
          }
          function C(e) {
            return (
              "date" === ((t = e), b.call(t).slice(8, -1).toLowerCase()) &&
              !x(e.getTime())
            );
            var t;
          }
          function S(e, t) {
            for (
              var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2;
              r < n;
              r++
            )
              i[r - 2] = arguments[r];
            return function () {
              for (
                var n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              return e.apply(t, i.concat(r));
            };
          }
          function D(e) {
            return '[data-view="'.concat(e, '"]');
          }
          function N(e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
          }
          function E(e, t) {
            return [31, N(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][
              t
            ];
          }
          function A(e, t, n) {
            return Math.min(n, E(e, t));
          }
          var M = /(y|m|d)+/g;
          function O(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i = e(t),
              r = i.css("position"),
              o = "absolute" === r,
              a = n ? /auto|scroll|hidden/ : /auto|scroll/,
              s = i
                .parents()
                .filter(function (t, n) {
                  var i = e(n);
                  return (
                    (!o || "static" !== i.css("position")) &&
                    a.test(
                      i.css("overflow") +
                        i.css("overflow-y") +
                        i.css("overflow-x")
                    )
                  );
                })
                .eq(0);
            return "fixed" !== r && s.length
              ? s
              : e(t.ownerDocument || document);
          }
          function _(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              n = String(Math.abs(e)),
              i = n.length,
              r = "";
            for (e < 0 && (r += "-"); i < t; ) (i += 1), (r += "0");
            return r + n;
          }
          var I = /\d+/g,
            j = {
              show: function () {
                this.built || this.build(),
                  this.shown ||
                    this.trigger(g).isDefaultPrevented() ||
                    ((this.shown = !0),
                    this.$picker
                      .removeClass(m)
                      .on(l, e.proxy(this.click, this)),
                    this.showView(this.options.startView),
                    this.inline ||
                      (this.$scrollParent.on(h, e.proxy(this.place, this)),
                      e(window).on(p, (this.onResize = S(this.place, this))),
                      e(document).on(
                        l,
                        (this.onGlobalClick = S(this.globalClick, this))
                      ),
                      e(document).on(
                        d,
                        (this.onGlobalKeyup = S(this.globalKeyup, this))
                      ),
                      a &&
                        e(document).on(
                          v,
                          (this.onTouchStart = S(this.touchstart, this))
                        ),
                      this.place()));
              },
              hide: function () {
                this.shown &&
                  (this.trigger(c).isDefaultPrevented() ||
                    ((this.shown = !1),
                    this.$picker.addClass(m).off(l, this.click),
                    this.inline ||
                      (this.$scrollParent.off(h, this.place),
                      e(window).off(p, this.onResize),
                      e(document).off(l, this.onGlobalClick),
                      e(document).off(d, this.onGlobalKeyup),
                      a && e(document).off(v, this.onTouchStart))));
              },
              toggle: function () {
                this.shown ? this.hide() : this.show();
              },
              update: function () {
                var e = this.getValue();
                e !== this.oldValue &&
                  (this.setDate(e, !0), (this.oldValue = e));
              },
              pick: function (e) {
                var t = this.$element,
                  n = this.date;
                this.trigger(f, {
                  view: e || "",
                  date: n,
                }).isDefaultPrevented() ||
                  ((n = this.formatDate(this.date)),
                  this.setValue(n),
                  this.isInput && (t.trigger("input"), t.trigger("change")));
              },
              reset: function () {
                this.setDate(this.initialDate, !0),
                  this.setValue(this.initialValue),
                  this.shown && this.showView(this.options.startView);
              },
              getMonthName: function (t, n) {
                var i = this.options,
                  r = i.monthsShort,
                  o = i.months;
                return (
                  e.isNumeric(t) ? (t = Number(t)) : T(n) && (n = t),
                  !0 === n && (o = r),
                  o[k(t) ? t : this.date.getMonth()]
                );
              },
              getDayName: function (t, n, i) {
                var r = this.options,
                  o = r.days;
                return (
                  e.isNumeric(t)
                    ? (t = Number(t))
                    : (T(i) && (i = n), T(n) && (n = t)),
                  i ? (o = r.daysMin) : n && (o = r.daysShort),
                  o[k(t) ? t : this.date.getDay()]
                );
              },
              getDate: function (e) {
                var t = this.date;
                return e ? this.formatDate(t) : new Date(t);
              },
              setDate: function (t, n) {
                var i = this.options.filter;
                if (C(t) || w(t)) {
                  if (
                    ((t = this.parseDate(t)),
                    e.isFunction(i) && !1 === i.call(this.$element, t, "day"))
                  )
                    return;
                  (this.date = t),
                    (this.viewDate = new Date(t)),
                    n || this.pick(),
                    this.built && this.render();
                }
              },
              setStartDate: function (e) {
                C(e) || w(e)
                  ? (this.startDate = this.parseDate(e))
                  : (this.startDate = null),
                  this.built && this.render();
              },
              setEndDate: function (e) {
                C(e) || w(e)
                  ? (this.endDate = this.parseDate(e))
                  : (this.endDate = null),
                  this.built && this.render();
              },
              parseDate: function (t) {
                var n = this.format,
                  i = [];
                return (
                  C(t) ||
                    (w(t) && (i = t.match(I) || []),
                    C((t = t ? new Date(t) : new Date())) || (t = new Date()),
                    i.length === n.parts.length &&
                      e.each(i, function (e, i) {
                        var r = parseInt(i, 10);
                        switch (n.parts[e]) {
                          case "dd":
                          case "d":
                            t.setDate(r);
                            break;
                          case "mm":
                          case "m":
                            t.setMonth(r - 1);
                            break;
                          case "yy":
                            t.setFullYear(r);
                            break;
                          case "yyyy":
                            t.setFullYear(2 === i.length ? 2e3 + r : r);
                        }
                      })),
                  new Date(t.getFullYear(), t.getMonth(), t.getDate())
                );
              },
              formatDate: function (t) {
                var n = this.format,
                  i = "";
                if (C(t)) {
                  var r = t.getFullYear(),
                    o = t.getMonth(),
                    a = t.getDate(),
                    s = {
                      d: a,
                      dd: _(a, 2),
                      m: o + 1,
                      mm: _(o + 1, 2),
                      yy: String(r).substring(2),
                      yyyy: _(r, 4),
                    };
                  (i = n.source),
                    e.each(n.parts, function (e, t) {
                      i = i.replace(t, s[t]);
                    });
                }
                return i;
              },
              destroy: function () {
                this.unbind(), this.unbuild(), this.$element.removeData(s);
              },
            },
            F = {
              click: function (t) {
                var n = e(t.target),
                  i = this.options,
                  r = this.date,
                  o = this.viewDate,
                  a = this.format;
                if (
                  (t.stopPropagation(),
                  t.preventDefault(),
                  !n.hasClass("disabled"))
                ) {
                  var s = n.data("view"),
                    l = o.getFullYear(),
                    u = o.getMonth(),
                    c = o.getDate();
                  switch (s) {
                    case "years prev":
                    case "years next":
                      (l = "years prev" === s ? l - 10 : l + 10),
                        o.setFullYear(l),
                        o.setDate(A(l, u, c)),
                        this.renderYears();
                      break;
                    case "year prev":
                    case "year next":
                      (l = "year prev" === s ? l - 1 : l + 1),
                        o.setFullYear(l),
                        o.setDate(A(l, u, c)),
                        this.renderMonths();
                      break;
                    case "year current":
                      a.hasYear && this.showView(2);
                      break;
                    case "year picked":
                      a.hasMonth
                        ? this.showView(1)
                        : (n
                            .siblings(".".concat(i.pickedClass))
                            .removeClass(i.pickedClass)
                            .data("view", "year"),
                          this.hideView()),
                        this.pick("year");
                      break;
                    case "year":
                      (l = parseInt(n.text(), 10)),
                        r.setDate(A(l, u, c)),
                        r.setFullYear(l),
                        o.setDate(A(l, u, c)),
                        o.setFullYear(l),
                        a.hasMonth
                          ? this.showView(1)
                          : (n
                              .addClass(i.pickedClass)
                              .data("view", "year picked")
                              .siblings(".".concat(i.pickedClass))
                              .removeClass(i.pickedClass)
                              .data("view", "year"),
                            this.hideView()),
                        this.pick("year");
                      break;
                    case "month prev":
                    case "month next":
                      (u = "month prev" === s ? u - 1 : u + 1) < 0
                        ? ((l -= 1), (u += 12))
                        : u > 11 && ((l += 1), (u -= 12)),
                        o.setFullYear(l),
                        o.setDate(A(l, u, c)),
                        o.setMonth(u),
                        this.renderDays();
                      break;
                    case "month current":
                      a.hasMonth && this.showView(1);
                      break;
                    case "month picked":
                      a.hasDay
                        ? this.showView(0)
                        : (n
                            .siblings(".".concat(i.pickedClass))
                            .removeClass(i.pickedClass)
                            .data("view", "month"),
                          this.hideView()),
                        this.pick("month");
                      break;
                    case "month":
                      (u = e.inArray(n.text(), i.monthsShort)),
                        r.setFullYear(l),
                        r.setDate(A(l, u, c)),
                        r.setMonth(u),
                        o.setFullYear(l),
                        o.setDate(A(l, u, c)),
                        o.setMonth(u),
                        a.hasDay
                          ? this.showView(0)
                          : (n
                              .addClass(i.pickedClass)
                              .data("view", "month picked")
                              .siblings(".".concat(i.pickedClass))
                              .removeClass(i.pickedClass)
                              .data("view", "month"),
                            this.hideView()),
                        this.pick("month");
                      break;
                    case "day prev":
                    case "day next":
                    case "day":
                      "day prev" === s
                        ? (u -= 1)
                        : "day next" === s && (u += 1),
                        (c = parseInt(n.text(), 10)),
                        r.setDate(1),
                        r.setFullYear(l),
                        r.setMonth(u),
                        r.setDate(c),
                        o.setDate(1),
                        o.setFullYear(l),
                        o.setMonth(u),
                        o.setDate(c),
                        this.renderDays(),
                        "day" === s && this.hideView(),
                        this.pick("day");
                      break;
                    case "day picked":
                      this.hideView(), this.pick("day");
                  }
                }
              },
              globalClick: function (e) {
                for (
                  var t = e.target,
                    n = this.element,
                    i = this.$trigger[0],
                    r = !0;
                  t !== document;

                ) {
                  if (t === i || t === n) {
                    r = !1;
                    break;
                  }
                  t = t.parentNode;
                }
                r && this.hide();
              },
              keyup: function () {
                this.update();
              },
              globalKeyup: function (e) {
                var t = e.target,
                  n = e.key,
                  i = e.keyCode;
                this.isInput &&
                  t !== this.element &&
                  this.shown &&
                  ("Tab" === n || 9 === i) &&
                  this.hide();
              },
              touchstart: function (t) {
                var n = t.target;
                this.isInput &&
                  n !== this.element &&
                  !e.contains(this.$picker[0], n) &&
                  (this.hide(), this.element.blur());
              },
            },
            P = {
              render: function () {
                this.renderYears(), this.renderMonths(), this.renderDays();
              },
              renderWeek: function () {
                var t = this,
                  n = [],
                  i = this.options,
                  r = i.weekStart,
                  o = i.daysMin;
                (r = parseInt(r, 10) % 7),
                  (o = o.slice(r).concat(o.slice(0, r))),
                  e.each(o, function (e, i) {
                    n.push(t.createItem({ text: i }));
                  }),
                  this.$week.html(n.join(""));
              },
              renderYears: function () {
                var e,
                  t = this.options,
                  n = this.startDate,
                  i = this.endDate,
                  r = t.disabledClass,
                  o = t.filter,
                  a = t.yearSuffix,
                  s = this.viewDate.getFullYear(),
                  l = new Date().getFullYear(),
                  u = this.date.getFullYear(),
                  c = [],
                  d = !1,
                  f = !1;
                for (e = -5; e <= 6; e += 1) {
                  var p = new Date(s + e, 1, 1),
                    h = !1;
                  n &&
                    ((h = p.getFullYear() < n.getFullYear()),
                    -5 === e && (d = h)),
                    !h &&
                      i &&
                      ((h = p.getFullYear() > i.getFullYear()),
                      6 === e && (f = h)),
                    !h && o && (h = !1 === o.call(this.$element, p, "year"));
                  var g = s + e === u,
                    v = g ? "year picked" : "year";
                  c.push(
                    this.createItem({
                      picked: g,
                      disabled: h,
                      text: s + e,
                      view: h ? "year disabled" : v,
                      highlighted: p.getFullYear() === l,
                    })
                  );
                }
                this.$yearsPrev.toggleClass(r, d),
                  this.$yearsNext.toggleClass(r, f),
                  this.$yearsCurrent.toggleClass(r, !0).html(
                    ""
                      .concat(s + -5 + a, " - ")
                      .concat(s + 6)
                      .concat(a)
                  ),
                  this.$years.html(c.join(""));
              },
              renderMonths: function () {
                var t,
                  n = this.options,
                  i = this.startDate,
                  r = this.endDate,
                  o = this.viewDate,
                  a = n.disabledClass || "",
                  s = n.monthsShort,
                  l = e.isFunction(n.filter) && n.filter,
                  u = o.getFullYear(),
                  c = new Date(),
                  d = c.getFullYear(),
                  f = c.getMonth(),
                  p = this.date.getFullYear(),
                  h = this.date.getMonth(),
                  g = [],
                  v = !1,
                  m = !1;
                for (t = 0; t <= 11; t += 1) {
                  var y = new Date(u, t, 1),
                    b = !1;
                  i &&
                    (b =
                      (v = y.getFullYear() === i.getFullYear()) &&
                      y.getMonth() < i.getMonth()),
                    !b &&
                      r &&
                      (b =
                        (m = y.getFullYear() === r.getFullYear()) &&
                        y.getMonth() > r.getMonth()),
                    !b && l && (b = !1 === l.call(this.$element, y, "month"));
                  var w = u === p && t === h,
                    x = w ? "month picked" : "month";
                  g.push(
                    this.createItem({
                      disabled: b,
                      picked: w,
                      highlighted: u === d && y.getMonth() === f,
                      index: t,
                      text: s[t],
                      view: b ? "month disabled" : x,
                    })
                  );
                }
                this.$yearPrev.toggleClass(a, v),
                  this.$yearNext.toggleClass(a, m),
                  this.$yearCurrent
                    .toggleClass(a, v && m)
                    .html(u + n.yearSuffix || ""),
                  this.$months.html(g.join(""));
              },
              renderDays: function () {
                var e,
                  t,
                  n,
                  i = this.$element,
                  r = this.options,
                  o = this.startDate,
                  a = this.endDate,
                  s = this.viewDate,
                  l = this.date,
                  u = r.disabledClass,
                  c = r.filter,
                  d = r.months,
                  f = r.weekStart,
                  p = r.yearSuffix,
                  h = s.getFullYear(),
                  g = s.getMonth(),
                  v = new Date(),
                  m = v.getFullYear(),
                  y = v.getMonth(),
                  b = v.getDate(),
                  w = l.getFullYear(),
                  x = l.getMonth(),
                  k = l.getDate(),
                  T = [],
                  C = h,
                  S = g,
                  D = !1;
                0 === g ? ((C -= 1), (S = 11)) : (S -= 1), (e = E(C, S));
                var N = new Date(h, g, 1);
                for (
                  (n = N.getDay() - (parseInt(f, 10) % 7)) <= 0 && (n += 7),
                    o && (D = N.getTime() <= o.getTime()),
                    t = e - (n - 1);
                  t <= e;
                  t += 1
                ) {
                  var A = new Date(C, S, t),
                    M = !1;
                  o && (M = A.getTime() < o.getTime()),
                    !M && c && (M = !1 === c.call(i, A, "day")),
                    T.push(
                      this.createItem({
                        disabled: M,
                        highlighted: C === m && S === y && A.getDate() === b,
                        muted: !0,
                        picked: C === w && S === x && t === k,
                        text: t,
                        view: "day prev",
                      })
                    );
                }
                var O = [],
                  _ = h,
                  I = g,
                  j = !1;
                11 === g ? ((_ += 1), (I = 0)) : (I += 1),
                  (e = E(h, g)),
                  (n = 42 - (T.length + e));
                var F = new Date(h, g, e);
                for (
                  a && (j = F.getTime() >= a.getTime()), t = 1;
                  t <= n;
                  t += 1
                ) {
                  var P = new Date(_, I, t),
                    L = _ === w && I === x && t === k,
                    $ = !1;
                  a && ($ = P.getTime() > a.getTime()),
                    !$ && c && ($ = !1 === c.call(i, P, "day")),
                    O.push(
                      this.createItem({
                        disabled: $,
                        picked: L,
                        highlighted: _ === m && I === y && P.getDate() === b,
                        muted: !0,
                        text: t,
                        view: "day next",
                      })
                    );
                }
                var H = [];
                for (t = 1; t <= e; t += 1) {
                  var q = new Date(h, g, t),
                    R = !1;
                  o && (R = q.getTime() < o.getTime()),
                    !R && a && (R = q.getTime() > a.getTime()),
                    !R && c && (R = !1 === c.call(i, q, "day"));
                  var B = h === w && g === x && t === k,
                    W = B ? "day picked" : "day";
                  H.push(
                    this.createItem({
                      disabled: R,
                      picked: B,
                      highlighted: h === m && g === y && q.getDate() === b,
                      text: t,
                      view: R ? "day disabled" : W,
                    })
                  );
                }
                this.$monthPrev.toggleClass(u, D),
                  this.$monthNext.toggleClass(u, j),
                  this.$monthCurrent
                    .toggleClass(u, D && j)
                    .html(
                      r.yearFirst
                        ? "".concat(h + p, " ").concat(d[g])
                        : "".concat(d[g], " ").concat(h).concat(p)
                    ),
                  this.$days.html(T.join("") + H.join("") + O.join(""));
              },
            },
            L = "".concat(s, "-top-left"),
            $ = "".concat(s, "-top-right"),
            H = "".concat(s, "-bottom-left"),
            q = "".concat(s, "-bottom-right"),
            R = [L, $, H, q].join(" "),
            B = (function () {
              function r(n) {
                var o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                t(this, r),
                  (this.$element = e(n)),
                  (this.element = n),
                  (this.options = e.extend(
                    {},
                    i,
                    y[o.language],
                    e.isPlainObject(o) && o
                  )),
                  (this.$scrollParent = O(n, !0)),
                  (this.built = !1),
                  (this.shown = !1),
                  (this.isInput = !1),
                  (this.inline = !1),
                  (this.initialValue = ""),
                  (this.initialDate = null),
                  (this.startDate = null),
                  (this.endDate = null),
                  this.init();
              }
              var o, a, p;
              return (
                (o = r),
                (p = [
                  {
                    key: "setDefaults",
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      e.extend(i, y[t.language], e.isPlainObject(t) && t);
                    },
                  },
                ]),
                (a = [
                  {
                    key: "init",
                    value: function () {
                      var t = this.$element,
                        n = this.options,
                        i = n.startDate,
                        r = n.endDate,
                        o = n.date;
                      (this.$trigger = e(n.trigger)),
                        (this.isInput = t.is("input") || t.is("textarea")),
                        (this.inline =
                          n.inline && (n.container || !this.isInput)),
                        (this.format = (function (t) {
                          var n = String(t).toLowerCase(),
                            i = n.match(M);
                          if (!i || 0 === i.length)
                            throw new Error("Invalid date format.");
                          return (
                            (t = { source: n, parts: i }),
                            e.each(i, function (e, n) {
                              switch (n) {
                                case "dd":
                                case "d":
                                  t.hasDay = !0;
                                  break;
                                case "mm":
                                case "m":
                                  t.hasMonth = !0;
                                  break;
                                case "yyyy":
                                case "yy":
                                  t.hasYear = !0;
                              }
                            }),
                            t
                          );
                        })(n.format));
                      var a = this.getValue();
                      (this.initialValue = a),
                        (this.oldValue = a),
                        (o = this.parseDate(o || a)),
                        i &&
                          ((i = this.parseDate(i)),
                          o.getTime() < i.getTime() && (o = new Date(i)),
                          (this.startDate = i)),
                        r &&
                          ((r = this.parseDate(r)),
                          i && r.getTime() < i.getTime() && (r = new Date(i)),
                          o.getTime() > r.getTime() && (o = new Date(r)),
                          (this.endDate = r)),
                        (this.date = o),
                        (this.viewDate = new Date(o)),
                        (this.initialDate = new Date(this.date)),
                        this.bind(),
                        (n.autoShow || this.inline) && this.show(),
                        n.autoPick && this.pick();
                    },
                  },
                  {
                    key: "build",
                    value: function () {
                      if (!this.built) {
                        this.built = !0;
                        var t = this.$element,
                          n = this.options,
                          i = e(n.template);
                        (this.$picker = i),
                          (this.$week = i.find(D("week"))),
                          (this.$yearsPicker = i.find(D("years picker"))),
                          (this.$yearsPrev = i.find(D("years prev"))),
                          (this.$yearsNext = i.find(D("years next"))),
                          (this.$yearsCurrent = i.find(D("years current"))),
                          (this.$years = i.find(D("years"))),
                          (this.$monthsPicker = i.find(D("months picker"))),
                          (this.$yearPrev = i.find(D("year prev"))),
                          (this.$yearNext = i.find(D("year next"))),
                          (this.$yearCurrent = i.find(D("year current"))),
                          (this.$months = i.find(D("months"))),
                          (this.$daysPicker = i.find(D("days picker"))),
                          (this.$monthPrev = i.find(D("month prev"))),
                          (this.$monthNext = i.find(D("month next"))),
                          (this.$monthCurrent = i.find(D("month current"))),
                          (this.$days = i.find(D("days"))),
                          this.inline
                            ? e(n.container || t).append(
                                i.addClass("".concat(s, "-inline"))
                              )
                            : (e(document.body).append(
                                i.addClass("".concat(s, "-dropdown"))
                              ),
                              i
                                .addClass(m)
                                .css({ zIndex: parseInt(n.zIndex, 10) })),
                          this.renderWeek();
                      }
                    },
                  },
                  {
                    key: "unbuild",
                    value: function () {
                      this.built && ((this.built = !1), this.$picker.remove());
                    },
                  },
                  {
                    key: "bind",
                    value: function () {
                      var t = this.options,
                        n = this.$element;
                      e.isFunction(t.show) && n.on(g, t.show),
                        e.isFunction(t.hide) && n.on(c, t.hide),
                        e.isFunction(t.pick) && n.on(f, t.pick),
                        this.isInput && n.on(d, e.proxy(this.keyup, this)),
                        this.inline ||
                          (t.trigger
                            ? this.$trigger.on(l, e.proxy(this.toggle, this))
                            : this.isInput
                            ? n.on(u, e.proxy(this.show, this))
                            : n.on(l, e.proxy(this.show, this)));
                    },
                  },
                  {
                    key: "unbind",
                    value: function () {
                      var t = this.$element,
                        n = this.options;
                      e.isFunction(n.show) && t.off(g, n.show),
                        e.isFunction(n.hide) && t.off(c, n.hide),
                        e.isFunction(n.pick) && t.off(f, n.pick),
                        this.isInput && t.off(d, this.keyup),
                        this.inline ||
                          (n.trigger
                            ? this.$trigger.off(l, this.toggle)
                            : this.isInput
                            ? t.off(u, this.show)
                            : t.off(l, this.show));
                    },
                  },
                  {
                    key: "showView",
                    value: function (e) {
                      var t = this.$yearsPicker,
                        n = this.$monthsPicker,
                        i = this.$daysPicker,
                        r = this.format;
                      if (r.hasYear || r.hasMonth || r.hasDay)
                        switch (Number(e)) {
                          case 2:
                            n.addClass(m),
                              i.addClass(m),
                              r.hasYear
                                ? (this.renderYears(),
                                  t.removeClass(m),
                                  this.place())
                                : this.showView(0);
                            break;
                          case 1:
                            t.addClass(m),
                              i.addClass(m),
                              r.hasMonth
                                ? (this.renderMonths(),
                                  n.removeClass(m),
                                  this.place())
                                : this.showView(2);
                            break;
                          default:
                            t.addClass(m),
                              n.addClass(m),
                              r.hasDay
                                ? (this.renderDays(),
                                  i.removeClass(m),
                                  this.place())
                                : this.showView(1);
                        }
                    },
                  },
                  {
                    key: "hideView",
                    value: function () {
                      !this.inline && this.options.autoHide && this.hide();
                    },
                  },
                  {
                    key: "place",
                    value: function () {
                      if (!this.inline) {
                        var t = this.$element,
                          n = this.options,
                          i = this.$picker,
                          r = e(document).outerWidth(),
                          o = e(document).outerHeight(),
                          a = t.outerWidth(),
                          s = t.outerHeight(),
                          l = i.width(),
                          u = i.height(),
                          c = t.offset(),
                          d = c.left,
                          f = c.top,
                          p = parseFloat(n.offset),
                          h = L;
                        x(p) && (p = 10),
                          f > u && f + s + u > o
                            ? ((f -= u + p), (h = H))
                            : (f += s + p),
                          d + l > r &&
                            ((d += a - l), (h = h.replace("left", "right"))),
                          i.removeClass(R).addClass(h).css({ top: f, left: d });
                      }
                    },
                  },
                  {
                    key: "trigger",
                    value: function (t, n) {
                      var i = e.Event(t, n);
                      return this.$element.trigger(i), i;
                    },
                  },
                  {
                    key: "createItem",
                    value: function (t) {
                      var n = this.options,
                        i = n.itemTag,
                        r = {
                          text: "",
                          view: "",
                          muted: !1,
                          picked: !1,
                          disabled: !1,
                          highlighted: !1,
                        },
                        o = [];
                      return (
                        e.extend(r, t),
                        r.muted && o.push(n.mutedClass),
                        r.highlighted && o.push(n.highlightedClass),
                        r.picked && o.push(n.pickedClass),
                        r.disabled && o.push(n.disabledClass),
                        "<"
                          .concat(i, ' class="')
                          .concat(o.join(" "), '" data-view="')
                          .concat(r.view, '">')
                          .concat(r.text, "</")
                          .concat(i, ">")
                      );
                    },
                  },
                  {
                    key: "getValue",
                    value: function () {
                      var e = this.$element;
                      return this.isInput ? e.val() : e.text();
                    },
                  },
                  {
                    key: "setValue",
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : "",
                        t = this.$element;
                      this.isInput
                        ? t.val(e)
                        : (this.inline && !this.options.container) || t.text(e);
                    },
                  },
                ]) && n(o.prototype, a),
                p && n(o, p),
                r
              );
            })();
          if ((e.extend && e.extend(B.prototype, P, F, j), e.fn)) {
            var W = e.fn.datepicker;
            (e.fn.datepicker = function (t) {
              for (
                var n = arguments.length,
                  i = new Array(n > 1 ? n - 1 : 0),
                  r = 1;
                r < n;
                r++
              )
                i[r - 1] = arguments[r];
              var o;
              return (
                this.each(function (n, r) {
                  var a = e(r),
                    l = "destroy" === t,
                    u = a.data(s);
                  if (!u) {
                    if (l) return;
                    var c = e.extend({}, a.data(), e.isPlainObject(t) && t);
                    (u = new B(r, c)), a.data(s, u);
                  }
                  if (w(t)) {
                    var d = u[t];
                    e.isFunction(d) &&
                      ((o = d.apply(u, i)), l && a.removeData(s));
                  }
                }),
                T(o) ? this : o
              );
            }),
              (e.fn.datepicker.Constructor = B),
              (e.fn.datepicker.languages = y),
              (e.fn.datepicker.setDefaults = B.setDefaults),
              (e.fn.datepicker.noConflict = function () {
                return (e.fn.datepicker = W), this;
              });
          }
        }),
          "object" === s(t)
            ? a(n(755))
            : ((r = [n(755)]),
              void 0 ===
                (o = "function" == typeof (i = a) ? i.apply(t, r) : i) ||
                (e.exports = o));
      },
      615: function () {
        var e, t, n;
        (e = jQuery),
          (t = window),
          document,
          (n = {
            init: function (t, n) {
              var i = this;
              (i.options = e.extend({}, e.fn.nav.options, t)),
                (i.$body = e("body")),
                (i.$nav = e(n)),
                (i.$menuButton = e(i.options.navButton)),
                (i.$subMenu = e(i.options.subMenu)),
                (i.subMenu = i.options.subMenu),
                (i.mobileMode = i.isCurrentlyMobile(i)),
                (i.mouseOver = i.options.mouseOver),
                (i.disableSubMenuLink = i.options.disableSubMenuLink),
                (i.slideSpeed = i.options.slideSpeed),
                e("html").removeClass("nav-no-js"),
                i.collapseSubMenus(i),
                i.bindEvents(i);
            },
            bindEvents: function (n) {
              n.$menuButton.on("click", function (e) {
                n.toggleNav(n), e.preventDefault();
              }),
                n.$nav.on("click", n.subMenu + " > a", function (t) {
                  var i = e(this);
                  n.isSubMenuLinkDisabled(n, i) &&
                    (n.toggleSubMenu(n, i.parent()), t.preventDefault());
                }),
                1 == n.mouseOver &&
                  (n.$nav.on("mouseenter", n.subMenu, function () {
                    0 == n.mobileMode && n.openSubMenu(n, e(this));
                  }),
                  n.$nav.on("mouseleave", n.subMenu, function () {
                    0 == n.mobileMode && n.closeSubMenu(n, e(this));
                  })),
                e(t).on("resize", function () {
                  n.resetNav(n);
                });
            },
            isSubMenuLinkDisabled: function (e, t) {
              return (
                "always" == e.disableSubMenuLink ||
                "#" == t.attr("href") ||
                ("mobile" == e.disableSubMenuLink && 1 == e.mobileMode) ||
                ("desktop" == e.disableSubMenuLink && 0 == e.mobileMode)
              );
            },
            toggleNav: function (t) {
              t.$nav
                .stop()
                .clearQueue()
                .slideToggle(t.slideSpeed, function () {
                  e(this).is(":hidden")
                    ? (t.collapseSubMenus(t),
                      e(this).attr("style", "display: none;"))
                    : e(this).attr("style", "display: block;");
                }),
                t.$body.toggleClass("nav-lock-scroll");
            },
            toggleSubMenu: function (e, t) {
              t.hasClass("nav-active")
                ? e.closeSubMenu(e, t)
                : e.openSubMenu(e, t);
            },
            openSubMenu: function (t, n) {
              n
                .addClass("nav-active")
                .children("ul")
                .stop()
                .clearQueue()
                .slideDown(t.slideSpeed, function () {
                  e(this).attr("style", "display: block;");
                }),
                n
                  .siblings(t.subMenu)
                  .removeClass("nav-active")
                  .children("ul")
                  .slideUp(t.slideSpeed, function () {
                    e(this).clearQueue();
                  })
                  .find(".nav-active")
                  .removeClass("nav-active")
                  .children("ul")
                  .slideUp(t.slideSpeed, function () {
                    e(this).clearQueue();
                  });
            },
            closeSubMenu: function (t, n) {
              n.removeClass("nav-active")
                .children("ul")
                .stop()
                .clearQueue()
                .slideUp(t.slideSpeed, function () {
                  e(this).attr("style", "display: none;");
                })
                .find(".nav-active")
                .removeClass("nav-active")
                .children("ul")
                .slideUp(t.slideSpeed, function () {
                  e(this).clearQueue();
                });
            },
            resetNav: function (e) {
              var t = e.isCurrentlyMobile(e);
              e.mobileMode !== t &&
                (e.$nav.removeAttr("style").find("ul").removeAttr("style"),
                e.$body.removeClass("nav-lock-scroll"),
                e.collapseSubMenus(e),
                (e.mobileMode = t));
            },
            collapseSubMenus: function (e) {
              e.$subMenu.removeClass("nav-active").children("ul").hide();
            },
            isCurrentlyMobile: function (e) {
              return e.$menuButton.is(":visible");
            },
          }),
          (e.fn.nav = function (e) {
            return this.each(function () {
              Object.create(n).init(e, this);
            });
          }),
          (e.fn.nav.options = {
            navButton: ".nav-button",
            subMenu: ".nav-submenu",
            mouseOver: !0,
            disableSubMenuLink: "always",
            slideSpeed: 300,
          }),
          "function" != typeof Object.create &&
            (Object.create = function (e) {
              function t() {}
              return (t.prototype = e), new t();
            });
      },
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var o = [],
            a = Object.getPrototypeOf,
            s = o.slice,
            l = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            u = o.push,
            c = o.indexOf,
            d = {},
            f = d.toString,
            p = d.hasOwnProperty,
            h = p.toString,
            g = h.call(Object),
            v = {},
            m = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            b = i.document,
            w = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var i,
              r,
              o = (n = n || b).createElement("script");
            if (((o.text = e), t))
              for (i in w)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function k(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[f.call(e)] || "object"
              : typeof e;
          }
          var T = "3.6.0",
            C = function (e, t) {
              return new C.fn.init(e, t);
            };
          function S(e) {
            var t = !!e && "length" in e && e.length,
              n = k(e);
            return (
              !m(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (C.fn = C.prototype =
            {
              jquery: T,
              constructor: C,
              length: 0,
              toArray: function () {
                return s.call(this);
              },
              get: function (e) {
                return null == e
                  ? s.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return C.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  C.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(s.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: u,
              sort: o.sort,
              splice: o.splice,
            }),
            (C.extend = C.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  o,
                  a = arguments[0] || {},
                  s = 1,
                  l = arguments.length,
                  u = !1;
                for (
                  "boolean" == typeof a &&
                    ((u = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || m(a) || (a = {}),
                    s === l && ((a = this), s--);
                  s < l;
                  s++
                )
                  if (null != (e = arguments[s]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          a !== i &&
                          (u &&
                          i &&
                          (C.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = a[t]),
                              (o =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || C.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (a[t] = C.extend(u, o, i)))
                            : void 0 !== i && (a[t] = i));
                return a;
              }),
            C.extend({
              expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== f.call(e) ||
                  ((t = a(e)) &&
                    ("function" !=
                      typeof (n = p.call(t, "constructor") && t.constructor) ||
                      h.call(n) !== g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (S(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (S(Object(e))
                      ? C.merge(n, "string" == typeof e ? [e] : e)
                      : u.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
                  !t(e[r], r) !== a && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  o = 0,
                  a = [];
                if (S(e))
                  for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && a.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
                return l(a);
              },
              guid: 1,
              support: v,
            }),
            "function" == typeof Symbol &&
              (C.fn[Symbol.iterator] = o[Symbol.iterator]),
            C.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var D = (function (e) {
            var t,
              n,
              i,
              r,
              o,
              a,
              s,
              l,
              u,
              c,
              d,
              f,
              p,
              h,
              g,
              v,
              m,
              y,
              b,
              w = "sizzle" + 1 * new Date(),
              x = e.document,
              k = 0,
              T = 0,
              C = le(),
              S = le(),
              D = le(),
              N = le(),
              E = function (e, t) {
                return e === t && (d = !0), 0;
              },
              A = {}.hasOwnProperty,
              M = [],
              O = M.pop,
              _ = M.push,
              I = M.push,
              j = M.slice,
              F = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              P =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              L = "[\\x20\\t\\r\\n\\f]",
              $ =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              H =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                $ +
                ")(?:" +
                L +
                "*([*^$|!~]?=)" +
                L +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                $ +
                "))|)" +
                L +
                "*\\]",
              q =
                ":(" +
                $ +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                H +
                ")*)|.*)\\)|)",
              R = new RegExp(L + "+", "g"),
              B = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              V = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              U = new RegExp(L + "|>"),
              Y = new RegExp(q),
              z = new RegExp("^" + $ + "$"),
              K = {
                ID: new RegExp("^#(" + $ + ")"),
                CLASS: new RegExp("^\\.(" + $ + ")"),
                TAG: new RegExp("^(" + $ + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              G = /HTML$/i,
              J = /^(?:input|select|textarea|button)$/i,
              Q = /^h\d$/i,
              X = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              re = function (e, t) {
                return t
                  ? "\0" === e
                    ? "ï¿½"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              oe = function () {
                f();
              },
              ae = we(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              I.apply((M = j.call(x.childNodes)), x.childNodes),
                M[x.childNodes.length].nodeType;
            } catch (e) {
              I = {
                apply: M.length
                  ? function (e, t) {
                      _.apply(e, j.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, i, r) {
              var o,
                s,
                u,
                c,
                d,
                h,
                m,
                y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return i;
              if (!r && (f(t), (t = t || p), g)) {
                if (11 !== x && (d = Z.exec(e)))
                  if ((o = d[1])) {
                    if (9 === x) {
                      if (!(u = t.getElementById(o))) return i;
                      if (u.id === o) return i.push(u), i;
                    } else if (
                      y &&
                      (u = y.getElementById(o)) &&
                      b(t, u) &&
                      u.id === o
                    )
                      return i.push(u), i;
                  } else {
                    if (d[2]) return I.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (o = d[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return I.apply(i, t.getElementsByClassName(o)), i;
                  }
                if (
                  n.qsa &&
                  !N[e + " "] &&
                  (!v || !v.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((m = e), (y = t), 1 === x && (U.test(e) || V.test(e)))) {
                    for (
                      ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = c.replace(ie, re))
                          : t.setAttribute("id", (c = w))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                    m = h.join(",");
                  }
                  try {
                    return I.apply(i, y.querySelectorAll(m)), i;
                  } catch (t) {
                    N(e, !0);
                  } finally {
                    c === w && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(B, "$1"), t, i, r);
            }
            function le() {
              var e = [];
              return function t(n, r) {
                return (
                  e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                  (t[n + " "] = r)
                );
              };
            }
            function ue(e) {
              return (e[w] = !0), e;
            }
            function ce(e) {
              var t = p.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function de(e, t) {
              for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t;
            }
            function fe(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function pe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ge(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ve(e) {
              return ue(function (t) {
                return (
                  (t = +t),
                  ue(function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--; )
                      n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function me(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (o = se.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !G.test(t || (n && n.nodeName) || "HTML");
              }),
            (f = se.setDocument =
              function (e) {
                var t,
                  r,
                  a = e ? e.ownerDocument || e : x;
                return a != p && 9 === a.nodeType && a.documentElement
                  ? ((h = (p = a).documentElement),
                    (g = !o(p)),
                    x != p &&
                      (r = p.defaultView) &&
                      r.top !== r &&
                      (r.addEventListener
                        ? r.addEventListener("unload", oe, !1)
                        : r.attachEvent && r.attachEvent("onunload", oe)),
                    (n.scope = ce(function (e) {
                      return (
                        h.appendChild(e).appendChild(p.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ce(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ce(function (e) {
                      return (
                        e.appendChild(p.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = X.test(
                      p.getElementsByClassName
                    )),
                    (n.getById = ce(function (e) {
                      return (
                        (h.appendChild(e).id = w),
                        !p.getElementsByName || !p.getElementsByName(w).length
                      );
                    })),
                    n.getById
                      ? ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n,
                              i,
                              r,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                r = t.getElementsByName(e), i = 0;
                                (o = r[i++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (i.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[r++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return o;
                        }),
                    (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g)
                          return t.getElementsByClassName(e);
                      }),
                    (m = []),
                    (v = []),
                    (n.qsa = X.test(p.querySelectorAll)) &&
                      (ce(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          w +
                          "'></a><select id='" +
                          w +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            v.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + P + ")"
                            ),
                          e.querySelectorAll("[id~=" + w + "-]").length ||
                            v.push("~="),
                          (t = p.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            v.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            v.push(":checked"),
                          e.querySelectorAll("a#" + w + "+*").length ||
                            v.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          v.push("[\\r\\n\\f]");
                      }),
                      ce(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            v.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            v.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          v.push(",.*:");
                      })),
                    (n.matchesSelector = X.test(
                      (y =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      ce(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          m.push("!=", q);
                      }),
                    (v = v.length && new RegExp(v.join("|"))),
                    (m = m.length && new RegExp(m.join("|"))),
                    (t = X.test(h.compareDocumentPosition)),
                    (b =
                      t || X.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (E = t
                      ? function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var i =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            i ||
                            (1 &
                              (i =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === i)
                              ? e == p || (e.ownerDocument == x && b(x, e))
                                ? -1
                                : t == p || (t.ownerDocument == x && b(x, t))
                                ? 1
                                : c
                                ? F(c, e) - F(c, t)
                                : 0
                              : 4 & i
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var n,
                            i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!r || !o)
                            return e == p
                              ? -1
                              : t == p
                              ? 1
                              : r
                              ? -1
                              : o
                              ? 1
                              : c
                              ? F(c, e) - F(c, t)
                              : 0;
                          if (r === o) return fe(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[i] === s[i]; ) i++;
                          return i
                            ? fe(a[i], s[i])
                            : a[i] == x
                            ? -1
                            : s[i] == x
                            ? 1
                            : 0;
                        }),
                    p)
                  : p;
              }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (f(e),
                n.matchesSelector &&
                  g &&
                  !N[t + " "] &&
                  (!m || !m.test(t)) &&
                  (!v || !v.test(t)))
              )
                try {
                  var i = y.call(e, t);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (e) {
                  N(t, !0);
                }
              return se(t, p, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != p && f(e), b(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != p && f(e);
              var r = i.attrHandle[t.toLowerCase()],
                o =
                  r && A.call(i.attrHandle, t.toLowerCase())
                    ? r(e, t, !g)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !g
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(ie, re);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                i = [],
                r = 0,
                o = 0;
              if (
                ((d = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(E),
                d)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                for (; r--; ) e.splice(i[r], 1);
              }
              return (c = null), e;
            }),
            (r = se.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += r(t);
                return n;
              }),
            ((i = se.selectors =
              {
                cacheLength: 50,
                createPseudo: ue,
                match: K,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || se.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && se.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return K.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            Y.test(n) &&
                            (t = a(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = C[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + L + "|$)"
                      )) &&
                        C(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (i) {
                      var r = se.attr(i, e);
                      return null == r
                        ? "!=" === t
                        : !t ||
                            ((r += ""),
                            "=" === t
                              ? r === n
                              : "!=" === t
                              ? r !== n
                              : "^=" === t
                              ? n && 0 === r.indexOf(n)
                              : "*=" === t
                              ? n && r.indexOf(n) > -1
                              : "$=" === t
                              ? n && r.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (r === n ||
                                  r.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === i && 0 === r
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var u,
                            c,
                            d,
                            f,
                            p,
                            h,
                            g = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                          if (v) {
                            if (o) {
                              for (; g; ) {
                                for (f = t; (f = f[g]); )
                                  if (
                                    s
                                      ? f.nodeName.toLowerCase() === m
                                      : 1 === f.nodeType
                                  )
                                    return !1;
                                h = g = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? v.firstChild : v.lastChild]), a && y)
                            ) {
                              for (
                                b =
                                  (p =
                                    (u =
                                      (c =
                                        (d = (f = v)[w] || (f[w] = {}))[
                                          f.uniqueID
                                        ] || (d[f.uniqueID] = {}))[e] ||
                                      [])[0] === k && u[1]) && u[2],
                                  f = p && v.childNodes[p];
                                (f =
                                  (++p && f && f[g]) || (b = p = 0) || h.pop());

                              )
                                if (1 === f.nodeType && ++b && f === t) {
                                  c[e] = [k, p, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                (b = p =
                                  (u =
                                    (c =
                                      (d = (f = t)[w] || (f[w] = {}))[
                                        f.uniqueID
                                      ] || (d[f.uniqueID] = {}))[e] ||
                                    [])[0] === k && u[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (f =
                                  (++p && f && f[g]) ||
                                  (b = p = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? f.nodeName.toLowerCase() !== m
                                  : 1 !== f.nodeType) ||
                                  !++b ||
                                  (y &&
                                    ((c =
                                      (d = f[w] || (f[w] = {}))[f.uniqueID] ||
                                      (d[f.uniqueID] = {}))[e] = [k, b]),
                                  f !== t));

                              );
                            return (b -= r) === i || (b % i == 0 && b / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      r =
                        i.pseudos[e] ||
                        i.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return r[w]
                      ? r(t)
                      : r.length > 1
                      ? ((n = [e, e, "", t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ue(function (e, n) {
                              for (var i, o = r(e, t), a = o.length; a--; )
                                e[(i = F(e, o[a]))] = !(n[i] = o[a]);
                            })
                          : function (e) {
                              return r(e, 0, n);
                            })
                      : r;
                  },
                },
                pseudos: {
                  not: ue(function (e) {
                    var t = [],
                      n = [],
                      i = s(e.replace(B, "$1"));
                    return i[w]
                      ? ue(function (e, t, n, r) {
                          for (
                            var o, a = i(e, null, r, []), s = e.length;
                            s--;

                          )
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        })
                      : function (e, r, o) {
                          return (
                            (t[0] = e),
                            i(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ue(function (e) {
                    return function (t) {
                      return se(e, t).length > 0;
                    };
                  }),
                  contains: ue(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || r(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ue(function (e) {
                    return (
                      z.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = g
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === p.activeElement &&
                      (!p.hasFocus || p.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !i.pseudos.empty(e);
                  },
                  header: function (e) {
                    return Q.test(e.nodeName);
                  },
                  input: function (e) {
                    return J.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ve(function () {
                    return [0];
                  }),
                  last: ve(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ve(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: ve(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }).pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[t] = pe(t);
            for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
            function ye() {}
            function be(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function we(e, t, n) {
              var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = T++;
              return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || a) return e(t, n, r);
                    return !1;
                  }
                : function (t, n, l) {
                    var u,
                      c,
                      d,
                      f = [k, s];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((c =
                              (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                              (d[t.uniqueID] = {})),
                            r && r === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((u = c[o]) && u[0] === k && u[1] === s)
                              return (f[2] = u[2]);
                            if (((c[o] = f), (f[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function ke(e, t, n, i, r) {
              for (
                var o, a = [], s = 0, l = e.length, u = null != t;
                s < l;
                s++
              )
                (o = e[s]) &&
                  ((n && !n(o, i, r)) || (a.push(o), u && t.push(s)));
              return a;
            }
            function Te(e, t, n, i, r, o) {
              return (
                i && !i[w] && (i = Te(i)),
                r && !r[w] && (r = Te(r, o)),
                ue(function (o, a, s, l) {
                  var u,
                    c,
                    d,
                    f = [],
                    p = [],
                    h = a.length,
                    g =
                      o ||
                      (function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++)
                          se(e, t[i], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || (!o && t) ? g : ke(g, f, e, s, l),
                    m = n ? (r || (o ? e : h || i) ? [] : a) : v;
                  if ((n && n(v, m, s, l), i))
                    for (u = ke(m, p), i(u, [], s, l), c = u.length; c--; )
                      (d = u[c]) && (m[p[c]] = !(v[p[c]] = d));
                  if (o) {
                    if (r || e) {
                      if (r) {
                        for (u = [], c = m.length; c--; )
                          (d = m[c]) && u.push((v[c] = d));
                        r(null, (m = []), u, l);
                      }
                      for (c = m.length; c--; )
                        (d = m[c]) &&
                          (u = r ? F(o, d) : f[c]) > -1 &&
                          (o[u] = !(a[u] = d));
                    }
                  } else (m = ke(m === a ? m.splice(h, m.length) : m)), r ? r(null, a, m, l) : I.apply(a, m);
                })
              );
            }
            function Ce(e) {
              for (
                var t,
                  n,
                  r,
                  o = e.length,
                  a = i.relative[e[0].type],
                  s = a || i.relative[" "],
                  l = a ? 1 : 0,
                  c = we(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  d = we(
                    function (e) {
                      return F(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  f = [
                    function (e, n, i) {
                      var r =
                        (!a && (i || n !== u)) ||
                        ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                      return (t = null), r;
                    },
                  ];
                l < o;
                l++
              )
                if ((n = i.relative[e[l].type])) f = [we(xe(f), n)];
                else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                    for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                    return Te(
                      l > 1 && xe(f),
                      l > 1 &&
                        be(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(B, "$1"),
                      n,
                      l < r && Ce(e.slice(l, r)),
                      r < o && Ce((e = e.slice(r))),
                      r < o && be(e)
                    );
                  }
                  f.push(n);
                }
              return xe(f);
            }
            return (
              (ye.prototype = i.filters = i.pseudos),
              (i.setFilters = new ye()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c = S[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (s = e, l = [], u = i.preFilter; s; ) {
                    for (a in ((n && !(r = W.exec(s))) ||
                      (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
                    (n = !1),
                    (r = V.exec(s)) &&
                      ((n = r.shift()),
                      o.push({ value: n, type: r[0].replace(B, " ") }),
                      (s = s.slice(n.length))),
                    i.filter))
                      !(r = K[a].exec(s)) ||
                        (u[a] && !(r = u[a](r))) ||
                        ((n = r.shift()),
                        o.push({ value: n, type: a, matches: r }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : S(e, l).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    r = [],
                    o = [],
                    s = D[e + " "];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = Ce(t[n]))[w] ? r.push(s) : o.push(s);
                    (s = D(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          r = e.length > 0,
                          o = function (o, a, s, l, c) {
                            var d,
                              h,
                              v,
                              m = 0,
                              y = "0",
                              b = o && [],
                              w = [],
                              x = u,
                              T = o || (r && i.find.TAG("*", c)),
                              C = (k += null == x ? 1 : Math.random() || 0.1),
                              S = T.length;
                            for (
                              c && (u = a == p || a || c);
                              y !== S && null != (d = T[y]);
                              y++
                            ) {
                              if (r && d) {
                                for (
                                  h = 0,
                                    a ||
                                      d.ownerDocument == p ||
                                      (f(d), (s = !g));
                                  (v = e[h++]);

                                )
                                  if (v(d, a || p, s)) {
                                    l.push(d);
                                    break;
                                  }
                                c && (k = C);
                              }
                              n && ((d = !v && d) && m--, o && b.push(d));
                            }
                            if (((m += y), n && y !== m)) {
                              for (h = 0; (v = t[h++]); ) v(b, w, a, s);
                              if (o) {
                                if (m > 0)
                                  for (; y--; )
                                    b[y] || w[y] || (w[y] = O.call(l));
                                w = ke(w);
                              }
                              I.apply(l, w),
                                c &&
                                  !o &&
                                  w.length > 0 &&
                                  m + t.length > 1 &&
                                  se.uniqueSort(l);
                            }
                            return c && ((k = C), (u = x)), b;
                          };
                        return n ? ue(o) : o;
                      })(o, r)
                    )).selector = e;
                  }
                  return s;
                }),
              (l = se.select =
                function (e, t, n, r) {
                  var o,
                    l,
                    u,
                    c,
                    d,
                    f = "function" == typeof e && e,
                    p = !r && a((e = f.selector || e));
                  if (((n = n || []), 1 === p.length)) {
                    if (
                      (l = p[0] = p[0].slice(0)).length > 2 &&
                      "ID" === (u = l[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      i.relative[l[1].type]
                    ) {
                      if (
                        !(t = (i.find.ID(u.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      f && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      o = K.needsContext.test(e) ? 0 : l.length;
                      o-- && ((u = l[o]), !i.relative[(c = u.type)]);

                    )
                      if (
                        (d = i.find[c]) &&
                        (r = d(
                          u.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && me(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(o, 1), !(e = r.length && be(l))))
                          return I.apply(n, r), n;
                        break;
                      }
                  }
                  return (
                    (f || s(e, p))(
                      r,
                      t,
                      !g,
                      n,
                      !t || (ee.test(e) && me(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = w.split("").sort(E).join("") === w),
              (n.detectDuplicates = !!d),
              f(),
              (n.sortDetached = ce(function (e) {
                return (
                  1 & e.compareDocumentPosition(p.createElement("fieldset"))
                );
              })),
              ce(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                de("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ce(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                de("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ce(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                de(P, function (e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              se
            );
          })(i);
          (C.find = D),
            (C.expr = D.selectors),
            (C.expr[":"] = C.expr.pseudos),
            (C.uniqueSort = C.unique = D.uniqueSort),
            (C.text = D.getText),
            (C.isXMLDoc = D.isXML),
            (C.contains = D.contains),
            (C.escapeSelector = D.escape);
          var N = function (e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && C(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            E = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            A = C.expr.match.needsContext;
          function M(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var O =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function _(e, t, n) {
            return m(t)
              ? C.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? C.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? C.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
                })
              : C.filter(t, e, n);
          }
          (C.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? C.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : C.find.matches(
                    e,
                    C.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            C.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    C(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (C.contains(r[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  C.find(e, r[t], n);
                return i > 1 ? C.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(_(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(_(this, e || [], !0));
              },
              is: function (e) {
                return !!_(
                  this,
                  "string" == typeof e && A.test(e) ? C(e) : e || [],
                  !1
                ).length;
              },
            });
          var I,
            j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((C.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || I), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : j.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof C ? t[0] : t),
                  C.merge(
                    this,
                    C.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  O.test(i[1]) && C.isPlainObject(t))
                )
                  for (i in t) m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = b.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : m(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(C)
              : C.makeArray(e, this);
          }).prototype = C.fn),
            (I = C(b));
          var F = /^(?:parents|prev(?:Until|All))/,
            P = { children: !0, contents: !0, next: !0, prev: !0 };
          function L(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          C.fn.extend({
            has: function (e) {
              var t = C(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (C.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && C(e);
              if (!A.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && C.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? c.call(C(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            C.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return N(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return N(e, "parentNode", n);
                },
                next: function (e) {
                  return L(e, "nextSibling");
                },
                prev: function (e) {
                  return L(e, "previousSibling");
                },
                nextAll: function (e) {
                  return N(e, "nextSibling");
                },
                prevAll: function (e) {
                  return N(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return N(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return N(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return E((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return E(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (M(e, "template") && (e = e.content || e),
                      C.merge([], e.childNodes));
                },
              },
              function (e, t) {
                C.fn[e] = function (n, i) {
                  var r = C.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = C.filter(i, r)),
                    this.length > 1 &&
                      (P[e] || C.uniqueSort(r), F.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              }
            );
          var $ = /[^\x20\t\r\n\f]+/g;
          function H(e) {
            return e;
          }
          function q(e) {
            throw e;
          }
          function R(e, t, n, i) {
            var r;
            try {
              e && m((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && m((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (C.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      C.each(e.match($) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : C.extend({}, e);
            var t,
              n,
              i,
              r,
              o = [],
              a = [],
              s = -1,
              l = function () {
                for (r = r || e.once, i = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
              },
              u = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((s = o.length - 1), a.push(n)),
                      (function t(n) {
                        C.each(n, function (n, i) {
                          m(i)
                            ? (e.unique && u.has(i)) || o.push(i)
                            : i && i.length && "string" !== k(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    C.each(arguments, function (e, t) {
                      for (var n; (n = C.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? C.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (r = a = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (r = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return u.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return u;
          }),
            C.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      C.Callbacks("memory"),
                      C.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  r = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return C.Deferred(function (n) {
                        C.each(t, function (t, i) {
                          var r = m(e[i[4]]) && e[i[4]];
                          o[i[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && m(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, r) {
                      var o = 0;
                      function a(e, t, n, r) {
                        return function () {
                          var s = this,
                            l = arguments,
                            u = function () {
                              var i, u;
                              if (!(e < o)) {
                                if ((i = n.apply(s, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (u =
                                  i &&
                                  ("object" == typeof i ||
                                    "function" == typeof i) &&
                                  i.then),
                                  m(u)
                                    ? r
                                      ? u.call(i, a(o, t, H, r), a(o, t, q, r))
                                      : (o++,
                                        u.call(
                                          i,
                                          a(o, t, H, r),
                                          a(o, t, q, r),
                                          a(o, t, H, t.notifyWith)
                                        ))
                                    : (n !== H && ((s = void 0), (l = [i])),
                                      (r || t.resolveWith)(s, l));
                              }
                            },
                            c = r
                              ? u
                              : function () {
                                  try {
                                    u();
                                  } catch (i) {
                                    C.Deferred.exceptionHook &&
                                      C.Deferred.exceptionHook(i, c.stackTrace),
                                      e + 1 >= o &&
                                        (n !== q && ((s = void 0), (l = [i])),
                                        t.rejectWith(s, l));
                                  }
                                };
                          e
                            ? c()
                            : (C.Deferred.getStackHook &&
                                (c.stackTrace = C.Deferred.getStackHook()),
                              i.setTimeout(c));
                        };
                      }
                      return C.Deferred(function (i) {
                        t[0][3].add(a(0, i, m(r) ? r : H, i.notifyWith)),
                          t[1][3].add(a(0, i, m(e) ? e : H)),
                          t[2][3].add(a(0, i, m(n) ? n : q));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? C.extend(e, r) : r;
                    },
                  },
                  o = {};
                return (
                  C.each(t, function (e, i) {
                    var a = i[2],
                      s = i[5];
                    (r[i[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(i[3].fire),
                      (o[i[0]] = function () {
                        return (
                          o[i[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[i[0] + "With"] = a.fireWith);
                  }),
                  r.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  r = s.call(arguments),
                  o = C.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (r[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || o.resolveWith(i, r);
                    };
                  };
                if (
                  t <= 1 &&
                  (R(e, o.done(a(n)).resolve, o.reject, !t),
                  "pending" === o.state() || m(r[n] && r[n].then))
                )
                  return o.then();
                for (; n--; ) R(r[n], a(n), o.reject);
                return o.promise();
              },
            });
          var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (C.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              B.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (C.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var W = C.Deferred();
          function V() {
            b.removeEventListener("DOMContentLoaded", V),
              i.removeEventListener("load", V),
              C.ready();
          }
          (C.fn.ready = function (e) {
            return (
              W.then(e).catch(function (e) {
                C.readyException(e);
              }),
              this
            );
          }),
            C.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) ||
                  ((C.isReady = !0),
                  (!0 !== e && --C.readyWait > 0) || W.resolveWith(b, [C]));
              },
            }),
            (C.ready.then = W.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? i.setTimeout(C.ready)
              : (b.addEventListener("DOMContentLoaded", V),
                i.addEventListener("load", V));
          var U = function (e, t, n, i, r, o, a) {
              var s = 0,
                l = e.length,
                u = null == n;
              if ("object" === k(n))
                for (s in ((r = !0), n)) U(e, t, s, n[s], !0, o, a);
              else if (
                void 0 !== i &&
                ((r = !0),
                m(i) || (a = !0),
                u &&
                  (a
                    ? (t.call(e, i), (t = null))
                    : ((u = t),
                      (t = function (e, t, n) {
                        return u.call(C(e), n);
                      }))),
                t)
              )
                for (; s < l; s++)
                  t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
              return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
            },
            Y = /^-ms-/,
            z = /-([a-z])/g;
          function K(e, t) {
            return t.toUpperCase();
          }
          function G(e) {
            return e.replace(Y, "ms-").replace(z, K);
          }
          var J = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function Q() {
            this.expando = C.expando + Q.uid++;
          }
          (Q.uid = 1),
            (Q.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    J(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[G(t)] = n;
                else for (i in t) r[G(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][G(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(G)
                      : (t = G(t)) in i
                      ? [t]
                      : t.match($) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || C.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t);
              },
            });
          var X = new Q(),
            Z = new Q(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          C.extend({
            hasData: function (e) {
              return Z.hasData(e) || X.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return X.access(e, t, n);
            },
            _removeData: function (e, t) {
              X.remove(e, t);
            },
          }),
            C.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  o = this[0],
                  a = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = Z.get(o)),
                    1 === o.nodeType && !X.get(o, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (i = a[n].name).indexOf("data-") &&
                        ((i = G(i.slice(5))), ne(o, i, r[i]));
                    X.set(o, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : U(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = Z.get(o, e)) ||
                            void 0 !== (n = ne(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            C.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = X.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = X.access(e, t, C.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  o = C._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(
                      e,
                      function () {
                        C.dequeue(e, t);
                      },
                      o
                    )),
                  !i && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  X.get(e, n) ||
                  X.access(e, n, {
                    empty: C.Callbacks("once memory").add(function () {
                      X.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            C.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? C.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = C.queue(this, e, t);
                        C._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            C.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  C.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = C.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                    --i || r.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = X.get(o[a], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(s));
                return s(), r.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            ae = b.documentElement,
            se = function (e) {
              return C.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          ae.getRootNode &&
            (se = function (e) {
              return (
                C.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ue = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === C.css(e, "display"))
            );
          };
          function ce(e, t, n, i) {
            var r,
              o,
              a = 20,
              s = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return C.css(e, t, "");
                  },
              l = s(),
              u = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (C.cssNumber[t] || ("px" !== u && +l)) &&
                re.exec(C.css(e, t));
            if (c && c[3] !== u) {
              for (l /= 2, u = u || c[3], c = +l || 1; a--; )
                C.style(e, t, c + u),
                  (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              (c *= 2), C.style(e, t, c + u), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +l || 0),
                (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = u), (i.start = c), (i.end = r))),
              r
            );
          }
          var de = {};
          function fe(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = de[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = C.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (de[i] = r),
              r)
            );
          }
          function pe(e, t) {
            for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
              (i = e[o]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[o] = X.get(i, "display") || null),
                      r[o] || (i.style.display = "")),
                    "" === i.style.display && ue(i) && (r[o] = fe(i)))
                  : "none" !== n && ((r[o] = "none"), X.set(i, "display", n)));
            for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
            return e;
          }
          C.fn.extend({
            show: function () {
              return pe(this, !0);
            },
            hide: function () {
              return pe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ue(this) ? C(this).show() : C(this).hide();
                  });
            },
          });
          var he,
            ge,
            ve = /^(?:checkbox|radio)$/i,
            me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (ge = b.createElement("input")).setAttribute("type", "radio"),
            ge.setAttribute("checked", "checked"),
            ge.setAttribute("name", "t"),
            he.appendChild(ge),
            (v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (v.option = !!he.lastChild);
          var be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function we(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && M(e, t)) ? C.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            v.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var ke = /<|&#?\w+;/;
          function Te(e, t, n, i, r) {
            for (
              var o,
                a,
                s,
                l,
                u,
                c,
                d = t.createDocumentFragment(),
                f = [],
                p = 0,
                h = e.length;
              p < h;
              p++
            )
              if ((o = e[p]) || 0 === o)
                if ("object" === k(o)) C.merge(f, o.nodeType ? [o] : o);
                else if (ke.test(o)) {
                  for (
                    a = a || d.appendChild(t.createElement("div")),
                      s = (me.exec(o) || ["", ""])[1].toLowerCase(),
                      l = be[s] || be._default,
                      a.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                      c = l[0];
                    c--;

                  )
                    a = a.lastChild;
                  C.merge(f, a.childNodes),
                    ((a = d.firstChild).textContent = "");
                } else f.push(t.createTextNode(o));
            for (d.textContent = "", p = 0; (o = f[p++]); )
              if (i && C.inArray(o, i) > -1) r && r.push(o);
              else if (
                ((u = se(o)),
                (a = we(d.appendChild(o), "script")),
                u && xe(a),
                n)
              )
                for (c = 0; (o = a[c++]); ) ye.test(o.type || "") && n.push(o);
            return d;
          }
          var Ce = /^([^.]*)(?:\.(.+)|)/;
          function Se() {
            return !0;
          }
          function De() {
            return !1;
          }
          function Ne(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Ee(e, t, n, i, r, o) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Ee(e, s, n, i, t[s], o);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = De;
            else if (!r) return e;
            return (
              1 === o &&
                ((a = r),
                ((r = function (e) {
                  return C().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = C.guid++))),
              e.each(function () {
                C.event.add(this, t, r, i, n);
              })
            );
          }
          function Ae(e, t, n) {
            n
              ? (X.set(e, t, !1),
                C.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      r,
                      o = X.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (C.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = s.call(arguments)),
                        X.set(this, t, o),
                        (i = n(this, t)),
                        this[t](),
                        o !== (r = X.get(this, t)) || i
                          ? X.set(this, t, !1)
                          : (r = {}),
                        o !== r)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          r && r.value
                        );
                    } else
                      o.length &&
                        (X.set(this, t, {
                          value: C.event.trigger(
                            C.extend(o[0], C.Event.prototype),
                            o.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === X.get(e, t) && C.event.add(e, t, Se);
          }
          (C.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var o,
                a,
                s,
                l,
                u,
                c,
                d,
                f,
                p,
                h,
                g,
                v = X.get(e);
              if (J(e))
                for (
                  n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && C.find.matchesSelector(ae, r),
                    n.guid || (n.guid = C.guid++),
                    (l = v.events) || (l = v.events = Object.create(null)),
                    (a = v.handle) ||
                      (a = v.handle =
                        function (t) {
                          return void 0 !== C && C.event.triggered !== t.type
                            ? C.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    u = (t = (t || "").match($) || [""]).length;
                  u--;

                )
                  (p = g = (s = Ce.exec(t[u]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p &&
                      ((d = C.event.special[p] || {}),
                      (p = (r ? d.delegateType : d.bindType) || p),
                      (d = C.event.special[p] || {}),
                      (c = C.extend(
                        {
                          type: p,
                          origType: g,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && C.expr.match.needsContext.test(r),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (f = l[p]) ||
                        (((f = l[p] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, i, h, a)) ||
                          (e.addEventListener && e.addEventListener(p, a))),
                      d.add &&
                        (d.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      r ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                      (C.event.global[p] = !0));
            },
            remove: function (e, t, n, i, r) {
              var o,
                a,
                s,
                l,
                u,
                c,
                d,
                f,
                p,
                h,
                g,
                v = X.hasData(e) && X.get(e);
              if (v && (l = v.events)) {
                for (u = (t = (t || "").match($) || [""]).length; u--; )
                  if (
                    ((p = g = (s = Ce.exec(t[u]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p)
                  ) {
                    for (
                      d = C.event.special[p] || {},
                        f =
                          l[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = o = f.length;
                      o--;

                    )
                      (c = f[o]),
                        (!r && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (i &&
                            i !== c.selector &&
                            ("**" !== i || !c.selector)) ||
                          (f.splice(o, 1),
                          c.selector && f.delegateCount--,
                          d.remove && d.remove.call(e, c));
                    a &&
                      !f.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, h, v.handle)) ||
                        C.removeEvent(e, p, v.handle),
                      delete l[p]);
                  } else for (p in l) C.event.remove(e, p + t[u], n, i, !0);
                C.isEmptyObject(l) && X.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                o,
                a,
                s = new Array(arguments.length),
                l = C.event.fix(e),
                u =
                  (X.get(this, "events") || Object.create(null))[l.type] || [],
                c = C.event.special[l.type] || {};
              for (s[0] = l, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, l))
              ) {
                for (
                  a = C.event.handlers.call(this, l, u), t = 0;
                  (r = a[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = r.elem, n = 0;
                    (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== o.namespace &&
                      !l.rnamespace.test(o.namespace)) ||
                      ((l.handleObj = o),
                      (l.data = o.data),
                      void 0 !==
                        (i = (
                          (C.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(r.elem, s)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                o,
                a,
                s = [],
                l = t.delegateCount,
                u = e.target;
              if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                  if (
                    1 === u.nodeType &&
                    ("click" !== e.type || !0 !== u.disabled)
                  ) {
                    for (o = [], a = {}, n = 0; n < l; n++)
                      void 0 === a[(r = (i = t[n]).selector + " ")] &&
                        (a[r] = i.needsContext
                          ? C(r, this).index(u) > -1
                          : C.find(r, this, null, [u]).length),
                        a[r] && o.push(i);
                    o.length && s.push({ elem: u, handlers: o });
                  }
              return (
                (u = this),
                l < t.length && s.push({ elem: u, handlers: t.slice(l) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(C.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[C.expando] ? e : new C.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ve.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      Ae(t, "click", Se),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ve.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      Ae(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ve.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      X.get(t, "click")) ||
                    M(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (C.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (C.Event = function (e, t) {
              if (!(this instanceof C.Event)) return new C.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Se
                      : De),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && C.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[C.expando] = !0);
            }),
            (C.Event.prototype = {
              constructor: C.Event,
              isDefaultPrevented: De,
              isPropagationStopped: De,
              isImmediatePropagationStopped: De,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Se),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Se),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Se),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            C.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              C.event.addProp
            ),
            C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              C.event.special[e] = {
                setup: function () {
                  return Ae(this, e, Ne), !1;
                },
                trigger: function () {
                  return Ae(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            C.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                C.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = this,
                      r = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (r && (r === i || C.contains(i, r))) ||
                        ((e.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            C.fn.extend({
              on: function (e, t, n, i) {
                return Ee(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Ee(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    C(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = De),
                  this.each(function () {
                    C.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Me = /<script|<style|<link/i,
            Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Ie(e, t) {
            return (
              (M(e, "table") &&
                M(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                C(e).children("tbody")[0]) ||
              e
            );
          }
          function je(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Fe(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Pe(e, t) {
            var n, i, r, o, a, s;
            if (1 === t.nodeType) {
              if (X.hasData(e) && (s = X.get(e).events))
                for (r in (X.remove(t, "handle events"), s))
                  for (n = 0, i = s[r].length; n < i; n++)
                    C.event.add(t, r, s[r][n]);
              Z.hasData(e) &&
                ((o = Z.access(e)), (a = C.extend({}, o)), Z.set(t, a));
            }
          }
          function Le(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ve.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function $e(e, t, n, i) {
            t = l(t);
            var r,
              o,
              a,
              s,
              u,
              c,
              d = 0,
              f = e.length,
              p = f - 1,
              h = t[0],
              g = m(h);
            if (
              g ||
              (f > 1 && "string" == typeof h && !v.checkClone && Oe.test(h))
            )
              return e.each(function (r) {
                var o = e.eq(r);
                g && (t[0] = h.call(this, r, o.html())), $e(o, t, n, i);
              });
            if (
              f &&
              ((o = (r = Te(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = o),
              o || i)
            ) {
              for (s = (a = C.map(we(r, "script"), je)).length; d < f; d++)
                (u = r),
                  d !== p &&
                    ((u = C.clone(u, !0, !0)),
                    s && C.merge(a, we(u, "script"))),
                  n.call(e[d], u, d);
              if (s)
                for (
                  c = a[a.length - 1].ownerDocument, C.map(a, Fe), d = 0;
                  d < s;
                  d++
                )
                  (u = a[d]),
                    ye.test(u.type || "") &&
                      !X.access(u, "globalEval") &&
                      C.contains(c, u) &&
                      (u.src && "module" !== (u.type || "").toLowerCase()
                        ? C._evalUrl &&
                          !u.noModule &&
                          C._evalUrl(
                            u.src,
                            { nonce: u.nonce || u.getAttribute("nonce") },
                            c
                          )
                        : x(u.textContent.replace(_e, ""), u, c));
            }
            return e;
          }
          function He(e, t, n) {
            for (
              var i, r = t ? C.filter(t, e) : e, o = 0;
              null != (i = r[o]);
              o++
            )
              n || 1 !== i.nodeType || C.cleanData(we(i)),
                i.parentNode &&
                  (n && se(i) && xe(we(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          C.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                o,
                a,
                s = e.cloneNode(!0),
                l = se(e);
              if (
                !(
                  v.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  C.isXMLDoc(e)
                )
              )
                for (a = we(s), i = 0, r = (o = we(e)).length; i < r; i++)
                  Le(o[i], a[i]);
              if (t)
                if (n)
                  for (
                    o = o || we(e), a = a || we(s), i = 0, r = o.length;
                    i < r;
                    i++
                  )
                    Pe(o[i], a[i]);
                else Pe(e, s);
              return (
                (a = we(s, "script")).length > 0 &&
                  xe(a, !l && we(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, r = C.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (J(n)) {
                  if ((t = n[X.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? C.event.remove(n, i)
                          : C.removeEvent(n, i, t.handle);
                    n[X.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            C.fn.extend({
              detach: function (e) {
                return He(this, e, !0);
              },
              remove: function (e) {
                return He(this, e);
              },
              text: function (e) {
                return U(
                  this,
                  function (e) {
                    return void 0 === e
                      ? C.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return $e(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Ie(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return $e(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Ie(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return $e(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return $e(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (C.cleanData(we(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return C.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return U(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Me.test(e) &&
                      !be[(me.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = C.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (C.cleanData(we(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return $e(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 &&
                      (C.cleanData(we(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            C.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                C.fn[e] = function (e) {
                  for (
                    var n, i = [], r = C(e), o = r.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      C(r[a])[t](n),
                      u.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var qe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            Re = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            Be = function (e, t, n) {
              var i,
                r,
                o = {};
              for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
              return i;
            },
            We = new RegExp(oe.join("|"), "i");
          function Ve(e, t, n) {
            var i,
              r,
              o,
              a,
              s = e.style;
            return (
              (n = n || Re(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  se(e) ||
                  (a = C.style(e, t)),
                !v.pixelBoxStyles() &&
                  qe.test(a) &&
                  We.test(t) &&
                  ((i = s.width),
                  (r = s.minWidth),
                  (o = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = i),
                  (s.minWidth = r),
                  (s.maxWidth = o))),
              void 0 !== a ? a + "" : a
            );
          }
          function Ue(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (u.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ae.appendChild(u).appendChild(c);
                var e = i.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (r = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (o = 12 === t(c.offsetWidth / 3)),
                  ae.removeChild(u),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              r,
              o,
              a,
              s,
              l,
              u = b.createElement("div"),
              c = b.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
              C.extend(v, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, r;
                  return (
                    null == s &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ae.appendChild(e).appendChild(t).appendChild(n),
                      (r = i.getComputedStyle(t)),
                      (s =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Ye = ["Webkit", "Moz", "ms"],
            ze = b.createElement("div").style,
            Ke = {};
          function Ge(e) {
            return (
              C.cssProps[e] ||
              Ke[e] ||
              (e in ze
                ? e
                : (Ke[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                        n--;

                      )
                        if ((e = Ye[n] + t) in ze) return e;
                    })(e) || e))
            );
          }
          var Je = /^(none|table(?!-c[ea]).+)/,
            Qe = /^--/,
            Xe = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ze = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var i = re.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function tt(e, t, n, i, r, o) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (l += C.css(e, n + oe[a], !0, r)),
                i
                  ? ("content" === n &&
                      (l -= C.css(e, "padding" + oe[a], !0, r)),
                    "margin" !== n &&
                      (l -= C.css(e, "border" + oe[a] + "Width", !0, r)))
                  : ((l += C.css(e, "padding" + oe[a], !0, r)),
                    "padding" !== n
                      ? (l += C.css(e, "border" + oe[a] + "Width", !0, r))
                      : (s += C.css(e, "border" + oe[a] + "Width", !0, r)));
            return (
              !i &&
                o >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        l -
                        s -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function nt(e, t, n) {
            var i = Re(e),
              r =
                (!v.boxSizingReliable() || n) &&
                "border-box" === C.css(e, "boxSizing", !1, i),
              o = r,
              a = Ve(e, t, i),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (qe.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!v.boxSizingReliable() && r) ||
                (!v.reliableTrDimensions() && M(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === C.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === C.css(e, "boxSizing", !1, i)),
                (o = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                tt(e, t, n || (r ? "border" : "content"), o, i, a) +
                "px"
            );
          }
          function it(e, t, n, i, r) {
            return new it.prototype.init(e, t, n, i, r);
          }
          C.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ve(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  o,
                  a,
                  s = G(t),
                  l = Qe.test(t),
                  u = e.style;
                if (
                  (l || (t = Ge(s)),
                  (a = C.cssHooks[t] || C.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (r = a.get(e, !1, i))
                    ? r
                    : u[t];
                "string" == (o = typeof n) &&
                  (r = re.exec(n)) &&
                  r[1] &&
                  ((n = ce(e, t, r)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      l ||
                      (n += (r && r[3]) || (C.cssNumber[s] ? "" : "px")),
                    v.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (u[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                      (l ? u.setProperty(t, n) : (u[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                o,
                a,
                s = G(t);
              return (
                Qe.test(t) || (t = Ge(s)),
                (a = C.cssHooks[t] || C.cssHooks[s]) &&
                  "get" in a &&
                  (r = a.get(e, !0, n)),
                void 0 === r && (r = Ve(e, t, i)),
                "normal" === r && t in Ze && (r = Ze[t]),
                "" === n || n
                  ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
                  : r
              );
            },
          }),
            C.each(["height", "width"], function (e, t) {
              C.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Je.test(C.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, i)
                      : Be(e, Xe, function () {
                          return nt(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    o = Re(e),
                    a = !v.scrollboxSize() && "absolute" === o.position,
                    s =
                      (a || i) && "border-box" === C.css(e, "boxSizing", !1, o),
                    l = i ? tt(e, t, i, s, o) : 0;
                  return (
                    s &&
                      a &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          tt(e, t, "border", !1, o) -
                          0.5
                      )),
                    l &&
                      (r = re.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = C.css(e, t))),
                    et(0, n, l)
                  );
                },
              };
            }),
            (C.cssHooks.marginLeft = Ue(v.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ve(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Be(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            C.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (C.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        r = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                    return r;
                  },
                }),
                  "margin" !== e && (C.cssHooks[e + t].set = et);
              }
            ),
            C.fn.extend({
              css: function (e, t) {
                return U(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      o = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (i = Re(e), r = t.length; a < r; a++)
                        o[t[a]] = C.css(e, t[a], !1, i);
                      return o;
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (C.Tween = it),
            (it.prototype = {
              constructor: it,
              init: function (e, t, n, i, r, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || C.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = o || (C.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = it.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : it.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = it.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        C.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : it.propHooks._default.set(this),
                  this
                );
              },
            }),
            (it.prototype.init.prototype = it.prototype),
            (it.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  C.fx.step[e.prop]
                    ? C.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!C.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : C.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (it.propHooks.scrollTop = it.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (C.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (C.fx = it.prototype.init),
            (C.fx.step = {});
          var rt,
            ot,
            at = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;
          function lt() {
            ot &&
              (!1 === b.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(lt)
                : i.setTimeout(lt, C.fx.interval),
              C.fx.tick());
          }
          function ut() {
            return (
              i.setTimeout(function () {
                rt = void 0;
              }),
              (rt = Date.now())
            );
          }
          function ct(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = oe[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function dt(e, t, n) {
            for (
              var i,
                r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
                o = 0,
                a = r.length;
              o < a;
              o++
            )
              if ((i = r[o].call(n, t, e))) return i;
          }
          function ft(e, t, n) {
            var i,
              r,
              o = 0,
              a = ft.prefilters.length,
              s = C.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (r) return !1;
                for (
                  var t = rt || ut(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    i = 1 - (n / u.duration || 0),
                    o = 0,
                    a = u.tweens.length;
                  o < a;
                  o++
                )
                  u.tweens[o].run(i);
                return (
                  s.notifyWith(e, [u, i, n]),
                  i < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [u, 1, 0]),
                      s.resolveWith(e, [u]),
                      !1)
                );
              },
              u = s.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(
                  !0,
                  { specialEasing: {}, easing: C.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = C.Tween(
                    e,
                    u.opts,
                    t,
                    n,
                    u.opts.specialEasing[t] || u.opts.easing
                  );
                  return u.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? u.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) u.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
                      : s.rejectWith(e, [u, t]),
                    this
                  );
                },
              }),
              c = u.props;
            for (
              (function (e, t) {
                var n, i, r, o, a;
                for (n in e)
                  if (
                    ((r = t[(i = G(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                    n !== i && ((e[i] = o), delete e[n]),
                    (a = C.cssHooks[i]) && ("expand" in a))
                  )
                    for (n in ((o = a.expand(o)), delete e[i], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = r));
                  else t[i] = r;
              })(c, u.opts.specialEasing);
              o < a;
              o++
            )
              if ((i = ft.prefilters[o].call(u, e, c, u.opts)))
                return (
                  m(i.stop) &&
                    (C._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              C.map(c, dt, u),
              m(u.opts.start) && u.opts.start.call(e, u),
              u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always),
              C.fx.timer(
                C.extend(l, { elem: e, anim: u, queue: u.opts.queue })
              ),
              u
            );
          }
          (C.Animation = C.extend(ft, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ce(n.elem, e, re.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              m(e) ? ((t = e), (e = ["*"])) : (e = e.match($));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (ft.tweeners[n] = ft.tweeners[n] || []),
                  ft.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  o,
                  a,
                  s,
                  l,
                  u,
                  c,
                  d = "width" in t || "height" in t,
                  f = this,
                  p = {},
                  h = e.style,
                  g = e.nodeType && ue(e),
                  v = X.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (a = C._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  f.always(function () {
                    f.always(function () {
                      a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), at.test(r))) {
                    if (
                      (delete t[i],
                      (o = o || "toggle" === r),
                      r === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !v || void 0 === v[i]) continue;
                      g = !0;
                    }
                    p[i] = (v && v[i]) || C.style(e, i);
                  }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                  for (i in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (u = v && v.display) && (u = X.get(e, "display")),
                    "none" === (c = C.css(e, "display")) &&
                      (u
                        ? (c = u)
                        : (pe([e], !0),
                          (u = e.style.display || u),
                          (c = C.css(e, "display")),
                          pe([e]))),
                    ("inline" === c || ("inline-block" === c && null != u)) &&
                      "none" === C.css(e, "float") &&
                      (l ||
                        (f.done(function () {
                          h.display = u;
                        }),
                        null == u &&
                          ((c = h.display), (u = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    f.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  p))
                    l ||
                      (v
                        ? "hidden" in v && (g = v.hidden)
                        : (v = X.access(e, "fxshow", { display: u })),
                      o && (v.hidden = !g),
                      g && pe([e], !0),
                      f.done(function () {
                        for (i in (g || pe([e]), X.remove(e, "fxshow"), p))
                          C.style(e, i, p[i]);
                      })),
                      (l = dt(g ? v[i] : 0, i, f)),
                      i in v ||
                        ((v[i] = l.start),
                        g && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
            },
          })),
            (C.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? C.extend({}, e)
                  : {
                      complete: n || (!n && t) || (m(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !m(t) && t),
                    };
              return (
                C.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in C.fx.speeds
                      ? (i.duration = C.fx.speeds[i.duration])
                      : (i.duration = C.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  m(i.old) && i.old.call(this),
                    i.queue && C.dequeue(this, i.queue);
                }),
                i
              );
            }),
            C.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(ue)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var r = C.isEmptyObject(e),
                  o = C.speed(t, n, i),
                  a = function () {
                    var t = ft(this, C.extend({}, e), o);
                    (r || X.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      o = C.timers,
                      a = X.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                      for (r in a) a[r] && a[r].stop && st.test(r) && i(a[r]);
                    for (r = o.length; r--; )
                      o[r].elem !== this ||
                        (null != e && o[r].queue !== e) ||
                        (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                    (!t && n) || C.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = X.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      o = C.timers,
                      a = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        C.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            C.each(["toggle", "show", "hide"], function (e, t) {
              var n = C.fn[t];
              C.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ct(t, !0), e, i, r);
              };
            }),
            C.each(
              {
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                C.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (C.timers = []),
            (C.fx.tick = function () {
              var e,
                t = 0,
                n = C.timers;
              for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || C.fx.stop(), (rt = void 0);
            }),
            (C.fx.timer = function (e) {
              C.timers.push(e), C.fx.start();
            }),
            (C.fx.interval = 13),
            (C.fx.start = function () {
              ot || ((ot = !0), lt());
            }),
            (C.fx.stop = function () {
              ot = null;
            }),
            (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (C.fn.delay = function (e, t) {
              return (
                (e = (C.fx && C.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (v.checkOn = "" !== e.value),
                (v.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (v.radioValue = "t" === e.value);
            })();
          var pt,
            ht = C.expr.attrHandle;
          C.fn.extend({
            attr: function (e, t) {
              return U(this, C.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                C.removeAttr(this, e);
              });
            },
          }),
            C.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? C.prop(e, t, n)
                    : ((1 === o && C.isXMLDoc(e)) ||
                        (r =
                          C.attrHooks[t.toLowerCase()] ||
                          (C.expr.match.bool.test(t) ? pt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void C.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = C.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!v.radioValue && "radio" === t && M(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match($);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (pt = {
              set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || C.find.attr;
              ht[t] = function (e, t, i) {
                var r,
                  o,
                  a = t.toLowerCase();
                return (
                  i ||
                    ((o = ht[a]),
                    (ht[a] = r),
                    (r = null != n(e, t, i) ? a : null),
                    (ht[a] = o)),
                  r
                );
              };
            });
          var gt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;
          function mt(e) {
            return (e.match($) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function bt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match($)) || [];
          }
          C.fn.extend({
            prop: function (e, t) {
              return U(this, C.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[C.propFix[e] || e];
              });
            },
          }),
            C.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && C.isXMLDoc(e)) ||
                      ((t = C.propFix[t] || t), (r = C.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : gt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            v.optSelected ||
              (C.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            C.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                C.propFix[this.toLowerCase()] = this;
              }
            ),
            C.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  a,
                  s,
                  l = 0;
                if (m(e))
                  return this.each(function (t) {
                    C(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + mt(r) + " "))
                    ) {
                      for (a = 0; (o = t[a++]); )
                        i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                      r !== (s = mt(i)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  a,
                  s,
                  l = 0;
                if (m(e))
                  return this.each(function (t) {
                    C(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + mt(r) + " "))
                    ) {
                      for (a = 0; (o = t[a++]); )
                        for (; i.indexOf(" " + o + " ") > -1; )
                          i = i.replace(" " + o + " ", " ");
                      r !== (s = mt(i)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : m(e)
                  ? this.each(function (n) {
                      C(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, r, o, a;
                      if (i)
                        for (r = 0, o = C(this), a = bt(e); (t = a[r++]); )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = yt(this)) && X.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : X.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + mt(yt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var wt = /\r/g;
          C.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = m(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, C(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = C.map(r, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        C.valHooks[this.type] ||
                        C.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t =
                    C.valHooks[r.type] ||
                    C.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(wt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            C.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : mt(C.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                      if (
                        ((n = r[i]).selected || i === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))
                      ) {
                        if (((t = C(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, r = e.options, o = C.makeArray(t), a = r.length;
                      a--;

                    )
                      ((i = r[a]).selected =
                        C.inArray(C.valHooks.option.get(i), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            C.each(["radio", "checkbox"], function () {
              (C.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = C.inArray(C(e).val(), t) > -1);
                },
              }),
                v.checkOn ||
                  (C.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (v.focusin = "onfocusin" in i);
          var xt = /^(?:focusinfocus|focusoutblur)$/,
            kt = function (e) {
              e.stopPropagation();
            };
          C.extend(C.event, {
            trigger: function (e, t, n, r) {
              var o,
                a,
                s,
                l,
                u,
                c,
                d,
                f,
                h = [n || b],
                g = p.call(e, "type") ? e.type : e,
                v = p.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = f = s = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !xt.test(g + C.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((v = g.split(".")), (g = v.shift()), v.sort()),
                  (u = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[C.expando]
                    ? e
                    : new C.Event(g, "object" == typeof e && e)).isTrigger = r
                    ? 2
                    : 3),
                  (e.namespace = v.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : C.makeArray(t, [e])),
                  (d = C.event.special[g] || {}),
                  r || !d.trigger || !1 !== d.trigger.apply(n, t)))
              ) {
                if (!r && !d.noBubble && !y(n)) {
                  for (
                    l = d.delegateType || g,
                      xt.test(l + g) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || b) &&
                    h.push(s.defaultView || s.parentWindow || i);
                }
                for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                  (f = a),
                    (e.type = o > 1 ? l : d.bindType || g),
                    (c =
                      (X.get(a, "events") || Object.create(null))[e.type] &&
                      X.get(a, "handle")) && c.apply(a, t),
                    (c = u && a[u]) &&
                      c.apply &&
                      J(a) &&
                      ((e.result = c.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  r ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                    !J(n) ||
                    (u &&
                      m(n[g]) &&
                      !y(n) &&
                      ((s = n[u]) && (n[u] = null),
                      (C.event.triggered = g),
                      e.isPropagationStopped() && f.addEventListener(g, kt),
                      n[g](),
                      e.isPropagationStopped() && f.removeEventListener(g, kt),
                      (C.event.triggered = void 0),
                      s && (n[u] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
              C.event.trigger(i, null, t);
            },
          }),
            C.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  C.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
              },
            }),
            v.focusin ||
              C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  C.event.simulate(t, e.target, C.event.fix(e));
                };
                C.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = X.access(i, t);
                    r || i.addEventListener(e, n, !0),
                      X.access(i, t, (r || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = X.access(i, t) - 1;
                    r
                      ? X.access(i, t, r)
                      : (i.removeEventListener(e, n, !0), X.remove(i, t));
                  },
                };
              });
          var Tt = i.location,
            Ct = { guid: Date.now() },
            St = /\?/;
          C.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                C.error(
                  "Invalid XML: " +
                    (n
                      ? C.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var Dt = /\[\]$/,
            Nt = /\r?\n/g,
            Et = /^(?:submit|button|image|reset|file)$/i,
            At = /^(?:input|select|textarea|keygen)/i;
          function Mt(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              C.each(t, function (t, r) {
                n || Dt.test(e)
                  ? i(e, r)
                  : Mt(
                      e +
                        "[" +
                        ("object" == typeof r && null != r ? t : "") +
                        "]",
                      r,
                      n,
                      i
                    );
              });
            else if (n || "object" !== k(t)) i(e, t);
            else for (r in t) Mt(e + "[" + r + "]", t[r], n, i);
          }
          (C.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = m(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
              C.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) Mt(n, e[n], t, r);
            return i.join("&");
          }),
            C.fn.extend({
              serialize: function () {
                return C.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = C.prop(this, "elements");
                  return e ? C.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !C(this).is(":disabled") &&
                      At.test(this.nodeName) &&
                      !Et.test(e) &&
                      (this.checked || !ve.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = C(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? C.map(n, function (e) {
                          return { name: t.name, value: e.replace(Nt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Nt, "\r\n") };
                  })
                  .get();
              },
            });
          var Ot = /%20/g,
            _t = /#.*$/,
            It = /([?&])_=[^&]*/,
            jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ft = /^(?:GET|HEAD)$/,
            Pt = /^\/\//,
            Lt = {},
            $t = {},
            Ht = "*/".concat("*"),
            qt = b.createElement("a");
          function Rt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                o = t.toLowerCase().match($) || [];
              if (m(n))
                for (; (i = o[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function Bt(e, t, n, i) {
            var r = {},
              o = e === $t;
            function a(s) {
              var l;
              return (
                (r[s] = !0),
                C.each(e[s] || [], function (e, s) {
                  var u = s(t, n, i);
                  return "string" != typeof u || o || r[u]
                    ? o
                      ? !(l = u)
                      : void 0
                    : (t.dataTypes.unshift(u), a(u), !1);
                }),
                l
              );
            }
            return a(t.dataTypes[0]) || (!r["*"] && a("*"));
          }
          function Wt(e, t) {
            var n,
              i,
              r = C.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && C.extend(!0, e, i), e;
          }
          (qt.href = Tt.href),
            C.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Tt.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ht,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": C.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e);
              },
              ajaxPrefilter: Rt(Lt),
              ajaxTransport: Rt($t),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  o,
                  a,
                  s,
                  l,
                  u,
                  c,
                  d,
                  f,
                  p = C.ajaxSetup({}, t),
                  h = p.context || p,
                  g = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                  v = C.Deferred(),
                  m = C.Callbacks("once memory"),
                  y = p.statusCode || {},
                  w = {},
                  x = {},
                  k = "canceled",
                  T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (u) {
                        if (!a)
                          for (a = {}; (t = jt.exec(o)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return u ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == u &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (w[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == u && (p.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (u) T.always(e[T.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || k;
                      return n && n.abort(t), S(0, t), this;
                    },
                  };
                if (
                  (v.promise(T),
                  (p.url = ((e || p.url || Tt.href) + "").replace(
                    Pt,
                    Tt.protocol + "//"
                  )),
                  (p.type = t.method || t.type || p.method || p.type),
                  (p.dataTypes = (p.dataType || "*").toLowerCase().match($) || [
                    "",
                  ]),
                  null == p.crossDomain)
                ) {
                  l = b.createElement("a");
                  try {
                    (l.href = p.url),
                      (l.href = l.href),
                      (p.crossDomain =
                        qt.protocol + "//" + qt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    p.crossDomain = !0;
                  }
                }
                if (
                  (p.data &&
                    p.processData &&
                    "string" != typeof p.data &&
                    (p.data = C.param(p.data, p.traditional)),
                  Bt(Lt, p, t, T),
                  u)
                )
                  return T;
                for (d in ((c = C.event && p.global) &&
                  0 == C.active++ &&
                  C.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !Ft.test(p.type)),
                (r = p.url.replace(_t, "")),
                p.hasContent
                  ? p.data &&
                    p.processData &&
                    0 ===
                      (p.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (p.data = p.data.replace(Ot, "+"))
                  : ((f = p.url.slice(r.length)),
                    p.data &&
                      (p.processData || "string" == typeof p.data) &&
                      ((r += (St.test(r) ? "&" : "?") + p.data), delete p.data),
                    !1 === p.cache &&
                      ((r = r.replace(It, "$1")),
                      (f = (St.test(r) ? "&" : "?") + "_=" + Ct.guid++ + f)),
                    (p.url = r + f)),
                p.ifModified &&
                  (C.lastModified[r] &&
                    T.setRequestHeader("If-Modified-Since", C.lastModified[r]),
                  C.etag[r] && T.setRequestHeader("If-None-Match", C.etag[r])),
                ((p.data && p.hasContent && !1 !== p.contentType) ||
                  t.contentType) &&
                  T.setRequestHeader("Content-Type", p.contentType),
                T.setRequestHeader(
                  "Accept",
                  p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                    ? p.accepts[p.dataTypes[0]] +
                        ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
                    : p.accepts["*"]
                ),
                p.headers))
                  T.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, T, p) || u))
                  return T.abort();
                if (
                  ((k = "abort"),
                  m.add(p.complete),
                  T.done(p.success),
                  T.fail(p.error),
                  (n = Bt($t, p, t, T)))
                ) {
                  if (
                    ((T.readyState = 1), c && g.trigger("ajaxSend", [T, p]), u)
                  )
                    return T;
                  p.async &&
                    p.timeout > 0 &&
                    (s = i.setTimeout(function () {
                      T.abort("timeout");
                    }, p.timeout));
                  try {
                    (u = !1), n.send(w, S);
                  } catch (e) {
                    if (u) throw e;
                    S(-1, e);
                  }
                } else S(-1, "No Transport");
                function S(e, t, a, l) {
                  var d,
                    f,
                    b,
                    w,
                    x,
                    k = t;
                  u ||
                    ((u = !0),
                    s && i.clearTimeout(s),
                    (n = void 0),
                    (o = l || ""),
                    (T.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (w = (function (e, t, n) {
                        for (
                          var i, r, o, a, s = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in s)
                            if (s[r] && s[r].test(i)) {
                              l.unshift(r);
                              break;
                            }
                        if (l[0] in n) o = l[0];
                        else {
                          for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                              o = r;
                              break;
                            }
                            a || (a = r);
                          }
                          o = o || a;
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o];
                      })(p, T, a)),
                    !d &&
                      C.inArray("script", p.dataTypes) > -1 &&
                      C.inArray("json", p.dataTypes) < 0 &&
                      (p.converters["text script"] = function () {}),
                    (w = (function (e, t, n, i) {
                      var r,
                        o,
                        a,
                        s,
                        l,
                        u = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          u[a.toLowerCase()] = e.converters[a];
                      for (o = c.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = o),
                          (o = c.shift()))
                        )
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                            if (!(a = u[l + " " + o] || u["* " + o]))
                              for (r in u)
                                if (
                                  (s = r.split(" "))[1] === o &&
                                  (a = u[l + " " + s[0]] || u["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = u[r])
                                    : !0 !== u[r] &&
                                      ((o = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + l + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(p, w, T, d)),
                    d
                      ? (p.ifModified &&
                          ((x = T.getResponseHeader("Last-Modified")) &&
                            (C.lastModified[r] = x),
                          (x = T.getResponseHeader("etag")) && (C.etag[r] = x)),
                        204 === e || "HEAD" === p.type
                          ? (k = "nocontent")
                          : 304 === e
                          ? (k = "notmodified")
                          : ((k = w.state), (f = w.data), (d = !(b = w.error))))
                      : ((b = k),
                        (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                    (T.status = e),
                    (T.statusText = (t || k) + ""),
                    d
                      ? v.resolveWith(h, [f, k, T])
                      : v.rejectWith(h, [T, k, b]),
                    T.statusCode(y),
                    (y = void 0),
                    c &&
                      g.trigger(d ? "ajaxSuccess" : "ajaxError", [
                        T,
                        p,
                        d ? f : b,
                      ]),
                    m.fireWith(h, [T, k]),
                    c &&
                      (g.trigger("ajaxComplete", [T, p]),
                      --C.active || C.event.trigger("ajaxStop")));
                }
                return T;
              },
              getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
              },
            }),
            C.each(["get", "post"], function (e, t) {
              C[t] = function (e, n, i, r) {
                return (
                  m(n) && ((r = r || i), (i = n), (n = void 0)),
                  C.ajax(
                    C.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      C.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            C.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (C._evalUrl = function (e, t, n) {
              return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  C.globalEval(e, t, n);
                },
              });
            }),
            C.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (m(e) && (e = e.call(this[0])),
                    (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return m(e)
                  ? this.each(function (t) {
                      C(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = C(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = m(e);
                return this.each(function (n) {
                  C(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      C(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (C.expr.pseudos.hidden = function (e) {
              return !C.expr.pseudos.visible(e);
            }),
            (C.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (C.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Vt = { 0: 200, 1223: 204 },
            Ut = C.ajaxSettings.xhr();
          (v.cors = !!Ut && "withCredentials" in Ut),
            (v.ajax = Ut = !!Ut),
            C.ajaxTransport(function (e) {
              var t, n;
              if (v.cors || (Ut && !e.crossDomain))
                return {
                  send: function (r, o) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      s.setRequestHeader(a, r[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            s.onload =
                            s.onerror =
                            s.onabort =
                            s.ontimeout =
                            s.onreadystatechange =
                              null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? o(0, "error")
                              : o(s.status, s.statusText)
                            : o(
                                Vt[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            C.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            C.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return C.globalEval(e), e;
                },
              },
            }),
            C.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            C.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = C("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Yt,
            zt = [],
            Kt = /(=)\?(?=&|$)|\?\?/;
          C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = zt.pop() || C.expando + "_" + Ct.guid++;
              return (this[e] = !0), e;
            },
          }),
            C.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                o,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Kt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Kt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback =
                    m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Kt, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return a || C.error(r + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = i[r]),
                  (i[r] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? C(i).removeProp(r) : (i[r] = o),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
                      a && m(o) && o(a[0]),
                      (a = o = void 0);
                  }),
                  "script"
                );
            }),
            (v.createHTMLDocument =
              (((Yt = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Yt.childNodes.length)),
            (C.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (v.createHTMLDocument
                      ? (((i = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(i))
                      : (t = b)),
                  (o = !n && []),
                  (r = O.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = Te([e], t, o)),
                      o && o.length && C(o).remove(),
                      C.merge([], r.childNodes)));
              var i, r, o;
            }),
            (C.fn.load = function (e, t, n) {
              var i,
                r,
                o,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((i = mt(e.slice(s))), (e = e.slice(0, s))),
                m(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (r = "POST"),
                a.length > 0 &&
                  C.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        a.html(
                          i ? C("<div>").append(C.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (C.expr.pseudos.animated = function (e) {
              return C.grep(C.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (C.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  o,
                  a,
                  s,
                  l,
                  u = C.css(e, "position"),
                  c = C(e),
                  d = {};
                "static" === u && (e.style.position = "relative"),
                  (s = c.offset()),
                  (o = C.css(e, "top")),
                  (l = C.css(e, "left")),
                  ("absolute" === u || "fixed" === u) &&
                  (o + l).indexOf("auto") > -1
                    ? ((a = (i = c.position()).top), (r = i.left))
                    : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                  m(t) && (t = t.call(e, n, C.extend({}, s))),
                  null != t.top && (d.top = t.top - s.top + a),
                  null != t.left && (d.left = t.left - s.left + r),
                  "using" in t ? t.using.call(e, d) : c.css(d);
              },
            }),
            C.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        C.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === C.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === C.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = C(e).offset()).top += C.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (r.left += C.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - C.css(i, "marginTop", !0),
                    left: t.left - r.left - C.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === C.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            C.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                C.fn[e] = function (i) {
                  return U(
                    this,
                    function (e, i, r) {
                      var o;
                      if (
                        (y(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === r)
                      )
                        return o ? o[t] : e[i];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : r,
                            n ? r : o.pageYOffset
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            C.each(["top", "left"], function (e, t) {
              C.cssHooks[t] = Ue(v.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ve(e, t)), qe.test(n) ? C(e).position()[t] + "px" : n
                  );
              });
            }),
            C.each({ Height: "height", Width: "width" }, function (e, t) {
              C.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  C.fn[i] = function (r, o) {
                    var a = arguments.length && (n || "boolean" != typeof r),
                      s = n || (!0 === r || !0 === o ? "margin" : "border");
                    return U(
                      this,
                      function (t, n, r) {
                        var o;
                        return y(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === r
                          ? C.css(t, n, s)
                          : C.style(t, n, r, s);
                      },
                      t,
                      a ? r : void 0,
                      a
                    );
                  };
                }
              );
            }),
            C.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                C.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            C.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            C.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                C.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (C.proxy = function (e, t) {
            var n, i, r;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
              return (
                (i = s.call(arguments, 2)),
                ((r = function () {
                  return e.apply(t || this, i.concat(s.call(arguments)));
                }).guid = e.guid =
                  e.guid || C.guid++),
                r
              );
          }),
            (C.holdReady = function (e) {
              e ? C.readyWait++ : C.ready(!0);
            }),
            (C.isArray = Array.isArray),
            (C.parseJSON = JSON.parse),
            (C.nodeName = M),
            (C.isFunction = m),
            (C.isWindow = y),
            (C.camelCase = G),
            (C.type = k),
            (C.now = Date.now),
            (C.isNumeric = function (e) {
              var t = C.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (C.trim = function (e) {
              return null == e ? "" : (e + "").replace(Gt, "");
            }),
            void 0 ===
              (n = function () {
                return C;
              }.apply(t, [])) || (e.exports = n);
          var Jt = i.jQuery,
            Qt = i.$;
          return (
            (C.noConflict = function (e) {
              return (
                i.$ === C && (i.$ = Qt),
                e && i.jQuery === C && (i.jQuery = Jt),
                C
              );
            }),
            void 0 === r && (i.jQuery = i.$ = C),
            C
          );
        });
      },
    },
    t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      var e = n(755),
        t = n.n(e);
      function i(e) {
        return (i =
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
              })(e);
      }
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function a(e, t, n) {
        return (
          t in e
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
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var l = (function (e) {
        var t = !1;
        var n = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (e) {
            do {
              e += ~~(1e6 * Math.random());
            } while (document.getElementById(e));
            return e;
          },
          getSelectorFromElement: function (t) {
            var n = t.getAttribute("data-target");
            (n && "#" !== n) || (n = t.getAttribute("href") || ""),
              "#" === n.charAt(0) &&
                (n = (function (t) {
                  return "function" == typeof e.escapeSelector
                    ? e.escapeSelector(t).substr(1)
                    : t.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1");
                })(n));
            try {
              return e(document).find(n).length > 0 ? n : null;
            } catch (e) {
              return null;
            }
          },
          reflow: function (e) {
            return e.offsetHeight;
          },
          triggerTransitionEnd: function (n) {
            e(n).trigger(t.end);
          },
          supportsTransitionEnd: function () {
            return Boolean(t);
          },
          isElement: function (e) {
            return (e[0] || e).nodeType;
          },
          typeCheckConfig: function (e, t, i) {
            for (var r in i)
              if (Object.prototype.hasOwnProperty.call(i, r)) {
                var o = i[r],
                  a = t[r],
                  s =
                    a && n.isElement(a)
                      ? "element"
                      : ((l = a),
                        {}.toString
                          .call(l)
                          .match(/\s([a-zA-Z]+)/)[1]
                          .toLowerCase());
                if (!new RegExp(o).test(s))
                  throw new Error(
                    "".concat(e.toUpperCase(), ": ") +
                      'Option "'
                        .concat(r, '" provided type "')
                        .concat(s, '" ') +
                      'but expected type "'.concat(o, '".')
                  );
              }
            var l;
          },
        };
        return (
          (t = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend",
          }),
          (e.fn.emulateTransitionEnd = function (t) {
            var i = this,
              r = !1;
            return (
              e(this).one(n.TRANSITION_END, function () {
                r = !0;
              }),
              setTimeout(function () {
                r || n.triggerTransitionEnd(i);
              }, t),
              this
            );
          }),
          n.supportsTransitionEnd() &&
            (e.event.special[n.TRANSITION_END] = {
              bindType: t.end,
              delegateType: t.end,
              handle: function (t) {
                if (e(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments);
              },
            }),
          n
        );
      })(t());
      function u(e, t, n) {
        return (
          t in e
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
      function c(e, t, n, i) {
        $(".overlay").css("display", "block"),
          $.ajax({
            type: "GET",
            url: e,
            headers: n,
            cache: !1,
            success: function (e) {
              $(".overlay").css("display", "none"), i(e);
            },
            error: function (e, n) {
              $(".overlay").css("display", "none"),
                console.log(
                  "Error************" +
                    JSON.stringify(e) +
                    "::ex::" +
                    JSON.stringify(n)
                ),
                0 === e.status
                  ? alert(
                      "Not connected.\nPlease verify your network connection."
                    )
                  : 404 == e.status
                  ? "portalApi" == t
                    ? i(e.responseJSON)
                    : alert(e.statusText)
                  : 500 == e.status
                  ? alert(
                      "Internal server Error. Please Contact To Adminstrator."
                    )
                  : "parsererror" === n
                  ? alert("Requested JSON parse failed.")
                  : "timeout" === n
                  ? alert("Please Try Again.")
                  : "abort" === n
                  ? alert("Ajax request aborted.")
                  : alert("Uncaught Error.\n" + e.statusText);
            },
          });
      }
      function d(e, t, n, i) {
        $("#mutationModelLabel").text("").text(e),
          $("#modelBody").text("").text(t),
          null != n &&
            $("#externalLink")
              .css("display", "block")
              .text("")
              .text(n)
              .attr("href", "")
              .attr("href", i);
      }
      (function (e) {
        var t = "bs.modal",
          n = ".".concat(t),
          r = e.fn.modal,
          a = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
          u = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean",
          },
          c = {
            HIDE: "hide".concat(n),
            HIDDEN: "hidden".concat(n),
            SHOW: "show".concat(n),
            SHOWN: "shown".concat(n),
            FOCUSIN: "focusin".concat(n),
            RESIZE: "resize".concat(n),
            CLICK_DISMISS: "click.dismiss".concat(n),
            KEYDOWN_DISMISS: "keydown.dismiss".concat(n),
            MOUSEUP_DISMISS: "mouseup.dismiss".concat(n),
            MOUSEDOWN_DISMISS: "mousedown.dismiss".concat(n),
            CLICK_DATA_API: "click".concat(n).concat(".data-api"),
          },
          d = "modal-open",
          f = "fade",
          p = "show",
          h = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          g = ".sticky-top",
          v = ".navbar-toggler",
          m = (function () {
            function r(t, n) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
                (this._config = this._getConfig(n)),
                (this._element = t),
                (this._dialog = e(t).find(".modal-dialog")[0]),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._originalBodyPadding = 0),
                (this._scrollbarWidth = 0);
            }
            var m, y, b;
            return (
              (m = r),
              (b = [
                {
                  key: "VERSION",
                  get: function () {
                    return "4.0.0";
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return a;
                  },
                },
                {
                  key: "_jQueryInterface",
                  value: function (n, a) {
                    return this.each(function () {
                      var s = e(this).data(t),
                        l = o(
                          o(o({}, r.Default), e(this).data()),
                          "object" === i(n) && n
                        );
                      if (
                        (s || ((s = new r(this, l)), e(this).data(t, s)),
                        "string" == typeof n)
                      ) {
                        if (void 0 === s[n])
                          throw new TypeError(
                            'No method named "'.concat(n, '"')
                          );
                        s[n](a);
                      } else l.show && s.show(a);
                    });
                  },
                },
              ]),
              (y = [
                {
                  key: "toggle",
                  value: function (e) {
                    return this._isShown ? this.hide() : this.show(e);
                  },
                },
                {
                  key: "show",
                  value: function (t) {
                    var n = this;
                    if (!this._isTransitioning && !this._isShown) {
                      l.supportsTransitionEnd() &&
                        e(this._element).hasClass(f) &&
                        (this._isTransitioning = !0);
                      var i = e.Event(c.SHOW, { relatedTarget: t });
                      e(this._element).trigger(i),
                        this._isShown ||
                          i.isDefaultPrevented() ||
                          ((this._isShown = !0),
                          this._checkScrollbar(),
                          this._setScrollbar(),
                          this._adjustDialog(),
                          e(document.body).addClass(d),
                          this._setEscapeEvent(),
                          this._setResizeEvent(),
                          e(this._element).on(
                            c.CLICK_DISMISS,
                            '[data-dismiss="modal"]',
                            function (e) {
                              return n.hide(e);
                            }
                          ),
                          e(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
                            e(n._element).one(c.MOUSEUP_DISMISS, function (t) {
                              e(t.target).is(n._element) &&
                                (n._ignoreBackdropClick = !0);
                            });
                          }),
                          this._showBackdrop(function () {
                            return n._showElement(t);
                          }));
                    }
                  },
                },
                {
                  key: "hide",
                  value: function (t) {
                    var n = this;
                    if (
                      (t && t.preventDefault(),
                      !this._isTransitioning && this._isShown)
                    ) {
                      var i = e.Event(c.HIDE);
                      if (
                        (e(this._element).trigger(i),
                        this._isShown && !i.isDefaultPrevented())
                      ) {
                        this._isShown = !1;
                        var r =
                          l.supportsTransitionEnd() &&
                          e(this._element).hasClass(f);
                        r && (this._isTransitioning = !0),
                          this._setEscapeEvent(),
                          this._setResizeEvent(),
                          e(document).off(c.FOCUSIN),
                          e(this._element).removeClass(p),
                          e(this._element).off(c.CLICK_DISMISS),
                          e(this._dialog).off(c.MOUSEDOWN_DISMISS),
                          r
                            ? e(this._element)
                                .one(l.TRANSITION_END, function (e) {
                                  return n._hideModal(e);
                                })
                                .emulateTransitionEnd(300)
                            : this._hideModal();
                      }
                    }
                  },
                },
                {
                  key: "dispose",
                  value: function () {
                    e.removeData(this._element, t),
                      e(window, document, this._element, this._backdrop).off(n),
                      (this._config = null),
                      (this._element = null),
                      (this._dialog = null),
                      (this._backdrop = null),
                      (this._isShown = null),
                      (this._isBodyOverflowing = null),
                      (this._ignoreBackdropClick = null),
                      (this._scrollbarWidth = null);
                  },
                },
                {
                  key: "handleUpdate",
                  value: function () {
                    this._adjustDialog();
                  },
                },
                {
                  key: "_getConfig",
                  value: function (e) {
                    return (
                      (e = o(o({}, a), e)), l.typeCheckConfig("modal", e, u), e
                    );
                  },
                },
                {
                  key: "_showElement",
                  value: function (t) {
                    var n = this,
                      i =
                        l.supportsTransitionEnd() &&
                        e(this._element).hasClass(f);
                    (this._element.parentNode &&
                      this._element.parentNode.nodeType ===
                        Node.ELEMENT_NODE) ||
                      document.body.appendChild(this._element),
                      (this._element.style.display = "block"),
                      this._element.removeAttribute("aria-hidden"),
                      (this._element.scrollTop = 0),
                      i && l.reflow(this._element),
                      e(this._element).addClass(p),
                      this._config.focus && this._enforceFocus();
                    var r = e.Event(c.SHOWN, { relatedTarget: t }),
                      o = function () {
                        n._config.focus && n._element.focus(),
                          (n._isTransitioning = !1),
                          e(n._element).trigger(r);
                      };
                    i
                      ? e(this._dialog)
                          .one(l.TRANSITION_END, o)
                          .emulateTransitionEnd(300)
                      : o();
                  },
                },
                {
                  key: "_enforceFocus",
                  value: function () {
                    var t = this;
                    e(document)
                      .off(c.FOCUSIN)
                      .on(c.FOCUSIN, function (n) {
                        document !== n.target &&
                          t._element !== n.target &&
                          0 === e(t._element).has(n.target).length &&
                          t._element.focus();
                      });
                  },
                },
                {
                  key: "_setEscapeEvent",
                  value: function () {
                    var t = this;
                    this._isShown && this._config.keyboard
                      ? e(this._element).on(c.KEYDOWN_DISMISS, function (e) {
                          27 === e.which && (e.preventDefault(), t.hide());
                        })
                      : this._isShown ||
                        e(this._element).off(c.KEYDOWN_DISMISS);
                  },
                },
                {
                  key: "_setResizeEvent",
                  value: function () {
                    var t = this;
                    this._isShown
                      ? e(window).on(c.RESIZE, function (e) {
                          return t.handleUpdate(e);
                        })
                      : e(window).off(c.RESIZE);
                  },
                },
                {
                  key: "_hideModal",
                  value: function () {
                    var t = this;
                    (this._element.style.display = "none"),
                      this._element.setAttribute("aria-hidden", !0),
                      (this._isTransitioning = !1),
                      this._showBackdrop(function () {
                        e(document.body).removeClass(d),
                          t._resetAdjustments(),
                          t._resetScrollbar(),
                          e(t._element).trigger(c.HIDDEN);
                      });
                  },
                },
                {
                  key: "_removeBackdrop",
                  value: function () {
                    this._backdrop &&
                      (e(this._backdrop).remove(), (this._backdrop = null));
                  },
                },
                {
                  key: "_showBackdrop",
                  value: function (t) {
                    var n = this,
                      i = e(this._element).hasClass(f) ? f : "";
                    if (this._isShown && this._config.backdrop) {
                      var r = l.supportsTransitionEnd() && i;
                      if (
                        ((this._backdrop = document.createElement("div")),
                        (this._backdrop.className = "modal-backdrop"),
                        i && e(this._backdrop).addClass(i),
                        e(this._backdrop).appendTo(document.body),
                        e(this._element).on(c.CLICK_DISMISS, function (e) {
                          n._ignoreBackdropClick
                            ? (n._ignoreBackdropClick = !1)
                            : e.target === e.currentTarget &&
                              ("static" === n._config.backdrop
                                ? n._element.focus()
                                : n.hide());
                        }),
                        r && l.reflow(this._backdrop),
                        e(this._backdrop).addClass(p),
                        !t)
                      )
                        return;
                      if (!r) return void t();
                      e(this._backdrop)
                        .one(l.TRANSITION_END, t)
                        .emulateTransitionEnd(150);
                    } else if (!this._isShown && this._backdrop) {
                      e(this._backdrop).removeClass(p);
                      var o = function () {
                        n._removeBackdrop(), t && t();
                      };
                      l.supportsTransitionEnd() && e(this._element).hasClass(f)
                        ? e(this._backdrop)
                            .one(l.TRANSITION_END, o)
                            .emulateTransitionEnd(150)
                        : o();
                    } else t && t();
                  },
                },
                {
                  key: "_adjustDialog",
                  value: function () {
                    var e =
                      this._element.scrollHeight >
                      document.documentElement.clientHeight;
                    !this._isBodyOverflowing &&
                      e &&
                      (this._element.style.paddingLeft = "".concat(
                        this._scrollbarWidth,
                        "px"
                      )),
                      this._isBodyOverflowing &&
                        !e &&
                        (this._element.style.paddingRight = "".concat(
                          this._scrollbarWidth,
                          "px"
                        ));
                  },
                },
                {
                  key: "_resetAdjustments",
                  value: function () {
                    (this._element.style.paddingLeft = ""),
                      (this._element.style.paddingRight = "");
                  },
                },
                {
                  key: "_checkScrollbar",
                  value: function () {
                    var e = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing =
                      e.left + e.right < window.innerWidth),
                      (this._scrollbarWidth = this._getScrollbarWidth());
                  },
                },
                {
                  key: "_setScrollbar",
                  value: function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                      e(h).each(function (n, i) {
                        var r = e(i)[0].style.paddingRight,
                          o = e(i).css("padding-right");
                        e(i)
                          .data("padding-right", r)
                          .css(
                            "padding-right",
                            "".concat(parseFloat(o) + t._scrollbarWidth, "px")
                          );
                      }),
                        e(g).each(function (n, i) {
                          var r = e(i)[0].style.marginRight,
                            o = e(i).css("margin-right");
                          e(i)
                            .data("margin-right", r)
                            .css(
                              "margin-right",
                              "".concat(parseFloat(o) - t._scrollbarWidth, "px")
                            );
                        }),
                        e(v).each(function (n, i) {
                          var r = e(i)[0].style.marginRight,
                            o = e(i).css("margin-right");
                          e(i)
                            .data("margin-right", r)
                            .css(
                              "margin-right",
                              "".concat(parseFloat(o) + t._scrollbarWidth, "px")
                            );
                        });
                      var n = document.body.style.paddingRight,
                        i = e("body").css("padding-right");
                      e("body")
                        .data("padding-right", n)
                        .css(
                          "padding-right",
                          "".concat(parseFloat(i) + this._scrollbarWidth, "px")
                        );
                    }
                  },
                },
                {
                  key: "_resetScrollbar",
                  value: function () {
                    e(h).each(function (t, n) {
                      var i = e(n).data("padding-right");
                      void 0 !== i &&
                        e(n)
                          .css("padding-right", i)
                          .removeData("padding-right");
                    }),
                      e("".concat(g, ", ").concat(v)).each(function (t, n) {
                        var i = e(n).data("margin-right");
                        void 0 !== i &&
                          e(n)
                            .css("margin-right", i)
                            .removeData("margin-right");
                      });
                    var t = e("body").data("padding-right");
                    void 0 !== t &&
                      e("body")
                        .css("padding-right", t)
                        .removeData("padding-right");
                  },
                },
                {
                  key: "_getScrollbarWidth",
                  value: function () {
                    var e = document.createElement("div");
                    (e.className = "modal-scrollbar-measure"),
                      document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t;
                  },
                },
              ]) && s(m.prototype, y),
              b && s(m, b),
              r
            );
          })();
        e(document).on(c.CLICK_DATA_API, '[data-toggle="modal"]', function (n) {
          var i,
            r = this,
            a = l.getSelectorFromElement(this);
          a && (i = e(a)[0]);
          var s = e(i).data(t)
            ? "toggle"
            : o(o({}, e(i).data()), e(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            n.preventDefault();
          var u = e(i).one(c.SHOW, function (t) {
            t.isDefaultPrevented() ||
              u.one(c.HIDDEN, function () {
                e(r).is(":visible") && r.focus();
              });
          });
          m._jQueryInterface.call(e(i), s, this);
        }),
          (e.fn.modal = m._jQueryInterface),
          (e.fn.modal.Constructor = m),
          (e.fn.modal.noConflict = function () {
            return (e.fn.modal = r), m._jQueryInterface;
          });
      })(t()),
        n(615);
      var f = "https://djb.gov.in/DJBRMSApp/rest/Services/",
        p = "9DIc4QllN1uEzjaS3LitMeAoo5cbeJ7FSHfG4AfHUwk=",
        h = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: p,
        };
      n(78),
        (window.$ = t()),
        t()("header").load("head.html"),
        t()("footer").load("footer.html");
      var g = JSON.parse(localStorage.getItem("loginUser")),
        v = localStorage.getItem("loginUserName");
      null == g
        ? (t()("#vfsFlag").append(
            '<option value="SELF" selected="selected">SELF</option>'
          ),
          t()("#vfsID").val("SELF"))
        : "VFS" == v.slice(0, 3).toUpperCase()
        ? (t()("#vfsFlag").append(
            '<option value="' + v + '" selected="selected">' + v + "</option>"
          ),
          t()("#vfsID").val(v))
        : (t()("#vfsFlag").append(
            '<option value="SELF" selected="selected">SELF</option>'
          ),
          t()("#vfsID").val("SELF")),
        c(f + "Mutation/MutatationOnLoad", "", h, function (e) {
          if ("Success" == e.message && 200 == e.statusCode) {
            var n = t().each(e.proofOfIdentityList, function (e, n) {
              t()("#ProofIdentityCombo").append(
                t()("<option>", {
                  value: n.proofOfIdentityValue,
                  text: n.proofOfIdentityText,
                })
              );
            });
            t()
              .when(n)
              .then(function () {
                t().each(e.profOfOwnerShipValue, function (n, i) {
                  t()("#propertyOwnerCombo").append(
                    t()("<option>", {
                      value: i,
                      text: e.profOfOwnerShipText[n],
                    })
                  );
                });
              })
              .catch(function (e) {
                console.log("<<<<<Error>>>>" + e),
                  d("Alert", "Issue to iterate the Property ownership list."),
                  t()("#mutationModelBtn").trigger("click");
              });
          } else
            d("Alert", e.message), t()("#mutationModelBtn").trigger("click");
        }),
        t()('INPUT[type="file"]').change(function () {
          console.log(
            "This file size is: " + this.files[0].size / 1024 / 1024 + "MB"
          );
          var e = this.files[0].name;
          if (
            (t()("#fileName").html(""),
            t()("#fileName").append(e),
            !(this.files[0].size / 1024 / 1024 < 1))
          )
            return (
              d("Alert", "File size should be less then 1 MB."),
              t()("#mutationModelBtn").trigger("click"),
              t()(this).val(""),
              t()(this).focus(),
              !1
            );
          switch (this.value.match(/\.(.+)$/)[1].toLowerCase()) {
            case "jpg":
            case "jpeg":
            case "png":
            case "image":
            case "pdf":
              break;
            default:
              return (
                d(
                  "Alert",
                  "Please upload valid file extension of type jpg,jpeg,png & pdf of size less than 1MB"
                ),
                t()("#mutationModelBtn").trigger("click"),
                t()(this).val(""),
                t()(this).focus(),
                !1
              );
          }
        }),
        t()("#profilePic").change(function () {
          !(function (e) {
            if (e.files && e.files[0]) {
              var t = new FileReader();
              (t.onload = function (e) {
                $("#imagePreview").css(
                  "background-image",
                  "url(" + e.target.result + ")"
                ),
                  $("#imagePreview").hide(),
                  $("#imagePreview").fadeIn(650);
              }),
                t.readAsDataURL(e.files[0]);
            }
          })(this);
        }),
        t()("#OldName, #AddrArea").prop("readonly", !0),
        t()("#govtFile, #govtType").prop("disabled", !0),
        t()("#isGOVTEmp").val("N"),
        t()("#isGOVTEmp").click(function () {
          document.getElementById("isGOVTEmp").checked
            ? (t()("#isGOVTEmp").val("Y"),
              t()("#govtFile").prop("disabled", !1),
              t()("#govtType").prop("disabled", !1),
              t()("#FHname").val("NA"),
              t()("#FHname").prop("readonly", !0),
              t()("#uid").prop("readonly", !0),
              t()("#uid").val("NA"),
              t()("#Last").val("NA"),
              t()("#Last").prop("disabled", !0),
              t()("#Middle").val("NA"),
              t()("#Middle").prop("disabled", !0))
            : (t()("#isGOVTEmp").val("N"),
              t()("#govtFile").val(""),
              t()("#govtFile").prop("disabled", !0),
              t()("#govtType").prop("disabled", !0),
              t()("#govtType").val(""),
              t()("#FHname").val(""),
              t()("#FHname").prop("readonly", !1),
              t()("#uid").prop("readonly", !1),
              t()("#uid").val(""),
              t()("#Last").val("Last Name"),
              t()("#Last").prop("disabled", !1),
              t()("#Middle").val("Middle Name"),
              t()("#Middle").prop("disabled", !1));
        }),
        t()(
          "#Mobile, #office, #home, #pinAdd, #plot, #adults, #waterReceiptId, #roofTopArea, #totalPlotArea, #pavedArea, #children, #KNO"
        ).keypress(function (e) {
          return (function (e) {
            try {
              var t = e.charCode ? e.charCode : e.keyCode;
              if (8 != t && (t < 48 || t > 57)) return !1;
            } catch (e) {}
          })(e);
        }),
        t()("#Mobile, #office, #home, #KNO").prop("maxlength", "10"),
        t()("#applyMutation").css("display", "none"),
        t()("#previewConn").prop("disabled", !0),
        t()("#previewConn").css("display", "block"),
        t()(".checkValidKnoIcon").css("display", "none");
      var m = "",
        y = !1,
        b = !1;
      t()("#KNO").on("blur", function () {
        var e = t()("#KNO").val();
        if ("" == e)
          return (
            d("Alert", "Please fill valid KNO."),
            t()("#mutationModelBtn").trigger("click"),
            !1
          );
        c(f + "Mutation/ValidateKNO/" + e, "", h, function (e) {
          "Success" == e.message && 200 == e.statusCode
            ? "VALID" == e.KNOFlag
              ? ((b = !1),
                (m = ""),
                "MUTATION_REQ_IN_PROCESS" == e.kNoFlagForNonPayment
                  ? (d("Alert", "A Mutation request is Already in Process"),
                    t()("#mutationModelBtn").trigger("click"),
                    (m = e.kNoFlagForNonPayment),
                    t()("#OldName").val(""),
                    t()("#AddrArea").val(""),
                    t()("#applyMutation").prop("disabled", !0),
                    t()(".checkValidKnoIcon").css({
                      display: "block",
                      color: "green",
                    }))
                  : "INVALIDFORNONPAYMENT" == e.kNoFlagForNonPayment
                  ? (d(
                      "Alert",
                      "There is outstanding balance which needs to be paid before applying for mutation"
                    ),
                    t()("#mutationModelBtn").trigger("click"),
                    (m = e.kNoFlagForNonPayment),
                    t()("#OldName").val(""),
                    t()("#AddrArea").val(""),
                    t()("#applyMutation").prop("disabled", !0),
                    t()(".checkValidKnoIcon").css({
                      display: "block",
                      color: "green",
                    }))
                  : "" == e.premHouse || "" == e.premHouse
                  ? (d("Alert", "No Premise is associated with the KNO"),
                    t()("#mutationModelBtn").trigger("click"),
                    (y = !0),
                    t()("#OldName").val(""),
                    t()("#AddrArea").val(""),
                    t()("#applyMutation").prop("disabled", !0),
                    t()(".checkValidKnoIcon").css({
                      display: "block",
                      color: "green",
                    }))
                  : (t()(".checkValidKnoIcon").css({
                      display: "block",
                      color: "green",
                    }),
                    t()("#OldName").val(e.wholeName),
                    t()("#AddrArea").val(
                      e.premHouse +
                        "," +
                        e.premSociety +
                        "," +
                        e.premLocality +
                        "," +
                        e.premSubLocality +
                        "," +
                        e.premPinCode
                    )))
              : (t()(".checkValidKnoIcon").css({
                  display: "block",
                  color: "red",
                }),
                (b = !0),
                d("Alert", "The KNO is Invalid"),
                t()("#mutationModelBtn").trigger("click"),
                t()("#OldName").val(""))
            : (d("Alert", e.message),
              t()("#mutationModelBtn").trigger("click"));
        });
      }),
        t()("#email").on("blur", function () {
          var e = t()("#email").val();
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            String(e).toLowerCase()
          ) ||
            (d("Alert", "Not a valid Email Address."),
            t()("#mutationModelBtn").trigger("click"));
        }),
        t()("#FullName").change(function () {
          !(function () {
            var e = "",
              t = "",
              n = "";
            if (
              "" != document.getElementById("FullName").value &&
              null != document.getElementById("FullName").value &&
              "Full Name*" != document.getElementById("FullName").value
            ) {
              var i = document.getElementById("FullName").value.split(" ");
              if (i.length > 0)
                switch (i.length) {
                  case 1:
                    e = i[0];
                    break;
                  case 2:
                    (e = i[0]), (n = i[1]);
                    break;
                  case 3:
                    (e = i[0]), (t = i[1]), (n = i[2]);
                    break;
                  default:
                    e = i[0];
                }
              (document.getElementById("Name").value = e),
                (document.getElementById("Middle").value = t),
                (document.getElementById("Last").value = n),
                console.log(
                  "First_name" +
                    e +
                    ":::::Middle:::" +
                    t +
                    ":::::LastName:::" +
                    n
                );
            }
          })();
        }),
        t()("#children, #adults").prop("maxlength", "2"),
        t()("#relType").prop("disabled", !0),
        t()("#relationTypeOthr").css("display", "none");
      var w = { PURCHASE: "PURCHASE" },
        x = { TRANSFER: "TRANSFER", DEATH: "DEATH" };
      function k() {
        var e = t()("#KNO").val(),
          n = document.getElementById("isGOVTEmp").checked,
          i = t()("#FullName").val(),
          r = t()("#FHname").val(),
          o = (t()("#uid").val(), t()("#govtFile").val()),
          a = t()("#Mobile").val(),
          s =
            (t()("#adults").val(),
            t()("#children").val(),
            t()("#Middle").val(),
            t()("#Last").val(),
            t()("#email").val(),
            t()("#MICR").val(),
            t()("#doc1").val()),
          l = t()("#doc3").val(),
          u = t()("#doc6").val(),
          c = t()("#signaturePath").val(),
          f = t()("#identityDocNumber6").val();
        if (b)
          return (
            d("Alert", "Please Enter A valid KNO."),
            t()("#mutationModelBtn").trigger("click"),
            t()("#KNO").focus(),
            !1
          );
        if ("MUTATION_REQ_IN_PROCESS" == m)
          return (
            d("Alert", "A Mutation request is Already in Process"),
            t()("#mutationModelBtn").trigger("click"),
            t()("#KNO").focus(),
            !1
          );
        if ("INVALIDFORNONPAYMENT" == m)
          return (
            d(
              "Alert",
              "There is outstanding balance which needs to be paid before applying for mutation"
            ),
            t()("#mutationModelBtn").trigger("click"),
            t()("#KNO").focus(),
            !1
          );
        if (y)
          return (
            d("Alert", "No Premise is associated with the KNO"),
            t()("#mutationModelBtn").trigger("click"),
            t()("#KNO").focus(),
            !1
          );
        if ("" == t()("#AddrArea").val())
          return (
            d("Alert", "No Premise is associated with the KNO"),
            t()("#mutationModelBtn").trigger("click"),
            t()("#KNO").focus(),
            !1
          );
        if ("" == e || null == e)
          return (
            d("Alert", "KNO Is Mandatory"),
            t()("#mutationModelBtn").trigger("click"),
            t()("#KNO").focus(),
            !1
          );
        if ("Full Name*" == i)
          return (
            d("Alert", "Name Is Mandatory"),
            t()("#mutationModelBtn").trigger("click"),
            !1
          );
        if ("" == a)
          return (
            d("Alert", "Mobile No is Mandatory."),
            t()("#mutationModelBtn").trigger("click"),
            t()("#Mobile").focus(),
            !1
          );
        if (10 != a.length)
          return (
            d("Alert", "Mobile No Should Be 10 Digits."),
            t()("#mutationModelBtn").trigger("click"),
            t()("#Mobile").focus(),
            !1
          );
        if ("" != a && (parseInt(a) > 9999999999 || parseInt(a) < 1e8))
          return (
            d("Alert", "Enter A valid Mobile No."),
            t()("#mutationModelBtn").trigger("click"),
            t()("#Mobile").focus(),
            !1
          );
        if (n) {
          if ("" == document.getElementById("office").value)
            return (
              d("Alert", "For Govt. Org Office Phone no Is Mandatory."),
              t()("#mutationModelBtn").trigger("click"),
              t()("#office").focus(),
              !1
            );
          if ("" == o)
            return (
              d(
                "Alert",
                "Please upload supporting document for Govt. Organization."
              ),
              t()("#mutationModelBtn").trigger("click"),
              t()("govtFile").focus(),
              !1
            );
        } else if ("" == r)
          return (
            d("Alert", "Father's/Husband's/Mother's Name Is Mandatory"),
            t()("#mutationModelBtn").trigger("click"),
            t()("#FHname").focus(),
            !1
          );
        return "" == l
          ? (d("Alert", "Please upload Photocopy of Ownership"),
            t()("#mutationModelBtn").trigger("click"),
            t()("#doc1").focus(),
            !1)
          : null == s || "" == s
          ? (d("Alert", "Please Upload Self Declaration Form"),
            t()("#mutationModelBtn").trigger("click"),
            add,
            t()("#doc1").focus(),
            !1)
          : "" == f
          ? (d(
              "Alert",
              "Please Give the Document Number for Identity Proof Document"
            ),
            t()("#mutationModelBtn").trigger("click"),
            t()("#identityDocNumber6").focus(),
            !1)
          : null == u || "" == u
          ? (d("Alert", "Please upload Any Identity proof"),
            t()("#mutationModelBtn").trigger("click"),
            t()("#doc6").focus(),
            !1)
          : "" == c
          ? (d("Alert", "Upload Signature."),
            t()("#mutationModelBtn").trigger("click"),
            t()("#signaturePath").focus(),
            !1)
          : (window.scrollTo(0, 0),
            t()("#applyMutation").css("display", "block"),
            t()("#previewConn").css("display", "none"),
            !0);
      }
      t()("#normal").click(function () {
        var e = t()("#vfsFlagValue");
        e.html(" "),
          t().each(w, function (n, i) {
            e.append(t()("<option></option>").attr("value", i).text(n));
          }),
          t()("#relType").prop("disabled", !0);
      }),
        t()("#blood").click(function () {
          var e = t()("#vfsFlagValue");
          e.html(" "),
            t().each(x, function (n, i) {
              e.append(t()("<option></option>").attr("value", i).text(n));
            }),
            t()("#relType").prop("disabled", !1);
        }),
        t()("#relType").change(function () {
          var e = t()("#relType").val();
          console.log("vall:::" + e),
            "OTHER" == e
              ? t()("#relationTypeOthr").css("display", "block")
              : t()("#relationTypeOthr").css("display", "none");
        }),
        t()("#selfDec").click(function (e) {
          e.preventDefault(),
            window.open("../Document/MutSelfDecrationForm.pdf");
        }),
        t()("#declaration").click(function () {
          document.getElementById("declaration").checked
            ? t()("#previewConn").prop("disabled", !1)
            : t()("#previewConn").prop("disabled", !0);
        }),
        t()("#previewConn").click(function (e) {
          e.preventDefault(), k();
        }),
        t()("#closeSuccesDiv").click(function () {
          t()(".successDivRef").css("display", "none");
        });
      var T = "";
      t()("#applyMutation").click(function (e) {
        (e.preventDefault(), k()) &&
          (function (e, n, i, r) {
            var o;
            $(".overlay").css("display", "block"),
              $.ajax(
                (u(
                  (o = {
                    type: "POST",
                    enctype: "multipart/form-data",
                    url: "https://djb.gov.in/DJBRMSApp/rest/Services/Mutation/ApplyForMutation",
                    data: n,
                    cache: !1,
                    contentType: !1,
                    processData: !1,
                    headers: {
                      Authorization:
                        "9DIc4QllN1uEzjaS3LitMeAoo5cbeJ7FSHfG4AfHUwk=",
                    },
                  }),
                  "cache",
                  !1
                ),
                u(o, "success", function (e) {
                  $(".overlay").css("display", "none"),
                    (function (e) {
                      201 == e.statusCode
                        ? (t()(".successDivRef").css("display", "block"),
                          console.log(JSON.stringify(e)),
                          (T = e.fileName),
                          t()("#appliName").html(e.Name),
                          t()("#appliType").html("Mutation"),
                          t()("#appliRef").html(e.AplicationRefNo),
                          t()("#appliDate").html(new Date()),
                          t()("#mutatioForm")[0].reset())
                        : (d("Alert", e.message),
                          t()("#mutatioForm")[0].reset(),
                          t()("#mutationModelBtn").trigger("click"));
                    })(e);
                }),
                u(o, "error", function (e, t) {
                  $(".overlay").css("display", "none"),
                    console.log(
                      "Error************" +
                        JSON.stringify(e) +
                        "::ex::" +
                        JSON.stringify(t)
                    ),
                    0 === e.status
                      ? alert(
                          "Not connected.\nPlease verify your network connection."
                        )
                      : 404 == e.status
                      ? alert(e.statusText)
                      : 500 == e.status
                      ? alert(
                          "Internal server Error. Please Contact To Adminstrator."
                        )
                      : "parsererror" === t
                      ? alert("Requested JSON parse failed.")
                      : "timeout" === t
                      ? alert("Please Try Again.")
                      : "abort" === t
                      ? alert("Ajax request aborted.")
                      : alert("Uncaught Error.\n" + e.statusText);
                }),
                o)
              );
          })(0, new FormData(t()("#mutatioForm")[0]));
      }),
        t()("#filledApplication").on("click", function () {
          var e = document.location.origin;
          window.open(e + "/DJBPortal/portals/fileLoad?fileName=" + T);
        }),
        t()("#downlaodReciept").on("click", function () {
          var e = new jsPDF("p", "pt", "a4");
          e.fromHTML(t()("#recieptForm").html(), 15, 15, {
            width: 170,
            elementHandlers: {
              "#bypassme": function (e, t) {
                return !0;
              },
            },
          }),
            e.save("Mutation.pdf");
        });
    })();
})();
