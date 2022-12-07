(window.webpackJsonp = window.webpackJsonp || []).push([
    [44, 15, 16, 17, 19, 21, 22], {
        324: function(t, e, r) {
            "use strict";
            r.r(e);
            var l = {
                    props: ["mobile", "jpg", "webp"],
                    mounted: function() {}
                },
                n = r(15),
                component = Object(n.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("picture", [t.mobile ? [r("source", {
                        attrs: {
                            "data-srcset": t.mobile + " 400w, " + t.jpg + " 1x",
                            type: "image/jpg"
                        }
                    })] : [r("source", {
                        attrs: {
                            "data-srcset": t.jpg + " 1x",
                            type: "image/jpg"
                        }
                    })], r("img", {
                        staticClass: "lazyload",
                        attrs: {
                            "data-src": t.jpg,
                            width: "100%",
                            height: "100%",
                            alt: "#"
                        }
                    })], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        325: function(t, e, r) {
            "use strict";
            r.r(e);
            var l = {
                    props: ["headers"]
                },
                n = r(15),
                component = Object(n.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("header", {
                        staticClass: "headers",
                        attrs: {
                            "data-id": t.headers.id,
                            "data-transtitle": t.headers.title_transition
                        }
                    }, [r("div", {
                        staticClass: "headers__hold"
                    }, [r("div", {
                        staticClass: "headers__texts"
                    }, [r("div", {
                        staticClass: "headers__subt wrap"
                    }, [r("span", {
                        staticClass: "wrapped"
                    }, [t._v(t._s(t.headers.subt))])]), r("div", {
                        staticClass: "headers__title"
                    }, [r("h1", {
                        staticClass: "wrap"
                    }, [r("span", {
                        staticClass: "wrapped"
                    }, [t._v(t._s(t.headers.title_page_1))])]), r("h1", {
                        staticClass: "wrap"
                    }, [r("span", {
                        staticClass: "wrapped"
                    }, [t._v(t._s(t.headers.title_page_2))])])])])])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        326: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return _
            }));
            r(27);
            var l = r(5),
                n = r(6),
                o = r(2),
                c = (r(100), r(169), r(99), r(33)),
                d = new(function() {
                    function t() {
                        Object(l.a)(this, t)
                    }
                    return Object(n.a)(t, [{
                        key: "init",
                        value: function(t, e) {
                            this.body = document.querySelector("body"), this.DOM = e, this.isPage = t
                        }
                    }, {
                        key: "beforeEnter",
                        value: function(t, e) {
                            c.a.changeName(e), c.a.createText(), t.classList.contains("has-header") && window.innerWidth > 1024 ? o.a.set(t.querySelectorAll(".headers .wrapped"), {
                                yPercent: 101
                            }) : o.a.set(t, {
                                opacity: 0
                            }), "about" == e && window.innerWidth > 1024 && o.a.set(t.querySelector("main"), {
                                opacity: 0
                            })
                        }
                    }, {
                        key: "onEnter",
                        value: function(t, e, r) {
                            c.a.animaBox(t, e, this.isPage, r)
                        }
                    }, {
                        key: "firstEntrance",
                        value: function(t, e, r) {
                            c.a.done(t, r), e()
                        }
                    }]), t
                }()),
                _ = {
                    name: "navigations",
                    appear: !0,
                    css: !1,
                    mode: "in-out",
                    beforeEnter: function(t) {
                        this.from && (document.querySelector("body").classList.contains("dark-page") && document.querySelector("body").classList.remove("dark-page"), document.querySelector("body").classList.add("is-transitioning"), t.classList.add("new-page"), d.beforeEnter(t, this.$route.name)), this.from = this.$route.name
                    },
                    enter: function(t, e) {
                        d.init(this.from, t), document.querySelector("html").classList.contains("not-first") ? d.onEnter(t, e, this.oldpage) : (document.querySelector("html").classList.add("not-first"), d.firstEntrance(t, e, this.from)), this.oldpage = t
                    },
                    leave: function(t, e) {
                        e()
                    },
                    afterLeave: function(t) {
                        document.querySelector(".new-page").classList.add("page-done"), document.querySelector(".new-page").classList.remove("new-page"), document.querySelector("body").classList.remove("is-transitioning")
                    }
                }
        },
        327: function(t, e, r) {
            "use strict";
            r.r(e);
            var l = {
                    props: ["video"],
                    mounted: function() {}
                },
                n = r(15),
                component = Object(n.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("video", {
                        staticClass: "lazyvideo",
                        attrs: {
                            autoplay: "",
                            loop: "",
                            muted: "",
                            playsinline: "",
                            height: "fit-content"
                        },
                        domProps: {
                            muted: !0
                        }
                    }, [r("source", {
                        attrs: {
                            "data-src": t.video,
                            type: "video/mp4"
                        }
                    })])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        333: function(t, e, r) {
            "use strict";
            r.r(e);
            var l = {
                    props: ["postData", "type", "uid"],
                    mounted: function() {}
                },
                n = r(15),
                component = Object(n.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("li", {
                        staticClass: "proj-card",
                        class: [t.postData.coming_soon ? "card-coming-soon" : null]
                    }, [r("div", {
                        staticClass: "proj-card__holder"
                    }, [r("NuxtLink", {
                        staticClass: "proj-card__media",
                        attrs: {
                            to: t.type + "/" + t.uid,
                            title: t.postData.title
                        }
                    }, [t.postData.thumb.url ? [r("AppVideo", {
                        attrs: {
                            video: t.postData.thumb.url
                        }
                    })] : [r("img", {
                        staticClass: "img-load",
                        attrs: {
                            src: t.postData.cover.url,
                            alt: ""
                        }
                    })]], 2), r("div", {
                        staticClass: "proj-card__texts",
                        class: [t.postData.dark_text ? "dark-text" : "white-text"]
                    }, [r("NuxtLink", {
                        staticClass: "proj-card__title",
                        attrs: {
                            to: t.type + "/" + t.uid
                        }
                    }, [r("h1", [t._v(t._s(t.postData.title))])]), r("div", {
                        staticClass: "proj-card__infos"
                    }, [t.postData.coming_soon ? [r("span", {
                        staticClass: "soon"
                    }, [t._v(t._s(t.postData.coming_soon))])] : t._e(), r("span", {
                        staticClass: "cat"
                    }, [t._v(t._s(t.postData.category))]), r("span", {
                        staticClass: "role"
                    }, [t._v(t._s(t.postData.role))])], 2)], 1), r("PrimaryButton", {
                        attrs: {
                            link: t.type + "/" + t.uid,
                            text: "SEE " + t.type,
                            version: "color"
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                AppVideo: r(327).default,
                PrimaryButton: r(167).default
            })
        },
        335: function(t, e, r) {
            "use strict";
            var l = r(12),
                n = r(129).charAt;
            l({
                target: "String",
                proto: !0,
                forced: r(13)((function() {
                    return "𠮷" !== "𠮷".at(0)
                }))
            }, {
                at: function(t) {
                    return n(this, t)
                }
            })
        },
        337: function(t, e, r) {
            "use strict";
            r.r(e);
            var l = {
                    props: ["subt", "text", "title", "parag", "numb", "btn", "link"]
                },
                n = r(15),
                component = Object(n.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("section", {
                        staticClass: "descriptions"
                    }, [r("div", {
                        staticClass: "descriptions__hold e-hold-border"
                    }, [r("div", {
                        staticClass: "descriptions__header"
                    }, [r("div", {
                        staticClass: "descriptions__header__subt e-flex"
                    }, [r("div", {
                        staticClass: "descriptions__header__subt__bg e-color"
                    }), r("span", {
                        staticClass: "t-soft"
                    }, [t._v(t._s(t.subt))])]), r("h1", {
                        staticClass: "t-sansbold"
                    }, [t._v(t._s(t.text))])]), r("div", {
                        staticClass: "descriptions__texts e-flex-desk"
                    }, [r("div", {
                        staticClass: "descriptions__texts__subt no-mobile"
                    }, [r("div", {
                        staticClass: "descriptions__index"
                    }, [r("svg", {
                        staticClass: "circle-svg",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("circle", {
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--lineColor)",
                            pathLength: "1"
                        }
                    })]), t._v(" "), r("span", [t._v(t._s(t.numb))])]), r("h1", {
                        staticClass: "t-sansbold"
                    }, [t._v(t._s(t.title))])]), r("prismic-rich-text", {
                        staticClass: "rich-t subt-p descriptions__parag",
                        attrs: {
                            field: t.parag
                        }
                    }), r("PrimaryButton", {
                        attrs: {
                            link: t.link,
                            text: t.btn,
                            version: "color"
                        }
                    })], 1)])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                PrimaryButton: r(167).default
            })
        },
        361: function(t, e, r) {
            "use strict";
            r.r(e);
            var l = r(15),
                component = Object(l.a)({}, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("svg", {
                        attrs: {
                            version: "1.1",
                            id: "diag-exp",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 592.2 568",
                            "enable-background": "new 0 0 592.2 568",
                            "xml:space": "preserve"
                        }
                    }, [r("circle", {
                        attrs: {
                            id: "circ_dev",
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "3",
                            "stroke-miterlimit": "10",
                            cx: "297.7",
                            cy: "189.5",
                            r: "188"
                        }
                    }), t._v(" "), r("circle", {
                        attrs: {
                            id: "circ_visuals",
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "3",
                            "stroke-miterlimit": "10",
                            cx: "189.5",
                            cy: "377.5",
                            r: "188"
                        }
                    }), t._v(" "), r("circle", {
                        attrs: {
                            id: "circ_tech",
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "3",
                            "stroke-miterlimit": "10",
                            cx: "402.7",
                            cy: "378.5",
                            r: "188"
                        }
                    }), t._v(" "), r("text", {
                        staticClass: "text-dev",
                        attrs: {
                            transform: "matrix(1 0 0 1 243.667 132.9365)",
                            fill: "var(--color)",
                            "font-family": "'var(--sansbold)",
                            "font-size": "15.8457px"
                        }
                    }, [t._v("DEVELOPMENT")]), t._v(" "), r("text", {
                        staticClass: "text-visuals",
                        attrs: {
                            transform: "matrix(1 0 0 1 82.8306 399.2734)",
                            fill: "var(--color)",
                            "font-family": "'var(--sansbold)",
                            "font-size": "15.8457px"
                        }
                    }, [t._v("VISUALS")]), t._v(" "), r("text", {
                        staticClass: "text-tech",
                        attrs: {
                            transform: "matrix(1 0 0 1 421.3887 399.2734)",
                            fill: "var(--color)",
                            "font-family": "'var(--sansbold)",
                            "font-size": "15.8457px"
                        }
                    }, [t._v("TECHNOLOGIES")]), t._v(" "), r("g", {
                        attrs: {
                            id: "group_lines"
                        }
                    }, [r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            x1: "229.8",
                            y1: "306.5",
                            x2: "306.1",
                            y2: "230.2"
                        }
                    }), t._v(" "), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            x1: "218.7",
                            y1: "343.7",
                            x2: "320.2",
                            y2: "242.2"
                        }
                    }), t._v(" "), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            x1: "226.2",
                            y1: "362.4",
                            x2: "333.1",
                            y2: "255.6"
                        }
                    }), t._v(" "), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            x1: "245.5",
                            y1: "369.3",
                            x2: "344.6",
                            y2: "270.2"
                        }
                    }), t._v(" "), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            x1: "266.9",
                            y1: "374.1",
                            x2: "354.8",
                            y2: "286.2"
                        }
                    }), t._v(" "), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            x1: "290.6",
                            y1: "376.5",
                            x2: "363.5",
                            y2: "303.6"
                        }
                    }), t._v(" "), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            x1: "317.7",
                            y1: "375.6",
                            x2: "370.6",
                            y2: "322.8"
                        }
                    }), t._v(" "), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            x1: "375.7",
                            y1: "343.8",
                            x2: "350.4",
                            y2: "369.1"
                        }
                    })]), t._v(" "), r("rect", {
                        attrs: {
                            id: "trg_dev",
                            x: "229.7",
                            y: "109.5",
                            opacity: "0",
                            fill: "transparent",
                            "enable-background": "new",
                            width: "136",
                            height: "38"
                        }
                    }), t._v(" "), r("rect", {
                        attrs: {
                            id: "trg_visuals",
                            x: "46.7",
                            y: "376.5",
                            opacity: "0",
                            fill: "transparent",
                            "enable-background": "new",
                            width: "136",
                            height: "38"
                        }
                    }), t._v(" "), r("rect", {
                        attrs: {
                            id: "trg_tech",
                            x: "411.7",
                            y: "376.5",
                            opacity: "0",
                            fill: "transparent",
                            "enable-background": "new",
                            width: "136",
                            height: "38"
                        }
                    })])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        403: function(t, e, r) {
            "use strict";
            r.r(e);
            var l = r(14);
            r(43), r(335), r(39), r(22), r(27), r(74), r(46), r(45), r(75), r(76), r(44);

            function n(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return o(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var i = 0,
                            l = function() {};
                        return {
                            s: l,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: l
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, c = !0,
                    d = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        d = !0, n = t
                    },
                    f: function() {
                        try {
                            c || null == r.return || r.return()
                        } finally {
                            if (d) throw n
                        }
                    }
                }
            }

            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
                return r
            }
            var c = {
                    head: function() {
                        return {
                            title: "Home | Victor Work"
                        }
                    },
                    asyncData: function(t) {
                        return Object(l.a)(regeneratorRuntime.mark((function e() {
                            var r, l, data, o, c, d, _, x, m, v, k, y;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.$prismic, t.params, t.error, e.next = 3, r.api.getSingle("homepage");
                                    case 3:
                                        return l = e.sent, data = l.data, e.next = 7, r.api.query(r.predicates.at("document.type", "project"));
                                    case 7:
                                        return o = e.sent.results, e.next = 10, r.api.getSingle("recognitions");
                                    case 10:
                                        c = e.sent, d = c.data, _ = data.projects_group, x = [], 0, m = n(_), e.prev = 16, m.s();
                                    case 18:
                                        if ((v = m.n()).done) {
                                            e.next = 26;
                                            break
                                        }
                                        return k = v.value, e.next = 22, r.api.getByUID("project", "" + k.project.uid);
                                    case 22:
                                        y = e.sent, x.push(y);
                                    case 24:
                                        e.next = 18;
                                        break;
                                    case 26:
                                        e.next = 31;
                                        break;
                                    case 28:
                                        e.prev = 28, e.t0 = e.catch(16), m.e(e.t0);
                                    case 31:
                                        return e.prev = 31, m.f(), e.finish(31);
                                    case 34:
                                        return e.abrupt("return", {
                                            data: data,
                                            recog_data: d,
                                            projects: o,
                                            cases_feat: x
                                        });
                                    case 35:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [16, 28, 31, 34]
                            ])
                        })))()
                    },
                    mounted: function() {},
                    transition: r(326).a
                },
                d = r(15),
                component = Object(d.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "page page-index page-home has-header",
                        attrs: {
                            "data-scroll-content": "",
                            "data-page": "index"
                        }
                    }, [r("Headers", {
                        staticClass: "e-dn",
                        attrs: {
                            headers: ""
                        }
                    }), r("header", {
                        staticClass: "header-home headers has-header"
                    }, [r("div", {
                        staticClass: "header-home__hold e-hold"
                    }, [r("div", {
                        staticClass: "header-home__title"
                    }, [r("h1", {
                        staticClass: "t-title t-color victor wrap"
                    }, [r("div", {
                        staticClass: "t-color wrapped"
                    }, [t._v(t._s(t.data.victor_title))])]), r("h1", {
                        staticClass: "t-title t-color work wrap"
                    }, [r("div", {
                        staticClass: "t-color wrapped"
                    }, [t._v(t._s(t.data.work_title))])])]), r("div", {
                        staticClass: "header-home__subt wrap"
                    }, [r("h1", {
                        staticClass: "t-sansbold wrapped"
                    }, [t._v(t._s(t.data.header_subt))])]), r("div", {
                        staticClass: "header-home__captions e-flex"
                    }, [r("ul", {
                        staticClass: "header-home__captions__group"
                    }, t._l(t.data.header_group1, (function(e) {
                        return r("li", {
                            staticClass: "wrap"
                        }, [r("span", {
                            staticClass: "wrapped"
                        }, [t._v(t._s(e.item))])])
                    })), 0), r("ul", {
                        staticClass: "header-home__captions__group"
                    }, t._l(t.data.header_group2, (function(e) {
                        return r("li", {
                            staticClass: "wrap"
                        }, [r("span", {
                            staticClass: "wrapped"
                        }, [t._v(t._s(e.item))])])
                    })), 0), r("ul", {
                        staticClass: "header-home__captions__group"
                    }, t._l(t.data.header_group3, (function(e) {
                        return r("li", {
                            staticClass: "wrap"
                        }, [r("span", {
                            staticClass: "wrapped"
                        }, [t._v(t._s(e.item))])])
                    })), 0), r("ul", {
                        staticClass: "header-home__captions__group"
                    }, t._l(t.data.header_group4, (function(e) {
                        return r("li", {
                            staticClass: "wrap"
                        }, [r("span", {
                            staticClass: "wrapped"
                        }, [t._v(t._s(e.item))])])
                    })), 0)])])]), r("main", {
                        staticClass: "main-home"
                    }, [t._l(t.$store.state.data_global.body, (function(e) {
                        return "vw" == e.primary.id ? [r("TitleSections", {
                            staticClass: "js-full-exp",
                            attrs: {
                                data: e.primary
                            }
                        })] : t._e()
                    })), r("DescrComp", {
                        staticClass: "js-full-exp",
                        attrs: {
                            subt: t.data.rel_subt,
                            text: t.data.rel_text,
                            title: t.data.rel_title,
                            parag: t.data.rel_parag,
                            numb: 1,
                            btn: t.data.rel_btn,
                            link: t.data.rel_link
                        }
                    }), r("section", {
                        staticClass: "section-display js-full-exp"
                    }, [r("div", {
                        staticClass: "section-display__hold e-rel"
                    }, [r("ul", {
                        staticClass: "section-display__imgs"
                    }, [r("li", {
                        staticClass: "each__img"
                    }, [r("AppImage", {
                        attrs: {
                            mobile: t.data.display_img.mobile.url,
                            jpg: t.data.display_img.url,
                            webp: t.data.display_img.url
                        }
                    })], 1), r("li", {
                        staticClass: "each__img"
                    }, [r("AppImage", {
                        attrs: {
                            mobile: t.data.display_img2.mobile.url,
                            jpg: t.data.display_img2.url,
                            webp: t.data.display_img2.url
                        }
                    })], 1), r("li", {
                        staticClass: "each__img"
                    }, [r("AppImage", {
                        attrs: {
                            mobile: t.data.display_img3.mobile.url,
                            jpg: t.data.display_img3.url,
                            webp: t.data.display_img3.url
                        }
                    })], 1), r("li", {
                        staticClass: "each__img"
                    }, [r("AppImage", {
                        attrs: {
                            mobile: t.data.display_img4.mobile.url,
                            jpg: t.data.display_img4.url,
                            webp: t.data.display_img4.url
                        }
                    })], 1), r("li", {
                        staticClass: "each__img"
                    }, [r("AppImage", {
                        attrs: {
                            mobile: t.data.display_img5.mobile.url,
                            jpg: t.data.display_img5.url,
                            webp: t.data.display_img5.url
                        }
                    })], 1), r("li", {
                        staticClass: "each__img"
                    }, [r("AppImage", {
                        attrs: {
                            mobile: t.data.display_img6.mobile.url,
                            jpg: t.data.display_img6.url,
                            webp: t.data.display_img6.url
                        }
                    })], 1)]), r("div", {
                        staticClass: "section-display__content e-flex-col e-rel"
                    }, [r("h1", {
                        staticClass: "t-title t-color"
                    }, [t._v(t._s(t.data.display_title))]), r("p", {
                        staticClass: "t-center"
                    }, [t._v(t._s(t.data.display_text))]), r("PrimaryButton", {
                        attrs: {
                            text: t.data.display_btn,
                            link: t.data.display_link,
                            version: "dark"
                        }
                    })], 1)])]), r("section", {
                        staticClass: "section-plxvid e-flex-col semi-corner js-full-exp"
                    }, [r("div", {
                        staticClass: "section-plxvid__img el-plx"
                    }, [r("AppImage", {
                        attrs: {
                            mobile: t.data.plx_vid_img.mobile.url,
                            jpg: t.data.plx_vid_img.url,
                            webp: t.data.plx_vid_img.url
                        }
                    })], 1), r("div", {
                        staticClass: "section-plxvid__texts e-flex-col e-wp"
                    }, [r("div", {
                        staticClass: "section-plxvid__texts__hold e-flex-col"
                    }, [r("NuxtLink", {
                        staticClass: "section-plxvid__texts__bg opac-video",
                        attrs: {
                            to: t.data.plx_vid_link,
                            title: t.data.plx_vid_text
                        }
                    }, [r("AppVideo", {
                        attrs: {
                            video: t.data.plx_vid_vid.url
                        }
                    })], 1)], 1)]), r("NuxtLink", {
                        staticClass: "section-plxvid__captions t-sansbold e-abs e-upper",
                        attrs: {
                            to: "/lifestyle",
                            title: "SEE STORIES"
                        }
                    }, [t._v(t._s(t.data.plx_vid_text))]), r("PrimaryButton", {
                        attrs: {
                            link: t.data.plx_vid_link,
                            text: "SEE STORIES",
                            version: "color"
                        }
                    })], 1), r("section", {
                        staticClass: "section-values js-full-exp"
                    }, [r("ul", {
                        staticClass: "section-values__hold e-flex-col"
                    }, t._l(t.data.values_group, (function(e) {
                        return r("li", {
                            staticClass: "section-values__each"
                        }, [r("AppImage", {
                            attrs: {
                                mobile: e.img.mobile.url,
                                jpg: e.img.url,
                                webp: e.img.url
                            }
                        }), r("span", {
                            staticClass: "t-title"
                        }, [t._v(t._s(e.text1))]), r("span", {
                            staticClass: "t-title"
                        }, [t._v(t._s(e.text2))])], 1)
                    })), 0)]), t._m(0), t._l(t.$store.state.data_global.body, (function(e) {
                        return "projects" == e.primary.id ? [r("TitleSections", {
                            attrs: {
                                data: e.primary
                            }
                        })] : t._e()
                    })), r("DescrComp", {
                        attrs: {
                            subt: t.data.proj_subt,
                            text: t.data.proj_text,
                            title: t.data.proj_title,
                            parag: t.data.proj_parag,
                            numb: t.data.proj_numb,
                            btn: t.data.proj_btn,
                            link: t.data.proj_link
                        }
                    }), r("section", {
                        staticClass: "projects"
                    }, [r("ul", {
                        staticClass: "projects__hold e-hold"
                    }, [t._l(t.cases_feat, (function(t, e) {
                        return [r("CardProject", {
                            attrs: {
                                postData: t.data,
                                type: t.type,
                                uid: t.uid
                            }
                        })]
                    }))], 2)]), r("section", {
                        staticClass: "recog"
                    }, [r("div", {
                        staticClass: "recog__hold e-hold e-flex-desk"
                    }, [r("div", {
                        staticClass: "recog__info section-info"
                    }, [r("h1", {
                        staticClass: "t-title t-color"
                    }, [t._v(t._s(t.data.prop_title))]), r("prismic-rich-text", {
                        staticClass: "rich-t subt-p",
                        attrs: {
                            field: t.data.prop_parag
                        }
                    })], 1), r("ul", {
                        staticClass: "recog__content section-content"
                    }, [t._l(t.data.prop_group, (function(e) {
                        return r("li", {
                            staticClass: "items__each"
                        }, [r("span", {
                            staticClass: "t-sansbold"
                        }, [t._v(t._s(e.item))]), r("span", [t._v(t._s(e.text))])])
                    })), r("li", {
                        staticClass: "recog__img e-rel"
                    }, [t._l(t.data.prop_imgs, (function(t) {
                        return [r("AppImage", {
                            attrs: {
                                mobile: t.img.mobile.url,
                                jpg: t.img.url,
                                webp: t.img.url
                            }
                        })]
                    })), r("div", {
                        staticClass: "recog__img__links e-flex"
                    }, [r("a", {
                        staticClass: "t-sansbold lined hvr-color",
                        attrs: {
                            href: t.data.prop_link1
                        }
                    }, [t._v(t._s(t.data.prop_linktit1))]), r("a", {
                        staticClass: "lined hvr-color",
                        attrs: {
                            href: t.data.prop_link2
                        }
                    }, [t._v(t._s(t.data.prop_linktit2))])])], 2)], 2), r("div", {
                        staticClass: "recog__stop"
                    })])]), r("section", {
                        staticClass: "awards"
                    }, [r("div", {
                        staticClass: "awards__hold e-hold-border"
                    }, [r("div", {
                        staticClass: "awards__title"
                    }, [t.recog_data.awards_group.length < 99 ? [r("h1", {
                        staticClass: "t-title t-color e-flex"
                    }, [t._v(t._s(t.recog_data.awards_group.length) + "+")])] : [r("h1", {
                        staticClass: "t-title t-color e-flex"
                    }, [t._v("99+")])], r("h2", {
                        staticClass: "t-sansbold"
                    }, [t._v(t._s(t.recog_data.awards_subtitle))]), r("prismic-rich-text", {
                        staticClass: "rich-t subt-p",
                        attrs: {
                            field: t.recog_data.awards_descr
                        }
                    })], 2), r("div", {
                        staticClass: "awards__group"
                    }, [r("span", {
                        staticClass: "t-sansbold"
                    }, [t._v(t._s(t.recog_data.award_title_list))]), r("ul", {
                        staticClass: "awards__list"
                    }, t._l(t.recog_data.awards_group, (function(e) {
                        return e.featured ? r("li", {
                            staticClass: "awards__each"
                        }, [r("a", {
                            staticClass: "project t-boldsans",
                            attrs: {
                                href: e.link,
                                title: e.platform,
                                rel: "noreferrer",
                                target: "_blank"
                            }
                        }, [t._v(t._s(e.project))]), r("span", {
                            staticClass: "t-boldsans award"
                        }, [t._v(t._s(e.award))]), r("span", {
                            staticClass: "t-boldsans platform"
                        }, [t._v(t._s(e.platform))]), r("span", {
                            staticClass: "t-boldsans year no-mobile"
                        }, [t._v(t._s(e.year))])]) : t._e()
                    })), 0), r("PrimaryButton", {
                        attrs: {
                            link: "/recognitions",
                            text: t.recog_data.awards_see_all,
                            version: "color"
                        }
                    })], 1)])]), r("section", {
                        staticClass: "expertise"
                    }, [r("div", {
                        staticClass: "expertise__hold e-hold e-flex-desk e-hold-border"
                    }, [r("div", {
                        staticClass: "expertise__title e-flex-col"
                    }, [r("div", {
                        staticClass: "expertise__title__h1"
                    }, [r("h1", {
                        staticClass: "t-title t-color"
                    }, [t._v(t._s(t.data.exp_title))])]), r("div", {
                        staticClass: "expertise__parags e-flex-col"
                    }, [r("ul", {
                        staticClass: "expertise__parags__list"
                    }, t._l(t.data.exp_group, (function(e) {
                        return r("li", {
                            staticClass: "expertise__parag__each"
                        }, [r("p", [t._v(t._s(e.text))])])
                    })), 0), r("PrimaryButton", {
                        attrs: {
                            link: t.data.see_all_exp,
                            text: t.data.btn_seeall_exp,
                            version: "color"
                        }
                    })], 1)]), r("div", {
                        staticClass: "expertise__svg e-flex-col"
                    }, [r("Diag"), t._m(1)], 1)])]), t._l(t.$store.state.data_global.body, (function(e) {
                        return "animations" == e.primary.id ? [r("TitleSections", {
                            attrs: {
                                data: e.primary
                            }
                        })] : t._e()
                    })), r("DescrComp", {
                        attrs: {
                            subt: t.data.anima_subt,
                            text: t.data.anima_text,
                            title: t.data.anima_title,
                            parag: t.data.anima_parag,
                            numb: t.data.anima_numb
                        }
                    }), r("section", {
                        staticClass: "anima-interac"
                    }, [r("div", {
                        staticClass: "anima-interac__hold e-flex-col"
                    }, [r("div", {
                        staticClass: "anima-interac__arc"
                    }, [r("div", {
                        staticClass: "anima-interac__arc__hold e-rel e-flex"
                    }, [r("svg", {
                        attrs: {
                            width: "125vw",
                            viewBox: "0 0 1895 218",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            id: "path",
                            d: "M1 217.5C1 217.5 312 1 947.75 1C1583.5 1 1894.5 217.5 1894.5 217.5",
                            stroke: "var(--lineColor)"
                        }
                    })]), t._m(2), t._m(3), t._l(t.data.anima_interac_group, (function(t) {
                        return [r("div", {
                            staticClass: "anima-interac__bullet next-anima"
                        }, [r("div", {
                            staticClass: "bullet-anima"
                        })])]
                    }))], 2)]), r("div", {
                        staticClass: "anima-interac__svgs"
                    }, [t._m(4), r("ul", {
                        staticClass: "anima-interac__svgs__list"
                    }, [r("li", {
                        staticClass: "each-svg"
                    }, [r("svg", {
                        attrs: {
                            width: "100%",
                            id: "ease-svg",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 591.3 599.53",
                            "enable-background": "new 0 0 591.3 599.53",
                            "xml:space": "preserve"
                        }
                    }, [r("g", {
                        attrs: {
                            id: "g1"
                        }
                    }, [r("circle", {
                        attrs: {
                            cx: "295.65",
                            cy: "28.48",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "202.86",
                            cy: "44.84",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "121.27",
                            cy: "91.95",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "60.71",
                            cy: "164.12",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "28.48",
                            cy: "252.66",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "28.48",
                            cy: "346.87",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "60.71",
                            cy: "435.41",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "121.27",
                            cy: "507.58",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "202.86",
                            cy: "554.69",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "295.65",
                            cy: "571.05",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "388.43",
                            cy: "554.69",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "470.03",
                            cy: "507.58",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "530.59",
                            cy: "435.41",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "562.82",
                            cy: "346.87",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "562.82",
                            cy: "252.66",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "530.59",
                            cy: "164.12",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "470.03",
                            cy: "91.95",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "388.43",
                            cy: "44.84",
                            r: "28.48"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "295.65",
                            cy: "28.48",
                            r: "28.48"
                        }
                    })]), r("g", {
                        attrs: {
                            id: "g2"
                        }
                    }, [r("circle", {
                        attrs: {
                            cx: "261.57",
                            cy: "113.05",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "199.77",
                            cy: "135.97",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "149.53",
                            cy: "178.64",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "116.92",
                            cy: "235.92",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "105.86",
                            cy: "300.9",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "117.69",
                            cy: "365.74",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "150.99",
                            cy: "422.63",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "201.74",
                            cy: "464.7",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "263.81",
                            cy: "486.87",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "329.72",
                            cy: "486.48",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "391.53",
                            cy: "463.56",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "441.77",
                            cy: "420.89",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "474.38",
                            cy: "363.61",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "485.44",
                            cy: "298.63",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "473.61",
                            cy: "233.79",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "440.31",
                            cy: "176.9",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "389.56",
                            cy: "134.83",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "327.49",
                            cy: "112.66",
                            r: "19.92"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "261.57",
                            cy: "113.05",
                            r: "19.92"
                        }
                    })]), r("g", {
                        attrs: {
                            id: "g3"
                        }
                    }, [r("circle", {
                        attrs: {
                            cx: "295.87",
                            cy: "178.74",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "254.46",
                            cy: "185.96",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "218.02",
                            cy: "206.91",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "190.94",
                            cy: "239.06",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "176.5",
                            cy: "278.53",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "176.42",
                            cy: "320.57",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "190.73",
                            cy: "360.09",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "217.69",
                            cy: "392.34",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "254.05",
                            cy: "413.42",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "295.43",
                            cy: "420.79",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "336.84",
                            cy: "413.57",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "373.28",
                            cy: "392.62",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "400.35",
                            cy: "360.47",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "414.8",
                            cy: "321",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "414.88",
                            cy: "278.96",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "400.57",
                            cy: "239.44",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "373.61",
                            cy: "207.19",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "337.25",
                            cy: "186.11",
                            r: "12.7"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "295.87",
                            cy: "178.74",
                            r: "12.7"
                        }
                    })]), r("g", {
                        attrs: {
                            id: "g4"
                        }
                    }, [r("circle", {
                        attrs: {
                            cx: "283.83",
                            cy: "237.26",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "263.21",
                            cy: "245.33",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "246.6",
                            cy: "259.96",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "235.99",
                            cy: "279.4",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "232.66",
                            cy: "301.29",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "237.03",
                            cy: "322.99",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "248.55",
                            cy: "341.9",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "265.85",
                            cy: "355.72",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "286.83",
                            cy: "362.8",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "308.96",
                            cy: "362.27",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "329.58",
                            cy: "354.2",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "346.2",
                            cy: "339.57",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "356.81",
                            cy: "320.13",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "360.13",
                            cy: "298.24",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "355.77",
                            cy: "276.54",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "344.24",
                            cy: "257.63",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "326.95",
                            cy: "243.81",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "305.97",
                            cy: "236.74",
                            r: "6.69"
                        }
                    }), r("circle", {
                        attrs: {
                            cx: "283.83",
                            cy: "237.26",
                            r: "6.69"
                        }
                    })])])]), r("li", {
                        staticClass: "each-svg"
                    }, [r("svg", {
                        attrs: {
                            width: "100%",
                            id: "attention-svg",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 607.07 599.38",
                            "enable-background": "new 0 0 607.07 599.38",
                            "xml:space": "preserve"
                        }
                    }, [r("g", {
                        attrs: {
                            id: "large"
                        }
                    }, [r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "359.96",
                            y1: "1.43",
                            x2: "343.9",
                            y2: "86.33"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "247.11",
                            y1: "597.95",
                            x2: "263.18",
                            y2: "513"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "254.54",
                            y1: "0.12",
                            x2: "268.52",
                            y2: "85.59"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "352.52",
                            y1: "599.26",
                            x2: "338.62",
                            y2: "514.25"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "452.03",
                            y1: "564.43",
                            x2: "409.98",
                            y2: "489.47"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "155.04",
                            y1: "34.94",
                            x2: "197.55",
                            y2: "110.74"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "139.42",
                            y1: "158.46",
                            x2: "73.45",
                            y2: "101.7"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "468.63",
                            y1: "441.75",
                            x2: "533.62",
                            y2: "497.68"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "101.11",
                            y1: "223.15",
                            x2: "19.61",
                            y2: "192.33"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "587.46",
                            y1: "407.05",
                            x2: "507.35",
                            y2: "376.76"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "0.01",
                            y1: "295.91",
                            x2: "87.15",
                            y2: "297"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "607.06",
                            y1: "303.46",
                            x2: "521.43",
                            y2: "302.4"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "17.02",
                            y1: "399.95",
                            x2: "99.2",
                            y2: "371.2"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "590.04",
                            y1: "199.42",
                            x2: "509.14",
                            y2: "227.74"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "68.59",
                            y1: "491.9",
                            x2: "135.88",
                            y2: "436.85"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "538.47",
                            y1: "107.48",
                            x2: "471.98",
                            y2: "161.88"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "458.56",
                            y1: "38.72",
                            x2: "414.6",
                            y2: "112.73"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "148.5",
                            y1: "560.66",
                            x2: "192.76",
                            y2: "486.16"
                        }
                    })]), r("g", {
                        attrs: {
                            id: "medium"
                        }
                    }, [r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "303.53",
                            y1: "87.11",
                            x2: "303.53",
                            y2: "184.98"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "303.53",
                            y1: "512.5",
                            x2: "303.53",
                            y2: "414.32"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "230.59",
                            y1: "99.27",
                            x2: "264.21",
                            y2: "191.66"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "376.08",
                            y1: "499.01",
                            x2: "342.65",
                            y2: "407.17"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "439.45",
                            y1: "461.67",
                            x2: "376.9",
                            y2: "387.13"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "166.05",
                            y1: "135.84",
                            x2: "229.51",
                            y2: "211.47"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "203.62",
                            y1: "242.01",
                            x2: "117.85",
                            y2: "192.48"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "402.28",
                            y1: "356.7",
                            x2: "486.3",
                            y2: "405.21"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "92.16",
                            y1: "262.42",
                            x2: "189.87",
                            y2: "279.65"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "511.03",
                            y1: "336.28",
                            x2: "415.7",
                            y2: "319.47"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "189.85",
                            y1: "319.73",
                            x2: "92.07",
                            y2: "336.98"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "511.05",
                            y1: "263.1",
                            x2: "415.74",
                            y2: "279.9"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "203.66",
                            y1: "357.35",
                            x2: "117.79",
                            y2: "406.93"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "486.15",
                            y1: "194.25",
                            x2: "402.28",
                            y2: "242.68"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "229.53",
                            y1: "387.89",
                            x2: "165.92",
                            y2: "463.68"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "439.36",
                            y1: "137.81",
                            x2: "376.95",
                            y2: "212.2"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "230.51",
                            y1: "500.31",
                            x2: "264.24",
                            y2: "407.65"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            x1: "376.01",
                            y1: "100.57",
                            x2: "342.67",
                            y2: "192.15"
                        }
                    })]), r("g", {
                        attrs: {
                            id: "smaller"
                        }
                    }, [r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "260.99",
                            y1: "284.74",
                            x2: "194.73",
                            y2: "261.25"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "295.22",
                            y1: "254.94",
                            x2: "282.6",
                            y2: "186.75"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "245.09",
                            y1: "200.55",
                            x2: "280.49",
                            y2: "260.7"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "268.64",
                            y1: "271.04",
                            x2: "214.54",
                            y2: "226.42"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "322.48",
                            y1: "186.7",
                            x2: "311.1",
                            y2: "254.56"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "417.43",
                            y1: "298.85",
                            x2: "350.14",
                            y2: "299.42"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "359.91",
                            y1: "200.21",
                            x2: "326.26",
                            y2: "259.65"
                        }
                    }), r("path", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            d: "M326.26,259.65"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "410.33",
                            y1: "259.91",
                            x2: "347.12",
                            y2: "283.52"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "390.36",
                            y1: "225.68",
                            x2: "338.79",
                            y2: "269.7"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "361.42",
                            y1: "398.18",
                            x2: "327.02",
                            y2: "339.74"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "410.88",
                            y1: "337.86",
                            x2: "347.45",
                            y2: "315.38"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "339.4",
                            y1: "329.41",
                            x2: "391.46",
                            y2: "372.34"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "311.91",
                            y1: "345.14",
                            x2: "324.34",
                            y2: "412.31"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "284.57",
                            y1: "412.87",
                            x2: "295.94",
                            y2: "345.01"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "258.41",
                            y1: "300.19",
                            x2: "188.11",
                            y2: "300.79"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "261.18",
                            y1: "315.62",
                            x2: "195.49",
                            y2: "340.16"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "281.06",
                            y1: "339.48",
                            x2: "246.9",
                            y2: "399.82"
                        }
                    }), r("line", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-width": "1.5",
                            "stroke-miterlimit": "10",
                            x1: "269.03",
                            y1: "329.25",
                            x2: "215.94",
                            y2: "374.57"
                        }
                    })])])]), r("li", {
                        staticClass: "each-svg"
                    }, [r("svg", {
                        attrs: {
                            width: "100%",
                            id: "immersive-svg",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 607.16 607.16",
                            "enable-background": "new 0 0 607.16 607.16",
                            "xml:space": "preserve"
                        }
                    }, [r("g", {
                        attrs: {
                            id: "big"
                        }
                    }, [r("path", {
                        attrs: {
                            d: "M303.58,1c40.85,0,80.47,8,117.78,23.78c36.03,15.24,68.39,37.06,96.18,64.85c27.79,27.79,49.61,60.15,64.85,96.18c15.78,37.3,23.78,76.93,23.78,117.78s-8,80.47-23.78,117.78c-15.24,36.03-37.06,68.39-64.85,96.18c-27.79,27.79-60.15,49.61-96.18,64.85c-37.3,15.78-76.93,23.78-117.78,23.78s-80.47-8-117.78-23.78c-36.03-15.24-68.39-37.06-96.18-64.85s-49.61-60.15-64.85-96.18C9,384.05,1,344.43,1,303.58s8-80.47,23.78-117.78c15.24-36.03,37.06-68.39,64.85-96.18s60.15-49.61,96.18-64.85C223.11,9,262.73,1,303.58,1 M303.58,0C135.92,0,0,135.92,0,303.58s135.92,303.58,303.58,303.58s303.58-135.92,303.58-303.58S471.24,0,303.58,0L303.58,0z"
                        }
                    })]), r("g", {
                        attrs: {
                            id: "two_medium"
                        }
                    }, [r("g", [r("path", {
                        attrs: {
                            d: "M411.35,108.77c26.3,0,51.81,5.15,75.83,15.31c23.2,9.81,44.03,23.86,61.92,41.75c17.89,17.89,31.94,38.73,41.75,61.92c10.16,24.02,15.31,49.53,15.31,75.83s-5.15,51.81-15.31,75.83c-9.81,23.2-23.86,44.03-41.75,61.92c-17.89,17.89-38.73,31.94-61.92,41.75c-24.02,10.16-49.53,15.31-75.83,15.31s-51.81-5.15-75.83-15.31c-23.2-9.81-44.03-23.86-61.92-41.75c-17.89-17.89-31.94-38.73-41.75-61.92c-10.16-24.02-15.31-49.53-15.31-75.83s5.15-51.81,15.31-75.83c9.81-23.2,23.86-44.03,41.75-61.92c17.89-17.89,38.73-31.94,61.92-41.75C359.54,113.92,385.05,108.77,411.35,108.77 M411.35,107.77c-108.14,0-195.81,87.67-195.81,195.81s87.67,195.81,195.81,195.81s195.81-87.67,195.81-195.81S519.49,107.77,411.35,107.77L411.35,107.77z"
                        }
                    })]), r("g", [r("path", {
                        attrs: {
                            d: "M313.45,206.68c53.43,0,96.9,43.47,96.9,96.9s-43.47,96.9-96.9,96.9s-96.9-43.47-96.9-96.9S260.01,206.68,313.45,206.68 M313.45,205.68c-54.07,0-97.9,43.83-97.9,97.9s43.83,97.9,97.9,97.9s97.9-43.83,97.9-97.9S367.52,205.68,313.45,205.68L313.45,205.68z"
                        }
                    })]), r("g", {
                        attrs: {
                            id: "two_small"
                        }
                    }, [r("g", [r("path", {
                        attrs: {
                            d: "M509.25,206.68c53.43,0,96.9,43.47,96.9,96.9s-43.47,96.9-96.9,96.9c-53.43,0-96.9-43.47-96.9-96.9S455.82,206.68,509.25,206.68 M509.25,205.68c-54.07,0-97.9,43.83-97.9,97.9s43.83,97.9,97.9,97.9s97.9-43.83,97.9-97.9S563.33,205.68,509.25,205.68L509.25,205.68z"
                        }
                    })]), r("g", [r("path", {
                        attrs: {
                            d: "M558.21,255.63c26.44,0,47.95,21.51,47.95,47.95s-21.51,47.95-47.95,47.95s-47.95-21.51-47.95-47.95S531.77,255.63,558.21,255.63 M558.21,254.63c-27.04,0-48.95,21.92-48.95,48.95s21.92,48.95,48.95,48.95c27.04,0,48.95-21.92,48.95-48.95S585.24,254.63,558.21,254.63L558.21,254.63z"
                        }
                    })]), r("circle", {
                        attrs: {
                            fill: "none",
                            stroke: "var(--dark)",
                            "stroke-miterlimit": "10",
                            cx: "460.3",
                            cy: "303.58",
                            r: "48.95"
                        }
                    })])])])])])]), r("ul", {
                        staticClass: "anima-interac__texts e-flex-col"
                    }, t._l(t.data.anima_interac_group, (function(e) {
                        return r("li", [r("span", {
                            staticClass: "t-title t-color wrap"
                        }, [r("div", {
                            staticClass: "wrapped t-title t-color"
                        }, [t._v(t._s(e.title))])]), r("span", {
                            staticClass: "anima-interac__texts__p"
                        }, [t._v(t._s(e.text))])])
                    })), 0)]), r("div", {
                        staticClass: "anima-interac__btn e-flex"
                    }, [r("PrimaryButton", {
                        attrs: {
                            link: t.data.anima_link,
                            text: t.data.anima_btn,
                            version: "color"
                        }
                    })], 1)]), r("section", {
                        staticClass: "section-imgplx semi-corner"
                    }, [r("div", {
                        staticClass: "plxcard"
                    }, [r("div", {
                        staticClass: "plxcard-img"
                    }, [r("a", {
                        staticClass: "plxcard-img__imgs e-wp e-hp",
                        attrs: {
                            href: t.data.plx_link
                        }
                    }, [r("AppImage", {
                        attrs: {
                            mobile: t.data.plx_img_card1.mobile.url,
                            jpg: t.data.plx_img_card1.url,
                            webp: t.data.plx_img_card1.url
                        }
                    })], 1)]), r("div", {
                        staticClass: "plxcard-infos"
                    }, [r("div", {
                        staticClass: "plxcard-infos__title"
                    }, [r("a", {
                        staticClass: "title-prod",
                        attrs: {
                            href: t.data.plx_link
                        }
                    }, [t._v(t._s(t.data.plx_linktit1))])])])]), r("div", {
                        staticClass: "plxcard"
                    }, [r("div", {
                        staticClass: "plxcard-img"
                    }, [r("a", {
                        staticClass: "plxcard-img__imgs e-wp e-hp",
                        attrs: {
                            href: t.data.plx_link2
                        }
                    }, [r("AppImage", {
                        attrs: {
                            mobile: t.data.plx_img_card2.mobile.url,
                            jpg: t.data.plx_img_card2.url,
                            webp: t.data.plx_img_card2.url
                        }
                    })], 1)]), r("div", {
                        staticClass: "plxcard-infos"
                    }, [r("div", {
                        staticClass: "plxcard-infos__title"
                    }, [r("a", {
                        staticClass: "title-prod",
                        attrs: {
                            href: t.data.plx_link2
                        }
                    }, [t._v(t._s(t.data.plx_linktit2))])])])]), r("div", {
                        staticClass: "section-imgplx__img el-plx"
                    }, [r("AppImage", {
                        attrs: {
                            mobile: t.data.plx_img.mobile.url,
                            jpg: t.data.plx_img.url,
                            webp: t.data.plx_img.url
                        }
                    })], 1)]), r("div", {
                        staticClass: "clients-abt line-before js-line"
                    }, [r("div", {
                        staticClass: "clients-abt__hold e-hold"
                    }, [r("div", {
                        staticClass: "clients-abt__indic js-content"
                    }, [r("span", {
                        staticClass: "t-sansbold"
                    }, [t._v(t._s(t.data.clients_indic))])])]), r("div", {
                        staticClass: "clients-abt__marquee mq-top line-after line-before js-line"
                    }, [r("div", {
                        staticClass: "ctn-marquee js-content"
                    }, [t._l(t.data.clients_group1, (function(e, l) {
                        return r("span", {
                            attrs: {
                                "data-index": "0" + (l + 1)
                            }
                        }, [t._v(t._s(e.client))])
                    })), t._l(t.data.clients_group1, (function(e, l) {
                        return r("span", {
                            attrs: {
                                "data-index": "0" + (l + 1)
                            }
                        }, [t._v(t._s(e.client))])
                    }))], 2)]), r("div", {
                        staticClass: "clients-abt__marquee mq-bottom line-after js-line"
                    }, [r("div", {
                        staticClass: "ctn-marquee js-content"
                    }, [t._l(t.data.clients_group2, (function(e, l) {
                        return r("span", {
                            attrs: {
                                "data-index": "0" + (l + 6)
                            }
                        }, [t._v(t._s(e.clients))])
                    })), t._l(t.data.clients_group2, (function(e, l) {
                        return r("span", {
                            attrs: {
                                "data-index": "0" + (l + 6)
                            }
                        }, [t._v(t._s(e.clients))])
                    }))], 2)])]), r("section", {
                        staticClass: "quotes"
                    }, [r("span", {
                        staticClass: "here-are t-sansbold"
                    }, [t._v(t._s(t.data.quote_subt))]), r("div", {
                        staticClass: "quotes__hold e-rel"
                    }, [t._l(t.data.quote_group, (function(e) {
                        return r("div", {
                            staticClass: "quotes__each"
                        }, [r("blockquote", {
                            staticClass: "quotes__bq"
                        }, [t._v(t._s(e.quote_text))]), r("div", {
                            staticClass: "quotes__who",
                            attrs: {
                                "data-flag": e.flag
                            }
                        }, [r("span", {
                            staticClass: "wrap"
                        }, [r("div", {
                            staticClass: "wrapped"
                        }, [t._v(t._s(e.person))])]), r("span", {
                            staticClass: "wrap"
                        }, [r("div", {
                            staticClass: "wrapped"
                        }, [t._v(t._s(e.company))])])])])
                    })), r("div", {
                        staticClass: "quotes__nav e-rel e-flex"
                    }, [r("button", {
                        staticClass: "quotes__nav__prev e-curp btn-arrow",
                        attrs: {
                            "aria-label": "navigation quote"
                        }
                    }, [r("div", {
                        staticClass: "btn-arrow__svg"
                    }, [r("svg", {
                        staticClass: "arrow",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 14 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            d: "M0 6L13 6M13 6L8.44827 11M13 6L8.44827 1",
                            pathLength: "1",
                            stroke: "#000"
                        }
                    })]), t._v(" "), r("svg", {
                        staticClass: "arrow-hover",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 14 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            d: "M0 6L13 6M13 6L8.44827 11M13 6L8.44827 1",
                            pathLength: "1",
                            stroke: "#000"
                        }
                    })])])]), t._m(5), r("button", {
                        staticClass: "quotes__nav__next e-curp btn-arrow",
                        attrs: {
                            "aria-label": "navigation quote"
                        }
                    }, [r("div", {
                        staticClass: "btn-arrow__svg"
                    }, [r("svg", {
                        staticClass: "arrow",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 14 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            d: "M0 6L13 6M13 6L8.44827 11M13 6L8.44827 1",
                            pathLength: "1",
                            stroke: "#000"
                        }
                    })]), t._v(" "), r("svg", {
                        staticClass: "arrow-hover",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 14 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("path", {
                        attrs: {
                            d: "M0 6L13 6M13 6L8.44827 11M13 6L8.44827 1",
                            pathLength: "1",
                            stroke: "#000"
                        }
                    })]), t._v(" "), r("svg", {
                        staticClass: "circle-svg-arrow",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [r("circle", {
                        staticClass: " quote-timer",
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--color)"
                        }
                    })])])])])], 2)]), t._l(t.$store.state.data_global.body, (function(e) {
                        return "courses" == e.primary.id ? [r("TitleSections", {
                            attrs: {
                                data: e.primary
                            }
                        })] : t._e()
                    })), r("DescrComp", {
                        attrs: {
                            subt: t.data.cour_subt,
                            text: t.data.cour_text,
                            title: t.data.cour_title,
                            parag: t.data.cour_parag,
                            numb: t.data.cour_numb,
                            btn: t.data.cour_btn,
                            link: t.data.cour_link
                        }
                    }), r("section", {
                        staticClass: "section-details"
                    }, [r("div", {
                        staticClass: "section-details__hold e-flex-desk e-hold-border"
                    }, [r("div", {
                        staticClass: "section-details__info section-info e-hp"
                    }, [r("div", {
                        staticClass: "section-details__video e-hp opac-video"
                    }, [r("AppVideo", {
                        attrs: {
                            video: t.data.courses_vid.url
                        }
                    }), r("a", {
                        staticClass: "title e-abs",
                        attrs: {
                            href: t.data.courses_link_hl
                        }
                    }, [t._v(" " + t._s(t.data.courses_titlehl) + " ")]), r("PrimaryButton", {
                        attrs: {
                            link: t.data.courses_link_hl,
                            text: "SEE COURSE",
                            version: "color"
                        }
                    })], 1)]), r("div", {
                        staticClass: "section-details__content section-content"
                    }, [r("div", {
                        staticClass: "section-details__img"
                    }, [r("AppImage", {
                        attrs: {
                            mobile: t.data.course_img1.mobile.url,
                            jpg: t.data.course_img1.url,
                            webp: t.data.course_img1.url
                        }
                    })], 1), r("div", {
                        staticClass: "section-details__img2"
                    }, [r("AppImage", {
                        attrs: {
                            mobile: t.data.course_img2.mobile.url,
                            jpg: t.data.course_img2.url,
                            webp: t.data.course_img2.url
                        }
                    })], 1)])])])], 2), r("CtaSection", {
                        attrs: {
                            cta: t.$store.state.data_global
                        }
                    }), r("Footer", {
                        attrs: {
                            dash: t.$store.state.data_dashboard
                        }
                    })], 1)
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("section", {
                        staticClass: "enough-me js-full-exp"
                    }, [r("div", {
                        staticClass: "enough-me__hold e-hold"
                    }, [r("h1", {
                        staticClass: "t-title quoted"
                    }, [t._v("ALRIGHT, WE HAD ENOUGH ABOUT ME...")]), r("h1", {
                        staticClass: "t-title"
                    }, [t._v("LET'S TALK ABOUT WORK:")])])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "expertise__svg__line-btn e-flex-col no-mobile"
                    }, [r("div", {
                        staticClass: "expertise__svg__line-btn__line e-rel"
                    }), r("div", {
                        staticClass: "expertise__svg__line-btn__btn"
                    }, [r("span", {
                        staticClass: "t-sansbold"
                    }, [t._v("MEMORABLE EXPERIENCE")])])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "anima-interac__bullet prev-anima"
                    }, [e("div", {
                        staticClass: "bullet-anima"
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "anima-interac__bullet prev-anima"
                    }, [e("div", {
                        staticClass: "bullet-anima"
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "anima-interac__svgs__counter e-flex"
                    }, [r("span", {
                        staticClass: "dyna"
                    }, [t._v("01")]), r("span", {
                        staticClass: "static"
                    }, [t._v("/ 03")])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "quotes__nav__counter e-flex"
                    }, [r("div", {
                        staticClass: "dyna"
                    }, [t._v("01")]), r("div", {
                        staticClass: "static"
                    }, [t._v("/ 04")])])
                }], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Headers: r(325).default,
                TitleSections: r(332).default,
                DescrComp: r(337).default,
                AppImage: r(324).default,
                PrimaryButton: r(167).default,
                AppVideo: r(327).default,
                CardProject: r(333).default,
                Diag: r(361).default,
                CtaSection: r(233).default,
                Footer: r(168).default
            })
        }
    }
]);