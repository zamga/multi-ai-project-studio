# Multi-AI Project Studio

A powerful Streamlit application that orchestrates four specialized AI agents, each with distinct roles for comprehensive project development. Each AI agent is configured with the latest models and specific responsibilities to handle different aspects of software development.

## AI Agent Roles

### 🏗️ GPT-5: Project Architect
**Role:** Project Planning & Architecture Design
- Designs high-level system architecture and technical specifications
- Creates project roadmaps and development phases
- Identifies key technologies, frameworks, and tools
- Defines system components, modules, and interactions
- Establishes best practices and coding standards
- Plans scalability, security, and performance considerations

### 💻 Claude Sonnet 4.5: Senior Developer
**Role:** Code Implementation & Debugging
- Writes clean, efficient, production-ready code
- Implements features following best practices and design patterns
- Debugs and fixes issues in existing code
- Optimizes code for performance and maintainability
- Adds comprehensive error handling and logging
- Writes unit tests and integration tests
- Refactors code to improve quality and readability

### 📚 Grok 4: Research Lead
**Role:** Research & Documentation
- Researches best practices, libraries, and frameworks
- Analyzes similar projects and competitive solutions
- Gathers technical requirements and specifications
- Creates comprehensive technical documentation
- Writes API documentation and user guides
- Researches security vulnerabilities and compliance requirements
- Documents system architecture and data flows
- Provides references to relevant resources

### 🧪 Gemini 2.0 Flash: QA Engineer
**Role:** Testing & Quality Assurance
- Designs comprehensive test strategies and test plans
- Writes unit tests, integration tests, and end-to-end tests
- Performs code reviews and quality assessments
- Identifies edge cases and potential bugs
- Creates test automation frameworks
- Validates performance, security, and usability
- Generates test data and test scenarios
- Documents testing procedures and results

## Additional Features

- **File Upload Support**: Upload PDFs and text documents for AI analysis
- **Real-time File Monitoring**: Automatic detection of file system changes
- **Concurrent Processing**: All AI agents work simultaneously for faster results

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

1. **Enter Your Project Goal**: Describe what you want to build (e.g., "Build IPO predictor")
2. **Optional File Upload**: Upload supporting documents (PDFs, text files) for analysis
3. **AI Agents Collaborate**: All four specialized AI agents work simultaneously on your project:
   - **GPT-5 (Project Architect)** designs the system architecture and project plan
   - **Claude Sonnet 4.5 (Senior Developer)** implements production-ready code
   - **Grok 4 (Research Lead)** researches best practices and creates documentation
   - **Gemini 2.0 Flash (QA Engineer)** develops testing strategies and quality assurance plans
4. **Review Results**: Each AI agent provides specialized output in separate sections
5. **Iterate**: Use the insights from all agents to refine and develop your project

Each AI agent is given a specific role with detailed instructions to ensure comprehensive coverage of all project development aspects.

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
