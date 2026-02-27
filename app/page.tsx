import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* ── Navigation ── */}
      <nav className={styles.nav}>
        <a href="#" className={styles.navLogo}>
          HB
        </a>
        <ul className={styles.navLinks}>
          <li>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
          </li>
          <li>
            <a href="#blog" className={styles.navLink}>
              Blog
            </a>
          </li>
        </ul>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <h1 className={styles.name}>Henry Burke</h1>
        <p className={styles.tagline}>Software Engineer</p>
        <div className={styles.heroLinks}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.connectLink}
          >
            Resume <span className={styles.connectArrow}>&rarr;</span>
          </a>
          <a
            href="https://linkedin.com/in/hqburke"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.connectLink}
          >
            LinkedIn <span className={styles.connectArrow}>&rarr;</span>
          </a>
          <a
            href="https://github.com/Pigf00d"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.connectLink}
          >
            GitHub <span className={styles.connectArrow}>&rarr;</span>
          </a>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className={styles.section}>
        <p className={styles.sectionLabel}>Work</p>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h3 className={styles.projectName}>Project One</h3>
            <p className={styles.projectDesc}>
              A brief description of what this project does and the problem it
              solves.
            </p>
            <div className={styles.projectTags}>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>TypeScript</span>
            </div>
          </div>
          <div className={styles.projectCard}>
            <h3 className={styles.projectName}>Project Two</h3>
            <p className={styles.projectDesc}>
              A brief description of what this project does and the problem it
              solves.
            </p>
            <div className={styles.projectTags}>
              <span className={styles.tag}>Next.js</span>
              <span className={styles.tag}>Node</span>
            </div>
          </div>
          <div className={styles.projectCard}>
            <h3 className={styles.projectName}>Project Three</h3>
            <p className={styles.projectDesc}>
              A brief description of what this project does and the problem it
              solves.
            </p>
            <div className={styles.projectTags}>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>AWS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section id="blog" className={styles.section}>
        <p className={styles.sectionLabel}>Writing</p>
        <h2 className={styles.sectionTitle}>Blog</h2>
        <div className={styles.blogList}>
          <a href="#" className={styles.blogItem}>
            <span className={styles.blogTitle}>Coming Soon</span>
            <span className={styles.blogDate}>Stay tuned</span>
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Henry Burke
      </footer>
    </>
  );
}
