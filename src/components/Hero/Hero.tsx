import { motion } from "framer-motion";

import HeroBackground from "./HeroBackground";
import HeroHUD from "./HeroHUD";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="jarvis-hero">

      <HeroBackground />

      <div className="container">

        <motion.div
          className="jarvis-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <HeroHUD />

          <div className="hero-chip">
            INTELIGÊNCIA • STREAMING • TECNOLOGIA
          </div>

          <h1>

            O FUTURO DA

            <span> STREAMING </span>

            COMEÇA AQUI

          </h1>

          <p>

            Plataforma moderna para clientes e revendedores autorizados,
            desenvolvida para oferecer velocidade, estabilidade
            e uma experiência premium.

          </p>

          <HeroButtons />

          <HeroStats />

        </motion.div>

      </div>

    </section>
  );
}