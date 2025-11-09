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
        openai_key = get_env_key("OPENAI_API_KEY", "OPEN_AI")
        if not openai_key:
            st.error("OpenAI API key missing in environment")
        else:
            openai_model = os.getenv("IDEATION_MODEL", "gpt-5")
            st.write(f"**[GPT-5: Project Architect]** Planning and designing architecture...")
            try:
                gpt = ChatOpenAI(api_key=openai_key, model=openai_model)
                architecture_prompt = f"""You are a Senior Project Architect and Technical Lead. Your role is to:
- Design high-level system architecture and technical specifications
- Create project roadmaps and development phases
- Identify key technologies, frameworks, and tools needed
- Define system components, modules, and their interactions
- Establish best practices and coding standards
- Plan scalability, security, and performance considerations

Project Goal: {prompt or "Analyze uploaded file"}

Provide a comprehensive project plan and architecture design."""
                gpt_response = gpt.invoke(architecture_prompt)
                response_text = getattr(gpt_response, "content", None) or str(gpt_response)
                st.write(response_text)
            except Exception as e:
                st.error(f"OpenAI error: {str(e)}")

        # --- Claude Sonnet 4.5: Code Implementation & Debugging ---
        anthropic_key = get_env_key("ANTHROPIC_API_KEY", "ANTHROPIC_API_KEY_")
        if not anthropic_key:
            st.error("Anthropic API key missing in environment")
        else:
            claude_model = os.getenv("CODE_MODEL", "claude-sonnet-4-5-20250929")
            st.write(f"**[Claude Sonnet 4.5: Senior Developer]** Implementing code and debugging...")
            try:
                claude = ChatAnthropic(
                    api_key=anthropic_key,
                    model=claude_model
                )
                code_prompt = f"""You are a Senior Software Developer and Debugging Expert. Your role is to:
- Write clean, efficient, and well-documented production-ready code
- Implement features following best practices and design patterns
- Debug and fix issues in existing code
- Optimize code for performance and maintainability
- Add comprehensive error handling and logging
- Write unit tests and integration tests
- Refactor code to improve quality and readability

Project Goal: {prompt or 'Analyze uploaded file'}

Provide complete, production-ready code implementation with explanations."""
                claude_response = claude.invoke(code_prompt)
                code_str = getattr(claude_response, "content", None) or getattr(claude_response, "text", None)
                if code_str is None:
                    st.error("No code content returned from Claude.")
                else:
                    st.code(code_str, language="python")
            except Exception as e:
                st.error(f"Anthropic error: {str(e)}")

        # --- Grok 4: Research & Documentation ---
        grok_key = get_env_key("GROK_API_KEY", "xai_api_key")
        if not grok_key:
            st.error("Grok API key missing in environment")
        else:
            st.write("**[Grok 4: Research Lead]** Researching and documenting...")
            try:
                grok_model = os.getenv("RESEARCH_MODEL", "grok-4")
                research_system_prompt = """You are a Senior Research Analyst and Technical Documentation Expert. Your role is to:
- Research best practices, libraries, and frameworks for the project
- Analyze similar projects and competitive solutions
- Gather technical requirements and specifications
- Create comprehensive technical documentation
- Write API documentation and user guides
- Research security vulnerabilities and compliance requirements
- Document system architecture and data flows
- Provide references to relevant resources and documentation"""
                
                grok_response = requests.post(
                    "https://api.x.ai/v1/chat/completions",
                    headers={
                        "Authorization": f"Bearer {grok_key}",
                        "Content-Type": "application/json"
                    },
                    json={
                        "messages": [
                            {"role": "system", "content": research_system_prompt},
                            {"role": "user", "content": f"Project Goal: {prompt or 'Analyze uploaded file'}\n\nProvide comprehensive research findings and documentation."}
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
            st.write("**[Gemini 2.0 Flash: QA Engineer]** Testing and quality assurance...")
            try:
                gemini_model_name = os.getenv("DOCS_MODEL", "gemini-2.0-flash-exp")
                genai.configure(api_key=gemini_key)
                gemini_model = genai.GenerativeModel(gemini_model_name)
                
                qa_prompt = f"""You are a Senior QA Engineer and Testing Specialist. Your role is to:
- Design comprehensive test strategies and test plans
- Write unit tests, integration tests, and end-to-end tests
- Perform code reviews and quality assessments
- Identify edge cases and potential bugs
- Create test automation frameworks
- Validate performance, security, and usability
- Generate test data and test scenarios
- Document testing procedures and results

Project Goal: {prompt or "Analyze uploaded file"}

Provide a comprehensive testing strategy, test cases, and quality assurance recommendations."""
                
                if uploaded_file:
                    qa_prompt = f"Analyze this document for testing requirements and quality assurance:\n\n{qa_prompt}"
                
                gemini_response = gemini_model.generate_content(qa_prompt)
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
