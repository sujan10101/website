"use strict";
const render = () => {
    const app = document.getElementById('app');
    if (!app)
        return;
    app.innerHTML = `
    <div class="container">
      <nav class="nav">
        <div class="nav-center">
          <a href="#" class="nav-link" id="tools-link">Tools & Technologies</a>
          <a href="#" class="nav-link" id="resume-link">Resume</a>
          <a href="#" class="nav-link" id="contact-link">Get in Touch</a>
        </div>
      </nav>
      
      <main class="main">
        <div class="hero">
          <h1 class="hero-title">Software Engineer &<br>Graduate Researcher</h1>
          <p class="hero-subtitle">Passionate about building scalable systems.</p>
        </div>
        
        <div class="content">
          <div class="intro-section">
            <p class="large-text">Hi, I'm Sujan</p>
            <p>I’m pursuing a Master’s in Computer Science at Boise State University. I work in the AI-Based Security Lab at Boise State, where I research Wikipedia’s policies on LLM-generated content by collecting and classifying AI and human written articles, and studying scalability and information-quality challenges in human-dependent detection systems.</p>
          </div>
        </div>
      </main>
      
      <footer class="footer">
        <p>© ${new Date().getFullYear()} Sujan Khadka</p>
      </footer>
    </div>

    <!-- Tools Modal -->
    <div id="tools-modal" class="modal">
      <div class="modal-content">
        <button class="modal-close" id="close-tools">&times;</button>
        <h2 class="section-title">Tools & Technologies</h2>
        <div class="tools-grid">
          <div class="tool-category">
            <h3 class="category-title">Languages</h3>
            <div class="tool-tags">
              <span class="tool-tag">TypeScript</span>
              <span class="tool-tag">JavaScript</span>
              <span class="tool-tag">Python</span>
              <span class="tool-tag">Java</span>
              <span class="tool-tag">C++</span>
              <span class="tool-tag">SQL</span>
            </div>
          </div>

          <div class="tool-category">
            <h3 class="category-title">Frameworks & Libraries</h3>
            <div class="tool-tags">
              <span class="tool-tag">React</span>
              <span class="tool-tag">Node.js</span>
              <span class="tool-tag">Express</span>
              <span class="tool-tag">Next.js</span>
            </div>
          </div>

          <div class="tool-category">
            <h3 class="category-title">Databases</h3>
            <div class="tool-tags">
              <span class="tool-tag">PostgreSQL</span>
              <span class="tool-tag">MongoDB</span>
              <span class="tool-tag">MySQL</span>
              <span class="tool-tag">Redis</span>
            </div>
          </div>

          <div class="tool-category">
            <h3 class="category-title">Cloud & DevOps</h3>
            <div class="tool-tags">
              <span class="tool-tag">AWS</span>
              <span class="tool-tag">Docker</span>
              <span class="tool-tag">Kubernetes</span>
              <span class="tool-tag">Git</span>
              <span class="tool-tag">GitHub Actions</span>
              <span class="tool-tag">CI/CD</span>
            </div>
          </div>

          <div class="tool-category">
            <h3 class="category-title">Tools & Platforms</h3>
            <div class="tool-tags">
              <span class="tool-tag">VS Code</span>
              <span class="tool-tag">IntelliJ IDEA</span>
              <span class="tool-tag">Linux</span>
              <span class="tool-tag">macOS</span>
              <span class="tool-tag">Postman</span>
              <span class="tool-tag">Jira</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Resume Modal -->
    <div id="resume-modal" class="modal">
      <div class="modal-content resume-modal-content">
        <div class="resume-header">
          <div class="resume-actions">
            <button class="resume-btn" id="enlarge-resume" title="Fullscreen">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
              <span>Enlarge</span>
            </button>
            <button class="resume-btn" id="open-resume-tab" title="Open in new tab">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
              <span>Open in New Tab</span>
            </button>
          </div>
          <button class="modal-close" id="close-resume">&times;</button>
        </div>
        <iframe src="/resume.pdf" class="resume-iframe" id="resume-iframe"></iframe>
      </div>
    </div>

    <!-- Get in Touch Modal -->
    <div id="contact-modal" class="modal">
      <div class="modal-content contact-modal-content">
        <button class="modal-close" id="close-contact">&times;</button>
        <h2 class="section-title">Get in Touch</h2>
        <div class="contact-items">
          <div class="contact-item email-item">
            <label class="contact-label">Email</label>
            <div class="email-container">
              <input type="text" class="email-input" id="email-input" value="sujankhadka10101@gmail.com" readonly>
              <button class="copy-btn" id="copy-email" title="Copy to clipboard">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span class="copy-text">Copy</span>
              </button>
            </div>
          </div>

          <div class="contact-item">
            <label class="contact-label">GitHub</label>
            <a href="https://github.com/sujan10101" target="_blank" class="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>github.com/sujankhadka</span>
            </a>
          </div>

          <div class="contact-item">
            <label class="contact-label">LinkedIn</label>
            <a href="https://www.linkedin.com/in/sujan101/" target="_blank" class="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>linkedin.com/in/sujankhadka</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
    // Modal functionality
    const toolsModal = document.getElementById('tools-modal');
    const resumeModal = document.getElementById('resume-modal');
    const contactModal = document.getElementById('contact-modal');
    const toolsLink = document.getElementById('tools-link');
    const resumeLink = document.getElementById('resume-link');
    const contactLink = document.getElementById('contact-link');
    const closeTools = document.getElementById('close-tools');
    const closeResume = document.getElementById('close-resume');
    const closeContact = document.getElementById('close-contact');
    // Open Tools modal
    if (toolsLink && toolsModal) {
        toolsLink.addEventListener('click', (e) => {
            e.preventDefault();
            toolsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    // Close Tools modal
    if (closeTools && toolsModal) {
        closeTools.addEventListener('click', () => {
            toolsModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    // Open Resume modal
    if (resumeLink && resumeModal) {
        resumeLink.addEventListener('click', (e) => {
            e.preventDefault();
            resumeModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    // Close Resume modal
    if (closeResume && resumeModal) {
        closeResume.addEventListener('click', () => {
            resumeModal.classList.remove('active');
            document.body.style.overflow = '';
            resumeModal.classList.remove('fullscreen');
        });
    }
    // Resume actions
    const enlargeResumeBtn = document.getElementById('enlarge-resume');
    const openResumeTabBtn = document.getElementById('open-resume-tab');
    const resumeIframe = document.getElementById('resume-iframe');
    // Enlarge/fullscreen resume
    if (enlargeResumeBtn && resumeModal) {
        enlargeResumeBtn.addEventListener('click', () => {
            resumeModal.classList.toggle('fullscreen');
            const enlargeSpan = enlargeResumeBtn.querySelector('span');
            if (enlargeSpan) {
                if (resumeModal.classList.contains('fullscreen')) {
                    enlargeSpan.textContent = 'Exit Fullscreen';
                }
                else {
                    enlargeSpan.textContent = 'Enlarge';
                }
            }
        });
    }
    // Open resume in new tab
    if (openResumeTabBtn) {
        openResumeTabBtn.addEventListener('click', () => {
            window.open('/resume.pdf', '_blank');
        });
    }
    // Close modals when clicking outside
    if (toolsModal) {
        toolsModal.addEventListener('click', (e) => {
            if (e.target === toolsModal) {
                toolsModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    if (resumeModal) {
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                resumeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    // Open Contact modal
    if (contactLink && contactModal) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    // Close Contact modal
    if (closeContact && contactModal) {
        closeContact.addEventListener('click', () => {
            contactModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    // Close modals when clicking outside
    if (contactModal) {
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    // Copy email functionality
    const copyEmailBtn = document.getElementById('copy-email');
    const emailInput = document.getElementById('email-input');
    if (copyEmailBtn && emailInput) {
        copyEmailBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(emailInput.value);
                const copyText = copyEmailBtn.querySelector('.copy-text');
                if (copyText) {
                    const originalText = copyText.textContent;
                    copyText.textContent = 'Copied!';
                    copyEmailBtn.classList.add('copied');
                    setTimeout(() => {
                        copyText.textContent = originalText;
                        copyEmailBtn.classList.remove('copied');
                    }, 2000);
                }
            }
            catch (err) {
                // Fallback for older browsers
                emailInput.select();
                document.execCommand('copy');
                const copyText = copyEmailBtn.querySelector('.copy-text');
                if (copyText) {
                    const originalText = copyText.textContent;
                    copyText.textContent = 'Copied!';
                    copyEmailBtn.classList.add('copied');
                    setTimeout(() => {
                        copyText.textContent = originalText;
                        copyEmailBtn.classList.remove('copied');
                    }, 2000);
                }
            }
        });
    }
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (toolsModal?.classList.contains('active')) {
                toolsModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (resumeModal?.classList.contains('active')) {
                resumeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (contactModal?.classList.contains('active')) {
                contactModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
};
render();
