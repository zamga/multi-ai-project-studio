from dotenv import load_dotenv
import os
load_dotenv()


def get_env_key(primary_name, *fallback_names):
    """Get environment variable with fallback names for flexibility."""
    value = os.getenv(primary_name)
    if value:
        return value
    for fallback in fallback_names:
        value = os.getenv(fallback)
        if value:
            return value
    return None


def mask_key(key):
    """Mask API key for security."""
    if not key:
        return "NOT FOUND"
    if len(key) < 10:
        return "***"
    return f"{key[:8]}...{key[-4:]}"


print("Testing API key mappings:")
print("-" * 50)

openai_key = get_env_key("OPENAI_API_KEY", "OPEN_AI")
print(f"OpenAI key: {mask_key(openai_key)}")

anthropic_key = get_env_key("ANTHROPIC_API_KEY", "ANTHROPIC_API_KEY_")
print(f"Anthropic key: {mask_key(anthropic_key)}")

grok_key = get_env_key("GROK_API_KEY", "xai_api_key")
print(f"Grok key: {mask_key(grok_key)}")

gemini_key = get_env_key("GEMINI_API_KEY", "GEMINI_FLASH_2_0_")
print(f"Gemini key: {mask_key(gemini_key)}")

print("-" * 50)
print("\nAll API keys configured successfully!" if all([openai_key, anthropic_key, grok_key, gemini_key]) else "\nWARNING: Some API keys are missing!")
