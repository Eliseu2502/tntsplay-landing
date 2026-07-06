import { useState } from "react";
import { posts } from "./posts/index.ts";

const categories = ["Todos", "Streaming", "Revenda", "Tecnologia"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredPosts = posts.filter((post) => {
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "Todos" || post.category === category;

    return matchSearch && matchCategory;
  });

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

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
            marginBottom: 60,
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
            Blog TntsPlay
          </p>

          <h1
            style={{
              fontSize: "clamp(42px,6vw,72px)",
              fontWeight: 950,
              marginTop: 15,
              lineHeight: 1,
            }}
          >
            Conteúdos sobre Streaming
          </h1>

          <p
            style={{
              color: "#AEB9D1",
              maxWidth: 760,
              margin: "24px auto 0",
              lineHeight: 1.8,
              fontSize: 18,
            }}
          >
            Aprenda sobre streaming, tecnologia, revenda e oportunidades no
            mercado digital.
          </p>
        </div>

        <div
          style={{
            maxWidth: 760,
            margin: "0 auto 32px",
          }}
        >
          <input
            type="text"
            placeholder="Pesquisar artigos..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            style={{
              width: "100%",
              padding: "18px 22px",
              borderRadius: 16,
              border: "1px solid rgba(0,229,255,.28)",
              background: "rgba(0,229,255,.055)",
              color: "#ffffff",
              outline: "none",
              fontSize: 16,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 60,
          }}
        >
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                border:
                  category === item
                    ? "1px solid #00e5ff"
                    : "1px solid rgba(255,255,255,.12)",
                background:
                  category === item
                    ? "rgba(0,229,255,.16)"
                    : "rgba(255,255,255,.04)",
                color: category === item ? "#00e5ff" : "#AEB9D1",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {featuredPost && (
          <section
            style={{
              marginBottom: 70,
              padding: 36,
              borderRadius: 28,
              border: "1px solid rgba(0,229,255,.28)",
              background:
                "linear-gradient(135deg, rgba(0,229,255,.12), rgba(0,229,255,.035))",
            }}
          >
            <p
              style={{
                color: "#00e5ff",
                fontWeight: 900,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Artigo em destaque
            </p>

            <h2
              style={{
                fontSize: "clamp(32px,5vw,52px)",
                lineHeight: 1.1,
              }}
            >
              {featuredPost.title}
            </h2>

            <p
              style={{
                color: "#AEB9D1",
                marginTop: 20,
                lineHeight: 1.8,
                fontSize: 18,
                maxWidth: 780,
              }}
            >
              {featuredPost.excerpt}
            </p>

            <a
              href={`/blog/${featuredPost.slug}`}
              style={{
                display: "inline-block",
                marginTop: 28,
                color: "#030711",
                background: "#00e5ff",
                padding: "16px 26px",
                borderRadius: 14,
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Ler artigo →
            </a>
          </section>
        )}

        <h2
          style={{
            fontSize: 34,
            marginBottom: 28,
          }}
        >
          Últimos artigos
        </h2>

        {otherPosts.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 25,
            }}
          >
            {otherPosts.map((post) => (
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
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                  }}
                >
                  {post.category}
                </small>

                <h3
                  style={{
                    marginTop: 15,
                    fontSize: 26,
                    lineHeight: 1.2,
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    color: "#AEB9D1",
                    marginTop: 18,
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
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  Ler artigo →
                </a>
              </article>
            ))}
          </div>
        ) : (
          <p
            style={{
              color: "#AEB9D1",
              textAlign: "center",
              marginTop: 40,
            }}
          >
            Nenhum artigo encontrado.
          </p>
        )}

        <section
          style={{
            marginTop: 80,
            padding: 36,
            borderRadius: 26,
            border: "1px solid rgba(0,229,255,.28)",
            background: "rgba(0,229,255,.07)",
            textAlign: "center",
          }}
        >
          <h2>Conheça a TntsPlay</h2>

          <p
            style={{
              color: "#AEB9D1",
              marginTop: 16,
              lineHeight: 1.8,
              fontSize: 18,
            }}
          >
            Plataforma moderna para clientes finais e revendedores autorizados.
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
      </section>
    </main>
  );
}