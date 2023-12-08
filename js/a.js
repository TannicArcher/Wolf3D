// Analitics Bullshit Emulator
// Sadfully needed to start the game!

(function () {
    var aa = encodeURIComponent,
        f = window,
        ba = setTimeout,
        n = Math,
        ea = RegExp;

    function fa(a, b) {}
    var p = "push",
        h = "hash",
        ha = "slice",
        q = "data",
        r = "cookie",
        t = "indexOf",
        m = "match",
        ia = "defaultValue",
        ja = "port",
        u = "createElement",
        v = "name",
        da = "getTime",
        x = "host",
        y = "length",
        z = "prototype",
        la = "clientWidth",
        A = "split",
        B = "location",
        ma = "hostname",
        ga = "search",
        C = "call",
        E = "protocol",
        na = "clientHeight",
        Ab = "href",
        F = "substring",
        G = "apply",
        oa = "navigator",
        Ub = "parentNode",
        H = "join",
        I = "toLowerCase";
    var pa = new function () {};

    function J(a) {    };

    function K(a) {   }

    function qa(a) {}

    function ra() {}

    function Ca(a) {}

    function L() {}

    function sa(a) {}

    function ka(a) {   }
    var ta = function (a, b, c, d) {};

    function vc(a, b) {}

    function eb() {    }

    function va(a) {    }

    function wa(a, b) {    };
    var N = function () {    };
    N[z].set = function (a, b, c) {    };
    N[z].get = function (a) {    };
    N[z].map = function (a) {   };
    var O = f,
        M = document,
        xa = function (a) {}, 
		fb = function (a) {}, 
		ya = function (a) {}, 
		zc = function (a, b, c, d, e, g) {}, 
		za = ea(),Aa = ea();
    var oc = function () {}, 
	    Da = function (a) {}, Ea = function (a) {}, Ga = function (a, b) {}, wc = function (a, b) {
            var c = Ca(oc() + "" + a);
            c.onload = c.onerror = function () { }}, xc = function (a, b) {}, 
		Fa = function (a, b) {};
    var Ha = function () { };
    Ha[z].add = function (a) { };
    Ha[z].execute = function (a) { };

    function Ja(a) {
    }

    function Ma(a) {
    }

    function Oa() {    }

    function Pa(a) {   }

    function Sa(a) {    }

    function Hc(a) {   }

    function cd() {    };

    function Ta(a) {};
    var Ya = function () { }, Qa = new N,
        Za = [];
    Ya[z].get = function (a) {  };
    var P = function (a, b) { }, R = function (a, b) { };
    Ya[z].set = function (a, b, c) { };
    var ab = function (a, b, c, d) {}, bb = function (a, b, c, d, e) { }, $a = function (a) {}, yc = function (a) {        }, S = function (a, b, c, d, e) {}, cb = function (a, b) {}, T = function (a, b, c) {}, db = function () {};
    var Pc;
    var gb = Pc || "ga",
        Ba = !1,
        hb = T("apiVersion", "v"),
        ib = T("clientVersion", "_v");
    S("anonymizeIp", "aip");
    var jb = S("adSenseId", "a"),
        Va = S("hitType", "t"),
        Ia = S("hitCallback"),
        Ra = S("hitPayload");
    S("nonInteraction", "ni");
    S("currencyCode", "cu");
    S("sessionControl", "sc", "");
    S("queueTime", "qt");
    var Ac = S("_s", "_s");
    S("description", "cd");
    var kb = S("location", "dl", ""),
        lb = S("referrer", "dr"),
        mb = S("page", "dp", "");
    S("hostname", "dh");
    var nb = S("language", "ul"),
        ob = S("encoding", "de");
    S("title", "dt", function () {
        return M.title || void 0
    });
    cb("contentGroup([0-9]+)", function (a) {
        return new bb(a[0], "cg" + a[1])
    });
    var pb = S("screenColors", "sd"),
        qb = S("screenResolution", "sr"),
        rb = S("viewportSize", "vp"),
        sb = S("javaEnabled", "je"),
        tb = S("flashVersion", "fl");
    S("campaignId", "ci");
    S("campaignName", "cn");
    S("campaignSource", "cs");
    S("campaignMedium", "cm");
    S("campaignKeyword", "ck");
    S("campaignContent", "cc");
    var ub = S("eventCategory", "ec"),
        xb = S("eventAction", "ea"),
        yb = S("eventLabel", "el"),
        zb = S("eventValue", "ev"),
        Bb = S("socialNetwork", "sn"),
        Cb = S("socialAction", "sa"),
        Db = S("socialTarget", "st"),
        Eb = S("l1", "plt"),
        Fb = S("l2", "pdt"),
        Gb = S("l3", "dns"),
        Hb = S("l4", "rrt"),
        Ib = S("l5", "srt"),
        Jb = S("l6", "tcp"),
        Kb = S("l7", "dit"),
        Lb = S("l8", "clt"),
        Mb = S("timingCategory", "utc"),
        Nb = S("timingVar", "utv"),
        Ob = S("timingLabel", "utl"),
        Pb = S("timingValue", "utt");
    S("appName", "an");
    S("appVersion", "av", "");
    S("appId", "aid", "");
    S("appInstallerId", "aiid", "");
    S("exDescription", "exd");
    S("exFatal", "exf");
    var Nc = S("expId", "xid"),
        Oc = S("expVar", "xvar"),
        Rc = S("_utma", "_utma"),
        Sc = S("_utmz", "_utmz"),
        Tc = S("_utmht", "_utmht"),
        Ua = S("_hc", void 0, 0),
        Xa = S("_ti", void 0, 0),
        Wa = S("_to", void 0, 20);
    var Qb = T("oot"),
        dd = S("previewTask"),
        Rb = S("checkProtocolTask"),
        Sb = S("checkStorageTask"),
        Uc = S("historyImportTask"),
        Tb = S("samplerTask"),
        Vb = T("rateLimiterTask"),
        Wb = S("buildHitTask"),
        Xb = S("sendHitTask"),
        Vc = S("ceTask"),
        V = T("name"),
        Q = T("clientId", "cid"),
        Na = T("trackingId", "tid"),
        U = T("cookieName", void 0, "_ga"),
        W = T("cookieDomain"),
        Yb = T("cookiePath", void 0, "/"),
        Zb = T("cookieExpires", void 0, 63072E3),
        $b = T("legacyCookieDomain"),
        Wc = T("legacyHistoryImport", void 0, !0),
        ac = T("storage", void 0, "cookie"),
        bc = T("allowLinker", void 0, !1),
        cc = T("allowAnchor", void 0, !0),
        Ka = T("sampleRate", "sf", 100),
        dc = T("siteSpeedSampleRate", void 0, 1),
        ec = T("alwaysSendReferrer", void 0, !1);

    function Cc() {
        var a = $;
        X("create", a, a.create, 3);
        X("getByName", a, a.j, 5);
        X("getAll", a, a.K, 6);
        a = pc[z];
        X("get", a, a.get, 7);
        X("set", a, a.set, 4);
        X("send", a, a.send, 2);
        a = Ya[z];
        X("get", a, a.get);
        X("set", a, a.set);
        (O.gaplugins = O.gaplugins || {}).Linker = Dc;
        a = Dc[z];
        Z.C("linker", Dc);
        X("decorate", a, a.Q, 20);
        X("autoLink", a, a.S, 25);
        Z.C("displayfeatures", fd)
    }

    function X(a, b, c, d) { };

    function fc() {};
    var gc = function (a, b) {  };
    var hc = !1,
        mc = function (a) { };

    function Xc(a, b, c) { };

    function Bc(a) {
        a = a.get(Q);
        var b = Ic(a, 0);
        return "_ga=1." + sa(b + "." + a)
    }

    function Ic(a, b) {}
    var Dc = function (a) { };
    Dc[z].Q = function (a, b) { };
    Dc[z].S = function (a, b) { };

    function $c() { };
    var ad, bd = function (a, b, c) {
            if(!ad) {}
        };
    var pc = function (a) {  };
    pc[z].get = function (a) {
        return this.b.get(a)
    };
    pc[z].set = function (a, b) {
        this.b.set(a, b)
    };
    var qc = {
        pageview: [mb],
        event: [ub, xb, yb, zb],
        social: [Bb, Cb, Db],
        timing: [Mb, Nb, Pb, Ob]
    };
    pc[z].send = function (a) {};
    var Lc = function (a) {
        a.I || (a.I = !0, gc(a.b, function (b) {}))
    };
    var rc = function (a) {}, Mc = function (a) {c = function () {}};
    var Z = {};
    Z.k = new N;
    Z.f = [];
    var sc = function (a) {    };
    Z.B = function (a, b, c) {    };
    Z.C = function (a, b) {    };
    Z.execute = function (a) { };
    Z.J = function (a) {   };
    Z.v = function (a) {    };
    function tc(a) {    };
    var $ = function (a) {   };
    $.h = {};
    $.P = [];
    $.L = 0;
    $.answer = 42;
    var uc = [Na, W, V];
    $.create = function (a) { };
    $.j = function (a) {  };
    $.K = function () { };
    $.N = function () {
        var a = O[gb];
        if(!a || 42 != a.answer) {
            $.L = a && a.l;
            $.loaded = !0;
            O[gb] = $;
            Cc();
            var b = a && a.q;
            "[object Array]" == Object[z].toString[C](Object(b)) && Mc(function () {})
        }
    };
    $.N();
})(window);

// Analitics Bullshit Ends