# Using AI Helpers in Devin Sessions

This document explains how to use the AI helper module that has been set up for collaborative development in Devin sessions.

## Overview

A reusable AI helper module has been installed at `~/.devin/ai_agents/` that provides access to four specialized AI models:

- **🏗️ GPT-5: Project Architect** - Architecture design and planning
- **💻 Claude Sonnet 4.5: Senior Developer** - Code implementation and debugging
- **📚 Grok 4: Research Lead** - Research and documentation
- **🧪 Gemini 2.0 Flash: QA Engineer** - Testing and quality assurance

## Quick Start

In any Devin session, you can use these AI models by adding this to your Python scripts:

```python
import sys
import os
sys.path.append(os.path.expanduser('~/.devin/ai_agents'))

from ai_helpers import plan_architecture, generate_code, research, test_strategy

# Use the AI agents
architecture = plan_architecture("Build a REST API for user management")
code = generate_code("Implement JWT authentication", language="python")
research_findings = research("Best practices for API rate limiting")
test_plan = test_strategy("Test user authentication system")
```

## When to Use Each AI Agent

### 🏗️ GPT-5: Project Architect
**Use for:**
- Designing system architecture
- Creating project roadmaps
- Making technology stack decisions
- Planning scalability and security

**Example:**
```python
architecture = plan_architecture(
    goal="Build a real-time chat application",
    context="Need to support 10,000 concurrent users"
)
print(architecture)
```

### 💻 Claude Sonnet 4.5: Senior Developer
**Use for:**
- Implementing complex code
- Writing algorithms
- Refactoring existing code
- Debugging issues

**Example:**
```python
code = generate_code(
    spec="Implement a rate limiter using token bucket algorithm",
    language="python",
    context="Should handle 100 requests per minute per user"
)
print(code)
```

### 📚 Grok 4: Research Lead
**Use for:**
- Researching best practices
- Comparing libraries and frameworks
- Finding documentation
- Security research

**Example:**
```python
findings = research(
    question="Compare Redis vs Memcached for session storage",
    context="Need to support 1M sessions with TTL"
)
print(findings)
```

### 🧪 Gemini 2.0 Flash: QA Engineer
**Use for:**
- Creating test strategies
- Generating test cases
- Planning QA approaches
- Identifying edge cases

**Example:**
```python
strategy = test_strategy(
    goal="Test user authentication system",
    code="<your code here>",
    docs="<your docs here>"
)
print(strategy)
```

## Complete Workflow Example

Here's how to use all four AI agents together in a development workflow:

```python
import sys
import os
sys.path.append(os.path.expanduser('~/.devin/ai_agents'))

from ai_helpers import plan_architecture, generate_code, research, test_strategy

# 1. Plan the architecture
print("=== ARCHITECTURE ===")
architecture = plan_architecture("Build a URL shortener service")
print(architecture)

# 2. Research best practices
print("\n=== RESEARCH ===")
research_findings = research("Best practices for URL shortening services")
print(research_findings)

# 3. Generate code
print("\n=== CODE ===")
code = generate_code(
    "Implement URL shortening logic with collision handling",
    language="python"
)
print(code)

# 4. Create test strategy
print("\n=== TESTING ===")
tests = test_strategy(
    "Test URL shortener service",
    code=code
)
print(tests)
```

## Environment Variables

The AI helper module automatically reads API keys from environment variables. Make sure these are set in your Devin session:

- **OpenAI:** `OPENAI_API_KEY` or `OPEN_AI`
- **Anthropic:** `ANTHROPIC_API_KEY` or `ANTHROPIC_API_KEY_`
- **xAI:** `GROK_API_KEY` or `xai_api_key`
- **Google:** `GEMINI_API_KEY` or `GEMINI_FLASH_2_0_`

## Model Overrides

You can override the default models using environment variables:

```bash
export IDEATION_MODEL=gpt-4o              # Default: gpt-5
export CODE_MODEL=claude-3-5-sonnet-latest # Default: claude-sonnet-4-5-20250929
export RESEARCH_MODEL=grok-2               # Default: grok-4
export DOCS_MODEL=gemini-1.5-pro           # Default: gemini-2.0-flash-exp
```

## Error Handling

All functions return results with proper error handling:

```python
result = generate_code("Implement a binary search tree")

if "Error:" in result:
    print("Failed to generate code:", result)
else:
    print("Generated code successfully:")
    print(result)
```

## Low-Level API

For direct access to specific models, use the low-level functions:

```python
from ai_helpers import ask_openai, ask_anthropic, ask_xai, ask_gemini

# Direct API calls with full control
result = ask_openai(
    prompt="Design a microservices architecture",
    model="gpt-5",
    system_prompt="You are an expert architect"
)

if result["success"]:
    print(f"Model used: {result['model_used']}")
    print(f"Content: {result['content']}")
    if "warning" in result:
        print(f"Warning: {result['warning']}")
else:
    print(f"Error: {result['error']}")
```

## Documentation

For complete documentation, see: `~/.devin/ai_agents/USAGE.md`

## Testing

To test the AI helper module:

```bash
cd ~/.devin/ai_agents
python test_helpers.py
```

This will test all four AI agents and show their responses.

## Notes

- The AI helper module is persistent across all Devin sessions
- Each API call incurs costs based on the provider's pricing
- All API calls have a 60-second timeout
- Model fallbacks are automatic (e.g., GPT-5 → GPT-4o if GPT-5 not available)
- The module works with or without optional dependencies (openai, anthropic, google-generativeai)

## Support

For issues or questions about the AI helper module, refer to the complete documentation at `~/.devin/ai_agents/USAGE.md`.
