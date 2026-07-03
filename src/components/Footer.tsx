export default function Footer() {
  return (
    <footer
      style={{
        padding: "80px 0 40px",
        borderTop: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div className="container">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src="/logo.png"
            alt="TntsPlay"
            style={{
              width: 170,
              marginBottom: 20,
            }}
          />

          <p
            style={{
              color: "#AEB9D1",
              maxWidth: 700,
              lineHeight: 1.8,
              margin: "0 auto",
            }}
          >
            Plataforma moderna desenvolvida para oferecer uma experiência
            completa para clientes e revendedores.
          </p>
        </div>

        <div
          style={{
            marginTop: 60,
            textAlign: "center",
            color: "#6F7A91",
            borderTop: "1px solid rgba(255,255,255,.08)",
            paddingTop: 25,
          }}
        >
          © {new Date().getFullYear()} TntsPlay. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}