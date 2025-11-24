(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@xyflow+react@12.6.0_@types+react@19.1.2_immer@10.1.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Background": ()=>Background,
    "BackgroundVariant": ()=>BackgroundVariant,
    "BaseEdge": ()=>BaseEdge,
    "BezierEdge": ()=>BezierEdge,
    "ControlButton": ()=>ControlButton,
    "Controls": ()=>Controls,
    "EdgeLabelRenderer": ()=>EdgeLabelRenderer,
    "EdgeText": ()=>EdgeText,
    "Handle": ()=>Handle,
    "MiniMap": ()=>MiniMap,
    "NodeResizeControl": ()=>NodeResizeControl,
    "NodeResizer": ()=>NodeResizer,
    "NodeToolbar": ()=>NodeToolbar,
    "Panel": ()=>Panel,
    "ReactFlow": ()=>index,
    "ReactFlowProvider": ()=>ReactFlowProvider,
    "SimpleBezierEdge": ()=>SimpleBezierEdge,
    "SmoothStepEdge": ()=>SmoothStepEdge,
    "StepEdge": ()=>StepEdge,
    "StraightEdge": ()=>StraightEdge,
    "ViewportPortal": ()=>ViewportPortal,
    "applyEdgeChanges": ()=>applyEdgeChanges,
    "applyNodeChanges": ()=>applyNodeChanges,
    "getSimpleBezierPath": ()=>getSimpleBezierPath,
    "isEdge": ()=>isEdge,
    "isNode": ()=>isNode,
    "useConnection": ()=>useConnection,
    "useEdges": ()=>useEdges,
    "useEdgesState": ()=>useEdgesState,
    "useHandleConnections": ()=>useHandleConnections,
    "useInternalNode": ()=>useInternalNode,
    "useKeyPress": ()=>useKeyPress,
    "useNodeConnections": ()=>useNodeConnections,
    "useNodeId": ()=>useNodeId,
    "useNodes": ()=>useNodes,
    "useNodesData": ()=>useNodesData,
    "useNodesInitialized": ()=>useNodesInitialized,
    "useNodesState": ()=>useNodesState,
    "useOnSelectionChange": ()=>useOnSelectionChange,
    "useOnViewportChange": ()=>useOnViewportChange,
    "useReactFlow": ()=>useReactFlow,
    "useStore": ()=>useStore,
    "useStoreApi": ()=>useStoreApi,
    "useUpdateNodeInternals": ()=>useUpdateNodeInternals,
    "useViewport": ()=>useViewport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/classcat@5.0.5/node_modules/classcat/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@xyflow+system@0.0.57/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$traditional$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@4.5.6_@types+react@19.1.2_immer@10.1.1_react@19.1.0/node_modules/zustand/esm/traditional.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@4.5.6_@types+react@19.1.2_immer@10.1.1_react@19.1.0/node_modules/zustand/esm/shallow.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const StoreContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const Provider$1 = StoreContext.Provider;
const zustandErrorMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorMessages"]['error001']();
/**
 * This hook can be used to subscribe to internal state changes of the React Flow
 * component. The `useStore` hook is re-exported from the [Zustand](https://github.com/pmndrs/zustand)
 * state management library, so you should check out their docs for more details.
 *
 * @public
 * @param selector - A selector function that returns a slice of the flow's internal state.
 * Extracting or transforming just the state you need is a good practice to avoid unnecessary
 * re-renders.
 * @param equalityFn - A function to compare the previous and next value. This is incredibly useful
 * for preventing unnecessary re-renders. Good sensible defaults are using `Object.is` or importing
 * `zustand/shallow`, but you can be as granular as you like.
 * @returns The selected state slice.
 *
 * @example
 * ```ts
 * const nodes = useStore((state) => state.nodes);
 * ```
 *
 * @remarks This hook should only be used if there is no other way to access the internal
 * state. For many of the common use cases, there are dedicated hooks available
 * such as {@link useReactFlow}, {@link useViewport}, etc.
 */ function useStore(selector, equalityFn) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
    if (store === null) {
        throw new Error(zustandErrorMessage);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$traditional$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStoreWithEqualityFn"])(store, selector, equalityFn);
}
/**
 * In some cases, you might need to access the store directly. This hook returns the store object which can be used on demand to access the state or dispatch actions.
 *
 * @returns The store object.
 * @example
 * ```ts
 * const store = useStoreApi();
 * ```
 *
 * @remarks This hook should only be used if there is no other way to access the internal
 * state. For many of the common use cases, there are dedicated hooks available
 * such as {@link useReactFlow}, {@link useViewport}, etc.
 */ function useStoreApi() {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
    if (store === null) {
        throw new Error(zustandErrorMessage);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useStoreApi.useMemo": ()=>({
                getState: store.getState,
                setState: store.setState,
                subscribe: store.subscribe
            })
    }["useStoreApi.useMemo"], [
        store
    ]);
}
const style = {
    display: 'none'
};
const ariaLiveStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0px, 0px, 0px, 0px)',
    clipPath: 'inset(100%)'
};
const ARIA_NODE_DESC_KEY = 'react-flow__node-desc';
const ARIA_EDGE_DESC_KEY = 'react-flow__edge-desc';
const ARIA_LIVE_MESSAGE = 'react-flow__aria-live';
const selector$o = (s)=>s.ariaLiveMessage;
function AriaLiveMessage(param) {
    let { rfId } = param;
    const ariaLiveMessage = useStore(selector$o);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        id: "".concat(ARIA_LIVE_MESSAGE, "-").concat(rfId),
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: ariaLiveStyle,
        children: ariaLiveMessage
    });
}
function A11yDescriptions(param) {
    let { rfId, disableKeyboardA11y } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                id: "".concat(ARIA_NODE_DESC_KEY, "-").concat(rfId),
                style: style,
                children: [
                    "Press enter or space to select a node.",
                    !disableKeyboardA11y && 'You can then use the arrow keys to move the node around.',
                    " Press delete to remove it and escape to cancel.",
                    ' '
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                id: "".concat(ARIA_EDGE_DESC_KEY, "-").concat(rfId),
                style: style,
                children: "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."
            }),
            !disableKeyboardA11y && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AriaLiveMessage, {
                rfId: rfId
            })
        ]
    });
}
const selector$n = (s)=>s.userSelectionActive ? 'none' : 'all';
/**
 * The `<Panel />` component helps you position content above the viewport.
 * It is used internally by the [`<MiniMap />`](/api-reference/components/minimap)
 * and [`<Controls />`](/api-reference/components/controls) components.
 *
 * @public
 *
 * @example
 * ```jsx
 *import { ReactFlow, Background, Panel } from '@xyflow/react';
 *
 *export default function Flow() {
 *  return (
 *    <ReactFlow nodes={[]} fitView>
 *      <Panel position="top-left">top-left</Panel>
 *      <Panel position="top-center">top-center</Panel>
 *      <Panel position="top-right">top-right</Panel>
 *      <Panel position="bottom-left">bottom-left</Panel>
 *      <Panel position="bottom-center">bottom-center</Panel>
 *      <Panel position="bottom-right">bottom-right</Panel>
 *    </ReactFlow>
 *  );
 *}
 *```
 */ const Panel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { position = 'top-left', children, className, style, ...rest } = param;
    const pointerEvents = useStore(selector$n);
    const positionClasses = "".concat(position).split('-');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__panel',
            className,
            ...positionClasses
        ]),
        style: {
            ...style,
            pointerEvents
        },
        ref: ref,
        ...rest,
        children: children
    });
});
Panel.displayName = 'Panel';
function Attribution(param) {
    let { proOptions, position = 'bottom-right' } = param;
    if (proOptions === null || proOptions === void 0 ? void 0 : proOptions.hideAttribution) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Panel, {
        position: position,
        className: "react-flow__attribution",
        "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", {
            href: "https://reactflow.dev",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "React Flow attribution",
            children: "React Flow"
        })
    });
}
const selector$m = (s)=>{
    const selectedNodes = [];
    const selectedEdges = [];
    for (const [, node] of s.nodeLookup){
        if (node.selected) {
            selectedNodes.push(node.internals.userNode);
        }
    }
    for (const [, edge] of s.edgeLookup){
        if (edge.selected) {
            selectedEdges.push(edge);
        }
    }
    return {
        selectedNodes,
        selectedEdges
    };
};
const selectId = (obj)=>obj.id;
function areEqual(a, b) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"])(a.selectedNodes.map(selectId), b.selectedNodes.map(selectId)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"])(a.selectedEdges.map(selectId), b.selectedEdges.map(selectId));
}
function SelectionListenerInner(param) {
    let { onSelectionChange } = param;
    const store = useStoreApi();
    const { selectedNodes, selectedEdges } = useStore(selector$m, areEqual);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectionListenerInner.useEffect": ()=>{
            const params = {
                nodes: selectedNodes,
                edges: selectedEdges
            };
            onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange(params);
            store.getState().onSelectionChangeHandlers.forEach({
                "SelectionListenerInner.useEffect": (fn)=>fn(params)
            }["SelectionListenerInner.useEffect"]);
        }
    }["SelectionListenerInner.useEffect"], [
        selectedNodes,
        selectedEdges,
        onSelectionChange
    ]);
    return null;
}
const changeSelector = (s)=>!!s.onSelectionChangeHandlers;
function SelectionListener(param) {
    let { onSelectionChange } = param;
    const storeHasSelectionChangeHandlers = useStore(changeSelector);
    if (onSelectionChange || storeHasSelectionChangeHandlers) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectionListenerInner, {
            onSelectionChange: onSelectionChange
        });
    }
    return null;
}
const defaultNodeOrigin = [
    0,
    0
];
const defaultViewport = {
    x: 0,
    y: 0,
    zoom: 1
};
/*
 * This component helps us to update the store with the values coming from the user.
 * We distinguish between values we can update directly with `useDirectStoreUpdater` (like `snapGrid`)
 * and values that have a dedicated setter function in the store (like `setNodes`).
 */ // These fields exist in the global store, and we need to keep them up to date
const reactFlowFieldsToTrack = [
    'nodes',
    'edges',
    'defaultNodes',
    'defaultEdges',
    'onConnect',
    'onConnectStart',
    'onConnectEnd',
    'onClickConnectStart',
    'onClickConnectEnd',
    'nodesDraggable',
    'nodesConnectable',
    'nodesFocusable',
    'edgesFocusable',
    'edgesReconnectable',
    'elevateNodesOnSelect',
    'elevateEdgesOnSelect',
    'minZoom',
    'maxZoom',
    'nodeExtent',
    'onNodesChange',
    'onEdgesChange',
    'elementsSelectable',
    'connectionMode',
    'snapGrid',
    'snapToGrid',
    'translateExtent',
    'connectOnClick',
    'defaultEdgeOptions',
    'fitView',
    'fitViewOptions',
    'onNodesDelete',
    'onEdgesDelete',
    'onDelete',
    'onNodeDrag',
    'onNodeDragStart',
    'onNodeDragStop',
    'onSelectionDrag',
    'onSelectionDragStart',
    'onSelectionDragStop',
    'onMoveStart',
    'onMove',
    'onMoveEnd',
    'noPanClassName',
    'nodeOrigin',
    'autoPanOnConnect',
    'autoPanOnNodeDrag',
    'onError',
    'connectionRadius',
    'isValidConnection',
    'selectNodesOnDrag',
    'nodeDragThreshold',
    'onBeforeDelete',
    'debug',
    'autoPanSpeed',
    'paneClickDistance'
];
// rfId doesn't exist in ReactFlowProps, but it's one of the fields we want to update
const fieldsToTrack = [
    ...reactFlowFieldsToTrack,
    'rfId'
];
const selector$l = (s)=>({
        setNodes: s.setNodes,
        setEdges: s.setEdges,
        setMinZoom: s.setMinZoom,
        setMaxZoom: s.setMaxZoom,
        setTranslateExtent: s.setTranslateExtent,
        setNodeExtent: s.setNodeExtent,
        reset: s.reset,
        setDefaultNodesAndEdges: s.setDefaultNodesAndEdges,
        setPaneClickDistance: s.setPaneClickDistance
    });
const initPrevValues = {
    /*
     * these are values that are also passed directly to other components
     * than the StoreUpdater. We can reduce the number of setStore calls
     * by setting the same values here as prev fields.
     */ translateExtent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infiniteExtent"],
    nodeOrigin: defaultNodeOrigin,
    minZoom: 0.5,
    maxZoom: 2,
    elementsSelectable: true,
    noPanClassName: 'nopan',
    rfId: '1',
    paneClickDistance: 0
};
function StoreUpdater(props) {
    const { setNodes, setEdges, setMinZoom, setMaxZoom, setTranslateExtent, setNodeExtent, reset, setDefaultNodesAndEdges, setPaneClickDistance } = useStore(selector$l, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const store = useStoreApi();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreUpdater.useEffect": ()=>{
            setDefaultNodesAndEdges(props.defaultNodes, props.defaultEdges);
            return ({
                "StoreUpdater.useEffect": ()=>{
                    // when we reset the store we also need to reset the previous fields
                    previousFields.current = initPrevValues;
                    reset();
                }
            })["StoreUpdater.useEffect"];
        }
    }["StoreUpdater.useEffect"], []);
    const previousFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initPrevValues);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreUpdater.useEffect": ()=>{
            for (const fieldName of fieldsToTrack){
                const fieldValue = props[fieldName];
                const previousFieldValue = previousFields.current[fieldName];
                if (fieldValue === previousFieldValue) continue;
                if (typeof props[fieldName] === 'undefined') continue;
                // Custom handling with dedicated setters for some fields
                if (fieldName === 'nodes') setNodes(fieldValue);
                else if (fieldName === 'edges') setEdges(fieldValue);
                else if (fieldName === 'minZoom') setMinZoom(fieldValue);
                else if (fieldName === 'maxZoom') setMaxZoom(fieldValue);
                else if (fieldName === 'translateExtent') setTranslateExtent(fieldValue);
                else if (fieldName === 'nodeExtent') setNodeExtent(fieldValue);
                else if (fieldName === 'paneClickDistance') setPaneClickDistance(fieldValue);
                else if (fieldName === 'fitView') store.setState({
                    fitViewQueued: fieldValue
                });
                else if (fieldName === 'fitViewOptions') store.setState({
                    fitViewOptions: fieldValue
                });
                else store.setState({
                    [fieldName]: fieldValue
                });
            }
            previousFields.current = props;
        }
    }["StoreUpdater.useEffect"], // Only re-run the effect if one of the fields we track changes
    fieldsToTrack.map({
        "StoreUpdater.useEffect": (fieldName)=>props[fieldName]
    }["StoreUpdater.useEffect"]));
    return null;
}
function getMediaQuery() {
    if (typeof window === 'undefined' || !window.matchMedia) {
        return null;
    }
    return window.matchMedia('(prefers-color-scheme: dark)');
}
/**
 * Hook for receiving the current color mode class 'dark' or 'light'.
 *
 * @internal
 * @param colorMode - The color mode to use ('dark', 'light' or 'system')
 */ function useColorModeClass(colorMode) {
    var _getMediaQuery;
    const [colorModeClass, setColorModeClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(colorMode === 'system' ? null : colorMode);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useColorModeClass.useEffect": ()=>{
            if (colorMode !== 'system') {
                setColorModeClass(colorMode);
                return;
            }
            const mediaQuery = getMediaQuery();
            const updateColorModeClass = {
                "useColorModeClass.useEffect.updateColorModeClass": ()=>setColorModeClass((mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.matches) ? 'dark' : 'light')
            }["useColorModeClass.useEffect.updateColorModeClass"];
            updateColorModeClass();
            mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.addEventListener('change', updateColorModeClass);
            return ({
                "useColorModeClass.useEffect": ()=>{
                    mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.removeEventListener('change', updateColorModeClass);
                }
            })["useColorModeClass.useEffect"];
        }
    }["useColorModeClass.useEffect"], [
        colorMode
    ]);
    return colorModeClass !== null ? colorModeClass : ((_getMediaQuery = getMediaQuery()) === null || _getMediaQuery === void 0 ? void 0 : _getMediaQuery.matches) ? 'dark' : 'light';
}
const defaultDoc = typeof document !== 'undefined' ? document : null;
/**
 * This hook lets you listen for specific key codes and tells you whether they are
 * currently pressed or not.
 *
 * @public
 * @param options - Options
 *
 * @example
 * ```tsx
 *import { useKeyPress } from '@xyflow/react';
 *
 *export default function () {
 *  const spacePressed = useKeyPress('Space');
 *  const cmdAndSPressed = useKeyPress(['Meta+s', 'Strg+s']);
 *
 *  return (
 *    <div>
 *     {spacePressed && <p>Space pressed!</p>}
 *     {cmdAndSPressed && <p>Cmd + S pressed!</p>}
 *    </div>
 *  );
 *}
 *```
 */ function useKeyPress() {
    let /**
 * The key code (string or array of strings) specifies which key(s) should trigger
 * an action.
 *
 * A **string** can represent:
 * - A **single key**, e.g. `'a'`
 * - A **key combination**, using `'+'` to separate keys, e.g. `'a+d'`
 *
 * An  **array of strings** represents **multiple possible key inputs**. For example, `['a', 'd+s']`
 * means the user can press either the single key `'a'` or the combination of `'d'` and `'s'`.
 * @default null
 */ keyCode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        target: defaultDoc,
        actInsideInputWithModifier: true
    };
    const [keyPressed, setKeyPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // we need to remember if a modifier key is pressed in order to track it
    const modifierPressed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // we need to remember the pressed keys in order to support combinations
    const pressedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set([]));
    /*
     * keyCodes = array with single keys [['a']] or key combinations [['a', 's']]
     * keysToWatch = array with all keys flattened ['a', 'd', 'ShiftLeft']
     * used to check if we store event.code or event.key. When the code is in the list of keysToWatch
     * we use the code otherwise the key. Explainer: When you press the left "command" key, the code is "MetaLeft"
     * and the key is "Meta". We want users to be able to pass keys and codes so we assume that the key is meant when
     * we can't find it in the list of keysToWatch.
     */ const [keyCodes, keysToWatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useKeyPress.useMemo": ()=>{
            if (keyCode !== null) {
                const keyCodeArr = Array.isArray(keyCode) ? keyCode : [
                    keyCode
                ];
                const keys = keyCodeArr.filter({
                    "useKeyPress.useMemo.keys": (kc)=>typeof kc === 'string'
                }["useKeyPress.useMemo.keys"])/*
                 * we first replace all '+' with '\n'  which we will use to split the keys on
                 * then we replace '\n\n' with '\n+', this way we can also support the combination 'key++'
                 * in the end we simply split on '\n' to get the key array
                 */ .map({
                    "useKeyPress.useMemo.keys": (kc)=>kc.replace('+', '\n').replace('\n\n', '\n+').split('\n')
                }["useKeyPress.useMemo.keys"]);
                const keysFlat = keys.reduce({
                    "useKeyPress.useMemo.keysFlat": (res, item)=>res.concat(...item)
                }["useKeyPress.useMemo.keysFlat"], []);
                return [
                    keys,
                    keysFlat
                ];
            }
            return [
                [],
                []
            ];
        }
    }["useKeyPress.useMemo"], [
        keyCode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKeyPress.useEffect": ()=>{
            const target = (options === null || options === void 0 ? void 0 : options.target) || defaultDoc;
            if (keyCode !== null) {
                const downHandler = {
                    "useKeyPress.useEffect.downHandler": (event)=>{
                        modifierPressed.current = event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;
                        const preventAction = (!modifierPressed.current || modifierPressed.current && !options.actInsideInputWithModifier) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInputDOMNode"])(event);
                        if (preventAction) {
                            return false;
                        }
                        const keyOrCode = useKeyOrCode(event.code, keysToWatch);
                        pressedKeys.current.add(event[keyOrCode]);
                        if (isMatchingKey(keyCodes, pressedKeys.current, false)) {
                            var _event_composedPath, _event_composedPath1;
                            const target = ((_event_composedPath1 = event.composedPath) === null || _event_composedPath1 === void 0 ? void 0 : (_event_composedPath = _event_composedPath1.call(event)) === null || _event_composedPath === void 0 ? void 0 : _event_composedPath[0]) || event.target;
                            const isInteractiveElement = (target === null || target === void 0 ? void 0 : target.nodeName) === 'BUTTON' || (target === null || target === void 0 ? void 0 : target.nodeName) === 'A';
                            if (options.preventDefault !== false && (modifierPressed.current || !isInteractiveElement)) {
                                event.preventDefault();
                            }
                            setKeyPressed(true);
                        }
                    }
                }["useKeyPress.useEffect.downHandler"];
                const upHandler = {
                    "useKeyPress.useEffect.upHandler": (event)=>{
                        const keyOrCode = useKeyOrCode(event.code, keysToWatch);
                        if (isMatchingKey(keyCodes, pressedKeys.current, true)) {
                            setKeyPressed(false);
                            pressedKeys.current.clear();
                        } else {
                            pressedKeys.current.delete(event[keyOrCode]);
                        }
                        // fix for Mac: when cmd key is pressed, keyup is not triggered for any other key, see: https://stackoverflow.com/questions/27380018/when-cmd-key-is-kept-pressed-keyup-is-not-triggered-for-any-other-key
                        if (event.key === 'Meta') {
                            pressedKeys.current.clear();
                        }
                        modifierPressed.current = false;
                    }
                }["useKeyPress.useEffect.upHandler"];
                const resetHandler = {
                    "useKeyPress.useEffect.resetHandler": ()=>{
                        pressedKeys.current.clear();
                        setKeyPressed(false);
                    }
                }["useKeyPress.useEffect.resetHandler"];
                target === null || target === void 0 ? void 0 : target.addEventListener('keydown', downHandler);
                target === null || target === void 0 ? void 0 : target.addEventListener('keyup', upHandler);
                window.addEventListener('blur', resetHandler);
                window.addEventListener('contextmenu', resetHandler);
                return ({
                    "useKeyPress.useEffect": ()=>{
                        target === null || target === void 0 ? void 0 : target.removeEventListener('keydown', downHandler);
                        target === null || target === void 0 ? void 0 : target.removeEventListener('keyup', upHandler);
                        window.removeEventListener('blur', resetHandler);
                        window.removeEventListener('contextmenu', resetHandler);
                    }
                })["useKeyPress.useEffect"];
            }
        }
    }["useKeyPress.useEffect"], [
        keyCode,
        setKeyPressed
    ]);
    return keyPressed;
}
// utils
function isMatchingKey(keyCodes, pressedKeys, isUp) {
    return keyCodes/*
         * we only want to compare same sizes of keyCode definitions
         * and pressed keys. When the user specified 'Meta' as a key somewhere
         * this would also be truthy without this filter when user presses 'Meta' + 'r'
         */ .filter((keys)=>isUp || keys.length === pressedKeys.size)/*
         * since we want to support multiple possibilities only one of the
         * combinations need to be part of the pressed keys
         */ .some((keys)=>keys.every((k)=>pressedKeys.has(k)));
}
function useKeyOrCode(eventCode, keysToWatch) {
    return keysToWatch.includes(eventCode) ? 'code' : 'key';
}
/**
 * Hook for getting viewport helper functions.
 *
 * @internal
 * @returns viewport helper functions
 */ const useViewportHelper = ()=>{
    const store = useStoreApi();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useViewportHelper.useMemo": ()=>{
            return {
                zoomIn: ({
                    "useViewportHelper.useMemo": (options)=>{
                        const { panZoom } = store.getState();
                        return panZoom ? panZoom.scaleBy(1.2, {
                            duration: options === null || options === void 0 ? void 0 : options.duration
                        }) : Promise.resolve(false);
                    }
                })["useViewportHelper.useMemo"],
                zoomOut: ({
                    "useViewportHelper.useMemo": (options)=>{
                        const { panZoom } = store.getState();
                        return panZoom ? panZoom.scaleBy(1 / 1.2, {
                            duration: options === null || options === void 0 ? void 0 : options.duration
                        }) : Promise.resolve(false);
                    }
                })["useViewportHelper.useMemo"],
                zoomTo: ({
                    "useViewportHelper.useMemo": (zoomLevel, options)=>{
                        const { panZoom } = store.getState();
                        return panZoom ? panZoom.scaleTo(zoomLevel, {
                            duration: options === null || options === void 0 ? void 0 : options.duration
                        }) : Promise.resolve(false);
                    }
                })["useViewportHelper.useMemo"],
                getZoom: ({
                    "useViewportHelper.useMemo": ()=>store.getState().transform[2]
                })["useViewportHelper.useMemo"],
                setViewport: ({
                    "useViewportHelper.useMemo": async (viewport, options)=>{
                        const { transform: [tX, tY, tZoom], panZoom } = store.getState();
                        if (!panZoom) {
                            return Promise.resolve(false);
                        }
                        var _viewport_x, _viewport_y, _viewport_zoom;
                        await panZoom.setViewport({
                            x: (_viewport_x = viewport.x) !== null && _viewport_x !== void 0 ? _viewport_x : tX,
                            y: (_viewport_y = viewport.y) !== null && _viewport_y !== void 0 ? _viewport_y : tY,
                            zoom: (_viewport_zoom = viewport.zoom) !== null && _viewport_zoom !== void 0 ? _viewport_zoom : tZoom
                        }, {
                            duration: options === null || options === void 0 ? void 0 : options.duration
                        });
                        return Promise.resolve(true);
                    }
                })["useViewportHelper.useMemo"],
                getViewport: ({
                    "useViewportHelper.useMemo": ()=>{
                        const [x, y, zoom] = store.getState().transform;
                        return {
                            x,
                            y,
                            zoom
                        };
                    }
                })["useViewportHelper.useMemo"],
                setCenter: ({
                    "useViewportHelper.useMemo": async (x, y, options)=>{
                        const { width, height, maxZoom, panZoom } = store.getState();
                        const nextZoom = typeof (options === null || options === void 0 ? void 0 : options.zoom) !== 'undefined' ? options.zoom : maxZoom;
                        const centerX = width / 2 - x * nextZoom;
                        const centerY = height / 2 - y * nextZoom;
                        if (!panZoom) {
                            return Promise.resolve(false);
                        }
                        await panZoom.setViewport({
                            x: centerX,
                            y: centerY,
                            zoom: nextZoom
                        }, {
                            duration: options === null || options === void 0 ? void 0 : options.duration
                        });
                        return Promise.resolve(true);
                    }
                })["useViewportHelper.useMemo"],
                fitBounds: ({
                    "useViewportHelper.useMemo": async (bounds, options)=>{
                        const { width, height, minZoom, maxZoom, panZoom } = store.getState();
                        var _options_padding;
                        const viewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewportForBounds"])(bounds, width, height, minZoom, maxZoom, (_options_padding = options === null || options === void 0 ? void 0 : options.padding) !== null && _options_padding !== void 0 ? _options_padding : 0.1);
                        if (!panZoom) {
                            return Promise.resolve(false);
                        }
                        await panZoom.setViewport(viewport, {
                            duration: options === null || options === void 0 ? void 0 : options.duration
                        });
                        return Promise.resolve(true);
                    }
                })["useViewportHelper.useMemo"],
                screenToFlowPosition: ({
                    "useViewportHelper.useMemo": function(clientPosition) {
                        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        const { transform, snapGrid, snapToGrid, domNode } = store.getState();
                        if (!domNode) {
                            return clientPosition;
                        }
                        const { x: domX, y: domY } = domNode.getBoundingClientRect();
                        const correctedPosition = {
                            x: clientPosition.x - domX,
                            y: clientPosition.y - domY
                        };
                        var _options_snapGrid;
                        const _snapGrid = (_options_snapGrid = options.snapGrid) !== null && _options_snapGrid !== void 0 ? _options_snapGrid : snapGrid;
                        var _options_snapToGrid;
                        const _snapToGrid = (_options_snapToGrid = options.snapToGrid) !== null && _options_snapToGrid !== void 0 ? _options_snapToGrid : snapToGrid;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointToRendererPoint"])(correctedPosition, transform, _snapToGrid, _snapGrid);
                    }
                })["useViewportHelper.useMemo"],
                flowToScreenPosition: ({
                    "useViewportHelper.useMemo": (flowPosition)=>{
                        const { transform, domNode } = store.getState();
                        if (!domNode) {
                            return flowPosition;
                        }
                        const { x: domX, y: domY } = domNode.getBoundingClientRect();
                        const rendererPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rendererPointToPoint"])(flowPosition, transform);
                        return {
                            x: rendererPosition.x + domX,
                            y: rendererPosition.y + domY
                        };
                    }
                })["useViewportHelper.useMemo"]
            };
        }
    }["useViewportHelper.useMemo"], []);
};
/*
 * This function applies changes to nodes or edges that are triggered by React Flow internally.
 * When you drag a node for example, React Flow will send a position change update.
 * This function then applies the changes and returns the updated elements.
 */ function applyChanges(changes, elements) {
    const updatedElements = [];
    /*
     * By storing a map of changes for each element, we can a quick lookup as we
     * iterate over the elements array!
     */ const changesMap = new Map();
    const addItemChanges = [];
    for (const change of changes){
        if (change.type === 'add') {
            addItemChanges.push(change);
            continue;
        } else if (change.type === 'remove' || change.type === 'replace') {
            /*
             * For a 'remove' change we can safely ignore any other changes queued for
             * the same element, it's going to be removed anyway!
             */ changesMap.set(change.id, [
                change
            ]);
        } else {
            const elementChanges = changesMap.get(change.id);
            if (elementChanges) {
                /*
                 * If we have some changes queued already, we can do a mutable update of
                 * that array and save ourselves some copying.
                 */ elementChanges.push(change);
            } else {
                changesMap.set(change.id, [
                    change
                ]);
            }
        }
    }
    for (const element of elements){
        const changes = changesMap.get(element.id);
        /*
         * When there are no changes for an element we can just push it unmodified,
         * no need to copy it.
         */ if (!changes) {
            updatedElements.push(element);
            continue;
        }
        // If we have a 'remove' change queued, it'll be the only change in the array
        if (changes[0].type === 'remove') {
            continue;
        }
        if (changes[0].type === 'replace') {
            updatedElements.push({
                ...changes[0].item
            });
            continue;
        }
        /**
         * For other types of changes, we want to start with a shallow copy of the
         * object so React knows this element has changed. Sequential changes will
         * each _mutate_ this object, so there's only ever one copy.
         */ const updatedElement = {
            ...element
        };
        for (const change of changes){
            applyChange(change, updatedElement);
        }
        updatedElements.push(updatedElement);
    }
    /*
     * we need to wait for all changes to be applied before adding new items
     * to be able to add them at the correct index
     */ if (addItemChanges.length) {
        addItemChanges.forEach((change)=>{
            if (change.index !== undefined) {
                updatedElements.splice(change.index, 0, {
                    ...change.item
                });
            } else {
                updatedElements.push({
                    ...change.item
                });
            }
        });
    }
    return updatedElements;
}
// Applies a single change to an element. This is a *mutable* update.
function applyChange(change, element) {
    switch(change.type){
        case 'select':
            {
                element.selected = change.selected;
                break;
            }
        case 'position':
            {
                if (typeof change.position !== 'undefined') {
                    element.position = change.position;
                }
                if (typeof change.dragging !== 'undefined') {
                    element.dragging = change.dragging;
                }
                break;
            }
        case 'dimensions':
            {
                if (typeof change.dimensions !== 'undefined') {
                    var _element;
                    var _measured;
                    (_measured = (_element = element).measured) !== null && _measured !== void 0 ? _measured : _element.measured = {};
                    element.measured.width = change.dimensions.width;
                    element.measured.height = change.dimensions.height;
                    if (change.setAttributes) {
                        if (change.setAttributes === true || change.setAttributes === 'width') {
                            element.width = change.dimensions.width;
                        }
                        if (change.setAttributes === true || change.setAttributes === 'height') {
                            element.height = change.dimensions.height;
                        }
                    }
                }
                if (typeof change.resizing === 'boolean') {
                    element.resizing = change.resizing;
                }
                break;
            }
    }
}
/**
 * Drop in function that applies node changes to an array of nodes.
 * @public
 * @param changes - Array of changes to apply.
 * @param nodes - Array of nodes to apply the changes to.
 * @returns Array of updated nodes.
 * @example
 *```tsx
 *import { useState, useCallback } from 'react';
 *import { ReactFlow, applyNodeChanges, type Node, type Edge, type OnNodesChange } from '@xyflow/react';
 *
 *export default function Flow() {
 *  const [nodes, setNodes] = useState<Node[]>([]);
 *  const [edges, setEdges] = useState<Edge[]>([]);
 *  const onNodesChange: OnNodesChange = useCallback(
 *    (changes) => {
 *      setNodes((oldNodes) => applyNodeChanges(changes, oldNodes));
 *    },
 *    [setNodes],
 *  );
 *
 *  return (
 *    <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} />
 *  );
 *}
 *```
 * @remarks Various events on the <ReactFlow /> component can produce an {@link NodeChange}
 * that describes how to update the edges of your flow in some way.
 * If you don't need any custom behaviour, this util can be used to take an array
 * of these changes and apply them to your edges.
 */ function applyNodeChanges(changes, nodes) {
    return applyChanges(changes, nodes);
}
/**
 * Drop in function that applies edge changes to an array of edges.
 * @public
 * @param changes - Array of changes to apply.
 * @param edges - Array of edge to apply the changes to.
 * @returns Array of updated edges.
 * @example
 * ```tsx
 *import { useState, useCallback } from 'react';
 *import { ReactFlow, applyEdgeChanges } from '@xyflow/react';
 *
 *export default function Flow() {
 *  const [nodes, setNodes] = useState([]);
 *  const [edges, setEdges] = useState([]);
 *  const onEdgesChange = useCallback(
 *    (changes) => {
 *      setEdges((oldEdges) => applyEdgeChanges(changes, oldEdges));
 *    },
 *    [setEdges],
 *  );
 *
 *  return (
 *    <ReactFlow nodes={nodes} edges={edges} onEdgesChange={onEdgesChange} />
 *  );
 *}
 *```
 * @remarks Various events on the <ReactFlow /> component can produce an {@link EdgeChange}
 * that describes how to update the edges of your flow in some way.
 * If you don't need any custom behaviour, this util can be used to take an array
 * of these changes and apply them to your edges.
 */ function applyEdgeChanges(changes, edges) {
    return applyChanges(changes, edges);
}
function createSelectionChange(id, selected) {
    return {
        id,
        type: 'select',
        selected
    };
}
function getSelectionChanges(items) {
    let selectedIds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Set(), mutateItem = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    const changes = [];
    for (const [id, item] of items){
        const willBeSelected = selectedIds.has(id);
        // we don't want to set all items to selected=false on the first selection
        if (!(item.selected === undefined && !willBeSelected) && item.selected !== willBeSelected) {
            if (mutateItem) {
                /*
                 * this hack is needed for nodes. When the user dragged a node, it's selected.
                 * When another node gets dragged, we need to deselect the previous one,
                 * in order to have only one selected node at a time - the onNodesChange callback comes too late here :/
                 */ item.selected = willBeSelected;
            }
            changes.push(createSelectionChange(item.id, willBeSelected));
        }
    }
    return changes;
}
function getElementsDiffChanges(param) {
    let { items = [], lookup } = param;
    const changes = [];
    const itemsLookup = new Map(items.map((item)=>[
            item.id,
            item
        ]));
    for (const [index, item] of items.entries()){
        var _lookupItem_internals;
        const lookupItem = lookup.get(item.id);
        var _lookupItem_internals_userNode;
        const storeItem = (_lookupItem_internals_userNode = lookupItem === null || lookupItem === void 0 ? void 0 : (_lookupItem_internals = lookupItem.internals) === null || _lookupItem_internals === void 0 ? void 0 : _lookupItem_internals.userNode) !== null && _lookupItem_internals_userNode !== void 0 ? _lookupItem_internals_userNode : lookupItem;
        if (storeItem !== undefined && storeItem !== item) {
            changes.push({
                id: item.id,
                item: item,
                type: 'replace'
            });
        }
        if (storeItem === undefined) {
            changes.push({
                item: item,
                type: 'add',
                index
            });
        }
    }
    for (const [id] of lookup){
        const nextNode = itemsLookup.get(id);
        if (nextNode === undefined) {
            changes.push({
                id,
                type: 'remove'
            });
        }
    }
    return changes;
}
function elementToRemoveChange(item) {
    return {
        id: item.id,
        type: 'remove'
    };
}
/**
 * Test whether an object is usable as an [`Node`](/api-reference/types/node).
 * In TypeScript this is a type guard that will narrow the type of whatever you pass in to
 * [`Node`](/api-reference/types/node) if it returns `true`.
 *
 * @public
 * @remarks In TypeScript this is a type guard that will narrow the type of whatever you pass in to Node if it returns true
 * @param element - The element to test.
 * @returns Tests whether the provided value can be used as a `Node`. If you're using TypeScript,
 * this function acts as a type guard and will narrow the type of the value to `Node` if it returns
 * `true`.
 *
 * @example
 * ```js
 *import { isNode } from '@xyflow/react';
 *
 *if (isNode(node)) {
 * // ...
 *}
 *```
 */ const isNode = (element)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeBase"])(element);
/**
 * Test whether an object is usable as an [`Edge`](/api-reference/types/edge).
 * In TypeScript this is a type guard that will narrow the type of whatever you pass in to
 * [`Edge`](/api-reference/types/edge) if it returns `true`.
 *
 * @public
 * @remarks In TypeScript this is a type guard that will narrow the type of whatever you pass in to Edge if it returns true
 * @param element - The element to test
 * @returns Tests whether the provided value can be used as an `Edge`. If you're using TypeScript,
 * this function acts as a type guard and will narrow the type of the value to `Edge` if it returns
 * `true`.
 *
 * @example
 * ```js
 *import { isEdge } from '@xyflow/react';
 *
 *if (isEdge(edge)) {
 * // ...
 *}
 *```
 */ const isEdge = (element)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEdgeBase"])(element);
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
function fixedForwardRef(render) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(render);
}
// we need this hook to prevent a warning when using react-flow in SSR
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
/**
 * This hook returns a queue that can be used to batch updates.
 *
 * @param runQueue - a function that gets called when the queue is flushed
 * @internal
 *
 * @returns a Queue object
 */ function useQueue(runQueue) {
    /*
     * Because we're using a ref above, we need some way to let React know when to
     * actually process the queue. We increment this number any time we mutate the
     * queue, creating a new state to trigger the layout effect below.
     * Using a boolean dirty flag here instead would lead to issues related to
     * automatic batching. (https://github.com/xyflow/xyflow/issues/4779)
     */ const [serial, setSerial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(BigInt(0));
    /*
     * A reference of all the batched updates to process before the next render. We
     * want a reference here so multiple synchronous calls to `setNodes` etc can be
     * batched together.
     */ const [queue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useQueue.useState": ()=>createQueue({
                "useQueue.useState": ()=>setSerial({
                        "useQueue.useState": (n)=>n + BigInt(1)
                    }["useQueue.useState"])
            }["useQueue.useState"])
    }["useQueue.useState"]);
    /*
     * Layout effects are guaranteed to run before the next render which means we
     * shouldn't run into any issues with stale state or weird issues that come from
     * rendering things one frame later than expected (we used to use `setTimeout`).
     */ useIsomorphicLayoutEffect({
        "useQueue.useIsomorphicLayoutEffect": ()=>{
            const queueItems = queue.get();
            if (queueItems.length) {
                runQueue(queueItems);
                queue.reset();
            }
        }
    }["useQueue.useIsomorphicLayoutEffect"], [
        serial
    ]);
    return queue;
}
function createQueue(cb) {
    let queue = [];
    return {
        get: ()=>queue,
        reset: ()=>{
            queue = [];
        },
        push: (item)=>{
            queue.push(item);
            cb();
        }
    };
}
const BatchContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
/**
 * This is a context provider that holds and processes the node and edge update queues
 * that are needed to handle setNodes, addNodes, setEdges and addEdges.
 *
 * @internal
 */ function BatchProvider(param) {
    let { children } = param;
    const store = useStoreApi();
    const nodeQueueHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BatchProvider.useCallback[nodeQueueHandler]": (queueItems)=>{
            const { nodes = [], setNodes, hasDefaultNodes, onNodesChange, nodeLookup, fitViewQueued } = store.getState();
            /*
         * This is essentially an `Array.reduce` in imperative clothing. Processing
         * this queue is a relatively hot path so we'd like to avoid the overhead of
         * array methods where we can.
         */ let next = nodes;
            for (const payload of queueItems){
                next = typeof payload === 'function' ? payload(next) : payload;
            }
            if (hasDefaultNodes) {
                setNodes(next);
            } else {
                // When a controlled flow is used we need to collect the changes
                const changes = getElementsDiffChanges({
                    items: next,
                    lookup: nodeLookup
                });
                // We only want to fire onNodesChange if there are changes to the nodes
                if (changes.length > 0) {
                    onNodesChange === null || onNodesChange === void 0 ? void 0 : onNodesChange(changes);
                } else if (fitViewQueued) {
                    // If there are no changes to the nodes, we still need to call setNodes
                    // to trigger a re-render and fitView.
                    window.requestAnimationFrame({
                        "BatchProvider.useCallback[nodeQueueHandler]": ()=>{
                            const { fitViewQueued, nodes, setNodes } = store.getState();
                            if (fitViewQueued) {
                                setNodes(nodes);
                            }
                        }
                    }["BatchProvider.useCallback[nodeQueueHandler]"]);
                }
            }
        }
    }["BatchProvider.useCallback[nodeQueueHandler]"], []);
    const nodeQueue = useQueue(nodeQueueHandler);
    const edgeQueueHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BatchProvider.useCallback[edgeQueueHandler]": (queueItems)=>{
            const { edges = [], setEdges, hasDefaultEdges, onEdgesChange, edgeLookup } = store.getState();
            let next = edges;
            for (const payload of queueItems){
                next = typeof payload === 'function' ? payload(next) : payload;
            }
            if (hasDefaultEdges) {
                setEdges(next);
            } else if (onEdgesChange) {
                onEdgesChange(getElementsDiffChanges({
                    items: next,
                    lookup: edgeLookup
                }));
            }
        }
    }["BatchProvider.useCallback[edgeQueueHandler]"], []);
    const edgeQueue = useQueue(edgeQueueHandler);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BatchProvider.useMemo[value]": ()=>({
                nodeQueue,
                edgeQueue
            })
    }["BatchProvider.useMemo[value]"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BatchContext.Provider, {
        value: value,
        children: children
    });
}
function useBatchContext() {
    const batchContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BatchContext);
    if (!batchContext) {
        throw new Error('useBatchContext must be used within a BatchProvider');
    }
    return batchContext;
}
const selector$k = (s)=>!!s.panZoom;
/**
 * This hook returns a ReactFlowInstance that can be used to update nodes and edges, manipulate the viewport, or query the current state of the flow.
 *
 * @public
 * @example
 * ```jsx
 *import { useCallback, useState } from 'react';
 *import { useReactFlow } from '@xyflow/react';
 *
 *export function NodeCounter() {
 *  const reactFlow = useReactFlow();
 *  const [count, setCount] = useState(0);
 *  const countNodes = useCallback(() => {
 *    setCount(reactFlow.getNodes().length);
 *    // you need to pass it as a dependency if you are using it with useEffect or useCallback
 *    // because at the first render, it's not initialized yet and some functions might not work.
 *  }, [reactFlow]);
 *
 *  return (
 *    <div>
 *      <button onClick={countNodes}>Update count</button>
 *      <p>There are {count} nodes in the flow.</p>
 *    </div>
 *  );
 *}
 *```
 */ function useReactFlow() {
    const viewportHelper = useViewportHelper();
    const store = useStoreApi();
    const batchContext = useBatchContext();
    const viewportInitialized = useStore(selector$k);
    const generalHelper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useReactFlow.useMemo[generalHelper]": ()=>{
            const getInternalNode = {
                "useReactFlow.useMemo[generalHelper].getInternalNode": (id)=>store.getState().nodeLookup.get(id)
            }["useReactFlow.useMemo[generalHelper].getInternalNode"];
            const setNodes = {
                "useReactFlow.useMemo[generalHelper].setNodes": (payload)=>{
                    batchContext.nodeQueue.push(payload);
                }
            }["useReactFlow.useMemo[generalHelper].setNodes"];
            const setEdges = {
                "useReactFlow.useMemo[generalHelper].setEdges": (payload)=>{
                    batchContext.edgeQueue.push(payload);
                }
            }["useReactFlow.useMemo[generalHelper].setEdges"];
            const getNodeRect = {
                "useReactFlow.useMemo[generalHelper].getNodeRect": (node)=>{
                    var _nodeToUse_measured, _nodeToUse_measured1;
                    const { nodeLookup, nodeOrigin } = store.getState();
                    const nodeToUse = isNode(node) ? node : nodeLookup.get(node.id);
                    const position = nodeToUse.parentId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluateAbsolutePosition"])(nodeToUse.position, nodeToUse.measured, nodeToUse.parentId, nodeLookup, nodeOrigin) : nodeToUse.position;
                    var _nodeToUse_measured_width, _nodeToUse_measured_height;
                    const nodeWithPosition = {
                        ...nodeToUse,
                        position,
                        width: (_nodeToUse_measured_width = (_nodeToUse_measured = nodeToUse.measured) === null || _nodeToUse_measured === void 0 ? void 0 : _nodeToUse_measured.width) !== null && _nodeToUse_measured_width !== void 0 ? _nodeToUse_measured_width : nodeToUse.width,
                        height: (_nodeToUse_measured_height = (_nodeToUse_measured1 = nodeToUse.measured) === null || _nodeToUse_measured1 === void 0 ? void 0 : _nodeToUse_measured1.height) !== null && _nodeToUse_measured_height !== void 0 ? _nodeToUse_measured_height : nodeToUse.height
                    };
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeToRect"])(nodeWithPosition);
                }
            }["useReactFlow.useMemo[generalHelper].getNodeRect"];
            const updateNode = {
                "useReactFlow.useMemo[generalHelper].updateNode": function(id, nodeUpdate) {
                    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                        replace: false
                    };
                    setNodes({
                        "useReactFlow.useMemo[generalHelper].updateNode": (prevNodes)=>prevNodes.map({
                                "useReactFlow.useMemo[generalHelper].updateNode": (node)=>{
                                    if (node.id === id) {
                                        const nextNode = typeof nodeUpdate === 'function' ? nodeUpdate(node) : nodeUpdate;
                                        return options.replace && isNode(nextNode) ? nextNode : {
                                            ...node,
                                            ...nextNode
                                        };
                                    }
                                    return node;
                                }
                            }["useReactFlow.useMemo[generalHelper].updateNode"])
                    }["useReactFlow.useMemo[generalHelper].updateNode"]);
                }
            }["useReactFlow.useMemo[generalHelper].updateNode"];
            const updateEdge = {
                "useReactFlow.useMemo[generalHelper].updateEdge": function(id, edgeUpdate) {
                    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                        replace: false
                    };
                    setEdges({
                        "useReactFlow.useMemo[generalHelper].updateEdge": (prevEdges)=>prevEdges.map({
                                "useReactFlow.useMemo[generalHelper].updateEdge": (edge)=>{
                                    if (edge.id === id) {
                                        const nextEdge = typeof edgeUpdate === 'function' ? edgeUpdate(edge) : edgeUpdate;
                                        return options.replace && isEdge(nextEdge) ? nextEdge : {
                                            ...edge,
                                            ...nextEdge
                                        };
                                    }
                                    return edge;
                                }
                            }["useReactFlow.useMemo[generalHelper].updateEdge"])
                    }["useReactFlow.useMemo[generalHelper].updateEdge"]);
                }
            }["useReactFlow.useMemo[generalHelper].updateEdge"];
            return {
                getNodes: ({
                    "useReactFlow.useMemo[generalHelper]": ()=>store.getState().nodes.map({
                            "useReactFlow.useMemo[generalHelper]": (n)=>({
                                    ...n
                                })
                        }["useReactFlow.useMemo[generalHelper]"])
                })["useReactFlow.useMemo[generalHelper]"],
                getNode: ({
                    "useReactFlow.useMemo[generalHelper]": (id)=>{
                        var _getInternalNode;
                        return (_getInternalNode = getInternalNode(id)) === null || _getInternalNode === void 0 ? void 0 : _getInternalNode.internals.userNode;
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                getInternalNode,
                getEdges: ({
                    "useReactFlow.useMemo[generalHelper]": ()=>{
                        const { edges = [] } = store.getState();
                        return edges.map({
                            "useReactFlow.useMemo[generalHelper]": (e)=>({
                                    ...e
                                })
                        }["useReactFlow.useMemo[generalHelper]"]);
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                getEdge: ({
                    "useReactFlow.useMemo[generalHelper]": (id)=>store.getState().edgeLookup.get(id)
                })["useReactFlow.useMemo[generalHelper]"],
                setNodes,
                setEdges,
                addNodes: ({
                    "useReactFlow.useMemo[generalHelper]": (payload)=>{
                        const newNodes = Array.isArray(payload) ? payload : [
                            payload
                        ];
                        batchContext.nodeQueue.push({
                            "useReactFlow.useMemo[generalHelper]": (nodes)=>[
                                    ...nodes,
                                    ...newNodes
                                ]
                        }["useReactFlow.useMemo[generalHelper]"]);
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                addEdges: ({
                    "useReactFlow.useMemo[generalHelper]": (payload)=>{
                        const newEdges = Array.isArray(payload) ? payload : [
                            payload
                        ];
                        batchContext.edgeQueue.push({
                            "useReactFlow.useMemo[generalHelper]": (edges)=>[
                                    ...edges,
                                    ...newEdges
                                ]
                        }["useReactFlow.useMemo[generalHelper]"]);
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                toObject: ({
                    "useReactFlow.useMemo[generalHelper]": ()=>{
                        const { nodes = [], edges = [], transform } = store.getState();
                        const [x, y, zoom] = transform;
                        return {
                            nodes: nodes.map({
                                "useReactFlow.useMemo[generalHelper]": (n)=>({
                                        ...n
                                    })
                            }["useReactFlow.useMemo[generalHelper]"]),
                            edges: edges.map({
                                "useReactFlow.useMemo[generalHelper]": (e)=>({
                                        ...e
                                    })
                            }["useReactFlow.useMemo[generalHelper]"]),
                            viewport: {
                                x,
                                y,
                                zoom
                            }
                        };
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                deleteElements: ({
                    "useReactFlow.useMemo[generalHelper]": async (param)=>{
                        let { nodes: nodesToRemove = [], edges: edgesToRemove = [] } = param;
                        const { nodes, edges, onNodesDelete, onEdgesDelete, triggerNodeChanges, triggerEdgeChanges, onDelete, onBeforeDelete } = store.getState();
                        const { nodes: matchingNodes, edges: matchingEdges } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getElementsToRemove"])({
                            nodesToRemove,
                            edgesToRemove,
                            nodes,
                            edges,
                            onBeforeDelete
                        });
                        const hasMatchingEdges = matchingEdges.length > 0;
                        const hasMatchingNodes = matchingNodes.length > 0;
                        if (hasMatchingEdges) {
                            const edgeChanges = matchingEdges.map(elementToRemoveChange);
                            onEdgesDelete === null || onEdgesDelete === void 0 ? void 0 : onEdgesDelete(matchingEdges);
                            triggerEdgeChanges(edgeChanges);
                        }
                        if (hasMatchingNodes) {
                            const nodeChanges = matchingNodes.map(elementToRemoveChange);
                            onNodesDelete === null || onNodesDelete === void 0 ? void 0 : onNodesDelete(matchingNodes);
                            triggerNodeChanges(nodeChanges);
                        }
                        if (hasMatchingNodes || hasMatchingEdges) {
                            onDelete === null || onDelete === void 0 ? void 0 : onDelete({
                                nodes: matchingNodes,
                                edges: matchingEdges
                            });
                        }
                        return {
                            deletedNodes: matchingNodes,
                            deletedEdges: matchingEdges
                        };
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                getIntersectingNodes: ({
                    "useReactFlow.useMemo[generalHelper]": function(nodeOrRect) {
                        let partially = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, nodes = arguments.length > 2 ? arguments[2] : void 0;
                        const isRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRectObject"])(nodeOrRect);
                        const nodeRect = isRect ? nodeOrRect : getNodeRect(nodeOrRect);
                        const hasNodesOption = nodes !== undefined;
                        if (!nodeRect) {
                            return [];
                        }
                        return (nodes || store.getState().nodes).filter({
                            "useReactFlow.useMemo[generalHelper]": (n)=>{
                                const internalNode = store.getState().nodeLookup.get(n.id);
                                if (internalNode && !isRect && (n.id === nodeOrRect.id || !internalNode.internals.positionAbsolute)) {
                                    return false;
                                }
                                const currNodeRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeToRect"])(hasNodesOption ? n : internalNode);
                                const overlappingArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverlappingArea"])(currNodeRect, nodeRect);
                                const partiallyVisible = partially && overlappingArea > 0;
                                return partiallyVisible || overlappingArea >= nodeRect.width * nodeRect.height;
                            }
                        }["useReactFlow.useMemo[generalHelper]"]);
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                isNodeIntersecting: ({
                    "useReactFlow.useMemo[generalHelper]": function(nodeOrRect, area) {
                        let partially = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                        const isRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRectObject"])(nodeOrRect);
                        const nodeRect = isRect ? nodeOrRect : getNodeRect(nodeOrRect);
                        if (!nodeRect) {
                            return false;
                        }
                        const overlappingArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverlappingArea"])(nodeRect, area);
                        const partiallyVisible = partially && overlappingArea > 0;
                        return partiallyVisible || overlappingArea >= nodeRect.width * nodeRect.height;
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                updateNode,
                updateNodeData: ({
                    "useReactFlow.useMemo[generalHelper]": function(id, dataUpdate) {
                        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                            replace: false
                        };
                        updateNode(id, {
                            "useReactFlow.useMemo[generalHelper]": (node)=>{
                                const nextData = typeof dataUpdate === 'function' ? dataUpdate(node) : dataUpdate;
                                return options.replace ? {
                                    ...node,
                                    data: nextData
                                } : {
                                    ...node,
                                    data: {
                                        ...node.data,
                                        ...nextData
                                    }
                                };
                            }
                        }["useReactFlow.useMemo[generalHelper]"], options);
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                updateEdge,
                updateEdgeData: ({
                    "useReactFlow.useMemo[generalHelper]": function(id, dataUpdate) {
                        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                            replace: false
                        };
                        updateEdge(id, {
                            "useReactFlow.useMemo[generalHelper]": (edge)=>{
                                const nextData = typeof dataUpdate === 'function' ? dataUpdate(edge) : dataUpdate;
                                return options.replace ? {
                                    ...edge,
                                    data: nextData
                                } : {
                                    ...edge,
                                    data: {
                                        ...edge.data,
                                        ...nextData
                                    }
                                };
                            }
                        }["useReactFlow.useMemo[generalHelper]"], options);
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                getNodesBounds: ({
                    "useReactFlow.useMemo[generalHelper]": (nodes)=>{
                        const { nodeLookup, nodeOrigin } = store.getState();
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodesBounds"])(nodes, {
                            nodeLookup,
                            nodeOrigin
                        });
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                getHandleConnections: ({
                    "useReactFlow.useMemo[generalHelper]": (param)=>{
                        let { type, id, nodeId } = param;
                        var _store_getState_connectionLookup_get;
                        var _store_getState_connectionLookup_get_values;
                        return Array.from((_store_getState_connectionLookup_get_values = (_store_getState_connectionLookup_get = store.getState().connectionLookup.get("".concat(nodeId, "-").concat(type).concat(id ? "-".concat(id) : ''))) === null || _store_getState_connectionLookup_get === void 0 ? void 0 : _store_getState_connectionLookup_get.values()) !== null && _store_getState_connectionLookup_get_values !== void 0 ? _store_getState_connectionLookup_get_values : []);
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                getNodeConnections: ({
                    "useReactFlow.useMemo[generalHelper]": (param)=>{
                        let { type, handleId, nodeId } = param;
                        var _store_getState_connectionLookup_get;
                        var _store_getState_connectionLookup_get_values;
                        return Array.from((_store_getState_connectionLookup_get_values = (_store_getState_connectionLookup_get = store.getState().connectionLookup.get("".concat(nodeId).concat(type ? handleId ? "-".concat(type, "-").concat(handleId) : "-".concat(type) : ''))) === null || _store_getState_connectionLookup_get === void 0 ? void 0 : _store_getState_connectionLookup_get.values()) !== null && _store_getState_connectionLookup_get_values !== void 0 ? _store_getState_connectionLookup_get_values : []);
                    }
                })["useReactFlow.useMemo[generalHelper]"],
                fitView: ({
                    "useReactFlow.useMemo[generalHelper]": async (options)=>{
                        var _store_getState_fitViewResolver;
                        // We either create a new Promise or reuse the existing one
                        // Even if fitView is called multiple times in a row, we only end up with a single Promise
                        const fitViewResolver = (_store_getState_fitViewResolver = store.getState().fitViewResolver) !== null && _store_getState_fitViewResolver !== void 0 ? _store_getState_fitViewResolver : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withResolvers"])();
                        // We schedule a fitView by setting fitViewQueued and triggering a setNodes
                        store.setState({
                            fitViewQueued: true,
                            fitViewOptions: options,
                            fitViewResolver
                        });
                        batchContext.nodeQueue.push({
                            "useReactFlow.useMemo[generalHelper]": (nodes)=>[
                                    ...nodes
                                ]
                        }["useReactFlow.useMemo[generalHelper]"]);
                        return fitViewResolver.promise;
                    }
                })["useReactFlow.useMemo[generalHelper]"]
            };
        }
    }["useReactFlow.useMemo[generalHelper]"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useReactFlow.useMemo": ()=>{
            return {
                ...generalHelper,
                ...viewportHelper,
                viewportInitialized
            };
        }
    }["useReactFlow.useMemo"], [
        viewportInitialized
    ]);
}
const selected = (item)=>item.selected;
const deleteKeyOptions = {
    actInsideInputWithModifier: false
};
const win$1 = typeof window !== 'undefined' ? window : undefined;
/**
 * Hook for handling global key events.
 *
 * @internal
 */ function useGlobalKeyHandler(param) {
    let { deleteKeyCode, multiSelectionKeyCode } = param;
    const store = useStoreApi();
    const { deleteElements } = useReactFlow();
    const deleteKeyPressed = useKeyPress(deleteKeyCode, deleteKeyOptions);
    const multiSelectionKeyPressed = useKeyPress(multiSelectionKeyCode, {
        target: win$1
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGlobalKeyHandler.useEffect": ()=>{
            if (deleteKeyPressed) {
                const { edges, nodes } = store.getState();
                deleteElements({
                    nodes: nodes.filter(selected),
                    edges: edges.filter(selected)
                });
                store.setState({
                    nodesSelectionActive: false
                });
            }
        }
    }["useGlobalKeyHandler.useEffect"], [
        deleteKeyPressed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGlobalKeyHandler.useEffect": ()=>{
            store.setState({
                multiSelectionActive: multiSelectionKeyPressed
            });
        }
    }["useGlobalKeyHandler.useEffect"], [
        multiSelectionKeyPressed
    ]);
}
/**
 * Hook for handling resize events.
 *
 * @internal
 */ function useResizeHandler(domNode) {
    const store = useStoreApi();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResizeHandler.useEffect": ()=>{
            const updateDimensions = {
                "useResizeHandler.useEffect.updateDimensions": ()=>{
                    if (!domNode.current) {
                        return false;
                    }
                    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDimensions"])(domNode.current);
                    if (size.height === 0 || size.width === 0) {
                        var _store_getState_onError, _store_getState;
                        (_store_getState_onError = (_store_getState = store.getState()).onError) === null || _store_getState_onError === void 0 ? void 0 : _store_getState_onError.call(_store_getState, '004', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorMessages"]['error004']());
                    }
                    store.setState({
                        width: size.width || 500,
                        height: size.height || 500
                    });
                }
            }["useResizeHandler.useEffect.updateDimensions"];
            if (domNode.current) {
                updateDimensions();
                window.addEventListener('resize', updateDimensions);
                const resizeObserver = new ResizeObserver({
                    "useResizeHandler.useEffect": ()=>updateDimensions()
                }["useResizeHandler.useEffect"]);
                resizeObserver.observe(domNode.current);
                return ({
                    "useResizeHandler.useEffect": ()=>{
                        window.removeEventListener('resize', updateDimensions);
                        if (resizeObserver && domNode.current) {
                            resizeObserver.unobserve(domNode.current);
                        }
                    }
                })["useResizeHandler.useEffect"];
            }
        }
    }["useResizeHandler.useEffect"], []);
}
const containerStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
};
const selector$j = (s)=>({
        userSelectionActive: s.userSelectionActive,
        lib: s.lib
    });
function ZoomPane(param) {
    let { onPaneContextMenu, zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = 0.5, panOnScrollMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanOnScrollMode"].Free, zoomOnDoubleClick = true, panOnDrag = true, defaultViewport, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling = true, children, noWheelClassName, noPanClassName, onViewportChange, isControlledViewport, paneClickDistance } = param;
    const store = useStoreApi();
    const zoomPane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { userSelectionActive, lib } = useStore(selector$j, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const zoomActivationKeyPressed = useKeyPress(zoomActivationKeyCode);
    const panZoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    useResizeHandler(zoomPane);
    const onTransformChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ZoomPane.useCallback[onTransformChange]": (transform)=>{
            onViewportChange === null || onViewportChange === void 0 ? void 0 : onViewportChange({
                x: transform[0],
                y: transform[1],
                zoom: transform[2]
            });
            if (!isControlledViewport) {
                store.setState({
                    transform
                });
            }
        }
    }["ZoomPane.useCallback[onTransformChange]"], [
        onViewportChange,
        isControlledViewport
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ZoomPane.useEffect": ()=>{
            if (zoomPane.current) {
                panZoom.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XYPanZoom"])({
                    domNode: zoomPane.current,
                    minZoom,
                    maxZoom,
                    translateExtent,
                    viewport: defaultViewport,
                    paneClickDistance,
                    onDraggingChange: {
                        "ZoomPane.useEffect": (paneDragging)=>store.setState({
                                paneDragging
                            })
                    }["ZoomPane.useEffect"],
                    onPanZoomStart: {
                        "ZoomPane.useEffect": (event, vp)=>{
                            const { onViewportChangeStart, onMoveStart } = store.getState();
                            onMoveStart === null || onMoveStart === void 0 ? void 0 : onMoveStart(event, vp);
                            onViewportChangeStart === null || onViewportChangeStart === void 0 ? void 0 : onViewportChangeStart(vp);
                        }
                    }["ZoomPane.useEffect"],
                    onPanZoom: {
                        "ZoomPane.useEffect": (event, vp)=>{
                            const { onViewportChange, onMove } = store.getState();
                            onMove === null || onMove === void 0 ? void 0 : onMove(event, vp);
                            onViewportChange === null || onViewportChange === void 0 ? void 0 : onViewportChange(vp);
                        }
                    }["ZoomPane.useEffect"],
                    onPanZoomEnd: {
                        "ZoomPane.useEffect": (event, vp)=>{
                            const { onViewportChangeEnd, onMoveEnd } = store.getState();
                            onMoveEnd === null || onMoveEnd === void 0 ? void 0 : onMoveEnd(event, vp);
                            onViewportChangeEnd === null || onViewportChangeEnd === void 0 ? void 0 : onViewportChangeEnd(vp);
                        }
                    }["ZoomPane.useEffect"]
                });
                const { x, y, zoom } = panZoom.current.getViewport();
                store.setState({
                    panZoom: panZoom.current,
                    transform: [
                        x,
                        y,
                        zoom
                    ],
                    domNode: zoomPane.current.closest('.react-flow')
                });
                return ({
                    "ZoomPane.useEffect": ()=>{
                        var _panZoom_current;
                        (_panZoom_current = panZoom.current) === null || _panZoom_current === void 0 ? void 0 : _panZoom_current.destroy();
                    }
                })["ZoomPane.useEffect"];
            }
        }
    }["ZoomPane.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ZoomPane.useEffect": ()=>{
            var _panZoom_current;
            (_panZoom_current = panZoom.current) === null || _panZoom_current === void 0 ? void 0 : _panZoom_current.update({
                onPaneContextMenu,
                zoomOnScroll,
                zoomOnPinch,
                panOnScroll,
                panOnScrollSpeed,
                panOnScrollMode,
                zoomOnDoubleClick,
                panOnDrag,
                zoomActivationKeyPressed,
                preventScrolling,
                noPanClassName,
                userSelectionActive,
                noWheelClassName,
                lib,
                onTransformChange
            });
        }
    }["ZoomPane.useEffect"], [
        onPaneContextMenu,
        zoomOnScroll,
        zoomOnPinch,
        panOnScroll,
        panOnScrollSpeed,
        panOnScrollMode,
        zoomOnDoubleClick,
        panOnDrag,
        zoomActivationKeyPressed,
        preventScrolling,
        noPanClassName,
        userSelectionActive,
        noWheelClassName,
        lib,
        onTransformChange
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-flow__renderer",
        ref: zoomPane,
        style: containerStyle,
        children: children
    });
}
const selector$i = (s)=>({
        userSelectionActive: s.userSelectionActive,
        userSelectionRect: s.userSelectionRect
    });
function UserSelection() {
    const { userSelectionActive, userSelectionRect } = useStore(selector$i, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const isActive = userSelectionActive && userSelectionRect;
    if (!isActive) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-flow__selection react-flow__container",
        style: {
            width: userSelectionRect.width,
            height: userSelectionRect.height,
            transform: "translate(".concat(userSelectionRect.x, "px, ").concat(userSelectionRect.y, "px)")
        }
    });
}
const wrapHandler = (handler, containerRef)=>{
    return (event)=>{
        if (event.target !== containerRef.current) {
            return;
        }
        handler === null || handler === void 0 ? void 0 : handler(event);
    };
};
const selector$h = (s)=>({
        userSelectionActive: s.userSelectionActive,
        elementsSelectable: s.elementsSelectable,
        connectionInProgress: s.connection.inProgress,
        dragging: s.paneDragging
    });
function Pane(param) {
    let { isSelecting, selectionKeyPressed, selectionMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionMode"].Full, panOnDrag, selectionOnDrag, onSelectionStart, onSelectionEnd, onPaneClick, onPaneContextMenu, onPaneScroll, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, children } = param;
    const store = useStoreApi();
    const { userSelectionActive, elementsSelectable, dragging, connectionInProgress } = useStore(selector$h, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const hasActiveSelection = elementsSelectable && (isSelecting || userSelectionActive);
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const selectedNodeIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const selectedEdgeIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Used to prevent click events when the user lets go of the selectionKey during a selection
    const selectionInProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const selectionStarted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onClick = (event)=>{
        // We prevent click events when the user let go of the selectionKey during a selection
        // We also prevent click events when a connection is in progress
        if (selectionInProgress.current || connectionInProgress) {
            selectionInProgress.current = false;
            return;
        }
        onPaneClick === null || onPaneClick === void 0 ? void 0 : onPaneClick(event);
        store.getState().resetSelectedElements();
        store.setState({
            nodesSelectionActive: false
        });
    };
    const onContextMenu = (event)=>{
        if (Array.isArray(panOnDrag) && (panOnDrag === null || panOnDrag === void 0 ? void 0 : panOnDrag.includes(2))) {
            event.preventDefault();
            return;
        }
        onPaneContextMenu === null || onPaneContextMenu === void 0 ? void 0 : onPaneContextMenu(event);
    };
    const onWheel = onPaneScroll ? (event)=>onPaneScroll(event) : undefined;
    const onPointerDown = (event)=>{
        var _event_target_setPointerCapture, _event_target;
        const { resetSelectedElements, domNode } = store.getState();
        containerBounds.current = domNode === null || domNode === void 0 ? void 0 : domNode.getBoundingClientRect();
        if (!elementsSelectable || !isSelecting || event.button !== 0 || event.target !== container.current || !containerBounds.current) {
            return;
        }
        (_event_target = event.target) === null || _event_target === void 0 ? void 0 : (_event_target_setPointerCapture = _event_target.setPointerCapture) === null || _event_target_setPointerCapture === void 0 ? void 0 : _event_target_setPointerCapture.call(_event_target, event.pointerId);
        selectionStarted.current = true;
        selectionInProgress.current = false;
        const { x, y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventPosition"])(event.nativeEvent, containerBounds.current);
        resetSelectedElements();
        store.setState({
            userSelectionRect: {
                width: 0,
                height: 0,
                startX: x,
                startY: y,
                x,
                y
            }
        });
        onSelectionStart === null || onSelectionStart === void 0 ? void 0 : onSelectionStart(event);
    };
    const onPointerMove = (event)=>{
        const { userSelectionRect, transform, nodeLookup, edgeLookup, connectionLookup, triggerNodeChanges, triggerEdgeChanges, defaultEdgeOptions } = store.getState();
        if (!containerBounds.current || !userSelectionRect) {
            return;
        }
        selectionInProgress.current = true;
        const { x: mouseX, y: mouseY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventPosition"])(event.nativeEvent, containerBounds.current);
        const { startX, startY } = userSelectionRect;
        const nextUserSelectRect = {
            startX,
            startY,
            x: mouseX < startX ? mouseX : startX,
            y: mouseY < startY ? mouseY : startY,
            width: Math.abs(mouseX - startX),
            height: Math.abs(mouseY - startY)
        };
        const prevSelectedNodeIds = selectedNodeIds.current;
        const prevSelectedEdgeIds = selectedEdgeIds.current;
        selectedNodeIds.current = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodesInside"])(nodeLookup, nextUserSelectRect, transform, selectionMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionMode"].Partial, true).map((node)=>node.id));
        selectedEdgeIds.current = new Set();
        var _defaultEdgeOptions_selectable;
        const edgesSelectable = (_defaultEdgeOptions_selectable = defaultEdgeOptions === null || defaultEdgeOptions === void 0 ? void 0 : defaultEdgeOptions.selectable) !== null && _defaultEdgeOptions_selectable !== void 0 ? _defaultEdgeOptions_selectable : true;
        // We look for all edges connected to the selected nodes
        for (const nodeId of selectedNodeIds.current){
            const connections = connectionLookup.get(nodeId);
            if (!connections) continue;
            for (const { edgeId } of connections.values()){
                const edge = edgeLookup.get(edgeId);
                var _edge_selectable;
                if (edge && ((_edge_selectable = edge.selectable) !== null && _edge_selectable !== void 0 ? _edge_selectable : edgesSelectable)) {
                    selectedEdgeIds.current.add(edgeId);
                }
            }
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areSetsEqual"])(prevSelectedNodeIds, selectedNodeIds.current)) {
            const changes = getSelectionChanges(nodeLookup, selectedNodeIds.current, true);
            triggerNodeChanges(changes);
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areSetsEqual"])(prevSelectedEdgeIds, selectedEdgeIds.current)) {
            const changes = getSelectionChanges(edgeLookup, selectedEdgeIds.current);
            triggerEdgeChanges(changes);
        }
        store.setState({
            userSelectionRect: nextUserSelectRect,
            userSelectionActive: true,
            nodesSelectionActive: false
        });
    };
    const onPointerUp = (event)=>{
        var _event_target_releasePointerCapture, _event_target;
        if (event.button !== 0 || !selectionStarted.current) {
            return;
        }
        (_event_target = event.target) === null || _event_target === void 0 ? void 0 : (_event_target_releasePointerCapture = _event_target.releasePointerCapture) === null || _event_target_releasePointerCapture === void 0 ? void 0 : _event_target_releasePointerCapture.call(_event_target, event.pointerId);
        const { userSelectionRect } = store.getState();
        /*
         * We only want to trigger click functions when in selection mode if
         * the user did not move the mouse.
         */ if (!userSelectionActive && userSelectionRect && event.target === container.current) {
            onClick === null || onClick === void 0 ? void 0 : onClick(event);
        }
        store.setState({
            userSelectionActive: false,
            userSelectionRect: null,
            nodesSelectionActive: selectedNodeIds.current.size > 0
        });
        onSelectionEnd === null || onSelectionEnd === void 0 ? void 0 : onSelectionEnd(event);
        /*
         * If the user kept holding the selectionKey during the selection,
         * we need to reset the selectionInProgress, so the next click event is not prevented
         */ if (selectionKeyPressed || selectionOnDrag) {
            selectionInProgress.current = false;
        }
        selectionStarted.current = false;
    };
    const draggable = panOnDrag === true || Array.isArray(panOnDrag) && panOnDrag.includes(0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__pane',
            {
                draggable,
                dragging,
                selection: isSelecting
            }
        ]),
        onClick: hasActiveSelection ? undefined : wrapHandler(onClick, container),
        onContextMenu: wrapHandler(onContextMenu, container),
        onWheel: wrapHandler(onWheel, container),
        onPointerEnter: hasActiveSelection ? undefined : onPaneMouseEnter,
        onPointerDown: hasActiveSelection ? onPointerDown : onPaneMouseMove,
        onPointerMove: hasActiveSelection ? onPointerMove : onPaneMouseMove,
        onPointerUp: hasActiveSelection ? onPointerUp : undefined,
        onPointerLeave: onPaneMouseLeave,
        ref: container,
        style: containerStyle,
        children: [
            children,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(UserSelection, {})
        ]
    });
}
/*
 * this handler is called by
 * 1. the click handler when node is not draggable or selectNodesOnDrag = false
 * or
 * 2. the on drag start handler when node is draggable and selectNodesOnDrag = true
 */ function handleNodeClick(param) {
    let { id, store, unselect = false, nodeRef } = param;
    const { addSelectedNodes, unselectNodesAndEdges, multiSelectionActive, nodeLookup, onError } = store.getState();
    const node = nodeLookup.get(id);
    if (!node) {
        onError === null || onError === void 0 ? void 0 : onError('012', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorMessages"]['error012'](id));
        return;
    }
    store.setState({
        nodesSelectionActive: false
    });
    if (!node.selected) {
        addSelectedNodes([
            id
        ]);
    } else if (unselect || node.selected && multiSelectionActive) {
        unselectNodesAndEdges({
            nodes: [
                node
            ],
            edges: []
        });
        requestAnimationFrame(()=>{
            var _nodeRef_current;
            return nodeRef === null || nodeRef === void 0 ? void 0 : (_nodeRef_current = nodeRef.current) === null || _nodeRef_current === void 0 ? void 0 : _nodeRef_current.blur();
        });
    }
}
/**
 * Hook for calling XYDrag helper from @xyflow/system.
 *
 * @internal
 */ function useDrag(param) {
    let { nodeRef, disabled = false, noDragClassName, handleSelector, nodeId, isSelectable, nodeClickDistance } = param;
    const store = useStoreApi();
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const xyDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDrag.useEffect": ()=>{
            xyDrag.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XYDrag"])({
                getStoreItems: {
                    "useDrag.useEffect": ()=>store.getState()
                }["useDrag.useEffect"],
                onNodeMouseDown: {
                    "useDrag.useEffect": (id)=>{
                        handleNodeClick({
                            id,
                            store,
                            nodeRef
                        });
                    }
                }["useDrag.useEffect"],
                onDragStart: {
                    "useDrag.useEffect": ()=>{
                        setDragging(true);
                    }
                }["useDrag.useEffect"],
                onDragStop: {
                    "useDrag.useEffect": ()=>{
                        setDragging(false);
                    }
                }["useDrag.useEffect"]
            });
        }
    }["useDrag.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDrag.useEffect": ()=>{
            if (disabled) {
                var _xyDrag_current;
                (_xyDrag_current = xyDrag.current) === null || _xyDrag_current === void 0 ? void 0 : _xyDrag_current.destroy();
            } else if (nodeRef.current) {
                var _xyDrag_current1;
                (_xyDrag_current1 = xyDrag.current) === null || _xyDrag_current1 === void 0 ? void 0 : _xyDrag_current1.update({
                    noDragClassName,
                    handleSelector,
                    domNode: nodeRef.current,
                    isSelectable,
                    nodeId,
                    nodeClickDistance
                });
                return ({
                    "useDrag.useEffect": ()=>{
                        var _xyDrag_current;
                        (_xyDrag_current = xyDrag.current) === null || _xyDrag_current === void 0 ? void 0 : _xyDrag_current.destroy();
                    }
                })["useDrag.useEffect"];
            }
        }
    }["useDrag.useEffect"], [
        noDragClassName,
        handleSelector,
        disabled,
        isSelectable,
        nodeRef,
        nodeId
    ]);
    return dragging;
}
const selectedAndDraggable = (nodesDraggable)=>(n)=>n.selected && (n.draggable || nodesDraggable && typeof n.draggable === 'undefined');
/**
 * Hook for updating node positions by passing a direction and factor
 *
 * @internal
 * @returns function for updating node positions
 */ function useMoveSelectedNodes() {
    const store = useStoreApi();
    const moveSelectedNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMoveSelectedNodes.useCallback[moveSelectedNodes]": (params)=>{
            const { nodeExtent, snapToGrid, snapGrid, nodesDraggable, onError, updateNodePositions, nodeLookup, nodeOrigin } = store.getState();
            const nodeUpdates = new Map();
            const isSelected = selectedAndDraggable(nodesDraggable);
            /*
         * by default a node moves 5px on each key press
         * if snap grid is enabled, we use that for the velocity
         */ const xVelo = snapToGrid ? snapGrid[0] : 5;
            const yVelo = snapToGrid ? snapGrid[1] : 5;
            const xDiff = params.direction.x * xVelo * params.factor;
            const yDiff = params.direction.y * yVelo * params.factor;
            for (const [, node] of nodeLookup){
                if (!isSelected(node)) {
                    continue;
                }
                let nextPosition = {
                    x: node.internals.positionAbsolute.x + xDiff,
                    y: node.internals.positionAbsolute.y + yDiff
                };
                if (snapToGrid) {
                    nextPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapPosition"])(nextPosition, snapGrid);
                }
                const { position, positionAbsolute } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateNodePosition"])({
                    nodeId: node.id,
                    nextPosition,
                    nodeLookup,
                    nodeExtent,
                    nodeOrigin,
                    onError
                });
                node.position = position;
                node.internals.positionAbsolute = positionAbsolute;
                nodeUpdates.set(node.id, node);
            }
            updateNodePositions(nodeUpdates);
        }
    }["useMoveSelectedNodes.useCallback[moveSelectedNodes]"], []);
    return moveSelectedNodes;
}
const NodeIdContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const Provider = NodeIdContext.Provider;
NodeIdContext.Consumer;
/**
 * You can use this hook to get the id of the node it is used inside. It is useful
 * if you need the node's id deeper in the render tree but don't want to manually
 * drill down the id as a prop.
 *
 * @public
 * @returns The id for a node in the flow.
 *
 * @example
 *```jsx
 *import { useNodeId } from '@xyflow/react';
 *
 *export default function CustomNode() {
 *  return (
 *    <div>
 *      <span>This node has an id of </span>
 *      <NodeIdDisplay />
 *    </div>
 *  );
 *}
 *
 *function NodeIdDisplay() {
 *  const nodeId = useNodeId();
 *
 *  return <span>{nodeId}</span>;
 *}
 *```
 */ const useNodeId = ()=>{
    const nodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NodeIdContext);
    return nodeId;
};
const selector$g = (s)=>({
        connectOnClick: s.connectOnClick,
        noPanClassName: s.noPanClassName,
        rfId: s.rfId
    });
const connectingSelector = (nodeId, handleId, type)=>(state)=>{
        const { connectionClickStartHandle: clickHandle, connectionMode, connection } = state;
        const { fromHandle, toHandle, isValid } = connection;
        const connectingTo = (toHandle === null || toHandle === void 0 ? void 0 : toHandle.nodeId) === nodeId && (toHandle === null || toHandle === void 0 ? void 0 : toHandle.id) === handleId && (toHandle === null || toHandle === void 0 ? void 0 : toHandle.type) === type;
        return {
            connectingFrom: (fromHandle === null || fromHandle === void 0 ? void 0 : fromHandle.nodeId) === nodeId && (fromHandle === null || fromHandle === void 0 ? void 0 : fromHandle.id) === handleId && (fromHandle === null || fromHandle === void 0 ? void 0 : fromHandle.type) === type,
            connectingTo,
            clickConnecting: (clickHandle === null || clickHandle === void 0 ? void 0 : clickHandle.nodeId) === nodeId && (clickHandle === null || clickHandle === void 0 ? void 0 : clickHandle.id) === handleId && (clickHandle === null || clickHandle === void 0 ? void 0 : clickHandle.type) === type,
            isPossibleEndHandle: connectionMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionMode"].Strict ? (fromHandle === null || fromHandle === void 0 ? void 0 : fromHandle.type) !== type : nodeId !== (fromHandle === null || fromHandle === void 0 ? void 0 : fromHandle.nodeId) || handleId !== (fromHandle === null || fromHandle === void 0 ? void 0 : fromHandle.id),
            connectionInProcess: !!fromHandle,
            clickConnectionInProcess: !!clickHandle,
            valid: connectingTo && isValid
        };
    };
function HandleComponent(param, ref) {
    let { type = 'source', position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top, isValidConnection, isConnectable = true, isConnectableStart = true, isConnectableEnd = true, id, onConnect, children, className, onMouseDown, onTouchStart, ...rest } = param;
    const handleId = id || null;
    const isTarget = type === 'target';
    const store = useStoreApi();
    const nodeId = useNodeId();
    const { connectOnClick, noPanClassName, rfId } = useStore(selector$g, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const { connectingFrom, connectingTo, clickConnecting, isPossibleEndHandle, connectionInProcess, clickConnectionInProcess, valid } = useStore(connectingSelector(nodeId, handleId, type), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    if (!nodeId) {
        var _store_getState_onError, _store_getState;
        (_store_getState_onError = (_store_getState = store.getState()).onError) === null || _store_getState_onError === void 0 ? void 0 : _store_getState_onError.call(_store_getState, '010', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorMessages"]['error010']());
    }
    const onConnectExtended = (params)=>{
        const { defaultEdgeOptions, onConnect: onConnectAction, hasDefaultEdges } = store.getState();
        const edgeParams = {
            ...defaultEdgeOptions,
            ...params
        };
        if (hasDefaultEdges) {
            const { edges, setEdges } = store.getState();
            setEdges((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEdge"])(edgeParams, edges));
        }
        onConnectAction === null || onConnectAction === void 0 ? void 0 : onConnectAction(edgeParams);
        onConnect === null || onConnect === void 0 ? void 0 : onConnect(edgeParams);
    };
    const onPointerDown = (event)=>{
        if (!nodeId) {
            return;
        }
        const isMouseTriggered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMouseEvent"])(event.nativeEvent);
        if (isConnectableStart && (isMouseTriggered && event.button === 0 || !isMouseTriggered)) {
            const currentStore = store.getState();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XYHandle"].onPointerDown(event.nativeEvent, {
                autoPanOnConnect: currentStore.autoPanOnConnect,
                connectionMode: currentStore.connectionMode,
                connectionRadius: currentStore.connectionRadius,
                domNode: currentStore.domNode,
                nodeLookup: currentStore.nodeLookup,
                lib: currentStore.lib,
                isTarget,
                handleId,
                nodeId,
                flowId: currentStore.rfId,
                panBy: currentStore.panBy,
                cancelConnection: currentStore.cancelConnection,
                onConnectStart: currentStore.onConnectStart,
                onConnectEnd: currentStore.onConnectEnd,
                updateConnection: currentStore.updateConnection,
                onConnect: onConnectExtended,
                isValidConnection: isValidConnection || currentStore.isValidConnection,
                getTransform: ()=>store.getState().transform,
                getFromHandle: ()=>store.getState().connection.fromHandle,
                autoPanSpeed: currentStore.autoPanSpeed
            });
        }
        if (isMouseTriggered) {
            onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(event);
        } else {
            onTouchStart === null || onTouchStart === void 0 ? void 0 : onTouchStart(event);
        }
    };
    const onClick = (event)=>{
        const { onClickConnectStart, onClickConnectEnd, connectionClickStartHandle, connectionMode, isValidConnection: isValidConnectionStore, lib, rfId: flowId, nodeLookup, connection: connectionState } = store.getState();
        if (!nodeId || !connectionClickStartHandle && !isConnectableStart) {
            return;
        }
        if (!connectionClickStartHandle) {
            onClickConnectStart === null || onClickConnectStart === void 0 ? void 0 : onClickConnectStart(event.nativeEvent, {
                nodeId,
                handleId,
                handleType: type
            });
            store.setState({
                connectionClickStartHandle: {
                    nodeId,
                    type,
                    id: handleId
                }
            });
            return;
        }
        const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHostForElement"])(event.target);
        const isValidConnectionHandler = isValidConnection || isValidConnectionStore;
        const { connection, isValid } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XYHandle"].isValid(event.nativeEvent, {
            handle: {
                nodeId,
                id: handleId,
                type
            },
            connectionMode,
            fromNodeId: connectionClickStartHandle.nodeId,
            fromHandleId: connectionClickStartHandle.id || null,
            fromType: connectionClickStartHandle.type,
            isValidConnection: isValidConnectionHandler,
            flowId,
            doc,
            lib,
            nodeLookup
        });
        if (isValid && connection) {
            onConnectExtended(connection);
        }
        const connectionClone = structuredClone(connectionState);
        delete connectionClone.inProgress;
        connectionClone.toPosition = connectionClone.toHandle ? connectionClone.toHandle.position : null;
        onClickConnectEnd === null || onClickConnectEnd === void 0 ? void 0 : onClickConnectEnd(event, connectionClone);
        store.setState({
            connectionClickStartHandle: null
        });
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-handleid": handleId,
        "data-nodeid": nodeId,
        "data-handlepos": position,
        "data-id": "".concat(rfId, "-").concat(nodeId, "-").concat(handleId, "-").concat(type),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__handle',
            "react-flow__handle-".concat(position),
            'nodrag',
            noPanClassName,
            className,
            {
                source: !isTarget,
                target: isTarget,
                connectable: isConnectable,
                connectablestart: isConnectableStart,
                connectableend: isConnectableEnd,
                clickconnecting: clickConnecting,
                connectingfrom: connectingFrom,
                connectingto: connectingTo,
                valid,
                /*
                 * shows where you can start a connection from
                 * and where you can end it while connecting
                 */ connectionindicator: isConnectable && (!connectionInProcess || isPossibleEndHandle) && (connectionInProcess || clickConnectionInProcess ? isConnectableEnd : isConnectableStart)
            }
        ]),
        onMouseDown: onPointerDown,
        onTouchStart: onPointerDown,
        onClick: connectOnClick ? onClick : undefined,
        ref: ref,
        ...rest,
        children: children
    });
}
/**
 * The `<Handle />` component is used in your [custom nodes](/learn/customization/custom-nodes)
 * to define connection points.
 *
 *@public
 *
 *@example
 *
 *```jsx
 *import { Handle, Position } from '@xyflow/react';
 *
 *export function CustomNode({ data }) {
 *  return (
 *    <>
 *      <div style={{ padding: '10px 20px' }}>
 *        {data.label}
 *      </div>
 *
 *      <Handle type="target" position={Position.Left} />
 *      <Handle type="source" position={Position.Right} />
 *    </>
 *  );
 *};
 *```
 */ const Handle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(fixedForwardRef(HandleComponent));
function InputNode(param) {
    let { data, isConnectable, sourcePosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            data === null || data === void 0 ? void 0 : data.label,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Handle, {
                type: "source",
                position: sourcePosition,
                isConnectable: isConnectable
            })
        ]
    });
}
function DefaultNode(param) {
    let { data, isConnectable, targetPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top, sourcePosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Handle, {
                type: "target",
                position: targetPosition,
                isConnectable: isConnectable
            }),
            data === null || data === void 0 ? void 0 : data.label,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Handle, {
                type: "source",
                position: sourcePosition,
                isConnectable: isConnectable
            })
        ]
    });
}
function GroupNode() {
    return null;
}
function OutputNode(param) {
    let { data, isConnectable, targetPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Handle, {
                type: "target",
                position: targetPosition,
                isConnectable: isConnectable
            }),
            data === null || data === void 0 ? void 0 : data.label
        ]
    });
}
const arrowKeyDiffs = {
    ArrowUp: {
        x: 0,
        y: -1
    },
    ArrowDown: {
        x: 0,
        y: 1
    },
    ArrowLeft: {
        x: -1,
        y: 0
    },
    ArrowRight: {
        x: 1,
        y: 0
    }
};
const builtinNodeTypes = {
    input: InputNode,
    default: DefaultNode,
    output: OutputNode,
    group: GroupNode
};
function getNodeInlineStyleDimensions(node) {
    var _node_style, _node_style1;
    if (node.internals.handleBounds === undefined) {
        var _node_style2, _node_style3;
        var _node_width, _ref, _node_height, _ref1;
        return {
            width: (_ref = (_node_width = node.width) !== null && _node_width !== void 0 ? _node_width : node.initialWidth) !== null && _ref !== void 0 ? _ref : (_node_style2 = node.style) === null || _node_style2 === void 0 ? void 0 : _node_style2.width,
            height: (_ref1 = (_node_height = node.height) !== null && _node_height !== void 0 ? _node_height : node.initialHeight) !== null && _ref1 !== void 0 ? _ref1 : (_node_style3 = node.style) === null || _node_style3 === void 0 ? void 0 : _node_style3.height
        };
    }
    var _node_width1, _node_height1;
    return {
        width: (_node_width1 = node.width) !== null && _node_width1 !== void 0 ? _node_width1 : (_node_style = node.style) === null || _node_style === void 0 ? void 0 : _node_style.width,
        height: (_node_height1 = node.height) !== null && _node_height1 !== void 0 ? _node_height1 : (_node_style1 = node.style) === null || _node_style1 === void 0 ? void 0 : _node_style1.height
    };
}
const selector$f = (s)=>{
    const { width, height, x, y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalNodesBounds"])(s.nodeLookup, {
        filter: (node)=>!!node.selected
    });
    return {
        width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumeric"])(width) ? width : null,
        height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumeric"])(height) ? height : null,
        userSelectionActive: s.userSelectionActive,
        transformString: "translate(".concat(s.transform[0], "px,").concat(s.transform[1], "px) scale(").concat(s.transform[2], ") translate(").concat(x, "px,").concat(y, "px)")
    };
};
function NodesSelection(param) {
    let { onSelectionContextMenu, noPanClassName, disableKeyboardA11y } = param;
    const store = useStoreApi();
    const { width, height, transformString, userSelectionActive } = useStore(selector$f, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const moveSelectedNodes = useMoveSelectedNodes();
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NodesSelection.useEffect": ()=>{
            if (!disableKeyboardA11y) {
                var _nodeRef_current;
                (_nodeRef_current = nodeRef.current) === null || _nodeRef_current === void 0 ? void 0 : _nodeRef_current.focus({
                    preventScroll: true
                });
            }
        }
    }["NodesSelection.useEffect"], [
        disableKeyboardA11y
    ]);
    useDrag({
        nodeRef
    });
    if (userSelectionActive || !width || !height) {
        return null;
    }
    const onContextMenu = onSelectionContextMenu ? (event)=>{
        const selectedNodes = store.getState().nodes.filter((n)=>n.selected);
        onSelectionContextMenu(event, selectedNodes);
    } : undefined;
    const onKeyDown = (event)=>{
        if (Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
            event.preventDefault();
            moveSelectedNodes({
                direction: arrowKeyDiffs[event.key],
                factor: event.shiftKey ? 4 : 1
            });
        }
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__nodesselection',
            'react-flow__container',
            noPanClassName
        ]),
        style: {
            transform: transformString
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: nodeRef,
            className: "react-flow__nodesselection-rect",
            onContextMenu: onContextMenu,
            tabIndex: disableKeyboardA11y ? undefined : -1,
            onKeyDown: disableKeyboardA11y ? undefined : onKeyDown,
            style: {
                width,
                height
            }
        })
    });
}
const win = typeof window !== 'undefined' ? window : undefined;
const selector$e = (s)=>{
    return {
        nodesSelectionActive: s.nodesSelectionActive,
        userSelectionActive: s.userSelectionActive
    };
};
function FlowRendererComponent(param) {
    let { children, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, paneClickDistance, deleteKeyCode, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll: _panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: _panOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, preventScrolling, onSelectionContextMenu, noWheelClassName, noPanClassName, disableKeyboardA11y, onViewportChange, isControlledViewport } = param;
    const { nodesSelectionActive, userSelectionActive } = useStore(selector$e);
    const selectionKeyPressed = useKeyPress(selectionKeyCode, {
        target: win
    });
    const panActivationKeyPressed = useKeyPress(panActivationKeyCode, {
        target: win
    });
    const panOnDrag = panActivationKeyPressed || _panOnDrag;
    const panOnScroll = panActivationKeyPressed || _panOnScroll;
    const _selectionOnDrag = selectionOnDrag && panOnDrag !== true;
    const isSelecting = selectionKeyPressed || userSelectionActive || _selectionOnDrag;
    useGlobalKeyHandler({
        deleteKeyCode,
        multiSelectionKeyCode
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ZoomPane, {
        onPaneContextMenu: onPaneContextMenu,
        elementsSelectable: elementsSelectable,
        zoomOnScroll: zoomOnScroll,
        zoomOnPinch: zoomOnPinch,
        panOnScroll: panOnScroll,
        panOnScrollSpeed: panOnScrollSpeed,
        panOnScrollMode: panOnScrollMode,
        zoomOnDoubleClick: zoomOnDoubleClick,
        panOnDrag: !selectionKeyPressed && panOnDrag,
        defaultViewport: defaultViewport,
        translateExtent: translateExtent,
        minZoom: minZoom,
        maxZoom: maxZoom,
        zoomActivationKeyCode: zoomActivationKeyCode,
        preventScrolling: preventScrolling,
        noWheelClassName: noWheelClassName,
        noPanClassName: noPanClassName,
        onViewportChange: onViewportChange,
        isControlledViewport: isControlledViewport,
        paneClickDistance: paneClickDistance,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Pane, {
            onSelectionStart: onSelectionStart,
            onSelectionEnd: onSelectionEnd,
            onPaneClick: onPaneClick,
            onPaneMouseEnter: onPaneMouseEnter,
            onPaneMouseMove: onPaneMouseMove,
            onPaneMouseLeave: onPaneMouseLeave,
            onPaneContextMenu: onPaneContextMenu,
            onPaneScroll: onPaneScroll,
            panOnDrag: panOnDrag,
            isSelecting: !!isSelecting,
            selectionMode: selectionMode,
            selectionKeyPressed: selectionKeyPressed,
            selectionOnDrag: _selectionOnDrag,
            children: [
                children,
                nodesSelectionActive && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(NodesSelection, {
                    onSelectionContextMenu: onSelectionContextMenu,
                    noPanClassName: noPanClassName,
                    disableKeyboardA11y: disableKeyboardA11y
                })
            ]
        })
    });
}
FlowRendererComponent.displayName = 'FlowRenderer';
const FlowRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(FlowRendererComponent);
const selector$d = (onlyRenderVisible)=>(s)=>{
        return onlyRenderVisible ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodesInside"])(s.nodeLookup, {
            x: 0,
            y: 0,
            width: s.width,
            height: s.height
        }, s.transform, true).map((node)=>node.id) : Array.from(s.nodeLookup.keys());
    };
/**
 * Hook for getting the visible node ids from the store.
 *
 * @internal
 * @param onlyRenderVisible
 * @returns array with visible node ids
 */ function useVisibleNodeIds(onlyRenderVisible) {
    const nodeIds = useStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(selector$d(onlyRenderVisible), [
        onlyRenderVisible
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    return nodeIds;
}
const selector$c = (s)=>s.updateNodeInternals;
function useResizeObserver() {
    const updateNodeInternals = useStore(selector$c);
    const [resizeObserver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useResizeObserver.useState": ()=>{
            if (typeof ResizeObserver === 'undefined') {
                return null;
            }
            return new ResizeObserver({
                "useResizeObserver.useState": (entries)=>{
                    const updates = new Map();
                    entries.forEach({
                        "useResizeObserver.useState": (entry)=>{
                            const id = entry.target.getAttribute('data-id');
                            updates.set(id, {
                                id,
                                nodeElement: entry.target,
                                force: true
                            });
                        }
                    }["useResizeObserver.useState"]);
                    updateNodeInternals(updates);
                }
            }["useResizeObserver.useState"]);
        }
    }["useResizeObserver.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResizeObserver.useEffect": ()=>{
            return ({
                "useResizeObserver.useEffect": ()=>{
                    resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
                }
            })["useResizeObserver.useEffect"];
        }
    }["useResizeObserver.useEffect"], [
        resizeObserver
    ]);
    return resizeObserver;
}
/**
 * Hook to handle the resize observation + internal updates for the passed node.
 *
 * @internal
 * @returns nodeRef - reference to the node element
 */ function useNodeObserver(param) {
    let { node, nodeType, hasDimensions, resizeObserver } = param;
    const store = useStoreApi();
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const observedNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevSourcePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(node.sourcePosition);
    const prevTargetPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(node.targetPosition);
    const prevType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(nodeType);
    const isInitialized = hasDimensions && !!node.internals.handleBounds;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNodeObserver.useEffect": ()=>{
            if (nodeRef.current && !node.hidden && (!isInitialized || observedNode.current !== nodeRef.current)) {
                if (observedNode.current) {
                    resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.unobserve(observedNode.current);
                }
                resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.observe(nodeRef.current);
                observedNode.current = nodeRef.current;
            }
        }
    }["useNodeObserver.useEffect"], [
        isInitialized,
        node.hidden
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNodeObserver.useEffect": ()=>{
            return ({
                "useNodeObserver.useEffect": ()=>{
                    if (observedNode.current) {
                        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.unobserve(observedNode.current);
                        observedNode.current = null;
                    }
                }
            })["useNodeObserver.useEffect"];
        }
    }["useNodeObserver.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNodeObserver.useEffect": ()=>{
            if (nodeRef.current) {
                /*
             * when the user programmatically changes the source or handle position, we need to update the internals
             * to make sure the edges are updated correctly
             */ const typeChanged = prevType.current !== nodeType;
                const sourcePosChanged = prevSourcePosition.current !== node.sourcePosition;
                const targetPosChanged = prevTargetPosition.current !== node.targetPosition;
                if (typeChanged || sourcePosChanged || targetPosChanged) {
                    prevType.current = nodeType;
                    prevSourcePosition.current = node.sourcePosition;
                    prevTargetPosition.current = node.targetPosition;
                    store.getState().updateNodeInternals(new Map([
                        [
                            node.id,
                            {
                                id: node.id,
                                nodeElement: nodeRef.current,
                                force: true
                            }
                        ]
                    ]));
                }
            }
        }
    }["useNodeObserver.useEffect"], [
        node.id,
        nodeType,
        node.sourcePosition,
        node.targetPosition
    ]);
    return nodeRef;
}
function NodeWrapper(param) {
    let { id, onClick, onMouseEnter, onMouseMove, onMouseLeave, onContextMenu, onDoubleClick, nodesDraggable, elementsSelectable, nodesConnectable, nodesFocusable, resizeObserver, noDragClassName, noPanClassName, disableKeyboardA11y, rfId, nodeTypes, nodeClickDistance, onError } = param;
    const { node, internals, isParent } = useStore({
        "NodeWrapper.useStore": (s)=>{
            const node = s.nodeLookup.get(id);
            const isParent = s.parentLookup.has(id);
            return {
                node,
                internals: node.internals,
                isParent
            };
        }
    }["NodeWrapper.useStore"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    let nodeType = node.type || 'default';
    let NodeComponent = (nodeTypes === null || nodeTypes === void 0 ? void 0 : nodeTypes[nodeType]) || builtinNodeTypes[nodeType];
    if (NodeComponent === undefined) {
        onError === null || onError === void 0 ? void 0 : onError('003', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorMessages"]['error003'](nodeType));
        nodeType = 'default';
        NodeComponent = builtinNodeTypes.default;
    }
    const isDraggable = !!(node.draggable || nodesDraggable && typeof node.draggable === 'undefined');
    const isSelectable = !!(node.selectable || elementsSelectable && typeof node.selectable === 'undefined');
    const isConnectable = !!(node.connectable || nodesConnectable && typeof node.connectable === 'undefined');
    const isFocusable = !!(node.focusable || nodesFocusable && typeof node.focusable === 'undefined');
    const store = useStoreApi();
    const hasDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeHasDimensions"])(node);
    const nodeRef = useNodeObserver({
        node,
        nodeType,
        hasDimensions,
        resizeObserver
    });
    const dragging = useDrag({
        nodeRef,
        disabled: node.hidden || !isDraggable,
        noDragClassName,
        handleSelector: node.dragHandle,
        nodeId: id,
        isSelectable,
        nodeClickDistance
    });
    const moveSelectedNodes = useMoveSelectedNodes();
    if (node.hidden) {
        return null;
    }
    const nodeDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeDimensions"])(node);
    const inlineDimensions = getNodeInlineStyleDimensions(node);
    const hasPointerEvents = isSelectable || isDraggable || onClick || onMouseEnter || onMouseMove || onMouseLeave;
    const onMouseEnterHandler = onMouseEnter ? (event)=>onMouseEnter(event, {
            ...internals.userNode
        }) : undefined;
    const onMouseMoveHandler = onMouseMove ? (event)=>onMouseMove(event, {
            ...internals.userNode
        }) : undefined;
    const onMouseLeaveHandler = onMouseLeave ? (event)=>onMouseLeave(event, {
            ...internals.userNode
        }) : undefined;
    const onContextMenuHandler = onContextMenu ? (event)=>onContextMenu(event, {
            ...internals.userNode
        }) : undefined;
    const onDoubleClickHandler = onDoubleClick ? (event)=>onDoubleClick(event, {
            ...internals.userNode
        }) : undefined;
    const onSelectNodeHandler = (event)=>{
        const { selectNodesOnDrag, nodeDragThreshold } = store.getState();
        if (isSelectable && (!selectNodesOnDrag || !isDraggable || nodeDragThreshold > 0)) {
            /*
             * this handler gets called by XYDrag on drag start when selectNodesOnDrag=true
             * here we only need to call it when selectNodesOnDrag=false
             */ handleNodeClick({
                id,
                store,
                nodeRef
            });
        }
        if (onClick) {
            onClick(event, {
                ...internals.userNode
            });
        }
    };
    const onKeyDown = (event)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInputDOMNode"])(event.nativeEvent) || disableKeyboardA11y) {
            return;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elementSelectionKeys"].includes(event.key) && isSelectable) {
            const unselect = event.key === 'Escape';
            handleNodeClick({
                id,
                store,
                unselect,
                nodeRef
            });
        } else if (isDraggable && node.selected && Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
            // prevent default scrolling behavior on arrow key press when node is moved
            event.preventDefault();
            store.setState({
                ariaLiveMessage: "Moved selected node ".concat(event.key.replace('Arrow', '').toLowerCase(), ". New position, x: ").concat(~~internals.positionAbsolute.x, ", y: ").concat(~~internals.positionAbsolute.y)
            });
            moveSelectedNodes({
                direction: arrowKeyDiffs[event.key],
                factor: event.shiftKey ? 4 : 1
            });
        }
    };
    var _node_selected, _node_deletable;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__node',
            "react-flow__node-".concat(nodeType),
            {
                // this is overwritable by passing `nopan` as a class name
                [noPanClassName]: isDraggable
            },
            node.className,
            {
                selected: node.selected,
                selectable: isSelectable,
                parent: isParent,
                draggable: isDraggable,
                dragging
            }
        ]),
        ref: nodeRef,
        style: {
            zIndex: internals.z,
            transform: "translate(".concat(internals.positionAbsolute.x, "px,").concat(internals.positionAbsolute.y, "px)"),
            pointerEvents: hasPointerEvents ? 'all' : 'none',
            visibility: hasDimensions ? 'visible' : 'hidden',
            ...node.style,
            ...inlineDimensions
        },
        "data-id": id,
        "data-testid": "rf__node-".concat(id),
        onMouseEnter: onMouseEnterHandler,
        onMouseMove: onMouseMoveHandler,
        onMouseLeave: onMouseLeaveHandler,
        onContextMenu: onContextMenuHandler,
        onClick: onSelectNodeHandler,
        onDoubleClick: onDoubleClickHandler,
        onKeyDown: isFocusable ? onKeyDown : undefined,
        tabIndex: isFocusable ? 0 : undefined,
        role: isFocusable ? 'button' : undefined,
        "aria-describedby": disableKeyboardA11y ? undefined : "".concat(ARIA_NODE_DESC_KEY, "-").concat(rfId),
        "aria-label": node.ariaLabel,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Provider, {
            value: id,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(NodeComponent, {
                id: id,
                data: node.data,
                type: nodeType,
                positionAbsoluteX: internals.positionAbsolute.x,
                positionAbsoluteY: internals.positionAbsolute.y,
                selected: (_node_selected = node.selected) !== null && _node_selected !== void 0 ? _node_selected : false,
                selectable: isSelectable,
                draggable: isDraggable,
                deletable: (_node_deletable = node.deletable) !== null && _node_deletable !== void 0 ? _node_deletable : true,
                isConnectable: isConnectable,
                sourcePosition: node.sourcePosition,
                targetPosition: node.targetPosition,
                dragging: dragging,
                dragHandle: node.dragHandle,
                zIndex: internals.z,
                parentId: node.parentId,
                ...nodeDimensions
            })
        })
    });
}
const selector$b = (s)=>({
        nodesDraggable: s.nodesDraggable,
        nodesConnectable: s.nodesConnectable,
        nodesFocusable: s.nodesFocusable,
        elementsSelectable: s.elementsSelectable,
        onError: s.onError
    });
function NodeRendererComponent(props) {
    const { nodesDraggable, nodesConnectable, nodesFocusable, elementsSelectable, onError } = useStore(selector$b, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const nodeIds = useVisibleNodeIds(props.onlyRenderVisibleElements);
    const resizeObserver = useResizeObserver();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-flow__nodes",
        style: containerStyle,
        children: nodeIds.map((nodeId)=>{
            return(/*
             * The split of responsibilities between NodeRenderer and
             * NodeComponentWrapper may appear weird. However, it’s designed to
             * minimize the cost of updates when individual nodes change.
             *
             * For example, when you’re dragging a single node, that node gets
             * updated multiple times per second. If `NodeRenderer` were to update
             * every time, it would have to re-run the `nodes.map()` loop every
             * time. This gets pricey with hundreds of nodes, especially if every
             * loop cycle does more than just rendering a JSX element!
             *
             * As a result of this choice, we took the following implementation
             * decisions:
             * - NodeRenderer subscribes *only* to node IDs – and therefore
             *   rerender *only* when visible nodes are added or removed.
             * - NodeRenderer performs all operations the result of which can be
             *   shared between nodes (such as creating the `ResizeObserver`
             *   instance, or subscribing to `selector`). This means extra prop
             *   drilling into `NodeComponentWrapper`, but it means we need to run
             *   these operations only once – instead of once per node.
             * - Any operations that you’d normally write inside `nodes.map` are
             *   moved into `NodeComponentWrapper`. This ensures they are
             *   memorized – so if `NodeRenderer` *has* to rerender, it only
             *   needs to regenerate the list of nodes, nothing else.
             */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(NodeWrapper, {
                id: nodeId,
                nodeTypes: props.nodeTypes,
                nodeExtent: props.nodeExtent,
                onClick: props.onNodeClick,
                onMouseEnter: props.onNodeMouseEnter,
                onMouseMove: props.onNodeMouseMove,
                onMouseLeave: props.onNodeMouseLeave,
                onContextMenu: props.onNodeContextMenu,
                onDoubleClick: props.onNodeDoubleClick,
                noDragClassName: props.noDragClassName,
                noPanClassName: props.noPanClassName,
                rfId: props.rfId,
                disableKeyboardA11y: props.disableKeyboardA11y,
                resizeObserver: resizeObserver,
                nodesDraggable: nodesDraggable,
                nodesConnectable: nodesConnectable,
                nodesFocusable: nodesFocusable,
                elementsSelectable: elementsSelectable,
                nodeClickDistance: props.nodeClickDistance,
                onError: onError
            }, nodeId));
        })
    });
}
NodeRendererComponent.displayName = 'NodeRenderer';
const NodeRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(NodeRendererComponent);
/**
 * Hook for getting the visible edge ids from the store.
 *
 * @internal
 * @param onlyRenderVisible
 * @returns array with visible edge ids
 */ function useVisibleEdgeIds(onlyRenderVisible) {
    const edgeIds = useStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVisibleEdgeIds.useStore[edgeIds]": (s)=>{
            if (!onlyRenderVisible) {
                return s.edges.map({
                    "useVisibleEdgeIds.useStore[edgeIds]": (edge)=>edge.id
                }["useVisibleEdgeIds.useStore[edgeIds]"]);
            }
            const visibleEdgeIds = [];
            if (s.width && s.height) {
                for (const edge of s.edges){
                    const sourceNode = s.nodeLookup.get(edge.source);
                    const targetNode = s.nodeLookup.get(edge.target);
                    if (sourceNode && targetNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEdgeVisible"])({
                        sourceNode,
                        targetNode,
                        width: s.width,
                        height: s.height,
                        transform: s.transform
                    })) {
                        visibleEdgeIds.push(edge.id);
                    }
                }
            }
            return visibleEdgeIds;
        }
    }["useVisibleEdgeIds.useStore[edgeIds]"], [
        onlyRenderVisible
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    return edgeIds;
}
const ArrowSymbol = (param)=>{
    let { color = 'none', strokeWidth = 1 } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("polyline", {
        style: {
            stroke: color,
            strokeWidth
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        points: "-5,-4 0,0 -5,4"
    });
};
const ArrowClosedSymbol = (param)=>{
    let { color = 'none', strokeWidth = 1 } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("polyline", {
        style: {
            stroke: color,
            fill: color,
            strokeWidth
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        points: "-5,-4 0,0 -5,4 -5,-4"
    });
};
const MarkerSymbols = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].Arrow]: ArrowSymbol,
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkerType"].ArrowClosed]: ArrowClosedSymbol
};
function useMarkerSymbol(type) {
    const store = useStoreApi();
    const symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMarkerSymbol.useMemo[symbol]": ()=>{
            const symbolExists = Object.prototype.hasOwnProperty.call(MarkerSymbols, type);
            if (!symbolExists) {
                var _store_getState_onError, _store_getState;
                (_store_getState_onError = (_store_getState = store.getState()).onError) === null || _store_getState_onError === void 0 ? void 0 : _store_getState_onError.call(_store_getState, '009', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorMessages"]['error009'](type));
                return null;
            }
            return MarkerSymbols[type];
        }
    }["useMarkerSymbol.useMemo[symbol]"], [
        type
    ]);
    return symbol;
}
const Marker = (param)=>{
    let { id, type, color, width = 12.5, height = 12.5, markerUnits = 'strokeWidth', strokeWidth, orient = 'auto-start-reverse' } = param;
    const Symbol = useMarkerSymbol(type);
    if (!Symbol) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("marker", {
        className: "react-flow__arrowhead",
        id: id,
        markerWidth: "".concat(width),
        markerHeight: "".concat(height),
        viewBox: "-10 -10 20 20",
        markerUnits: markerUnits,
        orient: orient,
        refX: "0",
        refY: "0",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Symbol, {
            color: color,
            strokeWidth: strokeWidth
        })
    });
};
/*
 * when you have multiple flows on a page and you hide the first one, the other ones have no markers anymore
 * when they do have markers with the same ids. To prevent this the user can pass a unique id to the react flow wrapper
 * that we can then use for creating our unique marker ids
 */ const MarkerDefinitions = (param)=>{
    let { defaultColor, rfId } = param;
    const edges = useStore({
        "MarkerDefinitions.useStore[edges]": (s)=>s.edges
    }["MarkerDefinitions.useStore[edges]"]);
    const defaultEdgeOptions = useStore({
        "MarkerDefinitions.useStore[defaultEdgeOptions]": (s)=>s.defaultEdgeOptions
    }["MarkerDefinitions.useStore[defaultEdgeOptions]"]);
    const markers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MarkerDefinitions.useMemo[markers]": ()=>{
            const markers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMarkerIds"])(edges, {
                id: rfId,
                defaultColor,
                defaultMarkerStart: defaultEdgeOptions === null || defaultEdgeOptions === void 0 ? void 0 : defaultEdgeOptions.markerStart,
                defaultMarkerEnd: defaultEdgeOptions === null || defaultEdgeOptions === void 0 ? void 0 : defaultEdgeOptions.markerEnd
            });
            return markers;
        }
    }["MarkerDefinitions.useMemo[markers]"], [
        edges,
        defaultEdgeOptions,
        rfId,
        defaultColor
    ]);
    if (!markers.length) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        className: "react-flow__marker",
        "aria-hidden": "true",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("defs", {
            children: markers.map((marker)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Marker, {
                    id: marker.id,
                    type: marker.type,
                    color: marker.color,
                    width: marker.width,
                    height: marker.height,
                    markerUnits: marker.markerUnits,
                    strokeWidth: marker.strokeWidth,
                    orient: marker.orient
                }, marker.id))
        })
    });
};
MarkerDefinitions.displayName = 'MarkerDefinitions';
var MarkerDefinitions$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(MarkerDefinitions);
function EdgeTextComponent(param) {
    let { x, y, label, labelStyle, labelShowBg = true, labelBgStyle, labelBgPadding = [
        2,
        4
    ], labelBgBorderRadius = 2, children, className, ...rest } = param;
    const [edgeTextBbox, setEdgeTextBbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 1,
        y: 0,
        width: 0,
        height: 0
    });
    const edgeTextClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
        'react-flow__edge-textwrapper',
        className
    ]);
    const edgeTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EdgeTextComponent.useEffect": ()=>{
            if (edgeTextRef.current) {
                const textBbox = edgeTextRef.current.getBBox();
                setEdgeTextBbox({
                    x: textBbox.x,
                    y: textBbox.y,
                    width: textBbox.width,
                    height: textBbox.height
                });
            }
        }
    }["EdgeTextComponent.useEffect"], [
        label
    ]);
    if (!label) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("g", {
        transform: "translate(".concat(x - edgeTextBbox.width / 2, " ").concat(y - edgeTextBbox.height / 2, ")"),
        className: edgeTextClasses,
        visibility: edgeTextBbox.width ? 'visible' : 'hidden',
        ...rest,
        children: [
            labelShowBg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("rect", {
                width: edgeTextBbox.width + 2 * labelBgPadding[0],
                x: -labelBgPadding[0],
                y: -labelBgPadding[1],
                height: edgeTextBbox.height + 2 * labelBgPadding[1],
                className: "react-flow__edge-textbg",
                style: labelBgStyle,
                rx: labelBgBorderRadius,
                ry: labelBgBorderRadius
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("text", {
                className: "react-flow__edge-text",
                y: edgeTextBbox.height / 2,
                dy: "0.3em",
                ref: edgeTextRef,
                style: labelStyle,
                children: label
            }),
            children
        ]
    });
}
EdgeTextComponent.displayName = 'EdgeText';
/**
 * You can use the `<EdgeText />` component as a helper component to display text
 * within your custom edges.
 *
 * @public
 *
 * @example
 * ```jsx
 * import { EdgeText } from '@xyflow/react';
 *
 * export function CustomEdgeLabel({ label }) {
 *   return (
 *     <EdgeText
 *       x={100}
 *       y={100}
 *       label={label}
 *       labelStyle={{ fill: 'white' }}
 *       labelShowBg
 *       labelBgStyle={{ fill: 'red' }}
 *       labelBgPadding={[2, 4]}
 *       labelBgBorderRadius={2}
 *     />
 *   );
 * }
 *```
 */ const EdgeText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(EdgeTextComponent);
/**
 * The `<BaseEdge />` component gets used internally for all the edges. It can be
 * used inside a custom edge and handles the invisible helper edge and the edge label
 * for you.
 *
 * @public
 * @example
 * ```jsx
 *import { BaseEdge } from '@xyflow/react';
 *
 *export function CustomEdge({ sourceX, sourceY, targetX, targetY, ...props }) {
 *  const [edgePath] = getStraightPath({
 *    sourceX,
 *    sourceY,
 *    targetX,
 *    targetY,
 *  });
 *
 *  return <BaseEdge path={edgePath} {...props} />;
 *}
 *```
 *
 * @remarks If you want to use an edge marker with the [`<BaseEdge />`](/api-reference/components/base-edge) component,
 * you can pass the `markerStart` or `markerEnd` props passed to your custom edge
 * through to the [`<BaseEdge />`](/api-reference/components/base-edge) component.
 * You can see all the props passed to a custom edge by looking at the [`EdgeProps`](/api-reference/types/edge-props) type.
 */ function BaseEdge(param) {
    let { path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, interactionWidth = 20, ...props } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                ...props,
                d: path,
                fill: "none",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
                    'react-flow__edge-path',
                    props.className
                ])
            }),
            interactionWidth && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: path,
                fill: "none",
                strokeOpacity: 0,
                strokeWidth: interactionWidth,
                className: "react-flow__edge-interaction"
            }),
            label && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumeric"])(labelX) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumeric"])(labelY) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EdgeText, {
                x: labelX,
                y: labelY,
                label: label,
                labelStyle: labelStyle,
                labelShowBg: labelShowBg,
                labelBgStyle: labelBgStyle,
                labelBgPadding: labelBgPadding,
                labelBgBorderRadius: labelBgBorderRadius
            }) : null
        ]
    });
}
function getControl(param) {
    let { pos, x1, y1, x2, y2 } = param;
    if (pos === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left || pos === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right) {
        return [
            0.5 * (x1 + x2),
            y1
        ];
    }
    return [
        x1,
        0.5 * (y1 + y2)
    ];
}
/**
 * The `getSimpleBezierPath` util returns everything you need to render a simple
 * bezier edge between two nodes.
 * @public
 * @returns
 * - `path`: the path to use in an SVG `<path>` element.
 * - `labelX`: the `x` position you can use to render a label for this edge.
 * - `labelY`: the `y` position you can use to render a label for this edge.
 * - `offsetX`: the absolute difference between the source `x` position and the `x` position of the
 * middle of this path.
 * - `offsetY`: the absolute difference between the source `y` position and the `y` position of the
 * middle of this path.
 */ function getSimpleBezierPath(param) {
    let { sourceX, sourceY, sourcePosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom, targetX, targetY, targetPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top } = param;
    const [sourceControlX, sourceControlY] = getControl({
        pos: sourcePosition,
        x1: sourceX,
        y1: sourceY,
        x2: targetX,
        y2: targetY
    });
    const [targetControlX, targetControlY] = getControl({
        pos: targetPosition,
        x1: targetX,
        y1: targetY,
        x2: sourceX,
        y2: sourceY
    });
    const [labelX, labelY, offsetX, offsetY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBezierEdgeCenter"])({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourceControlX,
        sourceControlY,
        targetControlX,
        targetControlY
    });
    return [
        "M".concat(sourceX, ",").concat(sourceY, " C").concat(sourceControlX, ",").concat(sourceControlY, " ").concat(targetControlX, ",").concat(targetControlY, " ").concat(targetX, ",").concat(targetY),
        labelX,
        labelY,
        offsetX,
        offsetY
    ];
}
function createSimpleBezierEdge(params) {
    // eslint-disable-next-line react/display-name
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((param)=>{
        let { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, markerEnd, markerStart, interactionWidth } = param;
        const [path, labelX, labelY] = getSimpleBezierPath({
            sourceX,
            sourceY,
            sourcePosition,
            targetX,
            targetY,
            targetPosition
        });
        const _id = params.isInternal ? undefined : id;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BaseEdge, {
            id: _id,
            path: path,
            labelX: labelX,
            labelY: labelY,
            label: label,
            labelStyle: labelStyle,
            labelShowBg: labelShowBg,
            labelBgStyle: labelBgStyle,
            labelBgPadding: labelBgPadding,
            labelBgBorderRadius: labelBgBorderRadius,
            style: style,
            markerEnd: markerEnd,
            markerStart: markerStart,
            interactionWidth: interactionWidth
        });
    });
}
const SimpleBezierEdge = createSimpleBezierEdge({
    isInternal: false
});
const SimpleBezierEdgeInternal = createSimpleBezierEdge({
    isInternal: true
});
SimpleBezierEdge.displayName = 'SimpleBezierEdge';
SimpleBezierEdgeInternal.displayName = 'SimpleBezierEdgeInternal';
function createSmoothStepEdge(params) {
    // eslint-disable-next-line react/display-name
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((param)=>{
        let { id, sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, sourcePosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom, targetPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top, markerEnd, markerStart, pathOptions, interactionWidth } = param;
        const [path, labelX, labelY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmoothStepPath"])({
            sourceX,
            sourceY,
            sourcePosition,
            targetX,
            targetY,
            targetPosition,
            borderRadius: pathOptions === null || pathOptions === void 0 ? void 0 : pathOptions.borderRadius,
            offset: pathOptions === null || pathOptions === void 0 ? void 0 : pathOptions.offset
        });
        const _id = params.isInternal ? undefined : id;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BaseEdge, {
            id: _id,
            path: path,
            labelX: labelX,
            labelY: labelY,
            label: label,
            labelStyle: labelStyle,
            labelShowBg: labelShowBg,
            labelBgStyle: labelBgStyle,
            labelBgPadding: labelBgPadding,
            labelBgBorderRadius: labelBgBorderRadius,
            style: style,
            markerEnd: markerEnd,
            markerStart: markerStart,
            interactionWidth: interactionWidth
        });
    });
}
/**
 * Component that can be used inside a custom edge to render a smooth step edge.
 *
 * @public
 * @example
 *
 * ```tsx
 * import { SmoothStepEdge } from '@xyflow/react';
 *
 * function CustomEdge({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) {
 *   return (
 *     <SmoothStepEdge
 *       sourceX={sourceX}
 *       sourceY={sourceY}
 *       targetX={targetX}
 *       targetY={targetY}
 *       sourcePosition={sourcePosition}
 *       targetPosition={targetPosition}
 *     />
 *   );
 * }
 * ```
 */ const SmoothStepEdge = createSmoothStepEdge({
    isInternal: false
});
/**
 * @internal
 */ const SmoothStepEdgeInternal = createSmoothStepEdge({
    isInternal: true
});
SmoothStepEdge.displayName = 'SmoothStepEdge';
SmoothStepEdgeInternal.displayName = 'SmoothStepEdgeInternal';
function createStepEdge(params) {
    // eslint-disable-next-line react/display-name
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((param)=>{
        let { id, ...props } = param;
        var _props_pathOptions;
        const _id = params.isInternal ? undefined : id;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SmoothStepEdge, {
            ...props,
            id: _id,
            pathOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "createStepEdge.useMemo": ()=>{
                    var _props_pathOptions;
                    return {
                        borderRadius: 0,
                        offset: (_props_pathOptions = props.pathOptions) === null || _props_pathOptions === void 0 ? void 0 : _props_pathOptions.offset
                    };
                }
            }["createStepEdge.useMemo"], [
                (_props_pathOptions = props.pathOptions) === null || _props_pathOptions === void 0 ? void 0 : _props_pathOptions.offset
            ])
        });
    });
}
/**
 * Component that can be used inside a custom edge to render a step edge.
 *
 * @public
 * @example
 *
 * ```tsx
 * import { StepEdge } from '@xyflow/react';
 *
 * function CustomEdge({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) {
 *   return (
 *     <StepEdge
 *       sourceX={sourceX}
 *       sourceY={sourceY}
 *       targetX={targetX}
 *       targetY={targetY}
 *       sourcePosition={sourcePosition}
 *       targetPosition={targetPosition}
 *     />
 *   );
 * }
 * ```
 */ const StepEdge = createStepEdge({
    isInternal: false
});
/**
 * @internal
 */ const StepEdgeInternal = createStepEdge({
    isInternal: true
});
StepEdge.displayName = 'StepEdge';
StepEdgeInternal.displayName = 'StepEdgeInternal';
function createStraightEdge(params) {
    // eslint-disable-next-line react/display-name
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((param)=>{
        let { id, sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, markerEnd, markerStart, interactionWidth } = param;
        const [path, labelX, labelY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStraightPath"])({
            sourceX,
            sourceY,
            targetX,
            targetY
        });
        const _id = params.isInternal ? undefined : id;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BaseEdge, {
            id: _id,
            path: path,
            labelX: labelX,
            labelY: labelY,
            label: label,
            labelStyle: labelStyle,
            labelShowBg: labelShowBg,
            labelBgStyle: labelBgStyle,
            labelBgPadding: labelBgPadding,
            labelBgBorderRadius: labelBgBorderRadius,
            style: style,
            markerEnd: markerEnd,
            markerStart: markerStart,
            interactionWidth: interactionWidth
        });
    });
}
/**
 * Component that can be used inside a custom edge to render a straight line.
 *
 * @public
 * @example
 *
 * ```tsx
 * import { StraightEdge } from '@xyflow/react';
 *
 * function CustomEdge({ sourceX, sourceY, targetX, targetY }) {
 *   return (
 *     <StraightEdge
 *       sourceX={sourceX}
 *       sourceY={sourceY}
 *       targetX={targetX}
 *       targetY={targetY}
 *     />
 *   );
 * }
 * ```
 */ const StraightEdge = createStraightEdge({
    isInternal: false
});
/**
 * @internal
 */ const StraightEdgeInternal = createStraightEdge({
    isInternal: true
});
StraightEdge.displayName = 'StraightEdge';
StraightEdgeInternal.displayName = 'StraightEdgeInternal';
function createBezierEdge(params) {
    // eslint-disable-next-line react/display-name
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((param)=>{
        let { id, sourceX, sourceY, targetX, targetY, sourcePosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom, targetPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, markerEnd, markerStart, pathOptions, interactionWidth } = param;
        const [path, labelX, labelY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBezierPath"])({
            sourceX,
            sourceY,
            sourcePosition,
            targetX,
            targetY,
            targetPosition,
            curvature: pathOptions === null || pathOptions === void 0 ? void 0 : pathOptions.curvature
        });
        const _id = params.isInternal ? undefined : id;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BaseEdge, {
            id: _id,
            path: path,
            labelX: labelX,
            labelY: labelY,
            label: label,
            labelStyle: labelStyle,
            labelShowBg: labelShowBg,
            labelBgStyle: labelBgStyle,
            labelBgPadding: labelBgPadding,
            labelBgBorderRadius: labelBgBorderRadius,
            style: style,
            markerEnd: markerEnd,
            markerStart: markerStart,
            interactionWidth: interactionWidth
        });
    });
}
/**
 * Component that can be used inside a custom edge to render a bezier curve.
 *
 * @public
 * @example
 *
 * ```tsx
 * import { BezierEdge } from '@xyflow/react';
 *
 * function CustomEdge({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) {
 *   return (
 *     <BezierEdge
 *       sourceX={sourceX}
 *       sourceY={sourceY}
 *       targetX={targetX}
 *       targetY={targetY}
 *       sourcePosition={sourcePosition}
 *       targetPosition={targetPosition}
 *     />
 *   );
 * }
 * ```
 */ const BezierEdge = createBezierEdge({
    isInternal: false
});
/**
 * @internal
 */ const BezierEdgeInternal = createBezierEdge({
    isInternal: true
});
BezierEdge.displayName = 'BezierEdge';
BezierEdgeInternal.displayName = 'BezierEdgeInternal';
const builtinEdgeTypes = {
    default: BezierEdgeInternal,
    straight: StraightEdgeInternal,
    step: StepEdgeInternal,
    smoothstep: SmoothStepEdgeInternal,
    simplebezier: SimpleBezierEdgeInternal
};
const nullPosition = {
    sourceX: null,
    sourceY: null,
    targetX: null,
    targetY: null,
    sourcePosition: null,
    targetPosition: null
};
const shiftX = (x, shift, position)=>{
    if (position === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left) return x - shift;
    if (position === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right) return x + shift;
    return x;
};
const shiftY = (y, shift, position)=>{
    if (position === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top) return y - shift;
    if (position === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Bottom) return y + shift;
    return y;
};
const EdgeUpdaterClassName = 'react-flow__edgeupdater';
/**
 * @internal
 */ function EdgeAnchor(param) {
    let { position, centerX, centerY, radius = 10, onMouseDown, onMouseEnter, onMouseOut, type } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("circle", {
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseOut: onMouseOut,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            EdgeUpdaterClassName,
            "".concat(EdgeUpdaterClassName, "-").concat(type)
        ]),
        cx: shiftX(centerX, radius, position),
        cy: shiftY(centerY, radius, position),
        r: radius,
        stroke: "transparent",
        fill: "transparent"
    });
}
function EdgeUpdateAnchors(param) {
    let { isReconnectable, reconnectRadius, edge, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, onReconnect, onReconnectStart, onReconnectEnd, setReconnecting, setUpdateHover } = param;
    const store = useStoreApi();
    const handleEdgeUpdater = (event, oppositeHandle)=>{
        // avoid triggering edge updater if mouse btn is not left
        if (event.button !== 0) {
            return;
        }
        const { autoPanOnConnect, domNode, isValidConnection, connectionMode, connectionRadius, lib, onConnectStart, onConnectEnd, cancelConnection, nodeLookup, rfId: flowId, panBy, updateConnection } = store.getState();
        const isTarget = oppositeHandle.type === 'target';
        setReconnecting(true);
        onReconnectStart === null || onReconnectStart === void 0 ? void 0 : onReconnectStart(event, edge, oppositeHandle.type);
        const _onReconnectEnd = (evt, connectionState)=>{
            setReconnecting(false);
            onReconnectEnd === null || onReconnectEnd === void 0 ? void 0 : onReconnectEnd(evt, edge, oppositeHandle.type, connectionState);
        };
        const onConnectEdge = (connection)=>onReconnect === null || onReconnect === void 0 ? void 0 : onReconnect(edge, connection);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XYHandle"].onPointerDown(event.nativeEvent, {
            autoPanOnConnect,
            connectionMode,
            connectionRadius,
            domNode,
            handleId: oppositeHandle.id,
            nodeId: oppositeHandle.nodeId,
            nodeLookup,
            isTarget,
            edgeUpdaterType: oppositeHandle.type,
            lib,
            flowId,
            cancelConnection,
            panBy,
            isValidConnection,
            onConnect: onConnectEdge,
            onConnectStart,
            onConnectEnd,
            onReconnectEnd: _onReconnectEnd,
            updateConnection,
            getTransform: ()=>store.getState().transform,
            getFromHandle: ()=>store.getState().connection.fromHandle
        });
    };
    const onReconnectSourceMouseDown = (event)=>{
        var _edge_targetHandle;
        return handleEdgeUpdater(event, {
            nodeId: edge.target,
            id: (_edge_targetHandle = edge.targetHandle) !== null && _edge_targetHandle !== void 0 ? _edge_targetHandle : null,
            type: 'target'
        });
    };
    const onReconnectTargetMouseDown = (event)=>{
        var _edge_sourceHandle;
        return handleEdgeUpdater(event, {
            nodeId: edge.source,
            id: (_edge_sourceHandle = edge.sourceHandle) !== null && _edge_sourceHandle !== void 0 ? _edge_sourceHandle : null,
            type: 'source'
        });
    };
    const onReconnectMouseEnter = ()=>setUpdateHover(true);
    const onReconnectMouseOut = ()=>setUpdateHover(false);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (isReconnectable === true || isReconnectable === 'source') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EdgeAnchor, {
                position: sourcePosition,
                centerX: sourceX,
                centerY: sourceY,
                radius: reconnectRadius,
                onMouseDown: onReconnectSourceMouseDown,
                onMouseEnter: onReconnectMouseEnter,
                onMouseOut: onReconnectMouseOut,
                type: "source"
            }),
            (isReconnectable === true || isReconnectable === 'target') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EdgeAnchor, {
                position: targetPosition,
                centerX: targetX,
                centerY: targetY,
                radius: reconnectRadius,
                onMouseDown: onReconnectTargetMouseDown,
                onMouseEnter: onReconnectMouseEnter,
                onMouseOut: onReconnectMouseOut,
                type: "target"
            })
        ]
    });
}
function EdgeWrapper(param) {
    let { id, edgesFocusable, edgesReconnectable, elementsSelectable, onClick, onDoubleClick, onContextMenu, onMouseEnter, onMouseMove, onMouseLeave, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, rfId, edgeTypes, noPanClassName, onError, disableKeyboardA11y } = param;
    let edge = useStore({
        "EdgeWrapper.useStore[edge]": (s)=>s.edgeLookup.get(id)
    }["EdgeWrapper.useStore[edge]"]);
    const defaultEdgeOptions = useStore({
        "EdgeWrapper.useStore[defaultEdgeOptions]": (s)=>s.defaultEdgeOptions
    }["EdgeWrapper.useStore[defaultEdgeOptions]"]);
    edge = defaultEdgeOptions ? {
        ...defaultEdgeOptions,
        ...edge
    } : edge;
    let edgeType = edge.type || 'default';
    let EdgeComponent = (edgeTypes === null || edgeTypes === void 0 ? void 0 : edgeTypes[edgeType]) || builtinEdgeTypes[edgeType];
    if (EdgeComponent === undefined) {
        onError === null || onError === void 0 ? void 0 : onError('011', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorMessages"]['error011'](edgeType));
        edgeType = 'default';
        EdgeComponent = builtinEdgeTypes.default;
    }
    const isFocusable = !!(edge.focusable || edgesFocusable && typeof edge.focusable === 'undefined');
    const isReconnectable = typeof onReconnect !== 'undefined' && (edge.reconnectable || edgesReconnectable && typeof edge.reconnectable === 'undefined');
    const isSelectable = !!(edge.selectable || elementsSelectable && typeof edge.selectable === 'undefined');
    const edgeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [updateHover, setUpdateHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reconnecting, setReconnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const store = useStoreApi();
    const { zIndex, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = useStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EdgeWrapper.useStore.useCallback": (store)=>{
            const sourceNode = store.nodeLookup.get(edge.source);
            const targetNode = store.nodeLookup.get(edge.target);
            if (!sourceNode || !targetNode) {
                return {
                    zIndex: edge.zIndex,
                    ...nullPosition
                };
            }
            const edgePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEdgePosition"])({
                id,
                sourceNode,
                targetNode,
                sourceHandle: edge.sourceHandle || null,
                targetHandle: edge.targetHandle || null,
                connectionMode: store.connectionMode,
                onError
            });
            const zIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getElevatedEdgeZIndex"])({
                selected: edge.selected,
                zIndex: edge.zIndex,
                sourceNode,
                targetNode,
                elevateOnSelect: store.elevateEdgesOnSelect
            });
            return {
                zIndex,
                ...edgePosition || nullPosition
            };
        }
    }["EdgeWrapper.useStore.useCallback"], [
        edge.source,
        edge.target,
        edge.sourceHandle,
        edge.targetHandle,
        edge.selected,
        edge.zIndex
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const markerStartUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EdgeWrapper.useMemo[markerStartUrl]": ()=>edge.markerStart ? "url('#".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkerId"])(edge.markerStart, rfId), "')") : undefined
    }["EdgeWrapper.useMemo[markerStartUrl]"], [
        edge.markerStart,
        rfId
    ]);
    const markerEndUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EdgeWrapper.useMemo[markerEndUrl]": ()=>edge.markerEnd ? "url('#".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkerId"])(edge.markerEnd, rfId), "')") : undefined
    }["EdgeWrapper.useMemo[markerEndUrl]"], [
        edge.markerEnd,
        rfId
    ]);
    if (edge.hidden || sourceX === null || sourceY === null || targetX === null || targetY === null) {
        return null;
    }
    const onEdgeClick = (event)=>{
        const { addSelectedEdges, unselectNodesAndEdges, multiSelectionActive } = store.getState();
        if (isSelectable) {
            store.setState({
                nodesSelectionActive: false
            });
            if (edge.selected && multiSelectionActive) {
                var _edgeRef_current;
                unselectNodesAndEdges({
                    nodes: [],
                    edges: [
                        edge
                    ]
                });
                (_edgeRef_current = edgeRef.current) === null || _edgeRef_current === void 0 ? void 0 : _edgeRef_current.blur();
            } else {
                addSelectedEdges([
                    id
                ]);
            }
        }
        if (onClick) {
            onClick(event, edge);
        }
    };
    const onEdgeDoubleClick = onDoubleClick ? (event)=>{
        onDoubleClick(event, {
            ...edge
        });
    } : undefined;
    const onEdgeContextMenu = onContextMenu ? (event)=>{
        onContextMenu(event, {
            ...edge
        });
    } : undefined;
    const onEdgeMouseEnter = onMouseEnter ? (event)=>{
        onMouseEnter(event, {
            ...edge
        });
    } : undefined;
    const onEdgeMouseMove = onMouseMove ? (event)=>{
        onMouseMove(event, {
            ...edge
        });
    } : undefined;
    const onEdgeMouseLeave = onMouseLeave ? (event)=>{
        onMouseLeave(event, {
            ...edge
        });
    } : undefined;
    const onKeyDown = (event)=>{
        if (!disableKeyboardA11y && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elementSelectionKeys"].includes(event.key) && isSelectable) {
            const { unselectNodesAndEdges, addSelectedEdges } = store.getState();
            const unselect = event.key === 'Escape';
            if (unselect) {
                var _edgeRef_current;
                (_edgeRef_current = edgeRef.current) === null || _edgeRef_current === void 0 ? void 0 : _edgeRef_current.blur();
                unselectNodesAndEdges({
                    edges: [
                        edge
                    ]
                });
            } else {
                addSelectedEdges([
                    id
                ]);
            }
        }
    };
    var _edge_deletable;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        style: {
            zIndex
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("g", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
                'react-flow__edge',
                "react-flow__edge-".concat(edgeType),
                edge.className,
                noPanClassName,
                {
                    selected: edge.selected,
                    animated: edge.animated,
                    inactive: !isSelectable && !onClick,
                    updating: updateHover,
                    selectable: isSelectable
                }
            ]),
            onClick: onEdgeClick,
            onDoubleClick: onEdgeDoubleClick,
            onContextMenu: onEdgeContextMenu,
            onMouseEnter: onEdgeMouseEnter,
            onMouseMove: onEdgeMouseMove,
            onMouseLeave: onEdgeMouseLeave,
            onKeyDown: isFocusable ? onKeyDown : undefined,
            tabIndex: isFocusable ? 0 : undefined,
            role: isFocusable ? 'button' : 'img',
            "data-id": id,
            "data-testid": "rf__edge-".concat(id),
            "aria-label": edge.ariaLabel === null ? undefined : edge.ariaLabel || "Edge from ".concat(edge.source, " to ").concat(edge.target),
            "aria-describedby": isFocusable ? "".concat(ARIA_EDGE_DESC_KEY, "-").concat(rfId) : undefined,
            ref: edgeRef,
            children: [
                !reconnecting && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EdgeComponent, {
                    id: id,
                    source: edge.source,
                    target: edge.target,
                    type: edge.type,
                    selected: edge.selected,
                    animated: edge.animated,
                    selectable: isSelectable,
                    deletable: (_edge_deletable = edge.deletable) !== null && _edge_deletable !== void 0 ? _edge_deletable : true,
                    label: edge.label,
                    labelStyle: edge.labelStyle,
                    labelShowBg: edge.labelShowBg,
                    labelBgStyle: edge.labelBgStyle,
                    labelBgPadding: edge.labelBgPadding,
                    labelBgBorderRadius: edge.labelBgBorderRadius,
                    sourceX: sourceX,
                    sourceY: sourceY,
                    targetX: targetX,
                    targetY: targetY,
                    sourcePosition: sourcePosition,
                    targetPosition: targetPosition,
                    data: edge.data,
                    style: edge.style,
                    sourceHandleId: edge.sourceHandle,
                    targetHandleId: edge.targetHandle,
                    markerStart: markerStartUrl,
                    markerEnd: markerEndUrl,
                    pathOptions: 'pathOptions' in edge ? edge.pathOptions : undefined,
                    interactionWidth: edge.interactionWidth
                }),
                isReconnectable && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EdgeUpdateAnchors, {
                    edge: edge,
                    isReconnectable: isReconnectable,
                    reconnectRadius: reconnectRadius,
                    onReconnect: onReconnect,
                    onReconnectStart: onReconnectStart,
                    onReconnectEnd: onReconnectEnd,
                    sourceX: sourceX,
                    sourceY: sourceY,
                    targetX: targetX,
                    targetY: targetY,
                    sourcePosition: sourcePosition,
                    targetPosition: targetPosition,
                    setUpdateHover: setUpdateHover,
                    setReconnecting: setReconnecting
                })
            ]
        })
    });
}
const selector$a = (s)=>({
        edgesFocusable: s.edgesFocusable,
        edgesReconnectable: s.edgesReconnectable,
        elementsSelectable: s.elementsSelectable,
        connectionMode: s.connectionMode,
        onError: s.onError
    });
function EdgeRendererComponent(param) {
    let { defaultMarkerColor, onlyRenderVisibleElements, rfId, edgeTypes, noPanClassName, onReconnect, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onEdgeClick, reconnectRadius, onEdgeDoubleClick, onReconnectStart, onReconnectEnd, disableKeyboardA11y } = param;
    const { edgesFocusable, edgesReconnectable, elementsSelectable, onError } = useStore(selector$a, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const edgeIds = useVisibleEdgeIds(onlyRenderVisibleElements);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "react-flow__edges",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MarkerDefinitions$1, {
                defaultColor: defaultMarkerColor,
                rfId: rfId
            }),
            edgeIds.map((id)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EdgeWrapper, {
                    id: id,
                    edgesFocusable: edgesFocusable,
                    edgesReconnectable: edgesReconnectable,
                    elementsSelectable: elementsSelectable,
                    noPanClassName: noPanClassName,
                    onReconnect: onReconnect,
                    onContextMenu: onEdgeContextMenu,
                    onMouseEnter: onEdgeMouseEnter,
                    onMouseMove: onEdgeMouseMove,
                    onMouseLeave: onEdgeMouseLeave,
                    onClick: onEdgeClick,
                    reconnectRadius: reconnectRadius,
                    onDoubleClick: onEdgeDoubleClick,
                    onReconnectStart: onReconnectStart,
                    onReconnectEnd: onReconnectEnd,
                    rfId: rfId,
                    onError: onError,
                    edgeTypes: edgeTypes,
                    disableKeyboardA11y: disableKeyboardA11y
                }, id);
            })
        ]
    });
}
EdgeRendererComponent.displayName = 'EdgeRenderer';
const EdgeRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(EdgeRendererComponent);
const selector$9 = (s)=>"translate(".concat(s.transform[0], "px,").concat(s.transform[1], "px) scale(").concat(s.transform[2], ")");
function Viewport(param) {
    let { children } = param;
    const transform = useStore(selector$9);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "react-flow__viewport xyflow__viewport react-flow__container",
        style: {
            transform
        },
        children: children
    });
}
/**
 * Hook for calling onInit handler.
 *
 * @internal
 */ function useOnInitHandler(onInit) {
    const rfInstance = useReactFlow();
    const isInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOnInitHandler.useEffect": ()=>{
            if (!isInitialized.current && rfInstance.viewportInitialized && onInit) {
                setTimeout({
                    "useOnInitHandler.useEffect": ()=>onInit(rfInstance)
                }["useOnInitHandler.useEffect"], 1);
                isInitialized.current = true;
            }
        }
    }["useOnInitHandler.useEffect"], [
        onInit,
        rfInstance.viewportInitialized
    ]);
}
const selector$8 = (state)=>{
    var _state_panZoom;
    return (_state_panZoom = state.panZoom) === null || _state_panZoom === void 0 ? void 0 : _state_panZoom.syncViewport;
};
/**
 * Hook for syncing the viewport with the panzoom instance.
 *
 * @internal
 * @param viewport
 */ function useViewportSync(viewport) {
    const syncViewport = useStore(selector$8);
    const store = useStoreApi();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useViewportSync.useEffect": ()=>{
            if (viewport) {
                syncViewport === null || syncViewport === void 0 ? void 0 : syncViewport(viewport);
                store.setState({
                    transform: [
                        viewport.x,
                        viewport.y,
                        viewport.zoom
                    ]
                });
            }
        }
    }["useViewportSync.useEffect"], [
        viewport,
        syncViewport
    ]);
    return null;
}
function storeSelector$1(s) {
    return s.connection.inProgress ? {
        ...s.connection,
        to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointToRendererPoint"])(s.connection.to, s.transform)
    } : {
        ...s.connection
    };
}
function getSelector(connectionSelector) {
    if (connectionSelector) {
        const combinedSelector = (s)=>{
            const connection = storeSelector$1(s);
            return connectionSelector(connection);
        };
        return combinedSelector;
    }
    return storeSelector$1;
}
/**
 * The `useConnection` hook returns the current connection when there is an active
 * connection interaction. If no connection interaction is active, it returns null
 * for every property. A typical use case for this hook is to colorize handles
 * based on a certain condition (e.g. if the connection is valid or not).
 *
 * @public
 * @param connectionSelector - An optional selector function used to extract a slice of the
 * `ConnectionState` data. Using a selector can prevent component re-renders where data you don't
 * otherwise care about might change. If a selector is not provided, the entire `ConnectionState`
 * object is returned unchanged.
 * @example
 *
 * ```tsx
 *import { useConnection } from '@xyflow/react';
 *
 *function App() {
 *  const connection = useConnection();
 *
 *  return (
 *    <div> {connection ? `Someone is trying to make a connection from ${connection.fromNode} to this one.` : 'There are currently no incoming connections!'}
 *
 *   </div>
 *   );
 * }
 * ```
 *
 * @returns ConnectionState
 */ function useConnection(connectionSelector) {
    const combinedSelector = getSelector(connectionSelector);
    return useStore(combinedSelector, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
}
const selector$7 = (s)=>({
        nodesConnectable: s.nodesConnectable,
        isValid: s.connection.isValid,
        inProgress: s.connection.inProgress,
        width: s.width,
        height: s.height
    });
function ConnectionLineWrapper(param) {
    let { containerStyle, style, type, component } = param;
    const { nodesConnectable, width, height, isValid, inProgress } = useStore(selector$7, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const renderConnection = !!(width && nodesConnectable && inProgress);
    if (!renderConnection) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        style: containerStyle,
        width: width,
        height: height,
        className: "react-flow__connectionline react-flow__container",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("g", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
                'react-flow__connection',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectionStatus"])(isValid)
            ]),
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ConnectionLine, {
                style: style,
                type: type,
                CustomComponent: component,
                isValid: isValid
            })
        })
    });
}
const ConnectionLine = (param)=>{
    let { style, type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionLineType"].Bezier, CustomComponent, isValid } = param;
    const { inProgress, from, fromNode, fromHandle, fromPosition, to, toNode, toHandle, toPosition } = useConnection();
    if (!inProgress) {
        return;
    }
    if (CustomComponent) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CustomComponent, {
            connectionLineType: type,
            connectionLineStyle: style,
            fromNode: fromNode,
            fromHandle: fromHandle,
            fromX: from.x,
            fromY: from.y,
            toX: to.x,
            toY: to.y,
            fromPosition: fromPosition,
            toPosition: toPosition,
            connectionStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectionStatus"])(isValid),
            toNode: toNode,
            toHandle: toHandle
        });
    }
    let path = '';
    const pathParams = {
        sourceX: from.x,
        sourceY: from.y,
        sourcePosition: fromPosition,
        targetX: to.x,
        targetY: to.y,
        targetPosition: toPosition
    };
    switch(type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionLineType"].Bezier:
            [path] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBezierPath"])(pathParams);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionLineType"].SimpleBezier:
            [path] = getSimpleBezierPath(pathParams);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionLineType"].Step:
            [path] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmoothStepPath"])({
                ...pathParams,
                borderRadius: 0
            });
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionLineType"].SmoothStep:
            [path] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSmoothStepPath"])(pathParams);
            break;
        default:
            [path] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStraightPath"])(pathParams);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
        d: path,
        fill: "none",
        className: "react-flow__connection-path",
        style: style
    });
};
ConnectionLine.displayName = 'ConnectionLine';
const emptyTypes = {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useNodeOrEdgeTypesWarning() {
    let nodeOrEdgeTypes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : emptyTypes;
    const typesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(nodeOrEdgeTypes);
    const store = useStoreApi();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNodeOrEdgeTypesWarning.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const usedKeys = new Set([
                    ...Object.keys(typesRef.current),
                    ...Object.keys(nodeOrEdgeTypes)
                ]);
                for (const key of usedKeys){
                    if (typesRef.current[key] !== nodeOrEdgeTypes[key]) {
                        var _store_getState_onError, _store_getState;
                        (_store_getState_onError = (_store_getState = store.getState()).onError) === null || _store_getState_onError === void 0 ? void 0 : _store_getState_onError.call(_store_getState, '002', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorMessages"]['error002']());
                        break;
                    }
                }
                typesRef.current = nodeOrEdgeTypes;
            }
        }
    }["useNodeOrEdgeTypesWarning.useEffect"], [
        nodeOrEdgeTypes
    ]);
}
function useStylesLoadedWarning() {
    const store = useStoreApi();
    const checked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStylesLoadedWarning.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                if (!checked.current) {
                    const pane = document.querySelector('.react-flow__pane');
                    if (pane && !(window.getComputedStyle(pane).zIndex === '1')) {
                        var _store_getState_onError, _store_getState;
                        (_store_getState_onError = (_store_getState = store.getState()).onError) === null || _store_getState_onError === void 0 ? void 0 : _store_getState_onError.call(_store_getState, '013', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorMessages"]['error013']('react'));
                    }
                    checked.current = true;
                }
            }
        }
    }["useStylesLoadedWarning.useEffect"], []);
}
function GraphViewComponent(param) {
    let { nodeTypes, edgeTypes, onInit, onNodeClick, onEdgeClick, onNodeDoubleClick, onEdgeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onSelectionContextMenu, onSelectionStart, onSelectionEnd, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, deleteKeyCode, onlyRenderVisibleElements, elementsSelectable, defaultViewport, translateExtent, minZoom, maxZoom, preventScrolling, defaultMarkerColor, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, paneClickDistance, nodeClickDistance, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, noDragClassName, noWheelClassName, noPanClassName, disableKeyboardA11y, nodeExtent, rfId, viewport, onViewportChange } = param;
    useNodeOrEdgeTypesWarning(nodeTypes);
    useNodeOrEdgeTypesWarning(edgeTypes);
    useStylesLoadedWarning();
    useOnInitHandler(onInit);
    useViewportSync(viewport);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FlowRenderer, {
        onPaneClick: onPaneClick,
        onPaneMouseEnter: onPaneMouseEnter,
        onPaneMouseMove: onPaneMouseMove,
        onPaneMouseLeave: onPaneMouseLeave,
        onPaneContextMenu: onPaneContextMenu,
        onPaneScroll: onPaneScroll,
        paneClickDistance: paneClickDistance,
        deleteKeyCode: deleteKeyCode,
        selectionKeyCode: selectionKeyCode,
        selectionOnDrag: selectionOnDrag,
        selectionMode: selectionMode,
        onSelectionStart: onSelectionStart,
        onSelectionEnd: onSelectionEnd,
        multiSelectionKeyCode: multiSelectionKeyCode,
        panActivationKeyCode: panActivationKeyCode,
        zoomActivationKeyCode: zoomActivationKeyCode,
        elementsSelectable: elementsSelectable,
        zoomOnScroll: zoomOnScroll,
        zoomOnPinch: zoomOnPinch,
        zoomOnDoubleClick: zoomOnDoubleClick,
        panOnScroll: panOnScroll,
        panOnScrollSpeed: panOnScrollSpeed,
        panOnScrollMode: panOnScrollMode,
        panOnDrag: panOnDrag,
        defaultViewport: defaultViewport,
        translateExtent: translateExtent,
        minZoom: minZoom,
        maxZoom: maxZoom,
        onSelectionContextMenu: onSelectionContextMenu,
        preventScrolling: preventScrolling,
        noDragClassName: noDragClassName,
        noWheelClassName: noWheelClassName,
        noPanClassName: noPanClassName,
        disableKeyboardA11y: disableKeyboardA11y,
        onViewportChange: onViewportChange,
        isControlledViewport: !!viewport,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Viewport, {
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EdgeRenderer, {
                    edgeTypes: edgeTypes,
                    onEdgeClick: onEdgeClick,
                    onEdgeDoubleClick: onEdgeDoubleClick,
                    onReconnect: onReconnect,
                    onReconnectStart: onReconnectStart,
                    onReconnectEnd: onReconnectEnd,
                    onlyRenderVisibleElements: onlyRenderVisibleElements,
                    onEdgeContextMenu: onEdgeContextMenu,
                    onEdgeMouseEnter: onEdgeMouseEnter,
                    onEdgeMouseMove: onEdgeMouseMove,
                    onEdgeMouseLeave: onEdgeMouseLeave,
                    reconnectRadius: reconnectRadius,
                    defaultMarkerColor: defaultMarkerColor,
                    noPanClassName: noPanClassName,
                    disableKeyboardA11y: disableKeyboardA11y,
                    rfId: rfId
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ConnectionLineWrapper, {
                    style: connectionLineStyle,
                    type: connectionLineType,
                    component: connectionLineComponent,
                    containerStyle: connectionLineContainerStyle
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: "react-flow__edgelabel-renderer"
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(NodeRenderer, {
                    nodeTypes: nodeTypes,
                    onNodeClick: onNodeClick,
                    onNodeDoubleClick: onNodeDoubleClick,
                    onNodeMouseEnter: onNodeMouseEnter,
                    onNodeMouseMove: onNodeMouseMove,
                    onNodeMouseLeave: onNodeMouseLeave,
                    onNodeContextMenu: onNodeContextMenu,
                    nodeClickDistance: nodeClickDistance,
                    onlyRenderVisibleElements: onlyRenderVisibleElements,
                    noPanClassName: noPanClassName,
                    noDragClassName: noDragClassName,
                    disableKeyboardA11y: disableKeyboardA11y,
                    nodeExtent: nodeExtent,
                    rfId: rfId
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: "react-flow__viewport-portal"
                })
            ]
        })
    });
}
GraphViewComponent.displayName = 'GraphView';
const GraphView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(GraphViewComponent);
const getInitialState = function() {
    let { nodes, edges, defaultNodes, defaultEdges, width, height, fitView, fitViewOptions, minZoom = 0.5, maxZoom = 2, nodeOrigin, nodeExtent } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const nodeLookup = new Map();
    const parentLookup = new Map();
    const connectionLookup = new Map();
    const edgeLookup = new Map();
    var _ref;
    const storeEdges = (_ref = defaultEdges !== null && defaultEdges !== void 0 ? defaultEdges : edges) !== null && _ref !== void 0 ? _ref : [];
    var _ref1;
    const storeNodes = (_ref1 = defaultNodes !== null && defaultNodes !== void 0 ? defaultNodes : nodes) !== null && _ref1 !== void 0 ? _ref1 : [];
    const storeNodeOrigin = nodeOrigin !== null && nodeOrigin !== void 0 ? nodeOrigin : [
        0,
        0
    ];
    const storeNodeExtent = nodeExtent !== null && nodeExtent !== void 0 ? nodeExtent : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infiniteExtent"];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateConnectionLookup"])(connectionLookup, edgeLookup, storeEdges);
    const nodesInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adoptUserNodes"])(storeNodes, nodeLookup, parentLookup, {
        nodeOrigin: storeNodeOrigin,
        nodeExtent: storeNodeExtent,
        elevateNodesOnSelect: false
    });
    let transform = [
        0,
        0,
        1
    ];
    if (fitView && width && height) {
        const bounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalNodesBounds"])(nodeLookup, {
            filter: (node)=>!!((node.width || node.initialWidth) && (node.height || node.initialHeight))
        });
        var _fitViewOptions_padding;
        const { x, y, zoom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getViewportForBounds"])(bounds, width, height, minZoom, maxZoom, (_fitViewOptions_padding = fitViewOptions === null || fitViewOptions === void 0 ? void 0 : fitViewOptions.padding) !== null && _fitViewOptions_padding !== void 0 ? _fitViewOptions_padding : 0.1);
        transform = [
            x,
            y,
            zoom
        ];
    }
    return {
        rfId: '1',
        width: 0,
        height: 0,
        transform,
        nodes: storeNodes,
        nodesInitialized,
        nodeLookup,
        parentLookup,
        edges: storeEdges,
        edgeLookup,
        connectionLookup,
        onNodesChange: null,
        onEdgesChange: null,
        hasDefaultNodes: defaultNodes !== undefined,
        hasDefaultEdges: defaultEdges !== undefined,
        panZoom: null,
        minZoom,
        maxZoom,
        translateExtent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infiniteExtent"],
        nodeExtent: storeNodeExtent,
        nodesSelectionActive: false,
        userSelectionActive: false,
        userSelectionRect: null,
        connectionMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionMode"].Strict,
        domNode: null,
        paneDragging: false,
        noPanClassName: 'nopan',
        nodeOrigin: storeNodeOrigin,
        nodeDragThreshold: 1,
        snapGrid: [
            15,
            15
        ],
        snapToGrid: false,
        nodesDraggable: true,
        nodesConnectable: true,
        nodesFocusable: true,
        edgesFocusable: true,
        edgesReconnectable: true,
        elementsSelectable: true,
        elevateNodesOnSelect: true,
        elevateEdgesOnSelect: false,
        selectNodesOnDrag: true,
        multiSelectionActive: false,
        fitViewQueued: fitView !== null && fitView !== void 0 ? fitView : false,
        fitViewOptions,
        fitViewResolver: null,
        connection: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialConnection"]
        },
        connectionClickStartHandle: null,
        connectOnClick: true,
        ariaLiveMessage: '',
        autoPanOnConnect: true,
        autoPanOnNodeDrag: true,
        autoPanSpeed: 15,
        connectionRadius: 20,
        onError: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devWarn"],
        isValidConnection: undefined,
        onSelectionChangeHandlers: [],
        lib: 'react',
        debug: false
    };
};
const createStore = (param)=>{
    let { nodes, edges, defaultNodes, defaultEdges, width, height, fitView, fitViewOptions, minZoom, maxZoom, nodeOrigin, nodeExtent } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$traditional$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWithEqualityFn"])((set, get)=>{
        async function resolveFitView() {
            const { nodeLookup, panZoom, fitViewOptions, fitViewResolver, width, height, minZoom, maxZoom } = get();
            if (!panZoom) {
                return;
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fitViewport"])({
                nodes: nodeLookup,
                width,
                height,
                panZoom,
                minZoom,
                maxZoom
            }, fitViewOptions);
            fitViewResolver === null || fitViewResolver === void 0 ? void 0 : fitViewResolver.resolve(true);
            /**
         * wait for the fitViewport to resolve before deleting the resolver,
         * we want to reuse the old resolver if the user calls fitView again in the mean time
         */ set({
                fitViewResolver: null
            });
        }
        return {
            ...getInitialState({
                nodes,
                edges,
                width,
                height,
                fitView,
                fitViewOptions,
                minZoom,
                maxZoom,
                nodeOrigin,
                nodeExtent,
                defaultNodes,
                defaultEdges
            }),
            setNodes: (nodes)=>{
                const { nodeLookup, parentLookup, nodeOrigin, elevateNodesOnSelect, fitViewQueued } = get();
                /*
             * setNodes() is called exclusively in response to user actions:
             * - either when the `<ReactFlow nodes>` prop is updated in the controlled ReactFlow setup,
             * - or when the user calls something like `reactFlowInstance.setNodes()` in an uncontrolled ReactFlow setup.
             *
             * When this happens, we take the note objects passed by the user and extend them with fields
             * relevant for internal React Flow operations.
             */ const nodesInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adoptUserNodes"])(nodes, nodeLookup, parentLookup, {
                    nodeOrigin,
                    nodeExtent,
                    elevateNodesOnSelect,
                    checkEquality: true
                });
                if (fitViewQueued && nodesInitialized) {
                    resolveFitView();
                    set({
                        nodes,
                        nodesInitialized,
                        fitViewQueued: false,
                        fitViewOptions: undefined
                    });
                } else {
                    set({
                        nodes,
                        nodesInitialized
                    });
                }
            },
            setEdges: (edges)=>{
                const { connectionLookup, edgeLookup } = get();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateConnectionLookup"])(connectionLookup, edgeLookup, edges);
                set({
                    edges
                });
            },
            setDefaultNodesAndEdges: (nodes, edges)=>{
                if (nodes) {
                    const { setNodes } = get();
                    setNodes(nodes);
                    set({
                        hasDefaultNodes: true
                    });
                }
                if (edges) {
                    const { setEdges } = get();
                    setEdges(edges);
                    set({
                        hasDefaultEdges: true
                    });
                }
            },
            /*
         * Every node gets registerd at a ResizeObserver. Whenever a node
         * changes its dimensions, this function is called to measure the
         * new dimensions and update the nodes.
         */ updateNodeInternals: (updates)=>{
                const { triggerNodeChanges, nodeLookup, parentLookup, domNode, nodeOrigin, nodeExtent, debug, fitViewQueued } = get();
                const { changes, updatedInternals } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateNodeInternals"])(updates, nodeLookup, parentLookup, domNode, nodeOrigin, nodeExtent);
                if (!updatedInternals) {
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateAbsolutePositions"])(nodeLookup, parentLookup, {
                    nodeOrigin,
                    nodeExtent
                });
                if (fitViewQueued) {
                    resolveFitView();
                    set({
                        fitViewQueued: false,
                        fitViewOptions: undefined
                    });
                } else {
                    // we always want to trigger useStore calls whenever updateNodeInternals is called
                    set({});
                }
                if ((changes === null || changes === void 0 ? void 0 : changes.length) > 0) {
                    if (debug) {
                        console.log('React Flow: trigger node changes', changes);
                    }
                    triggerNodeChanges === null || triggerNodeChanges === void 0 ? void 0 : triggerNodeChanges(changes);
                }
            },
            updateNodePositions: function(nodeDragItems) {
                let dragging = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                const parentExpandChildren = [];
                const changes = [];
                const { nodeLookup, triggerNodeChanges } = get();
                for (const [id, dragItem] of nodeDragItems){
                    // we are using the nodelookup to be sure to use the current expandParent and parentId value
                    const node = nodeLookup.get(id);
                    const expandParent = !!((node === null || node === void 0 ? void 0 : node.expandParent) && (node === null || node === void 0 ? void 0 : node.parentId) && (dragItem === null || dragItem === void 0 ? void 0 : dragItem.position));
                    const change = {
                        id,
                        type: 'position',
                        position: expandParent ? {
                            x: Math.max(0, dragItem.position.x),
                            y: Math.max(0, dragItem.position.y)
                        } : dragItem.position,
                        dragging
                    };
                    if (expandParent && node.parentId) {
                        var _dragItem_measured_width, _dragItem_measured_height;
                        parentExpandChildren.push({
                            id,
                            parentId: node.parentId,
                            rect: {
                                ...dragItem.internals.positionAbsolute,
                                width: (_dragItem_measured_width = dragItem.measured.width) !== null && _dragItem_measured_width !== void 0 ? _dragItem_measured_width : 0,
                                height: (_dragItem_measured_height = dragItem.measured.height) !== null && _dragItem_measured_height !== void 0 ? _dragItem_measured_height : 0
                            }
                        });
                    }
                    changes.push(change);
                }
                if (parentExpandChildren.length > 0) {
                    const { parentLookup, nodeOrigin } = get();
                    const parentExpandChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleExpandParent"])(parentExpandChildren, nodeLookup, parentLookup, nodeOrigin);
                    changes.push(...parentExpandChanges);
                }
                triggerNodeChanges(changes);
            },
            triggerNodeChanges: (changes)=>{
                const { onNodesChange, setNodes, nodes, hasDefaultNodes, debug } = get();
                if (changes === null || changes === void 0 ? void 0 : changes.length) {
                    if (hasDefaultNodes) {
                        const updatedNodes = applyNodeChanges(changes, nodes);
                        setNodes(updatedNodes);
                    }
                    if (debug) {
                        console.log('React Flow: trigger node changes', changes);
                    }
                    onNodesChange === null || onNodesChange === void 0 ? void 0 : onNodesChange(changes);
                }
            },
            triggerEdgeChanges: (changes)=>{
                const { onEdgesChange, setEdges, edges, hasDefaultEdges, debug } = get();
                if (changes === null || changes === void 0 ? void 0 : changes.length) {
                    if (hasDefaultEdges) {
                        const updatedEdges = applyEdgeChanges(changes, edges);
                        setEdges(updatedEdges);
                    }
                    if (debug) {
                        console.log('React Flow: trigger edge changes', changes);
                    }
                    onEdgesChange === null || onEdgesChange === void 0 ? void 0 : onEdgesChange(changes);
                }
            },
            addSelectedNodes: (selectedNodeIds)=>{
                const { multiSelectionActive, edgeLookup, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = get();
                if (multiSelectionActive) {
                    const nodeChanges = selectedNodeIds.map((nodeId)=>createSelectionChange(nodeId, true));
                    triggerNodeChanges(nodeChanges);
                    return;
                }
                triggerNodeChanges(getSelectionChanges(nodeLookup, new Set([
                    ...selectedNodeIds
                ]), true));
                triggerEdgeChanges(getSelectionChanges(edgeLookup));
            },
            addSelectedEdges: (selectedEdgeIds)=>{
                const { multiSelectionActive, edgeLookup, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = get();
                if (multiSelectionActive) {
                    const changedEdges = selectedEdgeIds.map((edgeId)=>createSelectionChange(edgeId, true));
                    triggerEdgeChanges(changedEdges);
                    return;
                }
                triggerEdgeChanges(getSelectionChanges(edgeLookup, new Set([
                    ...selectedEdgeIds
                ])));
                triggerNodeChanges(getSelectionChanges(nodeLookup, new Set(), true));
            },
            unselectNodesAndEdges: function() {
                let { nodes, edges } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                const { edges: storeEdges, nodes: storeNodes, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = get();
                const nodesToUnselect = nodes ? nodes : storeNodes;
                const edgesToUnselect = edges ? edges : storeEdges;
                const nodeChanges = nodesToUnselect.map((n)=>{
                    const internalNode = nodeLookup.get(n.id);
                    if (internalNode) {
                        /*
                     * we need to unselect the internal node that was selected previously before we
                     * send the change to the user to prevent it to be selected while dragging the new node
                     */ internalNode.selected = false;
                    }
                    return createSelectionChange(n.id, false);
                });
                const edgeChanges = edgesToUnselect.map((edge)=>createSelectionChange(edge.id, false));
                triggerNodeChanges(nodeChanges);
                triggerEdgeChanges(edgeChanges);
            },
            setMinZoom: (minZoom)=>{
                const { panZoom, maxZoom } = get();
                panZoom === null || panZoom === void 0 ? void 0 : panZoom.setScaleExtent([
                    minZoom,
                    maxZoom
                ]);
                set({
                    minZoom
                });
            },
            setMaxZoom: (maxZoom)=>{
                const { panZoom, minZoom } = get();
                panZoom === null || panZoom === void 0 ? void 0 : panZoom.setScaleExtent([
                    minZoom,
                    maxZoom
                ]);
                set({
                    maxZoom
                });
            },
            setTranslateExtent: (translateExtent)=>{
                var _get_panZoom;
                (_get_panZoom = get().panZoom) === null || _get_panZoom === void 0 ? void 0 : _get_panZoom.setTranslateExtent(translateExtent);
                set({
                    translateExtent
                });
            },
            setPaneClickDistance: (clickDistance)=>{
                var _get_panZoom;
                (_get_panZoom = get().panZoom) === null || _get_panZoom === void 0 ? void 0 : _get_panZoom.setClickDistance(clickDistance);
            },
            resetSelectedElements: ()=>{
                const { edges, nodes, triggerNodeChanges, triggerEdgeChanges, elementsSelectable } = get();
                if (!elementsSelectable) {
                    return;
                }
                const nodeChanges = nodes.reduce((res, node)=>node.selected ? [
                        ...res,
                        createSelectionChange(node.id, false)
                    ] : res, []);
                const edgeChanges = edges.reduce((res, edge)=>edge.selected ? [
                        ...res,
                        createSelectionChange(edge.id, false)
                    ] : res, []);
                triggerNodeChanges(nodeChanges);
                triggerEdgeChanges(edgeChanges);
            },
            setNodeExtent: (nextNodeExtent)=>{
                const { nodes, nodeLookup, parentLookup, nodeOrigin, elevateNodesOnSelect, nodeExtent } = get();
                if (nextNodeExtent[0][0] === nodeExtent[0][0] && nextNodeExtent[0][1] === nodeExtent[0][1] && nextNodeExtent[1][0] === nodeExtent[1][0] && nextNodeExtent[1][1] === nodeExtent[1][1]) {
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adoptUserNodes"])(nodes, nodeLookup, parentLookup, {
                    nodeOrigin,
                    nodeExtent: nextNodeExtent,
                    elevateNodesOnSelect,
                    checkEquality: false
                });
                set({
                    nodeExtent: nextNodeExtent
                });
            },
            panBy: (delta)=>{
                const { transform, width, height, panZoom, translateExtent } = get();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["panBy"])({
                    delta,
                    panZoom,
                    transform,
                    translateExtent,
                    width,
                    height
                });
            },
            cancelConnection: ()=>{
                set({
                    connection: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialConnection"]
                    }
                });
            },
            updateConnection: (connection)=>{
                set({
                    connection
                });
            },
            reset: ()=>set({
                    ...getInitialState()
                })
        };
    }, Object.is);
};
/**
 * The `<ReactFlowProvider />` component is a [context provider](https://react.dev/learn/passing-data-deeply-with-context#)
 * that makes it possible to access a flow's internal state outside of the
 * [`<ReactFlow />`](/api-reference/react-flow) component. Many of the hooks we
 * provide rely on this component to work.
 * @public
 *
 * @example
 * ```tsx
 *import { ReactFlow, ReactFlowProvider, useNodes } from '@xyflow/react'
 *
 *export default function Flow() {
 *  return (
 *    <ReactFlowProvider>
 *      <ReactFlow nodes={...} edges={...} />
 *      <Sidebar />
 *    </ReactFlowProvider>
 *  );
 *}
 *
 *function Sidebar() {
 *  // This hook will only work if the component it's used in is a child of a
 *  // <ReactFlowProvider />.
 *  const nodes = useNodes()
 *
 *  return <aside>do something with nodes</aside>;
 *}
 *```
 *
 * @remarks If you're using a router and want your flow's state to persist across routes,
 * it's vital that you place the `<ReactFlowProvider />` component _outside_ of
 * your router. If you have multiple flows on the same page you will need to use a separate
 * `<ReactFlowProvider />` for each flow.
 */ function ReactFlowProvider(param) {
    let { initialNodes: nodes, initialEdges: edges, defaultNodes, defaultEdges, initialWidth: width, initialHeight: height, initialMinZoom: minZoom, initialMaxZoom: maxZoom, initialFitViewOptions: fitViewOptions, fitView, nodeOrigin, nodeExtent, children } = param;
    const [store] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ReactFlowProvider.useState": ()=>createStore({
                nodes,
                edges,
                defaultNodes,
                defaultEdges,
                width,
                height,
                fitView,
                minZoom,
                maxZoom,
                fitViewOptions,
                nodeOrigin,
                nodeExtent
            })
    }["ReactFlowProvider.useState"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Provider$1, {
        value: store,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BatchProvider, {
            children: children
        })
    });
}
function Wrapper(param) {
    let { children, nodes, edges, defaultNodes, defaultEdges, width, height, fitView, fitViewOptions, minZoom, maxZoom, nodeOrigin, nodeExtent } = param;
    const isWrapped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
    if (isWrapped) {
        /*
         * we need to wrap it with a fragment because it's not allowed for children to be a ReactNode
         * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
         */ return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ReactFlowProvider, {
        initialNodes: nodes,
        initialEdges: edges,
        defaultNodes: defaultNodes,
        defaultEdges: defaultEdges,
        initialWidth: width,
        initialHeight: height,
        fitView: fitView,
        initialFitViewOptions: fitViewOptions,
        initialMinZoom: minZoom,
        initialMaxZoom: maxZoom,
        nodeOrigin: nodeOrigin,
        nodeExtent: nodeExtent,
        children: children
    });
}
const wrapperStyle = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 0
};
function ReactFlow(param, ref) {
    let { nodes, edges, defaultNodes, defaultEdges, className, nodeTypes, edgeTypes, onNodeClick, onEdgeClick, onInit, onMove, onMoveStart, onMoveEnd, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDoubleClick, onNodeDragStart, onNodeDrag, onNodeDragStop, onNodesDelete, onEdgesDelete, onDelete, onSelectionChange, onSelectionDragStart, onSelectionDrag, onSelectionDragStop, onSelectionContextMenu, onSelectionStart, onSelectionEnd, onBeforeDelete, connectionMode, connectionLineType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionLineType"].Bezier, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, deleteKeyCode = 'Backspace', selectionKeyCode = 'Shift', selectionOnDrag = false, selectionMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionMode"].Full, panActivationKeyCode = 'Space', multiSelectionKeyCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacOs"])() ? 'Meta' : 'Control', zoomActivationKeyCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacOs"])() ? 'Meta' : 'Control', snapToGrid, snapGrid, onlyRenderVisibleElements = false, selectNodesOnDrag, nodesDraggable, nodesConnectable, nodesFocusable, nodeOrigin = defaultNodeOrigin, edgesFocusable, edgesReconnectable, elementsSelectable = true, defaultViewport: defaultViewport$1 = defaultViewport, minZoom = 0.5, maxZoom = 2, translateExtent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["infiniteExtent"], preventScrolling = true, nodeExtent, defaultMarkerColor = '#b1b1b7', zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = 0.5, panOnScrollMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanOnScrollMode"].Free, zoomOnDoubleClick = true, panOnDrag = true, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, paneClickDistance = 0, nodeClickDistance = 0, children, onReconnect, onReconnectStart, onReconnectEnd, onEdgeContextMenu, onEdgeDoubleClick, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius = 10, onNodesChange, onEdgesChange, noDragClassName = 'nodrag', noWheelClassName = 'nowheel', noPanClassName = 'nopan', fitView, fitViewOptions, connectOnClick, attributionPosition, proOptions, defaultEdgeOptions, elevateNodesOnSelect, elevateEdgesOnSelect, disableKeyboardA11y = false, autoPanOnConnect, autoPanOnNodeDrag, autoPanSpeed, connectionRadius, isValidConnection, onError, style, id, nodeDragThreshold, viewport, onViewportChange, width, height, colorMode = 'light', debug, onScroll, ...rest } = param;
    const rfId = id || '1';
    const colorModeClassName = useColorModeClass(colorMode);
    // Undo scroll events, preventing viewport from shifting when nodes outside of it are focused
    const wrapperOnScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReactFlow.useCallback[wrapperOnScroll]": (e)=>{
            e.currentTarget.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
            onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
        }
    }["ReactFlow.useCallback[wrapperOnScroll]"], [
        onScroll
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-testid": "rf__wrapper",
        ...rest,
        onScroll: wrapperOnScroll,
        style: {
            ...style,
            ...wrapperStyle
        },
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow',
            className,
            colorModeClassName
        ]),
        id: id,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Wrapper, {
            nodes: nodes,
            edges: edges,
            width: width,
            height: height,
            fitView: fitView,
            fitViewOptions: fitViewOptions,
            minZoom: minZoom,
            maxZoom: maxZoom,
            nodeOrigin: nodeOrigin,
            nodeExtent: nodeExtent,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(GraphView, {
                    onInit: onInit,
                    onNodeClick: onNodeClick,
                    onEdgeClick: onEdgeClick,
                    onNodeMouseEnter: onNodeMouseEnter,
                    onNodeMouseMove: onNodeMouseMove,
                    onNodeMouseLeave: onNodeMouseLeave,
                    onNodeContextMenu: onNodeContextMenu,
                    onNodeDoubleClick: onNodeDoubleClick,
                    nodeTypes: nodeTypes,
                    edgeTypes: edgeTypes,
                    connectionLineType: connectionLineType,
                    connectionLineStyle: connectionLineStyle,
                    connectionLineComponent: connectionLineComponent,
                    connectionLineContainerStyle: connectionLineContainerStyle,
                    selectionKeyCode: selectionKeyCode,
                    selectionOnDrag: selectionOnDrag,
                    selectionMode: selectionMode,
                    deleteKeyCode: deleteKeyCode,
                    multiSelectionKeyCode: multiSelectionKeyCode,
                    panActivationKeyCode: panActivationKeyCode,
                    zoomActivationKeyCode: zoomActivationKeyCode,
                    onlyRenderVisibleElements: onlyRenderVisibleElements,
                    defaultViewport: defaultViewport$1,
                    translateExtent: translateExtent,
                    minZoom: minZoom,
                    maxZoom: maxZoom,
                    preventScrolling: preventScrolling,
                    zoomOnScroll: zoomOnScroll,
                    zoomOnPinch: zoomOnPinch,
                    zoomOnDoubleClick: zoomOnDoubleClick,
                    panOnScroll: panOnScroll,
                    panOnScrollSpeed: panOnScrollSpeed,
                    panOnScrollMode: panOnScrollMode,
                    panOnDrag: panOnDrag,
                    onPaneClick: onPaneClick,
                    onPaneMouseEnter: onPaneMouseEnter,
                    onPaneMouseMove: onPaneMouseMove,
                    onPaneMouseLeave: onPaneMouseLeave,
                    onPaneScroll: onPaneScroll,
                    onPaneContextMenu: onPaneContextMenu,
                    paneClickDistance: paneClickDistance,
                    nodeClickDistance: nodeClickDistance,
                    onSelectionContextMenu: onSelectionContextMenu,
                    onSelectionStart: onSelectionStart,
                    onSelectionEnd: onSelectionEnd,
                    onReconnect: onReconnect,
                    onReconnectStart: onReconnectStart,
                    onReconnectEnd: onReconnectEnd,
                    onEdgeContextMenu: onEdgeContextMenu,
                    onEdgeDoubleClick: onEdgeDoubleClick,
                    onEdgeMouseEnter: onEdgeMouseEnter,
                    onEdgeMouseMove: onEdgeMouseMove,
                    onEdgeMouseLeave: onEdgeMouseLeave,
                    reconnectRadius: reconnectRadius,
                    defaultMarkerColor: defaultMarkerColor,
                    noDragClassName: noDragClassName,
                    noWheelClassName: noWheelClassName,
                    noPanClassName: noPanClassName,
                    rfId: rfId,
                    disableKeyboardA11y: disableKeyboardA11y,
                    nodeExtent: nodeExtent,
                    viewport: viewport,
                    onViewportChange: onViewportChange
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(StoreUpdater, {
                    nodes: nodes,
                    edges: edges,
                    defaultNodes: defaultNodes,
                    defaultEdges: defaultEdges,
                    onConnect: onConnect,
                    onConnectStart: onConnectStart,
                    onConnectEnd: onConnectEnd,
                    onClickConnectStart: onClickConnectStart,
                    onClickConnectEnd: onClickConnectEnd,
                    nodesDraggable: nodesDraggable,
                    nodesConnectable: nodesConnectable,
                    nodesFocusable: nodesFocusable,
                    edgesFocusable: edgesFocusable,
                    edgesReconnectable: edgesReconnectable,
                    elementsSelectable: elementsSelectable,
                    elevateNodesOnSelect: elevateNodesOnSelect,
                    elevateEdgesOnSelect: elevateEdgesOnSelect,
                    minZoom: minZoom,
                    maxZoom: maxZoom,
                    nodeExtent: nodeExtent,
                    onNodesChange: onNodesChange,
                    onEdgesChange: onEdgesChange,
                    snapToGrid: snapToGrid,
                    snapGrid: snapGrid,
                    connectionMode: connectionMode,
                    translateExtent: translateExtent,
                    connectOnClick: connectOnClick,
                    defaultEdgeOptions: defaultEdgeOptions,
                    fitView: fitView,
                    fitViewOptions: fitViewOptions,
                    onNodesDelete: onNodesDelete,
                    onEdgesDelete: onEdgesDelete,
                    onDelete: onDelete,
                    onNodeDragStart: onNodeDragStart,
                    onNodeDrag: onNodeDrag,
                    onNodeDragStop: onNodeDragStop,
                    onSelectionDrag: onSelectionDrag,
                    onSelectionDragStart: onSelectionDragStart,
                    onSelectionDragStop: onSelectionDragStop,
                    onMove: onMove,
                    onMoveStart: onMoveStart,
                    onMoveEnd: onMoveEnd,
                    noPanClassName: noPanClassName,
                    nodeOrigin: nodeOrigin,
                    rfId: rfId,
                    autoPanOnConnect: autoPanOnConnect,
                    autoPanOnNodeDrag: autoPanOnNodeDrag,
                    autoPanSpeed: autoPanSpeed,
                    onError: onError,
                    connectionRadius: connectionRadius,
                    isValidConnection: isValidConnection,
                    selectNodesOnDrag: selectNodesOnDrag,
                    nodeDragThreshold: nodeDragThreshold,
                    onBeforeDelete: onBeforeDelete,
                    paneClickDistance: paneClickDistance,
                    debug: debug
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SelectionListener, {
                    onSelectionChange: onSelectionChange
                }),
                children,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Attribution, {
                    proOptions: proOptions,
                    position: attributionPosition
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(A11yDescriptions, {
                    rfId: rfId,
                    disableKeyboardA11y: disableKeyboardA11y
                })
            ]
        })
    });
}
/**
 * The `<ReactFlow />` component is the heart of your React Flow application.
 * It renders your nodes and edges and handles user interaction
 *
 * @public
 *
 * @example
 * ```tsx
 *import { ReactFlow } from '@xyflow/react'
 *
 *export default function Flow() {
 *  return (<ReactFlow
 *    nodes={...}
 *    edges={...}
 *    onNodesChange={...}
 *    ...
 *  />);
 *}
 *```
 */ var index = fixedForwardRef(ReactFlow);
const selector$6 = (s)=>{
    var _s_domNode;
    return (_s_domNode = s.domNode) === null || _s_domNode === void 0 ? void 0 : _s_domNode.querySelector('.react-flow__edgelabel-renderer');
};
/**
 * Edges are SVG-based. If you want to render more complex labels you can use the
 * `<EdgeLabelRenderer />` component to access a div based renderer. This component
 * is a portal that renders the label in a `<div />` that is positioned on top of
 * the edges. You can see an example usage of the component in the
 * [edge label renderer example](/examples/edges/edge-label-renderer).
 * @public
 *
 * @example
 * ```jsx
 * import React from 'react';
 * import { getBezierPath, EdgeLabelRenderer, BaseEdge } from '@xyflow/react';
 *
 * export function CustomEdge({ id, data, ...props }) {
 *   const [edgePath, labelX, labelY] = getBezierPath(props);
 *
 *   return (
 *     <>
 *       <BaseEdge id={id} path={edgePath} />
 *       <EdgeLabelRenderer>
 *         <div
 *           style={{
 *             position: 'absolute',
 *             transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
 *             background: '#ffcc00',
 *             padding: 10,
 *         }}
 *           className="nodrag nopan"
 *         >
 *          {data.label}
 *         </div>
 *       </EdgeLabelRenderer>
 *     </>
 *   );
 * };
 * ```
 *
 * @remarks The `<EdgeLabelRenderer />` has no pointer events by default. If you want to
 * add mouse interactions you need to set the style `pointerEvents: all` and add
 * the `nopan` class on the label or the element you want to interact with.
 */ function EdgeLabelRenderer(param) {
    let { children } = param;
    const edgeLabelRenderer = useStore(selector$6);
    if (!edgeLabelRenderer) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(children, edgeLabelRenderer);
}
const selector$5 = (s)=>{
    var _s_domNode;
    return (_s_domNode = s.domNode) === null || _s_domNode === void 0 ? void 0 : _s_domNode.querySelector('.react-flow__viewport-portal');
};
/**
 * The `<ViewportPortal />` component can be used to add components to the same viewport
 * of the flow where nodes and edges are rendered. This is useful when you want to render
 * your own components that are adhere to the same coordinate system as the nodes & edges
 * and are also affected by zooming and panning
 * @public
 * @example
 *
 * ```jsx
 *import React from 'react';
 *import { ViewportPortal } from '@xyflow/react';
 *
 *export default function () {
 *  return (
 *    <ViewportPortal>
 *      <div
 *        style={{ transform: 'translate(100px, 100px)', position: 'absolute' }}
 *      >
 *        This div is positioned at [100, 100] on the flow.
 *      </div>
 *    </ViewportPortal>
 *  );
 *}
 *```
 */ function ViewportPortal(param) {
    let { children } = param;
    const viewPortalDiv = useStore(selector$5);
    if (!viewPortalDiv) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(children, viewPortalDiv);
}
/**
 * When you programmatically add or remove handles to a node or update a node's
 * handle position, you need to let React Flow know about it using this hook. This
 * will update the internal dimensions of the node and properly reposition handles
 * on the canvas if necessary.
 *
 * @public
 * @returns Use this function to tell React Flow to update the internal state of one or more nodes
 * that you have changed programmatically.
 *
 * @example
 * ```jsx
 *import { useCallback, useState } from 'react';
 *import { Handle, useUpdateNodeInternals } from '@xyflow/react';
 *
 *export default function RandomHandleNode({ id }) {
 *  const updateNodeInternals = useUpdateNodeInternals();
 *  const [handleCount, setHandleCount] = useState(0);
 *  const randomizeHandleCount = useCallback(() => {
 *   setHandleCount(Math.floor(Math.random() * 10));
 *    updateNodeInternals(id);
 *  }, [id, updateNodeInternals]);
 *
 *  return (
 *    <>
 *      {Array.from({ length: handleCount }).map((_, index) => (
 *        <Handle
 *          key={index}
 *          type="target"
 *          position="left"
 *          id={`handle-${index}`}
 *        />
 *      ))}
 *
 *      <div>
 *        <button onClick={randomizeHandleCount}>Randomize handle count</button>
 *        <p>There are {handleCount} handles on this node.</p>
 *      </div>
 *    </>
 *  );
 *}
 *```
 * @remarks This hook can only be used in a component that is a child of a
 *{@link ReactFlowProvider} or a {@link ReactFlow} component.
 */ function useUpdateNodeInternals() {
    const store = useStoreApi();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUpdateNodeInternals.useCallback": (id)=>{
            const { domNode, updateNodeInternals } = store.getState();
            const updateIds = Array.isArray(id) ? id : [
                id
            ];
            const updates = new Map();
            updateIds.forEach({
                "useUpdateNodeInternals.useCallback": (updateId)=>{
                    const nodeElement = domNode === null || domNode === void 0 ? void 0 : domNode.querySelector('.react-flow__node[data-id="'.concat(updateId, '"]'));
                    if (nodeElement) {
                        updates.set(updateId, {
                            id: updateId,
                            nodeElement,
                            force: true
                        });
                    }
                }
            }["useUpdateNodeInternals.useCallback"]);
            requestAnimationFrame({
                "useUpdateNodeInternals.useCallback": ()=>updateNodeInternals(updates, {
                        triggerFitView: false
                    })
            }["useUpdateNodeInternals.useCallback"]);
        }
    }["useUpdateNodeInternals.useCallback"], []);
}
const nodesSelector = (state)=>state.nodes;
/**
 * This hook returns an array of the current nodes. Components that use this hook
 * will re-render **whenever any node changes**, including when a node is selected
 * or moved.
 *
 * @public
 * @returns An array of all nodes currently in the flow.
 *
 * @example
 * ```jsx
 *import { useNodes } from '@xyflow/react';
 *
 *export default function() {
 *  const nodes = useNodes();
 *
 *  return <div>There are currently {nodes.length} nodes!</div>;
 *}
 *```
 */ function useNodes() {
    const nodes = useStore(nodesSelector, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    return nodes;
}
const edgesSelector = (state)=>state.edges;
/**
 * This hook returns an array of the current edges. Components that use this hook
 * will re-render **whenever any edge changes**.
 *
 * @public
 * @returns An array of all edges currently in the flow.
 *
 * @example
 * ```tsx
 *import { useEdges } from '@xyflow/react';
 *
 *export default function () {
 *  const edges = useEdges();
 *
 *  return <div>There are currently {edges.length} edges!</div>;
 *}
 *```
 */ function useEdges() {
    const edges = useStore(edgesSelector, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    return edges;
}
const viewportSelector = (state)=>({
        x: state.transform[0],
        y: state.transform[1],
        zoom: state.transform[2]
    });
/**
 * The `useViewport` hook is a convenient way to read the current state of the
 * {@link Viewport} in a component. Components that use this hook
 * will re-render **whenever the viewport changes**.
 *
 * @public
 * @returns The current viewport.
 *
 * @example
 *
 *```jsx
 *import { useViewport } from '@xyflow/react';
 *
 *export default function ViewportDisplay() {
 *  const { x, y, zoom } = useViewport();
 *
 *  return (
 *    <div>
 *      <p>
 *        The viewport is currently at ({x}, {y}) and zoomed to {zoom}.
 *      </p>
 *    </div>
 *  );
 *}
 *```
 *
 * @remarks This hook can only be used in a component that is a child of a
 *{@link ReactFlowProvider} or a {@link ReactFlow} component.
 */ function useViewport() {
    const viewport = useStore(viewportSelector, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    return viewport;
}
/**
 * This hook makes it easy to prototype a controlled flow where you manage the
 * state of nodes and edges outside the `ReactFlowInstance`. You can think of it
 * like React's `useState` hook with an additional helper callback.
 *
 * @public
 * @returns
 * - `nodes`: The current array of nodes. You might pass this directly to the `nodes` prop of your
 * `<ReactFlow />` component, or you may want to manipulate it first to perform some layouting,
 * for example.
 * - `setNodes`: A function that you can use to update the nodes. You can pass it a new array of
 * nodes or a callback that receives the current array of nodes and returns a new array of nodes.
 * This is the same as the second element of the tuple returned by React's `useState` hook.
 * - `onNodesChange`: A handy callback that can take an array of `NodeChanges` and update the nodes
 * state accordingly. You'll typically pass this directly to the `onNodesChange` prop of your
 * `<ReactFlow />` component.
 * @example
 *
 *```tsx
 *import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';
 *
 *const initialNodes = [];
 *const initialEdges = [];
 *
 *export default function () {
 *  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
 *  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 *
 *  return (
 *    <ReactFlow
 *      nodes={nodes}
 *      edges={edges}
 *      onNodesChange={onNodesChange}
 *      onEdgesChange={onEdgesChange}
 *    />
 *  );
 *}
 *```
 *
 * @remarks This hook was created to make prototyping easier and our documentation
 * examples clearer. Although it is OK to use this hook in production, in
 * practice you may want to use a more sophisticated state management solution
 * like Zustand {@link https://reactflow.dev/docs/guides/state-management/} instead.
 *
 */ function useNodesState(initialNodes) {
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialNodes);
    const onNodesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNodesState.useCallback[onNodesChange]": (changes)=>setNodes({
                "useNodesState.useCallback[onNodesChange]": (nds)=>applyNodeChanges(changes, nds)
            }["useNodesState.useCallback[onNodesChange]"])
    }["useNodesState.useCallback[onNodesChange]"], []);
    return [
        nodes,
        setNodes,
        onNodesChange
    ];
}
/**
 * This hook makes it easy to prototype a controlled flow where you manage the
 * state of nodes and edges outside the `ReactFlowInstance`. You can think of it
 * like React's `useState` hook with an additional helper callback.
 *
 * @public
 * @returns
 * - `edges`: The current array of edges. You might pass this directly to the `edges` prop of your
 * `<ReactFlow />` component, or you may want to manipulate it first to perform some layouting,
 * for example.
 *
 * - `setEdges`: A function that you can use to update the edges. You can pass it a new array of
 * edges or a callback that receives the current array of edges and returns a new array of edges.
 * This is the same as the second element of the tuple returned by React's `useState` hook.
 *
 * - `onEdgesChange`: A handy callback that can take an array of `EdgeChanges` and update the edges
 * state accordingly. You'll typically pass this directly to the `onEdgesChange` prop of your
 * `<ReactFlow />` component.
 * @example
 *
 *```tsx
 *import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';
 *
 *const initialNodes = [];
 *const initialEdges = [];
 *
 *export default function () {
 *  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
 *  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 *
 *  return (
 *    <ReactFlow
 *      nodes={nodes}
 *      edges={edges}
 *      onNodesChange={onNodesChange}
 *      onEdgesChange={onEdgesChange}
 *    />
 *  );
 *}
 *```
 *
 * @remarks This hook was created to make prototyping easier and our documentation
 * examples clearer. Although it is OK to use this hook in production, in
 * practice you may want to use a more sophisticated state management solution
 * like Zustand {@link https://reactflow.dev/docs/guides/state-management/} instead.
 *
 */ function useEdgesState(initialEdges) {
    const [edges, setEdges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialEdges);
    const onEdgesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEdgesState.useCallback[onEdgesChange]": (changes)=>setEdges({
                "useEdgesState.useCallback[onEdgesChange]": (eds)=>applyEdgeChanges(changes, eds)
            }["useEdgesState.useCallback[onEdgesChange]"])
    }["useEdgesState.useCallback[onEdgesChange]"], []);
    return [
        edges,
        setEdges,
        onEdgesChange
    ];
}
/**
 * The `useOnViewportChange` hook lets you listen for changes to the viewport such
 * as panning and zooming. You can provide a callback for each phase of a viewport
 * change: `onStart`, `onChange`, and `onEnd`.
 *
 * @public
 * @example
 * ```jsx
 *import { useCallback } from 'react';
 *import { useOnViewportChange } from '@xyflow/react';
 *
 *function ViewportChangeLogger() {
 *  useOnViewportChange({
 *    onStart: (viewport: Viewport) => console.log('start', viewport),
 *    onChange: (viewport: Viewport) => console.log('change', viewport),
 *    onEnd: (viewport: Viewport) => console.log('end', viewport),
 *  });
 *
 *  return null;
 *}
 *```
 */ function useOnViewportChange(param) {
    let { onStart, onChange, onEnd } = param;
    const store = useStoreApi();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOnViewportChange.useEffect": ()=>{
            store.setState({
                onViewportChangeStart: onStart
            });
        }
    }["useOnViewportChange.useEffect"], [
        onStart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOnViewportChange.useEffect": ()=>{
            store.setState({
                onViewportChange: onChange
            });
        }
    }["useOnViewportChange.useEffect"], [
        onChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOnViewportChange.useEffect": ()=>{
            store.setState({
                onViewportChangeEnd: onEnd
            });
        }
    }["useOnViewportChange.useEffect"], [
        onEnd
    ]);
}
/**
 * This hook lets you listen for changes to both node and edge selection. As the
 *name implies, the callback you provide will be called whenever the selection of
 *_either_ nodes or edges changes.
 *
 * @public
 * @example
 * ```jsx
 *import { useState } from 'react';
 *import { ReactFlow, useOnSelectionChange } from '@xyflow/react';
 *
 *function SelectionDisplay() {
 *  const [selectedNodes, setSelectedNodes] = useState([]);
 *  const [selectedEdges, setSelectedEdges] = useState([]);
 *
 *  // the passed handler has to be memoized, otherwise the hook will not work correctly
 *  const onChange = useCallback(({ nodes, edges }) => {
 *    setSelectedNodes(nodes.map((node) => node.id));
 *    setSelectedEdges(edges.map((edge) => edge.id));
 *  }, []);
 *
 *  useOnSelectionChange({
 *    onChange,
 *  });
 *
 *  return (
 *    <div>
 *      <p>Selected nodes: {selectedNodes.join(', ')}</p>
 *      <p>Selected edges: {selectedEdges.join(', ')}</p>
 *    </div>
 *  );
 *}
 *```
 *
 * @remarks You need to memoize the passed `onChange` handler, otherwise the hook will not work correctly.
 */ function useOnSelectionChange(param) {
    let { onChange } = param;
    const store = useStoreApi();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOnSelectionChange.useEffect": ()=>{
            const nextOnSelectionChangeHandlers = [
                ...store.getState().onSelectionChangeHandlers,
                onChange
            ];
            store.setState({
                onSelectionChangeHandlers: nextOnSelectionChangeHandlers
            });
            return ({
                "useOnSelectionChange.useEffect": ()=>{
                    const nextHandlers = store.getState().onSelectionChangeHandlers.filter({
                        "useOnSelectionChange.useEffect.nextHandlers": (fn)=>fn !== onChange
                    }["useOnSelectionChange.useEffect.nextHandlers"]);
                    store.setState({
                        onSelectionChangeHandlers: nextHandlers
                    });
                }
            })["useOnSelectionChange.useEffect"];
        }
    }["useOnSelectionChange.useEffect"], [
        onChange
    ]);
}
const selector$4 = (options)=>(s)=>{
        if (!options.includeHiddenNodes) {
            return s.nodesInitialized;
        }
        if (s.nodeLookup.size === 0) {
            return false;
        }
        for (const [, { internals }] of s.nodeLookup){
            if (internals.handleBounds === undefined || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeHasDimensions"])(internals.userNode)) {
                return false;
            }
        }
        return true;
    };
/**
 * This hook tells you whether all the nodes in a flow have been measured and given
 *a width and height. When you add a node to the flow, this hook will return
 *`false` and then `true` again once the node has been measured.
 *
 * @public
 * @returns Whether or not the nodes have been initialized by the `<ReactFlow />` component and
 * given a width and height.
 *
 * @example
 * ```jsx
 *import { useReactFlow, useNodesInitialized } from '@xyflow/react';
 *import { useEffect, useState } from 'react';
 *
 *const options = {
 *  includeHiddenNodes: false,
 *};
 *
 *export default function useLayout() {
 *  const { getNodes } = useReactFlow();
 *  const nodesInitialized = useNodesInitialized(options);
 *  const [layoutedNodes, setLayoutedNodes] = useState(getNodes());
 *
 *  useEffect(() => {
 *    if (nodesInitialized) {
 *      setLayoutedNodes(yourLayoutingFunction(getNodes()));
 *    }
 *  }, [nodesInitialized]);
 *
 *  return layoutedNodes;
 *}
 *```
 */ function useNodesInitialized() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        includeHiddenNodes: false
    };
    const initialized = useStore(selector$4(options));
    return initialized;
}
/**
 * Hook to check if a <Handle /> is connected to another <Handle /> and get the connections.
 *
 * @public
 * @deprecated Use `useNodeConnections` instead.
 * @returns An array with handle connections.
 */ function useHandleConnections(param) {
    let { type, id, nodeId, onConnect, onDisconnect } = param;
    console.warn('[DEPRECATED] `useHandleConnections` is deprecated. Instead use `useNodeConnections` https://reactflow.dev/api-reference/hooks/useNodeConnections');
    const _nodeId = useNodeId();
    const currentNodeId = nodeId !== null && nodeId !== void 0 ? nodeId : _nodeId;
    const prevConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const connections = useStore({
        "useHandleConnections.useStore[connections]": (state)=>state.connectionLookup.get("".concat(currentNodeId, "-").concat(type).concat(id ? "-".concat(id) : ''))
    }["useHandleConnections.useStore[connections]"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areConnectionMapsEqual"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHandleConnections.useEffect": ()=>{
            // @todo dicuss if onConnect/onDisconnect should be called when the component mounts/unmounts
            if (prevConnections.current && prevConnections.current !== connections) {
                const _connections = connections !== null && connections !== void 0 ? connections : new Map();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleConnectionChange"])(prevConnections.current, _connections, onDisconnect);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleConnectionChange"])(_connections, prevConnections.current, onConnect);
            }
            prevConnections.current = connections !== null && connections !== void 0 ? connections : new Map();
        }
    }["useHandleConnections.useEffect"], [
        connections,
        onConnect,
        onDisconnect
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useHandleConnections.useMemo": ()=>{
            var _connections_values;
            return Array.from((_connections_values = connections === null || connections === void 0 ? void 0 : connections.values()) !== null && _connections_values !== void 0 ? _connections_values : []);
        }
    }["useHandleConnections.useMemo"], [
        connections
    ]);
}
const error014 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorMessages"]['error014']();
/**
 * This hook returns an array of connections on a specific node, handle type ('source', 'target') or handle ID.
 *
 * @public
 * @returns An array with connections.
 *
 * @example
 * ```jsx
 *import { useNodeConnections } from '@xyflow/react';
 *
 *export default function () {
 *  const connections = useNodeConnections({
 *    handleType: 'target',
 *    handleId: 'my-handle',
 *  });
 *
 *  return (
 *    <div>There are currently {connections.length} incoming connections!</div>
 *  );
 *}
 *```
 */ function useNodeConnections() {
    let { id, handleType, handleId, onConnect, onDisconnect } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const nodeId = useNodeId();
    const currentNodeId = id !== null && id !== void 0 ? id : nodeId;
    if (!currentNodeId) {
        throw new Error(error014);
    }
    const prevConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const connections = useStore({
        "useNodeConnections.useStore[connections]": (state)=>state.connectionLookup.get("".concat(currentNodeId).concat(handleType ? handleId ? "-".concat(handleType, "-").concat(handleId) : "-".concat(handleType) : ''))
    }["useNodeConnections.useStore[connections]"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areConnectionMapsEqual"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNodeConnections.useEffect": ()=>{
            // @todo discuss if onConnect/onDisconnect should be called when the component mounts/unmounts
            if (prevConnections.current && prevConnections.current !== connections) {
                const _connections = connections !== null && connections !== void 0 ? connections : new Map();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleConnectionChange"])(prevConnections.current, _connections, onDisconnect);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleConnectionChange"])(_connections, prevConnections.current, onConnect);
            }
            prevConnections.current = connections !== null && connections !== void 0 ? connections : new Map();
        }
    }["useNodeConnections.useEffect"], [
        connections,
        onConnect,
        onDisconnect
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useNodeConnections.useMemo": ()=>{
            var _connections_values;
            return Array.from((_connections_values = connections === null || connections === void 0 ? void 0 : connections.values()) !== null && _connections_values !== void 0 ? _connections_values : []);
        }
    }["useNodeConnections.useMemo"], [
        connections
    ]);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useNodesData(nodeIds) {
    const nodesData = useStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNodesData.useStore[nodesData]": (s)=>{
            const data = [];
            const isArrayOfIds = Array.isArray(nodeIds);
            const _nodeIds = isArrayOfIds ? nodeIds : [
                nodeIds
            ];
            for (const nodeId of _nodeIds){
                const node = s.nodeLookup.get(nodeId);
                if (node) {
                    data.push({
                        id: node.id,
                        type: node.type,
                        data: node.data
                    });
                }
            }
            var _data_;
            return isArrayOfIds ? data : (_data_ = data[0]) !== null && _data_ !== void 0 ? _data_ : null;
        }
    }["useNodesData.useStore[nodesData]"], [
        nodeIds
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowNodeData"]);
    return nodesData;
}
/**
 * This hook returns the internal representation of a specific node.
 * Components that use this hook will re-render **whenever the node changes**,
 * including when a node is selected or moved.
 *
 * @public
 * @param id - The ID of a node you want to observe.
 * @returns The `InternalNode` object for the node with the given ID.
 *
 * @example
 * ```tsx
 *import { useInternalNode } from '@xyflow/react';
 *
 *export default function () {
 *  const internalNode = useInternalNode('node-1');
 *  const absolutePosition = internalNode.internals.positionAbsolute;
 *
 *  return (
 *    <div>
 *      The absolute position of the node is at:
 *      <p>x: {absolutePosition.x}</p>
 *      <p>y: {absolutePosition.y}</p>
 *    </div>
 *  );
 *}
 *```
 */ function useInternalNode(id) {
    const node = useStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInternalNode.useStore[node]": (s)=>s.nodeLookup.get(id)
    }["useInternalNode.useStore[node]"], [
        id
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    return node;
}
function LinePattern(param) {
    let { dimensions, lineWidth, variant, className } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
        strokeWidth: lineWidth,
        d: "M".concat(dimensions[0] / 2, " 0 V").concat(dimensions[1], " M0 ").concat(dimensions[1] / 2, " H").concat(dimensions[0]),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__background-pattern',
            variant,
            className
        ])
    });
}
function DotPattern(param) {
    let { radius, className } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("circle", {
        cx: radius,
        cy: radius,
        r: radius,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__background-pattern',
            'dots',
            className
        ])
    });
}
/**
 * The three variants are exported as an enum for convenience. You can either import
 * the enum and use it like `BackgroundVariant.Lines` or you can use the raw string
 * value directly.
 * @public
 */ var BackgroundVariant;
(function(BackgroundVariant) {
    BackgroundVariant["Lines"] = "lines";
    BackgroundVariant["Dots"] = "dots";
    BackgroundVariant["Cross"] = "cross";
})(BackgroundVariant || (BackgroundVariant = {}));
const defaultSize = {
    [BackgroundVariant.Dots]: 1,
    [BackgroundVariant.Lines]: 1,
    [BackgroundVariant.Cross]: 6
};
const selector$3 = (s)=>({
        transform: s.transform,
        patternId: "pattern-".concat(s.rfId)
    });
function BackgroundComponent(param) {
    let { id, variant = BackgroundVariant.Dots, // only used for dots and cross
    gap = 20, // only used for lines and cross
    size, lineWidth = 1, offset = 0, color, bgColor, style, className, patternClassName } = param;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { transform, patternId } = useStore(selector$3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const patternSize = size || defaultSize[variant];
    const isDots = variant === BackgroundVariant.Dots;
    const isCross = variant === BackgroundVariant.Cross;
    const gapXY = Array.isArray(gap) ? gap : [
        gap,
        gap
    ];
    const scaledGap = [
        gapXY[0] * transform[2] || 1,
        gapXY[1] * transform[2] || 1
    ];
    const scaledSize = patternSize * transform[2];
    const offsetXY = Array.isArray(offset) ? offset : [
        offset,
        offset
    ];
    const patternDimensions = isCross ? [
        scaledSize,
        scaledSize
    ] : scaledGap;
    const scaledOffset = [
        offsetXY[0] * transform[2] || 1 + patternDimensions[0] / 2,
        offsetXY[1] * transform[2] || 1 + patternDimensions[1] / 2
    ];
    const _patternId = "".concat(patternId).concat(id ? id : '');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__background',
            className
        ]),
        style: {
            ...style,
            ...containerStyle,
            '--xy-background-color-props': bgColor,
            '--xy-background-pattern-color-props': color
        },
        ref: ref,
        "data-testid": "rf__background",
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("pattern", {
                id: _patternId,
                x: transform[0] % scaledGap[0],
                y: transform[1] % scaledGap[1],
                width: scaledGap[0],
                height: scaledGap[1],
                patternUnits: "userSpaceOnUse",
                patternTransform: "translate(-".concat(scaledOffset[0], ",-").concat(scaledOffset[1], ")"),
                children: isDots ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DotPattern, {
                    radius: scaledSize / 2,
                    className: patternClassName
                }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LinePattern, {
                    dimensions: patternDimensions,
                    lineWidth: lineWidth,
                    variant: variant,
                    className: patternClassName
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                fill: "url(#".concat(_patternId, ")")
            })
        ]
    });
}
BackgroundComponent.displayName = 'Background';
/**
 * The `<Background />` component makes it convenient to render different types of backgrounds common in node-based UIs. It comes with three variants: lines, dots and cross.
 *
 * @example
 *
 * A simple example of how to use the Background component.
 *
 * ```tsx
 * import { useState } from 'react';
 * import { ReactFlow, Background, BackgroundVariant } from '@xyflow/react';
 *
 * export default function Flow() {
 *   return (
 *     <ReactFlow defaultNodes={[...]} defaultEdges={[...]}>
 *       <Background color="#ccc" variant={BackgroundVariant.Dots} />
 *     </ReactFlow>
 *   );
 * }
 * ```
 *
 * @example
 *
 * In this example you can see how to combine multiple backgrounds
 *
 * ```tsx
 * import { ReactFlow, Background, BackgroundVariant } from '@xyflow/react';
 * import '@xyflow/react/dist/style.css';
 *
 * export default function Flow() {
 *   return (
 *     <ReactFlow defaultNodes={[...]} defaultEdges={[...]}>
 *       <Background
 *         id="1"
 *         gap={10}
 *         color="#f1f1f1"
 *         variant={BackgroundVariant.Lines}
 *       />
 *       <Background
 *         id="2"
 *         gap={100}
 *         color="#ccc"
 *         variant={BackgroundVariant.Lines}
 *       />
 *     </ReactFlow>
 *   );
 * }
 * ```
 *
 * @remarks
 *
 * When combining multiple <Background /> components it’s important to give each of them a unique id prop!
 *
 */ const Background = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(BackgroundComponent);
function PlusIcon() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"
        })
    });
}
function MinusIcon() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 5",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M0 0h32v4.2H0z"
        })
    });
}
function FitViewIcon() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 30",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"
        })
    });
}
function LockIcon() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 25 32",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"
        })
    });
}
function UnlockIcon() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 25 32",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"
        })
    });
}
/**
 * You can add buttons to the control panel by using the `<ControlButton />` component
 * and pass it as a child to the [`<Controls />`](/api-reference/components/controls) component.
 *
 * @public
 * @example
 *```jsx
 *import { MagicWand } from '@radix-ui/react-icons'
 *import { ReactFlow, Controls, ControlButton } from '@xyflow/react'
 *
 *export default function Flow() {
 *  return (
 *    <ReactFlow nodes={[...]} edges={[...]}>
 *      <Controls>
 *        <ControlButton onClick={() => alert('Something magical just happened. ✨')}>
 *          <MagicWand />
 *        </ControlButton>
 *      </Controls>
 *    </ReactFlow>
 *  )
 *}
 *```
 */ function ControlButton(param) {
    let { children, className, ...rest } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__controls-button',
            className
        ]),
        ...rest,
        children: children
    });
}
const selector$2 = (s)=>({
        isInteractive: s.nodesDraggable || s.nodesConnectable || s.elementsSelectable,
        minZoomReached: s.transform[2] <= s.minZoom,
        maxZoomReached: s.transform[2] >= s.maxZoom
    });
function ControlsComponent(param) {
    let { style, showZoom = true, showFitView = true, showInteractive = true, fitViewOptions, onZoomIn, onZoomOut, onFitView, onInteractiveChange, className, children, position = 'bottom-left', orientation = 'vertical', 'aria-label': ariaLabel = 'React Flow controls' } = param;
    const store = useStoreApi();
    const { isInteractive, minZoomReached, maxZoomReached } = useStore(selector$2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const { zoomIn, zoomOut, fitView } = useReactFlow();
    const onZoomInHandler = ()=>{
        zoomIn();
        onZoomIn === null || onZoomIn === void 0 ? void 0 : onZoomIn();
    };
    const onZoomOutHandler = ()=>{
        zoomOut();
        onZoomOut === null || onZoomOut === void 0 ? void 0 : onZoomOut();
    };
    const onFitViewHandler = ()=>{
        fitView(fitViewOptions);
        onFitView === null || onFitView === void 0 ? void 0 : onFitView();
    };
    const onToggleInteractivity = ()=>{
        store.setState({
            nodesDraggable: !isInteractive,
            nodesConnectable: !isInteractive,
            elementsSelectable: !isInteractive
        });
        onInteractiveChange === null || onInteractiveChange === void 0 ? void 0 : onInteractiveChange(!isInteractive);
    };
    const orientationClass = orientation === 'horizontal' ? 'horizontal' : 'vertical';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Panel, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__controls',
            orientationClass,
            className
        ]),
        position: position,
        style: style,
        "data-testid": "rf__controls",
        "aria-label": ariaLabel,
        children: [
            showZoom && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ControlButton, {
                        onClick: onZoomInHandler,
                        className: "react-flow__controls-zoomin",
                        title: "zoom in",
                        "aria-label": "zoom in",
                        disabled: maxZoomReached,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PlusIcon, {})
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ControlButton, {
                        onClick: onZoomOutHandler,
                        className: "react-flow__controls-zoomout",
                        title: "zoom out",
                        "aria-label": "zoom out",
                        disabled: minZoomReached,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MinusIcon, {})
                    })
                ]
            }),
            showFitView && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ControlButton, {
                className: "react-flow__controls-fitview",
                onClick: onFitViewHandler,
                title: "fit view",
                "aria-label": "fit view",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FitViewIcon, {})
            }),
            showInteractive && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ControlButton, {
                className: "react-flow__controls-interactive",
                onClick: onToggleInteractivity,
                title: "toggle interactivity",
                "aria-label": "toggle interactivity",
                children: isInteractive ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(UnlockIcon, {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(LockIcon, {})
            }),
            children
        ]
    });
}
ControlsComponent.displayName = 'Controls';
/**
 * The `<Controls />` component renders a small panel that contains convenient
 * buttons to zoom in, zoom out, fit the view, and lock the viewport.
 *
 * @public
 * @example
 *```tsx
 *import { ReactFlow, Controls } from '@xyflow/react'
 *
 *export default function Flow() {
 *  return (
 *    <ReactFlow nodes={[...]} edges={[...]}>
 *      <Controls />
 *    </ReactFlow>
 *  )
 *}
 *```
 *
 * @remarks To extend or customise the controls, you can use the [`<ControlButton />`](/api-reference/components/control-button) component
 *
 */ const Controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(ControlsComponent);
function MiniMapNodeComponent(param) {
    let { id, x, y, width, height, style, color, strokeColor, strokeWidth, className, borderRadius, shapeRendering, selected, onClick } = param;
    const { background, backgroundColor } = style || {};
    const fill = color || background || backgroundColor;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("rect", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__minimap-node',
            {
                selected
            },
            className
        ]),
        x: x,
        y: y,
        rx: borderRadius,
        ry: borderRadius,
        width: width,
        height: height,
        style: {
            fill,
            stroke: strokeColor,
            strokeWidth
        },
        shapeRendering: shapeRendering,
        onClick: onClick ? (event)=>onClick(event, id) : undefined
    });
}
const MiniMapNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(MiniMapNodeComponent);
const selectorNodeIds = (s)=>s.nodes.map((node)=>node.id);
const getAttrFunction = (func)=>func instanceof Function ? func : ()=>func;
function MiniMapNodes(param) {
    let { nodeStrokeColor, nodeColor, nodeClassName = '', nodeBorderRadius = 5, nodeStrokeWidth, /*
 * We need to rename the prop to be `CapitalCase` so that JSX will render it as
 * a component properly.
 */ nodeComponent: NodeComponent = MiniMapNode, onClick } = param;
    const nodeIds = useStore(selectorNodeIds, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    const nodeColorFunc = getAttrFunction(nodeColor);
    const nodeStrokeColorFunc = getAttrFunction(nodeStrokeColor);
    const nodeClassNameFunc = getAttrFunction(nodeClassName);
    const shapeRendering = typeof window === 'undefined' || !!window.chrome ? 'crispEdges' : 'geometricPrecision';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: nodeIds.map((nodeId)=>/*
         * The split of responsibilities between MiniMapNodes and
         * NodeComponentWrapper may appear weird. However, it’s designed to
         * minimize the cost of updates when individual nodes change.
         *
         * For more details, see a similar commit in `NodeRenderer/index.tsx`.
         */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(NodeComponentWrapper, {
                id: nodeId,
                nodeColorFunc: nodeColorFunc,
                nodeStrokeColorFunc: nodeStrokeColorFunc,
                nodeClassNameFunc: nodeClassNameFunc,
                nodeBorderRadius: nodeBorderRadius,
                nodeStrokeWidth: nodeStrokeWidth,
                NodeComponent: NodeComponent,
                onClick: onClick,
                shapeRendering: shapeRendering
            }, nodeId))
    });
}
function NodeComponentWrapperInner(param) {
    let { id, nodeColorFunc, nodeStrokeColorFunc, nodeClassNameFunc, nodeBorderRadius, nodeStrokeWidth, shapeRendering, NodeComponent, onClick } = param;
    const { node, x, y, width, height } = useStore({
        "NodeComponentWrapperInner.useStore": (s)=>{
            const { internals } = s.nodeLookup.get(id);
            const node = internals.userNode;
            const { x, y } = internals.positionAbsolute;
            const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeDimensions"])(node);
            return {
                node,
                x,
                y,
                width,
                height
            };
        }
    }["NodeComponentWrapperInner.useStore"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    if (!node || node.hidden || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeHasDimensions"])(node)) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(NodeComponent, {
        x: x,
        y: y,
        width: width,
        height: height,
        style: node.style,
        selected: !!node.selected,
        className: nodeClassNameFunc(node),
        color: nodeColorFunc(node),
        borderRadius: nodeBorderRadius,
        strokeColor: nodeStrokeColorFunc(node),
        strokeWidth: nodeStrokeWidth,
        shapeRendering: shapeRendering,
        onClick: onClick,
        id: node.id
    });
}
const NodeComponentWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(NodeComponentWrapperInner);
var MiniMapNodes$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(MiniMapNodes);
const defaultWidth = 200;
const defaultHeight = 150;
const filterHidden = (node)=>!node.hidden;
const selector$1 = (s)=>{
    const viewBB = {
        x: -s.transform[0] / s.transform[2],
        y: -s.transform[1] / s.transform[2],
        width: s.width / s.transform[2],
        height: s.height / s.transform[2]
    };
    return {
        viewBB,
        boundingRect: s.nodeLookup.size > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBoundsOfRects"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalNodesBounds"])(s.nodeLookup, {
            filter: filterHidden
        }), viewBB) : viewBB,
        rfId: s.rfId,
        panZoom: s.panZoom,
        translateExtent: s.translateExtent,
        flowWidth: s.width,
        flowHeight: s.height
    };
};
const ARIA_LABEL_KEY = 'react-flow__minimap-desc';
function MiniMapComponent(param) {
    let { style, className, nodeStrokeColor, nodeColor, nodeClassName = '', nodeBorderRadius = 5, nodeStrokeWidth, /*
 * We need to rename the prop to be `CapitalCase` so that JSX will render it as
 * a component properly.
 */ nodeComponent, bgColor, maskColor, maskStrokeColor, maskStrokeWidth, position = 'bottom-right', onClick, onNodeClick, pannable = false, zoomable = false, ariaLabel = 'React Flow mini map', inversePan, zoomStep = 10, offsetScale = 5 } = param;
    const store = useStoreApi();
    const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { boundingRect, viewBB, rfId, panZoom, translateExtent, flowWidth, flowHeight } = useStore(selector$1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    var _style_width;
    const elementWidth = (_style_width = style === null || style === void 0 ? void 0 : style.width) !== null && _style_width !== void 0 ? _style_width : defaultWidth;
    var _style_height;
    const elementHeight = (_style_height = style === null || style === void 0 ? void 0 : style.height) !== null && _style_height !== void 0 ? _style_height : defaultHeight;
    const scaledWidth = boundingRect.width / elementWidth;
    const scaledHeight = boundingRect.height / elementHeight;
    const viewScale = Math.max(scaledWidth, scaledHeight);
    const viewWidth = viewScale * elementWidth;
    const viewHeight = viewScale * elementHeight;
    const offset = offsetScale * viewScale;
    const x = boundingRect.x - (viewWidth - boundingRect.width) / 2 - offset;
    const y = boundingRect.y - (viewHeight - boundingRect.height) / 2 - offset;
    const width = viewWidth + offset * 2;
    const height = viewHeight + offset * 2;
    const labelledBy = "".concat(ARIA_LABEL_KEY, "-").concat(rfId);
    const viewScaleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const minimapInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    viewScaleRef.current = viewScale;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MiniMapComponent.useEffect": ()=>{
            if (svg.current && panZoom) {
                minimapInstance.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XYMinimap"])({
                    domNode: svg.current,
                    panZoom,
                    getTransform: {
                        "MiniMapComponent.useEffect": ()=>store.getState().transform
                    }["MiniMapComponent.useEffect"],
                    getViewScale: {
                        "MiniMapComponent.useEffect": ()=>viewScaleRef.current
                    }["MiniMapComponent.useEffect"]
                });
                return ({
                    "MiniMapComponent.useEffect": ()=>{
                        var _minimapInstance_current;
                        (_minimapInstance_current = minimapInstance.current) === null || _minimapInstance_current === void 0 ? void 0 : _minimapInstance_current.destroy();
                    }
                })["MiniMapComponent.useEffect"];
            }
        }
    }["MiniMapComponent.useEffect"], [
        panZoom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MiniMapComponent.useEffect": ()=>{
            var _minimapInstance_current;
            (_minimapInstance_current = minimapInstance.current) === null || _minimapInstance_current === void 0 ? void 0 : _minimapInstance_current.update({
                translateExtent,
                width: flowWidth,
                height: flowHeight,
                inversePan,
                pannable,
                zoomStep,
                zoomable
            });
        }
    }["MiniMapComponent.useEffect"], [
        pannable,
        zoomable,
        inversePan,
        zoomStep,
        translateExtent,
        flowWidth,
        flowHeight
    ]);
    const onSvgClick = onClick ? (event)=>{
        var _minimapInstance_current;
        const [x, y] = ((_minimapInstance_current = minimapInstance.current) === null || _minimapInstance_current === void 0 ? void 0 : _minimapInstance_current.pointer(event)) || [
            0,
            0
        ];
        onClick(event, {
            x,
            y
        });
    } : undefined;
    const onSvgNodeClick = onNodeClick ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MiniMapComponent.useCallback": (event, nodeId)=>{
            const node = store.getState().nodeLookup.get(nodeId).internals.userNode;
            onNodeClick(event, node);
        }
    }["MiniMapComponent.useCallback"], []) : undefined;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Panel, {
        position: position,
        style: {
            ...style,
            '--xy-minimap-background-color-props': typeof bgColor === 'string' ? bgColor : undefined,
            '--xy-minimap-mask-background-color-props': typeof maskColor === 'string' ? maskColor : undefined,
            '--xy-minimap-mask-stroke-color-props': typeof maskStrokeColor === 'string' ? maskStrokeColor : undefined,
            '--xy-minimap-mask-stroke-width-props': typeof maskStrokeWidth === 'number' ? maskStrokeWidth * viewScale : undefined,
            '--xy-minimap-node-background-color-props': typeof nodeColor === 'string' ? nodeColor : undefined,
            '--xy-minimap-node-stroke-color-props': typeof nodeStrokeColor === 'string' ? nodeStrokeColor : undefined,
            '--xy-minimap-node-stroke-width-props': typeof nodeStrokeWidth === 'number' ? nodeStrokeWidth : undefined
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__minimap',
            className
        ]),
        "data-testid": "rf__minimap",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
            width: elementWidth,
            height: elementHeight,
            viewBox: "".concat(x, " ").concat(y, " ").concat(width, " ").concat(height),
            className: "react-flow__minimap-svg",
            role: "img",
            "aria-labelledby": labelledBy,
            ref: svg,
            onClick: onSvgClick,
            children: [
                ariaLabel && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("title", {
                    id: labelledBy,
                    children: ariaLabel
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MiniMapNodes$1, {
                    onClick: onSvgNodeClick,
                    nodeColor: nodeColor,
                    nodeStrokeColor: nodeStrokeColor,
                    nodeBorderRadius: nodeBorderRadius,
                    nodeClassName: nodeClassName,
                    nodeStrokeWidth: nodeStrokeWidth,
                    nodeComponent: nodeComponent
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                    className: "react-flow__minimap-mask",
                    d: "M".concat(x - offset, ",").concat(y - offset, "h").concat(width + offset * 2, "v").concat(height + offset * 2, "h").concat(-width - offset * 2, "z\n        M").concat(viewBB.x, ",").concat(viewBB.y, "h").concat(viewBB.width, "v").concat(viewBB.height, "h").concat(-viewBB.width, "z"),
                    fillRule: "evenodd",
                    pointerEvents: "none"
                })
            ]
        })
    });
}
MiniMapComponent.displayName = 'MiniMap';
/**
 * The `<MiniMap />` component can be used to render an overview of your flow. It
 * renders each node as an SVG element and visualizes where the current viewport is
 * in relation to the rest of the flow.
 *
 * @public
 * @example
 *
 * ```jsx
 *import { ReactFlow, MiniMap } from '@xyflow/react';
 *
 *export default function Flow() {
 *  return (
 *    <ReactFlow nodes={[...]]} edges={[...]]}>
 *      <MiniMap nodeStrokeWidth={3} />
 *    </ReactFlow>
 *  );
 *}
 *```
 */ const MiniMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(MiniMapComponent);
function ResizeControl(param) {
    let { nodeId, position, variant = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeControlVariant"].Handle, className, style = {}, children, color, minWidth = 10, minHeight = 10, maxWidth = Number.MAX_VALUE, maxHeight = Number.MAX_VALUE, keepAspectRatio = false, resizeDirection, shouldResize, onResizeStart, onResize, onResizeEnd } = param;
    const contextNodeId = useNodeId();
    const id = typeof nodeId === 'string' ? nodeId : contextNodeId;
    const store = useStoreApi();
    const resizeControlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const defaultPosition = variant === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeControlVariant"].Line ? 'right' : 'bottom-right';
    const controlPosition = position !== null && position !== void 0 ? position : defaultPosition;
    const resizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResizeControl.useEffect": ()=>{
            if (!resizeControlRef.current || !id) {
                return;
            }
            if (!resizer.current) {
                resizer.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XYResizer"])({
                    domNode: resizeControlRef.current,
                    nodeId: id,
                    getStoreItems: {
                        "ResizeControl.useEffect": ()=>{
                            const { nodeLookup, transform, snapGrid, snapToGrid, nodeOrigin, domNode } = store.getState();
                            return {
                                nodeLookup,
                                transform,
                                snapGrid,
                                snapToGrid,
                                nodeOrigin,
                                paneDomNode: domNode
                            };
                        }
                    }["ResizeControl.useEffect"],
                    onChange: {
                        "ResizeControl.useEffect": (change, childChanges)=>{
                            const { triggerNodeChanges, nodeLookup, parentLookup, nodeOrigin } = store.getState();
                            const changes = [];
                            const nextPosition = {
                                x: change.x,
                                y: change.y
                            };
                            const node = nodeLookup.get(id);
                            if (node && node.expandParent && node.parentId) {
                                var _node_origin;
                                const origin = (_node_origin = node.origin) !== null && _node_origin !== void 0 ? _node_origin : nodeOrigin;
                                var _change_width, _ref;
                                const width = (_ref = (_change_width = change.width) !== null && _change_width !== void 0 ? _change_width : node.measured.width) !== null && _ref !== void 0 ? _ref : 0;
                                var _change_height, _ref1;
                                const height = (_ref1 = (_change_height = change.height) !== null && _change_height !== void 0 ? _change_height : node.measured.height) !== null && _ref1 !== void 0 ? _ref1 : 0;
                                var _change_x, _change_y;
                                const child = {
                                    id: node.id,
                                    parentId: node.parentId,
                                    rect: {
                                        width,
                                        height,
                                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluateAbsolutePosition"])({
                                            x: (_change_x = change.x) !== null && _change_x !== void 0 ? _change_x : node.position.x,
                                            y: (_change_y = change.y) !== null && _change_y !== void 0 ? _change_y : node.position.y
                                        }, {
                                            width,
                                            height
                                        }, node.parentId, nodeLookup, origin)
                                    }
                                };
                                const parentExpandChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleExpandParent"])([
                                    child
                                ], nodeLookup, parentLookup, nodeOrigin);
                                changes.push(...parentExpandChanges);
                                /*
                         * when the parent was expanded by the child node, its position will be clamped at
                         * 0,0 when node origin is 0,0 and to width, height if it's 1,1
                         */ nextPosition.x = change.x ? Math.max(origin[0] * width, change.x) : undefined;
                                nextPosition.y = change.y ? Math.max(origin[1] * height, change.y) : undefined;
                            }
                            if (nextPosition.x !== undefined && nextPosition.y !== undefined) {
                                const positionChange = {
                                    id,
                                    type: 'position',
                                    position: {
                                        ...nextPosition
                                    }
                                };
                                changes.push(positionChange);
                            }
                            if (change.width !== undefined && change.height !== undefined) {
                                const setAttributes = !resizeDirection ? true : resizeDirection === 'horizontal' ? 'width' : 'height';
                                const dimensionChange = {
                                    id,
                                    type: 'dimensions',
                                    resizing: true,
                                    setAttributes,
                                    dimensions: {
                                        width: change.width,
                                        height: change.height
                                    }
                                };
                                changes.push(dimensionChange);
                            }
                            for (const childChange of childChanges){
                                const positionChange = {
                                    ...childChange,
                                    type: 'position'
                                };
                                changes.push(positionChange);
                            }
                            triggerNodeChanges(changes);
                        }
                    }["ResizeControl.useEffect"],
                    onEnd: {
                        "ResizeControl.useEffect": (param)=>{
                            let { width, height } = param;
                            const dimensionChange = {
                                id: id,
                                type: 'dimensions',
                                resizing: false,
                                dimensions: {
                                    width,
                                    height
                                }
                            };
                            store.getState().triggerNodeChanges([
                                dimensionChange
                            ]);
                        }
                    }["ResizeControl.useEffect"]
                });
            }
            resizer.current.update({
                controlPosition,
                boundaries: {
                    minWidth,
                    minHeight,
                    maxWidth,
                    maxHeight
                },
                keepAspectRatio,
                resizeDirection,
                onResizeStart,
                onResize,
                onResizeEnd,
                shouldResize
            });
            return ({
                "ResizeControl.useEffect": ()=>{
                    var _resizer_current;
                    (_resizer_current = resizer.current) === null || _resizer_current === void 0 ? void 0 : _resizer_current.destroy();
                }
            })["ResizeControl.useEffect"];
        }
    }["ResizeControl.useEffect"], [
        controlPosition,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        keepAspectRatio,
        onResizeStart,
        onResize,
        onResizeEnd,
        shouldResize
    ]);
    const positionClassNames = controlPosition.split('-');
    const colorStyleProp = variant === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeControlVariant"].Line ? 'borderColor' : 'backgroundColor';
    const controlStyle = color ? {
        ...style,
        [colorStyleProp]: color
    } : style;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            'react-flow__resize-control',
            'nodrag',
            ...positionClassNames,
            variant,
            className
        ]),
        ref: resizeControlRef,
        style: controlStyle,
        children: children
    });
}
/**
 * To create your own resizing UI, you can use the `NodeResizeControl` component where you can pass children (such as icons).
 * @public
 *
 */ const NodeResizeControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(ResizeControl);
/**
 * The `<NodeResizer />` component can be used to add a resize functionality to your
 * nodes. It renders draggable controls around the node to resize in all directions.
 * @public
 *
 * @example
 *```jsx
 *import { memo } from 'react';
 *import { Handle, Position, NodeResizer } from '@xyflow/react';
 *
 *function ResizableNode({ data }) {
 *  return (
 *    <>
 *      <NodeResizer minWidth={100} minHeight={30} />
 *      <Handle type="target" position={Position.Left} />
 *      <div style={{ padding: 10 }}>{data.label}</div>
 *      <Handle type="source" position={Position.Right} />
 *    </>
 *  );
 *};
 *
 *export default memo(ResizableNode);
 *```
 */ function NodeResizer(param) {
    let { nodeId, isVisible = true, handleClassName, handleStyle, lineClassName, lineStyle, color, minWidth = 10, minHeight = 10, maxWidth = Number.MAX_VALUE, maxHeight = Number.MAX_VALUE, keepAspectRatio = false, shouldResize, onResizeStart, onResize, onResizeEnd } = param;
    if (!isVisible) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XY_RESIZER_LINE_POSITIONS"].map((position)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(NodeResizeControl, {
                    className: lineClassName,
                    style: lineStyle,
                    nodeId: nodeId,
                    position: position,
                    variant: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeControlVariant"].Line,
                    color: color,
                    minWidth: minWidth,
                    minHeight: minHeight,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    onResizeStart: onResizeStart,
                    keepAspectRatio: keepAspectRatio,
                    shouldResize: shouldResize,
                    onResize: onResize,
                    onResizeEnd: onResizeEnd
                }, position)),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XY_RESIZER_HANDLE_POSITIONS"].map((position)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(NodeResizeControl, {
                    className: handleClassName,
                    style: handleStyle,
                    nodeId: nodeId,
                    position: position,
                    color: color,
                    minWidth: minWidth,
                    minHeight: minHeight,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    onResizeStart: onResizeStart,
                    keepAspectRatio: keepAspectRatio,
                    shouldResize: shouldResize,
                    onResize: onResize,
                    onResizeEnd: onResizeEnd
                }, position))
        ]
    });
}
const selector = (state)=>{
    var _state_domNode;
    return (_state_domNode = state.domNode) === null || _state_domNode === void 0 ? void 0 : _state_domNode.querySelector('.react-flow__renderer');
};
function NodeToolbarPortal(param) {
    let { children } = param;
    const wrapperRef = useStore(selector);
    if (!wrapperRef) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(children, wrapperRef);
}
const nodeEqualityFn = (a, b)=>(a === null || a === void 0 ? void 0 : a.internals.positionAbsolute.x) !== (b === null || b === void 0 ? void 0 : b.internals.positionAbsolute.x) || (a === null || a === void 0 ? void 0 : a.internals.positionAbsolute.y) !== (b === null || b === void 0 ? void 0 : b.internals.positionAbsolute.y) || (a === null || a === void 0 ? void 0 : a.measured.width) !== (b === null || b === void 0 ? void 0 : b.measured.width) || (a === null || a === void 0 ? void 0 : a.measured.height) !== (b === null || b === void 0 ? void 0 : b.measured.height) || (a === null || a === void 0 ? void 0 : a.selected) !== (b === null || b === void 0 ? void 0 : b.selected) || (a === null || a === void 0 ? void 0 : a.internals.z) !== (b === null || b === void 0 ? void 0 : b.internals.z);
const nodesEqualityFn = (a, b)=>{
    if (a.size !== b.size) {
        return false;
    }
    for (const [key, node] of a){
        if (nodeEqualityFn(node, b.get(key))) {
            return false;
        }
    }
    return true;
};
const storeSelector = (state)=>({
        x: state.transform[0],
        y: state.transform[1],
        zoom: state.transform[2],
        selectedNodesCount: state.nodes.filter((node)=>node.selected).length
    });
/**
 * This component can render a toolbar or tooltip to one side of a custom node. This
 * toolbar doesn't scale with the viewport so that the content is always visible.
 *
 * @public
 * @example
 * ```jsx
 *import { memo } from 'react';
 *import { Handle, Position, NodeToolbar } from '@xyflow/react';
 *
 *function CustomNode({ data }) {
 *  return (
 *    <>
 *      <NodeToolbar isVisible={data.toolbarVisible} position={data.toolbarPosition}>
 *        <button>delete</button>
 *        <button>copy</button>
 *        <button>expand</button>
 *      </NodeToolbar>
 *
 *      <div style={{ padding: '10px 20px' }}>
 *        {data.label}
 *      </div>
 *
 *      <Handle type="target" position={Position.Left} />
 *      <Handle type="source" position={Position.Right} />
 *    </>
 *  );
 *};
 *
 *export default memo(CustomNode);
 *```
 * @remarks By default, the toolbar is only visible when a node is selected. If multiple
 * nodes are selected it will not be visible to prevent overlapping toolbars or
 * clutter. You can override this behavior by setting the `isVisible` prop to `true`.
 */ function NodeToolbar(param) {
    let { nodeId, children, className, style, isVisible, position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Top, offset = 10, align = 'center', ...rest } = param;
    var _nodes_values_next_value;
    const contextNodeId = useNodeId();
    const nodesSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NodeToolbar.useCallback[nodesSelector]": (state)=>{
            const nodeIds = Array.isArray(nodeId) ? nodeId : [
                nodeId || contextNodeId || ''
            ];
            const internalNodes = nodeIds.reduce({
                "NodeToolbar.useCallback[nodesSelector].internalNodes": (res, id)=>{
                    const node = state.nodeLookup.get(id);
                    if (node) {
                        res.set(node.id, node);
                    }
                    return res;
                }
            }["NodeToolbar.useCallback[nodesSelector].internalNodes"], new Map());
            return internalNodes;
        }
    }["NodeToolbar.useCallback[nodesSelector]"], [
        nodeId,
        contextNodeId
    ]);
    const nodes = useStore(nodesSelector, nodesEqualityFn);
    const { x, y, zoom, selectedNodesCount } = useStore(storeSelector, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$6_$40$types$2b$react$40$19$2e$1$2e$2_immer$40$10$2e$1$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallow"]);
    // if isVisible is not set, we show the toolbar only if its node is selected and no other node is selected
    const isActive = typeof isVisible === 'boolean' ? isVisible : nodes.size === 1 && ((_nodes_values_next_value = nodes.values().next().value) === null || _nodes_values_next_value === void 0 ? void 0 : _nodes_values_next_value.selected) && selectedNodesCount === 1;
    if (!isActive || !nodes.size) {
        return null;
    }
    const nodeRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInternalNodesBounds"])(nodes);
    const nodesArray = Array.from(nodes.values());
    const zIndex = Math.max(...nodesArray.map((node)=>node.internals.z + 1));
    const wrapperStyle = {
        position: 'absolute',
        transform: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$57$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeToolbarTransform"])(nodeRect, {
            x,
            y,
            zoom
        }, position, offset, align),
        zIndex,
        ...style
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(NodeToolbarPortal, {
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            style: wrapperStyle,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classcat$40$5$2e$0$2e$5$2f$node_modules$2f$classcat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
                'react-flow__node-toolbar',
                className
            ]),
            ...rest,
            "data-id": nodesArray.reduce((acc, node)=>"".concat(acc).concat(node.id, " "), '').trim(),
            children: children
        })
    });
}
;
}),
}]);

//# sourceMappingURL=86252_%40xyflow_react_dist_esm_index_d03420a6.js.map