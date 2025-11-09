# Multi-AI Project Studio

A powerful Streamlit application that orchestrates multiple AI providers (OpenAI, Anthropic, xAI Grok, and Google Gemini) to support comprehensive project development workflows.

## Features

- **GPT-4o (OpenAI)**: Advanced ideation and creative planning
- **Claude 3.5 Sonnet (Anthropic)**: Expert code generation and refactoring
- **Grok (xAI)**: Real-time research and information gathering
- **Gemini 1.5 Pro (Google)**: Long-context document analysis and summarization
- **File Upload Support**: Upload PDFs and text documents for AI analysis
- **Real-time File Monitoring**: Automatic detection of file system changes

## Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Configure API Keys

The application supports flexible environment variable naming. Set your API keys using any of these formats:

**OpenAI:**
- `OPENAI_API_KEY` (preferred)
- `OPEN_AI` (alternative)

**Anthropic:**
- `ANTHROPIC_API_KEY` (preferred)
- `ANTHROPIC_API_KEY_` (alternative)

**xAI Grok:**
- `GROK_API_KEY` (preferred)
- `xai_api_key` (alternative)

**Google Gemini:**
- `GEMINI_API_KEY` (preferred)
- `GEMINI_FLASH_2_0_` (alternative)

Create a `.env` file in the project root:

```bash
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
GROK_API_KEY=your_grok_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Optional: Customize Models

You can override the default models by setting these environment variables:

```bash
IDEATION_MODEL=gpt-4o                      # Default: gpt-4o
CODE_MODEL=claude-3-5-sonnet-20241022      # Default: claude-3-5-sonnet-20241022
RESEARCH_MODEL=grok-beta                   # Default: grok-beta
DOCS_MODEL=gemini-1.5-pro                  # Default: gemini-1.5-pro
```

## Usage

### Run the Application

```bash
streamlit run app.py
```

The app will be available at `http://localhost:8501`

### Test API Configuration

Verify your API keys are properly configured:

```bash
python test_api.py
```

## How It Works

1. Enter a project goal (e.g., "Build IPO predictor")
2. Optionally upload supporting documents (PDFs, text files)
3. The application simultaneously queries all four AI providers:
   - **GPT-4o** generates creative ideas and analysis
   - **Claude 3.5 Sonnet** produces Python code implementations
   - **Grok** conducts background research
   - **Gemini 1.5 Pro** analyzes documents with long-context understanding
4. Results are displayed in separate sections for each AI provider
5. Uploaded files are saved to the `uploads/` directory

## Architecture

- **Multi-provider fail-safe design**: Each AI service operates independently with isolated error handling
- **Flexible configuration**: Environment variable mapping supports multiple naming conventions
- **Real-time monitoring**: Watchdog integration tracks file system changes
- **Concurrent processing**: All AI providers process requests simultaneously for faster results

## Models Used

- **OpenAI GPT-4o**: Latest and most powerful OpenAI model for ideation
- **Anthropic Claude 3.5 Sonnet**: State-of-the-art code generation (October 2024 version)
- **xAI Grok Beta**: Latest Grok model for research and current information
- **Google Gemini 1.5 Pro**: Advanced long-context model for document analysis
