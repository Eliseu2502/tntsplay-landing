import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaMobileAlt,
  FaPlayCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "1. Escolha seu perfil",
    description:
      "Selecione se deseja utilizar a plataforma como cliente ou iniciar como revendedor autorizado.",
  },
  {
    icon: <FaMobileAlt />,
    title: "2. Entre em contato",
    description:
      "Nossa equipe realiza todo o atendimento pelo WhatsApp de forma rápida e personalizada.",
  },
  {
    icon: <FaPlayCircle />,
    title: "3. Aproveite a plataforma",
    description:
      "Receba seu acesso ou painel de revenda e comece imediatamente.",
  },
];

export default function HowItWorks() {
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
            Como{" "}
            <span style={{ color: "#00E5FF" }}>
              Funciona
            </span>
          </h2>

          <p
            style={{
              textAlign: "center",
              maxWidth: 700,
              margin: "0 auto 70px",
              color: "#AEB9D1",
              lineHeight: 1.8,
            }}
          >
            Em poucos passos você começa a utilizar a plataforma ou inicia
            sua operação como revendedor.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: 30,
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="glass"
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
                style={{
                  padding: 35,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 46,
                    color: "#00E5FF",
                    marginBottom: 25,
                  }}
                >
                  {step.icon}
                </div>

                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    marginBottom: 18,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "#AEB9D1",
                    lineHeight: 1.8,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}