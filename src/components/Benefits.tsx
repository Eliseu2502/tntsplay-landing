import { motion } from "framer-motion";
import {
  FaBolt,
  FaShieldAlt,
  FaHeadset,
  FaRocket,
  FaTv,
  FaInfinity,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaTv />,
    title: "Catálogo Completo",
    description:
      "Filmes, séries, canais ao vivo e conteúdos sempre atualizados.",
  },
  {
    icon: <FaBolt />,
    title: "Alta Performance",
    description:
      "Servidores rápidos e estáveis para uma experiência contínua.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Segurança",
    description:
      "Plataforma protegida com infraestrutura moderna.",
  },
  {
    icon: <FaHeadset />,
    title: "Suporte",
    description:
      "Equipe pronta para atender clientes e revendedores.",
  },
  {
    icon: <FaRocket />,
    title: "Ativação Rápida",
    description:
      "Processo simples para começar a utilizar imediatamente.",
  },
  {
    icon: <FaInfinity />,
    title: "Programa de Revenda",
    description:
      "Estrutura preparada para quem deseja criar um negócio recorrente.",
  },
];

export default function Benefits() {
  return (
    <section
      style={{
        padding: "120px 0",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "3rem",
              fontWeight: 800,
              marginBottom: 20,
            }}
          >
            Por que escolher a{" "}
            <span style={{ color: "#00E5FF" }}>
              TntsPlay
            </span>
            ?
          </h2>

          <p
            style={{
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto 70px",
              color: "#AEB9D1",
              lineHeight: 1.8,
            }}
          >
            Desenvolvemos uma plataforma moderna, intuitiva e preparada
            para oferecer uma experiência premium tanto para clientes
            quanto para revendedores.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(300px,1fr))",
              gap: 25,
            }}
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="glass"
                style={{
                  padding: 35,
                }}
              >
                <div
                  style={{
                    fontSize: 40,
                    color: "#00E5FF",
                    marginBottom: 25,
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: 24,
                    marginBottom: 15,
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#AEB9D1",
                    lineHeight: 1.8,
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}