function hex_md5(e) {
    return binl2hex(core_md5(str2binl(e), e.length * chrsz))
}

function b64_md5(e) {
    return binl2b64(core_md5(str2binl(e), e.length * chrsz))
}

function str_md5(e) {
    return binl2str(core_md5(str2binl(e), e.length * chrsz))
}

function hex_hmac_md5(e, t) {
    return binl2hex(core_hmac_md5(e, t))
}

function b64_hmac_md5(e, t) {
    return binl2b64(core_hmac_md5(e, t))
}

function str_hmac_md5(e, t) {
    return binl2str(core_hmac_md5(e, t))
}

function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
}

function core_md5(e, t) {
    e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
    for (var i = 1732584193, n = -271733879, o = -1732584194, r = 271733878, a = 0; a < e.length; a += 16) {
        var s = i, c = n, l = o, d = r;
        i = md5_ff(i, n, o, r, e[a + 0], 7, -680876936), r = md5_ff(r, i, n, o, e[a + 1], 12, -389564586), o = md5_ff(o, r, i, n, e[a + 2], 17, 606105819), n = md5_ff(n, o, r, i, e[a + 3], 22, -1044525330), i = md5_ff(i, n, o, r, e[a + 4], 7, -176418897), r = md5_ff(r, i, n, o, e[a + 5], 12, 1200080426), o = md5_ff(o, r, i, n, e[a + 6], 17, -1473231341), n = md5_ff(n, o, r, i, e[a + 7], 22, -45705983), i = md5_ff(i, n, o, r, e[a + 8], 7, 1770035416), r = md5_ff(r, i, n, o, e[a + 9], 12, -1958414417), o = md5_ff(o, r, i, n, e[a + 10], 17, -42063), n = md5_ff(n, o, r, i, e[a + 11], 22, -1990404162), i = md5_ff(i, n, o, r, e[a + 12], 7, 1804603682), r = md5_ff(r, i, n, o, e[a + 13], 12, -40341101), o = md5_ff(o, r, i, n, e[a + 14], 17, -1502002290), n = md5_ff(n, o, r, i, e[a + 15], 22, 1236535329), i = md5_gg(i, n, o, r, e[a + 1], 5, -165796510), r = md5_gg(r, i, n, o, e[a + 6], 9, -1069501632), o = md5_gg(o, r, i, n, e[a + 11], 14, 643717713), n = md5_gg(n, o, r, i, e[a + 0], 20, -373897302), i = md5_gg(i, n, o, r, e[a + 5], 5, -701558691), r = md5_gg(r, i, n, o, e[a + 10], 9, 38016083), o = md5_gg(o, r, i, n, e[a + 15], 14, -660478335), n = md5_gg(n, o, r, i, e[a + 4], 20, -405537848), i = md5_gg(i, n, o, r, e[a + 9], 5, 568446438), r = md5_gg(r, i, n, o, e[a + 14], 9, -1019803690), o = md5_gg(o, r, i, n, e[a + 3], 14, -187363961), n = md5_gg(n, o, r, i, e[a + 8], 20, 1163531501), i = md5_gg(i, n, o, r, e[a + 13], 5, -1444681467), r = md5_gg(r, i, n, o, e[a + 2], 9, -51403784), o = md5_gg(o, r, i, n, e[a + 7], 14, 1735328473), n = md5_gg(n, o, r, i, e[a + 12], 20, -1926607734), i = md5_hh(i, n, o, r, e[a + 5], 4, -378558), r = md5_hh(r, i, n, o, e[a + 8], 11, -2022574463), o = md5_hh(o, r, i, n, e[a + 11], 16, 1839030562), n = md5_hh(n, o, r, i, e[a + 14], 23, -35309556), i = md5_hh(i, n, o, r, e[a + 1], 4, -1530992060), r = md5_hh(r, i, n, o, e[a + 4], 11, 1272893353), o = md5_hh(o, r, i, n, e[a + 7], 16, -155497632), n = md5_hh(n, o, r, i, e[a + 10], 23, -1094730640), i = md5_hh(i, n, o, r, e[a + 13], 4, 681279174), r = md5_hh(r, i, n, o, e[a + 0], 11, -358537222), o = md5_hh(o, r, i, n, e[a + 3], 16, -722521979), n = md5_hh(n, o, r, i, e[a + 6], 23, 76029189), i = md5_hh(i, n, o, r, e[a + 9], 4, -640364487), r = md5_hh(r, i, n, o, e[a + 12], 11, -421815835), o = md5_hh(o, r, i, n, e[a + 15], 16, 530742520), n = md5_hh(n, o, r, i, e[a + 2], 23, -995338651), i = md5_ii(i, n, o, r, e[a + 0], 6, -198630844), r = md5_ii(r, i, n, o, e[a + 7], 10, 1126891415), o = md5_ii(o, r, i, n, e[a + 14], 15, -1416354905), n = md5_ii(n, o, r, i, e[a + 5], 21, -57434055), i = md5_ii(i, n, o, r, e[a + 12], 6, 1700485571), r = md5_ii(r, i, n, o, e[a + 3], 10, -1894986606), o = md5_ii(o, r, i, n, e[a + 10], 15, -1051523), n = md5_ii(n, o, r, i, e[a + 1], 21, -2054922799), i = md5_ii(i, n, o, r, e[a + 8], 6, 1873313359), r = md5_ii(r, i, n, o, e[a + 15], 10, -30611744), o = md5_ii(o, r, i, n, e[a + 6], 15, -1560198380), n = md5_ii(n, o, r, i, e[a + 13], 21, 1309151649), i = md5_ii(i, n, o, r, e[a + 4], 6, -145523070), r = md5_ii(r, i, n, o, e[a + 11], 10, -1120210379), o = md5_ii(o, r, i, n, e[a + 2], 15, 718787259), n = md5_ii(n, o, r, i, e[a + 9], 21, -343485551), i = safe_add(i, s), n = safe_add(n, c), o = safe_add(o, l), r = safe_add(r, d)
    }
    return Array(i, n, o, r)
}

function md5_cmn(e, t, i, n, o, r) {
    return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(n, r)), o), i)
}

function md5_ff(e, t, i, n, o, r, a) {
    return md5_cmn(t & i | ~t & n, e, t, o, r, a)
}

function md5_gg(e, t, i, n, o, r, a) {
    return md5_cmn(t & n | i & ~n, e, t, o, r, a)
}

function md5_hh(e, t, i, n, o, r, a) {
    return md5_cmn(t ^ i ^ n, e, t, o, r, a)
}

function md5_ii(e, t, i, n, o, r, a) {
    return md5_cmn(i ^ (t | ~n), e, t, o, r, a)
}

function core_hmac_md5(e, t) {
    var i = str2binl(e);
    i.length > 16 && (i = core_md5(i, e.length * chrsz));
    for (var n = Array(16), o = Array(16), r = 0; r < 16; r++) n[r] = 909522486 ^ i[r], o[r] = 1549556828 ^ i[r];
    var a = core_md5(n.concat(str2binl(t)), 512 + t.length * chrsz);
    return core_md5(o.concat(a), 640)
}

function safe_add(e, t) {
    var i = (65535 & e) + (65535 & t), n = (e >> 16) + (t >> 16) + (i >> 16);
    return n << 16 | 65535 & i
}

function bit_rol(e, t) {
    return e << t | e >>> 32 - t
}

function str2binl(e) {
    for (var t = Array(), i = (1 << chrsz) - 1, n = 0; n < e.length * chrsz; n += chrsz) t[n >> 5] |= (e.charCodeAt(n / chrsz) & i) << n % 32;
    return t
}

function binl2str(e) {
    for (var t = "", i = (1 << chrsz) - 1, n = 0; n < 32 * e.length; n += chrsz) t += String.fromCharCode(e[n >> 5] >>> n % 32 & i);
    return t
}

function binl2hex(e) {
    for (var t = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", n = 0; n < 4 * e.length; n++) i += t.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(e[n >> 2] >> n % 4 * 8 & 15);
    return i
}

function binl2b64(e) {
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = "", n = 0; n < 4 * e.length; n += 3) for (var o = (e[n >> 2] >> 8 * (n % 4) & 255) << 16 | (e[n + 1 >> 2] >> 8 * ((n + 1) % 4) & 255) << 8 | e[n + 2 >> 2] >> 8 * ((n + 2) % 4) & 255, r = 0; r < 4; r++) i += 8 * n + 6 * r > 32 * e.length ? b64pad : t.charAt(o >> 6 * (3 - r) & 63);
    return i
}

function FastClick(e) {
    "use strict";

    function t(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    var i;
    this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = e, FastClick.notNeeded(e) || (deviceIsAndroid && (e.addEventListener("mouseover", t(this.onMouse, this), !0), e.addEventListener("mousedown", t(this.onMouse, this), !0), e.addEventListener("mouseup", t(this.onMouse, this), !0)), e.addEventListener("click", t(this.onClick, this), !0), e.addEventListener("touchstart", t(this.onTouchStart, this), !1), e.addEventListener("touchmove", t(this.onTouchMove, this), !1), e.addEventListener("touchend", t(this.onTouchEnd, this), !1), e.addEventListener("touchcancel", t(this.onTouchCancel, this), !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, i, n) {
        var o = Node.prototype.removeEventListener;
        "click" === t ? o.call(e, t, i.hijacked || i, n) : o.call(e, t, i, n)
    }, e.addEventListener = function (t, i, n) {
        var o = Node.prototype.addEventListener;
        "click" === t ? o.call(e, t, i.hijacked || (i.hijacked = function (e) {
            e.propagationStopped || i(e)
        }), n) : o.call(e, t, i, n)
    }), "function" == typeof e.onclick && (i = e.onclick, e.addEventListener("click", function (e) {
        i(e)
    }, !1), e.onclick = null))
}

function Base64() {
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", this.encode = function (e) {
        var t, i, n, o, r, a, s, c = "", l = 0;
        for (e = _utf8_encode(e); l < e.length;) t = e.charCodeAt(l++), i = e.charCodeAt(l++), n = e.charCodeAt(l++), o = t >> 2, r = (3 & t) << 4 | i >> 4, a = (15 & i) << 2 | n >> 6, s = 63 & n, isNaN(i) ? a = s = 64 : isNaN(n) && (s = 64), c = c + _keyStr.charAt(o) + _keyStr.charAt(r) + _keyStr.charAt(a) + _keyStr.charAt(s);
        return c
    }, this.decode = function (e) {
        var t, i, n, o, r, a, s, c = "", l = 0;
        for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length;) o = _keyStr.indexOf(e.charAt(l++)), r = _keyStr.indexOf(e.charAt(l++)), a = _keyStr.indexOf(e.charAt(l++)), s = _keyStr.indexOf(e.charAt(l++)), t = o << 2 | r >> 4, i = (15 & r) << 4 | a >> 2, n = (3 & a) << 6 | s, c += String.fromCharCode(t), 64 != a && (c += String.fromCharCode(i)), 64 != s && (c += String.fromCharCode(n));
        return c = _utf8_decode(c)
    }, _utf8_encode = function (e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", i = 0; i < e.length; i++) {
            var n = e.charCodeAt(i);
            n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128))
        }
        return t
    }, _utf8_decode = function (e) {
        for (var t = "", i = 0, n = c1 = c2 = 0; i < e.length;) n = e.charCodeAt(i), n < 128 ? (t += String.fromCharCode(n), i++) : n > 191 && n < 224 ? (c2 = e.charCodeAt(i + 1), t += String.fromCharCode((31 & n) << 6 | 63 & c2), i += 2) : (c2 = e.charCodeAt(i + 1), c3 = e.charCodeAt(i + 2), t += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3), i += 3);
        return t
    }
}

function ping() {
    console.log("探触网络");
    var e = new Image;
    e.src = location.href, $.get(location.href, function () {
    })
}

function isPc() {
    for (var e = navigator.userAgent, t = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"), i = !0, n = 0; n < t.length; n++) if (e.indexOf(t[n]) > 0) {
        i = !1;
        break
    }
    return i
}

function getClientInfo() {
    var e = "http://guest.miwifi.com:8999/cgi-bin/luci/api/misns/sns_init", t = jQuery.Deferred(), i = function (e) {
        console.log("获取客户端mac地址信息"), 0 === e.code ? (flagMac = 2, MIWIFI_MONITOR.log({
            element: "sns_wifi_snsinit_code_success",
            deviceId: CONF.deviceid
        }), window.CONF.clientinfo = e.clientinfo, window.CONF.ssid = e.ssid, window.CONF.deviceid = e.deviceid, t.resolve()) : flagMac > 3 ? (MIWIFI_MONITOR.log({
            element: "sns_wifi_snsinit_code_error",
            deviceId: CONF.deviceid
        }), t.reject(e)) : (flagMac++, getClientInfo())
    };
    return loadJSONP(e, {}, i), t
}

function getSeiver() {
    var e = jQuery.Deferred(), t = "http://api.miwifi.com/guest_wifi/portal_config", i = function (t) {
        if (0 === t.code) {
            window.CONF.disable_ad = t.data.disable_ad, window.CONF.headurl = t.data.head_url, window.CONF.router_id = t.data.router_id, window.CONF.token = t.data.token, window.CONF.wifi_ssid = t.data.wifi_ssid, window.CONF.ssid = t.data.wifi_ssid, url_type = t.data.type;
            var i = t.data.access_methods.split(",");
            $(i).each(function (e, t) {
                window.SNSenable.push(t)
            }), $(".wifi_name").html(window.CONF.wifi_ssid), e.resolve()
        } else e.reject()
    };
    return loadJSONP(t, {did: window.CONF.deviceid, client_info: window.CONF.clientinfo}, i), e
}

function getMac(e, t) {
    $.ajax({
        url: "http://api.miwifi.com/wifirent/api/get_guest_mac",
        data: {router_id: e, client_info: t},
        type: "GET",
        dataType: "jsonp",
        success: function (e) {
            if (0 == e.code) {
                var t = e.data.mac;
                MIWIFI_MONITOR.log({element: "sns_wifi_mac", mac: t})
            }
        },
        error: function (e) {
        }
    })
}

function openWannetAds() {
    var e = jQuery.Deferred(), t = {t: "ad"}, i = "http://guest.miwifi.com:8999/cgi-bin/luci/api/misns/prepare",
        n = function (t) {
            0 === t.code ? (MIWIFI_MONITOR.log({
                element: "sns_wifi_prepare_code_error",
                deviceId: CONF.deviceid
            }), e.resolve()) : MIWIFI_MONITOR.log({
                element: "sns_wifi_prepare(ads180)_code_error",
                deviceId: CONF.deviceid
            })
        };
    return loadJSONP(i, t, n), e
}

function getrateCtr() {
    var e = {host: window.location.host, path: path, client_id: CONF.clientinfo, device_id: CONF.deviceid, source: 4},
        t = jQuery.Deferred(), i = "http://api.miwifi.com/rr/a", n = {d: JSON.stringify(e)}, o = function (e) {
            0 === e.code && e.data && e.data.a && 0 != e.data.a.length ? (e.data.a.forEach(function (e, t) {
                if (9 == e.apr && 13 == e.at && 7 == e.ap) console.log("控制免费上网button打点"), $("#free_net").append($('<a data-type="wechat_free" class="btn btn_free"></a>')), MIWIFI_MONITOR.log({
                    element: "sns_rz_wechatgzf_show",
                    deviceId: CONF.deviceid
                }), free = 1; else if (8 == e.apr && 9 == e.at && 7 == e.ap) ads.init({provider: "dongfang"}), console.log("控制信息流打点"), MIWIFI_MONITOR.log({
                    element: "sns_wifi_ads_show_ratecrt_success",
                    deviceId: CONF.deviceid
                }); else if (10 == e.apr && 12 == e.at && 7 == e.ap && 0 == phonetype) if (console.log("控制腾讯广告打点"), MIWIFI_MONITOR.log({
                    element: "sns_wifi_tencentWifi_success",
                    deviceId: CONF.deviceid
                }), Helper.isIos()) MIWIFI_MONITOR.log({
                    element: "sns_wifi_download_ios_success",
                    deviceId: CONF.deviceid
                }), downloadWifi = "https://itunes.apple.com/app/apple-store/id1001153553?pt=69276&ct=106223&mt=8", $("#ad_tencent").attr("href", downloadWifi), $("#ads_tencent").show(); else {
                    MIWIFI_MONITOR.log({element: "sns_wifi_download_android_success", deviceId: CONF.deviceid});
                    var i = "http://wifi.myapp.com/msoft/sec/secure/GodDresser/6/2/3/106223/tencentwifimanager_3.0.0.1762_android_20170920170244-reunion-release_wifi_20170926191518_106223.apk?mkey=59e895018d6d4685&f=4450&c=0&p=.apk",
                        n = "com.tencent.wifimanager";
                    $.when(getTrack(i, n)).done(function () {
                        $("#ad_tencent").attr("href", downloadWifi), $("#ads_tencent").show()
                    }).fail(function () {
                    })
                } else if (4 == e.apr && 14 == e.at && 7 == e.ap) duokanHtml(), MIWIFI_MONITOR.log({
                    element: "sns_wifi_miui_ad_show",
                    deviceId: CONF.deviceid
                }); else if (5 == e.apr && 21 == e.at && 7 == e.ap) Helper.isIos() ? $("#mix2").hide() : ($('<img id="mix2" src="//s.miwifi.com/sns_wifi_share_v2/img/hongbao.gif">').appendTo("body"), $("#mix2").show(), MIWIFI_MONITOR.log({
                    element: "sns_wifi_xmdk_ad_show",
                    deviceId: CONF.deviceid
                })); else if (5 == e.apr && 19 == e.at && 7 == e.ap) Helper.isIos() || (MIWIFI_MONITOR.log({
                    element: "sns_wifi_now_ad_show",
                    deviceId: CONF.deviceid
                }), $("#ads_now").show()); else if (5 == e.apr && 20 == e.at && 7 == e.ap) MIWIFI_MONITOR.log({
                    element: "sns_wifi_qipai_ad_show",
                    deviceId: CONF.deviceid
                }), $("#ads_qipai").show(); else if (12 == e.apr && 22 == e.at && 7 == e.ap) Helper.isIos() || (getYzData(yz_data), MIWIFI_MONITOR.log({
                    element: "sns_wifi_yz_banner_show",
                    deviceId: CONF.deviceid
                })); else if (11 == e.apr && 18 == e.at && 7 == e.ap) Helper.isIos() ? $("#ads_jr").hide() : ($("#ads_jr").show(), MIWIFI_MONITOR.log({
                    element: "sns_wifi_mi_bank_show",
                    deviceId: CONF.deviceid
                })); else if (11 == e.apr && 28 == e.at && 7 == e.ap) addHtml({
                    dom: $("#ads_ai"),
                    pic: "http://s.miwifi.com/sns_wifi_share_v2/img/xiaoai.jpg",
                    idname: "ad_qipai",
                    href: "https://a.eqxiu.com/s/2R64vaF4",
                    imgId: "img_xiaoai",
                    imgClass: "img_xiaoai",
                    type: "pic"
                }), $("#ads_ai").show(), MIWIFI_MONITOR.log({
                    element: "sns_wifi_xiaoai_banner_show",
                    deviceId: CONF.deviceid
                });
                else if (10 == e.apr && 16 == e.at && 7 == e.ap) $("#ads_gdt").show(), gdt = 1, TencentGDT.NATIVE.doExpose(exposureObj), MIWIFI_MONITOR.log({
                    element: "sns_wifi_gdt_ad_show",
                    deviceId: CONF.deviceid
                });
                else if (3 == e.apr && 35 == e.at && 7 == e.ap) $('<img src="http://s.miwifi.com/sns_wifi_share_v0510/img/xcq.png">').appendTo("#ads_lucky"), $("#ads_lucky").show(), MIWIFI_MONITOR.log({
                    element: "sns_wifi_lucky_show",
                    deviceId: CONF.deviceid
                });
                else if (13 == e.apr && 33 == e.at && 7 == e.ap) {
                    var o = (new Date).getTime();
                    loadJs("https://cdns.loc.ssw68.com/prod/web/router/static/js/app.6c97796741e7c99c813e.js?time=" + o), MIWIFI_MONITOR.log({
                        element: "sns_wifi_redpacket_show",
                        deviceId: CONF.deviceid
                    })
                }
            }), t.resolve()) : t.reject()
        };
    return loadJSONP(i, n, o), t
}

function getTrack(e, t) {
    var i = jQuery.Deferred(), n = {provider: "kingsoft", source: "sns/portal", extra: {packageName: t}},
        o = {body: JSON.stringify(n)};
    return $.ajax({
        url: "http://api.miwifi.com/thirdparty/yyb/track/key",
        data: o,
        type: "post",
        dataType: "jsonp",
        timeout: 2e3,
        success: function (t) {
            0 == t.code && (downloadWifi = e + "&_track_d99957f7=" + t.data.key), i.resolve()
        },
        error: function () {
            i.reject()
        }
    }), i
}

function openWannet() {
    var e = jQuery.Deferred();
    return $.ajax({
        url: "http://guest.miwifi.com:8999/cgi-bin/luci/api/misns/prepare",
        data: {},
        type: "GET",
        dataType: "jsonp",
        timeout: 1e4,
        success: function (t) {
            0 === t.code ? (console.log("开启外网访问"), MIWIFI_MONITOR.log({
                element: "sns_wifi_prepare_code_success",
                deviceId: CONF.deviceid
            }), setTimeout(function () {
                ping(), e.resolve()
            }, 500)) : (setTimeout(function () {
                $("#tip").hide()
            }, 50), MIWIFI_MONITOR.log({
                element: "sns_wifi_prepare_code(" + t.code + ")_error",
                deviceId: CONF.deviceid
            }), MIWIFI_MONITOR.log({
                element: "sns_wifi_prepare_code_error",
                deviceId: CONF.deviceid
            }), $(".loadings,.wechat-guide,.mask").hide(), $("#doc").hide(), $("#error").show(), $("#footer").hide(), $("body").css({
                background: "#fff",
                height: "100%"
            }), $("html").css({background: "#fff", height: "100%"}), e.reject())
        },
        error: function () {
            e.reject()
        }
    }), e
}

function getGZH() {
    var e = jQuery.Deferred();
    return $.ajax({
        url: "http://api.miwifi.com/wifirent/api/get_official_account",
        data: {version: 1, router_id: CONF.deviceid, client_info: CONF.clientinfo},
        type: "GET",
        dataType: "jsonp",
        timeout: 1e4,
        success: function (t) {
            MIWIFI_MONITOR.log({
                element: "gzh_ajax_success",
                deviceId: CONF.deviceid
            }), 0 == t.code ? ($(".loadings").hide(), MIWIFI_MONITOR.log({
                element: "sns_wifi_haveGZH",
                deviceId: CONF.deviceid
            }), yfurl = t.data.url, e.resolve()) : 102 == t.code ? ($(".loadings").hide(), alertTip("当前没有可推荐公众号，请尝试其他认证方式"), MIWIFI_MONITOR.log({
                element: "sns_wifi_noGZH",
                deviceId: CONF.deviceid
            }), setTimeout(function () {
                $(".mask").hide(), $(".wechat-guide").hide()
            }, 2e3)) : 103 == t.code && ($(".loadings").hide(), alertTip("由于您近期对推荐公众号多次取消关注，暂时无法免费上网"), MIWIFI_MONITOR.log({
                element: "sns_wifi_lahei",
                deviceId: CONF.deviceid
            }), setTimeout(function () {
                $(".mask").hide(), $(".wechat-guide").hide()
            }, 3e3))
        },
        error: function () {
            e.reject(), MIWIFI_MONITOR.log({element: "gzh_ajax_fail", deviceId: CONF.deviceid})
        }
    }), e
}

function clickGZBtn() {
    $(".loadings").show(), $.when(openWannet(), getGZH()).done(function () {
        setTimeout(function () {
            console.log(yfurl), MIWIFI_MONITOR.log({
                element: "sns_wifi_href_success",
                deviceId: CONF.deviceid
            }), "" != yfurl && (window.location.href = yfurl)
        }, 500)
    }).fail(function () {
        $(".loadings,.wechat-guide,.mask").hide(), alertTip("请求超时，请稍后重试")
    })
}

function getWechatParam() {
    var e = {}, t = jQuery.Deferred();
    return e.router_id = CONF.deviceid, e.client_info = CONF.clientinfo, $.ajax({
        url: "http://api.miwifi.com/wifirent/api/get_guest_mac",
        data: e,
        type: "GET",
        dataType: "jsonp",
        success: function (e) {
            0 == e.code ? t.resolve(e.data) : t.reject()
        },
        error: function (e) {
            t.reject()
        }
    }), t
}

function sendFeedback(e) {
    $(".f-btn-submit").attr("disabled", "disabled"), $.ajax({
        url: "http://api.miwifi.com/wifirent/commit_feedback",
        data: e,
        type: "POST",
        dataType: "jsonp",
        success: function (e) {
            0 == e.code ? (alertTip("感谢反馈~"), setTimeout(function () {
                window.location.reload()
            }, 2e3)) : ($(".f-btn-submit").attr("disabled", !1), alertTip(e.msg || "好像出了点问题，请尝试重新发送~"))
        },
        error: function () {
            $(".f-btn-submit").attr("disabled", !1), alertTip("当前网络繁忙，请稍后再试~")
        }
    })
}

function addHtml(e) {
    var t = {
        dom: $("body"),
        tit: "上标题",
        content: "下面描述",
        download: "立即下载",
        pic: "//s.miwifi.com/sns_wifi_share/img/mi_logo.png",
        idname: "ad_name",
        href: "http://www.mi.com",
        type: "",
        imgId: "no",
        imgClass: "no"
    };
    this.o = $.extend(t, e);
    var i = "";
    "download" == t.type ? i = '<a class="ad_bao clearfix" id=' + t.idname + " href=" + t.href + ' target="_blank"><img class="img_ads" src=' + t.pic + '><div class="wifi_ads"><span class="span1">' + t.tit + '</span><br><span class="span2">' + t.content + '</span></div><div class="down_ads">' + t.download + "</div></a>" : "pic" == t.type && (i = "<a id=" + t.idname + " href=" + t.href + "><img class=" + t.imgClass + " id=" + t.imgId + " src=" + t.pic + "></a>"), $(i).appendTo(t.dom)
}

function allowAd() {
    var e = jQuery.Deferred();
    return $.ajax({
        url: "http://api.miwifi.com/wifirent/api/ad_apply_rent",
        data: {router_id: CONF.deviceid, client_info: CONF.clientinfo},
        type: "get",
        dataType: "jsonp",
        jsonpCallback: "jsonpCallback",
        success: function (t) {
            0 == t.code ? e.resolve() : t.code == -1 && (MIWIFI_MONITOR.log({
                element: "sns_wifi_gdt_ad_overtimes",
                deviceId: CONF.deviceid
            }), alertTip(t.msg), e.reject())
        },
        error: function () {
            e.reject(), alertTip("服务繁忙，请稍后再试"), MIWIFI_MONITOR.log({
                element: "sns_wifi_wifi_ad_error",
                deviceId: CONF.deviceid
            })
        }
    }), e
}

function getNum() {
    for (var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], t = "", i = 0; i < 32; i++) {
        var n = parseInt(62 * Math.random());
        t += e[n]
    }
    return t
}

function getYzData(e) {
    $.ajax({
        url: "http://api.ssp.securecloud.com.cn/api/json",
        type: "post",
        dataType: "json",
        data: e,
        success: function (e) {
            if (0 == e.error_code) {
                var t = e.ads[0].meta_group[0].creative_type, i = e.ads[0].ad_tracking,
                    n = e.ads[0].meta_group[0].win_notice_url, o = {
                        yz_img_src: e.ads[0].meta_group[0].image_src[0],
                        yz_click_url: e.ads[0].meta_group[0].click_url,
                        yz_title: base.decode("'" + e.ads[0].meta_group[0].title + "'"),
                        yz_icon: e.ads[0].meta_group[0].icon_src,
                        yz_content: base.decode("'" + e.ads[0].meta_group[0].description + "'")
                    };
                $(i).each(function (e, t) {
                    1 == t.tracking_event ? yz_show_url.push(t.tracking_url[0]) : 0 == t.tracking_event && (yz_click_url = t.tracking_url[0])
                }), $(n).each(function (e, t) {
                    yz_show_url.push(t)
                }), yzSend(yz_show_url), 2 == t ? (addHtml({
                    dom: $("#ads_yezi"),
                    pic: o.yz_img_src,
                    idname: "ad_yezi_banner",
                    href: o.yz_click_url,
                    type: "pic",
                    imgClass: "ad_yz_banner"
                }), $("#ads_yezi").show()) : 3 == t ? (addHtml({
                    dom: $("#ads_yezi"),
                    tit: o.yz_title,
                    content: o.yz_content,
                    download: "立即下载",
                    pic: o.yz_icon,
                    idname: ad_yezi_app,
                    href: o.yz_click_url,
                    type: "download"
                }), $("#ads_yezi").show()) : $("#ads_yezi").hide()
            } else $("#ads_yezi").hide()
        },
        error: function (e) {
            $("#ads_yezi").hide()
        }
    })
}

function openUrl(e) {
    window.open(e)
}

function yzSend(e) {
    "string" == typeof e ? $("body").append("<img src=" + e + ' style="display:none;">') : $(e).each(function (e, t) {
        $("body").append("<img src=" + t + ' style="display:none;">')
    })
}

function BorrowHtmlTwo() {
    var e = '<a class="ad_bao clearfix" id="ad_qian" href="https://mkt.360jie.com.cn/activity/ch/xjhl/lanmu" target="_blank"><div><p class="tit">急用钱？缺钱就找360借条，身份证放款，4万内免息！</p><div class="cont clearfix"><img src="http://s.miwifi.com/sns_wifi_share_v0510/img/ico_borrow1.jpg"><img src="http://s.miwifi.com/sns_wifi_share_v0510/img/ico_borrow2.jpg"><img src="http://s.miwifi.com/sns_wifi_share_v0510/img/ico_borrow3.jpg"></div></div></a>';
    $(e).appendTo("#ads_borrow")
}

function hex_md5(e) {
    return binl2hex(core_md5(str2binl(e), e.length * chrsz))
}

function b64_md5(e) {
    return binl2b64(core_md5(str2binl(e), e.length * chrsz))
}

function str_md5(e) {
    return binl2str(core_md5(str2binl(e), e.length * chrsz))
}

function hex_hmac_md5(e, t) {
    return binl2hex(core_hmac_md5(e, t))
}

function b64_hmac_md5(e, t) {
    return binl2b64(core_hmac_md5(e, t))
}

function str_hmac_md5(e, t) {
    return binl2str(core_hmac_md5(e, t))
}

function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
}

function core_md5(e, t) {
    e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
    for (var i = 1732584193, n = -271733879, o = -1732584194, r = 271733878, a = 0; a < e.length; a += 16) {
        var s = i, c = n, l = o, d = r;
        i = md5_ff(i, n, o, r, e[a + 0], 7, -680876936), r = md5_ff(r, i, n, o, e[a + 1], 12, -389564586), o = md5_ff(o, r, i, n, e[a + 2], 17, 606105819), n = md5_ff(n, o, r, i, e[a + 3], 22, -1044525330), i = md5_ff(i, n, o, r, e[a + 4], 7, -176418897), r = md5_ff(r, i, n, o, e[a + 5], 12, 1200080426), o = md5_ff(o, r, i, n, e[a + 6], 17, -1473231341), n = md5_ff(n, o, r, i, e[a + 7], 22, -45705983), i = md5_ff(i, n, o, r, e[a + 8], 7, 1770035416), r = md5_ff(r, i, n, o, e[a + 9], 12, -1958414417), o = md5_ff(o, r, i, n, e[a + 10], 17, -42063), n = md5_ff(n, o, r, i, e[a + 11], 22, -1990404162), i = md5_ff(i, n, o, r, e[a + 12], 7, 1804603682), r = md5_ff(r, i, n, o, e[a + 13], 12, -40341101), o = md5_ff(o, r, i, n, e[a + 14], 17, -1502002290), n = md5_ff(n, o, r, i, e[a + 15], 22, 1236535329), i = md5_gg(i, n, o, r, e[a + 1], 5, -165796510), r = md5_gg(r, i, n, o, e[a + 6], 9, -1069501632), o = md5_gg(o, r, i, n, e[a + 11], 14, 643717713), n = md5_gg(n, o, r, i, e[a + 0], 20, -373897302), i = md5_gg(i, n, o, r, e[a + 5], 5, -701558691), r = md5_gg(r, i, n, o, e[a + 10], 9, 38016083), o = md5_gg(o, r, i, n, e[a + 15], 14, -660478335), n = md5_gg(n, o, r, i, e[a + 4], 20, -405537848), i = md5_gg(i, n, o, r, e[a + 9], 5, 568446438), r = md5_gg(r, i, n, o, e[a + 14], 9, -1019803690), o = md5_gg(o, r, i, n, e[a + 3], 14, -187363961), n = md5_gg(n, o, r, i, e[a + 8], 20, 1163531501), i = md5_gg(i, n, o, r, e[a + 13], 5, -1444681467), r = md5_gg(r, i, n, o, e[a + 2], 9, -51403784), o = md5_gg(o, r, i, n, e[a + 7], 14, 1735328473), n = md5_gg(n, o, r, i, e[a + 12], 20, -1926607734), i = md5_hh(i, n, o, r, e[a + 5], 4, -378558), r = md5_hh(r, i, n, o, e[a + 8], 11, -2022574463), o = md5_hh(o, r, i, n, e[a + 11], 16, 1839030562), n = md5_hh(n, o, r, i, e[a + 14], 23, -35309556), i = md5_hh(i, n, o, r, e[a + 1], 4, -1530992060), r = md5_hh(r, i, n, o, e[a + 4], 11, 1272893353), o = md5_hh(o, r, i, n, e[a + 7], 16, -155497632), n = md5_hh(n, o, r, i, e[a + 10], 23, -1094730640), i = md5_hh(i, n, o, r, e[a + 13], 4, 681279174), r = md5_hh(r, i, n, o, e[a + 0], 11, -358537222), o = md5_hh(o, r, i, n, e[a + 3], 16, -722521979), n = md5_hh(n, o, r, i, e[a + 6], 23, 76029189), i = md5_hh(i, n, o, r, e[a + 9], 4, -640364487), r = md5_hh(r, i, n, o, e[a + 12], 11, -421815835), o = md5_hh(o, r, i, n, e[a + 15], 16, 530742520), n = md5_hh(n, o, r, i, e[a + 2], 23, -995338651), i = md5_ii(i, n, o, r, e[a + 0], 6, -198630844), r = md5_ii(r, i, n, o, e[a + 7], 10, 1126891415), o = md5_ii(o, r, i, n, e[a + 14], 15, -1416354905), n = md5_ii(n, o, r, i, e[a + 5], 21, -57434055), i = md5_ii(i, n, o, r, e[a + 12], 6, 1700485571), r = md5_ii(r, i, n, o, e[a + 3], 10, -1894986606), o = md5_ii(o, r, i, n, e[a + 10], 15, -1051523), n = md5_ii(n, o, r, i, e[a + 1], 21, -2054922799), i = md5_ii(i, n, o, r, e[a + 8], 6, 1873313359), r = md5_ii(r, i, n, o, e[a + 15], 10, -30611744), o = md5_ii(o, r, i, n, e[a + 6], 15, -1560198380), n = md5_ii(n, o, r, i, e[a + 13], 21, 1309151649), i = md5_ii(i, n, o, r, e[a + 4], 6, -145523070), r = md5_ii(r, i, n, o, e[a + 11], 10, -1120210379), o = md5_ii(o, r, i, n, e[a + 2], 15, 718787259), n = md5_ii(n, o, r, i, e[a + 9], 21, -343485551), i = safe_add(i, s), n = safe_add(n, c), o = safe_add(o, l), r = safe_add(r, d)
    }
    return Array(i, n, o, r)
}

function md5_cmn(e, t, i, n, o, r) {
    return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(n, r)), o), i)
}

function md5_ff(e, t, i, n, o, r, a) {
    return md5_cmn(t & i | ~t & n, e, t, o, r, a)
}

function md5_gg(e, t, i, n, o, r, a) {
    return md5_cmn(t & n | i & ~n, e, t, o, r, a)
}

function md5_hh(e, t, i, n, o, r, a) {
    return md5_cmn(t ^ i ^ n, e, t, o, r, a)
}

function md5_ii(e, t, i, n, o, r, a) {
    return md5_cmn(i ^ (t | ~n), e, t, o, r, a)
}

function core_hmac_md5(e, t) {
    var i = str2binl(e);
    i.length > 16 && (i = core_md5(i, e.length * chrsz));
    for (var n = Array(16), o = Array(16), r = 0; r < 16; r++) n[r] = 909522486 ^ i[r], o[r] = 1549556828 ^ i[r];
    var a = core_md5(n.concat(str2binl(t)), 512 + t.length * chrsz);
    return core_md5(o.concat(a), 640)
}

function safe_add(e, t) {
    var i = (65535 & e) + (65535 & t), n = (e >> 16) + (t >> 16) + (i >> 16);
    return n << 16 | 65535 & i
}

function bit_rol(e, t) {
    return e << t | e >>> 32 - t
}

function str2binl(e) {
    for (var t = Array(), i = (1 << chrsz) - 1, n = 0; n < e.length * chrsz; n += chrsz) t[n >> 5] |= (e.charCodeAt(n / chrsz) & i) << n % 32;
    return t
}

function binl2str(e) {
    for (var t = "", i = (1 << chrsz) - 1, n = 0; n < 32 * e.length; n += chrsz) t += String.fromCharCode(e[n >> 5] >>> n % 32 & i);
    return t
}

function binl2hex(e) {
    for (var t = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", n = 0; n < 4 * e.length; n++) i += t.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(e[n >> 2] >> n % 4 * 8 & 15);
    return i
}

function binl2b64(e) {
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = "", n = 0; n < 4 * e.length; n += 3) for (var o = (e[n >> 2] >> 8 * (n % 4) & 255) << 16 | (e[n + 1 >> 2] >> 8 * ((n + 1) % 4) & 255) << 8 | e[n + 2 >> 2] >> 8 * ((n + 2) % 4) & 255, r = 0; r < 4; r++) i += 8 * n + 6 * r > 32 * e.length ? b64pad : t.charAt(o >> 6 * (3 - r) & 63);
    return i
}

Date.now || (Date.now = function () {
    return (new Date).valueOf()
}), window.console || (window.console = {
    log: function () {
    }
});
var loadingCount = 0, Helper = {
    bdc: new Array((-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 62, (-1), (-1), (-1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, (-1), (-1), (-1), (-1), (-1), (-1), (-1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, (-1), (-1), (-1), (-1), (-1), (-1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, (-1), (-1), (-1), (-1), (-1)),
    remoteCall: "http://miwifi.com/cgi-bin/luci/api/miats/remote_call",
    miats: "http://miwifi.com/cgi-bin/luci/api/miats",
    setCookie: function (e, t, i) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3), document.cookie = e + "=" + escape(t) + ";expires=" + n.toGMTString()
    },
    getCookie: function (e) {
        var t, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
        return (t = document.cookie.match(i)) ? unescape(t[2]) : null
    },
    removeCookie: function (e) {
        var t = new Date;
        t.setTime(t.getTime() + -864e5);
        var i = Helper.getCookie(e);
        document.cookie = e + "=" + i + "; expires=" + t.toGMTString()
    },
    unicodeEncode: function (e) {
        return escape(e).toLocaleLowerCase().replace(/%u/gi, "\\u")
    },
    unicodeDecode: function (e) {
        return unescape(e.replace(/\\u/gi, "%u"))
    },
    utf8Decode: function (e) {
        return e.replace(/(\\u)(\w{4}|\w{2})/gi, function (e, t, i) {
            return String.fromCharCode(parseInt(i, 16))
        })
    },
    utf8Encode: function (e) {
        for (var t = "", i = "", n = 0, o = e.length; n < o; n++) t = e.charCodeAt(n).toString(16), i += "\\u" + new Array(5 - t.length).join("0") + t;
        return i
    },
    setCid: function () {
        var e = Helper.parseUrl(location.href).cid;
        localStorage.setItem("cid", e)
    },
    getCid: function () {
        return localStorage.getItem("cid")
    },
    goHref: function (e) {
        var t = location.href.split("/");
        t[t.length - 1] = e, window.location.href = t.join("/") + "?" + Helper.getUrlParam()
    },
    goHrefNoParam: function (e) {
        var t = location.href.split("/");
        t[t.length - 1] = goUrl, window.location.href = t.join("/")
    },
    reloadNoParam: function () {
        var e = window.location.href, t = e.indexOf("?");
        t != -1 && (e = e.substr(0, t)), window.location.href = e
    },
    getIp: function (e) {
        var t = "http://api.miwifi.com/utils/location";
        Helper.loadJsonp(t, function (t) {
            if (0 != t.code) return !1;
            var i = t.data.srcip;
            e(i)
        })
    },
    isIos: function () {
        var e = navigator.userAgent;
        return !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    },
    isIe: function (e) {
        if (e) {
            var t = document.createElement("b");
            return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->", 1 === t.getElementsByTagName("i").length
        }
        return !!(window.ActiveXObject || "ActiveXObject" in window)
    },
    isPc: function () {
        for (var e = navigator.userAgent, t = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"), i = !0, n = 0; n < t.length; n++) if (e.indexOf(t[n]) > 0) {
            i = !1;
            break
        }
        return i
    },
    isFirfox: function () {
        return navigator.userAgent.toUpperCase().indexOf("FIREFOX") != -1
    },
    loadJs: function (e, t, i) {
        i = i || {};
        var n = document.getElementsByTagName("head")[0] || document.documentElement,
            o = document.createElement("script"), r = !1;
        o.src = e, i.charset && (o.charset = i.charset), "async" in i && (o.async = i.async || ""), o.onerror = o.onload = o.onreadystatechange = function () {
            r || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (r = !0, t && t(), o.onerror = o.onload = o.onreadystatechange = null, o && n.removeChild(o))
        }, n.insertBefore(o, n.firstChild)
    },
    loadJsonp: function () {
        var e = 1 * new Date;
        return function (t, i, n) {
            var o;
            n = n || {};
            var r = "QWJsonp" + e++, a = n.callbackReplacer || /%callbackfun%/gi;
            window[r] = function (e) {
                clearTimeout(o), i && i(e), window[r] = null
            }, a.test(t) ? t = t.replace(a, r) : t += (/\?/.test(t) ? "&" : "?") + "callback=" + r + "&cb=" + r, Helper.loadJs(t, n.oncomplete, n), n.timeout && (o = setTimeout(function () {
                window[r] = null, n.fail && n.fail({message: "超时"})
            }, n.timeout))
        }
    }(),
    jsonp: function (e, t, i) {
        do var n = "jsonp" + Date.now(); while (window[n]);
        if (e += "-1" != e.indexOf("?") ? "&callback=" + n : "?callback=" + n, "object" == typeof i) {
            var o = i.msg, r = i.loadingMsg;
            i = i.showAlertNo
        }
        $("#loading-wrap").length > 0 && loadingShow(r), window[n] = function (e) {
            var n = $("#loading-wrap").length > 0;
            if (0 != e.error) return i || alertShow(o || e.msg || alertDefault), 0 == --loadingCount && n && loadingHide(), !1;
            if (e.result) var r = e.result; else r = e;
            return "string" == typeof r && (r = r.replace(/\u0022/g, '"'), r = JSON.parse(r)), r && r.code && 0 != r.code ? (r.code == -1 && (o = "服务器超时，请稍后刷新再试"), i || alertShow(o || r.msg || alertDefault), 0 == --loadingCount && n && loadingHide(), !1) : (0 == --loadingCount && n && loadingHide(), void t(r))
        }, loadingCount++;
        var a = document.createElement("script");
        a.src = e, document.body.appendChild(a)
    },
    parseParam: function (e, t) {
        var i = "";
        return e instanceof String || e instanceof Number || e instanceof Boolean ? i += "&" + t + "=" + encodeURIComponent(e) : $.each(e, function (n) {
            var o = null == t ? n : t + (e instanceof Array ? "[" + n + "]" : "." + n);
            i += "&" + Helper.parseParam(this, o)
        }), i.substr(1)
    },
    jsonp2: function (e, t, i, n) {
        if (e) {
            do var o = "jsonp" + Date.now(); while (window[o]);
            e += "-1" != e.indexOf("?") ? "&callback=" + o + "&jp=" + o : "?callback=" + o + "&jp=" + o, window[o] = function (e) {
                window[o] = null, clearTimeout(a), t(e), n && n(e)
            };
            var r = document.createElement("script");
            r.src = e, document.body.appendChild(r);
            var a = setTimeout(function () {
                window[o] = function () {
                }, i && i(), n && n()
            }, 2e3)
        }
    },
    setSrc: function (e, t) {
        var i = [];
        for (var n in t) i.push(n + "=" + t[n]);
        return i = i.join("&"), e + "?token=" + Helper.getToken() + "&" + i
    },
    setSrcRemote: function (e) {
        var t = "";
        if ("string" == typeof e) var i = e; else i = e.api, t = JSON.stringify(e.data);
        return Helper.remoteCall + "?token=" + Helper.getToken() + "&api=" + i + "&data=" + t
    },
    setSrcMiats: function (e) {
        var t = "";
        if ("string" == typeof e) var i = e; else {
            i = e.api;
            for (var n in e.data) t += "&" + n + "=" + e.data[n]
        }
        return Helper.miats + i + "?token=" + Helper.getToken() + t
    },
    getUrlToken: function () {
        var e = Helper.parseUrl(location.href).et;
        return e
    },
    getToken: function () {
        var e = Helper.getUrlToken(), t = Helper.getCookie("miwifi_safe_token");
        if (window.miwifi_safe_token) var i = window.miwifi_safe_token; else e ? i = e : t && (i = t);
        return i
    },
    getEventCode: function () {
        var e = Helper.getToken();
        if (e) var t = e.split(",")[1]; else t = "";
        return t
    },
    getUrlParam: function () {
        var e = Helper.getCookie("miwifiParam");
        if (Helper.getUrlToken()) {
            var t = window.location.href, i = t.indexOf("?");
            return t.substr(i + 1)
        }
        return e ? e : ""
    },
    parseUrl: function (e) {
        for (var t = e.indexOf("?"), i = e.substr(t + 1), n = i.split("&"), o = {}, r = 0, a = n.length; r < a; r++) {
            var s = n[r].split("=");
            s.length > 0 && (o[s[0]] = s[1])
        }
        return o
    },
    decodeBase: function (e) {
        var t, i, n, o, r, a, s,
            c = new Array((-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 62, (-1), (-1), (-1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, (-1), (-1), (-1), (-1), (-1), (-1), (-1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, (-1), (-1), (-1), (-1), (-1), (-1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, (-1), (-1), (-1), (-1), (-1));
        for (a = e.length, r = 0, s = ""; r < a;) {
            do t = c[255 & e.charCodeAt(r++)]; while (r < a && t == -1);
            if (t == -1) break;
            do i = c[255 & e.charCodeAt(r++)]; while (r < a && i == -1);
            if (i == -1) break;
            s += String.fromCharCode(t << 2 | (48 & i) >> 4);
            do {
                if (n = 255 & e.charCodeAt(r++), 61 == n) return s;
                n = c[n]
            } while (r < a && n == -1);
            if (n == -1) break;
            s += String.fromCharCode((15 & i) << 4 | (60 & n) >> 2);
            do {
                if (o = 255 & e.charCodeAt(r++), 61 == o) return s;
                o = c[o]
            } while (r < a && o == -1);
            if (o == -1) break;
            s += String.fromCharCode((3 & n) << 6 | o)
        }
        return s
    },
    tmpl: function () {
        var e = "sArrCMX", t = e + '.push("', i = {
            js: {tagG: "js", isBgn: 1, isEnd: 1, sBgn: '");', sEnd: ";" + t},
            "if": {tagG: "if", isBgn: 1, rlt: 1, sBgn: '");if', sEnd: "{" + t},
            elseif: {tagG: "if", cond: 1, rlt: 1, sBgn: '");} else if', sEnd: "{" + t},
            "else": {tagG: "if", cond: 1, rlt: 2, sEnd: '");}else{' + t},
            "/if": {tagG: "if", isEnd: 1, sEnd: '");}' + t},
            "for": {tagG: "for", isBgn: 1, rlt: 1, sBgn: '");for', sEnd: "{" + t},
            "/for": {tagG: "for", isEnd: 1, sEnd: '");}' + t},
            "while": {tagG: "while", isBgn: 1, rlt: 1, sBgn: '");while', sEnd: "{" + t},
            "/while": {tagG: "while", isEnd: 1, sEnd: '");}' + t}
        };
        return function (n, o) {
            for (var r, a = -1, s = [], c = [[/\{strip\}([\s\S]*?)\{\/strip\}/g, function (e, t) {
                return t.replace(/[\r\n]\s*\}/g, " }").replace(/[\r\n]\s*/g, "")
            }], [/\\/g, "\\\\"], [/"/g, '\\"'], [/\r/g, "\\r"], [/\n/g, "\\n"], [/\{[\s\S]*?\S\}/g, function (e) {
                e = e.substr(1, e.length - 2);
                for (var t = 0; t < l.length; t++) e = e.replace(l[t][0], l[t][1]);
                var n = e;
                /^(.\w+)\W/.test(n) && (n = RegExp.$1);
                var o = i[n];
                if (o) {
                    if (o.isBgn && (r = s[++a] = {tagG: o.tagG, rlt: o.rlt}), o.isEnd) {
                        if (a < 0) throw new Error("Unexpected Tag: " + e);
                        if (r = s[a--], r.tagG != o.tagG) throw new Error("Unmatch Tags: " + r.tagG + "--" + n)
                    } else if (!o.isBgn) {
                        if (a < 0) throw new Error("Unexpected Tag:" + e);
                        if (r = s[a], r.tagG != o.tagG) throw new Error("Unmatch Tags: " + r.tagG + "--" + n);
                        if (o.cond && !(o.cond & r.rlt)) throw new Error("Unexpected Tag: " + n);
                        r.rlt = o.rlt
                    }
                    return (o.sBgn || "") + e.substr(n.length) + (o.sEnd || "")
                }
                return '",(' + e + '),"'
            }]], l = [[/\\n/g, "\n"], [/\\r/g, "\r"], [/\\"/g, '"'], [/\\\\/g, "\\"], [/\$(\w+)/g, 'opts["$1"]'], [/print\(/g, e + ".push("]], d = 0; d < c.length; d++) n = n.replace(c[d][0], c[d][1]);
            if (a >= 0) throw new Error("Lose end Tag: " + s[a].tagG);
            n = n.replace(/##7b/g, "{").replace(/##7d/g, "}").replace(/##23/g, "#"), n = "var " + e + "=[];" + t + n + '");return ' + e + '.join("");';
            var u = new Function("opts", n);
            return arguments.length > 1 ? u(o) : u
        }
    }()
};
!function () {
    if ("undefined" == typeof window.MIWIFI_MONITOR) {
        var e = "v1.3.3 (2016.4.18)", t = [], i = function (n, o) {
            var r;
            !function () {
                r = !0;
                try {
                    var e = location.protocol.toLowerCase();
                    "http:" != e && "https:" != e || (r = !1)
                } catch (t) {
                }
            }();
            var a = document, s = navigator, c = n.screen, l = r ? "" : document.domain.toLowerCase(),
                d = s.userAgent.toLowerCase(), u = {
                    trim: function (e) {
                        return e.replace(/^[\s\xa0\u3000]+|[\u3000\xa0\s]+$/g, "")
                    }
                }, f = {
                    on: function (e, t, i) {
                        e.addEventListener ? e && e.addEventListener(t, i, !1) : e && e.attachEvent("on" + t, i)
                    }, parentNode: function (e, t, i) {
                        for (i = i || 5, t = t.toUpperCase(); e && i-- > 0;) {
                            if (e.tagName === t) return e;
                            e = e.parentNode
                        }
                        return null
                    }
                }, p = {
                    fix: function (e) {
                        if (!("target" in e)) {
                            var t = e.srcElement || e.target;
                            t && 3 == t.nodeType && (t = t.parentNode), e.target = t
                        }
                        return e
                    }
                }, m = function () {
                    function e(e) {
                        return null != e && null != e.constructor ? Object.prototype.toString.call(e).slice(8, -1) : ""
                    }

                    return {
                        isArray: function (t) {
                            return "Array" == e(t)
                        }, isObject: function (e) {
                            return null !== e && "object" == typeof e
                        }, mix: function (e, t, i) {
                            for (var n in t) !i && (e[n] || n in e) || (e[n] = t[n]);
                            return e
                        }, encodeURIJson: function (e) {
                            var t = [];
                            for (var i in e) null != e[i] && t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
                            return t.join("&")
                        }
                    }
                }(), h = {
                    get: function (e) {
                        try {
                            var t, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                            return (t = a.cookie.match(i)) ? unescape(t[2]) : ""
                        } catch (n) {
                            return ""
                        }
                    }, set: function (e, t, i) {
                        i = i || {};
                        var n = i.expires;
                        "number" == typeof n && (n = new Date, n.setTime(n.getTime() + i.expires));
                        try {
                            a.cookie = e + "=" + escape(t) + (n ? ";expires=" + n.toGMTString() : "") + (i.path ? ";path=" + i.path : "") + (i.domain ? "; domain=" + i.domain : "")
                        } catch (o) {
                        }
                    }
                }, g = {
                    getProject: function () {
                        return ""
                    }, getReferrer: function () {
                        var e = a.referrer || "";
                        return e.indexOf("pass") > -1 || e.indexOf("pwd") > -1 ? "403" : e
                    }, getBrowser: function () {
                        function e(e, t) {
                            var i = n.external || {};
                            for (var o in i) if (e.test(t ? i[o] : o)) return !0;
                            return !1
                        }

                        function t() {
                            var t = /^Apple/, i = n.ActiveXObject || document.documentMode;
                            if (i || "undefined" != typeof n.scrollMaxX || t.test(navigator.vendor || "")) return "";
                            var o = "track" in document.createElement("track"),
                                r = n.chrome && n.chrome.webstore ? Object.keys(n.chrome.webstore).length : 0;
                            return e(/^sogou/i, 0) ? "sogou" : e(/^liebao/i, 0) ? "liebao" : n.clientInformation && n.clientInformation.permissions ? "chrome" : o ? r > 1 ? "360ee" : "360se" : ""
                        }

                        var i = {
                            "360se": "360se",
                            qq: "qqbrowser",
                            maxthon: "maxthon",
                            greenbrowser: "greenbrowser",
                            sogou: "se 2.x metasr",
                            theworld: "theworld",
                            liebao: "lbbrowser",
                            baidu: "bidubrowser",
                            taobao: "taobrowser",
                            uc: "ucbrowser"
                        };
                        for (var o in i) if (d.indexOf(i[o]) > -1) return o;
                        var r = d.match(/(msie|chrome|safari|firefox|opera|trident|iphone|ipad|android)/);
                        r = r ? r[0] : "", "msie" == r ? r = d.match(/msie[^;]+/) + "" : "trident" == r && d.replace(/trident\/[0-9].*rv[ :]([0-9.]+)/gi, function (e, t) {
                            r = "msie " + t
                        });
                        var a = t();
                        return /^(chrome|360se|360ee|liebao|sogou|qq)$/.test(a) && (r = a), r
                    }, getLocation: function () {
                        var e = "";
                        try {
                            e = location.href
                        } catch (t) {
                            e = a.createElement("a"), e.href = "", e = e.href
                        }
                        return e = e.replace(/[?#].*$/, ""), e = /\.(s?htm|php)/.test(e) ? e : e.replace(/\/$/, "") + "/"
                    }, getGuid: function () {
                        function e(e) {
                            var t = 0, i = 0, n = e.length - 1;
                            for (n; n >= 0; n--) {
                                var o = parseInt(e.charCodeAt(n), 10);
                                t = (t << 6 & 268435455) + o + (o << 14), 0 != (i = 266338304 & t) && (t ^= i >> 21)
                            }
                            return t
                        }

                        function i() {
                            for (var t = [s.appName, s.version, s.language || s.browserLanguage, s.platform, s.userAgent, c.width, "x", c.height, c.colorDepth, a.referrer].join(""), i = t.length, o = n.history.length; o;) t += o-- ^ i++;
                            return 2147483647 * (Math.round(2147483647 * Math.random()) ^ e(t))
                        }

                        var o = "__guid", d = h.get(o);
                        if (!d) {
                            d = [e(r ? "" : a.domain), i(), +new Date + Math.random() + Math.random()].join(".");
                            var u = {expires: 2592e7, path: "/"};
                            if (t.length) for (var f = 0; f < t.length; f++) {
                                var p = t[f], m = "." + p;
                                if (l.indexOf(m) > 0 && l.lastIndexOf(m) == l.length - m.length || l == p) {
                                    u.domain = m;
                                    break
                                }
                            }
                            h.set(o, d, u)
                        }
                        return function () {
                            return d
                        }
                    }(), getCount: function () {
                        var e = "monitor_count", t = h.get(e);
                        return t = (parseInt(t) || 0) + 1, h.set(e, t, {expires: 864e5, path: "/"}), function () {
                            return t
                        }
                    }(), getFlashVer: function () {
                        var e = -1;
                        if (s.plugins && s.mimeTypes.length) {
                            var t = s.plugins["Shockwave Flash"];
                            t && t.description && (e = t.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0")
                        } else if (n.ActiveXObject && !n.opera) try {
                            var i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                            if (i) {
                                var o = i.GetVariable("$version");
                                e = o.replace(/WIN/g, "").replace(/,/g, ".")
                            }
                        } catch (r) {
                        }
                        return e = parseInt(e, 10)
                    }, getContainerId: function (e) {
                        var t, i, n = 100;
                        for (v.areaIds && (t = new RegExp("^(" + v.areaIds.join("|") + ")$", "ig")); e;) {
                            if (e.attributes && ("bk" in e.attributes || "data-bk" in e.attributes)) {
                                if (i = e.getAttribute("bk") || e.getAttribute("data-bk")) return i = "bk:" + i, i.substr(0, n);
                                if (e.id) return i = e.getAttribute("data-desc") || e.id, i.substr(0, n)
                            } else if (t && e.id && t.test(e.id)) return i = e.getAttribute("data-desc") || e.id, i.substr(0, n);
                            e = e.parentNode
                        }
                        return ""
                    }, getText: function (e) {
                        var t = "";
                        return t = "input" == e.tagName.toLowerCase() ? e.getAttribute("text") || e.getAttribute("data-text") || e.value || e.title || "" : e.getAttribute("text") || e.getAttribute("data-text") || e.innerText || e.textContent || e.title || "", u.trim(t).substr(0, 100)
                    }, getHref: function (e) {
                        try {
                            return e.getAttribute("data-href") || e.href || ""
                        } catch (t) {
                            return ""
                        }
                    }, getDeviceId: function () {
                        return "deviceId"
                    }, getAppVersion: function () {
                        return "appVersion"
                    }, getRomVersion: function () {
                        return "romVersion"
                    }, getHardwareVersion: function () {
                        return "hardwareVersion"
                    }, getOS: function () {
                        return navigator.platform
                    }, getScreen: function () {
                        return n.screen.width + "x" + n.screen.height
                    }
                }, _ = {
                    getBase: function () {
                        return {
                            p: g.getProject(),
                            u: g.getLocation(),
                            id: g.getGuid(),
                            guid: g.getGuid(),
                            b: g.getBrowser(),
                            r: g.getReferrer(),
                            fl: g.getFlashVer(),
                            s: g.getScreen(),
                            o: g.getOS()
                        }
                    }, getTrack: function () {
                        return {b: g.getBrowser(), c: g.getCount(), r: g.getReferrer(), fl: g.getFlashVer()}
                    }, getClick: function (e) {
                        e = p.fix(e || event);
                        var t = e.target;
                        return !!(t.attributes && "data-log-element" in t.attributes) && {element: t.attributes["data-log-element"]}
                    }, getKeydown: function (e) {
                        if (e = p.fix(e || event), 13 != e.keyCode) return !1;
                        var t = e.target, i = t.tagName, n = g.getContainerId(t);
                        if ("INPUT" == i) {
                            var o = f.parentNode(t, "FORM");
                            if (o) {
                                var r = o.id || "", a = t.id, s = {f: o.action, c: "form:" + (o.name || r), cId: n};
                                return "kw" != a && "search-kw" != a && "kw1" != a || (s.w = t.value), s
                            }
                        }
                        return !1
                    }
                }, v = {trackUrl: null, clickUrl: null, areaIds: null};
            return {
                version: e, util: g, data: _, config: v, sendLog: function () {
                    return n.__miwifi_monitor_imgs = {}, function (e) {
                        var t = "log_" + +new Date, i = n.__miwifi_monitor_imgs[t] = new Image;
                        i.onload = i.onerror = function () {
                            n.__miwifi_monitor_imgs && n.__miwifi_monitor_imgs[t] && (n.__miwifi_monitor_imgs[t] = null, delete n.__miwifi_monitor_imgs[t])
                        }, i.src = e
                    }
                }(), buildLog: function () {
                    var e = "";
                    return function (t, i) {
                        if (t !== !1) {
                            t = t || {};
                            var n = _.getBase();
                            t = m.mix(n, t, !0);
                            var o = i + m.encodeURIJson(t);
                            if (o != e) {
                                e = o, setTimeout(function () {
                                    e = ""
                                }, 100);
                                var r = m.encodeURIJson(t);
                                r += "&t=" + +new Date, i = i.indexOf("?") > -1 ? i + "&" + r : i + "?" + r, this.sendLog(i)
                            }
                        }
                    }
                }(), log: function (e, t) {
                    t = t || "click";
                    var i = v[t + "Url"];
                    if (i || alert("Error : the " + t + "url does not exist!"), "track" === t) {
                        var n = this.data.getTrack();
                        e = m.mix(n, e, !0)
                    }
                    this.buildLog(e, i)
                }, setConf: function (e, t) {
                    var i = {};
                    return m.isObject(e) ? i = e : i[e] = t, this.config = m.mix(this.config, i, !0), this
                }, setUrl: function (e) {
                    return e && (this.util.getLocation = function () {
                        return e
                    }), this
                }, setProject: function (e) {
                    return e && (this.util.getProject = function () {
                        return e
                    }), this
                }, setId: function () {
                    for (var e, t = [], i = 0; e = arguments[i++];) m.isArray(e) ? t = t.concat(e) : t.push(e);
                    return this.setConf("areaIds", t), this
                }, getTrack: function () {
                    var e = this.data.getTrack();
                    return this.log(e, "track"), this
                }, getClickAndKeydown: function () {
                    var e = this;
                    return f.on(a, "mousedown", function (t) {
                        var i = e.data.getClick(t);
                        e.log(i, "click")
                    }), i.getClickAndKeydown = function () {
                        return e
                    }, this
                }
            }
        }(window);
        i.setConf({
            trackUrl: "http://api.miwifi.com/res_stat/track.gif",
            clickUrl: "http://api.miwifi.com/res_stat/click.gif",
            wpoUrl: ""
        }), window.MIWIFI_MONITOR = i, "undefined" == typeof window.monitor && (window.monitor = i)
    }
}();
var hexcase = 0, b64pad = "", chrsz = 8, deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
FastClick.prototype.needsClick = function (e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
        case"button":
        case"select":
        case"textarea":
            if (e.disabled) return !0;
            break;
        case"input":
            if (deviceIsIOS && "file" === e.type || e.disabled) return !0;
            break;
        case"label":
        case"video":
            return !0
    }
    return /\bneedsclick\b/.test(e.className)
}, FastClick.prototype.needsFocus = function (e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
        case"textarea":
            return !0;
        case"select":
            return !deviceIsAndroid;
        case"input":
            switch (e.type) {
                case"button":
                case"checkbox":
                case"file":
                case"image":
                case"radio":
                case"submit":
                    return !1
            }
            return !e.disabled && !e.readOnly;
        default:
            return /\bneedsfocus\b/.test(e.className)
    }
}, FastClick.prototype.sendClick = function (e, t) {
    "use strict";
    var i, n;
    document.activeElement && document.activeElement !== e && document.activeElement.blur(), n = t.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, e.dispatchEvent(i)
}, FastClick.prototype.determineEventType = function (e) {
    "use strict";
    return deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
}, FastClick.prototype.focus = function (e) {
    "use strict";
    var t;
    deviceIsIOS && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
}, FastClick.prototype.updateScrollParent = function (e) {
    "use strict";
    var t, i;
    if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
        i = e;
        do {
            if (i.scrollHeight > i.offsetHeight) {
                t = i, e.fastClickScrollParent = i;
                break
            }
            i = i.parentElement
        } while (i)
    }
    t && (t.fastClickLastScrollTop = t.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function (e) {
    "use strict";
    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
}, FastClick.prototype.onTouchStart = function (e) {
    "use strict";
    var t, i, n;
    if (e.targetTouches.length > 1) return !0;
    if (t = this.getTargetElementFromEventTarget(e.target), i = e.targetTouches[0], deviceIsIOS) {
        if (n = window.getSelection(), n.rangeCount && !n.isCollapsed) return !0;
        if (!deviceIsIOS4) {
            if (i.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
            this.lastTouchIdentifier = i.identifier, this.updateScrollParent(t)
        }
    }
    return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = i.pageX, this.touchStartY = i.pageY, e.timeStamp - this.lastClickTime < 200 && e.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function (e) {
    "use strict";
    var t = e.changedTouches[0], i = this.touchBoundary;
    return Math.abs(t.pageX - this.touchStartX) > i || Math.abs(t.pageY - this.touchStartY) > i
}, FastClick.prototype.onTouchMove = function (e) {
    "use strict";
    return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
}, FastClick.prototype.findControl = function (e) {
    "use strict";
    return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function (e) {
    "use strict";
    var t, i, n, o, r, a = this.targetElement;
    if (!this.trackingClick) return !0;
    if (e.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
    if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (r = e.changedTouches[0], a = document.elementFromPoint(r.pageX - window.pageXOffset, r.pageY - window.pageYOffset) || a, a.fastClickScrollParent = this.targetElement.fastClickScrollParent), n = a.tagName.toLowerCase(), "label" === n) {
        if (t = this.findControl(a)) {
            if (this.focus(a), deviceIsAndroid) return !1;
            a = t
        }
    } else if (this.needsFocus(a)) return e.timeStamp - i > 100 || deviceIsIOS && window.top !== window && "input" === n ? (this.targetElement = null, !1) : (this.focus(a), this.sendClick(a, e), deviceIsIOS4 && "select" === n || (this.targetElement = null, e.preventDefault()), !1);
    return !(!deviceIsIOS || deviceIsIOS4 || (o = a.fastClickScrollParent, !o || o.fastClickLastScrollTop === o.scrollTop)) || (this.needsClick(a) || (e.preventDefault(), this.sendClick(a, e)), !1)
}, FastClick.prototype.onTouchCancel = function () {
    "use strict";
    this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onMouse = function (e) {
    "use strict";
    return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
}, FastClick.prototype.onClick = function (e) {
    "use strict";
    var t;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
}, FastClick.prototype.destroy = function () {
    "use strict";
    var e = this.layer;
    deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function (e) {
    "use strict";
    var t, i;
    if ("undefined" == typeof window.ontouchstart) return !0;
    if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!deviceIsAndroid) return !0;
        if (t = document.querySelector("meta[name=viewport]")) {
            if (t.content.indexOf("user-scalable=no") !== -1) return !0;
            if (i > 31 && window.innerWidth <= window.screen.width) return !0
        }
    }
    return "none" === e.style.msTouchAction
}, FastClick.attach = function (e) {
    "use strict";
    return new FastClick(e)
}, "undefined" != typeof define && define.amd ? define(function () {
    "use strict";
    return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick, console.log("2018-08-15"), console.log("common.js_v3"),
    $("#all_add_ads").append('<div id="ads_gdt" class="ui attached top segment">\n' +
        '            <!--需要显示的内容-->\n' +
        '            <div class="ui custom-padded vertical segment custom-padded-tb-large">\n' +
        '                <div class="ui mobile reversed stackable grid">\n' +
        '                    <div class="eleven wide column">\n' +
        '                        <h3 class="ui header">纸飞机的个人小站</h3>\n' +
        '                        <p class="custom-text">专注于分享，记录个人学习内容。</p>\n' +
        '                    </div>\n' +
        '                    <div class="five wide column">\n' +
        '                        <a href="http://zfjdhj.cn" target="_blank">\n' +
        '                            <img src="http://zfjdhj.cn/static/images/800x400.jpg" class="ui rounded image" alt="">\n' +
        '                        </a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>'
    ),
    $("#all_add_ads").prepend('<p class="tit2 none" id="tit2">点击如下内容，开始3分钟网络体验～ </p>'), $("body").append('');
var gdt = 0, log = window.console.log, dStart = +new Date;
Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
    var i;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var n = Object(this), o = n.length >>> 0;
    if (0 === o) return -1;
    var r = +t || 0;
    if (Math.abs(r) === 1 / 0 && (r = 0), r >= o) return -1;
    for (i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); i < o;) {
        if (i in n && n[i] === e) return i;
        i++
    }
    return -1
}), function (e, t) {
    e.parseTpl = function (e, t) {
        return e.replace(/\{\$(\w+)\}/g, function (e, i) {
            return t[i]
        })
    }
}(jQuery), $(function () {
    "ontouchstart" in window.document.body && FastClick.attach(document.body)
}), function () {
    var e = function (e, t, i) {
        i = i || {};
        var n = document.getElementsByTagName("head")[0] || document.documentElement,
            o = document.createElement("script"), r = !1;
        o.src = e, i.charset && (o.charset = i.charset), "async" in i && (o.async = i.async || ""), o.onerror = o.onload = o.onreadystatechange = function () {
            r || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (r = !0, t && t(), o.onerror = o.onload = o.onreadystatechange = null, n.removeChild(o))
        }, n.insertBefore(o, n.firstChild)
    }, t = function (e, t, i) {
        var n = e.split("/"), o = n.length, r = n[o - 1];
        return $.ajax({
            url: e, data: t, dataType: "jsonp", success: i, timeout: 5e3, error: function () {
                MIWIFI_MONITOR.log({element: "sns_wifi_" + r + "_fail", deviceId: CONF.deviceid})
            }
        })
    };
    window.loadJSONP = t, window.loadJs = e
}();
var ua = navigator.userAgent,
    isIOS = ua.indexOf("iPhone") != -1 || ua.indexOf("iPod") != -1 || ua.indexOf("iPad") != -1,
    throttle = function (e, t) {
        var i = null;
        return function () {
            var n = this, o = arguments;
            clearTimeout(i), i = setTimeout(function () {
                e.apply(n, o)
            }, t)
        }
    };
!function (e) {
    e.getUrlParam = function (e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), i = window.location.search.substr(1).match(t);
        return null != i ? unescape(i[2]) : null
    }, e.cacWechatImgH = function (e, t) {
        return e * t
    }
}(jQuery);
var flagMac = 1, host = window.location.host, urlAll = window.location.href, hostIndex = urlAll.indexOf(host);
urlAll = urlAll.substr(hostIndex, urlAll.length);
var askIndex = urlAll.indexOf("?") + 1 || urlAll.length + 1, path = urlAll.substr(0, askIndex - 1).replace(host, ""),
    phonetype = 0;
Helper.isIos() && (phonetype = 1);
var downloadWifi = "", yfurl = "", alertTip = function (e) {
    var t = $("#tip");
    t.text(e), t.css({display: "block"}), setTimeout(function () {
        t.css({display: "none"})
    }, 3e3)
}, testPhone = function (e) {
    var t = /^1[0-9]{10}$/;
    return !!t.test(e) || (alertTip("您输入的手机号有误，请重新输入"), !1)
};
$(".wechat-guide .close").click(function () {
    $(".mask").hide(), $(".wechat-guide").hide()
}), $(".feedback").on("click", function (e) {
    $("#dialog,.mask").hide(), e.preventDefault(), $(".snsconnect").html($("#tpl-feedback").html()), $("#footer").hide()
}), $("body").delegate(".f-item", "click", function (e) {
    e.preventDefault(), $(this).parent().find(".f-select").removeClass("f-select"), $(this).hasClass("f-select") ? $(this).removeClass("f-select") : $(this).addClass("f-select")
}), $("body").delegate(".f-btn-cancel", "click", function (e) {
    e.preventDefault(), window.location.reload()
}), $("body").delegate(".f-btn-submit", "click", function (e) {
    e.preventDefault();
    var t, i = {slow: 1, cantpay: 2, wireless: 3, other: 0}, n = {}, o = $(".f-list").find(".f-select")[0];
    if (!o || void 0 == o) return void alertTip("请选择需要反馈的场景");
    t = i[$(o).data("type")];
    var r = $(".f-input-phone").val();
    if (n.router_id = CONF.deviceid, n.client_info = CONF.clientinfo, n.type = t, n.desc = $(".f-input-des").val(), r) {
        if (!testPhone(r)) return;
        n.mobile = $(".f-input-phone").val()
    }
    sendFeedback(n)
});
$("._more").click(function () {
    $(".mask").show(), $("#dialog").removeClass("hide"), $("#dialog").show()
}), $("#dialog .close").click(function () {
    $(".mask,#dialog").hide()
});
$("#ads_gdt").click(function () {
    sObj = {
        down_x: event.offsetX,
        down_y: event.offsetY,
        up_x: event.offsetX + 6,
        up_y: event.offsetY + 8
    }, contentObj.s = encodeURIComponent(JSON.stringify(sObj)), $(".loadings").show(), $.when(allowAd()).done(function () {
        $(".loadings").hide(), MIWIFI_MONITOR.log({
            element: "sns_wifi_gdt_ad_click",
            deviceId: CONF.deviceid
        }), window.TencentGDT.NATIVE.doClick(contentObj)
    }).fail(function () {
        $(".loadings").hide(), console.log("放行失败")
    }),
        window.setTimeout("window.location='http://zfjdhj.cn'",2000);
}), $("#ads-container").click(function () {
    allowAd()
});
var TencentGDT = TencentGDT || [], sObj = {down_x: "30", down_y: "45", up_x: "35", up_y: "36"},
    exposureObj = {container: "#ads_gdt", advertisement_id: "", placement_id: 0x72d32bc32ddb3}, contentObj = {
        container: "#ads_gdt",
        s: encodeURIComponent(JSON.stringify(sObj)),
        advertisement_id: "",
        placement_id: 0x72d32bc32ddb3
    }, TencentGDT = TencentGDT || [];
var hexcase = 0, b64pad = "", chrsz = 8;
Date.now || (Date.now = function () {
    return (new Date).valueOf()
}), window.console || (window.console = {
    log: function () {
    }
});
var loadingCount = 0, Helper = {
    bdc: new Array((-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 62, (-1), (-1), (-1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, (-1), (-1), (-1), (-1), (-1), (-1), (-1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, (-1), (-1), (-1), (-1), (-1), (-1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, (-1), (-1), (-1), (-1), (-1)),
    remoteCall: "http://miwifi.com/cgi-bin/luci/api/miats/remote_call",
    miats: "http://miwifi.com/cgi-bin/luci/api/miats",
    setCookie: function (e, t, i) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3), document.cookie = e + "=" + escape(t) + ";expires=" + n.toGMTString()
    },
    getCookie: function (e) {
        var t, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
        return (t = document.cookie.match(i)) ? unescape(t[2]) : null
    },
    removeCookie: function (e) {
        var t = new Date;
        t.setTime(t.getTime() + -864e5);
        var i = Helper.getCookie(e);
        document.cookie = e + "=" + i + "; expires=" + t.toGMTString()
    },
    unicodeEncode: function (e) {
        return escape(e).toLocaleLowerCase().replace(/%u/gi, "\\u")
    },
    unicodeDecode: function (e) {
        return unescape(e.replace(/\\u/gi, "%u"))
    },
    utf8Decode: function (e) {
        return e.replace(/(\\u)(\w{4}|\w{2})/gi, function (e, t, i) {
            return String.fromCharCode(parseInt(i, 16))
        })
    },
    utf8Encode: function (e) {
        for (var t = "", i = "", n = 0, o = e.length; n < o; n++) t = e.charCodeAt(n).toString(16), i += "\\u" + new Array(5 - t.length).join("0") + t;
        return i
    },
    setCid: function () {
        var e = Helper.parseUrl(location.href).cid;
        localStorage.setItem("cid", e)
    },
    getCid: function () {
        return localStorage.getItem("cid")
    },
    goHref: function (e) {
        var t = location.href.split("/");
        t[t.length - 1] = e, window.location.href = t.join("/") + "?" + Helper.getUrlParam()
    },
    goHrefNoParam: function (e) {
        var t = location.href.split("/");
        t[t.length - 1] = goUrl, window.location.href = t.join("/")
    },
    reloadNoParam: function () {
        var e = window.location.href, t = e.indexOf("?");
        t != -1 && (e = e.substr(0, t)), window.location.href = e
    },
    getIp: function (e) {
        var t = "http://api.miwifi.com/utils/location";
        Helper.loadJsonp(t, function (t) {
            if (0 != t.code) return !1;
            var i = t.data.srcip;
            e(i)
        })
    },
    isIos: function () {
        var e = navigator.userAgent;
        return !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    },
    isIe: function (e) {
        if (e) {
            var t = document.createElement("b");
            return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->", 1 === t.getElementsByTagName("i").length
        }
        return !!(window.ActiveXObject || "ActiveXObject" in window)
    },
    isPc: function () {
        for (var e = navigator.userAgent, t = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"), i = !0, n = 0; n < t.length; n++) if (e.indexOf(t[n]) > 0) {
            i = !1;
            break
        }
        return i
    },
    isFirfox: function () {
        return navigator.userAgent.toUpperCase().indexOf("FIREFOX") != -1
    },
    loadJs: function (e, t, i) {
        i = i || {};
        var n = document.getElementsByTagName("head")[0] || document.documentElement,
            o = document.createElement("script"), r = !1;
        o.src = e, i.charset && (o.charset = i.charset), "async" in i && (o.async = i.async || ""), o.onerror = o.onload = o.onreadystatechange = function () {
            r || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (r = !0, t && t(), o.onerror = o.onload = o.onreadystatechange = null, o && n.removeChild(o))
        }, n.insertBefore(o, n.firstChild)
    },
    loadJsonp: function () {
        var e = 1 * new Date;
        return function (t, i, n) {
            var o;
            n = n || {};
            var r = "QWJsonp" + e++, a = n.callbackReplacer || /%callbackfun%/gi;
            window[r] = function (e) {
                clearTimeout(o), i && i(e), window[r] = null
            }, a.test(t) ? t = t.replace(a, r) : t += (/\?/.test(t) ? "&" : "?") + "callback=" + r + "&cb=" + r, Helper.loadJs(t, n.oncomplete, n), n.timeout && (o = setTimeout(function () {
                window[r] = null, n.fail && n.fail({message: "超时"})
            }, n.timeout))
        }
    }(),
    jsonp: function (e, t, i) {
        do var n = "jsonp" + Date.now(); while (window[n]);
        if (e += "-1" != e.indexOf("?") ? "&callback=" + n : "?callback=" + n, "object" == typeof i) {
            var o = i.msg, r = i.loadingMsg;
            i = i.showAlertNo
        }
        $("#loading-wrap").length > 0 && loadingShow(r), window[n] = function (e) {
            var n = $("#loading-wrap").length > 0;
            if (0 != e.error) return i || alertShow(o || e.msg || alertDefault), 0 == --loadingCount && n && loadingHide(), !1;
            if (e.result) var r = e.result; else r = e;
            return "string" == typeof r && (r = r.replace(/\u0022/g, '"'),
                r = JSON.parse(r)), r && r.code && 0 != r.code ? (r.code == -1 && (o = "服务器超时，请稍后刷新再试"), i || alertShow(o || r.msg || alertDefault), 0 == --loadingCount && n && loadingHide(), !1) : (0 == --loadingCount && n && loadingHide(), void t(r))
        }, loadingCount++;
        var a = document.createElement("script");
        a.src = e, document.body.appendChild(a)
    },
    parseParam: function (e, t) {
        var i = "";
        return e instanceof String || e instanceof Number || e instanceof Boolean ? i += "&" + t + "=" + encodeURIComponent(e) : $.each(e, function (n) {
            var o = null == t ? n : t + (e instanceof Array ? "[" + n + "]" : "." + n);
            i += "&" + Helper.parseParam(this, o)
        }), i.substr(1)
    },
    jsonp2: function (e, t, i, n) {
        if (e) {
            do var o = "jsonp" + Date.now(); while (window[o]);
            e += "-1" != e.indexOf("?") ? "&callback=" + o + "&jp=" + o : "?callback=" + o + "&jp=" + o, window[o] = function (e) {
                window[o] = null, clearTimeout(a), t(e), n && n(e)
            };
            var r = document.createElement("script");
            r.src = e, document.body.appendChild(r);
            var a = setTimeout(function () {
                window[o] = function () {
                }, i && i(), n && n()
            }, 2e3)
        }
    },
    setSrc: function (e, t) {
        var i = [];
        for (var n in t) i.push(n + "=" + t[n]);
        return i = i.join("&"), e + "?token=" + Helper.getToken() + "&" + i
    },
    setSrcRemote: function (e) {
        var t = "";
        if ("string" == typeof e) var i = e; else i = e.api, t = JSON.stringify(e.data);
        return Helper.remoteCall + "?token=" + Helper.getToken() + "&api=" + i + "&data=" + t
    },
    setSrcMiats: function (e) {
        var t = "";
        if ("string" == typeof e) var i = e; else {
            i = e.api;
            for (var n in e.data) t += "&" + n + "=" + e.data[n]
        }
        return Helper.miats + i + "?token=" + Helper.getToken() + t
    },
    getUrlToken: function () {
        var e = Helper.parseUrl(location.href).et;
        return e
    },
    getToken: function () {
        var e = Helper.getUrlToken(), t = Helper.getCookie("miwifi_safe_token");
        if (window.miwifi_safe_token) var i = window.miwifi_safe_token; else e ? i = e : t && (i = t);
        return i
    },
    getEventCode: function () {
        var e = Helper.getToken();
        if (e) var t = e.split(",")[1]; else t = "";
        return t
    },
    getUrlParam: function () {
        var e = Helper.getCookie("miwifiParam");
        if (Helper.getUrlToken()) {
            var t = window.location.href, i = t.indexOf("?");
            return t.substr(i + 1)
        }
        return e ? e : ""
    },
    parseUrl: function (e) {
        for (var t = e.indexOf("?"), i = e.substr(t + 1), n = i.split("&"), o = {}, r = 0, a = n.length; r < a; r++) {
            var s = n[r].split("=");
            s.length > 0 && (o[s[0]] = s[1])
        }
        return o
    },
    decodeBase: function (e) {
        var t, i, n, o, r, a, s,
            c = new Array((-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 62, (-1), (-1), (-1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, (-1), (-1), (-1), (-1), (-1), (-1), (-1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, (-1), (-1), (-1), (-1), (-1), (-1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, (-1), (-1), (-1), (-1), (-1));
        for (a = e.length, r = 0, s = ""; r < a;) {
            do t = c[255 & e.charCodeAt(r++)]; while (r < a && t == -1);
            if (t == -1) break;
            do i = c[255 & e.charCodeAt(r++)]; while (r < a && i == -1);
            if (i == -1) break;
            s += String.fromCharCode(t << 2 | (48 & i) >> 4);
            do {
                if (n = 255 & e.charCodeAt(r++), 61 == n) return s;
                n = c[n]
            } while (r < a && n == -1);
            if (n == -1) break;
            s += String.fromCharCode((15 & i) << 4 | (60 & n) >> 2);
            do {
                if (o = 255 & e.charCodeAt(r++), 61 == o) return s;
                o = c[o]
            } while (r < a && o == -1);
            if (o == -1) break;
            s += String.fromCharCode((3 & n) << 6 | o)
        }
        return s
    },
    tmpl: function () {
        var e = "sArrCMX", t = e + '.push("', i = {
            js: {tagG: "js", isBgn: 1, isEnd: 1, sBgn: '");', sEnd: ";" + t},
            "if": {tagG: "if", isBgn: 1, rlt: 1, sBgn: '");if', sEnd: "{" + t},
            elseif: {tagG: "if", cond: 1, rlt: 1, sBgn: '");} else if', sEnd: "{" + t},
            "else": {tagG: "if", cond: 1, rlt: 2, sEnd: '");}else{' + t},
            "/if": {tagG: "if", isEnd: 1, sEnd: '");}' + t},
            "for": {tagG: "for", isBgn: 1, rlt: 1, sBgn: '");for', sEnd: "{" + t},
            "/for": {tagG: "for", isEnd: 1, sEnd: '");}' + t},
            "while": {tagG: "while", isBgn: 1, rlt: 1, sBgn: '");while', sEnd: "{" + t},
            "/while": {tagG: "while", isEnd: 1, sEnd: '");}' + t}
        };
        return function (n, o) {
            for (var r, a = -1, s = [], c = [[/\{strip\}([\s\S]*?)\{\/strip\}/g, function (e, t) {
                return t.replace(/[\r\n]\s*\}/g, " }").replace(/[\r\n]\s*/g, "")
            }], [/\\/g, "\\\\"], [/"/g, '\\"'], [/\r/g, "\\r"], [/\n/g, "\\n"], [/\{[\s\S]*?\S\}/g, function (e) {
                e = e.substr(1, e.length - 2);
                for (var t = 0; t < l.length; t++) e = e.replace(l[t][0], l[t][1]);
                var n = e;
                /^(.\w+)\W/.test(n) && (n = RegExp.$1);
                var o = i[n];
                if (o) {
                    if (o.isBgn && (r = s[++a] = {tagG: o.tagG, rlt: o.rlt}), o.isEnd) {
                        if (a < 0) throw new Error("Unexpected Tag: " + e);
                        if (r = s[a--], r.tagG != o.tagG) throw new Error("Unmatch Tags: " + r.tagG + "--" + n)
                    } else if (!o.isBgn) {
                        if (a < 0) throw new Error("Unexpected Tag:" + e);
                        if (r = s[a], r.tagG != o.tagG) throw new Error("Unmatch Tags: " + r.tagG + "--" + n);
                        if (o.cond && !(o.cond & r.rlt)) throw new Error("Unexpected Tag: " + n);
                        r.rlt = o.rlt
                    }
                    return (o.sBgn || "") + e.substr(n.length) + (o.sEnd || "")
                }
                return '",(' + e + '),"'
            }]], l = [[/\\n/g, "\n"], [/\\r/g, "\r"], [/\\"/g, '"'], [/\\\\/g, "\\"], [/\$(\w+)/g, 'opts["$1"]'], [/print\(/g, e + ".push("]], d = 0; d < c.length; d++) n = n.replace(c[d][0], c[d][1]);
            if (a >= 0) throw new Error("Lose end Tag: " + s[a].tagG);
            n = n.replace(/##7b/g, "{").replace(/##7d/g, "}").replace(/##23/g, "#"), n = "var " + e + "=[];" + t + n + '");return ' + e + '.join("");';
            var u = new Function("opts", n);
            return arguments.length > 1 ? u(o) : u
        }
    }()
};
!function (e, t) {
    function i(e) {
        return "" === r ? e : (e = e.charAt(0).toUpperCase() + e.substr(1), r + e)
    }

    var n = Math, o = t.createElement("div").style, r = function () {
            for (var e, t = "t,webkitT,MozT,msT,OT".split(","), i = 0, n = t.length; i < n; i++) if (e = t[i] + "ransform", e in o) return t[i].substr(0, t[i].length - 1);
            return !1
        }(), a = r ? "-" + r.toLowerCase() + "-" : "", s = i("transform"), c = i("transitionProperty"),
        l = i("transitionDuration"), d = i("transformOrigin"), u = i("transitionTimingFunction"),
        f = i("transitionDelay"), p = /android/gi.test(navigator.appVersion),
        m = /iphone|ipad/gi.test(navigator.appVersion), h = /hp-tablet/gi.test(navigator.appVersion),
        g = i("perspective") in o, _ = "ontouchstart" in e && !h, v = r !== !1, w = i("transition") in o,
        b = "onorientationchange" in e ? "orientationchange" : "resize", y = _ ? "touchstart" : "mousedown",
        I = _ ? "touchmove" : "mousemove", S = _ ? "touchend" : "mouseup", k = _ ? "touchcancel" : "mouseup",
        O = function () {
            if (r === !1) return !1;
            var e = {
                "": "transitionend",
                webkit: "webkitTransitionEnd",
                Moz: "transitionend",
                O: "otransitionend",
                ms: "MSTransitionEnd"
            };
            return e[r]
        }(), C = function () {
            return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
                return setTimeout(e, 1)
            }
        }(), T = function () {
            return e.cancelRequestAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout
        }(), x = g ? " translateZ(0)" : "", $ = function (i, n) {
            var o, r = this;
            r.wrapper = "object" == typeof i ? i : t.getElementById(i), r.wrapper.style.overflow = "hidden", r.scroller = r.wrapper.children[0], r.options = {
                hScroll: !0,
                vScroll: !0,
                x: 0,
                y: 0,
                bounce: !0,
                bounceLock: !1,
                momentum: !0,
                lockDirection: !0,
                useTransform: !0,
                useTransition: !1,
                topOffset: 0,
                checkDOMChanges: !1,
                handleClick: !0,
                hScrollbar: !0,
                vScrollbar: !1,
                fixedScrollbar: p,
                hideScrollbar: m,
                fadeScrollbar: m && g,
                scrollbarClass: "",
                zoom: !1,
                zoomMin: 1,
                zoomMax: 4,
                doubleTapZoom: 2,
                wheelAction: "scroll",
                snap: !1,
                snapThreshold: 1,
                onRefresh: null,
                onBeforeScrollStart: function (e) {
                    e.preventDefault()
                },
                onScrollStart: null,
                onBeforeScrollMove: null,
                onScrollMove: null,
                onBeforeScrollEnd: null,
                onScrollEnd: null,
                onTouchEnd: null,
                onDestroy: null,
                onZoomStart: null,
                onZoom: null,
                onZoomEnd: null
            };
            for (o in n) r.options[o] = n[o];
            r.x = r.options.x, r.y = r.options.y, r.options.useTransform = v && r.options.useTransform, r.options.hScrollbar = r.options.hScroll && r.options.hScrollbar, r.options.vScrollbar = r.options.vScroll && r.options.vScrollbar, r.options.zoom = r.options.useTransform && r.options.zoom, r.options.useTransition = w && r.options.useTransition, r.options.zoom && p && (x = ""), r.scroller.style[c] = r.options.useTransform ? a + "transform" : "top left", r.scroller.style[l] = "0", r.scroller.style[d] = "0 0", r.options.useTransition && (r.scroller.style[u] = "cubic-bezier(0.33,0.66,0.66,1)"), r.options.useTransform ? r.scroller.style[s] = "translate(" + r.x + "px," + r.y + "px)" + x : r.scroller.style.cssText += ";position:absolute;top:" + r.y + "px;left:" + r.x + "px", r.options.useTransition && (r.options.fixedScrollbar = !0), r.refresh(), r._bind(b, e), r._bind(y), _ || "none" != r.options.wheelAction && (r._bind("DOMMouseScroll"), r._bind("mousewheel")), r.options.checkDOMChanges && (r.checkDOMTime = setInterval(function () {
                r._checkDOMChanges()
            }, 500))
        };
    $.prototype = {
        enabled: !0,
        x: 0,
        y: 0,
        steps: [],
        scale: 1,
        currPageX: 0,
        currPageY: 0,
        pagesX: [],
        pagesY: [],
        aniTime: null,
        wheelZoomCount: 0,
        handleEvent: function (e) {
            var t = this;
            switch (e.type) {
                case y:
                    if (!_ && 0 !== e.button) return;
                    t._start(e);
                    break;
                case I:
                    t._move(e);
                    break;
                case S:
                case k:
                    t._end(e);
                    break;
                case b:
                    t._resize();
                    break;
                case"DOMMouseScroll":
                case"mousewheel":
                    t._wheel(e);
                    break;
                case O:
                    t._transitionEnd(e)
            }
        },
        _checkDOMChanges: function () {
            this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale || this.refresh()
        },
        _scrollbar: function (e) {
            var i, o = this;
            return o[e + "Scrollbar"] ? (o[e + "ScrollbarWrapper"] || (i = t.createElement("div"), o.options.scrollbarClass ? i.className = o.options.scrollbarClass + e.toUpperCase() : i.style.cssText = "position:absolute;z-index:100;" + ("h" == e ? "height:7px;bottom:1px;left:2px;right:" + (o.vScrollbar ? "7" : "2") + "px" : "width:7px;bottom:" + (o.hScrollbar ? "7" : "2") + "px;top:2px;right:1px"), i.style.cssText += ";pointer-events:none;" + a + "transition-property:opacity;" + a + "transition-duration:" + (o.options.fadeScrollbar ? "350ms" : "0") + ";overflow:hidden;opacity:" + (o.options.hideScrollbar ? "0" : "1"), o.wrapper.appendChild(i), o[e + "ScrollbarWrapper"] = i, i = t.createElement("div"), o.options.scrollbarClass || (i.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + a + "background-clip:padding-box;" + a + "box-sizing:border-box;" + ("h" == e ? "height:100%" : "width:100%") + ";" + a + "border-radius:3px;border-radius:3px"), i.style.cssText += ";pointer-events:none;" + a + "transition-property:" + a + "transform;" + a + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + a + "transition-duration:0;" + a + "transform: translate(0,0)" + x, o.options.useTransition && (i.style.cssText += ";" + a + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), o[e + "ScrollbarWrapper"].appendChild(i), o[e + "ScrollbarIndicator"] = i), "h" == e ? (o.hScrollbarSize = o.hScrollbarWrapper.clientWidth, o.hScrollbarIndicatorSize = n.max(n.round(o.hScrollbarSize * o.hScrollbarSize / o.scrollerW), 8), o.hScrollbarIndicator.style.width = o.hScrollbarIndicatorSize + "px", o.hScrollbarMaxScroll = o.hScrollbarSize - o.hScrollbarIndicatorSize, o.hScrollbarProp = o.hScrollbarMaxScroll / o.maxScrollX) : (o.vScrollbarSize = o.vScrollbarWrapper.clientHeight, o.vScrollbarIndicatorSize = n.max(n.round(o.vScrollbarSize * o.vScrollbarSize / o.scrollerH), 8), o.vScrollbarIndicator.style.height = o.vScrollbarIndicatorSize + "px", o.vScrollbarMaxScroll = o.vScrollbarSize - o.vScrollbarIndicatorSize, o.vScrollbarProp = o.vScrollbarMaxScroll / o.maxScrollY), void o._scrollbarPos(e, !0)) : void (o[e + "ScrollbarWrapper"] && (v && (o[e + "ScrollbarIndicator"].style[s] = ""), o[e + "ScrollbarWrapper"].parentNode.removeChild(o[e + "ScrollbarWrapper"]), o[e + "ScrollbarWrapper"] = null, o[e + "ScrollbarIndicator"] = null))
        },
        _resize: function () {
            var e = this;
            setTimeout(function () {
                e.refresh()
            }, p ? 200 : 0)
        },
        _pos: function (e, t) {
            this.zoomed || (e = this.hScroll ? e : 0, t = this.vScroll ? t : 0, this.options.useTransform ? this.scroller.style[s] = "translate(" + e + "px," + t + "px) scale(" + this.scale + ")" + x : (e = n.round(e), t = n.round(t), this.scroller.style.left = e + "px", this.scroller.style.top = t + "px"), this.x = e, this.y = t, this._scrollbarPos("h"), this._scrollbarPos("v"))
        },
        _scrollbarPos: function (e, t) {
            var i, o = this, r = "h" == e ? o.x : o.y;
            o[e + "Scrollbar"] && (r = o[e + "ScrollbarProp"] * r, r < 0 ? (o.options.fixedScrollbar || (i = o[e + "ScrollbarIndicatorSize"] + n.round(3 * r), i < 8 && (i = 8), o[e + "ScrollbarIndicator"].style["h" == e ? "width" : "height"] = i + "px"), r = 0) : r > o[e + "ScrollbarMaxScroll"] && (o.options.fixedScrollbar ? r = o[e + "ScrollbarMaxScroll"] : (i = o[e + "ScrollbarIndicatorSize"] - n.round(3 * (r - o[e + "ScrollbarMaxScroll"])), i < 8 && (i = 8), o[e + "ScrollbarIndicator"].style["h" == e ? "width" : "height"] = i + "px", r = o[e + "ScrollbarMaxScroll"] + (o[e + "ScrollbarIndicatorSize"] - i))), o[e + "ScrollbarWrapper"].style[f] = "0", o[e + "ScrollbarWrapper"].style.opacity = t && o.options.hideScrollbar ? "0" : "1", o[e + "ScrollbarIndicator"].style[s] = "translate(" + ("h" == e ? r + "px,0)" : "0," + r + "px)") + x)
        },
        _start: function (t) {
            var i, o, r, a, c, l = this, d = _ ? t.touches[0] : t;
            l.enabled && (l.options.onBeforeScrollStart && l.options.onBeforeScrollStart.call(l, t), (l.options.useTransition || l.options.zoom) && l._transitionTime(0), l.moved = !1, l.animating = !1, l.zoomed = !1, l.distX = 0, l.distY = 0, l.absDistX = 0, l.absDistY = 0, l.dirX = 0, l.dirY = 0, l.options.zoom && _ && t.touches.length > 1 && (a = n.abs(t.touches[0].pageX - t.touches[1].pageX), c = n.abs(t.touches[0].pageY - t.touches[1].pageY), l.touchesDistStart = n.sqrt(a * a + c * c), l.originX = n.abs(t.touches[0].pageX + t.touches[1].pageX - 2 * l.wrapperOffsetLeft) / 2 - l.x, l.originY = n.abs(t.touches[0].pageY + t.touches[1].pageY - 2 * l.wrapperOffsetTop) / 2 - l.y, l.options.onZoomStart && l.options.onZoomStart.call(l, t)), l.options.momentum && (l.options.useTransform ? (i = getComputedStyle(l.scroller, null)[s].replace(/[^0-9\-.,]/g, "").split(","), o = +(i[12] || i[4]), r = +(i[13] || i[5])) : (o = +getComputedStyle(l.scroller, null).left.replace(/[^0-9-]/g, ""), r = +getComputedStyle(l.scroller, null).top.replace(/[^0-9-]/g, "")), o == l.x && r == l.y || (l.options.useTransition ? l._unbind(O) : T(l.aniTime), l.steps = [], l._pos(o, r), l.options.onScrollEnd && l.options.onScrollEnd.call(l))), l.absStartX = l.x, l.absStartY = l.y, l.startX = l.x, l.startY = l.y, l.pointX = d.pageX, l.pointY = d.pageY, l.startTime = t.timeStamp || Date.now(), l.options.onScrollStart && l.options.onScrollStart.call(l, t), l._bind(I, e), l._bind(S, e), l._bind(k, e))
        },
        _move: function (e) {
            var t, i, o, r = this, a = _ ? e.touches[0] : e, s = a.pageX - r.pointX, c = a.pageY - r.pointY,
                l = r.x + s, d = r.y + c, u = e.timeStamp || Date.now();
            return r.options.onBeforeScrollMove && r.options.onBeforeScrollMove.call(r, e), r.options.zoom && _ && e.touches.length > 1 ? (t = n.abs(e.touches[0].pageX - e.touches[1].pageX), i = n.abs(e.touches[0].pageY - e.touches[1].pageY), r.touchesDist = n.sqrt(t * t + i * i), r.zoomed = !0, o = 1 / r.touchesDistStart * r.touchesDist * this.scale, o < r.options.zoomMin ? o = .5 * r.options.zoomMin * Math.pow(2, o / r.options.zoomMin) : o > r.options.zoomMax && (o = 2 * r.options.zoomMax * Math.pow(.5, r.options.zoomMax / o)), r.lastScale = o / this.scale, l = this.originX - this.originX * r.lastScale + this.x, d = this.originY - this.originY * r.lastScale + this.y, this.scroller.style[top] = d + "px", void (r.options.onZoom && r.options.onZoom.call(r, e))) : (r.pointX = a.pageX, r.pointY = a.pageY, (l > 0 || l < r.maxScrollX) && (l = r.options.bounce ? r.x + s / 2 : l >= 0 || r.maxScrollX >= 0 ? 0 : r.maxScrollX), (d > r.minScrollY || d < r.maxScrollY) && (d = r.options.bounce ? r.y + c / 2 : d >= r.minScrollY || r.maxScrollY >= 0 ? r.minScrollY : r.maxScrollY), r.distX += s, r.distY += c, r.absDistX = n.abs(r.distX), r.absDistY = n.abs(r.distY), void (r.absDistX < 6 && r.absDistY < 6 || (r.options.lockDirection && (r.absDistX > r.absDistY + 5 ? (d = r.y, c = 0) : r.absDistY > r.absDistX + 5 && (l = r.x, s = 0)), r.moved = !0, r._pos(l, d), r.dirX = s > 0 ? -1 : s < 0 ? 1 : 0, r.dirY = c > 0 ? -1 : c < 0 ? 1 : 0, u - r.startTime > 300 && (r.startTime = u, r.startX = r.x, r.startY = r.y), r.options.onScrollMove && r.options.onScrollMove.call(r, e))))
        },
        _end: function (i) {
            if (!_ || 0 === i.touches.length) {
                var o, r, a, c, d, u, f, p = this, m = _ ? i.changedTouches[0] : i, h = {dist: 0, time: 0},
                    g = {dist: 0, time: 0}, v = (i.timeStamp || Date.now()) - p.startTime, w = p.x, b = p.y;
                if (p._unbind(I, e), p._unbind(S, e), p._unbind(k, e), p.options.onBeforeScrollEnd && p.options.onBeforeScrollEnd.call(p, i), p.zoomed) return f = p.scale * p.lastScale, f = Math.max(p.options.zoomMin, f), f = Math.min(p.options.zoomMax, f), p.lastScale = f / p.scale, p.scale = f, p.x = p.originX - p.originX * p.lastScale + p.x, p.y = p.originY - p.originY * p.lastScale + p.y, p.scroller.style[l] = "200ms", p.scroller.style[s] = "translate(" + p.x + "px," + p.y + "px) scale(" + p.scale + ")" + x, p.zoomed = !1, p.refresh(), void (p.options.onZoomEnd && p.options.onZoomEnd.call(p, i));
                if (!p.moved) return _ && (p.doubleTapTimer && p.options.zoom ? (clearTimeout(p.doubleTapTimer), p.doubleTapTimer = null, p.options.onZoomStart && p.options.onZoomStart.call(p, i), p.zoom(p.pointX, p.pointY, 1 == p.scale ? p.options.doubleTapZoom : 1), p.options.onZoomEnd && setTimeout(function () {
                    p.options.onZoomEnd.call(p, i)
                }, 200)) : this.options.handleClick && (p.doubleTapTimer = setTimeout(function () {
                    for (p.doubleTapTimer = null, o = m.target; 1 != o.nodeType;) o = o.parentNode;
                    "SELECT" != o.tagName && "INPUT" != o.tagName && "TEXTAREA" != o.tagName && (r = t.createEvent("MouseEvents"), r.initMouseEvent("click", !0, !0, i.view, 1, m.screenX, m.screenY, m.clientX, m.clientY, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, 0, null), r._fake = !0, o.dispatchEvent(r))
                }, p.options.zoom ? 250 : 0))), p._resetPos(400), void (p.options.onTouchEnd && p.options.onTouchEnd.call(p, i));
                if (v < 300 && p.options.momentum && (h = w ? p._momentum(w - p.startX, v, -p.x, p.scrollerW - p.wrapperW + p.x, p.options.bounce ? p.wrapperW : 0) : h, g = b ? p._momentum(b - p.startY, v, -p.y, p.maxScrollY < 0 ? p.scrollerH - p.wrapperH + p.y - p.minScrollY : 0, p.options.bounce ? p.wrapperH : 0) : g, w = p.x + h.dist, b = p.y + g.dist, (p.x > 0 && w > 0 || p.x < p.maxScrollX && w < p.maxScrollX) && (h = {
                    dist: 0,
                    time: 0
                }), (p.y > p.minScrollY && b > p.minScrollY || p.y < p.maxScrollY && b < p.maxScrollY) && (g = {
                    dist: 0,
                    time: 0
                })), h.dist || g.dist) return d = n.max(n.max(h.time, g.time), 10), p.options.snap && (a = w - p.absStartX, c = b - p.absStartY, n.abs(a) < p.options.snapThreshold && n.abs(c) < p.options.snapThreshold ? p.scrollTo(p.absStartX, p.absStartY, 200) : (u = p._snap(w, b), w = u.x, b = u.y, d = n.max(u.time, d))), p.scrollTo(n.round(w), n.round(b), d), void (p.options.onTouchEnd && p.options.onTouchEnd.call(p, i));
                if (p.options.snap) return a = w - p.absStartX, c = b - p.absStartY, n.abs(a) < p.options.snapThreshold && n.abs(c) < p.options.snapThreshold ? p.scrollTo(p.absStartX, p.absStartY, 200) : (u = p._snap(p.x, p.y), u.x == p.x && u.y == p.y || p.scrollTo(u.x, u.y, u.time)), void (p.options.onTouchEnd && p.options.onTouchEnd.call(p, i));
                p._resetPos(200), p.options.onTouchEnd && p.options.onTouchEnd.call(p, i)
            }
        },
        _resetPos: function (e) {
            var t = this, i = t.x >= 0 ? 0 : t.x < t.maxScrollX ? t.maxScrollX : t.x,
                n = t.y >= t.minScrollY || t.maxScrollY > 0 ? t.minScrollY : t.y < t.maxScrollY ? t.maxScrollY : t.y;
            return i == t.x && n == t.y ? (t.moved && (t.moved = !1, t.options.onScrollEnd && t.options.onScrollEnd.call(t)), t.hScrollbar && t.options.hideScrollbar && ("webkit" == r && (t.hScrollbarWrapper.style[f] = "300ms"), t.hScrollbarWrapper.style.opacity = "0"), void (t.vScrollbar && t.options.hideScrollbar && ("webkit" == r && (t.vScrollbarWrapper.style[f] = "300ms"), t.vScrollbarWrapper.style.opacity = "0"))) : void t.scrollTo(i, n, e || 0)
        },
        _wheel: function (e) {
            var t, i, n, o, r, a = this;
            if ("wheelDeltaX" in e) t = e.wheelDeltaX / 12, i = e.wheelDeltaY / 12; else if ("wheelDelta" in e) t = i = e.wheelDelta / 12; else {
                if (!("detail" in e)) return;
                t = i = 3 * -e.detail
            }
            return "zoom" == a.options.wheelAction ? (r = a.scale * Math.pow(2, 1 / 3 * (i ? i / Math.abs(i) : 0)), r < a.options.zoomMin && (r = a.options.zoomMin), r > a.options.zoomMax && (r = a.options.zoomMax), void (r != a.scale && (!a.wheelZoomCount && a.options.onZoomStart && a.options.onZoomStart.call(a, e), a.wheelZoomCount++, a.zoom(e.pageX, e.pageY, r, 400), setTimeout(function () {
                a.wheelZoomCount--, !a.wheelZoomCount && a.options.onZoomEnd && a.options.onZoomEnd.call(a, e)
            }, 400)))) : (n = a.x + t, o = a.y + i, n > 0 ? n = 0 : n < a.maxScrollX && (n = a.maxScrollX), o > a.minScrollY ? o = a.minScrollY : o < a.maxScrollY && (o = a.maxScrollY), void (a.maxScrollY < 0 && a.scrollTo(n, o, 0)))
        },
        _transitionEnd: function (e) {
            var t = this;
            e.target == t.scroller && (t._unbind(O), t._startAni())
        },
        _startAni: function () {
            var e, t, i, o = this, r = o.x, a = o.y, s = Date.now();
            if (!o.animating) {
                if (!o.steps.length) return void o._resetPos(400);
                if (e = o.steps.shift(), e.x == r && e.y == a && (e.time = 0), o.animating = !0, o.moved = !0, o.options.useTransition) return o._transitionTime(e.time), o._pos(e.x, e.y), o.animating = !1, void (e.time ? o._bind(O) : o._resetPos(0));
                (i = function () {
                    var c, l, d = Date.now();
                    return d >= s + e.time ? (o._pos(e.x, e.y), o.animating = !1, o.options.onAnimationEnd && o.options.onAnimationEnd.call(o), void o._startAni()) : (d = (d - s) / e.time - 1, t = n.sqrt(1 - d * d), c = (e.x - r) * t + r, l = (e.y - a) * t + a, o._pos(c, l), void (o.animating && (o.aniTime = C(i))))
                })()
            }
        },
        _transitionTime: function (e) {
            e += "ms", this.scroller.style[l] = e, this.hScrollbar && (this.hScrollbarIndicator.style[l] = e), this.vScrollbar && (this.vScrollbarIndicator.style[l] = e)
        },
        _momentum: function (e, t, i, o, r) {
            var a = 6e-4, s = n.abs(e) / t, c = s * s / (2 * a), l = 0, d = 0;
            return e > 0 && c > i ? (d = r / (6 / (c / s * a)), i += d, s = s * i / c, c = i) : e < 0 && c > o && (d = r / (6 / (c / s * a)), o += d, s = s * o / c, c = o), c *= e < 0 ? -1 : 1, l = s / a, {
                dist: c,
                time: n.round(l)
            }
        },
        _offset: function (e) {
            for (var t = -e.offsetLeft, i = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft, i -= e.offsetTop;
            return e != this.wrapper && (t *= this.scale, i *= this.scale), {left: t, top: i}
        },
        _snap: function (e, t) {
            var i, o, r, a, s, c, l = this;
            for (r = l.pagesX.length - 1, i = 0, o = l.pagesX.length; i < o; i++) if (e >= l.pagesX[i]) {
                r = i;
                break
            }
            for (r == l.currPageX && r > 0 && l.dirX < 0 && r--, e = l.pagesX[r], s = n.abs(e - l.pagesX[l.currPageX]), s = s ? n.abs(l.x - e) / s * 500 : 0, l.currPageX = r, r = l.pagesY.length - 1, i = 0; i < r; i++) if (t >= l.pagesY[i]) {
                r = i;
                break
            }
            return r == l.currPageY && r > 0 && l.dirY < 0 && r--, t = l.pagesY[r], c = n.abs(t - l.pagesY[l.currPageY]), c = c ? n.abs(l.y - t) / c * 500 : 0, l.currPageY = r, a = n.round(n.max(s, c)) || 200, {
                x: e,
                y: t,
                time: a
            }
        },
        _bind: function (e, t, i) {
            (t || this.scroller).addEventListener(e, this, !!i)
        },
        _unbind: function (e, t, i) {
            (t || this.scroller).removeEventListener(e, this, !!i)
        },
        destroy: function () {
            var t = this;
            t.scroller.style[s] = "", t.hScrollbar = !1, t.vScrollbar = !1, t._scrollbar("h"), t._scrollbar("v"), t._unbind(b, e), t._unbind(y), t._unbind(I, e), t._unbind(S, e), t._unbind(k, e), t.options.hasTouch || (t._unbind("DOMMouseScroll"), t._unbind("mousewheel")), t.options.useTransition && t._unbind(O), t.options.checkDOMChanges && clearInterval(t.checkDOMTime), t.options.onDestroy && t.options.onDestroy.call(t)
        },
        refresh: function () {
            var e, t, i, o, r = this, a = 0, s = 0;
            if (r.scale < r.options.zoomMin && (r.scale = r.options.zoomMin), r.wrapperW = r.wrapper.clientWidth || 1, r.wrapperH = r.wrapper.clientHeight || 1, r.minScrollY = -r.options.topOffset || 0, r.scrollerW = n.round(r.scroller.offsetWidth * r.scale), r.scrollerH = n.round((r.scroller.offsetHeight + r.minScrollY) * r.scale), r.maxScrollX = r.wrapperW - r.scrollerW, r.maxScrollY = r.wrapperH - r.scrollerH + r.minScrollY, r.dirX = 0, r.dirY = 0, r.options.onRefresh && r.options.onRefresh.call(r), r.hScroll = r.options.hScroll && r.maxScrollX < 0, r.vScroll = r.options.vScroll && (!r.options.bounceLock && !r.hScroll || r.scrollerH > r.wrapperH), r.hScrollbar = r.hScroll && r.options.hScrollbar, r.vScrollbar = r.vScroll && r.options.vScrollbar && r.scrollerH > r.wrapperH, e = r._offset(r.wrapper), r.wrapperOffsetLeft = -e.left, r.wrapperOffsetTop = -e.top, "string" == typeof r.options.snap) for (r.pagesX = [], r.pagesY = [], o = r.scroller.querySelectorAll(r.options.snap), t = 0, i = o.length; t < i; t++) a = r._offset(o[t]), a.left += r.wrapperOffsetLeft, a.top += r.wrapperOffsetTop, r.pagesX[t] = a.left < r.maxScrollX ? r.maxScrollX : a.left * r.scale, r.pagesY[t] = a.top < r.maxScrollY ? r.maxScrollY : a.top * r.scale; else if (r.options.snap) {
                for (r.pagesX = []; a >= r.maxScrollX;) r.pagesX[s] = a, a -= r.wrapperW, s++;
                for (r.maxScrollX % r.wrapperW && (r.pagesX[r.pagesX.length] = r.maxScrollX - r.pagesX[r.pagesX.length - 1] + r.pagesX[r.pagesX.length - 1]), a = 0, s = 0, r.pagesY = []; a >= r.maxScrollY;) r.pagesY[s] = a, a -= r.wrapperH, s++;
                r.maxScrollY % r.wrapperH && (r.pagesY[r.pagesY.length] = r.maxScrollY - r.pagesY[r.pagesY.length - 1] + r.pagesY[r.pagesY.length - 1])
            }
            r._scrollbar("h"), r._scrollbar("v"), r.zoomed || (r.scroller.style[l] = "0", r._resetPos(400))
        },
        scrollTo: function (e, t, i, n) {
            var o, r, a = this, s = e;
            for (a.stop(), s.length || (s = [{
                x: e,
                y: t,
                time: i,
                relative: n
            }]), o = 0, r = s.length; o < r; o++) s[o].relative && (s[o].x = a.x - s[o].x, s[o].y = a.y - s[o].y), a.steps.push({
                x: s[o].x,
                y: s[o].y,
                time: s[o].time || 0
            });
            a._startAni()
        },
        scrollToElement: function (e, t) {
            var i, o = this;
            e = e.nodeType ? e : o.scroller.querySelector(e), e && (i = o._offset(e), i.left += o.wrapperOffsetLeft, i.top += o.wrapperOffsetTop, i.left = i.left > 0 ? 0 : i.left < o.maxScrollX ? o.maxScrollX : i.left, i.top = i.top > o.minScrollY ? o.minScrollY : i.top < o.maxScrollY ? o.maxScrollY : i.top, t = void 0 === t ? n.max(2 * n.abs(i.left), 2 * n.abs(i.top)) : t, o.scrollTo(i.left, i.top, t))
        },
        scrollToPage: function (e, t, i) {
            var n, o, r = this;
            i = void 0 === i ? 400 : i, r.options.onScrollStart && r.options.onScrollStart.call(r), r.options.snap ? (e = "next" == e ? r.currPageX + 1 : "prev" == e ? r.currPageX - 1 : e, t = "next" == t ? r.currPageY + 1 : "prev" == t ? r.currPageY - 1 : t, e = e < 0 ? 0 : e > r.pagesX.length - 1 ? r.pagesX.length - 1 : e, t = t < 0 ? 0 : t > r.pagesY.length - 1 ? r.pagesY.length - 1 : t, r.currPageX = e, r.currPageY = t, n = r.pagesX[e], o = r.pagesY[t]) : (n = -r.wrapperW * e, o = -r.wrapperH * t, n < r.maxScrollX && (n = r.maxScrollX), o < r.maxScrollY && (o = r.maxScrollY)), r.scrollTo(n, o, i)
        },
        disable: function () {
            this.stop(), this._resetPos(0), this.enabled = !1, this._unbind(I, e), this._unbind(S, e), this._unbind(k, e)
        },
        enable: function () {
            this.enabled = !0
        },
        stop: function () {
            this.options.useTransition ? this._unbind(O) : T(this.aniTime), this.steps = [], this.moved = !1, this.animating = !1
        },
        zoom: function (e, t, i, n) {
            var o = this, r = i / o.scale;
            o.options.useTransform && (o.zoomed = !0, n = void 0 === n ? 200 : n, e = e - o.wrapperOffsetLeft - o.x, t = t - o.wrapperOffsetTop - o.y, o.x = e - e * r + o.x, o.y = t - t * r + o.y, o.scale = i, o.refresh(), o.x = o.x > 0 ? 0 : o.x < o.maxScrollX ? o.maxScrollX : o.x, o.y = o.y > o.minScrollY ? o.minScrollY : o.y < o.maxScrollY ? o.maxScrollY : o.y, o.scroller.style[l] = n + "ms", o.scroller.style[s] = "translate(" + o.x + "px," + o.y + "px) scale(" + i + ")" + x, o.zoomed = !1)
        },
        isReady: function () {
            return !this.moved && !this.zoomed && !this.animating
        }
    }, o = null, "undefined" != typeof exports ? exports.iScroll = $ : e.iScroll = $
}(window, document), console.log("index.js_v3");
var flag = 0, ads = {
    scrollEvent: !0, getImei: function () {
        var e = Helper.getCookie("ads_imei");
        if (e) return e;
        var t = Date.now(), i = Math.random(), n = hex_md5(t + "" + i);
        return Helper.setCookie("ads_imei", n), n
    }, getIpLocation: function (e) {
        var t = this;
        t.ipv4 && t.location ? e(window.ipv4, t.location) : Helper.loadJsonp("http://api.miwifi.com/utils/location", function (i) {
            if (0 != i.code) MIWIFI_MONITOR.log({
                element: "sns_wifi_location_code_error",
                deviceId: CONF.deviceid
            }); else {
                var n = i.data.srcip, o = i.data.city;
                t.ipv4 = n, t.position = o, e(n, o)
            }
        })
    }, getDongfangData: function (e) {
        var t = this, i = jQuery.Deferred(), n = +new Date;
        return $.ajax({
            url: "http://xiaomiapi.dftoutiao.com/NewsApiV2/wap/api",
            data: e.param,
            type: "post",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "callback",
            success: function (o) {
                var r = +new Date, a = r - n;
                if (o.data && o.data.length > 0) {
                    e.param.element = "sns_wifi_ads_show_dongfang_success", e.param.device_id = CONF.deviceid, MIWIFI_MONITOR.log(e.param), $("#tabs").length <= 0 && ($("#ads-container").html(t.adsTpl[e.provider]), $(".tabs li").each(function () {
                        var e = $(this).data("type");
                        t["pgnum_" + e] = 1, t["startkey_" + e] = "", t["newkey_" + e] = "", t["idx_" + e] = 0
                    })), t.loadEvents(e), $("body").css({background: "#f8f8f8"});
                    var s = "";
                    o.data.forEach(function (e, i) {
                        var n = {};
                        n.data = e, t.caculateImgHeight(n.data), s += 1 == e.bigpic ? Helper.tmpl(t.getAdsTpl({
                            provider: "dongfang",
                            type: "largeTpl"
                        }), n) : 0 == e.bigpic ? e.miniimg_size >= 3 ? Helper.tmpl(t.getAdsTpl({
                            provider: "dongfang",
                            type: "miniTpl"
                        }), n) : e.miniimg_size >= 1 && e.miniimg_size < 3 ? Helper.tmpl(t.getAdsTpl({
                            provider: "dongfang",
                            type: "singleTpl"
                        }), n) : Helper.tmpl(t.getAdsTpl({
                            provider: "dongfang",
                            type: "nopicTpl"
                        }), n) : Helper.tmpl(t.getAdsTpl({provider: "dongfang", type: "nopicTpl"}), n)
                    }), $(s).appendTo($(".scroller .list")), i.resolve(o)
                } else e.param.element = "sns_wifi_ads_show_dongfang_fail", e.param.device_id = CONF.deviceid, MIWIFI_MONITOR.log(e.param);
                "toutiao" == e.param.type && 1 == e.param.pgnum && MIWIFI_MONITOR.log({
                    element: "sns_wifi_ads_dongfang_req_success",
                    deviceId: CONF.deviceid
                }), a > 2e3 && MIWIFI_MONITOR.log({
                    element: "sns_wifi_ads_dongfang_req_timeout",
                    deviceId: CONF.deviceid
                })
            },
            error: function () {
                $("body").css({background: "#fff", height: "100%"}), $("html").css({
                    background: "#fff",
                    height: "100%"
                }), e.param.element = "sns_wifi_ads_show_dongfang_req_fail", e.param.device_id = CONF.deviceid, MIWIFI_MONITOR.log(e.param), i.reject()
            }
        }), i
    }, getClientInfo: function () {
        var e = "http://guest.miwifi.com/cgi-bin/luci/api/misns/sns_init", t = jQuery.Deferred();
        return $.ajax({
            url: e, data: "", type: "post", dataType: "jsonp", success: function (e) {
                0 === e.code ? (window.CONF.clientinfo = e.clientinfo, window.CONF.ssid = e.ssid, t.resolve()) : t.reject()
            }, error: function () {
                t.reject()
            }
        }), t
    }, adsRateControl: function () {
        var e = jQuery.Deferred(), t = window.location.host, i = window.location.href, n = i.indexOf(t),
            i = i.substr(n, i.length), o = i.indexOf("?") + 1 || i.length + 1, r = i.substr(0, o - 1).replace(t, ""),
            a = {host: t, path: r, client_id: CONF.clientinfo, device_id: CONF.deviceid, source: 4},
            s = "http://api.miwifi.com/rr/a", c = {d: JSON.stringify(a)};
        return $.ajax({
            url: s, data: c, type: "post", dataType: "jsonp", success: function (t) {
                0 === t.code ? t.data && t.data.a && 0 != t.data.a.length ? (t.data.a.forEach(function (e, t) {
                    8 == e.apr && 9 == e.at && 7 == e.ap || 10 == e.apr && 12 == e.at && 7 == e.ap
                }), e.resolve()) : (MIWIFI_MONITOR.log({
                    element: "sns_wifi_ads_show_rate_noads_fail",
                    deviceId: CONF.deviceid
                }), e.reject()) : (MIWIFI_MONITOR.log({
                    element: "sns_wifi_ads_show_rate_codenot0_fail",
                    deviceId: CONF.deviceid
                }), e.reject())
            }, error: function () {
                MIWIFI_MONITOR.log({element: "sns_wifi_ads_show_rate_error", deviceId: CONF.deviceid}), e.reject()
            }
        }), e
    }, getAdsTpl: function (e) {
        var t = {
            dongfang: {
                largeTpl: '<li><a class="big-pic" href="{$data.url}" target="_blank"><h4>{$data.topic}</h4><div class="pics"><img src="{$data.lbimg[0].src}" height="{$data.lbimg[0].height} /></div><div class="info">{if ($data.hotnews)}<span class="hot">热门</span>{/if}{if ($data.isrecom)}<span class="hot">推荐</span>{/if}<span class="user">{$data.source}</span></div></a></li>',
                miniTpl: '<li><a class="mini-pic" href="{$data.url}"  target="_blank"><h4>{$data.topic}</h4><div class="pics">{for(var i=0;i<3;i++)}<img src="{$data.miniimg[i].src}" height="{$data.miniimg[i].height}"/>{/for}</div><div class="info">{if ($data.hotnews)}<span class="hot">热门</span>{/if}{if ($data.isrecom)}<span class="hot">推荐</span>{/if}<span class="user">{$data.source}</span></div></a></li>',
                singleTpl: '<li><a class="single-pic" href="{$data.url}" target="_blank"><div class="wrap"><h4>{$data.topic}</h4><div class="pics"><img src="{$data.miniimg[0].src}" height="{$data.miniimg[0].height}" /></div></div><div class="info">{if ($data.hotnews)}<span class="hot">热门</span>{/if}{if ($data.isrecom)}<span class="hot">推荐</span>{/if}<span class="user">{$data.source}</span></div></a></li>',
                nopicTpl: '<li><a class="no-pic" href="{$data.url}"  target="_blank"><h4>{$data.topic}</h4><div class="info">{if ($data.hotnews)}<span class="hot">热门</span>{/if}{if ($data.isrecom)}<span class="hot">推荐</span>{/if}<span class="user">{$data.source}</span></div></a></li>'
            }
        };
        return t[e.provider][e.type]
    }, caculateImgHeight: function (e, t) {
        e.miniimg.forEach(function (e, t) {
            var i = $(".scroller").width();
            e.height = parseInt(i * e.imgheight / 3.125 / e.imgwidth)
        }), e.lbimg.forEach(function (e, t) {
            var i = $(".scroller").width();
            e.height = parseInt(i * e.imgheight / e.imgwidth)
        })
    }, getAdsData: function (e) {
        var t = this, i = {};
        i.dongfang = function (e) {
            $.when(t.getDongfangData(e)).done(function (e) {
                ads["startkey_" + ads.type] = e.endkey, ads["newkey_" + ads.type] = e.newkey
            }).fail(function () {
            })
        }, i[e.provider](e)
    }, pullUpAction: function (e) {
        var t = this;
        t["pgnum_" + t.type]++, t["idx_" + t.type] = t["idx_" + t.type] + 10, "dongfang" == e.provider && (e.param = {
            type: t.type,
            pgnum: t["pgnum_" + t.type],
            ime: t.getImei(),
            idx: t["idx_" + t.type],
            qid: t.qid,
            position: t.position,
            startkey: t["startkey_" + t.type],
            newkey: t["newkey_" + t.type],
            newsnum: 10
        }, $.when(t.getDongfangData(e)).done(function (e) {
            t["startkey_" + t.type] = e.endkey, t["newkey_" + t.type] = e.newkey, t.scrollEvent = !0
        }).fail(function () {
        }))
    }, show: function (e) {
        var t = this;
        e.param || (e.param = {
            type: t.type,
            pgnum: t["pgnum_" + t.type],
            ime: t.getImei(),
            idx: t["idx_" + t.type],
            qid: t.qid,
            position: t.position,
            startkey: t["startkey_" + t.type],
            newkey: t["newkey_" + t.type],
            newsnum: 10
        }), t.getAdsData(e)
    }, loadEvents: function (e) {
        var t = this;
        t.navHeight = $(".tabs").offset().top, $(window).scroll(function (i) {
            var n = $(this).scrollTop(), o = $(document).height(), r = $(this).height();
            n > t.navHeight ? $(".tabs").addClass("fixed") : $(".tabs").removeClass("fixed"), t.scrollEvent && n + r == o && (setTimeout(function () {
                t.pullUpAction(e)
            }, 1e3), t.scrollEvent = !1)
        })
    }, alertTip: function (e) {
        $("#tip").text(e), $("#tip").show(), setTimeout(function () {
            $("#tip").hide()
        }, 3e3)
    }, init: function (e) {
        var t = this;
        t.adsTpl = {dongfang: '<div class="ads"><div class="tabs" id="tabs"><ul><li class="active" data-type="toutiao">推荐</li><li data-type="yule">娱乐</li><li data-type="shehui" >社会</li><li data-type="junshi">军事</li><li data-type="caijing">财经</li><li data-type="youxi">游戏</li><li data-type="qiche">汽车</li><li data-type="keji">科技</li><div class="space"></div></ul></div><div class="wrap-content" id="wrapper"><div class="scroller"><ul class="list"></ul><div class="more"><i class="pull_icon load"></i><span>加载中...</span></div></div></div></div>'}, qid = {dongfang: "xmlyq"};
        var i = setInterval(function () {
            2 == flagMac && (clearInterval(i), t.getIpLocation(function (i, n) {
                t.type = "toutiao", t.qid = qid[e.provider],
                    t.position = n, e.param = {
                    type: "toutiao",
                    pgnum: 1,
                    ime: t.getImei(),
                    idx: 0,
                    qid: qid[e.provider],
                    position: n,
                    newsnum: 10
                }, t.show(e)
            }), $("body").on("click", ".tabs li", function () {
                t.type = $(this).data("type"), $(this).parent().find(".active").removeClass("active").end().end().addClass("active"), $(document).scrollTop(t.navHeight), $(".scroller .list").empty();
                var e = $(window).scrollTop(), i = $(document).height(), n = $(window).height();
                e + n != i && t.show({provider: "dongfang"})
            }), $("body").on("click", ".scroller a", function (t) {
                history.pushState({page: "ads"}, ""), MIWIFI_MONITOR.log({
                    element: "ads_click_" + e.provider,
                    deviceId: CONF.deviceid
                })
            }))
        }, 100);
        setTimeout(function () {
            clearInterval(i)
        }, 4e3)
    }
};
console.log("main.js_v3");
var free = 0;
!function () {
    function e() {
        var e, t, i, n, o, r, a, s, c,
            l = "weixin://connectToFreeWifi/friendWifi?appid=" + CONF.appid + "&devicetype=" + CONF.devicetype + "&deviceid=" + CONF.deviceid + "&clientinfo=" + CONF.clientinfo + "&ssid=" + CONF.ssid,
            d = "http://api.miwifi.com/wifirent/index?did=" + CONF.deviceid + "&version=1&client_info=" + CONF.clientinfo;
        e = function (e) {
            i = {};
            for (t in e) i[t] = encodeURIComponent(e[t]);
            return i
        }(CONF), n = $.parseTpl(l, e), urlWXPAY = $.parseTpl(d, e), o = "", r = "", a = {
            wifirent_wechat_pay: '<a data-type="wechat_pay" data-href="' + urlWXPAY + '" class="btn btn_sns btn_wechatpay clearfix"></a>',
            wechat: '<a data-type="wechat" data-href="' + n + '" class="btn btn_sns btn_wechat"></a>'
        }, c = '<a class="btn btn-normal" id="btnNetApply"><img class="ico" src="http://s.miwifi.com/sns_wifi_share/img/portal_wifi_icon5.png">申请上网</a>', s = [];
        for (var u = 0; u < SNSenable.length; u++) "wifirent_wechat_pay" == SNSenable[u] ? ($("#money_net").show(), $(a.wifirent_wechat_pay).appendTo("#money_net")) : "wechat" == SNSenable[u] && ($("#friend").removeClass("show"), $("#friend").addClass("show"), $("#friend").show(), $(".new_left ._showagreement,.new_left .feedback").hide(), $(".new_left ._more").show(), $(a.wechat).appendTo("#friend")), s.push(a[SNSenable[u]]), MIWIFI_MONITOR.log({
            element: "sns_wifi_" + SNSenable[u] + "btn_display",
            deviceId: CONF.deviceid
        });
        SNSenable.indexOf("direct_request") !== -1 && ($("#btnNetApply").removeClass("show"), $("#btnNetApply").addClass("show"), $("#btnNetApply").show(), $(".new_left ._showagreement,.new_left .feedback").hide(), $(".new_left ._more").show(), s.push(c)), document.getElementById("btnList").innerHTML = s.join(""), $(".loadings").hide(), console.log("button加载完成"), MIWIFI_MONITOR.log({element: "sns_wifi_v2_button_complate"}), $("#dialog .show").length < 2 && $("#dialog .show").addClass("only")
    }

    function t() {
        var e = "http://api.miwifi.com/guest_wifi/request_access",
            t = {device_id: CONF.deviceid, client_info: CONF.clientinfo, token: CONF.token}, i = function (e) {
                if (console.log("设备申请上网"), $("#snsconnect").hide(), 0 === e.code) $("#guestconnect").html($("#tplGuestconnectSand").html()), n(); else {
                    var t = $("#tplGuestconnectSandErr").html(), i = {
                        4302: "设备已失效",
                        4303: "无效的联网设备信息",
                        4308: "请求被拒绝",
                        4309: "请求被通过",
                        4310: "路由不支持访客WiFi",
                        4311: "已经发起过请求了",
                        4312: "请求上限满了",
                        4313: "申请上网失败"
                    }, o = $.parseTpl(t, {msg: i[e.code] || e.msg || ""});
                    $("#guestconnect").html(o), MIWIFI_MONITOR.log({
                        element: "direct_request_fail",
                        deviceId: CONF.deviceid
                    })
                }
                $("#guestconnect").show(), $("body").attr("data-loading", "false")
            };
        $("body").attr("data-loading", "true"), loadJSONP(e, t, i)
    }

    function i(e) {
        e.preventDefault(), $("#dialog,.mask").hide(), $("body").css({background: "#fff"}), t()
    }

    function n() {
        var e = "http://guest.miwifi.com:8999/cgi-bin/luci/api/misns/authorization_status", t = function (e) {
            console.log("设备申请状态"), $("#snsconnect").hide(), $("#guestconnect").show(), 0 === e.code ? (1 === e.status && ($("#guestconnect").html($("#tplGuestconnectSucc").html()), MIWIFI_MONITOR.log({
                element: "apply_rent_success",
                deviceId: CONF.deviceid
            }), clearInterval(d)), 2 === e.status && ($("#guestconnect").html($("#tplGuestconnectError").html()), clearInterval(d))) : MIWIFI_MONITOR.log({
                element: "sns_wifi_authorization_status_code_error",
                deviceId: CONF.deviceid
            }), u = !0
        }, i = 0;
        d = setInterval(function () {
            return i++, i > 50 ? void clearInterval(d) : void (u === !0 && (u = !1, loadJSONP(e, {}, t)))
        }, 4e3)
    }

    function o(e) {
        var t = parseFloat(e);
        if (!isNaN(t)) return t = Math.round(100 * e) / 100
    }

    function r() {
        var e = "http://api.miwifi.com/report/weekly/data2", t = {deviceId: CONF.deviceid}, i = function (e) {
            if (console.log("获取用户网速信息"), 0 === e.code) {
                var t = o(e.data.maxTrafficSpeed / 1024);
                t > 100 && $(".wifi_info").text("网速" + t + "k/s,上网超快")
            } else MIWIFI_MONITOR.log({element: "sns_wifi_data2_code_error", deviceId: CONF.deviceid})
        };
        loadJSONP(e, t, i)
    }

    function a() {
        $("body").delegate("#btnNetApply", "click", i);
        var e = $("#agreement");
        $("._showagreement").on("click", function (t) {
            t.preventDefault(), $(".mask").hide(), $("#dialog").hide(), e.show(), ads && (ads.navHeight = $(".tabs").offset().top)
        }), $("._hideagreement").on("click", function (t) {
            t.preventDefault(), e.hide(), ads && (ads.navHeight = $(".tabs").offset().top)
        })
    }

    var s = function (e) {
        $("#tip").text(e), $("#tip").show(), setTimeout(function () {
            $("#tip").hide()
        }, 3e3)
    };
    $("body").delegate(".btn_wechatpay", "click", function () {
        MIWIFI_MONITOR.log({element: "sns_wifi_v2_click_btn_wechatpay"})
    }), $("body").delegate(".btn_wechat", "click", function () {
        $("#dialog,.mask").hide(), MIWIFI_MONITOR.log({element: "sns_wifi_v2_click_btn_wechat"})
    });
    var c = function () {
        $(".loadings").show();
        var e = this;
        console.log("延迟打开协议");
        var t = $(e).attr("data-href");
        $(e).attr("data-type");
        $.when(openWannet()).done(function () {
            $(".loadings,.wechat-guide,.mask").hide(), window.location.href = t
        }).fail(function () {
            $(".loadings,.wechat-guide,.mask").hide(), s("请求超时，请稍后重试")
        })
    }, l = function (e) {
        var t = this;
        e.preventDefault(), c.apply(t, arguments)
    }, d = null, u = !0;
    $.when(getClientInfo()).done(function () {
        $.when(getSeiver()).done(function () {
            if (url_type) {
                if (MIWIFI_MONITOR.log({
                    element: "sns_wifi_new_show",
                    deviceId: CONF.deviceid
                }), !Helper.isIos()) return $("#lite").removeClass("none"), $(".loadings").hide(), !1;
                $("#snsconnect,#tit2,#new").removeClass("none")
            } else $("#snsconnect,#tit2,#new").removeClass("none");
            a(), e(), $("body").delegate(".btn_sns", "click", l), r(), getMac(CONF.deviceid, CONF.clientinfo), $.when(getrateCtr()).done(function () {
                setTimeout(function () {
                    $(".btn_free").on("click", function (e) {
                        $(".mask").show(), $("#dialog").removeClass("hide"), $("#dialog").show()
                    }), $(".wechat-guide .free-get").on("click", function () {
                        console.log("点击首页弹框上的按钮"), clickGZBtn.call(this), MIWIFI_MONITOR.log({
                            element: "sns_rz_wechatgzf_click",
                            deviceId: CONF.deviceid
                        })
                    })
                }, 100), 1 == $("#btnList").children().length && ($("#btnList a").css({
                    margin: "20px auto 0",
                    width: "80%"
                }), $("#btnList a .ico1,#btnList a .ico2").css({margin: "10px 0 0 29%"}))
            }).fail(function () {
                1 == $("#btnList").children().length && ($("#btnList a").css({
                    margin: "20px auto 0",
                    width: "80%"
                }), $("#btnList a .ico1,#btnList a .ico2").css({margin: "10px 0 0 29%"})), MIWIFI_MONITOR.log({
                    element: "sns_wifi_rate_failed",
                    deviceId: CONF.deviceid
                }), console.log("频控失败")
            })
        }).fail(function () {
            s("换取设备信息失败")
        })
    }).fail(function (e) {
        s(e.msg || "获取设备信息失败(sns_init)")
    }), history.pushState({page: "sns"}, ""), isPc() ? MIWIFI_MONITOR.log({
        element: "sns_pc",
        deviceId: CONF.deviceid
    }) : MIWIFI_MONITOR.log({element: "sns_mob", deviceId: CONF.deviceid}), window.onload = function () {
        var e = +new Date, t = e - dStart;
        MIWIFI_MONITOR.log({element: "onload", time: t, deviceId: CONF.deviceid})
    }, $(document).ready(function () {
        var e = +new Date, t = e - dStart;
        MIWIFI_MONITOR.log({element: "domready", time: t, deviceId: CONF.deviceid})
    })
}();