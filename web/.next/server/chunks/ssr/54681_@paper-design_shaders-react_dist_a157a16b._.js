module.exports = {

"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({});
"use client";
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
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/index.js [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/use-merge-refs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "useMergeRefs": ()=>useMergeRefs
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useMergeRefs(refs) {
    const cleanupRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    const refEffect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((instance)=>{
        const cleanups = refs.map((ref)=>{
            if (ref == null) {
                return;
            }
            if (typeof ref === "function") {
                const refCallback = ref;
                const refCleanup = refCallback(instance);
                return typeof refCleanup === "function" ? refCleanup : ()=>{
                    refCallback(null);
                };
            }
            ref.current = instance;
            return ()=>{
                ref.current = null;
            };
        });
        return ()=>{
            cleanups.forEach((refCleanup)=>refCleanup?.());
        };
    }, refs);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (refs.every((ref)=>ref == null)) {
            return null;
        }
        return (value)=>{
            if (cleanupRef.current) {
                cleanupRef.current();
                cleanupRef.current = void 0;
            }
            if (value != null) {
                cleanupRef.current = refEffect(value);
            }
        };
    }, refs);
}
;
 //# sourceMappingURL=use-merge-refs.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "ShaderMount": ()=>ShaderMount
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$empty$2d$pixel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-empty-pixel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$use$2d$merge$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/use-merge-refs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
async function processUniforms(uniformsProp) {
    const processedUniforms = {};
    const imageLoadPromises = [];
    const isValidUrl = (url)=>{
        try {
            if (url.startsWith("/")) return true;
            new URL(url);
            return true;
        } catch  {
            return false;
        }
    };
    const isExternalUrl = (url)=>{
        try {
            if (url.startsWith("/")) return false;
            const urlObject = new URL(url, window.location.origin);
            return urlObject.origin !== window.location.origin;
        } catch  {
            return false;
        }
    };
    Object.entries(uniformsProp).forEach(([key, value])=>{
        if (typeof value === "string") {
            if (!value) {
                processedUniforms[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$empty$2d$pixel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEmptyPixel"])();
                return;
            }
            if (!isValidUrl(value)) {
                console.warn(`Uniform "${key}" has invalid URL "${value}". Skipping image loading.`);
                return;
            }
            const imagePromise = new Promise((resolve, reject)=>{
                const img = new Image();
                if (isExternalUrl(value)) {
                    img.crossOrigin = "anonymous";
                }
                img.onload = ()=>{
                    processedUniforms[key] = img;
                    resolve();
                };
                img.onerror = ()=>{
                    console.error(`Could not set uniforms. Failed to load image at ${value}`);
                    reject();
                };
                img.src = value;
            });
            imageLoadPromises.push(imagePromise);
        } else {
            processedUniforms[key] = value;
        }
    });
    await Promise.all(imageLoadPromises);
    return processedUniforms;
}
const ShaderMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function ShaderMountImpl({ fragmentShader, uniforms: uniformsProp, webGlContextAttributes, speed = 0, frame = 0, width, height, minPixelRatio, maxPixelCount, mipmaps, style, ...divProps }, forwardedRef) {
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shaderMountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const webGlContextAttributesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(webGlContextAttributes);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initShader = async ()=>{
            const uniforms = await processUniforms(uniformsProp);
            if (divRef.current && !shaderMountRef.current) {
                shaderMountRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"](divRef.current, fragmentShader, uniforms, webGlContextAttributesRef.current, speed, frame, minPixelRatio, maxPixelCount, mipmaps);
                setIsInitialized(true);
            }
        };
        initShader();
        return ()=>{
            shaderMountRef.current?.dispose();
            shaderMountRef.current = null;
        };
    }, [
        fragmentShader
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isStale = false;
        const updateUniforms = async ()=>{
            const uniforms = await processUniforms(uniformsProp);
            if (!isStale) {
                shaderMountRef.current?.setUniforms(uniforms);
            }
        };
        updateUniforms();
        return ()=>{
            isStale = true;
        };
    }, [
        uniformsProp,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        shaderMountRef.current?.setSpeed(speed);
    }, [
        speed,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        shaderMountRef.current?.setMaxPixelCount(maxPixelCount);
    }, [
        maxPixelCount,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        shaderMountRef.current?.setMinPixelRatio(minPixelRatio);
    }, [
        minPixelRatio,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        shaderMountRef.current?.setFrame(frame);
    }, [
        frame,
        isInitialized
    ]);
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$use$2d$merge$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        divRef,
        forwardedRef
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: mergedRef,
        style: width !== void 0 || height !== void 0 ? {
            width: typeof width === "string" && isNaN(+width) === false ? +width : width,
            height: typeof height === "string" && isNaN(+height) === false ? +height : height,
            ...style
        } : style,
        ...divProps
    });
});
ShaderMount.displayName = "ShaderMount";
;
 //# sourceMappingURL=shader-mount.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "colorPropsAreEqual": ()=>colorPropsAreEqual
});
function colorPropsAreEqual(prevProps, nextProps) {
    for(const key in prevProps){
        if (key === "colors") {
            const prevIsArray = Array.isArray(prevProps.colors);
            const nextIsArray = Array.isArray(nextProps.colors);
            if (!prevIsArray || !nextIsArray) {
                if (Object.is(prevProps.colors, nextProps.colors) === false) {
                    return false;
                }
                continue;
            }
            if (prevProps.colors?.length !== nextProps.colors?.length) {
                return false;
            }
            if (!prevProps.colors?.every((color, index)=>color === nextProps.colors?.[index])) {
                return false;
            }
            continue;
        }
        if (Object.is(prevProps[key], nextProps[key]) === false) {
            return false;
        }
    }
    return true;
}
;
 //# sourceMappingURL=color-props-are-equal.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/mesh-gradient.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "MeshGradient": ()=>MeshGradient,
    "beachPreset": ()=>beachPreset,
    "defaultPreset": ()=>defaultPreset,
    "inkPreset": ()=>inkPreset,
    "meshGradientPresets": ()=>meshGradientPresets,
    "purplePreset": ()=>purplePreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/mesh-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colors: [
            "#e0eaff",
            "#241d9a",
            "#f75092",
            "#9f50d3"
        ],
        distortion: 0.8,
        swirl: 0.1,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const purplePreset = {
    name: "Purple",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0.6,
        frame: 0,
        colors: [
            "#aaa7d7",
            "#3c2b8e"
        ],
        distortion: 1,
        swirl: 1,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const beachPreset = {
    name: "Beach",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0.1,
        frame: 0,
        colors: [
            "#bcecf6",
            "#00aaff",
            "#00f7ff",
            "#ffd447"
        ],
        distortion: 0.8,
        swirl: 0.35,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const inkPreset = {
    name: "Ink",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colors: [
            "#ffffff",
            "#000000"
        ],
        distortion: 1,
        swirl: 0.2,
        rotation: 90,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const meshGradientPresets = [
    defaultPreset,
    inkPreset,
    purplePreset,
    beachPreset
];
const MeshGradient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function MeshGradientImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colors = defaultPreset.params.colors, distortion = defaultPreset.params.distortion, swirl = defaultPreset.params.swirl, grainMixer = defaultPreset.params.grainMixer, grainOverlay = defaultPreset.params.grainOverlay, // Sizing props
fit = defaultPreset.params.fit, rotation = defaultPreset.params.rotation, scale = defaultPreset.params.scale, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_distortion: distortion,
        u_swirl: swirl,
        u_grainMixer: grainMixer,
        u_grainOverlay: grainOverlay,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_rotation: rotation,
        u_scale: scale,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshGradientFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=mesh-gradient.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/smoke-ring.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "SmokeRing": ()=>SmokeRing,
    "cloudPreset": ()=>cloudPreset,
    "defaultPreset": ()=>defaultPreset,
    "linePreset": ()=>linePreset,
    "smokeRingPresets": ()=>smokeRingPresets,
    "solarPreset": ()=>solarPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-noise-texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$smoke$2d$ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/smoke-ring.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0.5,
        frame: 0,
        colorBack: "#000000",
        colors: [
            "#ffffff"
        ],
        noiseScale: 3,
        noiseIterations: 8,
        radius: 0.25,
        thickness: 0.65,
        innerShape: 0.7,
        scale: 0.8
    }
};
const solarPreset = {
    name: "Solar",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colorBack: "#000000",
        colors: [
            "#ffffff",
            "#ffca0a",
            "#fc6203",
            "#fc620366"
        ],
        noiseScale: 2,
        noiseIterations: 3,
        radius: 0.4,
        thickness: 0.8,
        innerShape: 4,
        scale: 2,
        offsetY: 1
    }
};
const linePreset = {
    name: "Line",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        frame: 0,
        colorBack: "#000000",
        colors: [
            "#4540a4",
            "#1fe8ff"
        ],
        noiseScale: 1.1,
        noiseIterations: 2,
        radius: 0.38,
        thickness: 0.01,
        innerShape: 0.88,
        speed: 4
    }
};
const cloudPreset = {
    name: "Cloud",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        frame: 0,
        colorBack: "#81ADEC",
        colors: [
            "#ffffff"
        ],
        noiseScale: 3,
        noiseIterations: 10,
        radius: 0.5,
        thickness: 0.65,
        innerShape: 0.85,
        speed: 0.5,
        scale: 2.5
    }
};
const smokeRingPresets = [
    defaultPreset,
    linePreset,
    solarPreset,
    cloudPreset
];
const SmokeRing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function SmokeRingImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorBack = defaultPreset.params.colorBack, colors = defaultPreset.params.colors, noiseScale = defaultPreset.params.noiseScale, thickness = defaultPreset.params.thickness, radius = defaultPreset.params.radius, innerShape = defaultPreset.params.innerShape, noiseIterations = defaultPreset.params.noiseIterations, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_noiseScale: noiseScale,
        u_thickness: thickness,
        u_radius: radius,
        u_innerShape: innerShape,
        u_noiseIterations: noiseIterations,
        u_noiseTexture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderNoiseTexture"])(),
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$smoke$2d$ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smokeRingFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=smoke-ring.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/neuro-noise.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "NeuroNoise": ()=>NeuroNoise,
    "bloodstreamPreset": ()=>bloodstreamPreset,
    "defaultPreset": ()=>defaultPreset,
    "ghostPreset": ()=>ghostPreset,
    "neuroNoisePresets": ()=>neuroNoisePresets,
    "sensationPreset": ()=>sensationPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$neuro$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/neuro-noise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 1,
        frame: 0,
        colorFront: "#ffffff",
        colorMid: "#47a6ff",
        colorBack: "#000000",
        brightness: 0.05,
        contrast: 0.3
    }
};
const sensationPreset = {
    name: "Sensation",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 1,
        frame: 0,
        colorFront: "#00c8ff",
        colorMid: "#fbff00",
        colorBack: "#8b42ff",
        brightness: 0.19,
        contrast: 0.12,
        scale: 3
    }
};
const bloodstreamPreset = {
    name: "Bloodstream",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 1,
        frame: 0,
        colorFront: "#ff0000",
        colorMid: "#ff0000",
        colorBack: "#ffffff",
        brightness: 0.24,
        contrast: 0.17,
        scale: 0.7
    }
};
const ghostPreset = {
    name: "Ghost",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 1,
        frame: 0,
        colorFront: "#ffffff",
        colorMid: "#000000",
        colorBack: "#ffffff",
        brightness: 0,
        contrast: 1,
        scale: 0.55
    }
};
const neuroNoisePresets = [
    defaultPreset,
    sensationPreset,
    bloodstreamPreset,
    ghostPreset
];
const NeuroNoise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function NeuroNoiseImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorFront = defaultPreset.params.colorFront, colorMid = defaultPreset.params.colorMid, colorBack = defaultPreset.params.colorBack, brightness = defaultPreset.params.brightness, contrast = defaultPreset.params.contrast, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorFront: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorFront),
        u_colorMid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorMid),
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_brightness: brightness,
        u_contrast: contrast,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$neuro$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["neuroNoiseFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=neuro-noise.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/dot-orbit.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "DotOrbit": ()=>DotOrbit,
    "bubblesPreset": ()=>bubblesPreset,
    "defaultPreset": ()=>defaultPreset,
    "dotOrbitPresets": ()=>dotOrbitPresets,
    "hallucinatoryPreset": ()=>hallucinatoryPreset,
    "shinePreset": ()=>shinePreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-noise-texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dot$2d$orbit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/dot-orbit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 1.5,
        frame: 0,
        colorBack: "#000000",
        colors: [
            "#ffc96b",
            "#ff6200",
            "#ff2f00",
            "#421100",
            "#1a0000"
        ],
        size: 1,
        sizeRange: 0,
        spreading: 1,
        stepsPerColor: 4
    }
};
const shinePreset = {
    name: "Shine",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 0.1,
        frame: 0,
        colors: [
            "#ffffff",
            "#006aff",
            "#fff675"
        ],
        colorBack: "#000000",
        stepsPerColor: 4,
        size: 0.3,
        sizeRange: 0.2,
        spreading: 1,
        scale: 0.4
    }
};
const bubblesPreset = {
    name: "Bubbles",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 0.4,
        frame: 0,
        colors: [
            "#D0D2D5"
        ],
        colorBack: "#989CA4",
        stepsPerColor: 2,
        size: 0.9,
        sizeRange: 0.7,
        spreading: 1,
        scale: 1.64
    }
};
const hallucinatoryPreset = {
    name: "Hallucinatory",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 5,
        frame: 0,
        colors: [
            "#000000"
        ],
        colorBack: "#ffe500",
        stepsPerColor: 2,
        size: 0.65,
        sizeRange: 0,
        spreading: 0.3,
        scale: 0.5
    }
};
const dotOrbitPresets = [
    defaultPreset,
    bubblesPreset,
    shinePreset,
    hallucinatoryPreset
];
const DotOrbit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function DotOrbitImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorBack = defaultPreset.params.colorBack, colors = defaultPreset.params.colors, size = defaultPreset.params.size, sizeRange = defaultPreset.params.sizeRange, spreading = defaultPreset.params.spreading, stepsPerColor = defaultPreset.params.stepsPerColor, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_size: size,
        u_sizeRange: sizeRange,
        u_spreading: spreading,
        u_stepsPerColor: stepsPerColor,
        u_noiseTexture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderNoiseTexture"])(),
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dot$2d$orbit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dotOrbitFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=dot-orbit.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/dot-grid.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "DotGrid": ()=>DotGrid,
    "defaultPreset": ()=>defaultPreset,
    "dotGridPresets": ()=>dotGridPresets
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dot$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/dot-grid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        colorBack: "#000000",
        colorFill: "#ffffff",
        colorStroke: "#ffaa00",
        size: 2,
        gapX: 32,
        gapY: 32,
        strokeWidth: 0,
        sizeRange: 0,
        opacityRange: 0,
        shape: "circle"
    }
};
const trianglesPreset = {
    name: "Triangles",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        colorBack: "#ffffff",
        colorFill: "#ffffff",
        colorStroke: "#808080",
        size: 5,
        gapX: 32,
        gapY: 32,
        strokeWidth: 1,
        sizeRange: 0,
        opacityRange: 0,
        shape: "triangle"
    }
};
const treeLinePreset = {
    name: "Tree line",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        colorBack: "#f4fce7",
        colorFill: "#052e19",
        colorStroke: "#000000",
        size: 8,
        gapX: 20,
        gapY: 90,
        strokeWidth: 0,
        sizeRange: 1,
        opacityRange: 0.6,
        shape: "circle"
    }
};
const wallpaperPreset = {
    name: "Wallpaper",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        colorBack: "#204030",
        colorFill: "#000000",
        colorStroke: "#bd955b",
        size: 9,
        gapX: 32,
        gapY: 32,
        strokeWidth: 1,
        sizeRange: 0,
        opacityRange: 0,
        shape: "diamond"
    }
};
const dotGridPresets = [
    defaultPreset,
    trianglesPreset,
    treeLinePreset,
    wallpaperPreset
];
const DotGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function DotGridImpl({ // Own props
colorBack = defaultPreset.params.colorBack, colorFill = defaultPreset.params.colorFill, colorStroke = defaultPreset.params.colorStroke, size = defaultPreset.params.size, gapX = defaultPreset.params.gapX, gapY = defaultPreset.params.gapY, strokeWidth = defaultPreset.params.strokeWidth, sizeRange = defaultPreset.params.sizeRange, opacityRange = defaultPreset.params.opacityRange, shape = defaultPreset.params.shape, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, // Other props
maxPixelCount = 6016 * 3384, // Higher max resolution for this shader
...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colorFill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorFill),
        u_colorStroke: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorStroke),
        u_dotSize: size,
        u_gapX: gapX,
        u_gapY: gapY,
        u_strokeWidth: strokeWidth,
        u_sizeRange: sizeRange,
        u_opacityRange: opacityRange,
        u_shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dot$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotGridShapes"][shape],
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        maxPixelCount,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dot$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dotGridFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=dot-grid.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/simplex-noise.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "SimplexNoise": ()=>SimplexNoise,
    "bubblegumPreset": ()=>bubblegumPreset,
    "defaultPreset": ()=>defaultPreset,
    "firstContactPreset": ()=>firstContactPreset,
    "simplexNoisePresets": ()=>simplexNoisePresets,
    "spotsPreset": ()=>spotsPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$simplex$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/simplex-noise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 0.6,
        speed: 0.5,
        frame: 0,
        colors: [
            "#4449CF",
            "#FFD1E0",
            "#F94446",
            "#FFD36B",
            "#FFFFFF"
        ],
        stepsPerColor: 2,
        softness: 0
    }
};
const bubblegumPreset = {
    name: "Bubblegum",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 2,
        frame: 0,
        colors: [
            "#ffffff",
            "#ff9e9e",
            "#5f57ff",
            "#00f7ff"
        ],
        stepsPerColor: 1,
        softness: 1,
        scale: 1.6
    }
};
const spotsPreset = {
    name: "Spots",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 0.6,
        frame: 0,
        colors: [
            "#ff7b00",
            "#f9ffeb",
            "#320d82"
        ],
        stepsPerColor: 1,
        softness: 0,
        scale: 1
    }
};
const firstContactPreset = {
    name: "First contact",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 2,
        frame: 0,
        colors: [
            "#e8cce6",
            "#120d22",
            "#442c44",
            "#e6baba",
            "#fff5f5"
        ],
        stepsPerColor: 2,
        softness: 0,
        scale: 0.2
    }
};
const simplexNoisePresets = [
    defaultPreset,
    spotsPreset,
    firstContactPreset,
    bubblegumPreset
];
const SimplexNoise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function SimplexNoiseImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colors = defaultPreset.params.colors, stepsPerColor = defaultPreset.params.stepsPerColor, softness = defaultPreset.params.softness, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_stepsPerColor: stepsPerColor,
        u_softness: softness,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$simplex$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simplexNoiseFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=simplex-noise.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/metaballs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "Metaballs": ()=>Metaballs,
    "backgroundPreset": ()=>backgroundPreset,
    "defaultPreset": ()=>defaultPreset,
    "inkDropsPreset": ()=>inkDropsPreset,
    "metaballsPresets": ()=>metaballsPresets,
    "solarPreset": ()=>solarPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-noise-texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$metaballs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/metaballs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        scale: 1,
        speed: 1,
        frame: 0,
        colorBack: "#000000",
        colors: [
            "#6e33cc",
            "#ff5500",
            "#ffc105",
            "#ffc800",
            "#f585ff"
        ],
        count: 10,
        size: 0.83
    }
};
const inkDropsPreset = {
    name: "Ink Drops",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        scale: 1,
        speed: 2,
        frame: 0,
        colorBack: "#ffffff00",
        colors: [
            "#000000"
        ],
        count: 18,
        size: 0.1
    }
};
const backgroundPreset = {
    name: "Background",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0.5,
        frame: 0,
        colors: [
            "#ae00ff",
            "#00ff95",
            "#ffc105"
        ],
        colorBack: "#2a273f",
        count: 13,
        size: 0.81,
        scale: 4,
        rotation: 0,
        offsetX: -0.3
    }
};
const solarPreset = {
    name: "Solar",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colors: [
            "#ffc800",
            "#ff5500",
            "#ffc105"
        ],
        colorBack: "#102f84",
        count: 7,
        size: 0.75,
        scale: 1
    }
};
const metaballsPresets = [
    defaultPreset,
    inkDropsPreset,
    solarPreset,
    backgroundPreset
];
const Metaballs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function MetaballsImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorBack = defaultPreset.params.colorBack, colors = defaultPreset.params.colors, size = defaultPreset.params.size, count = defaultPreset.params.count, // Sizing props
fit = defaultPreset.params.fit, rotation = defaultPreset.params.rotation, scale = defaultPreset.params.scale, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_size: size,
        u_count: count,
        u_noiseTexture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderNoiseTexture"])(),
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_rotation: rotation,
        u_scale: scale,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$metaballs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["metaballsFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=metaballs.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/waves.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "Waves": ()=>Waves,
    "defaultPreset": ()=>defaultPreset,
    "groovyPreset": ()=>groovyPreset,
    "tangledUpPreset": ()=>tangledUpPreset,
    "waveRidePreset": ()=>waveRidePreset,
    "wavesPresets": ()=>wavesPresets
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/waves.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 0.6,
        colorFront: "#ffbb00",
        colorBack: "#000000",
        shape: 0,
        frequency: 0.5,
        amplitude: 0.5,
        spacing: 1.2,
        proportion: 0.1,
        softness: 0
    }
};
const groovyPreset = {
    name: "Groovy",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 5,
        rotation: 90,
        colorFront: "#fcfcee",
        colorBack: "#ff896b",
        shape: 3,
        frequency: 0.2,
        amplitude: 0.25,
        spacing: 1.17,
        proportion: 0.57,
        softness: 0
    }
};
const tangledUpPreset = {
    name: "Tangled up",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 0.5,
        rotation: 0,
        colorFront: "#133a41",
        colorBack: "#c2d8b6",
        shape: 2.07,
        frequency: 0.44,
        amplitude: 0.57,
        spacing: 1.05,
        proportion: 0.75,
        softness: 0
    }
};
const waveRidePreset = {
    name: "Ride the wave",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 1.7,
        rotation: 0,
        colorFront: "#fdffe6",
        colorBack: "#1f1f1f",
        shape: 2.25,
        frequency: 0.2,
        amplitude: 1,
        spacing: 1.25,
        proportion: 1,
        softness: 0
    }
};
const wavesPresets = [
    defaultPreset,
    groovyPreset,
    tangledUpPreset,
    waveRidePreset
];
const Waves = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function WavesImpl({ // Own props
colorFront = defaultPreset.params.colorFront, colorBack = defaultPreset.params.colorBack, shape = defaultPreset.params.shape, frequency = defaultPreset.params.frequency, amplitude = defaultPreset.params.amplitude, spacing = defaultPreset.params.spacing, proportion = defaultPreset.params.proportion, softness = defaultPreset.params.softness, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, // Other props
maxPixelCount = 6016 * 3384, // Higher max resolution for this shader
...props }) {
    const uniforms = {
        // Own uniforms
        u_colorFront: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorFront),
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_shape: shape,
        u_frequency: frequency,
        u_amplitude: amplitude,
        u_spacing: spacing,
        u_proportion: proportion,
        u_softness: softness,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wavesFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=waves.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/perlin-noise.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "PerlinNoise": ()=>PerlinNoise,
    "defaultPreset": ()=>defaultPreset,
    "mossPreset": ()=>mossPreset,
    "nintendoWaterPreset": ()=>nintendoWaterPreset,
    "perlinNoisePresets": ()=>perlinNoisePresets,
    "wormsPreset": ()=>wormsPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$perlin$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/perlin-noise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 0.5,
        frame: 0,
        colorBack: "#632ad5",
        colorFront: "#fccff7",
        proportion: 0.35,
        softness: 0.1,
        octaveCount: 1,
        persistence: 1,
        lacunarity: 1.5
    }
};
const nintendoWaterPreset = {
    name: "Nintendo Water",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 1 / 0.2,
        speed: 0.4,
        frame: 0,
        colorBack: "#2d69d4",
        colorFront: "#d1eefc",
        proportion: 0.42,
        softness: 0,
        octaveCount: 2,
        persistence: 0.55,
        lacunarity: 1.8
    }
};
const mossPreset = {
    name: "Moss",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 1 / 0.15,
        speed: 0.02,
        frame: 0,
        colorBack: "#05ff4a",
        colorFront: "#262626",
        proportion: 0.65,
        softness: 0.35,
        octaveCount: 6,
        persistence: 1,
        lacunarity: 2.55
    }
};
const wormsPreset = {
    name: "Worms",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 0.9,
        speed: 0,
        frame: 0,
        colorBack: "#ffffff00",
        colorFront: "#595959",
        proportion: 0.5,
        softness: 0,
        octaveCount: 1,
        persistence: 1,
        lacunarity: 1.5
    }
};
const perlinNoisePresets = [
    defaultPreset,
    nintendoWaterPreset,
    mossPreset,
    wormsPreset
];
const PerlinNoise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function PerlinNoiseImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorFront = defaultPreset.params.colorFront, colorBack = defaultPreset.params.colorBack, proportion = defaultPreset.params.proportion, softness = defaultPreset.params.softness, octaveCount = defaultPreset.params.octaveCount, persistence = defaultPreset.params.persistence, lacunarity, // Sizing props
fit = defaultPreset.params.fit, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colorFront: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorFront),
        u_proportion: proportion,
        u_softness: softness ?? defaultPreset.params.softness,
        u_octaveCount: octaveCount ?? defaultPreset.params.octaveCount,
        u_persistence: persistence ?? defaultPreset.params.persistence,
        u_lacunarity: lacunarity ?? defaultPreset.params.lacunarity,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$perlin$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perlinNoiseFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=perlin-noise.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/voronoi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "Voronoi": ()=>Voronoi,
    "bubblesPreset": ()=>bubblesPreset,
    "cellsPreset": ()=>cellsPreset,
    "defaultPreset": ()=>defaultPreset,
    "lightsPreset": ()=>lightsPreset,
    "voronoiPresets": ()=>voronoiPresets
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-noise-texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$voronoi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/voronoi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 0.5,
        frame: 0,
        colors: [
            "#ff8247",
            "#ffe53d"
        ],
        stepsPerColor: 3,
        colorGlow: "#ffffff",
        colorGap: "#2e0000",
        distortion: 0.4,
        gap: 0.04,
        glow: 0,
        scale: 0.5
    }
};
const cellsPreset = {
    name: "Cells",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 0.5,
        speed: 0.5,
        frame: 0,
        colors: [
            "#ffffff"
        ],
        stepsPerColor: 1,
        colorGlow: "#ffffff",
        colorGap: "#000000",
        distortion: 0.5,
        gap: 0.03,
        glow: 0.8
    }
};
const bubblesPreset = {
    name: "Bubbles",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 0.75,
        speed: 0.5,
        frame: 0,
        colors: [
            "#83c9fb"
        ],
        stepsPerColor: 1,
        colorGlow: "#ffffff",
        colorGap: "#ffffff",
        distortion: 0.4,
        gap: 0,
        glow: 1
    }
};
const lightsPreset = {
    name: "Lights",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 3.3,
        speed: 0.5,
        frame: 0,
        colors: [
            "#fffffffc",
            "#bbff00",
            "#00ffff"
        ],
        colorGlow: "#ff00d0",
        colorGap: "#ff00d0",
        stepsPerColor: 2,
        distortion: 0.38,
        gap: 0,
        glow: 1
    }
};
const voronoiPresets = [
    defaultPreset,
    lightsPreset,
    cellsPreset,
    bubblesPreset
];
const Voronoi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function VoronoiImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colors = defaultPreset.params.colors, stepsPerColor = defaultPreset.params.stepsPerColor, colorGlow = defaultPreset.params.colorGlow, colorGap = defaultPreset.params.colorGap, distortion = defaultPreset.params.distortion, gap = defaultPreset.params.gap, glow = defaultPreset.params.glow, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_stepsPerColor: stepsPerColor,
        u_colorGlow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorGlow),
        u_colorGap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorGap),
        u_distortion: distortion,
        u_gap: gap,
        u_glow: glow,
        u_noiseTexture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderNoiseTexture"])(),
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$voronoi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voronoiFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=voronoi.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/warp.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "Warp": ()=>Warp,
    "defaultPreset": ()=>defaultPreset,
    "presetCauldron": ()=>presetCauldron,
    "presetInk": ()=>presetInk,
    "presetKelp": ()=>presetKelp,
    "presetNectar": ()=>presetNectar,
    "presetPassion": ()=>presetPassion,
    "warpPresets": ()=>warpPresets
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-noise-texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$warp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/warp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        rotation: 0,
        speed: 1,
        frame: 0,
        colors: [
            "#121212",
            "#9470ff",
            "#121212",
            "#8838ff"
        ],
        proportion: 0.45,
        softness: 1,
        distortion: 0.25,
        swirl: 0.8,
        swirlIterations: 10,
        shapeScale: 0.1,
        shape: "checks"
    }
};
const presetCauldron = {
    name: "Cauldron Pot",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 0.9,
        rotation: 160,
        speed: 10,
        frame: 0,
        colors: [
            "#a7e58b",
            "#324472",
            "#0a180d"
        ],
        proportion: 0.64,
        softness: 1.5,
        distortion: 0.2,
        swirl: 0.86,
        swirlIterations: 7,
        shapeScale: 0.6,
        shape: "edge"
    }
};
const presetInk = {
    name: "Live Ink",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 1.2,
        rotation: 44,
        offsetY: -0.3,
        speed: 2.5,
        frame: 0,
        colors: [
            "#111314",
            "#9faeab",
            "#f3fee7",
            "#f3fee7"
        ],
        proportion: 0.05,
        softness: 0,
        distortion: 0.25,
        swirl: 0.8,
        swirlIterations: 10,
        shapeScale: 0.28,
        shape: "checks"
    }
};
const presetKelp = {
    name: "Kelp",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 0.8,
        rotation: 50,
        speed: 20,
        frame: 0,
        colors: [
            "#dbff8f",
            "#404f3e",
            "#091316"
        ],
        proportion: 0.67,
        softness: 0,
        distortion: 0,
        swirl: 0.2,
        swirlIterations: 3,
        shapeScale: 1,
        shape: "stripes"
    }
};
const presetNectar = {
    name: "Nectar",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 2,
        offsetY: 0.6,
        rotation: 0,
        speed: 4.2,
        frame: 0,
        colors: [
            "#151310",
            "#d3a86b",
            "#f0edea"
        ],
        proportion: 0.24,
        softness: 1,
        distortion: 0.21,
        swirl: 0.57,
        swirlIterations: 10,
        shapeScale: 0.75,
        shape: "edge"
    }
};
const presetPassion = {
    name: "Passion",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 2.5,
        rotation: 1.35,
        speed: 3,
        frame: 0,
        colors: [
            "#3b1515",
            "#954751",
            "#ffc085"
        ],
        proportion: 0.5,
        softness: 1,
        distortion: 0.09,
        swirl: 0.9,
        swirlIterations: 6,
        shapeScale: 0.25,
        shape: "checks"
    }
};
const warpPresets = [
    defaultPreset,
    presetCauldron,
    presetInk,
    presetKelp,
    presetNectar,
    presetPassion
];
const Warp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function WarpImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colors = defaultPreset.params.colors, proportion = defaultPreset.params.proportion, softness = defaultPreset.params.softness, distortion = defaultPreset.params.distortion, swirl = defaultPreset.params.swirl, swirlIterations = defaultPreset.params.swirlIterations, shapeScale = defaultPreset.params.shapeScale, shape = defaultPreset.params.shape, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_proportion: proportion,
        u_softness: softness,
        u_distortion: distortion,
        u_swirl: swirl,
        u_swirlIterations: swirlIterations,
        u_shapeScale: shapeScale,
        u_shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$warp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WarpPatterns"][shape],
        u_noiseTexture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderNoiseTexture"])(),
        // Sizing uniforms
        u_scale: scale,
        u_rotation: rotation,
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$warp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warpFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=warp.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/god-rays.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "GodRays": ()=>GodRays,
    "defaultPreset": ()=>defaultPreset,
    "etherPreset": ()=>etherPreset,
    "godRaysPresets": ()=>godRaysPresets,
    "linearPreset": ()=>linearPreset,
    "warpPreset": ()=>warpPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-noise-texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$god$2d$rays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/god-rays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        offsetX: 0,
        offsetY: -0.55,
        colorBack: "#000000",
        colorBloom: "#0000ff",
        colors: [
            "#a600ff6e",
            "#6200fff0",
            "#ffffff",
            "#33fff5"
        ],
        density: 0.3,
        spotty: 0.3,
        midIntensity: 0.4,
        midSize: 0.2,
        intensity: 0.8,
        bloom: 0.4,
        speed: 0.75,
        frame: 0
    }
};
const warpPreset = {
    name: "Warp",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        colorBack: "#000000",
        colorBloom: "#222288",
        colors: [
            "#ff47d4",
            "#ff8c00",
            "#ffffff"
        ],
        density: 0.45,
        spotty: 0.15,
        midIntensity: 0.4,
        midSize: 0.33,
        intensity: 0.79,
        bloom: 0.4,
        speed: 2,
        frame: 0
    }
};
const linearPreset = {
    name: "Linear",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        offsetX: 0.2,
        offsetY: -0.8,
        colorBack: "#000000",
        colorBloom: "#eeeeee",
        colors: [
            "#ffffff1f",
            "#ffffff3d",
            "#ffffff29"
        ],
        density: 0.41,
        spotty: 0.25,
        midSize: 0.1,
        midIntensity: 0.75,
        intensity: 0.79,
        bloom: 1,
        speed: 0.5,
        frame: 0
    }
};
const etherPreset = {
    name: "Ether",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        offsetX: -0.6,
        colorBack: "#090f1d",
        colorBloom: "#ffffff",
        colors: [
            "#148effa6",
            "#c4dffebe",
            "#232a47"
        ],
        density: 0.03,
        spotty: 0.77,
        midSize: 0.1,
        midIntensity: 0.6,
        intensity: 0.6,
        bloom: 0.6,
        speed: 1,
        frame: 0
    }
};
const godRaysPresets = [
    defaultPreset,
    warpPreset,
    linearPreset,
    etherPreset
];
const GodRays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function GodRaysImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorBloom = defaultPreset.params.colorBloom, colorBack = defaultPreset.params.colorBack, colors = defaultPreset.params.colors, density = defaultPreset.params.density, spotty = defaultPreset.params.spotty, midIntensity = defaultPreset.params.midIntensity, midSize = defaultPreset.params.midSize, intensity = defaultPreset.params.intensity, bloom = defaultPreset.params.bloom, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBloom: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBloom),
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_density: density,
        u_spotty: spotty,
        u_midIntensity: midIntensity,
        u_midSize: midSize,
        u_intensity: intensity,
        u_bloom: bloom,
        u_noiseTexture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderNoiseTexture"])(),
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$god$2d$rays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["godRaysFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=god-rays.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/spiral.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "Spiral": ()=>Spiral,
    "defaultPreset": ()=>defaultPreset,
    "dropletPreset": ()=>dropletPreset,
    "junglePreset": ()=>junglePreset,
    "spiralPresets": ()=>spiralPresets,
    "swirlPreset": ()=>swirlPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$spiral$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/spiral.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 1,
        colorBack: "#001429",
        colorFront: "#79D1FF",
        density: 1,
        distortion: 0,
        strokeWidth: 0.5,
        strokeTaper: 0,
        strokeCap: 0,
        noise: 0,
        noiseFrequency: 0,
        softness: 0,
        speed: 1,
        frame: 0
    }
};
const dropletPreset = {
    name: "Droplet",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        colorBack: "#effafe",
        colorFront: "#bf40a0",
        density: 0.9,
        distortion: 0,
        strokeWidth: 0.75,
        strokeTaper: 0.18,
        strokeCap: 1,
        noise: 0.74,
        noiseFrequency: 0.33,
        softness: 0.02,
        speed: 1,
        frame: 0
    }
};
const junglePreset = {
    name: "Jungle",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 1.3,
        density: 0.5,
        colorBack: "#a0ef2a",
        colorFront: "#288b18",
        distortion: 0,
        strokeWidth: 0.5,
        strokeTaper: 0,
        strokeCap: 0,
        noise: 1,
        noiseFrequency: 0.25,
        softness: 0,
        speed: 0.75,
        frame: 0
    }
};
const swirlPreset = {
    name: "Swirl",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 0.45,
        colorBack: "#b3e6d9",
        colorFront: "#1a2b4d",
        density: 0.2,
        distortion: 0,
        strokeWidth: 0.5,
        strokeTaper: 0,
        strokeCap: 0,
        noise: 0,
        noiseFrequency: 0.3,
        softness: 0.5,
        speed: 1,
        frame: 0
    }
};
const spiralPresets = [
    defaultPreset,
    junglePreset,
    dropletPreset,
    swirlPreset
];
const Spiral = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function SpiralImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorBack = defaultPreset.params.colorBack, colorFront = defaultPreset.params.colorFront, density = defaultPreset.params.density, distortion = defaultPreset.params.distortion, strokeWidth = defaultPreset.params.strokeWidth, strokeTaper = defaultPreset.params.strokeTaper, strokeCap = defaultPreset.params.strokeCap, noiseFrequency = defaultPreset.params.noiseFrequency, noise = defaultPreset.params.noise, softness = defaultPreset.params.softness, // Sizing props
fit = defaultPreset.params.fit, rotation = defaultPreset.params.rotation, scale = defaultPreset.params.scale, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colorFront: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorFront),
        u_density: density,
        u_distortion: distortion,
        u_strokeWidth: strokeWidth,
        u_strokeTaper: strokeTaper,
        u_strokeCap: strokeCap,
        u_noiseFrequency: noiseFrequency,
        u_noise: noise,
        u_softness: softness,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$spiral$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spiralFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=spiral.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/swirl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "Swirl": ()=>Swirl,
    "candyPreset": ()=>candyPreset,
    "defaultPreset": ()=>defaultPreset,
    "jamesBondPreset": ()=>jamesBondPreset,
    "openingPreset": ()=>openingPreset,
    "swirlPresets": ()=>swirlPresets
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$swirl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/swirl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0.32,
        frame: 0,
        colorBack: "#330000",
        colors: [
            "#ffd1d1",
            "#ff8a8a",
            "#660000"
        ],
        bandCount: 4,
        twist: 0.1,
        center: 0.2,
        proportion: 0.5,
        softness: 0,
        noiseFrequency: 0.4,
        noise: 0.2
    }
};
const openingPreset = {
    name: "Opening",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        offsetX: -0.4,
        offsetY: 1,
        speed: 0.5,
        frame: 0,
        colorBack: "#ff8b61",
        colors: [
            "#fefff0",
            "#ffd8bd",
            "#ff8b61"
        ],
        bandCount: 2,
        twist: 0.3,
        center: 0.2,
        proportion: 0.5,
        softness: 0,
        noiseFrequency: 0,
        noise: 0,
        scale: 1
    }
};
const jamesBondPreset = {
    name: "007",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colorBack: "#E9E7DA",
        colors: [
            "#000000"
        ],
        bandCount: 5,
        twist: 0.3,
        center: 0,
        proportion: 0,
        softness: 0,
        noiseFrequency: 0.5,
        noise: 0
    }
};
const candyPreset = {
    name: "Candy",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colorBack: "#ffcd66",
        colors: [
            "#6bbceb",
            "#d7b3ff",
            "#ff9fff"
        ],
        bandCount: 2,
        twist: 0.15,
        center: 0.2,
        proportion: 0.5,
        softness: 1,
        noiseFrequency: 0.5,
        noise: 0
    }
};
const swirlPresets = [
    defaultPreset,
    jamesBondPreset,
    openingPreset,
    candyPreset
];
const Swirl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function SwirlImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorBack = defaultPreset.params.colorBack, colors = defaultPreset.params.colors, bandCount = defaultPreset.params.bandCount, twist = defaultPreset.params.twist, center = defaultPreset.params.center, proportion = defaultPreset.params.proportion, softness = defaultPreset.params.softness, noiseFrequency = defaultPreset.params.noiseFrequency, noise = defaultPreset.params.noise, // Sizing props
fit = defaultPreset.params.fit, rotation = defaultPreset.params.rotation, scale = defaultPreset.params.scale, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_bandCount: bandCount,
        u_twist: twist,
        u_center: center,
        u_proportion: proportion,
        u_softness: softness,
        u_noiseFrequency: noiseFrequency,
        u_noise: noise,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$swirl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["swirlFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=swirl.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/dithering.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "Dithering": ()=>Dithering,
    "bugsPreset": ()=>bugsPreset,
    "defaultPreset": ()=>defaultPreset,
    "ditheringPresets": ()=>ditheringPresets,
    "ripplePreset": ()=>ripplePreset,
    "sinePreset": ()=>sinePreset,
    "swirlPreset": ()=>swirlPreset,
    "warpPreset": ()=>warpPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/dithering.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 1,
        frame: 0,
        scale: 0.6,
        colorBack: "#000000",
        colorFront: "#00b2ff",
        shape: "sphere",
        type: "4x4",
        size: 2
    }
};
const sinePreset = {
    name: "Sine Wave",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 1,
        frame: 0,
        colorBack: "#730d54",
        colorFront: "#00becc",
        shape: "wave",
        type: "4x4",
        size: 11,
        scale: 1.2
    }
};
const bugsPreset = {
    name: "Bugs",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 1,
        frame: 0,
        colorBack: "#000000",
        colorFront: "#008000",
        shape: "dots",
        type: "random",
        size: 9
    }
};
const ripplePreset = {
    name: "Ripple",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colorBack: "#603520",
        colorFront: "#c67953",
        shape: "ripple",
        type: "2x2",
        size: 3
    }
};
const swirlPreset = {
    name: "Swirl",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colorBack: "#00000000",
        colorFront: "#47a8e1",
        shape: "swirl",
        type: "8x8",
        size: 2
    }
};
const warpPreset = {
    name: "Warp",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colorBack: "#301c2a",
        colorFront: "#56ae6c",
        shape: "warp",
        type: "4x4",
        size: 2.5
    }
};
const ditheringPresets = [
    defaultPreset,
    warpPreset,
    sinePreset,
    ripplePreset,
    bugsPreset,
    swirlPreset
];
const Dithering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function DitheringImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorBack = defaultPreset.params.colorBack, colorFront = defaultPreset.params.colorFront, shape = defaultPreset.params.shape, type = defaultPreset.params.type, pxSize, size = pxSize === void 0 ? defaultPreset.params.size : pxSize, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colorFront: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorFront),
        u_shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DitheringShapes"][shape],
        u_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DitheringTypes"][type],
        u_pxSize: size,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ditheringFragmentShader"],
        uniforms
    });
});
;
 //# sourceMappingURL=dithering.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/grain-gradient.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "GrainGradient": ()=>GrainGradient,
    "blobPreset": ()=>blobPreset,
    "defaultPreset": ()=>defaultPreset,
    "dotsPreset": ()=>dotsPreset,
    "grainGradientPresets": ()=>grainGradientPresets,
    "ripplePreset": ()=>ripplePreset,
    "truchetPreset": ()=>truchetPreset,
    "wavePreset": ()=>wavePreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-noise-texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$grain$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/grain-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colorBack: "#000000",
        colors: [
            "#7300ff",
            "#eba8ff",
            "#00bfff",
            "#2a00ff"
        ],
        softness: 0.5,
        intensity: 0.5,
        noise: 0.25,
        shape: "corners"
    }
};
const wavePreset = {
    name: "Wave",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 1,
        frame: 0,
        colorBack: "#000a0f",
        colors: [
            "#c4730b",
            "#bdad5f",
            "#d8ccc7"
        ],
        softness: 0.7,
        intensity: 0.15,
        noise: 0.5,
        shape: "wave"
    }
};
const dotsPreset = {
    name: "Dots",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        scale: 0.6,
        speed: 1,
        frame: 0,
        colorBack: "#0a0000",
        colors: [
            "#6f0000",
            "#0080ff",
            "#f2ebc9",
            "#33cc33"
        ],
        softness: 1,
        intensity: 1,
        noise: 0.7,
        shape: "dots"
    }
};
const truchetPreset = {
    name: "Truchet",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPatternSizing"],
        speed: 1,
        frame: 0,
        colorBack: "#0a0000",
        colors: [
            "#6f2200",
            "#eabb7c",
            "#39b523"
        ],
        softness: 0,
        intensity: 0.2,
        noise: 1,
        shape: "truchet"
    }
};
const ripplePreset = {
    name: "Ripple",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        scale: 0.5,
        speed: 1,
        frame: 0,
        colorBack: "#140a00",
        colors: [
            "#6f2d00",
            "#88ddae",
            "#2c0b1d"
        ],
        softness: 0.5,
        intensity: 0.5,
        noise: 0.5,
        shape: "ripple"
    }
};
const blobPreset = {
    name: "Blob",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        scale: 1.3,
        speed: 1,
        frame: 0,
        colorBack: "#0f0e18",
        colors: [
            "#3e6172",
            "#a49b74",
            "#568c50"
        ],
        softness: 0,
        intensity: 0.15,
        noise: 0.5,
        shape: "blob"
    }
};
const grainGradientPresets = [
    defaultPreset,
    wavePreset,
    dotsPreset,
    truchetPreset,
    ripplePreset,
    blobPreset
];
const GrainGradient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function GrainGradientImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorBack = defaultPreset.params.colorBack, colors = defaultPreset.params.colors, softness = defaultPreset.params.softness, intensity = defaultPreset.params.intensity, noise = defaultPreset.params.noise, shape = defaultPreset.params.shape, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_softness: softness,
        u_intensity: intensity,
        u_noise: noise,
        u_shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$grain$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrainGradientShapes"][shape],
        u_noiseTexture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderNoiseTexture"])(),
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$grain$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["grainGradientFragmentShader"],
        uniforms
    });
});
;
 //# sourceMappingURL=grain-gradient.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/pulsing-border.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "PulsingBorder": ()=>PulsingBorder,
    "circlePreset": ()=>circlePreset,
    "defaultPreset": ()=>defaultPreset,
    "northernLightsPreset": ()=>northernLightsPreset,
    "pulsingBorderPresets": ()=>pulsingBorderPresets,
    "solidLinePreset": ()=>solidLinePreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-noise-texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$pulsing$2d$border$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/pulsing-border.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        scale: 0.6,
        colorBack: "#000000",
        colors: [
            "#0dc1fd",
            "#d915ef",
            "#ff3f2ecc"
        ],
        roundness: 0.25,
        thickness: 0.1,
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        aspectRatio: "auto",
        softness: 0.75,
        intensity: 0.2,
        bloom: 0.25,
        spots: 5,
        spotSize: 0.5,
        pulse: 0.25,
        smoke: 0.3,
        smokeSize: 0.6
    }
};
const circlePreset = {
    name: "Circle",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        aspectRatio: "square",
        scale: 0.6,
        speed: 1,
        frame: 0,
        colorBack: "#000000",
        colors: [
            "#0dc1fd",
            "#d915ef",
            "#ff3f2ecc"
        ],
        roundness: 1,
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        thickness: 0,
        softness: 0.75,
        intensity: 0.2,
        bloom: 0.45,
        spots: 3,
        spotSize: 0.4,
        pulse: 0.5,
        smoke: 1,
        smokeSize: 0
    }
};
const northernLightsPreset = {
    name: "Northern lights",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0.18,
        scale: 1.1,
        frame: 0,
        colors: [
            "#4c4794",
            "#774a7d",
            "#12694a",
            "#0aff78",
            "#4733cc"
        ],
        colorBack: "#0c182c",
        roundness: 0,
        thickness: 1,
        softness: 1,
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        aspectRatio: "auto",
        intensity: 0.1,
        bloom: 0.2,
        spots: 4,
        spotSize: 0.25,
        pulse: 0,
        smoke: 0.32,
        smokeSize: 0.5
    }
};
const solidLinePreset = {
    name: "Solid line",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        colors: [
            "#81ADEC"
        ],
        colorBack: "#00000000",
        roundness: 0,
        thickness: 0.05,
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        aspectRatio: "auto",
        softness: 0,
        intensity: 0,
        bloom: 0.15,
        spots: 4,
        spotSize: 1,
        pulse: 0,
        smoke: 0,
        smokeSize: 0
    }
};
const pulsingBorderPresets = [
    defaultPreset,
    circlePreset,
    northernLightsPreset,
    solidLinePreset
];
const PulsingBorder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function PulsingBorderImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colors = defaultPreset.params.colors, colorBack = defaultPreset.params.colorBack, roundness = defaultPreset.params.roundness, thickness = defaultPreset.params.thickness, aspectRatio = defaultPreset.params.aspectRatio, softness = defaultPreset.params.softness, bloom = defaultPreset.params.bloom, intensity = defaultPreset.params.intensity, spots = defaultPreset.params.spots, spotSize = defaultPreset.params.spotSize, pulse = defaultPreset.params.pulse, smoke = defaultPreset.params.smoke, smokeSize = defaultPreset.params.smokeSize, margin, marginLeft = margin ?? defaultPreset.params.marginLeft, marginRight = margin ?? defaultPreset.params.marginRight, marginTop = margin ?? defaultPreset.params.marginTop, marginBottom = margin ?? defaultPreset.params.marginBottom, // Sizing props
fit = defaultPreset.params.fit, rotation = defaultPreset.params.rotation, scale = defaultPreset.params.scale, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_roundness: roundness,
        u_thickness: thickness,
        u_marginLeft: marginLeft,
        u_marginRight: marginRight,
        u_marginTop: marginTop,
        u_marginBottom: marginBottom,
        u_aspectRatio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$pulsing$2d$border$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PulsingBorderAspectRatios"][aspectRatio],
        u_softness: softness,
        u_intensity: intensity,
        u_bloom: bloom,
        u_spots: spots,
        u_spotSize: spotSize,
        u_pulse: pulse,
        u_smoke: smoke,
        u_smokeSize: smokeSize,
        u_noiseTexture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderNoiseTexture"])(),
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_rotation: rotation,
        u_scale: scale,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$pulsing$2d$border$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pulsingBorderFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=pulsing-border.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/color-panels.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "ColorPanels": ()=>ColorPanels,
    "colorPanelsPresets": ()=>colorPanelsPresets,
    "defaultPreset": ()=>defaultPreset,
    "glassPreset": ()=>glassPreset,
    "gradientPreset": ()=>gradientPreset,
    "openingPreset": ()=>openingPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$color$2d$panels$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/color-panels.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0.5,
        frame: 0,
        colors: [
            "#ff9d00",
            "#fd4f30",
            "#809bff",
            "#6d2eff",
            "#333aff",
            "#f15cff",
            "#ffd557"
        ],
        colorBack: "#000000",
        angle1: 0,
        angle2: 0,
        length: 1.1,
        edges: false,
        blur: 0,
        fadeIn: 1,
        fadeOut: 0.3,
        gradient: 0,
        density: 3,
        scale: 0.8
    }
};
const glassPreset = {
    name: "Glass",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        rotation: 112,
        speed: 1,
        frame: 0,
        colors: [
            "#00cfff",
            "#ff2d55",
            "#34c759",
            "#af52de"
        ],
        colorBack: "#ffffff00",
        angle1: 0.3,
        angle2: 0.3,
        length: 1,
        edges: true,
        blur: 0.25,
        fadeIn: 0.85,
        fadeOut: 0.3,
        gradient: 0,
        density: 1.6
    }
};
const gradientPreset = {
    name: "Gradient",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0.5,
        frame: 0,
        colors: [
            "#f2ff00",
            "#00000000",
            "#00000000",
            "#5a0283",
            "#005eff"
        ],
        colorBack: "#8ffff2",
        angle1: 0.4,
        angle2: 0.4,
        length: 3,
        edges: false,
        blur: 0.5,
        fadeIn: 1,
        fadeOut: 0.39,
        gradient: 0.78,
        density: 1.65,
        scale: 1.72,
        rotation: 270,
        offsetX: 0.18
    }
};
const openingPreset = {
    name: "Opening",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 2,
        frame: 0,
        colors: [
            "#00ffff"
        ],
        colorBack: "#570044",
        angle1: -1,
        angle2: -1,
        length: 0.52,
        edges: false,
        blur: 0,
        fadeIn: 0,
        fadeOut: 1,
        gradient: 0,
        density: 2.21,
        scale: 2.32,
        rotation: 360,
        offsetX: -0.3,
        offsetY: 0.6
    }
};
const colorPanelsPresets = [
    defaultPreset,
    glassPreset,
    gradientPreset,
    openingPreset
];
const ColorPanels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function ColorPanelsImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colors = defaultPreset.params.colors, colorBack = defaultPreset.params.colorBack, angle1 = defaultPreset.params.angle1, angle2 = defaultPreset.params.angle2, length = defaultPreset.params.length, edges = defaultPreset.params.edges, blur = defaultPreset.params.blur, fadeIn = defaultPreset.params.fadeIn, fadeOut = defaultPreset.params.fadeOut, density = defaultPreset.params.density, gradient = defaultPreset.params.gradient, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_angle1: angle1,
        u_angle2: angle2,
        u_length: length,
        u_edges: edges,
        u_blur: blur,
        u_fadeIn: fadeIn,
        u_fadeOut: fadeOut,
        u_density: density,
        u_gradient: gradient,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$color$2d$panels$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPanelsFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=color-panels.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/static-mesh-gradient.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "StaticMeshGradient": ()=>StaticMeshGradient,
    "defaultPreset": ()=>defaultPreset,
    "seaPreset": ()=>seaPreset,
    "sixtiesPreset": ()=>sixtiesPreset,
    "staticMeshGradientPresets": ()=>staticMeshGradientPresets,
    "sunsetPreset": ()=>sunsetPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$static$2d$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/static-mesh-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        rotation: 270,
        speed: 0,
        frame: 0,
        colors: [
            "#ffad0a",
            "#6200ff",
            "#e2a3ff",
            "#ff99fd"
        ],
        positions: 2,
        waveX: 1,
        waveXShift: 0.6,
        waveY: 1,
        waveYShift: 0.21,
        mixing: 0.93,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const seaPreset = {
    name: "Sea",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0,
        frame: 0,
        colors: [
            "#013b65",
            "#03738c",
            "#a3d3ff",
            "#f2faef"
        ],
        positions: 0,
        waveX: 0.53,
        waveXShift: 0,
        waveY: 0.95,
        waveYShift: 0.64,
        mixing: 0.5,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const sixtiesPreset = {
    name: "1960s",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0,
        frame: 0,
        colors: [
            "#000000",
            "#082400",
            "#b1aa91",
            "#8e8c15"
        ],
        positions: 42,
        waveX: 0.45,
        waveXShift: 0,
        waveY: 1,
        waveYShift: 0,
        mixing: 0,
        grainMixer: 0.37,
        grainOverlay: 0.78
    }
};
const sunsetPreset = {
    name: "Sunset",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0,
        frame: 0,
        colors: [
            "#264653",
            "#9c2b2b",
            "#f4a261",
            "#ffffff"
        ],
        positions: 0,
        waveX: 0.6,
        waveXShift: 0.7,
        waveY: 0.7,
        waveYShift: 0.7,
        mixing: 0.5,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const staticMeshGradientPresets = [
    defaultPreset,
    sixtiesPreset,
    sunsetPreset,
    seaPreset
];
const StaticMeshGradient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function StaticMeshGradientImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colors = defaultPreset.params.colors, positions = defaultPreset.params.positions, waveX = defaultPreset.params.waveX, waveXShift = defaultPreset.params.waveXShift, waveY = defaultPreset.params.waveY, waveYShift = defaultPreset.params.waveYShift, mixing = defaultPreset.params.mixing, grainMixer = defaultPreset.params.grainMixer, grainOverlay = defaultPreset.params.grainOverlay, // Sizing props
fit = defaultPreset.params.fit, rotation = defaultPreset.params.rotation, scale = defaultPreset.params.scale, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_positions: positions,
        u_waveX: waveX,
        u_waveXShift: waveXShift,
        u_waveY: waveY,
        u_waveYShift: waveYShift,
        u_mixing: mixing,
        u_grainMixer: grainMixer,
        u_grainOverlay: grainOverlay,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_rotation: rotation,
        u_scale: scale,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$static$2d$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticMeshGradientFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=static-mesh-gradient.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/static-radial-gradient.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "StaticRadialGradient": ()=>StaticRadialGradient,
    "crossSectionPreset": ()=>crossSectionPreset,
    "defaultPreset": ()=>defaultPreset,
    "loFiPreset": ()=>loFiPreset,
    "radialPreset": ()=>radialPreset,
    "staticRadialGradientPresets": ()=>staticRadialGradientPresets
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$static$2d$radial$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/static-radial-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        scale: 1,
        speed: 0,
        frame: 0,
        colorBack: "#000000",
        colors: [
            "#00bbff",
            "#00ffe1",
            "#ffffff"
        ],
        radius: 0.8,
        focalDistance: 0.99,
        focalAngle: 0,
        falloff: 0.24,
        mixing: 0.35,
        distortion: 0,
        distortionShift: 0,
        distortionFreq: 12,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const crossSectionPreset = {
    name: "Cross Section",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        scale: 1,
        speed: 0,
        frame: 0,
        colorBack: "#3d348b",
        colors: [
            "#7678ed",
            "#f7b801",
            "#f18701",
            "#37a066"
        ],
        radius: 1,
        focalDistance: 0,
        focalAngle: 0,
        falloff: 0,
        mixing: 0,
        distortion: 1,
        distortionShift: 0,
        distortionFreq: 12,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const radialPreset = {
    name: "Radial",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        scale: 1,
        speed: 0,
        frame: 0,
        colorBack: "#264653",
        colors: [
            "#9c2b2b",
            "#f4a261",
            "#ffffff"
        ],
        radius: 1,
        focalDistance: 0,
        focalAngle: 0,
        falloff: 0,
        mixing: 0.7,
        distortion: 0,
        distortionShift: 0,
        distortionFreq: 12,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const loFiPreset = {
    name: "Lo-Fi",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0,
        frame: 0,
        colorBack: "#2e1f27",
        colors: [
            "#d72638",
            "#3f88c5",
            "#f49d37"
        ],
        radius: 1,
        focalDistance: 0,
        focalAngle: 0,
        falloff: 0.9,
        mixing: 0.5,
        distortion: 0,
        distortionShift: 0,
        distortionFreq: 12,
        grainMixer: 1,
        grainOverlay: 0.5
    }
};
const staticRadialGradientPresets = [
    defaultPreset,
    loFiPreset,
    crossSectionPreset,
    radialPreset
];
const StaticRadialGradient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function StaticRadialGradientImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorBack = defaultPreset.params.colorBack, colors = defaultPreset.params.colors, radius = defaultPreset.params.radius, focalDistance = defaultPreset.params.focalDistance, focalAngle = defaultPreset.params.focalAngle, falloff = defaultPreset.params.falloff, grainMixer = defaultPreset.params.grainMixer, mixing = defaultPreset.params.mixing, distortion = defaultPreset.params.distortion, distortionShift = defaultPreset.params.distortionShift, distortionFreq = defaultPreset.params.distortionFreq, grainOverlay = defaultPreset.params.grainOverlay, // Sizing props
fit = defaultPreset.params.fit, rotation = defaultPreset.params.rotation, scale = defaultPreset.params.scale, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
        u_colorsCount: colors.length,
        u_radius: radius,
        u_focalDistance: focalDistance,
        u_focalAngle: focalAngle,
        u_falloff: falloff,
        u_mixing: mixing,
        u_distortion: distortion,
        u_distortionShift: distortionShift,
        u_distortionFreq: distortionFreq,
        u_grainMixer: grainMixer,
        u_grainOverlay: grainOverlay,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_rotation: rotation,
        u_scale: scale,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$static$2d$radial$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticRadialGradientFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=static-radial-gradient.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/paper-texture.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "PaperTexture": ()=>PaperTexture,
    "abstractPreset": ()=>abstractPreset,
    "cardboardPreset": ()=>cardboardPreset,
    "defaultPreset": ()=>defaultPreset,
    "detailsPreset": ()=>detailsPreset,
    "paperTexturePresets": ()=>paperTexturePresets
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-noise-texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$paper$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/paper-texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        scale: 0.6,
        speed: 0,
        frame: 0,
        colorFront: "#9fadbc",
        colorBack: "#ffffff",
        contrast: 0.3,
        roughness: 0.4,
        fiber: 0.3,
        fiberSize: 0.2,
        crumples: 0.3,
        crumpleSize: 0.35,
        folds: 0.65,
        foldCount: 5,
        fade: 0,
        drops: 0.2,
        seed: 5.8
    }
};
const abstractPreset = {
    name: "Abstract",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        speed: 0,
        frame: 0,
        scale: 0.6,
        colorFront: "#00eeff",
        colorBack: "#ff0a81",
        contrast: 0.85,
        roughness: 0,
        fiber: 0.1,
        fiberSize: 0.2,
        crumples: 0,
        crumpleSize: 0.3,
        folds: 1,
        foldCount: 3,
        fade: 0,
        drops: 0.2,
        seed: 2.2
    }
};
const cardboardPreset = {
    name: "Cardboard",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        speed: 0,
        frame: 0,
        scale: 0.6,
        colorFront: "#c7b89e",
        colorBack: "#999180",
        contrast: 0.4,
        roughness: 0,
        fiber: 0.35,
        fiberSize: 0.14,
        crumples: 0.7,
        crumpleSize: 0.1,
        folds: 0,
        foldCount: 1,
        fade: 0,
        drops: 0.1,
        seed: 1.6
    }
};
const detailsPreset = {
    name: "Details",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 0,
        frame: 0,
        fit: "cover",
        scale: 3,
        colorFront: "#00000000",
        colorBack: "#00000000",
        contrast: 0,
        roughness: 1,
        fiber: 0.27,
        fiberSize: 0.22,
        crumples: 1,
        crumpleSize: 0.5,
        folds: 1,
        foldCount: 15,
        fade: 0,
        drops: 0,
        seed: 6
    }
};
const paperTexturePresets = [
    defaultPreset,
    cardboardPreset,
    abstractPreset,
    detailsPreset
];
const PaperTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function PaperTextureImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorFront = defaultPreset.params.colorFront, colorBack = defaultPreset.params.colorBack, image = "", contrast = defaultPreset.params.contrast, roughness = defaultPreset.params.roughness, fiber = defaultPreset.params.fiber, crumples = defaultPreset.params.crumples, folds = defaultPreset.params.folds, drops = defaultPreset.params.drops, seed = defaultPreset.params.seed, // Reworked props
fiberScale, fiberSize = fiberScale === void 0 ? defaultPreset.params.fiberSize : 0.2 / fiberScale, crumplesScale, crumpleSize = crumplesScale === void 0 ? defaultPreset.params.crumpleSize : 0.2 / crumplesScale, blur, fade = blur === void 0 ? defaultPreset.params.fade : blur, foldsNumber, foldCount = foldsNumber === void 0 ? defaultPreset.params.foldCount : foldsNumber, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const noiseTexture = "undefined" !== "undefined" && {
        u_noiseTexture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$noise$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderNoiseTexture"])()
    };
    const uniforms = {
        // Own uniforms
        u_image: image,
        u_colorFront: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorFront),
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_contrast: contrast,
        u_roughness: roughness,
        u_fiber: fiber,
        u_fiberSize: fiberSize,
        u_crumples: crumples,
        u_crumpleSize: crumpleSize,
        u_foldCount: foldCount,
        u_folds: folds,
        u_fade: fade,
        u_drops: drops,
        u_seed: seed,
        ...noiseTexture,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$paper$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paperTextureFragmentShader"],
        mipmaps: [
            "u_image"
        ],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=paper-texture.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/fluted-glass.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "FlutedGlass": ()=>FlutedGlass,
    "abstractPreset": ()=>abstractPreset,
    "defaultPreset": ()=>defaultPreset,
    "flutedGlassPresets": ()=>flutedGlassPresets,
    "foldsPreset": ()=>foldsPreset,
    "wavesPreset": ()=>wavesPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$fluted$2d$glass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/fluted-glass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        scale: 1.1,
        speed: 0,
        frame: 0,
        colorBack: "#00000000",
        colorShadow: "#000000",
        colorHighlight: "#ffffff",
        shadows: 0.25,
        size: 0.5,
        angle: 0,
        distortionShape: "prism",
        highlights: 0.1,
        shape: "lines",
        distortion: 0.5,
        shift: 0,
        blur: 0,
        edges: 0.25,
        stretch: 0,
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const wavesPreset = {
    name: "Waves",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        scale: 1.2,
        speed: 0,
        frame: 0,
        colorBack: "#00000000",
        colorShadow: "#000000",
        colorHighlight: "#ffffff",
        shadows: 0,
        size: 0.9,
        angle: 0,
        distortionShape: "contour",
        highlights: 0,
        shape: "wave",
        distortion: 0.5,
        shift: 0,
        blur: 0.1,
        edges: 0.5,
        stretch: 1,
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        grainMixer: 0,
        grainOverlay: 0.05
    }
};
const abstractPreset = {
    name: "Abstract",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        scale: 4,
        speed: 0,
        frame: 0,
        colorBack: "#00000000",
        colorShadow: "#000000",
        colorHighlight: "#ffffff",
        shadows: 0,
        size: 0.7,
        angle: 30,
        distortionShape: "flat",
        highlights: 0,
        shape: "linesIrregular",
        distortion: 1,
        shift: 0,
        blur: 1,
        edges: 0.5,
        stretch: 1,
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        grainMixer: 0.1,
        grainOverlay: 0.1
    }
};
const foldsPreset = {
    name: "Folds",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        speed: 0,
        frame: 0,
        colorBack: "#00000000",
        colorShadow: "#000000",
        colorHighlight: "#ffffff",
        shadows: 0.4,
        size: 0.4,
        angle: 0,
        distortionShape: "cascade",
        highlights: 0,
        shape: "lines",
        distortion: 0.75,
        shift: 0,
        blur: 0.25,
        edges: 0.5,
        stretch: 0,
        margin: 0.1,
        marginLeft: 0.1,
        marginRight: 0.1,
        marginTop: 0.1,
        marginBottom: 0.1,
        grainMixer: 0,
        grainOverlay: 0
    }
};
const flutedGlassPresets = [
    defaultPreset,
    abstractPreset,
    wavesPreset,
    foldsPreset
];
const FlutedGlass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function FlutedGlassImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorBack = defaultPreset.params.colorBack, colorShadow = defaultPreset.params.colorShadow, colorHighlight = defaultPreset.params.colorHighlight, image = "", shadows = defaultPreset.params.shadows, angle = defaultPreset.params.angle, distortion = defaultPreset.params.distortion, distortionShape = defaultPreset.params.distortionShape, highlights = defaultPreset.params.highlights, shape = defaultPreset.params.shape, shift = defaultPreset.params.shift, blur = defaultPreset.params.blur, edges = defaultPreset.params.edges, margin, marginLeft = margin ?? defaultPreset.params.marginLeft, marginRight = margin ?? defaultPreset.params.marginRight, marginTop = margin ?? defaultPreset.params.marginTop, marginBottom = margin ?? defaultPreset.params.marginBottom, grainMixer = defaultPreset.params.grainMixer, grainOverlay = defaultPreset.params.grainOverlay, stretch = defaultPreset.params.stretch, // integer `count` was deprecated in favor of the normalized `size` param
count, size = count === void 0 ? defaultPreset.params.size : Math.pow(1 / (count * 1.6), 1 / 6) / 0.7 - 0.5, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_image: image,
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colorShadow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorShadow),
        u_colorHighlight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorHighlight),
        u_shadows: shadows,
        u_size: size,
        u_angle: angle,
        u_distortion: distortion,
        u_shift: shift,
        u_blur: blur,
        u_edges: edges,
        u_stretch: stretch,
        u_distortionShape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$fluted$2d$glass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassDistortionShapes"][distortionShape],
        u_highlights: highlights,
        u_shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$fluted$2d$glass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassGridShapes"][shape],
        u_marginLeft: marginLeft,
        u_marginRight: marginRight,
        u_marginTop: marginTop,
        u_marginBottom: marginBottom,
        u_grainMixer: grainMixer,
        u_grainOverlay: grainOverlay,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$fluted$2d$glass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flutedGlassFragmentShader"],
        mipmaps: [
            "u_image"
        ],
        uniforms
    });
});
;
 //# sourceMappingURL=fluted-glass.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/water.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "Water": ()=>Water,
    "abstractPreset": ()=>abstractPreset,
    "defaultPreset": ()=>defaultPreset,
    "slowMoPreset": ()=>slowMoPreset,
    "streamingPreset": ()=>streamingPreset,
    "waterPresets": ()=>waterPresets
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$water$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/water.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        scale: 0.8,
        speed: 1,
        frame: 0,
        colorBack: "#909090",
        colorHighlight: "#ffffff",
        highlights: 0.07,
        layering: 0.5,
        edges: 0.8,
        waves: 0.3,
        caustic: 0.1,
        size: 1
    }
};
const abstractPreset = {
    name: "Abstract",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        scale: 3,
        speed: 1,
        frame: 0,
        colorBack: "#909090",
        colorHighlight: "#ffffff",
        highlights: 0,
        layering: 0,
        edges: 1,
        waves: 1,
        caustic: 0.4,
        size: 0.15
    }
};
const streamingPreset = {
    name: "Streaming",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "contain",
        scale: 0.4,
        speed: 2,
        frame: 0,
        colorBack: "#909090",
        colorHighlight: "#ffffff",
        highlights: 0,
        layering: 0,
        edges: 0,
        waves: 0.5,
        caustic: 0,
        size: 0.5
    }
};
const slowMoPreset = {
    name: "Slow-mo",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        scale: 1,
        speed: 0.1,
        frame: 0,
        colorBack: "#909090",
        colorHighlight: "#ffffff",
        highlights: 0.4,
        layering: 0,
        edges: 0,
        waves: 0,
        caustic: 0.2,
        size: 0.7
    }
};
const waterPresets = [
    defaultPreset,
    slowMoPreset,
    abstractPreset,
    streamingPreset
];
const Water = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function WaterImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorBack = defaultPreset.params.colorBack, colorHighlight = defaultPreset.params.colorHighlight, image = "", highlights = defaultPreset.params.highlights, layering = defaultPreset.params.layering, waves = defaultPreset.params.waves, edges = defaultPreset.params.edges, caustic = defaultPreset.params.caustic, // `effectScale` was deprecated in favor of `size`
// (it was a reverse value by mistake, so we took the opportunity to rename the param too)
effectScale, size = effectScale === void 0 ? defaultPreset.params.size : 10 / 9 / effectScale - 1 / 9, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_image: image,
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colorHighlight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorHighlight),
        u_highlights: highlights,
        u_layering: layering,
        u_waves: waves,
        u_edges: edges,
        u_caustic: caustic,
        u_size: size,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_rotation: rotation,
        u_scale: scale,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$water$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waterFragmentShader"],
        mipmaps: [
            "u_image"
        ],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=water.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/image-dithering.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "ImageDithering": ()=>ImageDithering,
    "defaultPreset": ()=>defaultPreset,
    "imageDitheringPresets": ()=>imageDitheringPresets,
    "naturalPreset": ()=>naturalPreset,
    "noisePreset": ()=>noisePreset,
    "retroPreset": ()=>retroPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$image$2d$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/image-dithering.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/dithering.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        // scale: 0.95,
        speed: 0,
        frame: 0,
        colorFront: "#94ffaf",
        colorBack: "#000c38",
        colorHighlight: "#eaff94",
        type: "8x8",
        size: 2,
        colorSteps: 2,
        originalColors: false
    }
};
const retroPreset = {
    name: "Retro",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        speed: 0,
        frame: 0,
        colorFront: "#eeeeee",
        colorBack: "#5452ff",
        colorHighlight: "#eeeeee",
        type: "2x2",
        size: 3,
        colorSteps: 1,
        originalColors: true
    }
};
const noisePreset = {
    name: "Noise",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        speed: 0,
        frame: 0,
        colorFront: "#a2997c",
        colorBack: "#000000",
        colorHighlight: "#ededed",
        type: "random",
        size: 1,
        colorSteps: 1,
        originalColors: false
    }
};
const naturalPreset = {
    name: "Natural",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        speed: 0,
        frame: 0,
        colorFront: "#ffffff",
        colorBack: "#000000",
        colorHighlight: "#ffffff",
        type: "8x8",
        size: 2,
        colorSteps: 5,
        originalColors: true
    }
};
const imageDitheringPresets = [
    defaultPreset,
    noisePreset,
    retroPreset,
    naturalPreset
];
const ImageDithering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function ImageDitheringImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorFront = defaultPreset.params.colorFront, colorBack = defaultPreset.params.colorBack, colorHighlight = defaultPreset.params.colorHighlight, image = "", type = defaultPreset.params.type, colorSteps = defaultPreset.params.colorSteps, originalColors = defaultPreset.params.originalColors, pxSize, size = pxSize === void 0 ? defaultPreset.params.size : pxSize, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_image: image,
        u_colorFront: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorFront),
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colorHighlight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorHighlight),
        u_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DitheringTypes"][type],
        u_pxSize: size,
        u_colorSteps: colorSteps,
        u_originalColors: originalColors,
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_rotation: rotation,
        u_scale: scale,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$image$2d$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageDitheringFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=image-dithering.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/transparent-pixel.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "transparentPixel": ()=>transparentPixel
});
const transparentPixel = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
;
 //# sourceMappingURL=transparent-pixel.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/heatmap.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "Heatmap": ()=>Heatmap,
    "defaultPreset": ()=>defaultPreset,
    "heatmapPresets": ()=>heatmapPresets,
    "sepiaPreset": ()=>sepiaPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$heatmap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/heatmap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$transparent$2d$pixel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/transparent-pixel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        scale: 0.75,
        speed: 1,
        frame: 0,
        contour: 0.5,
        angle: 0,
        noise: 0,
        innerGlow: 0.5,
        outerGlow: 0.5,
        colorBack: "#000000",
        colors: [
            "#11206a",
            "#1f3ba2",
            "#2f63e7",
            "#6bd7ff",
            "#ffe679",
            "#ff991e",
            "#ff4c00"
        ]
    }
};
const sepiaPreset = {
    name: "Sepia",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        scale: 0.75,
        speed: 0.5,
        frame: 0,
        contour: 0.5,
        angle: 0,
        noise: 0.75,
        innerGlow: 0.5,
        outerGlow: 0.5,
        colorBack: "#000000",
        colors: [
            "#997F45",
            "#ffffff"
        ]
    }
};
const heatmapPresets = [
    defaultPreset,
    sepiaPreset
];
const Heatmap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function HeatmapImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, image = "", contour = defaultPreset.params.contour, angle = defaultPreset.params.angle, noise = defaultPreset.params.noise, innerGlow = defaultPreset.params.innerGlow, outerGlow = defaultPreset.params.outerGlow, colorBack = defaultPreset.params.colorBack, colors = defaultPreset.params.colors, suspendWhenProcessingImage = false, // Sizing props
fit = defaultPreset.params.fit, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, rotation = defaultPreset.params.rotation, scale = defaultPreset.params.scale, worldHeight = defaultPreset.params.worldHeight, worldWidth = defaultPreset.params.worldWidth, ...props }) {
    const imageUrl = typeof image === "string" ? image : image.src;
    const [processedStateImage, setProcessedStateImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$transparent$2d$pixel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transparentPixel"]);
    let processedImage;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        processedImage = processedStateImage;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (suspendWhenProcessingImage) {
            return;
        }
        if (!imageUrl) {
            setProcessedStateImage(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$transparent$2d$pixel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transparentPixel"]);
            return;
        }
        let url;
        let current = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$heatmap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toProcessedHeatmap"])(imageUrl).then((result)=>{
            if (current) {
                url = URL.createObjectURL(result.blob);
                setProcessedStateImage(url);
            }
        });
        return ()=>{
            current = false;
        };
    }, [
        imageUrl,
        suspendWhenProcessingImage
    ]);
    const uniforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            // Own uniforms
            u_image: processedImage,
            u_contour: contour,
            u_angle: angle,
            u_noise: noise,
            u_innerGlow: innerGlow,
            u_outerGlow: outerGlow,
            u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
            u_colors: colors.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"]),
            u_colorsCount: colors.length,
            // Sizing uniforms
            u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
            u_offsetX: offsetX,
            u_offsetY: offsetY,
            u_originX: originX,
            u_originY: originY,
            u_rotation: rotation,
            u_scale: scale,
            u_worldHeight: worldHeight,
            u_worldWidth: worldWidth
        }), [
        speed,
        frame,
        contour,
        angle,
        noise,
        innerGlow,
        outerGlow,
        colors,
        colorBack,
        processedImage,
        fit,
        offsetX,
        offsetY,
        originX,
        originY,
        rotation,
        scale,
        worldHeight,
        worldWidth
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$heatmap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heatmapFragmentShader"],
        mipmaps: [
            "u_image"
        ],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=heatmap.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/liquid-metal.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "LiquidMetal": ()=>LiquidMetal,
    "defaultPreset": ()=>defaultPreset,
    "fullScreenPreset": ()=>fullScreenPreset,
    "liquidMetalPresets": ()=>liquidMetalPresets,
    "noirPreset": ()=>noirPreset,
    "stripesPreset": ()=>stripesPreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$liquid$2d$metal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/liquid-metal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$transparent$2d$pixel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/transparent-pixel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        scale: 0.6,
        speed: 1,
        frame: 0,
        colorBack: "#AAAAAC",
        colorTint: "#ffffff",
        distortion: 0.07,
        repetition: 2,
        shiftRed: 0.3,
        shiftBlue: 0.3,
        contour: 0.4,
        softness: 0.1,
        angle: 70,
        shape: "diamond"
    }
};
const noirPreset = {
    name: "Noir",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        scale: 0.6,
        speed: 1,
        frame: 0,
        colorBack: "#000000",
        colorTint: "#606060",
        softness: 0.45,
        repetition: 1.5,
        shiftRed: 0,
        shiftBlue: 0,
        distortion: 0,
        contour: 0,
        angle: 90,
        shape: "diamond"
    }
};
const fullScreenPreset = {
    name: "Backdrop",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        scale: 1.5,
        colorBack: "#AAAAAC",
        colorTint: "#ffffff",
        softness: 0.05,
        repetition: 1.5,
        shiftRed: 0.3,
        shiftBlue: 0.3,
        distortion: 0.1,
        contour: 0.4,
        shape: "none",
        angle: 90,
        worldWidth: 0,
        worldHeight: 0
    }
};
const stripesPreset = {
    name: "Stripes",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        speed: 1,
        frame: 0,
        scale: 0.6,
        colorBack: "#000000",
        colorTint: "#2c5d72",
        softness: 0.8,
        repetition: 6,
        shiftRed: 1,
        shiftBlue: -1,
        distortion: 0.4,
        contour: 0.4,
        shape: "circle",
        angle: 0
    }
};
const liquidMetalPresets = [
    defaultPreset,
    noirPreset,
    fullScreenPreset,
    stripesPreset
];
const LiquidMetal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function LiquidMetalImpl({ // Own props
colorBack = defaultPreset.params.colorBack, colorTint = defaultPreset.params.colorTint, speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, image = "", contour = defaultPreset.params.contour, distortion = defaultPreset.params.distortion, softness = defaultPreset.params.softness, repetition = defaultPreset.params.repetition, shiftRed = defaultPreset.params.shiftRed, shiftBlue = defaultPreset.params.shiftBlue, angle = defaultPreset.params.angle, shape = defaultPreset.params.shape, suspendWhenProcessingImage = false, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const imageUrl = typeof image === "string" ? image : image.src;
    const [processedStateImage, setProcessedStateImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$transparent$2d$pixel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transparentPixel"]);
    let processedImage;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        processedImage = processedStateImage;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (suspendWhenProcessingImage) {
            return;
        }
        if (!imageUrl) {
            setProcessedStateImage(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$transparent$2d$pixel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transparentPixel"]);
            return;
        }
        let url;
        let current = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$liquid$2d$metal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toProcessedLiquidMetal"])(imageUrl).then((result)=>{
            if (current) {
                url = URL.createObjectURL(result.pngBlob);
                setProcessedStateImage(url);
            }
        });
        return ()=>{
            current = false;
        };
    }, [
        imageUrl,
        suspendWhenProcessingImage
    ]);
    const uniforms = {
        // Own uniforms
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_colorTint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorTint),
        u_image: processedImage,
        u_contour: contour,
        u_distortion: distortion,
        u_softness: softness,
        u_repetition: repetition,
        u_shiftRed: shiftRed,
        u_shiftBlue: shiftBlue,
        u_angle: angle,
        u_isImage: Boolean(image),
        u_shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$liquid$2d$metal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiquidMetalShapes"][shape],
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_scale: scale,
        u_rotation: rotation,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$liquid$2d$metal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["liquidMetalFragmentShader"],
        mipmaps: [
            "u_image"
        ],
        uniforms
    });
});
;
 //# sourceMappingURL=liquid-metal.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/halftone-dots.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                    Paper Shaders                    *
 *       https://github.com/paper-design/shaders       *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */ __turbopack_context__.s({
    "HalftoneDots": ()=>HalftoneDots,
    "defaultPreset": ()=>defaultPreset,
    "halftoneDotsPresets": ()=>halftoneDotsPresets,
    "ledPreset": ()=>ledPreset,
    "netPreset": ()=>netPreset,
    "roundAndSquarePreset": ()=>roundAndSquarePreset
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/color-props-are-equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$halftone$2d$dots$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/halftone-dots.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-sizing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.7_@babel+core@7.28.5_@opentelemetry+api@1.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
;
const defaultPreset = {
    name: "Default",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        speed: 0,
        frame: 0,
        colorBack: "#f2f1e8",
        colorFront: "#2b2b2b",
        size: 0.3,
        radius: 1.25,
        contrast: 0.4,
        originalColors: false,
        inverted: false,
        grainMixer: 0.2,
        grainOverlay: 0.2,
        grainSize: 0.5,
        grid: "hex",
        type: "gooey"
    }
};
const ledPreset = {
    name: "LED screen",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        speed: 0,
        frame: 0,
        colorBack: "#000000",
        colorFront: "#29ff7b",
        size: 0.5,
        radius: 1.5,
        contrast: 0.3,
        originalColors: false,
        inverted: false,
        grainMixer: 0,
        grainOverlay: 0,
        grainSize: 0.5,
        grid: "square",
        type: "soft"
    }
};
const netPreset = {
    name: "Mosaic",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        speed: 0,
        frame: 0,
        colorBack: "#000000",
        colorFront: "#b2aeae",
        size: 0.6,
        radius: 2,
        contrast: 0.01,
        originalColors: true,
        inverted: false,
        grainMixer: 0,
        grainOverlay: 0,
        grainSize: 0.5,
        grid: "hex",
        type: "classic"
    }
};
const roundAndSquarePreset = {
    name: "Round and square",
    params: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultObjectSizing"],
        fit: "cover",
        speed: 0,
        frame: 0,
        colorBack: "#141414",
        colorFront: "#ff8000",
        size: 0.8,
        radius: 1,
        contrast: 1,
        originalColors: false,
        inverted: true,
        grainMixer: 0.05,
        grainOverlay: 0.3,
        grainSize: 0.5,
        grid: "square",
        type: "holes"
    }
};
const halftoneDotsPresets = [
    defaultPreset,
    ledPreset,
    netPreset,
    roundAndSquarePreset
];
const HalftoneDots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function HalftoneDotsImpl({ // Own props
speed = defaultPreset.params.speed, frame = defaultPreset.params.frame, colorFront = defaultPreset.params.colorFront, colorBack = defaultPreset.params.colorBack, image = "", size = defaultPreset.params.size, radius = defaultPreset.params.radius, contrast = defaultPreset.params.contrast, originalColors = defaultPreset.params.originalColors, inverted = defaultPreset.params.inverted, grainMixer = defaultPreset.params.grainMixer, grainOverlay = defaultPreset.params.grainOverlay, grainSize = defaultPreset.params.grainSize, grid = defaultPreset.params.grid, type = defaultPreset.params.type, // Sizing props
fit = defaultPreset.params.fit, scale = defaultPreset.params.scale, rotation = defaultPreset.params.rotation, originX = defaultPreset.params.originX, originY = defaultPreset.params.originY, offsetX = defaultPreset.params.offsetX, offsetY = defaultPreset.params.offsetY, worldWidth = defaultPreset.params.worldWidth, worldHeight = defaultPreset.params.worldHeight, ...props }) {
    const uniforms = {
        // Own uniforms
        u_image: image,
        u_colorFront: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorFront),
        u_colorBack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"])(colorBack),
        u_size: size,
        u_radius: radius,
        u_contrast: contrast,
        u_originalColors: originalColors,
        u_inverted: inverted,
        u_grainMixer: grainMixer,
        u_grainOverlay: grainOverlay,
        u_grainSize: grainSize,
        u_grid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$halftone$2d$dots$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HalftoneDotsGrids"][grid],
        u_type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$halftone$2d$dots$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HalftoneDotsTypes"][type],
        // Sizing uniforms
        u_fit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$sizing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderFitOptions"][fit],
        u_rotation: rotation,
        u_scale: scale,
        u_offsetX: offsetX,
        u_offsetY: offsetY,
        u_originX: originX,
        u_originY: originY,
        u_worldWidth: worldWidth,
        u_worldHeight: worldHeight
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$7_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"], {
        ...props,
        speed,
        frame,
        fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$halftone$2d$dots$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["halftoneDotsFragmentShader"],
        uniforms
    });
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$color$2d$props$2d$are$2d$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPropsAreEqual"]);
;
 //# sourceMappingURL=halftone-dots.js.map
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/index.js [app-ssr] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ColorPanels": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$color$2d$panels$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorPanels"],
    "Dithering": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dithering"],
    "DotGrid": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$dot$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotGrid"],
    "DotOrbit": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$dot$2d$orbit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotOrbit"],
    "FlutedGlass": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$fluted$2d$glass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlutedGlass"],
    "GodRays": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$god$2d$rays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GodRays"],
    "GrainGradient": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$grain$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrainGradient"],
    "HalftoneDots": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$halftone$2d$dots$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HalftoneDots"],
    "Heatmap": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$heatmap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Heatmap"],
    "ImageDithering": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$image$2d$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageDithering"],
    "LiquidMetal": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$liquid$2d$metal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiquidMetal"],
    "MeshGradient": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshGradient"],
    "Metaballs": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$metaballs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Metaballs"],
    "NeuroNoise": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$neuro$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NeuroNoise"],
    "PaperTexture": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$paper$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PaperTexture"],
    "PerlinNoise": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$perlin$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerlinNoise"],
    "PulsingBorder": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$pulsing$2d$border$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PulsingBorder"],
    "ShaderMount": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMount"],
    "SimplexNoise": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$simplex$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimplexNoise"],
    "SmokeRing": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$smoke$2d$ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmokeRing"],
    "Spiral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$spiral$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spiral"],
    "StaticMeshGradient": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$static$2d$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StaticMeshGradient"],
    "StaticRadialGradient": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$static$2d$radial$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StaticRadialGradient"],
    "Swirl": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$swirl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swirl"],
    "Voronoi": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$voronoi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Voronoi"],
    "Warp": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$warp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Warp"],
    "Water": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$water$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Water"],
    "Waves": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Waves"],
    "colorPanelsMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$color$2d$panels$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPanelsMeta"],
    "colorPanelsPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$color$2d$panels$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colorPanelsPresets"],
    "ditheringPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ditheringPresets"],
    "dotGridPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$dot$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dotGridPresets"],
    "dotOrbitMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dot$2d$orbit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dotOrbitMeta"],
    "dotOrbitPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$dot$2d$orbit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dotOrbitPresets"],
    "flutedGlassPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$fluted$2d$glass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flutedGlassPresets"],
    "getShaderColorFromString": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShaderColorFromString"],
    "godRaysMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$god$2d$rays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["godRaysMeta"],
    "godRaysPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$god$2d$rays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["godRaysPresets"],
    "grainGradientMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$grain$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["grainGradientMeta"],
    "grainGradientPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$grain$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["grainGradientPresets"],
    "halftoneDotsPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$halftone$2d$dots$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["halftoneDotsPresets"],
    "heatmapMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$heatmap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heatmapMeta"],
    "heatmapPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$heatmap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heatmapPresets"],
    "imageDitheringPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$image$2d$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageDitheringPresets"],
    "isPaperShaderElement": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPaperShaderElement"],
    "liquidMetalPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$liquid$2d$metal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["liquidMetalPresets"],
    "meshGradientMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshGradientMeta"],
    "meshGradientPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshGradientPresets"],
    "metaballsMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$metaballs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["metaballsMeta"],
    "metaballsPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$metaballs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["metaballsPresets"],
    "neuroNoisePresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$neuro$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["neuroNoisePresets"],
    "paperTexturePresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$paper$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paperTexturePresets"],
    "perlinNoisePresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$perlin$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perlinNoisePresets"],
    "pulsingBorderMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$pulsing$2d$border$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pulsingBorderMeta"],
    "pulsingBorderPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$pulsing$2d$border$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pulsingBorderPresets"],
    "simplexNoiseMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$simplex$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simplexNoiseMeta"],
    "simplexNoisePresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$simplex$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simplexNoisePresets"],
    "smokeRingMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$smoke$2d$ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smokeRingMeta"],
    "smokeRingPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$smoke$2d$ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smokeRingPresets"],
    "spiralPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$spiral$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spiralPresets"],
    "staticMeshGradientMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$static$2d$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticMeshGradientMeta"],
    "staticMeshGradientPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$static$2d$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticMeshGradientPresets"],
    "staticRadialGradientMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$static$2d$radial$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticRadialGradientMeta"],
    "staticRadialGradientPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$static$2d$radial$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticRadialGradientPresets"],
    "swirlMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$swirl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["swirlMeta"],
    "swirlPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$swirl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["swirlPresets"],
    "voronoiMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$voronoi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voronoiMeta"],
    "voronoiPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$voronoi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voronoiPresets"],
    "warpMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$warp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warpMeta"],
    "warpPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$warp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warpPresets"],
    "waterPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$water$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waterPresets"],
    "wavesPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wavesPresets"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/mesh-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$smoke$2d$ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/smoke-ring.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$neuro$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/neuro-noise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$dot$2d$orbit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/dot-orbit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$dot$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/dot-grid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$simplex$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/simplex-noise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$metaballs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/metaballs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/waves.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$perlin$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/perlin-noise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$voronoi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/voronoi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$warp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/warp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$god$2d$rays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/god-rays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$spiral$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/spiral.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$swirl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/swirl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/dithering.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$grain$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/grain-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$pulsing$2d$border$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/pulsing-border.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$color$2d$panels$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/color-panels.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$static$2d$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/static-mesh-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$static$2d$radial$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/static-radial-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$paper$2d$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/paper-texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$fluted$2d$glass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/fluted-glass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$water$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/water.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$image$2d$dithering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/image-dithering.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$heatmap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/heatmap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$liquid$2d$metal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/liquid-metal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$halftone$2d$dots$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/shaders/halftone-dots.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shader$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shader-mount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$get$2d$shader$2d$color$2d$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/get-shader-color-from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$color$2d$panels$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/color-panels.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$dot$2d$orbit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/dot-orbit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$god$2d$rays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/god-rays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$grain$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/grain-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/mesh-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$metaballs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/metaballs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$pulsing$2d$border$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/pulsing-border.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$simplex$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/simplex-noise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$smoke$2d$ring$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/smoke-ring.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$swirl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/swirl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$voronoi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/voronoi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$warp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/warp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$heatmap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/heatmap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$static$2d$mesh$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/static-mesh-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$40$0$2e$0$2e$65$2f$node_modules$2f40$paper$2d$design$2f$shaders$2f$dist$2f$shaders$2f$static$2d$radial$2d$gradient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders@0.0.65/node_modules/@paper-design/shaders/dist/shaders/static-radial-gradient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/index.js [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ColorPanels": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ColorPanels"],
    "Dithering": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Dithering"],
    "DotGrid": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["DotGrid"],
    "DotOrbit": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["DotOrbit"],
    "FlutedGlass": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["FlutedGlass"],
    "GodRays": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GodRays"],
    "GrainGradient": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GrainGradient"],
    "HalftoneDots": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["HalftoneDots"],
    "Heatmap": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Heatmap"],
    "ImageDithering": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ImageDithering"],
    "LiquidMetal": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LiquidMetal"],
    "MeshGradient": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MeshGradient"],
    "Metaballs": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Metaballs"],
    "NeuroNoise": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["NeuroNoise"],
    "PaperTexture": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PaperTexture"],
    "PerlinNoise": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PerlinNoise"],
    "PulsingBorder": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PulsingBorder"],
    "ShaderMount": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ShaderMount"],
    "SimplexNoise": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SimplexNoise"],
    "SmokeRing": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SmokeRing"],
    "Spiral": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Spiral"],
    "StaticMeshGradient": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StaticMeshGradient"],
    "StaticRadialGradient": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["StaticRadialGradient"],
    "Swirl": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Swirl"],
    "Voronoi": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Voronoi"],
    "Warp": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Warp"],
    "Water": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Water"],
    "Waves": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Waves"],
    "colorPanelsMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["colorPanelsMeta"],
    "colorPanelsPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["colorPanelsPresets"],
    "ditheringPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ditheringPresets"],
    "dotGridPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dotGridPresets"],
    "dotOrbitMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dotOrbitMeta"],
    "dotOrbitPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dotOrbitPresets"],
    "flutedGlassPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["flutedGlassPresets"],
    "getShaderColorFromString": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getShaderColorFromString"],
    "godRaysMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["godRaysMeta"],
    "godRaysPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["godRaysPresets"],
    "grainGradientMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["grainGradientMeta"],
    "grainGradientPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["grainGradientPresets"],
    "halftoneDotsPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["halftoneDotsPresets"],
    "heatmapMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["heatmapMeta"],
    "heatmapPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["heatmapPresets"],
    "imageDitheringPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["imageDitheringPresets"],
    "isPaperShaderElement": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["isPaperShaderElement"],
    "liquidMetalPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["liquidMetalPresets"],
    "meshGradientMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["meshGradientMeta"],
    "meshGradientPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["meshGradientPresets"],
    "metaballsMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["metaballsMeta"],
    "metaballsPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["metaballsPresets"],
    "neuroNoisePresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["neuroNoisePresets"],
    "paperTexturePresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["paperTexturePresets"],
    "perlinNoisePresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["perlinNoisePresets"],
    "pulsingBorderMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["pulsingBorderMeta"],
    "pulsingBorderPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["pulsingBorderPresets"],
    "simplexNoiseMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["simplexNoiseMeta"],
    "simplexNoisePresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["simplexNoisePresets"],
    "smokeRingMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["smokeRingMeta"],
    "smokeRingPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["smokeRingPresets"],
    "spiralPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["spiralPresets"],
    "staticMeshGradientMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["staticMeshGradientMeta"],
    "staticMeshGradientPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["staticMeshGradientPresets"],
    "staticRadialGradientMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["staticRadialGradientMeta"],
    "staticRadialGradientPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["staticRadialGradientPresets"],
    "swirlMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["swirlMeta"],
    "swirlPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["swirlPresets"],
    "voronoiMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["voronoiMeta"],
    "voronoiPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["voronoiPresets"],
    "warpMeta": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["warpMeta"],
    "warpPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["warpPresets"],
    "waterPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["waterPresets"],
    "wavesPresets": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__["wavesPresets"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$paper$2d$design$2b$shaders$2d$react$40$0$2e$0$2e$65_$40$types$2b$react$40$19$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@paper-design+shaders-react@0.0.65_@types+react@19.1.2_react@19.1.0/node_modules/@paper-design/shaders-react/dist/index.js [app-ssr] (ecmascript) <exports>");
}),

};

//# sourceMappingURL=54681_%40paper-design_shaders-react_dist_a157a16b._.js.map