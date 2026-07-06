import { posts } from "./posts";

export default function BlogPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#030711",
        color: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 70,
          }}
        >
          <p
            style={{
              color: "#00e5ff",
              fontWeight: 800,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            BLOG TNTSPLAY
          </p>

          <h1
            style={{
              fontSize: "clamp(42px,6vw,72px)",
              fontWeight: 900,
              marginTop: 15,
            }}
          >
            Conteúdos sobre Streaming
          </h1>

          <p
            style={{
              color: "#AEB9D1",
              maxWidth: 720,
              margin: "20px auto 0",
              lineHeight: 1.8,
            }}
          >
            Aprenda mais sobre Streaming, IPTV, Tecnologia,
            Revenda e novidades do mercado digital.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 25,
          }}
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                background: "#0A1223",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 22,
                padding: 30,
              }}
            >
              <small
                style={{
                  color: "#00e5ff",
                  fontWeight: 700,
                }}
              >
                {post.category}
              </small>

              <h2
                style={{
                  marginTop: 15,
                  fontSize: 28,
                }}
              >
                {post.title}
              </h2>

              <p
                style={{
                  color: "#AEB9D1",
                  marginTop: 20,
                  lineHeight: 1.8,
                }}
              >
                {post.excerpt}
              </p>

              <a
                href={`/blog/${post.slug}`}
                style={{
                  display: "inline-block",
                  marginTop: 25,
                  color: "#00e5ff",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Ler artigo →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}