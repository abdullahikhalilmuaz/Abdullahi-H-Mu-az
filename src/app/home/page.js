import Head from "next/head";
import Link from "next/link";
import Navbar from "../my-portfolio/components/Navbar";
import { ThemeProvider } from "../../../src/app/my-portfolio/utils/ThemeContext";
import "@/app/my-portfolio/styles/Home.css";

export default function Home() {
  return (
    <ThemeProvider>
      <Head>
        <title>Abdullahi H Mu'az - Full-Stack Developer | Portfolio</title>
        <meta
          name="description"
          content="Full-stack developer specializing in modern web technologies. View my portfolio of projects and get in touch for collaboration."
        />
        <meta
          name="keywords"
          content="full-stack developer, web developer, React, Node.js, JavaScript, portfolio"
        />
        <meta name="author" content="Your Name" />

        {/* Open Graph */}
        <meta property="og:title" content="Your Name - Full-Stack Developer" />
        <meta
          property="og:description"
          content="Full-stack developer specializing in modern web technologies. View my portfolio and get in touch."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourname.com" />
        <meta property="og:image" content="https://yourname.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Name - Full-Stack Developer" />
        <meta
          name="twitter:description"
          content="Full-stack developer specializing in modern web technologies."
        />
        <meta
          name="twitter:image"
          content="https://yourname.com/twitter-image.jpg"
        />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Your Name",
              jobTitle: "Full-Stack Developer",
              url: "https://yourname.com",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername",
              ],
              knowsAbout: [
                "JavaScript",
                "React",
                "Node.js",
                "Python",
                "Web Development",
              ],
            }),
          }}
        />
      </Head>

      <div className="home-page">
        <Navbar />

        <section className="hero" id="home">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>

          <div className="hero-content">
            <div className="hero-greeting">Hello, I'm</div>
            <h1 className="hero-name">Abdullahi H Mu'az</h1>
            <h2 className="hero-title">Full-Stack Developer</h2>
            <p className="hero-description">
              I craft digital experiences with clean code and creative
              solutions. Specializing in modern web technologies, I bring ideas
              to life through both frontend beauty and backend functionality.
            </p>

            <div className="hero-buttons">
              <Link href="/portfolio" className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                View My Work
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <i className="fas fa-envelope"></i>
                Get In Touch
              </Link>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/yourusername"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com/yourusername"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="social-link"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>

            <div className="skills-preview">
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fab fa-js-square"></i>
                  </div>
                  <div className="skill-name">JavaScript</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fab fa-react"></i>
                  </div>
                  <div className="skill-name">React</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fab fa-node-js"></i>
                  </div>
                  <div className="skill-name">Node.js</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <div className="skill-name">Database</div>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <div className="scroll-indicator">
            <div className="scroll-arrow">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div> */}
          {/* <span>Scroll to explore</span> */}
        </section>
      </div>
    </ThemeProvider>
  );
}
