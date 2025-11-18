import Head from "next/head";
import Link from "next/link";
import Navbar from "../my-portfolio/components/Navbar";
import { ThemeProvider } from "../../../src/app/my-portfolio/utils/ThemeContext";
import "@/app/my-portfolio/styles/Home.css";

export default function Home() {
  return (
    <ThemeProvider>
      <Head>
        {/* --- Basic Metadata --- */}
        <title>Abdullahi H Mu'az - Full-Stack Developer | Portfolio</title>
        <meta
          name="description"
          content="I'm Abdullahi H Mu'az, a full-stack developer specializing in React, Next.js, and Node.js. Explore my portfolio and projects."
        />
        <meta
          name="keywords"
          content="Abdullahi H Muaz, full-stack developer, frontend developer, React, Next.js, JavaScript, portfolio"
        />
        <meta name="author" content="Abdullahi H Mu'az" />

        {/* --- Open Graph (for link previews) --- */}
        <meta
          property="og:title"
          content="Abdullahi H Mu'az - Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Abdullahi H Mu'az, a full-stack developer specializing in React, Next.js, and Node.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abdullahihmuaz.onrender.com" />
        <meta
          property="og:image"
          content="https://abdullahihmuaz.onrender.com/og-image.jpg"
        />

        {/* --- Twitter Card --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abdullahi H Mu'az - Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Full-stack developer portfolio built with Next.js and React."
        />
        <meta
          name="twitter:image"
          content="https://abdullahihmuaz.onrender.com/og-image.jpg"
        />

        {/* --- Schema.org Person Structured Data --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdullahi H Mu'az",
              jobTitle: "Full-Stack Developer",
              url: "https://abdullahihmuaz.onrender.com",
              sameAs: [
                "https://github.com/AbdullahiHMuaz",
                "https://www.linkedin.com/in/abdullahihmuaz",
                "https://twitter.com/AbdullahiHMuaz",
              ],
              knowsAbout: [
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "Web Development",
              ],
            }),
          }}
        />
      </Head>

      <div className="home-page">
        <Navbar />
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-greeting">Hello, I'm</div>
            <h1 className="hero-name">Abdullahi H Mu'az</h1>
            <h2 className="hero-title">Full-Stack Developer</h2>
            <p className="hero-description">
              I craft digital experiences with clean code and creative
              solutions. Specializing in React, Next.js, and Node.js, I bring
              ideas to life with modern web technology.
            </p>

            <div className="hero-buttons">
              <Link href="/portfolio" className="btn btn-primary">
                View My Work
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/AbdullahiHMuaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/abdullahihmuaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com/AbdullahiHMuaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:abdullahihmuaz@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}
