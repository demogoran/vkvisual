if (function() {
    var e;
    function t() {
        e = {};
        for (var t = document.cookie.split(";"), a = /^[\s]*([^\s]+?)$/i, n = 0, o = t.length; o > n; n++) {
            var i = t[n].split("=");
            2 == i.length && (e[i[0].match(a)[1]] = unescape(i[1].match(a) ? i[1].match(a)[1] : ""))
        }
    }
    window.getCookie = function(a) {
        return t(),
        e[a]
    }
    ,
    window.setCookie = function(e, t, a, n) {
        var o = window.locDomain
          , i = "";
        if (a) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * a * 60 * 60 * 1e3),
            i = "; expires=" + r.toGMTString()
        }
        document.cookie = [e, "=", escape(t), i, "; path=/", o ? "; domain=." + o : "", n && "https:" == locProtocol ? "; secure" : ""].join("")
    }
    ,
    window.clearCookie = function(e) {
        setCookie(e, null , -1)
    }
}(),
function(e, t) {
    var a = !1
      , n = []
      , o = function() {
        if (!a && (a = !0,
        e.htmlNode = geByTag1("html"),
        e.bodyNode = geByTag1("body"),
        n)) {
            for (var o = null ; o = n.shift(); )
                o.call(t);
            n = null 
        }
    }
    ;
    t.addEventListener ? t.addEventListener("DOMContentLoaded", function() {
        t.removeEventListener("DOMContentLoaded", arguments.callee, !1),
        o()
    }, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function() {
        "complete" === t.readyState && (t.detachEvent("onreadystatechange", arguments.callee),
        o())
    }),
    e.addEventListener ? e.addEventListener("load", o, !1) : e.attachEvent ? e.attachEvent("onload", o) : e.onload = o;
    function i(e) {
        a ? e.call(t) : n.push(e)
    }
    e.onDOMReady = i
}(window, document),
!window._ua)
    var _ua = navigator.userAgent.toLowerCase();
var browser = {
    version: (_ua.match(/.+(?:me|ox|on|rv|it|era|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
    opera: /opera/i.test(_ua),
    msie: /msie/i.test(_ua) && !/opera/i.test(_ua),
    msie6: /msie 6/i.test(_ua) && !/opera/i.test(_ua),
    msie7: /msie 7/i.test(_ua) && !/opera/i.test(_ua),
    msie8: /msie 8/i.test(_ua) && !/opera/i.test(_ua),
    msie9: /msie 9/i.test(_ua) && !/opera/i.test(_ua),
    mozilla: /firefox/i.test(_ua),
    chrome: /chrome/i.test(_ua),
    safari: !/chrome/i.test(_ua) && /webkit|safari|khtml/i.test(_ua),
    iphone: /iphone/i.test(_ua),
    ipod: /ipod/i.test(_ua),
    iphone4: /iphone.*OS 4/i.test(_ua),
    ipod4: /ipod.*OS 4/i.test(_ua),
    ipad: /ipad/i.test(_ua),
    ios: +(_ua.match(/.+(?:ipod|ipad|iphone.*os) ([\d.]+)_/i) || [0, 0])[1],
    android: /android/i.test(_ua),
    bada: /bada/i.test(_ua),
    opera_mini: /opera mini/i.test(_ua),
    mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile/i.test(_ua),
    msie_mobile: /iemobile/i.test(_ua),
    safari_mobile: /iphone|ipod|ipad/i.test(_ua),
    opera_mobile: /opera mini|opera mobi/i.test(_ua),
    mac: /mac/i.test(_ua)
}
  , mobPlatforms = {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1
};
browser.desktop = (browser.opera || browser.msie || browser.mozilla || browser.chrome || browser.safari) && !browser.mobile;
var isTouch = "ontouchstart" in window
  , has3d = function(e) {
    if ("WebKitCSSMatrix" in e && "m11" in new WebKitCSSMatrix)
        return !0;
    if ("MSCSSMatrix" in e && "m11" in new MSCSSMatrix)
        return !0;
    if ("CSSMatrix" in e && "m11" in new CSSMatrix)
        return !0;
    try {
        var t = ce("div")
          , a = getCssPropertyName(t, "transform");
        return a ? (t.style[a] = "translate3d(1px,1px,1px)",
        t.style[a] && "none" != t.style[a]) : !1
    } catch (n) {
        return !1
    }
}(window);
function setDocumentDomain() {
    var e = (document.domain || "").match(/(m\.)?([a-zA-Z]+\.[a-zA-Z]+\.?)$/);
    window.locDomain = "https:" == location.protocol ? e[2] : e[0];
    var t = navigator.userAgent.toLowerCase();
    (/opera/i.test(t) || !/msie 6/i.test(t) || document.domain != locDomain) && (document.domain = locDomain)
}
function isUndefined(e) {
    return "undefined" == typeof e
}
function isFunction(e) {
    return "[object Function]" === Object.prototype.toString.call(e)
}
function isArray(e) {
    return "[object Array]" === Object.prototype.toString.call(e)
}
function isObject(e) {
    return "[object Object]" === Object.prototype.toString.call(e)
}
function isEmpty(e) {
    if ("[object Object]" !== Object.prototype.toString.call(e))
        return !1;
    for (var t in e)
        if (e.hasOwnProperty(t))
            return !1;
    return !0
}
function escapeRE(e) {
    return e ? e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1") : ""
}
function htsc(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;").replace(/%/g, "&#37;")
}
function escapeAttr(e) {
    return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;")
}
function unescapeAttr(e) {
    return e.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
}
function replaceEntities(e) {
    return ce("textarea", {
        innerHTML: (e || "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }).value
}
function escapeStr(e) {
    return e.replace(/\'/g, "\\'")
}
function stripTags(e) {
    return e.replace(/<[^>]+>/g, "")
}
function srand() {
    return Math.random().toString(36).substr(2)
}
function utf2win(e) {
    return unescape(encodeURIComponent(e))
}
function isHttpHref(e) {
    var t = (e + "").split(":")
      , a = t[1] && t[0] ? t[0] + ":" : location.protocol;
    return "http:" == a || "https:" == a
}
function vkNow() {
    return +new Date
}
function bind() {
    var e = Array.prototype.slice.call(arguments)
      , t = e.shift()
      , a = e.shift();
    return function() {
        var n = Array.prototype.slice.call(arguments);
        return t.apply(a, e.concat(n))
    }
}
function intval(e) {
    return e === !0 ? 1 : parseInt(e) || 0
}
function floatval(e) {
    return e === !0 ? 1 : parseFloat(e) || 0
}
function qs2obj(e) {
    if (!e)
        return {};
    for (var t = {}, a = e.toString().split("&"), n = 0, o = a.length; o > n; n++) {
        var i = a[n].split("=");
        i[0] && (t[decodeURIComponent(i[0])] = decodeURIComponent(i[1] || ""))
    }
    return t
}
function obj2qs(e) {
    if (!e)
        return "";
    var t = [];
    for (var a in e)
        t.push(encodeURIComponent(a) + "=" + encodeURIComponent(e[a].toString() || ""));
    return t.length ? "?" + t.join("&") : ""
}
function parseJSON(obj) {
    try {
        return JSON.parse(obj)
    } catch (e) {
        return eval("(" + obj + ")")
    }
}
function lsCheck() {
    return void 0 !== window.localStorage && void 0 !== window.JSON
}
function lsSet(e, t) {
    if ("undefined" != typeof t)
        try {
            return localStorage.setItem(e, JSON.stringify(t))
        } catch (a) {}
    else
        try {
            return localStorage.removeItem(e)
        } catch (a) {}
    return !1
}
function lsGet(e) {
    try {
        return JSON.parse(localStorage.getItem(e))
    } catch (t) {}
    return !1
}
function ssCheck() {
    return void 0 !== window.sessionStorage && void 0 !== window.JSON
}
function ssSet(e, t) {
    if ("undefined" != typeof t)
        try {
            return sessionStorage.setItem(e, JSON.stringify(t))
        } catch (a) {}
    else
        try {
            return sessionStorage.removeItem(e)
        } catch (a) {}
    return !1
}
function ssGet(e) {
    try {
        return JSON.parse(sessionStorage.getItem(e))
    } catch (t) {}
    return !1
}
function getValues(e) {
    if (!isArray(e))
        return e.call ? e() : e;
    for (var t = [], a = 0, n = e.length; n > a; a++)
        t.push(getValues(e[a]));
    return t
}
function len(e) {
    if (isArray(e))
        return e.length;
    if (isObject(e)) {
        var t = 0;
        for (var a in e)
            t++;
        return t
    }
    return 0
}
function realSubstr(e, t) {
    return e = e || "",
    e.length > t && (e = e.substr(0, t - 3),
    e = e.replace(/&[^;]{0,6}$/, ""),
    e = e.replace(/<[^>]*$/, ""),
    e = e.replace(/(\s|<br\s*\/?>)+$/, ""),
    e += ".."),
    e
}
function formatNum(e) {
    if (!window.langConfig)
        return e;
    for (var t = e.toString().split("."), a = [], n = t[0].length - 3; n > -3; n -= 3)
        a.unshift(t[0].slice(n > 0 ? n : 0, n + 3));
    return t[0] = a.join(langConfig.numDel),
    e = t.join(langConfig.numDec)
}
!function() {
    var e = vkNow();
    window.clog = function() {
        if (vk.__debug)
            try {
                if (window.console && console.log) {
                    var t = Array.prototype.slice.call(arguments);
                    t.unshift("[" + (vkNow() - e) / 1e3 + "] "),
                    browser.msie || browser.mobile && !browser.safari_mobile ? console.log(t.join(" ")) : console.log.apply(console, t)
                }
            } catch (a) {}
    }
}();
function each(e, t) {
    if (!e)
        return e;
    if (isObject(e) || "undefined" == typeof e.length) {
        for (var a in e)
            if (e.hasOwnProperty(a) && t.call(e[a], a, e[a]) === !1)
                break
    } else
        for (var n = 0, o = e.length; o > n && t.call(e[n], n, e[n]) !== !1; n++)
            ;
    return e
}
function copy(e) {
    return isArray(e) ? e.concat([]) : isObject(e) ? extend({}, e) : e
}
var rf = function() {
    return !1
}
;
function addEvent(e, t, a) {
    if (e = ge(e),
    a = a || rf,
    e && 3 != e.nodeType && 8 != e.nodeType) {
        e.setInterval && e != window && (e = window);
        for (var t = t.split(" "), n = 0, o = t.length; o > n; n++) {
            var i = t[n];
            e.addEventListener ? e.addEventListener(i, a, !1) : e.attachEvent && e.attachEvent("on" + i, a)
        }
    }
}
function removeEvent(e, t, a) {
    if (e = ge(e),
    a = a || rf,
    e && 3 != e.nodeType && 8 != e.nodeType)
        for (var t = t.split(" "), n = 0, o = t.length; o > n; n++) {
            var i = t[n];
            e.removeEventListener ? e.removeEventListener(i, a, !1) : e.detachEvent && e.detachEvent("on" + i, a)
        }
}
function preventEvent(e) {
    return (e = e || window.event) ? (e = e.originalEvent || e,
    e.preventDefault && e.preventDefault(),
    e.returnValue = !1,
    !1) : !1
}
function stopEvent(e) {
    return (e = e || window.event) ? (e = e.originalEvent || e,
    e.stopPropagation && e.stopPropagation(),
    e.cancelBubble = !0,
    !1) : !1
}
function cancelEvent(e) {
    return (e = e || window.event) ? (e = e.originalEvent || e,
    e.preventDefault && e.preventDefault(),
    e.stopPropagation && e.stopPropagation(),
    e.cancelBubble = !0,
    e.returnValue = !1,
    !1) : !1
}
function checkEvent(e) {
    return !(!(e = e || window.event) || window.PointerEvent && e instanceof PointerEvent || "click" != e.type && "mousedown" != e.type && "mouseup" != e.type || !(e.which > 1 || e.button > 1 || e.ctrlKey || e.shiftKey || e.metaKey))
}
function onCtrlEnter(e, t, a) {
    if (t = t || window.event,
    10 == t.keyCode || 13 == t.keyCode && (t.ctrlKey || t.metaKey && browser.mac)) {
        if (isUndefined(a)) {
            var n = submitBtn(e);
            n && n.click()
        } else
            a.call(e);
        cancelEvent(t)
    }
}
function submitBtn(e) {
    if (!e)
        return !1;
    var t = "form" == tag(e) ? e : e.form || gpeByTag("form", e);
    if (!t)
        return !1;
    for (var a in t) {
        var n = t[a];
        if ("input" == tag(n) && "submit" == n.type && /(^|\\s)(small_)?button(\\s|$)/i.test(n.className) && !n.name)
            return n
    }
    return !1
}
function createIframe(e, t) {
    e = extend(e || {}, {
        border: "0"
    }),
    t = extend(t || {}, {
        position: "absolute",
        width: 1,
        height: 1,
        left: 10
    });
    var a = ce("iframe", e, t);
    return append(a, "vk_utils"),
    a
}
function winToUtf(e) {
    return e.replace(/&#(\d\d+);/g, function(e, t) {
        return t = intval(t),
        t >= 32 ? String.fromCharCode(t) : e
    }).replace(/&quot;/gi, '"').replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
}
function shortCurrency() {
    var e = {};
    each(geByClass("_short_currency"), function() {
        var t = this.getAttribute("data-short") || ""
          , a = winToUtf(t).length
          , n = getStyle(this, "fontFamily") || "tahoma,arial,sans-serif";
        if (!t)
            return !0;
        if (isUndefined(e[n])) {
            for (var o = "", i = a - 1; i >= 0; i--)
                o += "&#8399;";
            var r = ce("div", {
                innerHTML: "<b>" + t + "</b><b>" + o + "</b>"
            }, {
                fontFamily: n,
                fontSize: "24px"
            });
            ge("vk_utils").appendChild(r),
            e[n] = Math.abs(r.firstChild.offsetWidth - r.lastChild.offsetWidth) >= 3 * a,
            remove(r)
        }
        e[n] && val(this, t)
    })
}
function checkNav(e, t) {
    if (e = ge(e),
    !e)
        return !1;
    do
        if (checkElementNav(e, t))
            return e;
    while (e = e.parentNode);return !1
}
function checkElementNav(e, t) {
    if (!window.al || !al.ver)
        return !1;
    if (!e)
        return !1;
    if (t = t || {},
    "a" == tag(e)) {
        if ((t.skip_onclick || !e.getAttribute("onclick")) && (e.getAttribute("href") || e.getAttribute("data-href")) || hasClass("al_nav", e)) {
            if (e.hostname)
                var a = e.hostname;
            else
                var n = e.href || attr(e, "data-href")
                  , a = (/^(https?:)\/\/([^:\/]+)?(?::(\d+))?\/?(.*)$/i.exec(n) || [])[2];
            if ("_blank" !== e.target && (!a || a == location.hostname) && isHttpHref(n) || t.skip_blank || t.skip_clicable)
                return !0
        }
    } else if ("input" == tag(e)) {
        if (e.form && ("submit" == e.type || "image" == e.type) && (t.skip_onclick || !e.getAttribute("onclick")) || hasClass("al_nav", e))
            return !0
    } else if ("label" == tag(e) && t.skip_clicable && (e.htmlFor || geByTag1("input", e) && (t.skip_onclick || !e.getAttribute("onclick")) || hasClass("al_nav", e)))
        return !0;
    return !1
}
function checkTouchHover(e) {
    if (e = ge(e),
    !e)
        return !1;
    do {
        if ("a" == tag(e) || hasClass("al_photo", e))
            return e;
        if ("label" == tag(e) && hasClass("option_row", e))
            return e;
        if (hasClass("_touched", e))
            return e
    } while (e = e.parentNode);return !1
}
function parseCyr(e, t) {
    for (var a = e, n = ["yo", "zh", "kh", "ts", "ch", "sch", "shch", "sh", "eh", "yu", "ya", "YO", "ZH", "KH", "TS", "CH", "SCH", "SHCH", "SH", "EH", "YU", "YA", "'"], o = ["ё", "ж", "х", "ц", "ч", "щ", "щ", "ш", "э", "ю", "я", "Ё", "Ж", "Х", "Ц", "Ч", "Щ", "Щ", "Ш", "Э", "Ю", "Я", "ь"], i = 0, r = n.length; r > i; i++)
        a = t ? a.split(n[i]).join(o[i]) : a.split(o[i]).join(n[i]);
    for (var s = "abvgdezijklmnoprstufhcyABVGDEZIJKLMNOPRSTUFHCYёЁ", l = "абвгдезийклмнопрстуфхцыАБВГДЕЗИЙКЛМНОПРСТУФХЦЫеЕ", i = 0, r = s.length; r > i; i++)
        a = t ? a.split(s.charAt(i)).join(l.charAt(i)) : a.split(l.charAt(i)).join(s.charAt(i));
    return a == e ? null  : a
}
function parseLat(e) {
    return parseCyr(e, !0)
}
function parseRusKeys(e, t, a) {
    if (!t)
        return null ;
    for (var n = e, o = "qwertyuiop[]asdfghjkl;'zxcvbnm,./`QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?~", i = "йцукенгшщзхъфывапролджэячсмитьбю.ёЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,Ё", r = 0, s = o.length; s > r; r++)
        n = a ? n.split(o.charAt(r)).join(i.charAt(r)) : n.split(i.charAt(r)).join(o.charAt(r));
    return n == e ? null  : n
}
function parseLatKeys(e, t) {
    return parseRusKeys(e, t, !0)
}
function scrollLeft() {
    return htmlNode.scrollLeft || bodyNode.scrollLeft || window.scrollX || 0
}
function scrollTop(e, t) {
    return "undefined" == typeof e ? htmlNode.scrollTop || bodyNode.scrollTop || window.scrollY || 0 : void (t ? setTimeout(function() {
        window.scrollTo(0, Math.max(browser.android ? 1 : 0, e))
    }, t) : window.scrollTo(0, Math.max(browser.android ? 1 : 0, e)))
}
function se() {
    var e = []
      , t = Array.prototype.slice.call(arguments);
    return function(a, n) {
        if (a)
            if (a.apply)
                e.push(a);
            else if ("__clear" === a)
                if (n) {
                    for (var o = 0, i = e.length; i > o; o++)
                        if (e[o] === n) {
                            e.splice(o, 1);
                            break
                        }
                } else
                    e = [];
            else {
                var r = Array.prototype.slice.call(arguments);
                r.shift();
                for (var s = 0, i = e.length; i > s; s++)
                    e[s].apply(window, getValues(t).concat(r))
            }
    }
}
window.onBodyScroll = se(scrollTop),
window.onBodyResize = se(),
addEvent(window, "scroll touchmove", function() {
    onBodyScroll(!0)
}),
addEvent(window, "error", function(e) {
    clog(e.lineno + ": " + e.message)
});
function onBodyScrollForce(e) {
    e ? setTimeout(function() {
        onBodyScroll(!0)
    }, e) : onDOMReady(function() {
        onBodyScroll(!0)
    })
}
function sgFix() {
    if (/galaxy|gt\-/i.test(_ua)) {
        window.vkSGi = 0,
        window.vkAjax = ajax,
        window.vkPage = page;
        function e() {
            return ++vkSGi > 25 ? void delete window.vkSGi : ajax !== vkAjax || page !== vkPage ? (ajax = vkAjax,
            page = vkPage,
            clog("SG fixed"),
            void delete window.vkSGi) : void setTimeout(e, 200)
        }
        e()
    }
}
function hideUnvisibleItems(e) {
    if (cur.alHiddenObjects) {
        var t = getValues(cur.alHiddenObjects);
        if (t) {
            e = e || {};
            var a = e.delta || 3 * getCh()
              , n = scrollTop()
              , o = n + getCh()
              , i = n - a
              , r = o + a
              , s = []
              , l = []
              , c = null 
              , u = null ;
            if (each(t, function(e, t) {
                var a = gpeByClass("ali_wrap", t);
                if (!a)
                    return !0;
                var n = a.offsetHeight
                  , o = getY(a)
                  , d = o + n
                  , p = isVisible(t);
                i > d || o > r ? p && s.push([a, t, n]) : p ? c || (c = a,
                u = o) : l.push([a, t])
            }),
            each(l, function(e, t) {
                var a = t[0]
                  , n = t[1];
                setStyle(a, "height", "auto"),
                show(n)
            }),
            each(s, function(e, t) {
                var a = t[0]
                  , n = t[1]
                  , o = t[2];
                setStyle(a, "height", o),
                hide(n)
            }),
            c && u) {
                var d = getY(c);
                d != u && scrollTop(n + (d - u))
            }
        }
    }
}
function initObjectsHideByScroll(e, t) {
    e && (cur.alHiddenObjects = e,
    onBodyScroll(function() {
        hideUnvisibleItems(t)
    }),
    onDOMReady(function() {
        hideUnvisibleItems(t)
    }))
}
function checkPostsSeen() {
    if (cur.alPostsStatsObjects) {
        var e = getValues(cur.alPostsStatsObjects);
        if (e) {
            var t = scrollTop()
              , a = t + getCh()
              , n = [];
            each(e, function(e, o) {
                if (attr(o, "data-ignore"))
                    return !0;
                var i = getY(o)
                  , r = i + o.offsetHeight
                  , s = (isVisible(o),
                attr(o, "data-clicked"));
                return bits = o.bits || 0,
                bits >= 3 ? !0 : t > r || i > a ? !0 : (bits |= i >= t && a > i || s ? 1 : 0,
                bits |= r >= t && a > r || s ? 2 : 0,
                void (bits && (o.bits = bits,
                3 == bits && (n.push(pStats.postsGetRaws(o)),
                pStats.viewed(o)))))
            }),
            pStats.seen(n)
        }
    }
}
function initPostsStats(e) {
    e && (cur.alPostsStatsObjects = e,
    onBodyScroll(function() {
        checkPostsSeen()
    }),
    onDOMReady(function() {
        checkPostsSeen()
    }))
}
function initAutoScroll(e, t, a) {
    if (e && t) {
        a = a || {};
        var n = a.delta || !1;
        onBodyScroll(function(a) {
            var o = getValues(e);
            if (o) {
                var i = getY(o)
                  , r = getCh()
                  , s = i - a - r;
                i > 0 && (n || 2 * r) > s && t.call(o)
            }
        })
    }
}
function autoScroll(e, t, a) {
    a = a || {};
    var n = getValues(e)
      , o = ge("show_more_loading")
      , i = a.no_cache || !1
      , r = function() {
        ajax.click(this, t, {
            use_cache: !i
        })
    }
    ;
    !n && o && r.call(o),
    initAutoScroll(e, r, a),
    a.hide_objects && initObjectsHideByScroll(a.hide_objects)
}
function scrollToEl(e, t, a) {
    e = ge(e) || window,
    t = t || 0;
    var n = (e === window ? 1 : getY(e)) - t;
    scrollTop(n, a)
}
function scrollToHash(e) {
    if (e = e || nav.hash || location.hash,
    "#" === e[0] && (e = e.substr(1)),
    e) {
        var t = geBySel("a[name]");
        t === !1 && (t = geByTag("a")),
        each(t, function(t, a) {
            return a.name == e ? (scrollToEl(a),
            !1) : void 0
        })
    }
}
function lockButton(e) {
    var t = ge(e);
    if (/(^|\s)(small_)?button(\s|$)/i.test(t.className)) {
        var a = ce("button", {
            id: t.id,
            className: t.className,
            innerHTML: '<span class="button_locked"><b class="button_locked_label">' + htsc(val(t)) + "</b></span>",
            onclick: function(e) {
                return cancelEvent(e)
            },
            real_btn: t
        });
        t.fake_btn = a,
        before(a, t),
        remove(t)
    }
}
function unlockButton(e) {
    var t = ge(e);
    t.real_btn ? (before(t.real_btn, t),
    remove(t),
    t.real_btn.fake_btn = null ,
    t.real_btn = null ) : t.fake_btn && (before(t, t.fake_btn),
    remove(t.fake_btn),
    t.fake_btn.real_btn = null ,
    t.fake_btn = null )
}
function extend() {
    var e = Array.prototype.slice.call(arguments)
      , t = e.shift();
    if (!e.length)
        return t;
    for (var a = 0, n = e.length; n > a; a++)
        for (var o in e[a])
            "layerX" != o && "layerY" != o && (t[o] = e[a][o]);
    return t
}
function ge(e) {
    return "string" == typeof e ? document.getElementById(e) : e
}
function geByClass(e, t, a) {
    if (t = ge(t) || document,
    a = a || "*",
    t.getElementsByClassName) {
        var n = t.getElementsByClassName(e);
        if ("*" == a)
            return Array.prototype.slice.call(n);
        var o = [];
        a = a.toUpperCase();
        for (var i = 0, r = n.length; r > i; i++)
            n[i].tagName.toUpperCase() == a && o.push(n[i]);
        return o
    }
    for (var n = geByTag(a, t), o = [], s = new RegExp("(^|\\s)" + escapeRE(e) + "(\\s|$)"), i = 0, r = n.length; r > i; i++)
        s.test(n[i].className) && o.push(n[i]);
    return o
}
function geByClass1(e, t, a) {
    return geByClass(e, t, a)[0]
}
function gpeByClass(e, t) {
    if (t = ge(t),
    !t)
        return null ;
    for (; t = t.parentNode; )
        if (hasClass(e, t))
            return t;
    return null 
}
function geByTag(e, t) {
    return (ge(t) || document).getElementsByTagName(e)
}
function geByTag1(e, t) {
    return geByTag(e, t)[0]
}
function gpeByTag(e, t) {
    if (t = ge(t),
    !t)
        return null ;
    for (e = e.toUpperCase(); t = t.parentNode; )
        if (t.tagName && t.tagName.toUpperCase() == e)
            return t;
    return null 
}
function geBySel(e, t) {
    return t = ge(t) || document,
    t.querySelectorAll ? t.querySelectorAll(e) : !1
}
function geBySel1(e, t) {
    return t = ge(t) || document,
    t.querySelector ? t.querySelector(e) : !1
}
function append(e, t) {
    return e = ge(e),
    t = ge(t),
    e && t && t.appendChild(e) || !1
}
function before(e, t) {
    return t = ge(t),
    t && t.parentNode && t.parentNode.insertBefore(ge(e), t) || !1
}
function after(e, t) {
    return t = ge(t),
    t && t.parentNode && t.parentNode.insertBefore(ge(e), t.nextSibling) || !1
}
function replace(e, t) {
    before(e, t) && remove(t)
}
function remove(e) {
    return e = ge(e),
    e && e.parentNode ? e.parentNode.removeChild(e) : !1
}
function clone(e) {
    return e = ge(e),
    e ? e.cloneNode(!0) : !1
}
function reflow(e) {
    e = ge(e);
    try {
        {
            e.offsetWidth + e.offsetHeight
        }
    } catch (t) {}
}
function tag(e) {
    return e = ge(e),
    (e && e.tagName || "").toLowerCase()
}
function outer(e) {
    return e = ge(e),
    e ? val(ce("div").appendChild(clone(e)).parentNode) : ""
}
function show(e) {
    var t = ge(e);
    t && (t.style.display = t.oldstyle || (hasClass("_ib", t) ? "inline-block" : hasClass("_i", t) || "span" == tag(t) ? "inline" : "block"))
}
function hide(e) {
    var t = ge(e);
    t && ("none" != t.style.display && (t.oldstyle = t.style.display),
    t.style.display = "none")
}
function isVisible(e) {
    var t = ge(e);
    return t && t.style ? "none" != t.style.display : !1
}
function toggle(e, t) {
    "undefined" == typeof t && (t = !isVisible(e)),
    t && isVisible(e) || (t || isVisible(e)) && (t ? show : hide)(e)
}
function ce(e, t, a) {
    var n = document.createElement(e);
    return t && extend(n, t),
    a && setStyle(n, a),
    n
}
window.cdf = function(e) {
    var t = e.createDocumentFragment()
      , a = e.createElement("div")
      , n = e.createRange && e.createRange();
    return t && t.appendChild(a),
    n && n.selectNodeContents && n.selectNodeContents(a),
    t ? n && n.createContextualFragment ? function(t) {
        return t ? n.createContextualFragment(t) : e.createDocumentFragment()
    }
     : function(t) {
        if (!t)
            return e.createDocumentFragment();
        a.innerHTML = t;
        for (var n = e.createDocumentFragment(); a.firstChild; )
            n.appendChild(a.firstChild);
        return n
    }
     : function(e) {
        return ce("div", {
            innerHTML: e
        })
    }
}(document);
function elfocus(e, t, a) {
    e = ge(e);
    try {
        if (e.focus(),
        ("undefined" == typeof t || t === !1) && (t = e.value.length),
        ("undefined" == typeof a || a === !1) && (a = t),
        e.createTextRange) {
            var n = e.createTextRange();
            n.collapse(!0),
            n.moveEnd("character", t),
            n.moveStart("character", a),
            n.select()
        } else
            e.setSelectionRange && e.setSelectionRange(t, a)
    } catch (o) {}
}
function elblur(e) {
    e = ge(e),
    e && e.blur && e.blur()
}
function val(e, t) {
    if (e = ge(e),
    !e)
        return "";
    var a = e.tagName.toLowerCase()
      , n = "input" == a || "textarea" == a || "select" == a
      , o = n && ("radio" == e.type || "checkbox" == e.type);
    return "undefined" == typeof t ? n ? o ? e.checked : e.value : e.innerHTML : void (n ? o ? e.checked = t : e.value = t : (e.innerHTML = t,
    "a" != a && (ajax.prepare_nav(e),
    ajax.prepare_click(e),
    ajax.onPrepared(!0, e))))
}
function attr(e, t, a) {
    return (e = ge(e)) ? "undefined" == typeof a ? "data-" == t.substr(0, 5) && e.dataset ? e.dataset[t.substr(5).replace(/-([a-z0-9])/, function(e, t) {
        return t.toUpperCase()
    })] || !1 : e.getAttribute && e.getAttribute(t) || !1 : a === !1 ? e.removeAttribute && e.removeAttribute(t) || !1 : void (e.setAttribute && e.setAttribute(t, a)) : void 0
}
function cssToJs(e, t) {
    return t ? t + (e || "").replace(/(?:^|-)([a-z])/g, function(e, t) {
        return (t || "").toUpperCase()
    }) : (e || "").replace(/-([a-z])/g, function(e, t) {
        return (t || "").toUpperCase()
    })
}
function getCssPropertyName(e, t, a) {
    e = ge(e) || ce("div");
    for (var n = ["webkit", "Moz", "ms", "O", ""], o = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0, r = n.length; r > i; i++) {
        var s = n[i]
          , l = cssToJs(t, s);
        if ("undefined" != typeof e.style[l])
            return a ? o[i] + t : l
    }
    return !1
}
function cssValue(e, t) {
    if ("number" == typeof e) {
        var a = 1e7;
        e = Math.round(e * a) / a + (t || "")
    }
    return e
}
function getStyle(e, t, a) {
    if (e = ge(e),
    !e)
        return !1;
    if (isArray(t)) {
        var n = {};
        return each(t, function(t, a) {
            n[a] = getStyle(e, a)
        }),
        n
    }
    if (isUndefined(a) && (a = !0),
    /transform(-origin)?|transition(-duration)?/i.test(t) && (t = getCssPropertyName(e, t),
    !t))
        return !1;
    if (!a && "opacity" == t && browser.msie) {
        var o = e.style.filter;
        return o ? o.indexOf("opacity=") >= 0 ? parseFloat(o.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1" : ""
    }
    if (!a && e.style && (e.style[t] || "height" == t))
        return e.style[t];
    var i, r = document.defaultView || window;
    if (r.getComputedStyle) {
        t = t.replace(/([A-Z])/g, "-$1").toLowerCase();
        var s = r.getComputedStyle(e, null );
        s && (i = s.getPropertyValue(t))
    } else if (e.currentStyle) {
        if ("opacity" == t && browser.msie) {
            var o = e.currentStyle.filter;
            return o && o.indexOf("opacity=") >= 0 ? parseFloat(o.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1"
        }
        var l = t.replace(/\-(\w)/g, function(e, t) {
            return t.toUpperCase()
        });
        i = e.currentStyle[t] || e.currentStyle[l],
        "auto" == i && (i = 0),
        i = (i + "").split(" "),
        each(i, function(t, a) {
            if (!/^\d+(px)?$/i.test(a) && /^\d/.test(a)) {
                var n = e.style
                  , o = n.left
                  , r = e.runtimeStyle.left;
                e.runtimeStyle.left = e.currentStyle.left,
                n.left = a || 0,
                i[t] = n.pixelLeft + "px",
                n.left = o,
                e.runtimeStyle.left = r
            }
        }),
        i = i.join(" ")
    }
    if (a && ("width" == t || "height" == t)) {
        var c = "width" == t ? getW(e) : getH(e);
        i = (intval(i) ? Math.max(floatval(i), c) : c) + "px"
    }
    return i
}
extend(getStyle, {
    transform: function(e) {
        var t, a = getStyle(e, "transform");
        return a ? {
            scale: (t = a.match(/(^|\s+)scale\(([0-9.]+)\)(\s+|$)/)) && t[2] || 1,
            scale3d: (t = a.match(/(^|\s+)scale3d\(([0-9.]+,\s+([0-9.]+),\s+([0-9.]+))\)(\s+|$)/)) && t[2] || 1,
            rotate: (t = a.match(/(^|\s+)rotate\(([0-9.-]+)(deg)?\)(\s+|$)/)) && +t[2] || 0,
            translate: (t = a.match(/(^|\s+)translate\(([0-9.-]+)(px)?(?:,\s+([0-9.-]+)(px)?)\)(\s+|$)/)) && [+t[2], +t[4]] || [0, 0],
            translate3d: (t = a.match(/(^|\s+)translate3d\(([0-9.-]+)(px)?(?:,\s+([0-9.-]+)(px)?)(?:,\s+([0-9.-]+)(px)?)\)(\s+|$)/)) && [+t[2], +t[4], +t[6]] || [0, 0, 0]
        } : {
            scale: 1,
            rotate: 0,
            translate: [0, 0]
        }
    }
});
function setStyle(e, t, a) {
    if (e = ge(e),
    e && e.style) {
        if (isObject(t))
            return each(t, function(t, a) {
                setStyle(e, t, a)
            });
        var n = "number" == typeof a;
        n && /height|width/i.test(t) && (a = Math.abs(a)),
        (!/transform(-origin)?|transition(-duration)?/i.test(t) || (t = getCssPropertyName(e, t))) && (e.style[t] = n && !/z-?index|font-?weight|opacity|zoom|line-?height/i.test(t) ? a + "px" : a)
    }
}
extend(setStyle, {
    animate: function(e, t, a, n) {
        var o = getCssPropertyName(e, "transition");
        if (o) {
            if (!t)
                return e.onAnimationEnd ? e.onAnimationEnd() : setStyle.transition(e),
                setStyle;
            var i = isObject(a)
              , r = (i ? a.duration : a) || 200
              , s = a.func || "ease";
            setStyle.transition(e, t, r, s),
            e.onAnimationEnd && (browser.opera ? e.removeEventListener("oTransitionEnd", e.onAnimationEnd) : removeEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd)),
            e.onAnimationEnd = function() {
                return browser.opera ? e.removeEventListener("oTransitionEnd", e.onAnimationEnd) : removeEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd),
                e.onAnimationEnd = null ,
                setStyle.transition(e),
                n && n(e),
                !1
            }
            ,
            browser.opera ? e.addEventListener("oTransitionEnd", e.onAnimationEnd) : addEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd)
        }
        return setStyle
    },
    transform: function(e, t, a, n) {
        var o = [];
        if (isObject(t)) {
            has3d && (t.scale3d = t.scale,
            t.translate3d = t.translate);
            var i = extend(getStyle.transform(e), t);
            t = has3d ? i.scale3d : i.scale,
            n = i.rotate,
            a = has3d ? i.translate3d : i.translate
        }
        return "undefined" != typeof t && o.push(has3d ? "scale3d(" + cssValue(t) + ", " + cssValue(t) + ", 1)" : "scale(" + cssValue(t) + ")"),
        "undefined" != typeof n && o.push("rotate(" + cssValue(n, "deg") + ")"),
        "undefined" != typeof a && o.push(has3d ? "translate3d(" + cssValue(a[0], "px") + ", " + cssValue(a[1], "px") + ", 0)" : "translate(" + cssValue(a[0], "px") + ", " + cssValue(a[1], "px") + ")"),
        o.length ? void setStyle(e, "transform", o.join(" ")) : setStyle(e, "transform", "none")
    },
    transformOrigin: function(e, t, a) {
        isArray(t) && (a = t[1],
        t = t[0]),
        setStyle(e, "transform-origin", cssValue(t, "px") + " " + cssValue(a, "px"))
    },
    transition: function(e, t, a, n) {
        var o = [];
        return t ? (isArray(t) || (t = t.split(/\s*,\s*/)),
        a = cssValue(a, "ms"),
        each(t, function() {
            var t = getCssPropertyName(e, this, !0)
              , i = [];
            t && (i.push(t),
            i.push(a),
            n && i.push(n),
            o.push(i.join(" ")))
        }),
        void setStyle(e, "transition", o.join(","))) : setStyle(e, "transition", "none")
    }
});
function hasClass(e, t, a) {
    return (t = ge(t)) ? new RegExp("(^|\\s)" + (a ? e : escapeRE(e)) + "(\\s|$)").test(t.className) : void 0
}
function addClass(e, t) {
    (t = ge(t)) && !hasClass(e, t) && (t.className = (t.className ? t.className + " " : "") + e)
}
function removeClass(e, t, a) {
    (t = ge(t)) && hasClass(e, t, a) && (t.className = (t.className || "").replace(new RegExp("(^|\\s)" + (a ? e : escapeRE(e)) + "(\\s|$)"), function(e, t, a) {
        return t && a ? " " : ""
    }))
}
function toggleClass(e, t, a) {
    var n = "undefined" == typeof a ? hasClass(e, t) : !a;
    n ? removeClass(e, t) : addClass(e, t)
}
function replaceClass(e, t, a, n) {
    removeClass(e, a, n),
    addClass(t, a)
}
function switchClass(e, t, a) {
    hasClass(e, a) ? replaceClass(e, t, a) : replaceClass(t, e, a)
}
function getXY(e) {
    if (e = ge(e),
    !e)
        return [0, 0];
    var t = 0
      , a = 0;
    if (e.offsetParent)
        do
            t += e.offsetLeft,
            a += e.offsetTop;
        while (e = e.offsetParent);return [t, a]
}
function getX(e) {
    return getXY(e)[0]
}
function getY(e) {
    var t = getXY(e)[1];
    return t
}
function getW(e) {
    return e = ge(e),
    e && e.offsetWidth || 0
}
function getH(e) {
    return e = ge(e),
    e && e.offsetHeight || 0
}
function getCw() {
    return Math.max(window.innerWidth || 0, (window.htmlNode || {}).clientWidth || 0)
}
function getCh() {
    return Math.max(window.innerHeight || 0, (window.htmlNode || {}).clientHeight || 0)
}
function evalJs(e) {
    window.execScript ? window.execScript(e) : eval.call(window, e)
}
function alLoadingFix(e, t) {
    t = t || "al_loading";
    var a = ge(t);
    if (a) {
        if (!e) {
            var n = ge("m").offsetHeight || 0
              , o = ge("mfoot").offsetHeight || 0;
            e = getCh() - n + o
        }
        a.style.height = e + "px",
        addClass(t, a)
    }
}
function getHref(e) {
    if (!e)
        return !1;
    var t = !1;
    return e.getAttribute && (t = e.getAttribute("data-href") || e.getAttribute("href")),
    t || (e.pathname ? t = e.pathname + e.search + e.hash : tag(e) || (t = e)),
    t || !1
}
function ajx2q(e) {
    var t = []
      , a = function(e) {
        try {
            return encodeURIComponent(e)
        } catch (t) {
            return e
        }
    }
    ;
    for (var n in e)
        if (null  != e[n] && !isFunction(e[n]))
            if (isArray(e[n]))
                for (var o = 0, i = 0, r = e[n].length; r > o; ++o)
                    null  == e[n][o] || isFunction(e[n][o]) || (t.push(a(n) + "[" + i + "]=" + a(e[n][o])),
                    ++i);
            else
                t.push(a(n) + "=" + a(e[n]));
    return t.join("&")
}
function indexOf(e, t, a) {
    for (var n = a || 0, o = (e || []).length; o > n; n++)
        if (e[n] == t)
            return n;
    return -1
}
function langNumeric(e, t, a) {
    if (!t || !window.langConfig)
        return e;
    var n;
    if (isArray(t) ? (n = t[1],
    e != Math.floor(e) ? n = t[langConfig.numRules["float"]] : each(langConfig.numRules["int"], function(a, o) {
        if ("*" == o[0])
            return n = t[o[2]],
            !1;
        var i = o[0] ? e % o[0] : e;
        return -1 != indexOf(o[1], i) ? (n = t[o[2]],
        !1) : void 0
    })) : n = t,
    a) {
        for (var o = e.toString().split("."), i = [], r = o[0].length - 3; r > -3; r -= 3)
            i.unshift(o[0].slice(r > 0 ? r : 0, r + 3));
        o[0] = i.join(langConfig.numDel),
        e = o.join(langConfig.numDec)
    }
    return n = (n || "%s").replace("%s", e)
}
function setNotify(e) {
    var t = intval(e)
      , a = ge("header_msgs")
      , n = geByClass1("pcont", "l");
    if (a && (val(a, '<div class="hb_btn mhi_notify">' + (t > 0 ? '<em class="mh_notify_counter">' + t + "</em>" : "&nbsp;") + "</div>"),
    t > 0 ? removeClass("mhb_no_notify", a) : addClass("mhb_no_notify", a),
    n)) {
        var o = geByClass1("mmi_mail", n)
          , i = geByClass1("mmi_wrap", o)
          , r = geByClass1("mm_counter", i);
        if (!o)
            return;
        t > 0 ? r ? val(r, t) : append(ce("em", {
            className: "mm_counter",
            innerHTML: t
        }), i) : remove(r)
    }
}
function getNotify() {
    var e = ge("header_msgs");
    return e ? intval(val(geByTag1("em", e))) : 0
}
function canUploadFile() {
    return (window.XMLHttpRequest || window.XDomainRequest) && (window.FormData || window.FileReader && (window.XMLHttpRequest && XMLHttpRequest.sendAsBinary || window.ArrayBuffer && window.Uint8Array && (window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder)))
}
function uploadFile(e, t, a) {
    var n = window.XDomainRequest || window.XMLHttpRequest
      , o = new n;
    o.open("POST", e, !0),
    o.upload.addEventListener("progress", a.onProgress || rf, !1),
    o.onload = a.onComplete || rf,
    o.onerror = a.onError || rf;
    var i = a.onStart || rf;
    if (window.FormData) {
        var r = new FormData;
        for (var s in t)
            r.append(s, t[s]);
        return o.send(r),
        i(o),
        o
    }
    try {
        if (n && !n.prototype.sendAsBinary && window.ArrayBuffer && window.Uint8Array) {
            var l = window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder;
            l && (n.prototype.sendAsBinary = function(e) {
                for (var t = new ArrayBuffer(e.length), a = new Uint8Array(t,0), n = 0; n < e.length; n++)
                    a[n] = 255 & e.charCodeAt(n);
                var o = new l;
                o.append(t);
                var i = o.getBlob();
                this.send(i)
            }
            )
        }
        var c = "----VkComFormBoundary-" + srand()
          , u = ""
          , d = 0
          , p = function(e, t, a) {
            a += "--" + t + "--",
            e.setRequestHeader("Content-type", 'multipart/form-data; boundary="' + t + '"'),
            e.sendAsBinary(a),
            i(e)
        }
        ;
        for (var s in t)
            if ("function" == typeof t[s].getAsBinary) {
                d++;
                var v = new FileReader
                  , f = t[s]
                  , _ = f.fileName || f.name || "";
                v.onload = function() {
                    u += "--" + c + '\r\nContent-Disposition: form-data; name="' + utf2win(s) + '"; filename="' + utf2win(_) + '"\r\nContent-Type: application/octet-stream\r\n',
                    0 + v.result + "\r\n",
                    d--,
                    d || p(o, c, u)
                }
                ,
                v.readAsBinaryString(f)
            } else
                u += "--" + c + '\r\nContent-Disposition: form-data; name="' + utf2win(s) + '"\r\n\r\n' + utf2win(t[s]) + "\r\n";
        return d || p(o, c, u),
        o
    } catch (h) {
        return !1
    }
    return !1
}
function readFile(e, t) {
    if (window.FileReader && vk.iu_ex) {
        var a = new FileReader;
        a.onload = function() {
            t && t(a.result),
            a = null 
        }
        ,
        a.readAsDataURL(e)
    }
}
window.cur = {
    destroy: []
},
window.lang = {};
var geo = {
    _def_opts: {
        enableHighAccuracy: !0,
        maximumAge: 3e5,
        timeout: 6e4
    },
    _provider: null ,
    initW3C: function() {
        geo._provider = navigator.geolocation,
        geo.getCurrentPosition = function(e, t, a) {
            geo._provider.getCurrentPosition(function(t) {
                e("undefined" != typeof t.latitude ? extend(t, {
                    coords: extend(t.coords || {}, {
                        latitude: t.latitude,
                        longitude: t.longitude
                    })
                }) : t)
            }, t, a)
        }
    },
    initGears: function() {
        geo._provider = google.gears.factory.create("beta.geolocation")
    },
    initSymbian: function() {
        geo._provider = device.getServiceObject("Service.Location", "ILocation"),
        geo.getCurrentPosition = function(e, t) {
            geo._provider.ILocation.GetLocation({
                LocationInformationClass: "BasicLocationInformation"
            }, function(a, n, o) {
                4 == n ? t({
                    code: 2,
                    message: "Position unavailable"
                }) : e({
                    timestamp: null ,
                    coords: {
                        latitude: o.ReturnValue.Latitude,
                        longitude: o.ReturnValue.Longitude,
                        altitude: o.ReturnValue.Altitude,
                        heading: o.ReturnValue.Heading
                    }
                })
            })
        }
    },
    initPalm: function() {
        geo.getCurrentPosition = function(e, t, a) {
            var n, o = {};
            a && (a.enableHighAccuracy && 1 == a.enableHighAccuracy && (o.accuracy = 1),
            a.maximumAge && (o.maximumAge = a.maximumAge),
            a.responseTime && (a.responseTime < 5 ? o.responseTime = 1 : a.responseTime < 20 ? o.responseTime = 2 : o.timeout = 3)),
            n = new Mojo.Service.Request("palm://com.palm.location",{
                method: "getCurrentPosition",
                parameters: o,
                onSuccess: function(t) {
                    e({
                        timestamp: t.timestamp,
                        coords: {
                            latitude: t.latitude,
                            longitude: t.longitude,
                            heading: t.heading
                        }
                    })
                },
                onFailure: function(e) {
                    t(1 == e.errorCode ? {
                        code: 3,
                        message: "Timeout"
                    } : 2 == e.errorCode ? {
                        code: 2,
                        message: "Position unavailable"
                    } : {
                        code: 0,
                        message: "Unknown Error: webOS-code" + errorCode
                    })
                }
            })
        }
    },
    getCurrentPosition: function(e, t, a) {
        geo._provider.getCurrentPosition(e, t, extent(geo._def_opts, a || {}))
    },
    init: function() {
        try {
            var e = "undefined";
            if (typeof navigator.geolocation !== e)
                geo.initW3C();
            else if (typeof window.google !== e && typeof google.gears !== e)
                geo.initGears();
            else if (typeof device !== e && typeof device.getServiceObject !== e)
                geo.initSymbian();
            else {
                if (typeof Mojo === e || "Mojo.Service.Request" == typeof Mojo.Service.Request)
                    return !1;
                geo.initPalm()
            }
        } catch (t) {
            return !1
        }
        return !0
    }
}
  , ajax = {
    _tStart: !1,
    _tAlStart: !1,
    _init: function() {
        var e = !1;
        try {
            (e = new XMLHttpRequest) && (ajax._req = function() {
                return new XMLHttpRequest
            }
            )
        } catch (t) {
            try {
                (e = new ActiveXObject("Msxml2.XMLHTTP")) && (ajax._req = function() {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                }
                )
            } catch (t) {
                try {
                    (e = new ActiveXObject("Microsoft.XMLHTTP")) && (ajax._req = function() {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    }
                    )
                } catch (t) {
                    ajax._req = !1
                }
            }
        }
    },
    _getreq: function() {
        return ajax._req || ajax._init(),
        ajax._req()
    },
    _al_reqs: [],
    _last_req: null ,
    save_req: function(e) {
        ajax._al_reqs.push(e || ajax._last_req)
    },
    abort_reqs: function() {
        each(ajax._al_reqs, function(e, t) {
            t.readyState < 4 && t.abort()
        }),
        ajax._al_reqs = []
    },
    _failed_relogin: !1,
    _failed_reqs: [],
    save_failed_req: function(e, t, a, n) {
        ajax._failed_reqs.push([e, t, a, n])
    },
    repeat_reqs: function() {
        each(ajax._failed_reqs, function() {
            var e = this.shift()
              , t = this;
            ajax._post.apply(null , t),
            remove(e)
        }),
        ajax._failed_reqs = []
    },
    plainpost: function(e, t, a, n, o) {
        var i = ajax._last_req = ajax._getreq()
          , r = "string" != typeof t ? ajx2q(t) : t;
        i.onreadystatechange = function() {
            4 == i.readyState && (i.status >= 200 && i.status < 300 ? a && a(i.responseText, i) : n && n(i.responseText, i))
        }
        ;
        try {
            i.open("POST", e, !0)
        } catch (s) {
            return !1
        }
        return i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        o || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        i.send(r),
        i
    },
    post: function(e, t, a) {
        return "/" != e.substr(0, 1) && (e = "/" + e),
        e = e.split("#")[0],
        ajax._post(e, t, a || {})
    },
    onPrepared: se(),
    prepare_click: function(e) {
        if (browser.ios && !(browser.ios >= 7) && window.al && al.ver) {
            var t = []
              , a = !1;
            e && "a" == (e.tagName || "").toLowerCase() ? t.push(e) : isArray(e) ? t = e : (t = geByTag("a", e),
            a = !0);
            for (var n = 0, o = t.length; o > n; n++) {
                var i = t[n]
                  , r = i && i.target || "";
                if (i && i.getAttribute && (!a || !i.getAttribute("data-href") && checkElementNav(i, {
                    skip_onclick: !0
                }) && "_blank" != r)) {
                    var s = i.getAttribute("href");
                    if (null  == s || !isHttpHref(s))
                        continue;attr(i, "data-href", getHref(i)),
                    attr(i, "href", !1)
                }
            }
        }
    },
    click: function(e, t, a) {
        t = t || {};
        var n, o = !1, i = {
            _ajax: 1
        }, r = extend(t, {
            link: e
        });
        if (a = a || {},
        t.onStart) {
            var s = ajax.tAlGetParam();
            ajax.tAlStart = (new Date).getTime(),
            s && (i._talstat = s)
        }
        if (a.use_cache) {
            var l = ge(a.use_cache === !0 ? "preload_data" : a.use_cache)
              , c = l.innerHTML.replace(/(^<!--|-->$)/g, "")
              , u = c.split("--><!--");
            if (c) {
                l.innerHTML = "",
                t.onStart && t.onStart.apply(r),
                a.nav && nav.go(o, null , {
                    push_only: !0
                }),
                t.onDone && t.onDone.apply(r, u);
                var e = geByClass1("show_more", geByClass1("pcont", "mcont"));
                e && ajax.click(e, {
                    onDone: function() {
                        var e = "";
                        each(arguments, function(t, a) {
                            e += "<!--" + (a || "") + "-->"
                        }),
                        l.innerHTML = e,
                        ge("show_more_loading") && ajax.click(!1, t, a)
                    }
                })
            } else
                t.onStart && t.onStart.apply(r),
                a.nav && nav.go(o, null , {
                    push_only: !0
                });
            return !1
        }
        if (!e)
            return !0;
        if (e.form) {
            if (e.disabled)
                return !0;
            var d = e.form
              , p = {};
            o = (d.action || "").replace(/^https?:\/\/[^\/]+/i, ""),
            each(d, function(t, a) {
                return !a.name || a.disabled ? !0 : ("radio" !== a.type || a.checked) && ("checkbox" !== a.type || a.checked) ? "button" === a.type ? !0 : "submit" === a.type && a !== e ? !0 : "image" === a.type && a !== e ? !0 : void (p[a.name] = a.value) : !0
            }),
            "image" == e.type && (p[e.name] = e.value,
            p[e.name + ".x"] = 1,
            p[e.name + ".y"] = 1),
            d.method && "get" != d.method ? extend(i, p) : o = o.split("?", 1).shift() + obj2qs(p)
        } else
            e.getAttribute && (o = e.getAttribute("data-href") || e.getAttribute("href"));
        if (o || (o = e.pathname ? e.pathname + e.search + e.hash : e),
        !o)
            return !0;
        extend(i, a.url_params || {});
        var v = pStats.getSeenData();
        return v && (i._pstat = v.data,
        cur && cur.module && (i._pstatref = cur.module)),
        n = ajax.post(o, i, {
            onDone: function() {
                v && pStats.onSend(v.seen),
                a.lock && unlockButton(e),
                t.onDone && t.onDone.apply(r, arguments),
                (a.nav || a.scroll) && scrollToHash()
            },
            onFail: function() {
                a.lock && unlockButton(e),
                t.onFail && t.onFail.apply(r, arguments),
                (a.nav || a.scroll) && scrollToHash()
            }
        }),
        n && (t.onStart && t.onStart.apply(r),
        a.nav && nav.go(o, null , {
            push_only: !0
        }),
        a.lock && lockButton(e)),
        !n
    },
    prepare_nav: function(e) {
        return
    },
    nav: function(e, t) {
        t = t || {},
        t.nav = t.nav || {};
        var a, n, o = getHref(e), i = page.getHash(t.nav);
        if (!(o = nav.checkUrl(o)))
            return !1;
        "/" != o.substr(0, 1) && (o = "/" + o),
        menu.close(null , !0);
        var r = ajax.tGetParam();
        if (ajax.tStart = (new Date).getTime(),
        t.need_restore && menu && menu.closeSearch(),
        t.need_restore && t.nav.push && (n = page.restore(i)))
            return ajax.abort_reqs(),
            n.lm && extend(n.lm, {
                tn: !1,
                bn: !1
            }),
            page.set(i, n),
            t.zProcess && (t.zProcess(n.st),
            delete t.zProcess),
            nav.set(t),
            ajax.tModule = cur.module,
            ajax.tRestoreRender = (new Date).getTime(),
            !0;
        var s = !1
          , l = !1;
        if (t.fast)
            s = !0,
            page.set(i, !1, {
                before: !0,
                beforeAppend: t.beforeAppend,
                afterAppend: t.afterAppend
            }),
            l = t.onAfterFast || !1;
        else if (t.target && t.target.className) {
            {
                var a = /(?:^|\s)(al_([a-z_]+)(-?[0-9]+)?)(?:\s|$)/i.exec(t.target.className)
                  , c = a && a[1] || !1
                  , u = a && a[2] || !1;
                a && a[3]
            }
            switch (u) {
            case "menu":
                s = !0,
                page.set(i, !1, {
                    before: !0,
                    beforeAppend: function(e) {
                        val(geByClass1("mcont", e), '<div class="pcont bl_cont"><div id="al_loading"></div></div>'),
                        page.setMhead(e, attr(t.target, "data-header"), "/")
                    },
                    afterAppend: function() {
                        alLoadingFix(),
                        scrollTop(0)
                    }
                });
                break;
            case "tab":
                s = !0,
                page.set(i, !1, {
                    before: !0,
                    beforeAppend: function(e) {
                        val(geByClass1("upanel", e), '<div id="al_loading"></div>');
                        var a = geByClass1("tabs_block", e) || geByClass1("tabs", e)
                          , n = geByClass1("active", a);
                        n && (removeClass("tab_item_cur", geByClass1("tab_item_cur", a)),
                        addClass("tab_item_cur", n)),
                        page.setMhead(e, attr(t.target, "data-header"))
                    },
                    afterAppend: function() {
                        alLoadingFix()
                    }
                }, t);
                break;
            case "post":
                s = !0,
                page.set(i, !1, {
                    before: !0,
                    beforeAppend: function(e) {
                        function a(e, t, a, n, o, i, r, s) {
                            return '<div class="pcont bl_cont"><div class="owner_panel">' + (t || "") + '<div class="op_cont">' + (a || "") + '<div class="op_info"><span class="item_date">' + (n || "") + '</span></div></div></div><div id="' + (e || "") + '" class="post_item single_post_item"><div class="pi_cont"><div class="pi_head">' + (o || "") + '</div><div class="pi_body">' + (i || "") + "</div></div>" + (s || "") + "</div>" + (r || "") + "</div>"
                        }
                        var n = clone(gpeByClass("post_item", t.target))
                          , o = n.id
                          , i = outer(gpeByTag("a", geByClass1("pi_img", n))).replace("pi_img", "op_img")
                          , r = gpeByTag("div", geByClass1("pi_author", n))
                          , s = remove(geByClass1("pi_date", n))
                          , l = outer(remove(geByClass1("explain", r)))
                          , c = remove(geByClass1("pi_fronly", n))
                          , u = outer(r)
                          , d = geByClass1("pi_body", n)
                          , p = geByClass1("pi_text_more", d)
                          , s = geByClass1("pi_date", n)
                          , v = geByClass1("pi_info", d)
                          , f = geByClass1("pi_links", d)
                          , _ = geByClass1("replies_link", f)
                          , h = val(remove(geByClass1("pi_actions_wrap", n)))
                          , g = val(remove(geByClass1("item_replies", v)))
                          , m = g ? val(_) : lang.mobile_wall_post_replies_title
                          , y = _ ? '<a name="comments"></a><h4 class="slim_header">' + (m || "") + '</h4><div id="al_loading"></div>' : "";
                        if (p) {
                            var b = p.nextSibling ? p : p.parentNode;
                            b.nextSibling.style.display = "inline",
                            b.style.display = "none"
                        }
                        val(f, outer(geByClass1("like_wrap", d))),
                        s && attr(s, "data-date") && val(s, attr(s, "data-date")),
                        page.setMhead(e, attr(t.target, "data-header"), !0),
                        val(geByClass1("mcont", e), a(o, i, u, val(s) + (c ? '<b class="pi_fronly"></b>' : ""), l, val(d), y, h))
                    },
                    afterAppend: function(e) {
                        var a = geByTag1("h4", e);
                        a && alLoadingFix(t.nav.hash ? getCh() - a.offsetHeight : 0),
                        t.nav.hash ? scrollToHash(t.nav.hash) : scrollTop(0)
                    }
                }, t);
                break;
            case "wall":
                s = !0,
                page.set(i, !1, {
                    before: !0,
                    beforeAppend: function(e) {
                        function a(e, t, a) {
                            return '<div class="pcont"><div class="wall_item single_wall_item" id="' + (e || "") + '">' + (t || "") + "</div>" + (a || "") + "</div>"
                        }
                        var n = clone(hasClass("wall_item", t.target) ? t.target : gpeByClass("wall_item", t.target))
                          , o = n.id
                          , i = geByClass1("wi_body", n)
                          , r = geByClass1("wi_buttons", n)
                          , s = geByClass1("item_like", r)
                          , l = hasClass("item_sel", s)
                          , c = geByClass1("v_like", s)
                          , u = geByClass1("item_share", r)
                          , d = hasClass("item_sel", u)
                          , p = geByClass1("v_share", u)
                          , v = remove(geByClass1("item_replies", r))
                          , f = v ? geByClass1("v_replies", v) : !1
                          , _ = +stripTags(val(c)).replace(/\D/g, "")
                          , h = +stripTags(val(p)).replace(/\D/g, "")
                          , g = +stripTags(val(f)).replace(/\D/g, "")
                          , m = geByClass1("pi_text_more", i)
                          , y = geByClass1("wi_date", n)
                          , b = g ? langNumeric(g, lang.mobile_wall_post_comments) : lang.mobile_wall_post_replies_title
                          , w = v && 50 > g ? '<a name="comments"></a><h4 class="slim_header">' + (b || "") + '</h4><div id="al_loading"></div>' : "";
                        clog(v),
                        remove(geByClass1("wi_actions_btn", n));
                        var C = ""
                          , k = l ? 1 == _ ? lang.mobile_wall_only_you_liked : lang.mobile_wall_you_and_x_people_liked : lang.mobile_wall_x_people_liked;
                        C += '<a class="item_like _i" href="/like?act=members&object=' + o + '"' + (_ ? "" : ' style="display:none"') + '><i class="i_like"></i><span class="v_like">' + (_ ? langNumeric(l ? _ - 1 : _, k, !0) : "") + "</span></a>";
                        var x = d ? 1 == h ? lang.mobile_wall_only_you_shared : lang.mobile_wall_you_and_x_people_shared : lang.mobile_wall_x_people_shared;
                        if (C += '<a class="item_share _i" href="/like?act=members&object=' + o + '&tab=published"' + (h ? "" : ' style="display:none"') + '><i class="i_share"></i><span class="v_share">' + (h ? langNumeric(d ? h - 1 : h, x, !0) : "") + "</span></a>",
                        before(ce("div", {
                            className: "wi_like_wrap",
                            innerHTML: C
                        }), r),
                        c ? val(c, lang.mobile_like) : append(ce("span", {
                            className: "v_like",
                            innerHTML: lang.mobile_like
                        }), s),
                        p ? val(p, lang.mobile_wall_post_publish) : append(ce("span", {
                            className: "v_share",
                            innerHTML: lang.mobile_wall_post_publish
                        }), u),
                        m) {
                            var S = m.nextSibling ? m : m.parentNode;
                            S.nextSibling.style.display = "inline",
                            S.style.display = "none"
                        }
                        y && attr(y, "data-date") && val(y, attr(y, "data-date")),
                        page.setMhead(e, attr(t.target, "data-header"), !0),
                        val(geByClass1("mcont", e), a(o, val(n), w))
                    },
                    afterAppend: function(e) {
                        var a = geByTag1("h4", e);
                        a && alLoadingFix(t.nav.hash ? getCh() - a.offsetHeight : 0),
                        t.nav.hash ? scrollToHash(t.nav.hash) : scrollTop(0)
                    }
                }, t);
                break;
            case "pinfo":
                s = !0,
                page.set(i, !1, {
                    before: !0,
                    beforeAppend: function(e) {
                        var t = (geByClass1("pcont", e),
                        geByClass1("owner_panel", e))
                          , a = geByClass1("pp_img", t)
                          , n = geByClass1("op_header", t)
                          , o = geByClass1("lvi", n)
                          , i = geByClass1("pp_last_activity", t)
                          , r = ce("div");
                        addClass("mhi_back", geByClass1("mh_header", e)),
                        val(t, '<img src="' + escapeAttr(attr(a, "src") || "") + '" class="op_img"><div class="op_cont"><h2 class="op_header">' + stripTags(val(n)) + '</h2><div class="pp_online">' + (o ? lang.mobile_online : val(i)) + "</div></div>"),
                        each(geByClass("_pinfo", e), function(e, t) {
                            r.appendChild(t)
                        }),
                        val(geByClass1("ipanel", e), "<div>" + val(r) + '</div><div id="al_loading"></div>'),
                        page.setMhead(e, !1, !0)
                    },
                    afterAppend: function() {
                        alLoadingFix(),
                        scrollTop(0, 10)
                    }
                }, t);
                break;
            case "player":
                s = !0,
                page.set(i, !1, {
                    before: !0,
                    beforeAppend: function(e) {
                        var t = audio.playlist()
                          , a = audio.playlist_q()
                          , n = t[0] || {}
                          , o = (n.id || "").split("_").slice(2).join("_") || ""
                          , i = "";
                        page.setMhead(e, lang.mobile_menu_player_head_title, !0),
                        val(geByClass1("mcont", e), '<div class="pcont"><div class="head_panel"><div class="hp_block"><form action="/audio" class="qsearch" onsubmit="return cur.au_search.go(event);"><input type="hidden" name="act" value="player"><input type="hidden" name="list" value="' + escapeAttr(o) + '"><table><tr><td width="100%"><div class="iwrap"><input id="au_search_field" type="text" class="textfield qs_textfield" name="q" placeholder="' + lang.mobile_audio_search_placeholder + '"></div></td><td class="last"><input id="au_search_btn" class="button qs_button al_tab" type="submit" value="' + lang.mobile_audio_search_btn + '" /></td></tr></table></form></div></div><div id="au_search_items" class="upanel bl_cont"><div class="audios_block audios_list" data-query="' + escapeAttr(a) + '">' + i + "</div></div></div>"),
                        val("m", e.innerHTML)
                    }
                }, t),
                l = function() {
                    var e = audio.playlist()
                      , t = e[0] || {}
                      , a = (t.id || "").split("_").slice(2).join("_") || ""
                      , n = "/audio" + obj2qs({
                        act: "player",
                        list: a
                    })
                      , o = []
                      , i = {};
                    each(e, function(e, t) {
                        o.push(t.id),
                        i[t.id] = [t.artist + " " + t.title, t.id, t.src, t.artist, t.title, t.dur, t.can_add, !1]
                    }),
                    qsearch.init({
                        action: n,
                        al_action: n,
                        container: ge("au_search_items"),
                        field: ge("au_search_field"),
                        btn: ge("au_search_btn"),
                        top_items: o,
                        _cache: i,
                        tpl: function(e, t, a, n) {
                            return t ? n ? n : "" == n ? '<div class="audios_block audios_list" data-query="' + escapeAttr(t) + '">' + e + "</div>" : '<div class="audios_block audios_list" data-query="' + escapeAttr(t) + '"><div class="al_loading qs_loading">&nbsp;</div></div>' : '<div class="audios_block audios_list" data-query="' + escapeAttr(audio.playlist_q()) + '">' + e + "</div>"
                        },
                        item_tpl: function(e, t, a, n, o, i, r) {
                            return audioplayer && audioplayer.getDOMFromAudio({
                                id: e,
                                src: t,
                                dur: o,
                                artist: this.highlight(a),
                                title: this.highlight(n),
                                can_add: i,
                                can_del: r
                            }, !0, this.q) || ""
                        },
                        null_tpl: function(e) {
                            return '<div class="service_msg_box"><div class="service_msg service_msg_null">' + (e ? lang.mobile_audio_search_not_found.replace("%s", htsc(e)) : lang.mobile_audio_no_audio) + "</div></div>"
                        },
                        soft_filter: !0,
                        need_invalid_keys: browser.desktop,
                        top_len: 50,
                        global_search: !0,
                        onRendered: function() {
                            audioplayer && audioplayer.initAudio()
                        },
                        al_need: !0,
                        init_offset: 0
                    });
                    var r = audio.getCurrentId()
                      , s = ge("audio" + r);
                    if (s) {
                        var l = getY(s) + s.offsetHeight / 2 - getCh() / 2;
                        scrollTop(l)
                    }
                }
                ;
                break;
            case "photo":
                s = !0,
                page.set(i, !1, {
                    before: !0,
                    beforeAppend: function(e) {
                        function a(e, t, a) {
                            return '<div class="pcont bl_cont"><div class="media_view photo_view"><div class="pv_summary">&nbsp;<div class="summary_loading" style="float:left;"><i class="i_loading"></i></div></div><div class="pv_body"><div class="thumb_item" style="' + (t || "") + '"><img src="' + e + '" class="ph_img" alt="" style="' + (a || "") + '" /></div></div><div id="al_fill"></div></div></div>'
                        }
                        var n = geByTag1("img", t.target)
                          , o = n && n.src || "/images/blank.gif"
                          , i = ""
                          , r = ""
                          , s = (attr(n, "data-src_big") || "").split("|")
                          , l = s[0]
                          , c = +s[1] || 0
                          , u = +s[2] || 0
                          , d = !0;
                        if (c && u || (c = n && n.width || 0,
                        u = n && n.height || 0,
                        d = !1),
                        l) {
                            if (c && u) {
                                var p = Math.min(604, getCw())
                                  , v = p / c
                                  , f = Math.min(604, Math.ceil(v >= 1 && d ? u : u * v));
                                i += "height:" + f + "px;"
                            }
                            i += "background:url(" + o + ") #f7f7f7 no-repeat center top;",
                            f > 100 && each(["-moz-", "-o-", "-webkit-", ""], function(e, t) {
                                i += t + "background-size:contain;"
                            }),
                            o = l
                        } else
                            r += "width:100%;";
                        page.setMhead(e, attr(t.target, "data-header"), !0),
                        val(geByClass1("mcont", e), a(o, i, r))
                    },
                    afterAppend: function() {
                        alLoadingFix(0, "al_fill"),
                        scrollTop(0)
                    }
                }, t);
                break;
            case "u":
            case "g":
            case "p":
            case "e":
                s = !0,
                page.set(i, !1, {
                    before: !0,
                    beforeAppend: function(e) {
                        function a(e, t, a) {
                            return '<div class="pcont fit_box"><div class="owner_panel profile_panel"><img src="' + (e || "") + '" class="pp_img" /><div class="pp_cont"><h2 class="op_header">' + (t || "") + (a || "") + '</h2></div></div><div id="al_loading"></div>'
                        }
                        {
                            var n, o = c.substr(2), i = geByClass1(o, e, "a") || geByClass1(o, e, "span"), r = stripTags(attr(t.target, "data-name") || attr(i, "data-name") || val(i) || ""), s = i && i.parentNode && geByClass1("lvi", i.parentNode), l = outer(s), d = geByClass1(o, e, "img"), p = d && d.src || attr(t.target, "data-photo") || "/images/blank.gif";
                            geByClass1("mhead", e)
                        }
                        "u" == u ? n = r.split(" ").shift() : "g" == u ? n = lang.mobile_group_head_title : "p" == u ? n = lang.mobile_public_head_title : "e" == u && (n = lang.mobile_event_head_title),
                        page.setMhead(e, n, "/"),
                        val(geByClass1("mcont", e), a(p, r, l))
                    },
                    afterAppend: function() {
                        alLoadingFix(),
                        scrollTop(0)
                    }
                }, t);
                break;
            case "news_subsection":
                s = !0,
                page.set(i, !1, {
                    before: !0,
                    beforeAppend: function(e) {
                        var t = geByClass1("news_subsections", e);
                        t && !hasClass("summary_loading", t.firstChild) && before(ce("div", {
                            className: "summary_loading",
                            innerHTML: '<i class="i_loading"></i>'
                        }), t.firstChild)
                    }
                });
            default:
                cur.al_fast && cur.al_fast[u] && (s = !0,
                page.set(i, !1, cur.al_fast[u](t), t))
            }
        }
        if (ajax.abort_reqs(),
        t.local) {
            var d = !0;
            page.set(i, {}, {
                after: !0,
                no_scroll: !0,
                force: !0
            }, !1),
            l && l()
        } else {
            var p = qs2obj(t.nav.params);
            extend(p, t.params || {}),
            window.al && window.al.menu || (p._nlm = 1),
            r && (p._tstat = r);
            var v = pStats.getSeenData();
            v && (p._pstat = v.data,
            cur && cur.module && (p._pstatref = cur.module)),
            p._ref || (p._ref = (nav.path || "").substr(1));
            var d = ajax.post(o, p, {
                onPageDone: function(e, a, n, o, r) {
                    v && pStats.onSend(v.seen),
                    ajax.tProcess = (new Date).getTime(),
                    page.set(i, {
                        title: e,
                        html: a,
                        js: n,
                        lm: o,
                        bc: r
                    }, {
                        after: s,
                        no_scroll: s
                    }, s ? !1 : t),
                    ajax.tModule = cur.module,
                    ajax.tRender = (new Date).getTime()
                }
            });
            ajax.save_req()
        }
        return s && (t.zProcess && (t.zProcess(),
        delete t.zProcess),
        nav.set(t),
        ajax.tModule = cur.module,
        ajax.tFastRender = (new Date).getTime()),
        d
    },
    confirm: function(e, t, a, n) {
        return confirm(t) ? ajax.click(e, n, {
            url_params: {
                hash: a
            }
        }) : !1
    },
    _post: function(e, t, a) {
        var n = function(e, t) {
            a.onFail && a.onFail.call(window, 0, e, t)
        }
          , o = function(o) {
            var i = !1;
            try {
                i = parseJSON(o)
            } catch (r) {
                i = !1
            }
            i === !1 ? n() : ajax.parseResponse(i, e, t, a)
        }
        ;
        return ajax.plainpost(e, t, o, n)
    },
    parseResponse: function(e, t, a, n) {
        var o = e.shift()
          , i = e.shift()
          , r = e.shift()
          , s = window.al && o > al.ver || !menu.refreshCounters(i);
        switch (i !== !1 && setNotify(i[2]),
        r) {
        case 0:
            if (s)
                return nav.hard_go(nav.cur, null , {
                    replace: !0
                });
            var l = e.shift();
            n && n.onDone && (isArray(e) ? n.onDone.apply(window, l) : n.onDone.call(window, l));
            break;
        case 1:
            var c = e.shift()
              , u = e.shift()
              , d = e.shift();
            if (s || u)
                nav.hard_go(c);
            else if (d) {
                setDocumentDomain();
                var p = c + (-1 == c.indexOf("?") ? "?" : "&") + "__extra=1"
                  , v = createIframe({
                    src: p
                })
            } else
                nav.go(c, null , {
                    ignore_cur_process: !0
                });
            break;
        case 2:
            var c = e.shift();
            n && n.onFail ? (e.unshift(c),
            e.unshift(r),
            n.onFail.apply(window, e)) : nav.hard_go(c);
            break;
        case 3:
            page.need_hard_go = s;
            var f = e[3];
            if (f && f.rdr && window.al && al.menu && getW("vk_wrap") >= 614) {
                nav.go(f.rdr, null , {
                    replace: !0
                });
                break
            }
            n = n || {},
            n.onPageDone || (n.onPageDone = function(e, a, n, o, i) {
                nav.go(t, null , {
                    push_only: !0
                }),
                page.set(page.getHash(nav), {
                    title: e,
                    html: a,
                    js: n,
                    lm: o,
                    bc: i
                })
            }
            ),
            n.onPageDone.apply(window, e);
            break;
        case 4:
            if (!ajax._failed_relogin) {
                var p = e.shift()
                  , c = e.shift();
                setDocumentDomain();
                var v = createIframe({
                    src: p
                })
            }
            ajax._failed_relogin = !0,
            ajax.save_failed_req(v, t, a, n)
        }
    },
    onReLoginDone: function() {
        ajax.repeat_reqs(),
        ajax._failed_relogin = !1
    },
    tGetParam: function() {
        if (ajax.tStart && ajax.tModule) {
            var e = ajax.tFastRender - ajax.tStart
              , t = ajax.tRestoreRender - ajax.tStart
              , a = ajax.tProcess - ajax.tStart
              , n = ajax.tRender - ajax.tProcess
              , o = "/" == ajax.tModule.substr(0, 1) ? ajax.tModule.substr(1) : ajax.tModule
              , i = [o, e, t, a, n];
            for (var r in i)
                (!i[r] || i[r] < 0) && (i[r] = 0);
            return ajax.tStart = !1,
            i.join(",")
        }
    },
    tAlGetParam: function() {
        if (ajax.tAlStart && ajax.tAlModule) {
            var e = ajax.tAlProcess - ajax.tAlStart
              , t = ajax.tAlRender - ajax.tAlProcess
              , a = "/" == ajax.tAlModule.substr(0, 1) ? ajax.tAlModule.substr(1) : ajax.tAlModule
              , n = ["al_" + a, e, t];
            for (var o in n)
                (!n[o] || n[o] < 0) && (n[o] = 0);
            return ajax.tAlStart = !1,
            n.join(",")
        }
    },
    refreshLinks: function(e, t) {
        if (e) {
            var a = geByClass1("mmi_fv", "lm_cont")
              , n = a && geByClass1("lfm_item", a)
              , o = geByClass1("mmi_fv", "mfoot")
              , i = o && geByClass1("lfm_item", o)
              , r = ge("fv_link");
            attr(n, "href", e),
            attr(i, "href", e),
            attr(r, "href", e)
        }
        if (t) {
            var s = geByClass1("mmi_app", "lm_cont")
              , l = s && geByClass1("lfm_item", s)
              , c = geByClass1("mmi_app", "mfoot")
              , u = c && geByClass1("lfm_item", c)
              , d = ge("app_link")
              , p = t ? "return nav.app_go(this, event, '" + escapeStr(t) + "');" : !1;
            attr(l, "onclick", p),
            attr(u, "onclick", p),
            attr(d, "onclick", p)
        }
    }
}
  , mediaUpload = {
    _uploadData: {},
    _uploadQueue: [],
    _readerQueue: [],
    _processUploadQueue: !1,
    _processReaderQueue: !1,
    fallback: function(e, t) {
        return e && post.add_attach(e, t),
        !1
    },
    getLastAttachId: function() {
        var e = ge("attached_wrap");
        if (!e)
            return 0;
        var t, a = 0;
        return each(geByTag("input"), function() {
            if (t = this.name.match(/^attach(\d+)_type$/i)) {
                var e = intval(t[1]);
                e > a && (a = e)
            }
        }),
        a
    },
    refreshAttachIds: function(e) {
        var t = ge("attached_wrap");
        if (t) {
            var a, n = gpeByClass("mr_x_wrap", e), o = geByTag1("input", n), i = intval((o && o.name.match(/^attach(\d+)(_type)?$/i) || [])[1]);
            if (gpeByClass("mr_timer", e)) {
                var r = attr("add_post_btn", "data-value");
                return void (r && val("add_post_btn", r))
            }
            i && each(geByTag("input", t), function() {
                if (a = this.name.match(/^attach(\d+)(_type)?$/i)) {
                    var e = intval(a[1]);
                    e == i ? this.disabled = !0 : e > i && (this.name = "attach" + (e - 1) + (a[2] || ""))
                }
            })
        }
    },
    getAttachesCount: function() {
        return (geByClass("mr_x_wrap", "attached_wrap") || []).length
    },
    refreshUploadState: function(e) {
        isUndefined(e) && (e = mediaUpload.getAttachesCount());
        var t = geByClass1("mr_timer", "attached_wrap")
          , a = ge("attach_photo_btn")
          , n = geByClass1("pi_medias", "attached_wrap")
          , o = geByClass1("inline_upload", a)
          , i = attr(o, "data-max-attaches") || 10;
        toggle(n, e > 0 || isVisible(t)),
        toggleClass("cp_attach_btn_sel", a, e > 0),
        o && (o.disabled = e >= i),
        show("attached_options"),
        show("attached_flush")
    },
    checkUploading: function(e) {
        return mediaUpload._processUploadQueue ? cancelEvent(e) : !0
    },
    attachedPhotoTpl: function(e) {
        return ce("div", {
            id: "upload_item_" + e,
            className: "medias_thumb thumb_item mr_x_wrap thumb_upload",
            innerHTML: '<div id="upload_image_' + e + '" class="tu_img"></div><div id="item_progress_wrap_' + e + '" class="tu_progress_wrap"><div id="item_progress_' + e + '" class="tu_progress"></div></div><div id="item_cancel_wrap_' + e + '" class="tu_cancel_wrap" onclick="return mediaUpload.reset(this, event, \'' + e + '\');"><div id="item_cancel_' + e + '" class="tu_cancel"></div></div>'
        })
    },
    onUploadProgress: function(e) {
        var t = this
          , a = (ge("upload_item_" + t.id),
        ge("item_progress_" + t.id));
        setStyle(a, {
            width: e.loaded / e.total * 100 + "%",
            visibility: "visible"
        })
    },
    onUploadComplete: function(e) {
        var t = this
          , a = e.target.responseText
          , n = !1;
        try {
            n = parseJSON(a)
        } catch (o) {
            n = {
                error: "ERR_CLIENT_BAD_RESPONSE: bad request response"
            }
        }
        n.error ? mediaUpload.onUploadError.call(t, e) : (t.xhr = ajax.post(t.done_url, {
            _ajax: 1,
            _query: a
        }, {
            onDone: function(e) {
                var a = ge("item_progress_wrap_" + t.id)
                  , n = ge("upload_image_" + t.id)
                  , o = mediaUpload.getLastAttachId() + 1;
                if (n)
                    var i = ce("img", {
                        id: "upload_image_" + t.id,
                        className: "ph_img",
                        onload: function() {
                            if (replace(i, n),
                            t.iw && t.ih) {
                                if (t.iw > t.ih == i.width > i.height)
                                    var e = Math.min(130, Math.floor(75 / t.ih * t.iw));
                                else
                                    var e = Math.min(130, Math.floor(75 / t.iw * t.ih));
                                setStyle(i, "width", e)
                            }
                            reflow(i),
                            setStyle(i, "opacity", 1)
                        },
                        src: e.src
                    });
                after(ce("input", {
                    type: "hidden",
                    name: "attach" + o,
                    value: e.photo_raw
                }), n),
                after(ce("input", {
                    type: "hidden",
                    name: "attach" + o + "_type",
                    value: "photo"
                }), n),
                setStyle(a, "opacity", 0),
                t.attached = !0,
                t.delete_url = e.delete_url
            }
        }),
        addClass("tu_progress_request", "item_progress_wrap_" + t.id),
        t.uploaded = !0,
        mediaUpload.uploadQueueNext())
    },
    onUploadError: function(e) {
        clog("upload error.", e.target.responseText),
        mediaUpload.uploadQueueNext()
    },
    uploadFile: function(e) {
        e.xhr = uploadFile(e.upload_url, {
            photo: e.file
        }, {
            onProgress: bind(mediaUpload.onUploadProgress, e),
            onComplete: bind(mediaUpload.onUploadComplete, e),
            onError: bind(mediaUpload.onUploadError, e)
        })
    },
    readFile: function(e) {
        readFile(e.file, function(t) {
            var a = ge("upload_image_" + e.id);
            if (a)
                var n = ce("img", {
                    id: "upload_image_" + e.id,
                    className: "ph_img",
                    onload: function() {
                        replace(n, a),
                        e.iw = n.width,
                        e.ih = n.height
                    },
                    src: t
                });
            mediaUpload.readerQueueNext()
        })
    },
    addFile: function(e) {
        var t = ge("attached_wrap")
          , a = geByClass1("pi_medias", t)
          , n = a ? geByClass("medias_thumb", a) : []
          , o = a ? geByClass1("medias_row", a) : null 
          , i = n[n.length - 1]
          , r = mediaUpload.attachedPhotoTpl(e.id);
        t && (a || (a = ce("div", {
            className: "pi_medias"
        }),
        append(a, t)),
        i ? after(r, i) : o ? before(r, o) : append(r, a),
        mediaUpload._processReaderQueue || mediaUpload.readerQueueNext())
    },
    uploadQueueNext: function() {
        clog("next upload"),
        mediaUpload._processUploadQueue = !0;
        var e = mediaUpload.uploadQueueRemove();
        return e ? void mediaUpload.uploadFile(e) : (clog("empty upload"),
        void (mediaUpload._processUploadQueue = !1))
    },
    readerQueueNext: function() {
        clog("next reader"),
        mediaUpload._processReaderQueue = !0;
        var e = mediaUpload.readerQueueRemove();
        return e ? void mediaUpload.readFile(e) : (clog("empty reader"),
        void (mediaUpload._processReaderQueue = !1))
    },
    queueInsert: function(e) {
        var t = srand();
        return mediaUpload.getUploadDataById(t) ? mediaUpload.queueInsert(e) : (mediaUpload._uploadData[t] = extend(e, {
            id: t
        }),
        mediaUpload._uploadQueue.push(t),
        mediaUpload._readerQueue.push(t),
        mediaUpload._uploadData[t])
    },
    uploadQueueRemove: function() {
        var e = mediaUpload._uploadQueue.shift();
        return e ? mediaUpload.getUploadDataById(e) : !1
    },
    readerQueueRemove: function() {
        var e = mediaUpload._readerQueue.shift();
        return e ? mediaUpload.getUploadDataById(e) : !1
    },
    getUploadDataById: function(e) {
        return mediaUpload._uploadData[e] || !1
    },
    delUploadDataById: function(e) {
        delete mediaUpload._uploadData[e]
    },
    start: function(e, t) {
        if (!e || !canUploadFile())
            return mediaUpload.fallback(e, t);
        var a = e.files
          , n = e.form || gpeByTag("form", e)
          , o = submitBtn(n)
          , i = ge("attach_photo_btn")
          , r = attr(e, "data-upload-url")
          , s = attr(e, "data-done-url")
          , l = attr(e, "data-max-attaches") || 10
          , c = mediaUpload.getAttachesCount();
        return r && s ? (each(a, function() {
            var e = {
                upload_url: r,
                done_url: s,
                file: this,
                uploaded: !1,
                attached: !1
            };
            return c >= l ? !1 : (mediaUpload.queueInsert(e),
            mediaUpload.addFile(e),
            void c++)
        }),
        removeEvent(n, "submit", mediaUpload.checkUploading),
        addEvent(n, "submit", mediaUpload.checkUploading),
        removeEvent(o, "click", mediaUpload.checkUploading),
        addEvent(o, "click", mediaUpload.checkUploading),
        removeEvent(i, "click", mediaUpload.checkUploading),
        addEvent(i, "click", mediaUpload.checkUploading),
        mediaUpload.refreshUploadState(c),
        replace(clone(e), e),
        mediaUpload._processUploadQueue || mediaUpload.uploadQueueNext(),
        !1) : mediaUpload.fallback(e, t)
    },
    reset: function(e, t, a) {
        if (cancelEvent(t),
        "/" == a[0]) {
            ajax.post(a, {
                _ajax: 1
            }),
            mediaUpload.refreshAttachIds(e);
            var n = gpeByClass("mr_x_wrap", e) || gpeByClass("mr_timer", e);
            remove(n)
        } else {
            var o = a
              , i = mediaUpload.getUploadDataById(o);
            if (!i)
                return !1;
            i.attached ? i.delete_url && (ajax.post(i.delete_url, {
                _ajax: 1
            }),
            mediaUpload.refreshAttachIds(e)) : (i.xhr && i.xhr.abort && i.xhr.abort(),
            i.loaded || mediaUpload.uploadQueueNext()),
            remove("upload_item_" + o),
            mediaUpload.delUploadDataById(o)
        }
        return mediaUpload.refreshUploadState(),
        !1
    }
}
  , ownerPhotoUpload = {
    fallback: function(e) {
        var t = e.nextSibling;
        return t ? !nav.go(t) : !1
    },
    onUploadProgress: function(e) {
        photoview.updateUpload({
            progress: e.loaded / e.total
        })
    },
    onUploadComplete: function(e) {
        var t = this
          , a = e.target.responseText
          , n = !1;
        try {
            n = parseJSON(a)
        } catch (o) {
            n = {
                error: "ERR_CLIENT_BAD_RESPONSE: bad request response"
            }
        }
        if (n.error)
            ownerPhotoUpload.onUploadError.call(t, e);
        else {
            t.xhr = null ,
            t.photo_res = a,
            t.photo_size = n.size;
            var i = t.static_url + n.x_src
              , r = n.size[0]
              , s = n.size[1]
              , l = Math.min(r, s);
            photoview.onClose = bind(ownerPhotoUpload.onClose, t),
            photoview.openCrop({
                src: i,
                max_scale: l / 200,
                onSelect: bind(ownerPhotoUpload.onCropSelected, t)
            })
        }
    },
    onUploadError: function(e) {
        clog("upload error.", e.target.responseText),
        photoview.close()
    },
    onClose: function() {
        this.xhr && this.xhr.abort && this.xhr.abort()
    },
    onCropSelected: function(e, t, a) {
        var n = this
          , o = n.photo_res
          , i = n.photo_size
          , r = i[0]
          , s = i[1]
          , l = Math.min(r, s)
          , c = Math.round(e * r)
          , u = Math.round(t * s)
          , d = Math.round(a * l);
        if (n.upload_edit_url)
            var p = n.upload_edit_url;
        else
            var p = n.base_url + "upload.php?" + ajx2q({
                act: "owner_photo_edit",
                _query: o,
                _origin: location.protocol + "//" + location.host
            });
        n.xhr = ajax.plainpost(p, {
            _crop: [c, u, d].join(",")
        }, function(e) {
            ownerPhotoUpload.onCropSuccess.call(n, e)
        }, function() {
            ownerPhotoUpload.onCropCancel.call(n)
        }, !0),
        photoview.updateCrop({
            saving: !0
        })
    },
    onCropSuccess: function(e) {
        var t = this;
        t.xhr = ajax.post("/photos.php?act=done_photo", {
            _ajax: 1,
            _query: e
        }, {
            onDone: function() {
                photoview.close()
            },
            onFail: function() {
                ownerPhotoUpload.onCropCancel.call(t)
            }
        })
    },
    onCropCancel: function() {
        photoview.updateCrop({
            saving: !1
        })
    },
    start: function(e, t) {
        if (!e || !canUploadFile())
            return ownerPhotoUpload.fallback(e, t);
        var a = e.files
          , n = a[0] || !1
          , o = attr(e, "data-upload-url")
          , i = attr(e, "data-base-url")
          , r = attr(e, "data-static-url");
        if (!n)
            return !1;
        if (!o)
            return ownerPhotoUpload.fallback(e, t);
        var s = {
            upload_url: o,
            base_url: i,
            static_url: r,
            file: n
        };
        return s.xhr = uploadFile(o, {
            photo: n
        }, {
            onProgress: bind(ownerPhotoUpload.onUploadProgress, s),
            onComplete: bind(ownerPhotoUpload.onUploadComplete, s),
            onError: bind(ownerPhotoUpload.onUploadError, s)
        }),
        readFile(n, function(e) {
            photoview.updateUpload({
                thumb: e
            })
        }),
        replace(clone(e), e),
        photoview.onClose = bind(ownerPhotoUpload.onClose, s),
        photoview.openUpload({
            src: null 
        }),
        !1
    },
    getCropFromTag: function(e, t, a) {
        if (!e)
            return !1;
        if (3 == e.length)
            var n = +e[0]
              , o = +e[1]
              , i = +e[2];
        else {
            var n = +e[0] * t / 1e4
              , o = +e[1] * a / 1e4
              , i = +e[2] * t / 1e4
              , r = +e[3] * a / 1e4;
            i > r && (n += (i - r) / 2,
            i = r),
            200 > i && (dw = (200 - i) / 2,
            n -= dw,
            o -= dw,
            i = 200),
            i = Math.min(Math.max(i, 200), Math.min(t, a)),
            n = Math.min(Math.max(n, 0), t - i),
            o = Math.min(Math.max(o, 0), a - i)
        }
        return [n / t, o / a, i / Math.min(t, a)]
    },
    crop: function(e) {
        if (!e || !e.size && !e.url)
            return !1;
        var t = {
            upload_edit_url: e.upload_url
        };
        if (e.size) {
            t.photo_size = e.size;
            var a = Math.min(e.size[0], e.size[1]);
            photoview.onClose = bind(ownerPhotoUpload.onClose, t),
            photoview.openCrop({
                src: e.thumb,
                max_scale: a / 200,
                rect: ownerPhotoUpload.getCropFromTag(e.rect, e.size[0], e.size[1]),
                onSelect: bind(ownerPhotoUpload.onCropSelected, t)
            })
        } else {
            var n = ce("img", {
                src: e.url,
                onload: function() {
                    t.photo_size = [n.width, n.height];
                    var a = Math.min(n.width, n.height);
                    photoview.updateCrop({
                        src: e.thumb,
                        max_scale: a / 200,
                        rect: ownerPhotoUpload.getCropFromTag(e.rect, n.width, n.height),
                        onSelect: bind(ownerPhotoUpload.onCropSelected, t)
                    })
                }
            });
            photoview.onClose = bind(ownerPhotoUpload.onClose, t),
            photoview.openCrop({
                src: !0
            })
        }
        return !0
    }
}
  , thover = {
    obj: null ,
    highlight: !1,
    start: function(e) {
        e.touches && 1 == e.touches.length && (thover.clear(),
        thover.end(e),
        thover.obj = this || null ,
        thover.obj && (thover.highlight = !0,
        addClass("hover", thover.obj)))
    },
    cancel: function(e) {
        thover.obj && (thover.highlight = !1,
        thover.end(e))
    },
    end: function() {
        thover.obj && (removeClass("hover", thover.obj),
        thover.highlight && (thover.clear(),
        addClass("active", thover.obj)),
        thover.obj = null ,
        thover.highlight = !1)
    },
    clear: function() {
        removeClass("active", geByClass1("active", "vk_wrap"))
    }
};
addEvent(document, "touchmove touchcancel", thover.cancel),
addEvent(document, "touchend", thover.end);
function fixHeight() {
    if ((browser.safari_mobile || browser.android || browser.opera_mobile && !browser.opera_mini) && !hasClass("body_fullscreen", bodyNode)) {
        var e = (getCh(),
        scrollTop());
        bodyNode.style.overflow = "hidden",
        bodyNode.style.minHeight = "5000px",
        scrollTop(10);
        var t = getCh() + (browser.android ? 1 : 0);
        scrollTop(e),
        bodyNode.style.minHeight = t + "px",
        bodyNode.style.overflow = "",
        window.realClientHeight = t
    }
}
function optionsTest() {
    if (lsGet("custom_opts"))
        return addClass("_copts", "vk_wrap");
    var e = ce("div", {
        innerHTML: '<input id="copts_test_radio" type="radio" checked="checked"><div id="copts_test_label"></div>'
    });
    append(e, "vk_utils");
    var t = ge("copts_test_label");
    t && Math.abs(t.offsetWidth - 5) < 1 && (addClass("_copts", "vk_wrap"),
    lsSet("custom_opts", 1)),
    remove(e)
}
var page = {
    fast_load: !1,
    need_hard_go: !1,
    getHash: function(e) {
        if ("#player" == e.hash)
            return !1;
        var t = qs2obj(e.params);
        return delete t.z,
        e.path + obj2qs(t)
    },
    getAlias: function(e) {
        if (!e)
            return !1;
        var t = (e || "").split("?")
          , a = t[0]
          , n = qs2obj(t[1]);
        return n.from && delete n.offset,
        delete n.from,
        delete n.z,
        a + obj2qs(n)
    },
    set: function(e, t, a, n) {
        a = a || {};
        var o = scrollTop()
          , i = null ;
        if (zlayer.opened() && (o = zlayer._st),
        a.force || (i = remove("m"),
        each(geByClass("_cntr", i), function() {
            remove(this)
        }),
        remove(geByClass1("_cntrs", i))),
        !a.after && !page.fast_load) {
            var r = page.getHash(nav);
            page.save(r, {
                html: null ,
                st: o,
                page: i,
                state: page.stash(),
                cur: window.cur
            }, !0)
        }
        if (a.before || page.clear(),
        (a.before || !a.before && !a.after) && (window.lm_qsearch_counter ? lm_qsearch_counter++ : lm_qsearch_counter = 1),
        a.before) {
            page.fast_load = !0,
            n && n.target && addClass("__al_target", n.target);
            var s = i.cloneNode(!0);
            n && n.target && removeClass("__al_target", n.target);
            var l = geByClass1("__al_target", s);
            removeClass("__al_target", l),
            a.beforeAppend && a.beforeAppend(s, l),
            after(s, "l"),
            cur.toggleHeaderSearch && cur.toggleHeaderSearch(!1),
            a.afterAppend && a.afterAppend(s),
            menu && menu.clear_hover(),
            menu && menu.closeSearch(),
            menu && menu.enabled(!0)
        } else {
            if (n && n.zProcess && n.zProcess(0, !0) && delete n.zProcess,
            n && nav.set(n),
            page.need_hard_go)
                return nav.hard_go(nav.cur, null , {
                    replace: !0
                });
            if (!a.force) {
                t.title && (document.title = t.title);
                var c = t.page;
                if (c || (c = ce("div", {
                    id: "m"
                }),
                val(c, t.html)),
                menu.opened()) {
                    var u = ce("div", {
                        id: "m_helper",
                        onclick: menu.close
                    });
                    append(u, c)
                }
                after(c, "l")
            }
            page.fast_load = !1,
            thover.clear(),
            t.lm && menu.refresh(t.lm),
            t.bc && (bodyNode.className = t.bc),
            zlayer.opened(),
            n && n.zProcess ? n.zProcess(0, !1) && delete n.zProcess : zlayer.close(),
            a.force || (t.js && evalJs(t.js),
            t.state && page.stash(t.state),
            t.cur && extend(window.cur, t.cur),
            page.save(e, t));
            var d = n ? n.nav && n.nav.hash : nav.hash;
            t.st || !d ? scrollTop(t.st || 0, 10) : a.no_scroll && !a.force ? scrollTop(o, 10) : scrollToHash(),
            audioplayer && audioplayer.initAudio()
        }
        onBodyResize(Tabs.actualizeShowMoreVisibility),
        Tabs.actualizeShowMoreVisibility()
    },
    save: function(e, t, a) {
        if (e) {
            var n = a ? nav.page_get(e) : {};
            n && nav.page_set(e, extend(n, t), page.getAlias(e))
        }
    },
    restore: function(e) {
        var t = nav.page_get(e);
        return t || (t = nav.page_get(page.getAlias(e))),
        t ? t : !1
    },
    stash: function(e) {
        return window.cur && cur.stash && cur.stash(e) || !1
    },
    clear: function() {
        onBodyScroll("__clear"),
        onBodyResize("__clear"),
        menu && menu.initEvents(),
        zlayer && zlayer.initEvents(),
        tooltip && tooltip.clear(),
        window.cur && cur.destroy && each(cur.destroy, function() {
            this()
        }),
        window.cur = {
            destroy: []
        }
    },
    setMhead: function(e, t, a, n) {
        var o = geByClass1("mhead", e)
          , i = geByClass1("mhb_logo", o)
          , r = geByClass1("mh_header", e)
          , s = !1;
        if (!a)
            return void (t && val(r, t));
        a === !0 ? s = nav.path + (nav.params ? "?" + nav.params : "") : a && (s = a),
        t || (t = val(r) || "&nbsp;");
        var l = geByClass1("mhb_back", e)
          , c = ""
          , u = hasClass("mh_nobr", l) ? " mh_nobr" : ""
          , d = n ? ' onclick="' + n + '"' : "";
        if (c = "/" == s ? '<div class="hb_wrap mhb_back' + u + '"' + d + '><h1 class="hb_btn mh_header">' + t + "</h1></div>" : '<a href="' + escapeAttr(s) + '" class="hb_wrap mhb_back' + u + ' al_back" accesskey="0"' + d + '><h1 class="hb_btn mh_header mhi_back">' + t + "</h1></a>",
        o && i) {
            var p = geByClass1("mhb_notify", e);
            val(o, (window.al && window.al.menu ? '<a href="/" class="hb_wrap mhb_home" accesskey="*" onclick="return menu.toggle(event);"><div class="hb_btn mhi_home">&nbsp;</div></a>' : '<a href="/" class="hb_wrap mhb_home mhb_vkhome" accesskey="*"><div class="hb_btn mhi_home mhi_vkhome">&nbsp;</div></a>') + '<div id="header_msgs" class="hb_wrap mhb_notify' + (!p || hasClass("mhb_no_notify", p) ? " mhb_no_notify" : "") + '">' + val(p) + "</div>" + c)
        } else if (l) {
            var v = ce("div");
            val(v, c),
            before(v.firstChild, l),
            remove(l)
        }
    }
};
ajax._init(),
ajax.enabled = ajax._req ? !0 : !1,
ajax.enabled && (onDOMReady(function() {
    remove("app_go_frame"),
    ajax.prepare_nav(),
    ajax.prepare_click(),
    menu && menu.init(),
    audioplayer && audioplayer.initAudio(),
    addClass("_js", "vk_wrap")
}),
page.clear()),
addEvent(window, "orientationchange", fixHeight),
addEvent(document, "touchstart", function(e) {
    var t = checkTouchHover(e.target);
    t && thover.start.call(t, e)
}),
addEvent(document, "click", function(e) {
    if (window.al && al.ver) {
        var t = gpeByClass("al_after", e.target);
        if (t) {
            var a = attr(t, "data-target")
              , n = a ? geByClass1(a, t) : !1;
            if (n && !nav.go_after(n, e) || !nav.go_after(t, e))
                return
        }
        var o = checkNav(e.target);
        o && (nav.go(o, e) || cancelEvent(e))
    }
}),
addEvent(document, isTouch ? "touchstart" : "mousedown", function(e) {
    tooltip.closeByTap(e)
}),
onDOMReady(fixHeight),
onDOMReady(optionsTest),
sgFix();
var nav = function() {
    var e = !(!window.history || !history.pushState)
      , t = null 
      , a = se(function() {
        return t
    })
      , n = []
      , o = 7
      , i = !1
      , r = 30;
    function s(e, t, a) {
        for (var i = n.length - 1; i >= 0; --i)
            if (n[i].h == e || n[i].a == e)
                return void (n[i] = {
                    h: e,
                    d: t,
                    a: a
                });
        n.push({
            h: e,
            d: t,
            a: a
        }),
        n.length > o && n.shift()
    }
    function l(e) {
        for (var t = n.length - 1; t >= 0; --t)
            if (n[t].h == e || n[t].a == e)
                return n = n.slice(0, t + 1),
                n[t].d;
        return !1
    }
    function c(e) {
        var t;
        if (t = /^(https?:)\/\/([^:\/]+)?(?::(\d+))?\/?(.*)$/i.exec(e)) {
            if (t[1] != location.protocol)
                return !1;
            if (t[2] && t[2] != location.hostname)
                return !1;
            if (t[3] && t[3] != location.port)
                return !1;
            e = t[4]
        }
        return e
    }
    function u(e) {
        var t = ce("iframe");
        attr(t, "id", "upload_iframe"),
        attr(t, "name", "upload_iframe"),
        attr(t, "width", "0"),
        attr(t, "height", "0"),
        attr(t, "border", "0"),
        attr(t, "style", "width:0;height:0;border:none;position:absolute;left:-1000px;"),
        append(t, e.parentNode),
        window.frames.upload_iframe.name = "upload_iframe",
        t = ge("upload_iframe");
        var a = !1;
        return each(e, function(e, t) {
            return "submit" === t.type ? (a = t,
            !1) : void 0
        }),
        addEvent(t, "load", function n() {
            removeEvent(t, "load", n),
            setTimeout(function() {
                remove(t),
                unlockButton(a)
            }, 2e3)
        }),
        setDocumentDomain(),
        attr(e, "target", "upload_iframe"),
        attr(e, "method", "post"),
        attr(e, "enctype", "multipart/form-data"),
        attr(e, "encoding", "multipart/form-data"),
        append(ce("input", {
            type: "hidden",
            id: "__extra",
            name: "__extra",
            value: 1
        }), e),
        e.submit(),
        lockButton(a),
        setTimeout(function() {
            remove("__extra")
        }, 0),
        !1
    }
    function d(e, t) {
        if (!window.al || !al.ver)
            return !0;
        var a = checkNav(t.target, {
            skip_onclick: !0,
            skip_clicable: !0
        });
        return a ? !0 : e === !1 ? !1 : (nav.go(e, t) || cancelEvent(t),
        !1)
    }
    function p(e, t, a) {
        if (!a)
            return !0;
        if (checkEvent(t))
            return !0;
        remove("app_go_frame");
        var n = getHref(e)
          , o = ce("iframe", {
            id: "app_go_frame",
            src: a,
            onload: function() {
                remove("app_go_frame"),
                n && nav.hard_go(n)
            }
        }, {
            display: "none"
        });
        return bodyNode.appendChild(o),
        !1
    }
    function v(e, t, a) {
        return checkEvent(t) ? !0 : a && a.push_only ? !0 : (a && a.replace ? location.replace(e) : e && (location.href = getHref(e)),
        !0)
    }
    function f(e, t, a) {
        cancelEvent(t);
        var n = getHref(e);
        if (window.al && al.ver) {
            if (a && a.push_only)
                return !0;
            if (ajax.nav(n, a))
                return !0
        }
        v(n, t, a)
    }
    function _(t, a, n) {
        if (n = extend({
            no_push: !1,
            push_only: !1,
            replace: !1
        }, n),
        checkEvent(a))
            return !stopEvent(a);
        if (!t)
            return !0;
        e && (n.no_push || n.need_restore) && (i = !1);
        var o = t
          , r = ""
          , s = ""
          , l = "";
        !t.href && t.getAttribute && (o = t.getAttribute("data-href"));
        var d = a && ("a" === tag(a.target) ? a.target : gpeByTag("a", a.target));
        if (("input" == tag(t) || "button" == tag(t)) && ("submit" == t.type || "image" == t.type) && t.form) {
            if (t.disabled)
                return !0;
            var p = t.form
              , v = {}
              , f = p.action || ""
              , _ = !1;
            if (each(p, function(e, a) {
                return !a.name || a.disabled ? !0 : ("radio" !== a.type || a.checked) && ("checkbox" !== a.type || a.checked) ? "button" === a.type ? !0 : "submit" === a.type && a !== t ? !0 : "image" === a.type && a !== t ? !0 : "file" === a.type ? (_ = !0,
                !1) : void (v[a.name] = a.value) : !0
            }),
            "image" == t.type && (v[t.name] = t.value,
            v[t.name + ".x"] = 1,
            v[t.name + ".y"] = 1),
            _ || "multipart/form-data" == attr(p, "enctype"))
                return u(p);
            if (!(o = c(f)))
                return !0;
            p.method && "get" != p.method ? n.params = v : o = o.split("?", 1).shift() + obj2qs(v)
        }
        if ("string" != typeof o) {
            if (!o)
                return !0;
            r = o.pathname,
            "/" !== r.substr(0, 1) && (r = "/" + r),
            s = o.search.substr(1),
            l = o.hash,
            o = r + o.search + l
        } else {
            var g = o.split("#")
              , m = g.shift();
            l = g.length ? "#" + g.join("#") : "",
            m = m.split("?"),
            r = m.shift(),
            s = m.join("?"),
            !l && !s || r || (r = nav.path,
            m || (s = nav.params),
            o = r + (s ? "?" + s : "") + l)
        }
        var b = d && d.getAttribute ? d.getAttribute("data-post-id") : "";
        if (b && !s.match(/(^|&)_post=/) && (s += "_post=" + b),
        a && o.split("#").shift() == nav.cur.split("#").shift() && l && !n.force && (scrollToHash(l),
        n.push_only = !0),
        n.no_push && nav.cur == o && !n.force)
            return !1;
        if (n.push_only)
            return y(extend(n, {
                nav: {
                    push: o,
                    path: r,
                    params: s,
                    hash: l
                }
            })),
            !1;
        addClass("active", n.link || t),
        hasClass("al_back", t) && (n.need_restore = !0);
        var w = h(extend(n, t.tagName ? {
            target: t
        } : {}, {
            nav: {
                push: o,
                path: r,
                params: s,
                hash: l
            }
        }));
        return w || cancelEvent(a),
        w
    }
    function h(e) {
        var t = qs2obj(e.nav.params)
          , a = qs2obj(nav.params);
        if ((a.z || t.z) && a.z != t.z) {
            if (nav.path == e.nav.path) {
                var n = copy(t)
                  , o = copy(a);
                if (delete n.z,
                delete o.z,
                n = obj2qs(n),
                o = obj2qs(o),
                n == o)
                    return g(t.z, !1, e),
                    y(e),
                    menu.close(null , !0),
                    !1
            }
            e.zProcess = function(a, n) {
                g(t.z, a, extend({}, e, {
                    no_push: !0
                }), n)
            }
        }
        return e.onPreNav = function() {
            e.zProcess && (e.zProcess(),
            delete e.zProcess)
        }
        ,
        !e.ignore_cur_process && cur.processNav && cur.processNav(e) ? (y(e),
        menu.close(null , !0),
        !1) : (f(e.nav.push, null , e),
        !1)
    }
    function g(e, t, a, n) {
        var o;
        if (e && (o = /^photo(-?\d+_\d+)(?:\/([a-z0-9_-]+(\/rev)?)?)?$/i.exec(e))) {
            if (n === !0)
                return !1;
            var i = o[1] || ""
              , r = o[2] || "";
            return photo.zopen(!1, null , i, r, {
                no_push: (a || {}).no_push
            }),
            zlayer && t !== !1 && "undefined" != typeof t && (zlayer._st = t),
            !0
        }
        return n === !1 ? !1 : (zlayer && zlayer.close(),
        !0)
    }
    function m(a, n) {
        if (e)
            a = "/" == a.substr(0, 1) ? a : "/" + a,
            n.replace ? history.replaceState(null , null , a) : history.pushState(null , null , a);
        else {
            var o = "/" == a.substr(0, 1) ? a : "/" + a
              , i = "#" + o
              , r = location.pathname + location.search + i;
            ge("base").href = o,
            n.replace ? location.replace(r) : (t = i,
            location.href = r)
        }
    }
    function y(t) {
        if (!t.no_push && nav.cur != t.nav.push)
            try {
                m(t.nav.push, t),
                e && !t.no_push && (t.nav_init || t.nav_incr) ? (t.nav_init && (i = 0),
                t.nav_incr && i !== !1 && i++,
                i > r && (i = !1)) : i = !1
            } catch (a) {
                return v(t.nav.push, null , t)
            }
        nav.cur = t.nav.push,
        nav.path = t.nav.path,
        nav.params = t.nav.params,
        nav.hash = t.nav.hash
    }
    function b() {
        var e = location.hash || "";
        t !== e && (t = e,
        a(!0)),
        setTimeout(b, 100)
    }
    function w() {
        var e = i;
        return e && history.go(-e),
        i = !1,
        e ? !0 : !1
    }
    if (e)
        addEvent(window, "popstate", function() {
            _(location, null , {
                no_push: !0,
                need_restore: !0
            })
        });
    else {
        var C = location.hash || "";
        "#/" == C.substr(0, 2) && v(C.substr(1), null , {
            replace: !0
        });
        var k = function(e) {
            e = (e || "").substr(1),
            e && "/" == e.substr(0, 1) || (e = location),
            _(e, null , {
                no_push: !0,
                need_restore: !0
            })
        }
        ;
        "onhashchange" in window ? addEvent(window, "hashchange", function() {
            k(location.hash || "")
        }) : (b(),
        a(function(e) {
            k(e)
        }))
    }
    function x() {
        var e = qs2obj(nav.params);
        e.z && g(e.z)
    }
    var S = (location.pathname || "").replace(/^\/+/, "/")
      , B = location.search || ""
      , z = location.hash || "";
    return {
        go: _,
        al_go: f,
        app_go: p,
        hard_go: v,
        go_after: d,
        page_set: s,
        page_get: l,
        set: y,
        checkUrl: c,
        tryHistoryBack: w,
        zInit: x,
        cur: S + B + z,
        path: S,
        params: B.substr(1),
        hash: z
    }
}()
  , Like = {
    onDone: function(e, t, a, n) {
        var o = ge(e) || geByClass1("like_box", "z") || geByClass1("like_box") || geByClass1("wall_item_for_like_" + e);
        if (o && e) {
            var i = geByClass1("item_like", o)
              , r = geByClass1("item_repost", o)
              , s = geByClass1("like_wrap", o);
            i && (i.innerHTML = t || "",
            toggle(i, t)),
            r && (r.innerHTML = a || "",
            toggle(r, a)),
            s && val(s, n || "")
        }
    },
    onFail: function() {
        var e = Array.prototype.slice.call(arguments)
          , t = e.shift();
        switch (t) {
        case 2:
            nav.hard_go(e[0])
        }
    }
}
  , PhotoLike = {
    onDone: function(e, t, a, n, o) {
        if (Like.onDone.apply(this, arguments),
        this.photo_id) {
            var i = photo.get(this.photo_id);
            if (i) {
                var r = ce("div", {
                    innerHTML: i.likes
                });
                val(geByClass1("item_like", r), t),
                i.likes = val(r),
                i.publish = '<span class="item_repost">' + a + "</span>",
                i.likes_cnt = intval(val(geByClass1("v_like", r)).replace(/\D+/g, "")),
                i.likes_me = o;
                var r = ce("div", {
                    innerHTML: i.actions
                })
                  , s = geByClass1("like_wrap", r);
                val(s, n),
                i.actions = val(r),
                photo.save(i)
            }
        }
    },
    onFail: Like.onFail
}
  , PhotoTag = {
    onDone: function() {
        if (this.photo_id) {
            var e = photo.get(this.photo_id);
            e && (e.tag_info = "",
            photo.save(e));
            var t = geByClass1("photo_view")
              , a = geByClass1("pv_tag_wrap", t);
            val(a, "")
        }
    }
}
  , PhotoDelete = {
    onDone: function(e, t, a) {
        var n = geByClass1("photo_view")
          , o = geByClass1("photo_msg")
          , i = !!t;
        if (n && o) {
            val(o, t || ""),
            toggleClass("photo_deleted", n, i);
            var r = photo.get(e);
            r && (r.deleted = t,
            photo.save(r)),
            a && menu && menu.refresh({
                pp: a
            })
        }
    }
}
  , Poll = {
    onDone: function(e, t) {
        val(e, t)
    }
}
  , CopyHistory = {
    onDone: function(e) {
        this.link && (after(cdf(e), gpeByClass("pic_body_wrap", this.link)),
        hide(this.link))
    }
}
  , ToggleMenu = {
    onStart: function() {
        addClass("cm_item_loading", this.link)
    },
    onDone: function(e) {
        this.link && val(this.link.parentNode, e)
    }
}
  , Comment = {
    onDone: function(e, t) {
        if (e) {
            remove(e + "_msg");
            var a = ge(e);
            if (a) {
                if (t) {
                    var n = ce("div", {
                        id: e + "_msg",
                        className: (a.className || "") + " post_message_item"
                    });
                    val(n, '<div class="pi_cont">' + t + "</div>"),
                    after(n, a),
                    hide(a),
                    geByClass1("rtm_reply_wrap", a) && reply.edithide()
                } else
                    show(e);
                if (this.photo_id) {
                    var o = photo.get(this.photo_id);
                    if (o) {
                        var i = geByClass1("photoview")
                          , r = geByClass1("comments_wrap", i);
                        o.comments_html = val(r)
                    }
                }
            }
        }
    }
}
  , ItemDelete = {
    onDone: function(e, t, a, n) {
        if (e) {
            remove(e + "_msg");
            var o = ge(e);
            if (o)
                if (t) {
                    var i = (/^([a-z]+)_item$/i.exec(a || "") || [])[1] || "inline"
                      , r = ce("div", {
                        id: e + "_msg",
                        className: i + "_item " + i + "_message_item"
                    })
                      , s = n || "message_item_cont";
                    val(r, '<div class="' + s + '">' + t + "</div>"),
                    after(r, o),
                    hide(o)
                } else
                    t === !1 ? hide(o) : show(o)
        }
    }
}
  , FeedIgnore = {
    onDone: function(e, t, a) {
        if (e) {
            var n = ge(e)
              , o = getY(n) || getY(e + "_msg")
              , i = getH(n) || getH(e + "_msg")
              , r = o + (320 > c ? i : 0) - scrollTop();
            if (remove(e + "_msg"),
            n) {
                var s = hasClass("wall_item", n) ? "wall" : "post";
                if (a) {
                    var l = ce("div", {
                        id: e + "_msg",
                        className: s + "_item post_message_item"
                    });
                    val(l, '<div class="pi_cont">' + a + "</div>"),
                    after(l, n)
                }
                if (t) {
                    each(geByClass(s + "_item"), function() {
                        var e = this.id ? this.id.match(/^wall((-?\d+)_(-?\d+)(_\d+)?)$/) : !1
                          , n = attr(this, "data-copy")
                          , o = n ? n.match(/^(-?\d+)_(-?\d+)$/) : !1;
                        return e ? void ((!e[4] && e[2] == t || e[4] && e[3] == t || o && o[1] == t) && toggleClass("post_item_ignored", this, a)) : !0
                    });
                    var c = getCw()
                      , o = getY(n) || getY(e + "_msg")
                      , i = getH(n) || getH(e + "_msg")
                      , u = o + (320 > c ? i : 0) - r;
                    scrollTop(u)
                }
            }
        }
    }
}
  , Wall = {
    onStart: function() {
        var e = gpeByClass("show_more_wrap", this.link)
          , t = geByClass1("show_more", e) || this.link
          , a = ce("div", {
            id: "show_more_loading",
            className: "show_more_loading",
            innerHTML: '<i class="i_loading">&nbsp;</i>'
        })
          , n = ce("div", {
            id: "show_more_wrap",
            className: "show_more_wrap"
        });
        attr(a, "data-href", getHref(t)),
        n.appendChild(a),
        before(n, e),
        remove(e)
    },
    onDone: function(e) {
        ajax.tAlProcess = (new Date).getTime();
        var t = ge("show_more_wrap")
          , a = cdf(e);
        before(a, t),
        remove(t),
        ajax.prepare_nav("mcont"),
        ajax.prepare_click("mcont"),
        onBodyScrollForce(100),
        ajax.tAlModule = cur.module,
        ajax.tAlRender = (new Date).getTime()
    }
}
  , Photos = {
    onStart: Wall.onStart,
    onDone: function(e, t) {
        ajax.tAlProcess = (new Date).getTime();
        var a = geByClass1("photos_page", "mcont")
          , n = ge("show_more_wrap")
          , o = cdf(t);
        e = e.replace(/<img src="([^"]+)" class="/gi, '<img data-src="$1" class="_image ');
        var i = cdf(e);
        a && a.appendChild(i),
        before(o, n),
        remove(n),
        ajax.prepare_nav("mcont"),
        ajax.prepare_click("mcont"),
        onBodyScrollForce(100),
        ajax.tAlModule = cur.module,
        ajax.tAlRender = (new Date).getTime()
    }
}
  , Audios = {
    onStart: Wall.onStart,
    onDone: function(e, t) {
        ajax.tAlProcess = (new Date).getTime();
        var a = geByClass1("audios_block", geByClass1("audios", "mcont"))
          , n = ge("show_more_wrap")
          , o = cdf(t)
          , i = cdf(e);
        a && a.appendChild(i),
        before(o, n),
        remove(n),
        ajax.prepare_nav("mcont"),
        ajax.prepare_click("mcont"),
        ajax.tAlModule = cur.module,
        ajax.tAlRender = (new Date).getTime()
    }
}
  , FixPost = {
    onDone: function(e) {
        var t = this.link.parentNode;
        val(t, e)
    }
}
  , ProfileMove = {
    onStart: function() {
        addClass("mva_item_loading", this.link)
    },
    onDone: function(e, t) {
        removeClass("mva_item_loading", this.link),
        e.upload_url || t && nav.hard_go(t),
        ownerPhotoUpload && ownerPhotoUpload.crop(e) || t && nav.hard_go(t)
    },
    onFail: function() {
        removeClass("mva_item_loading", this.link)
    }
}
  , Notify = {
    onStart: function() {
        var e = this.link
          , t = gpeByClass("notify_lite", e);
        if (t)
            return remove(t);
        for (; e = e.parentNode; )
            if (hasClass("notify_item", e)) {
                remove(hasClass("notify_panel", e.parentNode) ? e.parentNode : e);
                break
            }
    }
}
  , Dialog = {
    onStart: function() {
        var e = geByClass("pagination", "mcont");
        each(e, function(e, t) {
            before(ce("div", {
                className: "summary_loading",
                innerHTML: '<i class="i_loading"></i>'
            }), t.firstChild)
        })
    },
    onDone: function(e, t) {
        var a = ge("messages" + t);
        a && (val(a, e),
        !this.save && scrollToEl()),
        this.save && mail.saveDialog({
            messages: e
        }, t),
        this.clear && (val(geByTag1("textarea", "write_form"), ""),
        remove(geByClass1("pi_medias", "write_form")))
    },
    onFail: function() {
        var e = Array.prototype.slice.call(arguments)
          , t = e.shift();
        switch (t) {
        case 2:
            this.link.form && this.link.form.submit()
        }
    }
}
  , Dialogs = {
    onStart: function() {
        var e = geByClass("pagination", "mcont");
        each(e, function(e, t) {
            before(ce("div", {
                className: "summary_loading",
                innerHTML: '<i class="i_loading"></i>'
            }), t.firstChild)
        })
    },
    onDone: function(e, t) {
        var a = ge("dialogs");
        a && (val(a, e),
        !this.no_scroll && scrollToEl(),
        mail.cacheDialogsPage()),
        mail.save(t)
    }
}
  , pStats = {
    _seen: {},
    _saved: {},
    _saveTimer: null ,
    _sendTimer: null ,
    _cleanTimer: null ,
    postsGetRaws: function(e) {
        e = ge(e);
        var t, a = e.id || "", n = attr(e, "data-copy") || "", o = (attr(e, "data-view") || "",
        {});
        (t = a.match(/^wall(-?\d+_\d+)$/)) && (o[t[1]] = 1,
        (t = n.match(/^(-?\d+_\d+)$/)) && (o[t[1]] = -1));
        var i = attr(e, "data-ad-view");
        return i && (o["ad_" + i] = 1),
        o
    },
    seen: function(e) {
        var t, a, n, o, i, r;
        if (vk.id && e.length) {
            for (t in e)
                for (a in e[t])
                    o = e[t][a],
                    i = pStats._seen[a],
                    r = pStats._saved[a],
                    -1 == r || -1 == i || 1 == o && (r || i) || (n = pStats._seen[a] = o);
            n && (clearTimeout(pStats._saveTimer),
            pStats._saveTimer = setTimeout(pStats.save, 2500),
            clearTimeout(pStats._sendTimer),
            pStats._sendTimer = setTimeout(pStats.send, 5e3))
        }
    },
    save: function() {
        if (clog("saving to ls.."),
        !lsCheck() || isEmpty(pStats._seen))
            return pStats._seen;
        var e, t, a, n, o, i = Math.floor((vk.ts + Math.floor((vkNow() - vk.started) / 1e3)) / 3600), r = lsGet("posts_sent") || {}, s = lsGet("posts_seen") || {};
        for (t in pStats._seen)
            o = pStats._seen[t],
            a = t.split("_"),
            "ad" !== a[0] && (a[0] = intval(a[0]),
            a[1] = intval(a[1])),
            n = (r[a[0]] || {})[a[1]],
            a[0] != vk.id && (!n || -1 == o && n > 0) && (s[a[0]] || (s[a[0]] = {}),
            (!s[a[0]][a[1]] || -1 == o && s[a[0]][a[1]] > 0) && (e = s[a[0]][a[1]] = i * o)),
            pStats._saved[t] = o;
        pStats._seen = {},
        e && lsSet("posts_seen", s)
    },
    getSeenData: function() {
        var e, t, a, n = {}, o = [];
        if (lsCheck())
            clog("sending from ls.."),
            n = lsGet("posts_seen");
        else {
            clog("sending now.."),
            a = pStats.save();
            for (e in a)
                sn = a[e],
                p = e.split("_"),
                p[0] = intval(p[0]),
                p[0] && (p[1] = intval(p[1])),
                n[p[0]] || (n[p[0]] = {}),
                (!n[p[0]][p[1]] || -1 == sn && n[p[0]][p[1]] > 0) && (n[p[0]][p[1]] = sn)
        }
        for (e in n) {
            a = [];
            for (t in n[e])
                a.push(n[e][t] > 0 ? t : -t);
            a.length && o.push(e + "_" + a.join(","))
        }
        return o.length ? {
            seen: n,
            data: o.join(";")
        } : ""
    },
    onSend: function(e) {
        var t, a;
        if (!lsCheck())
            return extend(pStats._saved, pStats._seen);
        clog("marking in ls..");
        var t, a, n = lsGet("posts_seen") || {}, o = lsGet("posts_sent") || {};
        for (t in e) {
            for (a in e[t])
                o[t] || (o[t] = {}),
                -1 != o[t][a] && (o[t][a] = e[t][a]),
                (n[t] || {})[a] && delete n[t][a];
            n[t] && isEmpty(n[t]) && delete n[t]
        }
        lsSet("posts_seen", n),
        lsSet("posts_sent", o),
        clearTimeout(pStats._cleanTimer),
        pStats._cleanTimer = setTimeout(pStats.clean, 1e4)
    },
    send: function() {
        var e = pStats.getSeenData();
        if (e.data) {
            if (!vk.id)
                return pStats.clear();
            var t = "";
            cur && cur.module ? t = cur.module : nav && "/feed" == nav.cur && (t = "feed"),
            ajax.post("/", {
                _ajax: 1,
                act: "ping",
                _pstat: e.data,
                _pstatref: t
            }, {
                onDone: function() {
                    pStats.onSend(e.seen)
                }
            })
        }
    },
    clean: function() {
        clog("cleaning ls..");
        var e, t, a, n = Math.floor((vk.ts + Math.floor((vkNow() - vk.started) / 1e3)) / 3600), o = lsGet("posts_sent") || {}, i = 0;
        for (e in o) {
            for (t in o[e])
                a = o[e][t],
                n - (a > 0 ? a : -a) > 24 && (delete o[e][t],
                i = 1);
            isEmpty(o[e]) && (delete o[e],
            i = 1)
        }
        lsSet("posts_sent", o)
    },
    clear: function() {
        lsSet("posts_seen", {}),
        lsSet("posts_sent", pStats._saved = pStats._seen = {})
    },
    getStatsObj: function(e) {
        return e = ge(e),
        hasClass("_stats_cont", e) ? e : gpeByClass("_stats_cont", e)
    },
    viewed: function(e) {
        e = pStats.getStatsObj(e),
        e && each(geByClass("_cntr_view", e), function() {
            attr(this, "data-src") && (attr(this, "src", attr(this, "data-src")),
            attr(this, "data-src", !1),
            addClass("_cntr", this))
        })
    },
    clicked: function(e) {
        e = pStats.getStatsObj(e),
        e && (attr(e, "data-clicked", "1"),
        each(geByClass("_cntr_click", e), function() {
            attr(this, "data-src") && (attr(this, "src", attr(this, "data-src")),
            attr(this, "data-src", !1),
            addClass("_cntr", this))
        }),
        checkPostsSeen())
    }
};
pStats._sendTimer || (pStats._sendTimer = setTimeout(pStats.send, 1e4));
var post = {
    add_attach: function(e, t) {
        remove("feed_extra_field");
        var a = gpeByTag("form", e)
          , n = ce("input", {
            id: "feed_extra_field",
            type: "hidden",
            name: "add_attach",
            value: 2
        });
        if (a) {
            var o = !1;
            if (each(a, function(e, t) {
                return "submit" === t.type ? (o = t,
                !1) : void 0
            }),
            o)
                return append(n, a),
                window.al && al.ver ? nav.go(o, t) : a.submit()
        }
        return !0
    },
    toggleActions: function(e, t) {
        var a = gpeByClass("post_item", e);
        return toggleClass("pi_actions_opened", a),
        cancelEvent(t),
        !1
    },
    wallActions: function(e, t) {
        var a = gpeByClass("wall_item", e);
        if (!a)
            return !0;
        if (hasClass("wi_actions_opened", a))
            removeClass("wi_actions_opened", a),
            tooltip.hide();
        else {
            var n = geByClass1("wi_actions_wrap", a)
              , o = geByClass1("wi_actions", n)
              , i = geByClass1("wi_actions_btn", a);
            post.wallActionsHide(),
            addClass("wi_actions_opened", a);
            var r = getY(a) + 45 + getH(o) + 7
              , s = scrollTop() + getCh();
            toggleClass("wi_actions_top", n, r > s),
            tooltip.addHandler(post.wallActionsHide),
            tooltip.show(n, i)
        }
        return cancelEvent(t),
        !1
    },
    wallActionsHide: function() {
        removeClass("wi_actions_opened", geByClass1("wi_actions_opened")),
        tooltip.hide()
    },
    wallPostOpen: function(e, t) {
        var a = gpeByClass("wall_item", e)
          , n = geByClass1("wi_date", a);
        return n ? nav.go_after(n, t) : !0
    },
    toggleGif: function(e, t, a) {
        return e ? checkEvent(t) ? !0 : hasClass("current_gif", e) ? post.hideGif(e, t) : post.showGif(e, t, a) : !0
    },
    showGif: function(e, t, a) {
        if (!e)
            return !0;
        if (checkEvent(t))
            return !0;
        if (a) {
            if (cur.loadedGifs || (cur.loadedGifs = {}),
            !cur.loadedGifs[e.href] && !confirm(a))
                return !1;
            cur.loadedGifs[e.href] = !0
        }
        var n = getY(e)
          , o = scrollTop();
        each(geByClass("current_gif", "mcont"), function(e, t) {
            post.hideGif(t)
        }),
        scrollTop(o - (n - getY(e)));
        var i = ce("img", {
            src: e.href,
            className: "gif_original"
        });
        addClass("current_gif gif_loading", e),
        append(i, e);
        var r = function(t) {
            if (getW(i) && getH(i) || t) {
                if (clearInterval(s),
                !hasClass("current_gif", e))
                    return;
                replaceClass("gif_loading", "gif_opened", e)
            }
        }
          , s = setInterval(r, 100);
        return i.onload = r,
        cancelEvent(t)
    },
    hideGif: function(e, t) {
        return e ? checkEvent(t) ? !0 : (removeClass("current_gif", e),
        removeClass("gif_opened", e),
        removeClass("gif_loading", e),
        remove(geByClass1("gif_original", e)),
        cancelEvent(t)) : !0
    },
    replyNamesRE: function() {
        if (!cur.replyNames)
            return !1;
        var e = [];
        return each(cur.replyNames, function() {
            e.push(escapeRE(this[0]))
        }),
        new RegExp("^(" + e.join("|") + ")")
    },
    replyTo: function(e, t, a, n, o) {
        if (checkEvent(e))
            return !0;
        a = a || 0,
        removeClass("nc_current_reply", geByClass1("nc_current_reply"));
        var i = ge("nc_form")
          , r = ge("nc_message")
          , s = geByClass1("nc_reply_name", i)
          , l = gpeByClass("near_btn", s)
          , c = ge("nc_reply_as")
          , u = val(r)
          , d = post.replyNamesRE();
        if (a) {
            var p = ge(t + "_" + a)
              , v = getY(p) + getH(p)
              , f = scrollTop();
            after(i, p),
            addClass("nc_current_reply", geByClass1("pi_reply_wrap", p)),
            scrollTop(f + getY(p) + getH(p) - v);
            var _ = cur.replyNames[n] || {}
              , h = _[0] || ""
              , g = _[1] || "";
            u = u ? d ? u.replace(d, h) : u : h
        } else {
            append(i, geByClass1("wall_replies")),
            scrollToEl(i);
            var g = "";
            u = d ? u.replace(d, "") : u
        }
        return val(r, replaceEntities(u)),
        val(s, g),
        toggle(l, a),
        c && (val(c, +o),
        toggleClass("cp_post_as_group", i, +o)),
        val("nc_reply_to", a),
        cur.replyTo = a,
        elfocus(r),
        !1
    },
    stickersInit: function() {
        var e = ge("stickers_panel");
        if (e && !e.inited) {
            var t = geByClass1("sp_body", e)
              , a = geByClass1("sp_stickers_tabs", e);
            cur.scroller && cur.scroller.destroy(),
            cur.scroller = new Scroller(t,{
                byPage: !0
            }),
            cur.scroller.init(),
            cur.destroy.push(function() {
                cur.scroller.destroy()
            }),
            cur.tabScroller && cur.tabScroller.destroy(),
            cur.tabScroller = new Scroller(a),
            cur.tabScroller.init(),
            cur.destroy.push(function() {
                cur.tabScroller.destroy()
            }),
            e.inited = !0
        }
    },
    stickersToggle: function(e, t) {
        if (!cur.stickers)
            return !0;
        isUndefined(t) && (t = !isVisible("stickers_panel"));
        var a = ge("write_form") || ge("nc_form")
          , n = ge("stickers_panel")
          , o = geByClass1("cp_sticker_btn", a);
        return n ? (toggle(n, t),
        toggleClass("cp_sticker_btn_sel", o, t),
        t && cur.tabScroller && cur.tabScroller.onShow(),
        !1) : !0
    },
    stickersClick: function(e, t) {
        return cur.stickers && cur.stickers[t] ? (post.stickersToggle(null , !0),
        post.stickersSelectTab(null , t)) : nav.go(e)
    },
    stickersStoreOpen: function(e) {
        return ajax.click(e, !1, {
            url_params: {
                reply_to: cur.replyTo || 0
            }
        })
    },
    stickersSelectTab: function(e, t) {
        if (cur.tabScroller && !cur.tabScroller.canClick())
            return !1;
        var a = ge("stickers_panel")
          , n = geByClass1("sp_body", a)
          , o = geByClass1("sp_tab_selected", a);
        if (cur.stickers[t]) {
            cur.scroller.destroy(),
            val(n, cur.stickers[t]),
            cur.scroller.init(),
            e || (e = geByClass1("sp_tab" + t, a)),
            removeClass("sp_tab_selected", o),
            addClass("sp_tab_selected", e);
            var i = getY(a)
              , r = i + getW(a)
              , s = scrollTop()
              , l = s + getCh();
            (s > i || r > l) && scrollToEl(a),
            cur.tabScroller && cur.tabScroller.showElem(e)
        }
        return !1
    },
    addRecentSticker: function(e, t, a) {
        var n = gpeByClass("sticker_item", e);
        if (cur.stickers && cur.stickers[-1] && n) {
            var o = ce("div", {
                innerHTML: cur.stickers[-1]
            })
              , i = clone(n)
              , r = geByClass1("sticker_thumb", i)
              , s = geByClass1("stickers_list", o);
            attr(r, "onclick", "return post.sendSticker(this, " + t + ", true);"),
            each(geByClass("sticker" + t, s), function() {
                remove(this)
            }),
            before(i, s.firstChild);
            var l = 0;
            each(geByClass("sticker_item", s), function() {
                l++ >= 8 && remove(this)
            }),
            cur.stickers[-1] = val(o),
            a && post.stickersSelectTab(!1, -1)
        }
    },
    sendSticker: function(e, t, a) {
        if (cur.scroller && !cur.scroller.canClick())
            return !1;
        post.stickersToggle(e, !1);
        var n = ge("write_submit")
          , o = {
            lock: !0,
            url_params: {
                media: "sticker" + t,
                _af: srand()
            }
        };
        if (a && (o.url_params.media_from = "recent"),
        post.addRecentSticker(e, t, a),
        n)
            return ajax.click(n, extend({
                save: !0
            }, Dialog), o);
        var n = ge("nc_submit");
        return n ? ajax.click(n, {}, o) : void 0
    }
}
  , tooltip = {
    tt: !1,
    handlers: [],
    show: function() {
        tooltip.shown || (tooltip.tt = Array.prototype.slice.call(arguments))
    },
    hide: function() {
        tooltip.tt && (tooltip.tt = !1)
    },
    addHandler: function(e) {
        e && tooltip.handlers.push(e)
    },
    removeHandler: function(e) {
        return e ? void each(tooltip.handlers, function(t) {
            return e === this ? (tooltip.handlers.splice(t, 1),
            !1) : void 0
        }) : void (handlers = [])
    },
    onClose: function() {
        each(tooltip.handlers, function() {
            this()
        })
    },
    clear: function() {
        tooltip.tt && (tooltip.hide(),
        tooltip.onClose(),
        tooltip.removeHandler())
    },
    closeByTap: function(e) {
        if (!tooltip.tt || !e.target)
            return !1;
        var t = e.target;
        do
            for (var a = 0; a < tooltip.tt.length; a++)
                if (t === tooltip.tt[a])
                    return !1;
        while (t = t.parentNode);return tooltip.hide(),
        tooltip.onClose(),
        !0
    }
}
  , menu = {
    enabled: function(e) {
        return window.al && window.al.menu ? ("undefined" != typeof e && (e ? replaceClass("_lms", "_lm", bodyNode) : (replaceClass("_lm", "_lms", bodyNode),
        menu.qsClose())),
        hasClass("_lm", bodyNode)) : (removeClass("_lm", bodyNode),
        removeClass("_lms", bodyNode),
        !1)
    },
    opened: function() {
        return hasClass("lm_opened", bodyNode)
    },
    toggle: function(e, t) {
        return checkEvent(e) ? !0 : window.al && window.al.menu ? (menu.opened() ? menu.close(e, t) : menu.open(e, t),
        !1) : !0
    },
    open: function(e) {
        if (checkEvent(e))
            return !0;
        if (!window.al || !window.al.menu)
            return !0;
        if (menu.opened())
            return !1;
        if (zlayer && zlayer.opened())
            return !1;
        if (!menu.enabled())
            return nav.go("/"),
            !1;
        menu.clear_hover();
        var t = ce("div", {
            id: "m_helper",
            onclick: menu.close
        })
          , a = menu._st || 0
          , n = scrollTop()
          , o = ge("l")
          , i = ge("m")
          , r = ge("vk_wrap")
          , s = geByClass1("head_search", o)
          , c = r.offsetWidth
          , u = i.offsetWidth
          , d = i.offsetHeight;
        if (!(c >= 882)) {
            append(t, "m"),
            menu.fixed ? (addClass("lm_opened", bodyNode),
            addClass("lm_anim_start", r),
            setTimeout(function() {
                replaceClass("lm_anim_start", "lm_anim lm_anim_end", r)
            }, 5),
            setTimeout(function() {
                removeClass("lm_anim_end", r),
                removeClass("lm_anim", r)
            }, 200),
            addEvent(i, "scroll touchmove", menu.blockScroll),
            addEvent(l, "touchstart touchmove", menu.blockMenuScroll),
            addEvent(s, "touchstart touchmove", menu.blockMenuScroll)) : addClass("lm_opened", bodyNode);
            var p = o.offsetHeight
              , v = c >= 480;
            return v ? a = n <= p - getCh() ? Math.min(n, p - getCh()) : 0 : a > n ? a = n : n - a > d - p && d > p && (a = n - d + p),
            menu._st = Math.max(0, n - a),
            menu._mw = u,
            menu.fix_size(!1),
            menu.fixed || scrollTop(a),
            ajax.post("/", {
                _ajax: 1,
                act: "ping"
            }),
            window.lm_qsearch_counter ? lm_qsearch_counter-- : lm_qsearch_counter = -1,
            lm_qsearch_counter && menu.cancelSearch(),
            !1
        }
    },
    close: function(e) {
        if (checkEvent(e))
            return !0;
        if (!window.al || !window.al.menu)
            return !0;
        if (!menu.opened())
            return !1;
        remove("m_helper"),
        menu.clear_hover();
        {
            var t = scrollTop()
              , a = menu._st + t
              , n = ge("l")
              , o = ge("m")
              , i = ge("vk_wrap")
              , r = geByClass1("head_search", n)
              , s = ge("vk_wrap").offsetWidth
              , c = s >= 480;
            t < n.offsetHeight
        }
        return menu.fixed ? (addClass("lm_anim_end", i),
        setTimeout(function() {
            replaceClass("lm_anim_end", "lm_anim lm_anim_start", i)
        }, 5),
        setTimeout(function() {
            removeClass("lm_anim_start", i),
            removeClass("lm_anim", i),
            removeClass("lm_opened", bodyNode)
        }, 200),
        removeEvent(o, "scroll touchstart", menu.blockScroll),
        removeEvent(l, "touchstart touchmove", menu.blockMenuScroll),
        removeEvent(r, "touchstart touchmove", menu.blockMenuScroll)) : removeClass("lm_opened", bodyNode),
        menu._st = c ? 0 : t,
        menu.fix_size(!0),
        menu.fixed || scrollTop(a),
        window.lm_qsearch_focused && menu.cancelSearch(),
        !1
    },
    blockScroll: function(e) {
        var t = ge("vk_wrap");
        menu.opened() && getW(t) < 882 && preventEvent(e)
    },
    blockMenuScroll: function(e) {
        var t = ge("vk_wrap");
        if (menu.opened() && getW(t) < 882) {
            var a = e.touches
              , n = (a && a[0] ? a[0].pageY : e.pageY) || 0;
            if ("touchstart" == e.type)
                menu.lmStartY = n;
            else if ("touchmove" == e.type && menu.lmStartY !== !1) {
                if (hasClass("head_search", e.currentTarget))
                    preventEvent(e);
                else if (n - menu.lmStartY >= 0) {
                    var o = ge(getCh() >= 440 ? "lm_cont" : "l");
                    o && o.scrollTop <= 0 && preventEvent(e)
                } else {
                    var o = ge(getCh() >= 440 ? "lm_cont" : "l");
                    o && o.scrollTop >= o.scrollHeight - o.offsetHeight && preventEvent(e)
                }
                menu.lmStartY = !1
            }
        }
    },
    fix_size: function(e) {
        var t = ge("l")
          , a = ge("m")
          , n = (menu._mw || Math.min(690, getCw()),
        ge("mhead"))
          , o = n && n.offsetHeight || 0
          , i = menu._st || 0;
        t && (e ? a.style.minHeight = "0" : (i = i > o ? i : 0,
        a.style.minHeight = t.offsetHeight + i + "px"),
        !menu.fixed || getCw() < 320 ? e ? a.style.marginTop = "0" : (t.style.minHeight = getCh() + "px",
        a.style.marginTop = -i + "px") : t.style.minHeight = "0")
    },
    clear_hover: function() {
        thover.clear()
    },
    refreshCounters: function(e) {
        if (!e || !e.length)
            return !0;
        if (!window.al || !window.al.menu)
            return !0;
        if (e.length != window.al.menu.length)
            return !1;
        var t = geByClass1("main_menu", "l");
        return each(e, function(e, a) {
            if ("undefined" == typeof a)
                return !0;
            var n = al.menu[e]
              , o = geByClass1("mmi_" + n[0], t)
              , i = geByClass1("mm_item", o)
              , r = geByClass1("mmi_wrap", o)
              , s = geByClass1("mm_counter", r);
            attr(i, "data-href", !1),
            a ? (n[2] && attr(i, "href", n[2]),
            s ? val(s, a) : append(ce("em", {
                className: "mm_counter",
                innerHTML: a
            }), r)) : (n[1] && attr(i, "href", n[1]),
            remove(s)),
            ajax.prepare_click(i)
        }),
        !0
    },
    refresh: function(e) {
        e = e || {},
        ajax.refreshLinks(e.fv_link, e.app_link),
        "undefined" != typeof e.pp && e.pp !== !1 && val("lm_prof_panel", e.pp),
        "undefined" != typeof e.tn && e.tn !== !1 && val("lm_top_notify", e.tn),
        "undefined" != typeof e.bn && e.bn !== !1 && val("lm_bottom_notify", e.bn),
        e.lm && val("l", e.lm),
        e.topbar || remove("vk_topbar")
    },
    initEvents: function() {
        onBodyResize(function() {
            var e = ge("vk_wrap").offsetWidth
              , t = hasClass("_hfixed", bodyNode)
              , a = menu._st || 0;
            e >= 882 && a > 44 && menu.close(),
            menu.fix_size(!menu.opened(), t)
        })
    },
    init: function() {
        menu.fixed = hasClass("_hfixed", bodyNode),
        menu.initEvents(),
        addEvent(window, "orientationchange", function() {
            var e = ge("vk_wrap").offsetWidth
              , t = menu._st || 0;
            e >= 882 && t > 44 && menu.close()
        }),
        menu.initTouch()
    },
    initTouch: function() {
        if (addEvent(document, "keydown", function(e) {
            e && e.shiftKey && (e.ctrlKey || e.metaKey) && vk.__debug && 77 == e.keyCode && (cancelEvent(e),
            menu.toggle())
        }),
        isTouch) {
            var e = !1
              , t = !1
              , a = 10
              , n = Math.min(604, getCw()) / 3
              , o = 30;
            function i(e) {
                var t = e.touches
                  , a = scrollTop()
                  , n = (t && t[0] ? t[0].pageX : e.pageX) || 0
                  , o = (t && t[0] ? t[0].pageY : e.pageY) || 0;
                return {
                    x: n,
                    y: o - a
                }
            }
            function r(e, t) {
                var a = t.x - e.x
                  , n = t.y - e.y;
                return Math.sqrt(a * a + n * n)
            }
            function s(e, t) {
                var a = t.x - e.x
                  , n = e.y - t.y;
                return Math.abs(180 * Math.atan2(n, a) / Math.PI)
            }
            addEvent(document, "touchstart", function(a) {
                geByClass1("mhb_home", "mhead") && (scrollLeft() > 0 || (e = t = i(a)))
            }),
            addEvent(document, "touchmove touchend touchcancel", function(l) {
                if (e) {
                    "touchmove" == l.type && (t = i(l));
                    var c = r(e, t)
                      , u = s(e, t);
                    if (("touchend" != l.type && "touchcancel" != l.type || (e = !1,
                    "touchcancel" != l.type)) && !(a > c)) {
                        if (menu.opened() && (u = 180 - u),
                        u > o)
                            return void (e = !1);
                        preventEvent(l),
                        c > n && (e = !1,
                        menu.toggle())
                    }
                }
            })
        }
    },
    qsOpened: !1,
    qsOpen: function() {
        menu.qsOpened || (menu.qs_st = scrollTop(),
        addClass("qs_opened", "vk_wrap"),
        addClass("qs_opened", bodyNode),
        getW("vk_wrap") < 882 && scrollTop(0),
        menu.qsOpened = !0)
    },
    qsClose: function() {
        menu.qsOpened && (removeClass("qs_opened", "vk_wrap"),
        removeClass("qs_opened", bodyNode),
        getW("vk_wrap") < 882 && scrollTop(menu.qs_st || 0),
        menu.qsOpened = !1)
    },
    closeSearch: function() {
        return window.al && window.al.menu ? (window.lm_qsearch && lm_qsearch.blur(),
        menu.qsClose(),
        !1) : !0
    },
    cancelSearch: function() {
        return window.al && window.al.menu ? (window.lm_qsearch && lm_qsearch.clear(),
        menu.qsClose(),
        !1) : !0
    },
    headerAction: function(e, t) {
        return getW("vk_wrap") >= 882 ? nav.go(e, t) : menu.toggle()
    }
}
  , mail = function() {
    var e = {}
      , t = {}
      , a = null 
      , n = null 
      , o = !1
      , i = {}
      , r = {}
      , s = {}
      , l = null ;
    function c() {
        if (a) {
            var t = []
              , n = !1;
            if (each(geByClass("_unread"), function() {
                var e = +attr(this, "data-id");
                e && t.push(e),
                n = mail.getPeerByMsg(e),
                replaceClass("_unread", "_read", this)
            }),
            n) {
                var o = ge("messages" + n);
                o && e[n] && (e[n].messages = val(o))
            }
            t.length && mail.sendMarkAsRead(a, t)
        }
    }
    function u(e, t) {
        t ? (addClass("lvi", e),
        toggleClass("mlvi", e, !!mobPlatforms[t])) : (removeClass("lvi", e),
        removeClass("mlvi", e))
    }
    return {
        init: function(t, i) {
            t && (a = t,
            i && (mail.saveDialog(i, t),
            n = e[t])),
            o || (o = !0,
            addEvent(document, isTouch ? "touchstart" : "mousedown", c)),
            im.on()
        },
        clear: function() {
            e = {},
            t = {},
            i = {},
            a = n = null ,
            removeEvent(document, isTouch ? "touchstart" : "mousedown", c),
            o = !1,
            im.off()
        },
        send: function(e) {
            return mediaUpload && !mediaUpload.checkUploading() ? !1 : ajax.click(e, extend({
                clear: !0,
                save: !0
            }, Dialog), {
                lock: !0
            })
        },
        save: function(t) {
            each(t, function(t, a) {
                e[t] && a.last_msg == e[t].last_msg && delete a.messages,
                mail.saveDialog(a, t)
            })
        },
        saveDialog: function(t, a) {
            e[a] || (e[a] = {});
            var n = e[a];
            extend(n, t),
            n.msgs && each(n.msgs, function(e, t) {
                i[t] = a
            })
        },
        getPeerByMsg: function(e) {
            return i[e] || !1
        },
        cacheDialogsPage: function() {
            t.page = val("m");
            var e = qs2obj(nav.params);
            t.link = e.act ? "/mail" : nav.cur
        },
        keyup: function(e, t, a) {
            var n = l || ""
              , o = e.value || "";
            (n.length != o.length || n != o) && (mail.myTyping(t, a),
            l = o)
        },
        myTyping: function(e, t) {
            if (!(-2e9 >= e)) {
                var a = vkNow();
                s[e] && a - s[e] < 5e3 || (s[e] = a,
                ajax.post("/mail", {
                    _ajax: 1,
                    act: "typing",
                    peer: e,
                    hash: t
                }))
            }
        },
        typing: function(e, t) {
            t = t || e;
            e > 2e9 ? (r[e] || (r[e] = {}),
            r[e][t] = vkNow()) : r[e] = vkNow(),
            mail.updateTyping(e)
        },
        updateTyping: function(e) {
            var t = ge("dialog_near" + e)
              , a = geByClass1("di_current_peer", t)
              , n = geByClass1("di_typing", t);
            if (t) {
                var o = []
                  , i = vkNow();
                if (e > 2e9)
                    each(r[e] || {}, function(e, t) {
                        attr(n, "data-u" + e) && t && 6e3 > i - t && o.push(e)
                    });
                else {
                    var s = r[e];
                    attr(n, "data-u" + e) && s && 6e3 > i - s && o.push(e)
                }
                if (o.length) {
                    if (1 == o.length) {
                        var l = o[0]
                          , c = attr(n, "data-u" + l)
                          , u = attr(n, "data-s" + l);
                        val(n, '<i class="i_typing"></i>' + (lang.mobile_mail_typing[u] || "").replace("{user}", c))
                    } else {
                        each(o, function(e, t) {
                            o[e] = attr(n, "data-u" + t)
                        });
                        var d = o.pop();
                        val(n, '<i class="i_typing"></i>' + (lang.mobile_mail_multi_typing || "").replace("{users}", o.join(", ")).replace("{last_user}", d))
                    }
                    a.offsetWidth && setStyle(n, "minWidth", a.offsetWidth),
                    addClass("di_typing_now", t),
                    setTimeout(function() {
                        addClass("di_typing_animated", t)
                    }, 10),
                    setTimeout(function() {
                        mail.updateTyping(e)
                    }, 2e3)
                } else
                    val(n, ""),
                    setStyle(n, "minWidth", 0),
                    removeClass("di_typing_animated", t),
                    removeClass("di_typing_now", t)
            }
        },
        updateOnline: function(t, a) {
            var n = ge("messages" + t);
            if (n && remove(geByClass1("di_activity", n)),
            each(geByClass("_lv" + t, "mcont"), function(e, t) {
                u(t, a)
            }),
            e[t]) {
                if (e[t].write_form) {
                    var o = ce("div", {
                        innerHTML: e[t].write_form
                    });
                    each(geByClass("_lv" + t, o), function(e, t) {
                        u(t, a)
                    }),
                    e[t].write_form = val(o)
                }
                if (e[t].messages) {
                    var o = ce("div", {
                        innerHTML: e[t].messages
                    });
                    remove(geByClass1("di_activity", o)),
                    e[t].messages = val(o)
                }
            }
        },
        sendMarkAsRead: function(t, a) {
            isArray(a) || (a = [a]);
            var n = e[t];
            return n && n.hash ? void ajax.post("/mail", {
                _ajax: 1,
                act: "mark_read",
                peer: t,
                msgs: a.join(","),
                hash: n.hash
            }, {
                onDone: function(e) {
                    e && each(a, function(e, a) {
                        mail.markAsRead(t, a)
                    })
                }
            }) : void 0
        },
        markAsRead: function(t, a) {
            var n = ge("messages" + t);
            if (n) {
                var o = geByClass1("_msg" + a, n);
                im.nu && hasClass("_read", o) || removeClass("mi_unread", o);
                var i = e[t];
                if (i && i.messages) {
                    var r = ce("div", {
                        innerHTML: i.messages
                    })
                      , o = geByClass1("_msg" + a, r);
                    im.nu && hasClass("_read", o) || removeClass("mi_unread", o),
                    i.messages = val(r)
                }
            }
        },
        markPeerAsRead: function(a, n, o) {
            var i = ge("messages" + a);
            if (i) {
                each(geByClass("msg_item", i), function() {
                    if (!o == !hasClass("_unread", this))
                        return !0;
                    var e = +attr(this, "data-id");
                    n >= e && !hasClass("_read", this) && removeClass("mi_unread", this)
                });
                var r = e[a];
                if (r && r.messages) {
                    var s = ce("div", {
                        innerHTML: r.messages
                    });
                    each(geByClass("msg_item", s), function() {
                        if (!o == !hasClass("_unread", this))
                            return !0;
                        var e = +attr(this, "data-id");
                        n >= e && !hasClass("_read", this) && removeClass("mi_unread", this)
                    }),
                    r.messages = val(s)
                }
            }
            var l = ge("dialogs");
            if (unread_class = o ? "di_unread_outbox" : "di_unread_inbox",
            l) {
                var r = geByClass1("_peer" + a, l);
                r && hasClass(unread_class, r) && (removeClass(unread_class, r),
                remove(geByClass1("di_unread_cnt", r)))
            } else if (t.page) {
                var s = ce("div", {
                    innerHTML: t.page
                })
                  , r = geByClass1("_peer" + a, s);
                r && hasClass(unread_class, r) && (removeClass(unread_class, r),
                remove(geByClass1("di_unread_cnt", r))),
                t.page = val(s)
            }
        },
        markAsDeleted: function(t, a) {
            var n = ge("messages" + t);
            if (n) {
                remove(geByClass1("_msg" + a, n));
                var o = e[t];
                if (o && o.messages) {
                    var i = ce("div", {
                        innerHTML: o.messages
                    });
                    remove(geByClass1("_msg" + a, i)),
                    o.messages = val(i)
                }
            }
        },
        addMessage: function(t, a, n, o) {
            if (2e9 > t ? delete r[t] : r[t] && delete r[t][n],
            mail.updateTyping(t),
            o !== !0) {
                if (t && a && (i[a] = t),
                !geByClass1("_msg" + a)) {
                    var s = e[t];
                    if (s && s.messages) {
                        s.msgs && s.msgs.push(a);
                        var l = ce("div", {
                            innerHTML: s.messages
                        })
                          , c = geByClass1("di_activity", l);
                        c ? (after(cdf(o), c),
                        s.messages = val(l)) : s.messages = o + s.messages;
                        var u = ge("messages" + t);
                        u && val(u, s.messages)
                    } else {
                        var u = ge("messages" + t);
                        if (u) {
                            var c = geByClass1("di_activity", u);
                            c ? after(cdf(o), c) : val(u, o + val(u))
                        }
                    }
                }
            } else if (ge("dialogs") && "/mail" == nav.path) {
                var d = qs2obj(nav.params);
                d.act || d.offset || d.q || ajax.click("/mail", extend({
                    no_scroll: !0
                }, Dialogs))
            }
        },
        getMsgHTML: function(t, a, n, o, i, r, s) {
            var l = 2 & a ? vk.id : s && s.from || n;
            if (!l)
                return !1;
            if (!ge("messages" + n))
                return !0;
            if (s.attach1 || s.fwd || s.geo || s.emoji)
                return !1;
            if (!e[n] || !e[n].hash)
                return !1;
            var c = "_u" + l
              , u = geByClass1(c, "mcont", "a")
              , d = stripTags(attr(u, "data-name") || val(u) || "")
              , p = getHref(u)
              , v = geByClass1(c, "mcont", "img")
              , f = v && v.src || ""
              , _ = 32768 & a;
            if (!d || !p || !f)
                return !1;
            function h() {
                var e = new Date(1e3 * o)
                  , t = e.getHours()
                  , a = e.getMinutes();
                return t + ":" + (10 > a ? "0" : "") + a
            }
            return n = intval(n),
            t = intval(t),
            i = i && -1 == i.toString().indexOf(" ... ") && 2e9 > n ? i : "",
            msg_class = 1 & a ? " mi_unread" : "",
            !(2 & a) && 1 & a && (msg_class += msg_class ? " _unread" : ""),
            r = r.replace(/([a-zA-Z\-_\.0-9]+@[a-zA-Z\-_0-9]+\.[a-zA-Z\-_\.0-9]+[a-zA-Z\-_0-9]+)/g, function(e) {
                return '<a href="/write?email=' + e + '">' + e + "</a>"
            }),
            r = r.replace(/(https?:\/\/)?(([A-Za-zА-Яа-яЁё0-9@][A-Za-zА-Яа-яЁё0-9@\-\_\.]*[A-Za-zА-Яа-яЁё0-9@])(\/([A-Za-zА-Яа-я0-9@\-\_#%&?+\/\.=;:~]*[^\.\,;\(\)\?<\&\s:])?)?)/gi, function() {
                var e = arguments[3]
                  , t = arguments[2]
                  , a = arguments[0]
                  , n = arguments[1] || "http://";
                if (-1 == e.indexOf(".") || -1 != e.indexOf(".."))
                    return a;
                var o = e.split(".").pop();
                if (o.length > 7 || -1 == indexOf("info,name,academy,aero,arpa,coop,media,museum,mobi,travel,xxx,asia,biz,com,net,org,gov,mil,edu,int,tel,ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,bd,be,bf,bg,bh,bi,bj,bm,bn,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,ck,cl,cm,cn,co,cr,cu,cv,cx,cy,cz,de,dj,dk,dm,do,dz,ec,ee,eg,eh,er,es,et,eu,fi,fj,fk,fm,fo,fr,ga,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gu,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,il,im,in,io,iq,ir,is,it,je,jm,jo,jp,ke,kg,kh,ki,km,kn,kp,kr,kw,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mm,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,mz,na,nc,ne,nf,ng,ni,nl,no,np,nr,nu,nz,om,pa,pe,pf,pg,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,ru,rs,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,um,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,ye,yt,yu,za,zm,zw,рф,укр,сайт,онлайн,срб,cat,pro,local".split(","), o))
                    return a;
                if (-1 != a.indexOf("@"))
                    return a;
                try {
                    a = decodeURIComponent(a)
                } catch (i) {}
                return a.length > 55 && (a = a.substr(0, 53) + ".."),
                a = htsc(a),
                !_ && e.match(/^([a-zA-Z0-9\.\_\-]+\.)?(vkontakte\.ru|vk\.com|vkadre\.ru|vshtate\.ru|userapi\.com|vk\.me)$/) ? (t = replaceEntities(t).replace(/([^a-zA-Z0-9#%;_\-.\/?&=\[\]])/g, encodeURIComponent),
                '<a href="' + (n + t).replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '">' + a + "</a>") : '<a href="/away?to=' + encodeURIComponent(n + replaceEntities(t)) + '" target="_blank">' + a + "</a>"
            }),
            '<a name="msg' + t + '"></a><div class="msg_item _msg' + t + msg_class + '" data-id="' + t + '"><div class="mi_iwrap"><a class="al' + c + '" href="' + p + '"><img src="' + f + '" class="mi_img ' + c + '"></a></div><div class="mi_cont"><div class="mi_head"><a class="mi_date" href="/mail?act=msg&amp;id=' + t + '">' + h(o) + '</a><a class="mi_author al' + c + " " + c + '" href="' + p + '" data-name="' + escapeAttr(d) + '">' + d.split(" ").shift() + '</a></div><div class="mi_body">' + (i ? '<div class="mi_title">' + i + "</div>" : "") + '<div class="mi_text">' + r + "</div></div></div></div>"
        },
        updateStickers: function() {
            var t = e[a];
            if (t) {
                var n = t.write_form ? (cur.sticker_panel || "").split("mail-0").join("mail" + a) : ""
                  , o = ge("stickers_panel");
                o && (replace(cdf(n), o),
                delete o,
                post.stickersInit())
            }
        },
        showDialog: function(o, i, r) {
            t.scroll_top = scrollTop();
            var s = e[i];
            if (s) {
                var c = ce("div", {
                    innerHTML: val("m")
                })
                  , u = geByClass1("mhb_back", c);
                if (u && s.header) {
                    var d = ce("div");
                    val(d, s.header),
                    before(d.firstChild, u),
                    remove(u)
                }
                var p = s.write_form ? (cur.sticker_panel || "").split("mail-0").join("mail" + i) : "";
                val(geByClass1("pcont", geByClass1("mcont", c)), s.write_form + p + (i ? '<div id="messages' + i + '" class="messages bl_cont">' + (s.messages || "") + '<div id="al_loading"></div></div>' : "")),
                val("m", c.innerHTML),
                post.stickersInit(),
                ajax.refreshLinks(s.fv_link, s.app_link),
                alLoadingFix(),
                a = i,
                n = s;
                var v = getHref(o);
                nav.go(v, null , {
                    push_only: !0,
                    no_push: r
                }),
                i ? (l = null ,
                mail.updateTyping(i),
                ajax.click(v, extend({
                    save: i
                }, Dialog), {
                    scroll: !0
                })) : qsearch.init({
                    init_once: !0,
                    action: "/mail?act=write&fast=1",
                    container: ge("ma_search_items"),
                    field: ge("ma_search_field"),
                    btn: ge("ma_search_btn"),
                    top_items: [],
                    _cache: {},
                    item_tpl: function(e, t, a, n, o) {
                        return this.id > 2e9 || -1 == this.id ? '<a href="' + (e || "") + '" class="simple_item' + (-1 == this.id ? " simple_item_create" : "") + '">' + (t || "") + '<div class="si_body"><span class="si_owner">' + this.highlight(a || "") + "</span>" + (n || "") + (o ? '<div class="si_slabel">' + o + "</div>" : "") + "</div></a>" : '<a href="' + (e || "") + '" class="inline_item"><div class="ii_body">' + (t || "") + '<span class="ii_owner">' + this.highlight(a || "") + "</span>" + (n || "") + "</div></a>"
                    },
                    null_tpl: function() {
                        return '<div class="service_msg_box"><div class="service_msg service_msg_null">' + lang.mobile_friends_no_friends + "</div></div>"
                    },
                    need_invalid_keys: browser.desktop,
                    onLoaded: function(e) {
                        for (var t in e)
                            mail.saveDialog(e[t][e[t].length - 1], t)
                    }
                }),
                scrollTop(0, 10)
            } else
                nav.al_go(s && s.cur_link || getHref(o) || nav.cur);
            return !1
        },
        backToDialogs: function(e) {
            if (t.page)
                nav.go(t.link, null , {
                    push_only: !0,
                    no_push: e
                }),
                ajax.click(t.link, extend({
                    no_scroll: !0
                }, Dialogs)),
                val("m", t.page),
                ajax.refreshLinks(attr("fv_link", "href") || attr("fv_link", "data-href"), "vkontakte://vk.com/mail"),
                a = n = null ,
                scrollTop(t.scroll_top || 0);
            else {
                var o = t.link || "/mail";
                nav.go(o, null , {
                    push_only: !0,
                    no_push: e
                }),
                nav.al_go(o)
            }
        }
    }
}();
function Scroller(e, t) {
    var a, n, o, i, r, s = !isUndefined(document.ontouchmove), l = !0, c = !1, u = !1, d = !1, p = !1, v = 0, f = 0, _ = !1, h = 0, g = !1, m = !1, y = !1, b = !1, w = !1;
    function C(e) {
        var t = e.touches
          , a = getX(n)
          , o = getY(n)
          , i = (t && t[0] ? t[0].pageX : e.pageX) || 0
          , r = (t && t[0] ? t[0].pageY : e.pageY) || 0;
        return {
            x: i - a,
            y: r - o
        }
    }
    function k(e) {
        _ || (_ = []),
        _.push([vkNow(), e]),
        _ = _.slice(-20)
    }
    function x() {
        _ = !1
    }
    function S() {
        if (!_ || _.length < 2)
            return [0, 0, 0];
        for (var e = vkNow(), t = !1, a = _.pop(), n = _.length - 1; n >= 0; n--) {
            var o = e - _[n][0];
            if (o > 150)
                break;
            t = _[n]
        }
        if (!t || !a)
            return [0, 0, 0];
        var i = a[1].x - t[1].x
          , r = a[1].y - t[1].y
          , s = Math.sqrt(i * i + r * r)
          , o = a[0] - t[0];
        return o ? [s / o, i / o, r / o] : [0, 0, 0]
    }
    function B() {
        if (!_)
            return !1;
        var e = S()
          , t = e[0]
          , a = e[1];
        if (x(),
        !t)
            return !1;
        var n = 4.7
          , o = t / n
          , i = a * o - n * o * o / 2;
        return o *= 530,
        i *= 140,
        clog("dx", i, "t", o),
        .1 > t || !i ? !1 : {
            dx: i,
            t: o
        }
    }
    function z(e) {
        "touchstart" == e.type ? l = !e.touches || 1 == e.touches.length : "touchmove" == e.type ? l = !1 : "click" == e.type && (l || (cancelEvent(e),
        l = !0))
    }
    function T(e) {
        if (!(b && e.touches && e.touches.length > 1)) {
            if (x(),
            u) {
                if (1 >= f)
                    return
            } else {
                var t = getW(n) - getW(o);
                if (t >= 0)
                    return
            }
            d = C(e),
            p = d,
            k(p),
            y = !0,
            setStyle.animate(o)
        }
    }
    function E(e) {
        if (d && (b || y)) {
            thover && thover.cancel(e);
            var t = C(e);
            if (p = t,
            k(p),
            y) {
                var a = d.x - t.x
                  , i = d.y - t.y;
                if (Math.abs(a) >= Math.abs(i) && (cancelEvent(e),
                b = !0),
                y = !1,
                b) {
                    var r = getY(n)
                      , s = getH(n)
                      , l = scrollTop()
                      , _ = getCh();
                    l > r - 7 ? scrollTop(r - 7) : r + s + 7 > l + _ && scrollTop(r + s + 7 - _)
                }
            }
            if (b)
                if (cancelEvent(e),
                u) {
                    var g = getW(n)
                      , a = d.x - t.x;
                    (0 >= v && 0 > a || v >= f - 1 && a > 0) && (a /= 3);
                    var m = -v - a / g
                      , w = c ? 100 * m + "%" : m * g;
                    setStyle.transform(o, {
                        translate: [w, 0]
                    })
                } else {
                    var x = getW(n) - getW(o)
                      , S = 0
                      , a = d.x - t.x
                      , m = h - a;
                    if (x > 0 && (x = 0),
                    x > m)
                        var w = x - (x - m) / 3;
                    else if (m > S)
                        var w = S + (m - S) / 3;
                    else
                        var w = h - a;
                    P(w),
                    setStyle.transform(o, {
                        translate: [w, 0]
                    })
                }
        }
    }
    function j(e) {
        if (d && b) {
            if (cancelEvent(e),
            u) {
                var t = 4.7 * S()[1]
                  , a = d.x - p.x
                  , i = getW(n)
                  , r = Math.abs(a) >= i / 2;
                (v > 0 && (r && 0 > a || t > 1) || f - 1 > v && (r && a > 0 || -1 > t)) && (v += a > 0 ? 1 : -1);
                var s = -v
                  , l = c ? 100 * s + "%" : s * i;
                d = !1,
                x(),
                U(),
                setStyle.animate(o, "transform", {
                    duration: 200,
                    func: "ease"
                }),
                setStyle.transform(o, {
                    translate: [l, 0]
                })
            } else {
                var _ = B()
                  , g = getW(n) - getW(o)
                  , m = 0
                  , a = d.x - p.x
                  , s = h - a;
                _ && (s += _.dx),
                g > 0 && (g = 0),
                h = g > s ? g : s > m ? m : s;
                var y = {
                    duration: 200,
                    func: "ease"
                };
                _ && (y = {
                    duration: _.t,
                    func: "cubic-bezier(0, 1, 1, 1)"
                }),
                P(h),
                setStyle.animate(o, "transform", y),
                setStyle.transform(o, {
                    translate: [h, 0]
                })
            }
            b = w = !1
        }
    }
    function A(e) {
        if (preventEvent(e),
        u) {
            if (1 >= f)
                return
        } else {
            var t = getW(n) - getW(o);
            if (t >= 0)
                return
        }
        {
            var a = (e.detail ? e.detail : e.wheelDelta) > 0 ? 3 : -3;
            extend({
                originalEvent: e
            }, e)
        }
        if (g === !1 && (g = 0),
        g += a,
        !u) {
            var t = getW(n) - getW(o)
              , i = 0
              , r = h - g;
            if (t > 0 && (t = 0),
            t > r)
                var s = t - (t - r) / 3;
            else if (r > i)
                var s = i + (r - i) / 3;
            else
                var s = h - g;
            P(s),
            setStyle.transform(o, {
                translate: [s, 0]
            })
        }
        clearTimeout(m),
        m = setTimeout(function() {
            if (u) {
                (v > 0 && 0 > g || f - 1 > v && g > 0) && (v += g > 0 ? 1 : -1);
                var e = -v
                  , t = getW(n)
                  , a = c ? 100 * e + "%" : e * t;
                U(),
                setStyle.animate(o, "transform", {
                    duration: 200,
                    func: "ease"
                }),
                setStyle.transform(o, {
                    translate: [a, 0]
                })
            } else {
                var i = getW(n) - getW(o)
                  , r = 0
                  , e = h - g;
                i > 0 && (i = 0),
                i > e ? h = i : e > r ? h = r : h -= g,
                P(a),
                setStyle.animate(o, "transform", {
                    duration: 200,
                    func: "ease"
                }),
                setStyle.transform(o, {
                    translate: [h, 0]
                })
            }
            g = !1
        }, 200)
    }
    function M(e) {
        if (!u) {
            var t = getX(e) - getX(n)
              , a = t + h
              , i = a + getW(e)
              , r = 0
              , s = getW(n)
              , l = !1;
            r > a ? l = r - t + 20 : i > s && (l = s - getW(e) - t - 20);
            var c = getW(n) - getW(o)
              , d = 0;
            if (c > 0 && (c = 0),
            c > l)
                var l = c;
            else if (l > d)
                var l = d;
            clog(t, h, a, i, r, s, l),
            l !== !1 && (h = l,
            P(h),
            setStyle.animate(o, "transform", {
                duration: 200,
                func: "ease"
            }),
            setStyle.transform(o, {
                translate: [h, 0]
            }))
        }
    }
    function N(e) {
        if (u) {
            var t = v;
            if (e && e.target) {
                var a = hasClass("sp_ppt", e.target) ? e.target : gpeByClass("sp_ppt", e.target)
                  , i = +attr(a, "data-i");
                v = 0 > i ? 0 : i > f - 1 ? f - 1 : i
            }
            d = !1,
            x(),
            b = w = !1;
            var r = getW(n)
              , s = -v
              , l = c ? 100 * s + "%" : s * r;
            U(),
            t != v && setStyle.animate(o, "transform", {
                duration: 200,
                func: "ease"
            }),
            setStyle.transform(o, {
                translate: [l, 0]
            })
        }
    }
    function P(e) {
        if (!u) {
            e = e || h;
            var t = getW(n) - getW(o)
              , a = 0;
            toggleClass("sw_left", n, a > e),
            toggleClass("sw_right", n, e > t)
        }
    }
    function U() {
        if (u) {
            var e = geByClass1("sp_ppt_sel", a);
            e && e === r[v] || (removeClass("sp_ppt_sel", e),
            addClass("sp_ppt_sel", r[v]))
        }
    }
    function q() {
        n = geByClass1("scroller_wrap", a),
        o = geByClass1("scroller_cont", n),
        u ? (i = geByClass1("sp_pages_pts", a),
        r = geByClass("sp_ppt", i),
        f = (geByClass("scroller_page", o) || []).length,
        v = 0,
        U()) : (h = 0,
        P(h)),
        _ = !1,
        setStyle.transform(o, {
            translate: [0, 0]
        })
    }
    function D() {
        q(),
        s ? (addEvent(n, "touchstart touchmove click", z),
        addEvent(n, "touchstart", T),
        addEvent(n, "touchmove", E),
        addEvent(n, "touchend touchcancel", j)) : (addEvent(n, "mousewheel", A),
        addEvent(i, "click", N)),
        c || onBodyResize(N)
    }
    function H() {
        s ? (removeEvent(n, "touchstart touchmove click", z),
        removeEvent(n, "touchstart", T),
        removeEvent(n, "touchmove", E),
        removeEvent(n, "touchend touchcancel", j)) : (removeEvent(n, "mousewheel", A),
        removeEvent(i, "click", N)),
        c || onBodyResize("__clear", N)
    }
    extend(this, {
        init: D,
        destroy: H,
        onShow: function() {
            u ? U() : P(h)
        },
        canClick: function() {
            return l
        }
    }),
    a = e,
    t = t || {},
    t.byPage ? (u = !0,
    c = !browser.android) : (u = !1,
    c = !1,
    this.showElem = M)
}
var im = function() {
    var e = null 
      , t = !1
      , a = {}
      , n = 1
      , o = null 
      , i = !1
      , r = !1;
    function s() {
        64 > n && (n *= 2)
    }
    function l(e, t) {
        if (e === !1 && (e = getNotify() + (t || 1)),
        setNotify(e),
        window.al && window.al.menu) {
            var a = new Array(al.menu.length);
            a[2] = e,
            menu.refreshCounters(a)
        }
    }
    return {
        init: function(a, n) {
            e || (setDocumentDomain(),
            e = ce("iframe", {
                src: a
            }, {
                display: "none"
            }),
            onDOMReady(function() {
                append(e, bodyNode),
                t = !0
            })),
            im.refreshParams(n),
            setTimeout(im.check, 1e3)
        },
        on: function() {
            clog("[longpoll] start"),
            i = !0,
            setTimeout(im.check, 1e3)
        },
        off: function() {
            clog("[longpoll] pause"),
            i = !1
        },
        refreshParams: function(e) {
            extend(a, e || {}),
            extend(im, a)
        },
        getKey: function() {
            if (o)
                try {
                    o.abort()
                } catch (e) {}
            o = ajax.post("/mail", {
                _ajax: 1,
                act: "im_get_key"
            }, {
                onDone: function(e) {
                    /[0-9a-f]{40}/i.test(e) ? (im.refreshParams({
                        key: e
                    }),
                    im.check()) : clog("[longpoll] invalid key")
                },
                onFail: function() {
                    setTimeout(im.getKey, 1e3 * n),
                    clog("[longpoll] from getKey delaying getKey for " + n + "secs"),
                    s()
                }
            })
        },
        check: function() {
            if (i && !r) {
                im.makeRequest || setTimeout(im.check, 1e3);
                try {
                    im.makeRequest(function(e, t) {
                        if (r = !1,
                        vk.__debug) {
                            var a = im.checked(parseJSON(t));
                            clog("[longpoll] success", a),
                            a && (im.check(),
                            n = 1)
                        } else
                            try {
                                var a = im.checked(parseJSON(t));
                                clog("[longpoll] success", a),
                                a && (im.check(),
                                n = 1)
                            } catch (o) {
                                try {
                                    clog("[longpoll] error", o.message || "no message", o.type || "no type", o.stack || "no stack")
                                } catch (o) {}
                                setTimeout(im.check, 1e3 * n),
                                s()
                            }
                    }, function() {
                        r = !1,
                        setTimeout(im.check, 1e3 * n),
                        s()
                    }),
                    r = !0
                } catch (e) {
                    clog("[longpoll] makeRequest failed")
                }
            }
        },
        checked: function(e) {
            var t = e.failed;
            if (1 == t || a.ts >= e.ts + 256) {
                if (im.refreshParams({
                    ts: e.ts
                }),
                t)
                    return !0
            } else {
                if (2 == t)
                    return clog("[longpoll] delaying getKey for " + n + "secs"),
                    setTimeout(im.getKey, 1e3 * n),
                    s(),
                    !1;
                if (t)
                    return void clog("[longpoll]", e)
            }
            if (im.refreshParams({
                ts: e.ts
            }),
            e.updates) {
                var o = [];
                for (var i in e.updates) {
                    var r = e.updates[i]
                      , c = intval(r[0])
                      , u = intval(r[1])
                      , d = intval(r[2])
                      , p = intval(r[3]);
                    if (51 != c)
                        if (61 != c)
                            if (62 != c)
                                if (8 != c)
                                    if (9 != c)
                                        if (6 != c && 7 != c || !im.nu)
                                            if (80 != c) {
                                                if (p)
                                                    if (4 != c)
                                                        0 != c ? 2 != c ? 3 != c || 1 & d && !im.nu && mail.markAsRead(p, u) : 128 & d && mail.markAsDeleted(p, u) : mail.markAsDeleted(u);
                                                    else {
                                                        var v = 2 & d ? vk.id : r[7] && r[7].from || p
                                                          , f = mail.getMsgHTML(u, d, p, r[4], r[5], r[6], r[7]);
                                                        f ? (mail.addMessage(p, u, v, f),
                                                        !(2 & d) && l(!1, 1)) : o.push({
                                                            peer: p,
                                                            msg_id: u,
                                                            from_id: v
                                                        })
                                                    }
                                            } else
                                                l(u);
                                        else
                                            mail.markPeerAsRead(u, d, 7 == c);
                                    else
                                        mail.updateOnline(-u, 0);
                                else
                                    mail.updateOnline(-u, d || 7);
                            else
                                mail.typing(2e9 + d, u);
                        else
                            mail.typing(u)
                }
                if (o.length) {
                    var _ = [];
                    each(o, function(e, t) {
                        _.push(t.msg_id)
                    }),
                    ajax.post("/mail", {
                        _ajax: 1,
                        act: "get_messages",
                        msgs: _.join(",")
                    }, {
                        onDone: function(e, t) {
                            each(o, function(t, a) {
                                e[a.msg_id] && mail.addMessage(a.peer, a.msg_id, a.from_id, e[a.msg_id])
                            }),
                            t && (extend(cur, t),
                            mail.updateStickers())
                        }
                    })
                }
            }
            return !0
        }
    }
}()
  , geoloc = function() {
    var e = null 
      , t = !1;
    function a(e) {
        ajax.post("/places.php", {
            _ajax: 1,
            act: "map_label",
            lat: e.latitude,
            lng: e.longitude
        }, {
            onDone: function(t) {
                hide("geo_waiting"),
                n(e, t)
            },
            onFail: r
        })
    }
    function n(e, t) {
        var a = ge("medias_map")
          , n = ge("attached_wrap");
        a || (a = ce("div", {
            id: "medias_map",
            className: "pi_medias"
        }),
        n.appendChild(a));
        var o = e.latitude
          , i = e.longitude
          , r = (window.devicePixelRatio >= 1.5 ? 2 : 1,
        geByClass1("medias_map", a))
          , s = t ? '<div class="medias_map_close"><i class="i_close">&nbsp;</i></div><div class="medias_map_label">' + t + "</div>" : ""
          , l = ""
          , c = o + "_" + i + "_0";
        if (map_field = '<input type="hidden" name="map" value="' + c + '">',
        r)
            val(r, s + l + map_field);
        else {
            var u = '<div class="meias_row medias_map" onclick="geoloc.remove();">' + s + l + map_field + "</div>";
            val(a, u)
        }
        show(a)
    }
    function o() {
        e = null ,
        remove("medias_map")
    }
    function i(t) {
        t && t.coords && (e = {
            latitude: +t.coords.latitude || 0,
            longitude: +t.coords.longitude || 0
        },
        a(e))
    }
    function r() {
        geoloc.remove(),
        hide("geo_waiting")
    }
    return {
        toggle: function() {
            t ? geoloc.remove() : geoloc.add()
        },
        add: function(a) {
            (a || !t) && (t = !0,
            addClass("cp_geo_btn_sel", "geo_btn"),
            a && (a.latitude || a.longitude) ? (e = {
                latitude: +a.latitude || 0,
                longitude: +a.longitude || 0
            },
            n(e, a.label)) : (geo.getCurrentPosition(i, r),
            show("geo_waiting")))
        },
        remove: function() {
            t && (t = !1,
            removeClass("cp_geo_btn_sel", "geo_btn"),
            o())
        },
        init: function(e) {
            return e && geoloc.add(e),
            geo.init()
        }
    }
}()
  , checkin = function() {
    var e = null 
      , t = !1
      , a = !1
      , n = {}
      , o = []
      , i = 0
      , r = null 
      , s = ""
      , l = "";
    function c(e, t) {
        return t ? !1 : y(e)
    }
    function u(e) {
        a = !1;
        var n = ge("medias_map")
          , o = ge("attached_wrap");
        n || (n = ce("div", {
            id: "medias_map",
            className: "pi_medias"
        }),
        append(n, o));
        var i = +e[1] || 0
          , r = e[3] || ""
          , s = e[4] || ""
          , l = e[5] || ""
          , c = +e[6].lat || 0
          , u = +e[6].lng || 0
          , d = c + "_" + u
          , p = geByClass1("medias_map", n)
          , v = '<div class="medias_map_close" onclick="checkin.remove();"><i class="i_close">&nbsp;</i></div><div class="medias_map_label" onclick="checkin.changePlace();">' + r + (l ? ", " + l : s ? ", " + s : "") + "</div>";
        if (checkin_field = '<input type="hidden" name="place_id" value="' + i + '"><input type="hidden" name="place" value="' + d + '">',
        p)
            val(p, v + checkin_field);
        else {
            var v = '<div class="medias_map">' + v + checkin_field + "</div>";
            val(n, v)
        }
        addClass("cp_geo_btn_sel", "geo_btn"),
        t = !0,
        show(n)
    }
    function d() {
        return y(e)
    }
    function p(t, a) {
        var n = "/places.php" + obj2qs({
            act: "add_place",
            latitude: e.latitude,
            longitude: e.longitude,
            hash: s
        });
        val("place_add_box", '<h4 class="sub_header">' + lang.mobile_geo_new_place_header + '</h4><div class="form_item fi_fat"><form id="place_add_form" action="' + n + '" method="post"><dl class="fi_row"><dt class="fi_label">' + lang.mobile_geo_place_name_label + '</dt><dd class="iwrap"><input type="text" class="textfield" id="place_name_fld" name="title" /></dd></dl><dl class="fi_row"><dt class="fi_label">' + lang.mobile_geo_place_address_label + '</dt><dd class="iwrap"><input type="text" class="textfield" id="place_address_fld" name="address" /></dd></dl><dl class="fi_row"><dd><input class="button" type="submit" id="place_add_btn" value="' + lang.mobile_geo_place_add_btn + '" onclick="return checkin.addNewPlace(this);" /><a class="near_btn" onclick="checkin.addPlaceCancel(); return false;">' + lang.mobile_cancel + "</a></dd></dl></form></div>"),
        val("place_name_fld", unescapeAttr(t) || ""),
        val("place_address_fld", unescapeAttr(a) || ""),
        hide("places_box"),
        show("place_add_box"),
        elfocus(t ? "place_address_fld" : "place_name_fld")
    }
    function v() {
        val("place_add_box", ""),
        hide("place_add_box"),
        show("places_box")
    }
    function f() {
        var t = val("place_name_fld")
          , a = val("place_address_fld");
        return t ? (lockButton("place_add_btn"),
        ajax.post("/places.php", {
            _ajax: 1,
            act: "add_place",
            latitude: e.latitude,
            longitude: e.longitude,
            title: t,
            address: a,
            hash: s
        }, {
            onDone: function(e, t) {
                if (unlockButton("place_add_btn"),
                e) {
                    var a = {};
                    a[e] = t,
                    extend(n, a),
                    o.splice(o[0] ? 0 : 1, 0, e),
                    v(),
                    _(null , e)
                }
            },
            onFail: function() {
                unlockButton("place_add_btn");
                var e = Array.prototype.slice.call(arguments)
                  , t = e.shift()
                  , a = ge("place_add_form");
                switch (t) {
                case 2:
                    a && a.submit()
                }
            }
        }),
        !1) : (elfocus("place_name_fld"),
        !1)
    }
    function _(t, a) {
        h();
        var o = n[a];
        o && (e = {
            latitude: +o[6].lat || 0,
            longitude: +o[6].lng || 0
        },
        a ? u(o) : g(e, o))
    }
    function h(e) {
        if (!r)
            return !0;
        val("m", r),
        r = null ,
        scrollToEl(geByClass1("create_post_extra", "mcont"));
        var t = nav.path + (nav.params ? "?" + nav.params : "");
        return nav.go(t, null , {
            push_only: !0,
            no_push: e
        }),
        !1
    }
    function g(e, n) {
        a = !0;
        var o = ge("medias_map")
          , i = ge("attached_wrap");
        o || (o = ce("div", {
            id: "medias_map",
            className: "pi_medias"
        }),
        i.appendChild(o));
        var r = e.latitude
          , s = e.longitude
          , l = (window.devicePixelRatio >= 1.5 ? 2 : 1,
        n && n[4] || !1)
          , c = geByClass1("medias_map", o)
          , u = l ? '<div class="medias_map_close" onclick="checkin.remove();"><i class="i_close">&nbsp;</i></div><div class="medias_map_label" onclick="checkin.changePlace();">' + l + "</div>" : ""
          , d = ""
          , p = r + "_" + s + "_0";
        if (map_field = '<input type="hidden" name="map" value="' + p + '">',
        c)
            val(c, u + d + map_field);
        else {
            var v = '<div class="medias_map">' + u + d + map_field + "</div>";
            val(o, v)
        }
        t = !0,
        addClass("cp_geo_btn_sel", "geo_btn"),
        show(o)
    }
    function m() {
        e = null ,
        n = {},
        o = [],
        i = 0,
        ajax.post(l, {
            _ajax: 1
        }),
        remove("medias_map")
    }
    function y(e) {
        remove("feed_extra_field");
        var t = Math.round(1e8 * e.latitude) / 1e8
          , a = Math.round(1e8 * e.longitude) / 1e8
          , n = gpeByTag("form", "geo_btn")
          , o = ce("input", {
            id: "feed_extra_field",
            type: "hidden",
            name: "add_place",
            value: t + "," + a
        });
        if (!n)
            return nav.go(nav.path + "?act=places&lat=" + t + "&lng=" + a);
        var i = !1;
        return each(n, function(e, t) {
            return "submit" === t.type ? (i = t,
            !1) : void 0
        }),
        i ? (append(o, n),
        window.al && al.ver ? nav.go(i) : n.submit()) : void 0
    }
    function b(t) {
        t && t.coords && (e = {
            latitude: +t.coords.latitude || 0,
            longitude: +t.coords.longitude || 0
        },
        c(e))
    }
    function w() {
        checkin.remove(),
        hide("geo_waiting")
    }
    return {
        toggle: function() {
            t ? checkin.remove() : checkin.add()
        },
        addNewPlace: f,
        addPlaceShow: p,
        addPlaceCancel: v,
        selectPlace: _,
        changePlace: d,
        back: h,
        refreshCurrentPosition: function() {
            geo.getCurrentPosition(b, w)
        },
        getCurrentAddress: function() {
            return n[0] && n[0][5] || ""
        },
        savePlaces: function(e) {
            extend(n, e)
        },
        add: function(a) {
            return !a && t ? d() : void (a && (a.latitude || a.longitude) && a.place ? (e = {
                latitude: +a.latitude || 0,
                longitude: +a.longitude || 0
            },
            a.place[1] ? u(a.place) : g(e, a.place),
            c(e, !0)) : (geo.getCurrentPosition(b, w),
            show("geo_waiting")))
        },
        add_place: function(a) {
            return !a && t ? d() : void (a && (a.latitude || a.longitude) && a.place ? (e = {
                latitude: +a.latitude || 0,
                longitude: +a.longitude || 0
            },
            a.place[1] ? u(a.place) : g(e, a.place),
            c(e, !0)) : (geo.getCurrentPosition(b, w),
            show("geo_waiting")))
        },
        remove: function() {
            t = !1,
            removeClass("cp_geo_btn_sel", "geo_btn"),
            m()
        },
        stash: function(s) {
            return s ? (e = s[0],
            t = s[1],
            a = s[2],
            n = s[3],
            o = s[4],
            i = s[5],
            r = s[6],
            void 0) : [e, t, a, n, o, i, r]
        },
        init: function(c, u, d) {
            return hide("geo_waiting"),
            e = null ,
            t = !1,
            a = !1,
            n = {},
            o = [],
            i = 0,
            r = null ,
            s = u || "",
            l = d || "",
            c && checkin.add(c),
            geo.init()
        }
    }
}();
function QuickSearch(e) {
    var t, a, n, o, i, r, s, l, c, u, d = [], p = {}, v = {}, f = {}, _ = {}, h = !1, g = null , m = null , y = null , b = 0, w = [], C = null , k = null , x = null , S = !1, B = !1, z = 10, T = 30, E = !0, j = !1, A = !1, M = !1, N = 0, P = 0, U = !1;
    function q(e) {
        e = e.replace(/https?:\/\/(m\.)?vk\.com\/([^#]+#\/)?/, "");
        for (var t, a, n, o = B, i = [e, a = parseRusKeys(e, o) || e, n = parseLatKeys(e, o) || e, parseLat(a), parseCyr(n)], r = {}, s = [], l = 0, c = i.length; c > l; l++)
            i[l] && !r[i[l]] && (r[i[l]] = !0,
            t = escapeRE(i[l]),
            t = t.replace(/[её]/gi, "[её]").replace(/(e|yo)/gi, "(?:e|yo)"),
            s.push(new RegExp("(^|\\s|\\(|>)(" + t + ")","gi")));
        return s
    }
    function D(e, t, a) {
        if (clearTimeout(m),
        !a)
            return m = setTimeout(function() {
                D(e, t, !0)
            }, 10),
            !1;
        var n = val(e) || "";
        if (g == n)
            return !1;
        var o, i = "_" + n, r = v[i], s = q(n);
        if (!r && n.length > 2 && v["_" + n.slice(0, -2)]) {
            var c = "_" + n.slice(0, -2);
            v[c] && _[c] && !v[c].length && (!M || M && !f[c]) && (_[i] = !0,
            r = v[i] = [],
            M && (f[i] = ""))
        }
        if (!r) {
            r = [];
            var u = 0;
            if (!n && d.length)
                for (var h = b, y = b + Math.min(z, d.length); y > h; h++)
                    r.push([d[h]]),
                    u++;
            else {
                for (var w = {}, C = 0, h = 0, y = d.length; y > h; h++) {
                    var k = d[h];
                    if (p[k]) {
                        if (w[k] = !0,
                        (o = R(s, p[k][0])) && (r.push([k, o]),
                        ++C >= T))
                            break;
                        u++
                    }
                }
                if (T > C)
                    for (var k in p)
                        if (!w[k] && (o = R(s, p[k][0]))) {
                            if (r.push([k, o]),
                            ++C >= T)
                                break;
                            u++
                        }
            }
            _[i] = _[i] || !n && d.length || r.length > 2 * z,
            _[i] = _[i] || M && r.length > z
        }
        return _[i] || !E && !M || H(e, n),
        v[i] = r,
        g = n,
        X(r, f[i]),
        l && l(n),
        A && !g && (N = z),
        onBodyScrollForce(),
        !1
    }
    function H(e, a, o) {
        return clearTimeout(y),
        o ? (ajax.post(t, {
            _ajax: 1,
            q: a
        }, {
            onDone: function(t, n, o) {
                s && s.apply(null , arguments);
                for (var i, r = "_" + a, l = v[r] || [], c = {}, u = q(a), d = 0, h = l.length; h > d; d++)
                    c[l[d][0]] = !0;
                for (var d = 0, h = n.length; h > d; d++) {
                    var m = n[d];
                    c[m] || ((i = R(u, t[m][0])) || S || !a) && l.push([m, i])
                }
                _[r] = !0,
                v[r] = l,
                M && (f[r] = o || ""),
                p = extend(t, p),
                E = !j || len(p) < j,
                g == a ? (X(l, f[r]),
                onBodyScrollForce()) : delete v[r],
                removeClass("input_loading", e)
            },
            onFail: function() {
                delete v["_" + a],
                removeClass("input_loading", e)
            }
        }),
        void (geByClass1("al_loading", n) || addClass("input_loading", e))) : (y = setTimeout(function() {
            H(e, a, !0)
        }, 200),
        !1)
    }
    function R(e, t) {
        if (!t)
            return !1;
        for (var a = 0, n = e.length; n > a; a++)
            if (-1 !== t.search(e[a]))
                return e[a];
        return !1
    }
    function X(e, t) {
        var a = "";
        if (k && n) {
            for (var i = 0, s = e.length; s > i; i++) {
                var l = e[i][0]
                  , u = e[i][1];
                if (p[l]) {
                    var d = p[l].slice(1);
                    if (u)
                        for (var v in w) {
                            var f = w[v];
                            d[f] && (d[f] = d[f].replace(u, '$1<em class="found">$2</em>'))
                        }
                    a += k.apply({
                        id: l,
                        q: g,
                        highlight: function(e) {
                            return ("" + e).replace(u, '$1<em class="found">$2</em>')
                        },
                        template: function(e, t) {
                            var a = ("" + e).replace(/%(\d+)%|#(\d+)#/g, function(e, a, n) {
                                return +n ? ("" + t[n - 1]).replace(u, '$1<em class="found">$2</em>') : +a ? t[a - 1] || "" : ""
                            });
                            return a
                        }
                    }, d)
                }
            }
            a || _["_" + g] || !E && !M || (removeClass("input_loading", o),
            a = g ? '<div class="al_loading qs_loading">&nbsp;</div>' : '<div id="al_loading"></div>'),
            !a && x && (a = x(g)),
            val(n, C ? C(a, g, A, t) : a + (t || "")),
            r && (g ? show(r) : hide(r)),
            !g && alLoadingFix(),
            c && c()
        }
    }
    extend(this, {
        go: function(e) {
            return o ? (D(o, e, !0),
            o.blur(),
            cancelEvent(e),
            !1) : !0
        },
        redraw: function() {
            var e = "_" + g;
            X(v[e], f[e]),
            onBodyScrollForce()
        },
        clear: function(e, t) {
            return val(o, ""),
            t ? elfocus(o) : elblur(o),
            D(o, e, !0),
            cancelEvent(e),
            !1
        },
        blur: function() {
            elblur(o)
        },
        init: function(e) {
            e = e || {},
            n = ge(e.container) || null ,
            o = ge(e.field) || null ,
            i = ge(e.btn) || null ,
            r = ge(e.clear_btn) || null ,
            g = null ,
            h && t == e.action && e.init_once || (v = {},
            f = {},
            _ = {},
            t = e.action || "",
            a = e.al_action || t,
            d = e.top_items || [],
            p = e._cache || {},
            w = e.hl_fields || [],
            C = e.tpl || null ,
            k = e.item_tpl || null ,
            x = e.null_tpl || null ,
            S = e.soft_filter || !1,
            B = e.need_invalid_keys || !1,
            z = e.top_len || 10,
            j = e.load_limit || !1,
            s = e.onLoaded || !1,
            l = e.onFiltered || !1,
            c = e.onRendered || !1,
            u = e.onFocusChanged || !1,
            A = e.al_need || !1,
            b = !A && e.init_offset || 0,
            M = e.global_search || !1);
            var m = null ;
            t && n && o && k && (E = t !== !0 && (!j || len(p) < j),
            addEvent(o, "focus", function(e) {
                var t = function(a) {
                    !a && D(o, e, !0),
                    m = setTimeout(t, 100)
                }
                ;
                clearTimeout(m),
                u && u.call({
                    q: g
                }, !0),
                t(!0)
            }),
            addEvent(o, "keydown keypress change blur", function(e) {
                "blur" == e.type && (clearTimeout(m),
                u && u.call({
                    q: g
                }, !1)),
                D(o, e, "keydown" != e.type && "keypress" != e.type)
            }),
            e._new || i && !attr(i, "onclick") && attr(i, "onclick", "return qsearch.go(event);"),
            !A || h && e.init_once || (N = z,
            P = len(p),
            initAutoScroll(function() {
                var e = geByClass1("_si_container", n) || n
                  , t = e.childNodes;
                return t[N] || t[t.length - 1]
            }, function() {
                if (!U && !g)
                    if (N + z > P && E)
                        U = !0,
                        ajax.post(a, {
                            _ajax: 1,
                            offset: P
                        }, {
                            onDone: function(e, a) {
                                s && s.apply(null , arguments);
                                var n = len(e);
                                if (U = !1,
                                j || (d = d.slice(0, P).concat(a)),
                                P += n,
                                p = extend(e, p),
                                E = t !== !0 && (!j && n || len(p) < j),
                                !g) {
                                    N += z;
                                    for (var o = [], i = 0, r = Math.min(N, d.length); r > i; i++)
                                        o.push([d[i]]);
                                    X(o, f._),
                                    onBodyScrollForce()
                                }
                            },
                            onFail: function() {
                                U = !1
                            }
                        });
                    else if (N < d.length) {
                        N += z;
                        for (var e = [], n = 0, o = Math.min(N, d.length); o > n; n++)
                            e.push([d[n]]);
                        X(e, f._),
                        onBodyScrollForce()
                    }
            })),
            !e.skip_init_filter && D(o, null , !0),
            h = !0)
        }
    }),
    e && this.init(e)
}
var qsearch = new QuickSearch
  , zlayer = {
    inited: !1,
    width: !1,
    height: !1,
    onResize: null ,
    _lastNav: !1,
    _opened: !1,
    _destroy: !1,
    init: function() {
        zlayer.inited || (zlayer.inited = !0,
        zlayer.initEvents())
    },
    initEvents: function() {
        var e = function(e) {
            zlayer.fixHeight(vkNow() + 2e3, e)
        }
        ;
        addEvent(window, "orientationchange", e),
        onBodyResize(e),
        e(!0)
    },
    opened: function() {
        return hasClass("z_opened", bodyNode) !== zlayer.opened && toggleClass("z_opened", bodyNode, zlayer._opened),
        zlayer._opened
    },
    toggle: function(e, t) {
        return checkEvent(e) ? !0 : (zlayer.opened() ? zlayer.close(e, t) : zlayer.open(e, t),
        !1)
    },
    open: function(e) {
        return checkEvent(e) ? !0 : zlayer.opened() ? !1 : (thover.clear(),
        zlayer.init(),
        zlayer._st = scrollTop(),
        zlayer._lastNav = !1,
        addClass("z_opened", bodyNode),
        zlayer._opened = !0,
        zlayer.fixHeight(vkNow() + 2e3, !0),
        scrollTop(0),
        !1)
    },
    close: function(e) {
        return checkEvent(e) ? !0 : zlayer.opened() ? (thover.clear(),
        val("z", ""),
        removeClass("z_opened", bodyNode),
        zlayer._lastNav = {
            cur: nav.cur,
            path: nav.path,
            params: nav.params,
            hash: nav.hash
        },
        zlayer._opened = !1,
        zlayer._destroy && (zlayer._destroy(),
        zlayer._destroy = !1),
        scrollTop(zlayer._st, 1),
        zlayer._st = !1,
        zlayer.onResize = null ,
        !1) : !1
    },
    updateSize: function() {
        var e = ge("z");
        e.offsetWidth && e.offsetHeight && (zlayer.width = e.offsetWidth,
        zlayer.height = e.offsetHeight,
        zlayer.onResize && zlayer.onResize())
    },
    fixHeight: function(e, t) {
        if ((zlayer._opened || t) && (e && !(vkNow() > e) || t)) {
            var a = getCw()
              , n = getCh();
            (zlayer._lastWidth != a || zlayer._lastHeight != n || t) && (zlayer._lastWidth = a,
            zlayer._lastHeight = n,
            setStyle("z", "height", n),
            zlayer.updateSize(),
            scrollTop() || scrollTop(0)),
            clearTimeout(zlayer._fixTo),
            zlayer._fixTo = setTimeout(zlayer.fixHeight, 50, e)
        }
    },
    create: function(e, t) {
        val("z", e),
        zlayer._destroy = t
    }
}
  , photo = function() {
    var e, t, a, n, o, i, r, s, l, c, u, d, p, v = 1, f = !1, _ = {}, h = {}, g = {}, m = null , y = null , b = !1, w = null , C = null , k = !0, x = !1, S = 0, B = !1;
    function z() {
        if (e = geByClass1("photo_view", "m"),
        !e)
            return nav.al_go(nav.cur),
            !1;
        if (t = geByClass1("pv_summary", e),
        pm = geByClass1("photo_msg", e),
        pt = geByClass1("pv_tag_wrap", e),
        o = geByClass1("pv_body", e),
        i = geByClass1("thumb_item", o),
        n = geByClass1("pv_nav", o),
        l = geByClass1("pv_photo_wrap", i),
        r = "a" == tag(i) ? i : !1,
        s = geByTag1("img", i),
        c = geByClass1("pv_footer", e),
        (a = geByClass1("summary_loading", t)) || (a = ce("div", {
            innerHTML: '<i class="i_loading"></i>',
            className: "summary_loading"
        }, {
            display: "none"
        }),
        t.appendChild(a)),
        f = hasClass("pv_touch_full", o),
        n) {
            var v = geByClass1("pv_nav_left", n)
              , _ = geByClass1("pv_nav_z", n)
              , h = geByClass1("pv_nav_right", n);
            u = geByClass1("pv_nav_link", v),
            p = geByClass1("pv_nav_link", _),
            d = geByClass1("pv_nav_link", h),
            attr(u, "onclick", "return photo.prev(event);"),
            attr(d, "onclick", "return photo.next(event);"),
            attr(r, "onclick", f ? !1 : "return photo.next(event);"),
            ajax.prepare_click([u, d, r])
        }
        return removeEvent(window, "orientationchange", U),
        addEvent(window, "orientationchange", U),
        !0
    }
    function T() {
        return photoview ? B ? !0 : (B = !0,
        photoview.onPhotoChange = function(e, t) {
            S = e,
            D(e, t)
        }
        ,
        photoview.onUpdate = function() {}
        ,
        photoview.onClose = function(t) {
            if (!H(t))
                return !0;
            var a = qs2obj(nav.params);
            e && a.list == y && q(S, !0)
        }
        ,
        !0) : !1
    }
    function E(e) {
        var t = [];
        return each(e, function(e, a) {
            return a ? void t.push(_[a.id] = a) : !0
        }),
        m && photoview && photoview.saveSource(N(m)),
        t
    }
    function j(e) {
        return _[e] || {}
    }
    function A(e, t, a) {
        if (null  === t)
            return void delete h[e];
        h[e] || (h[e] = new Array(a ? a : len(t))),
        E(t);
        var n = h[e];
        b && n.reverse(),
        extend(n, t),
        b ? (m = copy(n),
        n.reverse()) : m = n
    }
    function M(e) {
        if ("string" != typeof e)
            return e;
        var t = h[e] || [];
        return b ? copy(t).reverse() : t
    }
    function N(e) {
        var t = M(e)
          , a = new Array(t.length)
          , n = qs2obj(nav.params);
        delete n.z;
        for (var o in t) {
            var i = m[o]
              , r = "photo" + i.id + "?list=" + y + (b ? "&rev=1" : "") + (C ? "&from=" + C : "");
            a[o] = {
                id: i.id,
                photo_url: "/" + r,
                like_url: "/like?act=" + (i.likes_me ? "del" : "add") + "&object=photo" + i.id + "&from=" + encodeURIComponent(r) + "&list=" + y + "&hash=" + i.like_hash,
                likes_me: i.likes_me,
                src: i.original_src,
                tags: i.tags,
                caption: i.caption,
                likes_cnt: i.likes_cnt,
                replies_cnt: i.replies_cnt
            }
        }
        return a
    }
    function P(e, t) {
        t || (t = m);
        for (var a in t)
            if (m[a].id == e)
                return +a;
        return -1
    }
    function U() {
        nav.hash || onDOMReady(function() {
            if (geByClass1("photo_view")) {
                var e = scrollTop();
                o && getY(o) < e && scrollToEl(o)
            }
        })
    }
    function q(a, n, i) {
        var v = m[a]
          , _ = 1 == m.length;
        if (v) {
            nav.hash ? scrollToHash(nav.hash) : U();
            var h = {};
            w && (h.list = w),
            b && (h.rev = 1),
            C && (h.from = C);
            var g = obj2qs(h)
              , y = "photo" + v.id + g
              , x = v.photo
              , B = (X(a - 1) || {}).id
              , z = (X(a + 1) || {}).id;
            if (_ || (r.href = "/photo" + z + g,
            u && (u.href = "/photo" + B + g),
            d && (d.href = "/photo" + z + g),
            ajax.prepare_click([u, d, r])),
            f) {
                var T = "photo" + v.id + "/" + w + (b ? "/rev" : "")
                  , E = extend({}, h, {
                    z: T
                })
                  , j = "/photo" + v.id + obj2qs(E);
                if (zlayer._lastNav) {
                    var A = zlayer._lastNav;
                    E = qs2obj(A.params),
                    E.z = T,
                    j = A.path + obj2qs(E) + A.hash
                }
                p && (p.href = j),
                ajax.prepare_click(p),
                attr(p, "onclick", "return photo.fullscreen('" + escapeAttr(j) + "', event);")
            }
            if (s && s.src != x) {
                s.onload = null ,
                remove(s);
                var M = "";
                each(v.tags, function(e, t) {
                    if (!e || 0 == e)
                        return !0;
                    var a = t[0][0]
                      , n = t[0][1]
                      , o = t[0][2]
                      , i = t[0][3];
                    M += '<div class="pv_tag" style="left: ' + a + "%; top: " + n + "%; width: " + o + "%; height: " + i + '%;" id="pv_tag' + e + '" onclick="return photo.selectTag(' + e + ', event, true);"><div class="fill"></div></div>'
                }),
                val(l, '<img src="' + x + '" alt="" class="ph_img" />' + M),
                s = geByTag1("img", l)
            }
            toggleClass("photo_deleted", e, !!v.deleted),
            toggleClass("pv_one_photo", o, 1 == m.length),
            val(t, (lang.mobile_photos_photo_header || "").replace("%s", S + 1).replace(/%s|{count}/, m.length)),
            val(pt, v.tag_info || "");
            var N = ""
              , P = (cur.sticker_panel || "").split("photo-0_0").join("photo" + v.id)
              , q = (v.comments_html || "").split("<!--stickers_panel-->").join(P);
            if (v.caption && (N += '<div class="mv_description">' + v.caption + "</div>"),
            v.tags_list && (N += '<dl class="pv_tags_list si_row"><dt>' + lang.mobile_photos_on_this_photo + "</dt><dd>" + v.tags_list + "</dd></dl>"),
            v.album_link && (N += '<dl class="si_row"><dt>' + lang.mobile_photos_photo_album_label + "</dt><dd>" + v.album_link + "</dd></dl>"),
            v.author_link && (N += '<dl class="si_row"><dt>' + lang.mobile_photos_photo_author_label + "</dt><dd>" + v.author_link + "</dd></dl>"),
            (v.date || v.likes || v.publish) && (N += '<div class="vi_values">' + (v.date || "") + (v.likes || "") + (v.publish || "") + "</div>"),
            val(c, '<div class="like_box bl_cont"><div class="photo_msg bl_none">' + (v.deleted || "") + '</div><div class="mv_details">' + N + '</div><ul class="mv_actions">' + (v.actions || "") + '</ul></div><div class="comments_wrap bl_cont">' + q + "</div>"),
            post.stickersInit(),
            cur.replyTo = 0,
            ajax.refreshLinks(v.fv_link, v.app_link),
            photo.closeTags(),
            !n) {
                var D = "/" + y;
                nav.go(D, null , {
                    no_push: n,
                    push_only: !0,
                    replace: i
                })
            }
        }
        k || (Y(),
        L())
    }
    function D(e, t) {
        {
            var a = m[e];
            1 == m.length
        }
        if (t = t || {},
        a) {
            var n = qs2obj(nav.params);
            if (n.z = "photo" + a.id + "/" + w + (b ? "/rev" : ""),
            t.no_open || photoview.open(e, N(m), {
                local: t.local
            }),
            !t.local && !t.crop) {
                var o = nav.path + obj2qs(n) + nav.hash;
                nav.go(o, null , {
                    no_push: t.no_push,
                    push_only: !0,
                    replace: t.replace,
                    nav_init: !t.no_open,
                    nav_incr: !0
                })
            }
        }
        t.local || t.crop || Y(!0)
    }
    function H(e) {
        var t = qs2obj(nav.params);
        if (delete t.z,
        !e.local && !e.crop) {
            if (nav.tryHistoryBack())
                return !1;
            var a = nav.path + obj2qs(t) + nav.hash;
            nav.go(a, null , {
                push_only: !0
            })
        }
        return !0
    }
    var R = !1;
    function X(e) {
        return e > 0 ? e %= m.length : e = (100 * m.length + e) % m.length,
        m[e]
    }
    function Y(e) {
        if (!R) {
            for (var t = !1, n = 1, o = 0; 5 > o; o++) {
                var i = o + S
                  , r = X(i);
                if (!r || !r.owner_id) {
                    t = i,
                    n = 1;
                    break
                }
            }
            if (t === !1)
                for (var o = -1; o > -3; o--) {
                    var i = o + S
                      , r = X(i);
                    if (!r || !r.owner_id) {
                        t = i,
                        n = -1;
                        break
                    }
                }
            if (t !== !1) {
                var s = X(S);
                if (s) {
                    R = !0,
                    show(a);
                    var l = s.owner_id || (s.id || "").split("_")[0]
                      , c = i == S && s.id ? "/photo" + s.id : "/photos.php"
                      , u = {
                        _ajax: 1,
                        oid: l,
                        list: y,
                        offset: t,
                        direction: n,
                        rev: b ? 1 : 0
                    };
                    cur.stickers || (u.need_stickers = 1),
                    ajax.post(c, u, {
                        onDone: function(t, n, o, i) {
                            hide(a),
                            R = !1,
                            o && (cur.replyNames || (cur.replyNames = {}),
                            extend(cur.replyNames, o)),
                            i && extend(cur, i),
                            A(y, t, n || m.length),
                            e ? photoview && photoview.saveSource(N(y), !1, !0) : q(S, !0)
                        }
                    })
                }
            }
        }
    }
    function L() {
        for (var e = 0, t = S + 1; v > e; e++) {
            var a = e + t
              , n = X(a)
              , o = n && n.photo;
            if (o && !g[o]) {
                var i = g[o] = new Image;
                i.src = o,
                i.onload = function() {
                    g[o] = !0
                }
            }
        }
    }
    function F(e, t) {
        if (m = [],
        e) {
            var a = gpeByClass("thumbs_list", e) || gpeByClass("wiki_body", e);
            a && each(geByTag("img", a), function() {
                var e = this
                  , t = attr(e, "data-id")
                  , a = attr(e, "data-src_big");
                if (!t || !a)
                    return !0;
                a = a.split("|");
                var n = a[0]
                  , o = +a[1] || 0
                  , i = +a[2] || 0;
                m.push({
                    id: t,
                    original_src: n,
                    width: o,
                    height: i
                })
            })
        }
        m.length || m.push({
            id: t,
            original_src: !0
        })
    }
    function O() {
        addClass("pv_icons_hide", o)
    }
    return {
        save: E,
        get: j,
        saveSource: A,
        getSource: M,
        clear: function() {
            removeEvent(window, "orientationchange", U)
        },
        open: function(e, t, a, n, o) {
            if (checkEvent(a))
                return !0;
            if (!z())
                return !0;
            if (b = !1,
            "/rev" == t.substr(-4) && (t = t.slice(0, -4),
            b = !0),
            C = n || null ,
            t)
                y = t;
            else {
                var i = j(e);
                y = i.album ? "album" + i.album : ""
            }
            if (w = y,
            m = M(y),
            S = P(e, m),
            -1 === S) {
                var i = j(e);
                if (!i.id)
                    return !1;
                m = [i],
                S = 0
            }
            k = m.length < 2,
            x = !1;
            var r = m[S] && e != m[S].id;
            return q(S, o && !r, r),
            !1
        },
        prev: function(e) {
            return checkEvent(e) ? !0 : R && !X(S - 1) ? !1 : z() ? k ? photo.close() : (--S < 0 && (S = m.length - 1),
            q(S),
            O(),
            !1) : !0
        },
        next: function(e) {
            return checkEvent(e) ? !0 : R && !X(S + 1) ? !1 : z() ? k ? !1 : (++S >= m.length && (S = 0),
            q(S),
            O(),
            !1) : !0
        },
        close: function(e) {
            return checkEvent(e) ? !0 : !1
        },
        fullscreen: function(e, t) {
            return hasClass("pv_photo_tags_selected", o) ? !0 : nav.go(unescapeAttr(e), t, {
                need_restore: !0
            })
        },
        showIcons: function() {
            var e = geByClass1("photo_view", "m");
            if (!e)
                return !1;
            var t = geByClass1("pv_body", e);
            return t ? void setTimeout(function() {
                removeClass("pv_hidden_icons", t),
                setTimeout(function() {
                    addClass("pv_icons_hide", t)
                }, 2e3)
            }, 10) : !1
        },
        selectTag: function(e, t, a) {
            if (a && !hasClass("pv_photo_tags_selected", o))
                return !0;
            var n = ge("pv_tag" + e)
              , i = geByClass1("pv_tag_selected", "pv_photo_tags_wrap")
              , r = ge("pv_tag_label" + e)
              , s = geByClass1("pv_tag_label_selected", "pv_tags_list");
            return hasClass("pv_tag_selected", n) || (removeClass("pv_tag_selected", i),
            addClass("pv_tag_selected", n)),
            hasClass("pv_tag_label_selected", r) ? nav.go(r, t) : (removeClass("pv_tag_label_selected", s),
            addClass("pv_tag_label_selected", r),
            addClass("pv_photo_tags_selected", o),
            cancelEvent(t),
            !1)
        },
        closeTags: function(e) {
            if (!hasClass("pv_photo_tags_selected", o))
                return !0;
            var t = geByClass1("pv_tag_selected", "pv_photo_tags_wrap")
              , a = geByClass1("pv_tag_label_selected", "pv_tags_list");
            return t && removeClass("pv_tag_selected", t),
            a && removeClass("pv_tag_label_selected", a),
            removeClass("pv_photo_tags_selected", o),
            cancelEvent(e),
            !1
        },
        init: function(e, t, a, n, o, i, r) {
            v = isUndefined(r.preload) ? 1 : r.preload,
            b = !!o,
            photo.saveSource(e, t, a),
            onDOMReady(function() {
                photo.open(n, e + (o ? "/rev" : ""), null , i, !0)
            })
        },
        zopen: function(e, t, a, n, o) {
            if (checkEvent(t))
                return !0;
            o = o || {},
            T(),
            b = !1,
            "/rev" == n.substr(-4) && (n = n.slice(0, -4),
            b = !0);
            var i = qs2obj(nav.params);
            if (delete i.z,
            C = o.from || !1,
            n)
                y = n;
            else {
                var r = j(a);
                y = r.album ? "album" + r.album : ""
            }
            if (w = y,
            m = M(y),
            m.length || F(e, a),
            S = P(a, m),
            -1 === S && (F(e, a),
            S = P(a, m)),
            -1 === S) {
                var r = j(a);
                if (!r.id)
                    return !0;
                m = [r],
                S = 0
            }
            k = m.length < 2,
            x = !1;
            var s = m[S] && a != m[S].id;
            return D(S, {
                no_push: o.no_push && !s,
                replace: s,
                local: o.local
            }),
            cancelEvent(t),
            !1
        },
        zclose: function(e) {
            return checkEvent(e) ? !0 : !1
        }
    }
}()
  , audio = function() {
    var e = !1
      , t = !1
      , a = !1
      , n = !1
      , o = function(t) {
        (e || n !== !1) && (e = !1,
        v && n === !1 || (a = !0,
        s.pause())),
        cancelEvent(t),
        removeEvent(s, "play", o),
        removeEvent(document, isTouch ? "touchstart" : "click", r)
    }
      , i = function() {
        n !== !1 && n()
    }
      , r = function() {
        t && (t = !1,
        e = !0,
        s.play(),
        removeEvent(document, isTouch ? "touchstart" : "click", r))
    }
      , s = b()
      , l = srand()
      , c = []
      , u = null 
      , d = {}
      , p = ""
      , v = !1
      , f = !1
      , _ = !1
      , h = !1
      , g = null 
      , m = !1
      , y = !1;
    function b(t) {
        var s = window.Audio ? new Audio : ce("audio");
        window.audioObj=s;
        return s.autobuffer = !0,
        s.muted = !1,
        t && (s.volume = t.volume,
        removeEvent(t, "play", w),
        removeEvent(t, "pause", C),
        removeEvent(t, "progress", k),
        removeEvent(t, "timeupdate", x),
        removeEvent(t, "ended", S),
        removeEvent(t, "play", o),
        removeEvent(t, "progress canplaythrough", i),
        removeEvent(document, isTouch ? "touchstart" : "click", r),
        t.muted = !0,
        t.pause(),
        t.src = null ),
        h = !1,
        f = !1,
        _ = !1,
        e = !1,
        a = !1,
        n = !1,
        addEvent(s, "play", w),
        addEvent(s, "pause", C),
        addEvent(s, "progress", k),
        addEvent(s, "timeupdate", x),
        addEvent(s, "ended", S),
        addEvent(s, "play", o),
        addEvent(s, "progress canplaythrough", i),
        addEvent(document, isTouch ? "touchstart" : "click", r),
        s
    }
    function w() {
        v || (v = !0,
        audio.onPlay(!0),
        ssSet("audio_play", "1"),
        clearTimeout(g),
        g = setTimeout(E, 100))
    }
    function C() {
        return a ? void (a = !1) : void (v && (v = !1,
        audio.onPause(!0),
        ssSet("audio_play", "0"),
        clearTimeout(g)))
    }
    function k() {
        audio.onProgress(!0)
    }
    function x() {
        a || (audio.onProgress(!0),
        audio.onPositionChanged(!0, audio.position(), audio.duration()),
        ssSet("audio_pos", audio.position()),
        !h && s.duration - s.currentTime < .5 && (h = !0),
        f && (f = !1,
        audio.next()))
    }
    function S() {
        audio.onEnded(!0),
        h ? (h = !1,
        audio.next()) : f = !0
    }
    function B() {
        return c[u] || !1
    }
    function z() {
        return B().id || !1
    }
    function T(e) {
        e && (s.src = e.src,
        s.load(),
        audio.onSelect(!0, e))
    }
    function E() {
        if (v) {
            var e = lsGet("audio_current_player");
            l != e ? audio.pause() : g = setTimeout(E, 100)
        }
    }
    function j() {
        var e = z();
        ssSet("audio_id", e),
        ssSet("audio_pos", 0),
        m && (document.cookie = m + "=" + e + "; expires=" + new Date(vkNow() + 864e5).toUTCString() + "; path=" + y)
    }
    function A(e) {
        ssSet("audio_query", e),
        m && (document.cookie = m + "q=" + encodeURIComponent(e) + "; expires=" + new Date(vkNow() + 864e5).toUTCString() + "; path=" + y)
    }
    return {
        init: function(e) {
            return audio.support ? (e.cookie && (m = e.cookie,
            y = e.cookie_path || "/"),
            void onDOMReady(function() {
                e.playlist && audio.playlist(e.playlist, {
                    q: e.playlist_q || ""
                });
                var a = ssGet("audio_id");
                if (a) {
                    var n = ssGet("audio_pos")
                      , o = ssGet("audio_vol")
                      , i = ssGet("audio_play");
                    audio.select(a),
                    "1" == i && (null  !== n && audio.position(n),
                    null  !== o && audio.volume(o),
                    t = !0,
                    audio.play())
                }
            })) : !1
        },
        support: s.canPlayType && s.canPlayType("audio/mpeg") && "no" != s.canPlayType("audio/mpeg") || !1,
        onPlay: se(z),
        onPause: se(z),
        onDeselect: se(z, function() {
            return audio.duration()
        }),
        onSelect: se(),
        onProgress: se(z, function() {
            return audio.loaded()
        }, function() {
            return audio.duration()
        }),
        onPositionChanged: se(z),
        onVolumeChanged: se(z, function() {
            return s.volume
        }),
        onEnded: se(z),
        onNotFoundError: se(),
        onEmptyPlaylistError: se(),
        getCurrent: B,
        getCurrentId: z,
        operate: function(e) {
            return audio.support ? void (!e || c[u] && e == c[u].id ? v ? audio.pause() : audio.play() : audio.play(e)) : !1
        },
        playing: function() {
            return v
        },
        select: function(e) {
            if (!audio.support)
                return !1;
            if (e)
                return c.length ? c[d[e]] ? (z() && audio.onDeselect(!0),
                u = d[e],
                T(c[u]),
                j(),
                !0) : void audio.onNotFoundError(!0, e) : void audio.onEmptyPlaylistError(!0, e)
        },
        play: function(e) {
            console.log('play');
            if (!audio.support)
                return !1;
            if (e) {
                if (v && audio.pause(),
                !audio.select(e))
                    return;
                try {
                    s.currentTime = .01
                } catch (t) {}
            }
            var dancer=window.dancer;
            console.log(dancer);
            if(dancer&&!dancer.isLoaded())            
                dancer.load(s)
            if(!dancer)
                return;
            
            v || (s.muted = !1,
            dancer.play(),
            v = !0,
            audio.onPlay(!0),
            ssSet("audio_play", "1"),
            lsSet("audio_current_player", l))
        },
        pause: function() {
            return audio.support ? void (v && ((dancer||s).pause(),//s.pause(),
            v = !1,
            audio.onPause(!0),
            ssSet("audio_play", "0"))) : !1
        },
        position: function(e, t) {
            if (!audio.support)
                return !1;
            if ("undefined" == typeof e)
                return s.currentTime;
            t && (e = audio.duration() * e),
            e = Math.max(0, Math.min(e, audio.duration()));
            var a = v;
            a && (v = !1,
            s.pause());
            try {
                s.currentTime = e,
                audio.onPositionChanged(!0, audio.position(), audio.duration()),
                ssSet("audio_pos", e),
                a && (v = !0,
                s.muted = !1,
                s.play())
            } catch (o) {
                audio.onPositionChanged(!0, e, audio.duration()),
                n = function() {
                    n = !1,
                    audio.position(e)
                }
                ,
                a && (v = !0)
            }
        },
        volume: function(e) {
            if (!audio.support)
                return !1;
            if ("undefined" == typeof e)
                return s.volume;
            try {
                s.volume = e || 0
            } catch (t) {}
            audio.onVolumeChanged(!0),
            ssSet("audio_vol", e || 0)
        },
        loaded: function() {
            return s.buffered && s.buffered.length && s.buffered.end(s.buffered.length - 1) || 0
        },
        duration: function() {
            return c[u] && c[u].dur || s.duration || 0
        },
        next: function() {
            return audio.support ? (v && audio.pause(),
            audio.onDeselect(!0),
            ++u >= c.length && (u = 0),
            T(c[u]),
            j(),
            t = !0,
            void audio.play()) : !1
        },
        prev: function() {
            return audio.support ? (v && audio.pause(),
            audio.onDeselect(!0),
            --u <= 0 && (u = c.length - 1),
            T(c[u]),
            j(),
            t = !0,
            void audio.play()) : !1
        },
        playlist: function(e, t) {
            return audio.support ? "undefined" == typeof e ? c : (v && audio.pause(),
            B() && audio.onDeselect(!0),
            c = e,
            p = t && t.q || "",
            u = null ,
            d = {},
            each(e, function(e, t) {
                d[t.id] = e
            }),
            A(p),
            void 0) : !1
        },
        playlist_q: function() {
            return p
        }
    }
}()
  , audioplayer = function() {
    var e = "1" == lsGet("audio_time_left")
      , t = ""
      , a = ""
      , n = ""
      , o = null 
      , i = 0
      , r = {};
    audio.onPlay(l),
    audio.onPause(c),
    audio.onSelect(u),
    audio.onDeselect(d),
    audio.onProgress(function(e, t, a) {
        var n = ge("audio" + e);
        audio.playing() ? (addClass("ai_playing", n),
        addClass("ai_playing", "lm_audio")) : (removeClass("ai_playing", n),
        removeClass("ai_playing", "lm_audio")),
        n && (C(n, t / a),
        addClass("ai_current", n))
    }),
    audio.onPositionChanged(p),
    audio.onVolumeChanged(function(e, t) {
        var a = ge("audio" + e);
        a && x(a, t)
    }),
    audio.onEnded(function(e) {
        var t = ge("audio" + e);
        t && k(t, 1)
    }),
    audio.onNotFoundError(v),
    audio.onEmptyPlaylistError(v);
    function s() {
        each(geByClass("ai_current"), function(e, t) {
            t = S(t),
            d(t.id, t.dur)
        });
        var e = audio.getCurrentId()
          , t = ge("audio" + e)
          , a = audio.loaded()
          , n = audio.position()
          , o = audio.duration();
        audio.playing() ? (addClass("ai_playing", t),
        addClass("ai_playing", "lm_audio")) : (removeClass("ai_playing", t),
        removeClass("ai_playing", "lm_audio")),
        u(audio.getCurrent()),
        C(t, a / o),
        p(audio.getCurrentId(), n, o)
    }
    function l(e) {
        addClass("ai_playing", "lm_audio");
        var t = ge("audio" + e);
        t && (addClass("ai_playing", t),
        addClass("ai_current", t),
        audioplayer.playback(e))
    }
    function c(e) {
        removeClass("ai_playing", "lm_audio");
        var t = ge("audio" + e);
        t && (removeClass("ai_playing", t),
        addClass("ai_current", t),
        audioplayer.playback(e, !0))
    }
    function u(e) {
        if (!e)
            return void hide("lm_player");
        show("lm_player");
        var t = ge("lm_audio");
        t && (val(geByClass1("ai_artist", t), e.artist),
        val(geByClass1("ai_title", t), e.title));
        var a = ge("audio" + e.id);
        a && (C(a, 0),
        k(a, 0),
        w(a, T(0, audio.duration())),
        x(a, audio.volume()),
        addClass("ai_current", a))
    }
    function d(e, t) {
        var a = ge("audio" + e);
        removeClass("ai_playing", "lm_audio"),
        a && (w(a, z(t)),
        removeClass("ai_playing", a),
        removeClass("ai_current", a),
        i = 0,
        r[e] && delete r[e])
    }
    function p(e, t, a) {
        var n = ge("audio" + e);
        n && (f || k(n, t / a),
        w(n, audioplayer.getFormatedTime(t, a)),
        t > 1 && (r[e] = 1))
    }
    function v(e) {
        var t = gpeByClass("audios_list", "audio" + e)
          , a = geByClass("audio_item", t)
          , n = []
          , o = !1;
        each(a, function(t, a) {
            return (a = S(a)) ? (n.push(a),
            void (a.id == e && (o = !0))) : !0
        }),
        audio.playlist(n, {
            q: attr(t, "data-query")
        }),
        o && audio.play(e)
    }
    var f = null 
      , _ = null 
      , h = !1
      , g = !1;
    addEvent(document, isTouch ? "touchend touchcancel" : "mouseup", y),
    addEvent(document, isTouch ? "touchmove" : "mousemove", m);
    function m(e) {
        if (f) {
            var t = gpeByClass("audio", f)
              , a = b(f, e);
            e && cancelEvent(e),
            h && k(t, a),
            g && (x(t, a),
            audio.volume(a)),
            _ = a
        }
    }
    function y(e) {
        if (f) {
            var t = gpeByClass("audio_item", f)
              , a = b(f, e) || _;
            e && cancelEvent(e),
            h && (k(t, a),
            audio.position(a, !0)),
            g && x(t, a),
            f = _ = null ,
            h = g = !1
        }
    }
    function b(e, t) {
        var a = hasClass("touch", bodyNode) ? 10 : 8
          , n = t.pageX || t.touches && t.touches[0] && t.touches[0].pageX || 0
          , o = n - getX(e) - a / 2
          , i = e.offsetWidth - a
          , r = i ? Math.max(0, Math.min(o / i, 1)) : 0;
        return r
    }
    function w(e, t) {
        if (e) {
            var a = geByClass1("ai_dur", e);
            val(a, t)
        }
    }
    function C(e, t) {
        if (e) {
            var a = geByClass1("aic_progress_wrap", e)
              , n = geByClass1("aic_load_line", a);
            n.style.width = 100 * Math.max(0, Math.min(t, 1)) + "%"
        }
    }
    function k(e, t) {
        if (e) {
            {
                var a = geByClass1("aic_progress_wrap", e)
                  , n = geByClass1("aic_progress_line", a);
                geByClass1("aic_slider", n)
            }
            n.style.width = 100 * t + "%"
        }
    }
    function x(e, t) {
        if (e) {
            {
                var a = geByClass1("aic_volume_wrap", e)
                  , n = geByClass1("aic_progress_line", a);
                geByClass1("aic_slider", n)
            }
            n.style.width = 100 * t + "%"
        }
    }
    function S(e) {
        if (e = ge(e),
        !e || !attr(e, "data-id"))
            return !1;
        if (hasClass("ai_deleted", e))
            return !1;
        var t = attr(e, "data-id")
          , a = val(geByTag1("input", e))
          , n = attr(geByClass1("ai_dur", e), "data-dur")
          , o = val(geByClass1("ai_artist", e))
          , i = val(geByClass1("ai_title", e))
          , r = !!geByClass1("ai_add", e)
          , s = !!geByClass1("ai_del", e);
        return {
            id: t,
            src: a,
            dur: n,
            artist: htsc(stripTags(o)),
            title: htsc(stripTags(i)),
            can_add: r,
            can_del: s
        }
    }
    function B(e, t, a) {
        if (!e)
            return "";
        var n = htsc(e.id)
          , o = htsc(e.src)
          , i = +e.dur
          , r = e.artist
          , s = e.title
          , l = e.can_add
          , c = e.can_del
          , u = s ? '<span class="divider"> &ndash; </span>' : ""
          , d = isTouch ? "ontouchstart" : "onmousedown"
          , p = ""
          , v = "";
        if (M(n)) {
            if (a)
                return "";
            p += " ai_deleted"
        }
        return E(n) && (p += " ai_added"),
        c ? (p += " ai_has_btn",
        v = '<div class="ai_del" onclick="audioplayer.del(\'' + n + '\', event);"><i class="i_del"></i></div>') : l && (p += " ai_has_btn",
        v = '<div class="ai_add" onclick="audioplayer.add(\'' + n + '\', event);"><i class="i_add"></i></div>'),
        n == audio.getCurrentId() && (audio.playing() && (p += " ai_playing"),
        p += " ai_current"),
        '<div id="audio' + n + '" data-id="' + n + '" class="audio_item' + p + '" onclick="audioplayer.playPause(event, \'' + n + "'" + (t ? ", true" : "") + ');"><div class="ai_info"><div class="ai_play"><i class="i_play"></i></div>' + v + '<div class="ai_body"><div class="ai_dur" data-dur="' + i + '" onclick="audioplayer.switchTimeFormat(this, event);">' + z(i) + '</div><div class="ai_label"><span class="ai_artist">' + r + "</span>" + u + '<span class="ai_title">' + s + '</span></div><input type="hidden" value="' + o + '"></div></div><div class="ai_controls"><table class="row_table"><tr><td class="aic_progress_wrap"><div class="aic_line" ' + d + '="audioplayer.setPosition(this, event);" onclick="cancelEvent(event);"><div class="aic_ln aic_back_line" onclick="cancelEvent(event);"></div><div class="aic_ln aic_load_line" onclick="cancelEvent(event);"></div><div class="aic_ln aic_pl_wrap" onclick="cancelEvent(event);"><div class="aic_ln aic_progress_line" onclick="cancelEvent(event);"><div class="aic_slider" onclick="cancelEvent(event);"></div></div></div></div></td><td class="aic_volume_wrap"><div class="aic_line" ' + d + '="audioplayer.setVolume(this, event);" onclick="cancelEvent(event);"><div class="aic_ln aic_back_line" onclick="cancelEvent(event);"></div><div class="aic_ln aic_pl_wrap" onclick="cancelEvent(event);"><div class="aic_ln aic_progress_line" onclick="cancelEvent(event);"><div class="aic_slider" onclick="cancelEvent(event);"></div></div></div></div></td></tr></table></div></div>'
    }
    function z(e) {
        var t, a, n, o = 0 > e;
        return e = Math.round(o ? -e : e),
        a = e % 60,
        t = 10 > a ? "0" + a : a,
        e = Math.floor(e / 60),
        n = e % 60,
        t = n + ":" + t,
        e = Math.floor(e / 60),
        e > 0 && (10 > n && (t = "0" + t),
        t = e + ":" + t),
        o && (t = "-" + t),
        t
    }
    function T(t, a) {
        return z(e && a ? t - a : t)
    }
    function E(e) {
        return cur.addedAudios ? cur.addedAudios[e] : !1
    }
    function j(e) {
        cur.addedAudios || (cur.addedAudios = {}),
        cur.addedAudios[e] = !0
    }
    function A(e) {
        cur.addedAudios && delete cur.addedAudios[e]
    }
    function M(e) {
        return cur.deletedAudios ? cur.deletedAudios[e] : !1
    }
    function N(e) {
        cur.deletedAudios || (cur.deletedAudios = {}),
        cur.deletedAudios[e] = !0
    }
    function P(e) {
        cur.deletedAudios && delete cur.deletedAudios[e]
    }
    return {
        init: function(e) {
            return audio.support ? (t = e.add_hash || "",
            a = e.del_hash || "",
            void (n = e.res_hash || "")) : !1
        },
        initAudio: s,
        getDOMFromAudio: B,
        add: function(e, a) {
            audio.support && (hasClass("ai_added", "audio" + e) || (addClass("ai_added", "audio" + e),
            j(e),
            ajax.post("/audio", {
                _ajax: 1,
                act: "add",
                audio: e,
                hash: t
            }, {
                onDone: function(t) {
                    t || (removeClass("ai_added", "audio" + e),
                    A(e))
                },
                onFail: function() {
                    removeClass("ai_added", "audio" + e),
                    A(e);
                    var a = Array.prototype.slice.call(arguments)
                      , n = a.shift();
                    switch (n) {
                    case 2:
                        nav.go("/audio?act=add&audio=" + e + "&hash=" + t)
                    }
                }
            }),
            a && cancelEvent(a)))
        },
        del: function(e, t) {
            if (audio.support && ge("audio" + e)) {
                var o = hasClass("ai_deleted", "audio" + e);
                toggleClass("ai_deleted", "audio" + e, !o),
                o ? P(e) : N(e),
                ajax.post("/audio", {
                    _ajax: 1,
                    act: o ? "restore" : "delete",
                    audio: e,
                    hash: o ? n : a
                }, {
                    onDone: function(t) {
                        t || (toggleClass("ai_deleted", "audio" + e, o),
                        o ? N(e) : P(e))
                    },
                    onFail: function() {
                        toggleClass("ai_deleted", "audio" + e, o),
                        o ? N(e) : P(e);
                        var t = Array.prototype.slice.call(arguments)
                          , i = t.shift();
                        switch (i) {
                        case 2:
                            nav.go("/audio?act=" + (o ? "restore" : "delete") + "&audio=" + e + "&hash=" + (o ? n : a))
                        }
                    }
                }),
                t && cancelEvent(t)
            }
        },
        playPause: function(e, t, a) {
            if (audio.support) {
                var n = ge("audio" + t);
                if (n && hasClass("ai_deleted", n) && !hasClass("ai_current", n))
                    return !0;
                a && t != audio.getCurrentId() ? v(t, !0) : audio.operate(t)
            } else
                alert(lang.mobile_audio_player_not_support);
            return cancelEvent(e),
            !1
        },
        getFormatedTime: T,
        switchTimeFormat: function(t, a) {
            var n = gpeByClass("audio_item", t);
            if (!hasClass("ai_current", n) || hasClass("ai_select", n))
                return !0;
            e = !e,
            lsSet("audio_time_left", e ? "1" : "0");
            var o = ge("audio" + audio.getCurrentId());
            return w(o, T(audio.position(), audio.duration())),
            a && cancelEvent(a),
            !1
        },
        setPosition: function(e, t) {
            f || (f = e,
            h = !0,
            m(t))
        },
        setVolume: function(e, t) {
            f || (f = e,
            g = !0,
            m(t))
        },
        playback: function(e, a) {
            if (clearTimeout(o),
            !a && e && e != i) {
                var n = function() {
                    return r[e] ? void ajax.post("/audio", {
                        _ajax: 1,
                        act: "playback",
                        audio: e,
                        hash: t
                    }, {
                        onDone: function() {
                            i = e
                        }
                    }) : void (o = setTimeout(n, 1e4))
                }
                ;
                o = setTimeout(n, 1e4)
            }
        },
        openPlayer: function(e, t) {
            var a = nav.path
              , n = nav.params
              , o = "#player"
              , i = a + (n ? "?" + n : "") + o;
            return nav.al_go(i, null , {
                local: !0,
                target: e,
                nav: {
                    push: i,
                    path: a,
                    params: n,
                    hash: o
                },
                no_push: t
            })
        }
    }
}()
  , photoview = function() {
    var e = !1
      , t = !1
      , a = !1
      , n = !1
      , o = !1
      , i = !1
      , r = !1
      , s = !1
      , l = !1
      , c = !1
      , u = !1
      , d = !1
      , p = !1
      , v = !1
      , f = !1
      , _ = !1
      , h = !1
      , g = !1
      , m = !1
      , y = !1
      , b = !1
      , w = !1
      , C = !1
      , k = {
        min_scale: 1,
        max_scale: 3,
        min_scale_limit: .5,
        max_scale_limit: 5,
        anim_duration: 300,
        inertia_duration: 300,
        bounce_diff: 1.5,
        crop_padding: 20,
        crop_size: 250,
        fps: 0
    };
    function x() {
        var h = '<div id="z_photoview"><div class="zpv_siblings"><div id="zpv_left" class="zpv_thumb_item"><img class="zpv_img" alt=""></div><div id="zpv_right" class="zpv_thumb_item"><img class="zpv_img" alt=""></div></div><div class="zpv_body"><div id="zpv_center" class="zpv_thumb_item"><img class="zpv_img" alt=""></div></div><div class="zpv_close_msg_wrap"><div class="zpv_close_msg">' + lang.mobile_zphoto_move_to_close + '</div></div><div class="zpv_controls"><div class="mhead zpv_header"><a class="zpv_close_btn" onclick="return photoview.closePhoto(event);"><i class="zpv_close_icon"></i></a><div class="hb_wrap"><h1 id="zpv_summary" class="hb_btn mh_header"></h1></div></div><div class="zpv_zoom_btns"><a class="zpv_zoom_btn zpv_zoomin"><b class="zpv_zb_wrap"><i class="i_icon"></i></b></a><a class="zpv_zoom_btn zpv_zoomout"><b class="zpv_zb_wrap"><i class="i_icon"></i></b></a></div><div class="zpv_bottom"><div class="zpv_photo_desc_wrap"></div><div class="zpv_bottom_body"><table class="zpv_values like_box row_table"></table></div></div></div><div class="zpv_tags"></div><div class="zpva zpv_crop"><div class="zpv_crop_box"></div><div class="zpv_crop_loading"></div></div></div>'
          , g = hasClass("x2", bodyNode)
          , m = "/images/zpv_icons" + (g ? "_2x" : "") + ".png?2";
        (new Image).src = m,
        zlayer.create(h, mn),
        e = ge("z_photoview"),
        t = geByClass1("zpv_body", e),
        a = geByClass1("zpv_siblings", e),
        n = geByClass1("zpv_controls", e),
        l = geByClass1("zpv_zoom_btns", e),
        i = geByClass1("zpv_close_msg_wrap", e),
        o = geByClass1("zpv_bottom", e),
        r = geByClass1("zpv_photo_desc_wrap", e),
        s = geByClass1("zpv_values", o),
        c = geByClass1("zpv_zoomin", l),
        u = geByClass1("zpv_zoomout", l),
        f = geByClass1("zpv_tags", e),
        _ = geByClass1("zpv_crop", e),
        d = geByClass1("zpv_img", "zpv_center"),
        p = geByClass1("zpv_img", "zpv_left"),
        v = geByClass1("zpv_img", "zpv_right")
    }
    function S() {
        e = t = a = n = i = !1,
        o = s = !1,
        l = c = u = !1,
        d = p = v = f = _ = !1
    }
    function B(e) {
        var t = getCw()
          , a = getCh()
          , n = t / 2
          , o = a / 2;
        if (e.touches) {
            for (var i = 0, r = 0, s = 0, l = 0, c = Math.min(2, e.touches.length); c > r; r++)
                s += e.touches[r].pageX,
                l += e.touches[r].pageY,
                i++;
            return c ? {
                pageX: s / c - n,
                pageY: l / c - o
            } : {
                pageX: -n,
                pageY: -o
            }
        }
        return {
            pageX: e.pageX - n,
            pageY: e.pageY - o
        }
    }
    function z(e, t) {
        var a = t.pageX - e.pageX
          , n = t.pageY - e.pageY;
        return Math.sqrt(a * a + n * n)
    }
    function T(e) {
        if (!e)
            return e;
        var t = d.width
          , a = d.height
          , n = t / 2
          , o = a / 2;
        return [e[0] + n, e[1] + o]
    }
    function E(e) {
        if ("undefined" != typeof e.naturalWidth)
            return {
                width: e.naturalWidth,
                height: e.naturalHeight
            };
        var t = new Image;
        return t.src = e.src,
        {
            width: e.width,
            height: e.height
        }
    }
    function j(e) {
        var t = attr(e, "data-id")
          , a = rn(Ja)
          , n = a.tags || {}
          , o = n[t] || [];
        return A(o)
    }
    function A(e) {
        return e[0] ? {
            coords: {
                x: e[0][0],
                y: e[0][1],
                w: e[0][2],
                h: e[0][3]
            },
            name: e[1],
            href: e[2],
            al: e[3]
        } : {}
    }
    function M(e) {
        setStyle(a, "overflow", e ? "visible" : "hidden")
    }
    var N = null 
      , P = null ;
    function U(e, t, n, o, r, s, l, c, u) {
        if (!k.fps || u) {
            var p = !1
              , v = c ? function() {
                p || (p = !0,
                c())
            }
             : !1;
            s ? (setStyle.animate(a, "transform", {
                duration: s,
                func: l
            }, v),
            setStyle.animate(d, r === !1 ? "transform" : "transform, opacity", {
                duration: s,
                func: l
            }, v),
            setStyle.animate(f, r === !1 ? "transform" : "transform, opacity", {
                duration: s,
                func: l
            }, v),
            setStyle.animate(i, r === !1 ? "transform" : "transform, opacity", {
                duration: s,
                func: l
            }, v),
            Dt = !0) : Dt && (setStyle.animate(a),
            setStyle.animate(d),
            setStyle.animate(f),
            setStyle.animate(i),
            Dt = !1),
            setStyle.transform(a, {
                translate: [t, 0]
            }),
            setStyle.transform(d, e, [n, o]),
            ja(e, n, o),
            r !== !1 && (setStyle(d, "opacity", r),
            (wt || Ct) && (setStyle(f, "opacity", r),
            kt = !0),
            za(o, r)),
            Sa(e)
        } else
            N = [e, t, n, o, r, s, l, c, !0],
            P || q()
    }
    function q() {
        N && (U.apply(window, N),
        N = null ),
        clearTimeout(P),
        P = k.fps ? setTimeout(q, 1e3 / k.fps) : null 
    }
    function D(e, t, a) {
        la(!0),
        U(ct, nt, st, lt, Ht, e, t, a),
        Ht = !1
    }
    function H(e, t, a, n) {
        U(e.currentScale, e.curBodyX, e.currentX, e.currentY, !1, t, a, n)
    }
    function R(e) {
        e = T(e || [0, 0]),
        setStyle.transformOrigin(d, e)
    }
    var X = !1
      , Y = !1
      , L = null ;
    function F(e) {
        var t = e[1].pageX - e[0].pageX
          , a = e[1].pageY - e[0].pageY
          , n = Math.sqrt(t * t + a * a)
          , o = 180 * Math.atan2(a, t) / Math.PI;
        return {
            distance: n,
            angle: o
        }
    }
    function O(e) {
        if (!X)
            return {
                scale: 1,
                rotation: 0
            };
        if (e.length < 2)
            return {
                scale: X.scale,
                rotation: X.rotation
            };
        var t = F(e)
          , a = t.distance / X.startDistance
          , n = t.angle - X.startAngle;
        -90 > n && (n += 360),
        n > 270 && (n -= 360);
        var o = {
            scale: a,
            rotation: n
        };
        return extend(X, o),
        o
    }
    function I(e) {
        var t = F(e);
        if (X) {
            var a = t.distance / X.scale
              , n = t.angle - X.rotation;
            -180 > n && (n += 360),
            n > 180 && (n -= 360);
            var o = {
                startDistance: a,
                startAngle: n
            };
            extend(X, o)
        } else
            X = {
                startDistance: t.distance,
                startAngle: t.angle,
                scale: 1,
                rotation: 0
            }
    }
    function W(e) {
        return extend({
            originalEvent: e
        }, e, O(e.touches), B(e))
    }
    function V(e) {
        var t = e.touches;
        if (t) {
            if (t.length > 5 || t.length < 2)
                return void (X && (xa(W(e)),
                X = !1));
            if (X)
                return void I(t);
            Ca(W(e)),
            I(t)
        }
    }
    function G(e) {
        var t = e.touches;
        if (t)
            return t.length > 5 || t.length < 2 ? void (X && (xa(W(e)),
            X = !1)) : void (X && ka(W(e)))
    }
    function $(e) {
        var t = e.touches;
        if (t)
            return (t.length > 5 || t.length < 2) && X && (xa(W(e)),
            X = !1),
            X ? void I(t) : void 0
    }
    function K(e) {
        preventEvent(e);
        var t = (e.detail ? e.detail : e.wheelDelta) > 0 ? 1.05 : .95
          , a = extend({
            originalEvent: e
        }, e);
        Y || (Y = 1,
        ya(e),
        Ca(extend(a, {
            scale: Y
        }))),
        Y *= t,
        ka(extend(a, {
            scale: Y
        })),
        clearTimeout(L),
        L = setTimeout(function() {
            xa(extend(a, {
                scale: Y
            })),
            wa(e),
            Y = !1
        }, 200)
    }
    var Q, J, Z, et, tt, at, nt, ot, it, rt, st, lt, ct, ut, dt, pt, vt, ft, _t, ht, gt, mt, yt, bt, wt, Ct, kt, xt, St, Bt, zt, Tt, Et, jt, At, Mt, Nt, Pt, Ut, qt, Dt, Ht;
    function Rt() {
        yt = !1,
        bt = !1,
        wt = !0,
        Ct = !1,
        Et = !1,
        jt = !0,
        At = !1,
        Mt = !1,
        Dt = !1,
        Ht = !1,
        m = !1,
        b = !1,
        w = !1,
        C = !1,
        Xt()
    }
    function Xt() {
        Q = 0,
        J = 0,
        Z = 0,
        et = 0,
        tt = 1,
        at = !0,
        nt = 0,
        ot = 0,
        it = 0,
        rt = 1,
        st = 0,
        lt = 0,
        ct = 1,
        ut = !1,
        dt = !1,
        pt = !1,
        vt = !1,
        ft = !1,
        _t = !1,
        ht = !1,
        gt = !1,
        mt = !1,
        kt = !1,
        xt = !1,
        St = !1,
        Bt = !1,
        zt = !1,
        Tt = !1,
        Nt = !1,
        Pt = !1,
        Ut = !1,
        qt = !1
    }
    function Yt() {
        return {
            lastScale: tt,
            deltaX: Q,
            deltaY: J,
            pointX: Z,
            pointY: et,
            curScale: rt,
            currentScale: ct,
            curX: ot,
            curY: it,
            currentX: st,
            currentY: lt,
            curBodyX: nt
        }
    }
    function Lt(e, t, a) {
        a = a || Yt(),
        e = e || {};
        var n = extend({}, a, e);
        return isUndefined(e.deltaX) || isUndefined(e.deltaY) ? isUndefined(e.pointX) || isUndefined(e.pointY) ? isUndefined(e.lastScale) ? isUndefined(e.currentScale) ? isUndefined(e.curScale) || (n.currentScale = n.lastScale * n.curScale,
        n.curX = n.pointX - n.deltaX * n.curScale,
        n.curY = n.pointY - n.deltaY * n.curScale,
        n.currentX = n.curX / n.currentScale,
        n.currentY = n.curY / n.currentScale) : (n.curScale = n.currentScale / n.lastScale,
        n.curX = n.pointX - n.deltaX * n.curScale,
        n.curY = n.pointY - n.deltaY * n.curScale,
        n.currentX = n.curX / n.currentScale,
        n.currentY = n.curY / n.currentScale) : (n.curScale = 1,
        n.currentScale = n.curScale * n.lastScale) : (n.curX = n.pointX - n.deltaX * n.curScale,
        n.curY = n.pointY - n.deltaY * n.curScale,
        n.currentX = n.curX / n.currentScale,
        n.currentY = n.curY / n.currentScale) : (n.pointX = n.curX + n.deltaX * n.curScale,
        n.pointY = n.curY + n.deltaY * n.curScale),
        isUndefined(e.curX) || (n.curX = e.curX,
        n.currentX = n.curX / n.currentScale),
        isUndefined(e.curY) || (n.curY = e.curY,
        n.currentY = n.curY / n.currentScale),
        t ? n : (Q = n.deltaX,
        J = n.deltaY,
        Z = n.pointX,
        et = n.pointY,
        tt = n.lastScale,
        rt = n.curScale,
        ct = n.currentScale,
        ot = n.curX,
        it = n.curY,
        st = n.currentX,
        lt = n.currentY,
        nt = n.curBodyX,
        void 0)
    }
    function Ft() {
        var e = zlayer.width || getCw()
          , t = zlayer.height || getCh();
        if (C)
            var a = e
              , n = Math.min(k.crop_size, a - 2 * k.crop_padding)
              , o = n
              , i = n;
        else
            var o = e
              , i = t;
        return {
            width: o,
            height: i
        }
    }
    function Ot(e) {
        var t = Ft()
          , a = t.width
          , n = d.width * e
          , o = (n - a) / 2
          , i = -o;
        return 0 >= o && (i = o = 0),
        {
            min: i,
            max: o
        }
    }
    function It(e) {
        var t = Ft()
          , a = t.height
          , n = d.height * e
          , o = (n - a) / 2
          , i = -o;
        return 0 >= o && (i = o = 0),
        {
            min: i,
            max: o
        }
    }
    function Wt() {
        if (C)
            var e = Ka ? Ka[0] : {
                max_scale: k.max_scale
            }
              , t = 1
              , a = e.max_scale;
        else
            var n = E(d)
              , t = k.min_scale
              , a = Math.max(k.max_scale, n.width / getCw(), n.height / getCh());
        return {
            min: t,
            max: a
        }
    }
    function Vt(e) {
        clog(it, e);
        var t = zlayer.height || getCh()
          , a = Math.abs(Za) >= 10
          , n = Math.abs(e) > 1
          , o = t / 3.5
          , i = Math.abs(it);
        return 0 > it * e && (a = !0),
        e = e || 0,
        i > o || !a && n ? ($t(e),
        !0) : (ga() && (Ht = 1,
        D(300),
        vt = !1,
        Ct && (Ct = !1,
        Ma(!0))),
        !1)
    }
    function Gt() {
        y && photoview.close()
    }
    function $t(e) {
        var t = zlayer.height || getCh()
          , a = 2 * Math.abs(lt) > t ? .85 : 1.7;
        Lt({
            curY: (e > 1 ? t : -1 > e ? -t : it > 0 ? t : -t) / a
        }),
        Ht = 0,
        D(150, "ease-in", Gt),
        setStyle(n, "width", 0),
        At = !0
    }
    function Kt(e) {
        var t = zlayer.width || getCw()
          , a = t / 2
          , n = -a;
        return e = e || 0,
        (n > nt || -1 > e) && ft ? (Jt(),
        !0) : (nt > a || e > 1) && _t ? (Zt(),
        !0) : (ga() && D(300),
        !1)
    }
    function Qt() {
        Et !== !1 && (M(!1),
        pn(Et),
        setStyle.transform(p),
        setStyle.transform(v),
        U(1, 0, 0, 0, 1),
        R(),
        Et = !1)
    }
    function Jt() {
        var e = zlayer.width || getCw()
          , t = 1.05 * e;
        st -= (t + nt) / ct,
        nt = -t,
        Et = Ja + 1,
        Za--,
        D(300, "ease-out", Qt),
        Fa(!1, !0),
        Ct = !1,
        photoview.onPhotoChange && photoview.onPhotoChange(Ja + 1, {
            no_open: !0,
            local: b,
            crop: C
        })
    }
    function Zt() {
        var e = zlayer.width || getCw()
          , t = 1.05 * e;
        st += (t - nt) / ct,
        nt = t,
        Et = Ja - 1,
        Za++,
        D(300, "ease-out", Qt),
        Fa(!1, !0),
        Ct = !1,
        photoview.onPhotoChange && photoview.onPhotoChange(Ja - 1, {
            no_open: !0,
            local: b,
            crop: C
        })
    }
    function ea() {
        var e = lang.mobile_photos_photoview_header || ""
          , t = Et !== !1 ? Et : Ja;
        e = e.replace("%s", t + 1),
        e = e.replace(/%s|{count}/, Ka.length),
        val("zpv_summary", e)
    }
    function ta() {
        if (!Pt)
            return !1;
        var e = oa()
          , t = e[0]
          , a = e[1]
          , n = e[2];
        if (na(),
        !t)
            return !1;
        var o = pt || vt ? 5.1 : 4.7
          , i = t / o
          , r = a * i - o * i * i / 2
          , s = n * i - o * i * i / 2;
        if (i *= 530,
        r *= 140,
        s *= 140,
        .1 > t || !r && !s)
            return !1;
        if (!vt) {
            var l = {};
            pt || (l.curX = ot + r,
            l.curY = it + s),
            Lt(l);
            var c = Ot(ct);
            l = {},
            ot < c.min ? l.curBodyX = at ? ot - c.min : 0 : ot > c.max && (l.curBodyX = at ? ot - c.max : 0),
            Lt(l)
        }
        return pt ? 4.7 * a : vt ? 4.7 * n : i
    }
    function aa(e) {
        Pt || (Pt = []),
        Pt.push([vkNow(), e]),
        Pt = Pt.slice(-20)
    }
    function na() {
        Pt = !1
    }
    function oa() {
        if (!Pt || Pt.length < 2)
            return [0, 0, 0];
        for (var e = vkNow(), t = !1, a = Pt.pop(), n = Pt.length - 1; n >= 0; n--) {
            var o = e - Pt[n][0];
            if (o > 150)
                break;
            t = Pt[n]
        }
        if (!t || !a)
            return [0, 0, 0];
        var i = a[1].pageX - t[1].pageX
          , r = a[1].pageY - t[1].pageY
          , s = Math.sqrt(i * i + r * r)
          , o = a[0] - t[0];
        return o ? [s / o, i / o, r / o] : [0, 0, 0]
    }
    function ia(e, t, a, n) {
        var o = e[0]
          , i = e[1]
          , r = a[0]
          , s = a[1]
          , l = n / t;
        return 1 == l ? !1 : [o + (o - r) / (l - 1), i + (i - s) / (l - 1)]
    }
    function ra(e, t) {
        var a = ia([e.curX, e.curY], e.currentScale, [t.curX, t.curY], t.currentScale);
        if (!a)
            return !1;
        var n = a[0]
          , o = a[1];
        return e.deltaX = n - e.curX,
        e.deltaY = o - e.curY,
        e.currentX = e.curX / e.currentScale + n - n / e.currentScale,
        e.currentY = e.curY / e.currentScale + o - o / e.currentScale,
        t.deltaX = n - t.curX,
        t.deltaY = o - t.curY,
        t.currentX = t.curX / t.currentScale + n - n / t.currentScale,
        t.currentY = t.curY / t.currentScale + o - o / t.currentScale,
        a
    }
    function sa(e, t, a) {
        var n, o, i, r, s, l, c, u, p, v, f, _, h, g, m, y, b, w = zlayer.width || getCw(), C = zlayer.height || getCh(), k = !1, x = 15, S = (Math.min(50, w / 7),
        E(d)), B = w / S.width, z = C / S.height, T = Math.min(1, B, z), A = j(e), M = A.coords, N = geByClass1("zpv_tl", e), P = getW(N), U = getH(N), q = (Math.min((w - 2 * x) / Math.max(M.w * S.width * T / 100, P), (C - 2 * x) / (M.h * S.height * T / 100 + U + 5)),
        function() {
            i = S.width * T * a.currentScale,
            r = S.height * T * a.currentScale,
            s = w / 2 - i / 2 + a.currentX * a.currentScale,
            l = C / 2 - r / 2 + a.currentY * a.currentScale,
            p = s + M.x * i / 100,
            v = l + M.y * r / 100,
            c = M.w * i / 100,
            u = M.h * r / 100,
            n = p + c / 2 - P / 2,
            o = v + u + 5,
            h = Math.min(p, n),
            f = Math.max(c, P),
            m = h + f,
            g = v,
            _ = u + U + 5,
            y = g + _,
            b = {}
        }
        );
        return a = Lt(b, t, a),
        a = a || Yt(),
        q(),
        x > h ? (b.curX = a.curX + (x - h),
        k = !0) : m > w - x && (b.curX = a.curX - (m - w + x),
        k = !0),
        x > g && (b.curY = a.curY + (x - g),
        k = !0),
        a = Lt(b, t, a),
        a = a || Yt(),
        q(),
        y > C - x && (b.curY = a.curY - (y - C + x),
        k = !0),
        a = Lt(b, t, a),
        t ? a : k
    }
    function la(e) {
        qt && (qt = !1,
        R(),
        e || D(),
        Ea(!0, !0))
    }
    function ca(e, t, a) {
        var n = {};
        return a = a || Yt(),
        n.lastScale = e,
        a = Lt(n, t, a),
        t ? a : !1
    }
    function ua(e, t, a) {
        var n = {};
        if (a = a || Yt(),
        !ma())
            return t ? a : !1;
        n.curScale = e,
        a = Lt(n, t, a),
        a = a || Yt();
        var o = Wt();
        return n = {
            currentScale: a.currentScale
        },
        a.currentScale < o.min ? n.currentScale = a.currentScale + (o.min - a.currentScale) / k.bounce_diff : a.currentScale > o.max && (n.currentScale = a.currentScale + (o.max - a.currentScale) / k.bounce_diff),
        a = Lt(n, t, a),
        t ? a : !1
    }
    function da(e, t) {
        if (!ma())
            return !1;
        var a = !1
          , n = {};
        t = t || Yt();
        var o = Wt();
        return t.currentScale < o.min ? (n.currentScale = o.min,
        a = !0) : t.currentScale > o.max && (n.currentScale = o.max,
        a = !0),
        t = Lt(n, e, t),
        e ? t : a
    }
    function pa(e) {
        if (!ma())
            return !1;
        var t = Wt()
          , a = {
            pageX: Z,
            pageY: et
        }
          , n = (ct > 1 ? 1 : t.max) / tt
          , o = Yt()
          , i = null ;
        i = ua(n, !0),
        i = ha(a, !0, i),
        i = ga(!0, i),
        e && (i = sa(e, !0, i),
        i = ga(!0, i));
        var r = ra(o, i);
        r && (R(r),
        H(o),
        qt = !0),
        qt && Ea(!1, !0),
        ua(n),
        ha(a),
        ga(),
        e && (sa(e),
        ga()),
        qt ? H(i, 300, !1, la) : D(300),
        ca(ct),
        Na()
    }
    function va(e) {
        if (!ma())
            return !1;
        var t = {
            pageX: 0,
            pageY: 0
        }
          , a = Yt()
          , n = null ;
        e = 1 == e ? 1 / tt : e,
        n = _a(t, !0, a),
        n = ua(e, !0, n),
        n = da(!0, n),
        n = ha(t, !0, n),
        n = ga(!0, n);
        var o = ra(a, n);
        o && (R(o),
        H(a),
        qt = !0),
        qt && Ea(!1, !0),
        _a(t),
        ua(e),
        da(),
        ha(t),
        ga(),
        qt ? H(n, 300, !1, la) : D(300),
        ca(ct)
    }
    function fa(e) {
        if (!ma())
            return !1;
        var t = Yt()
          , a = null ;
        a = sa(e, !0, t),
        a = da(!0, a),
        a = ga(!0, a);
        var n = ra(t, a);
        n && (R(n),
        H(t),
        qt = !0),
        sa(e) && (St || (St = t)),
        qt && Ea(!1, !0),
        da(),
        ga(),
        qt ? H(a, 300, !1, la) : D(300),
        ca(ct)
    }
    function _a(e, t, a) {
        var n = {};
        return a = a || Yt(),
        n.deltaX = (e.pageX - a.curX) / a.curScale,
        n.deltaY = (e.pageY - a.curY) / a.curScale,
        a = Lt(n, t, a),
        t ? a : !1
    }
    function ha(e, t, a) {
        var n = {};
        a = a || Yt(),
        n.pointX = e.pageX,
        n.pointY = e.pageY;
        var o = Ot(a.currentScale)
          , i = It(a.currentScale)
          , r = !((ut || i.max || i.min) && !pt && ma() || vt)
          , s = vt || C && !ut && !o.max && !o.min;
        s && (n.curX = 0),
        r && (n.curY = a.curY),
        a = Lt(n, t, a),
        a = a || Yt(),
        n = {};
        var l = !1;
        return a.curX <= o.min ? ft ? (l = !0,
        n.curBodyX = a.curX - o.min) : (n.curX = a.curX + (o.min - a.curX) / k.bounce_diff,
        n.curBodyX = at ? n.curX - o.min : 0) : a.curX >= o.max && (_t ? (l = !0,
        n.curBodyX = a.curX - o.max) : (n.curX = a.curX + (o.max - a.curX) / k.bounce_diff,
        n.curBodyX = at ? n.curX - o.max : 0)),
        a.curY < i.min ? r ? n.curY = i.min : vt || (n.curY = a.curY + (i.min - a.curY) / k.bounce_diff) : a.curY > i.max && (r ? n.curY = i.max : vt || (n.curY = a.curY + (i.max - a.curY) / k.bounce_diff)),
        a = Lt(n, t, a),
        t ? a : l
    }
    function ga(e, t) {
        var a = !1
          , n = {};
        t = t || Yt();
        var o = Ot(t.currentScale)
          , i = It(t.currentScale)
          , r = !ut && !i.max && !i.min || pt || !ma() && !vt
          , s = vt;
        return s && (n.curX = 0),
        r && (n.curY = t.curY),
        t.curX < o.min ? (n.curX = o.min,
        n.curBodyX = 0,
        a = !0) : t.curX > o.max && (n.curX = o.max,
        n.curBodyX = 0,
        a = !0),
        t.curY < i.min ? (n.curY = i.min,
        a = !0) : t.curY > i.max && (n.curY = i.max,
        a = !0),
        t = Lt(n, e, t),
        e ? t : a
    }
    function ma() {
        return m ? !1 : C ? !0 : Qa[en.src]
    }
    function ya(e) {
        if (scrollTop() || scrollTop(0),
        !At) {
            if (e && "mousedown" == e.type && preventEvent(e),
            e.touches && e.touches.length || !h) {
                if (Qt(),
                !dt && !ut) {
                    Nt = B(e);
                    var t = Ot(ct);
                    ot <= t.min && (ft = rn(Ja + 1) !== !1),
                    ot >= t.max && (_t = rn(Ja - 1) !== !1)
                }
                if (dt || m)
                    ht = gt = mt = !1,
                    yt = !1;
                else {
                    clearTimeout(bt);
                    var a = B(e);
                    ht && vkNow() - ht < 500 && gt && z(a, gt) < 50 ? (mt = vkNow(),
                    yt = !1) : (ht = vkNow(),
                    gt = a,
                    yt = vkNow())
                }
                m || (dt = !0)
            }
            ut || (at = !0,
            M(!0)),
            Bt = B(e),
            na(),
            aa(Bt),
            _a(Bt)
        }
    }
    function ba(e) {
        if (!At && (preventEvent(e),
        dt)) {
            if (ht = gt = mt = !1,
            yt = !1,
            Bt = B(e),
            aa(Bt),
            Ut) {
                if (!(Ut < vkNow()))
                    return void na();
                Ut = !1,
                _a(Bt),
                D()
            }
            if (Nt && !pt && !vt) {
                var t = Math.abs(Bt.pageX - Nt.pageX)
                  , a = Math.abs(Bt.pageY - Nt.pageY)
                  , n = It(ct);
                if (!(a > 5 || t > 5))
                    return;
                a > 5 && 5 >= t && (1 != ct || ut || m || C ? (n.max || n.min) && (ft = _t = !1) : (vt = !0,
                wt && (Ct = !0),
                Ma(!1),
                Ba(Bt.pageY - Nt.pageY > 0))),
                Nt = !1,
                _a(Bt)
            }
            var o = ha(Bt);
            !o || pt || vt || m || (pt = !0,
            Tt = Bt.pageX),
            Pa(),
            D(),
            pt && Math.abs(nt) > getCw() && wa(extend({
                originalEvent: e
            }, e, {
                touches: []
            }))
        }
    }
    function wa(e) {
        if (!At) {
            if (Mt)
                return void (Mt = !1);
            if (preventEvent(e),
            e.touches && !e.touches.length || !h) {
                var t = ta();
                if (pt)
                    Kt(t) && (Xt(),
                    M(!0));
                else if (vt)
                    Vt(t);
                else if (mt && vkNow() - mt < 1e3) {
                    var a = e && kt && (hasClass("zpv_tag", e.target) ? e.target : gpeByClass("zpv_tag", e.target));
                    pa(a),
                    ht = gt = mt = !1
                } else
                    ga() ? D(300) : t && (ga(),
                    D(t, "cubic-bezier(0, 1, 1, 1)"));
                if (yt)
                    if (vkNow() - yt > 700 || e && "touchcancel" == e.type)
                        yt = !1;
                    else {
                        if (yt = !1,
                        e)
                            var n = hasClass("zpv_header", e.target) ? e.target : gpeByClass("zpv_header", e.target)
                              , o = hasClass("zpv_zoom_btns", e.target) ? e.target : gpeByClass("zpv_zoom_btns", e.target)
                              , i = hasClass("zpv_bottom_body", e.target) ? e.target : gpeByClass("zpv_bottom_body", e.target)
                              , a = kt && (hasClass("zpv_tag", e.target) ? e.target : gpeByClass("zpv_tag", e.target));
                        e && (n || o || i || a) ? a ? La(a, e) : o && (ht = gt = mt = !1,
                        hasClass("zpv_zoomin", e.target) || gpeByClass("zpv_zoomin", e.target) ? qa(e) : Da(e)) : xt ? Fa(e) : C || (bt = setTimeout(function() {
                            Ma(),
                            Ea(wt)
                        }, 500))
                    }
                dt = !1,
                pt = ft = _t = !1,
                na()
            }
            e.touches && (e.touches.length > 1 || 1 == e.touches.length && pt) && (Bt = B(e),
            _a(Bt)),
            (e.touches && !e.touches.length || !h) && (Nt = !1)
        }
    }
    function Ca(e) {
        if (!At && (preventEvent(e),
        ht = gt = mt = !1,
        yt = !1,
        na(),
        !pt && !vt)) {
            rt = 1,
            tt = ct,
            ut = !0,
            ft = _t = !1;
            var t = Ot(ct);
            (t.min >= -5 || t.max <= 5) && (at = !1,
            M(!1));
            var a = B(e);
            _a(a),
            Ea(!1, !0)
        }
    }
    function ka(e) {
        At || (preventEvent(e),
        ht = gt = mt = !1,
        yt = !1,
        na(),
        pt || vt || (zt = B(e),
        ua(e.scale),
        ha(zt),
        D(),
        Na()))
    }
    function xa(e) {
        At || (preventEvent(e),
        ht = gt = mt = !1,
        yt = !1,
        na(),
        pt || vt || (da() && ((e.touches && e.touches.length || !h) && ha(zt),
        ga(),
        D(100),
        Ut = vkNow() + 100),
        ut = !1,
        Ea(!0, !0)))
    }
    function Sa(e) {
        var t = Wt()
          , a = e < t.max
          , n = e > t.min;
        toggleClass("zpv_zb_disabled", c, !a),
        toggleClass("zpv_zb_disabled", u, !n)
    }
    function Ba(e) {
        e ? setStyle(i, {
            top: -35,
            bottom: "auto"
        }) : setStyle(i, {
            top: "auto",
            bottom: -35
        }),
        i.is_down = e
    }
    function za(e, t) {
        if (e) {
            var a = zlayer.height
              , n = 20
              , o = a / 5
              , r = a / 3.5
              , s = Math.abs(e)
              , l = s > n ? e + (e > 0 ? n - e : -n - e) / k.bounce_diff : e
              , c = 0 === t ? 0 : Math.max(0, Math.min((s - 20) / o, .75));
            t > 0 && setStyle.transform(i, {
                translate: [0, l]
            }),
            setStyle(i, "opacity", c);
            var u = s > r
              , d = u ? "" : e > 0 ? " zpv_close_move_down" : " zpv_close_move_up"
              , p = u ? lang.mobile_zphoto_release_to_close : lang.mobile_zphoto_move_to_close;
            val(i, '<div class="zpv_close_msg' + d + '">' + p + "</div>"),
            (i.is_down && 0 > e || !i.is_down && e > 0) && Ba(e > 0)
        } else
            setStyle.transform(i, {
                translate: [0, 0]
            }),
            setStyle(i, "opacity", 0)
    }
    function Ta() {
        var e = geByClass1("zpv_close_msg", i)
          , t = getW(e);
        setStyle(i, {
            width: t || 250
        })
    }
    function Ea(e, t) {
        var a = kt;
        if (e) {
            if (!ma())
                return;
            if (!wt && !Ct || ut)
                return
        }
        kt = e,
        e && ja(ct, st, lt, t || a !== e),
        a !== e && (e && Aa(xt),
        setStyle.animate(f, t ? !1 : "opacity", {
            duration: 200,
            func: "linear"
        }, function() {
            setStyle(f, "visibility", e ? "visible" : "hidden")
        }),
        setStyle(f, "visibility", e || !t ? "visible" : "hidden"),
        setStyle(f, "opacity", e ? 1 : 0))
    }
    function ja(e, t, a, n) {
        if (!ut && kt) {
            var o = zlayer.width || getCw()
              , i = zlayer.height || getCh()
              , r = E(d)
              , s = o / r.width
              , l = i / r.height
              , c = Math.min(1, s, l)
              , u = r.width * c * e
              , p = r.height * c * e
              , v = o / 2 - u / 2 + t * e
              , _ = i / 2 - p / 2 + a * e;
            n && setStyle.animate(f),
            setStyle(f, {
                width: Math.round(u),
                height: Math.round(p)
            }),
            setStyle.transform(f, {
                translate: [Math.round(v), Math.round(_)]
            })
        }
    }
    function Aa(e) {
        if (e) {
            var t = E(d)
              , a = zlayer.width || getCw()
              , n = zlayer.height || getCh()
              , o = a / t.width
              , i = n / t.height
              , r = Math.min(1, o, i)
              , s = t.width * r * ct;
            height = t.height * r * ct;
            var l = j(e)
              , c = l.coords
              , u = geByClass1("zpv_tl", e)
              , p = getW(u)
              , v = getH(u)
              , f = c.x * s / 100
              , _ = c.y * height / 100
              , h = c.w * s / 100
              , g = c.h * height / 100
              , m = f + h / 2 - p / 2
              , y = _ + g + 5
              , b = a > s ? 0 - (a - s) / 2 : 0
              , w = a > s ? s + (a - s) / 2 : s
              , C = n > height ? height + (n - height) / 2 : height
              , k = 0
              , x = 0
              , S = 2
              , B = 5;
            b + S > m ? k = b + S - m : m + p > w - S && (k = w - S - m - p),
            y + v > C - B && (x = g > 3 * v ? C - B - y - v : -g - v - 10),
            setStyle.transform(u, {
                translate: [Math.ceil(k), Math.ceil(x)]
            })
        }
    }
    function Ma(e) {
        if ("undefined" != typeof e) {
            if (wt === e)
                return;
            wt = !e
        } else
            Ct = !1;
        setStyle(n, "width", "auto"),
        setStyle.animate(n, "opacity", {
            duration: 200,
            func: "linear"
        }, function() {
            setStyle.animate(n),
            setStyle(n, "width", wt ? "auto" : 0)
        }),
        wt ? (setStyle(n, "opacity", 0),
        wt = !1) : (setStyle(n, "opacity", 1),
        wt = !0)
    }
    function Na() {
        zlayer.height < 604 && !xt && !C && (ct > 1.25 ? (wt && (Ct = !0),
        Ma(!1)) : Ct && (Ct = !1,
        Ma(!0)))
    }
    function Pa() {
        if (vt) {
            var e = Math.abs(it)
              , t = zlayer.height / 2;
            Ht = 1 - .5 * e / t
        }
    }
    function Ua(e) {
        jt && (dt || ut || pt || e && e.touches && e.touches.length > 1 || (cancelEvent(e),
        photoview.close()))
    }
    function qa(e) {
        return jt ? (thover.highlight = !1,
        thover.end(e),
        ut || pt ? !1 : Wt().max <= ct ? !1 : (cancelEvent(e),
        va(C ? 1.25 : 1.45),
        !1)) : !1
    }
    function Da(e) {
        return jt ? (thover.highlight = !1,
        thover.end(e),
        ut || pt ? !1 : Wt().min >= ct ? !1 : (cancelEvent(e),
        va(C ? .8 : 1),
        !1)) : !1
    }
    function Ha(e) {
        if (!(dt || ut || pt || !e || e.shiftKey || e.ctrlKey || e.metaKey || e.altKey)) {
            var t = Ot(ct);
            37 == e.keyCode ? (cancelEvent(e),
            ot >= t.max && rn(Ja - 1) !== !1 && (M(!0),
            Zt())) : 39 == e.keyCode ? (cancelEvent(e),
            ot <= t.min && rn(Ja + 1) !== !1 && (M(!0),
            Jt())) : 27 == e.keyCode && Ua(e)
        }
    }
    function Ra() {
        C ? _n() : Ea(kt, !0)
    }
    function Xa(e, t) {
        return jt ? (thover.highlight = !1,
        thover.end(),
        en.likes_me ? (en.likes_me = !1,
        --en.likes_cnt) : (en.likes_me = !0,
        ++en.likes_cnt),
        dn(),
        ajax.click(e, extend({
            photo_id: t
        }, PhotoLike))) : !1
    }
    function Ya(e, t) {
        if (!jt)
            return !1;
        var a = cur.replyNames
          , n = cur.sticker_panel
          , o = cur.stickers
          , i = nav.go(e, t, {
            local: !0,
            fast: !0,
            beforeAppend: function(e) {
                val(geByClass1("mcont", e), '<div class="pcont"><div class="media_view photo_view"><div class="pv_summary"><div class="summary_loading" style="display: none;"><i class="i_loading"></i></div></div><div class="pv_tag_wrap"></div><div class="pv_body pv_touch pv_touch_full pv_hidden_icons"><a class="thumb_item"><div class="pv_photo_wrap" id="pv_photo_tags" onclick="return photo.closeTags(event);"><img src="/images/blank.gif" class="ph_img" alt="" /></div></a><div class="pv_nav"><table class="row_table pv_nav_cont"><tr><td class="pv_nav_left"><a class="pv_nav_link"><span class="pv_icon"><i class="i_icon"></i></span></a></td><td class="pv_nav_z"><a class="pv_nav_link"><span class="pv_icon"><i class="i_icon"></i></span></a></td><td class="pv_nav_right"><a class="pv_nav_link"><span class="pv_icon"><i class="i_icon"></i></span></a></td></tr></table></div></div><div class="pv_footer"></div></div></div>'),
                val("m", e.innerHTML)
            }
        });
        if (extend(cur, {
            replyNames: a,
            sticker_panel: n,
            stickers: o,
            processNav: function(e) {
                var t;
                if (t = /^\/photo(-?\d+_\d+)$/i.exec(e.nav.path)) {
                    var a = qs2obj(e.nav.params)
                      , n = qs2obj(nav.params);
                    if (a.act)
                        return !1;
                    if (a.offset != n.offset)
                        return !1;
                    if (a.list != n.list && !n.z)
                        return !1;
                    e.onPreNav && e.onPreNav();
                    var o = a.list || ""
                      , i = a.rev ? "/rev" : "";
                    return !photo.open(t[1], o + i, null , a.from, !0)
                }
                return !1
            }
        }),
        cur.destroy.push(function() {
            photo.clear()
        }),
        !i && (i = nav.go(e, t, {
            force: !0
        }),
        !i)) {
            var r = !0;
            if (zlayer._lastNav) {
                var s = zlayer._lastNav;
                ph_zparams = qs2obj(s.params),
                delete ph_zparams.z,
                r = s.path + obj2qs(ph_zparams) + s.hash
            }
            page.setMhead("m", lang.mobile_photos_photo_head_title, r),
            photo.showIcons()
        }
        return !0
    }
    function La(e, t) {
        if (!jt)
            return !1;
        if (!kt)
            return !0;
        j(e);
        return hasClass("zpv_tag_selected", e) ? hasClass("zpv_tl_wrap", t.target) || gpeByClass("zpv_tl_wrap", t.target) ? nav.go(e, t) : (fa(e),
        cancelEvent(t),
        !1) : (xt && (ht = gt = mt = !1),
        removeClass("zpv_tag_selected", xt),
        xt = e,
        Aa(e),
        addClass("zpv_tag_selected", xt),
        wt && (Ct = !0),
        Ma(!1),
        fa(e),
        cancelEvent(t),
        !1)
    }
    function Fa(e, t) {
        return jt || t ? xt ? (removeClass("zpv_tag_selected", xt),
        xt = !1,
        Ct && 1.25 >= ct && (Ct = !1,
        Ma(!0)),
        cancelEvent(e),
        !1) : !0 : !1
    }
    function Oa(e) {
        if (!jt)
            return !1;
        if (thover.highlight = !1,
        thover.end(),
        hasClass("item_disabled", e))
            return !1;
        if (!C || !Ka)
            return !1;
        crop_data = Ka[0];
        var t = Ft()
          , a = d.width * ct
          , n = d.height * ct
          , o = (a - t.width) / 2 - ot
          , i = (n - t.height) / 2 - it
          , r = 1 / ct
          , s = o / a
          , l = i / n;
        return crop_data.onSelect && crop_data.onSelect(s, l, r),
        !1
    }
    function Ia(e) {
        return jt ? (thover.highlight = !1,
        thover.end(),
        hasClass("item_disabled", e) ? !1 : Ua()) : !1
    }
    function Wa(e) {
        "touchstart" == e.type ? jt = !e.touches || 1 == e.touches.length : "touchmove" == e.type ? (jt = !1,
        preventEvent(e)) : "click" == e.type && (jt || (cancelEvent(e),
        jt = !0))
    }
    function Va(e) {
        "touchstart" == e.type ? At = !0 : "touchmove" == e.type ? (At = !0,
        preventEvent(e)) : (At = e.touches && e.length,
        Mt = !At)
    }
    function Ga() {
        if (h = "undefined" != typeof document.ontouchmove,
        g = !1,
        h) {
            var t = geByClass1("zpv_header", e)
              , a = geByClass1("zpv_bottom_body", e);
            addEvent(t, "touchstart touchmove touchend touchcancel", Va),
            addEvent(a, "touchstart touchmove touchend touchcancel", Va),
            addEvent(e, "touchstart touchmove click", Wa),
            addEvent(e, "touchstart", ya),
            addEvent(e, "touchmove", ba),
            addEvent(e, "touchend touchcancel", wa),
            g ? (addEvent(e, "gesturestart", Ca),
            addEvent(e, "gesturechange", ka),
            addEvent(e, "gestureend", xa)) : (addEvent(e, "touchstart", V),
            addEvent(e, "touchmove", G),
            addEvent(e, "touchend touchcancel", $),
            addEvent(e, "gesturestart gesturechange gestureend", cancelEvent))
        } else
            addEvent(e, "mousedown", ya),
            addEvent(e, "mousemove", ba),
            addEvent(window, "mouseup", wa),
            addEvent(window, "mousewheel", K),
            addEvent(window, "keydown", Ha)
    }
    function $a() {
        if (h) {
            var t = geByClass1("zpv_header", e)
              , a = geByClass1("zpv_bottom_body", e);
            removeEvent(t, "touchstart touchmove touchend touchcancel", Va),
            removeEvent(a, "touchstart touchmove touchend touchcancel", Va),
            removeEvent(e, "touchstart touchmove click", Wa),
            removeEvent(e, "touchstart", ya),
            removeEvent(e, "touchmove", ba),
            removeEvent(e, "touchend touchcancel", wa),
            g ? (removeEvent(e, "gesturestart", Ca),
            removeEvent(e, "gesturechange", ka),
            removeEvent(e, "gestureend", xa)) : (removeEvent(e, "touchstart", V),
            removeEvent(e, "touchmove", G),
            removeEvent(e, "touchend touchcancel", $),
            removeEvent(e, "gesturestart gesturechange gestureend", cancelEvent))
        } else
            removeEvent(e, "mousedown", ya),
            removeEvent(e, "mousemove", ba),
            removeEvent(window, "mouseup", wa),
            removeEvent(window, "mousewheel", K),
            removeEvent(window, "keydown", Ha)
    }
    var Ka = !1
      , Qa = {}
      , Ja = !1
      , Za = !1
      , en = !1
      , tn = !1
      , an = !1;
    function nn(e, t, a, n) {
        var o = t ? t : len(e);
        if ((!e || a) && (Ka = null ),
        Ka || (Ka = new Array(o)),
        Ka.length != o) {
            var i = Ka;
            Ka = new Array(o),
            extend(Ka, i)
        }
        extend(Ka, e);
        var r = on(en.id);
        -1 == r && (r = Ja),
        n || pn(r)
    }
    function on(e) {
        for (var t in Ka)
            if (Ka[t].id == e)
                return +t;
        return -1
    }
    function rn(e) {
        return e >= Ka.length ? !1 : 0 > e ? !1 : Ka[e] || {
            src: !0
        }
    }
    function sn(e, t) {
        if (C) {
            var a = Ka[0];
            if (a.loaded = t,
            t) {
                var n = E(e)
                  , o = Ft();
                n.width > n.height ? setStyle(e, {
                    height: o.height
                }) : setStyle(e, {
                    width: o.width
                }),
                setStyle(e, {
                    minWidth: 0,
                    maxWidth: "none"
                })
            }
            _n(!0)
        }
        show(e),
        d === e && Ea(t, !t)
    }
    function ln(e) {
        if (Qa[e])
            cn(e);
        else {
            var t = new Image;
            t.src = e,
            t.onload = function() {
                clog("loaded", e),
                Qa[e] = !0,
                cn(e),
                t = null 
            }
        }
    }
    function cn(e) {
        each([d, p, v], function() {
            var t = this
              , a = attr(t, "data-src")
              , n = gpeByClass("zpv_thumb_item", t);
            a == e && (clog("set", e),
            t.src = a,
            sn(t, !0),
            removeClass("zpv_ti_loading", n),
            attr(t, "data-src", !1))
        })
    }
    function un(e, t, a) {
        var n = gpeByClass("zpv_thumb_item", e);
        t ? t !== !0 ? e.src == t ? sn(e, !0) : Qa[t] ? (e.src = t,
        sn(e, !0)) : (a ? (e.src = a,
        sn(e, !1)) : hide(e),
        attr(e, "data-src", t),
        ln(t),
        addClass("zpv_ti_loading", n)) : (a ? (e.src = a,
        sn(e, !1)) : hide(e),
        addClass("zpv_ti_loading", n)) : hide(e)
    }
    function dn() {
        if (y) {
            ea(),
            Sa(ct);
            var e = Et !== !1 ? Et : Ja
              , t = rn(e);
            if (t && t.src !== !0) {
                var a = "";
                each(t.tags, function(e, t) {
                    if (!e || 0 == e)
                        return !0;
                    var n = A(t)
                      , o = n.coords
                      , i = n.href ? ' data-href="' + n.href + '" data-name="' + escapeAttr(n.name) + '"' : ""
                      , r = n.al ? (n.href ? " al" + n.al : "") + " " + n.al : "";
                    a += '<div class="zpv_tag' + r + '" style="left: ' + o.x + "%; top: " + o.y + "%; width: " + o.w + "%; height: " + o.h + '%;" data-id="' + e + '"' + i + '><div class="fill"></div><div class="zpv_tl_wrap" id="zpv_tl_wrap"><div class="zpv_tl' + (n.href ? "" : " zpv_tl_plain") + '">' + htsc(n.name) + "</div></div></div>"
                }),
                val(f, a),
                val(r, '<div class="zpv_photo_desc">' + (t.caption || "") + '</div><div class="zpv_bottom_bg"></div>'),
                toggle(r, !!t.caption);
                var n = "";
                if (b)
                    n = "";
                else {
                    var i = ""
                      , l = ""
                      , c = ""
                      , u = t.tags && t.tags[0] || 0
                      , i = '<td class="row_table_column" width="33%"><a href="' + t.like_url + '" class="item_button item_like' + (t.likes_me ? " item_likes_me" : "") + '" onclick="return photoview.likePhoto(this, \'' + t.id + '\');"><i class="i_icon i_like"></i>' + (t.likes_cnt ? '<b class="v_value v_like">' + formatNum(t.likes_cnt) + "</b>" : "") + "</a></td>"
                      , l = '<td class="row_table_column" width="33%"><a href="' + t.photo_url + '#comments" class="item_button item_replies al_photo" onclick="return photoview.openPhoto(this, event, true);"><i class="i_icon i_replies"></i>' + (t.replies_cnt ? '<b class="v_value v_replies">' + t.replies_cnt + "</b>" : "") + "</a></td>"
                      , c = '<td class="row_table_last_column" width="33%"><a href="' + t.photo_url + '" class="item_button item_tags al_photo" onclick="return photoview.openPhoto(this, event);"><i class="i_icon i_tags"></i>' + (u ? '<b class="v_value v_tags">' + u + "</b>" : "") + "</a></td>";
                    n = "<tr>" + i + l + c + "</tr>"
                }
                val(s, n),
                show(o)
            } else
                hide(o)
        }
    }
    function pn(e) {
        y && (Ja = Math.max(0, Math.min(e || 0, Ka.length)),
        en = rn(Ja),
        an = rn(Ja - 1),
        tn = rn(Ja + 1),
        un(d, en.src, "/images/blank.gif"),
        un(v, tn.src),
        un(p, an.src),
        dn(),
        photoview.onUpdate && photoview.onUpdate())
    }
    function vn() {
        if (y && w && Ka) {
            if (upload_data = Ka[0],
            !upload_data.loaded && upload_data.progress) {
                var e = geByClass1("zpvu_progress", "zpv_center");
                setStyle(e, {
                    width: 100 * upload_data.progress + "%",
                    visibility: "visible"
                })
            }
            if (!upload_data.read && upload_data.thumb) {
                upload_data.read = !0;
                var t = geByClass1("zpv_upload_box", "zpv_center")
                  , a = geByClass1("zpv_upload_img", t);
                setStyle(a, {
                    backgroundImage: "url(" + upload_data.thumb + ")"
                }),
                removeClass("zpv_thumb_uploading", t)
            }
        }
    }
    function fn() {
        if (y && w) {
            val("zpv_summary", lang.mobile_zphoto_upload_header),
            removeClass("zpv_mode_[a-z]+", e, !0),
            addClass("zpv_mode_upload", e);
            var t = '<div class="zpva zpv_upload_box zpv_thumb_uploading"><div class="zpv_upload_img"></div><div class="zpvu_progress_wrap"><div class="zpvu_progress"></div></div></div>';
            remove(d),
            val("zpv_center", t);
            var a = '<tr><td class="row_table_column" width="50%"><a class="item_button item_disabled" onclick="return false;"><i class="i_icon i_save"></i><span class="v_value">' + lang.mobile_zphoto_save_btn + '</span></a></td><td class="row_table_last_column" width="50%"><a class="item_button" onclick="return photoview.cancelPhoto(this);"><i class="i_icon i_cancel"></i><span class="v_value">' + lang.mobile_zphoto_cancel_btn + "</span></a></td></tr>";
            val(s, a),
            show(o),
            vn()
        }
    }
    function _n(t) {
        if (y && C && Ka) {
            crop_data = Ka[0];
            var a = !!crop_data.saving;
            if (toggleClass("item_disabled", "zpv_save_button", a || !crop_data.loaded),
            toggleClass("item_disabled", "zpv_cancel_button", a),
            toggleClass("zpv_crop_saving", e, a),
            m = a,
            t || un(d, crop_data.src, "/images/blank.gif"),
            crop_data.loaded && crop_data.rect && !crop_data.rect_inited) {
                crop_data.rect_inited = !0;
                var n = Ft()
                  , o = crop_data.rect[0]
                  , i = crop_data.rect[1]
                  , r = crop_data.rect[2]
                  , s = {};
                s.currentScale = 1 / r,
                Lt(s),
                da(),
                ga(),
                s = {};
                var l = d.width * ct
                  , c = d.height * ct
                  , u = o * l
                  , p = i * c;
                s.curX = (l - n.width) / 2 - u,
                s.curY = (c - n.height) / 2 - p,
                Lt(s),
                ga(),
                D(0)
            }
        }
    }
    function hn() {
        if (y && C) {
            val("zpv_summary", lang.mobile_zphoto_owner_crop_header),
            removeClass("zpv_mode_[a-z]+", e, !0),
            addClass("zpv_mode_crop", e),
            Sa(ct),
            d.parentNode || (val("zpv_center", ""),
            append(d, "zpv_center"));
            var t = '<tr><td class="row_table_column" width="50%"><a class="item_button" id="zpv_save_button" onclick="return photoview.savePhoto(this);"><i class="i_icon i_save"></i><span class="v_value">' + lang.mobile_zphoto_save_btn + '</span></a></td><td class="row_table_last_column" width="50%"><a class="item_button" id="zpv_cancel_button" onclick="return photoview.cancelPhoto(this);"><i class="i_icon i_cancel"></i><span class="v_value">' + lang.mobile_zphoto_cancel_btn + "</span></a></td></tr>";
            val(s, t),
            show(o),
            _n()
        }
    }
    function gn() {
        y || (Rt(),
        x(),
        Ga(),
        y = !0,
        reflow(e),
        scrollTop() || scrollTop(0))
    }
    function mn() {
        y && ($a(),
        S(),
        y = !1,
        Ka = null )
    }
    return {
        likePhoto: Xa,
        openPhoto: Ya,
        closePhoto: Ua,
        savePhoto: Oa,
        cancelPhoto: Ia,
        onClose: null ,
        onUpdate: null ,
        onPhotoChange: null ,
        saveSource: nn,
        opened: function() {
            return y
        },
        openCrop: function(e, t) {
            t = t || {};
            var a = !y;
            w ? w = !1 : gn(),
            C = !0,
            m = !1,
            Ka = [e],
            a && (zlayer.open(),
            zlayer.onResize = Ra),
            hn()
        },
        updateCrop: function(e) {
            return Ka ? (e = extend(Ka[0] || {}, e),
            Ka = [e],
            void _n()) : !1
        },
        openUpload: function(e, t) {
            t = t || {},
            gn(),
            w = !0,
            m = !0,
            Ka = [e],
            zlayer.open(),
            zlayer.onResize = Ra,
            fn()
        },
        updateUpload: function(e) {
            return Ka ? (e = extend(Ka[0] || {}, e),
            Ka = [e],
            void vn()) : !1
        },
        open: function(e, t, a) {
            a = a || {},
            gn(),
            b = a.local || !1,
            t && nn(t, !1, !1, !0),
            pn(e),
            Za = 0,
            zlayer.open(),
            zlayer.onResize = Ra,
            Ta()
        },
        close: function() {
            photoview.onClose && photoview.onClose({
                local: b
            }) || zlayer.close()
        }
    }
}();
window.Informer = {
    close: function(e) {
        hide(e)
    }
},
function() {
    onDOMReady(e),
    onBodyResize(e);
    function e() {
        if (geByClass1("tabs_block_hideable")) {
            var e = geByClass1("tabs_block");
            geByClass1("tabs_list").offsetHeight > geByClass1("tabs_list_more").offsetHeight ? removeClass("tabs_block_without_show_more", e) : addClass("tabs_block_without_show_more", e)
        }
    }
    function t(e) {
        var t = gpeByClass("tabs_block", e);
        hasClass("tabs_block_opened", t) ? clearCookie("remixm_tabs_expanded") : setCookie("remixm_tabs_expanded", 1),
        toggleClass("tabs_block_opened", t)
    }
    window.Tabs = {
        actualizeShowMoreVisibility: e,
        toggle: t
    }
}();
/*266*/