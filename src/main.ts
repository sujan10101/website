const render = () => {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="container">
      <nav class="nav">
        <div class="nav-left">
          <span class="logo">Sujan Khadka</span>
        </div>
        <div class="nav-right">
          <a href="#tools">Tools/Configs</a>
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
          <p class="hero-subtitle">Building reliable systems</p>
        </div>
        
        <div class="content">
          <div class="intro-section">
            <p class="large-text">Hi, I'm Sujan—</p>
            <p>I'm currently pursuing my Master's in Computer Science at Boise State University in Idaho, where I'm deepening my expertise in software engineering and computer science fundamentals.</p>
          </div>
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
      if (!dropdown.contains(e.target as Node)) {
        dropdown.classList.remove('active');
      }
    });
  }
};

render();
