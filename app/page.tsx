import { ArrowDown, ArrowRight, CalendarDays, Check, ClipboardList, Dumbbell, Flame, LineChart, Menu, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Users, title: "Clientes", text: "Toda la información de tus clientes organizada y siempre a mano." },
  { icon: Dumbbell, title: "Entrenamientos", text: "Crea y asigna planes de entrenamiento personalizados." },
  { icon: CalendarDays, title: "Calendario", text: "Organiza sesiones y agenda desde un único lugar." },
  { icon: LineChart, title: "Seguimiento", text: "Consulta la evolución y el progreso de cada cliente." },
];
const plans = [
  { icon: Dumbbell, level: "PARA EMPEZAR", name: "Starter", description: "Todo lo esencial para entrenar con orden.", price: "19", features: ["Hasta 10 clientes", "Rutinas personalizadas", "Calendario de sesiones", "Seguimiento básico"] },
  { icon: Flame, level: "PARA SUBIR DE NIVEL", name: "Pro", description: "Más herramientas para llevar tu coaching más lejos.", price: "39", popular: true, features: ["Clientes ilimitados", "Rutinas y plantillas avanzadas", "Seguimiento del progreso", "Recordatorios automáticos", "Informes de evolución"] },
  { icon: Users, level: "PARA EQUIPOS", name: "Studio", description: "Todo tu equipo y tu comunidad, conectados.", price: "79", features: ["Todo lo incluido en Pro", "Hasta 5 entrenadores", "Gestión de equipo", "Panel de actividad del centro", "Soporte prioritario"] },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="site-nav wrap">
          <a className="brand" href="#inicio" aria-label="FitManager, inicio"><span className="brand-mark">F</span>FitManager</a>
          <nav className="nav-links" aria-label="Navegación principal">
            <a href="#problema">El problema</a><a href="#solucion">La solución</a><a href="#funciones">Funciones</a><a href="#planes">Planes</a>
          </nav>
          <Button nativeButton={false} render={<a href="#contacto" />} className="nav-cta">Quiero probarlo <ArrowRight size={16} /></Button>
          <a className="mobile-menu" href="#planes" aria-label="Ir a los planes"><Menu /></a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-shade" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="pulse-dot" /> Plataforma para entrenadores personales</span>
            <h1>Gestiona tus clientes.<br /><span>Entrena sin complicaciones.</span></h1>
            <p>FitManager centraliza clientes, entrenamientos, calendario y seguimiento en una única plataforma.</p>
            <div className="hero-actions"><Button nativeButton={false} render={<a href="#contacto" />} size="lg" className="hero-button">Quiero probar FitManager <ArrowRight size={17} /></Button><a className="text-link" href="#solucion">Descubrir más <ArrowDown size={15} /></a></div>
            <div className="hero-proof"><div className="proof-avatars"><span>AM</span><span>DL</span><span>JR</span></div><p><strong>Todo tu negocio, en orden.</strong><br />Más tiempo para tus clientes.</p></div>
          </div>
          <div className="dashboard" aria-label="Vista previa del panel de FitManager">
            <div className="dash-top"><span className="dash-brand"><span className="brand-mark small">F</span> FitManager</span><span className="dash-avatar">JD</span></div>
            <div className="dash-body">
              <div className="dash-heading"><div><span className="muted">Buenos días,</span><h2>Javier <span aria-hidden="true">👋</span></h2></div><span className="dash-date">LUN, 14 OCT.</span></div>
              <div className="dash-stats"><div><span>CLIENTES</span><strong>24</strong><small className="positive">+3 este mes</small></div><div><span>SESIONES</span><strong>08</strong><small>Esta semana</small></div><div><span>RUTINAS</span><strong>32</strong><small>Activas</small></div></div>
              <div className="dash-sessions"><div className="dash-section-title"><h3>Próximas sesiones</h3><a href="#contacto">Ver agenda <ArrowRight size={13} /></a></div>
                <div className="session-row"><span className="session-avatar lime">AM</span><div><strong>Ana Martínez</strong><small>Entrenamiento personal · 17:00</small></div><span className="session-tag">HOY</span></div>
                <div className="session-row"><span className="session-avatar gray">DL</span><div><strong>David López</strong><small>Fuerza · 18:30</small></div><span className="session-tag">HOY</span></div>
              </div>
              <div className="dash-tip"><LineChart size={17} /><span><strong>Tu negocio está en marcha</strong><small>Has completado 8 sesiones esta semana.</small></span><span className="tip-value">+12%</span></div>
            </div>
          </div>
        </div>
        <div className="hero-bottom wrap"><span>HECHO PARA ENTRENADORES QUE VAN EN SERIO</span><span>CLIENTES <b>·</b> RUTINAS <b>·</b> RESULTADOS</span></div>
      </section>

      <section className="section problem-section" id="problema">
        <div className="wrap"><div className="section-heading"><span className="section-kicker">EL PROBLEMA</span><h2>Tu trabajo es entrenar.<br /><span>¿Por qué pasas el día organizando?</span></h2><p>Cuando cada parte de tu negocio vive en una aplicación distinta, gestionar acaba quitándote tiempo y energía.</p></div>
          <div className="problem-grid">
            <article className="problem-card"><span className="problem-icon"><MessageCircle /></span><h3>WhatsApp</h3><p>Mensajes, cambios de hora y conversaciones perdidas.</p><span className="card-index">01</span></article>
            <article className="problem-card"><span className="problem-icon"><CalendarDays /></span><h3>Calendarios</h3><p>Sesiones repartidas entre agendas y recordatorios.</p><span className="card-index">02</span></article>
            <article className="problem-card"><span className="problem-icon"><ClipboardList /></span><h3>Hojas de cálculo</h3><p>Datos y seguimiento guardados en mil sitios.</p><span className="card-index">03</span></article>
            <article className="problem-card"><span className="problem-icon"><Dumbbell /></span><h3>Otras aplicaciones</h3><p>Rutinas y planes en herramientas desconectadas.</p><span className="card-index">04</span></article>
          </div>
          <div className="problem-result"><span className="result-mark">!</span><p><strong>¿El resultado?</strong> Información dispersa y menos tiempo para hacer crecer tu negocio.</p><ArrowRight className="result-arrow" /></div>
        </div>
      </section>

      <section className="solution-section" id="solucion">
        <div className="wrap solution-grid"><div className="solution-copy"><span className="section-kicker">LA SOLUCIÓN</span><h2>Todo lo que necesitas.<br /><span>En un solo lugar.</span></h2><p>FitManager reúne la gestión diaria de tu negocio para que puedas centrarte en las personas a las que ayudas.</p><Button nativeButton={false} render={<a href="#funciones" />} size="lg" className="solution-button">Descubre las funciones <ArrowRight size={17} /></Button><div className="solution-note"><Check size={16} /> Sencillo de usar desde el primer día</div></div>
          <div className="feature-list" id="funciones">{features.map(({ icon: Icon, title, text }, i) => <article className="feature-row" key={title}><span className="feature-icon"><Icon size={21} /></span><div><span className="feature-number">0{i + 1} / FUNCIÓN</span><h3>{title}</h3><p>{text}</p></div><ArrowRight className="feature-arrow" size={18} /></article>)}</div>
        </div>
      </section>

      <section className="pricing-section" id="planes"><div className="wrap"><div className="section-heading"><span className="section-kicker">TU NEGOCIO, A OTRO NIVEL</span><h2>Elige tu ritmo.<br /><span>Nosotros ponemos el equipo.</span></h2><p>Planes flexibles para dedicar menos tiempo a organizar y más a hacer crecer tu comunidad.</p></div>
        <div className="pricing-grid">{plans.map(({ icon: Icon, level, name, description, price, popular, features: items }) => <article className={`price-card${popular ? " price-featured" : ""}`} key={name}>{popular && <span className="popular-label">MÁS ELEGIDO</span>}<span className="plan-icon"><Icon size={22} /></span><span className="plan-level">{level}</span><h3>{name}</h3><p className="plan-description">{description}</p><p className="plan-price"><strong>{price} €</strong><span> / mes</span></p><Button nativeButton={false} render={<a href={`mailto:contacto@fitmanager.es?subject=Plan%20${name}`} />} className={popular ? "plan-button featured-button" : "plan-button"}>{name === "Starter" ? "Empezar con Starter" : `Elegir ${name}`} <ArrowRight size={16} /></Button><ul>{items.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul></article>)}</div>
        <p className="pricing-note">Todos los planes incluyen 14 días de prueba. Cancela cuando quieras.</p>
      </div></section>

      <section className="contact-section" id="contacto"><div className="wrap contact-inner"><div><span className="section-kicker">FITMANAGER</span><h2>Menos tiempo gestionando.<br /><span>Más tiempo entrenando.</span></h2><p>Estamos creando una nueva forma de gestionar el día a día de los entrenadores personales.</p></div><Button nativeButton={false} render={<a href="mailto:contacto@fitmanager.es?subject=Quiero%20probar%20FitManager" />} size="lg" className="contact-button">Quiero probar FitManager <ArrowRight size={17} /></Button></div></section>

      <footer className="site-footer"><div className="wrap footer-inner"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">F</span>FitManager</a><p>© 2026 FitManager. Proyecto DAW.</p><a href="#inicio" className="back-top">Volver arriba ↑</a></div></footer>
    </main>
  );
}


