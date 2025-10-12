import streamlit as st
from langchain_community.llms import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()
st.title("Multi-AI Project Studio")
prompt = st.text_input("Enter project goal (e.g., Build IPO predictor):")
if prompt:
    with st.spinner("Processing..."):
        llm = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        response = llm(prompt)
        st.write(response)
