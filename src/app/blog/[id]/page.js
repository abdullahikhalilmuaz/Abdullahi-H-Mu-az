"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../../app/my-portfolio/components/Navbar"; // Updated from 2 to 3 levels
import { ThemeProvider } from "../../../app/my-portfolio/utils/ThemeContext"; // Updated from 2 to 3 levels
import "../../../app/my-portfolio/styles/Home.css"; // Updated from 2 to 3 levels
import "../../../app/my-portfolio/styles/blog-post.css"; // Updated from 2 to 3 levels

const BlogPost = () => {
  const params = useParams();
  const { id } = params;
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Modern Architecture",
      excerpt:
        "Learn how to structure your React applications for scalability and maintainability using modern architectural patterns and best practices.",
      content: `...`, // Your existing content
      author: "Abdullahi H Mu'az",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "JavaScript", "Architecture", "Best Practices"],
      image: "/blog/react-architecture.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Introduction to Blockchain Development with Solidity",
      excerpt:
        "A comprehensive guide to getting started with blockchain development.",
      content:
        "<h2>Blockchain Fundamentals</h2><p>Understanding the core concepts of blockchain technology and smart contract development.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-03-10",
      readTime: "12 min read",
      category: "Blockchain",
      tags: ["Blockchain", "Solidity", "Ethereum", "Web3"],
      image: "/blog/blockchain-intro.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Next.js 14: What's New and How to Upgrade",
      excerpt:
        "Explore the latest features in Next.js 14 including Server Components and new routing system.",
      content:
        "<h2>Next.js 14 Features</h2><p>Deep dive into the new App Router, Server Components, and performance improvements.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "Next.js",
      tags: ["Next.js", "React", "Framework", "SSR"],
      image: "/blog/nextjs-14.jpg",
      featured: true,
    },
    {
      id: 4,
      title: "TypeScript for JavaScript Developers: A Practical Guide",
      excerpt:
        "Learn TypeScript fundamentals and how to integrate it into your JavaScript projects.",
      content:
        "<h2>TypeScript Basics</h2><p>Understanding types, interfaces, and how TypeScript improves code quality.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-02-28",
      readTime: "10 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Development", "Tools"],
      image: "/blog/typescript-guide.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Mastering CSS Grid and Flexbox for Modern Layouts",
      excerpt:
        "Advanced techniques for creating responsive and complex layouts with CSS Grid and Flexbox.",
      content:
        "<h2>CSS Layout Mastery</h2><p>Practical examples and real-world use cases for modern CSS layouts.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-02-22",
      readTime: "7 min read",
      category: "CSS",
      tags: ["CSS", "Grid", "Flexbox", "Layout", "Responsive"],
      image: "/blog/css-grid-flexbox.jpg",
      featured: true,
    },
    {
      id: 6,
      title: "Node.js Performance Optimization Techniques",
      excerpt:
        "Learn how to optimize your Node.js applications for better performance and scalability.",
      content:
        "<h2>Node.js Performance</h2><p>Caching strategies, database optimization, and memory management techniques.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-02-18",
      readTime: "9 min read",
      category: "Node.js",
      tags: ["Node.js", "Performance", "Backend", "JavaScript"],
      image: "/blog/nodejs-performance.jpg",
      featured: false,
    },
    {
      id: 7,
      title: "Building RESTful APIs with Express.js and MongoDB",
      excerpt:
        "Complete guide to creating robust REST APIs using Express.js and MongoDB.",
      content:
        "<h2>REST API Development</h2><p>Best practices for API design, authentication, and database integration.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-02-12",
      readTime: "11 min read",
      category: "Backend",
      tags: ["Express.js", "MongoDB", "API", "REST", "Backend"],
      image: "/blog/express-mongodb.jpg",
      featured: true,
    },
    {
      id: 8,
      title: "React Hooks: From Beginner to Advanced",
      excerpt:
        "Comprehensive guide to mastering React Hooks with practical examples.",
      content:
        "<h2>React Hooks Deep Dive</h2><p>Understanding useState, useEffect, custom hooks, and advanced patterns.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-02-08",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Hooks", "JavaScript", "Frontend"],
      image: "/blog/react-hooks.jpg",
      featured: false,
    },
    {
      id: 9,
      title: "Docker for Web Developers: Containerize Your Applications",
      excerpt:
        "Learn how to use Docker to containerize and deploy your web applications.",
      content:
        "<h2>Docker Fundamentals</h2><p>Containerization basics, Dockerfile creation, and deployment strategies.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-02-03",
      readTime: "10 min read",
      category: "DevOps",
      tags: ["Docker", "Containers", "DevOps", "Deployment"],
      image: "/blog/docker-guide.jpg",
      featured: true,
    },
    {
      id: 10,
      title: "GraphQL vs REST: Choosing the Right API Architecture",
      excerpt:
        "Comparative analysis of GraphQL and REST APIs with real-world use cases.",
      content:
        "<h2>API Architecture Comparison</h2><p>When to use GraphQL vs REST based on project requirements.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-01-28",
      readTime: "7 min read",
      category: "API",
      tags: ["GraphQL", "REST", "API", "Backend"],
      image: "/blog/graphql-vs-rest.jpg",
      featured: false,
    },
    {
      id: 11,
      title: "Web Security Best Practices for Modern Applications",
      excerpt:
        "Essential security practices every web developer should implement.",
      content:
        "<h2>Web Security Fundamentals</h2><p>Authentication, authorization, HTTPS, and common vulnerabilities.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-01-22",
      readTime: "9 min read",
      category: "Security",
      tags: ["Security", "Web", "Authentication", "HTTPS"],
      image: "/blog/web-security.jpg",
      featured: true,
    },
    {
      id: 12,
      title: "Progressive Web Apps (PWA): Building Offline-First Applications",
      excerpt:
        "Learn how to create PWAs that work offline and provide native app-like experience.",
      content:
        "<h2>PWA Development</h2><p>Service workers, manifest files, and offline functionality.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-01-18",
      readTime: "8 min read",
      category: "PWA",
      tags: ["PWA", "Offline", "Mobile", "Web App"],
      image: "/blog/pwa-guide.jpg",
      featured: false,
    },
    {
      id: 13,
      title: "JavaScript ES2023 New Features and Updates",
      excerpt:
        "Explore the latest JavaScript features and how to use them in your projects.",
      content:
        "<h2>ES2023 Features</h2><p>New array methods, language features, and syntax improvements.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "JavaScript",
      tags: ["JavaScript", "ES2023", "ECMAScript", "Frontend"],
      image: "/blog/es2023.jpg",
      featured: true,
    },
    {
      id: 14,
      title:
        "Microservices Architecture: Breaking Down Monolithic Applications",
      excerpt:
        "Guide to designing and implementing microservices architecture.",
      content:
        "<h2>Microservices Design</h2><p>Service decomposition, communication patterns, and deployment strategies.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Architecture",
      tags: ["Microservices", "Architecture", "Backend", "Scalability"],
      image: "/blog/microservices.jpg",
      featured: false,
    },
    {
      id: 15,
      title: "Testing React Applications with Jest and Testing Library",
      excerpt:
        "Complete testing strategy for React components and applications.",
      content:
        "<h2>React Testing</h2><p>Unit testing, integration testing, and best practices for testable code.</p>",
      author: "Abdullahi H Mu'az",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Testing",
      tags: ["Testing", "Jest", "React", "Quality"],
      image: "/blog/react-testing.jpg",
      featured: true,
    },
    {
      id: 16,
      title: "Web Accessibility (A11y): Building Inclusive Web Applications",
      excerpt:
        "Learn how to make your web applications accessible to everyone.",
      content:
        "<h2>Accessibility Basics</h2><p>ARIA attributes, keyboard navigation, and screen reader compatibility.</p>",
      author: "Abdullahi H Mu'az",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Accessibility",
      tags: ["Accessibility", "A11y", "Inclusive", "Web"],
      image: "/blog/web-accessibility.jpg",
      featured: false,
    },
    {
      id: 17,
      title: "Serverless Computing with AWS Lambda and API Gateway",
      excerpt:
        "Building scalable applications without managing servers using AWS serverless.",
      content:
        "<h2>Serverless Architecture</h2><p>Lambda functions, API Gateway, and serverless best practices.</p>",
      author: "Abdullahi H Mu'az",
      date: "2023-12-22",
      readTime: "10 min read",
      category: "Cloud",
      tags: ["AWS", "Serverless", "Lambda", "Cloud"],
      image: "/blog/serverless.jpg",
      featured: true,
    },
    {
      id: 18,
      title: "WebSockets: Real-time Communication in Web Applications",
      excerpt:
        "Implementing real-time features using WebSockets and Socket.io.",
      content:
        "<h2>Real-time Web</h2><p>WebSocket protocol, Socket.io implementation, and real-time use cases.</p>",
      author: "Abdullahi H Mu'az",
      date: "2023-12-18",
      readTime: "8 min read",
      category: "WebSockets",
      tags: ["WebSockets", "Real-time", "Socket.io", "Communication"],
      image: "/blog/websockets.jpg",
      featured: false,
    },
    {
      id: 19,
      title: "Machine Learning for Web Developers: TensorFlow.js Introduction",
      excerpt:
        "Getting started with machine learning in the browser using TensorFlow.js.",
      content:
        "<h2>ML in Browser</h2><p>TensorFlow.js basics, pre-trained models, and practical applications.</p>",
      author: "Abdullahi H Mu'az",
      date: "2023-12-12",
      readTime: "11 min read",
      category: "Machine Learning",
      tags: ["ML", "TensorFlow.js", "AI", "Web"],
      image: "/blog/tensorflow-js.jpg",
      featured: true,
    },
    {
      id: 20,
      title: "Career Growth for Software Developers: From Junior to Senior",
      excerpt: "Strategies for advancing your career in software development.",
      content:
        "<h2>Career Development</h2><p>Skill development, networking, and career progression strategies.</p>",
      author: "Abdullahi H Mu'az",
      date: "2023-12-08",
      readTime: "8 min read",
      category: "Career",
      tags: ["Career", "Development", "Growth", "Software Engineering"],
      image: "/blog/career-growth.jpg",
      featured: false,
    },
  ];

  const relatedPostsData = [
    {
      id: 2,
      title: "Introduction to Blockchain Development with Solidity",
      excerpt:
        "A comprehensive guide to getting started with blockchain development.",
      date: "2024-03-10",
      readTime: "12 min read",
      category: "Blockchain",
      image: "/blog/blockchain-intro.jpg",
    },
    {
      id: 3,
      title: "Next.js 14: What's New and How to Upgrade",
      excerpt:
        "Explore the latest features in Next.js 14 including Server Components.",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "Next.js",
      image: "/blog/nextjs-14.jpg",
    },
    {
      id: 5,
      title: "Mastering CSS Grid and Flexbox for Modern Layouts",
      excerpt:
        "Advanced techniques for creating responsive and complex layouts.",
      date: "2024-02-22",
      readTime: "7 min read",
      category: "CSS",
      image: "/blog/css-grid-flexbox.jpg",
    },
    {
      id: 7,
      title: "Building RESTful APIs with Express.js and MongoDB",
      excerpt: "Complete guide to creating robust REST APIs.",
      date: "2024-02-12",
      readTime: "11 min read",
      category: "Backend",
      image: "/blog/express-mongodb.jpg",
    },
    {
      id: 9,
      title: "Docker for Web Developers: Containerize Your Applications",
      excerpt: "Learn how to use Docker to containerize and deploy your apps.",
      date: "2024-02-03",
      readTime: "10 min read",
      category: "DevOps",
      image: "/blog/docker-guide.jpg",
    },
  ];

  // const relatedPostsData = [
  //   {
  //     id: 2,
  //     title: "Introduction to Blockchain Development with Solidity",
  //     excerpt:
  //       "A comprehensive guide to getting started with blockchain development.",
  //     date: "2024-03-10",
  //     readTime: "12 min read",
  //     category: "Blockchain",
  //     image: "/blog/blockchain-intro.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Next.js 14: What's New and How to Upgrade",
  //     excerpt:
  //       "Explore the latest features in Next.js 14 including Server Components.",
  //     date: "2024-03-05",
  //     readTime: "6 min read",
  //     category: "Next.js",
  //     image: "/blog/nextjs-14.jpg",
  //   },
  // ];

  useEffect(() => {
    // Always set loading to false after processing, regardless of outcome
    const timer = setTimeout(() => {
      if (id) {
        console.log("Looking for post with ID:", id); // Debug log
        const foundPost = blogPosts.find((p) => p.id === parseInt(id));
        if (foundPost) {
          setPost(foundPost);
          setRelatedPosts(
            relatedPostsData.filter((p) => p.id !== parseInt(id))
          );
        } else {
          console.log("Post not found for ID:", id); // Debug log
          setPost(null);
        }
      }
      setLoading(false); // Always set loading to false
    }, 100); // Small delay to prevent flash

    return () => clearTimeout(timer);
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const copyToClipboard = (text) => {
    if (navigator.clipboard && text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log("Copied to clipboard!");
          // You could add a toast notification here
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
        });
    }
  };

  const sharePost = (platform) => {
    if (typeof window !== "undefined" && post) {
      const url = window.location.href;
      const title = post.title;

      const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`,
      };

      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  // Debug logging
  console.log("Current state:", { id, loading, post: !!post });

  if (loading) {
    return (
      <ThemeProvider>
        <div className="blog-post-page">
          <Navbar />
          <div className="loading-container">
            <div className="loading-spinner">
              <i className="fas fa-spinner fa-spin"></i>
            </div>
            <p>Loading post...</p>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  if (!post) {
    return (
      <ThemeProvider>
        <div className="blog-post-page">
          <Navbar />
          <div className="error-container">
            <div className="error-content">
              <h1>Post Not Found</h1>
              <p>The blog post you're looking for doesn't exist.</p>
              <Link href="/blog" className="btn btn-primary">
                <i className="fas fa-arrow-left"></i>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="blog-post-page">
        <Navbar />

        {/* Breadcrumb */}
        <section className="breadcrumb-section">
          <div className="container">
            <nav className="breadcrumb">
              <Link href="/">Home</Link>
              <i className="fas fa-chevron-right"></i>
              <Link href="/blog">Blog</Link>
              <i className="fas fa-chevron-right"></i>
              <span>{post.category}</span>
            </nav>
          </div>
        </section>

        {/* Post Header */}
        <section className="post-header">
          <div className="container">
            <div className="post-header-content">
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{formatDate(post.date)}</span>
                <span className="post-read-time">{post.readTime}</span>
              </div>
              <h1 className="post-title">{post.title}</h1>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-author-info">
                <div className="author-avatar">
                  <img src="/avatar.jpg" alt={post.author} />
                </div>
                <div className="author-details">
                  <h4>By {post.author}</h4>
                  <p>Full-Stack Developer & Blockchain Enthusiast</p>
                </div>
                <div className="post-actions">
                  <button
                    className="action-btn"
                    onClick={() =>
                      copyToClipboard(
                        typeof window !== "undefined"
                          ? window.location.href
                          : ""
                      )
                    }
                    title="Copy Link"
                  >
                    <i className="fas fa-link"></i>
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => sharePost("twitter")}
                    title="Share on Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => sharePost("linkedin")}
                    title="Share on LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => sharePost("facebook")}
                    title="Share on Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="post-content-section">
          <div className="container">
            <div className="post-layout">
              {/* Main Content */}
              <article className="post-main">
                <div className="post-image">
                  <img
                    src={post.image || "/blog/default-post.jpg"}
                    alt={post.title}
                  />
                </div>

                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="post-tags">
                  <h4>Tags:</h4>
                  <div className="tags-list">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="post-share">
                  <h4>Share this post:</h4>
                  <div className="share-buttons">
                    <button
                      className="share-btn twitter"
                      onClick={() => sharePost("twitter")}
                    >
                      <i className="fab fa-twitter"></i>
                      Twitter
                    </button>
                    <button
                      className="share-btn facebook"
                      onClick={() => sharePost("facebook")}
                    >
                      <i className="fab fa-facebook-f"></i>
                      Facebook
                    </button>
                    <button
                      className="share-btn linkedin"
                      onClick={() => sharePost("linkedin")}
                    >
                      <i className="fab fa-linkedin-in"></i>
                      LinkedIn
                    </button>
                    <button
                      className="share-btn copy"
                      onClick={() =>
                        copyToClipboard(
                          typeof window !== "undefined"
                            ? window.location.href
                            : ""
                        )
                      }
                    >
                      <i className="fas fa-link"></i>
                      Copy Link
                    </button>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="post-sidebar">
                {/* Table of Contents */}
                <div className="sidebar-widget toc-widget">
                  <h3>Table of Contents</h3>
                  <div className="toc">
                    <ul>
                      <li>
                        <a href="#introduction">Introduction</a>
                      </li>
                      <li>
                        <a href="#component-architecture">
                          Component Architecture
                        </a>
                      </li>
                      <li>
                        <a href="#state-management">State Management</a>
                      </li>
                      <li>
                        <a href="#folder-structure">Folder Structure</a>
                      </li>
                      <li>
                        <a href="#performance-optimization">
                          Performance Optimization
                        </a>
                      </li>
                      <li>
                        <a href="#testing-strategy">Testing Strategy</a>
                      </li>
                      <li>
                        <a href="#conclusion">Conclusion</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Author Info */}
                <div className="sidebar-widget author-widget">
                  <h3>About the Author</h3>
                  <div className="author-info">
                    <div className="author-avatar">
                      <img src="/avatar.jpg" alt={post.author} />
                    </div>
                    <div className="author-details">
                      <h4>{post.author}</h4>
                      <p>
                        Full-Stack Developer passionate about modern web
                        technologies and blockchain development.
                      </p>
                      <div className="author-social">
                        <a
                          href="https://github.com/abdullahikhalilmuaz"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        <a
                          href="https://linkedin.com/in/muazdevy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          href="https://twitter.com/muazdevy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="sidebar-widget newsletter-widget">
                  <h3>Stay Updated</h3>
                  <p>Get the latest posts delivered right to your inbox.</p>
                  <form className="newsletter-form">
                    <input
                      type="email"
                      placeholder="Your email address"
                      required
                    />
                    <button type="submit" className="btn btn-primary">
                      Subscribe
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts-section">
            <div className="container">
              <h2 className="section-title">Related Posts</h2>
              <div className="related-posts-grid">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="related-post">
                    <div className="related-post-image">
                      <img
                        src={relatedPost.image || "/blog/default-post.jpg"}
                        alt={relatedPost.title}
                      />
                      <div className="post-overlay">
                        <div className="post-category">
                          {relatedPost.category}
                        </div>
                      </div>
                    </div>
                    <div className="related-post-content">
                      <div className="post-meta">
                        <span className="post-date">
                          {formatDate(relatedPost.date)}
                        </span>
                        <span className="post-read-time">
                          {relatedPost.readTime}
                        </span>
                      </div>
                      <h3>
                        <Link href={`/blog/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p>{relatedPost.excerpt}</p>
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="read-more"
                      >
                        Read More <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Comments Section */}
        <section className="comments-section">
          <div className="container">
            <div className="comments-container">
              <h2>Comments</h2>
              <div className="comments-placeholder">
                <div className="comment-info">
                  <i className="fas fa-comments"></i>
                  <h3>Join the Discussion</h3>
                  <p>
                    Comments are coming soon! For now, feel free to reach out on
                    social media to share your thoughts.
                  </p>
                  <div className="comment-social">
                    <a
                      href="https://twitter.com/muazdevy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <i className="fab fa-twitter"></i>
                      Tweet about this
                    </a>
                    <Link href="/contact" className="btn btn-primary">
                      <i className="fas fa-envelope"></i>
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="post-navigation">
          <div className="container">
            <div className="nav-links">
              <Link href="/blog" className="nav-link back-to-blog">
                <i className="fas fa-arrow-left"></i>
                Back to Blog
              </Link>
              <div className="nav-actions">
                <button
                  className="nav-action"
                  title="Scroll to top"
                  onClick={() =>
                    typeof window !== "undefined" && window.scrollTo(0, 0)
                  }
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default BlogPost;
