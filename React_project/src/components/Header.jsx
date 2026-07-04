const Header = () => {
  return (
    <header class="site-header">
      <div class="container header-container">
        <div class="logo">🚀 NexusCore</div>
        <nav class="site-nav">
          <ul>
            <li>
              <a href="#features">About Us</a>
            </li>
            <li>
              <a href="#how-it-works">How it Works</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </nav>
        <div class="header-actions">
          <a href="#" class="btn btn-text">
            Log In
          </a>
          <a href="#cta" class="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
