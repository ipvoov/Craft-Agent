// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { BadgeInfo } from "lucide-react";

import type { Tab } from "./types";

// 当前项目中设置页只保留 General 选项卡，AboutTab 不再被使用。
// 这里保留一个空实现以避免导入被删除的 markdown 文件时产生编译错误。
export const AboutTab: Tab = () => {
  return null;
};
AboutTab.icon = BadgeInfo;
AboutTab.displayName = "About";
