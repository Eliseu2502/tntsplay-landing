import { postStreaming2026 } from "./posts/streaming-2026";
import { post } from "./posts/o-que-e-streaming";
import { postStreamingLegal } from "./posts/streaming-autorizado-e-legal";
import { postEscolherPlataforma } from "./posts/como-escolher-uma-plataforma-de-streaming";

const posts = [
  postStreaming2026,
  post,
  postStreamingLegal,
  postEscolherPlataforma,
];

export default function PostPage() {
  const slug = window.location.pathname.replace("/blog/", "");
  const post = posts.find((item) => item.slug === slug) || postStreaming2026;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#030711",
        color: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <article style={{ maxWidth: 900, margin: "0 auto" }}>
        <a href="/blog" style={{ color: "#00e5ff", fontWeight: 800 }}>
          ← Voltar ao blog
        </a>

        <p
          style={{
            color: "#00e5ff",
            fontWeight: 800,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginTop: 50,
          }}
        >
          {post.category}
        </p>

        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 1.05,
            marginTop: 18,
            fontWeight: 950,
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            color: "#AEB9D1",
            lineHeight: 1.8,
            fontSize: 18,
            marginTop: 24,
          }}
        >
          {post.excerpt}
        </p>

        <div style={{ marginTop: 55 }}>
          {post.content.map((section) => (
            <section key={section.heading} style={{ marginBottom: 45 }}>
              <h2 style={{ fontSize: 30, marginBottom: 16 }}>
                {section.heading}
              </h2>

              <p
                style={{
                  color: "#AEB9D1",
                  lineHeight: 1.9,
                  fontSize: 18,
                }}
              >
                {section.text}
              </p>
            </section>
          ))}
        </div>

        <section
          style={{
            marginTop: 60,
            padding: 34,
            borderRadius: 24,
            border: "1px solid rgba(0,229,255,.28)",
            background: "rgba(0,229,255,.07)",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: 32 }}>Conheça a TntsPlay</h2>

          <p
            style={{
              marginTop: 16,
              color: "#AEB9D1",
              lineHeight: 1.8,
              fontSize: 18,
            }}
          >
            Plataforma moderna para clientes finais e revendedores autorizados.
            Acesse a página principal e escolha a melhor opção para você.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 16,
              marginTop: 28,
            }}
          >
            <a
              href="/"
              style={{
                padding: "16px 26px",
                borderRadius: 14,
                background: "#00e5ff",
                color: "#030711",
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Ir para a Landing Page
            </a>

            <a
              href="/"
              style={{
                padding: "16px 26px",
                borderRadius: 14,
                border: "1px solid rgba(0,229,255,.45)",
                color: "#00e5ff",
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Ver opções para Revenda
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}