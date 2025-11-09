# Multi-AI Project Studio

A powerful Streamlit application that orchestrates multiple AI providers (OpenAI, Anthropic, xAI Grok, and Google Gemini) to support comprehensive project development workflows.

## Features

- **GPT-5 (OpenAI)**: Latest and most advanced OpenAI model for ideation and creative planning
- **Claude Sonnet 4.5 (Anthropic)**: Expert code generation and refactoring
- **Grok 4 (xAI)**: Latest xAI model for real-time research and information gathering
- **Gemini 2.0 Flash (Google)**: Fastest and latest Google model for document analysis
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
IDEATION_MODEL=gpt-5                       # Default: gpt-5
CODE_MODEL=claude-sonnet-4-5-20250929      # Default: claude-sonnet-4-5-20250929
RESEARCH_MODEL=grok-4                      # Default: grok-4
DOCS_MODEL=gemini-2.0-flash-exp            # Default: gemini-2.0-flash-exp
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
   - **GPT-5** generates creative ideas and analysis
   - **Claude Sonnet 4.5** produces Python code implementations
   - **Grok 4** conducts background research
   - **Gemini 2.0 Flash** analyzes documents with fast processing
4. Results are displayed in separate sections for each AI provider
5. Uploaded files are saved to the `uploads/` directory

## Architecture

- **Multi-provider fail-safe design**: Each AI service operates independently with isolated error handling
- **Flexible configuration**: Environment variable mapping supports multiple naming conventions
- **Real-time monitoring**: Watchdog integration tracks file system changes
- **Concurrent processing**: All AI providers process requests simultaneously for faster results

## Models Used

- **OpenAI GPT-5**: Latest and most powerful OpenAI model for ideation
- **Anthropic Claude Sonnet 4.5**: State-of-the-art code generation (September 2025 version)
- **xAI Grok 4**: Latest Grok model for research and current information
- **Google Gemini 2.0 Flash**: Fastest and latest Google model for document analysis
