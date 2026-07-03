export default function HeroHUD() {
  return (
    <div className="hero-hud">
      <div className="hud-ring outer-ring" />
      <div className="hud-ring middle-ring" />
      <div className="hud-ring inner-ring" />

      <div className="hud-core">
        <img src="/logo.png" alt="TntsPlay" />
      </div>

      <div className="hud-status">
        <span className="status-dot" />
        SISTEMA ONLINE
      </div>
    </div>
  );
}