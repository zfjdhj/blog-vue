(function () {
    //如果window下已经有MIWIFI_MONITOR，不做任何事情
    if (typeof window.MIWIFI_MONITOR !== 'undefined') {
        return;
    }

    var version = 'v1.3.3 (2016.4.18)',

        guidCookieDomains = [];

    var MIWIFI_MONITOR = (function (window, undefined) {
        var isLocal;
        //有时候monitor.js会在file://或者res://协议下使用，判断下
        (function () {
            isLocal = true;
            try {
                var protocol = location.protocol.toLowerCase();
                if (protocol == 'http:' || protocol == 'https:') {
                    isLocal = false;
                }
            } catch (e) {
            }
        })();

        var doc = document,
            nav = navigator,
            screen = window.screen,
            domain = isLocal ? '' : document.domain.toLowerCase(),
            ua = nav.userAgent.toLowerCase();

        var StringH = {
            trim: function (s) {
                return s.replace(/^[\s\xa0\u3000]+|[\u3000\xa0\s]+$/g, "");
            }
        };
        /**
         * Element相关方法
         * @type {Object}
         */
        var NodeH = {
            on: function (el, type, fn) {
                if (el.addEventListener) {
                    el && el.addEventListener(type, fn, false);
                } else {
                    el && el.attachEvent('on' + type, fn);
                }
            },
            parentNode: function (el, tagName, deep) {
                deep = deep || 5;
                tagName = tagName.toUpperCase();
                while (el && deep-- > 0) {
                    if (el.tagName === tagName) {
                        return el;
                    }
                    el = el.parentNode;
                }
                return null;
            }
        };

        /**
         * Event相关方法
         * @type {Object}
         */
        var EventH = {
            fix: function (e) {
                if (!('target' in e)) {
                    var node = e.srcElement || e.target;
                    if (node && node.nodeType == 3) {
                        node = node.parentNode;
                    }
                    e.target = node;
                }
                return e;
            }
        };

        /**
         * Object相关方法
         * @type {Object}
         */
        var ObjectH = (function () {
            function getConstructorName(o) {
                //加o.constructor是因为IE下的window和document
                if (o != null && o.constructor != null) {
                    return Object.prototype.toString.call(o).slice(8, -1);
                } else {
                    return '';
                }
            }

            return {
                /**
                 * 判断一个变量是否Array对象
                 * @param  {Object}  obj 目标变量
                 * @return {Boolean}
                 */
                isArray: function (obj) {
                    return getConstructorName(obj) == 'Array';
                },

                /**
                 * 判断一个变量是否typeof object
                 * @param  {Object}  obj 目标变量
                 * @return {Boolean}
                 */
                isObject: function (obj) {
                    return obj !== null && typeof obj == 'object';
                },

                /**
                 * 将源对象的属性并入到目标对象
                 * @param  {Object} des      目标对象
                 * @param  {Object} src      源对象，如果是数组，则依次并入
                 * @param  {Boolean} override 是否覆盖已有属性
                 * @return {Object}          des
                 */
                mix: function (des, src, override) {
                    for (var i in src) {
                        //这里要加一个des[i]，是因为要照顾一些不可枚举的属性
                        if (override || !(des[i] || (i in des))) {
                            des[i] = src[i];
                        }
                    }
                    return des;
                },

                /**
                 * 将Object序列化为key=val键值对字符串，不处理val为数组的情况]
                 * @param  {Object} json 需要序列化的对象
                 * @return {String}      序列化后的字符串
                 */
                encodeURIJson: function (obj) {
                    var result = [];
                    for (var p in obj) {
                        if (obj[p] == null) continue;
                        result.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                    }
                    return result.join('&');
                }
            };
        })();

        /**
         * Cookie读写操作的封装
         * @type {Object}
         */
        var Cookie = {
            get: function (key) {
                try {
                    var a, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
                    if (a = doc.cookie.match(reg)) {
                        return unescape(a[2]);
                    } else {
                        return "";
                    }
                } catch (e) {
                    return "";
                }
            },
            set: function (key, val, options) {
                options = options || {};
                var expires = options.expires;

                if (typeof(expires) === "number") {
                    expires = new Date();
                    expires.setTime(expires.getTime() + options.expires);
                }

                try {
                    doc.cookie =
                        key + "=" + escape(val)
                        + (expires ? ";expires=" + expires.toGMTString() : "")
                        + (options.path ? ";path=" + options.path : "")
                        + (options.domain ? "; domain=" + options.domain : "");
                } catch (e) {
                }
            }
        };

        /**
         * 工具集，用来获取具体项目的值
         * 可通过MIWIFI_MONITOR.util.[方法名]来访问
         * 增加或覆盖这里的方法，可以实现更多功能
         * @type {Object}
         */
        var util = {
            getProject: function () {
                return '';
            },

            getReferrer: function () {
                var ref = doc.referrer || '';
                if (ref.indexOf('pass') > -1 || ref.indexOf('pwd') > -1) {
                    return '403';
                }
                return ref;
            },

            getBrowser: function () {

                var browsers = {
                    '360se': '360se',
                    'qq': 'qqbrowser',
                    'maxthon': 'maxthon',
                    'greenbrowser': 'greenbrowser',
                    'sogou': 'se 2.x metasr',
                    'theworld': 'theworld',
                    'liebao': 'lbbrowser',
                    'baidu': 'bidubrowser',
                    'taobao': 'taobrowser',
                    'uc': 'ucbrowser'
                };
                for (var i in browsers) {
                    if (ua.indexOf(browsers[i]) > -1) {
                        return i;
                    }
                }


                var result = ua.match(/(msie|chrome|safari|firefox|opera|trident|iphone|ipad|android)/);
                result = result ? result[0] : '';

                if (result == 'msie') {
                    result = ua.match(/msie[^;]+/) + '';
                } else if (result == 'trident') {
                    ua.replace(/trident\/[0-9].*rv[ :]([0-9.]+)/ig, function (a, c) {
                        result = 'msie ' + c;
                    });
                }


                /**
                 * 检测 external 是否包含该字段
                 * @param reg 正则
                 * @param type 检测类型，0为键，1为值
                 * @returns {boolean}
                 * @private
                 */
                function _testExternal(reg, type) {
                    var external = window.external || {};

                    for (var i in external) {
                        if (reg.test(type ? external[i] : i)) {
                            return true;
                        }
                    }

                    return false;
                }

                /**
                 * 获取 Chromium 内核浏览器类型
                 */

                function _getChromiumType() {
                    var REG_APPLE = /^Apple/;
                    var isIe = window.ActiveXObject || document.documentMode;
                    if (isIe || typeof window.scrollMaxX !== 'undefined' || REG_APPLE.test(navigator.vendor || '')) {
                        return '';
                    }

                    var _track = 'track' in document.createElement('track');
                    var webstoreKeysLength = window.chrome && window.chrome.webstore ? Object.keys(window.chrome.webstore).length : 0;

                    // 搜狗浏览器
                    if (_testExternal(/^sogou/i, 0)) {
                        return 'sogou';
                    }

                    // 猎豹浏览器
                    if (_testExternal(/^liebao/i, 0)) {
                        return 'liebao';
                    }

                    // chrome
                    if (window.clientInformation && window.clientInformation.permissions) {
                        return 'chrome';
                    }

                    if (_track) {
                        // 360极速浏览器
                        // 360安全浏览器
                        return webstoreKeysLength > 1 ? '360ee' : '360se';
                    }

                    return '';
                }

                // 判断异性浏览器
                var chromiumType = _getChromiumType();
                if (/^(chrome|360se|360ee|liebao|sogou|qq)$/.test(chromiumType)) {
                    result = chromiumType;
                }
                return result;
            },

            getLocation: function () {
                var url = '';

                //避免IE下设置domain后，读取location.href属性报权限错误
                try {
                    url = location.href;
                } catch (e) {
                    url = doc.createElement('a');
                    url.href = '';
                    url = url.href;
                }

                //去掉queryString和Hash
                url = url.replace(/[?#].*$/, '');

                //如果不是.html .htm .shtml .php结尾的url，补上/
                url = /\.(s?htm|php)/.test(url) ? url : (url.replace(/\/$/, '') + '/');

                return url;
            },

            getGuid: (function () {
                function hash(s) {
                    var h = 0,
                        g = 0,
                        i = s.length - 1;
                    for (i; i >= 0; i--) {
                        var code = parseInt(s.charCodeAt(i), 10);
                        h = ((h << 6) & 0xfffffff) + code + (code << 14);
                        if ((g = h & 0xfe00000) != 0) {
                            h = (h ^ (g >> 21));
                        }
                    }
                    return h;
                }

                function guid() {
                    var s = [nav.appName, nav.version, nav.language || nav.browserLanguage, nav.platform, nav.userAgent, screen.width, 'x', screen.height, screen.colorDepth, doc.referrer].join(""),
                        sLen = s.length,
                        hLen = window.history.length;

                    while (hLen) {
                        s += (hLen--) ^ (sLen++);
                    }

                    return (Math.round(Math.random() * 2147483647) ^ hash(s)) * 2147483647;
                }

                var guidKey = '__guid',
                    id = Cookie.get(guidKey);

                if (!id) {
                    id = [hash(isLocal ? '' : doc.domain), guid(), +new Date + Math.random() + Math.random()].join('.');

                    var config = {
                        expires: 24 * 3600 * 1000 * 300,
                        path: '/'
                    };

                    //如果是设置了guidCookieDomains，__guid放在guidCookieDomain域下
                    if (guidCookieDomains.length) {
                        for (var i = 0; i < guidCookieDomains.length; i++) {
                            var guidCookieDomain = guidCookieDomains[i],
                                gDomain = '.' + guidCookieDomain;

                            if ((domain.indexOf(gDomain) > 0 && domain.lastIndexOf(gDomain) == domain.length - gDomain.length) || domain == guidCookieDomain) {
                                config.domain = gDomain;
                                break;
                            }
                        }
                    }

                    Cookie.set(guidKey, id, config);
                }

                return function () {
                    return id;
                };
            })(),

            getCount: (function () {
                var countKey = 'monitor_count',
                    count = Cookie.get(countKey);

                count = (parseInt(count) || 0) + 1;

                Cookie.set(countKey, count, {expires: 24 * 3600 * 1000, path: '/'});

                return function () {
                    return count;
                };
            })(),

            getFlashVer: function () {
                var ver = -1;
                if (nav.plugins && nav.mimeTypes.length) {
                    var plugin = nav.plugins["Shockwave Flash"];
                    if (plugin && plugin.description) {
                        ver = plugin.description
                                .replace(/([a-zA-Z]|\s)+/, "")
                                .replace(/(\s)+r/, ".") + ".0";
                    }
                } else if (window.ActiveXObject && !window.opera) {
                    try {
                        var c = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                        if (c) {
                            var version = c.GetVariable("$version");
                            ver = version.replace(/WIN/g, '').replace(/,/g, '.');
                        }
                    } catch (e) {
                    }
                }

                ver = parseInt(ver, 10);
                return ver;
            },

            getContainerId: function (el) {
                var areaStr,
                    name,
                    maxLength = 100;

                if (config.areaIds) {
                    areaStr = new RegExp('^(' + config.areaIds.join('|') + ')$', 'ig');
                }

                while (el) {
                    //bk模式
                    if (el.attributes && ('bk' in el.attributes || 'data-bk' in el.attributes)) {
                        name = el.getAttribute('bk') || el.getAttribute('data-bk');

                        if (name) {
                            name = 'bk:' + name;
                            return name.substr(0, maxLength);
                        }

                        if (el.id) {
                            name = el.getAttribute('data-desc') || el.id;
                            return name.substr(0, maxLength);
                        }
                    } else if (areaStr) { //setId模式
                        if (el.id && areaStr.test(el.id)) {
                            name = el.getAttribute('data-desc') || el.id;
                            return name.substr(0, maxLength);
                        }
                    }

                    el = el.parentNode;
                }

                return '';
            },

            getText: function (el) {
                var str = "";

                if (el.tagName.toLowerCase() == 'input') {
                    str = el.getAttribute('text') || el.getAttribute('data-text') || el.value || el.title || '';
                } else {
                    str = el.getAttribute('text') || el.getAttribute('data-text') || el.innerText || el.textContent || el.title || '';
                }

                return StringH.trim(str).substr(0, 100);
            },

            getHref: function (el) {
                try {
                    return el.getAttribute('data-href') || el.href || '';
                } catch (e) {
                    return '';
                }
            },

            getDeviceId: function() {
                return 'deviceId';
            },
            getAppVersion: function() {
                return 'appVersion';
            },
            getRomVersion: function() {
                return 'romVersion';
            },
            getHardwareVersion: function() {
                return 'hardwareVersion';
            },
            getOS: function(){
                return navigator.platform;
            },
            getScreen: function(){
                return window.screen.width + 'x' + window.screen.height;
            }
        };

        /**
         * 获取数据集合的方法
         * 可通过MIWIFI_MONITOR.data.[方法名]来访问
         * 增加或覆盖这里的方法，可以实现更多功能
         * @type {Object}
         */
        var data = {
            getBase: function () {
                return {
                    p: util.getProject(),
                    u: util.getLocation(),
                    id: util.getGuid(),
                    guid: util.getGuid(),
                    b: util.getBrowser(),
                    r: util.getReferrer(),
                    fl: util.getFlashVer(),
                    s: util.getScreen(),
                    o: util.getOS()
                };
            },
            getTrack: function () {
                return {
                    b: util.getBrowser(),
                    c: util.getCount(),
                    r: util.getReferrer(),
                    fl: util.getFlashVer()
                };
            },
            getClick: function (e) {
                e = EventH.fix(e || event);
                var target = e.target/*,
                    tagName = target.tagName,
                    containerId = util.getContainerId(target)*/;

                if (target.attributes && ('data-log-element' in target.attributes)) {
                    return {
                        element: target.attributes['data-log-element']
                    }
                }

                return false;

                /*if (target.type && (target.type == 'submit' || target.type == 'button')) {
                    var form = NodeH.parentNode(target, 'FORM'),
                        result = {};
                    if (form) {
                        var formId = form.id || '',
                            tId = target.id;

                        result = {
                            f: form.action,
                            c: 'form:' + (form.name || formId),
                            cId: containerId
                        };

                        if ((formId == 'search-form' || formId == 'searchForm') && (tId == 'searchBtn' || tId == 'search-btn')) {
                            var keywordEl = $('kw') || $('search-kw') || $('kw1');
                            result.w = keywordEl ? keywordEl.value : '';
                        }
                    } else {
                        result = {
                            f: util.getHref(target),
                            c: util.getText(target),
                            cId: containerId
                        }
                    }

                    return result;
                } else if (tagName == 'AREA') {
                    return {
                        f: util.getHref(target),
                        c: 'area:' + target.parentNode.name,
                        cId: containerId
                    };
                } else {
                    var img, text;
                    if (tagName == 'IMG') {
                        img = target;
                    }

                    target = NodeH.parentNode(target, 'A');
                    if (!target) return false;

                    text = util.getText(target);

                    return {
                        f: util.getHref(target),
                        c: text ? text : (img ? img.src.match(/[^\/]+$/) : ''),
                        cId: containerId
                    };
                }

                return false;*/
            },
            getKeydown: function (e) {
                e = EventH.fix(e || event);
                if (e.keyCode != 13) return false;

                var target = e.target,
                    tagName = target.tagName,
                    containerId = util.getContainerId(target);

                if (tagName == 'INPUT') {
                    var form = NodeH.parentNode(target, 'FORM');
                    if (form) {
                        var formId = form.id || '',
                            tId = target.id,
                            result = {
                                f: form.action,
                                c: 'form:' + (form.name || formId),
                                cId: containerId
                            };

                        if (tId == 'kw' || tId == 'search-kw' || tId == 'kw1') {
                            result.w = target.value;
                        }

                        return result;
                    }
                }
                return false;
            }
        };

        /**
         * 配置项
         * @type {Object}
         */
        var config = {
            'trackUrl': null,
            'clickUrl': null,
            'areaIds': null
        };

        var $ = function (str) {
            return document.getElementById(str);
        };

        return {
            version: version,

            util: util,

            data: data,

            config: config,

            sendLog: (function () {
                window.__miwifi_monitor_imgs = {};

                return function (url) {
                    var id = 'log_' + (+new Date),
                        img = window['__miwifi_monitor_imgs'][id] = new Image();

                    img.onload = img.onerror = function () {
                        if (window.__miwifi_monitor_imgs && window['__miwifi_monitor_imgs'][id]) {
                            window['__miwifi_monitor_imgs'][id] = null;
                            delete window["__miwifi_monitor_imgs"][id];
                        }
                    };
                    img.src = url;
                };
            })(),

            buildLog: (function () {
                var lastLogParams = '';

                return function (params, url) {
                    if (params === false) return;

                    params = params || {};

                    var baseParams = data.getBase();
                    params = ObjectH.mix(baseParams, params, true);

                    var logParams = url + ObjectH.encodeURIJson(params);
                    if (logParams == lastLogParams) {
                        return;
                    }

                    lastLogParams = logParams;
                    setTimeout(function () { //100ms后允许发相同数据
                        lastLogParams = '';
                    }, 100);

                    var sendParams = ObjectH.encodeURIJson(params);
                    sendParams += '&t=' + (+new Date); //加上时间戳，防止缓存

                    url = url.indexOf('?') > -1 ?
                    url + '&' + sendParams :
                    url + '?' + sendParams;
                    this.sendLog(url);
                };
            })(),
            /**
             * 打点函数
             * @param {Object} params
             * @param {string} params.element 点击元素，以CSS选择符方式命名
             * @param {String} type
             */
            log: function (params, type) {
                type = type || 'click';

                var url = config[type + 'Url'];
                if (!url) {
                    alert('Error : the ' + type + 'url does not exist!');
                }
                if (type === 'track') {
                    var paramsTrack = this.data.getTrack();
                    params = ObjectH.mix(paramsTrack, params, true);
                }
                this.buildLog(params, url);
            },

            setConf: function (key, val) {
                var newConfig = {};
                if (!ObjectH.isObject(key)) {
                    newConfig[key] = val;
                } else {
                    newConfig = key;
                }

                this.config = ObjectH.mix(this.config, newConfig, true);
                return this;
            },

            setUrl: function (url) {
                if (url) {
                    this.util.getLocation = function () {
                        return url;
                    };
                }
                return this;
            },

            setProject: function (prj) {
                if (prj) {
                    this.util.getProject = function () {
                        return prj;
                    };
                }
                return this;
            },

            setId: function () {
                var areaIds = [], i = 0, argument;

                while (argument = arguments[i++]) {
                    if (!ObjectH.isArray(argument)) {
                        areaIds.push(argument);
                    } else {
                        areaIds = areaIds.concat(argument);
                    }
                }

                this.setConf('areaIds', areaIds);
                return this;
            },

            getTrack: function () {
                var params = this.data.getTrack();
                this.log(params, 'track');
                return this;
            },

            getClickAndKeydown: function () {
                var that = this;
                NodeH.on(doc, 'mousedown', function (e) {
                    var params = that.data.getClick(e);
                    that.log(params, 'click');
                });

                /*NodeH.on(doc, 'keydown', function (e) {
                    var params = that.data.getKeydown(e);
                    that.log(params, 'click');
                });*/

                MIWIFI_MONITOR.getClickAndKeydown = function () {
                    return that;
                };

                return this;
            }
        };
    })(window);

    //默认URL配置，并启用鼠标点击和按键统计
    MIWIFI_MONITOR.setConf({
        trackUrl: 'http://api.miwifi.com/res_stat/track.gif',
        clickUrl: 'http://api.miwifi.com/res_stat/click.gif',
        wpoUrl: ''
    });

    window.MIWIFI_MONITOR = MIWIFI_MONITOR;

    if (typeof window.monitor === 'undefined') {
        window.monitor = MIWIFI_MONITOR;
    }
})();