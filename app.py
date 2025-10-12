import streamlit as st
from langchain_openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

st.title("Multi-AI Project Studio")

prompt = st.text_input("Enter project goal (e.g., Build IPO predictor):")

if prompt:
    with st.spinner("Processing..."):
        openai_key = os.getenv("OPENAI_API_KEY")
        if not openai_key:
            st.error("OpenAI API key missing in .env")
        else:
            try:
                llm = OpenAI(api_key=openai_key)
                response = llm.invoke(prompt)
                st.write(f"[GPT-5] {response}")
            except Exception as e:
                st.error(f"OpenAI error: {str(e)}")
