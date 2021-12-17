/*! For license information please see newConnection.bundle.js.LICENSE.txt */
!(function () {
  var e = {
      78: function (e, t, n) {
        var r, i, o, a;
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
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          e = e && e.hasOwnProperty("default") ? e.default : e;
          var r = {
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
            i = "undefined" != typeof window,
            o = i ? window : {},
            a = !!i && "ontouchstart" in o.document.documentElement,
            s = "datepicker",
            l = "click.".concat(s),
            u = "focus.".concat(s),
            c = "hide.".concat(s),
            d = "keyup.".concat(s),
            f = "pick.".concat(s),
            p = "resize.".concat(s),
            h = "scroll.".concat(s),
            v = "show.".concat(s),
            g = "touchstart.".concat(s),
            m = "".concat(s, "-hide"),
            y = {},
            b = Object.prototype.toString;
          function w(e) {
            return "string" == typeof e;
          }
          var x = Number.isNaN || o.isNaN;
          function C(e) {
            return "number" == typeof e && !x(e);
          }
          function k(e) {
            return void 0 === e;
          }
          function T(e) {
            return (
              "date" === ((t = e), b.call(t).slice(8, -1).toLowerCase()) &&
              !x(e.getTime())
            );
            var t;
          }
          function D(e, t) {
            for (
              var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
              i < n;
              i++
            )
              r[i - 2] = arguments[i];
            return function () {
              for (
                var n = arguments.length, i = new Array(n), o = 0;
                o < n;
                o++
              )
                i[o] = arguments[o];
              return e.apply(t, r.concat(i));
            };
          }
          function S(e) {
            return '[data-view="'.concat(e, '"]');
          }
          function A(e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
          }
          function N(e, t) {
            return [31, A(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][
              t
            ];
          }
          function E(e, t, n) {
            return Math.min(n, N(e, t));
          }
          var P = /(y|m|d)+/g;
          function j(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = e(t),
              i = r.css("position"),
              o = "absolute" === i,
              a = n ? /auto|scroll|hidden/ : /auto|scroll/,
              s = r
                .parents()
                .filter(function (t, n) {
                  var r = e(n);
                  return (
                    (!o || "static" !== r.css("position")) &&
                    a.test(
                      r.css("overflow") +
                        r.css("overflow-y") +
                        r.css("overflow-x")
                    )
                  );
                })
                .eq(0);
            return "fixed" !== i && s.length
              ? s
              : e(t.ownerDocument || document);
          }
          function L(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              n = String(Math.abs(e)),
              r = n.length,
              i = "";
            for (e < 0 && (i += "-"); r < t; ) (r += 1), (i += "0");
            return i + n;
          }
          var M = /\d+/g,
            I = {
              show: function () {
                this.built || this.build(),
                  this.shown ||
                    this.trigger(v).isDefaultPrevented() ||
                    ((this.shown = !0),
                    this.$picker
                      .removeClass(m)
                      .on(l, e.proxy(this.click, this)),
                    this.showView(this.options.startView),
                    this.inline ||
                      (this.$scrollParent.on(h, e.proxy(this.place, this)),
                      e(window).on(p, (this.onResize = D(this.place, this))),
                      e(document).on(
                        l,
                        (this.onGlobalClick = D(this.globalClick, this))
                      ),
                      e(document).on(
                        d,
                        (this.onGlobalKeyup = D(this.globalKeyup, this))
                      ),
                      a &&
                        e(document).on(
                          g,
                          (this.onTouchStart = D(this.touchstart, this))
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
                      a && e(document).off(g, this.onTouchStart))));
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
                var r = this.options,
                  i = r.monthsShort,
                  o = r.months;
                return (
                  e.isNumeric(t) ? (t = Number(t)) : k(n) && (n = t),
                  !0 === n && (o = i),
                  o[C(t) ? t : this.date.getMonth()]
                );
              },
              getDayName: function (t, n, r) {
                var i = this.options,
                  o = i.days;
                return (
                  e.isNumeric(t)
                    ? (t = Number(t))
                    : (k(r) && (r = n), k(n) && (n = t)),
                  r ? (o = i.daysMin) : n && (o = i.daysShort),
                  o[C(t) ? t : this.date.getDay()]
                );
              },
              getDate: function (e) {
                var t = this.date;
                return e ? this.formatDate(t) : new Date(t);
              },
              setDate: function (t, n) {
                var r = this.options.filter;
                if (T(t) || w(t)) {
                  if (
                    ((t = this.parseDate(t)),
                    e.isFunction(r) && !1 === r.call(this.$element, t, "day"))
                  )
                    return;
                  (this.date = t),
                    (this.viewDate = new Date(t)),
                    n || this.pick(),
                    this.built && this.render();
                }
              },
              setStartDate: function (e) {
                T(e) || w(e)
                  ? (this.startDate = this.parseDate(e))
                  : (this.startDate = null),
                  this.built && this.render();
              },
              setEndDate: function (e) {
                T(e) || w(e)
                  ? (this.endDate = this.parseDate(e))
                  : (this.endDate = null),
                  this.built && this.render();
              },
              parseDate: function (t) {
                var n = this.format,
                  r = [];
                return (
                  T(t) ||
                    (w(t) && (r = t.match(M) || []),
                    T((t = t ? new Date(t) : new Date())) || (t = new Date()),
                    r.length === n.parts.length &&
                      e.each(r, function (e, r) {
                        var i = parseInt(r, 10);
                        switch (n.parts[e]) {
                          case "dd":
                          case "d":
                            t.setDate(i);
                            break;
                          case "mm":
                          case "m":
                            t.setMonth(i - 1);
                            break;
                          case "yy":
                            t.setFullYear(i);
                            break;
                          case "yyyy":
                            t.setFullYear(2 === r.length ? 2e3 + i : i);
                        }
                      })),
                  new Date(t.getFullYear(), t.getMonth(), t.getDate())
                );
              },
              formatDate: function (t) {
                var n = this.format,
                  r = "";
                if (T(t)) {
                  var i = t.getFullYear(),
                    o = t.getMonth(),
                    a = t.getDate(),
                    s = {
                      d: a,
                      dd: L(a, 2),
                      m: o + 1,
                      mm: L(o + 1, 2),
                      yy: String(i).substring(2),
                      yyyy: L(i, 4),
                    };
                  (r = n.source),
                    e.each(n.parts, function (e, t) {
                      r = r.replace(t, s[t]);
                    });
                }
                return r;
              },
              destroy: function () {
                this.unbind(), this.unbuild(), this.$element.removeData(s);
              },
            },
            F = {
              click: function (t) {
                var n = e(t.target),
                  r = this.options,
                  i = this.date,
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
                        o.setDate(E(l, u, c)),
                        this.renderYears();
                      break;
                    case "year prev":
                    case "year next":
                      (l = "year prev" === s ? l - 1 : l + 1),
                        o.setFullYear(l),
                        o.setDate(E(l, u, c)),
                        this.renderMonths();
                      break;
                    case "year current":
                      a.hasYear && this.showView(2);
                      break;
                    case "year picked":
                      a.hasMonth
                        ? this.showView(1)
                        : (n
                            .siblings(".".concat(r.pickedClass))
                            .removeClass(r.pickedClass)
                            .data("view", "year"),
                          this.hideView()),
                        this.pick("year");
                      break;
                    case "year":
                      (l = parseInt(n.text(), 10)),
                        i.setDate(E(l, u, c)),
                        i.setFullYear(l),
                        o.setDate(E(l, u, c)),
                        o.setFullYear(l),
                        a.hasMonth
                          ? this.showView(1)
                          : (n
                              .addClass(r.pickedClass)
                              .data("view", "year picked")
                              .siblings(".".concat(r.pickedClass))
                              .removeClass(r.pickedClass)
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
                        o.setDate(E(l, u, c)),
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
                            .siblings(".".concat(r.pickedClass))
                            .removeClass(r.pickedClass)
                            .data("view", "month"),
                          this.hideView()),
                        this.pick("month");
                      break;
                    case "month":
                      (u = e.inArray(n.text(), r.monthsShort)),
                        i.setFullYear(l),
                        i.setDate(E(l, u, c)),
                        i.setMonth(u),
                        o.setFullYear(l),
                        o.setDate(E(l, u, c)),
                        o.setMonth(u),
                        a.hasDay
                          ? this.showView(0)
                          : (n
                              .addClass(r.pickedClass)
                              .data("view", "month picked")
                              .siblings(".".concat(r.pickedClass))
                              .removeClass(r.pickedClass)
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
                        i.setDate(1),
                        i.setFullYear(l),
                        i.setMonth(u),
                        i.setDate(c),
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
                    r = this.$trigger[0],
                    i = !0;
                  t !== document;

                ) {
                  if (t === r || t === n) {
                    i = !1;
                    break;
                  }
                  t = t.parentNode;
                }
                i && this.hide();
              },
              keyup: function () {
                this.update();
              },
              globalKeyup: function (e) {
                var t = e.target,
                  n = e.key,
                  r = e.keyCode;
                this.isInput &&
                  t !== this.element &&
                  this.shown &&
                  ("Tab" === n || 9 === r) &&
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
            R = {
              render: function () {
                this.renderYears(), this.renderMonths(), this.renderDays();
              },
              renderWeek: function () {
                var t = this,
                  n = [],
                  r = this.options,
                  i = r.weekStart,
                  o = r.daysMin;
                (i = parseInt(i, 10) % 7),
                  (o = o.slice(i).concat(o.slice(0, i))),
                  e.each(o, function (e, r) {
                    n.push(t.createItem({ text: r }));
                  }),
                  this.$week.html(n.join(""));
              },
              renderYears: function () {
                var e,
                  t = this.options,
                  n = this.startDate,
                  r = this.endDate,
                  i = t.disabledClass,
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
                      r &&
                      ((h = p.getFullYear() > r.getFullYear()),
                      6 === e && (f = h)),
                    !h && o && (h = !1 === o.call(this.$element, p, "year"));
                  var v = s + e === u,
                    g = v ? "year picked" : "year";
                  c.push(
                    this.createItem({
                      picked: v,
                      disabled: h,
                      text: s + e,
                      view: h ? "year disabled" : g,
                      highlighted: p.getFullYear() === l,
                    })
                  );
                }
                this.$yearsPrev.toggleClass(i, d),
                  this.$yearsNext.toggleClass(i, f),
                  this.$yearsCurrent.toggleClass(i, !0).html(
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
                  r = this.startDate,
                  i = this.endDate,
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
                  v = [],
                  g = !1,
                  m = !1;
                for (t = 0; t <= 11; t += 1) {
                  var y = new Date(u, t, 1),
                    b = !1;
                  r &&
                    (b =
                      (g = y.getFullYear() === r.getFullYear()) &&
                      y.getMonth() < r.getMonth()),
                    !b &&
                      i &&
                      (b =
                        (m = y.getFullYear() === i.getFullYear()) &&
                        y.getMonth() > i.getMonth()),
                    !b && l && (b = !1 === l.call(this.$element, y, "month"));
                  var w = u === p && t === h,
                    x = w ? "month picked" : "month";
                  v.push(
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
                this.$yearPrev.toggleClass(a, g),
                  this.$yearNext.toggleClass(a, m),
                  this.$yearCurrent
                    .toggleClass(a, g && m)
                    .html(u + n.yearSuffix || ""),
                  this.$months.html(v.join(""));
              },
              renderDays: function () {
                var e,
                  t,
                  n,
                  r = this.$element,
                  i = this.options,
                  o = this.startDate,
                  a = this.endDate,
                  s = this.viewDate,
                  l = this.date,
                  u = i.disabledClass,
                  c = i.filter,
                  d = i.months,
                  f = i.weekStart,
                  p = i.yearSuffix,
                  h = s.getFullYear(),
                  v = s.getMonth(),
                  g = new Date(),
                  m = g.getFullYear(),
                  y = g.getMonth(),
                  b = g.getDate(),
                  w = l.getFullYear(),
                  x = l.getMonth(),
                  C = l.getDate(),
                  k = [],
                  T = h,
                  D = v,
                  S = !1;
                0 === v ? ((T -= 1), (D = 11)) : (D -= 1), (e = N(T, D));
                var A = new Date(h, v, 1);
                for (
                  (n = A.getDay() - (parseInt(f, 10) % 7)) <= 0 && (n += 7),
                    o && (S = A.getTime() <= o.getTime()),
                    t = e - (n - 1);
                  t <= e;
                  t += 1
                ) {
                  var E = new Date(T, D, t),
                    P = !1;
                  o && (P = E.getTime() < o.getTime()),
                    !P && c && (P = !1 === c.call(r, E, "day")),
                    k.push(
                      this.createItem({
                        disabled: P,
                        highlighted: T === m && D === y && E.getDate() === b,
                        muted: !0,
                        picked: T === w && D === x && t === C,
                        text: t,
                        view: "day prev",
                      })
                    );
                }
                var j = [],
                  L = h,
                  M = v,
                  I = !1;
                11 === v ? ((L += 1), (M = 0)) : (M += 1),
                  (e = N(h, v)),
                  (n = 42 - (k.length + e));
                var F = new Date(h, v, e);
                for (
                  a && (I = F.getTime() >= a.getTime()), t = 1;
                  t <= n;
                  t += 1
                ) {
                  var R = new Date(L, M, t),
                    O = L === w && M === x && t === C,
                    H = !1;
                  a && (H = R.getTime() > a.getTime()),
                    !H && c && (H = !1 === c.call(r, R, "day")),
                    j.push(
                      this.createItem({
                        disabled: H,
                        picked: O,
                        highlighted: L === m && M === y && R.getDate() === b,
                        muted: !0,
                        text: t,
                        view: "day next",
                      })
                    );
                }
                var $ = [];
                for (t = 1; t <= e; t += 1) {
                  var q = new Date(h, v, t),
                    W = !1;
                  o && (W = q.getTime() < o.getTime()),
                    !W && a && (W = q.getTime() > a.getTime()),
                    !W && c && (W = !1 === c.call(r, q, "day"));
                  var B = h === w && v === x && t === C,
                    _ = B ? "day picked" : "day";
                  $.push(
                    this.createItem({
                      disabled: W,
                      picked: B,
                      highlighted: h === m && v === y && q.getDate() === b,
                      text: t,
                      view: W ? "day disabled" : _,
                    })
                  );
                }
                this.$monthPrev.toggleClass(u, S),
                  this.$monthNext.toggleClass(u, I),
                  this.$monthCurrent
                    .toggleClass(u, S && I)
                    .html(
                      i.yearFirst
                        ? "".concat(h + p, " ").concat(d[v])
                        : "".concat(d[v], " ").concat(h).concat(p)
                    ),
                  this.$days.html(k.join("") + $.join("") + j.join(""));
              },
            },
            O = "".concat(s, "-top-left"),
            H = "".concat(s, "-top-right"),
            $ = "".concat(s, "-bottom-left"),
            q = "".concat(s, "-bottom-right"),
            W = [O, H, $, q].join(" "),
            B = (function () {
              function i(n) {
                var o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                t(this, i),
                  (this.$element = e(n)),
                  (this.element = n),
                  (this.options = e.extend(
                    {},
                    r,
                    y[o.language],
                    e.isPlainObject(o) && o
                  )),
                  (this.$scrollParent = j(n, !0)),
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
                (o = i),
                (p = [
                  {
                    key: "setDefaults",
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      e.extend(r, y[t.language], e.isPlainObject(t) && t);
                    },
                  },
                ]),
                (a = [
                  {
                    key: "init",
                    value: function () {
                      var t = this.$element,
                        n = this.options,
                        r = n.startDate,
                        i = n.endDate,
                        o = n.date;
                      (this.$trigger = e(n.trigger)),
                        (this.isInput = t.is("input") || t.is("textarea")),
                        (this.inline =
                          n.inline && (n.container || !this.isInput)),
                        (this.format = (function (t) {
                          var n = String(t).toLowerCase(),
                            r = n.match(P);
                          if (!r || 0 === r.length)
                            throw new Error("Invalid date format.");
                          return (
                            (t = { source: n, parts: r }),
                            e.each(r, function (e, n) {
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
                        r &&
                          ((r = this.parseDate(r)),
                          o.getTime() < r.getTime() && (o = new Date(r)),
                          (this.startDate = r)),
                        i &&
                          ((i = this.parseDate(i)),
                          r && i.getTime() < r.getTime() && (i = new Date(r)),
                          o.getTime() > i.getTime() && (o = new Date(i)),
                          (this.endDate = i)),
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
                          r = e(n.template);
                        (this.$picker = r),
                          (this.$week = r.find(S("week"))),
                          (this.$yearsPicker = r.find(S("years picker"))),
                          (this.$yearsPrev = r.find(S("years prev"))),
                          (this.$yearsNext = r.find(S("years next"))),
                          (this.$yearsCurrent = r.find(S("years current"))),
                          (this.$years = r.find(S("years"))),
                          (this.$monthsPicker = r.find(S("months picker"))),
                          (this.$yearPrev = r.find(S("year prev"))),
                          (this.$yearNext = r.find(S("year next"))),
                          (this.$yearCurrent = r.find(S("year current"))),
                          (this.$months = r.find(S("months"))),
                          (this.$daysPicker = r.find(S("days picker"))),
                          (this.$monthPrev = r.find(S("month prev"))),
                          (this.$monthNext = r.find(S("month next"))),
                          (this.$monthCurrent = r.find(S("month current"))),
                          (this.$days = r.find(S("days"))),
                          this.inline
                            ? e(n.container || t).append(
                                r.addClass("".concat(s, "-inline"))
                              )
                            : (e(document.body).append(
                                r.addClass("".concat(s, "-dropdown"))
                              ),
                              r
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
                      e.isFunction(t.show) && n.on(v, t.show),
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
                      e.isFunction(n.show) && t.off(v, n.show),
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
                        r = this.$daysPicker,
                        i = this.format;
                      if (i.hasYear || i.hasMonth || i.hasDay)
                        switch (Number(e)) {
                          case 2:
                            n.addClass(m),
                              r.addClass(m),
                              i.hasYear
                                ? (this.renderYears(),
                                  t.removeClass(m),
                                  this.place())
                                : this.showView(0);
                            break;
                          case 1:
                            t.addClass(m),
                              r.addClass(m),
                              i.hasMonth
                                ? (this.renderMonths(),
                                  n.removeClass(m),
                                  this.place())
                                : this.showView(2);
                            break;
                          default:
                            t.addClass(m),
                              n.addClass(m),
                              i.hasDay
                                ? (this.renderDays(),
                                  r.removeClass(m),
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
                          r = this.$picker,
                          i = e(document).outerWidth(),
                          o = e(document).outerHeight(),
                          a = t.outerWidth(),
                          s = t.outerHeight(),
                          l = r.width(),
                          u = r.height(),
                          c = t.offset(),
                          d = c.left,
                          f = c.top,
                          p = parseFloat(n.offset),
                          h = O;
                        x(p) && (p = 10),
                          f > u && f + s + u > o
                            ? ((f -= u + p), (h = $))
                            : (f += s + p),
                          d + l > i &&
                            ((d += a - l), (h = h.replace("left", "right"))),
                          r.removeClass(W).addClass(h).css({ top: f, left: d });
                      }
                    },
                  },
                  {
                    key: "trigger",
                    value: function (t, n) {
                      var r = e.Event(t, n);
                      return this.$element.trigger(r), r;
                    },
                  },
                  {
                    key: "createItem",
                    value: function (t) {
                      var n = this.options,
                        r = n.itemTag,
                        i = {
                          text: "",
                          view: "",
                          muted: !1,
                          picked: !1,
                          disabled: !1,
                          highlighted: !1,
                        },
                        o = [];
                      return (
                        e.extend(i, t),
                        i.muted && o.push(n.mutedClass),
                        i.highlighted && o.push(n.highlightedClass),
                        i.picked && o.push(n.pickedClass),
                        i.disabled && o.push(n.disabledClass),
                        "<"
                          .concat(r, ' class="')
                          .concat(o.join(" "), '" data-view="')
                          .concat(i.view, '">')
                          .concat(i.text, "</")
                          .concat(r, ">")
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
                i
              );
            })();
          if ((e.extend && e.extend(B.prototype, R, F, I), e.fn)) {
            var _ = e.fn.datepicker;
            (e.fn.datepicker = function (t) {
              for (
                var n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  i = 1;
                i < n;
                i++
              )
                r[i - 1] = arguments[i];
              var o;
              return (
                this.each(function (n, i) {
                  var a = e(i),
                    l = "destroy" === t,
                    u = a.data(s);
                  if (!u) {
                    if (l) return;
                    var c = e.extend({}, a.data(), e.isPlainObject(t) && t);
                    (u = new B(i, c)), a.data(s, u);
                  }
                  if (w(t)) {
                    var d = u[t];
                    e.isFunction(d) &&
                      ((o = d.apply(u, r)), l && a.removeData(s));
                  }
                }),
                k(o) ? this : o
              );
            }),
              (e.fn.datepicker.Constructor = B),
              (e.fn.datepicker.languages = y),
              (e.fn.datepicker.setDefaults = B.setDefaults),
              (e.fn.datepicker.noConflict = function () {
                return (e.fn.datepicker = _), this;
              });
          }
        }),
          "object" === s(t)
            ? a(n(755))
            : ((i = [n(755)]),
              void 0 ===
                (o = "function" == typeof (r = a) ? r.apply(t, i) : r) ||
                (e.exports = o));
      },
      615: function () {
        var e, t, n;
        (e = jQuery),
          (t = window),
          document,
          (n = {
            init: function (t, n) {
              var r = this;
              (r.options = e.extend({}, e.fn.nav.options, t)),
                (r.$body = e("body")),
                (r.$nav = e(n)),
                (r.$menuButton = e(r.options.navButton)),
                (r.$subMenu = e(r.options.subMenu)),
                (r.subMenu = r.options.subMenu),
                (r.mobileMode = r.isCurrentlyMobile(r)),
                (r.mouseOver = r.options.mouseOver),
                (r.disableSubMenuLink = r.options.disableSubMenuLink),
                (r.slideSpeed = r.options.slideSpeed),
                e("html").removeClass("nav-no-js"),
                r.collapseSubMenus(r),
                r.bindEvents(r);
            },
            bindEvents: function (n) {
              n.$menuButton.on("click", function (e) {
                n.toggleNav(n), e.preventDefault();
              }),
                n.$nav.on("click", n.subMenu + " > a", function (t) {
                  var r = e(this);
                  n.isSubMenuLinkDisabled(n, r) &&
                    (n.toggleSubMenu(n, r.parent()), t.preventDefault());
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
        })("undefined" != typeof window ? window : this, function (r, i) {
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
            v = h.call(Object),
            g = {},
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
            b = r.document,
            w = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var r,
              i,
              o = (n = n || b).createElement("script");
            if (((o.text = e), t))
              for (r in w)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function C(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[f.call(e)] || "object"
              : typeof e;
          }
          var k = "3.6.0",
            T = function (e, t) {
              return new T.fn.init(e, t);
            };
          function D(e) {
            var t = !!e && "length" in e && e.length,
              n = C(e);
            return (
              !m(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (T.fn = T.prototype =
            {
              jquery: k,
              constructor: T,
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
                var t = T.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return T.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  T.map(this, function (t, n) {
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
                  T.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
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
            (T.extend = T.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  i,
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
                      (r = e[t]),
                        "__proto__" !== t &&
                          a !== r &&
                          (u &&
                          r &&
                          (T.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = a[t]),
                              (o =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || T.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (a[t] = T.extend(u, o, r)))
                            : void 0 !== r && (a[t] = r));
                return a;
              }),
            T.extend({
              expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
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
                      h.call(n) !== v))
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
                  r = 0;
                if (D(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (D(Object(e))
                      ? T.merge(n, "string" == typeof e ? [e] : e)
                      : u.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                  e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                  !t(e[i], i) !== a && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  o = 0,
                  a = [];
                if (D(e))
                  for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return l(a);
              },
              guid: 1,
              support: g,
            }),
            "function" == typeof Symbol &&
              (T.fn[Symbol.iterator] = o[Symbol.iterator]),
            T.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var S = (function (e) {
            var t,
              n,
              r,
              i,
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
              v,
              g,
              m,
              y,
              b,
              w = "sizzle" + 1 * new Date(),
              x = e.document,
              C = 0,
              k = 0,
              T = le(),
              D = le(),
              S = le(),
              A = le(),
              N = function (e, t) {
                return e === t && (d = !0), 0;
              },
              E = {}.hasOwnProperty,
              P = [],
              j = P.pop,
              L = P.push,
              M = P.push,
              I = P.slice,
              F = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              O = "[\\x20\\t\\r\\n\\f]",
              H =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              $ =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                H +
                ")(?:" +
                O +
                "*([*^$|!~]?=)" +
                O +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                H +
                "))|)" +
                O +
                "*\\]",
              q =
                ":(" +
                H +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                $ +
                ")*)|.*)\\)|)",
              W = new RegExp(O + "+", "g"),
              B = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              _ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              V = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              z = new RegExp(O + "|>"),
              U = new RegExp(q),
              Y = new RegExp("^" + H + "$"),
              J = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              X = /HTML$/i,
              G = /^(?:input|select|textarea|button)$/i,
              Q = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
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
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function (e, t) {
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
              M.apply((P = I.call(x.childNodes)), x.childNodes),
                P[x.childNodes.length].nodeType;
            } catch (e) {
              M = {
                apply: P.length
                  ? function (e, t) {
                      L.apply(e, I.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, r, i) {
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
                ((r = r || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return r;
              if (!i && (f(t), (t = t || p), v)) {
                if (11 !== x && (d = Z.exec(e)))
                  if ((o = d[1])) {
                    if (9 === x) {
                      if (!(u = t.getElementById(o))) return r;
                      if (u.id === o) return r.push(u), r;
                    } else if (
                      y &&
                      (u = y.getElementById(o)) &&
                      b(t, u) &&
                      u.id === o
                    )
                      return r.push(u), r;
                  } else {
                    if (d[2]) return M.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (o = d[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return M.apply(r, t.getElementsByClassName(o)), r;
                  }
                if (
                  n.qsa &&
                  !A[e + " "] &&
                  (!g || !g.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((m = e), (y = t), 1 === x && (z.test(e) || V.test(e)))) {
                    for (
                      ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = c.replace(re, ie))
                          : t.setAttribute("id", (c = w))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                    m = h.join(",");
                  }
                  try {
                    return M.apply(r, y.querySelectorAll(m)), r;
                  } catch (t) {
                    A(e, !0);
                  } finally {
                    c === w && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(B, "$1"), t, r, i);
            }
            function le() {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
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
              for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t;
            }
            function fe(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
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
            function ve(e) {
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
            function ge(e) {
              return ue(function (t) {
                return (
                  (t = +t),
                  ue(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                      n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
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
                return !X.test(t || (n && n.nodeName) || "HTML");
              }),
            (f = se.setDocument =
              function (e) {
                var t,
                  i,
                  a = e ? e.ownerDocument || e : x;
                return a != p && 9 === a.nodeType && a.documentElement
                  ? ((h = (p = a).documentElement),
                    (v = !o(p)),
                    x != p &&
                      (i = p.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", oe, !1)
                        : i.attachEvent && i.attachEvent("onunload", oe)),
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
                    (n.getElementsByClassName = K.test(
                      p.getElementsByClassName
                    )),
                    (n.getById = ce(function (e) {
                      return (
                        (h.appendChild(e).id = w),
                        !p.getElementsByName || !p.getElementsByName(w).length
                      );
                    })),
                    n.getById
                      ? ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((r.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (r.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && v) {
                            var n,
                              r,
                              i,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                i = t.getElementsByName(e), r = 0;
                                (o = i[r++]);

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
                    (r.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[i++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return o;
                        }),
                    (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && v)
                          return t.getElementsByClassName(e);
                      }),
                    (m = []),
                    (g = []),
                    (n.qsa = K.test(p.querySelectorAll)) &&
                      (ce(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          w +
                          "'></a><select id='" +
                          w +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + R + ")"
                            ),
                          e.querySelectorAll("[id~=" + w + "-]").length ||
                            g.push("~="),
                          (t = p.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            g.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            g.push(":checked"),
                          e.querySelectorAll("a#" + w + "+*").length ||
                            g.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          g.push("[\\r\\n\\f]");
                      }),
                      ce(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            g.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            g.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          g.push(",.*:");
                      })),
                    (n.matchesSelector = K.test(
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
                    (g = g.length && new RegExp(g.join("|"))),
                    (m = m.length && new RegExp(m.join("|"))),
                    (t = K.test(h.compareDocumentPosition)),
                    (b =
                      t || K.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (N = t
                      ? function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var r =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            r ||
                            (1 &
                              (r =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === r)
                              ? e == p || (e.ownerDocument == x && b(x, e))
                                ? -1
                                : t == p || (t.ownerDocument == x && b(x, t))
                                ? 1
                                : c
                                ? F(c, e) - F(c, t)
                                : 0
                              : 4 & r
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var n,
                            r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                          if (!i || !o)
                            return e == p
                              ? -1
                              : t == p
                              ? 1
                              : i
                              ? -1
                              : o
                              ? 1
                              : c
                              ? F(c, e) - F(c, t)
                              : 0;
                          if (i === o) return fe(e, t);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (n = t; (n = n.parentNode); ) s.unshift(n);
                          for (; a[r] === s[r]; ) r++;
                          return r
                            ? fe(a[r], s[r])
                            : a[r] == x
                            ? -1
                            : s[r] == x
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
                  v &&
                  !A[t + " "] &&
                  (!m || !m.test(t)) &&
                  (!g || !g.test(t)))
              )
                try {
                  var r = y.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  A(t, !0);
                }
              return se(t, p, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != p && f(e), b(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != p && f(e);
              var i = r.attrHandle[t.toLowerCase()],
                o =
                  i && E.call(r.attrHandle, t.toLowerCase())
                    ? i(e, t, !v)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !v
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(re, ie);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                r = [],
                i = 0,
                o = 0;
              if (
                ((d = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(N),
                d)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
              }
              return (c = null), e;
            }),
            (i = se.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += i(t);
                return n;
              }),
            ((r = se.selectors =
              {
                cacheLength: 50,
                createPseudo: ue,
                match: J,
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
                    return J.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            U.test(n) &&
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
                    var t = T[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + O + "|$)"
                      )) &&
                        T(e, function (e) {
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
                    return function (r) {
                      var i = se.attr(r, e);
                      return null == i
                        ? "!=" === t
                        : !t ||
                            ((i += ""),
                            "=" === t
                              ? i === n
                              : "!=" === t
                              ? i !== n
                              : "^=" === t
                              ? n && 0 === i.indexOf(n)
                              : "*=" === t
                              ? n && i.indexOf(n) > -1
                              : "$=" === t
                              ? n && i.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === i
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
                            v = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            m = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                          if (g) {
                            if (o) {
                              for (; v; ) {
                                for (f = t; (f = f[v]); )
                                  if (
                                    s
                                      ? f.nodeName.toLowerCase() === m
                                      : 1 === f.nodeType
                                  )
                                    return !1;
                                h = v = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [a ? g.firstChild : g.lastChild]), a && y)
                            ) {
                              for (
                                b =
                                  (p =
                                    (u =
                                      (c =
                                        (d = (f = g)[w] || (f[w] = {}))[
                                          f.uniqueID
                                        ] || (d[f.uniqueID] = {}))[e] ||
                                      [])[0] === C && u[1]) && u[2],
                                  f = p && g.childNodes[p];
                                (f =
                                  (++p && f && f[v]) || (b = p = 0) || h.pop());

                              )
                                if (1 === f.nodeType && ++b && f === t) {
                                  c[e] = [C, p, b];
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
                                    [])[0] === C && u[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (f =
                                  (++p && f && f[v]) ||
                                  (b = p = 0) ||
                                  h.pop()) &&
                                ((s
                                  ? f.nodeName.toLowerCase() !== m
                                  : 1 !== f.nodeType) ||
                                  !++b ||
                                  (y &&
                                    ((c =
                                      (d = f[w] || (f[w] = {}))[f.uniqueID] ||
                                      (d[f.uniqueID] = {}))[e] = [C, b]),
                                  f !== t));

                              );
                            return (b -= i) === r || (b % r == 0 && b / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      i =
                        r.pseudos[e] ||
                        r.setFilters[e.toLowerCase()] ||
                        se.error("unsupported pseudo: " + e);
                    return i[w]
                      ? i(t)
                      : i.length > 1
                      ? ((n = [e, e, "", t]),
                        r.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ue(function (e, n) {
                              for (var r, o = i(e, t), a = o.length; a--; )
                                e[(r = F(e, o[a]))] = !(n[r] = o[a]);
                            })
                          : function (e) {
                              return i(e, 0, n);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: ue(function (e) {
                    var t = [],
                      n = [],
                      r = s(e.replace(B, "$1"));
                    return r[w]
                      ? ue(function (e, t, n, i) {
                          for (
                            var o, a = r(e, null, i, []), s = e.length;
                            s--;

                          )
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        })
                      : function (e, i, o) {
                          return (
                            (t[0] = e),
                            r(t, null, o, n),
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
                        return (t.textContent || i(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ue(function (e) {
                    return (
                      Y.test(e || "") || se.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = v
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
                  enabled: ve(!1),
                  disabled: ve(!0),
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
                    return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                    return Q.test(e.nodeName);
                  },
                  input: function (e) {
                    return G.test(e.nodeName);
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
                  first: ge(function () {
                    return [0];
                  }),
                  last: ge(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ge(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ge(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ge(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ge(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                    return e;
                  }),
                  gt: ge(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = pe(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
            function ye() {}
            function be(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function we(e, t, n) {
              var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = k++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, l) {
                    var u,
                      c,
                      d,
                      f = [C, s];
                    if (l) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((c =
                              (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                              (d[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((u = c[o]) && u[0] === C && u[1] === s)
                              return (f[2] = u[2]);
                            if (((c[o] = f), (f[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function xe(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Ce(e, t, n, r, i) {
              for (
                var o, a = [], s = 0, l = e.length, u = null != t;
                s < l;
                s++
              )
                (o = e[s]) &&
                  ((n && !n(o, r, i)) || (a.push(o), u && t.push(s)));
              return a;
            }
            function ke(e, t, n, r, i, o) {
              return (
                r && !r[w] && (r = ke(r)),
                i && !i[w] && (i = ke(i, o)),
                ue(function (o, a, s, l) {
                  var u,
                    c,
                    d,
                    f = [],
                    p = [],
                    h = a.length,
                    v =
                      o ||
                      (function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                          se(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    g = !e || (!o && t) ? v : Ce(v, f, e, s, l),
                    m = n ? (i || (o ? e : h || r) ? [] : a) : g;
                  if ((n && n(g, m, s, l), r))
                    for (u = Ce(m, p), r(u, [], s, l), c = u.length; c--; )
                      (d = u[c]) && (m[p[c]] = !(g[p[c]] = d));
                  if (o) {
                    if (i || e) {
                      if (i) {
                        for (u = [], c = m.length; c--; )
                          (d = m[c]) && u.push((g[c] = d));
                        i(null, (m = []), u, l);
                      }
                      for (c = m.length; c--; )
                        (d = m[c]) &&
                          (u = i ? F(o, d) : f[c]) > -1 &&
                          (o[u] = !(a[u] = d));
                    }
                  } else (m = Ce(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, l) : M.apply(a, m);
                })
              );
            }
            function Te(e) {
              for (
                var t,
                  n,
                  i,
                  o = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
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
                    function (e, n, r) {
                      var i =
                        (!a && (r || n !== u)) ||
                        ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                      return (t = null), i;
                    },
                  ];
                l < o;
                l++
              )
                if ((n = r.relative[e[l].type])) f = [we(xe(f), n)];
                else {
                  if ((n = r.filter[e[l].type].apply(null, e[l].matches))[w]) {
                    for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                    return ke(
                      l > 1 && xe(f),
                      l > 1 &&
                        be(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(B, "$1"),
                      n,
                      l < i && Te(e.slice(l, i)),
                      i < o && Te((e = e.slice(i))),
                      i < o && be(e)
                    );
                  }
                  f.push(n);
                }
              return xe(f);
            }
            return (
              (ye.prototype = r.filters = r.pseudos),
              (r.setFilters = new ye()),
              (a = se.tokenize =
                function (e, t) {
                  var n,
                    i,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c = D[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (s = e, l = [], u = r.preFilter; s; ) {
                    for (a in ((n && !(i = _.exec(s))) ||
                      (i && (s = s.slice(i[0].length) || s), l.push((o = []))),
                    (n = !1),
                    (i = V.exec(s)) &&
                      ((n = i.shift()),
                      o.push({ value: n, type: i[0].replace(B, " ") }),
                      (s = s.slice(n.length))),
                    r.filter))
                      !(i = J[a].exec(s)) ||
                        (u[a] && !(i = u[a](i))) ||
                        ((n = i.shift()),
                        o.push({ value: n, type: a, matches: i }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? se.error(e) : D(e, l).slice(0);
                }),
              (s = se.compile =
                function (e, t) {
                  var n,
                    i = [],
                    o = [],
                    s = S[e + " "];
                  if (!s) {
                    for (t || (t = a(e)), n = t.length; n--; )
                      (s = Te(t[n]))[w] ? i.push(s) : o.push(s);
                    (s = S(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          i = e.length > 0,
                          o = function (o, a, s, l, c) {
                            var d,
                              h,
                              g,
                              m = 0,
                              y = "0",
                              b = o && [],
                              w = [],
                              x = u,
                              k = o || (i && r.find.TAG("*", c)),
                              T = (C += null == x ? 1 : Math.random() || 0.1),
                              D = k.length;
                            for (
                              c && (u = a == p || a || c);
                              y !== D && null != (d = k[y]);
                              y++
                            ) {
                              if (i && d) {
                                for (
                                  h = 0,
                                    a ||
                                      d.ownerDocument == p ||
                                      (f(d), (s = !v));
                                  (g = e[h++]);

                                )
                                  if (g(d, a || p, s)) {
                                    l.push(d);
                                    break;
                                  }
                                c && (C = T);
                              }
                              n && ((d = !g && d) && m--, o && b.push(d));
                            }
                            if (((m += y), n && y !== m)) {
                              for (h = 0; (g = t[h++]); ) g(b, w, a, s);
                              if (o) {
                                if (m > 0)
                                  for (; y--; )
                                    b[y] || w[y] || (w[y] = j.call(l));
                                w = Ce(w);
                              }
                              M.apply(l, w),
                                c &&
                                  !o &&
                                  w.length > 0 &&
                                  m + t.length > 1 &&
                                  se.uniqueSort(l);
                            }
                            return c && ((C = T), (u = x)), b;
                          };
                        return n ? ue(o) : o;
                      })(o, i)
                    )).selector = e;
                  }
                  return s;
                }),
              (l = se.select =
                function (e, t, n, i) {
                  var o,
                    l,
                    u,
                    c,
                    d,
                    f = "function" == typeof e && e,
                    p = !i && a((e = f.selector || e));
                  if (((n = n || []), 1 === p.length)) {
                    if (
                      (l = p[0] = p[0].slice(0)).length > 2 &&
                      "ID" === (u = l[0]).type &&
                      9 === t.nodeType &&
                      v &&
                      r.relative[l[1].type]
                    ) {
                      if (
                        !(t = (r.find.ID(u.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      f && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      o = J.needsContext.test(e) ? 0 : l.length;
                      o-- && ((u = l[o]), !r.relative[(c = u.type)]);

                    )
                      if (
                        (d = r.find[c]) &&
                        (i = d(
                          u.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && me(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(o, 1), !(e = i.length && be(l))))
                          return M.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (f || s(e, p))(
                      i,
                      t,
                      !v,
                      n,
                      !t || (ee.test(e) && me(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = w.split("").sort(N).join("") === w),
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
                de(R, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              se
            );
          })(r);
          (T.find = S),
            (T.expr = S.selectors),
            (T.expr[":"] = T.expr.pseudos),
            (T.uniqueSort = T.unique = S.uniqueSort),
            (T.text = S.getText),
            (T.isXMLDoc = S.isXML),
            (T.contains = S.contains),
            (T.escapeSelector = S.escape);
          var A = function (e, t, n) {
              for (
                var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (i && T(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            N = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            E = T.expr.match.needsContext;
          function P(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var j =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function L(e, t, n) {
            return m(t)
              ? T.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? T.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? T.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
                })
              : T.filter(t, e, n);
          }
          (T.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? T.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : T.find.matches(
                    e,
                    T.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            T.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    T(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (T.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  T.find(e, i[t], n);
                return r > 1 ? T.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(L(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(L(this, e || [], !0));
              },
              is: function (e) {
                return !!L(
                  this,
                  "string" == typeof e && E.test(e) ? T(e) : e || [],
                  !1
                ).length;
              },
            });
          var M,
            I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((T.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || M), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : I.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof T ? t[0] : t),
                  T.merge(
                    this,
                    T.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  j.test(r[1]) && T.isPlainObject(t))
                )
                  for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (i = b.getElementById(r[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : m(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(T)
              : T.makeArray(e, this);
          }).prototype = T.fn),
            (M = T(b));
          var F = /^(?:parents|prev(?:Until|All))/,
            R = { children: !0, contents: !0, next: !0, prev: !0 };
          function O(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          T.fn.extend({
            has: function (e) {
              var t = T(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (T.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && T(e);
              if (!E.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && T.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? c.call(T(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            T.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return A(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return A(e, "parentNode", n);
                },
                next: function (e) {
                  return O(e, "nextSibling");
                },
                prev: function (e) {
                  return O(e, "previousSibling");
                },
                nextAll: function (e) {
                  return A(e, "nextSibling");
                },
                prevAll: function (e) {
                  return A(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return A(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return A(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return N((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return N(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (P(e, "template") && (e = e.content || e),
                      T.merge([], e.childNodes));
                },
              },
              function (e, t) {
                T.fn[e] = function (n, r) {
                  var i = T.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = T.filter(r, i)),
                    this.length > 1 &&
                      (R[e] || T.uniqueSort(i), F.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var H = /[^\x20\t\r\n\f]+/g;
          function $(e) {
            return e;
          }
          function q(e) {
            throw e;
          }
          function W(e, t, n, r) {
            var i;
            try {
              e && m((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && m((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (T.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      T.each(e.match(H) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : T.extend({}, e);
            var t,
              n,
              r,
              i,
              o = [],
              a = [],
              s = -1,
              l = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
              },
              u = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((s = o.length - 1), a.push(n)),
                      (function t(n) {
                        T.each(n, function (n, r) {
                          m(r)
                            ? (e.unique && u.has(r)) || o.push(r)
                            : r && r.length && "string" !== C(r) && t(r);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    T.each(arguments, function (e, t) {
                      for (var n; (n = T.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? T.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (i = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return (
                    i ||
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
                  return !!r;
                },
              };
            return u;
          }),
            T.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      T.Callbacks("memory"),
                      T.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return T.Deferred(function (n) {
                        T.each(t, function (t, r) {
                          var i = m(e[r[4]]) && e[r[4]];
                          o[r[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && m(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, i) {
                      var o = 0;
                      function a(e, t, n, i) {
                        return function () {
                          var s = this,
                            l = arguments,
                            u = function () {
                              var r, u;
                              if (!(e < o)) {
                                if ((r = n.apply(s, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (u =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  m(u)
                                    ? i
                                      ? u.call(r, a(o, t, $, i), a(o, t, q, i))
                                      : (o++,
                                        u.call(
                                          r,
                                          a(o, t, $, i),
                                          a(o, t, q, i),
                                          a(o, t, $, t.notifyWith)
                                        ))
                                    : (n !== $ && ((s = void 0), (l = [r])),
                                      (i || t.resolveWith)(s, l));
                              }
                            },
                            c = i
                              ? u
                              : function () {
                                  try {
                                    u();
                                  } catch (r) {
                                    T.Deferred.exceptionHook &&
                                      T.Deferred.exceptionHook(r, c.stackTrace),
                                      e + 1 >= o &&
                                        (n !== q && ((s = void 0), (l = [r])),
                                        t.rejectWith(s, l));
                                  }
                                };
                          e
                            ? c()
                            : (T.Deferred.getStackHook &&
                                (c.stackTrace = T.Deferred.getStackHook()),
                              r.setTimeout(c));
                        };
                      }
                      return T.Deferred(function (r) {
                        t[0][3].add(a(0, r, m(i) ? i : $, r.notifyWith)),
                          t[1][3].add(a(0, r, m(e) ? e : $)),
                          t[2][3].add(a(0, r, m(n) ? n : q));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? T.extend(e, i) : i;
                    },
                  },
                  o = {};
                return (
                  T.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (i[r[1]] = a.add),
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
                      a.add(r[3].fire),
                      (o[r[0]] = function () {
                        return (
                          o[r[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[r[0] + "With"] = a.fireWith);
                  }),
                  i.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = s.call(arguments),
                  o = T.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (i[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || o.resolveWith(r, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (W(e, o.done(a(n)).resolve, o.reject, !t),
                  "pending" === o.state() || m(i[n] && i[n].then))
                )
                  return o.then();
                for (; n--; ) W(i[n], a(n), o.reject);
                return o.promise();
              },
            });
          var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (T.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              B.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (T.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var _ = T.Deferred();
          function V() {
            b.removeEventListener("DOMContentLoaded", V),
              r.removeEventListener("load", V),
              T.ready();
          }
          (T.fn.ready = function (e) {
            return (
              _.then(e).catch(function (e) {
                T.readyException(e);
              }),
              this
            );
          }),
            T.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) ||
                  ((T.isReady = !0),
                  (!0 !== e && --T.readyWait > 0) || _.resolveWith(b, [T]));
              },
            }),
            (T.ready.then = _.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? r.setTimeout(T.ready)
              : (b.addEventListener("DOMContentLoaded", V),
                r.addEventListener("load", V));
          var z = function (e, t, n, r, i, o, a) {
              var s = 0,
                l = e.length,
                u = null == n;
              if ("object" === C(n))
                for (s in ((i = !0), n)) z(e, t, s, n[s], !0, o, a);
              else if (
                void 0 !== r &&
                ((i = !0),
                m(r) || (a = !0),
                u &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((u = t),
                      (t = function (e, t, n) {
                        return u.call(T(e), n);
                      }))),
                t)
              )
                for (; s < l; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
            },
            U = /^-ms-/,
            Y = /-([a-z])/g;
          function J(e, t) {
            return t.toUpperCase();
          }
          function X(e) {
            return e.replace(U, "ms-").replace(Y, J);
          }
          var G = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function Q() {
            this.expando = T.expando + Q.uid++;
          }
          (Q.uid = 1),
            (Q.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    G(e) &&
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
                var r,
                  i = this.cache(e);
                if ("string" == typeof t) i[X(t)] = n;
                else for (r in t) i[X(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][X(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(X)
                      : (t = X(t)) in r
                      ? [t]
                      : t.match(H) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || T.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t);
              },
            });
          var K = new Q(),
            Z = new Q(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
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
          T.extend({
            hasData: function (e) {
              return Z.hasData(e) || K.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return K.access(e, t, n);
            },
            _removeData: function (e, t) {
              K.remove(e, t);
            },
          }),
            T.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  i,
                  o = this[0],
                  a = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((i = Z.get(o)),
                    1 === o.nodeType && !K.get(o, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = X(r.slice(5))), ne(o, r, i[r]));
                    K.set(o, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : z(
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
            T.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = K.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = K.access(e, t, T.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = T._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                      e,
                      function () {
                        T.dequeue(e, t);
                      },
                      o
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: T.Callbacks("once memory").add(function () {
                      K.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            T.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? T.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = T.queue(this, e, t);
                        T._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            T.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  T.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  i = T.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                    --r || i.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = K.get(o[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), i.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            ae = b.documentElement,
            se = function (e) {
              return T.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          ae.getRootNode &&
            (se = function (e) {
              return (
                T.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ue = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === T.css(e, "display"))
            );
          };
          function ce(e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return T.css(e, t, "");
                  },
              l = s(),
              u = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (T.cssNumber[t] || ("px" !== u && +l)) &&
                ie.exec(T.css(e, t));
            if (c && c[3] !== u) {
              for (l /= 2, u = u || c[3], c = +l || 1; a--; )
                T.style(e, t, c + u),
                  (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              (c *= 2), T.style(e, t, c + u), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +l || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = u), (r.start = c), (r.end = i))),
              i
            );
          }
          var de = {};
          function fe(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = de[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = T.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (de[r] = i),
              i)
            );
          }
          function pe(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
              (r = e[o]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((i[o] = K.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    "" === r.style.display && ue(r) && (i[o] = fe(r)))
                  : "none" !== n && ((i[o] = "none"), K.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
          }
          T.fn.extend({
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
                    ue(this) ? T(this).show() : T(this).hide();
                  });
            },
          });
          var he,
            ve,
            ge = /^(?:checkbox|radio)$/i,
            me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (ve = b.createElement("input")).setAttribute("type", "radio"),
            ve.setAttribute("checked", "checked"),
            ve.setAttribute("name", "t"),
            he.appendChild(ve),
            (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (g.option = !!he.lastChild);
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
              void 0 === t || (t && P(e, t)) ? T.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            g.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Ce = /<|&#?\w+;/;
          function ke(e, t, n, r, i) {
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
                if ("object" === C(o)) T.merge(f, o.nodeType ? [o] : o);
                else if (Ce.test(o)) {
                  for (
                    a = a || d.appendChild(t.createElement("div")),
                      s = (me.exec(o) || ["", ""])[1].toLowerCase(),
                      l = be[s] || be._default,
                      a.innerHTML = l[1] + T.htmlPrefilter(o) + l[2],
                      c = l[0];
                    c--;

                  )
                    a = a.lastChild;
                  T.merge(f, a.childNodes),
                    ((a = d.firstChild).textContent = "");
                } else f.push(t.createTextNode(o));
            for (d.textContent = "", p = 0; (o = f[p++]); )
              if (r && T.inArray(o, r) > -1) i && i.push(o);
              else if (
                ((u = se(o)),
                (a = we(d.appendChild(o), "script")),
                u && xe(a),
                n)
              )
                for (c = 0; (o = a[c++]); ) ye.test(o.type || "") && n.push(o);
            return d;
          }
          var Te = /^([^.]*)(?:\.(.+)|)/;
          function De() {
            return !0;
          }
          function Se() {
            return !1;
          }
          function Ae(e, t) {
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
          function Ne(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                Ne(e, s, n, r, t[s], o);
              return e;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = Se;
            else if (!i) return e;
            return (
              1 === o &&
                ((a = i),
                ((i = function (e) {
                  return T().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = T.guid++))),
              e.each(function () {
                T.event.add(this, t, i, r, n);
              })
            );
          }
          function Ee(e, t, n) {
            n
              ? (K.set(e, t, !1),
                T.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      i,
                      o = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (T.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = s.call(arguments)),
                        K.set(this, t, o),
                        (r = n(this, t)),
                        this[t](),
                        o !== (i = K.get(this, t)) || r
                          ? K.set(this, t, !1)
                          : (i = {}),
                        o !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i && i.value
                        );
                    } else
                      o.length &&
                        (K.set(this, t, {
                          value: T.event.trigger(
                            T.extend(o[0], T.Event.prototype),
                            o.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && T.event.add(e, t, De);
          }
          (T.event = {
            global: {},
            add: function (e, t, n, r, i) {
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
                v,
                g = K.get(e);
              if (G(e))
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && T.find.matchesSelector(ae, i),
                    n.guid || (n.guid = T.guid++),
                    (l = g.events) || (l = g.events = Object.create(null)),
                    (a = g.handle) ||
                      (a = g.handle =
                        function (t) {
                          return void 0 !== T && T.event.triggered !== t.type
                            ? T.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    u = (t = (t || "").match(H) || [""]).length;
                  u--;

                )
                  (p = v = (s = Te.exec(t[u]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p &&
                      ((d = T.event.special[p] || {}),
                      (p = (i ? d.delegateType : d.bindType) || p),
                      (d = T.event.special[p] || {}),
                      (c = T.extend(
                        {
                          type: p,
                          origType: v,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && T.expr.match.needsContext.test(i),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (f = l[p]) ||
                        (((f = l[p] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(p, a))),
                      d.add &&
                        (d.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      i ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                      (T.event.global[p] = !0));
            },
            remove: function (e, t, n, r, i) {
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
                v,
                g = K.hasData(e) && K.get(e);
              if (g && (l = g.events)) {
                for (u = (t = (t || "").match(H) || [""]).length; u--; )
                  if (
                    ((p = v = (s = Te.exec(t[u]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p)
                  ) {
                    for (
                      d = T.event.special[p] || {},
                        f =
                          l[(p = (r ? d.delegateType : d.bindType) || p)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = o = f.length;
                      o--;

                    )
                      (c = f[o]),
                        (!i && v !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ("**" !== r || !c.selector)) ||
                          (f.splice(o, 1),
                          c.selector && f.delegateCount--,
                          d.remove && d.remove.call(e, c));
                    a &&
                      !f.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                        T.removeEvent(e, p, g.handle),
                      delete l[p]);
                  } else for (p in l) T.event.remove(e, p + t[u], n, r, !0);
                T.isEmptyObject(l) && K.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                l = T.event.fix(e),
                u =
                  (K.get(this, "events") || Object.create(null))[l.type] || [],
                c = T.event.special[l.type] || {};
              for (s[0] = l, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, l))
              ) {
                for (
                  a = T.event.handlers.call(this, l, u), t = 0;
                  (i = a[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = i.elem, n = 0;
                    (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== o.namespace &&
                      !l.rnamespace.test(o.namespace)) ||
                      ((l.handleObj = o),
                      (l.data = o.data),
                      void 0 !==
                        (r = (
                          (T.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(i.elem, s)) &&
                        !1 === (l.result = r) &&
                        (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
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
                      void 0 === a[(i = (r = t[n]).selector + " ")] &&
                        (a[i] = r.needsContext
                          ? T(i, this).index(u) > -1
                          : T.find(i, this, null, [u]).length),
                        a[i] && o.push(r);
                    o.length && s.push({ elem: u, handlers: o });
                  }
              return (
                (u = this),
                l < t.length && s.push({ elem: u, handlers: t.slice(l) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(T.Event.prototype, e, {
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
              return e[T.expando] ? e : new T.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      P(t, "input") &&
                      Ee(t, "click", De),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      P(t, "input") &&
                      Ee(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ge.test(t.type) &&
                      t.click &&
                      P(t, "input") &&
                      K.get(t, "click")) ||
                    P(t, "a")
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
            (T.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (T.Event = function (e, t) {
              if (!(this instanceof T.Event)) return new T.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? De
                      : Se),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
            }),
            (T.Event.prototype = {
              constructor: T.Event,
              isDefaultPrevented: Se,
              isPropagationStopped: Se,
              isImmediatePropagationStopped: Se,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = De),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = De),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = De),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            T.each(
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
              T.event.addProp
            ),
            T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              T.event.special[e] = {
                setup: function () {
                  return Ee(this, e, Ae), !1;
                },
                trigger: function () {
                  return Ee(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            T.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                T.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = this,
                      i = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (i && (i === r || T.contains(r, i))) ||
                        ((e.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            T.fn.extend({
              on: function (e, t, n, r) {
                return Ne(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Ne(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    T(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Se),
                  this.each(function () {
                    T.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Pe = /<script|<style|<link/i,
            je = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Me(e, t) {
            return (
              (P(e, "table") &&
                P(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                T(e).children("tbody")[0]) ||
              e
            );
          }
          function Ie(e) {
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
          function Re(e, t) {
            var n, r, i, o, a, s;
            if (1 === t.nodeType) {
              if (K.hasData(e) && (s = K.get(e).events))
                for (i in (K.remove(t, "handle events"), s))
                  for (n = 0, r = s[i].length; n < r; n++)
                    T.event.add(t, i, s[i][n]);
              Z.hasData(e) &&
                ((o = Z.access(e)), (a = T.extend({}, o)), Z.set(t, a));
            }
          }
          function Oe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function He(e, t, n, r) {
            t = l(t);
            var i,
              o,
              a,
              s,
              u,
              c,
              d = 0,
              f = e.length,
              p = f - 1,
              h = t[0],
              v = m(h);
            if (
              v ||
              (f > 1 && "string" == typeof h && !g.checkClone && je.test(h))
            )
              return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = h.call(this, i, o.html())), He(o, t, n, r);
              });
            if (
              f &&
              ((o = (i = ke(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === i.childNodes.length && (i = o),
              o || r)
            ) {
              for (s = (a = T.map(we(i, "script"), Ie)).length; d < f; d++)
                (u = i),
                  d !== p &&
                    ((u = T.clone(u, !0, !0)),
                    s && T.merge(a, we(u, "script"))),
                  n.call(e[d], u, d);
              if (s)
                for (
                  c = a[a.length - 1].ownerDocument, T.map(a, Fe), d = 0;
                  d < s;
                  d++
                )
                  (u = a[d]),
                    ye.test(u.type || "") &&
                      !K.access(u, "globalEval") &&
                      T.contains(c, u) &&
                      (u.src && "module" !== (u.type || "").toLowerCase()
                        ? T._evalUrl &&
                          !u.noModule &&
                          T._evalUrl(
                            u.src,
                            { nonce: u.nonce || u.getAttribute("nonce") },
                            c
                          )
                        : x(u.textContent.replace(Le, ""), u, c));
            }
            return e;
          }
          function $e(e, t, n) {
            for (
              var r, i = t ? T.filter(t, e) : e, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || T.cleanData(we(r)),
                r.parentNode &&
                  (n && se(r) && xe(we(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          T.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                l = se(e);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  T.isXMLDoc(e)
                )
              )
                for (a = we(s), r = 0, i = (o = we(e)).length; r < i; r++)
                  Oe(o[r], a[r]);
              if (t)
                if (n)
                  for (
                    o = o || we(e), a = a || we(s), r = 0, i = o.length;
                    r < i;
                    r++
                  )
                    Re(o[r], a[r]);
                else Re(e, s);
              return (
                (a = we(s, "script")).length > 0 &&
                  xe(a, !l && we(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, i = T.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (G(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events)
                      for (r in t.events)
                        i[r]
                          ? T.event.remove(n, r)
                          : T.removeEvent(n, r, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            T.fn.extend({
              detach: function (e) {
                return $e(this, e, !0);
              },
              remove: function (e) {
                return $e(this, e);
              },
              text: function (e) {
                return z(
                  this,
                  function (e) {
                    return void 0 === e
                      ? T.text(this)
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
                return He(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Me(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return He(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return He(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return He(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (T.cleanData(we(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return T.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return z(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Pe.test(e) &&
                      !be[(me.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = T.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (T.cleanData(we(t, !1)), (t.innerHTML = e));
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
                return He(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 &&
                      (T.cleanData(we(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            T.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                T.fn[e] = function (e) {
                  for (
                    var n, r = [], i = T(e), o = i.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      T(i[a])[t](n),
                      u.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var qe = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            We = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Be = function (e, t, n) {
              var r,
                i,
                o = {};
              for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
              return r;
            },
            _e = new RegExp(oe.join("|"), "i");
          function Ve(e, t, n) {
            var r,
              i,
              o,
              a,
              s = e.style;
            return (
              (n = n || We(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  se(e) ||
                  (a = T.style(e, t)),
                !g.pixelBoxStyles() &&
                  qe.test(a) &&
                  _e.test(t) &&
                  ((r = s.width),
                  (i = s.minWidth),
                  (o = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = i),
                  (s.maxWidth = o))),
              void 0 !== a ? a + "" : a
            );
          }
          function ze(e, t) {
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
                var e = r.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
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
              i,
              o,
              a,
              s,
              l,
              u = b.createElement("div"),
              c = b.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === c.style.backgroundClip),
              T.extend(g, {
                boxSizingReliable: function () {
                  return e(), i;
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
                  var e, t, n, i;
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
                      (i = r.getComputedStyle(t)),
                      (s =
                        parseInt(i.height, 10) +
                          parseInt(i.borderTopWidth, 10) +
                          parseInt(i.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Ue = ["Webkit", "Moz", "ms"],
            Ye = b.createElement("div").style,
            Je = {};
          function Xe(e) {
            return (
              T.cssProps[e] ||
              Je[e] ||
              (e in Ye
                ? e
                : (Je[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
                        n--;

                      )
                        if ((e = Ue[n] + t) in Ye) return e;
                    })(e) || e))
            );
          }
          var Ge = /^(none|table(?!-c[ea]).+)/,
            Qe = /^--/,
            Ke = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ze = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function tt(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              l = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (l += T.css(e, n + oe[a], !0, i)),
                r
                  ? ("content" === n &&
                      (l -= T.css(e, "padding" + oe[a], !0, i)),
                    "margin" !== n &&
                      (l -= T.css(e, "border" + oe[a] + "Width", !0, i)))
                  : ((l += T.css(e, "padding" + oe[a], !0, i)),
                    "padding" !== n
                      ? (l += T.css(e, "border" + oe[a] + "Width", !0, i))
                      : (s += T.css(e, "border" + oe[a] + "Width", !0, i)));
            return (
              !r &&
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
            var r = We(e),
              i =
                (!g.boxSizingReliable() || n) &&
                "border-box" === T.css(e, "boxSizing", !1, r),
              o = i,
              a = Ve(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (qe.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!g.boxSizingReliable() && i) ||
                (!g.reliableTrDimensions() && P(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === T.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === T.css(e, "boxSizing", !1, r)),
                (o = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                tt(e, t, n || (i ? "border" : "content"), o, r, a) +
                "px"
            );
          }
          function rt(e, t, n, r, i) {
            return new rt.prototype.init(e, t, n, r, i);
          }
          T.extend({
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
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  o,
                  a,
                  s = X(t),
                  l = Qe.test(t),
                  u = e.style;
                if (
                  (l || (t = Xe(s)),
                  (a = T.cssHooks[t] || T.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                    ? i
                    : u[t];
                "string" == (o = typeof n) &&
                  (i = ie.exec(n)) &&
                  i[1] &&
                  ((n = ce(e, t, i)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      l ||
                      (n += (i && i[3]) || (T.cssNumber[s] ? "" : "px")),
                    g.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (u[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (l ? u.setProperty(t, n) : (u[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                o,
                a,
                s = X(t);
              return (
                Qe.test(t) || (t = Xe(s)),
                (a = T.cssHooks[t] || T.cssHooks[s]) &&
                  "get" in a &&
                  (i = a.get(e, !0, n)),
                void 0 === i && (i = Ve(e, t, r)),
                "normal" === i && t in Ze && (i = Ze[t]),
                "" === n || n
                  ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                  : i
              );
            },
          }),
            T.each(["height", "width"], function (e, t) {
              T.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Ge.test(T.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, r)
                      : Be(e, Ke, function () {
                          return nt(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var i,
                    o = We(e),
                    a = !g.scrollboxSize() && "absolute" === o.position,
                    s =
                      (a || r) && "border-box" === T.css(e, "boxSizing", !1, o),
                    l = r ? tt(e, t, r, s, o) : 0;
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
                      (i = ie.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[t] = n), (n = T.css(e, t))),
                    et(0, n, l)
                  );
                },
              };
            }),
            (T.cssHooks.marginLeft = ze(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ve(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Be(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            T.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (T.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        i = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                  },
                }),
                  "margin" !== e && (T.cssHooks[e + t].set = et);
              }
            ),
            T.fn.extend({
              css: function (e, t) {
                return z(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      o = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = We(e), i = t.length; a < i; a++)
                        o[t[a]] = T.css(e, t[a], !1, r);
                      return o;
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (T.Tween = rt),
            (rt.prototype = {
              constructor: rt,
              init: function (e, t, n, r, i, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || T.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (T.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = rt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : rt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = rt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        T.easing[this.easing](
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
                  n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (rt.prototype.init.prototype = rt.prototype),
            (rt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  T.fx.step[e.prop]
                    ? T.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!T.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : T.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (rt.propHooks.scrollTop = rt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (T.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (T.fx = rt.prototype.init),
            (T.fx.step = {});
          var it,
            ot,
            at = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;
          function lt() {
            ot &&
              (!1 === b.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(lt)
                : r.setTimeout(lt, T.fx.interval),
              T.fx.tick());
          }
          function ut() {
            return (
              r.setTimeout(function () {
                it = void 0;
              }),
              (it = Date.now())
            );
          }
          function ct(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i["margin" + (n = oe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function dt(e, t, n) {
            for (
              var r,
                i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
                o = 0,
                a = i.length;
              o < a;
              o++
            )
              if ((r = i[o].call(n, t, e))) return r;
          }
          function ft(e, t, n) {
            var r,
              i,
              o = 0,
              a = ft.prefilters.length,
              s = T.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (i) return !1;
                for (
                  var t = it || ut(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = 1 - (n / u.duration || 0),
                    o = 0,
                    a = u.tweens.length;
                  o < a;
                  o++
                )
                  u.tweens[o].run(r);
                return (
                  s.notifyWith(e, [u, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [u, 1, 0]),
                      s.resolveWith(e, [u]),
                      !1)
                );
              },
              u = s.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(
                  !0,
                  { specialEasing: {}, easing: T.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: it || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = T.Tween(
                    e,
                    u.opts,
                    t,
                    n,
                    u.opts.specialEasing[t] || u.opts.easing
                  );
                  return u.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? u.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) u.tweens[n].run(1);
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
                var n, r, i, o, a;
                for (n in e)
                  if (
                    ((i = t[(r = X(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (a = T.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((o = a.expand(o)), delete e[r], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = i));
                  else t[r] = i;
              })(c, u.opts.specialEasing);
              o < a;
              o++
            )
              if ((r = ft.prefilters[o].call(u, e, c, u.opts)))
                return (
                  m(r.stop) &&
                    (T._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              T.map(c, dt, u),
              m(u.opts.start) && u.opts.start.call(e, u),
              u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always),
              T.fx.timer(
                T.extend(l, { elem: e, anim: u, queue: u.opts.queue })
              ),
              u
            );
          }
          (T.Animation = T.extend(ft, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ce(n.elem, e, ie.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              m(e) ? ((t = e), (e = ["*"])) : (e = e.match(H));
              for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                  (ft.tweeners[n] = ft.tweeners[n] || []),
                  ft.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
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
                  v = e.nodeType && ue(e),
                  g = K.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = T._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  f.always(function () {
                    f.always(function () {
                      a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), at.test(i))) {
                    if (
                      (delete t[r],
                      (o = o || "toggle" === i),
                      i === (v ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !g || void 0 === g[r]) continue;
                      v = !0;
                    }
                    p[r] = (g && g[r]) || T.style(e, r);
                  }
                if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
                  for (r in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (u = g && g.display) && (u = K.get(e, "display")),
                    "none" === (c = T.css(e, "display")) &&
                      (u
                        ? (c = u)
                        : (pe([e], !0),
                          (u = e.style.display || u),
                          (c = T.css(e, "display")),
                          pe([e]))),
                    ("inline" === c || ("inline-block" === c && null != u)) &&
                      "none" === T.css(e, "float") &&
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
                      (g
                        ? "hidden" in g && (v = g.hidden)
                        : (g = K.access(e, "fxshow", { display: u })),
                      o && (g.hidden = !v),
                      v && pe([e], !0),
                      f.done(function () {
                        for (r in (v || pe([e]), K.remove(e, "fxshow"), p))
                          T.style(e, r, p[r]);
                      })),
                      (l = dt(v ? g[r] : 0, r, f)),
                      r in g ||
                        ((g[r] = l.start),
                        v && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
            },
          })),
            (T.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? T.extend({}, e)
                  : {
                      complete: n || (!n && t) || (m(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !m(t) && t),
                    };
              return (
                T.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in T.fx.speeds
                      ? (r.duration = T.fx.speeds[r.duration])
                      : (r.duration = T.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  m(r.old) && r.old.call(this),
                    r.queue && T.dequeue(this, r.queue);
                }),
                r
              );
            }),
            T.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(ue)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var i = T.isEmptyObject(e),
                  o = T.speed(t, n, r),
                  a = function () {
                    var t = ft(this, T.extend({}, e), o);
                    (i || K.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      o = T.timers,
                      a = K.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                      for (i in a) a[i] && a[i].stop && st.test(i) && r(a[i]);
                    for (i = o.length; i--; )
                      o[i].elem !== this ||
                        (null != e && o[i].queue !== e) ||
                        (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                    (!t && n) || T.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = K.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      o = T.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        T.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            T.each(["toggle", "show", "hide"], function (e, t) {
              var n = T.fn[t];
              T.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ct(t, !0), e, r, i);
              };
            }),
            T.each(
              {
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                T.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (T.timers = []),
            (T.fx.tick = function () {
              var e,
                t = 0,
                n = T.timers;
              for (it = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || T.fx.stop(), (it = void 0);
            }),
            (T.fx.timer = function (e) {
              T.timers.push(e), T.fx.start();
            }),
            (T.fx.interval = 13),
            (T.fx.start = function () {
              ot || ((ot = !0), lt());
            }),
            (T.fx.stop = function () {
              ot = null;
            }),
            (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (T.fn.delay = function (e, t) {
              return (
                (e = (T.fx && T.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var i = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(i);
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
                (g.checkOn = "" !== e.value),
                (g.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = "t" === e.value);
            })();
          var pt,
            ht = T.expr.attrHandle;
          T.fn.extend({
            attr: function (e, t) {
              return z(this, T.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                T.removeAttr(this, e);
              });
            },
          }),
            T.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? T.prop(e, t, n)
                    : ((1 === o && T.isXMLDoc(e)) ||
                        (i =
                          T.attrHooks[t.toLowerCase()] ||
                          (T.expr.match.bool.test(t) ? pt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void T.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = T.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && "radio" === t && P(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match(H);
                if (i && 1 === e.nodeType)
                  for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (pt = {
              set: function (e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || T.find.attr;
              ht[t] = function (e, t, r) {
                var i,
                  o,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((o = ht[a]),
                    (ht[a] = i),
                    (i = null != n(e, t, r) ? a : null),
                    (ht[a] = o)),
                  i
                );
              };
            });
          var vt = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;
          function mt(e) {
            return (e.match(H) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function bt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(H)) || [];
          }
          T.fn.extend({
            prop: function (e, t) {
              return z(this, T.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[T.propFix[e] || e];
              });
            },
          }),
            T.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && T.isXMLDoc(e)) ||
                      ((t = T.propFix[t] || t), (i = T.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = T.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : vt.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (T.propHooks.selected = {
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
            T.each(
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
                T.propFix[this.toLowerCase()] = this;
              }
            ),
            T.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  l = 0;
                if (m(e))
                  return this.each(function (t) {
                    T(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((i = yt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))
                    ) {
                      for (a = 0; (o = t[a++]); )
                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      i !== (s = mt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  l = 0;
                if (m(e))
                  return this.each(function (t) {
                    T(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((i = yt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))
                    ) {
                      for (a = 0; (o = t[a++]); )
                        for (; r.indexOf(" " + o + " ") > -1; )
                          r = r.replace(" " + o + " ", " ");
                      i !== (s = mt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : m(e)
                  ? this.each(function (n) {
                      T(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, i, o, a;
                      if (r)
                        for (i = 0, o = T(this), a = bt(e); (t = a[i++]); )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = yt(this)) && K.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : K.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + mt(yt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var wt = /\r/g;
          T.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = m(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? e.call(this, n, T(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = T.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        T.valHooks[this.type] ||
                        T.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    T.valHooks[i.type] ||
                    T.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(wt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            T.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : mt(T.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      i = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      l = a ? o + 1 : i.length;
                    for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))
                      ) {
                        if (((t = T(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, i = e.options, o = T.makeArray(t), a = i.length;
                      a--;

                    )
                      ((r = i[a]).selected =
                        T.inArray(T.valHooks.option.get(r), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            T.each(["radio", "checkbox"], function () {
              (T.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = T.inArray(T(e).val(), t) > -1);
                },
              }),
                g.checkOn ||
                  (T.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (g.focusin = "onfocusin" in r);
          var xt = /^(?:focusinfocus|focusoutblur)$/,
            Ct = function (e) {
              e.stopPropagation();
            };
          T.extend(T.event, {
            trigger: function (e, t, n, i) {
              var o,
                a,
                s,
                l,
                u,
                c,
                d,
                f,
                h = [n || b],
                v = p.call(e, "type") ? e.type : e,
                g = p.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = f = s = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !xt.test(v + T.event.triggered) &&
                  (v.indexOf(".") > -1 &&
                    ((g = v.split(".")), (v = g.shift()), g.sort()),
                  (u = v.indexOf(":") < 0 && "on" + v),
                  ((e = e[T.expando]
                    ? e
                    : new T.Event(v, "object" == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : T.makeArray(t, [e])),
                  (d = T.event.special[v] || {}),
                  i || !d.trigger || !1 !== d.trigger.apply(n, t)))
              ) {
                if (!i && !d.noBubble && !y(n)) {
                  for (
                    l = d.delegateType || v,
                      xt.test(l + v) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || b) &&
                    h.push(s.defaultView || s.parentWindow || r);
                }
                for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                  (f = a),
                    (e.type = o > 1 ? l : d.bindType || v),
                    (c =
                      (K.get(a, "events") || Object.create(null))[e.type] &&
                      K.get(a, "handle")) && c.apply(a, t),
                    (c = u && a[u]) &&
                      c.apply &&
                      G(a) &&
                      ((e.result = c.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = v),
                  i ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                    !G(n) ||
                    (u &&
                      m(n[v]) &&
                      !y(n) &&
                      ((s = n[u]) && (n[u] = null),
                      (T.event.triggered = v),
                      e.isPropagationStopped() && f.addEventListener(v, Ct),
                      n[v](),
                      e.isPropagationStopped() && f.removeEventListener(v, Ct),
                      (T.event.triggered = void 0),
                      s && (n[u] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
              T.event.trigger(r, null, t);
            },
          }),
            T.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  T.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return T.event.trigger(e, t, n, !0);
              },
            }),
            g.focusin ||
              T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  T.event.simulate(t, e.target, T.event.fix(e));
                };
                T.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = K.access(r, t);
                    i || r.addEventListener(e, n, !0),
                      K.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = K.access(r, t) - 1;
                    i
                      ? K.access(r, t, i)
                      : (r.removeEventListener(e, n, !0), K.remove(r, t));
                  },
                };
              });
          var kt = r.location,
            Tt = { guid: Date.now() },
            Dt = /\?/;
          T.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                T.error(
                  "Invalid XML: " +
                    (n
                      ? T.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var St = /\[\]$/,
            At = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            Et = /^(?:input|select|textarea|keygen)/i;
          function Pt(e, t, n, r) {
            var i;
            if (Array.isArray(t))
              T.each(t, function (t, i) {
                n || St.test(e)
                  ? r(e, i)
                  : Pt(
                      e +
                        "[" +
                        ("object" == typeof i && null != i ? t : "") +
                        "]",
                      i,
                      n,
                      r
                    );
              });
            else if (n || "object" !== C(t)) r(e, t);
            else for (i in t) Pt(e + "[" + i + "]", t[i], n, r);
          }
          (T.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
              T.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) Pt(n, e[n], t, i);
            return r.join("&");
          }),
            T.fn.extend({
              serialize: function () {
                return T.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = T.prop(this, "elements");
                  return e ? T.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !T(this).is(":disabled") &&
                      Et.test(this.nodeName) &&
                      !Nt.test(e) &&
                      (this.checked || !ge.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = T(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? T.map(n, function (e) {
                          return { name: t.name, value: e.replace(At, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(At, "\r\n") };
                  })
                  .get();
              },
            });
          var jt = /%20/g,
            Lt = /#.*$/,
            Mt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ft = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            Ot = {},
            Ht = {},
            $t = "*/".concat("*"),
            qt = b.createElement("a");
          function Wt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                i = 0,
                o = t.toLowerCase().match(H) || [];
              if (m(n))
                for (; (r = o[i++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function Bt(e, t, n, r) {
            var i = {},
              o = e === Ht;
            function a(s) {
              var l;
              return (
                (i[s] = !0),
                T.each(e[s] || [], function (e, s) {
                  var u = s(t, n, r);
                  return "string" != typeof u || o || i[u]
                    ? o
                      ? !(l = u)
                      : void 0
                    : (t.dataTypes.unshift(u), a(u), !1);
                }),
                l
              );
            }
            return a(t.dataTypes[0]) || (!i["*"] && a("*"));
          }
          function _t(e, t) {
            var n,
              r,
              i = T.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && T.extend(!0, e, r), e;
          }
          (qt.href = kt.href),
            T.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: kt.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    kt.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": $t,
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
                  "text xml": T.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? _t(_t(e, T.ajaxSettings), t) : _t(T.ajaxSettings, e);
              },
              ajaxPrefilter: Wt(Ot),
              ajaxTransport: Wt(Ht),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  i,
                  o,
                  a,
                  s,
                  l,
                  u,
                  c,
                  d,
                  f,
                  p = T.ajaxSetup({}, t),
                  h = p.context || p,
                  v = p.context && (h.nodeType || h.jquery) ? T(h) : T.event,
                  g = T.Deferred(),
                  m = T.Callbacks("once memory"),
                  y = p.statusCode || {},
                  w = {},
                  x = {},
                  C = "canceled",
                  k = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (u) {
                        if (!a)
                          for (a = {}; (t = It.exec(o)); )
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
                        if (u) k.always(e[k.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || C;
                      return n && n.abort(t), D(0, t), this;
                    },
                  };
                if (
                  (g.promise(k),
                  (p.url = ((e || p.url || kt.href) + "").replace(
                    Rt,
                    kt.protocol + "//"
                  )),
                  (p.type = t.method || t.type || p.method || p.type),
                  (p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [
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
                    (p.data = T.param(p.data, p.traditional)),
                  Bt(Ot, p, t, k),
                  u)
                )
                  return k;
                for (d in ((c = T.event && p.global) &&
                  0 == T.active++ &&
                  T.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !Ft.test(p.type)),
                (i = p.url.replace(Lt, "")),
                p.hasContent
                  ? p.data &&
                    p.processData &&
                    0 ===
                      (p.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (p.data = p.data.replace(jt, "+"))
                  : ((f = p.url.slice(i.length)),
                    p.data &&
                      (p.processData || "string" == typeof p.data) &&
                      ((i += (Dt.test(i) ? "&" : "?") + p.data), delete p.data),
                    !1 === p.cache &&
                      ((i = i.replace(Mt, "$1")),
                      (f = (Dt.test(i) ? "&" : "?") + "_=" + Tt.guid++ + f)),
                    (p.url = i + f)),
                p.ifModified &&
                  (T.lastModified[i] &&
                    k.setRequestHeader("If-Modified-Since", T.lastModified[i]),
                  T.etag[i] && k.setRequestHeader("If-None-Match", T.etag[i])),
                ((p.data && p.hasContent && !1 !== p.contentType) ||
                  t.contentType) &&
                  k.setRequestHeader("Content-Type", p.contentType),
                k.setRequestHeader(
                  "Accept",
                  p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                    ? p.accepts[p.dataTypes[0]] +
                        ("*" !== p.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
                    : p.accepts["*"]
                ),
                p.headers))
                  k.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || u))
                  return k.abort();
                if (
                  ((C = "abort"),
                  m.add(p.complete),
                  k.done(p.success),
                  k.fail(p.error),
                  (n = Bt(Ht, p, t, k)))
                ) {
                  if (
                    ((k.readyState = 1), c && v.trigger("ajaxSend", [k, p]), u)
                  )
                    return k;
                  p.async &&
                    p.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      k.abort("timeout");
                    }, p.timeout));
                  try {
                    (u = !1), n.send(w, D);
                  } catch (e) {
                    if (u) throw e;
                    D(-1, e);
                  }
                } else D(-1, "No Transport");
                function D(e, t, a, l) {
                  var d,
                    f,
                    b,
                    w,
                    x,
                    C = t;
                  u ||
                    ((u = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (o = l || ""),
                    (k.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (w = (function (e, t, n) {
                        for (
                          var r, i, o, a, s = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in s)
                            if (s[i] && s[i].test(r)) {
                              l.unshift(i);
                              break;
                            }
                        if (l[0] in n) o = l[0];
                        else {
                          for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                              o = i;
                              break;
                            }
                            a || (a = i);
                          }
                          o = o || a;
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o];
                      })(p, k, a)),
                    !d &&
                      T.inArray("script", p.dataTypes) > -1 &&
                      T.inArray("json", p.dataTypes) < 0 &&
                      (p.converters["text script"] = function () {}),
                    (w = (function (e, t, n, r) {
                      var i,
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
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = o),
                          (o = c.shift()))
                        )
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                            if (!(a = u[l + " " + o] || u["* " + o]))
                              for (i in u)
                                if (
                                  (s = i.split(" "))[1] === o &&
                                  (a = u[l + " " + s[0]] || u["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = u[i])
                                    : !0 !== u[i] &&
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
                    })(p, w, k, d)),
                    d
                      ? (p.ifModified &&
                          ((x = k.getResponseHeader("Last-Modified")) &&
                            (T.lastModified[i] = x),
                          (x = k.getResponseHeader("etag")) && (T.etag[i] = x)),
                        204 === e || "HEAD" === p.type
                          ? (C = "nocontent")
                          : 304 === e
                          ? (C = "notmodified")
                          : ((C = w.state), (f = w.data), (d = !(b = w.error))))
                      : ((b = C),
                        (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                    (k.status = e),
                    (k.statusText = (t || C) + ""),
                    d
                      ? g.resolveWith(h, [f, C, k])
                      : g.rejectWith(h, [k, C, b]),
                    k.statusCode(y),
                    (y = void 0),
                    c &&
                      v.trigger(d ? "ajaxSuccess" : "ajaxError", [
                        k,
                        p,
                        d ? f : b,
                      ]),
                    m.fireWith(h, [k, C]),
                    c &&
                      (v.trigger("ajaxComplete", [k, p]),
                      --T.active || T.event.trigger("ajaxStop")));
                }
                return k;
              },
              getJSON: function (e, t, n) {
                return T.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return T.get(e, void 0, t, "script");
              },
            }),
            T.each(["get", "post"], function (e, t) {
              T[t] = function (e, n, r, i) {
                return (
                  m(n) && ((i = i || r), (r = n), (n = void 0)),
                  T.ajax(
                    T.extend(
                      { url: e, type: t, dataType: i, data: n, success: r },
                      T.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            T.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (T._evalUrl = function (e, t, n) {
              return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  T.globalEval(e, t, n);
                },
              });
            }),
            T.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (m(e) && (e = e.call(this[0])),
                    (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
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
                      T(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = T(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = m(e);
                return this.each(function (n) {
                  T(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      T(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (T.expr.pseudos.hidden = function (e) {
              return !T.expr.pseudos.visible(e);
            }),
            (T.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (T.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Vt = { 0: 200, 1223: 204 },
            zt = T.ajaxSettings.xhr();
          (g.cors = !!zt && "withCredentials" in zt),
            (g.ajax = zt = !!zt),
            T.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (zt && !e.crossDomain))
                return {
                  send: function (i, o) {
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
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      s.setRequestHeader(a, i[a]);
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
                              r.setTimeout(function () {
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
            T.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            T.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return T.globalEval(e), e;
                },
              },
            }),
            T.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            T.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, i) {
                    (t = T("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Ut,
            Yt = [],
            Jt = /(=)\?(?=&|$)|\?\?/;
          T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Yt.pop() || T.expando + "_" + Tt.guid++;
              return (this[e] = !0), e;
            },
          }),
            T.ajaxPrefilter("json jsonp", function (e, t, n) {
              var i,
                o,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Jt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Jt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback =
                    m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Jt, "$1" + i))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                    return a || T.error(i + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = r[i]),
                  (r[i] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? T(r).removeProp(i) : (r[i] = o),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(i)),
                      a && m(o) && o(a[0]),
                      (a = o = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((Ut = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Ut.childNodes.length)),
            (T.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((r = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(r))
                      : (t = b)),
                  (o = !n && []),
                  (i = j.exec(e))
                    ? [t.createElement(i[1])]
                    : ((i = ke([e], t, o)),
                      o && o.length && T(o).remove(),
                      T.merge([], i.childNodes)));
              var r, i, o;
            }),
            (T.fn.load = function (e, t, n) {
              var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
                m(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                  T.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        a.html(
                          r ? T("<div>").append(T.parseHTML(e)).find(r) : e
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
            (T.expr.pseudos.animated = function (e) {
              return T.grep(T.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (T.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  l,
                  u = T.css(e, "position"),
                  c = T(e),
                  d = {};
                "static" === u && (e.style.position = "relative"),
                  (s = c.offset()),
                  (o = T.css(e, "top")),
                  (l = T.css(e, "left")),
                  ("absolute" === u || "fixed" === u) &&
                  (o + l).indexOf("auto") > -1
                    ? ((a = (r = c.position()).top), (i = r.left))
                    : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
                  m(t) && (t = t.call(e, n, T.extend({}, s))),
                  null != t.top && (d.top = t.top - s.top + a),
                  null != t.left && (d.left = t.left - s.left + i),
                  "using" in t ? t.using.call(e, d) : c.css(d);
              },
            }),
            T.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        T.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
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
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === T.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === T.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((i = T(e).offset()).top += T.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (i.left += T.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - T.css(r, "marginTop", !0),
                    left: t.left - i.left - T.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === T.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            T.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                T.fn[e] = function (r) {
                  return z(
                    this,
                    function (e, r, i) {
                      var o;
                      if (
                        (y(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === i)
                      )
                        return o ? o[t] : e[r];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : i,
                            n ? i : o.pageYOffset
                          )
                        : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            T.each(["top", "left"], function (e, t) {
              T.cssHooks[t] = ze(g.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ve(e, t)), qe.test(n) ? T(e).position()[t] + "px" : n
                  );
              });
            }),
            T.each({ Height: "height", Width: "width" }, function (e, t) {
              T.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  T.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                      s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return z(
                      this,
                      function (t, n, i) {
                        var o;
                        return y(t)
                          ? 0 === r.indexOf("outer")
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
                          : void 0 === i
                          ? T.css(t, n, s)
                          : T.style(t, n, i, s);
                      },
                      t,
                      a ? i : void 0,
                      a
                    );
                  };
                }
              );
            }),
            T.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                T.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            T.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
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
            T.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                T.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (T.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
              return (
                (r = s.call(arguments, 2)),
                ((i = function () {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid =
                  e.guid || T.guid++),
                i
              );
          }),
            (T.holdReady = function (e) {
              e ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = P),
            (T.isFunction = m),
            (T.isWindow = y),
            (T.camelCase = X),
            (T.type = C),
            (T.now = Date.now),
            (T.isNumeric = function (e) {
              var t = T.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (T.trim = function (e) {
              return null == e ? "" : (e + "").replace(Xt, "");
            }),
            void 0 ===
              (n = function () {
                return T;
              }.apply(t, [])) || (e.exports = n);
          var Gt = r.jQuery,
            Qt = r.$;
          return (
            (T.noConflict = function (e) {
              return (
                r.$ === T && (r.$ = Qt),
                e && r.jQuery === T && (r.jQuery = Gt),
                T
              );
            }),
            void 0 === i && (r.jQuery = r.$ = T),
            T
          );
        });
      },
    },
    t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
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
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      var e = n(755),
        t = n.n(e);
      function r(e, t, n) {
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
      function i(e) {
        try {
          var t = e.charCode ? e.charCode : e.keyCode;
          if (8 != t && (t < 48 || t > 57)) return !1;
        } catch (e) {}
      }
      function o(e) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          String(e).toLowerCase()
        );
      }
      function a(e, t, n, r) {
        $(".overlay").css("display", "block"),
          $.ajax({
            type: "GET",
            url: e,
            headers: n,
            cache: !1,
            success: function (e) {
              $(".overlay").css("display", "none"), r(e);
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
                    ? r(e.responseJSON)
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
      n(615);
      var s = "https://djb.gov.in/DJBRMSApp/rest/Services/",
        l = "9DIc4QllN1uEzjaS3LitMeAoo5cbeJ7FSHfG4AfHUwk=",
        u = "NewConnection/FetchData/",
        c = "onload/",
        d = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: l,
        };
      n(78),
        (window.$ = t()),
        t()(".checkListDivRef").css("display", "block"),
        t()("header").load("head.html"),
        t()("footer").load("footer.html"),
        t()("#dateOfRet").prop("readOnly", "true"),
        t()("#dateOfRet").datepicker({
          autoHide: !0,
          zIndex: 2048,
          format: "dd-mm-yyyy",
          readOnly: !0,
        }),
        t()('INPUT[type="file"]').change(function () {
          console.log(
            "This file size is: " + this.files[0].size / 1024 / 1024 + " MB"
          );
          var e = this.getAttribute("id"),
            n = 1;
          "document_PropertyOwner_upload" === e && (n = 5),
            console.log(e + " file Size " + n);
          var r = this.files[0].name;
          if (
            (t()("#fileName").html(""),
            t()("#fileName").append(r),
            !(this.files[0].size / 1024 / 1024 < n))
          )
            return (
              alert("File size should be less then " + n + " MB."),
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
                alert(
                  "Please upload valid file extension of type jpg,jpeg,png & pdf of size less than " +
                    n +
                    " MB"
                ),
                t()(this).val(""),
                t()(this).focus(),
                !1
              );
          }
        }),
        t()("#selfDec").click(function (e) {
          e.preventDefault(), window.open("../Document/SelfDecrationForm.pdf");
        }),
        t()(".RWHForm").click(function (e) {
          e.preventDefault(),
            window.open("../Document/SampleForm_RWHCertificate.pdf");
        });
      var f = JSON.parse(localStorage.getItem("loginUser")),
        p = localStorage.getItem("loginUserName");
      null == f
        ? (t()("#vfsFlag").append(
            '<option value="SELF" selected="selected">SELF</option>'
          ),
          t()("#vfsID").val("SELF"))
        : "VFS" == p.slice(0, 3).toUpperCase()
        ? (t()("#vfsFlag").append(
            '<option value="' + p + '" selected="selected">' + p + "</option>"
          ),
          t()("#vfsID").val(p))
        : (t()("#vfsFlag").append(
            '<option value="SELF" selected="selected">SELF</option>'
          ),
          t()("#vfsID").val("SELF")),
        a(s + u + c + "ValidReceiptId", "", d, function (e) {
          if ("Success" == e.message && 200 == e.statusCode) {
            t()("#zroLocation").find("option:not(:first)").remove(),
              t()("#Property").find("option:not(:first)").remove();
            var n = e.zroLocationList;
            n.sort(function (e, n) {
              return t()(n).text() < t()(e).text() ? 1 : -1;
            });
            var r = t().each(n, function (e, n) {
              t()("#zroLocation").append(
                t()("<option>", { value: n.zroCode, text: n.zroName })
              );
            });
            t()
              .when(r)
              .then(function () {
                var n = t().each(e.propList, function (e, n) {
                  t()("#Property").append(
                    t()("<option>", { value: n.propCode, text: n.propname })
                  );
                });
                t()
                  .when(n)
                  .then(function () {
                    var n = t().each(e.profOfIdentyValue, function (n, r) {
                      t()("#ProofIdentityCombo").append(
                        t()("<option>", {
                          value: r,
                          text: e.profOfIdentyText[n],
                        })
                      );
                    });
                    t()
                      .when(n)
                      .then(function () {
                        t().each(e.profOfOwnerShipValue, function (n, r) {
                          t()("#PropertyOwnerCombo").append(
                            t()("<option>", {
                              value: r,
                              text: e.profOfOwnerShipText[n],
                            })
                          );
                        });
                      })
                      .catch(function (e) {
                        console.log("<<<<<Error>>>>" + e),
                          alert(
                            "Issue to iterate the Property ownership list."
                          );
                      });
                  })
                  .catch(function (e) {
                    console.log("<<<<<Error>>>>" + e),
                      alert("Issue to iterate the Property list.");
                  });
              })
              .catch(function (e) {
                console.log("<<<<<Error>>>>" + e),
                  alert("Issue to iterate the ZRO Location list.");
              });
          } else alert(e.message);
        }),
        (window.toggleTemp = function () {
          "REGULARIZATION" == t()('input[name="ApplyFor"]:checked').val()
            ? (t()("#connectionTypeTemp").prop("disabled", !0),
              t()("#connectionTypeTemp").prop("disabled", !0),
              t()("#connectionTypeCommon").prop("checked", !0),
              t()("#purpose").prop("disabled", !0))
            : t()("#connectionTypeTemp").prop("disabled", !1);
        }),
        t()("#connectionTypeTemp").click(function () {
          t()("#purpose").prop("disabled", !1);
        }),
        t()("#connectionTypeCommon").click(function () {
          t()("#purpose").prop("disabled", !0);
        }),
        t()("#bed").prop("readonly", !0),
        t()("#firstName, #middleName, #lastName, #FHname, #orgName").keypress(
          function (e) {
            return (function (e) {
              try {
                var t = e.charCode ? e.charCode : e.keyCode;
                return (
                  (t > 64 && t < 91) ||
                  (t > 96 && t < 123) ||
                  8 == t ||
                  32 == t ||
                  46 == t
                );
              } catch (e) {}
            })(e);
          }
        ),
        t()("#isGOVTEmp").click(function () {
          document.getElementById("isGOVTEmp").checked
            ? (t()("#govtFile").prop("disabled", !1),
              t()("#orgName").prop("disabled", !1),
              t()("#FHname").val("NA"),
              t()("#FHname").prop("readonly", !0),
              t()("#empId").val(""),
              t()("#dateOfRet").val(""))
            : (t()("#govtFile").val(""),
              t()("#govtFile").prop("disabled", !0),
              t()("#orgName").prop("disabled", !0),
              t()("#orgName").val(""),
              t()("#FHname").val(""),
              t()("#FHname").prop("readonly", !1),
              t()("#FHname").prop("readonly", !1));
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
        t()(
          "#Mobile, #office, #home, #pinAdd, #plot, #built, #waterReceiptId, #roofTopArea, #totalPlotArea, #pavedArea"
        ).keypress(function (e) {
          return i(e);
        }),
        t()(
          "#length, #breadth, #depth, #total, #dia, #depthC, #totalC, #floor, #bed, #built,  #Account, #roofTopArea, #totalPlotArea, #pavedArea"
        ).keypress(function (e) {
          return i(e);
        }),
        t()(
          "#empId, #hNoAdd, #RoadNoAdd, #subLoc1Add, #subLoc2Add, #subColAdd, #vilAdd, #kNoAdd, #licenseNo, #socnameAdd, #Branch, #MICR"
        ).keypress(function (e) {
          return (function (e) {
            var t = "charCode" in e ? e.charCode : e.keyCode;
            32 == t ||
              (t > 47 && t < 58) ||
              (t > 64 && t < 91) ||
              (t > 96 && t < 123) ||
              e.preventDefault();
          })(e);
        }),
        t()("#Bank, #plumberName").keypress(function (e) {
          return (
            ((t = e).charCode > 64 && t.charCode < 91) ||
            (t.charCode > 96 && t.charCode < 123)
          );
          var t;
        }),
        t()("#floor, #bed").prop("maxlength", "2"),
        t()("#length, #breadth, #depth, #total,  #dia, #depthC, #totalC").prop(
          "maxlength",
          "3"
        ),
        t()("#roofTopArea, #totalPlotArea, #pavedArea").prop("maxlength", "6"),
        t()("#Mobile, #office, #home").prop("maxlength", "10"),
        t()("#email").on("blur", function () {
          o(t()("#email").val()) || alert("Not a valid Email Address.");
        }),
        t()("#isDJBEmp").click(function () {
          document.getElementById("isDJBEmp").checked
            ? (t()("#empId").prop("disabled", !1),
              t()("#empId").val(""),
              t()("#dateOfRet").prop("disabled", !1),
              t()("#dateOfRet").val(""),
              t()("#offName").prop("disabled", !1))
            : (t()("#empId").val(""),
              t()("#dateOfRet").val(""),
              t()("#empId").prop("disabled", !0),
              t()("#dateOfRet").prop("disabled", !0),
              t()("#offName").prop("disabled", !0));
        }),
        t()("#DevelopementCharge").click(function () {
          t()("#DevelopementCharge").prop("checked")
            ? t()("#waterRecipt").css("display", "block")
            : t()("#waterRecipt").css("display", "none");
        }),
        t()("#Sewrage").click(function () {
          t()("#Sewrage").prop("checked")
            ? t()("#sewerageRecipt").css("display", "block")
            : t()("#sewerageRecipt").css("display", "none");
        }),
        t()("#pinAdd").prop("maxlength", "6"),
        t()("#plot, #built").prop("maxlength", "20"),
        t()("#pinAdd").on("blur", function () {
          var e = t()("#pinAdd").val();
          a(s + u + "populateAreaAdd/" + e, "", d, function (e) {
            "Success" == e.message && 200 == e.statusCode
              ? (t()("#locaAdd").prop("disabled", !1),
                t()("#locaAdd").find("option:not(:first)").remove(),
                t().each(e.locaAddList, function (e, n) {
                  t()("#locaAdd").append(
                    t()("<option>", {
                      value: n.locaAddCombo,
                      text: n.locaAddCombo,
                      title: n.locaAddCode,
                    })
                  );
                }))
              : alert(e.message);
          });
        }),
        t()("#locaAdd").change(function () {
          var e = t()("#locaAdd").find("option:selected").attr("title");
          console.log("Locality code :::" + e),
            a(s + u + "populateSubAreaAdd/" + e, "", d, function (e) {
              "Success" == e.message && 200 == e.statusCode
                ? (t()("#subLocAdd").prop("disabled", !1),
                  t()("#subLocAdd").find("option:not(:first)").remove(),
                  t().each(e.subLocAddList, function (e, n) {
                    t()("#subLocAdd").append(
                      t()("<option>", {
                        value: n.subLocAddCombo,
                        text: n.subLocAddCombo,
                        title: n.subLocAddCode,
                      })
                    );
                  }))
                : alert(e.message);
            });
        }),
        t()("#subLocAdd").change(function () {
          var e = t()("#subLocAdd").find("option:selected").attr("title");
          console.log(e),
            t()("#SubLocationValue").val(e),
            console.log(
              "SUbLocalityValue::::" + t()("#SubLocationValue").val()
            );
        }),
        t()("#Property").change(function () {
          var e = t()("#Property").val(),
            n = e.replace("/", "%2F");
          "Hospital/Nursing Home" == e
            ? t()("#bed").prop("readonly", !1)
            : (t()("#bed").prop("readonly", !0), t()("#bed").val(""));
          var r = d;
          a(s + u + "watercon/" + n, "", r, function (n) {
            "Success" == n.message && 200 == n.statusCode
              ? (t()("#type_connection").find("option:not(:first)").remove(),
                t().each(n.waterConList, function (e, n) {
                  t()("#type_connection").append(
                    t()("<option>", { value: n.wc_code, text: n.wc_type })
                  );
                }),
                h(e, r))
              : alert(n.message);
          });
        });
      var h = function (e, n) {
        var r = e.replace("/", "%2F");
        a(s + u + "FetchUseCon/" + r, "", n, function (e) {
          "Success" == e.message && 200 == e.statusCode
            ? (t()("#Use_Connection").find("option:not(:first)").remove(),
              t().each(e.useConList, function (e, n) {
                t()("#Use_Connection").append(
                  t()("<option>", {
                    value: n.useConnection,
                    text: n.useConnection,
                  })
                );
              }))
            : alert(e.message);
        });
      };
      t()("#waterReceiptId, #sewerageReceiptId").prop("maxlength", "12"),
        t()("#sewrageFile, #waterFile").prop("disabled", !0),
        t()("#waterReceiptId").on("blur", function () {
          var e = t()("#waterReceiptId").val();
          a(s + u + c + "type:WATER,receipt:" + e, "", d, function (e) {
            "Success" == e.message && 200 == e.statusCode
              ? "INVALID" == e.receiptIdFlag
                ? t()("#waterFile").prop("disabled", !0)
                : t()("#waterFile").prop("disabled", !1)
              : alert(e.message);
          });
        }),
        t()("#sewerageReceiptId").on("blur", function () {
          var e = t()("#sewerageReceiptId").val();
          a(s + u + c + "type:Sewerage,receipt:" + e, "", d, function (e) {
            "Success" == e.message && 200 == e.statusCode
              ? "INVALID" == e.receiptIdFlag
                ? t()("#sewrageFile").prop("disabled", !0)
                : t()("#sewrageFile").prop("disabled", !1)
              : alert(e.message);
          });
        }),
        t()(".applyRWH").css("display", "none"),
        t()("#enableRWH").click(function () {
          this.checked
            ? (t()(".applyRWH").css("display", "block"),
              t()(".checkListRWHDivRef").css("display", "block"))
            : (t()("#corsAddress").val(""),
              t()("#roofTopArea").val(""),
              t()("#pavedArea").val(""),
              t()("#totalPlotArea").val(""),
              t()("#pitNo").val(""),
              t()("#length").val(""),
              t()("#breadth").val(""),
              t()("#depth").val(""),
              t()("#total").val(""),
              t()("#dia").val(""),
              t()("#depthC").val(""),
              t()("#totalC").val(""),
              t()(".applyRWH").css("display", "none"));
        }),
        t()("#circularDiv").css("display", "none"),
        t()("#circular").change(function () {
          "REC" == t()("#circular").val()
            ? (t()("#circularDiv").css("display", "none"),
              t()("#RectangalDiv").css("display", "block"),
              t()("#dia").val(""),
              t()("#depthC").val(""),
              t()("#totalC").val(""))
            : (t()("#circularDiv").css("display", "block"),
              t()("#RectangalDiv").css("display", "none"),
              t()("#length").val(""),
              t()("#breadth").val(""),
              t()("#depth").val(""),
              t()("#total").val(""));
        }),
        t()("#total").click(function () {
          var e = t()("#length").val(),
            n = t()("#breadth").val(),
            r = t()("#depth").val();
          "" != e &&
            "" != n &&
            "" != r &&
            "length" != e &&
            "breadth" != n &&
            "depth" != r &&
            t()("#total").val(parseFloat(e) * parseFloat(n) * parseFloat(r));
        }),
        t()("#totalC").click(function () {
          var e = t()("#dia").val(),
            n = t()("#depthC").val();
          if ("" != e && "" != n && "dia" != e && "depthC" != n) {
            var r =
              parseFloat(3.14 * parseFloat(e) * parseFloat(e) * parseFloat(n)) /
              4;
            t()("#totalC").val(r);
          }
        }),
        t()("#vfsFlag").change(function () {
          "SELF" == t()(void 0).val()
            ? ((document.getElementById("vfsID").value = ""),
              (document.getElementById("vfsID").disabled = !0))
            : ((document.getElementById("vfsID").value = "M SAHAYAK"),
              (document.getElementById("vfsID").disabled = !1));
        });
      var v = "";
      function g() {
        var e = t()("#zroLocation").val(),
          n = t()("#firstName").val(),
          r = t()("#FHname").val(),
          i = t()("#orgName").val(),
          a = t()("#govtFile").val(),
          s = t()("#email").val(),
          l = t()("#Mobile").val(),
          u = (t()("#office").val(), t()("#empId").val()),
          c = t()("#dateOfRet").val(),
          d = t()("#pinAdd").val(),
          f = t()("#locaAdd").val(),
          p = t()("#subLocAdd").val(),
          h = t()("#hNoAdd").val(),
          v = t()("#Property").val(),
          g = t()("#floor").val(),
          m = t()("#bed").val(),
          y = t()("#plot").val(),
          b = t()("#built").val(),
          w = t()("#type_connection").val(),
          x = t()("#Use_Connection").val(),
          C =
            (t()("#plumberName").val(),
            t()("#licenseNo").val(),
            t()("#Bank").val(),
            t()("#Branch").val(),
            t()("#MICR").val()),
          k = (t()("#Account").val(), t()("#corsAddress").val()),
          T = t()("#pPlan").val(),
          D = t()("#roofTopArea").val(),
          S = t()("#totalPlotArea").val(),
          A = t()("#pavedArea").val(),
          N = t()("#circular").val(),
          E = t()("#length").val(),
          P = t()("#breadth").val(),
          j = t()("#depth").val(),
          L = t()("#total").val(),
          M = t()("#dia").val(),
          I = t()("#depthC").val(),
          F = t()("#totalC").val(),
          R =
            (t()("#govt").val(),
            t()("#overflowSystem").val(),
            t()("#functional").val(),
            t()("#adeSystem").val(),
            t()("#conSys").val(),
            t()("#aggre").val(),
            t()("#char").val(),
            t()("#sand").val(),
            t()("#geo").val(),
            t()("#ProofIdentityCombo").val()),
          O = t()("#document_proofIdentity").val(),
          H = t()("#document_proofIdentity_upload").val(),
          $ = t()("#ownerStatusCombo").val(),
          q = t()("#document_ProofOfResidence_upload").val(),
          W = t()("#PropertyOwnerCombo").val(),
          B = t()("#document_PropertyOwner").val(),
          _ = t()("#document_PropertyOwner_upload").val(),
          V = t()("#signaturePath").val();
        if ("Select" == e)
          return (
            alert("ZRO Location is Mandatory"), t()("#zroLocation").focus(), !1
          );
        if ("" == n)
          return (
            alert("First Name is Mandatory.Please Enter First Name."),
            t()("#firstName").focus(),
            !1
          );
        if ("" == r)
          return (
            alert("Please put Father's/Husband's Name."),
            t()("#FHname").focus(),
            !1
          );
        if (document.getElementById("isGOVTEmp").checked) {
          if ("" == i)
            return (
              alert("For Govt. Org Organization Name is mandatory."),
              t()("#orgName").focus(),
              !1
            );
          if ("" == a)
            return (
              alert("Please upload ID proof of the organization."),
              t()("#orgName").focus(),
              !1
            );
        }
        if ("" != s) {
          var z = o(s);
          if (!z)
            return (
              alert("Not a valid Email Address."), t()("#email").focus(), !1
            );
          console.log("Email result::" + z);
        }
        if ("" == l)
          return (
            alert("Please Enter valid mobile number."),
            t()("#Mobile").focus(),
            !1
          );
        if (document.getElementById("isDJBEmp").checked) {
          if ("" == u)
            return alert("Employee Id is mandatory"), t()("#empId").focus(), !1;
          if ("" == c)
            return (
              alert("Date of Retirement is mandatory"),
              t()("#dateOfRet").focus(),
              !1
            );
        }
        if ("" == d)
          return (
            alert("Please Enter valid Pin Code."),
            t()("html, body").animate(
              { scrollTop: t()("#newCon-prop-address").offset().top },
              "slow"
            ),
            !1
          );
        if ("NA" == f)
          return alert("Please select Locality."), t()("#locaAdd").focus(), !1;
        if ("NA" == p)
          return (
            alert("Please select Sub Locality."), t()("#subLocAdd").focus(), !1
          );
        if ("" == h)
          return alert("Please fill House No."), t()("#hNoAdd").focus(), !1;
        if (
          document.getElementById("DevelopementCharge").checked &&
          t()("#waterReceiptId").val().length < 12
        )
          return (
            alert("Water Receipt ID Should be of 12 digits"),
            t()("#waterReceiptId").focus(),
            !1
          );
        if (
          document.getElementById("Sewrage").checked &&
          t()("#sewerageReceiptId").val().length < 12
        )
          return (
            alert("Sewerage Receipt ID Should be of 12 digits"),
            t()("#sewerageReceiptId").focus(),
            !1
          );
        if ("Select" == v)
          return (
            alert("Property type should not be blank."),
            t()("#Property").focus(),
            !1
          );
        if ("" == g)
          return (
            alert(" No. of Floors is Mandatory."), t()("#floor").focus(), !1
          );
        if ("Hospital/Nursing Home" == v && "" == m)
          return alert(" No. of Bed is Mandatory."), t()("#bed").focus(), !1;
        if ("" == y)
          return alert("Invalid Plot Area."), t()("#plot").focus(), !1;
        if ("" == b)
          return alert("Invalid Built Up Area."), t()("#built").focus(), !1;
        if (parseFloat(y) < parseFloat(b))
          return (
            alert("Built Up area should be less than or equal to Plot area."),
            t()("#built").focus(),
            !1
          );
        if (parseFloat(y) < parseFloat(0))
          return (
            alert("Plot Area should be greater than 0."),
            t()("#plot").focus(),
            !1
          );
        if (parseFloat(b) < parseFloat(0))
          return (
            alert("Plot Area should be greater than 0."),
            t()("#plot").focus(),
            !1
          );
        if ("Please Select" == w)
          return (
            alert("Water Connection Type is Mandatory."),
            t()("#type_connection").focus(),
            !1
          );
        if ("Please Select" == x)
          return (
            alert("Water Connection Use is Mandatory."),
            t()("#Use_Connection").focus(),
            !1
          );
        if ("" != C && C.length < 11)
          return (
            alert("IFSC Should Be of 11 digit and valid IFSC code."),
            t()("#MICR").focus(),
            !1
          );
        if ("" == x)
          return (
            alert("Water Connection Use is Mandatory."),
            t()("#Use_Connection").focus(),
            !1
          );
        if (document.getElementById("enableRWH").checked) {
          if ("" == k)
            return (
              alert("Please fill Correspondence/Site Address."),
              t()("#corsAddress").focus(),
              !1
            );
          if ("" == T)
            return (
              alert("Please Upload approved building sanction plan."),
              t()("#pPlan").focus(),
              !1
            );
          if ("" == D)
            return (
              alert("Please fill Roof Top Area."),
              t()("html, body").animate(
                { scrollTop: t()("#newCon-RWH-detail").offset().top },
                "slow"
              ),
              !1
            );
          if ("" == S)
            return (
              alert("Please fill Total Plot Area."),
              t()("html, body").animate(
                { scrollTop: t()("#newCon-RWH-detail").offset().top },
                "slow"
              ),
              !1
            );
          if ("" == A)
            return (
              alert(
                "Please fill Paved/Pucca floor with non-pollution catchment area."
              ),
              t()("html, body").animate(
                { scrollTop: t()("#newCon-RWH-detail").offset().top },
                "slow"
              ),
              !1
            );
          if ("REC" == N) {
            if ("" == E)
              return (
                alert("Please fill Length."),
                t()("html, body").animate(
                  { scrollTop: t()("#newCon-RWH-detail").offset().top },
                  "slow"
                ),
                !1
              );
            if ("" == P)
              return (
                alert("Please fill Breadth."),
                t()("html, body").animate(
                  { scrollTop: t()("#newCon-RWH-detail").offset().top },
                  "slow"
                ),
                !1
              );
            if ("" == j)
              return (
                alert("Please fill Depth."),
                t()("html, body").animate(
                  { scrollTop: t()("#newCon-RWH-detail").offset().top },
                  "slow"
                ),
                !1
              );
            if ("" == L)
              return (
                alert("Please fill Total."),
                t()("html, body").animate(
                  { scrollTop: t()("#newCon-RWH-detail").offset().top },
                  "slow"
                ),
                !1
              );
          } else {
            if ("" == M)
              return (
                alert("Please fill Dia."),
                t()("html, body").animate(
                  { scrollTop: t()("#newCon-RWH-detail").offset().top },
                  "slow"
                ),
                !1
              );
            if ("" == I)
              return (
                alert("Please fill Depth."),
                t()("html, body").animate(
                  { scrollTop: t()("#newCon-RWH-detail").offset().top },
                  "slow"
                ),
                !1
              );
            if ("" == F)
              return (
                alert("Please fill Total."),
                t()("html, body").animate(
                  { scrollTop: t()("#newCon-RWH-detail").offset().top },
                  "slow"
                ),
                !1
              );
          }
        }
        return "" == R
          ? (alert("Proof of Identity is Mandatory."),
            t()("#ProofIdentityCombo").focus(),
            !1)
          : "" == O
          ? (alert("Proof Of Identity Document No. is Mandatory."),
            t()("#document_proofIdentity").focus(),
            !1)
          : "" == H
          ? (alert("Upload proof of Identity document."),
            t()("#document_proofIdentity_upload").focus(),
            !1)
          : "" == $
          ? (alert("OwnerShip Status is Mandatory."),
            t()("#ownerStatusCombo").focus(),
            !1)
          : "" == q
          ? (alert("Upload Proof of Residence Document."),
            t()("#document_ProofOfResidence_upload").focus(),
            !1)
          : "" == W
          ? (alert("Propert OwnerShip is Mandatory."),
            t()("#PropertyOwnerCombo").focus(),
            !1)
          : "" == B
          ? (alert("Property OwnerShip Document is Mandatory."),
            t()("#document_PropertyOwner").focus(),
            !1)
          : "" == _
          ? (alert("Upload Property OwnerShip Document."),
            t()("#document_PropertyOwner_upload").focus(),
            !1)
          : "" == V
          ? (alert("Upload Signature."), t()("#signaturePath").focus(), !1)
          : (t()("#zroLocation").focus(),
            t()("#applyNewConnection").css("display", "block"),
            t()("#previewConn").css("display", "none"),
            !0);
      }
      t()("#applyNewConnection").on("click", function (e) {
        if ((e.preventDefault(), g())) {
          var n = new FormData(t()("#indexForm")[0]);
          t()("#appliName").html(""),
            t()("#appliType").html(""),
            t()("#appliRef").html(""),
            t()("#appliBuilt").html(""),
            t()("#appliDate").html(""),
            (function (e, n, i, o) {
              var a;
              $(".overlay").css("display", "block"),
                $.ajax(
                  (r(
                    (a = {
                      type: "POST",
                      enctype: "multipart/form-data",
                      url: "https://djb.gov.in/DJBRMSApp/rest/Services/NewConnection/CreateConnection",
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
                  r(a, "success", function (e) {
                    $(".overlay").css("display", "none"),
                      (function (e) {
                        201 == e.statusCode
                          ? (t()(".successDivRef").css("display", "block"),
                            console.log(JSON.stringify(e)),
                            (v = e.fileName),
                            t()("#appliName").html(e.Firstname + " " + e.Last),
                            t()("#appliType").html(e.ApplyFor),
                            t()("#appliRef").html(e.AplicationRefNo),
                            t()("#appliBuilt").html(e.built),
                            t()("#appliDate").html(new Date()),
                            t()("#indexForm")[0].reset())
                          : alert(e.message);
                      })(e);
                  }),
                  r(a, "error", function (e, t) {
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
                  a)
                );
            })(0, n);
        }
      }),
        t()("#filledApplication").on("click", function () {
          var e = document.location.origin;
          window.open(e + "/DJBPortal/portals/fileLoad?fileName=" + v);
        }),
        t()("#closeSuccesDiv").click(function () {
          t()(".successDivRef").css("display", "none");
        }),
        t()(".closeCheckListDiv").click(function () {
          t()(".checkListDivRef").css("display", "none");
        }),
        t()(".closeCheckListRWHDiv").click(function () {
          t()(".checkListRWHDivRef").css("display", "none");
        }),
        t()("#applyNewConnection").css("display", "none"),
        t()("#previewConn").css("display", "block"),
        t()("#previewConn").prop("disabled", !0),
        t()("#declaration").click(function () {
          document.getElementById("declaration").checked
            ? t()("#previewConn").prop("disabled", !1)
            : t()("#previewConn").prop("disabled", !0);
        }),
        t()("#previewConn").click(function (e) {
          e.preventDefault(), g();
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
            e.save("New-Connection-Reciept.pdf");
        });
    })();
})();
