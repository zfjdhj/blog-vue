!function (e, n) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n(e) : n(e)
}("undefined" != typeof window ? window : this, function (e) {
    "use strict";

    function n(n) {
        var t = new RegExp("(^|&)" + n + "=([^&]*)(&|$)"), i = e.location.search.substr(1).match(t);
        return null != i ? unescape(i[2]) : null
    }

    var t = null, i = null, a = 5,
        u = ["openScheme", "closeBrowser", "setTitle", "setShareContent", "alert", "setBackHandler", "jumpToScheme", "getUserInfo", "updateUserInfo", "confirm", "showShareWindow", "setNavigationStyle", "alipay", "wechatpay"],
        l = function (e) {
            return {
                timeout: null, running: !1, tasks: [], push: function (e, n) {
                    var t = n || function (e) {
                    };
                    o.tasks.push({data: e, callback: t}), setTimeout(function () {
                        o.process()
                    }, 0)
                }, dequeue: function () {
                    i && i()
                }, process: function () {
                    if (o.tasks.length && !o.running) {
                        var n = o.tasks.shift();
                        o.running = !0, i = function () {
                            o.running = !1, n.callback(n.data), o.process()
                        }, t = n.data, e(n.data, i)
                    }
                }
            }
        }, o = l(function (e) {
            r._doSendMessage(e.method, e.args, e.callback, e.handle)
        }), s = 1, c = a, r = {
            _callbacks: {}, _dequeueTimeout: null, isSupport: function (t) {
                n("platform"), n("build");
                return !!e.biliapp[t]
            }, dequeue: function () {
                var e = this;
                setTimeout(function () {
                    clearTimeout(e._dequeueTimeout), e._dequeueTimeout = null, o.dequeue()
                }, 0)
            }, ready: function (n) {
                var t = this;
                e.biliapp ? n && n() : setTimeout(function () {
                    return c--, 0 === c ? void (n && n()) : void t.ready(n)
                }, 100)
            }, _sendMessage: function (e, n) {
                var t = this;
                o.push({
                    method: e,
                    args: n,
                    callback: n ? n.success : null,
                    handle: n ? n.handle : null
                }), this._dequeueTimeout = setTimeout(function () {
                    t.dequeue()
                }, 1e3)
            }, _doSendMessage: function (n, t, i, a) {
                if (e.biliapp) {
                    if (!t) return void (e.biliapp[n] && e.biliapp[n]());
                    if ("object" != typeof t) return void (e.biliapp[n] && e.biliapp[n](t));
                    var u = i && "function" == typeof i, l = a && "function" == typeof a, o = u ? s++ : 0;
                    u && (this._callbacks[o] = i, t.callbackId = o), l && (this._callbacks[o] = a, t.handle = o), e.biliapp[n] && e.biliapp[n](JSON.stringify(t))
                } else this._mock(n, t)
            }, _mock: function (n, t) {
                "alert" == n ? alert(t.message) : "openScheme" == n && e.open(t.url, "_blank")
            }, callback: function (n) {
                return function (t, i) {
                    if (t && this._callbacks.hasOwnProperty(t)) {
                        var a = this._callbacks[t];
                        a && a.call(this, i), this._callbacks[t] = null, delete this._callbacks[t]
                    } else "function" == typeof n && n.apply(e._biliapp, arguments)
                }
            }(e._biliapp && e._biliapp.callback)
        };
    return u.forEach(function (e) {
        r[e] || (r[e] = function (n) {
            r._sendMessage(e, n)
        })
    }), e._biliapp = r, e.BiliApp = r, r
});