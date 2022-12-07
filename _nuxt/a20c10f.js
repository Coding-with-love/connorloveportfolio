(window.webpackJsonp = window.webpackJsonp || []).push([
    [39, 15, 22], {
        324: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    props: ["mobile", "jpg", "webp"],
                    mounted: function() {}
                },
                o = n(15),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("picture", [t.mobile ? [n("source", {
                        attrs: {
                            "data-srcset": t.mobile + " 400w, " + t.jpg + " 1x",
                            type: "image/jpg"
                        }
                    })] : [n("source", {
                        attrs: {
                            "data-srcset": t.jpg + " 1x",
                            type: "image/jpg"
                        }
                    })], n("img", {
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
        325: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    props: ["headers"]
                },
                o = n(15),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("header", {
                        staticClass: "headers",
                        attrs: {
                            "data-id": t.headers.id,
                            "data-transtitle": t.headers.title_transition
                        }
                    }, [n("div", {
                        staticClass: "headers__hold"
                    }, [n("div", {
                        staticClass: "headers__texts"
                    }, [n("div", {
                        staticClass: "headers__subt wrap"
                    }, [n("span", {
                        staticClass: "wrapped"
                    }, [t._v(t._s(t.headers.subt))])]), n("div", {
                        staticClass: "headers__title"
                    }, [n("h1", {
                        staticClass: "wrap"
                    }, [n("span", {
                        staticClass: "wrapped"
                    }, [t._v(t._s(t.headers.title_page_1))])]), n("h1", {
                        staticClass: "wrap"
                    }, [n("span", {
                        staticClass: "wrapped"
                    }, [t._v(t._s(t.headers.title_page_2))])])])])])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        326: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            }));
            n(27);
            var r = n(5),
                o = n(6),
                c = n(2),
                l = (n(100), n(169), n(99), n(33)),
                d = new(function() {
                    function t() {
                        Object(r.a)(this, t)
                    }
                    return Object(o.a)(t, [{
                        key: "init",
                        value: function(t, e) {
                            this.body = document.querySelector("body"), this.DOM = e, this.isPage = t
                        }
                    }, {
                        key: "beforeEnter",
                        value: function(t, e) {
                            l.a.changeName(e), l.a.createText(), t.classList.contains("has-header") && window.innerWidth > 1024 ? c.a.set(t.querySelectorAll(".headers .wrapped"), {
                                yPercent: 101
                            }) : c.a.set(t, {
                                opacity: 0
                            }), "about" == e && window.innerWidth > 1024 && c.a.set(t.querySelector("main"), {
                                opacity: 0
                            })
                        }
                    }, {
                        key: "onEnter",
                        value: function(t, e, n) {
                            l.a.animaBox(t, e, this.isPage, n)
                        }
                    }, {
                        key: "firstEntrance",
                        value: function(t, e, n) {
                            l.a.done(t, n), e()
                        }
                    }]), t
                }()),
                h = {
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
        392: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(14),
                o = (n(43), {
                    head: function() {
                        return {
                            title: "Contact | Victor Work"
                        }
                    },
                    asyncData: function(t) {
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n, r, data;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.$prismic, t.params, t.error, e.next = 3, n.api.getSingle("contact");
                                    case 3:
                                        return r = e.sent, data = r.data, e.abrupt("return", {
                                            data: data,
                                            slices: data.body
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    mounted: function() {},
                    transition: n(326).a
                }),
                c = n(15),
                component = Object(c.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "page page-contact has-header",
                        attrs: {
                            "data-scroll-content": "",
                            "data-page": "contact"
                        }
                    }, [t._l(t.$store.state.data_global.headers_group, (function(e) {
                        return "contact" == e.id ? [n("Headers", {
                            attrs: {
                                headers: e
                            }
                        })] : t._e()
                    })), n("main", {
                        staticClass: "main-contact"
                    }, [n("section", {
                        staticClass: "section-headerlb"
                    }, [n("div", {
                        staticClass: "section-headerlb__hold section-contact__hold section-hold e-hold-border"
                    }, [n("div", {
                        staticClass: "section-headerlb__info section-info"
                    }, [n("div", {
                        staticClass: "section-headerlb__img single-bord"
                    }, [n("AppImage", {
                        attrs: {
                            mobile: t.data.ctt_img.mobile.url,
                            jpg: t.data.ctt_img.url,
                            webp: t.data.ctt_img.url
                        }
                    })], 1)]), n("div", {
                        staticClass: "section-headerlb__content section-content e-flex-col"
                    }, [n("div", {
                        staticClass: "section-headerlb__title"
                    }, [n("h1", {
                        staticClass: "t-title t-color"
                    }, [t._v(t._s(t.data.ctt_title))])]), n("div", {
                        staticClass: "section-headerlb__text"
                    }, [n("p", {
                        staticClass: "t-gt"
                    }, [t._v(t._s(t.data.ctt_text))])]), n("ul", {
                        staticClass: "section-headerlb__links"
                    }, t._l(t.data.ctt_links_group, (function(e) {
                        return n("li", [n("span", {
                            staticClass: "t-gt"
                        }, [t._v(t._s(e.text))]), n("a", {
                            attrs: {
                                href: e.url,
                                target: "_blank",
                                rel: "noreferrer",
                                title: e.text
                            }
                        }, [t._v(t._s(e.item))])])
                    })), 0)])])])]), n("CtaSection", {
                        attrs: {
                            cta: t.$store.state.data_global
                        }
                    }), n("Footer", {
                        attrs: {
                            dash: t.$store.state.data_dashboard
                        }
                    })], 2)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Headers: n(325).default,
                AppImage: n(324).default,
                CtaSection: n(233).default,
                Footer: n(168).default
            })
        }
    }
]);