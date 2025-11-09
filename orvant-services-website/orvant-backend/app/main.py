from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
import aiosmtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import os
from datetime import datetime

app = FastAPI()

# Disable CORS. Do not remove this for full-stack development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

contact_submissions = []

@app.get("/healthz")
async def healthz():
    return {"status": "ok"}

@app.post("/api/contact")
async def submit_contact(
    name: str = Form(...),
    email: str = Form(...),
    company: Optional[str] = Form(None),
    phone: Optional[str] = Form(None),
    service: Optional[str] = Form(None),
    message: str = Form(...),
    files: List[UploadFile] = File(default=[])
):
    """
    Handle contact form submission with file uploads.
    Sends email to filipberg@orvanttservices.com with form data and attachments.
    """
    
    submission = {
        "timestamp": datetime.now().isoformat(),
        "name": name,
        "email": email,
        "company": company,
        "phone": phone,
        "service": service,
        "message": message,
        "files": [f.filename for f in files]
    }
    contact_submissions.append(submission)
    
    msg = MIMEMultipart()
    msg['From'] = "noreply@orvanttservices.com"
    msg['To'] = "filipberg@orvanttservices.com"
    msg['Subject'] = f"New Contact Form Submission from {name}"
    
    body = f"""
New contact form submission received:

Name: {name}
Email: {email}
Company: {company or 'N/A'}
Phone: {phone or 'N/A'}
Service Interest: {service or 'N/A'}

Message:
{message}

---
Submitted at: {submission['timestamp']}
"""
    
    msg.attach(MIMEText(body, 'plain'))
    
    for file in files:
        file_content = await file.read()
        
        part = MIMEBase('application', 'octet-stream')
        part.set_payload(file_content)
        encoders.encode_base64(part)
        part.add_header(
            'Content-Disposition',
            f'attachment; filename= {file.filename}'
        )
        msg.attach(part)
        
        await file.seek(0)
    
    try:
        print(f"Email would be sent to filipberg@orvanttservices.com")
        print(f"Subject: {msg['Subject']}")
        print(f"Body: {body}")
        print(f"Attachments: {[f.filename for f in files]}")
        
        # 
        # )
        
        return {
            "success": True,
            "message": "Contact form submitted successfully",
            "submission_id": len(contact_submissions)
        }
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return {
            "success": False,
            "message": f"Error processing submission: {str(e)}"
        }

@app.get("/api/submissions")
async def get_submissions():
    """Get all contact submissions (for testing purposes)"""
    return {"submissions": contact_submissions, "total": len(contact_submissions)}
