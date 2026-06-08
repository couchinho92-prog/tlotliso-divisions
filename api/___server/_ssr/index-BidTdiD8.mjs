import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as logoAsset } from "./router-B5XlxCQT.mjs";
import { X, M as Menu, A as ArrowRight, H as HardHat, P as PartyPopper, T as Truck, B as Bus, S as ShieldCheck, C as Clock, a as Sparkles, b as MapPin, c as Phone, d as Mail } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const NAVY = "#0A1F5C";
const divisions = [{
  icon: HardHat,
  title: "Construction Materials",
  desc: "Bricks, sand, stone and core supply for builders across the Eastern Cape.",
  points: ["Bricks & blocks", "Sand & aggregates", "Bulk delivery"]
}, {
  icon: PartyPopper,
  title: "Event Rentals",
  desc: "Tents, tables, chairs, décor and inflatables to make any occasion shine.",
  points: ["Tents & marquees", "Tables & chairs", "Inflatables"]
}, {
  icon: Truck,
  title: "Logistics Solutions",
  desc: "Reliable freight and last-mile transport built around your timelines.",
  points: ["Local & long-haul", "Tracked deliveries", "On-time guarantee"]
}, {
  icon: Bus,
  title: "Shuttle Services",
  desc: "Safe, professional passenger shuttles for groups, staff and events.",
  points: ["Group transfers", "Daily commuter", "Event shuttles"]
}];
const stats = [{
  value: "4",
  label: "Divisions, one promise"
}, {
  value: "100%",
  label: "Locally owned"
}, {
  value: "24/7",
  label: "Booking support"
}];
const features = [{
  icon: ShieldCheck,
  title: "Trusted Operations",
  desc: "Registered enterprise with rigorous standards across every division."
}, {
  icon: Clock,
  title: "On-Time, Every Time",
  desc: "Scheduled with precision — your event, your build, your journey."
}, {
  icon: Sparkles,
  title: "Excellence Elevated",
  desc: "From the mountains of Mt Fletcher to wherever you need us."
}];
const navLinks = [{
  href: "#divisions",
  label: "Divisions"
}, {
  href: "#about",
  label: "About"
}, {
  href: "#why",
  label: "Why us"
}, {
  href: "#contact",
  label: "Contact"
}];
function Index() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-white text-[#0A1F5C] overflow-x-hidden antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(10,31,92,0.25)]" : "bg-transparent"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "relative mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-8 text-sm font-medium justify-self-start", children: navLinks.slice(0, 2).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "relative text-[#0A1F5C]/80 transition hover:text-[#0A1F5C] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#CC2228] after:transition-all hover:after:w-full", children: l.label }) }, l.href)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMenuOpen((v) => !v), className: "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#0A1F5C] hover:bg-[#0A1F5C]/5 justify-self-start", "aria-label": "Toggle menu", children: menuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "flex items-center justify-self-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoAsset.url, alt: "Tlotliso", className: "h-16 w-auto sm:h-20 md:h-24 transition-transform hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-8 text-sm font-medium justify-self-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex items-center gap-8", children: navLinks.slice(2).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "relative text-[#0A1F5C]/80 transition hover:text-[#0A1F5C] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#CC2228] after:transition-all hover:after:w-full", children: l.label }) }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 rounded-full bg-[#CC2228] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#CC2228]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#CC2228]/30", children: [
            "Get a quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden h-10 w-10 justify-self-end", "aria-hidden": true })
      ] }),
      menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: -10
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "md:hidden border-t border-[#0A1F5C]/10 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col px-4 py-3", children: [
        navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, onClick: () => setMenuOpen(false), className: "block py-3 text-base font-medium text-[#0A1F5C]", children: l.label }) }, l.href)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", onClick: () => setMenuOpen(false), className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#CC2228] px-5 py-3 text-sm font-semibold text-white", children: [
          "Get a quote ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative flex flex-col items-center px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#0A1F5C]/10 via-[#CC2228]/5 to-transparent blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-[#CC2228]/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 -right-24 h-80 w-80 rounded-full bg-[#0A1F5C]/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 h-full w-full opacity-[0.04]", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "grid", width: "32", height: "32", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 32 0 L 0 0 0 32", fill: "none", stroke: NAVY, strokeWidth: "0.5" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#grid)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: -8
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, className: "mb-6 inline-flex items-center gap-2 rounded-full border border-[#0A1F5C]/15 bg-white/70 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#0A1F5C] backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#CC2228] animate-pulse" }),
        "From the mountains of Mt Fletcher"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { initial: {
        opacity: 0,
        scale: 0.92,
        y: 12
      }, animate: {
        opacity: 0.85,
        scale: 1,
        y: 0
      }, transition: {
        duration: 0.7,
        ease: "easeOut"
      }, src: logoAsset.url, alt: "Tlotliso Divisions — One Stop Rentals", className: "w-full max-w-xs sm:max-w-md lg:max-w-xl mx-auto mix-blend-multiply opacity-90", style: {
        maskImage: "radial-gradient(ellipse at center, #000 55%, transparent 95%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, #000 55%, transparent 95%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.4
      }, className: "mt-8 flex items-center gap-3", "aria-hidden": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#CC2228]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#CC2228]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#CC2228]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "sr-only", children: "Tlotliso Divisions — One Stop Rentals" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.45,
        duration: 0.6
      }, className: "mt-6 max-w-2xl px-2 text-base sm:text-xl md:text-2xl leading-relaxed text-[#0A1F5C]/80", children: [
        "Four divisions. One promise. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#0A1F5C]", children: "Excellence elevated" }),
        " across construction, events, logistics and shuttles."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.6
      }, className: "mt-8 flex w-full flex-col sm:flex-row sm:w-auto items-stretch sm:items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#divisions", className: "group inline-flex items-center justify-center gap-2 rounded-full bg-[#0A1F5C] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0A1F5C]/20 transition hover:-translate-y-0.5 hover:bg-[#0A1F5C]/90 hover:shadow-xl", children: [
          "Explore our divisions",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#CC2228] bg-white px-6 py-3.5 text-sm font-semibold text-[#CC2228] transition hover:-translate-y-0.5 hover:bg-[#CC2228] hover:text-white", children: "Get in touch" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6
      }, className: "mt-14 sm:mt-20 grid w-full max-w-3xl grid-cols-3 gap-4 sm:gap-8 rounded-2xl border border-[#0A1F5C]/10 bg-white/70 p-5 sm:p-8 backdrop-blur", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0A1F5C]", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-[#0A1F5C]/60", children: s.label })
      ] }, s.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "divisions", className: "relative border-t border-[#0A1F5C]/10 bg-gradient-to-b from-[#F6F7FB] to-white px-4 sm:px-6 py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-[#CC2228]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#CC2228]", children: "What we do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1F5C]", children: "Four divisions, one trusted partner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-[#0A1F5C]/70", children: "Whatever you're building, celebrating, moving or travelling for — Tlotliso has a division ready to deliver." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 sm:mt-16 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4", children: divisions.map((d, i) => {
        const Icon = d.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
          opacity: 0,
          y: 24
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-80px"
        }, transition: {
          duration: 0.5,
          delay: i * 0.08
        }, className: "group relative overflow-hidden rounded-2xl border border-[#0A1F5C]/10 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-[#CC2228]/30 hover:shadow-2xl hover:shadow-[#0A1F5C]/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#CC2228]/0 to-[#CC2228]/0 transition-all duration-500 group-hover:from-[#CC2228]/10 group-hover:to-[#0A1F5C]/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1F5C] text-white transition-all duration-500 group-hover:bg-[#CC2228] group-hover:rotate-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-bold text-[#0A1F5C]", children: d.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-[#0A1F5C]/70", children: d.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-1.5", children: d.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-xs text-[#0A1F5C]/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-[#CC2228]" }),
              " ",
              p
            ] }, p)) })
          ] })
        ] }, d.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "px-4 sm:px-6 py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -30
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-[#0A1F5C]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0A1F5C]", children: "About Tlotliso" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1F5C]", children: [
          "Rooted in Mt Fletcher.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#CC2228]", children: "Reaching everywhere you need." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base sm:text-lg leading-relaxed text-[#0A1F5C]/75", children: "Born in the mountains of the Eastern Cape, Tlotliso Divisions is a locally-owned enterprise serving communities, contractors and celebrations with the same standard of excellence. One name, one promise, four ways we show up for you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 rounded-full bg-[#0A1F5C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0A1F5C]/90", children: [
            "Work with us ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#divisions", className: "inline-flex items-center gap-2 rounded-full border border-[#0A1F5C]/20 px-5 py-3 text-sm font-semibold text-[#0A1F5C] transition hover:border-[#0A1F5C]", children: "See divisions" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        x: 30
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6
      }, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl bg-gradient-to-br from-[#0A1F5C] to-[#0A1F5C]/80 p-8 sm:p-10 text-white shadow-2xl shadow-[#0A1F5C]/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#CC2228] blur-2xl opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl sm:text-3xl font-bold leading-snug", children: '"Excellence elevated — from the mountains, to your moment."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3 border-t border-white/15 pt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoAsset.url, alt: "", className: "h-10 w-10 rounded-full bg-white p-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Tlotliso Divisions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/70", children: "Enterprise No. 2025/939200/07" })
            ] })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "why", className: "relative bg-[#0A1F5C] px-4 sm:px-6 py-20 sm:py-28 text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 opacity-10", style: {
        backgroundImage: "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 60%, #fff 1px, transparent 1px)",
        backgroundSize: "60px 60px, 80px 80px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider", children: "Why Tlotliso" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight", children: "Built on trust. Delivered with pride." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-3", children: features.map((f, i) => {
          const Icon = f.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            duration: 0.5,
            delay: i * 0.1
          }, className: "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#CC2228]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-bold", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-white/75", children: f.desc })
          ] }, f.title);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "px-4 sm:px-6 py-20 sm:py-28 bg-gradient-to-b from-white to-[#F6F7FB]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-[#CC2228]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#CC2228]", children: "Get in touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1F5C]", children: "Let's elevate your next project." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-[#0A1F5C]/70", children: "Whether it's a build, a celebration or a journey — tell us what you need and we'll get back within one business day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0A1F5C] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-[#0A1F5C]", children: "Visit us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-[#0A1F5C]/70", children: "Mt Fletcher / Tlokweng, Eastern Cape" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0A1F5C] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-[#0A1F5C]", children: "Call us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-[#0A1F5C]/70", children: "Available on request" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0A1F5C] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-[#0A1F5C]", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-[#0A1F5C]/70", children: "hello@tlotliso.co.za" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6,
        delay: 0.1
      }, onSubmit: (e) => {
        e.preventDefault();
        const f = e.currentTarget;
        const data = new FormData(f);
        const subject = encodeURIComponent(`Enquiry from ${data.get("name") || "website"}`);
        const body = encodeURIComponent(`Name: ${data.get("name")}
Email: ${data.get("email")}
Division: ${data.get("division")}

${data.get("message")}`);
        window.location.href = `mailto:hello@tlotliso.co.za?subject=${subject}&body=${body}`;
      }, className: "rounded-3xl border border-[#0A1F5C]/10 bg-white p-6 sm:p-8 shadow-xl shadow-[#0A1F5C]/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", placeholder: "Your full name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "you@example.com", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-[#0A1F5C]/70", children: "Division" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "division", defaultValue: "", className: "mt-1.5 w-full rounded-xl border border-[#0A1F5C]/15 bg-white px-4 py-3 text-sm text-[#0A1F5C] outline-none transition focus:border-[#CC2228] focus:ring-2 focus:ring-[#CC2228]/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a division" }),
            divisions.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: d.title, children: d.title }, d.title))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-[#0A1F5C]/70", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 4, required: true, placeholder: "Tell us about your project, event or trip...", className: "mt-1.5 w-full resize-none rounded-xl border border-[#0A1F5C]/15 bg-white px-4 py-3 text-sm text-[#0A1F5C] outline-none transition placeholder:text-[#0A1F5C]/40 focus:border-[#CC2228] focus:ring-2 focus:ring-[#CC2228]/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#CC2228] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#CC2228]/30 transition hover:-translate-y-0.5 hover:bg-[#CC2228]/90", children: [
          "Send enquiry ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-[#0A1F5C]/10 bg-white px-4 sm:px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoAsset.url, alt: "Tlotliso", className: "h-9 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[#0A1F5C]/60", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Tlotliso Divisions. All rights reserved."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#0A1F5C]/60", children: "Enterprise No. 2025/939200/07 · Mt Fletcher, Eastern Cape" })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-[#0A1F5C]/70", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, name, required, placeholder, className: "mt-1.5 w-full rounded-xl border border-[#0A1F5C]/15 bg-white px-4 py-3 text-sm text-[#0A1F5C] outline-none transition placeholder:text-[#0A1F5C]/40 focus:border-[#CC2228] focus:ring-2 focus:ring-[#CC2228]/20" })
  ] });
}
export {
  Index as component
};
