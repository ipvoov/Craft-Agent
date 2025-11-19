from pydantic import BaseModel, Field


class RagConfig(BaseModel):
    """RAG configuration."""
    provider: str = Field(default="", description="RAG provider name")


class ModelConfig(BaseModel):
    """Model configuration."""
    basic: list[str] = Field(default_factory=list, description="Basic model names")
    reasoning: list[str] = Field(default_factory=list, description="Reasoning model names")


class ConfigResponse(BaseModel):
    """Response model for server config."""
    models: ModelConfig = Field(..., description="The configured models")
    rag: RagConfig = Field(default_factory=RagConfig, description="RAG configuration")