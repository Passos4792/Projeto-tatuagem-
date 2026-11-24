import { useEffect, useState } from 'react'
import { estilos, portfolio } from '../data'
import { desenhos } from './Flash'

const nomeEstilo = Object.fromEntries(estilos.map((e) => [e.id, e.nome]))

export default function Portfolio() {
  const [filtro, setFiltro] = useState('todos')
  const [aberta, setAberta] = useState(null)

  const itens = filtro === 'todos' ? portfolio : portfolio.filter((p) => p.estilo === filtro)

  useEffect(() => {
    if (!aberta) return
    const onKey = (e) => e.key === 'Escape' && setAberta(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [aberta])

  const DesenhoAberto = aberta ? desenhos[aberta.desenho] : null

  return (
    <section className="secao" id="portfolio">
      <div className="container">
        <header className="secao__topo">
          <p className="eyebrow">02 — Portfólio</p>
          <h2>Trabalhos recentes</h2>
        </header>

        <div className="filtros" role="tablist" aria-label="Filtrar por estilo">
          {[{ id: 'todos', nome: 'Todos' }, ...estilos].map((e) => (
            <button
              key={e.id}
              role="tab"
              aria-selected={filtro === e.id}
              className={`filtro ${filtro === e.id ? 'filtro--ativo' : ''}`}
              onClick={() => setFiltro(e.id)}
            >
              {e.nome}
            </button>
          ))}
        </div>

        <div className="galeria">
          {itens.map((p) => {
            const Desenho = desenhos[p.desenho]
            return (
              <button key={p.titulo} className="peca" onClick={() => setAberta(p)}>
                <Desenho className="peca__arte" />
                <span className="peca__info">
                  <strong>{p.titulo}</strong>
                  <small>{nomeEstilo[p.estilo]} · {p.artista}</small>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {aberta && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={aberta.titulo} onClick={() => setAberta(null)}>
          <div className="modal__caixa" onClick={(e) => e.stopPropagation()}>
            <button className="modal__fechar" aria-label="Fechar" onClick={() => setAberta(null)}>×</button>
            <DesenhoAberto className="modal__arte" />
            <div>
              <p className="eyebrow">{nomeEstilo[aberta.estilo]}</p>
              <h3>{aberta.titulo}</h3>
              <dl className="modal__dados">
                <dt>Artista</dt><dd>{aberta.artista}</dd>
                <dt>Região</dt><dd>{aberta.local}</dd>
              </dl>
              <a href="#agendar" className="btn" onClick={() => setAberta(null)}>Quero uma parecida</a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
