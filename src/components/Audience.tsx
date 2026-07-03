import { motion } from "framer-motion";
import { FaUser, FaUsers, FaWhatsapp } from "react-icons/fa";

const CLIENT_URL =
  "https://wa.me/5511922034310?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20PLANOS.";

const RESELLER_URL =
  "https://api.whatsapp.com/send?phone=447832818548&text=Olá, vim do site e gostaria de mais informações sobre REVENDA.";

export default function Audience() {
  return (
    <section
      style={{
        padding: "120px 0",
      }}
    >
      <div className="container">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: 800,
            marginBottom: 20,
          }}
        >
          Escolha seu{" "}
          <span style={{ color: "#00E5FF" }}>
            Perfil
          </span>
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto 70px",
            color: "#AEB9D1",
            lineHeight: 1.8,
          }}
        >
          A plataforma foi desenvolvida tanto para quem deseja assistir quanto
          para empreendedores que querem iniciar um negócio.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
            gap: 35,
          }}
        >
          <motion.div
            whileHover={{ y: -10 }}
            className="glass"
            style={{
              padding: 40,
            }}
          >
            <FaUser
              size={55}
              color="#00E5FF"
            />

            <h3
              style={{
                marginTop: 25,
                fontSize: 28,
              }}
            >
              Cliente Final
            </h3>

            <p
              style={{
                marginTop: 20,
                color: "#AEB9D1",
                lineHeight: 1.8,
              }}
            >
              Aproveite uma plataforma moderna, rápida e intuitiva para toda
              sua família.
            </p>

            <a
              href={CLIENT_URL}
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="btn-primary"
                style={{
                  marginTop: 35,
                  width: "100%",
                }}
              >
                <FaWhatsapp />

                <span>QUERO ASSINAR</span>
              </button>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="glass"
            style={{
              padding: 40,
            }}
          >
            <FaUsers
              size={55}
              color="#00E5FF"
            />

            <h3
              style={{
                marginTop: 25,
                fontSize: 28,
              }}
            >
              Revendedor
            </h3>

            <p
              style={{
                marginTop: 20,
                color: "#AEB9D1",
                lineHeight: 1.8,
              }}
            >
              Tenha acesso ao painel de revenda e desenvolva uma renda recorrente
              com suporte especializado.
            </p>

            <a
              href={RESELLER_URL}
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="btn-primary"
                style={{
                  marginTop: 35,
                  width: "100%",
                }}
              >
                <FaWhatsapp />

                <span>QUERO REVENDER</span>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}