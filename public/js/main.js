"use strict";
const render = () => {
    const app = document.getElementById('app');
    if (!app)
        return;
    app.innerHTML = `
    <div class="container">
      <nav class="nav">
        <div class="nav-center">
          <a href="#tools" class="nav-link">Tools & Technologies</a>
          <a href="/resume.pdf" target="_blank">Resume</a>
          <div class="dropdown">
            <a href="#" class="dropdown-toggle">Get in Touch</a>
            <div class="dropdown-menu">
              <a href="mailto:hello@sujankhadka.com">Email</a>
              <a href="https://github.com/sujankhadka" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/sujan101/" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </nav>
      
      <main class="main">
        <div class="hero">
          <h1 class="hero-title">Software Engineer &<br>Graduate Student</h1>
          <p class="hero-subtitle">Passionate about building scalable systems.</p>
        </div>
        
        <div class="content">
          <div class="intro-section">
            <p class="large-text">Hi, I'm Sujan</p>
            <p>I'm currently pursuing my Master's in Computer Science at Boise State University in Idaho, where I'm deepening my expertise in software engineering and computer science fundamentals.</p>
          </div>

          <section id="tools" class="tools-section">
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
                <span class="tool-tag">Spring Boot</span>
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
          </section>
        </div>
      </main>
      
      <footer class="footer">
        <p>© ${new Date().getFullYear()} Sujan Khadka</p>
      </footer>
    </div>
  `;
    // Dropdown functionality
    const dropdown = document.querySelector('.dropdown');
    const toggle = document.querySelector('.dropdown-toggle');
    if (dropdown && toggle) {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
    // Smooth scroll for nav links
    const navLink = document.querySelector('a[href="#tools"]');
    if (navLink) {
        navLink.addEventListener('click', (e) => {
            e.preventDefault();
            const toolsSection = document.getElementById('tools');
            if (toolsSection) {
                toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
};
render();
