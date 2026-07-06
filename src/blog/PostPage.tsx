import { posts } from "./posts";

export default function PostPage() {
  const slug = window.location.pathname.replace("/blog/", "");

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
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
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1>Artigo não encontrado</h1>

          <a
            href="/blog"
            style={{
              display: "inline-block",
              marginTop: 30,
              color: "#00e5ff",
              fontWeight: 800,
            }}
          >
            Voltar para o blog
          </a>
        </section>
      </main>
    );
  }

  const relatedPosts = posts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#030711",
        color: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <article
        style={{
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <a
          href="/blog"
          style={{
            color: "#00e5ff",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
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
            fontSize: "clamp(36px,6vw,64px)",
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

        <div
          style={{
            marginTop: 55,
          }}
        >
          {post.content.map((section: { heading: string; text: string }) => (
            <section
              key={section.heading}
              style={{
                marginBottom: 45,
              }}
            >
              <h2
                style={{
                  fontSize: 30,
                  marginBottom: 16,
                }}
              >
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
            padding: 32,
            borderRadius: 24,
            border: "1px solid rgba(0,229,255,.22)",
            background: "rgba(0,229,255,.055)",
          }}
        >
          <h2>Continue aprendendo</h2>

          <div
            style={{
              marginTop: 22,
              display: "grid",
              gap: 14,
            }}
          >
            {relatedPosts.map((item) => (
              <a
                key={item.slug}
                href={`/blog/${item.slug}`}
                style={{
                  color: "#00e5ff",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                → {item.title}
              </a>
            ))}
          </div>
        </section>

        <section
          style={{
            marginTop: 40,
            padding: 34,
            borderRadius: 24,
            border: "1px solid rgba(0,229,255,.28)",
            background: "rgba(0,229,255,.07)",
            textAlign: "center",
          }}
        >
          <h2>Conheça a TntsPlay</h2>

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

          <a
            href="/"
            style={{
              display: "inline-block",
              marginTop: 26,
              padding: "16px 28px",
              borderRadius: 14,
              background: "#00e5ff",
              color: "#030711",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Ir para a Landing Page
          </a>
        </section>
      </article>
    </main>
  );
}