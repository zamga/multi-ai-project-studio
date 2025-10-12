from dotenv import load_dotenv
import os
load_dotenv()
print("OpenAI key:", os.getenv("OPENAI_API_KEY"))
print("Anthropic key:", os.getenv("ANTHROPIC_API_KEY"))
print("Grok key:", os.getenv("GROK_API_KEY"))
