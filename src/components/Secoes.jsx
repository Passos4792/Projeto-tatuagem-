import { artistas, cuidados, estilos, estudio, precos } from '../data'
import { desenhos, Rosa, Serpente, Adaga } from './Flash'

export function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="container hero__grid">
        <div className="hero__texto">
          <p className="eyebrow">Estúdio autoral · São Paulo · desde 2014</p>
          <h1>
            Arte que fica<br />
            <em>na pele.</em>
          </h1>
          <p className="hero__lead">
            Tatuagens exclusivas desenhadas para o seu corpo e a sua história.
            Fine line, blackwork, old school e realismo com biossegurança total.
          </p>
          <div className="hero__acoes">
            <a href="#agendar" className="btn">Agendar orçamento</a>
            <a href="#portfolio" className="btn btn--ghost">Ver portfólio</a>
          </div>
          <ul className="stats">
            <li><strong>+4.800</strong><span>tatuagens feitas</span></li>
            <li><strong>4</strong><span>artistas residentes</span></li>
            <li><strong>4,9★</strong><span>no Google</span></li>
          </ul>
        </div>
        <div className="hero__arte" aria-hidden="true">
          <div className="hero__circulo">
            <Rosa className="hero__rosa" />
          </div>
          <Serpente className="hero__mini hero__mini--a" />
          <Adaga className="hero__mini hero__mini--b" />
        </div>
      </div>
      <div className="faixa" aria-hidden="true">
        <div className="faixa__trilho">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              Fine Line ✦ Blackwork ✦ Old School ✦ Realismo ✦ Cover-up ✦ Lettering ✦ Piercing ✦&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Estilos() {
  return (
    <section className="secao" id="estilos">
      <div className="container">
        <header className="secao__topo">
          <p className="eyebrow">01 — Especialidades</p>
          <h2>Um estilo para cada história</h2>
        </header>
        <div className="estilos">
          {estilos.map((e, i) => (
            <article key={e.id} className="estilo">
              <span className="estilo__num">0{i + 1}</span>
              <h3>{e.nome}</h3>
              <p>{e.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Artistas() {
  return (
    <section className="secao secao--alt" id="artistas">
      <div className="container">
        <header className="secao__topo">
          <p className="eyebrow">03 — Equipe</p>
          <h2>Quem segura a máquina</h2>
        </header>
        <div className="artistas">
          {artistas.map((a) => {
            const Desenho = desenhos[a.desenho]
            return (
              <article key={a.nome} className="artista">
                <div className="artista__foto">
                  <Desenho />
                  <span className="artista__anos">{a.anos} anos de traço</span>
                </div>
                <h3>{a.nome}</h3>
                <p className="artista__papel">{a.papel}</p>
                <p>{a.bio}</p>
                <span className="artista__insta">{a.insta}</span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Precos() {
  return (
    <section className="secao" id="precos">
      <div className="container">
        <header className="secao__topo">
          <p className="eyebrow">04 — Investimento</p>
          <h2>Preços transparentes</h2>
          <p className="secao__sub">Valores de referência. O orçamento final depende de tamanho, região e detalhamento.</p>
        </header>
        <div className="precos">
          {precos.map((p) => (
            <article key={p.nome} className={`preco ${p.destaque ? 'preco--destaque' : ''}`}>
              {p.destaque && <span className="preco__tag">Mais pedido</span>}
              <h3>{p.nome}</h3>
              <p className="preco__tam">{p.tamanho}</p>
              <p className="preco__valor">{p.valor}</p>
              <ul>
                {p.itens.map((it) => <li key={it}>{it}</li>)}
              </ul>
              <a href="#agendar" className={`btn ${p.destaque ? '' : 'btn--ghost'}`}>Quero orçamento</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Cuidados() {
  return (
    <section className="secao secao--alt" id="cuidados">
      <div className="container cuidados">
        <header className="secao__topo">
          <p className="eyebrow">06 — Pós-tattoo</p>
          <h2>Cuidados para cicatrizar bem</h2>
          <p className="secao__sub">Uma boa cicatrização é metade do resultado. Siga o passo a passo:</p>
        </header>
        <ol className="cuidados__lista">
          {cuidados.map((c) => (
            <li key={c.t}>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Rodape() {
  const ano = new Date().getFullYear()
  return (
    <footer className="rodape" id="contato">
      <div className="container rodape__grid">
        <div>
          <a href="#topo" className="logo">
            <span className="logo__mark" aria-hidden="true">✦</span>
            {estudio.nome}
            <small>tattoo studio</small>
          </a>
          <p className="rodape__slogan">{estudio.slogan}</p>
        </div>
        <div>
          <h4>Visite</h4>
          <p>{estudio.endereco}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(estudio.endereco)}`}
            target="_blank"
            rel="noreferrer"
          >
            Abrir no mapa →
          </a>
        </div>
        <div>
          <h4>Horário</h4>
          <ul className="horario">
            {estudio.horario.map((h) => (
              <li key={h.dia}><span>{h.dia}</span><span>{h.hora}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <p><a href={`https://wa.me/${estudio.whatsapp}`} target="_blank" rel="noreferrer">{estudio.telefone}</a></p>
          <p><a href={`mailto:${estudio.email}`}>{estudio.email}</a></p>
          <p>{estudio.instagram}</p>
        </div>
      </div>
      <div className="container rodape__base">
        <span>© {ano} {estudio.nome} Tattoo Studio. Projeto acadêmico.</span>
        <span>Feito com React + Vite · hospedado na Vercel</span>
      </div>
    </footer>
  )
}
