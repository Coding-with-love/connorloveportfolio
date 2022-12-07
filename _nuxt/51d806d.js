/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        100: function(c, h, v) {
            "use strict";
            v.d(h, "a", (function() {
                return H
            }));
            var m = v(5),
                e = v(6),
                t = (v(235), v(22), v(81), v(11), v(2)),
                z = v(10),
                r = v(121),
                n = v(35);
            t.a.registerPlugin(z.a);
            var o = new(function() {
                function c() {
                    Object(m.a)(this, c)
                }
                return Object(e.a)(c, [{
                    key: "init",
                    value: function(c) {
                        var h = c;
                        this.qsa = function(s) {
                            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                            return c.querySelectorAll(s)
                        }, this.qs = function(s) {
                            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                            return c.querySelector(s)
                        }, this.el_path = this.qs("#path"), this.els = this.qsa(".wheel__card"), this.els_tls = [], this.percentage = 1 / (this.els.length - 1), this.created = !1, this.wheelSlider()
                    }
                }, {
                    key: "createCircular",
                    value: function() {
                        var c = this,
                            h = this;
                        this.created && h.els.forEach((function(c, v) {
                            h.els_tls = []
                        })), this.els.forEach((function(v, m) {
                            var e = t.a.timeline({
                                paused: !0
                            }).to(v, {
                                duration: 6,
                                ease: "none",
                                immediateRender: !0,
                                motionPath: {
                                    path: h.el_path,
                                    align: h.el_path,
                                    alignOrigin: [.5, .5],
                                    autoRotate: "auto"
                                }
                            });
                            e.progress(h.percentage * m), c.els_tls.push(e)
                        })), this.created = !0
                    }
                }, {
                    key: "wheelSlider",
                    value: function() {
                        var c = this,
                            h = this;
                        this.createCircular(), this.tl_wheel_start = t.a.timeline({
                            paused: !0
                        }), this.els.forEach((function(v, m) {
                            h.tl_wheel_start.fromTo(c.els_tls[m], {
                                progress: 0
                            }, {
                                progress: "".concat(c.els_tls[m].progress()),
                                duration: 2.6,
                                ease: "expo.inOut"
                            }, 0)
                        })), t.a.delayedCall(.5, (function() {
                            z.a.create({
                                trigger: c.qs(".wheel"),
                                start: "top 100%",
                                onEnter: function() {
                                    return h.tl_wheel_start.play(0)
                                }
                            })
                        })), window.addEventListener("resize", this.createCircular.bind(this))
                    }
                }]), c
            }());
            t.a.registerPlugin(z.a);
            var l = new(function() {
                function c() {
                    Object(m.a)(this, c)
                }
                return Object(e.a)(c, [{
                    key: "init",
                    value: function(c) {
                        var h = c;
                        this.qsa = function(s) {
                            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                            return c.querySelectorAll(s)
                        }, this.qs = function(s) {
                            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                            return c.querySelector(s)
                        }, this.cults = {
                            each: this.qsa(".cult__list__each")
                        }, this.onHoverCults()
                    }
                }, {
                    key: "onHoverCults",
                    value: function() {
                        var c = this;
                        this.cults.each.forEach((function(h, v) {
                            h.addEventListener("mouseenter", (function() {
                                c.cults.each[v].classList.contains("cult-active") && c.cults.each[v].classList.remove("cult-active"), h.classList.add("cult-active")
                            }), null), h.addEventListener("mouseleave", (function() {
                                c.cults.each[v].classList.contains("cult-active") && c.cults.each[v].classList.remove("cult-active"), h.classList.remove("cult-active")
                            }), null)
                        }))
                    }
                }]), c
            }());
            t.a.registerPlugin(z.a, r.a);
            var d = new(function() {
                function c() {
                    Object(m.a)(this, c)
                }
                return Object(e.a)(c, [{
                    key: "init",
                    value: function(c) {
                        var h = c;
                        this.qsa = function(s) {
                            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                            return c.querySelectorAll(s)
                        }, this.qs = function(s) {
                            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                            return c.querySelector(s)
                        }, this.body = document.querySelector("body"), n.a.onDashHealth(this.qs(".health")), window.innerWidth > 1024 && (o.init(c), l.init(c), this.onScrollProxy(), this.onHealth(), this.onMansory()), this.animaPillar(), this.onModalAppsClick()
                    }
                }, {
                    key: "animaPillar",
                    value: function() {
                        this.pillars = {
                            el: this.qs("ul.pillars__circles"),
                            circles: this.qsa(".pillars__circles__each"),
                            indics: this.qsa(".pillars__indic"),
                            each: this.qsa(".pillars__items__each")
                        }, this.tl_pillars = t.a.timeline({
                            scrollTrigger: {
                                trigger: this.pillars.el,
                                start: "top 70%"
                            }
                        }).from(this.pillars.circles, {
                            duration: 2,
                            scale: 0,
                            ease: "expo.out",
                            stagger: .3
                        }), window.innerWidth > 1024 && this.tl_pillars.from(this.pillars.indics, {
                            duration: 2,
                            yPercent: 400,
                            scale: 0,
                            ease: "expo.out",
                            stagger: .35
                        }, "<.2").from(this.pillars.each, {
                            duration: 2,
                            yPercent: 100,
                            ease: "expo.out",
                            stagger: .1
                        }, "<.5").from(this.pillars.each, {
                            duration: 1,
                            opacity: 0,
                            ease: "power1.out",
                            stagger: .1
                        }, "<")
                    }
                }, {
                    key: "onHealth",
                    value: function() {
                        this.health = {
                            hold: this.qs(".health__hold"),
                            main: this.qs(".health__main"),
                            release: this.qs(".relase-health")
                        }, z.a.create({
                            trigger: this.health.hold,
                            start: "top 9%",
                            pin: this.health.main,
                            endTrigger: this.health.release,
                            end: "top 96%",
                            toggleClass: "health-pinning"
                        })
                    }
                }, {
                    key: "onMansory",
                    value: function() {
                        this.mans = {
                            imgs: this.qsa(".manso__imgs"),
                            img1: this.qsa(".manso__imgs__col1 .img-manso0"),
                            img2: this.qsa(".manso__imgs__col1 .img-manso1"),
                            img3: this.qsa(".manso__imgs__col2 .img-manso0"),
                            img4: this.qsa(".manso__imgs__col3 .img-manso0"),
                            img5: this.qsa(".manso__imgs__col3 .img-manso1")
                        }, t.a.timeline({
                            scrollTrigger: {
                                trigger: this.mans.imgs,
                                start: "top 100%",
                                end: "+=".concat(2.2 * window.innerHeight),
                                scrub: !0,
                                onEnter: function() {
                                    return console.log("oxxi")
                                }
                            }
                        }).from([this.mans.img1, this.mans.img2, this.mans.img3, this.mans.img4, this.mans.img5], {
                            yPercent: t.a.utils.wrap([-50, -25, 50, -65, -18])
                        })
                    }
                }, {
                    key: "seeApps",
                    value: function() {
                        this.modal_apps.classList.contains("modal-closed") && (this.modal_apps.classList.contains("opened") || (this.modal_apps.classList.add("opened"), this.modal_apps.querySelectorAll(".modal-apps__ctn__img img").forEach((function(c) {
                            return c.src = c.dataset.src
                        })), document.querySelectorAll("li.modal-apps__each")[0].classList.add("current-app"), document.querySelectorAll("li.modal-apps__nav__dot")[0].classList.add("current-app")), this.modal_apps.classList.remove("modal-closed"), this.body.classList.add("is-fader", "is-modalapps"))
                    }
                }, {
                    key: "onModalAppsClick",
                    value: function() {
                        var c = this;
                        this.modal_apps = document.querySelector(".modal-apps"), this.click_here = this.qs(".click-here"), this.numbers = this.qsa(".numbs"), this.click_here.addEventListener("click", this.seeApps.bind(this), null), this.numbers.forEach((function(h) {
                            h.addEventListener("click", c.seeApps.bind(c), null)
                        }))
                    }
                }, {
                    key: "onScroll",
                    value: function() {
                        z.a.update()
                    }
                }, {
                    key: "onScrollProxy",
                    value: function() {
                        z.a.scrollerProxy("[data-scroll-content]", {
                            scrollTop: function(c) {
                                return arguments.length ? null : -1 * document.querySelector("[data-scroll-content]").getBoundingClientRect().top
                            },
                            getBoundingClientRect: function() {
                                return {
                                    top: 0,
                                    left: 0,
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                }
                            }
                        }), z.a.defaults({
                            scroller: "[data-scroll-content]"
                        }), z.a.refresh()
                    }
                }]), c
            }());
            v(39);
            t.a.registerPlugin(z.a);
            var _ = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            var h = c;
                            this.qsa = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                                return c.querySelectorAll(s)
                            }, this.qs = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                                return c.querySelector(s)
                            }, this.body = document.querySelector("body"), this.slice = {
                                each: this.qsa(".slice-exp")
                            }, window.innerWidth > 1024 && (this.onScrollProxy(), this.onStickyImages())
                        }
                    }, {
                        key: "onStickyImages",
                        value: function() {
                            this.slice.each.forEach((function(c) {
                                z.a.create({
                                    trigger: c.querySelector(".slice-exp__ctt"),
                                    start: "top 11%",
                                    pin: c.querySelector(".slice-exp__ctt__indic"),
                                    endTrigger: c.querySelector(".release-slice"),
                                    end: "top 100%",
                                    toggleClass: "slice-pinning"
                                }), z.a.create({
                                    trigger: c.querySelector(".slice-exp__ctt"),
                                    start: "top 11%",
                                    pin: c.querySelector(".slice-exp__ctt__img"),
                                    endTrigger: c.querySelector(".release-slice"),
                                    end: "top 100%"
                                })
                            }))
                        }
                    }, {
                        key: "onScroll",
                        value: function() {
                            z.a.update()
                        }
                    }, {
                        key: "onScrollProxy",
                        value: function() {
                            z.a.scrollerProxy("[data-scroll-content]", {
                                scrollTop: function(c) {
                                    return arguments.length ? null : -1 * document.querySelector("[data-scroll-content]").getBoundingClientRect().top
                                },
                                getBoundingClientRect: function() {
                                    return {
                                        top: 0,
                                        left: 0,
                                        width: window.innerWidth,
                                        height: window.innerHeight
                                    }
                                }
                            }), z.a.defaults({
                                scroller: "[data-scroll-content]"
                            }), z.a.refresh()
                        }
                    }]), c
                }()),
                f = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            var h = c;
                            this.qsa = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                                return c.querySelectorAll(s)
                            }, this.qs = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                                return c.querySelector(s)
                            }, this.body = document.querySelector("body"), this.form = {
                                el: this.qs("form.start-project"),
                                selects: this.qsa(".js-move-form"),
                                btn_return: this.qsa(".form__return")
                            }, this.onSelectClick()
                        }
                    }, {
                        key: "moveStep",
                        value: function(c) {
                            c.target.closest(".form-step").classList.contains("form__type-proj") && this.body.classList.add("second-step"), c.target.closest(".form-step").classList.contains("form__budget") && this.body.classList.add("final-step")
                        }
                    }, {
                        key: "returnStep",
                        value: function(c) {
                            c.target.closest(".form-step").classList.contains("form__budget") && this.body.classList.remove("second-step"), c.target.closest(".form-step").classList.contains("form__description") && this.body.classList.remove("final-step")
                        }
                    }, {
                        key: "onSelectClick",
                        value: function() {
                            var c = this;
                            this.form.selects.forEach((function(h) {
                                h.addEventListener("click", c.moveStep.bind(c), null)
                            })), this.form.btn_return.forEach((function(h) {
                                h.addEventListener("click", c.returnStep.bind(c), null)
                            }))
                        }
                    }]), c
                }());
            t.a.registerPlugin(r.a, z.a);
            var w = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            var h = this,
                                v = c;
                            this.qsa = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
                                return c.querySelectorAll(s)
                            }, this.qs = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
                                return c.querySelector(s)
                            }, this.anima_int = {
                                hold: this.qs(".anima-interac__hold"),
                                title: this.qsa(".anima-interac__texts li .wrapped"),
                                texts: this.qsa(".anima-interac__texts__p"),
                                svgs: this.qsa("li.each-svg"),
                                counter: this.qs(".anima-interac .dyna"),
                                arc: this.qs(".anima-interac__arc"),
                                prev: this.qsa(".prev-anima"),
                                next: this.qsa(".next-anima")
                            }, this.prev = 0, this.counter = 3, this.animating = !1, this.time = 1.6, this.animaInteract(), this.ease_svg = this.qs("#ease-svg"), this.attention_svg = this.qs("#attention-svg"), this.immersive_svg = this.qs("#immersive-svg"), this.easeAnima(), this.attentionAnima(), this.immersiveAnima(), this.tls = [this.tl_ease, this.tl_attention, this.tl_immersive], this.setters(), t.a.delayedCall(.5, (function() {
                                h.prev = 1, h.counter = 2, z.a.create({
                                    trigger: h.anima_int.hold,
                                    start: "top 70%",
                                    onEnter: function() {
                                        h.movePaths("next"), t.a.fromTo(h.qs(".anima-interac__btn .primary-btn"), {
                                            opacity: 0,
                                            yPercent: 200
                                        }, {
                                            delay: .6,
                                            duration: 1.6,
                                            opacity: 1,
                                            yPercent: 0,
                                            ease: "expo.out"
                                        })
                                    },
                                    onLeave: function() {
                                        h.tls[h.counter].pause()
                                    },
                                    onEnterBack: function() {
                                        h.tls[h.counter].play()
                                    }
                                })
                            }))
                        }
                    }, {
                        key: "setters",
                        value: function() {
                            t.a.set(this.anima_int.title, {
                                yPercent: 100
                            }), t.a.set(this.anima_int.texts, {
                                opacity: 0
                            }), t.a.set(this.anima_int.svgs, {
                                scale: 0
                            })
                        }
                    }, {
                        key: "immersiveAnima",
                        value: function() {
                            this.tl_immersive = t.a.timeline({
                                yoyo: !0,
                                repeat: -1,
                                defaults: {
                                    duration: 1.5
                                }
                            }).fromTo([this.immersive_svg, this.immersive_svg.querySelectorAll("#two_medium, #two_small")], {
                                transformOrigin: "center center"
                            }, {
                                ease: "back.inOut",
                                stagger: .1,
                                rotation: t.a.utils.wrap([-180, -180, 180])
                            }).to(this.immersive_svg, {
                                duration: .75,
                                transformOrigin: "center center",
                                ease: "expo.in",
                                scale: 1.6
                            }, "0").to(this.immersive_svg, {
                                transformOrigin: "center center",
                                ease: "expo.out",
                                scale: 1
                            }, ".75").to(this.immersive_svg.querySelectorAll("#two_medium, #two_small"), {
                                duration: .75,
                                transformOrigin: "center center",
                                ease: "back.in",
                                scale: .5
                            }, "0").to(this.immersive_svg.querySelectorAll("#two_medium, #two_small"), {
                                transformOrigin: "center center",
                                ease: "back.out",
                                scale: 1
                            }, ".75")
                        }
                    }, {
                        key: "attentionAnima",
                        value: function() {
                            this.tl_attention = t.a.timeline({
                                paused: !0,
                                repeat: -1,
                                defaults: {
                                    duration: 1.2
                                }
                            }).fromTo(this.attention_svg.querySelectorAll("g"), {
                                scale: 1.6,
                                transformOrigin: "center center"
                            }, {
                                ease: "back.inOut",
                                stagger: .1,
                                scale: t.a.utils.wrap([1, 2, 1.25])
                            }).to(this.attention_svg.querySelectorAll("g"), {
                                transformOrigin: "center center",
                                ease: "expo.inOut",
                                scale: 1.6,
                                stagger: -.5
                            }, "<1.35").to(this.attention_svg, {
                                transformOrigin: "center center",
                                ease: "expo.inOut",
                                rotation: 60
                            }, "<")
                        }
                    }, {
                        key: "easeAnima",
                        value: function() {
                            this.tl_ease = t.a.timeline({
                                paused: !0,
                                repeat: -1,
                                defaults: {
                                    duration: 1.5
                                }
                            }).to(this.ease_svg.querySelectorAll("g"), {
                                transformOrigin: "center center",
                                rotation: "80",
                                ease: "back.out",
                                stagger: -.1,
                                scale: 1.6
                            }).to(this.ease_svg.querySelectorAll("g"), {
                                transformOrigin: "center center",
                                ease: "expo.out",
                                scale: 1
                            }, "<.75")
                        }
                    }, {
                        key: "animaEls",
                        value: function(c) {
                            this.tls.forEach((function(c) {
                                c.pause()
                            })), this.prev = this.counter, "prev" == c && (this.counter > 0 ? (this.counter--, this.anima_int.counter.textContent = "0".concat(this.counter + 1)) : (this.counter = 2, this.anima_int.counter.textContent = "0".concat(this.counter + 1))), "next" == c && (this.counter < 2 ? (this.counter++, this.anima_int.counter.textContent = "0".concat(this.counter + 1)) : (this.counter = 0, this.anima_int.counter.textContent = "0".concat(this.counter + 1))), this.tls[this.counter].play(0), this.onAnima()
                        }
                    }, {
                        key: "onAnima",
                        value: function() {
                            t.a.fromTo(this.anima_int.title[this.counter], {
                                yPercent: 100
                            }, {
                                delay: .5 * this.time,
                                duration: this.time,
                                yPercent: 0,
                                ease: "expo.out"
                            }), t.a.fromTo(this.anima_int.title[this.prev], {
                                yPercent: 0
                            }, {
                                duration: .5 * this.time,
                                yPercent: -100,
                                ease: "expo.in"
                            }), t.a.fromTo(this.anima_int.texts[this.counter], {
                                opacity: 0,
                                yPercent: 100
                            }, {
                                delay: .5 * this.time,
                                duration: this.time / 2,
                                opacity: 1,
                                yPercent: 0,
                                ease: "expo.out"
                            }), t.a.fromTo(this.anima_int.texts[this.prev], {
                                opacity: 1
                            }, {
                                duration: .5 * this.time,
                                opacity: 0,
                                ease: "expo.in"
                            }), t.a.fromTo(this.anima_int.svgs[this.counter], {
                                scale: 0
                            }, {
                                delay: .15 * this.time,
                                duration: this.time / 2,
                                scale: 1,
                                ease: "expo.inOut"
                            }), t.a.fromTo(this.anima_int.svgs[this.prev], {
                                scale: 1
                            }, {
                                duration: this.time / 2,
                                scale: 0,
                                ease: "expo.inOut"
                            })
                        }
                    }, {
                        key: "movePaths",
                        value: function(c) {
                            var h = this;
                            this.animating || (this.anima_int.hold.classList.add("blocked"), this.animating = !0, this.els.forEach((function(v, m) {
                                var e, z = h.els_tls[m].progress();
                                "next" == c && (e = h.els_tls[m].progress() + h.percentage), "prev" == c && (e = h.els_tls[m].progress() - h.percentage), t.a.to(h.els_tls[m], {
                                    progress: e,
                                    duration: h.time,
                                    ease: "expo.inOut",
                                    onComplete: function() {
                                        t.a.set(h.els_tls[m], {
                                            progress: z
                                        })
                                    }
                                })
                            })), t.a.delayedCall(.25 * this.time, (function() {
                                return h.animaEls(c)
                            })), t.a.delayedCall(this.time, (function() {
                                h.animating = !1, h.anima_int.hold.classList.remove("blocked")
                            })))
                        }
                    }, {
                        key: "animaInteract",
                        value: function() {
                            var c = this;
                            this.el_path = this.qs("#path"), this.els = this.qsa(".anima-interac__bullet"), this.els_tls = [], this.percentage = 1 / (this.els.length - 1), this.created = !1;
                            var h = this;

                            function v() {
                                h.created && h.els.forEach((function(c, v) {
                                    h.els_tls = []
                                })), h.els.forEach((function(c, v) {
                                    var m = t.a.timeline({
                                        paused: !0
                                    }).to(c, {
                                        duration: 6,
                                        ease: "none",
                                        immediateRender: !0,
                                        motionPath: {
                                            path: h.el_path,
                                            align: h.el_path,
                                            alignOrigin: [.5, .5],
                                            autoRotate: "auto"
                                        }
                                    });
                                    m.progress(h.percentage * v), h.els_tls.push(m)
                                })), h.created = !0
                            }
                            v(), this.anima_int.prev.forEach((function(h) {
                                h.addEventListener("click", c.movePaths.bind(c, "prev"), null)
                            })), this.anima_int.next.forEach((function(h) {
                                h.addEventListener("click", c.movePaths.bind(c, "next"), null)
                            })), this.anima_int.arc.addEventListener("resize", v)
                        }
                    }]), c
                }()),
                y = v(54),
                x = v(29);
            t.a.registerPlugin(y.a, z.a, x.a);
            var M = new(function() {
                function c() {
                    Object(m.a)(this, c)
                }
                return Object(e.a)(c, [{
                    key: "init",
                    value: function(c) {
                        var h = this,
                            v = c;
                        this.qsa = function(s) {
                            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
                            return c.querySelectorAll(s)
                        }, this.qs = function(s) {
                            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
                            return c.querySelector(s)
                        }, this.body = document.querySelector("body"), new y.a(this.qsa("blockquote.quotes__bq"), {
                            type: "lines",
                            linesClass: "wrapped"
                        }), new y.a(this.qsa("blockquote.quotes__bq"), {
                            type: "lines",
                            linesClass: "wrap"
                        }), this.quotes = {
                            each: this.qsa(".quotes__each"),
                            each_wrapped: this.qsa(".quotes .wrapped")
                        }, this.tap_prev = this.qs(".quotes__nav__prev"), this.tap_next = this.qs(".quotes__nav__next"), this.tap_counter = this.qs(".quotes__nav .dyna"), this.tap_timer = this.qs(".quotes__nav .quote-timer"), this.current = 0, this.prev = this.quotes.each.length - 1, this.animating = !1, this.time = 1.4, this.onClick(), t.a.delayedCall(.2, (function() {
                            return h.setters()
                        })), this.getSvg(), document.querySelector(".quotes__nav .static").innerHTML = "/0".concat(this.quotes.each.length)
                    }
                }, {
                    key: "getSvg",
                    value: function() {
                        this.qsa(".quotes__who").forEach((function(c) {
                            var h = c.dataset.flag,
                                v = document.createElement("div");
                            v.classList.add("quote-flag"), v.innerHTML = h, c.appendChild(v)
                        }))
                    }
                }, {
                    key: "setters",
                    value: function() {
                        var c = this;
                        t.a.set([this.quotes.each_wrapped, ".quote-flag svg"], {
                            yPercent: 105
                        }), t.a.set(this.tap_timer, {
                            rotation: -90,
                            transformOrigin: "center center"
                        }), this.quotes.each.forEach((function(c, h) {
                            return 0 != h ? c.style.opacity = 0 : null
                        })), this.tl_start = t.a.timeline({
                            paused: !0,
                            scrollTrigger: {
                                trigger: this.quotes.each[0],
                                start: "top 70%",
                                onEnter: function() {
                                    c.tl_start.play()
                                },
                                onc: !0
                            }
                        }).to(this.quotes.each[0].querySelectorAll(".wrapped, .quote-flag svg"), {
                            duration: 2,
                            yPercent: 0,
                            ease: "expo.out",
                            stagger: .1,
                            overwrite: !0
                        }).fromTo(this.tap_timer, {
                            drawSVG: "0% 0%"
                        }, {
                            duration: 5,
                            drawSVG: "0% 100%",
                            ease: "none",
                            onComplete: function() {
                                return c.tap_next.click()
                            }
                        }, 1.5)
                    }
                }, {
                    key: "onMoveQuote",
                    value: function() {
                        var c = this;
                        t.a.to(this.tap_timer, {
                            duration: 1,
                            drawSVG: "100% 100%",
                            ease: "expo.out",
                            overwrite: !0
                        }), t.a.fromTo(this.quotes.each[this.prev].querySelectorAll(".wrapped, .quote-flag svg"), {
                            yPercent: 0
                        }, {
                            duration: .75,
                            yPercent: -105,
                            ease: "expo.in",
                            overwrite: !0,
                            onComplete: function() {
                                return c.quotes.each[c.prev].style.opacity = 0
                            }
                        }), t.a.fromTo(this.quotes.each[this.current].querySelectorAll(".wrapped, .quote-flag svg"), {
                            yPercent: 105
                        }, {
                            delay: .8,
                            duration: 2,
                            yPercent: 0,
                            ease: "expo.out",
                            stagger: .1,
                            overwrite: !0,
                            onStart: function() {
                                return c.quotes.each[c.current].style.opacity = 1
                            }
                        }), t.a.delayedCall(.75 * this.time, (function() {
                            return t.a.fromTo(c.tap_timer, {
                                drawSVG: "0% 0%"
                            }, {
                                delay: 1,
                                duration: 5,
                                drawSVG: "0% 100%",
                                ease: "none",
                                overwrite: !0,
                                onComplete: function() {
                                    return c.tap_next.click()
                                }
                            })
                        })), t.a.delayedCall(.75 * this.time, (function() {
                            return c.tap_counter.innerHTML = "0".concat(c.current + 1)
                        })), t.a.delayedCall(this.time + 1, (function() {
                            return c.animating = !1
                        }))
                    }
                }, {
                    key: "onClick",
                    value: function() {
                        var c = this;
                        this.tap_prev.addEventListener("click", (function() {
                            c.animating || (c.animating = !0, c.prev = c.current, c.current = c.prev - 1, c.current < 0 && (c.current = c.quotes.each.length - 1, c.prev = 0), c.onMoveQuote())
                        }), null), this.tap_next.addEventListener("click", (function() {
                            c.animating || (c.animating = !0, c.prev = c.current, c.current++, c.current > c.quotes.each.length - 1 && (c.prev = c.quotes.each.length - 1, c.current = 0), c.onMoveQuote())
                        }), null)
                    }
                }]), c
            }());
            t.a.registerPlugin(z.a);
            var k = new(function() {
                function c() {
                    Object(m.a)(this, c)
                }
                return Object(e.a)(c, [{
                    key: "init",
                    value: function(c) {
                        var h = c;
                        this.qsa = function(s) {
                            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                            return c.querySelectorAll(s)
                        }, this.qs = function(s) {
                            var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                            return c.querySelector(s)
                        }, this.diag_exp = {
                            el: this.qsa("#diag-exp"),
                            circles: this.qsa("#diag-exp circle"),
                            lines: this.qsa("#diag-exp line"),
                            texts: this.qsa("#diag-exp text"),
                            indic: this.qs(".expertise__svg__line-btn__line"),
                            memo: this.qs(".expertise__svg__line-btn__btn")
                        }, this.animaDiagExp()
                    }
                }, {
                    key: "animaDiagExp",
                    value: function() {
                        var c = this;
                        this.tl = t.a.timeline({
                            paused: !0
                        }).from(this.diag_exp.circles, {
                            duration: 2,
                            rotation: 460,
                            transformOrigin: "center center",
                            drawSVG: "0%",
                            ease: "expo.inOut",
                            stagger: .1
                        }).from(this.diag_exp.lines, {
                            duration: 2,
                            drawSVG: "0%",
                            ease: "expo.out"
                        }, "<50%").from(this.diag_exp.texts, {
                            duration: .8,
                            opacity: 0,
                            ease: "power1.out"
                        }, "<20%"), t.a.delayedCall(.5, (function() {
                            z.a.create({
                                id: "diag",
                                start: "top 100%",
                                trigger: c.diag_exp.el,
                                onEnter: function() {
                                    return c.tl.play()
                                }
                            })
                        })), window.innerWidth > 1025 && this.tl.from(this.diag_exp.indic, {
                            duration: 2,
                            scaleY: 0,
                            transformOrigin: "bottom left",
                            ease: "expo.inOut",
                            stagger: .1
                        }, .5).from(this.diag_exp.memo, {
                            duration: .8,
                            opacity: 0,
                            ease: "power1.out"
                        }, "<40%")
                    }
                }]), c
            }());
            t.a.registerPlugin(z.a);
            var C = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            var h = c;
                            this.qsa = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                                return c.querySelectorAll(s)
                            }, this.qs = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                                return c.querySelector(s)
                            }, this.body = document.querySelector("body"), this.onMarquee(), M.init(c), w.init(c), k.init(c), this.scrambleImgs()
                        }
                    }, {
                        key: "onMarquee",
                        value: function() {
                            this.mq = this.qsa(".ctn-marquee"), this.mq_top = this.qs(".mq-top .ctn-marquee"), this.mq_bottom = this.qs(".mq-bottom .ctn-marquee"), this.tlScale = {
                                time: 1
                            };
                            var c = this,
                                h = 60;
                            window.innerWidth < 1025 && (h = 80), this.tl_mqtop = t.a.timeline({
                                repeat: -1
                            }).fromTo(this.mq_top, {
                                xPercent: 0
                            }, {
                                duration: h,
                                xPercent: -50,
                                ease: "none"
                            }), this.tl_mqbottom = t.a.timeline({
                                repeat: -1
                            }).fromTo(this.mq_bottom, {
                                xPercent: -50
                            }, {
                                duration: h,
                                xPercent: 0,
                                ease: "none"
                            }), this.mq_top.addEventListener("mouseenter", (function() {
                                t.a.to(c.tl_mqtop, {
                                    duration: .6,
                                    timeScale: .3
                                })
                            }), null), this.mq_top.addEventListener("mouseleave", (function() {
                                t.a.to(c.tl_mqtop, {
                                    duration: .6,
                                    timeScale: 1
                                })
                            }), null), this.mq_bottom.addEventListener("mouseenter", (function() {
                                t.a.to(c.tl_mqbottom, {
                                    duration: .6,
                                    timeScale: .3
                                })
                            }), null), this.mq_bottom.addEventListener("mouseleave", (function() {
                                t.a.to(c.tl_mqbottom, {
                                    duration: .6,
                                    timeScale: 1
                                })
                            }), null)
                        }
                    }, {
                        key: "scrambleImgs",
                        value: function() {
                            var c = this,
                                h = this;
                            this.imgs_lb = this.qsa(".recog__img picture + picture"), t.a.set(this.imgs_lb, {
                                opacity: 0
                            }), this.tl_imgslb = t.a.timeline({
                                paused: !0,
                                repeat: -1,
                                repeatDelay: 1
                            }), this.imgs_lb.forEach((function(element, c) {
                                h.tl_imgslb.to(element, {
                                    duration: .001,
                                    opacity: 1
                                }), h.tl_imgslb.to(element, {
                                    delay: 1,
                                    duration: .001,
                                    opacity: 0
                                })
                            })), t.a.delayedCall(.6, (function() {
                                z.a.create({
                                    trigger: c.qs(".recog__content "),
                                    start: "top 100%",
                                    end: "bottom 0%",
                                    onEnter: function() {
                                        c.tl_imgslb.play()
                                    },
                                    onEnterBack: function() {
                                        c.tl_imgslb.play()
                                    },
                                    onLeave: function() {
                                        c.tl_imgslb.pause()
                                    },
                                    onLeaveBack: function() {
                                        c.tl_imgslb.pause()
                                    }
                                })
                            }))
                        }
                    }]), c
                }()),
                j = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            var h = c;
                            this.qsa = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                                return c.querySelectorAll(s)
                            }, this.qs = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                                return c.querySelector(s)
                            }, this.body = document.querySelector("body"), this.vimeoVideos()
                        }
                    }, {
                        key: "vimeoVideos",
                        value: function() {
                            function c() {
                                this.classList.add("remove-cover"), this.closest(".slice-vimeo").querySelector(".slice-vimeo__hold ").classList.add("no-bg");
                                var c = this.closest(".slice-vimeo").querySelector("iframe"),
                                    h = c.dataset.src;
                                c.src = h
                            }
                            this.qsa(".cover-vimeo").forEach((function(element) {
                                element.addEventListener("click", c, null)
                            }))
                        }
                    }]), c
                }());
            t.a.registerPlugin(z.a);
            var S = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            this.plx = c || null, this.plx && (this.onScrollProxy(), this.parallaxImg())
                        }
                    }, {
                        key: "parallaxImg",
                        value: function() {
                            var c = 40;
                            window.innerWidth > 1024 && (c = 50), t.a.to(this.plx.querySelector("img"), {
                                scrollTrigger: {
                                    trigger: this.plx,
                                    start: "top 100%",
                                    end: "bottom top",
                                    scrub: ".6"
                                },
                                yPercent: c,
                                ease: "none"
                            })
                        }
                    }, {
                        key: "onScroll",
                        value: function() {
                            z.a.update()
                        }
                    }, {
                        key: "onScrollProxy",
                        value: function() {
                            z.a.scrollerProxy("[data-scroll-content]", {
                                scrollTop: function(c) {
                                    return arguments.length ? null : -1 * document.querySelector("[data-scroll-content]").getBoundingClientRect().top
                                },
                                getBoundingClientRect: function() {
                                    return {
                                        top: 0,
                                        left: 0,
                                        width: window.innerWidth,
                                        height: window.innerHeight
                                    }
                                }
                            }), z.a.defaults({
                                scroller: "[data-scroll-content]"
                            }), z.a.refresh()
                        }
                    }]), c
                }()),
                V = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            this.$header = c || null, this.$header_img = this.$header.querySelector("img"), this.h = window.innerHeight, this.w = window.innerWidth
                        }
                    }, {
                        key: "onScroll",
                        value: function(c) {
                            if (c < this.h && this.w > 1024) {
                                var h = c / this.h;
                                t.a.set(this.$header, {
                                    yPercent: 40 * h
                                })
                            }
                        }
                    }]), c
                }());
            t.a.registerPlugin(y.a, z.a);
            var L = new(function() {
                function c() {
                    Object(m.a)(this, c)
                }
                return Object(e.a)(c, [{
                    key: "init",
                    value: function(c) {
                        this.content = c, this.body = document.querySelector("body"), this.setters(), (this.body.classList.contains("is-FullExperience") || this.body.classList.contains("is-skipped")) && (this.onScroll(), window.innerWidth > 1024 && this.moveTitles()), this.body.classList.contains("is-ModerateExperience") && this.revealTitles()
                    }
                }, {
                    key: "setters",
                    value: function() {
                        this.title_section = {
                            el: this.content.querySelectorAll(".title-section"),
                            all_words: this.content.querySelectorAll(".title-section h1"),
                            word1: this.content.querySelectorAll(".title-section__word1 h1"),
                            word2: this.content.querySelectorAll(".title-section__word2 h1")
                        }
                    }
                }, {
                    key: "revealTitles",
                    value: function() {
                        this.title_section.all_words.forEach((function(c, h) {
                            new y.a(c, {
                                type: "words,chars",
                                charsClass: "char-title"
                            })
                        })), t.a.set(".char-title", {
                            yPercent: 101
                        });
                        var c = new IntersectionObserver((function(c, h) {
                            c.forEach((function(c) {
                                if (c.isIntersecting) {
                                    var title = c.target;
                                    t.a.to(title.querySelectorAll(".char-title"), {
                                        duration: 2.2,
                                        yPercent: 0,
                                        ease: "expo.out",
                                        stagger: ".065"
                                    }), h.unobserve(c.target)
                                }
                            }))
                        }), {
                            threshold: .65
                        });
                        this.title_section.all_words.forEach((function(h) {
                            return c.observe(h)
                        }))
                    }
                }, {
                    key: "moveTitles",
                    value: function() {
                        var c = this;
                        this.title_section.word1.forEach((function(h, v) {
                            t.a.from([h, c.title_section.word2[v]], {
                                scrollTrigger: {
                                    trigger: c.title_section.el[v],
                                    start: "top 100%",
                                    end: "+=".concat(3 * window.innerHeight),
                                    scrub: !0
                                },
                                duration: 1,
                                yPercent: t.a.utils.wrap([50, -50]),
                                ease: "none"
                            })
                        }))
                    }
                }, {
                    key: "onScroll",
                    value: function() {
                        z.a.update()
                    }
                }, {
                    key: "onScrollProxy",
                    value: function() {
                        z.a.scrollerProxy("[data-scroll-content]", {
                            scrollTop: function(c) {
                                return arguments.length ? null : -1 * document.querySelector("[data-scroll-content]").getBoundingClientRect().top
                            },
                            getBoundingClientRect: function() {
                                return {
                                    top: 0,
                                    left: 0,
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                }
                            }
                        }), z.a.defaults({
                            scroller: "[data-scroll-content]"
                        }), z.a.refresh()
                    }
                }]), c
            }());
            t.a.registerPlugin(z.a);
            var H = new(function() {
                function c() {
                    Object(m.a)(this, c)
                }
                return Object(e.a)(c, [{
                    key: "bindMethods",
                    value: function() {
                        var c = this;
                        ["scroll", "run", "resize"].forEach((function(h) {
                            return c[h] = c[h].bind(c)
                        }))
                    }
                }, {
                    key: "setStyles",
                    value: function() {
                        this.dom.el.style.position = "fixed", this.dom.el.style.top = 0, this.dom.el.style.left = 0, this.dom.el.style.height = "100%", this.dom.el.style.width = "100%", this.dom.el.style.overflow = "hidden"
                    }
                }, {
                    key: "setHeight",
                    value: function() {
                        document.body.style.height = "".concat(this.dom.content.offsetHeight, "px")
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.setHeight(), this.scroll()
                    }
                }, {
                    key: "scroll",
                    value: function() {
                        this.data.current = window.scrollY
                    }
                }, {
                    key: "run",
                    value: function() {
                        this.data.last = this.math.lerp(this.data.last, this.data.current, this.data.ease), this.data.last = Math.floor(100 * this.data.last) / 100;
                        this.data.current, this.data.last, this.config.width;
                        window.innerWidth > 1024 && (this.dom.content.style.transform = "translate3d(0, -".concat(this.data.last.toFixed(0), "px, 0)")), "index" === this.isPage && (this.once || (C.init(this.contentPage), !this.body.classList.contains("is-SimpleExperience") && S.init(this.contentPage.querySelector(".section-imgplx__img")), this.once = !0), !this.body.classList.contains("is-SimpleExperience") && S.onScroll()), "about" === this.isPage && (this.once || (d.init(this.contentPage), this.once = !0), d.onScroll()), "project-uid" === this.isPage && (this.once || (V.init(this.contentPage.querySelector(".header-project__img")), S.init(this.contentPage.querySelector(".Bleed .slice-img__hold")), this.once = !0), V.onScroll(this.data.last.toFixed(0)), S.onScroll()), "story-uid" === this.isPage && (this.once || (j.init(this.contentPage), S.init(this.contentPage.querySelector(".Bleed .slice-img__hold")), this.once = !0), S.onScroll()), "expertise" === this.isPage && (this.once || (_.init(this.contentPage), this.once = !0), _.onScroll()), "form" === this.isPage && (this.once || (f.init(this.contentPage), this.once = !0)), (this.body.classList.contains("is-FullExperience") || this.body.classList.contains("is-ModerateExperience") || this.body.classList.contains("is-skipped")) && this.section_title > 0 && !this.once_animatitle && (this.once_animatitle || (L.init(this.contentPage), this.once_animatitle = !0), (this.body.classList.contains("is-FullExperience") || this.body.classList.contains("is-skipped")) && L.onScroll()), this.requestAnimationFrame()
                    }
                }, {
                    key: "on",
                    value: function() {
                        var c = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        window.innerWidth > 1024 && (this.setStyles(), this.setHeight()), this.addEvents(), c && this.requestAnimationFrame()
                    }
                }, {
                    key: "off",
                    value: function() {
                        var c = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        c && this.cancelAnimationFrame(), this.removeEvents()
                    }
                }, {
                    key: "requestAnimationFrame",
                    value: function(c) {
                        function h() {
                            return c.apply(this, arguments)
                        }
                        return h.toString = function() {
                            return c.toString()
                        }, h
                    }((function() {
                        this.rAF = requestAnimationFrame(this.run)
                    }))
                }, {
                    key: "cancelAnimationFrame",
                    value: function(c) {
                        function h() {
                            return c.apply(this, arguments)
                        }
                        return h.toString = function() {
                            return c.toString()
                        }, h
                    }((function() {
                        cancelAnimationFrame(this.rAF)
                    }))
                }, {
                    key: "destroy",
                    value: function() {
                        this.observer.unobserve(this.contentPage), this.observer = null, this.off(), document.body.style.height = "", this.data = null, z.a.getAll().forEach((function(c) {
                            return c.kill()
                        }))
                    }
                }, {
                    key: "addEvents",
                    value: function() {
                        window.addEventListener("resize", this.resize, {
                            passive: !0
                        }), window.addEventListener("scroll", this.scroll, {
                            passive: !0
                        })
                    }
                }, {
                    key: "removeEvents",
                    value: function() {
                        window.removeEventListener("resize", this.resize, {
                            passive: !0
                        }), window.removeEventListener("scroll", this.scroll, {
                            passive: !0
                        })
                    }
                }, {
                    key: "onObserve",
                    value: function() {
                        var c = this;
                        this.observer = new ResizeObserver((function(h) {
                            c.resize()
                        })), this.observer.observe(this.contentPage)
                    }
                }, {
                    key: "init",
                    value: function(c, h, v) {
                        this.contentPage = v, this.isPage = c, this.once = h, this.body = document.querySelector("body"), this.onObserve(), this.section_title = this.contentPage.querySelectorAll(".title-section__word1").length, this.once_animatitle = !1, z.a.getAll().forEach((function(c) {
                            return c.kill()
                        })), this.isPage = c, this.math = {
                            lerp: function(a, b, c) {
                                return (1 - c) * a + c * b
                            },
                            norm: function(c, h, v) {
                                return (c - h) / (v - h)
                            }
                        }, this.config = {
                            height: window.innerHeight,
                            width: window.innerWidth
                        }, this.bindMethods(), this.data = {
                            ease: .085,
                            current: 0,
                            last: 0
                        }, this.dom = {
                            el: document.querySelector("div#__nuxt"),
                            content: document.querySelector("[data-scroll-content]")
                        }, this.rAF = null, this.on()
                    }
                }]), c
            }())
        },
        158: function(c, h, v) {
            c.exports = v.p + "fonts/a2g.5212ccf.woff"
        },
        165: function(c, h, v) {
            "use strict";
            var m = v(224);
            m.gsap.config({
                nullTargetWarn: !1
            })
        },
        166: function(c, h, v) {
            "use strict";
            (function(c) {
                var m = v(126),
                    e = v(231);
                h.a = m, c.PIXI = m, c.SHOCK = e.a, m.utils.skipHello()
            }).call(this, v(49))
        },
        167: function(c, h, v) {
            "use strict";
            v.r(h);
            var m = {
                    props: ["link", "text", "version", "rel", "target"]
                },
                e = v(15),
                component = Object(e.a)(m, (function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return c.link ? v("NuxtLink", {
                        staticClass: "primary-btn",
                        class: c.version,
                        attrs: {
                            to: c.link,
                            title: c.text,
                            rel: c.rel,
                            target: c.target
                        }
                    }, [v("div", {
                        staticClass: "primary-btn__hold"
                    }, [v("span", {
                        staticClass: "primary-btn__text"
                    }, [c._v(c._s(c.text))]), v("div", {
                        staticClass: "primary-btn__circ"
                    }), v("div", {
                        staticClass: "primary-btn__icon"
                    }, [v("div", {
                        staticClass: "primary-btn__icon__hold"
                    }, [v("div", {
                        staticClass: "primary-btn__svg"
                    }, [v("svg", {
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 8 8",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("path", {
                        attrs: {
                            d: "M0.578554 0L0.568579 1.46635H5.49626L0 6.96264L1.03741 8L6.53367 2.50379V7.43141L8 7.42145V0H0.578554Z",
                            fill: "white"
                        }
                    })])])])])])]) : c._e()
                }), [], !1, null, null, null);
            h.default = component.exports
        },
        168: function(c, h, v) {
            "use strict";
            v.r(h);
            var m = v(2),
                e = v(35),
                t = v(72),
                z = v(83),
                r = v(99),
                n = v(36),
                o = v(33),
                l = {
                    props: ["dash"],
                    methods: {
                        changeColor: function(c) {
                            var h = c.target.closest("li").dataset.mood;
                            localStorage.setItem("mood", h), c.target.closest("footer").classList.add("no-touch"), m.a.delayedCall(1.2, (function() {
                                n.a.setMood(localStorage.getItem("name"), h), o.a.createWipeDark()
                            })), m.a.delayedCall(2, (function() {
                                c.target.closest("footer").classList.remove("no-touch")
                            })), z.a.playDraw()
                        },
                        activeRew: function() {
                            document.querySelector("body").classList.contains("is-complete") && document.querySelector("body").classList.add("is-rewards")
                        }
                    },
                    mounted: function() {
                        e.a.onDashMusic(this.$el.querySelector(".footer__music"), this.dash.dash_music_group), e.a.onDashAvail(this.$el.querySelector(".footer__avail")), e.a.onDashHealth(this.$el.querySelector(".footer__health")), e.a.onDashCta(this.$el.querySelector(".footer__cta"), "footer"), t.a.setValues(this.$el.querySelector(".footer__explore__numb.js-explore"), this.$el.querySelector(".footer__explore .svg-explore-circle circle.percent")), z.a.setDraw(this.$el), r.a.isFooter(this.$el)
                    }
                },
                d = v(15),
                component = Object(d.a)(l, (function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("footer", {
                        staticClass: "footer e-dark"
                    }, [v("div", {
                        staticClass: "footer__hold e-hold"
                    }, [v("div", {
                        staticClass: "footer__dash"
                    }, [v("div", {
                        staticClass: "footer__music"
                    }, [v("div", {
                        staticClass: "footer__caption"
                    }, [v("span", [c._v(c._s(c.dash.dash_music_caption))])]), v("div", {
                        staticClass: "footer__ctn"
                    }, [v("a", {
                        staticClass: "footer__music__svg e-flex js-music__svg",
                        attrs: {
                            href: "#",
                            target: "_blank",
                            rel: "noreferrer",
                            title: "Spotify"
                        }
                    }, [v("svg", {
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 118 118",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("circle", {
                        attrs: {
                            opacity: "0.11",
                            cx: "59",
                            cy: "59",
                            r: "59",
                            fill: "white"
                        }
                    }), v("circle", {
                        attrs: {
                            opacity: "0.54",
                            cx: "59.0001",
                            cy: "59.0003",
                            r: "26.4744",
                            stroke: "var(--dark)",
                            "stroke-width": "1.51282"
                        }
                    }), v("circle", {
                        attrs: {
                            cx: "58.9999",
                            cy: "58.9996",
                            r: "7.5641",
                            fill: "var(--soft)"
                        }
                    }), v("circle", {
                        attrs: {
                            cx: "31.391",
                            cy: "18.5317",
                            r: "1.89103",
                            fill: "white"
                        }
                    })])]), v("ul", {
                        staticClass: "footer__music__list e-flex"
                    }, c._l(c.dash.dash_music_group, (function(h) {
                        return v("li", {
                            staticClass: "footer__pl js-pl"
                        }, [v("a", {
                            class: "music-" + h.mood,
                            attrs: {
                                href: h.link,
                                target: "_blank",
                                rel: "noreferrer",
                                title: h.playlist,
                                mood: h.mood
                            }
                        }, [c._v(c._s(h.playlist))])])
                    })), 0)])]), v("div", {
                        staticClass: "footer__health"
                    }, [v("div", {
                        staticClass: "footer__caption"
                    }, [v("span", [c._v(c._s(c.dash.dash_text_health))])]), c._m(0)]), v("div", {
                        staticClass: "footer__cta"
                    }, [v("div", {
                        staticClass: "footer__caption"
                    }, [v("span", [c._v(c._s(c.dash.dash_text_cta))])]), v("div", {
                        staticClass: "footer__ctn"
                    }, [v("ul", {
                        staticClass: "footer__cta__list js-dash-cta__list"
                    }, c._l(c.dash.dash_cta_group, (function(h) {
                        return v("li", {
                            staticClass: "footer__cta__each js-dash-cta__each"
                        }, [v("a", {
                            attrs: {
                                href: h.link,
                                target: "_blank",
                                rel: "noreferrer",
                                title: h.link
                            }
                        }, [c._v(c._s(h.text))])])
                    })), 0), v("ul", {
                        staticClass: "footer__cta__dots"
                    }, c._l(c.dash.dash_cta_group, (function(c) {
                        return v("li", {
                            staticClass: "footer__cta__dot js-dash-cta__dot"
                        })
                    })), 0)])]), v("div", {
                        staticClass: "footer__avail js-avail"
                    }, [v("div", {
                        staticClass: "footer__caption"
                    }, [v("span", [c._v(c._s(c.dash.dash_text_avail))])]), c._m(1)]), v("div", {
                        staticClass: "footer__colors e-rel"
                    }, [v("div", {
                        staticClass: "footer__caption"
                    }, [v("span", [c._v(c._s(c.dash.dash_colors_caption))])]), v("div", {
                        staticClass: "footer__ctn"
                    }, [v("ul", {
                        staticClass: "footer__colors__list e-flex"
                    }, c._l(c.dash.dash_colors_group, (function(h) {
                        return v("li", {
                            staticClass: "footer__color",
                            class: "mood-" + h.mood_id,
                            attrs: {
                                "data-mood": h.mood_id
                            },
                            on: {
                                click: c.changeColor
                            }
                        }, [v("button", {
                            staticClass: "e-curp",
                            attrs: {
                                "aria-label": "switch mode",
                                "data-color1": h.color_1,
                                "data-color2": h.color_2,
                                "data-bgholder": h.color_bgholder
                            }
                        }, [v("svg", {
                            attrs: {
                                width: "100%",
                                viewBox: "0 0 34 34",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [v("circle", {
                            attrs: {
                                cx: "16.7715",
                                cy: "16.7715",
                                r: "11.8592",
                                transform: "rotate(45 16.7715 16.7715)",
                                fill: h.color_display1
                            }
                        }), v("path", {
                            attrs: {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M8.38574 8.38672C3.75454 13.018 3.75458 20.5268 8.38586 25.1581C13.0171 29.7894 20.5259 29.7894 25.1572 25.1582L8.38574 8.38672Z",
                                fill: h.color_display2
                            }
                        })])])])
                    })), 0)]), v("svg", {
                        staticClass: "svg-cover",
                        attrs: {
                            width: "100%",
                            height: "100%"
                        }
                    }, [v("rect", {
                        staticClass: "rect-bg",
                        attrs: {
                            width: "100%",
                            height: "100%",
                            rx: "17",
                            fill: "transparent"
                        }
                    }), v("rect", {
                        staticClass: "border-hovers rect-border",
                        attrs: {
                            fill: "transparent",
                            x: "0.5",
                            y: "0.5",
                            width: "100%",
                            height: "100%",
                            rx: "16.5",
                            stroke: "var(--white)",
                            "stroke-width": "1.5"
                        }
                    }), v("rect", {
                        staticClass: "border-hovers rect-border2",
                        attrs: {
                            fill: "transparent",
                            x: "0.5",
                            y: "0.5",
                            width: "100%",
                            height: "100%",
                            rx: "16.5",
                            stroke: "var(--white)",
                            "stroke-width": "1.5"
                        }
                    })])]), v("div", {
                        staticClass: "footer__explore"
                    }, [v("div", {
                        staticClass: "footer__caption"
                    }, [v("span", [c._v(c._s(c.dash.dash_text_exploration))])]), v("div", {
                        staticClass: "footer__ctn"
                    }, [v("div", {
                        staticClass: "footer__explore__svg e-flex e-cur trg-rews",
                        on: {
                            click: c.activeRew
                        }
                    }, [v("svg", {
                        staticClass: "svg-explore-circle",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("circle", {
                        staticClass: "circ-static",
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--white)",
                            pathLength: "1"
                        }
                    }), v("circle", {
                        staticClass: "percent",
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--color)",
                            pathLength: "1"
                        }
                    })])]), v("div", {
                        staticClass: "footer__explore__percnts e-flex e-abs e-curp trg-rews",
                        on: {
                            click: c.activeRew
                        }
                    }, [v("span", {
                        staticClass: "footer__explore__numb js-explore"
                    }, [c._v("XX")]), v("span", {
                        staticClass: "footer__explore__symbol js-span-perc"
                    }, [c._v("%")])])])])]), v("div", {
                        staticClass: "footer__links"
                    }, [v("ul", {
                        staticClass: "footer__links__hold"
                    }, c._l(c.dash.dash_links_group, (function(h) {
                        return v("li", [null == h.link ? [v("NuxtLink", {
                            attrs: {
                                to: "/",
                                title: "VICTOR WORK"
                            }
                        }, [c._v("HOME")])] : [v("NuxtLink", {
                            staticClass: "lined",
                            attrs: {
                                to: "/" + h.link,
                                title: h.text
                            }
                        }, [c._v(c._s(h.text))])]], 2)
                    })), 0)]), v("div", {
                        staticClass: "footer__logo"
                    }, [v("NuxtLink", {
                        attrs: {
                            to: "/",
                            title: "Victor Work"
                        }
                    }, [v("svg", {
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 1865 406",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("path", {
                        attrs: {
                            d: "M156.419 402.001H19.7911L0.421143 54.0331V4.22455H84.473L91.0449 345.62L96.9251 4.22455H176.134V54.0331L156.419 402.001Z",
                            fill: "var(--soft)"
                        }
                    }), v("path", {
                        attrs: {
                            d: "M267.264 402.001H182.52V4.22455H267.264V402.001Z",
                            fill: "var(--soft)"
                        }
                    }), v("path", {
                        attrs: {
                            d: "M367.435 198.616V69.2523C367.435 67.6382 366.973 66.7158 366.051 66.4852C365.359 66.024 364.552 65.7934 363.63 65.7934C362.477 65.7934 361.554 66.024 360.863 66.4852C360.171 66.7158 359.825 67.6382 359.825 69.2523V336.627C359.825 338.241 360.171 339.279 360.863 339.74C361.554 339.971 362.477 340.086 363.63 340.086C364.552 340.086 365.359 339.971 366.051 339.74C366.973 339.279 367.435 338.241 367.435 336.627V205.534H449.757V339.74C449.757 351.731 447.566 361.993 443.185 370.525C439.034 378.826 433.154 385.629 425.544 390.932C417.935 396.005 408.942 399.695 398.565 402.001C388.188 404.307 376.889 405.46 364.667 405.46H362.592C349.679 405.46 337.803 404.307 326.965 402.001C316.127 399.695 306.788 396.005 298.948 390.932C291.338 385.629 285.343 378.826 280.961 370.525C276.58 361.993 274.389 351.731 274.389 339.74V66.4852C274.389 54.4942 276.58 44.3481 280.961 36.0466C285.343 27.5146 291.338 20.7121 298.948 15.639C306.788 10.3353 316.127 6.53049 326.965 4.22455C337.803 1.9186 349.679 0.765625 362.592 0.765625H364.667C376.889 0.765625 388.188 1.9186 398.565 4.22455C408.942 6.53049 417.935 10.3353 425.544 15.639C433.154 20.7121 439.034 27.5146 443.185 36.0466C447.566 44.3481 449.757 54.4942 449.757 66.4852V198.616H367.435Z",
                            fill: "var(--soft)"
                        }
                    }), v("path", {
                        attrs: {
                            d: "M495.928 74.7866H453.729V4.22455H622.179V74.7866H579.98V402.001H495.928V74.7866Z",
                            fill: "var(--soft)"
                        }
                    }), v("path", {
                        attrs: {
                            d: "M626.024 66.4852C626.024 54.4942 628.215 44.3481 632.596 36.0466C636.977 27.5146 642.973 20.7121 650.583 15.639C658.423 10.3353 667.762 6.53049 678.6 4.22455C689.438 1.9186 701.313 0.765625 714.227 0.765625H716.302C729.215 0.765625 741.091 1.9186 751.929 4.22455C762.767 6.53049 771.991 10.3353 779.6 15.639C787.441 20.7121 793.551 27.5146 797.933 36.0466C802.314 44.3481 804.505 54.4942 804.505 66.4852V339.74C804.505 351.731 802.314 361.993 797.933 370.525C793.551 378.826 787.441 385.629 779.6 390.932C771.991 396.005 762.767 399.695 751.929 402.001C741.091 404.307 729.215 405.46 716.302 405.46H714.227C701.313 405.46 689.438 404.307 678.6 402.001C667.762 399.695 658.423 396.005 650.583 390.932C642.973 385.629 636.977 378.826 632.596 370.525C628.215 361.993 626.024 351.731 626.024 339.74V66.4852ZM711.46 336.627C711.46 338.241 711.805 339.279 712.497 339.74C713.189 339.971 714.111 340.086 715.264 340.086C716.187 340.086 716.994 339.971 717.686 339.74C718.608 339.279 719.069 338.241 719.069 336.627V69.2523C719.069 67.6382 718.608 66.7158 717.686 66.4852C716.994 66.024 716.187 65.7934 715.264 65.7934C714.111 65.7934 713.189 66.024 712.497 66.4852C711.805 66.7158 711.46 67.6382 711.46 69.2523V336.627Z",
                            fill: "var(--soft)"
                        }
                    }), v("path", {
                        attrs: {
                            d: "M896.558 402.001H811.814V4.22455H916.966C941.409 4.22455 959.626 9.98943 971.617 21.5192C983.838 32.8183 989.949 48.6141 989.949 68.9064V174.058C989.949 184.434 988.911 193.197 986.836 200.346C984.76 207.494 980.61 213.259 974.384 217.64L989.949 364.99V402.001H907.972L896.558 213.489V402.001ZM896.558 182.359H900.363C901.285 182.359 902.092 182.244 902.784 182.013C903.706 181.552 904.168 180.514 904.168 178.9V69.2523C904.168 67.6382 903.706 66.7158 902.784 66.4852C902.092 66.024 901.285 65.7934 900.363 65.7934H896.558V182.359Z",
                            fill: "var(--soft)"
                        }
                    }), v("path", {
                        attrs: {
                            d: "M1122.35 4.22455H1213.32L1225.43 344.929L1226.12 4.22455H1307.41V54.0331L1288.04 402.001H1178.39L1168.7 154.688L1165.24 402.001H1048.68L1029.65 54.0331V4.22455H1110.59L1111.28 344.929L1122.35 4.22455Z",
                            fill: "var(--soft)"
                        }
                    }), v("path", {
                        attrs: {
                            d: "M1311.05 66.4852C1311.05 54.4942 1313.24 44.3481 1317.63 36.0466C1322.01 27.5146 1328 20.7121 1335.61 15.639C1343.45 10.3353 1352.79 6.53049 1363.63 4.22455C1374.47 1.9186 1386.34 0.765625 1399.26 0.765625H1401.33C1414.24 0.765625 1426.12 1.9186 1436.96 4.22455C1447.8 6.53049 1457.02 10.3353 1464.63 15.639C1472.47 20.7121 1478.58 27.5146 1482.96 36.0466C1487.34 44.3481 1489.53 54.4942 1489.53 66.4852V339.74C1489.53 351.731 1487.34 361.993 1482.96 370.525C1478.58 378.826 1472.47 385.629 1464.63 390.932C1457.02 396.005 1447.8 399.695 1436.96 402.001C1426.12 404.307 1414.24 405.46 1401.33 405.46H1399.26C1386.34 405.46 1374.47 404.307 1363.63 402.001C1352.79 399.695 1343.45 396.005 1335.61 390.932C1328 385.629 1322.01 378.826 1317.63 370.525C1313.24 361.993 1311.05 351.731 1311.05 339.74V66.4852ZM1396.49 336.627C1396.49 338.241 1396.83 339.279 1397.53 339.74C1398.22 339.971 1399.14 340.086 1400.29 340.086C1401.22 340.086 1402.02 339.971 1402.71 339.74C1403.64 339.279 1404.1 338.241 1404.1 336.627V69.2523C1404.1 67.6382 1403.64 66.7158 1402.71 66.4852C1402.02 66.024 1401.22 65.7934 1400.29 65.7934C1399.14 65.7934 1398.22 66.024 1397.53 66.4852C1396.83 66.7158 1396.49 67.6382 1396.49 69.2523V336.627Z",
                            fill: "var(--soft)"
                        }
                    }), v("path", {
                        attrs: {
                            d: "M1581.59 402.001H1496.84V4.22455H1601.99C1626.44 4.22455 1644.65 9.98943 1656.65 21.5192C1668.87 32.8183 1674.98 48.6141 1674.98 68.9064V174.058C1674.98 184.434 1673.94 193.197 1671.86 200.346C1669.79 207.494 1665.64 213.259 1659.41 217.64L1674.98 364.99V402.001H1593L1581.59 213.489V402.001ZM1581.59 182.359H1585.39C1586.31 182.359 1587.12 182.244 1587.81 182.013C1588.74 181.552 1589.2 180.514 1589.2 178.9V69.2523C1589.2 67.6382 1588.74 66.7158 1587.81 66.4852C1587.12 66.024 1586.31 65.7934 1585.39 65.7934H1581.59V182.359Z",
                            fill: "var(--soft)"
                        }
                    }), v("path", {
                        attrs: {
                            d: "M1765.68 402.001H1680.94V4.22455H1765.68V139.814L1786.43 4.22455H1864.61V38.4679L1839.01 174.404L1864.61 352.192V402.001H1782.28L1765.68 234.243V402.001Z",
                            fill: "var(--soft)"
                        }
                    })])])], 1)])])
                }), [function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "footer__ctn"
                    }, [v("div", {
                        staticClass: "footer__health__texts e-flex"
                    }, [v("span", {
                        staticClass: "footer__health__numb t-sansbold js-days"
                    }, [c._v("1243")]), v("span", {
                        staticClass: "footer__health__per"
                    }, [c._v("/days")])])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "footer__ctn"
                    }, [v("div", {
                        staticClass: "footer__avail__texts e-flex"
                    }, [v("span", {
                        staticClass: "footer__avail__month t-sansbold js-month"
                    }, [c._v("Month, Here")]), v("span", {
                        staticClass: "footer__avail__year js-year"
                    }, [c._v("/ XXXX")])])])
                }], !1, null, null, null);
            h.default = component.exports;
            installComponents(component, {
                Footer: v(168).default
            })
        },
        169: function(c, h, v) {
            "use strict";
            v.d(h, "a", (function() {
                return z
            }));
            var m = v(5),
                e = v(6),
                t = v(289),
                z = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            this.DOM = c;
                            var h = t(this.DOM.querySelectorAll(".img-load"));
                            h.on("always", (function(c) {
                                window.dispatchEvent(new Event("resize"))
                            })), h.on("progress", (function(c, image) {
                                image.isLoaded;
                                window.dispatchEvent(new Event("resize"))
                            }))
                        }
                    }]), c
                }())
        },
        214: function(c, h, v) {
            var map = {
                "./AlternateGrid/index.vue": [238, 0, 12],
                "./CallToAction/index.vue": [239, 0, 5],
                "./CardsCarousel/index.vue": [240, 0, 6],
                "./CustomerLogos/index.vue": [241, 0, 7],
                "./FaqSection/index.vue": [242, 0, 8],
                "./FeatureTestimonials/index.vue": [243, 0, 4],
                "./ImagesSlider/index.vue": [244, 0, 9],
                "./PricingTable/index.vue": [237, 0, 10],
                "./TestimonialsSlider/index.vue": [245, 0, 11],
                "./VideoHighlights/index.vue": [246, 0, 3]
            };

            function m(c) {
                if (!v.o(map, c)) return Promise.resolve().then((function() {
                    var h = new Error("Cannot find module '" + c + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }));
                var h = map[c],
                    m = h[0];
                return Promise.all(h.slice(1).map(v.e)).then((function() {
                    return v(m)
                }))
            }
            m.keys = function() {
                return Object.keys(map)
            }, m.id = 214, c.exports = m
        },
        232: function(c, h, v) {
            "use strict";
            var m = v(14),
                e = (v(43), v(100)),
                t = v(5),
                z = v(6),
                r = (v(11), v(2)),
                n = v(29);
            r.a.registerPlugin(n.a);
            var o = new(function() {
                    function c() {
                        Object(t.a)(this, c)
                    }
                    return Object(z.a)(c, [{
                        key: "init",
                        value: function() {
                            this.body = document.querySelector("body"), this.menufs = {
                                el: document.querySelector(".menu-fs"),
                                trg: document.querySelector(".trg-menu"),
                                close: document.querySelector(".menu-fs__close .btn-close"),
                                links: document.querySelectorAll(".menu-fs__links a")
                            }, this.fader = document.querySelector(".fader"), this.dash_cta = document.querySelector(".dash__cta .primary-btn"), this.evenListeners(), this.onEscPressed(), this.tl_trg_menufs = r.a.timeline({
                                paused: !0
                            }).to(this.menufs.trg.querySelectorAll(".trg-menu__line"), {
                                duration: .25,
                                transformOrigin: "top left",
                                scaleX: 0,
                                ease: "power4.in",
                                stagger: .075
                            }).to(this.menufs.trg.querySelectorAll(".trg-menu__line"), {
                                duration: .25,
                                transformOrigin: "top right",
                                scaleX: 1,
                                ease: "power4.out",
                                stagger: .075
                            }, "tog").fromTo(this.menufs.trg.querySelector("circle"), {
                                drawSVG: "0% 0%"
                            }, {
                                duration: .6,
                                transformOrigin: "center center",
                                drawSVG: "0% 100%",
                                ease: "power4.in"
                            }, 0).fromTo(this.menufs.trg.querySelector("circle"), {
                                drawSVG: "0% 100%"
                            }, {
                                duration: 1.2,
                                transformOrigin: "center center",
                                drawSVG: "100% 100%",
                                ease: "power4.out"
                            }, "<100%").fromTo(this.menufs.trg.querySelector("svg"), {
                                rotation: 0
                            }, {
                                duration: 1.4,
                                transformOrigin: "center center",
                                rotation: 360,
                                ease: "power4.inOut"
                            }, 0), r.a.set(this.menufs.trg.querySelector("circle"), {
                                drawSVG: "0%"
                            })
                        }
                    }, {
                        key: "openMenu",
                        value: function() {
                            this.body.classList.add("is-fader", "is-locked", "is-menu")
                        }
                    }, {
                        key: "closeMenu",
                        value: function() {
                            var c = this;
                            this.body.classList.remove("is-locked", "is-menu"), r.a.delayedCall(.3, (function() {
                                c.body.classList.remove("is-fader")
                            }))
                        }
                    }, {
                        key: "clickFader",
                        value: function() {
                            this.body.classList.contains("is-menu") && this.closeMenu(), this.body.classList.contains("is-modalapps") && (document.querySelector("body").classList.remove("is-fader"), document.querySelector(".modal-apps").classList.add("modal-closed"))
                        }
                    }, {
                        key: "onEscPressed",
                        value: function() {
                            var c = this;
                            document.onkeydown = function(h) {
                                ("key" in (h = h || window.event) ? "Escape" === h.key || "Esc" === h.key : 27 === h.keyCode) && (c.body.classList.contains("is-menu") && c.closeMenu(), c.body.classList.contains("is-modalapps") && (document.querySelector("body").classList.remove("is-fader"), document.querySelector(".modal-apps").classList.add("modal-closed")))
                            }
                        }
                    }, {
                        key: "hoverTrgMenu",
                        value: function() {
                            this.tl_trg_menufs.isActive() || this.tl_trg_menufs.play(0)
                        }
                    }, {
                        key: "evenListeners",
                        value: function() {
                            var c = this,
                                h = this;
                            this.menufs.trg.addEventListener("click", this.openMenu.bind(this), null), this.menufs.trg.addEventListener("mouseenter", this.hoverTrgMenu.bind(this), null), this.menufs.close.addEventListener("click", this.closeMenu.bind(this), null), this.dash_cta.addEventListener("click", this.closeMenu.bind(this), null), this.menufs.links.forEach((function(v) {
                                v.addEventListener("click", h.closeMenu.bind(c), null)
                            })), this.fader.addEventListener("click", this.clickFader.bind(this), null)
                        }
                    }]), c
                }()),
                l = v(72),
                d = (v(21), v(151), new(function() {
                    function c() {
                        Object(t.a)(this, c)
                    }
                    return Object(z.a)(c, [{
                        key: "init",
                        value: function() {
                            this.verifySO()
                        }
                    }, {
                        key: "verifySO",
                        value: function() {
                            if (navigator.platform.indexOf("Mac") > -1 && (document.querySelector("html").classList.add("is-mac"), navigator.userAgent.search("Chrome") > 0 && document.querySelector("html").classList.add("is-mac-chrome")), navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && -1 == navigator.userAgent.indexOf("CriOS") && -1 == navigator.userAgent.indexOf("FxiOS") && document.querySelector("html").classList.add("is-safari"), (/iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && window.innerWidth < 980) return document.querySelector("html").classList.add("is-crios"), !(!/CriOS/i.test(navigator.userAgent) || !/iphone|ipod|ipad/i.test(navigator.userAgent)) || (document.querySelector("html").classList.add("is-ios"), !1);
                            navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && document.querySelector("html").classList.add("is-firefox")
                        }
                    }]), c
                }())),
                _ = {
                    middleware: function(c) {
                        return Object(m.a)(regeneratorRuntime.mark((function h() {
                            var v, m;
                            return regeneratorRuntime.wrap((function(h) {
                                for (;;) switch (h.prev = h.next) {
                                    case 0:
                                        return v = c.store, m = c.$prismic, h.next = 3, v.dispatch("loadingGLobals", m);
                                    case 3:
                                    case "end":
                                        return h.stop()
                                }
                            }), h)
                        })))()
                    },
                    watch: {
                        $route: function() {
                            e.a.destroy(), l.a.setItem(this.$route.path)
                        }
                    },
                    mounted: function() {
                        d.init(), o.init()
                    }
                },
                f = v(15),
                component = Object(f.a)(_, (function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", [v("div", {
                        staticClass: "preloader-master e-wvw e-hvh e-fixed e-black"
                    }, [v("div", {
                        staticClass: "preloader-master__hold e-rel e-wp e-hp e-flex"
                    }, [c._m(0), v("svg", {
                        staticClass: "preloader-master__svg",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("circle", {
                        staticClass: "circ-static",
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--white)",
                            opacity: ".2",
                            pathLength: "1"
                        }
                    }), v("circle", {
                        staticClass: "circ-anima",
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--white)",
                            pathLength: "1"
                        }
                    })])])]), v("div", {
                        staticClass: "fader"
                    }), v("NuxtLink", {
                        staticClass: "main-logo",
                        attrs: {
                            to: "/",
                            title: "Victor Work"
                        }
                    }, [v("svg", {
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 91 30",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("path", {
                        attrs: {
                            d: "M0 0L10.2084 30H18.007L28.2154 0H24.2284L14.1077 29.8261L3.98695 0H0Z",
                            fill: "var(--dark)"
                        }
                    }), v("path", {
                        attrs: {
                            d: "M44.2097 0H37.594L35.0091 29.8261L30.8469 0H27.5171L31.6793 30H38.3388L40.9238 0.173913L44.4726 30H51.0445L54.5933 0.173913L57.1783 30H63.8378L68 0H64.6702L60.508 29.8261L57.9231 0H51.3074L47.7586 29.8261L44.2097 0Z",
                            fill: "var(--dark)"
                        }
                    }), v("path", {
                        attrs: {
                            d: "M91 9C91 4.05634 86.9437 0 82 0C77.031 0 73 4.05634 73 9C73 13.9437 77.031 18 82 18C86.9437 18 91 13.9437 91 9ZM74.1662 9C74.1662 4.66479 77.6394 1.1662 82 1.1662C86.3606 1.1662 89.8338 4.66479 89.8338 9C89.8338 13.3352 86.3606 16.8338 82 16.8338C77.6394 16.8338 74.1662 13.3352 74.1662 9ZM79.9972 9.76056H81.7211C81.8732 9.76056 82.0254 9.76056 82.1775 9.76056L84.8394 14.3493H86.2338L83.4704 9.55775C85.093 9.17746 86.031 8.16338 86.031 6.66761C86.031 4.69014 84.3831 3.57465 81.7211 3.57465H78.7549V14.3493H79.9972V9.76056ZM79.9972 4.63944H81.8986C83.5718 4.63944 84.6873 5.24789 84.6873 6.66761C84.6873 8.08732 83.5718 8.69578 81.8986 8.69578H79.9972V4.63944Z",
                            fill: "var(--dark)"
                        }
                    })])]), v("svg", {
                        staticClass: "top-border top-b-mobile",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 375 29",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M375 0H0V29H16V26C16 20.4772 20.4772 16 26 16H349C354.523 16 359 20.4772 359 26V29H375V0Z",
                            fill: "var(--dark)"
                        }
                    })]), c._v(" "), v("svg", {
                        staticClass: "top-border top-b-desk",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 1920 50",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M1920 0H0V50H23C23 38.9543 31.9543 30 43 30H1877C1888.05 30 1897 38.9543 1897 50H1920V0Z",
                            fill: "var(--dark)"
                        }
                    })]), v("div", {
                        staticClass: "main-border border-left"
                    }), v("div", {
                        staticClass: "main-border border-right"
                    }), v("div", {
                        staticClass: "trg-menu"
                    }, [v("div", {
                        staticClass: "trg-menu__hold e-flex-col"
                    }, [v("div", {
                        staticClass: "trg-menu__line trg-menu__line1"
                    }), v("div", {
                        staticClass: "trg-menu__line trg-menu__line2"
                    }), v("div", {
                        staticClass: "trg-menu__line trg-menu__line3"
                    }), v("svg", {
                        staticClass: "hover-trgmenufs",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("circle", {
                        staticClass: "percent",
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--color)"
                        }
                    })])])]), v("div", {
                        staticClass: "box-molded"
                    }), v("div", {
                        staticClass: "fader-trans"
                    }), c._m(1), v("canvas", {
                        attrs: {
                            id: "webgl"
                        }
                    }), v("Rewards", {
                        attrs: {
                            rewards: c.$store.state.data_dashboard
                        }
                    }), v("MenuFs", {
                        attrs: {
                            menufs: c.$store.state.data_dashboard.dash_links_group,
                            socials: c.$store.state.data_global.cta_links_group
                        }
                    }), v("DashModal", {
                        attrs: {
                            dash: c.$store.state.data_dashboard,
                            socials: c.$store.state.data_global.cta_links_group
                        }
                    }), v("MenuDesk", {
                        attrs: {
                            links: c.$store.state.data_global.menu_links_group
                        }
                    }), v("ModalApps", {
                        attrs: {
                            apps: c.$store.state.data_global.health_apps_group
                        }
                    }), c._m(2), v("Intro", {
                        attrs: {
                            intro: c.$store.state.data_global
                        }
                    }), v("div", {
                        staticClass: "wipe-soft e-wvw e-hvh e-fixed"
                    }), v("Nuxt")], 1)
                }), [function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "preloader-master__name"
                    }, [v("span", {
                        staticClass: "t-white t-center"
                    }, [c._v("Hey There...")])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "text-trans"
                    }, [v("span", [c._v("recognitions")])])
                }, function() {
                    var c = this.$createElement,
                        h = this._self._c || c;
                    return h("div", {
                        staticClass: "intro-bg"
                    }, [h("div", {
                        staticClass: "intro-bg__bg e-abs"
                    })])
                }], !1, null, null, null);
            h.a = component.exports;
            installComponents(component, {
                Rewards: v(316).default,
                MenuFs: v(317).default,
                DashModal: v(318).default,
                MenuDesk: v(319).default,
                ModalApps: v(315).default,
                Intro: v(314).default
            })
        },
        233: function(c, h, v) {
            "use strict";
            v.r(h);
            var m = {
                    props: ["cta"]
                },
                e = v(15),
                component = Object(e.a)(m, (function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("section", {
                        staticClass: "cta"
                    }, [v("div", {
                        staticClass: "cta__hold e-hold-border"
                    }, [v("div", {
                        staticClass: "cta__title"
                    }, [v("h1", {
                        staticClass: "t-title"
                    }, [c._v(c._s(c.cta.cta_title))])]), v("div", {
                        staticClass: "cta__texts"
                    }, [v("prismic-rich-text", {
                        staticClass: "rich-t subt-p",
                        attrs: {
                            field: c.cta.cta_text
                        }
                    }), v("PrimaryButton", {
                        attrs: {
                            link: "/form",
                            text: c.cta.cta_button,
                            version: "color"
                        }
                    })], 1)]), v("div", {
                        staticClass: "cta__links e-hold-border"
                    }, c._l(c.cta.cta_links_group, (function(h) {
                        return v("div", {
                            staticClass: "cta__links__each"
                        }, [v("a", {
                            attrs: {
                                href: h.link,
                                target: "_blank",
                                rel: "noreferrer",
                                title: h.text
                            }
                        }, [c._v(c._s(h.text))])])
                    })), 0)])
                }), [], !1, null, null, null);
            h.default = component.exports;
            installComponents(component, {
                PrimaryButton: v(167).default
            })
        },
        247: function(c, h, v) {
            v(248), c.exports = v(249)
        },
        293: function(c, h, v) {
            var content = v(294);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [c.i, content, ""]
            ]), content.locals && (c.exports = content.locals);
            (0, v(128).default)("291a232e", content, !0, {
                sourceMap: !1
            })
        },
        294: function(c, h, v) {
            var m = v(127),
                e = v(234),
                t = v(295),
                z = v(158),
                r = v(296),
                n = v(297),
                o = v(298),
                l = v(299),
                d = m(!1),
                _ = e(t),
                f = e(z),
                w = e(r),
                y = e(n),
                x = e(o),
                M = e(l);
            d.push([c.i, '@font-face{font-family:"a2g";font-display:fallback;src:url(' + _ + ') format("woff2"),url(' + f + ') format("woff")}@font-face{font-family:"ev-light";font-display:fallback;src:url(' + w + ') format("woff2"),url(' + y + ') format("woff")}@font-face{font-family:"ev-regular";font-display:fallback;src:url(' + x + ') format("woff2"),url(' + M + ') format("woff")}', ""]), c.exports = d
        },
        295: function(c, h, v) {
            c.exports = v.p + "fonts/a2g.e16406e.woff2"
        },
        296: function(c, h, v) {
            c.exports = v.p + "fonts/ev-light.6dd3a35.woff2"
        },
        297: function(c, h, v) {
            c.exports = v.p + "fonts/ev-light.78b7473.woff"
        },
        298: function(c, h, v) {
            c.exports = v.p + "fonts/ev-regular.5520ac2.woff2"
        },
        299: function(c, h, v) {
            c.exports = v.p + "fonts/ev-regular.e5da8bf.woff"
        },
        300: function(c, h, v) {
            var content = v(301);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [c.i, content, ""]
            ]), content.locals && (c.exports = content.locals);
            (0, v(128).default)("ca362afe", content, !0, {
                sourceMap: !1
            })
        },
        301: function(c, h, v) {
            var m = v(127)(!1);
            m.push([c.i, 'html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}a{text-decoration:none}html{font-size:2.66667vw;scrollbar-width:none;font-family:"ev-light",sans-serif;font-family:var(--sans)}@media only screen and (min-width:580px)and (max-width:1024px){html{font-size:1.51515vw}}@media only screen and (min-width:1025px){html{font-size:.69444vw}}*{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;color:#001446;color:var(--dark);font-family:"ev-light",sans-serif;font-family:var(--sans);font-size:1.6rem;font-smooth:always;font-smooth:auto;font-smooth:never}.page{max-width:100vw;padding:.1rem 0 0;width:100vw;will-change:transform}:focus{outline:none}body{background:#dbd6c9;background:var(--soft);-ms-scroll-chaining:none;overscroll-behavior:none;scrollbar-width:none}section{padding:2rem 0;padding:var(--gapSections) 0}.scroll-wrapper{background:#dbd6c9;background:var(--soft)}::-webkit-scrollbar{webkit-appearance:none;width:0}.preloader{background:#001446;background:var(--dark);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:99999999}.e-hold,.e-hold-border{margin:0 0 0 2.7rem;margin:0 0 0 var(--gap);position:relative;width:calc(100vw - 5.4rem);width:calc(100vw - var(--gap)*2)}.e-hold-border{border-radius:1.2rem;border-radius:var(--borderRadius);overflow:hidden;padding:3rem 2rem;padding:var(--gapHolder);background:#e2ded4;background:var(--bgHolder)}a,span{display:block;position:relative;font-family:"ev-light",sans-serif;font-family:var(--sans)}.e-white{background-color:#fff}.t-white{color:#fff}.e-black{background-color:#001446;background-color:var(--dark)}.t-black{color:#001446;color:var(--dark)}.e-color{background-color:#8c0000;background-color:var(--color)}.e-dark{background-color:#001446;background-color:var(--dark)}.t-color{color:#8c0000;color:var(--color)}.e-gray{background-color:#aaa}.t-gray{color:#aaa}.t-100{font-weight:100}.t-300{font-weight:300}.t-400{font-weight:400}.t-500{font-weight:500}.t-700{font-weight:700}.t-900{font-weight:900}.e-flex{display:flex;justify-content:center;align-items:center}@media only screen and (min-width:1025px){.e-flex-desk{display:flex;justify-content:center;align-items:center}}.e-flex-col{align-items:center;flex-direction:column}.e-flex-col,.e-flex-wrap{display:flex;justify-content:center}.e-flex-wrap{flex-wrap:wrap}.e-rel{position:relative}.e-abs{position:absolute}.e-fixed{position:fixed}.e-wp{width:100%}.e-hp{height:100%}.e-85{width:85%}.e-85w{width:85vw}.e-wvw{width:100vw}.e-hvh{height:100vh}.e-dn{display:none}.e-img-fit,img{-o-object-fit:cover;object-fit:cover}img{display:block;height:100%;position:relative;width:100%}.t-center{text-align:center}.e-hidden{overflow:hidden}.e-curp{cursor:pointer}p{font-size:1.5rem;line-height:1.7rem}.e-upper{text-transform:uppercase}@media only screen and (min-width:1025px){.no-desk{display:none!important}}@media only screen and (max-width:1024px){.no-mobile{display:none!important}}@media only screen and (min-width:580px)and (max-width:1024px){.no-mobile{display:none!important}}::-moz-selection{color:#dbd6c9;color:var(--soft);background:#8c0000;background:var(--color)}::selection{color:#dbd6c9;color:var(--soft);background:#8c0000;background:var(--color)}.filtered{background:#001446;background:var(--dark)}.filtered>*{filter:grayscale(1);mix-blend-mode:screen}picture{display:block;width:100%;height:100%}button{border:none;background:none}.simple-btn{background:#001446;background:var(--dark);border-radius:50px;color:#fff;color:var(--white);cursor:pointer;display:block;font-size:1rem;margin:2rem 0 0;padding:1.3rem 3rem;transition:background-color .25s ease-out,color .25s ease-out}.simple-btn:hover{background-color:#fff;background-color:var(--white);color:#001446;color:var(--dark)}.cta__links__each a,.dash__pl a,.footer__links a,.footer__pl a,.intro__rush span,.menu-fs__links a,.music__group__follow,.recog__img__links a,.section-headerlb__links a,.section-imgplx a.title-prod,a.music__group__title,nav.menu-fixed a{display:inline-block;position:relative}@media only screen and (min-width:1025px){.cta__links__each a:hover:after,.dash__pl a:hover:after,.footer__links a:hover:after,.footer__pl a:hover:after,.intro__rush span:hover:after,.menu-fs__links a:hover:after,.music__group__follow:hover:after,.recog__img__links a:hover:after,.section-headerlb__links a:hover:after,.section-imgplx a.title-prod:hover:after,a.music__group__title:hover:after,nav.menu-fixed a:hover:after{transform:scaleX(1);transform-origin:left}.cta__links__each a:after,.dash__pl a:after,.footer__links a:after,.footer__pl a:after,.intro__rush span:after,.menu-fs__links a:after,.music__group__follow:after,.recog__img__links a:after,.section-headerlb__links a:after,.section-imgplx a.title-prod:after,a.music__group__title:after,nav.menu-fixed a:after{content:"";background:currentColor;bottom:0;height:1px;left:0;opacity:.6;position:absolute;width:100%;transform-origin:right;transform:scaleX(0);transition:transform .8s cubic-bezier(.16,1,.3,1)}}@media only screen and (max-width:1024px){.cta__links__each{text-align:center}}.pl-active a.music__group__title:after{transform:scaleX(1)!important;transform-origin:left}.e-single-border{padding:3rem 2rem;padding:var(--gapHolder);background:#e2ded4;background:var(--bgHolder)}.e-single-border,.single-bord{border-radius:.8rem;border-radius:var(--borderSingle)}.single-bord{overflow:hidden}.rich-t strong{display:inline-block;text-decoration:underline;font-family:"ev-regular",sans-serif;font-family:var(--sansbold);-webkit-text-decoration-color:#001446;text-decoration-color:#001446;-webkit-text-decoration-color:var(--dark);text-decoration-color:var(--dark);-webkit-text-decoration-style:solid;text-decoration-style:solid;text-decoration-thickness:1px}.fader{background:rgba(0,0,0,.75);height:100%;left:0;position:fixed;top:0;width:100%;z-index:1;transition:opacity .8s cubic-bezier(.16,1,.3,1);opacity:0}.blocked,.fader{pointer-events:none}.dark-page .menu-fixed,.dark-page a.main-logo{--dark:var(--white)}.rich-text-strong strong{font-family:"ev-regular",sans-serif;font-family:var(--sansbold);text-decoration:underline;-webkit-text-decoration-style:solid;text-decoration-style:solid;text-decoration-thickness:1px}.no-touch{pointer-events:none}.is-SimpleExperience .js-full-exp{display:none}.t-sans{font-family:"ev-light",sans-serif;font-family:var(--sans)}.t-kaft{font-family:var(--kaft)}.t-italic{font-family:var(--italic)}.t-serif{font-family:"ev-light",serif;font-family:var(--serif)}.t-light{font-weight:300}.t-bold{font-weight:700}h1{font-size:4rem}.descriptions__header{position:relative}.descriptions__header__subt{align-items:center;border-radius:50px;display:inline-flex;height:2.6rem;justify-content:center;overflow:hidden;position:relative;width:13.4rem}@media only screen and (min-width:1025px){.descriptions__header__subt{height:3.6rem;width:26rem}}.descriptions__header__subt span{color:#dbd6c9;color:var(--soft);font-size:1rem}@media only screen and (min-width:1025px){.descriptions__header__subt span{font-size:1.6rem}}.descriptions__header__subt__bg{background:#001446;background:var(--dark);border-radius:50px;height:100%;left:0;position:absolute;top:0;width:100%}.descriptions__header h1{font-size:1.9rem;line-height:125%;margin:-2.3rem 0 0;text-indent:14.5rem}@media only screen and (min-width:1025px){.descriptions__header h1{font-size:4.5rem;line-height:100%;margin:-3.6rem 0 0;text-indent:27.5rem}}.descriptions__texts{margin:1.2rem 0 0}@media only screen and (min-width:1025px){.descriptions__texts{align-items:flex-start;justify-content:space-between;margin:6rem 0 0}}.descriptions__index{align-items:center;display:flex;height:5rem;justify-content:center;position:relative;width:5rem}.descriptions__index span{font-size:1.9rem;position:absolute}@media only screen and (min-width:1025px){.descriptions__texts__subt{align-items:center;display:flex}}@media only screen and (min-width:1025px){.descriptions__texts__subt h1{font-size:3.3rem;margin:0 0 0 2rem}}@media only screen and (min-width:1025px){.descriptions__parag{width:68rem}}@media only screen and (min-width:1025px){.descriptions__parag p{font-size:2.4rem;line-height:120%}}.descriptions__parag p+p{margin:2.5rem 0 0}@media only screen and (min-width:1025px){.descriptions__parag p+p{margin:5rem 0 0}}.descriptions__texts .primary-btn{text-transform:uppercase}@media only screen and (max-width:1024px){.descriptions__texts .primary-btn{display:inline-block;float:right}}@media only screen and (min-width:1025px){.descriptions__texts{display:grid;grid-template-areas:"subt parag" ". btn";grid-template-columns:auto auto}.descriptions__texts__subt{grid-area:subt}.descriptions__parag{grid-area:parag}.descriptions__texts .primary-btn{grid-area:btn;justify-self:end;margin:5rem 0 0}}.svg-explore-circle{transform:rotate(-90deg);overflow:visible!important}.svg-explore-circle circle{stroke-width:1.5px}circle.circ-static{opacity:.2}.svg-explore-circle circle.percent{stroke-dasharray:1;stroke-dashoffset:0;stroke-linecap:round;stroke:red}.Bleed,.semi-corner{padding:0 4.18vw;padding:0 var(--gapMainBorder);position:relative}.Bleed .slice-img__hold:before,.semi-corner:before{border-bottom-left-radius:2rem 2rem;border-bottom-right-radius:2rem 2rem;top:0}.Bleed .slice-img__hold:after,.Bleed .slice-img__hold:before,.semi-corner:after,.semi-corner:before{content:"";background:#dbd6c9;background:var(--soft);height:4rem;position:absolute;width:91.64vw;width:calc(100vw - var(--gapMainBorder)*2);z-index:1}.Bleed .slice-img__hold:after,.semi-corner:after{border-top-left-radius:2rem 2rem;border-top-right-radius:2rem 2rem;bottom:0}section+section.title-section{margin:8rem 0 0}@media only screen and (min-width:1025px){section+section.title-section{margin:16rem 0 0}}.title-section__hold{align-items:center;display:flex;flex-direction:column;justify-content:center}.title-section__word1{left:0;position:absolute;top:0}@media only screen and (min-width:1025px){.title-section__word1{left:-.4rem}}.title-section__word2{bottom:0;position:absolute;right:0}@media only screen and (min-width:1025px){.title-section__word2{right:-.3rem}}.title-section h1{color:#8c0000;color:var(--color);font-family:"a2g",monospace,sans-serif;font-family:var(--title);font-size:9rem;line-height:125%;z-index:1;will-change:transform}@media only screen and (min-width:580px)and (max-width:1024px){.title-section h1{font-size:14rem}}@media only screen and (min-width:1025px){.title-section h1{font-size:32rem}}.line-wrap{will-change:transform}.is-FullExperience .title-section h1{transition:transform 1s ease-out}.is-ModerateExperience .title-section h1{overflow:hidden}.is-ModerateExperience .title-section h1 div{color:#8c0000;color:var(--color);will-change:transform}.title-section__img{height:40rem;margin:5rem 0;mix-blend-mode:darken;position:relative}@media only screen and (min-width:580px)and (max-width:1024px){.title-section__img{height:58rem;padding:0 8rem}}@media only screen and (min-width:1025px){.title-section__img{height:105rem;margin:10rem 0}}.title-section__img img,.title-section__img svg{z-index:1;-o-object-fit:contain;object-fit:contain;height:100%;width:100%}.title-section__img svg>*,.title-section__img svg circle,.title-section__img svg g,.title-section__img svg path,.title-section__img svg polygon{fill:#001446;fill:var(--dark)}.title-section__texts{position:absolute}.title-section__texts span{font-family:"ev-regular",sans-serif;font-family:var(--sansbold);font-size:.9rem}@media only screen and (min-width:1025px){.title-section__texts span{font-size:1.7rem}}@media only screen and (min-width:1025px){.title-section__texts span+span{margin:.6rem 0 0}}.title-section__texts1{top:1.1rem;right:0}@media only screen and (min-width:1025px){.title-section__texts1{top:16.1rem;right:6rem}}.title-section__texts1 span{text-align:right}.title-section__texts2{bottom:3.1rem;left:1.2rem}@media only screen and (min-width:1025px){.title-section__texts2{bottom:13rem;left:7rem}}.title-projects .title-section__img{margin:0}@media only screen and (min-width:1025px){.title-projects .title-section__img{margin:10rem 0;padding:0 19rem}}.title-animations .title-section__img{padding:0 2rem}@media only screen and (min-width:900px)and (max-width:1180px)and (min-height:700px){.title-animations .title-section__img{padding:0 9rem}}@media only screen and (min-width:1025px){.title-animations .title-section__img{padding:0 31rem}}.title-vw .title-section__word1{top:8rem}@media only screen and (min-width:1025px){.is-FullExperience .title-vw .title-section__word1{top:-5rem}}.title-recognitions .title-section__word1{top:8rem}@media only screen and (min-width:1025px){.title-recognitions .title-section__word1{top:23rem}}@media only screen and (min-width:1025px){.is-FullExperience .title-recognitions .title-section__word1{top:8rem}}.title-recognitions .title-section__word2{bottom:15rem}@media only screen and (min-width:1025px){.is-FullExperience .title-recognitions .title-section__word2{bottom:7rem}}.title-lifestyle .title-section__img{margin:0 0 3rem}@media only screen and (min-width:1025px){.title-lifestyle .title-section__img{padding:0 26rem}}.title-lifestyle .title-section__word1{top:6rem}.title-lifestyle .title-section__word2{bottom:-4rem}.title-expertise .title-section__img{margin:0}@media only screen and (min-width:1025px){.title-expertise .title-section__img,.title-music .title-section__img{margin:7rem 0;padding:0 22rem}}@media only screen and (min-width:1025px){.title-music .title-section__word1{top:22rem}}@media only screen and (min-width:1025px){.is-FullExperience .title-music .title-section__word1{top:10rem}}.title-courses .title-section__img{height:34rem;margin:0;padding:0 2rem}@media only screen and (min-width:580px)and (max-width:1024px){.title-courses .title-section__img{padding:0 8rem;height:42rem}}@media only screen and (min-width:1025px){.title-courses .title-section__img{height:54rem;margin:21rem;padding:0}}@media only screen and (min-width:1025px){.is-safari .title-section__img{width:100%}}.section-hold{position:relative}@media only screen and (min-width:1025px){.section-hold{display:flex}}.indic{display:none}@media only screen and (min-width:1025px){.indic{display:block;border-bottom:1px solid rgba(0,20,70,.1);border-bottom:1px solid var(--lineColor);position:absolute;transform:rotate(-90deg) translateY(100%) translateX(.03478vh);left:0;bottom:0;width:62.1%;height:2.7rem;height:var(--gap);transform-origin:0 100%}}.indic span{font-family:"ev-light",serif;font-family:var(--serif);font-size:4rem;margin:1rem 2rem}@media only screen and (min-width:1025px){.section-info{border-right:1px solid rgba(0,20,70,.1);border-right:1px solid var(--lineColor);display:flex;justify-content:center;margin-left:2.7rem;margin-left:var(--gap);position:relative;width:274rem;z-index:1}}.section-info h1{font-family:"ev-light",serif;font-family:var(--serif)}video.lazyvideo{opacity:0;transform:scale(1.2)}.opac-video{background:rgba(0,0,0,.15)}.primary-btn{background:transparent;border-radius:50px;cursor:pointer;overflow:hidden;width:15rem;margin:2rem 0 0;transition:background 0s cubic-bezier(.78,.01,.32,1.01) .45s}@media only screen and (min-width:1025px){.primary-btn:hover{background:#fff;background:var(--white);transition:background 0s cubic-bezier(.78,.01,.32,1.01) 0s}.primary-btn:hover .primary-btn__svg{opacity:1;transform:translate(0);transition:transform .35s cubic-bezier(0,.18,0,1.01) .2s,opacity .3s ease-out}.primary-btn:hover .primary-btn__circ{-webkit-clip-path:circle(1.1rem at 85.9%);clip-path:circle(1.1rem at 85.9%)}.primary-btn:hover span.primary-btn__text{color:#001446;color:var(--dark);transform:translateX(-1.1rem);transition:transform .45s cubic-bezier(.91,0,.1,1),color .45s cubic-bezier(.01,.65,.45,.99) .1s}}.primary-btn__hold{align-items:center;display:flex;justify-content:center;padding:1.3rem;position:relative;width:100%}span.primary-btn__text{color:#fff;color:var(--white);font-family:"ev-regular",sans-serif;font-family:var(--sansbold);font-size:.9rem;position:relative;transition:transform .45s cubic-bezier(.91,0,.1,1),color .45s cubic-bezier(.91,0,.1,1) 0s;z-index:1}.primary-btn__icon__hold{align-items:center;display:flex;height:100%;justify-content:center;position:relative;width:100%}.primary-btn__circ{background:#8c0000;background:var(--color);border-radius:50px;-webkit-clip-path:circle(120% at 84.7%);clip-path:circle(120% at 84.7%);height:100%;position:absolute;transition:-webkit-clip-path .45s cubic-bezier(.78,.01,.32,1.01);transition:clip-path .45s cubic-bezier(.78,.01,.32,1.01);transition:clip-path .45s cubic-bezier(.78,.01,.32,1.01),-webkit-clip-path .45s cubic-bezier(.78,.01,.32,1.01);width:100%;will-change:clip-path}.primary-btn__icon{border-radius:50%;height:2.3rem;overflow:hidden;position:absolute;right:1rem;width:2.3rem}.primary-btn__svg{display:flex;height:.525rem;opacity:0;position:relative;transform:translate(-1.5rem,.9rem);transition:transform .4s cubic-bezier(0,.18,0,1.01) 0s,opacity .15s ease-out;width:.525rem;z-index:1}.primary-btn.dark .primary-btn__circ{background:#001446;background:var(--dark)}.not-found h1.t-title{font-size:13rem;line-height:125%}span.nothing{font-size:1.2rem;margin:2rem 0;text-transform:uppercase}nav.menu-fs{border-bottom-left-radius:2rem 2rem;border-top-left-radius:2rem 2rem;height:calc(100vh - 1.6rem);overflow:hidden;position:fixed;right:1.5rem;top:1.6rem;width:33.3rem;z-index:22;transform:translateX(calc(100% + 1.5rem));transition:transform .8s cubic-bezier(.16,1,.3,1)}@media only screen and (min-width:1025px){nav.menu-fs{height:calc(100vh - 2rem);top:2rem;width:130.3rem;transform:translateX(calc(100% + 2rem));z-index:18}}.menu-fs__hold{height:100%;overflow:hidden;overflow-y:scroll;position:relative;width:100%}.menu-fs__bg{border-bottom-left-radius:2rem 2rem;border-top-left-radius:2rem 2rem;height:100%}.menu-fs__bg,.menu-fs__close{background:#dbd6c9;background:var(--soft);position:absolute;right:0;top:0;width:100%}.menu-fs__close{align-items:center;border-bottom:1px solid rgba(0,20,70,.1);border-bottom:1px solid var(--lineColor);display:flex;justify-content:space-between;padding:1.1rem 2rem 1.1rem 0;z-index:2}@media only screen and (min-width:1025px){.menu-fs__close{padding:1.1rem 39.7rem 1.1rem 0}}@media only screen and (min-width:1025px){.menu-fs__close button.btn-close{margin:0 0 0 2rem}}@media only screen and (max-width:1024px){.menu-fs__close__profile{flex-direction:column;align-items:flex-start!important;padding:0 6rem 0 0}}.menu-fs__close__profile__name,.menu-fs__close__profile__version{font-size:1.2rem}.confirm__reset{background:#fff;background:var(--white);border-radius:.4rem;display:inline-flex;font-size:1.1rem;margin:7.3rem 0 0;opacity:0;padding:1.2rem 1.6rem;position:absolute;right:-1.3rem;transition:opacity .3s ease-out;visibility:hidden}@media only screen and (min-width:1025px){.confirm__reset{margin:8.3rem 0 0}}.confirm__reset button{cursor:pointer;padding:.2rem .5rem;transition:color .2s ease-out}.confirm__reset button:hover{text-decoration:underline;color:#8c0000;color:var(--color)}.confirm__reset span{margin:0 1rem 0 0;opacity:.6;white-space:nowrap}.confirm__reset svg{position:absolute;right:0;top:-2rem;width:1.4rem}.active-reset .confirm__reset{opacity:1;visibility:visible}.menu-fs__links{margin:6.5rem 0 0;padding:2rem;position:relative;z-index:1}@media only screen and (min-width:1025px){.menu-fs__links{margin:4.5rem 0 0}}.menu-fs__links li{display:flex}.menu-fs__links li+li{margin:.6rem 0 0}@media only screen and (min-width:1025px){.menu-fs__links li+li{margin:2rem 0 0}}.menu-fs__links span{align-items:center;border-radius:50%;border:1px solid rgba(0,20,70,.1);border:1px solid var(--lineColor);display:flex;height:2rem;justify-content:center;width:2rem}.menu-fs__links a{font-family:"a2g",monospace,sans-serif;font-family:var(--title);font-size:4.1rem;line-height:125%;margin:0 0 0 1rem;text-transform:uppercase}@media only screen and (min-width:1025px){.menu-fs__links a{font-size:14rem;transition:opacity .35s ease-out}.menu-fs__links a:hover{opacity:.85}}.menu-fs .nuxt-link-exact-active{color:#8c0000;color:var(--color);pointer-events:none}.menu-fs__socials{padding:2rem}ul.menu-fs__socials__hold{display:flex;flex-wrap:wrap}.menu-fs__socials li{font-size:1.5rem;padding:1rem 1.4rem 0 0}nav.menu-fixed{right:6.7rem;top:3.2rem;z-index:10;transition:opacity .2s ease-out}@media only screen and (min-width:1025px){nav.menu-fixed{top:4.1rem;right:8.5rem}}nav.menu-fixed a{font-family:"ev-regular",sans-serif;font-family:var(--sansbold);text-transform:capitalize;font-size:1.3rem}@media only screen and (min-width:1025px){nav.menu-fixed a{font-size:1.4rem}}nav.menu-fixed a+a{margin:0 0 0 1.2rem}@media only screen and (min-width:1025px){nav.menu-fixed a+a{margin:0 0 0 2rem}}.trg-menu{background:#fff;background:var(--white);border-radius:50%;border:1px solid rgba(0,20,70,.1);border:1px solid var(--lineColor);height:3.3rem;position:fixed;right:2.7rem;right:var(--gap);top:2.1rem;width:3.3rem;z-index:8;cursor:pointer}@media only screen and (min-width:1025px){.trg-menu{top:3rem}}.trg-menu__line{background:#001446;background:var(--dark);height:1px;width:50%}.trg-menu__hold{height:100%;width:100%}.trg-menu__line+.trg-menu__line{margin:3px 0 0}svg.hover-trgmenufs{left:0;position:absolute;top:0}.is-fader .fader{opacity:1;pointer-events:auto}.is-fader .main-logo{pointer-events:none}.is-locked{overflow:hidden}.is-menu nav.menu-fs{transform:translateX(0)}.is-intro{overflow:hidden;height:100vh!important;width:100vw!important}.is-intro .main-logo{pointer-events:none}.is-intro .menu-fixed,.is-intro .trg-menu{opacity:0;pointer-events:none;z-index:-1}.intro{background:#001446;background:var(--dark);height:100vh;left:0;opacity:0;pointer-events:none;position:fixed;top:0;width:100vw;z-index:1}@media only screen and (min-width:1025px){.intro{height:100vh}}.is-intro .intro{opacity:1;pointer-events:auto}.intro__bg{background:#dbd6c9;background:var(--soft);border-radius:1rem;height:calc(100vh - 8.36vw);height:calc(100vh - var(--gapMainBorder)*2);left:4.18vw;left:var(--gapMainBorder);opacity:1;top:4.18vw;top:var(--gapMainBorder);width:91.64vw;width:calc(100vw - var(--gapMainBorder)*2)}.intro__hold>*{display:flex;justify-content:center;align-items:center;flex-direction:column;height:100%;left:0;position:absolute;top:0;width:100%}@media only screen and (min-width:1025px){.intro__hold>*{justify-content:flex-start;padding:15.2vh 0 0}}.intro__ctn{position:relative}@media only screen and (min-width:1025px){.intro__start{justify-content:center;padding:0}}.intro__start__texts{margin:-12vh 0 0}@media only screen and (min-width:1025px){.intro__start__texts{margin:-1vh 0 0}}.intro__start__texts__btn{width:19rem}@media only screen and (min-width:1025px){.intro__start__texts__btn{width:20rem}}@media only screen and (min-width:1025px){.intro__start__texts__btn .primary-btn__icon{right:1.7rem}}.intro__start__texts__title{align-items:flex-start}.intro__start__texts__title h1{font-size:4.9rem;line-height:155%;opacity:0}@media only screen and (min-width:1025px){.intro__start__texts__title h1{font-size:16rem;letter-spacing:.4rem}}.intro__start__texts__parag{margin:1rem 0 3rem;text-align:center;width:26rem}@media only screen and (min-width:1025px){.intro__start__texts__parag{width:64rem}}.intro__start__texts__parag p{font-size:1.3rem}@media only screen and (min-width:1025px){.intro__start__texts__parag p{font-size:2.1rem;line-height:119%}}.intro__start__texts__btn{margin:1rem}.registered{height:1.5rem;margin:.9rem 0 0;position:relative;transform:translateX(.5rem);width:1.5rem}@media only screen and (min-width:1025px){.registered{height:2.8rem;margin:2.7rem 0 0;width:3.5rem}}.registered svg{left:0;overflow:visible;position:absolute;top:0}.registered svg circle{stroke-width:2px}.registered span{align-items:center;display:flex;height:100%;justify-content:center;line-height:125%}@media only screen and (min-width:1025px){.registered span{font-size:3rem;margin:.95rem 0 0}}@media only screen and (min-width:1025px){.intro__rush{bottom:4rem;font-size:1.3rem;position:absolute;right:2.7rem;right:var(--gap)}}.intro .primary-btn:hover{background:#8c0000;background:var(--color);transition:background 0s cubic-bezier(.78,.01,.32,1.01) 0s}.intro .primary-btn:hover span.primary-btn__text{color:#fff;color:var(--white)}.intro span.primary-btn__text{color:#001446;color:var(--dark)}.intro .primary-btn svg path{fill:#001446;fill:var(--dark)}.intro .primary-btn__circ{background:#fff;background:var(--white)}.intro .primary-btn.dark .primary-btn__circ{background:#001446;background:var(--dark)}.intro svg.primary-rect-path{z-index:1;position:absolute;width:100%;left:0;top:0;height:100%;pointer-events:none}.intro svg.primary-rect-path rect{stroke-width:1px}.intro__version .intro__ctn{margin:-1rem 0 0 2.7rem;margin:-1rem 0 0 var(--gap)}@media only screen and (min-width:1025px){.intro__version .intro__ctn{margin:0;padding:0 13.8rem}}.intro__select,.intro__tuto__text{font-size:1.5rem;margin:0 0 2rem}ul.intro__tuto__group,ul.intro__versions{display:inline-flex}@media only screen and (min-width:1025px){ul.intro__tuto__group,ul.intro__versions{justify-content:space-between;width:100%}}@media only screen and (max-width:1024px){ul.intro__tuto__group,ul.intro__versions{margin:0 0 0 -7vw;overflow-x:auto;overscroll-behavior-x:contain;padding:0 5vw;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;width:92vw}}@media only screen and (max-width:1024px){ul.intro__tuto__group{margin:0 0 0 -4.7vw}}.intro__tuto__box,li.intro___version__each{background:hsla(0,0%,100%,.6);border-radius:.8rem;border-radius:var(--borderSingle);flex-shrink:0;height:60vh;overflow:hidden;width:62vw}@media only screen and (min-width:1025px){.intro__tuto__box,li.intro___version__each{border-radius:17px;width:32.3rem}}@media only screen and (max-width:1024px){.intro__tuto__box,li.intro___version__each{scroll-snap-align:center}}.intro__tuto__group li{transition:opacity .6s ease-out}li.intro___version__each+li.intro___version__each,li.intro__tuto__item+li.intro__tuto__item{margin:0 0 0 5vw}@media only screen and (min-width:1025px){li.intro___version__each+li.intro___version__each,li.intro__tuto__item+li.intro__tuto__item{margin:0}}li.intro___version__each{cursor:pointer;transition:opacity .45s ease-out,background .45s ease-out}li.intro___version__each:hover{background:#fff}li.intro___version__each:hover .intro___version__each__caption span,li.intro___version__each:hover strong{color:#8c0000;color:var(--color)}@media only screen and (min-width:1025px){li.intro___version__each{order:1}}@media only screen and (min-width:1025px){li.intro___version__each:first-child{margin:0 5vw}}@media only screen and (min-width:1025px){li.intro___version__each:nth-child(2){order:0}}@media only screen and (min-width:1025px){.intro___version__each__caption{font-size:1.2rem}}.intro___version__each__caption span{transition:color .45s ease-out}.intro___version__each__hold{display:flex;flex-direction:column;height:100%;justify-content:space-between}.intro___version__each__caption{border-bottom:1px solid #dbd6c9;border-bottom:1px solid var(--soft);font-size:1.4rem;padding:1.3rem 0 1.3rem 1.5rem}.intro__version__each__svg{align-items:center;align-self:center;display:flex;height:50%;justify-content:center;width:47%}@media only screen and (min-width:580px)and (max-width:1024px){.intro__version__each__svg{width:20%;height:35%}}.intro__version__each__svg svg{min-height:100%;width:100%}.intro___version__each__text{padding:2rem}.intro___version__each__text p{font-size:1.4rem}.intro__version__each__svg svg path{fill:#001446;fill:var(--dark)}.intro___version__each strong{transition:color .45s ease-out}.intro svg.svg-cover{height:99.8%;left:0;overflow:visible;position:absolute;top:0;width:99.5%;z-index:1;pointer-events:none}.intro__custom__mood__btns svg{margin:0 0 0 .6rem;width:2.6rem}@media only screen and (min-width:1025px){.intro__custom__mood__btns svg{margin:0 0 0 1.2rem}}span.intro__custom__lets{font-size:1.5rem;margin:0 0 1rem}@media only screen and (min-width:1025px){span.intro__custom__lets{font-size:1.5rem;font-family:"ev-regular",sans-serif;font-family:var(--sansbold)}}.intro__custom__text span{font-size:1.2rem}@media only screen and (min-width:1025px){.intro__custom__text span{font-size:1.5rem}}.intro__custom .intro__ctn{margin:0 2.8rem}@media only screen and (min-width:1025px){.intro__custom .intro__ctn{padding:0 13.7rem}}.custom-item{background:hsla(0,0%,100%,.45);border-radius:.8rem;border-radius:var(--borderSingle);overflow:hidden;padding:0 0 1.9vh;transition:opacity .6s ease-out;position:relative}.custom-item+.custom-item{margin:2vh 0 0}.intro__custom__mood__btns{align-items:center;display:flex;flex-wrap:wrap;grid-gap:.9rem;gap:.9rem;justify-content:center;padding:0 .4rem}@media only screen and (min-width:1025px){.intro__custom__mood__btns{justify-content:flex-start;margin:0 0 0 1.6rem}}@media only screen and (min-width:1025px){.intro__custom__mood__btns button span{margin:.22rem 0 0;transition:color .2s ease-out}}.intro__custom__mood svg.svg-cover{width:99.8%;height:99.6%}.intro__custom__text{margin:0 0 1.3rem}@media only screen and (min-width:1025px){.intro__custom__text{margin:0 0 3vh}}.display-location{font-size:1.2rem;position:absolute;transition:opacity 1.2s ease-out 1.2s}@media only screen and (max-width:1024px){.display-location{line-height:125%;padding:1.6rem}}form.name{display:flex;justify-content:space-between}.name .simple-btn{margin:0}.name input{border:none;background:none;font-size:16px}@media only screen and (min-width:1025px){.name input{font-size:1.3rem;width:90rem}}.name input::-moz-placeholder{opacity:.5}.name input:-ms-input-placeholder{opacity:.5}.name input::placeholder{opacity:.5}.subt_custom{border-bottom:1px solid #dbd6c9;border-bottom:1px solid var(--soft);font-size:1.2rem;margin:0 0 1.5vh;padding:1.5vh 1.9vh}@media only screen and (min-width:1025px){.subt_custom{margin:0 0 2.2vh;padding:2vh 2.7vh}}.subt_custom~div,.subt_custom~form{padding:0 1.9vh}@media only screen and (min-width:1025px){.subt_custom~div,.subt_custom~form{padding:0 2.7vh}}.intro .simple-btn{background:#fff;background:var(--white);color:#001446;color:var(--dark);font-size:.9rem;margin:0;padding:.7rem 1.8rem;text-transform:uppercase}@media only screen and (min-width:1025px){.intro .simple-btn{padding:.9rem 4rem;transition:color .2s ease-out,background-color .2s ease-out}.intro .simple-btn:hover{color:#fff;color:var(--white);background-color:#001446;background-color:var(--dark)}}.intro__custom__location__btns button+button,.intro__custom__music__btns button+button{margin:0 0 0 1.1rem!important}.intro__custom__location__btns button.simple-btn,.intro__custom__music__btns button.simple-btn{padding:.9rem 1.3rem}@media only screen and (min-width:1025px){.intro__custom__location__btns button.simple-btn,.intro__custom__music__btns button.simple-btn{padding:1.1rem 4rem}}@media only screen and (min-width:1025px){.intro__custom__location__btns,.intro__custom__music__btns{justify-content:flex-start}}.intro__custom__mood__btns button{align-items:center;background:#fff;background:var(--white);border-radius:.4rem;display:flex;font-size:1rem;justify-content:center;overflow:hidden;text-transform:uppercase;padding:.5rem 1rem;transition:opacity 1s ease-out}@media only screen and (min-width:1025px){.intro__custom__mood__btns button{cursor:pointer;font-family:"ev-regular",sans-serif;font-family:var(--sansbold);font-size:.9rem;padding:.9rem 6.44rem;transition:color .2s ease-out,background-color .2s ease-out}.intro__custom__mood__btns button:hover{background-color:#001446;background-color:var(--dark)}.intro__custom__mood__btns button:hover span{color:#fff;color:var(--white)}}@media only screen and (max-width:1024px){.intro__tuto .footer__music__svg{width:36%}}@media only screen and (min-width:580px)and (max-width:1024px){.intro__tuto .footer__music__svg{width:16%}}.not-custom{opacity:.1!important;pointer-events:none}@media only screen and (max-width:1024px){.intro__tuto .not-custom{opacity:1;pointer-events:auto}}.filled-custom{opacity:.3;pointer-events:none}.not-mood{opacity:.1}.mood-selected{opacity:1!important;background-color:#001446!important;background-color:var(--dark)!important}.mood-selected span{color:#fff!important;color:var(--white)!important}.fetched button{opacity:0;pointer-events:none}.intro__tuto{overflow:hidden}.intro__tuto .intro__ctn{margin:0;overflow:hidden}@media only screen and (min-width:1025px){.intro__tuto .intro__ctn{padding:0 13.7rem}}.intro__tuto__lets,.intro__tuto__lets span{display:inline-block;font-family:"ev-regular",sans-serif;font-family:var(--sansbold)}@media only screen and (min-width:1025px){.intro__tuto__text{margin:0 0 5.9rem}}.intro__tuto span.its{font-size:1.3rem;margin:1rem 0;width:83%}@media only screen and (min-width:1025px){.intro__tuto span.its{width:39%;line-height:125%}}.intro__tuto__group .subt{font-family:"ev-regular",sans-serif;font-family:var(--sansbold);font-size:1.4rem;margin:0 0 1rem}.intro__tuto__item__ctn,.menu-fs__close__profile{align-items:center;display:flex;height:80.9%;justify-content:center;position:relative}@media only screen and (min-width:1025px){.intro__tuto__item__ctn,.menu-fs__close__profile{height:67%}}.intro__tuto__box{height:44vh}@media only screen and (min-width:1025px){.intro__tuto__box{width:23.9rem}}.intro__explore__svg{width:50%}@media only screen and (min-width:580px)and (max-width:1024px){.intro__explore__svg{width:24%}}@media only screen and (min-width:1025px){.intro__explore__svg{width:57%}}span.intro__explore__numb{font-size:2.3rem}@media only screen and (min-width:1025px){span.intro__explore__numb{font-size:3.2rem}}.intro__explore__percnts{align-items:flex-start}span.intro__explore__symbol{font-size:1.4rem;margin:.5rem 0 0}.intro__explore__click,.listen-to{margin:1.8rem 0 0;font-size:1.1rem;will-change:transform}ul.tuto-colors__ctn{display:flex}.tuto-colors__ctn svg{width:3rem}.tuto-reset .intro__tuto__item__ctn{flex-direction:column}.tuto-reset,.version__reset{font-size:1.5rem}@media only screen and (max-width:1024px){.version__reset{margin:0;right:-6rem;transform:translateY(-1.5vh)}}.profile__version,.tuto-reset__name{margin:0 0 .3rem;opacity:.6}.profile__version{margin:0}@media only screen and (min-width:1025px){.profile__version{margin:0 0 0 .6rem}}.tuto-reset__name,.tuto-version{will-change:transform}.tuto-version__close,.version__reset{border-radius:50%;border:1px solid rgba(0,0,0,.25);height:2rem;margin:0 0 0 1rem;position:relative;width:2rem;transition:background-color .4s ease-out}.tuto-version__close:before,.version__reset:before{transform:rotate(45deg)}.tuto-version__close:after,.tuto-version__close:before,.version__reset:after,.version__reset:before{background:#001446;background:var(--dark);content:"";height:1px;position:absolute;width:50%;transition:background-color .4s ease-out}.tuto-version__close:after,.version__reset:after{transform:rotate(-45deg)}.active-reset .version__reset,.simula-close,.version__reset:hover{background:#001446;background:var(--dark)}.active-reset .version__reset:after,.active-reset .version__reset:before,.simula-close:after,.simula-close:before,.version__reset:hover:after,.version__reset:hover:before{background:#fff;background:var(--white)}.done-intro.no-mobile{position:absolute;right:13.8rem;top:-2.5vh;width:19.8rem}.done-intro.no-mobile .primary-btn__icon{right:1.61rem}.done-intro.no-mobile svg.primary-rect-path rect{stroke-width:2px}.char-vw{color:#8c0000;color:var(--color);will-change:transform}.other-version{opacity:.2!important}.this-version{opacity:1!important}.intro__counter{align-items:flex-start;font-size:1.1rem;right:2.7rem;right:var(--gap);top:5.3vh}@media only screen and (min-width:1025px){.intro__counter{right:17.7rem;top:15.4vh}}span.intro__counter__static{opacity:.6}span.intro__counter__dyna{font-size:1.5rem}.intro__discl{bottom:5vh;z-index:1}.intro__discl__hold{align-items:flex-end;justify-content:flex-start}@media only screen and (min-width:1025px){.intro__discl__hold{align-items:center;justify-self:left;padding:0;width:auto}}@media only screen and (min-width:1025px){.intro__discl__hold:after{background:#e2ded4;background:var(--bgHolder);border-radius:50px;content:"";height:2.8rem;left:-.9rem;position:absolute;opacity:0;transition:opacity .25s ease-out;width:calc(100% + 2.4rem);z-index:-1}}.intro__discl__icon{background:transparent;border-radius:50%;border:1px solid #001446;border:1px solid var(--dark);font-size:1rem;height:1.6rem;transition:background .25s ease-out,color .25s ease-out;width:1.6rem}.intro__discl span{margin:0 0 0 1rem;opacity:0;transition:opacity .25s ease-out;width:81%}@media only screen and (min-width:1025px){.intro__discl span{width:auto}}.intro__rush span{font-size:1.2rem;margin:1rem 0 0}.discl-active span{opacity:1}.discl-active .intro__discl__icon{background:#001446;background:var(--dark);color:#dbd6c9;color:var(--soft);cursor:default}.discl-active .intro__discl__hold:after{opacity:1}header.headers{height:auto;min-height:60vh;position:relative;width:100vw}@media only screen and (min-width:580px)and (max-width:1024px){header.headers{min-height:80vh}}@media only screen and (min-width:1025px){header.headers{height:100vh}}.headers.e-dn{height:0;opacity:0;position:absolute;top:0;visibility:hidden}.headers__hold{align-items:center;display:flex;height:100%;justify-content:center;min-height:60vh;position:relative;width:100%}@media only screen and (min-width:580px)and (max-width:1024px){.headers__hold{min-height:80vh}}.headers__title{margin:1rem 0 0}@media only screen and (min-width:1025px){.headers__title h1+h1{margin:-1.6rem 0 0}}.headers__title h1 span{color:#8c0000;color:var(--color);font-family:"a2g",monospace,sans-serif;font-family:var(--title);font-size:4.8rem;line-height:137%}@media only screen and (min-width:1025px){.headers__title h1 span{font-size:14rem}}.headers__subt span{font-family:"ev-regular",sans-serif;font-family:var(--sansbold);font-size:1.4rem}@media only screen and (min-width:1025px){.headers__subt span{font-size:6rem;font-size:2.4rem}}.cta__title h1{line-height:125%;margin:0 0 5rem}@media only screen and (min-width:1025px){.cta__title h1{font-size:9.1rem}}@media only screen and (min-width:1025px){.cta__texts{display:flex;justify-content:space-between}}@media only screen and (min-width:1025px){.cta__texts .rich-t{width:27%}}.cta__texts .primary-btn{background:#8c0000;background:var(--color);display:inline-flex}@media only screen and (min-width:1025px){.cta__texts .primary-btn{align-self:flex-end}.cta__texts .primary-btn:hover{color:#001446;color:var(--dark);background-color:#fff;background-color:var(--white)}}.cta__links{display:grid;grid-gap:.5rem;grid-gap:calc(var(--gapSections)/4);grid-template-columns:1fr 1fr}@media only screen and (min-width:1025px){.cta__links{align-items:center;display:flex;justify-content:center;margin-top:1.4rem!important;padding:0!important}}.cta__links a{text-transform:uppercase;text-align:center;font-size:1.3rem;padding:.3rem}@media only screen and (min-width:1025px){.cta__links a{margin:1.7rem 3.4rem;padding:0}}.cta__links{margin-top:.7rem;padding:1.7rem 3rem 2rem;padding:1.7rem var(--gapHolder);border-radius:.8rem;border-radius:var(--borderSingle)}.page.page-form{padding:0}.page.page-form,main.main-form{height:100vh;overflow:hidden;width:100vw}form.start-project{background:#001446;background:var(--dark);overflow:hidden}form.start-project,form.start-project>*,form.start-project a,form.start-project h1,form.start-project label,form.start-project p,form.start-project span{color:#fff;color:var(--white)}form.start-project{height:100%;padding:5rem 0}.form__hold{display:flex;display:inline-flex;height:100%;margin:3rem 1.6rem;transform:translateX(0);width:103.9rem;transition:transform 1.6s cubic-bezier(.82,0,.21,1.01);will-change:transform}@media only screen and (min-width:580px)and (max-width:1024px){.form__hold{width:194.8rem;margin:3rem .8rem}}@media only screen and (min-width:1025px){.form__hold{padding:1rem 2rem;width:426rem}}.form__hold>*{display:flex;flex-direction:column;justify-content:space-between;padding:0 1rem;position:relative;width:33%}.form__title h1{font-family:"ev-light",sans-serif;font-family:var(--sans);font-size:2.7rem}@media only screen and (min-width:580px)and (max-width:1024px){.form__title h1{font-size:1.8rem}}.form__budget .form__title h1,.form__description .form__title h1{width:50%}ul.form__items{display:flex;flex-direction:column}li.form__items__each{background:hsla(0,0%,100%,.1);border-radius:.8rem;border-radius:var(--borderSingle);border-top:1px solid rgba(0,20,70,.1);border-top:1px solid var(--lineColor);margin:.7rem 0 0;overflow:hidden;position:relative}.form__budget li.form__items__each,.form__type-proj li.form__items__each{transition:background .35s ease-out;cursor:pointer}.form__budget li.form__items__each:hover,.form__type-proj li.form__items__each:hover{background:hsla(0,0%,100%,.3)}.form__budget li.form__items__each:hover p,.form__type-proj li.form__items__each:hover p{opacity:.75}.form__budget li.form__items__each:hover .simple-btn,.form__type-proj li.form__items__each:hover .simple-btn{background:#fff;background:var(--white);color:#001446;color:var(--dark)}.form__items__each__content{align-items:center;display:flex;justify-content:space-between;padding:3rem 2rem;position:relative}@media only screen and (min-width:580px)and (max-width:1024px){.form__items__each__content{padding:1.3rem 2.4rem}}@media only screen and (min-width:1025px){.form__items__each__content{align-items:center;display:grid;grid-template-columns:34.9% 56% 9%;padding:3.2rem 2rem}}li.form__items__each input{color:#fff;color:var(--white);cursor:pointer;background:transparent;height:100%;position:absolute;width:100%;border:none;left:0;top:0;z-index:1}.form__items__each .simple-btn{margin:0}.form__budget input,.form__type-proj input{opacity:0}.form__items__each__content h1{margin:0}.form__items__each span.index{align-items:center;border-radius:50%;border:1px solid hsla(0,0%,100%,.1);display:inline-flex;font-size:1rem;height:3rem;justify-content:center;margin:-.7rem;position:absolute;width:3rem}@media only screen and (min-width:1025px){.form__items__each span.index{left:0;margin:0 0 0 2.1rem}}.form__items__each h1{font-size:1.8rem;text-indent:4.1rem}@media only screen and (min-width:1025px){.form__items__each h1{margin:0;align-self:center}}.form__items__each p{font-size:1.3rem;opacity:.4}@media only screen and (min-width:1025px){.form__items__each p{width:55rem;transition:opacity .35s ease-out}}.form__budget h1{margin:0}@media only screen and (min-width:1025px){.form__items__each .simple-btn{margin:0;display:inline-flex;justify-content:flex-end;align-self:center;justify-self:center}}li.form__items__each input:checked~.form__items__each__content{background:#dbd6c9;background:var(--soft)}li.form__items__each input:checked~.form__items__each__content a,li.form__items__each input:checked~.form__items__each__content h1,li.form__items__each input:checked~.form__items__each__content p,li.form__items__each input:checked~.form__items__each__content span{color:#001446;color:var(--dark);opacity:1}li.form__items__each input:checked~.form__items__each__content span.index{border:1px solid rgba(0,0,0,.1)}li.form__items__each input:checked~.form__items__each__content .simple-btn{background:#8c0000;background:var(--color);color:#fff;color:var(--white)}.form__return{align-items:center;display:flex;justify-content:center;right:0;top:0}@media only screen and (min-width:1025px){.form__return{right:2.2rem;top:1.6rem;cursor:pointer}.form__return:hover span{opacity:1}.form__return:hover .btn-arrow__svg{background:#fff;background:var(--white)}.form__return:hover .btn-arrow__svg svg path{stroke:#001446;stroke:var(--dark)}}.form .btn-arrow__svg{border:1px solid hsla(0,0%,100%,.1);height:3.5rem;width:3.5rem}@media only screen and (min-width:580px)and (max-width:1024px){.form .btn-arrow__svg{height:2.5rem;width:2.5rem}}@media only screen and (min-width:1025px){.form .btn-arrow__svg{height:2.5rem;width:2.5rem;transition:background .2s ease-out}}.form__return .btn-arrow__svg svg{transform:rotate(180deg);width:34%}.form__return .btn-arrow__svg svg path{transition:stroke .2s ease-out}.form__return span{font-size:1.1rem;margin:0 0 0 .7rem;opacity:.4;transition:opacity .15s ease-out}.form__description{overflow:hidden;overflow-y:scroll;padding:0 1rem 2rem}li.form__items__each .simple-btn{display:inline-flex}.form__description .form__items__each__content{align-items:flex-start;flex-direction:column;padding:1.6rem 2rem}.form__description li.form__items__each input{margin:0;position:relative}.form__description li.form__items__each input::-moz-placeholder{font-size:1.4rem;color:hsla(0,0%,100%,.4);margin:0!important}.form__description li.form__items__each input:-ms-input-placeholder{font-size:1.4rem;color:hsla(0,0%,100%,.4);margin:0!important}.form__description li.form__items__each input::placeholder{font-size:1.4rem;color:hsla(0,0%,100%,.4);margin:0!important}@media only screen and (min-width:1025px){.form__description li.form__items__each input::-moz-placeholder{color:hsla(0,0%,100%,.4)}.form__description li.form__items__each input:-ms-input-placeholder{color:hsla(0,0%,100%,.4)}.form__description li.form__items__each input::placeholder{color:hsla(0,0%,100%,.4)}}textarea::-moz-placeholder{font-size:1.4rem;color:hsla(0,0%,100%,.4);margin:0!important}textarea:-ms-input-placeholder{font-size:1.4rem;color:hsla(0,0%,100%,.4);margin:0!important}textarea::placeholder{font-size:1.4rem;color:hsla(0,0%,100%,.4);margin:0!important}@media only screen and (min-width:1025px){textarea::-moz-placeholder{color:hsla(0,0%,100%,.4)}textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.4)}textarea::placeholder{color:hsla(0,0%,100%,.4)}}textarea{color:#fff;color:var(--white);margin:1rem 0 0;background:transparent;width:100%;border:none}.form__description .simple-btn{color:#001446;color:var(--dark);background:#fff;background:var(--white);text-align:center;transition:color .2s ease-out,background-color .2s ease-out}.form__description .simple-btn:hover{background-color:#8c0000;background-color:var(--color);color:#fff;color:var(--white)}@media only screen and (min-width:1025px){.input-textarea .form__items__each__content{grid-template-columns:1fr}}.second-step .form__hold{transform:translateX(-33%)}.final-step .form__hold{transform:translateX(-66%)}.page-form footer,.page-success footer{height:0;margin:0;overflow:hidden;padding:0;pointer-events:none;position:absolute;width:0;top:0;left:0;z-index:-99}.modal-apps{height:calc(100vh - 4.6rem);position:fixed;right:calc(4.18vw - 2px);right:calc(var(--gapMainBorder) - 2px);top:2.6rem;transition:transform .8s cubic-bezier(.16,1,.3,1);width:73vw;z-index:10}@media only screen and (min-width:580px)and (max-width:1024px){.modal-apps{display:none}}@media only screen and (min-width:900px)and (max-width:1180px)and (min-height:700px){.modal-apps{display:block;width:34vw}}@media only screen and (min-width:1025px){.modal-apps{width:32rem}}.modal-apps__hold{background:#e2ded4;background:var(--bgHolder);border-bottom-left-radius:2rem 2rem;border-top-left-radius:2rem 2rem;height:100%;position:relative;width:100%}.modal-apps__nav{border-bottom:1px solid rgba(0,20,70,.1);border-bottom:1px solid var(--lineColor);height:8%;justify-content:flex-start;padding:2rem 0;width:100%}button.btn-close{background:#fff;background:var(--white);border-radius:50%;height:calc(6vh - 1rem);margin:0 0 0 5%;width:calc(6vh - 1rem)}@media only screen and (min-width:1025px){button.btn-close{height:calc(6vh - 1.5rem);width:calc(6vh - 1.5rem);cursor:pointer;transition:background .2s ease-out}button.btn-close:hover{background:#001446;background:var(--dark)}button.btn-close:hover .btn-close__line{background:#fff;background:var(--white)}}.btn-close__line{background:#001446;background:var(--dark);height:13px;width:1px;position:absolute}@media only screen and (min-width:1025px){.btn-close__line{transition:background .2s ease-out}}.btn-close__line.line1{transform:rotate(45deg)}.btn-close__line.line2{transform:rotate(-45deg)}ul.modal-apps__ctn{align-items:flex-start;height:92%;padding:2.4vh 0 0;position:relative;width:100%}@media only screen and (min-width:1025px){ul.modal-apps__ctn{justify-content:center}}li.modal-apps__each{position:absolute;width:81%;opacity:0;transition:opacity .4s ease-out}@media only screen and (min-width:1025px){li.modal-apps__each{width:80%}}li.modal-apps__nav__dot{align-items:center;display:flex;height:2rem;justify-content:center;width:2rem}.modal-apps__nav__list{position:absolute;right:5%}li.modal-apps__nav__dot{cursor:pointer;opacity:.2;transition:opacity .4s ease-out}li.modal-apps__nav__dot+li.modal-apps__nav__dot{margin:0 0 0 .3rem}@media only screen and (min-width:1025px){li.modal-apps__nav__dot+li.modal-apps__nav__dot{margin:0 0 0 .2rem}}li.modal-apps__nav__dot:before{background:#001446;background:var(--dark);border-radius:50%;content:"";height:40%;width:40%}.modal-apps__ctn__img{border-radius:.8rem;border-radius:var(--borderSingle);overflow:hidden}@media only screen and (min-width:580px)and (max-width:1024px){.modal-apps__ctn__img{display:none}}@media only screen and (min-width:900px)and (max-width:1180px)and (min-height:700px){.modal-apps__ctn__img{display:block;max-width:16rem}}.modal-apps__ctn__infos{margin:1rem 0 0}@media only screen and (min-width:1025px){.modal-apps__ctn__infos{justify-content:space-between}}.modal-closed{transform:translateX(100%)}.current-app{opacity:1!important}footer.footer{--bgFooterOpac:hsla(0,0%,100%,0.1);margin:6rem 0 0;padding-top:5rem;position:relative}@media only screen and (min-width:1025px){footer.footer{height:100vh;padding:calc(1.8rem + .1vh) 0 0}}.footer:before{background:#001446;background:var(--dark);height:6rem;left:0;transform:translateY(-100%);width:100vw;z-index:1}.footer:after,.footer:before{content:"";position:absolute;top:0}.footer:after{background:#dbd6c9;background:var(--soft);border-bottom-left-radius:2rem 2rem;border-bottom-right-radius:2rem 2rem;height:3rem;left:4.18vw;left:var(--gapMainBorder);transform:translateY(-202%);width:91.64vw;width:calc(100vw - var(--gapMainBorder)*2);z-index:2}@media only screen and (min-width:1025px){.footer__hold{display:grid;grid-template-areas:"dash" "links" "logo";grid-template-rows:42.5vh auto 33.6rem;height:calc(100vh - 2.5rem)}}.footer a,.footer h1,.footer span{color:#fff;color:var(--white);font-size:1.1rem}@media only screen and (min-width:1025px){.footer a,.footer h1,.footer span{font-size:1.2rem;padding:0}}.footer__ctn{display:flex;justify-content:center;align-items:center;flex-direction:column}.footer__dash{display:grid;grid-gap:1rem;grid-gap:calc(var(--gapSections)/2);grid-template-areas:"cta cta" "avail avail" "music explore" "health health" "colors colors";grid-template-columns:50% 50%;width:calc(100vw - 6.426rem);width:calc(100vw - var(--gap)*2.38)}@media only screen and (min-width:1025px){.footer__dash{grid-area:dash;grid-template-areas:"music health cta avail explore" "music health colors colors explore";grid-template-columns:repeat(5,1fr);height:100%;height:auto;position:relative;width:100%}}.footer__dash>*{background:var(--bgFooterOpac);border-radius:.4rem;border-radius:calc(var(--borderSingle)/2);overflow:hidden;width:100%}@media only screen and (min-width:1025px){.footer__dash>*{display:flex;flex-direction:column}}.footer__caption{border-bottom:1px solid #001446;border-bottom:1px solid var(--dark);padding:1.1rem 1rem}@media only screen and (min-width:1025px){.footer__caption{padding:1.1rem 1.9rem}}.footer__avail .footer__ctn,.footer__colors .footer__ctn,.footer__cta .footer__ctn,.footer__health .footer__ctn{height:4.8rem}@media only screen and (min-width:1025px){.footer__avail .footer__ctn,.footer__colors .footer__ctn,.footer__cta .footer__ctn,.footer__health .footer__ctn{height:100%}}.footer__caption span{opacity:.4}.footer__music{grid-area:music}.footer__music .footer__ctn{height:14rem}@media only screen and (min-width:1025px){.footer__music .footer__ctn{height:100%}}.footer__music__svg{width:50%;-webkit-animation:loopDisco 20s infinite;animation:loopDisco 20s infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@media only screen and (min-width:580px)and (max-width:1024px){.footer__music__svg{width:25%}}@media only screen and (min-width:1025px){.footer__music__svg{width:37%}}@-webkit-keyframes loopDisco{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}ul.footer__music__list{margin:2rem 0 0}li.footer__pl{text-align:center;opacity:0;pointer-events:none}li.footer__pl:not(:first-child){position:absolute}.footer__health{grid-area:health}span.footer__health__numb{font-size:1.7rem}@media only screen and (min-width:1025px){span.footer__health__numb{font-size:3.3rem}}.footer__health__texts{align-items:flex-start}.footer__cta{grid-area:cta;overflow:hidden;position:relative}@media only screen and (min-width:1025px){.footer__cta{height:131%}}ul.footer__cta__list{align-items:center;display:inline-flex;justify-content:flex-start;position:relative}li.footer__cta__each{flex-shrink:0;text-align:center;width:100%}ul.footer__cta__dots{margin:1rem 0 0;display:flex}li.footer__cta__dot{background:#fff;background:var(--white);border-radius:50%;height:.5rem;width:.5rem;opacity:.2;transition:opacity .45s ease-out}li.footer__cta__dot+li.footer__cta__dot{margin:0 0 0 .6rem}.footer__avail{grid-area:avail}@media only screen and (min-width:1025px){.footer__avail{height:131%}}span.footer__avail__year{margin:0 0 0 .7rem}.footer__colors{grid-area:colors}@media only screen and (min-width:1025px){.footer__colors{height:70%;align-self:end}}ul.footer__colors__list{padding:0 6rem}@media only screen and (min-width:1025px){ul.footer__colors__list{padding:0}}@media only screen and (min-width:580px)and (max-width:1024px){li.footer__color{width:4.4rem}}@media only screen and (min-width:1025px){li.footer__color{width:4.2vh}}@media only screen and (min-width:1025px){li.footer__color+li.footer__color{margin:0 0 0 4vh}}li.footer__color button{padding:1rem}@media only screen and (min-width:1025px){li.footer__color button{padding:0}}.footer__colors svg.svg-cover{height:99.5%;overflow:visible;position:absolute;width:99.8%;pointer-events:none}.footer__explore{grid-area:explore}.footer__explore .footer__ctn{height:14rem}@media only screen and (min-width:1025px){.footer__explore .footer__ctn{height:100%}}.footer__explore__svg{width:50%}@media only screen and (min-width:580px)and (max-width:1024px){.footer__explore__svg{width:31%}}span.footer__explore__numb{font-size:1.7rem}@media only screen and (min-width:1025px){span.footer__explore__numb{font-size:2.3rem}}.footer__explore__percnts{align-items:flex-start}.footer__links{border-bottom:1px solid var(--bgFooterOpac);border-top:1px solid var(--bgFooterOpac);grid-area:links;margin:1rem 0;margin:calc(var(--gapSections)/2) 0;padding:1rem 0;padding:calc(var(--gapSections)/2) 0}@media only screen and (min-width:1025px){.footer__links{grid-area:links;height:100%;padding:1rem 0;padding:calc(var(--gapSections)/2) 0}}ul.footer__links__hold{display:grid;grid-gap:.5rem;grid-gap:calc(var(--gapSections)/4);grid-template-columns:1fr 1fr}@media only screen and (min-width:1025px){ul.footer__links__hold{align-items:center;background:var(--bgFooterOpac);border-radius:.4rem;border-radius:calc(var(--borderSingle)/2);display:flex;height:100%;justify-content:center;overflow:hidden}}.footer__links__hold li{background:var(--bgFooterOpac);border-radius:.4rem;border-radius:calc(var(--borderSingle)/2);overflow:hidden}@media only screen and (min-width:1025px){.footer__links__hold li{align-items:center;background:none;border-radius:0;display:flex;height:100%;justify-content:center;padding:0 2.1rem}}@media only screen and (max-width:1024px){.footer__links__hold li:last-child:not(:nth-child(2n)){grid-column:1/-1}}.footer__links a{padding:1.1rem 0;text-align:center;text-transform:uppercase}@media only screen and (min-width:1025px){.footer__links a{font-size:1.3vh}}@media only screen and (max-width:1024px){.footer__links a{width:100%}}@media only screen and (min-width:1025px){.footer__links a:after{bottom:1rem}}.footer__logo{grid-area:logo;padding:.6rem 0 2rem}@media only screen and (min-width:1025px){.footer__logo{align-self:end;padding:0 0 1.6rem}}.dash{--bgFooterOpac:hsla(0,0%,100%,0.1);align-items:center;border-bottom-left-radius:2rem 2rem;border-top-left-radius:2rem 2rem;display:flex;height:calc(100vh - 1.9rem);left:auto;overflow:hidden;padding-top:0;position:fixed;right:0;top:1.9rem;transform:translateX(calc(100% + 1.5rem));transition:transform .8s cubic-bezier(.16,1,.3,1);width:39rem;z-index:22}.dash__hold{width:100%;margin:0;padding:0 2rem}.dash a,.dash h1,.dash span{color:#fff;color:var(--white);font-size:1.1rem}.dash__ctn{display:flex;justify-content:center;align-items:center;flex-direction:column}.dash__dash{display:grid;grid-gap:1rem;grid-gap:calc(var(--gapSections)/2);grid-template-areas:"cta cta" "avail avail" "music explore" "health health";grid-template-columns:1fr 1fr;width:100%}.dash__dash>*{background:var(--bgFooterOpac);border-radius:.4rem;border-radius:calc(var(--borderSingle)/2);overflow:hidden;width:100%}.dash__caption{border-bottom:1px solid #001446;border-bottom:1px solid var(--dark);padding:1.1rem 1rem}.dash__avail .dash__ctn,.dash__colors .dash__ctn,.dash__cta .dash__ctn,.dash__health .dash__ctn{height:4.8rem}.dash__caption span{opacity:.4}.dash__cta .primary-btn{width:100%}.dash__cta .primary-btn:hover .primary-btn__circ{-webkit-clip-path:circle(1.1rem at 94%);clip-path:circle(1.1rem at 94%)}.dash__cta .primary-btn__circ{-webkit-clip-path:circle(133% at 94%);clip-path:circle(133% at 94%);border-radius:50px}.dash__music{grid-area:music}.dash__music .dash__ctn{height:14rem}.dash__music__svg{width:50%;-webkit-animation:loopDisco 20s infinite;animation:loopDisco 20s infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@media only screen and (min-width:580px)and (max-width:1024px){.dash__music__svg{width:25%}}@keyframes loopDisco{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}ul.dash__music__list{margin:2rem 0 0}li.dash__pl{text-align:center;opacity:0;pointer-events:none}li.dash__pl:not(:first-child){position:absolute}.dash__health{grid-area:health}span.dash__health__numb{font-size:1.7rem}.dash__health__texts{align-items:flex-start}.dash__cta{grid-area:cta;overflow:hidden}ul.dash__cta__list{align-items:center;display:inline-flex;justify-content:flex-start;position:relative}li.dash__cta__each{flex-shrink:0;text-align:center;width:100%}ul.dash__cta__dots{margin:1rem 0 0;display:flex}li.dash__cta__dot{background:#fff;background:var(--white);border-radius:50%;height:.5rem;width:.5rem;opacity:.2;transition:opacity .45s ease-out}.dash-active{opacity:1!important}li.dash__cta__dot+li.dash__cta__dot{margin:0 0 0 .6rem}.dash__avail{grid-area:avail}span.dash__avail__year{margin:0 0 0 .7rem}.dash__colors{grid-area:colors}ul.dash__colors__list{padding:0 6rem}@media only screen and (min-width:580px)and (max-width:1024px){li.dash__color{width:4.4rem}}li.dash__color button{padding:1rem}.dash__explore{grid-area:explore}.dash__explore .dash__ctn{height:14rem}.dash__explore__svg{width:50%}@media only screen and (min-width:580px)and (max-width:1024px){.dash__explore__svg{width:31%}}span.dash__explore__numb{font-size:1.7rem}.dash__explore__percnts{align-items:flex-start}.dash__links{border-bottom:1px solid var(--bgFooterOpac);border-top:1px solid var(--bgFooterOpac);grid-area:links;margin:1rem 0;margin:calc(var(--gapSections)/2) 0;padding:1rem 0;padding:calc(var(--gapSections)/2) 0}ul.dash__links__hold{display:grid;grid-gap:.5rem;grid-gap:calc(var(--gapSections)/4);grid-template-columns:1fr 1fr}.dash__links__hold li{background:var(--bgFooterOpac);border-radius:.4rem;border-radius:calc(var(--borderSingle)/2);overflow:hidden}.dash__links__hold li:last-child:not(:nth-child(2n)){grid-column:1/-1}.dash__links a{padding:1.1rem 0;text-align:center;text-transform:uppercase}@media only screen and (min-width:1025px){.is-menu .dash{transform:translateX(0)}}.pl-active{opacity:1!important;pointer-events:auto!important}.explore-done{font-size:2.1rem!important}.preloader-master{z-index:99999;top:0;left:0;background:#001446;background:var(--dark)}svg.preloader-master__svg{height:3.2rem;left:4.18vw;left:var(--gapMainBorder);top:4.18vw;top:var(--gapMainBorder);width:3.2rem}@media only screen and (min-width:1025px){svg.preloader-master__svg{left:8.36vw;left:calc(var(--gapMainBorder)*2);top:8.36vw;top:calc(var(--gapMainBorder)*2)}}svg.preloader-master__svg{overflow:visible;position:absolute;-webkit-animation:spinning 2s infinite;animation:spinning 2s infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.preloader-master__svg circle{stroke-width:2px}.preloader-master__svg circle.circ-anima{stroke-dasharray:1;stroke-dashoffset:.5;-webkit-animation:dashAnima 2s infinite;animation:dashAnima 2s infinite;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes spinning{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinning{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes dashAnima{0%{stroke-dashoffset:1;opacity:0}30%{opacity:1}50%{stroke-dashoffset:0;opacity:1}70%{opacity:1}to{stroke-dashoffset:-1;opacity:0}}@keyframes dashAnima{0%{stroke-dashoffset:1;opacity:0}30%{opacity:1}50%{stroke-dashoffset:0;opacity:1}70%{opacity:1}to{stroke-dashoffset:-1;opacity:0}}.preloader-master__name{overflow:hidden;padding:1rem 0;position:relative}.preloader-master__name span{display:inline-flex;font-size:1.9rem;margin:-8vh 0 0;transform:translateY(160%);will-change:transform}@media only screen and (min-width:1025px){.preloader-master__name span{font-size:2.2rem}}a.main-logo{position:fixed;z-index:20;left:2.7rem;left:var(--gap);top:2.7rem;width:5rem;transition:opacity .2s ease-out}@media only screen and (min-width:1025px){a.main-logo{top:4rem}}svg.top-border{top:0;left:0;pointer-events:none;position:fixed;width:100vw;z-index:20}@media only screen and (min-width:580px)and (max-width:1024px){svg.top-border{top:-.4vh}}@media only screen and (min-width:1025px){svg.top-border{top:-.4vh}}@media only screen and (min-width:580px)and (max-width:1024px){.top-b-mobile{display:none}}@media only screen and (min-width:1025px){.top-b-mobile{display:none}}@media only screen and (max-width:1024px){.top-b-desk{display:none}}@media only screen and (min-width:580px)and (max-width:1024px){.top-b-desk{display:block}}.main-border{background:#001446;background:var(--dark);height:100vh;pointer-events:none;position:fixed;top:0;width:4.18vw;width:var(--gapMainBorder);z-index:20}@media only screen and (min-width:580px)and (max-width:1024px){.main-border{width:4.18vw;width:var(--gapMainBorder)}}@media only screen and (min-width:1025px){.main-border{width:4.18vw;width:var(--gapMainBorder)}}.border-right{right:0}:root{--gap:4rem;--borderRadius:1.6rem}.is-footer .main-logo,.is-footer nav.menu-fixed{opacity:0;pointer-events:none}canvas#webgl{height:100%;left:0;top:0;width:100%}.box-molded,canvas#webgl{pointer-events:none;position:fixed}.box-molded{border-radius:1.2rem;height:100vh;top:4.18vw;top:var(--gapMainBorder);z-index:-1}.box-molded,.wipe-soft{left:4.18vw;left:var(--gapMainBorder);width:91.64vw;width:calc(100vw - var(--gapMainBorder)*2)}.wipe-soft{background:#dbd6c9;background:var(--soft);border-radius:1rem;bottom:0;height:calc(100vh - 4.18vw);height:calc(100vh - var(--gapMainBorder));opacity:0;pointer-events:none;will-change:transform;z-index:3}.intro__gallery{padding:0;pointer-events:none;z-index:1}ul.intro__gallery__hold{display:flex}.intro__gallery__each{border-radius:.5vw;height:18vw;margin:2vh 1vw;overflow:hidden;width:32vw}.intro__gallery__each img{opacity:.05}.intro__gallery__travel+.intro__gallery__travel{margin:0 0 0 -1vw}@media only screen and (max-width:1024px){li.intro__gallery__travel.travel1{width:100%;padding:4.18vw;padding:var(--gapMainBorder)}.travel1 .intro__gallery__each{width:100%;height:19rem}}.fader-trans,.reward__fader{background:rgba(0,0,0,.9);height:100vh;left:0;top:0;width:100vw;z-index:1}.fader-trans,.reward__fader,.text-trans{opacity:0;pointer-events:none;position:fixed}.text-trans{left:50vw;text-transform:uppercase;top:50vh;transform:translate(-50%,-50%)}.text-trans span{font-family:"a2g",monospace,sans-serif;font-family:var(--title);font-size:5rem;white-space:nowrap}@media only screen and (min-width:1025px){.text-trans span{font-size:12rem}}.new-page{position:absolute;top:0;z-index:1}.headers .wrap{overflow:hidden}.headers .wrapped{will-change:transform}.is-transitioning{overflow:hidden}.intro-bg,.is-transitioning a.main-logo,.is-transitioning nav.menu-fixed{pointer-events:none}.intro-bg{background:#001446;background:var(--dark);height:100vh;left:0;opacity:0;position:fixed;top:0;width:100vw;z-index:1}.intro-bg__bg{background:#dbd6c9;background:var(--soft);border-radius:1.9rem;height:calc(100vh - 8.36vw);height:calc(100vh - var(--gapMainBorder)*2);left:4.18vw;left:var(--gapMainBorder);opacity:0;position:absolute;top:4.18vw;top:var(--gapMainBorder);width:91.64vw;width:calc(100vw - var(--gapMainBorder)*2)}.is-intro .intro-bg{opacity:1}.is-intro .intro{background:transparent;z-index:3}.intro__bg{background:transparent;border-radius:1vw}.is-intro canvas#webgl{opacity:1;z-index:2}li.proj-card{border-radius:1.2rem;border-radius:var(--borderRadius);height:55rem;overflow:hidden;position:relative}@media only screen and (min-width:1025px){li.proj-card{height:86vh}}li.proj-card+li.proj-card{margin:4rem 0 0}@media only screen and (min-width:1025px){li.proj-card+li.proj-card{margin:7rem 0 0}}.proj-card__holder{position:relative;height:100%;width:100%}a.proj-card__media{display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.15);border-radius:1.2rem;border-radius:var(--borderRadius);height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%}.proj-card__media img,.proj-card__media video{height:100%;-o-object-fit:cover;object-fit:cover;transition:opacity .5s ease-out,transform 1.5s cubic-bezier(0,.79,.13,1.04);width:100%}.proj-card__texts{bottom:3.8rem;left:1.35rem;left:calc(var(--gap)/2);position:absolute}@media only screen and (min-width:1025px){.proj-card__texts{bottom:6rem;left:8rem}}.proj-card__texts.dark-text{--white:var(--dark)}a.proj-card__title h1{color:#fff;color:var(--white);font-size:2.5rem;letter-spacing:-.05rem;margin:0 0 .5rem}@media only screen and (min-width:1025px){a.proj-card__title h1{font-size:4.8rem;letter-spacing:-.3rem}}@media only screen and (min-width:1025px){.proj-card__infos{display:flex}}.proj-card__infos span{align-items:center;color:#fff;color:var(--white);display:flex;font-size:1.1rem;justify-content:flex-start;margin:.4rem 0 0 1rem;position:relative}@media only screen and (min-width:1025px){.proj-card__infos span{font-size:1.5rem;margin:.4rem 0 0 1.5rem}}@media only screen and (min-width:1025px){.proj-card__infos span+span{margin:.4rem 0 0 4rem}}.proj-card__infos span:before{background:#fff;background:var(--white);border-radius:50%;content:"";height:.2rem;left:-1rem;position:absolute;width:.2rem}@media only screen and (min-width:1025px){.proj-card__infos span:before{height:.5rem;top:.6rem;width:.5rem}}.proj-card .primary-btn{display:none}@media only screen and (min-width:1025px){.proj-card .primary-btn{bottom:6rem;display:inline-block;position:absolute;right:8rem;text-transform:uppercase}}@media only screen and (min-width:1025px){.projects-reg ul.projects__hold.e-hold{display:grid;grid-template-columns:1fr 1fr;grid-gap:2rem;grid-gap:var(--gapSections)}}.proj-card-mini{background:#e2ded4;background:var(--bgHolder);height:auto!important}.proj-card-mini .proj-card__holder{padding:4.18vw;padding:var(--gapMainBorder)}@media only screen and (min-width:580px)and (max-width:1024px){.proj-card-mini .proj-card__holder{padding:8.36vw;padding:calc(var(--gapMainBorder)*2)}}@media only screen and (min-width:1025px){.proj-card-mini .proj-card__holder{padding:5.225vw;padding:calc(var(--gapMainBorder)*1.25)}}@media only screen and (min-width:1025px){.projects-reg li.proj-card+li.proj-card{margin:0}}.proj-card-mini a.proj-card__media{height:51vh;position:relative}@media only screen and (min-width:1025px){.proj-card-mini a.proj-card__media{height:71vh;border-radius:.8rem;border-radius:var(--borderSingle)}}.proj-card-mini .proj-card__texts{bottom:auto;left:auto;margin:1.1rem 0;position:relative}@media only screen and (min-width:1025px){.proj-card-mini .proj-card__texts{margin:1.6rem 0 1rem}}.proj-card-mini .proj-card__title h1{color:#001446!important;color:var(--dark)!important}@media only screen and (min-width:1025px){.proj-card-mini .proj-card__title h1{font-size:3.6rem;letter-spacing:-.2rem}}.proj-card-mini .proj-card__infos span{color:#001446!important;color:var(--dark)!important}@media only screen and (min-width:1025px){.proj-card-mini .proj-card__infos span{font-size:1.2rem}}.proj-card-mini .proj-card__infos span:before{background:#001446!important;background:var(--dark)!important}@media only screen and (min-width:1025px){.proj-card-mini .proj-card__infos span:before{top:.4rem}}@media only screen and (min-width:1025px){.proj-card-mini .proj-card__infos span+span{margin:.4rem 0 0 2.6rem}}@media only screen and (min-width:1025px){.proj-card-mini .primary-btn{right:0;bottom:0}}.reward{left:0;opacity:0;pointer-events:none;top:0;visibility:hidden;z-index:23}.reward__fader{z-index:auto;opacity:0;transition:opacity .8s cubic-bezier(.16,1,.3,1)}.reward svg.svg-cover{height:calc(100% - 1px);left:0;overflow:visible;pointer-events:none;top:0;width:calc(100% - 1px)}.reward__close{top:.6rem;right:.6rem;position:absolute;border:1px solid rgba(0,20,70,.1);border:1px solid var(--lineColor);border-radius:50%;z-index:1}@media only screen and (min-width:1025px){.reward__close{right:.9rem;top:.9rem}}.reward__close button.btn-close{margin:0;width:calc(5vh - 1rem);height:calc(5vh - 1rem)}@media only screen and (min-width:1025px){.reward__close button.btn-close{height:30px;width:30px}}.reward__hold{background:#fff;background:var(--white);border-radius:1.2rem;border-radius:var(--borderRadius);overflow:hidden;width:75vw}@media only screen and (min-width:1025px){.reward__hold{border-radius:1.2rem;width:64rem}}.reward__header{border-bottom:1px solid rgba(0,20,70,.1);border-bottom:1px solid var(--lineColor);padding:4vh 0}h1.reward__congrats{font-size:1.4rem}h1.reward__went{font-size:1.3rem;line-height:125%;margin:1.3vh 0 0;width:80%}.reward__contents li.reward__item{height:41vh;min-width:100%;scroll-snap-align:center;width:75vw;border-bottom:1px solid #ccc}@media only screen and (min-width:1025px){.reward__contents li.reward__item{height:20rem;width:45vw}}.reward__subt__colors{padding:0 0 4.1vh}ul.reward__contents{display:inline-flex;overscroll-behavior-x:contain;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;width:75vw;transition:transform .8s cubic-bezier(.73,0,.13,1)}@media only screen and (min-width:1025px){ul.reward__contents{width:100%}}.reward__navtabs{width:100%}.reward__navtabs__each{padding:2rem 1.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center}.reward__navtabs__each .point{background:rgba(0,20,70,.1);background:var(--lineColor);width:1rem;height:1rem;border-radius:50%;transition:background-color .3s ease-out}.reward__item button{background:#f6f6f6;padding:.9rem 2.2rem}@media only screen and (min-width:1025px){.reward__item button{min-width:15rem}}.reward__subt__colors p{font-size:1.3rem}li.reward__item.reward__contents__cupon{padding:0 2.9rem}li.reward__item.reward__contents__cupon>*{text-align:center;font-size:1.3rem}.reward__instruc{margin:3.2rem 0}@media only screen and (min-width:580px)and (max-width:1024px){.reward__instruc{margin:1.2rem 0}}@media only screen and (min-width:1025px){.reward__instruc{margin:1rem 0 2.5rem}}.reward__instruc a{display:inline-block;text-decoration:underline}@media only screen and (min-width:1025px){.reward__code{border-radius:.4rem;overflow:hidden}}.reward__code span{background:#f6f6f6;padding:1.9rem 2rem;font-size:1.4rem}.reward__contents__cupon p{font-size:1.3rem}.trg-rews{pointer-events:none;cursor:pointer}.is-complete.is-rewards{overflow:hidden}.is-complete .js-span-perc{display:none}@media only screen and (min-width:1025px){.is-complete span.dash__explore__numb{font-size:1.5rem}}.is-complete span.footer__explore__numb{font-size:1.5rem}@media only screen and (min-width:1025px){.is-complete span.footer__explore__numb{font-size:2rem}}.is-complete .trg-rews{pointer-events:auto}.is-complete.is-rewards .reward{visibility:visible;opacity:1;pointer-events:auto}.is-complete.is-rewards .reward__fader{opacity:1}.to-colors ul.reward__contents{transform:translateX(0)}.to-colors .trg-colors{background:#8c0000;background:var(--color)}.to-cupon ul.reward__contents{transform:translateX(-100%)}.to-cupon .trg-cupon{background:#8c0000;background:var(--color)}@media only screen and (min-width:1025px){.slice-subt-p{display:flex;justify-content:flex-end;padding:0 16.8rem 0 0}}@media only screen and (min-width:1025px){.slice-subt-p__hold{width:51.1rem;margin:0}}.Bleed .slice-img__hold{height:115vh;overflow:hidden}@media only screen and (min-width:1025px){.Bleed .slice-img__hold{height:130vh}}.Bleed img{margin:-20% 0 0;will-change:transform}.Centered .slice-img__hold{border-radius:1.2rem;border-radius:var(--borderRadius);margin:0 0 0 2.7rem;margin:0 0 0 var(--gap);overflow:hidden;width:calc(100vw - 5.4rem);width:calc(100vw - var(--gap)*2)}.slice-img.Centered .slice-img__hold{height:95vh}.slice-img.Centered .slice-img__hold img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}@media only screen and (min-width:1025px){ul.slice-mobile__hold{display:flex;grid-gap:14rem;grid-gap:calc(var(--gapSections)*7);justify-content:space-between}}@media only screen and (min-width:1025px){li.slice-mobile__each{align-self:flex-start;height:54.55rem;width:30.7rem}}li.slice-mobile__each+li.slice-mobile__each{margin:2rem 0 0;margin:var(--gapSections) 0 0 0}@media only screen and (min-width:1025px){li.slice-mobile__each+li.slice-mobile__each{margin:0}}@media only screen and (min-width:1025px){li.slice-mobile__each:nth-child(2){margin-top:15rem!important}}@media only screen and (min-width:1025px){li.slice-mobile__each:nth-child(3){margin-top:30rem!important}}li.slice-uxvideos__video{display:flex;justify-content:center;align-items:center;aspect-ratio:16/9;border-radius:.8rem;border-radius:var(--borderSingle);height:100%;max-width:1360px;-o-object-fit:contain;object-fit:contain;overflow:hidden;position:relative;width:100%}@media only screen and (min-width:1025px){li.slice-uxvideos__video{width:102.5rem}}li.slice-uxvideos__video+li.slice-uxvideos__video{margin:2rem 0 0;margin:var(--gapSections) 0 0 0}@media only screen and (min-width:1025px){li.slice-uxvideos__video+li.slice-uxvideos__video{margin:9rem 0 0}}.slice-uxvideos__video video{width:100%}@media only screen and (min-width:1025px){.slice-mega__hold{display:flex;justify-content:space-between}}.slice-mega__subt span{font-size:2.7rem;font-family:"ev-regular",sans-serif;font-family:var(--sansbold);line-height:120%;margin:0 0 3.4rem}@media only screen and (min-width:1025px){.slice-mega__subt span{letter-spacing:.05rem}}@media only screen and (min-width:1025px){.slice-mega__subt-img{width:46rem;display:flex;flex-direction:column;justify-content:space-between}}@media only screen and (min-width:1025px){.slice-mega__subt-img.has-image{height:87vh}}.slice-mega__subt-img__img{margin:0 0 2rem}@media only screen and (min-width:1025px){.slice-mega__subt-img__img{margin:0;width:31rem;max-height:62vh}}@media only screen and (min-width:1025px){.slice-mega__subt-img__img img{height:100%;-o-object-fit:contain;object-fit:contain;-o-object-position:left;object-position:left;width:100%}}@media only screen and (min-width:1025px){.slice-mega__parag-img{width:65.7rem}}.slice-mega__parag-img__img{margin:2rem 0}@media only screen and (min-width:1025px){.slice-mega__parag-img__img{margin:4rem 0}}.slice-mega__parag-img__img img{width:100%}.slice-mega__parag-img__img caption{display:inline-block;font-size:1.4rem;margin:.8rem 0 0;text-align:left;width:100%}@media only screen and (min-width:1025px){.slice-mega__parag-img__img caption{font-size:1.06rem}}.slice-mega__video,.slice-mega__vimeo{margin:4rem 0;background:#000;height:50.4vw;position:relative;width:100%}@media only screen and (min-width:1025px){.slice-mega__video,.slice-mega__vimeo{height:37rem}}.slice-mega__video video,.slice-mega__vimeo iframe{width:100%;height:100%}.slice-mega__vimeo__img{z-index:1;align-items:center;background:#001446;background:var(--dark);display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%;z-index:2}.slice-mega__vimeo{position:relative}.slice-mega__vimeo__play{align-items:center;display:flex;justify-content:center;width:3.8rem}.slice-mega__vimeo__img img{opacity:.8}.video-vertical .slice-mega__video,.video-vertical .slice-mega__vimeo{height:58.5rem}@media only screen and (min-width:1025px){.video-vertical .slice-mega__video,.video-vertical .slice-mega__vimeo{height:117.5rem}}.slice-double-img picture+picture{margin:2rem 0 0}@media only screen and (min-width:1025px){.Fifty-fifty{display:flex;justify-content:space-between}}@media only screen and (min-width:1025px){.Fifty-fifty>*,.Seventy-thirty>*{width:49.3%;margin:0!important;padding:0}}@media only screen and (min-width:1025px){.Seventy-thirty{display:grid;grid-template-columns:.7fr .3fr;grid-gap:2rem}}@media only screen and (min-width:1025px){.Seventy-thirty>*{width:100%;height:100%}}.slice-subt-p-img__texts span.subt{margin:1.5rem 0}@media only screen and (min-width:1025px){.slice-subt-p-img__hold{display:flex;justify-content:space-between;align-items:center}}@media only screen and (min-width:1025px){.slice-subt-p-img__img{width:74.4%}}@media only screen and (min-width:1025px){.slice-subt-p-img__texts{width:24%;margin:-5.1rem 0 0}}@media only screen and (min-width:1025px){.slice-subt-p-img{margin:0 0 2rem}}.slice-subt-p-img__texts span.subt{font-family:"ev-regular",sans-serif;font-family:var(--sansbold)}@media only screen and (min-width:1025px){.slice-subt-p-img__texts span.subt{margin:0 0 5.1rem}}@media only screen and (min-width:1025px){.slice-subt-p-img__texts .rich-t{width:85%}}.slice-vimeo__hold{height:50vw;position:relative;background:#000}@media only screen and (min-width:1025px){.slice-vimeo__hold{height:76.6rem}}.slice-mega__vimeo__img,.slice-vimeo__img,.slice-vimeo__video{display:flex;justify-content:center;align-items:center;background:#000;height:100%;left:0;top:0;width:100%;z-index:1;cursor:pointer;transition:opacity 1s cubic-bezier(.16,1,.3,1)}@media only screen and (min-width:1025px){.slice-mega__vimeo__img:hover img,.slice-mega__vimeo__img:hover video,.slice-vimeo__img:hover img,.slice-vimeo__img:hover video,.slice-vimeo__video:hover img,.slice-vimeo__video:hover video{transform:scale(1.025);opacity:.7}.slice-mega__vimeo__img:hover .slice-vimeo__play,.slice-vimeo__img:hover .slice-vimeo__play,.slice-vimeo__video:hover .slice-vimeo__play{transform:scale(.95)}}.slice-mega__vimeo{overflow:hidden}.slice-mega__vimeo__img{background:#000;transition:opacity 1s cubic-bezier(.16,1,.3,1)}@media only screen and (min-width:1025px){.slice-mega__vimeo__img:hover img{transform:scale(1.025);opacity:.7}.slice-mega__vimeo__img:hover .slice-vimeo__play{transform:scale(.95)}}.slice-mega__vimeo__img img,.slice-vimeo__img img,.slice-vimeo__video video{height:100%;-o-object-fit:cover;object-fit:cover;opacity:.9;width:100%}@media only screen and (min-width:1025px){.slice-mega__vimeo__img img,.slice-vimeo__img img,.slice-vimeo__video video{will-change:transform,opacity;transform:scale(1);transition:transform 1.2s cubic-bezier(.16,1,.3,1),opacity .6s cubic-bezier(.16,1,.3,1)}}.slice-vimeo__play{width:2.4rem;z-index:1}@media only screen and (min-width:1025px){.slice-vimeo__play{width:3.9rem;transform:scale(1);transition:transform 1.2s cubic-bezier(.16,1,.3,1)}}.slice-vimeo iframe{height:100%;width:100%}.remove-cover{opacity:0;pointer-events:none}.no-bg{background:rgba(0,0,0,.12)!important}header.header-home{padding:4.18vw 0 0;padding:var(--gapMainBorder) 0 0 0;margin:1rem 0 6rem}@media only screen and (min-width:1025px){header.header-home{margin:0 0 6rem}}.header-home__title{margin:4.4rem 0 2rem}@media only screen and (min-width:580px)and (max-width:1024px){.header-home__title{display:flex;margin:4.6rem 0 .5rem}}@media only screen and (min-width:1025px){.header-home__title{display:flex;margin:6.6rem 0 .5rem}}.header-home__title h1{font-size:11.2rem;line-height:122%}@media only screen and (min-width:580px)and (max-width:1024px){.header-home__title h1{font-size:10.8rem}}@media only screen and (min-width:1025px){.header-home__title h1{font-size:25.3rem}}.header-home__title h1.work{font-size:13.3rem}@media only screen and (min-width:580px)and (max-width:1024px){.header-home__title h1.work{font-size:10.8rem;margin:0 0 0 .9rem}}@media only screen and (min-width:1025px){.header-home__title h1.work{font-size:25.3rem;margin:0 0 0 2rem}}.header-home__title .wrapped{padding:.2rem 0 0}.header-home__subt h1{font-size:4.45rem;letter-spacing:-.15rem}@media only screen and (min-width:580px)and (max-width:1024px){.header-home__subt h1{font-size:7rem}}@media only screen and (min-width:1025px){.header-home__subt h1{font-size:17.97rem}}.header-home__captions{display:grid;grid-gap:1.4rem 4rem;grid-template-columns:1fr 1fr;margin-top:2vh}@media only screen and (min-width:580px)and (max-width:1024px){.header-home__captions{display:flex;justify-content:space-between;margin:1.8rem 0 0}}@media only screen and (min-width:1025px){.header-home__captions{display:flex;justify-content:space-between;margin:1.8rem 0 0}}.header-home__captions__group li:first-child span{font-family:"ev-regular",sans-serif;font-family:var(--sansbold)}.header-home__captions__group li{font-size:1.7rem}@media only screen and (min-width:1025px){.header-home__captions__group li{font-size:2.4rem}}.header-home__captions__group li+li{margin:.5rem 0}@media only screen and (min-width:1025px){.header-home__captions__group li+li{margin:1rem 0}}section.recog{border-top:1px solid var(--linecolor)}@media only screen and (max-width:1024px){section.recog{padding:0 0 2.3rem}}@media only screen and (min-width:1025px){.recog__hold{justify-content:space-between;margin:0 0 0 2.7rem;margin:0 0 0 var(--gap);padding:5vh 2.7rem;padding:5vh var(--gap)}}.recog__info{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:2.7rem 0;padding:var(--gap) 0}@media only screen and (min-width:1025px){.recog__info{align-items:center;border-right:1px solid rgba(0,20,70,.1);border-right:1px solid var(--lineColor);height:71.7vh;justify-content:space-between;margin:0 5rem 0 0;padding:0;width:68%}}.recog__info>*{text-align:center;width:85%}@media only screen and (min-width:1025px){.recog__info p{width:57%}}.recog__content{margin:1.5rem 0 0}@media only screen and (min-width:1025px){.recog__content{margin:2.1rem 0 0;display:flex;flex-direction:column;width:74rem!important}}.recog__content .items__each{border-top:1px solid rgba(0,20,70,.1);border-top:1px solid var(--lineColor);display:flex;justify-content:space-between;padding:.8rem 0}@media only screen and (min-width:1025px){.recog__content .items__each{padding:.5rem}}.recog__content .items__each span{font-size:1rem}.recog h1{font-family:"a2g",monospace,sans-serif;font-family:var(--title);margin:0 0 7rem}@media only screen and (min-width:1025px){.recog h1{margin:5rem 0 0}}.recog__img{background:hsla(0,0%,100%,.4);margin:2rem 0 0;margin:var(--gapSections) 0 0;border-radius:.7rem;height:38rem}@media only screen and (min-width:1025px){.recog__img{height:57vh;margin:2.7rem;margin:var(--gap)}}.recog__img picture{height:90%;left:0;padding:2.7rem;padding:var(--gap);top:0}@media only screen and (min-width:580px)and (max-width:1024px){.recog__img picture{padding:2.7rem;padding:var(--gap)}}@media only screen and (min-width:900px)and (max-width:1180px)and (min-height:700px){.recog__img picture{padding:2.7rem;padding:var(--gap)}}@media only screen and (min-width:1025px){.recog__img picture{padding:2rem;height:90%}}.recog__img picture+picture{left:0;position:absolute;top:0;width:100%}.recog__img img{border-radius:.5rem}@media only screen and (min-width:1025px){.recog__info .rich-t.subt-p{align-items:center;display:flex;justify-content:center}}@media only screen and (min-width:1025px){.recog__info p{width:74%}}.reveal-img{display:block!important}.recog__img__links{justify-content:space-between;margin:0 2.7rem;margin:0 var(--gap);font-size:1.3rem}@media only screen and (min-width:900px)and (max-width:1180px)and (min-height:700px){.recog__img__links{margin:0 2.7rem;margin:0 var(--gap)}}@media only screen and (min-width:1025px){.recog__img__links{font-size:1.1rem;justify-content:space-between;margin:1rem 0 0;padding:0 2rem}}.recog__content li:nth-child(4){border-bottom:1px solid rgba(0,20,70,.1);border-bottom:1px solid var(--lineColor)}@media only screen and (min-width:1025px){.recog__content li:nth-child(4){order:2;margin:0 0 2.1rem}}@media only screen and (min-width:1025px){.recog__content li:first-child{border-bottom:1px solid rgba(0,20,70,.1);border-bottom:1px solid var(--lineColor);order:0;padding:0}.recog__content li:last-child{order:1;margin:2.1rem}.recog__content li:nth-child(2),.recog__content li:nth-child(3){order:2}.recog__content .items__each{padding:.8rem 2.1rem}.recog h1{font-size:7rem}.recog__content li:first-child>*{width:50%}.recog__content li:first-child span:last-child{border-left:1px solid rgba(0,20,70,.1);border-left:1px solid var(--lineColor);text-align:right}.recog__content li:first-child span{padding:.8rem 0}}@media only screen and (min-width:1025px){.recog__content li:last-child,.recog__img{margin:2vh 0}}@media only screen and (min-width:1025px){.recog__hold{padding:0;align-items:flex-start}.recog__content{margin:0;border-radius:1.2rem;border-radius:var(--borderRadius);padding:5.5vh 5rem;width:50%!important}.recog__content,.recog__info{height:87vh;background:#e2ded4;background:var(--bgHolder)}.recog__info{border-radius:1.2rem;border-radius:var(--borderRadius);width:50%;border:none;margin:0 4rem 0 0;padding:0 0 9vh}.recog h1{margin:9rem 0 0}}section.enough-me{margin:2rem 0 0}.enough-me h1{font-size:1.7rem;line-height:137%;text-transform:uppercase;position:relative;text-indent:2rem}@media only screen and (min-width:1025px){.enough-me h1{text-indent:3rem;font-size:2.7rem}}.enough-me h1.quoted{display:inline-block}.enough-me h1.quoted:before{background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYiIGhlaWdodD0iNjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDEuNDJjMCAxMC4xMTggMy43NjYgMTYuNTUgMTEuMjk3IDE5LjI5NCAyLjA1NC44NTcgNC4yOCAxLjI4NiA2LjY3NiAxLjI4NiA2Ljg0NyAwIDExLjgxLTMuMjU5IDE0Ljg5Mi05Ljc3NiAxLjE5OC0yLjQwMSAxLjc5Ny00Ljk3NCAxLjc5Ny03LjcxOCAwLTcuMzc1LTMuMzM4LTEyLjYwNi0xMC4wMTMtMTUuNjkzYTUwLjYwNyA1MC42MDcgMCAwMC0zLjg1Mi0xLjI4NmMtNC4xMDgtMS4yLTYuMjQ4LTMuMjU5LTYuNDE5LTYuMTc0LjE3MS01LjE0NiAzLjMzOC0xMC45NzcgOS41LTE3LjQ5NEwxOC43NDMgMEM4LjQ3MyAxMC44MDUgMi4zOTYgMjIuNjM5LjUxMyAzNS41MDJBMzYuMDggMzYuMDggMCAwMDAgNDEuNDJ6bTQxLjMzOCAwYzAgMTAuMTE4IDMuNzY2IDE2LjU1IDExLjI5NyAxOS4yOTRDNTQuNjkgNjEuNTcgNTYuOTE1IDYyIDU5LjMxMSA2MmM2Ljg0NyAwIDExLjgxLTMuMjU5IDE0Ljg5Mi05Ljc3NkM3NS40IDQ5LjgyMyA3NiA0Ny4yNSA3NiA0NC41MDZjMC03LjM3NS0zLjMzOC0xMi42MDYtMTAuMDEzLTE1LjY5M2E1MC42MjQgNTAuNjI0IDAgMDAtMy44NTItMS4yODZjLTQuMTA4LTEuMi02LjI0OC0zLjI1OS02LjQxOS02LjE3NC4xNzEtNS4xNDYgMy4zMzgtMTAuOTc3IDkuNS0xNy40OTRMNjAuMDgxIDBjLTEwLjI3IDEwLjgwNS0xNi4zNDcgMjIuNjM5LTE4LjIzIDM1LjUwMmEzNi4wNzUgMzYuMDc1IDAgMDAtLjUxMyA1LjkxN3oiIGZpbGw9IiM4QzAwMDAiLz48L3N2Zz4=");background-repeat:no-repeat;background-size:contain;content:"";position:absolute;width:1.5rem;height:1.5rem;top:0;left:0}@media only screen and (min-width:1025px){.enough-me h1.quoted:before{width:2rem}}.enough-me h1.quoted:after{background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYiIGhlaWdodD0iNjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTc2IDIwLjU4YzAtMTAuMTE4LTMuNzY2LTE2LjU1LTExLjI5Ny0xOS4yOTRDNjIuNjQ5LjQzIDYwLjQyMyAwIDU4LjAyNyAwYy02Ljg0NyAwLTExLjgxIDMuMjU5LTE0Ljg5MiA5Ljc3Ni0xLjE5OCAyLjQwMS0xLjc5NyA0Ljk3NC0xLjc5NyA3LjcxOCAwIDcuMzc1IDMuMzM4IDEyLjYwNiAxMC4wMTMgMTUuNjkzIDEuMzcuNTE0IDIuNjU0Ljk0MyAzLjg1MiAxLjI4NiA0LjEwOCAxLjIgNi4yNDcgMy4yNTkgNi40MTkgNi4xNzQtLjE3MiA1LjE0NS0zLjMzOCAxMC45NzctOS41IDE3LjQ5NEw1Ny4yNTcgNjJjMTAuMjctMTAuODA1IDE2LjM0Ny0yMi42MzkgMTguMjMtMzUuNTAyLjM0Mi0yLjA1OC41MTMtNC4wMy41MTMtNS45MTd6bS00MS4zMzggMGMwLTEwLjExOC0zLjc2Ni0xNi41NS0xMS4yOTctMTkuMjk0QzIxLjMxLjQzIDE5LjA4NSAwIDE2LjY4OSAwIDkuODQyIDAgNC44OCAzLjI1OSAxLjc5NyA5Ljc3Ni42IDEyLjE3NyAwIDE0Ljc1IDAgMTcuNDk0IDAgMjQuODY5IDMuMzM4IDMwLjEgMTAuMDE0IDMzLjE4N2MxLjM2OS41MTQgMi42NTMuOTQzIDMuODUgMS4yODYgNC4xMDkgMS4yIDYuMjQ5IDMuMjU5IDYuNDIgNi4xNzQtLjE3MSA1LjE0NS0zLjMzOCAxMC45NzctOS41IDE3LjQ5NEwxNS45MTkgNjJjMTAuMjctMTAuODA1IDE2LjM0Ny0yMi42MzkgMTguMjMtMzUuNTAyLjM0Mi0yLjA1OC41MTMtNC4wMy41MTMtNS45MTd6IiBmaWxsPSIjOEMwMDAwIi8+PC9zdmc+");background-repeat:no-repeat;background-size:contain;content:"";position:absolute;width:1.5rem;height:1.5rem;top:0;right:-2rem}@media only screen and (min-width:1025px){.enough-me h1.quoted:after{right:-3rem;width:2rem}}section.section-values{padding:2rem 4.18vw;padding:var(--gapSections) var(--gapMainBorder)}ul.section-values__hold{border-top:1px solid #001446;border-top:1px solid var(--dark)}li.section-values__each img{height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;width:11rem;z-index:1}@media only screen and (min-width:1025px){li.section-values__each img{width:28rem}}li.section-values__each{display:flex;flex-direction:column;position:relative;width:100%}li.section-values__each span{align-items:flex-start;border-bottom:1px solid #001446;border-bottom:1px solid var(--dark);display:inline-block;font-size:4rem;padding:2rem 0 2rem 12.4rem;text-align:left;width:100%}@media only screen and (min-width:1025px){li.section-values__each span{font-size:13.5rem;padding:5rem 0 4rem 30.5rem}}li.section-values__each:nth-child(2n) span{align-items:flex-end;text-align:right}@media only screen and (max-width:1024px){li.section-values__each:nth-child(2n) span{padding:2rem 12.4rem 2rem 0}}@media only screen and (min-width:1025px){li.section-values__each:nth-child(2n) span{padding-right:30.5rem}}li.section-values__each:nth-child(2n) img{left:auto;right:0}section.section-imgplx{border:none!important;height:104vh;overflow:hidden;position:relative}@media only screen and (min-width:1025px){section.section-imgplx{height:146vh}}.section-imgplx__img{width:100%;height:100%}.section-imgplx__img img{margin:-20% 0 0;will-change:transform}.is-SimpleExperience .section-imgplx__img img{margin:0}.section-imgplx .plxcard{background:#fff;display:none;padding:2rem;position:absolute;width:29rem;z-index:1}@media only screen and (min-width:1025px){.section-imgplx .plxcard{display:block}}.section-imgplx .plxcard .plxcard-img{height:30rem;border-radius:.8rem;border-radius:var(--borderSingle);overflow:hidden}.section-imgplx .plxcard:first-child{left:11rem;top:18vh}.section-imgplx .plxcard:nth-child(2){bottom:14vh;right:8rem}.section-imgplx a.title-prod{font-size:1rem}a.section-plxvid__link{bottom:4rem;font-size:1.1rem;position:absolute;right:2.7rem;right:var(--gap);z-index:1}@media only screen and (min-width:1025px){a.section-plxvid__link{bottom:8rem}}@media only screen and (min-width:1025px){a.section-plxvid__captions:before{background:#fff;background:var(--white);border-radius:50%;content:"";height:.2rem;left:-1rem;position:absolute;width:.2rem}}a.section-plxvid__captions{font-size:1.1rem;top:16rem;z-index:1}@media only screen and (min-width:900px)and (max-width:1180px)and (min-height:700px){a.section-plxvid__captions{font-size:.8rem;left:2.7rem;left:var(--gap);top:6.4rem}}@media only screen and (min-width:1025px){a.section-plxvid__captions{display:flex;justify-content:center;align-items:center;font-size:13px;top:auto;font-family:"ev-light",sans-serif;font-family:var(--sans);left:5rem;text-transform:uppercase;color:#fff;bottom:12vh}}.section-plxvid a.primary-btn{bottom:13rem;z-index:1;position:absolute}@media only screen and (min-width:1025px){.section-plxvid a.primary-btn{right:2.7rem;right:var(--gap);bottom:10vh}}.plxcard{position:relative;width:100%}@media only screen and (min-width:1025px){.plxcard{overflow:hidden}}.plxcard-img{align-items:center;display:flex;height:100%;height:auto;justify-content:center;overflow:hidden;position:relative;width:100%}@media only screen and (min-width:580px)and (max-width:1024px){.plxcard-img{height:33.65rem}}@media only screen and (min-width:900px)and (max-width:1180px)and (min-height:700px){.plxcard-img{height:33.65rem}}@media only screen and (min-width:1025px){.plxcard-img{height:33.65rem}}a.plxcard-img img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.plxcard-img .img-hover{left:0;opacity:0;position:absolute;top:0;transition:opacity .5s ease-out}.plxcard-infos__title{font-family:"ev-regular",sans-serif;font-family:var(--sansbold);margin:1rem 0 0;width:66%}a.title-prod{display:block;font-family:var(--gt);font-size:1.2rem;line-height:154%;margin:0;position:relative;text-transform:uppercase}@media only screen and (min-width:1025px){a.title-prod{line-height:100%;font-size:1.3rem}}section.section-plxvid{background:#000;border:none!important;height:104vh;overflow:hidden;position:relative}@media only screen and (min-width:1025px){section.section-plxvid{height:146vh}}.section-plxvid__img{height:100%;opacity:.8;position:absolute;width:100%;background:#000}.section-plxvid__img img{opacity:.95}.section-plxvid__texts__hold{position:absolute}.section-plxvid__texts__bg{border-radius:1.2rem;border-radius:var(--borderRadius);height:30rem;overflow:hidden;position:absolute;width:58vw}@media only screen and (min-width:1025px){.section-plxvid__texts__bg{border-radius:1.2rem;border-radius:var(--borderRadius);height:68vh;width:39rem}}.section-plxvid__texts__bg video{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.section-plxvid__texts__hold span{font-size:1rem;line-height:182%;width:55%}@media only screen and (min-width:1025px){.section-plxvid__texts__hold span{opacity:.6;width:73%}}@media only screen and (min-width:1025px){.section-details__hold{height:100vh;padding:4.3rem 2rem}}@media only screen and (max-width:1024px){.section-details__hold{padding:2rem}}@media only screen and (min-width:1025px){.section-details__info{margin:0;width:100%}}.section-details__content{display:flex;gap:1rem;grid-gap:1rem;height:23rem;margin:1rem 0 0}@media only screen and (min-width:1025px){.section-details__content{border:none;flex-direction:column;grid-gap:0;gap:0;height:100%;margin:0}}.section-details__video{display:flex;margin:0;padding:0;position:relative;border-radius:.8rem;border-radius:var(--borderSingle);overflow:hidden}@media only screen and (min-width:1025px){.section-details__video{border:none;margin:0 2rem;padding:0!important;width:83.6rem}}@media only screen and (max-width:1024px){.section-details__video{height:53vh}}.section-details__video video{height:100%;-o-object-fit:cover;object-fit:cover}@media only screen and (min-width:1025px){.section-details__video video{width:100%}}@media only screen and (max-width:1024px){.section-details__video video{width:100%}}.section-details__video a.title{color:#fff;font-size:1.3rem;margin:2rem}@media only screen and (min-width:1025px){.section-details__video a.title{margin:3rem}}.section-details img{border-radius:.8rem;border-radius:var(--borderSingle)}.section-details__video .primary-btn{bottom:1.5rem;position:absolute;right:2rem}@media only screen and (min-width:1025px){.section-details__video .primary-btn{bottom:2.5rem;right:5rem}}.section-details span.e-abs{font-family:"ev-regular",sans-serif;font-family:var(--sansbold);font-size:1rem}@media only screen and (min-width:1025px){.section-details span.e-abs{font-size:1rem;padding:2.1rem 0 0 .9rem}}.section-details__content>*{position:relative;width:50%}@media only screen and (min-width:1025px){.section-details__content>*{height:100%;width:100%}}.section-details__content span{margin:1rem;position:absolute;text-transform:uppercase;top:0;z-index:1}@media only screen and (min-width:1025px){.section-details__img,.section-details__img2,.section-details__video{padding:0 2rem}}.section-details__img{position:relative}@media only screen and (min-width:1025px){.section-details__img{height:44%;border-bottom:1px solid rgba(0,20,70,.1);border-bottom:1px solid var(--lineColor);padding:0 2rem 2rem}}.section-details__img a,.section-details__imgs{color:#fff;font-size:1.3rem;margin:0}@media only screen and (min-width:1025px){.section-details__img a,.section-details__imgs{margin:3rem}}.section-details__img2 a,.section-details__img a{color:#fff;font-size:1.2rem;left:1rem;max-width:33vw;position:absolute;top:1.6rem;z-index:1}@media only screen and (min-width:1025px){.section-details__img2 a,.section-details__img a{top:4.6rem;left:4rem;max-width:none}}@media only screen and (min-width:1025px){.section-details__img a{top:0;left:1rem}}@media only screen and (min-width:1025px){.section-details__img2{padding:2rem 2rem 0}}.quotes{align-items:center;background:#dbd6c9;background:var(--soft);display:flex;flex-direction:column;justify-content:center;margin-top:2rem;padding:8rem 2.7rem;padding:8rem var(--gap);position:relative}@media only screen and (min-width:1025px){.quotes{padding:18rem 10rem 0}}span.here-are{align-self:flex-start;margin:0 0 2rem 1rem;width:21rem}@media only screen and (min-width:580px)and (max-width:1024px){span.here-are{width:15rem}}@media only screen and (min-width:1025px){span.here-are{margin:0;transform:translateY(3.3rem);width:32rem}}@media only screen and (min-width:1025px){.quotes__hold{padding:0 0 0 24rem}}@media only screen and (max-width:1024px){.quotes__hold{width:80vw}}blockquote.quotes__bq{display:flex;flex-direction:column;position:relative}.quotes__bq .wrap{padding:.2rem 0}.quotes__bq .wrapped{position:relative}.quotes__bq,.quotes__bq span{display:inline-block;font-family:"a2g",monospace,sans-serif;font-family:var(--title);font-size:2.6rem;line-height:1.4;letter-spacing:.03rem;margin:0;position:relative;text-transform:uppercase;will-change:transform}@media only screen and (min-width:1025px){.quotes__bq,.quotes__bq span{margin:0 0 0 8rem;font-size:4.8rem;width:66rem}}blockquote.quotes__bq .wrap:first-child .wrapped{text-indent:2.2rem}@media only screen and (min-width:1025px){blockquote.quotes__bq .wrap:first-child .wrapped{text-indent:3rem;white-space:nowrap}}blockquote.quotes__bq .wrap:first-child .wrapped:before{background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYiIGhlaWdodD0iNjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDEuNDJjMCAxMC4xMTggMy43NjYgMTYuNTUgMTEuMjk3IDE5LjI5NCAyLjA1NC44NTcgNC4yOCAxLjI4NiA2LjY3NiAxLjI4NiA2Ljg0NyAwIDExLjgxLTMuMjU5IDE0Ljg5Mi05Ljc3NiAxLjE5OC0yLjQwMSAxLjc5Ny00Ljk3NCAxLjc5Ny03LjcxOCAwLTcuMzc1LTMuMzM4LTEyLjYwNi0xMC4wMTMtMTUuNjkzYTUwLjYwNyA1MC42MDcgMCAwMC0zLjg1Mi0xLjI4NmMtNC4xMDgtMS4yLTYuMjQ4LTMuMjU5LTYuNDE5LTYuMTc0LjE3MS01LjE0NiAzLjMzOC0xMC45NzcgOS41LTE3LjQ5NEwxOC43NDMgMEM4LjQ3MyAxMC44MDUgMi4zOTYgMjIuNjM5LjUxMyAzNS41MDJBMzYuMDggMzYuMDggMCAwMDAgNDEuNDJ6bTQxLjMzOCAwYzAgMTAuMTE4IDMuNzY2IDE2LjU1IDExLjI5NyAxOS4yOTRDNTQuNjkgNjEuNTcgNTYuOTE1IDYyIDU5LjMxMSA2MmM2Ljg0NyAwIDExLjgxLTMuMjU5IDE0Ljg5Mi05Ljc3NkM3NS40IDQ5LjgyMyA3NiA0Ny4yNSA3NiA0NC41MDZjMC03LjM3NS0zLjMzOC0xMi42MDYtMTAuMDEzLTE1LjY5M2E1MC42MjQgNTAuNjI0IDAgMDAtMy44NTItMS4yODZjLTQuMTA4LTEuMi02LjI0OC0zLjI1OS02LjQxOS02LjE3NC4xNzEtNS4xNDYgMy4zMzgtMTAuOTc3IDkuNS0xNy40OTRMNjAuMDgxIDBjLTEwLjI3IDEwLjgwNS0xNi4zNDcgMjIuNjM5LTE4LjIzIDM1LjUwMmEzNi4wNzUgMzYuMDc1IDAgMDAtLjUxMyA1LjkxN3oiIGZpbGw9IiM4QzAwMDAiLz48L3N2Zz4=");background-repeat:no-repeat;background-size:contain;content:"";position:absolute;width:1.5rem;height:1.5rem;top:0;left:0}@media only screen and (min-width:1025px){blockquote.quotes__bq .wrap:first-child .wrapped:before{width:2.5rem;height:2.5rem}}blockquote.quotes__bq .wrap:last-child .wrapped:after{background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYiIGhlaWdodD0iNjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTc2IDIwLjU4YzAtMTAuMTE4LTMuNzY2LTE2LjU1LTExLjI5Ny0xOS4yOTRDNjIuNjQ5LjQzIDYwLjQyMyAwIDU4LjAyNyAwYy02Ljg0NyAwLTExLjgxIDMuMjU5LTE0Ljg5MiA5Ljc3Ni0xLjE5OCAyLjQwMS0xLjc5NyA0Ljk3NC0xLjc5NyA3LjcxOCAwIDcuMzc1IDMuMzM4IDEyLjYwNiAxMC4wMTMgMTUuNjkzIDEuMzcuNTE0IDIuNjU0Ljk0MyAzLjg1MiAxLjI4NiA0LjEwOCAxLjIgNi4yNDcgMy4yNTkgNi40MTkgNi4xNzQtLjE3MiA1LjE0NS0zLjMzOCAxMC45NzctOS41IDE3LjQ5NEw1Ny4yNTcgNjJjMTAuMjctMTAuODA1IDE2LjM0Ny0yMi42MzkgMTguMjMtMzUuNTAyLjM0Mi0yLjA1OC41MTMtNC4wMy41MTMtNS45MTd6bS00MS4zMzggMGMwLTEwLjExOC0zLjc2Ni0xNi41NS0xMS4yOTctMTkuMjk0QzIxLjMxLjQzIDE5LjA4NSAwIDE2LjY4OSAwIDkuODQyIDAgNC44OCAzLjI1OSAxLjc5NyA5Ljc3Ni42IDEyLjE3NyAwIDE0Ljc1IDAgMTcuNDk0IDAgMjQuODY5IDMuMzM4IDMwLjEgMTAuMDE0IDMzLjE4N2MxLjM2OS41MTQgMi42NTMuOTQzIDMuODUgMS4yODYgNC4xMDkgMS4yIDYuMjQ5IDMuMjU5IDYuNDIgNi4xNzQtLjE3MSA1LjE0NS0zLjMzOCAxMC45NzctOS41IDE3LjQ5NEwxNS45MTkgNjJjMTAuMjctMTAuODA1IDE2LjM0Ny0yMi42MzkgMTguMjMtMzUuNTAyLjM0Mi0yLjA1OC41MTMtNC4wMy41MTMtNS45MTd6IiBmaWxsPSIjOEMwMDAwIi8+PC9zdmc+");background-repeat:no-repeat;background-size:contain;content:"";position:absolute;width:1.5rem;height:1.5rem;top:0;right:-2rem}@media only screen and (min-width:1025px){blockquote.quotes__bq .wrap:last-child .wrapped:after{right:2.5rem;width:2.5rem}}.quotes__who{margin:3rem 0;position:relative}@media only screen and (min-width:1025px){.quotes__who{margin:3rem 0 0 8rem}}.quotes__who span{display:block;font-size:1.8rem;line-height:1.2;position:relative}.quotes__who span .wrapped{will-change:transform}.quotes__who .wrap{text-indent:3.6rem}.quote-flag{height:2.3rem;left:0;position:absolute;top:0;width:3rem}.quote-flag,.quote-flag svg{border-radius:50%;-o-object-fit:cover;object-fit:cover;overflow:hidden}.quote-flag svg{height:100%;width:100%;will-change:transform}.quotes__each:not(:first-child){position:absolute;top:0}.quotes__nav{display:flex;justify-content:flex-end}@media only screen and (min-width:1025px){.quotes__nav{justify-content:flex-start;margin:0;transform:translate(-37rem,-24.4rem)}}.quotes__nav__each{position:relative;display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem}.quotes .wrap{overflow:hidden}.quotes__nav__counter{margin:0 2rem;font-size:1.2rem}.static{opacity:.5;margin:0 0 0 .6rem}button.quotes__nav__prev{transform:rotate(-180deg)}.quotes .btn-arrow__svg{border:1px solid #aaa}button.btn-arrow{display:flex;justify-content:center;align-items:center;padding:0;margin:0}.btn-arrow{position:relative;overflow:hidden;cursor:pointer}.btn-arrow__text{color:#000;margin-right:15px;font-size:16px;font-family:"ev-light",serif;font-family:var(--serif);position:relative}.btn-arrow__svg{display:flex;justify-content:center;align-items:center;width:45px;height:45px;border-radius:50%;position:relative;border:1px solid #8c0000;border:1px solid var(--color)}.btn-arrow__svg svg{width:15px}.btn-arrow__svg .arrow-hover{position:absolute}.btn-arrow__svg .circle-svg,.btn-arrow__svg .circle-svg-arrow{position:absolute;width:100%!important}.btn-arrow__svg .circle-svg-arrow{transition:transform .6s cubic-bezier(.79,-.02,0,1)}.buttons__each:before{align-items:center;border-radius:50%;content:"bh." counter(hovers);display:flex;font-size:.8rem;height:3rem;justify-content:center;left:1.3rem;opacity:.5;position:absolute;top:1.3rem;width:3rem;text-transform:uppercase}.clients-abt{counter-reset:clients;overflow:hidden}@media only screen and (min-width:1025px){.clients-abt{margin-top:4vw}}.clients-abt__indic span{font-size:12px;padding:15px 0}@media only screen and (min-width:1025px){.clients-abt__indic span{font-size:1vw;padding:1.4vw 0}}.clients-abt__marquee:hover span{color:#dbd6c9;color:var(--soft)}.clients-abt__marquee:hover .ctn-marquee{background:#001446;background:var(--dark)}.clients-abt__marquee .ctn-marquee{cursor:default;display:flex;font-size:60px;line-height:68px;padding:12px 0;transition:background-color .25s ease-out;width:-webkit-max-content;width:-moz-max-content;width:max-content;will-change:transform}@media only screen and (min-width:1025px){.clients-abt__marquee .ctn-marquee{font-size:11.2rem;padding:6rem 0}}.clients-abt__marquee .ctn-marquee span{font-family:"a2g",monospace,sans-serif;font-family:var(--title);counter-increment:works;flex-shrink:0;margin:0 14.1px;padding-left:21px;position:relative;transition:color .25s ease-out;font-weight:400}@media only screen and (min-width:1025px){.clients-abt__marquee .ctn-marquee span{margin:0 -.4rem;padding-left:7.5rem}}.clients-abt__marquee .ctn-marquee span:before{font-family:"ev-light",sans-serif;font-family:var(--sans);bottom:-2.7rem;content:attr(data-index);font-size:1.3rem;left:0;padding-bottom:0;position:absolute}@media only screen and (min-width:1025px){.clients-abt__marquee .ctn-marquee span:before{bottom:-5.7rem;font-size:1.3rem;left:4.8rem}}.mq-bottom,.mq-top{border-top:1px solid #001446;border-top:1px solid var(--dark)}.mq-bottom{border-bottom:1px solid #001446;border-bottom:1px solid var(--dark)}section.section-display{height:76rem;overflow:hidden;padding:2rem 4.18vw;padding:var(--gapSections) var(--gapMainBorder);width:96.42vw;width:calc(100.6vw - var(--gapMainBorder))}@media only screen and (min-width:1025px){section.section-display{border:none;height:110rem;margin:0;padding:0}}.section-display__hold{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;position:relative;width:100%}@media only screen and (min-width:1025px){.section-display__hold{background:#e2ded4;background:var(--bgHolder);border-radius:1.2rem;border-radius:var(--borderRadius);margin:0 0 0 2.7rem;margin:0 0 0 var(--gap);overflow:hidden;width:calc(100vw - 5.4rem);width:calc(100vw - var(--gap)*2)}}.section-display__imgs{align-items:center;display:flex;height:100%;justify-content:center;position:absolute;width:100%;z-index:-1}@media only screen and (min-width:1025px){.section-display__imgs{margin:15rem 0 0;z-index:auto}}@media only screen and (min-width:1025px){.is-safari .section-display__imgs{margin:4rem 0 0}}.section-display__imgs li.each__img{height:53vh;position:absolute;width:27rem;border-radius:.8rem;border-radius:var(--borderSingle);overflow:hidden}.section-display__imgs li.each__img:first-child{height:16vh;left:2rem;top:2rem;width:15rem}@media only screen and (min-width:1025px){.section-display__imgs li.each__img:first-child{height:25vh;left:4rem;top:15rem;width:23rem}}.section-display__imgs li.each__img:nth-child(2){height:22vh;right:0;top:0;width:12rem}@media only screen and (min-width:1025px){.section-display__imgs li.each__img:nth-child(2){height:35vh;right:57rem;top:0;width:33rem}}.section-display__imgs li.each__img:nth-child(3){height:18vh;right:31rem;top:20rem;width:12rem}@media only screen and (min-width:580px)and (max-width:1024px){.section-display__imgs li.each__img:nth-child(3){right:48rem}}@media only screen and (min-width:1025px){.section-display__imgs li.each__img:nth-child(3){height:18vh;right:20rem;top:20rem;width:17rem}}.section-display__imgs li.each__img:nth-child(4){height:17vh;left:2rem;top:55rem;width:11rem}@media only screen and (min-width:1025px){.section-display__imgs li.each__img:nth-child(4){height:24rem;left:7rem;top:52rem;width:31rem}}.section-display__imgs li.each__img:nth-child(5){height:19vh;right:3rem;top:57rem;width:9rem}@media only screen and (min-width:1025px){.section-display__imgs li.each__img:nth-child(5){height:30vh;right:5rem;top:39rem;width:20rem}}.section-display__imgs li.each__img:nth-child(6){height:39vh;left:78rem;top:58rem;width:35rem}@media only screen and (min-width:1025px){.section-display__imgs li.each__img:nth-child(6){height:33vh;left:80rem;top:70rem;width:35rem}}@media only screen and (max-width:1024px){.section-display__imgs li.each__img:nth-child(6){display:none}}@media only screen and (min-width:1025px){.section-display__content{margin:1rem 0 0}}.section-display__content h1{text-align:center;line-height:130%;font-size:3rem;width:27rem}@media only screen and (min-width:1025px){.section-display__content h1{font-size:6rem;width:55rem}}.section-display__content p{padding:2rem 0;width:29rem}@media only screen and (min-width:1025px){.section-display__content p{width:49rem;padding:2rem 0}}.section-display__content a{margin:0}@media only screen and (min-width:580px)and (max-width:1024px){.expertise__hold{padding:3rem 13rem}}@media only screen and (min-width:1025px){.expertise__hold{align-items:flex-start;background:none;justify-content:space-between;padding:0}}.expertise__title__h1{margin:0 0 7rem;text-align:center;width:83%}@media only screen and (min-width:1025px){.expertise__title__h1{text-align:left}}@media only screen and (min-width:1025px){.expertise__title{align-items:flex-start;justify-content:space-between;padding:5rem 8rem;width:65%}}.expertise__title__h1 h1{line-height:125%}@media only screen and (min-width:1025px){.expertise__title__h1 h1{font-size:6.4rem;width:56%}}@media only screen and (min-width:1025px){.expertise__parags{border-bottom:1px solid rgba(0,20,70,.1);border-bottom:1px solid var(--lineColor);border-top:1px solid rgba(0,20,70,.1);border-top:1px solid var(--lineColor);flex-direction:row;justify-content:space-around}}ul.expertise__parags__list{position:relative}@media only screen and (min-width:1025px){ul.expertise__parags__list{border-right:1px solid rgba(0,20,70,.1);border-right:1px solid var(--lineColor);padding:2rem 0;width:65%}}li.expertise__parag__each{text-align:center}@media only screen and (min-width:1025px){li.expertise__parag__each{padding:2rem 2rem 2rem 0;text-align:left}}li.expertise__parag__each:not(:first-child){position:absolute;top:0;opacity:0}@media only screen and (min-width:1025px){.expertise__parags .primary-btn{margin:0}}@media only screen and (min-width:1025px){.expertise__svg,.expertise__title{background:#e2ded4;background:var(--bgHolder);border-radius:1.2rem;border-radius:var(--borderRadius);height:92vh;margin:0}}.expertise__svg{margin:3rem 0 0}@media only screen and (min-width:1025px){.expertise__svg{justify-content:flex-start;margin:0 0 0 2rem;margin:0 0 0 var(--gapSections);padding:10vh 0 0;width:35%}}.expertise__svg svg{width:97%;overflow:visible}@media only screen and (min-width:1025px){.expertise__svg svg{width:64%}}svg#diag-exp circle{stroke-width:2px}.expertise__svg rect{opacity:.05}@media only screen and (min-width:1025px){.expertise__svg rect{cursor:pointer;z-index:2}}@media only screen and (min-width:900px)and (max-width:1180px)and (min-height:700px){.expertise__svg text{font-size:.9rem}}@media only screen and (min-width:1800px){.expertise__svg text{font-size:1.1rem}}text.text-tech{transform:matrix(1,0,0,1,416,399.273)}.diag-circs path{stroke-width:1;stroke:#001446;stroke:var(--dark)}.expertise__svg__line-btn__line{background:#001446;background:var(--dark);height:45vh;width:1px}.expertise__svg__line-btn__line:before{content:"";background:#001446;background:var(--dark);border-radius:50%;height:.4rem;left:0;position:absolute;top:0;transform:translateX(-40%);width:.4rem}.expertise__svg__line-btn{margin:-9.2rem}.expertise__svg__line-btn__btn{border-radius:.6rem;border:1px solid #001446;border:1px solid var(--dark)}.expertise__svg__line-btn__btn span{font-size:1rem;padding:.8rem 2rem}@media only screen and (min-width:1025px){.title-animations~.descriptions .descriptions__hold{background:none}}section.anima-interac{overflow:hidden;width:100vw}@media only screen and (min-width:1025px){section.anima-interac{margin:-2rem 0 10rem}}.anima-interac__arc{margin:-8.4rem 0 0;position:absolute}@media only screen and (min-width:1025px){.anima-interac__arc{margin:3rem 0 0}}.anima-interac__arc__hold{overflow:hidden;width:100vw}.anima-interac__bullet{display:flex;justify-content:center;align-items:center;border-radius:50%;cursor:pointer;height:3.5rem;left:0;position:absolute;top:0;width:3.5rem}@media only screen and (min-width:1025px){.anima-interac__bullet{height:3rem;width:3rem}}.anima-interac__bullet:hover .bullet-anima{transform:scale(1);border:3px solid #8c0000;border:3px solid var(--color)}.bullet-anima{background:#dbd6c9;background:var(--soft);border-radius:50%;border:3px solid #001446;border:3px solid var(--dark);height:100%;transform:scale(.325);transition:transform .65s cubic-bezier(0,0,.14,.98),border .25s ease-out;width:100%}.anima-interac__svgs{background:#e2ded4;background:var(--bgHolder);border-radius:1.2rem;border-radius:var(--borderRadius);height:16rem;padding:4.5rem;position:relative;width:16rem;z-index:1}@media only screen and (min-width:1025px){.anima-interac__svgs{height:36rem;padding:11rem;width:36rem}}#attention-svg line,#immersive-svg circle,#immersive-svg path{stroke-width:3px;stroke:#001446;stroke:var(--dark)}.anima-interac__svgs__counter{font-size:1.2rem;position:absolute;right:-5.3rem;top:0}ul.anima-interac__svgs__list{height:100%;position:relative;width:100%}li.each-svg{display:flex;justify-content:center;align-items:center;height:100%;position:absolute;width:100%}.each-svg svg{overflow:visible}ul.anima-interac__texts{margin:4rem 0 0;position:relative}.anima-interac__texts li{text-align:center;width:77%}@media only screen and (min-width:580px)and (max-width:1024px){.anima-interac__texts li{width:50%}}@media only screen and (min-width:1025px){.anima-interac__texts li{width:37rem}}.anima-interac__texts li span.t-title{text-transform:uppercase;margin:0 0 1rem;overflow:hidden;line-height:125%}@media only screen and (min-width:1025px){.anima-interac__texts li span.t-title{font-size:2.7rem;margin:0 0 2rem}}.anima-interac__texts li+li{position:absolute;top:0}.anima-interac__btn a.primary-btn{margin:3rem 0 0}.slider-wheel{position:relative}@media only screen and (min-width:1025px){.slider-wheel{margin:9rem 0 20rem;min-height:63rem}}.wheel{position:relative}@media only screen and (min-width:1025px){.wheel{height:75rem;width:107.5vw;margin:0 0 0 -3.75vw}}.wheel__card{cursor:pointer;left:0;padding:5rem;position:absolute;top:0;width:26rem}.wheel__card img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%;border-radius:.9rem}.wheel__texts{bottom:-9rem;position:absolute;width:74rem}.wheel__texts h1{font-size:8rem;line-height:125%;margin:0 0 3rem}.wheel__texts p{font-size:2.4rem;line-height:120%}.wheel__subt{left:17.2rem;top:3rem}.wheel__subt li{font-size:1.3rem}@media only screen and (min-width:1025px){section.health{height:174.938rem!important;margin:0!important;max-height:174.938rem!important;padding:2rem 0!important}}@media only screen and (min-width:1025px){.health__hold{display:grid;grid-template-columns:83rem auto;grid-gap:2rem;grid-gap:var(--gapSections)}}.health__main:before{background:#0cb966;border-radius:50%;content:"";height:1rem;left:2rem;position:absolute;top:1.6rem;width:1rem}@media only screen and (min-width:1025px){.health__main:before{height:2rem;left:2.7rem;top:2.5rem;width:2rem}}.health-pinning .health__main:before{-webkit-animation:FlashStatus 1.5s infinite;animation:FlashStatus 1.5s infinite;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes FlashStatus{0%{opacity:0;transform:scale(.6)}to{transform:1;transform:scale(1)}}@keyframes FlashStatus{0%{opacity:0;transform:scale(.6)}to{transform:1;transform:scale(1)}}.health__main{margin:0 0 6rem}@media only screen and (min-width:1025px){.health__main{height:84vh;max-height:84vh!important;align-self:start}}.health__main h1{font-size:10rem;margin:6rem 0 1.4rem}@media only screen and (min-width:1025px){.health__main h1{font-size:20rem;margin:7rem 0 4.4rem}}.health__main .subt{font-size:2.6rem;margin:0 0 3rem}@media only screen and (min-width:1025px){.health__main .subt{font-size:4rem;margin:0 0 1rem}}.health__main p{width:90%}@media only screen and (min-width:1025px){.health__main p{width:65%}}@media only screen and (min-width:1025px){ul.health__stats{align-self:self-start}}li.health__stats__each{display:flex;justify-content:space-between;margin:1rem 0 0;margin:calc(var(--gapSections)/2) 0 0}@media only screen and (min-width:1025px){li.health__stats__each{margin:0;padding:4.2rem 2.6rem}}@media only screen and (min-width:1025px){li.health__stats__each+li.health__stats__each{margin:2rem 0 0;margin:var(--gapSections) 0 0}}.health__stats .average{font-size:1.5rem;line-height:1.7rem;max-width:58%;position:relative;text-indent:1.4rem}.numbs{align-items:self-end;display:flex;margin:4rem 0 0}@media only screen and (min-width:1025px){.numbs{cursor:pointer;margin:10rem 0 0}}.health__stats .numb{font-size:3rem;margin:0 .5rem 0 0}@media only screen and (min-width:1025px){.health__stats .numb{font-size:4rem}}.health__stats .average:before{background:#001446;background:var(--dark);border-radius:50%;content:"";height:.5rem;left:0;position:absolute;top:.4rem;width:.5rem}.health__stats .per{font-size:1.2rem}.health__instruct{bottom:-5.6rem;left:2.3rem}@media only screen and (min-width:1025px){.health__instruct{bottom:auto;left:auto;margin:2rem 0 0 1.6rem;position:relative}}p.click-here{font-size:1.2rem;width:100%}@media only screen and (min-width:1025px){p.click-here{justify-content:flex-start;transition:color .2s ease-out}p.click-here:hover,p.click-here:hover span{color:#8c0000;color:var(--color)}}.health__instruct p:before{position:absolute;content:"";width:.4rem;height:.4rem;background:#001446;background:var(--dark);border-radius:50%;left:-1.5rem}.health__instruct p.click-here span{display:inline-block;text-decoration:underline;transition:color .2s ease-out}.manso{margin-top:10.4rem;padding:2rem 4.18vw;padding:var(--gapSections) var(--gapMainBorder)}@media only screen and (min-width:1025px){.manso{margin:5rem 0 0}}.manso__text{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:0 0 0 17rem;position:relative;transform:translateX(-50%);width:24rem}@media only screen and (min-width:580px)and (max-width:1024px){.manso__text{margin:0 0 0 50vw}}@media only screen and (min-width:1025px){.manso__text{margin:5rem 0 0 50vw;position:absolute;width:50rem}}.manso__text h1{line-height:125%;text-align:center;color:#8c0000;color:var(--color)}@media only screen and (min-width:1025px){.manso__text h1{font-size:6rem}}@media only screen and (min-width:1025px){.manso__text .rich-t.subt-p{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center}}.manso__text p{text-align:center;margin:1rem 0 0}@media only screen and (min-width:1025px){.manso__text p{margin:2rem 0 0;width:72%}}.manso__imgs{display:grid;grid-template-columns:12.8rem auto 12.7rem;margin:-1rem 0 0;overflow:hidden;width:100%}@media only screen and (min-width:1025px){.manso__imgs{grid-template-columns:54.1rem auto 48.1rem;margin:0;padding:10rem 0 0}}.manso__imgs__each{border-radius:.8rem;border-radius:var(--borderSingle);overflow:hidden}.manso__text .title-serif{font-size:4rem;line-height:93%;width:21.5rem}@media only screen and (min-width:1025px){.manso__text .title-serif{font-size:84px;line-height:7.8rem;width:40rem}}.manso__imgs__col1{display:grid;grid-gap:.67rem;grid-template-columns:1fr 1fr;grid-template-rows:13.2rem 8.8rem;margin-top:7.6rem}@media only screen and (min-width:1025px){.manso__imgs__col1{grid-gap:2.5rem;grid-template-rows:49.1rem 32.8rem;margin-top:29.6rem}}.manso__imgs__col1 .img-manso0,.manso__imgs__col1 .img-manso2{margin-left:-5rem;width:calc(100% + 5rem)}.manso__imgs__col1 .img-manso2{grid-column:1/-1}.manso__imgs__col1 .img-manso1{align-self:end;height:8.7rem}@media only screen and (min-width:1025px){.manso__imgs__col1 .img-manso1{height:32.4rem}}.manso__imgs__col2{padding:0 .67rem;margin-top:14.2rem}@media only screen and (min-width:1025px){.manso__imgs__col2{margin-top:54.2rem;padding:0 2.5rem}}.manso__imgs__col2 .img-manso0{height:46.7rem}@media only screen and (max-width:1024px){.manso__imgs__col2 .img-manso0{height:12.5rem}}@media only screen and (min-width:580px)and (max-width:1024px){.manso__imgs__col2 .img-manso0{height:12.5rem}}.manso__imgs__col3{display:grid;grid-gap:.67rem;grid-template-columns:1.5fr 1fr;grid-template-rows:10.5rem 7.2rem 8.3rem}@media only screen and (min-width:1025px){.manso__imgs__col3{grid-template-rows:39rem 27.1rem 38rem;grid-gap:2.5rem}}.manso__imgs__col3 .img-manso0{align-self:end;grid-column:1/1;grid-row:2/3;height:9.4rem}@media only screen and (min-width:1025px){.manso__imgs__col3 .img-manso0{height:35rem}}.manso__imgs__col3 .img-manso1{grid-column:2/3;grid-row:1/2;width:125%}.manso__imgs__col3 .img-manso2{grid-column:2/3;grid-row:2/3;width:125%}.manso__imgs__col3 .img-manso3{grid-column:1/-1}@media only screen and (min-width:1025px){section.cult{margin:0 0 10rem}}ul.cult__list{display:flex;flex-wrap:wrap;width:86vw;position:relative;z-index:1}@media only screen and (min-width:1025px){ul.cult__list{width:70vw}ul.cult__list:hover span,ul.cult__list:hover svg{opacity:.1}}li.cult__list__each{align-items:center;display:flex;justify-content:center;margin:.4rem 0 0}@media only screen and (min-width:1025px){li.cult__list__each{margin:1.6rem 0 0;cursor:default}}li.cult__list__each span{font-size:3.4rem;line-height:120%;text-transform:uppercase}@media only screen and (min-width:1025px){li.cult__list__each span{line-height:100%;font-size:7rem;transition:opacity .35s ease-out}}.cult__list__each svg{margin:-.4rem .3rem 0;width:1rem}@media only screen and (min-width:1025px){.cult__list__each svg{margin:-.4rem .5rem 0;transition:opacity .35s ease-out;width:2rem}}li.cult__list__each:last-child svg{opacity:0}.cult__list__each picture{display:none}@media only screen and (min-width:1025px){.cult__list__each picture{border-radius:.8rem;border-radius:var(--borderSingle);display:block;height:38rem;opacity:0;overflow:hidden;position:absolute;right:0;top:0;transform:translate(35.2rem,17.4rem);width:30rem;z-index:-1}}.cult-active{z-index:1!important}.cult-active picture,.cult-active span.t-title{opacity:1!important}@media only screen and (min-width:1025px){.pillars__hold{padding-bottom:10rem}}.pillars__title{text-align:center}.pillars__title h1{font-size:4.6rem}@media only screen and (min-width:1025px){.pillars__title h1{font-size:7rem}}.pillars__descr{margin:5rem 0 0}@media only screen and (min-width:1025px){.pillars__descr{align-items:flex-start;width:84rem}}.pillars__descr span{font-size:2.6rem;margin:0 0 1rem}@media only screen and (min-width:1025px){.pillars__descr span{margin:0 15rem 0 0}}@media only screen and (min-width:1025px){.pillars__descr p{font-size:2.4rem;line-height:120%}}ul.pillars__circles{--size:30.5rem;display:flex;height:var(--size);justify-content:center;margin:-6.4rem 0 0;margin:calc(var(--size)*-0.4) 0 6.4rem 50%;overflow:hidden;transform:translateX(-50%);width:var(--size)}@media only screen and (min-width:1025px){ul.pillars__circles{--size:105vh}}.pillars__indic{display:none}@media only screen and (min-width:1025px){.pillars__indic{font-size:1.2rem}}li.pillars__circles__each{background:#001446;background:var(--dark);border-radius:50%;height:var(--size);margin-top:calc(var(--size)/2);opacity:.125;position:absolute;width:var(--size)}li.pillars__circles__each:first-child{opacity:1;transform:scale(.2)}li.pillars__circles__each:nth-child(2){transform:scale(.4)}li.pillars__circles__each:nth-child(3){transform:scale(.6)}li.pillars__circles__each:nth-child(4){transform:scale(.8)}ul.pillars__items{border-top:1px solid #001446;border-top:1px solid var(--dark);margin:-6.4rem 0 0}@media only screen and (min-width:1025px){ul.pillars__items{padding:7rem 0 0}}li.pillars__items__each{margin:4rem 0 0}@media only screen and (min-width:1025px){li.pillars__items__each{margin:0}}@media only screen and (min-width:1025px){li.pillars__items__each+li.pillars__items__each{margin:0 0 0 5rem}}.pillars__items__each h1{font-size:2.2rem;margin:0 0 .5rem;position:relative;text-indent:2rem}@media only screen and (min-width:1800px){.pillars__items__each h1{font-size:1.6rem;text-indent:1.8rem}}@media only screen and (min-width:1800px){li.pillars__items__each p{font-size:1.2rem;line-height:1.3}}.pillars__items__each h1:before{content:"0" attr(data-index) ".";font-size:1rem;left:-1.9rem;position:absolute;top:.2rem}.pillars__indic{align-items:center;background:#fff;border-radius:50%;bottom:5vh;display:flex;height:1.8rem;justify-content:center;position:absolute;width:1.8rem;z-index:1}.pillars__indic4{bottom:46.5vh}.pillars__indic3{bottom:35.8vh}.pillars__indic2{bottom:25.4vh}.pillars__indic1{bottom:15vh}@media only screen and (min-width:1025px){.title-music{margin:0!important}}@media only screen and (min-width:1025px){.music__hold{display:grid;grid-template-columns:57rem auto;grid-gap:2rem;grid-gap:var(--gapSections)}}.music__title h1{line-height:125%;margin:0 0 2rem;width:85%}.music__title p{width:90%}@media only screen and (min-width:1025px){.music__title p{width:75%}}.music__title{margin:0 0 1rem;padding:3rem 2rem;padding:var(--gapHolder)}@media only screen and (min-width:1025px){.music__title{margin:0;padding-bottom:14rem}}ul.music__group{display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr;text-align:center}@media only screen and (min-width:1025px){ul.music__group{grid-gap:2rem;grid-template-columns:repeat(3,1fr)}}li.music__each{display:block}.music__each__hold{align-items:flex-start;background:#e2ded4;background:var(--bgHolder);border-radius:.8rem;border-radius:var(--borderSingle);display:flex;flex-direction:column;justify-content:center;overflow:hidden;padding:1.5rem 1rem;padding:1.5rem calc(var(--gapSections)/2)}@media only screen and (min-width:1025px){.music__each__hold{padding:2rem;padding:calc(var(--gapSections))}}a.music__group__img{border-radius:.4rem;border-radius:calc(var(--borderSingle)/2);height:13.3rem;width:13.3rem;overflow:hidden}@media only screen and (min-width:580px)and (max-width:1024px){a.music__group__img{width:26.4rem}}@media only screen and (min-width:1025px){a.music__group__img{height:19.3rem;width:19.3rem}}a.music__group__img span{color:#fff;color:var(--white);font-size:2.3rem;letter-spacing:.1rem;text-transform:uppercase}@media only screen and (min-width:1025px){a.music__group__img span{font-size:3.3rem}}.music__each img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.music__each h1{font-size:1.4rem;margin:1.4rem 0 0}a.music__group__title{margin:1rem 0 0}.music__each p{font-size:1.2rem}.music__group__follow{display:inline-block;align-self:start;width:auto;justify-self:center;transition:color .35s ease-out}.music__group__follow:hover{color:#8c0000;color:var(--color)}.main-article section,.main-project section{margin:2rem 0}@media only screen and (min-width:1025px){.main-article section,.main-project section{margin:5.2rem 0}}header.header-article,header.header-project{padding:0;-webkit-clip-path:inset(0 0 15rem 0);clip-path:inset(0 0 15rem 0)}@media only screen and (max-width:1024px){header.header-article,header.header-project{height:100vh;-webkit-clip-path:inset(0 0 15rem 0);clip-path:inset(0 0 15rem 0)}}.header-project__img{will-change:transform;background:#000}.header-article__img img,.header-project__img img{height:auto;min-height:31.9rem;-o-object-fit:cover;object-fit:cover;width:100vw;height:100vh;will-change:transform}@media only screen and (min-width:1025px){.header-article__img img,.header-project__img img{-webkit-clip-path:inset(0 0 12rem 0);clip-path:inset(0 0 12rem 0)}}@media only screen and (min-width:1025px){main.main.main-project{margin:-12rem 0 0}}.article main.main.main-article{margin:-13rem 0 0}@media only screen and (min-width:1025px){.article main.main.main-article{margin:-10.1rem 0 0}}section.infos-proj{margin:-13rem 0 0;padding:0 4.18vw;padding:0 var(--gapMainBorder);position:relative}@media only screen and (min-width:1025px){section.infos-proj{margin:-13rem 0 0}}.infos-proj:before{content:"";background:#dbd6c9;background:var(--soft);border-top-left-radius:2rem 2rem;border-top-right-radius:2rem 2rem;height:4rem;position:absolute;top:0;transform:translateY(-100%);width:91.64vw;width:calc(100vw - var(--gapMainBorder)*2)}@media only screen and (min-width:1025px){.infos-proj:before{transform:translateY(-97%)}}.infos-proj__hold{margin:0 1rem;padding:0 2.7rem;padding:0 var(--gap)}@media only screen and (min-width:1025px){.infos-proj__hold{display:flex;justify-content:flex-start}}.infos-proj .proj-card__infos{margin:2rem 0}.infos-proj .proj-card__infos span{color:#001446;color:var(--dark);font-size:1.5rem;font-family:"ev-regular",sans-serif;font-family:var(--sansbold)}.infos-proj .proj-card__infos span:before{background:#001446;background:var(--dark)}@media only screen and (min-width:1025px){.infos-proj__infos{width:62rem}}.infos-proj__infos h1{margin:0 0 .8rem;font-size:3.5rem;line-height:125%}@media only screen and (min-width:1025px){.infos-proj__infos h1{font-size:5.65rem;line-height:6.4rem;margin:0 0 .9rem}}.infos-proj__infos h2{font-size:1.4rem}@media only screen and (min-width:1025px){.infos-proj__infos h2{font-size:1.6rem}}.roles{margin:3rem 0 0}@media only screen and (min-width:1025px){.roles{margin:2rem 0}}.roles__hold+.roles__hold{margin:1.9rem 0 0}@media only screen and (min-width:1025px){.roles__hold+.roles__hold{margin:.9rem 0 0}}@media only screen and (min-width:1025px){.roles__each{display:grid;grid-template-columns:22.1rem auto}}.roles__each>*{font-size:1.4rem}@media only screen and (min-width:1025px){.roles__each>*{line-height:1.9rem}}.roles__each .t-sansbold{margin:0 0 .3rem}@media only screen and (min-width:1025px){.roles__each .t-sansbold{letter-spacing:-.025rem;margin:0}}.roles__hold+.roles__hold{margin:.6rem 0 0}@media only screen and (min-width:1025px){.roles__hold+.roles__hold{margin:.7rem 0 0}}@media only screen and (min-width:1025px){.roles__each span:nth-child(2){margin:-.3rem 0 0}}.infos-proj__text{margin:3.4rem 0 0}@media only screen and (min-width:1025px){.infos-proj__text{margin:-.5rem 0 0 11.1rem;width:51.1rem}}@media only screen and (min-width:1025px){.infos-proj__text .rich-t{margin:0;letter-spacing:-.007rem}}.title-post,.when{overflow:hidden}.wrapped{will-change:transform}.infos-proj__text a{display:inline-block;float:right;font-family:"ev-regular",sans-serif;font-family:var(--sansbold);font-size:1.1rem;margin:2.2rem 0;position:relative}.infos-proj__text a:hover:after{transform:scaleX(0);transform-origin:left}.infos-proj__text a:after{content:"";background:#001446;background:var(--dark);bottom:0;height:1px;left:0;position:absolute;width:100%;transform-origin:right;transform:scaleX(1);transition:transform .8s cubic-bezier(.16,1,.3,1)}.see-more{margin:2rem 0;margin:var(--gapSections) 0;font-size:2.4rem;padding:0 0 0 4.7rem;padding:0 0 0 calc(var(--gap) + var(--gapSections));white-space:nowrap}@media only screen and (min-width:1025px){.see-more{font-size:3.5rem}}header.header-story{margin:7rem 0 0}@media only screen and (min-width:1025px){header.header-story{height:100vh;margin:0 0 5rem}}.header-story__hold{display:flex;flex-direction:column-reverse}@media only screen and (min-width:1025px){.header-story__hold{align-items:center;flex-direction:row;height:100%;justify-content:space-between}}.header-story__img{margin:0 0 3rem;height:43rem}@media only screen and (min-width:900px)and (max-width:1180px)and (min-height:700px){.header-story__img{height:30rem}}@media only screen and (min-width:1025px){.header-story__img{height:calc(100vh - 9.25rem);margin:4rem 0 0;padding:0;width:43vw}}.header-story .proj-card__infos{margin:2rem 0}@media only screen and (min-width:1025px){.header-story .proj-card__infos{display:flex;width:40vw}}@media only screen and (min-width:1025px){.header-story__texts{padding:0 6rem;width:40vw}}.header-story__texts .primary-btn{display:inline-flex}.header-story__texts h1{font-size:4.5rem;line-height:125%}@media only screen and (min-width:1025px){.header-story__texts h1{font-size:7rem}}@media only screen and (min-width:1025px){.header-story p{width:78%}}@media only screen and (min-width:1025px){.header-story .proj-card__infos{margin:1rem 0 3rem}}.header-story .proj-card__infos span{color:#001446;color:var(--dark);font-size:1.5rem;font-family:"ev-regular",sans-serif;font-family:var(--sansbold)}.header-story .proj-card__infos span:before{background:#001446;background:var(--dark)}main.main-story{margin:0}.main-story img{border-radius:.8rem;border-radius:var(--borderSingle);overflow:hidden}.slice-vimeo__hold{overflow:hidden;border-radius:1.2rem;border-radius:var(--borderRadius)}@media only screen and (min-width:1025px){.companies__hold{display:grid;grid-template-columns:57rem auto;grid-gap:2rem;grid-gap:var(--gapSections)}}.companies__title h1{line-height:125%;margin:0 0 2rem;width:60%}.companies__title p{width:90%}.companies__title{background:#e2ded4;background:var(--bgHolder);border-radius:.8rem;border-radius:var(--borderSingle);margin:0 0 1rem;padding:3rem 2rem;padding:var(--gapHolder)}@media only screen and (min-width:1025px){.companies__title{margin:0;padding-bottom:14rem}}ul.companies__group{display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr;text-align:center}@media only screen and (min-width:1025px){ul.companies__group{grid-gap:2rem;grid-template-columns:repeat(3,1fr)}}li.companies__each{align-items:center;background:#e2ded4;background:var(--bgHolder);border-radius:.8rem;border-radius:var(--borderSingle);display:flex;flex-direction:column;justify-content:center;padding:2.2rem 0}li.companies__each img{-o-object-fit:contain;object-fit:contain;width:8rem;height:4rem}.companies__each h1{font-size:1.4rem;margin:1.4rem 0 0}li.companies__each p{font-size:1.2rem}@media only screen and (min-width:1025px){.awards__hold{display:flex;justify-content:space-between}}@media only screen and (min-width:1025px){.awards__title{width:35%}}.awards__title h1{margin:4rem 0;font-size:17rem}@media only screen and (min-width:1025px){.awards__title h1{margin:0 0 4rem;font-size:25rem}}.awards__title h2{margin:0 0 .7rem}@media only screen and (min-width:1025px){.awards__title p{width:70%}}.awards__group{margin:6rem 0 0}@media only screen and (min-width:1025px){.awards__group{margin:0 0 0 7rem;width:79%}}.awards__group span.t-sansbold{margin:0 0 2rem}.awards__group .primary-btn,.awards__group .simple-btn{float:right}ul.awards__list{border-top:1px solid rgba(0,20,70,.1);border-top:1px solid var(--lineColor);display:flex;flex-direction:column-reverse}li.awards__each{padding:3rem 0;display:grid;grid-template-columns:38% 26.8% 25% 10%;border-bottom:1px solid rgba(0,20,70,.1);border-bottom:1px solid var(--lineColor)}@media only screen and (max-width:1024px){li.awards__each{grid-row-gap:.4rem;grid-template-areas:"project platform" "award award";grid-template-columns:70% 30%}}li.awards__each a{font-family:"ev-regular",sans-serif;font-family:var(--sansbold);text-transform:uppercase}@media only screen and (max-width:1024px){li.awards__each a{grid-area:project}}li.awards__each.item-regular{border:none;height:0;margin:0;overflow:hidden;padding:0}@media only screen and (max-width:1024px){.awards__each .award{grid-area:award}}@media only screen and (max-width:1024px){.awards__each .platform{grid-area:platform;text-align:right}}li.awards__each span:last-child{text-align:right}@media only screen and (min-width:1025px){section.ment{padding:0}}@media only screen and (min-width:1025px){.ment__hold{background:none;border-radius:0;display:grid;grid-column-gap:2rem;grid-column-gap:var(--gapSections);grid-template-columns:40% 60%;padding:0}}@media only screen and (min-width:1025px){.ment__hold>*{border-radius:1.2rem;border-radius:var(--borderRadius);padding:3rem 2rem;padding:var(--gapHolder);background:#e2ded4;background:var(--bgHolder)}}.ment__title h1{margin:4rem 0;font-size:4.5rem}@media only screen and (min-width:1025px){.ment__title h1{margin:0 0 4rem;font-size:7.5rem}}.ment__title h2{margin:0 0 .7rem}.ment__group{margin:6rem 0 0}@media only screen and (min-width:1025px){.ment__group{margin:0}}.ment__group span.t-sansbold{margin:0 0 2rem}ul.ment__list{border-top:1px solid rgba(0,20,70,.1);border-top:1px solid var(--lineColor);display:flex;flex-direction:column-reverse}li.ment__each{align-items:center;border-bottom:1px solid rgba(0,20,70,.1);border-bottom:1px solid var(--lineColor);display:grid;grid-template-columns:60% 35% 5%;padding:3rem 0}@media only screen and (max-width:1024px){li.ment__each{grid-row-gap:.4rem;grid-template-areas:"project project" "platform platform";grid-template-columns:70% 30%}}li.ment__each a.ment-title{font-family:"ev-regular",sans-serif;font-family:var(--sansbold);text-transform:uppercase}@media only screen and (max-width:1024px){li.ment__each a.ment-title{grid-area:project}}@media only screen and (max-width:1024px){.ment__each .platform{grid-area:platform}}li.ment__each a.btn-arrow__svg{display:none}@media only screen and (min-width:1025px){li.ment__each a.btn-arrow__svg{display:flex}}.main-expertise{counter-reset:exp}main.slices section{counter-increment:exp}.slice-exp__title{margin:0 0 4rem}.slice-exp__title h1{margin:0 0 3rem}@media only screen and (min-width:1025px){.slice-exp__title h1{margin:0 0 17rem;position:relative}}@media only screen and (min-width:1025px){.slice-exp__title h1,.slice-exp__title h1:before{align-items:center;display:flex;justify-content:center}.slice-exp__title h1:before{border-radius:50%;border:1px solid rgba(0,20,70,.1);border:1px solid var(--lineColor);color:#001446;color:var(--dark);content:counter(exp);font-family:"ev-light",sans-serif;font-family:var(--sans);font-size:1.7rem;height:4rem;position:absolute;top:6rem;width:4rem}}@media only screen and (min-width:580px)and (max-width:1024px){.slice-exp__title p{width:65vw}}@media only screen and (min-width:1025px){.slice-exp__title p{width:47rem}}@media only screen and (min-width:1025px){.slice-exp__ctt{align-items:flex-start;border-top:1px solid rgba(0,20,70,.1);border-top:1px solid var(--lineColor);display:grid;grid-gap:2rem;grid-gap:var(--gapSections);grid-template-columns:10% 50% 30%;justify-content:space-between;padding:2.7rem 0 0;padding:var(--gap) 0 0}}@media only screen and (min-width:1025px){.slice-exp__ctt__indic span{font-size:2.3rem;transform-origin:top left;transition:transform .6s cubic-bezier(0,.83,.58,1)}}@media only screen and (min-width:1025px){.slice-pinning .slice-exp__ctt__indic span{transform:scale(.85)}}@media only screen and (min-width:1025px){ul.slice-exp__ctt__group{border-left:1px solid rgba(0,20,70,.1);border-left:1px solid var(--lineColor);padding:0 0 0 2rem;padding:0 0 0 var(--gapSections)}}li.each-exp+li.each-exp{border-top:1px solid rgba(0,20,70,.1);border-top:1px solid var(--lineColor);margin:2rem 0;margin:var(--gapSections) 0}@media only screen and (min-width:1025px){li.each-exp+li.each-exp{margin:5rem 0;padding:5rem 0 0}}li.each-exp{padding:2rem 0 0;padding:var(--gapSections) 0 0}@media only screen and (min-width:1025px){li.each-exp{align-items:flex-start;margin:0 0 6rem;padding:0}}.each-exp h2{font-size:2rem;margin:0 0 .7rem}@media only screen and (min-width:1025px){.each-exp h2{margin:0 2rem;margin:0 var(--gapSections) 0;min-width:11rem}}.slice-exp__ctt__img{border-radius:.8rem;border-radius:var(--borderSingle);overflow:hidden}@media only screen and (min-width:1025px){.slice-exp__ctt__img{height:78vh}}.page-animations main.slices{margin:3.25rem 0 0}@media only screen and (min-width:1025px){.page-animations main.slices{min-height:810rem;margin:7rem 0 0}}.page-animations main.slices section+section{margin:5rem 0}@media only screen and (min-width:580px)and (max-width:1024px){.page-animations main.slices section+section{margin:2.5rem 0}}@media only screen and (min-width:1025px){.page-animations main.slices section+section{margin:12rem 0 0}}.page-animations main.slices section+section .slice-anima__hold{border-top:1px solid rgba(0,20,70,.1);border-top:1px solid var(--lineColor);padding:10rem 0 0}@media only screen and (min-width:580px)and (max-width:1024px){.page-animations main.slices section+section .slice-anima__hold{padding:5rem 0 0}}@media only screen and (min-width:1025px){.page-animations main.slices section+section .slice-anima__hold{padding:4rem 0 0}}.page-animations main.slices .slice-anima__hold:before{content:counter(exp) ".";align-items:center;border-radius:50%;border:1px solid rgba(0,20,70,.1);border:1px solid var(--lineColor);display:flex;font-size:1.3rem;height:3rem;justify-content:center;left:0;position:absolute;width:3rem}@media only screen and (min-width:1025px){.slice-anima__hold{display:flex;justify-content:space-between}}@media only screen and (min-width:1025px){.slice-anima__title{width:31rem}}.slice-anima__title h1{color:#8c0000;color:var(--color);font-family:"a2g",monospace,sans-serif;font-family:var(--title);font-size:3rem;margin:0 0 2rem;text-transform:uppercase;text-indent:4rem}@media only screen and (min-width:1025px){.slice-anima__title h1{font-size:4.5rem;line-height:125%}}.each-animation{display:flex;justify-content:center;align-items:center}ul.slice-anima__ctt__group{grid-gap:1rem;grid-gap:calc(var(--gapSections)/2)}@media only screen and (min-width:1025px){ul.slice-anima__ctt__group{width:76rem;grid-gap:2rem;grid-gap:calc(var(--gapSections))}}li.each-animation{border-radius:1.2rem;border-radius:var(--borderRadius);overflow:hidden}@media only screen and (min-width:1025px){li.each-animation{border-radius:.8rem;border-radius:var(--borderSingle)}}.each-animation video{-o-object-fit:cover;object-fit:cover;height:100%;width:100%}ul.slice-anima__ctt__group{display:grid;grid-template-columns:var(--mobile)}@media only screen and (min-width:580px)and (max-width:1024px){ul.slice-anima__ctt__group{grid-template-columns:var(--tablet)}}@media only screen and (min-width:1025px){ul.slice-anima__ctt__group{grid-template-columns:var(--desk)}}.animation-clocks video,.animation-ctas video,.animation-ctt video,.animation-hovers video{width:130%;height:130%}@media only screen and (min-width:1025px){.animation-clocks video,.animation-ctas video,.animation-ctt video,.animation-hovers video{width:115%;height:115%}}@media only screen and (min-width:1025px){.animation-drag li+li,.animation-to-case li+li{margin:4rem 0 0}.animation-clocks video,.animation-ctt video{width:130%;height:137%}}.need-help__title{display:flex;flex-direction:column;padding:3rem 2rem}@media only screen and (min-width:1025px){.need-help__title{padding:9rem 26rem}}.need-help__title h1{color:#8c0000;color:var(--color);font-size:2.7rem;line-height:125%}@media only screen and (min-width:1025px){.need-help__title h1{font-size:6rem;line-height:140%;text-align:center}}.need-help__title a{align-self:center;display:inline-flex;text-transform:uppercase}@media only screen and (min-width:1025px){.see-animas__hold{display:flex;align-items:center;justify-content:flex-end}}.see-animas a{display:inline-flex}@media only screen and (min-width:1025px){.see-animas a{margin:0 0 0 1rem}}main.main-contact{margin:3.1rem 0 0}@media only screen and (min-width:1025px){main.main-contact{margin:5.4rem 0 0}}.page-contact .section-headerlb__content{margin:3rem 0 0}@media only screen and (min-width:1025px){.page-contact .section-headerlb__content{margin:0;width:244rem}}@media only screen and (min-width:1025px){.page-contact .section-headerlb__title{margin:0 0 5rem}}@media only screen and (min-width:1025px){.section-headerlb .section-info{height:78vh;margin:0}}@media only screen and (min-width:1025px){.section-headerlb__hold{padding:5rem 4rem}}.section-headerlb__title h1{line-height:125%}.page-contact .section-headerlb__text p{text-align:center;margin:1rem 0}@media only screen and (min-width:1025px){.page-contact .section-headerlb__text p{padding:0 10rem 10rem}}ul.section-headerlb__links{margin:3rem 0 0;padding:0 1rem;width:100%}@media only screen and (min-width:1025px){ul.section-headerlb__links{margin:2rem 0 0;width:auto}}.section-headerlb__links li{display:flex;padding:.8rem 0}@media only screen and (min-width:1025px){.section-headerlb__links li{padding:1rem 0}}.section-headerlb__links span{font-size:1.1rem;width:18rem}.section-headerlb__links a{font-size:1.3rem;letter-spacing:.1rem}:root{--gap:2.7rem;--gapHolder:3rem 2rem;--gapSections:2rem;--gapMainBorder:4.18vw;--borderRadius:1.2rem;--borderSingle:0.8rem;--dark:#001446;--lineColor:rgba(0,20,70,0.1);--bgHolder:#e2ded4;--gray:#f6f6f6;--soft:#dbd6c9;--white:#fff;--color:#8c0000;--pink:#5f4541;--red:#bf2020;--title:"a2g",monospace,sans-serif;--sans:"ev-light",sans-serif;--sansbold:"ev-regular",sans-serif;--serif:"ev-light",serif;--serifbold:"ev-regular",serif}@media only screen and (min-width:580px)and (max-width:1024px){:root{--gap:4rem;--gapHolder:7rem 8rem;--gapMainBorder:1.2vw;--borderRadius:1.6rem}}@media only screen and (min-width:1025px){:root{--gap:4rem;--gapMainBorder:1.2vw;--gapHolder:7rem 8rem;--borderRadius:1.6rem}}.t-title{font-family:"a2g",monospace,sans-serif;font-family:var(--title)}.e-sans,.t-sans{font-family:"ev-light",sans-serif;font-family:var(--sans)}.e-serif,.t-serif{font-family:"ev-light",serif;font-family:var(--serif)}.e-sansbold,.t-sansbold{font-family:"ev-regular",sans-serif;font-family:var(--sansbold)}.e-serifbold,.t-serifbold{font-family:"ev-regular",serif;font-family:var(--serifbold)}header.header-success{background:#001446;background:var(--dark)}.header-success__hold{margin-top:-7vh}@media only screen and (min-width:1025px){.header-success__hold{margin-top:-18vh;padding:0 0 0 28rem}}.header-success__hold>*,.header-success__hold span{color:#fff;color:var(--white)}.header-success__hold span{display:inline}.header-success h1{line-height:125%}.header-success p{margin:1rem 0;color:hsla(0,0%,100%,.6);width:80%}@media only screen and (min-width:580px)and (max-width:1024px){.header-success p{width:56%}}@media only screen and (min-width:1025px){.header-success p{width:50%}}.counter-back{color:#fff}.header-success .primary-btn{display:inline-flex;background:#fff;background:var(--white);color:#001446;color:var(--dark);text-align:center;transition:color .2s ease-out,background-color .2s ease-out}.header-success .primary-btn:hover{background-color:#8c0000;background-color:var(--color);color:#fff;color:var(--white)}', ""]), c.exports = m
        },
        303: function(c, h, v) {
            "use strict";
            v.r(h), v.d(h, "state", (function() {
                return e
            })), v.d(h, "mutations", (function() {
                return t
            })), v.d(h, "actions", (function() {
                return z
            }));
            var m = v(14),
                e = (v(43), function() {
                    return {
                        global: {}
                    }
                }),
                t = {
                    getDashboard: function(c, h) {
                        c.data_dashboard = h
                    },
                    getGlobal: function(c, h) {
                        c.data_global = h
                    }
                },
                z = {
                    loadingGLobals: function(c) {
                        var h = this;
                        return Object(m.a)(regeneratorRuntime.mark((function v() {
                            var m, e, t;
                            return regeneratorRuntime.wrap((function(v) {
                                for (;;) switch (v.prev = v.next) {
                                    case 0:
                                        return m = c.commit, v.next = 3, h.$prismic.api.getSingle("global");
                                    case 3:
                                        return e = v.sent.data, m("getGlobal", e), v.next = 7, h.$prismic.api.getSingle("dashboard");
                                    case 7:
                                        t = v.sent.data, m("getDashboard", t);
                                    case 9:
                                    case "end":
                                        return v.stop()
                                }
                            }), v)
                        })))()
                    }
                }
        },
        304: function(c, h, v) {
            var map = {
                "./AlternateGrid/index.vue": [238, 0, 12],
                "./CallToAction/index.vue": [239, 0, 5],
                "./CardsCarousel/index.vue": [240, 0, 6],
                "./CustomerLogos/index.vue": [241, 0, 7],
                "./FaqSection/index.vue": [242, 0, 8],
                "./FeatureTestimonials/index.vue": [243, 0, 4],
                "./ImagesSlider/index.vue": [244, 0, 9],
                "./PricingTable/index.vue": [237, 0, 10],
                "./TestimonialsSlider/index.vue": [245, 0, 11],
                "./VideoHighlights/index.vue": [246, 0, 3]
            };

            function m(c) {
                if (!v.o(map, c)) return Promise.resolve().then((function() {
                    var h = new Error("Cannot find module '" + c + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }));
                var h = map[c],
                    m = h[0];
                return Promise.all(h.slice(1).map(v.e)).then((function() {
                    return v(m)
                }))
            }
            m.keys = function() {
                return Object.keys(map)
            }, m.id = 304, c.exports = m
        },
        305: function(c, h) {
            function v(c) {
                return Promise.resolve().then((function() {
                    var h = new Error("Cannot find module '" + c + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }))
            }
            v.keys = function() {
                return []
            }, v.resolve = v, c.exports = v, v.id = 305
        },
        314: function(c, h, v) {
            "use strict";
            v.r(h);
            var m = v(5),
                e = v(6),
                t = (v(27), v(21), v(34), v(11), v(2)),
                z = (v(47), v(213), v(122)),
                r = v(123),
                n = v(84),
                o = (v(52), v(51), function() {
                    function c() {
                        Object(m.a)(this, c), this.callbacks = {}, this.callbacks.base = {}
                    }
                    return Object(e.a)(c, [{
                        key: "on",
                        value: function(c, h) {
                            var v = this;
                            return void 0 === c || "" === c ? (console.warn("wrong names"), !1) : void 0 === h ? (console.warn("wrong callback"), !1) : (this.resolveNames(c).forEach((function(c) {
                                var m = v.resolveName(c);
                                v.callbacks[m.namespace] instanceof Object || (v.callbacks[m.namespace] = {}), v.callbacks[m.namespace][m.value] instanceof Array || (v.callbacks[m.namespace][m.value] = []), v.callbacks[m.namespace][m.value].push(h)
                            })), this)
                        }
                    }, {
                        key: "off",
                        value: function(c) {
                            var h = this;
                            return void 0 === c || "" === c ? (console.warn("wrong name"), !1) : (this.resolveNames(c).forEach((function(c) {
                                var v = h.resolveName(c);
                                if ("base" !== v.namespace && "" === v.value) delete h.callbacks[v.namespace];
                                else if ("base" === v.namespace)
                                    for (var m in h.callbacks) h.callbacks[m] instanceof Object && h.callbacks[m][v.value] instanceof Array && (delete h.callbacks[m][v.value], 0 === Object.keys(h.callbacks[m]).length && delete h.callbacks[m]);
                                else h.callbacks[v.namespace] instanceof Object && h.callbacks[v.namespace][v.value] instanceof Array && (delete h.callbacks[v.namespace][v.value], 0 === Object.keys(h.callbacks[v.namespace]).length && delete h.callbacks[v.namespace])
                            })), this)
                        }
                    }, {
                        key: "trigger",
                        value: function(c, h) {
                            if (void 0 === c || "" === c) return console.warn("wrong name"), !1;
                            var v = null,
                                m = null,
                                e = h instanceof Array ? h : [],
                                t = this.resolveNames(c);
                            if ("base" === (t = this.resolveName(t[0])).namespace)
                                for (var z in this.callbacks) this.callbacks[z] instanceof Object && this.callbacks[z][t.value] instanceof Array && this.callbacks[z][t.value].forEach((function(c) {
                                    m = c.apply(this, e), void 0 === v && (v = m)
                                }));
                            else if (this.callbacks[t.namespace] instanceof Object) {
                                if ("" === t.value) return console.warn("wrong name"), this;
                                this.callbacks[t.namespace][t.value].forEach((function(c) {
                                    m = c.apply(this, e), void 0 === v && (v = m)
                                }))
                            }
                            return v
                        }
                    }, {
                        key: "resolveNames",
                        value: function(c) {
                            var h = c;
                            return h = (h = (h = h.replace(/[^a-zA-Z0-9 ,/.]/g, "")).replace(/[,/]+/g, " ")).split(" ")
                        }
                    }, {
                        key: "resolveName",
                        value: function(c) {
                            var h = {},
                                v = c.split(".");
                            return h.original = c, h.value = v[0], h.namespace = "base", v.length > 1 && "" !== v[1] && (h.namespace = v[1]), h
                        }
                    }]), c
                }());

            function l(c) {
                var h = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (c) {
                        return !1
                    }
                }();
                return function() {
                    var v, m = Object(n.a)(c);
                    if (h) {
                        var e = Object(n.a)(this).constructor;
                        v = Reflect.construct(m, arguments, e)
                    } else v = m.apply(this, arguments);
                    return Object(r.a)(this, v)
                }
            }
            var d = function(c) {
                Object(z.a)(v, c);
                var h = l(v);

                function v() {
                    var c;
                    return Object(m.a)(this, v), (c = h.call(this)).width = window.innerWidth, c.height = window.innerHeight, c.pixelRatio = Math.min(window.devicePixelRatio, 2), window.addEventListener("resize", (function() {
                        c.width = window.innerWidth, c.height = window.innerHeight, c.pixelRatio = Math.min(window.devicePixelRatio, 2), c.trigger("resize")
                    })), c
                }
                return v
            }(o);

            function _(c) {
                var h = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (c) {
                        return !1
                    }
                }();
                return function() {
                    var v, m = Object(n.a)(c);
                    if (h) {
                        var e = Object(n.a)(this).constructor;
                        v = Reflect.construct(m, arguments, e)
                    } else v = m.apply(this, arguments);
                    return Object(r.a)(this, v)
                }
            }
            var f = function(c) {
                    Object(z.a)(v, c);
                    var h = _(v);

                    function v() {
                        var c;
                        return Object(m.a)(this, v), (c = h.call(this)).start = Date.now(), c.current = c.start, c.elapsed = 0, c.delta = 16, window.requestAnimationFrame((function() {
                            c.tick()
                        })), c
                    }
                    return Object(e.a)(v, [{
                        key: "tick",
                        value: function() {
                            var c = this,
                                h = Date.now();
                            this.delta = h - this.current, this.current = h, this.elapsed = this.current - this.start, this.trigger("tick"), window.requestAnimationFrame((function() {
                                c.tick()
                            }))
                        }
                    }]), v
                }(o),
                w = v(158),
                y = v.n(w),
                x = function() {
                    function c(h, v, e, t) {
                        Object(m.a)(this, c), this.app = h, this.el = v, this.container = e, this.color = t, this.graphics = new PIXI.Graphics, this.shapeBox(), this.container.addChild(this.graphics)
                    }
                    return Object(e.a)(c, [{
                        key: "shapeBox",
                        value: function() {
                            this.bounds = this.el.getBoundingClientRect();
                            var c = window.getComputedStyle(this.el),
                                h = parseInt(c.getPropertyValue("border-top-right-radius"));
                            this.graphics.beginFill(this.color, 1), this.graphics.drawRoundedRect(this.bounds.left, this.bounds.top, this.bounds.width, this.bounds.height, h), this.graphics.endFill()
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.graphics.clear(), this.shapeBox()
                        }
                    }]), c
                }(),
                M = function c(h) {
                    Object(m.a)(this, c), this.app = h, this.style = new PIXI.TextStyle({
                        fontFamily: "a2g",
                        padding: 500,
                        fontSize: .1 * this.app.sizes.width,
                        letterSpacing: 4,
                        fill: ["#8C0000"],
                        wordWrap: !1
                    })
                },
                k = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            this.app = c, this.$vw_title = document.querySelector(".intro__start__texts__title h1"), this.pixi_fontsyle = new M(this.app), this.style = this.pixi_fontsyle.style, this.pixi_vwtitle = new PIXI.Text(this.$vw_title.innerHTML, this.style), this.app.bgContainer.addChild(this.pixi_vwtitle), this.setTitle(), this.reset(), window.vw_gl_title = this
                        }
                    }, {
                        key: "setTitle",
                        value: function() {
                            this.bounds = this.$vw_title.getBoundingClientRect(), this.pixi_vwtitle.position.x = this.bounds.left, this.pixi_vwtitle.position.y = this.bounds.top + .028 * this.app.sizes.width, this.pixi_vwtitle.zIndex = 1, this.style.fontSize = parseInt(window.getComputedStyle(this.$vw_title, null).getPropertyValue("font-size")), window.innerWidth > 1024 ? this.style.letterSpacing = parseFloat(window.getComputedStyle(this.$vw_title, null).getPropertyValue("letter-spacing")) : this.style.letterSpacing = 1e-4 * window.innerWidth
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            t.a.set(this.pixi_vwtitle.position, {
                                y: this.bounds.top + .028 * this.app.sizes.width
                            }), t.a.set(this.pixi_vwtitle, {
                                alpha: 0
                            })
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.setTitle()
                        }
                    }]), c
                }()),
                C = v(29);
            t.a.registerPlugin(C.a);
            var j = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "setDraw",
                        value: function(c) {
                            this.$el = c, this.tl_draw = t.a.timeline({
                                paused: !0
                            }).fromTo(this.$el.querySelector(".rect-border"), {
                                drawSVG: "0% 0%"
                            }, {
                                duration: 1,
                                drawSVG: "0% 50%",
                                ease: "power3.out"
                            }).fromTo(this.$el.querySelector(".rect-border2"), {
                                drawSVG: "50% 50%"
                            }, {
                                duration: 1,
                                drawSVG: "50% 100%",
                                ease: "power3.out"
                            }, 0).fromTo(this.$el.querySelectorAll(".border-hovers"), {
                                opacity: 0
                            }, {
                                duration: .8,
                                opacity: 1,
                                ease: "power2.out"
                            }, 0).to(this.$el.querySelector(".rect-border"), {
                                duration: 1,
                                drawSVG: "50% 50%",
                                ease: "none"
                            }, "<50%").to(this.$el.querySelector(".rect-border2"), {
                                duration: 1,
                                drawSVG: "100% 100%",
                                ease: "none"
                            }, .35).to(this.$el.querySelectorAll(".border-hovers"), {
                                duration: .5,
                                opacity: 0,
                                ease: "power2.in"
                            }, "<50%")
                        }
                    }, {
                        key: "RepeatDraw",
                        value: function() {
                            this.tl_draw.tweenFromTo(0, this.tl_draw.totalDuration(), {
                                ease: "power1.inOut",
                                duration: 2,
                                repeat: -1
                            })
                        }
                    }]), c
                }()),
                S = v(30),
                V = (v(147), new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "setProfileName",
                        value: function() {
                            this.name = localStorage.getItem("name")
                        }
                    }, {
                        key: "setProfileVersion",
                        value: function() {
                            this.version = localStorage.getItem("version")
                        }
                    }, {
                        key: "setProfileMood",
                        value: function() {
                            this.mood = localStorage.getItem("mood")
                        }
                    }, {
                        key: "setProfileMusic",
                        value: function() {
                            this.music = localStorage.getItem("music")
                        }
                    }, {
                        key: "setProfileSetup",
                        value: function() {
                            this.setup = localStorage.getItem("setup")
                        }
                    }, {
                        key: "verifySetup",
                        value: function() {
                            this.setProfileName(), this.setProfileVersion(), this.setProfileMood(), this.setProfileMusic(), this.setProfileSetup()
                        }
                    }, {
                        key: "clearStorage",
                        value: function() {
                            for (var c = 0, h = Object.entries(localStorage); c < h.length; c++) {
                                var v = Object(S.a)(h[c], 2),
                                    m = v[0];
                                v[1];
                                "paths" != m && localStorage.removeItem(m)
                            }
                            this.setProfileName(), this.setProfileVersion(), window.location.reload()
                        }
                    }]), c
                }()));
            t.a.registerPlugin(C.a);
            var L = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function() {
                            var c = this;
                            this.body = document.querySelector("body"), this.DOM = document.querySelector(".intro__tuto"), this.tuto = {
                                progress: this.DOM.querySelector(".tuto-prog"),
                                reset: this.DOM.querySelector(".tuto-reset"),
                                colors: this.DOM.querySelector(".tuto-colors"),
                                enter: this.DOM.querySelector(".tuto-enter"),
                                done_intro: this.DOM.querySelectorAll(".done-intro")
                            }, this.tutoProgress(), this.tutoReset(), this.tutoColors(), this.tutoEnter(), t.a.set([this.DOM, ".done-intro.no-mobile"], {
                                autoAlpha: 0
                            }), this.tuto.done_intro.forEach((function(h) {
                                h.addEventListener("click", (function() {
                                    localStorage.setItem("setup", !0), c.onLeave(), V.verifySetup()
                                }))
                            }))
                        }
                    }, {
                        key: "tutoProgress",
                        value: function() {
                            var c = this;
                            this.explor_perc = this.DOM.querySelector(".intro__explore__numb.js-explore"), this.explore_svg_perc = this.DOM.querySelector(".intro__explore__svg .percent "), this.prog = {
                                n: 0
                            };
                            var h = this;
                            t.a.set(this.explore_svg_perc, {
                                drawSVG: "0% 0%"
                            }), this.tl_explore_perc = t.a.timeline({
                                paused: !0,
                                defaults: {
                                    duration: 1,
                                    ease: "none"
                                }
                            }).to(this.explore_svg_perc, {
                                duration: 2,
                                drawSVG: "100%"
                            }).to(this.prog, {
                                n: 100,
                                duration: 2,
                                onUpdate: function() {
                                    h.explor_perc.textContent = "".concat(parseInt(h.prog.n)), parseInt(h.prog.n) > 10 && (h.explore_svg_perc.style.stroke = "#fff000"), parseInt(h.prog.n) > 25 && (h.explore_svg_perc.style.stroke = "#001446"), parseInt(h.prog.n) > 85 && (h.explore_svg_perc.style.stroke = "#73adf1")
                                },
                                onComplete: function() {
                                    c.explore_svg_perc.style.stroke = "#11dd7b", h.explor_perc.classList.add("explore-done"), h.explor_perc.textContent = "DONE", c.DOM.querySelector("span.intro__explore__symbol").remove()
                                }
                            }, "<").from(".intro__explore__click", {
                                opacity: 0,
                                duration: 1.2,
                                yPercent: 200,
                                ease: "expo.out"
                            }).add((function() {
                                return c.tl_reset.play(0)
                            }), "<75%")
                        }
                    }, {
                        key: "tutoReset",
                        value: function() {
                            var c = this;
                            this.tuto_close = this.DOM.querySelector(".tuto-version__close"), this.tl_reset = t.a.timeline({
                                paused: !0,
                                onComplete: function() {
                                    return c.tl_tutocolors.play()
                                }
                            }).add((function() {
                                return c.tuto.reset.classList.remove("not-custom")
                            })).from(".tuto-reset__name, .tuto-version", {
                                y: .1 * window.innerHeight,
                                duration: 1.8,
                                ease: "expo.out",
                                stagger: .2
                            }).from(".tuto-reset__name, .tuto-version", {
                                duration: .4,
                                opacity: 0,
                                ease: "expo.inOut",
                                stagger: .2
                            }, "<").add((function() {
                                return c.tuto_close.classList.add("simula-close")
                            }), "-=.5").add((function() {
                                return c.tuto_close.classList.remove("simula-close")
                            }), "+=.6")
                        }
                    }, {
                        key: "tutoColors",
                        value: function() {
                            var c = this;
                            this.tuto_close = this.DOM.querySelector(".tuto-version__close"), this.tl_tutocolors = t.a.timeline({
                                paused: !0,
                                onComplete: function() {
                                    return c.tl_tutoenter.play()
                                }
                            }).add((function() {
                                return c.tuto.colors.classList.remove("not-custom")
                            })).from("ul.tuto-colors__ctn li", {
                                y: .05 * window.innerHeight,
                                duration: 1.8,
                                ease: "back.out",
                                stagger: .1
                            }).from("ul.tuto-colors__ctn li", {
                                duration: 1,
                                scale: 0,
                                ease: "expo.out",
                                stagger: .1
                            }, "<")
                        }
                    }, {
                        key: "tutoEnter",
                        value: function() {
                            var c = this;
                            this.tl_tutoenter = t.a.timeline({
                                paused: !0,
                                onComplete: function() {
                                    return c.body.classList.add("tuto-tl-done")
                                }
                            }).add((function() {
                                return c.tuto.enter.classList.remove("not-custom")
                            })).from(".footer__music__svg.e-flex.js-music__svg", {
                                y: .05 * window.innerHeight,
                                duration: 1.8,
                                ease: "back.out"
                            }).from(".footer__music__svg.e-flex.js-music__svg", {
                                duration: 1,
                                scale: 0,
                                ease: "expo.out"
                            }, "<").from(".listen-to", {
                                opacity: 0,
                                duration: 1.2,
                                yPercent: 200,
                                ease: "expo.out"
                            }, "<").add((function() {
                                c.body.classList.contains("has-textures") && c.tutoIsDone()
                            }))
                        }
                    }, {
                        key: "tutoIsDone",
                        value: function() {
                            t.a.timeline().to(".intro__counter", {
                                autoAlpha: 0,
                                duration: .6
                            }).to(".done-intro.no-mobile", {
                                autoAlpha: 1,
                                duration: .6
                            }, "<50%")
                        }
                    }, {
                        key: "startAnimations",
                        value: function() {
                            this.tl_explore_perc.tweenFromTo(0, this.tl_explore_perc.totalDuration(), {
                                duration: 4,
                                ease: "power1.inOut"
                            }), j.setDraw(this.DOM.querySelector(".done-intro.no-mobile")), j.RepeatDraw()
                        }
                    }, {
                        key: "onEnter",
                        value: function() {}
                    }, {
                        key: "onLeave",
                        value: function() {
                            I.onLeave()
                        }
                    }]), c
                }()),
                H = (v(79), v(80), function c(h) {
                    Object(m.a)(this, c), this.app = h, this.bgContainer = new PIXI.Container, this.bgContainer.sortableChildren = !0, this.app.app.stage.addChild(this.bgContainer)
                }),
                O = function() {
                    function c(h, v) {
                        Object(m.a)(this, c), this.app = h, this.container = v, this.hold_size = new PIXI.Graphics, this.shapeHoldSize(), this.container.addChild(this.hold_size)
                    }
                    return Object(e.a)(c, [{
                        key: "shapeHoldSize",
                        value: function() {
                            this.hold_size.clear(), this.hold_size.drawRoundedRect(0, 0, window.innerWidth, window.innerHeight, 0), this.hold_size.endFill()
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.hold_size.clear(), this.shapeHoldSize()
                        }
                    }]), c
                }(),
                E = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            this.body = document.querySelector("body"), this.app = c, this.loader = new PIXI.Loader, this.$page = document.querySelector(".page"), this.$imgs = document.querySelectorAll(".intro__gallery__each"), this.$wipe_soft = document.querySelector(".wipe-soft"), this.$bg_intro = document.querySelector(".intro-bg__bg"), this.container = new H(this.app), this.bgContainerGallery = this.container.bgContainer, this.holdSize = new O(this.app, this.bgContainerGallery), this.bgContainerGallery.filters = [this.app.shockFilter], this.pixi_textures = [], this.arr_imgs = [], this.time = 2.375, this.anima_filter = {
                                n: .22 * this.app.sizes.width
                            }, window.vw_gl_gallery = this, this.animating = !1
                        }
                    }, {
                        key: "createTimeline",
                        value: function() {
                            var c = this,
                                h = this.pixi_textures.filter((function(c, h) {
                                    return 9 !== h
                                }));
                            this.move = {
                                gallery: .3,
                                width: this.app.sizes.width + 20,
                                height: this.app.sizes.height + 80,
                                x: -10,
                                y: -40
                            }, this.app.sizes.width < 1025 && (this.move.gallery = .8, this.move.width = 1920 / 1080 * this.app.sizes.height, this.move.x = -1 * (this.move.width / 2 - this.app.sizes.width / 2)), this.anima_filter.n = .22 * this.app.sizes.width, this.app.shockFilter.amplitude = .22 * this.app.sizes.width, this.pixi_textures[9].zIndex = 30, this.tl = t.a.timeline({
                                defaults: {
                                    ease: "expo.inOut",
                                    duration: 5
                                }
                            }).timeScale(1.25).add((function() {
                                c.body.classList.add("is-gallery-animating"), c.animating = !0
                            }), 0).to(this.$bg_intro, {
                                duration: .5 * this.time,
                                opacity: 0
                            }), this.app.sizes.width > 1024 && this.tl.fromTo([this.pixi_textures[0].position, this.pixi_textures[1].position, this.pixi_textures[2].position, this.pixi_textures[3].position, this.pixi_textures[4].position, this.pixi_textures[5].position], {
                                y: "+=".concat(window.innerHeight - .087 * window.innerWidth)
                            }, {
                                y: "-=".concat(window.innerHeight + .4 * window.innerWidth)
                            }, 0).fromTo([this.pixi_textures[12].position, this.pixi_textures[13].position, this.pixi_textures[14].position, this.pixi_textures[15].position, this.pixi_textures[16].position, this.pixi_textures[17].position], {
                                y: "+=".concat(window.innerHeight - .087 * window.innerWidth)
                            }, {
                                y: "-=".concat(window.innerHeight + .15 * window.innerWidth)
                            }, 0), this.tl.fromTo([this.pixi_textures[6].position, this.pixi_textures[7].position, this.pixi_textures[8].position, this.pixi_textures[9].position, this.pixi_textures[10].position, this.pixi_textures[11].position], {
                                y: "+=".concat(window.innerHeight - .087 * window.innerWidth)
                            }, {
                                y: "-=".concat(window.innerHeight + window.innerWidth * this.move.gallery)
                            }, 0).to(this.app.shockFilter, {
                                delay: 1,
                                duration: 4,
                                amplitude: 0,
                                onComplete: function() {
                                    c.bgContainerGallery.filters = null, c.bgContainerGallery.zIndex = -1, c.app.shockFilter.amplitude = .22 * c.app.sizes.width
                                }
                            }, 0).to(this.pixi_textures[9], {
                                duration: 2,
                                width: this.move.width,
                                height: this.move.height,
                                ease: "expo.inOut"
                            }, 4.5).to(this.pixi_textures[9].position, {
                                duration: 2,
                                x: this.move.x,
                                y: this.move.y,
                                ease: "expo.inOut"
                            }, "<").to(h, {
                                duration: 1.5,
                                alpha: 0
                            }, "<").add((function() {
                                t.a.set(c.$wipe_soft, {
                                    opacity: 1
                                })
                            }), "<95%").fromTo(this.$wipe_soft, {
                                yPercent: 100,
                                transformOrigin: "bottom left"
                            }, {
                                duration: 1.2 * this.time,
                                yPercent: 0,
                                ease: "expo.inOut",
                                onStart: function() {
                                    c.revealNextPage()
                                }
                            }, "<").to(this.bgContainerGallery.transform.position, {
                                duration: 1.2 * this.time,
                                y: .5 * -this.app.sizes.height,
                                ease: "expo.inOut"
                            }, "<").to(this.pixi_textures[9], {
                                duration: 1.2 * this.time,
                                alpha: 0,
                                ease: "expo.inOut",
                                onComplete: function() {
                                    return c.body.classList.remove("has-textures")
                                }
                            }, "<").add((function() {
                                c.animating = !1
                            }), 0), this.$imgs.forEach((function(h, v) {
                                c.pixi_textures[v].alpha = 1
                            })), this.pixi_textures[9].texture.baseTexture.resource.source.currentTime = 0
                        }
                    }, {
                        key: "createTextures",
                        value: function() {
                            var c = this;
                            this.$imgs.forEach((function(h, v) {
                                var m = PIXI.Sprite.from(h.dataset.imgsrc);
                                "video" == m.texture.baseTexture.resource.source.localName && (m.texture.baseTexture.resource.source.muted = !0, m.texture.baseTexture.resource.source.loop = !0), c.bgContainerGallery.addChild(m), c.pixi_textures.push(m)
                            })), this.resizeTextures()
                        }
                    }, {
                        key: "resizeTextures",
                        value: function() {
                            var c = this;
                            this.animating || (this.$imgs.forEach((function(h, v) {
                                c.pixi_textures[v].alpha = 0, c.pixi_textures[v].width = h.getBoundingClientRect().width, c.pixi_textures[v].height = h.getBoundingClientRect().height, c.pixi_textures[v].position.x = h.getBoundingClientRect().left, c.pixi_textures[v].position.y = h.getBoundingClientRect().top
                            })), this.holdSize.resize())
                        }
                    }, {
                        key: "loadingSources",
                        value: function() {
                            var c = this,
                                h = this;
                            this.$imgs.forEach((function(v, m) {
                                var e = v.dataset.id,
                                    t = v.dataset.imgsrc;
                                h.arr_imgs.includes(t) || (c.loader.add("" + e, "" + t), h.arr_imgs.push(t))
                            })), this.loader.onProgress.add((function(c) {})), this.loader.onComplete.add((function(c) {
                                h.createTextures(), h.body.classList.add("has-textures"), h.body.classList.contains("tuto-tl-done") && L.tutoIsDone()
                            })), this.loader.load()
                        }
                    }, {
                        key: "revealNextPage",
                        value: function() {
                            var c = this;
                            t.a.set(".intro-bg", {
                                zIndex: -3
                            }), t.a.set("canvas#webgl", {
                                zIndex: -1
                            }), t.a.set(".intro", {
                                zIndex: -2
                            }), t.a.set(this.$wipe_soft, {
                                zIndex: 0
                            });
                            var h = this.$page.querySelectorAll(".headers .wrapped");
                            this.$page.classList.contains("has-header") ? (t.a.set(h, {
                                yPercent: 101
                            }), t.a.to(h, {
                                delay: .6 * this.time,
                                yPercent: 0,
                                duration: this.time,
                                ease: "expo.out",
                                stagger: .08,
                                onComplete: function() {
                                    c.body.classList.remove("is-gallery-animating"), c.destroyIntro()
                                }
                            })) : (t.a.set(this.$page, {
                                opacity: 0
                            }), t.a.to(this.$page, {
                                delay: .6 * this.time,
                                duration: this.time / 2,
                                opacity: 1,
                                onComplete: function() {
                                    c.body.classList.remove("is-gallery-animating"), c.destroyIntro()
                                }
                            }))
                        }
                    }, {
                        key: "destroyIntro",
                        value: function() {
                            document.querySelectorAll(".intro, .intro-bg").forEach((function(c) {
                                return c.remove()
                            })), this.body.classList.remove("is-intro")
                        }
                    }]), c
                }()),
                I = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            var h = this;
                            this.app = c, this.$boxes = document.querySelectorAll(".intro__tuto__box"), this.pixi_graphics = [], this.pixi_boxes = [], this.$boxes.forEach((function(c) {
                                var v = new x(h.app, c, h.app.bgContainer, "0xffffff");
                                h.pixi_graphics.push(v);
                                var m = v.graphics;
                                h.pixi_boxes.push(m)
                            })), this.anima_filter = {
                                n: .22 * this.app.sizes.width
                            }, this.is_animated = !1, this.createBoxes(), t.a.set(".intro__tuto", {
                                autoAlpha: 0
                            }), window.vw_gl_tutos = this
                        }
                    }, {
                        key: "createBoxes",
                        value: function() {
                            var c = this,
                                h = this;
                            this.$boxes.forEach((function(v, m) {
                                var e = v.getBoundingClientRect();
                                c.offScreen = c.app.sizes.height - e.bottom + e.height, h.pixi_boxes[m].alpha = 0
                            }))
                        }
                    }, {
                        key: "animaBox",
                        value: function() {
                            this.anima_filter.n = .22 * this.app.sizes.width, this.app.shockFilter.amplitude = .22 * this.app.sizes.width, this.tlsBoxIntro()
                        }
                    }, {
                        key: "onLeave",
                        value: function() {
                            E.createTimeline(), t.a.to([".intro__tuto", this.$boxes], {
                                duration: 1,
                                autoAlpha: 0
                            })
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            var c = this;
                            this.is_animated || (this.$boxes.forEach((function(h, v) {
                                c.pixi_graphics[v].resize()
                            })), this.createBoxes())
                        }
                    }, {
                        key: "tlsBoxIntro",
                        value: function() {
                            var c = this,
                                time = 3.5;
                            document.querySelector("span.intro__counter__dyna").textContent = "03";
                            var h = this;
                            h.tl_boxes = t.a.timeline({
                                onComplete: function() {
                                    c.$boxes.forEach((function(c, v) {
                                        t.a.to(h.pixi_boxes[v], {
                                            duration: .6,
                                            alpha: 0
                                        }), v > 0 && window.innerWidth > 1024 && c.closest("li").classList.add("not-custom")
                                    })), c.is_animated = !0, L.startAnimations()
                                }
                            }), this.$boxes.forEach((function(c, v) {
                                h.tl_boxes.set(h.pixi_boxes[v], {
                                    alpha: 1
                                }, 0).fromTo(h.pixi_boxes[v].position, {
                                    y: h.offScreen - .205 * h.app.sizes.width
                                }, {
                                    delay: .075 * v,
                                    duration: time,
                                    y: 0,
                                    ease: "expo.inOut"
                                }, 0).fromTo(h.pixi_boxes[v].skew, {
                                    y: .5
                                }, {
                                    duration: time,
                                    y: 0,
                                    ease: "expo.inOut"
                                }, "<10%")
                            })), h.tl_boxes.fromTo(this.anima_filter, {
                                n: .22 * this.app.sizes.width
                            }, {
                                duration: 5.25,
                                n: 0,
                                ease: "expo.inOut",
                                onUpdate: function() {
                                    c.app.shockFilter.amplitude = c.anima_filter.n
                                }
                            }, 0).to(".intro__tuto", {
                                autoAlpha: 1,
                                duration: 1.6,
                                ease: "power1.out"
                            }, 4.2).to(h.$boxes, {
                                autoAlpha: 1,
                                duration: 1.6,
                                ease: "power1.out"
                            }, 4.2)
                        }
                    }]), c
                }()),
                A = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            var h = this;
                            this.app = c, this.$boxes = document.querySelectorAll(".custom-item"), this.pixi_graphics = [], this.pixi_boxes = [], this.$boxes.forEach((function(c) {
                                var v = new x(h.app, c, h.app.bgContainer, "0xffffff");
                                h.pixi_graphics.push(v);
                                var m = v.graphics;
                                h.pixi_boxes.push(m)
                            })), this.anima_filter = {
                                n: .22 * this.app.sizes.width
                            }, this.is_animated = !1, this.arr_offsets = [], this.createBoxes(), t.a.set(".intro__custom", {
                                autoAlpha: 0
                            }), window.vw_gl_custom = this
                        }
                    }, {
                        key: "createBoxes",
                        value: function() {
                            var c = this,
                                h = this;
                            this.$boxes.forEach((function(v, m) {
                                var e = v.getBoundingClientRect();
                                c.offScreen = c.app.sizes.height - e.bottom + e.height, h.pixi_boxes[m].alpha = 0;
                                var t = h.offScreen - .145 * h.app.sizes.width;
                                h.arr_offsets.push(t)
                            }))
                        }
                    }, {
                        key: "animaBox",
                        value: function() {
                            this.anima_filter.n = .22 * this.app.sizes.width, this.app.shockFilter.amplitude = .22 * this.app.sizes.width, this.tlsBoxIntro()
                        }
                    }, {
                        key: "onLeave",
                        value: function() {
                            t.a.timeline().add((function() {
                                return I.animaBox()
                            })).to(this.$boxes, {
                                duration: 1,
                                autoAlpha: 0
                            }, 1.2).to(".intro__custom", {
                                duration: 1,
                                autoAlpha: 0
                            }, 1.2), E.loadingSources()
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            var c = this;
                            this.is_animated || (this.$boxes.forEach((function(h, v) {
                                c.pixi_graphics[v].resize()
                            })), this.createBoxes())
                        }
                    }, {
                        key: "tlsBoxIntro",
                        value: function() {
                            var c = this,
                                h = this,
                                time = 3.5;
                            document.querySelector("span.intro__counter__dyna").textContent = "02";
                            var v = t.a.timeline({
                                onComplete: function() {
                                    c.$boxes.forEach((function(c, v) {
                                        t.a.to(h.pixi_boxes[v], {
                                            duration: 1,
                                            alpha: 0
                                        }), v > 0 && c.classList.add("not-custom")
                                    })), c.is_animated = !0
                                }
                            });
                            this.$boxes.forEach((function(c, m) {
                                v.set(h.pixi_boxes[m], {
                                    alpha: 1
                                }, 0).fromTo(h.pixi_boxes[m].position, {
                                    y: h.arr_offsets[m]
                                }, {
                                    delay: .3 * m,
                                    duration: time,
                                    y: 0,
                                    ease: "expo.inOut"
                                }, 0)
                            })), v.fromTo(this.anima_filter, {
                                n: .22 * this.app.sizes.width
                            }, {
                                duration: 5.25,
                                n: 0,
                                ease: "expo.inOut",
                                onUpdate: function() {
                                    c.app.shockFilter.amplitude = c.anima_filter.n
                                }
                            }, 0).to(".intro__custom", {
                                autoAlpha: 1,
                                duration: .8,
                                ease: "power1.out"
                            }, 4.375).to(h.$boxes, {
                                autoAlpha: 1,
                                duration: .8,
                                ease: "power1.out"
                            }, 4.375)
                        }
                    }]), c
                }()),
                T = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            var h = this;
                            this.app = c, this.$boxes = document.querySelectorAll(".intro___version__each"), this.pixi_graphics = [], this.pixi_boxes = [], this.$boxes.forEach((function(c) {
                                var v = new x(h.app, c, h.app.bgContainer, "0xffffff");
                                h.pixi_graphics.push(v);
                                var m = v.graphics;
                                h.pixi_boxes.push(m)
                            })), this.anima_filter = {
                                n: .22 * this.app.sizes.width
                            }, this.is_animated = !1, this.createBoxes(), t.a.set(".intro__version, .intro__counter", {
                                autoAlpha: 0
                            }), window.vw_gl_versions = this
                        }
                    }, {
                        key: "createBoxes",
                        value: function() {
                            var c = this,
                                h = this;
                            this.$boxes.forEach((function(v, m) {
                                var e = v.getBoundingClientRect();
                                h.pixi_boxes[m].alpha = 0, c.offScreen = c.app.sizes.height - e.bottom + e.height
                            }))
                        }
                    }, {
                        key: "animaBox",
                        value: function() {
                            this.anima_filter.n = .22 * this.app.sizes.width, this.app.shockFilter.amplitude = .22 * this.app.sizes.width, this.tlsBoxIntro()
                        }
                    }, {
                        key: "onLeave",
                        value: function() {
                            t.a.timeline().add((function() {
                                return A.animaBox()
                            }), 0).to(this.$boxes, {
                                duration: 1.2,
                                autoAlpha: 0
                            }, .25).to(".intro__version", {
                                duration: 1.2,
                                autoAlpha: 0
                            }, .25)
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            var c = this;
                            this.is_animated || (this.$boxes.forEach((function(h, v) {
                                c.pixi_graphics[v].resize()
                            })), this.createBoxes())
                        }
                    }, {
                        key: "tlsBoxIntro",
                        value: function() {
                            var c = this,
                                h = this,
                                time = 3.5;
                            h.tl_boxes = t.a.timeline({
                                onComplete: function() {
                                    c.$boxes.forEach((function(c, v) {
                                        t.a.to(h.pixi_boxes[v], {
                                            duration: .6,
                                            alpha: 0
                                        })
                                    })), c.is_animated = !0, document.querySelector(".intro__version").classList.remove("no-touch")
                                }
                            }), this.$boxes.forEach((function(c, v) {
                                h.tl_boxes.set(h.pixi_boxes[v], {
                                    alpha: 1
                                }, 0), h.tl_boxes.fromTo(h.pixi_boxes[v].position, {
                                    y: h.offScreen - .205 * h.app.sizes.width
                                }, {
                                    delay: .075 * v,
                                    duration: time,
                                    y: 0,
                                    ease: "expo.inOut"
                                }, 0), h.tl_boxes.fromTo(h.pixi_boxes[v].skew, {
                                    y: .5
                                }, {
                                    duration: time,
                                    y: 0,
                                    ease: "expo.inOut"
                                }, "<10%")
                            })), h.tl_boxes.fromTo(this.anima_filter, {
                                n: .22 * this.app.sizes.width
                            }, {
                                duration: 5.25,
                                n: 0,
                                ease: "expo.inOut",
                                onUpdate: function() {
                                    c.app.shockFilter.amplitude = c.anima_filter.n
                                }
                            }, 0).to(".intro__counter, .intro__version", {
                                autoAlpha: 2,
                                duration: 1.6,
                                ease: "power1.out"
                            }, 4.2).to(h.$boxes, {
                                autoAlpha: 1,
                                duration: 1.6,
                                ease: "power1.out"
                            }, 4.2)
                        }
                    }]), c
                }()),
                D = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            this.app = c, this.$bg_intro = document.querySelector(".intro-bg__bg"), this.is_animated = !1, this.is_done = !1, this.box = new x(this.app, this.$bg_intro, this.app.bgContainer, "0xdbd6c9"), this.boxIntro = this.box.graphics, this.boxIntro.zIndex = -1, this.createBoxIntro(), k.init(this.app), this.anima_filter = {
                                n: .22 * this.app.sizes.width
                            }, window.vw_gl_intro = this, document.querySelector(".intro__rush").addEventListener("click", (function() {
                                return k.pixi_vwtitle.alpha = 0
                            }))
                        }
                    }, {
                        key: "tlsBoxIntro",
                        value: function() {
                            var c = this;
                            this.tl = t.a.timeline({
                                onComplete: function() {
                                    t.a.set(c.$bg_intro, {
                                        opacity: 1
                                    }), t.a.set(c.boxIntro, {
                                        alpha: 0
                                    }), c.is_animated = !0, document.querySelector(".intro__start__texts__btn").classList.remove("no-touch"), k.pixi_vwtitle.alpha = 0, k.$vw_title.style.opacity = 1
                                }
                            }).set(this.boxIntro, {
                                alpha: 1
                            }).set(k.pixi_vwtitle, {
                                alpha: 1
                            }).fromTo(this.boxIntro.position, {
                                y: this.offScreen - .085 * this.app.sizes.width
                            }, {
                                duration: 5,
                                y: 0,
                                ease: "expo.inOut"
                            }, 0).fromTo(this.boxIntro.skew, {
                                y: .5
                            }, {
                                duration: 5,
                                y: 0,
                                ease: "expo.inOut"
                            }, "<10%").fromTo(k.pixi_vwtitle.position, {
                                y: this.app.sizes.height
                            }, {
                                duration: 5,
                                y: k.bounds.top + .028 * this.app.sizes.width,
                                ease: "expo.inOut"
                            }, .45).fromTo(this.anima_filter, {
                                n: .22 * this.app.sizes.width
                            }, {
                                duration: 7.5,
                                n: 0,
                                ease: "expo.inOut",
                                onUpdate: function() {
                                    c.app.shockFilter.amplitude = c.anima_filter.n
                                }
                            }, 0).add((function() {
                                c.app.app.stage.addChild(k.pixi_vwtitle)
                            }))
                        }
                    }, {
                        key: "createBoxIntro",
                        value: function() {
                            this.bounds = this.$bg_intro.getBoundingClientRect(), this.offScreen = this.bounds.height + this.bounds.top, this.boxIntro.alpha = 0, t.a.set(this.boxIntro.position, {
                                y: this.offScreen - .085 * this.app.sizes.width
                            }), t.a.set(this.boxIntro.skew, {
                                y: .5
                            })
                        }
                    }, {
                        key: "animaBox",
                        value: function() {
                            this.anima_filter.n = .22 * this.app.sizes.width, this.app.shockFilter.amplitude = .22 * this.app.sizes.width, this.tlsBoxIntro()
                        }
                    }, {
                        key: "onLeave",
                        value: function() {
                            var c = this;
                            t.a.timeline({
                                onComplete: function() {
                                    return c.is_done = !0
                                }
                            }).add((function() {
                                return T.animaBox()
                            }), 0).to(k.pixi_vwtitle, {
                                duration: 1.8,
                                alpha: 0,
                                ease: "power3.inOut"
                            }, .75).to(k.pixi_vwtitle.position, {
                                duration: 1.8,
                                y: .25 * -this.app.sizes.height,
                                ease: "power3.inOut"
                            }, .75).to(".js-els-start, .intro__rush", {
                                autoAlpha: 0,
                                duration: 1.8,
                                ease: "power3.inOut"
                            }, .8).to(".js-els-start, .intro__rush", {
                                duration: 1.8,
                                y: .35 * -this.app.sizes.height,
                                ease: "power3.inOut"
                            }, "<")
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.is_done || this.tl.isActive() || k.resize(), this.is_animated || this.tl.isActive() || (this.box.resize(), this.createBoxIntro(), k.reset())
                        }
                    }]), c
                }()),
                N = v(33),
                P = function() {
                    function c(h, v) {
                        Object(m.a)(this, c), this.app = h, this.container = v, this.shockFilter = new SHOCK([this.app.sizes.width / 2, this.app.sizes.height + .2 * this.app.sizes.width], {
                            amplitude: .22 * this.app.sizes.width,
                            wavelength: 1.3 * this.app.sizes.width,
                            radius: 2 * this.app.sizes.width,
                            brightness: 1,
                            padding: 0
                        }), this.container.filters = [this.shockFilter]
                    }
                    return Object(e.a)(c, [{
                        key: "resize",
                        value: function() {
                            this.shockFilter.center = [this.app.sizes.width / 2, this.app.sizes.height + .2 * this.app.sizes.width], this.shockFilter.wavelength = 1.3 * this.app.sizes.width, this.shockFilter.radius = 2 * this.app.sizes.width
                        }
                    }]), c
                }(),
                $ = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function() {
                            var c = this;
                            this.body = document.querySelector("body"), this.time = new f, this.sizes = new d, this.resized_once = !1, this.$view = document.querySelector("canvas#webgl"), this.app = new PIXI.Application({
                                width: this.sizeswidth,
                                height: this.sizesheight,
                                antialias: !0,
                                backgroundAlpha: 0,
                                view: this.$view
                            }), this.view_width = this.$view.getBoundingClientRect().width, this.view_height = this.$view.getBoundingClientRect().height, this.container = new H(this), this.bgContainer = this.container.bgContainer, this.screen = this.app.screen, this.resized = !0, this.updatePosition = !0, this.app.stage.interactive = !1, this.app.stage.filterArea = this.screen, this.app.stage.sortableChildren = !0, this.holdSize = new O(this, this.bgContainer), this.pixi_fontsyle = new M(this), this.style = this.pixi_fontsyle.style, this.filter = new P(this, this.bgContainer), this.shockFilter = this.filter.shockFilter, this.loader = new PIXI.Loader, this.loader.add("a2g", y.a).load((function(h, v) {
                                c.sizes.on("resize", (function() {
                                    c.resize()
                                })), c.time.on("tick", (function() {
                                    c.ticker()
                                })), c.style.fontFamily = "a2g", N.a.init(c), window.app = c, (c.body.classList.contains("is-allsetup") || c.body.classList.contains("is-skipped")) && c.allSetUp()
                            }))
                        }
                    }, {
                        key: "allSetUp",
                        value: function() {
                            var c = this,
                                h = function() {},
                                v = localStorage.getItem("name");
                            this.DOM = document.querySelector(".page"), this.preloader = {
                                el: document.querySelector(".preloader-master"),
                                name: document.querySelector(".preloader-master__name span")
                            }, this.DOM.classList.contains("has-header") && window.innerWidth > 1024 ? t.a.set(this.DOM.querySelectorAll(".headers .wrapped"), {
                                yPercent: 101
                            }) : t.a.set(this.DOM, {
                                opacity: 0
                            }), v && (this.preloader.name.innerHTML = "Hey ".concat(localStorage.getItem("name"), "...")), t.a.to(this.preloader.name, {
                                yPercent: -160,
                                duration: 2,
                                ease: "expo.out"
                            }), t.a.delayedCall(1, (function() {
                                N.a.changeName("WELCOME BACK"), N.a.createText(), N.a.animaBox(c.DOM, h, "first_entrance", c.preloader.el), c.preloader.el.style.zIndex = -1
                            })), t.a.delayedCall(5, (function() {
                                return c.preloader.el.remove()
                            }))
                        }
                    }, {
                        key: "pixiIntro",
                        value: function() {
                            D.init(this), T.init(this), A.init(this), I.init(this), E.init(this)
                        }
                    }, {
                        key: "ticker",
                        value: function() {
                            this.resized && (this.resize(), this.updatePosition = !0, this.resized = !1)
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.resized_once && (this.view_width === this.sizes.width && this.view_height === this.sizes.height || (this.view_width = this.sizes.width, this.view_height = this.sizes.height, this.filter.resize(), this.body.classList.contains("is-gallery-animating") || (N.a.resize(), this.body.classList.contains("is-intro") && (D.resize(), T.resize(), A.resize(), I.resize(), this.body.classList.contains("has-textures") && E.resizeTextures())))), this.resized_once = !0, this.resized = !0, this.holdSize.resize(), this.app.renderer.resize(this.sizes.width, this.sizes.height)
                        }
                    }]), c
                }()),
                B = (v(22), v(60), v(35)),
                R = v(36);
            t.a.registerPlugin(C.a);
            var G = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function() {
                            this.DOM = document.querySelector(".intro__custom"), this.custom = {
                                name: this.DOM.querySelector(".intro__custom__name"),
                                location: this.DOM.querySelector(".intro__custom__location"),
                                moods: this.DOM.querySelector(".intro__custom__mood"),
                                music: this.DOM.querySelector(".intro__custom__music")
                            }, this.name = localStorage.getItem("name") || null, this.name && (document.querySelector("span.dyna-name").textContent = "".concat(this.name), document.querySelector(".tuto-version span").textContent = "".concat(localStorage.getItem("version"))), this.getName(), this.getLocation(), this.getMood(), this.getMusic(), this.tl_hover = t.a.timeline({
                                repeat: 1
                            }).fromTo(this.DOM.querySelector(".intro__custom__mood .rect-border"), {
                                drawSVG: "0% 0%"
                            }, {
                                duration: 1,
                                drawSVG: "0% 50%",
                                ease: "power3.out"
                            }).fromTo(this.DOM.querySelector(".intro__custom__mood .rect-border2"), {
                                drawSVG: "50% 50%"
                            }, {
                                duration: 1,
                                drawSVG: "50% 100%",
                                ease: "power3.out"
                            }, 0).fromTo(this.DOM.querySelectorAll(".intro__custom__mood .border-hovers"), {
                                opacity: 0
                            }, {
                                duration: .8,
                                opacity: 1,
                                ease: "power2.out"
                            }, 0).to(this.DOM.querySelector(".intro__custom__mood .rect-border"), {
                                duration: 1,
                                drawSVG: "50% 50%",
                                ease: "none"
                            }, "<50%").to(this.DOM.querySelector(".intro__custom__mood .rect-border2"), {
                                duration: 1,
                                drawSVG: "100% 100%",
                                ease: "none"
                            }, .35).to(this.DOM.querySelectorAll(".intro__custom__mood .border-hovers"), {
                                duration: .5,
                                opacity: 0,
                                ease: "power2.in"
                            }, "<50%")
                        }
                    }, {
                        key: "getName",
                        value: function() {
                            this.nameForm = this.DOM.querySelector("form.name"), this.nameForm.addEventListener("submit", this.setName.bind(this))
                        }
                    }, {
                        key: "setName",
                        value: function(c) {
                            c.preventDefault();
                            var h = document.querySelector(".input-name").value;
                            localStorage.setItem("name", h), document.querySelector("span.dyna-name").textContent = "".concat(h, ","), document.querySelector(".menu-fs__close__profile__name ").textContent = "".concat(h, " uses:"), document.querySelector(".tuto-reset__name").textContent = "".concat(h, " uses"), this.moveSteps(this.custom.name, this.custom.location), R.a.setName(localStorage.getItem("name"))
                        }
                    }, {
                        key: "getLocation",
                        value: function() {
                            this.btn_yes_location = this.DOM.querySelector(".yes-location"), this.btn_no_location = this.DOM.querySelector(".no-location"), this.display_location = this.DOM.querySelector(".display-location"), this.ctn_loca = this.DOM.querySelector(".intro__custom__location__btns"), this.btn_yes_location.addEventListener("click", this.fetchLocation.bind(this)), this.btn_no_location.addEventListener("click", this.notFetchLocation.bind(this))
                        }
                    }, {
                        key: "moveSteps",
                        value: function(c, h) {
                            h.classList.remove("not-custom"), c.classList.add("filled-custom")
                        }
                    }, {
                        key: "doneLocation",
                        value: function() {
                            var c = this;
                            this.ctn_loca.classList.add("fetched"), t.a.delayedCall(.75, (function() {
                                c.moveSteps(c.custom.location, c.custom.moods)
                            }))
                        }
                    }, {
                        key: "notFetchLocation",
                        value: function() {
                            this.doneLocation(), this.display_location.innerHTML = "No problem. Let's keep it private"
                        }
                    }, {
                        key: "fetchLocation",
                        value: function() {
                            var c = this;
                            fetch("https://ipinfo.io/?token=e6f288c4bd8126").then((function(c) {
                                return c.json()
                            })).then((function(data) {
                                c.doneLocation(), c.display_location.innerHTML = "I'm glad to have you here from ".concat(data.city, " - ").concat(data.region, "/").concat(data.country, " —  Time-zone: ").concat(Intl.DateTimeFormat().resolvedOptions().timeZone, " "), localStorage.setItem("city", data.city)
                            })).catch((function(data, h) {
                                c.doneLocation(), c.display_location.innerHTML = "Sorry, it wasn't possible to fetch them"
                            }))
                        }
                    }, {
                        key: "getMood",
                        value: function() {
                            var c = this;
                            this.moods = this.DOM.querySelectorAll(".intro__custom__mood__btns button"), this.moods.forEach((function(h) {
                                h.addEventListener("click", c.setMood.bind(c))
                            }))
                        }
                    }, {
                        key: "setMood",
                        value: function(element) {
                            var c = this;
                            localStorage.setItem("mood", element.target.closest("button").dataset.mood), this.moods.forEach((function(c) {
                                c.classList.remove("mood-selected"), c.classList.add("not-mood")
                            })), this.DOM.querySelector(".intro__custom__mood").classList.add("no-touch"), element.target.closest("button").classList.add("mood-selected"), B.a.getMood(), R.a.setMusic(localStorage.getItem("mood")), this.tl_hover.play(0), t.a.delayedCall(1.5, (function() {
                                R.a.setMood(localStorage.getItem("name"), localStorage.getItem("mood")), N.a.createWipeDark()
                            })), t.a.delayedCall(2, (function() {
                                c.moveSteps(c.custom.moods, c.custom.music)
                            }))
                        }
                    }, {
                        key: "getMusic",
                        value: function() {
                            var c = this;
                            this.DOM.querySelector(".yes-music").addEventListener("click", (function() {
                                localStorage.setItem("music", "yes"), c.doneAllSteps()
                            })), this.DOM.querySelector(".no-music").addEventListener("click", (function() {
                                localStorage.setItem("music", "no"), c.doneAllSteps()
                            }))
                        }
                    }, {
                        key: "doneAllSteps",
                        value: function() {
                            this.custom.music.classList.add("filled-custom"), this.onLeave(), L.onEnter()
                        }
                    }, {
                        key: "onEnter",
                        value: function() {}
                    }, {
                        key: "onLeave",
                        value: function() {
                            A.onLeave()
                        }
                    }]), c
                }()),
                F = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function() {
                            var c = document;
                            this.qsa = function(s) {
                                var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
                                return h.querySelectorAll(s)
                            }, this.qs = function(s) {
                                var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
                                return h.querySelector(s)
                            }, this.DOM = document.querySelector(".intro__version"), this.stepVersions()
                        }
                    }, {
                        key: "stepVersions",
                        value: function() {
                            var c = this,
                                h = this;

                            function v(element) {
                                var c = [].indexOf.call(this.versions.each, element.target);
                                this.versions.each.forEach((function(c) {
                                    return c.classList.add("other-version")
                                })), element.target.classList.add("this-version"), this.hoversVersion[c].play()
                            }

                            function m(element) {
                                var c = [].indexOf.call(this.versions.each, element.target);
                                this.versions.each.forEach((function(c) {
                                    return c.classList.remove("other-version", "this-version")
                                })), this.hoversVersion[c].pause(0)
                            }
                            this.versions = {
                                each: this.qsa(".intro___version__each")
                            }, this.hoversVersion = [], this.versions.each.forEach((function(e) {
                                ! function(c) {
                                    var v = t.a.timeline({
                                        repeat: -1
                                    }).fromTo(c.querySelector(".rect-border"), {
                                        drawSVG: "0% 0%"
                                    }, {
                                        duration: 1,
                                        drawSVG: "0% 50%",
                                        ease: "power3.out"
                                    }).fromTo(c.querySelector(".rect-border2"), {
                                        drawSVG: "50% 50%"
                                    }, {
                                        duration: 1,
                                        drawSVG: "50% 100%",
                                        ease: "power3.out"
                                    }, 0).fromTo(c.querySelectorAll(".border-hovers"), {
                                        opacity: 0
                                    }, {
                                        duration: .8,
                                        opacity: 1,
                                        ease: "power2.out"
                                    }, 0).to(c.querySelector(".rect-border"), {
                                        duration: 1,
                                        drawSVG: "50% 50%",
                                        ease: "none"
                                    }, "<50%").to(c.querySelector(".rect-border2"), {
                                        duration: 1,
                                        drawSVG: "100% 100%",
                                        ease: "none"
                                    }, .35).to(c.querySelectorAll(".border-hovers"), {
                                        duration: .5,
                                        opacity: 0,
                                        ease: "power2.in"
                                    }, "<50%");
                                    v.pause(), h.hoversVersion.push(v)
                                }(e), e.addEventListener("mouseenter", v.bind(c)), e.addEventListener("mouseleave", m.bind(c)), e.addEventListener("click", (function() {
                                    c.onLeave(), localStorage.setItem("version", e.dataset.version), G.onEnter(), R.a.setVersion(localStorage.getItem("version")), document.querySelector("body").classList.add("is-".concat(e.dataset.version.replace(/ /g, "")))
                                }))
                            }))
                        }
                    }, {
                        key: "onEnter",
                        value: function() {}
                    }, {
                        key: "onLeave",
                        value: function() {
                            T.onLeave()
                        }
                    }]), c
                }()),
                Y = v(54);
            t.a.registerPlugin(Y.a, C.a);
            var U = new(function() {
                function c() {
                    Object(m.a)(this, c)
                }
                return Object(e.a)(c, [{
                    key: "init",
                    value: function() {
                        this.contentPage = document;
                        var c = this.contentPage;
                        this.qsa = function(s) {
                            var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
                            return h.querySelectorAll(s)
                        }, this.qs = function(s) {
                            var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
                            return h.querySelector(s)
                        }, this.coverIntro()
                    }
                }, {
                    key: "coverIntro",
                    value: function() {
                        var c = this;
                        D.animaBox(), this.start = {
                            vw: this.qs(".intro__start__texts__title h1"),
                            regist_svg: this.qs(".registered svg"),
                            regist_path: this.qs(".regis-path"),
                            regist_r: this.qs(".js-r"),
                            text: this.qs(".intro__start__texts__parag p"),
                            rush: this.qs(".intro__rush"),
                            primary_btn: this.qs(".intro__start__texts__btn"),
                            rect_1: this.qs(".intro__start__texts__btn .rect1"),
                            rect_2: this.qs(".intro__start__texts__btn .rect2")
                        }, this.tl_linecta = t.a.timeline({
                            paused: !0
                        }).fromTo(this.start.rect_1, {
                            drawSVG: "0% 0%"
                        }, {
                            duration: 1,
                            drawSVG: "0% 50%",
                            ease: "power3.out"
                        }).fromTo(this.start.rect_2, {
                            drawSVG: "50% 50%"
                        }, {
                            duration: 1,
                            drawSVG: "50% 100%",
                            ease: "power3.out"
                        }, 0).fromTo([this.start.rect_1, this.start.rect_2], {
                            opacity: 0
                        }, {
                            duration: .8,
                            opacity: 1,
                            ease: "power2.out"
                        }, 0).to(this.start.rect_1, {
                            duration: 1,
                            drawSVG: "50% 50%",
                            ease: "none"
                        }, "<50%").to(this.start.rect_2, {
                            duration: 1,
                            drawSVG: "100% 100%",
                            ease: "none"
                        }, .35).to([this.start.rect_1, this.start.rect_2], {
                            duration: .5,
                            opacity: 0,
                            ease: "power2.in"
                        }, "<50%"), new Y.a(this.start.text, {
                            type: "lines",
                            linesClass: "line-wrap"
                        }), this.tl_introcover = t.a.timeline({
                            delay: 2.75
                        }).from(".line-wrap", {
                            duration: 3,
                            y: .25 * window.innerHeight,
                            stagger: .085,
                            ease: "power3.inOut"
                        }, "endTitle").from(".line-wrap", {
                            opacity: 0,
                            duration: 3,
                            stagger: .05,
                            ease: "expo.inOut"
                        }, "<").from(this.start.regist_path, {
                            duration: 1.8,
                            drawSVG: "0%",
                            ease: "expo.out"
                        }, "endTitle+=1").fromTo(this.start.regist_svg, {
                            transformOrigin: "center center",
                            rotation: -0
                        }, {
                            duration: 1.8,
                            rotation: 225,
                            ease: "expo.out"
                        }, "<").from(this.start.regist_r, {
                            duration: .6,
                            opacity: 0,
                            ease: "power1.out"
                        }, "<30%").from([this.start.rush, ".main-logo", ".intro__discl"], {
                            duration: .6,
                            opacity: 0,
                            ease: "power1.out"
                        }).add((function() {
                            c.tl_linecta.play(0)
                        }), "endTitle+=2").from(this.start.primary_btn.querySelector(".primary-btn__hold"), {
                            duration: 1,
                            autoAlpha: 0,
                            ease: "power1.out"
                        }, "-=.8").from(this.start.primary_btn, {
                            duration: 3,
                            scale: 1.2,
                            ease: "expo.out"
                        }, "endTitle+=2").add((function() {
                            c.tl_linecta.tweenFromTo(0, c.tl_linecta.totalDuration(), {
                                ease: "power1.inOut",
                                duration: 2,
                                repeat: -1
                            })
                        })), this.start.primary_btn.addEventListener("click", this.fromStartToVersion.bind(this))
                    }
                }, {
                    key: "fromStartToVersion",
                    value: function() {
                        this.start.primary_btn.classList.add("no-touch"), D.onLeave()
                    }
                }]), c
            }());
            t.a.registerPlugin(C.a);
            var W = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            var h = this;
                            this.contentPage = c;
                            var v = this.contentPage;
                            this.qsa = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
                                return c.querySelectorAll(s)
                            }, this.qs = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
                                return c.querySelector(s)
                            }, this.body = document.querySelector("body"), this.preloader = document.querySelector(".preloader-master"), this.intro = document.querySelector(".intro") || null, this.intro && this.eventListeners(), V.verifySetup(), R.a.init(), $.init(), V.name && V.version && V.mood && V.music && V.setup ? (R.a.setName(V.name), R.a.setVersion(V.version), R.a.setMood(V.name, V.mood), this.intro && document.querySelector(".intro").remove(), this.body.classList.add("is-".concat(V.version.replace(/ /g, "")), "is-allsetup")) : "skipped" == V.version && V.setup ? (this.intro && document.querySelector(".intro").remove(), R.a.setSkipped(), this.body.classList.add("is-skipped")) : ($.pixiIntro(), this.preloader.style.backgroundColor = "transparent", t.a.to(this.preloader, {
                                delay: 1,
                                duration: 1,
                                autoAlpha: 0,
                                onComplete: function() {
                                    return h.preloader.remove()
                                }
                            }), U.init(), F.init(), G.init(), L.init(), this.body.classList.add("is-intro"))
                        }
                    }, {
                        key: "eventListeners",
                        value: function() {
                            var c = this;
                            this.DOM = document.querySelector(".page");
                            var h = this.DOM.querySelectorAll(".headers .wrapped");
                            document.querySelectorAll(".clear-storage").forEach((function(c) {
                                c.addEventListener("click", (function() {
                                    V.clearStorage()
                                }))
                            })), document.querySelector(".intro__rush").addEventListener("click", (function() {
                                c.DOM.classList.contains("has-header") && window.innerWidth > 1024 ? t.a.from(h, {
                                    delay: .8,
                                    yPercent: 101,
                                    duration: 3,
                                    ease: "expo.out",
                                    stagger: .08
                                }) : t.a.from(c.DOM, {
                                    delay: .8,
                                    duration: c.time / 2,
                                    opacity: 0
                                }), t.a.to(".intro, .intro-bg", {
                                    autoAlpha: 0,
                                    duration: 1,
                                    onComplete: function() {
                                        localStorage.setItem("version", "skipped"), localStorage.setItem("setup", !0), c.body.classList.add("is-skipped"), R.a.setSkipped(), c.body.classList.remove("is-intro"), c.intro.remove()
                                    }
                                })
                            }))
                        }
                    }]), c
                }()),
                Z = {
                    props: ["intro"],
                    methods: {
                        activeDiscl: function(c) {
                            window.innerWidth < 1025 && this.$el.querySelector(".intro__discl").classList.toggle("discl-active")
                        },
                        enterDiscl: function(c) {
                            window.innerWidth > 1024 && this.$el.querySelector(".intro__discl").classList.add("discl-active")
                        },
                        leaveDiscl: function(c) {
                            window.innerWidth > 1024 && this.$el.querySelector(".intro__discl").classList.remove("discl-active")
                        }
                    },
                    mounted: function() {
                        W.init(this.$el)
                    }
                },
                Q = v(15),
                component = Object(Q.a)(Z, (function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "intro"
                    }, [v("div", {
                        staticClass: "intro__bg e-abs"
                    }), v("div", {
                        staticClass: "intro__discl e-abs e-flex"
                    }, [v("div", {
                        staticClass: "intro__discl__hold e-rel e-hold e-flex"
                    }, [v("div", {
                        staticClass: "intro__discl__icon e-flex t-sansbold",
                        on: {
                            click: c.activeDiscl,
                            mouseenter: c.enterDiscl,
                            mouseleave: c.leaveDiscl
                        }
                    }, [c._v("i")]), v("span", [c._v("This website does not collect personal data and does not use cookies, as the settings are saved in your own browser.")])])]), c._m(0), v("div", {
                        staticClass: "intro__hold e-wp e-hp e-rel"
                    }, [v("div", {
                        staticClass: "intro__start"
                    }, [v("div", {
                        staticClass: "intro__ctn"
                    }, [v("div", {
                        staticClass: "intro__start__texts e-flex-col"
                    }, [v("div", {
                        staticClass: "intro__start__texts__title e-flex js-els-start"
                    }, [v("h1", {
                        staticClass: "t-title t-color"
                    }, [c._v(c._s(c.intro.intro_title))]), v("div", {
                        staticClass: "registered e-flex"
                    }, [v("svg", {
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("circle", {
                        staticClass: "regis-path",
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--dark)"
                        }
                    })]), v("span", {
                        staticClass: "t-sansbold js-r"
                    }, [c._v("R")])])]), v("prismic-rich-text", {
                        staticClass: "intro__start__texts__parag rich-text-strong js-els-start",
                        attrs: {
                            field: c.intro.intro_text
                        }
                    }), v("div", {
                        staticClass: "primary-btn intro__start__texts__btn e-rel no-touch js-els-start"
                    }, [v("svg", {
                        staticClass: "primary-rect-path",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 266 47",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("rect", {
                        staticClass: "rect2",
                        attrs: {
                            x: "0.5",
                            y: "0.5",
                            width: "265",
                            height: "46",
                            rx: "23",
                            stroke: "var(--color)"
                        }
                    }), v("rect", {
                        staticClass: "rect1",
                        attrs: {
                            x: "0.5",
                            y: "0.5",
                            width: "265",
                            height: "46",
                            rx: "23",
                            stroke: "var(--color)"
                        }
                    })]), v("div", {
                        staticClass: "primary-btn__hold"
                    }, [v("span", {
                        staticClass: "primary-btn__text"
                    }, [c._v("START EXPLORING")]), v("div", {
                        staticClass: "primary-btn__circ"
                    }), v("div", {
                        staticClass: "primary-btn__icon"
                    }, [v("div", {
                        staticClass: "primary-btn__icon__hold"
                    }, [v("div", {
                        staticClass: "primary-btn__svg"
                    }, [v("svg", {
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 8 8",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("path", {
                        attrs: {
                            d: "M0.578554 0L0.568579 1.46635H5.49626L0 6.96264L1.03741 8L6.53367 2.50379V7.43141L8 7.42145V0H0.578554Z",
                            fill: "white"
                        }
                    })])])])])])])], 1)]), v("div", {
                        staticClass: "intro__rush e-curp"
                    }, [v("span", [c._v(c._s(c.intro.intro_rush))])])]), v("div", {
                        staticClass: "intro__version no-touch"
                    }, [v("div", {
                        staticClass: "intro__ctn e-hold"
                    }, [v("div", {
                        staticClass: "intro__select"
                    }, [v("span", [c._v(c._s(c.intro.intro_select_version))])]), v("ul", {
                        staticClass: "intro__versions"
                    }, c._l(c.intro.intro_versions_group, (function(h, m) {
                        return v("li", {
                            staticClass: "intro___version__each",
                            attrs: {
                                "data-version": h.caption
                            }
                        }, [v("div", {
                            staticClass: "intro___version__each__hold e-rel"
                        }, [v("svg", {
                            staticClass: "svg-cover no-mobile",
                            attrs: {
                                width: "100%",
                                height: "100%"
                            }
                        }, [v("rect", {
                            staticClass: "rect-bg",
                            attrs: {
                                width: "100%",
                                height: "100%",
                                rx: "17",
                                fill: "transparent"
                            }
                        }), v("rect", {
                            staticClass: "border-hovers rect-border",
                            attrs: {
                                fill: "transparent",
                                x: "0.5",
                                y: "0.5",
                                width: "100%",
                                height: "100%",
                                rx: "16.5",
                                stroke: "var(--color)",
                                "stroke-width": "1.5"
                            }
                        }), v("rect", {
                            staticClass: "border-hovers rect-border2",
                            attrs: {
                                fill: "transparent",
                                x: "0.5",
                                y: "0.5",
                                width: "100%",
                                height: "100%",
                                rx: "16.5",
                                stroke: "var(--color)",
                                "stroke-width": "1.5"
                            }
                        })]), v("div", {
                            staticClass: "intro___version__each__caption"
                        }, [v("span", [c._v(c._s(h.caption))])]), v("div", {
                            staticClass: "intro__version__each__svg"
                        }, ["full" === h.id ? [v("SvgVW")] : c._e(), "moderate" === h.id ? [v("SvgExpertise")] : c._e(), "simple" === h.id ? [v("SvgAnimations")] : c._e()], 2), v("div", {
                            staticClass: "intro___version__each__text"
                        }, [v("prismic-rich-text", {
                            staticClass: "rich-text-strong",
                            attrs: {
                                field: h.text
                            }
                        })], 1)])])
                    })), 0)])]), v("div", {
                        staticClass: "intro__custom"
                    }, [v("div", {
                        staticClass: "intro__ctn e-hold"
                    }, [v("div", {
                        staticClass: "intro__custom__text"
                    }, [v("span", {
                        staticClass: "intro__custom__lets"
                    }, [c._v(c._s(c.intro.intro_lets))]), v("span", [c._v(c._s(c.intro.intro_onetime))])]), v("div", {
                        staticClass: "intro__custom__name custom-item"
                    }, [v("div", {
                        staticClass: "subt_custom"
                    }, [v("span", [c._v(c._s(c.intro.intro_subtname))])]), c._m(1)]), v("div", {
                        staticClass: "intro__custom__location custom-item"
                    }, [v("div", {
                        staticClass: "subt_custom"
                    }, [v("span", [c._v(c._s(c.intro.intro_subtlocation))])]), v("div", {
                        staticClass: "intro__custom__location__btns e-flex"
                    }, [v("div", {
                        staticClass: "display-location"
                    }), v("button", {
                        staticClass: "yes-location simple-btn",
                        attrs: {
                            "arial-label": "button location"
                        }
                    }, [c._v(c._s(c.intro.intro_loca_btn_yes) + " ")]), v("button", {
                        staticClass: "no-location simple-btn",
                        attrs: {
                            "arial-label": "button location"
                        }
                    }, [c._v(c._s(c.intro.intro_loca_btn_no) + " ")])])]), v("div", {
                        staticClass: "intro__custom__mood custom-item"
                    }, [v("div", {
                        staticClass: "subt_custom"
                    }, [v("span", [c._v(c._s(c.intro.intro_subtmood))])]), v("ul", {
                        staticClass: "intro__custom__mood__btns"
                    }, c._l(c.intro.intro_colors_group, (function(h) {
                        return v("li", [v("button", {
                            staticClass: "input-mood",
                            attrs: {
                                "aria-label": "switch mode",
                                "data-color1": h.color_1,
                                "data-color2": h.color_2,
                                "data-bgholder": h.color_bgholder,
                                "data-mood": h.name
                            }
                        }, [v("span", [c._v(c._s(h.name))]), v("svg", {
                            attrs: {
                                width: "100%",
                                viewBox: "0 0 34 34",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [v("circle", {
                            attrs: {
                                cx: "16.7715",
                                cy: "16.7715",
                                r: "11.8592",
                                transform: "rotate(45 16.7715 16.7715)",
                                fill: h.color_display1
                            }
                        }), v("path", {
                            attrs: {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M8.38574 8.38672C3.75454 13.018 3.75458 20.5268 8.38586 25.1581C13.0171 29.7894 20.5259 29.7894 25.1572 25.1582L8.38574 8.38672Z",
                                fill: h.color_display2
                            }
                        })])])])
                    })), 0), v("svg", {
                        staticClass: "svg-cover",
                        attrs: {
                            width: "100%",
                            height: "100%"
                        }
                    }, [v("rect", {
                        staticClass: "rect-bg",
                        attrs: {
                            width: "100%",
                            height: "100%",
                            rx: "17",
                            fill: "transparent"
                        }
                    }), v("rect", {
                        staticClass: "border-hovers rect-border",
                        attrs: {
                            fill: "transparent",
                            x: "0.5",
                            y: "0.5",
                            width: "100%",
                            height: "100%",
                            rx: "16.5",
                            stroke: "var(--color)",
                            "stroke-width": "1.5"
                        }
                    }), v("rect", {
                        staticClass: "border-hovers rect-border2",
                        attrs: {
                            fill: "transparent",
                            x: "0.5",
                            y: "0.5",
                            width: "100%",
                            height: "100%",
                            rx: "16.5",
                            stroke: "var(--color)",
                            "stroke-width": "1.5"
                        }
                    })])]), v("div", {
                        staticClass: "intro__custom__music custom-item"
                    }, [v("div", {
                        staticClass: "subt_custom"
                    }, [v("span", [c._v(c._s(c.intro.intro_subtmusic))])]), v("div", {
                        staticClass: "intro__custom__music__btns e-flex"
                    }, [v("button", {
                        staticClass: "yes-music simple-btn",
                        attrs: {
                            "arial-label": "button music"
                        }
                    }, [c._v(c._s(c.intro.intro_btn_yes))]), v("button", {
                        staticClass: "no-music simple-btn",
                        attrs: {
                            "arial-label": "button music"
                        }
                    }, [c._v(c._s(c.intro.intro_btn_no))])])])])]), c._m(2), v("div", {
                        staticClass: "intro__tuto e-flex"
                    }, [v("div", {
                        staticClass: "intro__ctn e-hold"
                    }, [v("div", {
                        staticClass: "intro__tuto__text"
                    }, [c._m(3), v("span", {
                        staticClass: "its"
                    }, [c._v(c._s(c.intro.intro_greeting))])]), v("div", {
                        staticClass: "primary-btn done-intro no-mobile"
                    }, [v("div", {
                        staticClass: "primary-btn__hold"
                    }, [v("svg", {
                        staticClass: "primary-rect-path",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 266 47",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("rect", {
                        staticClass: "border-hovers rect-border",
                        attrs: {
                            x: "0.5",
                            y: "0.5",
                            width: "265",
                            height: "46",
                            rx: "23",
                            stroke: "var(--color)"
                        }
                    }), v("rect", {
                        staticClass: "border-hovers rect-border2",
                        attrs: {
                            x: "0.5",
                            y: "0.5",
                            width: "265",
                            height: "46",
                            rx: "23",
                            stroke: "var(--color)"
                        }
                    })]), v("span", {
                        staticClass: "primary-btn__text"
                    }, [c._v("ENTER")]), v("div", {
                        staticClass: "primary-btn__circ"
                    }), v("div", {
                        staticClass: "primary-btn__icon"
                    }, [v("div", {
                        staticClass: "primary-btn__icon__hold"
                    }, [v("div", {
                        staticClass: "primary-btn__svg"
                    }, [v("svg", {
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 8 8",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("path", {
                        attrs: {
                            d: "M0.578554 0L0.568579 1.46635H5.49626L0 6.96264L1.03741 8L6.53367 2.50379V7.43141L8 7.42145V0H0.578554Z",
                            fill: "white"
                        }
                    })])])])])])]), v("ul", {
                        staticClass: "intro__tuto__group"
                    }, [v("li", {
                        staticClass: "intro__tuto__item tuto-prog"
                    }, [v("div", {
                        staticClass: "subt"
                    }, [v("span", [c._v(c._s(c.intro.intro_subtprog))])]), v("div", {
                        staticClass: "intro__tuto__box"
                    }, [c._m(4), v("div", {
                        staticClass: "intro__tuto__item__ctn e-flex-col"
                    }, [v("div", {
                        staticClass: "intro__explore__svg e-flex"
                    }, [v("svg", {
                        staticClass: "svg-explore-circle",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("circle", {
                        staticClass: "circ-static",
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--dark)",
                            pathLength: "1"
                        }
                    }), v("circle", {
                        staticClass: "percent",
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--color)"
                        }
                    })]), c._m(5)]), c._m(6)])])]), v("li", {
                        staticClass: "intro__tuto__item tuto-reset"
                    }, [v("div", {
                        staticClass: "subt"
                    }, [v("span", [c._v(c._s(c.intro.intro_subtreset))])]), v("div", {
                        staticClass: "intro__tuto__box"
                    }, [c._m(7), v("div", {
                        staticClass: "intro__tuto__item__ctn"
                    }, [v("div", {
                        staticClass: "tuto-reset__name"
                    }, [c._v(c._s(c.intro.intro_resetname))]), v("div", {
                        staticClass: "tuto-version e-flex"
                    }, [v("span", {
                        staticClass: "t-sansbold"
                    }, [c._v(c._s(c.intro.intro_resetversion))]), v("div", {
                        staticClass: "tuto-version__close e-flex"
                    })])])])]), v("li", {
                        staticClass: "intro__tuto__item tuto-colors"
                    }, [v("div", {
                        staticClass: "subt"
                    }, [v("span", [c._v(c._s(c.intro.intro_subtchange))])]), v("div", {
                        staticClass: "intro__tuto__box"
                    }, [c._m(8), v("div", {
                        staticClass: "intro__tuto__item__ctn"
                    }, [v("ul", {
                        staticClass: "tuto-colors__ctn"
                    }, c._l(c.intro.intro_colors_group, (function(c) {
                        return v("li", [v("button", {
                            attrs: {
                                "aria-label": "switch mode",
                                "data-color1": c.color_1,
                                "data-color2": c.color_2,
                                "data-bgholder": c.color_bgholder
                            }
                        }, [v("svg", {
                            attrs: {
                                width: "100%",
                                viewBox: "0 0 34 34",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [v("circle", {
                            attrs: {
                                cx: "16.7715",
                                cy: "16.7715",
                                r: "11.8592",
                                transform: "rotate(45 16.7715 16.7715)",
                                fill: c.color_display1
                            }
                        }), v("path", {
                            attrs: {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M8.38574 8.38672C3.75454 13.018 3.75458 20.5268 8.38586 25.1581C13.0171 29.7894 20.5259 29.7894 25.1572 25.1582L8.38574 8.38672Z",
                                fill: c.color_display2
                            }
                        })])])])
                    })), 0)])])]), v("li", {
                        staticClass: "intro__tuto__item tuto-enter"
                    }, [v("div", {
                        staticClass: "subt"
                    }, [v("span", [c._v(c._s(c.intro.intro_subtreward))])]), v("div", {
                        staticClass: "intro__tuto__box e-rel"
                    }, [c._m(9), v("div", {
                        staticClass: "intro__tuto__item__ctn e-flex-col"
                    }, [v("div", {
                        staticClass: "footer__music__svg e-flex js-music__svg"
                    }, [v("svg", {
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 118 118",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("circle", {
                        attrs: {
                            opacity: "0.11",
                            cx: "59",
                            cy: "59",
                            r: "59",
                            fill: "var(--dark)"
                        }
                    }), v("circle", {
                        attrs: {
                            opacity: "0.54",
                            cx: "59.0001",
                            cy: "59.0003",
                            r: "26.4744",
                            stroke: "var(--dark)",
                            "stroke-width": "1.51282"
                        }
                    }), v("circle", {
                        attrs: {
                            cx: "58.9999",
                            cy: "58.9996",
                            r: "7.5641",
                            fill: "var(--dark)"
                        }
                    }), v("circle", {
                        attrs: {
                            cx: "31.391",
                            cy: "18.5317",
                            r: "1.89103",
                            fill: "var(--dark)"
                        }
                    })])]), v("span", {
                        staticClass: "listen-to"
                    }, [c._v("Click to listen to your chosen playlist")])])])]), v("li", {
                        staticClass: "intro__tuto__item tuto-enter no-desk"
                    }, [c._m(10), v("div", {
                        staticClass: "intro__tuto__box e-rel"
                    }, [c._m(11), v("div", {
                        staticClass: "intro__tuto__item__ctn e-flex-col"
                    }, [v("div", {
                        staticClass: "primary-btn done-intro"
                    }, [v("div", {
                        staticClass: "primary-btn__hold"
                    }, [v("span", {
                        staticClass: "primary-btn__text"
                    }, [c._v("ENTER")]), v("div", {
                        staticClass: "primary-btn__circ"
                    }), v("div", {
                        staticClass: "primary-btn__icon"
                    }, [v("div", {
                        staticClass: "primary-btn__icon__hold"
                    }, [v("div", {
                        staticClass: "primary-btn__svg"
                    }, [v("svg", {
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 8 8",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("path", {
                        attrs: {
                            d: "M0.578554 0L0.568579 1.46635H5.49626L0 6.96264L1.03741 8L6.53367 2.50379V7.43141L8 7.42145V0H0.578554Z",
                            fill: "white"
                        }
                    })])])])])])])])])])])])])])])
                }), [function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "intro__counter e-abs e-flex"
                    }, [v("span", {
                        staticClass: "intro__counter__dyna"
                    }, [c._v("01")]), v("span", {
                        staticClass: "intro__counter__static"
                    }, [c._v("/03")])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("form", {
                        staticClass: "name"
                    }, [v("input", {
                        staticClass: "input-name",
                        attrs: {
                            type: "text",
                            maxlength: "10",
                            placeholder: "Type your first name",
                            required: ""
                        }
                    }), v("button", {
                        staticClass: "input-name t-color simple-btn",
                        attrs: {
                            type: "submit"
                        }
                    }, [c._v("DONE")])])
                }, function() {
                    var c = this.$createElement,
                        h = this._self._c || c;
                    return h("div", {
                        staticClass: "intro__gallery"
                    }, [h("ul", {
                        staticClass: "intro__gallery__hold e-wp e-hp"
                    }, [h("li", {
                        staticClass: "intro__gallery__travel travel0 no-mobile"
                    }, [h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/a3bbadae-0a3f-4500-9269-0ecdf00dce7b_IMG02_f.jpg?auto=compress,format",
                            "data-id": "img01"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/e9ece587-8b7e-45dc-b930-df5da1670315_IMG05_f.jpg?auto=compress,format",
                            "data-id": "img04"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/2ed01ca6-631b-4a66-b78c-064528820ead_IMG01_f.jpg?auto=compress,format",
                            "data-id": "img02"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/07a05e64-3b0d-4d1f-b1dd-502a7fed46af_IMG04_f.jpg?auto=compress,format",
                            "data-id": "img07"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/e9ece587-8b7e-45dc-b930-df5da1670315_IMG05_f.jpg?auto=compress,format",
                            "data-id": "img04"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/a3bbadae-0a3f-4500-9269-0ecdf00dce7b_IMG02_f.jpg?auto=compress,format",
                            "data-id": "img01"
                        }
                    })]), h("li", {
                        staticClass: "intro__gallery__travel travel1"
                    }, [h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/e9ece587-8b7e-45dc-b930-df5da1670315_IMG05_f.jpg?auto=compress,format",
                            "data-id": "img04"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/e2bb5410-968f-49c4-9d9c-ac4d349fe717_IMG06.jpg?auto=compress,format",
                            "data-id": "img06"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/e9ece587-8b7e-45dc-b930-df5da1670315_IMG05_f.jpg?auto=compress,format",
                            "data-id": "img09"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://prismic-io.s3.amazonaws.com/victorwork/a484708f-4caa-45e1-b88a-ba9fcb57d6c8_intro_video.mp4",
                            "data-id": "vids"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/07a05e64-3b0d-4d1f-b1dd-502a7fed46af_IMG04_f.jpg?auto=compress,format",
                            "data-id": "img07"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/e9ece587-8b7e-45dc-b930-df5da1670315_IMG05_f.jpg?auto=compress,format",
                            "data-id": "img04"
                        }
                    })]), h("li", {
                        staticClass: "intro__gallery__travel travel2 no-mobile"
                    }, [h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/07a05e64-3b0d-4d1f-b1dd-502a7fed46af_IMG04_f.jpg?auto=compress,format",
                            "data-id": "img07"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/a3bbadae-0a3f-4500-9269-0ecdf00dce7b_IMG02_f.jpg?auto=compress,format",
                            "data-id": "img01"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/2ed01ca6-631b-4a66-b78c-064528820ead_IMG01_f.jpg?auto=compress,format",
                            "data-id": "img02"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/e9ece587-8b7e-45dc-b930-df5da1670315_IMG05_f.jpg?auto=compress,format",
                            "data-id": "img09"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/ee76257a-98b5-4b63-9f56-2a20309a8553_IMG03.jpg?auto=compress,format",
                            "data-id": "img03"
                        }
                    }), h("div", {
                        staticClass: "intro__gallery__each",
                        attrs: {
                            "data-imgsrc": "https://images.prismic.io/victorwork/ee76257a-98b5-4b63-9f56-2a20309a8553_IMG03.jpg?auto=compress,format",
                            "data-id": "img03"
                        }
                    })])])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("span", {
                        staticClass: "intro__tuto__lets"
                    }, [c._v("Hey "), v("span", {
                        staticClass: "dyna-name"
                    }, [c._v("UserName")])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "intro__tuto__place subt_custom"
                    }, [v("span", [c._v("Dashboard & Footer:")])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "intro__explore__percnts e-flex e-abs"
                    }, [v("span", {
                        staticClass: "intro__explore__numb js-explore"
                    }, [c._v("0")]), v("span", {
                        staticClass: "intro__explore__symbol"
                    }, [c._v("%")])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "intro__explore__click e-flex"
                    }, [v("span", [c._v("Click to get your prize")])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "intro__tuto__place subt_custom"
                    }, [v("span", [c._v("Dashboard")])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "intro__tuto__place subt_custom"
                    }, [v("span", [c._v("Dashboard & Footer")])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "intro__tuto__place subt_custom"
                    }, [v("span", [c._v("Your Playlist")])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "subt"
                    }, [v("span", [c._v("We're done")])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "intro__tuto__place subt_custom"
                    }, [v("span", [c._v("Let's get started")])])
                }], !1, null, null, null);
            h.default = component.exports;
            installComponents(component, {
                SvgVW: v(320).default,
                SvgExpertise: v(321).default,
                SvgAnimations: v(322).default
            })
        },
        315: function(c, h, v) {
            "use strict";
            v.r(h);
            var m = v(5),
                e = v(6),
                t = (v(11), v(2)),
                z = v(10);
            t.a.registerPlugin(z.a);
            var r = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function() {
                            var c = document;
                            this.qsa = function(s) {
                                var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
                                return h.querySelectorAll(s)
                            }, this.qs = function(s) {
                                var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
                                return h.querySelector(s)
                            }, this.modal_app = {
                                el: this.qs(".modal-apps"),
                                dots: this.qsa("li.modal-apps__nav__dot"),
                                each: this.qsa("li.modal-apps__each")
                            }, this.modal_app.dots[0].classList.add("current-app"), this.modal_app.each[0].classList.add("current-app"), this.onClickDot()
                        }
                    }, {
                        key: "onChangeApp",
                        value: function(element) {
                            var c = [].indexOf.call(this.modal_app.dots, element.target);
                            this.modal_app.dots.forEach((function(c) {
                                c.classList.remove("current-app")
                            })), this.modal_app.each.forEach((function(c) {
                                c.classList.remove("current-app")
                            })), this.modal_app.dots[c].classList.add("current-app"), this.modal_app.each[c].classList.add("current-app")
                        }
                    }, {
                        key: "onClickDot",
                        value: function() {
                            var c = this;
                            this.modal_app.dots.forEach((function(h) {
                                h.addEventListener("click", c.onChangeApp.bind(c), null)
                            }))
                        }
                    }]), c
                }()),
                n = {
                    props: ["apps"],
                    methods: {
                        closeModal: function(c) {
                            document.querySelector("body").classList.remove("is-fader"), document.querySelector(".modal-apps").classList.add("modal-closed")
                        }
                    },
                    mounted: function() {
                        r.init()
                    }
                },
                o = v(15),
                component = Object(o.a)(n, (function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "modal-apps modal-closed"
                    }, [v("div", {
                        staticClass: "modal-apps__hold e-flex-col"
                    }, [v("div", {
                        staticClass: "modal-apps__nav e-flex bnt"
                    }, [v("button", {
                        staticClass: "modal-apps__close btn-close e-flex e-rel",
                        attrs: {
                            "aria-label": "close modal"
                        },
                        on: {
                            click: c.closeModal
                        }
                    }, [v("div", {
                        staticClass: "btn-close__line line1"
                    }), v("div", {
                        staticClass: "btn-close__line line2"
                    })]), v("div", {
                        staticClass: "modal-apps__nav__list"
                    }, [v("ul", {
                        staticClass: "e-rel e-flex"
                    }, c._l(c.apps, (function(c) {
                        return v("li", {
                            staticClass: "modal-apps__nav__dot"
                        })
                    })), 0)])]), v("ul", {
                        staticClass: "modal-apps__ctn e-flex"
                    }, c._l(c.apps, (function(h) {
                        return v("li", {
                            staticClass: "modal-apps__each"
                        }, [v("div", {
                            staticClass: "modal-apps__ctn__img"
                        }, [v("img", {
                            staticClass: "img-load",
                            attrs: {
                                "data-src": h.img.url,
                                alt: ""
                            }
                        })]), v("div", {
                            staticClass: "modal-apps__ctn__infos"
                        }, [v("span", {
                            staticClass: "period"
                        }, [c._v(c._s(h.period))]), v("span", {
                            staticClass: "name"
                        }, [c._v(c._s(h.app_name))])])])
                    })), 0)])])
                }), [], !1, null, null, null);
            h.default = component.exports
        },
        316: function(c, h, v) {
            "use strict";
            v.r(h);
            var m = v(2),
                e = v(83),
                t = v(33),
                z = {
                    props: ["rewards"],
                    methods: {
                        changeColor: function(c) {
                            var h = c.target.closest("li").dataset.mood,
                                v = c.target.closest("button"),
                                z = v.dataset.color1,
                                r = v.dataset.color2,
                                n = v.dataset.bgholder;
                            m.a.delayedCall(1.2, (function() {
                                var v = document.querySelector(":root");
                                v.style.setProperty("--dark", z), v.style.setProperty("--soft", r), v.style.setProperty("--bgHolder", n), c.target.closest("ul.intro__custom__mood__btns").classList.add("no-touch"), t.a.createWipeDark(), "canada" == h && (v.style.setProperty("--color", "#8C0000"), t.a.createWipeColor()), "brazil" == h && (v.style.setProperty("--color", "#0049a3"), t.a.createWipeColor()), "dark" == h && (v.style.setProperty("--white", "#ffffff"), v.style.setProperty("--bgFooterOpac", "#ffffff"), v.style.setProperty("--lineColor", "rgba(255, 255, 255, 0.2)"), v.style.setProperty("--color", "#cbb58e"), t.a.createWipeColor())
                            })), m.a.delayedCall(2, (function() {
                                c.target.closest("ul.intro__custom__mood__btns").classList.remove("no-touch")
                            })), e.a.playDraw()
                        },
                        toColors: function(c) {
                            var h = c.target.closest(".reward");
                            h.classList.remove("to-cupon"), h.classList.add("to-colors")
                        },
                        toCupon: function(c) {
                            var h = c.target.closest(".reward");
                            h.classList.remove("to-colors"), h.classList.add("to-cupon")
                        },
                        closeRew: function(c) {
                            document.querySelector("body").classList.remove("is-rewards")
                        }
                    },
                    mounted: function() {
                        e.a.setDraw(this.$el)
                    }
                },
                r = v(15),
                component = Object(r.a)(z, (function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "reward e-fixed e-wvw e-hvh e-abs e-flex-col to-colors"
                    }, [v("div", {
                        staticClass: "reward__fader e-fixed e-wvw e-hvh e-abs"
                    }), v("div", {
                        staticClass: "reward__hold e-rel"
                    }, [v("div", {
                        staticClass: "reward__header e-flex-col"
                    }, [v("h1", {
                        staticClass: "reward__congrats t-center t-sansbold"
                    }, [c._v(c._s(c.rewards.rews_congrats))]), v("h1", {
                        staticClass: "reward__went t-center"
                    }, [c._v(c._s(c.rewards.rews_went))])]), v("ul", {
                        staticClass: "reward__contents e-rel"
                    }, [v("li", {
                        staticClass: "reward__item reward__contents__colors e-flex-col"
                    }, [v("prismic-rich-text", {
                        staticClass: "rich-t subt-p reward__subt reward__subt__colors",
                        attrs: {
                            field: c.rewards.rews_subt_colors
                        }
                    }), v("ul", {
                        staticClass: "intro__custom__mood__btns"
                    }, c._l(c.rewards.rews_colors_group, (function(h) {
                        return v("li", {
                            class: "mood-" + h.mood_id,
                            attrs: {
                                "data-mood": h.mood_id
                            },
                            on: {
                                click: c.changeColor
                            }
                        }, [v("button", {
                            staticClass: "input-mood",
                            attrs: {
                                "aria-label": "switch mode",
                                "data-color1": h.color_1,
                                "data-color2": h.color_2,
                                "data-bgholder": h.color_bgholder,
                                "data-mood": h.mood_id
                            }
                        }, [v("span", [c._v(c._s(h.mood_id))]), v("svg", {
                            attrs: {
                                width: "100%",
                                viewBox: "0 0 34 34",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [v("circle", {
                            attrs: {
                                cx: "16.7715",
                                cy: "16.7715",
                                r: "11.8592",
                                transform: "rotate(45 16.7715 16.7715)",
                                fill: h.color_display1
                            }
                        }), v("path", {
                            attrs: {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M8.38574 8.38672C3.75454 13.018 3.75458 20.5268 8.38586 25.1581C13.0171 29.7894 20.5259 29.7894 25.1572 25.1582L8.38574 8.38672Z",
                                fill: h.color_display2
                            }
                        })])])])
                    })), 0)], 1), v("li", {
                        staticClass: "reward__item reward__contents__cupon e-flex-col"
                    }, [v("prismic-rich-text", {
                        staticClass: "rich-t subt-p reward__subt reward__subt_cupon",
                        attrs: {
                            field: c.rewards.subtitle_cupon
                        }
                    }), v("prismic-rich-text", {
                        staticClass: "rich-t subt-p reward__instruc",
                        attrs: {
                            field: c.rewards.instruction_cupon
                        }
                    }), c._m(0)], 1)]), v("div", {
                        staticClass: "reward__navtabs e-flex"
                    }, [v("div", {
                        staticClass: "reward__navtabs__each",
                        on: {
                            click: c.toColors
                        }
                    }, [v("div", {
                        staticClass: "point trg-colors"
                    })]), v("div", {
                        staticClass: "reward__navtabs__each",
                        on: {
                            click: c.toCupon
                        }
                    }, [v("div", {
                        staticClass: "point trg-cupon"
                    })])]), v("div", {
                        staticClass: "reward__close",
                        on: {
                            click: c.closeRew
                        }
                    }, [c._m(1)]), v("svg", {
                        staticClass: "svg-cover e-abs e-wp e-hp",
                        attrs: {
                            width: "100%",
                            height: "100%"
                        }
                    }, [v("rect", {
                        staticClass: "rect-bg",
                        attrs: {
                            width: "100%",
                            height: "100%",
                            rx: "17",
                            fill: "transparent"
                        }
                    }), v("rect", {
                        staticClass: "border-hovers rect-border",
                        attrs: {
                            fill: "transparent",
                            x: "0.5",
                            y: "0.5",
                            width: "100%",
                            height: "100%",
                            rx: "16.5",
                            stroke: "var(--color)",
                            "stroke-width": "1.5"
                        }
                    }), v("rect", {
                        staticClass: "border-hovers rect-border2",
                        attrs: {
                            fill: "transparent",
                            x: "0.5",
                            y: "0.5",
                            width: "100%",
                            height: "100%",
                            rx: "16.5",
                            stroke: "var(--color)",
                            "stroke-width": "1.5"
                        }
                    })])])])
                }), [function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "reward__code"
                    }, [v("span", [c._v("USERNAMEX-20220404")])])
                }, function() {
                    var c = this.$createElement,
                        h = this._self._c || c;
                    return h("button", {
                        staticClass: "btn-close e-flex",
                        attrs: {
                            "aria-label": "close rewards"
                        }
                    }, [h("div", {
                        staticClass: "btn-close__line line1"
                    }), h("div", {
                        staticClass: "btn-close__line line2"
                    })])
                }], !1, null, null, null);
            h.default = component.exports
        },
        317: function(c, h, v) {
            "use strict";
            v.r(h);
            var m = {
                    props: ["menufs", "socials"],
                    methods: {
                        addReset: function(c) {
                            c.target.closest(".menu-fs__close__profile__version").classList.toggle("active-reset")
                        }
                    },
                    computed: {},
                    mounted: function() {}
                },
                e = v(15),
                component = Object(e.a)(m, (function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("nav", {
                        staticClass: "menu-fs"
                    }, [v("div", {
                        staticClass: "menu-fs__bg"
                    }), v("div", {
                        staticClass: "menu-fs__close"
                    }, [c._m(0), v("div", {
                        staticClass: "menu-fs__close__profile"
                    }, [v("div", {
                        staticClass: "menu-fs__close__profile__name t-sansbold"
                    }), v("div", {
                        staticClass: "menu-fs__close__profile__version e-flex"
                    }, [v("span", {
                        staticClass: "profile__version t-sansbold"
                    }), v("div", {
                        staticClass: "version__reset e-flex e-curp",
                        on: {
                            click: c.addReset
                        }
                    }), v("div", {
                        staticClass: "confirm__reset e-flex e-curp"
                    }, [v("div", {
                        staticClass: "confirm__reset__hold e-rel e-flex e-curp"
                    }, [v("svg", {
                        attrs: {
                            width: "17",
                            viewBox: "0 0 17 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("path", {
                        attrs: {
                            d: "M7.61976 0.576271C8.01098 -0.192091 8.98902 -0.19209 9.38024 0.576271L16.8623 15.2712C17.2535 16.0395 16.7645 17 15.9821 17H1.01793C0.235495 17 -0.253529 16.0395 0.13769 15.2712L7.61976 0.576271Z",
                            fill: "white"
                        }
                    })]), v("span", [c._v("Do you want to reset your profile?")]), v("button", {
                        staticClass: "clear-storage"
                    }, [c._v("Yes")]), v("button", {
                        on: {
                            click: c.addReset
                        }
                    }, [c._v("No")])])])])])]), v("div", {
                        staticClass: "menu-fs__hold"
                    }, [v("div", {
                        staticClass: "menu-fs__links"
                    }, [v("ul", {
                        staticClass: "menu-fs__links__hold"
                    }, c._l(c.menufs, (function(h, m) {
                        return v("li", [v("span", [c._v(c._s(m + 1))]), null == h.link ? [v("NuxtLink", {
                            attrs: {
                                to: "/",
                                title: "VICTOR WORK"
                            }
                        }, [c._v("HOME")])] : [v("NuxtLink", {
                            attrs: {
                                to: "/" + h.link,
                                title: h.text
                            }
                        }, [c._v(c._s(h.text))])]], 2)
                    })), 0)]), v("div", {
                        staticClass: "menu-fs__socials no-desk"
                    }, [v("ul", {
                        staticClass: "menu-fs__socials__hold"
                    }, c._l(c.socials, (function(h, m) {
                        return v("li", [v("a", {
                            attrs: {
                                href: h.link,
                                target: "_blank",
                                rel: "noreferrer",
                                title: h.text
                            }
                        }, [c._v(c._s(h.text))])])
                    })), 0)])])])
                }), [function() {
                    var c = this.$createElement,
                        h = this._self._c || c;
                    return h("button", {
                        staticClass: "btn-close e-flex",
                        attrs: {
                            "aria-label": "close menufs"
                        }
                    }, [h("div", {
                        staticClass: "btn-close__line line1"
                    }), h("div", {
                        staticClass: "btn-close__line line2"
                    })])
                }], !1, null, null, null);
            h.default = component.exports
        },
        318: function(c, h, v) {
            "use strict";
            v.r(h);
            var m = v(35),
                e = v(72),
                t = {
                    props: ["dash", "socials"],
                    methods: {
                        activeRew: function() {
                            document.querySelector("body").classList.contains("is-complete") && document.querySelector("body").classList.add("is-rewards")
                        }
                    },
                    mounted: function() {
                        e.a.init(this.dash.paths), e.a.setItem($nuxt.$route.path), m.a.init(this.dash.dash_music_group), m.a.onDashMusic(document.querySelector(".dash__music"), this.dash.dash_music_group), m.a.onDashAvail(document.querySelector(".dash__avail")), m.a.onDashHealth(document.querySelector(".dash__health")), m.a.onDashCta(document.querySelector(".dash__cta"), "dash")
                    }
                },
                z = v(15),
                component = Object(z.a)(t, (function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "dash e-dark no-mobile"
                    }, [v("div", {
                        staticClass: "dash__hold e-hold"
                    }, [v("div", {
                        staticClass: "dash__dash"
                    }, [v("div", {
                        staticClass: "dash__music js-music"
                    }, [v("div", {
                        staticClass: "dash__caption"
                    }, [v("span", [c._v(c._s(c.dash.dash_music_caption))])]), v("div", {
                        staticClass: "dash__ctn"
                    }, [v("a", {
                        staticClass: "dash__music__svg e-flex js-music__svg",
                        attrs: {
                            href: "#",
                            target: "_blank",
                            rel: "noreferrer",
                            title: "Spotify"
                        }
                    }, [v("svg", {
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 118 118",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("circle", {
                        attrs: {
                            opacity: "0.11",
                            cx: "59",
                            cy: "59",
                            r: "59",
                            fill: "white"
                        }
                    }), v("circle", {
                        attrs: {
                            opacity: "0.54",
                            cx: "59.0001",
                            cy: "59.0003",
                            r: "26.4744",
                            stroke: "var(--dark)",
                            "stroke-width": "1.51282"
                        }
                    }), v("circle", {
                        attrs: {
                            cx: "58.9999",
                            cy: "58.9996",
                            r: "7.5641",
                            fill: "var(--soft)"
                        }
                    }), v("circle", {
                        attrs: {
                            cx: "31.391",
                            cy: "18.5317",
                            r: "1.89103",
                            fill: "white"
                        }
                    })])]), v("ul", {
                        staticClass: "dash__music__list e-flex"
                    }, c._l(c.dash.dash_music_group, (function(h) {
                        return v("li", {
                            staticClass: "dash__pl js-pl"
                        }, [v("a", {
                            attrs: {
                                href: h.link,
                                target: "_blank",
                                rel: "noreferrer",
                                title: h.playlist
                            }
                        }, [c._v(c._s(h.playlist))])])
                    })), 0)])]), v("div", {
                        staticClass: "dash__health"
                    }, [v("div", {
                        staticClass: "dash__caption"
                    }, [v("span", [c._v(c._s(c.dash.dash_text_health))])]), c._m(0)]), v("div", {
                        staticClass: "dash__cta"
                    }, [v("div", {
                        staticClass: "dash__caption"
                    }, [v("span", [c._v(c._s(c.dash.dash_text_cta))])]), v("div", {
                        staticClass: "dash__ctn"
                    }, [v("ul", {
                        staticClass: "dash__cta__list js-dash-cta__list"
                    }, c._l(c.dash.dash_cta_group, (function(h) {
                        return v("li", {
                            staticClass: "dash__cta__each js-dash-cta__each"
                        }, [v("a", {
                            attrs: {
                                href: h.link,
                                target: "_blank",
                                rel: "noreferrer",
                                title: h.link
                            }
                        }, [c._v(c._s(h.text))])])
                    })), 0), v("ul", {
                        staticClass: "dash__cta__dots"
                    }, c._l(c.dash.dash_cta_group, (function(c) {
                        return v("li", {
                            staticClass: "dash__cta__dot js-dash-cta__dot"
                        })
                    })), 0)])]), v("div", {
                        staticClass: "dash__avail js-avail"
                    }, [v("div", {
                        staticClass: "dash__caption"
                    }, [v("span", [c._v(c._s(c.dash.dash_text_avail))])]), c._m(1)]), v("div", {
                        staticClass: "dash__explore"
                    }, [v("div", {
                        staticClass: "dash__caption"
                    }, [v("span", [c._v(c._s(c.dash.dash_text_exploration))])]), v("div", {
                        staticClass: "dash__ctn"
                    }, [v("div", {
                        staticClass: "dash__explore__svg e-flex trg-rews",
                        on: {
                            click: c.activeRew
                        }
                    }, [v("svg", {
                        staticClass: "svg-explore-circle",
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("circle", {
                        staticClass: "circ-static",
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--white)",
                            pathLength: "1"
                        }
                    }), v("circle", {
                        staticClass: "percent",
                        attrs: {
                            cx: "17",
                            cy: "17",
                            r: "16.5",
                            stroke: "var(--color)",
                            pathLength: "1"
                        }
                    })])]), v("div", {
                        staticClass: "dash__explore__percnts e-flex e-abs e-curp trg-rews",
                        on: {
                            click: c.activeRew
                        }
                    }, [v("span", {
                        staticClass: "dash__explore__numb js-explore"
                    }, [c._v("XX")]), v("span", {
                        staticClass: "dash__explore__symbol js-span-perc"
                    }, [c._v("%")])])])])]), v("div", {
                        staticClass: "dash__links"
                    }, [v("ul", {
                        staticClass: "dash__links__hold"
                    }, c._l(c.socials, (function(h) {
                        return v("li", [v("a", {
                            attrs: {
                                href: h.link,
                                target: "_blank",
                                rel: "noreferrer",
                                title: h.text
                            }
                        }, [c._v(c._s(h.text))])])
                    })), 0)]), v("div", {
                        staticClass: "dash__cta"
                    }, [v("PrimaryButton", {
                        attrs: {
                            link: "/form",
                            text: "START A PROJECT",
                            version: "white"
                        }
                    })], 1)])])
                }), [function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "dash__ctn"
                    }, [v("div", {
                        staticClass: "dash__health__texts e-flex"
                    }, [v("span", {
                        staticClass: "dash__health__numb t-sansbold js-days"
                    }, [c._v("1243")]), v("span", {
                        staticClass: "dash__health__per"
                    }, [c._v("/days")])])])
                }, function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "dash__ctn"
                    }, [v("div", {
                        staticClass: "dash__avail__texts e-flex"
                    }, [v("span", {
                        staticClass: "dash__avail__month t-sansbold js-month"
                    }, [c._v("Month, Here")]), v("span", {
                        staticClass: "dash__avail__year js-year"
                    }, [c._v("/ XXXX")])])])
                }], !1, null, null, null);
            h.default = component.exports;
            installComponents(component, {
                PrimaryButton: v(167).default
            })
        },
        319: function(c, h, v) {
            "use strict";
            v.r(h);
            var m = {
                    props: ["links"],
                    mounted: function() {}
                },
                e = v(15),
                component = Object(e.a)(m, (function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("nav", {
                        staticClass: "menu-fixed e-sans e-flex e-fixed"
                    }, [c._l(c.links, (function(h, m) {
                        return [v("NuxtLink", {
                            attrs: {
                                to: "/" + h.link,
                                title: h.text
                            }
                        }, [c._v(c._s(h.text))])]
                    }))], 2)
                }), [], !1, null, null, null);
            h.default = component.exports
        },
        320: function(c, h, v) {
            "use strict";
            v.r(h);
            var m = v(15),
                component = Object(m.a)({}, (function() {
                    var c = this.$createElement,
                        h = this._self._c || c;
                    return h("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 392 595",
                            "xml:space": "preserve"
                        }
                    }, [h("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                        }
                    })])
                }), [], !1, null, null, null);
            h.default = component.exports
        },
        321: function(c, h, v) {
            "use strict";
            v.r(h);
            var m = v(15),
                component = Object(m.a)({}, (function() {
                    var c = this.$createElement,
                        h = this._self._c || c;
                    return h("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 390.8 565.1",
                            "xml:space": "preserve"
                        }
                    }, [h("path", {
                        attrs: {
                            d: "M234 528c-1.2 2.6-2.9 4.8-3.3 7.7-.5 4.1-1 8.7-6.9 10.9-.8.3-1.2.9-1.3 1.6-.3 1.6-1.8 2.3-3.4 2-3.5-.7-7-.4-10.7-.5-1-3-4.2-2.9-7-2.5-4.8.7-9.6 0-14.5.9-2.9.5-6.4-.8-10-.3-.1 3.1-2.8 2.7-5.7 2.9-5.8.5-10.6-1-15.1-3.6-1.9-1.1-1.4-3.9-4.6-4 .1 7.5 4.5 15-1.1 22.2-3.8-.4-6.8-3.8-5.3-6.2 3.5-5.4 1-10.8.4-16.1-.1-1.2-.5-2.3-.1-3.5.5-1.4-.7-2.2-2.2-2.7-6.2-2.1-9.6-7.4-10.3-12.6-1.2-8.7 2.7-16 8.4-23 .9-1.1 1.9-1.9 4.2-1.6-4.1 5.1-8.7 9.9-9.7 15.9-.9 5.7-1.5 11.5 3.2 16.4-4.1-11.9-1.3-22.4 9.3-31.5h2.7c.5-1 .1-1.4-1.1-1.7-.5.3-1.1.7-1.8 1.1-1.2-.4-2.7-.6-3.1-2.1l3-1.5c.9.1 1.7.3 2.5.4.7-.8.2-1.3-.5-1.5-5.2-1.6-3.4-4.4-1.6-6.8 3.9-5.4 4.9-11.6 7.4-17.3 1.1-2.4 3-4.8 2.8-7.6-1.9-.9-4.1.5-6-1 1.5-3.2 9.8.8 8.7-5.3-3.6-2.4-4-5.3.2-8-4.2-5.3-8.5-10.4-12.4-15.6-5.6-7.5-11-15.1-16.4-22.7-5-6.9-10-13.8-15.1-20.7-8.8-12.1-17.5-24.2-26.2-36.3-6.5-8.9-12.8-17.9-19.4-26.8-6.6-9-13.4-17.9-19.9-26.9-8-11.1-16-22.2-23.7-33.4-6.9-10.2-13.4-20.5-18.3-31.5-4.4-9.8-6.4-20-8.7-30.2-1.8-8-1.7-16.1-1.3-24 .4-8.3 2.1-16.7 4.8-25 2.9-9.2 6.5-18.1 11-26.9 2.1-4.1 4.9-7.9 7.6-11.8.9-1.3.2-2.6 1.1-3.9 3.7-.7 4.1-3.6 6-5.6 7.5-8.1 15-16.2 23.9-23.5 9.9-8.1 21.1-15 33.1-20.8 12.1-5.8 22.9-13 34.5-19.3 7.3-3.9 14.3-8.1 21.7-11.9 7.6-3.9 14.9-8.2 22.3-12.3 4.9-2.7 9.9-5.5 14.7-8.1.1-1.7-1.7-2.1-2.7-3.8 4.6-3 10-5.1 15.6-7.9 5.2 2.6 11.8 3.7 15.4 8.1-.4 1.8-2.4 1.8-3.6 3.1 2.4 1.8 4.7 3.6 7.2 5.3 4.9 3.3 10.4 5.7 15.8 8.4 6.6 3.3 13.2 6.7 19.7 10.1 9.7 5.2 19.1 10.9 29.2 15.4 7.6 3.4 15.8 6.2 23.3 9.9 5.4 2.7 10.6 5.6 15.7 8.6 1.1.7 1.7 1.9 2.4 2.8 5.1 1 7.9 4.3 11.4 6.8 10.6 7.4 19.9 15.7 28 24.8 6.9 7.9 12.6 16.3 17.4 25.1 9.1 17 14.1 34.7 15.1 53.2.6 10.5-1.1 20.6-3.5 30.8-2.3 9.7-5.2 19.3-10.6 28.2-.7 1.2-.4 2.2.3 3.5-13.2 18.3-26.5 36.6-39.8 55 .9.6 1.5 1 2.3 1.6-.6.6-1.2 1.1-1.9 1.8-.5-.9.5-2-1-2.7-1.7 2.3-3.4 4.5-5 6.8-3.8 5.4-7.6 10.9-11.5 16.2-5.2 7.1-10.5 14.1-15.8 21.2-8.9 12-17.9 24-26.7 36-9.2 12.6-18.2 25.2-27.5 37.7-7 9.5-14.1 18.8-21.2 28.2-1.3 1.7-1.9 3.2-.9 5.2 1.4 2.6.3 4.6-3.2 5.6-1 .3-1.7.7-1.9 1.6 0 .8.7 1.1 1.7 1.6.9-.3 2-.7 3.3-1.1.9 0 2.1.2 3.2.9 0 3.4-4.3 1.8-6.7 4 5.1 8.8 3.2 20 13.3 28.2 3.9-.1 5.2 2.6 7.3 4.7 5.4-.4 8.7-5.6 15.1-4.3 1.4 2.1 2.2 3.8-1.7 5.1-4.2 1.5-8.1 3.6-12 5.3 1.4 5.7 11.8 19.7 14.6 19.2-.1-3.1 6.6-6.1.1-9.3.4-1.5 2.3-2.5 1.2-4-2.4-.5-.6 3.2-4 2 .7-2.5-1-5.1-.8-8.3 5.7 2.2 10.5 4.2 12.3 9 1.9 5.2-.9 12.7-6.9 16.3-10.3 5.9-12 6.9-28.8.2zm106.7-343.1c1.4-.2 2.8-.5 4.1-.7.9-1.2.3-1.8-1.3-1.9-1.4.6-2.2 1.6-2.8 2.6-.8.4-1.7.8-2.9 1.3.8.6.6 1.8 2.7 1.9-.5-1.1-.3-2.1.2-3.2zM70.6 100l2.7-.3c.8-.8 2.3-1.2 2.5-2.5-1.3-.6-2.6-.3-3.9-.1-.7 1-1.9 1.7-1.3 2.9-2.2-.3-2.1 1.7-3.5 2.1.3.8.7 1.2 1.7 1.3.6-.5 1.2-1.1 1.8-1.7V100zm266.5 109.8c1 2.3-1 4.1-3.1 6.6 3.6-1 3.3-3.3 5.3-3.8.1-1.5-.8-2.3-2.2-2.8.4-1.1.4-2.1-1.1-2.7-1.1.1-2.2.2-3.2.4-.8.8-.7 1.5.3 2.4 1.2-.1 2.6-.1 4-.1zM173 309.4c.6-.7.9-1.5.8-2.3-.7-.5-1.3-1.1-2.5-.8-.2 1.3-.4 2.5 1.7 3.1-.4.4-.8.9-1.4 1.5 1.7 1.2-1.1 3.1 1.5 4.2 1.5-.6 3.6-.5 4.5-2.3-1.1-.1-2.1-.2-2.8-.3-1.3-1 .5-2.8-1.8-3.1zm135.2-30.2c.1-.5.7-1.1-.1-1.6-1.1-.2-1.7 0-1.6 1.3.5 0 1.1.1 1.7.3-.5.4-1 .9-2 1.8 3.9-.3 7-.6 11.4-.9-1.9-.7-2.6-.9-3.5-1.2 1.1-1.3 2.7-.4 4-1 .3-.4.5-.9-.1-1.3-4-.6-6.3 2.3-9.8 2.6zm8.9-53.3c-.8 2.7-5.2 3.8-4.9 7l-2.1 1.5c-.1.6-.2 1.2 1 1.5.9-.5 1.8-1.1 2.8-1.7v-1.8c2.1-1.8 4.7-3.2 4.7-5.9-.5-.1-1-.4-1.5-.6-1.3-3.3 4.3-3.8 4.8-6.6-4.7.6-13.6 9.3-12.1 11.5 2.9-1.2 3.9-4.2 7.3-4.9zm-276.9-7.5c.1.8.3 1.6.4 2.7-2.1-.2-2.1 1.3-3.1 1.9-.7 0-1.4.1-2.1.1 0 1 .5 1.6 1.7 2 3.4-1 4.6-3.2 5-6-.6-.1-1.3-.4-1.9-.7-.2-.7-.3-1.4-.4-2.1.7-.2 1.3-.5 2.2-.8-2.3-1.8-4-1.1-5.7.5-.8-1-1.4-1.8-2-2.5 1.1-1.1 2.4-.4 3.7-.9.4-.4 1-.9.6-1.8-1-.3-2-.6-3-1-3.8 1.1-2.9 3.7-3.5 6 3.4.1 5.1 2.6 8.1 2.6zm186.7 215.3c3.1-1.6 3.1-4.4 4.4-6.7 4-7.1 8.3-14.2 12.5-21.3.4-.7.3-1.3-1.6-1.7l-15.3 29.7c-.1 1-2 1.8-.6 3.3 1.4-1.1 1.3-2.1.6-3.3zm51-181.8c.5-.5.8-1 .4-1.6-5.8-.8-8.5 0-8.7 2.8 3.1.8 5.7-.1 8.3-1.2.2.5.4 1 .5 1.4 1.1.5 2.2-.4 3.3.9-5.1.1-9.7.7-12.5 4 5.2 1.3 9.5-.1 13.3-2.7 0 1.6-2 2.5-2.6 4-5.7.2-8.6 5-14.8 5-2-1.3-4-1-5.5 1.7 2.9-.1 5.8 1.8 7.7-1.4 1 .8 1.6 1.4 2.5 2.1-1.7 1.9.2 3.6-.1 5.7 3 .7 3.8-.8 4.7-2.2-1.3-1.5-2.4.4-3.9-.4 2.2-2.3 7.8-1.5 8-5.5-2.6.1-4.5 1.8-8 1.5 5.9-2.9 13.1-3.4 14.5-9.8-.2-.5-1-1.1-2.5-.7 2-1.7 4.2-3.4 1.2-5.9-1.6 1.4-3.9 1.5-5.8 2.3zM240.9 58c6.9-.3 13.7-.6 20.6-1-.1-.9-.1-1.4-.1-1.9 1.2-.4 2.3-.7 3.4-1-10.2-.9-20.3-1-30.5-.5 0-.4 0-.8-.1-1.2h21.3c.1-.6.1-1.2.2-1.9-7.7-.7-15.8.8-23.4-1.1 6.5-.7 13.1.8 19.4-.7v-1h-25.3c-1.3-.9-1.2-1.3-.7-1.8 2.6-.4 5.2.5 7.7-.9h-10.6c-.1-.4-.3-.7-.2-.9.1-.3.4-.5.5-.6 6 .1 11.7 1.2 18.8.4-3.9-2.1-7.3-1.2-10.6-1.9 3.6-1.8 7.8.6 11-1.2 0-.4 0-.8-.1-1.2h-27.6v-1.1h17.5c0-.4.1-.7.1-1.1-7.8-.9-15.8.3-23.7-.5.3-2-1.6-3.5-.9-5.3h15.2c-.3-.8-.4-1.3-.6-1.8.4-.5.7-.9 1.1-1.4-3.3-1.1-2.6 2.7-5.6 2.1-.8-.8-2.6.3-3.9-.6-.3-.7-.5-1.3-.7-1.9-2.5-.4-1.6 1.2-2.1 1.9-.8.2-1.4.3-2.1-.3.5-.7 1.1-1.5 1.6-2.1 1-.3 1.8-.6 2.6-.9.3-.6.5-1.2.7-1.7 1.1-.3 2.5-.4 1.9-1.7-.9-.5-1.6-.3-2.3.1-1.2 1.9-9.7 2.8-12.8 1.3 1.4-1.2 3.2-.4 4.7-.4 3.6-.1 3.6.1 3.7-1.4h-11.8c2.6-2.4 5.9.3 7.6-1.8 0-.6-.3-1-.9-1.3-5.8.3-11.4.5-17.1.8 2.9-1.8 6-2.1 9.2-1.7.9-1.4 2.5-2.6.9-4.4-1.4-.1-2.2-1.1-3.3-1.9-4.4.2-9.1-.5-13 1.6-12.1 6.5-24.3 12.9-36.1 19.7-12.4 7.1-25.3 13.7-37.1 21.4-1.8 1.2-4 2.3-5.1 4.3 12.3 2.2 24.5 2.9 36.5 4.5.6.6 1.1 1 2.5 2.4 10.2 0 21.2-.3 32.2.1 11 .4 21.9.2 32.8-.2 5-.2 10-.4 16.4-.7 6.9-1.5 15.6-1.3 23.8-2.6.4-.8.6-1.3.8-1.7 1.2-.5 2.2-1 3.5-.7.5.5 1 .9 1.9 1.7.3-1.2 1-1.5 2.1-1.6 4-.5 7.9-1.2 11.9-1.8 1.4-.2 1.7-.7.9-1.7-.9.5-1.5.8-1.2.6-8.9 1.1-16.8 1.2-25.8 1.4.2.1-.1-.3.3-1.2zm-47.7 181.7c4.1-3.6 5.4-7.6 7.7-11.2 2.4-3.7 3.6-7.8 5.3-11.7 2.3-5.4 4.7-10.8 4.7-16.6.1-15.9-.7-31.9.4-47.8.1-.8.4-1.8-1.4-2.3-1.9 3.3-3.6 6.7-5.8 9.8-6.5 9.1-11 19-15.7 28.7-1.9 4-2.6 8.2-4.8 12.1-1.9 3.2-2.8 6.6-2.1 10.1 1.4 6.8 4.5 13.3 7.2 19.8 1.1 2.8 2.7 5.7 4.5 9.1zm45-83.2c-4 4.4-6.5 9.4-9.6 14.1-6.1 8.9-7.7 19.2-12.6 28.5-2.7 5.2-3.9 10.7-1.9 16.1 2.4 6.5 6.1 12.7 10.3 18.7.9 1.2 1.4 3 4.5 3 6.8-9.4 10.9-19.5 11.5-30-.7-1-2.1-.6-2.2-1.7.6-.3 1.3-.6 1.6-.8 3.6-16.2.4-32-1.6-47.9zm-23.5 179.3c-1.6 18.4-2.9 36.6-5 54.8-2.2 18.2-3.2 36.5-5.2 54.9 2.3-.5 29.3-109.7 28.2-112.2-5.9.8-11.8 1.6-18 2.5zm-4.5-215c-1.3.7-1.7.9-1.9 1.1-7.8 9-15.7 17.8-23.2 26.9-2.4 3-5.6 5.7-5.9 9.7-.4 5.9.1 11.7-.1 17.5-.2 6.7-.1 13.3.2 20 0 .9.1 1.8 2 1.9.1-.5.4-1 .4-1.5.2-4.4 3.6-8 5-12.1 1.7-4.9 4.8-9.5 7.5-14.1 3.7-6.4 7.7-12.7 11.4-19 1.8-3.1 5.9-5.5 5-9.3-1.1-4.5-.4-8.9-.6-13.4.1-2.3.2-4.6.2-7.7zm39.9 209.9c-2.9-.3-8.3.8-14.1 2.6-9 36.8-18 73.9-27 110.8 2 1.3 2 1.3 4 .9 12.3-38 24.7-76.1 37.1-114.3zm-108.9.3c2 5.8 3.7 11.1 5.6 16.5 3.4 9.9 6.8 19.8 10.2 29.6 2.2 6.3 4.4 12.6 6.5 18.9 2.5 7.5 4.8 15.1 7.4 22.7 1.5 4.1 3.4 8.2 5 12.3 1.6 3.9 2.7 8 4.2 12 .4 1.2 1.1 2.6 3.6 2-.5-1.8-.9-3.5-1.4-5.1-2.1-6.7-4-13.6-5.3-20.4-1.6-8.5-4.8-16.8-5.7-25.4-.5-4.9-2.8-9.6-4-14.5-3.3-13.8-6.4-27.5-9.6-41.3-.4-1.6-.3-3.9-2.6-4.5-4.3-1.2-8.8-1.8-13.9-2.8zm118.2-135.9c4.2-1.1 8.9.2 12.9-1.2.4-1.1.1-1.7-1.2-2.1-.8.2-1.6.4-2.3.6-1-.3-1.4-.7-1-1.4 1.2-.8 2.3.4 3.6.2 1.2-1 1.1-2 .1-3.2-1-.1-2-.2-2.8-.2-.7-.5-.8-1-.2-1.6.8 0 1.6.1 2.7.2-1-8.5-3.6-16.6-6.6-24.8-7.3 13.8-14.7 27.6-19.5 42.2 1.8.5 2.4.6 1.8.5 3.8 9.4 7.4 18.2 10.9 26.8 1.6.2 1.9-.3 2.3-.9 6-10.2 10-20.9 12.2-32 .3-1.4-.5-2.1-2.4-2-2.9.2-5.8.3-8.7.4-1-.1-2-.1-1.8-1.5zm-100.6 139c9.1 37.1 18.1 73.8 27.1 110.7.9.2 1.8.4 3.4.8-5.4-36.8-10.7-73.2-16-109.7-5-.7-9.6-1.2-14.5-1.8zm73.1-210.4c-.9.8-1.4 1.1-1.7 1.5-5.1 5.9-10.2 11.8-15.1 17.9-1.1 1.3-2.2 2.7-2.2 4.6 0 16.3-.2 32.7-.4 49 0 .5-.2 1.1.8 1.4 1.7-.8.8-2.4 1.6-3.5 4.4-6.8 4.8-14.7 9.6-21.4 3.7-5.3 6.4-11 10-16.4 2.2-3.3 3.4-6.4 2.5-10-.9-3.6-1.3-7.2-2.1-10.8-.9-3.9-1.9-7.8-3-12.3zm-14.7 321c.3.1.6.2 1 .4 1.2-1.7 3-3.3 3.6-5.1 2.4-7.5 7-14.2 10.4-21.4 5-10.7 10.7-21.1 16.1-31.7 4.4-8.7 8.7-17.4 13.2-26 4.2-8.1 8.6-16.1 12.5-24.2 1.5-3.1 4.6-6 4.1-9.7 1.8-1.9 2.9-4.1 3.6-6.9-2.7 1.1-4.8 2-6.9 2.9-4.3 1.8-9 2.6-10.4 7.7-2.2 8-6.2 15.7-9.4 23.6-3 7.2-6 14.4-8.9 21.6-2.8 6.9-5.5 13.8-8.3 20.6-3.4 8.3-6.8 16.5-10.2 24.8-2 4.8-3.7 9.6-6.4 14.1-1.8 3-2.7 6.2-4 9.3zM164.1 236c.9-1.2 1.1-1.3 1.2-1.5 1.9-7.4 4.4-14.6 8.2-21.5 2.4-4.2 4.3-8.4 3.7-13.2-.2-2-.5-4.1-.3-6.2.4-4 0-8 0-12.1v-22c-.6.6-1.1 1-1.3 1.4-2.5 5.2-4.6 10.4-7.4 15.5-3.7 6.5-6.7 13.3-9.6 20.1-2.4 5.5-3 11.2-1.2 17.1 1.5 5 3.8 10 4.5 15.2.2 2.2 1.2 4.3 2.2 7.2zm-47-8.4c.3-.7.5-1.2.8-1.8 2.8-6.2 5.5-12.3 8.5-18.4 1-2 3.8-3.5 4.3-5.5 1-4.3 1.5-8.7 1.4-13-.2-10.2 1.8-20.1 4-30 .5-2.1.7-4.3 1-6.3-1.5-.2-1.7.4-2 .9-1 1.8-2.2 3.5-3.5 5.1-5.1 6.7-8.4 14.2-12.4 21.3-3.2 5.8-7.3 11.4-7.7 17.9-.6 9.2 2.5 18.1 4.1 27.1.1.8-.3 1.9 1.5 2.7zM256.3 131c-6.1 7-11.7 14.2-16.1 21.1 2.7 14.7 3.1 28.8 3.7 42.9 1.6 0 1.9-.8 2.2-1.5 1.8-4.1 3.4-8.3 5.5-12.3 3.4-6.3 5-13.1 9.4-19.1 2.2-3.1 3.5-6.7 2.2-10.6-2-6-3.3-12.1-5-18.2-.1-.8-.2-1.7-1.9-2.3zm-79.6 312.6c1.1-1 .4-2 0-3-2.7-7-6.1-13.8-8-20.9-2.3-8.5-5.5-16.8-8.4-25.1-2.9-8.3-5.2-16.8-8.3-25.1-4-10.8-7.2-21.8-10.9-32.7-.7-2.2-1.1-5.2-3-6.1-3.8-1.9-8.5-2.6-13.1-3.8.3 2.6 50.7 116.1 51.7 116.7zm-23.5-283.9c-13.6 18.1-23.8 36.8-17.1 58.4 1.5 4.8 2.9 9.6 4.7 15.4.8-1.4 1-1.7 1.1-2.1 2.1-6.5 4.4-12.9 6.2-19.4 1-3.6 3.9-6.8 3.8-10.6-.3-9.3-.6-18.6.1-27.9.3-4.6.8-9.2 1.2-13.8zm.7 38.8c1.2-1.3 1.7-1.6 1.8-1.9 2.2-6 5.5-11.5 8.4-17.3 3.6-7.4 7-14.9 11.5-22 .6-1 1.9-1.6 2-2.9.1-4.7-.2-9.3.4-14 .5-3.4.1-6.9.1-10.4-1-.1-1.4.4-1.8.8-4.4 4.9-9.3 9.6-13.2 14.7-2.8 3.6-6.9 6.9-7.4 11.3-.9 9.9-2.3 19.9-1.8 29.8.2 3.7 0 7.3 0 11.9zm-96.6 15.1c.9-.1.8-.7 1-1.2 1.9-4.3 3.4-8.8 5.7-13 3.1-5.9 5.7-11.8 7.5-18.1 3.5-12 8-23.8 13.6-35.3 1.2-2.4 1.2-5.1 3.4-7.3-.9-1.5 1.5-3 .2-5.1-1.3 1.6-2.4 3-3.4 4.3-2.9 3.5-6.2 6.9-8.6 10.7-2.7 4.4-5.5 8.7-8.3 13-4.9 7.5-9 15.1-12.5 23-2.2 4.9-4.4 10.1-.6 15.4-3.4 2.1-.3 4.4 0 7-.2.4-.4.9-.6 1.4.9 1.8 1.7 3.5 2.6 5.2zm47.4-76.3c-.7.1-1.1.1-1.3.2-1.8 1.1-1.6 2.9-2.9 4.2-6 6.4-10 13.7-14.8 20.7-3 4.3-5 9.1-7.5 13.6-1.8 3.3-4.2 6.4-5.2 9.8-2 6.7-4 13.5-3 20.6.7 4.6 1 9.3 2.5 13.6 13.6-26.7 21.3-55 32.2-82.7zM196.2 241c6 6.7 7.5 14.5 11.8 21.2 2.2.3 3.7-.5 4.5-1.6 3.5-4.7 6.7-9.5 10.2-14.1 2.7-3.6 3.7-6.9.2-10.9-4.2-4.9-7.4-10.2-9.7-15.9-.7-1.9-1.9-3.6-3.1-6-3.5 10-7.9 19-13.9 27.3zM145 114.6c-8.5 9.4-17.1 17.5-22.5 27.1-4.9 8.7-5.7 18.6-8.6 27.9-1.7 5.5-1.1 11.3-3.4 16.7-.6 1.4.1 3.1-.5 4.6 4.2-7 8.2-14 12.1-21 3.9-7.1 7.9-14.2 13.5-20.7 1.6-1.8 3.6-3.7 3.9-6.3.6-5.9 1.6-11.7 3.6-17.4 1.1-3.2 1.2-6.6 1.9-10.9zm201 167.6c-.3-.2-.6-.4-.9-.5-1.4 1.4-2.8 2.8-4.3 4.2-6.1 5.7-14.3 9.8-18.3 17.1-4.6 8.5-11 16.5-16.4 24.7-6.7 10.1-13.1 20.3-19.8 30.3-9.1 13.5-18.4 26.9-27.6 40.4-3.4 5-6.4 10.1-10.9 15.1-.2.5-.5 1.4-.8 2.4.3.1.6.2.9.4 27.4-37.3 54.7-74.5 82.1-111.8 2.4-3.2 5.1-6.4 6.6-9.7-.1-1.1-1.4-1.5-.5-2.4.5.3 1 .6 1.7 1 2.9-3.7 5.5-7.5 8.2-11.2zm-93.2-41.5c-.2-2.8 4.2-4.1 3.1-7-3.1-8.7-6.1-17.4-10.4-25.8-.3-.7-.7-1.4-2-1l-.3.6c-.6 10-4.8 19.1-9.8 28.1-1.3 2.4-5 4.5-2.8 7.8 1.7 2.6 3.1 5.3 3.8 8.2.6 2.5 2.3 4.8 3.7 7.7 4.3-5.8 8.3-11.2 12.3-16.6-1.4-1.7-3.5-.7-5.2-1-.7-.4-.9-.9-.1-1.8 2.2.3 4.6.5 7.7.8zm-75.6-30c-4.4 7.2-6.3 14.2-9 21.1-.9 2.2-2.6 4.6-.6 7.5 3.2 4.6 7.1 8.8 9.2 13.8 1.2 2.9 3.3 5.6 5.1 8.7.6-.6 1.1-.9 1.4-1.4 1.7-3.4 3.6-6.8 5-10.3 1.4-3.5 4.8-6.8 2-10.9-1.4-2-1.9-4.3-3.3-6.3-1.3-2-1.2-4.5-3.6-6.2-.9.5-1.5.8-2.1 1.1 2.4-3 .7-5.8-.4-8.5s-1.1-5.8-3.7-8.6zm31 125.6c-3.8 1.5-3 3.9-2.8 6.1.5 6.5.3 13 .7 19.5.2 3.7 1.2 7.6-.1 11.3-1.6 4.7-3.3 9.5-9.3 11.8.6 9 1.2 17.6 1.7 26.2.6 10.8 1 21.6 1.6 32.4 0 .8.3 1.4 2.1 1.2 3.5-36.3 6.9-72.6 10.4-109.1-2.2.4-3.4.5-4.3.6zm.3-236.6c-2.4 0-2.4 1.4-3.2 2.1-7.9 6.7-15.1 13.9-22.1 21.2-1.4 1.5-2.7 3.1-2.8 5-.2 4.5-.2 8.9-.3 13.4v8.4c.6-.4 1.2-.6 1.3-.9 2-3.4 5-6.2 7.7-9.2 4.9-5.2 9.1-10.9 14.5-15.7 8.6-7.5 5-16 4.9-24.3zm58.1 57.4c2.4 8.7 4.6 16.9 6.7 24.9 1.9.3 3.5-.6 4.8.5-1.3 1.2-3.3.1-4.6 1.1-.3 1-.3 2 .9 3 1.3-.2 2.7-.4 3.7-.5 1.7-1.1 1.5-2.2 1-3.4 2-1.1 2.4-2.5 2.1-4.1-1.4-.5-2.8 1-3.8-.6 2.1-1.1 7.1.2 5.6-4.2h-7.2c3.1-1.7 5.8-.9 8.2-1.6.8-.8 1.9-1.6 1.2-2.9-2.8-1-6.1.6-8.6-1.2 2.3-.4 4.4-.5 6.6-.4 3 .1 4.4-1.2 3.2-3-1.8.7-3.7 1.1-6 0 2.7-2 8.3.8 8.7-3.6-1.2-1.1-3 .4-4.5-.9 1.7-.4 3.1-.8 4.7-1.3-.2-2.4-.2-4.8-3.3-5.5 1.9-6-2.4-11-3.3-16.5-.4-1.3.2-2.8-1.2-4-5.1 8.3-10.1 16.4-14.9 24.2zM130 206.3c-5.2 8.9-10.6 17.3-11.5 26.3-1 9.5 6.2 17.5 12.9 26 1.3-3.6 2.1-6.6 3.5-9.4 3.2-6.5 5.7-12.9 2.2-19.9-2.2-4.3-4-8.7-4.5-13.4-.3-3-.3-6-2.6-9.6zm89.9 227.2c14.6-35.4 29.2-70.9 43.8-106.5-7.3.3-11 2.4-12.2 6.2-2.3 7.5-4.8 15-7.3 22.5-3.8 11.5-7.6 23.1-11.4 34.6-3.5 10.9-7.1 21.7-10.5 32.6-.9 3.5-2.9 6.8-2.4 10.6zm-25.3-47.7c-2.9 0-4.7.5-6.7 0-2.1-.5-3.2-1.9-5.4-3 3.1 21 6 41.5 9 62h6.4c-1.1-19.8-2.2-39.3-3.3-59zm45.1-237.7c5.4-7.9 12-13.7 16.1-20.8.3-.5.2-1.3 0-1.9-1.1-3.9-2.1-7.8-3.3-11.7-1-3.1-2.4-6.1-3.9-9.8-.8 1.3-1.2 1.9-1.5 2.5-3.9.9-4.2 3.9-6 6.1-3.3 4-8.9 7.4-6.1 13.2.8 1.6 1 3.4 1.3 5.1 1 5.3 2.1 10.7 3.4 17.3zm-136.1 18.7c-1 1.5-1.3 2-1.6 2.5-3.4 6.1-6.5 12.3-10.1 18.4-5.1 8.5-7.9 17-4.5 26.4 1.3 3.6 2 7.3 4.3 10.6 1.3-.2 1.3-.9 1.6-1.5 1.8-3.7 3.9-7.3 5.2-11.1.9-2.6 5-4.4 3.9-7.2-3.5-8.7-1.8-17.2.5-25.8.8-3.7 1.3-7.4.7-12.3zM177.8 271c4.7-6 0-10.9-2.8-16-2.7-5.1-6.3-9.8-10.2-15.1-.9 1.8-1.4 2.9-1.8 3.9-2.9 7.8-9 15.3-4 23.8 1.4 2.4 1 5.9 5.1 6.8 3.6.8 7.5.9 11.3 1.3 1.3-.6 2.3-1.4 1.7-2.9-1-.5-2.8-.3-2.5-2.1 1.1.2 2.3.3 3.2.3zM38.2 186.5c4-3.1 7.1-6.1 11.6-7.8-3 2.6-6 5.1-9.2 7.8-.4.1-1.1.2-1.9.4-.2 1.1-1 2.1.5 3.1.4-.1.9-.2 1.2-.4 4.6-3.5 8.1-7.8 14.2-9.9.3-.1.5-.6.5-.9 1-5.5 3.5-10.8 5.5-16.1 3.9-10.5 9.1-20.6 14.8-30.6 1.1-2 3.1-3.8 3-7.1-12.5 14.6-24.8 28.3-31.9 44.3-2 2-4.5 3.9-3.9 7.4 1.8-1.1 3.4-2 4.9-2.9-3 4-9.1 6.5-9.3 12.7zM158 126.9c-.5.2-.9.3-1.1.6-4.2 4.8-8.5 9.6-12.7 14.5-1.8 2.1-3.8 4-4.2 6.7-1.8 10.3-3.7 20.7-5.4 31-.3 2-.3 4-.4 6.2 2-.5 2.3-1.7 2.4-2.6.8-5.8 4.7-10.8 7.8-15.9 2.7-4.6 6.3-8.9 9.4-13.4 1.8-2.7 1-5.9 2-8.7 1.9-5.6 1.2-11.4 2.7-17 .1-.5-.3-.9-.5-1.4zm84.3 276.7c3.2-.1 53.6-85.7 53.2-89.5-3.4 2.6-8.6 2.5-10.6 6.1-3.3 6.1-6.5 12.4-9.7 18.5-5 9.7-10.1 19.4-14.9 29.2-1.7 3.4-3.9 6.6-4.4 10-5.6 8.3-8.3 17.2-13.6 25.7zm-99.9-165.2c4.9 6 8 12.5 12.7 19.5 1.7-5 2.5-9.2 4.5-13 .9-1.8 3-3.4 2.5-5.5-2.5-9.2-5.1-18.3-7.7-27.5-.2-.7-.3-1.4-2-1.8-4.7 9.1-7.2 18.7-10 28.3zm17.8 206.2c.4-.2.8-.3 1.2-.5-.6-1.1-1.2-2.1-1.7-3.2-1.6-3.7-4.9-6.6-7.2-9.9-8-11.4-16.1-22.8-24.2-34.2-8.5-11.9-17.1-23.7-25.6-35.6-6.5-9.1-12.8-18.2-19.2-27.4-6.3-9-12.6-18.1-19.1-27-5.2-7.2-9.6-14.8-16.2-21.4-1.2-1.2-2.6-2.1-5.2-2 39.2 53.9 78.2 107.5 117.2 161.2zm-9.3-169.1c-.1-2.2.8-4.3 1.2-6.3.5-2.9 2.2-5.8.7-8.7-2.7-5.4-5.7-10.7-8.7-16-.7-1.3-2-2.4-3.2-3.7-.5.7-.8 1-.9 1.3-2.1 5.3-4.2 10.6-6.2 16-1.2 3.2-.6 6.1 2.7 8.4 2.4.6 5.4-1.3 7.8 1.6h-7.4c2.2 2.7 1.4 5.8 4.8 7.5 0 3.3 2.1 6 3.2 9h3.1c.8-2.5 2.1-4.9 1.7-7.4-2.1-.6-4.6.6-6.3-1.6 2.8-.1 5-.1 7.5-.1zm22.2 169.9c.4-.3 1.1-.6 1.1-.8-17.5-39.7-35-79.3-52.6-119.1-1.7.6-3.1.1-5-.7.4 1.9 0 3.4 1.4 5 .6-1 .9-1.7 1.7-3 .4 2.2 1.6 3.3 3 4.6-1.5.3-2.5.4-4.1.7 1.5 2.6 2.5 5.1 4.2 7.2 5.8 7.6 9.9 15.8 12 24.4 1.8 7.7 4.2 15.1 7.9 22.3 5.6 10.7 11.1 21.4 16.5 32.1 4.7 9 9.3 18.1 13.9 27.3zm33.7-364.8c-5.3 6.1-12.4 9.6-17.7 14.6-5.1 5-10.1 9.6-8.4 16.6.4 1.7.1 3.5.1 5.2v4.4c1 0 1.1-.3 1.3-.5 6.4-6.3 12.9-12.6 19.4-18.9 2.3-2.3 6.1-4.5 6.5-6.9.6-4.5-.7-9.2-1.2-14.5zM103.7 99.9c-5 5.6-10.8 10.1-15.5 15.2-3.5 3.9-5.5 8.6-8.1 13-6.9 11.7-12.9 23.7-17.8 36-.2.4 0 .9 0 1.3 8.2-13 17.9-25.2 28.8-37.6 2.4-1 14-24 12.6-27.9zm11.8 5.3c-1.1.5-1.7.7-1.8 1-2.9 4.7-7 8.7-11.1 12.6-5.6 5.5-9.8 11.6-12 18.3-2.8 8.5-7.3 16.6-10.2 25.1-1.4 4-2.8 8-4.3 12.4 2.7-1.2 1.8-3.2 2.7-4.6 2.1-3.2 4.8-6.3 6.3-9.5 3.3-7 8.3-13.1 13-19.4 3.3-4.4 8.4-8.1 9.3-13.6.3-2.1 1.1-4.2 1.8-6.3 1.9-5.1 4-10.2 6.3-16zM44 163.8c1.9.3 2.3-.6 2.8-1.3 4.4-6.2 8.6-12.5 13.2-18.5 4.9-6.3 10.1-12.5 15.4-18.7 3.5-4.1 7.6-7.8 11.1-11.9 2.3-2.8 2.4-6.4 4.6-9.3 1.2-1.6 2.7-3.1 3.3-6.3-10.8 11-23.9 19.3-31.9 30.5-7.9 11.2-13.1 23.4-18.5 35.5zm140.3 298c-.1 2.3 2.5 1.6 3.5 2.4.3.6.2 1.1-.8 1.5-3-.5-3.7.8-3.6 3.1.2 2.6-.1 5.2-.5 7.8-.5 3.6-.1 7.2-.1 11.1 5.7.7 11.4.1 16.9.3v-21.2c-1.6-.9-2.8 0-3.9.1-1.1-.7-1-1.4-.4-2.3 1.7-.3 3.7-.2 5-1.3.3-.9.2-1.6-1-2.2-4.7 1.1-10-.8-15.1.7zm124.6-154c-2.7 2.1-7.2 2.5-8.9 5.5-6.1 10.5-12.2 21-18.3 31.6-6.2 10.8-12.3 21.7-18.5 32.4-5.5 9.5-11.4 19-16.9 28.5-1.6 2.7-3.8 5.2-3.4 8.7 5.1-8.1 10.2-16.2 15.8-25.2.5 1.7.7 2.4 1 3.2 1.2-.8 2.1-1.5 1.7-2.8h-2.3c1.6-6.3 7.6-11 8.9-16.1 14.5-22.2 28.6-43.6 40.9-65.8zm-179.3-197c-1.6.9-2.2 1.1-2.5 1.5-3.9 4.7-9.5 8.4-12.8 13.4-2.2 3.4-8.2 5.5-5.9 9.8-4 6.9-2.3 13.5-2.7 20h2.5c14-12.8 15-28.9 21.4-44.7zm97.2-7c-.7.4-1.3.5-1.6.8-3.6 3.5-7.3 7.1-10.7 10.7-1.4 1.5-3.4 3-2.7 5.3.9 2.7.6 5.5.7 8.2.1 3.9-.8 7.9.7 12.2 3.1-3.3 6.5-6.1 8.6-9.4 3.5-5.3 11.5-9.3 8.1-16.9-1.5-3.3-1.2-7.2-3.1-10.9zm-49.7 434.8c1.1-1.6.3-3-.5-4.5-2 0-4-.4-5.5 1.1.1 1.2 1.3 2.6-1.4 3 0-2-.6-3.6-3.3-3.7-2.2.7-2 2.4-2.9 3.6-2 2.6-1.9 2.7-3.4 1.3.7-.9 1.5-1.9 2.3-2.9-.7-.4-1.3-.7-1.9-1-.2-1.1.4-2.4-1.9-2.4-.5.9-1.1 1.8-1.6 2.8.1.4.3 1 .5 1.7-3.7 2.4-.7 4.9-.1 7.9 9.3-.3 18.7 1 28.6-.8 7.4 1.6 15.7-.1 23.9.5.4-.8.6-1.4 0-2.1-.9.2-1.8.4-2.6.5-.6-.4-1.2-.8-1.9-1.2-.3.6-.5 1-.6 1.1h-17.1c-.5-1.4-.4-2.1 1.1-2.3.6.3 1.3.7 2.1 1.2h6.7c.1-.9-1.6-1.1-.9-2.4 3.9.7 8.1 1.2 12.1.6 0-.4-.1-.7-.1-1.1H200c-1-.9-1.8-1.6-2.7-2.4 2-1.7.2-3.6.8-5.3-1.1-.6-1.9-.6-2.8.2.2.5.5 1 .7 1.5-1.2.7-.5 1.7-.7 2.6-.9.7-1.3 1.8-2.9 1.9-.4-.7-.7-1.3-1.1-1.9-2.2-.3-3.4.2-3.7 2 .8.3 1.5.5 2.6.9-1.6 1.1-3.2 1-4.8 1.1-.5-1.2-1-2.3-1.5-3.5.1-.5.3-1.1.5-1.8-1.8 0-.8-2.6-3.7-2 .8 1.1-.4 1.6-.9 2.2.1 1.5 1.5 3-.4 4.2.3.5.5 1 .8 1.4-.4.9-1 1.2-2.3.6.4-.9.2-1.8-.8-2.6zm-19.5-391.2c1.2-.8 1.7-1 2-1.3 3.9-5.3 8.8-10.2 13.6-15 3.1-3.1 6.7-6.1 5.6-10.7-.4-1.8.2-3.7.2-5.5v-8.2c-6.2 4.8-12.6 9.3-16.1 14.9-5 7.7-2.9 16.7-5.3 25.8zm-29.5 124.7c.7-4.8 3.9-9.5-.4-14.5-4.8-5.5-9.1-11.3-10.7-18.1 0-.2-.4-.3-.6-.4-1 .2-1 .8-1.2 1.3-1.9 4.5-2.6 9.3-4.1 13.9-1.2 3.6-1.4 6.8.9 10.1 1.3 1.8 2.4 3.1 5.6 2.8 4-.4 4.1-.2 4.2 1-2 .2-4.1.4-6.1.7.7 3.4 4.5 4.4 12.4 3.2zm-60.5 28.5c28.5 42.8 56.5 84.8 84.7 127.2 1.3-1.5.6-2 .2-2.7-2.7-4.1-5.5-8.1-8.2-12.3-4.8-7.4-9.4-14.9-14.2-22.4-5-7.8-10-15.6-15.1-23.4-5.8-8.9-11.7-17.8-17.4-26.8-6.9-10.8-13.9-21.6-20.6-32.5-1.8-3.1-5.2-4.7-9.4-7.1zm35.6-49.8c6.5-19.7 6.6-38.5.1-42.7-4.1 7.1-9.2 14.1-9.1 21.7.1 7 5.3 13.6 9 21zm-15.8-1.5c.6-4.9 1.1-9.6 1.8-14.2.5-3.7.9-7.1-.8-10.9-3-6.7-5.3-13.7-4.7-21 0-.5.1-1.1-1.3-1.3-1.7 5.6-5 10.8-6 16.5-.4 2.5-2.1 4.7-1.4 7.4 1.7 6.3 6.1 11.8 8.6 17.9.8 1.9 1.5 4.2 3.8 5.6zm94.2-150.8c.9-.4 1.3-.4 1.5-.6 6-5.9 12.3-11.6 19.6-16.4 4.3-2.8 4.1-5.9 2.2-9.4 0-.7.9-1.4-.1-2.4-2.9.8-6.5-.4-9.3 1.3-3.6 2.3-6.8 5-10.5 7.2-2.9 1.7-3.7 3.9-3.6 6.5.1 2.3.2 4.5.2 6.8v7zm8.3 169.6c0-.3-.1-.7-.1-1h16c.5-1.6.3-2.5-.7-3.2-.9-.6-3.1.8-3.3-1.3 1-.3 1.9-.5 3.1-.9-3.3-6-5.2-12.3-10.4-17.8-1.1 2.3-1.9 4.3-2.9 6.1-1.1 1.8-2 3.7-2.8 5.6-1.3 3.3-3.6 6.4-5 9.8-1.5 3.6 2 6.8 6.6 6.6 3.2-.1 6.4-.2 9.6-.2 3.3 0 4.5-1.4 5.1-3.7-5.2-.5-10.2.9-15.2 0zm-38.3-179c-5.4 5-9.6 9.3-14.4 13.2-5.3 4.3-5.9 9.8-7.7 15-1.8 5.2-4 10.3-4.4 15.8 7-7.6 14.9-14.8 20.4-22.9 3.9-5.7 5.4-13 6.1-21.1zm-30.9 9.2c-2.9 8.5-7.8 17.1-9.5 26.7 13.7-11.6 24.7-24 27.8-39.8 1.2-1 2.8-1.8 1.8-3.6-7.6 4.8-12.3 11.5-20.1 16.7zm21.4 40.8c1.8 0 2.7-.9 3.1-1.6 1.9-3.8 6-6.4 8.6-9.8 1.8-2.5 5.4-4.2 5.9-7.1.9-6 1.4-12 2-18 .1-1.1.9-2.2-.3-3.2-3 1.1-4.4 3.4-6 5.2-2.6 2.9-6.8 5.1-7.7 8.9l-4.2 17.7c-.6 2.6-1 5.2-1.4 7.9zM227 242.8c-2.5 7.5-8.8 12.6-12.6 19.2 5.4-.5 9.7-.9 14.1-1.3.3 1 .2 1.6-.9 1.7-2.6.2-5.3.6-7.9.6-6.5.1-7.8.5-8.5 3.4 6.3-.3 12.5-.5 18.6-.8-6.1 1.7-12.3 2.5-18.8 2 .1 1.9 0 3.8 2.8 3.8 4.5 0 8.9-.4 13.6-.7.4.2.9.5 1.4.8 1.6-.7.8-1.7.9-2.6 6.5-4.5 7.6-7.9 4.3-12.3-4.2.8-8.4 2.1-12.9.5 4.1-.5 8.1-1 12.7-1.5-2.3-4-2.8-8.3-6.8-12.8zm-24.3 222.8v22.5c4.3-.3 8.2.7 12.5-.6v-22.2c-1.4-1.2-4.5 0-5.4-2.1 1.7-1.5 3.8.3 5.4-.5.6-.6.6-1.2 0-2.1h-11.9c-.6 1.2-.9 2 0 2.9l2.4-.3c.9.5 1.5 1 1 2-1.1 0-2.4.2-4 .4zM48 141.7c3.5-5.9 9.2-10.4 13.3-15.8 4-5.3 8.6-10.6 10.9-17-4.2.4-8.8-1.2-9.4 3.5 1.5.3 3 .5 4.4.8-4.2.5-8.7-.3-10.1 4.1 1.6 1.3 4.3-.6 6.1 1.4-3.1-.2-5.6.7-8.1-.1-1.1.7-2.1 1.3-1.2 2.4.8.2 1.5.4 2.4.6-1.4 1.5-3.5.1-5.3 1.4.1 3.9-5.8 6.5-5.3 10.9-3.7 2.2-4.3 5.5-5.9 8.6 1.2.4 2 .6 2.9.9-1.3 1.2-3 .5-4.2 1-1.3.5-2.4 1.3-1.6 2.7 1.4.2 2.8.4 4.4.6 2.9-1 2.9-3.7 5.3-5.6.3.1.9-.2 1.4-.4zM70.2 242c1.5-2.7-1.6-42.5-3.5-43.6-3.8 8-6.7 16.1-8.5 24.2 1.7.9 2.5-.6 3.8 0 0 1.6-2 1.6-3 2.7.5 1.4-.5 3.1 1.6 4.6.8-.9 1.3-1.7 2.1-2.7 1.7 2.2-.9 2.7-1.9 4 .5 1.3 1 2.7 1.5 4.1.7 2 3.7.4 4.9 1.6-.2 1.4-2 .6-2.6 1.4 0 1.7 1.6 2.5 3.6 3-.4 2-1.2 4 2.3 4.8 1.5-1.4 1.2-2.8-.3-4.1zm65.7 141.4c.3-.1.6-.1.9-.2 0-.6.1-1.2 0-1.9-.8-7.2-5.2-13.5-8.4-20-6.4-12.9-12.9-25.7-19.5-38.5-1.5-2.8-5-3.6-9.4-5.1 12.4 22.5 24.4 44.1 36.4 65.7zM162 117.3c1.1.3 1.6.1 1.9-.4 2.5-3.4 6.1-6 9.3-9 2.2-2.1 5.1-4.3 5.6-6.8 1-4.5.6-9.3.6-13.9 0-1.3-.4-2.5-.8-4.5-4.4 5-11.8 7.7-13.5 13-2.2 7-2.2 14.4-3.1 21.6zm132.9 50.4c-.7 2.2 4.1 18.5 5.8 19 1-2.9 2-5.7 2.9-8.3-.6-1.1-2.5-1.2-1.8-2.6.7.1 1.3.3 2 .4 1.5-1 2-2.1 1.4-3.4-.9-.5-2.4.6-2.7-.7.7-1.6 4.5.1 4.3-2.7h-6.1c-.6-.6-.7-1-.2-1.5 2.8-.6 6.4.7 8.3-2-.6-.7-1-1.1-1.5-1.8 1-.3 1.7-.4 2.4-.6.3-.8.1-1.4-.5-1.8-3.2-.6-6.6 1.2-10.7-1 4.2-.2 7.2-.4 10.1-.5 1-1.2-.2-1.8-.7-2.6.5-1.8.2-3.4-1.4-4.9-3.3 1-6.6.5-9.9.6-1.4 1.6-2.3 3.3-2.9 5 .3.5.5 1 .8 1.6-.9.3-1.6.5-2.5.8.5 2.5 1.4 4.8 2.9 7zM179.8 487.8c.5-7.5 1-14.8 1.6-22.1-.9-1.2-3.9-.8-3.7-2.9.9-1.7 2.7.2 4-.8-.2-.4-.4-.9-.7-1.4-3-.2-5.9-.4-8.8-.6-.6.9-1.2 1.9-.8 3.1.9 0 1.7-.1 2.5-.1.8.4 1 .9.6 1.6-1.5.3-3.6.3-3.8 2-.9 6.9-1.7 13.7-2.5 20.6 3.8 1.5 7.4.4 11.6.6zM271 212.6c-2.3 8.1-7.3 15.1-10.9 22.8 6 .4 11.3.8 17.3.3.3-.2 1.6-.4 1.5-1.7-1.9-1.2-4-.2-6-.4-4.8-.3-4.8-.2-5.4-1.5h13.1c.8-.6 1.1-1.4.5-2.3-3.4-.4-7.1 1.2-11.8-.9 4.3-.4 7.2-.6 10-.8 1.2-.1 2.2-.3 2.2-1.4 0-1.1-1-1.5-2.3-1.5-2.4 0-4.7 0-7.1-.1-1.2 0-2.7-.1-2.7-1.8 3.9-.3 8 1.1 11.9-.2-.2-1.2-.8-1.9-1.7-2.3-1.8.1-3.3.2-4.8.3-.3-.8-.2-1.3.7-1.6 1.6.1 3.2 0 4.9-.8-.3-.9-.5-1.8-.7-2.5-1.8-.7-4 .5-5.1-1.3 1.5-1.5 2.9 0 4.3-.1.6-1.1.5-2-.5-2.5-2.6.3-4.9.3-7.4.3zM245 92.2c-2.3-1.3-4.4-1.3-5.9 0-3.2 2.5-6.1 5.3-9.1 7.9-.3.2-.4.7-.4 1 1 5.3 2.1 10.5 3.2 16 .8-.4 1.3-.6 1.6-.9 3.5-2.8 5.6-6.4 8.3-9.6 2.2-2.7 5.4-5.2 4.1-8.9-.7-1.8-2.4-3.4-1.8-5.5zm-79.9 370.7c-2.1-.3-3.5.3-4.2 2-1.7 4.1-3.8 8.2-5.2 12.4-1.2 3.4-3.6 6.4-3.9 10.3 4 0 7.8.1 11.7-.1 1.8-.1 2.7-1.1 2.8-2.8.1-3 .9-6.1.7-9.1-.2-2.9 1.9-5.8.7-8.6-1.6-.4-3.3.2-4.4-1.6 5.3-.6 5.6-3.1 4.1-6.4-1-.2-2-.5-3-.7-1.1.8-1.1 1.6-.7 2.4.7.6 2.4.7 1.4 2.2zM131.9 390c.4-.1.7-.3 1.1-.4-1.1-2-2-4.1-3.3-6.1-8-13-16.1-25.9-23.9-38.9-5.9-9.8-11.4-19.8-17-29.8-1.8-3.1-4.8-5-9.5-6.6 17.9 27.6 35.2 54.7 52.6 81.8zm6.8 5.3c1.3-1.3.6-2.1.3-2.8-1.9-3.4-4-6.7-5.9-10.1-4.2-7.4-8.3-14.9-12.5-22.3-7.3-13-14.9-25.9-21.4-39.2-2.1-4.3-5.1-6.9-9-6.8 16.2 27.1 32.3 54 48.5 81.2zm155-58.3c-8.5 15.8-19.4 30-27.9 45 .4.2.8.3 1.2.5 18.1-27.1 36.1-54.2 54.2-81.2-5.6 1.9-8.3 5.3-10.5 9.3-2.7 5-5.8 9.8-9 14.6-2.8 4-4.5 8.6-8 11.8zM105 201.8c4-17.8 7.9-35.7 12-54-2.6 3.9-4.5 7.4-7.2 10.6-3 3.5-3.9 7.2-3.7 11.3.2 5.6-1.1 11.1-2.8 16.6-1.6 5.1-1.3 10.4 1.7 15.5zm107.4-88.2c4.3-1.9 5.6-5.6 8.8-8.1 2.6-2.1 5.6-4.2 4.4-7.7-1-2.9-2-5.7-2.9-8.5-1.7-.8-2.7-.1-3.6.7-2.2 1.8-4.4 3.6-6.7 5.4-1.1.8-2.4 1.4-2.1 2.9.7 4.4 1.2 8.9 1 13.4-.1.7-.2 1.4 1.1 1.9zm64.1 9.2c2.1-1.2 1.4-2.2.1-3.3-2.3.4-4.5 1.1-6.7-.6 2.2-1.1 4.3 0 6.3-.5.6-1 .1-1.8-.5-2.6-10.5-2.1-10.7 5.8-15 9.5-2.3 2-1 4.2-.5 6.7H279c3.3-1.9 1.2-4.8 0-6.7-1.2-1.9-4.5-3-7.2-.5-1.3-.4-2.5-.7-5.1-1.5 4.2-.3 6.8-1.1 9.8-.5zM103.2 256.1c-3.9-7.4-8.2-14.5-11-22.2-.8 1.9-1.3 3.7-1.3 5.6-.1 6.1-2.6 12.3 1 18.5 2.6 4.7 4 5.9 9.7 4.9 1.4-1.9-.3-3.8-.2-5.7.6-.4 1.2-.7 1.8-1.1zm-3.3-138.3c7.4-3.9 25.9-30.4 24.5-34.8-15.4 8.4-19.6 21.7-24.5 34.8zm159.9 123.6c-1.9 1-4.3-.5-6 1.2-5.5 5.5-8.2 12.3-13.7 17.8 4.3 2 17.9 1.6 19.9-.8-5.5-.8-11 .1-17.3-1.4 6.5-1.7 13.3 1.5 18-3.2-1.2-2-5.3.4-6.6-2.1.9-1.6 3.8-1.4 4.4-3.2-3-.4-3-.4-3.2-1.6 2.2-.5 4.6.7 6.8-.1.5-1.4-1.2-1.8-1.7-2.6.1-1.3.7-2.6-.6-4zM155.7 70.6c-4.1 3-9.3 4.8-11.4 9.1-2.2 4.5-4.2 9.1-6.2 13.6-1 2.3-1.7 4.6-2.7 7.3 10.8-5.8 23.9-24.9 20.3-30zm73.2 27.5c2.2-2.8 6.5-3.7 6.5-7.2 3-.9 4.6-3 6.7-4.2-.6-3.9-2.2-7.3-4.3-10.9-4.8 3.7-9.3 7.1-13.7 10.5 1.6 3.9 3.1 7.6 4.8 11.8zm50.4 20.2c6.2.9 11.5-.7 11.5-3.3-.2-.5-.4-.9-.7-1.4.6-.4 1.2-.7 1.6-1-.4-2.6-3.3-9.2-6.2-10.5-.8-.2-2 .6-2.5-.5.9-1.1 2.8 0 3.7-1.3-1.1-.9-1.6-2.1-2.1-3.8-3.2 2.7-5.6 5.4-6.5 8.7-1.6.8-3.5 1.4-3.4 3.1.3 5.3 3.6 7 10.2 5.3 1.4-.4 2.7-.8 3.9.5-1.6 1-3.3 1-5 1.1-1.7.1-3.4.2-5.1.2-.6 1.2-.1 2 .6 2.9zm-247.8 53c6.6-.3 10.5-3.4 9.6-7.5-1.1-1.2-2.4 0-3.7-.2-.2-.5-.3-1.1-.5-1.7 2-.1 3.7-.6 6 .7 2.7-9 7.9-17 11.3-25.6-4.1 4.8-8.2 9.6-12.2 14.2 1 1.1 2.4-.2 3.1.9-1 .9-2 1.8-3.1 2.8-.7-.7-1.3-1.2-2-1.9-1.5.9-2.3 1.8-2.1 3.5 1.1-.5 1.8-.9 2.7-1.4.3.9.6 1.7.9 2.6-1.1-.2-1.8-.3-2.5-.4-.9.9-2.2.5-3.4.5-.5 1.5-.8 2.9-.5 4.3-2.8.8-5 1.8-5.2 4.3 2.7.7 4.5-.3 6.3-1.4-1.3 1.5 1.7 2.2.8 3.7-1.1-.3-2.1-.5-3.6-.9-.4.7-.9 1.4-1.5 2.3-.8-1.1-1.1-1.6-1.5-2.2-1.4-.1-2.4-.6-3.1-1.5-3.4.5-6.5 1.1-7.9 3.8 1.1-.5 1.9-1.3 3.3-.8 1.2-1 1.9-2.4 4.2-1.6-.2 1.1-1.6 2-.6 3.1 1.7.6 2.7-.5 4-.9.4.4.8.8 1.2 1.3zm137.7 333.2c-3.8 2.9-4.7 6.1-5.4 9.6-.6 3.2 1.1 6.9-2.4 9.7-.4.4-.4 1.5.8 2 .9-.6 1.3-1.6 1.2-1.6 4.8.4 8.2.6 11.5.9.8-1.1-.5-1.7-.5-2.7.6-.3 1.2-.6 1.7-.8.1-1.8-2.5-.2-2.8-1.7.5-.3 1-.6 1.6-1.1-.7-.5-1.2-.9-1.9-1.3.8-.5 1.4-.9 1.9-1.2-.4-1.2-2.1-.1-2.5-1.3 1.6-.7.4-2.4 1.8-3.4-.7-.3-1.4-.5-2-.8-.4-1.3-.2-2.5.6-3.4-.2-.6-.4-1.1-.5-1.5 1.1-.8 2 0 2.9-.1.7-.3 1.1-.7.6-1.3h-6.6zm52.9-40.8c-2.9.8-3.9 2.1-4 4-.2 6-.4 12.1-.6 18.1 0 1 .1 2.3 1.5 2.3 3.3.1 6.7.3 10.5-.6-2.4-8-4.9-15.8-7.4-23.8zM251.6 106c3.9 6.2 3.3 12.5 6.9 18.7 2.4-3.2 4.4-6 6.3-8.6-1.4-1-2.9.3-3.5-1.1 1.3-1.3 3-.6 4.5-.3 1.2-.9 2.2-1.9 2.5-3-.6-2-2.8-.4-4-1.4 1.8-1.1 3.9.1 5.5-.7 1.9-1 3-2.1 1.1-3.5-6.2-.1-12.1-.1-19.3-.1zm18.8-1c.3-.4.5-.8.8-1.2-3.6-2.5-2.6-6.6-5.7-9.3-1.9.1-3.6.2-5.4.3.7-2.4 3.1-.7 4.4-1.5.7-1.5-.2-2.5-2-3.3-2.6.8-5.4 1.5-3.7 4.8-3.3-.3-4.4 1.9-6.1 3.2-2 1.6-2.1 3.8-1.3 5.7.7 1.9 3 1 4.8 1 .4 0 .7.2 1.1.2 4.2.1 8.7.1 13.1.1zm-60.9 396.2c.6 1.7-.1 2.8-1 4.3-1.5 2.2-3 4.5-2.7 7.3.2 2 0 4.1-.8 6.2-.7 1.7-.6 3.7 1 5.1 1.6 1.4 3.9 2.1 6.5 1.4.4-.6.7-1.2 1-1.7.9-.1 1.7-.3 2.9-.4-1.3-.9-1.4-1.8-.8-2.8-2-.7-1-2.5-2.6-3.1.3-.9 1.9-.1 1.9-1.1-.5-1-3.1.3-2.7-1.5.9-.7 2.3.2 2.9-.9.2-2-3.8.3-3.4-2.1.5-.2 1.1-.5 1.6-.7.4-.8-.2-1.8 1.1-2.4.7 0 1.6.1 2.6.1-.9-2.9-5.5.4-6.6-2.4 1.8-.7 3.6.4 5.1-.6-.5-1.8-2.7-.7-3.9-1.5.3-.8.5-1.7.8-2.5 1.1-.2 2.1-.4 3.5-.7-2.5-1.9-4.3-1-6.4 0zM164.7 79c-3 2.2-7.2 4-8.9 6.8-3.7 5.9-3 12.9-6 19.1-.2.4-.5 1.1-.1 1.2 10.6-7.1 16-16.1 15-27.1zM212 277.7c-2 1.1-4.2.7-6.3.8-2.4.1-5.2-.8-6.3 1.7-.9 2.1-2.1 4-3.8 5.7.4.7.7 1.3 1 2-1 .2-1.7.3-2.7.4-.3 1.1-.5 2.1.2 3.3h6c1.3-.4 1.9-2.1 4-1.9v1.7c1 .9 2.1.9 3.2.7.9-.5 1.7-1 2.7-1.6.5-3.7-3.4-1.8-5.2-2.3-2.2-.6-4.9.5-8.3-.9 6.8-1 12.5-.1 18.5-.1 0-2.1-.4-3.7-1.7-5.1-4.7 0-9.1 1.6-13.8.6 4.1-1.6 8.6-1.6 13.1-2 .7-.9.4-1.9-.6-3zm65.3-192.4c-3.8 1.4-8 .9-12 2.2 3 2.6 7.3.2 10.9 1.5-2.4 2.6-7.4-.8-9.2 2.8.1 1.3 1.9 1.6 2.9 2.1-1.8 4.3 3.3 6.9 3.1 10.6 2.5-.5 7.7-6.6 7.7-8.4-.7-.5-1.7.5-2.3-.5.7-1.7 4.8.1 4.5-3.1-3 .2-5.9.5-8.8.7-.1-.3-.2-.5-.3-.8 2.6-.3 5.2-.7 7.7-1 .6-1.6-1.4-2-2.2-2.9.5-1.6.4-2.8-2-3.2zm-60-13c-1.9 3.3-7.2 4.6-8 7.4-1.1 4.3-.4 9 1.5 14.3 3.2-4 8.8-5.2 11-9.1-1.7-2.8-.7-6.2-3.6-8.6.6-1.1.7-2.2-.9-4zM282.5 200c2.2-2.9 6.4-4.5 6.9-8.4-4 1.6-8.8-.9-12.5 2 .7.6 1.2 1 1.7 1.4-1.2 1-2.2 1.9-1.6 3.4 1.5-.1 2.8-.2 4.2-.4.5 1 0 1.5-1 1.9-.7 0-1.4-.1-2.4-.2.2 1.3.8 2.2 2 3 4.2-1.3 10.6 1.6 12.8-4.5 3.7-1 6.6-10.2 3.7-14.4-2 5.4-6.5 9.6-8.4 14.2.8 1.2 1.8.2 2.1 1.3-2.5 0-4.6 1.5-7.5.7zM179 69.4c-12.9 4.3-12.3 12.7-13.4 20.9.7-.3 1.2-.4 1.4-.6 3.8-3.1 8.1-6.1 11.3-9.5 2.6-2.8 1.6-6.4 1.3-9.7-.1-.8-1-1.1-.6-1.1zm-70.5 185.9c.4-1.2 1-2.2 1.1-3.1.2-3.7 1.7-7.1 3-10.6 1.1-3.1 3.3-6.4 2.2-9.8-1-3-1.4-6.1-2-9.2-1.3-5.6-2.6-11.2-3.8-16.7-1-.5-1.7-.7-2.8-.2 2.6 7.8 6.2 15.6 5 24-1.2 8.2-5.2 15.9-5.7 24.3.7.4 1.6.7 3 1.3zm157.6-102.5c3.2-5.3 5.9-9.9 8.9-14.9-4 .2-7 .5-9.8-.5 2.3-.4 4.7-.5 7-.7 5-.5 5.2-.6 4.8-2.9-5.3-.4-10.8.6-16.7-.8 2.9 6.3 3.2 12.7 5.8 19.8zM122.9 93.6c1-.5 1.5-.6 1.7-.9 6.2-7.2 16.5-11.8 20.6-20.2-.1-.7-.2-1.2-.2-1.8 1-.8 1.8-1.6.5-2.9-.9.4-1.8.9-2.5 1.2-.1.8-.1 1.5-.2 2.2-1.8 0-3.5 0-4.2 1.4.3 1.3 2.3.2 2.8 1.6-1.7 0-3.4-.2-4.9.1-1.6.3-3.3.8-3.6 2.3 1.1 1.2 3.5-.3 3.9 1.6-2.7 1.2-7.7-2.1-8.4 2.6l1.4 1.4c-1 .2-1.8.4-2.4.5-1.4 3.6-2.9 7-4.5 10.9zM284.6 179c-1.7 3.7-3.5 7.6-5.5 11.8h10.6c3.7-2.2 6.5-9.5 4.8-12.6-1.1-.5-2.7.7-3.7-.7 1.1-.3 2.1-.7 3.1-1 .3-1.4 0-2.5-1.5-3.2-6.6 1.1-7.4 1.5-6.5 3.8 1.2-.1 2.7-.7 3.4.8-.9 1.9-2.7.5-4.7 1.1zM57.8 294.6c15.1 21.3 29.9 42.4 45.3 64.3-.8-4.3-3.5-6.8-5.3-9.6-6.2-9.5-12.7-18.9-19.1-28.4-4.9-7.3-9.7-14.7-14.7-22-1.1-1.9-2.3-4-6.2-4.3zm99.7-4.9c3.6.5 5.7-.6 8-2.6-3.5-.9-6.9-.3-11-2.3 3.9-.1 6.4.2 10 1.2-1.6-3.5-2.9-6.5-4.3-9.6-2.5.8-4.7.4-7.2.5-.3 3.2-3.9 5.9-1.5 9.3-1.3 1.8-3.6 3.4-2.3 5.8 2.2-.1 2.6-1.8 4-2.5 1.5-.7 3.1-1.3 5.2-2.1-.3.8-.5 1.3-.9 2.3zm91.1-195.4c5.1-.1 11.5-4.8 10-7.1-.9-.5-2.2 1-2.9-.4 1.4-1 3.3-.2 5.2-.8-1.9-1.8.6-5.4-5.1-5.5 1.6-1 2.2-2 1.1-3.3-2.6.3-2.1 2.5-3.7 3.5-4.1 1.1-5.2 4.6-8.3 6.6.5 1 .9 1.7 1.3 2.5 2.7 1.2 5.8-1 8.6.5-.9 1.1-2.2.3-3.5.5-1 1.3-2.9.2-4.6.6.5 1 .6 2.1 1.9 2.9zm-98.9 419.8c-1.4-1.4-2.6-1.5-3.6-1.1-2.4 7.3-2.5 14.1 4.4 20.1-2.4.1-3.3-.8-4.2-1.6-4.2-3.5-3.5-7.9-3.9-12.1-.2-2.5 1.7-5 .2-7.8-1.8 1.4-2.3 2.9-2.3 4.5v9.8c-.1 5.6 6.4 10 12.7 7.9-4.9-3.8-3-9.2-5.3-13.8.3-.3.6-.7 1.2-1.4-.8-.3-1.4-.5-2.4-.9 1.4-.4 2.1-.6 3-.9-.5-.7-.9-1.2-1.5-1.9.5-.3 1-.5 1.7-.8zm87 7.9c2.3.4 5.2-1.1 5.4 1.5.2 2.1 1.3 3.1 3.8 3.6 2.8.6 4.3-.7 6-2.1-3.4-5.5-6.7-10.9-10.1-16.3-.7 4.8-2 9.2-5.1 13.3zm64.6-385.5c-5.2.3-10.3.6-15.8.9.6 1.6 1 2.7 1.3 3.7 1.3.2 2.3-1 3.2.4-1.2.4-2.3.7-4 1.2 2.9 1.5 1.2 4.1 2.7 5.6 2.7-.2 5-.4 7.4-.6.8-.6 1.4-1.3.7-2.4-.3-.1-.7-.1-1-.2-.4-.1-.8-.2-1.3-.3 3.4-2 4.3-2.7 4.2-3.3-.7-.2-1.4-.4-2.1-.7 1.3-1.2 3-.5 4.4-1.1.7-.8 1.1-1.7.3-3.2zm-257.6-6c-2.4.2-10.1 7.5-10.7 9.8.5 0 .9.1 1.8.1-4.6 2.8-7.2 6.8-12.6 9.2-.1 1.2 3.9 2.7.7 4.8-.5-.8-.8-1.3-1.4-2.1-1.1 1.2-2 2.1-3.7 2.6.2 1.7.4 3.4.5 5 .8.7 1.5.9 2.5.6l2.5-2.5c-.7-1.3-2.3-.4-3.1-1.1-.2-.7-.1-1.3.7-1.8 1.7-.2 2.5 1.9 4 1.3 1.1-.9 2-1.7 3.1-2.5-2.3-1.6-2.2-3.5.2-5.3 2-1.5 4.4-2.8 5.5-4.9 3.5-.7 5.5-2.3 5.6-5.3h-2.4c2.4-2.7 7-3.9 6.8-7.9zm47.2 53.9c3.3-5.7 6.5-10.7 9-16 1.2-2.5 4.6-4.3 3.8-7.4-.6-2.6-.7-5.2-.3-7.8.3-1.6-.2-3.3-.5-5.3-1.5 2.5-12.1 34.3-12 36.5zM302 200.1c-1.1 2.5-4 4-4.5 6.5-1.1.3-1.9.5-2.7.7-.4 1.4-1.1 2.7-.1 4-1.4.9-2.9 1.6-2.5 3.3.5.4 1 .9 1.5 1.3-.3 1.3-2.8 1.5-2.1 3.1 2.1.7 3.1-.8 4.6-1.5 1.1.6 2 1.5 3.8 1.2.8-.9 2.5-1.4 2.6-2.9-1.6.1-3 .2-4.6.3-.4.2-1 .5-1.5.7-.9-.5-1.4-1.1-1.3-1.7 3-1.2 6-.7 9-.6 1.2-1.4 1.2-2.5-.3-3.6-2.8 1.7-5.4 1.9-9.4-.7 9.4.9 10.6-2.3 8.1-7.4-.2-.8 1-1.7-.6-2.7zm-79.2-129h11.7c.3-1.8-.9-2-1.9-2.2-.9.3-1.7.6-2.5.9-2.9-1.6-5.5-.7-8.1.1-1 6.5.5 12.9 3.3 13.7 1.4-3.6 6.5-5.1 8.1-8.7 1.5-.2 2.9-.5 2.7-2.4-4.4.1-9 1.1-13.3-1.4zm-64.6 435.5c-.7-2-2.3-4 1-5.8-1.7-.6-1.6-2-2.6-2.9.8-.9 2.7-1.1 1.7-2.7-1.5-.2-3-.3-4.7.3v13.2c2.8.7 4.8-.3 6.9-1.1.6.3 1.2.7 1.8 1 5.1-3 2.1-7.4 3.1-11.2 1.1.2 1.8.3 2.6.5-.4-2.1-1.8-3.2-4.2-2.8-2.4.4-2.1 2.2-1.8 3.5.5 2.6.4 5.1-.2 7.6-1.3.3-2.3.9-3.6.4zM74.1 103.7c-.9 0-1.6.1-2.4.1-.9 1.4-3.3 2-3.7 4 1.9.1 3.6.2 5.4.3 1.4-1.5 2.8-3 2.6-5 1.4-.4 2-2.1 4.4-1.6-1.1 2.6-3.8 4.6-4.2 7.3-2.8 1.7-3.6 4.3-4.6 7 5.8-5.1 11.6-10.2 18.1-15.8-3.9-.3-6.8-.3-9.5.7-1.3-.6-2.5-1.2-4.2-.8-.6.5-1.3 1.1-1.8 1.5-.1.9-.1 1.5-.1 2.3zm65.7 280.6c-2.2 1.6 21 48.3 26.3 51.3-8.7-17.1-17.5-34.1-26.3-51.3zM73.4 229c-.3 0-.6 0-.9.1.6 5.7 1.1 11.3 1.7 17 2.9-.3 4.7-.6 6.5.5-.8 1-1.9.6-2.8.6-1 0-2.1.1-3 .1-1.2 3.2 1.2 4 9.3 2.8C80.5 243 77 236 73.4 229zM241.3 74.8c4.7-1.5 8.9-1.5 12.7-2.1.5-1.3-.6-1.5-1.4-1.8-.1-.6-.1-1.2-.2-1.9-1.5.2-2.8.4-4.1.6.2.6.4 1.1.6 1.9-1.2-.3-2-.6-2.9-.8-2.6.9-5.1 1.8-5.7 4.2 1.6 2.9 3.3 5.6 4 8.8 3.7-1.4 4.2-4.8 7.9-5.6-.5-1.5 1.4-2.1 1.9-3.6-4.2.1-8 .9-12.8.3zM91.6 108.4c5.4-1.9 20.5-19.3 19.5-23-3.8 1.8-6.3 4.4-8.5 7.4-1.2.2-2.5.6-3.2 1.8.3.5.7 1 1.1 1.4-2.4.9-9.3 10.6-8.9 12.4zm197.7 14.8c-3.2 2-3.9 5-5.9 7.6.3.4.5.9.7 1.1 5.1-.5 9.9-.9 15.2-1.4-1.1-2.5-2.2-5.1-3.3-7.5-2.7.2-4.7.9-6.7.2zM178.8 295.7c-2.2 1.3-5.4 1.6-5.3 4-1.1.7-3-.2-3 1.6 2 .5 4 .8 6 0 .2-1.1-2-2.5.8-3 .7.3 1.3.6 2 .9 1.4-.6 2.9-1 3-2.6-.7-.3-1.3-.7-2.3-1.2 2.8-1 5.9.5 8-1.5-.1-.5-.3-1-.5-1.7 1.3-1 2.6-2.1 1.2-3.7-5.2-.2-10.4-.4-15.7-.7-.1.8-.9 1.2-.2 1.8.8-.2 1.6-.5 2.6-.8-.4.9-.6 1.5-1 2.6 2.4-.5 4.5-.2 6.2 0 1.4-.8 2.5-1.4 4.4-2.4-.9 1.6.4 2.3.8 3.4-2.7.8-6.4-.1-7 3.3zm-5 231.9c1.7 1.9 32 2.9 37.3.8-11.1-2.9-21.6-.6-31.5-1.9-.7.8-1.1 1.3-1.5 1.7-1.6-.2-2.8-.4-4.3-.6zm44.8-251.4c-.7 1.2-2.2.9-3.3 1.3-.1.2-.3.4-.3.6l2.1 6.6c1.4 4.8 1.1 5.2-4.9 6.3-.3.6-.2 1 .4 1.2 1.4-.1 2.7-.2 4-.3 3.6-4.9 6.4-9.9 9.1-15.3-2.6-.1-4.7-.3-7.1-.4zM160.8 67.7c-2.7 4.2-3 8.6-3.8 13.8 3.3-2.4 5.9-3.9 7.9-5.9 2-2 2.1-4.7 1-7-.8-1.7-3.1-.6-5.1-.9zM52 209.8c-2.2 1.9-4.2 3.6-6.2 5.4 1.5 1.1 3.2.4 4.8.7.1 1.4-.7 2-2.3 2.2-.4-.5-.8-.9-1.2-1.3-1.3 0-1.7.5-1.6 1.4.6.3 1.1.5 1.6.8-.4 1.9-.9 3.7.2 5.5 7.4-5.2 10.4-6.6 5.2-9.4.6-1.6 1.6-3.3-.5-5.3zM69 94.5c-2.2.2-3.7.9-4.8 2.2v1.7c-2.4.4-4.4 1-5.2 3 1.4.5 2.8-.5 4 .5-.5.7-.9 1.4-1.5 2.2h-3.3c.4 3 1.3 3.8 3.4 3.6 1-4.3 5.8-7.1 7.7-11.1.7-.3 1.4-.7 2.1-1-.3-.7-.5-1.2-.8-1.9 1.4-1.4 5.5-.9 4.7-4-3.3.7-5.8 1.9-6.3 4.8zM115.7 333c5.4 10.3 10.8 20.7 16.2 31-2.1-14.2-14.1-25.3-18.7-38.8-1.2 3 1.9 5.2 2.5 7.8zm2.6-51.3c.9-1.6.9-2.7-1.2-3.3-1.5-.5-3.5 1-4.6-.7.9-1.3 2.4.1 3.3-.6 1-3.1-2.1-4.3-8.6-3.4-.4 2.3.3 4.7-1.4 7.5 1.8-.7 2.6-1 3.5-1.3 2.5 2.3 6 .8 9 1.8zm173.4-75.1c.8-.7 1.7-1.5.5-2.7H280c-.6.7-.4 1.5.3 2.2 1.8.7 3.9-.5 5.7.6-1.3 1.6-3.7.4-5.4 1.4.1.8.2 1.6.2 2.3 7.1 1.5 11.3 0 10.9-3.8zm8.1-101.1c-1.6 1.3 1.1 2.6-.9 3.5-4.6 1.3-4.8 6.9-.4 12.4 1.1.1 2.1-.1 3.1-.8 0-.6.1-1.3.1-2-.7-.3-1.2-.6-1.6-.8-.5-1.3 1.1-1.4 1.4-2 .6-1.6.3-3-.7-4.2 1.1-2.1.5-4-1-6.1zm7.2 16.7c.1-2.1 2.3-3.8 0-5.3-3.9.9-3.4 3.1-2.9 5.3-1.6.3-3 .6-4.3.9-.1 1.3.1 2.3.7 2.6 3.9.8 6.9-.9 10.1-.1 1.2-1.5 3.7-2.5 1.3-4.5-1.6.4-3.1.7-4.9 1.1zm-90.8 204.1-.3 1.5c5.5.8 11.4-.6 17 .9-5.7.3-11.5.5-17.1.8-.4.7-.7 1.2 0 1.7 6.2-.3 12.5-.5 19.3-.8-.9-1.3-1.2-1.8-1.6-2.3.4-.7 1.9-.8 1.3-1.7-6.2-.1-12.4-.1-18.6-.1zm-35.4 182.2c.7.1 1.9.2 2.9.3.9-.7 1.2-1.3.9-2.2-1.6-.5-1.8-1.8-2.5-3 .4-1.4.9-2.9 1.4-4.5-.9-1.3-1.4-3-1.4-5-1.1.4-1.9.6-2.5.8-1.4-.2-2.6-1.1-4.5-.6 1 .6 1.7 1 2.1 1.3 2.4 4.1.6 8.7 3.6 12.9zm-21.6-188.7c-1.1.4-2.1.8-3.2 1.1.1 1.9.1 3.8.4 5.6.1.4 1 1.1 1.5 1.1 4.7-.3 9.3-.1 14 .6.3-.9.4-1.6-.6-2.2-3.6 1.4-7.6-1.7-11.4.4-.9-.4-2.2-.3-2.3-1.4.6-1 1.9-.3 2.9-1 .9-1 2-2.2 3.1-3.4.4-.6 1.6-.3 1.8-1.3-.6-.2-1.3-.4-1.9-.6-.4-.6-.8-1.2-1.4-2-.7.9-1.1 1.6-1.6 2.2.6.5 1.1 1 1.5 1.4-1.3 1.2-1.9 0-2.8-.5zm55 .2c-.1-3.2-10.7-3.2-18-.3-.7-.2-1.3-.4-2-.6-.8.5-1 .9-.4 1.4 2-.1 3.8.2 6.2 1.7h-6c-1 1.1-.5 1.8.7 2.4 4.7-1 7.6-5.1 13.4-4.7.2.2.7.7.9 1 2.1.3 3.6-.1 5.2-.9zm-83.5-46.3c-.4 2.5-.7 4.9-1.1 7.2h11.1c-1-3.2-3-5.6-5-8.1-1.2.3-1.8.6-2.6.7-.8.1-1.5.1-2.4.2zm.1 44.5c0 1-1.4 1.7-.6 2.6 4 1.1 5.3.8 4.9-1.2-6.7-1.5-2.5-5.2-2.6-8.3-4.4-.5-8.9-1.1-13.5-.5-.7.1-.8.8-.2 1.4 3.6.4 7.6 0 11.2 1.5-1 2.3-4.7-.1-5.5 2.4 1.8 1.2 4.7.4 6.3 2.1zm172.4-133h2.8c.5 2.2-3.5 1.3-3.1 3.4.3.2.7.5 1.2.9-.8.9-1.5 1.6-2.2 2.4.3.8.7 1.4 1.3 2.9 2.4-4.4 4.4-8.2 6.3-11.8-.8-.8-2-.2-2.3-1.3 1.6-.9 4.1-1.4 4.5-3.5-1-1.2-2.9-.5-4.3-1.4-2.4 2.6-2 5.7-4.2 8.4zM180.1 311c-.9-.5-1.7-1-2.5-1.4.9-.8 1.8-.9 3.1-.9 1.4 1.1 1.6 3 3.7 3.8-1.7 1.4-5.2-.4-5.7 2.8 3.4-.6 7 .1 8.7-3.1h3.2c-1.1-3.4-7.2.2-7.5-3.6.4-.6 1-1.2 1.4-1.9-1-1-2.2-.8-3.3-.9-.6.4-1.2.7-1.8 1.1-1.7 0-3.5-.2-4.2 1.6.5.4 1 .7 1.4 1-.2.6-.3 1.1-.4 1.6 1.3.9 2.5 1.4 3.9-.1zm7-23.7c1.5-.7 1.4-2.2.5-2.9-3.4-2.4-7.8-1.7-12-2.2-.6 1.5-1.2 2.7-1.8 4.3 4.6.3 8.7.5 13.3.8zM303.3 93.5c.9-2.2.2-4.3.4-6.3-1-.3-1.6-.3-2.2.3-.3 1.1.5 2.3-.5 3.4-.8.5-1.5.3-2-.4v-6.8c-1.4.1-2.6.2-3.6.3-1.9 2.1.1 3.7.1 5.4.7.3 1.3.5 1.9.8.3.9-.2 1.8 1 2.5.9.1 2 .2 3.5.4-.9.6-1.4 1-2 1.4.3 2.1 1.8 2.1 3.6 1.7 1-1.1.2-1.9-.2-2.7zm11.9 88.7c-3.3-.3-11 10.8-10.7 15.3 1.2.2 2.4 0 3.2-.7 2.1-2.4 2-5.4 4.6-7.6-.3-.6-.6-1.1-.9-1.7.9-.4 1.7-.8 2.6-1.2 0-.7-.1-1.3-.1-1.7.4-.9 1.8-1.2 1.3-2.4zM40.6 194.3c4.8-.6 14.1-9.8 12.4-13-4.4 3.8-8.7 7.4-12.8 11.1-.7.6-.5 1.4.4 1.9zm274.2-45c-1.1-1.1-2.8-.3-4.1-.9.7-1.6 2.9-.1 3.8-1.6.2-.7.3-1.6-.4-2.6-2.2-.1-4.4-.2-6.7-.4-1.8 2.8 2.3 4.8.4 7.7 3.3-.1 5.8-.3 8.3-.4 1-.7 1.6-1.4.8-2.5l-2.1.7zM20 190c-2.7-2.4.1-4 .4-5.9 1.5.1 1.3 1.3 3 1-.9-1.5-1.9-3.1-2.8-4.6.4-1.1 1.6-2.1.6-3.4-2.7-.1-1.8 1.8-2.6 2.8-.6.1-1.2.3-1.7.4-.4.6-.8 1.1-1.1 1.6-.9.3-2.2-.1-2.5 1 .3.9 1.2.9 2 .7 1.6-1 3-1.8 4.4-2.7-3.3 3.8-2.5 8.2-3.5 12.8 2.6-.8 3.7-1.9 3.8-3.7zm303.5-63.8v-13.9c-1.5.3-2.2.8-2.5 1.6.2.5.4 1.1.6 1.7-.8.6-2.2.8-2.1 2 .4.4.8.9 1.2 1.3-.1.8 0 1.5-.9 2-.7 0-1.4-.1-2.3-.1l-1.5 2.1c1.3.9.1 2.8 2.4 3.3 1-1.3-.6-2.1-.6-3.4.4-.3 1-.7 1.5-1 1 .3 2 .3 2.3 1.3-.4.4-.8.9-1.2 1.4.1.8.2 1.5.3 2.1 1 .5 1.6.4 2.8-.4zm-83 139.1c5.3-.2 10.4.4 15.8 1 1-.6 2.4-1.1 2.2-2.7-6.3-.7-12.6-.4-18.7-1.6-1 1.3-.4 2.2.7 3.3zm-13.9 22.4c.2 1.2.3 1.8.5 2.6-2.6-.1-5.1-.3-6.5 2.6 3-1.1 6.2.9 8.1-1.6-.2-.7-.3-1.3-.5-2 2.3.2 3.7-.8 5.5-1.4.4.5.8 1 1.1 1.4 3.1.4 6 .6 7.3-2.9-5.4.6-10.6-.5-15.5 1.3zm35-208.3c3.2-1.2 8.8 1.1 9.3-4 .7-.4 1.3-.8 1.9-1.1 0-1.2-.9-1.7-2-1.9-3.5 1.8-7.5.4-11.6 1.9-.1.1-.4.6.5 1.4 3.1-.2 6.5-.4 11-.7-3.5 2.4-6.8 1.5-9.7 1.8-1.5.9-1.1 1.7.6 2.6zm49.7 52.6c-4.3 1.3-3 5.4-6.3 6.2-.1 1.3 1 1.5 1.7 1.9-1 1.2-.7 2.2.4 3.4 1.1-.2 2.2-.4 3.7-.7-1.4-2.6.4-5.4-1.6-7.9.6-.3 1.1-.7 1.5-.9 1.4.2 2.5 1.1 3.9.4.6-1.2.6-2.4-.6-3.4-1.8-.6-2.3.4-2.7 1zM102 85.6c-6.1-1.1-8.4-.2-11.2 4.2-.7.1-1.4.2-2.1.2-.5.6-.5 1.1.4 1.8h9.6c.3-.1.9-.6.7-1.4-1.7-1.5-2.5.5-3.8.7-.8-.6-2.4-.5-2.6-1.9 2.6-1.4 5.7-.2 8.4-.8.7-1 1-1.8.6-2.8zm19.5 221.1c2.4-.5 5.1 1.2 6.4-1.4-1.6-.5-3-.9-4.6-1.4-1 .5-2.1 1-3.6 1.8.4-1.1.6-1.6.8-2.2-1.2-1-2.5-.9-4.3-.6 1 1.7 1.9 3.2 2.9 5v1.4c2.4-.8 4.4.7 6.5.5 1.9-.2 4.4 1 6-1.1-3-1.8-7.3 1.2-10.1-2zm72.3 185.1c2 .9 4.1-.1 5.9 1 .5-1.1.9-1.9 1.4-3.2-6.3.8-12.2.1-18.1.2-.8 2.8.1 3.2 5.2 2.5 1.9 1.8 3.7.6 5.6-.5zM286 136.1c4.8-.5 9.6-1.1 14.5-.8.5-1.7.2-2.9-1.5-3.5-4.9.8-9.6 1.2-14.4 1.2-.6 1.4-.3 2.4 1.4 3.1zM182.3 69.5v8.2c3.5-3.4 8.2-4.6 10.4-8.2h-10.4zm98.6 223c4.8-.2 9.2-.3 13.5-.5-2.2 2.2-6.2.5-8.4 3.6 3.8-.4 7.3.6 10.1-1.5-.2-.8-.4-1.3-.5-1.8.6-.8 2.1-1.1 1.5-2.3-5.1.2-10.2.4-15.5.6-.1.5-.3.9-.7 1.9zM153.5 525.7c1.5.1 2.6.2 3.9.4.6-.7 1.1-1.5 1.8-2.4-1.1-.1-1.8-.1-2.5-.2-.4-1.6 1.9-1.1 2.3-1.8.1-1.5-2-.4-2.3-1.6.5-.4 1.2-.8 1.7-1.1-.4-1-.7-1.8-1.1-2.7-1.3-.2-2.4-1-3.9-.6.1 3.3.1 6.6.1 10zM322.8 83.8c1.7-1 4-.9 5.6-2.4-3.2-1.4-5.6.6-8.1.3-1 1.6 1.8 2.3.7 3.8-.6.2-1.4.3-2.4.6.9.5 1.5.9 2.2 1.3-.6.6-1.1 1.2-1.4 1.6-.5 1.3.2 2.1.7 2.9-.4.6-.7 1.1-1 1.7.6.5 1 .9 1.7 1.5-1 .7-2 1.4-.8 2.4.9.1 1.6 0 1.9-.8-.3-1.5-.5-3 2.2-3.8-1.5-.3-2.9 0-3.2-1.5 3-2.2.7-5.2 1.9-7.6zm-6.5 77c-1.4.4-1.9 1.1-2.1 2 .2.6.6 1 1.5 1.2 1-.2 2.1-1 3.5 0-.3 2-.6 4.2-.9 6.6.4.3.9.6 1.7 1.2.6-1.6 3.9-.8 3.6-3-1.2-.5-3.2.5-3.2-1.3.6-2 6.6.8 4.8-3.3-1.8-.3-2 1.6-3.7 1.3-1.2-1.1.4-2.1.4-3.2-.2-.7-.7-1.2-1.8-1.1-.6.3-1.2.6-1.8 1-.7-.5-1.3-.9-2-1.4zM189.4 518.1c1-.3 1.6-.5 2.3-.7-.2-1.2-1.4-.8-2.2-1.2-.6-.6-.5-2.1-2.3-1.3v7.9c-2.5-.8-4.6-1-6.2.1.1.3.3.7.4 1 .8-.2 1.7-.4 2.5-.6.4.6.8 1.1 1.2 1.7h5.5c-1.1-1.3.1-2 .7-2.9-.5-.4-.9-.8-1.3-1.2.4-.5.8-.9 1.3-1.4-.8-.4-1.3-.8-1.9-1.4zM90.4 264c-1.2 1.4-.8 2.9.4 4.4-1.6 1.2-2.1 2.5-.7 4.1 2.1-.1 4.1-.2 6-.3 1.4-3-1.8-3.3-3.9-4.2.7-.7 1.2-1.1 1.7-1.5.1-2-3.3-2.8-2.2-4.8-.8-.6-1.5-1-2.4-.5-.4 1 .9 1.6 1.1 2.8zm201.7 11.5c-.5 1.2-1.2 2-.1 2.7-.7.5-1.2.8-1.8 1.2.3 1 .7 1.9 1.5 2.1 1.3-.8 2.5-1.4 3.6-2.1-.8-.7-1.2-1.1-1.7-1.5.2-.7.7-1.1 1.7-1.2.5.2 1 .5 1.8.8 1.2-1 2.9.1 4.3-.8-.2-1.1-.7-2-1.7-2.8-2.2-.3-3.7 1.1-5.8 1.2-1.6-.8-3.5-1.3-5.5-.6-.4.9 0 1.4 1.1 1.7.7-.2 1.4-.4 2.6-.7zM150 490.3c-.7 2.5.9 2.9 10.4 2.7.4-.5.9-1 1.5-1.6.7.6 1.2 1.1 1.8 1.6 2.1-.6 1.8-1.9 1.6-3.4-5.2.2-10.2.4-15.3.7zm118.8-249.2c3.7.4 6.8.2 7.3-3.4-2.4-.8-3.8.3-5.3 1.2-.5-.5-1-.9-1.5-1.4-2.5-.2-5.1-.3-7.9-.5.4 4.6 3.7 3.3 6.7 2.4.3.6.4 1.1.7 1.7zm-153-167.3c-2.6.4-3.3 1.7-3 3.4-.8.3-1.4.5-2.3.8.5 2.5-3.1 3.8-3.6 6.7 4-1.4 4.1-5.4 8.4-5.3.2-1 .3-1.8.4-2.5.7-.5 1.3-1.1 1.9-1.6-.2-.7-.4-1.2-.7-1.9 1.7-.4 3.1-1 2.5-2.6-1.4-.3-2.4.3-3.5.8-.1.6-.1 1.3-.1 2.2zm55.6 255.5c-4.8-.2-9-.4-13.3-.6.2 1.2.2 2.3-1.4 3.6 5.8.4 11 .8 17.1 1.2-2.1-2.8-4.9-2-6.9-2.1-5.9-.4-5.9-.2-6.7-1.2h11.5c.2-.5-.1-.8-.3-.9zm22.4.4c.4 1.8 15.7 2.6 19.1 1-.4-1.8-14.5-2.6-19.1-1zm-7.1 165.8c-.1 4.3-.7 8.5.9 12.7 1 .4 1.9.4 2.7-.3-.6-4.3-.1-8.6-1.6-12.9-.7-.2-1.3-.1-2 .5zm38-210.3h16.5c1.4-.6 1.6-1 1.3-1.8-.5-.3-1.2-.6-2-1-5 2-11.3-1.6-15.8 2.8zm79.8-42.2c1.2.9 2.3.8 3.3.4 1.5-1.4.3-2.7-.1-3.9.3-.6.5-1.2.8-1.8-.4-.4-.7-.8-1-1.1-4.3.9-7.3 2.9-9.8 5.7 5 2.8 5.5-3.2 9.5-2.7-.9 1.3-1.8 2.3-2.7 3.4zm-141.3 33c1 6.3 7.1 3.1 10.9 4.6.3-1.3 1.6-2.1.5-3.6-3.6-.2-7.4-.6-11.4-1zM302.4 66.5c-2.1-2.3-3.6-3.9-5.1-5.6-1.1.3-1.8.6-2.4.8-1.1-.3 0-1.5-1.5-1.6-.7.9-1.5 1.9-2.5 3.1 2.4-.1 4.7-.8 6.5.9-1.3.9-2.7.4-3.8.6-1.3.2-2.8-.1-3.7 1-.1.8.3 1.3 1.3 1.5.5-.4 1.1-.7 1.7-1.2 1.1.8 2.5.9 4 1.2.4-.5.9-1 1.2-1.4 1.4.3 2.4.4 4.3.7zm-251.3 137c-4.3 1.6-7.4 6.5-6.3 9.9 5-1.4 8.3-6.7 6.3-9.9zm150 69.7c-4.8.2-9.4.3-14 .5-.3 1.2-.3 2.1 1.1 2.8h10.4c.7-1.1 2.5-1.6 2.5-3.3zm2 237.1c-4.7.7-9.7-.9-14.6.4-.2 1-.1 1.6.7 2.1h14.1c.6-.9.6-1.6-.2-2.5zm-7-13.5c-.7-.8-1.1-1.5-2.5-1.7-.7 4.6.1 9 .4 13.6 1.6-.1 3-.1 4.6-.2-.6-1.2-1.8-2.1-1.1-3.2-2.3-1.7-1.8-3.7-1.2-5.8-.7-.8-.6-1.8-.2-2.7zm54.5-211.9c4.2.8 7.6-.2 11.2-2.9-.2-.5-.5-1-.8-1.7 2.4-.3 5.4.3 5.9-2.8-3 .6-5.9.4-7.8 2.3.1.6.1 1.1.2 1.6-2.9 1-6.2 1.3-8.7 3.5zm9.9-240.1c-1.3-2.4-3.7-3.1-7.1-2.1.3 1.9 2.6 1.2 4.1 1.7 0 .8-.8 1.6.3 2.3 1.7.6 4-.7 5.6 1-.8.3-1.4.6-3.3 1.4h8.9c-.1-2.4-2.8-.9-4-1.6-.1-.5-.2-1.1-.3-1.5-1.2-1-2.7-.9-4.2-1.2zm-59.1 451.7c-.1-.8 1.4-.9.7-1.7-1.2.1-2.1.5-2.8 1.3.7 4.2-.3 8.5 2 13.4 1.2-2.2 4.1-2.2 4-4.3-1.2-.5-2.7.8-3.1-.8.5-.3 1-.7 1.7-1.2-.7-.5-1.4-.9-2-1.3.1-.6.2-1.1.3-1.5-.7-.4-1.3-.6-1.8-.9l1.6-1.6c-.2-.5-.4-.9-.6-1.4zm97.7-210.6c-5.5-.1-10.5.4-15.5 1-.3 1.3.6 1.8 1.3 2.1h10.6c.1-1.5 3.6-.8 3.6-3.1zM228.4 32.5c2.5-1.6 5.2.4 7.6-.9-1.6-2.4-4.9.1-7-1.4 1-.3 1.6-.5 2.3-.7-.7-1.8-2.1-1.6-3.7-1.1v1.9c-.5.4-1 .7-1.5 1.1.1.5.1 1 .2 1.5-.8.1-1.4.2-2.3.3.5.8.8 1.3 1.3 2.1-1.4-.1-2.5-.1-3.6-.1-.4-.5-.7-.9-1.1-1.5-.4.8-.7 1.5-1.1 2.2 2.4.6 4.6.6 7 .4-.3-1.7 1.5-2.6 1.9-3.8zm23.4 293.1c-3.8-1.1-13.4-.2-13.7 1.4 3.7-.3 7.4-.6 12.2-.9-4 2.8-8.8 1-12.6 3.6 4.9.7 8.6-.9 12.6-1.1.5-1 .9-1.9 1.5-3zM66 249.2c.7.6 1 1.2.6 1.8-.7.2-1.4.3-2.3.6.1.9.2 1.7.3 2.7 2.5.2 4.7.4 7.3.6-.3-1.9-1.8-3-3.4-4.1.1-1.8-2.2-2.7-2.8-4.3-1 .2-1.9.4-2.7.6-.2 1.1-.2 2 1 2.6.6-.2 1.3-.3 2-.5zm-31.3 16.4c1-3.3-3.9-2.9-4.8-4.8.6-.4 1.1-.7 1.5-1-.8-1.9-4.2-.4-4.6-2.7.5-.2 1-.5 1.7-.8-.7-.7-1.4-1.3-2.1-1.9-.9.2-1.8.3-3.1.5 3.7 3.8 4.2 9.2 11.4 10.7zm194 237.8c.4-.5.7-1 1-1.4-.4-.6-.8-1.1-1.1-1.5.3-1.2.5-2.3.8-3.4-.9-.6-1.3-1.6-3.2-1.5 1.5 3.5-1 7.1.6 10.9-.1.3-.5 1-.8 1.5.6.7 1.2.9 2.2.5.2-.5.4-1.2.6-1.8.6-.3 1.2-.7 1.7-.9.4-1.4-1.1-1.7-1.8-2.4zm-53.4-11.1c1.7 1.1 3.4.7 5-.7.1-.8.2-1.6-1.1-2.2-3.5 1.1-7.4 0-11.2.5-.3 1-.5 1.7-.8 3 2.8-.2 5.3-.4 8.1-.6zm69.5 36.5c1.9 1.6 3.4 1.9 5 1.7 4.9-.6 8.4-2.8 10.7-6.3-1 .5-2 .9-2.9 1.3-2.1-1.3-1.5-3.6-4-4.9-.6 2.5.9 4.2 2.3 5.8-2.6 2.8-6.5 2.5-11.1 2.4zm-18.2-205.3c2.3 1.8 4.7 1.3 7 .7 1-.2 1.8-.7 1.1-1.9h-14c0 1-2.9.5-2.5 2.4 3 .4 5.8.5 8.4-1.2zm-5.8 178.3c-.9 1.9-2.8.6-4.5 1.2 2.5 1.4 2.7 3.6 3.6 5.8 1.6-.9 2.9-1.7 4.3-2.5l-1.7-1.7c.2-.6.5-1.1.7-1.8-2.5-1.4-1-4-3.1-5.9-1.1 2.1-.7 3.5.7 4.9zm41.7-228.5c1.6-.2 2.7-.3 3.9-.5v-2c-1.6-1.1-2.4-3.8-5.3-2.5-2.8 1.3-5.6 3-6 6 4.6.7 4.8-4.6 9.1-4 .7 1.4-.8 1.9-1.7 3zm-139.6 47.4c-.6 1.5-.4 2.4.4 3.5 4.6.5 9.3 1 14 1.6-3.8-3.7-9.7-2.9-14.4-5.1zM179 277c-1.3 1.1-2.3 2.1-1.6 3.8 2.8.3 5.7.6 9.1 1-.3-1.7-.6-3.1-.9-4.5-2.5-.2-4.6.6-6.6-.3zm-94.7-25.8c-2.8.7-5.6.4-8.4.1-.5 1.4 0 2.5.5 3.4h9.9c.6-1.6-.6-2.4-2-3.5zM39.1 170c-1.9 2-4 3-6.1 4.3v-1.6c-3.3-.2-5 .7-5.7 3.1 1.3.9 2.5-.1 3.7-.2 4.8 1.6 8.4-.6 8.1-5.6zM84 89.3c2.8 0 3.5-1.5 4.4-3-4-1.4-9.1 1.3-10.6 5.6 2-.3 3.9-.2 6 .2 0-1 .1-1.8.2-2.8zm250.5 10.3c1.3 1.2 2.2-.1 3.5-.4 1.7.8 3.3.2 5.2-.4-.2-.5-.2-.9-.5-1.2-1.8-1.5-3.9.5-5.9-.4.1-2.2 3.7-.8 4.1-2.7-.1-.5-.5-.9-1.5-1-1.6.7-3.9.2-5.5 1.6.5.8 1 1.5 1.4 2.1-.3 1-1.4 1.5-.8 2.4zM228.9 277.5c4.7 1.3 9.5.4 11.4-2.5-2.9-1.5-6.7.5-9.4-1.5-.7 1.5-1.3 2.7-2 4zm-40.3.3c-.7 4.2 2 5.1 6.4 4.4.7-1.1 3-1.8 2.3-3.8-2.9-.2-5.7-.4-8.7-.6zm-7 69.9c3.3-1.4 6.9.3 10.3-.9-3.3-.6-6.7-1.2-10-1.1-2.1.1-2.2 1.8-1.9 3.4 4.2.4 8.3 1.4 13.7 1.2-4.2-2.5-8.5-1.3-12.1-2.6zm124.2-124c-2-1.5-1.8-3.7-5.1-4.3-1.6 3.4-4.8 5.9-9.4 8.3 3.9.5 6-.1 7.8-1.4-.1-.7-.1-1.3-.2-1.8 1.3-.8 2.6-1.5 3.9-2.2.8.5.7 1.5 3 1.4zM167.4 528.8c-5.2-1.8-10.3-1.3-15.5-1.1-1 1.3 0 1.8 1.1 2.3 1.7.6 13.7-.3 14.4-1.2zM339 243c-1.3-.7-2 .4-3.1.5-1.2-.2-2.5-.3-3.8-.5 1.2-2.7 6.9-.4 7-4.2-1.4-.1-2.3-.1-3-.2-2.4.8-3.6 2.8-6.6 2.7 1.6.9 1.1 2.2 1.5 3.5 2.5 1.1 5-.4 7.5-.3.7.2 1.1-.7.5-1.5zM92.3 280.1c2.7-.9 6.3 1.5 8.5-1.2-2.4-1.8-9.9-1.7-10.7.2.3.4.7.8 1.1 1.2-.3.5-.5 1-.8 1.6.9.6 1.7 1.2 2.6 1.9 1-.7 1.9-1.3 2.7-1.9-.5-1.6-2.7-.4-3.4-1.8zm14.4 3.7c1.4 1.1.4 3 2.7 3.7 1.2-.5 3.2.6 3.9-1-1-2.2-4.1.9-5.1-1.7 2.1 0 4.1-.1 6.1 0 2.8.1 4.4-1 3.7-2.4h-9.8c-.4.3-.8.8-1.5 1.4zm171.9 16.1c5.4-.2 10-.4 14.4-.6.7-1 .9-1.7.2-2.4-4.8.5-10.3-.9-14.6 3zm72.3-176.1-1.6 2c.3.8.8 1.3 2 1.4.5-.3 1-.7 1.6-1.2 1 .5 2 1.1 3.2.3 1-1 0-1.9 0-2.9.3-.6.6-1.1.9-1.6-.3-1-.7-1.8-2.1-2-.9.3-1.4.9-1.6 1.7.6.7 1.2 1.4 1.7 2.2-1.2 1.5-2.3 1.5-3.7.5 0-1.2 1.6-2.5-.6-3.8-.2 1.3-1.7.9-3.4 1.7 1.4.8 2.6 1.2 3.6 1.7zm-96.2 372.3c-4.5 0-20.7 7.7-20.7 10 6.8-3.6 14.2-6.1 20.7-10zM208.6 76.2c3.7-1.1 5.2-3.8 7.8-5.5-.7-1.3-7.4-1.6-8.8-.4.3.5.6 1 1 1.7-.7 1.3-.5 2.6 0 4.2zM129.7 285c4.3.1 8.3-.6 12.3.3.2-3.1-4.8-4.1-12.3-2.7v2.4zM280.6 78.2c-.7.5-1.2.8-1.8 1.2.2.6.3 1.1.4 1.6 1.9.7 5.4.5 7.9-.2-.2-1.1-1.3-1.8-2.1-2.4-1.1-.3-2.3.4-3-.8.8-.2 1.4-.3 2.1-.4 0-1.2-.4-2.1-2.3-2.4-.7.6-1.5 1.3-2.3 1.9.5.5.8 1 1.1 1.5zm-56.1 463.1c2.4-.9 4.7-6.5 3.8-9.3-.3-.9-.8-1.5-2.4-1.1-.2 2-.2 4.1.5 6.1-2.2 1.2-4.9-.1-7.1 1 1.1 1.8 3.5-.3 4.6 1.2.2.6-1.1 1.5.6 2.1zm66.2-464.5c-.1 1.3-1.5 2.1-1 3.4.6.2 1.3.4 1.9.5.1.7.1 1.2.3 2.6 2-2.8 2.5-4.7.4-6.7.5-.5.9-.9 1.2-1.1.5-1.4-1.1-1.6-1.6-2.4 0-1.3.2-2.8-2.3-3.2-.4 1.4.1 2.5 1.1 3.6-1 1-1.1 2.2 0 3.3zm-35 190.7c-5-.3-10-.6-15.4-1 .2.7.2 1.4.5 1.5 4.2 1.5 8.9.8 13.2 1.6 1.1-.2 2-.6 1.7-2.1zm-10.5 45.3c3.7 1.1 6.8-1 9.8.2 1.2-.5 1.7-1.1 1.1-2-.9-.7-2.3.1-3-1 1.2-1.6 5.1-1.1 5.1-4.2-3.2.8-5 2.4-6.2 4.4-2.4.5-4.5 1.1-6.8 2.6zM86.7 256.1H77c-.5.9-.6 1.5.3 2.2.6-.1 1.3-.1 2-.2.3.5.6.9.9 1.4h6.7c.5-1.4 1.1-2.5-.2-3.4zm106.5 116.4c-4-.4-8-.8-12.1-1.2-.4 1.6-.1 2.8.5 4.2 3.8-.3 7.6 1.2 12.5 0-4.6-.9-8.5-.8-13-2.5 4.8-1 8.3 1.1 12.1-.5zm102.1-271.6c-1.3 1.9-2.9-.2-4.3.4-1.1 1.3.9 1.7 1.1 2.8-.5 1.4-.3 2.7 1.3 3.7 2.4.6 3.2-1 4.8-2.1-2.4-.9-1.3-3.1-2.9-4.8zM125.6 77.2c1.6-.8 4-1.3 2.3-3.4-2 .5-4.2.3-4.7 2.4l1.4 1.4c-1.3 1.1-2.6.1-4 .1-.9.6-1.9 1.3-2.9 2 1.7 1.8 4.9 1.5 7.7-.6.1-.6.1-1.2.2-1.9zM141 328.4c.8 1.3 13.5 3.8 15.4 3.1-1.2-2.5-4.4-2.7-6.8-3.9-2.6 1.8-5.8.1-8.6.8zm228.9-80.8c-3.2.3-6.7.3-9.8 1.2-2.1.6-.9 2.7-1 4.2 3.5.6 8-.6 8.4-2.1-2.2-.9-5.2 1.7-8.1-1.3 3.8-.2 6.5-1 9.4.5.6-.6 1.5-1 1.1-2.5zm-251.6 26.2c.2 1.8.8 3 2.7 3.5 2.3-.1 4.5-.2 6.6-.4.2-1.1.3-2.1.5-3.2-3.3.1-6.4.1-9.8.1zm41.5 1.3c-1.3-2.7-2.6-5.3-4.2-8.6-1.3 3.4-2 6-1.7 8.8 1.9.3 3.6.2 5.9-.2zM143.5 289c.7-1.3.7-2.2-.6-2.9-4.5.2-9 .3-13.5.5-.5.9-.5 1.5.3 2 3 .1 5.7-.1 8.3-1.3 1.3 1.9 3.4 1.6 5.5 1.7zm194.2-137.7c1.5-.9 1.1-1.9.7-2.9.4-.7 1.4-1.3.8-2.2-.5-.4-1.1-.6-2-.2.2.6.4 1.2.6 1.7-2.4 2-1 4.7-2.8 6.5.8.7 1.2 1.1 1.7 1.6-.7.5-1.3.8-1.9 1.2.1 1 .2 1.9 2 1.9l1.7-1.7c-1-1.8 1.5-3.9-.8-5.9zM53.2 226.7c.9-.3 1.6-.6 2.3-.9-.5-1.5.3-2.9-1.2-4.2-2.2 1.1-4.1 2.3-5.3 4.1.8.9 2.4-.1 2.8 1.1-.8 1.1-2.4-.3-3.4.8.1.7.3 1.7.5 2.8 2.3-.9 3.8-1.9 4.3-3.7zM191 325.3c-1.3.4-2.1.7-2.8.9-3.8-1.4-9.1-.5-9.9 1.8h12.9c0-.8-.1-1.6-.2-2.7zM6.1 159.7c-.5 3.8-2.5 7.3-1.7 11.2 1.1-2.3 1.7-4.8 4.3-6.4-.8-.8-1.4-1.5-2-2.2 1.2-1.4 4.7-1.2 4.2-3.6-1.9-.8-2.9.6-4.8 1zm23.6 21.4c2.7 0 3.7-1.5 5.9-3.2-4.1-.4-7.5-.7-10.9-1.1-.1 1.3-1.1 2.5-.1 3.7 1.6.2 1.8-1.2 3.2-1.3.4.6 1.1 1.1 1.9 1.9zm260.2 123.6c-5.4-1.1-14.9.4-14.9 2.3 3.1.8 14.6-.9 14.9-2.3zm-109.1 37.2c4.3.1 7.6.9 11.8-.9-5-.2-8.7-.4-12.3-.6-.6 1.2-.9 2.3.2 2.9 3.5 1.8 7.5 1.2 11.5.8-3.2-1.3-7.3.3-11.2-2.2zm110.6-97.7c-1.2-3.1 3.2-2.8 4.7-4.6-1.5-.5-2.5-.8-3.8-1.2-1 2.1-4.4-.2-5.4 1.8.6 1.5 2.4.6 3.2 1.4-.8 1.1-2.5.4-3.6 1.1-.4.5-.6 1.1.1 1.8 1.5.8 2.9-.1 4.8-.3zm25.7 4.1c-1.1-.5-2.1-1-2.9-1.4.3-1.2 2.1-1.3 1.8-2.8-4.2 1-1.6 4.3-3.7 5.7 1.8 1.9 3.4.4 4.9.2.9.3 1.7.5 2.5.8 1.4-.7 2.5-1.5 2.7-2.9-1.4-1-3-.1-4.4-.4-.4.4-.8.8-.9.8zm-105.8 28.2c.1-1.8-.3-3.2-1.8-3.7-4-.4-6.6.3-6.9 3.7h8.7zm112.5-100c-1.9 1.3-2.1 2.6-.9 4.1-1.5 1-1 2.1-.1 3.1-.6.8-1.1 1.4-1.6 2.2 1.5.7 2.6.5 3.8-.3.1-1.2-.7-2.4.5-3.4-.2-.7-.4-1.4-.6-1.9 1.3-1.6 2.2-3.1-1.1-3.8zm-48.1 119.7h-4.1c-1.5 2 2 2.6 1.5 4.3-2.3 1.9-5.2.1-8.1.9 2.1 2.8 5.1 1.8 8 1.8.4-1.3.8-2.5 1.3-3.8.5-.4 1.1-.7 1.7-1.2-.1-.7-.2-1.3-.3-2zM45.4 198.9c.9-2.1 1.8-4.2 2.7-6.4-3 1.5-5 3.7-8.2 5.1 2 1.3-.5 3.4 2.2 4.3 1.4-.7.7-1.7.8-2.6.9-.1 1.5-.2 2.5-.4zm64.6 92.5c4.7 1.9 9 1 10.3-2.3-2.3-.1-4.6-.3-7-.4-1 .9-2.7 1.2-3.3 2.7zm108.1 13.9c-1.2 3.2 1.2 5 3 7.1 1.1.3 2.2.6 3.3 0 .3-.7-.2-1.1-.7-1.5-.8-.1-1.5-.2-2.2-.3-1.1-1.6 1.6-1.4 1.7-2.9-.8-1.6-2.3-2.8-5.1-2.4zm-11.7 186.1c.4.6.8 1.1 1.1 1.5 1.7.5 2.1-.9 3.2-1.1.7.3 1.4.6 2.3.9.2-1.3 2.8-1.1 2.3-2.8h-13.6c.9 2.2 3 1.4 4.7 1.5zM149 308.7c-1.6-.2-3-.4-4.3-.6-.8.3-1.4.6-2.1.9-1.2-1-2.8-1.1-4.5-1.5-.7.5-1.5.9-2.3 1.5.9 1-.2 1.9 0 2.9 1.8.2 1.4-1.3 2.3-1.6 1.5-.2 2.8-.3 4.2-.5.5.3 1 .6 1.5 1 1.8-.4 4.6.8 5.2-2.1zm76.6 183.4c.4-.2.8-.5 1.4-.9l1.8.9c.6-.2 1.1-.4 1.6-.6.7.4 1.4.7 2.4 1.2.2-.9.3-1.5.5-2.3-5.1-.8-9.9-.5-14.7-.4-.7.7-.7 1.3.1 1.9 2.1.2 4.3.2 6.9.2zm-80.7-196.9c-.6-1 .9-2.3-.7-3.2-1.6.3-.7 1.6-1.6 2.1-3.3.3-5.5 1.7-7.9 3.7 4.6 1 7.4-.5 10.2-2.6zm174.8-153.9c.8.2 1.7.5 3.3 1-1.6-2.8-2.8-5-4.2-7.4-3.4 1.2-1.7 2.9-1.6 4.4-.8 1-1.1 2-.1 3.1 1.3.3 1.8-.5 2.6-1.1zM195.1 514.8c-2.1 3.2-.7 6.7-1.2 9.9.8.6 1.4.6 2.3.1.1-.6.2-1.3.3-2 .5-.5.9-1 1.4-1.6-.6-.5-1-.9-1.4-1.3.4-1.7.1-3.4-1.4-5.1zm-138-283.1c-.5-1.2.5-2.7-2-3.7-.6 1.4-3.9 1.2-3.1 3.5.8.3 1.4.6 2.1.9-.9 1.2-1.7-.2-2.5.1-1.1 1.6.1 2.6 1.6 3.6 2-.8 2.4-2.1 2-3.5.6-.3 1.2-.6 1.9-.9zm234.5 69.9c-5-.5-9.9 0-14.6-.4-.7 1-.6 1.5.4 2.1 4.7-.5 9.7.3 14.2-1.7zm-120.5-15.3c.7-1.4 1.3-2.8 2.1-4.5h-7.5c.7 1.6-.1 3.3 1.6 4.5h3.8zm99 32.3c2.3-.3 4.4-.7 6.4-.9 2.1-.2 4.2-.3 6.6-.4.5-.6 1.6-1.2 1-2.3-6.2-.1-13.8 1.7-14 3.6zM9.8 148.9c-1.1.6-1.4 1.3-.5 2.5 2.1-.3 4.4-.7 6.7-1-.1-.9-.2-1.6-.3-2.1 1-.7 2.7-.8 2-2.5-2.5.4-5.1.8-7.6 1.2.7 2.1 2.7.2 3.6 1.4-.8 1.5-2.5.7-3.9.5zm185.9 186c2.7-1.4 5.6-.5 8.5-.4 5.1.2 7.3-.1 8.4-1.9-6.3.6-12.4.6-18.5 0 0 1.2.4 1.9 1.6 2.3zm99.2-92.3c-3.3.5-3.1 2.2-3.5 3.8h-4.1c-.7 1.9-.8 3.6.1 5.5 4.3-2.3 5.4-5.8 7.5-9.3zM214 273.2c3.4 1.9 7.8 1.2 11.6 2 1.2.3 2.1-.5 1.7-1.8-4.3-1-8.7-1.1-13.3-.2zm41.4 23.8c-.9.6-1.3 1.4-.4 2 1.7 1.1 3.4.3 5.3-.1-.4-1.9 3-3.9-.4-6-1.1 1.1-3.1.9-3.7 2.4.9.3 1.6.6 2.3.9-.7 1.5-2.1.6-3.1.8zm65.9-187.1c-.6-2.5-3.6-1.9-5.4-3.1-2.6 1.6-.6 3 0 4.5-.3.4-.7.9-1 1.3.6.9.1 2.1 1.6 2.8 2.6-1.4 1.5-3 .4-4.7.4-.4.7-.9 1-1.2 1.3 0 2 1.2 3.4.4zM178.4 319.7c.1 1.3 1.9.6 2.2 1.6-1.6 1.4-4.2-.6-6.1 1.3-.2.3-.8.9-.3 1.9 2.7.7 5.1.2 7.1-1.6.1-.5.3-1.1.4-1.6.6-.4 1.1-.7 1.8-1.1-1.7-.9-3.2-2-5.1-.5zm-9.8-.4v1.7c-2.9.3-4.9 1.3-5.6 4.1 2.7-.7 4.9-.7 6.9-.5 2.1-1.8 1.5-4.2-1.3-5.3zm37.5 6.3c-4.1-1.7-7.8.5-11.4-.2-.9.7-1.3 1.4-.7 2.2 3.9-.2 7.7-.5 11.6 0 .1-.9.3-1.4.5-2zm85-160.8c-2.4.6-1.4 2-1.4 3.2-1.3 1.1-1.5 2.6-1.9 3.9 1.4 1.1 3.2.6 4.9 1.1 1.3-2.1.1-3.6-1.7-5 .6-1 1.4-2.1.1-3.2zm16-34.2c1.2-.9 3.2-1.3 2.8-3.2-2.9-.7-5.7-.1-8.5.1-.7.8-.6 1.5-.1 2.4.5.2 1.2.5 1.8.7.8-.2 1.4-.4 2-.5.6.1 1.3.3 2 .5zm-66.4 160.1c-1-.1-1.6.4-2.2.9-.1 1.1-.6 2.1-1.8 2.7-2.9-.2-4 .5-3.9 2.9 2.6-2.3 7.5.5 9.3-3.3-.7-.4-1.2-.6-1.7-.9.5-.8 1.5-1.5.3-2.3zm-9.4 30.1c1.9-.8 1.5-2.9 3.7-3.4 3-.7 3.5-1.4 2-3.1-4.3 1.1-6 4.9-11.2 5.9 2.6 1.2 4.2.7 5.5.6zm-56.1 12.4c5.5.7 11.1-1 16.1 1.1.6-.9.5-1.4-.1-1.9-4.2-.8-9.5-.9-12.3-.4-3.1-.8-3.4-.8-3.7 1.2zm112.8-25c-2.6-.6-14.4.9-14.9 2.4 4.9-.3 9.5-.5 14.2-.7.6-.4 1-.9.7-1.7zm25.1-22.4c-2.4-1.7-10.3 0-11.1 2.4 3.2-.2 6.4-.3 9.8-.5.7-.4 1.2-1 1.3-1.9zm-204.7-21.2c.5 2.7-1.6 4.9-.6 7.5 1.8-.1 3.5.6 5.2-.4.3-.8.4-1.6-.3-2.4-.9-.4-1.8-.7-2.6-1.1 0-1.2 1.1-2.6-1.7-3.6zm34.2 25.5c-4.1.7-8.5-1.2-11.2 2.9 4.2-.2 8.4 1.3 11.2-2.9zm-38.5 25.3c.6-3.1-2.8-5.4-7.6-5.6.2 2 3.3 1.1 4.1 2.5-1 1.4-2.2-.4-3.4.3-.7 1.3.4 1.9 1.7 2.5.7-.3 1.4-.5 2-.8 1.2.4 2.1.7 3.2 1.1zm127.1 116.9c1.8-.5 10.6-14.8 10.5-17-1.5.7-9.7 13.9-10.5 17zm-69.5 78.1c-3.4 1.2-7.8-.9-12 2.4h12.1c.8-.7.8-1.3-.1-2.4zM296.9 152c3.5.4 6.4-.1 9.2-.5.5-.8.3-1.5-.3-2.3-2.4-.7-4.9.2-7.4.1-.4.9-.9 1.6-1.5 2.7zm-88 148.2c-2.1 2.1-6.5 2.1-6.8 5.5.2.5.6.9 1.6 1 1-.4 2-.8 3.1-1.3-.2-.7-.3-1.3-.5-1.8 1.3-1.1 3.2.7 4.3-.8.2-1-.5-1.8-1.7-2.6zM65.9 78.9c.3.7.8 1 1.8 1 1.1-1.4 4-.3 5.2-1.9v-2.3c1.6-.9 2.8-1.9 2.8-4.5-2 1.8-3.3 3.1-4.8 4.2-1.5 1.2-3.2 2.3-5 3.5zm37.6 1.8c-1.8 1.1-4.9.8-5.7 3.3h5.5c1.5-.6 1.7-1.9 1.7-3.1 1.3-1 3-1.7 2.3-3.5-2.5.4-3.5 1.6-3.8 3.3zm205.3 211.6c-3.6.1-7 .1-10.3 1-.5.7-.7 1.2 0 1.9 3.3.2 6.5-.5 9.7-.9.6-.6 1-1.1.6-2zM67.6 262.7c3.6.9 5.9.2 6.1-1.8-.6-.2-1.2-.4-2-.7 1.8-.9 2.8-1.8 1.5-3.3-2.2.6-6 4.4-5.6 5.8zm299.4-117c-.4 1.1-.6 1.9-.9 2.6.5.7.9 1.2 1.3 1.7-.7.4-1.3.8-1.6 1-.2 1 0 1.5 1.1 1.8 1.7-.9.5-3.1 2.4-3.7.6-1.4-.4-2.4-1-3.4.4-.7.8-1.3 1.2-2 .6-.1 1.2-.1 2.3-.2-1.7-1.6-3.3.1-4.8-.6-.4.6-.7 1-1 1.4.4.5.7 1 1 1.4zm-46.4 133.7c.9 1.4 2.7 1 3.7.7 3-.9 3-3.8 5.9-5.2-7.1-1-9.1-.3-8.3 2.5 1.4-.8 2.7-1.5 4.1-2.2.9 1.1.9 1.1-5.4 4.2zm-235.9 1.5c-.5-1.5-2.7-.6-3.1-1.8.1-.6.6-.9 1.4-1 .9.2 1.5 1.3 2.9.6.3-1.5-1.4-2-2.5-2.8-1.2.4-2.3.7-3.6 1.1.3.8.6 1.4.8 2.1-1.1 1-1 2 0 3.1 2 .6 3.4.2 4.1-1.3zm45.7-8.5c2.1-.7 3.4-.2 5.1-.1 1.5-3-1.7-4.6-3.3-6.8-.6 2.2-1.1 4.3-1.8 6.9zm158.3-49.1c6.1.8 9.1-.3 8.5-3.4-1.5.4-2.9.8-4.3 1.2-.7-.5-1.2-.9-1.7-1.2-1.7.9-2.3 2.1-2.5 3.4zm63.6-104.6c2.5.4 4 .5 4.9-1.1 1.4-2.6-1.5-3.6-2.9-5.7-2.2 2.4-.8 4.7-2 6.8zM222.9 302.3c-.9.1-1.7.3-2.4.4-.4.7-.2 1.2.5 1.5 2.7-.6 6.1.3 8.2-2-.6-.5-1-.9-1.4-1.3-.1-.8 1.3-1.5-.2-2.5-1.5 1.3-3.1 2.6-4.7 3.9zm17.6 16c-1 .7-1.6 1.3-1.2 2.4.8.2 1.6.5 2.4.7-.2 1.8-2.4.7-3.2 1.7 0 .7.4 1.2 1.6 1.5 1.7-1.4 4.9.7 6.9-1.8-1.4-.3-2.5-.6-3.8-.9-.2-.9-.4-1.9-.6-3-.7-.2-1.3-.4-2.1-.6zm-60.2 32.9c-.1.3-.2.7-.3 1 3.7 1.6 7.9 1.8 12.1 1.6 1-.1 1.3-.7.8-1.6-4.1-.4-8.3-.7-12.6-1zM45 120c.6 1.2 1.4 1.3 2.1 1.3 3.6 0 2.8-3.6 5.7-4.4 1.7-.5 2.8-1.7 2.3-3.2-5.5.5-4.9 6-10.1 6.3zm231.4-66.8c-.9-1.8-2.3-3.1-4.3-2.9-2.2.1-4.9-.2-8 1.6 3 .1 4.8.2 6.5.3l.8 1.6c1.7-.2 3.2-.3 5-.6zm-32.8 267.5c7.1 1 11 0 10.1-2.7-3.6.1-7.3-.3-10.1 2.7zM100.3 76.8c2.4-.5 5.4.1 6.4-3.1-2.8.9-5.2 0-7.2 1.4-.1 1.9-1.6 3.5-3.3 5.1 2.5.9 3.3-.5 4.5-1.3-.1-.6-.2-1.3-.4-2.1zm153 194.3c-5-.7-9.3 2-9.8 6.1 1.4-.2 1.3-1.4 2.2-1.9 2.9-.9 5.9-1.8 7.6-4.2zM78.4 302.9c.4-.7.8-1.2 1.1-1.8-1.7-.3-3.1-1.1-4.8-.6.1 2.7 5.3 6.8 8.4 6.7-1-1-2.4-1.8-2.3-3.1-.7-.4-1.5-.8-2.4-1.2zm62.4-235c-1.9-.4-3.5-1.1-5.4-.7-1.7 1.8-2.7 3.6-3.1 5.8 2.8.1 2.8-1.5 3.3-2.6 1.9-.6 4.2-.3 5.2-2.5zm213.1 176.5c1.4-1.5 5.1-.6 4.9-3.4-4.8-1.1-5.1 2.7-7.5 4.2-1 .6-1.6 1.2-1 2.3 1.9.3 3-.9 4.6-1.3-.2-.4-.4-.7-.5-.9-.1-.3-.3-.6-.5-.9zm-220.5 62.4c1.5 1 1.6.9 2.8-1.6 1.2-.1 2.4-.3 3.8-.5.7-.8 2.5-1 2.7-2.4-5.5-1.5-7.7 1-9.3 4.5zM112.6 70.7c-1.6-1.2-3.2.2-5 0-.3-.3-.7-.8-1-1.2-2.5.3-3.3 1.5-3.8 2.9 4.1 1.2 9 .4 9.8-1.7zM178.2 294c.2-.6-.1-1.1-.9-1.6-2 1.1-5-1.4-7 1.1.3.6.5 1.2.7 1.6-.5.9-1.6 1.5-.7 2.5 2 .2 2.5-1 3.3-2-.4-.4-.7-.8-1.2-1.5 2.1.5 3.9.7 5.8-.1zm87.4-230.4c-4.3-.5-11.3 2-10.5 3.6 3.1-1.5 8.2.8 10.5-3.6zm11.7 144.3c-1.6 0-3.4-.5-5.3.1-.4 1-.7 2-.2 3.2 2.2.1 4.4.5 6.4-.6.4-1 0-1.8-.9-2.7zm73.4-100.1c-1.4.3-2.5.6-3.7.8-1.1.2-2.3.3-3.5.4-.2 1.3-1 2.4.7 3.3 1.2-.8.1-2.1 1.9-2.4.4.5.8 1 1.3 1.6h3.6c.6-1.3.7-2.5-.3-3.7zm-80.5 201.4c-11.6 1.1-12.4 1.4-11 4.1 3.6-.9 6.7-3.2 10.8-2.5.6-.6.9-1.1.2-1.6zm-29.8 7.8c5.1.6 8.2-.3 8.2-2.6-8.2.1-8.2.1-8.2 2.6zM190.5 11c-.4-1.6-2.1-2.5-1.9-4-1 .2-1.8.3-2.7.5-1.5-.7-2.9-.5-4.4.3.5 2.3 2.7 1.9 4.6 1.7.5.5 1 1 1.6 1.5h2.8zM85.2 263.7c-1 .6-1.9 1.1-2.9 1.6-.4 1.7 1.1 2.1 2.9 2.5-.4.6-.7 1.1-1 1.5.4.6.4 1.3 1.4 1.5.9-.1 1.4-.5 1.6-1.2-.3-.5-.6-1-1-1.5 2-1.9 1.8-3.4-1-4.4zM287.6 81.9c-2 1.1-4.8-.3-7 2.1h5c0 1.9-2 .7-3.4 2-.1.1 0 .7.9 1.3h4.3c-1.2-1.8 1.1-3.3.2-5.4zM152.3 307.5c2.2-2.7 6.8-1.6 9.5-3.8-3.7-1.8-7 .9-10.9-.3.9 1.1 1.4 1.7 2 2.3l-.6 1.8zm-53.4-9.3c1.1 2.8 4 2.2 6.5 1.9 1.7-.2 2-1.3 1.1-2.5-2.5.4-5.1-1.9-7.6.6zm190.5-86.4c-2.7.2-5.4.5-8.4.7.4.8.7 1.5 1 2.1 2.5.7 4.8.2 7 0 1.1-.7 1.2-1.5.4-2.8zm-5 72.9c2 .8 3.8.3 5.8-.6l-1.6-1.6c.4-1.7 1.2-3.5-1.9-4.2-1.5 1.7-.9 3 .5 4.4-1.5.3-3.2.2-2.8 2zm-27.2 35.4c3.4-.5 7.2-.2 10.8-2.5-4.2-.9-7.5.5-10.7 0-.8.8-.9 1.4-.1 2.5zm115.3-80.4c-3.3.5-7.4-1-10.6 2.6 4.1-.2 7.4-.4 10.5-.6.7-.7.7-1.3.1-2zM96.1 93.1h-9.5c-.4.7-.8 1.3-.1 2.1H95c.7-.5 1.4-1 1.1-2.1zm57 200.4c1.7-1 4.9.4 5.2-2.2-.2-.6-.7-1-2.1-1.1-1.1.6-2.5 1.4-4 2.2-.1.6-.2 1.1-.2 1.4-1 1-3.1 1.3-2.5 3 1.9 0 3.2-.4 4.2-1.5-.2-.5-.3-1.1-.6-1.8zm146.1-145.9h5.9c-.4-2.2-.8-4.1-1.2-6.2-2.6.4-1.4 2.1-2.3 3.2-1 .6-1.9 1.4-2.4 3zM9.1 189.8c-1.1-.1-2.2-.2-3.4-.3-.5 1.7.8 2.7 1.5 3.8-.4 1.6-1.6 3.4 1.5 4.1 2.2-1.7-.3-2.7-.4-4 1.5-.9 1.8-2.1.8-3.6zm153.2 122-1.4 1.4c-.8.3-1.9-.4-2.7.5.1.6.3 1.2 1.4 1.4.7-.2 1.3-.4 2-.7 3 .8 5.2-.3 7.7-1.7-2.4-1.3-4.9.2-7-.9zm41.7-10.9c.7-1.9 4.4-.9 4.6-3.2-4.4-1.1-7.6-.2-8.7 2.5 1.3.3 2.6.5 4.1.7zm58.3 6.3c3.9 1.5 9 .3 9.6-2.5-3.5.4-7-.1-9.6 2.5zm-148.9 11.3c.4 1.7.5 3.1 2.5 4 1.6-.6 2.8 1.1 4.5.8.5-1.4-.2-2.4-1.1-3.4-2 .1-3.8-.6-5.9-1.4zm149.9-76.9c-.7 3.2 1.3 3.9 8.7 2.8.3-.7.1-1.3-.7-1.9-2.6.2-5.4.5-8-.9zm25.2-149.8c-.5.6-.9 1.1-1.4 1.6 1.5 1.4-1.3 4 2.5 4.3-.2.7-.4 1.3-.5 1.8.9.9 1.8 1 3.1.2-1.6-1.7.4-4.5-3.3-5.5.5-.8 1.8-1.6-.4-2.4zM58 109.4c-3.5-1.5-4.9 1.2-7.2 2.2-.7.3-.4 1 .4 1.3 2.2-.3 4.4-.6 6.4-.9.5-1 .9-1.7.4-2.6zm72.4-42.1c-1.7 0-1.9-1.9-4.2-1.8.8 1.9-2.8 2-2.4 4 1.7 1.4 3.6.3 5.3.1 1.1-.3 1.7-1 1.3-2.3zm117.3 211c1.2-.3 2.1-.4 2.9-.6.7-.8 1.1-1.5.4-2.6-1.4.6-2.7 1.2-4.1 1.8-.1.8-.1 1.5-.2 2.1-.9.3-1.6.6-2.2.8-.2.8.2 1.3 1 1.8 1.4-.2 3.3.3 3.7-1.7-.4-.5-.9-.9-1.5-1.6zm85.4-129.9c2.6-1.5 1.1-3.8 1.5-5.8-3.5 2.6-2.2 6.2-3.3 9.4-.2.7-.7 1.2.6 1.4.6-1.2 1.1-2.3 1.7-3.6-.1-.3-.3-.8-.5-1.4zm-61.3 165.2c5.3.3 9.8-.8 14.6-1.3-1-1.5-13.2-.5-14.6 1.3zm-117-16.5c3.5 1.8 8.2.7 8.8-2.1-2.8 1-6.9-1.8-8.8 2.1zm185.8-127.5c1-.9.3-1.6-.7-2.3-1.1.2-2.2.3-3.7.6.6 2.3-.1 4.7 2.6 6.7 1.1-1.2 1.5-2 1.1-2.9-.7-.6-2-.3-2.2-1.3.5-.8 1.8-.2 2.9-.8zm4 101.9c3.5-.6 7.8 1.3 10.4-2.8-3.4 0-6.1 1.1-9 .6-.7.5-1.7.8-1.4 2.2zM296.8 297c-.6.7-.9 1.4 0 2.1 3.2-.3 6.5-.2 9.6-1.3-.3-1.2-6.1-1.6-9.6-.8zM38.9 127.7c2.7-2.6 6.4-2.2 7.7-5-2.6-1-4.4.4-6.3 1.2-.8-.2-1.5-.5-2.4-.7-.9 1.7 2 2.1 1 4.5zM340 114.6c-.8 1.7.7 10.4 2 10.8-.2-3.6 1.1-7.2-2-10.8zM142.5 324.7c-1.2-.5-1.7-2-3.5-1 .7 4.4 5.9 1.3 7.9 3 1.1-.4 1.6-.9 1.7-1.7-.9-1.5-3.2-.1-4.1-1.2-.8.3-1.4.6-2 .9zM65 286.3c2.6 0 1.6-1.7 2.4-2.5.7-.2 1.4-.5 2.2-.7-.4-1.7-2.3-1.8-3.5-2.5-.7.4-1.2.8-1.7 1-.9 0-1.3-.9-2.2-.4.2 1.4 2.2 1.2 3.1 2.1-.8.9-1.3 1.9-.3 3zM246 37c-2-2.9-5.1-2-8.5-1.5 2.2 2 5.1-.2 7.1 1.4-1 .5-1.9 1-3.4 1.7 3.1.8 5.2.2 8.7-.9-2.3-.4-3.1-.6-3.9-.7zM62.9 291.3c1.4 1.1.2 2.6.9 3.7 1 1.5 2.9 1.8 4.8 1.8 1 0 1.2-.8.8-1.5-1.2-.4-2.3-.8-3.5-1.2.3-.9 1.8-1.4.5-2.4-1-.1-2.3-.2-3.5-.4zM361 246.1c5.7.7 11.3-.6 11.1-2.5-3.4 1.1-7.6-.4-11.1 2.5zm-128.6 26.2c2.1-.4 3.8 1.4 6 .4 1.1-.5 1-1.5.6-2.4-1.5-1-3.5.2-4.8-1-1.4.6-2.2 1.3-1.8 3zm121.4-15.2c4.4.7 11.9-1.1 11.8-2.8-3.2.4-6.5.8-9.9 1.2-.5.5-1.1 1-1.9 1.6zM229.3 516.9c-1.4 3.1-2.3 5.4-2.6 7.8 1.2.6 2 .6 3.3-.1-.4-2.2 1-4.6-.7-7.7zm103.1-231.6c.5-1.8-1.6-1.5-2.1-2.3.7-1.2 3.3-.1 3.4-2.1-2-.7-3.6-.1-5.1.8.3.6.5 1.1.7 1.4-.6 1.4-3.2.9-3.4 2.7 2.3-.1 4.4-.3 6.5-.5zM277.7 67.8c-1.5-.5-2 .6-2.4.6-2.2-.2-1.8-2.8-4.3-2-.6 1.2 1.1 1.5 1 1.3.8 1.8 0 3 2.1 3.7.3-.4.8-1 1.2-1.5.9.3 1.5.5 2.2.7 1.4-1.1 1.1-2 .2-2.8zm-40.4 428.7c-4-.4-5.3 1.5-3.6 5 3.2-.8 4.9-2.2 3.6-5zm28.9-411.1c4-.3 7.5-.7 11.1-1 .4-.7-.2-1.5-1-1.4-3.3.3-6.7-.3-9.7 1.1-.7.3-1 .9-.4 1.3zM3.8 197.6c2.1-2.9 0-5.2-1.5-7.6.3 3.5.5 7.1.8 10.7 1.1 0 1.9 0 2.3-.7 0-1.1-.9-1.7-1.6-2.4zm345.8 15.2c-.9.9-3.1.9-2.8 2.6 1.6 0 1.4-1.8 3-1.7.4.6.9 1.2 1.5 2 1.4-1.2 4.4.6 5-2-1.9-.9-4 .8-5.7-.7.4-.6.9-1.3 1.3-1.9-.1-.6-.2-1.2-1.3-1.2-1.2.6-.4 1.9-1 2.9zm-226.5 84.8c.2 2.2-3.6 1.8-3.6 4.1 1.9-.1 3.8 1.3 5.4-.7-1-.5-1.6-.8-2.3-1.2 1.8-1.3 3.5 1.1 5.2-.2-.1-2.3-2.5-1.5-4.7-2zm226.5-190.8c-.6-2.3-2.4-3.9-4.1-5.5-1.1.6-1.3 1.1-1.1 2 .8.4 1.6.7 2.7 1.2-1.3 1-4 .4-3.7 2.7 2-.1 3.8-.2 6.2-.4zM148.4 73.2c1.5-3.2 5-3.5 8-5-2.3-1.5-4.4-.4-6.4-.5-.8-.1-1.4.6-1.6 1.4.2.5.4 1 .5 1.4-.2.7-1.3 1-.5 2.7zM19.4 221c-.8.7-2.4 1.2-1.6 2.5 1.2 1.8 3.4.3 5.5 1.1-1.4-1.3-.7-2.8-2-3.6.7-2.3.7-2.4-1.5-2.4-.1.8-.3 1.6-.4 2.4zm26.8-17.1c2.8-.2 3.7-1.6 4.4-2.7.8-1.2 1.1-2.7-.7-4.2-2.4 1.9-2.6 4.3-3.7 6.9zm184.6 323.7c-3.7-1.1-7.1-.4-10.8-1.1 1.7 2.8 8.2 3.4 10.8 1.1zM53.6 94.7c.9-.2 1.7-.4 2.5-.7.6.3 1.2.6 2 .9 1.9-.9 4.3-1.4 4.2-3.7-2-.3-2.7.7-3.9 1.2-.5-.2-1.2-.3-2-.6-.7 1.1-2.6 1.1-2.8 2.9zm226.6 25.1c-.6 1.1-.5 2.2.6 2.7 1.5.6 3.3.6 4.7-.2 1-.6 2-1.4 1-2.5h-6.3zM83.9 96.5c-.9 1.1-.6 1.8.6 2.5 2.1-1.4 6.2 1 8.2-2.5h-8.8zm108.8 262.7c.7-.4.9-.9.5-1.5l-12-.9c.5 1.8 1.9 2.1 11.5 2.4zm-99-83.7c1.3 1.8 3.4.9 5.2.9 1.4 0 2.6-.7 3.2-1.7.3-.5.3-1.2-.9-1.4-.3.6-.7 1.2-1 1.7-1.8.2-1.4-1.2-2.6-1.6-1.5.3-3.1.5-3.9 2.1zM336.6 201c-.2.5-.5 1-.7 1.5 1.3.6 1.5 1.6 2.2 3.4v-2.5c1.2-1.2 3.1-2.1 1.8-4-.7 0-1.4.1-1.9.1-1-.4-1.2-1.4-2.5-1.2-1.4 1.3-.2 2 1.1 2.7zm-87.5 103.7c1.4-.9 2.7-1.8 3.4-3.1-.5-.5-1-.9-1.5-1.3.7-.8 3.1-.9 1.3-2.5-.7.3-1.4.6-2 .8-.1.8-.2 1.3-.4 1.9-.7.3-1.4.5-2.1.8-.3 1.3.1 2.4 1.3 3.4zm35.1-57.9c-5.2-.9-7.5-.5-8.6 1.6 4.3 1.1 8.5.3 8.6-1.6zm46.6 23.1c-1.7 1.2-4.6.1-6.2 2.4 2.8 0 5.3 1 7.4-1v-1.7c.9-.9 2.9-1 2.5-2.6-2.7.1-3.5 1.4-3.7 2.9zm9.6-140.4c-.8.8-1.5 1.5-2.4 2.3 1.1 1.5-.9 3.5 1.3 4.9 1.2-.6 1.6-1.5 1.7-2.4l-1.6-1.6c1-.2 1.8-.4 2.6-.6.4-.7 1-1.4.4-2.3-.5-.1-1.1-.2-2-.3zM200.6 359.1c-.7.5-1.3.9-1.7 1.3H196c-.3.6-.3 1 .6 1.3 1.7-.6 3.8 0 5.6-1.1-.3-1.4.8-3-1.5-4.1-1 1.1-3.2.1-4 1.5.9 1 2.5.2 3.9 1.1zM314.7 143c-.6-2.6.8-5-.1-7.3-1.3-.4-2.3-.2-2.5.5-.5 2.1 1.2 4.1 0 6.3.9.2 1.5.3 2.6.5zM11.4 175.3c2.2-1.2 3.9-1.7 2.1-3.8-1.3.8-2.1.1-3.1-.6-.7 1.5-2.7 1.1-4.1 1.9-.1.5-.1 1-.2 1.6.8.3 1.5.6 2.3 1 .7-1.1 1.3-2 1.8-2.8.7-.2 1.3-.3 1.9.2-.2.6-.4 1.2-.7 2.5zm146.9 123.8c-2.8 0-5.1-.7-7.3.3-.5.7-.6 1.3.1 2.1 2.8.8 5.3.5 7.2-2.4zM298.9 272c.3-.7.5-1.4-.5-1.9-1.5.1-2.4 1.3-4 1-.3-.5-.6-1-1.1-1.7-2 1.1-1.9 2.3-.9 3.6 2.3 0 4.6.1 6.5-1zm-6.1 33.6c3.1-.2 5.9.2 8.5.6.9-.9.9-1.5-.1-2.4-2.6.6-6.2-.8-8.4 1.8zM19.1 161.9c-1.9-.4-2.3.7-3.6 1-.8-.3-1.7-1-3.2-.2-.1.5-.1 1.1-.2 1.5 1.1 1 1.9 1.8 3 2.8 1.5-1.8 2.7-3.3 4-5.1zM311 155c.4.9-.4 2.3 1.9 2.5.2-.8.4-1.4.6-2.1l1.8-.6c.3-1 .5-1.8-1-2.5-.9.4-2 .8-3.1 1.2-.5-.1-1.1-.3-1.7-.4-.7 1.3 1.1 1.1 1.5 1.9zm-17 77.5c3.5.6 5.5-.8 7.3-2.3.7-.6.1-1.2-.8-1.5-2.7.4-5.1 1.3-6.5 3.8zM282.7 55c-4.6-1.8-7-1.6-8.5.8 1.3-.1 2.4-.1 3.5-.2-.1.8-1.7.6-1.4 1.6 1.7.5 2.6-.4 3.6-1.1 1.2-.2 2.7.7 2.8-1.1zM29.8 208.3c1 .1 2.1.3 3.3.4 1.4-1.2 3.2-2 3.7-3.6-3.2-.8-6.9.9-7 3.2zm-4.9-3.8c-3.7-1.3-6.1-.5-6 2.1 1.3.7 2.7 1.2 4.4.7.7-.9 1.6-1.7 1.6-2.8zm290.2-16.6c-1.6 2.1-3 4.2-3.3 6.9-.3.4-.8.9-1.2 1.3.6.8 1.2.9 2.1.4-.5-1.6 1.4-2.5 2.2-3.7-.3-.7-.6-1.3-.8-1.9 1-.4 1.9-.7 2.6-.9.1-1-.2-1.6-1.6-2.1zm2.8-115.8c-1.4-.8-2.8-1.6-4.1-2.4-1.4.3-2.6.4-3.4 1.6 1.4 3.7 4.8.8 7.5.8zm-134 227.2c2.6 1.2 4.4-.1 6.5-.4-.2-1.2-.6-2.2-2-2.8-2.1.3-4 .9-4.5 3.2zm-3.3 63.3c-.3 1.4.7 2 1.8 2.1 2.7.3 5.4.9 8.3-.7-3.3-.5-6.7-.9-10.1-1.4zm-31.2-38.7c.7-1.7 2.4-1.7 4-2.4-2.1-1.1-.7-3.3-2.9-4.4-1.1 1.1.1 1.9.3 2.9h-2.3c-.8.4-1.5.7-1.4 1.8 1.3 0 1.6.9 2.3 2.1zm.3 229c.5 3-2.8 5.8-1.2 9.1 2.2-.9 3-6.8 1.2-9.1zm185.8-435.4c1-2.6 1.8-4.8 2.7-7-.9-.8-1.8-1-3.2-.6-.3 1.4-.5 2.9.2 4.4-.3.9-1.6 1.7.3 3.2zM206.2 295.6c3.2.1 6.3.6 9-.9-.1-1.3-1.5-1.7-2.4-1.4-2.1.7-5.3-.4-6.6 2.3zM56.6 277.8c.2-2.6-3.4-4.4-6.7-3.5.7 2.9 3.5 3.3 6.7 3.5zm125.9 46.8c2.5.8 3.6-1 5.4-1.4.7.3 1.4.6 1.9.8.9-.3 1.2-.7.8-1.6-1.9-.7-4.1-.8-6.3-.2-1.1.3-2.4.9-1.8 2.4zm42.6-6.2c-3.2-.3-5.7-.1-7.3 2.7 2.9-.2 5.3-.3 8-.5-.3-.8-.5-1.4-.7-2.2zM50.2 250.5c2.2-.3 3.9-1 5.5-2.3-1.7-1.5-3.6-2-5.5-1.2-2 .9-.8 2.2 0 3.5zM93.6 287c1.6-.2 3-.5 4.4-.5 1.3 0 2.8.8 3.5-1.1-3-.5-5.8-1.2-8.8-.6-.5 1.1 0 1.8.9 2.2zm161-245.6c-2.7-2.8-6-1.3-8.7-1.8-1 .7-1.3 1.4-.1 2.2 2.6-.9 5.5.1 8.8-.4zM15.8 168.3c-1.4-.7-2.8-1.6-4.5-.5.1.9-.7 1.8.2 2.5 1.2.5 1.7-.4 2.6-.6.6.2 1.1.5 1.8.8.8-1.1 3.3-1.1 2.7-2.9-1.2-.3-1.8.4-2.8.7zM294 229.4c-3.4-.5-5.8.4-7.6 2.4 2.7 1.5 6.4.4 7.6-2.4zm-148.7 69.2c-4.7 1.4-4.7 1.4-4.4 2.5 2.3.1 4.7.6 6.4-1-.1-1.2-.2-2.3-.3-3.4-2.2 0-1.3 1.3-1.7 1.9zm47.8 1.6c2.9.3 4.6-.9 6.2-2.6-1.9-1.3-3.7-1-5.4-.2-1.2.7-1.8 1.7-.8 2.8zm86.4-26.8c2-.1 3.6-.2 5-.2.5-.9.6-1.5-.2-2.2-.8.1-1.7.1-2.6.2-.5-.5-1-1-1.5-1.6-1 .3-2 .3-2.3 1-.4 1.4 2.7.8 1.6 2.8zm-162.6 21.1c1.2 2 3.2 1.9 5 1.8 1.4-.1 2.7-.6 2.9-2.3-2.7.1-5.3-1.1-7.9.5zm74.8 43.7c-4.5.2-8.3-1.1-12.5-.4 1.5 1.7 10.2 2.1 12.5.4zM52.9 237.8c.4 1.2.7 2.3 2.2 2.8 1.2-.1 2.4-.3 3.6-.4.5-.9.7-1.7-.1-2.8-1.8.3-3.7-.3-5.7.4zm-24 13.7c.1 3.1 2.4 3.8 5.5 4.3.9-3.7-2.3-3.8-5.5-4.3zm313.2 23.8c2.9-.5 6 .2 8.6-2l-7.5-.3c-.8.5-1.6 1-1.1 2.3zm9.6-14.9c3.8-.1 7.8.4 10.9-1.8-3.7.6-7.7 0-10.9 1.8zm-44-84.2c1.4-.1 2.7-.2 3.8-.2 1.4-1.6 1.4-1.6.8-3.2-3.2-.9-5.1.5-4.6 3.4zm-22.9 61.1c3.8 1.7 5-2.1 7.9-1.1.5-1 2.4-1 2.4-2.5-4.4-.5-6.5 2.6-10.3 3.6zm-109.6 92.8c5.6 1 10.8.3 16.2.8-.7-1.7-11.3-2-16.2-.8zm97.7-123.9h3.8c.4-2.2-.2-4-2.2-6.4-.6 2.5-1 4.3-1.6 6.4zm21-87.3c-.4-.7.5-1.4-.6-1.9-1.1.8-3.2 3.9-3.3 4.9 1.9.1 3.7.2 5.3-.7.4-1.2-.7-1.7-1.4-2.3zm67 143.4c-4.4-1-11.4.6-11 2.1 3.3-.8 7.1 0 11-2.1zM127 278.1c-1.7 1.1-3.9-.6-5.6.8.1 2.9 3 2 4.8 2.5 1.7-1.4 1.7-1.4.8-3.3zM106.7 62c-1.7.1-6.4 5.1-6.3 6.5 2.3.1 6.8-4.4 6.3-6.5zm200.5 152.6c3.7-1.1 5.3-3.9 4.2-7.9-.6 3.3-4.7 4.7-4.2 7.9zm43.8 41.3c-2.1-.6-4.2 1.7-6 0-1.2.7-2 1.3-1.7 2.3 5.3.7 7.3.1 7.7-2.3zm4.1-127.9c-2.3 2-1.6 6.5.9 7.1 1.7-1.2.1-2.2-.6-3.3 1.7-1.3 2.4-2.6-.3-3.8zM56.7 251.2c-1.5.7-3.7.8-3.4 2.8 1.6 1.1 3.2 1.6 5.2.4.1-1.2.5-2.5-1.8-3.2zm245.5 48.7c-1.8 1.7-6.2-.9-8.1 3.3 3.7-1.4 6.6-.6 9.2-1.2.8-1.1.5-1.6-1.1-2.1zM261.6 72.2c3.1-.2 5.5-.4 7.9-.6.5-1.1.3-1.7-.7-2.2-2.5.2-5.5-.5-7.2 2.8zM113.3 300.8c1.9.6 3.3.2 4.5-.9.8-.7.5-1.3-.4-1.9h-2.2c-.1-.7 1.3-.9.5-1.7-1.8 0-1.6 1.6-2.8 2.1.1 1 .2 1.7.4 2.4zm87.3 1.4c-1.9-1-3.6-.5-5.2.4-.9.4-1.7.8-1.1 1.8 1.2.2 2.4.4 3.7.7 1.2-.8 2.8-1.2 2.6-2.9zm-64.8-8.1c-2.8 1-4.7-.6-6.8.3.3 1.3 0 2.6 1.8 3.5 1.3-1.1 3.7-1.3 5-3.8zM290.5 309c3.2 1.2 8.9.4 9-1.3-3 .3-6.3-1.3-9 1.3zM82.4 272.3c.5-1.6-.2-2.7-1.5-3.5-1.1-.7-2.2-.3-3.4.4.2 1-.5 2.2 1.1 3.1 1.2-.7 2.4-.2 3.8 0zm108.5 62.9c-4-.1-7.7-.3-12.1-.5 4.7 2.3 12 2.4 12.1.5zm47.5 92.6c2.5-1 8.4-9.4 7.8-11.5-2.7 4.1-5.1 7.6-7.8 11.5zM42.2 246.5c-1.1.8-1.7 1.6-1.2 2.8 1.6.7 3.1.4 4.8.1.4-.6.7-1.2 1.1-1.9-1.6-.8-3.1-1-4.7-1zm255.2 1.2c6.4-.1 7.7-.5 7.9-2.6-1-.3-2-.5-2.9-.7-1.8.4-2.8 1.1-3.1 2.1-.4.7-1.8.2-1.9 1.2zm39.9 28.2c.7-.5 2-.9 1.9-2-3.9-1.2-6.6-.3-6.9 2.5 1.6-.2 3.2-.3 5-.5zM84.7 76.5c1 .4 1.6.7 2.4 1 .5-.9 2.6-.9 1.8-2.6-.9.5-1.6.9-2.4 1.4-.6-.5-1.2-1-1.8-1.6a84 84 0 0 1-4.1 3c-.1.8.1 1.2 1.7 1.4.6-.7 1.5-1.6 2.4-2.6zm261.5 169.1c-2.3.3-4.1.6-5.8.9-1 .9-1.5 1.7.1 2.7 1.6-1.3 5.5 0 5.7-3.6zm1.2 22.1c3.4-.8 7.2.4 10.1-2.3-3.1.2-6.2.4-9.5.7-.5.2-.9.5-.6 1.6zm-58.1-118.3c-.7 1.1-.5 1.9.5 2.6 1 .7 2.2.7 3.2.3 1.2-.5 2-1.4 1.7-2.8-1.8-.1-3.5-.1-5.4-.1zM37.4 242.9c.4 1.2.9 2.4 2.8 2.2 1.8-.1 3-.9 3.2-2.4-2.3-1.3-4.4-1.2-6 .2zm57.2 70.4c-.7-2.5-5.2-5.3-7.5-4.7 1.6 2.4 3.9 4 7.5 4.7zm-64.2-74.4c1-.8 1-1.6.6-2.5-1.5-.4-2.9-.7-4.3-1.1-1.2 1.3-1.5 2.3.1 3.3 1.2.2 2.4.3 3.6.3zM74.2 96.4c2.6-.8 5.5-.4 6.8-2.8-1.4-1.6-3.1-.6-4.5-.3-1.5.3-2.5 1.3-2.3 3.1zM109.6 309c-2 .6-3.7-1.7-5.8-.2 1.7 2.3 5 1 7.3 2.4v-4.7c-2.3.3-1 1.6-1.5 2.5zm178.6-92c-1.7-1-3.6-.9-5.6-.4-.1 1.1-.4 2.1.7 2.9 1.4-.2 2.7-.4 4.1-.7.7-.4 1.1-1 .8-1.8zM97.4 291.1c2.3-.9 4.7.8 7-.4 0-1-.5-1.7-1.6-2.4-2.7-.4-4 1.3-5.4 2.8zm249.9-110.9c.9.9.4 2 .4 2.9.8.5 1.3 1.1 2.3 1 1.4-.9.2-1.8.1-2.8.6-.8 1.2-1.7 0-2.7-1.6-.3-2.3.5-2.8 1.6zM248 46.9c-.3-2.6-3.4.1-4-1.8.7-.3 1.5-.7 2-.9-.2-1.2-.5-1.6-1.5-1.7-2.5.5-2.1 2.7-3.8 4 2.7 0 4.8.2 7.3.4zm-89.2 254.7c2.4.7 4.4.6 6.4.3.5-1.6-.4-2.4-1.9-2.7-2.4-.5-3.1 1.1-4.5 2.4zm48.4 156.5c1.1.5 2.1.4 3-.4 1-.8 2.5-1.6 1.4-3-2.9-.9-4.8.5-4.4 3.4zm-88-172.3c-1.2.6-3.2-.2-3.7 1.8 2.2.2 4.3.3 6.9.5-.8-1.7-1.4-3-2-4.3-2.1.1-.7 1.3-1.2 2zM288 76.3c-.7-2-.2-4-.7-5.9-1.5-.1-2.6-.1-4.1.8 2.3 1.4 2.9 3.5 4.8 5.1zM338.4 230c3.6-.5 6.9-.9 11.2-1.5-4.9-1.8-10.2-1-11.2 1.5zm-314.2-.5c1.6-.9 2.4-1.7.9-3h-5.2c-.1.9-.2 1.6-.4 2.5 1.2-.2 2.1-.4 3.1-.6.4.3.9.6 1.6 1.1zm54.4 63.6c1.8.3 3.4.5 5.1.7.3-1.6-.5-2.6-1.7-3.4-1.7-.1-3 .3-4.2 1.4.3.4.6.9.8 1.3zm102 67.1c1.2 1.3 10.6 2.3 12.5 1.4-.7-.7-11.4-1.9-12.5-1.4zm135.4-155c2.5.6 3.4-.9 4.8-1.7.6.2 1.2.4 1.9.6-.7-.9-1.2-1.9-1.7-3-2.7.7-4.6 1.7-5 4.1zm8.4 59.4c-3.2.8-7-.9-10.2 1.5 1.7.9 2.4-.3 3.5-.1 2.7 1.1 4.9.6 6.7-1.4zm-224.3 36.6c1.4 4.1 5.8 1.7 7.8 3.5 1.2-2.7.5-3-5-2.3l-2.8-1.2zm-29.4-11.7c-1.4-.4-1.9-1.8-3.5-1.3-.1 2 3.4 3.6 7.6 3.5.1-1.2-.9-1.9-2.1-2.5-.7.1-1.4.2-2 .3zm119.5 15.1c.6-1.3.5-2.4-.9-3.2-1.5-.8-2.6.2-3.6.9-.9.6-1.3 1.3.1 2.3 1.4-1.2 2.8.1 4.4 0zm119.4-78.2c2.1-2.1 4.1-4.2 6.8-7-5.4.6-4.8 4.9-8.3 5.6.1.9.4 1.3 1.5 1.4zm-161.4 75.9c-3.1.7-4.8 2-5.8 4.4 1.8-1.8 7.9.8 5.8-4.4zm-32.9 7.7c-.3 2-2.7 2.8-3.4 4.6 1.9 1.1 3.3 0 5-.4-.4-.7-.7-1.2-1-1.7.2-.9 1.8-1 1.4-2.1-.5-.2-1.1-.3-2-.4zm77.9 143.9h4.6c.5-1 .7-1.9-.4-2.8h-4.9c.4 1.1.5 1.9.7 2.8zM22.3 127.1c5.1-.2 6.6-1 5.7-3.1-1.5.2-3 .3-4.6.5-.8.7-1.8 1.4-1.1 2.6zm287.5 120.7c-2.2.6-3 2.3-5.8 2.2-.3-.4-.9-1.2-1.8-2.5-.6 2.7 1.4 2.8 2.9 3.3.1.5.2 1 .5 2 1.6-1.7 4.6-2.1 4.2-5zm-10.3 2.7c-1.3-1.2-3-1.6-5.3-1.6.6 1.6 1.1 3 1.7 4.4 2.1-.4 2.7-1.7 3.6-2.8zm9.8 4.3c-.3-.4-1.7 1-1.9-.5.7-.1 1.3-.1 1.8-.2.5-.6.6-1.1 0-1.7-1.8-.2-2.6 1.1-3.8 1.7-.1 1.1.6 1.9 1.4 2.7 1.2.1 2.4.5 3.4-.3.4-.6.1-1-.9-1.7zM84.9 83.8c1.9 1.6 3.8.3 5.6.6.5-1.1 1-2 .3-3.1-2.3.2-4.3.8-5.9 2.5zm196.6-18.2c1.5.1 2.5-.2 3.5-1-1.6-1 .1-3.1-2.2-4-1.1.2-2 .5-2.4 1.5.5.5 1 .9 1.5 1.4-.2.6-.3 1.3-.4 2.1zm97.5 88c-1.6.1-3.1.2-4.6.3-.2 1-.6 1.8.3 2.6.7-.2 1.4-.4 2.1-.5 1.1.3 2.1 1.2 3.3-.1-.4-.7-.7-1.4-1.1-2.3zm-50.7-28.8c.9.3 1.5.5 2.7 1-.9-2.2-3.2-1.7-4.4-2.5-1.8 1.2-1 2.4-.6 3.7-.3.5-.5 1-.8 1.5.3.6.6 1.1 1.7 1.2.3-.4.7-.8 1-1.2-.5-.7-.8-1.2-1.2-1.8.5-.5 1-1.1 1.6-1.9zM312 294h5.3c.9-.5 1.6-1.2.8-2.4-1.5.1-3 .1-4.6.2-.9.4-1.7.8-1.5 2.2zM34.8 236.8c-.9 1.5.2 2.3 1.4 2.8 1.9.8 3-.4 4.1-1.4-1.3-1.9-3.4-1.4-5.5-1.4zm66.1 72.5c.6-1 .6-1.6-.7-2.3-2.3.7-4.5-.9-7.5-.7 1.9 3.2 5.7 1.9 8.2 3zm272.3-76.7c-2.2 1.4-6.3-1.7-7.6 2.4 3 .9 5.3-1.7 8-.8.6-.7.5-1.1-.4-1.6zm-107.7 88.7c-3.4-.2-6.9-.5-9.6 1.5 3.3 0 6.7.1 9.6-1.5zm-99.3-26.6c.3-3.7-2.6-3-4.5-3.4-.8.8-2 1.1-1.9 2.3 1.8.4 3.9-.3 6.4 1.1zm103-211.6c2.2-1.5 4.8-.9 7-1.9-1-2.3-3.4-.9-4.9-1.6-1.1.9-2.4 1.5-2.1 3.5zm-63.9 210.2c-3.1-.4-5.5-.1-7 2.3 3.3.9 5.5.3 7-2.3zM159 308.5c2.7.6 4.9.1 6.9-1.2.6-.4.4-1-.5-1.3-6.6 1.3-6.6 1.3-6.4 2.5zm-62.2-44.6c-.8 1.4-.1 2.4.6 3.4 1.1.1 2.2.3 3.5.4.3-1.2.6-2.3-.1-3.4-1.3-.1-2.6.3-4-.4zM26.1 189c1.7.4 2.9 0 3.9-1 .7-.8 1.4-1.6.2-2.7l-3.9 1.8c-.4-.7-.6-1.2-.9-1.7-.2.1-.4.1-.7.2.4 1.1.9 2.3 1.4 3.4zm57.8 97.4c1.6-1.4 3.7 1 5.7-.1.3-.9 0-2-1.1-1.9-2 .2-4.3-1.2-6 .5 0 .8.4 1.2 1.4 1.5zm-57.6-77.7c-3.2-.3-4.5 1-5.7 2.9 1.7.4 3.1.9 4.7.1.2-.6.5-1.2.8-1.8 0-.3 0-.6.2-1.2zM290.9 263c-2.3.9-3.8 3.2-3.3 4.8 1.6 0 3-.6 4.2-1.5-.3-1-.6-2.1-.9-3.3zm77.1-26.9c-1.2 1.4-3.4.1-5.4 1.8h10c.9 0 1.5-.2 1.3-1.1-1.1-.9-2.1.3-3.2.1-.8-.2-1.6-.5-2.7-.8zm-198.4 259c.1 1 .2 1.7.4 2.6 1.6-.2 3 .7 4.7 0-.1-.9-.3-1.8-.4-2.9-1.6.2-3 .3-4.7.3zM293 250.4c-2 1.1-1.2 2.4-1.2 3.6-1 .4-2.2.7-2.2 1.9 1.4 1 2.8.4 3.3-.5.9-1.5 2.1-3.3.1-5zm31.8-98.8c2.8-1.9 0-3.5 0-5 0-.9-.5-1.8-2.5-1.9 1.3 2.2.3 4.8 2.5 6.9zm-68.7 173c-.5.3-1.1.8-.5 1.8 2.9 0 5.6-.8 7.9-2.6-2.4.2-4.8.5-7.4.8zm-103.9 93.9c.4-.1.7-.3 1.1-.4-2-3.3-4-6.7-5.9-10-.3.1-.7.3-1 .4 1.9 3.4 3.8 6.7 5.8 10zm183-184.6c2.7.5 4.6-.2 5.6-2.6-2.3-.4-4 .4-5.7.5-.5.8-.5 1.4.1 2.1zM58.9 286.6c.7 3.4 4 2.8 6.7 3.8-.7-3.6-3.8-3.3-6.7-3.8zm.5-9.6c2.2 2.6 5 2.4 7.9 2.3-2.1-1.5-4-3.3-7.9-2.3zM5.5 176.1c-.5 1.1-1.4 2-.7 3.2 1.2.3 2.5.6 3.9.2.4-1.2.1-2.3-.8-3.3-.8 0-1.6-.1-2.4-.1zM51 268.8c-.3-1.6-1.5-2.3-2.7-3.2-1.1.2-2.3.3-3.7.6 1.6 2 3.2 3.2 6.4 2.6zm88.2 130.4c-2-2.9-3.9-5.9-5.9-8.8.2 3.6 2.8 6.3 5.9 8.8zm191.2-298.6c-1 .8.4 1.9-1.1 2.7-.6 0-1.4.1-2.1.1-.7.7-.9 1.3.7 2 .3-.5.7-1.1 1.1-1.7 1 .6 1.6 1 2.1 1.3.9-.1 1.6-.3 1.7-1.2-.8-1-.4-2.7-2.4-3.2zm-56.6 10c-3 .8-3.7 1.6-3.5 3.7 1.3.1 2.6.2 4.1.3.8-1.5-.3-2.7-.6-4zm-4.7 210.3c3.1 1.2 9.1-.3 9.8-2.8-3.1 2-6.9.9-9.8 2.8zm-93.8 181.8c.4-1 1-1.8.4-2.8-1.7.2-3.4.4-5.1.5-.4 1.1.1 1.8 1 2.3h3.7zM10.9 176.8c.5 1.2-.3 2.6 1.5 3.6 1.5-.8 2.8-1.7 3.5-3.1-1.5-1.4-3.1-1.2-5-.5zM300 260.7c2.2-.5 4.8.1 5.7-2.3-1.3-.6-2.3-1-3.4-1.4-1.2 1-2.6 1.8-2.3 3.7zM197.8 455.8h-4.1c.1 1.5 0 2.8 1.6 3.7 1 .2 1.6-.1 2.4-.8 0-.7 0-1.7.1-2.9zm100-144.5h-8.3c0 .2-.1.4-.1.6 1.3.5 2.6 1 4 1.4 1.4-.7 3.4-.3 4.4-2zM133.1 301c1.3-1 3.6.7 4.4-1.4-2-.6-3.8-1.1-6.2.1 1.9 1.1-1.5 2.7.9 3.8 2.3-.5 1.3-1.6.9-2.5zm194.7-144.5c-1.3 1.5-5.2 0-4.5 3.3 2.3.2 4.5.5 5.9-1.6-.4-.5-.8-.9-1.4-1.7zm-11-1c-.7.6-.6 1.1.3 1.6 1.1-1.2 3.6.8 4.4-.9v-3.3c-.7-.5-1.3-.6-2.1-.2-.2.9-.4 1.9-.6 3-.8-.2-1.4-.2-2-.2zm-86.4 142.1c-.7 1.1-.4 1.9.5 2.7h3.3c.5-.8 1.7-1.4 1.4-2.5-1.7-1-3.4.3-5.2-.2zM19.1 166.4c2.8-.4 4-1.9 5.3-3-.4-1.3-1.6-1.5-2.5-1.1-1.8.8-2.8 2.1-2.8 4.1zm205.8 142.8c2.9.6 4.9 1.1 7.3 0-.9-1.1-1.5-1.9-2.2-2.7-1.6.8-2.9 1.5-5.1 2.7zm87.1-90.9c3-1.7 3.6-4.9 7.5-3.5.1-.9 1.4-1.4.5-2.3-1.1.2-2.2.3-3.5.5-1.4 1.3-3.4 2.4-4.5 5.3zm-173.5 95c2.5 1.1 4.6.1 6.9-.6-.7-1.9-2.8-1.1-4.1-1.3-1.3-.2-2.6.4-2.8 1.9zm-61.3-30.9c-.3-.6 1.2-1.3-.2-2l-1.2 1.8c-.7.3-1.4.6-2.3 1 1.5 1.9 3.5 1.9 5.6 1.6.3-1.4-1.2-1.7-1.9-2.4zm280-175.2c-1 .2-2 .3-3.2.5.5 1 .9 1.7 1.3 2.4 1.5.3 2.7.4 3.9-.2.7-1.4-.7-1.9-2-2.7zm.6 122.8c-3.4-.7-5.5-.6-6.9 1.5-.1.6.1 1.1 1.2 1.5 1.7-.8 3.4-1.7 5.7-3zm-60.5 35.2c-1.4.5-2.7 1.1-2.7 2.8 2.1.6 3.9-.4 5.9-.3-.2-1.7-.3-1.8-3.2-2.5zm-241-7.4c.9 2.2 3 2.5 5.5 1.1-.9-.7-1.8-1.4-3-2.4-.8-.2-1.8.3-2.5 1.3zm181.6 46.9c.6-1.1.7-1.8-.6-2.3l-2.1.6c-.5-.3-1-.7-1.6-1.1-.8.3-1.6.5-2.8.9 2 2.5 4.8 1.2 7.1 1.9zM81.4 263.3c1.5-.7 3.9.3 4.7-1.8-2-1-4.3-.3-6.3-.8-.9 1.5.4 1.9 1.6 2.6zm21 20.5c.2-1.2-.4-2.2-1.8-2.4-1.5-.2-3.1 0-4.3 1-.1.7.2 1.1.8 1.4h5.3zm222.3-181c-1.9-1-3.6-.1-5.4 0 .6 1.3.8 2.7 2.7 2.7 1.8-.2 2.5-1.3 2.7-2.7zm-10.5 70.1c2.4 1.3 3.1 3.4 6.4 3.1v-3c-.7-.6-1.4-.7-2.1-.3-.4.5-.7 1-1 1.4-1.3-.2-.9-1.5-3.3-1.2zM35.3 200.5c-.7-1.4-2.1-1.1-2.9-.6-1.2.8-3.2 1.4-2.4 3.2 3.1.5 4.1-1.1 5.3-2.6zm44.1 99.3c-1.5-3.7-4.7-3.1-8.2-4 1.9 3.2 5.2 2.6 8.2 4zm117.8 149.1c.7-.6 1-1.3.4-2h-5.3c-.1 1.2-.1 2.1 1.2 2.6 1.2-.2 2.4-.4 3.7-.6zm115-342.2c.4-1.4.9-2.7-.7-3.6-.8-.5-1.8-.2-2.5.4-1.2 1-.6 1.9.3 2.9.9.1 1.8.2 2.9.3zM202.6 519.5c-2.8 1.6-2.9 3.5-3.6 5.5 1.5.1 2.7.4 4-.4-2.4-1.4-.2-3.1-.4-5.1zM196.5 314c.2.7.7 1.1 1.7 1.2 1.2-.9 3.5-.1 4.7-1.3-.6-.9-1-1.7-1.6-2.5l-1.6 1.6c-1 .4-2.4-.1-3.2 1zm-98-248c-3.2-.2-6.7 2-6 3.5 2.9 0 4.9-1 6-3.5zm63.4 465.5c.4 1.3.4 2.4 2.1 2.9.4-.5.7-.9 1.1-1.4h5.6c-3.4-2.2-6.1-1-8.8-1.5zM312 302.3c-2.5 1.8-5.4 0-7.2 2.4 1.6.3 2.3.9 2.9 1.8 1.5-1.1 3.5-1.6 4.3-4.2zm-49-52.2c-2.6.1-3.6 1.5-6 2.8 2.8-.2 4.4 1.2 6.6.1-.1-.9-.3-1.8-.6-2.9zm77.2-146c.9-.9 1.9-1.6 1.4-2.7-2.1-.7-2.4 1.1-3.5 1.5-1-.3-1.3-1.4-2.8-1-.1.8-.4 1.6.7 2.5 1.2-.2 2.6-.9 4.2-.3zM222.5 24.4c-.8-1.2-1.7-1.7-3.5-1.1.7 1.7-1.8 2.5-2 4.2 3.5.3 3.4-2.5 5.5-3.1zm109.2 60.8c-.2-1.2-.7-1.9-1.7-1.8-2 .2-4.2.3-6.1 2.1 3 .7 5.3.1 7.8-.3zM56.5 245.1c1.2.5 2.1.7 3.2.1.6-1.5.7-2.8-2-3.4-.6.3-1.3.6-2.1 1 .3.9.6 1.6.9 2.3zm7.4-155.2c1.8-.6 3.2-1.2 3-2.8-2.9-.4-4.9.4-7.1 2.6 2-.5 3.1-.5 4.1.2zM99 296.1c1.4-.8 3.3-1 3-2.9-1.8-.2-3.6-.3-5.4-.5-.6 1.8.8 2.6 2.4 3.4zm-59.1-90.8c-1.7 1.3-3.6 2-3.9 3.9 1.5.1 2.7.1 4 .2 1.3-1.3.7-2.5-.1-4.1zm230.3 40.9c-1.7.4-3.3.8-5.1 1.2 1.8 1.5-.3 3.1.8 4.6 2.4-.7 1.4-2.2 1.5-3.3 1.1-.6 3.1-.4 2.8-2.5zm-9.2 68.4c2.8.3 5 .5 7.2.7.3-1 1.4-1.7.2-3-1.6 2.1-4.9.2-7.4 2.3zm97.8-200c1-.2 2.1-.4 3.2-.6.4-1.2.4-2-1-2.5-3.2.7-3.2.7-4 1.7.1.7.8 1 1.8 1.4zm-14.9 120.6c-2.8-1.2-5.8.1-6 2.7 2.2-.7 4.8-.5 6-2.7zm-88.6 69c-.2-1-.5-1.6-1.9-1.4-.2.8-.4 1.7-.7 2.5-1.2.2-2.1.3-2.9.4-.4 1 .1 1.5 1 1.6 3.3.5 3-2.1 4.5-3.1zm1.8-11.6c-4.2 0-5.5 2-7.2 3.4 2.9 0 5.1-1 7.2-3.4zM73 80.5c-2.5 1.7-4.6 3.1-6.9 4.6 2.6 1.1 3.5.7 4.9-2 .8-.4 2.4-.5 2-2.6zm246.1 130.4c1.4-1.6 2.7-.9 4.2-.8.7-1.7-.1-3.3-.2-5.7-1.1 1-1.6 1.4-2 1.7.3.8.5 1.3.7 1.9-1.1.8-2.7.9-2.7 2.9zm-138.5 62.2c-.5 1-1.3 1.7-.9 2.9l4.2.3c.6-1.4.3-2.4-1.1-3.3-.6 0-1.3 0-2.2.1zM211 20c.3-.5.6-.9.8-1.3-.6-.6-1.1-.7-1.8-.4-.8 1.2-1.5 2.3-2.4 3.7 2 .6 3.5.5 5.2-1.2-.6-.3-1.2-.6-1.8-.8zM187.4 4.7c4.2 1.1 6.4.4 8.4-1.9-3.2-.7-5 .8-8.4 1.9zm13.3 303.5c.5-.9.7-1.5-.4-2.3-1.8.6-3.7 1.2-6.2 2.1 2.4 1.7 4.5.4 6.6.2zm6.4 19.2c2.2.4 4.1 1 5.9.3.6-.8.5-1.3-.2-1.9-2-.2-4.2-.9-5.7 1.6zM121 65c-4-1.4-5.9-1.2-6.9.7 1.5 1.1 2.8.1 4.1-.3.7.5 1.4.9 2 1.4 1.1-.5 1.3-1.1.8-1.8zm180.1 167.1c-2.7 1.9-4.9 3.4-7.3 5.1 2.7.6 6.7-2.2 7.3-5.1zM18.9 171.4c-2.3.7-3.1 2.1-3.9 3.7 1.5.8 2.5.5 3.3-.4 1-1 2.2-1.9.6-3.3zM321 293.6c2.9-.7 5.8-.1 7.4-3-3.2.2-5.8 0-7.4 3zm-12.8-30c.1-1.4-.8-2.1-2.2-3.1-.5 1.5-3.4 1-3.1 3.1 1.9 1 3.5-.4 5.3 0zm4.9 9.7c3.9-.6 6.8.2 9.9-2.7-3.9.6-6.7.1-9.9 2.7zm15.5-83.1c-1.3.5-2.4.5-2.9 1.7 2 .7 1.2 2.4 2.1 4 1.9-1.8 1.7-3.5.8-5.7zm12.9-50.2c1.6.1 3.1.2 4.5.2.7-.9 1.1-1.6.4-2.4-1.2-.1-2.4-.2-3.5-.2-1.1.6-1.6 1.3-1.4 2.4zm-16.4-60.3c.8-.8.3-1.5-.6-1.8-1.5-.4-3.2-.2-4.6.4-.9.4-1.1 1.1-.3 1.8 1.7-.1 3.5-.2 5.5-.4zM36.3 151.5c1.4-.9 3.7-1.2 3.6-3.7-1.8 1-3.1.7-4.4.8-.8.5-1.4 1.1-1.2 2 .6.3 1.2.6 2 .9zM298.2 280c.7 1.9 2.6.9 3.9 1.2 1.4-1 1.8-2 0-3-1.6.3-3.1.5-3.9 1.8zm68.3-59.6h5.2c.7-.8 1.4-1.4.5-2.5-1.7.8-4.2.1-5.7 2.5zm-257 92.1c-1.2-1.3-2.3-1.4-3.6-.7-.3 1.2 1.2 1.5 1.6 2.3.3.8-.6 1.8.8 2.5 3.2-.9-.7-3 1.2-4.1zm215-214.1c-1.6.3-3.3.5-4.8.8-.6 1-.4 1.5.6 1.8 1.6-.2 3.2-.3 4.7-.5.5-.7.4-1.3-.5-2.1zm-9.9 200.9c-3.3.6-6.1-.4-8.5 2.8 3.3-1 6.3.3 8.5-2.8zM32.4 156.1c2.3-.7 3.9-1.5 3.4-3.7-2.8-.5-3.4 1.3-4.9 2.4.6.5 1 .8 1.5 1.3zm9.7 111c-.1-2.6-2-3.7-5-2.7.9 1.8 2 3.2 5 2.7zM181 318.3c2.4-.6 5-.3 7.4-1.7-2.1-1.3-4-.3-5.8-.2-1 .1-2.3.3-1.6 1.9zm135.8-31.6c2.5.2 5.2.9 6.7-1.9-3.1-.5-5 .6-6.7 1.9zm-7.7-175.8c1.6.1 2.8.5 3.8-.6.1-1 .4-2-1.3-2.7-.8.3-1.7.6-2.6.9.1.9.1 1.5.1 2.4zm26 144.9c2.6-.3 4.8-.6 7.1-.9-.2-1.5-1.4-1.5-2.5-1.6-1.1 1-2.8.6-4.4.8 0 .5-.1.9-.2 1.7zm-234.4 12.6c-.6.1-1.4.3-2.3.5.5 1.9.9 3.5 4.1 3.1-.1-1.4 0-2.6-1.8-3.6zm229.1-80c-.4-.6-.8-1.2-1.3-1.9.6-.6 1.4-1.2 1-2.1-.4-.6-1-.7-1.8-.4-1.2 1.1-.5 2 .2 2.9-.6.9-1.9 1.7-.2 2.7.9 0 1.5-.4 2.1-1.2zm-324.1-.6c1.3-.1 2.7.5 4.2-.2.3-.8.3-1.5-.6-2.1-1.3-.2-2.7-.3-4 .2-.4.6-.4 1.2.4 2.1zm185.6 99.9c1.6-1.2 2.9-2.3 3-4h-4.1c-.3 1.4.2 2.5 1.1 4zM66.4 259.5c1.9-.6 3-1.5 3.9-3-2.1-.4-3.8-.6-5.4.5.5.9.9 1.6 1.5 2.5zm149.4 40.4c.9-.8.6-1.6-.1-2.5-2 .1-4.2-.5-5.4 1.9 2 .2 3.7.4 5.5.6zM341.7 270c-4.4-.6-6.1-.1-6.4 1.9h4.6c.9-.5 1.8-.8 1.8-1.9zM33 241.3c-2.4-.8-4-.6-4.3 1.7.7.7 1.2 1.4 2.7 1.4.5-1 1.9-1.6 1.6-3.1zm222.7 36.5c2.8-.6 5.6.1 6.8-2.8-2.8.1-5.3-.1-6.8 2.8zm45.9-40.9c3.1-1.5 5.2-2.7 6.1-5-2.5-.3-4.3 1.1-6.1 5zm-109 141.7c-2.7-1.7-5.9-1.4-10.3-1.6 3.9 2 7.2 1.6 10.3 1.6zM5.3 183.7c1.4-.1 2.8-.2 4.2-.2.3-.8.1-1.4-.7-2-1.2 0-2.5-.5-3.8 0-.9.7-.9 1.4.3 2.2zm18.1-22.9c1.3.6 2.5.5 3-.4.6-1 1.8-2.1.1-3.4-1.6.9-3.1 1.8-3.1 3.8zm183.1 153.1c-.1 1.3.5 2 2.1 2.3 1.2-.5 2.7-.8 2.6-2.5-.6-.3-1.3-.6-2-.9-1 .4-1.9.8-2.7 1.1zM326 170.6c2.2.3 4 .4 5.3-.8.7.2 1.3.4 2.3.6-.3-.8-.5-1.3-.7-1.9-.8.2-1.4.4-1.9.6-.5-.5-1-.8-1.6-1.4-1.2 1-2.2 1.8-3.4 2.9zm-222.2 93.1c.2 2.7-.4 4.9.7 7.2 1.6-.9.7-1.8.4-2.5 1.3-1.7 2.4-3.2-1.1-4.7zM324 230.5c.1-.4.8-.9 0-1.6-.6-.1-1.3-.3-2.1-.4-1.4.9-3.2 1.6-2.3 3.6 1.4-.5 2.7-1 4.4-1.6zm-89 50c-1.5-2.4-3.6-.7-5.4-.6-1.9-.6-1.9-.6-2.2.5 2.3.2 4.7 1.5 7.6.1zm-42 14.9c1.8-.2 3.3-.6 4.5-1.8-.5-.4-.9-.8-1.5-1.4-1 1.1-2.3.1-3.4.5-.6 1-.5 1.8.4 2.7zm110.9-180.1c1.4.8 2.6.4 3.8-.2.3-.7.3-1.4-.5-2.1-.8-.1-1.7-.3-2.6-.4-.8.8-.9 1.7-.7 2.7zM95.3 299.2c1.1-.8.7-1.5-.1-2.3-1.7 0-3.8-1.1-5.4 1 2.1.4 3.7.8 5.5 1.3zM33 112.4c1.2.7 2.1.4 3 .3 1.8-1.9 1.9-2.9.5-4.1-1.2 1.2-2.3 2.5-3.5 3.8zM318.3 269c-2-2.3-3.9-1-5.6-1-.5.9-.6 1.6.5 2.3 1.5-.3 3-.7 5.1-1.3zm6.7-112.8c.4-1.3.8-2.7 1.2-4.5-3.6.5-2.9 2.7-3.8 4 .8.8 1.4.9 2.6.5zM122.4 319.6c1.7.2 3.3.5 4.9.7.8-.6 1.2-1.2.4-2.1-1.7-.1-3.4-.2-5.3-.3v1.7zM289 225.1c-.8 1.2-2.8 1.4-2.9 3 2.9.5 4.4-.8 6-2.5-1.1-.2-1.9-.3-3.1-.5zm-49.4 55.8c.7-.2 1.1 1.2 2.3.4-.2-1.3-1.3-1.9-2.7-2.1-1.9-.3-2.8.8-3.7 1.9 1.5 1.2 2.6-.3 4.1-.2zM210.3 32.8c-.3 1.3-.5 2-.7 2.9 2.4 1 4.8.4 7.7.3-1.7-2.3-4.2-.7-6.1-1.4-.2-.4-.5-.9-.9-1.8zm69.9 210.3c-1.8-.6-3.4-1.1-4.8 0-.9.7-.8 1.5.2 2.1 2.1.2 3.3-.8 4.6-2.1zm-174.7 20.6c2.7-2.5.2-4-1.3-6.8-.5 3-.6 4.8 1.3 6.8zm-47.1 10.6c1.2-.4 2.2-.8 3.3-1.2.2-.7 0-1.1-.7-1.4-1.4-.1-2.7-.1-4-.2-1.2 1.4.3 1.9 1.4 2.8zM367 127.7c1.5 2 3.1 2.7 5.5 1.4-.2-1.2-.8-1.9-2-2.3-1 .3-2 .5-3.5.9zM16.7 202.3c2.6.6 3.4-.8 4.3-2.1-.6-.8-1.3-1.2-2.5-1.1-1.2.8-2.2 1.7-1.8 3.2zm100-117.2c1.9-.6 3.7-1.3 3.9-3.3-1.6-.4-2.9-.4-3.9.8-.6.7-1.5 1.4 0 2.5zm189.4 46.3c-1.8-.9-2.8-.3-3.7.8.5.9-.3 2 1.1 2.9 1.1-1.2 2.8-1.9 2.6-3.7zM226 512.3c2.8.1 5.1.8 6.9-1.5-2.7-.6-4.9-1-6.9 1.5zM70.6 274.2c-.4 1.2-.7 2.1-1.1 3.2 1.6.1 2.9.2 4.4.3-.3-1.8-.8-3-3.3-3.5zM367 131.8c-1.5.3-3 .5-4.3.7-.4.6-.4 1.1.2 1.7 1.6.3 3.1-.8 4.7-.2 1.1-1 .4-1.5-.6-2.2zm-58 166h5.2c.3-.2 1.1-.5 1-1.5-2.2-.2-4.7-1.7-6.2 1.5zM33.5 235c2.1.3 3.8.3 4-1.9-1.2-.4-2.1-1.3-3.6-.9-1 .7-1.2 1.6-.4 2.8zm217 50.2c-1.3 1.5-4 1.9-3.8 4.1 3.5-.1 5.3-1.8 3.8-4.1zM58.2 266.9c-1.7 0-3-.7-4.4 0-.3 1.2.4 2 1.4 2.9 1.9-.3 2.4-1.4 3-2.9zm281.6-2c2.1-.5 5.1 1.1 7.3-2-3.2.7-5.9-.3-7.3 2zM219.6 294c-.4.9-.9 1.5 0 2.3 2.1.3 3.5-.4 4.6-1.9-1.5-1.8-3.1-.3-4.6-.4zM8.6 152.8c-.5.5-.9 1-.1 1.8 1.8-.2 3.7-.5 5.7-.8.5-.3.6-.8.1-1.5-1.9.2-3.8.3-5.7.5zm257.8 145.4c1.4-.1 2 1.6 3.6.6-1.5-2-3.9-2.1-6.3-2.4-.5 1-.4 1.6.6 2.3.8-.2 1.6-.4 2.1-.5zm57.9-54.7c-2.3.5-4.5.7-6.5 2.6h4.8c.9-.6 2.1-1 1.7-2.6zm-303.9 5.9c.7 2.8 4.4 2.5 5.7 4.6.7-2.3-1.2-3.7-5.7-4.6zm327.2-17.8c-2-1.7-4.4-.9-5.4 1.7 2.4.5 3.9-.4 5.4-1.7zm-28.5-83.3c-.2-2.2.8-3.9-1.8-5.2-.9 2-1.7 3.7 1.8 5.2zm-18.8-76.7c2-1.4 3.8-2.1 3.8-4-1.7-.4-2.7.3-3.8.7v3.3zm-57.2 232.6c1 .4 1.9 1 3.1.3.4-1.5 0-2.7-1.7-3.5-1.3.8-2.1 1.7-1.4 3.2zM29.9 195.7c-.1.9-.6 1.7.1 2.7 2.4-.1 3.2-1.4 3.6-2.9-1.6-1.3-2.6-.4-3.7.2zm249.5 79.2c.3 1 .5 1.9.8 2.9.8.5 1.5.9 2.5.5.9-1.2-1-1.4-1.1-1.9-.1-1 1.3-1.5.2-2.3-.9-.1-1.9 0-2.4.8zM90.7 303.2c3.2 1.9 5.7 2.2 9.7 2-3.4-1.6-5.8-2.1-9.7-2zM263.3 56.3c2.8 1.2 5-.1 7.6-.5-.3-.6-.5-1.1-.9-1.9-1.7 1.9-4.7.9-6.7 2.4zm-233 105.1c1.3-1.3 2.6-2.4 2-4-1.1-.4-1.8-.1-2.4.3-.4.9-.7 1.7-1.1 2.6.4.2.9.5 1.5 1.1zm335.6-23.5h4c.8-1.1.6-1.9-.7-2.6-1 .2-2.1.5-3.2.8-.1.6-.1 1.1-.1 1.8zM206.6 501.3c.7-2.4 3.3-4.3.3-6.5-.6.6-1 5.5-.3 6.5zm164.1-376.4c-1.5-2.2-3.3-2.1-5.7-1.4l1.2 2.1c1.5-.2 2.8-.4 4.5-.7zm-44.6 138.2c.5-.5 1.1-1 .1-1.9-1.8.8-4.5-.5-6.1 1.9h6zm7.6-137.4c1.6-.1 2.8-.1 3.9-.2.6-1.3.7-2.3-.9-2.9-1.7.3-2.4 1.4-3 3.1zm-1.1 57.3c1-.8 2-1.4 1.1-2.5H332c-1.2 1-.3 1.8 0 2.6-.4 1.1-1.3 2.3 1.1 2.8 1.5-1.2.7-2-.5-2.9zM43.2 273.1c.5 2.4 2.3 3.1 5.2 3.1-.9-2.1-1.8-3.6-5.2-3.1zM38.6 115c-3.5-.2-5.8 1.4-4.8 3.3 2.3-.4 3.6-1.6 4.8-3.3zm113 195.7c3.2 0 5.3 1.7 7.7-.7-2.6-.8-4.5-1.2-7.7.7zm148.1-83c2 .1 3.7.5 5-.8.1-1.2-.5-1.8-2.2-1.9-1 .7-2.3 1.2-2.8 2.7zm38.4 32.6c-2.2.7-4.6.1-6.5 2.3 2.7-.1 4.8-.2 7-.3-.2-.7-.3-1.2-.5-2zM31.2 136.9c.4-.9.2-1.3-.6-1.7-1.5.1-3.4-.5-4.1 1.5l1.1 1.1 3.6-.9zm14.5 113.9c-.6.9-1 1.7-1.6 2.6 1.6.3 2.8.8 4.4.4 0-1.4-.2-2.6-2.8-3zm295.5 10.4c2.4 1.2 4.3.3 6.1.1.8-.1 1.1-.7.4-1.6-1.9.4-4.2.1-6.5 1.5zM21.4 140.6c.4-.6.5-1.2-.2-1.8-2.1-.3-3.7.1-4.4 2 1.8.9 3.2.3 4.6-.2zm35.3 142.3c.7 2.3 2.8 2.5 5.5 2.3-.7-2.9-3.7-1.6-5.5-2.3zm179.6 7.7c-2.1.4-4.3-.6-5.9 1.1.6 1.1 1.6 1.3 2.7 1 1.2-.4 3.1.1 3.2-2.1zM13.8 144.5c2 .1 3.4.2 4.8.3.8-.5 1.5-1 1-2.1-1.9.5-4.5-.9-5.8 1.8zm337.9-9.1c.2-1.1-.2-1.8-1-2.3-1.3-.3-2.4-.2-2.8.8-.5 1.1.4 1.6 1.7 2.1.6-.1 1.3-.4 2.1-.6zM91.2 69.9c-1.8 1.2-3.3 2.3-4.9 3.4 1.2 1.2 2.4.7 3.3.1 1.1-.8 2.7-1.5 1.6-3.5zM69.8 89.5c4-1.6 4.3-2 3.3-3.8-1.4.8-2.8 1.6-4.3 2.4.4.5.7.9 1 1.4zm-21 3.9c-1 1.5 1.2 1.7 1.8 2.6-.6.6-1.2 1.3-1.8 2 .8.6 1.5.8 2.4.5.7-1.7.1-3.2-.3-4.8-.6-.4-1.2-.8-2.1-.3zm24.7 178c1.4-.8 2.3-1.6 1.5-3-1.1-.4-2.2-.5-3.3-.1 0 1.2-.1 2.4 1.8 3.1zm252.8-107.6c1.2-.5 1.4-1.2.7-1.9-1-1.1-2.3-1.1-3.7-.6-.5.6-.7 1.1-.1 1.6 1 .3 2 .6 3.1.9zm2.2 89.8c-1.8.6-3.9.8-4.8 2.9 2.3-.3 3.7-.4 5-.6.7-.7.6-1.4-.2-2.3zm.9-56.3c-2.9-1-4.3-.3-4.3 2 2 .1 4.1.6 4.3-2zM32.2 118.8c-1.4 1.4-3.8 2-2.9 4.2 2-.6 3.3-1.5 4.3-2.9-.5-.3-.9-.7-1.4-1.3zm-3.5 14.8c3.9.7 5.9.5 6.9-2-3.2-1.5-3.7 1.6-6.9 2zm299.6 69.6c1.2 1 2.2.8 3 0 .9-.8 2.2-1.6.9-3-1.9.5-3 1.6-3.9 3zM153.1 323.6c-.5 1.5-2.7 1.3-2.9 2.9 1.2.3 2.5.7 3.7 1 1.8-1.4.4-2.4-.8-3.9zm173.3-217.2c-1.5.9-1.5 1.9-.9 2.9.5.7 1.3 1 2.5.5.4-1.4 1.2-2.8-1.6-3.4zM126.5 285.3c.3-1.2.9-2.2-.4-3.2-1 .2-2.1.4-3.3.6.5 1.7 1.2 2.7 3.7 2.6zm200.6-38.1c-1.2.5-2.5.9-2.5 2.5 1.1.2 2.3.3 3.3.5 1.8-1.6 1-2.4-.8-3zM56.8 288.1c-1.2-2.2-2.9-3.1-6-2.9 1.5 1.9 3 3 6 2.9zm-12.5-62.8c-.8-1.1-1.5-1.6-3-1.5-.7 1.9-.5 3.5 2.2 4.3-.3-1.2-.8-2.2.8-2.8zm253.2-26c-.5 1.5-.9 3.1-1.5 5 2.5-1.2 3.6-2.7 3.7-4.5-.7-.6-1.4-.8-2.2-.5zM331 191c-.1.7.3 1.1 1.6 1.4.3-.2.7-.5 1-.8-.5-.9-.8-1.4-1-1.9 1.1-1.1 2.1-2.1-.2-2.9-1.9 1-.8 2-.4 3-.3.4-.7.8-1 1.2zM185.3 379.8c1.1 1 .4 2.1.9 3.2 1.4.6 2.8 1.3 4-.7-2.5 0-2.9-2-4.9-2.5zm71.5-100.4c-1.4-1.1-2.9-.5-4-.1-1 .3-1.6 1.2-.8 2.4 1.6-.7 3.5-.8 4.8-2.3zm27.1-13.1c-1.7.4-3.4.5-4.5 1.9 2 .6 3.7.4 5.8.2-.5-.8-.9-1.4-1.3-2.1zm-247.2-73c.4-.9.6-1.7-.5-2.6-1.7.6-3.6.9-3 2.9 1.4.3 2.5.2 3.5-.3zm-8.6-42.9c.3.9.9 1.3 2 1 1.5-.4 2.7-1.1 2.7-2.4-.4-.7-1-.8-1.7-.8-1 .8-2 1.5-3 2.2zm205.7 158.3c1.3-1.1 3.4-1.5 4.3-4.2-2.2 1.7-3.6 1.3-4.9 1.3-1 1-.7 1.8.6 2.9zM76.7 294.6c-1.9-1.5-4.4-1.3-6.5-2.2 0 2.1 3.7 3.2 6.5 2.2zm7.5 10.1c2.2 2.4 4.3 2.3 6.7 2.4-1.1-2.5-3.4-2.1-6.7-2.4zm-35.6-40.2c-2.3-2.7-4.3-2.8-7-2.5 1.3 2.4 3.9 1.6 7 2.5zm231.3 31.3c1.9.2 3.8.4 4.8-1.9h-4.4c-.8.5-1.1 1-.4 1.9zm79.2-141.4c1.6-.9 1.5-1.8 1-3-1.9-.4-3.4-.5-3.5 1.6.9.5 1.7 1 2.5 1.4zm-7.3 16.7h-4c.2.9.4 1.5.6 2.1 1 .5 1.9.8 3.2.5.1-.8.1-1.6.2-2.6zM222.3 531c-.3 0-.8 0-1 .1-1.9 1.4.5 3.3-1 4.8 1.1.6 1.8.4 2.4-.4-1.2-1.4.6-2.9-.4-4.5zM80.6 288.5c-1.8-1.7-3.2-2.6-5.6-1.5.9 2.6 3.1 1.6 5.6 1.5zm240.8-31c-1.2.7-2.2 1.4-4.2 2.7 3.2-.5 5.9.4 6.8-2.5-1-.1-1.8-.1-2.6-.2zm-53 4.8c1.4-.9 3.5-.7 4.2-2.5-1.6-.5-3-.5-4.5-.2-.3.9-.5 1.6.3 2.7zm-112.9 55.5c1.5-.3 3.3-.3 4.1-2.1-1.8-.1-3.3-.1-4.7-.2-.7 1.1-.5 1.7.6 2.3zm-123.1-51c1.5 1.9 2.9 2.9 5.9 2.7-.9-1-1.5-1.7-2-2.4-1.2 0-2.1-.1-3.9-.3zM280.3 71.7c-2.8.7-1.5 3.5-3.8 4.2.4.9.9 1.1 1.8.9.1-.7.2-1.5.3-2.2.9-.4 1.7-.8 2.4-1.1.4-.8.3-1.3-.7-1.8zm94.4 59.6c-1.8-1-3 0-4.3.4 0 .8 0 1.4 1 2 1.9 0 3-.7 3.3-2.4zm-77 126.3c2-1.4 3.1-2.8 3-5.1-1.7 1.4-3 2.5-4.3 3.6.4.5.8.9 1.3 1.5zm44.4 10.7c.9-.5 1.6-.8 1.2-1.8-1.9.5-4.3-.6-6.1 1.2 1.7 1.4 3.5-.2 4.9.6zm-65.7-77.2c.6-1.4 1.3-2.7-.2-3.9-1.5.3-2 1-1.8 2 .1.8-.1 1.9 2 1.9zm-18.5 112.8c1.1-.7 1.5-1.5 1.7-2.5-1.2-1.1-2.3-1.7-3.7-.2.4 1 .6 2 2 2.7zM15.7 198.5c2.3-.6 3.2-1.8 4.5-2.8-.3-.5-.5-.9-.9-1.4-1.9 1-3.9 1.7-3.6 4.2zm340.7 13.4c.8-.8 2-1.4 1.7-2.5-2.9-.4-4.1.2-4.5 2.1.9.1 1.8.2 2.8.4zM213.6 533.5c1.4.1 2.6.8 4-.1l-.6-2.7c-2.2.1-2.9 1.2-3.4 2.8zm116.8-419.8c.9.3 1.5.3 2.1-.1.3-.7.7-1.3 1-1.9-.3-.6-.5-1.2-1.6-1.3-2 .6-1.7 1.9-1.5 3.3zM35.1 259.5c-.9.9-.9 1.6-.1 2 1.3.7 2.6 1.4 4.5.8-.4-2.1-3-1.7-4.4-2.8zM295.6 71.4c1.2.4 1.9.1 2.6-.5.1-.6.1-1.3.2-2-.7-.3-1.3-.5-1.9-.8-2 .9-1.2 2.1-.9 3.3zm14.8 135.1c1.7-1.8 4-2.4 3.4-4.9-2.5 1.2-4.1 2-3.4 4.9zm55.6-77.1c-.6-.9-1.1-1.8-2.5-2.1-1.4.8-1.4 1.7-.8 3 .6.2 1.3.3 2.2.5.4-.5.7-1 1.1-1.4zm-17.9 62c-.3 1.7-.5 3.5-.8 5.2 2.2-1.6 2.9-3.2.8-5.2zM178.2 316.3c-2-.4-3.7-.4-5.4.5.2 1.3 1.3 1.4 2.3 1.3 1.3-.1 2.8-.1 3.1-1.8zM25.5 184.6c1.9 0 3.4-.4 4.4-1.9-1.9-1.1-3.4-.6-5.1.4.2.6.4 1.1.7 1.5zm193 269.6c-1.7-.4-2.9-.2-3.8.8-.6.7-1 1.5.4 2.2 1.4-.8 3.3-1 3.4-3zM27.9 231.7c-2.5-.4-3.9.2-4.7 1.8 1.7.6 2.9.6 4.3.1.1-.5.2-1.1.4-1.9zM25 129.3c-.6-.9-1.2-1.3-2.2-1-1.3.4-2.5.9-2.6 2.4 2.3 1 3.3-.5 4.8-1.4zm279.4-54.6c2.7.2 3.7-.8 3.5-2.6-.9-.7-1.8-.7-2.7-.1-.1.8-1.4 1.4-.8 2.7zm18 124.6c.3-.6.4-1.2.8-.9-2.4-1.2-2.9 0-3.6 0-.9-.1-1.4-.9-2.3-.5-.5.5-.3 1 .4 1.6 1.5-.9 2.8 1.2 4.7-.2zm20.5-28c-1.3 1.4-.2 2.3 1.3 3.3.6-.3 1.1-.7 1.6-1-.1-.7-.2-1.2-.2-1.7-.8-.7-1.6-1-2.7-.6zM145.3 321.2c-1.9-2.5-4.2-1.3-7.3-1.4 2.5 1.8 4.4 2 7.3 1.4zm-85.6-38.9c-1.2-3.5-3.7-2.9-6.3-3.2 1.2 2.5 4 1.5 6.3 3.2zm285.4-79.9c1.8-.7 1.2-1.7.5-2.6-.6-.9-1.5-1.1-2.7-.4-.1 1.4-.1 2.6 2.2 3zm-26.2 30.3c-2.3.7-3 1.6-2.4 3.6 1.3-.7 2.4-1.4 3.5-2 .1-1-.3-1.4-1.1-1.6zm53.4-83.4c.9-1.3 2.7-.8 3.8-1.4.4-.9-.1-1.3-1.1-1.8-.7.1-1.5.1-2.2.2-.8 1.5-.8 1.5-.5 3zm-19.1-46.9c-1.3-2.2-2.7-2.7-4.6-1.9.9 1.6 1.7 3 4.6 1.9zm-174 200.9c1 .9 1.7.5 2.4 0s1.3-1.2 1.1-2c-.2-.7-.9-1.1-2.1-.8-.5.8-.9 1.8-1.4 2.8zm-84.1-1.8c-1.3-2.4-3.3-1.9-5.6-1.6 1.3 2 3.1 1.9 5.6 1.6zM4.7 207.1c-.4 1.6 0 2.7 2.2 3 1-.7 1.3-1.6.7-2.4-.5-1-1.6-1-2.9-.6zm316.2 87.5c-.8.4-1.4.8-1.1 1.6 1.3 1 2.8.5 4.2.1.8-.2 1.2-.7.6-1.5-1.3 0-2.5-.1-3.7-.2zm49.4-72.4c-1.7.3-3.8-.7-5 1.2 1.5 1.5 3.2.2 4.6.6.5-.5.9-.9.4-1.8zm-111.2 18c.9-1.3.3-2.2-1.5-2.8-.8.9-2 1.4-1.4 2.8h2.9zm106.6-98.7c2.4-.2 4-.3 5.5-.4.7-.7.8-1.1-.1-1.8-1.5.5-3.7-.1-5.4 2.2zm-72.3-48.4c.6-1.4-1-2.5-.9-3.8-.7-.6-1.2-.6-1.9-.2-.6.9 1 1.3 1 2.1-.1.7-.1 1.5-.2 2.2.9.3 1.5.2 2-.3zm-.6 1.5c-.7 1.2.5 1.4 1 2 1.2-.5 2.1.2 3.2.6 1.7-1.3.8-2.1-.7-3.1-.5.7-.8 1.3-1.3 1.9-.8-.5-1.4-.9-2.2-1.4zm-13.6 187.9c-.4-.9-.6-1.7-1-2.6-1.4.5-2.4.9-3.4 1.3-.4.6-.4 1.1.2 1.5 1.3 0 2.6-.1 4.2-.2zm36.7-43.5c3.8.6 5.1-.7 6.5-2.6-3.1-.3-4 1.5-6.5 2.6zm66-39.4c-1.6-.6-2.7.1-3.5.8-.7.6-.7 1.3.4 1.9 2-.2 3-1.1 3.1-2.7zm-291.8 74c-.4.8-1 1.5-.4 2.6 1.9.1 3.1-.5 3.7-1.9-1-1-2.1-.8-3.3-.7zm107.3 69.3c-.4 1.4.3 2.8-.7 4 1.8.7 2.2-.1 2.6-1 .6-1.4.3-2.4-1.9-3zM314.7 74.7c-.2 1 0 1.7 1.1 2 .5.1 1.4 0 1.8-.3.8-.6 1.1-1.4.4-2.2-1.2-.3-2.2 0-3.3.5zM80 70c2.1-.5 3.7-.8 5.3-1.2.4-.7.5-1.4-.7-2.1-1.5 1-3.4 1.5-4.6 3.3zm8.8 218.5c-.9.5-1.1 1-.5 1.8 1.2.2 2.5.8 3.8.1.5-.8 0-1.3-.7-1.9h-2.6zm189-48c1.7.6 3.2.6 4.8.5.4-.8.3-1.3-.5-2-1.3.7-3.6-.7-4.3 1.5zm51.2 25c2.7.6 5.2 0 5.8-1.3-3.6-.7-5.4-.3-5.8 1.3zm-125.8 57.6c2.5.9 4.4 1.6 6.8-.3-2.6-.8-4.5-1-6.8.3zm165.2-107.6c-.1.9.5 1.6 1.4 1.3 1.7-.6 3.8.2 5.1-1 .5-.5 0-1-1-1.2-.6.3-1.3.6-2 1-1.2-.1-2.2-.9-3.5-.1zM53.5 283.7c-.5-2.3-2.3-2.5-4.7-2.5-.1 2.6 2.2 2.4 4.7 2.5zm286.7-6.4c.1.3.2.7.4 1 2-.7 4.8.6 7.4-2.1-3.4.5-5.6.8-7.8 1.1zm-158.7 89.5c1.9.9 3.8 1.6 6.7.8-2.3-1.9-4.6-.8-6.7-.8zm-72.6-59.4c-1.9-2.3-3.9-2.2-6.5-1.8 1.6 1.8 3.7 1.6 6.5 1.8zm221.2-134.8c-1.4-.7-2.2-.4-2.6.5-.3.8-.4 1.8.7 2.4.8.2 1.4 0 1.9-.5v-2.4zm-38.4 86.7c.2.8.5 1.1 1.5 1.2.5-.4 1.2-.9 2-1.5-1.7-.7 0-2.1-1.3-3-2 .7-.5 2.7-2.2 3.3zM46 260.7c-1.4-2.1-2.8-2.8-5.3-2.3.6 2.2 2.6 2 5.3 2.3zm165.4 44.6c-2.1.5-4.4.7-5.4 3.2 2.9-.4 4.5-1.4 5.4-3.2zm33.9-9.5c2.1 0 3-1.1 4-2.4-1.4-1-2.5-.3-3.6-.1-.5.8-1 1.5-.4 2.5zm-156.7 7.7c-.7-2.7-3.6-1.2-4.9-2.3-.7 1-.3 1.6.5 2.1 1.3.1 2.6.1 4.4.2zm184.9-26.7c-1 .6-1.3 1.1-.7 1.9h4.8c-.5-2.3-2.9-1.3-4.1-1.9zM34.8 186.3c-1.5.7-2.8 1.4-2.2 3 1.5.3 2.6.2 3.3-.9.4-.8.4-1.5-1.1-2.1zM190 451.2c-.8-.2-1.5-.1-2.1.5-.3 1 0 1.9 1.1 2.6.8.1 1.4-.1 1.8-.6.2-.9.1-1.7-.8-2.5zM14.4 238c.3 2.4 1.6 3.2 4 2.6-.5-1.6-1.6-2.5-4-2.6zM168.9 67.9v4.4c1.4-.6 2.6-1 3-2.3-.9-.6-1.7-1.2-3-2.1zm-4.4 248.3c1.2 1.9 2.7 1.6 4.2 1.3 1-.2 1.8-.7.9-1.8-1.6.1-3.2.3-5.1.5zm61.5-18.3c-2.7-.6-4.3 0-5.9.9 1 1.7 1.9 1.6 5.9-.9zm38.5-43.4c-2.6.9-3.8 1.9-5.2 3.4 3.2.2 4.4-.9 5.2-3.4zM40.7 268.8c-.3 2.1 2.1 1.9 3.2 2.8 1-.5 1.2-1.1.7-1.7-.9-1-2.2-1.3-3.9-1.1zm-9.9-46.4v3.1c1 .2 1.8.3 2.5-.3.3-.8.3-1.6-.5-2.5-.5 0-1.1-.1-2-.3zM8.5 157.8c1.1-.7 2.4-.7 3.7-.7.4-.7.2-1.1-.6-1.5-1.4.1-3.1-.2-4.2.8-.3.7.1 1.1 1.1 1.4zm3.5 67.4c1.1 1.6 1.5 3.2 4.4 2.1-.5-1.9-1.7-2.6-4.4-2.1zM75.6 90.1c2.4-1.5 3.6-2.7 3.6-4.7-2.6.9-3.5 2.2-3.6 4.7zM245 66.7c-2.8.4-5 0-7.2 1.9 2.9-.1 5.1.6 7.2-1.9zm-129.5 1.2c-2.2-.9-4.2-.7-6.4-.6 1 1.7 4.2 2 6.4.6zM22.6 240.7c0 1.7 1.2 2.3 3 2.4 1.1-1.5.2-2.3-1.4-3.1-.6.2-1.1.5-1.6.7zm281.1-132.3c-.7.8-.8 1.5-.3 2.3.8.5 1.6.9 2.7.4.2-1.4.2-2.7-2.4-2.7zm11-2c2.9-1 2.2-2.3 1.4-4-2.6.8-1.6 2.2-1.4 4zm29.4 173.5h-5.5c-.7.5-1 .9-.3 1.6 1.6-.9 4.1.7 5.8-1.6zM23.5 198.1c.1-1.1.5-2.1-1.1-2.8-1 .7-2 1.3-2.1 2.4.8.9 1.8.9 3.2.4zm218.8 72.5c-.2 1.2-.5 2.2 1.3 2.8.5-1.1 2.5-1.3 2.5-2.8-1.3-.7-2.5-.1-3.8 0zm-8.4-204c-3.1-.7-5 .3-7 1 2.3.4 4.5.6 7-1zm80.4 59.7c-1.8.7-2.1 1.8-2.4 2.9.5.7 1.1.9 2.1.6 1-1 1.2-2.1.3-3.5zm15.5 11.3c1.6-.2 2.2-1 2.1-2.1-.1-.9-.5-1.5-1.8-1.4-1 1.5-1 1.8-.3 3.5zm20-24.4c-3.1.3-3.5 1.9-1.6 4.9.6-1.7 1.1-3.2 1.6-4.9zM194.7 311.6c2.9 1 4.2-.3 6.3-1.6-2.6 0-4.4-.2-6.3 1.6zM347.2 225c-2-.6-3.5-.4-4.9 0-.4.7-.2 1.1.5 1.5h3c.4-.5.8-.9 1.4-1.5zm-18.4-7.4c2-.2 2.8-1.2 3.2-2.6-.9-.7-1.7-.6-2.5 0-.9.7-1.6 1.4-.7 2.6zm8.2 2.2c1.5.1 2.8.1 3.6-.9.5-.7.3-1.4-.9-1.7-1.4.5-3.2.7-2.7 2.6zM232.3 517.5c2.2-1.9 3.4-3 4.1-5.4-2.6 1.3-4.1 2.3-4.1 5.4zm86.3-387.8c-2.4 1-2.4 2.3-1.9 3.7.2.7.9.9 1.9.4v-4.1zm-82-96c1.2 0 2.4 1.1 4-.2-2.8-1.7-4.9 0-8.5-.1 2.5 1.2 3.4.4 4.5.3zm107.8 102.7c2.6-1 2.3-2.2 1-3.7-1.3.6-1.8 1.5-2.3 2.6.4.3.8.7 1.3 1.1zm-64.5 150.5c-1.4.2-2.7.4-4 .6 0 2 1.5 1.9 2.9 1.7.9-.6 1.3-1.3 1.1-2.3zm52.3-112.3c1.3.4 1.9.2 2.4-.4.2-.8.4-1.6-.4-2.3-.8-.3-1.5-.1-2.3.6.1.6.2 1.4.3 2.1zm37.3 29c1.4-.7 3-1.2 1.6-3-1.3.1-2.3.4-2.8 1.3-.3.7-.1 1.4 1.2 1.7zm-321.7 33c.1 1.3.2 2.2.3 3 .8.6 1.4 1.2 2.6.7.1-1.5-.3-2.8-2.9-3.7zm143.8 222.7c.1-1.7.7-3.1-2.4-3.7.1 1.7-.7 3.2 2.4 3.7zM310.7 78.6c.7-.5 1.3-.9 1.9-1.3-.7-1.2-1.3-2.2-3.3-1.7-.4 1.1-.3 2.1 1.4 3zM161.1 436.7c0 1.8-.1 3.1 2.4 3 .7-.8.9-1.5.4-2.5-.7-.1-1.6-.2-2.8-.5zM310.3 82.5c-1.3.7-1.1 1.6-.6 2.4.4.8 1.3.9 2.3.5.3-1.2.8-2.6-1.7-2.9zM71 279.5c.6 1 1.4 1.7 2.8 1.9.8-.5 1.4-1 1.2-2-1.2-.8-2.4-1.1-4 .1zM49.3 245c1.7.1 2.5-.7 3-1.6.4-.6 0-1.1-1.1-1.4-1.3.6-2.9 1.2-1.9 3zm143.5 125.6c-2.9-1.1-4.8-1.5-7.6-1 2.4 1.3 4.4 1.3 7.6 1zm75.6-76.2c.1-.9-.2-1.5-1.6-1.7-.6.8-2.6.6-2.4 2.2 1.6.7 2.8.3 4-.5zm58.1-43.6c-2.2-.2-3.4.6-4.2 1.9.9.9 1.9.6 2.8.5.6-.7 1.5-1.2 1.4-2.4zm-9.4-159.6c.4-1.4.1-2.3-2.2-2.6-.3.7-.6 1.3-.8 1.8.8 1.1 1.6 1.4 3 .8zM25.6 216.8c.9-1 1.3-2-.2-3.2-.9.5-1.7 1-2.4 1.4.3 1.2.9 1.9 2.6 1.8zm292.5-36.1c1.2-1.5 2.2-2.6.6-4.3-1.9 1.3-2.3 2.5-.6 4.3zm-31.7 78.9c.3 1.1.9 1.8 2.1 2.3l1.8-1.2c-.1-.8-.3-1.4-1.4-1.8-.7.2-1.6.4-2.5.7zm-223 3.2c-1-2.2-2.7-1.7-4.2-1.4-.6.6-.6 1.1.2 1.7 1 0 2.3-.1 4-.3zM218 314c-.1.9-.3 1.6.8 2.1 1.1-.6 2.1-1.2 3.3-1.8-1.3-1.7-2.6-.6-4.1-.3zM85.5 299.8c-.9-2-2.3-2.1-4.1-1.3-.1 1.4.9 1.8 2.2 2.2.6-.3 1.1-.6 1.9-.9zm245.1-193.5c-.4 1.2-.7 2.2.6 2.9.8.2 1.4-.1 1.8-.7 0-.8.3-1.7-.7-2.6-.5.2-1.1.3-1.7.4zM263.1 83c1.6-.4 3-1 3.1-3-1.5.3-2.5.6-3.5.8-.3.7-.6 1.4.4 2.2zm86.6 54c-.9 1-1.2 1.9-.4 2.8.8.3 1.6.3 2.3-.3.4-.7.5-1.5-.2-2.3-.4 0-1-.1-1.7-.2zm26.8 12.9c-1.9.2-2.9.8-2.1 2.4 1.4.1 2.5 0 3.4-.7.2-.8-.2-1.3-1.3-1.7zm-48.5-4.6c-.1 2.2-.5 3.8 1.6 5.9-.1-2.4.8-4-1.6-5.9zm-56.9 138.2c.6-.9 1.2-1.8 1.7-2.6-1.3-.6-2.3-.3-3.3.2-.7 1.2-.4 2 1.6 2.4zm-94.6 60.8c1.3-1.8 1.4-3.5-.6-5.1l.6 5.1zm198.2-114.7c-2.9-1-4.7-1.4-6.3.9 2.4.5 3.9-.3 6.3-.9zM310.5 99.7c-.8.2-1.7.5-2.5.8-.2.7 0 1.2.7 1.5 1.2-.2 2.8.2 3.2-1.2-.1-.6-.5-.9-1.4-1.1zM149.8 316.3c-1-1.5-2.6-1.2-4-1.1-1.1.1-1.6.8-.8 2 1.5-.2 3.1-.6 4.8-.9zm36.7 130.8c.4 1.5 1.2 2.5 3.6 2.2-.1-.8-.2-1.6-.3-2.2-1.2-.5-2.1-.5-3.3 0zm130.3-205.7c-.1-.8-.6-1.2-1.6-1.3-.3 1.1-2.5 1.5-2 3.1 2.1.2 2.8-.9 3.6-1.8zM260.5 67.3c-1.2 1.6-3.9.2-4.9 2.1 3.6.8 5.1.2 4.9-2.1zm-98.6 387.3c1.4-1.4 2.9-2.1 2.5-3.9-2.7.4-3.6 1.3-2.5 3.9zm-10.7 81c-.8 2.4-.2 4 .7 5.5.6-1.7.9-3.3-.7-5.5zM27 118.8c2.7-.1 4.4-.6 4.4-3-2 .7-3.5 1.3-4.4 3zm310.9-26.2c-.2-1.6-.9-2.5-2.9-2.3-.9.6-1.3 1.2-.7 2.1 1.1.1 2.2.2 3.6.2zM52 100.3c-1.7-.8-2.7 0-3.8.5 0 .7-.4 1.3.5 1.9 1.9-.1 2.3-1.4 3.3-2.4zm114.2 354c-1.2.5-1.5 1.2-1.6 2.2 1.4.3 2.8.5 5 .9-1.4-1.3-2.3-2.1-3.4-3.1zm187-285.9c.8.9 1.7 1.1 2.5.6.7-.4 1.1-1 .8-1.7-.3-.8-1.1-1-2.3-.7-.2.5-.6 1.2-1 1.8zM36.9 195.5c-2 .4-2.2 1.4-2 2.9 1.1-.1 1.9-.1 2.7-.2.3-1 .3-1.8-.7-2.7zM370 205.9c-.9-1-1.8-.8-2.8-.3-1 .5-1.7 1-.8 2.1 1.4-.3 2.9-.3 3.6-1.8zm-13.2 12c3 .7 4.3.2 4.4-1.5-1.8-.2-3.6-.6-4.4 1.5zM249.1 98.1c1.7-.2 2.7-.8 2.6-2.3-.8-.6-1.7-.7-2.6-.3-.4.9-.7 1.6 0 2.6zm51.8 184.6c-1.8.3-3.4.7-5.3 1.1 1.2 1.6 2.7.8 3.9.7.9-.1 2-.4 1.4-1.8zM269.4 64.9c2.3-.5 4.2-.6 4.8-3.1-2.6.6-3.9 1.3-4.8 3.1zM77.2 72.3c.1 1.1.7 1.8 2 1.7 1.3 0 1.9-.6 1.7-1.7-1.2-1.2-2.4-.5-3.7 0zm.2 11.1h-4c-.8.6-.8 1.1-.2 1.7 1.7.1 3.3.1 4.2-1.7zm233 13.3c-1.1.1-2.1.3-3 .4-.5.6-.9 1-.3 1.7 1.3-.1 2.6-.2 3.8-.2.3-.8.2-1.3-.5-1.9zm69.4 98.8c-.2.8-.9 1.3 0 2.3 1-1.1 3.6 0 4.1-2.3h-4.1zm-49.9 26.2c1.8-1.5 4.7-.8 4.3-3.5-2 .5-4 .5-4.3 3.5zm-140.3 146c1.1.9 2.2 1.1 3.6.5.4-.6.3-1.2-.4-1.7-1.4-.2-2.9-.4-3.2 1.2zM11.8 232.1c.2-2.8-1-4.2-2.2-5.7-.6 1.9.3 3.4 2.2 5.7zm353.7-113c-.8.7-1.4 1.4-.8 2.3 1.1.2 2.2.2 3.2-.4 0-1.2-.8-1.8-2.4-1.9zm12.1 40.9c1.5-.1 2.7.2 3.7-.5.2-.6.1-1.1-.8-1.6-.8.1-1.8.3-2.9.5v1.6zm-64.5 130c2.9.3 4.9.1 6.6-1-2-.1-4.1-.7-6.6 1zM62.5 242.2c.8 1.1-.3 3.2 2.6 3.5.7-2-.6-2.9-2.6-3.5zm-1.8 8.6c.2-1.7.9-3-1.2-3.9-2 1.6-1.1 2.6 1.2 3.9zm263-36.4c-1.6 1.1-2.6 1.9-2.5 3.7 2.6-.6 3.4-1.5 2.5-3.7zm-11.3 38.9c2.4 1.3 3.5.5 4.7-.9-2.1-1-3.4-.7-4.7.9zM246 306.5c-1.1-1-2.3-.8-3.6-.5-.3.7-.5 1.4.5 2 1.2-.1 2.4-.3 3.1-1.5zm96.9-99.6c-1.3-.5-2.3-.1-3.3.3-.5.9-.6 1.6.8 2.1 1.3-.4 2.3-1 2.5-2.4zM202.4 373.8c1.7-1.9 1.8-3.3.6-5.5-1.2 2-1.2 3.4-.6 5.5zm146.9-171.1c2.6-1.7 2.6-3.2 2.4-5.5-1.7 1.7-2.3 3.1-2.4 5.5zm-345.4-.4c-.6 1.2.1 2 .5 2.7.7.4 1.4.5 2.2-.1-.5-1-.1-2.6-2.7-2.6zm351.2 25.8c1.4-.6 3.9.6 4.7-1.7-2.4-.2-4.3-.5-4.7 1.7zm-9.9-50.2c.7-.7.7-1.5.4-2.2-1-.7-2-.9-2.9.1.1 1.3.8 2.1 2.5 2.1zm16.6 20.1c-3.1.5-5.2.5-5.5 2.8 2.5.3 3.1-1.4 5.5-2.8zM7.6 212.3c.2 1.7.8 2.7 3 2.6.4-1 .1-1.8-.5-2.6H7.6zm301.9 70.3c-2.3-.9-3.7-.1-6.1.9 2.7.4 4.5.9 6.1-.9zm64.7-71.1c-2.3-.2-4-.4-4.7 1.6 2.2.6 3.4.1 4.7-1.6zM74.3 266.6c.5-.8 1-1.5.2-2.4-2 0-2.6.9-2.7 2.3.8.4 1.6.5 2.5.1zm259-125.9c1 .5 1.8.3 2.5-.2.3-.9.4-1.8-1.3-2.1-1 .5-2.1 1-1.2 2.3zm16.9 26c-2.1 0-1.9 1.2-2.2 2 .4.7.9 1.1 2 .8 1.4-.7.9-1.7.2-2.8zm26.9 41.3c-2.7.4-4.5-.1-6.2 1.4 2.4.7 4 .7 6.2-1.4zM222.3 446c.8.9 1.6 1.5 2.9 1.3.8-.1 1.3-.6 1-1.3-.9-.4-1.7-.8-2.8-1.3-.4.4-.8.8-1.1 1.3zm136.3-283.5c.2 1-.7 2.1 1.3 2.8.5-.3 1.1-.6 1.6-.8.1-1.7-.8-2.2-2.9-2zm-104 152.1c-1.5-.2-3-1.2-4.6.3 1.9 1 3.4 1.2 4.6-.3zm-135.2-.2c.2 1.1.8 1.9 2.2 1.7 1.3-.1 2.2-.7 2-2-1.5.1-2.8.2-4.2.3zm58.4-9.2c-.6-1.7-2.7-1.9-4.6-.7 1.4.8 2.8 1.1 4.6.7zM38.5 203.1c.6-1 .5-1.9-.9-2.6-2 .4-1.6 1.5-1.4 2.4.8.6 1.5.6 2.3.2zm220.2 86.1c-1 .4-2 .9-3.1 1.4.8 1.4 2.1 1.3 3.2.7 1.2-.5 1.3-1.3-.1-2.1zm-4.3 0c-.1-1.4 1.6-2 .1-2.8-1.2.3-1.7 1-1.9 1.9.5.7 1 1.5 1.5 2.2.2-.1.4-.1.6-.2-.2-.5-.3-1-.3-1.1zM313 115.6c.4-1.7.9-3.1-1.8-3.6-.4 1.4-.7 2.7 1.8 3.6zM189.6 306.5c-1.5.4-2.5 1.2-3.1 2.3.8.8 1.7.9 2.3.1.6-.6 2.2-1.2.8-2.4zm46.6 3.2c1.8.6 2.8.1 3.5-1 .5-.7.2-1.3-1-1.5-.8.7-2.1 1.2-2.5 2.5zM336 160c-1.1.9-1.9 1.6-.6 2.8 1 .2 1.7-.1 2.2-.7.2-1.1-.3-1.7-1.6-2.1zm-10.1-26.4c1.7-.1 1.8-1.1 2.1-1.9.2-.8-.4-1.2-1.4-1.2-1.5.8-1.6 1.8-.7 3.1zm15.1 30.2c-1.6.1-2.3.5-2.5 1.6.3.4.7.8 1.2 1.3.7-.2 1.2-.4 1.9-.6-.2-.8-.4-1.5-.6-2.3zm-12.2 12.5c-.9.8-1.7 1.5-1.4 2.7 1 .7 1.8.6 2.4-.2.6-.9.8-1.8-1-2.5zm14.9-20c-1.2 1.2-.7 2.2.8 3.1 1.8-2.1 1.7-2.7-.8-3.1zm-11.9-40.8c-1.3-.1-2.1.3-2.7 1.1.1.8.5 1.4 1.7 1.6.8-.8 2.4-1.4 1-2.7zM53.7 273.1c.5-2-1.2-2-2.4-2.2-1.1-.2-1.8.1-1.5 1.2 1.2.3 2.5.6 3.9 1zm279.5-45c-1.4.4-2 1.1-1.8 2.2 1.2.8 2.2.5 2.9-.4.6-.8.3-1.5-1.1-1.8zm17.6-10.9c-.4.8-.2 1.3.8 1.7 1.5-.1 2.6-.6 2.8-2-1.4-.5-2.5.1-3.6.3zm-81.1 69.3c1.3.1 2.4.4 3.6-.2.3-1-.1-1.7-1.4-2.1-.9.7-2 1-2.2 2.3zm41.5-88.8c-2.3 1-2.5 2.2-2.7 4.1 2.2-1.1 3.2-2.1 2.7-4.1zm18.5 90.8c-2.1-1.3-3.8-.9-5.2.6 1.8-.2 3.5-.4 5.2-.6zM286.3 67c-1.4.1-2.4.6-2.8 1.8 1.4 1 2.3.2 3.3-.3.3-.6.3-1.1-.5-1.5zM168.1 309.4c-1.7.5-3.6-.2-4.9 1.4 1.6.2 2.9.3 4.2.5.2-.2.5-.4.7-.7.1-.2 0-.5 0-1.2zm158.2-186.5c1.9-1.9 1.9-2.8 0-3.9-1.2 1.3-1 2.4 0 3.9zM12.8 218.8c.2-1.2-.5-1.8-2-2.1-.7.7-1.4 1.5-.5 2.3.8.8 1.6.5 2.5-.2zm200.4 317.7c1.4-.1 2.8.4 3.9-.5.1-1.3-.9-1.1-2-1-1.1 0-2.2 0-1.9 1.5zm162-332.3c-1.4.3-2.5.9-2.5 2.3 1.3.5 2.4.2 3.1-.6.6-.6.3-1.2-.6-1.7zM45.6 117.8c1.5-.2 2.3-.6 2.6-1.5-.2-.5-.1-1.2-1.3-1.4-.6.4-1.2.8-1.9 1.3.2.5.3 1 .6 1.6zm123.5 172.6c1.3-.8 1.3-1.8.6-2.8-.9-.2-1.6-.2-2.1.5.1.9 0 1.9 1.5 2.3zm161.3-11.5c1.8.2 3.8.8 5.7-1-2.4-.2-4.1-.1-5.7 1zM64.5 264.7c-1.2.2-2.1.5-1.8 1.7.9.8 1.9 1.2 3.2.2.1-.8-.4-1.4-1.4-1.9zM354 151.5c-2.1 1.2-1.8 2.3-.4 3.7 1.3-1.2 1.6-2.2.4-3.7zM203.7 311.7c2.3.2 3.8 0 5.9-1.2-2.6-.5-4.3-.7-5.9 1.2zm113.2-142.5c-1.2-.7-2.2-.9-3 .3.4.8.5 1.8 2.1 1.7.8-.5 1-1.1.9-2zm-48.6 85c-.6.7-2.1 1.3-.4 2.6 1-.5 2.3-.7 2.5-1.8-.3-.6-1-.9-2.1-.8zm49-87.6c0-1.1-.5-1.8-1.8-2-1.3.9-1.5 1.7-.2 2.6.8.2 1.4 0 2-.6zM182 447.2c-.5 1.3-.3 2.2 2 2.1.6-.8.7-1.6.2-2.4-.9-.3-1.5-.1-2.2.3zm118.9-250.9c-1.8-.4-2.9-.1-2.8 1.7 1.2.5 2.1.4 3-.1.5-.6.4-1-.2-1.6zm76.5-30.6c.6 1.2 1.7 1.3 3.1.8.3-1.2-.6-1.7-1.7-2.2-.9.3-1.3.7-1.4 1.4zm-72.3-82.4c.2.8.5 1.5.7 2.2 2.1.2 2.3-.8 2.5-1.8-.9-.6-1.8-1-3.2-.4zm26.5 94.9c.7.6 1.5.8 2.3.3.4-.2.7-.8.6-1.2-.2-.8-1-1.1-2-1-1 .4-1.2 1.1-.9 1.9zm-5.9 53.2c-1.9 1.6-3 2.5-4.1 3.4 2.1-.2 3.9-.7 4.1-3.4zM97.2 288.6c-1.7-.9-2.7-.2-3.6.8.2.8.7 1.2 1.6 1 1.1-.3 1.8-.8 2-1.8zM17.6 135c2.6-.2 3.3-.9 2.3-2.6-1.5.4-2.9.9-2.3 2.6zm110.2 157.3c2-.4 3.1-1.1 3.1-2.9-2.3.2-3.4.8-3.1 2.9zm96.4 249.4c-2.1.5-3.7.6-4 2.3 2.4.6 3.2-.4 4-2.3zM62.6 268.3c.1 1.1.6 1.9 2.2 2.1 1.1-.7 1.3-1.4.4-2.4-.9-.1-1.8-.3-2.6.3zM322.8 131c-1.3 0-1.9.5-1.9 1.2 0 .8.1 1.6 1.6 1.8 1.6-.9 1.3-1.9.3-3zM52.2 262c1.2.1 2.1 1 3.3 0-.7-1.1-1.3-2.1-3.3-1.8v1.8zm186 37.2c1.3.8 2.4.7 3.5.1.3-.6.4-1.2-.5-1.7-1.3-.1-2.4.2-3 1.6zm-86.9 210.1c-.1-1.1.4-2.2-.9-3.2-.7 1-1.3 1.8-1.8 2.5.6.8 1.3 1.2 2.7.7zm148.9-218.6c3.1.7 4.3.4 5.1-1.2-1.8 0-3.5-.2-5.1 1.2zM248 307.4c-1.5.3-2.3 1-2.5 2.2 1.2.3 2.2.4 3.2-.3.3-.7.3-1.3-.7-1.9zm-97.2 6.9c.4-.6.8-1.3-.4-2.1-1.2.1-2.5.1-2.5 1.6.8.6 1.7.8 2.9.5zm195.7-127.8c.5.4.9.8 1.5 1.2.7-.2 1.4-.4 2-.5.2-1-.1-1.6-1.2-1.8-1.1-.3-1.8.1-2.3 1.1zm-27.6 29.7c-1.5 0-2.7.1-3.5 1.2.5 1 1.4 1 2.3.8 1.1-.3 1.5-.9 1.2-2zM203.3 362.7c-1.4 2-1.2 3.9.3 4.8.4-1.6.5-3-.3-4.8zm141.4-152.4c-1.7-.4-2.7.1-3.1 1.4.8.6 1.7.8 2.7.5.7-.5.8-1 .4-1.9zm2.9 9.8c-2.7 1.4-2.8 1.8-1.2 3.2.8-1 2.4-1.6 1.2-3.2zm13.4 13.8c-.9-1-1.8-.5-2.6-.1s-1.5 1-.7 2c1.2-.5 2.9-.5 3.3-1.9zm-5-60.6c.9-1 1.1-1.9.1-3l-1.8.6c.1 1.1-.2 2.1 1.7 2.4zM26.3 131.8c-2.1.3-3 1-2.9 2.8 2-.4 3.4-.9 2.9-2.8zM316 95.6c1.2-.8 2-1.5 1-2.8-1-.3-1.7-.1-2.2.7 0 .8.1 1.5 1.2 2.1zm-98.9 442.9c-1-1.4-2.5-.9-3.7-1.2-.6.6-.7 1-.1 1.5 1.2.3 2.4.4 3.8-.3zm110.8-449c0-1.2 0-2.2-2-2.2-1 .7-.8 1.5-.2 2.2.5.6 1.3.6 2.2 0zm1.8 118.6c-1.3-.6-2.2-.2-2.5.7-.3.8 0 1.5 1.5 1.5.6-.5 1.3-1.1 1-2.2zM45 234.3c-.6-.8-1.1-1.4-2.2-1.5-1 .5-1.2 1.1-.6 1.9.4.5.9 1 2 .8.2-.4.5-.8.8-1.2zm.5 6.6c.9-1.7.3-2.6-1.8-3.1-.4 1.4-.5 2.5 1.8 3.1zM19 217.4c-1.1-1-1.9-.7-2.8-.1-.3.8-.6 1.5.3 2.2 1.6-.1 1.9-1.1 2.5-2.1zm18.5-89.9c-1.4.2-2.6.5-2.3 2 1.1.4 2.2.4 3.3-.1.1-.7 0-1.4-1-1.9zm55.2-48.9c-1.4.3-2.9.6-4.2 1.7h4.2c.5-.6.6-1.1 0-1.7zm289.5 142.2c-1.3-.1-2.9-.5-3.6 1 .9.8 2 .8 3 .5.9-.2 1.1-.8.6-1.5zm-54.4-56.4c.3 1.4.4 2.6 2.7 2.5.4-1.5.2-2.5-2.7-2.5zM53.1 90.6c2.4.6 3.1-.6 4.2-2.1-2.2.1-3.5.5-4.2 2.1zm278.7-3.8c-1.4-.4-2 .1-2.2 1-.1.9 0 1.7 1.6 1.7.7-.9.8-1.7.6-2.7zM306 79c1.6-.8 1.6-1.7 1-2.8-.9-.2-1.6-.2-2.1.5-.2.9.1 1.6 1.1 2.3zm-82.2-51.6c1.1 0 2.6.8 3.3-.8-1-.8-2.1-1-3.3-.8-.5.5-.6 1 0 1.6zm144.5 198.1c-2.3-.5-3.2.1-3.2 2 1.9.2 2.8-.6 3.2-2zM77.4 267c1.2.2 1.7-.3 1.6-1.1-.1-.8-.1-1.7-1.7-1.7-.6 1-.6 1.9.1 2.8zM326 172.6c-1.4-.5-1.9.1-2 1-.1.9-.2 1.7 1.5 1.7 1.1-.8.9-1.7.5-2.7zm29.3 49.1c1.4.8 2.1.1 2.8-.5.6-.5.7-1.2-.3-1.7-1.3.3-2.3.8-2.5 2.2zm-71.5 23c.2-.6.3-1.2.6-2-1.7.4-3.2.5-3.4 1.9.9.6 1.7.4 2.8.1zm78.7-106.2c1.5 0 2-.6 2-1.4 0-.4-.3-.9-.4-1.1-.9-.4-1.4-.3-2.1.2.1.7.3 1.4.5 2.3zm-21.8 144.2c-2 .4-3.9-.3-4.9 1.5 2.2.6 3.6.5 4.9-1.5zM79.7 99.1c1.4-.6 1.7-1.5.9-2.9-1.1.5-2.2.8-2.4 1.8.2.6.6.9 1.5 1.1zm276.7 124.8c1.9 1 3.3 1.4 4.7.4 0-.7-.3-1.1-1.3-1.3-.8.2-1.8.5-3.4.9zM123 290.5c-1.4-.1-1.8.6-2.1 1.5.3.3.7.7 1.1 1.2 1.7-.7 2.3-1.5 1-2.7zm233-127.7c-1.9.2-2.5.9-1.8 2.3.9.4 1.5.2 2.2-.2.4-.7.5-1.3-.4-2.1zm-6.2-21.9c-1.5 1.2-1.5 2.1.4 3 1.3-1.1 1.7-2-.4-3zM181.7 518.5c-.5.8-.6 1.3.1 2 .9-.6 3-.1 2.7-2.1-1.1 0-2 .1-2.8.1zM334 237.9c1.2-.4 1.7-1.1 2.1-2-.6-.6-1.2-.7-2.2-.5-.6.9-1.9 1.7.1 2.5zM223.3 516.6c1-.4 1.6-.9 1.2-1.8-1.1-.3-2.1-.6-3.1.1-.2 1.1.8 1.4 1.9 1.7zm14.5-8.2c-.4-.9-1-1.2-1.7-.8-.8.4-1.6.8-1.6 1.6 0 .6.1 1.3 1.5 1.3.2-.9.2-1.9 1.8-2.1zm59.6-406.7c.4.9.6 2 2.6 2.1-.1-.9.4-1.8-.6-2.5-.7-.5-1.3-.3-2 .4zm-244.5-4c1.4 1 2.3.5 2.8-.3.5-.7.5-1.6-1.1-1.8-.5.6-1 1.3-1.7 2.1zm-30 95.6c.3-.7.7-1.3-.1-2-1.3.4-2.6.9-2.8 2.2 1.1.5 2 .1 2.9-.2zm284.8 25.8c2.2-.8 2.4-2 2.5-3.7-1.6 1-2.8 1.7-2.5 3.7zM262.1 51.3c-1.4-1.3-2.6-1.4-4-.1 1.3 1.4 2.5 1.2 4 .1zM190 318.4c-1.3.3-2.2.7-2.7 1.5.8 1.3 1.8 1.2 3.2.4-.1-.5-.3-1.1-.5-1.9zm94.5-229.8c-.4.9-.3 1.6.8 2.1 1.8-.2 2.4-.9 1.3-2.4-.8.1-1.5.2-2.1.3zM297 72.3c-.2 2.3 1 2.7 3.1 2.8.3-1.7-1.3-1.9-3.1-2.8zM341.3 198c1.2-.5 2.1-1 1.7-2.2-.8-.6-1.5-.5-2.4 0-.3.7-.3 1.4.7 2.2zm-31.6-81.3c-1.1 1.9-.9 3.1 1.1 4.3.5-1.7.2-2.8-1.1-4.3zM13 234.2c-.5.8-.5 1.5.3 2.1.8.5 1.6.5 2.4-.1-.5-1-.8-2.1-2.7-2zm1.1-4.8c.1 1.6.5 2.6 3.1 2.9-.6-1.5-.5-2.8-3.1-2.9zM349.3 98.2c-.4-1.2-1.1-1.9-2.8-2-.5.7-.6 1.4.1 2 .7.5 1.6.5 2.7 0zm19.7 98.5c-2.5.4-2.6 1.4-2.2 2.8 2.4-.1 2.3-1.3 2.2-2.8zm-354.1 9.4c.3-1.1.3-2.1-1.4-2.5-1.3.5-1 1.3-.6 2 .2.6.9.8 2 .5zm359.6-44.9c-1.4 1.1-1.5 2-.1 3.2 1.7-1 1.3-2 .1-3.2zM217.9 22.3c-.4-1.5-1.7-1.7-3.5-2 .1 2 1.3 2.3 3.5 2zm100.8 220.4c2.3-.2 3.6-.7 3.4-2.7-2 .4-2.8 1.1-3.4 2.7zm-250.8-139c-2.8.7-3.6 1.5-3.6 3.1 2.3.2 2.3-1.2 3.6-3.1zm143 219.3c-.2.9.2 1.4 1.1 1.6.8.2 1.5 0 1.8-.8-.4-1.2-1.3-1.5-2.9-.8zM43.8 119.1c-2 .3-3.3.7-3.5 2.4 2.3-.1 3.2-.8 3.5-2.4zM196 336c1.8-.1 3.6 1.3 6.2-.1-2.8-1.1-4.4 0-6.2.1zm-10.1 19.3c-1.9-.3-3.8-.6-5.6-.9 1.4 2.1 3.7.7 5.6.9zm166.3-149.6c.2.9-.8 1.6.1 2.4 1.2.1 1.9-.5 2.2-1.3.1-.3-.1-.7-.1-1.1h-2.2zM106 318.5c0-1.9-1.3-2.4-3.3-2.8.1 1.9 1.5 2.3 3.3 2.8zM7.4 200.8c.8.5 1.5.7 2.5.1.3-1.5-.9-1.8-2.4-2-.6.6-.4 1.3-.1 1.9zM185 454c1.3-.8.7-1.6.4-2.3-.3-.7-1.1-.7-2-.2.2.8-.2 2 1.6 2.5zm79.5-191.5c1-.8 1.1-1.5.3-2.4-1.6 0-2.1.7-2.2 1.7.4.6.9.8 1.9.7zm7.8 29c-1.2 0-2.2 0-2.9.8.2.7.5 1.3 1.7 1.4.9-.4 1.6-.9 1.2-2.2zm24-208.1c1.7-.7 3-1.2 2.2-2.8-2.3.2-2.6 1.1-2.2 2.8zm75.8 66.5c-1.5-.1-1.7.5-1.6 1.3 0 .8-.1 1.6 1.5 1.5.9-.8 1-1.7.1-2.8zM211.2 310.6c.3 1.1 1.1 1.7 2.3 1.9.9-.3 1.4-.8 1.1-1.6-.9-.5-1.9-.8-3.4-.3zm119.1-129.2c-1.1-.8-2.1-1.2-3.3-.2-.1.8.2 1.3 1.2 1.4 1 .2 1.6-.3 2.1-1.2zm13.8 62.8c2 0 3.3-.4 3.2-2.3-2 .3-3.2.7-3.2 2.3zm-317.4.6c-1.1.6-1.4 1.3-.6 2 .7.7 1.5.6 2.3 0 .2-1.1-.4-1.7-1.7-2zM251.9 43c-1.8-.6-2.9-.4-3.7 1.1 2 .9 2.9.3 3.7-1.1zm61.4 126.6c-.5-.6-1-1.1-2-1.1-1.1 1.2-1 2.1 1.1 2.8.4-.7.7-1.2.9-1.7zm65-23.5c0 1.2.2 2.1 2.3 1.8.5-.9.2-1.6-.4-2.2-.6-.2-1.2-.2-1.9.4zm-34.6-32.4c-.9 1.1-.6 1.9.9 2.5.7-.2 1.2-.5 1.3-1.1-.3-.8-.8-1.4-2.2-1.4zM45.4 127.1c-1.4.7-2.6 1.3-1.3 2.8 1.7-.6 2.5-1.3 1.3-2.8zm313.3 12.2c1.8-.1 1.8-.9 1.7-1.7-.1-.7-.2-1.5-1.7-1.3v3zm-67.9 174.3c-2.2-.2-3.2.4-3.3 2.2 1.8-.3 3-.6 3.3-2.2zm-56.1 7.4c2.3 0 2.6-.9 2.2-2.3-1.9 0-2.5.7-2.2 2.3zm-119.6-27.8c-1.8.6-3.7.3-4.2 2.6 2.1-.6 3.6-.7 4.2-2.6zm229.2-146c2.1.1 2.9-.4 2.4-1.9-.9-.4-1.6-.2-2.4.3v1.6zm-38 59c2.1-.8 2.4-1.8 1.7-3.2-2.3.4-1.9 1.6-1.7 3.2zm18.9-17.3c-.7-1.3-1.8-1.1-3.1-.8-.4.6-.4 1.1.3 1.6 1.1.2 2 .1 2.8-.8zm34.6-66.6c.8-1.2.9-2.1-.9-2.8-1.6 1.3-1.3 2.1.9 2.8zM67.9 90.5c-2.1.7-3.3 1.5-4.2 3.7 2.2-1.3 3.8-1.8 4.2-3.7zm319.7 95.3c-.1-.7-.4-1.3-1.5-1.7-.8.4-1.8.7-1.7 1.8 1.1.6 2.1.5 3.2-.1zM205.2 454.7c-2.6.9-2.3 2.2-2.2 3.6 2.2-.6 1.8-1.9 2.2-3.6zm135.2-197.9c-2 .2-3.3.6-3.5 2.3 2.1.2 2.9-.6 3.5-2.3zM56.1 106c-1.4-1.4-2.4-.9-3.4 0 .3.9 1.1 1 2.2 1.1.3-.3.7-.7 1.2-1.1zm328 82.1c-.4 1.2.1 1.6 1.1 1.5 1-.1 2.1-.3 1.9-1.5h-3zm-75.4 19c-2.2.6-2.4 1.5-1.5 2.9 1.9-.6 2.1-1.4 1.5-2.9zm19.2 33.2c-2.3-.2-3.4.3-3.8 1.9 2.1.4 2.7-.7 3.8-1.9zm22 9.9c2.1.6 3.5 1.2 5.2-.1-1.8-1.5-3.2-.1-5.2.1zM263.5 285c-.7.8-1.3 1.5-2 2.3 1.2.6 2 .5 2.6-.2.6-.7.7-1.4-.6-2.1zm80.5-80.2c-1-1.3-2.1-1.7-3.6-.7.6 1.8 1.9 1.5 3.6.7zM156.8 313.5c-.3-.6-.5-1.1-.8-1.6-.9.2-1.6.4-2.2.5-.4.7-.3 1.2.6 1.6.6-.1 1.4-.3 2.4-.5zm169.1-109.7c1.5-.8 1.8-1.7 1.1-3.1-2.2.7-2.1 1.7-1.1 3.1zm8.7-66.4c2-1.2 1.6-2.1.3-3.2-1.6 1-1.3 1.9-.3 3.2zm-97.7 128.7c-1.4.4-2.2 1-1.3 2.2 1 .3 1.7.2 2.3-.5 0-.6-.1-1.2-1-1.7zm84.8 15.4c-1.4-.1-2.7-.1-3.6.9.2.8.8 1.1 1.6.9 1-.2 1.9-.7 2-1.8zm-204.9 34.7c-.9 0-1.5.3-1.7 1.2.3.3.7.7 1.2 1.1.7-.2 1.3-.4 1.8-.6.1-.9-.4-1.3-1.3-1.7zm246.3-135.6c-1.1 1.1-1.1 2-.3 3.1 1.8-.9 2.3-1.7.3-3.1zM262.8 388c.8-1.5 2.6-2.3 2.5-4.9-1.6 2-3.1 2.9-2.5 4.9zM41.6 230c.2-1 .2-1.8-1.4-1.9-1.2.5-1.5 1.3-.9 2.2.9.4 1.6.2 2.3-.3zM58 86.7c2.2-.1 3.6-.6 4-2.5-2 .4-3 1.1-4 2.5zm171.8 226.1c.9.7 2 .7 3 .4.5-.7.4-1.3-.7-1.8-.8.2-2 .2-2.3 1.4zm77.3-41.3c-2.2-.1-3.4-.1-4.7.7 1.8.9 3 1.1 4.7-.7zM352 158.8c-.5 1-1.5 2-.8 3.5 2.1-1 1.5-2.3.8-3.5zm-46.4 116.5c-.3-1.1-1.1-1.6-2.4-1.5-.6.6-.7 1.1-.2 1.7.8.4 1.6.6 2.6-.2zM177.2 328c-.4-1.1-.7-2.1-2.3-2-.8 1.7-.1 2.3 2.3 2zm16 10.7c2.5.6 3.7 1 5.2 0-1.4-1.2-2.6-.5-5.2 0zm137-195.4c-.9-.3-1.6-.7-2.6 0 .4.9.4 2.1 2.6 1.6v-1.6zM113.5 88c1.8-.4 2.7-1 2-2.4-2.2 0-2.5.8-2 2.4zm270.7 105.4c1.8-.5 2.7-1.1 1.8-2.6-2.1.3-2.7.9-1.8 2.6zM41.5 104.6c-1.6.9-2.9 1.6-3.2 3.7 2.3-1.1 3.5-1.8 3.2-3.7zM227 294.5c-1.6.1-2.2.7-1.6 1.9 1.1.5 1.9.3 2.6-.4.2-.7-.1-1.2-1-1.5zm87.9-83.3c1.9-.1 2.7-.7 2.2-2.2-2.2-.1-2.7.7-2.2 2.2zM26.6 221.9c-1 1.7-.3 2.5 1.7 3.3.1-1.3.2-2.4-1.7-3.3zm196.6 232.2c1.4.2 1.9-.4 2.1-1.1.2-.6-.1-1.2-1.1-1.3-1.5.4-1.6 1.2-1 2.4zM50.6 279.3c-1.2-1.3-2.2-1.9-4-1.4.5 1.7 1.8 1.7 4 1.4zM308 260.9c.4.6.9 1.1 1.9.7.4-.9.7-1.8-.4-2.6-1.5.2-1.4 1.1-1.5 1.9zm52.7-145.4c-.7 1.4-.7 2.3 1.4 2.6.7-1.3 1-2.2-1.4-2.6zm-45.8 148.2c1.9-.6 3.6-.8 3.2-2.7-1.9.4-2.6 1.2-3.2 2.7zm39.7-79.9c.5-.8.4-1.5-.5-2-1.1 0-1.9.3-1.9 1.4.5.6 1.3.9 2.4.6zM110.8 320.6c.7-1.8-.4-2.5-2.2-3.1-.3 1.6.5 2.4 2.2 3.1zm215.7-51.1c1.5-.7 3.2-.9 2.2-2.8-1.4.6-2.5 1.1-2.2 2.8zm-302-128.7c2.4 0 2.8-.9 2.8-2.4-2 .1-2.6 1-2.8 2.4zm346.3 85.8c1.7.6 2.7.3 3.3-.9-1.6-1-2.4-.5-3.3.9zm-10.6-11.7c1.8-.4 2.2-1.1 1.7-2.5-1.4.5-2.9.6-1.7 2.5zM289.4 59c-.1-1.6-.7-2.3-2.8-2.2-.1 1.4.7 2 2.8 2.2zm-221 239.2c.4 1.9 1.7 2.4 3.6 2.9-.4-1.7-1.5-2.4-3.6-2.9zm22.3-5.8c-3.1.3-3.6.8-2.6 2.3 1.2-.4 2-1.2 2.6-2.3zm220.6-16.8c-.7-1.6-1.8-1.5-3-.8-.2 1 .4 1.4 1.6 1.6.4-.2.9-.5 1.4-.8zM317 98.8c.9-1.4.9-2.3-.5-3-1.3 1.1-1.4 2 .5 3zm44.6 87.2c.8.5 1.5.5 2.3-.1.4-1.3-.6-1.7-2.1-1.7-.7.6-.5 1.1-.2 1.8zm-5.3 21.2c.8.6 1.5.6 2.4.4.5-.5 1.2-1.1.4-2-1.1.4-2.5.4-2.8 1.6zm-43.8 32.7c2.3-.8 3.6-1.4 3.5-3.2-2 .5-2.4 1.6-3.5 3.2zM301.3 79.4c2.1-.9 1.8-2 .9-3.2-2 .7-1.4 1.8-.9 3.2zm53.2 68.3c-2.3.8-2.5 1.3-.8 2.6 1.7-.6 1.6-1.5.8-2.6zM241.8 497.9c.1-1.6-.4-2.6-2.5-2.8.1 1.5.8 2.2 2.5 2.8zm78.6-368.5c.9.4 1.6 1 2.6.3.4-.9 0-1.4-1-1.8-1 .1-1.5.5-1.6 1.5zm-68.1 193.8c-.1-1.1-.9-1.6-2.3-1.5-.6.6-.7 1.2-.2 1.9.9.2 1.8.2 2.5-.4zm128.9-171.6c1.2-.7 1.5-1.4.4-2.2-.8-.1-1.5 0-1.8.6-.2.7.2 1.2 1.4 1.6zm-51 74c-.4 1-.1 1.5.9 1.5 1.1 0 2.3-.2 2.3-1.6-1 0-2.1.1-3.2.1zm-123.7 45.7c.6.6 1.2.7 2.1.3.4-.7.9-1.5-.6-2.2-.9.4-1.5.9-1.5 1.9zm117.1-77.7c.9-1.2 1.7-2.1-.4-2.9-1.1 1-1.1 1.9.4 2.9zm-85.5-155c.2-1-.6-1.2-1.6-1.2s-2 .1-1.8 1.3c1.2.3 2.3.5 3.4-.1zM37.7 220.5c0-1.8-1.5-1.7-3.2-2.1-.1 2 1.5 1.9 3.2 2.1zm303.7 2.7c1.4 0 2.1-.6 2.5-1.5 0-.6-.4-.9-1.2-1-1.2.6-1.7 1.4-1.3 2.5zm-4.3 23.2c-2.1.6-3.3 1.3-3.8 3 2-.5 3.2-1.2 3.8-3zm-2.9 10.7c-1.1.4-1.8.9-1.3 2 1.2.2 2.1-.2 2.6-.9 0-.7-.4-1-1.3-1.1zM204.7 532.8c-1.2-.5-2.4-.6-3.6 0-.1.9.5 1.2 1.4 1.1.8-.2 2.1.2 2.2-1.1zm58.4-231.6c-.8.8-1.4 1.4-.8 2.3 1.4.1 2.2-.4 2.6-1.6-.6-.2-1.2-.4-1.8-.7zm96.8-135.3c-1.9.9-2 1.8-.7 3 1.4-.9 1.4-1.8.7-3zm13.9 1.8c1.2 0 1.9-.4 1.9-1.2 0-.8-.5-1.3-1.8-1.2-.6.7-.9 1.4-.1 2.4zM345.9 144c1.2-1.1.6-1.8-.7-2.6l-1.3 1.3c.2 1 .8 1.4 2 1.3zm-59.5-83.8c-.3.9-.2 1.4.8 1.6 1.2-.2 2.2-.5 1.9-2-1 .2-1.8.3-2.7.4zm73.2 128c-2.6-.5-2.8-.3-2.5 1.5 1.4.2 2.3 0 2.5-1.5zM220.2 332.9c-1.8-.5-3.3-1.1-5 .2 1.9.7 3.3.6 5-.2zm84.3-133.2c.4.8.5 1.4 1.8 1.3 1-.8.8-1.6-.3-2.6-.6.5-1.1.9-1.5 1.3zm22.1 26.2c-1.6-.1-2.5.2-3 1.4 1 .3 1.9.5 3 0v-1.4zm-199.7 76.3c.4.8 1.1 1.3 2.4 1.5.4-.8.2-1.5-.5-2.1-.9-.2-1.5-.2-1.9.6zm186.2-100.8c1.5-.7 2.7-1.3 1.7-2.9-1.3.6-2.7 1-1.7 2.9zM192.8 316.6c.3.8.8 1.4 1.9 1.1 1-.2 1.3-.8.7-1.5-.9-.5-1.7-.4-2.6.4zm160.8-129.4c.9-.4 1.6-.9.9-1.7-.6-.8-1.5-.7-2.3-.1-.3.9 0 1.5 1.4 1.8zM21.8 145.4c-.6.7-.7 1.2-.2 1.8.7.4 1.4.4 2.1-.1.5-1.3 0-1.9-1.9-1.7zm314.9 140.7c-2.2 0-3.5.4-3.5 2.1 2 .2 2.3-1 3.5-2.1zM363 172.5c1.1.2 1.6-.2 1.8-.9.2-.7.3-1.4-1.3-1.7-.4.8-1.1 1.5-.5 2.6zm.8-29.4c-2 1-1.8 1.8-.3 2.7 1.7-.9 1.1-1.7.3-2.7zm-305-47.5c.2 1.4.4 2.4 2.6 2.1l-.3-1.8c-.7-.1-1.4-.2-2.3-.3zm37.8-20.9c-2 .1-2.5.9-2.8 2.2 2.3.3 2.8-.6 2.8-2.2zm152.2 216.8c.6.9 1.4.9 2.2.3.8-.7.5-1.4-.6-2-.8.4-1.5.8-1.6 1.7zm35.8-67.6c.4-1 .8-1.8 1.1-2.7-1.1-.6-1.7-.3-2.3.4 0 .9.1 1.6 1.2 2.3zM226.3 318c1-1.9 0-2.5-1.6-3.5-.3 1.7.5 2.4 1.6 3.5zm117.2-98.6c2-.2 2.7-.9 2.6-2.5-1.7.3-2.7.8-2.6 2.5zm-36 71.1c1.5.8 2.6.9 3.4-.5-1.3-1-2.4-1-3.4.5zm31.9-162.9c.5.8 1.1.9 2 .8.9-.5 1.3-1.1.4-1.9-1.2-.2-2 .1-2.4 1.1zM51.5 258.3c1.3-.1 1.5-.7 1.5-1.4-.1-.6-.5-1.1-1.6-1-.5.8-.8 1.6.1 2.4zm42.1 36.8c.9-.7.8-1.3-.1-1.7-.9-.4-1.6-.1-1.9.7.3.8.9 1.2 2 1zM37.4 272c.2 1.6 1.5 1.9 3.1 2.1-.5-1.8-.8-2.1-3.1-2.1zm317.7-75.4c2.1-.4 2.3-1.3 2.2-2.8-1.7.6-2.4 1.3-2.2 2.8zm24.6-35.2c-1.1-.3-1.9-.2-2.2.7-.2.8.1 1.3 1.2 1.3 1.1-.4 1.3-1.1 1-2zM215.4 498.1c-.2-1.5-.5-2.4-2.2-2.6-.1 1.3-.2 2.4 2.2 2.6zM364 177.3c-1.2.2-1.8.6-1.7 1.4.1.7.6 1 1.6.9 1-.6 1-1.4.1-2.3zm-79.2 85.4c-1.7 0-2.4.6-2.4 2.1 2 .2 2.8-.4 2.4-2.1zm38.4 4.6c-1.1.4-2.3.7-2.4 1.8 1 .7 1.8.3 2.5-.2.7-.4.9-.9-.1-1.6zm41.6-71.2c1.2-1.1 1.2-1.9.4-2.8-1.5.8-2.2 1.5-.4 2.8zM199.1 355.4c-.4-1-1.1-1.2-2.1-.9-.7.2-1.7.3-1.2 1.4 1.1.4 2.1 0 3.3-.5zm134.4-131.2c2.1.1 2.6-.7 2.3-2.2-2 0-2.5.7-2.3 2.2zm48.4-10.1c-.9-.6-1.7-.5-2.3.1-.6.6-.5 1.2.4 1.7 1.2-.3 1.9-.7 1.9-1.8zm3.2-4.1c-2-.2-3 .2-3.4 1.6 1.8.5 2.7-.2 3.4-1.6zM47.5 112.7c0-1-.5-1.2-1.5-1.3-.8.5-1.6.9-1.4 2.1 1.1-.3 2-.6 2.9-.8zm266.2-25.9c.4.8 1 1.3 2.3 1 .5-.5.7-1 .1-1.6-1-.3-1.7-.1-2.4.6zM14.4 207.3c-1.6 1.2-1.6 2-.1 3.3 1-1 1.1-1.9.1-3.3zm349.7-53.4c.8-1.2 1.1-2.2-.9-3.1-.6 1.5-.9 2.4.9 3.1zm-14.2-22c.1-1.2-.1-2.1-1.1-2.9-1.4 1.3-1.5 2.2 1.1 2.9zm28.3 94.5c2.2 0 2.9-.7 3-2.3-1.9.3-2.8.8-3 2.3zM168.6 305c.6-1 .8-1.9-.8-2.3-.9.5-1 1.1-.9 1.8.2.1.5.4.8.5.2.1.5 0 .9 0zm31.2 57.6c-1.7 1.1-1.7 1.4 0 2.4 1.4-.8 1.2-1.6 0-2.4zM374.4 169c-1.7.9-1.4 1.8-.5 3.1 1.4-1.1 1.8-1.9.5-3.1zm-44.8 55.2c1.5-.2 2.2-.8 1.9-2-.8-.3-1.4-.4-2.2 0-.3.7-.3 1.3.3 2zm10.5-31.6c.3 1.1.9 1.6 2 1.2 1-.3 1.5-.8.6-1.7-.7.2-1.5.3-2.6.5zM26.4 164.9c.3-.8 1.7-1.3 1-3-.9 1-1.6 1.7-2.3 2.5 0 .3.4.6 1.3.5zm337.2-18.1c-1.9.6-1.6 1.5-1 2.7 2.1-.5 1.9-1.4 1-2.7zM243.3 506.4c1.1.3 1.7 0 1.7-.8 0-.7 0-1.6-1.5-1.5-.5.7-.6 1.4-.2 2.3zm120.1-340.3c-.4.8-.7 1.5-.1 2.3 1.3.2 1.8-.4 1.9-1.2-.2-.7-.6-1.2-1.8-1.1zM16.1 242.7c.6 1.3 1.3 1.9 3.2 1.5 0-1.6-1.1-1.9-3.2-1.5zm10.4-44.9c1-1.5 1.4-2.5-.6-3.3-.8 1.3-.2 2.1.6 3.3zm255-73.3c0 .9-.2 1.6.7 2.1 1.3-.3 1.7-1 1.7-2.2-.7.1-1.4.1-2.4.1zm77.7 1.9c1.8-.9 1.8-1.8.7-3-1.8.8-1.7 1.7-.7 3zM68.5 286.2c.9 1 1.8 1.5 3.3.7-.8-1.3-1.6-1.8-3.3-.7zM44.4 107.7c.3-.8.1-1.3-.7-1.6-1 0-1.7.3-2 1.2.8.5 1.6.7 2.7.4zm254.2-7.3c.1-1.1.2-1.8.2-2.5-1.8-.2-2.4.3-2.2 1.6.5.1 1 .4 2 .9zm7.7-21.2c-1.1.9-1.9 1.6-.2 2.6 1.9-.6 1.8-1.3.2-2.6zm74 100.2c-1.5.2-2.7.1-3.1 1.5 1.6.3 2.8.3 3.1-1.5zM110.8 302.1c-.1 1.3-.3 2.1.9 3 1.5-1.3 1.1-2.1-.9-3zM46 103.3c-.2-1.3-.5-2.1-2.3-1.9-.3 1.4.5 1.9 2.3 1.9zm334.7 88c-.5.9-1.3 1.5-.5 2.5 1.3 0 1.8-.5 2.1-1.5-.5-.3-.9-.6-1.6-1zm-13.9-8c1.4-1 1.8-1.7.3-2.8-1.4.6-1.4 1.4-.3 2.8zm-333.2 73c-1 .7-1.1 1.2-.3 1.7s1.7.7 2.6-.2c-.7-.5-1.4-.9-2.3-1.5zm337.1-91.9c1.5-.9 1.4-1.8.6-3-1.1 1-1.6 1.8-.6 3zm-67 104.8c-1.1-.2-2.1-.4-3 .2 0 .9.6 1.3 1.6 1.2.8-.1 1.5-.4 1.4-1.4zm-73.1 26.4c.7-.2 1.1-.6 1.1-1.3-1-1-1.9-1-2.7.2.2.7.7 1.1 1.6 1.1zM383.8 179c.1.9.6 1.2 1.5 1.3.7-.3 1.2-.8.9-1.5-.9-.9-1.7-.7-2.4.2zm-326 57c.4-.6.5-1.1-.5-1.6-1 .2-1.9.5-1.9 1.5.9.6 1.7.5 2.4.1zm185.8 61.2c-.6 1.2-.6 2 1.2 2.6.9-1.2.8-2-1.2-2.6zM49.7 261.5c.3-.8.5-1.6-.4-2.3-1-.1-1.5.3-1.5 1 .1.8.6 1.3 1.9 1.3zM9.2 203c-1.1 1.4-.2 2 1.2 3.1.2-1.5.4-2.5-1.2-3.1zm358.5-23.5c.8-.7 1-1.5.1-2.3-1.1 0-1.5.5-1.6 1.2 0 .6.4 1.1 1.5 1.1zm-36.3 17.2c-.4 1.3-.6 2.1.7 3 .6-1.1 1.4-2-.7-3zm6.1-69.8c-3 1.1-2.7 2.3-2.3 3.6.5-.9 1.1-1.8 2.3-3.6zM62.4 274.8c.7.7 1.5 1.1 2.8 1 .1-1-.6-1.5-1.6-1.8-.7-.2-1.1.1-1.2.8zM7.9 170.5c2.1-.5 1.6-1.5 1.1-2.6-1.9.5-1.6 1.4-1.1 2.6zM308.5 67.3c-.6.8-.6 1.4.1 1.9.6.4 1.3.3 1.8-.4 0-.9-.4-1.4-1.9-1.5zM23.5 203c.7-.9 1.1-1.7-.1-2.4-1.2.8-2.2 1.4.1 2.4zm251.3 82.5c1.6-.1 2.7-.4 2.6-1.7-1.8-.3-2.6.2-2.6 1.7zM14.5 212.9c-.2 1.3.3 1.9 2.2 1.6 0-1.2-.4-1.9-2.2-1.6zM77.1 82.7c1.4-.6 2.4-1.1 2.4-2.5-1.9.3-2.4 1.1-2.4 2.5zm276.7 98.2c.7-1.3.7-1.3-.4-2.2-1.7 1-1.6 1.4.4 2.2zM185.7 456.5c-.7 1.1-1 2 .4 2.8 1.1-1.1 1.1-1.9-.4-2.8zM80.8 274.7c-.1-1.2-.5-1.8-2-1.6-.5 1.8-.3 2 2 1.6zm269.4-97.3c0-1.4-.7-1.9-2.2-1.8-.5 1.6.6 1.7 2.2 1.8zm-25.8-39.6c.2-1.2.1-2-1.7-2.2-.5 1.2-.1 1.9 1.7 2.2zM140.1 317.4c-1.4-.7-2.3-1-3.6-.4 1 1.4 1.9 1.6 3.6.4zm105.9-19c.5.6 1.1.8 1.8.4.6-.4 1.2-1 .4-1.7-1.1-.1-1.8.3-2.2 1.3zM28.1 204.9c.2.9.6 1.2 1.5 1.2.8-.6 1.4-1.2.3-2.3-.7.4-1.3.8-1.8 1.1zm322.6-60.5c-1.4.4-2.4.9-1.5 2.3 2.1-.1 2.2-.9 1.5-2.3zm-.7 3.6c-1.3-.1-1.5.5-1.5 1.1 0 .7.3 1.2 1.3 1.2.7-.7.8-1.4.2-2.3zM211.3 533.2c-2.2-1-3.3-1.2-4.5-.2 1.2 1.3 2.3.4 4.5.2zM357 203.5c-.1-.8-.5-1.1-1.6-1.1-.8.4-1.3.9-.5 1.7 1 .4 1.6.2 2.1-.6zM215.3 306.3c-1.2.3-1.6 1-1.5 1.7.1.6.7.8 1.7.7.3-.8.6-1.5-.2-2.4zM327.9 260c.8-.4 1-.8.5-1.5-1.1-.5-2-.4-2.5.6.4.8 1.1.9 2 .9zM32.8 182.5c-1.8.4-2.7 1-1.9 2.5 1.6-.6 2.4-1.1 1.9-2.5zM328.1 237c.2-.7 0-1.1-.9-1.4-1.2 0-1.5.6-1.4 1.4.8.6 1.5.7 2.3 0zM155.2 422c-.2 1.3-.1 2.6 2.2 3.5-1-1.5-1.6-2.5-2.2-3.5zM382 152.8c-.7 1.2-.9 2.1 1.1 2.5.5-1 .7-1.9-1.1-2.5zm-36.7 2.8c.2-1.4-.1-2.2-1.7-2.7-.5 1.4-.1 2.1 1.7 2.7zm40.7 46c1.3-.7 1.5-1.5.3-2.6-.9.8-1.6 1.5-.3 2.6zm-41.1-32.5c.9.2 1.5-.1 1.9-.8-.4-.7-.8-1.3-2-1.1-.7.6-.4 1.1.1 1.9zM183.3 512.5c1.8.5 3 .8 4.3-.2-1.4-1-2.5-.5-4.3.2zm133.4-211.9c1.6-.1 2.5-.5 2.5-1.8-1.7-.1-2.5.4-2.5 1.8zM149 546.4c-.7 1.4-.6 2.4.7 3.4.7-1.3.3-2.2-.7-3.4zM274.1 76.6c-1.1.1-1.6.5-1.5 1.2.1.7.8 1 1.7.7.7-.6.6-1.2-.2-1.9zM87.5 281c-1.7.3-1.9 1-1 2.1 1.8-.3 2.2-1 1-2.1zm275.1-105.1c.9.3 1.7.1 1.9-.7.2-.6.2-1.2-1-1.3-.9.5-1.1 1.1-.9 2zm-57.9-73.4c1.6-.6 1.6-1.3.5-2.1-2 .3-1.7 1.1-.5 2.1zm81.2 101.6c-.1-.7-.6-.9-1.5-.9-.5.5-1.1 1-.5 1.8 1.1.3 1.6-.2 2-.9zm-69 51c-1.7-.1-2.5.4-2.8 1.6 1.6.1 2.8 0 2.8-1.6zm20.2-3.1c1.7.2 2.7-.2 3.3-1.5-1.8 0-2.7.3-3.3 1.5zM235.7 45.8c2.4 1.1 2.4 1.1 3.4-.1-1.1-.6-2.1-.6-3.4.1zm96.6 147.5c-1 0-1.6.3-1.5 1.1.1.8.9 1 2 .7.4-.6.5-1.2-.5-1.8zm-128 349.4c-1.7-1.1-3-.8-4.6-.5 1.4 1 2.7.8 4.6.5zm172-364.8c1.2.1 1.8-.3 1.8-1s-.7-1-1.6-.8c-.7.4-.8 1-.2 1.8zm-59.9-20c-1.4.8-1.6 1.5-.3 2.3 1.8-.6 1.8-1.3.3-2.3zm21.8-39c-1.6.5-1.9 1.2-1.6 2.4 2.1-.1 1.8-1.1 1.6-2.4zM21.8 188.8c.7-.7.8-1.4-.4-1.9-1 .3-1.3.7-1.1 1.4.1.5.6.8 1.5.5zm292.2-8.3h.9c-.2-1.1-.4-2.1-.6-3.2-.3 0-.6.1-.8.1.1 1 .3 2 .5 3.1zM21.4 135.1c0 1.6 1.1 1.8 2.6 2.2-.1-1.4-.9-1.9-2.6-2.2zm7.9-7.2c-1.6.5-2.4 1-1.3 2.2 1.6-.3 2-.9 1.3-2.2zm315.5 60c.4-1.3.3-2.1-1.5-2.3-.5 1-.4 1.8 1.5 2.3zM42.3 117.1c1.4-.5 2.3-.9 1.2-2.1-1.8.1-1.9.8-1.2 2.1zM319 191.6c-1 .9-1.1 1.6.5 2.3 1.3-1 1.2-1.7-.5-2.3zm37.1.8c1.2.4 2 .1 2.5-.9-.4-.7-.9-.9-1.6-.6-.8.3-1.3.7-.9 1.5zM200.7 451.3c-.9 1.2-.8 1.9.9 2.6.7-1.3.5-2-.9-2.6zm129.7-245.6c-1.5-.9-2.4-.5-3.4.3 1.2.9 2.2.6 3.4-.3zm47-66.9c-1.2-.3-1.8-.1-2 1 .5.6 1.1.9 2 .5.5-.5.5-.9 0-1.5zm-48 2.7c1.1-1 1.1-1.7-.1-2.4-1.2.7-1.8 1.4.1 2.4zm29 103.6c-1.7.1-2.2.9-2.7 1.9 1.8.2 2.4-.5 2.7-1.9zm-138 250.5c1 .4 1.9.4 2.8-.4-.6-.6-1.3-1-2.3-.8-.7.2-.8.7-.5 1.2zm-13 39.8c.8.7 1.5 1.1 2.6.9-.3-1.8-.9-2-2.6-.9zM181.1 454c.7-1.2.7-2-.8-2.7-1 1.1-.8 1.8.8 2.7zm139.6-305c-1.2.5-1.2 1.2-.5 2 .8.2 1.4 0 1.6-.6.1-.7-.1-1.2-1.1-1.4zM217.5 541.3c1.9.1 3.1 0 4.6-1.1-1.8 0-3.3-.6-4.6 1.1zM379 143.7c.1-1.4-.4-1.9-1.8-1.5-.7.6-.6 1.1.1 1.7.5-.1 1.1-.2 1.7-.2zm-174.9 392c-1-1.1-2.1-.8-3.3-.7.6 1.8 1.8 1.2 3.3.7zm137.2-383.6c-1.2.8-1 1.5-.2 2.5 1.5-.8 1.7-1.5.2-2.5zM13.5 202.2c.3-.8.6-1.5-.3-2.1-.8 0-1.4.3-1.4.9 0 .7.4 1.1 1.7 1.2zm278.8-48.4h-1.9c-.3.9-.1 1.5.9 1.8 1-.3 1.2-.9 1-1.8zm78.8 6.9c.9 0 1.3-.4 1.3-1 0-.7-.4-1.1-1.5-1-.7.7-.6 1.3.2 2zm-3.8-2c-.7 1.2-.9 1.9.9 2.4.9-1.1.7-1.8-.9-2.4zm-62 148.1c-2-.3-2.6.4-2.6 1.7 1.4 0 2.2-.5 2.6-1.7zm25-72.6c1.1 0 1.5-.4 1.7-1.1.1-.6-.1-1.1-1.1-1-1 .5-1.1 1.2-.6 2.1zM9.7 221c.6 1.2.9 2.2 2.8 1.6 0-1.4-.8-1.8-2.8-1.6zM23 237.8c.1-1.2 0-1.9-1.6-2.1-.7 1.2-.2 1.8 1.6 2.1zm346.9-44.9c-1.7.3-2.2.9-1.8 2 1.7.1 1.7-.8 1.8-2zM311.4 81.2c.2-.8.4-1.6-.9-1.8-1 .3-1.1.9-.9 1.5.2.6.9.7 1.8.3zM43.7 278.3c.1-1.3-.4-1.9-2-1.9-.4 1.3.4 1.7 2 1.9zM226 312.1c1.5.8 2.1.5 2.3-.8-1.4-.7-2.2-.6-2.3.8zm126-74.5c-1.3 0-1.7.6-1.5 1.5.6.4 1.2.6 1.8 0 .5-.5.5-1-.3-1.5zm-54.7 9.2c.4-1.2 1.1-2-.6-2.7-1 1-.9 1.7.6 2.7zm47.8-6.6c1.7-.2 2.6-.6 2.4-2-1.9-.2-2.2.7-2.4 2zM303 104.7c-1.1 1.2-1 1.8.7 2.4.6-1.1.6-1.7-.7-2.4zm61.6 36.6c0-.7-.3-1.2-1.3-1.2-.9.4-1.1.9-.7 1.6.8.3 1.3.1 2-.4zM188.7 314.8c.8.7 1.4.7 2.1.3.5-.5.5-1.1-.3-1.4-.3-.1-.7-.1-1.2-.1l-.6 1.2zm169.5-127.9c1-.9.9-1.6-.6-2.2-1.2.9-.9 1.6.6 2.2zm-89 103.1c1.2-.4 1.8-.7 1.4-1.6-.9-.4-1.7-.6-2.4.6.3.2.6.6 1 1zM35.7 246.5c-.1.8.2 1.5 1.1 1.8.9-.2 1.2-.6.9-1.2-.3-.6-.9-.9-2-.6zm-15.3-97.4c-1.1-.1-1.8.2-2 .9-.2.6.1 1 1 1 .7-.4 1.1-1 1-1.9zm63.4 138.8c-.4.8-.2 1.3.8 1.6.9.2 1.4-.1 1.5-.9-.5-.8-1.3-1-2.3-.7zm-65.2-41.2c.8 1.4 1.7 1.6 3.1.8-.8-1.2-1.7-1.2-3.1-.8zm359.6-62c1.4-.6 2.1-1.1.8-2.1-1.6.2-1.7.9-.8 2.1zM174.6 507.4c.7.6 1.5.8 2.5.3.3-.8-.2-1.2-1-1.3-1-.2-1.5.2-1.5 1zm194.4-352c-1.1-.2-1.5.2-1.6.9-.1.6.3 1 1.2.9.6-.5.8-1.1.4-1.8zM12.8 185.7c.9.9 1.6 1.5 2.6 2.6 0-1.7-.2-2.7-2.6-2.6zm190.5 267.2c.7.5 1.3.7 1.9.1.4-.4.6-1-.2-1.4-.9.1-1.4.5-1.7 1.3zM96 81.5c-2 .1-2.4.7-2.3 2 1.5-.2 2-.8 2.3-2zM325.6 111c-.1 1.2 0 2 1.8 2.2.2-1.1.3-2-1.8-2.2zm57.4 64.4c.1 1.2.2 2 2.1 1.5.3-1.2-.1-1.7-2.1-1.5zm-18.5 28c1.5-.3 2-.9 1.9-2.1-1.5.3-2 .9-1.9 2.1zM255.2 49.3c1.4.5 2 0 2.6-1.1-1.5-.6-2.3-.3-2.6 1.1zm106.7 170.8c-.7-.5-1.3-.4-1.8.2.1.7.2 1.3 1.3 1.3.8-.4.7-.9.5-1.5zm-29.5 32.6c.9 0 1.5-.3 1.5-1 0-.6-.6-.9-1.5-.7-.8.5-.8 1.1 0 1.7zM320 157.9c-.9.3-1 .9-.7 1.5.3.6 1 .7 1.7.2.3-.7.3-1.4-1-1.7zM143.4 509.7c1.9.3 2.4-.1 1.9-1.6-1.3 0-2.2.2-1.9 1.6zM42.7 204c1.7-.2 1.9-.9 1.5-1.9-1.9 0-2 .8-1.5 1.9zm95.6 124.8c-1.6-1.4-2.2-1.9-2.8-2.5-.7.1-1.3.3-1.1 1.1.9.4 1.8.7 3.9 1.4zM301.1 84.1c-.1 1.2.1 1.8 1.8 1.8.2-1-.1-1.6-1.8-1.8zM87.9 66.4c-.8.7-1 1.4 0 2.1 1.8-.8 1.8-1.2 0-2.1zm186.4-9c-1.6-.4-2.7-.5-3.8.5 1.3.4 2.4.3 3.8-.5zM37 125.3c-.9-.4-1.6-.2-2 .4-.1.2.2.7.4 1.1 1.1-.2 1.8-.5 1.6-1.5zm314.7 64.2c.7.4 1.3.5 2 .1.3-.4.6-.9-.2-1.4-1-.1-1.6.3-1.8 1.3zm8.2 14.6c1.4-.5 1.5-1 .6-1.9-1.5.3-1.9.8-.6 1.9zM346 148c-1.2 1-1 1.6.3 2.2 1.1-.8.9-1.4-.3-2.2zm-34 135.3c2.1.7 2.5.6 2.7-.9-1.1-.2-1.8.2-2.7.9zm18.8-162.5c1 0 1.4-.3 1.2-1-.2-.6-.7-1-1.7-.8-.2.6-.4 1.2.5 1.8zm-66.1 390.1c-.7 1.1-.7 1.8 1 2.2.5-1.1.4-1.7-1-2.2zm102.8-335.2c.9-.4 1.2-.8.7-1.5-.3-.5-.9-.5-1.6-.1-.2.6-.2 1.2.9 1.6zM147.2 285.6c-1.7.5-1.5 1.2-.6 2.1 1.5-.4 1.8-1 .6-2.1zm209.6-125.2c-.8-.5-1.5-.3-2.1.2-.1.6 0 1 .8 1.2.7-.3 1.3-.6 1.3-1.4zm-209 343.7c1.2.2 2.1.1 3-.5-1.1-1.1-1.4-1-3 .5zM306.7 90c-1 0-1.3.4-1.2 1.1.1.6.5 1 1.4.7.5-.6.6-1.1-.2-1.8zM39.2 250.6c-1.5 1.2-1.5 1.3.6 1.9.6-.7.5-1.3-.6-1.9zm303.6 1.2c1.6.1 2-.3 1.7-1.5-1.3 0-1.9.2-1.7 1.5zm-177.5 36.9c-1.2.3-1.5.9-1.1 1.7 2 0 2.1-.1 1.1-1.7zm179-166.6c-.5 1.1-.8 1.9.8 2.5 1-1 .7-1.7-.8-2.5zm36.8 66.1c-.7 1.1-.8 1.8.1 2.5 1.4-.9 1.4-1.5-.1-2.5zm-66.7 87.5c.6-.4 1.5-.5 1-1.3-.8-.1-1.6-.3-2.2.3.1.6.4.9 1.2 1zm-114.9 94.1c-.2 1-.4 2-.7 3.7 1.9-1.4 1-2.6.7-3.7zM60.7 270.1c0-.7-.2-1.2-1.2-1.4-.8.3-1 .8-.6 1.3s.9.6 1.8.1zM166 30.6c2.9-1.9 6.3-.4 9.8-1-1.1-.6-1.7-1-2.3-1.3 1.2-1.7 3.5 0 5.1-1.4-3.7-1.1-7.2.1-10.7-.5-.1.8-.3 1.5-.4 2.3-1 0-1.8-.1-2.8-.1 0 .8.1 1.5.1 2.1-1.4.9-3.1-.4-4.5.7.4.4.8.8 1.1 1.2 4-1 7.9.4 12.1-.4-2.1-2-5.2-.1-7.5-1.6zm-27.7 13.9c.8 2.2 5.9 1.9 10.7-.5-4.3-1.4-7.4.2-10.7.5zm121.6 10.7c-4.3-.8-8.4.4-12.9-.1 2 1.9 11.8 1.9 12.9.1zM155.6 34c1.3 1.4 12.9 1.5 14.6 0-5.1-.4-9.7-.4-14.6 0zm47.2-4.3c1.3.1 2.5.2 3.4.2 1.2-.9 2.1-1.6 3.3-2.5-2.5-.8-4.9-.3-7.7-.3.5 1 .7 1.7 1 2.6zm26.9 11.9c-4.6-.2-8.6-.5-14-.8 2.8 1.8 11.8 2 14 .8zm-67.6-3.9c-1.6-1.7-10.1-1.3-11.3.8 4-.4 7.5-.6 11.3-.8zm-5.4 2.2c-6.7-.8-8.8-.6-9.5.9 2.7 1.1 9.4.4 9.5-.9zm31.6-17.6c-2.8-.7-5.4-.3-8.2-.2.1.9.3 1.7.4 2.5.6.6 1.2.7 2 .3.1-.4.3-.9.3-.9 1.7-2 4.1.4 5.5-1.7zm-52.7 26.1c2.9 1.8 5.5 1.1 8 .7-2.3-1.2-4.7-1.5-8-.7zm101.9 6.9c3.8 1.2 6.2 1 9.8.4-3.6-1.2-6-1.1-9.8-.4zm-43-25.7c.9 0 .9-.8.2-1.5-2 .5-4.2-.5-7.3 1.1 3 .2 5.1.5 7.1.4zm-19.7-8.1c1.8 1.1 2.8.3 3.7-.3.4-1 .7-1.8 1.2-3-2.7.5-3.3 2.2-4.9 3.3zm13.2 4.6h7.3c-1.3-1.5-5.7-1.6-7.3 0zm7.4 6c0 1.5 1.1 1.5 2 1.3 1.2-.2 3 .6 3.6-1.6-2 .2-3.8.2-5.6.3zM186.5 15c-.9-.1-1.7-.1-2.5-.2-.1.7.1 1.1.9 1.3 1.4-1.3 3.9.6 5.5-1.2-1.5-1-2.7-.6-3.9.1zm-15 9.2c2.3 1.3 4.4.4 6.4.3-1.8-.8-3.7-1-6.4-.3zm14.3-4.4c-1.9-.2-3.5-.3-5-.4-.5.8-.1 1.1.8 1.6 1.1-.8 2.9.4 4.2-1.2zm4.8 2.9c1.2 1.7 2.7.6 5.3.6-2.5-.9-3.8-1.1-5.3-.6zm-7.4-5c1.5 1.1 2.6.8 4.7-.8-2.2.6-3.5-.4-4.7.8zM134 51.5c-1.1-.8-2-.4-3.4.4 1.6.8 2.5.6 3.4-.4zm134.8 149.1c.3-1-.2-1.5-1.1-1.4-6.5.3-13.1.6-19.9.8.4.7.7 1.1 1 1.5 6.8-.8 13.5.2 20-.9zm10.6-52.2c2.3 1.2 4 1 6.4.2-2.3-1.2-3.9-1-6.4-.2zm-105.2 393c-1-.9-.2-2.5-2.5-3.2-.4 1-.7 1.9-.9 2.7 1 1.4 2 1.7 3.4.5zm.8-6.1c-1.6-.3-2.3.1-1.8 1.6 1.7.2 2.2-.3 1.8-1.6zm132-376.8c-1.6-1.9-3.7-.8-5.3-.9 1.1 1.8 3 1.1 5.3.9zm-10.4-2.1c.8.9 1.6 1.8 2.9 3.4.1-2.4-1.1-3.1-2.9-3.4zm-21.1-27.9c-2.1-.4-3.3-.7-5 .1 1.6 1.4 2.8 1.1 5-.1zm-6.6.6c-1.1-.8-2-.9-3.6-.3 1.4.6 2.3.7 3.6.3zm17.1-25.2c-1.6-.9-3.3.4-4.6-.6-.6.4-1.1.8-2.1 1.4 2.7.4 4.6.3 6.7-.8zm-3.1 5.3c-1.1-.5-1.9-.7-3 .3 1.2.8 2.1.7 3-.3zm-21.4.8c-2-.1-3.3-.2-4.6-.3 1.2.8 2.5 1.3 4.6.3zm24.9 76.2c-2.9-.4-2.9-.4-3.6 1.2 2.9.1 5.6.4 8.7-.6-.9-.6-1.4-.8-1.8-1.1.6-1.4 1.2-2.6 1.8-3.9-1.4-.3-2.5-.5-3.7-.8-.8.5-2.5.5-2.3 2 .9-.1 1.6-.2 2.5-.3.4 1.6.1 2.7-1.6 3.5zM225.9 75.8c2.1.6 3.6.5 6.5-.4-2.9-.3-4.5-.5-6.5.4zm64.8 130.6c-1.3-.5-2.1-.4-3 .3 1.5 1.1 2.3 1 3-.3zm-154 69.5c-1.9-1.5-3.4-.8-5.6-.5 2 1.3 3.5 1 5.6.5zm72.7-203.7c1.5.5 2.4.4 3.1-.7-1.5-.5-2.4-.4-3.1.7z"
                        }
                    })])
                }), [], !1, null, null, null);
            h.default = component.exports
        },
        322: function(c, h, v) {
            "use strict";
            v.r(h);
            var m = v(15),
                component = Object(m.a)({}, (function() {
                    var c = this.$createElement,
                        h = this._self._c || c;
                    return h("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 390.8 565.1",
                            "xml:space": "preserve"
                        }
                    }, [h("path", {
                        attrs: {
                            d: "M58.5 212.9c.3-2.4 2.1-3.7 3.6-5 2.2-1.9 4.1-4 6-6.1 1.4-1.5 2.6-3.1 4.5-3.7.4-.1.8-.4 1-.7 1.5-2.7 4.4-3.6 6.4-5.6 2.9-3.1 6.6-5.1 9.8-7.7 1.2-.9 2.4-1.7 3.7-2.2 1.3-.6 2.9-.9 3.4-2.7.1-.2.4-.4.7-.5 5.3-2.3 10.1-5.6 15.3-8 7.4-3.4 14.6-7.2 22.5-9.4 6-1.7 12-3.7 18.1-5 4.4-.9 8.9-2.1 13.4-2.4 4-.3 7.9-.7 11.9-1.3 3.2-.5 6.4.1 9.6-.1 6-.5 12 .1 18 1.2 1.5.3 3 .6 4.6.4 1.8-.2 3.4.7 5.2 1 4 .8 8.1 1.3 12 2.5 5.6 1.7 11.3 3 16.7 5.3 6.4 2.7 12.9 5.1 19.1 8.3 2.3 1.2 4.5 2.8 6.9 3.9 3.4 1.5 6.3 3.9 9.6 5.4 1.6.7 2.6 2.1 4 3 3.2 2 6.5 4 9.4 6.4 3.3 2.8 7 5.1 9.9 8.5 1.3 1.4 2.9 2.5 4.4 3.7.7.6 1.2 1.3 1.5 2.1-.2 0-.4-.1-.7-.1-.7-.1-1.4-.3-1.8.4 0 .1.1.3.2.4.7.4 1.4.4 2-.3.1-.1.2-.3.3-.4 2.3 1.5 4.4 3.4 6 5.8.3.5.7 1.1-.1 2-.9 1 .5 1.4 1.1 1.4 2 .1 3.5 1.3 5 2.6.8.7 1 1.9 1.7 2.7 3.3 3.9 6.4 8 9.6 12 .3.4.6.9.8 1.4.3.6.3 1-.5.8-.5-.1-.9.1-1.1.6-.1.5 0 1 .5 1.2.9.4 1.4 2.9 2.8.5.2-.3.4.3.6.4 1.8 1.6 2.7 4 4.2 5.9 1.4 1.9 2.6 3.9 3.6 6.1.1.2.4.4.3.6-.2 2 1 2.1 2.4 2 1.5 0 1.3 1 .7 1.8-.7.9-.4 1.4.1 2.3 1.6 2.4 3.4 4.9 4.4 7.5 1.4 3.8 4.3 6.9 4.3 11.3 2.4 3 2.3 7 4 10.4 1.1 2.1 1.4 4.6 2.1 6.9.1.5.2 1 .4 1.4 2.1 3.4 2.1 7.5 3.2 11.3.8 2.9 1.1 5.9 2 8.8.7 2.4.5 5.2 1 7.7.9 4.2 1.2 8.5 1.8 12.7.2 1.5.1 3 .2 4.5 0 2.7.7 5.3.7 7.9 0 2.8-.2 5.7-.1 8.5.1 4.7-.6 9.4-.9 14.1-.5 6.5-1.4 12.9-2.5 19.3-.6 3.7-1.5 7.2-2.3 10.8-1.4 6.4-3.1 12.8-5.5 18.9-1.2 3.1-2.7 6.2-3.7 9.3-1.4 4.7-4 8.7-5.8 13.1-.8 2-1.8 3.9-2.1 6.1-.1.6-.5 1.1-.9 1.5-2.8 2.8-4.2 6.7-6.4 9.9-1.7 2.6-3.2 5.4-5.2 7.9-1.8 2.2-3.5 4.6-5 7.2-1.3 2.2-3 3.9-4.6 5.9-3.3 4.3-6.8 8.5-10.6 12.4-3.7 3.8-7.5 7.3-11.3 10.9-3.2 3-6.8 5.6-9.9 8.8-.7.7-1.6 1.1-2.5 1.6-7.1 4.9-14.4 9.8-22 13.8-5 2.7-10.2 5.2-15.4 7.4-4.4 1.8-8.9 3.1-13.3 4.8-6.2 2.4-12.6 3.9-19 5.2-5.5 1.1-11 2-16.5 2.5-4.5.4-9 .5-13.5.6-3.4.1-6.8.1-10.2.2-3.4.1-6.8-.6-10.2-1-3.7-.4-7.4-.7-11-1.5-5.3-1.2-10.8-1.7-16-3.3-6.8-2-13.7-3.7-20.3-6.7-4-1.8-8.1-3.6-12-5.6-3.7-1.9-7.3-3.9-11.1-5.6-1.4-.6-2.6-1.8-3.8-2.7-5.3-3.5-10.9-6.6-15.5-11.1-3.3-3.2-7-5.9-10.6-8.7-4-3.1-7.4-6.7-10.8-10.5-2.1-2.4-4.4-4.7-6.8-6.9-2.4-2.1-4-5-6.1-7.3-2.1-2.3-3.9-5-5.9-7.5-.1-.2-.4-.3-.5-.5-1.6-3.6-4.4-6.3-6.1-9.8-.4-.9-.9-1.6-1.6-2.4-1-1.1-1.8-2.3-2.3-3.8-1-2.6-2.5-5-3.6-7.6-1.1-2.7-2.6-5.2-3.6-8-.7-2.2-2.3-4-3.1-6.2-1.4-4-3.8-7.6-4.6-11.9-.2-1.2-.8-2.2-1.4-3.3-1.4-2.7-.9-5.9-2.1-8.6-2.1-4.5-2.3-9.6-4.3-14.1-1.2-2.7-1.2-5.8-.8-8.8.2-1.5.2-3 .1-4.5 0-1.3-.1-2.4-1.4-3.3-1-.6-1.1-2-1-3.1.4-3.2-.3-6.3-.6-9.4-.2-3.1-1.3-6.2-.8-9.3.2-.9.1-1.8-.4-2.6-.6-1.1-.2-2.3.1-3.4.4-2.1.4-4.1.4-6.2 0-1.6-.3-3.2.4-4.7.1-.3.2-.6.1-.9-.6-1.7-.5-2.9 1.7-2.4.1 0 .3-.1.4-.2-.1-.1-.2-.4-.2-.4-2.4-.1-1.7-2.1-1.4-3.2.8-3.6 1.2-7.3 1.4-11 .2-3.9.9-7.8 2-11.4 1.1-3.5 1.3-7.2 2.6-10.6.9-2.3.7-4.9 1.9-7.2.5-.9-.5-.9-1-.8-1.8.3-2.8 1.8-3.5 3.4-.4 1.2-.7 2.4-.9 3.7-.8 5-2.7 9.7-3.7 14.6-.3 1.2-.1 2.3-.2 3.4-.4 5-1.5 9.9-2 14.9 0 3.6-.4 6.6-.3 9.6.2 4.7.5 9.3-.1 14-.3 2.7.1 5.4.2 8.2 0 1.9-.1 3.8 0 5.6.2 3.2 1.2 6.2 1.5 9.3.2 1.6-.6 2.8-1 4.2-.1.4-.5.7-1 .6-.5-.1-.6-.6-.6-1 .2-7.1-1.4-14.1-.9-21.2.4-5.1 0-10.3.3-15.4.1-2.2-.2-4.5-.3-6.7-.4-8 1-15.9 2.2-23.7 1.1-7.4 3.2-14.5 4.7-21.8.5-2.2 1.8-4.3 2.3-6.6.9-3.7 2.7-7.1 3.9-10.7 1.5-4.2 3.4-8.2 5.3-12.2 2.4-5.1 5.1-10 7.9-14.8 2.3-3.9 4.3-7.9 7.4-11.2.9-.9 1-1.6-.5-2.2-2.4-1-3.7-3.2-4.3-5.7-.3-1.3.2-2.5 1.1-3.7 1.5-2.1 3.3-4 4.3-6.6.4-1 1-1.9 1.9-2.7 1.3-1.1 2.5-2.5 3.4-4.1 1.3-2.3 3.3-4.1 5.2-5.8 2.1-1.9 5.1-1 7.8 2 1.3 1.4 2.1 1.2 3.4-.3 3.7-4.2 7.3-8.5 11.7-11.9 3-2.4 5.7-5.2 8.5-7.9.8-.8 1.6-1.6 2.6-2 2.5-.9 4.5-2.9 6.7-4.3 3.8-2.3 7.9-4.1 11.2-7.2 2.9-2.7 6.5-3.6 9.4-5.9 1.1-.8 2.4-1 3.6-1.6.9-.5 1.9-.8 2.5-1.8.5-.9 1.5-.9 2.3-1 2.8-.2 5.3-1.3 7.6-2.9.4-.3.9-.6 1.4-.7 8.1-2.4 15.9-5.8 24.1-7.2 4.3-.7 8.5-2.2 13.1-2.1 5.1.1 10.2-.9 15.3-1.5 2.2-.2 4.4.4 6.6-.2 1.6-.4 2.3-1.6 2.7-2.9.4-1.1-.6-1.9-1.5-2.3-2.9-1.1-5.4-3.1-7.8-5.2-3.4-2.9-6-6.5-8-10.6-.4-.9-1.1-1.2-1.8-1.6-4.9-2.4-9.5-5.2-13.1-9.6-.6-.8-1.4-.6-2.2-.6-1.2.1-2-.3-1.6-1.9.3-1.1-.5-1.7-1-2.6-2.3-3.9-5.5-7.3-7.1-11.7-.7-1.9-2.1-3.3-2.9-5.2-.5-1.2-.8-2.4-1.2-3.6-1.1-3.5-1.2-7.5-2.1-11.3-.5-2.2-.4-4.5-.4-6.7 0-4.3.3-8.6.7-12.9.2-2.1.2-4.2 1.3-6.1.6-1.1.1-2.4.6-3.6 1.7-4 2.5-8.4 5.2-11.9 1.3-1.7 1.4-4.2 2.8-6.2 1.8-2.5 3.6-5 5.7-7.2 2.2-2.4 4.3-5 6.6-7.3 2.8-2.9 5.9-5.8 10.3-5.7.9 0 1.4-.3 1.2-1.5-.1-.7.2-1.4.9-1.5 1.9-.4 3.5-1.6 5.1-2.5 4.3-2.4 9-3 13.7-3.3 2.1-.1 4.1-.7 6.2-.8 3.7 0 7.3.6 11 1.4 3.3.7 6.6 1.8 9.9 2.4 1.9.4 3.7 1.5 5.5 2.4 3.2 1.5 6 3.8 9.2 5.3 1.4.6 2.5 1.9 3.5 3.2 3.4 4.3 7.3 8.2 10.7 12.5 2.8 3.5 4.6 7.9 7 11.8 1.6 2.6 2.5 5.4 2.7 8.5 0 1.1 1.1 1.8 1.3 2.9.8 3.6.9 7.3 1.1 11 .1 1.6.2 3 1.1 4.5.8 1.3.2 3.2-.1 4.8-.7 4.6-1.6 9.2-2.5 13.7-1.1 5.4-2 11-5 15.8-4.5 7.3-10.4 13.1-16.4 18.8-2.3 2.2-5.3 3.6-7.9 5.3-2.1 1.4-4.3 2.6-5.8 5-1.5 2.5-4.1 4-6.2 5.9-2.3 2.2-4.8 4-8 4.5-.6.1-1 .7-1 1.3v4.2c0 1 .7 1.1 1.4 1.1 6-.2 11.8 1.1 17.6 2.1 5.7 1 11.1 3.1 16.7 4.5 4.4 1.1 8.6 2.7 12.8 4.3 3.6 1.4 7.1 3.1 10.7 4.7 4.5 2.1 8.8 4.6 13.2 6.8 5.7 2.9 11.4 5.7 16.7 9.4 4 2.8 8.2 5.3 11.8 8.6 5.4 4.8 11.2 9 16.7 13.6 1.5 1.2 3 2.5 3.8 4.4.7 1.4 2 2.2 3.1 3.1 4.3 3.6 7.8 8.2 11.6 12.3 3 3.3 6.1 6.5 8.5 10.2 2.1 3.4 4.2 6.8 6.3 10.1.5.8 1.1 1.6 1.6 2.4 3.4 5.9 6.7 11.8 10.3 17.5 2.1 3.3 2.9 7.2 4.5 10.8 1.1 2.6 2.2 5.2 3.1 7.9 1.7 4.9 4.5 9.4 4.8 14.8.1 1.8 1.8 3.1 2 5 0 .4.3.7.3 1-.3 3.6 1.4 6.6 2.4 9.7.4 1.1.6 2.2.3 3.4-.2.9-.1 1.8.5 2.6.9 1.2.6 2.8 1.1 4.2 1.2 3.6 1.5 7.3 1.5 11.1 0 2 .7 4 .8 5.9.4 3.7 1.9 7.1 1.8 11-.2 4.8-.1 9.6-.1 14.4 0 2.6.1 5.2-.3 7.8-.3 1.7.1 3.5-.1 5.4-.3 2.2-.5 4.5-1.2 6.6-.5 1.5.2 3 0 4.5-.2 1.7-.3 3.4-.9 5-.8 2.4-1.1 4.8-1.4 7.3-.3 2.4-1.2 4.7-1.8 7-1 3.6-2.4 7-3.1 10.7-.8 3.8-1.9 7.6-3.4 11-2.4 5.7-3.9 11.7-6.4 17.4-1.4 3.4-2.2 7.1-4.7 10-1.3 1.5-1.9 3.8-2.7 5.8-.9 2.2-2.5 3.9-3.6 5.9-1.9 3.8-4.4 7.2-6.5 10.8-1.9 3.2-4.3 6.2-6.6 9.2-2.4 3.2-5 6.3-7.3 9.6-1.5 2.2-3.8 4-5.4 6.2-2.3 3.1-5.3 5.5-7.7 8.4-1.6 1.9-3.8 3.4-5.6 5.2-2.8 2.6-5.5 5.3-8.3 7.8-3.2 2.9-6.7 5.5-10.4 7.2-3 1.4-4.7 4.3-7.4 5.9-4.6 2.7-9.3 5.4-14.1 7.6-5.6 2.6-10.9 5.7-16.8 7.7-.8.3-1.5.9-2.2 1.4-.8.5-1.5 1-2.4 1.2-2.6.8-5.2 1.9-7.9 2.6-3.4.9-6.9 1.6-10.3 2.5-5.8 1.5-11.6 2.4-17.4 3.4-3.4.6-6.9.9-10.3 1.3-4.4.5-8.8.6-13.2.7-4.3 0-8.7-.8-13-.8-3 0-5.9-.9-8.9-.3-1.8.4-3.5-.8-5.3-1-2.5-.4-4.9.1-7.4-.5-4.8-1.2-9.6-2.2-14.5-2.9-2.8-.4-5.6-1.2-8.2-2.4-3.6-1.6-7.3-2.9-10.9-4.4-2.3-.9-4.6-2-6.9-2.9-2.6-1-5.1-2.1-7.5-3.4-4.7-2.6-9.4-4.9-13.7-8.3-1.5-1.2-3.6-1.7-5.2-2.9-2.5-1.8-4.8-4-7.6-5.5-3.9-2-7-5.2-10.5-7.7-2.7-2-5.1-4.6-7.6-6.9-5-4.7-9.9-9.5-14.4-14.7-3-3.4-5.5-7.2-8.4-10.8-3.3-4.1-6.8-8.2-9.8-12.5-2.1-3-4.9-5.5-6.2-9.1-.5-1.3-1.7-2-2.5-3.2-1.6-2.5-2.5-5.5-4.2-7.9-2.5-3.4-4.1-7.5-6.2-11.1-1.8-3.2-2.9-6.8-4.3-10.3-.4-1-.7-2-1.6-2.8-1.5-1.3-1.5-3.5-2.2-5.2-.8-2-1.5-4.1-2.2-6.2-1.5-4.4-3.4-8.7-2.8-13.6.2-2.2-.7-4.1-2.3-5.6-2.4-2.2-2.7-5.5-3.6-8.5-.8-2.4-.9-5.1-1.9-7.4-.7-1.6-.4-3.3-.2-5 .1-.5.3-.8.8-.8s.6.4.7.9c.1.5.1 1 .1 1.5.1 2.1.1 4.1 1.7 5.7.8.8 1.2 2.1 1.3 3.1.2 3.5 2 6.3 3.4 9.2 1.3 2.6 1.8 5.3 1.9 8 .1 3.6 1.9 6.5 2.6 9.7.7 3.1 2.7 5.6 3.3 8.7.4 1.8 1.8 3.2 2.5 4.9.7 1.8 1.3 3.7 2.1 5.5 1.1 2.4 2.1 4.7 3.8 6.7.9 1 1.2 2.4 1.7 3.6.9 2.3 2.4 4.3 3.7 6.3 1 1.6 1 3.6 2.3 4.9.6.7 1.2 1.5 1.9 2.1 2.8 2.2 4 5.8 6 8.7 1.8 2.7 4.1 4.9 5.7 7.7 2.3 3.8 5.5 6.8 8.3 10 1.8 2.1 3.4 4.5 5.5 6.2 2.6 2.1 5.1 4.2 7.5 6.6 1.3 1.3 2.9 2.4 4.1 3.7 5.4 5.7 11.9 9.8 17.8 14.8 1.6 1.3 3.7 1.9 5.5 2.9 2.1 1.2 4.3 2.3 6.2 3.8 2.6 2 5.3 3.5 8.2 4.8 3.6 1.6 6.8 3.9 10.4 5.3 2.4.9 4.9 1.6 7.3 2.6 2.8 1.1 5.6 2.1 8.4 3 3.7 1.2 7.4 2.4 11.1 3.2 5.5 1.2 11 2.4 16.5 3.5 4 .8 8 1.3 12 1 1.5-.1 2.9.6 4.4.7 8.1.4 16.3.5 24.4-.3 5.4-.6 10.7-1.3 16.1-1.8 1.8-.2 3.3-1.3 5.1-1.5 4.9-.6 9.6-2 14.3-3.4 4.5-1.3 9-2.7 13.3-4.7 4.8-2.3 9.8-3.7 14.4-6.4 5.5-3.2 11.3-5.8 16.5-9.5 2.8-1.9 5.7-3.5 8.5-5.5 2.7-1.9 5.1-4.2 7.5-6.5 1.3-1.3 2.7-2.4 4.2-3.3 3.7-2.4 6.5-5.7 9.5-8.9 1.4-1.5 3.1-2.6 4.5-4.1 1.9-2.1 3.6-4.4 5.6-6.3 3.1-3.1 5.7-6.6 8.1-10.3.7-1 1.3-2 2.2-2.8 3-3.1 5.1-6.9 8-10.1.8-.8.7-2 1.3-3 1.8-2.8 3.6-5.6 5.7-8.1 1.6-1.9 2.8-4.2 3.3-6.5.6-2.8 1.8-5.2 3.3-7.4 1.4-2.2 2.3-4.6 3.4-6.9 1.8-3.7 3-7.6 4.6-11.3 1.7-4.1 3.6-8.3 3.6-13.1 0-.8.3-1.7.7-2.4.9-1.7 1.5-3.5 1.2-5.5-.1-1 .8-1.5 1.1-2.4 1.3-5.6 2.5-11.2 3.1-17 .3-2.9.4-5.8.9-8.6.5-3.1.8-6.1.9-9.2.1-2-.4-4.1.5-6.1.5-1-.7-1.8-.4-2.9.3-1.2 0-2.5.7-3.6.2-.3.2-.8 0-1.1-1.8-2.8-.5-5.9-.6-8.8-.2-4.3-.6-8.5-1.4-12.6-.2-1-.1-2-.2-3.1 0-3 .1-6.1-1.3-9-.5-1-.9-2.1-.9-3.3 0-2-.7-3.9-1.3-5.7-.8-2.4-.3-5.1-1.2-7.5-.8-2.3-.9-4.9-2.3-7-1.3-2-1.6-4.4-2.1-6.7-1.1-4.9-3.1-9.5-4.8-14.1-1.2-3.3-2.4-6.6-3.9-9.7-.9-1.8-1.5-3.9-2.9-5.4-1.1-1.1-1.4-2.8-1.9-4.1-.9-2.4-2.5-4.2-3.6-6.4-2.1-4.2-5-8-6.8-12.3-.2-.4-.5-.8-.8-1.2-3.4-4.4-6.7-9-10.4-13.2-3.5-4-6.9-8-10.6-11.7-2.8-2.8-5.6-5.5-8.3-8.4-1.1-1.3-2.4-2.4-3.9-3.2-1.7-1-2.8-2.8-4.4-4-3.1-2.4-6.2-4.8-9.5-7-4.1-2.8-8-5.8-12.3-8.3-1.8-1.1-3.9-1.8-5.4-3.5-.7-.7-1.7-.5-2.5-1-5.2-3.2-10.9-5.6-16.3-8.2-3.6-1.8-7.5-2.9-11.3-4.1-8.1-2.5-16.1-5.6-24.4-7.3-6.5-1.4-13-3.1-19.7-3.2-7.3-.2-14.7-.4-22 .4-8.1.9-16.2 1.8-24.3 3.9-7.7 2-15.4 3.8-22.9 6.3-6.6 2.2-13 4.8-19.2 7.9-4.6 2.3-9.2 4.8-13.7 7.3-3.8 2-7.3 4.5-10.8 6.9-5.2 3.5-10.4 7.1-14.8 11.8-1.1 1.3-2.7 1.7-4 2.8-4 3.5-8 7.2-11.3 11.6-.9 1.2-2.2 1.5-3.2 2.6-2.9 3.3-5.5 6.9-8.5 10.2-4.2 4.5-7.8 9.7-10.8 15.4-1.3 2.5-2.9 4.9-4.7 7.1-1.6 1.9-2.7 4.1-3.6 6.4-1 2.6-2.7 4.7-3.9 7.2-1.3 2.5-2.4 5.1-3.5 7.6-.8 1.9-1.6 3.8-2.7 5.6-1 1.7-1.6 3.9-2 6.1-.6 3.2-1.4 6.5-3.4 9.2-.7.9-.5 1.4.6 1.6 2.1.3 2.9-.2 3.7-2.1.7-1.5 1.2-3 1.5-4.6.1-.5.4-1 .8-1.4.8-.9 1.3-1.9 1.1-3.2-.1-.3 0-.6.1-.9 1.5-3.1 2.7-6.3 4-9.4.8-2.1 2.3-4 3.3-6.1 1.9-3.8 4.1-7.4 5.7-11.3.9-2.1 2.2-4 3.8-5.8 1.5-1.7 2.7-3.8 3.8-5.8 2-3.8 4.5-7.1 7.5-10 .8-.7 1.4-1.6 2-2.5 2.4-3.6 4.9-7 8-9.9-.3-1.5.1-1.8.7-1.4.2 1.4.6 1.6 2 .9.5-.3 1-.6.8-1.2-.2-.7-.8-.5-1.3-.4-.5.1-1 .4-1.5.7zm326.2 120.5c0-.3.2-.7-.2-.9-.1 0-.2.1-.3.1-.1.5.3.6.5.8-.1.3-.2.6-.3 1-.2.6 0 1.1.6 1.3.4.2.8.1 1.1-.3.3-.5-.1-.9-.4-1.3-.3-.3-.6-.5-1-.7zm-98.5 193.4c.9-.9 2.2-.9 3.2-1.6.2-.1.4-.4.5-.7.1-.3-.2-.4-.4-.4-1.8-.5-3.4.8-3.3 2.7-1.6.2-3.1.7-4.4 1.6-.3.2-.7.3-.5.8.2.4.6.3.9.1.4-.2.8-.5 1.2-.6 1-.4 1.5-1.7 2.8-1.9zm67.2-255.3c-.3 1.1.3 1.4 1.1 1.6.2.1.5-.1.5-.3.1-1-.8-.8-1.3-1.1-.1-.1-.3-.1-.3-.2 0-1.3-.1-2.7-1-3.7-.7-.8-1.3-1.5-1.4-2.6 0-.4-.2-.8-.6-.7-.6.2-.3.7-.2 1 .3.8.9 1.6 1 2.5 0 1.8 1.1 2.6 2.2 3.5zM191.9 543.2c7.4.1 13.9-.8 20.3-1.5 2.5-.3 5-.3 7.5-.8 5-1.1 10-2.5 14.9-3.8 6.6-1.7 13-4.1 19.4-6.8 5.6-2.4 10.8-5.7 16.4-7.9 3.1-1.2 5.4-3.8 8.5-5.1 1.6-.7 3.1-1.5 4.5-2.6 3.6-2.8 7.3-5.4 10.9-8.1 2.1-1.6 4.4-3 6.3-4.9 2.2-2.2 4.5-4.5 6.9-6.5 5.6-4.8 10.6-10.2 15.2-16.1 2.5-3.2 5.2-6.3 7.6-9.7 3.1-4.3 5.9-8.8 8.8-13.2 3.9-5.9 7-12.2 10.1-18.5 2-4 3.8-8.1 5.3-12.4 1.5-4.5 3.4-8.9 5-13.5 1.5-4.2 2.5-8.5 3.5-12.8 2-8.3 3.7-16.6 4.6-25.1.1-1.4.3-2.8.3-4.2 0-3.9.6-7.8.6-11.8 0-3 .1-6.1.2-9.2.3-7.1-.7-14.1-1.2-21.2-.1-1.3.2-2.8-.4-4.1-.6-1.2-.7-2.5-.8-3.9-.2-2.2 0-4.7-.9-6.6-1.1-2.4-1-4.9-1.5-7.3-.8-3.8-1.7-7.7-2.9-11.4-.9-2.7-1.6-5.4-2.5-8.1-.4-1.3-.4-3.3-1.9-3.6-2.2-.4-2.7-2.2-3.1-3.8-.9-3.1-2.3-6-3.6-9-.6-1.4-1.6-2.5-2.1-3.9-1.5-4.2-2.8-8.5-6-11.8-.2-.2-.4-.5-.4-.8-.2-2.2-1.6-3.7-2.4-5.6-2.2-4.9-6-8.7-8.4-13.4-1.4-2.7-3.6-4.8-5.3-7.3-2.9-4.1-6.1-7.8-9.6-11.3-2-2-3.9-4-5.9-6-1.6-1.6-3.1-3.3-4.9-4.7-1.2-.9-2.2-1.9-3.2-3-1.2-1.3-2.4-2.6-3.9-3.6-2.9-2-5.4-4.7-8.5-6.6-2.2-1.4-4.3-3-6.4-4.4-3.9-2.6-7.9-4.9-11.8-7.5-3-2-6.3-3.4-9.4-4.9-4.1-2-8.4-3.5-12.5-5.4-4-1.8-8.3-3.1-12.4-4.6-3.8-1.4-7.9-2.2-11.9-3.2-4.8-1.2-9.5-2.3-14.4-2.8-4.1-.4-8.2-1.3-12.3-1.6-3.8-.3-7.6-.3-11.4-.4-5.4-.1-10.8.7-16.2 1.3-5.5.6-11 1.6-16.4 3-4.3 1.1-8.6 2.2-12.9 3.2-.7.2-1.9-.2-2 .8 0 .8 1.1.5 1.7.7.4.1.9.1 1 .6.1.7-.5.7-.9.8-2.9 1-5.9 1.9-8.7 3.1-2 .8-3.7 2.1-5.8 2.7-4.8 1.4-9.2 3.8-13.7 6.1-2.1 1-3.9 2.6-6 3.4-2.8 1.1-5.3 2.9-7.7 4.6-3.9 2.7-7.7 5.6-12.6 5.7-.6 0-1.1.4-1.6.7-1.9 1.1-4 1.7-5.9 2.6-3.4 1.5-7.2 2.9-7.8 7.7 0 .2-.1.6-.2.7-2.4 1.2-2.6 5.1-5.7 5.5-.3 0-.7.5-.9.8-1 2.3-2.8 3.8-4.5 5.4-.8.7-1.5 1.5-2.6.6-.4-.3-1 0-1.5.2-.3.1-.6.4-.5.9 0 .5.4.5.8.5.3 0 .6-.1.9 0 .3 0 .7.1.8.2.2.4-.2.7-.4.8-1.2.7-2 1.9-2.6 3.1-.5 1-1.1 1.7-2.2 2.1-.7.3-1.3.8-1.5 1.7 0 .1.2.4.3.4.8-.1 1.6-.1 2.3-.7.3-.2.4-.6.6-.9 1.6-2.2 3.3-4.3 5.2-6.2 1.8-1.8 3.9-3.1 5.1-5.5.8-1.5 2.2-2.6 3.4-3.8.5-.5 1.3-.5 1.7 0 .5.6 0 1.2-.4 1.6-1.4 1.3-2.6 2.9-4 4.2-4.7 4.4-8.7 9.4-12.7 14.5-3.7 4.8-7 10-10.5 15-.6.9-1.3 1.4-2.3 1.3-1.3-.2-2.3.6-2.6 1.6-.8 2.5-2.3 4.4-3.4 6.7-1.1 2.4-2.6 4.5-3.7 6.9-.5 1.1-1.6 1.8-1.7 3.3-.1 1.4-.7 2.5-1.4 3.7-1.5 2.6-3.1 5.1-3.6 8.2-.4 2.6-2.2 4.6-3.1 7-1.8 4.5-2.4 9.5-4.2 14-1.1 2.7-.7 5.8-1.9 8.4-.4.9-.7 1.8-.9 2.8-1.6 7.6-2.4 15.4-3.5 23.1-.7 4.7-.3 9.6-.6 14.4-.3 4.9.7 9.8.4 14.8-.2 4.5.6 8.9 1.2 13.2.6 3.8 1.5 7.6 1.8 11.4.2 2.3 0 4.7 1.5 6.8.3.4.4 1 .5 1.5.3 2.5 1 4.9 1.7 7.2.5 1.7.6 3.6 1.4 5.2 1.3 2.8 2.6 5.7 2.9 8.9.1.7.2 1.5.6 2.1 3 3.9 3.4 9.2 5.9 13.4 1.5 2.6 1.9 5.9 3.6 8.5 1 1.4 1.4 3.2 1.4 5 0 1 .4 2 .7 3 1.2 3.2 3.4 5.7 5.2 8.5 1.3 2.1 2.2 4.4 3.8 6.3 1.8 2.2 3.5 4.6 5.3 6.9 2.9 3.8 5.8 7.6 8.9 11.3 2.2 2.6 4.6 5.1 7.1 7.5 1.9 1.9 3.5 4.1 5.7 5.7 2.2 1.7 4.2 3.6 6 5.6 2.3 2.5 5.1 4.5 7.7 6.5 3.1 2.4 6.1 5 9.4 7.2 4.4 3 8.9 5.7 13.6 8.3 1.8 1 3.7 1.7 5.5 2.8 3.3 1.9 6.7 3.5 10.1 5.2 3 1.4 6.1 2.3 9.1 3.5 4.6 1.8 9.4 3.3 14.2 4.4 3.7.8 7.3 1.8 11 2.5 4.3.9 8.7 2.2 13 2.5 7.9.5 16.1 2.5 23.4 1.1zm6.5-528.7c-4.1.3-7.5.3-10.9 1.2-4.6 1.2-9.3 2.1-13.3 5.2-4.3 3.4-9.2 5.8-12.5 10.5-2.6 3.7-5.5 7.1-7.4 11.3-.4.8-1 1.2-1.3 2.1-1.3 4.3-2.6 8.6-3.3 13.1-.7 4.5-.6 9-.8 13.4-.2 3.2 1.4 6 1.4 9.1 0 2.5 1 4.8 2 6.9 2.8 6.2 6.6 11.8 11.2 16.7 1.1 1.2 2.6 2.3 4.1 1.7 1.3-.5 1.6-2.4 1.6-4 0-2.9 2.3-4.5 3.3-6.8.1-.2.4-.3.6-.3 1.5-.2 2.5-1.2 3.4-2.3 1-1.1 2.2-1.9 3.4-2.7 2.2-1.5 4.5-2.5 6.9-3.4 3.7-1.4 7.6-1.5 11.4-1.2 2 .1 3.9 1.5 5.7 1.6 2.9.1 5.2 1.4 7.8 2.2.6.2 1.2.4 1.6.9 2.4 2.7 5.9 3.4 8.3.8 2-2.2 5.4-1.3 6.7-4.3 0-.1.2-.1.3-.1 2.2-.8 4.4-1 6.6-.4 3.4.9 3.3.8 5.1-2 1.6-2.4 1.5-5.3 2.5-7.9.6-1.8.2-3.8.4-5.8.2-1.8.5-3.6.4-5.5-.1-3.8-.7-7.3-1.9-10.8-.3-.8-.5-1.3-1.3-1.5-1.6-.3-1.6-1.4-.8-2.5.5-.8.6-1.5.3-2.4-.8-2.2-2-4.2-2.7-6.5-1.2-3.6-3.4-6.7-6-9.5-4.4-4.6-8.7-9.3-14.6-11.9-6.2-2.3-12.3-4.4-18.2-4.9zM137.7 68c0 3-.1 6.1.5 9.1.5 2.7.5 5.5 1.5 8 1 2.4 1.8 4.8 2.5 7.2.2.7.4 1.3.8 1.8s1 1.2 1.6.7c.7-.5.2-1.2 0-1.8-.1-.2-.2-.4-.4-.6-.8-.7-.7-1.3-.1-2.2.7-1.1.7-2.2.6-3.6-.2-1.8-.7-3.5-1-5.2-.2-1.2-.4-2.4-1.2-3.4-.7-.9-.8-1.7-.6-2.7.4-1.6.2-3-.6-4.4-.6-1.1-.7-2.1.2-3.2.7-.8.9-1.7-.1-2.7-.9-.8-1-1.9-.2-3.1.7-1 1.4-2 1.5-3.4.5-4 .2-8.3 3.2-11.4.2-.2.2-.7.4-1 1.1-3.2 2.1-6.4 4.4-8.9.3-.3.5-.7.6-1.1.9-2.4 2.4-4.2 3.9-6.1 2.1-2.7 4.7-5 6.9-7.6.9-1.1 1.9-2 3.2-2.6 2.9-1.4 5.2-3.9 7.9-5.6 1.7-1.1 3.2-2.4 5.2-2.9 2.1-.5 4.2-.8 6.3-1.6 5.3-2 10.7-3 16.1-.8.5.2 1.6.1 1.4.9-.1.8-1.1 1-1.9 1-.5 0-1-.3-1.5-.4-.9-.4-1.8-.7-2.8-.5-3.7.6-7.4.8-11 2.2-1.5.6-3.2.9-4.9.7-1.8-.2-3.3.8-4.9 1.3-.7.2-1.3 1-.2 1.6 1.2.6 2.5 1.2 4 .6 2.2-.9 4.7-1.1 6.8-2.3 1.2-.6 2.5-1.2 3.8-1.5 3.4-.7 6.9-.9 10.3-.5 1.4.2 2.8.2 4.2-.5.5-.3 1.4-.7 1.8.2.5 1 1.3 1 2.1 1.3.7.2 1.7.2 2.1.7 1.4 1.6 3.3 2.2 5 2.9 5.4 2.4 10.2 5.7 14.2 10.1.8.9 1.4 2 2.4 2.5 3 1.6 4.8 4.5 6.1 7.4 1.6 3.6 3.6 6.9 4.9 10.7 1.3 3.7 2.3 7.5 2.9 11.4.1.9.6 1.3 1.4 1.2.8-.1 1.5-.5 1.3-1.5-.3-1.5-.4-3.3-1.1-4.5-1.1-1.8-1.3-3.6-1.6-5.6-.2-1.6-1.2-3-1.6-4.6-1.2-4.3-3.5-8-5.8-11.7-1.6-2.6-4-4.4-5.8-6.9-1.6-2.2-3.7-4-5.9-5.5-1.6-1.1-2.8-2.4-3.9-4-.7-1.1-1.4-2.2-2.8-2.5-3.8-.8-7-3.5-10.8-4.5-1.3-.3-2.8-.8-2.5-3 .1-.6-.7-.7-1.2-.6-2.4.1-4.8-.1-7.2-.3-1.1-.1-2.2-.6-3.4-.4-2.6.4-5.1 1-7.8.4-.3-.1-.6 0-.8.1-2.8 1.5-5.9 2.1-9 2.6-2.6.3-4.7 2.1-7.1 2.9-3.9 1.3-6.5 4.3-9.8 6.4-2.8 1.8-4.7 4.8-7.2 7.2-5.4 5.3-8.1 12.3-11.3 19.1-1.9 4.2-2 9-3.4 13.4-1 3.9-.6 7.8-.6 11.6zm57.9 51.3c2.5.2 4.7-.2 6.3-2.4.2-.3.6-.4.8-.6 2.7-1.8 3.6-5.8 1.9-8.6-.3-.5-1.3-1-.2-1.7.9-.6 1.5-.3 2 .6 1.1 1.8 1.3 3.9.9 5.9-.5 2.5-1.9 4.4-3.7 6-.5.4-1.5 1-.8 1.9.5.7 1.5.7 2 .2 1.4-1.4 2.1-3.6 3.7-4.9v-.2c-.3-1.4.4-2.3 1.1-3.3.5-.7 1-1.5.7-2.3-.9-2.5-1.6-5.1-4-6.5-1-.6-1.9-.8-2.8.1-.5.5-1.1.7-1.8 1-.5.1-1.3 0-1.3.6-.1.8.7 1 1.3 1.2.6.2 1.1.5 1.1 1.2-.1 2.8-.2 5.7-3 7.3-.4.3-.9.6-1.3.9-2.4 1.7-6.2 1.7-8.5-.2-.8-.6-1.7-1.2-2.5-1.8-.6-.4-1.4-.8-1-1.7.4-1 1.3-.8 2.1-.5 1.4.6 2.7 1.2 4 2 2.9 1.8 4.3 1 7-1.7 1.2-1.2 1.5-2.6 1-4.2-.5-1.5-1.8-1.2-2.9-1.2-.5 0-1 0-1.1-.6-.1-.5.2-.9.5-1.3.6-.6 1.4-1.1 2.2-1.3.7-.2 1.4-.4 2.1-.7.4-.2 1-.4.8-1-.2-.6-.8-.4-1.2-.3-2.2.5-4.6.2-6.6 1.4-.4.2-.9.1-1.3.1-1.3 0-2.4-.9-2.5-2-.1-1 1.3-1.1 2.2-1.2 3.4-.6 6.8-.1 10.2.1 1.7.1 3.4.6 4.7 1.9.8.8 1.9.7 2.9.4.3-.1.7-.1.8-.5.1-.6-.4-.7-.7-.9-.8-.5-2.1-.2-2.7-1.1-1.4-2.1-3.2-2.5-5.4-2-.4.1-.9.1-1.4 0-2.9-.8-5.8-.2-8.6.3-1.1.2-2.2.2-3.2-.2-.5-.2-1.1-.3-1-1 .1-.6.7-.5 1.2-.5 2.3-.1 4.5-.9 6.8-.8.5 0 1.1-.3 1.1-.9 0-.6-.5-.7-.9-.9-1.5-.4-2.8-.3-4.3.3-2 .8-4.1 1.6-6.4 1.6-4.8 0-8.3 2.6-10.3 7.2-.2.4-.4.9-.7 1.2-.3.5-1.1.8-.5 1.6.6.8 1.3.5 2 .1.5-.3 1-1 1.6-.3.6.6 0 1.2-.2 1.8-1.2 3.9-1.2 7.8.2 11.6.5 1.3 1.3 1.8 2.6 1.3 1.1-.5 2-.1 2.7.8.4.5.8.9 1.3 1.2 3.3 2.1 7 3.2 10.8 2.6 2.1-.3 4.2.1 6.2-1 .5-.3 1.1-.5 1-1.3-.1-.6-.6-1-1.2-1.2-1-.3-1.9-.1-2.9.1-4.9 1.5-9.3.8-13.1-3.1-1.1-1.1-2.2-2.2-3.4-3.3-.4-.3-.9-.7-1.4-.1-.4.5-.2 1 .3 1.4.4.3.6.6.2 1-.4.4-.9.3-1.3 0-.3-.2-1.8-5.3-1.6-5.6 0-.1.1-.1.1-.1 1.1-.7 2.3-.5 3.5-.5.7 0 1.2.3 1.3 1.1.2 1.4 1.2 2.3 2 3.3 2.9 3.5 6.7 3.8 10.5 4.2zm139.5 373.3c1 .2 1.7.1 2.4-.1.4-.1 1-.3.9-.9-.1-.7-.6-.6-1.1-.5-.6.1-1.1.2-1.7.1-.6 0-1.5.6-1.6-.3-.1-.8.7-1.4 1.3-1.9.2-.2.7.1 1 0 .5 0 .9 0 1.3-.2.7-.3 1-1.1.7-1.8-.3-.9-.9-.4-1.4-.2-.5.2-1 .6-1.4.1-1-1.3-2.1-.9-3.2-.3-.4.2-.8.4-1.1 0-.3-.4 0-.8.3-1.1 1.1-1.5 2-3.2 3.3-4.4 2.3-2.1 3.8-4.9 5.5-7.4 2.4-3.5 4.5-7.3 6.8-10.9.2-.3.5-.6.3-1-.2-.5-.7-.3-1-.3-.7 0-1.2.3-1.6 1.1-1.9 4.5-4.8 8.3-7.8 12-.9 1.1-2 2.2-2.8 3.5-1.9 3.1-4.3 5.8-6.6 8.5-2.2 2.5-4.4 5-6.8 7.4-2.6 2.7-5 5.7-7.8 8.1-3.5 3.1-7.1 6-10.8 8.8-1.4 1.1-2.2 2.8-3.7 3.7-3.3 1.8-6.3 4.1-9.6 5.8-.4.2-.9.3-.8.8.1.5.7.6 1.1.6.3 0 .7-.1 1-.3 2.6-2.1 5.8-3 8.3-5.3 2.2-2.1 4.5-4.2 7.2-5.4.8-.3 1.4-1 2-1.6 1.2-1.2 2.3-2.6 3.6-3.6 3.4-2.5 6.8-5 9.4-8.5 1.5-2 3.5-3.5 5-5.6 1.6-2.5 4.3-3.8 7.3-3.6.5 0 1 0 1.2.5.2.5-.4.7-.7.8-1.9.3-1.3 1.9-1.2 3 .2 1.2 1.3.4 2 .5.3 0 .7-.1.8-.1zm-99-399.9c-.6-1.4.4-1.5 1.2-1.7.5-.1 1.1-.4 1-1-.1-.8-.8-.7-1.4-.6-1.2.4-2.3.6-3.5.5-1 0-2-.1-3-.3-.6-.1-1.2 0-1.5.6-.3.6.4.8.7 1 .3.2.6.4.4.9-.1.5-.5.8-.9.7-2.3-.3-4.4 1.1-6.7 1.2-2.8.2-2.9.5-2.4 3.4.2 1.1.6 2 1 3.1.6 1.7 1.8 2.9 2.2 4.7.5 2.3 2 2.8 3.4.9 1.6-2.1 3.7-3.6 5.1-5.9.5-.8 1.4-1.5 1-2.3-.3-.7-1.3-.2-2-.3-.5-.1-1.3.1-1.3-.7 0-.8.8-.9 1.3-1 1.5-.3 2.9-.9 4.4-1.6.7-.2 1.2-.6 1-1.6zm-13.3 20.9c-.3-1.4-.5-2.4-.7-3.5-.6-3.7-1.1-7.4-3.6-10.3-.3-.3-.3-.9-.9-.6-.4.2-.5.7-.3 1.1.4 1.6 1 3.2 2 4.5.8 1.1 1.6 2 1 3.5-.2.5-.1 1.1-.1 1.6.2 5.1 0 10-3.3 14.3-.9 1.2-1.3 2.9-2.5 4-1 1-2.1 1.9-3.1 2.9-.3.3-.8.8-.5 1.2.3.4.8.3 1.3.2 1.1-.3 2-1.1 2.8-1.9 2.6-2.4 4.1-5.6 5.5-8.8 1.3-2.6 1.3-5.7 2.4-8.2zm-49.6 4.8c-.1 1.2-.1 2.4.6 3.3.9 1.2 1.3 2.7 1.9 4.1 1.7 3.5 4.9 4.7 8.1 5.9h.3c.5 0 1 0 1.2-.6.1-.6-.5-.9-.9-1.2-2.9-1.8-5.7-3.5-7.3-7.1-2.1-4.6-2.4-9.3-2.2-14.1 0-.7.5-1.7-.5-1.8-.8-.1-1.2.7-1.3 1.7-.2 3.3-1 6.5.1 9.8zm23.9-28.8s0-.1 0 0c1.3-.1 2.6-.1 3.9-.1.4 0 .8-.2.9-.7.1-.6-.4-.7-.8-.7-2.3 0-4.7-.8-6.9.1-2.1.8-4.2 1.3-6.4 1.6-2.2.3-3.8 1.8-5.8 2.5-2.4.9-4.4 2.6-6.4 4.1-.3.2-.6.5-.5.9.2.5.7.3 1 .3 1.1 0 1.8-1 2.6-1.6 2.5-1.8 4.8-4 8.3-3.2 1.1.3 2.4-.1 3.6-.3.7-.1 1.7-.5 1.7-1.2 0-1.9 1.1-1.7 2.2-1.7h2.6zm48.6-13.8c.1.6-.1 1.2-.2 1.8-.9 3.3-2.6 6.3-2.8 9.9 0 .4-.4.9-.7 1.2-.9.9-1.2 2.1-1.9 3-.2.3-.4.7-.2 1.2.3.5.8.5 1.2.4 1.6-.1 3-1.9 3-3.8 0-.5-.3-1.1.1-1.6 1.4-1.9 1.6-4.3 2.1-6.5.7-2.6 1.4-3.2 3.9-3.5.5-.1 1-.1 1-.7s-.6-.7-1.1-.6c-.2 0-.4.2-.6.2-2 .5-2.2.4-1.8-1.8.1-.7-.2-.9-.7-.9-1.2-.2-1.5.6-1.3 1.7zm-54.2 70.9c.8 0 1.6-.1 2.4-.4.8-.3 1.2-.9 1.1-1.8-.2-1.4-.6-2.7 0-4.1.1-.1-.1-.5-.2-.6-1.2-1.2-3.9-.3-4.4 1.4-.2.7-.4 1.6-1.2 1.5-1-.2-.9-1.1-.6-1.9.1-.4.3-.7-.1-1-.4-.2-.8-.1-1.1.2-.4.4-.6 1-.5 1.6.1 1 .2 1.9.2 2.9s.5 1.4 1.3 1.6c.8.3 2 .4 3.1.6zm61 400.6c.4-.1 1-.2 1.5-.4 5.8-2 11.6-4.2 17.2-7 1-.5 2-.9 3-1.4.3-.2.7-.5.6-1-.2-.5-.5-.5-1-.4-1.4.3-3 .6-4.2 1.4-3.5 2.4-7.5 3.8-11.4 5-2 .6-4 1.5-5.9 2.2-.5.2-1.1.4-1 1 0 .8.6.5 1.2.6zM37.2 223.9c1.8 0 4.5-3 4.6-4.8.1-1.2-1.1-1.3-1.4-2.2-.5-1.6-1.8-1.2-2.4-.4-1.3 1.7-2.7 3.3-4.1 4.9-.6.7-.4 1.4.4 1.7 1 .4 2 .6 2.9.8zm230.9 312.9c-.1-.6-.5-.6-.9-.5-.6.2-1.1.5-1.7.8-3.5 1.5-6.9 3.4-10.6 4.5-3.7 1.2-7.4 2.6-11.2 3.6-.7.2-1.3.4-1.9.7-.5.2-1.1.4-.8 1.1.2.5.8.5 1.2.2 1.9-1.4 4.2-1.3 6.3-2 3.1-1.1 6.2-2.2 9.2-3.5 3-1.3 6.2-2.1 9.1-3.7.5-.4 1.2-.5 1.3-1.2zM114.6 176c1-.1 1.9-.4 2.8-.8 2.3-1 4.3-2.4 6.7-3.1 2.2-.7 4.2-2.1 6.5-2.7.5-.2 1.5-.6 1.3-1.2-.2-.7-1.1-.5-1.8-.3-.2.1-.4.2-.6.2-1.4.5-2.8 1-4.1 1.6-3.6 1.6-7.2 3.2-10.9 4.8-.4.2-.9.5-.9 1 0 .6.6.4 1 .5zm213.5 327.3c-.1-.5-.4-.6-.8-.5-.8.3-1.6.6-2.1 1.4-.5.7-1 1.5-1.6 2.1-3.6 3.3-7.2 6.6-10.8 10-.4.4-1.2.7-.7 1.4.4.6 1.2.5 1.7 0 1.9-2.3 4.4-3.8 6.3-6 1.2-1.4 2.4-2.5 4-3.3.6-.3 1.3-.6 1.3-1.5 0-1 .5-1.3 1.2-1.8.6-.5 1.2-1.1 1.5-1.8zM239.8 551c3.4.1 6.2-2.3 9.6-2.5.3 0 .5-.5.4-.9-.1-.4-.4-.4-.7-.4-1.3.1-2.8 0-3.8.8-2 1.6-4.1 1.8-6.4 1.7-1 0-2.1 0-2.9.9-.6.7-1.3.8-2 .7-1.5-.2-3.1.2-4.6.3-.9.1-1.8.3-2.6.9-.3.2-.5.5-.4.9.1.5.5.4.8.3.9-.2 1.9-.5 2.8-.7 3.4-.6 6.6-1.3 9.8-2zm23.1-3.7c.5.1 1.4-.1 1.9-.5 2.3-2.1 5.4-2 7.9-3.8 2.1-1.5 4.8-2.5 7.2-3.7.5-.3 1.6-.2 1.4-1-.3-.8-1.3-.5-2-.3-.3.1-.5.2-.8.4-2.5 1.4-5 2.8-7.6 4-2.8 1.3-5.6 2.3-8.4 3.4-.4.2-1 .3-.9.9.1.8.6.6 1.3.6zM48 230.8c-.3 0-.7.2-.9-.2-.2-.4.3-.6.5-.8.4-.4.9-.7 1.4-1.1.4-.3.9-.7.7-1.3-.2-.6-.8-.3-1.2-.2-1 .2-1.8.7-2.4 1.6-1.6 2.4-3.3 4.8-4.9 7.2-.3.4-1 .7-.3 1.3.5.5 1.2.1 1.5-.3 1-1.2 2-2.4 2.8-3.6.8-1.1 1.2-2.5 3-1.4.5.3 1.2-.2 1.6-.7.2-.2.2-.5 0-.7-.5-.4-1 .1-1.5.1-.1 0-.2.1-.3.1zm144.9-75.4h2.6c.5 0 1.3.2 1.3-.4.1-.6-.8-.5-1.2-.7h-.3c-4.2-.5-8.5.1-12.7-.4-1.1-.1-2 .9-3.1.5-1.6-.5-3.1.3-4.7.7-.2.1-.6.4-.6.5 0 .5.5.5.8.5 1.6-.2 3.3-.2 4.9-.6 2.5-.5 5-.5 7.4-.7 1.7 0 3.7.7 5.6.6zm192.5 236.9c-.1-1-.1-1.9-1.2-1.8-1.3.1-2.6.2-3.9.2-.9 0-1.2.8-1.3 1.6 0 .7.5 1 1 .9 1.7-.3 2.1.4 1.7 2.1-.1.5-.1 1.1.4 1.5.6.4.9-.2 1.4-.4 1.6-1 1.3-2.9 1.9-4.1zm-13 43.3c-.1-.3-.1-.5-.2-.7-.2-.2-.4-.1-.6.1-1 1.3-2.3 2.6-2.4 4.3-.1 1.4-.7 2.2-1.4 3.1-.4.5-.8.9-.9 1.6-.2 1.6-.9 3-2 4.2-.3.4-1.1.8-.4 1.5.5.5 1 .2 1.5-.2.6-.5 1.1-1 1.2-1.9.1-.7.3-1.4.7-2 1.7-2.2 2.1-5 3.5-7.4.4-.9.7-1.8 1-2.6zm-32.2 54.2c.9-.2 1.8-.4 2-1.6.1-.4.2-.8.6-1.1 2-2 3.2-4.6 4.9-6.8.2-.3.5-.8.1-1.1-.4-.3-.8 0-1.1.3-1.8 1.4-3.3 3.3-4.9 5-.3.3-.5.9-.4 1.2.5 1.4-.1 1.8-1.3 2.1-.7.2-.8 1-.8 1.6 0 .4.5.4.9.4zM100 184.3c.3-.1.7-.2 1.1-.5 3.4-2 6.8-4.1 10.4-5.7.4-.2.8-.7 1.1-1.1.2-.3.4-.6.1-1-.2-.3-.5-.2-.8-.1-.3.1-.7.2-1 .4-3.9 2.1-7.5 4.8-11.5 6.6-.4.2-.8.4-.6.9.2.6.7.4 1.2.5zm138-82c-.5.2-.9.2-1.2-.3-.3-.6 0-1 .4-1.4.7-.9 1.5-1.8 2.2-2.7.2-.3.5-.5.4-.9-.2-.5-.7-.4-1.1-.3-1.1.2-1.7 1.1-2.4 1.9-1 1.2-1.4 2.8-2.7 3.8-.4.3-1.3.5-1.1 1.2.3.8 1.2.4 1.8.3.4 0 .9-.3 1.3-.4.7-.3 1.3-.4 1.7.6.3.9 1 .6 1.6.4.4-.1.8-.4.5-.9-.2-.8-.5-1.6-1.4-1.3zm49.1 428.9c.8.1 1.6-.2 2.2-.7 1.8-1.6 3.8-2.8 6-3.8 1.2-.5 2.4-1.2 3.3-2.2.2-.2.5-.4.3-.7-.1-.1-.4-.3-.6-.2-2 .9-4.3 1.3-6 2.8-1.7 1.5-3.4 2.5-5.5 3.1-.5.1-1.3.3-1.2 1 .1.9.9.6 1.5.7zM248.4 67.4c.1-1.2 0-2.3.1-3.5 0-.9-.2-1.4-1.1-1.4-.9 0-1.4.5-1.3 1.5.2 2.1 0 4.2-.5 6.3-.2.9-.3 1.8.9 1.9.9.1 1.8 0 1.7-1.5 0-1.1.1-2.2.2-3.3zM154 109.6c-.3.1-.8-.1-1.1.4-.1.3 0 .6.2.6 1.9 0 2.3 1.9 3.3 3 1.4 1.7 3.4 2.7 5.1 4 .9.7 1.7 1.4 2.9 1.5.3 0 .7 0 .9-.4.2-.3-.1-.6-.3-.7-2.4-1.3-4.4-3.2-6.7-4.5-1.2-.6-2.1-1.6-2.4-2.7-.5-1.1-1-1.2-1.9-1.2zm23.6 21.7c-.2-.2-.4-.5-.6-.8-.9-1-1.7-2.1-2.4-3.3-.7-1.4-1.7-2.7-2.6-4-.5-.7-1.2-.9-1.8-.4-.8.8.5.6.6 1.1.1.3.3.7.4 1 .9 2.3 2 4.5 3.6 6.3.6.7 1.2.9 1.9.9.5.1.8-.2.9-.8zm14.4 4.4c1.1-.3 2.3-.5 3.5-.8.8-.2 1.5-.4 1.3-1.5-.1-1-.7-1.5-1.6-1.5-1.1 0-2.3.2-3.4.3-1.2.1-1.9.6-1.8 2 0 1.7 1.2 1.3 2 1.5zm183.2 267.1c.1-.9-.2-1.4-.8-1.6-.5-.2-.9.1-1.1.6-1.2 2.4-1.5 5.2-3 7.5-.2.3-.1 1.1.3.8.9-.6 2.4-.6 2.8-1.5.8-1.9 1.3-4 1.8-5.8zm-.4-8.3c.1.5 0 .9-.3 1.3-.5.6-.9 1.3-1.5 1.7-.8.6-.7 1.3-.6 2.1 0 .3.2.6.5.6.7 0 .8-.7 1.2-1.2.5-.6.9-1.4 1.5-1.7.9-.5 1.1-1.2 1.2-2 .2-1.1.2-2.3 1.3-3 .2-.1.4-.5.2-.8-.2-.3-.5-.3-.7-.3-1.9-.1-2.9 1.3-2.8 3.3zm-34.7 90.3c.3.1.8.1.8-.4.1-.6-.4-.8-.9-.8-.7-.1-1.5-.2-1.5-1.1 0-1 .6-1.5 1.4-1.8.2-.1.4-.1.7-.2.8-.3.7-1.2.9-1.8.1-.3-.1-.6-.4-.7-.8-.2-1.1.3-1.5.9-.4.7-1 1.2-1.6 1.6-.8.6-1.6 1.3-2.3 2.1-.6.7-.7 1.4.5 1.6 1.1.2 2.4.4 3.9.6zM218.4 108.1c-.1-.5-.1-1.1-.3-1.7-.4-1.9-2.1-3.1-2.3-5.1 0-.3-.4-.5-.8-.4-.4.2-.7.4-.7.9 0 .7.2 1.3.6 1.8 1.4 1.7 1.8 3.6 1 5.7-.5 1.4.3 1.5 1.2 1.3 1.3-.1 1-1.4 1.3-2.5zm-59 3.5c.5-.1 1.4.2 1.5-.7.1-.9-.8-1-1.3-1.1-1.2-.2-1.8-1.2-2.4-2.1-.8-1.1-1.5-2.5-2.7-3.2-.5-.3-1.1-.5-1.5.1-.4.6.2.9.5 1.3 1.2 1.3 2.6 2.4 3.4 3.9.6 1.4 1.3 1.7 2.5 1.8zm58.8 444.9c.5-.1 1.1-.1 1.3-.3 1.1-1.5 2.6-1.8 4.2-2 .4-.1.8-.2.9-.6.1-.4-.3-.7-.6-.7-1.5-.1-3.2-.4-4.2.8-1.2 1.4-2.2 1.2-3.4.5-1-.6-2.1-.5-3.1 0-.2.1-.4.3-.4.5s.3.5.4.4c1.8-.2 3.3 1 4.9 1.4zm-31.9-428.8c.6-.1 1.5.2 1.6-.8.1-.8-.7-.8-1.2-1-.5-.2-.9-.5-1.3-.8-1.2-.9-2.5-1.6-3.5-2.8-.4-.5-1.1-.4-1.6 0-.3.3-.2.7-.1 1 .5 1.3 4.7 4.4 6.1 4.4zm192 258.2c-.1-.9-.1-1.6-.2-2.3-.1-.9-.7-1.5-1.6-1.3-.9.2-.8 1.1-.5 1.8.6 1.4.4 2.6-.8 3.6-.4.3-.6.7-.2 1.2.8.9 2.6.4 2.9-.8.2-.7.3-1.5.4-2.2zM360 446.5c0-.7-.3-.8-.9-.6-.8.4-1.4.9-1.9 1.7-.9 1.5-1.7 3.2-3.5 3.7-.3.1-.7.3-.6.8.1.6.6.4 1 .4.6-.1 1.2-.6 1.6-.2 1.3 1.3 1.3 0 1.5-.8.4-1.4.9-2.6 2-3.5.4-.3.7-.8.8-1.5zm-10.3 29.9c1-.2 2.4-.7 2.3-1.9 0-1.8 1-2.4 2.1-3.2.3-.2.6-.6.8-.9.2-.3.3-.7 0-1-.3-.3-.6-.4-.9-.2-.9.5-2.1 1.1-2.2 1.9-.3 2-1.6 2.6-2.8 3.5-.4.2-.9.6-.7 1.1.2.6.7.7 1.4.7zm17-46.7c0-.5.2-.9-.3-1.1-.3-.1-.5.3-.7.4-1.2.8-1.1 2.7-2.4 3.4-.9.5-1.4 1.6-1.9 2.5-.1.3-.4.7-.1 1 .3.2.5-.2.7-.4.9-.8 1.8-1.5 3-.8.3.2.5 0 .5-.2-.1-1.7.7-3.3 1.2-4.8zM90.9 190.1c.3-.1.7-.2 1.1-.4 2-.6 3.5-2 5.1-3.2.4-.3 1.3-.5.9-1.2-.4-.8-1.1-.3-1.7-.1-1.9.9-3.4 2.3-5.4 3-.3.1-.5.5-.7.7-.2.2-.4.5-.3.8.2.5.5.4 1 .4zM373 412.3c0-.4-.3-.5-.7-.6-.6-.1-1.4 0-1.5.6-.3 1.8-1.6 2.9-2.4 4.3-.2.4-.6.9-.3 1.3.4.5.9.3 1.4.1 1.2-.4 3.6-4.3 3.5-5.7zm-14.4 31.2c2.4 0 3.4-.8 4-3.3.2-.6.4-1.1.6-1.7.2-.5 1.1-1.1.2-1.7-.7-.4-1.1.4-1.5.8-.2.3-.5.6-.6.9-.4 1.9-1.3 3.2-3.1 3.7-.3.1-.6.4-.4.8.2.5.5.5.8.5zM240.2 101.2c.8-.4 2.4 0 2.6-1.5.2-1.4.8-2.4 1.6-3.3.2-.2.4-.5.2-.8-.3-.3-.6-.3-.9-.1-.4.3-.9.6-1.2 1-.9 1.1-1.8 2.4-3 3.1-.4.2-.6.5-.4 1 0 .6.4.6 1.1.6zm140.2 258.4c-.3-1.2-.5-2.7-.9-4-.2-.8-1-1-1.7-.8-.9.4-.4 1-.1 1.6.6 1.7 1.3 3.5-.1 5.2-.2.2-.3.6.1.7.7.2 2.7-1.6 2.7-2.7zm-.4 7.5V366c0-.7-.2-1.2-1-1.2-.7.1-1.3.5-1.1 1.3.3 1.3 0 2.4-.4 3.6-.1.5-.2 1.1.3 1.5.5.3 1 .2 1.5 0 .6-.2.7-.7.6-1.3-.2-.9.1-1.7.1-2.8zm.3 16.6c-.2.7-.1 1.1.5 1.2.6.1 1.4.2 1.5-.7.3-1.6.5-3.3.7-5 .1-.4-.2-.7-.7-.5-.8.2-1.4.6-1.7 1.6-.2 1.2-.1 2.4-.3 3.4zm-172-251.3c-.3.1-.8.1-1 .4-.9 1.1-2.2 1.4-3.3 2.1-.6.3-1.1.9-1.6 1.4-.3.3-.5.7-.3 1.1.3.5.9.6 1.2.3 1.1-1.3 2.9-1.7 3.9-3.2.4-.5.8-.8 1.4-.9.4 0 1.1 0 1-.7-.1-.4-.7-.4-1.3-.5zm159.3 294.1c.6 0 .8-.5.9-1 .2-1.2.7-2.3 1.3-3.3.3-.5.8-1.1.3-1.6-.6-.6-1.3-.1-1.8.4-1.2 1.2-1.3 2.9-1.9 4.4-.3.8.7.9 1.2 1.1zm16.9-101.9c.1-1-.4-1.4-1.3-1.2-.5.1-1.3.3-1.6-.3-.9-1.8-1.8-2.7-3.2-.5-.2.3-1 .2-.9.7.1.6.8.4 1.2.4 1.6-.3 3-.4 3.5 1.9.2.7.9.8 1.6.6.6-.5.7-.9.7-1.6zm-.5 30h.1c-.1-.5 0-1.1-.2-1.6-.3-.8-.9-1.4-1.7-1.1-1 .3-.7 1.1-.4 1.8.3.8.3 1.6.3 2.5-.1.9.4 1.4 1.2 1.4.9 0 1.1-.6.9-1.5-.2-.5-.2-1-.2-1.5zM171.3 120.1c0-1.5-.9-2.9-.8-4.4 0-.4-.3-.7-.7-.6-.5.1-1.1.3-1.1.7.2 1.5-.2 3.1.5 4.4.3.6 1 1 1.7.9.6 0 .4-.6.4-1zm29.4 23.9c-.2 1.3-.2 2.4 1.3 2.2 1.5-.1 1.1-1.4 1-2.3-.1-.7-.2-1.3-.3-2-.2-1-.9-.9-1.6-.8-.7.2-.8.7-.6 1.4.1.6.2 1.2.2 1.5zm179.1 262.9c0 .2 0 .7.5.9.5.3.9 0 1.2-.4.5-.8 1-1.7 1.4-2.6.4-.8.4-1.7-.5-2-.8-.3-1.6.1-1.9 1-.3.9-.5 1.9-.7 3.1zm-178-314h-2c-.4 0-.9 0-.9.6-.1.5.3.8.7.9 1.9.1 3.7.3 5.6.3.5 0 1-.3 1-1 0-.6-.5-.7-1-.8-1.1-.4-2.3.2-3.4 0zM380 342.5c-.1-.2-.1-.5-.1-.7 0-.9-.2-1.6-1.2-1.6s-1.1.8-1.1 1.7c0 .5-.1 1.1-.1 1.6 0 .6-.7 1.5.1 1.7.8.2 1.7-.1 2.2-1 .3-.5.2-1.1.2-1.7zM227.7 16.6c-.5-.1-.8 0-.8.3-.1.4.1.7.4.9 1.5 1.1 3 2.2 4.3 3.5.2.2.6.3.9.4.3.1.7.1.9-.3.2-.4-.1-.7-.4-.9-1.2-1-2.4-1.9-3.7-2.9-.5-.5-1.2-.9-1.6-1zm136 436.8s-.1-.2-.1-.3c-.2.1-.5.1-.6.3-1.4 1.8-2.2 4-3.8 5.8-.2.3-.3.7.1 1 .5.4 1.1.2 1.4-.3 1.2-2 2.3-4.1 3-6.5zm20.3-90.6c0-.7.2-1.5-.6-1.9-.4-.2-.9-.4-1.3-.1-.8.6-.5 1.4-.5 2.2 0 .7.1 1.3.2 2 .1.6.4 1 1 1s.8-.4.9-.9c.1-.9.2-1.6.3-2.3zM245.4 553.2c1.8 0 2.9-.8 4.1-.9.6-.1 1.2-.1 1.1-1-.1-.7-.7-1-1.3-.8-1.3.3-2.5.7-3.8 1.1-.4.1-.9.4-.7 1 .1.7.6.6.6.6zm132.8-146.5c0-.5.1-1.1-.4-1.2-.6-.2-.7.5-.9.9-.5 1.3-.6 2.8-1.5 4-.3.4-1 .9-.3 1.5.6.5 1.2.1 1.6-.4 1.2-1.5 1-3.3 1.5-4.8zm-124.8 144c1.5-.3 3.1-.8 4.6-1.6.4-.2 1.2-.4.9-1-.2-.5-.9-.6-1.5-.4-1.5.5-2.9 1.1-4.4 1.6-.4.2-1 .3-.9.8.1.7.7.5 1.3.6zM379.7 315c0-1.6-.8-2.8-1.9-2.7-1.2.1-1.4 1.2-1.4 2 0 1.3 1.2 1.6 2.2 1.9 1 .1 1.1-.7 1.1-1.2zM274.2 530.8c-.2-.7-.8-.6-1.4-.5-2.1.6-3.9 2-5.8 2.9-.2.1-.3.4-.3.5 0 .4.4.4.7.4.3 0 .7-.1 1-.3 1.5-1.1 3.3-1.7 5-2.2.3 0 .7-.2.8-.8zm107.4-184.4c0 .2-.1.5-.1.7-.1 1 .3 1.7 1.3 1.6.9-.1 1.2-.7 1-1.7-.1-.6-.1-1.2-.1-1.8 0-.7-.3-1.2-1-1.2s-1 .5-1.1 1.1v1.3zm-1.3-16c-.3.8 0 1.4.7 1.7.5.2.9.1 1.1-.4.4-.9-.3-3.7-1.2-4.2-.4-.2-.8-.7-1.2-.2-.4.4-.2.9 0 1.4.3.5 1 .9.6 1.7zm-5.1 97.3c.1-.5.1-.8-.2-.9-.3-.2-.8-.1-.9.2-.5 1.1-1.3.8-2.1.7-.4-.1-.9 0-1.4 0-.6.1-1 .5-.9 1.1.1.8.7.7 1.2.6.8-.1 1.6-.7 2.3-.4 1.7 1.1 1.7-.4 2-1.3zM42.6 215.9c1.3 0 4.3-2.4 4.6-3.5.1-.3.1-.6 0-.9-.1-.3-.4-.1-.5.1-1.1 1.4-3 1.4-4.1 2.8-.2.3-.9.2-.7.8.1.6.5.7.7.7zm316.3 246.6c-.1-.2-.1-.4-.2-.4-.2 0-.5 0-.6.1-1 1.1-2.4 1.8-2.9 3.4-.1.4-.7.8-.3 1.3.4.5 1.1.4 1.4 0 1.2-1.2 1.8-2.9 2.6-4.4zM213 552h2c.5 0 1.2.1 1.1-.7 0-.7-.5-1.1-1.2-1.1-1.5.1-2.9.2-4.4.4-.4 0-.8.3-.7.8 0 .6.5.6.9.6h2.3zm167.1-153.1c-.1-.5.2-1.4-.6-1.6-.7-.1-1.3.4-1.6 1.1-.2.5-.3 1.1-.3 1.6 0 .7-.4 1.9.4 2.1.9.2 1.6-.7 1.9-1.7.1-.5.1-1 .2-1.5zm-1.2-22c-.2-.4.6-1.6-.5-1.7-1-.1-1.1.9-1 1.8.1.7-.2 1.4-.5 2.1-.2.3-.8.6-.4 1s1 .4 1.4.1c1.1-.7 1-1.9 1-3.3zm5.3 9.8c.8-.4 1.4-.8 1.6-1.8.2-1.4-.1-2.8.5-4.1.2-.5-.2-.8-.7-.7-1 .1-1.9 1.7-1.2 2.4 1.1 1.2.9 2-.4 2.7-.3.2-.6.5-.5.9.1.2.5.3.7.6zM223.3 551.3c.5-.1 1-.1 1.4-.2.2-.1.5-.3.6-.5.1-.4-.3-.7-.6-.7-1.7-.2-3.5-.2-5.2 0-.4.1-.9.4-.9.9.1.7.7.5 1.1.5 1.2-.1 2.4-.5 3.6 0zm7 5.3c1.1-.2 2.6-.5 4.2-.8.3-.1.7-.2.7-.7 0-.6-.5-.7-.9-.6-1.6.2-3.2.5-4.8.8-.4.1-.8.4-.6.9.1.4.5.5 1.4.4zm100.4-56.2c1.6 0 2.4-.6 2.4-1.8 0-.7-.2-1.2-1-1.2-1.1 0-3.1 1.4-3 2.1.2 1 1.1.9 1.6.9zm45.5-84c0-.7-.4-.8-.9-.6-1.4.5-1.9 1.9-2.4 3.2-.2.4-.4 1 .1 1.3.5.3 1.1.1 1.4-.4.7-1.1 1.2-2.3 1.8-3.5zm10.9-42.6c.1-.5.1-1-.4-1.1-.7-.1-1.3.4-1.5 1.2-.2.9-.2 1.8-.5 2.6-.2.6-.1 1.1.5 1.3.6.2 1-.2 1.1-.8.4-1 .6-2.1.8-3.2zM170.9 110.2c.1-.5.1-1-.5-1.2-.4-.2-.8 0-1.1.4-.7.9-1.1 2-1 3.2 0 .6.3 1 .9 1.1.6.1.8-.3.9-.8.4-1 .6-1.8.8-2.7zM346 473.7c-.1-.8-.8-1-1.2-1.4-.4-.4-1-.6-1.3 0-.5.9-1.9 1.6-1.4 2.6.5 1.2 1.5-.1 2.3-.2.4 0 .8-.2 1.1-.4.2-.1.5-.3.5-.6zm-164.7 79.7c0 .1 0 .1 0 0h-2.4c-.3 0-.6.3-.7.7 0 .3.2.6.5.6 1.6 0 3.2.1 4.7 0 .4 0 .7-.4.7-.9-.1-.4-.4-.5-.8-.5-.7.1-1.4.1-2 .1zm-31-449.2c0-.1-.1-.4-.2-.4-1.4-.7-2.3-1.8-2.8-3.4-.1-.5-.8-.5-1.2-.2-.5.3-.4.7-.1 1.1.9 1 1.7 2.1 2.3 3.4.3.6 1 .5 1.6.4.3-.3.4-.5.4-.9zm237.5 253.4c-.2-.5.2-1.9-1-1.9-1.4 0-1.1 1.6-1.3 2.5-.2.8.2 1.4 1.1 1.5 1-.1 1.3-.7 1.2-2.1zm-213-257c-.1-.7-.6-.8-1-.7-1.5.3-2 1.7-2.5 2.9-.2.4-.1.8.4.8 1.2 0 2-.7 2.5-1.8.1-.5.3-.8.6-1.2zM42.3 240.8c.2 0 .4 0 .5-.1.8-.4 1.5-.9 1.9-1.7.1-.3 0-.7-.3-.7-.9-.2-1.5.2-2.1.9-.5.6-1.1.8-1.8.3-.5-.4-1-.1-1.4.2-.2.2-.4.4-.2.6.3.5.8.3 1.2.3.7 0 1.5-.2 2.2.2zm317.4 19.6c-.7 0-1.4-.1-1.3.8.2 1.3 1.1 2.1 2.2 2.5.8.3 1-.5 1-1.1 0-1.3-.9-2-1.9-2.2zm18.2 156.1c.2-.1.4-.2.5-.3.4-.3 1.9-4.4 1.8-4.8-.1-.5-.5-.5-.7-.2-.8 1.3-1.8 2.6-2.2 4.2-.2.6 0 1 .6 1.1zM231.3 105.4c-.5.1-1.2 0-1.2.5.1.8 2.2.6 1.1 2.3.1.1.3.2.4.3.3.1 3-2.1 2.9-2.4-.4-1.5-1.3 0-1.9-.4-.4-.2-.9-.2-1.3-.3zm143.8 205c.1-.6-.3-.7-.6-.7-.7-.1-1.2.2-1.3 1-.1.8.4 2.2-1.2 1.7-.2-.1-.3.3-.2.6.5 1 1.6 1.2 2.3 1.1.7-.1-.1-.8-.1-1.3 0-.7.2-1.2.6-1.7.1-.3.3-.5.5-.7zM351.4 464c0-.3-.1-.3-.4-.4-1.7-.3-3.2.7-3.5 2.5-.1.4-.4.9 0 1.2.5.4.5-.4.7-.7.5-.5 1.1-.9 1.8-1 .9 0 1.1-.8 1.4-1.6zm-59.7 68.2c2.1.1 3.4-1.6 4.9-2.8.1-.1.2-.4.1-.5-.1-.1-.3-.2-.5-.1-1.6.8-3.4 1.4-4.9 2.4-.2.2-.5.4-.3.7.2.3.5.3.7.3zM378 327c.1-.7-.2-1.3-.8-1.6-.6-.3-1.3-.2-1.8.2-.6.6.1 1 .3 1.5.1.3.4.7.4 1-.2 1.5.4.8 1 .5.6-.3.8-.9.9-1.6zM223.6 556.3c-.8.1-1.7-.2-2.6.3-.3.2-.6.4-.5.8.1.4.4.4.7.4.9 0 1.8 0 2.7-.1.8-.1 2.2 0 2.2-.8-.1-1.2-1.5-.5-2.3-.7 0 .1-.1.1-.2.1zm127.3-99.6c0-.9-.4-1.1-1.1-.8-1.2.6-1.7 1.8-2.2 2.9-.4.8.5 1.1 1 .8 1.1-.6 1.7-1.8 2.3-2.9zm4.3-.9c0-.9-.3-1-.8-.7-1.1.4-1.4 1.5-1.9 2.4-.3.5-.6 1 .1 1.4.5.3 1.1.2 1.4-.3.4-.9.8-1.9 1.2-2.8zm22.5-106.2c-.1.7-.5 1.7.8 1.9.8.1 1.4-.4 1.3-1.3-.1-1 0-2.4-1.2-2.5-1.4-.2-.6 1.2-.9 1.9zM41.6 243c-.1-.2-.2-.4-.3-.5-.3-.2-.6 0-.9.2-.9.8-1.7 1.3-2.9.5-.2-.1-.7 0-1 .1-.4.1-1 .3-.8.9.1.7.7.7 1.2.6.9-.2 1.9-.4 2.8-.4.8-.1 1.3-.8 1.9-1.4zm125.7 308.2c-.7-.1-1.4.1-1.4.9-.1.8.7.6 1.1.7.7.3 1.5.4 2.3.5.5.1.9-.1 1.1-.7.2-.6-.4-.8-.8-1-.7-.1-1.5-.2-2.3-.4zm216.1-212.5c0-1.4-1.2-2.8-2.2-2.8-.7 0-1.2.4-.7 1.1.5.7.9 1.5 1.4 2.2.2.3.6.5 1.1.4.3-.2.4-.6.4-.9zM212.6 97.2c-.6.1-1.4.3-.9 1.1.7 1.1 1.8 1.6 3 1.7.3 0 .6-.1.5-.5-.3-1.1-1.1-1.6-2-2.1-.1-.1-.3-.1-.6-.2zm2.4 24.7c.9 0 1.6-.2 1.7-1.3 0-.6 0-1.4-.8-1.2-1 .2-2.2.4-2.3 1.7-.2 1 .9.5 1.4.8zm-11.5 34.5c.8-.2 2.1.2 2.2-.8.1-.9-1.3-.7-2-.8-1.1-.1-2.9-.3-3 .6 0 1.1 1.8.8 2.8 1zm-42 393.7c-.7.2-1.6-.3-1.7.6-.2 1 .9.9 1.5 1.1.7.3 1.3.2 2 .2.4 0 .8-.2.9-.7.1-.5-.3-.7-.7-.8-.7-.1-1.4-.3-2-.4zm213.7-245.2c.1 1.4.6 2.5 2 2.7.6.1.8-.3.7-.9-.2-1.4-1.2-2.1-2.2-2.8-.4-.2-.5.5-.5 1zm-1.3-8.3c-.9 0-1.5.2-.8 1.3.2.4.3.9.2 1.4-.1.3 0 .7.4.6.7-.3 1.8-.3 1.7-1.6-.1-1-.3-1.8-1.5-1.7zM141.5 548.5c-.4-.1-.8 0-1.1.3-.2.2-.1.5.1.6.8.7 1.6 1.4 2.7 1.4.5 0 1.1-.2 1.2-.8.1-.6-.5-.8-.9-.9-.6-.2-1.3-.4-2-.6zm88.1-.2c-.9 0-1.7.2-2.5.5-.4.2-.9.4-.7 1 .2.5.7.4 1 .3 1.1-.2 2.2-.5 3.3-.7.3-.1.6 0 .7-.4.1-.5-.4-.6-.7-.6-.3-.1-.7-.1-1.1-.1zm51.1-14.3c-1.4-.1-2.4.7-3.4 1.3-.2.1-.3.4-.3.6 0 .4.4.3.6.4 1.2.1 2.2-.6 3.2-1 .4-.2.9-.4.8-1-.2-.5-.7-.2-.9-.3zM209.2 95c-.8.1-2-.2-2 1 0 1 1 .9 1.8 1 .8 0 1.8 0 1.8-1.1s-1-.7-1.6-.9zM370 433.9c0-.5-.2-.8-.5-.8-.6 0-1.1.3-1.4.9-.3 1-.6 1.9-1.2 2.8-.3.4-.5.8 0 1.1.5.3.8-.1.9-.5.4-1.1 1-2 1.8-2.8.3-.2.3-.6.4-.7zM174.1 554.2c.7 0 1.3 0 1.8-.3.3-.2.8-.4.7-.9-.1-.5-.6-.3-.9-.3-.7 0-1.5 0-2.2-.2-.6-.2-1.2-.2-1.3.6-.2.8.5.9 1.1 1.1h.8zm1.3 3.7c.8-.3 2.2.6 2.3-.7.1-1.2-1.4-.8-2.2-.8-.8 0-2.2-.4-2.2.8-.1 1.2 1.3.4 2.1.7zm136.8-48c-.8.3-2.1 0-2.4 1.5-.1.7.6.8 1.1.7 1-.2 2.2-.3 2.6-1.5.1-.7-.7-.6-1.3-.7zm24.4-15.4c-.1-.7-.4-1.1-.9-.9-.8.3-2.1.1-2.2 1.5-.1.8.6 1.2 1.2 1.1.9-.2 1.6-.8 1.9-1.7zm-131.9 57.8c1-.1 1.8-.2 2.6-.3.4-.1.8-.2.8-.7 0-.6-.5-.8-.9-.8-.8.1-1.6.2-2.3.3-.5.1-1.2.2-1.1.8-.1.8.6.7.9.7zm5.2 5.1c-1 .1-2 .3-2.9.9-.1 0 0 .4.1.4 1 .9 2 .4 3.1.2.5-.1 1.1-.3 1-1-.2-.6-.8-.5-1.3-.5zm27.7-529.9c.6 0 1.1.2 1.3-.3.2-.5-.1-.8-.5-1-.7-.6-1.7-.9-2.3-1.8-.1-.2-.4-.3-.6-.1-.1.1-.3.5-.2.6.8.8 1 2.4 2.3 2.6zm150.2 337.7c.1-.6.1-1.1-.6-1.1-1 .1-1.5.7-1.7 1.7-.1.7.2 1.5.9 1.4 1.4 0 1.1-1.3 1.4-2zM212.8 116c.7-.1 1.5-.3 1.4-1.2-.1-1-1-1-1.7-1s-1.6-.1-1.5.9c0 1.1 1 1.2 1.8 1.3zm37.1-34.8c0-.3 0-.9-.3-.8-1.2.7-1.4 2.1-2 3.2-.2.4.1.9.6.8 1.7-.3 1.5-1.8 1.7-3.2zm36.6 453.7c-1.1.4-2.2.8-3.3 1.3-.3.1-.4.4-.4.7.1.4.4.5.6.5 1.2-.3 2.5-.6 3.5-1.5.1-.1.2-.4.1-.6 0-.4-.3-.4-.5-.4zM182.4 557c-.6.3-1.8-.5-2 .6-.2 1.1 1.1 1.2 1.7 1.2.8 0 2.2-.2 2.2-1.1.1-1.1-1.2-.4-1.9-.7zm25.2-432.8c.7-.2 1.6.1 1.6-1.1 0-1-.8-1-1.5-.9-.7 0-1.6 0-1.6 1.1 0 1 .9.7 1.5.9zm171.3 178.9c.5 0 1.1.1 1-.7-.1-.9-.4-1.8-1.5-1.9-.7 0-1.2.3-1.1 1 .1 1 .6 1.6 1.6 1.6zm-227.8 246c.7-.3 1.9.5 2-.6.1-.9-1.2-.9-2-.9-.7 0-2.1-.6-2.1.6 0 1.3 1.3.7 2.1.9zm37 4.7h-.9c-.7.1-1.5.2-1.4 1.1.1 1.1 1 .6 1.6.6.4 0 .9-.2 1.3-.3.3-.1.9-.2.8-.7-.1-.5-.6-.5-.9-.6-.3-.1-.6-.1-.5-.1zm23.6-426.5c.9-.1 1.7-.3 1.8-1.3 0-.7-.7-1-1.3-.9-.8.1-1.7.3-1.8 1.3-.1.9.7.9 1.3.9zm-1.6 29.9h.8c.6-.1 1.6.3 1.6-.5.1-.8-1-.7-1.6-1-.2-.1-.3 0-.5 0-.8.1-2.2-.4-2.2.9 0 1.1 1.3.4 1.9.6zm152.5 110.2c-.5 0-.9.2-.8.8.3 1.1 1.1 1.7 2.1 1.8.5.1.9-.3.8-.9-.1-1.4-1-1.6-2.1-1.7zM198.5 130.2h1c.6 0 1.3 0 1.3-.8 0-.9-.8-.7-1.3-.7-.6 0-1.1 0-1.7.1-.4 0-.9 0-.8.6 0 .5.4.6.9.7.2.1.5.1.6.1zm184 244.5c.9 0 1.1-.8 1.1-1.5 0-.8-.4-1.6-1.1-1.5-.7.1-1.1.9-1.1 1.8-.1.8.3 1.2 1.1 1.2zM210.6 120.3c1 .1 1.6-.3 1.7-1.2.1-.8-.6-1-1.2-.9-.8.1-1.9 0-1.9 1.2-.1.9.9.7 1.4.9zm165.8 300.1c-.6 0-2.3 1.6-2.3 2.2 0 .6.3.7.8.7.9 0 2.3-1.4 2.2-2.2 0-.4-.2-.7-.7-.7zm-75.6 102.2c.3 0 .6-.1.8-.1.9 0 1.2-.8 1.6-1.5.1-.2.2-.5-.1-.6-.7-.4-1.1.3-1.7.5-.3.1-.6.2-.9.4-.3.2-1 .3-.8.9.2.4.7.4 1.1.4zM32.4 252c.1-.1.3-.1.4-.2.5-1.1 1.1-2.2 2.1-3 .3-.3.4-.8 0-1.1-.4-.3-.8-.1-1 .3-.6 1.2-1.1 2.3-1.7 3.5-.2.2-.1.4.2.5zm112.7 294.2c-.4.3-1.6-.6-1.6.5 0 1 1.1.9 1.9.9h.8c.4 0 .9 0 .9-.5.1-.6-.4-.8-.8-.9-.3-.1-.7 0-1.2 0zm92.7.3c-1 .2-2.1.8-3.3.8-.3 0-.6.2-.5.6.1.4.4.4.7.4 1.2-.2 2.3-.5 3.5-.7.4-.1 1 0 .9-.5-.1-.6-.7-.6-1.3-.6zm126.7-283.2c-.6 0-1 .3-.9.9.2 1.2 1.2 1.4 2.1 1.5.6.1.8-.4.7-.9-.2-1.1-1.2-1.2-1.9-1.5zM147.5 552c.7-.1 1.6.2 1.6-.6 0-1-.9-1.1-1.6-1.2-.6 0-1.6-.2-1.6.8-.1 1.1 1 .7 1.6 1zm53.7.6c-.8 0-2 2.3-1.6 3.1.1.3.3.3.6.3.4 0 .8-.3.7-.6-.4-1 .2-1.1.8-1.3.4-.1.7-.5.6-1-.2-.6-.6-.6-1.1-.5zm4.9 3.3c.8-.5 2.3.3 2.6-1.2.1-.5-.9-.6-1.4-.5-.8.2-2-.2-2.3 1-.1.6.5.7 1.1.7zM117.4 539c-.1-.1-.1-.4-.3-.4-1-.4-1.5-1.2-1.5-2.3 0-.3-.2-.6-.5-.6-.4 0-.5.4-.6.7-.2 1 1.2 3 2.2 3.1.3.1.7 0 .7-.5zm10.2 3.8c-.6.1-1.8-.1-1.8.8 0 1 1.3.6 2 .7h.7c.5-.1 1.1-.1 1.1-.8 0-.6-.6-.6-1.1-.6-.3-.1-.5-.1-.9-.1zm63.6-413.3c.5-.1 1.5.3 1.5-.8 0-1-1-.6-1.6-.7h-.8c-.4 0-1 0-1.1.6-.1.6.5.9 1 .9h1zm181.5 175.8c-.1-.7-.3-1.4-1.2-1.3-.5 0-1.1.1-1 .9.1.8.3 1.6 1.2 1.7.9-.1 1-.6 1-1.3zM153.4 553.5c.7 0 1.6.5 1.7-.6 0-.8-.8-.9-1.4-.8-.7.1-1.9-.5-2 .6-.1 1.3 1.2.5 1.7.8zm199.4-311.2c-.5.1-.8.2-.7.8.2 1.1.8 1.7 1.9 1.7.5 0 .9-.3.7-.8-.2-.9-1-1.4-1.9-1.7zm26.2 92.2c-.1-.4-.2-1.2-.8-1.1-1 .2-1.2 1.3-1.4 2.2-.1.4.1.7.5.6.8-.1 1.8-.2 1.7-1.7zM212.7 110.8c.8 0 1.5-.2 1.5-1.2 0-.8-.6-.8-1.1-.7-.7.1-1.6.1-1.7 1.1 0 .9.8.7 1.3.8zm163 206.8c-.4.2-1.2-.1-1.2.8 0 1 .8 1.4 1.6 1.5.6.1 1-.3 1-.9 0-.9-.5-1.4-1.4-1.4zm-29.8-85.8c-.6 0-1.4 0-1.4.9.1 1 1.1.8 1.8.9.5.1 1.2-.1 1.1-.8 0-1-.8-1-1.5-1zm-24.3 270.3c0-.5-.2-.9-.6-.7-1 .4-1.9 1-2.2 2-.2.5.4.6.8.6 1.2 0 1.5-1.1 2-1.9zM81.2 514.8c-.1-.6-.4-.9-.9-1.1-.8-.3-1.5-.8-2.4-.7-.3 0-.2.4-.1.6.2.7 2.5 1.9 3.1 1.5.2 0 .3-.2.3-.3zM189 559.2c.6-.2 1.6 0 1.6-.9.1-.8-.7-.8-1.3-.8-.7 0-1.7 0-1.8.9-.1.8 1 .6 1.5.8zm177.2-281.6c.9 0 1.6 0 1.5-.9 0-.7-.3-1.5-1.1-1.5s-1 .8-1.1 1.6c-.1.7.4.8.7.8zm21 63.8c0-.6-.3-.9-.7-.8-.8.2-1.9.1-2.1 1.2-.1.7.7.9 1.2.9.8.1 1.4-.4 1.6-1.3zM216.4 116.7c.7 0 1.5-.1 1.5-1 0-.7-.5-1-1.2-1-.7.1-1.4.2-1.5 1.1 0 .9.6.9 1.2.9zm108.7 381.6c.7-.1 1.6 0 1.8-1 .1-.7-.5-.9-1-.8-.7.1-1.7 0-1.9 1.1-.1.7.6.7 1.1.7zm-117-367.8c.7-.1 1.5-.2 1.5-1.2 0-.8-.8-.5-1.2-.6-.7 0-1.5-.1-1.6.9-.1.8.7.8 1.3.9zm-37.9 426.3c.4-.3 1.3.2 1.3-.7 0-1-.9-.9-1.5-.9s-1.5 0-1.5.7c-.1 1.1 1 .7 1.7.9zm24.3-.8c.7 0 1.6.1 1.7-.7.1-.9-.8-.7-1.4-.7-.7 0-1.7-.2-1.8.8-.1.7.9.5 1.5.6zm43.1-445.9c.6-.1 1.4 0 1.4-.9.1-.9-.7-1.1-1.3-1-.6.1-1.5.1-1.5 1.1.1.9.9.8 1.4.8zm-33 16.9c.5-.1 1.2 0 1.2-.8 0-.9-.7-1.1-1.5-1.1-.6 0-1.3.2-1.3 1.1.1.9 1 .6 1.6.8zm-3.3 432.8c.8-.1 1.7.1 2-1 .2-.6-.4-.8-.9-.8-.9 0-1.9.1-2.2 1-.3.8.7.6 1.1.8zm13.9-2.4c-.7.3-1.7-.3-1.9.9-.1.6.6.7 1 .6.8-.2 1.8.1 2.5-.8 0 0-.2-.5-.4-.5-.3-.1-.7-.2-1.2-.2zm-43.5-538c1.2-.2 2.1-.9 2.7-1.9.2-.3-.4-.4-.6-.3-1.1.4-2.2.7-2.8 1.8-.2.4.4.4.7.4zm37.2 71.2c-.4.1-1.3-.2-1.3.5-.1.8.7.9 1.4.9.6 0 1.5.2 1.5-.7 0-.8-1-.5-1.6-.7zm133 135.5c-.3.3-1.2-.2-1.1.8.1.8.9 1 1.5 1.1.5.1 1.1 0 1-.8 0-.8-.6-1-1.4-1.1zm-48.3 297c.7-.1 1.5 0 1.8-1 .1-.6-.3-1-.8-.8-.7.2-1.7.2-1.8 1.2-.2.7.4.6.8.6zm-81.8-417c.5-.1 1.3.2 1.4-.8 0-.8-.7-.9-1.2-.8-.6.1-1.6-.2-1.5.9-.1.8.7.6 1.3.7zm-16 453.3c.6-.1 1.5.1 1.6-.9.1-.6-.6-.7-1-.6-.8.1-1.8.1-1.9 1.1-.1.5.8.2 1.3.4zm110.9-37c0-.3-.1-.6-.4-.7-1.1-.2-1.7.5-2.3 1.3-.2.2-.4.4-.2.8l.1.1c.5.1 2.8-1.1 2.8-1.5zM242.2 27.5c-.6 0-1.2 0-1.2.7.1.9.9 1 1.5 1.1.5.1.9-.2.9-.8 0-.9-.6-1-1.2-1zM94.5 523.1c-.5.1-1.3 0-1.1.7.3 1 1.4.7 2.2.9.3 0 .8.3.6-.3-.2-1-.9-1.2-1.7-1.3zm146.6 31.3c.7-.1 1.5-.2 1.7-1 .2-.7-.5-.7-.9-.7-.7 0-1.7.1-1.9.9-.3.8.6.6 1.1.8zm114.2-91.9c.7-.1 1.3-.2 1.3-1.1 0-.6-.5-.8-1-.7-.6.1-1.3.1-1.4 1 0 .9.6.8 1.1.8zM151.1 102.1c.6-.1 1.4.1 1.4-.9 0-.9-.8-.7-1.3-.7-.6 0-1.2-.1-1.3.8 0 .9.7.7 1.2.8zm156.3 415.6c0-.5-.3-.8-.7-.9-.8 0-1.5.4-1.8 1.1-.2.5.5.7.9.7.7.2 1.3-.2 1.6-.9zM19.7 279c-.4.8-1.3.5-1.9 1-.3.3-.3.6 0 .9.5.4 1.1.4 1.6 0 .5-.3.7-.9.7-1.5 0-.2 0-.4-.4-.4zm120.1 266.8c.4-.2 1.3.1 1.2-.7 0-.7-.7-.8-1.3-.8-.5 0-1.3-.1-1.3.7 0 .8.8.7 1.4.8zm242.6-175c.8 0 1.2-.4 1.2-1.2 0-.5-.2-.8-.7-.8-.7.1-1.4.3-1.5 1.1-.1.8.6.8 1 .9zM120.7 542.6c.8-.2 1.7 0 2-1.1.1-.4-.3-.6-.7-.6-.8.1-1.7.1-2.1 1-.2.6.5.6.8.7zm190.2-23.1c0-.6-.2-.8-.6-.8-1 0-1.6.8-2.1 1.6-.1.3.3.6.5.5.8-.4 1.8-.4 2.2-1.3zm-275.6-293c-.1-.5-.4-.7-.7-.6-.7.2-1.7.4-1.9 1.3-.1.5.5.6.9.5.7-.1 1.4-.3 1.7-1.2zM187.9 134c-.1-.6-.6-.7-1-.5-.5.2-1.4.1-1.4 1 .1.7.9.7 1.4.6.6-.1 1-.4 1-1.1zm40.1-24.3c.6 0 1.2-.1 1.2-.9 0-.6-.6-.7-1.1-.6-.6.1-1.4.1-1.4.9.1.6.8.6 1.3.6zm155.4 206.1c-.1-.6-.4-1-1-1-.6.1-1.2.3-1.2 1s.6.7 1.1.8c.5.1 1-.1 1.1-.8zm-213-208.6c.9.1 1.5-.2 1.7-1 .1-.5-.4-.8-.8-.6-.7.2-1.6.2-1.7 1.2-.1.4.5.3.8.4zm-11.3 447.5c.5 0 1.2.1 1.1-.7-.1-.7-.7-.7-1.2-.6-.5.1-1.4-.2-1.4.6.1.8 1 .6 1.5.7zm203.5-296.6c-.2-.6-.3-1.2-1-1.3-.5 0-1.1.1-1.1.6 0 .7.6 1.1 1.3 1.3.4.2.7 0 .8-.6zM156 549c-.5 0-1.2 0-1.2.7 0 .8.7.8 1.3.8.6 0 1.1-.3 1.1-.9 0-.7-.7-.5-1.2-.6zm182.8-324.5c.6 0 1.2-.1 1.3-.8.1-.8-.6-.9-1-.8-.5 0-1.2.1-1.3.9-.1.7.6.7 1 .7zm-173.1-201c.6-.2 1.6.3 1.7-.6.1-.6-.8-.5-1.2-.5-.7 0-1.6-.1-1.7.7-.1.6.8.3 1.2.4zm-3.3 3.9c-.1-.4-.3-.7-.6-.5-.7.4-1.6.4-1.9 1.4-.1.4.3.7.7.5.7-.4 1.5-.5 1.8-1.4zm134.7 167.9c.3-.1 1 0 .9-.5-.2-1-1.2-.7-1.8-1-.3-.1-.8.1-.7.5.1.9.9.8 1.6 1zM254 73.1c-.4.2-1.1-.1-1.2.7-.1.6.5.7 1 .7s1.2 0 1.3-.8c0-.6-.6-.6-1.1-.6zm-30.4 85.5c-.4.1-1.2-.1-1.1.4 0 .8.8.8 1.4.8.5 0 1.3.1 1.2-.5-.1-.9-1-.5-1.5-.7zm125.8 77.6c-.5.1-1.2.1-1.2.8 0 .6.7.7 1.2.8.5 0 1 0 1-.6.1-.7-.5-.9-1-1zM149.3 95.4c-.1-.6-.6-.7-1-.7-.6 0-1.3.1-1.3.8 0 .5.6.6 1.1.6.5.1 1 0 1.2-.7zm13.5 459.9c.5-.1 1.2 0 1.4-.7.1-.6-.5-.8-.9-.7-.6.1-1.2.3-1.3 1-.1.6.5.3.8.4zm-92-48.2c.5 0 1-.1 1-.7 0-.9-.7-.8-1.2-.8-.4 0-1 0-.9.7 0 .7.5.8 1.1.8zm316-168.6c.1-.5-.2-.8-.6-.9-.6-.1-1.2 0-1.4.7-.2.6.3.7.7.7.5.1 1 .1 1.3-.5zM198.3 142.4c-.2-.7-.6-.6-1.1-.5-.5 0-1 .2-1 .8 0 .7.7.7 1.2.7.5-.2.9-.5.9-1zM350 263c0-.6-.3-.9-.9-.9-.4 0-.8 0-.8.5 0 .7.5 1.1 1.1 1.2.4.1.5-.3.6-.8zM183.9 560.7c-.4-.5-.7-1.3-1.5-1.3-.4 0-.7.3-.6.7.2.8.9.7 1.5.9.3.2.6.2.6-.3zm59.9-523.1c.4-.1 1-.1 1-.7s-.6-.9-1.1-.9c-.4 0-.7.3-.8.8 0 .7.4.8.9.8zm121.9 405.6c-.1-.2-.2-.6-.6-.6-.6 0-1 .3-1 1 0 .5.3.6.7.6.4-.1.8-.2.9-1zm15-55.7c-.5 0-.9.2-.9.6.1.8.8.7 1.3.8.4 0 .7-.2.7-.6-.1-.7-.6-.8-1.1-.8zM372.1 279c-.1-.6-.6-.7-1-.7-.5 0-1 .2-.9.8.1.6.6.6 1.1.6.4 0 .8-.1.8-.7zM254.4 553.1c.5-.1 1.2.1 1.3-.7.1-.6-.5-.5-.9-.5-.6 0-1.4.1-1.5.7-.1.7.6.4 1.1.5zM213.2 94.3c.4 0 1.1 0 1-.6 0-.7-.7-.6-1.2-.6-.4 0-1.1 0-1 .6.1.7.7.6 1.2.6zm15.6 24.5c0-.5-.4-.6-.7-.6-.6-.1-1.3 0-1.6.6-.2.4.3.6.6.6.7.2 1.3-.1 1.7-.6zM356.6 254c-.4.1-1 .1-1 .7s.5.7.9.7c.5 0 .9-.2.9-.8 0-.4-.4-.6-.8-.6zM145.1 98.4c.4-.1.9-.1 1-.7.1-.5-.3-.8-.7-.7-.4 0-1 .1-1.1.7 0 .5.4.7.8.7zm241.5 249.7c-.4.1-1 0-1.1.6-.1.6.4.7.8.7.5 0 .9-.2 1-.8 0-.5-.3-.5-.7-.5zM285.5 524.5c0-.5-.3-.7-.7-.7-.5 0-1.1.2-1.1.8 0 .5.4.7.8.6.5 0 .8-.2 1-.7zM356.3 280c.3-.1.9 0 .8-.7 0-.4-.5-.4-.8-.4-.4 0-1 0-1 .6s.5.5 1 .5zm4.6 171.4c.4-.2 1-.3.9-.9 0-.5-.5-.6-.9-.6s-.8.3-.8.8.3.7.8.7zm-44.3 56c-.2-.4-.6-.5-1-.4-.5 0-1 .1-.9.8.1.5.6.4 1 .4.4-.1.8-.2.9-.8zM183 137.5c.3-.1.9.2.9-.4 0-.6-.6-.6-1-.6s-1-.1-1 .6c.1.6.7.3 1.1.4zm10.2 424.2c-.2-.6-.7-.6-1.1-.6-.4 0-.9.1-.9.6s.5.5.9.5.9.1 1.1-.5zM311.8 208c-.3.1-1-.1-.9.4.1.5.8.5 1.3.6.4.1.7-.2.7-.6-.1-.6-.7-.3-1.1-.4zm-83.4-93.9c.4-.1.9.1 1-.5.1-.5-.3-.6-.7-.6-.5 0-1.1 0-1.2.7.1.5.6.3.9.4zm3.4-3.8c-.3.2-.9-.2-.9.5 0 .4.5.6.9.6.5 0 1 0 1-.6.1-.5-.5-.4-1-.5zm19.7-49.9c-.1-.5-.5-.6-.9-.6s-.9.1-.9.6c-.1.5.4.6.8.7.4 0 .9-.1 1-.7zm32.2 471.5c-.4 0-.8.2-.9.6-.1.5.3.6.6.6.4 0 .8-.1.9-.6.1-.4-.2-.6-.6-.6zm60.5-54.2c.5-.6 1.4-.3 2.1-.9.1-.1.1-.4.1-.5-.2-.3-.5-.2-.7-.1-.6.5-1.4.5-1.8 1.2l.3.3zM331 492.6c-.1-.4-.4-.4-.7-.4-.5.1-1 .2-1.2.8-.1.4.2.5.5.5.6-.2 1.1-.4 1.4-.9zm51.6-92.7c-.3 0-.6.2-.6.5 0 .6.5.8.9.9.4.1.5-.2.4-.6 0-.4-.2-.8-.7-.8zm-10.8 24.6c0 .5.3.6.6.6.4 0 .7-.2.7-.6.1-.4-.1-.7-.5-.8-.4 0-.7.3-.8.8zm-217.5-388c.5-.1 1-.1 1.2-.8.1-.3-.1-.6-.5-.5-.5.1-.9.4-1.1.9-.2.3.2.3.4.4zm190.1 215c-.1-.4-.1-.8-.5-.8-.4-.1-.6.3-.6.7 0 .5.2.8.7.8.3-.1.4-.4.4-.7zm-35.8 263.4c-.1-.4-.4-.4-.7-.3-.4.1-1 .1-1.1.7-.1.4.3.6.7.4.5-.2 1-.2 1.1-.8zm50-58.3c0-.4-.1-.6-.4-.7-.4-.1-.8.1-.9.6-.1.4.1.6.4.7.4.1.8-.1.9-.6zM257 538.1c-.2-.3-.4-.4-.7-.4-.4 0-1 0-1.1.5-.1.4.3.4.6.4.4-.1.9 0 1.2-.5zm-41.6-381.2c-.3 0-.8 0-.8.4s.4.5.8.5c.3 0 .8-.1.8-.5 0-.3-.4-.4-.8-.4zM319 507.7c0-.4-.1-.7-.5-.7s-.7.2-.7.6c0 .4.2.5.5.6.4.1.7-.1.7-.5zm-257.3-9.9c-.3 0-.6 0-.5.4.1.4.4.6.7.7.3 0 .6-.1.6-.4 0-.7-.5-.6-.8-.7zM75.3 510c0-.5-.4-.5-.7-.7-.2-.1-.5-.2-.6.1-.1.4.2.7.5.7.3.2.6.3.8-.1zM20.8 276.5c.3 0 .6-.2.5-.5 0-.4-.3-.6-.7-.5-.3 0-.6.2-.6.5 0 .4.5.4.8.5zm322.5 204.6c0-.4-.2-.6-.5-.6s-.6.1-.6.5.3.5.5.5c.3 0 .5-.1.6-.4zM205.6 89c0-.3-.2-.4-.4-.4-.3 0-.7-.2-.9.2-.1.3.2.4.4.4.4 0 .7.1.9-.2zM300 527.1c0-.4-.2-.3-.4-.3-.3 0-.7.1-.8.4-.1.2 0 .5.3.4.3 0 .7-.1.9-.5zM232.3 87.6c.1.3.4.4.7.3.2 0 .6-.1.4-.5-.1-.3-.4-.3-.7-.3-.2.1-.4.2-.4.5zm-68.2-62.5c-.1-.4-.4-.3-.6-.3-.3 0-.6.2-.6.5s.2.5.5.5c.3-.1.6-.2.7-.7zM29.6 256.4c-.3.1-.5.2-.5.6 0 .3.3.3.5.3.3 0 .5-.2.5-.6 0-.3-.2-.3-.5-.3zm1.6-2.2c0-.3-.2-.4-.4-.3-.2.1-.3.3-.4.5-.1.2.1.5.4.5.3-.1.4-.4.4-.7zm257.3 279.5c.4-.1.9-.2 1-.6.1-.3-.2-.4-.4-.3-.4.1-.8.2-.9.7 0 0 .2.1.3.2zM27.9 261.4c-.2-.4-.4-.4-.7-.3-.3.1-.6.2-.5.5.1.1.5.2.8.2.1-.1.4-.1.4-.4zm261-73.1c0-.3-.2-.4-.5-.4s-.6-.1-.7.3c-.1.4.2.3.4.4.3 0 .6.1.8-.3zM134.3 543.5c.1-.1.3-.2.4-.4 0-.3-.3-.3-.5-.3s-.5 0-.5.3.3.4.6.4zm127.8-7.2c0-.3-.2-.4-.5-.4-.2 0-.5.1-.5.4 0 .3.3.3.5.3s.4 0 .5-.3zM23 271c.1-.4-.1-.4-.2-.4-.2 0-.5.1-.5.4 0 .1.2.4.2.3.2-.1.4-.2.5-.3zm302.2 230.6c-.1-.1-.1-.3-.3-.3-.3-.1-.5.1-.6.4 0 .1.2.3.3.3.3 0 .5-.1.6-.4zm41.2-218.7c.2 0 .4-.1.4-.4 0-.2-.1-.5-.3-.5-.2 0-.4.1-.4.4 0 .2.1.4.3.5zM158.7 30.3c-.3.1-.5.1-.5.4 0 .1.2.2.3.2.2 0 .5-.1.5-.3 0-.1-.2-.2-.3-.3zm172.5 465.4c-.3-.1-.5-.3-.6-.3-.1 0-.4.1-.4.2-.2.3.1.4.3.4.1 0 .2-.1.7-.3zM376.1 294c-.1 0-.2.1-.3.2-.1.2.1.3.3.3.1 0 .3-.1.3-.1.1-.3 0-.4-.3-.4zm-224-253.4c.3-.1.5-.1.5-.4 0-.1-.2-.3-.3-.3-.2 0-.4.1-.4.4 0 .1.2.2.2.3zm-78.8 468c-.2-.2-.3-.3-.5-.4-.1 0-.2.1-.3.1-.1.2 0 .3.2.4.2 0 .3 0 .6-.1zm121.1 27.2c-4.1-.2-8.3-.5-12.4-.2-6.2.3-12.4-.5-18.5-1.6-7.8-1.4-15.7-2.7-23.3-5.4-4.1-1.5-8.4-2.6-12.5-4.3-4.1-1.7-8.1-3.8-12.2-5.7-3.6-1.6-6.7-4-10.2-5.7-2.9-1.4-5.6-3.7-8.3-5.7-2.3-1.8-4.7-3.3-7.1-5-1.9-1.3-3.5-3.1-5.5-4.2-3.4-1.9-5.8-5.2-8.9-7.7-3.3-2.6-6.2-5.8-9.2-8.9-3.4-3.5-6.5-7.4-9.4-11.2-2.7-3.5-5.2-7.2-7.9-10.6-2.6-3.1-4.7-6.6-6.6-10.1-2.3-4.4-5.2-8.5-7-13.3-.8-2.3-1.8-4.8-3.4-6.8-.7-.8-.7-2.1-1.2-3.2-1.7-3.8-2.9-8-4.7-11.8-.6-1.2-.7-2.7-1-4-1.4-5.9-3.6-11.6-4.9-17.5-.5-2.5-1.7-4.8-1.3-7.4.1-.8-.4-1.4-.6-2-1.1-2.9-.8-6.1-1.5-9.1-.8-3.5-.3-7.1-1.3-10.6-.1-.2-.1-.5-.1-.7.1-8-1.3-16-.4-24 .4-3.5 0-7.1 1-10.5.5-1.7.3-3.4.3-5.1 0-5.3 1.7-10.3 2.8-15.4.8-3.6 1.5-7.2 2.6-10.7 1.4-4.6 2.1-9.4 4.6-13.6 1.7-2.7 1.9-6.1 3.2-9 1.7-3.7 3.4-7.5 5.1-11.2 1.5-3.3 3.5-6.1 4.9-9.4 1.9-4.5 4.8-8.4 7.5-12.4 2.1-3.2 4.9-5.8 6.6-9.2.8-1.6 2.4-2.3 3.6-3.6 2.5-2.8 4.3-6.3 6.9-9 3.5-3.5 6.8-7.3 10.9-10.1.6-.4 1-1 1.4-1.6 1.8-3 4.3-5.2 7.3-6.6 2.2-1 3.6-3 5.4-4.5 2.6-2.1 5.2-4.1 8.1-5.5 2.6-1.3 4.7-3.4 7.1-4.9.8-.5 1.6-1.2 2.5-1.6 3.2-1.4 6.2-3.2 9.3-4.9 1.9-1.1 4.1-1.7 6.1-2.7 3.1-1.5 6.2-3 9.5-4 5.7-1.7 11.1-4.2 16.9-5.6 4.4-1.1 8.8-1.6 13.1-3 1.9-.6 4.1-.6 6.1-.7 7.7-.5 15.4-1.8 23.1-1.5 5.4.2 10.7.6 16.1 1.4 3.9.6 7.9 1.2 11.8 1.8 2.9.4 5.7 1.2 8.5 2.1 5.8 2 11.8 3.6 17.6 5.8 4 1.5 8.1 2.8 11.5 5.7.2.2.5.4.7.5 4.6.7 8.3 3.5 12.3 5.6 3.1 1.7 6.3 3.4 8.8 6.1.2.2.4.3.6.4 2.6.6 4.2 2.9 6.5 4 .7.4 1.3 1 1.8 1.7.8 1 1.7 1.8 3 2.2 2.5.8 4.4 2.7 6 4.7 1.4 1.8 3.2 3.2 4.8 4.6 3.7 3 6.6 6.8 9.8 10.2 2.8 3 5.8 5.8 8.4 9 1.3 1.5 2 3.4 3.3 4.8 1.9 2 3.5 4.4 5.2 6.6 1.7 2.1 3.1 4.7 4.6 7.1 2.7 4.3 5.2 8.7 7.4 13.3 1.9 3.9 4.7 7.3 5.3 11.9.2 1.1 1.1 1.9 1.6 3 2.2 4.7 4 9.6 5.3 14.7.2.9.4 1.8 1.1 2.4.5.4.6 1 .6 1.6.1 1.4.5 2.6 1.6 3.5.5.5.8 1.1.6 1.9-.3.9-.2 1.8 0 2.7 1.2 3.9 1.5 8 2.6 11.9.5 1.6.6 2.4 2.3 2.7.9.1.5 1.3-.2 1.7-1.7.9-1.5 2-.9 3.6.9 2.2.9 4.6 1.1 7 .5 6.1.8 12.2 1 18.3.2 4.3.2 8.7 0 13.1-.1 3.6-.8 7.1-1 10.6-.2 3.5-1.6 7-.7 10.6 0 .2 0 .4-.1.5-2.1 3-1.2 6.8-2.4 9.9-2 5.3-2.4 11.1-4.9 16.2-.7 1.5-1.1 3.2-1.1 4.9 0 .8-.1 1.6-.6 2.2-2.6 3.5-3.5 7.9-5.2 11.8-1.9 4.4-4.2 8.6-6.1 13-1.7 3.8-4.1 7.1-6.1 10.7-2.2 3.9-5 7.4-7.3 11.2-3.6 6-8.3 10.9-12.7 16.1-4.1 4.8-8.5 9.4-13 13.8-5.2 5-11 9.1-16.6 13.5-5.9 4.7-12.8 7.7-19.1 11.6-2 1.2-4.2 1.7-6.1 2.8-2.3 1.3-4.5 2.4-6.9 3.4-3.6 1.4-7.2 2.7-10.7 4-1.9.7-3.9 1.3-5.8 2-5.9 2-12 3.3-18.1 4.3-7.5 1.2-15 2.6-22.7 2.3zm-73.2-328.6c-.8 0-1.6.1-2.4.1-.7.1-1 .6-1 1.2 0 .7.5.8 1 .9 1.6.4 2.2-.2 2.4-2.2 2.4.3 2.7.2 3.2-1.7.8.3 1.8.5 2.2-.2.7-1.1 1.4-1 2.3-.7.4.1.8 0 1.1-.3.6-.6 1.2-.8 2-.6.5.1 1.1-.1 1.2-.7.1-.7 0-1.4-.6-1.7-.5-.3-1.4-.4-1.6.1-.6 1.5-1.4 1.5-2.5 1-.1-.1-.5.1-.6.2-.9.9-1.8 1.5-3.1 1.7-.6.1-.6.8-.3 1.4-2.8-1-3.1-.8-3.3 1.5zm22.3-4.7c1.2.1 2.4-.1 3.5-.6.4-.2.7-.4.6-.9 0-.3-.3-.5-.5-.6-1.5-.7-3.3.5-3.6 2.1-.4 0-.9 0-1.3.1-.7 0-1.5-.1-1.8.9-.1.4 0 .9.5 1 .9.2 1.8.2 2.4-.7.2-.4.1-.9.2-1.3zm189.3 64.3c.2.7.5 1.2 1.3.9.1-.1.3-.4.2-.6-.3-.8-.9-.4-1.4-.3-.1 0-.1.1-.1 0-.8-1.7-2-3.1-2.4-5.1-.1-.5-.6-.8-1-.9-.8-.2-1.7.7-1.5 1.5.4 2.3 2.8 4.4 4.9 4.5zm-168 19c0-3.9-2.4-6.8-4-10-.2-.5-.5-1.4-1.2-.9-.7.5-.2 1.3.2 1.7.6.6 1.1 1.2 1.2 2.1.1 1.5.7 2.9 1.5 4 .6 1.1.8 2.7 2.3 3.1 0 .9-.2 1.8.4 2.8 1.1 2 1.4 4.3 2.4 6.3.5 1 .9 1.9 1.6 2.8.4.6.9.6 1.5.2.6-.4.4-.9.1-1.4-.6-.8-1.2-1.6-1.7-2.5-1.1-2.4-2.2-4.8-3.2-7.2-.4-.5-.7-.8-1.1-1zm-7.7 119.6c.3.4.7.8 1.3.6.1 0 .2-.2.2-.2-.4-.5-.9-.4-1.4-.4-.1 0-.1.1-.1 0 .3-.8 0-1.5-.6-2.1-3.3-3.7-6.6-7.5-9.5-11.6-.5-.7-1-1.4-1.7-1.7-.7-.3-1.5-.8-2.1-.1-.5.7.2 1.3.6 1.9.3.4.5.8.8 1.1 2.8 3.5 5.7 6.9 8.5 10.4 1.1 1.6 2.3 2.3 4 2.1zM49.7 434.5c-1-.3-1.6-1.2-2.7-1.4-1-.2-1 .2-.7.9.9 2 1.7 4 2.3 6.1.2.8.6 1.6 1 2.3 2.2 4.6 5.7 8.2 7.4 13.2 1.8 5 5.2 9 8.7 12.9 4 4.5 7.6 9.4 12.1 13.5 4.9 4.5 9.5 9.3 14.8 13.3 3.4 2.5 6.8 4.8 10.1 7.4.5.4 1.7.1 1.3 1.2-.3 1-1.4.6-2.1.6-.4 0-.8-.2-1.1-.5-2.8-2-5.6-4-8.4-6.2-3.1-2.5-6.3-4.8-9.1-7.6-3.1-3-6.4-5.8-9.5-8.8-2.2-2.2-4.2-4.7-6.4-7-3.2-3.3-5.8-7.1-8.5-10.8-2.7-3.7-4.4-8.1-6.7-12-1-1.7-2-3.4-3.1-5-.3-.4-.7-1.1-1.2-.8-.5.3 0 .9.1 1.3.7 4 3.5 6.9 4.8 10.6.8 2.5 3.1 4.1 4.1 6.4 1.3 3 3.6 5.2 5.1 8.1 1.3 2.8 3.9 4.9 5.9 7.2 4.2 4.7 8.9 8.9 13.5 13.1 2.9 2.7 6 4.9 9.1 7.3.7.5 1 1.5 1.9 1.8 1.9.8 3.4 2.2 5.1 3.3 1.6 1 3 2.6 5.1 1.3.3-.2.9-.2 1 .4.1.5-.4.5-.7.5-.6.1-1.6.3-.6 1.1 1.5 1.1 2.6 2.9 4.2 3.6 3.3 1.5 6.2 4 9.9 4.6 1.1.2 2.3.4 3.2 1.1 2.6 2 6 1.9 8.8 3.2.8.4 1.6.2 1.5 1.6-.1 1 1.1 1.4 1.6 1.1 1.6-.7 2.7.3 4.1.6 2.1.5 4.1 1.4 6.2 2 2.9.9 5.8 2 8.8 2.8 9.1 2.4 18.4 2.9 27.7 3.5 4.1.3 8.3.1 12.4.4 3.3.2 6.5 0 9.7-.5 3.9-.6 7.7-.7 11.6-.8 1.8 0 3.6.3 5.2-1.1.3-.2.8-.4 1.1-.3 2.5.4 4.8-.9 7.2-1.1 4.1-.3 8.2-1.2 12-3.1 2.3-1.2 4.9-2 6.8-3.9.9-.9 1.7-1 2.6-.4 1.1.7 2.1.4 3.1-.1.8-.4 1.7-.8 2.5-1.2 2.6-1.1 5.4-2.1 7.9-3.4 2.9-1.6 5.8-3.3 8.7-5 6.1-3.5 12-7.3 17.5-11.7 3.9-3.1 7.7-6.5 11.7-9.5 6.5-4.9 12-11.1 17.2-17.5 2.1-2.6 4.7-4.8 6.6-7.6 2.6-3.9 5.2-7.9 7.7-11.9 2.7-4.2 5-8.6 7.5-12.9 3.7-6.5 6.7-13.5 9.3-20.6.7-1.9 2.2-3.5 2.4-5.4.8-5.7 3.5-10.8 4.4-16.5.6-3.3 1-6.8 2.2-10 1.7-4.8 1.8-10 2.4-15 .5-4 1.1-7.9 1.3-11.9.2-5.9.7-11.9-.2-17.8-.1-.7.1-1.9-.7-1.8-.9.1-.8 1.3-.7 2.1.1.8.3 1.6.5 2.3.2.7.3 1.4.1 2.2-.5 2.1-.4 4.2-.3 6.3.2 4.5-.6 8.8-1 13.2-.1.6-.3 1.1-.9 1-.7-.1-1-.7-.7-1.4.4-.9 0-1.8-.1-2.7 0-.4 0-.9-.4-.9-.5 0-.5.5-.7.9-.4 1 .2 1.9 0 2.9-.9 5.2-1.2 10.5-2.4 15.7-.4 1.8.2 3.4-.3 5.2-.8 2.6-2.2 5.1-2.4 7.9 0 .3-.2.6.1.8.4.3.6 0 .8-.4.4-.7.8-1.4.9-2.3.1-.6.5-1.3 1.1-1.1.5.2.2.9.1 1.3-.7 2.2-1 4.6-3.5 5.6-1.1.5-1.1 1.8-.9 2.9.1.5.3.6.7.2.4-.5.8-1.6 1.4-1.1.5.4-.4 1.2-.7 1.8l-.6 1.5c-.1.3-.4.6-.6.2-.8-2-1-.2-1.3.2-.9 1.2-1 2.8-1.3 4.3-.2 1.2.5 2.6-.4 3.7-1.3 1.7-2.6 3.3-2.9 5.5 0 .1-.1.2-.2.3-.6.8-.9 1.7-1.1 2.6-.4 1.7-.7 3.5-1.5 5-1.7 3.3-3.7 6.4-4.1 10.2-.1.6-.5 1.1-.8 1.6-2.1 3.2-4.8 5.9-6.3 9.5-1.5 3.6-4.1 6.5-6.3 9.7-2.4 3.4-4.9 6.6-7.5 9.9-2.2 2.8-4.5 5.5-6.7 8.2-2.9 3.5-6.6 6.1-9.6 9.5-.5.6-1.2.8-2 .8-.9 0-1.4-.4-1.7-1.4-.3-.9 0-1.6.7-2 2.8-1.6 4.9-4.1 7.3-6.2.5-.4 1-.7 1.7-.7 1.5-.1 3.6-2.1 3.5-3.3-.1-1.5.5-2.4 1.4-3.3 1.3-1.4 2.4-3.1 4.5-3.4.6-.1.9-.8 1.3-1.2 1.3-1.3 1.2-3.4 2.3-4.6 2.1-2.2 3.5-4.9 5.2-7.4 1.6-2.3 3-4.9 4.4-7.4 3.7-6.7 7.5-13.2 10.5-20.3 2.9-7.1 5-14.5 7.8-21.7 1.6-4 2.3-8.4 3.2-12.7 1.3-6.8 2.2-13.7 3.2-20.6 1-7.6.9-15.3.9-23 0-3.6-.1-7.3-.5-10.9-.3-2.3-.6-4.6-.7-6.8-.1-2.9-.5-5.6-.9-8.4-.5-4.2-1.5-8.4-2.4-12.6-.4-2.2-.6-4.6-2.6-6.1-.6-.5-.3-1.2.2-1.7s.7-1 .5-1.9c-1.4-4.5-2.7-9-3.6-13.6-.2-.9-.5-1.6-1.4-1.5-1.6.2-1.9-.7-1.5-2.1.3-1.4 0-2.3-1.1-3.1-.6-.4-1.1-1.2-1.8-.6s-.1 1.4.1 2c1 2.4 2 4.8 3.1 7.1 1.3 2.8 1.9 5.8 2.9 8.7 1.2 3.7 2.1 7.4 2.9 11.2.9 4.1 1.7 8.3 2.6 12.4 1 5 1.3 10.1 1.7 15.1.3 3.3.4 6.7.4 10.1 0 4.2.4 8.6.2 12.7-.3 4.6-.3 9.3-1.1 13.9-1.4 8.2-2.1 16.5-4.6 24.5-.8 2.6-1.3 5.4-2.1 8-1 3.2-2.3 6.3-3.3 9.5-1.9 6.2-4.6 12.1-7.5 17.7-2 3.9-3.9 7.8-6.1 11.6-4.2 7.4-9.1 14.2-14.3 20.8-5 6.4-10.8 12-16.4 17.9-.8.8-1.7 1.1-2.4.2-.8-.9-.2-1.8.6-2.4.9-.7 1.8-1.3 2.6-2 1.9-1.6 2.7-4.2 5.1-5.6 2.2-1.2 3.9-3.6 5.6-5.7 2.7-3.3 5.1-6.8 7.9-10.1 3.8-4.5 6.7-9.7 9.5-14.8 1.2-2.1 2.3-4.3 3.5-6.4 1.6-2.9 2.9-5.8 4.3-8.8 1.9-3.9 3.4-8.1 4.8-12.2.8-2.5 1.9-4.8 2.6-7.3 1.3-4.7 2.6-9.4 3.7-14.1.8-3.4 1.9-6.7 2.4-10.2.4-2.8.5-5.7 1-8.5 1.2-6.7 1.5-13.4 1.6-20.1 0-2.8 0-5.7-.2-8.5-.3-4.6-.4-9.2-.7-13.8-.3-5.9-1.4-11.8-2.3-17.6-.6-3.5-1.4-7.1-2.6-10.5-.8-2.3-1.6-4.7-2-7.1-.4-2.1-1.1-4-1.9-5.8-1.5-3.7-3.4-7.2-4.2-11.1-.6-2.6-2.5-4.4-3.3-6.9-.2-.6-.8-.8-1.4-.9-1.8-.2-2.5-1.3-2.3-3.2.1-1.4-.6-2.4-1.4-3.4-.5-.6-1.3-.5-1.9-.2-.6.3-.5 1-.3 1.5.8 1.5 1.1 3.2 2 4.6 1.3 2.1 2.7 4.3 3.7 6.5.5 1.2 1.6 2.3 1.7 3.6.2 1.4.6 2.5 1.3 3.7.7 1.1 1.3 2.3 1.6 3.6.9 3.3 2.4 6.3 3.5 9.5 1.1 3.1 2.6 6.1 3 9.4.2 1.9.4 3.7.9 5.5 1.4 5 2.4 10.1 2.9 15.3.5 5.5 1.3 11 1.4 16.6.1 4.6.5 9.3.3 14-.2 4.4-.8 8.7-1.1 13-.4 6.1-2.3 12-3.2 18-.5 3.7-2.2 7-3.1 10.5-1.6 6.1-3.7 12-6.1 17.8-2.2 5.2-4.9 10.2-7.5 15.3-1.5 2.9-2.8 5.9-4.7 8.4-.6.8-1.1 1.7-1.7 2.5-2.3 3.7-4.6 7.3-7.2 10.8-1.6 2.1-3.1 4.2-4.7 6.2-1.6 1.9-3.3 3.7-4.9 5.5-3 3.5-6 7.1-9.7 9.9-.9.7-2 1.2-2.7.1-.6-1 .5-1.7 1.1-2.4.1-.1.2-.1.3-.2 1.3-1.5 3.2-2.2 4.5-3.5 4.6-4.7 8.7-9.9 12.8-15 6.3-8 11.8-16.6 16.2-26 2.3-4.9 5.2-9.4 6.7-14.7.4-1.3.7-2.7 1.2-4 1.4-3.5 2.6-7.1 3.7-10.7 1.5-5 3.1-10.1 3.9-15.3.6-3.6 1.3-7.2 2-10.8.2-1.2.4-2.4.4-3.7 0-2.3.7-4.5.4-6.8-.1-.4.2-.9.4-1.2 1.1-1.4-.3-3.3.7-4.7 0-.1-.3-.5-.5-.6-.9-.4-1.8-.7-2.8-.2-.9.5-.7 1.3-.8 2.1-.1 2.8 0 5.7-.4 8.6-.4 3.2-1.4 6.3-1 9.5 0 .3 0 .7-.1 1.1-.7 2.5-1.4 5-1.7 7.6-.2 2.3-.5 4.6-1.2 6.8-2 6.2-3.6 12.5-6.1 18.5-2.8 6.7-5.7 13.2-9.1 19.6-1.7 3.3-3.4 6.6-5.6 9.5-.8 1-1.4 2.2-2.1 3.3-1.6 2.5-3.1 5.2-5 7.3-2.4 2.7-4.3 5.9-6.8 8.6-1.7 1.8-2.7 4.2-4.7 5.9-2.6 2.2-5 4.8-7.5 7.1-.9.8-2.2 1.1-2.9.2-.7-1 .5-1.7 1.1-2.5.1-.1.3-.2.4-.3 2.8-2.1 5.6-4.3 7.9-7.1.6-.7 1.4-1.4.4-2.2-.9-.7-1.9-1.2-2.8.1-.5.7-1.2 1.3-1.7 2-1.7 2.1-3.8 3.6-5.5 5.7-.7.9-2 .9-2.8 0-.8-.8.1-1.4.6-1.9 2.5-2.6 5.5-4.7 7.8-7.5.4-.5 1.6-1 .9-1.8-.7-.8-1.6-2.2-3-1.2-.7.5-1.2 1.1-1.8 1.7-1.2 1.5-2.4 2.9-4.3 3.4-.5.1-1 .5-.8 1.2.3 1.2-.4 1.7-1.3 1.9-.8.2-1.8.4-2.2-.5-.4-.9.6-1.5 1-2.1.2-.2.4-.4.7-.6 1.8-.9 3.1-2.4 4.5-3.9 1.5-1.6 2.9-3.3 5.1-3.9.3-.1.7-.3.8-.6.6-2.8 2.8-4.3 4.3-6.5 3.9-5.6 8.1-10.8 11.2-17 3.6-7.1 7.5-14 10.1-21.6 1.5-4.4 3.3-8.8 4.7-13.2 2.7-8.5 3.5-17.3 5.3-26 .4-1.9.1-3.9.3-5.8.2-2.8 1-5.6.3-8.5-.2-1-.1-2.2.1-3.3.6-4 .8-7.9.1-11.9-.3-1.9 0-3.8-1.2-5.5-.7-1 0-2.4-.2-3.6-.6-3.4-1.2-6.9-1.6-10.4-.5-3.7-1.5-7.2-2.4-10.8-.9-3.9-3.1-7.5-3.9-11.5-.6-2.7-2.5-4.7-3.2-7.4-.8-3.6-2.6-6.8-4.4-10-1.6-2.9-3.9-5.4-5.4-8.4-2.1-4.1-5.1-7.6-6.9-11.8-.4-1-1.2-1.5-1.9-.1-.3.6-.7 1.2-1.5 1.4-1.3.4-.8 1-.1 1.6 3.9 3.7 6.7 8.3 9.2 13.2.9 1.9 1.5 3.9 3.1 5.4.8.7 1.3 1.8 1.7 2.9 1.8 5.1 4.1 9.9 6.2 14.8 1.3 2.9 2.1 5.9 2.7 8.9.9 3.7 2.3 7.2 2.8 11 .6 3.8 1.7 7.5 2.1 11.4.5 4.3.4 8.6 1.8 12.8.2.5.1 1-.2 1.4-.8 1-.7 2.2-.6 3.5.1 1.7.5 3.5.1 5.3-.2.9 0 1.7.9 2.1.7.4 1.1 1 .4 1.7-1.7 1.6-1.8 3.8-1.8 5.8 0 3.9-.9 7.6-1.2 11.5-.4 5.9-2.1 11.6-3.4 17.3-.6 2.8-1.6 5.5-2.7 8.2-.6 1.4-.6 2.8-1.2 4.1-1.1 2.3-1.9 4.7-2.8 7-1 2.5-1.9 5.1-3 7.5-1.7 3.6-3.6 7.2-5.8 10.5-3 4.5-5.5 9.5-9 13.6-1.5 1.8-2.8 3.8-4.5 5.5-1.6 1.6-1.9 4.6-4.6 5.1-.1 0-.1.2-.2.3-2 2.6-4.5 4.8-6.7 7.2-.5.5-1.1 1.4-1.9.5-.7-.8-.5-1.8.4-2.5 2.9-2 5.1-4.8 7.5-7.3.6-.7 1.4-1.3.5-2.3-.8-.9-1.6-.3-2.2.4-1.4 1.6-2.9 3.1-4.8 4.1-.4.2-.8.6-.9 1-.3 1.8-1.6 2-2.9 2.3-.7.1-1.6.3-1.9-.7-.2-.9.5-1.4 1.2-1.7 1.2-.4 2.1-1.2 2.8-2.2.6-.9 1.1-2 2.3-2.4.3-.1.5-.4.4-.7-.1-.3-.3-.5-.6-.5-1.4.1-2.7-.2-4.1-.4-.8-.1-1.6.6-.9 1.3 1.3 1.4.2 2-.5 2.9-.9 1.2-1.8 1.5-3.1 1.2-.4-.1-1.3 0-.8.5 1.2 1.4 1.7 3.5 3.6 4.2 2 .7 2.1.8.9 2.6-.3.4-.5.8-.7 1.3-.3.6-.8.9-1.4.9-.6 0-.9-.6-1-1.1-.2-.7-.3-1.4-.4-2.1-.1-.8-.3-1.7-.9-2.3-2.5-2.4-3.7-5.5-4.5-8.9-.3-1.3.3-1.5 1.3-1.4.9.2 1.5.7 2.2 1.3.8.7 2 1.2 2.6.1.4-.8.2-2.2-.5-3.1-.6-.8-1.5-.5-2.2-.4-.4.1-.7.4-1.1.5-.7.2-1.5.5-1.8-.3-.4-.8.2-1.4.9-1.9 2-1.4 4.4-2.2 5.1-5.1.1-.4.5-.5.8-.6.5-.2 1-.5 1-1.1 0-.7-.5-1.2-1.1-1.5-1.3-.6-2.4-.5-3.4.7-.8.9-1.7 1.8-2.4 2.8-.8 1.2-2 1.2-2.7.5-.8-.9 0-1.9.8-2.6l.1-.1c1.6-1.5 3.9-2.4 4.4-5 0-.1.3-.3.4-.3 1.7.2 2-1.4 2.9-2.3 2.6-2.7 4.8-5.9 7-8.9 3-4.2 5.6-8.8 8.1-13.4 1-1.9 1.6-4.2 2.6-6.2 4.3-8.8 6.5-18.2 8.4-27.8.3-1.6 0-3.3.4-4.8.8-3.3.6-6.6 1.2-9.9.2-1.2.8-2.4.5-3.6-.6-3.1-.1-6.2-.7-9.2-.5-2.1.1-4.4-.3-6.5-.2-.9.5-1.5 1.2-1.5.7-.1.5.8.6 1.3.6 2.7.4 5.6.6 8.4 0 .5-.2 1 .4 1.2 1.2.4 2.3-.1 3.2-.8.7-.5.7-1.6.4-2.3-.4-.9-.2-1.7-.1-2.5.2-1 .9-1 1.3-.4.4.7 1.1 1.4.6 2.4-.3.5-.5 1-.1 1.5.5.6 1 .4 1.6.2 1.6-.6 3.2-1.1 4.8-1.6 3.3-.9 3.8-2.2 2.8-5.7-.1-.2-.1-.5-.2-.7-.9-4.7-.4-9.6-2-14.2-.3-.8.6-1.2 1.1-1.5.5-.3.7.3.8.7.6 3.2 1.4 6.4 1.6 9.6.2 2.6.8 5.3.6 7.9-.1.9.3 1.6 1.2 1.7.8.1 1.7-.1 2.2-1.1.3-.7.4-1.5.3-2.3-.4-2.3-.5-4.7-.7-7-.3-3.7-1-7.3-1.5-11-.4-3-1.4-5.8-2.2-8.6-.5-1.8-1.1-3.6-1.4-5.5-.1-.7-.3-1.3-.5-1.9-2.8-6.5-5.1-13.2-8.2-19.6-.8-1.6-1.9-2.9-2.7-4.5-2.1-4.6-4.6-8.9-7.4-13.1-2.8-4.2-2.9-4.1-5.9-1.7l-.1.1c-.8.6-.8 1.2.1 1.6 1 .4 1.6 1.2 2.1 2.1 3.4 5.7 6.7 11.6 10.3 17.1 2.3 3.5 3.6 7.4 4.9 11.3 1.5 4.4 2.7 8.9 4.4 13.2 1.1 2.8 1.7 5.7 2.1 8.6.1.9-.2 1.8-1 1.9-.8.1-.9-.9-1.1-1.5-.4-1.2 0-2.4-.3-3.6-1.1-3.7-2.3-7.2-3.6-10.8-1.5-4.4-2.7-8.9-4.5-13.2-.7-1.8-1.4-4-3.6-4.6-.1 0-.4-.4-.3-.6.7-2.2-1.2-3.4-1.8-5-1-2.7-3.2-4.7-4.4-7.3-.1-.3-.5-.8-.8-.6-.8.6-1.7 1.3-2.3 2.1-.5.6.3 1.2.6 1.7 1.3 1.9 3.7 2.4 4.9 4.5.5.8 2.1.6 2 1.6-.2.9-1.6.6-2.4.9-.5.2-1 .7-.4.9 1.9.7 2.1 2.8 3.2 4.1 1.6 2.1 3.6 4.2 3.1 7.4-.1.5.2 1.2.5 1.7 1.4 2.2 1.6 4.8 2.8 7.1 1.3 2.4 1.6 5.4 2.2 8.1.5 2.4.7 4.9 1.5 7.1 1.4 4 2.1 8 2.4 12.2.1 1.4.3 2.8 1.2 3.9.4.5.5 1.1.1 1.7-.4.7-.5 1.5-.7 2.3-.1.6-.2 1.4-.8 1.4-.7 0-.8-.9-1-1.5-.1-.3-.1-.6-.1-.9.3-2.9-.6-5.8-.7-8.7-.1-2.2-.2-4.5-1.1-6.6-1.7-3.8-2.1-8.1-3.1-12.1-.5-1.9-1-3.7-1.6-5.5-.9-3.1-2.7-5.9-3.2-9.2-.3-1.8-1-3.3-1.9-4.8-.9-1.6-2.1-3.1-2.9-4.9-.4-.8-.2-2.2-1.4-2.5-1.1-.3-2.3.2-2.9 1.1-.6.8.2 1.9.7 2.4 2.4 2.3 4.4 5 6.7 7.4.3.3.8.4.5 1-.2.4-.6.6-1 .6-.7.1-1.1-.2-1.4-.8-1.2-1.9-2.5-3.6-4.6-4.4-.4-.2-.7-.5-1-1-.7-1.2-.9-2.8-2-3.4-1.2-.7-2.5.6-3.8.6h-.3c-.3.1-.7.2-.8.6-.1.6.3.8.6.9 2.4 1 3.1 3.3 2.9 5.6-.1 1.9-.2 3.2 1.8 3.6.1 0 .3.2.3.4 1.1 2.2 3.1 3.9 3.1 6.7 0 .4.2.8.4 1.2 1.6 4.7 3.7 9.3 4.3 14.4.4 3.3 1.4 6.4 2 9.6.2.8.6 2.1-.9 2.3-1.4.2-1.2-1-1.2-1.8 0-2.1 0-4.3-1.3-6.1-.2-.3-.2-.7-.2-1.1-.5-3.9-1.7-7.7-2.8-11.4-.8-2.6-2-5.2-2.3-8-.2-1.8-1.2-3-2.6-3.9-2.3-1.5-2.8-2.8-2.2-5.7.1-.4.2-.7 0-1-1-1.5-2-3.1-3.1-4.5-.8-.9-1.2-1.7-1.1-2.9.1-.8 0-1.7-1-1.8-1.2-.2-2.5-.6-3.6.2-.4.3-.2.9.1 1.3 2.8 3.7 4.4 8 6.4 12.2.5 1.1.7 2.4 1.7 3.1 1.5 1.1 2 2.9 3 4.4.7 1 .1 1.7-.5 2.4-.2.3-.5.6-.8.3-.6-.6-1.3-1.1-.9-2.1.3-.7.1-1.1-.5-1.3-1.2-.3-1.4-1.3-1.9-2.2-1.1-2.3-2.3-4.5-3.3-6.9-1.6-3.7-3.9-7-5.7-10.5-.5-.9-.9-1.5-1.8-.8-.8.7-1.6 1.4-.8 2.7 1.6 2.7 3.2 5.4 4.7 8.2 1.9 3.8 2.7 8.3 6.2 11 .1.1.1.2.1.3.2 1.6 1.2 1.8 2.4 2 1.5.2 2.6 1 3.2 2.4.9 2.1 1.7 4.2 2.2 6.5 1.2 5.5 2.4 11 3.2 16.6.9 5.6.7 11.1.5 16.7 0 .8-.3 1.1-1 1.1-.9-.1-1.2-.6-1-1.5.7-3.1-.2-6.4.7-9.5.1-.3 0-.6-.1-.9-1-2.5-1.1-5.1-1.4-7.7-.4-3.4-.7-6.9-1.7-10.2-1.1-3.7-2.4-7.3-3.1-11.1-.1-.4-.2-.7-.6-.6-1.2.3-2.4 0-3.6-.1-.7 0-1 .4-.5 1 1.7 2 2.2 4.5 3 6.8 1.5 4.2 2 8.7 2.8 13.1.2 1 .1 2 .4 2.9.8 3.1 1 6.2 1.4 9.3.3 2.4-.8 5-.9 7.6-.1 1.7.4 2 1.6 2.2 1.4.3 2.8.1 4.3.1.5 0 .9.1 1.2.6.3.6-.3.8-.5 1.2-.5.7-1.3 1.1-1.4 2.2-.3 3.1-.6 6.3-1 9.4-.5 3.2-.8 6.4-1.7 9.5-2 6.9-4.1 13.8-7.1 20.4-3.7 8.2-8 15.8-13.4 22.8-1.6 2.1-4.2 3.7-4.2 7 0 .5-.5.6-.9.7-1.6.1-2.6 1-3.5 2.3-.5.7-1.1 1.4-1.7 2-.9.9-2.1.8-2.8.2-.9-.8.2-1.7.8-2.2 1.2-1.2 2.4-2.3 3.7-3.2.9-.6 1.1-1.1.5-2.1-.6-.9-1.3-1.1-2.1-.3-1.4 1.3-2.8 2.5-3.9 4.1-.5.7-1.2 1.3-2.1.7-1-.7-.5-1.6-.1-2.4.3-.7.9-.9 1.5-1.1.5-.2 1.2-.2 1.5-.7 1.4-1.9 2.8-3.6 4.4-5.4 4.2-4.7 7.8-10 10.9-15.5 2.4-4.3 4.7-8.8 6.6-13.5 2.3-5.8 3.6-11.8 5.5-17.7 1.2-3.6.8-7.5 1.8-11.2.3-1.1-.2-2.4.2-3.4.4-1.1.5-1.7-.7-2.1-1.2-.4-2.3-.1-2.6 1.3-.5 2-1.1 4-.8 6.1.1 1.2-.1 2.4-.5 3.6-1.1 3.2-1.4 6.6-2.1 9.9-.8 3.4-2.2 6.5-3.2 9.7-1.2 3.8-3.4 7-4.9 10.6-1 2.4-2.1 4.9-3.6 7-2.7 3.7-5.1 7.7-8.2 11.1-.8.9-1.5 1.7-.9 3.2.3.6.1 1.8-1 1.5-1.9-.5-3.2.4-4 2.2-.1.3-.3.5-.6.7-.8.7-1.9.7-2.5.1-.7-.7.3-1.4.8-1.9.9-.8 1.8-1.4 2.7-2.2.5-.4.9-.8.7-1.5-.2-.7-.7-1.1-1.3-1.3-.9-.3-1.5.2-2.1.8-.6.7-1.3 1.4-2.2 1.7-.6.2-1.3.1-1.7-.5-.4-.6-.2-1.3.4-1.7 3.3-2.1 5.5-5.4 8.1-8.4 3.7-4.4 6.3-9.6 9.2-14.6 1.5-2.6 2.4-5.5 3.7-8.2 1.5-2.9 2.7-6 3.3-9.1 1.2-5.8 3.1-11.4 3.4-17.4 0-.6.5-1.5-.3-1.8-1.1-.4-2.3-.2-3.3.5-.8.5 0 1 .1 1.5.2.6.1 1.1-.1 1.6-.8 3.7-1.3 7.5-2.2 11.2-1 4.1-2.6 7.9-3.8 11.9-1 3.3-2.5 6.5-4.3 9.5-1.4 2.5-2.7 5.1-4.4 7.4-2 2.9-3.8 6.1-6.5 8.3-.8.7-1.7 1.6-.2 2.7.4.3.1.7-.3.7-1.5-.2-2.3.8-3.1 1.8-.7.9-1.7.5-2.6.3-.4-.1-.5-.4-.4-.8.2-.9.6-1.7 1.5-2 .4-.1.8-.2 1.1-.4.5-.3.7-.8.5-1.4-.6-1.6-2.7-2.1-4-1-.4.4-.8.8-1.2 1.3-.7.9-1.6.8-2.5.6-.4-.1-.7-.3-.7-.7 0-.4.1-.7.5-.9.8-.6 1.6-1.1 2.4-1.7.6-.4 1.3-1 1-1.7-.4-1-1-2-2.1-2.2-.7-.2-1.4.4-1.7 1.2-.1.2-.2.4-.4.6-.9.9-2 1-2.8.2-.8-.8-.1-1.6.4-2.3.8-.9 1.8-1.6 2.8-2.1.8-.3 1.2-.7 1.6-1.4.5-.9 1.3-1.6 1.7-2.5.8-1.6 2.9-2.2 3.4-3.8.8-2.6 2.5-4.5 3.7-6.7 1.8-3.4 3.8-6.8 4.9-10.6.9-2.9 1.7-5.8 2.7-8.6 1-3.1.7-6.2 1.6-9.2.3-1.1-.3-1.6-1.3-1.4-1.1.3-2.3.3-3.2 1.1-.7.6.1 1.6-.2 2.4-.1.2-.1.4-.1.5-.2 3.1-1.3 6-2 9-.9 4.1-2.6 7.9-4.5 11.6-1.3 2.5-2.4 5.1-4.1 7.3-1.6 2.3-3.3 4.5-5 6.7-.4.5-.5.9-.2 1.5.4.7.7 1.4 1 2.1.2.3.7.6.2 1.1-.4.4-.7 0-1-.3-1.3-.9-2.6-1.7-4.1-.1-.4.4-1.2.4-1.7-.2-.6-.7 0-1.2.2-1.8.3-.6.9-.7 1.4-1 .3-.2.7-.5.7-1-.1-.5-.6-.5-.9-.6-2.1-.7-4.3.2-5.7 2.2-.4.6-1 1-1.6.6-.7-.4-.1-.9.1-1.4.5-1.2-.3-1.6-1.1-1.7-1.1-.2-2.2-.2-3.1-1.3-.3-.4-1-.4-1.4 0-.4.3-.8.7-.6 1.4.1.4.6.9 0 1.3-.5.3-1.2.3-1.6-.2-.9-1.2-1.6 0-2.4.2-.7.2-.7 1.1-.6 1.7.1 1.2 1 .9 1.7.9.5 0 1.2.2 1.1.8-.1.7-.8.5-1.3.6-.6.1-1.3-.9-1.7-.3-.7 1-2.4.8-2.6 1.8-.2 1.1 1.1 1.7 1.9 2.5.6.6.7 1.3.2 1.9-.6.6-1.1.1-1.5-.3-1-1-1.9-2.1-2.9-3.1-.6-.6-1-1.3-1.8-1.6-.5-.2-1.2-.3-1.6.3-.3.5.2.9.5 1.2 1.2 1.4 2.3 2.8 3.5 4.2.3.4 1.1.7.5 1.3-.5.5-1.2.7-1.9.2-.3-.2-.5-.6-.7-1-.6-.9-1.2-1.4-2.3-.7-.9.6-1.9.7-3 .5-.7-.1-1.4-.2-1.9.5-1.2 1.6-3.6 1.6-4.5 3.6-.1.1-.4.1-.6.2-1.5.2-2.6-.1-3.5-1.5-.7-1.1-1.6-2.5-3.3-2-1 .3-1.2.7-.4 1.4 1.5 1.4 2.5 3.2 3.7 4.8.5.6 1 1.4.1 2-.7.5-1.4.1-1.8-.8-.5-1.2-1.5-2-2.3-2.9-.4-.5-.9-.5-1.4-.1-.5.4-.7 1-.3 1.6.6.8 1 1.8 2 2.2.5.2 1 .4 1 1.1 0 .5-.4.7-.8.8-.6.2-1.1.2-1.6-.3-.1-.2-.3-.4-.4-.6-1-1.2-1.9-2.5-3-3.7-.8-.9-2.1-1.4-2.9-.3-.7 1 .3 1.7 1 2.4 1 1 2.1 1.9 3.1 2.9.3.3.8.7.5 1.2-.2.4-.7.4-1 .5-.6.2-1.1 0-1.4-.6-.5-.7-1.1-1.4-1.9-1.8-.8-.4-1.6-.3-2 .5-.5.9.5.9.9 1.2.6.4 1.1.9 1.5 1.5.3.5.9 1 .3 1.6-.6.6-1.3.4-1.9-.1-.3-.3-.6-.7-.9-1.1-1-1.3-1.8-2.6-3.5-3.1-.6-.2-1.1-.4-1.6.2-.5.6.1 1 .3 1.4.7 1.3 1.8 2.2 2.8 3.1.4.3.9.7.5 1.3-.4.5-.9.6-1.5.3-.5-.2-.9-.6-1.2-1-1.1-1.4-2.3-2.8-3.5-4.3-.7-.9-1.5-1.3-2.6-1.1-1 .1-1.3.6-.7 1.6.6 1 1.5 1.4 2.5 1.8.5.2 1.3.2 1.2 1 0 .7-.7.8-1.2 1.1-.9.6-1.8-.1-2.6-.3-.5-.1-1-.2-1.4.3-.3.3-.2.7.1 1 1 1.2 1.5 2.9 3.1 3.5.6.2 1.1.9 1.5 1.4.6.7.4 1.2-.5 1.4-1.9.4-2.8-1-3.5-2.3-1.1-2.2-2.9-3.3-4.7-4.7-.7-.5-1.4-.3-2.1-.1-.4.1-.8.2-.9.7-.1.5.3.8.6 1 .9.6 1.9 1.1 3 1.4.7.2 1.8.2 1.6 1.2-.1 1-1.3.8-2 .9-.6.1-.9-.4-1.3-.7-1.6-1-2.6-2.9-4.6-3.1-.7-.1-1.1.1-1.3.8-.2.8.2 1.1.9 1.3.7.1 1.4.2 2 .3 1.4.3 1.6 1.5 1.9 2.7.1.5.3 1-.2 1.3-1 .7-1.9.1-2.7-.4-.7-.4-1.4-.9-2.2-.9-.6 0-1.1.2-1.2.8-.1.6.2.9.8 1 1.1.3 2 1 2.9 1.6.7.5.5 1.3.2 2-.2.7-.5.8-1.3.6-1.2-.3-2.2.3-2.7 1.6-.2.5-.1 1.3-.8 1.2-.6 0-1.4-.3-1.6-1-.4-1.3-1.5-1.8-2.3-2.7-2.9-3.3-6.9-4.8-10.2-7.5-1.6-1.3-2.6-.9-3.8.6-.5.7-.5 1.1.2 1.6 3.6 2.2 7.1 4.5 10.8 6.5 2.1 1.1 4.2 1.9 4.5 4.9.1 1.2 1.3 1.7 2.3 2.1.9.3 1.5 1.1 1.2 2.1-.3.9-1.2 1.2-2.2 1.1-1.2 0-1.2-.9-1.1-1.8.1-.7-.1-1.4-.7-1.7-1.2-.6-2-1.7-2.8-2.6-1.4-1.6-2.8-3-4.7-3.9-2.1-.9-4-2.2-5.8-3.8-.7-.7-1.6-1.2-2.4-1.7-1.1-.7-2-.2-2.6.9-.7 1.3.5 1.4 1.1 1.7 1 .6 2 1.2 2.9 1.9 2.4 1.6 4.6 3.5 7.3 4.6 1.6.7 3.2 1.9 4.1 3.6.6 1.1 1.1 2.1 2.1 2.8.6.4 1.3 1.2.6 1.9-.6.6-1.4.3-2.1-.4-1.4-1.2-1.8-3.2-3.2-4.2-3.1-2.2-6.3-4.3-9.5-6.3-.4-.3-1.1-.4-1.4 0-.8 1.1-.1 2.4.1 3.5.1.7 1.1.9 1.8.6.7-.3 1.6-.7 2.1-.1 1.2 1.3 2.7 2 4 3.1.4.3.6.7.5 1.2-.1.8-.8.6-1.2.6-.9.1-1.7 0-2.5-.3-.7-.2-1.5-.3-2 .5-.9 1.4-2.2 2.2-3.7 2.7-.7.2-1.1.8-1.5 1.4-2 2.6-2 2.6-4.9 1.6-.3-.1-.6-.1-.8 0-2.1.3-3.6-.9-5-2.3-.9-.9-.9-1.7.3-2.4 1-.6 2-.7 3.1-1 .8-.2 1.1-.8 1.1-1.6-.1-.7-.6-1-1.2-1-.8-.1-4.3 1.9-4.6 2.6-1.2 2.9-1.2 2.9-4.2 2.9-1.5 0-3.4.3-4.4-.9-1.5-1.8-3.7-2.6-5-4.5-.7-1-1.7-1.3-2.6-.1-.9 1.3-1.7.8-2.3-.2-.6-1-1.6-1.5-2.4-2.3-.5-.5-1.3-.5-1.7-.1-.5.5.1 1 .4 1.4.6.9.8 2.1 1.7 2.9.5.5.6 1 .1 1.6-.5.6-1.1.3-1.5-.1-.5-.6-.9-1.2-1.4-1.8-.7-.7-1.5-1.3-2.3-.3-.7.8-.6 1.7.3 2.5.8.7 1.7 1 2.7.7 1.3-.3 2.4-.1 3.3.9 1.6 1.8 3.5 3.3 4.9 5.3 1.3 1.8 3.5 2.5 5 1.7.6-.4 1-.7.1-1.2-1.4-.7-2.5-1.9-3.6-3.1-1.3-1.5-3-2.6-4.1-4.3-.2-.3-.6-.7-.2-1.1.4-.4.9-.7 1.4-.4.3.2.6.5.9.8 2.1 2.4 4.3 4.7 6.7 6.6 1 .8.8 1.6.6 2.4-.2.9 0 2.1-1.5 2.5-3.2.9-5.9-.5-8.4-4.4-.6-.9-.9-1.5-1.6-.2-.4.7-1 .8-1.6.8-.4 0-.8.1-.9.7 0 .4.2.7.6.8 2.2.9 3.5 3 5.4 4.4.7.5 1.1 1.2.9 2.2-.2.9.1 1.1.8 1 2-.3 3.4.7 4.9 2 1.9 1.7 3.8 3.7 6 4.6 2.9 1.2 4.8 3.4 6.8 5.6.4.5 1.3 1.3.3 1.9-.8.5-1.9.6-2.4-.6-.7-1.9-1.5-3-3.6-3.8-3.9-1.4-6.8-4.6-10-7.3-.6-.5-1.3-1.5-2-1.3-1.2.4-2.9.9-3.3 1.9-.9 2.1-1.8 1.1-2.8.4-2-1.5-3.7-3.2-5.4-5-1.7-1.7-3-3.8-4.9-5.3-1-.8-2-.7-2.7.2-.7 1-.2 1.8.5 2.5 1 .9 2 1.8 2.9 2.8 3.2 3.3 6.4 6.5 10 9.3 3.4 2.5 6.6 5.4 10.1 7.7.7.5 1.2.7 2 .3 1.1-.6 2-.3 2.7.7.4.5.7 1.1.2 1.6-.5.5-1.2.4-1.7-.1-.2-.2-.4-.6-.7-.8-.3-.3-.6-.7-1 0-.8 1.5-1.8 1.2-2.8.3-1.3-1.1-2.7-2.2-4-3.4-2.8-2.3-5.7-4.6-8.5-6.9-2.3-1.9-4.2-4.2-6.5-6.1-1.9-1.5-3.6-3.2-4.8-5.4-.6-1.1-1-1-1.6-.3-1.4 1.7-3.8 2-4.8 4.2-.2.4-.9.5-1.4.7-.5.2-1.2 0-1.1.8 0 .6.5 1.1 1 1.1 1.7.1 2.7 1.5 3.7 2.7.5.6 1 1.2 1.6 1.6 3.3 2.8 6.5 5.7 9.5 8.7 3.6 3.4 7.8 5.8 11.4 9.1 1.5 1.4 3.6 3.2 5.7.5.3-.4 1.1-.5 1.4.2.3.8.1 1.5-.6 1.9-.3.2-.8.1-1.2.3-.6.2-1.3.2-.7 1.3.5.7-.2.8-.6.8-.6.1-1.1-.3-1.6-.6-5.6-3.9-11.1-8.2-16.3-12.8-4.4-3.9-8.7-7.8-12.9-11.9-1.4-1.4-2.6-1.1-4-.7-1.2.3-1 .9-.3 1.6 2.4 2.4 4.8 4.9 7.2 7.2 3.5 3.3 6.9 6.8 10.7 9.8 3.3 2.6 6.6 5.4 10.1 7.6 1.5 1 2.9 2.3 4.6 3 .6.2 1.6.2 1.4 1.2-.2.9-1.1.6-1.8.7-.6 0-1.3.1-1.6-.3-1.1-1.4-2.7-1.7-4-2.7-3.2-2.6-6.4-5.3-9.7-7.7-3.6-2.5-6.9-5.6-9.9-8.8-4.5-4.8-9.7-9.1-13.7-14.4-2.4-3.1-5-6-7-9.4-3.3-5.5-6.9-10.9-9.3-17 .4-1.8-1.3-3.3-.6-5.5 1.1.9 2.1 2 2.8 3.5.9 2.1 2 4.2 3.2 6.1 4.3 7 8.1 14.3 13.9 20.1.8.8 1.3 2.1 1.9 3.2.4.7.9 1 1.6.8.8-.2.7-.9.5-1.5-.2-.6.1-.9.4-1.3 1.1-1.4 2.1-2.8 3.6-3.8.6-.4 1.5-1.2.3-1.7-3.3-1.3-5.3-4.2-6.9-6.9-2.9-5.1-6.5-9.7-9.2-14.9-1.2-2.4-2.9-4.5-3.9-6.9-.5-1.2-1.8-1.7-1.9-2.8-.2-1.8-1.1-3.2-1.8-4.6-1.3-3-3-5.9-3.7-9-.9-4.1-2.8-7.9-3.7-12-.1-.8-.4-1.5-.8-2.2-.8-1.3-1.3-2.7-.8-4.3.5-1.6-.6-2.5-1.2-3.6-.3-.5-1.2-1-1.8-.6-.6.4-.3 1.3-.1 1.9.3.9 1.2 1.6 1.1 2.6 0 2.5.5 4.9 1.2 7.3.9 2.9 1.2 5.9 2.2 8.7.1.4.2.9-.2 1.2-.4.3-.8.1-1.1-.2-1.1-1-1.9-2.1-1.7-3.7.3-1.7-.4-3.2-1.2-4.6-.5-.7-1.3-.7-1.8-.4-.8.4-.2 1.1.1 1.5.4.6.7 1.3.7 2-.1 2.9 1.7 5.1 2.6 7.6.3.7.8 1.2 1.5.8 1.5-1 2.5-1.2 2.6 1.2l.1.1c2.2 2.5 3.5 5.3 3 8.8-.1.6.1 1.3.6 1.7 3 2.7 3.5 7.1 6 10.2 1.4 1.7 1.5 4.1 3.1 5.7 2.1 2.1 3.5 4.9 4.8 7.6.6 1.1 2 1.4 2.4 2.5 1 3.1 3.5 4.7 5.3 7 .6.7 1.2 1.4.6 2.1-.7.7-1.5.3-2.3-.5-3.4-3.3-5.9-7.3-8.6-11.3-1.4-2.1-3.1-4-4.1-6.4-.7-1.7-1.5-3.3-2.4-4.8-3.3-5.5-6-11.3-8-17.4-.5-1.7-1-3.4-2.4-4.6-.4-.3-.9-.8-1.4-.4-.5.4-.3 1-.2 1.5.5 1.7.4 3.7 1.7 5.2.3.4.5 1.4 0 1.7-.7.5-1-.5-1.4-.9-.6-.8-1-1.8-2.1-2-.3-.1-.7-.3-1 .1-.3.3-.1.7.1 1 .5.9 1.1 1.9 1.6 2.8 1.1 2 1.5 2.2 3.1.7.4-.3.8-.6.9-.1.7 2.1 2.6 3.7 2.2 6.2zm150.1-222.1c-.9.1-2 .1-3.1.2-1 .1-1.4.6-1.2 1.7.2.9.4 1.9.6 2.9.2.7.3 1.4-.6 1.5-.8.1-1.7 0-1.7-1.2 0-1-.2-2.1.1-3.1.4-1.3 0-2-1.3-1.9-3.1.2-6.2.2-9.2.5-6.4.6-12.7 1.6-19.1 2.4-1.5.2-2.9.6-4.3 1.3-1.6.9-3.3 1.4-5.1 1.6-2.9.3-5.5 1.4-8.3 1.9-2.2.4-2.9 3.2-1.5 4.8.7.8 1.1 1.7 1.6 2.6 1.6 3.2 2.9 6.6 4.2 9.9 1.6 4.2 4.2 8 5.5 12.4.6 2 1.8 3.6 2.6 5.4 1.1 2.3 1.3 4.9 2.6 7 1.1 1.7 1.9 3.4 2 5.5 0 .3.1.6.3.9 1.8 3.4 3.2 7 4.9 10.4 1.9 3.9 3.8 7.9 5.2 12 .9 2.7 1.7 5.6 3.2 7.8 2.2 3.2 2.7 7 4.4 10.4 1.7 3.5 3.5 7 4.6 10.9.3 1.1 1 2 1.5 3.1.4 1 1.1 1.6 2.1 1.6 2.6.1 5.2.3 7.4-1.8 1.3-1.3 2.9-2.4 4.5-3.3 4.1-2.2 7.9-4.8 11.8-7.3 1.7-1.1 2.3-2.6 1.5-4.5-.5-1.1-.1-1.4.9-1.5.7 0 1.2.2 1.7.7 1 1.2 2.3 1.1 3.5.4.9-.5 1.6-1.2.3-2.1-.7-.5-1-1.3-1.7-1.7-.8-.5-.5-1.4-.1-2.1.5-1 1-.3 1.6 0 .8.4 1.2 1 1.5 1.9.4 1.4 1.6 1.3 2.5 1 1.1-.3 2.3-.9 2.5-2.4.1-.4-.2-.8-.6-1.1-1.1-.9-1.9-2.4-3.5-2.6-.6 0-.9-.7-1.1-1.3-.2-.6-.4-1.4.2-1.9.7-.5 1.6-.4 2 .2 1 1.6 2.7 2.6 3.7 4.2.7.9 1.6.9 2.5.7 1-.2 1.8-.7 2.3-1.7.2-.4.1-.8-.2-1-2.1-1.7-3.8-4-6.5-4.9-.9-.3-1.8-.8-1.3-1.9.5-1.4 1.5-.7 2.3-.2 2.2 1.4 4.3 2.8 6.1 4.7.5.5 1 .8 1.6.9.8.2 1.7.1 2.1-.8.5-.9-.2-1.5-.8-2-2.4-2.1-4.6-4.5-7.5-5.9-.9-.4-1.3-1.4-.9-2.3.4-.9 1.3-.6 1.9-.2.7.4 1.6.9 2.1 1.6.7 1.1 1.6 1.9 2.6 2.6 1.2.8 2.1 1.8 3 2.9.8 1.2 2 1.5 3.4 1 .6-.2.9-.6 1.1-1.3.2-.8-.3-1.1-.8-1.4-.6-.3-.9-.9-1.4-1.3-2.7-2.2-4.8-5-8-6.4-.5-.2-1-.7-1.3-1.1-.6-.7-.4-1.2.4-1.4.7-.2 1.4-.3 2 .2 3.2 2.6 6.7 4.8 9.2 8.2 1.2 1.6 2.5 1.4 3.9.7.5-.3 1.1-.6 1.1-1.3.1-.7-.5-1-1-1.3-1.5-.9-2.9-2-3.9-3.4-1.3-1.8-2.8-3.1-4.7-4.1-1.1-.6-2.3-1.1-3.2-2-.6-.5-1.1-1.1-.6-1.9.4-.8 1.2-.4 1.7-.1 1.7 1 3.5 1.9 5 3.2 2.2 1.9 4.3 3.9 6.3 6.1 1.5 1.6 4.2 1.8 5.6.3 2.3-2.3 5.1-4 7.7-6 .7-.6 1.3-1 1.2-2-.1-.7.1-1.2.8-1.3 2.4-.3 3.7-2.5 5.6-3.6 1.5-.8 2.6-2.3 4.3-2.9 1.4-.5 1.5-1.2.3-2.3-.5-.5-.9-.9-.7-1.8.2-1.1-2.3-2.9-3.3-2.4-.6.2-1.2.6-1.3 1.4-.1.9.4 1.3.9 1.8.7.6 1.7 1.2 1.5 2.2-.1 1-1.2 1-1.9 1.3-1 .4-1.3-.4-1.7-1.1-1.1-1.6-1.2-3.7-2.7-5.2-4.1-4.2-8.5-8-13-11.8-.7-.6-2.3-1.2-1.3-2.4 1-1.3 2 .3 2.9.9 3 2.1 5.2 5.2 8.3 7.1 1.1.6 2.1 1.5 2.8 2.7 1.2 2.2 2.3 2.2 4.7 1.4 1.2-.4 1.2-1 .2-1.9-3.6-3.2-7.1-6.4-10.6-9.5-.8-.7-1.6-1.3-2.6-1.7-.9-.3-1.8-.8-2.6-1.3s-1.2-1.3-.7-2.1 1.2-.3 1.8.1c4.8 2.6 8.7 6.5 13 9.9.8.6 1.4 1.3 1.9 2.1.9 1.4 1.4 3.2 3.4 3.5.2 0 .4.3.5.5.4 1.5 1.6 1.9 2.8 2.2 1 .3 1.4.8.5 1.8-.3.3-.9.3-.7.8.2.5.8.2 1.2.3 1.2.2 2-.5 2.6-1.5.6-1-.4-1.4-.7-2-1.9-3-4.4-5.4-6.8-7.9-1.3-1.4-2.6-3.4-5-2.9-.4.1-.9-.3-.8-.7.3-2.4-1.4-3.2-2.8-4.1-2.8-1.9-5.2-4.6-8.1-6.3-.6-.4-1.3-1.1-.7-2 .6-.8 1.5-.6 2.3-.1.3.2.5.5.8.7 2.7 2.2 4.7 5.3 8.1 6.4.5.2.8.8 1.2 1.3 1 1.1 1.6 2.7 2.9 3.5 3.9 2.1 6.5 5.7 9.1 9.2.5.6.9 1.3 1.4 1.8.9 1 2.8.9 3.7-.3 1-1.3-.4-1.8-1-2.4-1.3-1.5-3-2.7-4.1-4.3-2.3-3.4-5.6-5.6-8.3-8.5-.7-.7-1.4-1.4-2.1-2.2-1.3-1.3-3-1.9-4.2-3-2.3-2-4.4-4.3-7.3-5.5-.6-.2-.9-.9-.5-1.7.4-.7.9-.4 1.5-.2 1.1.4 2 1.5 3.2 1.6 1.3.2 2.2.8 2.7 2.2.3.8 1 1.6 1.7 2 2.8 1.6 5 4 7.3 6.2 4.3 3.9 8.4 8 12 12.5.9 1.1 3.1.6 3.6-.7.2-.4 0-.7-.3-.9-2.6-2.2-4.5-5.2-6.9-7.6-4.6-4.7-9.5-9-14.5-13.2-2.5-2.1-5.3-3.5-7.9-5.3-1.5-1.1-1.6-1.2-.3-2.6.4-.4.9-.8.7-1.5-.2-.7-.9-.9-1.5-1.1-.7-.2-1.2.1-1.4.9-.4 1.1-1.3 1.4-2.3 1.5-1.3.1-2.5-.2-3.6-.9-2.6-1.6-5.1-3.3-8.3-3.5-2.3-.1-4.3-1-6.3-2.2-1.8-1.1-3.8-1.9-5.9-2.4-1.5-.4-3.2-.5-4.7-1-2.7-.9-5.4-1.8-8.2-2.3-5.6-1.1-10.8-2.1-16.2-2.2zM213 341.1c.5 2.1 1 4.6 1.3 7 .3 2.4 1.5 4.4 2.7 6.4 1 1.6 2 1.5 3-.1 1.4-2.2 2.8-4.5 4.3-6.6 2.3-3.3 4.4-6.6 6.7-9.9 2.2-3.1 4.1-6.5 6.3-9.7 2.7-3.9 5.5-7.9 8.4-11.6 3.4-4.5 6.7-9.1 9.9-13.7 1.4-2 3.1-3.9 4.6-5.8 2.7-3.4 5-7.1 7.8-10.4 2.4-2.8 4.6-5.7 6.9-8.5.6-.7 1-1.5.7-2.5-.3-1.1.2-1.3 1-1.2.9.1 1.5-.3 2.1-1.2 1.8-2.7 4.5-4.6 6.3-7.3 2.3-3.3 5.5-5.7 8.1-8.8 1.7-2.1 3-4.9 5.8-6 .6-.2 1.1-.9.7-1.6-.4-.7-1.2-.3-1.7 0-1 .8-2.1 1.5-2.9 2.5-2.1 2.8-5.1 4.4-7.5 6.8-2.2 2.2-4.4 4.5-7.3 5.9-1 .5-1.7 1.2-2.1 2.3-.6 1.4-1.5 2.5-3.1 2.5-.3 0-.7.2-.9.5-2.9 3.1-6.9 4.8-9.8 7.8-1.5 1.6-3.5 2.5-5.1 4-2 1.9-4.1 3.5-6.2 5-3.4 2.6-6.5 5.5-10.3 7.4-.7.4-1.4 1-2 1.7-1.7 1.7-3.2 3.8-5.2 4.8-3 1.5-5.6 3.5-8.4 5.2-3.2 2-6.3 4.3-9.5 6.5-3.3 2.3-6.8 4.4-10.2 6.5-2.7 1.7-5.7 2.8-8.2 4.8-.5.4-1.3.6-1.2 1.4.1.7.8.9 1.4 1.2 2.7 1.5 5.5 2.8 7.4 5.5.8 1.2 1.7 1.9 3.1 2.2 1 .2 1.7.9 1.7 2.2 0 .9.1 1.9 1 2.4.6.6.8 1.2.4 2.4zM49.6 371.6h.2l-.3-4.5c0-.6-.2-1.6-.8-1.3-1.5.7-1.5-.4-2-1.3-.6-1.2-2-1.2-2.9-.8-.9.4.3.9.5 1.4.1.2.1.5 0 .7-.7 1.8 0 2.5 1.7 2.4 1.3-.1 1.6.8 1.5 1.9-.1 1.1.3 2.4-1.7 1.6-1.5-.6-2.5 1.2-2.1 3.4.2 1 0 2.6 1.8 1.5.6-.4 1.3-.4 1.9.2.4.3.3.8.1 1.2-.4.7-1.1.8-1.8.7-.1 0-.2-.1-.3-.1-.8-.3-1.2.3-1.5.9-.4.7.2 1 .6 1.2.4.3.7.7.5 1.1-.5 1.6.2 2.9.9 4.2.3.5.1 1.1 0 1.6-.3 2-.3 4 1 5.7.5.6.6 1.4.5 2.1-.2 1.2.1 2.3.5 3.4.7 2.3 1.5 4.6 2.1 6.9.8 2.9 2.3 5.5 2.5 8.6.1 1.6.3 3.2 1.4 4.5 1.8 2.1 3.1 4.7 4.1 7.3 1.2 3.1 2.9 6.1 4.5 8.9 2.1 3.6 4.1 7.4 6.6 10.8 1.2 1.6 2.5 3.1 3.2 5.2.4 1.3 1.1 2.3 2.3 2.8.5.2.9.6 1.1 1.1.6 1.4 1.9 2.1 2.8 3.2.8.9 2 .6 2.7-.4.7-.9.2-1.7-.7-2.3-.3-.2-.7-.4-.9-.8-1.9-2.6-4.1-5-6-7.7-2.5-3.7-5-7.4-7.3-11.3-1.1-2-2-4.1-3.1-6.1-1.5-3.1-3.2-6.1-4.7-9.2-1.8-4-3.5-8.1-4.9-12.3-.9-2.6-1.9-5.2-2.7-7.9-1.6-5.3-2.7-10.8-3.5-16.3-.1-.8-.1-1.6 0-2.4 0-.4.2-.9.7-.9.4 0 .4.5.5.8.5 2 1.1 4.1 1.5 6.1 1.8 8.7 4.5 17.1 7.9 25.3 1.8 4.2 3.6 8.3 5.6 12.4 2.2 4.2 4.3 8.4 6.7 12.4 3.4 5.9 7.5 11.2 11.7 16.5.9 1.2 1.9 1.2 2.7.1 1.7-2.5 4.1-4.2 6.1-6.3 1.1-1.2 1.1-1.6-.3-2.3-1-.5-1.5-1.1-.9-2.3.4-.8.2-1.5-.4-2.1-.5-.5-1-1-1.4-1.6-1.9-3.3-4.2-6.4-6.3-9.7-3.3-5.2-6-10.7-8.9-16.1-2.2-4.2-3.1-9.2-5.6-13.3-1.2-1.9-1.1-4.3-2-6.3-1.6-3.5-2.1-7.4-3-11.1-.8-3.3-1.5-6.8-2.1-10.2-.6-3.2-.5-6.4-1.1-9.5-.5-2.6 0-5.4-.6-8-.7-2.7.5-5.1.4-7.7-.3-4.7-.2-9.5.4-14.3.6-4.9 1.2-9.8 2.6-14.6.8-2.8 1-5.7 2.2-8.4.2-.4.4-1-.2-1.3-.5-.3-1-.1-1.4.3-.5.5-.7 1.1-.7 1.8 0 .6.1 1.2-.2 1.8-1.6 3.2-3.1 6.3-2.9 10.1 0 .5-.2.9-.4 1.4-.5 1-.8 2.1-1 3.3-1.4 6.1-1.3 12.3-1.5 18.5-.1 2.9-.2 5.8 0 8.7.4 5 1 10 1.6 15 .5 4.4 1.1 8.8 2.2 13.1 1.6 5.6 2.8 11.4 4.8 16.9 1.6 4.5 3.2 9 5.3 13.2 2.6 5.1 5 10.3 7.9 15.2 3.3 5.5 6.3 11.2 10.6 16 .4.5.6 1 .9 1.5.2.3.5.6.2 1-.2.3-.6.3-1 .2-1.2-.3-2-1.2-2.7-2.1-1.4-1.9-2.9-3.8-4.1-5.9-1.8-3.4-4.5-6.1-6.1-9.6-.6-1.3-1.2-2.6-2-3.8-1.4-2.1-2.6-4.3-3.7-6.5-1.1-2.3-2-4.7-3-7.1-1.3-3.2-2.9-6.3-3.9-9.7-1.1-3.7-2.4-7.3-3.3-11.1-.8-3.2-2.2-6.3-2.5-9.7-.2-2.9-.9-5.7-1.3-8.6-.9-5.5-1.8-10.9-1.3-16.4 0-.3 0-.7-.1-.9-1.3-1.3-.9-2.9-.6-4.4.2-.9.5-1.9.3-2.7-.7-3.1-.4-6.2-.4-9.3 0-2.6-.2-5.2 1.1-7.6.6-1.1.5-2.7-.1-3.7-.7-1.1-.3-1.8.3-2.6.7-.9 1.3-1.8 1.7-2.9.2-.5.8-.9.3-1.4-.4-.4-1-.2-1.5-.2-.7 0-1 .5-1.2 1.1-.5 1.1-1.1 2.1-1.6 3.2-.4.7-.9 1-1.7.9-1.7-.2-3.5 1.1-3.9 2.7-.2.7.2 1 .8 1.1 1.2.1 2.1-.3 2.7-1.5.2-.4.6-.8 1.1-.6.5.2.8.7.7 1.3-.1 1-.3 2-.5 3.1-.7 3.9-1.7 7.6-1.5 11.7.1 2.4.3 4.8.4 7.1 0 1 .4 2.6-1.1 2.9-1.4.3-1.9-1-2.3-2.1v-.2c-.1-1-.8-.8-1.4-.8-.8 0-.9.5-.9 1.2-.1.9.3 1.6.9 2.2.6.6.9 1.3.2 2.2-1.6 2-1.2 3.7.9 5 .6.4 1.4.6 1.4 1.7 0 .4.4.6.7.6.5-.1.5-.6.6-1 .1-1 0-2-.4-2.9-.5-1-.4-2.1-.5-3.2-.2-1 .4-1.2 1.1-1.2.6 0 1.4-.2 1.4 1 .1 2.5.4 5.1.5 7.6 0 1.7.8 3.3.8 5 .2 5.4 1 10.7 2.4 15.9 1.3 4.9 2.9 9.7 4.3 14.5.9 2.9 1.7 5.9 2.9 8.7 1.8 4.1 4.3 7.9 5.3 12.4.2.8.7 1.4 1.1 2 1.3 2 3 3.7 3.9 5.9.7 1.8 1.1 3.7 2.8 4.9.4.3.6 1 .7 1.6.2 1.1.8 2 1.4 2.9.9 1.1 1.7 2.3 2.5 3.4 1.9 2.5 3.4 5.3 5.7 7.4.8.7 1.2 1.8.5 2.5-.6.6-1.5 0-2.1-.7-2.4-3.2-5-6.3-7.2-9.6-2.6-3.8-5.5-7.3-7-11.8-.9-2.7-3.3-4.4-3.9-7.5-.4-1.9-1.8-3.9-2.8-5.9-1.6-3.2-3-6.5-4.1-9.9-1.3-3.6-2.6-7.2-3.5-11-.6-2.6-1.5-5.1-2.2-7.6-.7-2.6-1.1-5.3-1.7-8-.8-2.3-1.2-4.8-1.7-7.4zm87.8-95.6c.1-.5-.5-1.3.4-1.7.6-.2 1.1-.1 1.6.4 1.5 1.5 1.3 3.2-.5 4.3-.4.3-.9.6-1.2 1-2.5 2.6-5 5.3-8 7.2-.4.2-1 .3-.9.9.1.6.7.7 1.1 1 1.9 1 3.1-.3 4.3-1.6 1-1.1 2.1-2.3 3.2-3.2.6-.5 1.6-.6 2 .1.5.8-.4 1-.9 1.4-1.9 1.8-3.8 3.6-5.7 5.5-.4.4-1 .9-.2 1.4 1.3.9 3.8.4 4.9-.9 1.6-1.8 3.2-3.7 5-5.2.5-.4 1.2-.7 1.7-.1.5.7-.1 1.1-.5 1.5-1.8 2.1-4 3.8-5.6 6-.3.4-1.3.4-1 1.2.3.7.9 1.1 1.6 1.2.9.2 1.6 0 2.4-.6 1.6-1.3 2.7-3.1 4.4-4.3.6-.4 1.4-.7 1.9 0 .5.8-.2 1.3-.7 1.8-1.6 1.5-3.2 2.9-4.8 4.4-.5.4-1 1-.7 1.7.3.8 1 .9 1.7 1 .8 0 1.3-.4 1.8-.9 1.8-1.8 3.6-3.6 5.5-5.2.5-.4 1.3-1.3 1.9-.5.7.8 0 1.7-.6 2.4-.2.2-.5.4-.7.6-1.7 1.8-4 2.9-5.4 4.9-.3.4-1.4.5-1 1.2.4.7 1 1.6 1.8 1.8 1 .3 1.8-.3 2.4-1 1.4-1.5 2.9-3 4.3-4.4.6-.6 1.5-1.4 2.2-.4.6.9-.2 1.7-.9 2.3-1.5 1.2-2.8 2.6-4.5 3.6-.6.4-1.6 1-1.4 1.8.2.8.8 1.7 1.8 2.1.8.3 1.7.3 2.2-.5 1.4-2 3.5-3 5.2-4.7.9-.9 1.2-1.6.6-2.8-1.2-2.7-2.6-5.2-3.8-7.9-2.8-6.2-5.5-12.5-8.4-18.7-2.4-5.1-4.7-10.3-7.3-15.4-4-8.1-7.5-16.5-11.3-24.7-.8-1.7-1.8-2.1-3.2-1.3l-11.4 6.6c-1.2.7-2.3 1.6-2.8 3-.3.7-.7 1.4-1.3 1.9-3.7 2.6-6.8 6-9.7 9.6-.8 1-1.4 1.9-.4 3 .9 1 2 1 3.1.1 1.3-1.2 2.4-2.5 3.5-3.9 1.4-1.9 3.2-3.3 5.2-4.5.3-.2.8-.4 1.1.1.3.5 0 .9-.3 1.3-.7.6-1.4 1.1-2 1.7-2.1 2.1-4.1 4.4-6.2 6.5-.8.7-.8 1.4-.6 2.2.3 1 1.1 1.3 1.9 1.1.9-.2 1.9-.6 2.5-1.5 1.5-2 3.3-3.7 4.8-5.7.8-1.1 2-1.6 3.2-2 .3-.1.7-.1.9.3.2.4-.1.7-.4.9-1 .9-2 1.8-2.9 2.8-1.9 2.2-3.8 4.5-6 6.4-.4.3-.7.5-.3 1.2.8 1.4 2.6 2 3.7.9.9-1 2-1.7 2.8-2.9 1.5-2.2 3.6-3.8 5.7-5.3.4-.3 1.2-.7 1.5-.1.5.7-.1 1.2-.6 1.6-3.4 2.5-5.6 6.3-8.9 8.9-1.1.9-.6 2.4.8 2.6 1 .2 1.9 0 2.8-.9 2.5-2.8 5.1-5.5 7.6-8.2.4-.5 1.1-.7 1.7-.7.4 0 .9 0 1 .5.2.6-.2.9-.5 1.2-.5.4-1.1.7-1.5 1.1-2.3 2.5-5 4.5-7 7.3-.4.6-1.5 1.1-.8 2.1s1.7 1.7 3 .9c.8-.5 1.6-1.1 2.2-2 1.3-2.1 3.4-3.3 5-5.2.5-.6 1.7-1.7 2.3.1.2.4.5.4.9.3.6-.1 1.2-.3 1.8-.4 1-.2 2.7 1.2 3 2.6.3 1.5-.9 1.4-1.7 1.7-1.2.3-1.9 1.4-2.5 2.3-.4.6-.9 1.7-.3 2.3.7.9 1.6.1 2.3-.4.6-.4.9-.8 1-1.6.1-.9.9-1.1 1.6-1 .8.1 1.8-.4 2.3.6.4.7 0 1.6-.4 2.3-.4.7-1.2.9-1.9 1.2-.7.2-1.7.2-1.3 1.4.4 1.1.8 2.4 2.1 2.6 1.5.5 3.7-1.9 3.7-3.6zm-24.6 91c.1-.7 0-1.2-.1-1.8-.4-1.3-1.7-2-3-1.4-1.3.6-.7 1.5-.3 2.4.2.4.3.9.4 1.4.3 4.2 2.2 7.9 3.3 11.8 1 3.5 2.6 6.7 4.2 10 1.1 2.3 2.1 4.7 3.5 6.8 1.7 2.7 3.4 5.4 5.7 7.6.4.4.6 1 .2 1.5-.4.5-.9.6-1.4.3-.5-.3-1-.6-1.3-1.1-4.1-5.6-7-11.9-10.1-18.1-1.6-3.3-2.3-6.9-3.8-10.3-.8-1.8-1.5-3.6-1.7-5.7-.2-2.4-.6-4.9-1.9-7-.4-.6-.4-1.5-.2-2.3.1-.6.1-1.2.1-1.8-.2-3.9-.8-7.7-.9-11.6-.1-1.9.5-3.6.4-5.4-.2-2.6.2-5.2.4-7.8.4-5.2 2.4-10.1 3.5-15.2.2-1.1.4-2.2.9-3.1 1.9-4.2 3.9-8.3 5.9-12.5.5-1 1.2-1.9 1.6-3 .5-1.8-.9-1.9-1.7-2.4-.9-.5-1.4 0-1.8 1-.8 1.9-1.8 3.8-2.8 5.6-2.3 4.5-4.1 9.2-5.4 14.1-1.1 4-1.7 8.2-2.6 12.2-.6 2.7-1.1 5.4-1.2 8.3-.2 4.3.3 8.7-.6 13-.1.5 0 1 .2 1.4 1.5 3.3 2 6.8 1.8 10.5 0 .7.1 1.5.2 2.2.7 5.1 2.1 10.1 3.6 15 1 3.2 1.9 6.3 3.6 9.3 1.4 2.5 2.5 5.4 3.9 8 1.6 2.9 3.3 5.8 6 7.8.6.5 1.1 1.1.5 1.8-.5.6-1.3.8-2.1 0-3.1-3-4.6-7.3-7.2-10.7-1.4-1.8-2-4-2.7-6.1-1.1-3.2-3.6-5.6-3.7-9.5-.1-2.6-1.2-5.4-3-7.6-.4-.4-.3-1-.4-1.5-.4-1.9 0-3.9-.5-5.7-.8-3.1-1.2-6.2-1.2-9.4 0-1-.5-1.7-1-2.4-.6-.7-1.4-.8-2.2-.4-.8.4-.5 1.2-.3 1.8 1.3 5.2.1 10.8 2.5 15.8.1.2.1.5 0 .7 0 1.1.2 2.2.6 3.2 2.1 4.7 2.9 9.9 5.3 14.5 3.8 7.4 7.1 15.1 13.1 20.8.5.5 1.1 1.1.7 1.9-.5.8-1.3.4-2 .3-.5-.1-.7-.6-1-.9-3-4-5.7-8.3-8.1-12.7-1.1-2.1-2.3-4.2-3.2-6.4-1.2-2.7-2-5.5-3.3-8.1-.6-1.1-1-2.2-1.3-3.4-.5-2.1-1-4.2-1.6-6.3-.8-2.4-1.1-5.1-3.5-6.4-.4-.2-.7-.8-1.2-.5-.5.3-.3.9-.2 1.4 1.4 4.7 2.1 9.6 4 14.1.9 2.2 1.2 4.8 2.3 6.8 2.8 4.8 4.6 10.2 7.6 15 2.4 3.9 4.8 7.7 7.8 11.2.8.9 1.6 1.1 2.4-.1 1-1.3 2.2-2.3 3.2-3.6 2.3-3.1 4.6-6.2 7.5-8.9.7-.6 1.6-1.7.6-2.8-3.4-3.9-6.3-8.2-8.6-13-1.8-3.9-3.3-7.9-4.9-11.9-.7-1.8-.5-3.7-1.6-5.5-1.3-1.5-2-3.3-1.9-5.2zm221.5-49.1c-.1-.6 0-1.4-.2-2.1-2.1-5.7-2.6-12-5.4-17.5-1-1.9-1.3-4-2.1-5.9-1.5-3.3-3.2-6.7-4.2-10.1-1.6-5.4-5.3-9.5-7.5-14.5-1.5-3.6-3.6-7-5.9-10.2-1.4-1.9-2.7-3.7-3.7-5.9-.4-1-1.5-1.6-2.6-1.2-.7.3-1.6.7-1.6 1.7 0 1.2 1 1.7 1.9 2.1.7.3 1.2.6 1.6 1.3 2.1 3.6 3.9 7.4 6.4 10.7 2.1 2.9 2.9 6.8 5.5 9.3.3.3.5 1 .5 1.5 0 1.6.7 2.9 1.5 4.2.4.7.8 1.5 1.1 2.2.3.6.2 1.1-.4 1.4-.5.3-.9.2-1.3-.4-.7-1.1-1.3-2.2-1.8-3.3-1-2.1-1.2-4.6-2.7-6.3-1.6-1.9-2.5-4.2-3.9-6.2-2.2-3.2-3.2-7.1-5.7-10.1-.9-1.1-1.9-2.3-2.7-3.5-.6-.8-1.3-1.4-2.1-.7-.9.7-1 1.8-.3 2.7 3.3 4.2 5.6 9.1 8.6 13.4 3.1 4.6 5.6 9.5 7.8 14.7 2.5 5.9 4.5 12 6.7 18.1 1.9 5.3 3.2 10.8 4 16.4.9 6.5 2.3 13 2.7 19.7.3 4.2 0 8.4 0 12.5 0 .6-.4 1.3.3 1.6.9.4 1.9.1 2.8-.4.5-.3.8-.6.7-1.3-.7-2.7-.2-5.5-.3-8.3-.1-4.2-.3-8.5-.9-12.6-.6-3.7-1.5-7.3-1.8-11.1-.1-2.4-.5-4.8-1.7-6.8s-1.5-4.2-2.1-6.3c-1.2-3.8-1.8-7.9-3.6-11.5-1.1-2.1-1.5-4.7-2.5-7-.2-.5-.5-1.5.3-1.7.6-.2 1.5.1 1.6 1 .2 1.7 1.1 3 1.6 4.5 1.1 3.5 2.4 6.9 3.5 10.4.9 3 1.7 6 2.6 9 .4 1.2 1.1 2.3 1.3 3.5.6 3.7 1.2 7.4 1.9 11.1.9 4.8 2 9.6 2 14.6 0 3.8.9 7.6.1 11.4-.2 1.1.6 1.4 1.4 1.4.8 0 2.2.2 2-.9-.2-1.6.3-3.1.1-4.6-.5-4.8-.4-9.7-.7-14.6-.3-4.1-.8-8.2-2-12.1-.7-1.2-1.2-2.1-.8-3.3zm-242.1 122c.6-.2 1.4.1 1.8-.7.4-.9-.5-1.2-.9-1.7-1.7-2.4-3.6-4.7-5.1-7.3-2.1-3.7-4.6-7.2-6.7-10.9-1.7-3-3.3-5.9-4.7-9.1-1.9-4.3-3.2-9-5.4-13.1-.4-.7-.5-1.6-.7-2.4-.6-2.2.5-4.8-1.3-6.8-.1-.1-.1-.4 0-.5.2-1.6-.5-3-1.4-3.9-1.1-1.2-1.3-2.6-1.6-4.1-.1-.7.1-1.5-.1-2.1-1.1-2.7-.9-5.6-1.5-8.4-.4-1.5-.9-2.9-1-4.4-.3-4.8-.7-9.7-.7-14.5 0-9.8 0-19.7 2.8-29.2.6-2 .4-4.2.8-6.3.3-1.6 1.5-2.8 1.6-4.4.2-2 .7-4 1.6-5.7 2.3-4.9 3.7-10.2 5.9-15.2 1.3-3.1 2.6-6.2 4.2-9.1 1.9-3.6 3.9-7.3 6.2-10.6 2.5-3.5 4.5-7.4 7.7-10.4.3-.3.7-.6.6-1-.1-.6-.7-.5-1.1-.7-2.3-1-4.3 1-6.5.8-.6-.1-1.3 1-.5 1.8 1.2 1.2.5 2.1-.3 2.9-1.2 1.2-2.4 2.6-4.3 2.7-.5 0-1 .3-1.3.8-.3.4-1 .7-.8 1.3.2.6.8.6 1.3.7 1.6.3 1.9 1.5 1 3.1-1.7 3.3-4.3 5.9-5.9 9.3-.5 1.1-.9 2.3-1.5 3.4-1.1 2.3-2.3 4.6-3.2 7-1.3 3.3-2 6.8-3.7 10-.1.3-.4.6-.3.8.2 3-1.3 5.6-1.8 8.5-1.4 7.8-3.6 15.4-4.3 23.4-.4 4.3-.5 8.6-.7 12.9-.1 2.3-.4 4.6-.1 6.9.4 2.9.5 5.9.8 8.8.4 3.4.2 6.9.7 10.4.6 3.9 2.3 7.5 2.5 11.5.1 1.2.1 2.6.6 3.7 1.5 3.2 2.3 6.7 3.6 10 .8 2.1 1.4 4.2 2.3 6.2 2.2 4.7 4.5 9.4 6.8 14 1.8 3.7 4.2 7.2 6.2 10.8 2 3.7 4.5 6.9 6.9 10.1.2.3.7.7 1.5.7zm-21.4-82.1c-.3 1.2.2 2.2.2 3.2 0 .7-.3 1.6.6 1.8 1 .3 2 .4 3-.1.3-.2.4-.6.4-1-.4-2.9-.3-5.8-.9-8.6-.5-2.2-.4-4.5-.3-6.7.3-5.4.5-10.8 1.3-16.2.8-5.2 1.4-10.3 2.7-15.4 1.2-4.9 2.7-9.7 4.6-14.3 1.8-4.2 3-8.6 5.4-12.6 2.2-3.7 4.1-7.5 6.3-11.2 1.1-1.8 2-3.8 3.4-5.4 1.7-2 3-4.4 4.8-6.4.4-.4 1-1 .5-1.7-.9-1.3-2.6-1.4-3.6-.1-5.6 6.8-10.6 13.9-14.1 22.1-1.1 2.7-3.1 4.8-4 7.6-1.7 5.2-4 10.2-5.5 15.5-1.5 5.1-2.9 10.2-3.3 15.5-.3 4-1.3 8-1.4 12.1-.1 4.3-.7 8.6-.3 12.9-.1 3.1 0 6.1.2 9zm14.1 11.4c-1.1 0-1.5.4-1.4 1.7.1.7.2 1.5.3 2.2 1.2 5.6 2.8 11.1 4.6 16.6 2 6 5.1 11.5 7.3 17.3 1.6 4 4.3 7.5 6.8 11 1.9 2.6 4.1 5 6.1 7.6 1.2 1.5 1.7 1.6 2.8-.1.7-1.1 1.4-2.2 2.6-2.7 1.2-.5 1.6-2.3.7-3-1.9-1.6-3.1-3.8-4.7-5.7-3.5-4.4-5.8-9.5-8.2-14.5-3-6.4-5.9-12.8-7.6-19.8-.7-3.2-2.1-6.3-2.5-9.6-.1-1.2-1.1-1.2-2-1-1.1.2-1.6.9-1.3 1.9.6 1.9.7 3.8 1.2 5.7 1.1 4.6 2.8 9 4.4 13.4 2.3 6.4 5.6 12.4 9 18.3 1.5 2.6 2.8 5.2 4.6 7.6 1.3 1.7 2.5 3.4 3.9 5 .4.5.8 1.2.2 1.8-.6.5-1.4.4-1.8-.2-1.7-2.4-3.7-4.5-5-7.1-1.2-2.4-2.6-4.7-4-7-1.8-2.9-3.7-5.8-4.8-9.1-.8-2.3-2-4.3-3-6.5s-1.7-4.6-2.3-7c-.6-2.3-2-4.4-2.4-6.8-.5-2.9-1.3-5.8-2.2-8.7-.1-1-.6-1.2-1.3-1.3zM331.8 357c.1-1.3 0-1.6-.7-1.7-1.1-.3-2.5.9-2.7 2.2-.7 5.3-.2 10.8-2.1 16 0 .1-.1.2 0 .4.2 3.7-.4 7.3-1.5 10.9-.9 2.9-1.1 6.1-2.2 9-1.3 3.5-2.1 7.2-3.4 10.7-1.9 5.3-4.5 10.3-6.6 15.5-1.1 2.6-2.9 4.9-4.2 7.5-2.2 4.3-4.7 8.3-7.4 12.2-2.8 4-5.9 7.8-8.8 11.7-.6.8-1.2 1.6-.6 2.6.6 1.1 1.6.7 2.5.5.6-.1.8-.5 1.2-.9 1-.9 1.4-2.3 2.3-3.4 5.2-6.3 9.7-13.1 13.8-20.3 2.1-3.7 3.7-7.6 5.7-11.4 2.1-4 3.5-8.3 5.3-12.4 1.4-3.3 1.9-6.8 3.3-10.1 1.2-2.8 1.8-5.8 2.3-8.8.5-2.9 1.2-5.7 1.6-8.5.3-2 1.4-3.8 1.1-5.8-.2-1.5-.1-2.9.4-4.3.2-.7.4-1.4.4-2.1 0-3.3-.2-6.4.3-9.5zm11.3-17.2c0-.4 0-.5-.1-.7-1.7-6.7-1.4-13.8-2.9-20.6-1.1-4.9-1.2-10.1-3.1-14.9-2.5-6.2-4.5-12.6-7-18.8-.6-1.5-1.7-2.8-2-4.3-.6-3-2.5-5.3-3.6-8-.4-1-1.2-2.2-2.8-2.4-1.2-.1-1.9-1.6-1.1-2.6 1.1-1.4.3-2.2-.4-3.4-1.3-2.2-3.5-3.8-4.2-6.5-.3-.9-.9-1.1-1.7-1.2-.8 0-1.7-.4-1.9-1.3-.3-1.8-1.6-3-2.4-4.6-.3-.7-.7-1.1-1.4-1-.8.2-1 .9-1 1.7 0 .8.3 1.4.7 2 1 1.4 1.9 3 3.1 4.4 1.6 1.9 2.1 4.4 3.7 6.3 1.3 1.5 2.5 3.1 3.1 5.1.3 1.2 1 2.3 1.7 3.4 1.1 1.7 2.5 3.5 3 5.4.6 2.4 1.9 4.3 2.8 6.5.8 2.1 1.5 4.3 2.6 6.3 1 2 1.4 4.2 2.4 6.2.9 2 2 4 2.4 6.2.6 3.1 1.8 6.1 2.4 9.3.8 4.5 2.4 8.8 3.3 13.3.4 2 .7 4.1.7 6-.1 3.3.4 6.5.4 9.8 0 3.2.4 6.4-.2 9.6-.1.6-.2 1.2.5 1.6 1.1.6 2.3.4 3.3-.1.6-.3.3-1.1.2-1.7-.3-2.1-.7-4.3-.9-6.5-.2-1.4-.2-3.1.4-4.5zm-150.6 30.3c5.2-.5 10.1-2.7 14-7.2 3.1-3.6 5.9-7.4 5-12.8 0-.2 0-.4.1-.5 1.4-2.7.1-5.3-1-7.2-1.8-2.9-3.2-6-5.3-8.7-1.9-2.4-3.9-4.3-6.9-5.4-2.4-.8-4.7-.4-7-.9-5.4-1.2-9.7 1.2-13.4 4.7-4.5 4.3-7.1 9.7-6.5 16.8.5 6.3 3.2 11.1 6.9 15.5 1.6 2 3.9 2.8 6 3.9 2.4 1.4 4.9 1.9 8.1 1.8zM66.9 363c1.9 0 2.6-1.1 2.2-3.7-1.1-7.3-.7-14.6-.5-22 .1-2.6.7-5.2.9-7.7.3-4.7 1.3-9.3 2-14 .6-3.5 1.9-6.7 2.8-10.1 1.3-4.6 3.3-8.8 4.9-13.2 1.7-4.5 4.5-8.4 6.6-12.7 2-4.1 4.1-8 7.1-11.5 1.8-2.1 3-4.8 5-6.8.8-.8 1.1-2 0-2.8-1-.8-1.9-.5-2.5.7-.1.3-.3.5-.5.7-4.2 4.8-7.9 10.1-10.9 15.8-1.8 3.3-3.6 6.5-5 10.1-1.9 4.8-3.9 9.7-5.9 14.5-1.4 3.5-2.2 7.3-3.6 10.8-.8 2.2-1.7 4.4-2 6.7-1.2 8.4-2.5 16.8-2.5 25.3 0 3.3-.1 6.5.1 9.8.2 2.7.7 5.4.5 8.2-.2 1.5.3 1.8 1.3 1.9zm265.7 9.6v.7c-1.1 6.4-1.8 12.8-3.6 19-1.3 4.6-3 9.2-4.5 13.7-.9 2.8-1.6 5.7-3 8.2-1.6 2.9-2.9 6-4.3 9-.5 1.1-.7 2.4-1.5 3.4-1.5 2-3.1 4.1-4.1 6.4-1.3 2.8-2.9 5.4-4.6 7.8-3.5 5.2-7.3 10.2-11.4 15-.6.7-.5 1.1 0 1.7.9 1.1 1.8 1.1 2.7.1 2.2-2.4 4.2-4.9 6.2-7.5 3.2-4.1 6.1-8.4 8.8-12.9 2.1-3.5 4-7.3 5.9-11 3.1-6 5.8-12.2 8.1-18.6 2.1-5.8 3.9-11.7 5.5-17.7.7-2.5 1.4-5.1 1.5-7.6.1-2.2.6-4.4 1-6.5.8-4.3 1.1-8.6 1.7-12.9.3-1.8-.3-3.8.6-5.5.3-.6-.1-1.4-.6-1.7-.7-.5-1.5-.9-2.4-.6-.8.2-.7 1-.7 1.7 0 4.4-.6 8.7-1 13 .1.8-.6 1.6-.3 2.8zm-243.1-5.9c.9.3 1.3-.6 1.7-1.3.5-.9-.1-1.5-.7-2-1-.8-1.2-1.8-.9-3 .3-1.1.4-2.3.4-3.5-.1-1.9-.7-3.9-.4-5.8.6-4.1.1-8.2.5-12.3.5-5.1 2-10.1 2.2-15.3 0-.5.2-.9.4-1.4 1.7-5.4 2.9-11 5.1-16.2 1.5-3.7 3.2-7.3 5-10.8 1.6-3.1 3.2-6.1 5.2-8.9 1.6-2.2 3-4.5 4.8-6.6.9-1.1 1.5-2.4 2.2-3.7.3-.6.1-.9-.3-1.2-1.1-.9-2.7-.8-3.5.3-4.4 5.5-8.2 11.4-11.6 17.6-2.9 5.3-5.2 10.9-7 16.7-1.5 4.8-3 9.6-3.8 14.7-.6 3.6-1.4 7.2-1.7 10.9-.3 2.8-.1 5.7-.7 8.5-.1.7 0 1.5 0 2.2.2 2.4.2 4.7.3 7.1.1 3.1.2 6.3 2 9 .5.8 1.2 1.9.1 2.9-.4.3-1.1.4-.8 1.2-.1.9.7.8 1.5.9zM75.7 350s-.1.4-.1.9c0 .7.4 1.1 1 1.3.9.3 1.8.3 2.6-.3.6-.4.2-1.1.1-1.6-.2-1.3-.4-2.6-.3-3.9.7-8.3 1.2-16.5 3.1-24.6 1.2-5.5 2.3-11 4.3-16.2 1.8-4.9 3.8-9.7 5.8-14.5 1.4-3.3 3.1-6.4 5-9.2 2.9-4.4 5.5-9.1 9.2-12.9.7-.8.7-1.6-.2-2.3-1.4-1.2-1.9-1.1-3.1.4-3.1 4-5.9 8.1-8.6 12.4-2.8 4.4-5.2 9-7.3 13.8-2.5 5.6-4.9 11.3-6.3 17.4-1.1 4.7-3 9.2-3.3 14.1-.3 4.2-1.2 8.2-1.3 12.4-.2 4-.8 8.2-.6 12.8zm5.4 1c-.5 1.8.4 2.3 2.1 2.1.3 0 .6-.1.7.3.1.4-.2.5-.5.6-.5.2-.9.4-1.4.6-1.3.5-1.6 1.2-.7 2.4.4.6.5 1.3.6 2.1 0 2 .6 4 .4 6-.1 1.1.4 1.5 1.4 1.6 1.7.1 2.7-1.2 2.1-3.5-.8-3.3-1-6.6-1.1-9.9-.2-5.7-.5-11.3.1-17 .6-5.2 1.6-10.3 2.4-15.4.2-1.4.5-2.8 1-4.1 1.6-4.3 2.8-8.9 4.3-13.2 1.6-4.5 3.7-8.8 5.8-12.9 2.3-4.5 5.3-8.8 8.3-12.9 1.1-1.5 2.3-3 3.4-4.5.6-.8 1.1-1.7.3-2.6-.8-1-1.6-.3-2.4.1-.9.5-1.3 1.5-2 2.2-3.6 4-6.4 8.5-8.8 13.3-2.8 5.5-5.5 11.1-7.7 16.9-1.5 4.1-3 8.1-4 12.3-.7 2.9-1.9 5.8-2.2 8.8-.4 4.4-1.2 8.8-1.5 13.2-.3 4.4-.9 8.9-.6 13.5zm222.3 15.4c-.1-.7-.1-1.3-.2-1.8-.4-1.6-1.8-1.7-2.9-1.8-1.1-.2-1.1 1-1.2 1.8-.1 1.2-.1 2.4-.2 3.6-.3 3.7-1.6 7.2-2.2 10.8-1 6.2-3.1 12-5.5 17.6-1.4 3.3-2.6 6.8-4.6 9.9-1.2 1.9-2.1 4.4-3.2 6.5-2.2 4.2-5.3 7.8-8 11.7-1.2 1.7-2.3 3.6-4 4.9-.7.5-1 1.4 0 2.3 1.6 1.5 2.6 1.8 3.5.6 1.8-2.2 2.4-5.5 5.3-6.7.2-.1.3-.5.4-.8.3-1 .8-1.9 1.3-2.8.8-1.6 2.4-2.4 3.4-3.9 2.2-3.6 4-7.4 5.9-11.2 2.9-5.8 5.1-11.8 7.1-17.9 2-6 3.5-12.2 4.2-18.5.1-1.6.8-3 .9-4.3zM67 364.8c-1.1-.1-1.3.4-1 1.4.3.8.4 1.7.5 2.7.3 2.3.8 4.5 1.1 6.8.4 2.4 1.3 4.7 1.6 7 .4 2.9 1.4 5.6 2.1 8.4 1.1 4.8 3.7 9.1 5.1 13.8.5 1.6 1.1 3.4 2.1 4.9 2.5 3.7 4.2 8 6.6 11.8 1.6 2.4 2.8 5.1 4.4 7.5 2.2 3.4 5.2 6.1 7 9.8.2.4.6.5 1 .5.7 0 3-1.8 3.1-2.5.1-.3-.1-.6-.3-.8-2.3-1.7-3.8-4.3-5.5-6.6-2-2.6-4.1-5.2-5.6-8.2-2.1-4.2-4.7-8.2-6.8-12.5-2.1-4.3-4.3-8.7-5.8-13.3-1.2-3.7-2.3-7.4-3.4-11.1-1.4-4.5-2.5-9.1-3.2-13.7-.2-1.1-.7-2.1-.7-3.4.3-1.9-.4-2.6-2.3-2.5zm63.8-142.3h-.7c-.5.1-1.1.1-1.2.8-.1.8.6.8 1.1.9.8.3 1.5.2 1.9-.7.2-.4.5-.7 1-.5.5.2.4.7.2 1.1-.2.7.1 1 .6 1.4.7.6 1.1 1.5 1.5 2.4 1.1 2.8 2.4 5.5 3.6 8.2.2.6.6.8 1.2.5 1.7-.9 3-.9 3 1.6 0 .1.1.2.2.3 1.2 2.3 2.1 4.6 3.2 6.9 1.5 3.3 2.8 6.7 4.2 10 2.2 4.9 4.6 9.8 6.1 15 .2.9 1.1 1.2 1.9 1.4.3.1.6-.1.9-.5.4-.5-.4-1.3.4-1.8.3.6.6 1.3.9 1.9.1.3.4.4.6.7.8 1.5 2.2 2.5 2.6 4.4.2 1 .1 2.1.8 3.1 2 2.9 3.1 6.3 4.4 9.5 1.4 3.4 2.6 7 4.3 10.3.4.7.8 1.1 1.5.8.6-.3.2-.9.1-1.5-.9-3.3-3.1-6-4-9.2-.3-1.1-.7-2.2-1.3-3.2-2-3.3-3.6-6.8-4.8-10.4-1.5-4.3-3.5-8.4-5.3-12.6-.7-1.5-1.1-3.2-1.8-4.7-1.3-2.8-2.5-5.6-3.9-8.4-.8-1.6-.7-3.6-1.7-4.9-1.9-2.4-2.2-5.4-3.5-8-2.1-4.2-3.5-8.8-5.6-12.9-1.3-2.6-.7-4.7 1.5-6.5 1.1-1 2.6-.4 3.5-1.2 1.5-1.3 3.2-1.6 4.9-1.9.1 0 .1 0 .2-.1.5-.3 1.2-.5 1.1-1.2-.2-.8-1-.7-1.5-.5-2.2.6-4.3 1.4-6.4 2.1-.4.1-.7.5-.9.8-.3.4-.8.5-1.2.6-1.5.4-3.1.8-4.6 1.2-.7.2-1.2.5-.8 1.4.6 1.3.8 2.9 2 4 .4.4.8.9.9 1.5.3 2.6 1.6 4.8 2.7 7 1.8 3.8 3.6 7.7 5.3 11.5 1.4 3.2 2.5 6.5 4.4 9.4.2.4.2.7-.2.9-1 .6-2.6 0-2.8-1.2-.5-2.7-1.7-5-2.7-7.4-1.7-4.4-3.9-8.6-5.5-13-1.2-3.3-3-6.5-4.3-9.8-.2-.6-.4-1.1-.7-1.6-.4-.7-1-.8-1.6-.5-.7.4-.2 1 0 1.4 1.1 2.3 2.9 4.3 3.1 7 0 .2.2.5.4.5 1.8 1 1.1 3.3 2.2 4.6.2.2-.1.6-.4.6-.9.1-1.6.2-2-1.1-1.1-3.6-3.3-6.8-4.2-10.5-.2-.6-.5-1.3-.9-1.7-.5-.6-1.3-.8-1.5.4-1.1 1.7-1.6 1.6-2.4 1.4zm156.1 210.3c-1.2-.2-2.2-.2-2.6 1.1-.3.8.2 1.3.8 1.6.9.4 1.6 1.2 2.7 0 1.6-1.8 3.1-3.5 4.3-5.7 2.5-4.5 5.1-8.9 7.5-13.4 4.4-8.4 7.8-17.3 10.6-26.4 1.8-5.9 3.2-11.9 3.8-18.1.2-1.8.9-3.4 1.1-5.2.2-1.6-.4-3.1.1-4.7.1-.2 0-.7-.2-.8-1.1-.5-2.3-.6-3.3.1-.8.6-.8 1.7-.3 2.6.4.8 1.1 1 1.8 1.3.4.1 1 .1 1 .8 0 .8-.6.7-1.1.7-1.4-.1-2.6.6-2.7 2.1-.3 2.5-.9 5-1.3 7.5-.4 2.7-.7 5.5-1.4 8.2-1.6 5.6-3.4 11.1-5.3 16.5-1.6 4.5-3.6 8.8-5.8 12.9-2 3.7-3.9 7.4-6.3 10.8-.5.8-1.3 1.8-.6 2.6.8 1 1.3 2 .5 2.9-1 1.1-1.4 3.3-3.3 2.6zm67.3-75.1c.1 1.3.1 2.4.2 3.4.1.5-.1 1.3.5 1.4.5.1.5-.7.6-1.1.6-1.8.4-3.6.3-5.4 0-.8-.2-1.4.7-1.7.3-.1.8-.4.2-.7-1.2-.5-.8-1.4-.8-2.3-.3-3.7.6-7.3.3-11-.1-1.2-.4-2.4 0-3.6.2-.5.3-.8.8-.6.5.1.6.5.4 1-.1.5-.3.9-.3 1.4 0 .8-.1 2 .9 2.1.9 0 .9-1.2.9-1.9 0-1.3-.1-2.7-.4-4-.5-3-.1-6.2-.9-9.2-.5-1.8-.7-3.8-.6-5.7.1-1.6 0-3-.7-4.4-1.1-2.2-1.2-4.8-1.7-7.2-.6-2.9-1.4-5.8-1.6-8.9-.1-1.2-1-2.5-1.2-3.8-.2-1.2-1.1-1.7-2.2-1.3-.8.3-1.4 0-1.5-.8-.2-1.3.8-.6 1.3-.7.5-.2 1.6-.2 1-.8-1.2-1.3-.8-2.8-1.3-4.2-1.5-4-2.7-8.2-5.3-11.7-.2-.3-.4-.6-.4-1-.3-4-3.2-6.9-4.3-10.5-.3-.8-.7-1.4-1.8-1.2-.8.2-1.6-.1-1.3-1.4.1-.6-.3-.8-.7-.8-.7 0-1.7-.1-1.8.8-.2 1 .4 1.7 1.4 1.9 2.4.5 3.2 1.8 2.8 4.4-.2 1.1 0 2 1.3 2 1 0 1.2.6 1.3 1.5.3 2.2 1.1 4.4 2.3 6.2 1 1.5 1.7 3 1.9 4.8.3 2.3.6 4.6 2 6.5.2.3.4 1 .2 1.4-.8 1.9-.2 3.6.5 5.3.8 2 1 4 1 6.2 0 .3.2.7.3 1 1.5 4.6 2.4 9.3 3.1 14.1.3 1.9.5 3.7 1.1 5.5.1.3.4.9.1 1-1.9.9-.8 1.4.1 2 .3.2.4.8.4 1.2.1 1.8.4 3.5.6 5.3.6 4.5 1 9.2.6 13.8-.3 3.8.4 7.9-.3 11.7zm-34.5 11.9c0-.8-1.2-1.1-2.1-1.3-1.2-.4-1.4.8-1.6 1.7l-1.5 10.8c-.7 4.9-2.5 9.4-3.8 14.1-1.1 3.7-2.6 7.3-4 10.8-1.6 4-3.4 8-5.3 11.8-2 3.8-4.3 7.4-6.5 11.1-1.2 2.1-1.7 4.7-3.7 6.3-1 .9-1.7 2-2.3 3.3-.5 1.2-1.1 2.6-2.4 3-1.3.4-1.7 1.5-2.4 2.4-.5.7-.6 1.5.2 2.3.8.7 1.5.8 2.2 0 .8-.9 1.7-1.7 2.5-2.7 2.5-2.8 4.4-6 6.7-8.9 2.7-3.5 4.3-7.6 6.6-11.4 3.5-5.8 5.8-12.2 8.5-18.4 1.2-2.6 1.4-5.6 2.9-8.1s1.8-5.6 2.8-8.4c.7-2 .8-4.4 1.1-6.6.8-3.7 1.4-7.4 2.1-11.8zm-35.3 59c1.7-.2 2.9-1.8 4-3.5.6-.9 1-1.9 1.5-2.8 2.1-3.7 4.2-7.3 6.1-11.2 1.7-3.4 3-7.1 4.5-10.6 2.3-5.7 4.4-11.5 5.6-17.5 1-5 1.9-10.1 2.8-15.2.1-.7.6-1.5-.2-2-1.3-.7-2.8-.8-4.1-.1-1 .5.2 1.1.1 1.7-.1.3-.1.6-.1.9-.1 1.9-.5 3.8-.9 5.7-1.6 8.3-3.4 16.6-6.8 24.3-.9 2-1.4 4.1-2.3 6-1.2 2.6-2.4 5.2-3.9 7.7-1.6 2.6-2.9 5.5-4.6 8.1-.6.8-1 1.8-1.3 2.7-.2.5-.2.9.2 1.2.5.3 1.1.7.8 1.4-.3.7-1 .4-1.5.2-.3-.1-.6-.1-.8-.1-1.1-.1-1.8.6-2 1.6-.2 1.2 1 1.1 1.7 1.3.2.1.5.1 1.2.2zm6.7-59.3c-.1-1 .1-1.8-.3-2.4-.6-.9-.4-1.7.2-2.4 1.4-1.6 1.3-3.6 1.6-5.5.3-1.6-.3-2.3-1.8-2.4-1.6-.1-2.2.4-2.1 2.1.4 6.4-1.9 12.3-2.8 18.4-.4 2.4-1.8 4.4-2.2 6.6-.8 4.7-2.7 8.8-4.4 13-1.9 4.6-4.3 9-6.9 13.2-2.8 4.5-5.8 8.7-9.4 12.4-1.1 1.1-.4 2.1.3 2.8.7.7 1.7 1.7 2.7.2.6-.9 1-2.1 1.7-2.9 2.6-3.1 5.1-6.3 7.2-9.9 1.4-2.4 3.1-4.5 4.3-7 2-4.1 3.8-8.3 5.6-12.5 2.4-5.6 3.9-11.5 5.4-17.4.4-2.1.6-4.4.9-6.3zm-17.4-139.4c-.9 0-1.7 0-2 .9-.2.5.2.8.5 1 4.8 3.9 9.5 7.9 13.8 12.4 1.1 1.2 2.5 2.1 3.6 3.3.4.5.7 1 .2 1.6-.5.5-1.1.6-1.7.1l-.6-.6c-4.9-4.8-9.7-9.6-14.7-14.3-2.6-2.4-5.9-3.5-8.2-6.4-.8-1.1-1.2-1.6-.1-2.6.8-.8.7-1.5-.4-1.9-.4-.2-.7-.5-1.1-.8-.9-.8-2.1-.3-2 .9.2 1.9.9 3.5.1 5.6-.4 1 1.3 1.9 2.3 2.3 1.8.6 3.1 1.9 4.4 3.3.3.3.6.8 1 1 4 2.3 6.9 6 10.4 9 2.6 2.3 4.7 5.2 7.1 7.9 1.8 2.1 2.7 2.1 4.8.3 2.5-2 4.9-4.1 7.4-6.1.7-.5 1.5-.8 2.1-1.6.6-.8.3-1.4-.6-1.5-1.7-.3-3.6.8-4.2 2.6-.5 1.4-1.4 1.3-2.1.5-2.1-2.3-4.4-4.4-6.2-7-.7-1-1.5-1.5-2.6-1.4-1.4.1-2.2-.4-2.6-1.9-.3-1.3-1.4-2.3-2.5-2.2-2.4.3-3.3-1.3-4.2-3.1-.5-1.1-1.1-1.4-1.9-1.3zM77.3 378.1c-.1-.6-.1-1.2-.3-1.8-.8-2.5-1-5.1-1.4-7.7-.3-1.7-1.6-2.9-3.2-2.4-1.7.5-.5 1.9-.6 2.9 0 .3.2.6.2.9.3 1.7 1.4 3.4 1.4 4.9-.1 2.1.5 3.9 1 5.8 1.6 5.6 3 11.3 5.3 16.7.8 1.9 1.7 3.6 2.4 5.6 1.4 3.6 3.4 7 5.2 10.4 1.7 3.1 3.3 6.3 5.4 9.2 2.8 3.9 5.6 7.8 8.3 11.7.6.9 1.4 1.1 2.2.4.7-.7 1-1.6.2-2.6-3.1-4-6.1-8-8.8-12.2-2.1-3.3-3.8-6.7-5.7-10.1-2.5-4.5-4.4-9.3-6.3-14.1-1.6-4-2.8-8.2-3.9-12.4-.4-1.8-1.6-3.3-1.4-5.2zm48.4-17.1c1.9 0 2.2-.5 2-2.5-.2-2.7-.7-5.3-.7-8 0-3.4-.3-6.7.1-10.1.7-6 1.6-11.8 3.6-17.5 1.7-4.7 3.7-9.3 6.4-13.4 1.2-1.8 2-3.9 3.6-5.5.5-.5.9-1.3.1-1.9-.6-.5-1.4-.7-2 0l-.9.9c-3.5 3.8-6.2 8.2-8.3 13.2-1.1 2.7-2.3 5.3-3.2 8.1-2.4 7.1-3.6 14.4-3.5 21.9 0 2.8-.3 5.7.2 8.5.3 1.3.6 2.6.6 3.9.1 2.2.2 2.4 2 2.4zm-15.7.2c1.3 0 1.9-.1 1.6-1.5-.4-2.2-.7-4.5-.9-6.7-.3-4.9-.2-9.9.5-14.7 1.4-10.1 3.6-20 8.1-29.1 1.8-3.6 3.9-7.1 5.8-10.7.4-.7.6-1.2-.5-1.2-.3 0-.6-.1-.8-.3-.9-1-1.7-.4-2 .5-.7 1.9-2.2 3.4-3 5.1-1.6 3.2-3.3 6.3-4.8 9.6-1.2 2.7-2.1 5.6-2.9 8.5-1.5 5.1-2.7 10.2-3.4 15.5-.4 3.6-.6 7.3-.5 10.9.1 4 .4 8 .8 12 .3 1.5 1.1 1.9 2 2.1zm2.8-8.7c.3 1.7.7 4.4 1.1 7.1.2 1.2 1 1.5 2.1 1.3 1-.1 1.4-.8 1.1-1.7-.8-1.9-.6-3.9-.9-5.9-.5-3.7-.4-7.5 0-11.2.6-4.7 1.5-9.4 2.3-14.1.9-5.4 2.7-10.6 5.1-15.5.9-1.9 2-3.6 2.9-5.6 1.7-4 4.5-7.2 6.8-10.7.3-.5 1-.8.7-1.5-.3-.7-1-.7-1.6-.7-.8 0-1.4.4-1.8.9-1.5 1.9-3 3.8-4.3 5.9-1.5 2.5-3 5.1-4.3 7.8-1.3 2.6-2.9 5-3.5 8-.4 1.8-.8 3.8-1.6 5.3-2.2 4.1-2.2 8.6-3.1 13-1.3 5.6-.6 11.2-1 17.6zM82.6 377c-.7-2.2-.9-4.6-1.5-6.9-.3-1-1.5-.8-2.4-.6-.7.1-1.1.5-.9 1.2.5 2.5.9 5 1.5 7.4.4 1.8 1.2 3.4 1.7 5.1 1.4 5.3 3 10.5 5.4 15.4.3.7.6 1.2 1.4 1.3 1 .1 1.4.9.7 1.7-.5.6-.5 1.1-.2 1.7 1 2.3 2 4.6 3.2 6.8 2 3.7 4.3 7.2 6.4 10.8.5.8.9 1.7 1.5 2.4 1.8 2.1 3.9 4.1 5.5 6.4.4.6 1 1.1 1.6.6.6-.6 1.3-.9 2-1.3.4-.3.7-.7.6-1.2 0-.5-.3-.8-.8-.8-1.2 0-1.8-1-2.4-1.8-1.3-1.5-2.5-3.1-3.9-4.5-2.4-2.7-4.2-6-6-9.2-1.6-2.9-3.1-5.8-4.3-9-1.3-3.6-3.1-7-4.6-10.5-.8-1.9-1.7-3.7-1.9-5.8-.1-.7.2-1.6-.2-2.1-1.5-1.8-.8-4.4-2.2-6.2-.2-.2-.1-.6-.2-.9zm11.9-10.8c1.5 0 2-.6 1.4-2-1-2.3-.4-4.8-.8-7.2-.2-1.4-.1-2.6-1.2-3.5-.8-.6-1.1-1.5 0-2.3.8-.5.9-1.5.8-2.5-.4-4-.1-8 .4-12 .7-5.5 1.7-11 3-16.4 1-4.1 2.4-8 3.7-11.9 1.8-5.2 4.5-10.1 7.1-15 .5-.9 1.2-1.8 2-2.5.6-.6 1.3-1 .3-1.9-.8-.8-1.5-1.4-2.4-.2-1.6 2-3 4.1-4 6.5-1.4 3.2-2.8 6.4-4.4 9.4-2 3.7-3 7.6-4 11.6-1.2 4.6-2.7 9.1-3.3 13.9-.6 4.5-1.3 9-1.2 13.6.1 3.4-.4 6.7.1 10.1.2 1.4.5 3-.1 4.5-.4.8-.3 1.2.6 1.4.9.1 1.4.6.5 1.4-.7.6-.5 1.1-.2 1.7.2.4.4.6.2 1.1-.6 1.6-.1 2.2 1.5 2.2zm187-6.8c.1-.6.4-1.8-1.2-1.8-1.6-.1-2.5.9-2.4 2.5.1 2.6-.2 5.1-.8 7.7-.5 1.9-1.1 3.8-1.5 5.8-.8 3.9-1.2 7.9-3.7 11.2-.4.6-.6 1.5-.6 2.2-.1.7-.3 1.4-.6 2.1-.9 2.7-2.3 5.2-3.7 7.6-1.6 3-3.1 6.1-5 8.8-2.1 2.9-4.4 5.5-6.4 8.5-.8 1.2-.8 2.4.2 3.3 1 .9 1.9.1 2.5-.9l.6-.9c2.2-3 4.5-5.9 6.5-9.1 1.2-2 2.8-3.7 3.7-5.9.7-1.7 1.6-3.4 2.5-4.9 3.5-6.4 5.4-13.5 7.5-20.5.6-2 .6-4.1 1-6.1.6-3 1.4-6 1.4-9.6zm-151.9-1.6c0 .5 0 1 .1 1.4.2 1.5 1.3 2 3.2 1.7 1.6-.3.9-1.4.8-2.3-.6-4.2-1.2-8.4-1-12.7.2-4.3.8-8.6 1.8-12.9.8-3.6 1.6-7.1 2.9-10.5 1.9-5.1 4.1-10 7.2-14.4.6-.9 1.1-1.5 0-2.4-1-.8-1.9-.7-2.6.2-2 2.9-4.1 5.8-5.8 9-2.5 4.7-4.2 9.7-5.5 14.8-.4 1.5-1.4 3.3-.8 4.7.7 1.7.4 2.7-.6 3.9-.2.2-.2.7-.3 1-.4 1.6-.2 3.1-.1 4.7.2 4.7.1 9.3.7 13.8zm-32.9-13.1c0 3.3-.1 5.6.9 7.8.3.5.5 1 1.1.9.6-.1.7-.5.8-1 0-.5.1-1 .1-1.5.4-6.3.1-12.7 1.7-18.9.9-3.7.9-7.6 2.2-11.3 1.1-3 1.8-6.3 3-9.2 2.1-5.6 4.5-11.1 7.8-16.1 1-1.6 1.2-3.5 2.3-5 .1-.1 0-.4-.1-.5-1.1-.5-2.3-.5-3.3-.2-1.1.4.3.8.2 1.3-.1.2-.1.6-.2.6-1.1.5-1.2 1.7-1.8 2.6-1.5 2.2-3.2 4.5-4.2 7-1.7 4.4-3.8 8.6-5.2 13.2-.5 1.7-.8 3.6-1.4 5.2-1.4 3.6-1.7 7.6-2.5 11.3-1.1 4.8-1.7 9.8-1.4 13.8zm173 13.5c-.8 0-1.5.2-2.2.4-.6.2-.9.7-.8 1.4.4 2.1.1 4.2-.4 6.3-1 4-1.5 8.2-3.1 12.1-1.9 4.9-3.8 9.8-6.3 14.3-2.6 4.5-5 9.2-8.8 12.8-1.2 1.1-.7 2.1.5 3 1 .8 1.8 1.1 2.7-.2 1.7-2.5 3.7-4.8 5.4-7.4 2.5-3.8 4.9-7.7 6.6-11.8 2.1-5.2 4.4-10.4 5.2-16.1.4-2.9 1.7-5.5 1.9-8.5.1-1.5.1-3.1.6-4.4.7-2.1-.3-1.9-1.3-1.9zm-7.4 0c-.8.1-2-.2-1.2 1.4.1.3.1.7 0 1.1-.7 2.5-.6 5.1-1.3 7.7-1.7 6-3.8 11.8-6.3 17.4-1.5 3.5-3.9 6.4-5.6 9.7-.7 1.2-1.4 2.3-2.4 3.3-.8.8-1.5 1.6-2 2.7-.7 1.4.1 2.3 1.1 3.1 1 .8 1.7.1 2.3-.7 2.7-3.3 5.1-6.7 7.3-10.3 2.2-3.6 4-7.5 5.6-11.4 1-2.4 2-4.8 2.7-7.3 1.4-4.8 2.3-9.7 2.7-14.7.1-.8-.2-1.3-.9-1.5-.7-.2-1.4-.3-2-.5zM127.1 223.8c-1.7 0-2.2.7-1.5 1.8 1.3 2.1 2.2 4.3 3.2 6.5 2.1 4.4 3.9 9 6.2 13.3 2.9 5.7 5.2 11.7 8.1 17.5.6 1.3.8 2.9 1.6 4 2.4 3.5 3.7 7.6 5.5 11.4l4.5 10.2c.6 1.5 1.3 2.9 2 4.4 1.5 3.4 3.6 6.6 4.5 10.4.1.5.3 1.1.8 1.4 1 .6 1.3 1.6 1.4 2.6.1 1.1.7 1.7 1.4 2.4.3.3.6.7 1 .2.3-.4.6-1 .3-1.3-1.6-1.7-1.7-4.2-2.8-6.1-2.2-4-3.8-8.3-5.8-12.3-.7-1.4-1.2-2.9-1.9-4.3-.2-.5-.3-1 0-1.4.4-.4.8.1 1.2.3 1 .5 1.2 1.5 1.4 2.6.3 2.1 1.8 3.5 2.6 5.3.1.3.9.7 1.1.6.6-.3.1-.9-.1-1.3-.9-2.6-1.9-5.2-3-7.7-.7-1.7-1.7-1.8-2.9-1.1-.9.5-1.2.3-1.5-.6-1.1-2.7-2.9-5-3.8-7.9-1.4-4.5-4-8.5-5.7-12.8-1.3-3.3-2.6-6.6-4.1-9.7a216 216 0 0 1-5.1-10.9c-1.7-4-3.6-7.8-5.1-11.9-.4-1.1-.7-2.2-1.3-3.2-.9-1.1-1.3-2.3-2.2-2.4zm8 130.6c-.3 2.1.8 3.7.9 5.6 0 .8 1.2.8 1.9.6.6-.1 1-.5.9-1.3-.3-1.7-.6-3.4-.7-5-.3-3.6-.3-7.2.2-10.9.4-3.2.8-6.4 1.4-9.5 1-4.5 3.2-8.4 4.8-12.6 1.1-2.9 3-5.6 4.5-8.3.4-.6.5-1.1 0-1.8-1.7-2.2-2.2-2.2-3.6.2-.1.1-.1.2-.2.3-2.7 3.9-5.3 7.8-6.4 12.7-.5 2.2-1.8 4-2.1 6.4-.7 5.5-1.9 11-2 16.6 0 2.3.2 4.7.4 7zm-17.1-2.5c-.4 2.2.9 4.5 1 6.9 0 1.4.4 2.3 1.8 2.2 1.6-.1.9-1.5.9-2.4-.2-2.7-.8-5.3-.7-8 .2-6.1-.1-12.2 1.5-18.2.8-3 1.3-6.1 2.3-9.1 2.7-8.2 6.4-15.7 11.9-22.1.4-.5.7-1.1 1-1.7.4-.7.1-1.2-.6-1.4-1.2-.3-2.3-.3-3.1.9-.3.5-.5 1.1-.9 1.5-3.4 3.6-5.4 8.1-7.5 12.5-3 6.3-4.8 13.2-6.2 20.2-.5 2.5-.5 5-1 7.5-.2 1.1-.8 2.4-.6 3.4.8 2.5 0 5 .2 7.8zm19.6 10.8c-1.3 0-1.5.4-1 1.7.9 2.3 2 4.6 2.9 7 .2.5.7 1.2 0 1.6-.6.3-1.2.1-1.7-.4-.2-.2-.3-.5-.4-.8-.5-2.3-1.8-4.3-2.4-6.6-.5-1.9-1.4-2.2-3-1.8-1 .2-1.3.5-1 1.6.7 2.7 1.4 5.4 2.1 8 .1.3.2.7.4 1 2.5 4.2 4.1 8.9 7.1 12.8.8 1 1.8 1.3 2.5.3.9-1.3 2-2.3 2.9-3.6 1.4-2 1.5-3-.2-4.5-3.7-3.5-4-8.5-5.2-13.1-.3-1.8-1.4-3.3-3-3.2zm110.2 1.3c0 .2.1.7 0 1.1-.9 6-3.3 11.4-6 16.7-1.8 3.6-4.4 6.6-6.5 10-.8 1.3-1.9 2.3.2 3.3.2.1.3.5.4.8.5 1.2.9 1.1 1.6.1 2.7-4 5.6-7.8 7.9-12.1 1.7-3.4 3.8-6.6 4.7-10.5.4-1.7.5-3.5 1.2-5.1.8-2 1.5-3.9 1.3-6.1 0-.6.1-1.2.6-1.6 1.1-.8.6-1.3-.3-1.5-3.3-1.2-4.5.4-5.1 4.9zm-5.9-1c.6 1.7-1.2 2.9-1.1 4.7.1 1.2-.6 2.3-.9 3.5-.7 2.5-2.1 4.7-3.1 7-.8 1.9-1.9 3.8-3.2 5.4-1.4 1.6-2.4 3.5-3.8 5.1-.9 1-.5 3.3.5 4.1 1.4 1.1 2.1.2 3-1 1.5-1.9 2.5-4.2 4-6.1 3-4 5.1-8.5 6.8-13.3.6-1.5.5-3.4 1.2-4.6 1.6-2.6 1.2-5.5 1.6-8.3.2-1.4-.5-1.8-1.6-1.5-2.1.4-3.5 2.5-3.4 5zm-96-5.5c0 2.3.8 3.1 2.8 2.8 1-.1 1.7-.6 1-1.8-.5-.9-.8-1.8-.4-2.9.3-.6 0-1.4-.4-1.9-.6-.7-.5-1.5-.6-2.4-.3-3.9.2-7.8 1-11.6.9-4.5 2-8.8 4.1-12.9 1.1-2.1 2.3-4.2 3.5-6.2.6-1 .4-1.9-.7-2.5-1.1-.7-1.7-.2-2.2.7-.2.4-.4.7-.7 1-3.2 4.1-5.1 9-6.7 14-.9 2.9-1.1 5.9-1.5 8.9-.4 2.8-.1 5.5 0 8.3.1 2.5.6 4.7.8 6.5zm15 3.6c-.2.6-.6.8-1.1 1-.5.2-.8.5-.6 1.1.2.6.6.6 1.1.6 1.2-.1 2.8-2.5 2.1-3.4-1.5-1.6-1.4-3.7-1.9-5.6-.8-3-.5-6-.5-9-.1-2.7.8-5.4 1.5-8 1.4-5 3.5-9.4 7.9-12.2.4-.2.3-.6.3-.9-.2-1.3-.9-2.3-2-2.7-1.1-.3-1.9.4-2.6 1.3-1.2 1.7-2.1 3.6-3.3 5.3-3.3 4.5-4.6 9.8-5.4 15.3-.2 1.6-.6 3.3-.3 5 .5 2.7.9 5.5 1.4 8.2.4 1.8.9 2.9 2.7 3.1.3.1.8.2.7.9zm-10.7-12.7c0 3.7.9 7.2 1.5 10.8.1.6.5.8 1 .9 2.6.6 3.5-.6 2.8-3.3-.5-2-1-4-1.2-6-.2-3.6-.2-7.3.7-10.8 1.1-4.4 2.2-8.8 4.8-12.6.5-.7 1-1.4 1.3-2.1.5-1.1-.1-2-.9-2.7-.6-.5-1.4-.7-1.8 0-1.6 2.3-3.4 4.4-4.3 7.1-1.1 3-2.2 6.1-2.6 9.4-.5 3-1.2 6.1-1.3 9.3zm-34.2 15c-1.2 0-1.8.2-1.9.6-.3.7 0 1.2.5 1.6.4.4.4 1 .5 1.5.6 3.6 1.3 7.1 2.6 10.5 1.3 3.3 2.8 6.6 4 10 1.7 5.1 5.5 8.7 8.3 13 .6.9 1.7 1.2 2.5.2.8-.9 1.1-1.9 0-2.8-.4-.3-.7-.7-1.1-1.2-2.2-3.2-4.1-6.5-6-9.9-1.1-2-2.2-4-2.9-6.1-1.6-4.5-3-9.1-4.5-13.7-.2-.5-.6-1.2-.4-1.5 1.1-2.6-1-1.7-1.6-2.2zm23.8-14.1c0 3.3.3 6.7.9 9.9.2 1.4 1.5 1.3 2.5 1.2.7-.1 1.3-.4 1-1.3-.8-2.8-.9-5.7-1.2-8.6-.7-7.1.6-13.9 2.9-20.5 1.6-4.9 4.3-9.2 6.8-13.6.3-.5 1-.9.3-1.6-.6-.6-1.4-1-2.2-.4-.9.7-1.7 1.5-2.2 2.5-2.3 4.6-4.4 9.3-6.1 14.2-1.8 6-2.5 12-2.7 18.2zM58.5 240.8c.5 0 .8.1 1.2 0 .8-.2 2.2-.1 2-1.4-.2-1-1.4-.2-2.1-.2-.1 0-.2.1-.3.1-.3.1-.7.2-.9-.2-.2-.4.2-.6.4-.9 1.5-1.6 2.9-3.2 4.4-4.8 1-1 1.5-2.4 2.5-3.4 2.8-2.6 5.4-5.5 8.3-8.1 2.9-2.6 5.3-5.8 8.7-7.8.9-.5 1.8-1.3 2.2-2.2.6-1.5 1.5-2.4 3.1-2.4.4 0 .6-.3.8-.7.2-.5.4-1 .1-1.4-.5-.6-1.2-.3-1.8-.2-.7 0-1.6.3-1.5 1.1.1 1.5-.7 1.8-1.8 2-.5.1-1.1.5-1.5.8-2.2 2-4.3 4.1-6.7 5.9-3.1 2.4-5.8 5.1-8.3 8-4.7 5.4-9.4 10.9-13.6 16.7-2.5 3.4-4.6 7-7.1 10.4-.4.5-1.2 1.2-.6 1.8.6.7 1.5.2 2.2-.2.8-.5.9-1.3 1.1-2.2.2-1.3.8-2.2 1.6-3.1 1.7-2.1 4-3.6 5.1-6.2.3-1.1 1.2-1.8 2.5-1.4zm228.3 97.6c-.1-4.7-.9-8.1-1.7-11.5-1.1-4.2-1.5-8.8-4.7-12.1-.3-.3-.4-.7-.5-1.1-.1-.7-.5-.9-1.1-.9-.6 0-1.2-.1-1.6.5-.4.6.2 1 .5 1.4.9 1.7 2.2 3.1 2.5 5.1.3 2.4.8 4.8 1.3 7.1.9 3.8 1.7 7.5 2.3 11.4.4 3.2.5 6.5.5 9.8 0 1.7.3 3.5-.3 5.2-.2.6-.4 1.3.2 1.7.6.4 1.4.3 2.2.2.6-.2 1-.8.9-1.4-.3-1.9.3-3.6.4-5.4.1-1.3.2-2.7 0-4-.7-2.3-.7-4.7-.9-6zm-148.7 53.9c.7 0 2.3-.9 2.5-1.4.4-1-.5-1.3-1-1.9-.2-.2-.3-.5-.5-.7-2.8-3.7-4.3-8.3-6.8-12.2-.4-.7-.9-1.4-1-2.3-.3-2.4-1.1-4.7-1.8-7-.3-.8-1-1.6.2-2.3.3-.2.2-.5 0-.8-.5-.8-2.6-1-4-.5-1.2.4-.9 1.2-.8 2.2.2 1.5.7 2.8 1.1 4.2.8 2.3 1.7 4.5 2.6 6.7 1.8 4.8 3.5 9.6 6.9 13.5.7.8 1 2.5 2.6 2.5zm143.7-48.8c-.4-3.3-.4-6.6-.9-9.9-.6-4.3-2.3-8.3-2.6-12.6-.2-3-2.5-4.9-4.3-6.9-.5-.6-1.5-.9-1.9-.1-.5.9.3 1.6 1.1 2.1.2.1.4.1.7.1 1 .1 2 .3.7 1.6-.4.4-.5 1.1-.2 1.5 1.6 2.3 1.6 4.9 1.9 7.6.3 3 1.8 5.7 1.9 8.8 0 1.3 0 2.7.3 4 1.1 4.8.1 9.7.3 14.6 0 .5-.3 1.1.5 1.4 1.5.6 2.9-.5 2.8-2.2-.4-3.3.6-6.7-.3-10zm-5.2-2.7c-.1-.7 0-1.5-.2-2.2-.8-4.3-1.3-8.7-2.4-13-.5-2.3-1.1-4.5-2.4-6.5-.5-.8-1.2-.8-1.9-.6-.6.2-1.1.4-1 1.2.1.8.3 1.4 1.2 1.5.8.1 1.2.7 1.6 1.2.5.6.5 3.4 0 3.5-2.2.4-1.5 1.5-.8 2.8.3.5.5 1 .6 1.5.9 4.8 2.3 9.5 2.2 14.5-.1 2.8 0 5.6-.4 8.5-.3 2 .4 2.7 1.8 2.7 1.7 0 1.9-.4 1.8-2.6-.1-4.1.6-8.3-.1-12.5zm-6.8-50.2c-.9 0-1.3.3-1.2 1.4.5 5.1 3.1 9.1 6 12.9.5.6 1.4 1.3.5 2.1-.8.7-1.9.4-2.4-.5-1.8-3.5-4.1-6.7-5.1-10.7-.1-.4-.2-.8-.7-.9-.6-.1-1.3-.1-1.7.6-.8 1-.9 2.1 0 3.1.6.7.8 1.4 1.2 2.2.8 2.1 1.7 4.1 2.6 6.1.6 1.3 1.4 2.6 3.1 2.2.3-.1.7 0 .9.4.9 1.3 1.3.8 1.8-.4.6-1.6 1.3-1.7 2.3-.5.2.2.3.5.5.7.6.7 1.4.6 2 .2.9-.6.2-1.3-.1-1.9-.4-.6-1-1.1-1.3-1.7-2-5-4.8-9.6-7.1-14.4-.2-.5-.6-.9-1.3-.9zm1.6 52.6c-.1-1 0-2.7-.4-4.5-.3-1.8-.9-3.7-1-5.5-.2-3.5-2.7-4.9-4.8-6.6-.4-.4-1.3-.6-1.6.2-.3.6.3 1.2.8 1.4 1.2.5 1.7 1.7 1.7 2.8.2 4 .6 8 1.1 12 .4 3.8-.2 7.6.2 11.4.2 1.6.9 1.8 2.2 1.8 1.2 0 1.7-.4 1.8-1.7.2-3.6.2-7.1 0-11.3zm-148.6 22.4c.6-1.5-.3-2.1-1.1-2.6-.6-.5-1.5-.3-2.1.2-.9.7-.1 1.6.1 2.3.7 2.6 1.5 5.1 2.3 7.6.5 1.6.6 3.3 1.3 4.7 2.1 3.8 3.2 8 5.7 11.5 1.5 2.1 2.7 4.4 4.3 6.5.5.6 1.1 1 1.8.7.7-.3 1.7-.4 1.9-1.4.2-.9-.7-1.1-1.2-1.5-.3-.2-.6-.5-.9-.9-2.4-3.3-4.7-6.6-6-10.6-1.6-4.8-3.7-9.5-5.6-14.2-.2-.8-.3-1.6-.5-2.3zm39.1-14.8c.3 2.3.5 4.6.8 6.9.1 1.1.9 1.1 1.7.9 1.2-.3 2.1-3 1.9-4.3-.5-2.4-1.5-4.8-1-7.3s0-5.3 1.8-7.4c.2-.2.2-.7.3-1 .6-2.2 1.4-4.2 2.9-5.9.5-.6 1-1.3 1.4-2.1.5-1.1 0-1.9-.9-2.5-.8-.5-1.5-.3-2.1.6-.4.7-1 1.3-1.5 2-1.1 1.6-2.5 3.1-3.1 4.9-1.7 4.9-2.2 10.1-2.2 15.2zM61 307c.8.1 1-.4 1.2-.8.4-.7.8-1.5 1.2-2.2 1.5-2.7 2.6-5.5 3.3-8.5.6-2.3 1.1-4.5 2.4-6.5 1.3-2 2.6-4.2 2.9-6.7.1-.5.3-.9.6-1.3 1.7-1.8 2-4.6 4-6.1.1-.1.2-.3.2-.5.1-.4.1-.7-.2-1-.3-.3-.7-.4-.9-.1-1.2 1.2-2.9 2-3.4 3.9-.3 1.1-.8 2-1.6 2.7-1.5 1.4-2.7 3.3-3.3 5.2-.7 2.6-2.1 4.8-3 7.2-1 2.7-2.6 5.2-3.3 8.1-.3 1.2-.6 2.2-1.5 3-.6.5-.7 1.3-.4 1.8.6.6 1 1.5 1.8 1.8zm203.5 8.2c.1-.8 0-1.5-.5-2.2-1.4-1.9-1.5-4.7-3.4-6.3-.1-.1-.1-.3-.1-.5-.2-1.7-1.2-1.5-2.1-.8-.8.6-1.7 1.5-1.9 2.7-.2 1-.7 1.9-1.7 2.4-1.1.6-1.7 1.8-2.3 2.9-.5.9.8 1.6 1.2 2.4.1.3.3.5.4.8.6 2.9 2.9 4.4 4.4 6.5.2.2.5.3.7.4.7.3 1.3.1 1.7-.4.4-.5.1-1.2-.2-1.5-1.9-1.6-2-4.2-3.1-6.3-.7-1.3-1.5-2.6-1.5-4.2 0-.5.1-.9.5-1.1.4-.2.7.1.8.5.1 2.6 2.3 4.1 2.9 6.5.2.6.6.8 1.1.9 2 .1 2.9-.7 3.1-2.7zm-150.7-80c.4.1 1.1.2 1.5-.4.7-1.1 1.8-1.3 2.8-1.5.7-.2 1.3-.4 1.9-.9.5-.4 1.2-.9.9-1.6-.3-.8-1.2-.5-1.8-.3-1.3.5-2.5 1.4-3.8 1.9-1.5.6-3 1.2-4.3 2.4-1.2 1.1-2 2.7-3.3 3.3-2.7 1.4-4 4.3-6.4 5.9-1.3.8-2.8 1.8-3.4 3.1-.9 1.8-2.3 2.4-3.8 3.2-.7.4-1.2 1-.5 1.9.2.3.2.5-.1.8-1.4 1.3.1 1.6.7 2 .8.5 3.4-.6 3.3-1.5-.1-1.4.9-1.7 1.5-2.5.2-.3.6-.6.6-.8-.1-1.9 1.4-2.1 2.4-2.8.6-.4 1.3-.8 1.9-1.2.3-.3.6-.6.4-1.2-.7-1.5 1.1-1.9 1.3-1.8 2.1.8 2.4-1 2.9-2.3.4-1.1.8-1.9 1.9-2.3.9-.3 1.6-1.1 1.6-2.1 0-1.3.6-1.6 1.8-1.3zm-8.3-38.5c1.1 0 2-.5 2.8-1.2 1.5-1.3 3.1-2.5 4.8-3.4 2-1.1 4.1-2.3 6-3.4 2.4-1.5 5.1-2.3 7.4-3.7 1.8-1.1 3.9-.5 5.8-1.3 4.4-1.8 8.8-4 13.5-5.1.9-.2 1.9-.4 2.8-.6.7-.2 1.2-.6 1.1-1.4-.2-.9-.9-1-1.6-.8-.2 0-.4.1-.7.2-5.4 1.4-10.5 3.6-15.7 5.3-3.4 1.1-6.7 2.4-9.9 4.4-2.2 1.4-4.7 2.4-7 3.5-2.9 1.4-5.5 3.3-8.3 4.7-.6.3-1.1.9-1.6 1.4-.3.3-.7.6-.5 1.1.2.5.7.2 1.1.3zm55.5 227h1.1c.4 0 1 .1 1.1-.5.1-.5-.3-.9-.7-1.2-.2-.1-.4-.1-.6-.2-2.7-1.3-5.6-1.9-8-3.9-1.4-1.1-3.2-2.4-5.3-1.1-.4.3-.6-.3-.9-.6-1-1.1-2.3-1.4-3.6-1.3-.5 0-1.5.4-.7 1.2 1.1 1.1.2 1.2-.4 1.6-.7.4-1.7.4-2.2 1-1.1 1.4-2.3 2.8-3.9 3.7-.3.2-.6.5-.3.9.5.8 1 1.6 2 1.9.9.3 1.3-.4 1.8-.9 1.7-1.9 3.4-3.9 5.2-5.7.6-.7 1.5-1.2 2.3-.3 2.4 2.8 6.2 3.1 8.9 5.6.5.4 1.2.5 1.8.2.5-.5 1.3-.5 2.4-.4zm5.4-26c.4 0 .8 0 1.1-.4.2-.5-.1-.9-.4-1.1-1.2-1.1-2.1-2.4-3-3.7-2.9-4.1-6.7-7.4-9.8-11.3-.7-.9-1.7-2.4-3.3-1.2-.3.2-.9.6-.2.9 2 .9 2.6 3.3 4.4 4.4.3.2.5.5.3.9-.2.5-.7.5-1 .4-.4-.2-.8-.5-1.1-.8-.9-.9-1.7-1.8-2.6-2.6-.4-.4-1.1-.7-1.6-.2-.6.6-.1 1.1.3 1.6.9 1 1.7 2.1 2.7 3.1 1.7 1.7 3 3.7 4.4 5.7 1.2 1.7 2.8 2.5 4 4 .3.3.7.4 1.1 0 .4-.4.2-.8 0-1.2-.2-.4-.4-.7-.7-1.1-1.4-2.2-3.6-3.7-5-5.9-.3-.4-.7-.7-.2-1.2.4-.4.8-.5 1.3-.2.7.5 1.4 1 1.9 1.8 1.8 2.4 3.6 4.7 5.4 7 .5.6 1.1 1.2 2 1.1zm-2.8 7c-1-.2-1.8.3-2.5.8-.4.3-1.2-.1-1.2.7 0 .8.5 1.1 1.2 1.4 2.7 1.1 5.3 2.4 7.6 4.4.7.6 1.5.9 2.4.8.5-.1.9-.2 1.1-.7.1-.5-.3-.8-.6-1-.9-.6-1.9-1.2-2.7-1.8-.4-.3-.9-.8-.7-1.4.3-.6.9-.2 1.4 0 2.3.9 2.8.5 2.5-2 0-.4-.2-.9.2-1.2.5-.3.9-.1 1.2.3.5.7 1.1 1.3 1.6 2.1.5.9 1.4 1.1 2.4 1 .4-.1 1.1-.1 1.1-.7 0-.9-.8-1.4-1.3-2-1.7-2.1-4.2-3.3-5.5-5.9-.4-.8-1.1-.6-1.6-.1-.7.7-1.5 1-2.5 1.2-.6.1-1.4-.2-1.4.9 0 .9.8 1.2 1.5 1.2 1 .1 1.9-.1 2.9 0 .5 0 1.1.3 1.1.9 0 .7-.6.6-1 .7-.9.1-1.8.1-2.2 1.1-.7 1.9-1.6 1.3-2.5.3-.7-.7-1.5-1.2-2.5-1zm-90.4-188c-.2-.9-.7-.6-1.2-.4-2.4.9-3.9 3.1-5.6 4.8-2.3 2.2-4.2 4.9-6.3 7.3-2.6 3.1-5.3 6.1-7.8 9.3-3.5 4.8-7.2 9.4-10.2 14.6-.5 1-.9 2.2-1.8 2.8-.9.6-1.4 1.8-.7 2.4.8.8 1.4-.5 2-1 1.7-1.4 2-3.8 3.2-5.6 2.7-4 5.7-7.7 8.2-11.8.9-1.5 1.9-2.7 3.1-3.9 1.6-1.8 3.6-3.3 4.8-5.3 1.3-2 3.2-3.4 4.2-5.7.3-.7 1-1.2 1.6-1.6 2.4-1.3 3.9-3.9 6.1-5.5.2 0 .3-.2.4-.4zM162.3 414c.9-.4 1.9-.9 3.1-1.1.3 0 .8-.1.8-.5s-.4-.6-.7-.7c-1.7-.3-3.2-1.3-4.6-2.3-.9-.6-2-.9-3.1-.8-1.6.2-2.7.1-4.1-1.5-3.8-4.2-7.2-8.8-11.1-13-.8-.9-1.4-1.4-2.4-.4-1.1 1.1 0 1.6.5 2.1 1.4 1.4 2.6 3 4.2 4.3 1.2 1.1 2 2.9 3.3 4.1.9.9 1.5 2 2.2 3 .7.9.8 2.4 2.3 2.6 2.3.4 4.5 1 6.3 2.8.9.8 2.1 1.1 3.3 1.4zm102.9-72.8c.1-.9-.4-2-.4-3.3 0-.5-.2-.8-.8-.6-.8.3-1.6 0-2.4-.1-1.6-.2-1.9.2-1.4 1.8 1.7 5.3 1.5 10.6.9 16 0 .3-.1.7.2.8 1.1.4 2.2.3 3.3-.1.9-.3 1-1 .9-1.7-.5-2.9.3-5.7.1-8.5-.1-1.3-.7-2.6-.4-4.3zm51.7 23.7c-.3 1.3.4 1.6 1.1 1.8 1 .3 1.9.5 2.6-.5.1-.2.1-.6 0-.7-1.2-1.4-.3-2.8-.1-4.3.5-3.4.7-6.8.5-10.3-.1-1.5 0-3 .1-4.5 0-.6.5-1.3 0-1.7-.6-.4-1.4-.2-1.9.2-1.2.7-2.2 1.5-1.7 3.3.1.6.2 1.2.1 1.8-.3 1.8.2 3 2 3.3.4.1 1 .2 1 .8 0 .5-.5.7-.8.8-.4.2-.7.4-1.1.5-1.6.5-2.1 1.7-1.8 3.2.3 2.2.2 4.3 0 6.3zM89.4 453.6c-1.3 0-2.3.8-2.3 2.1 0 1.5 1.3 1.2 2.2 1.2 2.2.2 4.2.6 5.8 2.5 1.2 1.4 2.1 3.2 3.7 4.2 1.4.9 2.6 2 3.5 3.4.4.7 1 1.6 1.7 1 .9-.8 1.5-2.1 2.2-3.2 0 0-.3-.4-.4-.5-3.6-2.4-6.4-5.7-9.3-9-.8-.9-1.5-.9-2.4-.5-.5.2-1 .7-1.6.7-.8 0-2.3.7-1.8-1.4 0-.6-.8-.4-1.3-.5zm167.4-97.1c1-.3 2.8 0 2.7-2-.1-4.4.8-8.9-.5-13.3-.2-.7-.7-1.6 0-2.4.4-.4.1-.8-.4-.9-.7-.1-1.4-.4-2-.3-.9.2-2.4.4-2.3 1.4.2 1.6.7 3.4 2 4.6.5.4 1.4.5 1.2 1.3-.1.7-.9.5-1.4.6-.5.2-1.4.3-1.1 1 1.1 2.2 0 4.5.4 6.7.1.4-.1 1-.2 1.4-.4 1.5-.2 1.9 1.6 1.9zm-78.7 46.3c.4 0 1-.1 1.3-.6.4-.6-.3-.9-.6-1.3-.3-.3-.6-.6-.7-1-.8-2-2.2-2.9-4.2-2.6-1.8.2-3.5.2-3.6-2.5 0-.3-.4-.6-.6-.9-1.1-1.4-2.3-2.7-3.3-4.2-3-4.6-6.7-8.7-10.4-12.6-.4-.5-.9-1-1.6-1-.5 0-.9 0-1.2.6-.2.5.1.9.4 1.1.8.5 1.1 1.3 1.8 2 4.1 4.1 8 8.4 11.2 13.4.6 1 1.3 1.8 2.4 2.3.4.2.8.5.7.9-.4 1.3.5 1.5 1.2 1.7 2.1.7 4.1 1.4 5.3 3.6.3.6 1 1.1 1.9 1.1zM43.2 317.6c.4 0 1.2-.2 1.5.9.6 2 1.1 2 2.6.5 1-1 2.3-1.7 3.6-2.3.8-.4 2.1.2 2.2-1.4 0-1.1.8-1.9.9-2.9.1-.6-.4-.8-.9-.8-.6.1-1.1.4-1.4 1-1.7 2.6-4.5 2.7-7 3.2-1 .2-1.6-.2-1.1-1.4.4-.8.3-1.6-.8-1.3-1.4.3-2.4-.2-3.2-1.4-.5-.7-1.2-.8-1.8-.4-1.1.7-1.2 2-1.3 3.2-.1.8.5 1 1.1 1.1.8.2 1.7.3 1.6 1.6 0 .7.7.7 1.2.7.8-.1 1.6-.2 2.8-.3zm100.9 44.7c-.2 0-.5.1-.8.2-2.1.5-2.2.7-1.1 2.7.5.9.6 2 .9 2.9 1 3.4 2.2 6.7 4.2 9.6.8 1.1 1.6 1.2 2.6.4 1.5-1.3 1.6-2 .2-3.6-.2-.2-.3-.5-.5-.7-1.8-3.2-3.1-6.6-3.9-10.2-.1-1.1-.6-1.4-1.6-1.3zm-.5 61.4c-.4.2-.6.4-.9.6-.5.4-1 .9-1.4 1.3-.4.4-1.2.4-1.1 1 .1.7.9.6 1.3.9 2.3 1.4 4.7 2.8 6.9 4.3 2.2 1.6 4.6 2.9 7.1 3.8.4.2 1.2.6 1.4.2.3-.6-.2-1.3-.6-1.8-.3-.3-.7-.4-1-.6-.6-.5-1.4-.9-1.4-1.7 0-1.3-.8-1.6-1.6-2-1.8-.8-3.4-1.9-4.9-3.2-1.2-1-2.8-1.4-3.8-2.8zm13.7-50.2c-.4-.1-.8-.2-1 .2-.3.5 0 .8.3 1.1 2.9 3.4 5.7 6.9 8.6 10.3 1.9 2.2 3.9 4.3 5.5 6.7 1.1 1.5 2.5 2.2 3.9 3.1.4.3.9.3 1.2-.2.3-.5-.1-.8-.4-1-2.2-2-3.7-4.6-5.7-6.8-3.6-4-7.1-8.2-10.6-12.3-.5-.7-1.1-1.1-1.8-1.1zm111.4-56.4c.6 0 1.3-.2 1.4-.5.1-.7-.4-.9-.8-1.3-1.7-1.6-1.7-2 .1-3.1.7-.4.7-.8.2-1.2-1.4-1.2-2.2-2.7-2.7-4.5-.5-2.3-2.9-3.6-2.6-6.3 0-.1-.2-.4-.3-.4-.9 0-1.7.1-2.3.9-.5.7-1.5 1.5-.7 2.4 1.4 1.6 2.1 3.6 2.9 5.5.9 2.4 2.4 4.5 3 7 .2 1.2.9 1.5 1.8 1.5zm-106.8 49.6c-.6 0-.9 0-1 .5-.1.6.1 1.1.6 1.4 2.2 1.3 3.5 3.5 5 5.6 2.5 3.6 5.7 6.5 8.5 9.9 1.4 1.6 2.3 3.8 4.4 4.6.5.2 1 1 1.5.3.4-.6-.1-1.2-.4-1.8-1.1-1.9-2.7-3.4-4.1-5-3.9-4.5-8.3-8.5-11.7-13.4-.8-1.1-1.9-1.7-2.8-2.1zm-1.9 3.5c-.8 0-1.4 0-1.6.6-.2.7.5.9.8 1.2 1 .8 1.9 1.6 2.7 2.5 2 2.3 3.6 5 5.8 7.1 2.8 2.7 5.2 5.8 7.5 8.9.6.8 1.3 1.1 2.2 1 .9-.1 1.2-.7.5-1.3-2.5-2-4.1-4.9-6.2-7.2-3.2-3.4-6.4-6.7-9-10.6-.7-1-1.6-2.1-2.7-2.2zm-40.7 64.3c-2.7-.2-3.1 0-4 2.8-.2.7-.6 1-1.1 1.3-2.1 1.3-2.1 1.4-.2 2.9.9.7 1.2.7 1.7-.4.1-.3.6-.5.9-.8 1.7-1.2 3.4-2.4 4.2-4.5.3-.9.8-1.6 1.9-1.8 1-.2.9-.9.3-1.6-.7-.9-1.5-1.6-2.3-2.4-1.7-1.7-3.4-3.3-5-5.2-.5-.6-1.2-.3-1.7.1-.5.5-.2 1 .2 1.4 1.9 1.8 3.4 3.9 5.7 5.2.8.4 1.6.9 1.2 2.2-.3 1.2-1.1.8-1.8.8zm-2.5 15.5c1.2-.1 2-.7 2.7-1.6.5-.6.1-1.2-.4-1.2-2.7-.3-4.3-2.3-6-4.1-.7-.7-1.4-.9-2.3-.8-1.8.2-3.6.1-5.2-1-.8-.6-1.9-.8-2.9-1.1-.4-.2-1-.2-.9.6.2 1.5 3.4 3.9 4.5 3.3 1.1-.6 1.8-.2 2.7.3 2.1 1.2 3.8 3.1 5.7 4.6.6.5 1.4.9 2.1 1zm45.5-134.2c.8 0 1 .5.6 1.1-.4.6-.9 1-1.4 1.6-.4.5-.7 1-.2 1.6.9 1 1.8 1.6 3.1.8 1.6-1 2.2-2 1.6-3.4-.8-1.8-1.7-3.6-2.3-5.4-.6-1.7-1.5-1.7-2.6-.9-1.2.8-2.3 1.7-3.4 2.7-.4.4-1.1 1-.9 1.8.3 1 2.2 1.7 3.2 1.2.7-.3 1.4-.9 2.3-1.1zm11.7-2.2c.2-.6.4-1.1-.3-1.2-.4-.1-.8.2-.8.7 0 .4.2.8.3 1.2.6 1.4 1.3 2.8 1.8 4.3.2.4.4 1.2-.3 1.4-.5.2-.7-.5-.8-1-.2-.6-.4-1.2-1.2-1-.5.1-1.1 0-1.4.6-.3.7.2 1.2.6 1.6 1.7 1.8 2.7 3.9 3.1 6.4.4 2.6 1.2 2.7 3.5 1.7 1.4-.6 1.8-2.7 3.7-2.4.3.1.3-.5.1-.9-.3-.4-.6-.8-.8-1.2-.5-1.1-.8-2.1-2.4-1.4-.7.3-1.5-.2-1.7-1.3-.3-1.4-1.2-2.5-1.7-3.7-.5-1.2-.7-2.4-1.9-3.1.1-.2.2-.6.2-.7zm-11.8 105.2h1.2c.6 0 1.2-.4 1.2-1.1 0-.8-.6-1-1.2-1-.8 0-1.7-.1-2.3-.6-1.8-1.5-3.9-2.5-5.7-3.9-1.1-.8-2.1-1-3 .1-.7.8-1.5 1.1-2.3.2-.3-.3-.8-.5-1.2-.6-.7-.2-1.5-.4-1.8.7-.3 1.1.6 1.1 1.2 1.4 1 .4 2.2-.2 3 .2 1.6.8 3.2 1.4 4.8 2.4 1.6 1.3 3.3 2.7 6.1 2.2zM38.5 384.9v-1.3c0-.6-.5-1.6.5-1.5.8.1 2.4.5 2 1.6-.8 2.5.6 4.5.8 6.7.1 1 .9 1 1.6.7.8-.4.9-1.2.7-2-.5-1.7-.8-3.4-1.5-5-.6-1.3-.7-2.6 0-4 .5-.9.5-2.1.4-3.1-.1-.6-.2-1.3-1.1-.9-.6.3-1.9-.2-1.7 1.4.3 2.5 0 2.8-2.4 3.2-1.2.2-2 .8-1.3 2.2.4.9.3 1.8-.1 2.6-.3.5-.3 1.1.1 1.5.4.4.9.5 1.4.3.6-.2.7-.7.6-1.3v-1.1zm212.3-28.1c1.1-.2 2.4.1 2.6-1.5.2-1.5.5-3 .1-4.5-.3-1.2-.2-2.4.3-3.4.7-1.2-.2-2.2-.3-3.2-.1-.5-1.3.1-2 .2-1.4.2-1.7 1.1-2 2.7-.4 2.1.3 3.4 1.5 4.7.3.3.6.6.5 1-.1.6-.6.6-1.1.6-.6.1-1.2-.1-1.6.5-.4.6-.7 1.2-.4 1.9.6 1.1 1.6.8 2.4 1zm-91.2 46c.1 0 .5.1.7-.2.2-.4-.1-.7-.3-1-1-1.6-1.8-3.3-3.1-4.7-1.4-1.6-3-2.9-4.1-4.9-1-1.9-2.9-3.1-4.2-4.7-.3-.4-.9-.7-1.4-.6-.7.1-1.2.4-.6 1.3 1.8 2.7 4.1 5 6 7.6 1.3 1.7 2.9 3.2 4 5.1.7 1 1.5 2 3 2.1zm-12.8 17.5c-1.2.2-2.4 1.1-2.8 2-.3.9 1.1.4 1.7.8.2.2.4.4.7.5 1.8.5 2.8 2.5 4.6 3 1.3.4 2.4 1 3.3 2.1.6.7 1.3 1 2.1.9.4-.1.8-.2.9-.7.1-.5-.2-.7-.5-.8-.8-.3-.9-1.2-1.1-1.9-.1-.5-.1-1-.6-1.2-2.4-1.5-4.8-3-7.2-4.4-.3-.2-.7-.2-1.1-.3zm2.1-162c-.2.9 0 1.5.7 2 .1.1.4.1.5 0 .4-.6.2-1.3.1-1.9 0-1.3-1.5-1.7-1.8-2.8-.7-3.2-2.8-5.9-3.5-9.1-.3-1.4-1-1.6-2-1-1.3.8-1.9.3-2.3-1-.5-1.7-1.4-3.3-2.5-4.7-.2-.3-.4-1.3-1-.8-.5.4-.7 1.2-.1 1.8.5.6.6 1.4 1 2.1 1 1.6 1.4 3.6 2.5 5.1.2.3.5.8.9.7.4-.1.5-.6.6-1 .1-.4-.3-1 .3-1.1.6-.1 1 .4 1.2.8.6 1.4 1.3 2.7 1.6 4.2.3 1.3.8 2.4 1.7 3.5.8.9 2.4 1.5 2.1 3.2zm18.3 92c0 .4 0 .7.1 1.1.1.9.5 1.5 1.5 1.4.9-.1.7-.9.7-1.6 0-.5 0-1.1-.1-1.6-.4-4.3.5-8.4 2.3-12.3.5-1 1.1-2 1.6-3 .2-.5.5-1.1 0-1.5-.4-.3-.9 0-1.2.3-1.3 1.2-1.9 2.8-2.6 4.4-1.6 4.1-2.4 8.3-2.3 12.8zm-18.1 12.3c-.4.1-1-.2-1.3.4-.3.6 0 1.1.3 1.7.3.6.5 1.2.7 1.8.9 2.4 1.7 4.8 3.2 6.8.5.6.9.9 1.6.6.9-.4 1.5-2.9.9-3.8-1.2-1.6-2.3-3.4-2.8-5.4-.4-1.6-1.3-2-2.6-2.1zm30.5-44.2c1.5-.4 2.1.9 2.4 1.9.4 1.3.9 2.3 1.8 3.2.3.3.5.8.9.5.4-.3.2-.8 0-1.2-2-3.8-2.7-8.2-4.9-11.9-1.2-2-2.5-4.1-2.8-6.6-.1-.6-.5-1.1-1.2-1.1-.5-.1-.8.2-.9.6-.3.7.2.9.6 1.3 1 1 1.5 2.2 1.9 3.7.5 2.2.8 4.7 2.4 6.5.3.3.5.8.2 1.2-.3.4-.7.3-1.1.2-.3 0-.8-.7-1 0-.2.5.2.9.5 1.3.2.5.7.5 1.2.4zM149.4 410c0-.5-.3-.8-.6-1.1-2.8-3-5.5-6.1-7.8-9.5-.4-.6-.9-1.3-1.4-1.8-.8-.7-1.8-.7-2.5.1-.9.9.4 1.2.7 1.6.9.9 1.7 1.9 2.3 2.9 2 3.1 5.5 5 6.7 8.8.2.5.7.5 1.2.2.5-.4 1.2-.5 1.4-1.2zm-13.5-9.4c-.8 0-1.2 0-1.5.4-.2.3-.2.8.1 1 1.3 1.1 2 2.8 3.1 4.1 1.8 2.3 4.3 3.8 5.8 6.4.6 1 1.7.8 2.3.2.7-.6-.1-1.4-.5-2-2.4-2.9-5.2-5.4-7.2-8.6-.7-.9-1.4-1.6-2.1-1.5zm4.4 14.7c.6-.1 1.3.3 1.7-.5.2-.4-.1-.8-.4-1.1-2.7-3-5.4-6-8-9-.6-.7-1.3-1.3-2-.5s-.7 1.9.3 2.7c2.4 2 4.2 4.6 6 7.1.6.9 1.3 1.5 2.4 1.3zm112.2-91.6c.6 0 1.2-.1 1.9-.1.9-.1 1.2-.4.6-1.3-1.2-1.9-2.1-4-3-6.1-.2-.3-.3-.7-.7-.7-.9 0-3.3 3-3.2 3.9.4 2.7 2 4.1 4.4 4.3zm47.7 31.9c0 1.1-.1 2.1-.6 3-.3.7-.4 1.5.7 1.5 1.5.1 3.3-1.6 3.2-3.1-.1-1.5.3-2.9.5-4.3.1-.5.8-1.3.2-1.6-1-.5-1.8-1.8-3.2-1.3-.6.2-.7.6-.8 1.2-.2 1.6-.3 3.2 0 4.6zm-60.5-144.8c-.7.1-1.4.2-1.6 1-.2.8.5 1.1 1.1 1.4 1.4.8 3.2.5 4.6 1.3 2.6 1.5 5.7 1.6 8 3.7.4.4 1.2.4 1.8.6.6.2 1.2.2 1.4-.5.3-.8-.5-1.1-.9-1.2-2.6-.7-5-2.1-7.3-3.5-.3-.2-.8-.3-1.1-.3-1.2.1-2.1-.5-3-1.1-1-.7-2-1.2-3-1.4zm25 123.3c-.6-2-.7-4.5-3.2-5.5-.8-.3-1.5-.9-1.9-1.8-.3-.6-.8-.7-1.3-.5-.6.2-.7.8-.7 1.4 0 1.2.8 1.7 1.7 2 1 .3 1.5.7.4 1.6-.3.2-.6.5-.2.9.8.7 1 1.9 1.6 2.8.8 1 1.9 1.1 3 1 .7-.3.5-1.1.6-1.9zm-127.9 84.5c.6 0 1.1 0 1.4-.6.3-.8-.3-1.3-.8-1.8-2.5-2.4-4.5-5.4-6.9-8-.3-.3-.3-1-.9-.9-.8.2-1.2.8-1.5 1.6-.2.6.1.9.5 1.2 2.6 2.1 4.5 4.9 6.6 7.5.4.5.8 1.1 1.6 1zm-11.1-237.3c.3-.1.7-.3 1.1-.3 2.2-.4 4.2-1.6 6.3-2.4 4.1-1.4 8.2-2.9 12.4-4.1.6-.2 1.5-.3 1.4-1-.1-.8-1-.4-1.6-.3-.7.2-1.3.3-2 .5-3.5.9-6.8 2.2-10.2 3.4-2.6 1-5.4 1.5-7.7 3.2-.2.2-.5.4-.5.6.1.6.5.3.8.4zm118.4 147.8c-.2-.6.3-1.5-.6-1.8-.8-.2-1.3.4-1.6 1.1-.5.9-1.1 1.6-1.8 2.4-.6.7-1 1.3.3 1.8.8.3 1.4.9 1.9 1.7.6 1.1 1.7 1.6 2.7 2.2.7.5 1.6.1 1.7-.6.1-.7.8-1.9-.3-2.3-2.1-.9-2.8-2.3-2.3-4.5zm-83.1-22c0-1.5-1.2-2.3-2.4-1.4-1.7 1.2-3.1 2.8-4.8 4-1.5 1.1-.4 2.3 0 3.1.5.9 1.6.5 2.4-.2 1.3-1.3 2.5-2.8 4-3.8.6-.3.7-1 .8-1.7zm-84.6 53.5c.2 1.7.3 3.2 1.2 4.5.6.9 1.3 1.7 2.4 1.2 1.1-.6.5-1.7.3-2.5-.3-1.6-.9-3.4-.4-4.9.6-1.8.5-2.5-1.4-2.4-.4 0-.8-.4-1.2-.5-.3-.1-.7-.2-.9.2-.2.4-.1.8.2.9 1.1.4.6 1.2.4 1.9-.4.5-.5 1.1-.6 1.6zm52.9-91.7c-.1-.3-.2-.6-.4-.5-1.6.3-3.3-1-4.9.4-1 .8-1.9 1.5-2.6 2.6-.8 1.2-1.8 2.2-2.8 3.1-.5.5-1.3.8-.7 1.7.6.8 1.4 1.4 2.4 1 .7-.3 1.6-.7 1.2-1.8-.3-1.2.2-2 .9-2.8 1.2-1.3 2.5-2.2 4.3-2.1 1.1.1 2.1-.4 2.6-1.6zm3.9 152.2c.6 0 1.2-.1 1.4-.8.2-.7-.3-1.1-.8-1.4-.8-.5-1.7-1.1-2.1-2.1-1-2.1-2.8-3.3-4.1-5.1-.7-.9-1.5-.5-2.1.1-.8.7-.2 1.2.3 1.8 2.2 2 4.4 4 5.8 6.8.3.6.9.8 1.6.7zm115.2-90.7c.3 0 .7 0 1-.3.4-.5-.1-.8-.4-1.1-.4-.5-.8-1.1-.4-1.6 1.4-1.9.2-3.2-.7-4.7-.7-1.1-1.8-1-2.4.1-.8 1.6-1.6 3.1.2 4.6.2.2.3.7.4 1 .1 1.6 1.1 1.8 2.3 2zm56.9 25.2c.1 1-.4 2.4 1.2 2.3 1.2-.1 2.9.3 3.2-1.5.2-1 .1-2 .3-3 .2-.9-.2-1.5-1.1-1.7-1.1-.3-2.2-.6-3.3-.1-.1 0-.1.3-.1.5.4 1.1-.2 2.3-.2 3.5zM113.4 187.5c-.2-.6-.6-.7-1.1-.5-1.4.6-2.9 1-4.3 1.8-2.7 1.6-5.1 3.6-7.9 5-.8.4-2.5.8-1.9 1.9.4.8 1.8-.2 2.7-.7 3.9-2.3 7.8-4.5 11.6-6.8.4-.1.8-.2.9-.7zM222.3 387c-.3.1-.9 0-1.1.6-.2.7.1 1.4.6 1.8 1 .8 1.7 2 2.3 3.2.8 1.6 2.6 2 3.7 3.2.2.2.4 0 .6-.1 1-.7 1-1.5.1-2.4-1.6-1.7-3.4-3.2-4.5-5.4-.3-.7-.9-.9-1.7-.9zm-53.9-77.4c1-.6 2.1-.1 3.1.5.3.1.5.2.8 0 .2-.2.2-.5 0-.6-.9-.8-.9-2-1.1-3-.3-1.2-1-1.9-2.2-1.5-.8.2-1.2-.1-1.8-.8-1.4-1.4-1.2-3.5-2.3-5-.3-.4-.4-1.2-1.1-.7-.6.4 0 .8 0 1.3.6 3.4 3.1 5.9 3.5 9.3.1.4.5.5 1.1.5zm8.4-141.5v.1h1.4c.6-.1 1.5 0 1.4-.9 0-.8-.9-.6-1.4-.6-3.5 0-7 .6-10.5 1.2-1.5.3-3.1.1-4.5.8-.5.2-1.1.4-.9 1.1.1.7.8.6 1.3.5 1.6-.3 3.2-.7 4.8-.9 2.8-.5 5.6-.9 8.4-1.3zM37.7 375.5c-.1-.6.2-1.6-.7-2-1-.5-1.8.3-1.8 1.7 0 1.2.2 2.5-1.6 2.8-2.4.4-3.2 2.5-2.2 4.9.4.8 1 .9 1.7.8.8-.1.9-.8.7-1.4-.7-2.4.7-3.5 2.4-4.3 1.1-.5 1.6-1.2 1.5-2.5zm88.8 52.6c-.1-.5-.4-.7-.7-.7-1.7-.2-2.7-1.5-3.7-2.7-1.1-1.2-2.4-2.2-3.7-3.2-.3-.3-.7-.6-1.1-.3-.4.3-.3.9-.2 1.3.4 1.2 1.2 2 2.1 2.8 1 .8 2.3 1.4 2.1 3.2-.1.5.4.8.8.7 1.2-.4 2.4-.2 3.6-.3.5-.1.8-.2.8-.8zm1.4-142.9c1.4-.5 2.9-1.2 3.9-2.7.3-.5.4-.9-.1-1.4-2.2-2.1-3-2.1-5 .4-.3.4-.5.9-.9 1.1-1.1.6-.6 1.2-.1 1.8.6.6 1.3.8 2.2.8zm116.7-96.1c.9 0 1.8.2 2-.7.2-1-.7-1-1.3-1.3-2.1-1-4.5-.4-6.6-1.7-.6-.4-1.3-.8-2-1-1.1-.3-2.3.3-2.4 1.3-.2 1.1 1.1.8 1.8 1 1.4.3 2.8-.2 4.1.8 1.4 1.1 3 1.4 4.4 1.6zm71.2 159.5c0-.7.3-1.5-.4-2-.4-.3-.2-.6 0-.9.3-.4.8-1 .1-1.3-.8-.4-1.7-.2-2.4.3-.4.3-1.1.7-.6 1.4.6.8.2 1.3-.3 1.9-1.5 2.1-1.3 2.4 1 3.1l1.2.3c1.2.1 2.4.3 1.4-1.7-.1-.3 0-.8 0-1.1zM25.6 293.8c-.3 1.2.3 1.3 1.1 1.3 1.3 0 1.5-1.1 1.5-2.2-.1-3 1.9-4.5 3.7-6.1.6-.5 1.9-.8 1.5-1.6-.4-.8-1.2.2-1.8.6-1.6.9-3.9 3.5-4.9 5.2-.7 1-1.1 1.8-1.1 2.8zm256.1 148.1c.7-.1 1.3-.4 1.7-1 .5-.6.9-1.2 1.5-1.7 1.6-1.3 1.5-1.5-.4-2.3-.2-.1-.4-.1-.6-.3-1.2-1.1-2.1-.3-2.8.7-.3.4-.5.8-.8 1.1-.6.5-1.1 1.1-.6 2 .5.8 1 1.5 2 1.5zm-127.1-79.6c-1.5 0-1.9.7-1.2 2 .5 1.1 1.2 2.1 1.8 3.1.6 1 1.3 1.3 2.3.8 1-.6 1.5-1.6 1.2-2.7-.5-1.7-2.4-3.2-4.1-3.2zm-129.2-33c1.3 0 1.9-.6 1.6-2.1-.4-1.6-.1-3 .4-4.4.4-1.2.8-2.4 1.1-3.6.1-.3.3-.7-.1-1-.3-.2-.7-.1-.9.2-1 1-2.1 2.2-1.6 3.7.5 1.7-.2 2.1-1.5 2.2-.4 0-.8.1-.9.6 0 .4.3.7.6.7 1.5.4 1.3 1.1.6 2.2-.7.9-.3 1.5.7 1.5zm264.3-55.6c1.4 0 2.3-1 1.8-2.1-.6-1.3-1.5-2.4-2.3-3.6-.2-.3-.5-.5-.9-.4-1.1.5-2.1 1.3-2.6 2.5-.5 1.3.9 1.2 1.3 1.7.3.4.7.8 1.1 1.2.5.5 1 .7 1.6.7zm-84.3 116.8c-.6.2-1.5.1-1.6 1 0 .8.8.9 1.4 1 2 .1 4 1 6.1-.2 1.6-1 1.8-1.3.6-2.7-.2-.3-.4-.6-.5-.9-.2-1.1-1.1-1.3-1.9-1.5-.8-.1-1.7 0-1.9 1.1-.1 1 .7 1 1.3 1.2.5.1 1.5 0 1.3 1-.1.8-.8 1.5-1.7 1.5-.6 0-1.1-.1-1.5-.6-.4-.5-.9-.9-1.6-.9zM117 287.8c1.4.1 2.5-.3 3.2-1.7.3-.6.8-1.1 1.3-1.5.8-.6 1.3-1.3.5-2.3-.6-.8-2.6-.9-2.9 0-.6 1.6-1.9 2.3-3 3.4-.4.4-.9 1-.6 1.6.2.7.9.5 1.5.5zm11.2 138c.5-.1 1.4.3 1.5-.3.1-.7-.8-.7-1.3-.9-1.4-.5-2.5-1.4-3.3-2.7-.9-1.3-2.1-2.3-2.9-3.8-.6-1.2-1.4-.4-2 0-.9.5-.3 1.1.2 1.5 1.1 1.3 2.3 2.5 3.4 3.8 1.1 1.4 2.3 2.8 4.4 2.4zm31.2-145.2c-.1-.2-.1-.5-.2-.8-1.2-2.2-2.4-4.3-2.8-6.9-.1-.4-.5-.8-.9-.5-1 .8-1.8.5-2.6-.3-.4-.3-.9-.4-1.3 0-.5.5 0 .9.3 1.2.3.4.3.9.4 1.4.3 1.4.9 1.7 2 .8.9-.7 1.2-.4 1.6.5.7 1.7 1.3 3.5 2.8 4.7.2.1.4.3.5.3.2.3.2 0 .2-.4zm-35.6 133.7c-.4 0-.8.2-1 .6-.3.4-.1.8.2 1.1.4.4.9.8 1.1 1.4 1.1 2.2 3.1 3.5 4.4 5.4.5.7 1.2.8 1.8.4.7-.5.1-1.1-.1-1.6-.1-.3-.4-.6-.6-.9-1.4-1.5-2.9-2.9-3.9-4.8-.3-.7-1-1.5-1.9-1.6zm4.6-124.1c-1.5 0-2.5.8-3.4 2.8-.6 1.2.2 2.3.6 3.3.3.8.8.2 1.2-.2.9-1 1.9-2 2.8-2.9.5-.5 1.3-1 .8-2-.5-.8-1.2-1-2-1zm-16.2-87.3h.4c1.8-1.2 2.9-.8 3.4 1.5 0 .2.3.4.5.5.6.3 1.3.5 1.9 0 .4-.3.6-1.1.2-1.3-1.4-.9-1.5-2.5-2.1-3.8-.3-.6-.9-1-1.6-.8-.5.1-1 .3-.9.9.2 1.5-.8 1.3-1.6 1.3-.4 0-.8.1-1.2.2-.3.1-.7.3-.7.7 0 .5.4.6.8.7.3 0 .7 0 .9.1zm6.7 93.7c1.7.1 2.3-1.7 3.2-2.9 1-1.3.9-1.6-.6-2-1.9-.6-3.4-.4-4.3 1.9-.2.6-1.1 1.1-.8 1.9.5.8 1.4 1 2.5 1.1zm5.2 139.5c-1.6-.3-1.8 1.2-2.5 2.1-.3.3-.4.8 0 1.1.9.7 1.7 1.4 2.6 2 .5.4 1.3.4 1.7-.2.5-.9 1.8-1.9 1.3-2.7-.6-1.2-1.7-2.1-3.1-2.3zm157.6-2.8c0-.4-.3-.5-.6-.6-2.1-1.2-2.6-1-4.8 1.3-.8.8-1.3 1.6-.4 2.6s2.1 1.4 3 .3c.8-1.1 1.8-2 2.5-3.1.2-.2.3-.4.3-.5zM305 227.7c-.4 0-.8-.1-1.1.4-.3.6.1.9.5 1.2.7.6 1.5.9 2.3 1 1.7.2 3.2.6 4.3 2.2.6 1 1.7 1.5 2.5.7 1-.9-.2-1.7-.8-2.4-.6-.7-1.4-1.3-2.1-1.9-.4-.4-.9-.6-1.4-.3-1.1.7-2 .3-2.9-.5-.4-.1-.8-.4-1.3-.4zm-66.7-25.2c.8-.2 1.7.1 2.5 1 1 1 2.3 1.3 3.6 1.2.5-.1 1.1-.2 1.2-.8.1-.7-.4-1-.9-1.1-1.4-.3-2.6-1.7-4.3-1-.4.2-.8-.4-1.2-.5-1.2-.5-2.4-1.3-3.7-1.1-.4 0-1 .1-1.2.6-.2.6.4.8.8 1.1.8.6 1.9.7 3.2.6zM21.4 313.6c.4-.3 1.9 0 1.5-1.3-.6-2.2-.2-3.8 1.2-5.5.5-.7.5-1.8-.5-2.1-.8-.3-1.8.1-1.8 1.1-.2 2.3-1.4 4.2-1.7 6.4-.2 1.1.1 1.4 1.3 1.4zm246-123.1c.6-.1 1-.1 1.2-.4.2-.2.1-.5-.1-.6-1.7-.8-2.7-2.9-4.8-2.7-1.2.1-2.1-.2-2.8-1.2-.3-.4-.7-.6-1.1-.8-.8-.3-1.8-.4-2.1.5-.3.7.6 1.2 1.2 1.5.3.2.7.3 1.1.4 1.1.1 2 .7 2.9 1.3 1.4.9 3.1 1.4 4.5 2zM126 275.9c-1.4-.2-2.3 1.1-3.3 1.9-.7.5-1.4 1.1-1.3 2 .1.9 1.2.9 1.9 1.2.8.4 1.5.1 2.1-.7l1.8-2.4c.3-.4.7-.8.3-1.4-.3-.5-.8-.6-1.5-.6zm10.9-39.5c-.4-1.2-.5-2.7-1.3-3.9-.9-1.1-1.7-2.2-2-3.7-.2-.9-.7-1.6-1.3-2.3-.4-.4-.8-.2-1.2.1-.4.3-.3.6-.1.9 1.3 2.4 2.8 4.8 3.8 7.4.3.7.8 1.3 1.2 2 .2.3.3.7.7.6.3-.1.1-.6.2-1.1zm151.5-25.2c-.5.2-1.3-.3-1.6.5-.2.5.2.8.6 1 2.1.7 3.8 2.1 5.6 3.4.4.3 1 1 1.6.3.6-.8.3-1.5-.3-2.1-1.6-1.9-3.5-3-5.9-3.1zM26.1 332.1c.1-.6 0-.9-.4-1-.4-.1-.9-.1-1 .4l-.6 2.1c-.4 2.3-.8 4.6-1.3 6.9-.2 1.1.1 1.4 1 1.1.9-.2 1.4-.8 1.3-1.8-.1-1 .1-1.9.3-2.9.3-1.6.2-3.3.7-4.8zm4.8-25.5c-1.2.4-2.3.7-3.3 1.2-.6.3-.1.6.2.9 1 1 .8 4.2-.3 5.1-.3.3-1 .4-.7 1 .2.5.8.6 1.4.5.7-.1 1.2-.4 1.4-1.1.7-2.2.8-4.7 1.9-6.8 0-.4-.2-.8-.6-.8zm93-20.7c-1.1 0-3.6 2.4-3.3 3.3.3 1 1.5.4 2.2.7.3.1.5.2.8.3 1 .1 3.1-1.3 3-2.2-.1-1.3-1.2-1.7-2.3-2-.1-.1-.3-.1-.4-.1zm42.7 26.3c-.6.1-.9.4-.5 1.1 1.1 2.3 2.2 4.7 3.3 7 .4.9 1.4 1.6 1.2 2.9-.1.6.4.8.9.9.4.1.7 0 .9-.3.4-.5 0-.9-.3-1.2-.4-.6-1-1.1-1.2-1.8-.5-2.7-2.1-4.8-3-7.3-.2-.6-.5-1.2-1.3-1.3zm39.4 71.6c-1 .2-2.6-.5-2.2 1.8.1.6-.5.7-1 .8-.6.2-1.2.3-1.8.5-.6.3-1 .9-.5 1.4 1.1 1 2.3.7 3.6.3.9-.3 1.2-.7.8-1.7-.3-.6.2-1 .8-1.1.5-.1 1-.1 1.5-.2.6-.1 1-.4.9-1.1-.1-.6-.5-.7-1-.7H206zm90.3-159.3c.7.1 1.1-.3 1.4-1 .3-.9-.4-1.3-1-1.4-1.4-.3-2.3-1.2-3-2.4-.3-.5-.8-.7-1.3-.7-.6 0-1.6-.2-1.5.9.2 1.9 3.4 4.6 5.4 4.6zm-167.6 212c.8 0 1.4-.3 1.8-1.1.3-.8 0-1.3-.5-1.8-.9-1-2.1-1.6-3-2.7-.4-.5-1.1-.5-1.8-.3-.4.1-.5.4-.5.8 0 .5 3 4.9 3.5 5 .2.1.4.1.5.1zm159.8-199.8c.5-.1 1.1.1 1.4-.5.2-.4-.1-.8-.4-.9-1.6-.6-2.5-2.1-3.6-3.2-.6-.6-1.2-1.1-2.1-1.1-.5 0-1.1.1-1.2.7-.2.6.2.9.6 1.2 1 .6 1.8 1.5 2.5 2.4.6.9 1.7 1.2 2.8 1.4zM59 285.2c.7.1 1.3-.1 1.6-.8.8-2.1 1.2-4.5 3.4-5.5.3-.1.5-.7.2-1.2s-.7-.6-1.2-.5c-1.3.2-1.9 1.3-2.1 2.5-.1.6-.1 1.2-.7 1.5-1.1.4-1.4 1.5-2 2.4-.7 1.1-.1 1.4.8 1.6zm216-58.6c-.6-.1-1.2-.5-1.5.4-.2.6.4.8.7.7 2-.8 2.8.9 4 1.9.5.4.8 1.1 1.4 1.3.5.1 1.2.4 1.6-.2.4-.6.2-1.1-.2-1.7-1.4-2.3-2.7-2.9-5.1-2.5-.3.1-.6.1-.9.1zM145.8 260c0 .8 0 1.5.4 2.2 1.4 2.3 2.7 4.5 4.1 6.8.2.3.3.8.7.6.4-.2.1-.6.1-1-.1-1.3-1.3-1.7-1.6-2.9-.5-1.9-1.2-3.8-1.8-5.7-.2-.7-.8-1.4-1.5-1.3-.6 0-.3.8-.4 1.3zm115.5-55.7c-1 0-2 .4-2.9.8-.3.1-.5.4-.5.7 0 .4.4.4.7.4 1.3.1 2.3.8 3.3 1.7.5.5 1.1.8 1.8 1 .7.2 1.3 0 1.3-.9-.1-1.1-2.7-3.7-3.7-3.7zM35.4 323.9c-.5 0-1.2-.1-1.3.6-.1.9-.6 1.7-.8 2.6-.2.9.1 1.6.9 1.8.8.2 1.5.1 1.7-.9.1-.6.4-1.1 1-1.3.7-.2 1.8-.1 1.8-1s-1.2-.7-1.8-1.1c-.4-.3-1-.5-1.5-.7zm99.2 100.5c-1.2 0-2 .4-2.3 1.4-.3.9.3 1.4 1 1.9.4.2.6.7 1 .9 1 .6 1.9.3 2.6-.5.4-.4 1-1 .6-1.5-.8-.9-1.8-1.9-2.9-2.2zM73.9 239c.3-.1 1.1-.2 1.2-.5.8-2.2 2.6-3.2 4.3-4.3.2-.1.3-.3.5-.5.2-.4.3-.8.1-1.2-.3-.5-.7-.4-1.1-.3-1.2.3-2 1.2-2.9 2.2-.9 1.2-1.2 3.1-3.1 3.3-.3 0-.5.4-.3.7.2.5.6.6 1.3.6zm215.8 45.8c.3-.1.9-.2 1.4-.4.6-.2 1.2-.4 1.8-.4.6 0 1.1-.1 1.1-.8 0-.7-.5-.9-1-1-.5-.1-1.1-.1-1.6-.5-1.6-1.5-2.5-1.2-3.2 1-.5 1.5-.1 2.1 1.5 2.1zM132.1 432.7c.5 0 1.2-.5 1.6-1.4.4-1-.5-1.1-.9-1.5-.4-.5-.9-.9-1.3-1.4-.9-1.1-1.9-.7-2.9-.2-.4.2-.6.6-.2 1 .9.8 1.7 1.7 2.2 2.9.1.5.6.6 1.5.6zM294 227.4c-.6.1-1.8.1-1 1.4 1.1 1.8 2.8 3 4.5 4.1.4.3.9.3 1.3-.1.4-.5.1-1-.2-1.3-1-1.2-2-2.4-3.1-3.7-.4-.4-.9-.5-1.5-.4zM120.9 445.5c1.3 0 1.8-1 2.5-1.7.2-.2.2-.7-.1-.8-1-.5-1.5-1.6-2.6-1.9-.7-.2-1.4-.1-1.9.4s-.8 1.3-.5 1.8c.7 1.1 1.6 2 2.6 2.2zm-81.8-18c-.7 0-.9.4-.3 1.2.9 1.3 1.6 2.8 2.1 4.4.2.8.8 1.3 1.6 1.6.4.1.8.3 1.1 0 .4-.4.1-.8 0-1.2-.6-1.5-1.3-2.9-2-4.3-.6-.9-1.2-1.7-2.5-1.7zm247.1-148.9c.9-.1 1.8-.8 2.2-2 .2-.6-2.2-2.9-2.8-2.7-1 .3-1.8 1.2-2 2.1-.3 1.2 1.2 2.7 2.6 2.6zM38 269.3c-.9-.1-1.6 0-2.2.3-.9.5-1.1 1.7-.4 2.2 1.7 1.3 5 .1 5.6-2.1.1-.4.3-.9 0-1.2-.4-.3-.9-.2-1.2.2-.6.6-1.2.7-1.8.6zm242.7-52.5c-.8-.1-1.3.3-1 1.4.4 1.4 3.1 3.7 4.5 3.7.4 0 1 .1 1.2-.5.1-.5-.3-.7-.7-1-.6-.4-.8-1-1.1-1.6-.5-1.1-1.4-2-2.9-2zm-22.9 118.8c1 .1 1.4-.2 1-1.2-.2-.5-.6-.9-.5-1.5.3-1.6-1.1-1.4-1.7-1.6-.9-.3-1.8-.2-2.5.6-.2.2-.3.6 0 .8 1.2 1 1.8 2.9 3.7 2.9zm-218.6 34c.1 1 .2 1.9.4 2.8.3 1.2 1.4 1.3 2.2 1.2 1.1-.2.5-1.2.3-1.7-.4-1.5.3-1.8 1.4-1.9.3 0 .6.1.7-.3 0-.4-.3-.5-.6-.3-1 .4-1.8-.1-2.5-.7-.5-.4-.9-.6-1.4-.3-.5 0-.4.7-.5 1.2zm79.7-90.2c-.1-.8-.7-.9-1.2-1.2-.7-.4-1.4-.4-2 .3-.9 1.3-1.6 2.9-2.9 3.9-.3.2-.7.9.1 1 .7 0 1.9.1 2.1-.7.4-1.1 1.2-1.2 1.9-1.5 1-.3 1.6-.9 2-1.8zm176.4-36.9c-.8-.7-.4-2.1-.9-2.7-.6-.9-1.9-1.4-3-1.8-.6-.2-1 .3-.9 1.1.1 1.2 2.1 3.9 3.2 4.2.7.2 1.4.3 1.6-.8zm-251.6 32c.9 0 3.3-3 3.1-3.8-.1-.3-.3-.5-.6-.6-.8-.1-1.6-.2-2.1.7-.4.6-.8 1.1-1.4 1.5-.6.3-1.7.3-1.5 1.4.2.9 1.3.5 1.9.7.2.1.5.1.6.1zm231.2 165.4c-.1-1-.3-2-1.6-2-.6 0-2.7 2.2-2.5 2.7.3.9.2 2.2 1.4 2.4 1.2.3 2.7-1.7 2.7-3.1zm16.4-214.7c0-1-2.6-4.2-3.6-4.4-.6-.2-1.1.2-1.5.7-.4.5.1.9.4 1.2l2.7 3c.5.5 1 .5 1.6.3.3-.1.4-.4.4-.8zm-168.2-34.1c.9-.4 2-.6 3.1-.6.7 0 1.7.1 1.7-1 0-1-.8-1.4-1.6-1.6-1.4-.2-2.6.4-3.8 1-.5.2-1.2.4-1 1.2.2.8.9.9 1.6 1zm9.2 254.7c0-.4-.2-.6-.5-.6-2.5.3-1.5-.9-.8-2.1.7-1.2.3-1.9-1.1-2.1-1.5-.2-2 1-2.5 2-.4 1 .4 1.7 1.3 2 .7.2 1.3.7 1.9 1.2.6.4 1.3.4 1.7-.4zm116.3-241.1c-.5.1-1.1-.2-1.5.4-.2.3 0 .7.2.8 1.4.6 2.6 1.5 3.8 2.5.5.4 1.2.1 1.8-.1.6-.3.7-.7.2-1.2-1.2-1.3-2.5-2.5-4.5-2.4zm2.4 19.8c.6-.1 1.5 0 1.2-1.3-.4-1.5-2.9-3.3-4.3-3.1-.5.1-1 .1-.9.9.1 1 2.8 3.5 4 3.5zM22 321.6c-.1-.5-.3-.6-.6-.5-1.5.1-2.8 1.3-3.1 3-.1.3-.2.7-.4 1-.3.5-.6 1-.2 1.5.4.6 1 .2 1.6 0 2.3-.8.9-4 2.7-5zm28.3-12.1c0-.7-.1-1.2-.6-1.2-.8 0-1.5.3-1.9 1.1-.5 1.1-1.1 2.1-1.6 3.2-.3.5-.4 1 0 1.5.4.4.8.2 1.3 0 1.8-1.1 1.9-3.2 2.8-4.6zm-6-13.7c1.1 0 2.8-1.6 2.7-2.7 0-1-.8-1.3-1.5-1.3-1.1-.1-3.5 1.8-3.4 2.6.2 1.3 1.5 1 2.2 1.4zm242.3-67.3c.8-.1 1.4-.2 1.5-.9.1-.7-.5-.9-1-1-1.1-.2-1.9-1-2.8-1.6-.7-.5-1.2-1.1-2.1-1-1 .1-1.3.8-.7 1.4 1.6 1.4 3.2 2.7 5.1 3.1zM252 192.3c1.4 0 2-.7 1.6-1.6-.6-1.1-4-2.3-5.1-1.7-.7.4-1.3 1.1-.4 1.6 1.3.7 2.6 1.5 3.9 1.7zm-39.2 208.9c.7-.3 2.1.1 1.4-1.2-.8-1.3-2-2.5-3.5-3.1-.6-.2-1.3-.1-1.7.4-.4.6.2.9.6 1.2.2.1.3.4.4.6.3 1.7 1.6 1.8 2.8 2.1zm108.4-151.9c0-.7-2.7-4.3-3.4-4.3-.6 0-1.3 0-1.3 1 .1 1 2.5 4.1 3.3 4.4 1.1.3 1.3-.3 1.4-1.1zM182.3 398.5c-.5 0-1.2-.1-1.4.5-.2.6.1 1.3.5 1.8.8 1.2 1.9 1.9 3.4 1.5.5-.1.8-.5.6-1.2-.3-1.5-1.5-2.6-3.1-2.6zm96.6-189.2c-.4.1-1.2-.1-1.4.5-.3.7.5.9.8 1.3.6.7 1.6 1 1.7 2.3 0 .8.8.7 1.3.7.7 0 1-.5 1-1.2.2-1.4-1.7-3.6-3.4-3.6zM29.4 378.9c-.2-.7-.4-1.6-.6-2.7-.2-1.1-1.1-.9-1.8-.7-.8.2-.7.8-.3 1.4.4.7.2 1.4-.1 2.1-.2.6-.6 1.2-.1 1.8.6.6 1.2.1 1.7-.1.7-.2 1.4-.5 1.2-1.8zM253 200.6c-.4.4-1.5-.3-1.4.7.2 1.7 3.4 3.6 4.9 3.1.9-.3 1.1-1.1.5-1.6-1.2-1-2.3-2.2-4-2.2zM33.5 394.7c0 .6.8 3.3 1.2 3.8.7 1.1 1.9 1.3 3 .3.2-.2.5-.5.1-.7-1.7-.7-1.8-2.3-2.2-3.8-.2-.8-.8-.7-1.4-.7-.6.2-.7.6-.7 1.1zm242-192.9c-.4 0-1.1-.1-1.3.6-.2.5.4.8.7 1.1 1.2 1.3 2.9 1.7 4.3 2.5.2.1.4.5.7.3.3-.2.2-.6.1-1-.2-1.6-2.6-3.5-4.5-3.5zm11.4 8c0-1.4-1.1-2.5-3.3-3.1-.7-.2-1.8-.6-2.2.1-.4.7.9.8 1.3 1.4.5.6 1 1.2 1.4 1.8.5.6 1 1 1.7 1 .7-.1 1.1-.4 1.1-1.2zm-27.8 1.5c.7 0 1.2.1 1.5-.5.2-.6-.3-.9-.6-1.1-1-.6-2-1.4-2.9-2.2-.6-.5-1.3-.4-1.9-.1-.8.5-.9 1.3-.2 1.7 1.4.9 2.7 1.9 4.1 2.2zm-12-.8c.7-.1 1.3.2 1.5-.3.3-.7-.4-.9-.8-1.2-1.1-.8-2.2-1.5-3.5-1.7-.7-.1-1.4-.1-1.6.9-.2.9.3 1.4 1 1.6 1.2.4 2.4.5 3.4.7zm4.1 125.5c.5-.1 1.3.1 1.3-.9-.1-1.2-.7-2.1-1.7-2.8-1-.6-1.8-.5-2.7.1-.2.2-.5.4-.4.7 0 .5 2.8 2.8 3.5 2.9zM124.7 222.2c.9.1 1.6-.1 1.7-1.1.1-1 .7-1.2 1.6-1.2.6 0 1.1-.1 1.5-.7.1-.2 0-.5-.2-.6-.5-.4-1.1-.4-1.6-.1-1 .7-2 .9-3.2.9-.7 0-1.6.1-1.5 1.3.1 1.1.7 1.6 1.7 1.5zM47 441.8c-.4-1.7-1.7-3.3-2.7-5-.2-.4-.8-.3-1.3-.1-.3.1-.5.4-.3.7.8 2 1.6 4 3.4 5.2.6.4.9.3.9-.8zm-7.6-133.3c1.4 0 1.7-.3 2.4-2 .3-.8.7-1.7-.2-2.3-.9-.5-1.5.2-2.1.8-.5.5-.6 1.2-.9 1.7-.3.4-1.1.6-.8 1.2.4.6 1 .6 1.6.6zm270.2 41.3c.5 0 1.4 0 1-1-.4-.9.7-2.7-1.2-2.8-1.6-.1-3 .7-2.9 1.7-.1 1 1.5 2.1 3.1 2.1zm-66.7-11c-.6.2-1.4-.2-1.5.8-.1 1.8 3.1 4 4.6 3.1.4-.2.9-.8.4-1.1-1.2-.8-1.9-2.4-3.5-2.8zm-5.9.4c-.4 0-1.1 0-1.2.8-.2 1.6 2.4 3.9 3.8 3.4.5-.2 1-.4.8-1.1-.1-.8-2.5-3-3.4-3.1zm28.6-20c-1.9 0-2.8.5-2.8 1.5.1 1 1.6 2.2 3 2.1.7 0 1.9-.1 1.5-1-.3-.9.2-2.8-1.7-2.6zM138.3 446.5c-.1-.5-.5-.7-.8-.8-.9-.2-1.8-.1-2.6.3-.6.3-1.7.6-1.4 1.2.4.7 1 1.6 1.6 2.2.7.5 3.3-2 3.2-2.9zM25.7 371c0 .5-.1 1 0 1.5.2 1.1 1 1 1.8.9.8-.1 1.2-.7.9-1.4-.4-1-.2-2-.1-3 .1-.9-.4-1.2-1.2-1-1.5.4-1.6 1.6-1.4 3zm216.5-172.6c.3 0 .9 0 1.2-.6.2-.4 0-.7-.4-.9-1.4-.6-2.7-1.4-4.1-1.6-.7-.1-1.3.1-1.5.9-.2.7.4 1.1.9 1.4 1.1.6 2.4.5 3.9.8zm-31.2-17c.8-.2 1.6.3 1.9-.7.2-.5.3-1.2-.3-1.7-1-.9-3.4-.9-4.3 0-.4.3-.6.7-.5 1.3.1.5.4.6.9.7.7.2 1.6.3 2.3.4zM32.1 375.8c1.1 0 1.5-.5 1.3-1.6-.2-.9-.5-1.7-.7-2.6-.1-.7-.2-1.3-1.1-1.1-.8.2-1.3.5-1.2 1.4.1 1 .2 1.9.4 2.9.1.8.7 1.1 1.3 1zm3.6-66.5c-.1-.9-.4-1.3-1.1-.9-1.4.8-2.2 2.1-2.6 3.7-.2 1 .6 1.1 1.3 1.4.5.2 1.4.5 1.5-.2.1-1.5.4-2.9.9-4zm3-42.1c1.4-.1 2.3-1.1 3.1-2.2.3-.4.1-1.1-.3-1.5-.4-.6-1-.9-1.8-.8-.7.1-.6.7-.6 1.3 0 .8-.6 1.1-1.1 1.5-.3.3-.9.5-.7 1.1.2.6.8.6 1.4.6zm239.2 178.5c.9-.2 2 0 2.4-1.3.2-.6-1.6-2.1-2.5-2.1-1.1 0-2.8 1.2-2.6 1.9.5 1.5 1.8 1.1 2.7 1.5zm-58.3-52c.6 0 1.1.1 1.7-.3.5-.4.7-.9.1-1.3-.9-.7-1.8-1.3-2.7-1.8-.7-.4-1.5-.2-2 .5-.6.9.1 1.3.5 1.8.6.9 1.5 1.2 2.4 1.1zm107.8-142.8c.1 0-.3.1-.5.4-.3.4-.2.8.1 1.2.5.7 1.1 1.4 1.7 2 .7.8 1.6 2.2 2.6 1.4.8-.7-.5-1.9-1-2.7-.6-1-1.2-2.2-2.9-2.3zM229 368c1.1-.2 2.1-.4 3.2-.6.4-.1.7-.2.7-.7 0-.5-.4-.8-.8-.7-1.1.3-1.8-.4-2.7-.9-.7-.4-1.5-.4-2.1.1-.5.4-.3 1-.1 1.5.3.9.9 1.4 1.8 1.3zM109.2 227.6c.4-.2 1.3.1 1.4-.7.2-1.3 1-1.4 2-1.4.9 0 1.7-.4 1.5-1.5-.2-1-1.1-.7-1.7-.5-.6.1-1.2.3-1.6 1-.4.8-1.1 1.1-2 1.1-.6 0-1.2.1-1.1.9.1.8.6 1.1 1.5 1.1zm-7.7 225.7c-.2-.7-.9-.9-1.4-1.4-.8-.8-2.6-.5-3.3.6-.9 1.4.6 1.5 1.1 2.1.4.4.8.7 1.2 1 .4.4.9.3.7-.3-.2-1.1.2-1.5 1.1-1.4.4-.1.5-.3.6-.6zm87.3-45.6c.6-.3 2.2.6 1.6-1.4-.4-1.2-3.4-2.2-4.5-1.7-.8.4-.8 1-.3 1.5.8.9 1.7 1.7 3.2 1.6zM90.3 207.1c1.4-.2 2.6-.7 3.4-2 .5-.8.5-1.5-.7-1.6-1.4-.1-2.4.7-3.4 1.5-.4.3-.8.8-.6 1.4.3.7.9.6 1.3.7zm126.8-24.6c1.1-.1 1.8 0 2.5-.4.4-.3.8-.6.3-1.1-.5-.7-3.9-1.5-4.6-1.1-.6.3-1 .7-1 1.4s.6.8 1.1.9c.7.1 1.3.2 1.7.3zm29.3 15.6c-.6 0-1.3-.4-1.6.4-.2.4-.1 1 .3 1.1 1.5.7 3 1.6 4.6 1.6.4 0 .8-.1 1-.6.1-.4-.2-.6-.5-.9-1.1-1.1-2.3-1.6-3.8-1.6zM109.9 438.6c.5-.1 1.3-.1 1.5-.9.3-.9-.7-.9-1.2-1.2-.5-.3-.9-.7-1.3-1.2-.5-.7-1.2-1.1-2-1.3-.4-.1-.8-.1-1.1.3-.3.5 0 .8.3 1.1.8.9 1.8 1.7 2.4 2.8.4.4.8.4 1.4.4zM25.2 393c1.1.1 1.4-.4 1.3-1.5-.1-1-.9-1.7-.9-2.7 0-.7-.6-1-1.2-.9-.7.1-.9.6-.9 1.3.1.8.3 1.6.3 2.3-.1 1.3.6 1.5 1.4 1.5zM24 360.7c0-.6-.5-1.4-.4-2.4.1-.8-.4-1.2-1.2-1.1-.7.1-1.1.6-.9 1.4.2.8.3 1.5.1 2.3-.2.9-.3 1.8.8 1.9 1.2.2 1.5-.8 1.6-2.1zm28.5-85.4c-.6 0-1.1.3-1.4.9-.3.7-.8 1.3-1.1 2-.3.5-1 .8-.3 1.5.5.5 1.3.6 1.7.1.8-.8 1.5-1.6 2.1-2.6.6-.9 0-1.8-1-1.9zm133.2 133.9c-1.2.1-1.8.3-1.2 1.5.5 1.1 3 2.8 4.1 2.6.8-.1 1.4-.9.8-1.5-1.3-1-2.5-2.1-3.7-2.6zm-11 8.8c.4-.4 1.9 0 1.1-1.2-.9-1.4-2.2-2.6-4-2.7-.9 0-1.7.5-1 1.4 1 1.1 2.2 2.1 3.9 2.5zm42.4-22.1c.3-.1.9.2 1-.2.2-.5-.5-.5-.8-.8-.5-.4-1.1-.8-1.6-1.3-.4-.4-.8-.8-1.4-1-1-.3-1.8.2-2.1 1.2-.4 1.3.6 1.4 1.3 1.5 1.2.3 2.4.4 3.6.6zm58.8-180.5c.4-.3 1.6.4 1.3-1.1-.2-1.1-3-2.8-4-2.5-.9.2-1.5.7-.7 1.6.8 1 1.8 2 3.4 2zM164 364c-.3-.1-.7-.1-.9.3-.2.5.1.8.5 1 1.3.7 2.2 1.8 3.3 2.8.4.4 1 .6 1.5.9.3.1.6.1.7-.3.1-.2.1-.6 0-.7-1.7-1.4-2.6-3.8-5.1-4zm-133.8 2.5c-.1 1 .4 1.3 1.2 1.3 1-.1 1.6-.7 1.6-1.8 0-.8-.3-1.5-.4-2.3-.1-.7 0-1.5-1-1.2-.7.2-1.5.2-1.3 1.5.2.7.2 1.6-.1 2.5zM288 217.8c.5-.2 1.7-.3 1-1.3-.9-1.3-2.1-2.4-3.8-2.5-.9-.1-1.5.5-.9 1.3.9 1.2 1.9 2.5 3.7 2.5zm-9.5 5.2c.5-.1 1.2-.1 1-1.1-.2-1.3-3.3-3.1-4.5-2.6-.5.2-.6.4-.4.9.4.9 2.8 2.8 3.9 2.8zm-80.8-28c.4 0 .8 0 1.2-.1.6-.1 1.2-.3 1.3-1.2.1-.9-.5-1.1-1.2-1.3-.3-.1-.5-.2-.8-.3-1-.4-1.9-.1-2.7.5-.4.3-.4.8-.2 1.3.6 1.3 1.6.9 2.4 1.1zm-.9 207.1c.5-.3 1.8-.1 1.3-1.6-.5-1.3-3.1-2.2-4.3-1.6-.5.2-.5.7-.3 1 .8 1.2 1.7 2.1 3.3 2.2zm22.5-16.4c-.1 0 .1 0 .3-.1.8-.2 1.7-.7 1.7-1.6 0-.8-1-.5-1.5-.6-.7-.1-1.1-.6-1.6-1-.6-.5-1.2-.3-1.8 0-.4.2-.4.8-.2 1.1.7 1.2 1.4 2.3 3.1 2.2zM285 282.1c.6-.1 1.3-.1 1.4-.8.1-.7-.6-.7-1.1-.7-.6-.1-1.2-.3-1.7-.8-.8-1-1.9-.5-2.9-.5-.8.1-.3.9-.4 1.4-.1.5.1 1.2.7 1 1.5-.4 2.8 0 4 .4zm-52.2 88.7c-.4.1-1 0-1 .8 0 .9 2.6 3.2 3.4 3.2.8-.1 1-.6 1-1.4 0-1.4-1.7-2.7-3.4-2.6zM98.2 229.3c0-.4-.3-.7-.6-.7-.8.2-1.7.1-2.4.9-.8.9-1.6 1.8-2.7 2.2-.4.2-.8.5-.7 1.1.2.6.7.5 1.2.5.6 0 1-.3 1.3-.7.7-1 1.6-1.8 2.8-2.2.5-.2 1-.5 1.1-1.1zm213.2 125.3c-.2 1.1.1 1.8 1.1 1.9 1.1.1 3.4-1.3 3.2-2-.4-1.4-1.9-1.3-2.9-1.6-1.3-.3-1.5.7-1.4 1.7zM206.9 401c1.1 0 1.5-.6.9-1.6s-1.3-2-2.3-2.6c-.8-.6-1.4 0-1.6.7-.4.9 1.9 3.5 3 3.5zM37 416.2c-.7-1.4-1.3-2.9-2.1-4.2-.4-.6-1.3-.6-1.6.4-.3.8 1.5 4.4 2.2 4.7.8.3 1.3.2 1.5-.9zm95.6 23.9c1.6.1 2.3-.5 2.3-1.8 0-1.1-.6-1.4-1.5-1.4-1.1 0-2.9 1.1-2.7 1.9.1 1.2 1.2 1.1 1.9 1.3zM23.4 300.4c-.2 1 0 1.5.8 1.5 1.2.1 2.4-1.3 2.5-2.8.1-1.4-.9-1.6-1.7-1.5-1.8.2-1.1 2.1-1.6 2.8zm9.6-22.7c1.1 0 2.7-1.1 2.9-1.9.2-.8.1-1.7-.8-2.1-.8-.3-1.6-.2-1.9.9-.2.6-.3 1.1-.7 1.6-.3.3-.7.7-.4 1.1.1.2.7.3.9.4zm-1.9 81.9c1.6 0 2.5-1.2 2-2.9-.3-1-1-1.5-1.9-1.4-.8.1-1 .8-.9 1.6.1.4.1.8-.1 1.2-.5 1.2-.1 1.7.9 1.5zm227.5-161.5c-.7.1-1.4-.1-1.7.6-.2.5.1.9.5 1 1.3.7 2.7 1.3 4.1 1.9.4.2.8 0 1-.4.1-.4.2-.8-.1-1-1.4-.7-2.5-1.9-3.8-2.1zm-67.7-20.7c-.9.4-2.5-.3-2.5 1.4 0 1.6 1.5 1.4 2.5 1.3.9 0 2.5.3 2.5-1.3s-1.7-.9-2.5-1.4zM44.7 346c-.1 1.4.8 2.4 2 2.4.8 0 1.4-.3 1.1-1.1-.4-1.1.3-2.9-1.4-3.3-1.2-.2-1.6.8-1.7 2zm193.4 22.3c0-1.2-1.6-3.1-2.6-3.1-.8 0-1.3.4-1.4 1.3-.1.9 2.3 3.1 3.1 3 .7.1.8-.5.9-1.2zm-33.4-187.6c.8-.2 1.9.3 2-.9.1-1.2-.9-1.4-1.7-1.6-1.1-.3-2.1.1-3.1.5-.4.1-.6.6-.6 1 0 .6.4.6.8.7.9 0 1.8.1 2.6.3zm66 40.6c-.6 0-.8.3-.7.9.2 1.3 2.1 3.1 3.4 3.2 1 .1 1.2-.4 1.1-1.3-.3-1-2.8-2.9-3.8-2.8zM168.9 417.9c.3-.1.9.2 1.1-.4.3-.6-.1-1-.5-1.4l-1.2-1.5c-.7-.6-1.4-.7-2.2-.3-.4.2-.9.6-.6 1.1.9 1.1 1.5 2.5 3.4 2.5zm6-5.1c1.6 0 2.3-.6 1.6-1.6-.8-1.1-1.8-2-3.3-1.8-.7.1-1.4.6-.9 1.3.7 1 1.2 2.3 2.6 2.1zM44.1 257.5c-1.5.1-2.4.6-2.6 1.8-.2 1.4 1.1.8 1.7 1.1.4.2.9.5 1.3.3.7-.3 2.2-.3 1.8-1.2-.3-.7-1.6-1.4-2.2-2zM206.7 407c.6 0 1.3.2 1.5-.4.3-.7-.5-.8-.9-1.1-.4-.4-.8-.8-1.2-1.3-.5-.8-1.3-.9-2.1-.9-1 0-1.4.6-.8 1.5 1 1.2 2.1 2.1 3.5 2.2zm-26.6 10.9c.8-.1 1.8 0 1.5-1.2-.3-1.3-2.9-2.7-4.1-2.4-.5.1-.9.4-.6 1 .8 1.2 1.8 2.3 3.2 2.6zM57.5 311.8c1.5.1 1.9-1.2 2.4-2.4.6-1.3-.1-1.6-1.2-1.5-1.3 0-1.4 1.4-2.1 2.1-.3.3-.8.7-.5 1.2.3.5.8.6 1.4.6zm169.8 71.6c-1.2 0-2.2.2-2 1.4.2 1.4 1.3 1.8 2.5 2 .9.1 1.8-.3 1.7-1.3-.1-1.3-1.2-1.9-2.2-2.1zm-115 44.1c-.3-.1-.5.1-.7.4-.2.5-.2 1 .2 1.3 1 .8 1.9 1.7 2.6 2.8.2.4.9.5 1.3.7.4.1.8.1 1.1-.3.3-.5-.1-.8-.4-1-1.1-.8-1.7-2.1-2.7-2.9-.4-.4-.9-.8-1.4-1zm-69.4-93.7c.8-.1 1.8-.1 1.4-1.6-.1-.4-.1-.7.1-1 .4-.7.8-1.5-.2-1.8-.8-.3-1.7 0-2 1.1-.1.5-.3 1-.5 1.5-.7 1.2-.4 1.7 1.2 1.8zm77.5-130.5c.8 0 1.4-.1 1.8-.6.5-.6 1-.9 1.7-1.1.6-.2 1.6-.4 1.2-1.3-.3-.8-1.4-.8-1.9-.3-.9.8-1.8 1.3-3 1.4-.6 0-1.1.6-1 1.3 0 .7.8.5 1.2.6zm189.3 157.8c.2-1-.2-1.6-1.2-1.5-1.1.1-2.3.4-2.4 1.8 0 1 .6 2 1.9 2 1.8 0 1.5-1.3 1.7-2.3zM99.5 234.7c1.4 0 2.9-1.2 2.9-2.3 0-1.1-.8-1-1.4-1-1.3.1-2.5.7-2.9 2-.3 1 .6 1.4 1.4 1.3zm138.6 114.8c.3-.5 2.1.5 1.5-1.3-.3-1-1-2-2.3-1.6-.7.2-1.2 0-1.6-.6-.4-.6-1.1-.5-1.7-.1-.1.1-.3.4-.2.6.3.7.9.7 1.4.6 1-.2 1.4.2 1.3 1.2 0 1 .6 1.2 1.6 1.2zm-9.5-155c.5 0 1.1.2 1.5-.4.2-.3.2-.7-.1-.8-1.3-.8-2.4-2.1-4-2.1-.5 0-.9.2-1 .8-.2.6 0 1.1.5 1.4.9.5 2 1 3.1 1.1zm32.9 23.2c.6-.1 1.1-.1 1.2-.7.1-.6-.4-.7-.7-.8-.8-.4-1.6-.9-2.3-1.5-.7-.7-1.5-.5-2.3-.3-.8.2-.9.9-.3 1.3 1.4.8 2.8 1.6 4.4 2zm40.7 3.8c-.3.1-1.1 0-.8.6.9 1.5 1.8 3 3.3 4 .5.3 1 .1 1.4-.4.3-.5-.2-.7-.4-1.1-.5-.7-1-1.3-1.4-2-.5-.6-1.1-1.2-2.1-1.1zM65.8 285.6c0-.5-.1-.9-.5-1-.5-.2-1-.2-1.5.1-.8.5-1.2 1.4-1.7 2.2-.3.5-.4 1.2.1 1.6.5.4 1.1.4 1.6.1 1.1-.8 1.4-2.1 2-3zm115.7 127.3c.6-.3 1.5.2 1.8-.6.3-1-.7-1.2-1.2-1.7l-.1-.1c-1-.8-2-1-3.2-.4-.4.2-.3.6-.2.9.6 1.4 1.6 1.9 2.9 1.9zm77.2-218.3c.5-.1 1 0 1.4-.3.3-.3.7-.7.1-1-1.4-.7-2.8-1.3-4.3-1.8-.5-.2-1.1.1-1.3.8-.2.7.2 1 .7 1.3 1.1.5 2.2.9 3.4 1zM130 198.8c.7 0 1.2-.1 1.3-.8.1-.7-.3-1.2-.9-1.3-.5-.1-1.1-.2-1.4.3-.6.7-1.3.9-2.1.8-.6 0-1.3 0-1.5.9-.1.3-.1.8.4.9.6.1 1.5.7 1.9 0 .6-1.1 1.4-1.2 2.3-.8zm-49.1 10.8c-.4-.7-.9-.4-1.4-.3-1.9.5-2.7 2.8-4.5 3.4-.3.1-.3.5-.1.8.2.3.6.4.9.2 1.8-1 3.4-2.1 4.8-3.6.1-.1.1-.3.3-.5zM25.3 363.3c.1.6 0 1.5.9 1.6.5.1 1.2-.1 1.4-.8.3-1.1.4-2.2.8-3.3.3-.7-.4-.7-.8-.7-1.4.1-2.3 1.4-2.3 3.2zm63-120.6c-1.1-.1-2.1.3-2.8 1.5-.2.4 0 .7.3.9 1 .8 2.1.7 3.2 0 .6-.4 1.4-.6 1.2-1.5-.2-1-1-.9-1.9-.9zm-42 80.9c0-1.2-.5-1.2-1-1.2-1.9.1-2 1.8-2.5 3.1-.4 1.1.1 1.3 1 1.2 1.2-.1 2.5-2.1 2.5-3.1zm164.1-127.7h1.1c.6-.1 1.3-.2 1.4-1 .1-.8-.6-1-1.1-1.2-.2-.1-.4-.1-.7-.2-1.1-.3-2.2-.4-3.1.4-.3.2-.3.7-.1 1 .8.9 1.9 1 2.5 1zm43.3 134.3c.6-.2 1.9-.2 1.4-1.5-.4-1-1.3-2-2.4-2.4-.5-.2-1.2-.3-1.4.5-.4 1.2 1.1 3.4 2.4 3.4zM130 452.3c1.2 0 1.7-.4 1.7-1.2 0-.9-1.2-2.5-1.9-2.4-1 .1-2 .8-2 1.9 0 1.4 1.3 1.5 2.2 1.7zm-92.9-19.8c-.8.2-1.4.6-1 1.4.8 1.4 1.9 2.7 2.8 4.1.2.3.6.4.9.2.4-.2.2-.6.1-1-.5-1.4-1.6-2.5-1.8-4.1.1-.3-.7-.5-1-.6zm190.2-62.2c-.9 0-1.8-.2-2 .9-.2 1.1.6 1.5 1.4 1.8.3.1.6.3 1 .3.9.1 2 .2 2.2-1 .2-1.1-.9-1.2-1.6-1.6-.4-.3-.8-.3-1-.4zm-60.8-177.7c1-.1 2.2.2 2.3-1.3.1-1.1-.6-1.7-1.8-1.6-1.2.1-2.4.4-2.5 1.9 0 1.3 1.2 1 2 1zM60.6 264.3c.9.2 1.4-.9 2.1-1.7.3-.4.5-.9.1-1.3-.3-.5-.8-.6-1.4-.5-.9.1-1.3.9-1.9 1.5-.4.4-1.3.6-1 1.4.3.6 1.1.5 2.1.6zm210.9-59.5c-.9-.1-1.4 0-1.6.6-.2.4-.1.8.2.9 1.3.6 2.3 1.7 3.7 2 .4.1.9.2 1.1-.3.2-.4.1-1.1-.2-1.3-1.1-.7-2.2-1.7-3.2-1.9zm-48-6.6c.5-.1 1-.1 1.4-.2.3-.1.6-.4.6-.8s-.1-.8-.5-.9c-1.3-.4-2.6-1-4-.6-.4.1-1 .2-.9.9 0 .5.4.9.8 1 1 .3 1.8.4 2.6.6zm-159 66.1c-.5 0-2.6 1.6-2.4 2.3.2.9 1 .9 1.6.9 1.3.1 2.5-.9 2.6-2 .1-1-.6-1.2-1.8-1.2zm233.8-46.8c-1.3 0-1.9.5-1.4 1.6.5 1 1.2 1.8 2.2 2.1.6.2 1.3.2 1.5-.7.2-1.2-1.3-3-2.3-3zm-117.4-47.9c-1.1-.1-2.2.1-2.2 1.6 0 1.2 1.1 1.3 1.9 1.3 1-.1 2.2 0 2.3-1.6 0-1.4-1.1-1.3-2-1.3zm-35.4 85.5c-.3-2.1-2.5-2.8-3.2-4.7-.1-.2-.3-.1-.3.1.2 1.7.4 3.4 1.3 4.8.1.2.3.4.5.5.4.3.6 1.3 1.2 1.1.6-.3.3-1.1.5-1.8zm66.3-68.8c.3-.1.7-.1 1-.2.8-.3 2-.6 2-1.4 0-.8-1.3-.5-1.9-.8-.6-.2-1.2-.4-1.8-.4-1.2-.1-1.5.7-1.3 1.8.3 1.2 1.3.7 2 1zm-111 13.7c.9.1 1.5-.2 2.1-.6.7-.4 1-1 .8-1.8-.2-.8-.9-.5-1.5-.5-.7-.1-1.2.3-1.8.5-.6.3-1.3.6-1.1 1.6.2.8 1 .7 1.5.8zM37.3 390.9c.1 1.1.3 2.3.7 3.4.1.2.2.8.5.5.6-.6 1.9-.7 1.5-2.1-.3-1.2-.3-2.7-1.8-3-.7-.3-.9.4-.9 1.2zm11.9-126.6c1.3.1 1.8-1.1 2.6-1.8.4-.4 1.3-.7.7-1.5-.5-.6-1.3-.6-1.9-.2-.8.5-1.4 1.2-2.1 1.8-.3.3-1.1.5-.7 1.2.3.5.9.5 1.4.5zm145.5-74.6c.9.1 1.7-.2 2.5-.6.4-.2.8-.5.7-1.1-.1-.6-.6-.9-1.1-.9-1.2 0-2.3.5-3.5.7-.4.1-.6.5-.5 1 0 .4.3.7.7.7.3.2.8.2 1.2.2zm95.2 12.4c-.3.3-1.4-.5-1.1.8.2 1.1 3.5 2.9 4.4 2.6.8-.3 1.1-.9.4-1.5-1.1-.8-2.1-1.9-3.7-1.9zM146 207.2c1.1-.3 2.3-.3 3.4-.9.5-.3 1.1-.5.9-1.3-.2-.8-.8-.6-1.4-.5l-3.3.9c-.5.1-1 .4-.9 1.1.1.7.7.7 1.3.7zM33 424.7c-.6-.1-.9.6-.4 1.4 1 1.5 2.2 2.9 3.3 4.3.2.2.5.2.8 0 .3-.3.2-.6-.1-.7-1-.6-.8-1.8-1.2-2.7-.4-1.1-.7-2.2-2.4-2.3zm201.1-228.2c1 .2 1.6-.1 1.8-.9.2-.9-.5-1.2-1-1.4-.8-.3-1.6-.6-2.5-.5-.6.1-1.2.1-1.3.8-.1.6.4.9.8 1.2.7.6 1.5.7 2.2.8zm-2.9-11.4c.3 0 .8 0 1.2-.2.5-.3.8-1.2.2-1.2-1.6-.2-2.9-1.4-4.5-1.4-.5 0-1 .3-1.1.9-.1.7.4.8.8 1 1.1.4 2.1.8 3.4.9zm20 157.5c.6-.1 1.6.1 1.5-.8-.1-1.3-1.3-2-2.3-2.4-.6-.3-1.4-.4-2 .3-.1.1-.1.2-.1.3 0 .9 1.8 2.6 2.9 2.6zm-83.8 80.5c.5 0 .9 0 1.2-.5.3-.4.2-.9-.1-1.2-.9-.9-1.9-1.8-3.3-1.5-.4.1-.9.2-1.1.7-.2.6.2.9.6 1.2.8.8 1.7 1.3 2.7 1.3zM39.1 364c-.2.9 0 1.5.9 1.5 1.2-.1 1.9-.6 1.9-2 0-1.1-.3-2.4-1.3-2.4-1.6-.1-1.2 1.8-1.5 2.9zM309 235.3c-.1-1.2-2-3.4-3.2-3.5-.4 0-.8.1-1 .5-.2.3-.2.7 0 1 .9 1.3 2.1 2.1 3.3 2.7.7.3.9-.2.9-.7zM38.1 319c.1-1.1-.4-1.6-1.3-1.7-1.1-.1-1.8.9-1.9 2.6 0 1.1.5 1.4 1.3 1.4 1.7.1 1.5-1.4 1.9-2.3zm4-17.3c1.3 0 1.9-.8 1.9-2.5 0-.8-.3-1.3-1-1.4-.8-.1-2.3 1.7-2.4 2.7 0 1.2.8 1.1 1.5 1.2zM31.2 413.9c0-1.8-.7-2.8-1.3-3.8-.3-.5-.9-.6-1.4-.5-.7.2-.5.9-.4 1.4.3 1 .7 2 1.2 3 .3.6.8.6 1.3.5.6-.1.6-.6.6-.6zm119.6-151.4c0 .2-.1.4 0 .5.4 2.1 1.5 3.9 2.1 5.9.2.7.8 1 1.5.8.3-.1.5-.4.3-.7-.9-2.3-2-4.4-3.6-6.3-.1-.1-.2-.1-.3-.2zM29 325c0 .4-.1.8.2 1.1.4.3.6-.2.9-.3 1-.6 1.6-1.6 2-2.6.2-.5.6-1.2-.1-1.6-.7-.4-1.3-.3-1.9.4-.7.8-.9 2-1.1 3zm66.2-121.8c1.6 0 2.4-1 3.3-1.7.4-.3.7-.7.4-1.2-.2-.5-.7-.5-1.2-.5-1.3.1-2.1 1-3 1.9-.3.3-.6.8-.4 1.3.3.4.7.2.9.2zm72.6-20.8c.5-.1 1.3-.2 2.1-.4.5-.1 1-.3 1-1s-.5-1-1.1-1.2c-1.1-.4-2 .1-2.9.6-.5.3-1 .7-.8 1.4.2.8.9.6 1.7.6zm40.4 22.8h.6c.9-.1 2.3.3 2.3-1.1 0-1.3-1.4-1.1-2.3-1.2h-.3c-.9.1-2.2-.1-2.2 1.3-.1 1.6 1.3.9 1.9 1zm-75.4 5.8c-.8-.1-1.4 0-1.8.7-.1.3-.1.6.1.8.5.5 1.1.2 1.6.2.4 0 .8-.2 1.1-.5.4-.6.8-.5 1.3-.1s1.1.4 1.6.4.9-.2.9-.8c0-.6-.2-.9-.7-1.1-.6-.3-1.2-.1-1.7.1-.8.4-1.6.6-2.4.3zm-6.5-16.1c-.1-.4-.4-.7-.7-.9-.7-.4-1.5-.3-1.9.3-.6.9-1.1 1.4-2.2 1.1-.4-.1-.8.1-.9.6-.1.5.1.9.5 1.1.7.4 1.5.7 2-.2.5-.9 1.1-1 2-1 .5 0 1-.3 1.2-1zm93.9-4.3c-.7 0-1.7-.2-1.8.9-.1 1.2.9 1.3 1.6 1.3.9.1 1.9-.1 2.9-.2.4 0 .7-.2.8-.6.1-.5-.2-.8-.6-1-.9-.4-1.9-.2-2.9-.4zm94.9 36.9c-.3 0-.6.1-.7.4-.1.4.1.7.3 1 .7.8 1.9 1.3 2.2 2.5.2 1.1.8 1.8 1.5 2.5.3.3.6 1 1.1.6.5-.5.2-1.2-.2-1.6-1-1.1-1.8-2.5-2.6-3.8-.3-.7-.9-1.3-1.6-1.6zm-14.3 13c-.1-.1-.2-.3-.3-.4-1.3-.5-1.9-1.9-2.7-2.9-.5-.5-1.1-.9-1.8-.9-.5 0-1 .1-.7.8.1.5 4 4 4.5 4 .4.1.8.1 1-.6zM25.1 355.2c0 1.1.6 2 1.8 1.9 1.4 0 1.3-1 .9-2.1v-.4c.2-.8.4-1.7-.8-1.5-1 .2-2 .4-1.9 2.1zm17.7 64.5c-.4-1.6-1.6-2.9-2.4-4.5-.2-.4-1-.5-1.6-.2-.3.2-.3.6 0 .8 1.1.9 1.6 2 1.8 3.5.1.6.7 1.1 1.3 1.3.6.3.9.1.9-.9zm-9.1 1.6c-.6-1.5-1.2-3-1.8-4.6-.1-.3-.6-.3-.9-.2-.3.1-.6.3-.7.7-.1.8 1.7 4.5 2.4 4.8.5.3.9.3 1-.7zm288-161.8c-.3-1-.7-2.4-1.2-3.7-.2-.5-.7-.6-1.2-.4-.4.2-.8.5-.6.9.4 1.4.4 3 1.7 4 .3.2.5.6.9.4.4-.1.4-.5.4-1.2zM31.2 394.6c-.5-1 .3-2.9-1.5-3.3-1-.2-1.2.8-1.3 1.7 0 1.4.5 2.5 1.8 2.9.8.2 1-.5 1-1.3zm83 40.1c0-.1 0-.3-.1-.3-1.1-1.2-2.1-2.6-3.5-3.4-.3-.2-.5-.1-.8.2-.3.3-.3.6-.1 1 .8 1.5 1.9 2.5 3.3 3.3.5.2 1 0 1.2-.8zm-81.4-154c.2-1.2-.2-1.2-.9-1.1-1.6.3-1.3 2.1-2 3.1-.2.3-.5.8-.1 1.1.3.3.8.3 1.1.2 1.7-.5 1.8-2 1.9-3.3zm4.5 87.5c-.2-.9.2-2.1-1.2-2-1.5.1-1.4 1.4-1.5 2.4-.1.9 0 2.2 1.3 2.1 1.4-.1 1.1-1.6 1.4-2.5zM33.5 341c.5 0 1.3-.4 1.2-1.4-.1-1 .1-2.5-1.4-2.5-1.5-.1-1.5 1.3-1.6 2.4-.2 1.3.5 1.4 1.8 1.5zm159.3-156c.5 0 1 0 1.4-.1.7-.2 1.9-.1 1.8-1.2 0-1.2-1.2-.8-1.9-.9h-1.2c-.9.1-2.2.4-2.2 1.3.1 1.3 1.4.7 2.1.9zm51.7 164.7c.6-.2 1.6.1 1.9-.7.3-.9-.6-1.1-1.1-1.5-.4-.3-.6-.7-1-.9-.7-.4-1.5-.6-1.9.3-.5.8 1.1 2.8 2.1 2.8zm-79.2-56.5c-1.3-1.1-.9-3.2-1.9-4.6-.3-.4-.6-1.3-1.2-.9-.5.3.1 1 .2 1.5s.1 1 .2 1.4c.2 1.1.4 2.1 1 3.1.3.5.8.7 1.3.5.3-.2.4-.5.4-1zm71.1 67.4c-.4.1-1 .1-1.2.7-.1.4-.1.9.3 1.1 1.1.5 1.9 1.5 2.9 2.1.7.5 1-.1 1.1-.8.1-.9-2.1-3.1-3.1-3.1zm35.2-159.4c.3 0 1 .1 1.2-.5.3-.8-.5-1-.9-1.3-.6-.4-1.1-.8-1.8-1.1-.7-.3-1.4-.1-1.7.7-.3.7.1 1.3.7 1.6.8.5 1.5.6 2.5.6zm-90.8 203c-.5.1-1.2-.1-1.4.6-.2.8.2 1.4 1 1.7.3.1.6.3.9.4.7.4 1.7 1.3 2.2.4.6-1-.4-1.8-1.1-2.5-.4-.4-.9-.6-1.6-.6zm89.7-192.5c0-1.7-1.6-3.5-3-3.6-.3 0-.7-.1-.9.3-.1.2 0 .6.1.8.8 1 1.3 2.4 2.6 3 .3.1.5.6.8.3.3-.2.3-.6.4-.8zm-231.1 213c-.1-1.7-1.6-4.1-2.5-4.2-.4-.1-1-.2-1.1.5-.1.9 1.7 3.8 2.6 4.2.8.4 1 0 1-.5zm9.5-90.7c0-1.1-.5-1.8-1.1-1.7-.7.1-2.5 2.3-2.4 3.1.1.9.8.8 1.3.7 1.2-.1 2.3-.4 2.2-2.1zm151 51.1c.7-.1 1.1-.6 1.4-1.3.6-1.1 1.3-1.9 2.5-2.3.4-.1.8-.2.9-.7.1-.4-.3-.5-.6-.5-.5-.2-1.2-.3-1.3.4-.3 1.1-1 1.2-1.8 1.3-.8.1-1.4.8-2 1.3-.3.3-.4.9-.2 1.4.3.4.6.5 1.1.4zM59.5 266.5c0-.8-.6-1-1.2-.9-.9.2-1.8.6-2.3 1.5-.4.8-1.8 1.4-1.4 2 .6 1 1.4-.4 2.2-.4.4 0 .9-.2 1.3-.4.8-.3 1.1-1 1.4-1.8zM28.4 384.2c-.8-.1-1.3.3-1.3 1.3 0 1.5.7 2.3 2 2.5.9.2 1.1-.7 1.1-1.4-.2-1.1-.1-2.4-1.8-2.4zm206.2-172.9c1 0 1.7 0 2.1-.9.1-.4-.1-.7-.5-.8-1.4-.5-2.8-.7-4.2-.8-.4 0-.7.2-.8.6-.1.4.2.6.5.8 1 .6 2 1 2.9 1.1zM52.3 266.5c1.4-.1 2.5-.8 3.2-2.2.4-.8.2-1-.6-1.1-1.5-.2-2.2 1.1-3.3 1.7-.3.2-.7.5-.6 1 .3.6.8.6 1.3.6zm32.1 193.8c.9-.1 2.2.5 2.3-1.1 0-1.5-1.4-1.5-2.4-1.8-.4-.1-2.1 1.7-1.9 2.1.4 1 1.3.7 2 .8zm-46.3-55.5c0-1.5-1.2-3.1-2.1-3.1-.6 0-1 .3-.9 1 0 1.1 1.4 3.4 2.1 3.4.8.1.9-.5.9-1.3zm19.6-90.2c.1-.4-.1-.7-.5-.8-.5-.1-1.1-.2-1.4.2-.6 1-1.2 2.1-1.6 3.1-.2.6 0 .9.7.8 1.3-.1 2.8-1.9 2.8-3.3zm-1-20.8c-.1-1 .1-1.9-1.1-1.9-1.4 0-2.3.9-2.3 2.5 0 1 .7.9 1.3.9 1.2.1 1.9-.5 2.1-1.5zm196.6-80.4c.5 0 1.1 0 1.2-.7.1-.5-.2-1-.6-1.2-1-.6-2.1-.9-3.3-.9-.3 0-.7.1-.9.5-.2.5.2.8.5 1 1 .7 1.9 1.3 3.1 1.3zM45.5 277.2c.9-.6 2.4-.2 3.3-1.5.4-.6 1.3-1.2.6-1.9-.6-.6-1.6-.3-2.1.5-.6.8-1.3 1.5-2.2 1.8-.3.1-.7.3-.6.7.1.4.5.5 1 .4zm154.2 94.2c1.4-.5 3-.7 4.3-1.8.4-.3.7-.7.5-1.2-.1-.3-.5-.4-.7-.3-1.6.7-3.1 1.4-4.6 2.2-.2.1-.4.5-.4.7 0 .5.5.3.9.4zm118.2-131.8c.4 0 .9-.2.8-1.1-.1-1-1.8-2.7-2.7-2.7-.6 0-1.2.2-1.1 1 0 .8 2.2 2.8 3 2.8zM204 209.8h.6c.7-.1 1.7.3 1.8-.9.1-1.2-.9-1.1-1.7-1.3h-.5c-.9.1-2.4-.6-2.4 1.1 0 1.8 1.6.8 2.2 1.1zm-58.8-17.5c1.3.1 2.1-.2 2.9-.6.6-.3 1.3-.6 1.1-1.4-.2-.8-1-.7-1.6-.6-.9 0-1.8.4-2.5 1-.3.3-.9.6-.8 1.1.2.8.8.5.9.5zm-58.7 27.4c1.7.1 2.6-.4 3.3-1.4.3-.5.5-1 .1-1.5s-.8-.1-1.2 0c-.7.3-1.4.7-2.1 1.1-.5.3-1.3.4-1.1 1.1.1.9.9.7 1 .7zm145.4 161.8c-.8-.8-1.9-1.5-3.1-2-.4-.2-1-.2-1.2.2-.4.6.1 1 .4 1.4.6.6 1.1 1.2 1.8 1.6.9.6 2.1 0 2.1-1.2zM42 355.8c-.3-.6.2-1.9-1.1-1.8-1.2.1-1.8.8-1.3 2.1.1.3.1.6 0 .9-.3.6-.2 1.1.5 1.2.6.1 1.3.2 1.6-.7.2-.5.2-1 .3-1.7zm225.3-141c-.1-1.5-1.7-2.8-2.9-2.7-.5 0-1.1.1-1.3.7-.3.7.4.9.8 1.2.7.5 1.4 1 2.2 1.3.6.2 1.3.1 1.2-.5zM33.9 345c0-1.1-.4-1.9-1.5-2-1.7-.1-1.5 1.3-1.7 2.3-.1 1 .7 1.1 1.4 1.2.9.1 1.8-.1 1.8-1.5zm268.4-116.4c0-.7-2.4-3.3-3-3.2-.8.1-1.5.7-.9 1.6.7 1.1 1.6 2.1 2.8 2.5.7.2 1-.3 1.1-.9zM201.7 401.8c.7-.1 1.7.2 1.9-1 .1-.8-1.7-2.1-2.8-2-.6 0-1.3.1-1.2.9.3 1.1.6 2.3 2.1 2.1zm-180-34.1c-.5 1.2-.3 2.4 1.1 2.4 1.2-.1 1.1-1.4 1.2-2.4 0-.9 0-1.7-1.2-1.7-1.1 0-1.6.4-1.1 1.7zM190.8 402c.4 0 .9.1 1.1-.4.2-.4-.1-.7-.3-1-.9-1-1.9-1.7-3.3-1.4-.4.1-.8.1-.9.6-.1.5.2.8.5 1.1.8.7 1.8 1 2.9 1.1zm125.8-149.7c-.4-.8-.7-1.9-1.3-2.9-.3-.6-1.1-.7-1.7-.5-.3.1-.4.4-.3.7.5 1.2.9 2.5 1.8 3.4.3.3.8.5 1.3.2.2 0 .3-.3.2-.9zM35 389.1c0-1.3-1.4-2.8-2.3-2.2-1.5.8.6 2.2-.4 3.2-.3.3.1.6.5.7 1.1.4 2.2-.5 2.2-1.7zm277.2-150.3c-.6.1-1.2.4-.9 1.3.3.8.7 1.7 1.3 2.3.5.5 1.3 1.1 1.9.2.6-.9-1.1-3.8-2.3-3.8zm-114.6-61.1c-.9.1-1.8.2-2.4 1-.2.3-.1.7.2 1 .7.7 1.6.5 2.4.3h.2c.8-.3 2-.3 1.9-1.3-.2-1-1.5-.9-2.3-1zm-98.3 50.1c1.1-.4 2.4-.1 3.4-1.2.4-.4.6-.9.3-1.5-.3-.5-.8-.6-1.3-.4-1.2.4-2 1.5-3.1 2.2-.1.1-.3.4-.2.6.1.4.5.2.9.3zm61.4-44.3c.9-.1 1.7-.2 2.5-.3.6-.1.9-.4.9-1.1 0-.7-.3-1.1-1-1.1-1 0-1.9.3-2.8.7-.5.2-.8.7-.6 1.4.1.5.6.4 1 .4zm4.5-11.8c0 .1 0 .1 0 0-.5.1-.9.1-1.4.1-.5 0-1.1.1-1.2.8-.1.7.5 1 1.1 1.2.7.2 1.5.2 2.2.1.7-.1 1.5-.4 1.4-1.3-.1-1-1-.8-1.6-.9h-.5zM20.6 319.6c.4-.1 1 .1 1-.6.1-.8 0-1.7.5-2.4.1-.2 0-.5-.2-.6-.7-.3-1.5-.2-2.1.3-.7.6-1.1 1.4-.8 2.4.3.8.9.9 1.6.9zm195.5 45.6c-.8-.1-1.5.2-1.5 1.2.1 1.1.6 2.1 1.9 2.1.7 0 1.5 0 1.4-1.1-.1-1.1-.3-2.3-1.8-2.2zm-2 12c-.7 0-1.3.1-1.4.9-.1 1 1.1 1.8 2.7 1.9.6 0 1.3 0 1.5-.9.1-.8-1.5-1.8-2.8-1.9zm51.8-175.5c-1.1.2-1.6.6-.9 1.7.7 1.2 1.9 1.4 3.1 1.6.6.1 1-.7.7-1.1-.8-1-1.6-2-2.9-2.2zM45 341.1c-.1.8.2 1.3 1.1 1.4 1.5.2 1.4-1.2 1.7-2.2.3-.8 0-1.7-.9-1.7-1.4 0-1.6 1.4-1.9 2.5zm193.2-135.9c-.5.2-1.1.1-1.4.6-.2.5 0 .9.4 1.1 1 .7 2.1 1.2 3.3 1.2.5 0 .8-.4 1-.8.2-.4 0-.7-.3-.9-1.1-.4-2.1-.8-3-1.2zm-40.4 1.7c-1.1 0-2.2-.2-2.2 1.3 0 1 .7 1.3 1.5 1.2 1.1-.1 2.4-.2 2.4-1.7 0-1.2-1.1-.7-1.7-.8zm15.1-5.8h.7c.8 0 1.6-.4 1.6-1.2 0-1.2-1-.9-1.7-.9h-1.2c-.7.1-1.7 0-1.8 1 0 1.1 1.1 1 1.8 1.1h.6zM33.2 351c0-1.3-.8-2.5-1.6-2.4-.8.1-1.2.6-1.1 1.5.1 1.1 0 2.3 1.5 2.4 1-.1 1.3-.6 1.2-1.5zm24.7-71.2c0-.5-.3-.8-.7-.8-1-.1-2.9 1.5-3.1 2.5-.1.7.2 1 .8 1.1 1.2.2 3-1.6 3-2.8zm167 83c.5-.2 1.2 0 1.5-.7.2-.7-.4-1-.8-1.4-.3-.2-.6-.4-.8-.6-.7-.6-1.6-.8-2.1 0s0 1.6.7 2.1c.4.4.9.5 1.5.6zm-7.4-194.7c-.8.4-2.2-.5-2.3.9-.1 1.1 1.3 1 2.2 1.1 1 0 2.6.6 2.7-.9 0-1.6-1.6-.8-2.6-1.1zm-57.3 25.7c.9-.3 2.3.3 2.3-1.3 0-1.2-1.1-1.1-1.9-1.2-1.1-.1-2 .5-2.1 1.6-.1 1.2 1.1.7 1.7.9zm-78.9 56.5c-1.4 0-2 1.1-2.2 2.2-.2 1 .8 1.1 1.5 1.1 1.3 0 2-1 2.1-2.2.1-1-.8-1-1.4-1.1zm244.5 5.7c-.1-.9-1.4-3-1.9-3.2-.4-.2-.8-.1-1.1.2-.7.9.3 1.7.3 2.5s.8.9 1.4 1.1c.6.1 1.3.1 1.3-.6zM70.6 236.1c1.2 0 2.6-1.5 2.6-2.7 0-.7-.5-.8-.9-.8-1.1 0-2.7 1.4-2.7 2.3-.1 1 .5 1.2 1 1.2zm-2.9 34.5c1.5 0 2.7-1 2.7-2.2 0-.9-.5-1.1-1.2-1.1-.6 0-2.7 2.2-2.6 2.8.2.6.7.4 1.1.5zm84.9-94c.7-.2 1.7-.4 2.7-.7.6-.2 1-.8.8-1.4-.2-.6-.8-.4-1.2-.3-.9.2-1.9.4-2.8.6-.5.1-1 .5-.9 1.1 0 .7.6.7 1.4.7zm-32.8 14.2c-.9-.1-1.5.5-1.9 1.2-.3.6-.7.9-1.3.9-.5 0-.9.1-1.2.6-.1.2.1.4.3.6.5.3 1.2.5 1.4.1.7-1.5 1.9-1.1 3-1.3.5-.1 1-.5.9-1.1 0-.8-.5-1-1.2-1zm63.9 196c.5-.1 1.3 0 1-1.1-.2-.9-2.6-2.5-3.4-2.4-.5 0-.8.2-.7.8.3 1.1 2 2.7 3.1 2.7zM49.9 306.1c1.1 0 2.7-1.6 2.7-2.7 0-.7-.5-.7-.9-.7-1.2.1-1.8 1-2.4 1.8-.3.3-.6.6-.4 1.1.1.5.6.5 1 .5zm43.9-66.6c0-.8-.5-1.1-1.1-1-1.2.2-2 1-2.1 2.2-.1.9.9 1.2 1.7 1.1 1.3 0 1.2-1.3 1.5-2.3zm110.7-44.2c.8-.2 2 0 1.8-1.3-.1-1.2-1.3-1.3-2.1-1.3s-1.9.1-1.9 1.3c0 1.5 1.3 1 2.2 1.3zM97.7 220.4c-.6.4-1.6.5-1.5 1.6.1.9.6 1.7 1.7 1.6 1-.1 1.8-.5 1.7-1.8 0-1.2-1.1-1-1.9-1.4zm132.8-5.8c.9-.2 2.4.1 2.4-1.2 0-1.6-1.4-.7-2.3-.7h-.3c-.8.2-2.3-.5-2.2.8-.1 1.3 1.5.9 2.4 1.1zm-120.3.3c1.1-.3 2.6-.2 2.9-1.6.2-1-1-1-1.7-.9-1 .1-2.3 0-2.6 1.5 0 .8.7 1 1.4 1zm44.1-20c.9-.1 2-.1 2.7-1.1.2-.3 0-.7-.2-1-1-.9-2.1-.2-3.1.1-.6.2-1.3.5-1 1.4.2.7.8.6 1.6.6zM49.5 271.6c1.4 0 2.9-1.1 2.9-2.1-.1-.9-.8-.9-1.4-.9-1.4-.1-2.1.6-2.3 2.1-.1.6.1 1 .8.9zM26.3 403.5c0 1.7.9 3 2 2.9.7 0 .9-.5.9-1.1 0-1-1.4-3-2-3-.7.1-1.1.4-.9 1.2zm164.9-232h.8c.8 0 1.6-.1 1.6-1.1 0-.9-.9-1.1-1.7-1.1h-.7c-.8.2-2.2-.1-2.1 1.2 0 1.4 1.4.8 2.1 1zm-75.9 58.4c1.4.2 2.2-.1 2.3-1.2.1-1-.6-1.3-1.5-1.3-1 .1-2.2-.1-2.3 1.3-.2 1.2 1 1.1 1.5 1.2zm109.8-41.3h1c.7 0 1.6-.2 1.6-1 .1-.8-.9-.6-1.5-.8-.8-.2-1.5-.3-2.3-.4-.5-.1-1.1.1-1.2.7-.2.7.4.9.9 1 .6.4 1.2.5 1.5.5zm19-8c.6 0 1.1-.1 1.4-.6.1-.1-.1-.5-.2-.6-1.2-.9-2.6-1.5-4.1-1.5-.4 0-.7.2-.8.6-.1.3 0 .6.3.7 1.2.6 2.2 1.3 3.4 1.4zM86.2 231.4c-1.2 0-2.9 1.4-2.8 2.3.1.7.6 1 1.2.9 1 0 2.7-1.7 2.7-2.5s-.7-.6-1.1-.7zm93.9-50.7c.6-.2 1.6.1 1.6-1-.1-1.1-1-1.8-1.9-1.5-.8.2-2.5-.4-2.4 1.2.1 1.5 1.8.9 2.7 1.3zm-52.8 27.9c-1.1.4-2.3 1.1-3.7 1.4-.7.2-.5 1.1.1 1.5.6.3 1.4.3 1.9-.3.6-.7 1.2-1 2.1-.9.5 0 1.1-.1 1.1-.8-.2-.7-.8-.8-1.5-.9zm93.3-3.8c-.6.2-1.4 0-1.6.8-.2.9.6 1.3 1.2 1.5 1 .3 2 .5 2.9-.1.3-.2.3-.7.1-1-.6-.9-1.6-.9-2.6-1.2zm-116.4 26.3c1.1 0 2.4-.9 2.4-1.8s-.5-1.1-1.2-1.1c-1.4 0-2.6.8-2.5 1.8.1.9.6 1.1 1.3 1.1zm-54.1 61.5c.7-.1 1.3-.3 1.7-.8.6-.6 1.3-1.3.6-2.1-.7-.8-1.7-.5-2.3.1-.6.6-1 1.4-1 2.4.1.4.7.4 1 .4zm-3.7-3c1.4 0 2.1-.6 2.1-1.8 0-.9-.4-1.4-1.2-1.4-.9-.1-2.4 1.7-2.3 2.6.1.9.9.4 1.4.6zm217.7-94.2c-.5.2-1.3 0-1.4.7-.2.8.5 1 .9 1.4.9.7 1.8 1.3 2.9.7.3-.2.4-.6.3-.9-.6-1.2-1.6-1.7-2.7-1.9zM178.9 394c-.3.1-.9-.2-1.1.5-.2.7.4.9.8 1.2.4.3.7.6 1.1.9.7.5 1.5.6 2-.2s-.3-1.3-.7-1.8c-.6-.5-1.3-.7-2.1-.6zM41.3 320.2c-1.3 0-2.7 1-2.6 1.8.1 1 .8 1.3 1.6 1.4.8.1 1.9-1.4 1.9-2.5 0-.6-.4-.6-.9-.7zm185.1 36.5c.7 0 1.2-.1 1.5-.7.2-.4.1-.9-.3-1.1-.9-.4-1.9-.9-2.9-.6-.7.2-1 .9-1 1.6 0 .7.6.5 1.1.6.5 0 1.1.1 1.6.2zm-73.9-166.3c.9-.2 2.1.1 2.8-1 .2-.3.2-.6-.1-.8-.9-.7-2-.4-3-.2-.6.1-1.6.2-1.5 1.1.1.9 1.1.8 1.8.9zm10.5-2.7c1.1.1 2-.5 2.9-.9.4-.1.6-.4.5-.8-.1-.5-.5-.6-.9-.6-1-.1-2 .3-3 .6-.5.2-1.3.3-1.1 1.1.4.7 1.1.5 1.6.6zm60.1 177.1c-.8.3-2.2-.3-2.3 1.2-.1 1.4 1.1 1.4 2.1 1.5 1.2.1 1.6-.7 1.7-1.8.1-1.1-.9-.8-1.5-.9zM94 220.1c1.1.1 1.9-.6 2.7-1.3.3-.3.6-.6.3-1.1-.2-.4-.6-.6-1-.4-.9.3-1.7.6-2.5 1-.4.2-1.1.4-.9 1.1.1.8.8.7 1.4.7zm-63.6 179c-.4 0-.9.2-.7.7.5 1.1.8 2.4 1.9 3.2.5.4 1.3.6 1.6-.4.2-.9-1.9-3.6-2.8-3.5zm227.2-176.4c1.6.4 1.9-.8 2.6-1.3.3-.2.4-.6.2-1s-.6-.4-.9-.3l-2.1.6c-.6.1-1.5 0-1.5.8-.1.9.9.8 1.5 1.1.2.1.4.1.2.1zm-108.4-26.3c.8-.1 1.9-.1 2.1-1.5.1-1-.7-1.2-1.4-1.1-1.1 0-2.5.2-2.7 1.6-.2.9 1.1.9 2 1zm-91 80.4c1-.2 2.2-.2 2.4-1.7.2-1.1-.7-1.2-1.5-1.3-.9-.1-2.3 1.2-2.2 2.1 0 .9.6.8 1.3.9zm99.7-73.2c.5.1 1.2-.2 1.9-.4.5-.2.9-.6.8-1.2-.1-.7-.6-.9-1.1-.8-.7.1-1.5.2-2.2.4-.6.2-1.3.3-1.2 1.2.2.9.9.8 1.8.8zm-83.1 57.8c.8-.1 1.9.2 1.9-1.1 0-1.2-1-1.5-2-1.5-.9 0-1.9.2-2 1.2.1 1.3 1.1 1.5 2.1 1.4zm127.1-57c.2 0 .7-.1 1.2-.2.4-.1.8-.2.8-.7 0-.5-.2-.8-.6-1-1.1-.6-2.3-.5-3.4.1-.6.3-.5 1 0 1.5.6.3 1.1.3 2 .3zM42.5 339.6c1.3 0 1.5-.9 1.6-1.9.1-.9-.4-1.3-1.2-1.2-.9.2-2 0-2 1.6-.1 1.2.6 1.5 1.6 1.5zm41.3-90c.9-.3 2.3-.2 2.4-1.6.1-.9-.7-1.6-1.6-1.5-1.2 0-1.6 1.2-1.9 2.1-.2.6.5 1 1.1 1zM22.1 376c.2.5-.4 1.5.7 1.7.6.1 1.3.2 1.6-.7.2-.7-.1-1.3-.3-1.9-.2-.6.3-1.7-.8-1.7-.9 0-.9 1.1-1.1 1.8-.1.3-.1.5-.1.8zm30.4-88.4c.9 0 2.5-1.5 2.5-2.3 0-.6-.4-.8-.9-.8-1.1-.1-2.7 1.2-2.8 2.2.1.9.8.8 1.2.9zm155.6-97c0-.1 0-.1 0 0 .3-.1.6-.1.9-.1.7 0 1.4-.2 1.4-1 .1-.9-.7-1.2-1.4-1.2-.8-.1-1.6.1-2.3.3-.4.1-.6.3-.7.7-.1.5.2.9.6 1 .4.2 1 .2 1.5.3zm-16.8 3.9c.9-.1 2.3.2 2.2-1.2 0-1.4-1.4-1-2.3-1-.3 0-.6.1-.8.1-.5.2-1.2.2-1.2 1s.8.8 1.3.9c.2.2.5.2.8.2zM37 299.3c1.4 0 2.3-1 2.6-2.6.2-1-.1-1.2-1-.9-1 .4-1.3 1.5-2.1 2-.4.2-.7.5-.4 1 .1.4.5.6.9.5zm58-54c1.3 0 2.7-1.1 2.6-2-.1-.8-.6-1-1.2-.9-1.2.2-2.2.8-2.5 2.1-.2.8.6.8 1.1.8zM42 400.8c-.2-1.3-1.2-1.9-1.5-3-.1-.5-.4-.8-.9-.6-.5.2-.9.6-.9 1.2-.1 1.2 1.1 2.8 2.3 3 .5 0 1 0 1-.6zm39.6-157.7c-1.2 0-1.8.9-2.6 1.6-.3.3-.7.5-.5 1 .2.4.6.5 1 .6 1.2 0 2-.8 2.7-1.6.3-.3.6-.6.3-1.1-.1-.4-.5-.5-.9-.5zm-8.4 3.3c1.4 0 2.9-1.2 2.9-2.1 0-.6-.4-.8-.9-.8-1.3 0-3.1 1.1-3.2 2 0 1 .7.9 1.2.9zM144 188c1-.1 1.9-.3 2.8-.8.5-.2.9-.6.7-1.3-.2-.5-.7-.6-1.2-.5-.9.2-1.9.4-2.7 1-.4.3-.9.4-.7 1 .2.6.6.6 1.1.6zm-88.6 68.1c0-.7-.4-1-1.1-.7-1.1.3-1.6 1.3-2.3 2.1-.2.2-.6.6-.3.9.2.2.6.4.9.4.7.1 2.7-1.8 2.8-2.7zm167.5-72.8c.7 0 1.1-.1 1.5-.1.5 0 1 0 1.1-.6.1-.7-.5-.8-.9-1-.8-.3-1.7-.2-2.5-.2-.5 0-1.2-.2-1.2.6 0 .6.3 1.2 1 1.3h1zM48.2 284.5c1.5.1 2.5-.3 2.6-1.6.1-1.2-1-1.1-1.8-1.2-1.3-.2-1.8.8-1.9 1.8-.1 1 .8 1 1.1 1zm8.1-12.5c0-.7-.7-1.2-1.3-1.1-.9.1-2.2 1.5-2.1 2.3.2.9.9.9 1.5.9 1.1 0 1.6-1 1.9-2.1zm177.1-66.4c.7 0 1.2 0 1.3-.6.1-.6-.3-.8-.8-1-1-.3-2-.8-3.1-.7-.4 0-1-.1-1 .6-.1.6.3.9.8 1.1.9.2 2 .4 2.8.6zM62.8 244.9c1.1-.1 1.8-1 2.5-1.8.3-.3.5-.9.2-1.3-.4-.5-.9-.2-1.3 0-.7.4-1.4 1-2.1 1.5-.3.2-.8.4-.6.9.2.6.7.6 1.3.7zm4.2 18c1 .2 1.4-1 2.1-1.6.3-.3.7-.7.3-1.2-.3-.4-.7-.5-1.2-.4-.9.2-1.5.9-2 1.5-.3.3-.9.5-.6 1.1.2.5.7.5 1.4.6zm171.8-45.1c.4 0 .8 0 1.1-.4.2-.3.1-.6-.1-.8-1.3-.9-2.7-1.5-4.2-1.8-.5-.1-1 .5-.4.9 1 .9 2 2.2 3.6 2.1zM91.3 249.3c1.2 0 2.3-1 2.3-2 0-.7-.5-.9-1-.9-1.2-.1-2.9 1-2.8 1.9.1.8.9.9 1.5 1zm82.7-67.9c.6-.2 1.9.1 1.9-1.2s-1.2-1.3-2.1-1.3c-.8 0-1.7-.1-1.7 1.3.1 1.1.8 1.2 1.9 1.2zm44.9 5.8c.7-.1 1.7.3 1.9-.7.2-1.1-.9-1.1-1.5-1.3-1-.3-2-.5-2.9.2-.2.2-.2.6 0 .8.6 1 1.6.9 2.5 1zm-192.2 163c1.7.1 1.5-1.4 1.7-2.4.1-.7-.2-1-.9-.9-1.2.2-2 1-2.2 2.2-.1.9.7 1.1 1.4 1.1zm194.6 23.1c.3-.1 1.4.4 1.3-.9-.1-1.4-1-1.8-2.1-1.7-.7 0-1.6 0-1.5 1.2 0 1.2.8 1.5 2.3 1.4zM219 174.1c.8 0 1.6.1 1.8-.8.1-1-.8-1-1.4-1.2-.4-.1-.9-.2-1.3-.2-.7 0-1.7 0-1.7 1.1 0 1 .9.8 1.6 1 .3 0 .7 0 1 .1zm-25.5 23.3h-1c-.6 0-1.1.2-1.2 1-.1.9.6 1 1.1 1 .7.1 1.5.1 2.2 0 .6-.1.9-.5.8-1.1-.1-.6-.4-.9-.9-.9h-1zm-13.6 12.1c1.2.1 2 0 2.6-.8.2-.3.1-.6-.1-.8-.7-.8-1.5-.6-2.4-.5-.2 0-.4.1-.7.2-.6.1-1.3.1-1.3.9 0 .9.8.8 1.4 1h.5zm-97.2 13.9c1.2-.1 2.3-.5 2.7-1.8.2-.7-.5-.8-1.1-.8-1.3 0-2.5.4-2.9 1.7-.3.8.7.8 1.3.9zM81 238.1c1.3 0 2.2-.5 2.3-1.9.1-.6-.1-1.1-.8-1.1-.9 0-3 1.5-2.9 2.2.1.9.9.7 1.4.8zM40.8 345.5c1.3 0 1.9-.6 1.9-2 0-.7-.2-1.3-.9-1.2-1.1.2-2.1.7-2.3 2-.1.9.6 1.3 1.3 1.2zm11-25.8c.1-.9-.3-.9-.8-.9-1.5 0-1.9 1.1-2.1 2.4-.1.9.3 1.5 1 1.3 1.4-.3 1.4-1.9 1.9-2.8zm19.3-53.9c1.4.1 1.9-.8 2.2-1.8.2-.9-.6-.8-1.2-.8-1 .1-2.4-.1-2.6 1.4-.1 1.2 1.1 1 1.6 1.2zm-35.9 39.5c1 0 2.3-1.3 2.2-2.3 0-.6-.3-1-.9-1-.7 0-2.7 1.9-2.6 2.6.1.8.9.6 1.3.7zm7 44.8c-.1-1 .3-2.2-1-2.1-1.6.1-1.1 1.9-1.6 2.8-.3.5.5.9 1.1.9 1.2 0 1.7-.6 1.5-1.6zm168.6-141.7c-.5.1-1 .1-1.5.3-.4.1-.9.2-.9.9s.5.7.9.8c.9.2 1.8.3 2.7 0 .5-.2.9-.4.9-1 0-.5-.5-.7-.8-.8-.5-.1-.9-.2-1.3-.2zM37.3 360.2c-.1-.5.1-1.6-.8-1.5-1.1.1-1.8 1.1-1.9 2.3-.1.9.4 1.3 1.3 1.3 1.3.1 1.4-.8 1.4-2.1zm205.7-6.6c-.4 0-.7.2-.8.6-.2.8 0 1.6.7 2.1.8.4 1.5 1.2 2.5.6.2-.1.3-.4.3-.6.1-.5-2.3-2.8-2.7-2.7zM69.6 251c1.4-.1 2.2-.4 2.3-1.8 0-.9-.4-1.2-1.2-1.1-1 .1-2.2.4-2.3 1.7 0 .8.8 1.1 1.2 1.2zm144.6-59.8h.8c.6 0 1.5.1 1.5-.8 0-1-.8-1-1.5-1h-.7c-.9.1-2.4-.5-2.4.9 0 1.3 1.5.5 2.3.9zm-14.4 8.4c.8-.5 2.4.3 2.4-1.2s-1.6-1-2.5-1c-.8 0-1.8 0-1.7 1.2 0 1 1 .8 1.8 1zm-1.3 208.8c-.7.3-1.4.6-2.1 1-.4.2-.9.4-.7 1 .2.6.6.9 1.1.9 1 0 1.8-.7 2.6-1.2.4-.2.2-.8.1-1.2-.1-.4-.4-.6-1-.5zM89.9 235.1c-1.6-.2-2.5.5-3.1 1.5-.2.4-.1.8.3.9 1.1.4 2.1.4 2.9-.6l.1-.1c.4-.3 1.1-.5.9-1.2-.2-.8-.9-.5-1.1-.5zM77 242.4c1.3 0 2.4-1.1 2.3-2.2 0-.6-.4-.8-.9-.8-1.1 0-2.8 1.3-2.7 2.1.2.9.8.9 1.3.9zm150.9-33.3c.7-.1 1.5.2 1.7-.7.1-.9-.6-1.3-1.3-1.4-.7-.1-1.3-.1-2-.1-.5 0-.9.2-1 .8-.1.6.3.9.8 1 .6.2 1.3.3 1.8.4zm-186 68c-.8.2-2.2-.2-2.1.9.1.9 1.4 1.8 2.2 1.9 1 .2 1.2-1.2 1.3-2 .1-1.3-.9-.6-1.4-.8zM93.1 450c-1.4-.2-2 .3-2.1 1.3 0 1.1.7 1.7 1.6 1.7 1.2 0 1.3-1.2 1.4-2.1.2-1.2-.8-.8-.9-.9zm65-260.9c.9 0 1.5 0 2-.4.4-.3.8-.7.5-1.2-.5-1-1.5-.7-2.3-.6-.7 0-1.6.1-1.8 1-.1.5.3.9.8 1 .4.2.8.2.8.2zM35.5 349.2c1.3 0 2.5-.8 2.4-1.6-.1-.7-.4-1.4-1.3-1.3-1.1.1-1.7 1.2-2.1 2.1-.3.6.5.8 1 .8zm8.6-38.4c.8 0 1.5-.1 1.4-1.3-.1-.5.1-1 .1-1.4.1-.6.2-1.3-.7-1.3-.7 0-1.3.3-1.2 1.2.1.6-.1 1-.5 1.4-.3.3-.6.7-.3 1.1.3.3.8.3 1.2.3zM60.8 272c1 0 2.7-1.5 2.7-2.3 0-.8-.7-.7-1.1-.7-1.2 0-2.6 1.1-2.7 2.1-.1.9.6.8 1.1.9zm125-100.2c.9-.1 2 0 2.1-1.3.1-1-.6-1.5-1.4-1.4-.9.1-1.9.2-2 1.5-.1 1.1.6 1.1 1.3 1.2zm-122 87.6c1.3.1 1.9-.6 2-1.9 0-.9-.7-1.1-1.3-1-1 .1-1.9.8-2 1.9-.2.9.6.9 1.3 1zm-26 149.3c-.1 0-.8.1-.6.6.4.9.2 2 .9 2.7.5.5 1.1 1.5 1.8.9.7-.5-.1-1.2-.2-1.8-.1-.6-.4-1.1-.6-1.7-.2-.5-.5-.8-1.3-.7zM168 211c1 0 2.2.2 2.3-1.2.1-.9-.7-1.1-1.5-1-1.1 0-2.5.1-2.6 1.4-.2 1.1 1.2.6 1.8.8zM33.6 334.5c1.5.1 1.6-1.1 1.7-2 .1-1-.6-.9-1.2-1-1.4-.1-1.7 1.3-1.9 2.1-.2.9.9.8 1.4.9zm141.8-161.9c.6-.1 1.7.3 1.9-.9.1-1-.8-1.2-1.5-1.3h-.3c-.8.1-2.1 0-2.1 1-.2 1.2 1 1.2 2 1.2zm43.2 27.4c-.6.1-1.7 0-1.8 1 0 .9 1.1.8 1.8 1 .1 0 .2.1.3.1.8-.1 2.1.8 2.2-.7.1-1.3-1.2-1.1-2.1-1.3 0-.1-.1-.1-.4-.1zm50.8 28.9c1 .1 1.2-.4.8-1.4-.5-1.3-1.5-1.8-2.7-1.7-.5 0-1 .4-.7.9.6 1 1.2 2.1 2.6 2.2zM48.1 298c.8 0 2.7-1.8 2.7-2.5 0-.6-.4-.6-.9-.6-.9.1-1.6.7-2.2 1.2-.4.3-1.1.5-.9 1.2.1.6.8.6 1.3.7zm-12.8-4.4c-.7 0-2.7 2.1-2.6 2.7 0 .7.6.9 1.1.8 1.4-.2 1.8-1.3 2.1-2.6.1-.4-.1-.9-.6-.9zm-3.2 6.6c-1.4 0-1.3 1.4-1.7 2.2-.3.6.4 1 1 1 1.2 0 1.7-.7 1.8-1.9.2-1.1-.3-1.3-1.1-1.3zM207 185.6c.5 0 1.1 0 1.2-.7.1-.6-.3-1-.8-1.3-.9-.6-1.9-.4-2.8-.1-.4.1-.7.5-.6.9 0 .5.3.7.8.8.7.2 1.4.3 2.2.4zM42 286.8c.3 0 .7 0 1-.1.8-.1 1.3-.6 1.2-1.5-.1-1.2-.8-.6-1.4-.5-.5.1-1 .1-1.5.3-.5.2-1.3.2-1.2 1 .1.6.8.6 1.3.7.1.1.4.1.6.1zm225.2-65.6c.5 0 1 0 1.2-.4.3-.6-.2-.9-.5-1.2-.9-.8-1.8-1.5-3.1-1-.5.2-.5.6-.3 1 .6 1.2 1.7 1.5 2.7 1.6zM59 258.7c0-.6-.6-.8-1-.8-1.3.1-2.1 1-2.7 2.2-.3.6 0 .9.6 1 .9.2 3-1.2 3.1-2.4zm24.9-17h.8c.9 0 1.4-.7 1.8-1.5.1-.3.1-.6-.1-.8-.6-.6-1.3-.1-1.9.1-.3.1-.5.2-.8.3-.5.3-1.3.7-1.1 1.4.1.8.9.4 1.3.5zm160.3-21.4c.6.1 1.2-.1 1.1-.7-.2-1.4-1.4-1.6-2.4-1.7-.6-.1-1.7-.1-1.6.8.2 1.5 1.7 1.3 2.9 1.6zM40 292.8c.9 0 2.6-2.7 2.2-3.4-.3-.5-.8-.5-1.2-.3-1.1.6-1.9 1.5-2 2.9 0 .7.5.8 1 .8zm132-101.4c.8-.5 2.3.2 2.5-1.3.1-1.1-.9-1.2-1.8-1.1-.9.1-1.9 0-2 1.3 0 .8.4 1.2 1.3 1.1zM59.5 256.5c.3 0 .5-.1.8-.1 1.3-.2 1.9-1.4 1.7-2.3-.2-1-1.3 0-2 .1-.3 0-.6.2-.9.4-.5.3-1.3.6-1.2 1.4.3.6 1.1.2 1.6.5zM237 178.4c.9.1 1.7-.1 1.8-1 .1-.8-.7-1.1-1.4-1.2-.8-.1-1.7-.5-2.4.2-.3.3-.3.6-.1 1 .5 1 1.5.7 2.1 1zM78.6 227.7c1.1 0 2.8-1.3 2.7-2.1-.1-.5-.5-.7-.9-.7-1.1-.1-3.1 1.2-3 1.9.1.9.7.8 1.2.9zM215.1 204c-.3-.1-.6-.1-.8-.1-.6-.1-1 .1-1 .8 0 1.2.9 1.1 1.6 1.1.8 0 1.9.6 2.3-.7.2-.6-.2-1.1-.7-1.2-.4 0-.9.1-1.4.1zM37.8 337c.8-.2 1.9-.1 2-1.5 0-.8-.4-1.3-1.1-1.2-.9.1-2.1.1-2.2 1.5-.2.9.5 1.1 1.3 1.2zm121.5-161.8h.6c.8-.2 1.6-.4 1.5-1.6 0-1-.6-.9-1.2-.7-1 .2-2.3-.2-2.9 1.3-.1.1.2.5.4.7.4.3.9.2 1.6.3zm34.6 232.1c.4-.1.9-.1 1.3-.2.5-.2.8-.6.7-1.1-.3-1.2-1.2-.9-2-.9-.7 0-1.8-.3-1.8 1 0 1 .9 1.2 1.8 1.2zm-96-171.2c-.2-.6-.7-1.1-1.4-.9-.8.2-2.1.1-2.2 1.3 0 .9.9 1.4 1.7 1.3.9-.1 1.7-.5 1.9-1.7zm-28.5-5.7c-.1-.2-.2-.4-.3-.4-.5-.2-1-.2-1.4.3-.7.8-1.3 1.5-2.1 2.1-.4.3-1.3.6-.8 1.3.4.6 1.3.3 1.7-.1.8-.9 1.6-1.8 2.5-2.5.2-.3.3-.5.4-.7zm147.7-33.6c.8-.2 2.2.4 2.2-.9 0-1.2-1.4-.9-2.2-1-.9 0-2.4-.6-2.4.8s1.5.9 2.4 1.1zM24 352.2c.1-.9-.3-1.5-1.2-1.3-.7.1-1.8 0-1.6 1 .2.8.2 2.3 1.5 2.3 1.1 0 1.2-1.1 1.3-2zm206.5-152.4c.5.1.9 0 1.1-.5.2-.6-.2-.9-.6-1.1-.9-.4-1.8-.6-2.8-.6-.4 0-.9.1-1 .6-.1.6.4.8.8 1.1.8.5 1.8.3 2.5.5zm-38.6 6.7c-.6.4-1.8-.3-1.7 1.1.1 1.5 1.4 1.2 2.3 1.3.8.1 1.4-.3 1.3-1.2-.1-1.2-1.2-.9-1.9-1.2zM70.2 258.1c1.5 0 2.4-.7 2.4-1.7s-.7-.9-1.3-.9c-1.1 0-2 .3-2.1 1.6-.1 1 .6 1 1 1zm-8.7 32.1c-1.3.1-2.1.8-2.2 2-.1.8.7 1 1.3 1 1.2 0 1.8-.9 2-2.1.1-.9-.6-.9-1.1-.9zm45.4-79.6c.9 0 1.8 0 2.5-.6.4-.3.8-.6.6-1.2-.2-.6-.6-.8-1.2-.6-.8.2-1.5.4-2.2.9-.4.3-1.1.4-.9 1.1.1.6.8.4 1.2.4zm-72.4 198c-.3-1.3-.2-2.7-1.8-2.6-.6.1-1.2.3-1 1.1.3 1 .4 2.3 1.8 2.3.6.1 1.1-.2 1-.8zm191.8-233.1c.7-.1 1.6 0 1.4-1-.3-1.4-1.5-1.3-2.5-1.3-.6 0-1.7-.2-1.5.8.3 1.5 1.6 1.4 2.6 1.5zm4.5 186.6c.7-.1 1.6.2 1.6-.9-.1-1.2-1.2-1.3-2.1-1.4-.7-.1-1.7 0-1.7 1 0 1.6 1.4 1 2.2 1.3zm-57-152.2c.8-.3 2.3.1 2.3-1.2 0-1.2-1.5-1-2.4-.9-.7.1-1.7.2-1.7 1.1 0 1 1 .8 1.8 1zm160 60.7c.1 0-.3.1-.3.4.2 1.1.2 2.4 1.2 3.2.5.4 1.2.4 1.5-.3.4-.9-.3-1.6-.6-2.3-.2-.8-.8-1-1.8-1zM66 272.3c-1.2 0-2.8 1.3-2.7 2.2.1.7.7.8 1.2.8.8 0 2.5-1.4 2.5-2.2.1-.8-.5-.7-1-.8zm164.5 81.9c-.5.1-1.2.1-1.1.9.2 1.4 1.3 1.7 2.4 1.9.5.1 1.4-.1 1.2-.8-.3-1.1-1.2-1.9-2.5-2zm59.7-124.1c-.7.2-1.4.3-.9 1.3.6 1.2 1.4 1.9 2.7 2 .6 0 1-.2.8-.8-.6-1.1-1.4-2.1-2.6-2.5zm-224 24.4c1-.1 2.2 0 2.5-1.4.2-.9-.7-.9-1.3-.9-1.1 0-2.3.2-2.6 1.5-.1 1 .9.7 1.4.8zm20.5-1.5c1.5 0 2.7-.8 2.7-1.8 0-.7-.5-.8-1-.9-.9-.1-2.6 1.2-2.6 1.9-.1.9.5.8.9.8zm15.5-32.3c.7-.3 2.1.1 2-1.6 0-.5 0-1.3-.8-1.1-1.1.2-2.4.3-2.7 1.7-.1.9.7 1 1.5 1zm-54.7 45.5c-.8.3-2.5.2-2.4 1.2.1 1.6 1.8.8 2.8 1.1.8.3 1.1-.4 1.1-1.2.2-1.1-.6-1-1.5-1.1zm-19.7 74.7c-.7.3-2-.1-1.8 1.4.1.7.1 1.6 1 1.5 1.1-.1 2-.7 2.1-2 .1-.8-.6-.9-1.3-.9zM93.6 227c.9-.2 2-.5 2.2-1.7.1-.7-.7-1-1.2-.9-.9.3-2.3-.1-2.4 1.4-.2 1.1.7 1.2 1.4 1.2zm123.9-16c.9-.1 2.1.2 2.2-.8.1-1.1-1.3-.9-2-1-.9-.1-2.4-.5-2.4.8-.2 1.2 1.3.9 2.2 1zm20.1 123.5c-.4.1-1.1-.4-1.3.5-.2.8 1.4 1.8 2.6 1.8.6 0 1.3-.1 1.2-.9-.2-1.4-1.4-1.4-2.5-1.4zm-50 57.3c.8 0 1.6-.1 1.6-.8-.1-1.1-1-1.5-2-1.6-.8 0-1.7.2-1.6 1.2 0 1.3 1.3 1 2 1.2zm59.1-38c.8 0 1.5-.2 1.4-1.2-.1-.7 0-1.7-1.2-1.5-.8.1-2 0-2 1.4.1 1.3 1.1 1.2 1.8 1.3zm-72.2-47.7c-.1-.2-.1-.6-.3-.7-1.1-.9-2.2-1.7-1.6-3.5.1-.3-.2-.4-.5-.3-.1 0-.4.2-.4.3.5 1.6.1 3.5 1.1 5 .2.3.4 1 1 .7.5-.4.6-.9.7-1.5zm-10.7-103.9c.8-.3 2.2.1 2.4-1.2.2-.9-.7-1-1.5-1-1 .1-2.2 0-2.5 1.3-.1.9.8.8 1.6.9zm-93.6 72.9c-1.4.1-1.9 1.4-2.7 2.2-.3.4 0 .9.4 1 1.1.2 1.9-.5 2.6-1.4.1-.2.3-.4.4-.6.3-.7.1-1.1-.7-1.2zm100.5-104.2c-.9.2-2.1.1-2.3 1.3-.2.9.7 1.1 1.4 1.1 1.1-.1 2.4-.3 2.5-1.6.1-.9-1-.5-1.6-.8zM28 338.4c1.2-.3 1.4-1.4 1.7-2.4.2-.5-.3-.9-.9-.8-1.2.1-2.1 1-2.4 2-.1.9 1 .9 1.6 1.2zm252.6-62.1c.6-.3 1.9.3 2.1-.9.1-.5-.3-1.8-1.3-1.7-.9.1-1.9.5-2 1.8-.1.9.5.8 1.2.8zM221.1 378c-.6.1-1.6-.1-1.5.9.2 1.2 1.3 1.6 2.4 1.7.5 0 1.2 0 1-.8-.2-1.1-.6-2-1.9-1.8zm51-187.2c-.7.1-1.7-.2-1.7.8.1 1.3 1.3 1.3 2.2 1.4.7.1 1.7.1 1.6-.8 0-1.2-1.2-1.2-2.1-1.4zM74.6 231.5c.9-.3 2-.6 2.7-1.6.2-.3 0-.7-.4-.9-1.2-.5-2.1.2-3 .9-.3.2-.7.5-.6 1 .2.6.7.5 1.3.6zm46.7-7.2c-1 .1-1.9.4-2.8.8-.3.1-.5.3-.5.6.1.3.3.5.6.5 1 .3 1.9-.2 2.9-.1.6 0 1-.3 1-1-.1-.7-.6-.8-1.2-.8zm28.3-13.3c.2 0 .5 0 .8-.1.8-.2 1.8-.5 1.7-1.4-.1-1.2-1.3-.6-2-.6-.3 0-.7.1-1 .3-.5.3-1.3.4-1.1 1.2.2.6 1 .5 1.6.6zm39.5-23.5c-.8.2-2.1 0-2 1.3 0 1.1 1.3.6 2 .8.8.2 1.8.1 1.8-1 0-1.2-1-1-1.8-1.1zM58.2 297.6c1 .3 1.5-.3 1.8-1.1.2-.4.5-1 0-1.3-.7-.5-1.3.1-1.9.3-.1 0-.2.1-.3.2-.5.4-1.5.5-1.3 1.4.3.9 1.2.3 1.7.5zM243 176.3c.1 0 .5 0 .8-.2.2-.1.1-.5-.1-.6-1.3-.7-2.5-1.5-4-1.4-.4 0-.7.1-.8.5-.1.4.2.7.5.8 1.1.3 2.1.8 3.6.9zm-28.6 187.5c0-.6-.4-.8-.8-.7-.5.1-1 .2-1.4.5-.8.5-2.3.9-1.8 1.9.5 1.2 1.6 0 2.5-.2.7-.2 1.3-.6 1.5-1.5zm-12.1-176.1c-.3 0-.5.1-.8.1-.6.1-1.4.2-1.2 1.1.1.8.8 1 1.4 1 .3 0 .6 0 .8-.1.6-.1 1.6.1 1.5-1-.1-.9-.8-1.1-1.7-1.1zM56.8 289.9c1.2 0 2.3-1.1 2.2-2.1-.1-.8-.6-1-1.2-.9-.7 0-2.2 1.6-2.1 2.3.1.8.7.7 1.1.7zm99.7-107.6c-.8.2-2.2-.1-2.3 1.2-.1 1 1.1 1.1 1.8 1.1.8 0 1.8 0 1.8-1.3 0-.9-.6-1-1.3-1zm19.9 17.9c.4 0 .6 0 .8-.1.7-.1 1.5-.2 1.4-1.2-.1-.9-.8-.8-1.5-.8-.3 0-.6 0-.8.1-.6.2-1.6.2-1.4 1.2.1.9.9.8 1.5.8zm95.6 18.4c.2 0 .8-.1 1-.7.2-.6-.3-.9-.7-1.1-.4-.3-.9-.6-1.4-.7-.7-.2-1.6 0-1.8.7-.3.9.6 1.1 1.2 1.4.5.2 1 .2 1.7.4zM53.5 309c1 0 2.4-1.7 2.4-2.6 0-.5-.2-.8-.7-.7-.7.1-2.9 2.1-2.8 2.7 0 .7.7.5 1.1.6zm-9.2-27.1c.3-.1.7-.1 1.1-.2.7-.2 1.4-.7 1.2-1.4-.2-1-1.1-.6-1.7-.5-.3 0-.7.2-1 .3-.6.2-1.5 0-1.3.9.1.7.9.8 1.7.9zm59.8-74.6c.9-.1 1.9-.2 2-1.5.1-.8-.5-1.1-1.1-1-.9.2-2.1.2-2.2 1.5-.1.7.6 1.1 1.3 1zm68.9-11.7c.6-.1 1.4-.2 2.1-.3.5-.1 1-.2.9-.8 0-.7-.6-.8-1.1-.8-.7 0-1.5.1-2.2.2-.5.1-1.3.1-1.1 1 .1.8.8.7 1.4.7zm55 181.1c0-.2-.1-.4-.4-.4-.8-.2-3.2 1.2-3.4 2-.1.4-.2.9.3 1.1.9.2 3.5-1.7 3.5-2.7zm-30 11.6c-.3-.8-.5-1.9-1.7-1.8-.7.1-1.5.3-1.5 1.2.1 1.2 1.1 1.6 2.1 1.7.6 0 1.2-.2 1.1-1.1zM84.5 254.4c-1.1.1-2.1.5-2.3 1.7-.1.7.7 1 1.2.9 1-.2 2.1-.4 2.3-1.7.1-.8-.6-1-1.2-.9zm219.4-17.3c0-.9-1.3-2.4-2.2-2.5-.6-.1-.9.2-.9.8 0 .7 1.5 2.4 2.2 2.5.7.1.9-.2.9-.8zm-106.5-65.6c.3 0 .8 0 1.2-.1.3-.1.6-.4.6-.8 0-.3-.2-.6-.4-.7-.9-.3-1.7-.6-2.6-.4-.5.1-.9.3-.9.9 0 .5.4.9.8 1 .3.1.8.1 1.3.1zM59.2 251.2c-.1-.4-.4-.6-.8-.6-1.3-.1-2.2.7-3 1.7-.3.3-.2.7.2.9.6.3 1.2.4 1.8 0 .5-.6 1.4-1 1.8-2zm172.3 98.2c.4-.1 1.3 0 1.1-.8-.3-1.5-1.6-1.5-2.7-1.7-.3 0-.9-.2-.7.6.3 1.1.9 1.9 2.3 1.9zM69.4 243.1c1-.2 2.3-.3 2.6-1.8.1-.7-.5-.8-.9-.7-1.1.4-2.5.4-2.9 1.8-.2.6.6.6 1.2.7zm7.4 7c1-.1 1.7-.6 1.9-1.7.1-.8-.6-1-1.2-.9-1 .1-2 .4-2.2 1.7 0 .8.8.9 1.5.9zM237.4 192c.6-.1 1.6.1 1.5-.8-.1-1.1-1.1-1.6-2.1-1.7-.6 0-1.6 0-1.5 1 .1 1.2 1.2 1.3 2.1 1.5zM99.2 241.5c1 0 1.9-.2 1.9-1.4 0-1-.7-1-1.3-.9-.8 0-1.9 0-2 1.1-.1.9.7 1.1 1.4 1.2zm133.4 102.6c.9-.1 1.9-.2 2.1-1.3.1-.8-.5-1.2-1.2-1.2-1 .1-2 .4-2.1 1.6-.1.8.6.8 1.2.9zm1 6.8c-.6 0-1.5 0-1.4.9.1 1 1.1 1.5 2 1.7.7.1 1.3-.5 1.2-1.2 0-1.3-.9-1.4-1.8-1.4zM243.7 192c-.6.2-1.4 0-1.5.7-.1.9.7.9 1.3 1.1.4.1.9.3 1.3.3.7.1 1.6.3 1.8-.4.3-.9-.8-1-1.3-1.2-.5-.3-1.1-.4-1.6-.5zM54 298c-.1-.5-.4-.8-.9-.8-.7 0-2.1 1.5-2.1 2.4 0 .8.5.9 1 .8 1.5.1 1.7-1.1 2-2.4zm256.6-53.8c-.5-.7-.5-2.1-1.8-2.1-.8 0-1.1.5-1 1.3.2 1.2.9 1.8 1.9 2 .5 0 .9-.3.9-1.2zM77.5 257.4c1 .1 1.7-.4 1.8-1.5.1-1-.6-1.1-1.4-1.1-1 0-1.8.6-1.8 1.7 0 1 .8.9 1.4.9zm12.2-34c1.2 0 3-1.1 2.9-1.8-.1-.6-.5-.7-1-.7-.9 0-2.9 1.3-2.8 1.9 0 .7.5.6.9.6zm67.7-51.9c.5-.1 1.2-.2 2-.4.4-.1.8-.2.8-.8 0-.5-.4-.7-.9-.7-.9-.1-1.7 0-2.5.3-.5.2-1.3.3-1.1 1.1.2.8.9.6 1.7.5zm-1.2 42.8c.9-.1 1.9-.1 2.5-1.1.2-.3 0-.6-.2-.8-.9-.6-1.8-.2-2.6.1-.5.2-1.3.3-1.1 1.1 0 .7.7.6 1.4.7zm69.4-11.1c.7 0 1.5 0 2-.7.2-.3.1-.6 0-.8-.6-.9-1.5-.4-2.2-.3-.3 0-.6.1-.8.2-.4.2-1 .3-.9.9.1.5.6.6 1.1.7.3.1.6 0 .8 0zm-105.2-19.1c1.1-.3 2.2-.5 3.2-1.4.2-.2.5-.4.4-.7-.1-.4-.5-.2-.7-.2-1.1.1-2.2.5-3.2 1.1-.3.2-.8.4-.6.9 0 .3.4.2.9.3zm117.5 172.7c.5-.1 1.3.1 1.1-.7-.2-1-.8-1.9-1.8-2.2-.5-.2-1.4.1-1.4.9.1 1.4 1.1 1.8 2.1 2zm-172-109.4c1.1-.2 2.4-.3 2.7-1.8.1-.6-.7-.7-1.2-.6-1.1.2-2.2.3-2.4 1.8 0 .7.6.6.9.6zm111.6-57c.8-.1 1.6-.1 2.1-.9.2-.3.2-.6 0-.8-.7-.7-1.5-.3-2.2-.2h-.2c-.6.1-1.2.3-1.2 1.1 0 1 .8.8 1.5.8zm-43.1 17.7c.5-.1 1.4 0 1.3-.9-.1-.8-.6-1.7-1.7-1.7-.8 0-1.4.3-1.4 1.2.1 1.2.8 1.4 1.8 1.4zm98.4 171.1c1.1 0 1.5-.6 1.7-1.6.1-.7-.2-1.1-.9-.9-.9.2-2.1 0-2.3 1.3-.2.9.7 1.1 1.5 1.2zm-51.1 0c.8.1 1.6 0 1.7-1.1 0-1.2-.8-1.2-1.6-1.1-.7 0-1.7-.2-1.7.9s.8 1.3 1.6 1.3zM59.5 248.6c1.2 0 2.6-.9 2.6-1.7 0-.6-.4-.8-.9-.8-.9 0-2.7 1.3-2.7 1.9 0 .7.6.5 1 .6zM27.4 398.8c-.2-.7.1-1.9-1.1-2-.5 0-1.3.3-1.3 1.2.1 1 .5 1.9 1.6 2.1.9.2.8-.5.8-1.3zm172.8-213.9c.8.1 1.6.1 1.6-.9.1-.8-.7-1.2-1.4-1.2-.8.1-2.1-.4-2.2 1 0 1.4 1.4.7 2 1.1zm-14 24.1c.9.1 1.7-.1 1.8-1.2.1-1.1-.9-1-1.5-1-.7.1-1.9-.4-1.9 1 0 1.1.8 1.2 1.6 1.2zm-26.8-1c.5-.4 1.3-.2 2-.5.4-.2.9-.4.8-1-.1-.6-.6-.7-1.1-.7-.7.1-1.4.2-2.1.4-.5.1-.9.4-.7 1 0 .6.5.8 1.1.8zm-124 146.9c1.2-.2 2-.6 2.2-2 .1-.6-.2-.9-.8-.9-.8 0-2.4 1.4-2.3 2.1.1.7.5.8.9.8zm80.4-143.2c.8 0 1.5-.1 1.5-1.2 0-1-.7-1.1-1.4-1.1-.8 0-1.8.1-1.8 1.1s.9 1.2 1.7 1.2zm53.9-10.6c.9-.1 1.9 0 2.6-1 .1-.1 0-.6-.1-.6-.9-.6-1.8-.3-2.6 0-.5.1-1.5-.1-1.4.9 0 1 .9.6 1.5.7zm12.1-1.5c.8-.2 1.9-.1 2-1.4.1-.9-.8-.8-1.4-.8-1 0-1.9.2-2 1.5 0 .9.8.7 1.4.7zm-28.8 5.1c.9 0 1.7.1 2.2-.8.2-.3.2-.6 0-.8-.7-.7-1.5-.4-2.3-.2-.7.1-1.5.3-1.5 1.1.1 1.1 1.1.6 1.6.7zm-66.9 22c.9-.2 2.1-.2 2.4-1.5.1-.7-.7-.8-1.3-.7-1 .1-2.2.3-2.4 1.5-.2.8.7.5 1.3.7zm26.6-29.6c1.6.2 2.1-.5 2.2-1.6.1-.6-.1-1-.7-.8-.9.3-2.2.1-2.5 1.4-.2 1.1.8.9 1 1zm-45.2 84.1c.1-.7.1-1.4-.8-1.2-.9.2-1.9.5-2 1.6-.1.9.8 1 1.5 1 .8.1 1.5-.2 1.3-1.4zm39 157.9c0-1-2-2.7-2.9-2.3-.4.1-1 .5-.6.8.9.7 1.4 2.1 2.8 2.2.4 0 .8 0 .7-.7zM36 343.2c1-.3 2.2-.3 2.5-1.7.1-.5 0-1.3-.5-1-.8.5-1.9.5-2.6 1.3-.2.3-.6.5-.5.9.2.4.6.5 1.1.5zm-6.7-11.4c.8-.2 1.6-.3 1.6-1.5 0-.9-.6-1.1-1.3-1-.8.1-1.7.4-1.7 1.4-.2 1 .7 1 1.4 1.1zM210.8 169c.8-.1 2.1.6 2.1-.7 0-1.2-1.2-.8-1.9-.8-.8 0-2.3-.4-2.3.8-.1 1.1 1.4.4 2.1.7zM89 230.6c.8-.1 1.6-.4 2-1.2.2-.3.2-.7-.1-1-.6-.7-1.3-.1-1.9 0-.1 0-.2 0-.3.1-.4.2-1.1.2-1.1.9.2.9.7 1.2 1.4 1.2zm91.9-47.4c-.5.1-1.7-.3-1.7.8s1.2 1 2 1c.3 0 .7 0 1-.1.4-.1.8-.3.8-.8 0-.6-.3-.9-.9-.9h-1.2zM71.7 273.4c1.1-.2 2.1-.5 2.3-1.9.1-.5-.2-.9-.8-.8-1.1.2-2 .9-2.4 2-.3.6.4.7.9.7zm142.6 98.7c.8-.1 1.8-.1 1.9-1.1.1-1.1-.9-1-1.6-1-.8 0-1.5.1-1.5 1.2-.1.9.5.9 1.2.9zm-43.7-185.6h1.3c.7-.1 1.1-.5 1-1.2-.1-.8-.6-1-1.3-.8-.3.1-.6.1-.8.2-.6.2-1.6.1-1.5 1.1 0 .9.9.6 1.3.7zm-2.9 10.2c.9 0 2-.2 2.4-1.2.2-.6-.7-.9-1.2-.8-.9.2-2.3-.2-2.5 1.3-.2.7.6.7 1.3.7zm56 15.8h.9c.4 0 .9.1 1-.4.1-.6-.3-.8-.8-1-.3-.1-.5-.2-.8-.2-.8-.1-1.7-.4-2.4.2-.2.2-.2.6 0 .8.5.8 1.4.4 2.1.6zM77.2 271.9c.6-.5 2.1.1 2.2-1.5 0-.6-.3-1.1-.9-1-1 .2-2 .6-2.3 1.8-.2.7.4.7 1 .7zm176.4-75.6c-.6 0-1.3 0-1.4.6-.1.7.6 1 1.1 1.2.8.2 1.6.9 2.4.2.2-.2.4-.5.2-.8-.6-.9-1.5-1.1-2.3-1.2zm-37.5 191.2H215c-.6.1-1.4 0-1.3 1 .1.8.8.8 1.5.8.3 0 .6 0 .8-.2.6-.4 1.8-.4 1.7-1.1-.1-.9-1.2-.4-1.6-.5zM18.5 329.7c-.4.4-1.7.1-1.7 1.2 0 .9.9 1.7 1.7 1.8 1.3.1.6-1.3.9-1.9.4-.7-.1-1.1-.9-1.1zm266.7-130.8c-.5 0-.9 0-.9.6.1 1.2.9 1.8 2 1.9.7.1 1.2-.3 1.1-1-.2-1.4-1.5-1.1-2.2-1.5zM36.5 289.8c.8-.3 2.1.1 2.2-1.3.1-1-.8-.7-1.4-.8-.9 0-1.8.2-1.9 1.3-.1.7.5.8 1.1.8zM333.9 255c-.4-.1-.6.1-.7.3-.4 1.2.5 1.9.9 2.7.4.6 1 1.1 1.7 1 .4 0 .4-.5.2-.6-1.1-.5-.9-1.7-1.3-2.6-.1-.3-.6-.6-.8-.8zm-256.4 9.6c1.1 0 2-.1 2.2-1.2.1-.9-.6-.9-1.2-.9-1 0-2 .2-2.1 1.4-.1.7.7.7 1.1.7zm89.7 95.5c-.5 0-.8 0-1 .4-.1.2-.1.5.1.7.7.8 1.4 1.6 2.5 1.8.6.1 1.2-.1.8-.8-.6-1-1.5-1.7-2.4-2.1zM55.9 302.8c1.2 0 2-.5 2.3-1.8.1-.5-.2-.8-.7-.7-1.1.3-2.2.5-2.6 1.8-.3.8.6.5 1 .7zm157.7-129.7c.5-.1 1.5.2 1.4-.9 0-.9-.9-1.2-1.7-1.2-.7 0-1.8-.1-1.8.9.1 1.1 1.2 1 2.1 1.2zm-100.5 45.5c.9-.3 2.2-.3 2.4-1.5.2-.9-.8-.6-1.3-.6-1 0-2 .3-2.2 1.5 0 .6.7.5 1.1.6zm71.7-38.7c.6-.1 1.7.1 1.7-1.1.1-1-.9-1-1.5-1-.7.1-1.8-.1-1.8 1.1-.1 1.1.8.9 1.6 1zM105 224.1c.8-.3 2.1 0 2.3-1.4.1-.8-.6-.9-1.2-.8-.9.2-2.1.1-2.2 1.5-.2.8.5.6 1.1.7zm-59.3 79.3c1.1 0 1.8-.5 2-1.8.1-.5 0-1-.7-1-1.1.1-1.8 1-2.2 2-.2.8.5.7.9.8zm116.5-105.6c1 .2 1.8-.2 2-1.2.1-.9-.8-.6-1.3-.6-.9 0-2.1 0-2.3 1.1-.1.9 1 .6 1.6.7zm43.2-31.1c-.5.2-1.6-.5-1.7.7 0 1 .9 1.1 1.6 1.1.7 0 1.7.1 1.7-1 0-.9-.9-.7-1.6-.8zm-131.6 87c1 0 1.8-.4 1.9-1.5.1-.7-.5-1-1-.9-.9.1-1.9.4-2 1.5-.2.9.6.9 1.1.9zm111.6 129.1c.5 0 1.1 0 1.1-.8-.1-1.1-.8-1.5-1.8-1.5-.7 0-1.4.2-1.3 1 .1 1 1 1.3 2 1.3zM40.2 281.4c-.8.4-2 .5-2.2 1.8-.1.8.5.9 1 .8 1-.2 2-.7 2.1-2 .1-.5-.3-.6-.9-.6zm88-89.2c-.7.1-1.5 0-1.5 1.2 0 1 .7 1.2 1.4 1.2.9 0 1.4-.4 1.4-1.4 0-1-.6-1-1.3-1zm21.9-6.3c.9-.2 2.2.1 2.3-1.3.1-.8-.9-.7-1.5-.7-.9 0-1.8.1-2 1.3 0 .7.7.6 1.2.7zM172.7 360c-.1-.8-1.7-2.2-2.4-2.1-.5.1-.6.4-.5.8.4.9.6 2.2 2 2.1.6 0 1-.1.9-.8zm-55.8-137.7c1 0 1.8-.1 2.3-.8.2-.3.2-.6-.1-.8-.7-.5-1.4-.3-2.1-.1h-.2c-.4.3-1.3.2-1.1 1 .2.7.9.6 1.2.7zm-32.6 6.5c0-.4-.2-.6-.5-.6-1.1-.2-2.1 0-2.8 1.1-.2.3-.2.6 0 .8.5.4 1.1.3 1.6.1.7-.4 1.4-.6 1.7-1.4zm46.6-21.9c-.7.1-1.4 0-1.4 1.1.1.7.2 1.4 1 1.4.9 0 1.4-.7 1.5-1.6.2-1-.6-.8-1.1-.9zm51.9-17.5c.8-.1 1.9.2 2.1-1 .1-.8-.6-1-1.3-.9-.8.1-2-.1-2.1 1.2-.1 1 .8.6 1.3.7zm-84.3 21.7c0-.6-.4-.9-.9-.8-.8.2-2 0-2.3 1.1-.2.6.5 1.1 1.1 1 .8-.2 1.8-.1 2.1-1.3zm10.1 21.4c-.8.1-1.9-.1-2 1.1-.1.7.6 1 1.2 1 .8-.1 1.8-.2 2-1.2.1-.7-.6-.9-1.2-.9zm-5.4 5.8c.8-.2 1.7-.3 1.8-1.4.1-.9-.7-.8-1.2-.7-.8 0-1.7 0-1.8 1.2 0 .7.5.9 1.2.9zm128.6-48.2c.6-.1 1.4-.2 1.9-.8.2-.3.2-.6 0-.8-.6-.8-1.3-.2-1.9-.2h-.3c-.5.2-1.3.3-1.1 1.1 0 .7.7.6 1.4.7zm-29.1 184.6c.9 0 1.5-.4 1.5-1.3s-.6-.9-1.2-.8c-.7.1-1.8-.1-1.7 1.2 0 .9.8.9 1.4.9zm121.1-128.2c.4 0 .9-.2.7-.8-.3-1-.6-2.1-1.8-2.1-.5 0-1.1.1-1.1.8-.1.7 1.6 2.1 2.2 2.1zm-96.4 106.2c.7-.3 1.8 0 1.9-1.3 0-.6-.6-1-1.1-.8-.8.2-1.9-.1-2.1 1-.2.8.6 1.1 1.3 1.1zM67.1 239.5c1 .1 1.7 0 2.2-.7.2-.3.1-.6-.1-.8-.7-.6-1.4-.3-2.1-.1-.5.2-1.4.1-1.3 1 .2.8 1 .5 1.3.6zm25.1-24.1c1.1 0 2-.1 2.1-1.3 0-.9-.8-.6-1.3-.6-.8 0-1.9-.1-1.9 1.2-.1.9.7.7 1.1.7zm13.7 2.2c.7-.3 1.9 0 2.1-1.1.2-.9-.8-.8-1.4-.8-.8 0-1.8 0-2 1.2 0 .8.7.6 1.3.7zm17.4-2c-.7.2-2-.3-1.9.9 0 1 1.3.8 2 .9.7.1 1.4-.2 1.4-1 0-1.1-1-.6-1.5-.8zm43.7-11c-.9.3-2.1-.1-2.2 1.2-.1.7.8.8 1.3.7.8-.2 1.9 0 2.1-1.1.1-.9-.7-.8-1.2-.8zm-26.5-10.5c.7-.4 2 .3 2.2-1.2.1-.6-.5-1-1.1-.8-.8.3-2.1-.2-2.3 1.2-.1.7.6.8 1.2.8zM32 317.7c1 0 1.7-.2 1.8-1.3.1-.7-.6-1-1.2-.9-.8.1-1.8.2-1.8 1.4 0 1 .7.8 1.2.8zM186.4 185c.8-.2 1.9-.2 2.2-1.5.1-.6-.4-.8-.8-.6-.9.3-2.2-.1-2.6 1.3-.1.7.6.8 1.2.8zM174 361.9c-.6 0-1.3-.1-1.3.6 0 1.2 1.1 1.3 1.9 1.5.6.2 1.3-.2 1.3-.8-.1-1.3-1.4-.8-1.9-1.3zm-38.4-172.8c-.4.3-1.3-.2-1.4.8 0 1.1.8 1.2 1.6 1.2.6 0 1.4.1 1.4-.9 0-.8-.7-1.1-1.6-1.1zM23.5 347c.8.1 1.2-.3 1.3-1.1 0-.8-.3-1.3-1.1-1.2-.8.1-1.6.3-1.6 1.3-.2 1.1.8.9 1.4 1zm75.8-130.9c.7-.1 1.7.1 1.7-1 .1-.9-.7-.9-1.4-.9-.8.1-1.8.1-1.8 1.1 0 .9.9.8 1.5.8zM201 405.4c-.6 0-1.2.1-1.1 1 .1.9.6 1.2 1.4 1.2.6 0 1.3-.2 1.2-.9 0-.9-.6-1.3-1.5-1.3zm-49.8-205c.9 0 1.9-.1 2-1.1.1-.8-.8-.8-1.4-.8-.7.1-1.8 0-1.9 1-.1.9.8.8 1.3.9zm27.7 181.1c.4-.1 1.2 0 1.3-.9 0-1-.6-1.2-1.4-1.2-.6 0-1.4-.1-1.4.9-.1.9.5 1.2 1.5 1.2zm6.9-189.3c-.8.2-2 0-2.2 1.3-.1.9.7.7 1.3.7.9.1 1.8-.2 2-1.3.1-.8-.7-.6-1.1-.7zM75.4 266.8c-.9.1-1.9.1-2 1.1-.2.9.7.9 1.3.9.7 0 1.5-.1 1.6-1.2.1-.7-.4-.8-.9-.8zm164.9 86.1c.6 0 1.3 0 1.3-1 0-.9-.5-1.2-1.2-1.1-.7.1-1.6.1-1.6 1.2.2.9.9.9 1.5.9zm-34.4-153.3c.7-.1 1.9.1 2-1 .1-.7-.8-.9-1.5-.8-.8.1-1.9 0-2 1.2.1.8.9.6 1.5.6zm-92.8 85.1c-.8-.2-1.2.5-1.3 1.4-.1.7.6.8 1.1.8.9 0 1.6-.5 1.7-1.4.1-.7-.7-.7-1.5-.8zm192.2-42c-.4-.5-.3-1.7-1.4-1.6-.6 0-1 .4-.8 1.1.2.9.4 1.7 1.5 1.7.5-.1.8-.5.7-1.2zM189 203.8c.6-.3 1.8.3 1.8-1 0-.7-.8-1-1.3-.8-.7.2-1.8-.3-1.9.9-.1.8.7 1 1.4.9zm4.6 188.1c.6-.1 1.6.1 1.6-.8s-.7-1.1-1.5-1.1c-.7 0-1.7.1-1.7 1 .1 1 1 .8 1.6.9zm111.1-142.5c.8 0 1.6 0 1.6-1.1 0-1-.9-.7-1.5-.8-.7 0-1.5 0-1.5 1 0 .9.8.8 1.4.9zm-132.3-45.8c-.7.2-1.8-.2-1.8 1 0 .8.8.9 1.5.8.8-.1 1.8-.1 1.8-1.2 0-.8-.9-.5-1.5-.6zm4.2 167.4c-.9.1-1.8.1-1.9 1.1-.1.9.8.9 1.4.9.8 0 1.6-.4 1.7-1.3.1-.9-.8-.6-1.2-.7zm38.5-10.2c1.1 0 2-.1 2-.9 0-1.1-1.1-.9-1.9-1-.6 0-1.3.1-1.3.9.1 1.1.9 1 1.2 1zm-75.4-171.5c.5-.2 1.4-.1 1.5-1.1 0-.6-.5-1-1.1-.8-.7.2-1.8-.2-1.9.9-.1.8.6 1 1.5 1zm47.7 9.6h.7c.5-.1 1.3.1 1.2-.8-.1-.9-.8-.7-1.3-.7h-.7c-.6.1-1.4-.2-1.4.8 0 1.1.9.7 1.5.7zm-86.9 10.7c.7-.2 1.7-.3 1.9-1.4.1-.6-.5-.6-.9-.5-.9.2-2 .1-2.3 1.2-.3.7.7.6 1.3.7zm51-38.5c-.8.1-1.8.1-1.9 1.3-.1.6.6.7 1 .6.8-.1 1.9 0 2.1-1.1.3-.9-.6-.8-1.2-.8zm-38.8 34.7c-.5.2-1.4.1-1.4.9-.1.8.6 1.1 1.3 1 .6-.1 1.6 0 1.6-.9 0-.8-.9-.7-1.5-1zm59 108.9c0-.4-1.4-2.7-1.7-2.8h-.5c-.4 1 .5 1.6.6 2.5 0 .3.3.7.5.9.2.2.5.3.8.1.3-.1.3-.4.3-.7zm-37.5-97.2c.8-.1 1.6.1 1.7-1.1 0-.8-.6-.8-1.1-.8-.8 0-1.6 0-1.7 1-.2 1 .6.8 1.1.9zm-11 12.1c.8-.1 1.6 0 1.7-1.2.1-.7-.4-1-.9-.9-.9.1-1.6.6-1.8 1.6-.1.6.6.4 1 .5zm-82.8 98.9c0-.4-.3-.5-.7-.6-1-.2-2.4.9-2.4 2.1 0 .1.1.4.2.4.4.3 2.9-1.3 2.9-1.9zm143.7-126.6c-.5.3-1.5.2-1.5 1.1 0 1.1 1.1.8 1.7 1 .7.2 1.1-.4 1.1-1.1 0-.8-.6-1-1.3-1zm5.7-35.9c-.4 0-.9 0-1.3.1-.3.1-.7.2-.7.7 0 .4.3.7.7.7.8.1 1.7.2 2.5-.1.3-.1.6-.4.5-.8-.1-.2-.4-.4-.6-.5-.4-.1-.8-.1-1.1-.1zm45.1 6.5c-.4.3-1.5-.3-1.4.7.1 1 1.1.8 1.8.9.7 0 1.8 0 1.8-.6-.1-1.2-1.4-.7-2.2-1zm-3.5 4.1c.8 0 1.5-.1 1.5-1 .1-.8-.5-1-1.1-.9-.6.1-1.6-.3-1.7.7 0 .9.7 1.2 1.3 1.2zm-128.2 36.5c.7-.2 1.6-.1 1.7-1.1.1-.8-.7-.7-1.3-.8-.8 0-1.8.1-1.8 1.1 0 .8.8.8 1.4.8zm-40.4 38.5c1 0 1.8-.3 2-1.4.1-.5-.2-.9-.7-.8-.9.2-1.9.2-2.2 1.3-.1.8.5.9.9.9zm82.4-39.2c.7 0 1.5-.1 1.5-1 0-.7-.6-.8-1.1-.7-.8.1-1.8.1-1.9 1.1 0 .7 1 .5 1.5.6zm31.1 164.1c-.5.1-1.4-.3-1.3.7 0 .9.7 1.1 1.5 1.1.6 0 1.4-.1 1.4-.9 0-.9-.8-.9-1.6-.9zm-58-178c.7 0 1.5 0 1.4-1-.1-.9-.8-.9-1.5-.9-.6 0-1.5 0-1.5.9.1 1.1 1 .9 1.6 1zm158.5 85.2c0-.3-.1-.4-.3-.5-.8-.3-2.3.9-2.4 1.8 0 .4 0 .7.4.8.4.1 2.3-1.6 2.3-2.1zM81.6 462.3c0-.7-.5-.8-.9-.8-1.2 0-1 1.3-1.3 2-.3.7.4.7.8.7 1.3.1 1-1.2 1.4-1.9zm126.2-66.5c.7-.1 1.5-.3 1.6-1.2.1-.5-.2-1.1-.8-.8-.8.3-1.9.2-2.1 1.2-.1.7.8.7 1.3.8zm99-158.7c-.5 0-1.1 0-.9.7.2 1 1 1.2 1.9 1.3.5.1 1-.2.9-.8-.2-1.2-1.2-1-1.9-1.2zm-150.6-38.2c.8-.1 1.7-.5 2-1.4.2-.6-.4-.6-.8-.5-.9.3-2.1 0-2.4 1.2-.1.7.7.7 1.2.7zm54.2 184.2c.5-.2 1.6.1 1.6-.8s-.9-.8-1.5-.7c-.6.1-1.6-.3-1.7.7 0 .7.9.8 1.6.8zm-19.3 5.8c.6 0 1.3-.1 1.4-.9.1-.9-.7-.9-1.3-.9-.7 0-1.5 0-1.5 1 0 .8.7.8 1.4.8zm115.1-171.3c-.4 0-.8.3-.7.8.2 1.2 1.3 1.1 2.1 1.5.4.2.6-.2.5-.6-.1-1.3-1-1.4-1.9-1.7zm-109.7-13.9c.7 0 1.3 0 1.4-.9.1-.8-.4-1.2-1-1.1-.6 0-1.5 0-1.6.9-.2.8.5 1 1.2 1.1zM163 400.4c.4-.1 1.2.2 1.2-.8 0-.8-.6-1.1-1.3-1.1-.6 0-1.3 0-1.4.9 0 .9.6 1.1 1.5 1zm44.5-228.1c.6-.1 1.5.2 1.5-.8s-.9-1-1.6-1c-.6 0-1.6-.1-1.5.9 0 1.1.9.8 1.6.9zM74.2 225.1c-.2-.1-.3-.3-.4-.4-.4-.2-3.1 1.8-3 2.3 0 .1.1.2.1.3.5.2.9.1 1.3-.3.6-.7 1.6-.9 2-1.9zm175.4-42.6c.5-.1 1.2 0 1.2-.7 0-.8-.7-1.2-1.4-1.2-.5 0-1.3-.1-1.3.7 0 .8.8 1.1 1.5 1.2zm-128.5 30.7c.7 0 1.4-.1 1.4-.9.1-.8-.6-.9-1.2-.9-.7 0-1.5.1-1.5 1.1.1.7.8.6 1.3.7zM268 324.5c-.5.2-1.3.2-1.3 1.2 0 .8.7.8 1.3.9.7.1 1.2-.3 1.2-1.1-.1-.8-.5-1.1-1.2-1zm-88.2-130c.7 0 1.5 0 1.6-.9 0-.7-.7-1-1.2-.8-.6.2-1.7-.1-1.7 1.1 0 .7.7.6 1.3.6zm103.7 3.1c-.3-.8-.8-1-1.4-.9-1 .2-1.1 1.2-1.6 1.9-.1.1.5.3.7.2.8-.4 1.9-.2 2.3-1.2zm-140.4.5c.6-.2 1.5 0 1.6-.9.1-.8-.7-.8-1.3-.8-.6.1-1.6 0-1.6.9 0 .7.7.7 1.3.8zm-16.4 15.8c-.7 0-1.4 0-1.4.9-.1.7.4.9 1 .9.7 0 1.5.1 1.7-.8.1-.9-.8-.8-1.3-1zm120.5 130.3c-.5.2-1.4-.1-1.4.9 0 .9.7 1 1.3 1.1.7 0 1.4-.2 1.4-1.1-.1-.9-.8-.8-1.3-.9zM92.4 199.5c.4-.4 1.6-.1 1.5-1-.1-.7-1.2-.7-1.9-.8-.5-.1-1 .1-.9.7 0 .8.5 1.1 1.3 1.1zm75.8 102.8c.9-.3 1.7-.9 2.3-1.8.1-.1 0-.5-.1-.6 0-.1-.4-.1-.4 0-.3 1.2-1.4.8-2.1 1.1-.3.1-.7.3-.6.7-.1.4.4.5.9.6zm21.7 71.3c-.5.1-1.3-.2-1.2.7.1.9 1.1.9 1.8 1 .5.1 1-.1 1-.7-.1-1.1-.9-1-1.6-1zm-2 4c-.5.2-1.4.1-1.3 1 0 .9.8.8 1.4.8.6 0 1.3-.1 1.3-.8 0-.9-.7-.9-1.4-1zm-72.2-191.1c.6-.3 1.7 0 1.8-1.1 0-.6-.7-.4-1.1-.3-.7.1-1.7-.3-1.9.8-.1.6.6.5 1.2.6zM17.8 344.4c.5-.1 1.3-.2 1.3-1.1 0-.6-.5-.8-1-.7-.6.2-1.6-.1-1.6 1.1-.1.7.6.7 1.3.7zm184.1 51.1c.6-.1 1.5.1 1.5-.9-.1-.8-1-.6-1.6-.7-.6-.1-1.3.1-1.3.8-.1 1 .7.8 1.4.8zm-29.8-24c-.1-.7-.5-.9-1.1-.9-.6.1-1.4-.3-1.5.6-.1.8.5 1 1.1 1.1.6.2 1.2 0 1.5-.8zm18.9 11.1c.6-.1 1.3-.1 1.3-.8 0-.8-.7-.9-1.3-.9-.6 0-1.4-.1-1.4.9.1.9.9.5 1.4.8zm11.3-211c.6-.1 1.5.1 1.5-.9 0-.7-.7-.7-1.2-.7-.6.1-1.5-.1-1.6.9-.1.8.8.5 1.3.7zm-25 13.1c-.2-.7-.8-.9-1.4-.8-.5.2-1.3.1-1.3.9s.8 1 1.4.9c.6-.1 1.2-.2 1.3-1zm-142 95.6c.8-.2 1.6-.5 1.9-1.4.1-.4-.2-.7-.6-.6-.8.2-1.7.3-2 1.4-.1.3.3.5.7.6zM179 375.5c.5-.1 1.2-.1 1.1-1-.1-.8-.7-.9-1.3-.8-.5.1-1.3.1-1.3.9 0 1 .9.8 1.5.9zm-155.3 9.3c.6 0 .7-.5.8-1 .1-.6-.1-1.1-.8-1.1-.6 0-1.3.1-1.3.8.1.7.8 1 1.3 1.3zm289.8-148.5c-.3-.8-1.1-.9-1.8-1-.4 0-.9.2-.7.7.3.9 1.1 1 1.8 1 .4.2.7-.1.7-.7zM77.9 221c.6-.4 1.8-.2 2.1-1.3.1-.5-.4-.8-.8-.6-.8.3-1.6.7-2 1.5-.1.4.3.5.7.4zm83.9 64.6c.1-.6.1-1.1-.6-1.1-.6 0-1.2.2-1.1 1 0 .5-.1 1.3.7 1.4.9 0 1-.7 1-1.3zM131 213.7c0-.7-.5-.9-1-.9-.6 0-1.4 0-1.5.8-.1.8.7.7 1.2.9.6.2 1.1 0 1.3-.8zm147.6-18.8c-.6.1-1.4 0-1.5.8 0 .6.8.7 1.4.8.6.1 1.3-.2 1.3-.8.1-.7-.6-.8-1.2-.8zm-82.4 200.4c.7.2 1.2 0 1.3-.7.2-.7-.3-.8-.8-.8-.7 0-1.5 0-1.6.9 0 .7.8.4 1.1.6zm-1.5-227.8c.5-.1 1.4.2 1.5-.7.1-.9-.7-.8-1.2-.8-.6 0-1.4 0-1.5.9-.1.8.7.5 1.2.6zm-32.5 44.3c.6-.2 1.4.1 1.4-.9 0-.7-.5-.7-1-.6-.6.1-1.6 0-1.7.8-.1.8.8.6 1.3.7zM92 255.1c-.1-.7-.5-.8-1-.9-.5-.1-1.2.1-1.2.7 0 .8.7 1 1.3 1.1.5 0 .8-.4.9-.9zm82 72.4c-.2-.6-.2-1.4-1-1.6-.5-.1-1 .1-.9.7.1.7.4 1.4 1.1 1.6.6.2.8-.1.8-.7zm-36.5-133.7c-.6.1-1.4.1-1.5.9-.1.7.7.6 1.2.6.6 0 1.2-.1 1.3-.8.1-.8-.5-.7-1-.7zm176.4 51.8c-.4.1-1 0-1 .6.1.9.8.9 1.4 1 .5.1 1.1-.1 1.1-.8-.1-.8-.9-.6-1.5-.8zM174.4 374.2c-.2-.8-.8-.7-1.3-.7-.4 0-1.1 0-1.1.6.1.8.8.9 1.5.9.5.1.9-.2.9-.8zm-33.5-134.4c.4-.2.8-.3.8-.9-.1-.7-.5-1.1-1.1-1-.5 0-.9.3-.8.9 0 .6.4.9 1.1 1zm-31.6-20.5c-.4.1-1.1 0-1.2.6 0 .6.7.7 1.2.8.5.1 1.1-.1 1.1-.8.1-.6-.6-.5-1.1-.6zm2.7 10.8c-.4.3-1.4-.1-1.4.9 0 .7.7.7 1.2.7s1.1-.2 1.2-.8c.1-.7-.4-.8-1-.8zm-29.7 29.8c-.1-.5-.3-1-.9-.9-.6.1-1.4.2-1.4 1 0 .6.8.5 1.3.6.5.1.9 0 1-.7zm3.6-55.9c-.5.1-1.4-.1-1.5.7-.1.6.7.7 1.1.7.7.1 1.3-.3 1.4-1 .1-.6-.6-.3-1-.4zM327 245c-.5 0-.5.5-.5.8.1 1 .9 1.1 1.6 1.3.3.1.5-.3.4-.6-.1-.9-.8-1.2-1.5-1.5zm-40.6 40.5c-.5 0-1.1.1-1.2.8-.1.7.4.7.9.7.6 0 1.3 0 1.3-.8 0-.7-.6-.6-1-.7zm-66.2 74.6c-.1-.8-.7-.8-1.2-1-.4-.1-1 .1-1.1.6-.1.7.5 1 1.1 1.1.5.1 1 0 1.2-.7zm41.5-35.4c-.5.1-1.1.3-1.1.9-.1.7.6.8 1.1.9.4.1 1 .2.9-.6-.1-.6-.3-1.1-.9-1.2zM92 200.7c0-.4-.3-.5-.6-.5-.7.1-1.5.2-1.9 1-.2.5.3.5.6.5.8 0 1.5-.3 1.9-1zm39.3 16.5c-.4.2-1.1.1-1.1.8 0 .7.6.6 1 .6.5 0 1.1-.1 1.1-.8.1-.5-.5-.5-1-.6zm118.8-22.1c-.4.2-1.3-.1-1.3.4 0 .7.8.7 1.3.6.4 0 1.2.1 1.2-.6-.1-.5-.7-.3-1.2-.4zm-107.7 46.6c-.5 0-1 .1-1 .7 0 .7.6.8 1.1.8.5 0 1-.1 1-.7 0-.8-.6-.7-1.1-.8zm43.2 153.8c-.5.1-1.3-.3-1.3.6-.1.6.6.7 1 .7.5.1 1.1-.2 1.2-.8 0-.5-.5-.4-.9-.5zm7.1.8c-.1-.6-.5-.6-.9-.5-.5.1-1.2.1-1.2 1 0 .5.6.5 1 .4.4-.2 1-.1 1.1-.9zm-3.8-2.2c.2.4.6.4 1 .5.5.1 1.1.1 1.3-.5.2-.6-.3-.7-.7-.7-.7-.1-1.2 0-1.6.7zM97.2 197c-.2-.6-.6-.4-1-.4-.5 0-1.1 0-1.2.7 0 .6.6.7 1 .6.6 0 1-.3 1.2-.9zm127.3 178c-.5 0-1.1-.1-1.2.7 0 .5.4.7.8.6.5-.1 1.1-.1 1.2-.8.1-.6-.5-.4-.8-.5zm-68.4-166.9c-.2-.5-.6-.5-1-.4-.5 0-1 .1-1 .8 0 .4.5.6 1 .5.5-.1.9-.3 1-.9zm167.7 52.8c0 .5.4.7.8.8.6.1 1-.2 1.1-.8.1-.4-.2-.7-.6-.6-.5 0-1 0-1.3.6zm-140.3 132c0-.6-.4-.7-.8-.7s-1-.1-1 .6c0 .5.4.7.8.8.6.2.9-.1 1-.7zm-164.8-56c-.2-.6-.7-.7-1.3-.7-.4 0-.7.3-.5.7.2.5.6.7 1.1.6.4 0 .7-.1.7-.6zm203.9-166.1c.4 0 1 .1 1.1-.5.1-.7-.5-.7-.9-.7-.5 0-1.2 0-1.2.6-.1.6.6.5 1 .6zM177.9 204c.4-.1 1.1.1 1.1-.5s-.6-.6-1-.6c-.5 0-1.1.1-1.1.6 0 .7.7.4 1 .5zM38.2 260.7c.1.4.4.6.8.5.4-.1.8-.3.8-.8 0-.4-.2-.7-.6-.6-.5.1-.9.3-1 .9zM283 285.1c.4-.1 1-.2.9-.8 0-.4-.5-.5-.8-.5-.4 0-.9.1-.9.6s.4.6.8.7zm18.2-72.7c-.2 0-.6 0-.6.4 0 .7.6.8 1 .9.3.1.6-.1.5-.5 0-.5-.3-.8-.9-.8zM247.8 178c.4 0 .8-.1.8-.5.1-.6-.4-.6-.8-.6s-.9-.1-.9.5c0 .4.6.5.9.6zm75.2 60.7c-.3-.4-.8-1-1.2-1.6-.1.1-.3.3-.2.4.3.6.4 1.5 1.2 1.8.1 0 .3-.2.2-.6zM199.8 403.2c-.4 0-.8 0-.8.5s.4.8.8.8c.3 0 .7-.2.7-.6.1-.6-.3-.6-.7-.7zm-25-92.6c.4 0 .5-.4.5-.7 0-.4.1-1-.4-1-.5-.1-.5.6-.6.9-.1.3.1.6.5.8zm-11.7-14.9c0-.4-.2-.7-.6-.7-.3 0-.5.2-.5.6 0 .3.2.6.5.6.4 0 .6-.2.6-.5zm12.8 35.4c0-.4-.2-.6-.5-.6-.4 0-1 0-1.1.6-.1.4.3.4.6.4.5.1.9.1 1-.4zm14.6 54.2c-.3.1-.7.1-.7.5s.4.4.6.4c.4 0 .7-.2.7-.6 0-.4-.3-.3-.6-.3zm-95.4 56.8c0-.4-.2-.5-.5-.5s-.7 0-.8.4c-.1.3.3.5.5.5.4.1.7 0 .8-.4zM167 297c-.1-.4-.4-.4-.8-.4-.3.1-.7.2-.7.6.1.5.6.4 1 .4.3-.1.6-.2.5-.6zm-27.9-97.7c.2-.1.7-.1.7-.5.1-.6-.4-.4-.7-.4-.3 0-.8 0-.8.4-.1.5.4.4.8.5zM45.2 447.6c0-.2-.2-.5-.5-.5-.3-.1-.5.1-.5.5 0 .3.2.6.5.6.2 0 .5-.1.5-.6zm162.9-71.4c-.1.1-.3.2-.4.4-.1.4.2.5.5.5.2 0 .4-.1.5-.4.1-.3-.1-.5-.6-.5zM99.5 203.9c.1-.3-.2-.4-.4-.4-.3 0-.6.1-.7.3-.2.2 0 .4.3.5.3 0 .7 0 .8-.4zm114.4 180.9c-.2.1-.5.2-.5.6 0 .3.3.3.5.3.3-.1.5-.2.5-.6 0-.3-.2-.4-.5-.3zm-14 11.3c-.2-.1-.4-.3-.7-.3-.3 0-.6.1-.6.5s.4.4.6.4c.4-.1.7-.1.7-.6zm-89.7-197.5c0-.3-.2-.4-.5-.4s-.6.1-.5.4c0 .1.3.2.5.3.3 0 .5 0 .5-.3zm89.7 176.1c0-.3-.2-.4-.4-.4s-.4.1-.5.4c-.1.3.2.4.4.4s.4-.1.5-.4zm25.9 65c-.3.9.7 1.3 1.2 1.7 1.4 1.2 2.9 2.2 4.6 2.6 1.1.3 1.8.9 2 2 .4 2.5 1.9 4.4 2.8 6.6.6 1.5.4 3.4 1.4 4.6 2.3 2.5 2.6 5.9 4.1 8.7 1 2 1.2 4.4 2.8 6.2.5.6 1.4 1.6.7 2.3-.8.9-1.3-.4-1.9-.9-.7-.6-1.6-1.2-2.3-.3-.7.8-1 2.1-.2 3 1 1.1 2 2.3 3.3 3.1 1.3.8 2.3 2 2.8 3.6.7 2.3 1.8 4.4 3.2 6.2 1 1.2 3.2 1.4 4.2.3 1.1-1.2.3-2.3-.3-3.4-.9-1.6-2.3-2.9-2.6-4.9-.4-3.1-1.5-6.2-.5-9.5.2-.6 0-1.3-.7-1.4-.6-.1-1.3-.1-1.6.7-.2.6-.3 1.4-1.2 1.2-.8-.2-1-.9-1.2-1.6-.6-1.9-1.3-3.7-2.1-5.6-2.5-6.2-5.9-12-7.9-18.5-1-3.2-1.8-6.3.6-9.3.6-.7.9-1.8 0-2.4-.9-.7-1.6.4-2 1.1-.5.7-.8 1.6-1.1 2.4-.1.3-.2.8-.7.7-.5-.1-.3-.5-.4-.9 0-.5-.3-.8-.8-.7-.5.2-.4.7-.3 1.1.1.2.1.5.2.7.2.5.7 1.1 0 1.6-.6.4-1.2.1-1.7-.5-.7-.9-1.7-1.2-2.8-1.3-.4.1-1.4 0-1.6.8zm-31.3 35.9c.8 5 .2 9.9.2 14.9 0 1.9 1.1 3.4 3 3.9.9.2 1.8.4 1.8 1.6 0 1.2-1.2 1-1.8 1.5-2.2 1.7-4.8.4-7.1 1-1.3.3-2.9-1.3-2.9-2.7 0-1.3 1.1-2.4 2.6-2.5 2.1-.2 2.4-.6 2-3-.1-.4 0-.8.1-1.2.3-1.4.3-2.8.1-4.2-.6-3.4-.6-6.8 0-10.3.3-1.7-.6-3.3-1-4.9-.3-1.2-.6-2.5-.7-3.7-.1-1 .2-2.1 1.2-2.4 1-.3 2.2-.4 2.9.8l5.1 8.4c.3.5.9 1.2.3 1.8-.7.7-1.2-.1-1.7-.6-.2-.2-.4-.4-.7-.5-.8-.3-1.2-1.9-2.3-1-1.1.7-1.4 1.9-1.1 3.1zm-1.4 18.5c-.4 0-.8-.1-1 .4-.1.3 0 .5.3.6 1.2.3 2.3 1.1 3.4 1.7.1.1.4-.1.6-.2 0-.2 0-.4-.1-.5-1-.9-1.6-2.2-3.2-2zm17.8 3.7h1.2c1.3 0 2.2-.7 2.5-2.1.2-1.6-.9-1.7-2-1.8-.7-.1-1.3-.6-1.1-1.3.5-2.2-.2-4.3-.2-6.5.2-5.2-.4-10.3-.4-15.5 0-1.8.5-2.8 1.7-3.5 1.1-.6 1.9-1.3 1.7-2.6-.2-1.3-1.3-1.4-2.4-1.7-2.8-.7-5.8.9-8.4-1.1-.1-.1-.3 0-.5 0-.4 0-.8.1-1 .5-.2.5 0 1 .4 1.3 1 .7 2 1.6 3.4 1.1 1.1-.4 2.3-.6 3.5-.7.7-.1 1.4.1 1.8.8.3.5 0 1-.3 1.3-.5.6-1.1.9-1.8.6-.5-.2-1-.6-1.5-.9-.7-.3-1.5-.7-2.3-.3-.1.1-.2.4-.2.6.3 1 1.1 1.3 1.9 1.3 1.6.1 1.9 1.1 1.9 2.4-.1 2.6.3 5.1.2 7.6-.1 2.9.9 5.7.5 8.5-.3 2.1-.6 4.2.2 6.3.2.4.2.8-.2 1.1-.4.2-.8.2-1.1-.1-.5-.3-.6-.8-.7-1.4-.3-1.6-1.1-3.1-2.3-4.1-.3-.3-.8-.6-1.3-.3-.4.3-.6.9-.4 1.3 1.1 2.1 1.8 4.5 3.3 6.3.5.5 2 .1 1.1 1.7-.2.3.4.7.8.7.7.4 1.4.5 2 .5zm-9.7-51.6c-.4-3.9-.3-7.9.1-11.8.1-.9.3-1.9-.9-2.1-.4-.1-.5-.7-.3-.9 1.6-1 .6-2.5.6-3.8l-.3-12.4c0-.6.2-1.4-.6-1.5-.7-.1-1.3.1-1.9.6-.6.6-.2 1.1 0 1.6.2.7.7 1.3.5 2.1-.5 3.2.3 6.4-.1 9.6-.5 4.4.7 8.8.3 13.2-.2 1.9-.3 4-.2 5.8.1 4 .5 8.1.7 12.2.1 1.3.9 1.4 1.8 1.3 1-.1 1.1-.8.9-1.7-.3-1.2-.8-2.3-.3-3.8-.6-2.6 0-5.5-.3-8.4zm102.5-118.1c.1-3.5-1.1-6.7-1.7-10-.3-1.5-1.1-2.9-1.3-4.5-.4-4.1-2.3-7.7-3.8-11.4-.3-.8-.9-1.1-1.6-1.1-1.8.1-2.5-1-3.1-2.6-.4-1-.8-2-1.3-3-.3-.7-1-.8-1.6-.5-.8.4-.4 1-.1 1.5.4.7 1 1.3 1.2 2 .6 2.6 2.3 3.8 4.5 4.4.6.2 1.1.5 1.2 1.2.4 3.4 2.9 6.2 2.7 9.9 0 .5.2 1.2.5 1.5 1 1.1 1.1 2.5 1.2 3.9.1.7.1 1.5.5 2.1.7.9.8 2 .8 3.1 0 2 .2 3.9 1.1 5.6.4.8.5 1.6.3 2.5-.5 1.6-.1 3.3.1 4.9.1.6.3 1.3 1 1.2.7-.1.8-.8.8-1.4.1-1.2-.6-2.3-.2-3.6.1-1.9-1.3-3.6-1.2-5.7zM111.3 488.5c.2-.7-.4-1-.8-1.2-2.8-1.7-5.4-3.8-8.1-5.6-5-3.5-9.1-8.2-13.6-12.2-1.3-1.1-2.4-2.6-3.7-3.7-.6-.5-1.5-.7-2 0-.5.6.4 1 .7 1.4 3 4.2 7.2 6.9 10.7 10.4 1.8 1.8 3.7 3.4 5.8 4.7 2.8 1.7 4.7 4.5 7.7 6 .7.4 1.3.9 2 .9.6 0 1.2 0 1.3-.7zm23.4-20.7c-1.2-1-2.5-1.5-3.9-.8-.8.4-1.4.4-2.1-.1-1.3-.9-2.5-1.9-3.7-2.9-2.8-2.2-5.6-4.4-8.7-5.9-.2-.1-.5-.4-.7-.1-.2.3 0 .5.2.8.9 1.7 2.2 3 3.8 4.1 1.8 1.2 4 2.1 5.3 4 1.2 1.9 3.1 3 4.2 5 .2.4.8.6 1.3.8.3.2.7.2.9-.1.3-.4.1-.7-.2-1-.3-.4-1-.7-.5-1.3.5-.5 1-.2 1.5.2 2 1.5 2.9 1 3-1.4.1-.5.1-.9-.4-1.3zm67.8 30.8c-.2-.8-.7-1.3-1.4-1.5-.8-.2-.8.6-1.1 1.1-1 1.2-1.6 2.3-.6 3.9.2.3.1.9 0 1.4-.1 1.6-.2 3.1-.2 4.7 0 .8 0 1.8.9 2.2.8.4 1.6.3 2.4-.2 1.5-.8 1.2-2.3 1.2-3.6.1-2.8-.5-5.4-1.2-8zm-71.6-38.9c-2.8-.3-4.6-2.6-6.9-4-2.1-1.2-3.9-2.9-6.5-3-.9 0-1.7 0-2.1 1-.1.3-.5.8-.2 1 .7.6 1.5.4 2.3.1.7-.2 1.3-.5 1.9 0 1.6 1.5 3.4 2.7 5.2 4 2 1.5 4 2.4 6.4 2.8.8.2 1-.1 1-.7-.1-.8-.2-1.1-1.1-1.2zm100.7-37.9c-.6-.1-1 .1-1.3.6-.4.8-.6 1.7-1 2.5-.2.6-.5 1.2-1.2 1.2-1.9-.1-3.9.6-5.7-.5-.6-.4-1.4-.9-2 0-.5.9.1 1.6.6 2.3.4.7 1.1.8 1.8 1 1.3.3 2.6.1 3.9.7.3.1.9.1.7-.4-.4-1.8 1-1.7 1.8-2 1.7-.8 3-2.6 3-4.3 0-.6-.2-1-.6-1.1zm-114.1 56.7c.7 0 1.6-.2 1.3-1.2-.2-.9-1.1-.8-1.7-.4-1 .7-1.7.2-2.5-.4-2.6-1.9-5.3-3.7-7.9-5.6-.6-.5-1.4-.7-1.8-.1-.4.6.2 1.2.7 1.7 1.8 1.5 3.5 3.1 5.5 4.3 1.4.9 2.7 2.2 4.6 1.9.5.3 1.2-.1 1.8-.2zm-8.3-16.5c-.6.1-1.2.4-1.1 1.1.1.8.9.9 1.5.7.4-.1.9-.3 1.3-.5s.8-.3 1.1.1c1.1 1.4 2.9 1.8 4.2 3.1 1.1 1.1 2.2 2.4 3.9 2.5.4 0 1 .1 1.2-.4.2-.5-.2-.8-.5-1.1-1.4-1.5-3.2-2.5-4.8-3.7-1.6-1.1-3.3-2.1-5.9-1.8 0-.1-.5-.1-.9 0zm29.4-5.4c-.3.5.4.6.6.9.8.8.1.8-.4.9-2.4.6-2.5 1.1-1.1 3.2.2.3.4.7.6 1.1.3.6.6 1.3 1.4.8.7-.4 1.1-1.3.6-2-1.1-1.6-.3-1.7.9-1.7.6 0 1.1-.1 1.6-.5.5-.3.6-.9.2-1.2-1-.7-1.8-1.9-3-1.8-.6.1-1.1-.2-1.4.3zm83.8-42.4c-.5-.2-1.1-.1-1.3.5-.5 1.3-1.1.8-1.8.2-.4-.4-.9-.8-1.4-1.1-.9-.4-1.9-1.1-2.8 0-.5.6.5 2.4 1.6 2.9.5.2 1 .3 1.5.3 1.1.2 2.1.2 3.2.6 1.4.5 1.8.2 1.8-1.5-.2-.6.1-1.6-.8-1.9zm2.8 6.4c-.8-.4-.8.7-1.3 1.1-.6.6-1 .2-1.4-.3-.9-1.2-2.3-1.6-3.7-2.1-.5-.2-1.2-.1-1.5.5-.4.6.1 1.1.4 1.6.5.7 1.2 1 2 1.2 1.4.3 2.7.5 4 1.3 1.3.8 1.8.4 1.7-1.4 0-.6.5-1.5-.2-1.9zm3.4 16c.8 0 1.5-.4 1.7-1.2.1-.4.5-1 .1-1.4-.6-.5-1.2.1-1.7.4-.7.3-1.7.5-1.8-.6-.2-1.7-1.3-1.6-2.3-1.7-1-.2-1.5.2-1.2 1.4.5 2.1 1.4 2.8 4.3 2.9.1.1.5.2.9.2zm-106.9 34.1c-.2.7.5.9.9 1.1 1.7.7 2.9 2.1 3.8 3.7.2.4.5.8 1 .9.7.2 1.2 0 1.6-.7.3-.4.4-.8-.1-1.3-1.3-1.2-2.6-2.5-4-3.7-.5-.5-1.2-.6-1.9-.7-.4.2-1.1.2-1.3.7zm82 7.8c-.4-.3-.7.1-1 .3-.6.6-.7 1.1-.2 1.9.5.8.3 1.6-.3 2.3-.2.3-.5.6-.6.9-.3.9.3 1.5.7 2.1.2.3.5.5.9.4.7-.3.4-1.1.5-1.6.2-1.5.3-3 .5-4.7 0-.4 0-1.1-.5-1.6zm-57.6-23.1c.3-1.1-.8-1-1.3-1.3-1-.6-2.1-1.2-3.2-1.7-.3-.2-.7-.5-1.1-.1-.4.4-.1.8 0 1.2.2 1.1 2.4 2.7 3.7 2.8.8-.1 1.7 0 1.9-.9zm3.1-3c-.4-1.1-1.1-2.1-2-2.8-.5-.4-1.1-.3-1.6.1-.4.3-.6 1-.3 1.3.9.7 1.3 1.6 1.5 2.7.1.5.6.5 1 .5 1-.1 1.8-.8 1.4-1.8zm78.9-33.2c1.4.1 1.5-1.5 1.6-2.7.1-1-.2-2-1.4-2-1 0-1.3.8-1.3 1.9.4.8-.4 2.7 1.1 2.8zM133 463.7c.5 1.2 1.8 2 3.1 2.3.5.1 1 .1 1.3-.6.3-.7.1-1.1-.4-1.6-.8-.8-1.7-1.1-2.9-1.1-.3.4-1.7-.4-1.1 1zm223.2-94.4c-.8-.1-.8.9-1 1.5-.3 1.4-.4 2.8-.6 4.3 0 .5-.3 1.4.2 1.4.7.1 1.2-.6 1.4-1.4.2-1.4.3-2.7.5-4.2-.1-.5.3-1.5-.5-1.6zM253.8 502.1c-.9-.1-1.2.6-1.1 1.4.1 1 .4 1.9 1.7 1.9.9-.1 1.2-.6 1.1-1.5 0-1.1-.6-1.7-1.7-1.8zm-90.7-66.5c-.1.8 1.8 2.7 2.7 2.9.6.1.9-.2.9-.8.2-1.1-1.1-2.3-3.1-2.5.1 0-.4-.2-.5.4zM115 488.4c.7 0 1.4-.1 1.3-1-.2-1-.7-1.9-1.8-1.8-.6 0-1.5-.1-1.5 1 .2 1.3.9 1.8 2 1.8zm5.2.9c0 1.4 1.1 1.1 1.9 1.2.9.1 1.4-.4 1.4-1.3.1-1.3-.9-1.1-1.5-1.2-1 0-1.8.1-1.8 1.3zm56.3-60.4c.2-.9-1.2-2.9-2-2.8-.5.1-1.2.1-1.4.8-.1.4 2 2.6 2.5 2.6.4 0 .8-.2.9-.6zm-18.4 13.2c-.4-.1-1.2.2-1 .9.2 1.1.7 2.1 1.9 2.3.8.1 1.2-.3 1.3-1.3-.4-1.1-1.3-1.6-2.2-1.9zm5.4-1.6c.1-.6-1.7-2.2-2.4-2.2s-.9.5-.9 1.1c.1 1.3.9 1.8 2.1 2 .5-.1 1.1-.1 1.2-.9zm-41.9 43c-.1.8 1.1 2.1 2 2.1.6 0 1.4-.1 1.3-1-.1-1.5-1.4-1.3-2.2-1.6-.5 0-1.1-.3-1.1.5zm48.3-48.9c-.2-1.1-1.2-1.9-2.2-2.3-.5-.2-1 .2-.8 1 .3 1 .2 2.3 1.8 2.1.5-.1 1.4-.1 1.2-.8zm-52.1 59.7c0 .8.4 1.1 1.1 1 .8-.1 1.6-.3 1.6-1.4 0-.9-.7-.7-1.1-.8-1 0-1.7 0-1.6 1.2zm90.8-83.2c0-1-.9-1.2-1.6-1.3-.5-.1-1.1 0-1.1.7.1.9.6 1.4 1.2 1.4.8.1 1.5 0 1.5-.8zm144.6-25.2c0 .4-.2 1 .4 1 .4 0 .7-.6.6-1-.4-1 0-1.5.6-2.2.3-.4.1-.8-.3-1.1-.5-.3-.7 0-.9.4-.4.7-.3 1.4-.3 2.4-.1 0-.1.2-.1.5zm2.1-7.4c-.7.5-1.4 1.2-1.8 1.9-.3.5.3.8.8.8 1.1 0 1.2-.9 1.3-1.7 0-.4 0-1.2-.3-1zm-136.4 32.9c-.1.6.4.8.9.8s.9-.1.9-.7-.3-.9-.9-.9c-.4.1-.8.3-.9.8zm-15.3.6c-.5.1-1.2 0-1.2.7 0 .6.6.6 1 .7.5 0 .9 0 1-.8 0-.5-.3-.7-.8-.6zm-5.6 64.8c-.3-.1-.4.3-.4.6 0 .7.4 1.3 1.1 1.4.3.1.3-.2.3-.6-.3-.4-.3-1.2-1-1.4zm35.6-46.6c.5 0 .6-.5.6-.9 0-.5-.1-.9-.6-.9s-.6.5-.6.9c.1.5.1.9.6.9zm-104.7 34.4c.2.5.8.6 1.3.7.2.1.5-.1.5-.4-.1-.8-.7-.7-1.2-.7-.3.1-.8.1-.6.4zm96-52.3c0 .3.1.6.5.6.3 0 .4-.2.4-.5s-.2-.6-.5-.6c-.2 0-.3.3-.4.5zm-40.5 54.2c-.1 0-.2.1-.3.1 0 .1.1.2.1.3.1 0 .2-.1.3-.1 0-.1 0-.3-.1-.3zm2.9-215.6c.2-2.2-.6-4.3-.2-6.5.1-.6-.4-1.4-.5-2.1-.1-.6-1-1.1-.2-1.7.6-.5 1.6-.5 2.1.1 1.3 1.6 3.3 2.7 3.3 5.2 0 1.3.6 2 1.8 2.5 1.9.8 3.7 1.8 5.9 1.7 2.4-.1 4-1.5 5.2-3.6.7-1.2.4-2.4-.4-3.4-1.5-1.6-3.1-2.9-5.2-3.6-2.8-1-5.5-2.5-7.9-4.6-2.6-2.3-3-7.3-.8-9.9 1-1.2 1.7-2.7 3-3.7 2.6-1.9 5.3-1.5 8.1-.6 1.1.4 2 .5 2.6-.8.2-.5.7-.9 1.3-.8.6.1.8.8.8 1.3 0 2.1.4 4.2.7 6.3.1.6 0 1.2-.7 1.4-.7.2-1.4.2-1.8-.5-.8-1.3-1.9-2.4-3-3.5-1.2-1.3-2.8-1.7-4.4-1.8-2.3-.2-5.1 3.4-4.2 5.6.8 1.7 2.3 3.3 4.1 3.8 2.6.8 4.8 2.4 7.3 3.5 2.7 1.1 4.2 4.1 5.2 7 .6 1.6.2 3.3-1.2 4.7-1.7 1.6-2.6 4.1-5 5.1-2.6 1.1-5 1.1-7.4 0-1.2-.5-2.3-1-3.6-.8-.9.1-1.6.3-1.6 1.6 0 1.1-.4 2.1-1.7 2-1.4-.1-1.4-1.2-1.4-2.2-.3-.6-.2-1.1-.2-1.7zm5.9-19.2c-.4-.7-1-1-1.8-.9-.4 0-.9.3-.7.8.3.8 1.2.9 1.9.9.4 0 .7-.3.6-.8zm3.9 25.2c0-1-.7-1.3-1.5-1.4-.6 0-1.1.3-1 .9.2 2.1-.7 4.2-.2 6.3.5 2.2.3 4.3.3 6.5 0 2.7-.1 5.4 0 8.1.2 5 .6 10 .4 15.1-.3 5.9 1.4 11.8 0 17.8-.1.2 0 .5 0 .7.1 1.2.9 1.5 1.8 1.5 1 0 1.5-.6 1.4-1.6-.1-.8-.3-1.7-.3-2.5.4-5.4-.2-10.7-.3-16 0-2.5-.1-5 0-7.5.1-3.3-.5-6.7-.3-10 .2-4.7-.9-9.3-.2-14-.1-1.2-.1-2.6-.1-3.9zm59.8 18.2c1.3 1 3.5.6 4-1 .6-1.7 1.3-2.5 3.1-1.8.3.1.7 0 .9-.4.2-.4 0-.7-.3-.9-2.5-1.6-3.4-4.7-5.8-6.6-3.8-3.1-7.2-6.7-11-9.7-.9-.7-2.1-1.5-2.8-.4-.8 1.3.6 2.1 1.5 2.6 5.2 2.7 8.9 7.4 13.2 11.3 1 .9.8 1.7-.5 2.3-.9.4-1.7.1-2.3-.6-3-4.1-7.5-6.5-10.9-10.1-.3-.3-.8-.5-1.2-.7-.5-.2-1-.4-1.4.1-.4.5-.4 1.1-.2 1.7.2.7.7 1.1 1.3 1.4 4.6 1.9 7.6 6 11.4 9.1.7.5 1 1.1.7 2-.2.7-.3 1.3.3 1.7zm-15.9-9.7c-.3.6.1.9.4 1.2.7.6 1.2 1.4 2.1 1.9 3.8 2.3 6.7 5.8 9.8 9 .6.7.8 1.8 1.7 2.2.6.3 1.1.3 1.6-.2.5-.6.2-1.1-.2-1.6-.7-.9-1.4-1.7-2.1-2.6-3.1-3.9-7.3-6.3-10.5-10.1-.4-.4-.8-.6-1.4-.7-.7.2-1.1.4-1.4.9zm-4.8 5c-.2.5.1.9.4 1.3.4.3.7.7 1.1.9 4.5 2 8 5.6 11.3 9.3.4.5.9 1 1.4 1.3.6.3 1.4.5 1.9-.2s-.2-1.1-.6-1.6c-3.3-4.2-7.5-7.1-11.6-10.3-.8-.6-1.7-1.3-2.7-1.2-.5-.1-1 0-1.2.5zM44.4 374.6c-.1.2 0 .5.3.5.2 0 .4-.2.4-.4.1-.2-.1-.4-.4-.6-.1.2-.3.3-.3.5zm147.6-8c-4.4.3-8.3-1.4-11.8-4.4-.8-.8-1.5-1.6-2-2.7-1.1-2.7-2.3-5.4-3.5-8.1-.1-.2-.1-.4-.1-.5.3-3.8.1-7.6 1.5-11.3 1-2.6 3.1-4.1 5-5.8 3.7-3.3 7.9-4.7 12.7-3.6 4.5 1 8.4 3.2 11.4 7.1.6.7.9 1.7 1.3 2.6 1.7 4.3 2.9 8.8 1.4 13.4-1.7 5.3-3.9 10.1-9.4 12.1-2.2.6-4.2 1.5-6.5 1.2zm-1.1-1.7c2.5-.1 5.1.1 7.3-1.2 4.4-2.6 7.2-6.5 7.5-12 .2-3 .1-6.4-1.4-8.9-2.1-3.5-5-6.5-9.4-6.8-2-.2-4.1-.9-6 .2-1.6.9-3.2 1.8-4.8 2.9-3.7 2.4-5.6 6-5.3 10.6.3 4.5 1.6 8.3 4.7 11.8 2.2 2.4 4.3 3.6 7.4 3.4zm-6-30.4c1.4-.1 2.5-1 3.7-1.7.2-.1.4-.5.2-.8-.2-.3-.5-.4-.7-.3-1.2.4-2.5.9-3.7 1.3-.4.2-.6.5-.5 1 .1.6.6.5 1 .5zm-26.7-69.3c-1-2.4-2.4-4.5-2.9-7.1-.2-1-.9-1.9-2-1.9-.5 0-1.3.4-.7.9 1.2 1.2 1.3 2.9 2 4.3.9 1.8 2.2 3.4 2.4 5.6 0 .6 0 1.2.7 1.1.8 0 1-.6 1-1.4-.1-.5-.3-1-.5-1.5zm194.2 38.4c-1.2-2.4-1.8-5.1-2.2-7.8-.1-.6-.5-1.3-1.1-1.1-.7.2-.7 1-.4 1.5.9 1.7 1 3.6 1.4 5.5.7 3.3 1.8 6.6 2.2 10 .1.9.3 1.9 1.3 1.8 1-.1.7-1.2.8-2.2-.7-2.4-.7-5.1-2-7.7zm1.8 21.6c.3.9 1 .7 1.6.5.7-.2.6-.9.3-1.3-.6-.8-.3-1.7-.4-2.6-.2-.9 0-2.3-1.1-2.3-1.3 0-1 1.5-1.2 2.4 0 1.1.4 2.2.8 3.3zm2.2 2.7c-.3-.5-.9-.9-1.4-.2-.5.8.1 5.2.9 5.8.3.2.3 1 .8.6.4-.3.2-.8.1-1.2-.3-1.2-.8-2.4-.2-3.6 0-.5.1-1.1-.2-1.4zm-1.1-11.8c0-1-.7-.9-1.3-.9-.8 0-1.6.3-1.6 1.2 0 .8.8 1 1.6.9.8 0 1.3-.3 1.3-1.2zm-211.7 66.7c-.9-1.6-2.3-2.9-2.8-4.8-.1-.6-.9-.3-1.4-.2-.4.1-.6.5-.4.8 1 1.7 1.6 3.7 3 5.2.3.3.7.4 1.1.2.3-.2.5-.5.5-.9.1 0 .1-.2 0-.3zm33-57c.6.9 3.4.6 3.8-.4.4-1 0-1.7-1-1.9-.3-.1-.7.1-1 .1-1 .2-2 .6-1.9-1.2 0-.5-.3-1.1-.8-.9-.6.2-.4.9-.5 1.4.1.7.6 1.8 1.4 2.9zm-8.6-19.9c-.2 0-.4.2-.3.3.7.7.5 2.1 1.6 2.3.4.1.9.1 1-.5.1-.8-1.5-2.1-2.3-2.1zm22.4 57.5c-1.9.1-3.5-.6-4.7-2.5-1.4-2.2-3.6-3.8-4.1-6.7-.9-4.6-1.3-8.8 3.1-12.3 1.6-1.3 2.9-3.1 4.9-3.7 4-1.2 8.4.7 11.3 4.6 1.4 1.9 3 3.6 2.1 6.3-.6 1.8-.9 3.6-1.8 5.3-.4.8-.6 1.7-.6 2.6-.2 2.8-1.9 4.2-4.1 5-2 .6-3.9 1.5-6.1 1.4zm-.9-6.7c4-.1 7.9-3.8 8.4-8 .1-.6.1-1.2-.4-1.5-1.1-.9-1.3-2.2-1.3-3.6-.1-1.1-.5-1.8-1.5-2.1-2.8-1-5.4-.2-7.9 1.1-2.9 1.5-4.7 5.5-4.2 8.9.2 1.4.7 2.7 1.2 4 .5 1.1 1.6.1 2.3.4.3.1.6.3 1 .4.8.2 1.6.3 2.4.4zm1.9 3.8c1.4 0 2.8.1 4.1-.8.3-.2.6-.5.5-.9-.1-.5-.5-.4-.9-.3-1.9.2-3.8.6-5.8.5-.5 0-1 .1-1 .7s.5.8.9.8c.8.1 1.5 0 2.2 0z"
                        }
                    })])
                }), [], !1, null, null, null);
            h.default = component.exports
        },
        33: function(c, h, v) {
            "use strict";
            v.d(h, "a", (function() {
                return o
            }));
            var m = v(5),
                e = v(6),
                t = (v(287), v(62), v(21), v(51), v(2)),
                z = v(100),
                r = v(169),
                n = v(99),
                o = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            this.root = document.querySelector(":root"), this.app = c, this.$bg_trans = document.querySelector(".box-molded"), this.$text = document.querySelector(".text-trans span"), this.$wipe_soft = document.querySelector(".wipe-soft"), this.$fader_trans = document.querySelector(".fader-trans"), this.$canvas = document.querySelector("canvas#webgl"), this.containerTransition = new PIXI.Container, this.containerTransition.sortableChildren = !0, this.containerTransition.zIndex = -1, this.holdSize = new PIXI.Graphics, this.createHoldSize(), this.app.app.stage.addChild(this.containerTransition), this.containerTransition.filters = [this.app.shockFilter], this.pixi_text = new PIXI.Text("VICTOR WORK", this.app.style), this.pixi_text.style.fill = ["#ffffff"], this.pixi_text.zIndex = 1, this.wipe_dark = new PIXI.Graphics, this.wipe_color = new PIXI.Graphics, this.containerTransition.addChild(this.wipe_dark), this.containerTransition.addChild(this.wipe_color), this.anima_filter = {
                                n: .22 * this.app.sizes.width
                            }, this.setters(), this.createText(), this.containerTransition.addChild(this.pixi_text), this.animating = !1, window.vw_gl_transition = this
                        }
                    }, {
                        key: "setters",
                        value: function() {
                            this.compStyles = window.getComputedStyle(this.$bg_trans), this.borderRadius = parseInt(this.compStyles.getPropertyValue("border-top-right-radius")), t.a.set(this.$wipe_soft, {
                                yPercent: 100,
                                transformOrigin: "bottom left"
                            }), this.compStylesRoot = window.getComputedStyle(this.root), this.createWipeDark(), this.createWipeColor()
                        }
                    }, {
                        key: "changeName",
                        value: function(c) {
                            this.$text.innerHTML = "index" == c ? "HOME" : "project-uid" == c ? "PROJECT" : "story-uid" == c ? "STORY" : "course-uid" == c ? "COURSE" : "form" == c ? "LET'S START" : "".concat(c)
                        }
                    }, {
                        key: "createText",
                        value: function() {
                            this.txt_bounds = this.$text.getBoundingClientRect(), this.txtStyles = window.getComputedStyle(this.$text), this.pixi_text.text = "".concat(this.$text.innerHTML.toUpperCase()), this.pixi_text.alpha = 0, this.pixi_text.style.fontSize = parseInt(this.txtStyles.getPropertyValue("font-size")), this.pixi_text.style.letterSpacing = 1e-4 * this.app.sizes.width, this.pixi_text.position.x = this.txt_bounds.left, this.pixi_text.position.y = this.txt_bounds.top, this.txtOffscreen = 2 * this.txt_bounds.top + (this.pixi_text.height - 10), t.a.set(this.pixi_text.position, {
                                y: this.txtOffscreen - .16 * this.app.sizes.width
                            }), t.a.set(this.$fader_trans, {
                                opacity: 0
                            })
                        }
                    }, {
                        key: "resetTransition",
                        value: function() {
                            t.a.set([this.$canvas, this.$wipe_soft, this.$fader_trans], {
                                zIndex: -1,
                                opacity: 0
                            }), this.wipe_dark.alpha = 0, this.wipe_color.alpha = 0, this.pixi_text.alpha = 0, t.a.set(this.$fader_trans, {
                                opacity: 0
                            }), t.a.set([this.wipe_dark.position, this.wipe_color.position], {
                                y: this.offScreen - .081 * this.app.sizes.width
                            }), t.a.set(this.pixi_text.position, {
                                y: this.txtOffscreen - .16 * this.app.sizes.width
                            }), t.a.set(this.$wipe_soft, {
                                yPercent: 100,
                                transformOrigin: "bottom left"
                            })
                        }
                    }, {
                        key: "revealNextPage",
                        value: function(c) {
                            t.a.set(this.$old, {
                                opacity: 0
                            }), t.a.set([this.$canvas, this.$fader_trans], {
                                zIndex: -2
                            });
                            var h = c.querySelectorAll(".headers .wrapped");
                            c.classList.contains("has-header") && this.app.sizes.width > 1024 ? (t.a.to(h, {
                                delay: .6 * this.time,
                                yPercent: 0,
                                duration: this.time,
                                ease: "expo.out",
                                stagger: .08
                            }), "about" == this.isPage && t.a.to(c.querySelectorAll("main"), {
                                delay: .6 * this.time,
                                opacity: 1,
                                duration: 1
                            })) : t.a.to(c, {
                                delay: .85 * this.time,
                                duration: this.time / 2,
                                opacity: 1
                            }), t.a.set(this.$wipe_soft, {
                                zIndex: 0
                            })
                        }
                    }, {
                        key: "animaTransition",
                        value: function(c, h, v) {
                            var m = this;
                            this.animating = !0, this.time = 2.375, t.a.timeline({
                                onComplete: function() {
                                    m.resetTransition(), h(), "first_entrance" != v && m.done(c, v), document.querySelector(".trg-menu").dispatchEvent(new Event("mouseenter")), document.querySelector(".trg-menu").dispatchEvent(new Event("mouseleave"))
                                }
                            }).fromTo(this.$fader_trans, {
                                opacity: 0
                            }, {
                                duration: this.time / 2,
                                opacity: 1,
                                ease: "none"
                            }).fromTo(this.wipe_dark.position, {
                                y: this.offScreen - .081 * this.app.sizes.width
                            }, {
                                duration: this.time,
                                y: 0,
                                ease: "expo.inOut"
                            }, 0).fromTo(this.wipe_color.position, {
                                y: this.offScreen - .081 * this.app.sizes.width
                            }, {
                                duration: this.time,
                                y: 0,
                                ease: "expo.inOut"
                            }, .05 * this.time).fromTo(this.pixi_text.position, {
                                y: this.txtOffscreen - .16 * this.app.sizes.width
                            }, {
                                duration: this.time,
                                y: this.txt_bounds.top,
                                ease: "expo.out"
                            }, .5 * this.time).fromTo(this.$wipe_soft, {
                                yPercent: 100,
                                transformOrigin: "bottom left"
                            }, {
                                duration: 1.2 * this.time,
                                yPercent: 0,
                                ease: "expo.inOut",
                                onStart: function() {
                                    return m.revealNextPage(c)
                                }
                            }, .625 * this.time).fromTo(this.anima_filter, {
                                n: .22 * this.app.sizes.width
                            }, {
                                duration: 1.5 * this.time,
                                n: 0,
                                ease: "expo.inOut",
                                onUpdate: function() {
                                    m.app.shockFilter.amplitude = m.anima_filter.n
                                }
                            }, 0).add((function() {
                                m.wipe_dark.alpha = 1, m.wipe_color.alpha = 1, m.pixi_text.alpha = 1, t.a.set([m.$canvas, m.$wipe_soft], {
                                    zIndex: 2,
                                    opacity: 1
                                }), t.a.set(m.$fader_trans, {
                                    zIndex: 2
                                })
                            }), .01)
                        }
                    }, {
                        key: "createWipeDark",
                        value: function() {
                            this.darkColor = "0x".concat(this.compStylesRoot.getPropertyValue("--dark").split("#").join("")), this.darkColor = this.darkColor.split(" ").join(""), this.bounds = this.$bg_trans.getBoundingClientRect(), this.wipe_dark.clear(), this.wipe_dark.beginFill(this.darkColor, 1), this.wipe_dark.drawRoundedRect(this.bounds.left, this.bounds.top, this.bounds.width, this.bounds.height, this.borderRadius), this.wipe_dark.endFill(), this.wipe_dark.alpha = 0, this.wipe_dark.zIndex = 0, this.offScreen = this.app.sizes.height - this.bounds.top, t.a.set(this.wipe_dark.position, {
                                y: this.offScreen - .081 * this.app.sizes.width
                            })
                        }
                    }, {
                        key: "createWipeColor",
                        value: function() {
                            this.mainColor = "0x".concat(this.compStylesRoot.getPropertyValue("--color").split("#").join("")), this.mainColor = this.mainColor.split(" ").join(""), this.bounds = this.$bg_trans.getBoundingClientRect(), this.wipe_color.clear(), this.wipe_color.beginFill(this.mainColor, 1), this.wipe_color.drawRoundedRect(this.bounds.left, this.bounds.top, this.bounds.width, this.bounds.height, this.borderRadius), this.wipe_color.endFill(), this.wipe_color.alpha = 0, this.wipe_color.zIndex = 0, this.offScreen = this.app.sizes.height - this.bounds.top, t.a.set(this.wipe_color.position, {
                                y: this.offScreen - .081 * this.app.sizes.width
                            })
                        }
                    }, {
                        key: "animaBox",
                        value: function(c, h, v, m) {
                            this.isPage = v, this.$old = m, this.anima_filter.n = .22 * this.app.sizes.width, this.app.shockFilter.amplitude = .22 * this.app.sizes.width, this.animaTransition(c, h, v)
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.animating || (this.setters(), this.createHoldSize(), this.createText())
                        }
                    }, {
                        key: "createHoldSize",
                        value: function() {
                            this.holdSize.clear(), this.holdSize.drawRoundedRect(0, 0, window.innerWidth, window.innerHeight, 0), this.holdSize.endFill(), this.containerTransition.addChild(this.holdSize)
                        }
                    }, {
                        key: "done",
                        value: function(c, h) {
                            z.a.init(h, !1, c), n.a.init(c), r.a.init(c), this.animating = !1
                        }
                    }]), c
                }())
        },
        35: function(c, h, v) {
            "use strict";
            v.d(h, "a", (function() {
                return z
            }));
            var m = v(5),
                e = v(6),
                t = (v(276), v(11), v(2)),
                z = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            this.body = document.querySelector("body");
                            var h = document;
                            this.qsa = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                                return c.querySelectorAll(s)
                            }, this.qs = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                                return c.querySelector(s)
                            }, this.arrPls = c, this.timeline_dash_cta = null, this.timeline_footer_cta = null, this.getMood(), document.querySelectorAll(".dash__music .js-pl")[this.selected_music].style.opacity = 1, document.querySelectorAll(".dash__music .js-pl")[this.selected_music].style.pointerEvents = "auto"
                        }
                    }, {
                        key: "getMood",
                        value: function() {
                            if (this.selected_music = 0, "neutral" == localStorage.getItem("mood") || "relaxed" == localStorage.getItem("mood") || "happy" == localStorage.getItem("mood") || "excited" == localStorage.getItem("mood") || "amused" == localStorage.getItem("mood")) {
                                var c = document.querySelectorAll(".footer__pl.js-pl"),
                                    h = document.querySelector(".music-".concat(localStorage.getItem("mood"))).closest("li"),
                                    v = [].indexOf.call(c, h);
                                this.selected_music = v
                            } else "skipped" == localStorage.getItem("version") && (this.selected_music = Math.floor(Math.random() * this.arrPls.length))
                        }
                    }, {
                        key: "onDashMusic",
                        value: function(c, h) {
                            c.querySelectorAll(".js-pl")[this.selected_music].classList.add("pl-active"), c.querySelector(".js-music__svg").href = h[this.selected_music].link
                        }
                    }, {
                        key: "onDashHealth",
                        value: function(c) {
                            var h = new Date("02/01/2018"),
                                v = ((new Date).getTime() - h.getTime()) / 864e5;
                            ({
                                days: c.querySelector(".js-days")
                            }).days.textContent = parseInt(v)
                        }
                    }, {
                        key: "onDashAvail",
                        value: function(c) {
                            var h, v = new Date,
                                m = v.getFullYear(),
                                e = {
                                    month: c.querySelector(".js-month"),
                                    year: c.querySelector(".js-year")
                                };
                            h = 11 == v.getMonth() ? "January" : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][v.getMonth() + 1], e.month.textContent = "Middle of ".concat(h), e.year.textContent = "/ ".concat(m)
                        }
                    }, {
                        key: "onDashCta",
                        value: function(c, h) {
                            var v = {
                                    each: c.querySelectorAll(".js-dash-cta__each"),
                                    dot: c.querySelectorAll(".js-dash-cta__dot"),
                                    travel: c.querySelector("ul.js-dash-cta__list"),
                                    duration: 1.2
                                },
                                m = t.a.timeline({
                                    repeat: -1,
                                    repeatDelay: 1
                                });
                            v.each.forEach((function(c, h) {
                                m.to(v.travel, {
                                    delay: 1,
                                    duration: v.duration,
                                    xPercent: "-".concat(100 * h),
                                    ease: "expo.inOut",
                                    onStart: function() {
                                        v.dot.forEach((function(c) {
                                            return c.classList.remove("dash-active")
                                        })), t.a.delayedCall(.35, (function() {
                                            return v.dot[h].classList.add("dash-active")
                                        }))
                                    }
                                })
                            })), "dash" == h && (this.timeline_dash_cta = m), "footer" == h && (this.timeline_footer_cta = m)
                        }
                    }]), c
                }())
        },
        36: function(c, h, v) {
            "use strict";
            v.d(h, "a", (function() {
                return z
            }));
            var m = v(5),
                e = v(6),
                t = (v(60), v(11), v(2)),
                z = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function() {
                            this.els = {
                                name_dash: document.querySelector(".menu-fs__close__profile__name"),
                                version: document.querySelector("span.profile__version"),
                                name_intro: document.querySelector("span.dyna-name ") || null
                            }
                        }
                    }, {
                        key: "setName",
                        value: function(c) {
                            this.els.name_intro && (this.els.name_intro.textContent = "".concat(c, ","))
                        }
                    }, {
                        key: "setVersion",
                        value: function(c) {
                            this.els.version && (this.els.version.textContent = "".concat(c))
                        }
                    }, {
                        key: "setMood",
                        value: function(c, h) {
                            this.els.name_dash && c && (this.els.name_dash.textContent = "".concat(c, "'s ").concat(h, " and using:"));
                            var v = document.querySelector(".mood-".concat(h, " button")),
                                m = document.querySelector(":root"),
                                e = (getComputedStyle(m), v.dataset.color1),
                                z = v.dataset.color2,
                                r = v.dataset.bgholder;
                            m.style.setProperty("--dark", e), m.style.setProperty("--soft", z), m.style.setProperty("--bgHolder", r), localStorage.setItem("color_dark", e), localStorage.setItem("color_soft", z), localStorage.setItem("color_bgHolder", r), document.querySelectorAll(".intro__custom__mood .border-hovers") && t.a.set(document.querySelectorAll(".intro__custom__mood .border-hovers"), {
                                stroke: "".concat(e)
                            })
                        }
                    }, {
                        key: "setMusic",
                        value: function(c) {
                            document.querySelectorAll(".dash__music .js-pl")[0].style.opacity = 0, document.querySelectorAll(".dash__music .js-pl")[0].style.pointerEvents = "none", document.querySelectorAll(".footer .js-pl")[0].classList.remove("pl-active"), document.querySelectorAll(".js-music__svg").forEach((function(c) {
                                return c.href = ""
                            }));
                            var h = document.querySelectorAll(".footer__pl.js-pl"),
                                v = document.querySelector(".music-".concat(c)),
                                m = document.querySelector(".music-".concat(c)).closest("li"),
                                e = [].indexOf.call(h, m);
                            document.querySelectorAll(".dash__music .js-pl")[e].style.opacity = 1, document.querySelectorAll(".dash__music .js-pl")[e].style.pointerEvents = "auto", document.querySelectorAll(".footer .js-pl")[e].classList.add("pl-active"), document.querySelectorAll(".js-music__svg").forEach((function(c) {
                                return c.href = v.href
                            }))
                        }
                    }, {
                        key: "setSkipped",
                        value: function() {
                            this.els.name_dash && (this.els.name_dash.textContent = "You're using:"), this.els.version && (this.els.version.textContent = "Default Mode")
                        }
                    }]), c
                }())
        },
        64: function(c, h, v) {
            "use strict";
            var m = {
                    head: function() {
                        return {
                            title: "Not Found | Victor Work"
                        }
                    },
                    props: ["error"],
                    mounted: function() {
                        document.querySelector(".preloader-master").remove()
                    }
                },
                e = v(15),
                component = Object(e.a)(m, (function() {
                    var c = this,
                        h = c.$createElement,
                        v = c._self._c || h;
                    return v("div", {
                        staticClass: "page page-not-found not-found",
                        attrs: {
                            "data-scroll-content": "",
                            "data-page": "not-found"
                        }
                    }, [v("div", {
                        staticClass: "not-found__hold e-flex-col e-wvw e-hvh"
                    }, [v("h1", {
                        staticClass: "t-title"
                    }, [c._v("404")]), v("span", {
                        staticClass: "nothing t-sansbold e-upper"
                    }, [c._v("There's nothing to see here.")]), v("a", {
                        staticClass: "primary-btn",
                        attrs: {
                            href: "/",
                            title: "GO BACK TO HOME"
                        }
                    }, [v("div", {
                        staticClass: "primary-btn__hold"
                    }, [v("span", {
                        staticClass: "primary-btn__text"
                    }, [c._v("GO BACK HOMEPAGE")]), v("div", {
                        staticClass: "primary-btn__circ"
                    }), v("div", {
                        staticClass: "primary-btn__icon"
                    }, [v("div", {
                        staticClass: "primary-btn__icon__hold"
                    }, [v("div", {
                        staticClass: "primary-btn__svg"
                    }, [v("svg", {
                        attrs: {
                            width: "100%",
                            viewBox: "0 0 8 8",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [v("path", {
                        attrs: {
                            d: "M0.578554 0L0.568579 1.46635H5.49626L0 6.96264L1.03741 8L6.53367 2.50379V7.43141L8 7.42145V0H0.578554Z",
                            fill: "white"
                        }
                    })])])])])])])]), v("CtaSection", {
                        attrs: {
                            cta: c.$store.state.data_global
                        }
                    }), v("Footer", {
                        attrs: {
                            dash: c.$store.state.data_dashboard
                        }
                    })], 1)
                }), [], !1, null, null, null);
            h.a = component.exports;
            installComponents(component, {
                CtaSection: v(233).default,
                Footer: v(168).default
            })
        },
        72: function(c, h, v) {
            "use strict";
            v.d(h, "a", (function() {
                return t
            }));
            var m = v(5),
                e = v(6),
                t = new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            this.perct_dash = document.querySelector(".dash__explore__numb.js-explore"), this.perct_footer = document.querySelector(".footer__explore__numb.js-explore"), this.svgDash = document.querySelector(".dash__explore .svg-explore-circle circle.percent"), this.svgfooter = document.querySelector(".footer__explore .svg-explore-circle circle.percent"), this.cms_paths = {
                                array: JSON.parse(c)
                            }, this.cms_paths_length = this.cms_paths.array.length, this.localStorage_paths_length = null, this.total_explored = 0, this.routes_walked = [], localStorage.length > 0 && localStorage.paths.length > 0 ? (this.routes = JSON.parse(localStorage.paths), this.routes_walked = JSON.parse(localStorage.paths), this.localStorage_paths_length = this.routes_walked.length, this.total_explored = 100 * (1 - (this.cms_paths_length - this.localStorage_paths_length) / this.cms_paths_length), this.setValues(this.perct_dash, this.svgDash)) : this.routes = []
                        }
                    }, {
                        key: "setItem",
                        value: function(path) {
                            this.routes.indexOf(path) > -1 || this.cms_paths.array.indexOf(path) > -1 && (this.routes.push(path), this.routes_walked = this.routes, localStorage.setItem("paths", JSON.stringify(this.routes)), this.localStorage_paths_length = this.routes_walked.length, this.total_explored = 100 * (1 - (this.cms_paths_length - this.localStorage_paths_length) / this.cms_paths_length))
                        }
                    }, {
                        key: "setValues",
                        value: function(c, h) {
                            c.textContent = "".concat(parseInt(this.total_explored)), this.perct_dash.textContent = "".concat(parseInt(this.total_explored)), this.perct_footer.textContent = "".concat(parseInt(this.total_explored)), h.style.strokeDashoffset = 1 - parseInt(this.total_explored) / 100 * 1, this.svgDash.style.strokeDashoffset = 1 - parseInt(this.total_explored) / 100 * 1, parseInt(this.total_explored) >= 100 ? (this.perct_dash.textContent = "DONE", c.textContent = "DONE", h.style.stroke = "#11dd7b", this.svgDash.style.stroke = "#11dd7b", document.querySelector("body").classList.add("is-complete")) : parseInt(this.total_explored) > 10 && parseInt(this.total_explored) < 25 ? (h.style.stroke = "#fff000", this.svgDash.style.stroke = "#fff000") : parseInt(this.total_explored) > 25 && parseInt(this.total_explored) <= 80 ? (h.style.stroke = "#ffffff", this.svgDash.style.stroke = "#ffffff") : parseInt(this.total_explored) > 81 && parseInt(this.total_explored) <= 99 && (h.style.stroke = "#73adf1", this.svgDash.style.stroke = "#73adf1")
                        }
                    }, {
                        key: "clearStorage",
                        value: function() {
                            this.routes = [], localStorage.clear()
                        }
                    }]), c
                }())
        },
        83: function(c, h, v) {
            "use strict";
            v.d(h, "a", (function() {
                return r
            }));
            var m = v(5),
                e = v(6),
                t = v(2),
                z = v(29);
            t.a.registerPlugin(z.a);
            var r = new(function() {
                function c() {
                    Object(m.a)(this, c)
                }
                return Object(e.a)(c, [{
                    key: "setDraw",
                    value: function(c) {
                        this.$el = c, this.tl_draw = t.a.timeline({
                            paused: !0
                        }).fromTo(this.$el.querySelector(".rect-border"), {
                            drawSVG: "0% 0%"
                        }, {
                            duration: 1,
                            drawSVG: "0% 50%",
                            ease: "power3.out"
                        }).fromTo(this.$el.querySelector(".rect-border2"), {
                            drawSVG: "50% 50%"
                        }, {
                            duration: 1,
                            drawSVG: "50% 100%",
                            ease: "power3.out"
                        }, 0).fromTo(this.$el.querySelectorAll(".border-hovers"), {
                            opacity: 0
                        }, {
                            duration: .8,
                            opacity: 1,
                            ease: "power2.out"
                        }, 0).to(this.$el.querySelector(".rect-border"), {
                            duration: 1,
                            drawSVG: "50% 50%",
                            ease: "none"
                        }, "<50%").to(this.$el.querySelector(".rect-border2"), {
                            duration: 1,
                            drawSVG: "100% 100%",
                            ease: "none"
                        }, .35).to(this.$el.querySelectorAll(".border-hovers"), {
                            duration: .5,
                            opacity: 0,
                            ease: "power2.in"
                        }, "<50%")
                    }
                }, {
                    key: "playDraw",
                    value: function() {
                        this.tl_draw.play(0)
                    }
                }]), c
            }())
        },
        99: function(c, h, v) {
            "use strict";
            v.d(h, "a", (function() {
                return t
            }));
            var m = v(5),
                e = v(6),
                t = (v(39), v(11), new(function() {
                    function c() {
                        Object(m.a)(this, c)
                    }
                    return Object(e.a)(c, [{
                        key: "init",
                        value: function(c) {
                            var h = c;
                            this.qsa = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                                return c.querySelectorAll(s)
                            }, this.qs = function(s) {
                                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                                return c.querySelector(s)
                            }, this.body = document.querySelector("body"), this.videos = this.qsa(".lazyvideo") || null, this.videos.length > 0 && this.lazyVideos()
                        }
                    }, {
                        key: "lazyVideos",
                        value: function() {
                            var c = .3 * window.innerHeight,
                                h = null;
                            h = window.innerWidth > 780 ? {
                                root: document.querySelector("div#__nuxt"),
                                threshold: 0,
                                rootMargin: "".concat(c, "px")
                            } : {
                                threshold: 0
                            };
                            var v = [].slice.call(this.qsa(".lazyvideo"));
                            if ("IntersectionObserver" in window) {
                                var m = new IntersectionObserver((function(c, h) {
                                        c.forEach((function(video) {
                                            if (video.isIntersecting) {
                                                for (var source in video.target.children) {
                                                    var c = video.target.children[source];
                                                    "string" == typeof c.tagName && "SOURCE" === c.tagName && (c.src = c.dataset.src)
                                                }
                                                video.target.load(), m.unobserve(video.target)
                                            }
                                        }))
                                    }), h),
                                    e = new IntersectionObserver((function(c, h) {
                                        c.forEach((function(video) {
                                            video.isIntersecting && (video.target.classList.remove("lazyvideo"), e.unobserve(video.target))
                                        }))
                                    }));
                                v.forEach((function(c) {
                                    e.observe(c), m.observe(c)
                                }))
                            }
                        }
                    }, {
                        key: "isFooter",
                        value: function(c) {
                            this.body = document.querySelector("body");
                            var h = this;
                            this.$footer = c;
                            var v = .9;
                            window.innerWidth < 1025 && (v = .65), new IntersectionObserver((function(c, v) {
                                c.forEach((function(c) {
                                    c.isIntersecting ? h.body.classList.add("is-footer") : h.body.classList.contains("is-footer") && h.body.classList.remove("is-footer")
                                }))
                            }), {
                                threshold: v
                            }).observe(this.$footer)
                        }
                    }]), c
                }()))
        }
    },
    [
        [247, 51, 14, 52]
    ]
]);