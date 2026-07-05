import { postStreaming2026 } from "./posts/streaming-2026";
import { post } from "./posts/o-que-e-streaming";
import { postStreamingLegal } from "./posts/streaming-autorizado-e-legal";

const posts = [
  postStreaming2026,
  post,
  postStreamingLegal,
];

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
              marginBottom: 18,
            }}
          >
            Blog TntsPlay
          </p>

          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 72px)",
              lineHeight: 1,
              fontWeight: 950,
              textTransform: "uppercase",
            }}
          >
            Conteúdos sobre <br />
            <span
              style={{
                color: "#00e5ff",
                textShadow: "0 0 25px rgba(0,229,255,.6)",
              }}
            >
              Streaming
            </span>
          </h1>

          <p
            style={{
              maxWidth: 760,
              margin: "28px auto 0",
              color: "#AEB9D1",
              lineHeight: 1.8,
              fontSize: 18,
            }}
          >
            Artigos criados para ajudar clientes e revendedores a entenderem
            melhor o mercado de streaming, tecnologia e entretenimento digital.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 26,
          }}
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                border: "1px solid rgba(0,229,255,.22)",
                borderRadius: 24,
                background: "rgba(0,229,255,.055)",
                padding: 28,
              }}
            >
              <span
                style={{
                  color: "#00e5ff",
                  fontSize: 13,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                {post.category}
              </span>

              <h2
                style={{
                  marginTop: 18,
                  fontSize: 28,
                  lineHeight: 1.2,
                }}
              >
                {post.title}
              </h2>

              <p
                style={{
                  color: "#AEB9D1",
                  lineHeight: 1.8,
                  marginTop: 18,
                }}
              >
                {post.excerpt}
              </p>

              <a
                href={`/blog/${post.slug}`}
                style={{
                  display: "inline-block",
                  marginTop: 26,
                  color: "#00e5ff",
                  fontWeight: 800,
                }}
              >
                Ler artigo →
              </a>
            </article>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: 70,
          }}
        >
          <a
            href="/"
            style={{
              color: "#00e5ff",
              fontWeight: 800,
            }}
          >
            ← Voltar para a página inicial
          </a>
        </div>
      </section>
    </main>
  );
}