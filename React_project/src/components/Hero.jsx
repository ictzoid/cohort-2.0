const Hero = () => {
  return (
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <span class="badge">New Release v2.0</span>
          <h1>Build scalable solutions faster than ever.</h1>
          <p>
            Equip your team with the most powerful suite of development tools.
            Automate workflows, integrate seamlessly, and deploy in seconds.
          </p>
          <div class="hero-buttons">
            <a href="#cta" class="btn btn-primary btn-large">
              Start Free Trial
            </a>
            <a href="#demo" class="btn btn-secondary btn-large">
              Watch Demo
            </a>
          </div>
          <p class="hero-microcopy">
            ✔ No credit card required. 14-day free trial.
          </p>
        </div>
        <div class="hero-visual">
          <div class="visual-placeholder">
            <span>App Dashboard Interface</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
