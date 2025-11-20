// DeepAgent visual-edit bridge - injected by backend
(function () {
  const state = {
    active: false,
    sessionId: null,
    hoverEl: null,
    selectedEl: null
  };

  const clearOutline = (el) => {
    if (!el) return;
    if (el.__daOldOutline !== undefined) {
      el.style.outline = el.__daOldOutline;
      delete el.__daOldOutline;
    }
    if (el.__daOldBoxShadow !== undefined) {
      el.style.boxShadow = el.__daOldBoxShadow;
      delete el.__daOldBoxShadow;
    }
    if (el.__daOldCursor !== undefined) {
      el.style.cursor = el.__daOldCursor;
      delete el.__daOldCursor;
    }
  };

  const applyHoverStyle = (el) => {
    if (!el) return;
    if (el === state.selectedEl) return;
    if (el.__daOldOutline === undefined) {
      el.__daOldOutline = el.style.outline || "";
    }
    if (el.__daOldBoxShadow === undefined) {
      el.__daOldBoxShadow = el.style.boxShadow || "";
    }
    if (el.__daOldCursor === undefined) {
      el.__daOldCursor = el.style.cursor || "";
    }
    el.style.outline = "2px solid rgba(64, 158, 255, 0.9)";
    el.style.boxShadow = "0 0 0 2px rgba(64, 158, 255, 0.3)";
    el.style.cursor = "pointer";
  };

  const applySelectedStyle = (el) => {
    if (!el) return;
    if (el.__daOldOutline === undefined) {
      el.__daOldOutline = el.style.outline || "";
    }
    if (el.__daOldBoxShadow === undefined) {
      el.__daOldBoxShadow = el.style.boxShadow || "";
    }
    if (el.__daOldCursor === undefined) {
      el.__daOldCursor = el.style.cursor || "";
    }
    el.style.outline = "2px solid rgba(245, 108, 108, 1)";
    el.style.boxShadow = "0 0 0 2px rgba(245, 108, 108, 0.35)";
    el.style.cursor = "pointer";
  };

  const findHighlightableElement = (target) => {
    let el = target;
    if (el && el.nodeType === 3 && el.parentElement) {
      el = el.parentElement;
    }
    while (el && el.nodeType === 1) {
      const tag = (el.tagName || "").toLowerCase();
      if (tag && tag !== "html" && tag !== "body") {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };

  const getCssPath = (el) => {
    if (!el || !document.documentElement) return "";
    const segments = [];
    let node = el;
    while (node && node.nodeType === 1 && node !== document.documentElement) {
      let selector = (node.tagName || "").toLowerCase();
      if (node.id) {
        selector += "#" + node.id;
        segments.unshift(selector);
        break;
      }
      if (node.classList && node.classList.length > 0) {
        selector += "." + Array.from(node.classList).join(".");
      }
      const parent = node.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter((child) => child.tagName === node.tagName);
        if (siblings.length > 1) {
          const index = siblings.indexOf(node);
          selector += ":nth-child(" + (index + 1) + ")";
        }
      }
      segments.unshift(selector);
      node = parent;
    }
    return segments.join(" > ");
  };

  const extractText = (el) => {
    if (!el) return "";
    const text = (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim();
    return text.slice(0, 200);
  };

  const buildElementInfo = (el) => {
    if (!el) return null;
    const loc = window.location || { pathname: "", search: "", hash: "" };
    const pagePath = String(loc.pathname || "") + String(loc.search || "") + String(loc.hash || "");
    return {
      tag: (el.tagName || "").toLowerCase(),
      id: el.id || "",
      classes: el.className || "",
      text: extractText(el),
      selector: getCssPath(el),
      pagePath: pagePath,
      href: el.getAttribute ? (el.getAttribute("href") || "") : "",
      src: el.getAttribute ? (el.getAttribute("src") || "") : ""
    };
  };

  const handleMouseOver = (event) => {
    if (!state.active) return;
    const target = findHighlightableElement(event.target);
    if (!target) return;
    if (state.hoverEl && state.hoverEl !== state.selectedEl && state.hoverEl !== target) {
      clearOutline(state.hoverEl);
    }
    state.hoverEl = target;
    applyHoverStyle(state.hoverEl);
  };

  const handleClick = (event) => {
    if (!state.active) return;
    const target = findHighlightableElement(event.target);
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
    if (state.selectedEl && state.selectedEl !== target) {
      clearOutline(state.selectedEl);
    }
    state.selectedEl = target;
    applySelectedStyle(state.selectedEl);
    const info = buildElementInfo(state.selectedEl);
    try {
      window.parent && window.parent.postMessage({
        source: "deepagent-child",
        type: "DA_ELEMENT_SELECTED",
        sessionId: state.sessionId,
        payload: info
      }, "*");
    } catch (e) {
      console.error("[DA] postMessage to parent failed", e);
    }
  };

  const attachDomListeners = () => {
    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("click", handleClick, true);
  };

  const detachDomListeners = () => {
    document.removeEventListener("mouseover", handleMouseOver, true);
    document.removeEventListener("click", handleClick, true);
    clearOutline(state.hoverEl);
    clearOutline(state.selectedEl);
    state.hoverEl = null;
    state.selectedEl = null;
  };

  window.addEventListener("message", (event) => {
    try {
      const data = event.data || {};
      if (!data || data.source !== "deepagent-parent") return;
      if (data.type === "DA_VISUAL_EDIT_ENABLE") {
        state.active = true;
        state.sessionId = data.sessionId || null;
        attachDomListeners();
      } else if (data.type === "DA_VISUAL_EDIT_DISABLE") {
        if (state.sessionId && data.sessionId && data.sessionId !== state.sessionId) {
          return;
        }
        state.active = false;
        state.sessionId = null;
        detachDomListeners();
      }
    } catch (e) {
      console.error("[DA] handle message error", e);
    }
  });
})();
