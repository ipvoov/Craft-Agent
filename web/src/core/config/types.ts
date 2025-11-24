export interface ModelConfig {
  basic: string[];
  reasoning: string[];
}

export interface RagConfig {
  provider: string;
}

export interface CraftAgentConfig {
  rag: RagConfig;
  models: ModelConfig;
}
