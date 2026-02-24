// Chat Bot Logic for Rhyna's Portfolio
// Handles user interactions, message processing, and responses

class ChatBot {
    constructor() {
        this.container = document.getElementById('chatContainer');
        this.messagesContainer = document.getElementById('chatMessages');
        this.input = document.getElementById('chatInput');
        this.sendBtn = document.getElementById('chatSend');
        this.toggleBtn = document.getElementById('chatToggle');
        this.closeBtn = document.getElementById('chatClose');
        this.typingIndicator = document.getElementById('typingIndicator');
        this.suggestedQuestions = document.getElementById('suggestedQuestions');

        this.isOpen = false;
        this.messageHistory = [];

        this.init();
    }

    init() {
        // Event listeners
        this.toggleBtn.addEventListener('click', () => this.toggle());
        this.closeBtn.addEventListener('click', () => this.close());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Suggested question buttons
        document.querySelectorAll('.suggested-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const question = e.target.getAttribute('data-question');
                this.input.value = question;
                this.sendMessage();
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && !e.target.closest('.chat-widget')) {
                this.close();
            }
        });

        // Focus input when opened
        this.container.addEventListener('transitionend', () => {
            if (this.isOpen) this.input.focus();
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.container.classList.toggle('active', this.isOpen);
        this.toggleBtn.style.transform = this.isOpen ? 'scale(0)' : 'scale(1)';

        if (this.isOpen) {
            setTimeout(() => this.input.focus(), 100);
        }
    }

    close() {
        this.isOpen = false;
        this.container.classList.remove('active');
        this.toggleBtn.style.transform = 'scale(1)';
    }

    sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        this.input.value = '';

        // Hide suggested questions after first interaction
        if (this.suggestedQuestions) {
            this.suggestedQuestions.style.display = 'none';
        }

        // Show typing indicator
        this.showTyping();

        // Generate response with realistic delay
        const delay = 800 + Math.random() * 700;
        setTimeout(() => {
            this.hideTyping();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, delay);
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;

        // Convert markdown-style formatting to HTML
        let formattedText = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/•/g, '&bull;')
            .replace(/
/g, '<br>');

        if (sender === 'bot') {
            messageDiv.innerHTML = `<div class="message-content">${formattedText}</div>`;
        } else {
            messageDiv.textContent = text;
        }

        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();

        // Store in history
        this.messageHistory.push({ sender, text });
    }

    showTyping() {
        this.typingIndicator.classList.add('active');
        this.scrollToBottom();
    }

    hideTyping() {
        this.typingIndicator.classList.remove('active');
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    generateResponse(input) {
        const lowerInput = input.toLowerCase();

        // Check for greetings
        if (/^(hi|hello|hey|greetings|howdy|hola)/i.test(lowerInput)) {
            return this.getRandomResponse(KnowledgeBase.greetings);
        }

        // Check for gratitude
        if (/thank|thanks|appreciate/i.test(lowerInput)) {
            return "You're welcome! 😊 Feel free to ask if you have any other questions about Rhyna!";
        }

        // Check for goodbye
        if (/bye|goodbye|see you|later/i.test(lowerInput)) {
            return "Goodbye! Have a great day! Feel free to come back if you want to know more about Rhyna. 👋";
        }

        // Check each category in knowledge base
        for (const [key, value] of Object.entries(KnowledgeBase)) {
            if (key === 'greetings' || key === 'default') continue;

            if (value.keywords && value.keywords.some(keyword => lowerInput.includes(keyword))) {
                return value.response;
            }
        }

        // Context-aware responses based on keywords
        if (lowerInput.includes('ai') || lowerInput.includes('machine learning') || lowerInput.includes('ml')) {
            return KnowledgeBase.experience.response;
        }

        if (lowerInput.includes('code') || lowerInput.includes('develop') || lowerInput.includes('programming')) {
            return KnowledgeBase.skills.response;
        }

        if (lowerInput.includes('study') || lowerInput.includes('learn') || lowerInput.includes('student')) {
            return KnowledgeBase.education.response;
        }

        // Default response
        return KnowledgeBase.default;
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize chat bot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.chatBot = new ChatBot();
});
