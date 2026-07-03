import { FaUser, FaUsers } from "react-icons/fa";

const CLIENT_URL =
  "https://wa.me/5511922034310?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20PLANOS.";

const RESELLER_URL =
  "https://api.whatsapp.com/send?phone=447832818548&text=Olá, vim do site e gostaria de mais informações sobre REVENDA.";

export default function HeroButtons() {
  return (
    <div className="jarvis-actions">
      <a href={CLIENT_URL} target="_blank" rel="noreferrer">
        <button className="jarvis-button primary-action">
          <FaUser />
          <div>
            <strong>CLIENTE FINAL</strong>
            <span>Quero assinar agora</span>
          </div>
        </button>
      </a>

      <a href={RESELLER_URL} target="_blank" rel="noreferrer">
        <button className="jarvis-button secondary-action">
          <FaUsers />
          <div>
            <strong>REVENDEDOR</strong>
            <span>Quero iniciar meu negócio</span>
          </div>
        </button>
      </a>
    </div>
  );
}