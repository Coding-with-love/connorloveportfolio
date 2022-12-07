(window.webpackJsonp = window.webpackJsonp || []).push([
    [37, 15, 16, 19, 20, 22], {
        324: function(t, e, l) {
            "use strict";
            l.r(e);
            var r = {
                    props: ["mobile", "jpg", "webp"],
                    mounted: function() {}
                },
                c = l(15),
                component = Object(c.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("picture", [t.mobile ? [l("source", {
                        attrs: {
                            "data-srcset": t.mobile + " 400w, " + t.jpg + " 1x",
                            type: "image/jpg"
                        }
                    })] : [l("source", {
                        attrs: {
                            "data-srcset": t.jpg + " 1x",
                            type: "image/jpg"
                        }
                    })], l("img", {
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
        325: function(t, e, l) {
            "use strict";
            l.r(e);
            var r = {
                    props: ["headers"]
                },
                c = l(15),
                component = Object(c.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("header", {
                        staticClass: "headers",
                        attrs: {
                            "data-id": t.headers.id,
                            "data-transtitle": t.headers.title_transition
                        }
                    }, [l("div", {
                        staticClass: "headers__hold"
                    }, [l("div", {
                        staticClass: "headers__texts"
                    }, [l("div", {
                        staticClass: "headers__subt wrap"
                    }, [l("span", {
                        staticClass: "wrapped"
                    }, [t._v(t._s(t.headers.subt))])]), l("div", {
                        staticClass: "headers__title"
                    }, [l("h1", {
                        staticClass: "wrap"
                    }, [l("span", {
                        staticClass: "wrapped"
                    }, [t._v(t._s(t.headers.title_page_1))])]), l("h1", {
                        staticClass: "wrap"
                    }, [l("span", {
                        staticClass: "wrapped"
                    }, [t._v(t._s(t.headers.title_page_2))])])])])])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        326: function(t, e, l) {
            "use strict";
            l.d(e, "a", (function() {
                return _
            }));
            l(27);
            var r = l(5),
                c = l(6),
                n = l(2),
                o = (l(100), l(169), l(99), l(33)),
                d = new(function() {
                    function t() {
                        Object(r.a)(this, t)
                    }
                    return Object(c.a)(t, [{
                        key: "init",
                        value: function(t, e) {
                            this.body = document.querySelector("body"), this.DOM = e, this.isPage = t
                        }
                    }, {
                        key: "beforeEnter",
                        value: function(t, e) {
                            o.a.changeName(e), o.a.createText(), t.classList.contains("has-header") && window.innerWidth > 1024 ? n.a.set(t.querySelectorAll(".headers .wrapped"), {
                                yPercent: 101
                            }) : n.a.set(t, {
                                opacity: 0
                            }), "about" == e && window.innerWidth > 1024 && n.a.set(t.querySelector("main"), {
                                opacity: 0
                            })
                        }
                    }, {
                        key: "onEnter",
                        value: function(t, e, l) {
                            o.a.animaBox(t, e, this.isPage, l)
                        }
                    }, {
                        key: "firstEntrance",
                        value: function(t, e, l) {
                            o.a.done(t, l), e()
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
        327: function(t, e, l) {
            "use strict";
            l.r(e);
            var r = {
                    props: ["video"],
                    mounted: function() {}
                },
                c = l(15),
                component = Object(c.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("video", {
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
                    }, [l("source", {
                        attrs: {
                            "data-src": t.video,
                            type: "video/mp4"
                        }
                    })])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        330: function(t, e, l) {
            "use strict";
            l.r(e);
            var r = {
                    props: ["descrData"]
                },
                c = l(15),
                component = Object(c.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("section", {
                        staticClass: "descriptions"
                    }, [l("div", {
                        staticClass: "descriptions__hold e-hold-border"
                    }, [l("div", {
                        staticClass: "descriptions__header"
                    }, [l("div", {
                        staticClass: "descriptions__header__subt e-flex"
                    }, [l("div", {
                        staticClass: "descriptions__header__subt__bg e-color"
                    }), l("span", {
                        staticClass: "t-soft"
                    }, [t._v(t._s(t.descrData.rel_subt))])]), l("h1", {
                        staticClass: "t-sansbold"
                    }, [t._v(t._s(t.descrData.rel_text))])]), l("div", {
                        staticClass: "descriptions__texts e-flex-desk"
                    }, [l("div", {
                        staticClass: "descriptions__texts__subt no-mobile"
                    }, [l("div", {
                        staticClass: "descriptions__index"
                    }, [l("svg", {
                        staticClass: "circle-svg",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [l("circle", {
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--lineColor)",
                            pathLength: "1"
                        }
                    })]), t._v(" "), l("span", [t._v("1")])]), l("h1", {
                        staticClass: "t-sansbold"
                    }, [t._v(t._s(t.descrData.rel_title))])]), l("prismic-rich-text", {
                        staticClass: "rich-t subt-p descriptions__parag",
                        attrs: {
                            field: t.descrData.rel_parag
                        }
                    })], 1)])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        337: function(t, e, l) {
            "use strict";
            l.r(e);
            var r = {
                    props: ["subt", "text", "title", "parag", "numb", "btn", "link"]
                },
                c = l(15),
                component = Object(c.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("section", {
                        staticClass: "descriptions"
                    }, [l("div", {
                        staticClass: "descriptions__hold e-hold-border"
                    }, [l("div", {
                        staticClass: "descriptions__header"
                    }, [l("div", {
                        staticClass: "descriptions__header__subt e-flex"
                    }, [l("div", {
                        staticClass: "descriptions__header__subt__bg e-color"
                    }), l("span", {
                        staticClass: "t-soft"
                    }, [t._v(t._s(t.subt))])]), l("h1", {
                        staticClass: "t-sansbold"
                    }, [t._v(t._s(t.text))])]), l("div", {
                        staticClass: "descriptions__texts e-flex-desk"
                    }, [l("div", {
                        staticClass: "descriptions__texts__subt no-mobile"
                    }, [l("div", {
                        staticClass: "descriptions__index"
                    }, [l("svg", {
                        staticClass: "circle-svg",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [l("circle", {
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--lineColor)",
                            pathLength: "1"
                        }
                    })]), t._v(" "), l("span", [t._v(t._s(t.numb))])]), l("h1", {
                        staticClass: "t-sansbold"
                    }, [t._v(t._s(t.title))])]), l("prismic-rich-text", {
                        staticClass: "rich-t subt-p descriptions__parag",
                        attrs: {
                            field: t.parag
                        }
                    }), l("PrimaryButton", {
                        attrs: {
                            link: t.link,
                            text: t.btn,
                            version: "color"
                        }
                    })], 1)])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                PrimaryButton: l(167).default
            })
        },
        390: function(t, e, l) {
            "use strict";
            l.r(e);
            var r = l(14),
                c = (l(43), {
                    head: function() {
                        return {
                            title: "About | Victor Work"
                        }
                    },
                    asyncData: function(t) {
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var l, r, data;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return l = t.$prismic, t.params, t.error, e.next = 3, l.api.getSingle("about");
                                    case 3:
                                        return r = e.sent, data = r.data, e.abrupt("return", {
                                            data: data
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    methods: {
                        mouseEnterMusics: function(t) {
                            t.target.closest("li").classList.add("pl-active")
                        },
                        mouseLeaveMusics: function(t) {
                            t.target.closest("li").classList.remove("pl-active")
                        }
                    },
                    mounted: function() {},
                    transition: l(326).a
                }),
                n = l(15),
                component = Object(n.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("div", {
                        staticClass: "page page-about has-header",
                        attrs: {
                            "data-scroll-content": "",
                            "data-page": "about"
                        }
                    }, [t._l(t.$store.state.data_global.headers_group, (function(e) {
                        return "about" == e.id ? [l("Headers", {
                            attrs: {
                                headers: e
                            }
                        })] : t._e()
                    })), l("main", {
                        staticClass: "main-about"
                    }, [t._l(t.$store.state.data_global.body, (function(e) {
                        return "vw" == e.primary.id ? [l("TitleSections", {
                            attrs: {
                                data: e.primary
                            }
                        })] : t._e()
                    })), l("Description", {
                        attrs: {
                            descrData: t.data
                        }
                    }), l("section", {
                        staticClass: "pillars"
                    }, [l("div", {
                        staticClass: "pillars__hold e-hold-border"
                    }, [l("div", {
                        staticClass: "pillars__title"
                    }, [l("h1", {
                        staticClass: "t-title t-color"
                    }, [t._v(t._s(t.data.pillars_title))])]), l("div", {
                        staticClass: "pillars__descr e-flex-desk"
                    }, [l("span", {
                        staticClass: "t-sansbold"
                    }, [t._v(t._s(t.data.pillars_details))]), l("prismic-rich-text", {
                        staticClass: "rich-t subt-p",
                        attrs: {
                            field: t.data.pillars_parag
                        }
                    })], 1), l("ul", {
                        staticClass: "pillars__circles"
                    }, [t._l(t.data.pillars_group, (function(t, e) {
                        return l("li", {
                            staticClass: "pillars__circles__each"
                        })
                    })), t._l(t.data.pillars_group, (function(e, r) {
                        return l("div", {
                            staticClass: "pillars__indic no-mobile",
                            class: "pillars__indic" + r
                        }, [t._v(t._s(r + 1))])
                    }))], 2), l("ul", {
                        staticClass: "pillars__items e-flex-desk"
                    }, t._l(t.data.pillars_group, (function(e, r) {
                        return l("li", {
                            staticClass: "pillars__items__each"
                        }, [l("h1", {
                            staticClass: "t-sansbold",
                            attrs: {
                                "data-index": r + 1
                            }
                        }, [t._v(t._s(e.title))]), l("p", [t._v(t._s(e.text))])])
                    })), 0)])]), l("div", {
                        staticClass: "slider-wheel no-mobile"
                    }, [l("div", {
                        staticClass: "wheel e-flex e-wvw e-hvh"
                    }, [t._l(t.data.wheel_group, (function(t) {
                        return l("div", {
                            staticClass: "wheel__card"
                        }, [l("AppImage", {
                            attrs: {
                                mobile: t.img.mobile.url,
                                jpg: t.img.url,
                                webp: t.img.url
                            }
                        })], 1)
                    })), l("svg", {
                        attrs: {
                            width: "125vw",
                            viewBox: "0 0 1895 218",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [l("path", {
                        attrs: {
                            id: "path",
                            d: "M1 217.5C1 217.5 312 1 947.75 1C1583.5 1 1894.5 217.5 1894.5 217.5",
                            stroke: "transparent"
                        }
                    })]), l("div", {
                        staticClass: "wheel__texts"
                    }, [l("div", {
                        staticClass: "wheel__texts__hold e-rel e-flex-col"
                    }, [l("h1", {
                        staticClass: "t-title t-color t-center"
                    }, [t._v(t._s(t.data.wheel_title))]), l("p", {
                        staticClass: "t-center"
                    }, [t._v(t._s(t.data.wheel_descr))])])]), l("div", {
                        staticClass: "wheel__subt e-abs"
                    }, [l("ul", {
                        staticClass: "wheel__subt__hold e-rel"
                    }, t._l(t.data.wheel_subt_group, (function(e) {
                        return l("li", {
                            staticClass: "t-sansbold"
                        }, [t._v(t._s(e.text))])
                    })), 0)])], 2)]), l("DescrComp", {
                        attrs: {
                            subt: t.data.exercise_subt,
                            text: t.data.exercise_text,
                            title: t.data.exercise_title,
                            parag: t.data.exercise_parag,
                            numb: t.data.exercise_numb,
                            btn: t.data.exercise_btn,
                            link: t.data.exercise_link
                        }
                    }), l("section", {
                        staticClass: "health"
                    }, [l("div", {
                        staticClass: "health__hold e-hold e-flex-desk"
                    }, [l("div", {
                        staticClass: "health__main e-single-border e-rel"
                    }, [l("h1", {
                        staticClass: "days t-title t-color js-days"
                    }, [t._v(t._s(t.data.health_total_days))]), l("div", {
                        staticClass: "subt t-sansbold"
                    }, [t._v(t._s(t.data.health_subt))]), l("prismic-rich-text", {
                        staticClass: "rich-t subt-p",
                        attrs: {
                            field: t.data.health_parag
                        }
                    }), t._m(0)], 1), l("ul", {
                        staticClass: "health__stats"
                    }, t._l(t.data.health_group, (function(e) {
                        return l("li", {
                            staticClass: "health__stats__each e-single-border"
                        }, [l("div", {
                            staticClass: "average"
                        }, [t._v(t._s(e.average))]), l("div", {
                            staticClass: "numbs"
                        }, [l("span", {
                            staticClass: "numb t-title t-color"
                        }, [t._v(t._s(e.numb))]), l("span", {
                            staticClass: "per"
                        }, [t._v(t._s(e.per))])])])
                    })), 0), l("ul", {
                        staticClass: "relase-health"
                    })])]), l("section", {
                        staticClass: "manso"
                    }, [l("div", {
                        staticClass: "manso__hold e-rel"
                    }, [l("div", {
                        staticClass: "manso__text"
                    }, [l("h1", {
                        staticClass: "t-title"
                    }, [t._v(t._s(t.data.mans_title))]), l("prismic-rich-text", {
                        staticClass: "rich-t subt-p",
                        attrs: {
                            field: t.data.mans_p
                        }
                    }), l("PrimaryButton", {
                        attrs: {
                            link: "/lifestyle",
                            text: "SEE MY LIFESTYLE",
                            version: "dark"
                        }
                    })], 1), l("div", {
                        staticClass: "manso__imgs"
                    }, [l("div", {
                        staticClass: "manso__imgs__col1"
                    }, [l("div", {
                        staticClass: "manso__imgs__each img-manso0"
                    }, [l("picture", {
                        staticClass: "rounded"
                    }, [l("source", {
                        attrs: {
                            "data-srcset": t.data.mans_img1.mobile.url + " 400w, " + t.data.mans_img1.url + " 1x",
                            type: "image/jpg"
                        }
                    }), l("img", {
                        staticClass: "e-img-fit lazyload",
                        attrs: {
                            "data-src": t.data.mans_img1.url,
                            width: "100%",
                            height: "100%",
                            alt: "#"
                        }
                    })])]), l("div", {
                        staticClass: "manso__imgs__each img-manso1"
                    }, [l("picture", {
                        staticClass: "rounded"
                    }, [l("source", {
                        attrs: {
                            "data-srcset": t.data.mans_img2.mobile.url + " 400w, " + t.data.mans_img2.url + " 1x",
                            type: "image/jpg"
                        }
                    }), l("img", {
                        staticClass: "e-img-fit lazyload",
                        attrs: {
                            "data-src": t.data.mans_img2.url,
                            width: "100%",
                            height: "100%",
                            alt: "#"
                        }
                    })])]), l("div", {
                        staticClass: "manso__imgs__each img-manso2"
                    }, [l("picture", {
                        staticClass: "rounded"
                    }, [l("source", {
                        attrs: {
                            "data-srcset": t.data.mans_img3.mobile.url + " 400w, " + t.data.mans_img3.url + " 1x",
                            type: "image/jpg"
                        }
                    }), l("img", {
                        staticClass: "e-img-fit lazyload",
                        attrs: {
                            "data-src": t.data.mans_img3.url,
                            width: "100%",
                            height: "100%",
                            alt: "#"
                        }
                    })])])]), l("div", {
                        staticClass: "manso__imgs__col2"
                    }, [l("div", {
                        staticClass: "manso__imgs__each img-manso0"
                    }, [l("picture", {
                        staticClass: "rounded"
                    }, [l("source", {
                        attrs: {
                            "data-srcset": t.data.mans_img4.mobile.url + " 400w, " + t.data.mans_img4.url + " 1x",
                            type: "image/jpg"
                        }
                    }), l("img", {
                        staticClass: "e-img-fit lazyload",
                        attrs: {
                            "data-src": t.data.mans_img4.url,
                            width: "100%",
                            height: "100%",
                            alt: "#"
                        }
                    })])])]), l("div", {
                        staticClass: "manso__imgs__col3"
                    }, [l("div", {
                        staticClass: "manso__imgs__each img-manso0"
                    }, [l("picture", {
                        staticClass: "rounded"
                    }, [l("source", {
                        attrs: {
                            "data-srcset": t.data.mans_img5.mobile.url + " 400w, " + t.data.mans_img5.url + " 1x",
                            type: "image/jpg"
                        }
                    }), l("img", {
                        staticClass: "e-img-fit lazyload",
                        attrs: {
                            "data-src": t.data.mans_img5.url,
                            width: "100%",
                            height: "100%",
                            alt: "#"
                        }
                    })])]), l("div", {
                        staticClass: "manso__imgs__each img-manso1"
                    }, [l("picture", {
                        staticClass: "rounded"
                    }, [l("source", {
                        attrs: {
                            "data-srcset": t.data.mans_img6.mobile.url + " 400w, " + t.data.mans_img6.url + " 1x",
                            type: "image/jpg"
                        }
                    }), l("img", {
                        staticClass: "e-img-fit lazyload",
                        attrs: {
                            "data-src": t.data.mans_img6.url,
                            width: "100%",
                            height: "100%",
                            alt: "#"
                        }
                    })])]), l("div", {
                        staticClass: "manso__imgs__each img-manso2"
                    }, [l("picture", {
                        staticClass: "rounded"
                    }, [l("source", {
                        attrs: {
                            "data-srcset": t.data.mans_img7.mobile.url + " 400w, " + t.data.mans_img7.url + " 1x",
                            type: "image/jpg"
                        }
                    }), l("img", {
                        staticClass: "e-img-fit lazyload",
                        attrs: {
                            "data-src": t.data.mans_img7.url,
                            width: "100%",
                            height: "100%",
                            alt: "#"
                        }
                    })])]), l("div", {
                        staticClass: "manso__imgs__each img-manso3"
                    }, [l("picture", {
                        staticClass: "rounded"
                    }, [l("source", {
                        attrs: {
                            "data-srcset": t.data.mans_img8.mobile.url + " 400w, " + t.data.mans_img8.url + " 1x",
                            type: "image/jpg"
                        }
                    }), l("img", {
                        staticClass: "e-img-fit lazyload",
                        attrs: {
                            "data-src": t.data.mans_img8.url,
                            width: "100%",
                            height: "100%",
                            alt: "#"
                        }
                    })])])])])])]), l("DescrComp", {
                        attrs: {
                            subt: t.data.cult_subt,
                            text: t.data.cult_text,
                            title: t.data.cult_title,
                            parag: t.data.cult_parag,
                            numb: t.data.cult_numb,
                            btn: t.data.cult_btn,
                            link: t.data.cult_link
                        }
                    }), l("section", {
                        staticClass: "cult"
                    }, [l("div", {
                        staticClass: "cult__hold e-hold"
                    }, [l("ul", {
                        staticClass: "cult__list"
                    }, t._l(t.data.cult_group, (function(e) {
                        return l("li", {
                            staticClass: "cult__list__each"
                        }, [l("span", {
                            staticClass: "t-title"
                        }, [t._v(t._s(e.item))]), l("svg", {
                            staticClass: "divider",
                            attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 21.12 81.4"
                            }
                        }, [l("polygon", {
                            attrs: {
                                fill: "var(--dark)",
                                points: "0 81.4 2.31 81.4 21.12 0 18.7 0 0 81.4"
                            }
                        })]), l("AppImage", {
                            attrs: {
                                mobile: e.img.mobile.url,
                                jpg: e.img.url,
                                webp: e.img.url
                            }
                        })], 1)
                    })), 0)])]), l("section", {
                        staticClass: "section-plxvid e-flex-col semi-corner"
                    }, [l("div", {
                        staticClass: "section-plxvid__img el-plx"
                    }, [l("AppImage", {
                        attrs: {
                            mobile: t.data.plx_vid_img.mobile.url,
                            jpg: t.data.plx_vid_img.url,
                            webp: t.data.plx_vid_img.url
                        }
                    })], 1), l("div", {
                        staticClass: "section-plxvid__texts e-flex-col e-wp"
                    }, [l("div", {
                        staticClass: "section-plxvid__texts__hold e-flex-col"
                    }), l("NuxtLink", {
                        staticClass: "section-plxvid__texts__bg",
                        attrs: {
                            to: t.data.plx_vid_link,
                            title: t.data.plx_vid_text
                        }
                    }, [l("AppVideo", {
                        attrs: {
                            video: t.data.plx_vid_vid.url
                        }
                    })], 1), l("span", {
                        staticClass: "t-gt t-white t-center"
                    }, [t._v(t._s(t.data.plx_vid_text))])], 1)]), t._l(t.$store.state.data_global.body, (function(e) {
                        return "music" == e.primary.id ? [l("TitleSections", {
                            attrs: {
                                data: e.primary
                            }
                        })] : t._e()
                    })), l("DescrComp", {
                        attrs: {
                            subt: t.data.music_subt,
                            text: t.data.music_text,
                            title: t.data.music_title,
                            parag: t.data.music_parag,
                            numb: t.data.music_numb
                        }
                    }), l("section", {
                        staticClass: "music"
                    }, [l("div", {
                        staticClass: "music__hold e-hold"
                    }, [l("div", {
                        staticClass: "music__title"
                    }, [l("h1", {
                        staticClass: "t-title t-color"
                    }, [t._v(t._s(t.data.music_h1))]), l("p", [t._v(t._s(t.data.music_descrition))])]), l("ul", {
                        staticClass: "music__group"
                    }, [t._l(t.data.music_group, (function(e) {
                        return l("li", {
                            staticClass: "music__each e-flex-col"
                        }, [e.link ? l("div", {
                            staticClass: "music__each__hold single-bord",
                            on: {
                                mouseenter: t.mouseEnterMusics,
                                mouseleave: t.mouseLeaveMusics
                            }
                        }, [l("a", {
                            staticClass: "music__group__img single-bord e-flex",
                            style: "background: linear-gradient(to bottom, " + e.color1 + " 20%, " + e.color2 + " 100%);",
                            attrs: {
                                href: e.link,
                                title: e.title,
                                rel: "noreferrer",
                                target: "_blank"
                            }
                        }, [l("span", {
                            staticClass: "t-title"
                        }, [t._v(t._s(e.title))])]), l("a", {
                            staticClass: "music__group__title",
                            attrs: {
                                href: e.link,
                                title: e.title,
                                rel: "noreferrer",
                                target: "_blank"
                            }
                        }, [t._v(t._s(e.title))])]) : t._e()])
                    })), l("a", {
                        staticClass: "music__group__follow t-sansbold",
                        attrs: {
                            href: t.data.music_follow,
                            title: t.data.music_profile,
                            rel: "noreferrer",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.data.music_profile))])], 2)])])], 2), l("CtaSection", {
                        attrs: {
                            cta: t.$store.state.data_global
                        }
                    }), l("Footer", {
                        attrs: {
                            dash: t.$store.state.data_dashboard
                        }
                    })], 2)
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("div", {
                        staticClass: "health__instruct e-abs"
                    }, [l("p", {
                        staticClass: "click-here e-flex"
                    }, [l("span", {
                        staticClass: "e-curp"
                    }, [t._v("Click here")]), t._v(" or in the numbers to see apps status")])])
                }], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Headers: l(325).default,
                TitleSections: l(332).default,
                Description: l(330).default,
                AppImage: l(324).default,
                DescrComp: l(337).default,
                PrimaryButton: l(167).default,
                AppVideo: l(327).default,
                CtaSection: l(233).default,
                Footer: l(168).default
            })
        }
    }
]);