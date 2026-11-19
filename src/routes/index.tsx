import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Building2, Check, Clock3, FileText,
  HeartHandshake, Instagram, Landmark, MapPin, Menu, MessageCircle, Scale,
  ShieldCheck, Video, X
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamila Franco Advocacia | Advogada em Timon - MA" },
      { name: "description", content: "Kamila Franco Advocacia, em Timon–MA. Orientação jurídica em Direito Imobiliário, Civil e do Consumidor. Atendimento presencial e por videoconferência." },
      { name: "keywords", content: "advogada em Timon MA, advocacia em Timon, direito imobiliário em Timon, direito civil, direito do consumidor" },
      { property: "og:title", content: "Kamila Franco Advocacia | Timon - MA" },
      { property: "og:description", content: "Segurança jurídica, confiança e compromisso com seus direitos." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const phone = "5586988275060";
const wa = (message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const nav = [["Início", "#inicio"], ["Sobre", "#sobre"], ["Áreas de atuação", "#atuacao"], ["Diferenciais", "#diferenciais"], ["Contato", "#contato"]];

const areas = [
  { icon: Building2, title: "Direito Imobiliário", text: "Orientação jurídica em questões relacionadas a imóveis, propriedades e negócios imobiliários.", items: ["Usucapião", "Regularização de imóveis", "Elaboração e análise de contratos imobiliários", "Questões de propriedade e direitos imobiliários"] },
  { icon: Scale, title: "Direito Civil", text: "Atuação em demandas cíveis e relações jurídicas presentes no cotidiano.", items: ["Responsabilidade civil", "Direito de família", "Direito das sucessões", "Inventários e partilha de bens"] },
  { icon: ShieldCheck, title: "Direito do Consumidor", text: "Orientação sobre direitos e deveres nas relações entre consumidores e fornecedores.", items: ["Relações de consumo", "Direitos do consumidor", "Demandas judiciais e extrajudiciais", "Defesa nas relações de consumo"] },
];

const features = [
  { icon: HeartHandshake, title: "Atendimento personalizado", text: "Cada situação recebe atenção individualizada e escuta cuidadosa." },
  { icon: ShieldCheck, title: "Compromisso profissional", text: "Atuação pautada pela ética, responsabilidade e respeito às normas profissionais." },
  { icon: MessageCircle, title: "Clareza e transparência", text: "Orientações em linguagem acessível para compreender cada etapa." },
  { icon: Video, title: "Atendimento flexível", text: "Possibilidade de atendimento presencial em Timon ou por videoconferência." },
  { icon: FileText, title: "Dedicação", text: "Acompanhamento atento às particularidades de cada demanda apresentada." },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <header className="header">
        <div className="container nav-row">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Kamila Franco Advocacia - início">
            <span className="brand-symbol">KF</span><span className="brand-word">KAMILA FRANCO<small>ADVOCACIA</small></span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
            {nav.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="nav-contact" href={wa("Olá! Gostaria de informações sobre o atendimento jurídico.")} target="_blank" rel="noreferrer" onClick={closeMenu}>Fale com uma advogada <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" />
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div className="eyebrow eyebrow-light"><i /> ADVOCACIA · TIMON, MARANHÃO</div>
          <h1>Segurança jurídica,<br /><em>confiança</em> e compromisso<br />com seus direitos.</h1>
          <p>Atuação jurídica estratégica e personalizada, com atendimento humanizado e compromisso na busca pelas melhores soluções para cada caso.</p>
          <div className="hero-buttons">
            <a className="btn btn-gold" href="#atuacao">Conheça nossas áreas <ArrowRight size={17} /></a>
            <a className="btn btn-ghost" href={wa("Olá! Gostaria de conversar sobre uma questão jurídica.")} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Fale pelo WhatsApp</a>
          </div>
          <div className="hero-bottom"><span /> ATENDIMENTO PRESENCIAL E POR VIDEOCONFERÊNCIA</div>
        </div>
        <a href="#sobre" className="scroll-down" aria-label="Rolar para sobre"><ArrowDown size={18} /></a>
      </section>

      <section className="section about" id="sobre">
        <div className="container about-grid">
          <aside className="about-aside"><div className="eyebrow"><i /> KAMILA FRANCO ADVOCACIA</div><div className="quote-mark">“</div><p>A confiança começa com uma orientação clara e uma escuta atenta.</p><span className="gold-line" /></aside>
          <div className="about-text"><div className="kicker">SOBRE O ESCRITÓRIO</div><h2>Compromisso com seus direitos. <em>Dedicação a cada história.</em></h2><p className="large-copy">O Kamila Franco Advocacia é um escritório dedicado a oferecer orientação, acompanhamento e soluções jurídicas personalizadas, considerando as particularidades de cada situação.</p><p>Nosso trabalho é guiado pela ética, pela responsabilidade profissional e pela clareza na comunicação. Cada atendimento é conduzido com atenção às necessidades apresentadas, para que o cliente compreenda suas possibilidades e os próximos passos.</p><div className="check-grid">{["Atendimento individualizado", "Compromisso ético e profissional", "Clareza na orientação jurídica", "Atendimento presencial e online"].map(x => <div key={x}><Check size={16} />{x}</div>)}</div></div>
        </div>
      </section>

      <section className="lawyer-section">
        <div className="container lawyer-grid">
          <div className="lawyer-photo-wrap"><div className="lawyer-photo"><div className="photo-monogram">KF</div><span>ESPAÇO PARA FOTOGRAFIA<br />PROFISSIONAL DA ADVOGADA</span></div><div className="oab-stamp"><Scale size={21} /><small>OAB/PI</small><strong>14.791</strong></div></div>
          <div className="lawyer-copy"><div className="kicker">A ADVOGADA</div><h2>Uma atuação pautada pela <em>ética e dedicação.</em></h2><h3>Dra. Kamila Santos Franco Cordeiro</h3><div className="lawyer-sub">Advogada · OAB/PI 14.791</div><p>À frente do Kamila Franco Advocacia, a Dra. Kamila Santos Franco Cordeiro desenvolve uma atuação pautada pela ética, responsabilidade e dedicação. Com formação especializada em Direito Civil e Processual Civil, busca oferecer atendimento personalizado, orientação jurídica clara e acompanhamento cuidadoso de cada demanda.</p><div className="education"><Landmark size={20} /><div><strong>Pós-graduada</strong><span>Direito Civil e Processual Civil</span></div></div><a className="under-link" href={wa("Olá, Dra. Kamila. Gostaria de agendar um atendimento.")} target="_blank" rel="noreferrer">Entre em contato <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="section areas" id="atuacao">
        <div className="container"><div className="section-title"><div className="kicker">COMO PODEMOS ORIENTAR</div><h2>Áreas de <em>atuação</em></h2><p>Conheça as áreas jurídicas em que o escritório oferece orientação e acompanhamento profissional.</p></div>
          <div className="area-grid">{areas.map((a, i) => { const Icon = a.icon; return <article className="area-card" key={a.title}><div className="area-card-top"><span>0{i + 1}</span><Icon size={28} strokeWidth={1.4} /></div><h3>{a.title}</h3><p>{a.text}</p><ul>{a.items.map(item => <li key={item}><b />{item}</li>)}</ul><a href={wa(`Olá! Gostaria de informações sobre ${a.title}.`)} target="_blank" rel="noreferrer">Fale sobre seu caso <ArrowUpRight size={16} /></a></article>; })}</div>
          <p className="area-disclaimer">A análise de cada situação depende de suas circunstâncias e dos documentos apresentados.</p>
        </div>
      </section>

      <section className="features-section" id="diferenciais"><div className="container features-grid"><div className="features-intro"><div className="kicker kicker-light">NOSSA FORMA DE ATUAR</div><h2>Relações construídas com <em>confiança.</em></h2><p>O cuidado com cada atendimento está presente em todas as etapas da atuação profissional.</p><a className="btn btn-gold" href={wa("Olá! Gostaria de saber mais sobre o atendimento do escritório.")} target="_blank" rel="noreferrer">Converse conosco <ArrowRight size={17} /></a></div><div className="feature-list">{features.map((f, i) => { const Icon = f.icon; return <div className="feature-row" key={f.title}><span className="feature-num">0{i + 1}</span><Icon size={22} strokeWidth={1.5} /><div><h3>{f.title}</h3><p>{f.text}</p></div></div>; })}</div></div></section>

      <section className="section process"><div className="container"><div className="section-title"><div className="kicker">PRÓXIMOS PASSOS</div><h2>Como funciona o <em>atendimento</em></h2><p>Um caminho claro para compreender sua necessidade e avaliar as possibilidades de orientação jurídica.</p></div><div className="process-grid"><article><span>01</span><MessageCircle size={25} /><h3>Primeiro contato</h3><p>Entre em contato pelo WhatsApp e apresente, de forma inicial, o assunto sobre o qual deseja orientação.</p></article><article><span>02</span><FileText size={25} /><h3>Análise inicial</h3><p>Compreensão da situação apresentada e esclarecimento sobre os próximos passos possíveis.</p></article><article><span>03</span><Video size={25} /><h3>Atendimento jurídico</h3><p>Agendamento de atendimento presencial ou por videoconferência, conforme a necessidade.</p></article></div></div></section>

      <section className="contact-section" id="contato"><div className="container contact-grid"><div className="contact-info"><div className="kicker kicker-light">ESTAMOS À DISPOSIÇÃO</div><h2>Vamos conversar sobre <em>o que importa.</em></h2><p>Entre em contato para conhecer as possibilidades de atendimento do Kamila Franco Advocacia.</p><a className="btn btn-gold" href={wa("Olá! Gostaria de informações e agendamento de atendimento.")} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Iniciar conversa no WhatsApp</a><div className="contact-items"><div><MapPin /><p><strong>Endereço</strong><span>Centro Office — Rua Odilo Costa, nº 10, Centro<br />Timon – MA · CEP 65630-250</span></p></div><div><Clock3 /><p><strong>Horário de atendimento</strong><span>Segunda a sexta-feira, das 8h às 17h</span></p></div><div><Video /><p><strong>Modalidade</strong><span>Presencial em Timon – MA e por videoconferência</span></p></div><div><Instagram /><p><strong>Instagram</strong><a href="https://www.instagram.com/kamilafrancoadvogada/" target="_blank" rel="noreferrer">@kamilafrancoadvogada</a></p></div></div></div><div className="map-card"><div className="map-title"><span>ONDE ESTAMOS</span><strong>Timon, Maranhão</strong></div><iframe title="Mapa do Centro Office, Timon - MA" src="https://maps.google.com/maps?q=Centro%20Office%2C%20Rua%20Odilo%20Costa%2C%2010%2C%20Timon%20MA&t=&z=16&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href="https://www.google.com/maps/search/?api=1&query=Centro+Office%2C+Rua+Odilo+Costa%2C+10%2C+Centro%2C+Timon+-+MA%2C+65630-250" target="_blank" rel="noreferrer"><MapPin size={16} /> Abrir rota no Google Maps <ArrowUpRight size={15} /></a></div></div></section>

      <section className="closing"><div className="container closing-inner"><div><div className="kicker">KAMILA FRANCO ADVOCACIA</div><h2>Precisa de orientação <em>jurídica?</em></h2><p>Entre em contato e conheça as possibilidades de atendimento do escritório.</p></div><a className="btn btn-dark" href={wa("Olá! Preciso de orientação jurídica e gostaria de informações sobre o atendimento.")} target="_blank" rel="noreferrer">Fale conosco pelo WhatsApp <ArrowUpRight size={17} /></a></div></section>

      <footer className="footer"><div className="container footer-grid"><div><a className="brand footer-brand" href="#inicio"><span className="brand-symbol">KF</span><span className="brand-word">KAMILA FRANCO<small>ADVOCACIA</small></span></a><p>Dra. Kamila Santos Franco Cordeiro<br />Advogada · OAB/PI 14.791</p></div><div className="footer-col"><h4>NAVEGAÇÃO</h4>{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><div className="footer-col"><h4>CONTATO</h4><span>Centro Office — Rua Odilo Costa, nº 10</span><span>Centro, Timon – MA · CEP 65630-250</span><a href={wa("Olá! Gostaria de informações sobre o atendimento.")} target="_blank" rel="noreferrer">+55 86 98827-5060</a><span>Segunda a sexta, 8h às 17h</span><a href="https://www.instagram.com/kamilafrancoadvogada/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Kamila Franco Advocacia. Todos os direitos reservados.</span><span>Conteúdo informativo. Não substitui consulta jurídica individualizada.</span></div></footer>
      <a className="whatsapp-float" href={wa("Olá! Gostaria de informações sobre o atendimento do Kamila Franco Advocacia.")} target="_blank" rel="noreferrer" aria-label="Fale conosco pelo WhatsApp"><MessageCircle size={25} /></a>
    </main>
  );
}
