webpackJsonp([7], {
    127: function (t, e, n) {
        "use strict";

        function i(t, e) {
            var n = {position: "topcenter", type: "success", speed: 2e3}, i = -1;
            e = $.extend(!0, {}, n, e), t.prototype.$toaster = function (t, n) {
                if (!t) throw new Error("请输入通知信息");
                var o = void 0, a = void 0, c = void 0, r = void 0, s = void 0;
                switch (n = $.extend(e, n), a = n.position, o = n.type, c = n.speed, r = $('<div class="toaster-wrp"></div').addClass(a), o) {
                    case"success":
                        r.addClass("success"), s = $('<span class="success msg-text">' + t + "</span>");
                        break;
                    case"warning":
                        r.addClass("warning"), s = $('<span class="warning-text msg-text">' + t + "</span>");
                        break;
                    case"error":
                        r.addClass("error"), s = $('<span class="error-text msg-text">' + t + "</span>")
                }
                r.append(s), $("body").append(r), setTimeout(function () {
                    var t = r.outerWidth(!0);
                    i++, r.css({marginLeft: -t / 2, opacity: 1, top: 10 + 60 * i + "px"})
                }, 0), setTimeout(function () {
                    r.remove(), --i
                }, c)
            }
        }

        var o = n(334);
        n.n(o);
        e.a = i
    }, 128: function (t, e, n) {
        "use strict";

        function i() {
            var t = window.navigator.userAgent, e = t.match(/mobile/i), n = t.match(/ipad/i);
            return e && !n
        }

        function o(t, e) {
            if (0 === Object.keys(t).length) return e;
            var n = "";
            for (var i in t) n = n ? n + "&" + i + "=" + t[i] : n + i + "=" + t[i];
            return e + "?" + n
        }

        var a = n(50), c = n(340), r = n(66), s = function (t) {
            return n.e(0).then(function () {
                var e = [n(347)];
                t.apply(null, e)
            }.bind(this)).catch(n.oe)
        }, u = function (t) {
            return n.e(1).then(function () {
                var e = [n(349)];
                t.apply(null, e)
            }.bind(this)).catch(n.oe)
        }, m = function (t) {
            return n.e(4).then(function () {
                var e = [n(350)];
                t.apply(null, e)
            }.bind(this)).catch(n.oe)
        }, d = function (t) {
            return n.e(5).then(function () {
                var e = [n(348)];
                t.apply(null, e)
            }.bind(this)).catch(n.oe)
        };
        a.default.use(c.a);
        var l = !!window.ActiveXObject || "ActiveXObject" in window, p = i() ? new c.a({
            mode: "history",
            routes: [{path: "/article-text/mobile", name: "mobile", component: u}, {
                path: "/article-text/middle",
                name: "middlepage",
                component: m
            }, {path: "*", redirect: "/article-text/mobile"}]
        }) : new c.a({
            mode: "history",
            routes: [{path: "/article-text/home", name: "home", component: s}, {
                path: "/article-text/ie",
                name: "ie",
                component: d
            }, {path: "/article-text/mobile", name: "mobile", component: u}, {
                path: "*",
                redirect: "/article-text/home"
            }]
        });
        r.a.dispatch("setIsMobile", i()), p.beforeEach(function (t, e, n) {
            if (i() || "mobile" !== t.name || (window.top.location.href = o(t.query, "//member.bilibili.com/v2#/upload/text/edit")), l && "ie" !== t.name) return void n("/article-text/ie");
            if (window.top !== window) r.a.dispatch("setIsIframe", !0); else {
                t.query.aid
            }
            if (!l && "ie" === t.name) return void n("/article-text/home");
            n()
        }), e.a = p
    }, 130: function (t, e) {
    }, 131: function (t, e) {
        function n(t) {
            var e = new RegExp(t + "=([^;]*)"), n = e.exec(document.cookie);
            return n ? decodeURIComponent(n[1]) : null
        }

        !function (t) {
            var e = t.ajax;
            t.ajax = function (i, o) {
                return "object" == typeof i && (o = i, i = void 0), "post" != o.type && "POST" != o.type || !o.data || o.data.csrf || t.extend(o.data, {csrf: n("bili_jct")}), e(i, o)
            }
        }(jQuery)
    }, 133: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(50), o = n(129), a = (n.n(o), n(66)), c = n(128), r = n(131), s = (n.n(r), n(127)), u = n(130);
        n.n(u);
        i.default.config.productionTip = !1, i.default.use(s.a);
        var m = function () {
            var t = window.navigator.userAgent, e = t.match(/mobile/i), n = t.match(/ipad/i);
            return e && !n
        }, d = function () {
            var t = Date.now(), e = t % 10;
            return 0 == e || 1 == e || 2 == e ? 1 : 3 == e || 4 == e || 5 == e ? 2 : 6 == e || 7 == e || 8 == e || 9 == e ? 3 : void 0
        };
        if (window.UEDITOR_HOME_URL = "//s" + d() + ".hdslb.com/bfs/static/article-text/static/ueditor/", m()) {
            window.UMEDITOR_HOME_URL = "//s" + d() + ".hdslb.com/bfs/static/article-text/static/umeditor/";
            var l = document.createElement("meta");
            l.name = "viewport", l.content = "initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, width=device-width";
            var p = document.createElement("meta");
            p.name = "format-detection", p.content = "telephone=no", document.getElementsByTagName("head")[0].insertBefore(l, document.getElementsByTagName("head")[0].firstChild), document.getElementsByTagName("head")[0].insertBefore(p, document.getElementsByTagName("head")[0].firstChild);
            $("body").append('<div id="mobile-loading"><i class="waiting"></i></div>')
        }
        var f = {el: "#app", router: c.a, store: a.a, template: "<App/>"}, h = m() ? function (t) {
            return n.e(3).then(function () {
                var e = [n(339)];
                t.apply(null, e)
            }.bind(this)).catch(n.oe)
        } : function (t) {
            return n.e(2).then(function () {
                var e = [n(338)];
                t.apply(null, e)
            }.bind(this)).catch(n.oe)
        };
        f.components = {App: h}, new i.default(f)
    }, 334: function (t, e) {
    }, 346: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0OWUwYmE5MS00ZDkxLTQxZjktYWUxZS02M2RjZGY4NzFlZDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTUxRTgxM0Q2MDYzMTFFNzkyNzRDMkI3RDBDMDEzMjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTUxRTgxM0M2MDYzMTFFNzkyNzRDMkI3RDBDMDEzMjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjOGZhOTlmMy1iZTg3LTRkYzAtODI4NS1lZDg0ZmY3NDc5NjAiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5NTNkMWNjMC1hODM1LTExN2EtODVkYy04OTgwMmZhYjM0ODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6iIBwmAAACQElEQVR42mL8//8/Az7QdOEDNmFbIJ4LxIxAnArEB9AV1BkI4DWXiYF0oA/EO4BYFYhVgHgnENuQagipFnMC8Tog5kISYwPiZUDMQ4pBjISCGi3Ym4BULQ7pDmDwVlLdYqCloEh7jMdn34FYDmj5G2pY/J+BMsCIS4KFWI1AH98AUuoE1N8D+liZKkENzU4aQHydSF/qAfFlamUnVxKC14ma2cmcBItNqWmxBgkWa1LTYlkSLJahpsUCJFgsSHSqlllzC6+iNBWxP0CKmVibZ915xYhP/kmIGkEf2wPx/k+//34i1tLPv/9+A+mB6iU5qO2hmkHVncOTb79+E2vx0++/foL0QPXidAATPguRDMNw4Ny7b8EYHTz+9usfEhenA5jwWQgDL77/5kQXe/T1FxhjUcuBxYMYDoBZvBqbhfBq5+8/bmDcERO/YLV4lDhA7YJbfI2Qoc+/E47m5z+ISgrXkC2+Skj1s++/GKihhmSLifENMaECBFeQ62NsFoOyxXkgPgHEx7ylBKpBZgPxfSD+JMjGHAmtr5dB22ISXlICsisfvu0Hsq2gFYsRELNj8zGs5BKFWnIMahEInwVZ/vTbXwZygDQXuKADWWoMdYQl1EGGwJLrNczHr4ko3EHNWDcCanYBsTtaqB2D4n5ym7cl0FC4jUXuBlSuhGqtTMZFGC0eUD4F1SpSUP5dINYCYpQk/T9Ok+o9ia9AXIPcW0G3lBY9CRhYCE2MF4F4BTkGsJBp8T9ofHJC2SQDgAADAEs6ywWRCKflAAAAAElFTkSuQmCC"
    }, 66: function (t, e, n) {
        "use strict";
        var i = n(50), o = n(342);
        i.default.use(o.a);
        var a = new o.a.Store({
            state: {
                editor: {
                    media_id: 0,
                    is_spoiler: !1,
                    id: 0,
                    cover: "",
                    pics: [],
                    title: "",
                    content: "",
                    contentToString: "",
                    summary: "",
                    words: 0,
                    copyright: 0,
                    category: 0,
                    list_id: 0,
                    tags: [],
                    template: {id: 0, pics: []},
                    dynamic_intro: "",
                    attachments: [],
                    isOriginal: 0
                },
                currentCategory: {id: 0, parentId: 0, name: ""},
                currentReadList: null,
                systemError: "",
                editorIsLoaded: !1,
                hasNotice: !1,
                hasImgLoading: !1,
                hasImgPasting: !1,
                userInfo: {mid: 0, name: "这里是用户名", face: ""},
                popup: {
                    type: "alert", isShow: !1, text: "自定义文本", submit: {
                        text: "确定", onClick: function () {
                        }
                    }, cancel: {
                        text: "取消", onClick: function () {
                        }
                    }
                },
                isIframe: !1,
                isMobile: !1,
                uploadType: ""
            }, actions: {
                setEditor: function (t, e) {
                    t.dispatch;
                    (0, t.commit)("SET_EDITOR", e)
                }, setHasNotice: function (t, e) {
                    t.dispatch;
                    (0, t.commit)("SET_HAS_NOTICE", e)
                }, setImgLoading: function (t, e) {
                    t.dispatch;
                    (0, t.commit)("SET_IMG_LOADING", e)
                }, setImgPasting: function (t, e) {
                    t.dispatch;
                    (0, t.commit)("SET_IMG_PASTING", e)
                }, setCurrentCategory: function (t, e) {
                    t.dispatch;
                    (0, t.commit)("SET_CURRENT_CATEGORY", e)
                }, setCurrentReadList: function (t, e) {
                    t.dispatch;
                    (0, t.commit)("SET_CURRENT_READLIST", e)
                }, setEditorState: function (t, e) {
                    t.dispatch;
                    (0, t.commit)("SET_EDITOR_STATE", e)
                }, setErrorMsg: function (t, e) {
                    t.dispatch;
                    (0, t.commit)("SET_ERROR_MSG", e)
                }, setUserInfo: function (t, e) {
                    t.dispatch;
                    (0, t.commit)("SET_USER_INFO", e)
                }, setPopup: function (t, e) {
                    t.dispatch;
                    (0, t.commit)("SET_POPUP", e)
                }, setIsIframe: function (t, e) {
                    t.dispach;
                    (0, t.commit)("SET_IFRAME", e)
                }, setIsMobile: function (t, e) {
                    t.dispach;
                    (0, t.commit)("SET_MOBILE", e)
                }, setUploadType: function (t, e) {
                    t.dispatch;
                    (0, t.commit)("SET_UPLOAD_TYPE", e)
                }
            }, mutations: {
                SET_EDITOR: function (t, e) {
                    t.editor = e, t.editor.summary = e.contentToString.substr(0, 250).trim()
                }, SET_CURRENT_CATEGORY: function (t, e) {
                    t.currentCategory = e
                }, SET_CURRENT_READLIST: function (t, e) {
                    t.currentReadList = e
                }, SET_HAS_NOTICE: function (t, e) {
                    t.hasNotice = e
                }, SET_IMG_LOADING: function (t, e) {
                    t.hasImgLoading = e
                }, SET_IMG_PASTING: function (t, e) {
                    t.hasImgPasting = e
                }, SET_EDITOR_STATE: function (t, e) {
                    t.editorIsLoaded = e
                }, SET_ERROR_MSG: function (t, e) {
                    t.systemError = e
                }, SET_USER_INFO: function (t, e) {
                    t.userInfo = e
                }, SET_POPUP: function (t, e) {
                    t.popup = e
                }, SET_IFRAME: function (t, e) {
                    t.isIframe = e
                }, SET_MOBILE: function (t, e) {
                    t.isMobile = e
                }, SET_UPLOAD_TYPE: function (t, e) {
                    t.uploadType = e
                }
            }, getters: {
                getEditor: function (t) {
                    return t.editor
                }, getHasNotice: function (t) {
                    return t.hasNotice
                }, getImgLoading: function (t) {
                    return t.hasImgLoading
                }, getImgPasting: function (t) {
                    return t.hasImgPasting
                }, getEditorState: function (t) {
                    return t.editorIsLoaded
                }, getCurrentCategory: function (t) {
                    return t.currentCategory
                }, getCurrentReadList: function (t) {
                    return t.currentReadList
                }, getErrorMsg: function (t) {
                    return t.systemError
                }, getUserInfo: function (t) {
                    return t.userInfo
                }, getPopup: function (t) {
                    return t.popup
                }, getIsIframe: function (t) {
                    return t.isIframe
                }, getIsMobile: function (t) {
                    return t.isMobile
                }, getUploadType: function (t) {
                    return t.uploadType
                }
            }
        });
        e.a = a
    }
}, [133]);