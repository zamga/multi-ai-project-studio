import streamlit as st
from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic
import requests
from dotenv import load_dotenv
import os
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import atexit
import google.generativeai as genai

# Load environment variables
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


# --- Watchdog handler for file changes ---
class FileHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if not event.is_directory:
            st.session_state.file_changed = event.src_path


# --- Initialize Watchdog (only once per session) ---
if "observer" not in st.session_state:
    observer = Observer()
    observer.schedule(FileHandler(), path=".", recursive=False)
    observer.start()
    st.session_state.observer = observer
    st.session_state.file_changed = None


# --- Streamlit UI ---
st.title("Multi-AI Project Studio")

prompt = st.text_input("Enter project goal (e.g., Build IPO predictor):")
uploaded_file = st.file_uploader("Upload a file (e.g., S-1 PDF):", type=["pdf", "txt"])


if prompt or uploaded_file:
    with st.spinner("Processing..."):
        # --- OpenAI for ideation ---
        openai_key = get_env_key("OPENAI_API_KEY", "OPEN_AI")
        if not openai_key:
            st.error("OpenAI API key missing in environment")
        else:
            openai_model = os.getenv("IDEATION_MODEL", "gpt-5")
            st.write(f"**[OpenAI {openai_model}]** Generating ideas...")
            try:
                gpt = ChatOpenAI(api_key=openai_key, model=openai_model)
                gpt_response = gpt.invoke(prompt or "Analyze uploaded file")
                response_text = getattr(gpt_response, "content", None) or str(gpt_response)
                st.write(response_text)
            except Exception as e:
                st.error(f"OpenAI error: {str(e)}")

        # --- Claude Sonnet (Anthropic) for coding ---
        anthropic_key = get_env_key("ANTHROPIC_API_KEY", "ANTHROPIC_API_KEY_")
        if not anthropic_key:
            st.error("Anthropic API key missing in environment")
        else:
            claude_model = os.getenv("CODE_MODEL", "claude-sonnet-4-5-20250929")
            st.write(f"**[Claude Sonnet 4]** Generating code...")
            try:
                claude = ChatAnthropic(
                    api_key=anthropic_key,
                    model=claude_model
                )
                claude_response = claude.invoke(
                    f"Write Python code for: {prompt or 'Analyze uploaded file'}"
                )
                code_str = getattr(claude_response, "content", None) or getattr(claude_response, "text", None)
                if code_str is None:
                    st.error("No code content returned from Claude.")
                else:
                    st.code(code_str, language="python")
            except Exception as e:
                st.error(f"Anthropic error: {str(e)}")

        # --- Grok (xAI) for research ---
        grok_key = get_env_key("GROK_API_KEY", "xai_api_key")
        if not grok_key:
            st.error("Grok API key missing in environment")
        else:
            st.write("**[Grok]** Researching...")
            try:
                grok_model = os.getenv("RESEARCH_MODEL", "grok-4")
                grok_response = requests.post(
                    "https://api.x.ai/v1/chat/completions",
                    headers={
                        "Authorization": f"Bearer {grok_key}",
                        "Content-Type": "application/json"
                    },
                    json={
                        "messages": [
                            {"role": "system", "content": "You are a helpful research assistant."},
                            {"role": "user", "content": prompt or "Research uploaded file"}
                        ],
                        "model": grok_model,
                        "stream": False,
                        "temperature": 0
                    },
                    timeout=30
                )
                if grok_response.status_code == 200:
                    result = grok_response.json()
                    content = result.get("choices", [{}])[0].get("message", {}).get("content", "No response")
                    st.write(content)
                else:
                    st.error(f"Grok API error: {grok_response.status_code} - {grok_response.text}")
            except Exception as e:
                st.error(f"Grok error: {str(e)}")

        gemini_key = get_env_key("GEMINI_API_KEY", "GEMINI_FLASH_2_0_")
        if not gemini_key:
            st.error("Gemini API key missing in environment")
        else:
            st.write("**[Gemini 2.0 Flash]** Analyzing documents...")
            try:
                gemini_model_name = os.getenv("DOCS_MODEL", "gemini-2.0-flash-exp")
                genai.configure(api_key=gemini_key)
                gemini_model = genai.GenerativeModel(gemini_model_name)
                
                gemini_prompt = prompt or "Analyze uploaded file"
                if uploaded_file:
                    gemini_prompt = f"Analyze this document and provide insights: {gemini_prompt}"
                
                gemini_response = gemini_model.generate_content(gemini_prompt)
                st.write(gemini_response.text)
            except Exception as e:
                st.error(f"Gemini error: {str(e)}")

        # --- Handle uploaded file ---
        if uploaded_file:
            file_path = os.path.join("uploads", uploaded_file.name)
            os.makedirs("uploads", exist_ok=True)
            with open(file_path, "wb") as f:
                f.write(uploaded_file.read())
            st.success(f"File uploaded and saved as: {file_path}")


# --- Watchdog feedback ---
if st.session_state.get("file_changed"):
    st.info(f"File changed: {st.session_state.file_changed}")
    st.session_state.file_changed = None


# --- Graceful Watchdog cleanup on exit ---
def on_stop():
    if "observer" in st.session_state:
        try:
            st.session_state.observer.stop()
            st.session_state.observer.join()
        except Exception:
            pass


atexit.register(on_stop)
