// Rhyna Sussana John - Knowledge Base for AI Chat Bot
// This file contains all the information the chat bot uses to answer questions

const KnowledgeBase = {
    // Greeting responses
    greetings: [
        "Hello! 👋 I'm Rhyna's AI assistant. I can tell you about her education at FAU Erlangen, her AI/ML experience, technical skills, projects, and more!",
        "Hi there! Want to know about Rhyna's work with generative AI or her experience at OneHash Technologies? Just ask!",
        "Hey! I'm here to help you learn about Rhyna - from her MSc in AI to her research in diffusion models. What would you like to know?"
    ],

    // Education information
    education: {
        keywords: ['education', 'study', 'studying', 'degree', 'university', 'college', 'fau', 'erlangen', 'master', 'masters', 'msc', 'bachelor', 'b.tech', 'medi-caps', 'medi caps', 'germany', 'india'],
        response: `🎓 **Education Background:**

**Currently Pursuing:**
• **MSc in Artificial Intelligence** at Friedrich-Alexander-Universität (FAU) Erlangen-Nürnberg, Germany
• Duration: April 2025 - March 2027
• Coursework: Speech & Language Processing, Deep Learning, Computer Vision, HCI, Information Visualization
• Research Focus: Large-scale generative video models (Google VEO-3), diffusion-based video generation, multimodal learning

**Completed:**
• **B.Tech in Computer Science** from Medi-caps University, Indore, India
• Duration: September 2020 - March 2024
• **CGPA: 9.38/10** (Top 10% of batch)
• Activities: IEEE Student Chapter Co-founder & Treasurer, Student Placement Coordinator, Graphic Design Lead`
    },

    // Work experience
    experience: {
        keywords: ['experience', 'work', 'job', 'internship', 'intern', 'career', 'onehash', 'lucidplus', 'iit', 'sysmetis', 'company', 'professional'],
        response: `💼 **Professional Experience:**

**1. AI/ML Intern @ OneHash Technologies** (Jan 2023 - Mar 2024)
• Built Generative AI bot for CRM customer support (documents, PDFs, webpages)
• Created Zoom AI assistant for multilingual meeting summaries
• Tech: Python, FastAPI, LLM, FAISS, Streamlit
• Delivered production-ready services actively deployed and sold

**2. Software Dev Intern @ Lucidplus IT Solutions** (Jun 2023 - Aug 2023)
• Researched Intelligent Document Processing (IDP)
• Achieved 90%+ OCR accuracy for invoice/bill processing
• Tech: EasyOCR, OpenCV, FastAPI, Img2Table

**3. Research Intern @ IIT Indore** (Jun 2022 - Aug 2022)
• Research under Dr. Surya Prakash in Computer Vision
• CNNs for image classification (83-89% accuracy)
• Tech: Python, OpenCV, Machine Learning

**4. Game Dev Intern @ Sysmetis IT Solutions** (Jan 2022)
• Built 5 games for Web/Android using Unity3D
• Tech: C#, Unity3D, Blender, AR/VR`
    },

    // Technical skills
    skills: {
        keywords: ['skill', 'skills', 'programming', 'language', 'python', 'java', 'technology', 'tech stack', 'tools', 'framework', 'library', 'code'],
        response: `🛠️ **Technical Skills:**

**Programming Languages:**
• Python (Expert), Java, C#, SQL

**AI/Machine Learning:**
• Deep Learning, Computer Vision, NLP
• LLMs, Generative AI, Diffusion Models
• CNNs, Multimodal Learning
• Research in video generation models

**Frameworks & Tools:**
• FastAPI, Streamlit, REST APIs
• OpenCV, FAISS, OCR Libraries (EasyOCR, Tesseract)
• Unity3D, Blender (Game Dev & 3D)
• Power BI, Excel (Data & Visualization)

**Languages:**
• English (Native)
• German (B1 Level)`
    },

    // Projects
    projects: {
        keywords: ['project', 'projects', 'raebot', 'bot', 'chatbot', 'generative', 'video', 'veo', 'crm', 'zoom', 'document', 'processor'],
        response: `🚀 **Key Projects:**

**1. RAEbot (Responsive Assistant for the Elderly)**
• AI support bot designed for elderly users
• Focus on everyday assistance and emergency support scenarios

**2. Generative AI CRM Bot (OneHash)**
• RAG-based customer support system
• Ingests documents, PDFs, webpages for intelligent responses
• Production deployment with active users

**3. Zoom AI Meeting Assistant**
• Autonomous bot joining Zoom meetings
• Generates comprehensive minutes and summaries
• Multilingual support for global teams

**4. Intelligent Document Processor**
• IDP system for invoice and bill processing
• 90%+ accuracy in table extraction from PDFs
• Used EasyOCR and computer vision techniques

**5. Current Research (FAU)**
• Working with Google VEO-3 and diffusion models
• Large-scale generative video generation
• Spatiotemporal representation learning`
    },

    // Leadership and extracurricular
    leadership: {
        keywords: ['leadership', 'ieee', 'placement', 'coordinator', 'volunteer', 'tutor', 'teaching', 'extra', 'curricular', 'activity', 'activities'],
        response: `🌟 **Leadership & Activities:**

**IEEE Student Chapter:**
• Co-founder and Treasurer at Medi-caps University
• Current Alumni Mentor for the chapter
• Conducted large-scale technical and gaming events

**Student Placement Cell:**
• Student Placement Coordinator
• Liaison between students, faculty, and recruiting companies
• Managed campus recruitment activities

**Graphic Design:**
• Led Graphic Designing Team for Alumni Association
• Created monthly newsletters and promotional materials

**Teaching & Volunteering:**
• Academic tutor for students grades 3-10
• Taught undergraduate OOP (Object-Oriented Programming)
• Foster parent for 3 stray dogs (Animal Welfare)
• Participated in Erasmus training program (Leadership focus)`
    },

    // Personal info
    personal: {
        keywords: ['personal', 'about you', 'hobby', 'hobbies', 'interest', 'interests', 'pet', 'pets', 'dog', 'dogs', 'animal', 'location', 'germany', 'nürnberg'],
        response: `👤 **About Rhyna:**

**Current Location:** Nürnberg, Germany (studying at FAU Erlangen)

**Passions & Interests:**
• AI Research (especially generative models and video generation)
• Animal welfare - actively fosters stray dogs
• Teaching and mentoring students
• Public speaking and anchoring technical events
• Bridging research and practical AI applications

**Key Achievements:**
• Top 10% of bachelor's batch (9.38/10 CGPA)
• Erasmus training program participant
• Hosted university and national-level technical events
• Built production AI systems used by real customers

**Contact:**
• 📧 rhyna.john@gmail.com
• 📱 +49 155 1033 7812`
    },

    // Contact information
    contact: {
        keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin', 'github', 'social'],
        response: `📞 **Contact Information:**

**Email:** rhyna.john@gmail.com

**Phone:** +49 155 1033 7812

**Location:** Senefelderstr 17, Nürnberg, 90409, Germany

**Current Status:** Open to AI research collaborations, industry opportunities, and interesting conversations about generative models!

Feel free to reach out for:
• Research collaborations in video generation/diffusion models
• AI/ML engineering opportunities
• Mentorship or academic guidance
• Just chatting about the future of AI!`
    },

    // Research interests
    research: {
        keywords: ['research', 'paper', 'publication', 'thesis', 'generative', 'diffusion', 'video', 'veo', 'multimodal', 'agi', 'publication'],
        response: `🔬 **Research Focus:**

**Current Research (FAU Erlangen):**
• Large-scale generative video models
• Google VEO-3 experimentation
• Diffusion-based video generation
• Multimodal learning systems
• Spatiotemporal representations
• AGI-aligned systems

**Research Interests:**
• Generative models and their applications
• Diffusion processes in video generation
• Computer vision and pattern recognition
• Natural language processing
• Bridging research concepts to practical applications

**Previous Research:**
• CNN-based image classification at IIT Indore
• OCR and document understanding at Lucidplus
• LLM applications in customer support at OneHash`
    },

    // Default fallback
    default: "I'm not sure I understood that correctly. I can tell you about Rhyna's:

• 🎓 Education at FAU Erlangen and Medi-caps University
• 💼 Work experience at OneHash, Lucidplus, IIT Indore
• 🛠️ Technical skills in AI/ML, Python, Computer Vision
• 🚀 Projects like RAEbot, CRM AI, Zoom Assistant
• 🌟 Leadership roles and volunteering
• 📞 Contact information

What would you like to know?"
};

// Export for use in chatbot.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KnowledgeBase;
}
