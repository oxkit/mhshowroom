/* @ds-bundle: {"format":4,"namespace":"MattressHubDesignSystem_7b8009","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"PriceTag","sourcePath":"components/core/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/core/ProductCard.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"e90ccac842ca","components/core/Button.jsx":"377f039ab56e","components/core/Card.jsx":"5c85015d8c5b","components/core/Input.jsx":"c22bb4bfad0b","components/core/PriceTag.jsx":"cb55cd7b886f","components/core/ProductCard.jsx":"137b139d3d37","components/core/Rating.jsx":"d99e5aa2993a","slides/Slides.jsx":"8f4b6035bed5","ui_kits/website/Chrome.jsx":"2129c0c3e8bd","ui_kits/website/Home.jsx":"972f59413cb0","ui_kits/website/Screens.jsx":"f0058814ee86"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MattressHubDesignSystem_7b8009 = window.MattressHubDesignSystem_7b8009 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status / label pill. Tones map to brand semantics. */
function Badge({
  tone = "neutral",
  children,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--ink-100)",
      color: "var(--text-body)"
    },
    deal: {
      background: "var(--accent-soft)",
      color: "var(--accent-strong)"
    },
    savings: {
      background: "var(--savings-soft)",
      color: "#9a6a14"
    },
    instock: {
      background: "var(--positive-soft)",
      color: "var(--positive)"
    },
    brand: {
      background: "var(--night-800)",
      color: "var(--text-on-brand)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 10px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-pill)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MattressHub Button — primary actions use the clay deal-accent; secondary is
 * night-navy outline; ghost for low-emphasis. Pill radius, soft lift on hover.
 */
function Button({
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "var(--text-sm)"
    },
    md: {
      padding: "12px 22px",
      fontSize: "var(--text-base)"
    },
    lg: {
      padding: "16px 30px",
      fontSize: "var(--text-md)"
    }
  };
  const variants = {
    primary: {
      background: "var(--surface-accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-accent)"
    },
    secondary: {
      background: "transparent",
      color: "var(--brand)",
      border: "1.5px solid var(--border-strong)",
      boxShadow: "none"
    },
    solid: {
      background: "var(--surface-brand)",
      color: "var(--text-on-brand)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand)",
      border: "1px solid transparent",
      boxShadow: "none"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      width: full ? "100%" : "auto",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)",
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(0.97)"),
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. variant controls fill + border treatment. */
function Card({
  variant = "default",
  padding = "var(--space-5)",
  children,
  style = {},
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)"
    },
    raised: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-md)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    brand: {
      background: "var(--surface-brand)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-md)",
      color: "var(--text-on-brand)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      overflow: "hidden",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled text input with brand focus ring. */
function Input({
  label,
  hint,
  error,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      background: "var(--surface-card)",
      border: `1.5px solid ${error ? "var(--accent-strong)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-sm)",
      padding: "11px 14px",
      outline: "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--focus-ring)";
      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(61,81,135,0.18)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? "var(--accent-strong)" : "var(--border-default)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--accent-strong)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PriceTag — the honest-pricing centerpiece. Shows the MattressHub dealer price
 * large in mono, with the struck retail price and a savings amount/percent.
 */
function PriceTag({
  price,
  retail = null,
  size = "md",
  currency = "$",
  align = "left",
  ...rest
}) {
  const scale = {
    sm: {
      price: "var(--text-lg)",
      retail: "var(--text-sm)"
    },
    md: {
      price: "var(--text-2xl)",
      retail: "var(--text-md)"
    },
    lg: {
      price: "var(--text-3xl)",
      retail: "var(--text-lg)"
    }
  }[size];
  const saved = retail ? Math.round((retail - price) / retail * 100) : 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      gap: "4px"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "10px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mh-price",
    style: {
      fontSize: scale.price,
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, currency, Number(price).toLocaleString()), retail && /*#__PURE__*/React.createElement("span", {
    className: "mh-price",
    style: {
      fontSize: scale.retail,
      color: "var(--text-muted)",
      textDecoration: "line-through"
    }
  }, currency, Number(retail).toLocaleString())), retail && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--accent-strong)"
    }
  }, "You save ", currency, Number(retail - price).toLocaleString(), " \xB7 ", saved, "% off retail"));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Star rating with optional review count. Filled stars use the savings amber. */
function Rating({
  value = 0,
  count = null,
  size = 16,
  ...rest
}) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: "2px"
    },
    "aria-label": `${value} out of 5`
  }, [0, 1, 2, 3, 4].map(i => {
    const fill = i < full ? 1 : i === full && half ? 0.5 : 0;
    return /*#__PURE__*/React.createElement("svg", {
      key: i,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: `mh-star-${i}-${size}`
    }, /*#__PURE__*/React.createElement("stop", {
      offset: `${fill * 100}%`,
      stopColor: "var(--amber-500)"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: `${fill * 100}%`,
      stopColor: "var(--ink-200)"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 21.3l1.2-6.6L2.5 9.5l6.6-.9z",
      fill: `url(#mh-star-${i}-${size})`
    }));
  })), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, value.toFixed(1), " (", Number(count).toLocaleString(), ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProductCard — the catalog workhorse. Composes Card + Badge + PriceTag + Rating.
 * Pass an image URL; a warm sand placeholder shows if omitted.
 */
function ProductCard({
  name,
  tagline,
  image = null,
  price,
  retail = null,
  rating = null,
  reviews = null,
  badge = null,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    variant: "raised",
    padding: "0",
    style: {
      display: "flex",
      flexDirection: "column",
      width: "280px"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "180px",
      background: "var(--sand-200)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "grid",
      placeItems: "center",
      color: "var(--ink-300)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)"
    }
  }, "Product image"), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "12px",
      left: "12px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "deal"
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)",
      margin: "0 0 2px"
    }
  }, name), tagline && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, tagline)), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: reviews,
    size: 15
  }), /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    price: price,
    retail: retail,
    size: "sm"
  })));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductCard.jsx", error: String((e && e.message) || e) }); }

// slides/Slides.jsx
try { (() => {
// MattressHub slide components (1280x720 canvas). Attach to window.
const {
  Button,
  Badge,
  PriceTag
} = window.MattressHubDesignSystem_7b8009;
function Slide({
  children,
  bg = "var(--surface-page)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: bg,
      position: "relative",
      overflow: "hidden",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, children);
}
function Mark({
  light
}) {
  const c = light ? "#eef1f8" : "var(--night-800)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "11",
    width: "28",
    height: "13",
    rx: "4",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "11",
    width: "28",
    height: "6",
    rx: "3",
    fill: "var(--clay-500)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: "-.02em",
      color: c
    }
  }, "MattressHub"));
}
function TitleSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--night-900)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 56,
      left: 64
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    light: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 240,
      left: 64,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--clay-300)"
    }
  }, "The MattressHub promise"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 88,
      lineHeight: 1.0,
      fontWeight: 800,
      letterSpacing: "-.02em",
      color: "#fff",
      margin: "18px 0 0"
    }
  }, "Dealer price", /*#__PURE__*/React.createElement("br", null), "for everyone"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      color: "#c8d0e0",
      marginTop: 24,
      maxWidth: 620
    }
  }, "Quality sleep should be affordable for everyone \u2014 honest pricing, lasting comfort, no retail markups.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 56,
      left: 64,
      fontFamily: "var(--font-mono)",
      fontSize: 15,
      color: "#5f6f95"
    }
  }, "Q3 2026 \xB7 Brand Overview"));
}
function StatSlide() {
  const stats = [["$550", "average saved vs retail"], ["100", "night home trial"], ["12,400+", "five-star reviews"]];
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "72px 64px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mh-eyebrow"
  }, "By the numbers"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 52,
      fontWeight: 800,
      letterSpacing: "-.02em",
      color: "var(--text-strong)",
      margin: "12px 0 56px"
    }
  }, "The value, in plain numbers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28
    }
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      flex: 1,
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: 18,
      padding: "36px 32px",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mh-price",
    style: {
      fontSize: 64,
      fontWeight: 600,
      color: "var(--clay-500)",
      letterSpacing: "-.03em"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: "var(--text-body)",
      marginTop: 8
    }
  }, l))))));
}
function ComparisonSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--sand-200)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "72px 64px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mh-eyebrow"
  }, "Where the markup goes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 52,
      fontWeight: 800,
      letterSpacing: "-.02em",
      color: "var(--text-strong)",
      margin: "12px 0 48px"
    }
  }, "Same mattress. Honest price."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--surface-card)",
      borderRadius: 18,
      padding: 40,
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".08em",
      color: "var(--text-muted)"
    }
  }, "Traditional retail"), /*#__PURE__*/React.createElement("div", {
    className: "mh-price",
    style: {
      fontSize: 72,
      color: "var(--text-muted)",
      textDecoration: "line-through",
      margin: "16px 0"
    }
  }, "$1,199"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      color: "var(--text-muted)"
    }
  }, "Showroom rent \xB7 sales commission \xB7 middleman markup")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--night-800)",
      borderRadius: 18,
      padding: 40,
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".08em",
      color: "var(--clay-300)"
    }
  }, "MattressHub"), /*#__PURE__*/React.createElement("div", {
    className: "mh-price",
    style: {
      fontSize: 72,
      color: "#fff",
      fontWeight: 600,
      margin: "16px 0"
    }
  }, "$649"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      color: "#c8d0e0"
    }
  }, "Factory-direct \xB7 no markup \xB7 savings back to you")))));
}
function QuoteSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--clay-500)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 96px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 110,
      color: "#fff",
      lineHeight: 0.6,
      opacity: .5
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 46,
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#fff",
      maxWidth: 980,
      margin: "8px 0 28px"
    }
  }, "I paid half what the showroom quoted for the exact same comfort. This is how mattresses should be sold."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: "#fbe4dc",
      fontWeight: 600
    }
  }, "\u2014 Verified buyer \xB7 Cloud Hybrid Plush, Queen")));
}
Object.assign(window, {
  Slide,
  TitleSlide,
  StatSlide,
  ComparisonSlide,
  QuoteSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
// MattressHub website — shared chrome (header + footer). Attaches to window.
const {
  Button,
  Badge
} = window.MattressHubDesignSystem_7b8009;
function MHLogo({
  light = false
}) {
  const c = light ? "#eef1f8" : "var(--night-800)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 32 32",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "11",
    width: "28",
    height: "13",
    rx: "4",
    fill: light ? "#eef1f8" : "var(--night-800)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "11",
    width: "28",
    height: "6",
    rx: "3",
    fill: "var(--clay-500)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "24",
    x2: "7",
    y2: "27",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "25",
    y1: "24",
    x2: "25",
    y2: "27",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 19,
      letterSpacing: "-.02em",
      color: c
    }
  }, "MattressHub"));
}
function Header({
  route,
  go,
  cartCount
}) {
  const nav = [["shop", "Shop"], ["mattresses", "Mattresses"], ["how", "How it works"], ["reviews", "Reviews"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--night-800)",
      color: "#eef1f8",
      textAlign: "center",
      fontSize: 13,
      padding: "7px 16px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--clay-300)"
    }
  }, "Dealer Price for Everyone"), " \u2014 free shipping & a 100-night trial on every mattress"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "14px 24px",
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: "pointer"
    },
    onClick: () => go("home")
  }, /*#__PURE__*/React.createElement(MHLogo, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 22,
      marginLeft: 8
    }
  }, nav.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    onClick: () => go("home"),
    style: {
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15,
      color: "var(--text-body)"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => go("cart"),
    iconLeft: /*#__PURE__*/React.createElement("span", null, "\uD83D\uDED2")
  }, "Cart", cartCount ? ` · ${cartCount}` : ""))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--night-900)",
      color: "#aeb7cd",
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "48px 24px",
      display: "flex",
      gap: 48,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement(MHLogo, {
    light: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.6,
      marginTop: 12
    }
  }, "Quality sleep should be affordable for everyone. Dealer-price value, honest pricing, lasting comfort.")), [["Shop", ["Mattresses", "Bed frames", "Pillows", "Bundles"]], ["Company", ["Our promise", "Reviews", "Showrooms", "Careers"]], ["Support", ["Track order", "100-night trial", "Warranty", "Contact"]]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      color: "#eef1f8",
      fontSize: 14,
      marginBottom: 12
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      padding: "5px 0",
      cursor: "pointer"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--night-700)",
      padding: "18px 24px",
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: 13
    }
  }, "\xA9 2026 MattressHub Studio \xB7 No retail markups, ever."));
}
Object.assign(window, {
  MHLogo,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
// MattressHub catalog data + Home screen.
const PRODUCTS = [{
  id: "cloud-hybrid",
  name: "Cloud Hybrid Plush",
  tagline: "Queen · medium-firm",
  price: 649,
  retail: 1199,
  rating: 4.5,
  reviews: 2841,
  badge: "Best seller",
  firmness: "Medium-firm",
  feel: "Plush hybrid"
}, {
  id: "studio-foam",
  name: "Studio Memory Foam",
  tagline: "Queen · medium",
  price: 499,
  retail: 899,
  rating: 4.6,
  reviews: 1934,
  badge: "Dealer price",
  firmness: "Medium",
  feel: "Memory foam"
}, {
  id: "everest-firm",
  name: "Everest Firm Support",
  tagline: "Queen · firm",
  price: 729,
  retail: 1349,
  rating: 4.4,
  reviews: 1205,
  badge: null,
  firmness: "Firm",
  feel: "Pocket coil"
}, {
  id: "drift-cooling",
  name: "Drift Cooling Hybrid",
  tagline: "Queen · medium",
  price: 849,
  retail: 1599,
  rating: 4.7,
  reviews: 3320,
  badge: "Stays cool",
  firmness: "Medium",
  feel: "Gel hybrid"
}];
const {
  Button,
  Badge,
  PriceTag,
  Rating,
  ProductCard,
  Card
} = window.MattressHubDesignSystem_7b8009;
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "linear-gradient(180deg,var(--sand-100),var(--sand-200))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "64px 24px",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "mh-eyebrow"
  }, "The MattressHub promise"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 60,
      lineHeight: 1.02,
      margin: "12px 0 16px"
    }
  }, "Dealer price.", /*#__PURE__*/React.createElement("br", null), "For everyone."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 19,
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: 460,
      marginBottom: 28
    }
  }, "Quality mattresses at the price dealers pay \u2014 no traditional retail markups. Honest pricing, lasting comfort, delivered free."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go("product", PRODUCTS[0])
  }, "Shop mattresses"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Take the sleep quiz")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: 4.6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, "4.6 average \xB7 12,400+ verified reviews"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 360,
      borderRadius: 24,
      background: "var(--night-800)",
      position: "relative",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      color: "#5f6f95",
      fontFamily: "var(--font-body)"
    }
  }, "Lifestyle photo"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 20,
      left: 20,
      background: "var(--surface-card)",
      borderRadius: 16,
      padding: "14px 18px",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "From"), /*#__PURE__*/React.createElement(PriceTag, {
    price: 499,
    retail: 899,
    size: "sm"
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "20px 24px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16
    }
  }, [["🛏️", "100-night trial"], ["🚚", "Free shipping"], ["🛡️", "10-year warranty"], ["🏷️", "No retail markups"]].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, i), t)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "56px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "mh-eyebrow"
  }, "Best sellers"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 36,
      margin: "8px 0 0"
    }
  }, "Comfort everyone can afford")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "View all mattresses \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      cursor: "pointer"
    },
    onClick: () => go("product", p)
  }, /*#__PURE__*/React.createElement(ProductCard, p))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto 8px",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "brand",
    padding: "48px",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      fontSize: 34,
      marginBottom: 12
    }
  }, "Why we can charge dealer prices"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: 1.6,
      color: "#c8d0e0",
      margin: 0
    }
  }, "We cut out the showroom middlemen and sell factory-direct. The markup that used to pad a retail tag goes back to you \u2014 same quality, honest price.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "var(--night-700)",
      borderRadius: 12,
      padding: "14px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      color: "#c8d0e0"
    }
  }, "Typical retail"), /*#__PURE__*/React.createElement("span", {
    className: "mh-price",
    style: {
      color: "#8b93ab",
      textDecoration: "line-through",
      fontSize: 22
    }
  }, "$1,199")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "var(--clay-500)",
      borderRadius: 12,
      padding: "14px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      color: "#fff",
      fontWeight: 600
    }
  }, "MattressHub price"), /*#__PURE__*/React.createElement("span", {
    className: "mh-price",
    style: {
      color: "#fff",
      fontSize: 26,
      fontWeight: 600
    }
  }, "$649"))))));
}
Object.assign(window, {
  Home,
  PRODUCTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens.jsx
try { (() => {
// Product detail + Cart screens.
const {
  Button,
  Badge,
  PriceTag,
  Rating,
  Card,
  Input
} = window.MattressHubDesignSystem_7b8009;
function Product({
  product,
  go,
  addToCart
}) {
  const p = product || window.PRODUCTS[0];
  const [size, setSize] = React.useState("Queen");
  const sizes = ["Twin", "Full", "Queen", "King"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "32px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-muted)",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home"),
    style: {
      cursor: "pointer"
    }
  }, "Home"), " / Mattresses / ", p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380,
      borderRadius: 20,
      background: "var(--sand-200)",
      display: "grid",
      placeItems: "center",
      color: "var(--ink-300)",
      fontFamily: "var(--font-body)",
      marginBottom: 12
    }
  }, "Product photo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 78,
      height: 64,
      borderRadius: 10,
      background: "var(--sand-300)",
      border: i === 0 ? "2px solid var(--night-600)" : "1px solid var(--border-subtle)"
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 10
    }
  }, p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "deal"
  }, p.badge), /*#__PURE__*/React.createElement(Badge, {
    tone: "instock"
  }, "In stock")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      marginBottom: 8
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: p.rating,
    count: p.reviews
  })), /*#__PURE__*/React.createElement(PriceTag, {
    price: p.price,
    retail: p.retail,
    size: "lg"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-body)",
      margin: "20px 0"
    }
  }, "A ", p.feel.toLowerCase(), " built for ", p.firmness.toLowerCase(), " support and pressure relief. Breathable cover, durable edge support, and zero retail markup."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-strong)",
      marginBottom: 8
    }
  }, "Size"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, sizes.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setSize(s),
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14,
      padding: "10px 18px",
      cursor: "pointer",
      borderRadius: 999,
      background: size === s ? "var(--night-800)" : "var(--surface-card)",
      color: size === s ? "#fff" : "var(--text-body)",
      border: size === s ? "1px solid transparent" : "1.5px solid var(--border-default)"
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true,
    onClick: () => {
      addToCart({
        ...p,
        size
      });
      go("cart");
    }
  }, "Add to cart"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "\u2661")), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    padding: "18px",
    style: {
      display: "flex",
      gap: 24
    }
  }, [["Firmness", p.firmness], ["Feel", p.feel], ["Trial", "100 nights"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      color: "var(--text-strong)",
      marginTop: 2
    }
  }, v)))))));
}
function Cart({
  items,
  go,
  removeItem
}) {
  const subtotal = items.reduce((s, i) => s + i.price, 0);
  const retail = items.reduce((s, i) => s + (i.retail || i.price), 0);
  const saved = retail - subtotal;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto",
      padding: "40px 24px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 36,
      marginBottom: 24
    }
  }, "Your cart"), items.length === 0 ? /*#__PURE__*/React.createElement(Card, {
    padding: "48px",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      color: "var(--text-muted)",
      marginBottom: 20
    }
  }, "Your cart is empty."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("home")
  }, "Shop mattresses")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, items.map((it, idx) => /*#__PURE__*/React.createElement(Card, {
    key: idx,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      height: 70,
      borderRadius: 10,
      background: "var(--sand-200)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, it.size, " \xB7 ", it.firmness)), /*#__PURE__*/React.createElement(PriceTag, {
    price: it.price,
    retail: it.retail,
    size: "sm"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => removeItem(idx),
    style: {
      background: "none",
      border: "none",
      color: "var(--text-muted)",
      cursor: "pointer",
      fontSize: 20
    }
  }, "\xD7")))), /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    style: {
      height: "fit-content"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 16
    }
  }, "Order summary"), [["Retail value", `$${retail.toLocaleString()}`, "var(--text-muted)"], ["Dealer savings", `–$${saved.toLocaleString()}`, "var(--accent-strong)"], ["Shipping", "Free", "var(--positive)"]].map(([k, v, c]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      padding: "7px 0",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    className: "mh-price",
    style: {
      color: c
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      margin: "12px 0",
      paddingTop: 12,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "mh-price",
    style: {
      fontSize: 26,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, "$", subtotal.toLocaleString())), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    size: "lg",
    style: {
      marginTop: 8
    }
  }, "Checkout"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-muted)",
      textAlign: "center",
      marginTop: 12
    }
  }, "100-night trial \xB7 Free returns"))));
}
Object.assign(window, {
  Product,
  Cart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Rating = __ds_scope.Rating;

})();
