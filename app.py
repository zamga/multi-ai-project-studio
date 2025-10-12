import streamlit as st
from langchain_openai import OpenAI
from langchain_anthropic import ChatAnthropic
import requests
from dotenv import load_dotenv
import os
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import atexit

# Load environment variables
load_dotenv()


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
        # --- GPT-5 (OpenAI) for ideation ---
        openai_key = os.getenv("OPENAI_API_KEY")
        if not openai_key:
            st.error("OpenAI API key missing in .env")
        else:
            st.write("**[GPT-5]** Generating ideas...")
            try:
                gpt5 = OpenAI(api_key=openai_key)
                gpt5_response = gpt5.invoke(prompt or "Analyze uploaded file")
                st.write(gpt5_response)
            except Exception as e:
                st.error(f"OpenAI error: {str(e)}")

        # --- Claude 4.5 Sonnet (Anthropic) for coding ---
        anthropic_key = os.getenv("ANTHROPIC_API_KEY")
        if not anthropic_key:
            st.error("Anthropic API key missing in .env")
        else:
            st.write("**[Claude Sonnet 4.5]** Generating code...")
            try:
                claude = ChatAnthropic(
                    api_key=anthropic_key,
                    model="claude-sonnet-4-5-20250929"
                )
                claude_response = claude.invoke(
                    f"Write Python code for: {prompt or 'Analyze uploaded file'}"
                )
                # Some APIs return .text or .content
                code_str = getattr(claude_response, "content", None) or getattr(claude_response, "text", None)
                if code_str is None:
                    st.error("No code content returned from Claude.")
                else:
                    st.code(code_str, language="python")
            except Exception as e:
                st.error(f"Anthropic error: {str(e)}")

        # --- Grok (xAI) for research ---
        grok_key = os.getenv("GROK_API_KEY")
        if not grok_key:
            st.error("Grok API key missing in .env")
        else:
            st.write("**[Grok]** Researching...")
            try:
                grok_response = requests.post(
                    "https://api.x.ai/v1/grok",  # adjust if endpoint differs
                    headers={"Authorization": f"Bearer {grok_key}"},
                    json={"prompt": prompt or "Research uploaded file"}
                ).json()
                st.write(grok_response.get("response", "No response"))
            except Exception as e:
                st.error(f"Grok error: {str(e)}")

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
