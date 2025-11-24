(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getWindow
});
function getWindow(node) {
    if (node == null) {
        return window;
    }
    if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "isElement": ()=>isElement,
    "isHTMLElement": ()=>isHTMLElement,
    "isShadowRoot": ()=>isShadowRoot
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
;
function isElement(node) {
    var OwnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
        return false;
    }
    var OwnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}
;
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "max": ()=>max,
    "min": ()=>min,
    "round": ()=>round
});
var max = Math.max;
var min = Math.min;
var round = Math.round;
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getUAString
});
function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
        return uaData.brands.map(function(item) {
            return item.brand + "/" + item.version;
        }).join(' ');
    }
    return navigator.userAgent;
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>isLayoutViewport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$userAgent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js [app-client] (ecmascript)");
;
function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$userAgent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])());
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getBoundingClientRect
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isLayoutViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js [app-client] (ecmascript)");
;
;
;
;
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
        includeScale = false;
    }
    if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
        scaleX = element.offsetWidth > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(element) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isLayoutViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getWindowScroll
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
;
function getWindowScroll(node) {
    var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getHTMLElementScroll
});
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getNodeScroll
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getHTMLElementScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js [app-client] (ecmascript)");
;
;
;
;
function getNodeScroll(node) {
    if (node === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(node)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getHTMLElementScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node);
    }
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getNodeName
});
function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getDocumentElement
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
;
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getWindowScrollBarX
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js [app-client] (ecmascript)");
;
;
;
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element)).left + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element).scrollLeft;
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getComputedStyle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
;
function getComputedStyle(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element).getComputedStyle(element);
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>isScrollParent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js [app-client] (ecmascript)");
;
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getCompositeRect
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScrollBarX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
        isFixed = false;
    }
    var isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    var offsetParentIsScaled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent) && isElementScaled(offsetParent);
    var documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent);
    var rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent)) {
            offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) {
            offsets.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScrollBarX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(documentElement);
        }
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getLayoutRect
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js [app-client] (ecmascript)"); // Returns the layout rect of an element relative to its offsetParent. Layout
;
function getLayoutRect(element) {
    var clientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
        width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
        height = clientRect.height;
    }
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getParentNode
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
;
;
;
function getParentNode(element) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element) === 'html') {
        return element;
    }
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isShadowRoot"])(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element) // fallback
    );
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getScrollParent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
;
;
;
;
function getScrollParent(node) {
    if ([
        'html',
        'body',
        '#document'
    ].indexOf((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node)) >= 0) {
        // $FlowFixMe[incompatible-return]: assume body is always available
        return node.ownerDocument.body;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(node) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node)) {
        return node;
    }
    return getScrollParent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(node));
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>listScrollParents
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js [app-client] (ecmascript)");
;
;
;
;
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
        list = [];
    }
    var scrollParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isScrollParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(target)));
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>isTableElement
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
;
function isTableElement(element) {
    return [
        'table',
        'td',
        'th'
    ].indexOf((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element)) >= 0;
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getOffsetParent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isTableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$userAgent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function getTrueOffsetParent(element) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element).position === 'fixed') {
        return null;
    }
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$userAgent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])());
    var isIE = /Trident/i.test((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$userAgent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])());
    if (isIE && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
        if (elementCss.position === 'fixed') {
            return null;
        }
    }
    var currentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isShadowRoot"])(currentNode)) {
        currentNode = currentNode.host;
    }
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(currentNode) && [
        'html',
        'body'
    ].indexOf((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentNode)) < 0){
        var css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || [
            'transform',
            'perspective'
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
            return currentNode;
        } else {
            currentNode = currentNode.parentNode;
        }
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isTableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent).position === 'static'){
        offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent) === 'html' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent) === 'body' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent).position === 'static')) {
        return window;
    }
    return offsetParent || getContainingBlock(element) || window;
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "afterMain": ()=>afterMain,
    "afterRead": ()=>afterRead,
    "afterWrite": ()=>afterWrite,
    "auto": ()=>auto,
    "basePlacements": ()=>basePlacements,
    "beforeMain": ()=>beforeMain,
    "beforeRead": ()=>beforeRead,
    "beforeWrite": ()=>beforeWrite,
    "bottom": ()=>bottom,
    "clippingParents": ()=>clippingParents,
    "end": ()=>end,
    "left": ()=>left,
    "main": ()=>main,
    "modifierPhases": ()=>modifierPhases,
    "placements": ()=>placements,
    "popper": ()=>popper,
    "read": ()=>read,
    "reference": ()=>reference,
    "right": ()=>right,
    "start": ()=>start,
    "top": ()=>top,
    "variationPlacements": ()=>variationPlacements,
    "viewport": ()=>viewport,
    "write": ()=>write
});
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>orderModifiers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)"); // source: https://stackoverflow.com/questions/49875255
;
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) {
                    sort(depModifier);
                }
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) {
            // check for visited object
            sort(modifier);
        }
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modifierPhases"].reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>debounce
});
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) {
            pending = new Promise(function(resolve) {
                Promise.resolve().then(function() {
                    pending = undefined;
                    resolve(fn());
                });
            });
        }
        return pending;
    };
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>mergeByName
});
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createPopper": ()=>createPopper,
    "popperGenerator": ()=>popperGenerator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getCompositeRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getLayoutRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$listScrollParents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$orderModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$mergeByName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
        generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) {
            options = defaultOptions;
        }
        var state = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(reference) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$listScrollParents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(reference) : reference.contextElement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$listScrollParents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(reference.contextElement) : [],
                    popper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$listScrollParents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$orderModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$mergeByName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                });
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) {
                    return;
                }
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getCompositeRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(reference, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper), state.options.strategy === 'fixed'),
                    popper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getLayoutRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === 'function') {
                        state = fn({
                            state: state,
                            options: _options,
                            name: name,
                            instance: instance
                        }) || state;
                    }
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference, popper)) {
            return instance;
        }
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) {
                options.onFirstUpdate(state);
            }
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
                var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                if (typeof effect === 'function') {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules
;
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/eventListeners.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)"); // eslint-disable-next-line import/no-unused-modules
;
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
        scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener('scroll', instance.update, passive);
        });
    }
    if (resize) {
        window.addEventListener('resize', instance.update, passive);
    }
    return function() {
        if (scroll) {
            scrollParents.forEach(function(scrollParent) {
                scrollParent.removeEventListener('scroll', instance.update, passive);
            });
        }
        if (resize) {
            window.removeEventListener('resize', instance.update, passive);
        }
    };
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
};
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getBasePlacement
});
;
function getBasePlacement(placement) {
    return placement.split('-')[0];
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getVariation
});
function getVariation(placement) {
    return placement.split('-')[1];
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getMainAxisFromPlacement
});
function getMainAxisFromPlacement(placement) {
    return [
        'top',
        'bottom'
    ].indexOf(placement) >= 0 ? 'x' : 'y';
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>computeOffsets
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getMainAxisFromPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
;
;
;
;
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement) : null;
    var variation = placement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"]:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"]:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"]:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"]:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getMainAxisFromPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        switch(variation){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"]:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["end"]:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$computeOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js [app-client] (ecmascript)");
;
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$computeOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
};
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "mapToStyles": ()=>mapToStyles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)"); // eslint-disable-next-line import/no-unused-modules
;
;
;
;
;
;
;
;
var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(x * dpr) / dpr || 0,
        y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"];
    var sideY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"];
    var win = window;
    if (adaptive) {
        var offsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';
        if (offsetParent === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper)) {
            offsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent = offsetParent;
        if (placement === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"] || (placement === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"] || placement === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"]) && variation === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["end"]) {
            sideY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"];
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"] || (placement === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"] || placement === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"]) && variation === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["end"]) {
            sideX = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"];
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(popper)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
        placement: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.placement),
        variation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === 'fixed'
    };
    if (state.modifiersData.popperOffsets != null) {
        state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive: adaptive,
            roundOffsets: roundOffsets
        })));
    }
    if (state.modifiersData.arrow != null) {
        state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: 'absolute',
            adaptive: false,
            roundOffsets: roundOffsets
        })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-placement': state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
};
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)"); // This modifier takes the styles prepared by the `computeStyles` modifier
;
;
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element)) {
            return;
        } // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) {
                element.removeAttribute(name);
            } else {
                element.setAttribute(name, value === true ? '' : value);
            }
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = '';
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element)) {
                return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect,
    requires: [
        'computeStyles'
    ]
};
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "distanceAndSkiddingToXY": ()=>distanceAndSkiddingToXY
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)"); // eslint-disable-next-line import/no-unused-modules
;
;
function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement);
    var invertDistance = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"]
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"]
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"].reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: [
        'popperOffsets'
    ],
    fn: offset
};
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getOppositePlacement
});
var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getOppositeVariationPlacement
});
var hash = {
    start: 'end',
    end: 'start'
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getViewportRect
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScrollBarX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isLayoutViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js [app-client] (ecmascript)");
;
;
;
;
function getViewportRect(element, strategy) {
    var win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$isLayoutViewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        if (layoutViewport || !layoutViewport && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScrollBarX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element),
        y: y
    };
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getDocumentRect
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScrollBarX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)"); // Gets the entire size of the scrollable document area, even extending outside
;
;
;
;
;
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var winScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getWindowScrollBarX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element);
    var y = -winScroll.scrollTop;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(body || html).direction === 'rtl') {
        x += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>contains
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
;
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) {
        return true;
    } else if (rootNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isShadowRoot"])(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) {
                return true;
            } // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next)
    } // Give up, the result is false
    return false;
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>rectToClientRect
});
function rectToClientRect(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getClippingRect
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getViewportRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$listScrollParents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$rectToClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function getInnerBoundingClientRect(element, strategy) {
    var rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element, false, strategy === 'fixed');
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viewport"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$rectToClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getViewportRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element, strategy)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$rectToClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$listScrollParents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getParentNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element));
    var canEscapeClipping = [
        'absolute',
        'fixed'
    ].indexOf((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getComputedStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element) : element;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(clipperElement)) {
        return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(clippingParent) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(clippingParent, clipperElement) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getNodeName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(clippingParent) !== 'body';
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.top, accRect.top);
        accRect.right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.right, accRect.right);
        accRect.bottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.bottom, accRect.bottom);
        accRect.left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getFreshSideObject
});
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>mergePaddingObject
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getFreshSideObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js [app-client] (ecmascript)");
;
function mergePaddingObject(paddingObject) {
    return Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getFreshSideObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), paddingObject);
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>expandToHashMap
});
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>detectOverflow
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getClippingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$computeOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$rectToClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$mergePaddingObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$expandToHashMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js [app-client] (ecmascript)"); // eslint-disable-next-line import/no-unused-modules
;
;
;
;
;
;
;
;
;
function detectOverflow(state, options) {
    if (options === void 0) {
        options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clippingParents"] : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["viewport"] : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popper"] : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$mergePaddingObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeof padding !== 'number' ? padding : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$expandToHashMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(padding, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basePlacements"]));
    var altContext = elementContext === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popper"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reference"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popper"];
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getClippingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$instanceOf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(element) ? element : element.contextElement || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getDocumentElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getBoundingClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.elements.reference);
    var popperOffsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$computeOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
    });
    var popperClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$rectToClientRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popper"] && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"]
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"]
            ].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>computeAutoPlacement
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
;
;
;
;
function computeAutoPlacement(state, options) {
    if (options === void 0) {
        options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"] : _options$allowedAutoP;
    var variation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement);
    var placements = variation ? flipVariations ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variationPlacements"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variationPlacements"].filter(function(placement) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement) === variation;
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basePlacements"];
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositeVariationPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$computeAutoPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js [app-client] (ecmascript)"); // eslint-disable-next-line import/no-unused-modules
;
;
;
;
;
;
;
function getExpandedFallbackPlacements(placement) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auto"]) {
        return [];
    }
    var oppositePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositeVariationPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement),
        oppositePlacement,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositeVariationPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
        return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auto"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$computeAutoPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement);
        var isStartVariation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(placement) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"];
        var isVertical = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"]
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"] : isStartVariation ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"];
        if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mainVariationSide);
        }
        var altVariationSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getOppositePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mainVariationSide);
        var checks = [];
        if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
        }
        if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        }
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) {
                    return checks.slice(0, _i).every(function(check) {
                        return check;
                    });
                }
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: [
        'offset'
    ],
    data: {
        _skip: false
    }
};
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>getAltAxis
});
function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "within": ()=>within,
    "withinMaxClamp": ()=>withinMaxClamp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)");
;
function within(min, value, max) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(min, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getMainAxisFromPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getAltAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getLayoutRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getFreshSideObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.placement);
    var variation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getVariation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getMainAxisFromPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(basePlacement);
    var altAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getAltAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) {
        return;
    }
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === 'y' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"];
        var altSide = mainAxis === 'y' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"];
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"] ? referenceRect[len] : popperRect[len];
        var maxLen = variation === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getLayoutRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getFreshSideObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["within"])(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["within"])(tether ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(min, tetherMin) : min, offset, tether ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === 'x' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"];
        var _altSide = mainAxis === 'x' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"];
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === 'y' ? 'height' : 'width';
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"]
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withinMaxClamp"])(_tetherMin, _offset, _tetherMax) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["within"])(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: [
        'offset'
    ]
};
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getLayoutRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getMainAxisFromPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$mergePaddingObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$expandToHashMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)"); // eslint-disable-next-line import/no-unused-modules
;
;
;
;
;
;
;
;
;
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$mergePaddingObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(typeof padding !== 'number' ? padding : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$expandToHashMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(padding, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basePlacements"]));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getBasePlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.placement);
    var axis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$getMainAxisFromPlacement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(basePlacement);
    var isVertical = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"]
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) {
        return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getLayoutRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(arrowElement);
    var minProp = axis === 'y' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"];
    var maxProp = axis === 'y' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"];
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$getOffsetParent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$within$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["within"])(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) {
        return;
    } // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) {
            return;
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$dom$2d$utils$2f$contains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.elements.popper, arrowElement)) {
        return;
    }
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: [
        'popperOffsets'
    ],
    requiresIfExists: [
        'preventOverflow'
    ]
};
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js [app-client] (ecmascript)");
;
;
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
        preventedOffsets = {
            x: 0,
            y: 0
        };
    }
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["top"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["right"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bottom"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$enums$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["left"]
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, {
        elementContext: 'reference'
    });
    var popperAltOverflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$utils$2f$detectOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
const __TURBOPACK__default__export__ = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: [
        'preventOverflow'
    ],
    fn: hide
};
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createPopper": ()=>createPopper,
    "defaultModifiers": ()=>defaultModifiers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$eventListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/eventListeners.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$popperOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$computeStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$applyStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$flip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$preventOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$arrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$hide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
var defaultModifiers = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$eventListeners$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$popperOffsets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$computeStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$applyStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$offset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$flip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$preventOverflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$arrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$hide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
];
var createPopper = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$createPopper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["popperGenerator"])({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules
;
;
;
}),
"[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js [app-client] (ecmascript) <export default as applyStyles>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "applyStyles": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$applyStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$popperjs$2b$core$40$2$2e$11$2e$8$2f$node_modules$2f40$popperjs$2f$core$2f$lib$2f$modifiers$2f$applyStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js [app-client] (ecmascript)");
}),
}]);

//# sourceMappingURL=23d63_%40popperjs_core_lib_8be2f6b1._.js.map