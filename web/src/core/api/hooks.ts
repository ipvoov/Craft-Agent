// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { useEffect, useRef, useState } from "react";

import { env } from "~/env";

import type { CraftAgentConfig } from "../config";
import { useReplay } from "../replay";

import { fetchReplayTitle } from "./chat";
import { resolveServiceURL } from "./resolve-service-url";

export function useReplayMetadata() {
  const { isReplay } = useReplay();
  const [title, setTitle] = useState<string | null>(null);
  const isLoading = useRef(false);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    if (!isReplay) {
      return;
    }
    if (title || isLoading.current) {
      return;
    }
    isLoading.current = true;
    fetchReplayTitle()
      .then((title) => {
        setError(false);
        setTitle(title ?? null);
        if (title) {
          document.title = `${title} - Craft-Agent`;
        }
      })
      .catch(() => {
        setError(true);
        setTitle("Error: the replay is not available.");
        document.title = "Craft-Agent";
      })
      .finally(() => {
        isLoading.current = false;
      });
  }, [isLoading, isReplay, title]);
  return { title, isLoading, hasError: error };
}

const DEFAULT_CONFIG: CraftAgentConfig = {
  rag: { provider: "" },
  models: { basic: [], reasoning: [] },
};

let configCache: CraftAgentConfig | null = null;
let configPromise: Promise<CraftAgentConfig> | null = null;

export function useConfig(enabled: boolean = true): {
  config: CraftAgentConfig;
  loading: boolean;
} {
  const [loading, setLoading] = useState(enabled);
  const [config, setConfig] = useState<CraftAgentConfig>(DEFAULT_CONFIG);

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    if (env.NEXT_PUBLIC_STATIC_WEBSITE_ONLY) {
      setLoading(false);
      return;
    }

    const fetchConfigWithRetry = async (): Promise<CraftAgentConfig> => {
      const maxRetries = 2;
      let lastError: Error | null = null;

      for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
          const res = await fetch(resolveServiceURL("./config"), {
            signal: AbortSignal.timeout(5000), // 5 second timeout
          });

          if (!res.ok) {
            throw new Error(`HTTP ${res.status}: ${res.statusText}`);
          }

          const configData: CraftAgentConfig = await res.json();
          return configData; // Success, exit retry loop
        } catch (err) {
          lastError = err instanceof Error ? err : new Error(String(err));

          // Log attempt details
          if (attempt === 0) {
            const apiUrl = resolveServiceURL("./config");
            console.warn(
              `[Config] Failed to fetch from ${apiUrl}: ${lastError.message}`,
            );
          }

          // Wait before retrying (exponential backoff: 100ms, 500ms)
          if (attempt < maxRetries) {
            const delay = Math.pow(2, attempt) * 100;
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      }

      // All retries failed, use default config
      console.warn(
        `[Config] Using default config after ${maxRetries + 1} attempts. Last error: ${lastError?.message ?? "Unknown"}`,
      );
      return DEFAULT_CONFIG;
    };

    const loadConfig = async () => {
      try {
        if (!configPromise) {
          configPromise = fetchConfigWithRetry().then((cfg) => {
            configCache = cfg;
            return cfg;
          });
        }

        const cfg = await configPromise;
        setConfig(cfg);
      } catch (error) {
        console.warn(
          "[Config] Using default config because fetch failed in hook:",
          error,
        );
        setConfig(DEFAULT_CONFIG);
      } finally {
        setLoading(false);
      }
    };

    if (configCache) {
      setConfig(configCache);
      setLoading(false);
      return;
    }

    void loadConfig();
  }, [enabled]);

  return { config, loading };
}
