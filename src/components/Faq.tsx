import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const questions = [
  {
    question: "Como faço para contratar?",
    answer:
      "Clique em 'Quero Assinar' e nossa equipe realizará todo o atendimento pelo WhatsApp.",
  },
  {
    question: "Como funciona a revenda?",
    answer:
      "Após o contato, apresentamos o programa de revenda, fornecemos o painel e todo o suporte para começar.",
  },
  {
    question: "O atendimento é rápido?",
    answer:
      "Sim. Nossa equipe procura responder o mais rápido possível durante o horário de atendimento.",
  },
  {
    question: "Posso falar diretamente pelo WhatsApp?",
    answer:
      "Sim. Todos os botões da página direcionam diretamente para nosso WhatsApp.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      style={{
        padding: "120px 0",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "900px",
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: 800,
            marginBottom: "20px",
          }}
        >
          Perguntas{" "}
          <span
            style={{
              color: "#00E5FF",
            }}
          >
            Frequentes
          </span>
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            color: "#AEB9D1",
            marginBottom: "60px",
            lineHeight: 1.8,
          }}
        >
          Tire suas dúvidas antes de entrar em contato.
        </p>

        {questions.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.01,
            }}
            className="glass"
            style={{
              marginBottom: "18px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              style={{
                width: "100%",
                background: "transparent",
                color: "white",
                padding: "24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {item.question}

              <FaChevronDown
                style={{
                  transform:
                    open === index
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  transition: ".3s",
                }}
              />
            </button>

            {open === index && (
              <div
                style={{
                  padding: "0 24px 24px",
                  color: "#AEB9D1",
                  lineHeight: 1.8,
                }}
              >
                {item.answer}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}