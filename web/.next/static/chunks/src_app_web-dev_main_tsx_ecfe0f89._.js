(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/web-dev/main.tsx [app-client] (ecmascript, next/dynamic entry, async loader)": ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/src_91bca84f._.js",
  "static/chunks/d85c9_dist_react-resizable-panels_browser_development_esm_76f8e748.js",
  "static/chunks/40c62_framer-motion_dist_es_3285e220._.js",
  "static/chunks/4aed3_@radix-ui_react-icons_dist_react-icons_esm_c5594b42.js",
  "static/chunks/f6ba5_prosemirror-view_dist_index_284a5ba1.js",
  "static/chunks/09028_@tiptap_core_dist_index_4ccf1bd2.js",
  "static/chunks/23d63_@popperjs_core_lib_8be2f6b1._.js",
  "static/chunks/a2e29_react-moveable_dist_moveable_esm_45cde618.js",
  "static/chunks/65c02_katex_dist_3a8deae3._.js",
  "static/chunks/48a05_react-tweet_dist_86c5a253._.js",
  "static/chunks/22eef_entities_lib_esm_9ae3b640._.js",
  "static/chunks/f0645_markdown-it_4880a955._.js",
  "static/chunks/52bc5_motion_dist_es_223495e7._.js",
  "static/chunks/a2029_micromark_dev_lib_33943764._.js",
  "static/chunks/42800_micromark-core-commonmark_dev_lib_f3ec2821._.js",
  "static/chunks/node_modules__pnpm_d5b88d32._.js",
  {
    "path": "static/chunks/_56565448._.css",
    "included": [
      "[project]/src/components/deer-flow/rainbow-text.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-container.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/theme.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-header.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/icons/icons.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/verified-badge.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-in-reply-to.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-link.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-body.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-media.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-media-video.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-info-created-at.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-info.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-actions.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-replies.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet-container.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet-header.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet-body.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-not-found.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/skeleton.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/react-tweet@3.2.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-tweet/dist/twitter-theme/tweet-skeleton.module.css [app-client] (css)",
      "[project]/src/styles/prosemirror.css [app-client] (css)",
      "[project]/src/components/deer-flow/loading-animation.module.css [app-client] (css)",
      "[project]/node_modules/.pnpm/katex@0.16.21/node_modules/katex/dist/katex.min.css [app-client] (css)"
    ],
    "moduleChunks": [
      "static/chunks/src_components_deer-flow_rainbow-text_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-container_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_theme_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-header_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_icons_icons_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_verified-badge_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-in-reply-to_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-link_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-body_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-media_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-media-video_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-info-created-at_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-info_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-actions_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-replies_module_css_e59ae46c._.single.css",
      "static/chunks/970c2_dist_twitter-theme_quoted-tweet_quoted-tweet-container_module_css_e59ae46c._.single.css",
      "static/chunks/970c2_dist_twitter-theme_quoted-tweet_quoted-tweet-header_module_css_e59ae46c._.single.css",
      "static/chunks/970c2_dist_twitter-theme_quoted-tweet_quoted-tweet-body_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-not-found_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_skeleton_module_css_e59ae46c._.single.css",
      "static/chunks/48a05_react-tweet_dist_twitter-theme_tweet-skeleton_module_css_e59ae46c._.single.css",
      "static/chunks/src_styles_prosemirror_css_e59ae46c._.single.css",
      "static/chunks/src_components_deer-flow_loading-animation_module_css_e59ae46c._.single.css",
      "static/chunks/65c02_katex_dist_katex_min_css_e59ae46c._.single.css"
    ]
  },
  "static/chunks/src_app_web-dev_main_tsx_20f9602e._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/app/web-dev/main.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
}]);